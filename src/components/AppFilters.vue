<script>
import { store } from "../store";
export default {
  name: "AppFilters",
  emits: ["search"],
  data() {
    return {
      store,
      archetypes: ["Archfiend", "Ally of Justice", "Ancient Gear"],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-6">
        <select
          class="form-select"
          v-model="store.selectedArchetype"
          @change="$emit('search')"
        >
          <option value="">All</option>
          <option
            :value="archetype"
            v-for="(archetype, index) in archetypes"
            :key="index"
          >
            {{ archetype }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
