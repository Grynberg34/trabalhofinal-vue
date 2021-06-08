<template>
  <div class="container pt-3">
    <div v-if="errorStatus">
      <p class="error">País não encontrado</p>
    </div>

    <div v-else>
      <div class="loading" v-if="loading">Loading...</div>
      <div v-else class="row">
        <div class="col-12">
          <div class="content">
            <div class="card">
              <div class="firstinfo">
                <img :src="country.flag" alt="" />
                <div class="profileinfo">
                  <h1>{{ country.name }}</h1>
                  <h3 v-if="country.capital">Capital: {{ country.capital }}</h3>
                  <p class="bio">
                    <strong>Region:</strong> {{ country.region }}<br />
                    <span v-if="country.subregion"
                      ><strong>Subregion:</strong> {{ country.subregion }}</span
                    ><br />
                    <span><strong>Population:</strong> {{ country.population }}</span><br />
                    <span><strong>Area:</strong> {{ country.area }}</span><br />
                    <span><strong>Timezones:</strong> {{ country.timezones }}</span><br />
                    <span v-if="country.borders[0]"
                      ><strong>Borders:</strong> {{ country.borders }}</span
                    >
                    <span><br />
                      <strong>Languages:</strong> {{ country.languages[0].name }}
                      <span v-if="country.languages[1]"
                        >| {{ country.languages[1].name }}</span
                      >
                    </span><br />
                    <span><strong>Currency:</strong> {{ country.currencies[0].name }}</span><br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      country: [],
      loading: true,
      errorStatus: false,
    };
  },
  methods: {
    getCountryByCode() {
      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${this.$route.params.id}`)
        .then(
          function (response) {
            this.country = response.data;
          }.bind(this)
        )
        .catch((error) => {
          console.log(error);
          this.errorStatus = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  beforeMount() {
    this.getCountryByCode();
  },
};
</script>

<style scoped>
.error,
.loading {
  text-align: center;
}

@import "https://fonts.googleapis.com/css?family=Open+Sans:300,400";
body,
.badgescard,
.firstinfo {
  display: flex;
  align-items: center;
}

html {
  height: 100%;
}

body {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  min-height: 100%;
  background: #00bcd4;
  font-size: 16px;
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.content {
  position: relative;
  animation: animatop 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;
}

.card {
  width: 100%;
  min-height: 100px;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.card:after {
  content: "";
  display: block;
  width: 190px;
  height: 400px;
  background: #343a40;
  position: absolute;
  animation: rotatemagic 0.75s cubic-bezier(0.425, 1.04, 0.47, 1.105) 1s both;
}

.badgescard {
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #00bcd4;
  color: #fff;
  width: 480px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: -1;
  left: 10px;
  bottom: 10px;
  animation: animainfos 0.5s cubic-bezier(0.425, 1.04, 0.47, 1.105) 0.75s
    forwards;
}

.badgescard span {
  font-size: 1.6em;
  margin: 0px 6px;
  opacity: 0.6;
}

.firstinfo {
  flex-direction: row;
  z-index: 2;
  position: relative;
}

.firstinfo img {
  border-radius: 50%;
  width: 160px;
  height: 160px;
}

.firstinfo .profileinfo {
  padding: 0px 50px;
}

.firstinfo .profileinfo h1 {
  font-size: 1.8em;
}

.firstinfo .profileinfo h3 {
  font-size: 1.2em;
  color: #00bcd4;
  font-style: italic;
}

.firstinfo .profileinfo p.bio {
  padding: 10px 0px;
  color: #5a5a5a;
  line-height: 1.2;
  font-style: initial;
}

@keyframes animatop {
  0% {
    opacity: 0;
    bottom: -500px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}

@keyframes animainfos {
  0% {
    bottom: 10px;
  }
  100% {
    bottom: -42px;
  }
}

@keyframes rotatemagic {
  0% {
    opacity: 0;
    transform: rotate(0deg);
    top: -24px;
    left: -253px;
  }
  100% {
    transform: rotate(-30deg);
    top: -24px;
    left: -78px;
  }
}
</style>