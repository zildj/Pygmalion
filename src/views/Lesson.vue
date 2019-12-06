<template>
  <v-container>
    <H1>Lesson {{ this.$route.params.id }}</H1>
    <component :is="comp"></component>
    <v-btn v-on:click.native="increment()">
      Next Lesson
    </v-btn>
  </v-container>
</template>

<script>
import { store } from "../store";
import router from "../router"
export default {
  methods: {
    importCompiler() {
      const plugin = document.createElement("script");
      plugin.setAttribute("src", "//cdn.datacamp.com/dcl-react.js.gz");
      plugin.async = true;
      document.head.appendChild(plugin);
    },
    increment() {
      store.commit("set", (parseInt(this.$route.params.id) + 1));
      console.log("Set level to: " + store.state.level);
      router.push('/gameboard')
    },
  },
  mounted() {
    this.importCompiler();
  },
  computed: {
    comp() {
      return () => import(`../lessons/${this.$route.params.id}.vue`);
    }
  }
};
</script>

<style>
[data-datacamp-exercise] {
  visibility: hidden;
}
</style>
