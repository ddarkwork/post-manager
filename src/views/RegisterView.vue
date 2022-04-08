<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
export default {  
  setup () {
    return { v$: useVuelidate( {$autoDirty : true} ) }
  },
  data() {
      return {
        name: "",
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
          name: {required, minLength: minLength(3)},
          email: {required, email},
          password: {required, minLength: minLength(8)}
      }
  },
}
</script>

<template>
  <div class="container">
    <div class="login">
      <h1 style="margin-top: 15px;" class="h3 mb-3 fw-normal">Enregistrez-vous</h1>
        <form method="post" @submit.prevent="onSubmit">
          <input style="margin-bottom: 15px;" type="text" class="form-control" name="name" placeholder="Entrez votre nom" required="required" v-model="name" />
          <input style="margin-bottom: 15px;" type="email" class="form-control" name="email" placeholder="Entrez votre adresse mail" required="required" v-model="email" />
          <input style="margin-bottom: 15px;" type="password" class="form-control" name="password" placeholder="Entrez votre mot de passe" required="required" v-model="password" />
          <button type="submit" class="btn btn-primary btn-block btn-large">Enregistrez-vous</button>
          <p style="color: red" v-if="v$.name.$error"> {{ v$.name.$errors[0].$message }} </p>
          <p style="color: red" v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </p>
          <p style="color: red" v-if="v$.password.$error"> {{ v$.password.$errors[0].$message }} </p>
        </form>
    </div>
  </div>  
</template>

<style>

</style>