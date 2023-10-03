<style scoped>
    .species-cards-container {
        margin: 2rem 0;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }

    .species-modal-container{
        background: rgba(0,0,0,.67);
        margin: 0rem;
        padding: 1rem;
        position: absolute;
        inset: 0;

    }

    .table td{
        overflow: hidden;
        max-width: 75ch;
        white-space: nowrap;
    }

    @media only screen and (max-width: 600px) {
        .species-cards-container{
            gap: .5rem;
        }
    }
</style>

<template>
    <table class="table" v-show="false">
        <thead>
            <tr>
                <th
                    v-for="sk in species_keys"
                    :key="sk"
                    v-text="sk"
                />
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="species in filtered_species"
                :key="species.id"
            >
                <td 
                    v-for="sk in species_keys"
                    :key="sk"
                    v-text="species[sk]"
                />
            </tr>
        </tbody>
    </table>
    <div class="btn-group">
        <button class="btn"
            v-for="family in families"
            :key="family"
            :class="(selected_family === family) ? 'btn-success' : 'btn-primary'"
            @click="selectFamily(family)"
            v-text="family"
        />
    </div>
    <h1>Species</h1>
    <div class="species-cards-container">
        <species-card
            v-for="species in filtered_species"
            :class="{'last-clicked': last_clicked_card == species.id}"
            :key="species.id"
            :species="species"
            @click="cardClick(species)"
        />
    </div>
    <div class="species-modal-container" v-if="selected_species">
        <species-modal
            :species="selected_species"
            @close="closeModal"
        />
    </div>
</template>


<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import SpeciesCard from './SpeciesCard.vue'
    import SpeciesModal from './SpeciesModal.vue'

    const store = useStore()
    const families = [ "Papilionidae", "Nymphalidae", "Lycaenidae", "Pieridae", "Riodinidae", "Hesperiidae"]
    const selected_family = ref(null)
    const species_array = computed(() => store.getters.species_array)
    const filtered_species = computed(() => {
        if (selected_family.value) {
            return species_array.value.filter(species => species.family === selected_family.value)
        } else {
            return species_array.value
        }
    })
    
    const selected_species = ref(null)
    const scrollPosition = ref(0)
    const last_clicked_card = ref(null)
    

    const cardClick = (species) => {
        scrollPosition.value = window.scrollY
        selected_species.value = species
        window.scrollTo(0, 0)
    }
    
    const closeModal = () => {
        last_clicked_card.value = selected_species.value.id
        selected_species.value = null
        window.scrollTo(0, scrollPosition.value + 250)

    }

    const selectFamily = (family) => {
        selected_family.value = (selected_family.value == family) ? null : family
    }

    const species_keys = [ "id", "sequence", "user_id", "featured_photo_id", "scientific_name", "common_name", "family", "subfamily", "tribe", "genus", "species", "summary", "distribution", "abundance", "season", "size", "habitat", "altitude", "hostplant", "links", "notes", "description", "source", "description"]
    // const species_keys = [ "id", "scientific_name", "common_name", "description", "source"]
</script>