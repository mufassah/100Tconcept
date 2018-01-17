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

<style>

/*.featured-content {
    flex: 1;
    border-radius: 50px;
}	
.content-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
    margin-bottom: 1em;
    min-height: 33em;
    max-height: 33em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-card iframe {
  box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
  height: 24.5em;
}
.featured-header {
    border-left: 4px solid;
    padding-left: .5em;
    border-color: #C71C26;
    margin-bottom: 1em;
    display: flex;
    justify-content: flex-start;
    width: 100%;
}
.pulse-animation{
    height: 2.5em;
    width: 8em;
    text-align: center;
    
    border-radius: 3px;
    line-height: 2.5em;
    color: #e0e0e0;
    cursor: pointer;
    animation: pulse 3s ease-in-out infinite;
}
.pulse-animation:link {
  text-decoration:  none;
} 
.pulse-animation:visited {
  text-decoration:  none;
} 

@keyframes pulse{
  0%, 70% {
    box-shadow: 0px 0px 0px 0px rgba(220,220,220,.5)
}
100%{
    box-shadow: 0 0px 0px 7px rgba(250, 115, 115, 0)
}
}
@media (max-width: 1300px) {
    .desktop-view {
        display: none;
    }
}
@media (max-width: 850px) {
    .content-card {
        width: 100%;
        min-height: 10em;
    }
    .content-card iframe {
        height: auto;
    }
    .news-card {
		display: none;
	}
}*/

</style>