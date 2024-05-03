ServerEvents.recipes(event => {
//Dusts
    event.recipes.gtceu.chemical_reactor('bismuth_tellurite')
        .itemInputs('2x gtceu:bismuth_dust', '3x gtceu:tellurium_dust')
        .itemOutputs('5x gtceu:bismuth_tellurite_dust')
        .duration(161)
        .EUt(60)
    event.recipes.gtceu.chemical_reactor('dibismuthhydroborat')
        .itemInputs('2x gtceu:bismuth_dust', 'gtceu:boron_dust')
        .inputFluids('gtceu:hydrogen 1000')
        .itemOutputs('4x gtceu:dibismuthhydroborat_dust')
        .duration(57)
        .EUt(90)
    event.recipes.gtceu.mixer('circuit_compound_mk_three')
        .itemInputs('gtceu:indium_gallium_phosphide_dust', '3x gtceu:dibismuthhydroborat_dust', '2x gtceu:bismuth_tellurite_dust')
        .itemOutputs('6x gtceu:circuit_compound_mk_three_dust')
        .duration(39)
        .EUt(15)
//Magneto Resonatic Gem
    event.recipes.gtceu.mixer('magneto_resonatic_dust')
        .itemInputs('3x gtceu:prasiolite_dust', '4x gtceu:bismuth_tellurite_dust', 'gtceu:cubic_zirconium_dust', 'gtceu:magnetic_steel_dust')
        .itemOutputs('9x gtceu:magneto_resonatic_dust')
        .duration(600)
        .EUt(480)
    event.recipes.gtceu.autoclave('magneto_resonatic_gem')
        .itemInputs('gtceu:magneto_resonatic_dust')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('gtceu:magneto_resonatic_gem')
        .duration(4500)
        .EUt(7680)
//Imprint Boards
    event.recipes.gtceu.forming_press('raw_imprint_board')
        .itemInputs('gtceu:magneto_resonatic_dust', '4x gtceu:circuit_compound_mk_three_dust')
        .itemOutputs('kubejs:raw_imprint_supporting_board')
        .duration(300)
        .EUt(480)
    event.recipes.gtceu.autoclave('imprint_board')
        .itemInputs('kubejs:raw_imprint_supporting_board')
        .inputFluids('gtceu:soldering_alloy 576')
        .chancedOutput('kubejs:imprint_supporting_board', 7500, 50)
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(300)
        .EUt(480)
//Magneto Resonatic Circuits
    event.recipes.gtceu.circuit_assembler('ulv_magneto_resonance_circuit')
        .itemInputs(
            'kubejs:imprint_supporting_board', 
            'gtceu:magneto_resonatic_gem',
            'gtceu:nand_chip',
            '4x gtceu:smd_diode',
            '4x gtceu:smd_capacitor',
            '4x gtceu:smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('kubejs:ulv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(750)
        .EUt(30)
    event.recipes.gtceu.circuit_assembler('lv_magneto_resonance_circuit')
        .itemInputs(
            'kubejs:imprint_supporting_board', 
            'gtceu:magneto_resonatic_gem',
            'kubejs:ulv_magneto_resonance_circuit',
            '8x gtceu:smd_diode',
            '8x gtceu:smd_capacitor',
            '8x gtceu:smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('kubejs:lv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1500)
        .EUt(120)
    event.recipes.gtceu.circuit_assembler('mv_magneto_resonance_circuit')
        .itemInputs(
            'kubejs:imprint_supporting_board', 
            'gtceu:magneto_resonatic_gem',
            'kubejs:lv_magneto_resonance_circuit',
            '12x gtceu:smd_diode',
            '12x gtceu:smd_capacitor',
            '12x gtceu:smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 108')
        .itemOutputs('kubejs:mv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(2250)
        .EUt(480)
    event.recipes.gtceu.circuit_assembler('hv_magneto_resonance_circuit')
        .itemInputs(
            'kubejs:imprint_supporting_board', 
            'gtceu:magneto_resonatic_gem',
            'kubejs:mv_magneto_resonance_circuit',
            '16x gtceu:smd_diode',
            '16x gtceu:smd_capacitor',
            '16x gtceu:smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('kubejs:hv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(3000)
        .EUt(1920)
    event.recipes.gtceu.circuit_assembler('ev_magneto_resonance_circuit')
        .itemInputs(
            'kubejs:imprint_supporting_board', 
            'gtceu:magneto_resonatic_gem',
            'kubejs:hv_magneto_resonance_circuit',
            '20x gtceu:smd_diode',
            '20x gtceu:smd_capacitor',
            '20x gtceu:smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 180')
        .itemOutputs('kubejs:ev_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(3750)
        .EUt(7680)
    event.recipes.gtceu.circuit_assembler('iv_magneto_resonance_circuit')
        .itemInputs(
            '6x kubejs:imprint_supporting_board', 
            '6x gtceu:magneto_resonatic_gem',
            'kubejs:ev_magneto_resonance_circuit',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 864')
        .itemOutputs('kubejs:iv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(18000)
        .EUt(30720)
    event.recipes.gtceu.circuit_assembler('luv_magneto_resonance_circuit')
        .itemInputs(
            '6x kubejs:imprint_supporting_board', 
            '6x gtceu:magneto_resonatic_gem',
            'kubejs:iv_magneto_resonance_circuit',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 1008')
        .itemOutputs('kubejs:luv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(21000)
        .EUt(122880)
    event.recipes.gtceu.circuit_assembler('zpm_magneto_resonance_circuit')
        .itemInputs(
            '6x kubejs:imprint_supporting_board', 
            '6x gtceu:exquisite_magneto_resonatic_gem',
            'kubejs:luv_magneto_resonance_circuit',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor'
            )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:zpm_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(48000)
        .EUt(491520)
    event.recipes.gtceu.circuit_assembler('uv_magneto_resonance_circuit')
        .itemInputs(
            '6x kubejs:imprint_supporting_board', 
            '6x gtceu:exquisite_magneto_resonatic_gem',
            'kubejs:zpm_magneto_resonance_circuit',
            '64x gtceu:advanced_smd_diode',
            '64x gtceu:advanced_smd_capacitor',
            '64x gtceu:advanced_smd_transistor'
            )
        .inputFluids('gtceu:molten_indalloy_140 1296')
        .itemOutputs('kubejs:uv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(54000)
        .EUt(1966080)
    event.recipes.gtceu.circuit_assembler('uhv_magneto_resonance_circuit')
        .itemInputs(
            '6x kubejs:imprint_supporting_board', 
            '6x gtceu:exquisite_magneto_resonatic_gem',
            'kubejs:uv_magneto_resonance_circuit',
            '64x kubejs:optical_smd_diode',
            '64x kubejs:optical_smd_capacitor',
            '64x kubejs:optical_smd_transistor'
            )
        .inputFluids('gtceu:molten_indalloy_140 1440')
        .itemOutputs('kubejs:uhv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(60000)
        .EUt(7864320)
    event.recipes.gtceu.circuit_assembler('uev_magneto_resonance_circuit')
        .itemInputs(
            '6x kubejs:imprint_supporting_board', 
            '6x gtceu:exquisite_magneto_resonatic_gem',
            'kubejs:uhv_magneto_resonance_circuit',
            '64x kubejs:optical_smd_diode',
            '64x kubejs:optical_smd_capacitor',
            '64x kubejs:optical_smd_transistor'
            )
        .inputFluids('gtceu:molten_indalloy_140 1584')
        .itemOutputs('kubejs:uev_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(66000)
        .EUt(31457280)

//Wraps
    function wrapping(output, input){
        event.recipes.gtceu.assembler(output)
            .itemInputs(input)
            .inputFluids('gtceu:polyethylene 72')
            .circuit(16)
            .itemOutputs(output)
            .duration(600)
            .EUt(30)
    }
//Data
/*    event.recipes.gtceu.research_station('ulv_mag_res')
*/
//Circuit Assline Crafts
    function AsslineCircuit(id, input, fluid, output, time, eu){
        event.recipes.gtceu.circuit_assembly_line(id)
            .itemInputs(input)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(time)
            .EUt(eu)
    }
wrapping('kubejs:smd_capacitor_wrap', '16x gtceu:smd_capacitor')
wrapping('kubejs:smd_diode_wrap', '16x gtceu:smd_diode')
wrapping('kubejs:smd_inductor_wrap', '16x gtceu:smd_inductor')
wrapping('kubejs:smd_resistor_wrap', '16x gtceu:smd_resistor')
wrapping('kubejs:smd_transistor_wrap', '16x gtceu:smd_transistor')
wrapping('kubejs:advanced_smd_capacitor_wrap', '16x gtceu:advanced_smd_capacitor')
wrapping('kubejs:advanced_smd_diode_wrap', '16x gtceu:advanced_smd_diode')
wrapping('kubejs:advanced_smd_inductor_wrap', '16x gtceu:advanced_smd_inductor')
wrapping('kubejs:advanced_smd_resistor_wrap', '16x gtceu:advanced_smd_resistor')
wrapping('kubejs:advanced_smd_transistor_wrap', '16x gtceu:advanced_smd_transistor')
wrapping('kubejs:optical_smd_capacitor_wrap', '16x kubejs:optical_smd_capacitor')
wrapping('kubejs:optical_smd_diode_wrap', '16x kubejs:optical_smd_diode')
wrapping('kubejs:optical_smd_inductor_wrap', '16x kubejs:optical_smd_inductor')
wrapping('kubejs:optical_smd_resistor_wrap', '16x kubejs:optical_smd_resistor')
wrapping('kubejs:optical_smd_transistor_wrap', '16x kubejs:optical_smd_transistor')
wrapping('kubejs:cpu_chip_wrap', '16x gtceu:cpu_chip')
wrapping('kubejs:ram_chip_wrap', '16x gtceu:ram_chip')
wrapping('kubejs:ilc_chip_wrap', '16x gtceu:ilc_chip')
wrapping('kubejs:nano_cpu_chip_wrap', '16x gtceu:nano_cpu_chip')
wrapping('kubejs:qbit_cpu_chip_wrap', '16x gtceu:qbit_cpu_chip')
wrapping('kubejs:simple_soc_wrap', '16x gtceu:simple_soc')
wrapping('kubejs:soc_wrap', '16x gtceu:soc')
wrapping('kubejs:advanced_soc_wrap', '16x gtceu:advanced_soc')
wrapping('kubejs:highly_advanced_soc_wrap', '16x gtceu:highly_advanced_soc')
wrapping('kubejs:nand_memory_chip_wrap', '16x gtceu:nand_memory_chip')
wrapping('kubejs:nor_memory_chip_wrap', '16x gtceu:nor_memory_chip')
wrapping('kubejs:ulpic_chip_wrap', '16x gtceu:ulpic_chip')
wrapping('kubejs:lpic_chip_wrap', '16x gtceu:lpic_chip')
wrapping('kubejs:mpic_chip_wrap', '16x gtceu:mpic_chip')
wrapping('kubejs:hpic_chip_wrap', '16x gtceu:hpic_chip')
wrapping('kubejs:uhpic_chip_wrap', '16x gtceu:uhpic_chip')
wrapping('kubejs:resin_printed_circuit_board_wrap', '16x gtceu:resin_printed_circuit_board')
wrapping('kubejs:phenolic_printed_circuit_board_wrap', '16x gtceu:phenolic_printed_circuit_board')
wrapping('kubejs:plastic_printed_circuit_board_wrap', '16x gtceu:plastic_printed_circuit_board')
wrapping('kubejs:epoxy_printed_circuit_board_wrap', '16x gtceu:epoxy_printed_circuit_board')
wrapping('kubejs:fiber_reinforced_printed_circuit_board_wrap', '16x gtceu:fiber_reinforced_printed_circuit_board')
wrapping('kubejs:multilayer_fiber_reinforced_printed_circuit_board_wrap', '16x gtceu:multilayer_fiber_reinforced_printed_circuit_board')
wrapping('kubejs:wetware_printed_circuit_board_wrap', '16x gtceu:wetware_printed_circuit_board')
wrapping('kubejs:fungal_printed_circuit_board_wrap', '16x kubejs:fungal_printed_circuit_board')
wrapping('kubejs:optical_printed_circuit_board_wrap', '16x kubejs:optical_printed_circuit_board')
wrapping('kubejs:deep_space_printed_circuit_board_wrap', '16x kubejs:deep_space_printed_circuit_board')
wrapping('kubejs:singularity_printed_circuit_board_wrap', '16x kubejs:singularity_printed_circuit_board')
wrapping('kubejs:4d_printed_circuit_board_wrap', '16x kubejs:4d_printed_circuit_board')
wrapping('kubejs:crystal_cpu_wrap', '16x gtceu:crystal_cpu')
wrapping('kubejs:crystal_soc_wrap', '16x gtceu:crystal_soc')
wrapping('kubejs:neuro_processing_unit_wrap', '16x gtceu:neuro_processing_unit')

//Wrapped Mag Res
AsslineCircuit('ulv_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x gtceu:nand_chip',
    '4x kubejs:smd_diode_wrap',
    '4x kubejs:smd_capacitor_wrap',
    '4x kubejs:smd_transistor_wrap'], 'gtceu:soldering_alloy 36', '16x kubejs:ulv_magneto_resonance_circuit', 9000, 30)
AsslineCircuit('lv_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x kubejs:ulv_magneto_resonance_circuit',
    '8x kubejs:smd_diode_wrap',
    '8x kubejs:smd_capacitor_wrap',
    '8x kubejs:smd_transistor_wrap'], 'gtceu:soldering_alloy 72', '16x kubejs:lv_magneto_resonance_circuit', 18000, 120)
AsslineCircuit('mv_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x kubejs:lv_magneto_resonance_circuit',
    '12x kubejs:smd_diode_wrap',
    '12x kubejs:smd_capacitor_wrap',
    '12x kubejs:smd_transistor_wrap'], 'gtceu:soldering_alloy 108', '16x kubejs:mv_magneto_resonance_circuit', 27000, 480)
AsslineCircuit('hv_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x kubejs:mv_magneto_resonance_circuit',
    '16x kubejs:smd_diode_wrap',
    '16x kubejs:smd_capacitor_wrap',
    '16x kubejs:smd_transistor_wrap'], 'gtceu:soldering_alloy 144', '16x kubejs:hv_magneto_resonance_circuit', 36000, 1920)
AsslineCircuit('ev_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x kubejs:hv_magneto_resonance_circuit',
    '20x kubejs:smd_diode_wrap',
    '20x kubejs:smd_capacitor_wrap',
    '20x kubejs:smd_transistor_wrap'], 'gtceu:soldering_alloy 180', '16x kubejs:ev_magneto_resonance_circuit', 45000, 7680)
AsslineCircuit('iv_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x kubejs:ev_magneto_resonance_circuit',
    '24x kubejs:advanced_smd_diode_wrap',
    '24x kubejs:advanced_smd_capacitor_wrap',
    '24x kubejs:advanced_smd_transistor_wrap'], 'gtceu:soldering_alloy 864', '16x kubejs:iv_magneto_resonance_circuit', 54000, 30720)
AsslineCircuit('luv_mag_res',
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:magneto_resonatic_gem',
    '16x kubejs:iv_magneto_resonance_circuit',
    '28x kubejs:advanced_smd_diode_wrap',
    '28x kubejs:advanced_smd_capacitor_wrap',
    '28x kubejs:advanced_smd_transistor_wrap'], 'gtceu:soldering_alloy 1008', '16x kubejs:luv_magneto_resonance_circuit', 63000, 122880)
AsslineCircuit('zpm_mag_res', 
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:exquisite_magneto_resonatic_gem',
    '16x kubejs:luv_magneto_resonance_circuit',
    '52x kubejs:advanced_smd_diode_wrap',
    '52x kubejs:advanced_smd_capacitor_wrap',
    '52x kubejs:advanced_smd_transistor_wrap'], 'gtceu:soldering_alloy 1152', '16x kubejs:zpm_magneto_resonance_circuit', 72000, 491520)
AsslineCircuit('uv_mag_res', 
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:exquisite_magneto_resonatic_gem',
    '16x kubejs:zpm_magneto_resonance_circuit',
    '56x kubejs:advanced_smd_diode_wrap',
    '56x kubejs:advanced_smd_capacitor_wrap',
    '56x kubejs:advanced_smd_transistor_wrap'], 'gtceu:molten_indalloy_140 1296', '16x kubejs:uv_magneto_resonance_circuit', 81000, 1966080)
AsslineCircuit('uhv_mag_res', 
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:exquisite_magneto_resonatic_gem',
    '16x kubejs:uv_magneto_resonance_circuit',
    '60x kubejs:optical_smd_diode_wrap',
    '60x kubejs:optical_smd_capacitor_wrap',
    '60x kubejs:optical_smd_transistor_wrap'], 'gtceu:molten_indalloy_140 1440', '16x kubejs:uhv_magneto_resonance_circuit', 90000, 7864320)
AsslineCircuit('uev_mag_res', 
    ['16x kubejs:imprint_supporting_board', 
    '16x gtceu:exquisite_magneto_resonatic_gem',
    '16x kubejs:uhv_magneto_resonance_circuit',
    '64x kubejs:optical_smd_diode_wrap',
    '64x kubejs:optical_smd_capacitor_wrap',
    '64x kubejs:optical_smd_transistor_wrap'], 'gtceu:molten_indalloy_140 1584', '16x kubejs:uev_magneto_resonance_circuit', 99000, 31457280)

//Early Circuits
AsslineCircuit('lv_one', 
    ['kubejs:resin_printed_circuit_board_wrap', 
    'kubejs:ilc_chip_wrap', 
    '2x kubejs:smd_resistor_wrap', 
    '2x kubejs:smd_diode_wrap', 
    '2x gtceu:copper_quadruple_wire',
    '32x gtceu:tin_bolt'], 'gtceu:soldering_alloy 72', '16x gtceu:basic_integrated_circuit', 2400, 16)
AsslineCircuit('mv_one', 
    ['kubejs:phenolic_printed_circuit_board_wrap', 
    '32x #gtceu:circuits/lv', 
    '2x kubejs:smd_diode_wrap', 
    '2x gtceu:copper_hex_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:good_electronic_circuit', 3600, 30)
AsslineCircuit('mv_two', 
    ['kubejs:phenolic_printed_circuit_board_wrap', 
    '32x gtceu:basic_integrated_circuit', 
    '4x kubejs:smd_resistor_wrap',
    '4x kubejs:smd_diode_wrap', 
    '4x gtceu:gold_quadruple_wire',
    '64x gtceu:silver_bolt'], 'gtceu:soldering_alloy 72', '16x gtceu:good_integrated_circuit', 2400, 24)
AsslineCircuit('mv_two_ad', 
    ['kubejs:phenolic_printed_circuit_board_wrap', 
    '32x gtceu:basic_integrated_circuit', 
    'kubejs:advanced_smd_resistor_wrap',
    'kubejs:advanced_smd_diode_wrap', 
    '4x gtceu:gold_quadruple_wire',
    '64x gtceu:silver_bolt'], 'gtceu:soldering_alloy 72', '16x gtceu:good_integrated_circuit', 4800, 24)

//Micro Processors
AsslineCircuit('mv_three', 
    ['kubejs:plastic_printed_circuit_board_wrap', 
    'kubejs:cpu_chip_wrap', 
    '4x kubejs:smd_resistor_wrap',
    '4x kubejs:smd_capacitor_wrap',
    '4x kubejs:smd_transistor_wrap', 
    '4x gtceu:red_alloy_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:micro_processor', 2400, 60)
AsslineCircuit('mv_three_ad', 
    ['kubejs:plastic_printed_circuit_board_wrap', 
    'kubejs:cpu_chip_wrap', 
    'kubejs:advanced_smd_resistor_wrap',
    'kubejs:advanced_smd_capacitor_wrap',
    'kubejs:advanced_smd_transistor_wrap', 
    '4x gtceu:red_alloy_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:micro_processor', 1200, 60)
AsslineCircuit('mv_three_soc', 
    ['kubejs:plastic_printed_circuit_board_wrap', 
    'kubejs:soc_wrap',  
    '4x gtceu:red_alloy_quadruple_wire',
    '64x gtceu:annealed_copper_bolt'], 'gtceu:soldering_alloy 72', '16x gtceu:micro_processor', 600, 2400)
AsslineCircuit('hv_one', 
    ['kubejs:plastic_printed_circuit_board_wrap', 
    '32x gtceu:micro_processor', 
    '4x kubejs:smd_inductor_wrap',
    '8x kubejs:smd_capacitor_wrap',
    '4x kubejs:ram_chip_wrap', 
    '8x gtceu:red_alloy_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:micro_processor_assembly', 2400, 120)
AsslineCircuit('hv_one_ad', 
    ['kubejs:plastic_printed_circuit_board_wrap', 
    '32x gtceu:micro_processor', 
    'kubejs:advanced_smd_inductor_wrap',
    '2x kubejs:advanced_smd_capacitor_wrap',
    '4x kubejs:ram_chip_wrap', 
    '8x gtceu:red_alloy_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:micro_processor_assembly', 1200, 96)
AsslineCircuit('ev_one', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    '32x gtceu:micro_processor_assembly', 
    '4x kubejs:smd_diode_wrap',
    '8x kubejs:ram_chip_wrap',  
    '16x gtceu:electrum_quadruple_wire',
    '64x gtceu:blue_alloy_bolt'], 'gtceu:soldering_alloy 144', '16x gtceu:micro_processor_computer', 4800, 120)
AsslineCircuit('ev_one_ad', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    '32x gtceu:micro_processor_assembly', 
    'kubejs:advanced_smd_diode_wrap',
    '8x kubejs:ram_chip_wrap',  
    '16x gtceu:electrum_quadruple_wire',
    '64x gtceu:blue_alloy_bolt'], 'gtceu:soldering_alloy 144', '16x gtceu:micro_processor_computer', 2400, 120)
AsslineCircuit('iv_one', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:micro_processor_computer', 
    '12x kubejs:smd_inductor_wrap',
    '24x kubejs:smd_capacitor_wrap',
    '16x kubejs:ram_chip_wrap', 
    '24x gtceu:annealed_copper_hex_wire'], 'gtceu:soldering_alloy 288', '16x gtceu:micro_processor_mainframe', 19200, 480)
AsslineCircuit('iv_one_ad', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:micro_processor_computer', 
    '3x kubejs:advanced_smd_inductor_wrap',
    '4x kubejs:advanced_smd_capacitor_wrap',
    '16x kubejs:ram_chip_wrap', 
    '16x gtceu:annealed_copper_hex_wire'], 'gtceu:soldering_alloy 288', '16x gtceu:micro_processor_mainframe', 9600, 480)

//Nano Processors
AsslineCircuit('hv_two', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    'kubejs:nano_cpu_chip_wrap', 
    '8x kubejs:smd_resistor_wrap',
    '8x kubejs:smd_capacitor_wrap',
    '8x kubejs:smd_transistor_wrap', 
    '8x gtceu:electrum_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:nano_processor', 2400, 600)
AsslineCircuit('hv_two_ad', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    'kubejs:nano_cpu_chip_wrap', 
    '2x kubejs:advanced_smd_resistor_wrap',
    '2x kubejs:advanced_smd_capacitor_wrap',
    '2x kubejs:advanced_smd_transistor_wrap', 
    '8x gtceu:electrum_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:nano_processor', 1200, 600)
AsslineCircuit('hv_two_soc', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    'kubejs:advanced_soc_wrap', 
    '8x gtceu:electrum_quadruple_wire',
    '64x gtceu:platinum_bolt'], 'gtceu:molten_indalloy_140 72', '16x gtceu:nano_processor', 600, 9600)
AsslineCircuit('ev_two', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    '32x gtceu:nano_processor', 
    '8x kubejs:smd_inductor_wrap',
    '8x kubejs:smd_capacitor_wrap',
    '8x kubejs:ram_chip_wrap', 
    '16x gtceu:electrum_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:nano_processor_assembly', 4800, 600)
AsslineCircuit('ev_two_ad', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    '32x gtceu:nano_processor', 
    '2x kubejs:advanced_smd_inductor_wrap',
    '2x kubejs:advanced_smd_capacitor_wrap',
    '8x kubejs:ram_chip_wrap', 
    '16x gtceu:electrum_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:nano_processor_assembly', 2400, 600)
AsslineCircuit('iv_two', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    '32x gtceu:nano_processor_assembly', 
    '8x kubejs:smd_diode_wrap',
    '4x kubejs:nor_memory_chip_wrap',  
    '16x kubejs:ram_chip_wrap',  
    '16x gtceu:electrum_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:nano_processor_computer', 4800, 600)
AsslineCircuit('iv_two_ad', 
    ['kubejs:epoxy_printed_circuit_board_wrap', 
    '32x gtceu:nano_processor_assembly', 
    '2x kubejs:advanced_smd_diode_wrap',
    '4x kubejs:nor_memory_chip_wrap',  
    '16x kubejs:ram_chip_wrap',  
    '16x gtceu:electrum_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:nano_processor_computer', 2400, 600)
AsslineCircuit('luv_one', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:nano_processor_computer', 
    '16x kubejs:smd_inductor_wrap',
    '32x kubejs:smd_capacitor_wrap',
    '16x kubejs:ram_chip_wrap', 
    '32x gtceu:annealed_copper_hex_wire'], 'gtceu:soldering_alloy 288', '16x gtceu:nano_processor_mainframe', 19200, 480)
AsslineCircuit('luv_one_ad', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:nano_processor_computer', 
    '4x kubejs:advanced_smd_inductor_wrap',
    '8x kubejs:advanced_smd_capacitor_wrap',
    '16x kubejs:ram_chip_wrap', 
    '32x gtceu:annealed_copper_hex_wire'], 'gtceu:soldering_alloy 288', '16x gtceu:nano_processor_mainframe', 9600, 480)

//Quantum Processors
AsslineCircuit('ev_three', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    'kubejs:qbit_cpu_chip_wrap', 
    'kubejs:nano_cpu_chip_wrap', 
    '12x kubejs:smd_capacitor_wrap',
    '12x kubejs:smd_transistor_wrap', 
    '16x gtceu:platinum_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:quantum_processor', 2400, 2400)
AsslineCircuit('ev_three_ad', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    'kubejs:qbit_cpu_chip_wrap', 
    'kubejs:nano_cpu_chip_wrap', 
    '3x kubejs:advanced_smd_capacitor_wrap',
    '3x kubejs:advanced_smd_transistor_wrap', 
    '16x gtceu:platinum_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:quantum_processor', 1200, 2400)
AsslineCircuit('ev_three_soc', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    'kubejs:advanced_soc_wrap', 
    '16x gtceu:platinum_quadruple_wire',
    '64x gtceu:niobium_titanium_bolt'], 'gtceu:molten_indalloy_140 72', '16x gtceu:quantum_processor', 600, 38400)
AsslineCircuit('iv_three', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    '32x gtceu:quantum_processor', 
    '12x kubejs:smd_inductor_wrap',
    '16x kubejs:smd_capacitor_wrap',
    '4x kubejs:ram_chip_wrap', 
    '24x gtceu:platinum_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:quantum_processor_assembly', 4800, 2400)
AsslineCircuit('iv_three_ad', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    '32x gtceu:quantum_processor', 
    '3x kubejs:advanced_smd_inductor_wrap',
    '4x kubejs:advanced_smd_capacitor_wrap',
    '4x kubejs:ram_chip_wrap', 
    '24x gtceu:platinum_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:quantum_processor_assembly', 2400, 2400)
AsslineCircuit('luv_two', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    '32x gtceu:quantum_processor_assembly', 
    '8x kubejs:smd_diode_wrap',
    '4x kubejs:nor_memory_chip_wrap',  
    '16x kubejs:ram_chip_wrap',  
    '48x gtceu:platinum_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:quantum_processor_computer', 4800, 2400)
AsslineCircuit('luv_two_ad', 
    ['kubejs:fiber_reinforced_printed_circuit_board_wrap', 
    '32x gtceu:quantum_processor_assembly', 
    '2x kubejs:advanced_smd_diode_wrap',
    '4x kubejs:nor_memory_chip_wrap',  
    '16x kubejs:ram_chip_wrap',  
    '48x gtceu:platinum_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:quantum_processor_computer', 2400, 2400)
AsslineCircuit('zpm_one', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:quantum_processor_computer', 
    '24x kubejs:smd_inductor_wrap',
    '48x kubejs:smd_capacitor_wrap',
    '24x kubejs:ram_chip_wrap', 
    '48x gtceu:annealed_copper_hex_wire'], 'gtceu:soldering_alloy 288', '16x gtceu:quantum_processor_mainframe', 19200, 7680)
AsslineCircuit('zpm_one_ad', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:quantum_processor_computer', 
    '6x kubejs:advanced_smd_inductor_wrap',
    '12x kubejs:advanced_smd_capacitor_wrap',
    '24x kubejs:ram_chip_wrap', 
    '48x gtceu:annealed_copper_hex_wire'], 'gtceu:soldering_alloy 288', '16x gtceu:quantum_processor_mainframe', 9600, 7680)

