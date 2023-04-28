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
        <div class="card w-100">
            <img :src="project.image" class="card-img-top {{ isDetail ? w-25 }}" :alt="project.slug">
            <div class="card-header d-flex justify-content-between align-items-start">
                <h5 class="card-title">{{ project.title }}</h5>
                <span v-if="project.type" class="badge" :style="{ backgroundColor: project.type.color }">{{
                    project.type.label }}</span>
            </div>
            <div class="card-body">
                <p class="card-text">{{ isDetail ? project.text : abstract }}</p>

                <div v-if="project.technologies.length">
                    <hr>
                    <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill mx-2"
                        :style="{ backgroundColor: technology.color }">{{ technology.label }}</span>
                </div>
            </div>
            <div class="card-footer"><!-- con v-if alterno se la card è nel dettaglio oppure no -->
                <router-link v-if="!isDetail" :to="{ name: 'project-detail', params: { slug: project.slug } }"
                    class="btn btn-primary btn-sm">Dettaglio</router-link> <!-- faccio passare lo slug -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>