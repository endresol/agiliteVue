<template>
  <div class="newdog">
    <div
      class="modal"
      v-bind:class="{'is-active': showform}"
    >
      <div class="modal-background"></div>
      <div class="modal-card ">
        <div class="modal-card-body">
          <div class="form">
            <div class="field">
              <label class="label">Navn</label>
              <div class="control">
                <input class="input" type="text" placeholder="Navn" v-model="dog.nickname">
              </div>
            </div>

            <div class="field">
              <label class="label">Kennelnavn</label>
              <div class="control">
                <input class="input" type="text" placeholder="Navn" v-model="dog.fullname">
              </div>
            </div>

            <div class="field">
              <label class="label">Fødselsdato</label>
              <div class="control">
                <input class="input" type="date" placeholder="Navn" v-model="dog.birthdate">
              </div>
            </div>

            <div class="field">
              <div class="field-body">
                <div class="field is-horizontal">
                  <div class="field-label">
                    <label class="label">Kjønn:</label>
                  </div>
                  <div class="field-body">
                    <div class="control">
                      <label class="radio">
                        <input type="radio" name="question" value="hann" v-model="dog.gender">
                        Hann
                      </label>
                      <label class="radio">
                        <input type="radio" name="question" value="hunn" v-model="dog.gender">
                        Hunn
                      </label>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-label">
                    <label class="label">Nkk nr:</label>
                  </div>
                  <div class="field-body">
                    <div class="control">
                      <input class="input" type="text" placeholder="NKK nummer" v-model="dog.nkkno">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="field-body">
                <div class="field is-horizontal">
                  <div class="field-label">
                    <label class="label">Størrelse: </label>
                  </div>
                  <div class="field-body">
                    <div class="control">
                      <div class="select">
                        <select v-model="dog.AGSize">
                          <option>Liten</option>
                          <option>Mellom</option>
                          <option>Stor</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Agility:</label>
                  </div>
                  <div class="field-body">
                    <div class="control">
                      <div class="select">
                        <select v-model="dog.AGLevel">
                          <option value="1">Klasse 1</option>
                          <option value="2">Klasse 2</option>
                          <option value="3">Klasse 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Hopp:</label>
                  </div>
                  <div class="field-body">
                    <div class="control">
                      <div class="select">
                        <select v-model="dog.AGJumpLevel">
                          <option value="1">Klasse 1</option>
                          <option value="2">Klasse 2</option>
                          <option value="3">Klasse 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Handler</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Fører" v-model="dog.handlername">
                </div>
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
      </div>
      <button class="modal-close is-large" aria-label="close" @click="closeform"></button>
    </div>
    <button class="button is-stndard is-small" @click="openform">ny hund</button>
  </div>
</template>

<script>
import { db } from "../../firebaseApp";

export default {
  data() {
    return {
      dog: {
        nickname: null,
        fullname: null,
        bread: null,
        birthdate: null,
        gender: null,
        AGSize: null,
        AGLevel: null,
        AGJumpLevel: null,
        nkkno: null,
        handlername: null,
        fkowner: null
      },
      showform: false,
    };
  },
  methods: {
    addDog() {
      this.dog.fkowner = this.$store.state.user.uid;
      // dogsRef.push(this.dog);
      db
        .collection("dogs")
        .add({
          ...this.dog
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    openform() {
      this.showform = true;
    },
    closeform() {
      this.showform = false;
    }
  }
};
</script>
