ServerEvents.recipes(event => {
//Greg wrought iron
    let kjswi = 'kubejs:incomplete_wrought_iron' // making a variable to store the transitional item makes the code more readable
	    event.recipes.create.sequenced_assembly([
		    Item.of('gtceu:wrought_iron_ingot').withChance(99.0), // this is the item that will appear in JEI as the result
            Item.of('gtceu:wrought_iron_nugget').withChance(1.0)
  	], 'minecraft:iron_ingot', [ // 'minecraft:iron_ingot' is the input
	  	    // the transitional item set by `transitionalItem(kjswi)` is the item used during the intermediate stages of the assembly
	  	event.recipes.createFilling(kjswi, [kjswi, Fluid.lava(10)]),
	  	    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
	  	event.recipes.createPressing(kjswi, [kjswi]),
        event.recipes.createPressing(kjswi, [kjswi])
	]).transitionalItem(kjswi).loops(1) // set the transitional item and the number of loops

//Electron Tube
    let kjset = 'kubejs:incomplete_electron_tube'
    event.recipes.create.sequenced_assembly([
        Item.of('3x create:electron_tube').withChance(95.0),
        Item.of('2x gtceu:wrought_iron_nugget').withChance(5.0)
    ], 'gtceu:wrought_iron_bolt', [
        event.recipes.createDeploying(kjset, [kjset, 'create:polished_rose_quartz']),
        event.recipes.createCutting(kjset, [kjset]),
        event.recipes.createFilling(kjset, [kjset, Fluid.of(('gtceu:rose_quartz'), 144)]),
        event.recipes.createDeploying(kjset, [kjset, 'create:polished_rose_quartz'])
    ]).transitionalItem(kjset).loops(1)

//Clockwork Mechanism
    event.shaped(
        Item.of('kubejs:rudimentary_mechanism'),
        ['BDB', 'CAC', 'EDE'],
        {A: 'gtceu:andesite_alloy_plate', B: 'gtceu:andesite_alloy_bolt', C: '#forge:small_bakelite',
        D: 'create:cogwheel', E: 'create:shaft'})

    let kjsrm = 'kubejs:incomplete_rudimentary_mechanism'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:rudimentary_mechanism').withChance(95.0),
        //Item.of('2x gtceu:brass_nugget').withChance(3.0),
        //Item.of('2x gtceu:small_rose_quartz_dust').withChance(2.0)
    ], 'gtceu:andesite_alloy_plate', [
        event.recipes.createDeploying(kjsrm, [kjsrm, 'gtceu:andesite_alloy_bolt']),
        event.recipes.createDeploying(kjsrm, [kjsrm, '#forge:small_bakelite']),
        event.recipes.createPressing(kjsrm, [kjsrm]),
    ]).transitionalItem(kjsrm).loops(3)
    
    event.shaped(
        Item.of('kubejs:sealed_mechanism'),
        ['BDE', 'CAC', 'EDB'],
        {A: 'gtceu:copper_plate', B: 'gtceu:sticky_resin', C: 'gtceu:small_copper_gear',
        D: 'create:cogwheel', E: 'gtceu:andesite_alloy_bolt'})

    event.custom({
        type: 'create:sequenced_assembly',
        ingredient: {item: 'gtceu:copper_plate'},
        loops: 2,
        results: [{item: 'kubejs:sealed_mechanism'}],
        sequence: [
            {
                type: 'create:deploying',
                ingredients: [{item: 'kubejs:incomplete_sealed_mechanism'}, {item: 'gtceu:andesite_alloy_bolt'}],
                results: [{item: 'kubejs:incomplete_sealed_mechanism'}]
            },
            {
                type: 'create:deploying',
                ingredients: [{item: 'kubejs:incomplete_sealed_mechanism'}, {item: 'gtceu:small_copper_gear'}],
                results: [{item: 'kubejs:incomplete_sealed_mechanism'}]
            },
            {
                type: 'create:filling',
                ingredients: [{item: 'kubejs:incomplete_sealed_mechanism'}, {fluid: 'gtceu:glue', amount: 100}],
                results: [{item: 'kubejs:incomplete_sealed_mechanism'}]
            },
            {
                type: 'vintageimprovements:vibrating',
                ingredients: [{item: 'kubejs:incomplete_sealed_mechanism'}],
                results: [{item: 'kubejs:incomplete_sealed_mechanism'}]
            },
            {
                type: 'create:pressing',
                ingredients: [{item: 'kubejs:incomplete_sealed_mechanism'}],
                results: [{item: 'kubejs:incomplete_sealed_mechanism'}]
            },
        ],
        transitionalItem: {item: 'kubejs:incomplete_sealed_mechanism'}
    })

    let kjscm = 'kubejs:incomplete_clockwork_mechanism'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:clockwork_mechanism').withChance(95.0),
        Item.of('2x gtceu:brass_nugget').withChance(3.0),
        Item.of('2x gtceu:small_rose_quartz_dust').withChance(2.0)
    ], 'gtceu:brass_plate', [
        event.recipes.createDeploying(kjscm, [kjscm, 'create:cogwheel']),
        event.recipes.createDeploying(kjscm, [kjscm, 'gtceu:small_brass_gear']),
        event.recipes.createDeploying(kjscm, [kjscm, 'gtceu:brass_nugget']),
        event.recipes.createPressing(kjscm, [kjscm]),
        event.recipes.createDeploying(kjscm, [kjscm, 'create:electron_tube']),
        event.recipes.createPressing(kjscm, [kjscm])
    ]).transitionalItem(kjscm).loops(2)  

    let kjsacm = 'kubejs:incomplete_advanced_clockwork_mechanism'
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:advanced_clockwork_mechanism').withChance(95.0),
        Item.of('2x gtceu:poor_steel_nugget').withChance(3.0),
        Item.of('2x gtceu:small_rose_quartz_dust').withChance(2.0)
    ], 'gtceu:poor_steel_plate', [
        event.recipes.createDeploying(kjsacm, [kjsacm, 'create:electron_tube']),
        event.recipes.createDeploying(kjsacm, [kjsacm, 'gtceu:poor_steel_gear']),
        event.recipes.createPressing(kjsacm, [kjsacm]),
        event.recipes.createDeploying(kjsacm, [kjsacm, 'kubejs:clockwork_mechanism']),
        event.recipes.createPressing(kjsacm, [kjsacm])
    ]).transitionalItem(kjsacm).loops(2)
        
