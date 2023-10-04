<style scoped>
#app-container{
  border: 1px solid green;
  margin-bottom: 5rem;

}

#app-container:has(.loading-container),
#app-container:has(.species-modal-container)
{
  max-height: 90vh;
  overflow:hidden;
}
</style>

<template>
  <div id="app-container">
    <all-species />

  </div>
</template>


<script setup>
import AllSpecies from './components/AllSpecies.vue'
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
    store.dispatch("init")
})
</script>