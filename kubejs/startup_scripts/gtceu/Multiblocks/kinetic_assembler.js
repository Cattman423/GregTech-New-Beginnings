GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Steam Engine
    event.create('kinetic_assembler')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(8, 1, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT_ASSEMBLER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//kinetic_assembler
    event.create('kinetic_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('kinetic_assembler')
        .appearanceBlock(() => Block.getBlock('create:andesite_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCKCC', 'CCCCC', 'CCCCC', 'CCFCC', 'CCCCC')
            .aisle('CCCCC', 'CCGCC', 'J   J', 'J P J', 'CICIC')
            .aisle('CCCCC', 'CLDLC', 'J   J', 'J S J', 'CICIC')
            .aisle('CCACC', 'CJJJC', 'CJJJC', 'CJJJC', 'CCCCC')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('create:andesite_casing'))
            .where('D', Predicates.blocks('create:depot'))
            .where('G', Predicates.blocks('create:large_cogwheel'))
            .where('S', Predicates.blocks('create:spout'))
            .where('P', Predicates.blocks('create:fluid_pipe'))
            .where('L', Predicates.blocks('create:mechanical_arm'))
            .where('J', Predicates.blocks('create:framed_glass'))
            .where('I', Predicates.blocks('create:andesite_casing')
                    .or(Predicates.abilities(PartAbility.STEAM_IMPORT_ITEMS))
                    .or(Predicates.abilities(PartAbility.STEAM_EXPORT_ITEMS)))
            .where('F', Predicates.abilities(PartAbility.IMPORT_FLUIDS))
            .where('K', Predicates.abilities(PartAbility.INPUT_KINETIC))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            new ResourceLocation('create', 'block/andesite_casing'),
            'gtceu:block/multiblock/large_chemical_reactor', false
        )
})