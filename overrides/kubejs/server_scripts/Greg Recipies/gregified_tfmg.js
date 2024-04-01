ServerEvents.recipes(event => {
//Oil
    event.recipes.gtceu.distillery('gtceu:oil')
        .inputFluids('tfmg:crude_oil_fluid',1000)
        .outputFluids('gtceu:oil', 1000)
        .duration(240)
        .EUt(30)
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
//
    event.shapeless(
        Item.of('tfmg:steel_truss'),
        [
            'gtceu:steel_frame'
        ]
    )
//Intermediates
    /*event.recipes.create.mechanical_crafting('kubejs:advanced_clockwork_mechanism', [
        'AEBEA',
        'ACFCA',
        'BDDDB'
    ], 
    {
        A: 'gtceu:wrought_iron_gear',
        B: 'gtceu:wrought_iron_plate',
        C: 'create:precision_mechanism',
        D: 'create:shaft',
        E: 'create:cogwheel',
        F: 'gtceu:poor_steel_plate'
    })*/

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

    event.replaceInput(
        { input: 'tfmg:steel_mechanism' },
        'tfmg:steel_mechanism',
        'kubejs:advanced_clockwork_mechanism')
//Pumpjack
    event.recipes.gtceu.assembler('machine_input')
        .circuit(9)
        .itemInputs(
            'gtceu:solid_machine_casing', 
            'kubejs:advanced_clockwork_mechanism', 
            'create:shaft'
        )
        .itemOutputs('tfmg:machine_input')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('pumpjack_crank')
        .circuit(9)
        .itemInputs(
            '2x gtceu:steel_plate', 
            '2x gtceu:steel_rod', 
            'minecraft:string', 
            'gtceu:solid_machine_casing'
        )
        .itemOutputs('tfmg:pumpjack_crank')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('pumpjack_base')
        .circuit(11)
        .itemInputs(
            '4x gtceu:steel_plate',
            '2x kubejs:advanced_clockwork_mechanism', 
            'tfmg:industrial_pipe', 
            'minecraft:string', 
            'gtceu:solid_machine_casing'
        )
        .itemOutputs('tfmg:pumpjack_base')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('pumpjack_hammer')
        .circuit(9)
        .itemInputs('2x gtceu:steel_frame', 'create:shaft')
        .itemOutputs('tfmg:pumpjack_hammer')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('pumpjack_head')
        .circuit(9)
        .itemInputs('4x gtceu:steel_plate', 'gtceu:steel_block')
        .itemOutputs('tfmg:pumpjack_hammer_head')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('pumpjack_arm')
        .circuit(11)
        .itemInputs('6x gtceu:steel_plate')
        .itemOutputs('tfmg:pumpjack_hammer_part')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('pumpjack_connector')
        .circuit(13)
        .itemInputs('tfmg:pumpjack_hammer_part', 'create:shaft')
        .itemOutputs('tfmg:pumpjack_hammer_connector')
        .duration(200)
        .EUt(16)
//Industrial Pipe Wiremill
    event.recipes.gtceu.wiremill('tsipw')
        .itemInputs('gtceu:steel_tiny_fluid_pipe')
        .itemOutputs('tfmg:industrial_pipe')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.wiremill('ssipw')
        .itemInputs('gtceu:steel_small_fluid_pipe')
        .itemOutputs('2x tfmg:industrial_pipe')
        .duration(150)
        .EUt(7)
    event.recipes.gtceu.wiremill('sipw')
        .itemInputs('gtceu:steel_normal_fluid_pipe')
        .itemOutputs('4x tfmg:industrial_pipe')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.wiremill('lsipw')
        .itemInputs('gtceu:steel_large_fluid_pipe')
        .itemOutputs('8x tfmg:industrial_pipe')
        .duration(250)
        .EUt(30)
    event.recipes.gtceu.wiremill('hsipw')
        .itemInputs('gtceu:steel_huge_fluid_pipe')
        .itemOutputs('16x tfmg:industrial_pipe')
        .duration(300)
        .EUt(64)
    event.recipes.gtceu.wiremill('tsstipw')
        .itemInputs('gtceu:stainless_steel_tiny_fluid_pipe')
        .itemOutputs('8x tfmg:industrial_pipe')
        .duration(200)
        .EUt(64)
    event.recipes.gtceu.wiremill('ssstipw')
        .itemInputs('gtceu:stainless_steel_small_fluid_pipe')
        .itemOutputs('16x tfmg:industrial_pipe')
        .duration(250)
        .EUt(96)
    event.recipes.gtceu.wiremill('sstipw')
        .itemInputs('gtceu:stainless_steel_normal_fluid_pipe')
        .itemOutputs('32x tfmg:industrial_pipe')
        .duration(300)
        .EUt(120)
    event.recipes.gtceu.wiremill('lsstipw')
        .itemInputs('gtceu:stainless_steel_large_fluid_pipe')
        .itemOutputs('64x tfmg:industrial_pipe')
        .duration(350)
        .EUt(256)
//Industrial Pipe Extruder
    event.recipes.gtceu.extruder('tsipe')
        .itemInputs('gtceu:steel_tiny_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('tfmg:industrial_pipe')
        .duration(1)
        .EUt(64)
    event.recipes.gtceu.extruder('ssipe')
        .itemInputs('gtceu:steel_small_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('2x tfmg:industrial_pipe')
        .duration(4)
        .EUt(64)
    event.recipes.gtceu.extruder('sipe')
        .itemInputs('gtceu:steel_normal_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('4x tfmg:industrial_pipe')
        .duration(8)
        .EUt(64)
    event.recipes.gtceu.extruder('lsipe')
        .itemInputs('gtceu:steel_large_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('8x tfmg:industrial_pipe')
        .duration(16)
        .EUt(64)
    event.recipes.gtceu.extruder('hsipe')
        .itemInputs('gtceu:steel_huge_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('16x tfmg:industrial_pipe')
        .duration(32)
        .EUt(64)
    event.recipes.gtceu.extruder('tsstipe')
        .itemInputs('gtceu:stainless_steel_tiny_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('8x tfmg:industrial_pipe')
        .duration(4)
        .EUt(120)
    event.recipes.gtceu.extruder('ssstipe')
        .itemInputs('gtceu:stainless_steel_small_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('16x tfmg:industrial_pipe')
        .duration(8)
        .EUt(120)
    event.recipes.gtceu.extruder('sstipe')
        .itemInputs('gtceu:stainless_steel_normal_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('32x tfmg:industrial_pipe')
        .duration(16)
        .EUt(120)
    event.recipes.gtceu.extruder('lsstipe')
        .itemInputs('gtceu:stainless_steel_large_fluid_pipe')
        .notConsumable('gtceu:tiny_pipe_extruder_mold')
        .itemOutputs('64x tfmg:industrial_pipe')
        .duration(32)
        .EUt(120)
    event.recipes.create.crushing(['gtceu:raw_lignite', Item.of('gtceu:raw_lignite').withChance(0.005)], 'tfmg:lignite')
    event.recipes.create.milling([Item.of('gtceu:raw_lignite').withChance(0.95)], 'tfmg:lignite')
})