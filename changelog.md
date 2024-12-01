# Changelog

## V 0.4.1

* Recipes
  * Fixed Zinc ore to Zinc ingot smelting recipe to output correct form of Zinc ingots
  * Fixed a couple of recipes relaed to Lead
  * Ores can now be processed in the Create millstone without any byproducts compared to the crushing wheels
  * AE2
    * Changed recipe requirements for AE2 storage componets, 4k+ comps require a cleanroom, and voltage requirements have been adjusted
    * Changed recipes for AE2 cables
      * Quartz fibers, and fluix glass cables are made in the autoclave
      * Covered cables are made in the chemical bath
      * Cables are dyed in the chemical bath
      * Tweaked recipes for smart cables and smart dense cables
    * Changed recipes for AE2 network blocks and busses
  * Fixed recipe for Create belts missing ingredients
  * Fixed not getting GT steel or wöhler aluminium from the Create: TFMG blast furnace
  * Added circuit requirements to Arboretum recipes
  * Adjusted circuit requirements for Hydroponics recipes
  * Added GT mixer for liquid fertilizer
  * Added recipe for Circuit Assembly Line
  * Fixed missing EnderIO alloy dust recipes
* Quests
  * Updated description for the Clockwork: Casting Basin quest to say how to get the graphite dust for the molds.
  * Added warning to Clockwork Basic Automation quest to inform the player that no GT knives are consumed in the recipe
* Gamerules
  * Enabled water source conversion, water is now infinite as per vanilla rules (this only applies to new saves, you will have to do /gamerule waterSourceConversion true to enable this)
  * Disabled GT Enviormental Hazards
* Mods
  * Mod Updates
    * Ad Astra v1.15.19
    * Additional Placements v2.1.0
    * EnderChests v1.3
    * EnderTanks v1.4
    * GregTechCEu Modern v1.5.4
    * LdLib v1.0.31
    * ShetiPhianCore v1.4
    * Tetra v6.5.0
    * Tool Belt v1.20.02
    * Tree Tap v0.5.0
    * Volcanic Caverns v1.2.5.1
    * Xtones Reworked v47.2.0
  * Mod Downgrades
    * NuclearCraft: Neoteric to v 1.1.0-rc.3
  * Mod Removals
    * Removed Almost Unified
    * Removed Block of Sky
    * Removed Disable Villager Trades
    * Removed Global Game Rules
    * Removed Gregified Integrations

## V 0.4.0

### Forge Updated to v47.3.7

* Configs
  * Reduced the detection delay for FTB Quests
* Lang
  * Fixed missing lang for Soul Soil ores
  * Added Tooltips to custom multiblocks that indicate if they can parallelize and what recipes they can run
* Tags
  * Fixed missing tags for Soul Soil ores, now correctly minable with pickaxe or shovel
* Quests
  * Moving Power quest in Clockwork Age now only requires one prerequisite quest to be completed
  * Lv Energy Converter quest in Clockwork Age now accepts any Lv amperage energy converter
  * Removed quests to exchange Create Precision Mechanism and Create:TFMG Steel Mechanism with their pack counterparts
  * Fixed Hydrogen Quest on the Periodic Table requiring an the wrong type of Hydrogen, now correctly requires GT Hydrogen
* Machines
  * Singleblock Machines
    * Added Decay Hastener
    * Added Fuel Reprocessor
    * Added Isotope Separator
  * Multiblock Machines
    * Added Large Decay Hastener
    * Added Large Fuel Reprocessor
    * Added Large Isotope Separator
    * Added Sterile Laboratory
    * Changed Circuit Assemmbly Line to use Sturdy HSS-E Machine Casings instead of Solid Machine Casings
  * Machine Coils
    * Added HSS-S Coil with a temp of 6300k
    * Changed Mithril Coil temp to 8100k
    * Changed Chadium Coil temp to 9900k
    * Changed Awakened Draconium Coil temp to 11700k
    * Changed Stellar Matter Coil temp to 12600k
    * Changed Infinity coil temp to 13500k
    * Reworked coil crafting recipies to use fluid from previous coil tier
    * Added recipes for HSS-S, Mithril, Chadium, Awakened Draconium, Stellar Matter, and Infinity coils
