<template>
  <div class="movies container mx-auto">
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 sm:p-0">
      <div v-for="(movie,idx) in movies" :key="idx">
        <SingleMovie :title="movie.title" :image="movie.poster_path ===null ? null : movie.poster_path " :link="movie.id" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleMovie from "@/components/Movies/SingleMovie";
export default {
  components: {
    SingleMovie
  },
  props: {
    movies: {
      type: Array
    }
  }
};
</script>

<style>
</style>