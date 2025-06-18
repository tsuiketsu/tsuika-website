<script lang="ts">
  import { mode, setMode } from 'mode-watcher';
  import Button from './ui/button.svelte';
</script>

{#if mode.current === 'dark'}
  <Button
    aria-label="dark-mode-button"
    variant="outline"
    size="icon"
    onclick={() => setMode('light')}
  >
    <span class="iconify tabler--moon"></span>
  </Button>
{:else}
  <Button
    aria-label="dark-mode-button"
    variant="outline"
    size="icon"
    onclick={() => setMode('dark')}
  >
    <span class="iconify tabler--sun"></span>
  </Button>
{/if}
