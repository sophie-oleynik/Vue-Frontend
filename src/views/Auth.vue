<template>
  <v-flex d-flex xs4 offset-xs4 class="white" align-center justify-center>
    <v-form :value="valid">
      <v-layout justify-space-around wrap>
        <v-flex class="grey darken-3 title py-2 white--text text-xs-center">
          REGISTRATION
        </v-flex>
        <v-flex xs12>
          <v-tabs grow dark slider-color="yellow">
            <v-tab>User</v-tab>
            <v-tab>Teacher</v-tab>
            <v-tab-item class="px-2">
              <v-flex xs12 d-flex>
                <v-text-field placeholder="Iм`я" class="mx-2"></v-text-field>
                <v-text-field label="Прiзвище" class="mx-2"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Email"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Password"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-select :items="groups" placeholder="Група"></v-select>
              </v-flex>
            </v-tab-item>
            <v-tab-item class="px-2">
              <v-flex xs12 d-flex>
                <v-text-field placeholder="Iм`я" class="mx-2"></v-text-field>
                <v-text-field label="Прiзвище" class="mx-2"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Email"></v-text-field>
              </v-flex>
              <v-flex xs10 d-flex class="mx-5">
                <v-text-field label="Password"></v-text-field>
              </v-flex>
            </v-tab-item>
          </v-tabs>
        </v-flex>
        <v-flex xs12 d-flex class="mx-5">
          <v-btn class="primary">Зареэструватися</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      groups: ["IS-71", "IS-72", "IS-73"]
    };
  }
};
</script>

<style>
</style>
