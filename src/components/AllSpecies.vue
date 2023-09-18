<style scoped>
    .species-cards-container {
        margin: 2rem 0;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }
</style>

<template>
    <h1>Species Array</h1>    
    <div class="species-cards-container">
        <species-card
            v-for="species in species_array"
            :key="species.id"
            :species="species"
        />
    </div>
</template>


<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import SpeciesCard from './SpeciesCard.vue'

    const store = useStore()
    const species_array = computed(() => store.getters.species_array)
</script>