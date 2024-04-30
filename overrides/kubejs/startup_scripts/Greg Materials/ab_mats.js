GTCEuStartupEvents.registry('gtceu:material', event => {
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty');
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty')

    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Zirconium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Holmium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Germanium.setProperty(PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Tellurium.setProperty(PropertyKey.DUST, new $DustProperty())
    GTMaterials.Zinc.setProperty(PropertyKey.ORE, new $OreProperty())

    event.create('nitrocellulose')
        .polymer()
        .components('6x carbon', '7x hydrogen', '2x nitrogen_dioxide', '5x oxygen')
        .color(0xffffff)

    event.create('barium_nitride')
        .dust()
        .components('3x barium', '2x nitrogen')
        .color(0xffffff)

    event.create('lead_styphnate')
        .dust()
        .components('6x carbon', 'hydrogen', '3x nitrogen', '8x oxygen', 'lead')
        .color(0xffffff)

    event.create('poor_steel')
        .ingot(1)
        .components('iron')
        .color(0x808080)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_LONG_ROD
        )

    event.create('rose_quartz')
        .gem()
        .fluid()
        .components('8x redstone', '1x flint')
        .color(0xeb4b4b)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.MORTAR_GRINDABLE
        )

    event.create('redstone_alloy')
        .ingot(1)
        .components('redstone', 'silicon', 'carbon')
        .color(0xAB2B2B)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags()
        .blastTemp(1500, 'low', 120, 1200)
        .cableProperties(32, 2, 0, true)

    event.create('enriched_certus')
        .gem()
        .element('enriched_certus')
        .color(0x99bbff)
        .secondaryColor(0x6dacc5)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE
        )

    event.create('mithril')
        .ingot()
        .element('mithril')
        .color(0x95F9F1)
        //.secondaryColor(0x13414E)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE
        )
        .blastTemp(10800, 'highest', 1966080, 1200)
        .cableProperties(2097152, 3, 32, false)

    event.create('prasiolite')
        .dust()
        .components('5x silicon', '10x oxygen', 'iron')
        .color(0xA8B278)
        .iconSet(GTMaterialIconSet.FLINT)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_LONG_ROD
        )
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
        .iconSet(GTMaterialIconSet.DIAMOND)
        .flags(
            GTMaterialFlags.GENERATE_LENS
        )

    event.create('magneto_resonatic')
        .gem()
        .components('3x prasiolite', '4x bismuth_tellurite', 'cubic_zirconium', 'magnetic_steel')
        .color(0xD472D4)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_LENS,
            GTMaterialFlags.IS_MAGNETIC,
            GTMaterialFlags.EXCLUDE_PLATE_COMPRESSOR_RECIPE
        )

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
        .iconSet(GTMaterialIconSet.DULL)
        .blastTemp(3000, 'mid', 7680, 800)
        .flags(
            GTMaterialFlags.SOLDER_MATERIAL_GOOD
        )

    event.create('zircon')
        .dust()
        .components('zirconium', 'silicon', '4x oxygen')
        .color(0xfff0e2)
        .iconSet(GTMaterialIconSet.DULL)
        .flags()
        .ore()
        .oreSmeltInto('zirconium_ingot')

    event.create('lignite')
        .gem()
        .burnTime(1200)
        .components('carbon')
        .color(0x513939)
        .iconSet(GTMaterialIconSet.LIGNITE)
        .flags(
            GTMaterialFlags.GENERATE_LENS
        )
        .ore(2, 1)

    event.create('formaldehyde')
        .gas()
        .components('carbon', '2x hydrogen', 'oxygen')
        .color(0xffffff)

    event.create('bakelite')
        .polymer()
        .components('phenol', 'formaldehyde')
        .color(0x79392F)
        .secondaryColor(0xA16E7F)
    
    event.create('protonium')
        .ingot()
        .element('protonium')
        .color(0xFF0000)
        .secondaryColor(0xFF7F7F)
        .iconSet(GTMaterialIconSet.METALLIC)

    event.create('flux')
        .gem()
        .components('64x redstone', 'obsidian', '6x desh')
        .color(0xCE872B)
        .secondaryColor(0xFF7F7F)
        .iconSet(GTMaterialIconSet.NETHERSTAR)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.DISABLE_DECOMPOSITION
        )

    event.create('flux_plated_desh')
        .ingot()
        .components('2x desh', 'flux')
        .color(0xCE872B)
        .iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(3300, 'low', 480, 1500)
        .cableProperties(512, 4, 0, true)

    GTMaterials.get('andesite_alloy').addFlags(
        GTMaterialFlags.GENERATE_PLATE, 
        GTMaterialFlags.GENERATE_GEAR, 
        GTMaterialFlags.GENERATE_SMALL_GEAR, 
        GTMaterialFlags.GENERATE_BOLT_SCREW, 
        GTMaterialFlags.GENERATE_ROTOR
    );
    GTMaterials.Wood.addFlags(
        GTMaterialFlags.GENERATE_SMALL_GEAR
    );
    GTMaterials.RawRubber.addFlags(
        GTMaterialFlags.GENERATE_RING, 
        GTMaterialFlags.GENERATE_PLATE
    );
    GTMaterials.Obsidian.addFlags(
        GTMaterialFlags.GENERATE_BOLT_SCREW
    );
    GTMaterials.Copper.addFlags(
        GTMaterialFlags.GENERATE_BOLT_SCREW
    );
    GTMaterials.Glass.addFlags(
        GTMaterialFlags.GENERATE_BOLT_SCREW
    );
    GTMaterials.Almandine.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Andradite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.BlueTopaz.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Cinnabar.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Coal.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.GreenSapphire.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Grossular.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Rutile.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Lazurite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Pyrope.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.RockSalt.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Salt.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Sodalite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Coke.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Spessartine.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Topaz.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Uvarovite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.NetherQuartz.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.CertusQuartz.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Quartzite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Realgar.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Malachite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Olivine.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Opal.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Amethyst.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Lapis.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Apatite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.GarnetRed.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.GarnetYellow.addFlags(
        GTMaterialFlags.GENERATE_LENS
    );
    GTMaterials.Monazite.addFlags(
        GTMaterialFlags.GENERATE_LENS
    )
    GTMaterials.Germanium.addFlags(
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_FINE_WIRE
    )
    GTMaterials.NickelZincFerrite.addFlags(
        GTMaterialFlags.GENERATE_PLATE
    )
})