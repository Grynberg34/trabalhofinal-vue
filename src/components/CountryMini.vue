<template>
  <router-link :to="{ name: 'country', params: { id: country.alpha3Code } }">
    <div
      class="col-2 card shadow-sm p-2 mb-1 bg-white rounded"
      style="width: 15rem"
    >
      <img class="card-img-top" :src="country.flag" />
      <div class="card-body">
        <h5 class="card-title">{{ country.name }}</h5>
        <p class="card-text">{{ country.region }} / {{ country.subregion }}</p>
      </div>
    </div>
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
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.25rem;
}
a {
  color: #000000;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #6c6c6c;
  text-decoration: none;
}
</style>