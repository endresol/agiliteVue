<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h2 class="level-item">Min Profil</h2>
      </div>
      <div class="level-right">
        <button class="button is-danger" @click="signOut">Logg ut</button>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        {{$store.state.user.email}}
      </div>
      <div class="column">
        <Dogs />
      </div>
    </div>

    <hr>
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
