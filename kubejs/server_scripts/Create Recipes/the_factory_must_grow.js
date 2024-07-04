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
    event.shapeless(
        Item.of('tfmg:steel_truss'),
        [
            'gtceu:steel_frame'
        ]
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
//Intermediates
    event.replaceInput(
        { input: 'tfmg:steel_mechanism' },
        'tfmg:steel_mechanism',
        'kubejs:advanced_clockwork_mechanism')
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
})