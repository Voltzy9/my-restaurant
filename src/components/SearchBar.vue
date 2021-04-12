<template>
  <v-container style="margin-top: 30px;">
    <v-row>
      <v-col
          md="4"
          lg="3"
      >
        <v-text-field
            v-model="nameRestaurant"
            placeholder="Rechercher par nom"
            solo
        />
      </v-col>

      <v-col
          md="1"
          lg="1"
          style="margin-top: 12px"
      >
        <v-checkbox
            v-model="isOpen"
            label="Ouvert"
        />
      </v-col>

      <v-col
          md="4"
          lg="4"
      >
        <v-select
            v-model="selectedCategories"
            :items="restaurantCategories"
            chips
            label="Catégories"
            multiple
            solo
        />
      </v-col>

      <v-col
          md="2"
          lg="3"
      >
        Trier par note
        <v-range-slider
            v-model="ratingRange"
            :max="5"
            :min="1"
            hide-details
            class="align-center"
        >
          <template v-slot:prepend>
            {{ ratingRange[0] }}
          </template>
          <template v-slot:append>
            {{ ratingRange[1] }}
          </template>
        </v-range-slider>
      </v-col>

      <v-col
          md="1"
          lg="1"
      >
        <v-btn @click="search">Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import categories from '../assets/categories.json'

export default {
  name: 'SearchBar',

  data() {
    return  {
      nameRestaurant: '',
      isOpen: false,
      selectedCategories: [],
      ratingRange: [1,5],
    };
  },

  computed: {
    restaurantCategories(){
      const listCategory = categories.filter((c) => c.parents.includes('restaurants'));
      return listCategory.map((c) => c.alias);
    },
  },

  mounted() {
    this.$store.dispatch('searchRestaurants');
  },

  methods: {
    search() {
        const parameters = {};

        if (this.nameRestaurant.length) {
          parameters.nameRestaurant =this.nameRestaurant;
        }

        if (this.selectedCategories.length) {
          parameters.categories = this.selectedCategories.join();
        }

        parameters.open = this.isOpen;

        this.$store.dispatch('searchRestaurants', parameters);
    }
  }
};

</script>

<style scoped>
</style>