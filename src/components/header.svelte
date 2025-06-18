<script>
  import ThemeToggle from './theme-toggle.svelte';
  import Button from './ui/button.svelte';
</script>

<div class="bg-background sticky top-0 z-20 flex w-full justify-center text-sm">
  <div class="inline-flex w-full max-w-6xl items-center gap-2 px-4 py-2">
    <Button variant="link" target="_self" class="text-lg font-bold" href="/">
      🔖 Tsuika
    </Button>
    <div class="ml-auto">
      <ThemeToggle />
    </div>
    <Button variant="outline">Login</Button>
    <Button>Get Started</Button>
  </div>
</div>
