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

//Ammo
    event.recipes.gtceu.assembler('ammo_9_mm')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(0)
        .itemOutputs('25x pointblank:ammo9mm')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_12_gauge')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'minecraft:paper', '9x gtceu:steel_round')
        .circuit(1)
        .itemOutputs('25x pointblank:ammo12gauge')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_45_acp')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(3)
        .itemOutputs('25x pointblank:ammo45acp')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_46')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(4)
        .itemOutputs('25x pointblank:ammo46')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_50_ae')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(5)
        .itemOutputs('25x pointblank:ammo50ae')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_50_bmg')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(6)
        .itemOutputs('25x pointblank:ammo50bmg')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_57')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(7)
        .itemOutputs('25x pointblank:ammo57')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_68')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(8)
        .itemOutputs('25x pointblank:ammo68')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_338_lapua')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(9)
        .itemOutputs('25x pointblank:ammo338lapua')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_357')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(10)
        .itemOutputs('25x pointblank:ammo357')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_545')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(11)
        .itemOutputs('25x pointblank:ammo545')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_556')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(12)
        .itemOutputs('25x pointblank:ammo556')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_762')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(13)
        .itemOutputs('25x pointblank:ammo762')
        .EUt(lv/2)
        .duration(sec*30)

    event.recipes.gtceu.assembler('ammo_762x51')
        .itemInputs('minecraft:gunpowder', 'gtceu:brass_plate', 'gtceu:lead_round')
        .circuit(14)
        .itemOutputs('25x pointblank:ammo762x51')
        .EUt(lv/2)
        .duration(sec*30)
})