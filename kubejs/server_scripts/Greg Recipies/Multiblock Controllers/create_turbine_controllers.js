//Machine uses
ServerEvents.recipes(event => {
    event.recipes.gtceu.basic_alternator('lv_1_amp')
        .circuit(1)
        .notConsumable('2x tfmg:rotor').perTick(false)
        .inputFluids('gtceu:lubricant 1').perTick(true)
        .rpm(64)
        .duration(9600)
        .EUt(-32)
    event.recipes.gtceu.advanced_alternator('hv_1_amp')
        .circuit(1)
        .notConsumable('3x tfmg:rotor').perTick(false)
        .inputFluids('gtceu:lubricant 5').perTick(true)
        .rpm(128)
        .duration(9600)
        .EUt(-512)
    event.recipes.gtceu.extreme_alternator('iv_1_amp')
        .circuit(1)
        .notConsumable('5x tfmg:rotor').perTick(false)
        .inputFluids('gtceu:lubricant 20').perTick(true)
        .rpm(256)
        .duration(9600)
        .EUt(-8192)
//Machine recipes
    event.shaped(
        Item.of('gtceu:basic_alternator'),
        [
            'BCB',
            'BAB',
            'BCB'
        ],
        {
            A: 'tfmg:rotor',
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