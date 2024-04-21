ServerEvents.recipes(event => {
    event.remove({mod: 'storagedrawers'})
    function onedrawer(output, plank){
        event.shaped(
            Item.of(output),
            [
                'AAA',
                'CBD',
                'AAA'
            ],
            {
                A: plank,
                B: 'minecraft:chest',
                C: '#forge:tools/mallets',
                D: '#forge:tools/saws'
            }
            )
    }
    onedrawer('storagedrawers:oak_full_drawers_1', 'minecraft:oak_planks')
    onedrawer('storagedrawers:spruce_full_drawers_1', 'minecraft:spruce_planks')
    onedrawer('storagedrawers:birch_full_drawers_1', 'minecraft:birch_planks')
    onedrawer('storagedrawers:jungle_full_drawers_1', 'minecraft:jungle_planks')
    onedrawer('storagedrawers:acacia_full_drawers_1', 'minecraft:acacia_planks')
    onedrawer('storagedrawers:dark_oak_full_drawers_1', 'minecraft:dark_oak_planks')
    onedrawer('storagedrawers:crimson_full_drawers_1', 'minecraft:crimson_planks')
    onedrawer('storagedrawers:warped_full_drawers_1', 'minecraft:warped_planks')
    onedrawer('storagedrawers:oak_half_drawers_1', 'minecraft:oak_slab')
    onedrawer('storagedrawers:spruce_half_drawers_1', 'minecraft:spruce_slab')
    onedrawer('storagedrawers:birch_half_drawers_1', 'minecraft:birch_slab')
    onedrawer('storagedrawers:jungle_half_drawers_1', 'minecraft:jungle_slab')
    onedrawer('storagedrawers:acacia_half_drawers_1', 'minecraft:acacia_slab')
    onedrawer('storagedrawers:dark_oak_half_drawers_1', 'minecraft:dark_oak_slab')
    onedrawer('storagedrawers:crimson_half_drawers_1', 'minecraft:crimson_slab')
    onedrawer('storagedrawers:warped_half_drawers_1', 'minecraft:warped_slab')

    function twodrawer(output, plank){
        event.shaped(
            Item.of(output),
            [
                'ABA',
                'CAD',
                'ABA'
            ],
            {
                A: plank,
                B: 'minecraft:chest',
                C: '#forge:tools/mallets',
                D: '#forge:tools/saws'
            }
            )
    }
    twodrawer('2x storagedrawers:oak_full_drawers_2', 'minecraft:oak_planks')
    twodrawer('2x storagedrawers:spruce_full_drawers_2', 'minecraft:spruce_planks')
    twodrawer('2x storagedrawers:birch_full_drawers_2', 'minecraft:birch_planks')
    twodrawer('2x storagedrawers:jungle_full_drawers_2', 'minecraft:jungle_planks')
    twodrawer('2x storagedrawers:acacia_full_drawers_2', 'minecraft:acacia_planks')
    twodrawer('2x storagedrawers:dark_oak_full_drawers_2', 'minecraft:dark_oak_planks')
    twodrawer('2x storagedrawers:crimson_full_drawers_2', 'minecraft:crimson_planks')
    twodrawer('2x storagedrawers:warped_full_drawers_2', 'minecraft:warped_planks')
    twodrawer('2x storagedrawers:oak_half_drawers_2', 'minecraft:oak_slab')
    twodrawer('2x storagedrawers:spruce_half_drawers_2', 'minecraft:spruce_slab')
    twodrawer('2x storagedrawers:birch_half_drawers_2', 'minecraft:birch_slab')
    twodrawer('2x storagedrawers:jungle_half_drawers_2', 'minecraft:jungle_slab')
    twodrawer('2x storagedrawers:acacia_half_drawers_2', 'minecraft:acacia_slab')
    twodrawer('2x storagedrawers:dark_oak_half_drawers_2', 'minecraft:dark_oak_slab')
    twodrawer('2x storagedrawers:crimson_half_drawers_2', 'minecraft:crimson_slab')
    twodrawer('2x storagedrawers:warped_half_drawers_2', 'minecraft:warped_slab')

    function fourdrawer(output, plank){
        event.shaped(
            Item.of(output),
            [
                'BAB',
                'CAD',
                'BAB'
            ],
            {
                A: plank,
                B: 'minecraft:chest',
                C: '#forge:tools/mallets',
                D: '#forge:tools/saws'
            }
            )
    }
    fourdrawer('4x storagedrawers:oak_full_drawers_4', 'minecraft:oak_planks')
    fourdrawer('4x storagedrawers:spruce_full_drawers_4', 'minecraft:spruce_planks')
    fourdrawer('4x storagedrawers:birch_full_drawers_4', 'minecraft:birch_planks')
    fourdrawer('4x storagedrawers:jungle_full_drawers_4', 'minecraft:jungle_planks')
    fourdrawer('4x storagedrawers:acacia_full_drawers_4', 'minecraft:acacia_planks')
    fourdrawer('4x storagedrawers:dark_oak_full_drawers_4', 'minecraft:dark_oak_planks')
    fourdrawer('4x storagedrawers:crimson_full_drawers_4', 'minecraft:crimson_planks')
    fourdrawer('4x storagedrawers:warped_full_drawers_4', 'minecraft:warped_planks')
    fourdrawer('4x storagedrawers:oak_half_drawers_4', 'minecraft:oak_slab')
    fourdrawer('4x storagedrawers:spruce_half_drawers_4', 'minecraft:spruce_slab')
    fourdrawer('4x storagedrawers:birch_half_drawers_4', 'minecraft:birch_slab')
    fourdrawer('4x storagedrawers:jungle_half_drawers_4', 'minecraft:jungle_slab')
    fourdrawer('4x storagedrawers:acacia_half_drawers_4', 'minecraft:acacia_slab')
    fourdrawer('4x storagedrawers:dark_oak_half_drawers_4', 'minecraft:dark_oak_slab')
    fourdrawer('4x storagedrawers:crimson_half_drawers_4', 'minecraft:crimson_slab')
    fourdrawer('4x storagedrawers:warped_half_drawers_4', 'minecraft:warped_slab')

    event.shaped(
        Item.of('storagedrawers:drawer_key'),
        [
            '   ',
            'BAA',
            'CDE'
        ],
        {
            A: 'gtceu:gold_plate',
            B: 'storagedrawers:upgrade_template',
            C: '#forge:tools/hammers',
            D: '#forge:tools/saws',
            E: '#forge:tools/files'
        }
        )
    function key(output, input){
        event.shapeless(
            Item.of(output),
            [
                input
            ]
            )
        }
    key('storagedrawers:quantify_key', 'storagedrawers:drawer_key')
    key('storagedrawers:shroud_key', 'storagedrawers:quantify_key')
    key('storagedrawers:drawer_key', 'storagedrawers:shroud_key')
    
    function upgrade(output, mata, matb, roda){
        event.shaped(
            Item.of(output),
            [
                'ABA',
                'BCB',
                'ADA'
            ],
            {
                A: mata,
                B: 'storagedrawers:upgrade_template',
                C: matb,
                D: roda
            }
            )
    }
    upgrade('storagedrawers:obsidian_storage_upgrade', 'gtceu:iron_plate', 'gtceu:iron_plate', 'gtceu:iron_rod')
    upgrade('storagedrawers:iron_storage_upgrade', 'gtceu:gold_plate', 'gtceu:bronze_plate', 'gtceu:gold_rod')
    upgrade('storagedrawers:gold_storage_upgrade', 'gtceu:obsidian_plate', 'gtceu:steel_plate', 'gtceu:obsidian_rod')
    upgrade('storagedrawers:diamond_storage_upgrade', 'gtceu:diamond_plate', 'gtceu:aluminium_plate', 'gtceu:diamond_rod')
    upgrade('storagedrawers:emerald_storage_upgrade', 'gtceu:ruby_plate', 'gtceu:stainless_steel_plate', 'gtceu:ruby_rod')
    upgrade('storagedrawers:one_stack_upgrade', 'gtceu:rubber_plate', 'minecraft:soul_sand', 'gtceu:rubber_rod')

    event.shaped(
        Item.of('storagedrawers:upgrade_template'),
        [
            'ABA',
            'ACA',
            ' D '
        ],
        {
            A: 'gtceu:iron_screw',
            B: 'minecraft:piston',
            C: '#storagedrawers:drawers',
            D: '#forge:tools/screwdrivers'
        }
        )
    function controller(output, plate){
        event.shaped(
            Item.of(output),
            [
                'ABA',
                'CDC',
                'EFE'
            ],
            {
                A: 'gtceu:stainless_steel_plate',
                B: '#gtceu:circuits/mv',
                C: 'minecraft:comparater',
                D: '#storagedrawers:drawers',
                E: 'gtceu:obsidian_plate',
                F: plate
            }
            )
    }
    controller('storagedrawers:controller', 'gtceu:diamond_plate')
    controller('storagedrawers:controller_slave', 'gtceu:ender_eye_plate')
})