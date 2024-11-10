GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Sterile Lab
    event.create('sterile_lab')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(6, 3, 3, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Sterile Lab
    event.create('sterile_lab', 'multiblock')
        .tooltips(Component.translatable("gtceu.multiblock.parallelizable.tooltip"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
            Component.translatable("gtceu.sterile_lab")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('sterile_lab')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('kubejs:sterile_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' CCC ', ' GGG ', ' GGG ', ' CCC ', ' CCC ', '     ')
            .aisle('CCCCC', 'G   G', 'G   G', 'CLLLC', 'CCFCC', '  C  ')
            .aisle('CCCCC', 'G P G', 'G P G', 'CLPLC', 'CFPFC', ' CMC ')
            .aisle('CCCCC', 'G   G', 'G   G', 'CLLLC', 'CCFCC', '  C  ')
            .aisle(' CAC ', ' GGG ', ' GGG ', ' CCC ', ' CCC ', '     ')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('C', Predicates.blocks('kubejs:sterile_casing')
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CLEANROOM_GLASS.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
            .where('L', Predicates.blocks(GCyMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
            .where('F', Predicates.blocks(GTBlocks.FILTER_CASING_STERILE.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/sterile_casing",
            "gtceu:block/machines/sterile_lab", false
        )
})