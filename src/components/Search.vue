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

<style scoped>
    div {
        padding: 60px;
        border: 2px solid black;
        margin-top: 40px
    }

    label {
        display: block;
        text-align: center;
        font-size: 20px;
    }

    input {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

</style>