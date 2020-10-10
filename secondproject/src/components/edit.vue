<template>
<div>

<!-- Button trigger modal -->
<div >

<!-- <div v-if="myedit">
<div v-bind:key="myedits.newk" v-for="myedits in myedit">
<button v-on:click="editbtn(myedits.newk)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Edit
</button>
</div>
</div> -->
</div>
<!-- Modal -->
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
            <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1">
          </div>

           <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Department" aria-label="Username" aria-describedby="basic-addon1">
          </div>

           <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="School" aria-label="Username" aria-describedby="basic-addon1">
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
export default {
    name: 'Edit',
    // props: ['myedit'],
      methods:{
          editbtn(nn){
             console.log(nn)
          }
      }
}
</script>