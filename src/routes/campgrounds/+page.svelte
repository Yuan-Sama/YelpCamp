<script lang="ts">
	import { APP_NAME, formatAsCurrency, readMore } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { campgrounds } = data;
</script>

<svelte:head>
	<title>{APP_NAME} - All campgrounds</title>
</svelte:head>

<div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
	<div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
		<div>
			<nav class="flex" aria-label="Breadcrumb">
				<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
					<li class="inline-flex items-center">
						<a
							href="/"
							class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
						>
							<svg
								class="me-2.5 h-3 w-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
								/>
							</svg>
							Home
						</a>
					</li>
					<li aria-current="page">
						<div class="flex items-center">
							<svg
								class="h-5 w-5 text-gray-400 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m9 5 7 7-7 7"
								/>
							</svg>
							<span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2"
								>Campgrounds</span
							>
						</div>
					</li>
				</ol>
			</nav>
			<h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
				Campgrounds
			</h2>
		</div>
		<div class="flex items-center space-x-4">
			<a
				href="/campgrounds/new"
				class="me-2 inline-flex items-center rounded-lg border border-teal-700 p-2.5 text-center text-sm font-medium text-teal-700 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-teal-300 dark:border-teal-500 dark:text-teal-500 dark:hover:bg-teal-500 dark:hover:text-white dark:focus:ring-teal-800"
			>
				<svg
					class="mr-2"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					style="transform: ;msFilter:;"
					><path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"
					></path></svg
				>
				New Campground
			</a>
		</div>
	</div>
	<div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
		{#each campgrounds as campground}
			<div
				class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="h-56 w-full">
					<img class="mx-auto h-full" src={campground.image} alt={campground.title} />
				</div>
				<div class="pt-6 text-center">
					<h2 class="text-lg font-semibold leading-tight text-gray-900 dark:text-white">
						{campground.title}
					</h2>

					<p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
						{campground.location}
					</p>

					<p class="my-4 text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
						{formatAsCurrency(Number(campground.price))}/night
					</p>

					<p class="mb-3 mt-1 text-gray-500 dark:text-neutral-400">
						{readMore(campground.description, 100)}
					</p>

					<a
						href="/campgrounds/{campground._id}"
						class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						More details
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
