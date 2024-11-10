StartupEvents.registry('block', event => {
    event.create('hsss_coil_block', 'gtceu:coil')//
        .displayName('HSS-S Coil Block')
        .temperature(6300)
        .level(6)
        .energyDiscount(4) // 
        .tier(4.5)
        .coilMaterial(() => GTMaterials.HSSS)
        .texture('gtceu:block/coils/machine_coil_hsss')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')

    event.create('mithril_coil_block', 'gtceu:coil')//
        .temperature(8100)
        .level(8)
        .energyDiscount(6) // 
        .tier(5.5)
        .coilMaterial(() => GTMaterials.get('mithril'))
        .texture('gtceu:block/coils/machine_coil_mithril')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')

    event.create('chadium_coil_block', 'gtceu:coil')
        .temperature(9900)
        .level(12)
        .energyDiscount(8) // 
        .tier(6.5)
        .coilMaterial(() => GTMaterials.get('chadium'))
        .texture('gtceu:block/coils/machine_coil_chadium')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')

    event.create('awakened_draconium_coil_block', 'gtceu:coil')
        .temperature(11700)
        .level(16)
        .energyDiscount(12) // 
        .tier(8.5)
        .coilMaterial(() => GTMaterials.get('awakened_draconium'))
        .texture('gtceu:block/coils/machine_coil_awakened_draconium')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')

    event.create('stellar_matter_coil_block', 'gtceu:coil')
        .temperature(12600)
        .level(16)
        .energyDiscount(16) // 
        .tier(9)
        .coilMaterial(() => GTMaterials.get('stellar_matter'))
        .texture('gtceu:block/coils/machine_coil_stellar_matter')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')

    event.create('infinity_coil_block', 'gtceu:coil')
        .temperature(13500)
        .level(32)
        .energyDiscount(16) // 
        .tier(9.5)
        .coilMaterial(() => GTMaterials.get('infinity'))
        .texture('gtceu:block/coils/machine_coil_infinity')
        .hardness(5)
        .requiresTool(true)
        .soundType(SoundType.NETHERITE_BLOCK)
        .tagBlock('forge:mineable/wrench')
})