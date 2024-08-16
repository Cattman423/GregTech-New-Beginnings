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

    event.recipes.gtceu.alloy_smelter('gunmetal')
        .itemInputs('5x minecraft:iron_ingot', 'minecraft:copper_ingot')
        .itemOutputs('6x pointblank:gunmetal_ingot')
        .duration(sec*10)
        .EUt(ulv)

    event.shapeless(Item.of('3x pointblank:guninternals'), ['2x gtceu:small_steel_gear', '4x gtceu:small_steel_spring', '2x gtceu:steel_bolt', 'gtceu:steel_plate'])
    event.shapeless(Item.of('pointblank:guninternals'), ['2x gtceu:small_gunmetal_gear', '4x gtceu:small_gunmetal_spring', '2x gtceu:gunmetal_bolt', 'gtceu:gunmetal_plate'])

    event.custom({
        type: 'pointblank:default',
        ingredients: [
            {
                item: 'gtceu:polyethylene_ingot',
                count: 5
            },
            {
                tag: '#forge:lenses/red'
            },
            {
                tag: '#gtceu:circuits:ulv'
            },
            {
                tag: 'gtceu:batteries/lv'
            }
        ],
        results: [
            {
                item: 'pointblank:moa'
            }
        ]
        })
})