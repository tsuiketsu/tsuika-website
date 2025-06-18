<script lang="ts">
  import '../app.css';
  import Header from '../components/header.svelte';
  import { ModeWatcher } from 'mode-watcher';

  let { children } = $props();
</script>

<Header />

<ModeWatcher />

<div class="mx-auto flex w-full max-w-6xl flex-col gap-40 px-4">
  {@render children()}
</div>
