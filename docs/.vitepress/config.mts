import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'FDE field notes',
  description: 'A concise, primary-source guide to forward-deployed engineering roles.',
  base: '/fde-role-research/',
  lang: 'en-US',
  themeConfig: {
    search: { provider: 'local' },
    nav: [{ text: 'Research', link: '/' }, { text: 'GitHub', link: 'https://github.com/Jit380/fde-role-research' }],
    sidebar: [{ text: 'Understand & compare', items: [
      { text: 'Start here', link: '/' },
      { text: 'Internships', link: '/internships' },
      { text: 'Full-time roles', link: '/full-time' },
      { text: 'Skills & patterns', link: '/skills' },
      { text: 'Role distinctions', link: '/distinctions' },
      { text: 'Sources & method', link: '/sources' }
    ] }],
    outline: [2, 3],
    footer: { message: 'Independent research • Primary postings checked November 12, 2026' }
  }
})
