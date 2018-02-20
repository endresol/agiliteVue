<template>
  <div class="section">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter has-text-centered">
        <h3 class="title has-text-grey">Ny bruker</h3>
        <form>
          <div class="field">
            <div class="control">
              <input
                type="email"
                class="input is-large"
                placeholder="E-post adresse"
                autofocus=""
                v-model="email" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                type="password"
                class="input is-large"
                placeholder="Passord"
                v-model="password" />
            </div>
          </div>
        </form>
        <br />
        <button class="button is-block is-info is-large is-fullwidth" @click="signUp">Ny bruker</button>
        <br />
        <div class="error">
           {{error.message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../../firebaseApp';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: '',
      },
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error;
      })
    }
  }
}
</script>
