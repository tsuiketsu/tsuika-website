import type { Highlight } from './types';

export const highlights = [
  {
    title: 'Open Source',
    description:
      'This project is open source under the AGPL-3.0 license, ensuring it remains freely accessible and cannot become closed source in the future.',
    icon: 'tabler--brand-github'
  },
  {
    title: 'Self-Hostable',
    description:
      'Built with the Tsuika API, Hono, and PostgreSQL, this project scales efficiently and performs well, though it won’t run on a toaster.',
    icon: 'tabler--server'
  },
  {
    title: 'Theming',
    description:
      'Tired of a single color scheme? Explore a variety of themes and fonts to customize your experience.',
    icon: 'tabler--color-swatch'
  },
  {
    title: 'Rich Previews',
    description:
      'Automatically fetches titles, descriptions, thumbnails, and favicons, providing a seamless and essential preview feature.',
    icon: 'tabler--photo'
  },
  {
    title: 'Never Forget',
    description:
      'Save links and articles to your tasks with optional reminders, making procrastination a thing of the past.',
    icon: 'tabler--checkbox'
  },
  {
    title: 'Powerful Search',
    description:
      'Effortlessly search through all your bookmarks using full-text search.',
    icon: 'tabler--list-search'
  }
] satisfies Highlight[];
