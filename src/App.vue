<style scoped>
#app-container{
  border: 1px solid green;
  margin: 5rem 0;

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