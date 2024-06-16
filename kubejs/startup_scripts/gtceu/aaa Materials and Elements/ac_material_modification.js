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

//Gems
    TagPrefix.gem['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('rose_quartz'), 
    () => Item.getItem('create:rose_quartz'))

//Hazards
    /*GTMaterials.Andesite.properties.removeProperty(PropertyKey.HAZARD)
    GTMaterials.get('andesite_alloy').properties.removeProperty(PropertyKey.HAZARD)*/
})