<template>
     <div class="container mt-5">
        <div class="card">
            <div class="card-body bg-light">
        <p class="row justify-content-center">My name is {{myName}}</p>
        <p class="row justify-content-center">Am from {{newSchol}} Department</p>

     <Secondstu v-bind:newAge="age" v-bind:mynewsecondschool="secondschool"/>

        </div>
        </div>
    </div>
</template>
<script>
import Secondstu from "./secondstu";
export default {
    name: "Studentcomp",
    props: ["myName", "newSchol","secondschool"],
    components: {
        Secondstu,
    },
    data(){
        return{
            age: 27
        }
    }

}
</script>