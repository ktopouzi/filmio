<template>
  <div class="self-center justify-center shadow-lg rounded-md pb-2">
    <router-link :to="`/movies/${link}`">
      <img
        class="w-full hover:opacity-75"
        :src="image == null ? require('@/assets/image-not-found.png') :`http://image.tmdb.org/t/p/w342/${image}`"
        :alt="`${title} poster`"
      />
    </router-link>
    <p class="p-2 uppercase text-xl font-bold">{{title}}</p>

    <router-link
      class="flex items-center justify-center underline text-cblue"
      :to="{ name:'Movie Details', params: { id: link} }"
    >
      Find out more
      <svg
        class="w-8 ml-2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    //serves as an id too
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