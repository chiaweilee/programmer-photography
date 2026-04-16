import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/programmer-photography/',
  title: 'Programmer Photography',
  description: 'Technical notes, guides, and blog posts about programmer photography.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/guide/' }]
      },
      {
        text: 'Blog',
        items: [{ text: 'Latest Posts', link: '/blog/' }]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chiaweilee/programmer-photography' }
    ]
  }
})
