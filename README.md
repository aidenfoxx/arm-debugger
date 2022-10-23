# ARM Debugger

A collection of tools for debugging ARMv4T insturctions to assembly conversion.

## Useful things

ASM Tool:

- `start.(bat|sh)` - Creates a listener on port `9000` which accepts ARM instructions and returns assembly
- `start.(bat|sh) 0x000000E0` - Decodes the supplied instruction

> Note: Requires Ghidra's "analyzeHeadless" executable in your system path.

Helper scripts:

- `node generate` - Generates all possible ARM instructions (15GB total files)
- `node server` - Starts a tool for converting ARM instructions
- `node socket` - Starts a tool for communications with the "ASM Tool" server
