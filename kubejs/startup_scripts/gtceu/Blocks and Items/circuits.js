StartupEvents.registry('item', event => {
    Platform.mods.kubejs.name = 'GT:NB'
//Line one (brown)
    event.create('fungal_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('fungal_circuit_board')
        //.displayName()
        .texture('gtceu:item/fungal_circuits/fungal_circuit_board')
        .tooltip('This is supposed to grow mushrooms')

    event.create('fungal_printed_circuit_board')
        //.displayName()
        .texture('gtceu:item/fungal_circuits/fungal_printed_circuit_board')
        .tooltip('This is supposed to grow mushrooms')

    event.create('fungal_processor')
        //.displayName()
        .texture('gtceu:item/fungal_circuits/fungal_processor')
        .tooltip('§dZPM-tier Circuit')

    event.create('fungal_processor_assembly')
        //.displayName()
        .texture('gtceu:item/fungal_circuits/fungal_processor_assembly')
        .tooltip('§dUV-tier Circuit')

    event.create('fungal_processor_computer')
        //.displayName()
        .texture('gtceu:item/fungal_circuits/fungal_processor_computer')
        .tooltip('§dUHV-tier Circuit')

    event.create('fungal_processor_mainframe')
        //.displayName()
        .texture('gtceu:item/fungal_circuits/fungal_processor_mainframe')
        .tooltip('§dUEV-tier Circuit')

//Line two (purple)
    event.create('optical_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('optical_circuit_board')
        //.displayName()
        .texture('gtceu:item/optical_circuits/optical_circuit_board')
        .tooltip('This board shimmers in the light')

    event.create('optical_printed_circuit_board')
        //.displayName()
        .texture('gtceu:item/optical_circuits/optical_printed_circuit_board')
        .tooltip('This circuit board shimmers in the light')

    event.create('optical_processor')
        //.displayName()
        .texture('gtceu:item/optical_circuits/optical_processor')
        .tooltip('§5UV-tier Circuit')

    event.create('optical_processor_assembly')
        //.displayName()
        .texture('gtceu:item/optical_circuits/optical_processor_assembly')
        .tooltip('§5UHV-tier Circuit')

    event.create('optical_processor_computer')
        //.displayName()
        .texture('gtceu:item/optical_circuits/optical_processor_computer')
        .tooltip('§5UEV-tier Circuit')

    event.create('optical_processor_mainframe')
        //.displayName()
        .texture('gtceu:item/optical_circuits/optical_processor_mainframe')
        .tooltip('§5UIV-tier Circuit')

//Line three (dark green)
    event.create('deep_space_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('deep_space_circuit_board')
        //.displayName()
        .texture('gtceu:item/deep_space_circuits/deep_space_circuit_board')
        .tooltip('This board absorbs heat')

    event.create('deep_space_printed_circuit_board')
        //.displayName()
        .texture('gtceu:item/deep_space_circuits/deep_space_printed_circuit_board')
        .tooltip('This circuit board absorbs heat')

    event.create('deep_space_processor')
        //.displayName()
        .texture('gtceu:item/deep_space_circuits/deep_space_processor')
        .tooltip('§8UHV-tier Circuit')

    event.create('deep_space_processor_assembly')
        //.displayName()
        .texture('gtceu:item/deep_space_circuits/deep_space_processor_assembly')
        .tooltip('§8UEV-tier Circuit')

    event.create('deep_space_processor_computer')
        //.displayName()
        .texture('gtceu:item/deep_space_circuits/deep_space_processor_computer')
        .tooltip('§8UIV-tier Circuit')

    event.create('deep_space_processor_mainframe')
        //.displayName()
        .texture('gtceu:item/deep_space_circuits/deep_space_processor_mainframe')
        .tooltip('§8UXV-tier Circuit')

//Line four (dark grey)
    event.create('singularity_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('singularity_circuit_board')
        //.displayName()
        .texture('gtceu:item/singularity_circuits/singularity_circuit_board')
        .tooltip('A board carved from the heart of a star')

    event.create('singularity_printed_circuit_board')
        //.displayName()
        .texture('gtceu:item/singularity_circuits/singularity_printed_circuit_board')
        .tooltip('A board printed out of the heart of a star')

    event.create('singularity_processor')
        //.displayName()
        .texture('gtceu:item/singularity_circuits/singularity_processor')
        .tooltip('§fUEV-tier Circuit')

    event.create('singularity_processor_assembly')
        //.displayName()
        .texture('gtceu:item/singularity_circuits/singularity_processor_assembly')
        .tooltip('§fUIV-tier Circuit')

    event.create('singularity_processor_computer')
        //.displayName()
        .texture('gtceu:item/singularity_circuits/singularity_processor_computer')
        .tooltip('§fUXV-tier Circuit')

    event.create('singularity_processor_mainframe')
        //.displayName()
        .texture('gtceu:item/singularity_circuits/singularity_processor_mainframe')
        .tooltip('§fOPV-tier Circuit')

//Line five (gold)
    event.create('4d_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('4d_circuit_board')
        //.displayName()
        .texture('gtceu:item/4d_circuits/4d_printed_circuit_board')
        .tooltip('It hurts to look at')

    event.create('4d_printed_circuit_board')
        //.displayName()
        .texture('gtceu:item/4d_circuits/4d_printed_circuit_board')
        .tooltip('It hurts to look at')

    event.create('4d_processor')
        //.displayName()
        .texture('gtceu:item/4d_circuits/4d_processor')
        .tooltip('§6UIV-tier Circuit')

    event.create('4d_processor_assembly')
        //.displayName()
        .texture('gtceu:item/4d_circuits/4d_processor_assembly')
        .tooltip('§6UXV-tier Circuit')

    event.create('4d_processor_computer')
        //.displayName()
        .texture('gtceu:item/4d_circuits/4d_processor_computer')
        .tooltip('§6OPV-tier Circuit')

    event.create('4d_processor_mainframe')
        //.displayName()
        .texture('gtceu:item/4d_circuits/4d_processor_mainframe')
        .tooltip('§6MAX-tier Circuit')

//Optical SMD
    event.create('optical_smd_transistor')
        //.displayName()
        .texture('gtceu:item/circuit_comp/optical_smd_transistor')
        //.tooltip()

    event.create('optical_smd_resistor')
        //.displayName()
        .texture('gtceu:item/circuit_comp/optical_smd_resistor')
        //.tooltip()

    event.create('optical_smd_capacitor')
        //.displayName()
        .texture('gtceu:item/circuit_comp/optical_smd_capacitor')
        //.tooltip()

    event.create('optical_smd_diode')
        //.displayName()
        .texture('gtceu:item/circuit_comp/optical_smd_diode')
        //.tooltip()

    event.create('optical_smd_inductor')
        //.displayName()
        .texture('gtceu:item/circuit_comp/optical_smd_inductor')
        //.tooltip()

//Boules
    event.create('certus_quartz_boule')
        .displayName('Certus-doped Monocrystalline Silicon Boule')
        .texture('gtceu:item/ae_2/certus_quartz_boule')
        .tooltip('Raw Circuit')

    event.create('certus_wafer')
        .displayName('Certus Wafer')
        .texture('gtceu:item/ae_2/certus_wafer')
        .tooltip('Raw Circuit')

    event.create('calculation_wafer')
        .displayName('Calculation Wafer')
        .texture('gtceu:item/ae_2/calculation_wafer')
        .tooltip('Raw Calculation Processor')

    event.create('engineering_wafer')
        .displayName('Engineering Wafer')
        .texture('gtceu:item/ae_2/engineering_wafer')
        .tooltip('Raw Engineering Processor')

    event.create('logic_wafer')
        .displayName('Logic Wafer')
        .texture('gtceu:item/ae_2/logic_wafer')
        .tooltip('Raw Logic Processor')

//Magneto Resonance Circuits
    event.create('ulv_magneto_resonance_circuit')
        .displayName('Ulv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/ulv_mag_res')
        .tooltip('§5ULV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('lv_magneto_resonance_circuit')
        .displayName('Lv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/lv_mag_res')
        .tooltip('§5LV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('mv_magneto_resonance_circuit')
        .displayName('Mv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/mv_mag_res')
        .tooltip('§5MV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('hv_magneto_resonance_circuit')
        .displayName('Hv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/hv_mag_res')
        .tooltip('§5HV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('ev_magneto_resonance_circuit')
        .displayName('Ev Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/ev_mag_res')
        .tooltip('§5EV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('iv_magneto_resonance_circuit')
        .displayName('Iv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/iv_mag_res')
        .tooltip('§5IV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('luv_magneto_resonance_circuit')
        .displayName('Luv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/luv_mag_res')
        .tooltip('§5LUV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('zpm_magneto_resonance_circuit')
        .displayName('Zpm Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/zpm_mag_res')
        .tooltip('§5ZPM-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('uv_magneto_resonance_circuit')
        .displayName('Uv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/uv_mag_res')
        .tooltip('§5UV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('uhv_magneto_resonance_circuit')
        .displayName('Uhv Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/uhv_mag_res')
        .tooltip('§5UHV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

    event.create('uev_magneto_resonance_circuit')
        .displayName('Uev Magneto Resonance Circuit')
        .texture('gtceu:item/mag_res_circuit/uev_mag_res')
        .tooltip('§5UEV-Tier Circuit')
        .tooltip('§aOriginally from BartWorks')

//Bart Works stuff
    event.create('imprint_supporting_board')
        .displayName('Imprint Supporting Board')
        .texture('gtceu:item/mag_res_circuit/imprint_supporting_board')
        .tooltip('A board needed for circuit imprints')
        .tooltip('§aOriginally from BartWorks')

    event.create('raw_imprint_supporting_board')
        .displayName('Raw Imprint Supporting Board')
        .texture('gtceu:item/mag_res_circuit/raw_imprint_supporting_board')
        .tooltip('A raw board needed for circuit imprints')
        .tooltip('§aOriginally from BartWorks')

//SMD Wraps
    event.create('smd_capacitor_wrap')
        .displayName('Wrap of SMD Capacitors')
        .texture('gtceu:item/wraps/smd_capacitor_wrap')

    event.create('smd_diode_wrap')
        .displayName('Wrap of SMD Diodes')
        .texture('gtceu:item/wraps/smd_diode_wrap')

    event.create('smd_inductor_wrap')
        .displayName('Wrap of SMD Inductors')
        .texture('gtceu:item/wraps/smd_inductor_wrap')

    event.create('smd_resistor_wrap')
        .displayName('Wrap of SMD Resistors')
        .texture('gtceu:item/wraps/smd_resistor_wrap')

    event.create('smd_transistor_wrap')
        .displayName('Wrap of SMD Transistors')
        .texture('gtceu:item/wraps/smd_transistor_wrap')

    event.create('advanced_smd_capacitor_wrap')
        .displayName('Wrap of Advanced SMD Capacitors')
        .texture('gtceu:item/wraps/advanced_smd_capacitor_wrap')

    event.create('advanced_smd_diode_wrap')
        .displayName('Wrap of Advanced SMD Diodes')
        .texture('gtceu:item/wraps/advanced_smd_diode_wrap')

    event.create('advanced_smd_inductor_wrap')
        .displayName('Wrap of Advanced SMD Inductors')
        .texture('gtceu:item/wraps/advanced_smd_inductor_wrap')

    event.create('advanced_smd_resistor_wrap')
        .displayName('Wrap of Advanced SMD Resistors')
        .texture('gtceu:item/wraps/advanced_smd_resistor_wrap')

    event.create('advanced_smd_transistor_wrap')
        .displayName('Wrap of Advanced SMD Transistors')
        .texture('gtceu:item/wraps/advanced_smd_transistor_wrap')

    event.create('optical_smd_capacitor_wrap')
        .displayName('Wrap of Optical SMD Capacitors')
        .texture('gtceu:item/wraps/optical_smd_capacitor_wrap')

    event.create('optical_smd_diode_wrap')
        .displayName('Wrap of Optical SMD Diodes')
        .texture('gtceu:item/wraps/optical_smd_diode_wrap')

    event.create('optical_smd_inductor_wrap')
        .displayName('Wrap of Optical SMD Inductors')
        .texture('gtceu:item/wraps/optical_smd_inductor_wrap')

    event.create('optical_smd_resistor_wrap')
        .displayName('Wrap of Optical SMD Resistors')
        .texture('gtceu:item/wraps/optical_smd_resistor_wrap')

    event.create('optical_smd_transistor_wrap')
        .displayName('Wrap of Optical SMD Transistors')
        .texture('gtceu:item/wraps/optical_smd_transistor_wrap')

//Chip Wraps
    event.create('cpu_chip_wrap')
        .displayName('Wrap of CPU Chips')
        .texture('gtceu:item/wraps/cpu_chip_wrap')
        
    event.create('ram_chip_wrap')
        .displayName('Wrap of RAM Chips')
        .texture('gtceu:item/wraps/ram_chip_wrap')
        
    event.create('ilc_chip_wrap')
        .displayName('Wrap of ILC Chips')
        .texture('gtceu:item/wraps/ilc_chip_wrap')
        
    event.create('nano_cpu_chip_wrap')
        .displayName('Wrap of Nano CPU Chips')
        .texture('gtceu:item/wraps/nano_cpu_chip_wrap')
        
    event.create('qbit_cpu_chip_wrap')
        .displayName('Wrap of Qbit CPU Chips')
        .texture('gtceu:item/wraps/qbit_cpu_chip_wrap')
        
    event.create('simple_soc_wrap')
        .displayName('Wrap of Simple SOCs')
        .texture('gtceu:item/wraps/simple_soc_wrap')
        
    event.create('soc_wrap')
        .displayName('Wrap of SOCs')
        .texture('gtceu:item/wraps/soc_wrap')
        
    event.create('advanced_soc_wrap')
        .displayName('Wrap of Advanced SOCs')
        .texture('gtceu:item/wraps/advanced_soc_wrap')
        
    event.create('highly_advanced_soc_wrap')
        .displayName('Wrap of Highly Advanced SOCs')
        .texture('gtceu:item/wraps/highly_advanced_soc_wrap')
        
    event.create('nand_memory_chip_wrap')
        .displayName('Wrap of NAND Memory Chips')
        .texture('gtceu:item/wraps/nand_memory_chip_wrap')
        
    event.create('nor_memory_chip_wrap')
        .displayName('Wrap of NOR Memory Chips')
        .texture('gtceu:item/wraps/nor_memory_chip_wrap')
        
    event.create('ulpic_chip_wrap')
        .displayName('Wrap of ULPIC Chips')
        .texture('gtceu:item/wraps/ulpic_chip_wrap')
        
    event.create('lpic_chip_wrap')
        .displayName('Wrap of LPIC Chips')
        .texture('gtceu:item/wraps/lpic_chip_wrap')
        
    event.create('mpic_chip_wrap')
        .displayName('Wrap of MPIC Chips')
        .texture('gtceu:item/wraps/mpic_chip_wrap')
        
    event.create('hpic_chip_wrap')
        .displayName('Wrap of HPIC Chips')
        .texture('gtceu:item/wraps/hpic_chip_wrap')
        
    event.create('uhpic_chip_wrap')
        .displayName('Wrap of UHPIC Chips')
        .texture('gtceu:item/wraps/uhpic_chip_wrap')

//PCBs
    event.create('resin_printed_circuit_board_wrap')
        .displayName('Wrap of Resin Printed Circuit Boards')
        .texture('gtceu:item/wraps/resin_printed_circuit_board_wrap')
        
    event.create('phenolic_printed_circuit_board_wrap')
        .displayName('Wrap of Phenolic Printed Circuit Boards')
        .texture('gtceu:item/wraps/phenolic_printed_circuit_board_wrap')
        
    event.create('plastic_printed_circuit_board_wrap')
        .displayName('Wrap of Plastic Printed Circuit Boards')
        .texture('gtceu:item/wraps/plastic_printed_circuit_board_wrap')
        
    event.create('epoxy_printed_circuit_board_wrap')
        .displayName('Wrap of Epoxy Printed Circuit Boards')
        .texture('gtceu:item/wraps/epoxy_printed_circuit_board_wrap')
        
    event.create('fiber_reinforced_printed_circuit_board_wrap')
        .displayName('Wrap of Fiber-reinforced Printed Circuit Boards')
        .texture('gtceu:item/wraps/fiber_reinforced_printed_circuit_board_wrap')
        
    event.create('multilayer_fiber_reinforced_printed_circuit_board_wrap')
        .displayName('Wrap of Multilayer Fiber-reinforced Printed Circuit Boards')
        .texture('gtceu:item/wraps/multilayer_fiber_reinforced_printed_circuit_board_wrap')
        
    event.create('wetware_printed_circuit_board_wrap')
        .displayName('Wrap of Wetware Printed Circuit Boards')
        .texture('gtceu:item/wraps/wetware_printed_circuit_board_wrap')
        
    event.create('fungal_printed_circuit_board_wrap')
        .displayName('Wrap of Fungal Printed Circuit Boards')
        .texture('gtceu:item/wraps/fungal_printed_circuit_board_wrap')
        
    event.create('optical_printed_circuit_board_wrap')
        .displayName('Wrap of Optical Printed Circuit Boards')
        .texture('gtceu:item/wraps/optical_printed_circuit_board_wrap')
        
    event.create('deep_space_printed_circuit_board_wrap')
        .displayName('Wrap of Deep Space Printed Circuit Boards')
        .texture('gtceu:item/wraps/deep_space_printed_circuit_board_wrap')
        
    event.create('singularity_printed_circuit_board_wrap')
        .displayName('Wrap of Singularity Printed Circuit Boards')
        .texture('gtceu:item/wraps/singularity_printed_circuit_board_wrap')
        
    event.create('4d_printed_circuit_board_wrap')
        .displayName('Wrap of 4d Printed Circuit Boards')
        .texture('gtceu:item/wraps/4d_printed_circuit_board_wrap')

//Crystal Wraps
    event.create('crystal_cpu_wrap')
        .displayName('Wrap of Crystal CPUs')
        .texture('gtceu:item/wraps/crystal_cpu_wrap')
        
    event.create('crystal_soc_wrap')
        .displayName('Wrap of Crystal SOCs')
        .texture('gtceu:item/wraps/crystal_soc_wrap')

//Processing Units
    event.create('neuro_processing_unit_wrap')
        .displayName('Wrap of Neuro Processing Units')
        .texture('gtceu:item/wraps/neuro_processing_unit_wrap')
})