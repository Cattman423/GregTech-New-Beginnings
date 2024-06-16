ServerEvents.recipes(event => {
    event.remove({mod: 'melter'})

    event.shaped(
        Item.of('melter:melter',),
        [
            'A A',
            'ABA',
            'CAC'
        ],
        {
            A: 'gtceu:poor_steel_plate',
            B: '#forge:tools/hammers',
            C: 'gtceu:andesite_alloy_bolt'
        }
    )
    event.recipes.melterMelting(Fluid.of('gtceu:glue', 100),"gtceu:sticky_resin").processingTime(200)
    event.recipes.melterMelting(Fluid.of('gtceu:red_alloy', 96),"gtceu:red_alloy_ingot").processingTime(200).minimumHeat(4)
    event.recipes.melterMelting(Fluid.of('gtceu:rose_quartz', 96),"create:rose_quartz").processingTime(200).minimumHeat(3)
})