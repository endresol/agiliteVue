<template>
  <div>
    <h1 class="title">App component</h1>
    <a class="button is-primary">Hei</a>
    {{$store.state.competitions}}
  </div>
</template>

<script>
import { db } from '../../firebaseApp';
export default {
  mounted() {
    db.collection('competitions').get().then('value', snap => {
      let competitions = [];
      snap.forEach(competition => {
        competitions.push(competition.data())
      });
      this.$store.dispatch('setCompetitions', competitions);
    })
  }
}
</script>
