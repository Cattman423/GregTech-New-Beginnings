GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:venus_mantle', vein => {
        vein.dimensions('ad_astra:venus')
        vein.fluid(() => Fluid.of('gtceu:molten_venus_mantle').fluid)
        vein.weight(50)
        vein.minimumYield(120)
        vein.maximumYield(720)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:sulfuric_acid', vein => {
        vein.dimensions('ad_astra:venus')
        vein.fluid(() => Fluid.of('gtceu:sulfuric_acid').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(250)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:co_2', vein => {
        vein.dimensions('ad_astra:venus')
        vein.fluid(() => Fluid.of('gtceu:carbon_dioxide').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(1500)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
    event.add('gtceu:lead', vein => {
        vein.dimensions('ad_astra:venus')
        vein.fluid(() => Fluid.of('gtceu:lead').fluid)
        vein.weight(30)
        vein.minimumYield(120)
        vein.maximumYield(1600)
        vein.depletionAmount(2)
        vein.depletionChance(1)
        vein.depletedYield(50)
    })
})
GTCEuServerEvents.oreVeins(event => {
//Sulfur
    event.add("kubejs:sulfur_vein_va", vein => {
        vein.weight(100)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Pitchblende
    event.add("kubejs:pitchblende_vein_va", vein => {
        vein.weight(40)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Pitchblende).size(6, 12))
                .layer(l => l.weight(2).mat(GTMaterials.Uraninite).size(8, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pitchblende)
            .placement("surface")
            .density(0.2)
            .radius(5)
        ) 
    })
//Quartzite
    event.add("kubejs:quartz_vein_va", vein => {
        vein.weight(20)
        vein.clusterSize(29)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
    event.add("kubejs:redstone_vein_va", vein => {
        vein.weight(60)
        vein.clusterSize(32)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Monazite
    event.add("kubejs:monazite_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Nickel
    event.add("kubejs:nickel_vein_va", vein => {
        vein.weight(40)
        vein.clusterSize(34)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Beryllium
    event.add("kubejs:beryllium_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(50)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
    event.add("kubejs:tetrahedrite_vein_va", vein => {
        vein.weight(70)
        vein.clusterSize(46)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
    event.add("kubejs:galena_vein_va", vein => {
        vein.weight(40)
        vein.clusterSize(36)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Iridium
    event.add("kubejs:iridium_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(26)
        vein.density(0.8) 
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Cassiterite
    event.add("kubejs:cassiterite_vein_va", vein => {
        vein.weight(50)
        vein.clusterSize(44)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Naquadah
    event.add("kubejs:naquadah_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
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
//Rutile
    event.add("kubejs:rutile_vein_va", vein => {
        vein.weight(8)
        vein.clusterSize(34)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(5, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Rutile).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Titanium).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('ardite')).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Rutile)
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
//Ardite
    event.add("kubejs:ardite_vein_va", vein => {
        vein.weight(30)
        vein.clusterSize(28)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("venus_stone")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(5, 25)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get('ardite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Amethyst).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Rutile).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('ardite'))
            .placement("surface")
            .density(0.4)
            .radius(5)
        ) 
    })
})