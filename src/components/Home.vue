<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div>
                <Country
                    v-for="country in filterCountries"
                    :key="country.name"
                    :country="country"
                />
                </div>
            </div>
            <div class="col-6">
                <Search />
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Country from './Country.vue'
    import Search from './Search.vue'

    export default {
        components: {
            Country,
            Search
        },
        methods: {
            async getCountries(){
                axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(function( response ){
                   const res = response.data;
                   this.$store.commit('addCountries', res)
                }.bind(this));
            },

            getValue() {
                console.log(this.$store.getters['getInputValue'])
            }

        },
        computed: {
            filterCountries() {

                console.log(this.$store.getters['getInputValue'])

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
        }
    }
</script>

<style scoped>

</style>