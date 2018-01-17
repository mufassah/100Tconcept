<template>
  <nav class="nav-full">
    <div class="nav-container">
      <div class="nav-flex2 nav-items">
      	<router-link class="nav-link" to="/news">NEWS</router-link>
      	<router-link class="nav-link" to="/teams">TEAMS</router-link>
      	<router-link class="nav-link" to="/content">CONTENT</router-link>
      </div>
      <div class="nav-flex"> 
        <router-link class="nav-logo" to="/">
          <img src="../assets/100t-logo-optimized.svg"
          width="200px"
          height="200px">
        </router-link>
      </div>
      <div class="nav-flex2 nav-items">
       <a class="nav-link" href="https://www.100thieves.com/store/">STORE</a>
       <router-link class="nav-link" to="/partners">PARTNERS</router-link>
       <a class="nav-link" href="https://www.100thieves.com/contact-1/">CONTACT</a>
     </div>
   </div>
   
   
   <transition name="slide-nav">
    <div id="mySidenav" class="sidenav" v-if="openNav">
      <a class="closebtn" @click="openNav = false">&times;</a>
      <router-link class="nav-link" to="/"><p @click="openNav = false">HOME</p></router-link>
      <router-link class="nav-link" to="/news"><p @click="openNav = false">NEWS</p></router-link>
      <router-link class="nav-link" to="/teams"><p @click="openNav = false">TEAMS</p></router-link>
      <router-link class="nav-link" to="/content"><p @click="openNav = false">CONTENT</p></router-link>
      <a class="nav-link" href="https://www.100thieves.com/store/" @click="openNav = false"><p>STORE</p></a>
      <router-link class="nav-link" to="/partners"><p @click="openNav = false">PARTNERS</p></router-link>
      <a class="nav-link" href="https://www.100thieves.com/contact-1/" @click="openNav = false"><p>CONTACT</p></a>
    </div>
  </transition>
  <div class="side-nav-full">
    <span style="font-size:30px;cursor:pointer" @click="openNav = true">&#9776;</span>
    <div class="nav-flex"> 
      <router-link class="nav-logo" to="/">
        <img src="../assets/100t-logo-optimized.svg"
        width="200px"
        height="200px">
      </router-link>
    </div>
  </div>
  <transition name="backdrop">
    <div class="opacity-backdrop" v-if="openNav" @click="openNav = false">
    </div>
  </transition>
</nav> 
</template>

<script>
export default {
  data() {
    return {
      openNav: false
    }
  }
}
</script>