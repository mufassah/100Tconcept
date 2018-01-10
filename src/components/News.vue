<template>
	<div class="news-home">
		<app-main-news></app-main-news>
		<app-sub-news></app-sub-news>
	</div>
</template>

<script>
import MainNews from './MainNews'
import SubNews from './SubNews'
export default {
	components: {
		appMainNews: MainNews,
		appSubNews: SubNews
	}
}
</script>

<style>
.news-home {
    width: 100%;
    max-width: 88.3em;
    margin: auto;
}
.news-content-card {
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
@media (max-width: 1300px) {
  .news-home {
    padding: 0 5em;
  }
}

@media (max-width: 450px) {
  .news-home {
    padding: 0 1em;
  }
}
</style>