GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {

//Byproducts
    GTMaterials.Sphalerite.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Silver.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Lead.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Galena.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Copper.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)

//Ingots
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('netherite_scrap'), 
        () => Item.getItem('minecraft:netherite_scrap'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('netherite_alloy'), 
        () => Item.getItem('minecraft:netherite_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('andesite_alloy'), 
        () => Item.getItem('create:andesite_alloy'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('draconium'), 
        () => Item.getItem('draconicevolution:draconium_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('awakened_draconium'), 
        () => Item.getItem('draconicevolution:awakened_draconium_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('refined_radiance'), 
        () => Item.getItem('create:refined_radiance'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('shadow_steel'), 
        () => Item.getItem('create:shadow_steel'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('shadow_radiance'), 
        () => Item.getItem('createqol:shadow_radiance'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('infinity'), 
        () => Item.getItem('avaritia:infinity_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gunmetal'), 
        () => Item.getItem('pointblank:gunmetal_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('argent_gunmetal'), 
        () => Item.getItem('pointblank:doom_argent_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('nethersteel'), 
        () => Item.getItem('createbigcannons:nethersteel_ingot'))
    TagPrefix.ingot['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('wohler_aluminium'), 
        () => Item.getItem('tfmg:aluminum_ingot'))

//Blocks
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('netherite_alloy'), 
        () => Item.getItem('minecraft:netherite_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('andesite_alloy'), 
        () => Item.getItem('create:andesite_alloy_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('draconium'), 
        () => Item.getItem('draconicevolution:draconium_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('awakened_draconium'), 
        () => Item.getItem('draconicevolution:awakened_draconium_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('infinity'), 
        () => Item.getItem('avaritia:infinity_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('nethersteel'), 
        () => Item.getItem('createbigcannons:nethersteel_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('wohler_aluminium'), 
        () => Item.getItem('tfmg:aluminum_block'))
    TagPrefix.block['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('coke'), 
        () => Item.getItem('tfmg:coal_coke_block'))

//Nuggets
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('draconium'), 
        () => Item.getItem('draconicevolution:draconium_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('awakened_draconium'), 
        () => Item.getItem('draconicevolution:awakened_draconium_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('gunmetal'), 
        () => Item.getItem('pointblank:gunmetal_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('nethersteel'), 
        () => Item.getItem('createbigcannons:nethersteel_nugget'))

//Plates
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_plate'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_plate'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_plate'))

//Dusts
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('draconium'), 
        () => Item.getItem('draconicevolution:draconium_dust'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('awakened_draconium'), 
        () => Item.getItem('draconicevolution:awakened_draconium_dust'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('coke'), 
        () => Item.getItem('tfmg:coal_coke_dust'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('zinc_sulfate'), 
        () => Item.getItem('tfmg:zinc_sulfate'))
    TagPrefix.dust['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('copper_sulfate'), 
        () => Item.getItem('tfmg:copper_sulfate'))

//Gems
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('rose_quartz'), 
        () => Item.getItem('create:rose_quartz'))
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('coke'), 
        () => Item.getItem('tfmg:coal_coke'))

//Formulas
    //GTMaterials.get('').setFormula('', true)
})