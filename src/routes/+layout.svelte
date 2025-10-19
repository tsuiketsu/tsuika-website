<script lang="ts">
  import { page } from '$app/state';
  import '../app.css';
  import { SITE } from '../config';
  import Header from '../components/header.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { serializeSchema } from '@/utils';

  let { children } = $props();

  $effect(() => {
    if (typeof window === 'undefined') return;

    const matcher = window.matchMedia('(prefers-color-scheme: dark)');

    const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
    const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

    function onUpdate() {
      if (!darkSchemeIcon || !lightSchemeIcon) return;

      if (matcher.matches) {
        lightSchemeIcon?.remove();
        document.head.append(darkSchemeIcon);
      } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon?.remove();
      }
    }

    // Initial initialization
    onUpdate();

    matcher.addEventListener('change', onUpdate);
    return () => matcher.removeEventListener('change', onUpdate);
  });

  const title = SITE.title;
  const description = SITE.description;
  const author = SITE.author;
  const canonicalURL = new URL(page.url.pathname, page.url).toString();
  const socialImageURL = SITE.image;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    url: canonicalURL,
    description,
    image: `${socialImageURL}`
  };
</script>

<svelte:head>
  <link rel="canonical" href={canonicalURL} />

  <!-- General Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="author" content={author} />

  <!-- Open Graph / Facebook -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:image" content={socialImageURL} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonicalURL} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={socialImageURL} />

  <!-- Google JSON-LD Structured data -->
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html serializeSchema(structuredData)}
</svelte:head>

<Header />

<ModeWatcher />

<div class="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 md:gap-40">
  {@render children()}
</div>
