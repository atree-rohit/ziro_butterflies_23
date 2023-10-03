const CACHE_NAME = 'ZB0.02';
const urlsToCache = [
    '/',
    [
      "/ziro_butterflies_23/assets/photos/Papilionidae/Bhutan_Glory_(bhutantis_ludlowi).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG-20181007-WA0038.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/1-DSCN0652.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Blue_Pansy._Junonia_orithiya_(Linnaeus)_Male.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Blue_Tit2.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/LRM_EXPORT_20180729_095838.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Chocalate_Albatross.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/1-butterflies_001_(37).jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Common_Batwing-14_e.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Common_bluebottle,_Graphium_sarpedon.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_forester,_Lethe_insana-s(m).jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Common_Grass_Yellow,_Eurema_hecabe_(Linnaeus)_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/common_hedge_blue.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Jester,_Symbrenthia_hippoclus.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/IMG_6264_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Nawab_(2).jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Common_windmill,_Byasa.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Cruiser-18.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Dark_Evening_Brown-19.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Dark_Grass_Blue.jpg",
      "/ziro_butterflies_23/assets/photos/Riodinidae/Dark_Judy_Abisara_fylla_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/DSCN9299.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/IMG_6199_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Glassy_Tiger,_Parantica_aglea.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Golden_sapphire,_Heliophorus_brahma.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Great_Mormon_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_1311.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Gray_Pansy,_Junonia_atlities.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/LRM_EXPORT_20180729_100208.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/LRM_EXPORT_20180729_094043_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/indian_red_admiral.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Large_silverstripe,_Argynnis_chilreni.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Lesser_Grass_Blue-27.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSCN1475.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Malayan.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Panted_lady,_Vanessa_cardui.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/LRM_EXPORT_20180730_135651.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/IMG_0428.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Plain_Puffin_(2)_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Popin_Jay-31.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Powdery_Green_Sapphire-32.jpg",
      "/ziro_butterflies_23/assets/photos/Riodinidae/Punchinello-33_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Golden_sapphire,_Heliophorus_brahma-L.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Red_Helen-34_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Red_Lacewing-mize3.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/IMG_20190513_000024_e.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/DSC_1049_e.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Spoted_Demon-37_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Straight-Banded_Treebrown-38.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Tailed_Jay-40.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Three-spot_Grass_Yellow_e.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Tree_Yellow.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/DSC_1393_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_6162.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/IMG_0934_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/DSC_1021.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Black_Prince,_Rohana_parisatis_parisatis(F).jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/IMG_0893_e.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Hill_Jezebel_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Azure_Sapphire_(2).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Indian_Fritillary-F.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/DSCN1437.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_20190513_002149.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Lime_Butterfly.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_1511.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Naga_Sapphire-28.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Orange_Staff_Sergeant,_Athyma_cama.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Short-banded_Sailer,_Phaedyma_columelle.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/DSCN1680.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Red_Breast.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Red-Base_Jezebel-35.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Small_Grass_Yellow_e.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/DSCN4627.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Spotted_Jester,_Symbrenthia_hypselis.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Stately_Nawab.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Striped_Blue_Crow_female.jpg",
      "/ziro_butterflies_23/assets/photos/Riodinidae/Stripe_Punch,_dodona_adorina.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/studded_sergent,_Athyma_asura.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Earl-15.jpg",
      "/ziro_butterflies_23/assets/photos/Riodinidae/IMG_6008_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Tailless_Lineblue-41_e.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/DSC_0579_Mahesh_Baruah_copy_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/White_Edged_Bushbrown-42.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/RSCN0770_e.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Yellow_Helen1.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Yellow_Spot_Swift._Polytremis_eltola_(Hewitson).jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Brown_Gorgon2.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Bicolour_Commodore-3.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/IMG_6394_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Yellow_Owl.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/sa6867.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Blue_Caliph-5.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/common_sergeant_1.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Sixbar_Swordtail-2.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/common_3_ring.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Constable.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Eastern_Courtier.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/mize2.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Great_Blue_Mime-mize5_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Bhutan_Sergeant,_Athyma_Jina.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Bi-Spot_Royal-4.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/aDSCN1393.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/common_castor.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Pale_green_sailer,_Neptis_zaida.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_1810.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Yellow_coster,_Acraea_issoria(M0-A.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/LRM_EXPORT_147813462222946_20190724_210000035.jpeg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Bushbrown,_Mycalesis.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_woodbrown,_Lethe_sidinis.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Bronze_Duke._Euthalia_Nara_(Moore)_F.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Dot-Dash_Sergeant,_Athyma_kanwa..jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/LRM_EXPORT_147477322056772_20190724_205423895.jpeg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Giant_Hopper,_Aposticopterus_fuliginosus.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/DSCN0029.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/DSC_0872.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Blue_Duke.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Blue-Tail_Jester,_Symbrenthia_niphanda.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Chinese_Swift._Pelopidas_Sinensis_(Mabille)_Male.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/LRM_EXPORT_20180730_134205.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/common_mime,_chilasa_clytia.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Crow_(1).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Colour_Sergeant.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Leopard_lacewing,_cethosia_cyane.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/multi_spotted_flat.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Panther,_Neurosigma_siva.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/White_commodore,_Parasarpa_dudu-L.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_4476.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Dingiest_sailer,_neptis_harita-L.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Green_Duke,_Euthalia_iva-L.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Grass_Demon,_Udaspes_folus.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_0554.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/G_6717.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Blackvein_Sergeant.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Indian_Awlking_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Lemon_Pansy(Junonia_lemonias).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Large_Yeoman,_Cirrochroa_aoris.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Veined_Labyrinth,_Neope_pulaha_(moore).jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Long-banded_silverline,_Spindasis_lohita.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Narrow-Banded_Velve_Bob,_Koruthaiala_rubecula_cachara.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/LRM_EXPORT_20180729_095032.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Albocerulean.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/_MG_0155.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Plain_Banded_Awl,_Hasora_vitta.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/aDSCN1375.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Sikkim_Ace._Halpe_sikkima_Moore.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Singleton,_Una_usta-P_e.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Small_Branded_Swift,_Pelopidas_mathias_(Fabricuis)_e.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/DSCN0845.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/Spotted_sawtooth,_Prioneris_thestylis.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Tailed_red_forester,_Lethe_sinorix.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/butterflies_001_(95).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Tytlers_treebrown,_Lethe_gemina_gafuri-S.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSCN4102-001.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/white_hedge_blue.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/IMG_5873.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/IMG_6321_e.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/IMG_6231_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Evening_Brown,_Melanitis_leda.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/Common_Mormon_e.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/DSCN1630.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/butterflies_001_(136).jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/1-IMG_0719.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Burmese_Bushblue.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_6421.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_1303.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/small.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/DSCN8363_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_0640.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/IMG_6824_e.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/DSC_7447.jpg",
      "/ziro_butterflies_23/assets/photos/Papilionidae/DSC_7302_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_0636.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/DSC_7485.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/DSC_7512.jpg",
      "/ziro_butterflies_23/assets/photos/Lycaenidae/Fluffy_Tit.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG-20180929-WA0024_e.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_6184.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSCN8446.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/newar_three_ring.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Dark-band_Bushbrown,_mycalesis_mineus-S.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSCN1720.jpg",
      "/ziro_butterflies_23/assets/photos/Pieridae/DSCN0610.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSCN1368.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/DSCN0499.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Pallid_Forester-29.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/Tufted_swift,_Caltoris_plebeia-h.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Common_Sergeant.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/Great_Yellow_Sailer,_Neptis_radha.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSCN5187.jpg",
      "/ziro_butterflies_23/assets/photos/Hesperiidae/hesperiid_butterfly.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/original_(3).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/original_(4).jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/DSC_1344.jpg",
      "/ziro_butterflies_23/assets/photos/Nymphalidae/IMG_20190809_103733.jpg"
  ]
    // Include other important assets
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("installing cache", urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('chrome-extension://')) {
    return; // Bypass caching for extension requests
  }
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // If cached, return the cached response
        }

        // If not cached, fetch from the network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache the fetched response for future use
            return caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  // Clear old caches
  console.log("activate");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("clear cache", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});