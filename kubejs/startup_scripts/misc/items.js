StartupEvents.registry('item', event => {
    event.create('platinum_chip')
        //.displayName()
        .texture('kubejs:item/platinum_chip')
        .tooltip('Mr House is looking for this')

    event.create('kilochad')
        //.displayName()
        .texture('kubejs:item/kilochad')
        .tooltip('1000 chads')

    event.create('megachad')
        //.displayName()
        .texture('kubejs:item/megachad')
        .tooltip('1000 kilochads')

    event.create('gigachad')
        //.displayName()
        .texture('kubejs:item/gigachad')
        .tooltip('1000 megachads')
        .tooltip('You have gone and done it')
})