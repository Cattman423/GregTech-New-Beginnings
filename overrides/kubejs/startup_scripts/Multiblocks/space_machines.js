GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Steam Engine
    event.create('basic_launch_facility')
        .category('space_production')
        .setEUIO('in')
        .setMaxIOSize(6, 12, 3, 6) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        //.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
})
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Steam Engine space_production
    event.create('basic_launch_facility', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('basic_launch_facility')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CIIIIIC', 'CCCCCCC', 'CCCCCCC', '       ', '       ', '       ')
            .aisle('ICCCCCI', 'IP   PC', 'CPPPPPC', ' CCCCC ', ' CCCCC ', ' CCCCC ')
            .aisle('ICCCCCI', 'C     C', 'C P P C', ' CP PC ', ' CP PC ', ' CVVVC ')
            .aisle('ICCCCCI', 'C     C', 'C P P C', ' C   C ', ' C   C ', ' CVVVC ')
            .aisle('ICCCCCI', 'C     C', 'C P P C', ' CP PC ', ' CP PC ', ' CVVVC ')
            .aisle('ICCCCCI', 'IP   PC', 'CPPPPPC', ' CCCCC ', ' CCCCC ', ' CCCCC ')
            .aisle('CIIMIIC', 'CCCACCC', 'CCCCCCC', '       ', '       ', '       ')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            .where('I', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('V', Predicates.blocks('tfmg:caution_block'))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            'gtceu:block/casings/solid/machine_casing_solid_steel',
            'gtceu:block/multiblock/large_chemical_reactor', false
        )
})