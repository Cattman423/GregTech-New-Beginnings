GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:mars_mantle', vein => {
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of('gtceu:molten_mars_mantle').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:naquadah_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer("mars_stone")
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer("mars_stone")
    })
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer("mars_stone")
    })
    event.modify("gtceu:scheelite_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer("mars_stone")
    })
//Ostrum
    event.add("kubejs:ostrum_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.get('ostrite')).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('ostrum')).size(3, 9))
                .layer(l => l.weight(2).mat(GTMaterials.Tantalite).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ostrum'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
})