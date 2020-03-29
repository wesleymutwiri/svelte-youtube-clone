<script>
	import Nav from '../components/Nav.svelte';
	import Sidebar from '../components/SideBar.svelte';
	export let segment;
</script>

<style>
</style>
<Sidebar />
<!-- <Nav {segment} /> -->

<main>
	<slot></slot>
</main>