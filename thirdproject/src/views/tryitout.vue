<template>
    <div>
        <v-app class="mx-au">
            <div class="col-md-6" >
            <!-- <v-btn v-on:click="increasemystatecount" class="btn btn-sm">Click me</v-btn> -->
              <!-- <v-btn>{{ newstatevalue }}</v-btn> -->
            <!-- <v-btn v-on:click="reducemystatecount" class="btn btn-sm">Reduce me</v-btn> -->

            <v-btn v-on:click="increase(2)" class="btn btn-sm">Increaseby2</v-btn>
            <v-btn v-on:click="increase(3)" class="btn btn-sm">Increaseby3</v-btn>
            <v-btn v-on:click="subtract" class="btn btn-sm">subtract</v-btn>

            <v-btn v-on:click="decrease" class="btn btn-sm">decrease</v-btn>


            <v-btn class="btn btn-sm">Hello {{getnum}}</v-btn>
            <!-- <v-btn class="btn btn-sm">Hello {{getName}}</v-btn> -->

        </div>
        </v-app>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex';
import {mapGetters, mapActions} from 'vuex';

Vue.use(Vuex)

const mystate = new Vuex.Store({
    state:{
        count: 3
    },

    mutations: {
        increment(state){
            state.count++
        }
    },
    
})

console.log(mystate.state.count)
mystate.commit('increment');
export default {
    name: 'Tryitout',
    computed: mapGetters(['getnum', 'getName']),
    mystate,
    //  computed:{
        //  newstatevalue: state => state.count,
 
        // newstatevalue(){
        //     return mystate.state.count;
        // }
         
    //  },

    methods: {...mapActions(['increase', 'decrease']),
       subtract(){
           this.decrease()
       }
    }

    //  methods:{
    //      increasemystatecount(){
    //          return mystate.state.count++;
    //      },
    //      reducemystatecount(){
    //          return mystate.state.count--;
    //      }
         
    //  }
}
</script>