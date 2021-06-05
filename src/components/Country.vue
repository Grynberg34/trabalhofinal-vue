<template>
    <div>
      <h1>{{country.name}}</h1>
      <img :src="country.flag" alt="">
      <p>{{country.region}}</p>
      <p>{{country.subregion}}</p>   
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
    div {
        padding: 40px;
        border: 2px solid black;
        margin-top: 40px;
        margin-bottom: 40px;
    }

    img {
        width: 100px;
    }
</style>