<template>
    <div class="sub-news-row">
    <div class="sub-news-body fade-in" v-for="story in stories" :key="story" :class="story.storyNum" 
            :style="{backgroundImage: 'url(' + story.src + ')'}">
        <p class="sub-news-header">{{ story.title }}</p>
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 88.3em;
}
.sub-news-body {
    background-color: #1d1d1d;
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
    height: 0; 
    width:32%;
    padding-bottom:32%; 
    margin: .5em;
    background-size: cover;
    position: relative;
    display: table;
}
.sub-news-header {
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 .2em .6em .2em;
    width: 100%;
    font-size: 1.4em;
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
@media (max-width: 750px) {
    .sub-news-header {
        font-size: 1.2em;
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
@media (max-width: 500px) {
    .sub-news-header {
        font-size: 1.8em;
    }
}
</style>