<template>
  <nav class="nav-full">
    <div class="nav-container">
      <div class="nav-flex2 nav-items">
      	<a class="nav-link" href="/#/news">NEWS</a>
      	<a class="nav-link" href="/#/teams">TEAMS</a>
      	<a class="nav-link" href="/#/content">CONTENT</a>
    </div>
    <div class="nav-flex"> 
      <a class="nav-logo" href="/#/">
        <img src="../assets/100t-logo-optimized.svg"
             width="200px"
             height="200px">
      </a>
    </div>
    <div class="nav-flex2 nav-items">
    	<a class="nav-link" href="https://www.100thieves.com/store/">STORE</a>
      <a class="nav-link" href="/#/partners">PARTNERS</a>
      <a class="nav-link" href="https://www.100thieves.com/contact-1/">CONTACT</a>
    </div>
    </div>
    
  
  <transition name="slide-nav">
  <div id="mySidenav" class="sidenav" v-if="openNav">
    <a class="closebtn" @click="openNav = false">&times;</a>
    <a class="nav-link" @click="openNav = false" href="/#/">HOME</a>
    <a class="nav-link" @click="openNav = false" href="/#/news">NEWS</a>
    <a class="nav-link" @click="openNav = false" href="/#/teams">TEAMS</a>
    <a class="nav-link" @click="openNav = false" href="/#/content">CONTENT</a>
    <a class="nav-link" @click="openNav = false" href="https://www.100thieves.com/store/">STORE</a>
    <a class="nav-link" @click="openNav = false" href="/#/partners">PARTNERS</a>
    <a class="nav-link" @click="openNav = false" href="https://www.100thieves.com/contact-1/">CONTACT</a>
</div>
</transition>
  <div class="side-nav-full">
  <span style="font-size:30px;cursor:pointer" @click="openNav = true">&#9776;</span>
  <div class="nav-flex"> 
      <a class="nav-logo" href="/#/">
        <img src="../assets/100t-logo-optimized.svg"
             width="200px"
             height="200px">
      </a>
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

<style lang="sass">
 @import '../css/navbar.sass'
</style>