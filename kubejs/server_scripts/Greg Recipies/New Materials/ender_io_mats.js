ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('copper_alloy')
        .circuit(16)
        .itemInputs('gtceu:copper_dust', 'gtceu:silicon_dust')
        .itemOutputs('2x gtceu:copper_alloy_dust')
        .duration(sec*20)
        .EUt(lv)

    event.recipes.gtceu.mixer('energetic_alloy')
        .circuit(16)
        .itemInputs('minecraft:redstone', 'gtceu:gold_dust', 'minecraft:glowstone_dust')
        .itemOutputs('3x gtceu:energetic_alloy_dust')
        .duration(sec*20)
        .EUt(lv)

    event.recipes.gtceu.mixer('vibrant_alloy')
        .circuit(16)
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .itemOutputs('2x gtceu:vibrant_alloy_dust')
        .duration(sec*20)
        .EUt(lv)

    event.recipes.gtceu.mixer('redstone_alloy')
        .circuit(16)
        .itemInputs('minecraft:redstone', 'gtceu:silicon_dust', 'gtceu:carbon_dust')
        .itemOutputs('3x gtceu:redstone_alloy_dust')
        .duration(sec*20)
        .EUt(lv)

    event.recipes.gtceu.mixer('conductive_alloy')
        .circuit(16)
        .itemInputs('gtceu:copper_alloy_dust', 'gtceu:iron_dust', 'minecraft:redstone')
        .itemOutputs('3x gtceu:conductive_alloy_dust')
        .duration(sec*20)
        .EUt(lv)

    event.recipes.gtceu.mixer('pulsating_alloy')
        .circuit(16)
        .itemInputs('gtceu:ender_pearl_dust', 'gtceu:iron_dust')
        .itemOutputs('2x gtceu:pulsating_alloy_dust')
        .duration(sec*20)
        .EUt(lv)

    event.recipes.gtceu.mixer('dark_steel')
        .circuit(16)
        .itemInputs('gtceu:steel_dust', 'gtceu:carbon_dust', 'gtceu:obsidian_dust')
        .itemOutputs('3x gtceu:dark_steel_dust')
        .duration(sec*20)
        .EUt(mv)

    event.recipes.gtceu.mixer('soularium')
        .circuit(16)
        .itemInputs('gtceu:gold_dust', 'gtceu:carbon_dust', 'minecraft:soul_sand')
        .itemOutputs('3x gtceu:soularium_dust')
        .duration(sec*20)
        .EUt(mv)

    event.recipes.gtceu.mixer('end_steel')
        .circuit(16)
        .itemInputs('gtceu:endstone_dust', 'gtceu:dark_steel_dust', 'gtceu:obsidian_dust')
        .itemOutputs('3x gtceu:end_steel_dust')
        .duration(sec*20)
        .EUt(hv)
})