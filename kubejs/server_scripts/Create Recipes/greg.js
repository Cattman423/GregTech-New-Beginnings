ServerEvents.recipes(event => {
//Casings
    function casing(input, output, circuit){
        event.recipes.create.mechanical_crafting(output, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: input,
            B: circuit
        })
    }
//Bricked Hulls
    function hull(input, tempitem, output, add_one, dust){
        event.recipes.create.sequenced_assembly([
            Item.of(output).withChance(95.0),
            Item.of('2x gtceu:small_brick_dust').withChance(3.0),
            Item.of(dust).withChance(2.0)
        ], input, [
        event.recipes.createDeploying(tempitem, [tempitem, add_one]),
        //event.recipes.vintageimprovements(tempitem, [tempitem]),
        event.recipes.createPressing(tempitem, [tempitem])
        ]).transitionalItem(tempitem).loops(5)
    }
//Steam machines
    function solidboiler(output, plate, burner, hull){
        event.recipes.create.mechanical_crafting(output, [
            'AAA',
            'ABA',
            'CDC'
        ], {
            A: plate,
            B: burner,
            C: 'minecraft:bricks',
            D: hull
        })
    }
    function solarboiler(output, plate, pipe, hull){
        event.recipes.create.mechanical_crafting(output, [
            'AAAAA',
            'BBBBB',
            'CCCCC',
            'CDEDC'
        ], {
            A: 'minecraft:glass',
            B: 'gtceu:double_silver_plate',
            C: plate,
            D: pipe,
            E: hull
        })
    }
//Concrete
    event.recipes.create.mixing(
        [Fluid.of(('gtceu:concrete'), 1000)], 
        ['2x gtceu:stone_dust', 'gtceu:calcite_dust', 'gtceu:gypsum_dust', Fluid.water(1000)]
        ).heatRequirement('heated')
    event.recipes.create.mixing(
        ['gtceu:firebricks'], 
        ['6x gtceu:firebrick', '2x gtceu:gypsum_dust', Fluid.of(('gtceu:concrete'), 750)]
        ).heatRequirement('heated')
//Functions
    function milling(output, input){
        event.recipes.create.milling(output, input)
    }
    function splashing(output, input){
        event.recipes.create.splashing(output, input)
    }
    function filling(output, input){
        event.recipes.create.filling(output, input)
    }

    casing('gtceu:bronze_plate', 'gtceu:bronze_machine_casing', 'kubejs:clockwork_mechanism')
    casing('gtceu:steel_plate', 'gtceu:steel_machine_casing', 'kubejs:advanced_clockwork_mechanism')
    hull('minecraft:bricks', 'kubejs:incomplete_bronze_hull', 'gtceu:bronze_brick_casing', 'gtceu:bronze_plate', '2x gtceu:small_bronze_dust')
    hull('minecraft:bricks', 'kubejs:incomplete_steel_hull', 'gtceu:steel_brick_casing', 'gtceu:wrought_iron_plate', '2x gtceu:small_wrought_iron_dust')
    solidboiler('gtceu:lp_steam_solid_boiler', 'gtceu:bronze_plate', 'minecraft:furnace', 'gtceu:bronze_brick_casing')
    solidboiler('gtceu:hp_steam_solid_boiler', 'gtceu:steel_plate', 'minecraft:furnace', 'gtceu:steel_brick_casing')
    solidboiler('gtceu:lp_steam_liquid_boiler', 'gtceu:bronze_plate', 'fluidtank:tank_wood', 'gtceu:bronze_brick_casing')
    solidboiler('gtceu:hp_steam_liquid_boiler', 'gtceu:steel_plate', 'fluidtank:tank_iron', 'gtceu:steel_brick_casing')
    solarboiler('gtceu:lp_steam_solar_boiler', 'gtceu:bronze_plate', 'gtceu:bronze_small_fluid_pipe', 'gtceu:bronze_brick_casing')
    solarboiler('gtceu:hp_steam_solar_boiler', 'gtceu:steel_plate', 'gtceu:steel_small_fluid_pipe', 'gtceu:steel_brick_casing')
    milling('gtceu:clay_dust', 'minecraft:clay_ball')
    milling('4x gtceu:coal_dust', 'gtceu:exquisite_coal_gem')
    milling('gtceu:flint_dust', 'minecraft:flint')
    milling('gtceu:wrought_iron_dust', 'gtceu:wrought_iron_ingot')
    milling('gtceu:lead_dust', 'gtceu:lead_ingot')
    milling('4x gtceu:brick_dust', 'minecraft:bricks')
    milling('gtceu:rose_quartz_dust', '#forge:gems/rose_quartz')
    milling('gtceu:quartz_sand_dust', '#minecraft:sand')
    milling('gtceu:charcoal_dust', 'minecraft:charcoal')
    milling('gtceu:andesite_dust', '#create:stone_types/andesite')
    milling('gtceu:andesite_dust', '#chipped:andesite')
    milling('gtceu:copper_dust', 'minecraft:copper_ingot')
    milling('gtceu:nickel_dust', 'gtceu:nickel_ingot')
    milling('gtceu:bronze_dust', 'gtceu:bronze_ingot')
    milling('4x gtceu:coke_dust', 'gtceu:exquisite_coke_gem')
    milling('gtceu:silver_dust', 'gtceu:silver_ingot')
    milling('2x gtceu:coke_dust', 'gtceu:flawless_coke_gem')
    milling('2x gtceu:coal_dust', 'gtceu:flawless_coal_gem')
    milling('gtceu:brass_dust', 'gtceu:brass_ingot')
    milling('4x gtceu:clay_dust', 'minecraft:clay')
    milling('gtceu:steel_dust', 'gtceu:steel_ingot')
    milling('gtceu:antimony_dust', 'gtceu:antimony_ingot')
    milling('gtceu:brick_dust', 'minecraft:brick')
    milling('gtceu:iron_dust', 'gtceu:iron_ingot')
    milling('gtceu:coal_dust', 'minecraft:coal')
    milling('4x gtceu:rose_quartz_dust', 'gtceu:exquisite_rose_quartz_gem')
    milling('gtceu:invar_dust', 'gtceu:invar_ingot')
    milling('gtceu:coke_dust', 'gtceu:coke_gem')
    milling('gtceu:gold_dust', 'gtceu:gold_ingot')
    milling('gtceu:tin_dust', 'gtceu:tin_ingot')
    milling('gtceu:zinc_dust', 'gtceu:zinc_ingot')
    milling('2x gtceu:rose_quartz_dust', 'gtceu:flawless_rose_quartz_gem')
    milling('gtceu:annealed_copper_dust', 'gtceu:annealed_copper_ingot')
    milling('gtceu:electrum_dust', 'gtceu:electrum_ingot')
    splashing('vintagedelight:oat_dough', 'vintagedelight:raw_oats')
    filling('gtceu:treated_wood_planks', [Fluid.of(('gtceu:creosote'), 100), '#minecraft:planks'])
})