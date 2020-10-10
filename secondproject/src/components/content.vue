<template>
   <div><p>My name is {{myName}}</p>
    <Contentchild v-bind:anothername="newname"/>
   </div>
  
</template>

<script>
import Contentchild from "./contentchild";
  export default {
      name: "Content",
      props: ["myName"],
      components: {
          Contentchild
      },
      data(){
          return{
              newname: "childcontent"
          }
      }
  }
</script>