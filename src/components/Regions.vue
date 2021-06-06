<template>
    <div class="container">
        <div class="row">

            <div class="col-6 region" v-for="region in regions"
                :key="region.name">
                <h1 >
                    {{region.name}}
                </h1>
                <CountryFlag
                    v-for="country in region.nestedArr"
                    :key="country.name"
                    :country="country"
                />
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import CountryFlag from './CountryFlag.vue'

    export default {
        data() {
            return {
                regions : [
                    {
                        name: 'Africa',
                        nestedArr: []
                    },
                    {
                        name: 'Americas',
                        nestedArr: []
                    },
                    {
                        name: 'Asia',
                        nestedArr: []
                    },
                    {
                        name: 'Europe',
                        nestedArr: []
                    },
                    {
                        name: 'Oceania',
                        nestedArr: []
                    },
                ]
            };
        },
        components: {
            CountryFlag
        },
        methods: {
            getCountriesByRegion(){
                for (var i=0; i < this.regions.length; i++) {
                    axios
                    .get(`https://restcountries.eu/rest/v2/region/${this.regions[i].name}`)
                    .then(function( response ){
                        var region = response.data[0].region
                        for (var i=0; i < this.regions.length; i++) {
                            if (this.regions[i].name == region) {
                                this.regions[i].nestedArr = response.data
                            }
                        }
                    }.bind(this));
                }
            },

        },
        beforeMount(){
            this.getCountriesByRegion();
        }
    }
</script>

<style scoped>
    .region {
        margin-bottom: 40px;
    }
</style>