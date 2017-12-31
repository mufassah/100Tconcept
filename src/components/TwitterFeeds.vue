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

<style lang="sass">
  @import '../css/twitter-feeds.sass'
</style>