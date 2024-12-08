GTCEuStartupEvents.craftingComponents(event => {
//Plates
    //event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UEV, new UnificationEntry('plate', 'gtceu:stabilized_oganesson'))
    //event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UIV, new UnificationEntry('plate', 'gtceu:shadow_radiance'))

//Cables
    event.modifyUnificationEntry(CraftingComponent.CABLE, GTValues.UEV, new UnificationEntry('cableGtSingle', 'gtceu:end_steel'))

//Glass
    event.modifyItem(CraftingComponent.GLASS, GTValues.UHV, 'kubejs:alon_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.UEV, 'kubejs:alon_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.UIV, 'kubejs:alon_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.UXV, 'kubejs:alon_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.OpV, 'kubejs:alon_glass')
    event.modifyItem(CraftingComponent.GLASS, GTValues.MAX, 'kubejs:alon_glass')
})