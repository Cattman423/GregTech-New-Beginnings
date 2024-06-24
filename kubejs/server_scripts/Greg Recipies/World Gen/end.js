GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:ether', vein => {
        vein.dimensions('minecraft:the_end')
        vein.fluid(() => Fluid.of('gtceu:ether').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})