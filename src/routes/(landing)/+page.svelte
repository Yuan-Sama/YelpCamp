<script>
	import Background from '$assets/background.jpg';
	import { APP_NAME } from '$lib';
</script>

<svelte:head>
	<title>{APP_NAME} - Enjoy moment with your family, friends and people you love</title>
</svelte:head>

<div
	class="flex min-h-screen items-center justify-center bg-cover bg-bottom bg-no-repeat text-white"
	style="background-image: url({Background});"
>
	<div class="mb-16 flex flex-col text-center">
		<h1 class="my-10 text-7xl">{APP_NAME}</h1>
		<p class="text-md my-3 font-semibold text-gray-200 dark:text-neutral-400">
			Enjoy moment with your family, friends and people you love.
		</p>
		<div>
			<a
				href="/campgrounds"
				class="mt-5 inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-white/10 px-4 py-3 text-sm font-medium text-white hover:bg-white/20 focus:bg-white/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
				>Explore more campgrounds</a
			>
		</div>
	</div>
</div>
