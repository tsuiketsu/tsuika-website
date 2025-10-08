<script lang="ts">
  import '../app.css';
  import Header from '../components/header.svelte';
  import { ModeWatcher } from 'mode-watcher';

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
</script>

<Header />

<ModeWatcher />

<div class="mx-auto flex w-full max-w-6xl flex-col gap-40 px-4">
  {@render children()}
</div>
