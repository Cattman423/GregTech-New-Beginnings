GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Hydroponic Farm
    event.create('arboretum')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(2, 16, 2, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        //.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Hydroponic Farm
    event.create('arboretum', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('arboretum')
        .appearanceBlock(() => Block.getBlock('kubejs:agri_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCC', 'CCCCCCC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CCCCCCC')
            .aisle('CCCCCCC', 'CDDDDDC', 'G     G', 'G     G', 'G     G', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'CDDDDDC', 'G     G', 'G BBB G', 'G BBB G', 'G  B  G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'CDDDDDC', 'G  L  G', 'G BLB G', 'G BLB G', 'G BBB G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'CDDDDDC', 'G     G', 'G BBB G', 'G BBB G', 'G  B  G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'CDDDDDC', 'G     G', 'G     G', 'G     G', 'G     G', 'G     G', 'CGGGGGC')
            .aisle('CCCCCCC', 'CCCACCC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CGGGGGC', 'CCCCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('minecraft:dirt'))
            .where('L', Predicates.blocks('minecraft:oak_log'))
            .where('B', Predicates.blocks('minecraft:oak_leaves'))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks('kubejs:agri_casing')
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/agri_casing',
            'gtceu:block/multiblock/implosion_compressor', false
        )
})