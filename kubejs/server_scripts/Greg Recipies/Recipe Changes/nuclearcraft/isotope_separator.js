ServerEvents.recipes(event => {
//Isotope Separator
    function isotope_sep(id, input, output_a, output_b, time) {
        event.recipes.gtceu.isotope_separator(id)
            .itemInputs(input)
            .itemOutputs(output_a, output_b)
            .EUt(hv)
            .duration(time)
    }
    isotope_sep('heu_235', '9x nuclearcraft:fuel_uranium_heu_235', '3x nuclearcraft:uranium_235', '6x nuclearcraft:uranium_238', sec*20)
    isotope_sep('lecf_249', '9x nuclearcraft:fuel_californium_lecf_249', 'nuclearcraft:californium_249', '8x nuclearcraft:californium_252', sec*20)
    isotope_sep('hecm_243', '9x nuclearcraft:fuel_curium_hecm_243', '3x nuclearcraft:curium_243', '6x nuclearcraft:curium_246', sec*20)
    isotope_sep('leb_248', '9x nuclearcraft:fuel_berkelium_leb_248', 'nuclearcraft:berkelium_248', '8x nuclearcraft:berkelium_247', sec*20)
    isotope_sep('heu_233', '9x nuclearcraft:fuel_uranium_heu_233', '3x nuclearcraft:uranium_233', '6x nuclearcraft:uranium_238', sec*20)
    isotope_sep('hecm_245', '9x nuclearcraft:fuel_curium_hecm_245', '3x nuclearcraft:curium_245', '6x nuclearcraft:curium_246', sec*20)
    isotope_sep('lithium', '10x gtceu:lithium_dust', '9x nuclearcraft:lithium_7', 'nuclearcraft:lithium_6', sec*50)
    isotope_sep('hecm_247', '9x nuclearcraft:fuel_curium_hecm_247', '3x nuclearcraft:curium_247', '6x nuclearcraft:curium_246', sec*20)
    isotope_sep('lecm_247', '9x nuclearcraft:fuel_curium_lecm_247', 'nuclearcraft:curium_247', '8x nuclearcraft:curium_246', sec*20)
    isotope_sep('lecm_245', '9x nuclearcraft:fuel_curium_lecm_245', 'nuclearcraft:curium_245', '8x nuclearcraft:curium_246', sec*20)
    isotope_sep('lecm_243', '9x nuclearcraft:fuel_curium_lecm_243', 'nuclearcraft:curium_243', '8x nuclearcraft:curium_246', sec*20)
    isotope_sep('hecf_249', '9x nuclearcraft:fuel_californium_hecf_249', '3x nuclearcraft:californium_249', '6x nuclearcraft:californium_252', sec*20)
    isotope_sep('lea_242', '9x nuclearcraft:fuel_americium_lea_242', 'nuclearcraft:americium_242', '8x nuclearcraft:americium_243', sec*20)
    isotope_sep('lep_241', '9x nuclearcraft:fuel_plutonium_lep_241', 'nuclearcraft:plutonium_241', '8x nuclearcraft:plutonium_242', sec*20)
    isotope_sep('hecf_251', '9x nuclearcraft:fuel_californium_hecf_251', '3x nuclearcraft:californium_251', '6x nuclearcraft:californium_252', sec*20)
    isotope_sep('hep_239', '9x nuclearcraft:fuel_plutonium_hep_239', '3x nuclearcraft:plutonium_239', '6x nuclearcraft:plutonium_242', sec*20)
    isotope_sep('hen_236', '9x nuclearcraft:fuel_neptunium_hen_236', '3x nuclearcraft:neptunium_236', '6x nuclearcraft:neptunium_237', sec*20)
    isotope_sep('lecf_251', '9x nuclearcraft:fuel_californium_lecf_251', 'nuclearcraft:californium_251', '8x nuclearcraft:californium_252', sec*20)
    isotope_sep('yellowcake', '10x nuclearcraft:yellowcake_dust', '7x nuclearcraft:uranium_238', '2x nuclearcraft:uranium_235', sec*50)
    isotope_sep('tbu', '9x nuclearcraft:fuel_thorium_tbu', 'nuclearcraft:thorium_232', '8x nuclearcraft:thorium_232', sec*20)
    isotope_sep('mix_239', '9x nuclearcraft:fuel_mixed_mix_239', 'nuclearcraft:plutonium_239', '8x nuclearcraft:plutonium_238_ni', sec*20)
    isotope_sep('len_236', '9x nuclearcraft:fuel_neptunium_len_236', 'nuclearcraft:neptunium_236', '8x nuclearcraft:neptunium_237', sec*20)
    isotope_sep('uranium', '10x gtceu:uranium_dust', '9x nuclearcraft:uranium_238', 'nuclearcraft:uranium_235', sec*40)
    isotope_sep('leu_235', '9x nuclearcraft:fuel_uranium_leu_235', 'nuclearcraft:uranium_235', '8x nuclearcraft:uranium_238', sec*20)
    isotope_sep('heb_248', '9x nuclearcraft:fuel_berkelium_heb_248', '3x nuclearcraft:berkelium_248', '6x nuclearcraft:berkelium_247', sec*20)
    isotope_sep('mix_241', '9x nuclearcraft:fuel_mixed_mix_241', 'nuclearcraft:plutonium_241_ni', '8x nuclearcraft:plutonium_238_ni', sec*20)
    isotope_sep('lep_239', '9x nuclearcraft:fuel_plutonium_lep_239', 'nuclearcraft:plutonium_239', '8x nuclearcraft:plutonium_242', sec*20)
    isotope_sep('leu_233', '9x nuclearcraft:fuel_uranium_leu_233', 'nuclearcraft:uranium_233', '8x nuclearcraft:uranium_238', sec*20)
    isotope_sep('hep_241', '9x nuclearcraft:fuel_plutonium_hep_241', '3x nuclearcraft:plutonium_241', '6x nuclearcraft:plutonium_242', sec*20)
    isotope_sep('hea_242', '9x nuclearcraft:fuel_americium_hea_242', '3x nuclearcraft:americium_242', '6x nuclearcraft:americium_243', sec*20)

    const iso_sep = ['hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv']

    iso_sep.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_isotope_separator'), ['EBE', 'ADA', 'CBC'],
            {A: 'gtceu:' + base + '_electric_piston', B: 'gtceu:item_filter', C: '#gtceu:circuits/' + base, 
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_basic'})
    })
    event.shaped(
        Item.of('gtceu:isotope_separator_multi'), ['EBE', 'ADA', 'CBC'],
        {A: 'gtceu:iv_electric_piston', B: 'gtceu:item_filter', C: '#gtceu:circuits/iv', 
        D: 'gtceu:iv_isotope_separator', E: 'nuclearcraft:plate_basic'})
})