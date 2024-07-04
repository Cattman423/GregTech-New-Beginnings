ServerEvents.recipes(event => {
    const metalmelt = ['red_alloy', 'wrought_iron', 'lead', 'nickel', 'bronze', 'silver', 'brass', 'steel', 'antimony', 'invar', 'tin', 'zinc', 'annealed_copper', 'electrum', 
        'poor_steel', 'tin_alloy', 'cupronickel', 'blue_alloy', 'raw_rubber', 'rubber']

    const dustmelt = ['red_alloy', 'wrought_iron', 'lead', 'nickel', 'bronze', 'silver', 'brass', 'steel', 'antimony', 'invar', 'tin', 'zinc', 'annealed_copper', 'electrum', 'iron', 
        'copper', 'gold', 'poor_steel', 'tin_alloy', 'cupronickel', 'blue_alloy', 'raw_rubber', 'rubber', 'gunmetal', 'glass']
//Machine Recipes
    event.recipes.create.mixing(
        ['createmetallurgy:refractory_mortar'], 
        ['2x #forge:sand', 'minecraft:clay', Fluid.of(('minecraft:water'), 90/90)]
    ).heatRequirement('lowheated')

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
    event.stonecutting('createmetallurgy:graphite_ingot_mold', 'createmetallurgy:graphite_blank_mold')
    event.stonecutting('createmetallurgy:graphite_nugget_mold', 'createmetallurgy:graphite_blank_mold')
    event.shaped(
        Item.of('createmetallurgy:sturdy_whisk',),
        ['CAD', 'BAB', 'BBB'],
        {A: 'create:shaft', B: 'gtceu:poor_steel_rod', C: '#forge:tools/hammers', D: '#forge:tools/files'})
    event.shaped(
        Item.of('createmetallurgy:foundry_mixer'),
        ['ECF', 'DBD','GAG'],
        {A: 'createmetallurgy:sturdy_whisk', B: 'create:copper_casing', C: 'create:electron_tube', D: 'kubejs:sealed_mechanism',
        E: '#forge:tools/wrenches', F: '#forge:tools/screwdrivers', G: 'gtceu:andesite_alloy_screw'})
//Melting Ingots
    metalmelt.forEach( (base) => {
        event.custom({
            type: 'createmetallurgy:melting',
            ingredients: [{item: 'gtceu:' + base + '_ingot'}],
            processingTime: 30,
            results: [{fluid: 'kubejs:' + base, amount: 90}],
            heatRequirement: 'heated'
        })
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'minecraft:iron_ingot'}],
        processingTime: 30,
        results: [{fluid: 'kubejs:iron', amount: 90}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'minecraft:copper_ingot'}],
        processingTime: 30,
        results: [{fluid: 'kubejs:copper', amount: 90}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'minecraft:gold_ingot'}],
        processingTime: 30,
        results: [{fluid: 'kubejs:gold', amount: 90}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'pointblank:gunmetal_ingot'}],
        processingTime: 30,
        results: [{fluid: 'kubejs:gunmetal', amount: 90}],
        heatRequirement: 'heated'
    })
//Melting Dust
    dustmelt.forEach( (base) => {
        event.custom({
            type: 'createmetallurgy:melting',
            ingredients: [{item: 'gtceu:' + base + '_dust'}],
            processingTime: 30,
            results: [{fluid: 'kubejs:' + base, amount: 90}],
            heatRequirement: 'heated'
        })
    })
//Melting Glue
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'gtceu:sticky_resin'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:glue', amount: 100}],
        heatRequirement: 'heated'
    })
//Melting Rose Quartz
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'gtceu:chipped_rose_quartz_gem'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 36}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'gtceu:flawed_rose_quartz_gem'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 72}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'gtceu:rose_quartz_dust'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 144}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'create:polished_rose_quartz'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 144}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'create:rose_quartz'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 144}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'gtceu:flawless_rose_quartz_gem'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 288}],
        heatRequirement: 'heated'
    })
    event.custom({
        type: 'createmetallurgy:melting',
        ingredients: [{item: 'gtceu:exquisite_rose_quartz_gem'}],
        processingTime: 30,
        results: [{fluid: 'gtceu:rose_quartz', amount: 576}],
        heatRequirement: 'heated'
    })
