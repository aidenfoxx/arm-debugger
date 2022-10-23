// See ref: https://developer.arm.com/documentation/ddi0406/c/Application-Level-Architecture/Instruction-Details/Alphabetical-list-of-instructions/AND--register-?lang=en
// "if Rd == '1111' && S == '1' then SEE SUBS PC, LR and related instructions;"
const dataOp = () => {};
const dataOpLsl = () => {};
const dataOpLslReg = () => {};
const dataOpLsr = (name) => {};
const dataOpLsrReg = (name) => {};
const dataOpAsr = (name) => {};
const dataOpAsrReg = (name) => {};
const dataOpRor = (name) => {};
const dataOpRorReg = (name) => {};
const dataOpRrx = (name) => {};

// 0x0: AND OPS
const AND_OPS = {
  0x0: 'and r0, r0, r0',
  0x1: 'and r0, r0, r0, lsl r0',
  0x2: 'and r0, r0, r0, lsr #32',
  0x3: 'and r0, r0, r0, lsr r0',
  0x4: 'and r0, r0, r0, asr #32',
  0x5: 'and r0, r0, r0, asr r0',
  0x6: 'and r0, r0, r0, rrx',
  0x7: 'and r0, r0, r0, ror r0',
  0x8: 'and r0, r0, r0, lsl #1',
  0x9: 'mul r0, r0, r0',
  0xA: 'and r0, r0, r0, lsr #1',
  0xB: 'strh r0, [r0], -r0',
  0xC: 'and r0, r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0], -r0',
  0xE: 'and r0, r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0], -r0',
};

// 0x1: ANDS OPS
const ANDS_OPS = {
  0x0: 'ands r0, r0, r0',
  0x1: 'ands r0, r0, r0, lsl r0',
  0x2: 'ands r0, r0, r0, lsr #32',
  0x3: 'ands r0, r0, r0, lsr r0',
  0x4: 'ands r0, r0, r0, asr #32',
  0x5: 'ands r0, r0, r0, asr r0',
  0x6: 'ands r0, r0, r0, rrx',
  0x7: 'ands r0, r0, r0, ror r0',
  0x8: 'ands r0, r0, r0, lsl #1',
  0x9: 'muls r0, r0, r0',
  0xA: 'ands r0, r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0], -r0',
  0xC: 'ands r0, r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0], -r0',
  0xE: 'ands r0, r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0], -r0',
};

// 0x2: EOR OPS
const EOR_OPS = {
  0x0: 'eor r0, r0, r0',
  0x1: 'eor r0, r0, r0, lsl r0',
  0x2: 'eor r0, r0, r0, lsr #32',
  0x3: 'eor r0, r0, r0, lsr r0',
  0x4: 'eor r0, r0, r0, asr #32',
  0x5: 'eor r0, r0, r0, asr r0',
  0x6: 'eor r0, r0, r0, rrx',
  0x7: 'eor r0, r0, r0, ror r0',
  0x8: 'eor r0, r0, r0, lsl #1',
  0x9: 'mla r0, r0, r0, r0',
  0xA: 'eor r0, r0, r0, lsr #1',
  0xB: 'strht r0, [r0], -r0',
  0xC: 'eor r0, r0, r0, asr #1',
  0xD: 'unknown',
  0xE: 'eor r0, r0, r0, ror #1',
  0xF: 'unknown',
};

// 0x3: EORS OPS
const EORS_OPS = {
  0x0: 'eors r0, r0, r0',
  0x1: 'eors r0, r0, r0, lsl r0',
  0x2: 'eors r0, r0, r0, lsr #32',
  0x3: 'eors r0, r0, r0, lsr r0',
  0x4: 'eors r0, r0, r0, asr #32',
  0x5: 'eors r0, r0, r0, asr r0',
  0x6: 'eors r0, r0, r0, rrx',
  0x7: 'eors r0, r0, r0, ror r0',
  0x8: 'eors r0, r0, r0, lsl #1',
  0x9: 'mlas r0, r0, r0, r0',
  0xA: 'eors r0, r0, r0, lsr #1',
  0xB: 'ldrht r0, [r0], -r0',
  0xC: 'eors r0, r0, r0, asr #1',
  0xD: 'ldrsbt r0, [r0], -r0',
  0xE: 'eors r0, r0, r0, ror #1',
  0xF: 'ldrsht r0, [r0], -r0',
};

