<template>
  <nav class="nav-full">
    <div class="nav-container">
      <div class="nav-flex2 nav-items">
      	<a class="nav-link" href="/#/news">NEWS</a>
      	<a class="nav-link" href="/#/teams">TEAMS</a>
      	<a class="nav-link" href="/#/content">CONTENT</a>
    </div>
    <div class="nav-flex"> 
      <a class="nav-logo" href="/#/">
        <img src="../assets/100t-logo-optimized.svg"
             width="200px"
             height="200px">
      </a>
    </div>
    <div class="nav-flex2 nav-items">
    	<a class="nav-link" href="https://www.100thieves.com/store/">STORE</a>
      <a class="nav-link" href="/#/partners">PARTNERS</a>
      <a class="nav-link" href="https://www.100thieves.com/contact-1/">CONTACT</a>
    </div>
    </div>
    
  </nav> 
</template>

<script>

</script>

<style>

.nav-container {
  width: 100%;
  max-width: 88.3em;
  margin: auto;
  display:flex;
  justify-content: center;
  height: 7em;
}

.nav-items a {
  color: #e0e0e0;
    text-decoration: none;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
}
.nav-full{
  background: #0f0f0f;
  height: 7em;
  padding-top:.2em;
  padding-bottom:.2em;
  color: #e0e0e0;
  margin-bottom: 3em;
  /* position: sticky;
  top: 0;
  z-index: 999; */
}

.nav-logo > img {
    height: 90%;
}
a.nav-logo{
  height: 6em;
}
a.nav-logo:link {
  /* Applies to all visited links */
  text-decoration:  none;
  /*  color: #e0e0e0;*/
} 
a.nav-logo:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  /*  color: white;*/
} 
a.nav-logo:hover{
  text-decoration: none;
  color: #a1131b;
}
a.nav-logo:active{
  text-decoration: none;
  color: #a1131b;
}
#header{
  margin-top: 2em;
  width: 15em;
}
.logo-flex{
  display:flex;
}
.nav-flex2{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2em;
  width: 30em;
}
.nav-flex{
  display: flex;
  align-items: center;
}
.nav-items{
  margin-left: 1em;
  margin-right: 1em;
}
a.nav-link{
  color: #e0e0e0;
}
a.nav-link:link {
  /* Applies to all visited links */
  text-decoration:  none;
  color: #e0e0e0;
} 
a.nav-link:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  color: #e0e0e0;
} 
a.nav-link:hover{
  text-decoration: none;
  color: #EC101C;
}
a.nav-link:active{
  text-decoration: none;
}






/*div.borderYtoX a:before, div.borderYtoX a:after
{
    position: absolute;
    opacity: 0.5;
    height: 100%;
    width: 2px;
    content: '';
    background: #ef3232;
    transition: all 0.3s;
}
*/
/*.active-link {
  box-shadow: 0 2px 5px #FFFFFF, 0 2px 1px #FFFFFF, 0 3px 1px -2px #FFFFFF;
}
*/
/*
div.borderYtoX a.active-link:before, div.borderYtoX a.active-link:after {
  position: absolute;
    opacity: 0.5;
    height: 100%;
    width: 2px;
    content: '';
    background: white;
    transition: all 0.3s;
}
div.borderYtoX a:before
{
    left: 0px;
    top: 0px;
}

div.borderYtoX a:after
{
    right: 0px;
    bottom: 0px;
}

div.borderYtoX a:hover:before, div.borderYtoX a:hover:after
{
    opacity: 1;
    height: 2px;
    width: 100%;
}
*/

</style>