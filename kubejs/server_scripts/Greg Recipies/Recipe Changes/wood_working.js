ServerEvents.recipes(event => {
//Functions
    function cutter(id, input, fluid, plank, dust, time){
        event.recipes.gtceu.cutter(id)
            .itemInputs(input)
            .inputFluids(fluid)
            .itemOutputs(plank, dust)
            .duration(time)
            .EUt(7)
    }
    function notool(output, input){
        event.shapeless(
            Item.of(output),
            [
                input
            ]
        )}
    function sawcraft(output, input){
        event.shaped(
            Item.of(output),
            [
                ' A ',
                ' B ',
                '   '
            ],
            {
                A: '#forge:tools/saws',
                B: input
            }
        )}
    function fencecraft(output, input){
        event.shaped(
            Item.of(output),
            [
                'ABA',
                'ABA',
                'ABA'
            ],
            {
                A: input,
                B: 'minecraft:stick'
            }
        )}
    function fenceass(id, input, fence){
        event.recipes.gtceu.assembler(id)
            .circuit(1)
            .itemInputs(input)
            .itemOutputs(fence)
            .duration(100)
            .EUt(4)
    }
    function fencegatecraftone(output, input){
        event.shaped(
            Item.of(output),
            [
                'C C',
                'ABA',
                'ABA'
            ],
            {
                A: input,
                B: 'minecraft:stick',
                C: 'minecraft:flint'
            }
        )}
    function fencegatecrafttwo(output, input){
        event.shaped(
            Item.of(output),
            [
                'CDC',
                'ABA',
                'ABA'
            ],
            {
                A: input,
                B: 'minecraft:stick',
                C: 'gtceu:iron_screw',
                D: '#forge:tools/screwdrivers'
            }
        )}
    function fencegateass(id, input, fence){
        event.recipes.gtceu.assembler(id)
            .circuit(2)
            .itemInputs(input, '2x minecraft:stick')
            .itemOutputs(fence)
            .duration(100)
            .EUt(4)
    }
    function doorcraft(output, input, trap){
        event.shaped(
            Item.of(output),
            [
                'ABE',
                'ACD',
                'AAF'
            ],
            {
                A: input,
                B: trap,
                C: 'gtceu:iron_ring',
                D: 'gtceu:iron_screw',
                E: '#forge:tools/screwdrivers',
                F: '#forge:tools/screwdrivers'
            }
        )}
    function doorass(id, input, inputtwo, door){
        event.recipes.gtceu.assembler(id)
            .itemInputs(input, inputtwo)
            .inputFluids('gtceu:iron 16')
            .itemOutputs(door)
            .duration(400)
            .EUt(4)
    }
    function trapcraft(output, input){
        event.shaped(
            Item.of(output),
            [
                'ABA',
                'BBB',
                'ABA'
            ],
            {
                A: input,
                B: 'minecraft:stick'
            }
        )}
    function bookcaseass(id, input, door){
        event.recipes.gtceu.assembler(id)
            .circuit(16)
            .itemInputs(input, 'minecraft:bookshelf')
            .itemOutputs(door)
            .duration(100)
            .EUt(4)
    }
//Minecraft
    const mcplanks = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']

    mcplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/' + base + '_water'
        let inp = '#minecraft:' + base + '_logs'
        let fluid = 'minecraft:water 5'
        let out = '4x minecraft:' + base + '_planks'
        let dust = '2x gtceu:wood_dust'
        let t = 400

        cutter(id, inp, fluid, out, dust, t)
    })

    mcplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/' + base + '_dist'
        let inp = '#minecraft:' + base + '_logs'
        let fluid = 'gtceu:distilled_water 3'
        let out = '4x minecraft:' + base + '_planks'
        let dust = '2x gtceu:wood_dust'
        let t = 300

        cutter(id, inp, fluid, out, dust, t)
    })

    mcplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/' + base + '_lube'
        let inp = '#minecraft:' + base + '_logs'
        let fluid = 'gtceu:lubricant 1'
        let out = '6x minecraft:' + base + '_planks'
        let dust = 'gtceu:wood_dust'
        let t = 200

        cutter(id, inp, fluid, out, dust, t)
    })

    cutter('kubejs:gtceu/cutter/wood_working/crimson_water', '#minecraft:crimson_stems', 'minecraft:water 5', '4x minecraft:crimson_planks', '2x gtceu:wood_dust', 400)
    cutter('kubejs:gtceu/cutter/wood_working/crimson_dist', '#minecraft:crimson_stems', 'gtceu:distilled_water 3', '4x minecraft:crimson_planks', '2x gtceu:wood_dust', 300)
    cutter('kubejs:gtceu/cutter/wood_working/crimson_lube', '#minecraft:crimson_stems', 'gtceu:lubricant 1', '6x minecraft:crimson_planks', 'gtceu:wood_dust', 200)
    cutter('kubejs:gtceu/cutter/wood_working/warped_water', '#minecraft:warped_stems', 'minecraft:water 5', '4x minecraft:warped_planks', '2x gtceu:wood_dust', 400)
    cutter('kubejs:gtceu/cutter/wood_working/warped_dist', '#minecraft:warped_stems', 'gtceu:distilled_water 3', '4x minecraft:warped_planks', '2x gtceu:wood_dust', 300)
    cutter('kubejs:gtceu/cutter/wood_working/warped_lube', '#minecraft:warped_stems', 'gtceu:lubricant 1', '6x minecraft:warped_planks', 'gtceu:wood_dust', 200)

