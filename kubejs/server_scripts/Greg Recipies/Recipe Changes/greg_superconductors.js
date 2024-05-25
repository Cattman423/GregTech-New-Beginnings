ServerEvents.recipes(event => {
    function mixer(id, circuit, input, output, time, power){
        event.recipes.gtceu.mixer(id)
            .circuit(circuit)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(time)
            .EUt(power)
    }
    function mixerspace(id, circuit, input, output, time, power){
        event.recipes.gtceu.mixer(id)
            .circuit(circuit)
            .itemInputs(input)
            .itemOutputs(output)
            .biome('ad_astra:orbit')
            .duration(time)
            .EUt(power)
    }
    mixer('restone_alloy', 16, ['minecraft:redstone', 'gtceu:silicon_dust', 'gtceu:carbon_dust'], 'gtceu:redstone_alloy_dust', 800, 48)
    mixerspace('flux_space', 16, ['64x minecraft:redstone', 'gtceu:obsidian_dust', '6x gtceu:desh_dust'], 'gtceu:flux_dust', 400, 480)
})