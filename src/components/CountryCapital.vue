<template>
  <div class="col-2">
    <router-link :to="{ name: 'country', params: { id: country.alpha3Code}}">
        <p>{{country.capital}}</p>  
    </router-link>
  </div>

</template>

<script>
  export default {
    props: {
      country: Object,
    },
  };
</script>

<style scoped>

</style>