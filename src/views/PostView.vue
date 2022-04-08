<template>
    <div class="container">
        <div class="card card_marg" style="width: 18rem;">
            <img src="../assets/1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ route.query.postTitle }}</h5>
                <p class="card-text">{{ route.query.postDescription }}</p>
                <RouterLink to="/posts" class="nav-link btn btn-primary" aria-current="page" style="color: white;">Accédez aux posts</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const postId = route.query.postId;
</script>

<style scoped>
    .card_marg {
        margin-top: 50px;
    }
</style>