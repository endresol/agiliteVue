<template>
  <div id="app" >
    <nav class="navbar is-white">
      <Topmenu />
    </nav>
    <div class="container">
      <div class="columns">
        <div class="column is-3 is-light-gray">
          <Rightmenu />
        </div>
        <div class="column is-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topmenu from './components/topmenu';
import Rightmenu from './components/rightmenu';

export default {
  data() {
    return {
      title: 'Agilite',
    }
  },
  components: {
    Topmenu,
    Rightmenu,
  }
}
</script>
