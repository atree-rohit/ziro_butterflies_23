<template>
    Encode Images
</template>


<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const species_array = computed(() => store.getters.species_array)

const urls = {
    // Riodinidae: [
    //     "Dark_Judy_Abisara_fylla_e.jpg",
    //     "Punchinello-33_e.jpg",
    //     "Stripe_Punch,_dodona_adorina.jpg",
    //     "IMG_6008_e.jpg"
    // ],
    Papilionidae: [
        "Bhutan_Glory_(bhutantis_ludlowi).jpg",
        "Common_Batwing-14_e.jpg",
        "Common_bluebottle,_Graphium_sarpedon.jpg",
        "Common_windmill,_Byasa.jpg",
        "IMG_6199_e.jpg",
        "Great_Mormon_e.jpg",
        "Red_Helen-34_e.jpg",
        "DSC_1049_e.jpg",
        "Tailed_Jay-40.jpg",
        "DSC_1393_e.jpg",
        "IMG_0934_e.jpg",
        "IMG_0893_e.jpg",
        "Lime_Butterfly.jpg",
        "DSCN1680.jpg",
        "Red_Breast.jpg",
        "DSC_0579_Mahesh_Baruah_copy_e.jpg",
        "Yellow_Helen1.jpg",
        "Brown_Gorgon2.jpg",
        "IMG_6394_e.jpg",
        "Sixbar_Swordtail-2.jpg",
        "Great_Blue_Mime-mize5_e.jpg",
        "common_mime,_chilasa_clytia.jpg",
        "Common_Mormon_e.jpg",
        "DSC_7302_e.jpg"
    ],
    Nymphalidae: [
        "IMG-20181007-WA0038.jpg",
        "1-DSCN0652.jpg",
        "Blue_Pansy._Junonia_orithiya_(Linnaeus)_Male.jpg",
        "LRM_EXPORT_20180729_095838.jpg",
        "1-butterflies_001_(37).jpg",
        "Common_forester,_Lethe_insana-s(m).jpg",
        "Common_Jester,_Symbrenthia_hippoclus.jpg",
        "Common_Nawab_(2).jpg",
        "Cruiser-18.jpg",
        "Dark_Evening_Brown-19.jpg",
        "Glassy_Tiger,_Parantica_aglea.jpg",
        "IMG_1311.jpg",
        "Gray_Pansy,_Junonia_atlities.jpg",
        "LRM_EXPORT_20180729_100208.jpg",
        "indian_red_admiral.jpg",
        "Large_silverstripe,_Argynnis_chilreni.jpg",
        "DSCN1475.jpg",
        "Panted_lady,_Vanessa_cardui.jpg",
        "Popin_Jay-31.jpg",
        "Red_Lacewing-mize3.jpg",
        "Straight-Banded_Treebrown-38.jpg",
        "IMG_6162.jpg",
        "Black_Prince,_Rohana_parisatis_parisatis(F).jpg",
        "Indian_Fritillary-F.jpg",
        "IMG_20190513_002149.jpg",
        "DSC_1511.jpg",
        "Orange_Staff_Sergeant,_Athyma_cama.jpg",
        "Short-banded_Sailer,_Phaedyma_columelle.jpg",
        "Spotted_Jester,_Symbrenthia_hypselis.jpg",
        "Stately_Nawab.jpg",
        "Striped_Blue_Crow_female.jpg",
        "studded_sergent,_Athyma_asura.jpg",
        "Common_Earl-15.jpg",
        "White_Edged_Bushbrown-42.jpg",
        "Bicolour_Commodore-3.jpg",
        "Yellow_Owl.jpg",
        "sa6867.jpg",
        "Blue_Caliph-5.jpg",
        "common_sergeant_1.jpg",
        "common_3_ring.jpg",
        "Constable.jpg",
        "Eastern_Courtier.jpg",
        "Bhutan_Sergeant,_Athyma_Jina.jpg",
        "aDSCN1393.jpg",
        "common_castor.jpg",
        "Pale_green_sailer,_Neptis_zaida.jpg",
        "DSC_1810.jpg",
        "Yellow_coster,_Acraea_issoria(M0-A.jpg",
        "LRM_EXPORT_147813462222946_20190724_210000035.jpeg",
        "Common_Bushbrown,_Mycalesis.jpg",
        "Common_woodbrown,_Lethe_sidinis.jpg",
        "Bronze_Duke._Euthalia_Nara_(Moore)_F.jpg",
        "Dot-Dash_Sergeant,_Athyma_kanwa..jpg",
        "Blue_Duke.jpg",
        "Blue-Tail_Jester,_Symbrenthia_niphanda.jpg",
        "LRM_EXPORT_20180730_134205.jpg",
        "Common_Crow_(1).jpg",
        "Colour_Sergeant.jpg",
        "Leopard_lacewing,_cethosia_cyane.jpg",
        "Panther,_Neurosigma_siva.jpg",
        "White_commodore,_Parasarpa_dudu-L.jpg",
        "DSC_4476.jpg",
        "Dingiest_sailer,_neptis_harita-L.jpg",
        "Green_Duke,_Euthalia_iva-L.jpg",
        "DSC_0554.jpg",
        "Blackvein_Sergeant.jpg",
        "Lemon_Pansy(Junonia_lemonias).jpg",
        "Large_Yeoman,_Cirrochroa_aoris.jpg",
        "Veined_Labyrinth,_Neope_pulaha_(moore).jpg",
        "LRM_EXPORT_20180729_095032.jpg",
        "_MG_0155.jpg",
        "aDSCN1375.jpg",
        "Tailed_red_forester,_Lethe_sinorix.jpg",
        "Tytlers_treebrown,_Lethe_gemina_gafuri-S.jpg",
        "DSCN4102-001.jpg",
        "Common_Evening_Brown,_Melanitis_leda.jpg",
        "butterflies_001_(136).jpg",
        "DSC_6421.jpg",
        "IMG_1303.jpg",
        "small.jpg",
        "IMG_0640.jpg",
        "DSC_0636.jpg",
        "IMG-20180929-WA0024_e.jpg",
        "IMG_6184.jpg",
        "DSCN8446.jpg",
        "newar_three_ring.jpg",
        "Dark-band_Bushbrown,_mycalesis_mineus-S.jpg",
        "DSCN1720.jpg",
        "DSCN1368.jpg",
        "Pallid_Forester-29.jpg",
        "Common_Sergeant.jpg",
        "Great_Yellow_Sailer,_Neptis_radha.jpg",
        "DSCN5187.jpg",
        "original_(3).jpg",
        "original_(4).jpg",
        "DSC_1344.jpg",
        "IMG_20190809_103733.jpg"
    ],
    Lycaenidae: [
        "Blue_Tit2.jpg",
        "common_hedge_blue.jpg",
        "IMG_6264_e.jpg",
        "Dark_Grass_Blue.jpg",
        "DSCN9299.jpg",
        "Golden_sapphire,_Heliophorus_brahma.jpg",
        "Lesser_Grass_Blue-27.jpg",
        "Malayan.jpg",
        "LRM_EXPORT_20180730_135651.jpg",
        "IMG_0428.jpg",
        "Powdery_Green_Sapphire-32.jpg",
        "Golden_sapphire,_Heliophorus_brahma-L.jpg",
        "DSC_1021.jpg",
        "Azure_Sapphire_(2).jpg",
        "Naga_Sapphire-28.jpg",
        "Tailless_Lineblue-41_e.jpg",
        "mize2.jpg",
        "Bi-Spot_Royal-4.jpg",
        "LRM_EXPORT_147477322056772_20190724_205423895.jpeg",
        "Long-banded_silverline,_Spindasis_lohita.jpg",
        "Albocerulean.jpg",
        "Singleton,_Una_usta-P_e.jpg",
        "DSCN0845.jpg",
        "white_hedge_blue.jpg",
        "1-IMG_0719.jpg",
        "Burmese_Bushblue.jpg",
        "DSCN8363_e.jpg",
        "DSC_7485.jpg",
        "DSC_7512.jpg",
        "Fluffy_Tit.jpg"
    ], 
    Pieridae: [
        "Chocalate_Albatross.jpg",
        "Common_Grass_Yellow,_Eurema_hecabe_(Linnaeus)_e.jpg",
        "LRM_EXPORT_20180729_094043_e.jpg",
        "Plain_Puffin_(2)_e.jpg",
        "Three-spot_Grass_Yellow_e.jpg",
        "Tree_Yellow.jpg",
        "Hill_Jezebel_e.jpg",
        "Red-Base_Jezebel-35.jpg",
        "Small_Grass_Yellow_e.jpg",
        "DSCN4627.jpg",
        "RSCN0770_e.jpg",
        "G_6717.jpg",
        "Spotted_sawtooth,_Prioneris_thestylis.jpg",
        "IMG_6231_e.jpg",
        "DSCN1630.jpg",
        "DSCN0610.jpg"
    ],
    Hesperiidae: [
        "IMG_20190513_000024_e.jpg",
        "Spoted_Demon-37_e.jpg",
        "DSCN1437.jpg",
        "Yellow_Spot_Swift._Polytremis_eltola_(Hewitson).jpg",
        "Giant_Hopper,_Aposticopterus_fuliginosus.jpg",
        "DSCN0029.jpg",
        "DSC_0872.jpg",
        "Chinese_Swift._Pelopidas_Sinensis_(Mabille)_Male.jpg",
        "multi_spotted_flat.jpg",
        "Grass_Demon,_Udaspes_folus.jpg",
        "Indian_Awlking_e.jpg",
        "Narrow-Banded_Velve_Bob,_Koruthaiala_rubecula_cachara.jpg",
        "Plain_Banded_Awl,_Hasora_vitta.jpg",
        "Sikkim_Ace._Halpe_sikkima_Moore.jpg",
        "Small_Branded_Swift,_Pelopidas_mathias_(Fabricuis)_e.jpg",
        "butterflies_001_(95).jpg",
        "IMG_5873.jpg",
        "IMG_6321_e.jpg",
        "IMG_6824_e.jpg",
        "DSC_7447.jpg",
        "DSCN0499.jpg",
        "Tufted_swift,_Caltoris_plebeia-h.jpg",
        "hesperiid_butterfly.jpg"
    ]


}


// Function to fetch and encode images
async function fetchAndEncodeImages() {
    const lookup_array = species_array.value.map((s) => [s.family, s.scientific_name, s.image.filename])
    Object.keys(urls).forEach(async (family) => {
        const encodedImages = {}
        for (const imageURL of urls[family]) {
            const species_name = lookup_array.find((s) => s[2] === imageURL)
            try {
                const response = await fetch(`/assets/photos/${family}/${imageURL}`);
                const blob = await response.blob();
                const base64Data = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result.split(',')[1]);
                    reader.readAsDataURL(blob);
                });
                encodedImages[species_name[1]] = base64Data
            } catch (error) {
                console.error(`Error fetching image: ${error}`);
            }
        }
        console.log(family, encodedImages)
    })

    // After encoding all images, create the JSON file
    // createJSONFile(encodedImages)
}

fetchAndEncodeImages();

</script>