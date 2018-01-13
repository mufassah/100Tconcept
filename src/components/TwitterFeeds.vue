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

<style>
.twitter-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
    margin-bottom: 1em;
    height: 56em;
}
.twitter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.twitter-element-container {
    width: 100%;
}
.twitter-element {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    background-color: #2f2f2f;
    display: flex;
    padding: 0 .5em;
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
    align-items: center;

}
.tweet-avatar img {
    width: 4.5em;
    border-radius: 50%;
}
.tweet-body {
    flex: 5;
    display: flex;
    flex-direction: column;
    padding: .5em;
    justify-content: flex-start;
}
.tweet-body p{
    max-height: 4em;
    overflow-y: hidden;
    margin-bottom: 0 !important;
}
</style>