//Biomes O Plenty
    const bopplanks = ['fir', 'redwood', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark']

    bopplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/' + base + '_water'
        let inp = '#biomesoplenty:' + base + '_logs'
        let fluid = 'minecraft:water 5'
        let out = '4x biomesoplenty:' + base + '_planks'
        let dust = '2x gtceu:wood_dust'
        let t = 400

        cutter(id, inp, fluid, out, dust, t)
    })

    bopplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/' + base + '_dist'
        let inp = '#biomesoplenty:' + base + '_logs'
        let fluid = 'gtceu:distilled_water 3'
        let out = '4x biomesoplenty:' + base + '_planks'
        let dust = '2x gtceu:wood_dust'
        let t = 300

        cutter(id, inp, fluid, out, dust, t)
    })

    bopplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/' + base + '_lube'
        let inp = '#biomesoplenty:' + base + '_logs'
        let fluid = 'gtceu:lubricant 1'
        let out = '6x biomesoplenty:' + base + '_planks'
        let dust = 'gtceu:wood_dust'
        let t = 200

        cutter(id, inp, fluid, out, dust, t)
    })

//Productive Trees
    const prodtreeplanks = ['alder', 'allspice', 'almond', 'apricot', 'aquilaria', 'asai_palm', 'ash', 'aspen', 'avocado', 'balsa', 'balsam_fir', 'banana', 'beech', 
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

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/prodtrees/' + base + '_water'
        let inp = '#productivetrees:' + base + '_logs'
        let fluid = 'minecraft:water 5'
        let out = '4x productivetrees:' + base + '_planks'
        let dust = '2x gtceu:wood_dust'
        let t = 400

        cutter(id, inp, fluid, out, dust, t)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/prodtrees/' + base + '_dist'
        let inp = '#productivetrees:' + base + '_logs'
        let fluid = 'gtceu:distilled_water 3'
        let out = '4x productivetrees:' + base + '_planks'
        let dust = '2x gtceu:wood_dust'
        let t = 300

        cutter(id, inp, fluid, out, dust, t)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/wood_working/prodtrees/' + base + '_lube'
        let inp = '#productivetrees:' + base + '_logs'
        let fluid = 'gtceu:lubricant 1'
        let out = '6x productivetrees:' + base + '_planks'
        let dust = 'gtceu:wood_dust'
        let t = 200

        cutter(id, inp, fluid, out, dust, t)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = '#productivetrees:' + base + '_logs'
        let out = '2x productivetrees:' + base + '_planks'

        notool(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = '#productivetrees:' + base + '_logs'
        let out = '4x productivetrees:' + base + '_planks'

        sawcraft(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_planks'
        let out = 'productivetrees:' + base + '_fence'

        fencecraft(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/wood_working/prodtrees/' + base + '_fence'
        let inp = 'productivetrees:' + base + '_planks'
        let out = 'productivetrees:' + base + '_fence'

        fenceass(id, inp, out)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_planks'
        let out = 'productivetrees:' + base + '_fence_gate'

        fencegatecraftone(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_planks'
        let out = '2x productivetrees:' + base + '_fence_gate'

        fencegatecrafttwo(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/wood_working/prodtrees/' + base + '_fence_gate'
        let inp = '2x productivetrees:' + base + '_planks'
        let out = 'productivetrees:' + base + '_fence_gate'

        fencegateass(id, inp, out)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_planks'
        let out = 'productivetrees:' + base + '_door'
        let trap = 'productivetrees:' + base + '_trapdoor'

        doorcraft(out, inp, trap)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/wood_working/prodtrees/' + base + '_trapdoor'
        let inp = '4x productivetrees:' + base + '_planks'
        let trap = 'productivetrees:' + base + '_trapdoor'
        let out = 'productivetrees:' + base + '_door'

        doorass(id, inp, trap, out)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_slab'
        let out = 'productivetrees:' + base + '_trapdoor'

        trapcraft(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_planks'
        let out = 'productivetrees:' + base + '_door'
        let trap = 'productivetrees:' + base + '_bookshelf'

        bookcaseass(out, inp, trap)
    })

//Misc
    cutter('water_rubber', 'gtceu:rubber_log', 'minecraft:water 5', '4x gtceu:rubber_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_rubber', 'gtceu:rubber_log', 'gtceu:distilled_water 3', '4x gtceu:rubber_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_rubber', 'gtceu:rubber_log', 'gtceu:lubricant 1', '6x gtceu:rubber_planks', 'gtceu:wood_dust', 200)

    cutter('water_c_walnut', '#caupona:walnut_log', 'minecraft:water 5', '4x caupona:walnut_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_c_walnut', '#caupona:walnut_log', 'gtceu:distilled_water 3', '4x caupona:walnut_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_c_walnut', '#caupona:walnut_log', 'gtceu:lubricant 1', '6x caupona:walnut_planks', 'gtceu:wood_dust', 400)

    cutter('water_charred_spruce', 'dawnoftimebuilder:charred_spruce_log_stripped', 'minecraft:water 5', '4x dawnoftimebuilder:charred_spruce_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_charred_spruce', 'dawnoftimebuilder:charred_spruce_log_stripped', 'gtceu:distilled_water 3', '4x dawnoftimebuilder:charred_spruce_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_charred_spruce', 'dawnoftimebuilder:charred_spruce_log_stripped', 'gtceu:lubricant 1', '6x dawnoftimebuilder:charred_spruce_planks', 'gtceu:wood_dust', 400)
    cutter('water_waxed_oak', 'dawnoftimebuilder:waxed_oak_log_stripped', 'minecraft:water 5', '4x dawnoftimebuilder:waxed_oak_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_waxed_oak', 'dawnoftimebuilder:waxed_oak_log_stripped', 'gtceu:distilled_water 3', '4x dawnoftimebuilder:waxed_oak_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_waxed_oak', 'dawnoftimebuilder:waxed_oak_log_stripped', 'gtceu:lubricant 1', '6x dawnoftimebuilder:waxed_oak_planks', 'gtceu:wood_dust', 400)

    cutter('water_aeronos', '#ad_astra:aeronos_caps', 'minecraft:water 5', '4x ad_astra:aeronos_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_aeronos', '#ad_astra:aeronos_caps', 'gtceu:distilled_water 3', '4x ad_astra:aeronos_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_aeronos', '#ad_astra:aeronos_caps', 'gtceu:lubricant 1', '6x ad_astra:aeronos_planks', 'gtceu:wood_dust', 400)
    cutter('water_strophar', '#ad_astra:strophar_caps', 'minecraft:water 5', '4x ad_astra:strophar_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_strophar', '#ad_astra:strophar_caps', 'gtceu:distilled_water 3', '4x ad_astra:strophar_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_strophar', '#ad_astra:strophar_caps', 'gtceu:lubricant 1', '6x ad_astra:strophar_planks', 'gtceu:wood_dust', 400)
    cutter('water_glacian', '#ad_astra:glacian_logs', 'minecraft:water 5', '4x ad_astra:glacian_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_glacian', '#ad_astra:glacian_logs', 'gtceu:distilled_water 3', '4x ad_astra:glacian_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_glacian', '#ad_astra:glacian_logs', 'gtceu:lubricant 1', '6x ad_astra:glacian_planks', 'gtceu:wood_dust', 400)

    notool('2x gtceu:rubber_planks', 'gtceu:rubber_log')
    notool('2x caupona:walnut_planks', '#caupona:walnut_log')
    notool('2x dawnoftimebuilder:charred_spruce_planks', 'dawnoftimebuilder:charred_spruce_log_stripped')
    notool('2x dawnoftimebuilder:waxed_oak_planks', 'dawnoftimebuilder:waxed_oak_log_stripped')
    notool('2x ad_astra:aeronos_planks', '#ad_astra:aeronos_caps')
    notool('2x ad_astra:strophar_planks', '#ad_astra:strophar_caps')
    notool('2x ad_astra:glacian_planks', '#ad_astra:glacian_logs')

    sawcraft('4x gtceu:rubber_planks', 'gtceu:rubber_log')
    sawcraft('4x caupona:walnut_planks', '#caupona:walnut_log')
    sawcraft('4x dawnoftimebuilder:charred_spruce_planks', 'dawnoftimebuilder:charred_spruce_log_stripped')
    sawcraft('4x dawnoftimebuilder:waxed_oak_planks', 'dawnoftimebuilder:waxed_oak_log_stripped')
    sawcraft('4x ad_astra:aeronos_planks', '#ad_astra:aeronos_caps')
    sawcraft('4x ad_astra:strophar_planks', '#ad_astra:strophar_caps')
    sawcraft('4x ad_astra:glacian_planks', '#ad_astra:glacian_logs')
})