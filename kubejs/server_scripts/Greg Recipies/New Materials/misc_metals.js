ServerEvents.recipes(event => {
//Refined Radiance

//Sterile Alloy
    event.recipes.gtceu.mixer('sterile_alloy_dust')
        .circuit(16)
        .itemInputs('2x gtceu:sulfur_dust', 'gtceu:tellurium_dust', 'gtceu:refined_radiance_dust', 'gtceu:iodine_dust', 'gtceu:lithium_dust')
        .itemOutputs('6x gtceu:sterile_alloy_dust')
        .EUt(uv)
        .duration(sec*20)

//Magneto-stabilized Diether
    /*event.recipes.gtceu.canner('magneto_diether')
        .inputFluids('gtceu:ether 2000')
        .itemOutputs('gtceu:magneto_diether_ingot')
        .duration(min*60)
        .EUt(uv)*/
    //event.recipes.gtceu.autoclave('ether')

//Ether

//Chromatic Compound
    event.recipes.gtceu.mixer('chrome_comp')
        .itemInputs('3x minecraft:glowstone_dust', '3x gtceu:obsidian_dust', 'gtceu:rose_quartz_dust')
        .itemOutputs('7x gtceu:chromatic_compound_dust')
        .duration(sec*30)
        .EUt(iv)

//Refined Radiance
    event.recipes.gtceu.fusion_reactor('radiance')
        .inputFluids('gtceu:ether 16', 'gtceu:chromatic_compound 16')
        .outputFluids('gtceu:refined_radiance_plasma 16')
        .duration(sec*1.6)
        .EUt(zpm)
        .fusionStartEU(300000000)

    event.recipes.gtceu.plasma_generator('radiance')
        .inputFluids('gtceu:refined_radiance_plasma')
        .outputFluids('gtceu:refined_radiance')
        .duration(sec*15)
        .EUt(-GTValues.V[GTValues.IV])

//Oganession and Stabilized Oganession
    event.recipes.gtceu.fusion_reactor('oganesson')
        .inputFluids('gtceu:lead 16', 'gtceu:krypton 16')
        .outputFluids('gtceu:oganesson_plasma 16')
        .duration(sec*1.6)
        .EUt(uv)
        .fusionStartEU(620000000)

    event.recipes.gtceu.plasma_generator('oganesson')
        .inputFluids('gtceu:oganesson_plasma')
        .outputFluids('gtceu:stabilized_oganesson')
        .duration(sec*15)
        .EUt(-GTValues.V[GTValues.ZPM])

//ALON and ALON Glass
    event.recipes.gtceu.mixer('alon_dust')
        .circuit(16)
        .itemInputs('3x gtceu:aluminium_dust')
        .inputFluids('gtceu:oxygen 3000', 'gtceu:nitrogen 1000')
        .itemOutputs('7x gtceu:aluminium_oxynitride_dust')
        .duration(sec*30)
        .EUt(uv)

    event.recipes.gtceu.assembler('alon_glass')
        .itemInputs('gtceu:fusion_glass')
        .inputFluids('gtceu:aluminium_oxynitride 288')
        .itemOutputs('kubejs:alon_glass')
        .duration(sec*5)
        .EUt(uv)
})