<template>
	<div class="sub-news">
        <transition-group name="slide-up">
            <div class="sub-news-row-container" v-for="(number, index) in loaded" :key="number">
                <app-sub-news-row :stories="stories[index]"></app-sub-news-row>
            </div>
        </transition-group>
        <div class="news-button">
            <a class="news-btn pulse-animation" @click="loaded += 1" v-if="loaded < loadedMax">Load More</a>
        </div>
        <p>{{screenSize}}</p>
	</div>

</template>

<script>
import SubNewsRow from './SubNewsRow'
export default {
    components: {
        appSubNewsRow: SubNewsRow
    },
	data () {
		return {
            loaded: 1,
            loadedMax: 4,
            stories: [[{
                    src: '/static/images/dec-update-100t2.png',
                    title: '100 Thieves Monthly Recap',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-bg.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: '100 Thieves signs Aphromoo!',
                    storyNum: 'three'
                }],
                [{
                    src: '/static/images/dec-update-100t2.png',
                    title: '100 Thieves Monthly Recap',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-bg.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: '100 Thieves signs Aphromoo!',
                    storyNum: 'three'
                }],
                [{
                    src: '/static/images/dec-update-100t2.png',
                    title: '100 Thieves Monthly Recap',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-bg.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: '100 Thieves signs Aphromoo!',
                    storyNum: 'three'
                }],
                [{
                    src: '/static/images/dec-update-100t2.png',
                    title: '100 Thieves Monthly Recap',
                    storyNum: 'one'
                },
                {
                    src: '/static/images/csgo-bg.png',
                    title: '100 Thieves acquires CS:GO team!',
                    storyNum: 'two'
                },
                {
                    src: '/static/images/aphromoo-square.png',
                    title: '100 Thieves signs Aphromoo!',
                    storyNum: 'three'
                }]]
		}
	},
    computed: {
        screenSize () {
            // if (screen.width <= 1200 && screen.width > 675 ){
            //     this.stories = [[{
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'two'
            //     }],
            //     [{
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'two'
            //     }],
            //     [{
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'two'
            //     }],
            //     [{
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'two'
            //     }],
            //     [{
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'two'
            //     }],
            //     [{
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'two'
            //     }]]
            //     this.loadedMax = 6
            // }
            // else {
            //     this.stories = [[{
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'two'
            //     },
            //     {
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'three'
            //     }],
            //     [{
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'two'
            //     },
            //     {
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'three'
            //     }],
            //     [{
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'two'
            //     },
            //     {
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'three'
            //     }],
            //     [{
            //         src: '/static/images/prolly-suit-square.jpg',
            //         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
            //         storyNum: 'one'
            //     },
            //     {
            //         src: '/static/images/csgo-thumbnail-1.png',
            //         title: '100 Thieves acquires CS:GO team!',
            //         storyNum: 'two'
            //     },
            //     {
            //         src: '/static/images/aphromoo-square.png',
            //         title: 'Welcome Aphromoo to the 100 Thieves Family!',
            //         storyNum: 'three'
            //     }]]
            // }
        }  
    }
}
</script>