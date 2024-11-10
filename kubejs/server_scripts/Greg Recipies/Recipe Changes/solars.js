ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('ulv_solar')
        .itemInputs(
            '6x gtceu:solar_panel',
            '2x #gtceu:circuits/mv',
            'gtceu:silicon_wafer',
            'gtceu:gallium_arsenide_plate',
            'gtceu:graphene_quadruple_wire'
        )
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('gtceu:ulv_solar_panel')
        .duration(sec*20)
        .EUt(mv)
    event.recipes.gtceu.assembler('lv_solar')
        .itemInputs(
            '6x gtceu:ulv_solar_panel',
            '2x #gtceu:circuits/hv',
            'gtceu:phosphorus_wafer',
            'gtceu:polytetrafluoroethylene_plate',
            '2x gtceu:magnesium_diboride_single_wire'
        )
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('gtceu:lv_solar_panel')
        .duration(sec*30)
        .EUt(hv)
    event.recipes.gtceu.assembler('mv_solar')
        .itemInputs(
            '6x gtceu:lv_solar_panel',
            '2x #gtceu:circuits/ev',
            'gtceu:phosphorus_wafer',
            'gtceu:epoxy_plate',
            '2x gtceu:flux_plated_desh_single_wire',
            'gtceu:ulpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:mv_solar_panel')
        .duration(sec*40)
        .EUt(ev)
    event.recipes.gtceu.assembler('hv_solar')
        .itemInputs(
            '6x gtceu:mv_solar_panel',
            '4x #gtceu:circuits/iv',
            '2x gtceu:phosphorus_wafer',
            'gtceu:indium_gallium_phosphide_plate',
            '2x gtceu:uranium_triplatinum_single_wire',
            'gtceu:lpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('gtceu:hv_solar_panel')
        .duration(sec*50)
        .EUt(iv)
    event.recipes.gtceu.assembly_line('ev_solar')
        .itemInputs(
            '6x gtceu:hv_solar_panel',
            '4x #gtceu:circuits/luv',
            '2x gtceu:naquadah_wafer',
            'gtceu:polybenzimidazole_plate',
            '4x gtceu:samarium_iron_arsenic_oxide_single_wire',
            'gtceu:mpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('gtceu:ev_solar_panel')
        .duration(sec*60)
        .EUt(luv)
        .stationResearch(b => b.researchStack(Item.of('gtceu:hv_solar_panel')).EUt(luv).CWUt(16))

    event.recipes.gtceu.assembly_line('iv_solar')
        .itemInputs(
            '6x gtceu:ev_solar_panel',
            '4x #gtceu:circuits/zpm',
            '4x gtceu:naquadah_wafer',
            '2x gtceu:phosphorus_wafer',
            '2x gtceu:polybenzimidazole_plate',
            '4x gtceu:indium_tin_barium_titanium_cuprate_single_wire',
            'gtceu:hpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:iv_solar_panel')
        .duration(sec*70)
        .EUt(zpm)
        .stationResearch(b => b.researchStack(Item.of('gtceu:ev_solar_panel')).EUt(zpm).CWUt(32))

    event.recipes.gtceu.assembly_line('luv_solar')
        .itemInputs(
            '6x gtceu:iv_solar_panel',
            '4x #gtceu:circuits/uv',
            '2x #gtceu:circuits/zpm',
            '4x gtceu:neutronium_wafer',
            '2x gtceu:naquadah_wafer',
            '4x gtceu:polybenzimidazole_plate',
            '6x gtceu:uranium_rhodium_dinaquadide_double_wire',
            'gtceu:uhpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 2304')
        .itemOutputs('gtceu:luv_solar_panel')
        .duration(sec*80)
        .EUt(uv)
        .stationResearch(b => b.researchStack(Item.of('gtceu:iv_solar_panel')).EUt(uv).CWUt(64))

    event.recipes.gtceu.assembly_line('zpm_solar')
        .itemInputs(
            '6x gtceu:luv_solar_panel',
            '4x #gtceu:circuits/uhv',
            '2x #gtceu:circuits/uv',
            '8x gtceu:neutronium_wafer',
            '4x gtceu:naquadah_wafer',
            '8x gtceu:polybenzimidazole_plate',
            '12x gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire',
            '2x gtceu:uhpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 4608')
        .itemOutputs('gtceu:zpm_solar_panel')
        .duration(sec*90)
        .EUt(uhv)
        .stationResearch(b => b.researchStack(Item.of('gtceu:luv_solar_panel')).EUt(uhv).CWUt(128))

    event.recipes.gtceu.assembly_line('uv_solar')
        .itemInputs(
            '6x gtceu:zpm_solar_panel',
            '4x #gtceu:circuits/uev',
            '2x #gtceu:circuits/uhv',
            '16x gtceu:neutronium_wafer',
            '8x gtceu:naquadah_wafer',
            '16x gtceu:polybenzimidazole_plate',
            '24x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire',
            '4x gtceu:uhpic_chip'
        )
        .inputFluids('gtceu:soldering_alloy 4608')
        .itemOutputs('gtceu:uv_solar_panel')
        .duration(sec*90)
        .EUt(uev)
        .stationResearch(b => b.researchStack(Item.of('gtceu:zpm_solar_panel')).EUt(uev).CWUt(256))

})