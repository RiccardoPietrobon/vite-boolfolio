<script>
import ProjectList from '../components/ProjectList.vue'; //importo ProjectList

export default {
    name: 'HomePage',
    components: { ProjectList },
}
</script>

<template>
    <ProjectList type='most-recent' class="my-2" />
</template>

<style lang="scss" scoped></style>