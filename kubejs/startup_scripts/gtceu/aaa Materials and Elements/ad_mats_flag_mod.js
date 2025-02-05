GTCEuStartupEvents.registry('gtceu:material', event => {

const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty');
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder'); 
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');
const $WireProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties');
const GCYRMaterials = Java.loadClass("argent_matter.gcyr.common.data.GCYRMaterials")

//Ingots
    GTMaterials.Boron.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Calcium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Graphite.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Hafnium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Lithium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Magnesium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Potassium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Sodium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Strontium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty())

//Dusts
    GTMaterials.Berkelium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Californium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Curium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Gadolinium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Neptunium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Polonium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Promethium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Radium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Thallium.setProperty(PropertyKey.DUST, new $DustProperty())

//Ore
    GTMaterials.Antimony.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Arsenic.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Biotite.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Bismuth.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Borax.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Chromium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Iridium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.NaquadahEnriched.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Perlite.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Rutile.setProperty(PropertyKey.ORE, new $OreProperty())
    //GTMaterials.Titanium.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Uvarovite.setProperty(PropertyKey.ORE, new $OreProperty())
    GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty())

//Gems
    GTMaterials.Lepidolite.setProperty(PropertyKey.GEM, new $GemProperty())

//Wires
    GTMaterials.HSSS.setProperty(PropertyKey.WIRE, new $WireProperty(GTValues.V[GTValues.UHV], 12, 4, false))
    GTMaterials.get('infinity').setProperty(PropertyKey.WIRE, new $WireProperty(GTValues.V[GTValues.MAX], 1000000, 0, true))

//Fluids
    let addFluid = (mat, key) => { 
        let prop = new $FluidProperty(); prop.getStorage().enqueueRegistration(key, new $FluidBuilder()); mat.setProperty(PropertyKey.FLUID, prop); 
    }

    addFluid(GTMaterials.Boron, $FluidStorageKeys.LIQUID); // Can be LIQUID, GAS, PLASMA or MOLTEN addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS); }
    //addFluid(GTMaterials.Calcium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Germanium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Graphite, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Hafnium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Holmium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Obsidian, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Sodium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Strontium, $FluidStorageKeys.LIQUID);
    addFluid(GTMaterials.Zirconium, $FluidStorageKeys.LIQUID);

    //addFluid(GTMaterials.Oganesson, $FluidStorageKeys.PLASMA);
    
    //GTMaterials..setProperty(PropertyKey.DUST, new $DustProperty())
    
//Flags
    GTMaterials.get('andesite_alloy').addFlags(plates, gear, small_gear, bolt_and_screw, rotor, no_decomp)
    GTMaterials.get('arcane_crystal').addFlags(lens)
    GTMaterials.get('infinity').addFlags(plates, rod, bolt_and_screw)

    GCYRMaterials.Fluorite.addFlags(lens)

    GTMaterials.get('gtca:fayalite').addFlags(lens)
    GTMaterials.get('gtca:green_fuchsite').addFlags(lens)
    GTMaterials.get('gtca:red_fuchsite').addFlags(lens)
    GTMaterials.get('gtca:red_zircon').addFlags(lens)

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
    GTMaterials.EchoShard.addFlags(lens)
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
    GTMaterials.Lepidolite.addFlags(lens)
    GTMaterials.Lithium.addFlags(plates)
    GTMaterials.Malachite.addFlags(lens)
    GTMaterials.Monazite.addFlags(lens)
    GTMaterials.NetherQuartz.addFlags(lens)
    GTMaterials.Nickel.addFlags(rod, frame)
    GTMaterials.NickelZincFerrite.addFlags(plates)
    GTMaterials.Obsidian.addFlags(bolt_and_screw, no_smelt)
    GTMaterials.Olivine.addFlags(lens)
    GTMaterials.Opal.addFlags(lens)
    GTMaterials.Pyrope.addFlags(lens)
    GTMaterials.Quartzite.addFlags(lens)
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