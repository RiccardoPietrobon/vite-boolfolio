<script>
import AppHeader from './components/AppHeader.vue'; //importo AppHeader


export default {

  data() {
    return {
      title: "Lista progetti",
    }
  },

  components: { AppHeader }, //registro AppHeader

}
</script>

<template>
  <AppHeader :title="title" /> <!-- aggiungo nel template AppHeader -->
  <div class="container">
    <router-view></router-view> <!-- aggiungo il router -->
  </div>
</template>

<style lang="scss" scoped></style>

