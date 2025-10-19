<script>
  import { fade } from 'svelte/transition';
  import ThemeToggle from './theme-toggle.svelte';
  import Button from './ui/button.svelte';
  import useIsSmallScreen from '@/hooks/use-mobile.svelte';

  const siteUrl = `https://app.${import.meta.env.VITE_DOMAIN}`;

  const links = [
    { name: 'Home', url: '#' },
    { name: 'Highlights', url: '#highlights' },
    { name: 'FAQs', url: '#faq' },
    { name: 'Documentation', url: 'https://docs.tsuika.space' }
  ];

  let isSmallScreen = useIsSmallScreen();
  let isDropdownOpen = $state(false);

  const handleDropdownClick = () => {
    isDropdownOpen = !isDropdownOpen;
  };

  $effect(() => {
    if (isDropdownOpen && isSmallScreen.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
</script>

<div class="bg-background sticky top-0 z-20 flex w-full justify-center text-sm">
  <div class="flex w-full max-w-6xl items-center gap-2 px-4 py-4">
    <a target="_self" class="font-yellowtail text-3xl font-bold" href="/"
      >Tsuika
    </a>
    <ul
      class="text-foreground/80 ml-auto hidden items-center gap-4 text-[15px] md:inline-flex"
    >
      {#each links.slice(0, 4) as link, idx (`navigation-url-${idx}`)}
        <li>
          <a
            href={link.url}
            target={link.url.includes('#') ? '_self' : '_blank'}
            class="hover:underline"
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
    <span class="bg-foreground/20 mx-2 hidden h-5 w-[1px] md:block"></span>
    <div class="ml-auto inline-flex items-center gap-2 md:ml-0">
      <ThemeToggle />
      <Button href={`${siteUrl}/login`}>Get Started</Button>
      <span class="bg-foreground/20 mx-2 h-5 w-[1px] md:hidden"></span>
      <Button
        variant="outline"
        size="icon"
        class="active:scale-100 md:hidden"
        onclick={handleDropdownClick}
      >
        {#if isDropdownOpen}
          <span class="iconify tabler--x"></span>
        {:else}
          <span class="iconify tabler--menu-2"></span>
        {/if}
      </Button>
    </div>
  </div>
  {#if isDropdownOpen}
    <div
      class="bg-background/90 fixed inset-0 top-[68px] border-t p-4 backdrop-blur-lg md:hidden"
      transition:fade={{ duration: 100 }}
    >
      <div class="text-muted-foreground mb-4 font-semibold">Navigation</div>
      <ul class="space-y-4">
        {#each links as link, idx (`navigation-url-${idx}`)}
          <li>
            <Button
              variant="link"
              href={link.url}
              target={link.url.includes('#') ? '_self' : '_blank'}
              class="active:text-foreground/40 px-0 text-xl font-bold hover:underline"
              onclick={handleDropdownClick}
            >
              {link.name}
            </Button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
