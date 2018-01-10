<template>
	<div class="sub-news">
        <div class="sub-news-row-container" v-for="(number, index) in loaded" :key="number">
		<app-sub-news-row :stories="stories[index]"></app-sub-news-row>
        </div>
        <div class="news-button">
            <a class="news-btn pulse-animation" @click="loaded += 1" v-if="loaded < loadedMax">Load More</a>
        </div>
        <p>{{screenSize}}</p>
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
            loadedMax: 4,
            stories: []
		}
	},
    computed: {
        screenSize () {
            if (screen.width <= 1200 && screen.width > 675 ){
                this.stories = [[{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                }],
                [{
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'two'
                }],
                [{
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'two'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                }],
                [{
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'two'
                }],
                [{
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'two'
                }]]
                this.loadedMax = 6
            }
            else {
                this.stories = [[{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'three'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'three'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'three'
                }],
                [{
                    src: '/static/images/prolly-suit-square.jpg',
                    title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-thumbnail-1.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: 'Welcome Aphromoo to the 100 Thieves Family!',
                    storyNum: 'three'
                }]]
            }
                console.log(screen.width)
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
  }
  .news-btn:hover{
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
</style>