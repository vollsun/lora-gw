//SX1276 Internal registers Addres
module.exports = {
LR_RegFifo                       0x00
LR_RegOpMode                     0x01
LR_RegBitrateMsb                 0x02
LR_RegBitrateLsb                 0x03
LR_RegFdevMsb                    0x04
LR_RegFdMsb                      0x05
LR_RegFrMsb                      0x06
LR_RegFrMid                      0x07
LR_RegFrLsb                      0x08
LR_RegPaConfig                   0x09
LR_RegPaRamp                     0x0A
LR_RegOcp                        0x0B
LR_RegLna                        0x0C
LR_RegFifoAddrPtr                0x0D
LR_RegFifoTxBaseAddr             0x0E
LR_RegFifoRxBaseAddr             0x0F
LR_RegFifoRxCurrentaddr          0x10
LR_RegIrqFlagsMask               0x11
LR_RegIrqFlags                   0x12
LR_RegRxNbBytes                  0x13
LR_RegRxHeaderCntValueMsb        0x14
LR_RegRxHeaderCntValueLsb        0x15
LR_RegRxPacketCntValueMsb        0x16
LR_RegRxPacketCntValueLsb        0x17
LR_RegModemStat                  0x18
LR_RegPktSnrValue                0x19
LR_RegPktRssiValue               0x1A
LR_RegRssiValue                  0x1B
LR_RegHopChannel                 0x1C
LR_RegModemConfig1               0x1D
LR_RegModemConfig2               0x1E
LR_RegSymbTimeoutLsb             0x1F
LR_RegPreambleMsb                0x20
LR_RegPreambleLsb                0x21
LR_RegPayloadLength              0x22
LR_RegMaxPayloadLength           0x23
LR_RegHopPeriod                  0x24
LR_RegFifoRxByteAddr             0x25
LR_RegModemConfig3               0x26
REG_LR_DIOMAPPING1               0x40
REG_LR_DIOMAPPING2               0x41
REG_LR_VERSION                   0x42
REG_LR_PLLHOP                    0x44
REG_LR_TCXO                      0x4B
REG_LR_PADAC                     0x4D
REG_LR_FORMERTEMP                0x5B
REG_LR_AGCREF                    0x61
REG_LR_AGCTHRESH1                0x62
REG_LR_AGCTHRESH2                0x63
REG_LR_AGCTHRESH3                0x64
}