* Items
  * Additions
    * Added Naquadah-doped Monocrystalline Certus Boule
    * Added Neutronium-doped Monocrystalline Certus Boule
    * Added Graphite Small Gear Mold
    * Added Graphite Round Mold
    * Added Graphite Gem Mold
  * Name Changes
    * Renamed Certus-doped Monocrystalline Silicon Boule to Monocrystalline Certus Boule
  * Tags
    * Added `'#forge:optical_fiber'` to Borosilicate Glass Fibers
* Blocks
  * Additions
    * Added Sterilized Machine Casing
    * Added AlON Glass
* Recipes
  * Removed the ability to use non gregified piston recipe
  * Fixed Wöhler Aluminium plates not being craftable in the Helve Hammer
  * Once again fixed the Create:TFMG Crude Oil => GTCEU Oil recipe
  * Tweaked Monocrystalline Certus Boule recipe
  * Certus wafers can now be made from Naquadah-doped and Neutronium-doped Monocrystalline Certus Boules in addition to Monocrystalline Certus Boules
  * Fixed Circuit Assembly Line recipes for Crystal Processor Mainframes, Wetware Processor Supercomputers and Wetware Processor Mainframes
  * Changed recipe for Optical Fiber Cables to accept accept items tagged `'#forge:optical_fiber'` instead of just Borosilicate Glass Fibers
  * Changed alloying and casting recipes to use GT metal fluids as opposed to KubeJS metal fluids
  * Added Casting recipes for Large and Small gears for the Casting Table
  * Added Casting recipe for Rose Quartz in the Casting Table and Casting Basin
  * Moved armour casting from Casting Basin to Casting Table
* Materials
  * Additions
    * Added Aluminium Oxynitride
    * Added Berkelium
    * Added Boron Arsenide
    * Added Boron Nitride
    * Added BSCCO
    * Added Californium
    * Added Carborundum
    * Added Carobbiite
    * Added Chromatic Compound
    * Added Conductive Alloy
    * Added Conduit Binder Composite
    * Added Copper Alloy
    * Added Cryotheum
    * Added Crystal Binder
    * Added Curium
    * Added Dark Steel
    * Added Dimensional Blend
    * Added End Steel
    * Added Energetic Alloy
    * Added Extreme Alloy
    * Added Ferroboron
    * Added Fluix
    * Added Fluorspar
    * Added Gadolinium
    * Added Hard Carbon
    * Added Jade
    * Added Kunzite
    * Added Lithium Manganese Dioxide
    * Added Manganosite
    * Added Nepheline
    * Added Neptunium
    * Added Niobium-Tin
    * Added Stabilized Oganesson
    * Added Polonium
    * Added Promethium
    * Added Porphyry Copper
    * Added Pulsating Alloy
    * Added Pyrolytic Carbon
    * Added Radium
    * Added Rhodochrosite
    * Added Silane
    * Added Soularium
    * Added Tetrachlorosilane
    * Added Thallium
    * Added Thermoconducting Alloy
    * Added Titanite
    * Added Tough Alloy
    * Added Trichlorosilane
    * Added Ulexite
    * Added Vibrant Alloy
    * Added Villiaumite
    * Added Zinc Chloride
    * Added Zircaloy
  * Modifications
    * Replaced Enriched Certus Quartz with Charged Certus Quartz
    * Added material liquid for all materials with an ingot form
    * Desh now requires an Mv EBF with Cupronickel coils
    * Ostrum now requires an Hv EBF with Kanthal Coils
    * Calorite now requires an Ev EBF with Nichrome Coils
    * Moon Deepslate no longer contains quicklime, can now be processed in an electrolyzer
    * Ores
      * Added ore to Antimony
      * Added ore to Arsenic
      * Added ore to Bismuth
      * Added ore to Biotite
      * Added ore to Borax
      * Added ore to Chromium
      * Added ore to Draconium
      * Added ore to Enriched Naquadah
      * Added ore to LepidoliteS
      * Added ore to Mithril
      * Added ore to Perlite
      * Added ore to Rose Quartz
      * Added ore to Rutile
      * Added ore to Titanium
      * Added ore to Uvarovite
    * Plates
      * Added plates to Draconium
      * Added plates to Awakened Draconium
    * Wires/Cables
      * Added UV tier cable to Chadium
      * Added UV tier cable to Mithril
      * Added UHV tier cable to HSS-S
      * Added UEV tier cable to Draconium
      * Added UIV tier superconductor to Stellar Matter
      * Added MAX tier superconductor to Awakened Draconium
      * Added MAX tier superconductor to Infinity
    * Bolt/screws
      * Added bolt/screw to Awakened Draconium
      * Added bolt/screw to Stellar Matter
      * Added bolt/screw to Infinity
    * Rods
      * Added rod to Awakened Draconium
      * Added rod to Stellar Matter
      * Added rod to Infinity
    * Renaming
      * Renamed Ceric Oxide to Ceria
      * Renamed Phosphorus Pentoxide to Phosphoric Anhydride
      * Renamed Uranous Oxide to Urania
      * Renamed Zinc Sulfate to Goslarite
      * Renamed Zirconia Oxide to Zirconia
    * Misc
      * Added foil to Manyullyn
  * Unifications
    * Unified GT Certus Quartz and AE2 Certus Quartsz
    * Unified GT Charged Certus Quartz with AE2 Charged Certus Quartz
    * Unified GT Redstone Alloy with Ender IO Redstone Alloy
