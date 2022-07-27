<template>
  <div class="home">
  
    <Navbar/>

    <h2>Ropa de Cama</h2>
    <p>Plumones</p>
    <p>Sábanas</p>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>
