GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:mercury_mantle', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of('gtceu:molten_mercury_mantle').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })

    event.add('gtceu:mercury', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of('gtceu:mercury').fluid)
        vein.weight(5)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})