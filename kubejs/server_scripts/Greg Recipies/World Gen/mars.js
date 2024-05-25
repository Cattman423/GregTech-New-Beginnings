GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:naquadah_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.biomes("#ad_astra:is_mars")
        vein.layer("mars_stone")
    })
    event.modify("gtceu:sheldonite_vein", vein => {
        vein.dimensions("ad_astra:mars")
        vein.biomes("#ad_astra:is_mars")
        vein.layer("mars_stone")
    })
    event.modify("gtceu:pitchblende_vein_end", vein => {
        vein.dimensions("ad_astra:mars")
        vein.biomes("#ad_astra:is_mars")
        vein.layer("mars_stone")
    })
})