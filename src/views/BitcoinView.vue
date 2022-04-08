<script setup>
import { ref } from 'vue'
const { VUE_APP_API : url_api }  = process.env
// data un état du composant qui peut changer. Pour assigner une valeur à data on écrit data.value = "une valeur"
const data = ref(null)
const error = ref(null)
// requete sur un fichier JSON sur Github 
// fetch une fonction du navigateur qui permet de faire des requêtes asynchrones avec un API HTTP distante
// then c'est résolue, la requête, et on peut chaîner avec un autre then pour modifier la source, par exemple ici en transformant celle-ci en JSON. Le catch va gérer les éventuelles erreurs.
fetch(url_api)
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err))
</script>

<template>
<div class="container">
    <div v-if="error">Oops! Error encountered: {{ error }}</div>
        <div v-else-if="data">
            <!-- BEGIN LINK SVG DISCLAIMER -->
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
            </svg>
            <!-- END LINK SVG DISCLAIMER -->

            <!-- BEGIN DISCLAIMER CONTENT -->
            <div style="margin-left: 100%">
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <div class="alert alert-danger d-flex align-items-center" role="alert"> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/> </svg>
                <div> {{ data.disclaimer }} </div>
            </div>
            <!-- END DISCLAIMER CONTENT -->

            <!-- BEGIN DISPLAY CONTENT OF API -->
            <div style="text-align: center;">
                <table style="margin: 0 auto;">
                    <tbody>
                        <tr>
                            <td v-for="region in data.bpi" :key="region.code"> {{ region.code }} </td>
                        </tr>
                        <tr>
                            <td v-for="region in data.bpi" :key="region.code"> {{ region.symbol }} </td>
                        </tr>
                        <tr>
                            <td v-for="region in data.bpi" :key="region.code"> {{ region.rate }} </td>
                        </tr>
                        <tr>
                            <td v-for="region in data.bpi" :key="region.code"> {{ region.description }} </td>
                        </tr>
                        <tr>
                            <td v-for="region in data.bpi" :key="region.code"> {{ region.rate_float }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="text-align: center; margin-top: 15px;"> 
                <button style="" type="submit" class="btn btn-primary btn-block btn-large"><RouterLink to="/" style="text-decoration: none; color: white;">Retour à la page d'accueil</RouterLink></button>
            </div>
            <!-- END DISPLAY CONTENT OF API -->
        </div>
    <div v-else style="text-align: center; margin-top: 20%;">
        <div class="spinner-grow" role="status" style="color: red"></div>
        <p class="">Loading...</p>
    </div>
</div>
</template>

<style scoped>
legend>caption>span {
    text-align: center;
}

table {
    border-collapse: collapse;
    border: 1px solid gray;
    text-align: center;
    table-layout: fixed;
    width: 800px;
}
td {
    border: 1px solid gray;
    padding: 25px;
    text-align: center;
}
</style>