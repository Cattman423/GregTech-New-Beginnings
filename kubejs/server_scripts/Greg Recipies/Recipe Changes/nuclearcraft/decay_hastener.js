ServerEvents.recipes(event => {
//Decay Hastener
    function decay(id, input, output) {
        event.recipes.gtceu.decay_hastener(id)
            .itemInputs(input)
            .itemOutputs(output)
            .EUt(hv)
            .duration(sec*10)
    }
    decay('californium_249', 'nuclearcraft:californium_249', 'nuclearcraft:curium_245')
    decay('berkelium_247', 'nuclearcraft:berkelium_247', 'nuclearcraft:americium_243')
    decay('berkelium_248', 'nuclearcraft:berkelium_248', 'gtceu:thorium_dust')
    decay('ruthenium_106_dust', 'nuclearcraft:ruthenium_106_dust', 'gtceu:palladium_dust')
    decay('plutonium_238', 'nuclearcraft:plutonium_238', 'gtceu:lead_dust')
    decay('thorium_dust', '4x gtceu:thorium_dust', 'nuclearcraft:thorium_232')
    decay('caesium_137_dust', 'nuclearcraft:caesium_137_dust', 'gtceu:barium_dust')
    decay('plutonium_239', 'nuclearcraft:plutonium_239', 'nuclearcraft:uranium_233')
    decay('californium_251', 'nuclearcraft:californium_251', 'nuclearcraft:curium_247')
    decay('tbp_dust', 'nuclearcraft:tbp_dust', 'nuclearcraft:thorium_230')
    decay('californium_252', 'nuclearcraft:californium_252', 'gtceu:thorium_dust')
    decay('strontium_90_dust', 'nuclearcraft:strontium_90_dust', 'gtceu:strontium_dust')
    decay('protactinium_233_dust', 'nuclearcraft:protactinium_233_dust', 'nuclearcraft:uranium_233')
    decay('californium_250', 'nuclearcraft:californium_250', 'nuclearcraft:curium_246')
    decay('uranium_238', 'nuclearcraft:uranium_238', 'gtceu:radium_dust')
    decay('uranium_235', 'nuclearcraft:uranium_235', 'gtceu:lead_dust')
    decay('curium_243', 'nuclearcraft:curium_243', 'nuclearcraft:plutonium_239')
    decay('neptunium_237', 'nuclearcraft:neptunium_237', 'nuclearcraft:uranium_233')
    decay('uranium_233', 'nuclearcraft:uranium_233', 'gtceu:bismuth_dust')
    decay('curium_245', 'nuclearcraft:curium_245', 'nuclearcraft:plutonium_241')
    decay('curium_246', 'nuclearcraft:curium_246', 'nuclearcraft:plutonium_242')
    decay('radium_dust', 'gtceu:radium_dust', 'gtceu:lead_dust')
    decay('polonium_dust', 'gtceu:polonium_dust', 'gtceu:lead_dust')
    decay('curium_247', 'nuclearcraft:curium_247', 'nuclearcraft:americium_243')
    decay('americium_241', 'nuclearcraft:americium_241', 'nuclearcraft:neptunium_237')
    decay('americium_242', 'nuclearcraft:americium_242', 'gtceu:lead_dust')
    decay('neptunium_236', 'nuclearcraft:neptunium_236', 'gtceu:thorium_dust')
    decay('bismuth_dust', 'gtceu:bismuth_dust', 'gtceu:thallium_dust')
    decay('promethium_147_dust', 'nuclearcraft:promethium_147_dust', 'gtceu:neodymium_dust')
    decay('europium_155_dust', 'nuclearcraft:europium_155_dust', 'gtceu:gadolinium_dust')
    decay('americium_243', 'nuclearcraft:americium_243', 'nuclearcraft:plutonium_238')
    decay('plutonium_241', 'nuclearcraft:plutonium_241', 'nuclearcraft:neptunium_237')
    decay('plutonium_242', 'nuclearcraft:plutonium_242', 'nuclearcraft:uranium_238')

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