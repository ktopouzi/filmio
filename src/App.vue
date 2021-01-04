<template>
  <div id="app">
    <Header :routes="myRoutes" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import links from "@/assets/data/menu.json";
export default {
  data() {
    return {
      myRoutes: links
    };
  },
  mounted() {
    this.$store.dispatch("getPopularMovies");
  },
  name: "App",
  components: {
    Header,
    Footer
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
  color: #383838;
}
.header_highlight {
  position: relative;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #c4ddff 50%);
  z-index: 1;
}

#app {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}
</style>
