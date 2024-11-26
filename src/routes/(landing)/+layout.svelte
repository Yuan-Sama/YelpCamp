<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Logo from '$assets/logo.png';
	import { APP_NAME } from '$lib';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let y: number = $state(0);
	$inspect(y);
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed left-0 top-0 w-full antialiased{y < 30
		? ' dark bg-transparent'
		: ' bg-white dark:bg-gray-800'}"
>
	<div class="mx-auto max-w-screen-xl px-4 py-4 2xl:px-0">
		<div class="flex items-center justify-between">
			<div class="flex items-center space-x-8">
				<div class="shrink-0">
					<a href="/" title="" class="">
						<img class="block h-8 w-auto" src={Logo} alt="Logo" />
					</a>
				</div>

				<ul class="hidden items-center justify-start gap-6 py-3 sm:justify-center md:gap-8 lg:flex">
					<li>
						<a
							href="/"
							title="Home"
							class="flex text-sm font-medium text-primary-700 dark:text-primary-500"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/campgrounds"
							title="Campgrounds"
							class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
						>
							Campgrounds
						</a>
					</li>
				</ul>
			</div>

			<div class="flex items-center lg:space-x-2">
				<a
					href="/sign-in"
					class="mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-blue-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:shadow-lg dark:shadow-blue-800/80 dark:focus:ring-blue-800"
					>Sign In</a
				>
			</div>
		</div>

		<div
			class="mt-4 hidden rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-600 dark:bg-gray-700"
		>
			<ul class="space-y-3 text-sm font-medium text-gray-900 dark:text-white">
				<li>
					<a href="/" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
				</li>
				<li>
					<a href="/campgrounds" class="hover:text-primary-700 dark:hover:text-primary-500"
						>Campgrounds</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>

{@render children()}

<footer class="bg-white p-4 dark:bg-gray-800 md:p-8 lg:p-10">
	<div class="mx-auto max-w-screen-xl text-center">
		<a
			href="/"
			class="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
		>
			<img class="mr-2 max-w-10" src={Logo} alt="Logo" />
			{APP_NAME}
		</a>
		<p class="my-6 text-gray-500 dark:text-gray-400">
			A campground is where we gather to weave memories beneath constellations, forging bonds as
			strong as the roots of ancient trees.
		</p>
		<ul class="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
			<li>
				<a href="/" class="mr-4 hover:underline md:mr-6">Home</a>
			</li>
			<li>
				<a href="/campgrounds" class="mr-4 hover:underline md:mr-6">Campgrounds</a>
			</li>
		</ul>
		<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
			>© {new Date().getFullYear()} <a href="/" class="hover:underline">{APP_NAME}</a>. All Rights
			Reserved.</span
		>
	</div>
</footer>
