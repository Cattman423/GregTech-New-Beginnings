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
    const gtplates = Ingredient.of('#forge:plates').itemIds.filter((name) => {
        return name.includes('gtceu') == true
    })
    const ingot_bases = Ingredient.of('#forge:ingots').itemIds.filter((name) => {
        return name.includes('gtceu') == true //|| name.includes('minecraft') //== true // (I think that last one is correct for stuff like iron etc?)
    }).map((element, index) => { // remove "_ingot"
        return element.slice(0, element.indexOf('_ingot'))
    })
    const gtmetalplates = gtplates.filter((name) => {
        return ingot_bases.toString().includes(name.slice(0, -6))
    })
    gtmetalplates.forEach( (itemIds) => {
        if(
            itemIds != 'gtceu:polyvinyl_chloride_plate'
            && itemIds != 'gtceu:polyphenylene_sulfide_plate'
            && itemIds != 'gtceu:polybenzimidazole_plate'
            && itemIds != 'gtceu:polyethylene_plate'
            && itemIds != 'gtceu:polycaprolactam_plate'
            && itemIds != 'gtceu:polytetrafluoroethylene_plate'
            && itemIds != 'gtceu:polyvinyl_butyral_plate'
            && itemIds != 'gtceu:epoxy_plate'
        ) {
            event.custom({
                type: 'vintageimprovements:hammering',
                hammerBlows: 3,
                ingredients: [
                    {
                        item: itemIds.slice(0, -6) + '_ingot',
                        count: 3
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
        results: [{item: 'gtceu:iron_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:copper_ingot', count: 3}],
        results: [{item: 'gtceu:copper_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:gold_ingot', count: 3}],
        results: [{item: 'gtceu:gold_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'minecraft:netherite_ingot', count: 3}],
        results: [{item: 'gtceu:netherite_alloy_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'ad_astra:desh_ingot', count: 3}],
        results: [{item: 'ad_astra:desh_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'ad_astra:ostrum_ingot', count: 3}],
        results: [{item: 'ad_astra:ostrum_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'ad_astra:calorite_ingot', count: 3}],
        results: [{item: 'ad_astra:calorite_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'create:andesite_alloy', count: 3}],
        results: [{item: 'gtceu:andesite_alloy_plate'}],
        processingTime: 120,
        })
    event.custom({
        type: 'vintageimprovements:hammering',
        hammerBlows: 3,
        ingredients: [{item: 'avaritia:infinity_ingot', count: 3}],
        results: [{item: 'gtceu:infinity_plate'}],
        processingTime: 120,
        })
//Lathe
    const rods = Ingredient.of('#forge:rods').itemIds.filter((name) => {
        return name.includes('gtceu') == true
    })
    rods.forEach( (itemIds) => {
        if(
            itemIds != 'ad_astra:steel_rod'
        ) {
            event.custom({
                type: 'vintageimprovements:turning',
                ingredients: [
                    {
                        item: itemIds.slice(0, -4) + '_ingot'//,
                        //count: 3
                    }
                ],
                results: [
                    {
                        item: itemIds//,
                        //item: 'gtceu:small_' + itemIds.slice(6, -4) + '_dust'
                    }
                ]
            })
        }
    })//end of lathe loop
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'minecraft:iron_ingot'}],
        results: [{item: 'gtceu:iron_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'minecraft:copper_ingot'}],
        results: [{item: 'gtceu:copper_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'minecraft:gold_ingot'}],
        results: [{item: 'gtceu:gold_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'minecraft:netherite_ingot'}],
        results: [{item: 'gtceu:netherite_alloy_rod'}]
        })/*
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'ad_astra:desh_ingot'}],
        results: [{item: 'ad_astra:desh_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'ad_astra:ostrum_ingot'}],
        results: [{item: 'ad_astra:ostrum_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'ad_astra:calorite_ingot'}],
        results: [{item: 'ad_astra:calorite_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'create:andesite_alloy'}],
        results: [{item: 'gtceu:andesite_alloy_rod'}]
        })
    event.custom({
        type: 'vintageimprovements:turning',
        ingredients: [{item: 'avaritia:infinity_ingot'}],
        results: [{item: 'gtceu:infinity_rod'}]
        })*/
})