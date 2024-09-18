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

//Netherite Line
    event.create('netherite_scrap')
        .ingot()
        .fluid()
        .element('netherite_scrap')
        .color(0x654740)
        .blastTemp(2700, 'low', 480, 1200)

    event.create('impure_netherite_slurry')
        .fluid(/*new FluidBuilder().attribute(FluidAttributes.ACID)*/)
        .color(0x654740)

    event.create('pure_netherite_slurry')
        .fluid(/*new FluidBuilder().attribute(FluidAttributes.ACID)*/)
        .color(0x684824)

    event.create('netherite')
        .dust()
        .iconSet(DULL)
        .element('netherite')
        .color(0x4D494D)

    event.create('netherite_alloy')
        .ingot()
        .fluid()
        .iconSet(SHINY)
        .components('netherite', '4x gold')
        .color(0x4D494D)
        .blastTemp(3600, 'mid', 1920, 2400)
        .flags(plates, dense_plate, rod, bolt_and_screw)

//Materials
    event.create('andesite_alloy')
        .ingot()
        .fluid()
        .components('8x andesite', 'zinc')
        .color(0x839689)
        .iconSet(DULL)
        .flags(plates, gear, small_gear, bolt_and_screw, rotor, no_decomp)

    event.create('nitrocellulose')
        .polymer()
        .components('6x carbon', '7x hydrogen', '2x nitrogen_dioxide', '5x oxygen')
        .color(0xffffff)

    event.create('poor_steel')
        .ingot(1)
        .fluid()
        .components('iron')
        .color(0x808080)
        .iconSet(DULL)
        .flags(plates, gear, small_gear, bolt_and_screw, long_rod, frame)

    event.create('prasiolite')
        .gem()
        .components('5x silicon', '10x oxygen', 'iron')
        .color(0xA8B278)
        .iconSet(FLINT)
        .flags(plates, foil, lens, rod, long_rod)
        .ore()

    event.create('bismuth_tellurite')
        .dust()
        .components('2x bismuth', '3x tellurium')
        .color(0x1A3A1A)
        .flags()

    event.create('cubic_zirconium')
        .gem()
        .components('zirconium', '2x oxygen')
        .color(0xC8FFFF)
        .iconSet(DIAMOND)
        .flags(lens)

    event.create('magneto_resonatic')
        .gem()
        .components('3x prasiolite', '4x bismuth_tellurite', 'cubic_zirconium', 'magnetic_steel')
        .color(0xD472D4)
        .iconSet(MAGNETIC)
        .flags(lens, magnetic, no_plate_compressor_craft)

    event.create('dibismuthhydroborat')
        .dust()
        .components('2x bismuth', 'boron', 'hydrogen')
        .color(0x3C773C)
        .flags()

    event.create('circuit_compound_mk_three')
        .dust()
        .components('indium_gallium_phosphide', '3x dibismuthhydroborat', '2x bismuth_tellurite')
        .color(0x1E1E1E)
        .flags()

    event.create('indalloy_140')
        .ingot()
        .fluid()
        .components('47x bismuth', '25x lead', '13x tin', '10x cadmium', '5x indium')
        .color(0x725777)
        .iconSet(DULL)
        .blastTemp(3000, 'mid', 7680, 800)
        .flags(solder_mat_good)

    event.create('bakelite')
        .polymer()
        .components('phenol', 'formaldehyde')
        .color(0x79392F)
        .secondaryColor(0xA16E7F)
        .flags(plates, gear, small_gear, rod, frame)

    event.create('flux')
        .gem()
        .components('64x redstone', 'obsidian', '6x desh')
        .color(0xCE872B)
        .secondaryColor(0xFF7F7F)
        .iconSet(NETHERSTAR)
        .flags(plates, rod, frame, no_decomp)

    event.create('flux_plated_desh')
        .ingot()
        .fluid()
        .components('2x desh', 'flux')
        .color(0xCE872B)
        .iconSet(METALLIC)
        .blastTemp(3300, 'low', 480, 1500)
        .cableProperties(512, 4, 0, true)

    event.create('chadium')
        .ingot()
        .fluid()
        .components('carbon', 'hydrogen', 'adamantite')
        .color(0x5A5A5A)
        .iconSet(SHINY)
        .flags(plates)
        .blastTemp(10800, 'highest', 1966080, 1200)

    event.create('ether')
        .gas()
        .color(0x9D50AA)
        .components('2x radiance', '3x protonium')
        .flags(no_decomp)

    event.create('shadow_radiance')
        .ingot()
        .fluid()
        .color(0x575366).secondaryColor(0xF5FAE1)
        .components('shadow_steel', 'refined_radiance')
        .blastTemp(13000, 'higher', 1966080, 2400)
        .iconSet(DULL)
        .flags(no_decomp)

    event.create('void_steel')
        .ingot()
        .fluid()
        .color(0x282249)
        .components('3x void', '5x neutronium', '9x radiance')
        .iconSet(METALLIC)
        .flags(no_decomp, plates)

    event.create('gunmetal')
        .ingot()
        .fluid()
        .color(0x575366)
        .components('5x iron', 'copper')
        .iconSet(METALLIC)
        .flags(small_spring, bolt_and_screw, small_gear, plates)

    event.create('manyullyn')
        .ingot()
        .fluid()
        .color(0x9261CC)
        .components('cobalt', 'ardite')
        .iconSet(METALLIC)
        .flags(no_decomp, plates)
        .toolStats(ToolProperty.Builder.of(9.0, 7.0, 2048, 4).enchantability(14).build())
        .blastTemp(4500, 'high', 7680, 2400)

    event.create('nethersteel')
        .ingot()
        .fluid()
        .color(0x473136)
        .iconSet(METALLIC)
        .components('netherite', '4x steel')
        .blastTemp(2000, 'mid', 480, 2400)

    event.create('argent_gunmetal')
        .ingot()
        .fluid()
        .color(0x683440)
        .components('gunmetal', '3x blaze')
        .iconSet(METALLIC)

    event.create('copper_sulfate')
        .dust()
        .color(0x238BDE)
        .components('copper', 'sulfur', '4x oxygen')

    event.create('zinc_sulfate')
        .dust()
        .color(0xCACACA)
        .components('zinc', 'sulfur', '4x oxygen')

    event.create('wohler_aluminium')
        .ingot()
        .fluid()
        .color(0xD3D7D7)
        .components('aluminium')
        .flags(no_decomp, no_smelt, rod, plates, foil, frame, gear, small_gear)

    event.create('aluminium_trichloride')
        .dust()
        .color(0xEBEFEE)
        .components('aluminium', '3x chlorine')

    event.create('sodium_oxide')
        .dust()
        .color(0xFAFAFA)
        .iconSet(FINE)
        .components('2x sodium', 'oxygen')

    event.create('al_6xn')
        .ingot(3)
        .fluid()
        .color(0x2c9124)
        .iconSet(METALLIC)
        .components('4x nickel', '3x chromium', 'molybdenum')
        .blastTemp(3000, 'mid', 1920, 6000)
        .flags(rod, plates, frame)

    event.create('cognitive_flux')
        .dust()
        .color(0x3B466A)
        .iconSet(EXPERIENCE)
        .components('nether_quartz', 'lapis', 'quartz_sand')
        .flags(no_decomp)

    event.create('cognitive_alloy')
        .ingot()
        .fluid()
        .color(0x3B466A).secondaryColor(0x202430)
        .iconSet(EXPERIENCE)
        .components('4x copper', 'cognitive_amalgam')
        .blastTemp(1200, 'low', 120, 2400)
        .flags(no_decomp, plates)

    event.create('cognitive_crystal')
        .gem()
        .color(0x44EE46)
        .iconSet(EXPERIENCE)
        .components('emerald', '4x cognitive_amalgam')
        .flags(no_decomp, lens)

    event.create('fluix')
        .gem()
        .color(0x9544FF)
        .iconSet(CERTUS)
        .components('redstone', 'nether_quartz', 'charged_certus')
        .flags(lens)

