WorldgenEvents.remove(event => {
    event.removeOres(ores => {
        ores.blocks = [
            'create:zinc_ore',
            'create:deepslate_zinc_ore'
        ]
        })
})
