GTCEuStartupEvents.registry('gtceu:material', event => {

    event.create('nitrocellulose')
        .polymer()
        .components('6x carbon', '7x hydrogen', '2x nitrogen_dioxide', '5x oxygen')
        .color(0xffffff)
        .iconSet(GTMaterialIconSet.FLINT)

    event.create('barium_nitride')
        .dust()
        .components('3x barium', '2x nitrogen')
        .color(0xffffff)
        .iconSet(GTMaterialIconSet.FLINT)

    event.create('lead_styphnate')
        .dust()
        .components('6x carbon', 'hydrogen', '3x nitrogen', '8x oxygen', 'lead')
        .color(0xffffff)
        .iconSet(GTMaterialIconSet.FLINT)

    event.create('poor_steel')
        .ingot(1)
        .components('iron')
        .color(0x808080)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW
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
        .cableProperties(32, 1, 0, true)

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
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')

    GTMaterials.Obsidian.setProperty(PropertyKey.INGOT, new $IngotProperty())
})