* Ore Veins
  * Additions
    * Added Ardite (Ardite, Amethyst, Rutile) vein to Venus
    * Added Arsenic (Arsenic, Bismuth, Antimony) vein to Mars and Mercury
    * Added Bauxite (Bauxite, Ilmenite, Aluminium) vein to Mercury
    * Added Beryllium (Beryllium, Emerald, Thorium) vein to Mars and Venus
    * Added Borax (Borax, Ulexite) vein to the Moon
    * Added Carobbiite (Carobbiite) vein to Mars
    * Added Cassiterite (Tin, Cassiterite) vein to the Moon and Venus
    * Added Certus Quartz (Quartzite, Barite, Certus Quartz, Charged Certus Quartz) vein to the Moon, Mars and Venus
    * Added Copper (Chalcopyrite, Iron, Pyrite, Copper) vein to the Moon
    * Added Diamond (Graphite, Diamond, Coal) vein to Mercury
    * Added Draconium (Draconium, Electrotine, Jade) vein to Mercury
    * Added Fluorspar (Fluorspar, Barite, Calcite) vein to Mars
    * Added Galena (Galena, Silver, Lead) vein to the Moon, Mars and Venus
    * Added Gold (Magnetite, Gold, Vanadium Magnetite) vein to Mars
    * Added Ilmenite (Ilmenite, Chromite, Uvarovite, Perlite) vein to the Moon and Mercury
    * Added Iridium (Iridium, Palladium, Mithril) vein to Mercury and Venus
    * Added Iron (Goethite, Yellow Limonite, Hematite, Malachite) vein to Mars and Mercury
    * Added Molybdenum (Wulfenite, Molybdenite, Molybdenum, Powellite) vein to the Moon and Mercury
    * Added Monazite (Bastnasite, Monazite, Neodymium) vein to the Moon and Venus
    * Added Naquadah (Naquadah, Enriched Naquadah) vein to Mercury and Venus
    * Added Nickel (Garnierite, Nickel, Cobaltite, Pentlandite) vein to Mars and Venus
    * Added Palladium (Platinum, Chromium ,Sheldonite, Palladium) vein to Mercury
    * Added Pitchblende (Pitchblende, Uraninite) to Venus
    * Added Porphyry Copper (Porphyry Copper, Gold, Molybdenite) to the Moon
    * Added Redstone (Redstone, Ruby, Cinnabar) vein to Mars, Mercury and Venus
    * Added Rhodochrosite (Rhodochrosite, Silver) vein to Mars
    * Added Rutile (Rutile, Titanium, Bauxite, Calorite) vein to Venus
    * Added Salts (Rock Salt, Salt, Lepidolite, Spodumene) vein to Mars
    * Added Spodumene (Spodumene, Kunzite, Lepidolite, Rose Quartz) vein to the Overworld
    * Added Sulfur (Sulfur, Pyrite, Sphalerite) vein to Mars and Venus
    * Added Tetrahedrite (Tetrahedrite, Copper, Stibnite) vein to Mars and Venus
    * Added Nepheline (Nepheline, Biotite, Titanite, Villiaumite) vein to Mars
  * Modifications
    * Fixed Naquadah, Pitchblende, Scheelite veins not spawning on Mars
    * Moved Sheldonite vein to the Moon
    * Added Charged Certus Quartz Ore to Certus veins in the Nether
    * Increased density of *all* veins
