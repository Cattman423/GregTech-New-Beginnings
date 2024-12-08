GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:moon_mantle', vein => {
        vein.dimensions('gcyr:luna')
        vein.fluid(() => Fluid.of('gtceu:molten_moon_mantle').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:helium_3', vein => {
        vein.dimensions('gcyr:luna')
        vein.fluid(() => Fluid.of('gtceu:helium_3').fluid)
        vein.weight(10)
        vein.minimumYield(60)
        vein.maximumYield(425)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})
GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.dimensions("gcyr:luna")
        vein.layer("moon")
        vein.biomes("gcyr:moon")
    })
    event.modify("gtceu:bauxite_vein_end", vein => {
        vein.dimensions("gcyr:luna")
        vein.layer("moon")
        vein.biomes("gcyr:moon")
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("gcyr:luna")
        vein.layer('moon')
        vein.biomes('gcyr:moon')
    })
//Desh
    event.add("kubejs:desh_vein_mn", vein => {
    // Basic vein generation properties
        vein.weight(80)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
    // Define where the vein can generate
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
    // Define a height range:
        vein.heightRangeUniform(20, 60)
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
        vein.weight(80)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(20, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.Goethite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.YellowLimonite).size(8, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Hematite).size(8, 8))
                .layer(l => l.weight(1).mat(GTMaterials.Malachite).size(8, 8))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })

//Zircon
    event.add("kubejs:zircon_vein_mn", vein => {
        vein.weight(70)
        vein.clusterSize(38)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(-10, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get('zircon')).size(8, 16))
                .layer(l => l.weight(5).mat(GTMaterials.get('zircon')).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zircon'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Zirconium Oxide
    event.add("kubejs:zirconia_vein_mn", vein => {
        vein.weight(60)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(-50, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('uranium_oxide')).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.get('zirconium_oxide')).size(9, 18))
                .layer(l => l.weight(1).mat(GTMaterials.get('hafnium_oxide')).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('cerium_oxide')).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('zirconium_oxide'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Lunite
    event.add("kubejs:lunite_vein_mn", vein => {
        vein.weight(10)
        vein.clusterSize(26)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(-60, 0)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.get('lunite')).size(6, 16))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Kyanite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('lunite'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Borax
    event.add("kubejs:borax_vein_mn", vein => {
        vein.weight(55)
        vein.clusterSize(32)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(0, 75)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Borax).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('ulexite')).size(6, 12))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Borax)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Molybdenum
    event.add("kubejs:molybdenum_vein_mn", vein => {
        vein.weight(5)
        vein.clusterSize(27)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(20, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenum)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Quartzite
    event.add("kubejs:quartz_vein_mn", vein => {
        vein.weight(20)
        vein.clusterSize(29)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('charged_certus')).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Quartzite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Monazite
    event.add("kubejs:monazite_vein_mn", vein => {
        vein.weight(30)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Monazite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Monazite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Ilmenite
    event.add("kubejs:ilmenite_vein_mn", vein => {
        vein.weight(30)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
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

//Copper
    event.add("kubejs:copper_vein_mn", vein => {
        vein.weight(80)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(-40, 10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Chalcopyrite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Iron).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Copper).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Copper)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Galena
    event.add("kubejs:galena_vein_mn", vein => {
        vein.weight(40)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(-5, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Cassiterite
    event.add("kubejs:cassiterite_vein_mn", vein => {
        vein.weight(50)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(60, 220)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tin).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cassiterite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cassiterite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })

//Porphyry Copper
    event.add("kubejs:porphyry_copper_mn", vein => {
        vein.weight(50)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.heightRangeUniform(60, 220)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('porphyry_copper')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cassiterite)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
})