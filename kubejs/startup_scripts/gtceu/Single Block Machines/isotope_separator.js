GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
        event.create('isotope_separator')
            .category('electric')
            .setEUIO('in')
                .setMaxIOSize(1, 2, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
                .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ARC)
    })
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Singleblock
    event.create('isotope_separator', 'simple')
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Isotope Separator")
                .recipeType('isotope_separator')
                .workableTieredHullRenderer('gtceu:block/machines/isotope_separator')
            )
        //.rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 3200);

//Multiblock
    event.create('isotope_separator_multi', 'multiblock')
        .tooltips(Component.translatable("gtceu.multiblock.parallelizable.tooltip"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.isotope_separator")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('isotope_separator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'CM MC', 'CMCMC')
            .aisle('CCCCC', 'CM MC', 'CMCMC')
            .aisle('CCCCC', 'CCACC', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_ATOMIC.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)))
            .where('M', Predicates.blocks(GCYMBlocks.ELECTROLYTIC_CELL.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/machines/isotope_separator', false
        )
})