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
    event.add('gtceu:chlorobenzene', vein => {
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of('gtceu:chlorobenzene').fluid)
        vein.weight(20)
        vein.minimumYield(120)
        vein.maximumYield(400)
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
        vein.density(0.8)
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
        vein.weight(30)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('carobbiite')).size(4, 12))
                .layer(l => l.weight(3).mat(GTMaterials.get('carobbiite')).size(4, 12))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('carobbiite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Nepheline
    event.add("kubejs:nepheline_vein_ma", vein => {
        vein.weight(20)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(5, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('nepheline')).size(6, 12))
                .layer(l => l.weight(4).mat(GTMaterials.Biotite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('titanite')).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.get('villiaumite')).size(6, 12))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('nepheline'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Fluorite
    event.add("kubejs:fluorite_vein_ma", vein => {
        vein.weight(50)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(50, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('fluorite')).size(6, 12))
                .layer(l => l.weight(4).mat(GTMaterials.Barite).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Calcite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('fluorite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Rhodochrosite
    event.add("kubejs:rhodochrosite_vein_ma", vein => {
        vein.weight(40)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(15, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get('rhodochrosite')).size(6, 12))
                .layer(l => l.weight(3).mat(GTMaterials.Silver).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('rhodochrosite'))
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Sulfur
    event.add("kubejs:sulfur_vein_ma", vein => {
        vein.weight(100)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Sulfur).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Pyrite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Sphalerite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Quartzite
    event.add("kubejs:quartz_vein_ma", vein => {
        vein.weight(20)
        vein.clusterSize(29)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
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
//Redstone
    event.add("kubejs:redstone_vein_ma", vein => {
        vein.weight(60)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
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
//Nickel
    event.add("kubejs:nickel_vein_ma", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-10, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Garnierite).size(6, 12))
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(8, 16))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Pentlandite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Nickel)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Arsenic
    event.add("kubejs:arsenic_vein_ma", vein => {
        vein.weight(60)
        vein.clusterSize(20)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
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
//Gold
    event.add("kubejs:gold_vein_ma", vein => {
        vein.weight(160)
        vein.clusterSize(40)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Magnetite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Gold).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnetite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Iron
    event.add("kubejs:iron_vein_ma", vein => {
        vein.weight(160)
        vein.clusterSize(44)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
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
//Beryllium
    event.add("kubejs:beryllium_vein_ma", vein => {
        vein.weight(30)
        vein.clusterSize(50)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(5, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Emerald).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Beryllium)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Tetrahedrite
    event.add("kubejs:tetrahedrite_vein_ma", vein => {
        vein.weight(70)
        vein.clusterSize(46)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(80, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Tetrahedrite).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(8, 16))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Galena
    event.add("kubejs:galena_vein_ma", vein => {
        vein.weight(40)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
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
//Salts
    event.add("kubejs:salts_vein_mn", vein => {
        vein.weight(50)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("mars_stone")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(50, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lepidolite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.RockSalt)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
})