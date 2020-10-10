<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-body bg-secondary">
        <p class="row justify-content-center text-white">I am {{newAge}} years old </p>
        <p class="row justify-content-center text-white">I study at {{mynewsecondschool}} </p>
        
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Secondstu",
    props: ["newAge","mynewsecondschool"]
}
</script>