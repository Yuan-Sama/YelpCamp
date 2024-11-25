<script lang="ts">
	import { APP_NAME } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{APP_NAME} - All campgrounds</title>
</svelte:head>
