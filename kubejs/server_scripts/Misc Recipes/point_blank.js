ServerEvents.recipes(event => {
//Gunpowder line
    event.recipes.gtceu.chemical_reactor('nitrocellulose')
        .circuit(16)
        .itemInputs('5x minecraft:paper')
        .inputFluids('gtceu:nitric_acid 3000', 'gtceu:sulfuric_acid 8000')
        .itemOutputs('5x gtceu:nitrocellulose_ingot')
        .outputFluids('minecraft:water 3000')
        .duration(200)
        .EUt(24)

    event.shapeless(Item.of('pointblank:guninternals'), ['2x gtceu:small_steel_gear', '4x gtceu:small_steel_spring', '2x gtceu:steel_bolt', 'gtceu:steel_plate'])
})