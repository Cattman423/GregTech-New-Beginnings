ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer('conduit_binder_composite')
        .itemInputs('5x minecraft:gravel', '2x #forge:sand', '2x minecraft:clay_ball')
        .itemOutputs('9x enderio:conduit_binder_composite')
        .EUt(lv/2)
        .duration(sec*10)
    
    event.recipes.gtceu.autoclave('binder_comp_rubber')
        .itemInputs('enderio:conduit_binder_composite')
        .inputFluids('gtceu:rubber 144')
        .chancedOutput('enderio:conduit_binder', 7500, 50)
        .EUt(lv)
        .duration(sec*5)
    
    event.recipes.gtceu.autoclave('binder_comp_silicone_rubber')
        .itemInputs('enderio:conduit_binder_composite')
        .inputFluids('gtceu:silicone_rubber 72')
        .chancedOutput('enderio:conduit_binder', 8000, 100)
        .EUt(lv)
        .duration(sec*5)
    
    event.recipes.gtceu.autoclave('binder_comp_styrene_butadiene_rubber')
        .itemInputs('enderio:conduit_binder_composite')
        .inputFluids('gtceu:styrene_butadiene_rubber 36')
        .chancedOutput('enderio:conduit_binder', 8500, 150)
        .EUt(lv)
        .duration(sec*5)

    const grind_ball = ['soularium', 'conductive_alloy', 'pulsating_alloy', 'redstone_alloy', 'energetic_alloy', 'vibrant_alloy', 'copper_alloy', 'dark_steel', 'end_steel']

    grind_ball.forEach((base) => {
        event.recipes.gtceu.fluid_solidifier('kubejs:gtceu/fluid_solidifier/ender_io/' + base + '_grinding_ball')
            .notConsumable('gtceu:ball_casting_mold')
            .inputFluids('gtceu:' + base + ' 720')
            .itemOutputs('24x enderio:' + base + '_grinding_ball')
            .EUt(ulv)
            .duration(sec*5)
    })
})