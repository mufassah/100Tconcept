<template>
  <div id="app">
    <app-navbar></app-navbar>  
    <transition name="rotate-in" mode="out-in"> 
      <keep-alive>
        <router-view> </router-view>
      </keep-alive>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    appLanding: Landing,
    appNavbar: Navbar,
    appFooter: Footer
  },
  data () {
    return {
    
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'gilroy';
  src: url('./assets/fonts/Gilroy-ExtraBold.otf') format('otf');
  font-weight: normal;
  font-style: normal;
}

body{
  background-color: #252525;
  color: #E8E7E7;
  font-family: 'gilroy', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.rotate-in-enter-active{
  transition: transform .5s ease, opacity .25s;
} 

.rotate-in-leave-active {
  transition: transform .75s, opacity .3s;
}

.rotate-in-enter {
  transform: translateX(50%);
  opacity: 0;
}
.rotate-in-leave-to {
  transform: translateX(-135%);
  opacity: 0;
}


/* .example-1
  
  .belt
    width: 200%
    display: flex
    transition: transform 1s ease-in-out
    perspective: 1000px
    
  .state
    width: 50%
    height: 400px
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

  .state-1
    background: #673AB7
    transition: transform 1s ease-in-out
    transform-origin: center right
  .state-2
    background: #9575CD
    box-shadow: 0px 0px 0px black
    z-index: 2
    transition: all 600ms ease-in-out */
  
  

</style>
