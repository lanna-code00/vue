<template>
   <div>
       <div class="container">
         <h2>{{food.name}}</h2>
         <div class="allfooddetails">
         <img :src="require(`@/assets/${food.image}`)" alt="" srcset="">
         <p>{{food.description}}</p>
         </div>
       </div>

       <section class="foodexperiences">
              <p>My best Experiences in {{food.name}}</p>
           <div class="cards">
           <div class="card" v-for=" foodex in food.foodexperiences" :key="foodex.check">
            <router-link :to="{
                name: 'foodDetail',
                params: {allcheck2: foodex.check}}"
                >
              <!-- <div> -->
                  <img :src="require(`@/assets/${foodex.image}`)" alt="" srcset="">
                  <span class="card__text">{{foodex.name}}</span>
                  </router-link>
              <!-- </div> -->
           </div>
           </div>
       </section>
       <router-view :key="$route.path"/>
   </div>

</template>

<script>
import store from '@/store.js'
export default {
    data(){
        return{}   
    },
    props:{
       check:{
           type: String,
           required: true
       }
    },
    computed:{
        food(){
            return store.foods.find(food => food.check == this.check)
        }
    }
}
</script>

<style scoped>
  img{
      max-width: 400px;
      height: auto;
      width: 100%;
      max-height: 400px;
  }
  .allfooddetails{
      display: flex;
      justify-content: space-between;
  }
  p{
    padding: 0px 20px;
  }
  .cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 400px;
  max-width: 400px;

}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>