<template>
  <div class="self-center justify-center shadow-lg">
    <router-link :to="`/movies/${link}`">
      <img class="w-full hover:opacity-75 " :src="`http://image.tmdb.org/t/p/w342/${image}`" :alt="`${title} poster`" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    link: {
      type: Number
    },
    title: {
      type: String
    }
  }
};
</script>

<style>
</style>