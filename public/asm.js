// asm: http://www.cburch.com/cs/230/arm-ref.pdf
// ref: file:///C:/Users/aiden/Downloads/DDI01001.pdf

function dataRegisterOp(inst) {
  return 'UNDEFINED';
}

function loadStoreImmidiateOp(inst) {
  return 'UNDEFINED';
}

function loadStoreRegisterOp(inst) {
  return 'UNDEFINED';
}

function loadStoreMultipleOp(inst) {
  return 'UNDEFINED';
}

function branchOp(inst) {
  return 'UNDEFINED';
}

function systemOp(inst) {
  return 'UNDEFINED';
}

const conditionAtlas = {
  0x0: 'EQ',
  0x1: 'NE',
  0x2: 'CS',
  0x3: 'CC',
  0x4: 'MI',
  0x5: 'PL',
  0x6: 'VS',
  0x7: 'VC',
  0x8: 'HI',
  0x9: 'LS',
  0xA: 'GE',
  0xB: 'LT',
  0xC: 'GT',
  0xD: 'LE',
  0xE: 'AL',
  0xF: 'INV',
};

const scopeAtlas = {
  0x0: dataImmidiateOp, // TODO: Moved file
  0x1: dataRegisterOp,
  0x2: loadStoreImmidiateOp,
  0x3: loadStoreRegisterOp, // NOTE: ARM9 doesn't care about media
  0x4: loadStoreMultipleOp,
  0x5: branchOp,
  0x6: systemOp,
  0x7: systemOp,
};

const generateASM = (inst) => {
  const cond = inst & 0xF;
  const scope = (inst >> 4) & 0xF;
  
  return scopeAtlas[scope](inst).replace('{cond}', conditionAtlas[cond]);
};

// op1: https://developer.arm.com/documentation/ddi0406/c/Application-Level-Architecture/ARM-Instruction-Set-Encoding/ARM-instruction-set-encoding
