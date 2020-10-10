<template>
   <div class="container mt-5">
        <div class="card">
            <div class="card-body">
        <p class="row justify-content-center">This is the main component</p>
           <Studentcomp v-bind:myName="name" v-bind:newSchol="dept" v-bind:secondschool="school"/>
           <Generalstu v-bind:myschool="school"/>
         
        </div>
        </div>
        
    </div>
</template>
<script>
import Generalstu from "./generalstu";
import Studentcomp from "./studentcomp";

export default {
    name: 'Wholecon',
    props: ['newschool'],
    components: {
        Generalstu,
        Studentcomp,
    },
    data(){
        return{ 
            name: "Betterglory",
            dept: "Software",
            school: "University of Ibadan"
        }
    }
}
</script>