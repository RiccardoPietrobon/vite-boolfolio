<script>
import axios from 'axios'; //importo axios
import ProjectCard from './ProjectCard.vue';
import AppPagination from './AppPagination.vue';

export default {

    data() {
        return {
            error: false,
            isLoading: false,
            projects: {
                list: [],//lista progetti
                pages: [],//paginazione
            },
            type: null,
        }
    },

    props: {
        type: String,
    },

    components: { ProjectCard, AppPagination },

    emits: ['changePage'],

    methods: {
        fetchProjects(endpoint = null) {

            this.isLoading = true;

            if (!endpoint) endpoint = this.baseEndpoint;

            axios
                .get(endpoint)
                .then((response) => {
                    this.projects.list = response.data.projects.data;//2 volte data per il paginate
                    this.projects.pages = response.data.projects.links;//risposta paginazione
                    if (response.data.type) this.type = response.data.type;
                })
                .catch((err) => {
                    this.error = err.message;
                })
                .finally(() => {
                    this.isLoading = false;
                })
        },
    },

    computed: {
        title() { //in base al type avrò una visualizzazione diversa
            if (this.type == 'most-recent') return 'Progetti più recenti';
            if (this.type == 'at-type') return this.type ? 'Progetti di tipo ' + this.type.label : 'Progetti filtrati';
            return 'Lista Progetti'
        },

        baseEndpoint() {
            if (this.type == 'most-recent') return 'http://127.0.0.1:8000/api/projects';
            if (this.type == 'by-type') return 'http://127.0.0.1:8000/api/type/' + this.$route.params.type_id + '/projects';

            return 'http://127.0.0.1:8000/api/projects';
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
        <AppLoader v-if="isLoading" />
        <div v-if="error" class="alert alert-danger" role="alert">{{ error }}</div>
        <div v-else-if="projects.list.length" class="row g-3">
            <ProjectCard v-for="project in projects.list" :key="project.id" :project="project" :isDetail="false"
                class="col-md-4 d-flex" />
        </div>
        <h2 v-else class="text-muted">Non ci sono progetti</h2>

        <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
    </div>
</template>

<style lang="scss" scoped></style>