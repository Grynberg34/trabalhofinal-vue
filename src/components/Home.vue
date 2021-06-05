<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div>
                <Country
                    v-for="country in countries"
                    :key="country.name"
                    :country="country"
                />
                </div>
            </div>
            <div class="col-6"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Country from './Country.vue'

    export default {

        data() {
            return {
                countries: []
            }
        },
        components: {
            Country
        },
        methods: {
            getCountries(){
                axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(function( response ){
                   this.countries = response.data;
                   console.log(this.countries[1].name)
                }.bind(this));
            }
        },
        beforeMount(){
            this.getCountries();
        }
    }
</script>

<style scoped>

</style>