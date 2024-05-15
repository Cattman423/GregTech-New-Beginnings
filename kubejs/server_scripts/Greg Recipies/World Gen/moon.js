GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:naquadah_vein", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
    event.modify("gtceu:scheelite_vein", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
//Desh
/*    event.add("kubejs:desh_vein", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon_stone")
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
    // Define a height range:
        vein.heightRangeTriangle(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get('desh')).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })*/
})