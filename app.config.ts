export default defineAppConfig({
  title: 'Milik Saya Nih!',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://gemaroprek.com/wp-content/uploads/2024/07/Jasa-Setup-VPN.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
