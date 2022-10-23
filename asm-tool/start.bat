analyzeHeadless.bat . decode.gpr -import decode.dat -processor ARM:LE:32:v4t -deleteProject -noanalysis -scriptPath src -postScript InstructionDecode.java %*
