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
  <router-view></router-view> <!-- aggiungo il router -->
</template>

<style lang="scss" scoped></style>

