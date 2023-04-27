<script>
import ProjectCard from '../components/ProjectCard.vue'; //importo ProjectCard
import axios from 'axios';

export default {

    name: 'ProjectDetailPage',

    data() {
        return {
            project: null,
        }
    },

    components: { ProjectCard },

    created() {
        axios
            .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
            .then((response) => {
                this.project = response.data;
            });
    }
};
</script>

<template>
    <h1>Progetto n° {{ project?.id }}</h1>
    <ProjectCard v-if="project" :project="project" :isDetail="true" />
</template>

<style lang="scss" scoped></style>