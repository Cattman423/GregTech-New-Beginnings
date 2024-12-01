ServerEvents.recipes(event => {
    function crushwheel(output, input){
        event.recipes.create.crushing(output, input)
    }
    function milling(output, input){
        event.recipes.create.milling(output, input)
    }

    const rawore = Ingredient.of('#forge:raw_materials').itemIds.filter((name) => {
        return name.includes('gtceu') == true
    })
    const crushedore = Ingredient.of('#forge:crushed_ores').itemIds.filter((name) => {
        return name.includes('gtceu') == true
    })
    const impureore = Ingredient.of('#forge:impure_dusts').itemIds.filter((name) => {
        return name.includes('gtceu') == true
    })

    rawore.forEach( (itemIds) => {
        if(
            itemIds != 'minecraft:raw_copper' 
            && itemIds != 'minecraft:raw_gold' 
            && itemIds != 'minecraft:raw_iron'
            && itemIds != 'ad_astra:raw_desh'
            && itemIds != 'ad_astra:raw_ostrum'
            && itemIds != 'ad_astra:raw_calorite'
            && itemIds != 'create:raw_zinc'
        ) {
            event.recipes.create.crushing(
                [
                    'gtceu:crushed_' + itemIds.slice(10) + '_ore',
                    Item.of('gtceu:crushed_' + itemIds.slice(10) + '_ore').withChance(0.5),
                    Item.of('create:experience_nugget').withChance(0.75)
                ],
                itemIds
            ).id('kubejs:create_ore_proc/crushing/' + itemIds.slice(6))

            event.recipes.create.milling(
                'gtceu:crushed_' + itemIds.slice(10) + '_ore', 
                itemIds
            ).id('kubejs:create_ore_proc/milling/' + itemIds.slice(6))
        }
    })

    crushedore.forEach( (itemIds) => {
        event.recipes.create.crushing(
            [
                'gtceu:impure_' + itemIds.slice(14, -4) + '_dust',
                Item.of('gtceu:impure_' + itemIds.slice(14, -4) + '_dust').withChance(0.25)
            ],
            itemIds
        ).id('kubejs:create_ore_proc/crushing/' + itemIds.slice(6))
        
        event.recipes.create.milling(
            'gtceu:impure_' + itemIds.slice(14, -4) + '_dust', 
            itemIds
        ).id('kubejs:create_ore_proc/milling/' + itemIds.slice(6))
    })

    impureore.forEach( (itemIds) => {
        if(itemIds != 'gtceu:impure_redstone_dust') {
            event.recipes.create.splashing(
                'gtceu:' + itemIds.slice(13),
                itemIds
            ).id('kubejs:create_ore_proc/splashing/' + itemIds.slice(6))
        }
    })

    event.recipes.create.splashing('minecraft:redstone', 'gtceu:impure_redstone_dust')
    crushwheel(['gtceu:crushed_copper_ore', Item.of('gtceu:crushed_copper_ore').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_copper')
    crushwheel(['gtceu:crushed_gold_ore', Item.of('gtceu:crushed_gold_ore').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_gold')
    crushwheel(['gtceu:crushed_iron_ore', Item.of('gtceu:crushed_iron_ore').withChance(0.5), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:raw_iron')

    milling('gtceu:crushed_copper_ore', 'minecraft:raw_copper')
    milling('gtceu:crushed_gold_ore', 'minecraft:raw_gold')
    milling('gtceu:crushed_iron_ore', 'minecraft:raw_iron')
})