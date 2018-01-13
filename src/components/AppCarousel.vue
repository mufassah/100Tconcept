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

<style>
.carousel {
	height: 30em !important;
	color: #E8E7E7;
	box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
}
.carousel__item {
	background-size: contain !important;
}
.carousel-item-header {
	height: 100%;
	display: flex;
	align-items: flex-end;
	width: 100%;
}
.carousel-item-header h1 {
	color: #E8E7E7;
}
a.carousel-item-header:link {
	/* Applies to all visited links */
	text-decoration: none;
	color: #E8E7E7;
} 
a.carousel-item-header:visited {
	/* Applies to all visited links */
	text-decoration: none;
	color: #E8E7E7;
} 
a.carousel-item-header:hover{
	text-decoration: none;
	color: #E8E7E7;
}
a.carousel-item-header:active{
	text-decoration: none;
	color: #E8E7E7;
}
@media (max-width: 1300px) {
	.carousel {
		height: 26.65em !important;
	}
}
@media (max-width: 850px) {
	.carousel {
		display: none;
	}
}
</style>