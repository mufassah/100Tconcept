<template>
    <div class="yt-content-card">
        <h1 class="featured-header">Featured Video</h1>
        <iframe width="560" height="347" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="large-screen"></iframe>
        <iframe width="500" height="280" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="medium-screen"></iframe>
        <iframe width="275" height="150" src="https://www.youtube.com/embed/ZBZBM2fyl60" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen class="smaller-screen"></iframe>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
/*.yt-content-card {
	background-color: #1d1d1d;
	padding: 2em;
	box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
	margin-bottom: 1em;
	min-height: 33em;
	max-height: 33em;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.yt-content-card iframe {
	box-shadow: 0 5px 10px 1px rgba(0,0,0,0.25), 0 3px 14px 2px rgba(0,0,0,0.24), 0 5px 5px -3px rgba(0,0,0,0.3);
	height: 24.5em;
}
.smaller-screen {
	display: none;
}
@media (min-width: 850px) {
	.smaller-screen {
		display: none;
	}
	.medium-screen {
		display: none;
	}
}
@media (max-width: 850px) {
	.yt-content-card {
		width: 100%;
		min-height: 10em;
	}
	.yt-content-card iframe {
		height: 20em;
	}
	.medium-screen {
		display: inline-block;
	}
	.smaller-screen {
		display: none;
	}
	.large-screen {
		display: none;
	}
	
}
@media (max-width: 650px) {
	.yt-content-card iframe {
		height: auto;
	}
	.medium-screen {
		display: none;
	}
	.smaller-screen {
		display: inline-block;
	}
	
}*/
</style>
