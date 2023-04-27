<script>
export default {

    name: 'ProjectCard',
    props: {
        project: Object,
        isDetail: Boolean,
    },
    computed: {
        abstract() {
            return this.project.text.slice(0, 200) + ' ecc, ecc...';
        }
    },
}
</script>

<template>
    <div>
        <div class="card">
            <img src="{{ project.image }}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ isDetail ? project.text : abstract }}</p>
            </div>
            <div class="card-footer">
                <router-link v-if="!isDetail" :to="{ name: 'project-detail', params: { slug: project.slug } }"
                    class="btn btn-primary btn-sm">Dettaglio</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>