<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body bg-light">
        <p class="row justify-content-center">I am a student of {{myschool}}</p>
          
        </div>
        </div>
        
    </div>
</template>
<script>
// import Studentcomp from "./studentcomp";
export default {
    name: "Generalstu",
    props: ["myschool"],
    // components: {
    //     Studentcomp
    // }
}
</script>