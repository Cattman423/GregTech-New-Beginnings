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

//Nuggets
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_nugget'))
    TagPrefix.nugget['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_nugget'))

//Plates
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('desh'), 
        () => Item.getItem('ad_astra:desh_plate'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('ostrum'), 
        () => Item.getItem('ad_astra:ostrum_plate'))
    TagPrefix.plate['setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])'](GTMaterials.get('calorite'), 
        () => Item.getItem('ad_astra:calorite_plate'))

//Hazards
    GTMaterials.Andesite.properties.removeProperty(PropertyKey.HAZARD)
    GTMaterials.get('andesite_alloy').properties.removeProperty(PropertyKey.HAZARD)
})