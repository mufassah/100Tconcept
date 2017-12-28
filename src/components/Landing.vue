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
        src: '/static/images/carousel-mockup-no-light.png',
        title: ''
      },
      {
        src: '/static/images/100t-csgo-redone.png',
        title: ''
      },
      {
        src: '/static/images/100t-aphromoo-redone.png',
        title: ''
      },
      {
        src: '/static/images/pr0lly-redone.png',
        title: ''
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

@media (max-width: 1300px) {
  .app-body {
      padding: 0 5em;
  }
  
}
@media (max-width: 450px) {
  .app-body {
    padding: 0 1em;
  }
}
</style>
