<script lang="ts">
  import { cn } from '@/utils';
  import { mode } from 'mode-watcher';

  interface Props {
    light: string;
    dark: string;
    class?: string;
    imageClass?: string;
  }

  let { light, dark, class: className, imageClass }: Props = $props();

  let banner = $state('');
  let isLoading = $state(true);

  $effect(() => {
    if (mode.current === 'light') {
      banner = light;
    } else banner = dark;
  });

  function handleLoading() {
    isLoading = false;
  }
</script>

<div
  class={cn(
    'relative flex items-center justify-center rounded-md border p-1',
    className
  )}
>
  {#if isLoading}
    <div
      class="bg-accent absolute inset-0 z-10 size-full animate-pulse rounded-sm"
    ></div>
  {/if}
  <img
    onload={handleLoading}
    src={`https://ik.imagekit.io/rayshold/projects/tsuika/${banner}`}
    class={cn('rounded-sm', imageClass)}
    alt=""
  />
</div>
