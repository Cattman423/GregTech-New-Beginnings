GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    //Hydroponic Farm
        event.create('isotope_separator')
            .category('electric')
            .setEUIO('in')
                .setMaxIOSize(1, 2, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
                .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ARC)
    })
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Singleblock
    event.create('isotope_separator', 'simple', GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, 
        GTValues.UXV, GTValues.OpV, GTValues.MAX) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('isotope_separator', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/isotope_separator");

//Multiblock
    event.create('isotope_separator_multi', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('isotope_separator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCC', 'CCCCC', 'CCCCC')
            .aisle('CCCCC', 'CM MC', 'CMCMC')
            .aisle('CCCCC', 'CM MC', 'CMCMC')
            .aisle('CCCCC', 'CCACC', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GCyMBlocks.CASING_ATOMIC.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('M', Predicates.blocks(GCyMBlocks.ELECTROLYTIC_CELL.get()))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/gcym/atomic_casing',
            'gtceu:block/machines/isotope_separator', false
        )
})