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
.home{
  height: 90vh;
}
</style>