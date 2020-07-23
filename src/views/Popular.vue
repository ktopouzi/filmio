<template>
  <div class="popular">
    <div class="movies__title my-8 leading-7">
      <span class="text-sm sm:text-base tracking-tighter uppercase">What to watch next</span>
      <h1
        class="text-2xl sm:text-4xl font-bold tracking-wide uppercase header_highlight w-max-content mx-auto"
      >Popular movies</h1>
    </div>
    <MovieList :movies="popularMovies" />
  </div>
</template>

<script>
import MovieList from "@/components/Movies/MovieList";
export default {
  name: "Movies",
  components: {
    MovieList
  },
  computed: {
    popularMovies() {
      return this.$store.getters.getPopularMovies;
    }
  },
  metaInfo: {
    title: "Movies List"
  }
};
</script>