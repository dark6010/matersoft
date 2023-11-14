<template>
<table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">imdbID</th>
        <th scope="col">type</th>
        <th scope="col">poster</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="val in movie.movies ">
        <td>{{val.Title}}</td>
        <td>{{val.Year}}</td>
        <td>{{val.imdbID}}</td>
        <td>{{val.Type}}</td>
        <td>
          <img :src="val.Poster" alt="" width="100">
          </td>
      </tr>

    </tbody>
  </table>
</template>
<script setup lang="ts">
import { useMovieStore } from '../../stores/movies'
const movie = useMovieStore()
</script>