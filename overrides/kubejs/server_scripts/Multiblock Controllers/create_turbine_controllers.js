//Machine uses
ServerEvents.recipes(event => {
    function basic_alt(id, su, rpm, eu){
        event.recipes.gtceu.basic_alternator(id)
            .circuit(1)
            .notConsumable('2x create_new_age:generator_coil')
            .inputStress(su)
            .rpm(rpm)
            .duration(9600)
            .EUt(eu)
    }
    function advanced_alt(id){
        event.recipes.gtceu.advanced_alternator(id)
            .circuit(1)
            .notConsumable('3x create_new_age:generator_coil')
            .inputFluids('gtceu:lubricant 250')
            .inputStress(2048)
            .rpm(128)
            .duration(9600)
            .EUt(-512)
    }
    function extreme_alt(id){
        event.recipes.gtceu.extreme_alternator(id)
            .circuit(1)
            .notConsumable('5x create_new_age:generator_coil')
            .inputFluids('gtceu:lubricant 8000')
            .inputStress(4096)
            .rpm(256)
            .duration(9600)
            .EUt(-8192)
    }
    basic_alt('lv_1_amp', 1024, 64, -32)
    advanced_alt('hv_1_amp')
    extreme_alt('iv_1_amp')
//Machine recipes
    event.shaped(
        Item.of('gtceu:basic_alternator'),
        [
            'BCB',
            'BAB',
            'BCB'
        ],
        {
            A: 'create_new_age:generator_coil',
            B: 'gtceu:steam_machine_casing',
            C: 'create:large_cogwheel'
        }
        ) 
    event.recipes.gtceu.assembler('advanced_alternator')
        .circuit(2)
        .itemInputs(
            'gtceu:hv_machine_hull', 
            '8x create:large_cogwheel', 
            '4x #gtceu:circuits/ev', 
            '4x gtceu:stainless_steel_frame', 
            '4x gtceu:hv_electric_motor', 
            '32x gtceu:fine_annealed_copper_wire'
        )
        .itemOutputs('gtceu:advanced_alternator')
        .duration(1200)
        .EUt(480)   
    event.recipes.gtceu.assembler('extreme_alternator')
        .circuit(2)
        .itemInputs(
            'gtceu:iv_machine_hull', 
            '8x create:large_cogwheel', 
            '4x #gtceu:circuits/luv', 
            '4x gtceu:tungsten_steel_frame', 
            '4x gtceu:iv_electric_motor', 
            '64x gtceu:fine_annealed_copper_wire'
        )
        .itemOutputs('gtceu:extreme_alternator')
        .duration(1200)
        .EUt(1920)
})