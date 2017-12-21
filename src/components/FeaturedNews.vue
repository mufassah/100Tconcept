<template>
	<div class="featured-news">
		<div class="content-card">
			<h1 class="featured-header">Featured Video</h1>
			<iframe width="560" height="347" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
		</div>
		
		<div class="news-card" v-for="(story, i) in stories" :key="story">
			<div class="content-card" v-if="i === 0">
				
					<h1 class="featured-header">
						News
					</h1>
				<div class="first-story">
				<!-- <div class="story-avatar">
					<img class="featured-image" :src="story.src">
				</div> -->
				<div class="first-story-body" :style="{ backgroundImage: 'url(' + story.src + ')' }">
					<div class="first-story-body-container">
					<h2>{{story.title}}</h2>
					<a href="/#/news" class="story-button">Read More</a>					
					</div>
				</div>
				</div>
				
				
			</div>
			<div v-else>
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
				src: '/static/images/100T-inv-lcs.png',
				title: 'Welcome 100 Thieves to the NALCS!',
				body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				src: '/static/images/pr0lly-news.jpg',
				title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
				body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				src: '/static/images/pr0lly-news.jpg',
				title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
				body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				src: '/static/images/pr0lly-news.jpg',
				title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
				body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			},
			{
				src: '/static/images/pr0lly-news.jpg',
				title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
				body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
			}
			]
		}
	}
}
</script>

<style>
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
}
.first-story {
	display: flex;
	height: 25em;
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
}
.first-story-body-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 5em;
}
</style>