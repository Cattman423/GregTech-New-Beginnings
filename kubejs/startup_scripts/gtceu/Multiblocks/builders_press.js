GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Builder's press
    event.create('builders_press')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(3, 6, 3, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        //.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Builder's press
    event.create('builders_press', 'multiblock')
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.builders_press")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('builders_press')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "TTT", "TTT", "TTT", "CCC")
            .aisle("CCC", "TTT", "TTT", "TTT", "CCC")
            .aisle("CCC", "TTT", "TTT", "TTT", "CCC")
            .aisle("CCC", "CPC", "CPC", "CPC", "CCC")
            .aisle("CCC", "CAC", "CCC", "CCC", "CCC")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where("C", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('T', Predicates.blocks('create:fluid_tank'))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false
        )
})