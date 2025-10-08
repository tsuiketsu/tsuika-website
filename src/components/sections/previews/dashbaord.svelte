<script>
  import Thumbnail from '@/components/thumbnail.svelte';
  import SectionTitle from '../_shared/section-title.svelte';

  const light = 'dashbaord-light.webp?updatedAt=1750176273453';
  const dark = 'dashboard-dark.webp?updatedAt=1750176273574';
</script>

<div class="text-center">
  <SectionTitle subtext="Dashboard"
    >Modern &amp; Sleek dashboard<br /> to keep you
    <i class="decoration-highlight underline decoration-2">Motivated</i
    ></SectionTitle
  >
  <Thumbnail {light} {dark} />
</div>
