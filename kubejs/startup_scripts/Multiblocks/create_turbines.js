GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Basic Alternator
    event.create('basic_alternator')
        .category('multiblock')
        .setEUIO('out')
            .setMaxIOSize(2, 0, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .setMaxTooltips(6)
//Advanced Alternator
    event.create('advanced_alternator')
        .category('multiblock')
        .setEUIO('out')
            .setMaxIOSize(2, 0, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .setMaxTooltips(6)
//Extreme Alternator
    event.create('extreme_alternator')
        .category('multiblock')
        .setEUIO('out')
            .setMaxIOSize(2, 0, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .setMaxTooltips(6)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Basic Alternator
    event.create('basic_alternator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('basic_alternator')
        .appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "CCC", "CCC")
            .aisle("CCC", "KGE", "CCC")
            .aisle("CCC", "CAC", "CCC")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CASING_BRONZE_GEARBOX.get()))
            .where("C", Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get())
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1)))
            .where('#', Predicates.any())
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
            .where('E', Predicates.blocks( 
                'gtceu:lv_energy_output_hatch', 
                'gtceu:mv_energy_output_hatch'
            ).setExactLimit(1))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_bronze_plated_bricks",
            "gtceu:block/multiblock/generator/large_bronze_boiler", false
        )
//Advanced Alternator
    event.create('advanced_alternator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('advanced_alternator')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CWC", "CWC", "CWC")
            .aisle("CWC", "KGE", "CWC")
            .aisle("CWC", "CAC", "CWC")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
            .where('W', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
            .where("C", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
            .where('E', Predicates.blocks(
                'gtceu:hv_energy_output_hatch', 
                'gtceu:ev_energy_output_hatch')
            .setExactLimit(1))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/generator/large_bronze_boiler", false
        )
//Extreme Alternator
    event.create('extreme_alternator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('extreme_alternator')
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_TURBINE)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CWC", "CWC", "CWC")
        .aisle("CWC", "KGE", "CWC")
        .aisle("CWC", "CAC", "CWC")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_GEARBOX.get()))
            .where('W', Predicates.blocks(GTBlocks.COIL_NICHROME.get()))
            .where("C", Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_TURBINE.get())
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
            .where('E', Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/mechanic/machine_casing_turbine_tungstensteel",
            "gtceu:block/multiblock/generator/large_bronze_boiler", false
        )
})