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
					src: '/static/images/100t-csgo-square.jpg',
					title: '100 Thieves acquires CS:GO team!',
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
				},
				{
					src: '/static/images/aphromoo-news-square.jpg',
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
					src: '/static/images/100T-inv-lcs.png',
					title: 'Welcome 100 Thieves to the NALCS!',
					body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
				}
			}
		}
	}
</script>

<style>
	.yt-content-card {
	    background-color: #1d1d1d;
	    padding: 2em;
	    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
	    margin-bottom: 1em;
	    min-height: 33em;
	    max-height: 33em;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	}
	.yt-content-card iframe {
	  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
	  height: 24.5em;
	}
	.smaller-screen {
		display: none;
	}
	
	.featured-image {
		width: 100%
	}
	.recent-news {
		background-color: #1d1d1d;
		padding: 2em;
	}
	.featured-news {
		display: flex;
		flex-direction: column;
		flex: 1;
		margin-right: 1em;
		/*border-radius: 50px;*/
	}
	.first-story {
		display: flex;
		height: 25em;
		width: 100%;
		background-size: cover;
		box-shadow: 0 2px 6px 2px rgba(0,0,0,.2), 0 1px 4px 2px rgba(0,0,0,.14), 0 2px 1px 2px rgba(0,0,0,.12);
	}
	.first-story-body {
		flex: 3;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding: 1em;
		background-size: cover;
		background-position: center center;
	}
	.first-story-body-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 5em;
	}
	@media (min-width: 851px) {
		.smaller-screen {
			display: none;
		}
		.medium-screen {
			display: none;
		}
	}
	@media (max-width: 1300px) {
		.featured-news {
			margin-right: 0;
		}
		.story-avatar {
			flex: 1 !important;
		}
		.story-avatar img {
			width: 15em !important;
		}
	}
	@media (max-width: 850px) {
		.yt-content-card {
	        width: 100%;
	        min-height: 10em;
	    }
	    .yt-content-card iframe {
	        height: 20em;
	    }
		.news-card {
			display: none;
		}
		.featured-news {
			margin-right: 0;
		}
		.medium-screen {
			display: inline-block;
		}
		.smaller-screen {
			display: none;
		}
		.large-screen {
			display: none;
		}
		
	}
	@media (max-width: 650px) {
		.yt-content-card iframe {
			height: auto;
		}
		.medium-screen {
			display: none;
		}
		.smaller-screen {
			display: inline-block;
		}
	}

</style>