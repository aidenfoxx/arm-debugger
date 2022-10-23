const net = require('node:net');
const readline = require('node:readline');

const SERVER_PORT = 9000;
const SERVER_HOST = '127.0.0.1';

const client = net.createConnection(SERVER_PORT, SERVER_HOST);
const rl = readline.createInterface(process.stdin, process.stdout);

const log = (message) => {
  readline.cursorTo(process.stdout, 0);
  console.log(message);
  rl.prompt(true);
}

const retryFunction = () => {
  setTimeout(() => {
    log('Retrying connection...');
    client.connect(SERVER_PORT, SERVER_HOST);
  }, 2000);
};

client.on('connect', () => {
  log(`Connected...`);
});

client.on('end', () => {
  log('Disconnected...');
  retryFunction();
});

client.on('error', () => {
  retryFunction();
});

client.on('data', (data) => {
  log(`Parsed assembly: ${data.toString()}`);
});

rl.on('line', (input) => {
  input = input.replace(/^0x/, '');
  
  const data = parseInt(input, 16);
  const dataBytes = new Uint8Array([
    data >>24,
    data >>16,
    data >> 8,
    data
  ]);

  log(`Decode instruction: 0x${input}`);

  client.write(dataBytes);
});
