<script>
export default {
    name: 'AppHeader',

    props: {
        title: String,
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ title }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link :to="{ name: 'home' }" class="nav-link">
                        Homepage
                    </router-link><router-link :to="{ name: 'contacts' }" class="nav-link">
                        Contatti
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>