<template>
	<div class="featured-news">
		<div class="content-card">
			<h1 class="featured-header">Featured Video</h1>
			<iframe width="560" height="347" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
		</div>
		
		<div class="news-card" v-for="(story, i) in stories" :key="story">
			<div class="content-card" v-if="i === 0">
				
					<h1 class="featured-header">
						Recent News
					</h1>
				<div class="first-story">
				<div class="story-avatar">
					<img :src="story.src">
				</div>
				<div class="story-body">
					<h3>{{story.title}}</h3>
					<p>{{story.body}}</p>
				</div>
				</div>
				
				
			</div>
			<div class="news-block" v-else>
				<div class="story-avatar">
				<img :src="story.src">
			</div>
			<div class="story-body">
				<h3>{{story.title}}</h3>
				<p>{{story.body}}</p>
			</div>
			</div>
			
		</div>
	</div>

</template>

<script>
export default {
	data () {
		return {
			stories: [
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
.featured-story {
	margin-bottom: 1em;
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.recent-news {
	background-color: #1d1d1d;
	padding: 2em;
}
.first-story {
	display: flex;
}
.featured-news {
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-right: 1em;
}
.news-block {
	display: flex;
	background-color: #1d1d1d;
	padding: .25em;
	margin-bottom: 1em;
	border-left: 4px solid;
 	padding-left: .5em;
	height: 18em;
  border-color: #ef3232;
  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.story-avatar {
	flex: 1;
	padding: 1em;
}
.story-avatar img {
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.story-body {
	flex: 3;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em;
}
</style>