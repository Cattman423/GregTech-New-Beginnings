ServerEvents.recipes(event => {
    event.remove({mod: 'sophisticatedbackpacks'})
    function backpack(output, input, ring){
        event.shaped(
            Item.of(output),
            [
                'CDC',
                'CAC',
                'BBB'
            ],
            {
                A: input,
                B: 'minecraft:leather',
                C: 'supplementaries:rope',
                D: ring
            }
            )
    }
    backpack('sophisticatedbackpacks:backpack', 'ironchests:iron_chest', 'gtceu:steel_ring')
    backpack('sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:backpack', 'gtceu:aluminium_ring')
    backpack('sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:copper_backpack', 'gtceu:stainless_steel_ring')
    backpack('sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:iron_backpack', 'gtceu:titanium_ring')
    backpack('sophisticatedbackpacks:diamond_backpack', 'sophisticatedbackpacks:gold_backpack', 'gtceu:tungsten_steel_ring')
    backpack('sophisticatedbackpacks:netherite_backpack', 'sophisticatedbackpacks:diamond_backpack', 'gtceu:rhodium_plated_palladium_ring')
})