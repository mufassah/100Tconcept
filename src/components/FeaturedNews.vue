<template>
	<div class="featured-news">
		<div class="yt-content-card">
			<h1 class="featured-header">Featured Video</h1>
			<iframe width="560" height="347" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="large-screen"></iframe>
			<iframe width="500" height="280" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="medium-screen"></iframe>
			<iframe width="275" height="150" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="smaller-screen"></iframe>
		</div>
		<div class="featured-news-card">
		<div class="content-card">
		<div class="featured-header">
			<h1>
				News
			</h1>
			</div>
			<div class="first-story">
				<!-- <div class="story-avatar">
					<img class="featured-image" :src="story.src">
				</div> -->
				<div class="first-story-body" :style="{ backgroundImage: 'url(' + featuredStory.src + ')' }">
					<div class="first-story-body-container">
						<h2>{{featuredStory.title}}</h2>
						<a href="/#/news" class="story-button pulse-animation">Read More</a>
						<a href="/#/news" class="story-button-small">Read More</a>					
					</div>
				</div>
			</div>


		</div>
		</div>

		<div class="news-card" v-for="(story, i) in stories" :key="story">
			
			<div>
				<app-home-news-block :story="story"></app-home-news-block>
			</div>
			
		</div>
	</div>

</template>

<script>
	import NewsBlock from './NewsBlock'
	export default {
		components: {
			appHomeNewsBlock: NewsBlock
		},
		data () {
			return {
				stories: [
				{
					src: '/static/images/prolly-suit-square.jpg',
					title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
				},
				{
					src: '/static/images/csgo-thumbnail-1.png',
					title: '100 Thieves acquires CS:GO team!',
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
				},
				{
					src: '/static/images/aphromoo-square.png',
					title: 'Welcome the newest addition to the League of Legends Roster, Aphromoo!',
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
				},
				{
					src: '/static/images/hoodie.jpg',
					title: '100 Thieves merchandise is on sale now!',
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
				}
				],
				featuredStory: 
				{
					src: '/static/images/welcome-100t-featured-news.png',
					title: '',
					body: ''
				}
			}
		}
	}
</script>

<style lang="sass">
 @import '../css/featured-news.sass'
</style>