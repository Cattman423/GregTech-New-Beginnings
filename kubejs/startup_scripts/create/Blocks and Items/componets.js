StartupEvents.registry('item', event => {
    event.create('rudimentary_mechanism')
        .texture('create:item/mechanisms/rudimentary_mechanism')
        .tooltip('A basic mechanism for your first real machines')

    event.create('sealed_mechanism')
        .texture('create:item/mechanisms/sealed_mechanism')
        .tooltip('An improved mechanism for fluid handling')

    event.create('clockwork_mechanism')
        .texture('create:item/mechanisms/clockwork_mechanism')
        .tooltip('The first precision made component')

    event.create('advanced_clockwork_mechanism')
        .texture('create:item/mechanisms/advanced_clockwork_mechanism')
        .tooltip('More advanced than the Clockwork Mechanism')

    event.create('conductive_mechanism')
        .texture('create:item/mechanisms/conductive_mechanism')
        .tooltip('You can feel the current running through this mechanism')
        .tooltip('§cULV-Tier Circuit')
})