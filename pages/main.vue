<template>
  <v-app id="inspire">
    <v-bottom-navigation v-model="value">
      <v-btn value="main">
        <span>Main</span>
      </v-btn>
  
      <v-btn value="deck">
        <span>Deck</span>
      </v-btn>
  
      <v-btn value="battle">
        <span>Battle</span>
      </v-btn>
    </v-bottom-navigation>
    <v-btn
        color="primary"
        nuxt
        to="/"
    >
        ホームへ戻る
    </v-btn>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ value: 'main' }),
  }
</script>