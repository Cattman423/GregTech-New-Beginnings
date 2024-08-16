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

    function logging (id, input, fluid, output, outleaf, cout, fert, boosted){
        if (boosted) {
            event.recipes.gtceu.arboretum(id)
                .notConsumable(input)
                .inputFluids(fluid)
                .inputFluids(fert)
                .itemOutputs(output, outleaf)
                .chancedOutput(cout, 500, 0)
                .duration(min*2.5)
                .EUt(hv)
        } else {
            event.recipes.gtceu.arboretum(id)
                .notConsumable(input)
                .inputFluids(fluid)
                .itemOutputs(output, outleaf)
                .chancedOutput(cout, 1000, 0)
                .duration(min*5)
                .EUt(hv)
        }
    }

    const mctree = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'cherry']
    const boptree = [/*'origin', 'flowering_oak', 'snowblossom', 'rainbow_birch', 'yellow_autumn', 'orange_autumn', 'maple',*/ 'fir', 'redwood', 'mahogany', 'jacaranda', 
        'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark', ]
    const cauptree = ['walnut', 'fig', 'wolfberry']
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
        let id = 'kubejs:gtceu/arboretum/mc_' + base
        let input = '64x ' + 'minecraft:' + base + '_sapling'
        let output = '384x ' + 'minecraft:' + base + '_log'
        let outleaf = '192x ' + 'minecraft:' + base + '_leaves'
        let cout = '128x ' + 'minecraft:' + base + '_log'
        let water = 'minecraft:water 1000'
        let boostout = '576x ' + 'minecraft:' + base + '_log'
        let fert = 'sliceanddice:fertilizer 1000'

        logging(id, input, water, output, outleaf, cout, 'minecraft:air', false)
        logging(id + '_boosted', input, water, boostout, outleaf, cout, fert, true)
    })

    boptree.forEach( (base) => {
        let id = 'kubejs:gtceu/arboretum/bop_' + base
        let input = '64x ' + 'biomesoplenty:' + base + '_sapling'
        let output = '384x ' + 'biomesoplenty:' + base + '_log'
        let outleaf = '192x ' + 'biomesoplenty:' + base + '_leaves'
        let cout = '128x ' + 'biomesoplenty:' + base + '_log'
        let water = 'minecraft:water 1000'
        let boostout = '576x ' + 'biomesoplenty:' + base + '_log'
        let fert = 'sliceanddice:fertilizer 1000'

        logging(id, input, water, output, outleaf, cout, 'minecraft:air', false)
        logging(id + '_boosted', input, water, boostout, outleaf, cout, fert, true)
    })

    cauptree.forEach( (base) => {
        let id = 'kubejs:gtceu/arboretum/caup_' + base
        let input = '64x ' + 'caupona:' + base + '_sapling'
        let output = '384x ' + 'caupona:' + base + '_log'
        let outleaf = '192x ' + 'caupona:' + base + '_leaves'
        let cout = '128x ' + 'caupona:' + base + '_log'
        let water = 'minecraft:water 1000'
        let boostout = '576x ' + 'caupona:' + base + '_log'
        let fert = 'sliceanddice:fertilizer 1000'

        logging(id, input, water, output, outleaf, cout, 'minecraft:air', false)
        logging(id + '_boosted', input, water, boostout, outleaf, cout, fert, true)
    })

    prodtree.forEach( (base) => {
        let id = 'kubejs:gtceu/arboretum/mc_' + base
        let input = '64x ' + 'productivetrees:' + base + '_sapling'
        let output = '384x ' + 'productivetrees:' + base + '_log'
        let outleaf = '192x ' + 'productivetrees:' + base + '_leaves'
        let cout = '128x ' + 'productivetrees:' + base + '_log'
        let water = 'minecraft:water 1000'
        let boostout = '576x ' + 'productivetrees:' + base + '_log'
        let fert = 'sliceanddice:fertilizer 1000'

        logging(id, input, water, output, outleaf, cout, 'minecraft:air', false)
        logging(id + '_boosted', input, water, boostout, outleaf, cout, fert, true)
    })
})