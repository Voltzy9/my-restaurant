<template>
  <div class="home" >
    <v-app-bar>
      <img
          src="../assets/logo.png"
          alt="Vue Eat"
          class="vue-eat-logo"
      />

      <SearchBar v-if="$route.name === 'Home'" />
    </v-app-bar>

    <v-main>
      <ListRestaurant />
    </v-main>
  </div>
</template>
<script>
import ListRestaurant from '@/components/ListRestaurant.vue'
import SearchBar from '@/components/SearchBar.vue'
export default {
  name:"Home",
  components: {
    ListRestaurant,
    SearchBar,
  }
}
</script>
<style lang="scss" scoped>
.vue-eat-logo{
  max-width: 50px
}
.home{
  width:100%
}
</style>
