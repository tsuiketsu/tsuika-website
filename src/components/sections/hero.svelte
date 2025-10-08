<script>
  import Button from '@/components/ui/button.svelte';
  import Thumbnail from '@/components/thumbnail.svelte';

  const light = 'inside-folder-light.webp?updatedAt=1750176273332';
  const dark = 'inside-folder-dark.webp?updatedAt=1750176273389';
</script>

<div class="w-full space-y-6 pt-30 text-center text-lg md:pt-40">
  <h1 class="text-4xl md:text-6xl">
    Tsuika is your
    <br />
    <i>
      <span
        class="font-extrabold underline decoration-teal-600 dark:decoration-teal-400"
        >bookmarking
      </span>
    </i> friend
  </h1>

  <p
    class="text-muted-foreground mx-auto mt-2.5 max-w-xs text-sm leading-snug sm:text-base md:max-w-xl md:text-lg lg:mt-2.5"
  >
    Capture what’s valuable, keep it encrypted or share it freely and then
    collaborate to make something big.
  </p>

  <div class="inline-flex items-center space-x-2">
    <Button
      href="https://demo-app.tsuika.space/login"
      variant="secondary"
      size="lg"
      class="w-28">Demo</Button
    >
    <Button href="https://github.com/ImRayy/tsuika" size="lg" class="w-28">
      <span class="iconify tabler--brand-github"></span>
      GitHub
    </Button>
  </div>
  <div class="">
    <Thumbnail {light} {dark} class="md:mt-8" />
  </div>
</div>
