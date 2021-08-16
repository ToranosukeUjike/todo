<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Hello World
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
          <v-btn
            color="primary"
            nuxt
            to="/loginForm"
          >
            pokemon
          </v-btn>
          <v-btn
            color="primary"
            nuxt
            to="/todoList"
          >
            TodoList
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