//Clockwork Burner
    let kjsbb = 'kubejs:incomplete_blaze_burner'
    event.recipes.create.sequenced_assembly([
        Item.of('create:blaze_burner').withChance(95.0),
        Item.of('2x gtceu:iron_nugget').withChance(3.0),
        Item.of('2x gtceu:small_netherrack_dust').withChance(2.0)
    ], 'create:empty_blaze_burner', [
        event.recipes.createDeploying(kjsbb, [kjsbb, 'create:cogwheel']),
        event.recipes.createDeploying(kjsbb, [kjsbb, 'create:electron_tube']),
        event.recipes.createFilling(kjsbb, [kjsbb, Fluid.lava(100)]),
        event.recipes.createPressing(kjsbb, [kjsbb]),
        event.recipes.createDeploying(kjsbb, [kjsbb, 'gtceu:double_copper_plate']),
        event.recipes.createDeploying(kjsbb, [kjsbb, 'create:electron_tube']),
        event.recipes.createPressing(kjsbb, [kjsbb])
    ]).transitionalItem(kjsbb).loops(2)

//Generator Coil
    let kjsgc = 'kubejs:incomplete_generator_coil'
    event.recipes.create.sequenced_assembly([
        Item.of('create_new_age:generator_coil').withChance(84.0),
        Item.of('gtceu:andesite_alloy_nugget').withChance(8.0),
        Item.of('6x gtceu:copper_nugget').withChance(8.0)
    ], 'create:shaft', [
        event.recipes.createDeploying(kjsgc, [kjsgc, 'gtceu:andesite_alloy_rod']),
        event.recipes.createPressing(kjsgc, [kjsgc]),
        event.recipes.createDeploying(kjsgc, [kjsgc, 'gtceu:fine_copper_wire']),
        event.recipes.createDeploying(kjsgc, [kjsgc, 'gtceu:fine_copper_wire']),
        event.recipes.createDeploying(kjsgc, [kjsgc, 'gtceu:fine_copper_wire']),
        event.recipes.createDeploying(kjsgc, [kjsgc, 'gtceu:fine_copper_wire']),
        event.recipes.createPressing(kjsgc, [kjsgc])
    ]).transitionalItem(kjsgc).loops(8)

