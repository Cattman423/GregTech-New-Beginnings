ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:builders_press'),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'gtceu:solid_machine_casing',
            B: '#gtceu:circuits/lv',
            C: 'gtceu:lv_fluid_solidifier'
        }
    )
})