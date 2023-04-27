<script>
export default {
    name: 'AppLoader',
}
</script>

<template>
    <div class="layover">
        Caricamento in corso
    </div>
</template>

<style lang="scss" scoped>
.layover {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}
</style>