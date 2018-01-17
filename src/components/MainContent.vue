<template>
	<div class="main-content">
		<app-featured-news></app-featured-news>
		<app-featured-content></app-featured-content>
	</div>
</template>

<script>
import FeaturedContent from './FeaturedContent'
import FeaturedNews from './FeaturedNews'

export default {
	components: {
		appFeaturedContent: FeaturedContent,
		appFeaturedNews: FeaturedNews
	}
}
</script>

<style>
	/*.main-content {
		display: flex;
		margin-top: 1em;
	}

	@media (max-width: 1300px) {
		.main-content {
			flex-direction: column;
		}
	}*/
</style>