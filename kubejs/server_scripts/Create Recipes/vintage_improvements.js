ServerEvents.recipes(event => {
//Sheet Replacements
    event.replaceInput(
        { input: 'create:brass_sheet' },
        'create:brass_sheet',
        'gtceu:brass_plate'
        )
    event.replaceInput(
        { input: 'create:iron_sheet' },
        'create:iron_sheet',
        'gtceu:iron_plate'
        )
    event.replaceInput(
        { input: 'create:copper_sheet' },
        'create:copper_sheet',
        'gtceu:copper_plate'
        )

//Curving Press
    event.custom({
        type: 'vintageimprovements:curving',
        itemAsHead: "gtceu:brick_wooden_form",
        ingredients: [
            {
                item: 'minecraft:clay_ball'
            }
        ],
        results: [
            {
                item: 'gtceu:compressed_clay'
            }
        ]
        })

//Coiling
    const spring = Ingredient.of('#forge:springs').itemIds
    const smallspring = Ingredient.of('#forge:small_springs').itemIds
    spring.forEach( (itemIds) => {
        event.custom({
            type: 'vintageimprovements:coiling',
            ingredients: [
                {
                    item: 'gtceu:long_' + itemIds.slice(6, -7) + '_rod'
                }
            ],
            results: [
                {
                    item: itemIds
                }
            ],
            processingTime: 120,
            })
    })
    smallspring.forEach( (itemIds) => {
        event.custom({
            type: 'vintageimprovements:coiling',
            ingredients: [
                {
                    item: 'gtceu:' + itemIds.slice(12, -7) + '_rod'
                }
            ],
            results: [
                {
                    item: itemIds,
                    count: 2
                }
            ],
            processingTime: 120,
            })
    })

//Helve hammering
    const plates = Ingredient.of('#forge:plates').itemIds
    const gtplates = plates.filter((name) => {
        return name.includes('gtceu') == true
    })
    /*const ingots = Ingredient.of('#forge:ingots').itemIds
    const gtingots = ingots.filter((name) => {
        return name.includes('gtceu') == true
    })
    const gtmetalplates = gtplates.filter((name, index) => {
        if(name.slice(0, -6) == gtingots.indexOf(index).toString.slice(0, -5)) {return name}
    })*/
    gtplates.forEach( (itemIds) => {
        if(
            itemIds != 'gtceu:polyvinyl_chloride_plate'
            && itemIds != 'gtceu:polyphenylene_sulfide_plate'
            && itemIds != 'gtceu:polybenzimidazole_plate'
            && itemIds != 'gtceu:polyethylene_plate'
            && itemIds != 'gtceu:polycaprolactam_plate'
            && itemIds != 'gtceu:polytetrafluoroethylene_plate'
            && itemIds != 'gtceu:polyvinyl_butyral_plate'
        ) {
            event.custom({
                type: 'vintageimprovements:hammering',
                hammerBlows: 3,
                ingredients: [
                    {
                        item: itemIds.slice(0, -6) + '_ingot'//,
                        //count: 3
                    }
                ],
                results: [
                    {
                        item: itemIds//,
                        //count: 2
                    }
                ],
                processingTime: 120,
                })
        }
    })//end of plate loop
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:iron_ingot', count: 3}],
        results: [{item: 'gtceu:iron_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:copper_ingot', count: 3}],
        results: [{item: 'gtceu:copper_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:gold_ingot', count: 3}],
        results: [{item: 'gtceu:gold_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:netherite_ingot', count: 3}],
        results: [{item: 'gtceu:netherite_alloy_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'ad_astra:desh_ingot', count: 3}],
        results: [{item: 'ad_astra:desh_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'ad_astra:ostrum_ingot', count: 3}],
        results: [{item: 'ad_astra:ostrum_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'ad_astra:calorite_ingot', count: 3}],
        results: [{item: 'ad_astra:calorite_plate', count: 2}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'create:andesite_alloy', count: 3}],
        results: [{item: 'gtceu:andesite_alloy_plate', count: 2}],
        processingTime: 120,
        })
})