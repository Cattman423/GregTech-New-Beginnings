ServerEvents.recipes(event => {
    event.remove({ mod: 'fluidtank'})
    event.shaped(
        Item.of('fluidtank:tank_wood'),
        [
            'BCB',
            'DAE',
            'BCB'
        ],
        {
            A: '#forge:glass',
            B: 'gtceu:iron_screw',
            C: 'gtceu:iron_ring',
            D: '#forge:tools/wrenches',
            E: '#forge:tools/screwdrivers'
        }
        ) 
    event.recipes.gtceu.assembler('tank_wood')
        .itemInputs(
            '#forge:glass', 
            '2x gtceu:iron_ring'
        )
        .itemOutputs('fluidtank:tank_wood')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_iron'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:iron_screw',
            C: 'gtceu:double_iron_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_iron')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:double_iron_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_iron')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_gold'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:gold_screw',
            C: 'gtceu:double_gold_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_gold')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:double_gold_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_gold')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_diamond'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:diamond_screw',
            C: 'gtceu:diamond_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_diamond')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:diamond_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_diamond')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_stone'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:obsidian_screw',
            C: 'gtceu:dense_obsidian_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_obsidian')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:dense_obsidian_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_stone')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_tin'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:aluminium_screw',
            C: 'gtceu:double_aluminium_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_aluminium')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:double_aluminium_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_tin')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_silver'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:stainless_steel_screw',
            C: 'gtceu:double_stainless_steel_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_stainless_steel')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:double_stainless_steel_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_silver')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_bronze'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:titanium_screw',
            C: 'gtceu:double_titanium_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
        ) 
    event.recipes.gtceu.assembler('tank_titanium')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:double_titanium_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_bronze')
        .duration(160)
        .EUt(24)

    event.shaped(
        Item.of('fluidtank:tank_lead'),
        [
            'BCB',
            'FAF',
            'DCE'
        ],
        {
            A: 'fluidtank:tank_wood',
            B: 'gtceu:tungsten_steel_screw',
            C: 'gtceu:double_tungsten_steel_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: '#forge:glass_panes'
        }
            ) 
    event.recipes.gtceu.assembler('tank_tungsten_steel')
        .circuit(4)
        .itemInputs(
            'fluidtank:tank_wood', 
            'gtceu:double_tungsten_steel_plate'
        )
        .inputFluids('gtceu:glass 144')
        .itemOutputs('fluidtank:tank_lead')
        .duration(160)
        .EUt(24)
})