GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:venus_mantle', vein => {
        vein.dimensions('ad_astra:venus')
        vein.fluid(() => Fluid.of('gtceu:molten_venus_mantle').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})