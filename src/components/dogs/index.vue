<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <AddDog />
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    {{mydogs}}
  </div>
</template>


<script>
import { firebaseApp, dogsRef } from '../../firebaseApp';
import AddDog from '../dogs/AddDog';

export default {
  data() {
    return {
      mydogs: {},
    }
  },
  components: {
    AddDog,
  },
  mounted() {
    const fkowner = this.$store.state.user.uid;
    console.log('fkowner', fkowner);

    dogsRef.orderByChild("fkowner").equalTo(fkowner).on('value', snap => {
      let dogs = [];
      snap.forEach(dog => {
        dogs.push(dog.val())
      });
      this.$store.dispatch('setDogs', dogs);
      this.mydogs = dogs;
    })
  }
}
</script>

