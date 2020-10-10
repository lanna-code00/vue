<template>
<div>

    <div class="modal fade" id="editfoodModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">EDIT FOOD</h5>
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
           <input type="time" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-clock-o"></i></span>
           </div>
           <input type="date" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-info"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="time" aria-label="time" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-dollar"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="price" aria-label="price" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-sort-amount-asc"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="quantity" aria-label="quantity" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-info"></i></span>
           </div>
           <input type="text" class="form-control" placeholder="detail" aria-describedby="basic-addon1">
        </div>

         <div class="input-group mb-3 mt-2">
           <div class="input-group-prepend">
             <span class="input-group-text" style="background: none" id="basic-addon1">
              <i class="fa fa-picture-o"></i></span>
           </div>
           <input type="file" class="form-control" placeholder="picture" aria-label="picture" aria-describedby="basic-addon1">
        </div>
        
     <div>
         <label for="Is food available?">Is food available ?</label>
       <select name="" id="" style="border: 1px solid black" class="col-md-12">
         <!-- <option value="Is food available?" readonly>Is food available?</option> -->
         <option value="Yes">Yes</option>
         <option value="No">No</option>
       </select>
     </div>
  

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Editfood',
    data(){
      return {
        foods: {},
      }
    }, 
    
    methods: {
      
    },

    computed: mapGetters([''])
}
</script>