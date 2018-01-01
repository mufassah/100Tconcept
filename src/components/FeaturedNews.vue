<template>
	<div class="featured-news">
		<div class="yt-content-card">
			<h1 class="featured-header">Featured Video</h1>
			<iframe width="560" height="347" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="large-screen"></iframe>
			<iframe width="500" height="280" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="medium-screen"></iframe>
			<iframe width="275" height="150" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="smaller-screen"></iframe>
		</div>

		<div class="twitter-card">
			<h1 class="featured-header">Recent Tweets</h1>
			<app-twitter-feed></app-twitter-feed>
		</div>
		<div class="newsletter-card">
			<h1 class="featured-header">Sign up for our Newsletter!</h1>
			<p class="newsletter-para">Stay up to date on everything 100 Thieves has to offer! Subscribe with your email below!</p>
			<form>
				<div class="form-container">
					<div class="newsletter">      
						<input type="text" required :rules="emailRules">
						<label>Email</label>
					</div>
					<a href="/news" class="story-button pulse-animation">Sign Up</a>
					<a href="/news" class="story-button-small">Sign Up</a>
				</div>
			</form>
		</div>
		<div class="content-card">
			<h1 class="featured-header">Merchandise</h1>
			<div class="merch-images">
				<div class="merch-item">
					<img src="/static/images/hoodie.jpg" class="featured-merch">
				</div>
				<div class="merch-item">
					<img src="/static/images/tshirt.jpg" class="featured-merch">
				</div>
			</div>
			<div class="merch-ad">
				<h2>Purchase these and many more in the Store!</h2>
				<a href="https://www.100thieves.com/store/" class="story-button pulse-animation">Browse</a>
				<a href="https://www.100thieves.com/store/" class="story-button-small">Browse </a>
			</div>
		</div>
	</div>

</template>

<script>
import TwitterFeeds from './TwitterFeeds'

export default {
	components: {
		appTwitterFeed: TwitterFeeds
	},
	data () {
		return {
			tweets: []
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
	.first-story-body {
		background-image: url('/static/images/inv-lcs-temp.jpg') !important;
	}
}
@media (max-width: 525px) {
	.first-story-body {
		background-image: url('/static/images/inv-lcs-tall.jpg') !important;
	}
}

</style>