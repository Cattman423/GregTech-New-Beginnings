ServerEvents.recipes(event => {
    //import.
    event.replaceInput(
        { input: 'create:industrial_iron_block' },
        'create:industrial_iron_block',
        'gtceu:poor_steel_block'
        )
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
    event.shapeless(
        Item.of('gtceu:andesite_alloy_dust', 2), // arg 1: output
        [
          '3x gtceu:andesite_dust', 'gtceu:small_iron_dust', // arg 2: the array of inputs
        ]
        )
    event.replaceInput(
        { input: 'gtceu:andesite_alloy_ingot' }, // Arg 1: the filter
        'gtceu:andesite_alloy_ingot',            // Arg 2: the item to replace
        'create:andesite_alloy'        // Arg 3: the item to replace it with
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
//Create rose quartz
    event.replaceInput(
        { input: 'create:polished_rose_quartz' },
        'create:polished_rose_quartz',
        'gtceu:rose_quartz'
        )
    event.recipes.create.mixing(
        ['create:rose_quartz'], 
        ['8x minecraft:redstone', '3x gtceu:quartz_sand_dust']
    ).heatRequirement('lowheated')
//Greg bricks
    event.recipes.create.compacting(
        ['2x kubejs:coke_clay'], 
        ['2x minecraft:clay_ball', '4x #minecraft:sand']
    )
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
        [' BE', 'DAC', 'FB '],
        {A: '#forge:small_bakelite', B: 'create:shaft', C: '#forge:tools/hammers',
        D: '#forge:tools/mallets', E: '#forge:tools/screwdrivers', F: 'gtceu:andesite_alloy_screw'})
    event.shaped(
        Item.of('create:large_cogwheel',),
        [' BE', 'DAC', 'FB '],
        {A: '#forge:bakelite', B: 'create:shaft', C: '#forge:tools/hammers',
        D: '#forge:tools/mallets', E: '#forge:tools/screwdrivers', F: 'gtceu:andesite_alloy_screw'})
    event.shaped(
        Item.of('tfmg:steel_cogwheel',),
        [' BE', 'DAC', 'FB '],
        {A: 'gtceu:small_steel_gear', B: 'create:shaft', C: '#forge:tools/hammers',
        D: '#forge:tools/mallets', E: '#forge:tools/screwdrivers', F: 'gtceu:andesite_alloy_screw'})
    event.shaped(
        Item.of('tfmg:large_steel_cogwheel',),
        [' BE', 'DAC', 'FB '],
        {A: 'gtceu:steel_gear', B: 'create:shaft', C: '#forge:tools/hammers',
        D: '#forge:tools/mallets', E: '#forge:tools/screwdrivers', F: 'gtceu:andesite_alloy_screw'})
    event.shaped(
        Item.of('tfmg:aluminum_cogwheel',),
        [' BE', 'DAC', 'FB '],
        {A: 'gtceu:small_wohler_aluminium_gear', B: 'create:shaft', C: '#forge:tools/hammers',
        D: '#forge:tools/mallets', E: '#forge:tools/screwdrivers', F: 'gtceu:andesite_alloy_screw'})
    event.shaped(
        Item.of('tfmg:large_aluminum_cogwheel',),
        [' BE', 'DAC', 'FB '],
        {A: 'gtceu:wohler_aluminium_gear', B: 'create:shaft', C: '#forge:tools/hammers',
        D: '#forge:tools/mallets', E: '#forge:tools/screwdrivers', F: 'gtceu:andesite_alloy_screw'})
    function cogs(id, gear, fluid, output){
        event.recipes.gtceu.assembler(id)
            .itemInputs(gear, 'create:shaft')
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(sec*5)
            .EUt(ulv)
        }
//Create transportation
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
            C: '#forge:bakelite'
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
        .duration(sec*5)
        .EUt(lv)
        .circuit(1)
    event.recipes.gtceu.assembler('rubber_belt_c')
        .itemInputs('2x gtceu:lv_electric_motor', 'create:shaft')
        .inputFluids('gtceu:rubber 864')
        .itemOutputs('4x create:belt_connector')
        .duration(sec*5)
        .EUt(lv)
        .circuit(1)
    event.recipes.gtceu.assembler('silicone_rubber_belt_c')
        .itemInputs('2x gtceu:mv_electric_motor', 'create:shaft')
        .inputFluids('gtceu:silicone_rubber 864')
        .itemOutputs('8x create:belt_connector')
        .duration(sec*5)
        .EUt(lv)
        .circuit(1)
    event.recipes.gtceu.assembler('styrene_butadiene_rubber_belt_c')
        .itemInputs('2x gtceu:hv_electric_motor', 'create:shaft')
        .inputFluids('gtceu:styrene_butadiene_rubber 864')
        .itemOutputs('16x create:belt_connector')
        .duration(sec*5)
        .EUt(lv)
        .circuit(1)
    function chute(output, plate, circuit){
        event.shaped(
            Item.of(output),
            [
                'A A',
                'ABA',
                'DAC'
            ],
            {
                A: plate,
                B: circuit,
                C: '#forge:tools/hammers',
                D: '#forge:tools/wrenches',
            }
            )
    }
    function funnel(output, plate, circuit, belt){
        event.shaped(
            Item.of(output),
            [
                'DFC',
                'ABA',
                'AEA'
                
            ],
            {
                A: plate,
                B: circuit,
                C: '#forge:tools/hammers',
                D: '#forge:tools/wrenches',
                E: belt,
                F: '#forge:tools/knives'
            }
            )
    }
//Create shaft replacement
    event.shapeless(
        Item.of('create:shaft', 2),
        [
            'gtceu:andesite_alloy_rod'
        ]
    )
//Create pipes
    function createpipe(output, metal){
        event.shaped(
            Item.of(output),
            ['B C', 'AAA', '   '],
            {A: metal, B: '#forge:tools/wrenches', C: '#forge:tools/hammers'})
    }
    function createpump(output, pipe){
        event.shaped(
            Item.of(output),
            ['DC ', 'GAH', ' EF'],
            {A: pipe, C: 'gtceu:andesite_alloy_rotor', D: 'gtceu:andesite_alloy_screw', E: 'create:cogwheel',
            F: 'create:shaft', G: '#forge:tools/screwdrivers', H: '#forge:tools/wrenches'})
    }
    function createsmartpipe(output, pipe){
        event.shaped(
            Item.of(output),
            ['EFG', 'BAB', 'DCD'],
            {A: pipe, B: 'kubejs:sealed_mechanism', C: 'create:electron_tube', D: 'gtceu:andesite_alloy_screw', 
            E: '#forge:tools/wrenches', F: 'gtceu:brass_plate', G: '#forge:tools/screwdrivers'})
    }
    createpipe('create:fluid_pipe', '#forge:plates/copper')
    createpipe('tfmg:cast_iron_pipe', 'gtceu:poor_steel_plate')
    createpipe('tfmg:steel_pipe', 'gtceu:steel_plate')
    createpipe('tfmg:brass_pipe', 'gtceu:brass_plate')
    createpipe('tfmg:aluminum_pipe', 'gtceu:wohler_aluminium_plate')
    createpump('create:mechanical_pump', 'create:fluid_pipe')
    createpump('tfmg:cast_iron_mechanical_pump', 'tfmg:cast_iron_pipe')
    createpump('tfmg:steel_mechanical_pump', 'tfmg:steel_pipe')
    createpump('tfmg:brass_mechanical_pump', 'tfmg:brass_pipe')
    createpump('tfmg:aluminum_mechanical_pump', 'tfmg:aluminum_pipe')
    createsmartpipe('create:smart_fluid_pipe', 'create:fluid_pipe')
    createsmartpipe('tfmg:cast_iron_smart_fluid_pipe', 'tfmg:cast_iron_pipe')
    createsmartpipe('tfmg:steel_smart_fluid_pipe', 'tfmg:steel_pipe')
    createsmartpipe('tfmg:brass_smart_fluid_pipe', 'tfmg:brass_pipe')
    createsmartpipe('tfmg:aluminum_smart_fluid_pipe', 'tfmg:aluminum_pipe')
    event.shaped(
        Item.of('create:fluid_tank',),
        [' C ', 'ABA', 'ABA'],
        {A: 'gtceu:copper_plate', B: 'gtceu:long_copper_rod', C: '#forge:tools/hammers'})
    event.shaped(
        Item.of('create:spout'),
        ['CED', 'FAF', 'GBG'],
        {A: 'create:fluid_tank', B: 'create:fluid_pipe', C: '#forge:tools/hammers', D: '#forge:tools/wrenches',
        E: '#forge:tools/screwdrivers', F: 'kubejs:sealed_mechanism', G: 'gtceu:andesite_alloy_screw'})
    event.shaped(
        Item.of('create:item_drain'),
        ['CBD', 'FAF', 'GEG'],
        {A: 'create:fluid_tank', B: 'minecraft:iron_bars', C: '#forge:tools/hammers', D: '#forge:tools/wrenches',
        E: '#forge:tools/screwdrivers', F: 'kubejs:sealed_mechanism', G: 'gtceu:andesite_alloy_screw'})
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
    event.shaped(
        Item.of('create:electron_tube'),
        [
            '   ',
            'DAE',
            'BCB'
        ],
        {
            A: 'create:polished_rose_quartz',
            B: 'gtceu:wrought_iron_bolt',
            C: 'gtceu:andesite_alloy_plate',
            D: '#forge:tools/screwdrivers',
            E: 'gtceu:andesite_alloy_screw'
        }
    )
    event.shaped(
        Item.of('create:brass_hand'),
        [
            ' A ',
            'BBB',
            ' B '
        ],
        {
            A: 'create:andesite_alloy',
            B: 'gtceu:double_copper_plate',
            //C: '#forge:tools/wrenches',
            //D: '#forge:tools/hammers',
            //E: 'create:electron_tube'
        }
        )
    
    event.recipes.gtceu.circuit_assembler('electron_tube')
        .itemInputs('gtceu:wrought_iron_bolt', 'create:polished_rose_quartz')
        .inputFluids('gtceu:rose_quartz 72')
        .itemOutputs('2x create:electron_tube')
        .duration(200)
        .EUt(16)

    event.replaceInput(
        { input: 'create:precision_mechanism' },
        'create:precision_mechanism',
        'kubejs:clockwork_mechanism'
        )
//Blaze Burner
    event.shaped(
        Item.of('create:empty_blaze_burner'),
        [
            'BCB',
            'BAB',
            'DED'
        ],
        {
            A: 'minecraft:netherrack',
            B: 'minecraft:iron_bars',
            C: '#forge:tools/wrenches',
            D: 'gtceu:iron_plate',
            E: 'create:electron_tube'
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
    function mechcreate(output, input, shaft){
        event.shaped(
            Item.of(output),
            [
                'ECF',
                'DBD',
                'GAG'
            ],
            {
                A: input,
                B: 'create:andesite_casing',
                C: shaft,
                D: 'kubejs:rudimentary_mechanism',
                E: '#forge:tools/wrenches',
                F: '#forge:tools/screwdrivers',
                G: 'gtceu:andesite_alloy_screw'
            }
            )
    }
    event.shaped(
        Item.of('vintageimprovements:vacuum_chamber'),
        ['ECF', 'DBD', 'GAG'],
        {A: 'create:mechanical_pump', B: 'create:andesite_casing', C: 'kubejs:sealed_mechanism', D: 'kubejs:rudimentary_mechanism',
        E: '#forge:tools/wrenches', F: '#forge:tools/screwdrivers', G: 'gtceu:andesite_alloy_screw'}
    )
    event.shaped(
        Item.of('vintageimprovements:curving_press'),
        ['ECF', 'DBD', 'G G'],
        {/*A: 'create:mechanical_pump', */B: 'create:andesite_casing', C: 'create:shaft', D: 'kubejs:rudimentary_mechanism',
        E: '#forge:tools/wrenches', F: '#forge:tools/screwdrivers', G: 'gtceu:andesite_alloy_screw'}
    )

    /*event.recipes.gtceu.assembler('generator_coil_copper')
        .itemInputs('create:shaft', '32x gtceu:fine_copper_wire')
        .itemOutputs('create_new_age:generator_coil')
        .duration(600)
        .EUt(48)    
    event.recipes.gtceu.assembler('generator_coil_copper2')
        .itemInputs('create:shaft', '24x gtceu:fine_annealed_copper_wire')
        .itemOutputs('create_new_age:generator_coil')
        .duration(600)
        .EUt(48)*/
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
    event.shaped(
        Item.of('createlowheated:basic_burner'),
        [
            'A A',
            'ABA',
            'CAD'
        ],
        {
            A: 'gtceu:andesite_alloy_plate',
            B: 'minecraft:charcoal',
            C: '#forge:tools/wrenches',
            D: '#forge:tools/hammers',
            //E: 'create:electron_tube'
        }
        )
    event.recipes.create.mechanical_crafting(
        'vintageimprovements:helve_hammer', 
        [ 
            ' B SS ',
            'BLLLCD',
            'BB  s '
        ], 
        {
            S: 'gtceu:iron_spring',
            B: 'minecraft:iron_block',
            L: '#minecraft:logs',
            s: 'create:shaft',
            C: 'create:andesite_casing',
            D: 'kubejs:clockwork_mechanism'
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
            D: '#forge:bakelite',
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
    event.recipes.create.mechanical_crafting(
        'create:steam_engine', 
        [
            'BBB F   ',
            'BDEEAEEC',
            'BBB     '
        ], 
        {
            A: 'gtceu:brass_plate',
            B: 'gtceu:copper_plate',
            C: 'create:shaft',
            D: 'kubejs:clockwork_mechanism',
            E: 'gtceu:poor_steel_rod',
            F: 'gtceu:poor_steel_bolt'
        }
        )
    const mcplanks = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']

    mcplanks.forEach( (base) => {
        event.shapeless(
            Item.of('createcasing:' + base + '_shaft'),
            [
              'minecraft:stripped_' + base + '_log', 'create:shaft',
            ]
            )
    })
    event.shapeless(
        Item.of('createcasing:bamboo_shaft'),
        [
          'minecraft:stripped_bamboo_block', 'create:shaft',
        ]
        )
    event.shapeless(
        Item.of('createcasing:crimson_shaft'),
        [
          'minecraft:stripped_crimson_stem', 'create:shaft',
        ]
        )
    event.shapeless(
        Item.of('createcasing:warped_shaft'),
        [
          'minecraft:stripped_warped_stem', 'create:shaft',
        ]
        )
    event.shaped(
        Item.of('createcasing:brass_shaft'),
        [' A ', ' B ', ' C '],
        {A: '#forge:tools/hammers', B: 'gtceu:brass_plate', C: 'create:shaft'}
        )
    event.recipes.gtceu.lathe('kubejs:gtceu/lathe/create/glass_shaft')
        .itemInputs(/*'minecraft:glass'*/'#forge:glass')
        .itemOutputs('createcasing:glass_shaft')
        .EUt(16)
        .duration(196)

    chute('2x create:chute', 'gtceu:andesite_alloy_plate', 'gtceu:small_andesite_alloy_gear')
    chute('2x create:smart_chute', 'gtceu:brass_plate', 'create:electron_tube')

    cogs('plastic_cog', '#forge:small_bakelite', 'gtceu:polyethylene 144', 'create:cogwheel')
    cogs('ptfe_cog', '#forge:small_bakelite', 'gtceu:polytetrafluoroethylene 72', 'create:cogwheel')
    cogs('pbi_cog', '#forge:small_bakelite', 'gtceu:polybenzimidazole 36', 'create:cogwheel')
    cogs('plastic_large_cog', '#forge:bakelite', 'gtceu:polyethylene 144', 'create:large_cogwheel')
    cogs('ptfe_large_cog', '#forge:bakelite', 'gtceu:polytetrafluoroethylene 72', 'create:large_cogwheel')
    cogs('pbi_large_cog', '#forge:bakelite', 'gtceu:polybenzimidazole 36', 'create:large_cogwheel')

    cogs('plastic_steel_cog', 'gtceu:small_steel_gear', 'gtceu:polyethylene 144', 'tfmg:steel_cogwheel')
    cogs('ptfe_steel_cog', 'gtceu:small_steel_gear', 'gtceu:polytetrafluoroethylene 72', 'tfmg:steel_cogwheel')
    cogs('pbi_steel_cog', 'gtceu:small_steel_gear', 'gtceu:polybenzimidazole 36', 'tfmg:steel_cogwheel')
    cogs('plastic_large_steel_cog', 'gtceu:steel_gear', 'gtceu:polyethylene 144', 'tfmg:large_steel_cogwheel')
    cogs('ptfe_large_steel_cog', 'gtceu:steel_gear', 'gtceu:polytetrafluoroethylene 72', 'tfmg:large_steel_cogwheel')
    cogs('pbi_large_steel_cog', 'gtceu:steel_gear', 'gtceu:polybenzimidazole 36', 'tfmg:large_steel_cogwheel')
    
    cogs('plastic_alum_cog', 'gtceu:small_wohler_aluminium_gear', 'gtceu:polyethylene 144', 'tfmg:aluminum_cogwheel')
    cogs('ptfe_alum_cog', 'gtceu:small_wohler_aluminium_gear', 'gtceu:polytetrafluoroethylene 72', 'tfmg:aluminum_cogwheel')
    cogs('pbi_alum_cog', 'gtceu:small_wohler_aluminium_gear', 'gtceu:polybenzimidazole 36', 'tfmg:aluminum_cogwheel')
    cogs('plastic_large_alum_cog', 'gtceu:wohler_aluminium_gear', 'gtceu:polyethylene 144', 'tfmg:large_aluminum_cogwheel')
    cogs('ptfe_large_alum_cog', 'gtceu:wohler_aluminium_gear', 'gtceu:polytetrafluoroethylene 72', 'tfmg:large_aluminum_cogwheel')
    cogs('pbi_large_alum_cog', 'gtceu:wohler_aluminium_gear', 'gtceu:polybenzimidazole 36', 'tfmg:large_aluminum_cogwheel')

    funnel('2x create:andesite_funnel', 'gtceu:andesite_alloy_plate', 'gtceu:small_andesite_alloy_gear', 'minecraft:dried_kelp')
    funnel('2x create:brass_funnel', 'gtceu:brass_plate', 'create:electron_tube', 'minecraft:dried_kelp')
    funnel('2x create:andesite_tunnel', 'gtceu:andesite_alloy_plate', 'gtceu:small_andesite_alloy_gear', 'create:belt_connector')
    funnel('2x create:brass_tunnel', 'gtceu:brass_plate', 'create:electron_tube', 'create:belt_connector')

    mechcreate('create:encased_fan', 'gtceu:andesite_alloy_rotor', 'create:shaft')
    mechcreate('create:mechanical_press', 'gtceu:double_iron_plate', 'create:shaft')
    mechcreate('create:mechanical_mixer', 'create:whisk', 'create:shaft')
    mechcreate('create:mechanical_saw', 'gtceu:iron_buzz_saw_blade', 'create:shaft')
    mechcreate('create:mechanical_drill', 'gtceu:iron_drill_head', 'create:electron_tube')
    mechcreate('create:mechanical_roller', 'create:crushing_wheel', 'create:electron_tube')
    mechcreate('create:mechanical_piston', 'create:piston_extension_pole', '#minecraft:wooden_slabs')
    mechcreate('create:mechanical_bearing', 'create:shaft', '#minecraft:wooden_slabs')
    mechcreate('create:speedometer', 'minecraft:compass', 'create:shaft')
    mechcreate('create:millstone', '#balm:stones', 'create:cogwheel')
    mechcreate('create:gantry_carriage', 'create:cogwheel', '#minecraft:wooden_slabs')
    mechcreate('create:cuckoo_clock', 'minecraft:clock', '#minecraft:planks')
    mechcreate('create:deployer', 'create:brass_hand', 'create:electron_tube')
    mechcreate('create:rope_pulley', '#forge:rope', 'create:electron_tube')
    mechcreate('sliceanddice:slicer', 'create:turntable', 'create:electron_tube')
    mechcreate('rechiseledcreate:mechanical_chisel', 'rechiseled:chisel', 'create:shaft')
    mechcreate('createqol:botanist_saw', 'chipped:botanist_workbench', 'create:shaft')
    mechcreate('createqol:glassblower_saw', 'chipped:glassblower', 'create:shaft')
    mechcreate('createqol:loom_saw', 'chipped:loom_table', 'create:shaft')
    mechcreate('createqol:mason_saw', 'chipped:mason_table', 'create:shaft')
    mechcreate('createqol:tinkering_saw', 'chipped:tinkering_table', 'create:shaft')
    mechcreate('vintageimprovements:belt_grinder', 'vintageimprovements:grinder_belt', 'create:shaft')
    mechcreate('vintageimprovements:spring_coiling_machine', 'vintageimprovements:spring_coiling_machine_wheel', 'create:shaft')
})