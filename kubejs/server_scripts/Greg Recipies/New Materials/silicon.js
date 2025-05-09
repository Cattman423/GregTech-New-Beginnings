ServerEvents.recipes(event => {
//Boules
    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/silicon_boule' },
        'gtceu:silicon_dust',
        'gtceu:polysilicon_dust'
    )
    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/phosphorus_boule' },
        'gtceu:silicon_dust',
        'gtceu:polysilicon_dust'
    )
    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/naquadah_boule' },
        'gtceu:silicon_block',
        'gtceu:polysilicon_block'
    )
    event.replaceInput(
        { id: 'gtceu:electric_blast_furnace/neutronium_boule' },
        'gtceu:silicon_block',
        'gtceu:polysilicon_block'
    )
//Circuit Crafting
    event.replaceInput(
        { id: 'gtceu:assembler/transistor' },
        'gtceu:silicon_plate',
        'gtceu:polysilicon_plate'
    )
//Poly Si
    event.recipes.gtceu.chemical_reactor('poly_si_sicl4')
        .circuit(1)
        .itemInputs('4x gtceu:sodium_dust')
        .inputFluids('gtceu:tetrachlorosilane 1000')
        .itemOutputs('gtceu:polysilicon_dust', '8x gtceu:salt_dust')
        .duration(sec*10)
        .EUt(lv)

    event.recipes.gtceu.chemical_reactor('poly_si_sih4')
        .circuit(1)
        .inputFluids('gtceu:silane 1000')
        .itemOutputs('gtceu:polysilicon_dust')
        .outputFluids('gtceu:hydrogen 4000')
        .duration(sec*10)
        .EUt(lv)

    event.recipes.gtceu.chemical_reactor('poly_si_hsicl3')
        .circuit(1)
        .inputFluids('gtceu:trichlorosilane 1000', 'gtceu:hydrogen 2000')
        .itemOutputs('gtceu:polysilicon_dust')
        .outputFluids('gtceu:hydrochloric_acid 3000')
        .duration(sec*10)
        .EUt(lv)

    event.recipes.gtceu.chemical_reactor('poly_si_sicl4_w/zn')
        .circuit(1)
        .itemInputs('2x gtceu:zinc_dust')
        .inputFluids('gtceu:tetrachlorosilane 1000')
        .itemOutputs('gtceu:polysilicon_dust', '6x gtceu:zinc_chloride_dust')
        .duration(sec*10)
        .EUt(lv)

    event.recipes.gtceu.electric_blast_furnace('poly_si')
        .circuit(1)
        .itemInputs('gtceu:polysilicon_dust')
        .itemOutputs('gtceu:hot_polysilicon_ingot')
        .blastFurnaceTemp(2273)
        .duration(sec*120)
        .EUt(mv)

    event.recipes.gtceu.chemical_bath('poly_si_water')
        .itemInputs('gtceu:hot_polysilicon_ingot')
        .inputFluids('minecraft:water 100')
        .itemOutputs('gtceu:polysilicon_ingot')
        .duration(sec*20)
        .EUt(mv)

    event.recipes.gtceu.chemical_bath('poly_si_di_water')
        .itemInputs('gtceu:hot_polysilicon_ingot')
        .inputFluids('gtceu:distilled_water 100')
        .itemOutputs('gtceu:polysilicon_ingot')
        .duration(sec*12.5)
        .EUt(mv)

//Tetrachlorosilane & Silane
    event.recipes.gtceu.chemical_reactor('tetrachlorosilane_hsicl3')
        .circuit(2)
        .inputFluids('gtceu:trichlorosilane 4000')
        .outputFluids('gtceu:tetrachlorosilane 3000', 'gtceu:silane 1000')
        .duration(sec*10)
        .EUt(lv)

    event.recipes.gtceu.chemical_reactor('tetrachlorosilane_si_4cl')
        .circuit(2)
        .itemInputs('gtceu:silicon_dust')
        .inputFluids('gtceu:chlorine 4000')
        .outputFluids('gtceu:tetrachlorosilane 1000')
        .duration(sec*10)
        .EUt(lv)

//Trichlorosilane
    event.recipes.gtceu.chemical_reactor('trichlorosilane_si_3hcl')
        .itemInputs('gtceu:silicon_dust')
        .inputFluids('gtceu:hydrochloric_acid 3000')
        .outputFluids('gtceu:trichlorosilane 1000', 'gtceu:hydrogen 2000')
        .duration(sec*10)
        .EUt(lv)
})
