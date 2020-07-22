<template>
  <div class="movies container mx-auto">
    <div class="movies__title my-8 leading-7">
      <span class="text-sm sm:text-base tracking-tighter uppercase">What to watch next</span>
      <h1 class="text-2xl sm:text-4xl font-bold tracking-wide uppercase header_highlight w-max-content mx-auto">Popular movies</h1>
    </div>
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 sm:p-0">
      <div v-for="(movie,idx) in movies" :key="idx">
        <SingleMovie :title="movie.title" :image="movie.poster_path" :link="movie.id" />
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