//Greg alloys
    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:copper', amount: 90*3}, {fluid: 'kubejs:tin', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:bronze', amount: 90*4}],
        heatRequirement: 'lowheated'
    })
    
    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:annealed_copper', amount: 90*3}, {fluid: 'kubejs:tin', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:bronze', amount: 90*4}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:copper', amount: 90*3}, {fluid: 'kubejs:zinc', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:brass', amount: 90*4}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:annealed_copper', amount: 90*3}, {fluid: 'kubejs:zinc', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:brass', amount: 90*4}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:gold', amount: 90}, {fluid: 'kubejs:silver', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:electrum', amount: 90*2}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:iron', amount: 90*2}, {fluid: 'kubejs:nickel', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:invar', amount: 90*3}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:wrought_iron', amount: 90*2}, {fluid: 'kubejs:nickel', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:invar', amount: 90*3}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:lead', amount: 90*4}, {fluid: 'kubejs:antimony', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:battery_alloy', amount: 90*5}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:iron', amount: 90}, {fluid: 'kubejs:tin', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:tin_alloy', amount: 90*2}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:wrought_iron', amount: 90}, {fluid: 'kubejs:tin', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:tin_alloy', amount: 90*2}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:copper', amount: 90}, {fluid: 'kubejs:nickel', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:cupronickel', amount: 90*2}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:annealed_copper', amount: 90}, {fluid: 'kubejs:nickel', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:cupronickel', amount: 90*2}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:copper', amount: 90}, {item: 'minecraft:redstone', count: 4}],
        processingTime: 140,
        results: [{fluid: 'kubejs:red_alloy', amount: 90*5}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:annealed_copper', amount: 90}, {item: 'minecraft:redstone', count: 4}],
        processingTime: 140,
        results: [{fluid: 'kubejs:annealed_copper', amount: 90*5}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:iron', amount: 90*4}, {fluid: 'kubejs:copper', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:gunmetal', amount: 90*5}],
        heatRequirement: 'lowheated'
    })
    
    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:wrought_iron', amount: 90*4}, {fluid: 'kubejs:copper', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:gunmetal', amount: 90*5}],
        heatRequirement: 'lowheated'
    })
    
    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:iron', amount: 90*4}, {fluid: 'kubejs:annealed_copper', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:gunmetal', amount: 90*5}],
        heatRequirement: 'lowheated'
    })
    
    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:wrought_iron', amount: 90*4}, {fluid: 'kubejs:annealed_copper', amount: 90}],
        processingTime: 40,
        results: [{fluid: 'kubejs:gunmetal', amount: 90*5}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:iron', amount: 90*3}, {item: 'gtceu:coal_dust'}],
        processingTime: 140,
        results: [{fluid: 'kubejs:poor_steel', amount: 90*3}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:wrought_iron', amount: 90*3}, {item: 'gtceu:coal_dust'}],
        processingTime: 140,
        results: [{fluid: 'kubejs:poor_steel', amount: 90*3}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:silver', amount: 90}, {item: 'gtceu:electrotine_dust', count: 4}],
        processingTime: 140,
        results: [{fluid: 'kubejs:blue_alloy', amount: 90*5}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{fluid: 'kubejs:raw_rubber', amount: 90*3}, {item: 'gtceu:sulfur_dust'}],
        processingTime: 140,
        results: [{fluid: 'kubejs:rubber', amount: 90*3}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{item: 'gtceu:quartz_sand_dust'}, {item: 'gtceu:tiny_flint_dust'}],
        processingTime: 140,
        results: [{fluid: 'kubejs:glass', amount: 90}],
        heatRequirement: 'lowheated'
    })
    
    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{item: 'gtceu:quartz_sand_dust', count: 4}, {item: 'gtceu:small_flint_dust'}],
        processingTime: 140,
        results: [{fluid: 'kubejs:glass', amount: 90*4}],
        heatRequirement: 'lowheated'
    })

    event.custom({
        type: 'createmetallurgy:alloying',
        ingredients: [{item: 'gtceu:quartz_sand_dust', count: 9}, {item: 'gtceu:flint_dust'}],
        processingTime: 140,
        results: [{fluid: 'kubejs:glass', amount: 90*9}],
        heatRequirement: 'lowheated'
    })
