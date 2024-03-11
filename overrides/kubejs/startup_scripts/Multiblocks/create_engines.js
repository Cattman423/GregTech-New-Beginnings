GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    //Steam Engine
        event.create('steam_engine_multi')
            .category('multiblock')
            .setEUIO('out')
                .setMaxIOSize(0, 0, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
            .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.ARC)
            .setMaxTooltips(6)
    })
    GTCEuStartupEvents.registry('gtceu:machine', event => {
    //Steam Engine
        event.create('steam_engine_multi', 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType('steam_engine_multi')
            .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("CCCCK", "CCCCK", "CCCCK", "#####")
                .aisle("CCCCK", "CPPPK", "CSSSK", "#SSS#")
                .aisle("CCCCK", "CCACK", "CCCCK", "#####")
                .where('A', Predicates.controller(Predicates.blocks(definition.get())))
                .where('P', Predicates.blocks(GTBlocks.CASING_BRONZE_PIPE.get()))
                .where("C", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                        .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where('#', Predicates.any())
                .where('K', Predicates.abilities(PartAbility.OUTPUT_ENERGY))
                .where('S', Predicates.blocks('create:copper_casing'))
                .build()
            )
            .workableCasingRenderer(
                "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
                "gtceu:block/multiblock/generator/large_bronze_boiler", false
            )
    })