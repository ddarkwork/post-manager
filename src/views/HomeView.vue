<script>
export default {
  
}
</script>

<template>
<div class="px-4 py-5 my-5 text-center">
  <h1 class="display-5 fw-bold div_home">Post Manager </h1>
  <div class="col-lg-6 mx-auto">
  <p class="lead mb-4">Bienvenue sur Post Manger, une application de Gestion de Posts développé en VUE JS 3</p>
  <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
  <button type="button" class="btn btn-primary btn-lg px-4 gap-3"><RouterLink to="/posts" style="color: white; text-decoration: none"><span class="link">Acceder au posts</span></RouterLink></button>
  <button type="button" class="btn btn-primary btn-lg px-4"><RouterLink to="/login" style="color: white; text-decoration: none"><span class="link">Connectez-vous</span></RouterLink></button>
  <button type="button" class="btn btn-primary btn-lg px-4"><RouterLink to="/bitcoin" style="color: white; text-decoration: none"><span class="link">Infos sur le Bitcoin</span></RouterLink></button>
  </div>
  </div>
</div>
</template>

<style>
  .link {
    text-transform: uppercase;
  }

  .div_home {
    margin-top: 100px;
  }
</style>
