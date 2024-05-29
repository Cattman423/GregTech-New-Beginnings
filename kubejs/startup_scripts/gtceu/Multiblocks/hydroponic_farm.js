GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Builder's press
    event.create('hydroponic_farm')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(3, 6, 3, 3) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        //.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Builder's press
    event.create('hydroponic_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hydroponic_farm')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCCC", "CCCCCCCC", "CGGGGGGC", "CCCCCCCC")
            .aisle("CCCCCCCC", "CDDDDDDC", "G      I", "CGGGGGGC").setRepeatable(1, 16)
            .asile("CCCCCCCC", "CCCACCCC", "CGGGGGGC", "CCCCCCCC")
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where("C", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS)))
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false
        )
})