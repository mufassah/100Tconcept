<template>
  <footer>
    <div class="footer-container">
      
        <div class="info-row">
          <a class="footer-links" href="#">Home</a>
          <a class="footer-links" href="#">Teams</a>
          <a class="footer-links" href="#">Partners</a>
          <a class="footer-links" href="#">Store</a>
          <a class="footer-links" href="https://www.100thieves.com/media-assets-1">Assets</a>
          <a class="footer-links" href="#">Jobs</a>
        </div>

        <div class="logo-copyright">
          <img src="../assets/100t-logo-optimized.svg"
             width="100px"
             height="100px">
          <p>© 100 THIEVES, LLC 2017</p>
        </div>     
      
      <div class="social-media">
        <div class="sm-header">
        <p>Connect with us:</p>
        </div>
        <div class="sm-links">
          <a href="#" class="icon-link">
          <div><icon name="twitter" class="scaled sm-icon"></icon>
          </div>
        </a>
        <a href="#" class="icon-link">
          <div>
            <icon name="facebook" class="scaled sm-icon"></icon>
          </div>
        </a>
        <a href="#" class="icon-link">
          <div>
            <icon name="instagram" class="scaled sm-icon"></icon>
          </div>
            
        </a>
        <a href="#" class="icon-link">
          <div>
            <icon name="youtube" class="scaled sm-icon"></icon>
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
*{padding: 0; margin: 0;}
.footer-links {
    color: #FFF;
    text-decoration: none;
    margin-right: 1em;
    padding: 1em 0em;
    position: relative;
    z-index: 0;
    cursor: pointer;
    font-size: 1.1em;
}
.footer-links:hover {
  color: #ef3232
}
.footer-container {
  margin: auto;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 88.3em;
}
.info-row {
  color: #e0e0e0;
  padding: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.logo-copyright {
  color: #e0e0e0;
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
.sm-header {
  color: #e0e0e0;
  font-size: 1.3em;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.scaled {
  transform: scale(2);
}
.sm-icon:hover {
  color: #ef3232;
  transition: color .5s;
}
.sm-icon {
  position: relative;
  top: 5px;
  /* width: 50px; */
  color: #e0e0e0;
  transition: color .5s;
}
</style>