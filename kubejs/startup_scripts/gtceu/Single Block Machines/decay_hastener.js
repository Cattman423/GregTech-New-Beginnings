GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    //Hydroponic Farm
        event.create('decay_hastener')
            .category('electric')
            .setEUIO('in')
                .setMaxIOSize(1, 1, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ARC)
    })
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Singleblock
    event.create('decay_hastener', 'simple', GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, 
            GTValues.UXV, GTValues.OpV, GTValues.MAX) // 
        //.rotationState(RotationState.NON_Y_AXIS)
        .recipeType('decay_hastener', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/decay_hastener");

//Multiblock
    event.create('decay_hastener_multi', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('decay_hastener')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'F   F', 'F   F', 'CCCCC')
            .aisle('CCCCC', ' MMM ', ' MMM ', 'CCCCC')
            .aisle('CCCCC', ' M M ', ' M M ', 'CCCCC')
            .aisle('CCCCC', ' MMM ', ' MMM ', 'CCCCC')
            .aisle('CCACC', 'F   F', 'F   F', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('F', Predicates.blocks('gtceu:extreme_frame'))
            .where('M', Predicates.blocks(GCyMBlocks.MOLYBDENUM_DISILICIDE_COIL_BLOCK.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/machines/decay_hastener', false
        )
})