// Adafruit ItsyBitsy nRF52840 Express
module.exports = {
  nets: {
    BAT: 'BAT',
    GND: 'GND',
    USB: 'USB',
    D13: 'D13',
    D12: 'D12',
    D11: 'D11',
    D10: 'D10',
    D9: 'D9',
    D7: 'D7',
    D5: 'D5',
    SCL: 'SCL',
    SDA: 'SDA',
    TX: 'TX',
    RX: 'RX',
    RST: 'RST',
    V3: '3V',
    EN: 'EN',
    VHI: 'VHI',
    A0: 'A0',
    A1: 'A1',
    A2: 'A2',
    A3: 'A3',
    A4: 'A4',
    A5: 'A5',
    SCK: 'SCK',
    MO: 'MO',
    MI: 'MI',
    D2: 'D2',
  },
  params: {
    class: 'MCU',
    side: 'F'
  },
  body: p => `
      (module "Adafruit ItsyBitsy nRF52840" (layer "F.Cu") (generator pcbnew)
      ${ p.at /* parametric position */ }

      ${ ``/* Silkscreen */ }
      (fp_line (start -7.675 17.4) (end -7.675 -15.62) (layer "F.SilkS") (width 0.05) (tstamp 009b2b44-e650-4ce1-9ee8-67c5b9da2ea7))
      (fp_line (start -1.071 -16.89) (end -0.563 -16.382) (layer "F.SilkS") (width 0.05) (tstamp 380da292-0013-443d-ba49-fb4f1b7f982a))
      (fp_line (start 2.993 -16.382) (end 3.501 -16.89) (layer "F.SilkS") (width 0.05) (tstamp 676c570f-af5c-46d9-884a-f8b5067f8cf4))
      (fp_line (start 8.835 18.67) (end -6.405 18.67) (layer "F.SilkS") (width 0.05) (tstamp 82a033bf-7a35-4521-9976-fc3982b0723c))
      (fp_line (start -0.563 -16.382) (end 2.993 -16.382) (layer "F.SilkS") (width 0.05) (tstamp 90ee47e8-e3e2-4a0f-9467-c23454b14039))
      (fp_line (start -6.405 -16.89) (end -1.071 -16.89) (layer "F.SilkS") (width 0.05) (tstamp aee04c32-465c-494d-8c3a-f93b0696b30b))
      (fp_line (start 3.501 -16.89) (end 8.835 -16.89) (layer "F.SilkS") (width 0.05) (tstamp c7484886-cdac-4785-94ae-b5d64aae8418))
      (fp_line (start 10.105 -15.62) (end 10.105 17.4) (layer "F.SilkS") (width 0.05) (tstamp dbb3501f-cee0-44d7-9af8-88dd586bdcfa))
      (fp_line (start 10.105 17.4) (end 8.835 18.67) (layer "F.SilkS") (width 0.05) (tstamp 4ba84f9f-62dc-4316-9127-e0e92baef49f))
      (fp_line (start 8.835 -16.89) (end 10.105 -15.62) (layer "F.SilkS") (width 0.05) (tstamp 510beea4-50d2-4db2-8252-e5e8ce6b2c9a))
      (fp_line (start -6.405 18.67) (end -7.675 17.4) (layer "F.SilkS") (width 0.05) (tstamp 6b659910-15be-4bb2-a78a-77d8fca0aab9))
      (fp_line (start -7.675 -15.62) (end -6.405 -16.89) (layer "F.SilkS") (width 0.05) (tstamp cedb47fd-9302-4f63-9c87-fbed3d03fc1f))

      ${ ``/* Pads */ }
      (pad "V3" thru_hole circle (at -6.405 -13.08 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.V3.str }) 
      (pad "D5" thru_hole circle (at 8.835 7.24) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D5.str })
      (pad "D7" thru_hole circle (at 8.835 4.7) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D7.str })
      (pad "D9" thru_hole circle (at 8.835 2.16) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D9.str })
      (pad "D10" thru_hole circle (at 8.835 -0.38) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D10.str })
      (pad "D11" thru_hole circle (at 8.835 -2.92) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D11.str })
      (pad "D12" thru_hole circle (at 8.835 -5.46) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D12.str })
      (pad "D13" thru_hole circle (at 8.835 -8) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D13.str })
      (pad "A0" thru_hole circle (at -6.405 -5.46 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.A0.str })
      (pad "A1" thru_hole circle (at -6.405 -2.92 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.A1.str })
      (pad "A2" thru_hole circle (at -6.405 -0.38 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.A2.str })
      (pad "A3" thru_hole circle (at -6.405 2.16 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.A3.str })
      (pad "A4" thru_hole circle (at -6.405 4.7 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.A4.str })
      (pad "A5" thru_hole circle (at -6.405 7.24 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.A5.str })
      (pad "BAT" thru_hole circle (at 8.835 -15.62) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.BAT.str })
      (pad "D2" thru_hole circle (at -6.405 17.4 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.D2.str })
      (pad "EN" thru_hole circle (at -6.405 -10.54 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.EN.str })
      (pad "GND" thru_hole circle (at 8.835 -13.08) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.GND.str })
      (pad "MI" thru_hole circle (at -6.405 14.86 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.MI.str })
      (pad "MO" thru_hole circle (at -6.405 12.32 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.MO.str })
      (pad "RST" thru_hole circle (at -6.405 -15.62 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.RST.str })
      (pad "RX" thru_hole circle (at 8.835 17.4) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.RX.str })
      (pad "SCK" thru_hole circle (at -6.405 9.78 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.SCK.str })
      (pad "SCL" thru_hole circle (at 8.835 9.78) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.SCL.str })
      (pad "SDA" thru_hole circle (at 8.835 12.32) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.SDA.str })
      (pad "TX" thru_hole circle (at 8.835 14.86) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.TX.str })
      (pad "USB" thru_hole circle (at 8.835 -10.54) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.USB.str })
      (pad "VHI" thru_hole circle (at -6.405 -8 180) (size 1.6764 1.6764) (drill 1) (layers *.Cu *.Mask) ${ p.net.VHI.str })
      )`
}
