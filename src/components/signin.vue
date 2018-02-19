<template>
  <div class="section">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter has-text-centered">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
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

          <button class="button is-block is-info is-large is-fullwidth" @click="signIn">Logg inn</button>
        </form>
        <p class="has-text-grey">
          <a href="../">Ny bruker</a> &nbsp;·&nbsp;
          <a href="../">Glemt passord</a> &nbsp;·&nbsp;
          <a href="../">Hjelp?</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import firebaseApp from '../firebaseApp';
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
