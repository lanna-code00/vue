<template>
    <div class="container">
<h1 class="text-center mt-3 mb-3">FOOD LIST</h1>
<v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            #
          </th>
          <th class="text-left">
            food_time
          </th>
          <th class="text-left">
           food_date
          </th>
          <th class="text-left">
            food_name
          </th>
          <th class="text-left">
            food_price
          </th>
          <th class="text-left">
            food_quantity
          </th>
          <th class="text-left">
            food_detail
          </th>
          <th class="text-left">
            food_picture
          </th>
          <th class="text-left">
            food_availability
          </th>
          <th class="text-left">
            Edit_food
          </th>
          <th class="text-left">
            Delete_food
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
         v-for="food in allfoods" 
         :key="food.food_id"
        >
          <td>{{ food.food_id }}</td>
          <td>{{ food.food_time }}</td>
          <td>{{food.food_date}}</td>
          <td>{{food.food_name}}</td>
          <td>{{food.food_price}}</td>
          <td>{{food.food_quantity}}</td>
          <td>{{food.food_detail}}</td>
          <td><img :src="require(`../assets/food_php/uploads/${food.food_picture}`)" style="width: 50px; height: 50px; border: 2px solid black" alt="hello" srcset=""></td>
          <td>{{food.food_availability}}</td>
          <td>
             <button data-toggle="modal" data-target="#editfoodModal" @click="editfood(food)" class="btn btn-dark btn-sm">Edit</button>
          </td>
          <td>
             <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

<Addfood/>
<Editfood/>
    </div>
</template>

<script>
import Addfood from '../views/addfood';
import Editfood from '../views/editfood';

import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Foodtable',
    components:{
        Addfood,
        Editfood,
    },

    methods: {
       ...mapActions(['fetchallfoods']),

         editfood(food){
             console.log(food);
         }
    },

    computed: mapGetters(['allfoods']),
    created(){
        this.fetchallfoods()
    }
}
</script>