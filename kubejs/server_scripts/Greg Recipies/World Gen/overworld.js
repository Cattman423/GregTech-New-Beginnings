GTCEuServerEvents.oreVeins(event => {

//Increase Density
    event.modifyAll((id, vein) => {
        vein.density(0.8)
    })

//Zinc
    event.add("kubejs:zinc_vein_ow", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Zinc).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Galena).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(8, 8))
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:andesite')).size(8, 8))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Zinc)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Lignite
    event.add("kubejs:lignite_vein_ow", vein => {
        vein.weight(90)
        vein.clusterSize(46)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(40, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('lignite')).size(8, 16))
                .layer(l => l.weight(3).mat(GTMaterials.get('lignite')).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('lignite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Copper
    event.add("kubejs:copper_vein_ow", vein => {
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Chalcopyrite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(8, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Copper)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Spodumene
    event.add("kubejs:spodumene_vein_ow", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Spodumene).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.get('kunzite')).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.get('rose_quartz')).size(8, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Spodumene)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
})