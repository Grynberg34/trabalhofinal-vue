<template>


  <div>

    <div v-if="errorStatus">
      <p class="error">País não encontrado</p>
    </div>

    <div v-else>
      <div class="loading" v-if="loading">Loading...</div>
      <div v-else class="row">
        <div class="col-2"></div>
        <div class="col-4">
          <h1>{{country.name}}</h1>
          <img :src="country.flag" alt="">
        </div>
        <div class="col-4">
          <p>Region: {{country.region}}</p>
          <p>Subregion: {{country.subregion}}</p>  
          <p>Capital: {{country.capital}}</p>
          <p>Population: {{country.population}}</p>
          <p>Area: {{country.area}}</p>
          <p>Timezones: {{country.timezones}}</p>
          <p>Borders: {{country.borders}}</p>
          <p>Languages: {{country.languages}}</p>
          <p>Currencies: {{country.currencies}}</p>
        </div>      
      </div>
    </div>
  </div>

</template>

<script>

  import axios from 'axios';

  export default {
    data() {
        return {
          country: [],
          loading: true,
          errorStatus: false
        };
    },
    methods: {
      getCountryByCode(){
          axios
          .get(`https://restcountries.eu/rest/v2/alpha/${this.$route.params.id}`)
          .then(function( response ){
            this.country = response.data
          }.bind(this))
          .catch(error => {
            console.log(error)
            this.errorStatus = true
          })
          .finally(() => this.loading = false)
      },
    },
    beforeMount(){
      this.getCountryByCode();
    }
  };
</script>

<style scoped>
  .col-6 {
    padding: 20px;
  }
  img {
    width: 200px;
  }
  .error, .loading {
    text-align: center;
  }
</style>