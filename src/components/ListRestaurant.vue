<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout justify-center>
        <v-flex xs12 sm6>
          <v-toolbar color="indigo" dark>
            <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
            <v-toolbar-title>Useful Links</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-btn icon>
               <v-icon>search</v-icon>
             </v-btn>-->
          </v-toolbar>

          <v-card>
            <v-container
                fluid
                grid-list-md
            >
              <v-layout row wrap>
                <v-flex
                    v-for="card in cards"
                    v-bind="{ [`xs${card.flex}`]: true }"
                    :key="card.title"
                >


                  <v-card>
                    <a href="http://www.google.com" v-bind="card.url">
                      <v-img
                          :src="card.src"
                          height="200px"
                      >
                        <v-container
                            fill-height
                            fluid
                            pa-2
                        >
                          <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                              <div class="headline white--text" v-text="card.title"></div>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-img>
                    </a>

                    <!-- <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn icon>
                         <v-icon>favorite</v-icon>
                       </v-btn>
                       <v-btn icon>
                         <v-icon>bookmark</v-icon>
                       </v-btn>
                       <v-btn icon>
                         <v-icon>share</v-icon>
                       </v-btn>
                     </v-card-actions>--->
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "ListRestaurant"
}
</script>

<style scoped>

</style>