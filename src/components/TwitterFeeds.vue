<template>
    <div class="twitter-container">
        <div class="twitter-element-container" v-for="tweet in tweets">
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
            console.log('calling Twitter...')
            try {
                const response = await axios.get('https://100thievesconcept.com/twitter')
                console.log(response.data)
                this.tweets = response.data

            } catch (e) {
                console.log(e)
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
    @media (max-width: 850px) {

    }
</style>