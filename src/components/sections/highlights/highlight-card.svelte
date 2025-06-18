<script lang="ts">
  import clsx from 'clsx';
  import type { Highlight } from './types';

  const { title, description, icon }: Highlight = $props();
</script>

<div
  class="flex min-h-32 gap-4 rounded-md border p-3 text-start select-none md:flex-col"
>
  <span
    class="bg-card text-primary flex size-10 shrink-0 items-center justify-center rounded-sm border"
  >
    <span class={clsx('iconify', icon, 'text-lg')}></span>
  </span>
  <div>
    <span class="font-bold">{title}</span>
    <p class="text-muted-foreground text-sm">{description}</p>
  </div>
</div>
