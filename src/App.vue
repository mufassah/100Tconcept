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

<style lang="sass">
  @import 'css/app.sass'
</style>
