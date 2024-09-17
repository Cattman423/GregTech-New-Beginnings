ServerEvents.recipes(event => {
    function alloysmelt(id, input_a, input_b, output, time, eu) {
        event.recipes.gtceu.alloy_smelter(id)
            .itemInputs(input_a, input_b)
            .itemOutputs(output)
            .duration(time)
            .EUt(eu)
    }
    alloysmelt('ferro_boron_a', 'gtceu:boron_ingot', '4x gtceu:steel_ingot', '5x gtceu:ferroboron_ingot', sec*30, mv)
    alloysmelt('ferro_boron_b', 'gtceu:boron_dust', '4x gtceu:steel_ingot', '5x gtceu:ferroboron_ingot', sec*30, mv)
    alloysmelt('ferro_boron_c', 'gtceu:boron_ingot', '4x gtceu:steel_dust', '5x gtceu:ferroboron_ingot', sec*30, mv)
    alloysmelt('ferro_boron_d', 'gtceu:boron_dust', '4x gtceu:steel_dust', '5x gtceu:ferroboron_ingot', sec*30, mv)

    event.recipes.gtceu.mixer('tough_alloy_dust')
        .itemInputs('gtceu:ferroboron_dust', 'gtceu:lithium_dust')
        .circuit(12)
        .itemOutputs('2x gtceu:tough_alloy_dust')
        .duration(sec*20)
        .EUt(mv)

    event.recipes.gtceu.forming_press('hard_carbon')
        .itemInputs('gtceu:graphene_dust', 'minecraft:diamond')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('2x gtceu:hard_carbon_ingot')
        .duration(min*3)
        .EUt(hv)

    event.recipes.gtceu.mixer('extreme_dust')
        .itemInputs('gtceu:tough_alloy_dust', 'gtceu:hard_carbon_dust')
        .circuit(12)
        .itemOutputs('2x gtceu:extreme_dust')
        .duration(sec*20)
        .EUt(hv)
})