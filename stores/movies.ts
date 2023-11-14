// stores/counter.js
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: () => {
    return { movies: [] }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    add(val:any) {
      console.log(88)
      this.movies.push[val]
    },
  },
})