<template>
    <div class="sub-news-row">
    <div class="sub-news-body fade-in" v-for="story in stories" :key="story" :class="story.storyNum" 
            :style="{backgroundImage: 'url(' + story.src + ')'}">
        <p class="sub-news-header">{{ story.title }}</p>
        <!-- <img :src="story.src"> -->
    </div>
    </div>

</template>

<script>
export default {
    props: ['stories']
}
</script>
