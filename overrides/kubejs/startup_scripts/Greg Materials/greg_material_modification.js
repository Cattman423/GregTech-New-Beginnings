GTCEuStartupEvents.materialModification(/*'gtceu:material',*/ event => {
    GTMaterials.Sphalerite.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Silver.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Lead.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Galena.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
    GTMaterials.Copper.getProperty(PropertyKey.ORE).setOreByProducts(GTMaterials.Germanium)
})