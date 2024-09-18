GTCEuStartupEvents.registry('gtceu:material', event => {

// Icon Sets
    const DULL = GTMaterialIconSet.DULL;
    const METALLIC = GTMaterialIconSet.METALLIC;
    const MAGNETIC = GTMaterialIconSet.MAGNETIC;
    const SHINY = GTMaterialIconSet.SHINY;
    const BRIGHT = GTMaterialIconSet.BRIGHT;
    const DIAMOND = GTMaterialIconSet.DIAMOND;
    const EMERALD = GTMaterialIconSet.EMERALD;
    const GEM_HORIZONTAL = GTMaterialIconSet.GEM_HORIZONTAL;
    const GEM_VERTICAL = GTMaterialIconSet.GEM_VERTICAL;
    const RUBY = GTMaterialIconSet.RUBY;
    const OPAL = GTMaterialIconSet.OPAL;
    const GLASS = GTMaterialIconSet.GLASS;
    const NETHERSTAR = GTMaterialIconSet.NETHERSTAR;
    const FINE = GTMaterialIconSet.FINE;
    const SAND = GTMaterialIconSet.SAND;
    const WOOD = GTMaterialIconSet.WOOD;
    const ROUGH = GTMaterialIconSet.ROUGH;
    const FLINT = GTMaterialIconSet.FLINT;
    const LIGNITE = GTMaterialIconSet.LIGNITE;
    const QUARTZ = GTMaterialIconSet.QUARTZ;
    const CERTUS = GTMaterialIconSet.CERTUS;
    const LAPIS = GTMaterialIconSet.LAPIS;
    const FLUID = GTMaterialIconSet.FLUID;
    const RADIOACTIVE = GTMaterialIconSet.RADIOACTIVE;
    const INFINITY = GTMaterialIconSet.getByName('infinity');
    const STELLAR_MATTER = GTMaterialIconSet.getByName('stellar_matter');
    const SUB_ATOMIC = GTMaterialIconSet.getByName('sub_atomic');
    const EXPERIENCE = GTMaterialIconSet.getByName('experience')

// Flags
// Generic flags
    const no_unify = GTMaterialFlags.NO_UNIFICATION;
    const electrolyze = GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING;
    const centrifuge = GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING;
    const no_decomp = GTMaterialFlags.DISABLE_DECOMPOSITION;
    const explosive = GTMaterialFlags.EXPLOSIVE;
    const flammable = GTMaterialFlags.FLAMMABLE;
    const sticky = GTMaterialFlags.STICKY;
    const phosphorescent = GTMaterialFlags.PHOSPHORESCENT;
// Generation Flags
// Dust Flags
    const plates = GTMaterialFlags.GENERATE_PLATE;
    const dense_plate = GTMaterialFlags.GENERATE_DENSE;
    const rod = GTMaterialFlags.GENERATE_ROD;
    const bolt_and_screw = GTMaterialFlags.GENERATE_BOLT_SCREW;
    const frame = GTMaterialFlags.GENERATE_FRAME;
    const gear = GTMaterialFlags.GENERATE_GEAR;
    const long_rod = GTMaterialFlags.GENERATE_LONG_ROD;
    const block = GTMaterialFlags.FORCE_GENERATE_BLOCK;
// Ingot Flags
    const foil = GTMaterialFlags.GENERATE_FOIL;
    const ring = GTMaterialFlags.GENERATE_RING;
    const spring = GTMaterialFlags.GENERATE_SPRING;
    const small_spring = GTMaterialFlags.GENERATE_SPRING_SMALL;
    const small_gear = GTMaterialFlags.GENERATE_SMALL_GEAR;
    const fine_wire = GTMaterialFlags.GENERATE_FINE_WIRE;
    const rotor = GTMaterialFlags.GENERATE_ROTOR;
    const round = GTMaterialFlags.GENERATE_ROUND;
    const magnetic = GTMaterialFlags.IS_MAGNETIC;
// Gem Flags
    const crystallizable = GTMaterialFlags.CRYSTALLIZABLE;
    const lens = GTMaterialFlags.GENERATE_LENS;
// Fluid Flags
    const solder_mat = GTMaterialFlags.SOLDER_MATERIAL;
    const solder_mat_bad = GTMaterialFlags.SOLDER_MATERIAL_BAD;
    const solder_mat_good = GTMaterialFlags.SOLDER_MATERIAL_GOOD;
// Ore Flags
    const more_sifter = GTMaterialFlags.HIGH_SIFTER_OUTPUT;
// Misc
    const no_block_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES;
    const no_plate_compressor_craft = GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE;
    const no_hand_craft = GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES;
    const mortar_grind = GTMaterialFlags.MORTAR_GRINDABLE;
    const no_working = GTMaterialFlags.NO_WORKING;
    const no_smashing = GTMaterialFlags.NO_SMASHING;
    const no_smelt = GTMaterialFlags.NO_SMELTING;
    const blast_furnace_double = GTMaterialFlags.BLAST_FURNACE_CALCITE_DOUBLE;
    const blast_furnace_triple = GTMaterialFlags.BLAST_FURNACE_CALCITE_TRIPLE;
    const no_abs_recipe = GTMaterialFlags.DISABLE_ALLOY_BLAST;
    const not_alloy = GTMaterialFlags.DISABLE_ALLOY_PROPERTY;

//Element Materials
    event.create('desh')
        .ingot()
        .fluid()
        .ore()
        .color(0xF2A057).secondaryColor(0x2E2F04)
        .element('desh')
        .iconSet(METALLIC)
        .flags(plates, dense_plate, foil)
        .blastTemp(1000, null, 120, 1000)

    event.create('ostrum')
        .ingot()
        .fluid()
        .ore()
        .color(0xE5939B).secondaryColor(0x2F0425)
        .element('ostrum')
        .iconSet(METALLIC)
        .flags(plates, dense_plate, foil)
        .blastTemp(2500, 'low', 480, 2000)

    event.create('calorite')
        .ingot()
        .fluid()
        .ore()
        .color(0xE65757).secondaryColor(0x2F0506)
        .element('calorite')
        .iconSet(METALLIC)
        .flags(plates, dense_plate, foil)
        .blastTemp(3500, 'mid', 1920, 3000)

    event.create('mithril')
        .ingot()
        .fluid()
        .ore(2, 1)
        .element('mithril')
        .color(0x95F9F1)
        //.secondaryColor(0x13414E)
        .iconSet(METALLIC)
        .flags(plates)
        .blastTemp(10800, 'highest', 1966080, 1200)
        .cableProperties(2097152, 3, 32, false)
    
    event.create('protonium')
        .ingot()
        .fluid()
        .element('protonium')
        .color(0x232020).secondaryColor(0xFF0000)
        .secondaryColor(0xFF7F7F)
        .iconSet(RADIOACTIVE)

    event.create('adamantite')
        .ingot()
        .fluid()
        .element('adamantite')
        .color(0xAD0F0D)
        .iconSet(SHINY)
        .flags(plates)
        .blastTemp(10800, 'highest', 1966080, 1200)
    
    event.create('draconium')
        .ingot()
        .fluid()
        .ore(2, 1)
        .color(0x7A42AE)
        .element('draconium')
        .iconSet(DULL)
    
    event.create('awakened_draconium')
        .ingot()
        .fluid()
        .color(0xFF6A00)
        .element('awakened_draconium')
        .iconSet(DULL)

    event.create('radiance')
        .gas()
        .color(0x000000)
        .element('radiance')

    event.create('refined_radiance')
        .ingot()
        .fluid()
        .color(0xF5FAE1)
        .element('radiance')
        .blastTemp(13000, 'higher', 1966080, 2400)
        .iconSet(DULL)

    event.create('shadow_steel')
        .ingot()
        .fluid()
        .color(0x575366)
        .element('shadow_steel')
        .blastTemp(13000, 'higher', 1966080, 2400)
        .iconSet(DULL)

    event.create('void')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.PLASMA, new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
        .color(0x1E1333)
        .element('void')

    event.create('stellar_matter')
        .ingot()
        .fluid()
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.PLASMA, new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
        //.color(0xFFA963)
        .element('stellar_matter')
        .iconSet(STELLAR_MATTER)
        .flags(plates)

    event.create('infinity')
        .ingot()
        .fluid()
        //.color(0xFFFFFF)
        .element('infinity')
        .iconSet(INFINITY)
        .flags(plates)

    event.create('ardite')
        .ingot()
        .fluid()
        .ore(2, 1)
        .color(0xE88317)
        .element('ardite')
        .iconSet(METALLIC)
        .flags(plates)
        .blastTemp(3500, 'mid', 480, 2400)

    event.create('experience')
        .ingot()
        .fluid()
        .color(0x3ED900)
        .element('experience')
        .iconSet(EXPERIENCE)

    event.create('cognitive_amalgam')
        .ingot()
        .fluid()
        .color(0x3B466A)
        .element('cognitium')
        .iconSet(EXPERIENCE)
})