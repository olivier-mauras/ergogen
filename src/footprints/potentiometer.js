// PTV09A Potentiometer
//
// Nets
//    A: corresponds to pin 1 (should be GND)
//    B: corresponds to pin 2 (data pin)
//    C: corresponds to pin 3 (should be VCC)

module.exports = {
    params: {
        designator: 'POT',
        A: undefined,
        B: undefined,
        C: undefined
    },
    body: p => `
        (module PTV09A (layer F.Cu) (tedit 5A3D4993)

            ${p.at /* parametric position */}
        
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 -10.15) (layer F.SilkS) 
                ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
            (fp_text value "" (at 0 5.15) (layer F.Fab)
                (effects (font (size 1 1) (thickness 0.15))))

            ${''/* component outline */}
            (fp_line (start -6.64 0.861) (end -6.64 1.62) (layer "F.SilkS") (width 0.12))
            (fp_line (start 1.735 -4.98) (end 5.6 -4.98) (layer "F.SilkS") (width 0.12))
            (fp_line (start 5.6 -4.98) (end 5.6 4.96) (layer "F.SilkS") (width 0.12))
            (fp_line (start -6.64 -4.98) (end -2.775 -4.98) (layer "F.SilkS") (width 0.12))
            (fp_line (start -6.64 -1.639) (end -6.64 -0.88) (layer "F.SilkS") (width 0.12))
            (fp_line (start -6.64 3.36) (end -6.64 4.96) (layer "F.SilkS") (width 0.12))
            (fp_line (start -6.64 -4.98) (end -6.64 -3.381) (layer "F.SilkS") (width 0.12))
            (fp_line (start 1.735 4.96) (end 5.6 4.96) (layer "F.SilkS") (width 0.12))
            (fp_line (start -6.64 4.96) (end -2.775 4.96) (layer "F.SilkS") (width 0.12))
            (fp_circle (center 0 0) (end 3 0) (layer "F.SilkS") (width 0.12))
            (fp_line (start 5.73 -6.66) (end -8.67 -6.66) (layer "F.CrtYd") (width 0.05))
            (fp_line (start 5.73 6.64) (end 5.73 -6.66) (layer "F.CrtYd") (width 0.05))
            (fp_line (start -8.67 6.64) (end 5.73 6.64) (layer "F.CrtYd") (width 0.05))
            (fp_line (start -8.67 -6.66) (end -8.67 6.64) (layer "F.CrtYd") (width 0.05))
            (fp_line (start 5.48 -4.86) (end -6.52 -4.86) (layer "F.Fab") (width 0.1))
            (fp_line (start -6.52 -4.86) (end -6.52 4.84) (layer "F.Fab") (width 0.1))
            (fp_line (start -6.52 4.84) (end 5.48 4.84) (layer "F.Fab") (width 0.1))
            (fp_line (start 5.48 4.84) (end 5.48 -4.86) (layer "F.Fab") (width 0.1))

            ${''/* pin names */}
            (pad "1" thru_hole circle (at -7.52 2.49 ${p.rot}) (size 1.8 1.8) (drill 1) (layers *.Cu *.Mask) ${p.A.str})
            (pad "2" thru_hole circle (at -7.52 -0.01 180) (size 1.8 1.8) (drill 1) (layers *.Cu *.Mask) ${p.B.str})
            (pad "3" thru_hole circle (at -7.52 -2.51 180) (size 1.8 1.8) (drill 1) (layers *.Cu *.Mask) ${p.C.str})       

            ${''/* Legs */}
            (pad "" np_thru_hole circle (at -0.52 -4.41 ${p.rot}) (size 4 4) (drill 2) (layers *.Cu *.Mask) )
            (pad "" np_thru_hole circle (at -0.52 4.39 ${p.rot}) (size 4 4) (drill 2) (layers *.Cu *.Mask) )
        )
    `
}
