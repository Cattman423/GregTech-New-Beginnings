GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
//Circuit Assembly Line
    event.create('circuit_assembly_line')
        .category('multiblock')
        .setEUIO('in')
            .setMaxIOSize(16, 1, 4, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER)
        //.setMaxTooltips(6)
})
//import static com.gregtechceu.gtceu.api.pattern.util.RelativeDirection.*;
GTCEuStartupEvents.registry('gtceu:machine', event => {
//Circuit Assembly Line
    event.create('circuit_assembly_line', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('circuit_assembly_line')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start(/*BACK, UP, RIGHT*/)
            .aisle('CIC', 'GBG', 'HED', ' F ')
            .aisle('CIC', 'GBG', 'HED', ' F ').setRepeatable(3, 15)
            .aisle('COC', 'GBG', 'AED', ' F ')
            .where('A', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setMaxGlobalLimited(4)))
            .where('O', Predicates.abilities(PartAbility.EXPORT_ITEMS))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('F', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                    .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(3)))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('E', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_CONTROL.get()))
            .where('B', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_LINE.get()))
            .where('D', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('H', Predicates.blocks(GTBlocks.CASING_GRATE.get())
                    .or(Predicates.abilities(PartAbility.DATA_ACCESS).setExactLimit(1)))
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/assembly_line", false
        )
})