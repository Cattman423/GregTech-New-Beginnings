ServerEvents.recipes(event => {
//Functions
    function cutter(id, input, fluid, plank, dust, time, eu){
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
//Recipes
    cutter('water_oak', '#minecraft:oak_logs', 'minecraft:water 5', '4x minecraft:oak_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_oak', '#minecraft:oak_logs', 'gtceu:distilled_water 3', '4x minecraft:oak_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_oak', '#minecraft:oak_logs', 'gtceu:lubricant 1', '6x minecraft:oak_planks', 'gtceu:wood_dust', 200)
    cutter('water_spruce', '#minecraft:spruce_logs', 'minecraft:water 5', '4x minecraft:spruce_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_spruce', '#minecraft:spruce_logs', 'gtceu:distilled_water 3', '4x minecraft:spruce_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_spruce', '#minecraft:spruce_logs', 'gtceu:lubricant 1', '6x minecraft:spruce_planks', 'gtceu:wood_dust', 200)
    cutter('water_birch', '#minecraft:birch_logs', 'minecraft:water 5', '4x minecraft:birch_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_birch', '#minecraft:birch_logs', 'gtceu:distilled_water 3', '4x minecraft:birch_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_birch', '#minecraft:birch_logs', 'gtceu:lubricant 1', '6x minecraft:birch_planks', 'gtceu:wood_dust', 200)
    cutter('water_jungle', '#minecraft:jungle_logs', 'minecraft:water 5', '4x minecraft:jungle_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_jungle', '#minecraft:jungle_logs', 'gtceu:distilled_water 3', '4x minecraft:jungle_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_jungle', '#minecraft:jungle_logs', 'gtceu:lubricant 1', '6x minecraft:jungle_planks', 'gtceu:wood_dust', 200)
    cutter('water_acacia', '#minecraft:acacia_logs', 'minecraft:water 5', '4x minecraft:acacia_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_acacia', '#minecraft:acacia_logs', 'gtceu:distilled_water 3', '4x minecraft:acacia_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_acacia', '#minecraft:acacia_logs', 'gtceu:lubricant 1', '6x minecraft:acacia_planks', 'gtceu:wood_dust', 200)
    cutter('water_dark_oak', '#minecraft:dark_oak_logs', 'minecraft:water 5', '4x minecraft:dark_oak_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_dark_oak', '#minecraft:dark_oak_logs', 'gtceu:distilled_water 3', '4x minecraft:dark_oak_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_dark_oak', '#minecraft:dark_oak_logs', 'gtceu:lubricant 1', '6x minecraft:dark_oak_planks', 'gtceu:wood_dust', 200)
    cutter('water_mangrove', '#minecraft:mangrove_logs', 'minecraft:water 5', '4x minecraft:mangrove_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_mangrove', '#minecraft:mangrove_logs', 'gtceu:distilled_water 3', '4x minecraft:mangrove_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_mangrove', '#minecraft:mangrove_logs', 'gtceu:lubricant 1', '6x minecraft:mangrove_planks', 'gtceu:wood_dust', 200)
    cutter('water_cherry', '#minecraft:cherry_logs', 'minecraft:water 5', '4x minecraft:cherry_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_cherry', '#minecraft:cherry_logs', 'gtceu:distilled_water 3', '4x minecraft:cherry_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_cherry', '#minecraft:cherry_logs', 'gtceu:lubricant 1', '6x minecraft:cherry_planks', 'gtceu:wood_dust', 200)
    cutter('water_crimson', '#minecraft:crimson_stems', 'minecraft:water 5', '4x minecraft:crimson_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_crimson', '#minecraft:crimson_stems', 'gtceu:distilled_water 3', '4x minecraft:crimson_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_crimson', '#minecraft:crimson_stems', 'gtceu:lubricant 1', '6x minecraft:crimson_planks', 'gtceu:wood_dust', 200)
    cutter('water_warped', '#minecraft:warped_stems', 'minecraft:water 5', '4x minecraft:warped_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_warped', '#minecraft:warped_stems', 'gtceu:distilled_water 3', '4x minecraft:warped_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_warped', '#minecraft:warped_stems', 'gtceu:lubricant 1', '6x minecraft:warped_planks', 'gtceu:wood_dust', 200)
    cutter('water_fir', '#biomesoplenty:fir_logs', 'minecraft:water 5', '4x biomesoplenty:fir_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_fir', '#biomesoplenty:fir_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:fir_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_fir', '#biomesoplenty:fir_logs', 'gtceu:lubricant 1', '6x biomesoplenty:fir_planks', 'gtceu:wood_dust', 200)
    cutter('water_redwood', '#biomesoplenty:redwood_logs', 'minecraft:water 5', '4x biomesoplenty:redwood_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_redwood', '#biomesoplenty:redwood_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:redwood_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_redwood', '#biomesoplenty:redwood_logs', 'gtceu:lubricant 1', '6x biomesoplenty:redwood_planks', 'gtceu:wood_dust', 200)
    cutter('water_mahogany', '#biomesoplenty:mahogany_logs', 'minecraft:water 5', '4x biomesoplenty:mahogany_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_mahogany', '#biomesoplenty:mahogany_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:mahogany_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_mahogany', '#biomesoplenty:mahogany_logs', 'gtceu:lubricant 1', '6x biomesoplenty:mahogany_planks', 'gtceu:wood_dust', 200)
    cutter('water_jacaranda', '#biomesoplenty:jacaranda_logs', 'minecraft:water 5', '4x biomesoplenty:jacaranda_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_jacaranda', '#biomesoplenty:jacaranda_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:jacaranda_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_jacaranda', '#biomesoplenty:jacaranda_logs', 'gtceu:lubricant 1', '6x biomesoplenty:jacaranda_planks', 'gtceu:wood_dust', 200)
    cutter('water_palm', '#biomesoplenty:palm_logs', 'minecraft:water 5', '4x biomesoplenty:palm_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_palm', '#biomesoplenty:palm_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:palm_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_palm', '#biomesoplenty:palm_logs', 'gtceu:lubricant 1', '6x biomesoplenty:palm_planks', 'gtceu:wood_dust', 200)
    cutter('water_willow', '#biomesoplenty:willow_logs', 'minecraft:water 5', '4x biomesoplenty:willow_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_willow', '#biomesoplenty:willow_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:willow_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_willow', '#biomesoplenty:willow_logs', 'gtceu:lubricant 1', '6x biomesoplenty:willow_planks', 'gtceu:wood_dust', 200)
    cutter('water_dead', '#biomesoplenty:dead_logs', 'minecraft:water 5', '4x biomesoplenty:dead_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_dead', '#biomesoplenty:dead_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:dead_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_dead', '#biomesoplenty:dead_logs', 'gtceu:lubricant 1', '6x biomesoplenty:dead_planks', 'gtceu:wood_dust', 200)
    cutter('water_magic', '#biomesoplenty:magic_logs', 'minecraft:water 5', '4x biomesoplenty:magic_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_magic', '#biomesoplenty:magic_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:magic_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_magic', '#biomesoplenty:magic_logs', 'gtceu:lubricant 1', '6x biomesoplenty:magic_planks', 'gtceu:wood_dust', 200)
    cutter('water_umbran', '#biomesoplenty:umbran_logs', 'minecraft:water 5', '4x biomesoplenty:umbran_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_umbran', '#biomesoplenty:umbran_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:umbran_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_umbran', '#biomesoplenty:umbran_logs', 'gtceu:lubricant 1', '6x biomesoplenty:umbran_planks', 'gtceu:wood_dust', 200)
    cutter('water_hellbark', '#biomesoplenty:hellbark_logs', 'minecraft:water 5', '4x biomesoplenty:hellbark_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_hellbark', '#biomesoplenty:hellbark_logs', 'gtceu:distilled_water 3', '4x biomesoplenty:hellbark_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_hellbark', '#biomesoplenty:hellbark_logs', 'gtceu:lubricant 1', '6x biomesoplenty:hellbark_planks', 'gtceu:wood_dust', 200)
    cutter('water_rubber', 'gtceu:rubber_log', 'minecraft:water 5', '4x gtceu:rubber_planks', '2x gtceu:wood_dust', 400)
    cutter('dist_water_rubber', 'gtceu:rubber_log', 'gtceu:distilled_water 3', '4x gtceu:rubber_planks', '2x gtceu:wood_dust', 300)
    cutter('lube_rubber', 'gtceu:rubber_log', 'gtceu:lubricant 1', '6x gtceu:rubber_planks', 'gtceu:wood_dust', 200)
    notool('2x gtceu:rubber_planks','gtceu:rubber_log')
    sawcraft('4x gtceu:rubber_planks', 'gtceu:rubber_log')
})