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
        vein.layer('mars_stone')
        vein.biomes('ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps')
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer('mars_stone')
        vein.biomes('ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps')
    })
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer('mars_stone')
        vein.biomes('ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps')
    })
    event.modify("gtceu:scheelite_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.layer('mars_stone')
        vein.biomes('ad_astra:martian_wastelands', 'ad_astra:martian_canyon_creek', 'ad_astra:martian_polar_caps')
    })
//Ostrum
    event.add("kubejs:ostrum_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer('mars_stone')
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
//Carobbiite
    event.add("kubejs:carobbiite_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
    // Define a height range:
        vein.heightRangeUniform(30, 70)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('carobbiite')).size(4, 12))
                .layer(l => l.weight(3).mat(GTMaterials.get('carobbiite')).size(4, 12))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('carobbiite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Nepheline
    event.add("kubejs:nepheline_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
    // Define a height range:
        vein.heightRangeUniform(5, 30)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('nepheline')).size(6, 12))
                .layer(l => l.weight(4).mat(GTMaterials.Biotite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('titanite')).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('villiaumite')).size(6, 12))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('nepheline'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Fluorite
    event.add("kubejs:fluorite_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(50)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
    // Define a height range:
        vein.heightRangeUniform(50, 80)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('fluorite')).size(6, 12))
                .layer(l => l.weight(4).mat(GTMaterials.Barite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Calcite).size(8, 16))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('fluorite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Rhodochrosite
    event.add("kubejs:rhodochrosite_vein_ma", vein => {
    // Basic vein generation properties
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
    // Define a height range:
        vein.heightRangeUniform(15, 50)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('rhodochrosite')).size(6, 12))
                .layer(l => l.weight(3).mat(GTMaterials.Silver).size(8, 16))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('rhodochrosite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
})