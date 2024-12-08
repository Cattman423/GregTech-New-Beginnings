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
    /*event.replaceInput(
        { input: 'tfmg:turbine_blade' },
        'tfmg:turbine_blade',
        'gtceu:andesite_alloy_rotor'
        )*/
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
    event.replaceInput(
        { input: 'tfmg:copper_wire' },
        'tfmg:copper_wire',
        'gtceu:copper_single_wire'
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
        results: [{fluid: 'gtceu:steel', amount: 144}, {fluid: 'tfmg:molten_slag', amount: 100}]
    })
    event.custom({
        type: 'tfmg:industrial_blasting',
        ingredients: [{count: 1, item: 'gtceu:wohler_aluminium_dust'}/*, {count: 1, item: 'gtceu:coke_gem'}*/],
        processingTime: 300,
        results: [{fluid: 'gtceu:wohler_aluminium', amount: 144}, {fluid: 'tfmg:molten_slag', amount: 100}]
    })
//Intermediates
    event.replaceInput(
        { input: 'tfmg:steel_mechanism' },
        'tfmg:steel_mechanism',
        'kubejs:advanced_clockwork_mechanism')
        
    event.recipes.vintageimprovements.curving('kubejs:compressed_fireclay', 'tfmg:fireclay_ball').head('gtceu:brick_wooden_form')
    event.recipes.vintageimprovements.curving('tfmg:cinderflourblock', 'create:cinder_flour').head('gtceu:brick_wooden_form')
    event.recipes.vintageimprovements.curving('tfmg:cinderblock', 'tfmg:concrete_mixture').head('gtceu:brick_wooden_form')

    event.shaped(
        Item.of('2x tfmg:cinderflour_block'),
        ['AAA', 'ABA', 'AAA'],
        {A: 'tfmg:cinderflourblock', B: 'minecraft:water_bucket'}
    )
    event.shaped(
        Item.of('2x tfmg:cinder_block'),
        ['AAA', 'ABA', 'AAA'],
        {A: 'tfmg:cinderblock', B: 'minecraft:water_bucket'}
    )

    event.recipes.gtceu.compressor('cinderblock')
        .itemInputs('4x tfmg:cinderblock')
        .itemOutputs('tfmg:cinder_block')
        .duration(15*sec)
        .EUt(2)
    event.recipes.gtceu.compressor('cinderflourblock')
        .itemInputs('4x tfmg:cinderflourblock')
        .itemOutputs('tfmg:cinderflour_block')
        .duration(15*sec)
        .EUt(2)
    
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
        D: 'kubejs:advanced_clockwork_mechanism', E: 'tfmg:fireproof_bricks', F: '#forge:tools/screwdrivers'})
        
    event.shaped(
        Item.of('tfmg:electric_casing',),
        ['KWK', 'ECE', 'RWR'],
        {C: 'tfmg:heavy_machinery_casing', W: 'tfmg:copper_cable', K: 'gtceu:capacitor', 
        R: 'gtceu:resistor', E: 'kubejs:conductive_mechanism'})
        
    event.shaped(
        Item.of('4x tfmg:cable_connector',),
        [' A ', 'BAB', 'BAB'],
        {A: 'minecraft:copper_ingot', B: '#minecraft:terracotta'})

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
        'tfmg:pumpjack_base', 
        ['HAH', 'SCS', 'HIH'], 
        {A: '#forge:string', C: 'tfmg:steel_casing', H: 'gtceu:steel_plate', I: 'tfmg:industrial_pipe', S: 'kubejs:advanced_clockwork_mechanism'}
    )
    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_hammer_head',
        ['PP', 'BP', ' P'],
        {B: 'gtceu:steel_block', P: 'gtceu:steel_plate'}
    )
    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_hammer_part',
        ['PPP'],
        {P: 'gtceu:double_steel_plate'}
    )
    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_hammer_connector',
        ['PSP'],
        {P: 'gtceu:double_steel_plate', S: 'create:shaft'}
    )
    event.recipes.create.mechanical_crafting(
        'tfmg:machine_input',
        ['PPP', 'SGS', 'PPP'],
        {P: 'gtceu:steel_plate', S: 'create:shaft', G: 'kubejs:advanced_clockwork_mechanism'}
    )
    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_hammer',
        ['S', 'F', 'F'],
        {S: 'create:shaft', F: 'gtceu:steel_frame'}
    )
//Wöhler Aluminium
    event.recipes.create.mixing(
        ['2x gtceu:wohler_aluminium_dust', '6x gtceu:rock_salt_dust'], 
        ['2x gtceu:aluminium_trichloride_dust', '2x gtceu:aluminium_trichloride_dust', 'gtceu:potash_dust']
        ).heatRequirement('heated')
    event.recipes.create.mixing(
        ['2x gtceu:aluminium_trichloride_dust', '3x gtceu:sodium_oxide_dust'], 
        ['2x gtceu:bauxite_dust', '6x gtceu:salt_dust']
        ).heatRequirement('heated')
    function pbf(id, fuel, dust){
        event.recipes.gtceu.primitive_blast_furnace(id)
            .itemInputs('gtceu:wohler_aluminium_dust', fuel)
            .itemOutputs('tfmg:aluminum_ingot', dust)
            .duration(90*sec)
    }
    function pbfc(id, fuel){
        event.recipes.gtceu.primitive_blast_furnace(id)
            .itemInputs('gtceu:wohler_aluminium_dust', fuel)
            .itemOutputs('tfmg:aluminum_ingot')
            .chancedOutput('gtceu:ash_dust', 1111, 0)
            .duration(75*sec)
    }
    pbf('alum_char_dust', '2x gtceu:charcoal_dust', '3x gtceu:tiny_dark_ash_dust')
    pbf('alum_coal_dust', '2x gtceu:coal_dust', '3x gtceu:tiny_dark_ash_dust')
    pbf('alum_char', '2x minecraft:charcoal', '3x gtceu:tiny_dark_ash_dust')
    pbf('alum_coal', '2x minecraft:coal', '3x gtceu:tiny_dark_ash_dust')
    pbfc('alum_coke_dust', '2x tfmg:coal_coke_dust')
    pbfc('alum_coke', '2x tfmg:coal_coke')
    event.recipes.gtceu.electric_blast_furnace('wohler_alum')
        .itemInputs('gtceu:wohler_aluminium_dust')
        .itemOutputs('tfmg:aluminum_ingot')
        .blastFurnaceTemp(1000)
        .duration(40*sec)
        .EUt(mv)
})