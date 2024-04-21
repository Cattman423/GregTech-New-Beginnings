ServerEvents.recipes(event => {
    event.remove({mod: 'morered'})
    event.shapeless(
        Item.of('2x morered:red_alloy_wire'),
        [
            'gtceu:red_alloy_single_wire'
        ])
    function colour(id, output, input){
        event.recipes.gtceu.chemical_bath(id)
            .itemInputs('morered:red_alloy_wire')
            .inputFluids(input)
            .itemOutputs(output)
            .duration(100)
            .EUt(7)
    }
    event.shaped(
        Item.of('morered:bundled_network_cable'),
        [
            ' A ',
            ' A ',
            ' A '
        ],
        {
            A: '#morered:network_cables'
        }
    )
    function gates(id, circuit, input, output){
        event.recipes.gtceu.circuit_assembler(id)
            .circuit(circuit)
            .itemInputs(input)
            .inputFluids('gtceu:concrete 144')
            .itemOutputs(output)
            .duration(100)
            .EUt(1)
    }
    colour('white_wire', 'morered:white_network_cable', 'gtceu:white_dye 18')
    colour('orange_wire', 'morered:orange_network_cable', 'gtceu:orange_dye 18')
    colour('magenta_wire', 'morered:magenta_network_cable', 'gtceu:magenta_dye 18')
    colour('light_blue_wire', 'morered:light_blue_network_cable', 'gtceu:light_blue_dye 18')
    colour('yellow_wire', 'morered:yellow_network_cable', 'gtceu:yellow_dye 18')
    colour('lime_wire', 'morered:lime_network_cable', 'gtceu:lime_dye 18')
    colour('pink_wire', 'morered:pink_network_cable', 'gtceu:pink_dye 18')
    colour('gray_wire', 'morered:gray_network_cable', 'gtceu:gray_dye 18')
    colour('light_gray_wire', 'morered:light_gray_network_cable', 'gtceu:light_gray_dye 18')
    colour('cyan_wire', 'morered:cyan_network_cable', 'gtceu:cyan_dye 18')
    colour('purple_wire', 'morered:purple_network_cable', 'gtceu:purple_dye 18')
    colour('blue_wire', 'morered:blue_network_cable', 'gtceu:blue_dye 18')
    colour('brown_wire', 'morered:brown_network_cable', 'gtceu:brown_dye 18')
    colour('green_wire', 'morered:green_network_cable', 'gtceu:green_dye 18')
    colour('red_wire', 'morered:red_network_cable', 'gtceu:red_dye 18')
    colour('black_wire', 'morered:black_network_cable', 'gtceu:black_dye 18')
    gates('latch', 1, ['2x minecraft:redstone_torch', 'minecraft:redstone'], 'morered:latch')
    gates('pulse_gate', 1, ['minecraft:iron_ingot', 'minecraft:redstone'], 'morered:pulse_gate')
    gates('diode', 2, ['minecraft:redstone_torch', 'minecraft:redstone'], 'morered:diode')
    gates('not_gate', 3, ['minecraft:redstone_torch', 'minecraft:redstone'], 'morered:not_gate')
    gates('nor_gate', 4, ['minecraft:redstone_torch', '2x minecraft:redstone'], 'morered:nor_gate')
    gates('nand_gate', 5, ['2x minecraft:redstone_torch', 'minecraft:redstone'], 'morered:nand_gate')
    gates('or_gate', 6, ['2x minecraft:redstone_torch', 'minecraft:redstone'], 'morered:or_gate')
    gates('and_gate', 7, ['2x minecraft:redstone_torch', 'minecraft:redstone'], 'morered:and_gate')
    gates('xor_gate', 8, ['3x minecraft:redstone_torch', 'minecraft:redstone'], 'morered:xor_gate')
    gates('xnor_gate', 9, ['3x minecraft:redstone_torch', 'minecraft:redstone'], 'morered:xnor_gate')
    gates('multiplexer', 2, ['minecraft:iron_ingot', 'minecraft:redstone'], 'morered:multiplexer')
    gates('and_2_gate', 10, ['minecraft:redstone_torch', 'minecraft:redstone'], 'morered:and_2_gate')
    gates('nand_2_gate', 10, ['minecraft:redstone_torch', 'minecraft:redstone'], 'morered:nand_2_gate')
    gates('bitwise_diode', 1, ['minecraft:quartz', 'morered:bundled_network_cable', 'minecraft:redstone'], 'morered:bitwise_diode')
    gates('bitwise_not_gate', 2, ['minecraft:quartz', 'morered:bundled_network_cable', 'minecraft:redstone'], 'morered:bitwise_not_gate')
    gates('bitwise_or_gate', 3, ['minecraft:quartz', 'morered:bundled_network_cable', 'minecraft:redstone'], 'morered:bitwise_or_gate')
    gates('bitwise_and_gate', 4, ['minecraft:quartz', 'morered:bundled_network_cable', 'minecraft:redstone'], 'morered:bitwise_and_gate')
    gates('bitwise_xor_gate', 5, ['minecraft:quartz', 'morered:bundled_network_cable', 'minecraft:redstone'], 'morered:bitwise_xor_gate')
    gates('bitwise_xnor_gate', 6, ['minecraft:quartz', 'morered:bundled_network_cable', 'minecraft:redstone'], 'morered:bitwise_xnor_gate')
})