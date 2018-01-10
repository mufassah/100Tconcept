<template>
    <div class="sub-news-row">
    <div class="sub-news-body fade-in" v-for="story in stories" :key="story" :class="story.storyNum">
        <h1 class="featured-header">{{ story.title }}</h1>
        <img :src="story.src">
    </div>
    </div>

</template>

<script>
export default {
    props: ['stories']
}
</script>

<style>
.sub-news-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.sub-news-body {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    min-height: 25em;
    max-height: 25em;
    min-width: 25em;
    max-width: 25em;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sub-news-body > img {
    height: 12em;
}

.fade-in {
	opacity:0;  /* make things invisible upon start */
	-webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
	-moz-animation:fadeIn ease-in 1;
	animation:fadeIn ease-in 1;

	-webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
	-moz-animation-fill-mode:forwards;
	animation-fill-mode:forwards;

	-webkit-animation-duration:1s;
	-moz-animation-duration:1s;
	animation-duration:1s;
}

.fade-in.two {
-webkit-animation-delay: .4s;
-moz-animation-delay:.4s;
animation-delay: .4s;
}

.fade-in.three {
-webkit-animation-delay: .6s;
-moz-animation-delay: .6s;
animation-delay: .6s;
}
</style>