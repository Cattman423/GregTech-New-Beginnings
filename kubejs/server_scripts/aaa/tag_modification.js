ServerEvents.tags('item', event => {
//Circuits
    event.add('gtceu:circuits/ulv', 'kubejs:conductive_mechanism')
    event.add('gtceu:circuits/ulv', 'kubejs:ulv_magneto_resonance_circuit')
    event.add('gtceu:circuits/lv', 'kubejs:lv_magneto_resonance_circuit')
    event.add('gtceu:circuits/mv', 'kubejs:mv_magneto_resonance_circuit')
    event.add('gtceu:circuits/hv', 'kubejs:hv_magneto_resonance_circuit')
    event.add('gtceu:circuits/ev', 'kubejs:ev_magneto_resonance_circuit')
    event.add('gtceu:circuits/iv', 'kubejs:iv_magneto_resonance_circuit')
    event.add('gtceu:circuits/luv', 'kubejs:luv_magneto_resonance_circuit')

    event.add('gtceu:circuits/zpm', 'kubejs:zpm_magneto_resonance_circuit')
    event.add('gtceu:circuits/zpm', 'kubejs:fungal_processor')

    event.add('gtceu:circuits/uv', 'kubejs:uv_magneto_resonance_circuit')
    event.add('gtceu:circuits/uv', 'kubejs:optical_processor')
    event.add('gtceu:circuits/uv', 'kubejs:fungal_processor_assembly')

    event.add('gtceu:circuits/uhv', 'kubejs:uhv_magneto_resonance_circuit')
    event.add('gtceu:circuits/uhv', 'kubejs:fungal_processor_computer')
    event.add('gtceu:circuits/uhv', 'kubejs:optical_processor_assembly')
    event.add('gtceu:circuits/uhv', 'kubejs:deep_space_processor')

    event.add('gtceu:circuits/uev', 'kubejs:uev_magneto_resonance_circuit')
    event.add('gtceu:circuits/uev', 'kubejs:fungal_processor_mainframe')
    event.add('gtceu:circuits/uev', 'kubejs:optical_processor_computer')
    event.add('gtceu:circuits/uev', 'kubejs:deep_space_processor_assembly')
    event.add('gtceu:circuits/uev', 'kubejs:singularity_processor')

    event.add('gtceu:circuits/uiv', 'kubejs:optical_processor_mainframe')
    event.add('gtceu:circuits/uiv', 'kubejs:deep_space_processor_computer')
    event.add('gtceu:circuits/uiv', 'kubejs:singularity_processor_assembly')
    event.add('gtceu:circuits/uiv', 'kubejs:4d_processor')

    event.add('gtceu:circuits/uxv', 'kubejs:deep_space_processor_mainframe')
    event.add('gtceu:circuits/uxv', 'kubejs:singularity_processor_computer')
    event.add('gtceu:circuits/uxv', 'kubejs:4d_processor_assembly')

    event.add('gtceu:circuits/opv', 'kubejs:singularity_processor_mainframe')
    event.add('gtceu:circuits/opv', 'kubejs:4d_processor_computer')

    event.add('gtceu:circuits/max', 'kubejs:4d_processor_mainframe')
//Lenses
    event.add('forge:lenses/red', 'gtceu:almandine_lens')
    event.add('forge:lenses/red', 'gtceu:cinnabar_lens')
    event.add('forge:lenses/red', 'gtceu:rutile_lens')
    event.add('forge:lenses/red', 'gtceu:pyrope_lens')
    event.add('forge:lenses/red', 'gtceu:realgar_lens')
    event.add('forge:lenses/red', 'gtceu:red_garnet_lens')
    event.add('forge:lenses/red', 'gtceu:rose_quartz_lens')

    event.add('forge:lenses/yellow', 'gtceu:andradite_lens')
    event.add('forge:lenses/yellow', 'gtceu:topaz_lens')
    event.add('forge:lenses/yellow', 'gtceu:yellow_garnet_lens')
    event.add('forge:lenses/yellow', 'gtceu:monazite_lens')
    event.add('forge:lenses/yellow', 'gtceu:prasiolite_lens')

    event.add('forge:lenses/light_blue', 'gtceu:blue_topaz_lens')
    event.add('forge:lenses/light_blue', 'gtceu:certus_quartz_lens')
    event.add('forge:lenses/light_blue', 'gtceu:enriched_certus_lens')
    event.add('forge:lenses/light_blue', 'gtceu:cubic_zirconium_lens')

    event.add('forge:lenses/black', 'gtceu:coal_lens')

    event.add('forge:lenses/lime', 'gtceu:green_sapphire_lens')
    event.add('forge:lenses/lime', 'gtceu:malachite_lens')
    event.add('forge:lenses/lime', 'gtceu:olivine_lens')

    event.add('forge:lenses/orange', 'gtceu:grossular_lens')
    event.add('forge:lenses/orange', 'gtceu:spessartine_lens')

    event.add('forge:lenses/blue', 'gtceu:lazurite_lens')
    event.add('forge:lenses/blue', 'gtceu:sodalite_lens')
    event.add('forge:lenses/blue', 'gtceu:lapis_lens')

    event.add('forge:lenses/white', 'gtceu:rock_salt_lens')
    event.add('forge:lenses/white', 'gtceu:salt_lens')
    event.add('forge:lenses/white', 'gtceu:nether_quartz_lens')
    event.add('forge:lenses/white', 'gtceu:quartzite_lens')

    event.add('forge:lenses/grey', 'gtceu:coke_lens')

    event.add('forge:lenses/brown', 'gtceu:lignite_lens')

    event.add('forge:lenses/green', 'gtceu:uvarovite_lens')
    event.add('forge:lenses/green', 'gtceu:cognitive_crystal_lens')

    event.add('forge:lenses/pink', 'gtceu:opal_lens')
    event.add('forge:lenses/pink', 'gtceu:magneto_resonatic_lens')

    event.add('forge:lenses/purple', 'gtceu:amethyst_lens')

    event.add('forge:lenses/cyan', 'gtceu:apatite_lens')
    event.add('forge:lenses/cyan', 'gtceu:lunite_lens')
//Glass
    event.add('forge:glass/colorless', '#chipped:glass')
    event.add('forge:glass/white', '#chipped:white_stained_glass')
    event.add('forge:glass/light_gray', '#chipped:light_gray_stained_glass')
    event.add('forge:glass/gray', '#chipped:gray_stained_glass')
    event.add('forge:glass/black', '#chipped:black_stained_glass')
    event.add('forge:glass/brown', '#chipped:brown_stained_glass')
    event.add('forge:glass/red', '#chipped:red_stained_glass')
    event.add('forge:glass/orange', '#chipped:orange_stained_glass')
    event.add('forge:glass/yellow', '#chipped:yellow_stained_glass')
    event.add('forge:glass/lime', '#chipped:lime_stained_glass')
    event.add('forge:glass/green', '#chipped:green_stained_glass')
    event.add('forge:glass/cyan', '#chipped:cyan_stained_glass')
    event.add('forge:glass/light_blue', '#chipped:light_blue_stained_glass')
    event.add('forge:glass/blue', '#chipped:blue_stained_glass')
    event.add('forge:glass/purple', '#chipped:purple_stained_glass')
    event.add('forge:glass/magenta', '#chipped:magenta_stained_glass')
    event.add('forge:glass/pink', '#chipped:pink_stained_glass')

    event.add('forge:glass_panes/colorless', '#chipped:colorless_stained_glass_pane')
    event.add('forge:glass_panes/white', '#chipped:white_stained_glass_pane')
    event.add('forge:glass_panes/light_gray', '#chipped:light_gray_stained_glass_pane')
    event.add('forge:glass_panes/gray', '#chipped:gray_stained_glass_pane')
    event.add('forge:glass_panes/black', '#chipped:black_stained_glass_pane')
    event.add('forge:glass_panes/brown', '#chipped:brown_stained_glass_pane')
    event.add('forge:glass_panes/red', '#chipped:red_stained_glass_pane')
    event.add('forge:glass_panes/orange', '#chipped:orange_stained_glass_pane')
    event.add('forge:glass_panes/yellow', '#chipped:yellow_stained_glass_pane')
    event.add('forge:glass_panes/lime', '#chipped:lime_stained_glass_pane')
    event.add('forge:glass_panes/green', '#chipped:green_stained_glass_pane')
    event.add('forge:glass_panes/cyan', '#chipped:cyan_stained_glass_pane')
    event.add('forge:glass_panes/light_blue', '#chipped:light_blue_stained_glass_pane')
    event.add('forge:glass_panes/blue', '#chipped:blue_stained_glass_pane')
    event.add('forge:glass_panes/purple', '#chipped:purple_stained_glass_pane')
    event.add('forge:glass_panes/magenta', '#chipped:magenta_stained_glass_pane')
    event.add('forge:glass_panes/pink', '#chipped:pink_stained_glass_pane')
//Tools
    event.add('forge:tools/screwdrivers', 'tfmg:screwdriver')
    event.add('createlowheated:burner_starters', 'minecraft:torch')
//Bakelite and Wood
    event.add('forge:small_bakelite', 'gtceu:small_wood_gear')
    event.add('forge:bakelite', 'gtceu:wood_gear')
    event.add('forge:small_bakelite', 'gtceu:small_bakelite_gear')
    event.add('forge:bakelite', 'gtceu:bakelite_gear')
//Curving Press
    event.add('vintageimprovements:curving_heads', 'gtceu:brick_wooden_form')
//Misc
    event.remove('minecraft:planks', 'gtceu:treated_wood_planks')
})

