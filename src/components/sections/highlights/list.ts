import type { Highlight } from './types';

export const highlights = [
  {
    title: 'Collaborative',
    description:
      'Invite other users by their email or username to collaborate on projects and achieve great results together.',
    icon: 'tabler--users-group'
  },
  {
    title: 'Publish',
    description:
      'Share folders with anyone, either publicly or secured with a password for controlled access.',
    icon: 'tabler--world-share'
  },
  {
    title: 'Encrypted Folders',
    description:
      'Protect your folders with end-to-end encryption using the XChaCha20-Poly1305 algorithm for both security and efficiency.',
    icon: 'tabler--shield'
  },
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
    title: 'PWA',
    description:
      'Experience our app as a Progressive Web App, offering lightning-fast performance. Install it on any device for a native-like experience with seamless updates',
    icon: 'tabler--app-window'
  },

  {
    title: 'Markdown Editor',
    description:
      'Write bookmark descriptions or full articles with feature-rich WSAM Markdown editor, featuring real-time previews, syntax highlighting for seamless, polished content creation.',
    icon: 'tabler--markdown'
  }
] satisfies Highlight[];
