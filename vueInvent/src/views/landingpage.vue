<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="800"
  >
    <v-app-bar style="background-color: #4A148C;" class="text-white"
    >
      <v-app-bar-nav-icon @click="drawer = true" class="text-white"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
     <router-link to="/"><v-toolbar-title class="mr-5">Food list</v-toolbar-title></router-link>
      <v-toolbar-title class="mr-5">Sign Up</v-toolbar-title>
      <v-toolbar-title class="mr-5">Log In</v-toolbar-title>


    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group class="mt-3"
         
          active-class="deep-purple--text text--accent-4"
        >
  <v-avatar class="row mt-4 mx-auto">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="ml-5 mt-4">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-4 mt-4 mb-3">Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="ml-5 mt-4">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-4 mt-4 mb-3">My profile</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon class="ml-5 mt-4">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ml-4 mt-4">Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view/>


  </v-card>

</template>

<script>
  export default {
    name: 'Navbar',
    data: () => ({
      drawer: false,
    }),
  }
</script>