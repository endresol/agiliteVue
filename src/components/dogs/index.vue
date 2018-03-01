<template>
  <div>
    <div class="modalc">
      <div class="modalc-content ">
        <AddDog />
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
    {{mydogs}}
  </div>
</template>


<script>
import { firebaseApp, db } from '../../firebaseApp';
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

    db.collection("dogs").where("fkowner", "==", fkowner).get().then((querySnapshot) => {
      let dogs = [];
      querySnapshot.forEach((dog) => {
          dogs.push(dog.data());
      });
      this.$store.dispatch('setDogs', dogs);
      this.mydogs = dogs;
    });
    // dogsRef.orderByChild("fkowner").equalTo(fkowner).on('value', snap => {
    //   let dogs = [];
    //   snap.forEach(dog => {
    //     dogs.push(dog.val())
    //   });
    //   this.$store.dispatch('setDogs', dogs);
    //   this.mydogs = dogs;
    // })
  }
}
</script>

