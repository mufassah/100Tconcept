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
				<div class="first-story-body" @mouseover="showButton = true" @mouseleave="showButton = false" :style="{ backgroundImage: 'url(' + story.src + ')' }">
					<div class="first-story-body-container">
					<h2>{{story.title}}</h2>
					<transition name="slide-button">
					<a href="/#/news" class="story-button" v-if="showButton">Read More</a>
					</transition>
					</div>
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
				src: '/static/images/inv-lcs.png',
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
			],
			showButton: false
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
.first-story {
	display: flex;
	height: 25em;
    background-size: cover;
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
.story-button {
    height: 2.5em;
    background: #ef3232;
    width: 8em;
	text-align: center;
    
    border-radius: 3px;
    line-height: 2.5em;
    color: #e0e0e0;
    cursor: pointer;
    -webkit-transition: all ease-in-out 200ms;
    transition: all ease-in-out 200ms;
}
.story-button:hover{
	box-shadow: 0 -1px 1px 1px rgba(224,224,224,.5), 0 0px 2px 3px rgba(224,224,224,.44), 0 1px 5px 3px rgba(224,224,224,.42);
	text-decoration: none;
}

.story-button:link {
  text-decoration:  none;
} 
.story-button:visited {
  text-decoration:  none;
} 

.slide-button-enter-active, .slide-button-leave-active {
  transition: all .3s;
}

.slide-button-enter {
  transform: translateY(35%);
  opacity: 0;
}
.slide-button-leave-to {
  transform: translateY(35%);
  opacity: 0;
}

</style>