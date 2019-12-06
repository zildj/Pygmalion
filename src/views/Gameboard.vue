<template>
  <v-container>
    <h1>
      Gameboard
    </h1>
    <br />
    <template v-for="n in 10">
      <v-row no-gutters :key="n">
        <template v-for="m in 10">
          <v-col :key="m">
            <v-card
              v-if="
                (n % 2 == 0 || m % 2 == 0) &&
                  !(n % 2 == 0 && m % 2 == 0) &&
                  (10 - n) * 10 + m &&
                  (10 - n) * 10 + m == block
              "
              class="pa-2 enableOutline"
              outlined
              hover
              tile
              dark
              color="#1B682F"
              height="100"
              :to="/lesson/ + ((10 - n) * 10 + m)"
            >
              <h1>{{ (10 - n) * 10 + m }}</h1>
            </v-card>
            <v-card
              v-else-if="
                (n % 2 == 0 || m % 2 == 0) &&
                  !(n % 2 == 0 && m % 2 == 0) &&
                  (10 - n) * 10 + m &&
                  (10 - n) * 10 + m > block
              "
              class="pa-2 enableBlur"
              disabled
              outlined
              hover
              tile
              dark
              color="#1B682F"
              height="100"
              :to="/lesson/ + ((10 - n) * 10 + m)"
            >
              <h1>{{ (10 - n) * 10 + m }}</h1>
            </v-card>
            <v-card
              v-else-if="
                (n % 2 == 0 || m % 2 == 0) &&
                  !(n % 2 == 0 && m % 2 == 0) &&
                  (10 - n) * 10 + m
              "
              class="pa-2 "
              outlined
              hover
              tile
              dark
              color="#1B682F"
              height="100"
              :to="/lesson/ + ((10 - n) * 10 + m)"
            >
              <h1>{{ (10 - n) * 10 + m }}</h1>
              ✔️
            </v-card>
            <v-card
              v-else-if="(10 - n) * 10 + m == block"
              class="pa-2 enableOutline"
              hover
              outlined
              tile
              color="#fffdd0"
              height="100"
              :to="/lesson/ + ((10 - n) * 10 + m)"
            >
              <h1>{{ (10 - n) * 10 + m }}</h1>
            </v-card>
            <v-card
              v-else-if="(10 - n) * 10 + m > block"
              class="pa-2 enableBlur"
              disabled
              hover
              outlined
              tile
              color="#fffdd0"
              height="100"
              :to="/lesson/ + ((10 - n) * 10 + m)"
            >
              <h1>{{ (10 - n) * 10 + m }}</h1>
            </v-card>
            <v-card
              v-else
              class="pa-2"
              hover
              outlined
              tile
              color="#fffdd0"
              height="100"
              :to="/lesson/ + ((10 - n) * 10 + m)"
            >
              <h1>{{ (10 - n) * 10 + m }}</h1>
              ✔️
            </v-card>
          </v-col>
        </template>
      </v-row>
    </template>
  </v-container>
</template>

<style scoped>
a:hover {
  color: red;
}
.enableBlur > * {
  filter: blur(1.2px);
}
.enableOutline {
  outline: 5px solid red;
}
</style>

<script>
import { store } from "../store";
export default {
  computed: {
    block() {
      console.log("Current Level: " + store.state.level);
      return store.state.level;
    }
  }
};
</script>
