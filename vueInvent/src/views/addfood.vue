<template>
  <div>
  
   <div class="mt-5">

  <button data-toggle="modal" data-target="#exampleModalCenter" style="width: 40px; height:40px; border-radius: 50px" class="fixed-bottom m-5"><i class="fa fa-plus-circle fa-3x text-dark "></i></button>


<!-- Modal -->
<form @submit="onSubmit">
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
       
       <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-clock-o"></i></span>
           </div>
           <input type="time" v-model="foods.food_time" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-clock-o"></i></span>
           </div>
           <input type="date" v-model="foods.food_date" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-info"></i></span>
           </div>
           <input type="text" v-model="foods.food_name" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-dollar"></i></span>
           </div>
           <input type="text" v-model="foods.food_price" class="form-control" placeholder="price" aria-label="price" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-sort-amount-asc"></i></span>
           </div>
           <input type="text" v-model="foods.food_quantity" class="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-info"></i></span>
           </div>
           <input type="text" v-model="foods.food_detail" class="form-control" placeholder="detail" aria-describedby="basic-addon1">
        </div>

         <div class="col-md-6">
           <img id="image" src="" alt="your image" style="width: 50px; height: 50px"/>
         </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-picture-o"></i></span>
           </div>
           <input type="file" ref="file" v-on:change="readURL($event)" class="form-control" placeholder="picture" aria-label="picture" aria-describedby="basic-addon1">
        </div>
        
     <div>
         <label for="Is food available?">Is food available ?</label>
       <select name="" id="" v-model="foods.food_availability" style="border: 1px solid black" class="col-md-12">
         <!-- <option value="Is food available?" readonly>Is food available?</option> -->
         <option value="Yes">Yes</option>
         <option value="No">No</option>
       </select>
     </div>
  



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
</form>

</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import $ from 'jquery';
export default {
  name: 'Addfood',
  data(){
    return {
     foods:{
        file: [], 
        food_time: '',
        food_date: '',
        food_name: '',
        food_price: '',
        food_quantity: '',
        food_detail: '',
        food_availability: '',
       }, 
    }
  },

  methods:{
    ...mapActions(['addfood']),
    onSubmit(e){
      e.preventDefault();
      let formData = new FormData();
        formData.append('mytime', this.foods.food_time);
        formData.append('mydate', this.foods.food_date);
        formData.append('myname', this.foods.food_name);
        formData.append('myprice', this.foods.food_price);
        formData.append('myquantity', this.foods.food_quantity);
        formData.append('mydetail', this.foods.food_detail);
        formData.append('myfile', this.foods.file);
        formData.append('myavail', this.foods.food_availability);
      this.addfood(formData);
    },

       readURL(event){
        this.foods.file = event.target.files[0];
        // console.log(this.foods.file)
        if (this.foods.file) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image').attr('src', e.target.result);
                };

                reader.readAsDataURL(event.target.files[0]);
            }
      },
  },



}
</script>
