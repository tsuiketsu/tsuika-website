<script>
  import Button from '@/components/ui/button.svelte';
  import Thumbnail from '@/components/thumbnail.svelte';

  const light = 'inside-folder-light.webp?updatedAt=1750176273332';
  const dark = 'inside-folder-dark.webp?updatedAt=1750176273389';
</script>

<div class="w-full space-y-6 pt-30 text-center text-lg md:space-y-4 md:pt-40">
  <h1 class="px-4 text-4xl md:text-6xl">
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
    class="text-muted-foreground mx-auto mt-2.5 max-w-xs text-sm leading-snug md:max-w-xl md:text-lg lg:mt-2.5 lg:text-base"
  >
    Quickly save links, and tsuika will automatically tag them for you using AI
    for faster retrieval. Built for the data hoarders out there!
  </p>

  <div class="inline-flex items-center space-x-2 px-4">
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
  <div class="pl-4 md:mt-8 md:pr-4">
    <Thumbnail
      {light}
      {dark}
      class="md:border-r-border h-[34rem] overflow-hidden  rounded-tr-none rounded-br-none border-r-transparent p-0.5 transition-transform  md:h-auto md:rounded-tr-lg md:rounded-br-lg md:p-1"
      imageClass="size-full object-cover object-left"
    />
  </div>
</div>
