<template>
	<div class="main-news">
		<div class="main-news-content-card">
			<h1 class="featured-header">Welcome Aphromoo to the 100 Thieves Family!</h1>
            <img src="/static/images/100t-aphromoo-redone.png">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nostrum odio fugit veritatis natus, similique necessitatibus minus possimus odit. Mollitia inventore officia, molestiae perspiciatis amet repellendus in quidem nobis labore.
            </p>
		</div>
	</div>

</template>

<script>
export default {
	data () {
		return {
		
		}
	}
}
</script>

<style>
.main-news {
    width: 100%;
    max-width: 88.3em;
}
.main-news-content-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
    margin-bottom: 1em;
    min-height: 51em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.main-news-content-card > img {
    width: 96%;
    box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
}
.main-news-content-card > p {
    padding: 1em 2em;
    font-size: 1.25em;
}

</style>