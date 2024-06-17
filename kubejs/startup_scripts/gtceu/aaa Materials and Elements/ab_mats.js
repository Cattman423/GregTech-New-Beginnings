GTCEuStartupEvents.registry('gtceu:material', event => {
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')

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
const INFINITY = GTMaterialIconSet.getByName('infinity')

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

    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty())

    event.create('andesite_alloy')
        .ingot()
        .components('8x andesite', 'zinc')
        .color(0x839689)
        .iconSet(DULL)
        .flags(plates, gear, small_gear, bolt_and_screw, rotor, no_decomp)

    event.create('desh')
        .ingot()
        .ore()
        .color(0xF2A057).secondaryColor(0x2E2F04)
        .element('desh')
        .iconSet(METALLIC)
        .flags(plates, dense_plate, foil)

    event.create('ostrum')
        .ingot()
        .ore()
        .color(0xE5939B).secondaryColor(0x2F0425)
        .element('ostrum')
        .iconSet(METALLIC)
        .flags(plates, dense_plate, foil)

    event.create('calorite')
        .ingot()
        .ore()
        .color(0xE65757).secondaryColor(0x2F0506)
        .element('calorite')
        .iconSet(METALLIC)
        .flags(plates, dense_plate, foil)

    event.create('nitrocellulose')
        .polymer()
        .components('6x carbon', '7x hydrogen', '2x nitrogen_dioxide', '5x oxygen')
        .color(0xffffff)

    event.create('poor_steel')
        .ingot(1)
        .components('iron')
        .color(0x808080)
        .iconSet(DULL)
        .flags(plates, gear, small_gear, bolt_and_screw, long_rod)

    event.create('rose_quartz')
        .gem()
        .fluid()
        .components('8x redstone', '1x flint')
        .color(0xeb4b4b)
        .iconSet(GEM_HORIZONTAL)
        .flags(plates, rod, lens, mortar_grind)

    event.create('redstone_alloy')
        .ingot(1)
        .components('redstone', 'silicon', 'carbon')
        .color(0xAB2B2B)
        .iconSet(METALLIC)
        .flags()
        .blastTemp(1500, 'low', 120, 1200)
        .cableProperties(32, 2, 0, true)

    event.create('enriched_certus')
        .gem()
        .element('enriched_certus')
        .color(0x99bbff)
        .secondaryColor(0x6dacc5)
        .iconSet(CERTUS)
        .flags(lens, no_plate_compressor_craft)

    event.create('mithril')
        .ingot()
        .element('mithril')
        .color(0x95F9F1)
        //.secondaryColor(0x13414E)
        .iconSet(METALLIC)
        .flags(plates)
        .blastTemp(10800, 'highest', 1966080, 1200)
        .cableProperties(2097152, 3, 32, false)

    event.create('prasiolite')
        .dust()
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
        .iconSet(DULL)
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

    event.create('zircon')
        .dust()
        .components('zirconium', 'silicon', '4x oxygen')
        .color(0xfff0e2)
        .iconSet(DULL)
        .flags()
        .ore()
        .oreSmeltInto('zirconium_ingot')

    event.create('lignite')
        .gem()
        .burnTime(1200)
        .components('carbon')
        .color(0x513939)
        .iconSet(LIGNITE)
        .flags(lens)
        .ore(2, 1)

    event.create('bakelite')
        .polymer()
        .components('phenol', 'formaldehyde')
        .color(0x79392F)
        .secondaryColor(0xA16E7F)
        .flags(plates, gear, small_gear, rod, frame)
    
    event.create('protonium')
        .ingot()
        .element('protonium')
        .color(0xFF0000)
        .secondaryColor(0xFF7F7F)
        .iconSet(METALLIC)

    event.create('flux')
        .gem()
        .components('64x redstone', 'obsidian', '6x desh')
        .color(0xCE872B)
        .secondaryColor(0xFF7F7F)
        .iconSet(NETHERSTAR)
        .flags(plates, rod, frame, no_decomp)

    event.create('flux_plated_desh')
        .ingot()
        .components('2x desh', 'flux')
        .color(0xCE872B)
        .iconSet(METALLIC)
        .blastTemp(3300, 'low', 480, 1500)
        .cableProperties(512, 4, 0, true)

    event.create('adamantite')
        .ingot()
        .element('adamantite')
        .color(0xAD0F0D)
        .iconSet(SHINY)
        .flags(plates)
        .blastTemp(10800, 'highest', 1966080, 1200)

    event.create('chadium')
        .ingot()
        .components('carbon', 'hydrogen', 'adamantite')
        .color(0x5A5A5A)
        .iconSet(SHINY)
        .flags(plates)
        .blastTemp(10800, 'highest', 1966080, 1200)

    event.create('wustite')
        .dust()
        .components('iron', 'oxygen')
        .color(0x382C26)

    event.create('netherite_scrap')
        .ingot()
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
        .iconSet(SHINY)
        .components('netherite', '4x gold')
        .color(0x4D494D)
        .blastTemp(3600, 'mid', 1920, 2400)
        .flags(plates, dense_plate, rod, bolt_and_screw)

    event.create('lunite')
        .gem()
        .iconSet(OPAL)
        .components('9x silicon_dioxide', '2x aluminium', '2x wustite')
        .color(0x5695E2)
        .flags(plates, lens)
        .ore(2, 1)

    event.create('ostrite')
        .ore()
        .color(0xC47F71).secondaryColor(0x4F0663)
        .components('3x ostrum', '2x tantalite', '3x wustite', '4x magnesia')
        .iconSet(METALLIC)
    
    event.create('draconium')
        .ingot()
        .color(0x7A42AE)
        .element('draconium')
        .iconSet(DULL)
    
    event.create('awakened_draconium')
        .ingot()
        .color(0xFF6A00)
        .element('awakened_draconium')
        .iconSet(DULL)

    event.create('radiance')
        .gas()
        .color(0x000000)
        .element('radiance')

    event.create('refined_radiance')
        .ingot()
        .color(0xF5FAE1)
        .element('radiance')
        .blastTemp(13000, 'higher', 1966080, 2400)
        .iconSet(DULL)

    event.create('shadow_steel')
        .ingot()
        .color(0x575366)
        .element('shadow_steel')
        .blastTemp(13000, 'higher', 1966080, 2400)
        .iconSet(DULL)

    event.create('ether')
        .gas()
        .color(0x9D50AA)
        .components('2x radiance', '3x protonium')
        .flags(no_decomp)

    event.create('shadow_radiance')
        .ingot()
        .color(0x575366).secondaryColor(0xF5FAE1)
        .components('shadow_steel', 'refined_radiance')
        .blastTemp(13000, 'higher', 1966080, 2400)
        .iconSet(DULL)
        .flags(no_decomp)

    event.create('void')
        .plasma()
        .color(0x1E1333)
        .element('void')

    event.create('void_steel')
        .ingot()
        .color(0x282249)
        .components('3x void', '5x neutronium', '9x radiance')
        .iconSet(METALLIC)
        .flags(no_decomp)

    event.create('stellar_matter')
        .ingot()
        .plasma()
        .color(0xFFA963)
        .element('stellar_matter')

    event.create('infinity')
        .ingot()
        //.color(0xFFFFFF)
        .element('infinity')
        .iconSet(INFINITY)
        .flags(plates)

//Regoliths
    event.create('moon_stone')
        .dust()
        .components('21x silicon_dioxide', '6x bauxite', '5x quicklime', '2x wustite', '2x magnesia', 'rutile')
        .color(0x4A5253)

    event.create('moon_deepslate')
        .dust()
        .components('21x silicon_dioxide', '3x rutile', '2x magnesia', '2x biotite', '2x bauxite', 'quicklime', 'wustite')
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

//Modifications
    //GTMaterials.get('andesite_alloy').addFlags(plates, gear, small_gear, bolt_and_screw, rotor);
    GTMaterials.Aluminium.addFlags(dense_plate)
    GTMaterials.Almandine.addFlags(lens)
    GTMaterials.Amethyst.addFlags(lens)
    GTMaterials.Andradite.addFlags(lens)
    GTMaterials.Apatite.addFlags(lens)
    GTMaterials.BlueTopaz.addFlags(lens)
    GTMaterials.CertusQuartz.addFlags(lens)
    GTMaterials.Cinnabar.addFlags(lens)
    GTMaterials.Coal.addFlags(lens)
    GTMaterials.Coke.addFlags(lens)
    GTMaterials.Copper.addFlags(bolt_and_screw)
    GTMaterials.GarnetRed.addFlags(lens)
    GTMaterials.GarnetYellow.addFlags(lens)
    GTMaterials.Germanium.addFlags(plates, foil, fine_wire)
    GTMaterials.Glass.addFlags(bolt_and_screw)
    GTMaterials.GreenSapphire.addFlags(lens)
    GTMaterials.Grossular.addFlags(lens)
    GTMaterials.Lapis.addFlags(lens)
    GTMaterials.Lazurite.addFlags(lens)
    GTMaterials.Lead.addFlags(round)
    GTMaterials.Malachite.addFlags(lens)
    GTMaterials.Monazite.addFlags(lens)
    GTMaterials.NetherQuartz.addFlags(lens)
    GTMaterials.NickelZincFerrite.addFlags(plates)
    GTMaterials.Obsidian.addFlags(bolt_and_screw)
    GTMaterials.Olivine.addFlags(lens)
    GTMaterials.Opal.addFlags(lens)
    GTMaterials.Pyrope.addFlags(lens)
    GTMaterials.Quartzite.addFlags(lens)
    GTMaterials.RawRubber.addFlags(ring, plates)
    GTMaterials.Realgar.addFlags(lens)
    GTMaterials.RockSalt.addFlags(lens)
    GTMaterials.Rutile.addFlags(lens)
    GTMaterials.Salt.addFlags(lens)
    GTMaterials.Sodalite.addFlags(lens)
    GTMaterials.Spessartine.addFlags(lens)
    GTMaterials.Steel.addFlags(round, dense_plate)
    GTMaterials.Topaz.addFlags(lens)
    GTMaterials.Uvarovite.addFlags(lens)
    GTMaterials.Wood.addFlags(small_gear)
})