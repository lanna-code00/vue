<template>
    <div class="row ml-5">
        Profilepic
       <p>{{mynewname}}</p>
       <p>{{newprofile}}</p>
    </div>
</template>
<script>
export default {
    name: "Profilepic",
    props: ["mynewname", "newprofile"],
   
}
</script>