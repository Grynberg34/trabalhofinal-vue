<template>

    <div>
        <label>Search Countries:</label>
        <input v-model="search">
    </div>
    
</template>

<script>
    export default {
        data() {
        return {
            search: ""
        };
        },
    }
</script>