//NuclearCraft
    event.create('manganese_oxide')
        .ingot()
        .fluid()
        .color(0x7A9779)
        .iconSet(DULL)
        .components('manganese', 'oxygen')

    event.create('niobium_tin')
        .ingot()
        .fluid()
        .color(0xE7E7E8)
        .iconSet(DULL)
        .blastTemp(2130, 'low', 480, 2400)
        .components('3x niobium', 'tin')

    event.create('zircaloy')
        .ingot()
        .fluid()
        .color(0xE3E3E7)
        .iconSet(METALLIC)
        .blastTemp(2690, 'low', 480, 2400)
        .components('19x zirconium', 'hafnium')

    event.create('silicon_carbide')
        .ingot()
        .fluid()
        .color(0x6C695E)
        .iconSet(DULL)
        .blastTemp(3100, 'low', 480, 2400)
        .components('silicon', 'carbon')

    event.create('pyrolytic_carbon')
        .ingot()
        .fluid()
        .color(0x343434)
        .iconSet(DULL)
        .components('carbon')

    event.create('ferroboron')
        .ingot()
        .fluid()
        .color(0x6D6D6D)
        .iconSet(METALLIC)
        .components('boron', '4x steel')
        .flags(plates, no_smelt)

    event.create('tough_alloy')
        .ingot()
        .fluid()
        .color(0x181322)
        .iconSet(METALLIC)
        .blastTemp(2500, 'low', 480, 2400)
        .components('ferroboron', 'lithium')
        .flags(plates, rod, bolt_and_screw, frame)

    event.create('hard_carbon')
        .ingot()
        .fluid()
        .color(0x21746F)
        .iconSet(DULL)
        .components('2x carbon')
        .flags(plates, no_decomp)

    event.create('extreme')
        .ingot()
        .fluid()
        .color(0x452C55)
        .iconSet(DULL)
        .components('hard_carbon', 'tough_alloy')
        .blastTemp(3800, 'mid', 1920, 2400)
        .flags(plates, rod, frame)

    event.create('lithium_manganese_dioxide')
        .ingot()
        .fluid()
        .color(0x6C6C6C)
        .iconSet(DULL)
        .components('lithium', 'manganese', '2x oxygen')
        .flags(plates)

    event.create('boron_arsenide')
        .gem()
        .color(0xA7A793)
        .iconSet(CERTUS)
        .components('boron', 'arsenic')
        .flags(lens)

    event.create('thermoconducting')
        .ingot()
        .fluid()
        .color(0x73815E)
        .iconSet(SHINY)
        .components('extreme', 'boron_arsenide')
        .blastTemp(3800, 'mid', 1920, 2400)
        .flags(plates)

    event.create('boron_nitride')
        .gem()
        .color(0x89AA84)
        .iconSet(RUBY)
        .components('boron', 'nitrogen')
        .flags(lens)

    event.create('bscco')
        .ingot()
        .fluid()
        .color(0x6F6363)
        .iconSet(SHINY)
        .blastTemp(3900, 'high', 1920, 2400)
        .components('2x bismuth', '2x strontium', 'calcium', '2x copper', '8x oxygen')

    event.create('crystal_binder')
        .dust()
        .color(0x962037)
        .iconSet(METALLIC)
        .components('rhodochrosite', 'magnesium', 'gypsum', 'obsidian')

    event.create('dimensional_blend')
        .dust()
        .color(0x88777B)
        .iconSet(METALLIC)
        .components('ender_pearl', 'emerald', 'lapis')

    event.create('cryotheum')
        .dust()
        .fluid()
        .color(0x56F6FF)
        .iconSet(FLUID)
        .components('saltpeter', 'ice', 'redstone')
        .flags(no_decomp)

