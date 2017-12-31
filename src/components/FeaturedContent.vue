<template>
    <div class="featured-content">
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

                <!-- <v-tabs-items class="large-sched">
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
                </v-tabs-items> -->

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
        <a href="https://www.100thieves.com/store/" class="story-button-small">Browse </a>
    </div>
</div>
<div class="twitter-card">
    <h1 class="featured-header">Recent Tweets</h1>
    <app-twitter-feed></app-twitter-feed>
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
            <a href="/#/news" class="story-button-small">Sign Up</a>
        </div>
    </form>
</div>
</div>
</template>

<script>
    import TwitterFeeds from './TwitterFeeds'

    export default {
        components: {
            appTwitterFeed: TwitterFeeds
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
                tweets: []
            }
        },
        async created() {
            console.log('calling Twitter...')
            try {
                const response = await axios.get('https://100thievesconcept.com/twitter')
                this.tweets = response.data

            } catch (e) {
                console.log(e)
            }
            

        }
    }
</script>

<style lang="sass">
 @import '../css/featured-content.sass'
</style>