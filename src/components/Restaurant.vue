<template>
  <div>
    <v-container v-if="currentRestaurant">
      <v-btn
          @click="$router.push({ name: 'Home' })"
          class="back-button"
      >
        ⬅️ Retour
      </v-btn>
      <v-carousel class="align">
        <v-carousel-item
            v-for="(photo, i) in currentRestaurant.photos"
            :key="i"
            :src="photo"
        />
      </v-carousel>
      <v-row class="restaurant-details">
        <v-col
            lg="3"
            md="4"
        >
          <h1>{{ currentRestaurant.name }}</h1>

          <v-row class="grey--text ml-4">
            <StarRating
                :rating="currentRestaurant.rating"
                :show-rating="false"
                :read-only="true"
                :round-start-rating="false"
                :star-size="20"
            />
            {{ currentRestaurant.rating }} ({{ currentRestaurant.review_count }})
          </v-row>

          <img
              class="restaurant-image"
              :src="currentRestaurant.image_url"
          />
        </v-col>

        <v-col>
          <p>
            ✆ {{ currentRestaurant.display_phone }}<br />
            📌 {{ currentRestaurant.location.display_address.join(', ') }}
          </p>

          <p>
            <v-btn @click="showReservationModal = true">Réserver</v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";

export default {
  name: "Restaurant",
  data() {
    return {
      restaurants: null,
    };
  },
  components: { StarRating },

  computed: {
    currentRestaurant() {
      return this.$store.state.currentRestaurant
    }
  },

  mounted() {
    this.$store.dispatch('getDetailRestaurant', this.$route.params.restaurant);
  },
}
</script>

<style scoped lang="scss">
.align {
  text-align: center;
  align-items: center;
}

.back-button {
  margin-bottom: 20px;
}
h1 {
  margin-bottom: 10px;
  text-align: center;
}
.restaurant-image {
  margin-top: 20px;
  width: 100%;
}
.restaurant-details {
  p {
    line-height: 30px;
  }
}
</style>