ServerEvents.recipes(event => {
//Certus Wafers
    event.recipes.gtceu.electric_blast_furnace('certus_quartz_boule')
        .itemInputs('64x ae2:certus_quartz_dust', '2x gtceu:small_gallium_arsenide_dust')
        .inputFluids('gtceu:nitrogen 8000')
        .itemOutputs('kubejs:certus_quartz_boule')
        .blastFurnaceTemp(2484)
        .duration(sec*600)
        .EUt(hv)
    event.recipes.gtceu.cutter('water_certus_wafer')
        .itemInputs('kubejs:certus_quartz_boule')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('32x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*80)
        .EUt(hv)
    event.recipes.gtceu.cutter('dist_water_certus_wafer')
        .itemInputs('kubejs:certus_quartz_boule')
        .inputFluids('gtceu:distilled_water 750')
        .itemOutputs('32x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*60)
        .EUt(hv)
    event.recipes.gtceu.cutter('lube_certus_wafer')
        .itemInputs('kubejs:certus_quartz_boule')
        .inputFluids('gtceu:lubricant 250')
        .itemOutputs('32x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*40)
        .EUt(hv)
    
    event.recipes.gtceu.electric_blast_furnace('naquadah_certus_quartz_boule')
        .itemInputs('16x ae2:quartz_block', 'gtceu:naquadah_ingot', 'gtceu:gallium_arsenide_dust')
        .inputFluids('gtceu:argon 8000')
        .itemOutputs('kubejs:naquadah_certus_quartz_boule')
        .blastFurnaceTemp(5400)
        .duration(sec*750)
        .EUt(ev)
    event.recipes.gtceu.cutter('water_naquadah_certus_wafer')
        .itemInputs('kubejs:naquadah_certus_quartz_boule')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('64x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*160)
        .EUt(ev)
    event.recipes.gtceu.cutter('dist_water_naquadah_certus_wafer')
        .itemInputs('kubejs:naquadah_certus_quartz_boule')
        .inputFluids('gtceu:distilled_water 750')
        .itemOutputs('64x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*120)
        .EUt(ev)
    event.recipes.gtceu.cutter('lube_naquadah_certus_wafer')
        .itemInputs('kubejs:naquadah_certus_quartz_boule')
        .inputFluids('gtceu:lubricant 250')
        .itemOutputs('64x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*80)
        .EUt(ev)
    
    event.recipes.gtceu.electric_blast_furnace('neutronium_certus_quartz_boule')
        .itemInputs('32x ae2:quartz_block', '4x gtceu:neutronium_ingot', '2x gtceu:gallium_arsenide_dust')
        .inputFluids('gtceu:xenon 8000')
        .itemOutputs('kubejs:neutronium_certus_quartz_boule')
        .blastFurnaceTemp(6484)
        .duration(sec*900)
        .EUt(iv)
    event.recipes.gtceu.cutter('water_neutronium_certus_wafer')
        .itemInputs('kubejs:neutronium_certus_quartz_boule')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('64x kubejs:certus_wafer', '32x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*240)
        .EUt(iv)
    event.recipes.gtceu.cutter('dist_water_neutronium_certus_wafer')
        .itemInputs('kubejs:neutronium_certus_quartz_boule')
        .inputFluids('gtceu:distilled_water 750')
        .itemOutputs('64x kubejs:certus_wafer', '32x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*180)
        .EUt(iv)
    event.recipes.gtceu.cutter('lube_neutronium_certus_wafer')
        .itemInputs('kubejs:neutronium_certus_quartz_boule')
        .inputFluids('gtceu:lubricant 250')
        .itemOutputs('64x kubejs:certus_wafer', '32x kubejs:certus_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*120)
        .EUt(iv)

    event.recipes.gtceu.chemical_reactor('ae2_silicon')
        .itemInputs('6x gtceu:electrum_foil', 'gtceu:polysilicon_plate')
        .inputFluids('gtceu:iron_iii_chloride 500')
        .itemOutputs('ae2:printed_silicon')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(hv)

//Calculation
    event.recipes.gtceu.laser_engraver('ae2_calculation')
        .itemInputs('kubejs:certus_wafer')
        .notConsumable('#forge:lenses/light_blue')
        .itemOutputs('kubejs:calculation_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(hv)

    event.recipes.gtceu.cutter('water_calculation')
        .itemInputs('kubejs:calculation_wafer')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('4x ae2:printed_calculation_processor')
        .duration(1800)
        .EUt(hv)

    event.recipes.gtceu.cutter('dist_water_calculation')
        .itemInputs('kubejs:calculation_wafer')
        .inputFluids('gtceu:distilled_water 750')
        .itemOutputs('4x ae2:printed_calculation_processor')
        .duration(1350)
        .EUt(hv)

    event.recipes.gtceu.cutter('lube_calculation')
        .itemInputs('kubejs:calculation_wafer')
        .inputFluids('gtceu:lubricant 250')
        .itemOutputs('4x ae2:printed_calculation_processor')
        .duration(900)
        .EUt(hv)

//Engineering
    event.recipes.gtceu.laser_engraver('ae2_engineering')
        .itemInputs('kubejs:certus_wafer')
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('kubejs:engineering_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(hv)

    event.recipes.gtceu.cutter('water_engineering')
        .itemInputs('kubejs:engineering_wafer')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('4x ae2:printed_engineering_processor')
        .duration(1800)
        .EUt(hv)

    event.recipes.gtceu.cutter('dist_water_engineering')
        .itemInputs('kubejs:engineering_wafer')
        .inputFluids('gtceu:distilled_water 750')
        .itemOutputs('4x ae2:printed_engineering_processor')
        .duration(1350)
        .EUt(hv)

    event.recipes.gtceu.cutter('lube_engineering')
        .itemInputs('kubejs:engineering_wafer')
        .inputFluids('gtceu:lubricant 250')
        .itemOutputs('4x ae2:printed_engineering_processor')
        .duration(900)
        .EUt(hv)

//Logic
    event.recipes.gtceu.laser_engraver('ae2_logic')
        .itemInputs('kubejs:certus_wafer')
        .notConsumable('#forge:lenses/yellow')
        .itemOutputs('kubejs:logic_wafer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(hv)

    event.recipes.gtceu.cutter('water_logic')
        .itemInputs('kubejs:logic_wafer')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('4x ae2:printed_logic_processor')
        .duration(1800)
        .EUt(hv)

    event.recipes.gtceu.cutter('dist_water_logic')
        .itemInputs('kubejs:logic_wafer')
        .inputFluids('gtceu:distilled_water 750')
        .itemOutputs('4x ae2:printed_logic_processor')
        .duration(1350)
        .EUt(hv)

    event.recipes.gtceu.cutter('lube_logic')
        .itemInputs('kubejs:logic_wafer')
        .inputFluids('gtceu:lubricant 250')
        .itemOutputs('4x ae2:printed_logic_processor')
        .duration(900)
        .EUt(hv)

//Processors
    event.recipes.gtceu.circuit_assembler('ae2_cal_solder')
        .itemInputs('ae2:printed_silicon', '#gtceu:circuits/hv', '4x ae2:printed_calculation_processor', '8x gtceu:fine_electrum_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:calculation_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(hv)

    event.recipes.gtceu.circuit_assembler('ae2_cal_tin')
        .itemInputs('ae2:printed_silicon', '#gtceu:circuits/hv', '4x ae2:printed_calculation_processor', '8x gtceu:fine_electrum_wire')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('ae2:calculation_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(hv)

    event.recipes.gtceu.circuit_assembler('ae2_eng_solder')
        .itemInputs('ae2:printed_silicon', '#gtceu:circuits/hv', '4x ae2:printed_engineering_processor', '8x gtceu:fine_electrum_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:engineering_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(hv)

    event.recipes.gtceu.circuit_assembler('ae2_eng_tin')
        .itemInputs('ae2:printed_silicon', '#gtceu:circuits/hv', '4x ae2:printed_engineering_processor', '8x gtceu:fine_electrum_wire')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('ae2:engineering_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(hv)

    event.recipes.gtceu.circuit_assembler('ae2_log_solder')
        .itemInputs('ae2:printed_silicon', '#gtceu:circuits/hv', '4x ae2:printed_logic_processor', '8x gtceu:fine_electrum_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:logic_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(hv)

    event.recipes.gtceu.circuit_assembler('ae2_log_tin')
        .itemInputs('ae2:printed_silicon', '#gtceu:circuits/hv', '4x ae2:printed_logic_processor', '8x gtceu:fine_electrum_wire')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('ae2:logic_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(hv)

//Certus Enrichment
    event.recipes.gtceu.chemical_reactor('certus_enrich')
        .itemInputs('4x ae2:certus_quartz_crystal', 'gtceu:carbon_dust')
        .inputFluids('gtceu:redstone 576')
        .itemOutputs('gtceu:charged_certus_dust')
        .chancedOutput('gtceu:charged_certus_dust', 5000, 500)
        .chancedOutput('gtceu:charged_certus_dust', 500, 50)
        .duration(400)
        .EUt(mv)

    event.recipes.gtceu.autoclave('certus_enrich_2')
        .itemInputs('gtceu:charged_certus_dust')
        .inputFluids('gtceu:polyethylene 36')
        .chancedOutput('ae2:charged_certus_crystal', 8000, 50)
        .duration(400)
        .EUt(mv)

//Core Blocks
    event.remove({id:'ae2:network/blocks/energy_energy_acceptor'})
    event.shaped(
        Item.of('ae2:energy_acceptor'),
        ['ABA', 'BCB', 'ABA'],
        {A: 'gtceu:double_stainless_steel_plate', B: 'ae2:quartz_vibrant_glass', C: 'gtceu:hv_field_generator'})

    event.remove({id:'ae2:network/blocks/controller'})
    event.shaped(
        Item.of('ae2:controller'),
        ['ABA', 'BCB', 'ABA'],
        {A: 'gtceu:double_stainless_steel_plate', B: 'ae2:smooth_sky_stone_block', C: 'ae2:energy_acceptor'})

    event.remove({id:'ae2:network/crafting/cpu_crafting_unit'})
    event.shaped(
        Item.of('ae2:crafting_unit'),
        ['ABA', 'DCD', 'ABA'],
        {A: 'gtceu:double_stainless_steel_plate', B: 'ae2:calculation_processor', C: 'ae2:logic_processor', D: '#ae2:glass_cable'})
    
    event.remove({id:'ae2:network/blocks/pattern_providers_interface'})
    event.shaped(
        Item.of('ae2:pattern_provider'),
        ['ABA', 'DCE', 'ABA'],
        {A: 'gtceu:double_stainless_steel_plate', B: 'ae2:quartz_vibrant_glass', C: 'ae2:interface', D: 'ae2:annihilation_core', E: 'ae2:formation_core'})

    event.remove({id:'ae2:network/blocks/interfaces_interface'})
    event.shaped(
        Item.of('ae2:interface'),
        ['ABA', 'D E', 'ABA'],
        {A: 'gtceu:double_stainless_steel_plate', B: 'ae2:quartz_vibrant_glass', D: 'ae2:annihilation_core', E: 'ae2:formation_core'})

    event.remove({id:'ae2:network/crafting/molecular_assembler'})
    event.shaped(
        Item.of('ae2:molecular_assembler'),
        ['ABA', 'DCE', 'ABA'],
        {A: 'gtceu:double_stainless_steel_plate', B: 'ae2:quartz_vibrant_glass', C: 'gtceu:hv_assembler', D: 'ae2:annihilation_core', E: 'ae2:formation_core'})

    event.remove({ id: 'ae2:network/blocks/storage_chest' })
    event.shaped(
        Item.of('ae2:chest'), 
        ['ABA', 'CDE', 'FGF'], 
        {A: 'ae2:quartz_glass', B: '#ae2:illuminated_panel', C: 'gtceu:certus_quartz_plate', D: 'gtceu:aluminium_crate',
        E: 'gtceu:fluix_plate', F: 'gtceu:dark_steel_block', G: 'gtceu:nether_quartz_plate'})
        
    event.remove({ id: 'ae2:network/blocks/quantum_ring' })
    event.shaped(
        Item.of('ae2:quantum_ring'), 
        ['ABA', 'DCD', 'ABA'], 
        {A: 'gtceu:stainless_steel_plate', B: 'ae2:calculation_processor', C: 'gtceu:quantum_star', D: 'ae2:engineering_processor'})
        
    event.remove({ id: 'ae2:network/blocks/quantum_link' })
    event.shaped(
        Item.of('ae2:quantum_link'), 
        ['ABA', 'BCB', 'ABA'], 
        {A: 'ae2:quartz_glass', B: 'ae2:fluix_pearl', C: 'gtceu:certus_quartz_plate'})

    event.remove({ id: 'ae2:network/blocks/io_condenser' })
    event.shaped(
        Item.of('ae2:condenser'), ['AAA', 'ABA', 'AAA'], 
        {A: 'gtceu:stainless_steel_plate', B: 'gtceu:quantum_star'})

    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.shaped(
        Item.of('ae2:drive'), 
        ['ABA', 'CDC', 'AEA'], 
        {A: 'gtceu:stainless_steel_plate', B: 'gtceu:hv_emitter', C: '#gtceu:circuits/hv', D: 'ae2:chest', E: 'gtceu:hv_sensor'})
    
    event.remove({ id: 'expatternprovider:ex_drive' })
    event.recipes.gtceu.assembler("ex_drive")
        .itemInputs("2x ae2:drive", "4x gtceu:fluix_plate", "ae2:capacity_card")
        .itemOutputs("expatternprovider:ex_drive")
        .duration(sec*10)
        .EUt(mv)
        .circuit(4)

    event.remove({ id: 'expatternprovider:ex_drive_upgrade' })
    event.recipes.gtceu.assembler('ex_drive_upgrade')
        .itemInputs("1x ae2:drive", "4x gtceu:fluix_plate", "ae2:capacity_card")
        .itemOutputs('expatternprovider:drive_upgrade')
        .duration(sec*10)
        .EUt(mv)
        .circuit(3)

//Storage Comps
    event.recipes.gtceu.circuit_assembler('1k_storage_comp')
        .itemInputs(
            'ae2:logic_processor',
            '8x gtceu:fine_red_alloy_wire',
            '4x ae2:certus_quartz_crystal', 
            'gtceu:plastic_printed_circuit_board'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:cell_component_1k')
        .duration(sec*10)
        .EUt(mv)
    event.recipes.gtceu.circuit_assembler('4k_storage_comp')
        .itemInputs(
            '4x ae2:cell_component_1k',
            '2x ae2:logic_processor',
            '8x gtceu:fine_red_alloy_wire'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:cell_component_4k')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(hv)
    event.recipes.gtceu.circuit_assembler('16k_storage_comp')
        .itemInputs(
            '4x ae2:cell_component_4k',
            '4x ae2:logic_processor',
            '8x gtceu:fine_red_alloy_wire'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:cell_component_16k')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(hv)
    event.recipes.gtceu.circuit_assembler('64k_storage_comp')
        .itemInputs(
            '4x ae2:cell_component_16k',
            '8x ae2:logic_processor',
            '8x gtceu:fine_red_alloy_wire'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:cell_component_64k')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(ev)
    event.recipes.gtceu.circuit_assembler('256k_storage_comp')
        .itemInputs(
            '4x ae2:cell_component_64k',
            '16x ae2:logic_processor',
            '8x gtceu:fine_red_alloy_wire'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:cell_component_256k')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(ev)
        
    event.recipes.gtceu.circuit_assembler('2x2_storage_comp')
        .itemInputs(
            'gtceu:fiber_reinforced_printed_circuit_board',
            '4x ae2:fluix_pearl',
            'ae2:engineering_processor'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:spatial_cell_component_2')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(ev)
    event.recipes.gtceu.circuit_assembler('16x16_storage_comp')
        .itemInputs(
            '4x ae2:spatial_cell_component_2',
            '4x ae2:fluix_pearl',
            '2x ae2:engineering_processor'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:spatial_cell_component_16')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(iv)
    event.recipes.gtceu.circuit_assembler('128x128_storage_comp')
        .itemInputs(
            '4x ae2:spatial_cell_component_16',
            '4x ae2:fluix_pearl',
            '4x ae2:engineering_processor'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('ae2:spatial_cell_component_128')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(sec*10)
        .EUt(luv)

//Cables
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

    colors.forEach( (base) => {
        event.recipes.gtceu.chemical_bath('kubejs:gtceu/chemical_bath/ae2/' + base + '_glass_cable')
            .itemInputs('ae2:fluix_glass_cable')
            .inputFluids('gtceu:' + base + '_dye 9')
            .itemOutputs('ae2:' + base + '_glass_cable')
            .duration(sec/2)
            .EUt(2)
        event.recipes.gtceu.chemical_bath('kubejs:gtceu/chemical_bath/ae2/' + base + '_covered_cable')
            .itemInputs('ae2:fluix_covered_cable')
            .inputFluids('gtceu:' + base + '_dye 9')
            .itemOutputs('ae2:' + base + '_covered_cable')
            .duration(sec/2)
            .EUt(2)
        event.recipes.gtceu.chemical_bath('kubejs:gtceu/chemical_bath/ae2/' + base + '_covered_dense_cable')
            .itemInputs('ae2:fluix_covered_dense_cable')
            .inputFluids('gtceu:' + base + '_dye 36')
            .itemOutputs('ae2:' + base + '_covered_dense_cable')
            .duration(sec)
            .EUt(2)
        event.recipes.gtceu.chemical_bath('kubejs:gtceu/chemical_bath/ae2/' + base + '_smart_cable')
            .itemInputs('ae2:fluix_smart_cable')
            .inputFluids('gtceu:' + base + '_dye 9')
            .itemOutputs('ae2:' + base + '_smart_cable')
            .duration(sec/2)
            .EUt(2)
        event.recipes.gtceu.chemical_bath('kubejs:gtceu/chemical_bath/ae2/' + base + '_smart_dense_cable')
            .itemInputs('ae2:fluix_smart_dense_cable')
            .inputFluids('gtceu:' + base + '_dye 36')
            .itemOutputs('ae2:' + base + '_smart_dense_cable')
            .duration(sec)
            .EUt(2)
    })

    event.recipes.gtceu.autoclave('quartzite_fiber')
        .itemInputs('4x gtceu:quartzite_dust')
        .inputFluids('minecraft:water 250')
        .itemOutputs('ae2:quartz_fiber')
        .duration(sec*5)
        .EUt(mv)
    event.recipes.gtceu.autoclave('quartz_fiber')
        .itemInputs('2x gtceu:nether_quartz_dust')
        .inputFluids('minecraft:water 250')
        .itemOutputs('ae2:quartz_fiber')
        .duration(sec*5)
        .EUt(mv)
    event.recipes.gtceu.autoclave('certus_quartz_fiber')
        .itemInputs('ae2:certus_quartz_dust')
        .inputFluids('minecraft:water 250')
        .itemOutputs('ae2:quartz_fiber')
        .duration(sec*5)
        .EUt(mv)

    event.recipes.gtceu.autoclave('fluix_cable_rubber')
        .itemInputs('ae2:quartz_fiber', 'ae2:fluix_dust')
        .inputFluids('gtceu:rubber 36')
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.autoclave('fluix_cable_silicone_rubber')
        .itemInputs('ae2:quartz_fiber', 'ae2:fluix_dust')
        .inputFluids('gtceu:silicone_rubber 18')
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.autoclave('fluix_cable_styrene_butadine_rubber')
        .itemInputs('ae2:quartz_fiber', 'ae2:fluix_dust')
        .inputFluids('gtceu:styrene_butadine_rubber 9')
        .itemOutputs('ae2:fluix_glass_cable')
        .duration(sec*4)
        .EUt(mv)

    event.recipes.gtceu.chemical_bath('fluix_cable_rubber')
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:rubber 144')
        .itemOutputs('ae2:fluix_covered_cable')
        .duration(sec*5)
        .EUt(mv)
    event.recipes.gtceu.chemical_bath('fluix_cable_silicone_rubber')
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs('ae2:fluix_covered_cable')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.chemical_bath('fluix_cable_styrene_butadine_rubber')
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids('gtceu:styrene_butadine_rubber 36')
        .itemOutputs('ae2:fluix_covered_cable')
        .duration(sec*3)
        .EUt(mv)

    event.recipes.gtceu.assembler('dense_covered_cable')
        .circuit(4)
        .itemInputs('4x ae2:fluix_covered_cable')
        .itemOutputs('ae2:fluix_covered_dense_cable')
        .duration(sec*4)
        .EUt(mv)

    event.recipes.gtceu.assembler('smart_cable')
        .itemInputs('8x ae2:fluix_covered_cable', '#gtceu:circuits/lv')
        .itemOutputs('8x ae2:fluix_smart_cable')
        .duration(sec*4)
        .EUt(mv)

    event.recipes.gtceu.assembler('smart_dense_cable')
        .itemInputs('2x ae2:fluix_covered_dense_cable', '#gtceu:circuits/lv')
        .itemOutputs('2x ae2:fluix_smart_dense_cable')
        .duration(sec*4)
        .EUt(mv)

//Cable Anchors
    event.recipes.gtceu.wiremill('cable_anchor_1')
        .itemInputs('gtceu:bronze_bolt')
        .itemOutputs('ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)
    event.recipes.gtceu.wiremill('cable_anchor_2')
        .itemInputs('gtceu:wrought_iron_bolt')
        .itemOutputs('2x ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)
    event.recipes.gtceu.wiremill('cable_anchor_4')
        .itemInputs('gtceu:steel_bolt')
        .itemOutputs('4x ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)
    event.recipes.gtceu.wiremill('cable_anchor_8')
        .itemInputs('gtceu:aluminium_bolt')
        .itemOutputs('8x ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)
    event.recipes.gtceu.wiremill('cable_anchor_16')
        .itemInputs('gtceu:stainless_steel_bolt')
        .itemOutputs('16x ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)
    event.recipes.gtceu.wiremill('cable_anchor_32')
        .itemInputs('gtceu:titanium_bolt')
        .itemOutputs('32x ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)
    event.recipes.gtceu.wiremill('cable_anchor_64')
        .itemInputs('gtceu:tungsten_steel_bolt')
        .itemOutputs('64x ae2:cable_anchor')
        .duration(sec)
        .EUt(lv/2)

//Terminals and Panels
    event.recipes.gtceu.assembler('bright_panel')
        .itemInputs('ae2:quartz_fiber', '3x ae2:quartz_vibrant_glass', 'gtceu:double_red_alloy_plate', 'gtceu:double_gold_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:monitor')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.assembler('pattern_panel')
        .itemInputs('ae2:crafting_terminal', 'ae2:engineering_processor', 'ae2:blank_pattern')
        .itemOutputs('ae2:pattern_encoding_terminal')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.assembler('crafting_panel')
        .itemInputs('ae2:terminal', 'ae2:calculation_processor', 'minecraft:crafting_table')
        .itemOutputs('ae2:crafting_terminal')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.assembler('terminal_panel')
        .itemInputs(
            'ae2:monitor', 
            'ae2:logic_processor', 
            '4x gtceu:double_stainless_steel_plate', 
            'ae2:annihilation_core',
            'ae2:formation_core',
            'gtceu:computer_monitor_cover'
        )
        .itemOutputs('ae2:terminal')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.assembler('storage_panel')
        .itemInputs('ae2:monitor', 'ae2:level_emitter', 'ae2:calculation_processor', 'gtceu:computer_monitor_cover')
        .itemOutputs('ae2:storage_terminal')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.assembler('conversion_panel')
        .itemInputs(
            'ae2:monitor', 
            'ae2:level_emitter', 
            '4x gtceu:double_stainless_steel_plate', 
            'ae2:engineering_processor', 
            'ae2:annihilation_core',
            'ae2:formation_core',
            'gtceu:computer_monitor_cover'
        )
        .itemOutputs('ae2:conversion_monitor')
        .duration(sec*4)
        .EUt(mv)
    event.recipes.gtceu.assembler('pattern_access_panel')
        .itemInputs('ae2:terminal', 'ae2:cable_pattern_provider', 'ae2:engineering_processor')
        .itemOutputs('ae2:pattern_access_terminal')
        .duration(sec*4)
        .EUt(mv)

//Cable devices
    event.remove({ id: 'ae2:network/parts/tunnels_me' })
    event.recipes.gtceu.assembler('p2p_bus')
        .itemInputs('3x ae2:fluix_crystal', 'ae2:engineering_processor', '3x gtceu:double_stainless_steel_plate')
        .itemOutputs('ae2:me_p2p_tunnel')
        .duration(sec*4)
        .EUt(mv)

    event.remove({ id: 'ae2:network/parts/storage_bus' })
    event.recipes.gtceu.assembler('storage_bus')
        .itemInputs('ae2:interface', 'gtceu:hv_electric_piston', 'gtceu:hv_electric_pump', '3x gtceu:stainless_steel_plate')
        .itemOutputs('ae2:storage_bus')
        .duration(sec*4)
        .EUt(mv)
    
    event.remove({ id: 'ae2:network/parts/import_bus' })
    event.recipes.gtceu.assembler('import_bus')
        .itemInputs('gtceu:mv_electric_pump', 'ae2:annihilation_core', 'gtceu:hv_electric_piston', '3x gtceu:stainless_steel_plate')
        .itemOutputs('ae2:import_bus')
        .duration(sec*4)
        .EUt(mv)

    event.remove({ id: 'ae2:network/parts/export_bus' })
    event.recipes.gtceu.assembler('export_bus')
        .itemInputs('gtceu:mv_electric_pump', 'ae2:formation_core', 'gtceu:hv_electric_piston', '3x gtceu:stainless_steel_plate')
        .itemOutputs('ae2:export_bus')
        .duration(sec*4)
        .EUt(mv)

    event.remove({ id: 'ae2:network/wireless_part' })
    event.shaped(
        Item.of('ae2:wireless_receiver'), 
        [' A ', 'BCB', ' B '], 
        {A: 'gtceu:ev_emitter', B: 'gtceu:titanium_plate', C: 'ae2:fluix_pearl'})

// Storage Housing
    event.remove({ id: 'ae2:network/cells/item_cell_housing' })
    event.shaped(
        Item.of('ae2:item_cell_housing'), 
        ['ABA', 'B B', 'ABA'], 
        {A: 'gtceu:fine_red_alloy_wire', B: 'gtceu:conductive_alloy_plate'})

    event.remove({ id: 'ae2:network/cells/fluid_cell_housing' })
    event.shaped(
        Item.of('ae2:fluid_cell_housing'), 
        ['ABA', 'B B', 'ABA'], 
        {A: 'gtceu:fine_red_alloy_wire', B: 'gtceu:energetic_alloy_plate'})
    
// AE2 Cards
    event.remove({ id: 'ae2:materials/basiccard' })
    event.shaped(
        'ae2:basic_card', 
        ['AB ', 'ACB', 'AB '], 
    {A: 'gtceu:fine_copper_wire', B: 'gtceu:iron_plate', C: 'ae2:calculation_processor'})
    
    event.remove({ id: 'ae2:materials/advancedcard' })
    event.shaped(
        'ae2:advanced_card', 
        ['AB ', 'ACB', 'AB '], 
        {A: 'gtceu:fine_aluminium_wire', B: 'gtceu:conductive_alloy_plate', C: 'ae2:calculation_processor'})

//Misc
    event.recipes.gtceu.macerator('sky_stone')
        .itemInputs('ae2:sky_stone_block')
        .itemOutputs('ae2:sky_dust')
        .duration(sec*5)
        .EUt(ulv)

})