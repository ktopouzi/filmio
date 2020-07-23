<template>
  <div class="movie-details flex flex-wrap py-2 container mx-auto">
    <div class="movie-details__section-1 w-full sm:w-1/2 mb-4 flex justify-center">
      <img
      class="movie-details__poster rounded-md shadow-2xl"
      :src="movie.poster_path == null ? require('@/assets/image-not-found.png') :`http://image.tmdb.org/t/p/w342/${movie.poster_path}`"
      :alt="`${movie.title} poster`"
      />
    </div>
    <div
      class="movie-details__section-2 w-full sm:w-1/2 mb-4 flex flex-col justify-start items-start px-4"
    >
      <span
        class="text-gray-500"
      >{{ new Intl.DateTimeFormat('en-US', {dateStyle: 'medium'}).format(new Date(movie.release_date)) }}</span>
      <h1 class="movie-details__title text-2xl font-bold text-left">{{movie.title}}</h1>
      <p class="text-justify tracking-tighter py-4">{{movie.overview}}</p>
      <span class="font-bold">
        Rating: {{movie.vote_average}}/10
        <span
          class="movie-details__section-2__vote-counts inline font-normal"
        >({{movie.vote_count}})</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object
    }
  }
};
</script>

<style>
</style>