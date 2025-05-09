GTCEuStartupEvents.registry('gtceu:material', event => {
    const INFINITY = GTMaterialIconSet.getByName('infinity');
    const STELLAR_MATTER = GTMaterialIconSet.getByName('stellar_matter');
    const SUB_ATOMIC = GTMaterialIconSet.getByName('sub_atomic');
    const EXPERIENCE = GTMaterialIconSet.getByName('experience');
    const RADIOISOTOPE = GTMaterialIconSet.getByName('radioisotope')

    event.create('ruthenium_106')
        .ingot(3)
        .fluid()
        .color(0xa2cde0).secondaryColor(0x458296)
        .element('ruthenium_106')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('europium_155')
        .ingot(3)
        .fluid()
        .color(0x20FFFF).secondaryColor(0x3FAAA8)
        .element('europium_155')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('caesium_137')
        .ingot(3)
        .fluid()
        .color(0xD19F1C).secondaryColor(0x231f14)
        .element('caesium_137')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('curium_243')
        .ingot(3)
        .fluid()
        .color(0x6D423F)
        .element('curium_243')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('curium_245')
        .ingot(3)
        .fluid()
        .color(0x875F4E)
        .element('curium_245')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('curium_246')
        .ingot(3)
        .fluid()
        .color(0x895D55)
        .element('curium_246')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('americium_241')
        .ingot(3)
        .fluid()
        .color(0x287869)
        .element('americium_241')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('americium_242')
        .ingot(3)
        .fluid()
        .color(0x287869)
        .element('americium_242')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('californium_249')
        .ingot(3)
        .fluid()
        .color(0xA85A12)
        .element('californium_249')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('californium_250')
        .ingot(3)
        .fluid()
        .color(0xA85A12)
        .element('californium_250')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('californium_252')
        .ingot(3)
        .fluid()
        .color(0xA85A12)
        .element('californium_252')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('berkelium_248')
        .ingot(3)
        .fluid()
        .color(0x645A88)
        .element('berkelium_248')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

        
    event.create('strontium_90')
        .ingot(3)
        .fluid()
        .color(0x7a7953).secondaryColor(0x4c0b06)
        .element('strontium_90')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('uranium_233')
        .ingot(3)
        .fluid()
        .color(0x46FA46).secondaryColor(0x33342c)
        .element('uranium_233')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('plutonium_238')
        .ingot(3)
        .fluid()
        .color(0xba2727).secondaryColor(0x222730)
        .element('plutonium_238')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('plutonium_242')
        .ingot(3)
        .fluid()
        .color(0xff4c4c).secondaryColor(0x222730)
        .element('plutonium_242')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)


    event.create('neptunium_236')
        .ingot(3)
        .fluid()
        .color(0x284D7B)
        .element('neptunium_236')
        .iconSet(RADIOISOTOPE)
        .radioactiveHazard(1)

    event.create('lithium_6')
        .ingot(3)
        .fluid()
        .color(0xd7e7ee).secondaryColor(0xBDC7DB)
        .element('lithium_6')
})