// 0x4: SUB OPS
const SUB_OPS = {
  0x0: 'sub r0, r0, r0',
  0x1: 'sub r0, r0, r0, lsl r0',
  0x2: 'sub r0, r0, r0, lsr #32',
  0x3: 'sub r0, r0, r0, lsr r0',
  0x4: 'sub r0, r0, r0, asr #32',
  0x5: 'sub r0, r0, r0, asr r0',
  0x6: 'sub r0, r0, r0, rrx',
  0x7: 'sub r0, r0, r0, ror r0',
  0x8: 'sub r0, r0, r0, lsl #1',
  0x9: 'umaal r0, r0, r0, r0',
  0xA: 'sub r0, r0, r0, lsr #1',
  0xB: 'strh r0, [r0], #-0',
  0xC: 'sub r0, r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0], #-0',
  0xE: 'sub r0, r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0], #-0',
};

// 0x5: SUBS OPS
const SUBS_OPS = {
  0x0: 'subs r0, r0, r0',
  0x1: 'subs r0, r0, r0, lsl r0',
  0x2: 'subs r0, r0, r0, lsr #32',
  0x3: 'subs r0, r0, r0, lsr r0',
  0x4: 'subs r0, r0, r0, asr #32',
  0x5: 'subs r0, r0, r0, asr r0',
  0x6: 'subs r0, r0, r0, rrx',
  0x7: 'subs r0, r0, r0, ror r0',
  0x8: 'subs r0, r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'subs r0, r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0], #-0',
  0xC: 'subs r0, r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0], #-0',
  0xE: 'subs r0, r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0], #-0',
};

// 0x6: RSB OPS
const RSB_OPS = {
  0x0: 'rsb r0, r0, r0',
  0x1: 'rsb r0, r0, r0, lsl r0',
  0x2: 'rsb r0, r0, r0, lsr #32',
  0x3: 'rsb r0, r0, r0, lsr r0',
  0x4: 'rsb r0, r0, r0, asr #32',
  0x5: 'rsb r0, r0, r0, asr r0',
  0x6: 'rsb r0, r0, r0, rrx',
  0x7: 'rsb r0, r0, r0, ror r0',
  0x8: 'rsb r0, r0, r0, lsl #1',
  0x9: 'mls r0, r0, r0, r0',
  0xA: 'rsb r0, r0, r0, lsr #1',
  0xB: 'strht r0, [r0], #-0',
  0xC: 'rsb r0, r0, r0, asr #1',
  0xD: 'unknown',
  0xE: 'rsb r0, r0, r0, ror #1',
  0xF: 'unknown',
};

// 0x7: RSBS OPS
const RSBS_OPS = {
  0x0: 'rsbs r0, r0, r0',
  0x1: 'rsbs r0, r0, r0, lsl r0',
  0x2: 'rsbs r0, r0, r0, lsr #32',
  0x3: 'rsbs r0, r0, r0, lsr r0',
  0x4: 'rsbs r0, r0, r0, asr #32',
  0x5: 'rsbs r0, r0, r0, asr r0',
  0x6: 'rsbs r0, r0, r0, rrx',
  0x7: 'rsbs r0, r0, r0, ror r0',
  0x8: 'rsbs r0, r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'rsbs r0, r0, r0, lsr #1',
  0xB: 'ldrht r0, [r0], #-0',
  0xC: 'rsbs r0, r0, r0, asr #1',
  0xD: 'ldrsbt r0, [r0], #-0',
  0xE: 'rsbs r0, r0, r0, ror #1',
  0xF: 'ldrsht r0, [r0], #-0',
};

