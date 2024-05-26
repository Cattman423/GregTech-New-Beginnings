GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    let stoneTypes = [
        'ad_astra:moon_stone', 'ad_astra:moon_deepslate', 'ad_astra:mars_stone', 'ad_astra:venus_stone', 'ad_astra:venus_sandstone', 'ad_astra:mercury_stone', 
        'ad_astra:glacio_stone', 'ad_astra:permafrost'
    ]

    //

    stoneTypes.forEach(type => {
        event.create(type.split(':')[1], 'ore')
            .stateSupplier(() => Block.getBlock(type).defaultBlockState())
            .baseModelLocation('ad_astra:block/' + type.split(':')[1])
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .generationCondition(ItemGenerationCondition.hasOreProperty)
            //.requiresTool('#minecraft:mineable/pickaxe')
    })
})