if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,o)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const p=e=>s(e,d),c={module:{uri:d},exports:r,require:p};a[d]=Promise.all(i.map((e=>c[e]||p(e)))).then((e=>(o(...e),r)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icons/icon-128x128.png",revision:"89f26b9e8c64a86646eb4955d01f34ba"},{url:"assets/icons/icon-144x144.png",revision:"af2df8d22809f141cd559bcd24d3011a"},{url:"assets/icons/icon-152x152.png",revision:"26d3cd175038b9a24c85060c836096ec"},{url:"assets/icons/icon-192x192.png",revision:"aa3c695a9e6a4a0057ef63a7f247f3cb"},{url:"assets/icons/icon-384x384.png",revision:"7b783da60c2bc9b5ab5ae5d239b352d9"},{url:"assets/icons/icon-48x48.png",revision:"88a19349638cd37102a09e116cfcfe31"},{url:"assets/icons/icon-512x512.png",revision:"0f30fd88c5c649bb4abdc126c0abca3b"},{url:"assets/icons/icon-72x72.png",revision:"336febe134a43aae298099e336e030be"},{url:"assets/icons/icon-96x96.png",revision:"c5abb2a969d7674f378ad6da1092f370"},{url:"assets/index-0872d9f3.js",revision:null},{url:"assets/index-0cebf026.css",revision:null},{url:"assets/photos/Hesperiidae/butterflies_001_(95).jpg",revision:"8ad896f45213a706a287fd6658000d84"},{url:"assets/photos/Hesperiidae/Chinese_Swift._Pelopidas_Sinensis_(Mabille)_Male.jpg",revision:"3a9f2176c7dbfe1825f6eacb5403d857"},{url:"assets/photos/Hesperiidae/DSC_0872.jpg",revision:"fd5c5ac6d50c86218839261e574eaabc"},{url:"assets/photos/Hesperiidae/DSC_7447.jpg",revision:"b0472237d5f0515e9eecb5f677011d7c"},{url:"assets/photos/Hesperiidae/DSCN0029.jpg",revision:"3c21b70729cd0801b97af23139b81d9a"},{url:"assets/photos/Hesperiidae/DSCN0499.jpg",revision:"bf706534c8da3b7cd11bcc963fa7a7e0"},{url:"assets/photos/Hesperiidae/DSCN1437.jpg",revision:"043cd7f1d6a183cf9ba2f69a82d8cad6"},{url:"assets/photos/Hesperiidae/Giant_Hopper,_Aposticopterus_fuliginosus.jpg",revision:"acf97aa530f798de7b46efb42e0f168f"},{url:"assets/photos/Hesperiidae/Grass_Demon,_Udaspes_folus.jpg",revision:"6521bab132c2518dceda4595575344dc"},{url:"assets/photos/Hesperiidae/hesperiid_butterfly.jpg",revision:"0c6ee9e84b0b1dce0587f0c9b6b919da"},{url:"assets/photos/Hesperiidae/IMG_20190513_000024_e.jpg",revision:"868cf8009d962cd24851cbe5abbc746a"},{url:"assets/photos/Hesperiidae/IMG_5873.jpg",revision:"696cd8eef87b32f05c119983a67c8384"},{url:"assets/photos/Hesperiidae/IMG_6321_e.jpg",revision:"0f9001e0d8c561c5fcaadba4cb640325"},{url:"assets/photos/Hesperiidae/IMG_6824_e.jpg",revision:"72c0d0bc6e16a4514635f820d43e72d2"},{url:"assets/photos/Hesperiidae/Indian_Awlking_e.jpg",revision:"36b914e3390b3dd5316b4497b5a58143"},{url:"assets/photos/Hesperiidae/multi_spotted_flat.jpg",revision:"eb1a04c4e09c04499c5d3d6b18f0863a"},{url:"assets/photos/Hesperiidae/Narrow-Banded_Velve_Bob,_Koruthaiala_rubecula_cachara.jpg",revision:"82a7c692fb793d17f781dd4c8c5e2cfc"},{url:"assets/photos/Hesperiidae/Plain_Banded_Awl,_Hasora_vitta.jpg",revision:"70628a8a485bbb8c445bddadc30166ba"},{url:"assets/photos/Hesperiidae/Sikkim_Ace._Halpe_sikkima_Moore.jpg",revision:"6a5a52bc43b1d6cece9e3a393f8dcc0a"},{url:"assets/photos/Hesperiidae/Small_Branded_Swift,_Pelopidas_mathias_(Fabricuis)_e.jpg",revision:"8cafdc016920a410dc61be651a247f49"},{url:"assets/photos/Hesperiidae/Spoted_Demon-37_e.jpg",revision:"89a204cb9451ff994368e84d43a88958"},{url:"assets/photos/Hesperiidae/Tufted_swift,_Caltoris_plebeia-h.jpg",revision:"a163c89cb53156886a20086281e03e4f"},{url:"assets/photos/Hesperiidae/Yellow_Spot_Swift._Polytremis_eltola_(Hewitson).jpg",revision:"29baffcfe40938c8c0eae960eb85d759"},{url:"assets/photos/Lycaenidae/1-IMG_0719.jpg",revision:"b3f56d7f7e836f3238d6fc35aec427f7"},{url:"assets/photos/Lycaenidae/Albocerulean.jpg",revision:"19a9e252e364ed63ccbc39f29508e0b6"},{url:"assets/photos/Lycaenidae/Azure_Sapphire_(2).jpg",revision:"1ed251571a95a3175cc47dc2143b6a22"},{url:"assets/photos/Lycaenidae/Bi-Spot_Royal-4.jpg",revision:"bd1b1deb16d0a1e73ac2dc54f325fbdd"},{url:"assets/photos/Lycaenidae/Blue_Tit2.jpg",revision:"c9ddf49cc8d1438f560c3e31253f183d"},{url:"assets/photos/Lycaenidae/Burmese_Bushblue.jpg",revision:"6b7dd2e13200e6abc0ad966fd29b2637"},{url:"assets/photos/Lycaenidae/common_hedge_blue.jpg",revision:"67edcdb8c40ac648a54d697433ac9080"},{url:"assets/photos/Lycaenidae/Dark_Grass_Blue.jpg",revision:"8aeed3b26198a2b27a4ec59d6270b664"},{url:"assets/photos/Lycaenidae/DSC_1021.jpg",revision:"2f98430a9e056f45b446cf6be5df7aa9"},{url:"assets/photos/Lycaenidae/DSC_7485.jpg",revision:"2add3f592ef41d5d9addeebfdb7d4691"},{url:"assets/photos/Lycaenidae/DSC_7512.jpg",revision:"e8a6159600cc19eafed31134a6001277"},{url:"assets/photos/Lycaenidae/DSCN0845.jpg",revision:"4c8a022034483a002e37d232a8a8f663"},{url:"assets/photos/Lycaenidae/DSCN8363_e.jpg",revision:"99f4c0ef80088f1f0ec5d430ed5b006d"},{url:"assets/photos/Lycaenidae/DSCN9299.jpg",revision:"cd7acd93038a8660dea43e01d396d6a0"},{url:"assets/photos/Lycaenidae/Fluffy_Tit.jpg",revision:"e8224b83fbf624c6ee97f2ae61f5af57"},{url:"assets/photos/Lycaenidae/Golden_sapphire,_Heliophorus_brahma-L.jpg",revision:"811ae5fb710d6973ea0e6c5b01e9d69f"},{url:"assets/photos/Lycaenidae/Golden_sapphire,_Heliophorus_brahma.jpg",revision:"d74357373205f0a1d162b0791d5a435a"},{url:"assets/photos/Lycaenidae/IMG_0428.jpg",revision:"93f814af7c02566509935747944d00be"},{url:"assets/photos/Lycaenidae/IMG_6264_e.jpg",revision:"bddad4b6a6e4101ba38629028fe160ac"},{url:"assets/photos/Lycaenidae/Lesser_Grass_Blue-27.jpg",revision:"a1213c246d35672ab2c50668ae4e7f39"},{url:"assets/photos/Lycaenidae/Long-banded_silverline,_Spindasis_lohita.jpg",revision:"eebdb6c6a8ef097ac94f475481594908"},{url:"assets/photos/Lycaenidae/LRM_EXPORT_147477322056772_20190724_205423895.jpeg",revision:"e3c0a602124384b2de18578ff0f18408"},{url:"assets/photos/Lycaenidae/LRM_EXPORT_20180730_135651.jpg",revision:"d5fa9b31836ec1a02d792ce0bf7be348"},{url:"assets/photos/Lycaenidae/Malayan.jpg",revision:"4707e0faa4d92182ae7d1758ac217242"},{url:"assets/photos/Lycaenidae/mize2.jpg",revision:"348abe9ae05bec49787b6415e4911873"},{url:"assets/photos/Lycaenidae/Naga_Sapphire-28.jpg",revision:"04ac21bec990a38741c42bec31440572"},{url:"assets/photos/Lycaenidae/Powdery_Green_Sapphire-32.jpg",revision:"cd21ee91fa3c170a14448ef16c9e3c5f"},{url:"assets/photos/Lycaenidae/Singleton,_Una_usta-P_e.jpg",revision:"cffcf62ee1c65ab36a2c630910f5639d"},{url:"assets/photos/Lycaenidae/Tailless_Lineblue-41_e.jpg",revision:"9cd98b6311fdd331e8cffe86b7b1d4c7"},{url:"assets/photos/Lycaenidae/white_hedge_blue.jpg",revision:"598ac2e6cad5ce4866fd1dd1b2ceb97f"},{url:"assets/photos/Nymphalidae/_MG_0155.jpg",revision:"0090811999a70631fa1efae87bd2d83d"},{url:"assets/photos/Nymphalidae/1-butterflies_001_(37).jpg",revision:"0abff71b72157027e385acede08393d8"},{url:"assets/photos/Nymphalidae/1-DSCN0652.jpg",revision:"8e8b079269e82705dad54dfd39ec869f"},{url:"assets/photos/Nymphalidae/aDSCN1375.jpg",revision:"8e532c3e5c19f14bfe4e30d30ff9a8d9"},{url:"assets/photos/Nymphalidae/aDSCN1393.jpg",revision:"e909151127a74df930b9e1d9299c6934"},{url:"assets/photos/Nymphalidae/Bhutan_Sergeant,_Athyma_Jina.jpg",revision:"93d7b965404a3b8618ae0b1870cfe078"},{url:"assets/photos/Nymphalidae/Bicolour_Commodore-3.jpg",revision:"cd6eecf7e408795364c9f192da345513"},{url:"assets/photos/Nymphalidae/Black_Prince,_Rohana_parisatis_parisatis(F).jpg",revision:"fd0dcbf410473aa480da705f8bf6e767"},{url:"assets/photos/Nymphalidae/Blackvein_Sergeant.jpg",revision:"87668ec9b5f736226c099f265a3f4aba"},{url:"assets/photos/Nymphalidae/Blue_Caliph-5.jpg",revision:"66704039548c1ab38d723b327d790b42"},{url:"assets/photos/Nymphalidae/Blue_Duke.jpg",revision:"2e9e24c6801920ee172c7ea267f2c687"},{url:"assets/photos/Nymphalidae/Blue_Pansy._Junonia_orithiya_(Linnaeus)_Male.jpg",revision:"401974bb134ceee9e20592183df21bc8"},{url:"assets/photos/Nymphalidae/Blue-Tail_Jester,_Symbrenthia_niphanda.jpg",revision:"0da1f1b15312453a45c449b6d64770f4"},{url:"assets/photos/Nymphalidae/Bronze_Duke._Euthalia_Nara_(Moore)_F.jpg",revision:"889267d338fedb28ecb3c871bafad9a8"},{url:"assets/photos/Nymphalidae/butterflies_001_(136).jpg",revision:"73fc36e1fe7de5fd6907bcceace3301b"},{url:"assets/photos/Nymphalidae/Colour_Sergeant.jpg",revision:"8258bd3afc28eb36d4964a283f41ba34"},{url:"assets/photos/Nymphalidae/common_3_ring.jpg",revision:"24f2d27aec1d7d2db87acec435384ae5"},{url:"assets/photos/Nymphalidae/Common_Bushbrown,_Mycalesis.jpg",revision:"0ec6193c52627ae1b4c9d7d82e92e391"},{url:"assets/photos/Nymphalidae/common_castor.jpg",revision:"67c56f6a80fba18df721e7cbe579c590"},{url:"assets/photos/Nymphalidae/Common_Crow_(1).jpg",revision:"adc445fe67d5dc931a8f748b9d935a2e"},{url:"assets/photos/Nymphalidae/Common_Earl-15.jpg",revision:"934cdd4bf572ac429c74a39bd49d38e9"},{url:"assets/photos/Nymphalidae/Common_Evening_Brown,_Melanitis_leda.jpg",revision:"87f5854236945b46106bed7a6a1e0905"},{url:"assets/photos/Nymphalidae/Common_forester,_Lethe_insana-s(m).jpg",revision:"a8ce2b9563aca6e90367adc67a4a3f50"},{url:"assets/photos/Nymphalidae/Common_Jester,_Symbrenthia_hippoclus.jpg",revision:"5433328c7addfc3bbf31592fb32e5971"},{url:"assets/photos/Nymphalidae/Common_Nawab_(2).jpg",revision:"023b9911bf5feee9cd1d8b6e80285626"},{url:"assets/photos/Nymphalidae/common_sergeant_1.jpg",revision:"e8c092eea6780321f4fc7c3c9ba3e65f"},{url:"assets/photos/Nymphalidae/Common_Sergeant.jpg",revision:"333caa821a1e0117ed57bb5c714a5599"},{url:"assets/photos/Nymphalidae/Common_woodbrown,_Lethe_sidinis.jpg",revision:"ddeb1885a5c3a70fad32c0add5290062"},{url:"assets/photos/Nymphalidae/Constable.jpg",revision:"2a084f03a8c3702223198a22cbc9e04b"},{url:"assets/photos/Nymphalidae/Cruiser-18.jpg",revision:"66c2f2a3416ab4bc3470f93ccee9ac7b"},{url:"assets/photos/Nymphalidae/Dark_Evening_Brown-19.jpg",revision:"24975978d1e65299081cc23da95891c4"},{url:"assets/photos/Nymphalidae/Dark-band_Bushbrown,_mycalesis_mineus-S.jpg",revision:"f97449bf0880781ea741b8f006338272"},{url:"assets/photos/Nymphalidae/Dingiest_sailer,_neptis_harita-L.jpg",revision:"b0b857900cdcef4718eba20aff0af88e"},{url:"assets/photos/Nymphalidae/Dot-Dash_Sergeant,_Athyma_kanwa..jpg",revision:"1c3ef26c233bbcdf72e9cd6c32cc4bd4"},{url:"assets/photos/Nymphalidae/DSC_0554.jpg",revision:"2527d67bb592b901452a6e7aa25396e0"},{url:"assets/photos/Nymphalidae/DSC_0636.jpg",revision:"fb4d61603afd5d7a2a060d8e2bc13e8c"},{url:"assets/photos/Nymphalidae/DSC_1344.jpg",revision:"42af9ef8427520bf91164abadbc5057c"},{url:"assets/photos/Nymphalidae/DSC_1511.jpg",revision:"44bd2fb850c77482f3d299e6678f5c91"},{url:"assets/photos/Nymphalidae/DSC_1810.jpg",revision:"32dc0f3792be1953531726659c306fdc"},{url:"assets/photos/Nymphalidae/DSC_4476.jpg",revision:"2094330731bedb18677026f1b69a81aa"},{url:"assets/photos/Nymphalidae/DSC_6421.jpg",revision:"ed64626ac40b86c0a6a6b302db2f524a"},{url:"assets/photos/Nymphalidae/DSCN1368.jpg",revision:"0a6fa7823659268fbcf9f09036114fda"},{url:"assets/photos/Nymphalidae/DSCN1475.jpg",revision:"b0ec758256e290833e2f4d7cf3c8754e"},{url:"assets/photos/Nymphalidae/DSCN1720.jpg",revision:"3a4fc8bd384582121a58e70ff8e0972e"},{url:"assets/photos/Nymphalidae/DSCN4102-001.jpg",revision:"01d2d8af19e8916e05abde4c23c2e3b4"},{url:"assets/photos/Nymphalidae/DSCN5187.jpg",revision:"fb736248a9f820dc6a4bac98aa54b9ab"},{url:"assets/photos/Nymphalidae/DSCN8446.jpg",revision:"f649c6e85ec069378249c828658f79ae"},{url:"assets/photos/Nymphalidae/Eastern_Courtier.jpg",revision:"35383e9c6c0883e86622c3a3d199ca1e"},{url:"assets/photos/Nymphalidae/Glassy_Tiger,_Parantica_aglea.jpg",revision:"ccf55096fd2ed65f41fa0b7093ec6795"},{url:"assets/photos/Nymphalidae/Gray_Pansy,_Junonia_atlities.jpg",revision:"3917e7964ab797a809112e2f92038531"},{url:"assets/photos/Nymphalidae/Great_Yellow_Sailer,_Neptis_radha.jpg",revision:"3767e6184785545c34e617d7748d277a"},{url:"assets/photos/Nymphalidae/Green_Duke,_Euthalia_iva-L.jpg",revision:"dab1097ad6479259d711b9f4b4edbb21"},{url:"assets/photos/Nymphalidae/IMG_0640.jpg",revision:"4a432d1502bad67d60af887e5957f21f"},{url:"assets/photos/Nymphalidae/IMG_1303.jpg",revision:"a5ff6626e5ae319fe3df04c21ecac62e"},{url:"assets/photos/Nymphalidae/IMG_1311.jpg",revision:"90ef354cec729d40fa97c682dbb30d28"},{url:"assets/photos/Nymphalidae/IMG_20190513_002149.jpg",revision:"0a6301369f92cc7c8ce9b5df8c0f5936"},{url:"assets/photos/Nymphalidae/IMG_20190809_103733.jpg",revision:"d3043cd8c18992bdb3943ebc4216ecfd"},{url:"assets/photos/Nymphalidae/IMG_6162.jpg",revision:"44dc59a380ee567614caadfdf78a1450"},{url:"assets/photos/Nymphalidae/IMG_6184.jpg",revision:"3a403b61a029cda7f0f45e5e0667a7ac"},{url:"assets/photos/Nymphalidae/IMG-20180929-WA0024_e.jpg",revision:"9b300e04a1d5c752c1dcff485e361d4e"},{url:"assets/photos/Nymphalidae/IMG-20181007-WA0038.jpg",revision:"e191fea2f2ddc2ce8c0c42c0f8fd3aba"},{url:"assets/photos/Nymphalidae/Indian_Fritillary-F.jpg",revision:"9d9b712b8e6c960109fd4ed58a2e8e62"},{url:"assets/photos/Nymphalidae/indian_red_admiral.jpg",revision:"29abda61c02abbe28f559f10bb563875"},{url:"assets/photos/Nymphalidae/Large_silverstripe,_Argynnis_chilreni.jpg",revision:"6137046d5c821d9442d46df833ad69fa"},{url:"assets/photos/Nymphalidae/Large_Yeoman,_Cirrochroa_aoris.jpg",revision:"9b0de34101e78d872afbeea98d27b2ed"},{url:"assets/photos/Nymphalidae/Lemon_Pansy(Junonia_lemonias).jpg",revision:"4366007bc2fa62eaae3fcf65a8557877"},{url:"assets/photos/Nymphalidae/Leopard_lacewing,_cethosia_cyane.jpg",revision:"9f81bafeb2e777630ae94967449689e8"},{url:"assets/photos/Nymphalidae/LRM_EXPORT_147813462222946_20190724_210000035.jpeg",revision:"191c0353003a66c4c92d7572cd3b03c9"},{url:"assets/photos/Nymphalidae/LRM_EXPORT_20180729_095032.jpg",revision:"fb49ceb216b4ff0101e18510bca47924"},{url:"assets/photos/Nymphalidae/LRM_EXPORT_20180729_095838.jpg",revision:"4f379187c7bc329d49e8b5081c46b448"},{url:"assets/photos/Nymphalidae/LRM_EXPORT_20180729_100208.jpg",revision:"15cfac93e320d381ed62b592638b37a6"},{url:"assets/photos/Nymphalidae/LRM_EXPORT_20180730_134205.jpg",revision:"814968b8aed2091e235c4da7a6e49c07"},{url:"assets/photos/Nymphalidae/newar_three_ring.jpg",revision:"285e01caa0cdcc79ae49a0a48de3bda3"},{url:"assets/photos/Nymphalidae/Orange_Staff_Sergeant,_Athyma_cama.jpg",revision:"50e42486d9b1cc688f5816a575e43694"},{url:"assets/photos/Nymphalidae/original_(3).jpg",revision:"e77852cd5a489eefbbb84cf611a390c5"},{url:"assets/photos/Nymphalidae/original_(4).jpg",revision:"c1a0f9809ca021e6863c5e16102197f3"},{url:"assets/photos/Nymphalidae/Pale_green_sailer,_Neptis_zaida.jpg",revision:"e773c9eeb7aa8466fd48560ff7101a3b"},{url:"assets/photos/Nymphalidae/Pallid_Forester-29.jpg",revision:"e148dc8880e6005b7774749019f9f9a0"},{url:"assets/photos/Nymphalidae/Panted_lady,_Vanessa_cardui.jpg",revision:"a767ac6e9da9789dd0c750ee58602c12"},{url:"assets/photos/Nymphalidae/Panther,_Neurosigma_siva.jpg",revision:"ea58df2c5322bcd5cd388141f6bf4451"},{url:"assets/photos/Nymphalidae/Popin_Jay-31.jpg",revision:"5e07cda8fdcb8cdd970ff9dfc034ae35"},{url:"assets/photos/Nymphalidae/Red_Lacewing-mize3.jpg",revision:"a3b4543b5fb07b9ac983dd42719266a2"},{url:"assets/photos/Nymphalidae/sa6867.jpg",revision:"95e423e8e8d0a5a8bfb12c9b1acf3147"},{url:"assets/photos/Nymphalidae/Short-banded_Sailer,_Phaedyma_columelle.jpg",revision:"e928ec5e1d8e4e25fa0da247ddf4474c"},{url:"assets/photos/Nymphalidae/small.jpg",revision:"9b99212ca27a386cfd897642c6185ac6"},{url:"assets/photos/Nymphalidae/Spotted_Jester,_Symbrenthia_hypselis.jpg",revision:"ff3e12b703b32c5f060151d38aff2902"},{url:"assets/photos/Nymphalidae/Stately_Nawab.jpg",revision:"023ddb36c7c50e944a4425b61d65435b"},{url:"assets/photos/Nymphalidae/Straight-Banded_Treebrown-38.jpg",revision:"4f56bbd9de923e55f277237e209a295b"},{url:"assets/photos/Nymphalidae/Striped_Blue_Crow_female.jpg",revision:"7e314753586ff448b46f697b0bd211a6"},{url:"assets/photos/Nymphalidae/studded_sergent,_Athyma_asura.jpg",revision:"246f95d2f55177482d776338a15aa005"},{url:"assets/photos/Nymphalidae/Tailed_red_forester,_Lethe_sinorix.jpg",revision:"7b246e12a1c06544b2f15b10eaaeb1e7"},{url:"assets/photos/Nymphalidae/Tytlers_treebrown,_Lethe_gemina_gafuri-S.jpg",revision:"a0303fc76b1fb5898d152ad5fab63061"},{url:"assets/photos/Nymphalidae/Veined_Labyrinth,_Neope_pulaha_(moore).jpg",revision:"7b958f62a6f0f3f0ed2f0e544b7115e7"},{url:"assets/photos/Nymphalidae/White_commodore,_Parasarpa_dudu-L.jpg",revision:"18a2ab55093e069f340b4426f1750fba"},{url:"assets/photos/Nymphalidae/White_Edged_Bushbrown-42.jpg",revision:"8aa8f6bbed43a4943f6cd66d002e25bc"},{url:"assets/photos/Nymphalidae/Yellow_coster,_Acraea_issoria(M0-A.jpg",revision:"72e775462e9581bf0b1dcc5ce07cbef0"},{url:"assets/photos/Nymphalidae/Yellow_Owl.jpg",revision:"9d8807bb22ac407eac36e5aa03751da9"},{url:"assets/photos/Papilionidae/Bhutan_Glory_(bhutantis_ludlowi).jpg",revision:"1e0b97b1df10032b9b22b3d2cb88deac"},{url:"assets/photos/Papilionidae/Brown_Gorgon2.jpg",revision:"babf5a6fa818939b966f9046600e3755"},{url:"assets/photos/Papilionidae/Common_Batwing-14_e.jpg",revision:"851b57ff9d0f117acf25ed7ff0778ab4"},{url:"assets/photos/Papilionidae/Common_bluebottle,_Graphium_sarpedon.jpg",revision:"2447508c5dc41397fd300dc2e383dc52"},{url:"assets/photos/Papilionidae/common_mime,_chilasa_clytia.jpg",revision:"326960ab4cedcd746039da054c0cf7d0"},{url:"assets/photos/Papilionidae/Common_Mormon_e.jpg",revision:"fd65b6c055fb06c5e09c28a30e4dab3e"},{url:"assets/photos/Papilionidae/Common_windmill,_Byasa.jpg",revision:"e24c39c62143fb615205238b76a6ee0a"},{url:"assets/photos/Papilionidae/DSC_0579_Mahesh_Baruah_copy_e.jpg",revision:"49b4c52216b086adec9724128b165676"},{url:"assets/photos/Papilionidae/DSC_1049_e.jpg",revision:"932bd8c97302097892c4b56932af7d71"},{url:"assets/photos/Papilionidae/DSC_1393_e.jpg",revision:"a97802a5a4e2a2f451fce7a2fda972ee"},{url:"assets/photos/Papilionidae/DSC_7302_e.jpg",revision:"77fc9eea39f2929fbdd0fc83b89f8fa6"},{url:"assets/photos/Papilionidae/DSCN1680.jpg",revision:"f2f4442c76f6fc0bef894230f6cdce9b"},{url:"assets/photos/Papilionidae/Great_Blue_Mime-mize5_e.jpg",revision:"e675c21fe049037624e4aafefeb8555e"},{url:"assets/photos/Papilionidae/Great_Mormon_e.jpg",revision:"4ecdb5e5355bc1808a59d58e2d43bf55"},{url:"assets/photos/Papilionidae/IMG_0893_e.jpg",revision:"723e2498875ea46b2d715ae3fc97cc9c"},{url:"assets/photos/Papilionidae/IMG_0934_e.jpg",revision:"412cab93f61527969f04234b22c33dcb"},{url:"assets/photos/Papilionidae/IMG_6199_e.jpg",revision:"7d80c1092cb99c856e95cfb7b701c75d"},{url:"assets/photos/Papilionidae/IMG_6394_e.jpg",revision:"f7e1eefbbe5b5a4dc44656fc2c6d9eec"},{url:"assets/photos/Papilionidae/Lime_Butterfly.jpg",revision:"289af0e100f5a4684bf9583fc7276023"},{url:"assets/photos/Papilionidae/Red_Breast.jpg",revision:"ea15e511b5d1a525eec6bdc46b3ae7bc"},{url:"assets/photos/Papilionidae/Red_Helen-34_e.jpg",revision:"30fc1b9669455c67e6587883a672ebaf"},{url:"assets/photos/Papilionidae/Sixbar_Swordtail-2.jpg",revision:"e9306d0ca6930314d46e3c3a6f47be67"},{url:"assets/photos/Papilionidae/Tailed_Jay-40.jpg",revision:"775ffe07adfd9ccf1593b4420d887625"},{url:"assets/photos/Papilionidae/Yellow_Helen1.jpg",revision:"a31a951ec99912e6d38247e21210dc24"},{url:"assets/photos/Pieridae/Chocalate_Albatross.jpg",revision:"b0fac1f060f140f35a9744420af0fbd0"},{url:"assets/photos/Pieridae/Common_Grass_Yellow,_Eurema_hecabe_(Linnaeus)_e.jpg",revision:"739b6eb266f97a8790aac49634175d92"},{url:"assets/photos/Pieridae/DSCN0610.jpg",revision:"6bc708fa5bc20780909c9b5510ff5c01"},{url:"assets/photos/Pieridae/DSCN1630.jpg",revision:"f90a7927069f52b22a2c9783b9d7d6e8"},{url:"assets/photos/Pieridae/DSCN4627.jpg",revision:"8f386899f0574fab031144760467da5e"},{url:"assets/photos/Pieridae/G_6717.jpg",revision:"aec2dfdf4ba9ef7b0659a997edaec56d"},{url:"assets/photos/Pieridae/Hill_Jezebel_e.jpg",revision:"5072c1182aa4ddabf3cdbd20f0d9c13e"},{url:"assets/photos/Pieridae/IMG_6231_e.jpg",revision:"d46cdaea61f4aab8a694a298b818749d"},{url:"assets/photos/Pieridae/LRM_EXPORT_20180729_094043_e.jpg",revision:"6c805472e9dcbd39dc54ba5747c9be84"},{url:"assets/photos/Pieridae/Plain_Puffin_(2)_e.jpg",revision:"746e6135c26f82e74a49978d735638bf"},{url:"assets/photos/Pieridae/Red-Base_Jezebel-35.jpg",revision:"103e3ce377a53b43f95696b326cf1042"},{url:"assets/photos/Pieridae/RSCN0770_e.jpg",revision:"2978e0d03c09ef092e477b046ff7ec2b"},{url:"assets/photos/Pieridae/Small_Grass_Yellow_e.jpg",revision:"06a2924c35d7662594e425ef3bd43727"},{url:"assets/photos/Pieridae/Spotted_sawtooth,_Prioneris_thestylis.jpg",revision:"540ffb10fcec4044ad3c08029a0768f5"},{url:"assets/photos/Pieridae/Three-spot_Grass_Yellow_e.jpg",revision:"397119f21f64e5a47f8a94f7f343ad9e"},{url:"assets/photos/Pieridae/Tree_Yellow.jpg",revision:"4c0bd4da0d495c531b1ef7b35234506a"},{url:"assets/photos/Riodinidae/Dark_Judy_Abisara_fylla_e.jpg",revision:"f92187ddbef89249c64e64aeb774eb5a"},{url:"assets/photos/Riodinidae/IMG_6008_e.jpg",revision:"bb4487a583b6dbcf0bafd8876acbdcb3"},{url:"assets/photos/Riodinidae/Punchinello-33_e.jpg",revision:"b3e1a623c122a5dd53d4f86e6e2443b3"},{url:"assets/photos/Riodinidae/Stripe_Punch,_dodona_adorina.jpg",revision:"c6c2c954df4b345bfa6396cfeba65874"},{url:"index.html",revision:"9530c8ff1905e9785dd667b2ad9b42ca"},{url:"registerSW.js",revision:"c3b7e49215ea7f26ee28fb320e62b5a9"},{url:"zb.svg",revision:"5c171e87b95cac874788289029487fc7"},{url:"assets/icons/icon-72x72.png",revision:"336febe134a43aae298099e336e030be"},{url:"assets/icons/icon-96x96.png",revision:"c5abb2a969d7674f378ad6da1092f370"},{url:"assets/icons/icon-128x128.png",revision:"89f26b9e8c64a86646eb4955d01f34ba"},{url:"assets/icons/icon-144x144.png",revision:"af2df8d22809f141cd559bcd24d3011a"},{url:"assets/icons/icon-152x152.png",revision:"26d3cd175038b9a24c85060c836096ec"},{url:"assets/icons/icon-192x192.png",revision:"aa3c695a9e6a4a0057ef63a7f247f3cb"},{url:"assets/icons/icon-384x384.png",revision:"7b783da60c2bc9b5ab5ae5d239b352d9"},{url:"assets/icons/icon-512x512.png",revision:"0f30fd88c5c649bb4abdc126c0abca3b"},{url:"manifest.webmanifest",revision:"7c08da5c7aca86e236417ba92f693aec"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
