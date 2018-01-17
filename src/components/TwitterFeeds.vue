<template>
    <div class="twitter-card">
        <h1 class="featured-header">Recent Tweets</h1>
        <div class="twitter-container">
            <div class="twitter-element-container" v-for="tweet in tweets" :key="tweet">
                <a :href="'https://twitter.com/statuses/' + tweet.id" class="twitter-element">
                    <div class="tweet-avatar">
                        <img :src="tweet.avi">
                    </div>
                    <div class="tweet-body">
                        <h3> {{tweet.name}} </h3>
                        <p>{{tweet.msg}}</p>
                        <!-- <p> {{tweet.created}}</p> -->
                    </div>
                </a>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            tweets: []
        }
    },
    async created() {
        try {
            const response = await axios.get('https://100thievesconcept.com/twitter')
            this.tweets = response.data

        } catch (e) {
            console.log(e)
        }
        

    }
}
</script>
