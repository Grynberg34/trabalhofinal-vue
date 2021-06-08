<template>

    <div class="p-3">
        <input class="form-control" placeholder="Tip to Search countries" v-model="value" @input="getValue(value)">
    </div>
    
</template>

<script>


    export default {
        data() {
            return {
                value: ""
            };
        },
        methods: {
            getValue (value) {
                this.$store.commit('setInputValue', value)
            }
        },
    }
</script>

<style scoped>
    
</style>