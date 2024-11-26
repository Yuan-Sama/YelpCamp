<script lang="ts">
	import Modal from '$components/Modal.svelte';
	import { formatAsCurrency } from '$lib';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const { campground } = data;

	let showDialog = $state(false);
</script>

<svelte:head>
	<title>Yelp Camp - Campground: {campground.title}</title>
</svelte:head>

<div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
	<div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
		<div class="mx-auto max-w-md shrink-0 lg:max-w-lg">
			<img class="w-full" src={campground.image} alt="Preview" />
		</div>

		<div class="mt-6 sm:mt-8 lg:mt-0">
			<h1 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
				{campground.title}
			</h1>
			<div class="mt-4 sm:flex sm:items-center sm:gap-4">
				<p class="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
					{formatAsCurrency(Number(campground.price))}/night
				</p>

				<div class="mt-2 flex items-center gap-2 sm:mt-0">
					<div class="flex items-center gap-1">
						<svg
							class="h-4 w-4 text-yellow-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
							/>
						</svg>
						<svg
							class="h-4 w-4 text-yellow-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
							/>
						</svg>
						<svg
							class="h-4 w-4 text-yellow-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
							/>
						</svg>
						<svg
							class="h-4 w-4 text-yellow-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
							/>
						</svg>
						<svg
							class="h-4 w-4 text-yellow-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
							/>
						</svg>
					</div>
					<p class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(5.0)</p>
					<a
						href={'#'}
						class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
					>
						345 Reviews
					</a>
				</div>
			</div>

			<div class="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
				<a
					type="button"
					href="/campgrounds/{campground._id}/edit"
					class="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					<svg
						aria-hidden="true"
						class="-ml-1 mr-1 h-5 w-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
						></path><path
							fill-rule="evenodd"
							d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
							clip-rule="evenodd"
						></path></svg
					>
					Edit
				</a>
				<button
					type="button"
					class="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
					onclick={() => (showDialog = true)}
				>
					<svg
						aria-hidden="true"
						class="-ml-1 mr-1.5 h-5 w-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
							clip-rule="evenodd"
						></path></svg
					>
					Delete
				</button>
			</div>

			<hr class="my-6 border-gray-200 dark:border-gray-800 md:my-8" />

			<p class="mb-6 text-gray-500 dark:text-gray-400">
				{campground.description}
			</p>
		</div>
	</div>
</div>

<Modal bind:showModal={showDialog} class="relative h-full w-full max-w-md p-4 md:h-auto z-50">
	<div class="relative rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800 sm:p-5">
		<!-- Modal content -->
		<button
			type="button"
			class="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
			onclick={() => (showDialog = false)}
		>
			<svg
				aria-hidden="true"
				class="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path></svg
			>
			<span class="sr-only">Close modal</span>
		</button>
		<svg
			class="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500"
			aria-hidden="true"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
				clip-rule="evenodd"
			></path></svg
		>
		<p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
		<div class="flex items-center justify-center space-x-4">
			<button
				type="button"
				class="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
				onclick={() => (showDialog = false)}
			>
				No, cancel
			</button>
			<form action="?/delete" method="post">
				<button
					type="submit"
					class="rounded-lg bg-red-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
				>
					Yes, I'm sure
				</button>
			</form>
		</div>
	</div>
</Modal>