// 0x8: ADD OPS
const ADD_OPS = {
  0x0: 'add r0, r0, r0',
  0x1: 'add r0, r0, r0, lsl r0',
  0x2: 'add r0, r0, r0, lsr #32',
  0x3: 'add r0, r0, r0, lsr r0',
  0x4: 'add r0, r0, r0, asr #32',
  0x5: 'add r0, r0, r0, asr r0',
  0x6: 'add r0, r0, r0, rrx',
  0x7: 'add r0, r0, r0, ror r0',
  0x8: 'add r0, r0, r0, lsl #1',
  0x9: 'umull r0, r0, r0, r0',
  0xA: 'add r0, r0, r0, lsr #1',
  0xB: 'strh r0, [r0], r0',
  0xC: 'add r0, r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0], r0',
  0xE: 'add r0, r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0], r0',
};

// 0x9: ADDS OPS
const ADDS_OPS = {
  0x0: 'adds r0, r0, r0',
  0x1: 'adds r0, r0, r0, lsl r0',
  0x2: 'adds r0, r0, r0, lsr #32',
  0x3: 'adds r0, r0, r0, lsr r0',
  0x4: 'adds r0, r0, r0, asr #32',
  0x5: 'adds r0, r0, r0, asr r0',
  0x6: 'adds r0, r0, r0, rrx',
  0x7: 'adds r0, r0, r0, ror r0',
  0x8: 'adds r0, r0, r0, lsl #1',
  0x9: 'umulls r0, r0, r0, r0',
  0xA: 'adds r0, r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0], r0',
  0xC: 'adds r0, r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0], r0',
  0xE: 'adds r0, r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0], r0',
};

// 0xA: ADC OPS
const ADC_OPS = {
  0x0: 'adc r0, r0, r0',
  0x1: 'adc r0, r0, r0, lsl r0',
  0x2: 'adc r0, r0, r0, lsr #32',
  0x3: 'adc r0, r0, r0, lsr r0',
  0x4: 'adc r0, r0, r0, asr #32',
  0x5: 'adc r0, r0, r0, asr r0',
  0x6: 'adc r0, r0, r0, rrx',
  0x7: 'adc r0, r0, r0, ror r0',
  0x8: 'adc r0, r0, r0, lsl #1',
  0x9: 'umlal r0, r0, r0, r0',
  0xA: 'adc r0, r0, r0, lsr #1',
  0xB: 'strht r0, [r0], r0',
  0xC: 'adc r0, r0, r0, asr #1',
  0xD: 'unknown',
  0xE: 'adc r0, r0, r0, ror #1',
  0xF: 'unknown',
};

// 0xB: ADCS OPS
const ADCS_OPS = {
  0x0: 'adcs r0, r0, r0',
  0x1: 'adcs r0, r0, r0, lsl r0',
  0x2: 'adcs r0, r0, r0, lsr #32',
  0x3: 'adcs r0, r0, r0, lsr r0',
  0x4: 'adcs r0, r0, r0, asr #32',
  0x5: 'adcs r0, r0, r0, asr r0',
  0x6: 'adcs r0, r0, r0, rrx',
  0x7: 'adcs r0, r0, r0, ror r0',
  0x8: 'adcs r0, r0, r0, lsl #1',
  0x9: 'umlals r0, r0, r0, r0',
  0xA: 'adcs r0, r0, r0, lsr #1',
  0xB: 'ldrht r0, [r0], r0',
  0xC: 'adcs r0, r0, r0, asr #1',
  0xD: 'ldrsbt r0, [r0], r0',
  0xE: 'adcs r0, r0, r0, ror #1',
  0xF: 'ldrsht r0, [r0], r0',
};

// 0xC: SBC OPS
const SBC_OPS = {
  0x0: 'sbc r0, r0, r0',
  0x1: 'sbc r0, r0, r0, lsl r0',
  0x2: 'sbc r0, r0, r0, lsr #32',
  0x3: 'sbc r0, r0, r0, lsr r0',
  0x4: 'sbc r0, r0, r0, asr #32',
  0x5: 'sbc r0, r0, r0, asr r0',
  0x6: 'sbc r0, r0, r0, rrx',
  0x7: 'sbc r0, r0, r0, ror r0',
  0x8: 'sbc r0, r0, r0, lsl #1',
  0x9: 'smull r0, r0, r0, r0',
  0xA: 'sbc r0, r0, r0, lsr #1',
  0xB: 'strh r0, [r0], #0',
  0xC: 'sbc r0, r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0], #0',
  0xE: 'sbc r0, r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0], #0',
};

