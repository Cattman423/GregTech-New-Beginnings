GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Hydroponic Farm
    event.create('hydroponic_farm')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(9, 16, 2, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        //.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Hydroponic Farm
    event.create('hydroponic_farm', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('hydroponic_farm')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCCCCCC', 'CCCCCCCCCCC', 'CGGGGGGGGCC', 'CCCCCCCCCCC')
            .aisle('EEEEEEEEEEE', 'EDDDDDDDDEE', 'G        PI', 'EGGGGGGGGEE').setRepeatable(1, 8)
            .aisle('CCCCCCCCCCC', 'CCCCCACCCCC', 'CGGGGGGGGCC', 'CCCCCCCCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('D', Predicates.blocks('minecraft:dirt'))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('E', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
                    .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1)))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/implosion_compressor', false
        )
})