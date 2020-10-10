<template>
    <div>
         <div class="container">
             <p>myfirstComponent</p>
             <input v-model="name" />
            
             <!-- <div :key="arrs" v-for="arrs in mynums"> -->
             my students {{mynums}}
             <button @click="$emit('deletenums', mynums)">Delete</button>
             <!-- </div> -->
         </div>
    </div>
</template>

<script>
export default {
    name: 'Myfirstcomp',
    props: ['mynums'],
    data(){
        return{
            name: 'maryann',
            dept: 'Software'
        }
    },

        beforeCreate(){
            console.log('hello')
        },
    created(){
           console.log('I have been created')
       },
    beforeMount(){
        console.log('I am beforemount')
    },
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
         console.log("beforeUpdate")
    },
    updated(){
         console.log("Update")
    },
     beforeDestroy(){
         console.log("beforeDestroy")
    },
     destroyed(){
         console.log("destroy")
    }
    
}
</script>