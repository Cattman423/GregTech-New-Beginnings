ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:flint', 1),
        [
        '3x minecraft:gravel',
        ]
    )
    event.shapeless(
        Item.of('gtceu:andesite_dust', 2),
        [
        '3x minecraft:andesite',
        '#forge:tools/mortars'
        ]
    )
    event.shapeless(
        Item.of('gtceu:magnetic_iron_ingot'),
        [
        '4x minecraft:redstone',
        'minecraft:iron_ingot'
        ]
    )
    event.recipes.gtceu.bender('obsidian')
        .itemInputs('9x gtceu:obsidian_plate')
        .itemOutputs('gtceu:dense_obsidian_plate')
        .duration(1800)
        .EUt(96)
    event.recipes.gtceu.macerator('obsidian_dust')
        .itemInputs('minecraft:obsidian')
        .itemOutputs('gtceu:obsidian_dust')
        .duration(80)
        .EUt(400)
    event.recipes.gtceu.alloy_smelter('raw_rubber_ingot')
        .itemInputs('2x gtceu:raw_rubber_dust')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('gtceu:raw_rubber_ingot')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.alloy_smelter('raw_rubber_plate')
        .itemInputs('2x gtceu:raw_rubber_ingot')
        .notConsumable('gtceu:plate_casting_mold')
        .itemOutputs('gtceu:raw_rubber_plate')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.rock_breaker('tuff')
        .notConsumable('minecraft:tuff')
        .itemOutputs('minecraft:tuff')
        .duration(16)
        .EUt(60)
    event.recipes.gtceu.rock_breaker('netherrack')
        .notConsumable('minecraft:netherrack')
        .itemOutputs('minecraft:netherrack')
        .duration(16)
        .EUt(480)
//Spacecraft
    event.recipes.gtceu.assembler('leo_lv_1')
        .circuit(32)
        .itemInputs(
            '9x gtceu:power_thruster', 
            '8x gtceu:steel_fluid_cell', 
            '32x gtceu:steel_plate', 
            '4x #gtceu:circuits/mv')
        .itemOutputs('kubejs:leo_lv')
        .duration(min)
        .EUt(mv)
    event.recipes.gtceu.assembler('leo_lv_2')
        .circuit(32)
        .itemInputs(
            '9x gtceu:power_thruster', 
            '6x gtceu:steel_fluid_cell', 
            '24x gtceu:aluminium_plate', 
            '3x #gtceu:circuits/hv')
        .itemOutputs('kubejs:leo_lv')
        .duration(900)
        .EUt(hv)
    event.recipes.gtceu.assembler('leo_lv_3')
        .circuit(32)
        .itemInputs(
            '9x gtceu:power_thruster', 
            '4x gtceu:stainless_steel_fluid_cell', 
            '16x gtceu:stainless_steel_plate', 
            '2x #gtceu:circuits/ev')
        .itemOutputs('kubejs:leo_lv')
        .duration(min/2)
        .EUt(ev)
    event.recipes.gtceu.assembler('mining_ship_1')
        .circuit(16)
        .itemInputs(
            '4x gtceu:power_thruster', 
            '2x gtceu:steel_fluid_cell', 
            '2x gtceu:steel_drill_head', 
            '2x gtceu:steel_crate', 
            '32x gtceu:aluminium_plate', 
            '4x #gtceu:circuits/mv')
        .itemOutputs('kubejs:mining_ship')
        .duration(min).EUt(mv)
//Paper fixes
    event.shaped(
        Item.of('2x gtceu:paper_dust',),
        [
            '   ',
            'AAA',
            ' B '
        ],
        {
            A: '#forge:paper_plants',
            B: '#forge:tools/mortars'
        }
        )
    event.shaped(
        Item.of('2x gtceu:paper_dust',),
        [
            '   ',
            'AAA',
            ' B '
        ],
        {
            A: 'dawnoftimebuilder:mulberry_leaves',
            B: '#forge:tools/mortars'
        }
        )
    event.shaped(
        Item.of('2x gtceu:paper_dust',),
        [
            '   ',
            'AAA',
            ' B '
        ],
        {
            A: 'farmersdelight:tree_bark',
            B: '#forge:tools/mortars'
        }
        )
