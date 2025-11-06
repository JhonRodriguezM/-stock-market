<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
     

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Stock</RouterLink>
        <RouterLink to="/detalles">Detalles</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
