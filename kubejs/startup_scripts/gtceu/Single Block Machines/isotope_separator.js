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
    event.create('isotope_separator', 'simple', GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, 
        GTValues.UXV, GTValues.OpV, GTValues.MAX) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('isotope_separator', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/isotope_separator");
})