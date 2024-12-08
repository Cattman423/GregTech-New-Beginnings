GTCEuStartupEvents.registry('gtceu:material', event => {
    const INFINITY = GTMaterialIconSet.getByName('infinity');
    const STELLAR_MATTER = GTMaterialIconSet.getByName('stellar_matter');
    const SUB_ATOMIC = GTMaterialIconSet.getByName('sub_atomic');
    const EXPERIENCE = GTMaterialIconSet.getByName('experience');
    const ANTIMATTER = GTMaterialIconSet.getByName('antimatter');

//Element Materials
    event.create('antihydrogen')
        .gas()
        .color(0x0000B5)
        .element('antihydrogen')
        .iconSet(ANTIMATTER)
        
    event.create('anticarbon')
        .dust()
        .fluid()
        .color(0x333030).secondaryColor(0x221c1c)
        .element('anticarbon')
        .iconSet(ANTIMATTER)
        
    event.create('antioxygen')
        .gas()
        .color(0x6688DD)
        .element('antioxygen')
        .iconSet(ANTIMATTER)
        
    event.create('antimanganese')
        .ingot()
        .fluid()
        .color(0x88a669).secondaryColor(0xCDE1B9)
        .element('antimanganese')
        .iconSet(ANTIMATTER)
        
    event.create('antiiron')
        .ingot()
        .fluid()
        .color(0xeeeeee).secondaryColor(0x979797)
        .element('antiiron')
        .iconSet(ANTIMATTER)
        
    event.create('anticobalt')
        .ingot()
        .fluid()
        .color(0x5050FA).secondaryColor(0x2d2d7a)
        .element('anticobalt')
        .iconSet(ANTIMATTER)
        
    event.create('anticopper')
        .ingot()
        .fluid()
        .color(0xe77c56).secondaryColor(0xe4673e)
        .element('anticopper')
        .iconSet(ANTIMATTER)
        
    event.create('antiarsenic')
        .ingot()
        .fluid()
        .color(0x9c9c8d).secondaryColor(0x676756)
        .element('antiarsenic')
        .iconSet(ANTIMATTER)
        
    event.create('antisilver')
        .ingot()
        .fluid()
        .color(0xDCDCFF).secondaryColor(0x5a4705)
        .element('antisilver')
        .iconSet(ANTIMATTER)
        
    event.create('antitin')
        .ingot()
        .fluid()
        .color(0xfafeff).secondaryColor(0x4e676c)
        .element('antitin')
        .iconSet(ANTIMATTER)
        
    event.create('antiantimony')
        .ingot()
        .fluid()
        .color(0xeaeaff).secondaryColor(0x8181bd)
        .element('antiantimony')
        .iconSet(ANTIMATTER)
        
    event.create('antigold')
        .ingot()
        .fluid()
        .color(0xfdf55f).secondaryColor(0xf25833)
        .element('antigold')
        .iconSet(ANTIMATTER)
        
    event.create('antimercury')
        .fluid()
        .color(0xE6DCDC)
        .element('antimercury')
        .iconSet(ANTIMATTER)
        
    event.create('antilead')
        .ingot()
        .fluid()
        .color(0x7e6f82).secondaryColor(0x290633)
        .element('antilead')
        .iconSet(ANTIMATTER)
        
    event.create('antibismuth')
        .ingot()
        .fluid()
        .color(0x5fdddd).secondaryColor(0x517385)
        .element('antibismuth')
        .iconSet(ANTIMATTER)
})