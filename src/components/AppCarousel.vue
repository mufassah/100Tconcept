<template>
	<v-carousel hide-delimiters
	interval=10000>
	<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i">
		<router-link :to="item.link" class="carousel-item-header">
		</router-link>
	</v-carousel-item>
</v-carousel>
</template>

<script>
export default {
	props: ['items']
}
</script>
