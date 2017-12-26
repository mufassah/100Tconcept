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
        src: '/static/images/100T-inv-lcs.png'
      },
      {
        src: '/static/images/100t-csgo.png'
      },
      {
        src: '/static/images/aphromoo-news.jpg'
      },
      {
        src: '/static/images/prolly-suit.jpg'
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

@media (max-width: 850px) {
  .app-body {
    padding: 0 1.5em;
  }
}
</style>
