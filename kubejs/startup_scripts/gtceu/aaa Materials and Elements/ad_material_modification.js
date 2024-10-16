GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

//Byproducts
    GTMaterials.Sphalerite.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Silver.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Lead.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Galena.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Copper.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)

//Functions
    function ingot (mat, item){
        TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function block (mat, item){
        TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function nugget (mat, item){
        TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function plate (mat, item){
        TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function dust (mat, item){
        TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }
    function gem (mat, item){
        TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get(mat), 
        () => Item.getItem(item))
    }

//Ingots
    ingot('netherite_scrap', 'minecraft:netherite_scrap')
    ingot('netherite_alloy', 'minecraft:netherite_ingot')
    ingot('andesite_alloy', 'create:andesite_alloy')
    ingot('desh', 'ad_astra:desh_ingot')
    ingot('ostrum', 'ad_astra:ostrum_ingot')
    ingot('calorite', 'ad_astra:calorite_ingot')
    ingot('draconium', 'draconicevolution:draconium_ingot')
    ingot('awakened_draconium', 'draconicevolution:awakened_draconium_ingot')
    ingot('refined_radiance', 'create:refined_radiance')
    ingot('shadow_steel', 'create:shadow_steel')
    ingot('shadow_radiance', 'createqol:shadow_radiance')
    ingot('infinity', 'avaritia:infinity_ingot')
    ingot('gunmetal', 'pointblank:gunmetal_ingot')
    ingot('argent_gunmetal', 'pointblank:doom_argent_ingot')
    ingot('nethersteel', 'createbigcannons:nethersteel_ingot')
    ingot('wohler_aluminium', 'tfmg:aluminum_ingot')
    ingot('experience', 'create:experience_nugget')
    ingot('cognitive_amalgam', 'experienceobelisk:cognitive_amalgam')
    ingot('cognitive_alloy', 'experienceobelisk:cognitive_alloy')

//Blocks
    block('netherite_alloy', 'minecraft:netherite_block')
    block('andesite_alloy', 'create:andesite_alloy_block')
    block('desh', 'ad_astra:desh_block')
    block('ostrum', 'ad_astra:ostrum_block')
    block('calorite', 'ad_astra:calorite_block')
    block('draconium', 'draconicevolution:draconium_block')
    block('awakened_draconium', 'draconicevolution:awakened_draconium_block')
    block('infinity', 'avaritia:infinity_block')
    block('nethersteel', 'createbigcannons:nethersteel_block')
    block('wohler_aluminium', 'tfmg:aluminum_block')
    block('coke', 'tfmg:coal_coke_block')
    block('experience', 'create:experience_block')
    block('cognitive_alloy', 'experienceobelisk:cognitive_alloy_block')
    block('cognitive_crystal', 'experienceobelisk:cognitive_crystal_block')

//Nuggets
    nugget('desh', 'ad_astra:desh_nugget')
    nugget('ostrum', 'ad_astra:ostrum_nugget')
    nugget('calorite', 'ad_astra:calorite_nugget')
    nugget('draconium', 'draconicevolution:draconium_nugget')
    nugget('awakened_draconium', 'draconicevolution:awakened_draconium_nugget')
    nugget('gunmetal', 'pointblank:gunmetal_nugget')
    nugget('nethersteel', 'createbigcannons:nethersteel_nugget')

//Plates
    plate('desh', 'ad_astra:desh_plate')
    plate('ostrum', 'ad_astra:ostrum_plate')
    plate('calorite', 'ad_astra:calorite_plate')

//Dusts
    dust('draconium', 'draconicevolution:draconium_dust')
    dust('awakened_draconium', 'draconicevolution:awakened_draconium_dust')
    dust('coke', 'tfmg:coal_coke_dust')
    dust('zinc_sulfate', 'tfmg:zinc_sulfate')
    dust('copper_sulfate', 'tfmg:copper_sulfate')
    dust('cognitive_flux', 'experienceobelisk:cognitive_flux')

//Gems
    gem('rose_quartz', 'create:rose_quartz')
    gem('coke', 'tfmg:coal_coke')
    gem('cognitive_crystal', 'experienceobelisk:cognitive_crystal')

//Formulas
    //GTMaterials.get('').setFormula('', true)
})