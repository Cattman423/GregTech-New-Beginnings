GTCEuStartupEvents.registry('gtceu:material', event => {

const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder'); 
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
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

    GTMaterials.Berkelium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Boron.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Calcium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Californium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Curium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Gadolinium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Graphite.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Hafnium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Lithium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Magnesium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Neptunium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Polonium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Potassium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Promethium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Radium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Sodium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    //GTMaterials.Strontium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Strontium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Thallium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty())

    let addFluid = (mat, key) => { 
        let prop = new $FluidProperty(); prop.getStorage().enqueueRegistration(key, new $FluidBuilder()); mat.setProperty(PropertyKey.FLUID, prop); 
    }

    addFluid(GTMaterials.Boron, $FluidStorageKeys.LIQUID); // Can be LIQUID, GAS, PLASMA or MOLTEN addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS); }
    addFluid(GTMaterials.Calcium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Germanium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Graphite, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Hafnium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Holmium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Obsidian, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Sodium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Strontium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Zirconium, $FluidStorageKeys.LIQUID);
    
    //GTMaterials..setProperty(PropertyKey.DUST, new $DustProperty())
    
//Modifications
    GTMaterials.Aluminium.addFlags(dense_plate)
    GTMaterials.Almandine.addFlags(lens)
    GTMaterials.Amethyst.addFlags(lens)
    GTMaterials.Andradite.addFlags(lens)
    GTMaterials.Apatite.addFlags(lens)
    GTMaterials.BlueTopaz.addFlags(lens)
    GTMaterials.Brass.addFlags(small_gear, frame)
    GTMaterials.CertusQuartz.addFlags(lens)
    GTMaterials.Cinnabar.addFlags(lens)
    GTMaterials.Coal.addFlags(lens)
    GTMaterials.Coke.addFlags(lens)
    GTMaterials.Copper.addFlags(bolt_and_screw, small_gear, frame)
    GTMaterials.GarnetRed.addFlags(lens)
    GTMaterials.GarnetYellow.addFlags(lens)
    GTMaterials.Germanium.addFlags(plates, foil, fine_wire)
    GTMaterials.Glass.addFlags(bolt_and_screw)
    GTMaterials.Graphite.addFlags(plates)
    GTMaterials.GreenSapphire.addFlags(lens)
    GTMaterials.Grossular.addFlags(lens)
    GTMaterials.Lapis.addFlags(lens)
    GTMaterials.Lazurite.addFlags(lens)
    GTMaterials.Lead.addFlags(round, frame)
    GTMaterials.Lithium.addFlags(plates)
    GTMaterials.Malachite.addFlags(lens)
    GTMaterials.Monazite.addFlags(lens)
    GTMaterials.NetherQuartz.addFlags(lens)
    GTMaterials.Nickel.addFlags(rod, frame)
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
    GTMaterials.Zinc.addFlags(frame)
})