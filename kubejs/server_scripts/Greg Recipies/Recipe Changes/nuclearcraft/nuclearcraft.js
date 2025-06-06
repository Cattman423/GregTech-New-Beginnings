ServerEvents.recipes(event => {
//Recipe Replacements
    /*event.replaceInput(
        { input: 'tfmg:screw' },
        'tfmg:screw',
        'gtceu:poor_steel_screw'
        )*/
    event.replaceInput(
        { input: '#forge:dusts/energetic_blend' },
        '#forge:dusts/energetic_blend',
        'gtceu:energetic_alloy_dust'
        )
    event.replaceInput(
        { input: 'nuclearcraft:bioplastic' },
        'nuclearcraft:bioplastic',
        'gtceu:polyethylene_plate'
        )
    event.recipes.gtceu.alloy_smelter('basic_plate')
        .itemInputs('gtceu:graphite_dust', 'gtceu:lead_ingot')
        .itemOutputs('nuclearcraft:plate_basic')
        .duration(min/2)
        .EUt(ev)
    event.recipes.gtceu.electric_blast_furnace('advanced_plate')
        .itemInputs('nuclearcraft:plate_basic', '2x minecraft:redstone', '2x gtceu:tough_alloy_ingot')
        .itemOutputs('nuclearcraft:plate_advanced')
        .blastFurnaceTemp(3500)
        .duration(min/2)
        .EUt(iv)
    event.recipes.gtceu.electric_blast_furnace('du_plate')
        .itemInputs('nuclearcraft:plate_advanced', '4x nuclearcraft:uranium_238', '4x gtceu:sulfur_dust')
        .itemOutputs('nuclearcraft:plate_du')
        .blastFurnaceTemp(4400)
        .duration(min/2)
        .EUt(luv)
    event.recipes.gtceu.electric_blast_furnace('elite_plate')
        .itemInputs('nuclearcraft:plate_du', '4x gtceu:boron_ingot', '4x gtceu:crystal_binder_dust')
        .itemOutputs('nuclearcraft:plate_elite')
        .blastFurnaceTemp(5300)
        .duration(min/2)
        .EUt(zpm)
    event.recipes.gtceu.electric_blast_furnace('extreme_plate')
        .itemInputs('nuclearcraft:plate_elite', '4x gtceu:extreme_ingot', '4x gtceu:hsla_steel_dust')
        .itemOutputs('nuclearcraft:plate_extreme')
        .blastFurnaceTemp(7200)
        .duration(min/2)
        .EUt(uv)

    event.recipes.gtceu.assembler('chassis')
        .circuit(16)
        .itemInputs('4x gtceu:lead_plate', '4x gtceu:steel_plate', 'gtceu:tough_alloy_frame')
        .itemOutputs('nuclearcraft:chassis')
        .duration(min/4)
        .EUt(ev/2)
    event.recipes.gtceu.assembler('fission_casing')
        .circuit(16)
        .itemInputs('4x gtceu:lead_plate', 'nuclearcraft:plate_advanced', 'gtceu:tough_alloy_frame')
        .itemOutputs('2x nuclearcraft:fission_reactor_casing')
        .duration(min/4)
        .EUt(ev)
    event.recipes.gtceu.forming_press('fission_glass')
        .itemInputs('nuclearcraft:fission_reactor_casing', '4x gtceu:laminated_glass')
        .itemOutputs('2x nuclearcraft:fission_reactor_glass')
        .duration(min/4)
        .EUt(ev)

//Heat Sinks
    function heatsink(id, input) {
        event.recipes.gtceu.canner('kubejs:gtceu/nuclearcraft/canner' + id + '_heat_sink')
            .itemInputs('nuclearcraft:empty_heat_sink', input)
            .itemOutputs('nuclearcraft:' + id + '_heat_sink')
            .EUt(hv)
            .duration(sec*15)
    }
    heatsink('lapis', '4x gtceu:lapis_dust')
    heatsink('emerald', '4x gtceu:emerald_dust')
    heatsink('copper', '4x gtceu:copper_dust')
    heatsink('cryotheum', '4x gtceu:cryotheum_dust')
    heatsink('slime', '4x minecraft:slime_ball')
    heatsink('netherite', '4x gtceu:netherite_alloy_dust')
    heatsink('enderium', '4x gtceu:ender_pearl_dust')
    heatsink('quartz', '4x gtceu:nether_quartz_dust')
    heatsink('end_stone', '4x gtceu:endstone_dust')
    heatsink('prismarine', '4x minecraft:prismarine_shard')
    heatsink('tin', '4x gtceu:tin_dust')
    heatsink('obsidian', '4x gtceu:obsidian_dust')
    heatsink('purpur', '4x nuclearcraft:purpur_dust')
    heatsink('fluorite', '4x gtceu:fluorite_dust')
    heatsink('redstone', '4x minecraft:redstone')
    heatsink('aluminum', '4x gtceu:aluminium_dust')
    heatsink('nether_brick', '4x minecraft:nether_brick')
    heatsink('carobbiite', '4x gtceu:carobbiite_dust')
    heatsink('lithium', '4x gtceu:lithium_dust')
    heatsink('magnesium', '4x gtceu:magnesium_dust')
    heatsink('diamond', '4x gtceu:diamond_dust')
    heatsink('arsenic', '4x gtceu:aresnic_dust')
    heatsink('villiaumite', '4x gtceu:villiaumite_dust')
    heatsink('iron', '4x gtceu:iron_dust')
    heatsink('manganese', '4x gtceu:manganese_dust')
    heatsink('lead', '4x gtceu:lead_dust')
    heatsink('gold', '4x gtceu:gold_dust')
    heatsink('boron', '4x gtceu:boron_dust')
    heatsink('glowstone', '4x minecraft:glowstone_dust')
    heatsink('silver', '4x gtceu:silver_dust')

    function heatsinkliquid(id, input) {
        event.recipes.gtceu.canner('kubejs:gtceu/nuclearcraft/canner' + id + '_heat_sink')
            .itemInputs('nuclearcraft:empty_heat_sink')
            .inputFluids(input)
            .itemOutputs('nuclearcraft:' + id + '_heat_sink')
            .EUt(hv)
            .duration(sec*15)
    }
    heatsinkliquid('water', 'minecraft:water 1000')
    heatsinkliquid('liquid_helium', 'gtceu:helium 1000')
    heatsinkliquid('liquid_nitrogen', 'gtceu:nitrogen 1000')

//Melter and Ingot Former
    const isotopes = Ingredient.of('#forge:isotopes').itemIds

    isotopes.forEach( (base) => {
        event.recipes.gtceu.extractor('kubejs:gtceu/extractor/nuclearcraft/' + base.slice(13))
            .itemInputs(base)
            .outputFluids(base + ' 144')
            .duration(sec*5)
            .EUt(hv)
        event.recipes.gtceu.fluid_solidifier('kubejs:gtceu/fluid_solidifier/nuclearcraft/' + base.slice(13))
            .notConsumable('gtceu:ball_casting_mold')
            .inputFluids(base + ' 144')
            .itemOutputs(base)
            .duration(sec)
            .EUt(ulv)
    })

    const nukefuel = Ingredient.of('#nuclearcraft:reactor_fuel').itemIds.filter((name) => {
        return name.includes('_tr') == false
    })

    nukefuel.forEach( (base) => {
        event.recipes.gtceu.extractor('kubejs:gtceu/extractor/nuclearcraft/' + base.slice(13))
            .itemInputs(base)
            .outputFluids(base + ' 144')
            .duration(sec*5)
            .EUt(hv)
        event.recipes.gtceu.fluid_solidifier('kubejs:gtceu/fluid_solidifier/nuclearcraft/' + base.slice(13))
            .notConsumable('gtceu:ball_casting_mold')
            .inputFluids(base + ' 144')
            .itemOutputs(base)
            .duration(sec)
            .EUt(ulv)
    })

//TR type Fuel
    const nukefueltr = Ingredient.of('#nuclearcraft:reactor_fuel').itemIds.filter((name) => {
        return name.includes('_tr') == true
    })

    nukefueltr.forEach( (base) => {
        event.recipes.gtceu.assembler('kubejs:gtceu/assembler/nuclearcraft/' + base.slice(13))
            .itemInputs(
                '9x ' + base.slice(0, -3),
                'gtceu:pyrolytic_carbon_ingot',
                'gtceu:graphite_dust',
                'gtceu:silicon_carbide_ingot'
            )
            .circuit(16)
            .itemOutputs('9x ' + base)
            .duration(sec*10)
            .EUt(hv)
    })

//Fluid Infuser
    const isotopesza = Ingredient.of('#forge:isotopes').itemIds.filter((name) => {
        return name.includes('_za') == true
    })
    const isotopesox = Ingredient.of('#forge:isotopes').itemIds.filter((name) => {
        return name.includes('_ox') == true
    })
    const isotopesni = Ingredient.of('#forge:isotopes').itemIds.filter((name) => {
        return name.includes('_ni') == true
    })

    isotopesza.forEach( (base) => {
        event.recipes.gtceu.canner('kubejs:gtceu/canner/nuclearcraft/' + base.slice(13))
            .itemInputs(base.slice(0, -3))
            .inputFluids('gtceu:zircaloy 144')
            .itemOutputs(base)
            .duration(sec*10)
            .EUt(hv)
    })
    isotopesox.forEach( (base) => {
        event.recipes.gtceu.canner('kubejs:gtceu/canner/nuclearcraft/' + base.slice(13))
            .itemInputs(base.slice(0, -3))
            .inputFluids('gtceu:oxygen 100')
            .itemOutputs(base)
            .duration(sec*10)
            .EUt(hv)
    })
    isotopesni.forEach( (base) => {
        event.recipes.gtceu.canner('kubejs:gtceu/canner/nuclearcraft/' + base.slice(13))
            .itemInputs(base.slice(0, -3))
            .inputFluids('gtceu:nitrogen 100')
            .itemOutputs(base)
            .duration(sec*10)
            .EUt(hv)
    })

    const nukefuelza = Ingredient.of('#nuclearcraft:reactor_fuel').itemIds.filter((name) => {
        return name.includes('_za') == true && name.includes('depleted_') == false
    })
    const nukefuelox = Ingredient.of('#nuclearcraft:reactor_fuel').itemIds.filter((name) => {
        return name.includes('_ox') == true && name.includes('depleted_') == false
    })
    const nukefuelni = Ingredient.of('#nuclearcraft:reactor_fuel').itemIds.filter((name) => {
        return name.includes('_ni') == true && name.includes('depleted_') == false
    })

    nukefuelza.forEach( (base) => {
        event.recipes.gtceu.canner('kubejs:gtceu/canner/nuclearcraft/' + base.slice(13))
            .itemInputs(base.slice(0, -3))
            .inputFluids('gtceu:zircaloy 1296')
            .itemOutputs(base)
            .duration(sec*10)
            .EUt(hv)
    })
    nukefuelox.forEach( (base) => {
        event.recipes.gtceu.canner('kubejs:gtceu/canner/nuclearcraft/' + base.slice(13))
            .itemInputs(base.slice(0, -3))
            .inputFluids('gtceu:oxygen 1000')
            .itemOutputs(base)
            .duration(sec*10)
            .EUt(hv)
    })
    nukefuelni.forEach( (base) => {
        event.recipes.gtceu.canner('kubejs:gtceu/canner/nuclearcraft/' + base.slice(13))
            .itemInputs(base.slice(0, -3))
            .inputFluids('gtceu:nitrogen 1000')
            .itemOutputs(base)
            .duration(sec*10)
            .EUt(hv)
    })

})