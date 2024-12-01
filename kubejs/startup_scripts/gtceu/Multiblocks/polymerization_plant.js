GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Polymerization Plant
    event.create('polymerization_plant')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(3, 3, 6, 6) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Polymerization Plant
    event.create('polymerization_plant', 'multiblock')
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.polymerization_plant")))
        .tooltips(Component.translatable('gtnb.suggestion.polymerization_plant'))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('polymerization_plant')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_EVAPORATION)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CCCCC", "CCCCC", "     ", "     ", "     ")
            .aisle("CCCCC", "C P C", "CPCPC", " C C ", " C M ", " M   ")
            .aisle("CCCCC", "CPPPC", "CCCCC", "     ", "     ", "     ")
            .aisle("CCCCC", "C P C", "CCCCC", "     ", "     ", "     ")
            .aisle("CCCCC", "CPPPC", "CPCPC", " C C ", " M C ", "   M ")
            .aisle("CCCCC", "CCACC", "CCCCC", "     ", "     ", "     ")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks(GTBlocks.CASING_STAINLESS_EVAPORATION.get())
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('P', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_stainless_evaporation",
            "gtceu:block/multiblock/implosion_compressor", false
        )
})