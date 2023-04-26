<script>
import ProjectList from '../components/ProjectList.vue'; //importo ProjectList
export default {



    components: { ProjectList },


}
</script>

<template>
    <ProjectList :title="title" @changePage="fetchProject" class="my-2" />
</template>

<style lang="scss" scoped></style>