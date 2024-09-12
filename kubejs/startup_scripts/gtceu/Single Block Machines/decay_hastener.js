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
    event.create('decay_hastener', 'simple', GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV, 
            GTValues.UXV, GTValues.OpV, GTValues.MAX) // 
        //.rotationState(RotationState.NON_Y_AXIS)
        .recipeType('decay_hastener', true, true)
        .tankScalingFunction(tier => tier * 3200)
        .workableTieredHullRenderer("gtceu:block/machines/decay_hastener");
})