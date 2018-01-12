<template>
    <div class="sub-news-row">
    <div class="sub-news-body fade-in" v-for="story in stories" :key="story" :class="story.storyNum" 
            :style="{backgroundImage: 'url(' + story.src + ')'}">
        <h1 class="sub-news-header">{{ story.title }}</h1>
        <!-- <img :src="story.src"> -->
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
    display: grid;
    grid-gap: 2em 2em;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    height: 100%;
    width: 100%;
}

.sub-news-body {
    background-color: #1d1d1d;
    padding: 4em;
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
    /*padding-bottom:30%;
    margin: 0em 0em 4em 0em;*/
    flex: 1;
    background-size: cover;
    position: relative;
}
.sub-news-header {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 .2em .6em .2em;
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
-webkit-animation-delay: .8s;
-moz-animation-delay: .8s;
animation-delay: .8s;
}
@media (max-width: 1200px) {
    .sub-news-row {
        justify-content: space-around;
    }
}
@media (max-width: 860px) {
    .sub-news-header {
        font-size: 1.5em;
    }
}
@media (max-width: 675px) {
    .sub-news-row {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .sub-news-body {
        width:100%;
        padding-bottom:100%;
    }
    .sub-news-header {
        font-size: 2em;
    }
}
@media (max-width: 550px) {
    .sub-news-header {
        font-size: 1.5em;
    }
}

</style>