StartupEvents.registry('item', event => {
	event.create('incomplete_wrought_iron', 'create:sequenced_assembly')
	event.create('incomplete_generator_coil', 'create:sequenced_assembly')
	event.create('incomplete_electron_tube', 'create:sequenced_assembly')
	event.create('incomplete_clockwork_mechanism', 'create:sequenced_assembly')
	event.create('incomplete_advanced_clockwork_mechanism', 'create:sequenced_assembly')
	event.create('incomplete_bronze_hull', 'create:sequenced_assembly')
	event.create('incomplete_steel_hull', 'create:sequenced_assembly')
	event.create('incomplete_blaze_burner', 'create:sequenced_assembly')

// IRON CHESTS RESTOCKED
	let createIncompleteChest = (material) => {
		event.create('incomplete_' + material + '_barrel', 'create:sequenced_assembly')
		event.create('incomplete_' + material + '_chest_upgrade', 'create:sequenced_assembly')
		event.create('incomplete_' + material + '_chest', 'create:sequenced_assembly')
	}
	createIncompleteChest('copper')
	createIncompleteChest('crystal')
	createIncompleteChest('diamond')
	createIncompleteChest('gold')
	createIncompleteChest('iron')
	createIncompleteChest('netherite')
	createIncompleteChest('obsidian')
})