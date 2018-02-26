<template>
  <div>
    <h2>Min Profil</h2>
    {{$store.state.user.email}}

    <button class="button is-danger" @click="signOut">Logg ut</button>
    <hr>
    <Dogs />
  </div>
</template>

<script>
import { firebaseApp } from '../../firebaseApp';
import Dogs from '../dogs';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },

  components: {
    Dogs,
  },
}
</script>
