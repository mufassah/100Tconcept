<template>
	<div class="featured-news">
		<app-featured-video></app-featured-video>
		<app-first-news-story class="non-desktop-view"></app-first-news-story>
        <div class="news-card non-desktop-view" v-for="story in stories" :key="story">
            <div>
                <app-home-news-block :story="story"></app-home-news-block>
            </div>
        </div>
		<app-twitter-feed></app-twitter-feed>
		<app-merch class="non-desktop-view"></app-merch>
		<app-newsletter></app-newsletter>
		<app-merch class="desktop-view"></app-merch>
	</div>

</template>

<script>
import TwitterFeeds from './TwitterFeeds'
import Newsletter from './Newsletter'
import Merch from './Merch'
import FeaturedVideo from './FeaturedVideo'
import NewsBlock from './NewsBlock'
import FirstNewsStory from './FirstNewsStory'

export default {
	components: {
		appHomeNewsBlock: NewsBlock,
        appFirstNewsStory: FirstNewsStory,
		appTwitterFeed: TwitterFeeds,
		appNewsletter: Newsletter,
		appMerch: Merch,
		appFeaturedVideo: FeaturedVideo
	},
	data () {
		return {
			tweets: []
		}
	}
}
</script>

<style>
.featured-news {
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-right: 1em;
}
@media (min-width: 1300px) {
	.non-desktop-view {
		display: none !important;
	}
}
@media (max-width: 1300px) {
	.featured-news {
		margin-right: 0;
	}
}
</style>