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
