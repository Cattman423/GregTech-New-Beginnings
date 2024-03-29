StartupEvents.registry('item', event => {
//Launch vehicles
    event.create('leo_lv')
        .displayName('Low Earth Launch Vehicle')
        .texture('gtceu:item/space_production/leo_lv')
        .tooltip('Your first launch vehicle')

    event.create('ip_lv')
        .displayName('Interplanetary Launch Vehicle')
        .texture('gtceu:item/space_production/ip_lv')
        .tooltip('A stronger launch vehicle for bigger payloads')

    event.create('ds_lv')
        .displayName('Deep Space Launch Vehicle')
        .texture('gtceu:item/space_production/ds_lv')
        .tooltip('For when you need resources from beyond the Sun')

//Mining vehicles
    event.create('mining_ship')
        .displayName('Asteroid Mining Ship')
        .texture('gtceu:item/space_production/mining_ship')
        .tooltip('Mines resources from space rocks and brings them home')

    event.create('mining_lander')
        .displayName('Extraterrestrial Mining Lander')
        .texture('gtceu:item/space_production/mining_lander')
        .tooltip('Lands on forigen bodies and returns with raw materials')
})