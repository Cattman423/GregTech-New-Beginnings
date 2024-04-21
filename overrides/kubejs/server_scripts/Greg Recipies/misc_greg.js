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
//Gunpowder line
    event.recipes.gtceu.chemical_reactor('nitrocellulose')
        .circuit(16)
        .itemInputs('5x minecraft:paper')
        .inputFluids('gtceu:nitric_acid 3000', 'gtceu:sulfuric_acid 8000')
        .itemOutputs('5x gtceu:nitrocellulose_ingot')
        .outputFluids('minecraft:water 3000')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.mixer('pistol_mixing')
        .circuit(16)
        .itemInputs('4x gtceu:nitrocellulose_dust', '5x minecraft:gunpowder')
        .itemOutputs('5x kubejs:pistol_powder')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.mixer('rifle_mixing')
        .circuit(17)
        .itemInputs('4x gtceu:nitrocellulose_dust', '5x minecraft:gunpowder')
        .itemOutputs('5x kubejs:rifle_powder')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.mixer('shotgun_mixing')
        .circuit(18)
        .itemInputs('4x gtceu:nitrocellulose_dust', '5x minecraft:gunpowder')
        .itemOutputs('5x kubejs:shotgun_powder')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.chemical_reactor('barium_nitride')
        .circuit(16)
        .itemInputs('3x gtceu:barium_dust')
        .inputFluids('gtceu:nitrogen 2000')
        .itemOutputs('5x gtceu:barium_nitride_dust')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.chemical_reactor('lead_styphnate')
        .circuit(16)
        .itemInputs('gtceu:lead_dust', '6x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 1000', 'gtceu:nitrogen 3000', 'gtceu:oxygen 8000')
        .itemOutputs('19x gtceu:lead_styphnate_dust')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.assembler('small_rifle_primer')
        .circuit(16)
        .itemInputs('3x gtceu:lead_styphnate_dust', 'gtceu:stibnite_dust', 'gtceu:barium_nitride_dust', '16x gtceu:brass_nugget')
        .itemOutputs('16x kubejs:small_rifle_primer')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.assembler('large_rifle_primer')
        .circuit(17)
        .itemInputs('3x gtceu:lead_styphnate_dust', 'gtceu:stibnite_dust', 'gtceu:barium_nitride_dust', '16x gtceu:brass_nugget')
        .itemOutputs('16x kubejs:large_rifle_primer')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.assembler('pistol_primer')
        .circuit(18)
        .itemInputs('3x gtceu:lead_styphnate_dust', 'gtceu:stibnite_dust', 'gtceu:barium_nitride_dust', '16x gtceu:brass_nugget')
        .itemOutputs('16x kubejs:pistol_primer')
        .duration(200)
        .EUt(24)
    event.recipes.gtceu.assembler('shotgun_primer')
        .circuit(19)
        .itemInputs('3x gtceu:lead_styphnate_dust', 'gtceu:stibnite_dust', 'gtceu:barium_nitride_dust', '16x gtceu:brass_nugget', '4x gtceu:steel_nugget')
        .itemOutputs('16x kubejs:shotgun_primer')
        .duration(200)
        .EUt(24)
    event.shaped(
        Item.of('pointblank:ammo9mm',),
        [
            ' D ',
            'ACB',
            ' E '
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:pistol_powder',
            C: 'kubejs:small_pistol_brass',
            D: 'kubejs:small_pistol_bullet',
            E: 'kubejs:pistol_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo45acp',),
        [
            ' D ',
            'ACB',
            ' E '
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:pistol_powder',
            C: 'kubejs:large_pistol_brass',
            D: 'kubejs:large_pistol_bullet',
            E: 'kubejs:pistol_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo46',),
        [
            ' D ',
            'ACB',
            ' E '
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:small_rifle_brass',
            D: 'kubejs:small_rifle_bullet',
            E: 'kubejs:pistol_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo545',),
        [
            ' D ',
            'BCA',
            ' E '
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:small_rifle_brass',
            D: 'kubejs:small_rifle_bullet',
            E: 'kubejs:pistol_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo556',),
        [
            ' D ',
            'ACB',
            ' E '
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:small_rifle_brass',
            D: 'kubejs:small_rifle_bullet',
            E: 'kubejs:small_rifle_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo68',),
        [
            ' D ',
            'ACB',
            ' EB'
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:medium_rifle_brass',
            D: 'kubejs:small_rifle_bullet',
            E: 'kubejs:small_rifle_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo762',),
        [
            ' D ',
            'ACB',
            ' EB'
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:medium_rifle_brass',
            D: 'kubejs:medium_rifle_bullet',
            E: 'kubejs:small_rifle_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo762x51',),
        [
            ' DB',
            'ACB',
            ' EB'
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:medium_rifle_brass',
            D: 'kubejs:medium_rifle_bullet',
            E: 'kubejs:large_rifle_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo338lapua',),
        [
            'BD ',
            'BCA',
            'BE '
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:medium_rifle_brass',
            D: 'kubejs:medium_rifle_bullet',
            E: 'kubejs:large_rifle_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo50bmg',),
        [
            'ADB',
            'BCB',
            'BEB'
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:rifle_powder',
            C: 'kubejs:large_rifle_brass',
            D: 'kubejs:large_rifle_bullet',
            E: 'kubejs:large_rifle_primer'
        }
        )
    event.shaped(
        Item.of('pointblank:ammo12gauge',),
        [
            ' D ',
            'ACB',
            ' EB'
        ],
        {
            A: 'kubejs:reloading_kit',
            B: 'kubejs:shotgun_powder',
            C: 'kubejs:shotgun_hull',
            D: 'kubejs:shotgun_bullet',
            E: 'kubejs:shotgun_primer'
        }
        )
