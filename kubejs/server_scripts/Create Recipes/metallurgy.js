ServerEvents.recipes(event => {
    const metalmelt = ['red_alloy', 'wrought_iron', 'lead', 'nickel', 'bronze', 'silver', 'brass', 'steel', 'antimony', 'invar', 'tin', 'zinc', 'annealed_copper', 'electrum', 
        'poor_steel', 'tin_alloy', 'cupronickel', 'blue_alloy', 'rubber', 'potassium', 'boron', 'ferroboron']

    const dustmelt = ['red_alloy', 'wrought_iron', 'lead', 'nickel', 'bronze', 'silver', 'brass', 'steel', 'antimony', 'invar', 'tin', 'zinc', 'annealed_copper', 'electrum', 'iron', 
        'copper', 'gold', 'poor_steel', 'tin_alloy', 'cupronickel', 'blue_alloy', 'rubber', 'gunmetal', 'glass', 'potassium', 'boron', 'ferroboron']


//Machine Recipes
    event.recipes.create.mixing(
        ['createmetallurgy:refractory_mortar'], 
        ['2x #forge:sand', 'minecraft:clay', Fluid.of(('minecraft:water'), 1000)]
    ).heatRequirement('lowheated')

    event.stonecutting('createmetallurgy:graphite_ingot_mold', 'createmetallurgy:graphite_blank_mold')
    event.stonecutting('createmetallurgy:graphite_nugget_mold', 'createmetallurgy:graphite_blank_mold')
    event.stonecutting('createmetallurgy:graphite_gear_mold', 'createmetallurgy:graphite_blank_mold')
    event.stonecutting('kubejs:graphite_small_gear_mold', 'createmetallurgy:graphite_blank_mold')
    event.stonecutting('kubejs:graphite_round_mold', 'createmetallurgy:graphite_blank_mold')
    event.stonecutting('kubejs:graphite_gem_mold', 'createmetallurgy:graphite_blank_mold')

    event.shaped(
        Item.of('createmetallurgy:foundry_basin',),
        ['ACA', 'ABA', 'AAA' ],
        {A: 'gtceu:poor_steel_plate', B: 'createmetallurgy:refractory_mortar', C: '#forge:tools/hammers'})
    event.shaped(
        Item.of('createmetallurgy:foundry_lid',),
        ['   ', 'AAA', 'ABA' ],
        {A: 'gtceu:poor_steel_plate', B: '#forge:tools/wrenches'})
    event.shaped(
        Item.of('createmetallurgy:glassed_foundry_lid',),
        ['   ', 'ACA', 'CBC' ],
        {A: 'gtceu:poor_steel_plate', B: '#forge:tools/wrenches', C: '#forge:glass'})
    event.shaped(
        Item.of('createmetallurgy:casting_basin',),
        ['A A', 'ABA', 'AAA' ],
        {A: 'gtceu:poor_steel_plate', B: '#forge:tools/hammers'})
    event.shaped(
        Item.of('createmetallurgy:casting_table',),
        ['AAA', 'ABA', 'A A' ],
        {A: 'gtceu:poor_steel_plate', B: '#forge:tools/hammers'})
    event.custom({
        type: 'vintageimprovements:pressurizing',
        ingredients: [{item: 'gtceu:graphite_dust'}],
        results: [{item: 'createmetallurgy:graphite_blank_mold'}],
        processingTime: 600
    })
    event.shaped(
        Item.of('createmetallurgy:sturdy_whisk',),
        ['CAD', 'BAB', 'BBB'],
        {A: 'create:shaft', B: 'gtceu:poor_steel_rod', C: '#forge:tools/hammers', D: '#forge:tools/files'})
    event.shaped(
        Item.of('createmetallurgy:foundry_mixer'),
        ['ECF', 'DBD','GAG'],
        {A: 'createmetallurgy:sturdy_whisk', B: 'create:copper_casing', C: 'create:electron_tube', D: 'gtceu:sealed_mechanism',
        E: '#forge:tools/wrenches', F: '#forge:tools/screwdrivers', G: 'gtceu:andesite_alloy_screw'})


//Melting Ingots
    metalmelt.forEach( (base) => {
        event.recipes.createmetallurgy.melting(
            Fluid.of('gtceu:' + base, 144), 
            'gtceu:' + base + '_ingot', 
            sec*5, 
            'heated'
        )
    })
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:iron', 144), 
        'minecraft:iron_ingot', 
        sec*5, 
        'heated'
    )
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:gold', 144), 
        'minecraft:gold_ingot', 
        sec*5, 
        'heated'
    )
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:copper', 144), 
        'minecraft:copper_ingot', 
        sec*5, 
        'heated'
    )
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:gunmetal', 144), 
        'pointblank:gunmetal_ingot', 
        sec*5, 
        'heated'
    )


