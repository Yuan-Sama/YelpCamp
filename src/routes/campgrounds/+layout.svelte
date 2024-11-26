<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Logo from '$assets/logo.png';
	import { APP_NAME } from '$lib';
	import { tweened } from 'svelte/motion';
	import { expoInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let scrollY: number = $state(0);
	const scrollYStore = tweened(0);

	async function backToTop(
		delay?: number,
		duration?: number | ((from: number, to: number) => number),
		easing?: (t: number) => number
	) {
		scrollYStore.set(scrollY, { duration: 0 });

		const unsubscribe = scrollYStore.subscribe((value) => {
			window.scrollTo(0, value);
		});

		await scrollYStore.set(0, { delay, duration, easing });

		return unsubscribe();
	}
</script>

<svelte:window bind:scrollY />

<nav class="bg-white antialiased dark:bg-gray-800">
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
							class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/campgrounds"
							title="Campgrounds"
							class="flex text-sm font-medium hover:text-primary-700 dark:hover:text-primary-500{$page.url.pathname.includes(
								'/campgrounds'
							)
								? ' text-primary-700 dark:text-primary-500'
								: ' text-gray-900 dark:text-white'}"
						>
							Campgrounds
						</a>
					</li>
				</ul>
			</div>

			<div class="flex items-center lg:space-x-2">
				<a
					href="/sign-in"
					class="mb-2 me-2 rounded-lg bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-primary-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-primary-300 dark:shadow-lg dark:shadow-primary-800/80 dark:focus:ring-primary-800"
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

<main class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
	{@render children()}
</main>

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

<button
	aria-label="Back to top"
	onclick={() => backToTop(0, 1500, expoInOut)}
	class="leading-0 fixed bottom-[15px] right-[15px] z-[996] me-2 inline-flex size-10 animate-bounce items-center justify-center rounded-lg border border-primary-700 p-2.5 text-center text-[16px] text-sm font-medium text-primary-700 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-500 dark:hover:text-white dark:focus:ring-primary-800 lg:size-11"
	class:invisible={scrollY <= 100}
	transition:fade={{ duration: 1000 }}
>
	<svg
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		width="48"
		height="48"
		viewBox="0 0 24 24"
		fill="currentColor"
		style="transform: ;msFilter:;"
		><path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path><path
			d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"
		></path></svg
	>
</button>
