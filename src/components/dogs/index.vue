<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <AddDog />
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    {{$store.state.dogs}}
  </div>
</template>


<script>
import { firebaseApp, dogsRef } from '../../firebaseApp';
import AddDog from '../dogs/AddDog';

export default {
  data() {
    return {
      dogs: {},
    }
  },
  components: {
    AddDog,
  },
  mounted() {
    const fkowner = this.$store.state.user.uid;
    dogsRef.orderByChild("fkowner").equalTo(fkowner).on('value', snap => {
      let dogs = [];
      snap.forEach(dog => {
        dogs.push(dog.val())
      });
      this.$store.dispatch('setDogs', dogs);
    })
  }
}
</script>

