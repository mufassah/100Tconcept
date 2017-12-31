<template>
	<v-carousel hide-delimiters
	interval=10000>
	<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i">
		<a :href="item.link" class="carousel-item-header">
		</a>
	</v-carousel-item>
</v-carousel>
</template>

<script>
	export default {
		props: ['items']
	}
</script>

<style lang="sass">
	@import '../css/app-carousel.sass'
</style>