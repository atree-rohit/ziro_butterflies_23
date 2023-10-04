<style scoped>
    .search-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #bbb;
    }
    input{
        width: 90%;
        padding: 0.5rem;
        margin: 1rem auto;
        border-radius: 1rem;
        border: 1px solid #ccc;
        text-align: center;
    }
    ul{
        max-height:10vh;
        overflow-y:scroll;
        text-align: center;
        background: #ddd;
        font-size:.8rem;
        margin: 0.5rem;
    }

    li{
        cursor: pointer;
    }

</style>

<template>
    <div class="search-container">
        <input type="search" v-model="search" placeholder="Search for a species">

        <ul>
            <li
                v-for="(species, s) in filtered_species"
                :key="s"
                v-text="speciesName(species)"
                @click="$emit('selected', species)"
            />
        </ul>

    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    
    const store = useStore()

    const props = defineProps({
        family: String
    })

    const species_array = computed(() => store.getters.species_array)
    const search = ref(null)

    const filtered_species = computed(() => {
        let op = []
        if(search.value && search.value.length > 1){
            let list = species_array.value
            if(props.family){
                list = list.filter((s) => s.family === props.family)
            }

            op = list.filter(s => s.scientific_name.toLowerCase().includes(search.value.toLowerCase()) || s.common_name.toLowerCase().includes(search.value.toLowerCase()))
        }
        return op
    })

    const speciesName = (species) => {
        return species.common_name + " (" + species.scientific_name + ")"
    }

</script>