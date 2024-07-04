ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'createbigcannons:molten_cast_iron' },
        'createbigcannons:molten_cast_iron',
        'kubejs:poor_steel'
    )
    event.replaceInput(
        { input: 'createbigcannons:molten_bronze' },
        'createbigcannons:molten_bronze',
        'kubejs:bronze'
    )
    event.replaceInput(
        { input: 'createbigcannons:molten_steel' },
        'createbigcannons:molten_steel',
        'kubejs:steel'
    )
})