// 0xD: SBCS OPS
const SBCS_OPS = {
  0x0: 'sbcs r0, r0, r0',
  0x1: 'sbcs r0, r0, r0, lsl r0',
  0x2: 'sbcs r0, r0, r0, lsr #32',
  0x3: 'sbcs r0, r0, r0, lsr r0',
  0x4: 'sbcs r0, r0, r0, asr #32',
  0x5: 'sbcs r0, r0, r0, asr r0',
  0x6: 'sbcs r0, r0, r0, rrx',
  0x7: 'sbcs r0, r0, r0, ror r0',
  0x8: 'sbcs r0, r0, r0, lsl #1',
  0x9: 'smulls r0, r0, r0, r0',
  0xA: 'sbcs r0, r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0], #0',
  0xC: 'sbcs r0, r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0], #0',
  0xE: 'sbcs r0, r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0], #0',
};

// 0xE: RSC OPS
const RSC_OPS = {
  0x0: 'rsc r0, r0, r0',
  0x1: 'rsc r0, r0, r0, lsl r0',
  0x2: 'rsc r0, r0, r0, lsr #32',
  0x3: 'rsc r0, r0, r0, lsr r0',
  0x4: 'rsc r0, r0, r0, asr #32',
  0x5: 'rsc r0, r0, r0, asr r0',
  0x6: 'rsc r0, r0, r0, rrx',
  0x7: 'rsc r0, r0, r0, ror r0',
  0x8: 'rsc r0, r0, r0, lsl #1',
  0x9: 'smlal r0, r0, r0, r0',
  0xA: 'rsc r0, r0, r0, lsr #1',
  0xB: 'strht r0, [r0], #0',
  0xC: 'rsc r0, r0, r0, asr #1',
  0xD: 'unknown',
  0xE: 'rsc r0, r0, r0, ror #1',
  0xF: 'unknown',
};

// 0xF: RSCS OPS
const RSCS_OPS = {
  0x0: 'rscs r0, r0, r0',
  0x1: 'rscs r0, r0, r0, lsl r0',
  0x2: 'rscs r0, r0, r0, lsr #32',
  0x3: 'rscs r0, r0, r0, lsr r0',
  0x4: 'rscs r0, r0, r0, asr #32',
  0x5: 'rscs r0, r0, r0, asr r0',
  0x6: 'rscs r0, r0, r0, rrx',
  0x7: 'rscs r0, r0, r0, ror r0',
  0x8: 'rscs r0, r0, r0, lsl #1',
  0x9: 'smlals r0, r0, r0, r0',
  0xA: 'rscs r0, r0, r0, lsr #1',
  0xB: 'ldrht r0, [r0], #0',
  0xC: 'rscs r0, r0, r0, asr #1',
  0xD: 'ldrsbt r0, [r0], #0',
  0xE: 'rscs r0, r0, r0, ror #1',
  0xF: 'ldrsht r0, [r0], #0',
};

// 0x10: MISC OPS
const MISC_OPS_1 = {
  0x0: 'unknown',
  0x1: 'unknown',
  0x2: 'unknown',
  0x3: 'unknown',
  0x4: 'unknown',
  0x5: 'qadd r0, r0, r0',
  0x6: 'unknown',
  0x7: 'unknown',
  0x8: 'smlabb r0, r0, r0, r0',
  0x9: 'swp r0, r0, [r0]',
  0xA: 'smlatb r0, r0, r0, r0',
  0xB: 'strh r0, [r0, -r0]',
  0xC: 'smlabt r0, r0, r0, r0',
  0xD: 'ldrd r0, r1, [r0, -r0]',
  0xE: 'smlatt r0, r0, r0, r0',
  0xF: 'strd r0, r1, [r0, -r0]',
};

// 0x11: TST OPS
const TST_OPS = {
  0x0: 'tst r0, r0',
  0x1: 'tst r0, r0, lsl r0',
  0x2: 'tst r0, r0, lsr #32',
  0x3: 'tst r0, r0, lsr r0',
  0x4: 'tst r0, r0, asr #32',
  0x5: 'tst r0, r0, asr r0',
  0x6: 'tst r0, r0, rrx',
  0x7: 'tst r0, r0, ror r0',
  0x8: 'tst r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'tst r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0, -r0]',
  0xC: 'tst r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0, -r0]',
  0xE: 'tst r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0, -r0]',
};

