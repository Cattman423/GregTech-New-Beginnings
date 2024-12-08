ServerEvents.recipes(event => {
    const mcplanks = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']
    const bopplanks = ['fir', 'redwood', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark']
    const prodtreeplanks = ['alder', 'allspice', 'almond', 'apricot', 'aquilaria', 'asai_palm', 'ash', 'aspen', 'avocado', 'balsa', 'balsam_fir', 'banana', 'beech', 'beliy_naliv_apple', 'blackthorn', 'black_cherry', 'black_ember', 'black_locust', 'blue_mahoe', 'boxwood', 'brazilwood', 'brazil_nut', 'breadfruit', 'brown_amber', 'buddhas_hand', 'bull_pine', 'butternut', 'cacao', 'candlenut', 'carob', 'cashew', 'cave_dweller', 'cedar', 'cempedak', 'ceylon_ebony', 'cherry_plum', 'cinnamon', 'citron', 'clove', 'cocobolo', 'coconut', 'coffea', 'copoazu', 'copper_beech', 'cork_oak', 'cultivated_pear', 'date_palm', 'dogwood', 'douglas_fir', 'elderberry', 'elm', 'european_larch', 'finger_lime', 'firecracker', 'flickering_sun', 'flowering_crabapple', 'foggy_blast', 'ginkgo', 'golden_delicious_apple', 'grandidiers_baobab', 'granny_smith_apple', 'grapefruit', 'great_sallow', 'greenheart', 'hawthorn', 'hazel', 'holly', 'hornbeam', 'ipe', 'iroko', 'jackfruit', 'juniper', 'kapok', 'key_lime', 'kumquat', 'lawson_cypress', 'lemon', 'lime', 'loblolly_pine', 'logwood', 'mahogany', 'mandarin', 'mango', 'monkey_puzzle', 'moonlight_magic_crepe_myrtle', 'myrtle_ebony', 'nectarine', 'night_fuchsia', 'nutmeg', 'old_fustic', 'olive', 'orange', 'osange_orange', 'padauk', 'pandanus', 'papaya', 'peach', 'pecan', 'persimmon', 'pink_ivory', 'pink_ipe', 'pistachio', 'plantain', 'plum', 'pomegranate', 'pomelo', 'prairie_crabapple', 'purpleheart', 'purple_blackthorn', 'purple_crepe_myrtle', 'purple_spiral', 'purple_ipe', 'rainbow_gum', 'red_banana', 'red_crepe_myrtle', 'red_delicious_apple', 'red_maple', 'rippling_willow', 'rosewood', 'rose_gum', 'rowan', 'rubber_tree', 'salak', 'sandalwood', 'sand_pear', 'satsuma', 'sequoia', 'silver_fir', 'silver_lime', 'slimy_delight', 'socotra_dragon', 'soul_tree', 'soursop', 'sour_cherry', 'sparkle_cherry', 'star_anise', 'star_fruit', 'sugar_apple', 'sugar_maple', 'swamp_gum', 'sweetgum', 'sweet_chestnut', 'sweet_crabapple', 'sycamore_fig', 'tangerine', 'teak', 'thunder_bolt', 'time_traveller', 'tuscarora_crepe_myrtle', 'blue_yonder', 'walnut', 'water_wonder', 'wenge', 'western_hemlock', 'whitebeam', 'white_poplar', 'white_ipe', 'white_willow', 'wild_cherry', 'yellow_meranti', 'yew', 'zebrano']

    /*mcplanks.forEach((base) => {
        event.recipes.create.cutting('4x minecraft:' + base + '_planks', 'minecraft:stripped_' + base + '_log')
        event.recipes.create.cutting('4x minecraft:' + base + '_planks', 'minecraft:stripped_' + base + '_wood')
    })
    bopplanks.forEach((base) => {
        event.recipes.create.cutting('4x biomesoplenty:' + base + '_planks', 'minecraft:stripped_' + base + '_log')
        event.recipes.create.cutting('4x biomesoplenty:' + base + '_planks', 'minecraft:stripped_' + base + '_wood')
    })
    prodtreeplanks.forEach((base) => {
        event.recipes.create.cutting('4x productivetrees:' + base + '_planks', 'minecraft:stripped_' + base + '_log')
        event.recipes.create.cutting('4x productivetrees:' + base + '_planks', 'minecraft:stripped_' + base + '_wood')
    })*/
})