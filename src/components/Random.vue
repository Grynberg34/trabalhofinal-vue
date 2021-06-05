<template>
    <div>
        <router-link class="link" :to="{ name: 'country', params: { id: id}}">RANDOM COUNTRY</router-link>
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
        padding: 60px;
        margin-top: 40px;
        border: 2px solid black;
    }

    .link {
        text-align: center;
    }

</style>