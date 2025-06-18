export const faqs = [
  {
    q: 'Is this service free forever?',
    a: 'Currently, the service is free as it was initially developed for personal use and to expand my skill set. If the user base grows significantly, a paid tier may be introduced in the future to cover server costs, while keeping storage affordable.'
  },
  {
    q: 'Where is my data stored?',
    a: 'Data is stored in a NeonDB (PostgreSQL) database hosted on an AWS instance in US East 1 (Northern Virginia). The backend server, built with Hono and Drizzle, is hosted on Cloudflare Workers.'
  },
  {
    q: 'Is my data secure?',
    a: "Your data is not end-to-end encrypted by default, but I plan to introduce an optional 'encrypted folder' feature for sensitive bookmarks. Encrypting all data would impact performance, especially for full-text search with large bookmark collections. Public links remain unencrypted unless you add sensitive descriptions, which can be encrypted upon request."
  },
  {
    q: 'Is my account protected?',
    a: 'Yes, your account is secure. Safety measures are implemented from registration to login, and you can enable two-factor authentication (2FA) using authenticator apps. Email or phone OTPs are not supported for added security.'
  },
  {
    q: 'Does this work offline?',
    a: 'Offline support is not available yet. I plan to implement Progressive Web App (PWA) functionality and offline capabilities after completing core features like encrypted folders and other enhancements.'
  }
];
