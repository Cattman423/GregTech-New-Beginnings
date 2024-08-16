StartupEvents.registry('block', event => {

//Courtesy of DancingSnow on the GTCEUm Discord
    
    /**
     * register a marker block
     *
     * @param dim {string} dimension_location
     */
    const marker = (dim) => {
        const [namespace, path] = dim.split(':', 2)
        event.create(`${namespace}_${path}_marker`)
            .texture('up', `kubejs:block/dim_marker/${namespace}/${path}/up`)
            .texture('down', `kubejs:block/dim_marker/${namespace}/${path}/down`)
            .texture('north', `kubejs:block/dim_marker/${namespace}/${path}/north`)
            .texture('south', `kubejs:block/dim_marker/${namespace}/${path}/south`)
            .texture('east', `kubejs:block/dim_marker/${namespace}/${path}/east`)
            .texture('west', `kubejs:block/dim_marker/${namespace}/${path}/west`)
            .texture('particle', '#north')
            .stoneSoundType()
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .hardness(1.2)
    }

    //marker('twilightforest:twilight_forest')
    marker('ad_astra:moon')
    marker('ad_astra:mars')
    marker('ad_astra:venus')
    marker('ad_astra:mercury')
    marker('ad_astra:glacio')
})