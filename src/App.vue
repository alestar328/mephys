<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
  <menu-nav></menu-nav>
  <router-view></router-view>
  <footer-bajo></footer-bajo>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import MenuNav from "@/components/menuNav.vue";
import IndexMain from "@/components/indexMain.vue";
import FooterBajo from "@/components/footerBajo.vue";
import MenCloth from "@/views/menCloth.vue";

@Options({
  components: {
    FooterBajo,
    IndexMain,
    MenuNav,
    MenCloth,
    HelloWorld

  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ece2c6;

}

</style>
