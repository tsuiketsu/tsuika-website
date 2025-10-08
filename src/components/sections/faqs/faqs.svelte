<script>
  import Accordion from '@/components/ui/accordion.svelte';
  import SectionTitle from '../_shared/section-title.svelte';
  import { faqs } from './list';
</script>

<div class="mx-auto w-full text-center sm:w-xl">
  <SectionTitle subtext="Have doubts?">Frequently Asked Questions</SectionTitle>
  <div class="rounded-lg border p-4 py-2 pb-0">
    {#each faqs as faq, idx (`faq-${idx}`)}
      <Accordion title={faq.q} content={faq.a} />
      {#if idx < faqs.length - 1}
        <hr class="pb-2" />
      {/if}
    {/each}
  </div>
</div>
