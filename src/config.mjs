const CONFIG = {
    name: 'Learn-Inn',
    origin: 'https://example.com',
    basePathname: '/',
    trailingSlash: false,
    title: 'Website - A free education site on life skills',
    description: 'Website is a free education site on life skills. We provide free courses on topics like personal finance, health, and relationships.',
    defaultTheme: 'system',
    defaultImage: '/assets/images/website.png',
    language: 'en',
    textDirection: 'ltr',
    dateFormatter: new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC'
    }),

    blog: {
      disabled: true,
      postsPerPage: 4,
  
      post: {
        permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
        noindex: false,
        disabled: false,
      },
  
      list: {
        pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
        noindex: false,
        disabled: false,
      },
  
      category: {
        pathname: 'category', // Category main path /category/some-category
        noindex: true,
        disabled: false,
      },
  
      tag: {
        pathname: 'tag', // Tag main path /tag/some-tag
        noindex: true,
        disabled: false,
      },
    },
}

export const SITE = {...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
