ServerEvents.recipes(event => {
//Fuel Reprocessor
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_241')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_241')
        .itemOutputs(
            '3x gtceu:americium_ingot',
            'gtceu:americium_241_ingot',
            '2x gtceu:curium_246_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_lea_242_tr')
        .itemInputs('nuclearcraft:depleted_fuel_americium_lea_242_tr')
        .itemOutputs(
            '3x gtceu:americium_ingot',
            'gtceu:curium_243_ingot',
            '3x gtceu:curium_246_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_leb_248')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_leb_248')
        .itemOutputs(
            '5x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:californium_251_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_235_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_235_tr')
        .itemOutputs(
            '2x gtceu:uranium_ingot',
            'gtceu:plutonium_ingot',
            '3x gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_len_236_tr')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_len_236_tr')
        .itemOutputs(
            '5x gtceu:plutonium_242_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_thorium_tbu')
        .itemInputs('nuclearcraft:depleted_fuel_thorium_tbu')
        .itemOutputs(
            'gtceu:uranium_233_ingot',
            '5x gtceu:uranium_ingot',
            'gtceu:neptunium_236_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_241')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_241')
        .itemOutputs(
            '5x gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:curium_246_ingot',
            'gtceu:berkelium_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_heb_248_tr')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_heb_248')
        .itemOutputs(
            'gtceu:berkelium_248_ingot',
            'gtceu:californium_249_ingot',
            '2x gtceu:californium_ingot',
            '3x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_235_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_235')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:plutonium_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_lea_242')
        .itemInputs('nuclearcraft:depleted_fuel_americium_lea_242')
        .itemOutputs(
            '3x gtceu:americium_ingot',
            'gtceu:curium_243_ingot',
            '3x gtceu:curium_246_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)


    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_239_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239')
        .itemOutputs(
            '4x gtceu:americium_ingot',
            'gtceu:curium_243_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_heb_248')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_heb_248')
        .itemOutputs(
            'gtceu:berkelium_248_ingot',
            'gtceu:californium_249_ingot',
            '2x gtceu:californium_ingot',
            '3x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_239')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_239')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:plutonium_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_243_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_243')
        .itemOutputs(
            '4x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_247')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_247')
        .itemOutputs(
            'gtceu:californium_ingot',
            'gtceu:californium_249_ingot',
            '4x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_249')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_249')
        .itemOutputs(
            '8x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_249')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_249')
        .itemOutputs(
            '6x gtceu:californium_252_ingot',
            '2x gtceu:californium_250_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_245')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_245')
        .itemOutputs(
            '3x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_247_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_247_tr')
        .itemOutputs(
            '5x gtceu:curium_246_ingot',
            'gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_243')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_243')
        .itemOutputs(
            '3x gtceu:curium_245_ingot',
            'gtceu:curium_245_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_thorium_tbu_tr')
        .itemInputs('nuclearcraft:depleted_fuel_thorium_tbu_tr')
        .itemOutputs(
            'gtceu:uranium_233_ingot',
            '5x gtceu:uranium_ingot',
            'gtceu:neptunium_236_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_247_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239_tr')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:americium_ingot',
            'gtceu:curium_246_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_251')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_251')
        .itemOutputs(
            '8x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_239_tr')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_239_tr')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:plutonium_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_243_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_243_tr')
        .itemOutputs(
            '3x gtceu:curium_245_ingot',
            'gtceu:curium_245_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_249_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_249_tr')
        .itemOutputs(
            '6x gtceu:californium_252_ingot',
            '2x gtceu:californium_250_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_251_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_251_tr')
        .itemOutputs(
            '7x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_hen_236_tr')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_hen_236_tr')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_233')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_233')
        .itemOutputs(
            '5x gtceu:uranium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_251')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_251')
        .itemOutputs(
            '7x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_235')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_235')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:plutonium_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_243')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_243')
        .itemOutputs(
            '4x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_245')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245')
        .itemOutputs(
            '4x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            'gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_241')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_241')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_241_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_241_tr')
        .itemOutputs(
            '5x gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:curium_246_ingot',
            'gtceu:berkelium_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)


    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_233_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_233_tr')
        .itemOutputs(
            'gtceu:uranium_235_ingot',
            '2x gtceu:uranium_ingot',
            '3x gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_233')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_233')
        .itemOutputs(
            'gtceu:uranium_235_ingot',
            '2x gtceu:uranium_ingot',
            '3x gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_249_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_249_tr')
        .itemOutputs(
            '8x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_hen_236')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_hen_236')
        .itemOutputs(
            '4x gtceu:uranium_238_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_235')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_235')
        .itemOutputs(
            '2x gtceu:uranium_ingot',
            'gtceu:plutonium_ingot',
            '3x gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_251_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_251_tr')
        .itemOutputs(
            '8x gtceu:californium_252_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_247')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_247')
        .itemOutputs(
            '5x gtceu:curium_246_ingot',
            'gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_hea_242_tr')
        .itemInputs('nuclearcraft:depleted_fuel_americium_hea_242_tr')
        .itemOutputs(
            '3x gtceu:americium_ingot',
            'gtceu:curium_243_ingot',
            '2x gtceu:curium_246_ingot',
            'gtceu:berkelium_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_241_tr')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_241_tr')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_241_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_241_tr')
        .itemOutputs(
            '3x gtceu:americium_ingot',
            'gtceu:americium_241_ingot',
            '2x gtceu:curium_246_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_len_236')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_len_236')
        .itemOutputs(
            '5x gtceu:plutonium_242_ingot',
            'gtceu:neptunium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_233_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_233_tr')
        .itemOutputs(
            '5x gtceu:uranium_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:americium_ingot',
            'gtceu:strontium_90_dust',
            'gtceu:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_245_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245_tr')
        .itemOutputs(
            '4x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_239')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_239')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:americium_ingot',
            'gtceu:curium_246_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_239')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239')
        .itemOutputs(
            '4x gtceu:americium_ingot',
            'gtceu:curium_243_ingot',
            'gtceu:plutonium_241_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_245_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_245_tr')
        .itemOutputs(
            '3x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_leb_248_tr')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_leb_248_tr')
        .itemOutputs(
            '5x gtceu:berkelium_ingot',
            'gtceu:berkelium_248_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:californium_ingot',
            'gtceu:ruthenium_106_dust',
            'gtceu:promethium_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_hea_242')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245_tr')
        .itemOutputs(
            '4x gtceu:curium_246_ingot',
            'gtceu:curium_ingot',
            '2x gtceu:berkelium_ingot',
            'gtceu:californium_249_ingot',
            'gtceu:molybdenum_dust',
            'gtceu:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_239_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_239_tr')
        .itemOutputs(
            '4x gtceu:uranium_ingot',
            'gtceu:americium_ingot',
            'gtceu:curium_246_ingot',
            'gtceu:plutonium_242_ingot',
            'gtceu:promethium_dust',
            'gtceu:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)

    const fuel_rep = ['hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv', 'uev', 'uiv', 'uxv', 'opv']

    fuel_rep.forEach( (base) => {
        event.shaped(
            Item.of('gtceu:' + base + '_fuel_reprocessor'), ['EBE', 'CDC', 'EAE'],
            {A: 'gtceu:' + base + '_electric_piston', B: 'gtceu:' + base + '_electric_motor', C: '#gtceu:circuits/' + base, 
            D: 'gtceu:' + base + '_machine_hull', E: 'nuclearcraft:plate_basic'})
    })
    event.shaped(
        Item.of('gtceu:fuel_reprocessor_multi'), ['EBE', 'CDC', 'EAE'],
        {A: 'gtceu:iv_electric_piston', B: 'gtceu:iv_electric_motor', C: '#gtceu:circuits/iv', 
        D: 'gtceu:iv_fuel_reprocessor', E: 'nuclearcraft:plate_basic'})
})