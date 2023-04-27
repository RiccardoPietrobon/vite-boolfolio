<script>
import axios from 'axios'; //importo axios
import ProjectCard from './ProjectCard.vue';
import AppPagination from './AppPagination.vue';

export default {

    data() {
        return {
            projects: {
                list: [],//lista progetti
                pages: [],//paginazione
            },
        }
    },

    props: {
        title: String,
    },

    components: { ProjectCard, AppPagination },

    emits: ['changePage'],

    methods: {
        fetchProjects(endpoint = null) {

            if (!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects'

            axios.get(endpoint).then((response) => {
                this.projects.list = response.data.data;//2 volte data per il paginate
                this.projects.pages = response.data.links;//risposta paginazione
            })
        }
    },

    created() {
        this.fetchProjects();
    },
}
</script>

<template>
    <div>
        <h1 class="my-2">{{ title }}</h1>
        <div v-if="projects.list.length" class="row g-3">
            <ProjectCard v-for="project in projects.list" :key="project.id" :project="project" :isDetail="false"
                class="col-md-4 d-flex" />
        </div>
        <h2 v-else class="text-muted">Non ci sono progetti</h2>

        <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
    </div>
</template>

<style lang="scss" scoped></style>