//Smelting
    function smelting(input, output){
        event.smelting(output, input)
    }
//Cubic Zirconium
    event.recipes.gtceu.chemical_reactor('cubic_zirconium')
        .itemInputs('gtceu:zirconium_dust')
        .inputFluids('gtceu:oxygen 2000')
        .chancedOutput('gtceu:cubic_zirconium_dust', 7500, 500)
        .duration(min*5).EUt(hv)
//Blank Discs
    function formpress(id, input, output, cast, time, eu){
        event.recipes.gtceu.fluid_solidifier(id)
            .notConsumable(cast)
            .inputFluids(input)
            .itemOutputs(output)
            .duration(time)
            .EUt(eu)
    }
//Bakelite
    event.recipes.gtceu.chemical_reactor('kubejs:gtceu/chemical_reactor/misc_greg/bakelite')
        .inputFluids('gtceu:phenol 1000', 'gtceu:formaldehyde 1000')
        .outputFluids('gtceu:bakelite 1000')
        .duration(min/2).EUt(lv/2)
//
    event.shaped(
        Item.of('framedblocks:framed_lever'),
        [
            ' B ',
            ' A ',
            '   '
        ],
        {
            A: 'minecraft:lever',
            B: 'framedblocks:framed_cube'
        }
        )
    event.shaped(
        Item.of('create:analog_lever'),
        [
            ' B ',
            ' A ',
            '   '
        ],
        {
            A: 'minecraft:lever',
            B: 'create:andesite_casing'
        }
        )
    event.shaped(
        Item.of('supplementaries:sconce_lever'),
        [
            ' B ',
            ' A ',
            '   '
        ],
        {
            A: 'minecraft:lever',
            B: 'supplementaries:sconce'
        }
        )
    event.shaped(
        Item.of('treetap:tap'),
        [
            'ABC',
            'DIE',
            'FGH'
        ],
        {
            A: '#forge:tools/hammers',
            B: 'gtceu:andesite_alloy_screw',
            C: '#forge:tools/screwdrivers',
            D: 'gtceu:copper_normal_fluid_pipe',
            E: 'gtceu:copper_small_fluid_pipe',
            F: 'gtceu:copper_large_fluid_pipe',
            G: '#forge:tools/wrenches',
            H: '#forge:tools/files',
            I: 'kubejs:sealed_mechanism'
        }
        )
    event.recipes.gtceu.compressor('jumbo_furnace')
        .itemInputs('64x minecraft:furnace')
        .itemOutputs('jumbofurnace:jumbo_furnace')
        .duration(min*5)
        .EUt(ulv)
    event.shaped(
        Item.of('3x minecraft:torch'),
        [
            ' A ',
            ' B ',
            '   '
        ],
        {
            A: 'gtceu:lignite_gem',
            B: '#forge:rods/wooden'
        }
        )
    event.shaped(
        Item.of('3x minecraft:torch'),
        [
            ' A ',
            ' B ',
            '   '
        ],
        {
            A: 'gtceu:lignite_dust',
            B: '#forge:rods/wooden'
        }
        )
    event.shaped(
        Item.of('2x gtceu:coke_oven_bricks'),
        ['AAA', 'ABA', 'AAA'],
        {A: 'gtceu:coke_oven_brick', B: 'minecraft:water_bucket'}
    )
    event.shaped(
        Item.of('2x minecraft:nether_bricks'),
        ['AAA', 'ABA', 'AAA'],
        {A: 'minecraft:nether_brick', B: 'minecraft:water_bucket'}
    )

    event.shaped(
        Item.of('gtceu:primitive_blast_furnace',),
        ['ABC', 'DEB', 'FBC'],
        {A: '#forge:tools/hammers', B: 'gtceu:iron_rod', C: 'gtceu:iron_screw',
        D: 'kubejs:advanced_clockwork_mechanism', E: 'gtceu:firebricks', F: '#forge:tools/screwdrivers'})
