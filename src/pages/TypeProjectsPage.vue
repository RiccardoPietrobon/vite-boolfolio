<script>
import ProjectList from '../components/ProjectList.vue'; //importo ProjectList

export default {
    name: 'TypeProjectsPage',
    components: { ProjectList },
}
</script>

<template>
    <ProjectList type='at-type' class="my-2" />
</template>

<style lang="scss" scoped></style>