ServerEvents.tags('block', event => {
//Ore
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/sand')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/red_sand')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/gravel')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/moon_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/moon_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/moon_deepslate')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/moon_deepslate')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/mars_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/mars_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/venus_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/venus_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/venus_sandstone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/venus_sandstone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/mercury_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/mercury_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/glacio_stone')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/glacio_stone')
    event.add('minecraft:mineable/pickaxe', '#forge:ores_in_ground/permafrost')
    event.add('minecraft:needs_iron_tool', '#forge:ores_in_ground/permafrost')

    event.add('ad_astra:moon_stone_replaceables', 'minecraft:soul_soil')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:soul_soil')
//Block speed
    const concrete = ['gtceu:light_concrete', 'gtceu:light_concrete_cobblestone', 'gtceu:mossy_light_concrete_cobblestone', 'gtceu:polished_light_concrete', 
        'gtceu:light_concrete_bricks', 'gtceu:cracked_light_concrete_bricks', 'gtceu:mossy_light_concrete_bricks', 'gtceu:chiseled_light_concrete', 'gtceu:light_concrete_tile', 
        'gtceu:light_concrete_small_tile', 'gtceu:light_concrete_windmill_a', 'gtceu:light_concrete_windmill_b', 'gtceu:small_light_concrete_bricks', 
        'gtceu:square_light_concrete_bricks', 'gtceu:dark_concrete', 'gtceu:dark_concrete_cobblestone', 'gtceu:mossy_dark_concrete_cobblestone', 'gtceu:polished_dark_concrete', 
        'gtceu:dark_concrete_bricks', 'gtceu:cracked_dark_concrete_bricks', 'gtceu:mossy_dark_concrete_bricks', 'gtceu:chiseled_dark_concrete', 'gtceu:dark_concrete_tile', 
        'gtceu:dark_concrete_small_tile', 'gtceu:dark_concrete_windmill_a', 'gtceu:dark_concrete_windmill_b', 'gtceu:small_dark_concrete_bricks', 'gtceu:square_dark_concrete_bricks', 
        /*'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''*/]
    concrete.forEach(stone => {
        event.add('forge:concrete', stone)
    })
    event.add('forge:concrete', '#chipped:white_concrete')
    event.add('forge:concrete', '#chipped:light_concrete')
    event.add('forge:concrete', '#chipped:gray_concrete')
    event.add('forge:concrete', '#chipped:black_concrete')
    event.add('forge:concrete', '#chipped:brown_concrete')
    event.add('forge:concrete', '#chipped:red_concrete')
    event.add('forge:concrete', '#chipped:orange_concrete')
    event.add('forge:concrete', '#chipped:yellow_concrete')
    event.add('forge:concrete', '#chipped:lime_concrete')
    event.add('forge:concrete', '#chipped:green_concrete')
    event.add('forge:concrete', '#chipped:cyan_concrete')
    event.add('forge:concrete', '#chipped:light_blue_concrete')
    event.add('forge:concrete', '#chipped:blue_concrete')
    event.add('forge:concrete', '#chipped:purple_concrete')
    event.add('forge:concrete', '#chipped:magenta_concrete')
    event.add('forge:concrete', '#chipped:pink_concrete')

    event.add('blockrunner:very_quick_blocks', '#forge:concrete')
})

ServerEvents.tags('fluid', event => {
    event.add('forge:oil', 'tfmg:crude_oil_fluid')
    event.add('forge:oil', 'gtceu:oil')
})