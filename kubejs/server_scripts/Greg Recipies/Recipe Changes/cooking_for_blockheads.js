ServerEvents.recipes(event => {
    function smoking(output, input){
        event.smoking(output, input)
    }
    event.recipes.gtceu.assembler('cfb_cb')
        .itemInputs('cookingforblockheads:recipe_book', '2x gtceu:exquisite_diamond_gem')
        .itemOutputs('cookingforblockheads:crafting_book')
        .duration(600)
        .EUt(30)
    event.recipes.gtceu.assembler('cfb_cj')
        .itemInputs('cookingforblockheads:milk_jar', '8x #gtceu:circuits/mv')
        .inputFluids('minecraft:milk 8000')
        .itemOutputs('cookingforblockheads:cow_jar')
        .duration(600)
        .EUt(30)
    
    function crafting(output, input){
        event.shaped(
            Item.of(output),
            [
              'AAA',
              'BCB',
              'BBB'
            ],
            {
              A: '#balm:stones',
              B: 'minecraft:terracotta',
              C: input
            }
          )
    }
    event.shaped(
        Item.of('cookingforblockheads:oven'),
        [
          'AAA',
          'BCB',
          'BDB'
        ],
        {
          A: 'minecraft:black_stained_glass',
          B: 'gtceu:iron_plate',
          C: 'ironfurnaces:iron_furnace',
          D: '#forge:tools/wrenches'
        }
      )
    event.shaped(
        Item.of('2x cookingforblockheads:fridge'),
        [
          'AAA',
          'ABC',
          'ABC'
        ],
        {
          A: 'gtceu:iron_plate',
          B: 'minecraft:chest',
          C: 'minecraft:iron_door'
        }
      )
    event.shaped(
        Item.of('cookingforblockheads:hanging_corner'),
        [
          'AAA',
          'AAA',
          '   '
        ],
        {
          A: 'minecraft:terracotta'
        }
      )
    event.shaped(
        Item.of('cookingforblockheads:cabinet'),
        [
          'AAA',
          'ABA',
          '   '
        ],
        {
          A: 'minecraft:terracotta',
          B: 'minecraft:chest'
        }
      )
    event.shaped(
        Item.of('cookingforblockheads:milk_jar'),
        [
          'ABA',
          'ACA',
          'AAA'
        ],
        {
          A: 'minecraft:glass',
          B: 'gtceu:rubber_plate',
          C: 'minecraft:milk_bucket'
        }
      )

    smoking('cookingforblockheads:recipe_book', 'minecraft:book')
    crafting('cookingforblockheads:cooking_table', 'cookingforblockheads:crafting_book')
    crafting('cookingforblockheads:counter', 'minecraft:chest')
    crafting('cookingforblockheads:corner', 'minecraft:terracotta')
    crafting('cookingforblockheads:sink', 'minecraft:water_bucket')
})