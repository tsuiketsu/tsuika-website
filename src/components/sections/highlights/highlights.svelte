<script lang="ts">
  import HighlightCard from './highlight-card.svelte';
  import { highlights } from './list';
</script>

<div class="text-center">
  <span class="font-bold text-teal-600 dark:text-teal-400">Just Why?</span>
  <h2 class="pb-10 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
    Yet another bookmark manager?<br /> Why pick us?
  </h2>
  <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {#each highlights as h, idx (`highlight-card-${idx}`)}
      <HighlightCard
        title={h.title}
        description={h.description}
        icon={h.icon}
      />
    {/each}
  </div>
</div>
