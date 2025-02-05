GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    //Hydroponic Farm
        event.create('fuel_reprocessor')
            .category('electric')
            .setEUIO('in')
                .setMaxIOSize(1, 8, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
            .setProgressBar(GuiTextures.PROGRESS_BAR_COKE_OVEN, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ARC)
    })
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Singleblock
    event.create('fuel_reprocessor', 'simple')
        .tiers(GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .langValue(GTValues.VLVH[tier] + " Fuel Reprocessor")
                .recipeType('fuel_reprocessor')
                .workableTieredHullRenderer('gtceu:block/machines/fuel_reprocessor')
            )
        //.rotationState(RotationState.NON_Y_AXIS)
        .tankScalingFunction(tier => tier * 3200);

//Multiblock
    event.create('fuel_reprocessor_multi', 'multiblock')
        .tooltips(Component.translatable("gtceu.multiblock.parallelizable.tooltip"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.fuel_reprocessor")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fuel_reprocessor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'CMMMC', 'CMMMC')
            .aisle('CCCCC', 'CMMMC', 'CMMMC')
            .aisle('CCCCC', 'CCACC', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_ATOMIC.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH)))
            .where('M', Predicates.blocks(GCYMBlocks.CRUSHING_WHEELS.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/machines/fuel_reprocessor', false
        )
})