ServerEvents.recipes(event => {
    function xtone(id, output, circuit) {
        event.recipes.gtceu.builders_press(id)
            .circuit(circuit)
            .inputFluids('gtceu:construction_foam 4000')
            .itemOutputs(output)
            .EUt(60)
            .duration(400)
    }

    const xtonebase = ['agon', 'azur', 'bitt', 'cray', 'fort', 'glaxx', 'iszm', 'jelt', 'korp', 'kryp', 'lair', 'lave', 'mint', 'myst', 'reds', 'reed', 
        'roen', 'sols', 'sync', 'tank', 'vect', 'vena', 'zane', 'zech', 'zest', 'zeta', 'zion', 'zoea', 'zome', 'zone', 'zorg', 'ztyl', 'zyth']

    xtonebase.forEach( (base) => {
        let id = 'kubejs:gtceu/builders_press/xtones/' + base
        let out = '64x xtonesreworked:' + base + '_block_0'
        let i = xtonebase.indexOf(base)

        xtone(id, out, i)
    })

//Zkul
    event.recipes.gtceu.builders_press('kubejs:gtceu/builders_press/xtones/zkul')
        .notConsumable('minecraft:skeleton_skull')
        .inputFluids('gtceu:construction_foam 4000')
        .itemOutputs('64x xtonesreworked:zkul_block_0')
        .EUt(60)
        .duration(400)
})