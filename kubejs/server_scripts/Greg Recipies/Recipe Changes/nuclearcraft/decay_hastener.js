ServerEvents.recipes(event => {
//Decay Hastener
    function decaydust(input, output) {
        event.recipes.gtceu.decay_hastener('kubejs:gtceu/decay_hastener/nuclearcraft/' + input)
            .itemInputs('gtceu:' + input + '_dust')
            .itemOutputs('gtceu:' + output + '_dust')
            .EUt(hv)
            .duration(sec*10)
    }
    decaydust('bismuth', 'thallium')
    decaydust('caesium_137', 'barium')
    decaydust('europium_155', 'gadolinium')
    decaydust('polonium', 'lead')
    decaydust('promethium', 'neodymium')
    decaydust('radium', 'lead')
    decaydust('ruthenium_106', 'palladium')
    decaydust('strontium_90', 'strontium')

    function decayingot(input, output) {
        event.recipes.gtceu.decay_hastener('kubejs:gtceu/decay_hastener/nuclearcraft/' + input)
        .itemInputs('gtceu:' + input + '_ingot')
        .itemOutputs('gtceu:' + output + '_ingot')
            .EUt(hv)
            .duration(sec*10)
    }
    decayingot('americium_241', 'neptunium')
    decayingot('americium', 'plutonium_238')
    decayingot('berkelium', 'americium')
    decayingot('curium_243', 'plutonium')
    decayingot('curium_245', 'plutonium_241')
    decayingot('curium_246', 'plutonium_242')
    decayingot('curium', 'americium')
    decayingot('californium_249', 'curium_245')
    decayingot('californium_250', 'curium_246')
    decayingot('californium', 'curium')
    decayingot('neptunium', 'uranium_233')
    decayingot('plutonium', 'uranium_233')
    decayingot('plutonium_241', 'neptunium')
    decayingot('plutonium_242', 'uranium')

    function ingot_dust(input, output) {
        event.recipes.gtceu.decay_hastener('kubejs:gtceu/decay_hastener/nuclearcraft/' + input)
        .itemInputs('gtceu:' + input + '_ingot')
        .itemOutputs('gtceu:' + output + '_dust')
            .EUt(hv)
            .duration(sec*10)
    }

    ingot_dust('americium_242', 'lead')
    ingot_dust('berkelium_248', 'thorium')
    ingot_dust('californium_252', 'thorium')
    ingot_dust('neptunium_236', 'thorium')
    ingot_dust('plutonium_238', 'lead')
    ingot_dust('uranium_233', 'bismuth')
    ingot_dust('uranium_235', 'lead')
    ingot_dust('uranium', 'radium')

    function decay(id, input, output) {
        event.recipes.gtceu.decay_hastener('kubejs:gtceu/decay_hastener/nuclearcraft/' + id)
            .itemInputs(input)
            .itemOutputs(output)
            .EUt(hv)
            .duration(sec*10)
    }
    decay('thorium_dust', '4x gtceu:thorium_dust', 'gtceu:thorium_232_dust')
    decay('tbp_dust', 'nuclearcraft:tbp_dust', 'nuclearcraft:thorium_230')



    const ad_dec_hast = ['hv', 'ev']
    const el_dec_hast = ['iv', 'luv']
    const ul_dec_hast = ['zpm', 'uv']
    const ep_dec_hast = ['uhv', 'uev']
    const le_dec_hast = ['uiv', 'uxv', 'opv']

    ad_dec_hast.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_decay_hastener'), ['ABA', 'CDC', 'EBE'],
            {A: 'gtceu:tempered_glass', B: 'gtceu:' + base + '_electric_motor', C: '#gtceu:circuits/' + base,
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_basic'})
    })
    el_dec_hast.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_decay_hastener'), ['ABA', 'CDC', 'EBE'],
            {A: 'gtceu:laminated_glass', B: 'gtceu:' + base + '_electric_motor', C: '#gtceu:circuits/' + base,
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_advanced'})
    })
    ul_dec_hast.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_decay_hastener'), ['ABA', 'CDC', 'EBE'],
            {A: 'gtceu:fusion_glass', B: 'gtceu:' + base + '_electric_motor', C: '#gtceu:circuits/' + base,
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_du'})
    })
    ep_dec_hast.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_decay_hastener'), ['ABA', 'CDC', 'EBE'],
            {A: 'kubejs:alon_glass', B: 'gtceu:' + base + '_electric_motor', C: '#gtceu:circuits/' + base,
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_elite'})
    })
    le_dec_hast.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_decay_hastener'), ['ABA', 'CDC', 'EBE'],
            {A: 'kubejs:alon_glass', B: 'gtceu:' + base + '_electric_motor', C: '#gtceu:circuits/' + base,
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_extreme'})
    })
    event.shaped(
        Item.of('gtceu:decay_hastener_multi'), ['ABA', 'CDC', 'EBE'],
        {A: 'gtceu:fusion_glass', B: 'gtceu:iv_electric_motor', C: '#gtceu:circuits/iv',
        D: 'gtceu:iv_decay_hastener', E: 'nuclearcraft:plate_extreme'})
})