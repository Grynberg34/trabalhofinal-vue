<template>
        <div class="container navbar">
            <div class="row">
                <div class="col-4"><h1>COUNTRIES</h1></div>
                <div class="col-2"></div>
                <div class="col-2"><router-link to="/">Home</router-link></div>
                <div class="col-2"><router-link to="/region">Browse by region</router-link></div>
                <div class="col-2"><router-link to="/subregion">Browse by subregion</router-link></div>
            </div>
        </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .navbar {
        margin-top: 40px;
        margin-bottom: 40px;
        padding-bottom: 40px;
        border-bottom: 2px solid black;
    }

    .row {
        width: 100%;
    }

</style>