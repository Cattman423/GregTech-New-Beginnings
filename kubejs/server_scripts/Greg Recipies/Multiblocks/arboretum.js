ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('arboretum')
        .circuit(6)
        .itemInputs(
            'gtceu:ev_machine_hull', 
            '4x #gtceu:circuits/ev', 
            '4x gtceu:stainless_steel_frame', 
            '4x gtceu:ev_electric_motor', 
            '16x gtceu:stainless_steel_small_fluid_pipe',
            '2x gtceu:fluid_filter'
        )
        .itemOutputs('gtceu:arboretum')
        .duration(min*5)
        .EUt(ev)

//Logging
    function logging (id, input, output, outleaf, boosted){
        if (boosted) {
            event.recipes.gtceu.logging(id)
                .circuit(1)
                .notConsumable(input)
                .inputFluids('gtceu:distilled_water 1000')
                .inputFluids('sliceanddice:fertilizer 1000')
                .itemOutputsRanged(output, 9, 720)
                .itemOutputsRanged(outleaf, 9, 288)
                .itemOutputsRanged('minecraft:stick', 9, 288)
                .duration(min*2.5)
                .EUt(hv)
        } else {
            event.recipes.gtceu.logging(id)
                .circuit(2)
                .notConsumable(input)
                .inputFluids('gtceu:distilled_water 1000')
                .itemOutputsRanged(output, 6, 480)
                .itemOutputsRanged(outleaf, 6, 192)
                .itemOutputsRanged('minecraft:stick', 6, 192)
                .duration(min*5)
                .EUt(hv)
        }
    }

    function loggingfruit (id, input, output, outleaf, fruit, boosted){
        if (boosted) {
            event.recipes.gtceu.logging(id)
                .circuit(1)
                .notConsumable(input)
                .inputFluids('gtceu:distilled_water 1000')
                .inputFluids('sliceanddice:fertilizer 1000')
                .itemOutputsRanged(output, 9, 720)
                .itemOutputsRanged(outleaf, 9, 288)
                .itemOutputsRanged('minecraft:stick', 9, 288)
                .itemOutputsRanged(fruit, 0, 27)
                .duration(min*2.5)
                .EUt(hv)
        } else {
            event.recipes.gtceu.logging(id)
                .circuit(2)
                .notConsumable(input)
                .inputFluids('gtceu:distilled_water 1000')
                .itemOutputsRanged(output, 6, 480)
                .itemOutputsRanged(outleaf, 6, 192)
                .itemOutputsRanged('minecraft:stick', 6, 192)
                .itemOutputsRanged(fruit, 0, 18)
                .duration(min*5)
                .EUt(hv)
        }
    }

    const mctree = ['spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'cherry']
    const boptree = [/*'origin', 'flowering_oak', 'snowblossom', 'rainbow_birch', 'yellow_autumn', 'orange_autumn', 'maple',*/ 'fir', 'redwood', 'mahogany', 'jacaranda', 
        'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark', ]
    const prodtree = ['alder', 'allspice', 'almond', 'apricot', 'aquilaria', 'asai_palm', 'ash', 'aspen', 'avocado', 'balsa', 'balsam_fir', 'banana', 'beech', 
        'beliy_naliv_apple', 'blackthorn', 'black_cherry', 'black_ember', 'black_locust', 'blue_mahoe', 'boxwood', 'brazilwood', 'brazil_nut', 'breadfruit', 'brown_amber', 
        'buddhas_hand', 'bull_pine', 'butternut', 'cacao', 'candlenut', 'carob', 'cashew', 'cave_dweller', 'cedar', 'cempedak', 'ceylon_ebony', 'cherry_plum', 'cinnamon', 
        'citron', 'clove', 'cocobolo', 'coconut', 'coffea', 'copoazu', 'copper_beech', 'cork_oak', 'cultivated_pear', 'date_palm', 'dogwood', 'douglas_fir', 'elderberry', 'elm', 
        'european_larch', 'finger_lime', 'firecracker', 'flickering_sun', 'flowering_crabapple', 'foggy_blast', 'ginkgo', 'golden_delicious_apple', 'grandidiers_baobab', 
        'granny_smith_apple', 'grapefruit', 'great_sallow', 'greenheart', 'hawthorn', 'hazel', 'holly', 'hornbeam', 'ipe', 'iroko', 'jackfruit', 'juniper', 'kapok', 'key_lime', 
        'kumquat', 'lawson_cypress', 'lemon', 'lime', 'loblolly_pine', 'logwood', 'mahogany', 'mandarin', 'mango', 'monkey_puzzle', 'moonlight_magic_crepe_myrtle', 'myrtle_ebony', 
        'nectarine', 'night_fuchsia', 'nutmeg', 'old_fustic', 'olive', 'orange', 'osange_orange', 'padauk', 'pandanus', 'papaya', 'peach', 'pecan', 'persimmon', 'pink_ivory', 
        'pink_ipe', 'pistachio', 'plantain', 'plum', 'pomegranate', 'pomelo', 'prairie_crabapple', 'purpleheart', 'purple_blackthorn', 'purple_crepe_myrtle', 'purple_spiral', 
        'purple_ipe', 'rainbow_gum', 'red_banana', 'red_crepe_myrtle', 'red_delicious_apple', 'red_maple', 'rippling_willow', 'rosewood', 'rose_gum', 'rowan', 'rubber_tree', 
        'salak', 'sandalwood', 'sand_pear', 'satsuma', 'sequoia', 'silver_fir', 'silver_lime', 'slimy_delight', 'socotra_dragon', 'soul_tree', 'soursop', 'sour_cherry', 
        'sparkle_cherry', 'star_anise', 'star_fruit', 'sugar_apple', 'sugar_maple', 'swamp_gum', 'sweetgum', 'sweet_chestnut', 'sweet_crabapple', 'sycamore_fig', 'tangerine', 
        'teak', 'thunder_bolt', 'time_traveller', 'tuscarora_crepe_myrtle', 'blue_yonder', 'walnut', 'water_wonder', 'wenge', 'western_hemlock', 'whitebeam', 'white_poplar', 
        'white_ipe', 'white_willow', 'wild_cherry', 'yellow_meranti', 'yew', 'zebrano']

    mctree.forEach( (base) => {
        let id = 'kubejs:gtceu/logging/mc_' + base
        let input = '64x ' + 'minecraft:' + base + '_sapling'
        let output = 'minecraft:' + base + '_log'
        let outleaf = 'minecraft:' + base + '_leaves'

        logging(id, input, output, outleaf, false)
        logging(id + '_boosted', input, output, outleaf, true)
    })
    loggingfruit('kubejs:gtceu/logging/mc_oak', '64x minecraft:oak_sapling', 'minecraft:oak_log', 'minecraft:oak_leaves', 'minecraft:apple', false)
    loggingfruit('kubejs:gtceu/logging/mc_oak_boosted', '64x minecraft:oak_sapling', 'minecraft:oak_log', 'minecraft:oak_leaves', 'minecraft:apple', true)

    boptree.forEach( (base) => {
        let id = 'kubejs:gtceu/logging/bop_' + base
        let input = '64x ' + 'biomesoplenty:' + base + '_sapling'
        let output = 'biomesoplenty:' + base + '_log'
        let outleaf = 'biomesoplenty:' + base + '_leaves'

        logging(id, input, output, outleaf, false)
        logging(id + '_boosted', input, output, outleaf, true)
    })

    prodtree.forEach( (base) => {
        let id = 'kubejs:gtceu/logging/prod_' + base
        let input = '64x ' + 'productivetrees:' + base + '_sapling'
        let output = 'productivetrees:' + base + '_log'
        let outleaf = 'productivetrees:' + base + '_leaves'

        logging(id, input, output, outleaf, false)
        logging(id + '_boosted', input, output, outleaf, true)
    })
    
    //Caupona
    loggingfruit('kubejs:gtceu/logging/caup_walnut', '64x caupona:walnut_sapling', 'caupona:walnut_log', 'caupona:walnut_leaves', 'caupona:walnut', false)
    loggingfruit('kubejs:gtceu/logging/caup_walnut_boosted', '64x caupona:walnut_sapling', 'caupona:walnut_log', 'caupona:walnut_leaves', 'caupona:walnut', true)
    loggingfruit('kubejs:gtceu/logging/caup_fig', '64x caupona:fig_sapling', 'caupona:fig_log', 'caupona:fig_leaves', 'caupona:fig', false)
    loggingfruit('kubejs:gtceu/logging/caup_fig_boosted', '64x caupona:fig_sapling', 'caupona:fig_log', 'caupona:fig_leaves', 'caupona:fig', true)
    loggingfruit('kubejs:gtceu/logging/caup_wolfberry', '64x caupona:wolfberry_sapling', 'caupona:wolfberry_log', 'caupona:wolfberry_leaves', 'caupona:wolfberries', false)
    loggingfruit('kubejs:gtceu/logging/caup_wolfberry_boosted', '64x caupona:wolfberry_sapling', 'caupona:wolfberry_log', 'caupona:wolfberry_leaves', 'caupona:wolfberries', true)

    /*
    loggingfruit('kubejs:gtceu/logging/', '64x _sapling', '_log', '_leaves', '', false)
    loggingfruit('kubejs:gtceu/logging/_boosted', '64x _sapling', '_log', '_leaves', '', true)
    */

//Orchard
    function orchard (id, input, fruit, boosted){
        if (boosted) {
            event.recipes.gtceu.orchard(id)
                .circuit(1)
                .notConsumable(input)
                .inputFluids('gtceu:distilled_water 1000')
                .inputFluids('sliceanddice:fertilizer 1000')
                .itemOutputsRanged(fruit, 9, 720)
                .itemOutputsRanged('gtceu:plant_ball', 0, 54)
                .itemOutputsRanged('minecraft:stick', 0, 36)
                .duration(min*5)
                .EUt(hv)
        } else {
            event.recipes.gtceu.orchard(id)
                .circuit(2)
                .notConsumable(input)
                .inputFluids('gtceu:distilled_water 1000')
                .itemOutputsRanged(fruit, 6, 480)
                .itemOutputsRanged('gtceu:plant_ball', 0, 36)
                .itemOutputsRanged('minecraft:stick', 0, 24)
                .duration(min*10)
                .EUt(hv)
        }
    }

    const pamtrees = ['avocado', 'candlenut', 'cherry', 'chestnut', 'gooseberry', 'lemon', 'nutmeg', 'orange', 'peach', 'pear', 'plum', 'walnut', 'hazelnut', 'pawpaw', 'soursop', 
        'acorn', 'almond', 'apricot', 'banana', 'cashew', 'cinnamon', 'coconut', 'date', 'dragonfruit', 'durian', 'fig', 'grapefruit', 'lime', 'mango', 'olive', 'papaya', 'pecan', 
        'peppercorn', 'persimmon', 'pistachio', 'pomegranate', 'starfruit', 'vanillabean', 'breadfruit', 'guava', 'jackfruit', 'lychee', 'passionfruit', 'rambutan', 'tamarind', 
        'pinenut']
    const prodorchard = ['allspice', 'almond', 'apricot', 'avocado', 'banana', 'beliy_naliv_apple', 'black_cherry', 'brazil_nut', 'breadfruit', 
        'buddhas_hand', 'butternut', 'candlenut', 'carob', 'cashew', 'cempedak', 'cherry_plum', 'cinnamon', 
        'citron', 'clove', 'coconut', 'copoazu', 'elderberry', 'finger_lime', 'flowering_crabapple', 'golden_delicious_apple', 
        'granny_smith_apple', 'grapefruit', 'jackfruit', 'key_lime', 'kumquat', 'lemon', 'lime', 'mandarin', 'mango', 
        'nectarine', 'nutmeg', 'olive', 'orange', 'osange_orange', 'papaya', 'peach', 'pecan', 'persimmon', 
        'pistachio', 'plantain', 'plum', 'pomegranate', 'pomelo', 'prairie_crabapple', 'red_banana', 'rowan', 
        'sand_pear', 'satsuma', 'soursop', 'sour_cherry', 'star_anise', 'star_fruit', 'sweet_crabapple', 'tangerine', 
        'walnut', 'wild_cherry']
    const fruitsdel = ['pear', 'hawberry', 'lychee', 'mango', 'persimmon', 'peach', 'orange', 'mangosteen', 'bayberry', 'kiwi', 'fig', 'durian']

    pamtrees.forEach( (base) => {
        let id = 'kubejs:gtceu/orchard/pam_' + base
        let input = '64x ' + 'pamhc2trees:' + base + '_sapling'
        let output = 'pamhc2trees:' + base + 'item'

        orchard(id, input, output, false)
        orchard(id + '_boosted', input, output, true)
    })
    orchard('kubejs:gtceu/orchard/pam_apple', '64x pamhc2trees:apple_sapling', 'minecraft:apple', false)
    orchard('kubejs:gtceu/orchard/pam_apple_boosted', '64x pamhc2trees:apple_sapling', 'minecraft:apple', true)
    orchard('kubejs:gtceu/orchard/pam_maple', '64x pamhc2trees:maple_sapling', 'pamhc2trees:maplesyrupitem', false)
    orchard('kubejs:gtceu/orchard/pam_maple_boosted', '64x pamhc2trees:maple_sapling', 'pamhc2trees:maplesyrupitem', true)

    prodorchard.forEach( (base) => {
        let id = 'kubejs:gtceu/orchard/prod_' + base
        let input = '64x ' + 'productivetrees:' + base + '_sapling'
        let output = 'productivetrees:' + base

        orchard(id, input, output, false)
        orchard(id + '_boosted', input, output, true)
    })
    orchard('kubejs:gtceu/orchard/prod_coffea', '64x productivetrees:coffea_sapling', 'productivetrees:coffee_bean', false)
    orchard('kubejs:gtceu/orchard/prod_coffea_boosted', '64x productivetrees:coffea_sapling', 'productivetrees:coffee_bean', true)
    orchard('kubejs:gtceu/orchard/prod_beech', '64x productivetrees:beech_sapling', 'productivetrees:beechnut', false)
    orchard('kubejs:gtceu/orchard/prod_beech_boosted', '64x productivetrees:beech_sapling', 'productivetrees:beechnut', true)
    orchard('kubejs:gtceu/orchard/prod_blackthorn', '64x productivetrees:blackthorn_sapling', 'productivetrees:sloe', false)
    orchard('kubejs:gtceu/orchard/prod_blackthorn_boosted', '64x productivetrees:blackthorn_sapling', 'productivetrees:sloe', true)
    orchard('kubejs:gtceu/orchard/prod_grandidiers_baobab', '64x productivetrees:grandidiers_baobab_sapling', 'productivetrees:baobab_fruit', false)
    orchard('kubejs:gtceu/orchard/prod_grandidiers_baobab_boosted', '64x productivetrees:grandidiers_baobab_sapling', 'productivetrees:baobab_fruit', true)
    orchard('kubejs:gtceu/orchard/prod_red_delicious_apple', '64x productivetrees:red_delicious_apple_sapling', 'minecraft:apple', false)
    orchard('kubejs:gtceu/orchard/prod_red_delicious_apple_boosted', '64x productivetrees:red_delicious_apple_sapling', 'minecraft:apple', true)
    orchard('kubejs:gtceu/orchard/prod_salak', '64x productivetrees:salak_sapling', 'productivetrees:snake_fruit', false)
    orchard('kubejs:gtceu/orchard/prod_salak_boosted', '64x productivetrees:salak_sapling', 'productivetrees:snake_fruit', true)
    orchard('kubejs:gtceu/orchard/prod_ginkgo', '64x productivetrees:ginkgo_sapling', 'productivetrees:ginkgo_nut', false)
    orchard('kubejs:gtceu/orchard/prod_ginkgo_boosted', '64x productivetrees:ginkgo_sapling', 'productivetrees:ginkgo_nut', true)
    orchard('kubejs:gtceu/orchard/prod_hawthorn', '64x productivetrees:hawthorn_sapling', 'productivetrees:haw', false)
    orchard('kubejs:gtceu/orchard/prod_hawthorn_boosted', '64x productivetrees:hawthorn_sapling', 'productivetrees:haw', true)
    orchard('kubejs:gtceu/orchard/prod_asai_palm', '64x productivetrees:asai_palm_sapling', 'productivetrees:asai_berry', false)
    orchard('kubejs:gtceu/orchard/prod_asai_palm_boosted', '64x productivetrees:asai_palm_sapling', 'productivetrees:asai_berry', true)
    orchard('kubejs:gtceu/orchard/prod_copper_beech', '64x productivetrees:copper_beech_sapling', 'productivetrees:beechnut', false)
    orchard('kubejs:gtceu/orchard/prod_copper_beech_boosted', '64x productivetrees:copper_beech_sapling', 'productivetrees:beechnut', true)
    orchard('kubejs:gtceu/orchard/prod_sycamore_fig', '64x productivetrees:sycamore_fig_sapling', 'productivetrees:fig', false)
    orchard('kubejs:gtceu/orchard/prod_sycamore_fig_boosted', '64x productivetrees:sycamore_fig_sapling', 'productivetrees:fig', true)
    orchard('kubejs:gtceu/orchard/prod_sugar_apple', '64x productivetrees:sugar_apple_sapling', 'productivetrees:sweetsop', false)
    orchard('kubejs:gtceu/orchard/prod_sugar_apple_boosted', '64x productivetrees:sugar_apple_sapling', 'productivetrees:sweetsop', true)
    orchard('kubejs:gtceu/orchard/prod_sweet_chestnut', '64x productivetrees:sweet_chestnut_sapling', 'productivetrees:chestnut', false)
    orchard('kubejs:gtceu/orchard/prod_sweet_chestnut_boosted', '64x productivetrees:sweet_chestnut_sapling', 'productivetrees:chestnut', true)
    orchard('kubejs:gtceu/orchard/prod_pandanus', '64x productivetrees:pandanus_sapling', 'productivetrees:hala_fruit', false)
    orchard('kubejs:gtceu/orchard/prod_pandanus_boosted', '64x productivetrees:pandanus_sapling', 'productivetrees:hala_fruit', true)
    orchard('kubejs:gtceu/orchard/prod_sparkle_cherry', '64x productivetrees:sparkle_cherry_sapling', 'productivetrees:sparkling_cherry', false)
    orchard('kubejs:gtceu/orchard/prod_sparkle_cherry_boosted', '64x productivetrees:sparkle_cherry_sapling', 'productivetrees:sparkling_cherry', true)
    orchard('kubejs:gtceu/orchard/prod_purple_blackthorn', '64x productivetrees:purple_blackthorn_sapling', 'productivetrees:sloe', false)
    orchard('kubejs:gtceu/orchard/prod_purple_blackthorn_boosted', '64x productivetrees:purple_blackthorn_sapling', 'productivetrees:sloe', true)
    orchard('kubejs:gtceu/orchard/prod_cultivated_pear', '64x productivetrees:cultivated_pear_sapling', 'productivetrees:pear', false)
    orchard('kubejs:gtceu/orchard/prod_cultivated_pear_boosted', '64x productivetrees:cultivated_pear_sapling', 'productivetrees:pear', true)
    orchard('kubejs:gtceu/orchard/prod_hazel', '64x productivetrees:hazel_sapling', 'productivetrees:hazelnut', false)
    orchard('kubejs:gtceu/orchard/prod_hazel_boosted', '64x productivetrees:hazel_sapling', 'productivetrees:hazelnut', true)
    orchard('kubejs:gtceu/orchard/prod_juniper', '64x productivetrees:juniper_sapling', 'productivetrees:juniper_berry', false)
    orchard('kubejs:gtceu/orchard/prod_juniper_boosted', '64x productivetrees:juniper_sapling', 'productivetrees:juniper_berry', true)
    orchard('kubejs:gtceu/orchard/prod_blue_yonder', '64x productivetrees:blue_yonder_sapling', 'productivetrees:planet_peach', false)
    orchard('kubejs:gtceu/orchard/prod_blue_yonder_boosted', '64x productivetrees:blue_yonder_sapling', 'productivetrees:planet_peach', true)
    orchard('kubejs:gtceu/orchard/prod_date_palm', '64x productivetrees:date_palm_sapling', 'productivetrees:date', false)
    orchard('kubejs:gtceu/orchard/prod_date_palm_boosted', '64x productivetrees:date_palm_sapling', 'productivetrees:date', true)

    fruitsdel.forEach( (base) => {
        let id = 'kubejs:gtceu/orchard/fruit_' + base
        let input = '64x ' + 'fruitsdelight:' + base + '_sapling'
        let output = 'fruitsdelight:' + base

        orchard(id, input, output, false)
        orchard(id + '_boosted', input, output, true)
    })
    orchard('kubejs:gtceu/orchard/fruit_apple', '64x fruitsdelight:apple_sapling', 'minecraft:apple', false)
    orchard('kubejs:gtceu/orchard/fruit_apple_boosted', '64x fruitsdelight:apple_sapling', 'minecraft:apple', true)

    /*
    orchard('kubejs:gtceu/orchard/', '64x _sapling', '', false)
    orchard('kubejs:gtceu/orchard/_boosted', '64x _sapling', '', true)
    orchard('kubejs:gtceu/orchard/prod_', '64x productivetrees:_sapling', 'productivetrees:', false)
    orchard('kubejs:gtceu/orchard/prod__boosted', '64x productivetrees:_sapling', 'productivetrees:', true)
    */
})