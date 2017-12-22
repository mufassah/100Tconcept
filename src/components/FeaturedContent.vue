<template>
    <div class="featured-content">
        <div class="content-card">
            <h1 class="featured-header">100Thieves Schedule</h1>
            <v-tabs fixed centered>
                <v-tabs-bar class="my-bar">
                      <v-tabs-slider class="my-slider"></v-tabs-slider>
                      <v-tabs-item
                            v-for="i in items"
                        :key="i.game"
                        :href="'#tab-' + i.game"
                      >
                    {{ i.game }}
                      </v-tabs-item>
                </v-tabs-bar>
                <v-tabs-items>
                    <v-tabs-content
                        v-for="i in items"
                        :key="i.game"
                        :id="'tab-' + i.game"
                    >
                        <v-card flat>
                              <v-card-text
                              v-for="(event, index) in i.events"
                              :key="event"
                              >
                              <div class="schedule-row">
                              <p>{{dates[index]}}</p>
                              <p>{{ event }}</p>
                              </div>
                            </v-card-text>
                        </v-card>
                      </v-tabs-content>
                </v-tabs-items>
              </v-tabs>
        </div>
        <div class="content-card">
            <h1 class="featured-header">Merchandise</h1>
            <div class="merch-images">
                <div class="merch-item">
                    <img src="/static/images/hoodie.jpg" class="featured-merch">
                </div>
                <div class="merch-item">
                    <img src="/static/images/tshirt.jpg" class="featured-merch">
                </div>
            </div>
            <div class="merch-ad">
            <h2>Purchase these and many more in the Store!</h2>
            <a href="https://www.100thieves.com/store/" class="story-button pulse-animation">Browse</a>
            </div>
        </div>
        <div class="twitter-card">
            <h1 class="featured-header">Recent Tweets</h1>
            <div class="twitter-container">
                <a class="twitter-timeline" data-width="520" data-height="600" data-theme="dark" data-link-color="#e0e0e0" href="https://twitter.com/100Thieves?ref_src=twsrc%5Etfw">Tweets by 100Thieves</a><script2 src="https://platform.twitter.com/widgets.js" charset="utf-8"></script2>
            </div>
        </div>
        <div class="newsletter-card">
            <h1 class="featured-header">Sign up for our Newsletter!</h1>
            <p class="newsletter-para">Stay up to date on everything 100 Thieves has to offer! Subscribe with your email below!</p>
            <form>
                <div class="form-container">
                <div class="newsletter">      
                    <input type="text" required :rules="emailRules">
                    <label>Email</label>
                </div>
                <a href="/#/news" class="story-button pulse-animation">Sign Up</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Twitter from 'twitter'
export default {
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
                    events: ['LCS vs TSM - W', 'LCS vs Liquid - 4:00pm', '', '', '', '', 'LCS vs GGS - 3:00pm' ]
                }, 
                {
                    game: 'CS:GO',
                    events: ['LCS vs TSM - W', 'LCS vs Liquid - 4:00pm', '', '', '', '', 'LCS vs GGS - 3:00pm' ]
                }
        ]
        }
    },
	async created() {
        console.log('calling Twitter...')
        // let client = new Twitter({
        //     consumer_key: 'uyR81RFWn2zVjf1mKyg5AhQGC',
        //     consumer_secret: 'BscbPybQIEhgUC9GFFWe0nHpgRxHD11TUk7qcLNDhfA4TtfWzz',
        //     access_token_key: '3293703617-XqHpqzr0Dpj3R39A8rqu8FMRlE0oUH66zGGwsjq',
        //     access_token_secret: 'y6bqGXO7LSUIhm1eRhJASHKEFemOd1WSpfT94VKXITc2s'
        // });

        // client.get('https://api.twitter.com/1.1/status/user_timeline.json', {screen_name: '100thieves', count: 3}, (error, tweets, response) => {
        //     console.log(tweets)
        //     console.log(response)
        // })

            // let config = {
            //     withCredentials: true,
            //     headers: {
            //         'Authorization': 'OAuth oauth_consumer_key="uyR81RFWn2zVjf1mKyg5AhQGC",oauth_token="3293703617-XqHpqzr0Dpj3R39A8rqu8FMRlE0oUH66zGGwsjq",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1513900512",oauth_nonce="E6rlGllZDKm",oauth_version="1.0",oauth_signature="PghiyaDLIxeb%2BZwfxxGmSBlS8zw%3D"'
            //     },
            //     withCredentials: true
            // }
            const response = await axios({
                method: 'get',
                url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=100thieves&count=10',
                headers: {
                    'Authorization': 'OAuth oauth_consumer_key="uyR81RFWn2zVjf1mKyg5AhQGC",oauth_token="3293703617-XqHpqzr0Dpj3R39A8rqu8FMRlE0oUH66zGGwsjq",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1513900512",oauth_nonce="E6rlGllZDKm",oauth_version="1.0",oauth_signature="PghiyaDLIxeb%2BZwfxxGmSBlS8zw%3D"'
                },
                withCredentials: true
            })
            //axios.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=100thieves&count=2', config)

            console.log(response)
    }
}
</script>

<style>
.tabs {
  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
  height: 24.5em;
}
.tabs__items {
  background-color:#2d2b2b;
}
.card {
    padding: 1em;
}
.card__text {
    padding: .3em !important;
    
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
    background-color: #a1131b !important;
    border-color: #a1131b !important;
}
.schedule-temp {
    display: flex;
    justify-content: center;
    height: 25em;
}
.schedule-temp > img {
    height: 100%;
}
.twitter-container {
    display: flex;
    justify-content: center;
}
.twitter-container > iframe {
    height: 20em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
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
    border-bottom: 1px solid #a1131b !important;
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
    color: #a1131b;
}
.featured-content {
    flex: 1;
}	
.content-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    height: 33em;
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
}
.newsletter-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    height: 18em;
}
.featured-header {
    border-left: 4px solid;
    padding-left: .5em;
    border-color: #a1131b;
    margin-bottom: 1em;
}
.featured-merch {
    height: 18em;
}
.merch-images {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1em;
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
@keyframes pulse{
  0%, 70% {
    box-shadow: 0px 0px 0px 0px rgba(220,220,220,.5)
  }
  100%{
    box-shadow: 0 0px 0px 7px rgba(250, 115, 115, 0)
  }
}
</style>