<script lang="ts">
  import clsx from 'clsx';
  import { slide } from 'svelte/transition';

  const buttonId = `accordion-button-${crypto.randomUUID()}`;
  const contentId = `accordion-content-${crypto.randomUUID()}`;

  let isOpen = $state(false);

  const { title, content } = $props();
</script>

<section class="flex flex-col justify-center space-y-2 text-sm select-none">
  <button
    id={buttonId}
    type="button"
    class="inline-flex h-8 cursor-pointer items-center"
    onclick={() => (isOpen = !isOpen)}
    aria-controls={contentId}
    aria-expanded={isOpen}
  >
    <span
      class="inline-flex w-full items-center justify-between gap-1 font-bold hover:underline"
    >
      {title}
      <span
        class={clsx(
          'iconify tabler--chevron-down  transition-transform duration-300',
          { '-rotate-180': isOpen }
        )}
        aria-hidden="true"
      ></span>
    </span>
  </button>
  <div
    onclick={() => (isOpen = false)}
    onkeydown={(e) => e.key === 'Escape' && (isOpen = false)}
    class="cursor-pointer"
    role="presentation"
  >
    {#if isOpen}
      <p
        id={contentId}
        aria-labelledby={buttonId}
        role="region"
        class="pb-4 text-start"
        transition:slide
      >
        {content}
      </p>
    {/if}
  </div>
</section>
