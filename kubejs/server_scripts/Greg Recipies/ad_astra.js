ServerEvents.recipes(event => {
    event.remove({mod: 'ad_astra_rocketed'})
//Nose Cone
    event.recipes.gtceu.assembler('nose_cone')
        .itemInputs(
            'kubejs:nesn_computer_chip', 
            'kubejs:bls_system', 
            '32x kubejs:thermal_tiles', 
            '4x kubejs:rcs_block', 
            '64x gtceu:aluminium_plate', 
            '4x gtceu:fluid_cell',
            '4x gtceu:quartzite_plate'
        )
        .itemOutputs('ad_astra:rocket_nose_cone')
        .duration(min*30)
        .EUt(hv)
})