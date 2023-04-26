<script>
export default {

    name: 'ProjectCard',
    props: {
        project: Object,
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
        <div class="card" style="width: 18rem;">
            <img src="{{ project.image }}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ abstract }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>