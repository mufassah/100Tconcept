<template>
  <div class="app-body">
    <app-carousel :items="items"></app-carousel>
    <app-main-content></app-main-content>      
  </div>
</template>

<script>
import MainContent from './MainContent'
import AppCarousel from './AppCarousel'
export default {
  name: 'app',
  components: {
    appMainContent: MainContent,
    AppCarousel
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
  width: 100%;
  max-width: 88.3em;
  margin: auto;
}

</style>
