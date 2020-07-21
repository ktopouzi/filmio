<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
export default {
  name: "Home",
  components: {
    Hero
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

<style lang="scss" scoped>
.home__info__button {
  box-shadow: 0 0 3pt 2pt rgba($color: white, $alpha: 0.6);
}
.hero {
  background: url("../assets/hero.png") no-repeat center center;
  background-size: cover;
  height: 582px;
}
.hero__header {
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    width: 4em;
    height: 0.825em;
    margin: auto;
    border-bottom: 3px solid #fff;
  }
}
</style>