<template>
  <footer>
    <div class="footer-container">
      
        <div class="info-row">
          <router-link class="footer-links" to="/">Home</router-link>
          <router-link class="footer-links" to="/teams">Teams</router-link>
          <router-link class="footer-links" to="/partners">Partners</router-link>
          <a class="footer-links" href="https://www.100thieves.com/store/">Store</a>
          <a class="footer-links" href="https://www.100thieves.com/media-assets-1">Assets</a>
          <router-link class="footer-links" to="/jobs">Jobs</router-link>
        </div>

        <div class="logo-copyright">
          <router-link to="/">
          <img src="../assets/100t-logo-optimized.svg"
             width="100px"
             height="100px">
          </router-link>
          <p>© 100 THIEVES, LLC 2017</p>
        </div>     
      
      <div class="social-media">
        <div class="sm-header">
          <p>Connect with us:</p>
        </div>
        <div class="sm-links">
        <a href="https://twitter.com/100Thieves" class="icon-link">
          <div>
            <icon name="twitter" class="sm-icon"></icon>
          </div>
        </a>
        <a href="https://www.facebook.com/100Thieves/" class="icon-link">
          <div>
            <icon name="facebook" class="sm-icon"></icon>
          </div>
        </a>
        <a href="https://www.instagram.com/100thieves/" class="icon-link">
          <div>
            <icon name="instagram" class="sm-icon"></icon>
          </div>
            
        </a>
        <a href="https://www.youtube.com/channel/UCnrX2_FoKieobtw19PiphDw" 
            class="icon-link">
          <div>
            <icon name="youtube" class="sm-icon"></icon>
          </div>
            
        </a>
        </div>
        
      </div>
    </div>
    
  </footer>
</template>

<script>

</script>

<style>

.footer-links {
    color: #e0e0e0;
    text-decoration: none;
    margin-right: 1em;
    padding: 1em 0em;
    position: relative;
    z-index: 0;
    cursor: pointer;
    font-size: 1.1em;
}
.footer-links:hover {
  color: #DB2F2F;
}
.footer-container {
  margin: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 88.3em;
}
.info-row {
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.logo-copyright {
  padding: 1em;
  width: 100%;
  display: flex;
  flex: .4;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
footer {
  background: #0f0f0f;
}
.page-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
.social-media {
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 5em 1em 0em 1em;
  }
.sm-links {
  display: flex;
  justify-content: space-around;
  flex: 1;
}
.sm-links:hover {
  color: #DB2F2F;
  transition: color .4s;
}
.sm-header {
  color: #e0e0e0;
  font-size: 1.3em;
  flex: 1;
  display: inline-flex;
  justify-content: flex-end;
}
.sm-icon {
  position: relative;
  top: 5px;
  /* width: 50px; */
  color: #e0e0e0;
  transition: color .4s;
  transform: scale(2);
}
.sm-icon:hover {
  color: #E42832;
  transition: color .4s;
}

@media (max-width: 850px) {
  .footer-container {
    flex-direction: column;
    justify-content: space-between;
  }
  .social-media {
    padding: 0em 2em 0em 0em;
    align-items: center;
  }
  .sm-header {
    justify-content: center;
  }
  .sm-links {
    padding: 0em 0em 1.5em 0em;
  }
}
</style>