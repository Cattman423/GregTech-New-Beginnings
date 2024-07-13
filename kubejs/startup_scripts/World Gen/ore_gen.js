WorldgenEvents.remove(event => {
    event.removeOres(ores => {
        ores.blocks = [
            'create:zinc_ore',
            'create:deepslate_zinc_ore',
            'draconicevolution:overworld_draconium_ore',
            'draconicevolution:deepslate_draconium_ore',
            'draconicevolution:nether_draconium_ore',
            'draconicevolution:end_draconium_ore',
            'ad_astra:moon_iron_ore',
            'ad_astra:moon_cheese_ore',
            'ad_astra:moon_desh_ore',
            'ad_astra:moon_ice_ore',
            'ad_astra:mars_iron_ore',
            'ad_astra:mars_diamond_ore',
            'ad_astra:mars_ice_ore',
            'ad_astra:mars_ostrum_ore',
            'ad_astra:venus_calorite_ore',
            'ad_astra:venus_coal_ore',
            'ad_astra:venus_diamond_ore',
            'ad_astra:venus_gold_ore',
            'ad_astra:mercury_iron_ore',
            'ad_astra:glacio_iron_ore',
            'ad_astra:glacio_ice_ore',
            'ad_astra:glacio_copper_ore',
            'ad_astra:glacio_coal_ore',
            'tfmg:lead_ore',
            'tfmg:deepslate_lead_ore',
            'tfmg:lithium_ore',
            'tfmg:deepslate_lithium_ore',
            'tfmg:nickel_ore',
            'tfmg:deepslate_nickel_ore',
            'createmetallurgy:wolframite_ore'
        ]
        })
    //    event.removeFeatureById('raw_generation', [
    //    ])
})
