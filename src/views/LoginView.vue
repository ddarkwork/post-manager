<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {  
  setup () {
    return { v$: useVuelidate( {$autoDirty : true} ) }
  },
  data() {
      return {
        email: "",
        password: ""
      }
  },
  methods: {
      async onSubmit() {
          const valid = await this.v$.$validate();
            if (!valid) return 
            this.$router.push('/user'); 
      }
  },

  validations() {
      return {
          email: {required, email},
          password: {required, minLength: minLength(8)}
      }
  },
}
</script>

<template>
  <div class="container">
    <div class="login">
      <h1 style="margin-top: 15px;" class="h3 mb-3 fw-normal">Connectez-vous</h1>
        <form method="post" @submit.prevent="onSubmit">
          <input style="margin-bottom: 15px;" type="email" class="form-control" name="email" placeholder="Entrez votre adresse mail" required="required" v-model="email" />
          <input style="margin-bottom: 15px;" type="password" class="form-control" name="password" placeholder="Entrez votre mot de passe" required="required" v-model="password" />
          <button style="margin-bottom: 15px;" type="submit" class="btn btn-primary btn-block btn-large">Connectez-vous</button>
          <p style="color: red" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </p>
          <p style="color: red" v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </p>
        </form>
      <p>Vous n'avez pas encore de compte ? <router-link to="/register">Créez un compte</router-link></p>
    </div>

    <router-view></router-view>
  </div>  
</template>

<style>

</style>