// 0x12: MISC OPS
const MISC_OPS_2 = {
  0x0: 'unknown',
  0x1: 'unknown',
  0x2: 'unknown',
  0x3: 'unknown',
  0x4: 'unknown',
  0x5: 'qsub r0, r0, r0',
  0x6: 'unknown',
  0x7: 'bkpt #0',
  0x8: 'smlawb r0, r0, r0, r0',
  0x9: 'unknown',
  0xA: 'smulwb r0, r0, r0',
  0xB: 'strh r0, [r0, -r0]!',
  0xC: 'smlawt r0, r0, r0, r0',
  0xD: 'ldrd r0, r1, [r0, -r0]!',
  0xE: 'smulwt r0, r0, r0',
  0xF: 'strd r0, r1, [r0, -r0]!',
};

// 0x13: TEQ OPS
const TEQ_OPS = {
  0x0: 'teq r0, r0',
  0x1: 'teq r0, r0, lsl r0',
  0x2: 'teq r0, r0, lsr #32',
  0x3: 'teq r0, r0, lsr r0',
  0x4: 'teq r0, r0, asr #32',
  0x5: 'teq r0, r0, asr r0',
  0x6: 'teq r0, r0, rrx',
  0x7: 'teq r0, r0, ror r0',
  0x8: 'teq r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'teq r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0, -r0]!',
  0xC: 'teq r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0, -r0]!',
  0xE: 'teq r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0, -r0]!',
};

// 0x14: MISC OPS
const MISC_OPS_3 = {
  0x0: 'mrs r0, spsr',
  0x1: 'unknown',
  0x2: 'unknown',
  0x3: 'unknown',
  0x4: 'unknown',
  0x5: 'qdadd r0, r0, r0',
  0x6: 'unknown',
  0x7: 'hvc #0',
  0x8: 'smlalbb r0, r0, r0, r0',
  0x9: 'swpb r0, r0, [r0]',
  0xA: 'smlaltb r0, r0, r0, r0',
  0xB: 'strh r0, [r0, #-0]',
  0xC: 'smlalbt r0, r0, r0, r0',
  0xD: 'ldrd r0, r1, [r0, #-0]',
  0xE: 'smlaltt r0, r0, r0, r0',
  0xF: 'strd r0, r1, [r0, #-0]',
};

// 0x15: CMP OPS
const CMP_OPS = {
  0x0: 'cmp r0, r0',
  0x1: 'cmp r0, r0, lsl r0',
  0x2: 'cmp r0, r0, lsr #32',
  0x3: 'cmp r0, r0, lsr r0',
  0x4: 'cmp r0, r0, asr #32',
  0x5: 'cmp r0, r0, asr r0',
  0x6: 'cmp r0, r0, rrx',
  0x7: 'cmp r0, r0, ror r0',
  0x8: 'cmp r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'cmp r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0, #-0]',
  0xC: 'cmp r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0, #-0]',
  0xE: 'cmp r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0, #-0]',
};

// 0x16: MISC OPS
const MISC_OPS_4 = {
  0x0: 'unknown',
  0x1: 'unknown',
  0x2: 'unknown',
  0x3: 'unknown',
  0x4: 'unknown',
  0x5: 'qdsub r0, r0, r0',
  0x6: 'unknown',
  0x7: 'smc #0',
  0x8: 'smulbb r0, r0, r0',
  0x9: 'unknown',
  0xA: 'smultb r0, r0, r0',
  0xB: 'strh r0, [r0, #-0]!',
  0xC: 'smulbt r0, r0, r0',
  0xD: 'ldrd r0, r1, [r0, #-0]!',
  0xE: 'smultt r0, r0, r0',
  0xF: 'strd r0, r1, [r0, #-0]!',
};

