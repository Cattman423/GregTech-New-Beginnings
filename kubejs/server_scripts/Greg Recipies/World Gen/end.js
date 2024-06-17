GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:ether', vein => {
        //vein.addSpawnDimension('minecraft:end')
        vein.dimensions('minecraft:end')
        vein.fluid(() => Fluid.of('gtceu:ether').fluid)
        vein.weight(600)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})