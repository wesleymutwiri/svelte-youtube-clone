<svelte:head>
	<title>Youtube Clone </title>
</svelte:head>
<script>
	import Carousel from '../components/Carousel.svelte';
</script>

<body>
	<div class="container">
		<div class="something">
			<div class="header">
				<div class="row">
					<div class="column">

						<h4>Video of the Day</h4>
						<h2>We don't talk anymore feat. Selena Gomez</h2>
						<p>Charlie Puth - <span>We Don't talk anymore feat. selena Gomez Official Video</span></p>
					</div>
					<div class="column">
						<div class="playlist-next">
							<p>We don't talk</p>

						</div>
					</div>
				</div>
			</div>

			<div class="discover-videos">
				<h3><i class="fas fa-search"></i> Discover</h3>
				<Carousel />

				<h3><i class="fas fa-fire"></i> Trending</h3>
				<Carousel />

			</div>
		</div>
	</div>
</body>

<style>
	.header {
		min-height: 50vh;
	}
</style>