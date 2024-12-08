/*GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Antimatter Reactor
    event.create('antimatter_prod')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(6, 3, 3, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
    event.create('antimatter_reactor')
        .category('multiblock')
        .setEUIO('out')
            .setMaxIOSize(6, 3, 3, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Antimatter Reactor
    event.create('antimatter_reactor', 'multiblock')
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_2.tooltip",
            Component.translatable("gtceu.antimatter_reactor"), Component.translatable("gtceu.antimatter_prod")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType(['gtceu:antimatter_reactor', 'gtceu:antimatter_prod'])
        .appearanceBlock(GCYMBlocks.CASING_NONCONDUCTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('             ', '             ', '             ', '             ', '    CCCCC    ', '             ', '    CCCCC    ', '             ', '             ', '             ', '             ')
            .aisle('             ', '             ', '    CCCCC    ', '    CCCCC    ', '  CCC   CCC  ', '    GGGGG    ', '  CCC   CCC  ', '    CCCCC    ', '    CCCCC    ', '             ', '             ')
            .aisle('             ', '    CCCCC    ', '   CC   CC   ', '   CC   CC   ', ' CC       CC ', '   GGQQQGG   ', ' CC       CC ', '   CC   CC   ', '   CC   CC   ', '    CCCCC    ', '             ')
            .aisle('     CCC     ', '   CC   CC   ', '  CC     CC  ', '  CC     CC  ', ' C         C ', '  GGQQ QQGG  ', ' C         C ', '  CC     CC  ', '  CC     CC  ', '   CC   CC   ', '     CCC     ')
            .aisle('    CCCCC    ', '  CC     CC  ', ' CC       CC ', ' CC       CC ', 'CC         CC', ' GGQQ   QQGG ', 'CC         CC', ' CC       CC ', ' CC       CC ', '  CC     CC  ', '    CCCCC    ')
            .aisle('   CCCCCCC   ', '  C       C  ', ' C         C ', ' C         C ', 'C           C', 'CCQQ     QQCC', 'C           C', ' C         C ', ' C         C ', '  C       C  ', '   CCCCCCC   ')
            .aisle('   CCCCCCC   ', '  C       C  ', ' C         C ', ' C         C ', 'C           C', 'ZCQ       QCZ', 'C           C', ' C         C ', ' C         C ', '  C       C  ', '   CCCCCCC   ')
            .aisle('   CCCCCCC   ', '  C       C  ', ' C         C ', ' C         C ', 'C           C', 'CCQQ     QQCC', 'C           C', ' C         C ', ' C         C ', '  C       C  ', '   CCCCCCC   ')
            .aisle('    CCCCC    ', '  CC     CC  ', ' CC       CC ', ' CC       CC ', 'CC         CC', ' GGQQ   QQGG ', 'CC         CC', ' CC       CC ', ' CC       CC ', '  CC     CC  ', '    CCCCC    ')
            .aisle('     CCC     ', '   CC   CC   ', '  CC     CC  ', '  CC     CC  ', ' C         C ', '  GGQQ QQGG  ', ' C         C ', '  CC     CC  ', '  CC     CC  ', '   CC   CC   ', '     CCC     ')
            .aisle('             ', '    CCCCC    ', '   CC   CC   ', '   CC   CC   ', ' CC       CC ', '   GGQQQGG   ', ' CC       CC ', '   CC   CC   ', '   CC   CC   ', '    CCCCC    ', '             ')
            .aisle('             ', '             ', '    CCCCC    ', '    CCCCC    ', '  CCC   CCC  ', '    GCCCG    ', '  CCC   CCC  ', '    CCCCC    ', '    CCCCC    ', '             ', '             ')
            .aisle('             ', '             ', '             ', '             ', '    CCCCC    ', '     CAC     ', '    CCCCC    ', '             ', '             ', '             ', '             ')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_NONCONDUCTING.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                    /*.or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)))*//*
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('Q', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
            .where('Z', Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(2)
                    .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
                    .or(Predicates.blocks(GCYMBlocks.CASING_NONCONDUCTING.get())))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/nonconducting_casing",
            "gtceu:block/machines/antimatter_reactor", false
        )
})*/