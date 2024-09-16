ServerEvents.recipes(event => {
//Create casings
    function casingass(id, plate, log, output){
        event.recipes.gtceu.assembler(id)
            .itemInputs(plate, log)
            .itemOutputs(output)
            .duration(50)
            .EUt(16)
            .circuit(6);
        }
    function casingcraft(output, plate, log){
        event.shaped(
            Item.of(output, 2),
            [
                'ACA',
                'ABA',
                'ADA'
            ],
            {
                A: plate,
                B: log,
                C: '#forge:tools/hammers',
                D: '#forge:tools/wrenches',
            }
            )
        }

    casingass('andesite_casing_log', '6x gtceu:andesite_alloy_plate', '#forge:stripped_logs', '2x create:andesite_casing')
    casingass('andesite_casing_wood', '6x gtceu:andesite_alloy_plate', '#forge:stripped_wood', '2x create:andesite_casing')
    casingass('brass_casing_log', '6x gtceu:brass_plate', '#forge:stripped_logs', '2x create:brass_casing')
    casingass('brass_casing_wood', '6x gtceu:brass_plate', '#forge:stripped_wood', '2x create:brass_casing')
    casingass('copper_casing_log', '6x gtceu:copper_plate', '#forge:stripped_logs', '2x create:copper_casing')
    casingass('copper_casing_wood', '6x gtceu:copper_plate', '#forge:stripped_wood', '2x create:copper_casing')
    casingass('steel_casing_log', '6x gtceu:steel_plate', '#forge:stripped_logs', '2x tfmg:steel_casing')
    casingass('steel_casing_wood', '6x gtceu:steel_plate', '#forge:stripped_wood', '2x tfmg:steel_casing')
    casingass('kubejs:agri_casing', '6x gtceu:al_6xn_plate', 'gtceu:al_6xn_frame', '2x kubejs:agri_casing')
    casingass('gtceu:atomic_casing', '6x gtceu:extreme_plate', 'gtceu:extreme_frame', '2x gtceu:atomic_casing')
    //casingass('electrum_casing_log', '6x gtceu:electrum_plate', 'kubejs:stripped_treated_wood_log', '2x kubejs:electrum_casing')
    //casingass('electrum_casing_wood', '6x gtceu:electrum_plate', 'kubejs:stripped_treated_wood', '2x kubejs:electrum_casing')

    casingcraft('create:andesite_casing', 'gtceu:andesite_alloy_plate', '#forge:stripped_logs')
    casingcraft('create:andesite_casing', 'gtceu:andesite_alloy_plate', '#forge:stripped_wood')
    casingcraft('create:brass_casing', 'gtceu:brass_plate', '#forge:stripped_logs')
    casingcraft('create:brass_casing', 'gtceu:brass_plate', '#forge:stripped_wood')
    casingcraft('create:copper_casing', 'gtceu:copper_plate', '#forge:stripped_logs')
    casingcraft('create:copper_casing', 'gtceu:copper_plate', '#forge:stripped_wood')
    casingcraft('tfmg:steel_casing', 'gtceu:steel_plate', '#forge:stripped_logs')
    casingcraft('tfmg:steel_casing', 'gtceu:steel_plate', '#forge:stripped_wood')
    casingcraft('kubejs:agri_casing', 'gtceu:al_6xn_plate', 'gtceu:al_6xn_frame')
    casingcraft('gtceu:atomic_casing', 'gtceu:extreme_plate', 'gtceu:extreme_frame')
    //casingcraft('kubejs:electrum_casing', 'gtceu:electrum_plate', 'kubejs:stripped_treated_wood_log')
    //casingcraft('kubejs:electrum_casing', 'gtceu:electrum_plate', 'kubejs:stripped_treated_wood')
})