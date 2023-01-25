const CONFIG = {
    name: 'Learn-Inn',
    origin: 'https://learninn.anishshobithps.tech',
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
}

export const SITE = {...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;
