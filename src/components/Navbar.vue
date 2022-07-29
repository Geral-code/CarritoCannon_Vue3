<template>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cannon</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        <router-link class="nav-link" to="/productos">Productos</router-link>       
        <!-- <a class="nav-link" href="#">Tiendas</a>          -->
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {


}
</script>

<style>

</style>