<script>
  import ThemeToggle from './theme-toggle.svelte';
  import Button from './ui/button.svelte';

  const siteUrl = `https://app.${import.meta.env.VITE_DOMAIN}`;
</script>

<div class="bg-background sticky top-0 z-20 flex w-full justify-center text-sm">
  <div class="inline-flex w-full max-w-6xl items-center gap-2 px-4 py-2">
    <a target="_self" class="font-yellowtail text-3xl font-bold" href="/"
      >Tsuika
    </a>
    <div class="ml-auto">
      <ThemeToggle />
    </div>
    <Button href={`${siteUrl}/dashboard`}>Get Started</Button>
  </div>
</div>
