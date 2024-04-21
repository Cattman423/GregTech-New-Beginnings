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
    event.create(
        'mithril', //Element Name
        28, //Protons
        178, //Neutrons
        -1, //Half Life Seconds
        null, //Decay To
        'Mi', //Atomic Symbol
        false//Is Isotope
        ) 
    event.create(
        'protonium',
        1,
        0,
        -1,
        null,
        'Po',
        false
    )
 })