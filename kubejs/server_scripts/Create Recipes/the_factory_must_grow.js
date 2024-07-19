ServerEvents.recipes(event => {
//Recipe Replacements
    event.replaceInput(
        { input: 'tfmg:screw' },
        'tfmg:screw',
        'gtceu:poor_steel_screw'
        )
    event.replaceInput(
        { input: 'tfmg:screwdriver' },
        'tfmg:screwdriver',
        '#forge:tools/screwdrivers'
        )
    event.replaceInput(
        { input: 'tfmg:turbine_blade' },
        'tfmg:turbine_blade',
        'gtceu:andesite_alloy_rotor'
        )
    event.replaceInput(
        { input: 'tfmg:rebar' },
        'tfmg:rebar',
        'gtceu:steel_rod'
        )
    event.replaceInput(
        { input: 'tfmg:heavy_machine_casing' },
        'tfmg:heavy_machine_casing',
        'gtceu:solid_machine_casing'
        )
    event.replaceInput(
        { input: 'tfmg:magnetic_ingot' },
        'tfmg:magnetic_ingot',
        'gtceu:magnetic_iron_ingot'
        )
    event.replaceInput(
        { input: 'tfmg:capacitor_' },
        'tfmg:capacitor_',
        'gtceu:capacitor'
        )
    event.replaceInput(
        { input: 'tfmg:resistor_' },
        'tfmg:resistor_',
        'gtceu:resistor'
        )
    event.replaceInput(
        { input: 'tfmg:lithium_ingot' },
        'tfmg:lithium_ingot',
        'gtceu:lithium_ingot'
        )
    event.replaceInput(
        { input: 'tfmg:steel_sword' },
        'tfmg:steel_sword',
        'gtceu:steel_sword'
        )
//Frames
    const frames = ['steel', 'lead', 'nickel', 'copper', 'zinc', 'brass']
    frames.forEach( (base) => {
        event.shapeless(
            Item.of('tfmg:' + base + '_truss'),
            ['gtceu:' + base + '_frame']
        )
    })
    event.shapeless(
        Item.of('tfmg:aluminum_truss'),
        ['gtceu:wohler_aluminium_frame']
    )
    event.shapeless(
        Item.of('tfmg:cast_iron_truss'),
        ['gtceu:poor_steel_frame']
    )
//Casting Machines
    event.shaped(
        Item.of('tfmg:steel_fluid_tank',),
        [' C ', 'ABA', 'ABA'],
        {A: 'gtceu:poor_steel_plate', B: 'gtceu:long_poor_steel_rod', C: '#forge:tools/hammers'})
    event.shaped(
        Item.of('tfmg:casting_spout'),
        ['CED', 'FAF', 'GBG'],
        {A: 'tfmg:steel_fluid_tank', B: 'tfmg:cast_iron_pipe', C: '#forge:tools/hammers', D: '#forge:tools/wrenches', 
        E: '#forge:tools/screwdrivers', F: 'gtceu:small_bronze_gear', G: 'gtceu:iron_screw'})
    event.shaped(
        Item.of('tfmg:casting_basin',),
        ['   ', 'ABA', 'AAA' ],
        {A: 'gtceu:poor_steel_plate', B: '#forge:tools/hammers'})
//Blast Furnace
    event.custom({
        type: 'tfmg:industrial_blasting',
        ingredients: [{count: 1, item: 'minecraft:iron_ingot'}/*, {count: 1, item: 'gtceu:coke_gem'}*/],
        processingTime: 300,
        results: [{fluid: 'kubejs:steel', amount: 90}, {fluid: 'tfmg:molten_slag', amount: 100}]
    })
    event.custom({
        type: 'tfmg:industrial_blasting',
        ingredients: [{count: 1, item: 'gtceu:wohler_aluminium_dust'}/*, {count: 1, item: 'gtceu:coke_gem'}*/],
        processingTime: 300,
        results: [{fluid: 'kubejs:wohler_aluminium', amount: 90}, {fluid: 'tfmg:molten_slag', amount: 100}]
    })
//Intermediates
    event.replaceInput(
        { input: 'tfmg:steel_mechanism' },
        'tfmg:steel_mechanism',
        'kubejs:advanced_clockwork_mechanism')
        
    event.custom({
        type: 'vintageimprovements:curving',
        itemAsHead: "gtceu:brick_wooden_form",
        ingredients: [
            {
                item: 'tfmg:fireclay_ball'
            }
        ],
        results: [
            {
                item: 'kubejs:compressed_fireclay'
            }
        ]
        })
    
    event.smelting('tfmg:fireproof_brick', 'kubejs:compressed_fireclay')

    event.recipes.create.mixing(
        ['tfmg:fireproof_bricks'], 
        ['6x tfmg:fireproof_brick', '2x tfmg:limesand', Fluid.of(('tfmg:liquid_concrete'), 750)]
        ).heatRequirement('heated')

    event.shaped(
        Item.of('tfmg:fireproof_bricks',),
        ['ABA', 'ACA', 'ABA'],
        {A: 'tfmg:fireproof_brick', B: 'tfmg:limesand', C: 'tfmg:liquid_concrete_bucket'})

    event.shaped(
        Item.of('tfmg:blast_furnace_output',),
        ['ABC', 'DEB', 'FBC'],
        {A: '#forge:tools/hammers', B: 'gtceu:iron_rod', C: 'gtceu:iron_screw',
        D: 'gtceu:iron_plate', E: 'tfmg:fireproof_bricks', F: '#forge:tools/screwdrivers'})
        
    event.shaped(
        Item.of('tfmg:electric_casing',),
        ['KWK', 'ECE', 'RWR'],
        {C: 'tfmg:heavy_machinery_casing', W: 'tfmg:copper_cable', K: 'gtceu:capacitor', 
        R: 'gtceu:resistor', E: 'kubejs:conductive_mechanism'})
        
    event.shaped(
        Item.of('4x tfmg:cable_connector',),
        [' A ', 'BAB', 'BAB'],
        {A: 'minecraft:copper_ingot', B: 'minecraft_brick'})

//Pumpjack
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'gtceu:steel_small_fluid_pipe'}],
        results: [{item: 'tfmg:industrial_pipe'}]
        })
    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_crank', 
        ['HAH', 'SCS', '   '], 
        {A: 'minecraft:string', H: 'gtceu:steel_plate', S: 'gtceu:steel_rod', C: 'tfmg:steel_casing'}
    )
    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_crank', 
        ['SSSSB', ' AT B'], 
        {A: 'gtceu:steel_screw', T: 'gtceu:steel_frame', B: 'gtceu:steel_block', S: 'gtceu:steel_ingot'}
    )
//Wöhler Aluminium
    event.custom({
        type: 'vintageimprovements:pressurizing',
        ingredients: [{item: 'gtceu:aluminium_trichloride_dust', count: 2}, {item: 'gtceu:aluminium_trichloride_dust', count: 2}, {item: 'gtceu:potash_dust'}],
        results: [{item: 'gtceu:wohler_aluminium_dust', count: 2}, {item: 'gtceu:rock_salt_dust', count: 6}],
        processingTime: 600
    })
    event.custom({
        type: 'vintageimprovements:pressurizing',
        ingredients: [
            {item: 'gtceu:bauxite_dust', count: 2}, 
            {item: 'gtceu:salt_dust', count: 6}, 
            {item: 'gtceu:salt_dust', count: 6}, 
            {item: 'gtceu:salt_dust', count: 6}, 
            {item: 'gtceu:salt_dust', count: 6}, 
            {item: 'gtceu:salt_dust', count: 6}, 
            {item: 'gtceu:salt_dust', count: 6}
        ],
        results: [{item: 'gtceu:aluminium_trichloride_dust', count: 2}, {item: 'gtceu:sodium_oxide_dust', count: 3}],
        processingTime: 600
    })
})