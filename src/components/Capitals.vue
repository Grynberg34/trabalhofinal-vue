<template>
    <div class="container">
        <div class="row pt-3">
            
            <CountryCapital
                v-for="country in sortedArray"
                :key="country.name"
                :country="country"
            />


        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CountryCapital from './CountryCapital.vue'
    import _ from 'lodash';

    export default {
        data() {
            return {
                countries: Array
            };
        },
        components: {
            CountryCapital
        },
        methods: {
            getCountries(){
                axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(function( response ){
                    this.countries = response.data
                    for (var i=0; i < 250; i ++) {
                        if (this.countries[i].capital == '') {
                            var value = this.countries.indexOf(this.countries[i])
                            this.countries.splice(value,  1)
                        } 
                    }
                }.bind(this));
            },

        },
        computed: {
            sortedArray() {
                return _.orderBy(this.countries, 'capital')
            }
        },
        beforeMount(){
            this.getCountries();
        }
    }
</script>

<style scoped>

</style>