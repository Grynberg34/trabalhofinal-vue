<template>
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-6">
                <div>
                <CountryMini
                    v-for="country in filterCountries"
                    :key="country.name"
                    :country="country"
                />
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-4">
                <Search />
                <Random />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CountryMini from './CountryMini.vue'
    import Search from './Search.vue'
    import Random from './Random.vue'

    export default {
        components: {
            CountryMini,
            Search,
            Random
        },
        methods: {
            getCountries(){
                axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(function( response ){
                   const res = response.data;
                   this.$store.commit('addCountries', res)
                }.bind(this));
            },

        },
        computed: {
            filterCountries() {

                if (this.$store.getters['getInputValue'].length < 1) {
                return this.$store.getters['getCountries'];
                }

                var term = this.$store.getters['getInputValue'].toLowerCase()
                return this.$store.getters['getCountries'].filter((product) => {
                return product.name.toLowerCase().match(term);
                });
            }
        },
        beforeMount(){
            this.getCountries();
            this.$store.commit('setInputValue', '')
        }
    }
</script>

<style scoped>

</style>