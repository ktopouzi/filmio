<template>
  <div id="app">
    <Header :routes="myRoutes" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import links from "@/assets/data/menu.json";
export default {
  data() {
    return {
      myRoutes: links
    };
  },
  name: "App",
  components: {
    Header
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "A new way to enjoy movies",
    // all titles will be injected into this template
    titleTemplate: "%s | Filmio"
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
@import "@/assets/css/_colors";
body {
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}
</style>