//Ingots
    metalmelt.forEach( (base) => {
        event.custom({
            type: 'createmetallurgy:casting_in_table',
            ingredients: [
                {
                    item: 'createmetallurgy:graphite_ingot_mold'
                },
                {
                    fluid: 'kubejs:' + base,
                    amount: 90
                }
            ],
            processingTime: 80,
            results: [
                {
                    item: 'gtceu:' + base + '_ingot'
                }
            ]
        })
    })//ingot loop end
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_ingot_mold'}, {fluid: 'kubejs:iron', amount: 90}],
        processingTime: 80,
        results: [{item: 'minecraft:iron_ingot'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_ingot_mold'}, {fluid: 'kubejs:gold', amount: 90}],
        processingTime: 80,
        results: [{item: 'minecraft:gold_ingot'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_ingot_mold'}, {fluid: 'kubejs:copper', amount: 90}],
        processingTime: 80,
        results: [{item: 'minecraft:copper_ingot'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_ingot_mold'}, {fluid: 'kubejs:gunmetal', amount: 90}],
        processingTime: 80,
        results: [{item: 'pointblank:gunmetal_ingot'}]
    })
//Nuggets
    metalmelt.forEach( (base) => {
        event.custom({
            type: 'createmetallurgy:casting_in_table',
            ingredients: [
                {
                    item: 'createmetallurgy:graphite_nugget_mold'
                },
                {
                    fluid: 'kubejs:' + base,
                    amount: 90/9
                }
            ],
            processingTime: 40,
            results: [
                {
                    item: 'gtceu:' + base + '_nugget'
                }
            ]
        })
    })//nugget loop end
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_nugget_mold'}, {fluid: 'kubejs:iron', amount: 90/9}],
        processingTime: 40,
        results: [{item: 'minecraft:iron_nugget'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_nugget_mold'}, {fluid: 'kubejs:gold', amount: 90/9}],
        processingTime: 40,
        results: [{item: 'minecraft:gold_nugget'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_nugget_mold'}, {fluid: 'kubejs:copper', amount: 90/9}],
        processingTime: 40,
        results: [{item: 'gtceu:copper_nugget'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'createmetallurgy:graphite_nugget_mold'}, {fluid: 'kubejs:gunmetal', amount: 90/9}],
        processingTime: 40,
        results: [{item: 'pointblank:gunmetal_nugget'}]
    })
//Blocks
    metalmelt.forEach( (base) => {
        event.custom({
            type: 'createmetallurgy:casting_in_basin',
            ingredients: [
                {
                    fluid: 'kubejs:' + base,
                    amount: 90*9
                }
            ],
            processingTime: 150,
            results: [
                {
                    item: 'gtceu:' + base + '_block'
                }
            ]
        })
    })//block loop end
    event.custom({
        type: 'createmetallurgy:casting_in_basin',
        ingredients: [{fluid: 'kubejs:iron', amount: 90*9}],
        processingTime: 150,
        results: [{item: 'minecraft:iron_block'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_basin',
        ingredients: [{fluid: 'kubejs:gold', amount: 90*9}],
        processingTime: 150,
        results: [{item: 'minecraft:gold_block'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_basin',
        ingredients: [{fluid: 'kubejs:copper', amount: 90*9}],
        processingTime: 150,
        results: [{item: 'minecraft:copper_block'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_basin',
        ingredients: [{fluid: 'kubejs:gunmetal', amount: 90*9}],
        processingTime: 150,
        results: [{item: 'gtceu:gunmetal_block'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_basin',
        ingredients: [{fluid: 'kubejs:glass', amount: 90}],
        processingTime: 150,
        results: [{item: 'minecraft:glass'}]
    })
//Plates
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'gtceu:plate_casting_mold'}, {fluid: 'kubejs:rubber', amount: 90}],
        processingTime: 40,
        results: [{item: 'gtceu:rubber_plate'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'gtceu:plate_casting_mold'}, {fluid: 'kubejs:raw_rubber', amount: 90}],
        processingTime: 40,
        results: [{item: 'gtceu:raw_rubber_plate'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'gtceu:ball_casting_mold'}, {fluid: 'kubejs:glass', amount: 90}],
        processingTime: 40,
        results: [{item: 'gtceu:glass_tube'}]
    })
//Rounds
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:round_casting_mold'}, {fluid: 'kubejs:steel', amount: 90/9}],
        processingTime: 40,
        results: [{item: 'gtceu:steel_round'}]
    })
    event.custom({
        type: 'createmetallurgy:casting_in_table',
        ingredients: [{item: 'kubejs:round_casting_mold'}, {fluid: 'kubejs:lead', amount: 90/9}],
        processingTime: 40,
        results: [{item: 'gtceu:lead_round'}]
    })
})