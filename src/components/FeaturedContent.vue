<template>
	<div class="featured-content">
		<div class="content-card">
			<h1 class="featured-header">Featured Video</h1>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
		</div>
		<div class="content-card">
			<h1 class="featured-header">Featured Merch</h1>
			<div class="merch-images">
				<div class="merch-item">
					<img src="/static/images/hoodie.jpg" class="featured-merch">
				</div>
				<div class="merch-item">
					<img src="/static/images/tshirt.jpg" class="featured-merch">
				</div>
			</div>
			<p class="merch-text">See more items in the shop <a href="https://www.100thieves.com/store/" class="merch-link">Here</a></p>
		</div>
		<div class="content-card">
			<h1 class="featured-header">Sign up for our Newsletter!</h1>
			<p class="newsletter-para">Stay up to date on everything 100 Thieves has to offer! Subscribe with your email below!</p>
			<form>
				<div class="newsletter">      
					<input type="text" required>
					<label>Email</label>
				</div>
			</form>
		</div>
	</div>
</div>
</template>

<script>
import Twitter from 'twitter'
export default {
	data() {
		return {
			email: '',
			emailRules: [
			(v) => !!v || 'E-mail is required',
			(v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
			]
		}
	},
	created() {
		//Callback functions
		var client = new Twitter({
    	consumerKey: "2sMaVnHgjD1eeifRqSJw57D9k",
    	consumerSecret: "vUxxE7QCYlH1K9UaE3bnRiLv8dPEpKMEEwq9TSFDU7Cyv53Ht0",
    	accessToken: "3293703617-XqHpqzr0Dpj3R39A8rqu8FMRlE0oUH66zGGwsjq",
    	accessTokenSecret: "y6bqGXO7LSUIhm1eRhJASHKEFemOd1WSpfT94VKXITc2s",
    	callBackUrl: "None"
	});

client.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});

}
}
</script>

<style>
.newsletter {
	position: relative;
}
.newsletter-para {
	color: #e0e0e0;
	margin-top: -.5em;
	margin-bottom: 2em;
	padding-left: 1em;
}
form {
	padding-left: 1em;
	padding-right:3em;
}
label{
	display: block;
	position: absolute;
	pointer-events: none;
	top: -5px;
	left: 0px;
	color: #e0e0e0;
	font-size: 16px;
	z-index: 1;
	transition: all .3s ease-out;
}
input {
	display: block;
	background: none;
	border: none;
	border-bottom: 1px solid #ef3232;
	width: 100%;
	font-weight: normal;
	font-size: 16px;
	z-index: 2;
	color: #e0e0e0;
	caret-color: #e0e0e0;
}
input:focus	{
	outline:none;
}
input:focus ~ label, input:valid ~ label {
	top:-20px;
	font-size:14px;
	color: #ef3232;
}
.featured-content {
	flex: 1;
}	
.content-card {
	background-color: #1d1d1d;
	padding: 2em;
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
	margin-bottom: 1em;
}
.featured-header {
	border-left: 4px solid;
	padding-left: .5em;
	border-color: #ef3232;
	margin-bottom: 1em;
	color: #e0e0e0;
}
.featured-merch {
	height: 18em;
}
.merch-images {
	display: flex;
	justify-content: space-around;
	margin-bottom: 1em;
}
.merch-item {
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.merch-text {
	color: #e0e0e0;
	font-size: 16px;
	padding-left: 1em;
}
.merch-link {
	color: #ef3232;
}
</style>