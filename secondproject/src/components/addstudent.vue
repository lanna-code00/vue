<template>
     
<div>
    <div class="container">
        <!-- <div class="row">
      <input type="text" name="inp" class="form-control mb-2" placeholder="name" v-on:change="studentsname"/>
      <input type="text" name="dept" class="form-control mb-2" placeholder="dept"  v-on:change="studentsdept"/>
      <input type="text" name="school" class="form-control mb-2" placeholder="school" v-on:change="studentsschol"/>
      <button v-on:click="addstudent" class="btn btn-primary mr-5">Update</button>

      <button v-on:click="addstudent" class="btn btn-success">Add Student</button>

      </div> -->

         <div class="row">
      <!-- <input type="hidden" v-model="index" class="form-control mb-2" placeholder="name"/> -->
      <input type="text" v-model="name" class="form-control mb-2" placeholder="name"/>
      <input type="text" v-model="dept" class="form-control mb-2" placeholder="dept"/>
      <input type="text" v-model="school" class="form-control mb-2" placeholder="school"/>
      <!-- <button v-on:click="addstudent" class="btn btn-primary mr-5">Update</button> -->

      <button v-on:click="addstudent" class="btn btn-success">Add Student</button>

      </div>
      </div>
</div>
</template>

<script>

let newkeys = 1;
export default {
    name: 'Addstudent',
  

data(){
    return{
        // index: '',
        name: '',
        dept: '',
        school: ''
    }
},
methods:{
    
    // studentsname(event){
    //   this.name = event.target.value
    // },
    //   studentsdept(event){
    //   this.dept = event.target.value
    // },  studentsschol(event){
    //   this.school = event.target.value
    // },
    addstudent(){
        let newstu = {
            newk: newkeys++,
            name: this.name,
            dept: this.dept,
            school: this.school
        }
        
        console.log(newstu)
        this.$emit('addstu', newstu)
    },
    //   addstudent(){ 
    //   let {name, dept, school} = this;
    //   this.$emit('addstudents', {name, dept, school})
    // }
}
}
</script>

<style>

</style>