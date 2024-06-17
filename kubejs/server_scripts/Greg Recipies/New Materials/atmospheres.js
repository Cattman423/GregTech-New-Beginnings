ServerEvents.recipes(event => {
//Collection
    event.recipes.gtceu.gas_collector('moon_air')
        .circuit(4)
        .outputFluids('gtceu:moon_air 10000')
        .dimension('ad_astra:moon')
        .duration(sec*10)
        .EUt(1024)
    event.recipes.gtceu.gas_collector('mars_air')
        .circuit(5)
        .outputFluids('gtceu:mars_air 10000')
        .dimension('ad_astra:mars')
        .duration(sec*10)
        .EUt(4096)
    event.recipes.gtceu.gas_collector('mercury_air')
        .circuit(5)
        .outputFluids('gtceu:mercury_air 10000')
        .dimension('ad_astra:mercury')
        .duration(sec*10)
        .EUt(16384)
    event.recipes.gtceu.gas_collector('venus_air')
        .circuit(6)
        .outputFluids('gtceu:venus_air 10000')
        .dimension('ad_astra:venus')
        .duration(sec*10)
        .EUt(16384)

//Centrifuge
    event.recipes.gtceu.centrifuge('moon_air')
        .inputFluids('gtceu:moon_air 10000')
        .outputFluids('gtceu:hydrogen 3900', 'gtceu:neon 1000')
        .duration(sec*80)
        .EUt(ev)
    event.recipes.gtceu.centrifuge('mars_air')
        .inputFluids('gtceu:mars_air 10000')
        .outputFluids('gtceu:carbon_dioxide 3900', 'gtceu:nitrogen 1000')
        .duration(sec*80)
        .EUt(iv)
    event.recipes.gtceu.centrifuge('mercury_air')
        .inputFluids('gtceu:mercury_air 10000')
        .outputFluids('gtceu:hydrogen 3900', 'gtceu:helium 1000')
        .duration(sec*80)
        .EUt(luv)
    event.recipes.gtceu.centrifuge('venus_air')
        .inputFluids('gtceu:venus_air 10000')
        .outputFluids('gtceu:carbon_dioxide 3900', 'gtceu:nitrogen 1000')
        .duration(sec*80)
        .EUt(luv)

//Freezing
    event.recipes.gtceu.vacuum_freezer('moon_air')
        .inputFluids('gtceu:moon_air 4000')
        .outputFluids('gtceu:liquid_moon_air 4000')
        .duration(sec*4)
        .EUt(luv)
    event.recipes.gtceu.vacuum_freezer('mars_air')
        .inputFluids('gtceu:mars_air 4000')
        .outputFluids('gtceu:liquid_mars_air 4000')
        .duration(sec*4)
        .EUt(zpm)
    event.recipes.gtceu.vacuum_freezer('mercury_air')
        .inputFluids('gtceu:mercury_air 4000')
        .outputFluids('gtceu:liquid_mercury_air 4000')
        .duration(sec*80)
        .EUt(uv)
    event.recipes.gtceu.vacuum_freezer('venus_air')
        .inputFluids('gtceu:venus_air 4000')
        .outputFluids('gtceu:liquid_venus_air 4000')
        .duration(sec*80)
        .EUt(uv)

//Distilation
    event.recipes.gtceu.distillation_tower('liquid_moon_air')
        .inputFluids('gtceu:liquid_moon_air 100000')
        .chancedOutput('gtceu:moon_stone_dust', 1000, 0)
        .outputFluids('gtceu:hydrogen 49000')
        .outputFluids('gtceu:neon 26000')
        .outputFluids('gtceu:argon 20000')
        .outputFluids('gtceu:ammonia 3000')
        .duration(sec*100)
        .EUt(luv)
    event.recipes.gtceu.distillation_tower('liquid_mars_air')
        .inputFluids('gtceu:liquid_mars_air 100000')
        .chancedOutput('gtceu:mars_stone_dust', 1000, 0)
        .outputFluids('gtceu:carbon_dioxide 92000')
        .outputFluids('gtceu:nitrogen 3000')
        .outputFluids('gtceu:argon 2000')
        .outputFluids('gtceu:krypton 1000')
        .outputFluids('gtceu:xenon 1000')
        .duration(sec*100)
        .EUt(zpm)
    event.recipes.gtceu.distillation_tower('liquid_mercury_air')
        .inputFluids('gtceu:liquid_mercury_air 100000')
        .chancedOutput('gtceu:mercury_stone_dust', 1000, 0)
        .outputFluids('gtceu:hydrogen 51000')
        .outputFluids('gtceu:helium 12000')
        .outputFluids('gtceu:oxygen 19000')
        //.outputFluids('gtceu:sodium 10000')
        //.outputFluids('gtceu:magnesium 6000')
        //.outputFluids('gtceu:potassium 2000')
        .duration(sec*100)
        .EUt(uv)
    event.recipes.gtceu.distillation_tower('liquid_venus_air')
        .inputFluids('gtceu:liquid_venus_air 100000')
        .chancedOutput('gtceu:venus_stone_dust', 1000, 0)
        .outputFluids('gtceu:carbon_dioxide 92000')
        .outputFluids('gtceu:nitrogen 4000')
        .outputFluids('gtceu:sulfur_dioxide 2000')
        .outputFluids('gtceu:argon 1000')
        .duration(sec*100)
        .EUt(uv)
})