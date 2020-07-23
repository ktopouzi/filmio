<template>
  <div class="bg-gray-100 py-4">
    <div class="movie-details__go-back p-4 uppercase under">
      <div class="flex justify-start items-center cursor-pointer" @click="$router.go(-1)">
        <svg class="w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        Go back
      </div>
    </div>
    <MovieDetail v-if="this.movie" :movie="this.movie" />
    <MovieDetail v-else-if="!this.unknownMovie.status_code" :movie="this.unknownMovie" />

    <div v-else>
        <h1 class="font-bold text-3xl py-4">Whooops, the requested movie was not found!</h1>
              <button
      @click="$router.push('/')"
        class="bg-cblue text-white text-lg font-bold py-3 px-6 rounded-lg focus:outline-none"
      >Return Home</button>
    </div>
  </div>
</template>

<script>
import MovieDetail from "@/components/Movies/MovieDetail";
export default {
  data() {
    return {};
  },
  components: {
    MovieDetail
  },
  computed: {
    movie() {
      return this.$store.getters.getMovie(Number(this.$route.params.id));
    },
    unknownMovie() {
      return this.$store.getters.getCurrentMovie;
    }
  },
  mounted() {
      //fallback so we can display every movie with a given id
      // ex. 012, 557, 101
    !this.movie
      ? this.$store.dispatch("getMovieWithID", Number(this.$route.params.id))
      : "";
  }
};
</script>

<style lang="scss" scoped>
.movie-details__title {
  &:after {
    content: "";
    display: block;
    width: 4em;
    height: 0.225em;
    margin: 0;
    border-bottom: 4px solid #2a4365;
  }
}
</style>