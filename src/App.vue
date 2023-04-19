<script>
import CardsList from "./components/CardsList.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    CardsList,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
        params: {
          num: 10,
          offset: 0,
        },
      })
      .then((resp) => {
        this.store.cards = resp.data.data;
      });
  },
};
</script>

<template>
  <h1 class="text-center">{{ store.appName }}</h1>
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
