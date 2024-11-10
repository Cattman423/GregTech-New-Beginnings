GTCEuStartupEvents.registry('gtceu:dimension_marker', event  => {

//Courtesy of DancingSnow on the GTCEUm Discord

    /**
     * register dimension marker
     *
     * @param dim {string}
     * @param tier {number}
     */
    const marker = (dim, tier) => {
        const [namespace, path] = dim.split(':', 2)
        console.log(Item.getItem(`kubejs:${namespace}_${path}_marker`))
        event.create(dim)
            .tier(tier)
            .iconSupplier(() => Item.getItem(`kubejs:${namespace}_${path}_marker`))

    }

    //marker('twilightforest:twilight_forest', 0)
    marker('ad_astra:moon', 1)
    marker('ad_astra:mars', 2)
    marker('ad_astra:venus', 3)
    marker('ad_astra:mercury', 3)
    marker('ad_astra:glacio', 7)
})