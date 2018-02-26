<template>
  <div>
    <h1 class="title">App component</h1>
    <a class="button is-primary">Hei</a>
    {{$store.state.competitions}}
  </div>
</template>

<script>
import { competitionsRef } from '../../firebaseApp';
export default {
  mounted() {
    competitionsRef.on('value', snap => {
      let competitions = [];
      snap.array.forEach(competition => {
        competitions.push(competition.val())
      });
      this.$store.dispatch('setCompetitions', competitions);
    })
  }
}
</script>
