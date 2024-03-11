GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('andesite_alloy')
        .ingot(1)
        .components('9x andesite', '1x zinc')
        .color(0x839689)
        .iconSet(GTMaterialIconSet.DULL)
        .rotorStats(4, 2, 100)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_SMALL_GEAR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW, 
            GTMaterialFlags.GENERATE_ROTOR
        )

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
            GTMaterialFlags.GENERATE_LENS
        )

    event.create('redstone_alloy')
        .ingot(1)
        .components('redstone', 'silicon', 'carbon')
        .color(0xAB2B2B)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags()
        .blastTemp(1500, 'low', 120, 1200)
        .cableProperties(32, 1, 0, true)

    event.create('desh')
        .ingot(1)
        .element('desh')
        .color(0xC77142)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
        )
        .blastTemp(1800, 'low', 480, 2400)
        .cableProperties(128, 2, 0, true)

    event.create('ostrum')
        .ingot(1)
        .element('ostrum')
        .color(0x925E64)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
        )
        .blastTemp(2700, 'mid', 1920, 2400)

    event.create('calorite')
        .ingot(1)
        .element('calorite')
        .color(0xB83145)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
        )
        .blastTemp(3600, 'mid', 7680, 2400)

    event.create('ice_shard')
        .gem()
        .components('2x hydrogen', 'oxygen')
        .color(0x98BAD6)
        .iconSet(GTMaterialIconSet.GLASS)
        .flags()


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
})