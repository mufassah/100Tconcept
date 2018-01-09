<template>
	<div class="temp">
		<div class="container">
			<div>
				<a href="https://twitter.com/Nadeshot">
    			<img class="nade" src="../assets/nadeshot-white-artboard.svg"
    			width="500px"
    			height="500px"></a>
			</div>
			<div>
				<a href="https://twitter.com/cavsdan">
    		<img class="cavs" src="../assets/CLE_logo-new-artboard.svg"
    		width="500px"
    		height="500px"></a>
			</div>
    	<div>
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fuga repellendus deleniti, veritatis quos. Quis deleniti voluptatem inventore eius mollitia facere ad et, repudiandae laudantium! Fugiat cupiditate tempore iusto eligendi.
    	</div>
    	<div>
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quos, est ipsam illum vero sunt itaque molestias consectetur rem reprehenderit minima officiis soluta voluptas nisi fugiat qui cumque, hic tempora.
    	</div>
    	</div>
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

.container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr 200px;
	grid-gap: 4em;
  box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}

.container div:nth-child(1n) {
	display: flex;
	justify-content: center;
	background-color: #0D0D0D;
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
}

.container div:nth-child(3n) {
	background-color: #1A1919;
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
	font-size: 2em;
}

.container div:nth-child(4n) {
	background-color: #1A1919;
	box-shadow: 0 2px 8px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.14), 0 3px 1px 1px rgba(0,0,0,.12);
	font-size: 2em;
}

</style>