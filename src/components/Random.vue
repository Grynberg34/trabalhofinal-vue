<template>
    <div>
        <router-link class="btn btn-success btn-block" :to="{ name: 'country', params: { id: id}}">CLICK TO RANDOM COUNTRY</router-link>
    </div>
</template>


<script>

  import axios from 'axios';

  export default {
    data() {
        return {
          id: String,
        };
    },
    methods: {
        getRandomCode(){
            axios
            .get(`https://restcountries.eu/rest/v2/all`)
            .then(function( response ){

                var numberCountries = parseInt(response.data.length)

                function getRandomNumber(max, min) {
                    return Math.floor(Math.random() * (max - min) + min);

                }

                var number = getRandomNumber(numberCountries, 0)

                this.id = response.data[number].alpha3Code;
                
            }.bind(this))
        },
    },
    beforeMount(){
      this.getRandomCode();
    }
  };
</script>

<style scoped>
    div {
        margin-top: 15px;
    }

    .link {
        text-align: center;
    }

</style>