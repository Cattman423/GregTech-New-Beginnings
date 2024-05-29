ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('advanced_alternator')
        .circuit(5)
        .itemInputs(
            'gtceu:ev_machine_hull', 
            '4x #gtceu:circuits/ev', 
            '4x gtceu:stainless_steel_frame', 
            '4x gtceu:ev_electric_motor', 
            '16x gtceu:small_stainless_steel_pipe',
            '2x gtceu:fluid_filter'
        )
        .itemOutputs('gtceu:hydroponic_farm')
        .duration(min*5)
        .EUt(ev)

    function farming (id, input, output){
        event.recipes.gtceu.hydroponic_farm(id)
            .itemInputs(input)
            .inputFluids('minecraft:water 1000')
            .itemOutputs(output)
            .duration(min)
            .EUt(iv)
    }

    const mccrops = ['wheat', 'carrots', 'potatoes', 'beatroot', 'pumpkin', 'melon', 'coca_beans']
    const pamscrops = []
    const fdcrops = []

    mccrops.forEach( (base) => {
        let id = 'kubejs:gtceu/hydroponic_farm/' + base
        let input = 'minecraft:' + base + '_seeds'
        let output = 'minecraft:' + base

        farming(id, input, output)
    })
})