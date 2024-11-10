ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cupronickel_coil')
        .circuit(16)
        .itemInputs('8x gtceu:cupronickel_double_wire', '8x gtceu:bronze_foil') //8
        .inputFluids('gtceu:tin_alloy 144')
        .itemOutputs('gtceu:cupronickel_coil_block')
        .duration(sec*10)
        .EUt(lv)

    event.recipes.gtceu.assembler('kanthal_coil')
        .circuit(16)
        .itemInputs('8x gtceu:kanthal_double_wire', '8x gtceu:aluminium_foil') //12
        .inputFluids('gtceu:cupronickel 144')
        .itemOutputs('gtceu:kanthal_coil_block')
        .duration(sec*15)
        .EUt(mv)

    event.recipes.gtceu.assembler('nichrome_coil')
        .circuit(16)
        .itemInputs('8x gtceu:nichrome_double_wire', '8x gtceu:stainless_steel_foil') //16
        .inputFluids('gtceu:kanthal 144')
        .itemOutputs('gtceu:nichrome_coil_block')
        .duration(sec*20)
        .EUt(hv)

    event.recipes.gtceu.assembler('rtm_alloy_coil')
        .circuit(16)
        .itemInputs('8x gtceu:rtm_alloy_double_wire', '8x gtceu:vanadium_steel_foil') //20
        .inputFluids('gtceu:nichrome 144')
        .itemOutputs('gtceu:rtm_alloy_coil_block')
        .duration(sec*25)
        .EUt(ev)

    event.recipes.gtceu.assembler('hssg_coil')
        .circuit(16)
        .itemInputs('8x gtceu:hssg_double_wire', '8x gtceu:tungsten_carbide_foil') //24
        .inputFluids('gtceu:rtm_alloy 144')
        .itemOutputs('gtceu:hssg_coil_block')
        .duration(sec*30)
        .EUt(iv)

    event.recipes.gtceu.assembler('hsss_coil')
        .circuit(16)
        .itemInputs('8x gtceu:hsss_double_wire', '8x gtceu:manyullyn_foil') //28
        .inputFluids('gtceu:hssg 144')
        .itemOutputs('kubejs:hsss_coil_block')
        .duration(sec*35)
        .EUt(iv)

    event.recipes.gtceu.assembler('naquadah_coil')
        .circuit(16)
        .itemInputs('8x gtceu:naquadah_double_wire', '8x gtceu:osmium_foil') //32
        .inputFluids('gtceu:hsss 144')
        .itemOutputs('gtceu:naquadah_coil_block')
        .duration(sec*40)
        .EUt(luv)

    event.recipes.gtceu.assembler('mithril_coil')
        .circuit(16)
        .itemInputs('8x gtceu:mithril_double_wire', '8x gtceu:niobium_nitride_foil') //36
        .inputFluids('gtceu:naquadah 144')
        .itemOutputs('kubejs:mithril_coil_block')
        .duration(sec*45)
        .EUt(luv)

    event.recipes.gtceu.assembler('trinium_coil')
        .circuit(16)
        .itemInputs('8x gtceu:trinium_double_wire', '8x gtceu:enriched_naquadah_foil') //40
        .inputFluids('gtceu:mithril 144')
        .itemOutputs('gtceu:trinium_coil_block')
        .duration(sec*50)
        .EUt(zpm)

    event.recipes.gtceu.assembler('chadium_coil')
        .circuit(16)
        .itemInputs('8x gtceu:chadium_double_wire', '8x gtceu:niobium_nitride_foil') //44
        .inputFluids('gtceu:trinium 144')
        .itemOutputs('kubejs:chadium_coil_block')
        .duration(sec*55)
        .EUt(uv)

    event.recipes.gtceu.assembler('tritanium_coil')
        .circuit(16)
        .itemInputs('8x gtceu:tritanium_double_wire', '8x gtceu:naquadria_foil') //48
        .inputFluids('gtceu:chadium 144')
        .itemOutputs('gtceu:tritanium_coil_block')
        .duration(min)
        .EUt(uhv)

    event.recipes.gtceu.assembly_line('awakened_draconium_coil')
        .itemInputs(
            '#gtceu:circuits/uhv', 
            '8x gtceu:awakened_draconium_double_wire',
            '8x gtceu:awakened_draconium_screw',
            '64x gtceu:naquadria_foil',
            '32x gtceu:naquadria_foil'
        )
        .inputFluids('gtceu:tritanium 576')
        .itemOutputs('kubejs:awakened_draconium_coil_block')
        .duration(min)
        .EUt(uev)
        .stationResearch(b => b.researchStack(Item.of('gtceu:tritanium_coil_block')).EUt(uev).CWUt(128))

    event.recipes.gtceu.assembly_line('stellar_matter_coil')
        .itemInputs(
            '#gtceu:circuits/uev', 
            '8x gtceu:stellar_matter_double_wire',
            '8x gtceu:stellar_matter_screw',
            '64x gtceu:naquadria_foil',
            '32x gtceu:naquadria_foil'
        )
        .inputFluids('gtceu:awakened_draconium 576')
        .itemOutputs('kubejs:stellar_matter_coil_block')
        .duration(min)
        .EUt(uiv)
        .stationResearch(b => b.researchStack(Item.of('kubejs:awakened_draconium_coil_block')).EUt(uiv).CWUt(256))

    event.recipes.gtceu.assembly_line('infinity_coil')
        .itemInputs(
            '#gtceu:circuits/uiv', 
            '8x gtceu:infinity_double_wire',
            '8x gtceu:infinity_screw',
            'extendedcrafting:ultimate_singularity',
            '64x gtceu:naquadria_foil',
            '64x gtceu:naquadria_foil',
            '64x gtceu:naquadria_foil',
            '64x gtceu:naquadria_foil',
            '64x gtceu:naquadria_foil',
            '64x gtceu:naquadria_foil'
        )
        .inputFluids('gtceu:stellar_matter 576')
        .itemOutputs('kubejs:infinity_coil_block')
        .duration(min)
        .EUt(uxv)
        .stationResearch(b => b.researchStack(Item.of('kubejs:stellar_matter_coil_block')).EUt(uxv).CWUt(512))
})