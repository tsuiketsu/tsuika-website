import { onMount } from 'svelte';

export default function useIsSmallScreen(breakpoint = 768) {
  let value = $state(false);

  const handleResize = () => (value = window.innerWidth < breakpoint);

  onMount(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    handleResize();

    media.addEventListener('change', handleResize);

    return () => media.removeEventListener('change', handleResize);
  });

  return {
    get value() {
      return value;
    }
  };
}
