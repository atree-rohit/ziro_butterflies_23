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
        photos:{}
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
        }
    },
    actions: {
        async init({dispatch}){
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
                dispatch('setJsonData', item)
            })
            const idb_length = await getIDBlength()
            if(idb_length == 0){
                const families = ["Papilionidae", "Nymphalidae", "Lycaenidae", "Pieridae", "Riodinidae", "Hesperiidae"]
                families.forEach(async (family) => await dispatch('getPhotos', family))
            } 
            dispatch('storePhotos')
            

        },
        setJsonData({ commit }, payload) {
            commit('SET_JSON_DATA', payload)
        },
        async getPhotos({ commit }, family) {
            const url = `/assets/photos/${family}_photos.json`
            const response = await axios.get(url)
            if(response){
                console.log("getting", url)
                Object.entries(response.data).forEach(async ([key, value]) => await savePhoto(family, key, value))
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
