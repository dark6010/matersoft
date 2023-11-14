<template>
  <nav class="navbar navbar-light bg-light">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="busqueda">
      <input class="btn btn-outline-success align-self-end" type="button" @click="search" value="buscar">
  </nav>
  <div v-if="show">
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">imdbID</th>
        <th scope="col">type</th>
        <th scope="col">poster</th>
        <th scope="col">favorito</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="arrResultado" v-for="val in arrResultado ">
        <td>{{val.Title}}</td>
        <td>{{val.Year}}</td>
        <td><router-link :to="'/detail/'+val.imdbID">{{val.imdbID}}</router-link></td>
        <td>{{val.Type}}</td>
        <td>
          <img :src="val.Poster" alt="" width="100">
        </td>
        <td>
          <input type="button" value="agregar a favorito" @click="AddFavorite(val)">
        </td>
      </tr>

    </tbody>
    </table>
    <nav aria-label="...">
      <ul class="pagination">
        <li v-for="n in paginas" class="page-item" >
          <a class="page-link" href="#" :class="{active:n==actual}" @click="searchS(n)">{{ n }} </a>
        </li>
      </ul>

    </nav>
  </div>
</template>
<script setup lang="ts">
import { Ref, ref, toRaw  } from 'vue'
import { useMovieStore } from '../../stores/movies'
  const movie = useMovieStore()
  const busqueda = ref('')
  const show = ref(false)
  const paginas = ref(0)
  const actual = ref(0)
  const arrResultado:Ref<any> = ref([])
  const search = async ()=>{
    if(!busqueda.value){
      return
    }
    try{
      const search = await fetch(`http://www.omdbapi.com/?s=${busqueda.value}&apikey=d66442e5`)
      const response = await search.json()
      if(response.Response){
        paginas.value = Math.trunc(parseInt(response.totalResults) / 10)+1
        arrResultado.value = response.Search
        actual.value = 1
        show.value = true
      }else{
        arrResultado.value=[]
        show.value = false
      }
    }catch(e){
      show.value = false
    }
  }
  const searchS = async (n:number)=>{
    if(!busqueda.value){
      return
    }
    try{
      const search = await fetch(`http://www.omdbapi.com/?s=${busqueda.value}&page=${n}&apikey=d66442e5`)
      const response = await search.json()
      if(response.Response){
        paginas.value = Math.trunc(parseInt(response.totalResults) / 10)+1
        arrResultado.value = response.Search
        actual.value = n
        show.value = true
      }else{
        show.value = false
      }
    }catch(e){
      show.value = false
    }
  }
  const AddFavorite = async (data:any)=>{
    movie.add(toRaw(data))
  }
</script>