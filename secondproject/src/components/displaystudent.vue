<template>
       <div>
           <div class="container">
           
 <table class="table table-bordered text-center">
       <thead>
      <tr>
      <th>#</th>
      <th>Name</th>
      <th>Department</th>
      <th>School</th>
      <th>Edit/Save</th>
      <th>Delete</th>

    </tr>
  </thead> 
  <tbody>
  <tr v-bind:key="stuar.newk" v-for="stuar in noofstu">
      <td>{{stuar.newk}}</td>
    

        <td>
                {{stuar.name}}
              <!-- <div class="view">
              </div>
              <div class="edit">
                <input type="text" class="forms text-center" v-model="stuar.name"/>
              </div> -->
       </td>

        <td>
                {{stuar.dept}}
              <!-- <div class="view">
              </div>
              <div class="edit">
                <input class="forms text-center" type="text" v-model="stuar.dept"/>
              </div> -->
       </td>
        <td>
                {{stuar.school}}
              <!-- <div class="view">
              </div>
              <div class="edit">
                <input type="text" class="forms text-center" v-model="stuar.school"/>
              </div> -->
       </td>
    <td>
      <!-- <button class="btn btn-info mr-2" v-on:click="$emit('deletestus', stuar.newk)">Edit</button> -->
      <!-- <div class="view"> -->
        <button  class="btn btn-info" data-toggle="modal"  v-on:click="editstudent(stuar)" data-target="#exampleModalCenter">Edit</button>
      <!-- </div> -->
      <!-- <div class="edit">
        <button class=" btn btn-success" >Save</button>
      </div> -->
      </td> 

      <td>
        <div>
      <button class="btn btn-danger" v-on:click="$emit('deletestus', stuar.newk)">Delete</button>
       </div>
        
        </td>  


        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="students.name" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1">
          </div>

           <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="students.dept" placeholder="Department" aria-label="Username" aria-describedby="basic-addon1">
          </div>

           <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="students.school" placeholder="School" aria-label="Username" aria-describedby="basic-addon1">
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button"  data-dismiss="modal" class="btn btn-primary" v-on:click="savestudents(students)">Save changes</button>
      </div>
    </div>
  </div>
</div>  
    </tr>
    </tbody>
     </table>

     </div>
       </div>
</template>

<script>
// import Edit from "./edit"
export default {
    name: 'Displaystudent',
    props:["noofstu"],

    data(){
      return{
        // editMe: true,
        // stuar:{
        //   name: '',
        //   dept: '',
        //   school: ''
        // },
            // editedUser: null,
            toggling: false,
            students: {},

      }
    },
    methods:{
        // savestudent(ty){
        //    console.log(ty)

        // },

        savestudents(ty){
          this.students = ty;
          // console.log(ty);
          this.$emit('savechanges', ty)
        },

      editstudent(ty){
        // console.log(ty.name)
      // this.editedUser = ty
      let  {name, dept, school, newk} = ty;
      this.students = {name, dept, school, newk};

        // let newedit = ty;
      //  let {name,dept,school} = ty;
      //  console.log(ty);
      // this.$emit('editstudents', {name,dept,school})
    }
    
}
}
</script>

<style scoped>
    /* .edit {
      display: none;
    }
    .edit .forms {
        border: none;
        outline: none;
    }
     .editing .edit {
      display: block
    }
    .editing .view {
      display: none;
    } */
</style>