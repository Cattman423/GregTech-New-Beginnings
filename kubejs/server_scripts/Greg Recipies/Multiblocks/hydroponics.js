ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('hydroponic_farm')
        .circuit(5)
        .itemInputs(
            'gtceu:ev_machine_hull', 
            '4x #gtceu:circuits/ev', 
            '4x gtceu:stainless_steel_frame', 
            '4x gtceu:ev_electric_motor', 
            '16x gtceu:stainless_steel_small_fluid_pipe',
            '2x gtceu:fluid_filter'
        )
        .itemOutputs('gtceu:hydroponic_farm')
        .duration(min*5)
        .EUt(ev)

    function farming (id, cid, input, fluid, output, fert, boosted){
        if (boosted) {
            event.recipes.gtceu.hydroponic_farm(id)
                .circuit(cid)
                .notConsumable(input)
                .inputFluids(fluid)
                .inputFluids(fert)
                .itemOutputs(output)
                .duration(min*2.5)
                .EUt(hv)
        } else {
            event.recipes.gtceu.hydroponic_farm(id)
                .circuit(cid + 8)
                .notConsumable(input)
                .inputFluids(fluid)
                .itemOutputs(output)
                .duration(min*5)
                .EUt(hv)
        }
    }

    const mccrops = ['carrot', 'potato', 'cocoa_beans']
    const mcseed = ['wheat', 'beetroot', 'pumpkin', 'melon', 'torchflower']
    const pamscrops = ['agave', 'amaranth', 'arrowroot', 'artichoke', 'asparagus', 'barley', 'bean', 'bellpepper', 'blackberry', 'blueberry', 'broccoli', 'brusselsprout', 'cabbage', 
    'cactusfruit', 'candleberry', 'cantaloupe', 'cassava', 'cauliflower', 'celery', 'chickpea', 'chilipepper', 'coffeebean', 'corn', 'cotton', 'cranberry', 'cucumber', 'eggplant', 
    'elderberry', 'flax', 'garlic', 'ginger', 'grape', 'greengrape', 'huckleberry', 'jicama', 'juniperberry', 'jute', 'kale', 'kenaf', 'kiwi', 'kohlrabi', 'leek', 'lentil', 'lettuce', 
    'millet', 'mulberry', 'mustardseeds', 'oats', 'okra', 'onion', 'parsnip', 'peanut', 'peas', 'pineapple', 'quinoa', 'radish', 'raspberry', 'rhubarb', 'rice', 'rutabaga', 'rye', 
    'scallion', 'sesameseeds', 'sisal', 'soybean', 'spiceleaf', 'spinach', 'strawberry', 'sweetpotato', 'taro', 'tealeaf', 'tomatillo', 'tomato', 'turnip', 'waterchestnut', 
    'whitemushroom', 'wintersquash', 'zucchini', 'alfalfa', 'aloe', 'barrelcactus', 'canola', 'cattail', 'chia', 'cloudberry', 'lotus', 'nettles', 'nopales', 'sorghum', 'truffle', 
    'wolfberry', 'yucca', 'bokchoy', 'calabash', 'guarana', 'papyrus', 'sunchoke']
    const fdcrops = []
    const flowers = Ingredient.of("#minecraft:flowers").itemIds
    const mushrooms = Ingredient.of("#forge:mushrooms").itemIds

    for (let i = 1; i < 9; i++) {
        mccrops.forEach( (base) => {
            let id = 'kubejs:gtceu/hydroponic_farm/mc_' + base + '_' + i.toString()
            let input = 64*i.toString() + 'x ' + 'minecraft:' + base
            let output = 128*i.toString() + 'x ' + 'minecraft:' + base
            let water = 'gtceu:distilled_water ' + 1000*i.toString()
            let boostout = 256*i.toString() + 'x ' + 'minecraft:' + base
            let fert = 'sliceanddice:fertilizer ' + 1000*i.toString()
            let cid = i

            farming(id, cid, input, water, output, 'minecraft:air', false)
            farming(id + '_boosted', cid, input, water, boostout, fert, true)
        })
        mcseed.forEach( (base) => {
            let id = 'kubejs:gtceu/hydroponic_farm/mc_' + base + '_' + i.toString()
            let input = 64*i.toString() + 'x ' + 'minecraft:' + base + '_seeds'
            let output = 64*i.toString() + 'x ' + 'minecraft:' + base
            let water = 'gtceu:distilled_water ' + 1000*i.toString()
            let boostout = 128*i.toString() + 'x ' + 'minecraft:' + base
            let fert = 'sliceanddice:fertilizer ' + 1000*i.toString()
            let cid = i

            farming(id, cid, input, water, output, 'minecraft:air', false)
            farming(id + '_boosted', cid, input, water, boostout, fert, true)
        })
        pamscrops.forEach( (base) => {
            let id = 'kubejs:gtceu/hydroponic_farm/pamhc2_' + base + '_' + i.toString()
            let input = 64*i.toString() + 'x ' + 'pamhc2crops:' + base + 'seeditem'
            let output = 64*i.toString() + 'x ' + 'pamhc2crops:' + base + 'item'
            let water = 'gtceu:distilled_water ' + 1000*i.toString()
            let boostout = 128*i.toString() + 'x ' + 'pamhc2crops:' + base + 'item'
            let fert = 'sliceanddice:fertilizer ' + 1000*i.toString()
            let cid = i

            farming(id, cid, input, water, output, 'minecraft:air', false)
            farming(id + '_boosted', cid, input, water, boostout, fert, true)
        })
        flowers.forEach( (base) => {
            let id = 'kubejs:gtceu/hydroponic_farm/' + base.split(':')[1] + '_' + i.toString()
            let input = 64*i.toString() + 'x ' + base
            let output = 64*i.toString() + 'x ' + base
            let water = 'gtceu:distilled_water ' + 1000*i.toString()
            let boostout = 128*i.toString() + 'x ' + base
            let fert = 'sliceanddice:fertilizer ' + 1000*i.toString()
            let cid = i

            farming(id, cid, input, water, output, 'minecraft:air', false)
            farming(id + '_boosted', cid, input, water, boostout, fert, true)
        })
        mushrooms.forEach( (base) => {
            if(
                base != 'pamhc2crops:whitemushroomitem'
                && base != 'pamhc2crops:truffleitem'
            ){
                let id = 'kubejs:gtceu/hydroponic_farm/' + base.split(':')[1] + '_' + i.toString()
                let input = 64*i.toString() + 'x ' + base
                let output = 64*i.toString() + 'x ' + base
                let water = 'gtceu:distilled_water ' + 1000*i.toString()
                let boostout = 128*i.toString() + 'x ' + base
                let fert = 'sliceanddice:fertilizer ' + 1000*i.toString()
                let cid = i

                farming(id, cid, input, water, output, 'minecraft:air', false)
                farming(id + '_boosted', cid, input, water, boostout, fert, true)
            }
        })
        /*farming(
            'kubejs:gtceu/hydroponic_farm/fd_brown_mushroom_colony_' + i.toString(), 
            i, 
            64*i.toString() + 'farmersdelight:brown_mushroom_colony', 
            128*i.toString() + 'farmersdelight:brown_mushroom_colony'
        )
        farming(
            'kubejs:gtceu/hydroponic_farm/fd_red_mushroom_colony_' + i.toString(), 
            i, 
            64*i.toString() + 'farmersdelight:red_mushroom_colony', 
            128*i.toString() + 'farmersdelight:red_mushroom_colony'
        )
        farming(
            'kubejs:gtceu/hydroponic_farm/fd_cabbage_' + i.toString(), 
            i, 
            64*i.toString() + 'farmersdelight:cabbage_seeds', 
            128*i.toString() + 'farmersdelight:cabbage'
        )
        farming(
            'kubejs:gtceu/hydroponic_farm/fd_tomato_' + i.toString(), 
            i, 
            64*i.toString() + 'farmersdelight:tomato_seeds', 
            128*i.toString() + 'farmersdelight:tomato'
        )
        farming(
            'kubejs:gtceu/hydroponic_farm/fd_onion_' + i.toString(), 
            i, 
            64*i.toString() + 'farmersdelight:onion', 
            128*i.toString() + 'farmersdelight:onion'
        )
        farming(
            'kubejs:gtceu/hydroponic_farm/fd_rice_' + i.toString(), 
            i, 
            64*i.toString() + 'farmersdelight:rice', 
            128*i.toString() + 'farmersdelight:rice_panicle'
        )*/
    }
})