//Ender IO
    event.create('copper_alloy')
        .ingot()
        .fluid()
        .color(0xB87D07)
        .iconSet(METALLIC)
        .components('copper', 'silicon')
        .blastTemp(1000, 'low', 120, 1200)

    event.create('energetic_alloy')
        .ingot()
        .fluid()
        .color(0xEEB93E)
        .iconSet(METALLIC)
        .components('redstone', 'gold', 'glowstone')
        .blastTemp(2200, 'low', 120, 1600)

    event.create('vibrant_alloy')
        .ingot()
        .fluid()
        .color(0xE9FE77)
        .iconSet(METALLIC)
        .components('energetic_alloy', 'ender_pearl')
        .blastTemp(3000, 'low', 120, 3000)

    event.create('redstone_alloy')
        .ingot(1)
        .fluid()
        .components('redstone', 'silicon', 'carbon')
        .color(0xAB2B2B)
        .iconSet(METALLIC)
        .flags()
        .blastTemp(1500, 'low', 120, 1200)
        .cableProperties(32, 2, 0, true)

    event.create('conductive_alloy')
        .ingot()
        .fluid()
        .color(0xC79390)
        .iconSet(METALLIC)
        .components('copper_alloy', 'iron', 'redstone')
        .blastTemp(1200, 'low', 120, 1200)

    event.create('pulsating_alloy')
        .ingot()
        .fluid()
        .color(0x70D486)
        .iconSet(METALLIC)
        .components('ender_pearl', 'iron')
        .blastTemp(1800, 'low', 120, 1600)

    event.create('dark_steel')
        .ingot()
        .fluid()
        .color(0x777777)
        .iconSet(METALLIC)
        .components('steel', 'carbon', 'obsidian')
        .blastTemp(1800, 'low', 120, 1000)

    event.create('soularium')
        .ingot()
        .fluid()
        .color(0x6D5B35)
        .iconSet(METALLIC)
        //.components()
        .blastTemp(1000, 'mid', 120, 1000)

    event.create('end_steel')
        .ingot()
        .fluid()
        .color(0xC0B969)
        .iconSet(METALLIC)
        .components('endstone', 'dark_steel', 'obsidian')
        .blastTemp(4500, 'mid', 1920, 1200)

    event.create('conduit_binder_composite')
        .dust()
        .color(0x968167)
        .components('2x clay', '5x flint', '2x quartz_sand')

