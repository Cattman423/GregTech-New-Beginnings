//Machine uses
ServerEvents.recipes(event => {
    function steamer(id){
        event.recipes.gtceu.steam_engine_multi(id)
            .inputFluids('gtceu:steam 1000')
            .EUt(-288)
            .duration(20)
    }
    steamer('lv_9_amp')
//Machine recipes
    event.shaped(
        Item.of('gtceu:steam_engine_multi'),
        [
            'BCB',
            'BAB',
            'BCB'
        ],
        {
            A: 'create:steam_engine',
            B: 'gtceu:steam_machine_casing',
            C: 'create:large_cogwheel'
        }
        ) 
})