//Melting Dust
    dustmelt.forEach( (base) => {
        event.recipes.createmetallurgy.melting(
            Fluid.of('gtceu:' + base, 144), 
            'gtceu:' + base + '_dust', 
            90, 
            'heated'
        )
    })


//Melting Glue
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:glue', 100), 
        'gtceu:sticky_resin', 
        sec*1.5, 
        'heated'
    )


//Melting Rose Quartz
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:rose_quartz', 144), 
        'gtceu:rose_quartz_dust', 
        sec*2, 
        'heated'
    )
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:rose_quartz', 144), 
        'create:polished_rose_quartz', 
        sec*2, 
        'heated'
    )
    event.recipes.createmetallurgy.melting(
        Fluid.of('gtceu:rose_quartz', 144), 
        'create:rose_quartz', 
        sec*2, 
        'heated'
    )


//Greg alloys
    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:bronze', 144*4), //output
        [Fluid.of('gtceu:copper', 144*3), Fluid.of('gtceu:tin', 144)], //input
        40, //time
        'lowheated' //heat level
    )
    
    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:bronze', 144*4), 
        [Fluid.of('gtceu:annealed_copper', 144*3), Fluid.of('gtceu:tin', 144)], 
        40, 
        'lowheated'
    )
    
    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:brass', 144*4), 
        [Fluid.of('gtceu:copper', 144*3), Fluid.of('gtceu:zinc', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:brass', 144*4), 
        [Fluid.of('gtceu:annealed_copper', 144*3), Fluid.of('gtceu:zinc', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:electrum', 144*2), 
        [Fluid.of('gtceu:gold', 144), Fluid.of('gtceu:silver', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:invar', 144*3), 
        [Fluid.of('gtceu:iron', 144*2), Fluid.of('gtceu:nickel', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:invar', 144*3), 
        [Fluid.of('gtceu:wrought_iron', 144*2), Fluid.of('gtceu:nickel', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:battery_alloy', 144*5), 
        [Fluid.of('gtceu:lead', 144*4), Fluid.of('gtceu:antimony', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:tin_alloy', 144*2), 
        [Fluid.of('gtceu:iron', 144), Fluid.of('gtceu:tin', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:tin_alloy', 144*2), 
        [Fluid.of('gtceu:wrought_iron', 144), Fluid.of('gtceu:tin', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:cupronickel', 144*2), 
        [Fluid.of('gtceu:copper', 144), Fluid.of('gtceu:nickel', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:cupronickel', 144*2), 
        [Fluid.of('gtceu:annealed_copper', 144), Fluid.of('gtceu:nickel', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:red_alloy', 144/4), 
        [Fluid.of('gtceu:copper', 144/4), 'minecraft:redstone'], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:red_alloy', 144/4), 
        [Fluid.of('gtceu:annealed_copper', 144/4), 'minecraft:redstone'], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:gunmetal', 144*5), 
        [Fluid.of('gtceu:iron', 144*4), Fluid.of('gtceu:copper', 144)], 
        40, 
        'lowheated'
    )
    
    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:gunmetal', 144*5), 
        [Fluid.of('gtceu:wrought_iron', 144*4), Fluid.of('gtceu:copper', 144)], 
        40, 
        'lowheated'
    )
    
    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:gunmetal', 144*5), 
        [Fluid.of('gtceu:iron', 144*4), Fluid.of('gtceu:annealed_copper', 144)], 
        40, 
        'lowheated'
    )
    
    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:gunmetal', 144*5), 
        [Fluid.of('gtceu:wrought_iron', 144*4), Fluid.of('gtceu:annealed_copper', 144)], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:poor_steel', 144*3), 
        [Fluid.of('gtceu:iron', 144*3), 'gtceu:coal_dust'], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:poor_steel', 144*3), 
        [Fluid.of('gtceu:wrought_iron', 144*3), 'gtceu:coal_dust'], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:blue_alloy', 144/4), 
        [Fluid.of('gtceu:silver', 144/4), 'gtceu:electrotine_dust'], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:rubber', 144*3), 
        ['gtceu:sulfur_dust', 'gtceu:raw_rubber_dust', 'gtceu:raw_rubber_dust', 'gtceu:raw_rubber_dust'], 
        40, 
        'lowheated'
    )

    event.recipes.createmetallurgy.alloying(
        Fluid.of('gtceu:glass', 144), 
        ['gtceu:quartz_sand_dust', 'gtceu:tiny_flint_dust'], 
        40, 
        'lowheated'
    )
    
    /*event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{item: 'gtceu:quartz_sand_dust', count: 4}, {item: 'gtceu:small_flint_dust'}],
        processingTime: 140,
        results: [{fluid: 'gtceu:glass', amount: 144*4}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{item: 'gtceu:quartz_sand_dust', count: 9}, {item: 'gtceu:flint_dust'}],
        processingTime: 140,
        results: [{fluid: 'gtceu:glass', amount: 144*9}],
        heatRequirement: 'lowheated'
    })*/


//Ingots
    metalmelt.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_table(
            'gtceu:' + base + '_ingot', 
            [Fluid.of('gtceu:' + base, 144), 'createmetallurgy:graphite_ingot_mold'], 
            sec*2
        )
    })//ingot loop end
    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:iron_ingot', 
        [Fluid.of('gtceu:iron', 144), 'createmetallurgy:graphite_ingot_mold'], 
        sec*2
    )
    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:gold_ingot', 
        [Fluid.of('gtceu:gold', 144), 'createmetallurgy:graphite_ingot_mold'], 
        sec*2
    )
    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:copper_ingot', 
        [Fluid.of('gtceu:copper', 144), 'createmetallurgy:graphite_ingot_mold'], 
        sec*2
    )
    event.recipes.createmetallurgy.casting_in_table(
        'pointblank:gunmetal_ingot', 
        [Fluid.of('gtceu:gunmetal', 144), 'createmetallurgy:graphite_ingot_mold'], 
        sec*2
    )
    event.recipes.createmetallurgy.casting_in_table(
        'tfmg:aluminum_ingot', 
        [Fluid.of('gtceu:wohler_aluminium', 144), 'createmetallurgy:graphite_ingot_mold'], 
        sec*2
    )


//Nuggets
    metalmelt.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_table(
            'gtceu:' + base + '_nugget', 
            [Fluid.of('gtceu:' + base, 144/9), 'createmetallurgy:graphite_nugget_mold'], 
            sec
        )
    })//nugget loop end
    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:iron_nugget', 
        [Fluid.of('gtceu:iron', 144/9), 'createmetallurgy:graphite_nugget_mold'], 
        sec
    )
    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:gold_nugget', 
        [Fluid.of('gtceu:gold', 144/9), 'createmetallurgy:graphite_nugget_mold'], 
        sec
    )
    event.recipes.createmetallurgy.casting_in_table(
        'gtceu:copper_nugget', 
        [Fluid.of('gtceu:copper', 144/9), 'createmetallurgy:graphite_nugget_mold'], 
        sec
    )
    event.recipes.createmetallurgy.casting_in_table(
        'pointblank:gunmetal_nugget', 
        [Fluid.of('gtceu:gunmetal', 144/9), 'createmetallurgy:graphite_nugget_mold'], 
        sec
    )
    event.recipes.createmetallurgy.casting_in_table(
        'gtceu:wohler_aluminium_nugget', 
        [Fluid.of('gtceu:wohler_aluminium', 144/9), 'createmetallurgy:graphite_nugget_mold'], 
        sec
    )


//Blocks
    metalmelt.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_basin(
            'gtceu:' + base + '_block', 
            Fluid.of('gtceu:' + base, 144*9), 
            sec*18
        )
    })//block loop end
    event.recipes.createmetallurgy.casting_in_basin(
        'minecraft:iron_block', 
        Fluid.of('gtceu:iron', 144*9), 
        sec*18
    )
    event.recipes.createmetallurgy.casting_in_basin(
        'minecraft:gold_block', 
        Fluid.of('gtceu:gold', 144*9), 
        sec*18
    )
    event.recipes.createmetallurgy.casting_in_basin(
        'minecraft:copper_block', 
        Fluid.of('gtceu:copper', 144*9), 
        sec*18
    )
    event.recipes.createmetallurgy.casting_in_basin(
        'gtceu:gunmetal_block', 
        Fluid.of('gtceu:gunmetal', 144*9), 
        sec*18
    )
    event.recipes.createmetallurgy.casting_in_basin(
        'minecraft:glass', 
        Fluid.of('gtceu:glass', 144), 
        sec*18
    )
    event.recipes.createmetallurgy.casting_in_basin(
        'tfmg:aluminum_block', 
        Fluid.of('gtceu:wohler_aluminium', 144), 
        sec*18
    )


//Plates
    event.recipes.createmetallurgy.casting_in_table(
        'gtceu:rubber_plate', 
        Fluid.of('gtceu:rubber', 144), 
        sec*6
    )
    event.recipes.createmetallurgy.casting_in_table(
        'gtceu:glass_tube', 
        [Fluid.of('gtceu:glass', 144), 'kubejs:graphite_gem_mold'], 
        sec*4
    )
    event.recipes.createmetallurgy.casting_in_table(
        'minecraft:glass_pane', 
        Fluid.of('gtceu:glass', 144/3), 
        sec*6
    )


//Rounds
    const roundmetal = ['steel', 'iron', 'lead']

    roundmetal.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_table(
            'gtceu:' + base + '_round', 
            [Fluid.of('gtceu:' + base, 144/9), 'kubejs:graphite_round_mold'], 
            sec
        )
    })


//Gears
    const gearmetal = ['wrought_iron', 'bronze', 'steel', 'invar', 'poor_steel', 'rubber', 'iron', 'wohler_aluminium']

    const smallgearmetal = ['bronze', 'brass', 'steel', 'poor_steel', 'iron', 'copper', 'wohler_aluminium']

    gearmetal.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_table(
            'gtceu:' + base + '_gear', 
            [Fluid.of('gtceu:' + base, 144*8), 'createmetallurgy:graphite_gear_mold'], 
            sec*10
        )
    })

    smallgearmetal.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_table(
            'gtceu:small_' + base + '_gear', 
            [Fluid.of('gtceu:' + base, 144*2), 'kubejs:graphite_small_gear_mold'], 
            sec*2
        )
    })


