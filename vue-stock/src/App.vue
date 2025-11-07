<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
     

    <div class="wrapper">
      <nav class="navbar">
        <RouterLink class="link--navbar" to="/">Stock</RouterLink>
        <RouterLink class="link--navbar" to="/detalles">Detalles</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  display: flex;
  background-color: rgba(0, 0, 0, .1);
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.link--navbar {
  margin-right: 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

</style>
