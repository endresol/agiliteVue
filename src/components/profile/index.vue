<template>
  <div>
    <h2>Min Profil</h2>
    {{$store.state.user.email}}

    <button class="button is-danger" @click="signOut">Logg ut</button>
  </div>
</template>

<script>
import { firebaseApp } from '../../firebaseApp';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  }
}
</script>
