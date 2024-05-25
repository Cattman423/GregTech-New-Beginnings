StartupEvents.registry('block', event => {
    event.create('test_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('gtceu', 'block/casings/test-casing') });

    event.create('solar_casing', 'gtceu:renderer')
        .hardness(10)
        .resistance(1)
        .lightLevel(0)
        .texture('up', { 'all': new ResourceLocation('gtceu', 'block/casings/solar-cell') })
        .textureOverrideRenderer('minecraft:block/cube_all',
            { 'all': new ResourceLocation('gtceu', 'block/casings/solar-casing') });
})