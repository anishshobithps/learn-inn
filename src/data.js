import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Mental Health',
      links: [
        {
          text: 'Anxiety',
          href: getPermalink('/mental-health/anxiety'),
        },
        {
          text: 'Depression',
          href: getPermalink('/mental-health/depression'),
        },
        {
          text: 'Stress',
          href: getPermalink('/mental-health/stress'),
        },
      ],
    },
    {
      text: 'Essentials',
      links: [
        {
          text: 'Creative Thinking',
          href: getPermalink('/essentials/creative-thinking'),
        },
        {
          text: 'Collabration and Team Work',
          href: getPermalink('/essentials/collab'),
        },
      ],
    },
  ]
};
  
export const footerData = {
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://teamnull.com"> Team Null</a> · All rights reserved.
  `,
};
