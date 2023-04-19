<script>
import CardsList from "./components/CardsList.vue";
import AppFilters from "./components/AppFilters.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    CardsList,
    AppFilters,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.store.loading = true;
    this.store.error = "";
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
        params: {
          num: 10,
          offset: 0,
        },
      })
      .then((resp) => {
        this.store.cards = resp.data.data;
      })
      .catch((error) => {
        this.store.error = "Oops, qualcosa è andato storto...";
      })
      .finally(() => {
        this.store.loading = false;
      });
  },
};
</script>

<template>
  <h1 class="text-center">{{ store.appName }}</h1>
  <AppFilters />
  <h3 v-if="store.error" class="text-danger">{{ store.error }}</h3>
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
