<template>
  <div @mouseover="showButton = true" @mouseleave="showButton = false" class="news-block">
    <div class="story-avatar">
     <img :src="story.src">
   </div>
   <div class="story-body">
     <h3>{{story.title}}</h3>
     <p>{{story.body}}</p>
     <transition name="slide-button">
       <a href="/#/news" class="story-button" v-if="showButton">Read More</a>
     </transition>
     <a href="/#/news" class="story-button-small">Read More</a>
   </div>
 </div>
</template>

<script>
  export default {
    props: ['story'],
    data() {
      return {
       showButton: false
     }
   }
 }
</script>

<style lang="sass">
  @import '../css/news-block.sass'
</style>
