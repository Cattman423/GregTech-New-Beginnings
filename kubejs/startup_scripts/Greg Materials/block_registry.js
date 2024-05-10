StartupEvents.registry('block', event => {
    event.create('mithril_coil_block', 'gtceu:coil')
        .temperature(12600)
        .level(16)
        .energyDiscount(16) // 
        .tier(8)
        .coilMaterial(() => GTMaterials.get('mithril'))
        .texture('gtceu:block/coils/machine_coil_mithril')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')
})