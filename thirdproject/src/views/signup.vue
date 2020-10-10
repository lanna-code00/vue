<template>
   <v-app>
       <v-card width="500" height="500" class="mx-auto mt-5">
           <v-card-title class="mt-5">
           <h1 class="display-1">Sign-up</h1>
           </v-card-title>
           <v-card-text>
               <v-form>
                   <v-text-field label="Firstname" prepend-icon="mdi-account-circle"/>
                   <v-text-field label="Lastname" prepend-icon="mdi-account-circle"/>
                   <v-text-field label="Email" prepend-icon="mdi-enveloped"/>
                   <v-text-field label="Password" prepend-icon="mdi-account-circle"/>

                   <v-text-field :type="showpassword ? 'text' : 'password'" label="Password" prepend-icon="mdi-lock" 
                   :append-icon="showpassword ? 'mdi-eye' : 'mdi-eye-off'"
                   @click:append="showpassword = !showpassword"/>

               </v-form>
           </v-card-text>
           <v-divider></v-divider>
           <v-card-actions>
               <v-btn color="success">Register</v-btn>
               <v-spacer></v-spacer>
               <v-btn color="info">Login</v-btn>

           </v-card-actions>
       </v-card>
   </v-app>
</template>

<script>
export default {
    name:'Signup',
    data(){
        return{
            showpassword: false
        }
    }
}
</script>