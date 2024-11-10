ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:polymerization_plant'), ['ABA', 'DCD', 'ABA'],
        {A: '#gtceu:circuits/iv', B: 'gtceu:tungsten_steel_nonuple_fluid_pipe', C: 'gtceu:stainless_evaporation_casing', D: 'gtceu:iv_chemical_reactor'})

    event.recipes.gtceu.polymerization_plant('bakelite')
        .circuit(1)
        .itemInputs('7x gtceu:carbon_dust')
        .inputFluids('gtceu:hydrogen 8000', 'gtceu:oxygen 2000')
        .outputFluids('gtceu:bakelite 17000')
        .EUt(lv)
        .duration(min)
        
    event.recipes.gtceu.polymerization_plant('mass_rubber')
        .circuit(1)
        .itemInputs('64x gtceu:carbon_dust')
        .inputFluids('gtceu:oxygen 16000', 'gtceu:hydrogen 16000', 'gtceu:chlorine 16000')
        .outputFluids(
            'gtceu:silicone_rubber 9216', 'gtceu:styrene_butadiene_rubber 9216', 'gtceu:polyphenylene_sulfide 18432',
            'gtceu:rubber 36864'
        )
        .EUt(zpm)
        .duration(min)
        
    event.recipes.gtceu.polymerization_plant('mass_polymer')
        .circuit(2)
        .itemInputs('64x gtceu:carbon_dust')
        .inputFluids('gtceu:oxygen 16000', 'gtceu:hydrogen 16000', 'gtceu:chlorine 16000', 'gtceu:fluorine 16000')
        .outputFluids(
            'gtceu:polyethylene 36864', 'gtceu:polyvinyl_chloride 18432', //'gtceu:polystyrene 9216',
            'gtceu:polytetrafluoroethylene 18432', 'gtceu:epoxy 9216', 'gtceu:polybenzimidazole 9216'
        )
        .EUt(zpm)
        .duration(min)
})