// Adafruit ItsyBitsy Backpack
module.exports = {
  nets: {
    BAT: 'BAT',
    GND: 'GND',
    USB: 'USB',
    T1: 'T1',
    T2: 'T2',
  },
  params: {
    class: 'MCU',
    side: 'F'
  },
  body: p => `
      (module "Adafruit ItsyBitsy Backpack" (layer "F.Cu") (generator pcbnew)
      ${ p.at /* parametric position */ }

      ${ ``/* Silkscreen */ }
      (fp_line (start 5.413792 8.372036) (end -6.016208 8.372036) (layer "F.SilkS") (width 0.05) (tstamp 076a8272-bd39-41fd-a47e-7bb22dfb34f2))
      (fp_line (start -6.016208 -6.867964) (end 5.413792 -6.867964) (layer "F.SilkS") (width 0.05) (tstamp 4cb71db4-4f8a-40fa-b667-141b413d58a7))
      (fp_line (start 2.746792 -1.914964) (end 2.746792 -6.740964) (layer "F.SilkS") (width 0.254) (tstamp 61636ab4-9fc6-472e-99d2-3704d83dc8d2))
      (fp_line (start 0.460792 -1.914964) (end 2.746792 -1.914964) (layer "F.SilkS") (width 0.254) (tstamp 8de04f54-872e-4fe0-91d1-2be330b55134))
      (fp_line (start 2.746792 -6.740964) (end 0.460792 -6.740964) (layer "F.SilkS") (width 0.254) (tstamp cb71d32e-69f9-4aed-aa5e-3c90636c06fe))
      (fp_line (start 7.953792 -4.327964) (end 7.953792 5.832036) (layer "F.SilkS") (width 0.05) (tstamp d7889e06-1957-4152-946e-0e60daddb1d2))
      (fp_line (start -8.556208 5.832036) (end -8.556208 -4.327964) (layer "F.SilkS") (width 0.05) (tstamp dc85d04a-d6dd-463e-bb89-b26a1ef6561b))
      (fp_line (start 0.460792 -6.740964) (end 0.460792 -1.914964) (layer "F.SilkS") (width 0.254) (tstamp fb1ae546-8d8a-4ac1-a555-558e14228cc4))
      (fp_line (start 5.413792 -6.867964) (end 7.953792 -4.327964) (layer "F.SilkS") (width 0.05) (tstamp 0da9d90d-d657-4396-8fbb-6b8fd67ebbc5))
      (fp_line (start -6.016208 8.372036) (end -8.556208 5.832036) (layer "F.SilkS") (width 0.05) (tstamp 5087b3f6-916a-400c-99f5-e4bf916e2288))
      (fp_line (start -8.556208 -4.327964) (end -6.016208 -6.867964) (layer "F.SilkS") (width 0.05) (tstamp 5a6680ba-67f2-49e2-8417-00fbb317e4f5))
      (fp_line (start 7.953792 5.832036) (end 5.413792 8.372036) (layer "F.SilkS") (width 0.05) (tstamp b67f4a31-ec07-4e77-ac08-8948c9ad87a7))

      ${ ``/* Pads */ }
      (pad "1" thru_hole circle (at 1.603792 -3.057964 180) (size 1.778 1.778) (drill 1) (layers *.Cu *.Mask) ${ p.net.T1.str })
      (pad "2" thru_hole circle (at 1.603792 -5.597964 180) (size 1.778 1.778) (drill 1) (layers *.Cu *.Mask) ${ p.net.T2.str })
      (pad "5V" thru_hole circle (at -0.936208 -5.597964 270) (size 1.9304 1.9304) (drill 1) (layers *.Cu *.Mask) ${ p.net.USB.str })
      (pad "BAT" thru_hole circle (at -6.016208 -5.597964 270) (size 1.9304 1.9304) (drill 1) (layers *.Cu *.Mask) ${ p.net.BAT.str })
      (pad "G" thru_hole circle (at -3.476208 -5.597964 270) (size 1.9304 1.9304) (drill 1) (layers *.Cu *.Mask) ${ p.net.GND.str })
  )`
}
