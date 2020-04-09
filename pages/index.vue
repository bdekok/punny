<template>
  <div class="joke">

    <div class="joke__display">
        <h1>{{ isSingleJoke ? joke.joke : joke.setup }}</h1>
        <h2 v-if="!isSingleJoke">{{ joke.delivery }}</h2>
    </div>

    <form method="get" class="joke__form" v-on:submit.prevent>
      <button class="joke__button" @click="getNewJoke">This was not very punny</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DisplayJoke from '@/components/displayjoke/DisplayJoke.vue'
import { SingleJoke, TwoPartJoke } from '@/types/joke'
import { jokeEndpoint } from '@/models/endpoints'

export default Vue.extend({
  async asyncData({ $axios }) {
    const joke = await $axios.$get<SingleJoke | TwoPartJoke>(jokeEndpoint())
    return { joke }
  },
  methods: {
    async getNewJoke(): Promise<void> {
      this.joke = await this.$axios.$get<SingleJoke | TwoPartJoke>(jokeEndpoint())
    },
  },
  data() {
    return {
      joke: {} as SingleJoke | TwoPartJoke
    }
  },
  computed:{
    isSingleJoke(): boolean {
      return this.joke.type === 'single'
    },
  }
})
</script>

<style>
.joke {
  min-height: 100vh;
}

.joke,
.joke > * {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  flex: 1 1 auto;
}
.joke > *:last-child {
  flex: 0 0 80px;
  justify-self: flex-end;
}

.joke__display {
  max-width: 75vw;
}
.joke__display h1,
.joke__display h2 {
  white-space: pre-wrap;
}
.joke__button {
  margin: 0 auto;
  border-radius: 30px;
  max-width: 500px;
  width: 100%;
  background: #83e217;
  padding: 10px 30px 13px;
  font-weight: bold;
  height: auto;
  transition: all .15s;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 0 0 10px rgba(0,0,0,.05), inset 0 -6px 0 0 #41af4b;
  border: none;
  font-size: 1.125rem;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.joke__button:hover {
  background-color: #7bd416;
  transform: translateY(0.1rem);
  box-shadow: 0 0 0 0.5rem rgba(0,0,0,.1), inset 0 -2px 0 0 #41af4b;
}
</style>
