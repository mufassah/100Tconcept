<template>
	<div class="sub-news">
        <transition-group name="slide-in-left">
        <div class="sub-news-row-container" v-for="(number, index) in loaded" :key="number">
		<app-sub-news-row :stories="stories[index]"></app-sub-news-row>
        </div>
        </transition-group>
        <div class="news-button">
            <a class="news-btn pulse-animation" @click="loaded += 1" v-if="loaded < 4">Load More</a>
        </div>
	</div>

</template>

<script>
import SubNewsRow from './SubNewsRow'
export default {
    components: {
        appSubNewsRow: SubNewsRow
    },
	data () {
		return {
            loaded: 1,
            stories: [
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!'
                }]
            ]
		}
	}
}
</script>

<style>
.news-button {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
}
.news-btn {
  height: 2.5em;
  background: #a1131b;
  width: 8em;
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
  border-radius: 3px;
  line-height: 2.5em;
  color: #e0e0e0;
  cursor: pointer;
    /*-webkit-transition: all ease-in-out 200ms;
    transition: all ease-in-out 200ms;
    Wanted to see what the purpose of this thing was, couldn't figure it out. Didn't put much time into it */
  }
  .news-btn:hover{
   /* box-shadow: 0 -1px 1px 1px rgba(224,224,224,.5), 0 0px 2px 3px rgba(224,224,224,.44), 0 1px 5px 3px rgba(224,224,224,.42); */
   text-decoration: none;
 }

 .news-btn:link {
  text-decoration:  none;
} 
.news-btn:visited {
  text-decoration:  none;
} 
.sub-news {
    display: flex;
    flex-direction: column;
}
.sub-news-row-container {
    display: flex;
    justify-content: space-between;
}
.slide-in-left-enter-active{
  transition: transform .75s ease, opacity .75s;
} 
.slide-in-left-enter {
  transform: translateX(50%);
  opacity: 0;
}
</style>