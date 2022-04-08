<script setup>
//import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/posts" class="nav-link" aria-current="page">Posts</RouterLink>
        </li>
        <li>
          <RouterLink to="/bitcoin" class="nav-link" aria-current="page">Bitcoin</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link" aria-current="page">Login</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style>

</style>
