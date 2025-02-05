GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('decay_hastener')
            .category('electric')
            .setEUIO('in')
                .setMaxIOSize(1, 1, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ARC)
    })
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Singleblock
    event.create('decay_hastener', 'simple')
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Decay Hastener")
                .recipeType('decay_hastener')
                .workableTieredHullRenderer('gtceu:block/machines/decay_hastener')
            )
        //.rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 3200);

//Multiblock
    event.create('decay_hastener_multi', 'multiblock')
        .tooltips(Component.translatable("gtceu.multiblock.parallelizable.tooltip"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.decay_hastener")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('decay_hastener')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'F   F', 'F   F', 'CCCCC')
            .aisle('CCCCC', ' MMM ', ' MMM ', 'CCCCC')
            .aisle('CCCCC', ' M M ', ' M M ', 'CCCCC')
            .aisle('CCCCC', ' MMM ', ' MMM ', 'CCCCC')
            .aisle('CCACC', 'F   F', 'F   F', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_ATOMIC.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)))
            .where('F', Predicates.blocks('gtceu:extreme_frame'))
            .where('M', Predicates.blocks(GCYMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/machines/decay_hastener', false
        )
})