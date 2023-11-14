// stores/counter.js
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: ():interfaceData => {
    return { movies : []  }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    add(val:any) {
      this.movies.push(val)
    },
  },
})
interface interfaceData{
  movies: Array<any>
}