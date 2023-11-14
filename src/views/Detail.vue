<template>

  <div >
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">imdbID</th>
        <th scope="col">type</th>
        <th scope="col">poster</th>
        <th scope="col">director</th>
        <th scope="col">actors</th>
        <th scope="col">writer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="val">
        <td>{{val.Title}}</td>
        <td>{{val.Year}}</td>
        <td>{{val.imdbID}}</td>
        <td>{{val.Type}}</td>
        <td>
          <img :src="val.Poster" alt="" width="100">
        </td>
        <td>{{val.Director}}</td>
        <td>{{val.Actors}}</td>
        <td>{{val.Writer}}</td>

      </tr>

    </tbody>
    </table>

  </div>
</template>
<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
  const val:Ref<any> = ref([])
  const route = useRoute()
  onMounted(async ()=>{
    if(route.params.id){
      try{
        const search = await fetch(`http://www.omdbapi.com/?i=${route.params.id}&apikey=d66442e5`)
        val.value = await search.json()
        console.log(888888, val.value )
      }catch(e){
        val.value = false
      }
    }
  })

</script>