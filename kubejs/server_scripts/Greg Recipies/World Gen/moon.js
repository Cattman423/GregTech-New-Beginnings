GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:moon_mantle', vein => {
        vein.dimensions('ad_astra:moon')
        vein.fluid(() => Fluid.of('gtceu:molten_moon_mantle').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("moon_stone")
        vein.biomes("ad_astra:lunar_wastelands")
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.dimensions("ad_astra:moon")
        vein.layer("moon_stone")
        vein.biomes("ad_astra:lunar_wastelands")
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
        vein.biomes("ad_astra:lunar_wastelands")
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
        vein.biomes("ad_astra:lunar_wastelands")
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

//Zircon
    event.add("kubejs:zircon_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(70)
        vein.clusterSize(20)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon_stone")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeTriangle(-10, 40)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get('zircon')).size(8, 16))
                .layer(l => l.weight(5).mat(GTMaterials.get('zircon')).size(8, 16))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zircon'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Zirconium Oxide
    event.add("kubejs:zirconium_oxide_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon_stone")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeTriangle(-50, 20)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('uranium_oxide')).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.get('zirconium_oxide')).size(9, 18))
                .layer(l => l.weight(1).mat(GTMaterials.get('hafnium_oxide')).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('cerium_oxide')).size(8, 16))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zirconium_oxide'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Lunite
    event.add("kubejs:lunite_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(10)
        vein.clusterSize(20)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon_stone")
        vein.dimensions("ad_astra:moon")
        vein.biomes("ad_astra:lunar_wastelands")
    // Define a height range:
        vein.heightRangeTriangle(-60, 0)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get('lunite')).size(6, 16))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Kyanite).size(8, 16))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('lunite'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
})