//Spacecraft
    event.recipes.gtceu.assembler('leo_lv_1')
        .circuit(32)
        .itemInputs(
            '9x gtceu:power_thruster', 
            '8x gtceu:steel_fluid_cell', 
            '32x gtceu:steel_plate', 
            '4x #gtceu:circuits/mv')
        .itemOutputs('kubejs:leo_lv')
        .duration(1200)
        .EUt(120)
    event.recipes.gtceu.assembler('leo_lv_2')
        .circuit(32)
        .itemInputs(
            '9x gtceu:power_thruster', 
            '6x gtceu:steel_fluid_cell', 
            '24x gtceu:aluminium_plate', 
            '3x #gtceu:circuits/hv')
        .itemOutputs('kubejs:leo_lv')
        .duration(900)
        .EUt(480)
    event.recipes.gtceu.assembler('leo_lv_3')
        .circuit(32)
        .itemInputs(
            '9x gtceu:power_thruster', 
            '4x gtceu:stainless_steel_fluid_cell', 
            '16x gtceu:stainless_steel_plate', 
            '2x #gtceu:circuits/ev')
        .itemOutputs('kubejs:leo_lv')
        .duration(600)
        .EUt(1920)
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
        .duration(1200)
        .EUt(120)
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
        .duration(6000)
        .EUt(480)
//Blank Discs
    function formpress(id, input, output, cast, time, eu){
        event.recipes.gtceu.fluid_solidifier(id)
            .notConsumable(cast)
            .inputFluids(input)
            .itemOutputs(output)
            .duration(time)
            .EUt(eu)
    }
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
    smelting('gtceu:raw_zircon', 'gtceu:zirconium_ingot')
    smelting('gtceu:endstone_zircon_ore', '2x gtceu:zirconium_ingot')
    smelting('gtceu:netherrack_zircon_ore', '2x gtceu:zirconium_ingot')
    smelting('gtceu:zircon_ore', 'gtceu:zirconium_ingot')
    smelting('gtceu:deepslate_zircon_ore', 'gtceu:zirconium_ingot')
    formpress('disc_bakelite', 'gtceu:bakelite 144', 'etched:blank_music_disc', 'gtceu:cylinder_casting_mold', 200, 16)
    formpress('disc_pvc', 'gtceu:polyvinyl_chloride 108', 'etched:blank_music_disc', 'gtceu:cylinder_casting_mold', 200, 48)
})