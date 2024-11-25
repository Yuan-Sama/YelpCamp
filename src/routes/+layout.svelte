<script lang="ts">
	import Logo from '$assets/logo.png';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="shortcut icon" href={Logo} type="image/png" />
</svelte:head>

{@render children()}
