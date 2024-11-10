ServerEvents.recipes(event => {
//Recipe Replacements
    event.replaceInput(
        { id: 'gtceu:assembler/optical_pipe' },
        'gtceu:fine_borosilicate_glass_wire',
        '#forge:optical_fiber'
        )
//Optical SMDs
    event.recipes.gtceu.circuit_assembler('optical_smd_transistor')
        .itemInputs('8x #forge:optical_fiber', 'gtceu:vanadium_gallium_foil')
        .inputFluids('gtceu:polyvinyl_butyral 144')
        .itemOutputs('16x kubejs:optical_smd_transistor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(6000)

    event.recipes.gtceu.circuit_assembler('optical_smd_resistor')
        .itemInputs('4x #forge:optical_fiber', 'gtceu:carbon_fiber_mesh')
        .inputFluids('gtceu:polyvinyl_butyral 288')
        .itemOutputs('16x kubejs:optical_smd_resistor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(6000)

    event.recipes.gtceu.circuit_assembler('optical_smd_capacitor')
        .itemInputs('4x #forge:optical_fiber', '2x gtceu:carbon_fiber_plate')
        .inputFluids('gtceu:polyvinyl_butyral 36')
        .itemOutputs('16x kubejs:optical_smd_capacitor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(6000)

    event.recipes.gtceu.circuit_assembler('optical_smd_diode')
        .itemInputs('16x #forge:optical_fiber', '2x gtceu:naquadah_wafer')
        .inputFluids('gtceu:polyvinyl_butyral 288')
        .itemOutputs('64x kubejs:optical_smd_diode')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(6000)

    event.recipes.gtceu.circuit_assembler('optical_smd_inductor')
        .itemInputs('4x #forge:optical_fiber', 'gtceu:osmiridium_ring')
        .inputFluids('gtceu:polyvinyl_butyral 144')
        .itemOutputs('16x kubejs:optical_smd_inductor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(6000)

//Base Greg Circuits
    event.recipes.gtceu.circuit_assembly_line('crystal_processor_mainframe')
        .itemInputs(
            '2x gtceu:hsse_frame', 
            '2x gtceu:crystal_processor_computer',
            '32x gtceu:ram_chip',
            '2x gtceu:hpic_chip',
            '8x gtceu:niobium_titanium_single_wire',
            '8x gtceu:advanced_smd_inductor',
            '16x gtceu:advanced_smd_capacitor',
            '8x gtceu:advanced_smd_diode'
            )
        .inputFluids('gtceu:molten_indalloy_140 1440')
        .itemOutputs('gtceu:crystal_processor_mainframe')
        .duration(800)
        .EUt(luv)
        .stationResearch(b => b.researchStack(Item.of('gtceu:crystal_processor_computer')).EUt(luv).CWUt(16))

    event.recipes.gtceu.circuit_assembly_line('wetware_processor_computer')
        .itemInputs(
            'gtceu:wetware_printed_circuit_board', 
            '2x gtceu:wetware_processor_assembly',
            '8x gtceu:advanced_smd_diode',
            '16x gtceu:nor_memory_chip',
            '32x gtceu:ram_chip',
            '24x gtceu:fine_yttrium_barium_cuprate_wire',
            '32x gtceu:polybenzimidazole_foil',
            '4x gtceu:europium_plate'
            )
        .inputFluids('gtceu:molten_indalloy_140 1152')
        .itemOutputs('gtceu:wetware_processor_computer')
        .duration(400)
        .EUt(luv)
        .stationResearch(b => b.researchStack(Item.of('gtceu:wetware_processor_assembly')).EUt(luv).CWUt(16))
        
    event.recipes.gtceu.circuit_assembly_line('wetware_processor_mainframe')
        .itemInputs(
            '2x gtceu:tritanium_frame',
            '2x gtceu:wetware_processor_computer', 
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor',
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor',
            '64x gtceu:polybenzimidazole_foil',
            '32x gtceu:ram_chip',
            '2x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire',
            '8x gtceu:europium_plate'
            )
        .inputFluids('gtceu:molten_indalloy_140', 'gtceu:polybenzimidazole 1152')
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .duration(2000)
        .EUt(300000)
        .stationResearch(b => b.researchStack(Item.of('gtceu:wetware_processor_computer')).EUt(uv).CWUt(96))
})