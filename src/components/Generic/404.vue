<template>
  <div class="page-not-found py-6">
    <h1 class="page-not-found__header text-2xl uppercase font-bold py-4">Page not found</h1>
    <button
      @click="$router.push('/')"
        class="bg-cblue text-white text-lg font-bold py-3 px-6 rounded-lg focus:outline-none"
      >Return Home</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-not-found {
  height: 90vh;
}
</style>