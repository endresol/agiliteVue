<template>
  <div>
    <h2>Min Profil</h2>
    {{$store.state.user.email}}

    <button class="button is-danger" @click="signOut">Logg ut</button>
    <hr>
    <AddDog />
  </div>
</template>

<script>
import { firebaseApp } from '../../firebaseApp';
import AddDog from '../dogs/AddDog';

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },

  components: {
    AddDog,
  }
}
</script>
