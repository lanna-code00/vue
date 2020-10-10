<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="bg-secondary text-white text-center">Secondary color</div>
        <div v-bind:class="{'text-white': num>=20, 'bg-success': num>20}">{{num}}</div>
</div>
        <div id="divs" v-bind:class="{'bg-primary': num>=20}">This is my first Div</div>
        <div class="div">This is my first Div from app</div>
      <div v-bind:style="myFunc()">{{num}}</div>
        <div v-bind:style="myStyle">This is my first Div here</div>
        <div v-bind:style="{'background-color': bg, color: 'white'}">change Color</div>
         <button v-on:click="randomNum">changeColors</button>
        <!-- <button v-on:click="randomNum">change</button> -->

      <p v-if="num<=0">It is less than 0</p>
      <p v-else-if="num<=50">Num is less than or equal to 50</p>
      <p v-else-if="num<=100">Num is less than or equal to 100</p>
      <p v-else>Num is bigger</p>
      <button v-on:click="addNum">AddNum</button>
      <button v-bind:click="reducenum">ReduceNum</button>
      <!-- <p>{{newfunc}}</p> -->

      <button v-on:click="changeverify">verify</button>
      This is the current value of: {{num}}
    </div>
</template>

<script>
export default {
    name: "Firstcomps",
    data(){
        return {
        num: 0,
        verify: true,
        bg: 'green',
        // newfunc: this.randomNum,
        myStyle:{
            "background-color": 'red',
            color: "yellow"
        },
     
    //   randomNum(){
    //     let myNum = Math.floor(Math.random()* 1000000);
    //     this.bg = `#${myNum}`;

    // }
    
      
        }
    },

    methods:{
         changeverify(){
        this.verify = !this.verify
    },
    addNum(){
        this.num = this.num+1
    },
     reducenum(){
        this.num = this.num-10
    },
    myFunc(){
        return{
            color:'red',
            "background-color": 'orange'
        }
    },

    // randomColor(){
    //     return Math.floor(Math.floor * 100000)
    // },

    randomNum(){
        setInterval(() => {
        let myNum = Math.floor(Math.random()* 1000000);
        this.bg = `#${myNum}`;
         
     }, 200);
 
     
    },
    

    }
   
}
</script>

<style scoped>
#divs{
    color: red;
}
</style>