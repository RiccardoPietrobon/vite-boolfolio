<script>
import axios from 'axios'; //importo axios
import ProjectList from '../components/ProjectList.vue'; //importo ProjectList
export default {

    data() {
        return {
            projects: {
                list: [],//lista progetti
                pages: [],//paginazione
            },
        }
    },

    components: { ProjectList },

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
    <ProjectList :projects="projects.list" :title="title" :pages="projects.pages" @changePage="fetchProject" />
</template>

<style lang="scss" scoped></style>