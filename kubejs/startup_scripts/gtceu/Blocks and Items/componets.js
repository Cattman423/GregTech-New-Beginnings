StartupEvents.registry('item', event => {
//Bee Stuff
    event.create('bee_frame')
        .displayName('Basic Bee Frame')
        .texture('gtceu:item/bees/basic_frame')

    event.create('advanced_frame')
        .displayName('Advanced Bee Frame')
        .texture('gtceu:item/bees/advanced_frame')

    event.create('ultimate_frame')
        .displayName('Ultimate Bee Frame')
        .texture('gtceu:item/bees/ultimate_frame')

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

//Deep Space Network Computers
    event.create('nesn_computer_chip')
        .displayName('Near-Earth Space Network Computer Chip')
        .texture('gtceu:item/space_production/nesn_computer_chip')

    event.create('dsn_computer_chip')
        .displayName('Deep Space Network Computer Chip')
        .texture('gtceu:item/space_production/dsn_computer_chip')

    event.create('adsn_computer_chip')
        .displayName('Advanced Deep Space Network Computer Chip')
        .texture('gtceu:item/space_production/adsn_computer_chip')

//Nosecone componets
    event.create('bls_system')
        .displayName('Basic Life Support System')
        .texture('gtceu:item/space_production/bls_system')

    event.create('als_system')
        .displayName('Advanced Life Support System')
        .texture('gtceu:item/space_production/als_system')
    
    event.create('thermal_tiles')
        .displayName('Thermal Tiles')
        .texture('gtceu:item/space_production/thermal_tiles')
    
    event.create('rcs_block')
        .displayName('Reaction Control System')
        .texture('gtceu:item/space_production/rcs_block')

//Command Pods
    event.create('ad_command')
        .displayName('Advanced Command Pod')
        .texture('gtceu:item/space_production/ad_command')

    event.create('ad_command_ii')
        .displayName('Advanced Command Pod II')
        .texture('gtceu:item/space_production/ad_command_ii')

    event.create('ad_command_iii')
        .displayName('Advanced Command Pod III')
        .texture('gtceu:item/space_production/ad_command_iii')

    /*event.create('el_command')
        .displayName('Elite Command Pod')
        .texture('gtceu:item/space_production/el_command')

    event.create('el_command_ii')
        .displayName('Elite Command Pod II')
        .texture('gtceu:item/space_production/el_command_ii')

    event.create('el_command_iii')
        .displayName('Elite Command Pod III')
        .texture('gtceu:item/space_production/el_command_iii')*/

//Engine componets
    event.create('steel_nozzle')
        .displayName('Engine Nozzle')
        .texture('gtceu:item/space_production/steel_nozzle')

    event.create('steel_fuel')
        .displayName('Fuel Injectors')
        .texture('gtceu:item/space_production/steel_fuel')

//Rocket housings
    event.create('aluminium_stringer')
        .displayName('Aluminium Stringer Tank Section')
        .texture('gtceu:item/space_production/aluminium_stringer')

    event.create('desh_stringer')
        .displayName('Desh Stringer Tank Section')
        .texture('gtceu:item/space_production/desh_stringer')

    event.create('ostrum_stringer')
        .displayName('Ostrum Stringer Tank Section')
        .texture('gtceu:item/space_production/ostrum_stringer')

    event.create('calorite_stringer')
        .displayName('Calorite Stringer Tank Section')
        .texture('gtceu:item/space_production/calorite_stringer')

//Misc Ores
    event.create('crushed_netherite_scrap')
        .displayName('Crushed Netherite Scrap')
        .texture('gtceu:item/ores/crushed_netherite_scrap')
})