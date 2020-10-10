<template>
    <div>
        <p>
            I am the {{anothername}} of the content
        </p>
    </div>
</template>
<script>
export default {
    name: "Contentchild",
    props: ["anothername"]
}
</script>