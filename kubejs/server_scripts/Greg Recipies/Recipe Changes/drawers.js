ServerEvents.recipes(event => {

    event.remove({mod: 'storagedrawers'})
    event.remove({mod: 'functionalstorage'})
    event.remove({mod: 'rubberdrawers'})

    const mcplanks = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'warped', 'crimson']

    mcplanks.forEach( (base) => {
        event.shaped(
            Item.of('functionalstorage:' + base + '_1'), ['AAA', 'CBD', 'AAA'],
            {A: 'minecraft:' + base + '_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
        )
        event.shaped(
            Item.of('2x functionalstorage:' + base + '_2'), ['ABA', 'CAD', 'ABA'],
            {A: 'minecraft:' + base + '_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
        )
        event.shaped(
            Item.of('4x functionalstorage:' + base + '_4'), ['BAB', 'CAD', 'BAB'],
            {A: 'minecraft:' + base + '_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
        )
    })
//GT Wood
    event.shaped(
        Item.of('functionalstorage:rubber_1'), ['AAA', 'CBD', 'AAA'],
        {A: 'gtceu:rubber_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('2x functionalstorage:rubber_2'), ['ABA', 'CAD', 'ABA'],
        {A: 'gtceu:rubber_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('4x functionalstorage:rubber_4'), ['BAB', 'CAD', 'BAB'],
        {A: 'gtceu:rubber_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('functionalstorage:treated_1'), ['AAA', 'CBD', 'AAA'],
        {A: 'gtceu:treated_wood_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('2x functionalstorage:treated_2'), ['ABA', 'CAD', 'ABA'],
        {A: 'gtceu:treated_wood_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('4x functionalstorage:treated_4'), ['BAB', 'CAD', 'BAB'],
        {A: 'gtceu:treated_wood_planks', B: 'minecraft:chest', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
//Fluid Drawers
    event.shaped(
        Item.of('functionalstorage:fluid_1'), ['AAA', 'CBD', 'AAA'],
        {A: 'gtceu:treated_wood_planks', B: 'gtceu:fluid_cell', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('2x functionalstorage:fluid_2'), ['ABA', 'CAD', 'ABA'],
        {A: 'gtceu:treated_wood_planks', B: 'gtceu:fluid_cell', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
    event.shaped(
        Item.of('4x functionalstorage:fluid_4'), ['BAB', 'CAD', 'BAB'],
        {A: 'gtceu:treated_wood_planks', B: 'gtceu:fluid_cell', C: '#forge:tools/mallets', D: '#forge:tools/saws'}
    )
//Compacting Drawers
    event.shaped(
        Item.of('functionalstorage:compacting_drawer'), ['AEA', 'CBD', 'AEA'],
        {A: 'minecraft:stone', B: '#functionalstorage:drawer', C: '#forge:tools/hammers', D: '#forge:tools/wrenches', E: 'minecraft:piston'}
    )
    event.shaped(
        Item.of('functionalstorage:simple_compacting_drawer'), ['AEA', 'CBD', 'AAA'],
        {A: 'minecraft:stone', B: '#functionalstorage:drawer', C: '#forge:tools/hammers', D: '#forge:tools/wrenches', E: 'minecraft:piston'}
    )
//Controller
    event.shaped(
        Item.of('functionalstorage:storage_controller'), ['ABA', 'CDC', 'EBF'],
        {A: 'gtceu:wrought_iron_plate', B: '#functionalstorage:drawer', C: '#gtceu:circuits/ulv', D: 'gtceu:ulv_machine_hull', E: '#forge:tools/hammers', F: '#forge:tools/wrenches'}
    )
    event.shaped(
        Item.of('functionalstorage:controller_extension'), ['ABA', 'CDC', 'EBF'],
        {A: 'gtceu:wrought_iron_plate', B: '#functionalstorage:drawer', C: '#gtceu:circuits/ulv', D: 'gtceu:ulv_machine_casing', E: '#forge:tools/hammers', F: '#forge:tools/wrenches'}
    )
//Armory Cabinet
    event.shaped(
        Item.of('functionalstorage:armory_cabinet'), ['AEA', 'CBD', 'AAA'],
        {A: 'gtceu:steel_plate', B: '#functionalstorage:drawer', C: '#forge:tools/mallets', D: '#forge:tools/saws', E: 'minecraft:comparator'}
    )
//Ender Drawer
    event.shaped(
        Item.of('functionalstorage:ender_drawer'), ['AEA', 'CBD', 'AAA'],
        {A: 'gtceu:double_aluminium_plate', B: 'minecraft:ender_chest', C: '#forge:tools/mallets', D: '#forge:tools/saws', E: '#functionalstorage:drawer'}
    )
//Framed Drawers
    event.shaped(
        Item.of('functionalstorage:framed_1'), ['AAA', 'CBD', 'AAA'],
        {A: 'minecraft:iron_nugget', B: 'minecraft:chest', C: '#forge:tools/wire_cutters', D: '#forge:tools/wrenches'}
    )
    event.shaped(
        Item.of('2x functionalstorage:framed_2'), ['ABA', 'CAD', 'ABA'],
        {A: 'minecraft:iron_nugget', B: 'minecraft:chest', C: '#forge:tools/wire_cutters', D: '#forge:tools/wrenches'}
    )
    event.shaped(
        Item.of('4x functionalstorage:framed_4'), ['BAB', 'CAD', 'BAB'],
        {A: 'minecraft:iron_nugget', B: 'minecraft:chest', C: '#forge:tools/wire_cutters', D: '#forge:tools/wrenches'}
    )
    event.shaped(
        Item.of('functionalstorage:compacting_framed_drawer'), ['AEA', 'CBD', 'AEA'],
        {A: 'minecraft:iron_nugget', B: '#functionalstorage:drawer', C: '#forge:tools/wire_cutters', D: '#forge:tools/wrenches', E: 'minecraft:piston'}
    )
    event.shaped(
        Item.of('functionalstorage:framed_simple_compacting_drawer'), ['AEA', 'CBD', 'AAA'],
        {A: 'minecraft:iron_nugget', B: '#functionalstorage:drawer', C: '#forge:tools/wire_cutters', D: '#forge:tools/wrenches', E: 'minecraft:piston'}
    )
    event.shaped(
        Item.of('functionalstorage:framed_storage_controller'), ['ABA', 'CDC', 'EBF'],
        {A: 'gtceu:wrought_iron_nugget', B: '#functionalstorage:drawer', C: '#gtceu:circuits/ulv', D: 'gtceu:ulv_machine_hull', E: '#forge:tools/hammers', F: '#forge:tools/wrenches'}
    )
    event.shaped(
        Item.of('functionalstorage:framed_controller_extension'), ['ABA', 'CDC', 'EBF'],
        {A: 'gtceu:wrought_iron_nugget', B: '#functionalstorage:drawer', C: '#gtceu:circuits/ulv', D: 'gtceu:ulv_machine_casing', E: '#forge:tools/hammers', F: '#forge:tools/wrenches'}
    )
//Upgrades
    function upgrades(output, screw, plate, old){
        event.shaped(
            Item.of('functionalstorage:'+ output +'_upgrade'), ['ABA', 'BCB', 'DBE'],
            {A: screw, B: plate, C: old, D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers'}
        )
    }
    upgrades('copper', 'gtceu:copper_screw', 'gtceu:double_copper_plate', '#functionalstorage:drawer')
    upgrades('gold', 'gtceu:gold_screw', 'gtceu:double_gold_plate', 'functionalstorage:copper_upgrade')
    upgrades('diamond', 'gtceu:diamond_screw', 'gtceu:diamond_plate', 'functionalstorage:gold_upgrade')
    upgrades('netherite', 'gtceu:diamond_screw', 'minecraft:netherite_ingot', 'functionalstorage:diamond_upgrade')
    upgrades('void', 'gtceu:obsidian_screw', 'gtceu:obsidian_plate', '#functionalstorage:drawer')
    upgrades('redstone', 'minecraft:comparator', 'gtceu:redstone_plate', '#functionalstorage:drawer')
    event.shaped(
        Item.of('functionalstorage:iron_downgrade'), ['ABA', 'BCB', 'DBE'],
        {A: 'gtceu:iron_screw', B: 'gtceu:iron_plate', C: '#functionalstorage:drawer', D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers'}
    )
    event.shaped(
        Item.of('functionalstorage:collector_upgrade'), ['ABA', 'FCF', 'DBE'],
        {A: 'gtceu:iron_screw', B: 'gtceu:redstone_plate', C: '#functionalstorage:drawer', D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers', F: 'minecraft:hopper'}
    )
    event.shaped(
        Item.of('functionalstorage:puller_upgrade'), ['AFA', 'GCG', 'DBE'],
        {A: 'gtceu:iron_screw', B: 'gtceu:redstone_plate', C: '#functionalstorage:drawer', D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers', F: 'minecraft:hopper', G: 'gtceu:stone_plate'}
    )
    event.shaped(
        Item.of('functionalstorage:pusher_upgrade'), ['ABA', 'GCG', 'DFE'],
        {A: 'gtceu:iron_screw', B: 'gtceu:redstone_plate', C: '#functionalstorage:drawer', D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers', F: 'minecraft:hopper', G: 'gtceu:stone_plate'}
    )
//Tools
    event.shaped(
        Item.of('functionalstorage:configuration_tool'), ['ABA', 'BCB', 'DBE'],
        {A: 'gtceu:iron_screw', B: 'gtceu:gold_plate', C: 'create:electron_tube', D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers'}
    )
    event.shaped(
        Item.of('functionalstorage:linking_tool'), ['ABA', 'BCB', 'DBE'],
        {A: 'gtceu:iron_screw', B: 'gtceu:steel_plate', C: '#gtceu:circuits/ulv', D: '#forge:tools/hammers', E: '#forge:tools/screwdrivers'}
    )

    const stordrawer = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'warped', 'crimson']
    stordrawer.forEach( (base) => {
        event.shapeless(Item.of('functionalstorage:' + base + '_1'),['storagedrawers:' + base + '_full_drawers_1'])
        event.shapeless(Item.of('functionalstorage:' + base + '_1'),['2x storagedrawers:' + base + '_half_drawers_1'])
        event.shapeless(Item.of('functionalstorage:' + base + '_2'),['storagedrawers:' + base + '_full_drawers_2'])
        event.shapeless(Item.of('functionalstorage:' + base + '_2'),['2x storagedrawers:' + base + '_half_drawers_2'])
        event.shapeless(Item.of('functionalstorage:' + base + '_4'),['storagedrawers:' + base + '_full_drawers_4'])
        event.shapeless(Item.of('functionalstorage:' + base + '_4'),['2x storagedrawers:' + base + '_half_drawers_4'])
    })
    event.shapeless(Item.of('functionalstorage:copper_upgrade'),['4x storagedrawers:obsidian_storage_upgrade'])
    event.shapeless(Item.of('functionalstorage:copper_upgrade'),['2x storagedrawers:iron_storage_upgrade'])
    event.shapeless(Item.of('functionalstorage:copper_upgrade'),['storagedrawers:gold_storage_upgrade'])
    event.shapeless(Item.of('functionalstorage:gold_upgrade'),['storagedrawers:diamond_storage_upgrade'])
    event.shapeless(Item.of('functionalstorage:netherite_upgrade'),['storagedrawers:emerald_storage_upgrade'])
    event.shapeless(Item.of('functionalstorage:iron_downgrade'),['storagedrawers:one_stack_upgrade'])
    event.shapeless(Item.of('functionalstorage:void_upgrade'),['storagedrawers:void_upgrade'])
    event.shapeless(Item.of('functionalstorage:storage_controller'),['storagedrawers:controller'])
    event.shapeless(Item.of('functionalstorage:controller_extension'),['storagedrawers:controller_slave'])
    event.shapeless(Item.of('functionalstorage:configuration_tool'),['storagedrawers:quantify_key'])
    event.shapeless(Item.of('functionalstorage:configuration_tool'),['storagedrawers:shroud_key'])
    event.shapeless(Item.of('functionalstorage:configuration_tool'),['storagedrawers:drawer_key'])
})