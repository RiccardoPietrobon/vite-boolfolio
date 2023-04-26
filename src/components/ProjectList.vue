<script>

import ProjectCard from './ProjectCard.vue';


export default {
    props: {
        projects: Array,
        pages: Array,
        title: String,
    },

    components: { ProjectCard },
}
</script>

<template>
    <div class="container">
        <h1 class="my-2">{{ title }}</h1>
        <div v-if="projects.length" class="row g-3">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="col-md-4 d-flex" />
        </div>
        <h2 v-else class="text-muted">Non ci sono progetti</h2>

        <nav aria-label="Page navigation example">
            <ul class="pagination my-2">
                <li v-for="page in pages" class="page-item">
                    <button type="button" class="page-link" @click="$emit('changePage', page.url)"
                        :class="{ disabled: !page.url, active: page.active, }" v-html="page.label"></button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>