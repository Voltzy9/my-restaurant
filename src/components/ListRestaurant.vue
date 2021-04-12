<template>
  <div class="restaurant-list">
    <grid-layout
        v-if="$store.state.restaurants"
        :options="{
        isConstantSize: false,
        transitionDuration: 0.1,
      }"
        :layoutOptions="{
        margin: 10,
        align: 'center'
      }"
    >
      <RestaurantDetail
          v-for="restaurant in $store.state.restaurants"
          :key="restaurant.id"
          :restaurant="restaurant"
          class="item"
      />
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout } from '@egjs/vue-infinitegrid';
import RestaurantDetail from "@/components/RestaurantDetail";

export default {
  name: 'ListRestaurant',
  components: {
    RestaurantDetail,
    GridLayout,
  },
  data() {
    return {
      restaurants: null,
    };
  },

};

</script>

<style scoped>
</style>