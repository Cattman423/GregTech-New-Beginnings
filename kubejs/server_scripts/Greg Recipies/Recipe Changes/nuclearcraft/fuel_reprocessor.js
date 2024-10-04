ServerEvents.recipes(event => {
//Fuel Reprocessor
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_241')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_241')
        .itemOutputs(
            '3x nuclearcraft:americium_243',
            'nuclearcraft:americium_241',
            '2x nuclearcraft:curium_246',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_lea_242_tr')
        .itemInputs('nuclearcraft:depleted_fuel_americium_lea_242_tr')
        .itemOutputs(
            '3x nuclearcraft:americium_243',
            'nuclearcraft:curium_243',
            '3x nuclearcraft:curium_246',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_leb_248')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_leb_248')
        .itemOutputs(
            '5x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'nuclearcraft:californium_249',
            'nuclearcraft:californium_251',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_235_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_235_tr')
        .itemOutputs(
            '2x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_239',
            '3x nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_len_236_tr')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_len_236_tr')
        .itemOutputs(
            '5x nuclearcraft:plutonium_242',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'gtceu:molybdenum_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_thorium_tbu')
        .itemInputs('nuclearcraft:depleted_fuel_thorium_tbu')
        .itemOutputs(
            'nuclearcraft:uranium_233',
            '5x nuclearcraft:uranium_238',
            'nuclearcraft:neptunium_236',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_241')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_241')
        .itemOutputs(
            '5x nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:curium_246',
            'nuclearcraft:berkelium_247',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_heb_248_tr')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_heb_248')
        .itemOutputs(
            'nuclearcraft:berkelium_248',
            'nuclearcraft:californium_249',
            '2x nuclearcraft:californium_251',
            '3x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_235_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_235')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_239',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_lea_242')
        .itemInputs('nuclearcraft:depleted_fuel_americium_lea_242')
        .itemOutputs(
            '3x nuclearcraft:americium_243',
            'nuclearcraft:curium_243',
            '3x nuclearcraft:curium_246',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)


    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_239_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239')
        .itemOutputs(
            '4x nuclearcraft:americium_243',
            'nuclearcraft:curium_243',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_heb_248')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_heb_248')
        .itemOutputs(
            'nuclearcraft:berkelium_248',
            'nuclearcraft:californium_249',
            '2x nuclearcraft:californium_251',
            '3x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_239')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_239')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_239',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_243_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_243')
        .itemOutputs(
            '4x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_247')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_247')
        .itemOutputs(
            'nuclearcraft:californium_251',
            'nuclearcraft:californium_249',
            '4x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_249')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_249')
        .itemOutputs(
            '8x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_249')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_249')
        .itemOutputs(
            '6x nuclearcraft:californium_252',
            '2x nuclearcraft:californium_250',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_245')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_245')
        .itemOutputs(
            '3x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_247_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_247_tr')
        .itemOutputs(
            '5x nuclearcraft:curium_246',
            'nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_243')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_243')
        .itemOutputs(
            '3x nuclearcraft:curium_245',
            'nuclearcraft:curium_245',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_thorium_tbu_tr')
        .itemInputs('nuclearcraft:depleted_fuel_thorium_tbu_tr')
        .itemOutputs(
            'nuclearcraft:uranium_233',
            '5x nuclearcraft:uranium_238',
            'nuclearcraft:neptunium_236',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_247_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239_tr')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:americium_243',
            'nuclearcraft:curium_246',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_251')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_251')
        .itemOutputs(
            '8x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_239_tr')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_239_tr')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_239',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_243_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_243_tr')
        .itemOutputs(
            '3x nuclearcraft:curium_245',
            'nuclearcraft:curium_245',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_249_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_249_tr')
        .itemOutputs(
            '6x nuclearcraft:californium_252',
            '2x nuclearcraft:californium_250',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_251_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_251_tr')
        .itemOutputs(
            '7x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_hen_236_tr')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_hen_236_tr')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'gtceu:molybdenum_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_233')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_233')
        .itemOutputs(
            '5x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_hecf_251')
        .itemInputs('nuclearcraft:depleted_fuel_californium_hecf_251')
        .itemOutputs(
            '7x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_235')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_235')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_239',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_243')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_243')
        .itemOutputs(
            '4x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_245')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245')
        .itemOutputs(
            '4x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            'nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_241')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_241')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'gtceu:molybdenum_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_241_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_241_tr')
        .itemOutputs(
            '5x nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:curium_246',
            'nuclearcraft:berkelium_247',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)


    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_233_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_233_tr')
        .itemOutputs(
            'nuclearcraft:uranium_235',
            '2x nuclearcraft:uranium_238',
            '3x nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_233')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_233')
        .itemOutputs(
            'nuclearcraft:uranium_235',
            '2x nuclearcraft:uranium_238',
            '3x nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_249_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_249_tr')
        .itemOutputs(
            '8x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_hen_236')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_hen_236')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'gtceu:molybdenum_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_heu_235')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_heu_235')
        .itemOutputs(
            '2x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_239',
            '3x nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_californium_lecf_251_tr')
        .itemInputs('nuclearcraft:depleted_fuel_californium_lecf_251_tr')
        .itemOutputs(
            '8x nuclearcraft:californium_252',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_247')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_247')
        .itemOutputs(
            '5x nuclearcraft:curium_246',
            'nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'nuclearcraft:berkelium_248',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_hea_242_tr')
        .itemInputs('nuclearcraft:depleted_fuel_americium_hea_242_tr')
        .itemOutputs(
            '3x nuclearcraft:americium_243',
            'nuclearcraft:curium_243',
            '2x nuclearcraft:curium_246',
            'nuclearcraft:berkelium_247',
            'gtceu:molybdenum_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_mixed_mix_241_tr')
        .itemInputs('nuclearcraft:depleted_fuel_mixed_mix_241_tr')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'gtceu:molybdenum_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_241_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_241_tr')
        .itemOutputs(
            '3x nuclearcraft:americium_243',
            'nuclearcraft:americium_241',
            '2x nuclearcraft:curium_246',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_neptunium_len_236')
        .itemInputs('nuclearcraft:depleted_fuel_neptunium_len_236')
        .itemOutputs(
            '5x nuclearcraft:plutonium_242',
            'nuclearcraft:neptunium_237',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'gtceu:molybdenum_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_uranium_leu_233_tr')
        .itemInputs('nuclearcraft:depleted_fuel_uranium_leu_233_tr')
        .itemOutputs(
            '5x nuclearcraft:uranium_238',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:americium_243',
            'nuclearcraft:strontium_90_dust',
            'nuclearcraft:caesium_137_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_curium_lecm_245_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245_tr')
        .itemOutputs(
            '4x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_239')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_239')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:americium_243',
            'nuclearcraft:curium_246',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_hep_239')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_hep_239')
        .itemOutputs(
            '4x nuclearcraft:americium_243',
            'nuclearcraft:curium_243',
            'nuclearcraft:plutonium_241',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
        )
        .EUt(hv)
        .duration(300)


    event.recipes.gtceu.fuel_reprocessor('d_f_curium_hecm_245_tr')
        .itemInputs('nuclearcraft:depleted_fuel_curium_hecm_245_tr')
        .itemOutputs(
            '3x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_berkelium_leb_248_tr')
        .itemInputs('nuclearcraft:depleted_fuel_berkelium_leb_248_tr')
        .itemOutputs(
            '5x nuclearcraft:berkelium_247',
            'nuclearcraft:berkelium_248',
            'nuclearcraft:californium_249',
            'nuclearcraft:californium_251',
            'nuclearcraft:ruthenium_106_dust',
            'nuclearcraft:promethium_147_dust'
        )
        .EUt(hv)
        .duration(100)
    event.recipes.gtceu.fuel_reprocessor('d_f_americium_hea_242')
        .itemInputs('nuclearcraft:depleted_fuel_curium_lecm_245_tr')
        .itemOutputs(
            '4x nuclearcraft:curium_246',
            'nuclearcraft:curium_247',
            '2x nuclearcraft:berkelium_247',
            'nuclearcraft:californium_249',
            'gtceu:molybdenum_dust',
            'nuclearcraft:europium_155_dust'
        )
        .EUt(hv)
        .duration(300)
    event.recipes.gtceu.fuel_reprocessor('d_f_plutonium_lep_239_tr')
        .itemInputs('nuclearcraft:depleted_fuel_plutonium_lep_239_tr')
        .itemOutputs(
            '4x nuclearcraft:uranium_238',
            'nuclearcraft:americium_243',
            'nuclearcraft:curium_246',
            'nuclearcraft:plutonium_242',
            'nuclearcraft:promethium_147_dust',
            'nuclearcraft:strontium_90_dust'
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
})