// 0x17: CMN OPS
const CMN_OPS = {
  0x0: 'cmn r0, r0',
  0x1: 'cmn r0, r0, lsl r0',
  0x2: 'cmn r0, r0, lsr #32',
  0x3: 'cmn r0, r0, lsr r0',
  0x4: 'cmn r0, r0, asr #32',
  0x5: 'cmn r0, r0, asr r0',
  0x6: 'cmn r0, r0, rrx',
  0x7: 'cmn r0, r0, ror r0',
  0x8: 'cmn r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'cmn r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0, #-0]!',
  0xC: 'cmn r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0, #-0]!',
  0xE: 'cmn r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0, #-0]!',
};

// 0x18: ORR OPS
const ORR_OPS = {
  0x0: 'orr r0, r0, r0',
  0x1: 'orr r0, r0, r0, lsl r0',
  0x2: 'orr r0, r0, r0, lsr #32',
  0x3: 'orr r0, r0, r0, lsr r0',
  0x4: 'orr r0, r0, r0, asr #32',
  0x5: 'orr r0, r0, r0, asr r0',
  0x6: 'orr r0, r0, r0, rrx',
  0x7: 'orr r0, r0, r0, ror r0',
  0x8: 'orr r0, r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'orr r0, r0, r0, lsr #1',
  0xB: 'strh r0, [r0, r0]',
  0xC: 'orr r0, r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0, r0]',
  0xE: 'orr r0, r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0, r0]',
};

// 0x19: ORRS OPS
const ORRS_OPS = {
  0x0: 'orrs r0, r0, r0',
  0x1: 'orrs r0, r0, r0, lsl r0',
  0x2: 'orrs r0, r0, r0, lsr #32',
  0x3: 'orrs r0, r0, r0, lsr r0',
  0x4: 'orrs r0, r0, r0, asr #32',
  0x5: 'orrs r0, r0, r0, asr r0',
  0x6: 'orrs r0, r0, r0, rrx',
  0x7: 'orrs r0, r0, r0, ror r0',
  0x8: 'orrs r0, r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'orrs r0, r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0, r0]',
  0xC: 'orrs r0, r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0, r0]',
  0xE: 'orrs r0, r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0, r0]',
};

// 0x1A: SHIFT OPS
const SHIFT_OPS = {
  0x0: 'mov r0, r0',
  0x1: 'lsl r0, r0, r0',
  0x2: 'lsr r0, r0, #0x20',
  0x3: 'lsr r0, r0, r0',
  0x4: 'asr r0, r0, #0x20',
  0x5: 'asr r0, r0, r0',
  0x6: 'rrx r0, r0',
  0x7: 'ror r0, r0, r0',
  0x8: 'lsl r0, r0, #1',
  0x9: 'unknown',
  0xA: 'lsr r0, r0, #1',
  0xB: 'strh r0, [r0, r0]!',
  0xC: 'asr r0, r0, #1',
  0xD: 'ldrd r0, r1, [r0, r0]!',
  0xE: 'ror r0, r0, #1',
  0xF: 'strd r0, r1, [r0, r0]!',
};

// 0x1B: SHIFTS OPS
const SHIFTS_OPS = {
  0x0: 'movs r0, r0',
  0x1: 'lsls r0, r0, r0',
  0x2: 'lsrs r0, r0, #0x20',
  0x3: 'lsrs r0, r0, r0',
  0x4: 'asrs r0, r0, #0x20',
  0x5: 'asrs r0, r0, r0',
  0x6: 'rrxs r0, r0',
  0x7: 'rors r0, r0, r0',
  0x8: 'lsls r0, r0, #1',
  0x9: 'unknown',
  0xA: 'lsrs r0, r0, #1',
  0xB: 'ldrh r0, [r0, r0]!',
  0xC: 'asrs r0, r0, #1',
  0xD: 'ldrsb r0, [r0, r0]!',
  0xE: 'rors r0, r0, #1',
  0xF: 'ldrsh r0, [r0, r0]!',
};

// 0x1C: BIC OPS
const BIC_OPS = {
  0x0: 'bic r0, r0, r0',
  0x1: 'bic r0, r0, r0, lsl r0',
  0x2: 'bic r0, r0, r0, lsr #32',
  0x3: 'bic r0, r0, r0, lsr r0',
  0x4: 'bic r0, r0, r0, asr #32',
  0x5: 'bic r0, r0, r0, asr r0',
  0x6: 'bic r0, r0, r0, rrx',
  0x7: 'bic r0, r0, r0, ror r0',
  0x8: 'bic r0, r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'bic r0, r0, r0, lsr #1',
  0xB: 'strh r0, [r0]',
  0xC: 'bic r0, r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0]',
  0xE: 'bic r0, r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0]',
};

