<template>
    <div class="featured-content">
        <div class="featured-news-card">
          <div class="content-card">
              <div class="featured-header">
               <h1>
                News
            </h1>
        </div>
        <div class="first-story">
				<!-- <div class="story-avatar">
					<img class="featured-image" :src="story.src">
				</div> -->
				<div class="first-story-body" :style="{ backgroundImage: 'url(' + featuredStory.src + ')' }">
					<div class="first-story-body-container">
						<h2>{{featuredStory.title}}</h2>
						<a href="/news" class="story-button pulse-animation">Read More</a>
						<a href="/news" class="story-button-small">Read More</a>					
					</div>
				</div>
			</div>


		</div>
  </div>
  <div class="news-card" v-for="(story, i) in stories" :key="story">

   <div>
    <app-home-news-block :story="story"></app-home-news-block>
</div>
</div>
<div class="content-card">
    <h1 class="featured-header">100 Thieves Schedule</h1>
    <v-tabs fixed centered>
        <v-tabs-bar class="my-bar">
          <v-tabs-slider class="my-slider"></v-tabs-slider>
          <v-tabs-item
          v-for="i in items"
          :key="i.game"
          :href="'#tab-' + i.game"
          >
          <h3 class="large-tab-head">
              {{ i.game }}
          </h3>
          <h3 class="small-tab-head">
              {{ i.smallGame }}
          </h3>
      </v-tabs-item>
  </v-tabs-bar>

  <v-tabs-items class="sched">
    <v-tabs-content
    v-for="i in items"
    :key="i.game"
    :id="'tab-' + i.game"
    >
    <v-card flat>
        <v-card-text>
            <div class="schedule-column">
                <div class="sched-info">
                    <h3> Next Event: </h3>
                    <h4> {{ i.smallEvent.title }} </h4>
                    <h4> {{ i.smallEvent.date }} </h4>
                </div>
                <div class="sched-img">
                    <img :src="i.smallEvent.image">
                </div>
            </div>
        </v-card-text>
    </v-card>
</v-tabs-content>
</v-tabs-items>
</v-tabs>
</div>

</div>
</template>

<script>
import NewsBlock from './NewsBlock'

export default {
    components: {
       appHomeNewsBlock: NewsBlock
   },
   data() {
    return {
        email: '',
        emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        dates: ['December 17', 'December 18', 'December 19', 'December 20', 'December 21', 'December 22', 'December 23'],
        items: [{
            game: 'League of Legends',
            smallGame: 'LoL',
            smallEvent: {title: 'LCS 100T vs OpTiC Gaming', date: 'January 20th 6:00PM EST', image: '/static/images/nalcs.png'},
            events: ['LCS vs TSM - W', 'LCS vs Liquid - 4:00pm', '', '', '', '', 'LCS vs GGS - 3:00pm' ]
        }, 
        {
            game: 'CS:GO',
            smallGame: 'CS:GO',
            smallEvent: {title: 'ELEAGUE Boston Major', date: 'January 26-28th 2018', image: '/static/images/eleagueBoston.png'},
            events: ['LCS vs TSM - W', 'LCS vs Liquid - 4:00pm', '', '', '', '', 'LCS vs GGS - 3:00pm' ]
        }
        ],
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
     ],
     featuredStory: 
     {
         src: '/static/images/welcome-100t-featured-news.png',
         title: '',
         body: ''
     }
 }

}
}
</script>

<style>


.twitter-element-container {
    width: 100%;
}
.twitter-element {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    background-color: #2f2f2f;
    display: flex;
    padding: .5em;
    width: 100%;
    margin-bottom: .9em;
    height: 6em;
    text-decoration: none;
    color: #E8E7E7;
}
.twitter-element:hover {
    background-color: #1d1c1c;
}
.tweet-avatar {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;

}
.tweet-body {
    flex: 5;
    display: flex;
    flex-direction: column;
    padding: .2em .5em;
}
.tabs {
  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
  height: 24.5em;
}
.tabs__items {
  background-color:#2d2b2b;
}
.card {
    padding: 0 1em;
    height: 100% !important;
}
.card__text {
    padding: 0 .3em !important;
    height: 100%;
    
}
.schedule-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    padding: 0 .5em;
    height: 2.17em;
}
.my-bar {
    background-color: #0f0f0f;
}
.my-slider {
    background-color: #C71C26;
    border-color: #C71C26;
}
.twitter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.newsletter {
    position: relative;
    width: 23em;
    display: flex;
}
.newsletter-para {
    margin-top: 2.5em;
    margin-bottom: 2em;
    padding-left: 1em;
    font-size: 1.2em;
}
form {
    padding-left: 1em;
    padding-right:3em;
}
label{
    display: block;
    position: absolute;
    pointer-events: none;
    top: 10px;
    left: 0px;
    font-size: 1.2em;
    z-index: 1;
    transition: all .3s ease-out;
}
input {
    display: block;
    background: none;
    border: none;

    border-bottom: 1px solid #C71C26 !important;

    width: 100%;
    font-weight: normal;
    font-size: 16px;
    z-index: 2;
    caret-color: #e0e0e0;
}
input:focus	{
    outline:none;
}
input:focus ~ label, input:valid ~ label {
    top:-10px;
    font-size:.9em;
    color: #C71C26;
}
.featured-content {
    flex: 1;
    border-radius: 50px;
}	
.content-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    min-height: 33em;
    max-height: 33em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.content-card iframe {
  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
  height: 24.5em;
}
.twitter-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    height: 56em;
    /*
    border: 3px solid #a1131b;
    border-radius: 50px;
    /*/
}
.newsletter-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    min-height: 18em;
    max-height: 18em;
    /* 
    border: 3px solid #a1131b;
    border-radius: 50px;
    */
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
.featured-merch {
    height: 18em;
}
.merch-images {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1em;
    width: 100%;
}
.merch-item img {
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.merch-ad {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 6em;
}
.form-container {
    display: flex;
    justify-content: space-between;
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
.small-tab-head {
    display: none;
}
.sched {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 21em;
}
.schedule-column {
    display: flex;
    justify-content: space-around;
    height: 100%;
}
.sched-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.sched-img {
    display: flex;
    align-items: center;
    justify-content: center;
}
.tabs__content{
    height: 100%;
}
.schedule-column img {
    width: 15em;
}

@keyframes pulse{
  0%, 70% {
    box-shadow: 0px 0px 0px 0px rgba(220,220,220,.5)
}
100%{
    box-shadow: 0 0px 0px 7px rgba(250, 115, 115, 0)
}
}

@media (min-width: 1300px) {
    .sched-info {
        font-size: 1.1em;
    }
}
@media (max-width: 1300px) {
    .sched-info {
        font-size: 1.5em;
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
    .newsletter-card {
        min-height: 20em;
    }
    .sched {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .schedule-column {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 1em;

    }
    .sched-info {
        padding-top: 1em;
        font-size: 1em;
    }
}

@media (max-width: 600px) {
    .large-tab-head {
        display: none;
    }
    .small-tab-head {
        display: flex;
    }
}
@media (max-width: 450px) {
    .featured-merch {
        height: 9em;
    }
    .schedule-column img {
        width: 10em;
    }
    
}

</style>