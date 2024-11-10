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
    event.create('fuel_reprocessor', 'simple', GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, 
            GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fuel_reprocessor', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/fuel_reprocessor");

//Multiblock
    event.create('fuel_reprocessor_multi', 'multiblock')
        .tooltips(Component.translatable("gtceu.multiblock.parallelizable.tooltip"))
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.fuel_reprocessor")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fuel_reprocessor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'CMMMC', 'CMMMC')
            .aisle('CCCCC', 'CMMMC', 'CMMMC')
            .aisle('CCCCC', 'CCACC', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('M', Predicates.blocks(GCyMBlocks.CRUSHING_WHEELS.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/machines/fuel_reprocessor', false
        )
})