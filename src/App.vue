<template>
  <div id="app" >
    <nav class="navbar is-white">
      <Topmenu />
    </nav>
    <div class="container">
      <router-view></router-view>
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
