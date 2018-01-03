<template>
    <div class="content-card">
        <h1 class="featured-header">Merchandise</h1>
        <div class="merch-images">
            <div class="merch-item">
                <img src="/static/images/hoodie.jpg" class="featured-merch">
            </div>
            <div class="merch-item">
                <img src="/static/images/tshirt.jpg" class="featured-merch">
            </div>
        </div>
        <div class="merch-ad">
            <h2>Purchase these and many more in the Store!</h2>
            <a href="https://www.100thieves.com/store/" class="story-button pulse-animation">Browse</a>
            <a href="https://www.100thieves.com/store/" class="story-button-small">Browse </a>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
.featured-merch {
    height: 18em;
}
.merch-images {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1em;
    width: 100%;
}
.merch-item img {
    box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}
.merch-ad {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 6em;
}
@media (max-width: 750px) {
    .featured-merch {
        height: 15em;
    }    
}
@media (max-width: 650px) {
    .featured-merch {
        height: 12em;
    }    
}
@media (max-width: 550px) {
    .featured-merch {
        height: 9em;
    }    
}
</style>
