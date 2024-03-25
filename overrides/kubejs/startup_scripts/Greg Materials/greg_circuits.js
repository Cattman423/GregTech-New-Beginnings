StartupEvents.registry('item', event => {
    Platform.mods.kubejs.name = 'GT:NB'
//Line one (brown)
    event.create('fungal_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('fungal_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('fungal_printed_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

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
        //.texture()
        //.tooltip()

    event.create('optical_printed_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

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

//Line three (darg green)
    event.create('deep_space_processing_unit')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('deep_space_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('deep_space_printed_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

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
        //.texture()
        //.tooltip()

    event.create('singularity_printed_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

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
        //.texture()
        //.tooltip()

    event.create('4d_printed_circuit_board')
        //.displayName()
        //.texture()
        //.tooltip()

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
    event.create('optical_transistor')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('optical_resistor')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('optical_capacitor')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('optical_diode')
        //.displayName()
        //.texture()
        //.tooltip()

    event.create('optical_inductor')
        //.displayName()
        //.texture()
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

//Clockwork Mechanism
    event.create('clockwork_mechanism')
        .displayName('Clockwork Mechanism')
        .texture('gtceu:item/mechanisms/clockwork_mechanism')

    event.create('advanced_clockwork_mechanism')
        .displayName('Advanced Clockwork Mechanism')
        .texture('gtceu:item/mechanisms/advanced_clockwork_mechanism')
})