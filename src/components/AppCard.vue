<script>
export default {
  name: "AppCard",
  props: {
    cardObj: Object,
  },
  computed: {
    imageUrl() {
      return this.cardObj.card_images[0].image_url_cropped;
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="imageUrl" class="card-img-top" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ cardObj.name }}</h5>
      <p class="card-text">{{ cardObj.archetype }}</p>
    </div>
  </div>
</template>
