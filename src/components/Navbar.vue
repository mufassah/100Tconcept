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

<style>
.side-nav-full > span {
  color: #E8E7E7;
}
.nav-container {
  width: 100%;
  max-width: 88.3em;
  margin: auto;
  display:flex;
  justify-content: center;
  height: 7em;
}

.nav-items a {
  color: #e0e0e0;
  text-decoration: none;
  margin: 0px 10px;
  padding: 10px 10px;
  position: relative;
  z-index: 0;
  cursor: pointer;
}
.nav-full{
  background: #0f0f0f;
  height: 7em;
  padding-top:.2em;
  padding-bottom:.2em;
  color: #e0e0e0;
  margin-bottom: 3em;
  /* position: sticky;
  top: 0;
  z-index: 999; */
}

.nav-logo > img {
  height: 90%;
}
a.nav-logo{
  height: 6em;
}
a.nav-logo:link {
  /* Applies to all visited links */
  text-decoration:  none;
  /*  color: #e0e0e0;*/
} 
a.nav-logo:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  /*  color: white;*/
} 
a.nav-logo:hover{
  text-decoration: none;
  color: #a1131b;
}
a.nav-logo:active{
  text-decoration: none;
  color: #a1131b;
}
#header{
  margin-top: 2em;
  width: 15em;
}
.logo-flex{
  display:flex;
}
.nav-flex2{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  width: 30em;
}
.nav-flex{
  display: flex;
  align-items: center;
}
.nav-items{
  margin-left: 1em;
  margin-right: 1em;
}
a.nav-link{
  color:  #E8E7E7;
}
a.nav-link:link {
  /* Applies to all visited links */
  text-decoration:  none;
  color:  #E8E7E7;
} 
a.nav-link:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  color:  #E8E7E7;
} 
a.nav-link:hover{
  text-decoration: none;
  /*  color: #E42832;*/
}
a.nav-link:active{
  text-decoration: none;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
}

.sidenav a {
  display: flex;
  justify-content: flex-start;
  padding: .25em .75em;
  text-decoration: none;
  font-size: 1.5em;
  display: block;
  color: #E8E7E7;
}

.sidenav .closebtn {
  display: flex;
  justify-content: flex-end;
  font-size: 2.3em;
}
.side-nav-full {
  display: none;
}
.opacity-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 998
}
.slide-nav-enter-active{
  transition: all .5s ease;
} 

.slide-nav-leave-active {
  transition: all .75s ease;
}

.slide-nav-enter {
  transform: translateX(-100%);
  width: 0;
}
.slide-nav-leave-to {
  transform: translateX(-100%);
  width: 0;
}

.backdrop-enter-active{
  transition: all .5s ease;
} 

.backdrop-leave-active {
  transition: all .6s ease;
}

.backdrop-enter {
 opacity: 0;
}
.backdrop-leave-to {
  opacity: 0
}
@media (min-width: 850px) {
  a.nav-link:after {
    display:block;
    content: '';
    border-bottom: solid 2px #E42832;
    -webkit-transform: scaleX(0.0001);
    -ms-transform: scaleX(0.0001);
    transform: scaleX(0.0001);
    -webkit-transition: -webkit-transform 250ms ease-in-out;
    transition: transform 250ms ease-in-out;
  }
  a.nav-link:hover:after {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
  }
}
@media (max-width: 850px) {
  .nav-container {
    display: none;
  }
  .sidenav {
    display: flex;
    flex-direction: column;
    width: 18em;
  }
  .side-nav-full {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    padding: .5em;
  }
}

</style>