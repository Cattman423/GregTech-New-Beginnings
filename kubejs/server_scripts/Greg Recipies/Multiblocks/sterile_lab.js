ServerEvents.recipes(event => {
    
    event.shaped(
        Item.of('gtceu:sterile_lab'), ['CAC', 'ABA', 'CAC'],
        {A: 'gtceu:double_sterile_alloy_plate', B: 'gtceu:large_brewer', C: '#gtceu:circuits/zpm'}
    )

    event.recipes.gtceu.sterile_lab('growth_medium_sterilization')
        .circuit(1)
        .inputFluids('gtceu:raw_growth_medium 100')
        .outputFluids('gtceu:sterilized_growth_medium 100')
        .duration(sec)
        .EUt(iv)
})