ServerEvents.recipes(event => {
    //event.remove({mod: 'productivebees'})
//Centrifuge
    function honeycomb(id, input, output, base, tier, time, eu){
        event.recipes.gtceu.centrifuge(id)
            .itemInputs(Item.of('productivebees:configurable_honeycomb',input).strongNBT().toJson())
            .chancedOutput(output, base, tier)
            .itemOutputs('productivebees:wax')
            .outputFluids('productivebees:honey 50')
            .duration(time)
            .EUt(eu)
    }
//Centrifuge multi
    function honeycombmulti(id, input, output, base, tier, outputtwo, basetwo, tiertwo, time, eu){
        event.recipes.gtceu.centrifuge(id)
            .itemInputs(Item.of('productivebees:configurable_honeycomb',input).strongNBT().toJson())
            .chancedOutput(output, base, tier)
            .chancedOutput(outputtwo, basetwo, tiertwo)
            .itemOutputs('productivebees:wax')
            .duration(time)
            .EUt(eu)
    }
//Centrifuge fluids
    function honeycombfluid(id, input, output, time, eu){
        event.recipes.gtceu.centrifuge(id)
            .itemInputs(Item.of('productivebees:configurable_honeycomb',input).strongNBT().toJson())
            .itemOutputs('productivebees:wax')
            .outputFluids(output)
            .duration(time)
            .EUt(eu)
    }
//honeycomb('*', '{EntityTag: {type: "productivebees:*"}}', 'gtceu:raw_*', 9000, 50, 1200, 30)
//GTCEU Raw Materials
    honeycomb('aluminum', '{EntityTag: {type: "productivebees:aluminum"}}', 'gtceu:raw_aluminium', 8000, 50, 1200, 30)
    honeycomb('amethyst', '{EntityTag: {type: "productivebees:amethyst"}}', 'gtceu:raw_amethyst', 3000, 50, 1200, 30)
    honeycomb('apatite', '{EntityTag: {type: "productivebees:apatite"}}', 'gtceu:raw_apatite', 5000, 50, 1200, 30)
    honeycomb('barite', '{EntityTag: {type: "productivebees:barite"}}', 'gtceu:raw_barite', 8000, 50, 1200, 30)
    honeycomb('bastnasite', '{EntityTag: {type: "productivebees:bastnasite"}}', 'gtceu:raw_bastnasite', 8000, 50, 1200, 30)
    honeycomb('bauxite', '{EntityTag: {type: "productivebees:bauxite"}}', 'gtceu:raw_bauxite', 8000, 50, 1200, 30)
    honeycomb('calorite', '{EntityTag: {type: "productivebees:calorite"}}', 'gtceu:raw_calorite', 3000, 50, 1200, 30)
    honeycomb('certus', '{EntityTag: {type: "productivebees:spacial"}}', 'gtceu:raw_certus_quartz', 9000, 50, 1200, 30)
    honeycomb('chromite', '{EntityTag: {type: "productivebees:chromite"}}', 'gtceu:raw_chromite', 8000, 50, 1200, 30)
    honeycomb('cinnabar', '{EntityTag: {type: "productivebees:cinnabar"}}', 'gtceu:raw_cinnabar', 5000, 50, 1200, 30)
    honeycomb('coal', '{EntityTag: {type: "productivebees:coal"}}', 'gtceu:raw_coal', 6000, 50, 1200, 30)
    honeycomb('cobalt', '{EntityTag: {type: "productivebees:cobalt"}}', 'gtceu:raw_cobalt', 2000, 50, 1200, 30)
    honeycomb('cobaltite', '{EntityTag: {type: "productivebees:cobaltite"}}', 'gtceu:raw_cobaltite', 8000, 50, 1200, 30)
    honeycomb('copper', '{EntityTag: {type: "productivebees:copper"}}', 'minecraft:raw_copper', 4000, 50, 1200, 30)
    honeycomb('desh', '{EntityTag: {type: "productivebees:desh"}}', 'gtceu:raw_desh', 3000, 50, 1200, 30)
    honeycomb('diamond', '{EntityTag: {type: "productivebees:diamond"}}', 'gtceu:raw_diamond', 2000, 50, 1200, 30)
    honeycomb('emerald', '{EntityTag: {type: "productivebees:emerald"}}', 'gtceu:raw_emerald', 2000, 50, 1200, 30)
    honeycomb('electrotine', '{EntityTag: {type: "productivebees:electrotine"}}', 'gtceu:raw_electrotine', 8000, 50, 1200, 30)
    honeycomb('galena', '{EntityTag: {type: "productivebees:galena"}}', 'gtceu:raw_galena', 8000, 50, 1200, 30)
    honeycomb('gold', '{EntityTag: {type: "productivebees:gold"}}', 'minecraft:raw_gold', 4000, 50, 1200, 30)
    honeycomb('graphite', '{EntityTag: {type: "productivebees:graphite"}}', 'gtceu:raw_graphite', 8000, 50, 1200, 30)
    honeycomb('green_sapphire', '{EntityTag: {type: "productivebees:green_sapphire"}}', 'gtceu:raw_green_sapphire', 5000, 50, 1200, 30)
    honeycomb('ilmenite', '{EntityTag: {type: "productivebees:ilmenite"}}', 'gtceu:raw_ilmenite', 8000, 50, 1200, 30)
    honeycomb('iron', '{EntityTag: {type: "productivebees:iron"}}', 'minecraft:raw_iron', 4000, 50, 1200, 30)
    honeycomb('lapis', '{EntityTag: {type: "productivebees:lapis"}}', 'gtceu:raw_lapis', 5000, 50, 1200, 30)
    honeycomb('lead', '{EntityTag: {type: "productivebees:lead"}}', 'gtceu:raw_lead', 4000, 50, 1200, 30)
    honeycomb('lepidolite', '{EntityTag: {type: "productivebees:lepidolite"}}', 'gtceu:raw_lepidolite', 8000, 50, 1200, 30)
    honeycomb('malachite', '{EntityTag: {type: "productivebees:malachite"}}', 'gtceu:raw_malachite', 5000, 50, 1200, 30)
    honeycomb('molybdenum', '{EntityTag: {type: "productivebees:molybdenum"}}', 'gtceu:raw_molybdenum', 8000, 50, 1200, 30)
    honeycomb('naquadah', '{EntityTag: {type: "productivebees:naquadah"}}', 'gtceu:raw_naquadah', 8000, 50, 1200, 30)
    honeycomb('neodymium', '{EntityTag: {type: "productivebees:neodymium"}}', 'gtceu:raw_neodymium', 8000, 50, 1200, 30)
    honeycomb('neutronium', '{EntityTag: {type: "productivebees:neutronium"}}', 'gtceu:tiny_neutronium_dust', 200, 5, 1200, 30)
    honeycomb('nickel', '{EntityTag: {type: "productivebees:nickel"}}', 'gtceu:raw_nickel', 4000, 50, 1200, 30)
    honeycomb('oilsands', '{EntityTag: {type: "productivebees:oilsands"}}', 'gtceu:raw_oilsands', 8000, 50, 1200, 30)
    honeycomb('opal', '{EntityTag: {type: "productivebees:opal"}}', 'gtceu:raw_opal', 5000, 50, 1200, 30)
    honeycomb('ostrum', '{EntityTag: {type: "productivebees:ostrum"}}', 'gtceu:raw_ostrum', 3000, 50, 1200, 30)
    honeycomb('palladium', '{EntityTag: {type: "productivebees:palladium"}}', 'gtceu:raw_palladium', 8000, 50, 1200, 30)
    honeycomb('platinum', '{EntityTag: {type: "productivebees:platinum"}}', 'gtceu:raw_platinum', 4000, 50, 1200, 30)
    honeycomb('pyrochlore', '{EntityTag: {type: "productivebees:pyrochlore"}}', 'gtceu:raw_pyrochlore', 8000, 50, 1200, 30)
    honeycomb('pyrolusite', '{EntityTag: {type: "productivebees:pyrolusite"}}', 'gtceu:raw_pyrolusite', 8000, 50, 1200, 30)
    honeycomb('pyrope', '{EntityTag: {type: "productivebees:pyrope"}}', 'gtceu:raw_pyrope', 5000, 50, 1200, 30)
    honeycomb('quartz', '{EntityTag: {type: "productivebees:crystalline"}}', 'minecraft:quartz', 5000, 50, 1200, 30)
    honeycomb('realgar', '{EntityTag: {type: "productivebees:realgar"}}', 'gtceu:raw_realgar', 8000, 50, 1200, 30)
    honeycomb('redstone', '{EntityTag: {type: "productivebees:redstone"}}', 'gtceu:raw_redstone', 5000, 50, 1200, 30)
    honeycomb('ruby', '{EntityTag: {type: "productivebees:ruby"}}', 'gtceu:raw_ruby', 5000, 50, 1200, 30)
    honeycomb('sapphire', '{EntityTag: {type: "productivebees:sapphire"}}', 'gtceu:raw_sapphire', 5000, 50, 1200, 30)
    honeycomb('scheelite', '{EntityTag: {type: "productivebees:scheelite"}}', 'gtceu:raw_scheelite', 8000, 50, 1200, 30)
    honeycomb('sheldonite', '{EntityTag: {type: "productivebees:sheldonite"}}', 'gtceu:raw_cooperite', 8000, 50, 1200, 30)
    honeycomb('silver', '{EntityTag: {type: "productivebees:silver"}}', 'gtceu:raw_silver', 4000, 50, 1200, 30)
    honeycomb('stibnite', '{EntityTag: {type: "productivebees:stibnite"}}', 'gtceu:raw_stibnite', 8000, 50, 1200, 30)
    honeycomb('sphalerite', '{EntityTag: {type: "productivebees:sphalerite"}}', 'gtceu:raw_sphalerite', 8000, 50, 1200, 30)
    honeycomb('sodalite', '{EntityTag: {type: "productivebees:sodalite"}}', 'gtceu:raw_sodalite', 5000, 50, 1200, 30)
    honeycomb('sulfur', '{EntityTag: {type: "productivebees:sulfur"}}', 'gtceu:raw_sulfur', 9000, 50, 1200, 30)
    honeycomb('tantalite', '{EntityTag: {type: "productivebees:tantalite"}}', 'gtceu:raw_tantalite', 8000, 50, 1200, 30)
    honeycomb('tetrahedrite', '{EntityTag: {type: "productivebees:tetrahedrite"}}', 'gtceu:raw_tetrahedrite', 8000, 50, 1200, 30)
    honeycomb('tin', '{EntityTag: {type: "productivebees:tin"}}', 'gtceu:raw_tin', 4000, 50, 1200, 30)
    honeycomb('tricalcium_phosphate', '{EntityTag: {type: "productivebees:tricalcium_phosphate"}}', 'gtceu:raw_tricalcium_phosphate', 8000, 50, 1200, 30)
    honeycomb('topaz', '{EntityTag: {type: "productivebees:topaz"}}', 'gtceu:raw_topaz', 8000, 50, 1200, 30)
    honeycomb('tungstate', '{EntityTag: {type: "productivebees:tungstate"}}', 'gtceu:raw_tungstate', 8000, 50, 1200, 30)
    honeycomb('uranium', '{EntityTag: {type: "productivebees:radioactive"}}', 'gtceu:raw_uraninite', 2000, 50, 1200, 30)
    honeycomb('vanadium_magnetite', '{EntityTag: {type: "productivebees:vanadium_magnetite"}}', 'gtceu:raw_vanadium_magnetite', 8000, 50, 1200, 30)
    honeycomb('zinc', '{EntityTag: {type: "productivebees:zinc"}}', 'gtceu:raw_zinc', 4000, 50, 1200, 30)
//Mob drops
    honeycomb('blazing', '{EntityTag: {type: "productivebees:blazing"}}', 'minecraft:blaze_powder', 3000, 50, 1200, 30)
    honeycomb('draconic', '{EntityTag: {type: "productivebees:draconic"}}', 'productivebees:draconic_dust', 3000, 50, 1200, 30)
    honeycomb('ender', '{EntityTag: {type: "productivebees:ender"}}', 'minecraft:ender_pearl', 2000, 50, 1200, 30)
    honeycomb('magmatic', '{EntityTag: {type: "productivebees:magmatic"}}', 'minecraft:magma_cream', 2000, 50, 1200, 30)
    honeycomb('powdery', '{EntityTag: {type: "productivebees:powdery"}}', 'minecraft:gunpowder', 5000, 50, 1200, 30)
    honeycomb('sculk', '{EntityTag: {type: "productivebees:sculk"}}', 'minecraft:echo_shard', 3000, 50, 1200, 30)
    honeycomb('silky', '{EntityTag: {type: "productivebees:silky"}}', 'minecraft:string', 5000, 50, 1200, 30)
    honeycomb('skeletal', '{EntityTag: {type: "productivebees:skeletal"}}', 'minecraft:bone_meal', 7000, 50, 1200, 30)
    honeycomb('slimy', '{EntityTag: {type: "productivebees:slimy"}}', 'minecraft:slime_ball', 2000, 50, 1200, 30)
    honeycomb('withered', '{EntityTag: {type: "productivebees:withered"}}', 'productivebees:wither_skull_chip', 3000, 50, 1200, 30)
    honeycomb('zombie', '{EntityTag: {type: "productivebees:zombie"}}', 'minecraft:rotten_flesh', 6000, 50, 1200, 30)
//Other Mats
    honeycomb('netherite', '{EntityTag: {type: "productivebees:netherite"}}', 'minecraft:netherite_scrap', 1000, 50, 1200, 30)
    honeycomb('brown_shroom', '{EntityTag: {type: "productivebees:brown_shroom"}}', 'minecraft:brown_mushroom', 7000, 50, 1200, 30)
    honeycomb('cheese', '{EntityTag: {type: "productivebees:cheese"}}', 'ad_astra:cheese', 9000, 50, 1200, 30)
    honeycomb('crimson', '{EntityTag: {type: "productivebees:crimson"}}', 'minecraft:crimson_fungus', 7000, 50, 1200, 30)
    honeycomb('glowing', '{EntityTag: {type: "productivebees:glowing"}}', 'minecraft:glowstone_dust', 9000, 50, 1200, 30)
    honeycomb('obsidian', '{EntityTag: {type: "productivebees:obsidian"}}', '2x gtceu:obsidian_dust', 5000, 50, 1200, 30)
    honeycomb('red_shroom', '{EntityTag: {type: "productivebees:red_shroom"}}', 'minecraft:red_mushroom', 7000, 50, 1200, 30)
    honeycomb('scrapped', '{EntityTag: {type: "productivebees:scrapped"}}', 'tetra:metal_scrap', 1000, 50, 1200, 30)
    honeycomb('silicon', '{EntityTag: {type: "productivebees:silicon"}}', 'gtceu:silicon_dust', 5000, 50, 1200, 30)
    honeycomb('steel', '{EntityTag: {type: "productivebees:steel"}}', 'gtceu:steel_dust', 8000, 50, 1200, 30)
    honeycomb('sticky_resin', '{EntityTag: {type: "productivebees:sticky_resin"}}', 'gtceu:sticky_resin', 9000, 50, 1200, 30)
    honeycomb('warped', '{EntityTag: {type: "productivebees:warped"}}', 'minecraft:warped_fungus', 7000, 50, 1200, 30)
    honeycomb('flux', '{EntityTag: {type: "productivebees:flux"}}', 'gtceu:flux_dust', 7000, 50, 1200, 30)
//Alloys
    honeycomb('bismuth', '{EntityTag: {type: "productivebees:bismuth"}}', 'gtceu:bismuth_dust', 9000, 50, 1200, 30)
    honeycomb('brass', '{EntityTag: {type: "productivebees:brass"}}', 'gtceu:brass_dust', 8000, 50, 1200, 30)
    honeycomb('bronze', '{EntityTag: {type: "productivebees:bronze"}}', 'gtceu:bronze_dust', 8000, 50, 1200, 30)
    honeycomb('electrum', '{EntityTag: {type: "productivebees:electrum"}}', 'gtceu:electrum_dust', 8000, 50, 1200, 30)
    honeycomb('fluix', '{EntityTag: {type: "productivebees:fluix"}}', 'ae2:fluix_crystal', 2000, 50, 1200, 30)
    honeycomb('invar', '{EntityTag: {type: "productivebees:invar"}}', 'gtceu:invar_dust', 8000, 50, 1200, 30)
    honeycomb('rose_gold', '{EntityTag: {type: "productivebees:rose_gold"}}', 'gtceu:rose_gold_dust', 8000, 50, 1200, 30)
    honeycomb('rose_quartz', '{EntityTag: {type: "productivebees:rose_quartz"}}', 'create:rose_quartz', 5000, 50, 1200, 30)
//Multi Item Output
    honeycombmulti('prismarine', '{EntityTag: {type: "productivebees:prismarine"}}', 'minecraft:prismarine_shard', 2000, 50, 'minecraft:prismarine_crystals', 500, 50, 1200, 30)
    honeycombmulti('frosty', '{EntityTag: {type: "productivebees:frosty"}}', '2x minecraft:snowball', 9900, 50, 'minecraft:ice', 4000, 50, 1200, 30)
//Fluids
    honeycombfluid('chocolate', '{EntityTag: {type: "productivebees:chocolate"}}', 'create:chocolate 100', 1200, 30)
    honeycombfluid('experience', '{EntityTag: {type: "productivebees:experience"}}', 'experienceobelisk:cognitium 100', 1200, 30)
    honeycombfluid('hyper_experience', '{EntityTag: {type: "productivebees:hyper_experience"}}', 'create_enchantment_industry:hyper_experience 10', 1200, 30)
    honeycombfluid('tea', '{EntityTag: {type: "productivebees:tea"}}', 'create:tea 100', 1200, 30)

//Centrifuge Block
function honeycombblock(id, input, output, base, tier, time, eu){
    event.recipes.gtceu.centrifuge(id)
        .itemInputs(Item.of('productivebees:configurable_comb',input).strongNBT().toJson())
        .chancedOutput(output, base, tier)
        .itemOutputs('productivebees:wax')
        .outputFluids('productivebees:honey 50')
        .duration(time)
        .EUt(eu)
}
//Centrifuge Multi Block
function honeycombmultiblock(id, input, output, base, tier, outputtwo, basetwo, tiertwo, time, eu){
    event.recipes.gtceu.centrifuge(id)
        .itemInputs(Item.of('productivebees:configurable_comb',input).strongNBT().toJson())
        .chancedOutput(output, base, tier)
        .chancedOutput(outputtwo, basetwo, tiertwo)
        .itemOutputs('productivebees:wax')
        .duration(time)
        .EUt(eu)
}
//Centrifuge Fluids Block
function honeycombfluidblock(id, input, output, time, eu){
    event.recipes.gtceu.centrifuge(id)
        .itemInputs(Item.of('productivebees:configurable_comb',input).strongNBT().toJson())
        .itemOutputs('productivebees:wax')
        .outputFluids(output)
        .duration(time)
        .EUt(eu)
}
//GTCEU Raw Materials Blocks
    honeycombblock('aluminum_block', '{EntityTag: {type: "productivebees:aluminum"}}', '4x gtceu:raw_aluminium', 8000, 50, 1200, 30)
    honeycombblock('amethyst_block', '{EntityTag: {type: "productivebees:amethyst"}}', '4x gtceu:raw_amethyst', 3000, 50, 1200, 30)
    honeycombblock('apatite_block', '{EntityTag: {type: "productivebees:apatite"}}', '4x gtceu:raw_apatite', 5000, 50, 1200, 30)
    honeycombblock('barite_block', '{EntityTag: {type: "productivebees:barite"}}', '4x gtceu:raw_barite', 8000, 50, 1200, 30)
    honeycombblock('bastnasite_block', '{EntityTag: {type: "productivebees:bastnasite"}}', '4x gtceu:raw_bastnasite', 8000, 50, 1200, 30)
    honeycombblock('bauxite_block', '{EntityTag: {type: "productivebees:bauxite"}}', '4x gtceu:raw_bauxite', 8000, 50, 1200, 30)
    honeycombblock('calorite_block', '{EntityTag: {type: "productivebees:calorite"}}', '4x gtceu:raw_calorite', 3000, 50, 1200, 30)
    honeycombblock('certus_block', '{EntityTag: {type: "productivebees:spatial"}}', '4x gtceu:raw_certus_quartz', 9000, 50, 1200, 30)
    honeycombblock('chromite_block', '{EntityTag: {type: "productivebees:chromite"}}', '4x gtceu:raw_chromite', 8000, 50, 1200, 30)
    honeycombblock('cinnabar_block', '{EntityTag: {type: "productivebees:cinnabar"}}', '4x gtceu:raw_cinnabar', 5000, 50, 1200, 30)
    honeycombblock('coal_block', '{EntityTag: {type: "productivebees:coal"}}', '4x gtceu:raw_coal', 6000, 50, 1200, 30)
    honeycombblock('cobalt_block', '{EntityTag: {type: "productivebees:cobalt"}}', '4x gtceu:raw_cobalt', 2000, 50, 1200, 30)
    honeycombblock('cobaltite_block', '{EntityTag: {type: "productivebees:cobaltite"}}', '4x gtceu:raw_cobaltite', 8000, 50, 1200, 30)
    honeycombblock('copper_block', '{EntityTag: {type: "productivebees:copper"}}', '4x minecraft:raw_copper', 4000, 50, 1200, 30)
    honeycombblock('desh_block', '{EntityTag: {type: "productivebees:desh"}}', '4x gtceu:raw_desh', 3000, 50, 1200, 30)
    honeycombblock('diamond_block', '{EntityTag: {type: "productivebees:diamond"}}', '4x gtceu:raw_diamond', 2000, 50, 1200, 30)
    honeycombblock('emerald_block', '{EntityTag: {type: "productivebees:emerald"}}', '4x gtceu:raw_emerald', 2000, 50, 1200, 30)
    honeycombblock('electrotine_block', '{EntityTag: {type: "productivebees:electrotine"}}', '4x gtceu:raw_electrotine', 8000, 50, 1200, 30)
    honeycombblock('galena_block', '{EntityTag: {type: "productivebees:galena"}}', '4x gtceu:raw_galena', 8000, 50, 1200, 30)
    honeycombblock('gold_block', '{EntityTag: {type: "productivebees:gold"}}', '4x minecraft:raw_gold', 4000, 50, 1200, 30)
    honeycombblock('graphite_block', '{EntityTag: {type: "productivebees:graphite"}}', '4x gtceu:raw_graphite', 8000, 50, 1200, 30)
    honeycombblock('green_sapphire_block', '{EntityTag: {type: "productivebees:green_sapphire"}}', '4x gtceu:raw_green_sapphire', 5000, 50, 1200, 30)
    honeycombblock('ilmenite_block', '{EntityTag: {type: "productivebees:ilmenite"}}', '4x gtceu:raw_ilmenite', 8000, 50, 1200, 30)
    honeycombblock('iron_block', '{EntityTag: {type: "productivebees:iron"}}', '4x minecraft:raw_iron', 4000, 50, 1200, 30)
    honeycombblock('lapis_block', '{EntityTag: {type: "productivebees:lapis"}}', '4x gtceu:raw_lapis', 5000, 50, 1200, 30)
    honeycombblock('lead_block', '{EntityTag: {type: "productivebees:lead"}}', '4x gtceu:raw_lead', 4000, 50, 1200, 30)
    honeycombblock('lepidolite_block', '{EntityTag: {type: "productivebees:lepidolite"}}', '4x gtceu:raw_lepidolite', 8000, 50, 1200, 30)
    honeycombblock('malachite_block', '{EntityTag: {type: "productivebees:malachite"}}', '4x gtceu:raw_malachite', 5000, 50, 1200, 30)
    honeycombblock('molybdenum_block', '{EntityTag: {type: "productivebees:molybdenum"}}', '4x gtceu:raw_molybdenum', 8000, 50, 1200, 30)
    honeycombblock('naquadah_block', '{EntityTag: {type: "productivebees:naquadah"}}', '4x gtceu:raw_naquadah', 8000, 50, 1200, 30)
    honeycombblock('neodymium_block', '{EntityTag: {type: "productivebees:neodymium"}}', '4x gtceu:raw_neodymium', 8000, 50, 1200, 30)
    honeycombblock('neutronium_block', '{EntityTag: {type: "productivebees:neutronium"}}', '4x gtceu:tiny_neutronium_dust', 200, 5, 1200, 30)
    honeycombblock('nickel_block', '{EntityTag: {type: "productivebees:nickel"}}', '4x gtceu:raw_nickel', 4000, 50, 1200, 30)
    honeycombblock('oilsands_block', '{EntityTag: {type: "productivebees:oilsands"}}', '4x gtceu:raw_oilsands', 8000, 50, 1200, 30)
    honeycombblock('opal_block', '{EntityTag: {type: "productivebees:opal"}}', '4x gtceu:raw_opal', 5000, 50, 1200, 30)
    honeycombblock('ostrum_block', '{EntityTag: {type: "productivebees:ostrum"}}', '4x gtceu:raw_ostrum', 3000, 50, 1200, 30)
    honeycombblock('palladium_block', '{EntityTag: {type: "productivebees:palladium"}}', '4x gtceu:raw_palladium', 8000, 50, 1200, 30)
    honeycombblock('platinum_block', '{EntityTag: {type: "productivebees:platinum"}}', '4x gtceu:raw_platinum', 4000, 50, 1200, 30)
    honeycombblock('pyrochlore_block', '{EntityTag: {type: "productivebees:pyrochlore"}}', '4x gtceu:raw_pyrochlore', 8000, 50, 1200, 30)
    honeycombblock('pyrolusite_block', '{EntityTag: {type: "productivebees:pyrolusite"}}', '4x gtceu:raw_pyrolusite', 8000, 50, 1200, 30)
    honeycombblock('pyrope_block', '{EntityTag: {type: "productivebees:pyrope"}}', '4x gtceu:raw_pyrope', 5000, 50, 1200, 30)
    honeycombblock('quartz_block', '{EntityTag: {type: "productivebees:crystalline"}}', '4x minecraft:quartz', 5000, 50, 1200, 30)
    honeycombblock('realgar_block', '{EntityTag: {type: "productivebees:realgar"}}', '4x gtceu:raw_realgar', 8000, 50, 1200, 30)
    honeycombblock('redstone_block', '{EntityTag: {type: "productivebees:redstone"}}', '4x gtceu:raw_redstone', 5000, 50, 1200, 30)
    honeycombblock('ruby_block', '{EntityTag: {type: "productivebees:ruby"}}', '4x gtceu:raw_ruby', 5000, 50, 1200, 30)
    honeycombblock('sapphire_block', '{EntityTag: {type: "productivebees:sapphire"}}', '4x gtceu:raw_sapphire', 5000, 50, 1200, 30)
    honeycombblock('scheelite_block', '{EntityTag: {type: "productivebees:scheelite"}}', '4x gtceu:raw_scheelite', 8000, 50, 1200, 30)
    honeycombblock('sheldonite_block', '{EntityTag: {type: "productivebees:sheldonite"}}', '4x gtceu:raw_cooperite', 8000, 50, 1200, 30)
    honeycombblock('silver_block', '{EntityTag: {type: "productivebees:silver"}}', '4x gtceu:raw_silver', 4000, 50, 1200, 30)
    honeycombblock('stibnite_block', '{EntityTag: {type: "productivebees:stibnite"}}', '4x gtceu:raw_stibnite', 8000, 50, 1200, 30)
    honeycombblock('sphalerite_block', '{EntityTag: {type: "productivebees:sphalerite"}}', '4x gtceu:raw_sphalerite', 8000, 50, 1200, 30)
    honeycombblock('sodalite_block', '{EntityTag: {type: "productivebees:sodalite"}}', '4x gtceu:raw_sodalite', 5000, 50, 1200, 30)
    honeycombblock('sulfur_block', '{EntityTag: {type: "productivebees:sulfur"}}', '4x gtceu:raw_sulfur', 9000, 50, 1200, 30)
    honeycombblock('tantalite_block', '{EntityTag: {type: "productivebees:tantalite"}}', '4x gtceu:raw_tantalite', 8000, 50, 1200, 30)
    honeycombblock('tetrahedrite_block', '{EntityTag: {type: "productivebees:tetrahedrite"}}', '4x gtceu:raw_tetrahedrite', 8000, 50, 1200, 30)
    honeycombblock('tin_block', '{EntityTag: {type: "productivebees:tin"}}', '4x gtceu:raw_tin', 4000, 50, 1200, 30)
    honeycombblock('tricalcium_phosphate_block', '{EntityTag: {type: "productivebees:tricalcium_phosphate"}}', '4x gtceu:raw_tricalcium_phosphate', 8000, 50, 1200, 30)
    honeycombblock('topaz_block', '{EntityTag: {type: "productivebees:topaz"}}', '4x gtceu:raw_topaz', 8000, 50, 1200, 30)
    honeycombblock('tungstate_block', '{EntityTag: {type: "productivebees:tungstate"}}', '4x gtceu:raw_tungstate', 8000, 50, 1200, 30)
    honeycombblock('uranium_block', '{EntityTag: {type: "productivebees:radioactive"}}', '4x gtceu:raw_uraninite', 2000, 50, 1200, 30)
    honeycombblock('vanadium_magnetite_block', '{EntityTag: {type: "productivebees:vanadium_magnetite"}}', '4x gtceu:raw_vanadium_magnetite', 8000, 50, 1200, 30)
    honeycombblock('zinc_block', '{EntityTag: {type: "productivebees:zinc"}}', '4x gtceu:raw_zinc', 4000, 50, 1200, 30)
//Mob drops Blocks
    honeycombblock('blazing_block', '{EntityTag: {type: "productivebees:blazing"}}', '4x minecraft:blaze_powder', 3000, 50, 1200, 30)
    honeycombblock('draconic_block', '{EntityTag: {type: "productivebees:draconic"}}', '4x productivebees:draconic_dust', 3000, 50, 1200, 30)
    honeycombblock('ender_block', '{EntityTag: {type: "productivebees:ender"}}', '4x minecraft:ender_pearl', 2000, 50, 1200, 30)
    honeycombblock('magmatic_block', '{EntityTag: {type: "productivebees:magmatic"}}', '4x minecraft:magma_cream', 2000, 50, 1200, 30)
    honeycombblock('powdery_block', '{EntityTag: {type: "productivebees:powdery"}}', '4x minecraft:gunpowder', 5000, 50, 1200, 30)
    honeycombblock('sculk_block', '{EntityTag: {type: "productivebees:sculk"}}', '4x minecraft:echo_shard', 3000, 50, 1200, 30)
    honeycombblock('silky_block', '{EntityTag: {type: "productivebees:silky"}}', '4x minecraft:string', 5000, 50, 1200, 30)
    honeycombblock('skeletal_block', '{EntityTag: {type: "productivebees:skeletal"}}', '4x minecraft:bone_meal', 7000, 50, 1200, 30)
    honeycombblock('slimy_block', '{EntityTag: {type: "productivebees:slimy"}}', '4x minecraft:slime_ball', 2000, 50, 1200, 30)
    honeycombblock('withered_block', '{EntityTag: {type: "productivebees:withered"}}', '4x productivebees:wither_skull_chip', 3000, 50, 1200, 30)
    honeycombblock('zombie_block', '{EntityTag: {type: "productivebees:zombie"}}', '4x minecraft:rotten_flesh', 6000, 50, 1200, 30)
//Other Mats Blocks
    honeycombblock('netherite_block', '{EntityTag: {type: "productivebees:netherite"}}', '4x minecraft:netherite_scrap', 1000, 50, 1200, 30)
    honeycombblock('brown_shroom_block', '{EntityTag: {type: "productivebees:brown_shroom"}}', '4x minecraft:brown_mushroom', 7000, 50, 1200, 30)
    honeycombblock('cheese_block', '{EntityTag: {type: "productivebees:cheese"}}', '4x ad_astra:cheese', 9000, 50, 1200, 30)
    honeycombblock('crimson_block', '{EntityTag: {type: "productivebees:crimson"}}', '4x minecraft:crimson_fungus', 7000, 50, 1200, 30)
    honeycombblock('glowing_block', '{EntityTag: {type: "productivebees:glowing"}}', '4x minecraft:glowstone_dust', 9000, 50, 1200, 30)
    honeycombblock('obsidian_block', '{EntityTag: {type: "productivebees:obsidian"}}', '8x gtceu:obsidian_dust', 5000, 50, 1200, 30)
    honeycombblock('red_shroom_block', '{EntityTag: {type: "productivebees:red_shroom"}}', '4x minecraft:red_mushroom', 7000, 50, 1200, 30)
    honeycombblock('scrapped_block', '{EntityTag: {type: "productivebees:scrapped"}}', '4x tetra:metal_scrap', 1000, 50, 1200, 30)
    honeycombblock('silicon_block', '{EntityTag: {type: "productivebees:silicon"}}', '4x gtceu:silicon_dust', 5000, 50, 1200, 30)
    honeycombblock('steel_block', '{EntityTag: {type: "productivebees:steel"}}', '4x gtceu:steel_dust', 8000, 50, 1200, 30)
    honeycombblock('sticky_resin_block', '{EntityTag: {type: "productivebees:sticky_resin"}}', '4x gtceu:sticky_resin', 9000, 50, 1200, 30)
    honeycombblock('warped_block', '{EntityTag: {type: "productivebees:warped"}}', '4x minecraft:warped_fungus', 7000, 50, 1200, 30)
    honeycombblock('flux_block', '{EntityTag: {type: "productivebees:flux"}}', '4x gtceu:flux_dust', 7000, 50, 1200, 30)
//Alloys Blocks
    honeycombblock('bismuth_block', '{EntityTag: {type: "productivebees:bismuth"}}', '4x gtceu:bismuth_dust', 9000, 50, 1200, 30)
    honeycombblock('brass_block', '{EntityTag: {type: "productivebees:brass"}}', '4x gtceu:brass_dust', 8000, 50, 1200, 30)
    honeycombblock('bronze_block', '{EntityTag: {type: "productivebees:bronze"}}', '4x gtceu:bronze_dust', 8000, 50, 1200, 30)
    honeycombblock('electrum_block', '{EntityTag: {type: "productivebees:electrum"}}', '4x gtceu:electrum_dust', 8000, 50, 1200, 30)
    honeycombblock('fluix_block', '{EntityTag: {type: "productivebees:fluix"}}', '4x ae2:fluix_crystal', 2000, 50, 1200, 30)
    honeycombblock('invar_block', '{EntityTag: {type: "productivebees:invar"}}', '4x gtceu:invar_dust', 8000, 50, 1200, 30)
    honeycombblock('rose_gold_block', '{EntityTag: {type: "productivebees:rose_gold"}}', '4x gtceu:rose_gold_dust', 8000, 50, 1200, 30)
    honeycombblock('rose_quartz_block', '{EntityTag: {type: "productivebees:rose_quartz"}}', '4x create:rose_quartz', 5000, 50, 1200, 30)
//Multi Item Output Blocks
    honeycombmultiblock('prismarine_block', '{EntityTag: {type: "productivebees:prismarine"}}', '4x minecraft:prismarine_shard', 2000, 50, '4x minecraft:prismarine_crystals', 500, 50, 1200, 30)
    honeycombmultiblock('frosty_block', '{EntityTag: {type: "productivebees:frosty"}}', '8x minecraft:snowball', 9900, 50, '4x minecraft:ice', 4000, 50, 1200, 30)
//Fluids Blocks
    honeycombfluidblock('chocolate_block', '{EntityTag: {type: "productivebees:chocolate"}}', 'create:chocolate 400', 1200, 30)
    honeycombfluidblock('experience_block', '{EntityTag: {type: "productivebees:experience"}}', 'experienceobelisk:cognitium 400', 1200, 30)
    honeycombfluidblock('hyper_experience_block', '{EntityTag: {type: "productivebees:hyper_experience"}}', 'create_enchantment_industry:hyper_experience 40', 1200, 30)
    honeycombfluidblock('tea_block', '{EntityTag: {type: "productivebees:tea"}}', 'create:tea 400', 1200, 30)

//Bee Houses and frames
    event.shaped(
        Item.of('kubejs:bee_frame'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'minecraft:stick',
            C: 'minecraft:honeycomb'
        }
    )
    event.recipes.gtceu.assembler('kubejs:gtceu/assembler/bees/advanced_frame')
        .itemInputs('3x gtceu:treated_wood_plate', '5x gtceu:treated_wood_rod', '2x minecraft:string')
        .inputFluids('gtceu:seed_oil 250')
        .itemOutputs('kubejs:advanced_frame')
        .EUt(60)
        .duration(1200)
    event.recipes.gtceu.assembler('kubejs:gtceu/assembler/bees/ultimate_frame')
        .itemInputs('gtceu:nickel_zinc_ferrite_plate', '5x gtceu:nickel_zinc_ferrite_rod', 'gtceu:carbon_fiber_plate')
        .inputFluids('gtceu:polyethylene 288')
        .itemOutputs('kubejs:ultimate_frame')
        .EUt(1920)
        .duration(1200)
    event.shaped(
        Item.of('minecraft:beehive'),
        [
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: '#minecraft:planks',
            B: 'kubejs:bee_frame'
        }
    )
    function adbee(id, input, output){
        event.recipes.gtceu.assembler(id)
            .circuit(1)
            .itemInputs(input, '3x kubejs:advanced_frame', '4x gtceu:steel_screw', 'minecraft:beehive')
            .itemOutputs(output)
            .EUt(120)
            .duration(1200)
    }
    function adbeeexp(id, input, output){
        event.recipes.gtceu.assembler(id)
            .circuit(2)
            .itemInputs(input, '2x kubejs:advanced_frame', '4x gtceu:steel_screw')
            .itemOutputs(output)
            .EUt(480)
            .duration(1200)
    }
    const mcplanks = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']

    const bopplanks = ['fir', 'redwood', 'mahogany', 'jacaranda', 'palm', 'willow', 'dead', 'magic', 'umbran', 'hellbark']

    const prodtreeplanks = ['alder', 'allspice', 'almond', 'apricot', 'aquilaria', 'asai_palm', 'ash', 'aspen', 'avocado', 'balsa', 'balsam_fir', 'banana', 'beech', 
    'beliy_naliv_apple', 'blackthorn', 'black_cherry', 'black_ember', 'black_locust', 'blue_mahoe', 'boxwood', 'brazilwood', 'brazil_nut', 'breadfruit', 'brown_amber', 
    'buddhas_hand', 'bull_pine', 'butternut', 'cacao', 'candlenut', 'carob', 'cashew', 'cave_dweller', 'cedar', 'cempedak', 'ceylon_ebony', 'cherry_plum', 'cinnamon', 
    'citron', 'clove', 'cocobolo', 'coconut', 'coffea', 'copoazu', 'copper_beech', 'cork_oak', 'cultivated_pear', 'date_palm', 'dogwood', 'douglas_fir', /*'elderberry',*/ 'elm', 
    'european_larch', 'finger_lime', 'firecracker', 'flickering_sun', 'flowering_crabapple', 'foggy_blast', 'ginkgo', 'golden_delicious_apple', 'grandidiers_baobab', 
    'granny_smith_apple', 'grapefruit', 'great_sallow', 'greenheart', 'hawthorn', 'hazel', 'holly', 'hornbeam', 'ipe', 'iroko', 'jackfruit', 'juniper', 'kapok', 'key_lime', 
    'kumquat', 'lawson_cypress', 'lemon', 'lime', 'loblolly_pine', 'logwood', 'mahogany', 'mandarin', 'mango', 'monkey_puzzle', 'moonlight_magic_crepe_myrtle', 'myrtle_ebony', 
    'nectarine', 'night_fuchsia', 'nutmeg', 'old_fustic', 'olive', 'orange', 'osange_orange', 'padauk', 'pandanus', 'papaya', 'peach', 'pecan', 'persimmon', 'pink_ivory', 
    'pink_ipe', 'pistachio', 'plantain', 'plum', 'pomegranate', 'pomelo', 'prairie_crabapple', 'purpleheart', 'purple_blackthorn', 'purple_crepe_myrtle', 'purple_spiral', 
    'purple_ipe', 'rainbow_gum', 'red_banana', 'red_crepe_myrtle', 'red_delicious_apple', 'red_maple', 'rippling_willow', 'rosewood', 'rose_gum', 'rowan', 'rubber_tree', 
    'salak', 'sandalwood', 'sand_pear', 'satsuma', 'sequoia', 'silver_fir', 'silver_lime', 'slimy_delight', 'socotra_dragon', 'soul_tree', 'soursop', 'sour_cherry', 
    'sparkle_cherry', 'star_anise', 'star_fruit', 'sugar_apple', 'sugar_maple', 'swamp_gum', 'sweetgum', 'sweet_chestnut', 'sweet_crabapple', 'sycamore_fig', 'tangerine', 
    'teak', 'thunder_bolt', 'time_traveller', 'tuscarora_crepe_myrtle', 'blue_yonder', 'walnut', 'water_wonder', 'wenge', 'western_hemlock', 'whitebeam', 'white_poplar', 
    'white_ipe', 'white_willow', 'wild_cherry', 'yellow_meranti', 'yew', 'zebrano']

    mcplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/bees/advanced_' + base + '_beehive'
        let inp = '4x minecraft:' + base + '_planks'
        let out = 'productivebees:advanced_' + base + '_beehive'

        adbee(id, inp, out)
    })

    bopplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/bees/advanced_biomesoplenty_' + base + '_beehive'
        let inp = '4x biomesoplenty:' + base + '_planks'
        let out = 'productivebees:advanced_biomesoplenty_' + base + '_beehive'

        adbee(id, inp, out)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/bees/advanced_' + base + '_beehive'
        let inp = '4x productivetrees:' + base + '_planks'
        let out = 'productivetrees:advanced_' + base + '_beehive'

        adbee(id, inp, out)
    })

    mcplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/bees/expansion_box_' + base
        let inp = '8x minecraft:' + base + '_planks'
        let out = 'productivebees:expansion_box_' + base

        adbeeexp(id, inp, out)
    })

    bopplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/bees/expansion_box_biomesoplenty_' + base
        let inp = '8x biomesoplenty:' + base + '_planks'
        let out = 'productivebees:expansion_box_biomesoplenty_' + base

        adbeeexp(id, inp, out)
    })

    prodtreeplanks.forEach( (base) => {
        let id = 'kubejs:gtceu/assembler/bees/expansion_box_' + base
        let inp = '8x productivetrees:' + base + '_planks'
        let out = 'productivetrees:expansion_box_' + base

        adbeeexp(id, inp, out)
    })
})