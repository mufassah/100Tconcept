<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="app-body">
      <app-carousel :items="items"></app-carousel>
      <app-main-content></app-main-content>      
    </div>
    <router-view/>
  </div>
</template>

<script>
import MainContent from './components/MainContent'
import AppCarousel from './components/AppCarousel'
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    appMainContent: MainContent,
    AppCarousel,
    appNavbar: Navbar
  },
  data () {
    return {
      items: [
      {
        src: '/static/images/aphromoo-news.jpg'
      },
      {
        src: '/static/images/aphromoo-news.jpg'
      },
      {
        src: '/static/images/aphromoo-news.jpg'
      },
      {
        src: '/static/images/aphromoo-news.jpg'
      }
      ]
    }
  }
}
</script>

<style>
.app-body {
  width: 65%;
  margin: auto;
}
body{
  background-color: #252525;
  font-family: 'gilroy', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
