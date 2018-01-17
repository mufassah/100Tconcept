<template>
  <div class="newsletter-card">
		<h1 class="featured-header">Sign up for our Newsletter!</h1>
		<p class="newsletter-para">Stay up to date on everything 100 Thieves has to offer! Subscribe with your email below!</p>
        <form>
            <div class="form-container">
                <div class="newsletter">      
                    <input type="text" required :rules="emailRules">
                    <label>Email</label>
                </div>
                <a href="/news" class="story-button pulse-animation">Sign Up</a>
                <a href="/news" class="story-button-small">Sign Up</a>
            </div>
        </form>
	</div>
</template>
<<script>
export default {
    data() {
        return {
            email: '',
            emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }
    }
        
}
</script>
