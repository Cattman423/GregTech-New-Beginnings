GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moon_stone')
        .targets('#ad_astra:moon_stone_replaceables')
        .dimensions('ad_astra:moon')
})