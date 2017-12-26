<template>
	<v-carousel hide-delimiters
	interval=10000>
	<v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i">
		<a href="/#/news" class="carousel-item-header">
			<h1>{{item.title}}</h1>
		</a>
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
  height: 27em !important;
  color: #E8E7E7;
}
.carousel-item-header {
	height: 100%;
	display: flex;
	align-items: flex-end;
	padding: 1em;
}
a.carousel-item-header:link {
  /* Applies to all visited links */
  text-decoration:  none;
} 
a.carousel-item-header:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  color: #E8E7E7;
} 
a.carousel-item-header:hover{
  text-decoration: none;
}
a.carousel-item-header:active{
  text-decoration: none;
}
@media (max-width: 850px) {
		.carousel {
			display: none;
		}
	}
</style>