<<template>
<div class="featured-news-card">
  <div class="content-card">
        <div class="featured-header">
        	<h1>News</h1>
        </div>
        <div class="first-story">
				<div class="first-story-body" :style="{ backgroundImage: 'url(' + featuredStory.src + ')' }">
					<div class="first-story-body-container">
						<h2>{{featuredStory.title}}</h2>
						<a href="/news" class="story-button pulse-animation">Read More</a>
						<a href="/news" class="story-button-small">Read More</a>					
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<<script>
export default {
  data() {
      return {
          featuredStory: 
            {
                src: '/static/images/welcome-100t-featured-news.png',
                title: '',
                body: ''
            }
      }
  }
}
</script>

<<style>
.first-story {
	display: flex;
	height: 25em;
	width: 100%;
	background-size: cover;
	box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
}
.first-story-body {
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	padding: 1em;
	background-size: cover;
	background-position: center center;
}
.first-story-body-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 5em;
}
@media (max-width: 650px) {
    .first-story-body {
		background-image: url('/static/images/inv-lcs-temp.jpg') !important;
	}
}
@media (max-width: 525px) {
	.first-story-body {
		background-image: url('/static/images/inv-lcs-tall.jpg') !important;
	}
}
</style>
