<template>

    <div class="pt-3">
        <label><strong>Search Countries:</strong></label>
        <input class="form-control" v-model="value" @input="getValue(value)">
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