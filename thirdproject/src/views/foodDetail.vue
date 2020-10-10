<template>
    <div>
        <section>
            <div class="row">Food Experiences</div>
            <h2>{{foodex.name}}</h2>
            <div class="food-details">
              <img :src="require(`@/assets/${foodex.image}`)" alt="" srcset="">
              <p>{{foodex.description}}</p>
            </div>

        </section>
    </div>
</template>
<script>
 import store from "@/store.js";
export default {
    props:{
        allcheck:{
            type: String,
            required: true
        },
         allcheck2:{
            type: String,
            required: true
        }
    },

    computed:{
        foodex(){
            return store.foods.find(
                myexperiences => myexperiences.check == this.allcheck
                )
        },

        checkfoods(){
            return this.foodex.foodexperiences.find(
                somefoods => somefoods.check == this.allcheck2
            )
        }
    }
}
</script>

