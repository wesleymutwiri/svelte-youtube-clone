<script>
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/SideBar.svelte';
	export let segment;
</script>

<style>
	main {
		width: 70%;
		margin-left: 310px;
	}

	body {
		width: 100%;
	}
</style>
<Sidebar />
<!-- <Nav {segment} /> -->

<main>
	<slot></slot>
</main>