<template>
  <div class="search">
    <div class="search__title my-8 leading-7">
      <span class="text-sm sm:text-base tracking-tighter uppercase">Find what to see next</span>
      <h1
        class="text-2xl sm:text-4xl font-bold tracking-wide uppercase header_highlight w-max-content mx-auto"
      >Search Movies</h1>
    </div>
    <form action="submit" @submit.prevent="searchMovie()" class="w-full">
      <div class="md:flex  justify-center md:items-center mb-6">
        <div class="hidden">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="searchMovie"
          >Search:</label>
        </div>
        <div class="">
          <input
            v-model="searchTerm"
            class="bg-gray-100 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900"
            id="searchMovie"
            type="text"
            placeholder="ex. Spiderman"
          />
        </div>
      </div>
    </form>
    <MovieList :movies="searchResults" />
  </div>
</template>

<script>
import MovieList from "@/components/Movies/MovieList";
export default {
  name: "Movies",
  data() {
    return {
      searchTerm: "",
      movies: []
    };
  },
  components: {
    MovieList
  },
  methods: {
    searchMovie() {
      this.$store.dispatch("searchMovie", this.searchTerm);
      console.log(this.searchTerm);
    }
  },
  computed: {
    searchResults() {
      return this.$store.getters.getSearchResults;
    }
  },
  metaInfo: {
    title: "Movies List"
  }
};
</script>