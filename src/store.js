import { reactive } from "vue";

export const store = reactive({
  appName: "Yu-Gi-Oh Api",
  cards: [],
  loading: false,
  error: "",
  selectedArchetype: "",
});
