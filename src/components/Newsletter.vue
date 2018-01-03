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
<style>
.form-container {
    display: flex;
    justify-content: space-between;
}
.newsletter-card {
    background-color: #1d1d1d;
    padding: 2em;
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
    margin-bottom: 1em;
    min-height: 18em;
    max-height: 18em;
    /* 
    border: 3px solid #a1131b;
    border-radius: 50px;
    */
}
.newsletter {
    position: relative;
    width: 23em;
    display: flex;
}
.newsletter-para {
    margin-top: 2.5em;
    margin-bottom: 2em;
    padding-left: 1em;
    font-size: 1.2em;
}
form {
    padding-left: 1em;
    padding-right:3em;
}
label{
    display: block;
    position: absolute;
    pointer-events: none;
    top: 10px;
    left: 0px;
    font-size: 1.2em;
    z-index: 1;
    transition: all .3s ease-out;
}
input {
    display: block;
    background: none;
    border: none;

    border-bottom: 1px solid #C71C26 !important;

    width: 100%;
    font-weight: normal;
    font-size: 16px;
    z-index: 2;
    caret-color: #e0e0e0;
}
input:focus	{
    outline:none;
}
input:focus ~ label, input:valid ~ label {
    top:-10px;
    font-size:.9em;
    color: #C71C26;
}
@media (max-width: 850px) {
    .newsletter-card {
        min-height: 20em;
    }
}
@media (max-width: 850px) {
    .newsletter-card {
        min-height: 20em;
    }
}
</style>
