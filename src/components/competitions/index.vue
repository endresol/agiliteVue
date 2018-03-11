<template>
  <div>
    <div class="content">
      <h1 class="title">Kommende konkurranser</h1>
      <div class="columns">
        <div class="column">
          {{$store.state.competitions}}
        </div>
        <div class="column">
          <AddCompetition />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { db } from '../../firebaseApp';
import AddCompetition from './AddCompetition';

export default {
  components: {
    AddCompetition,
  },
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
