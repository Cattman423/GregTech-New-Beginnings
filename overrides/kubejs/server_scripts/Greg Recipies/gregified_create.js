ServerEvents.recipes(event => {
//Andesite alloy dust
    event.recipes.gtceu.mixer('andesite_alloy_dust')
        .itemInputs('8x gtceu:andesite_dust', 'gtceu:zinc_dust')
        .itemOutputs('8x gtceu:andesite_alloy_dust')
        .duration(1600)
        .EUt(16);
    event.shapeless(
        Item.of('gtceu:andesite_alloy_dust', 2), // arg 1: output
        [
          '3x gtceu:andesite_dust', 'gtceu:small_zinc_dust', // arg 2: the array of inputs
        ]
        )
    event.replaceInput(
        { input: 'create:andesite_alloy' }, // Arg 1: the filter
        'create:andesite_alloy',            // Arg 2: the item to replace
        'gtceu:andesite_alloy_ingot'        // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
        )
    event.replaceInput(
        { input: 'create:propeller' },
        'create:propeller',
        'gtceu:andesite_alloy_rotor'
        )
    event.replaceInput(
        { input: 'createdeco:andesite_sheet' },
        'createdeco:andesite_sheet',
        'gtceu:andesite_alloy_plate'
        )
//Poor steel
    event.recipes.create.mixing(
        ['3x gtceu:poor_steel_ingot'], 
        ['2x minecraft:iron_ingot', '2x minecraft:coal']
        ).heatRequirement('lowheated')
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
//Create rose quartz
    event.replaceInput(
        { input: 'create:polished_rose_quartz' },
        'create:polished_rose_quartz',
        'gtceu:rose_quartz'
        )
    event.recipes.create.mixing(
        ['gtceu:rose_quartz_gem'], 
        ['8x minecraft:redstone', '3x gtceu:quartz_sand_dust']
    ).heatRequirement('lowheated')
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
//Greg bricks
    event.recipes.create.compacting(
        'gtceu:compressed_clay', 
        'minecraft:clay_ball'
    )
    event.recipes.create.compacting(
        ['2x gtceu:compressed_coke_clay'], 
        ['2x minecraft:clay_ball', '4x minecraft:sand']
    )
//Greg bronze and brass
    event.recipes.create.mixing(
        ['3x gtceu:bronze_dust'], 
        ['3x gtceu:copper_dust', 'gtceu:tin_dust']
    ).heatRequirement('lowheated')
    event.recipes.create.mixing(
        ['3x gtceu:brass_dust'], 
        ['3x gtceu:copper_dust', 'gtceu:zinc_dust']
    ).heatRequirement('lowheated')
//Greg wood plank
    event.shaped(
        Item.of('gtceu:wood_plate', 2),
        [
            ' A ',
            ' A ',
            ' B '
        ],
        {
            A: '#minecraft:planks',
            B: '#forge:tools/saws'
        }
       )
//Goggles
    event.shaped(
        Item.of('create:goggles'),
        [
            'S S',
            'GRG',
            'RCR'
        ],
        {
            S: 'gtceu:iron_screw',
            G: 'gtceu:glass_lens',
            R: 'gtceu:iron_rod',
            C: '#forge:tools/screwdrivers'
        }
    )
//Create cog replacement
    event.shaped(
        Item.of('create:cogwheel',),
        [
            ' BE',
            'DAC',
            'FB '
        ],
        {
            A: 'gtceu:small_wood_gear',
            B: 'create:shaft',
            C: '#forge:tools/hammers',
            D: '#forge:tools/mallets',
            E: '#forge:tools/screwdrivers',
            F: 'gtceu:andesite_alloy_screw'
        }
        )
    event.shaped(
        Item.of('create:large_cogwheel',),
        [
            ' BE',
            'DAC',
            'FB '
        ],
        {
            A: 'gtceu:wood_gear',
            B: 'create:shaft',
            C: '#forge:tools/hammers',
            D: '#forge:tools/mallets',
            E: '#forge:tools/screwdrivers',
            F: 'gtceu:andesite_alloy_screw'
        }
        )
    event.recipes.gtceu.assembler('plastic_cog')
        .itemInputs('gtceu:small_wood_gear', 'create:shaft')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('create:cogwheel')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('ptfe_cog')
        .itemInputs('gtceu:small_wood_gear', 'create:shaft')
        .inputFluids('gtceu:polytetrafluoroethylene 72')
        .itemOutputs('create:cogwheel')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('pbi_cog')
        .itemInputs('gtceu:small_wood_gear', 'create:shaft')
        .inputFluids('gtceu:polybenzimidazole 36')
        .itemOutputs('create:cogwheel')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('plastic_large_cog')
        .itemInputs('gtceu:wood_gear', 'create:shaft')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('create:large_cogwheel')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('ptfe_large_cog')
        .itemInputs('gtceu:wood_gear', 'create:shaft')
        .inputFluids('gtceu:polytetrafluoroethylene 72')
        .itemOutputs('create:large_cogwheel')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('pbi_large_cog')
        .itemInputs('gtceu:wood_gear', 'create:shaft')
        .inputFluids('gtceu:polybenzimidazole 36')
        .itemOutputs('create:large_cogwheel')
        .duration(100)
        .EUt(7)
//Create belt replacement
    event.shaped(
        Item.of('create:belt_connector',),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: '#minecraft:wool',
            B: 'create:shaft',
            C: 'gtceu:wood_gear'
        }
        )
    event.shaped(
        Item.of('create:belt_connector', 2),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:raw_rubber_plate',
            B: 'create:shaft',
            C: 'create:cogwheel'
        }
        )
    event.shaped(
        Item.of('create:belt_connector', 4),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:rubber_plate',
            B: 'create:shaft',
            C: 'gtceu:lv_electric_motor'
        }
        )
    event.shaped(
        Item.of('create:belt_connector', 8),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:silicone_rubber_plate',
            B: 'create:shaft',
            C: 'gtceu:mv_electric_motor'
        }
        )
    event.shaped(
        Item.of('create:belt_connector', 16),
        [
            'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: 'gtceu:styrene_butadiene_rubber_plate',
            B: 'create:shaft',
            C: 'gtceu:hv_electric_motor'
        }
        )
    event.recipes.gtceu.assembler('raw_rubber_belt_c')
        .itemInputs('2x create:cogwheel', 'create:shaft')
        .inputFluids('gtceu:raw_rubber 864')
        .itemOutputs('2x create:belt_connector')
        .duration(100)
        .EUt(30)
        .circuit(1)
    event.recipes.gtceu.assembler('rubber_belt_c')
        .itemInputs('2x gtceu:lv_electric_motor', 'create:shaft')
        .inputFluids('gtceu:rubber 864')
        .itemOutputs('4x create:belt_connector')
        .duration(100)
        .EUt(30)
        .circuit(1)
    event.recipes.gtceu.assembler('silicone_rubber_belt_c')
        .itemInputs('2x gtceu:mv_electric_motor', 'create:shaft')
        .inputFluids('gtceu:silicone_rubber 864')
        .itemOutputs('8x create:belt_connector')
        .duration(100)
        .EUt(30)
        .circuit(1)
    event.recipes.gtceu.assembler('styrene_butadiene_rubber_belt_c')
        .itemInputs('2x gtceu:hv_electric_motor', 'create:shaft')
        .inputFluids('gtceu:styrene_butadiene_rubber 864')
        .itemOutputs('16x create:belt_connector')
        .duration(100)
        .EUt(30)
        .circuit(1)
