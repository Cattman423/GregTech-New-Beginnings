StartupEvents.registry('block', event => {
//Casings
    event.create('test_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/casings/test_casing');

    event.create('agri_casing')
        .displayName('Agricultral Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/casings/agri_casing');

    event.create('sterile_casing')
        .displayName('Sterilized Machine Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/casings/sterile_casing');

    event.create('solar_casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .model('gtceu:block/misc/solar_casing')

    event.create('alon_glass')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/misc/alon_glass')
        .glassSoundType()
        .notSolid()
        .opaque(false)


//Logs
    /*event.create('treated_wood_log')
        .woodSoundType()
        .hardness(2)
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('gtceu:block/misc/treated_log')
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "gtceu:block/misc/treated_log",
                    "x": 90,
                    "y": 90
                },
                "axis=y": {
                    "model": "gtceu:block/misc/treated_log"
                },
                "axis=z": {
                    "model": "gtceu:block/misc/treated_log",
                    "x": 90
                }
            }
        }

    event.create('treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .textureAll('gtceu:block/misc/treated_wood')

    event.create('stripped_treated_wood_log')
        .woodSoundType()
        .hardness(2)
        .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .model('gtceu:block/misc/stripped_treated_log')
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "gtceu:block/misc/stripped_treated_log",
                    "x": 90,
                    "y": 90
                },
                "axis=y": {
                    "model": "gtceu:block/misc/stripped_treated_log"
                },
                "axis=z": {
                    "model": "gtceu:block/misc/stripped_treated_log",
                    "x": 90
                }
            }
        }

    event.create('stripped_treated_wood')
        .woodSoundType()
        .hardness(2)
        .tagBlock('minecraft:mineable/axe')
        .tagBoth('minecraft:logs')
        .tagBoth('forge:stripped_logs')
        .textureAll('gtceu:block/misc/stripped_treated_wood')*/
})