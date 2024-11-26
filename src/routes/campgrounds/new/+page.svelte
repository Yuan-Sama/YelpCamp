<script lang="ts">
	import { APP_NAME } from '$lib';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	function validateForm($event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }) {
		if (!$event.currentTarget.checkValidity()) {
			$event.preventDefault();
			$event.stopPropagation();
		}

		$event.currentTarget.classList.add('was-validated');
	}
</script>

<svelte:head>
	<title>{APP_NAME} - New Campground</title>
</svelte:head>

<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
	<div class="mx-auto max-w-2xl">
		<div class="text-center">
			<h2 class="text-xl font-bold text-gray-800 dark:text-white sm:text-3xl">New Campground</h2>
		</div>

		<div
			class="relative z-10 mt-5 rounded-xl border bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900 sm:mt-10 md:p-10"
		>
			<form
				method="POST"
				onsubmit={(e) => validateForm(e)}
				novalidate
				class={form?.errors ? 'was-validated' : ''}
			>
				<!-- Title -->
				<div class="mb-4 sm:mb-7">
					<label for="title" class="mb-2 block text-sm font-medium dark:text-white">Title</label>
					<input
						type="text"
						id="title"
						class="form-control block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="Title"
						name="title"
						value={form?.errors['title']?.submittedValue}
						required
					/>
					<div class="invalid-feedback">Please provide a valid title</div>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<!-- Location -->
				<div class="mb-4 sm:mb-7">
					<label for="location" class="mb-2 block text-sm font-medium dark:text-white">
						Location
					</label>
					<input
						type="text"
						id="location"
						class="form-control block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="Location"
						name="location"
						value={form?.errors['location']?.submittedValue}
						required
					/>
					<div class="invalid-feedback">Please provide a valid location</div>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<!-- Image -->
				<div class="mb-4 sm:mb-7">
					<label for="image" class="mb-2 block text-sm font-medium dark:text-white">
						Image Url
					</label>
					<input
						type="text"
						id="image"
						class="form-control block w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="https://your.image.png"
						name="image"
						value={form?.errors['image']?.submittedValue}
						required
					/>
					<div class="invalid-feedback">Please provide a valid image url</div>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<!-- Price -->
				<div class="mb-4 sm:mb-7">
					<label for="price" class="mb-2 block text-sm font-medium dark:text-white">Price</label>
					<div class="flex flex-wrap">
						<span
							class="inline-flex min-w-fit items-center rounded-s-lg border border-e-0 border-gray-200 bg-gray-50 px-4 text-sm text-gray-500 dark:border-neutral-700 dark:bg-neutral-700 dark:text-neutral-400"
							>$</span
						>
						<input
							type="text"
							id="price"
							class="form-control block w-[1%] min-w-0 flex-auto rounded-e-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="$0.00"
							name="price"
							value={form?.errors['price'].submittedValue}
							required
						/>
						<div class="invalid-feedback">
							{form?.errors['price'].error ?? 'Please provide a valid price'}
						</div>
						<div class="valid-feedback">Looks good!</div>
					</div>
				</div>
				<!-- Description -->
				<div>
					<label for="description" class="mb-2 block text-sm font-medium dark:text-white">
						Description
					</label>
					<div class="mt-1">
						<textarea
							id="description"
							name="description"
							rows="5"
							class="form-control block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-[1px] focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
							placeholder="Leave your description here..."
							required>{form?.errors['description'].submittedValue}</textarea
						>
						<div class="invalid-feedback">Please provide a description</div>
						<div class="valid-feedback">Looks good!</div>
					</div>
				</div>

				<div class="mt-6 flex justify-between gap-10">
					<a
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-red-600 px-4 py-3 text-sm font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
						href="/campgrounds"
					>
						Back to Campgrounds
					</a>
					<button
						type="submit"
						class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-green-600 px-4 py-3 text-sm font-medium text-green-600 hover:bg-green-700 hover:text-white focus:border-transparent focus:bg-green-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
					>
						Create
					</button>
				</div>
			</form>
		</div>
		<!-- End Card -->
	</div>
</div>
