<template>
  <div class="home">

  
    <Navbar/>

    <h2>Ropa de Cama</h2>
    <p>cannon</p>
    <p>   </p>

   <div  v-for="product in products" :key="product.id">
    <img class v-bind:src="product.image" alt="plumon">
    <h6> {{product.title}} </h6>

    

   </div>
   

  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    
 
  },
  data (){
    return {
      products: []
    }
  },
  methods: {
    getProducts(){
    axios.get('https://my-json-server.typicode.com/Geral-code/CarritoCannon_Vue3/products')
    .then((res) => {
      console.log(res);
      this.products = res.data;
    })
    .catch((err) => {
      console.log(err);
    })
    }

  },
  created(){
    this.getProducts();
  }
}




</script>
