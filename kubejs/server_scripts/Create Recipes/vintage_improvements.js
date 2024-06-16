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
    const plates = Ingredient.of('#forge:plates').itemIds//.contains('gtceu')
    //const gtplates = itemIds.concat
    plates.forEach( (itemIds) => {
        if(/**/
            itemIds != 'vintageimprovements:aluminum_sheet'
            && itemIds != 'vintageimprovements:andesite_sheet'
            && itemIds != 'vintageimprovements:cast_iron_sheet'
            && itemIds != 'vintageimprovements:netherite_sheet'
            && itemIds != 'vintageimprovements:palladium_sheet'
            && itemIds != 'vintageimprovements:rhodium_sheet'
            && itemIds != 'vintageimprovements:rose_gold_sheet'
            && itemIds != 'vintageimprovements:vanadium_sheet'
            && itemIds != 'vintageimprovements:silver_sheet'
            && itemIds != 'vintageimprovements:signalium_sheet'
            && itemIds != 'vintageimprovements:slimesteel_sheet'
            && itemIds != 'vintageimprovements:tin_sheet'
            && itemIds != 'vintageimprovements:uranium_sheet'
            && itemIds != 'vintageimprovements:nethersteel_sheet'
            && itemIds != 'vintageimprovements:zinc_sheet'
            && itemIds != 'vintageimprovements:shadow_steel_sheet'
            && itemIds != 'vintageimprovements:refined_radiance_sheet'
            && itemIds != 'vintageimprovements:amethyst_bronze_sheet'
            && itemIds != 'vintageimprovements:bronze_sheet'
            && itemIds != 'vintageimprovements:cobalt_sheet'
            && itemIds != 'vintageimprovements:constantan_sheet'
            && itemIds != 'vintageimprovements:enderium_sheet'
            && itemIds != 'vintageimprovements:fiery_sheet'
            && itemIds != 'vintageimprovements:hepatizon_sheet'
            && itemIds != 'vintageimprovements:osmium_sheet'
            && itemIds != 'vintageimprovements:pig_iron_sheet'
            && itemIds != 'vintageimprovements:platinum_sheet'
            && itemIds != 'vintageimprovements:pure_gold_sheet'
            && itemIds != 'vintageimprovements:queens_slime_sheet'
            && itemIds != 'vintageimprovements:invar_sheet'
            && itemIds != 'vintageimprovements:ironwood_sheet'
            && itemIds != 'vintageimprovements:knightmetal_sheet'
            && itemIds != 'vintageimprovements:lead_sheet'
            && itemIds != 'vintageimprovements:lumium_sheet'
            && itemIds != 'vintageimprovements:refined_glowstone_sheet'
            && itemIds != 'vintageimprovements:refined_obsidian_sheet'
            && itemIds != 'vintageimprovements:signalum_sheet'
            && itemIds != 'vintageimprovements:manyullyn_sheet'
            && itemIds != 'ad_astra:iron_plate'
            && itemIds != 'ad_astra:steel_plate'
            && itemIds != 'ad_astra:desh_plate'
            && itemIds != 'ad_astra:ostrum_plate'
            && itemIds != 'ad_astra:calorite_plate'
            && itemIds != 'tfmg:heavy_plate'
            && itemIds != 'create:iron_sheet'
            && itemIds != 'create:sturdy_sheet'
            && itemIds != 'create:copper_sheet'
            && itemIds != 'create:brass_sheet'
            && itemIds != 'create:golden_sheet'
        ) {
            event.custom({
                type: 'vintageimprovements:hammering',
                hammerBlows: 3,
                ingredients: [
                    {
                        item: 'gtceu:' + itemIds.slice(6, -6) + '_ingot'//,
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