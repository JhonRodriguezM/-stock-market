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
  margin: 10px auto;
  width: 400px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .1);
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.link--navbar {
  margin-right: 20px;
  text-decoration: none;
  color: #5c5b5b;
  font-weight: 600;
  font-size: 1.5rem;
  transition: color 0.5s ease-in-out;
}
.link--navbar:hover {
  color: #000000;
}

</style>
