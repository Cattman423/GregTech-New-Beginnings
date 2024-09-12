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
    event.create('fuel_reprocessor', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, 
            GTValues.UEV, GTValues.UIV, GTValues.UXV, GTValues.OpV, GTValues.MAX) // 
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fuel_reprocessor', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/fuel_reprocessor");
})