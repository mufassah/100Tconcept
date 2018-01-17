<template>
    <div class="featured-content">
        <app-first-news-story class="desktop-view"></app-first-news-story>
        <div class="news-card desktop-view" v-for="story in stories" :key="story">
            <div>
                <app-home-news-block :story="story"></app-home-news-block>
            </div>
        </div>
        <app-schedule></app-schedule>
    </div>
</template>

<script>
import NewsBlock from './NewsBlock'
import FirstNewsStory from './FirstNewsStory'
import Schedule from './Schedule'

export default {
    components: {
       appHomeNewsBlock: NewsBlock,
       appFirstNewsStory: FirstNewsStory,
       appSchedule: Schedule
   },
   data() {
    return {
        stories: [
        {
         src: '/static/images/prolly-suit-square.jpg',
         title: 'Meet Pr0lly, The NA LCS Coach For 100 Thieves.',
         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
     },
     {
         src: '/static/images/csgo-thumbnail-1.png',
         title: '100 Thieves acquires CS:GO team!',
         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
     },
     {
         src: '/static/images/aphromoo-square.png',
         title: 'Welcome the newest addition to the League of Legends Roster, Aphromoo!',
         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
     },
     {
         src: '/static/images/hoodie.jpg',
         title: '100 Thieves merchandise is on sale now!',
         body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.'
     }
     ]
 }

}
}
</script>
