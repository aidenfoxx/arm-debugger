const fs = require('fs');

let fileIndex = 0;
const buffer = new Uint32Array(0x11111111);

for (let i = 0; i <= 0xFFFFFFFF; i++) {
  // Split into 15 files
  if (i && i % 0x11111111 === 0) {
    fs.appendFileSync(`generated/inst-${fileIndex}.dat`, buffer, 'hex');
    fileIndex++;
  }

  buffer.set([i], i % 0x11111111);
}

console.log('Generated instructions...');
