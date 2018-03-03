<template>
  <div>
    <div class="level">
      <div class="level-left">
        <h3>Mine hunder</h3>
      </div>
      <div class="level-right">
        <AddDog />
      </div>
    </div>
    <div>
      <table class="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Navn</th>
            <th>Klasse AG</th>
            <th>Hopp</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="dog in mydogs"
            v-bind:key="dog.nkkno"
            >
            <td> {{dog.nickname}}</td>
            <td> {{dog.AGLevel}}</td>
            <td> {{dog.AGJumpLevel}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { firebaseApp, db } from '../../firebaseApp';
import AddDog from '../dogs/AddDog';
import { log } from 'util';

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
  }
}
</script>

