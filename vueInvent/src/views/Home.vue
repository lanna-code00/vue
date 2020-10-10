<template>
  <v-card 
    class="mx-auto mt-5"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
    

    <v-card>
       <input type="file" id="file" ref="file" />
           <v-btn v-on:click="submitForm()">Upload</v-btn>

            <div v-bind:key="images.food_id" v-for="images in showImage">
              <p>{{images.food_quantity}}</p>
              <p> <img :src="require(`../assets/food_php/uploads/${images.food_picture}`)"  class='img-thumbnail' width='100' height="100" alt="hello" srcset=""> </p>
            </div> 
    </v-card>
  </v-card>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Home',
  data(){
    return{
        file: [],
        showImage: [],     
        newimage: '',
        links: 'http://localhost/vuefolder/vueInvent/src/assets/food_php'
    }
  },
 methods: {
      submitForm(){
            let formData = new FormData();
            formData.append('myfile', this.file);
  
            axios.post(this.links + '/insertfood.php',
                formData,
                {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
      },
  
      onChangeFileUpload(event){
        this.file = event.target.files[0];
        console.log(this.file)
      },

      showimages(){
        axios.get(this.links + '/getfood.php').then(response => {
        this.showImage = response.data
        })
      }
    },
    created(){
    this.showimages();
    },

}
</script>
