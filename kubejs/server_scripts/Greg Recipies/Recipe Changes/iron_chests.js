ServerEvents.recipes(event => {
// METHODS
    let addStorageTier = (material, screw, plate, previous, upgradeBase, EUt, duration) => {
        let useScrew = screw ? screw : 'gtceu:' + material + '_screw'
        let usePlate = plate ? plate : 'gtceu:double_' + material + '_plate'
        let useBase = previous ? 'ironchests:' + previous + '_' : 'minecraft:'
        let useUpgradeBase = upgradeBase ? upgradeBase : (previous ? 'gtceu:' + previous + '_plate' : '#minecraft:planks')

// Add Manual Recipes
// - Chest
    event.shaped(
        Item.of('ironchests:' + material + '_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: useScrew,
            B: usePlate,
            C: useBase + 'chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
// - Barrel
    event.shaped(
        Item.of('ironchests:' + material + '_barrel'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: useScrew,
            B: usePlate,
            C: useBase + 'barrel',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
// - Upgrade
    event.shaped(
        Item.of('ironchests:' + material + '_chest_upgrade'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: useScrew,
            B: usePlate,
            C: useUpgradeBase,
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )

// Add Sequencial Assembly Recipes
// - Chest
    let interChest = 'kubejs:incomplete_' + material + '_chest'
        event.recipes.create.sequenced_assembly('ironchests:' + material + '_chest', 'minecraft:chest', [
            event.recipes.createDeploying(interChest, [interChest, usePlate]),
            event.recipes.createPressing(interChest, interChest),
            event.recipes.createDeploying(interChest, [interChest, useScrew]),
            event.recipes.createPressing(interChest, interChest),
        ]).transitionalItem(interChest).loops(4)
        if (previous) {
            event.recipes.create.sequenced_assembly('ironchests:' + material + '_chest', useBase + 'chest', [
                event.recipes.createDeploying(interChest, [interChest, usePlate]),
                event.recipes.createPressing(interChest, interChest),
                event.recipes.createDeploying(interChest, [interChest, useScrew]),
                event.recipes.createPressing(interChest, interChest),
            ]).transitionalItem(interChest).loops(2)
        }
// - Barrel
    let interBarrel = 'kubejs:incomplete_' + material + '_barrel'
        event.recipes.create.sequenced_assembly('ironchests:' + material + '_barrel', 'minecraft:barrel', [
            event.recipes.createDeploying(interBarrel, [interBarrel, usePlate]),
            event.recipes.createPressing(interBarrel, interBarrel),
            event.recipes.createDeploying(interBarrel, [interBarrel, useScrew]),
            event.recipes.createPressing(interBarrel, interBarrel),
        ]).transitionalItem(interBarrel).loops(4)
        if (previous) {
            event.recipes.create.sequenced_assembly('ironchests:' + material + '_barrel', useBase + 'barrel', [
                event.recipes.createDeploying(interBarrel, [interBarrel, usePlate]),
                event.recipes.createPressing(interBarrel, interBarrel),
                event.recipes.createDeploying(interBarrel, [interBarrel, useScrew]),
                event.recipes.createPressing(interBarrel, interBarrel),
            ]).transitionalItem(interBarrel).loops(2)
        }
// - Upgrade
    let interUpgrade = 'kubejs:incomplete_' + material + '_chest_upgrade'
        event.recipes.create.sequenced_assembly('ironchests:' + material + '_chest_upgrade', useUpgradeBase, [
            event.recipes.createDeploying(interUpgrade, [interUpgrade, usePlate]),
            event.recipes.createPressing(interUpgrade, interUpgrade),
            event.recipes.createDeploying(interUpgrade, [interUpgrade, useScrew]),
            event.recipes.createPressing(interUpgrade, interUpgrade),
        ]).transitionalItem(interUpgrade).loops(2)

// Add Assembly Recipes
// - Chest
    event.recipes.gtceu.assembler(material + 'chest')
        .circuit(2)
        .itemInputs('minecraft:chest', '2x ' + usePlate)
        .itemOutputs('ironchests:' + material + '_chest')
        .duration(duration)
        .EUt(EUt)
    if (previous) {
        event.recipes.gtceu.assembler(material + 'chestimprove')
            .circuit(2)
            .itemInputs(useBase + 'chest', usePlate)
            .itemOutputs('ironchests:' + material + '_chest')
            .duration(duration)
            .EUt(EUt)
    }
// - Barrel
    event.recipes.gtceu.assembler(material + 'barrel')
        .circuit(2)
        .itemInputs('minecraft:barrel', '2x ' + usePlate)
        .itemOutputs('ironchests:' + material + '_barrel')
        .duration(duration)
        .EUt(EUt)
    if (previous) {
        event.recipes.gtceu.assembler(material + 'barrelimprove')
            .circuit(2)
            .itemInputs(useBase + 'barrel', usePlate)
            .itemOutputs('ironchests:' + material + '_barrel')
            .duration(duration)
            .EUt(EUt)
    }
// - Upgrade
    event.recipes.gtceu.assembler(material + 'chestupgrade')
        .circuit(2)
        .itemInputs(useUpgradeBase, usePlate)
        .itemOutputs('ironchests:' + material + '_chest_upgrade')
        .duration(duration)
        .EUt(EUt)
    }
// Add Tiers
    addStorageTier('copper', null, null, null, null, 7, 100)
    addStorageTier('iron', null, null, 'copper', null, 16, 150)
    addStorageTier('gold', null, null, 'iron', null, 64, 250)
    addStorageTier('diamond', null, 'gtceu:diamond_plate', 'gold', null, 120, 300)
    addStorageTier('obsidian', 'gtceu:diamond_screw', 'gtceu:dense_obsidian_plate', 'diamond', null, 256, 400)
    addStorageTier('crystal', 'gtceu:glass_screw', 'gtceu:glass_plate', 'diamond', null, 256, 350)
    addStorageTier('netherite', 'gtceu:diamond_screw', 'minecraft:netherite_ingot', 'diamond', null, 256, 800)

//Dollies
    event.shaped(
        Item.of('ironchests:iron_dolly'),
        [
            'AAB',
            'ACB',
            'DED'
        ],
        {
            A: 'gtceu:iron_rod',
            B: 'gtceu:rubber_nugget',
            C: '#forge:tools/wrenches',
            D: 'gtceu:iron_minecart_wheels',
            E: 'gtceu:steel_plate'
        }
    )
    event.shaped(
        Item.of('ironchests:diamond_dolly'),
        [
            'AAB',
            'ACB',
            'DED'
        ],
        {
            A: 'gtceu:diamond_rod',
            B: 'gtceu:polyethylene_nugget',
            C: '#forge:tools/wrenches',
            D: 'gtceu:steel_minecart_wheels',
            E: 'gtceu:nether_star_plate'
        }
    )
})