<script>
import axios from 'axios'; //importo axios
import AppHeader from './components/AppHeader.vue'; //importo header
import ProjectList from './components/ProjectList.vue'; //importo ProjectList

export default {

  data() {
    return {
      title: "Lista progetti",
      projects: {
        list: [],//lista progetti
        pages: [],//paginazione
      },

    }
  },

  components: { AppHeader, ProjectList }, //registro header e ProjectList

  emits: ['changePage'],

  methods: {
    fetchProject(endpoint = null) {

      if (!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects'

      axios.get(endpoint).then((response) => {
        this.projects.list = response.data.data;//2 volte data per il paginate
        this.projects.pages = response.data.links;//risposta paginazione
      })
    }
  },

  created() {
    this.fetchProject();
  },

}
</script>

<template>
  <AppHeader /> <!-- aggiungo nel template header -->
  <ProjectList :projects="projects.list" :title="title" :pages="projects.pages" @changePage="fetchProject" />
</template>

<style lang="scss" scoped></style>

