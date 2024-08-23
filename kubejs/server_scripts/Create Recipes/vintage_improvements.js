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
    event.replaceInput(
        { input: 'vintageimprovements:iron_spring' },
        'vintageimprovements:iron_spring',
        'gtceu:iron_spring'
        )

//Curving Press
    event.recipes.vintageimprovements.curving('gtceu:compressed_clay', 'minecraft:clay_ball').head('gtceu:brick_wooden_form')
    event.recipes.vintageimprovements.curving('gtceu:compressed_coke_clay', 'kubejs:coke_clay').head('gtceu:brick_wooden_form')

//Coiling
    const spring = Ingredient.of('#forge:springs').itemIds
    const smallspring = Ingredient.of('#forge:small_springs').itemIds
    spring.forEach( (itemIds) => {
        event.recipes.vintageimprovements.coiling(itemIds, 'gtceu:long_' + itemIds.slice(6, -7) + '_rod')
    })
    smallspring.forEach( (itemIds) => {
        event.recipes.vintageimprovements.coiling(itemIds, 'gtceu:' + itemIds.slice(12, -7) + '_rod')
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
            && itemIds != 'gtceu:raw_rubber_plate'
            && itemIds != 'gtceu:rubber_plate'
            && itemIds != 'gtceu:silicone_rubber_plate'
            && itemIds != 'gtceu:styrene_butadiene_plate'
        ) {
            event.recipes.vintageimprovementsHammering(
                Item.of(itemIds, 2), 
                [itemIds.slice(0, -6) + '_ingot', itemIds.slice(0, -6) + '_ingot', itemIds.slice(0, -6) + '_ingot'])
                .hammerBlows(5)
        }
    })//end of plate loop
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:iron_plate', 2), 
        ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:copper_plate', 2), 
        ['minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:copper_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:gold_plate', 2), 
        ['minecraft:gold_ingot', 'minecraft:gold_ingot', 'minecraft:gold_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:netherite_alloy_plate', 2), 
        ['minecraft:netherite_ingot', 'minecraft:netherite_ingot', 'minecraft:netherite_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('ad_astra:desh_plate', 2), 
        ['ad_astra:desh_ingot', 'ad_astra:desh_ingot', 'ad_astra:desh_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('ad_astra:ostrum_plate', 2), 
        ['ad_astra:ostrum_ingot', 'ad_astra:ostrum_ingot', 'ad_astra:ostrum_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('ad_astra:calorite_plate', 2), 
        ['ad_astra:calorite_ingot', 'ad_astra:calorite_ingot', 'ad_astra:calorite_ingot'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:infinity_plate', 2), 
        ['avaritia:infinity_alloy', 'avaritia:infinity_alloy', 'avaritia:infinity_alloy'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:andesite_alloy_plate', 2), 
        ['create:andesite_alloy', 'create:andesite_alloy', 'create:andesite_alloy'])
        .hammerBlows(5)
    event.recipes.vintageimprovementsHammering(
        Item.of('gtceu:wohler_aluminium_plate', 2), 
        ['tfmg:aluminum_alloy', 'tfmg:aluminum_alloy', 'tfmg:aluminum_alloy'])
        .hammerBlows(5)

//Lathe
    const rods = Ingredient.of('#forge:rods').itemIds.filter((name) => {
        return name.includes('gtceu') == true
    })
    rods.forEach( (itemIds) => {
        if(
            itemIds != 'ad_astra:steel_rod'
        ) {
            event.recipes.vintageimprovements.turning(Item.of(itemIds), itemIds.slice(0, -4) + '_ingot').processingTime(300)
        }
    })//end of lathe loop
    event.recipes.vintageimprovements.turning(Item.of('gtceu:iron_rod'), 'minecraft:iron_ingot').processingTime(300)
    event.recipes.vintageimprovements.turning(Item.of('gtceu:copper_rod'), 'minecraft:copper_ingot').processingTime(300)
    event.recipes.vintageimprovements.turning(Item.of('gtceu:gold_rod'), 'minecraft:gold_ingot').processingTime(300)
    event.recipes.vintageimprovements.turning(Item.of('gtceu:netherite_alloy_rod'), 'minecraft:netherite_ingot').processingTime(300)
    event.recipes.vintageimprovements.turning(Item.of('gtceu:wohler_aluminium_rod'), 'tfmg:aluminum_ingot').processingTime(300)
    event.recipes.vintageimprovements.turning(Item.of('gtceu:glass_tube'), '#forge:glass/colorless').processingTime(300)
    /*
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

//Vacuumizing
    event.recipes.vintageimprovements.vacuumizing('3x gtceu:raw_rubber_dust', 'gtceu:sticky_resin').processingTime(500).heated()
    event.recipes.vintageimprovements.vacuumizing('2x gtceu:raw_rubber_dust', 'minecraft:slime_ball').processingTime(500).heated()
//Pressurizing
    event.recipes.vintageimprovements.pressurizing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust').heated()
    event.recipes.vintageimprovements.pressurizing('minecraft:clay', ['minecraft:clay_ball', 'minecraft:clay_ball', 'minecraft:clay_ball', 'minecraft:clay_ball']).heated()
//Centrifuge
    event.custom({
        type: 'vintageimprovements:centrifugation',
        ingredients: [
            {tag: 'forge:dusts/ash', count: 5},
            {tag: 'forge:dusts/ash', count: 5},
            {tag: 'forge:dusts/ash', count: 5},
            {tag: 'forge:dusts/ash', count: 5},
            {tag: 'forge:dusts/ash', count: 5}
        ],
        results: [
            {item: 'gtceu:quicklime_dust', count: 2},
            {item: 'gtceu:potash_dust'},
            {item: 'gtceu:magnesia_dust'},
            {item: 'gtceu:hematite_dust'}
        ],
        processingTime: 600
    })
})