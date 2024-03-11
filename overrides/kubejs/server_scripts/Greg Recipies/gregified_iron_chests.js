ServerEvents.recipes(event => {
//Chests Shaped Crafting
    event.shaped(
        Item.of('ironchests:iron_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:iron_screw',
            B: 'gtceu:double_iron_plate',
            C: 'minecraft:chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:gold_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:gold_screw',
            B: 'gtceu:double_gold_plate',
            C: 'minecraft:chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:diamond_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:diamond_screw',
            B: 'gtceu:diamond_plate',
            C: 'minecraft:chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:copper_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:copper_screw',
            B: 'gtceu:double_copper_plate',
            C: 'minecraft:chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:obsidian_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:diamond_screw',
            B: 'gtceu:dense_obsidian_plate',
            C: 'ironchests:diamond_chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:crystal_chest'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:glass_screw',
            B: 'gtceu:glass_plate',
            C: 'ironchests:diamond_chest',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:dirt_chest'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:dirt',
            B: 'minecraft:chest'
        }
    )
//
event.shaped(
    Item.of('ironchests:iron_barrel'),
    [
        'ABA',
        'BCB',
        'DBE'
    ],
    {
        A: 'gtceu:iron_screw',
        B: 'gtceu:double_iron_plate',
        C: 'minecraft:barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }
)
event.shaped(
    Item.of('ironchests:gold_barrel'),
    [
        'ABA',
        'BCB',
        'DBE'
    ],
    {
        A: 'gtceu:gold_screw',
        B: 'gtceu:double_gold_plate',
        C: 'minecraft:barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }
)
event.shaped(
    Item.of('ironchests:diamond_barrel'),
    [
        'ABA',
        'BCB',
        'DBE'
    ],
    {
        A: 'gtceu:diamond_screw',
        B: 'gtceu:diamond_plate',
        C: 'minecraft:barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }
)
event.shaped(
    Item.of('ironchests:copper_barrel'),
    [
        'ABA',
        'BCB',
        'DBE'
    ],
    {
        A: 'gtceu:copper_screw',
        B: 'gtceu:double_copper_plate',
        C: 'minecraft:barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }
)
event.shaped(
    Item.of('ironchests:obsidian_barrel'),
    [
        'ABA',
        'BCB',
        'DBE'
    ],
    {
        A: 'gtceu:diamond_screw',
        B: 'gtceu:dense_obsidian_plate',
        C: 'ironchests:diamond_barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }
)
event.shaped(
    Item.of('ironchests:crystal_barrel'),
    [
        'ABA',
        'BCB',
        'DBE'
    ],
    {
        A: 'gtceu:glass_screw',
        B: 'gtceu:glass_plate',
        C: 'ironchests:diamond_barrel',
        D: '#forge:tools/hammers',
        E: '#forge:tools/screwdrivers'
    }
)
//
    event.shaped(
        Item.of('ironchests:copper_chest_upgrade'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:copper_screw',
            B: 'gtceu:double_copper_plate',
            C: '#minecraft:planks',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:iron_chest_upgrade'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:iron_screw',
            B: 'gtceu:iron_plate',
            C: 'gtceu:copper_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:gold_chest_upgrade'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:gold_screw',
            B: 'gtceu:gold_plate',
            C: 'gtceu:iron_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:diamond_chest_upgrade'),
        [
            'ABA',
            ' C ',
            'DBE'
        ],
        {
            A: 'gtceu:diamond_screw',
            B: 'gtceu:diamond_plate',
            C: 'gtceu:gold_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
    event.shaped(
        Item.of('ironchests:obsidian_chest_upgrade'),
        [
            'AFA',
            'BCB',
            'DFE'
        ],
        {
            A: 'gtceu:diamond_screw',
            B: 'gtceu:obsidian_plate',
            C: 'gtceu:diamond_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers',
            F: 'gtceu:dense_obsidian_plate'
        }
    )
    event.shaped(
        Item.of('ironchests:crystal_chest_upgrade'),
        [
            'ABA',
            'BCB',
            'DBE'
        ],
        {
            A: 'gtceu:glass_screw',
            B: 'gtceu:glass_plate',
            C: 'gtceu:diamond_plate',
            D: '#forge:tools/hammers',
            E: '#forge:tools/screwdrivers'
        }
    )
//Dollies
    event.shaped(
        Item.of('ironchests:iron_dolly'),
        [
            'AAB',
            'ACB',
            'DED'
        ],
        {
            A: 'gtceu:iron_rod',
            B: 'gtceu:rubber_nugget',
            C: '#forge:tools/wrenches',
            D: 'gtceu:iron_minecart_wheels',
            E: 'gtceu:steel_plate'
        }
    )
    event.shaped(
        Item.of('ironchests:diamond_dolly'),
        [
            'AAB',
            'ACB',
            'DED'
        ],
        {
            A: 'gtceu:diamond_rod',
            B: 'gtceu:polyethylene_nugget',
            C: '#forge:tools/wrenches',
            D: 'gtceu:steel_minecart_wheels',
            E: 'gtceu:nether_star_plate'
        }
    )
//Assemblers
    event.recipes.gtceu.assembler('ironbarrel')
        .itemInputs('minecraft:barrel', '3x gtceu:double_iron_plate')
        .itemOutputs('ironchests:iron_barrel')
        .duration(150)
        .EUt(16)
    event.recipes.gtceu.assembler('goldbarrel')
        .itemInputs('minecraft:barrel', '3x gtceu:double_gold_plate')
        .itemOutputs('ironchests:gold_barrel')
        .duration(250)
        .EUt(64)
    event.recipes.gtceu.assembler('diamondbarrel')
        .itemInputs('minecraft:barrel', '4x gtceu:diamond_plate')
        .itemOutputs('ironchests:diamond_barrel')
        .duration(300)
        .EUt(120)
    event.recipes.gtceu.assembler('copperbarrel')
        .itemInputs('minecraft:barrel', '3x gtceu:double_copper_plate')
        .itemOutputs('ironchests:copper_barrel')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('crystalbarrel')
        .itemInputs('ironchests:diamond_barrel', '4x gtceu:glass_plate')
        .itemOutputs('ironchests:crystal_barrel')
        .duration(350)
        .EUt(256)
    event.recipes.gtceu.assembler('obsidianbarrel')
        .circuit(2)
        .itemInputs('ironchests:diamond_barrel', '3x gtceu:dense_obsidian_plate')
        .itemOutputs('ironchests:obsidian_barrel')
        .duration(400)
        .EUt(256)
    event.recipes.gtceu.assembler('ironbarrelupgrade')
        .circuit(2)
        .itemInputs('ironchests:copper_barrel', 'gtceu:double_iron_plate')
        .itemOutputs('ironchests:iron_barrel')
        .duration(300)
        .EUt(120)
    event.recipes.gtceu.assembler('goldbarrelupgrade')
        .circuit(2)
        .itemInputs('ironchests:iron_barrel', 'gtceu:double_gold_plate')
        .itemOutputs('ironchests:gold_barrel')
        .duration(500)
        .EUt(64)
    event.recipes.gtceu.assembler('diamondbarrelupgrade')
        .circuit(2)
        .itemInputs('ironchests:gold_barrel', '2x gtceu:diamond_plate')
        .itemOutputs('ironchests:diamond_barrel')
        .duration(600)
        .EUt(120)
//
    event.recipes.gtceu.assembler('ironchest')
        .itemInputs('minecraft:chest', '3x gtceu:double_iron_plate')
        .itemOutputs('ironchests:iron_chest')
        .duration(150)
        .EUt(16)
    event.recipes.gtceu.assembler('goldchest')
        .itemInputs('minecraft:chest', '3x gtceu:double_gold_plate')
        .itemOutputs('ironchests:gold_chest')
        .duration(250)
        .EUt(64)
    event.recipes.gtceu.assembler('diamondchest')
        .itemInputs('minecraft:chest', '4x gtceu:diamond_plate')
        .itemOutputs('ironchests:diamond_chest')
        .duration(300)
        .EUt(120)
    event.recipes.gtceu.assembler('copperchest')
        .itemInputs('minecraft:chest', '3x gtceu:double_copper_plate')
        .itemOutputs('ironchests:copper_chest')
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler('crystalchest')
        .itemInputs('ironchests:diamond_chest', '4x gtceu:glass_plate')
        .itemOutputs('ironchests:crystal_chest')
        .duration(350)
        .EUt(256)
    event.recipes.gtceu.assembler('obsidianchest')
        .circuit(2)
        .itemInputs('ironchests:diamond_chest', '3x gtceu:dense_obsidian_plate')
        .itemOutputs('ironchests:obsidian_chest')
        .duration(400)
        .EUt(256)
    event.recipes.gtceu.assembler('dirtchest')
        .itemInputs('minecraft:chest', '8x minecraft:dirt')
        .itemOutputs('ironchests:dirt_chest')
        .duration(150)
        .EUt(16)
    event.recipes.gtceu.assembler('ironchestupgrade')
        .circuit(2)
        .itemInputs('ironchests:copper_chest', 'gtceu:double_iron_plate')
        .itemOutputs('ironchests:iron_chest')
        .duration(300)
        .EUt(120)
    event.recipes.gtceu.assembler('goldchestupgrade')
        .circuit(2)
        .itemInputs('ironchests:iron_chest', 'gtceu:double_gold_plate')
        .itemOutputs('ironchests:gold_chest')
        .duration(500)
        .EUt(64)
    event.recipes.gtceu.assembler('diamondchestupgrade')
        .circuit(2)
        .itemInputs('ironchests:gold_chest', '2x gtceu:diamond_plate')
        .itemOutputs('ironchests:diamond_chest')
        .duration(600)
        .EUt(120)
//
    event.recipes.gtceu.assembler('wtcupgrade')
        .circuit(2)
        .itemInputs('#minecraft:planks', '3x gtceu:double_copper_plate')
        .itemOutputs('ironchests:copper_chest_upgrade')
        .duration(200)
        .EUt(16)
    event.recipes.gtceu.assembler('ctiupgrade')
        .circuit(2)
        .itemInputs('gtceu:copper_plate', 'gtceu:double_iron_plate')
        .itemOutputs('ironchests:iron_chest_upgrade')
        .duration(300)
        .EUt(30)
    event.recipes.gtceu.assembler('itgupgrade')
        .circuit(2)
        .itemInputs('gtceu:iron_plate', 'gtceu:double_gold_plate')
        .itemOutputs('ironchests:gold_chest_upgrade')
        .duration(500)
        .EUt(64)
    event.recipes.gtceu.assembler('gtdupgrade')
        .circuit(2)
        .itemInputs('gtceu:gold_plate', '2x gtceu:diamond_plate')
        .itemOutputs('ironchests:diamond_chest_upgrade')
        .duration(600)
        .EUt(120)
    event.recipes.gtceu.assembler('dtoupgrade')
        .circuit(2)
        .itemInputs('gtceu:diamond_plate', 'gtceu:dense_obsidian_plate')
        .itemOutputs('ironchests:obsidian_chest_upgrade')
        .duration(800)
        .EUt(256)
    event.recipes.gtceu.assembler('dtcupgrade')
        .circuit(2)
        .itemInputs('gtceu:diamond_plate', '2x gtceu:glass_plate')
        .itemOutputs('ironchests:crystal_chest_upgrade')
        .duration(700)
        .EUt(256)
//
})