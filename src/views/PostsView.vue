<template>
  <div class="container">
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush" v-for = "post in posts" :key="post.id">
        <router-link :to = "{ path:'/post/'+ post.id, query:{postId:post.id, postTitle:post.title, postDescription: post.description, postText: post.text}}" style="text-decoration: none;">
          <li class="list-group-item">{{post.title}}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>


<script setup>
import {ref} from 'vue';
const posts = ref(
  [
    { id: 1, title : "MongoDB", description : "blabla", text: "un texte plus long" },
    { id: 2, title : "MySQL", description : "blabla", text: "un texte plus long" },
    { id: 3, title : "PHP", description : "blabla", text: "un texte plus long" },
    { id: 4, title : "Pyhton", description : "blabla", text: "un texte plus long" },
    { id: 5, title : "Docker", description : "blue", text: "un texte plus long" },
]
);
</script>

<style scoped>

</style>