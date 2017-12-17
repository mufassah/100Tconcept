<template>
  <div id="app">
    <app-navbar></app-navbar>   
    <router-view> </router-view>
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
  color: #e0e0e0;
  font-family: 'gilroy', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
