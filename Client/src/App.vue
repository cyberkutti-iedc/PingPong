<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>

</script>

<style scoped>

.app-container {
  width: 90vw; 
  height: 90vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2937; 
}

@media (max-width: 640px) {
  .app-container {
   
    padding: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .app-container {
    
    padding: 2rem;
  }
}

@media (min-width: 1025px) {
  .app-container {
   
    padding: 3rem;
  }
}
</style>
