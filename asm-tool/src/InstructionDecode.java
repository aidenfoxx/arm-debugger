import ghidra.app.util.headless.HeadlessScript;

import ghidra.program.disassemble.DisassemblerContextImpl;
import ghidra.program.model.address.Address;
import ghidra.program.model.lang.InstructionPrototype;
import ghidra.program.model.lang.UnknownInstructionException;
import ghidra.program.model.listing.Instruction;
import ghidra.program.model.mem.MemoryBufferImpl;

import sun.misc.Signal; 
import sun.misc.SignalHandler;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketException;
import java.util.ArrayList;

// Referenced: https://git.noc.ruhr-uni-bochum.de/kostea7x/ghidra/-/blob/3a12b5bbe26a88f090d9529f44e811479223c613/Ghidra/Features/Base/src/main/java/ghidra/test/processors/support/ProcessorEmulatorTestAdapter.java
public class InstructionDecode extends HeadlessScript {

  public static final int SERVER_PORT = 9000;

  public static final int MAX_CONNECTION = 10;

  private ArrayList<Socket> connections = new ArrayList();

  @Override
  public void run() throws Exception {
    setHeadlessContinuationOption(HeadlessContinuationOption.ABORT);

    String[] args = getScriptArgs();

    if (args.length == 1) {
      int data;

      try {
        data = Integer.parseInt(args[0].replaceFirst("^0x", ""), 16);
      } catch (NumberFormatException e) {
        System.err.println(String.format("Failed to parse instruction: %s", args[0]));
        return;
      }

      parseInstruction(data);
      return;
    }

    startInstructionServer();
  }

  private void startInstructionServer() throws IOException {
      ServerSocket serverSocket = new ServerSocket(SERVER_PORT);

      Signal.handle(new Signal("INT"), new SignalHandler() {
        public void handle(Signal signal) {
          try {
            for (Socket socket : connections) {
              socket.close();
            }
            serverSocket.close();
          } catch (IOException e) {}
        }
      });

      println(String.format("Server listening on 127.0.0.1:%s", SERVER_PORT));

      while (!serverSocket.isClosed()) {
        Socket socket;

        try {
          socket = serverSocket.accept();
          socket.setKeepAlive(false);

          if (connections.size() >= MAX_CONNECTION) {
            println("Refusing connection...");
            socket.close();
            continue;
          }
        } catch (IOException e) {
          continue;
        }

        println("Client connected...");

        connections.add(socket);
        
        (new Thread() {
          public void run() {
            try {
              DataInputStream input = new DataInputStream(socket.getInputStream());
              PrintWriter output = new PrintWriter(socket.getOutputStream());

              while (!socket.isClosed()) {
                try {
                  String assembly = parseInstruction(input.readInt());
                  output.print(assembly);
                  output.flush();
                } catch (IOException e) {
                  break;
                } catch (Exception e) {
                  System.err.println(e);
                }
              }
            } catch (IOException e) {}

            try {
              socket.close();
            } catch (IOException e) {}

            println("Client disconnected...");

            connections.remove(socket);
          }
        }).start();
      }
  }

  private String parseInstruction(int data) throws Exception {
    println(String.format("Decode instruction: 0x%08x", data));

    Address address = toAddr(0);
    byte[] dataBytes = new byte[] {
      (byte)(data >>> 24),
      (byte)(data >>> 16),
      (byte)(data >>> 8),
      (byte)data
    };

    currentProgram.getListing().clearCodeUnits(address, address, false);
    currentProgram.getMemory().setBytes(address, dataBytes);

    MemoryBufferImpl buffer = new MemoryBufferImpl(currentProgram.getMemory(), address);
    DisassemblerContextImpl context = new DisassemblerContextImpl(currentProgram.getProgramContext());
    
    String assembly = "unknown";

    try {
      InstructionPrototype prototype = currentProgram.getLanguage().parse(buffer, context, false);
      Instruction instruction = currentProgram.getListing().createInstruction(
        address,
        prototype,
        buffer,
        context
      );
      assembly = instruction.toString();
    } catch (UnknownInstructionException e) {} 

    println(String.format("Parsed asssembly: %s", assembly));

    return assembly;
  }
}
