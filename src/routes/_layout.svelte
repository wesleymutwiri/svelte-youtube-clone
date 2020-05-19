<script>
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/SideBar.svelte';
	import Navbar from '../components/TopNav.svelte';

	export let segment;
</script>

<style>
	main {
		width: 70%;
		margin-left: 310px;
		/* margin-top: 15px; */
	}

	.sidebar {
		width: 30%;
	}

	body {
		width: 100%;
	}

	.navbar {
		/* margin-left: 310px; */
	}

	@media screen and (max-width: 1020px) {
		.sidebar {
			display: none;
		}

		main {
			width: 100%;
			margin-left: 0px;
		}

		.navbar {
			margin-left: 0px;
		}
	}
</style>
<div class="sidebar">
	<Sidebar />
</div>

<main>
	<div class="navbar">
		<Nav {segment} />
	</div>
	<!-- <Navbar /> -->
	<slot></slot>
</main>