* Bedrock Fluid Deposits
  * Added Chlorobenzene deposit to the Moon
  * Added CO2 deposit to Venus
  * Added Helium-3 deposit to the Moon and Mercury
  * Added Molten Iron deposit to Mercury
  * Added Molten Lead deposit to Venus
  * Added Sulfuric Acid deposit to Venus
* Resource Packs
  * Additions
    * Added Better GUI for Sophisticated Backpacks
    * Added Loading Screens custom resource pack, images for this are sourced from the Discord and are also shared to the Screenshots page on CurseForge
    * Added custom splash texts
* Mods
  * Mod Additions
    * Added EMI
    * Added Ender Chests
    * Added Ender IO
    * Added Ender Tanks
    * Added GraveStone Mod
    * Added KubeJS EnderIO
    * Added Loading Backgrounds
    * Added NuclearCraft: Neoteric
    * Added Panda's Falling Trees
  * Mod Removals
    * FTB Quests Optimizer
  * Mod Updates
    * Ad Astra Giselle Addon v6.15
    * Additional Placements v2.0.0
    * Advanced Peripherals v0.7.41r
    * Advancement Plaques v1.6.7
    * Amendments v1.2.12
    * Antiblocks ReChiseled v0.4.4
    * Apotheosis v7.4.3
    * Artifacts v9.5.13
    * Better Archeology v1.2.1
    * Better Villages v3.2.0
    * CC: Tweaked v1.113.1
    * Chipped v3.0.7
    * ChoiceTheorem's Overhauled Village v3.4.9b
    * Cloth Config API v11.1.136
    * CodeChicken Lib v4.4.0.516
    * Cognition v2.2.5
    * Collective v7.87
    * Colorful Hearts v4.3.16
    * Configuration v3.1.0
    * Cooking for Blockheads v16.0.9
    * CorgiLib v4.0.3.2
    * CraftTweaker v14.0.44
    * Create v0.5.1.j
    * Create: Big Cannons v5.6.0
    * Create: Connected v0.9.2
    * Create: Easy Structures v0.1.2
    * Create: Encased v1.6.2-fix1
    * Create: Jetpack v4.3.2
    * Create: Metallurgy v0.0.6
    * Create: Numismatics v1.0.7
    * Create: Quality of Life v1.2-fix1
    * Create: Slice and Dice v3.3.0
    * Create: Steam and Rails v1.6.7
    * Create: The Factory Must Grow v0.9.3
    * Create: Vintage Improvements v0.2.0.3
    * CreativeCore v2.12.22
    * Cristel Lib v1.1.6
    * Cucumber Library v7.0.13
    * Curios API v5.11.0
    * Draconic Evolution v3.1.2.588
    * Dummmmmmy v2.0.1
    * Embeddium v0.3.31
    * Enhanced Celestials v5.0.1.0
    * Entity Culling v1.7.1
    * Entity Texture Features v6.2.7
    * ExtendedAE v1.2.1
    * Farmers Delight v1.2.5
    * Fruits Delight v1.0.12
    * Fzzy Config v0.5.6
    * Gateways to Eternity v4.2.6
    * GeckoLib v4.4.9
    * GregTechCEu Modern v1.4.6
    * Iceberg v1.1.25
    * InsaneLib v1.15.0
    * Jade v11.11.1
    * Jade Addons v5.3.1
    * JourneyMap v5.10.3
    * Just Enough Items v15.20.0.105
    * KubeJS v2001.6.5-build.16
    * LDLib v1.0.28.a
    * Lithostitched v1.3.4
    * ME Requester v1.1.5
    * MmmMmmMmmMmm (Target Dummy) v2.0.2
    * ModernFix v5.19.5
    * MoonlightLib v2.13.22
    * Neat v1.20-37-FORGE
    * Puzzles Lib v8.1.24
    * Resourceful Lib v2.1.29
    * Spice of Life Onion v1.2.11
    * Sodium/Embeddium Dynamic Lights v1.0.9
    * Sophisticated Backpacks v3.20.11.1126
    * Sophisticated Core v0.6.36.741
    * Spice of Life Onion v1.4.5
    * Stargate Journey v0.6.33
    * SuperMartijn642's Core Lib v1.1.17a
    * Supplementaries v2.8.17
    * Torchmaster v20.1.9
    * Vic's Point Blank v1.7.6
    * Vintage Delight v0.1.6
    * Waystones v14.1.6
    * Workshop for Handsome Adventurer v1.15.2
    * YetAnotherConfigLib v3.6.1
    * YUNG's API v4.0.6
