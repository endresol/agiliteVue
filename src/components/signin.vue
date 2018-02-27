<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third is-offset-one-third has-text-centered">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <form v-on:submit.prevent>
          <div class="field">
            <div class="control">
              <input
                type="email"
                class="input is-normal"
                placeholder="E-post adresse"
                autofocus=""
                v-model="email" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input
                type="password"
                class="input is-normal"
                placeholder="Passord"
                v-model="password" />
            </div>
          </div>
          <button class="button is-block is-info is-normal is-fullwidth" @click="signIn">Logg inn</button>
        </form>
        <hr class="eller" />
        <div>
          <router-link to="/signup">
          <button class="button is-block is-info is-normal is-fullwidth">Ny bruker</button></router-link>
        </div>
        <p>
          <a href="../">Ny klubb</a> &nbsp;·&nbsp;
          <a href="../">Glemt passord</a> &nbsp;·&nbsp;
          <a href="../">Hjelp?</a>
        </p>
        <br />
        <div class="error">
           {{error.message}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { firebaseApp } from '../firebaseApp';

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: '',
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error;
      });
    }
  }
};
</script>