//Regoliths
    event.create('moon_stone')
        .dust()
        .components('21x silicon_dioxide', '6x bauxite', '5x quicklime', '2x wustite', '2x magnesia', 'rutile')
        .color(0x4A5253)

    event.create('moon_deepslate')
        .dust()
        .components('21x silicon_dioxide', '3x rutile', '2x magnesia', '2x biotite', '2x bauxite', 'wustite')
        .color(0x4A5253)

    event.create('mars_stone')
        .dust()
        .components('25x silicon_dioxide', '10x wustite', '5x bauxite', '4x magnesia', '3x sulfur_trioxide', '3x quicklime')
        .color(0xC17A51)
    
    event.create('mercury_stone')
        .dust()
        .components('30x silicon_dioxide', '2x bauxite', '16x magnesia')
        .color(0x55313F)

    event.create('venus_stone')
        .dust()
        .components('30x silicon_dioxide', '2x bauxite', '16x magnesia')
        .color(0xB88143)

//Atmospheres
    event.create('moon_air')
        .gas()
        .components('25x hydrogen', '13x neon', '10x argon')
        .color(0x4A5253)
        .flags(no_decomp)
        
    event.create('liquid_moon_air')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(97))
        .components('49x hydrogen', '26x neon', '20x argon', '3x ammonia', 'neon')
        .color(0x4A5253)
        .flags(no_decomp)

    event.create('mars_air')
        .gas()
        .components('45x carbon_dioxide', '2x nitrogen', 'argon')
        .color(0xC17A51)
        .flags(no_decomp)

    event.create('liquid_mars_air')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(97))
        //.components('92x carbon_dioxide', '3x nitrogen', '2x argon', 'krypton', 'xenon')
        .color(0xC17A51)
        .flags(no_decomp)

    event.create('mercury_air')
        .gas()
        .components('5x hydrogen', 'helium', '2x oxygen', 'sodium')
        .color(0x55313F)
        .flags(no_decomp)
        
    event.create('liquid_mercury_air')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(97))
        //.components('51x hydrogen', '12x helium', '19x oxygen', '10x sodium', '6x magneseium', '2x potassium')
        .color(0x55313F)
        .flags(no_decomp)

    event.create('venus_air')
        .gas()
        .components('24x carbon_dioxide', 'nitrogen')
        .color(0xB88143)
        .flags(no_decomp)

    event.create('liquid_venus_air')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(97))
        //.components('91x carbon_dioxide', '4x nitrogen', '2x sulfur_dioxide', 'argon')
        .color(0xB88143)
        .flags(no_decomp)

//Mantles
    event.create('molten_moon_mantle')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1500))
        //.components('49x hydrogen', '26x neon', '20x argon', '3x ammonia', 'neon')
        .color(0x4A5253)

    event.create('molten_mars_mantle')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1500))
        //.components('92x carbon_dioxide', '3x nitrogen', '2x argon', 'krypton', 'xenon')
        .color(0xC17A51)
        
    event.create('molten_mercury_mantle')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1500))
        //.components('51x hydrogen', '12x helium', '19x oxygen', '10x sodium', '6x magneseium', '2x potassium')
        .color(0x55313F)

    event.create('molten_venus_mantle')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)']
        (GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1500))
        //.components('91x carbon_dioxide', '4x nitrogen', '2x sulfur_dioxide', 'argon')
        .color(0xB88143)
})
