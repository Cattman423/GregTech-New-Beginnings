StartupEvents.registry('fluid', event => {
    const metalmelt = ['red_alloy', 'wrought_iron', 'lead', 'nickel', 'bronze', 'silver', 'brass', 'steel', 'antimony', 'invar', 'tin', 'zinc', 'annealed_copper', 'electrum', 
        'poor_steel', 'tin_alloy', 'cupronickel', 'blue_alloy', 'raw_rubber', 'rubber']
    metalmelt.forEach( (base) => {
        event.create(base)
            .thickTexture(0xFF5F32)
            .noBlock()
    })
    event.create('iron')
        .thickTexture(0xFF5F32)
        .noBlock()
    event.create('copper')
        .thickTexture(0xFF5F32)
        .noBlock()
    event.create('gold')
        .thickTexture(0xFF5F32)
        .noBlock()
    event.create('gunmetal')
        .thickTexture(0xFF5F32)
        .noBlock()
    event.create('glass')
        .thickTexture(0xFF5F32)
        .noBlock()
})