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
    this.handleSearch();
  },
  methods: {
    handleSearch() {
      this.store.loading = true;
      this.store.error = "";
      const params = {
        num: 20,
        offset: 0,
      };

      if (this.store.selectedArchetype !== "") {
        params.archetype = this.store.selectedArchetype;
      }

      console.log(params);

      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params })
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
  },
};
</script>

<template>
  <h1 class="text-center">{{ store.appName }}</h1>
  <AppFilters @search="handleSearch" />
  <h3 v-if="store.error" class="text-danger">{{ store.error }}</h3>
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
