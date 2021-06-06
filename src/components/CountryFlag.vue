<template>

  <router-link :to="{ name: 'country', params: { id: country.alpha3Code}}">
    <img :src="country.flag" alt="">
  </router-link>

</template>

<script>
  export default {
    props: {
      country: Object,
    },
  };
</script>

<style scoped>
  img {
    width: 50px;
    margin: 10px
  }
</style>