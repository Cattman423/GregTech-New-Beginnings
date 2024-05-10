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
    event.create('netherite_scrap', 30, 180, -1, null, 'Ns', false)
})
