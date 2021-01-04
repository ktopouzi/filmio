<template>
  <div class="hero flex items-center h-full">
    <div class="w-full hero__info text-center items-center">
      <h1 class="hero__header text-4xl md:text-6xl text-white tracking-wider font-semibold">MEET FILMIO</h1>
      <p class="text-xl md:text-3xl text-gray-500 my-8 tracking-tighter">
        A new way to enjoy
        <br />your favorite films
      </p>
      <button
      @click="$router.push('/popular')"
        class="home__info__button bg-white hover:bg-gray-300 text-cblue text-lg font-bold py-3 px-6 rounded-lg focus:outline-none"
      >Watch now</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home__info__button {
  box-shadow: 0 0 0pt 4pt rgba($color: white, $alpha: 0.6);
}
.hero {
  background: url("../../assets/hero.png") no-repeat center center;
  background-size: cover;
}
.hero__header {
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    width: 4em;
    height: 0.625em;
    margin: auto;
    border-bottom: 4px solid #fff;
  }
}
</style>