ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:circuit_assembly_line'),
        ['ABA', 'DCD', 'ABA'],
        {A: 'gtceu:sturdy_machine_casing', B: 'gtceu:iv_robot_arm', C: 'gtceu:iv_machine_hull', D: '#gtceu:circuits/iv'})
})