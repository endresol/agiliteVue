<template>
  <div class="competition">
    <div class="form">
      <div class="field">
        <label for="label-name" class="label">Navn</label>
        <div class="control">
          <input type="text" class="input" id="label-name" v-model="competition.name">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <label for="label-date" class="label">Dato</label>
          <input type="date" class="input" id="label-date" v-model="competition.startdate">
        </div>
        <div class="control">
          <label for="label-time" class="label">Klokkeslett</label>
          <input type="time" class="input" id="label-time" v-model="competition.starttime">
        </div>
      </div>
      <div class="field">
        <label for="label-level" class="label">Klasser</label>
        <div class="control">
          <input type="text" class="input" id="label-level" v-model="competition.levels">
        </div>
      </div>
      <div class="field">
        <label for="label-sizes" class="label">Størrelser</label>
        <div class="control">
          <input type="text" class="input" id="label-sizes" v-model="competition.sizes">
        </div>
      </div>
      <div class="field">
        <label for="label-price" class="label">Pris</label>
        <div class="control">
          <input type="text" class="input" id="label-price" v-model="competition.price">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="addDog">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text" @click="closeform">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      competition: {
        name: null,
        startdate: null,
        starttime: null,
        levels: [],
        sizes: [],
        price: null,
        organizer: '',
      },
    }
  }
}
</script>
