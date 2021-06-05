<template>

    <div>
        <label>Search Countries:</label>
        <input v-model="value" @input="getValue(value)">
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