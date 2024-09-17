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
    event.add('gtceu:helium_3_mer', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of('gtceu:helium_3').fluid)
        vein.weight(15)
        vein.minimumYield(60)
        vein.maximumYield(800)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:iron', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of('gtceu:iron').fluid)
        vein.weight(5)
        vein.minimumYield(60)
        vein.maximumYield(400)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})
GTCEuServerEvents.oreVeins(event => {
//Molybdenum
    event.add("kubejs:molybdenum_vein_mc", vein => {
    // Basic vein generation properties
        vein.weight(5)
        vein.clusterSize(20)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
    // Define a height range:
        vein.heightRangeUniform(20, 50)
    // Define the vein's generator:
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
            )
        )
    // Add one or more type of surface indicator to the vein:
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Diamond
    event.add("kubejs:diamond_vein_mc", vein => {
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Graphite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Diamond).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Coal).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Graphite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Draconium
    event.add("kubejs:draconium_vein_mc", vein => {
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('draconium')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('jade')).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Electrotine)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Redstone
    event.add("kubejs:redstone_vein_mc", vein => {
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-65, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Redstone).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Ruby).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Cinnabar).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Redstone)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Ilmenite
    event.add("kubejs:ilmenite_vein_mc", vein => {
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Ilmenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Uvarovite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Perlite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Ilmenite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Palladium
    event.add("kubejs:palladium_vein_mc", vein => {
        vein.weight(10)
        vein.clusterSize(20)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(5, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Platinum).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Chromium).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Cooperite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Palladium)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Arsenic
    event.add("kubejs:arsenic_vein_mc", vein => {
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-40, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Arsenic).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Bismuth).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Antimony).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Arsenic)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Bauxite
    event.add("kubejs:bauxite_vein_mc", vein => {
        vein.weight(80)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Bauxite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iron
    event.add("kubejs:iron_vein_mc", vein => {
        vein.weight(160)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Goethite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Goethite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iridium
    event.add("kubejs:iridium_vein_mc", vein => {
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.5) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Iridium).size(6, 12))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(4, 8))
                .layer(l => l.weight(1).mat(GTMaterials.get('mithril')).size(4, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Iridium)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Naquadah
    event.add("kubejs:naquadah_vein_mc", vein => {
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mercury_stone")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 90)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Naquadah).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.NaquadahEnriched).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Naquadah)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
})