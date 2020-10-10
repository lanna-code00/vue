<template>
    <!-- <div>
        <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/login">Login</router-link>
              <router-link to="/signup">Signup</router-link>
              <router-link to="/contact">Contact</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/tryitout">Let's have some fun</router-link>

        </div>
    </div> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-link active">
          <router-link to="/" class="nav-link">Home</router-link>      
          </li>
      <li class="nav-link">
           <router-link to="/login"  class="nav-link">Login</router-link>
      </li>
      <li class="nav-link">
          <router-link to="/signup" class="nav-link">Signup</router-link>
      </li>
      <li class="nav-link">
          <router-link to="/contact" class="nav-link">Contact</router-link>
      </li>
       <li class="nav-link">
          <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-link">
           <router-link to="/tryitout" class="nav-link">Let's have some fun</router-link>
      </li>
    </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped>
  /* #nav{
      display: flex;
      align-items: center;
        padding: 30px;
  }

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0px 10px;
}

#nav a.my-new-active-class {
  color: #fa0202;
}
#nav a.my-new-active-class:hover{
  color: #2d2adb;
  transition: 0.9s;
} */
</style>