<style scoped>
    .species-cards-container {
        margin: 0;
        margin-bottom: 2rem;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }

    .selected-taxa{
        background:#ccc;
        padding:.5rem;
        display: flex;
        justify-content: center;
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
    <!-- <EncodeImages /> -->
    <Loading />
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
    <search-box
        :family="selected_family"
        @selected="cardClick"
    />
    <div class="btn-group">
        <button class="btn"
            v-for="family in families"
            :key="family"
            :class="(selected_taxa.name === family) ? 'btn-success' : 'btn-primary'"
            @click="selectFamily(family)"
            v-text="family"
        />
    </div>
    <div class="selected-taxa" v-if="selected_taxa.rank">
        {{selected_taxa.rank}}: {{selected_taxa.name}}
    </div>
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
            @selectTaxa="selectTaxa"
        />
    </div>
</template>


<script setup>
    import { ref, computed } from 'vue'
    import { useStore } from 'vuex'
    import Loading from './Loading.vue'
    import SpeciesCard from './SpeciesCard.vue'
    import SpeciesModal from './SpeciesModal.vue'
    import EncodeImages from './EncodeImages.vue'
    import SearchBox from './SearchBox.vue'

    const store = useStore()
    const families = ["Papilionidae", "Nymphalidae", "Lycaenidae", "Pieridae", "Riodinidae", "Hesperiidae"]
    const selected_family = ref(null)
    const selected_taxa = ref({
        rank: null,
        name: null
    })

    const species_array = computed(() => store.getters.species_array)

    const filtered_species = computed(() => {
        if (selected_taxa.value.rank) {
            return species_array.value.filter(species => species[selected_taxa.value.rank] === selected_taxa.value.name)
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
        if(selected_taxa.value.name === family){
            selected_taxa.value = {
                rank: null,
                name: null
            }
        } else {
            selected_taxa.value = {
                rank: "family",
                name: family
            }
        }
    }

    const species_keys = [ "id", "sequence", "user_id", "featured_photo_id", "scientific_name", "common_name", "family", "subfamily", "tribe", "genus", "species", "summary", "distribution", "abundance", "season", "size", "habitat", "altitude", "hostplant", "links", "notes", "description", "source", "description"]

    const selectTaxa = (taxa) => {
        selected_taxa.value = {
            rank: taxa.rank,
            name: taxa. name
        }
        closeModal()
    }
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            console.log(111)
        });
    }

</script>