<script>
import ProjectCard from '../components/ProjectCard.vue'; //importo ProjectCard
import CommentList from '../components/CommentList.vue'; //importo CommentList

import axios from 'axios';


export default {

    name: 'ProjectDetailPage',

    data() {
        return {
            project: null,
            isLoading: false,
        }
    },

    components: { ProjectCard, CommentList },

    created() {

        this.isLoading = true;

        axios
            .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data;
            })
            .catch(() => {
                this.$router.push({ name: 'not-found' })
            })
            .finally(() => {
                this.isLoading = false;
            })
            ;
    }
};
</script>

<template>
    <h1>Progetto n° {{ project?.id }}</h1>
    <AppLoader v-if="isLoading" />
    <ProjectCard v-if="project" :project="project" :isDetail="true" /> <!-- if fa un controllo perchè all'inizio è nullo -->
    <CommentList v-if="project" :project_id="project.id" />
</template>

<style lang="scss" scoped></style>