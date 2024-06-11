GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.biomes("#ad_astra:is_moon")
        vein.layer("moon_stone")
    })
//Desh
    event.add("kubejs:desh_vein_mn", vein => {
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
                .layer(l => l.weight(1).block(() => Block.getBlock('ae2:sky_stone_block')))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('desh'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iron
    event.add("kubejs:iron_vein_mn", vein => {
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
                .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
})