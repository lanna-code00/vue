<template>
  <v-card
    class="mx-auto m-4"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="foods in allfoods"
          :key="foods.food_id"
          :cols="foods.flex"
        >
          <v-card>
            <v-img
              :src="require(`../assets/food_php/uploads/${foods.food_picture}`)"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
             
            >
              <v-card-title class="text-white" v-text="foods.food_name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Viewfood',
    data(){
     return {
       
     }
    },
    computed: mapGetters(['allfoods']),
    methods: {
        ...mapActions(['fetchallfoods'])
    },
    created(){
        this.fetchallfoods();
    },
}
</script>