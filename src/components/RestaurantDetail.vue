<template>
  <div class="restaurant-card padding">
    <v-card
        :loading="false"
        class="my-4"
        max-width="374"
    >
      <v-img
          height="250"
          :src="restaurant.image_url"
      />

      <v-card-title>{{ restaurant.name }}</v-card-title>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <StarRating
              :rating="restaurant.rating"
              :show-rating="false"
              :read-only="true"
              :round-start-rating="false"
              :star-size="20"
          />

          <div class="grey--text ml-4">
            {{ restaurant.rating }} ({{ restaurant.review_count }})
          </div>
        </v-row>

        <div class="my-4 subtitle-1">
          {{ restaurant.categories[0].title }}
        </div>

      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
            active-class="deep-purple accent-4 white--text"
            column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
            color="deep-purple lighten-2"
            text
        >
          Reserve
        </v-btn>
        <v-btn @click="gotoDetail"
               color="deep-purple lighten-2"
               text
        >
          Voir Détail
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import StarRating from 'vue-star-rating';
export default {
  name: 'RestaurantDetail',
  components: { StarRating },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
    categories:{
      type: Object,
      required:false,
    }
  },
  methods: {
    gotoDetail() {
      this.$router.push({name: 'Restaurant', params:{ restaurant: this.restaurant.alias}})
    }
  }
};
</script>

<style lang="scss" scoped>
.padding {
  padding: 105px;
}
</style>