//Gems
    /*const gemcasting = ['']

    gemcasting.forEach( (base) => {
        event.recipes.createmetallurgy.casting_in_table(
            'gtceu:' + base + '_gem', 
            [Fluid.of('gtceu:' + base, 144), 'kubejs:graphite_gem_mold'], 
            sec*2
        )
        event.recipes.createmetallurgy.casting_in_basin(
            'gtceu:' + base + '_block', 
            Fluid.of('gtceu:' + base, 144*9), 
            sec*18
        )
    })*/
    event.recipes.createmetallurgy.casting_in_table(
        'create:rose_quartz', 
        [Fluid.of('gtceu:rose_quartz', 144), 'kubejs:graphite_gem_mold'], 
        sec*2
    )
    event.recipes.createmetallurgy.casting_in_basin(
        'gtceu:rose_quartz_block', 
        Fluid.of('gtceu:rose_quartz', 144*9), 
        sec*18
    )


//Armour
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:helmet_core'}, {fluid: 'gtceu:iron', amount: 144*5}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:iron_helmet'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:chestplate_core'}, {fluid: 'gtceu:iron', amount: 144*8}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:iron_chestplate'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:leggings_core'}, {fluid: 'gtceu:iron', amount: 144*7}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:iron_leggings'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:boots_core'}, {fluid: 'gtceu:iron', amount: 144*4}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:iron_boots'}
    })

    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:helmet_core'}, {fluid: 'gtceu:gold', amount: 144*5}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:golden_helmet'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:chestplate_core'}, {fluid: 'gtceu:gold', amount: 144*8}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:golden_chestplate'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:leggings_core'}, {fluid: 'gtceu:gold', amount: 144*7}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:golden_leggings'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:boots_core'}, {fluid: 'gtceu:gold', amount: 144*4}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'minecraft:golden_boots'}
    })

    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:helmet_core'}, {fluid: 'gtceu:steel', amount: 144*5}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'tfmg:steel_helmet'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:chestplate_core'}, {fluid: 'gtceu:steel', amount: 144*8}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'tfmg:steel_chestplate'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:leggings_core'}, {fluid: 'gtceu:steel', amount: 144*7}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'tfmg:steel_leggings'}
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:boots_core'}, {fluid: 'gtceu:steel', amount: 144*4}],
        processingTime: 40,
        mold_consumed: true,
        result: {item: 'tfmg:steel_boots'}
    })
})