//Ulv Circuit
    let kjsuv = 'kubejs:incomplete_vacuum_tube'
    event.recipes.create.sequenced_assembly([
        Item.of('gtceu:vacuum_tube')
    ], 'gtceu:glass_tube', [
        event.recipes.createDeploying(kjsuv, [kjsuv, 'gtceu:steel_bolt']),
        event.recipes.createDeploying(kjsuv, [kjsuv, 'gtceu:copper_single_wire']),
        event.recipes.createFilling(kjsuv, [kjsuv, Fluid.of(('kubejs:red_alloy'), 10)]),
    ]).transitionalItem(kjsuv).loops(2)

//Resistors
    const resist = ['coal', 'carbon', 'charcoal']
    resist.forEach( (base) => {
        let kjsre = 'kubejs:incomplete_' + base + '_resistor'
        event.recipes.create.sequenced_assembly([
            Item.of('gtceu:resistor')
        ], 'minecraft:paper', [
            event.recipes.createDeploying(kjsre, [kjsre, 'gtceu:' + base + '_dust']),
            event.recipes.createDeploying(kjsre, [kjsre, 'gtceu:copper_single_wire']),
            event.recipes.createFilling(kjsre, [kjsre, Fluid.of(('gtceu:glue'), 72)]),
        ]).transitionalItem(kjsre).loops(1)
    })

//Lv Circuit
    let kjslv = 'kubejs:incomplete_basic_electronic_circuit'
    event.recipes.create.sequenced_assembly([
        Item.of('gtceu:basic_electronic_circuit')
    ], 'gtceu:resin_printed_circuit_board', [
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:resistor']),
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:vacuum_tube']),
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:red_alloy_single_cable']),
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:resistor']),
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:vacuum_tube']),
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:red_alloy_single_cable']),
        event.recipes.createFilling(kjslv, [kjslv, Fluid.of(('kubejs:red_alloy'), 20)]),
        event.recipes.createDeploying(kjslv, [kjslv, 'gtceu:steel_plate']),
    ]).transitionalItem(kjslv).loops(1)

//Mv Circuit
    let kjsmv = 'kubejs:incomplete_good_electronic_circuit'
    event.recipes.create.sequenced_assembly([
        Item.of('gtceu:good_electronic_circuit')
    ], 'gtceu:phenolic_printed_circuit_board', [
        event.recipes.createDeploying(kjsmv, [kjsmv, 'gtceu:diode']),
        event.recipes.createDeploying(kjsmv, [kjsmv, 'gtceu:copper_single_wire']),
        event.recipes.createDeploying(kjsmv, [kjsmv, 'gtceu:basic_electronic_circuit']),
        event.recipes.createFilling(kjsmv, [kjsmv, Fluid.of(('kubejs:red_alloy'), 8)]),
    ]).transitionalItem(kjsmv).loops(3)

//Lv Circuit
    let kjslb = 'kubejs:incomplete_resin_printed_circuit_board'
    event.recipes.create.sequenced_assembly([
        Item.of('gtceu:resin_printed_circuit_board')
    ], 'gtceu:wood_plate', [
        event.recipes.createDeploying(kjslb, [kjslb, 'gtceu:copper_foil']),
        event.recipes.createDeploying(kjslb, [kjslb, 'gtceu:copper_foil']),
        event.recipes.createDeploying(kjslb, [kjslb, 'gtceu:copper_foil']),
        event.recipes.createFilling(kjslb, [kjslb, Fluid.of(('gtceu:glue'), 50)]),
        event.recipes.createPressing(kjslb, kjslb),
    ]).transitionalItem(kjslb).loops(2)

//Cog
    let kjscg = 'kubejs:incomplete_cog'
    event.recipes.create.sequenced_assembly([
        Item.of('create:cogwheel')
    ], 'create:shaft', [
        event.recipes.createDeploying(kjscg, [kjscg, '#forge:small_bakelite']),
        event.recipes.createFilling(kjscg, [kjscg, Fluid.of(('gtceu:glue'), 50)]),
        event.recipes.createPressing(kjscg, kjscg),
    ]).transitionalItem(kjscg).loops(1)

    let kjslcg = 'kubejs:incomplete_large_cog'
    event.recipes.create.sequenced_assembly([
        Item.of('create:large_cogwheel')
    ], 'create:shaft', [
        event.recipes.createDeploying(kjslcg, [kjslcg, '#forge:bakelite']),
        event.recipes.createFilling(kjslcg, [kjslcg, Fluid.of(('gtceu:glue'), 50)]),
        event.recipes.createPressing(kjslcg, kjslcg),
    ]).transitionalItem(kjslcg).loops(1)
})