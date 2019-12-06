<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text class="item" v-on="on">SIGN UP</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Sign Up</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Last name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">Close</v-btn>
        <v-btn
          text
          to="/home"
          v-on:click.native="reset()"
          >Sign Up</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { store } from "../store";
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    reset() {
      this.dialog = false;
      store.commit("reset");
      console.log("Set level to: " + store.state.level);
    }
  }
};
</script>
