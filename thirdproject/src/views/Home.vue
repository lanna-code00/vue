<template>
  <div class="home">
    <h1>All Foods</h1>
    <div class="food">
    <div v-for="food in foods" :key="food.name">
         <router-link :to="{name: 'allfoods', params: {check: food.check}}"><h2>{{food.name}}</h2></router-link>
         <figure>
         <router-link :to="{name: 'allfoods', params: {check: food.check}}"> 
           <img :src="require(`@/assets/${food.image}`)" :alt="food.name">
           </router-link>
         </figure>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js';
export default {
  name: 'Home',
  components: {},
  data(){
    return {
      foods: store.foods
    }
  }
}
</script>

<style scoped>
  .home{
    max-width: 1400px;
    margin: 0 auto;
  }
  img{
    max-width: 200px;
  }
  .food{
    display: flex;
    justify-content: space-between;
  }
  .myfoods{
    text-decoration: none;
  }

</style>
