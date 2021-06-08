<template>
  <router-link :to="{ name: 'country', params: { id: country.alpha3Code } }">
    <div class="card shadow-sm p-2 mb-1 bg-white rounded" style="width: 18rem">
      <img class="card-img-top" :src="country.flag" />
      <div class="card-body">
        <h5 class="card-title">{{ country.name }}</h5>
        <p class="card-text">
          {{ country.region }} / {{ country.subregion }}
        </p>
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

</style>