// 0x1D: BICS OPS
const BICS_OPS = {
  0x0: 'bics r0, r0, r0',
  0x1: 'bics r0, r0, r0, lsl r0',
  0x2: 'bics r0, r0, r0, lsr #32',
  0x3: 'bics r0, r0, r0, lsr r0',
  0x4: 'bics r0, r0, r0, asr #32',
  0x5: 'bics r0, r0, r0, asr r0',
  0x6: 'bics r0, r0, r0, rrx',
  0x7: 'bics r0, r0, r0, ror r0',
  0x8: 'bics r0, r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'bics r0, r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0]',
  0xC: 'bics r0, r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0]',
  0xE: 'bics r0, r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0]',
};

// 0x1E: MVN OPS
const MVN_OPS = {
  0x0: 'mvn r0, r0',
  0x1: 'mvn r0, r0, lsl r0',
  0x2: 'mvn r0, r0, lsr #32',
  0x3: 'mvn r0, r0, lsr r0',
  0x4: 'mvn r0, r0, asr #32',
  0x5: 'mvn r0, r0, asr r0',
  0x6: 'mvn r0, r0, rrx',
  0x7: 'mvn r0, r0, ror r0',
  0x8: 'mvn r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'mvn r0, r0, lsr #1',
  0xB: 'strh r0, [r0, #0]!',
  0xC: 'mvn r0, r0, asr #1',
  0xD: 'ldrd r0, r1, [r0, #0]!',
  0xE: 'mvn r0, r0, ror #1',
  0xF: 'strd r0, r1, [r0, #0]!',
};

// 0x1F: MVNS OPS
const MVNS_OPS = {
  0x0: 'mvns r0, r0',
  0x1: 'mvns r0, r0, lsl r0',
  0x2: 'mvns r0, r0, lsr #32',
  0x3: 'mvns r0, r0, lsr r0',
  0x4: 'mvns r0, r0, asr #32',
  0x5: 'mvns r0, r0, asr r0',
  0x6: 'mvns r0, r0, rrx',
  0x7: 'mvns r0, r0, ror r0',
  0x8: 'mvns r0, r0, lsl #1',
  0x9: 'unknown',
  0xA: 'mvns r0, r0, lsr #1',
  0xB: 'ldrh r0, [r0, #0]!',
  0xC: 'mvns r0, r0, asr #1',
  0xD: 'ldrsb r0, [r0, #0]!',
  0xE: 'mvns r0, r0, ror #1',
  0xF: 'ldrsh r0, [r0, #0]!',
};

const MISC_OPS = {
  0x0: AND_OPS,
  0x1: ANDS_OPS,
  0x2: EOR_OPS,
  0x3: EORS_OPS,
  0x4: SUB_OPS,
  0x5: SUBS_OPS,
  0x6: RSB_OPS,
  0x7: RSBS_OPS,
  0x8: ADD_OPS,
  0x9: ADDS_OPS,
  0xA: ADC_OPS,
  0xB: ADCS_OPS,
  0xC: SBC_OPS,
  0xD: SBCS_OPS,
  0xE: RSC_OPS,
  0xF: RSCS_OPS,
  0x10: MISC_OPS_1,
  0x11: TST_OPS,
  0x12: MISC_OPS_2,
  0x13: TEQ_OPS,
  0x14: MISC_OPS_3,
  0x15: CMP_OPS,
  0x16: MISC_OPS_4,
  0x17: CMN_OPS,
  0x18: ORR_OPS,
  0x19: ORRS_OPS,
  0x1A: SHIFT_OPS,
  0x1B: SHIFTS_OPS,
  0x1C: BIC_OPS,
  0x1D: BICS_OPS,
  0x1E: MVN_OPS,
  0x1F: MVNS_OPS,
};

export function parseMiscOp(inst) {
  const op1 = (inst >> 8) & 0x1F;
  const op2 = (inst >> 26) & 0xF;

  return MISC_OPS[op1][op2];
}
