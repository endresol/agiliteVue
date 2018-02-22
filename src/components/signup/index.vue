<template>
  <div class="section">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter has-text-centered">
        <h3 class="title has-text-grey">Ny bruker</h3>
        <form v-on:submit.prevent>
          <div class="field">
            <div class="control">
              <input
                type="text"
                class="input is-large"
                placeholder="Navn"
                autofocus=""
                v-model="name" />
            </div>
          </div>

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
          <button class="button is-block is-info is-large is-fullwidth" @click="signUp">Ny bruker</button>
        </form>
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
      name: '',
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
      .then(user => {
        return user.updateProfile({ displayName: this.name });
      })
      .catch(error => {
        this.error = error;
      })
    }
  }
}
</script>
