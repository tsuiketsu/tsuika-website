<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    subtext?: string;
    children: Snippet;
  }

  const { subtext, children }: Props = $props();
</script>

{#if subtext}
  <span class="text-highlight font-bold">{subtext}</span>
{/if}
<h2 class="pb-10 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
  {@render children()}
</h2>
