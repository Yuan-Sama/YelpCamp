<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { fade, scale } from 'svelte/transition';

	let {
		showModal = $bindable(),
		class: clazz = '',
		children,
		...others
	}: {
		showModal: boolean;
		class?: string;
		children: Snippet;
	} & HTMLAttributes<HTMLDivElement> = $props();

	let dialogInstance: HTMLDivElement | undefined = $state(undefined);
</script>

{#if showModal}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed left-0 right-0 top-0 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/30 md:inset-0 md:h-full"
		tabindex="-1"
		aria-hidden="true"
		onclick={($event) => {
			if (dialogInstance && !dialogInstance.contains($event.target as Node)) showModal = false;
		}}
	>
		<div bind:this={dialogInstance} class={clazz} out:fade in:scale>
			{@render children?.()}
		</div>
	</div>
{/if}
