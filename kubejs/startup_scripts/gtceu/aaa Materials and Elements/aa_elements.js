GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create(
        'enriched_certus', //Element Name
        27, //Protons
        177, //Neutrons
        -1, //Half Life Seconds
        null, //Decay To
        'SiO+', //Atomic Symbol
        false//Is Isotope
        ) 
    event.create('mithril', 28, 178, -1, null, 'Mi', false) 
    event.create('protonium', 1, 0, -1, null, 'Po', false)
    event.create('adamantite', 29, 179, -1, null, 'Ad', false)
    event.create('netherite_scrap', 30, 180, -1, null, '?', false)
    event.create('netherite', 31, 181, -1, null, 'Nr', false)
    event.create('desh', 32, 182, -1, null, 'De', false)
    event.create('ostrum', 33, 183, -1, null, 'Os', false)
    event.create('calorite', 34, 184, -1, null, 'Ct', false)
})
