ServerEvents.recipes(event => {
    function kineticassembler(id, iteminput, fluid, output, stress, rpm, time){
        event.recipes.gtceu.kinetic_assembler(id)
            //.circuit(circuit)
            .itemInputs(iteminput)
            .inputFluids(fluid)
            .itemOutputs(output)
            .inputStress(stress)
            .rpm(rpm)
            .duration(time)
    }
    event.recipes.create.mechanical_crafting(
        'gtceu:kinetic_assembler', 
        [
            'CDEDC',
            'CBABC',
            'CDEDC'
        ], 
        {
            A: 'create:andesite_casing',
            B: 'kubejs:advanced_clockwork_mechanism',
            C: 'minecraft:crafting_table',
            D: 'gtceu:poor_steel_plate',
            E: 'create:shaft'
        }
        )
    kineticassembler('charcoal_resistor', ['minecraft:paper', 'gtceu:charcoal_dust', 'gtceu:copper_single_wire'], 'gtceu:glue 72', 'gtceu:resistor', 768, 48, 160)
    kineticassembler('coal_resistor', ['minecraft:paper', 'gtceu:coal_dust', 'gtceu:copper_single_wire'], 'gtceu:glue 72', 'gtceu:resistor', 768, 48, 160)
    kineticassembler('carbon_resistor', ['minecraft:paper', 'gtceu:carbon_dust', 'gtceu:copper_single_wire'], 'gtceu:glue 72', 'gtceu:resistor', 768, 48, 160)
    kineticassembler('ulv_circuit', ['gtceu:glass_tube', '2x gtceu:steel_bolt', '2x gtceu:copper_single_wire'], 'gtceu:red_alloy 36', 'gtceu:vacuum_tube', 768, 48, 40)
    kineticassembler('lv_circuit', ['gtceu:steel_plate', '2x gtceu:resistor', '2x gtceu:vacuum_tube', 'gtceu:resin_printed_circuit_board', '2x gtceu:red_alloy_single_cable'], 'gtceu:red_alloy 36', 'gtceu:basic_electronic_circuit', 1024, 64, 200)
    kineticassembler('mv_circuit', ['gtceu:steel_plate', '2x gtceu:diode', '3x gtceu:basic_electronic_circuit', 'gtceu:phenolic_printed_circuit_board', '2x gtceu:copper_single_wire'], 'gtceu:red_alloy 36', 'gtceu:good_electronic_circuit', 1280, 80, 300)
    kineticassembler('lv_board', ['gtceu:wood_plate', '6x gtceu:copper_foil'], 'gtceu:glue 100', 'gtceu:resin_printed_circuit_board', 768, 48, 200)
})