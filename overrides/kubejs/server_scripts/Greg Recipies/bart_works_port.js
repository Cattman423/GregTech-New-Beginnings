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
//Wrapped Mag Res
    event.recipes.gtceu.circuit_assembly_line('ulv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x gtceu:nand_chip',
            '4x kubejs:smd_diode_wrap',
            '4x kubejs:smd_capacitor_wrap',
            '4x kubejs:smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('16x kubejs:ulv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(9000)
        .EUt(30)
    event.recipes.gtceu.circuit_assembly_line('lv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x kubejs:ulv_magneto_resonance_circuit',
            '8x kubejs:smd_diode_wrap',
            '8x kubejs:smd_capacitor_wrap',
            '8x kubejs:smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('16x kubejs:lv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(18000)
        .EUt(120)
    event.recipes.gtceu.circuit_assembly_line('mv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x kubejs:lv_magneto_resonance_circuit',
            '12x kubejs:smd_diode_wrap',
            '12x kubejs:smd_capacitor_wrap',
            '12x kubejs:smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 108')
        .itemOutputs('16x kubejs:mv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(27000)
        .EUt(480)
    event.recipes.gtceu.circuit_assembly_line('hv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x kubejs:mv_magneto_resonance_circuit',
            '16x kubejs:smd_diode_wrap',
            '16x kubejs:smd_capacitor_wrap',
            '16x kubejs:smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('16x kubejs:hv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(36000)
        .EUt(1920)
    event.recipes.gtceu.circuit_assembly_line('ev_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x kubejs:hv_magneto_resonance_circuit',
            '20x kubejs:smd_diode_wrap',
            '20x kubejs:smd_capacitor_wrap',
            '20x kubejs:smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 180')
        .itemOutputs('16x kubejs:ev_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(45000)
        .EUt(7680)
    event.recipes.gtceu.circuit_assembly_line('iv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x kubejs:ev_magneto_resonance_circuit',
            '24x kubejs:advanced_smd_diode_wrap',
            '24x kubejs:optical_smd_capacitor_wrap',
            '24x kubejs:advanced_smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 864')
        .itemOutputs('16x kubejs:iv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(54000)
        .EUt(30720)
    event.recipes.gtceu.circuit_assembly_line('luv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:magneto_resonatic_gem',
            '16x kubejs:iv_magneto_resonance_circuit',
            '28x kubejs:advanced_smd_diode_wrap',
            '28x kubejs:optical_smd_capacitor_wrap',
            '28x kubejs:advanced_smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 1008')
        .itemOutputs('16x kubejs:luv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(63000)
        .EUt(122880)
    event.recipes.gtceu.circuit_assembly_line('zpm_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:exquisite_magneto_resonatic_gem',
            '16x kubejs:luv_magneto_resonance_circuit',
            '52x kubejs:advanced_smd_diode_wrap',
            '52x kubejs:optical_smd_capacitor_wrap',
            '52x kubejs:advanced_smd_transistor_wrap'
            )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('16x kubejs:zpm_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(72000)
        .EUt(491520)
    event.recipes.gtceu.circuit_assembly_line('uv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:exquisite_magneto_resonatic_gem',
            '16x kubejs:zpm_magneto_resonance_circuit',
            '56x kubejs:advanced_smd_diode_wrap',
            '56x kubejs:optical_smd_capacitor_wrap',
            '56x kubejs:advanced_smd_transistor_wrap'
            )
        .inputFluids('gtceu:molten_indalloy_140 1296')
        .itemOutputs('16x kubejs:uv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(81000)
        .EUt(1966080)
    event.recipes.gtceu.circuit_assembly_line('uhv_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:exquisite_magneto_resonatic_gem',
            '16x kubejs:uv_magneto_resonance_circuit',
            '60x kubejs:optical_smd_diode_wrap',
            '60x kubejs:optical_smd_capacitor_wrap',
            '60x kubejs:optical_smd_transistor_wrap'
            )
        .inputFluids('gtceu:molten_indalloy_140 1440')
        .itemOutputs('16x kubejs:uhv_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(90000)
        .EUt(7864320)
    event.recipes.gtceu.circuit_assembly_line('uev_magneto_resonance_circuit')
        .itemInputs(
            '16x kubejs:imprint_supporting_board', 
            '16x gtceu:exquisite_magneto_resonatic_gem',
            '16x kubejs:uhv_magneto_resonance_circuit',
            '64x kubejs:optical_smd_diode_wrap',
            '64x kubejs:optical_smd_capacitor_wrap',
            '64x kubejs:optical_smd_transistor_wrap'
            )
        .inputFluids('gtceu:molten_indalloy_140 1584')
        .itemOutputs('16x kubejs:uev_magneto_resonance_circuit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(99000)
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
})