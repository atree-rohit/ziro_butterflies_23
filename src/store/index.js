import { createStore } from 'vuex'
import family_details from '../assets/json/descriptions.json'
import species from '../assets/json/species.json'
import species_details from '../assets/json/species_descriptions.json'
import images from '../assets/json/photographs.json'
import users from '../assets/json/users.json'


export default createStore({
    state: {
        json_data: {},
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
        }
    },
    actions: {
        init({dispatch}){
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
        },
        setJsonData({ commit }, payload) {
            commit('SET_JSON_DATA', payload)
        }
    }
})