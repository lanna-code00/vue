<template>
    <div><p class="row justify-content-center">I am from {{myDept}}</p></div>
</template>
<script>
export default {
    name: "Department",
    props: ["myDept"]
}
</script>