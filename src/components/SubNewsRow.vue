<template>
    <div class="sub-news-row">
    <div class="sub-news-body" v-for="story in stories" :key="story">
        <h1 class="featured-header">{{ story.title }}</h1>
        <img :src="story.src">
    </div>
    </div>

</template>

<script>
export default {
    props: ['stories']
}
</script>

<style>
.sub-news-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.sub-news-body {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    min-height: 25em;
    max-height: 25em;
    min-width: 25em;
    max-width: 25em;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sub-news-body > img {
    height: 12em;
}
</style>