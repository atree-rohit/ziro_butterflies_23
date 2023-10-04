import { createStore } from 'vuex'
import axios from 'axios'

import { openDb, savePhoto, getPhoto, getIDBlength } from '../utils/idb_photos.js';


import family_details from '../assets/json/descriptions.json'
import species from '../assets/json/species.json'
import species_details from '../assets/json/species_descriptions.json'
import images from '../assets/json/photographs.json'
import users from '../assets/json/users.json'


export default createStore({
    state: {
        json_data: {},
        photos:{},
        status: null,
        savedPhotos: 0,
    },
    getters: {
        species_array(state){
            let op = []
            if(state.json_data && state.json_data.users){
                const species = state.json_data.species
                const species_details = state.json_data.species_details
                const images = state.json_data.images
                
                op = species.map((sp) => {
                    const details = species_details[sp.family].find((item) => item.scientific_name === sp.scientific_name)
                    const image = images.find((item) => item.id === sp.featured_photo_id)
                    return {
                        ...sp,
                        description: details?.description,
                        source: details?.source,
                        image
                        
                    }
                    
                })
                op = op.filter((item) => item.image)
                
            }

            return op
        }
    },
    mutations: {
        SET_JSON_DATA(state, payload) {
            state.json_data[payload.field] = payload.data
        },
        SET_PHOTO(state, payload) {
            const {family, species, value} = payload
            state.photos[`${family}_${species}`] = value
        },
        SET_STATUS(state, payload) {
            console.log(payload)
            state.status = payload
        },
        NEW_PHOTO_SAVED(state){
            state.savedPhotos++
        }
    },
    actions: {
        async init({dispatch, commit, state}){
            const json_data = [
                {
                    field: 'family_details',
                    data: family_details
                },{
                    field: 'species',
                    data: species
                }, {
                    field: 'species_details',
                    data: species_details
                }, {
                    field: 'images',
                    data: images
                }, {
                    field: 'users',
                    data: users
                }
            ]
            
            json_data.forEach((item) => {
                commit('SET_STATUS', `Getting ${item.field}`)
                dispatch('setJsonData', item)
            })
            var idb_length = await getIDBlength()
            if(idb_length < 190){
                
                commit('SET_STATUS', `Getting Image ${state.savedPhotos} of 194`)
                const families = ["Papilionidae", "Nymphalidae", "Lycaenidae", "Pieridae", "Riodinidae", "Hesperiidae"]
                await Promise.all(families.map(async (family) => await dispatch('getPhotos', family)));
                // families.forEach(async (family) => await dispatch('getPhotos', family))
            } 
            dispatch('storePhotos')
            commit('SET_STATUS', null)            

        },
        setJsonData({ commit }, payload) {
            commit('SET_JSON_DATA', payload)
        },
        async getPhotos({ commit }, family) {
            const url = `/ziro_butterflies_23/assets/photos/${family}_photos.json`
            const response = await axios.get(url)
            if(response){
                Object.entries(response.data).forEach(async ([key, value]) => {
                    await savePhoto(family, key, value)
                    commit('NEW_PHOTO_SAVED')
                })
            }
        },
        async getPhotos1({ commit }, family) {
            const url = `/ziro_butterflies_23/assets/photos/${family}_photos.json`;
            try {
                const response = await axios.get(url, {
                    onDownloadProgress: (progressEvent) => {
                        const totalLength = progressEvent.lengthComputable
                            ? progressEvent.total
                            : progressEvent.target.getResponseHeader('content-length') ||
                            progressEvent.target.getResponseHeader('x-decompressed-content-length');
                        if (totalLength !== null) {
                            const progress = Math.round(
                            (progressEvent.loaded * 100) / totalLength
                            );
                            console.log(`Downloading ${url}: ${progress}%`);
                        }
                    },
                });
                if (response) {
                    await Promise.all(
                        Object.entries(response.data).map(async ([key, value]) =>
                            await savePhoto(family, key, value)
                        )
                    )
                }
            } catch (error) {
                console.error(`Error fetching ${url}:`, error);
            }
        },
        storePhotos({getters, dispatch, commit}){
            getters.species_array.forEach(async (s) => {
                const payload = {
                    family: s.family,
                    species: s.scientific_name,
                    value: await getPhoto(s.family, s.scientific_name)
                }
                commit('SET_PHOTO', payload)

            })

        }

    }
})
