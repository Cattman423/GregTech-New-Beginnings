StartupEvents.registry('item', event => {
    event.create('reloading_kit')
        .unstackable()
        .displayName('Reloading Kit')
        .maxDamage(1024)
        .texture('point_blank:item/reloading_kit')
        .tooltip('For when you want to load one bullet at a time')

//Primers  
    event.create('small_rifle_primer')
        .displayName('Small Rifle Primer')
        .texture('point_blank:item/small_rifle_primer')
        .tooltip('Careful, these are explosive')

    event.create('large_rifle_primer')
        .displayName('Large Rifle Primer')
        .texture('point_blank:item/large_rifle_primer')
        .tooltip('Careful, these are explosive')

    event.create('pistol_primer')
        .displayName('Pistol Primer')
        .texture('point_blank:item/pistol_primer')
        .tooltip('Careful, these are explosive')

    event.create('shotgun_primer')
        .displayName('Shotgun Primer')
        .texture('point_blank:item/shotgun_primer')
        .tooltip('Careful, these are explosive')

//Bullets
    event.create('small_rifle_bullet')
        .displayName('.20cal Rifle Bullet')
        .texture('point_blank:item/223_bullet')
        .tooltip('Bullets for .20cal rifles')

    event.create('medium_rifle_bullet')
        .displayName('.30cal Rifle Bullet')
        .texture('point_blank:item/308_bullets')
        .tooltip('Bullets for .30cal rifles')

    event.create('large_rifle_bullet')
        .displayName('.50cal Rifle Bullet')
        .texture('point_blank:item/50bmg_bullets')
        .tooltip('Bullets for .50cal rifles')

    event.create('small_pistol_bullet')
        .displayName('.30cal Pistol Bullet')
        .texture('point_blank:item/9mm_bullets')
        .tooltip('Bullets for .30cal pistols')

    event.create('large_pistol_bullet')
        .displayName('.40cal Pistol Bullet')
        .texture('point_blank:item/45acp_bullets')
        .tooltip('Bullets for .40cal pistols')

    event.create('shotgun_bullet')
        .displayName('Buckshot')
        .texture('point_blank:item/bag_of_buckshot')
        .tooltip('A bag of buckshot')

//Brass
    event.create('small_rifle_brass')
        .displayName('.20cal Rifle Brass')
        .texture('point_blank:item/223_brass')
        .tooltip('Empty brass for .20cal rifles')

    event.create('medium_rifle_brass')
        .displayName('.30cal Rifle Brass')
        .texture('point_blank:item/308_brass')
        .tooltip('Empty brass for .30cal rifles')

    event.create('large_rifle_brass')
        .displayName('.50cal Rifle Brass')
        .texture('point_blank:item/50bmg_brass')
        .tooltip('Empty brass for .50cal rifles')

    event.create('small_pistol_brass')
        .displayName('.30cal Pistol Brass')
        .texture('point_blank:item/9mm_brass')
        .tooltip('Empty brass for .30cal pistols')

    event.create('large_pistol_brass')
        .displayName('.40cal Pistol Brass')
        .texture('point_blank:item/45_brass')
        .tooltip('Empty brass for .40cal pistols')

    event.create('shotgun_hull')
        .displayName('Shotgun Hulls')
        .texture('point_blank:item/shotshell')
        .tooltip('Empty hulls for your shotguns')

//Gunpowder
    event.create('rifle_powder')
        .displayName('Smokeless Rifle Powder')
        .texture('point_blank:item/rifle_powder')
        .tooltip('Careful, this is explosive')

    event.create('pistol_powder')
        .displayName('Smokeless Pistol Powder')
        .texture('point_blank:item/pistol_powder')
        .tooltip('Careful, this is explosive')

    event.create('shotgun_powder')
        .displayName('Smokeless Shotgun Powder')
        .texture('point_blank:item/shotgun_powder')
        .tooltip('Careful, this is explosive')
})