//Create shaft replacement
    event.shapeless(
        Item.of('create:shaft', 2),
        [
            'gtceu:andesite_alloy_rod'
        ]
    )
//Create andesite casing
    event.recipes.gtceu.assembler('andesite_casing_log')
        .itemInputs('6x gtceu:andesite_alloy_plate', '#forge:stripped_logs')
        .itemOutputs('2x create:andesite_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);
    event.recipes.gtceu.assembler('andesite_casing_wood')
        .itemInputs('6x gtceu:andesite_alloy_plate', '#forge:stripped_wood')
        .itemOutputs('2x create:andesite_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);
    event.shaped(
        Item.of('create:andesite_casing', 2),
        [
            'ACA',
            'ABA',
            'ADA'
        ],
        {
            A: 'gtceu:andesite_alloy_plate',
            B: '#forge:stripped_logs',
            C: '#forge:tools/hammers',
            D: '#forge:tools/wrenches',
        }
        )
    event.shaped(
        Item.of('create:andesite_casing', 2),
        [
            'ACA',
            'ABA',
            'ADA'
        ],
        {
            A: 'gtceu:andesite_alloy_plate',
            B: '#forge:stripped_wood',
            C: '#forge:tools/hammers',
            D: '#forge:tools/wrenches',
        }
        )
//Create brass casing
    event.recipes.gtceu.assembler('brass_casing_log')
        .itemInputs('6x gtceu:brass_plate', '#forge:stripped_logs')
        .itemOutputs('2x create:brass_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);
    event.recipes.gtceu.assembler('brass_casing_wood')
        .itemInputs('6x gtceu:brass_plate', '#forge:stripped_wood')
        .itemOutputs('2x create:brass_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);
    event.shaped(
        Item.of('create:brass_casing', 2),
        [
            'ACA',
            'ABA',
            'ADA'
        ],
        {
            A: 'gtceu:brass_plate',
            B: '#forge:stripped_logs',
            C: '#forge:tools/hammers',
            D: '#forge:tools/wrenches',
        }
        )
    event.shaped(
        Item.of('create:brass_casing', 2),
        [
            'ACA',
            'ABA',
            'ADA'
        ],
        {
            A: 'gtceu:brass_plate',
            B: '#forge:stripped_wood',
            C: '#forge:tools/hammers',
            D: '#forge:tools/wrenches',
        }
        )
//Create copper caisng
    event.recipes.gtceu.assembler('copper_casing_log')
        .itemInputs('6x gtceu:copper_plate', '#forge:stripped_logs')
        .itemOutputs('2x create:copper_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);
    event.recipes.gtceu.assembler('copper_casing_wood')
        .itemInputs('6x gtceu:copper_plate', '#forge:stripped_wood')
        .itemOutputs('2x create:copper_casing')
        .duration(50)
        .EUt(16)
        .circuit(6);
    event.shaped(
        Item.of('create:copper_casing', 2),
        [
            'ACA',
            'ABA',
            'ADA'
        ],
        {
            A: 'gtceu:copper_plate',
            B: '#forge:stripped_logs',
            C: '#forge:tools/hammers',
            D: '#forge:tools/wrenches',
        }
        )
    event.shaped(
        Item.of('create:copper_casing', 2),
        [
            'ACA',
            'ABA',
            'ADA'
        ],
        {
            A: 'gtceu:copper_plate',
            B: '#forge:stripped_wood',
            C: '#forge:tools/hammers',
            D: '#forge:tools/wrenches',
        }
        )
//Create pipes
    event.shaped(
        Item.of('create:fluid_pipe',),
        [
            '   ',
            'AAA',
            'B C'
        ],
        {
            A: '#forge:plates/copper',
            B: '#forge:tools/wrenches',
            C: '#forge:tools/hammers'
        }
        )
    event.shaped(
        Item.of('create:mechanical_pump',),
        [
            'DC ',
            'GAH',
            ' EF'
        ],
        {
            A: 'create:fluid_pipe',
            C: 'gtceu:andesite_alloy_rotor',
            D: 'gtceu:andesite_alloy_screw',
            E: 'create:cogwheel',
            F: 'create:shaft',
            G: '#forge:tools/screwdrivers',
            H: '#forge:tools/wrenches'
        }
        )
    event.shaped(
        Item.of('create:fluid_tank',),
        [
            ' C ',
            'ABA',
            'ABA'
        ],
        {
            A: 'gtceu:copper_plate',
            B: 'gtceu:long_copper_rod',
            C: '#forge:tools/hammers'
        }
        )
//Create intermediates    
    event.shaped(
        Item.of('create:whisk',),
        [
            'CAD',
            'BAB',
            'BBB'
        ],
        {
            A: 'create:shaft',
            B: 'gtceu:iron_rod',
            C: '#forge:tools/hammers',
            D: '#forge:tools/files'
        }
        )
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
    
    event.recipes.create.mechanical_crafting(
        'create:precision_mechanism',
        [
            'ECFCE',
            'EABAE',
            'FDDDF'
        ],
        {
            A: 'create:electron_tube',
            B: 'gtceu:brass_plate',
            C: 'create:cogwheel',
            D: 'create:shaft',
            E: 'gtceu:poor_steel_gear',
            F: 'gtceu:poor_steel_plate'
        }
        )
//Create mechanical devices
    event.shaped(
        Item.of('create:basin',),
        [
            '   ',
            'ABA',
            'AAA'
        ],
        {
            A: 'gtceu:andesite_alloy_plate',
            B: '#forge:tools/hammers'
        }
        )
    event.shaped(
        Item.of('create:encased_fan',),
        [
            'ECF',
            'DBD',
            'GAG'
        ],
        {
            A: 'gtceu:andesite_alloy_rotor',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'gtceu:small_wood_gear',
            E: '#forge:tools/wrenches',
            F: '#forge:tools/screwdrivers',
            G: 'gtceu:andesite_alloy_screw'
        }
        )
    event.shaped(
        Item.of('create:mechanical_press'),
        [
            'ECF',
            'DBD',
            'GAG'
        ],
        {
            A: 'gtceu:double_iron_plate',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'gtceu:small_wood_gear',
            E: '#forge:tools/wrenches',
            F: '#forge:tools/screwdrivers',
            G: 'gtceu:andesite_alloy_screw'
        }
        )
    event.shaped(
        Item.of('create:mechanical_mixer'),
        [
            'ECF',
            'DBD',
            'GAG'
        ],
        {
            A: 'create:whisk',
            B: 'create:andesite_casing',
            C: 'create:shaft',
            D: 'gtceu:small_wood_gear',
            E: '#forge:tools/wrenches',
            F: '#forge:tools/screwdrivers',
            G: 'gtceu:andesite_alloy_screw'
        }
        )
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

    event.recipes.gtceu.assembler('generator_coil_copper')
        .itemInputs('create:shaft', '32x gtceu:fine_copper_wire')
        .itemOutputs('create_new_age:generator_coil')
        .duration(600)
        .EUt(48)    
    event.recipes.gtceu.assembler('generator_coil_copper2')
        .itemInputs('create:shaft', '24x gtceu:fine_annealed_copper_wire')
        .itemOutputs('create_new_age:generator_coil')
        .duration(600)
        .EUt(48)
    event.shaped(
        Item.of('create:mechanical_crafter', 2),
        [
            'EDE',
            'ABA',
            'ECE'
        ],
        {
            A: 'create:cogwheel',
            B: 'create:brass_casing',
            C: 'create:electron_tube',
            D: 'minecraft:crafting_table',
            E: 'create:shaft'
        }
        )
//Create kinetic generators
    event.shaped(
        Item.of('create:windmill_bearing',),
        [
            'FCG',
            'DAD',
            'EBE'
        ],
        {
            A: 'create:andesite_casing',
            B: 'create:shaft',
            C: '#minecraft:wooden_slabs',
            D: 'gtceu:wood_gear',
            E: 'gtceu:andesite_alloy_screw',
            F: '#forge:tools/screwdrivers',
            G: '#forge:tools/hammers'
        }
        )
    event.recipes.create.mechanical_crafting(
        'create:water_wheel', 
        [
            ' BBB ',
            'B C B',
            'BCACB',
            'B C B',
            ' BBB '
        ], 
        {
            A: 'create:andesite_casing',
            B: '#minecraft:planks',
            C: 'create:shaft'
        }
        )
    event.recipes.create.mechanical_crafting(
        'create:large_water_wheel', 
        [
            '  BBBBB  ',
            ' BB C BB ',
            'BBC C CBB',
            'B  CCC  B',
            'BCCCACCCB',
            'B  CCC  B',
            'BBC C CBB',
            ' BB C BB ',
            '  BBBBB  '
        ], 
        {
            A: 'create:andesite_casing',
            B: '#minecraft:planks',
            C: 'create:shaft'
        }
        )
})