//Nuggets
    let anuggets = Ingredient.of("#forge:nuggets").itemIds

    anuggets.forEach((itemIds) => {
        event.shapeless((Item.of(itemIds, 8)), [itemIds.slice(0, -7)+'_ingot', '#forge:tools/saws'])
    })
    event.shapeless(('8x gtceu:andesite_alloy_nugget'), ['create:andesite_alloy', '#forge:tools/saws'])
    event.shapeless(('8x gtceu:netherite_alloy_nugget'), ['minecraft:netherite_ingot', '#forge:tools/saws'])
    event.shapeless(('8x gtceu:netherite_scrap_nugget'), ['minecraft:netherite_scrap', '#forge:tools/saws'])
    event.shapeless(('8x gtceu:copper_nugget'), ['minecraft:copper_ingot', '#forge:tools/saws'])
//
    event.recipes.gtceu.chemical_reactor('formaldehyde_dust')
        .itemInputs('gtceu:carbon_dust')
        .inputFluids('gtceu:oxygen 1000', 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:formaldehyde 4000')
        .duration(sec*15)
        .EUt(lv)
    event.recipes.gtceu.chemical_reactor('formaldehyde_gas')
        .inputFluids('gtceu:carbon_monoxide 2000', 'gtceu:hydrogen 2000')
        .outputFluids('gtceu:formaldehyde 4000')
        .duration(sec*15)
        .EUt(lv)
        
//Round mold/casting
    const gtround = Ingredient.of('#forge:rounds').itemIds
    event.shaped(
        Item.of('kubejs:round_casting_mold'),
        ['A  ', '   ', '  B'],
        {A: '#forge:tools/hammers', B: 'gtceu:empty_mold'}
    )
    event.recipes.gtceu.forming_press('round_casting_mold')
        .notConsumable('kubejs:round_casting_mold')
        .itemInputs('gtceu:empty_mold')
        .itemOutputs('kubejs:round_casting_mold')
        .EUt(22)
        .duration(sec*6)
    event.recipes.gtceu.arc_furnace('arc_round_casting_mold')
        .itemInputs('kubejs:round_casting_mold')
        .inputFluids('gtceu:oxygen 224')
        .itemOutputs('4x gtceu:steel_ingot')
        .EUt(lv)
        .duration(sec*11.2)
    event.recipes.gtceu.macerator('macerate_casting_mold')
        .itemInputs('kubejs:round_casting_mold')
        .itemOutputs('4x gtceu:steel_dust')
        .EUt(ulv)
        .duration(sec*11.2)
    gtround.forEach( (base) => {
        event.recipes.gtceu.alloy_smelter('kubejs:gtceu/alloy_smelter/misc_greg/' + base.slice(6, -1) + 'd')
            .notConsumable('kubejs:round_casting_mold')
            .itemInputs(base.slice(0, -5) + 'ingot')
            .itemOutputs('9x ' + base)
            .EUt(ulv)
            .duration(sec*10)
        event.recipes.gtceu.fluid_solidifier('kubejs:gtceu/fluid_solidifier/misc_greg/' + base.slice(6, -1) + 'd')
            .notConsumable('kubejs:round_casting_mold')
            .inputFluids(base.slice(0, -6) + ' 144')
            .itemOutputs('9x ' + base)
            .EUt(ulv)
            .duration(sec*10)
    })
//
    smelting('gtceu:raw_zircon', 'gtceu:zirconium_ingot')
    smelting('gtceu:endstone_zircon_ore', '2x gtceu:zirconium_ingot')
    smelting('gtceu:netherrack_zircon_ore', '2x gtceu:zirconium_ingot')
    smelting('gtceu:zircon_ore', 'gtceu:zirconium_ingot')
    smelting('gtceu:deepslate_zircon_ore', 'gtceu:zirconium_ingot')
    formpress('disc_bakelite', 'gtceu:bakelite 144', 'etched:blank_music_disc', 'gtceu:cylinder_casting_mold', 200, 16)
    formpress('disc_pvc', 'gtceu:polyvinyl_chloride 108', 'etched:blank_music_disc', 'gtceu:cylinder_casting_mold', 200, 48)
})