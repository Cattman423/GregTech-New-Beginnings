ServerEvents.recipes(event => {
//Steam machines
    function solarboiler(output, plate, pipe, hull){
        event.recipes.create.mechanical_crafting(output, [
            'AAAAA',
            'BBBBB',
            'CCCCC',
            'CDEDC'
        ], {
            A: 'minecraft:glass',
            B: 'gtceu:double_silver_plate',
            C: plate,
            D: pipe,
            E: hull
        })
    }
//Poor steel
    event.recipes.create.mixing(
        ['2x gtceu:poor_steel_ingot'], 
        ['2x minecraft:iron_ingot', '2x minecraft:coal']
        ).heatRequirement('heated')
    event.recipes.create.pressing(
        'gtceu:wrought_iron',
        'gtceu:poor_steel'
    )
    event.replaceInput(
        { input: 'tfmg:cast_iron_ingot' },
        'tfmg:cast_iron_ingot',
        'gtceu:poor_steel_ingot'
        )
    event.replaceInput(
        { input: 'createdeco:industrial_iron_ingot' },
        'createdeco:industrial_iron_ingot',
        'gtceu:poor_steel_ingot'
        )
    event.replaceInput(
        { input: 'createdeco:industrial_iron_sheet' },
        'createdeco:industrial_iron_sheet',
        'gtceu:poor_steel_plate'
        )
    event.replaceInput(
        { input: 'createdeco:zinc_sheet' },
        'createdeco:zinc_sheet',
        'gtceu:zinc_plate'
        )
    
//Concrete
    event.recipes.create.mixing(
        [Fluid.of(('gtceu:concrete'), 1000)], 
        ['2x gtceu:stone_dust', 'gtceu:calcite_dust', 'gtceu:gypsum_dust', Fluid.water(1000)]
        ).heatRequirement('heated')
    event.recipes.create.mixing(
        ['gtceu:firebricks'], 
        ['6x gtceu:firebrick', '2x gtceu:gypsum_dust', Fluid.of(('gtceu:concrete'), 750)]
        ).heatRequirement('heated')
//Misc
    /*event.shapeless(
        Item.of('3x kubejs:treated_wood'), 
        ['4x kubejs:treated_wood_log']
    )
    event.shapeless(
        Item.of('3x kubejs:stripped_treated_wood'), 
        ['4x kubejs:stripped_treated_wood_log']
    )
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        { item: 'kubejs:treated_wood_log' }
      ],
      tool: { tag: 'forge:tools/axes' },
      result: [
        { item: 'kubejs:stripped_treated_wood' },
        { item: 'farmersdelight:tree_bark' }
      ]
    })
    event.recipes.create.deploying('kubejs:stripped_treated_wood', ['kubejs:treated_wood', '#forge:tools/axes']).keepHeldItem()*/
    event.shaped(
        Item.of('kubejs:helmet_core',),
        [' A ', ' B ', '   '],
        {A: '#forge:tools/knives', B: '#forge:leather'})
    event.shaped(
        Item.of('kubejs:chestplate_core',),
        [' A ', 'BBB', ' B '],
        {A: '#forge:tools/knives', B: '#forge:leather'})
    event.shaped(
        Item.of('kubejs:leggings_core',),
        ['BAB', 'B B', '   '],
        {A: '#forge:tools/knives', B: '#forge:leather'})
    event.shaped(
        Item.of('kubejs:boots_core',),
        ['BAB', '   ', '   '],
        {A: '#forge:tools/knives', B: '#forge:leather'})
//Functions
    const bolts = Ingredient.of('#forge:bolts').itemIds
    bolts.forEach( (base) => {
        event.custom({
            type: 'create:cutting',
            ingredients: [
                {
                    item: base.slice(0, -5) + '_rod'
                }
            ],
            results: [
                {
                    item: base,
                    count: 2
                }
            ],
            processingTime: 50
        })
    })
    function milling(output, input){
        event.recipes.create.milling(output, input)
    }
    function splashing(output, input){
        event.recipes.create.splashing(output, input)
    }
    function filling(output, input){
        event.recipes.create.filling(output, input)
    }

    solarboiler('gtceu:lp_steam_solar_boiler', 'gtceu:bronze_plate', 'gtceu:bronze_small_fluid_pipe', 'gtceu:bronze_brick_casing')
    solarboiler('gtceu:hp_steam_solar_boiler', 'gtceu:steel_plate', 'gtceu:steel_small_fluid_pipe', 'gtceu:steel_brick_casing')
    milling('gtceu:clay_dust', 'minecraft:clay_ball')
    milling('4x gtceu:coal_dust', 'gtceu:exquisite_coal_gem')
    milling('gtceu:flint_dust', 'minecraft:flint')
    milling('gtceu:wrought_iron_dust', 'gtceu:wrought_iron_ingot')
    milling('gtceu:lead_dust', 'gtceu:lead_ingot')
    milling('4x gtceu:brick_dust', 'minecraft:bricks')
    milling('gtceu:rose_quartz_dust', '#forge:gems/rose_quartz')
    milling('gtceu:quartz_sand_dust', '#minecraft:sand')
    milling('gtceu:charcoal_dust', 'minecraft:charcoal')
    milling('gtceu:andesite_dust', '#create:stone_types/andesite')
    milling('gtceu:andesite_dust', '#chipped:andesite')
    milling('gtceu:copper_dust', 'minecraft:copper_ingot')
    milling('gtceu:nickel_dust', 'gtceu:nickel_ingot')
    milling('gtceu:bronze_dust', 'gtceu:bronze_ingot')
    milling('4x tfmg:coal_coke_dust', 'gtceu:exquisite_coke_gem')
    milling('gtceu:silver_dust', 'gtceu:silver_ingot')
    milling('2x tfmg:coal_coke_dust', 'gtceu:flawless_coke_gem')
    milling('2x gtceu:coal_dust', 'gtceu:flawless_coal_gem')
    milling('gtceu:brass_dust', 'gtceu:brass_ingot')
    milling('4x gtceu:clay_dust', 'minecraft:clay')
    milling('gtceu:steel_dust', 'gtceu:steel_ingot')
    milling('gtceu:antimony_dust', 'gtceu:antimony_ingot')
    milling('gtceu:brick_dust', 'minecraft:brick')
    milling('gtceu:iron_dust', 'minecraft:iron_ingot')
    milling('gtceu:coal_dust', 'minecraft:coal')
    milling('4x gtceu:rose_quartz_dust', 'gtceu:exquisite_rose_quartz_gem')
    milling('gtceu:invar_dust', 'gtceu:invar_ingot')
    milling('tfmg:coal_coke_dust', 'tfmg:coal_coke')
    milling('gtceu:gold_dust', 'minecraft:gold_ingot')
    milling('gtceu:tin_dust', 'gtceu:tin_ingot')
    milling('gtceu:zinc_dust', 'gtceu:zinc_ingot')
    milling('2x gtceu:rose_quartz_dust', 'gtceu:flawless_rose_quartz_gem')
    milling('gtceu:annealed_copper_dust', 'gtceu:annealed_copper_ingot')
    milling('gtceu:electrum_dust', 'gtceu:electrum_ingot')
    splashing('vintagedelight:oat_dough', 'vintagedelight:raw_oats')
    filling('gtceu:treated_wood_planks', [Fluid.of(('gtceu:creosote'), 100), '#minecraft:planks'])
    filling('kubejs:treated_wood_log', [Fluid.of(('gtceu:creosote'), 100), '#minecraft:logs'])
})