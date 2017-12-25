<template>
    <div @mouseover="showButton = true" @mouseleave="showButton = false" class="news-block">
		<div class="story-avatar">
			<img :src="story.src">
	    </div>
		<div class="story-body">
			<h3>{{story.title}}</h3>
			<p>{{story.body}}</p>
            <transition name="slide-button">
			    <a href="/#/news" class="story-button" v-if="showButton">Read More</a>
            </transition>
		</div>
	</div>
</template>

<script>
export default {
    props: ['story'],
    data() {
        return {
			showButton: false
        }
    }
}
</script>

<style>
.story-avatar {
	flex: 1;
	padding: 1em;
}
.story-avatar img {
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.story-body {
	flex: 3;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em;
}
.story-button {
    height: 2.5em;
    background: #BC151E;
    width: 8em;
	text-align: center;
    font-weight: bold;
    font-size: 1.1em;
    border-radius: 3px;
    line-height: 2.5em;
    color: #e0e0e0;
    cursor: pointer;
    /*-webkit-transition: all ease-in-out 200ms;
    transition: all ease-in-out 200ms;
    Wanted to see what the purpose of this thing was, couldn't figure it out. Didn't put much time into it */
}
.story-button:hover{
	/* box-shadow: 0 -1px 1px 1px rgba(224,224,224,.5), 0 0px 2px 3px rgba(224,224,224,.44), 0 1px 5px 3px rgba(224,224,224,.42); */
	text-decoration: none;
}

.story-button:link {
  text-decoration:  none;
} 
.story-button:visited {
  text-decoration:  none;
} 

.slide-button-enter-active, .slide-button-leave-active {
  transition: all .3s;
}

.slide-button-enter {
  transform: translateY(35%) scale(.2);
  opacity: 0;
}
.slide-button-leave-to {
  transform: translateY(35%) scale(.2);
  opacity: 0;
}
.news-block {
	display: flex;
	background-color: #1d1d1d;
	padding: .25em;
	margin-bottom: 1em;
	border-left: 3px solid;
 	padding: .5em;
	height: 18em;
  border-color: #C71C26;
  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
  /*border-radius: 50px;*/
}
</style>
