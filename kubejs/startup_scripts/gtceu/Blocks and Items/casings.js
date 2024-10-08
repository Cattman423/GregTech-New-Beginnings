StartupEvents.registry('block', event => {
    /*event.create('electrum_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('gtceu', 'block/casings/electrum_casing') });*/

    event.create('test_casing')//, 'gtceu:renderer'
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/casings/test_casing');

    event.create('agri_casing')//, 'gtceu:renderer'
        .displayName('Agricultral Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/casings/agri_casing');

    event.create('sterile_casing')//, 'gtceu:renderer'
        .displayName('Sterilized Machine Casing')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureAll('gtceu:block/casings/sterile_casing');

    event.create('solar_casing')//, 'gtceu:renderer'
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .model('gtceu:block/misc/solar_casing')

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