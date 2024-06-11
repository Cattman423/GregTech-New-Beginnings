ServerEvents.recipes(event => {
    event.remove({mod: 'ad_astra_rocketed'})
//Nose Cone
    event.recipes.gtceu.assembler('nose_cone')
        .itemInputs(
            'kubejs:nesn_computer_chip', 
            'kubejs:bls_system', 
            '32x kubejs:thermal_tiles', 
            '4x kubejs:rcs_block', 
            '64x gtceu:aluminium_plate', 
            '4x gtceu:fluid_cell',
            '4x gtceu:quartzite_plate'
        )
        .itemOutputs('ad_astra:rocket_nose_cone')
        .duration(min*30)
        .EUt(hv)

    event.recipes.gtceu.assembler('ad_command')
        .itemInputs(
            'kubejs:dsn_computer_chip', 
            '2x kubejs:bls_system', 
            '32x kubejs:thermal_tiles', 
            '4x kubejs:rcs_block', 
            '64x gtceu:titanium_plate', 
            '4x gtceu:fluid_cell',
            '4x gtceu:lunite_plate'
        )
        .itemOutputs('kubejs:ad_command')
        .duration(min*30)
        .EUt(ev)

    event.recipes.gtceu.assembler('ad_command_ii')
        .itemInputs(
            '2x kubejs:dsn_computer_chip', 
            'kubejs:als_system', 
            '32x kubejs:thermal_tiles', 
            '4x kubejs:rcs_block', 
            '64x gtceu:tungsten_steel_plate', 
            '4x gtceu:fluid_cell',
            '4x gtceu:lunite_plate'
        )
        .itemOutputs('kubejs:ad_command_ii')
        .duration(min*30)
        .EUt(iv)
    
    event.recipes.gtceu.large_chemical_reactor('basic_life_support')
        .itemInputs(
            '4x gtceu:carbon_dust',
            '4x gtceu:fluid_cell',
            '2x #gtceu:circuits/hv'
        )
        .inputFluids(
            'gtceu:oxygen 6000',
            'gtceu:nitrogen 4000'
        )
        .itemOutputs('kubejs:bls_system')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*12)
        .EUt(hv)
    
    event.recipes.gtceu.large_chemical_reactor('advanced_life_support')
        .itemInputs(
            '16x gtceu:carbon_dust',
            '16x gtceu:fluid_cell',
            '2x #gtceu:circuits/luv'
        )
        .inputFluids(
            'gtceu:oxygen 24000',
            'gtceu:nitrogen 16000'
        )
        .itemOutputs('kubejs:als_system')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*12)
        .EUt(iv)
    
    event.recipes.gtceu.alloy_smelter('thermal_tiles')
        .itemInputs(
            '32x gtceu:silicon_dioxide_dust',
            'gtceu:dense_aluminium_plate'
        )
        .itemOutputs('3x kubejs:thermal_tiles')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*6)
        .EUt(hv)

    event.recipes.gtceu.assembler('rcs_block')
        .itemInputs(
            '4x gtceu:power_thruster',
            'ad_astra:engine_frame',
            '5x gtceu:aluminium_foil',
            '#gtceu:circuits/mv',
            '2x gtceu:fluid_cell'
        )
        .inputFluids('gtceu:carbon_dioxide 2000')
        .itemOutputs('kubejs:rcs_block')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*6)
        .EUt(hv)
    
    event.recipes.gtceu.cutter('rocket_fin')
        .itemInputs('gtceu:dense_steel_plate')
        .inputFluids('gtceu:lubricant 500')
        .itemOutputs('ad_astra:rocket_fin')
        .duration(min*3)
        .EUt(hv)

    event.recipes.gtceu.assembler('engine_frame')
        .itemInputs(
            'gtceu:stainless_steel_frame',
            '4x gtceu:stainless_steel_plate',
            '32x gtceu:steel_bolt'
        )
        .itemOutputs('ad_astra:engine_frame')
        .duration(min*3)
        .EUt(hv)

    event.recipes.gtceu.assembler('steel_nozzle')
        .itemInputs(
            '16x gtceu:steel_foil',
            '32x gtceu:steel_tiny_fluid_pipe',
            '16x gtceu:carbon_fiber_mesh'
        )
        .itemOutputs('kubejs:steel_nozzle')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*12)
        .EUt(hv)

    event.recipes.gtceu.laser_engraver('steel_fuel')
        .itemInputs('gtceu:brass_block')
        .notConsumable('#forge:lenses/grey')
        .itemOutputs('kubejs:steel_fuel')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*30)
        .EUt(hv)

    event.recipes.gtceu.assembler('steel_engine')
        .itemInputs(
            'kubejs:steel_fuel', 
            'kubejs:steel_nozzle',
            '3x gtceu:aluminium_small_fluid_pipe',
            'gtceu:steel_foil'
        )
        .inputFluids('gtceu:styrene_butadiene_rubber 576')
        .itemOutputs('ad_astra:steel_engine')
        .duration(min*12)
        .EUt(hv)

    event.recipes.gtceu.assembler('desh_engine')
        .itemInputs(
            'kubejs:steel_fuel', 
            'kubejs:steel_nozzle',
            '3x gtceu:titanium_small_fluid_pipe',
            '2x gtceu:desh_foil'
        )
        .inputFluids('gtceu:styrene_butadiene_rubber 576')
        .itemOutputs('ad_astra:desh_engine')
        .duration(min*12)
        .EUt(ev)

    event.recipes.gtceu.assembler('ostrum_engine')
        .itemInputs(
            '3x kubejs:steel_fuel', 
            '3x kubejs:steel_nozzle',
            '3x gtceu:tungsten_steel_small_fluid_pipe',
            '6x gtceu:ostrum_foil'
        )
        .inputFluids('gtceu:styrene_butadiene_rubber 576')
        .itemOutputs('ad_astra:ostrum_engine')
        .duration(min*12)
        .EUt(iv)

    event.recipes.gtceu.circuit_assembler('nesn_chip')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x #gtceu:circuits/mv',
            '4x #gtceu:inductors',
            '4x #gtceu:transistors',
            '16x gtceu:ram_chip',
            '8x gtceu:fine_electrum_wire'
        )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('kubejs:nesn_computer_chip')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*2)
        .EUt(mv)

    event.recipes.gtceu.circuit_assembler('dsn_chip')
        .itemInputs(
            '2x gtceu:plastic_printed_circuit_board',
            '2x #gtceu:circuits/ev',
            'kubejs:advanced_smd_inductor_wrap',
            'kubejs:advanced_smd_transistor_wrap',
            '2x kubejs:ram_chip_wrap',
            '8x gtceu:fine_electrum_wire'
        )
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('kubejs:dsn_computer_chip')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(min*2)
        .EUt(ev)

    function extruder(id, input, mold, output, time, eu){
        event.recipes.gtceu.extruder('kubejs:gtceu/extruder/ad_astra/' + id)
            .itemInputs(input, mold)
            .itemOutputs(output)
            .duration(time)
            .EUt(eu)
    }

    extruder('aluminium_stringer', 'gtceu:dense_aluminium_plate', 'gtceu:foil_extruder_mold', 'kubejs:aluminium_stringer', min*2, hv)
    extruder('desh_stringer', 'gtceu:dense_desh_plate', 'gtceu:foil_extruder_mold', 'kubejs:desh_stringer', min*2, ev)
    extruder('ostrum_stringer', 'gtceu:dense_ostrum_plate', 'gtceu:foil_extruder_mold', 'kubejs:ostrum_stringer', min*2, iv)
    extruder('calorite_stringer', 'gtceu:dense_calorite_plate', 'gtceu:foil_extruder_mold', 'kubejs:calorite_stringer', min*2, luv)
})