<template>
  <div class="about">
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