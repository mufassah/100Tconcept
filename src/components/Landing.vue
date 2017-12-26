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
        src: '/static/images/100T-inv-lcs.png',
        title: 'Welcome 100 Thieves to the NALCS!'
      },
      {
        src: '/static/images/100t-csgo.png',
        title: '100 Thieves acquires CS:GO team!'
      },
      {
        src: '/static/images/aphromoo-news.jpg',
        title: 'Welcome the newest addition to the League of Legends Roster, Aphromoo!'
      },
      {
        src: '/static/images/prolly-suit.jpg',
        title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.'
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
</style>
