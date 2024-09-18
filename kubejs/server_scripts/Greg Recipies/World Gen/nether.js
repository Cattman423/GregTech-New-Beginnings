GTCEuServerEvents.oreVeins(event => {
    event.modify("gtceu:certus_quartz", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Quartzite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.CertusQuartz).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Barite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.get('charged_certus')).size(1, 1))
            )
        )
    })
})