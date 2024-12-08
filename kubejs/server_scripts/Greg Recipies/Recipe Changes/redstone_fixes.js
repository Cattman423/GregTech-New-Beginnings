ServerEvents.recipes(event => {
    function woodpressureplate(output, input){
        event.shaped(
            Item.of(output),
            [
                'DAD',
                'BCB',
                'DED'
            ],
            {
                A: '#forge:tools/mallets',
                B: input,
                C: 'gtceu:iron_spring',
                D: 'gtceu:wood_bolt',
                E: '#forge:tools/screwdrivers'
            }
        )
    }
    function stonepressureplate(output, input){
        event.shaped(
            Item.of(output),
            [
                'DAD',
                'BCB',
                'DED'
            ],
            {
                A: '#forge:tools/hammers',
                B: input,
                C: 'gtceu:iron_spring',
                D: 'gtceu:iron_screw',
                E: '#forge:tools/screwdrivers'
            }
        )
    }
    function pressureplateass(id, output, input){
        event.recipes.gtceu.assembler(id)
            .itemInputs(input, 'gtceu:iron_spring')
            .itemOutputs(output)
            .duration(100)
            .EUt(7)
    }
    function buttoncraft(output, input){
        event.shaped(
            Item.of(output),
            [
                '   ',
                'AB ',
                '   '
            ],
            {
                A: '#forge:tools/saws',
                B: input
            }
        )
    }
    function buttoncutter(id, input, fluid, output, time){
        event.recipes.gtceu.cutter(id)
            .itemInputs(input)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(time)
            .EUt(7)
    }

    woodpressureplate('2x minecraft:cherry_pressure_plate', 'minecraft:cherry_slab')
    woodpressureplate('2x minecraft:bamboo_pressure_plate', 'minecraft:bamboo_slab')
    woodpressureplate('2x framedblocks:framed_pressure_plate', 'framedblocks:framed_slab')
    woodpressureplate('2x caupona:walnut_pressure_plate', 'caupona:walnut_slab')

    stonepressureplate('2x minecraft:polished_blackstone_pressure_plate', 'minecraft:polished_blackstone_slab')
    stonepressureplate('2x framedblocks:framed_stone_pressure_plate', 'framedblocks:framed_slab')
    /*stonepressureplate('2x ad_astra:iron_plating_pressure_plate', 'ad_astra:iron_plating_slab')
    stonepressureplate('2x ad_astra:steel_plating_pressure_plate', 'ad_astra:steel_plating_slab')
    stonepressureplate('2x ad_astra:desh_plating_pressure_plate', 'ad_astra:desh_plating_slab')
    stonepressureplate('2x ad_astra:ostrum_plating_pressure_plate', 'ad_astra:ostrum_plating_slab')
    stonepressureplate('2x ad_astra:calorite_plating_pressure_plate', 'ad_astra:calorite_plating_slab')
    stonepressureplate('2x ad_astra:glacian_pressure_plate', 'ad_astra:glacian_slab')*/

    pressureplateass('cherry_pressure_plate', '2x minecraft:cherry_pressure_plate', '2x minecraft:cherry_slab')
    pressureplateass('bamboo_pressure_plate', '2x minecraft:bamboo_pressure_plate', '2x minecraft:bamboo_slab')
    pressureplateass('framed_pressure_plate', '2x framedblocks:framed_pressure_plate', '2x framedblocks:framed_slab')
    pressureplateass('walnut_pressure_plate', '2x caupona:walnut_pressure_plate', '2x caupona:walnut_slab')
    pressureplateass('polished_blackstone_pressure_plate', '2x minecraft:polished_blackstone_pressure_plate', '2x minecraft:polished_blackstone_slab')
    pressureplateass('framed_stone_pressure_plate', '2x framedblocks:framed_stone_pressure_plate', '2x framedblocks:framed_stone_slab')
    /*pressureplateass('iron_plating_plate', '2x ad_astra:iron_plating_pressure_plate', '2x ad_astra:iron_plating_slab')
    pressureplateass('steel_plating_plate', '2x ad_astra:steel_plating_pressure_plate', '2x ad_astra:steel_plating_slab')
    pressureplateass('desh_plating_plate', '2x ad_astra:desh_plating_pressure_plate', '2x ad_astra:desh_plating_slab')
    pressureplateass('ostrum_plating_plate', '2x ad_astra:ostrum_plating_pressure_plate', '2x ad_astra:ostrum_plating_slab')
    pressureplateass('calorite_plating_plate', '2x ad_astra:calorite_plating_pressure_plate', '2x ad_astra:calorite_plating_slab')
    pressureplateass('glacian_plate', '2x ad_astra:glacian_pressure_plate', '2x ad_astra:glacian_slab')*/

    buttoncraft('6x minecraft:polished_blackstone_button', 'minecraft:polished_blackstone_pressure_plate')
    buttoncraft('6x biomesoplenty:fir_button', 'biomesoplenty:fir_pressure_plate')
    buttoncraft('6x biomesoplenty:redwood_button', 'biomesoplenty:redwood_pressure_plate')
    buttoncraft('6x biomesoplenty:mahogany_button', 'biomesoplenty:mahogany_pressure_plate')
    buttoncraft('6x biomesoplenty:jacaranda_button', 'biomesoplenty:jacaranda_pressure_plate')
    buttoncraft('6x biomesoplenty:palm_button', 'biomesoplenty:palm_pressure_plate')
    buttoncraft('6x biomesoplenty:willow_button', 'biomesoplenty:willow_pressure_plate')
    buttoncraft('6x biomesoplenty:dead_button', 'biomesoplenty:dead_pressure_plate')
    buttoncraft('6x biomesoplenty:magic_button', 'biomesoplenty:magic_pressure_plate')
    buttoncraft('6x biomesoplenty:umbran_button', 'biomesoplenty:umbran_pressure_plate')
    buttoncraft('6x biomesoplenty:hellbark_button', 'biomesoplenty:hellbark_pressure_plate')
    buttoncraft('6x framedblocks:framed_button', 'framedblocks:framed_pressure_plate')
    buttoncraft('6x framedblocks:framed_stone_button', 'framedblocks:framed_stone_pressure_plate')
    buttoncraft('6x caupona:walnut_button', 'caupona:walnut_pressure_plate')
    /*buttoncraft('6x ad_astra:iron_plating_button', 'ad_astra:iron_plating_pressure_plate')
    buttoncraft('6x ad_astra:steel_plating_button', 'ad_astra:steel_plating_pressure_plate')
    buttoncraft('6x ad_astra:desh_plating_button', 'ad_astra:desh_plating_pressure_plate')
    buttoncraft('6x ad_astra:ostrum_plating_button', 'ad_astra:ostrum_plating_pressure_plate')
    buttoncraft('6x ad_astra:calorite_plating_button', 'ad_astra:calorite_plating_pressure_plate')
    buttoncraft('6x ad_astra:glacian_button', 'ad_astra:glacian_pressure_plate')*/
    
    buttoncutter('water_cherry_button', 'minecraft:cherry_pressure_plate', 'minecraft:water 4', '12x minecraft:cherry_button', 50)
    buttoncutter('dist_water_cherry_button', 'minecraft:cherry_pressure_plate', 'gtceu:distilled_water 3', '12x minecraft:cherry_button', 37)
    buttoncutter('lube_cherry_button', 'minecraft:cherry_pressure_plate', 'gtceu:lubricant 1', '12x minecraft:cherry_button', 25)
    buttoncutter('water_bamboo_button', 'minecraft:bamboo_pressure_plate', 'minecraft:water 4', '12x minecraft:bamboo_button', 50)
    buttoncutter('dist_water_bamboo_button', 'minecraft:bamboo_pressure_plate', 'gtceu:distilled_water 3', '12x minecraft:bamboo_button', 37)
    buttoncutter('lube_bamboo_button', 'minecraft:bamboo_pressure_plate', 'gtceu:lubricant 1', '12x minecraft:bamboo_button', 25)
    buttoncutter('water_polished_blackstone', 'minecraft:polished_blackstone_pressure_plate', 'minecraft:water 4', '12x minecraft:polished_blackstone_button', 50)
    buttoncutter('dist_water_polished_blackstone', 'minecraft:polished_blackstone_pressure_plate', 'gtceu:distilled_water 3', '12x minecraft:polished_blackstone_button', 37)
    buttoncutter('lube_polished_blackstone', 'minecraft:polished_blackstone_pressure_plate', 'gtceu:lubricant 1', '12x minecraft:polished_blackstone_button', 25)
    buttoncutter('water_fir_button', 'biomesoplenty:fir_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:fir_button', 50)
    buttoncutter('dist_water_fir_button', 'biomesoplenty:fir_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:fir_button', 37)
    buttoncutter('lube_fir_button', 'biomesoplenty:fir_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:fir_button', 25)
    buttoncutter('water_redwood_button', 'biomesoplenty:redwood_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:redwood_button', 50)
    buttoncutter('dist_water_redwood_button', 'biomesoplenty:redwood_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:redwood_button', 37)
    buttoncutter('lube_redwood_button', 'biomesoplenty:redwood_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:redwood_button', 25)
    buttoncutter('water_mahogany_button', 'biomesoplenty:mahogany_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:mahogany_button', 50)
    buttoncutter('dist_water_mahogany_button', 'biomesoplenty:mahogany_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:mahogany_button', 37)
    buttoncutter('lube_mahogany_button', 'biomesoplenty:mahogany_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:mahogany_button', 25)
    buttoncutter('water_jacaranda_button', 'biomesoplenty:jacaranda_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:jacaranda_button', 50)
    buttoncutter('dist_water_jacaranda_button', 'biomesoplenty:jacaranda_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:jacaranda_button', 37)
    buttoncutter('lube_jacaranda_button', 'biomesoplenty:jacaranda_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:jacaranda_button', 25)
    buttoncutter('water_palm_button', 'biomesoplenty:palm_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:palm_button', 50)
    buttoncutter('dist_water_palm_button', 'biomesoplenty:palm_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:palm_button', 37)
    buttoncutter('lube_palm_button', 'biomesoplenty:palm_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:palm_button', 25)
    buttoncutter('water_willow_button', 'biomesoplenty:willow_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:willow_button', 50)
    buttoncutter('dist_water_willow_button', 'biomesoplenty:willow_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:willow_button', 37)
    buttoncutter('lube_willow_button', 'biomesoplenty:willow_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:willow_button', 25)
    buttoncutter('water_dead_button', 'biomesoplenty:dead_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:dead_button', 50)
    buttoncutter('dist_water_dead_button', 'biomesoplenty:dead_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:dead_button', 37)
    buttoncutter('lube_dead_button', 'biomesoplenty:dead_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:dead_button', 25)
    buttoncutter('water_magic_button', 'biomesoplenty:magic_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:magic_button', 50)
    buttoncutter('dist_water_magic_button', 'biomesoplenty:magic_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:magic_button', 37)
    buttoncutter('lube_magic_button', 'biomesoplenty:magic_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:magic_button', 25)
    buttoncutter('water_umbran_button', 'biomesoplenty:umbran_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:umbran_button', 50)
    buttoncutter('dist_water_umbran_button', 'biomesoplenty:umbran_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:umbran_button', 37)
    buttoncutter('lube_umbran_button', 'biomesoplenty:umbran_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:umbran_button', 25)
    buttoncutter('water_hellbark_button', 'biomesoplenty:hellbark_pressure_plate', 'minecraft:water 4', '12x biomesoplenty:hellbark_button', 50)
    buttoncutter('dist_water_hellbark_button', 'biomesoplenty:hellbark_pressure_plate', 'gtceu:distilled_water 3', '12x biomesoplenty:hellbark_button', 37)
    buttoncutter('lube_hellbark_button', 'biomesoplenty:hellbark_pressure_plate', 'gtceu:lubricant 1', '12x biomesoplenty:hellbark_button', 25)
    buttoncutter('water_framed_button', 'framedblocks:framed_pressure_plate', 'minecraft:water 4', '12x framedblocks:framed_button', 50)
    buttoncutter('dist_water_framed_button', 'framedblocks:framed_pressure_plate', 'gtceu:distilled_water 3', '12x framedblocks:framed_button', 37)
    buttoncutter('lube_framed_button', 'framedblocks:framed_pressure_plate', 'gtceu:lubricant 1', '12x framedblocks:framed_button', 25)
    buttoncutter('water_framed_stone_button', 'framedblocks:framed_stone_pressure_plate', 'minecraft:water 4', '12x framedblocks:framed_stone_button', 50)
    buttoncutter('dist_water_framed_stone_button', 'framedblocks:framed_stone_pressure_plate', 'gtceu:distilled_water 3', '12x framedblocks:framed_stone_button', 37)
    buttoncutter('lube_framed_stone_button', 'framedblocks:framed_stone_pressure_plate', 'gtceu:lubricant 1', '12x framedblocks:framed_stone_button', 25)
    buttoncutter('water_walnut_button', 'caupona:walnut_pressure_plate', 'minecraft:water 4', '12x caupona:walnut_button', 50)
    buttoncutter('dist_water_walnut_button', 'caupona:walnut_pressure_plate', 'gtceu:distilled_water 3', '12x caupona:walnut_button', 37)
    buttoncutter('lube_walnut_button', 'caupona:walnut_pressure_plate', 'gtceu:lubricant 1', '12x caupona:walnut_button', 25)
    /*buttoncutter('water_iron_plating_button', 'ad_astra:iron_plating_pressure_plate', 'minecraft:water 4', '12x ad_astra:iron_plating_button', 50)
    buttoncutter('dist_water_iron_plating_button', 'ad_astra:iron_plating_pressure_plate', 'gtceu:distilled_water 3', '12x ad_astra:iron_plating_button', 37)
    buttoncutter('lube_iron_plating_button', 'ad_astra:iron_plating_pressure_plate', 'gtceu:lubricant 1', '12x ad_astra:iron_plating_button', 25)
    buttoncutter('water_steel_plating_button', 'ad_astra:steel_plating_pressure_plate', 'minecraft:water 4', '12x ad_astra:steel_plating_button', 50)
    buttoncutter('dist_water_steel_plating_button', 'ad_astra:steel_plating_pressure_plate', 'gtceu:distilled_water 3', '12x ad_astra:steel_plating_button', 37)
    buttoncutter('lube_steel_plating_button', 'ad_astra:steel_plating_pressure_plate', 'gtceu:lubricant 1', '12x ad_astra:steel_plating_button', 25)
    buttoncutter('water_desh_plating_button', 'ad_astra:desh_plating_pressure_plate', 'minecraft:water 4', '12x ad_astra:desh_plating_button', 50)
    buttoncutter('dist_water_desh_plating_button', 'ad_astra:desh_plating_pressure_plate', 'gtceu:distilled_water 3', '12x ad_astra:desh_plating_button', 37)
    buttoncutter('lube_desh_plating_button', 'ad_astra:desh_plating_pressure_plate', 'gtceu:lubricant 1', '12x ad_astra:desh_plating_button', 25)
    buttoncutter('water_ostrum_plating_button', 'ad_astra:ostrum_plating_pressure_plate', 'minecraft:water 4', '12x ad_astra:ostrum_plating_button', 50)
    buttoncutter('dist_water_ostrum_plating_button', 'ad_astra:ostrum_plating_pressure_plate', 'gtceu:distilled_water 3', '12x ad_astra:ostrum_plating_button', 37)
    buttoncutter('lube_ostrum_plating_button', 'ad_astra:ostrum_plating_pressure_plate', 'gtceu:lubricant 1', '12x ad_astra:ostrum_plating_button', 25)
    buttoncutter('water_calorite_plating_button', 'ad_astra:calorite_plating_pressure_plate', 'minecraft:water 4', '12x ad_astra:calorite_plating_button', 50)
    buttoncutter('dist_water_calorite_plating_button', 'ad_astra:calorite_plating_pressure_plate', 'gtceu:distilled_water 3', '12x ad_astra:calorite_plating_button', 37)
    buttoncutter('lube_calorite_plating_button', 'ad_astra:calorite_plating_pressure_plate', 'gtceu:lubricant 1', '12x ad_astra:calorite_plating_button', 25)
    buttoncutter('water_glacian_button', 'ad_astra:glacian_pressure_plate', 'minecraft:water 4', '12x ad_astra:glacian_button', 50)
    buttoncutter('dist_water_glacian_button', 'ad_astra:glacian_pressure_plate', 'gtceu:distilled_water 3', '12x ad_astra:glacian_button', 37)
    buttoncutter('lube_glacian_button', 'ad_astra:glacian_pressure_plate', 'gtceu:lubricant 1', '12x ad_astra:glacian_button', 25)*/
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
        let inp = 'productivetrees:' + base + '_slab'
        let out = '2x productivetrees:' + base + '_pressure_plate'

        woodpressureplate(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/redstone/prodtrees/' + base + '_pressure_plate'
        let inp = '2x productivetrees:' + base + '_slab'
        let out = '2x productivetrees:' + base + '_pressure_plate'

        pressureplateass(id, out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let inp = 'productivetrees:' + base + '_pressure_plate'
        let out = '12x productivetrees:' + base + '_button'

        buttoncraft(out, inp)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/redstone/prodtrees/' + base + '_water'
        let inp = 'productivetrees:' + base + '_pressure_plate'
        let fluid = 'minecraft:water 5'
        let out = '12x productivetrees:' + base + '_button'
        let t = 50

        buttoncutter(id, inp, fluid, out, t)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/redstone/prodtrees/' + base + '_dist'
        let inp = 'productivetrees:' + base + '_pressure_plate'
        let fluid = 'gtceu:distilled_water 3'
        let out = '12x productivetrees:' + base + '_button'
        let t = 37

        buttoncutter(id, inp, fluid, out, t)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/cutter/redstone/prodtrees/' + base + '_lube'
        let inp = 'productivetrees:' + base + '_pressure_plate'
        let fluid = 'gtceu:lubricant 1'
        let out = '12x productivetrees:' + base + '_button'
        let t = 25

        buttoncutter(id, inp, fluid, out, t)
    })
})