<svelte:head>
	<title>Youtube Clone </title>
</svelte:head>
<script>
	import Carousel from '../components/Carousel.svelte';
	import Upload from '../components/Upload.svelte';
</script>

<div class="container">
	<div class="something">
		<div class="header">
			<div class="row">
				<div class="column">

					<h4>Video of the Day</h4>
					<h2>We don't talk anymore feat. Selena Gomez</h2>
					<p class="playlist-name">Charlie Puth - <span>We Don't talk anymore feat. selena Gomez Official
							Video</span></p>
				</div>
				<div class="column">
					<div class="playlist-next">
						<p>We don't talk</p>

					</div>
				</div>
			</div>
		</div>

		<div class="discover-videos">
			<Carousel name="Discover" icon="fas fa-search" />
			<Carousel name="Trending" icon="fas fa-fire" />

		</div>
		<Upload />
	</div>
</div>


<style>
	.header {
		min-height: 50vh;
		background: rgb(28, 26, 54);
		background: linear-gradient(30deg, rgba(28, 26, 54, 1) 0%, rgba(230, 144, 168, 1) 89%);
		padding: 10px;
	}

	.playlist-name {
		color: #fff;
		text-transform: capitalize;
	}

	h4 {
		text-transform: uppercase;
		font-size: smaller;
	}

	h2 {
		text-transform: uppercase;
		font-size: x-large;
	}

	.row {
		display: flex;
	}
</style>