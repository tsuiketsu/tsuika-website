<script lang="ts">
  import clsx from 'clsx';
  import Button from './ui/button.svelte';

  const links = [
    { href: 'https://github.com/ImRayy/tsuika', icon: 'tabler--brand-github' },
    { href: 'mailto:imrayy.wklem@aleeas.com', icon: 'tabler--mail' }
  ];
</script>

<div
  class="flex w-full flex-col items-center justify-center gap-4 border-t py-4 sm:flex-row sm:justify-between"
>
  <div class="inline-flex items-center gap-2">
    <span class="font-bold">Tsuika</span>
    <span class="bg-border mx-2 h-6 w-0.5"></span>
    {#each links as { href, icon }, idx (`footer-link-${idx}`)}
      <Button
        {href}
        variant="outline"
        size="icon"
        aria-label={`${icon.split('-').slice(-1)}-link`}
      >
        <span class={clsx('iconify', icon)}></span>
      </Button>
    {/each}
  </div>
  <span class="text-sm">
    Copyright @ {new Date().getFullYear()} - Tsuika, Made by <b>Ray</b> with ❤️ &amp;
    ⚡️
  </span>
</div>
