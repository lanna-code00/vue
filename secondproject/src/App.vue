<template>

<div>
<Navbar v-bind:namefromapp ="dept"/>
<button v-on:click="changeName">Edit Name</button>
<!-- <div :key="students.id" v-for="students in arrayOfStudents"> -->
  <!-- <h6>hello <button>Delete</button></h6> -->
  <div :key='num' v-for="num in arr">
<Myfirstcomp v-bind:mynums="num" v-on:deletenums="deletesome"/>
</div>
<Addstudent v-on:addstu="addstudents"/>
  <!-- <div>my name is {{students.name}} in the department of {{students.dept}} </div> -->
  <!-- <Student v-on:deletestudent="delstud" v-bind:student="students"/>
</div> -->
<Table/>
<!-- <div  v-bind:key="stuarrs.newk" v-for="stuarrs in stuarr"> -->
<Displaystudent v-bind:noofstu="stuarr" v-on:canceledit="cancelstudent" v-on:deletestus="delme" v-on:savechanges="changevalues"/>
<!-- v-on:editstudents="editme" -->
<!-- </div> -->
  
  <Firstcomps/>

<!-- <Generalstu v-bind:newschool="school"/> -->


<!-- <Studentcomp v-bind:myname="name"/> -->
<!-- <Content v-bind:myName ="name"/> -->
<!-- {{name}} -->
  <div>
      <Profilepic v-bind:newprofile="name"/>
  </div>

  <Wholecon/>
</div> 

</template>

<script>
import Navbar from "./components/navbar";
import Addstudent from "./components/addstudent";

import Wholecon from "./components/wholecon";
// import Student from "./components/student"
// import Content from "./components/content";
import Profilepic from "./components/profilepic";
import Displaystudent from "./components/displaystudent";
import Firstcomps from "./components/firstcomps";
import Axios from "axios";
import Table from "./components/table";
import Myfirstcomp from "./components/myfirstcomp";


// import Generalstu from "./components/generalstu";
// import Studentcomp from "./components/studentcomp";
export default {
  name: 'App',
  // Student,
  components: {
    Navbar, Profilepic, Wholecon,  Displaystudent, Addstudent, Table, Firstcomps, Myfirstcomp
  },
  mounted(){
    let id = 3;
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    Axios.get(url).then(res => console.log(res.data))
    .catch(err=>console.log(err))
  },
  data(){
    return{
      name: "Peter",
      dept: "Software",
      school: "SQI",
      arr: [2,3,4],
      stuarr: [],
      // arrayOfStudents:[
      //   {id:1, name:"rhoda", dept: "Software"},
      //   {id:2, name:"maryann", dept: "hardware"},
      //   {id:3, name:"peter", dept: "Robotics"},
      //   {id:4, name:"bee-gee", dept: "graphics"}
      //                 ],
     }
  },

  methods:{
    changeName(){
      this.name = "kenny";
    },
    // delstud(studentsid){
      // this.arrayOfStudents = this.arrayOfStudents.filter(stu => stu.id != studentsid)
      // console.log("studentsid:", studentsid);
    // },
    delme(sid){
      console.log(sid);
       this.stuarr = this.stuarr.filter(stus => stus.newk != sid);
      // console.log("studentsid:", sid);

    },
    deletesome(a){
    
    console.log(a)
     this.arr = this.arr.filter(st => st !== a)
    },
   addstudents(stn){
    //  alert(stn);
  this.stuarr = [...this.stuarr, stn];
   },
   changevalues(tt){
      // console.log(tt)
      this.stuarr.map( function(stuarr) {
         if (stuarr.newk == tt.newk) {
           stuarr.name = tt.name
           stuarr.dept = tt.dept
           stuarr.school = tt.school

          //  console.log(tt.name)
         }
      })
   },

      cancelstudent(tt){
      // console.log(tt)
      this.stuarr.map( function(stuarr) {
         if (stuarr.newk == tt.newk) {
           stuarr.name = tt.name
           stuarr.dept = tt.dept
           stuarr.school = tt.school

          //  console.log(tt.name)
         }
      })
   }
  //  editme(ty){
  //     console.log(ty)
  //  }
  }
 

}
</script>

<style scoped>
  .div{
    color: blue;
  }
</style>
