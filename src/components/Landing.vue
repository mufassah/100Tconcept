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
        link: '/#/news'
      },
      {
        src: '/static/images/100t-csgo-redone.png',
        link: '/#/news'
      },
      {
        src: '/static/images/100t-aphromoo-redone.png',
        link: '/#/news'
      },
      {
        src: '/static/images/pr0lly-redone.png',
        link: '/#/news'
      }
      ]
    }
  }
}
</script>

<style lang="sass">
  @import '../css/landing.sass'
</style>
