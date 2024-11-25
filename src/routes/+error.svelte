<script>
	import Logo from '$assets/logo.png';
	import { page } from '$app/stores';
	import { APP_NAME } from '$lib';
</script>

<svelte:head>
	<title>{APP_NAME} - {$page.status}</title>
	<link rel="shortcut icon" href={Logo} type="image/png" />
</svelte:head>

<section class="flex min-h-screen items-center bg-white dark:bg-gray-900">
	<main class="mx-auto max-w-screen-xl pb-8 lg:pb-16">
		<div class="mx-auto max-w-screen-sm text-center">
			<h1
				class="mb-4 text-7xl font-extrabold tracking-tight text-primary-600 dark:text-primary-500 lg:text-9xl"
			>
				{$page.status}
			</h1>
			<p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
				{#if $page.status === 404}
					Something's missing.
				{:else if $page.status === 500}
					Internal Server Error.
				{/if}
			</p>
			<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
				{#if $page.status === 404}
					Sorry, we can't find that page. You'll find lots to explore on the home page.
				{:else if $page.status === 500}
					We are already working to solve the problem.
				{/if}
			</p>
			<a
				href="/"
				class="my-4 inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
				>Back to Homepage</a
			>
		</div>
	</main>
</section>
