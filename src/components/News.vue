<template>
	<div class="news-home">
		<app-main-news></app-main-news>
		<app-sub-news></app-sub-news>
	</div>
</template>

<script>
import MainNews from './MainNews'
import SubNews from './SubNews'
export default {
	components: {
		appMainNews: MainNews,
		appSubNews: SubNews
	}
}
</script>
