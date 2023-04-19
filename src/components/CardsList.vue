<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";
export default {
  components: { AppCard },
  name: "CardsList",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container mt-3">
    <h2 class="text-center">Lista delle cards</h2>

    <div class="row row-cols-4">
      <div class="col" v-for="card in store.cards" :key="card.id">
        <AppCard :cardObj="card" />
      </div>
    </div>
  </div>
</template>
