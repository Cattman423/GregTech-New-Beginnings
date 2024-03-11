StartupEvents.registry('item', event => {
	event.create('incomplete_wrought_iron', 'create:sequenced_assembly')
	event.create('incomplete_generator_coil', 'create:sequenced_assembly')
	event.create('incomplete_electron_tube', 'create:sequenced_assembly')
})