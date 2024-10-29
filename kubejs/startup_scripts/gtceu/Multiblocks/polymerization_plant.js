GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Polymerization Plant
    event.create('polymerization_plant')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(3, 6, 6, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Polymerization Plant
    event.create('polymerization_plant', 'multiblock')
        .tooltips(Component.translatable("gtceu.machine.available_recipe_map_1.tooltip",
                Component.translatable("gtceu.polymerization_plant")))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('polymerization_plant')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_EVAPORATION)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CCCCC", " CCC ", " CCC ", " CCC ", " CCC ")
            .aisle("CCCCC", " C C ", " C C ", " C C ", " C C ", " CMC ")
            .aisle("CCCCC", " C C ", " CCC ", " CCC ", " CCC ", " CCC ")
            .aisle("CCCCC", " C C ", " CCC ", "     ", "     ", "     ")
            .aisle("CCCCC", " C C ", " CCC ", " CCC ", " CCC ", "     ")
            .aisle("CCCCC", " C C ", " C C ", " C C ", " CMC ", "     ")
            .aisle("CCCCC", "CCACC", " CCC ", " CCC ", " CCC ", "     ")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where("C", Predicates.blocks(GTBlocks.CASING_STAINLESS_EVAPORATION.get())
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_stainless_evaporationx",
            "gtceu:block/multiblock/implosion_compressor", false
        )
})