//Crystal Processors
AsslineCircuit('iv_four', 
    ['kubejs:multilayer_fiber_reinforced_printed_circuit_board_wrap', 
    'kubejs:crystal_cpu_wrap', 
    '2x kubejs:nano_cpu_chip_wrap', 
    '6x kubejs:advanced_smd_capacitor_wrap',
    '6x kubejs:advanced_smd_transistor_wrap', 
    '8x gtceu:niobium_titanium_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:crystal_processor', 1200, 9600)
AsslineCircuit('iv_four_soc', 
    ['kubejs:multilayer_fiber_reinforced_printed_circuit_board_wrap', 
    'kubejs:crystal_soc_wrap', 
    '8x gtceu:niobium_titanium_quadruple_wire',
    '64x gtceu:yttrium_barium_cuprate_bolt'], 'gtceu:molten_indalloy_140 72', '16x gtceu:crystal_processor', 600, 153600)
AsslineCircuit('luv_three', 
    ['kubejs:multilayer_fiber_reinforced_printed_circuit_board_wrap', 
    '32x gtceu:crystal_processor', 
    '6x kubejs:advanced_smd_inductor_wrap',
    '8x kubejs:advanced_smd_capacitor_wrap',
    '24x kubejs:ram_chip_wrap', 
    '16x gtceu:niobium_titanium_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:crystal_processor_assembly', 4800, 9600)
AsslineCircuit('zpm_two', 
    ['kubejs:multilayer_fiber_reinforced_printed_circuit_board_wrap', 
    '32x gtceu:crystal_processor_assembly',
    '4x kubejs:ram_chip_wrap',
    '32x kubejs:nor_memory_chip_wrap',
    '64x kubejs:nand_memory_chip_wrap',
    '32x gtceu:niobium_titanium_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:crystal_processor_computer', 4800, 9600)
AsslineCircuit('uv_one', 
    ['32x gtceu:aluminium_frame', 
    '32x gtceu:crystal_processor_computer', 
    '8x kubejs:advanced_smd_inductor_wrap',
    '16x kubejs:advanced_smd_capacitor_wrap',
    '32x kubejs:ram_chip_wrap', 
    '48x gtceu:indium_tin_barium_titanium_cuprate_hex_wire'], 'gtceu:molten_indalloy_140 288', '16x gtceu:crystal_processor_mainframe', 9600, 30720)

//Wetware Processors
AsslineCircuit('luv_four', 
    ['kubejs:neuro_processing_unit_wrap', 
    'kubejs:crystal_cpu_wrap', 
    'kubejs:nano_cpu_chip_wrap', 
    '8x kubejs:advanced_smd_capacitor_wrap',
    '8x kubejs:advanced_smd_transistor_wrap', 
    '16x gtceu:yttrium_barium_cuprate_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:wetware_processor', 2400, 38400)
AsslineCircuit('luv_four_ad', 
    ['kubejs:neuro_processing_unit_wrap', 
    'kubejs:crystal_cpu_wrap', 
    'kubejs:nano_cpu_chip_wrap', 
    '2x kubejs:optical_smd_capacitor_wrap',
    '2x kubejs:optical_smd_transistor_wrap', 
    '16x gtceu:yttrium_barium_cuprate_quadruple_wire'], 'gtceu:soldering_alloy 72', '16x gtceu:wetware_processor', 300, 153600)
AsslineCircuit('luv_four_soc', 
    ['kubejs:neuro_processing_unit_wrap', 
    'kubejs:advanced_soc_wrap', 
    '16x gtceu:platinum_quadruple_wire',
    '64x gtceu:niobium_titanium_bolt'], 'gtceu:molten_indalloy_140 72', '16x gtceu:wetware_processor', 600, 38400)
AsslineCircuit('zpm_three', 
    ['kubejs:wetware_printed_circuit_board_wrap', 
    '32x gtceu:wetware_processor', 
    '8x kubejs:advanced_smd_inductor_wrap',
    '12x kubejs:advanced_smd_capacitor_wrap',
    '24x kubejs:ram_chip_wrap', 
    '16x gtceu:yttrium_barium_cuprate_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:wetware_processor_assembly', 3600, 38400)
AsslineCircuit('zpm_three_ad', 
    ['kubejs:wetware_printed_circuit_board_wrap', 
    '32x gtceu:wetware_processor', 
    '2x kubejs:optical_smd_inductor_wrap',
    '3x kubejs:optical_smd_capacitor_wrap',
    '24x kubejs:ram_chip_wrap', 
    '16x gtceu:yttrium_barium_cuprate_quadruple_wire'], 'gtceu:soldering_alloy 144', '16x gtceu:wetware_processor_assembly', 444, 153600)
AsslineCircuit('uv_two', 
    ['2x kubejs:wetware_printed_circuit_board_wrap', 
    '32x gtceu:wetware_processor_assembly', 
    '8x kubejs:advanced_smd_diode_wrap',
    '16x kubejs:nor_memory_chip_wrap',  
    '64x kubejs:ram_chip_wrap',  
    '24x gtceu:yttrium_barium_cuprate_quadruple_wire'], 'gtceu:molten_indalloy_140 144', '16x gtceu:wetware_processor_computer', 7200, 38400)
AsslineCircuit('uv_two_ad', 
    ['2x kubejs:wetware_printed_circuit_board_wrap', 
    '32x gtceu:wetware_processor_assembly', 
    '2x kubejs:optical_smd_diode_wrap',
    '16x kubejs:nor_memory_chip_wrap',  
    '64x kubejs:ram_chip_wrap',  
    '24x gtceu:yttrium_barium_cuprate_quadruple_wire'], 'gtceu:molten_indalloy_140 144', '16x gtceu:wetware_processor_computer', 900, 153600)
})