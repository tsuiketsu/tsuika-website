<script lang="ts">
  import { cn, type WithElementRef } from '@/utils';
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes
  } from 'svelte/elements';
  import { tv, type VariantProps } from 'tailwind-variants';

  export const buttonVariants = tv({
    base: 'inline-flex items-center justify-center gap-1 rounded-lg text-sm select-none active:scale-98',
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 border',
        outline: 'border hover:bg-secondary',
        link: 'px-0 py-0'
      },
      size: {
        default: 'h-8 px-4 py-1.5',
        lg: 'h-9 px-6 py-2',
        icon: 'size-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  });

  type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> &
    VariantProps<typeof buttonVariants> & {
      class?: string;
    };

  let {
    class: className,
    variant,
    size,
    ref = $bindable(null),
    href = undefined,
    type = 'button',
    target = '_blank',
    disabled,
    children,
    ...props
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    href={disabled ? undefined : href}
    {target}
    aria-disabled={disabled}
    role={disabled ? 'link' : undefined}
    tabindex={disabled ? -1 : undefined}
    {...props}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    data-slot="button"
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {disabled}
    {...props}
  >
    {@render children?.()}
  </button>
{/if}
