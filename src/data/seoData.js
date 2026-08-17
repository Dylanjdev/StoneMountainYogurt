export const siteUrl = 'https://stone-mountain-yogurt.com'

export const socialImage = `${siteUrl}/StoneOG.webp`

export const seoByPath = {
  '/': {
    title: 'Frozen Yogurt in Pennington Gap | Stone Mountain Yogurt',
    description:
      'Visit Stone Mountain Yogurt at 124 Main Street in Pennington Gap, VA for frozen yogurt, shakes, sundaes, smoothies, floats, and more.',
  },
  '/menu/': {
    title: 'Menu | Stone Mountain Yogurt in Pennington Gap',
    description:
      'Explore frozen yogurt, sundaes, milkshakes, smoothies, frappes, floats, waffle nachos, toppings, and prices at Stone Mountain Yogurt.',
  },
  '/gallery/': {
    title: 'Treat Gallery | Stone Mountain Yogurt',
    description:
      'See parfaits, sundaes, smoothies, waffle nachos, and other creations made at Stone Mountain Yogurt in downtown Pennington Gap, Virginia.',
  },
  '/social/': {
    title: 'Follow Stone Mountain Yogurt | Shop Updates',
    description:
      'Follow Stone Mountain Yogurt on Facebook and TikTok for current flavors, specials, announcements, and behind-the-counter videos.',
  },
  '/contact/': {
    title: 'Hours & Directions | Stone Mountain Yogurt',
    description:
      'Find Stone Mountain Yogurt at 124 Main Street in Pennington Gap, VA. Open Thursday through Sunday from 12pm to 8pm. Call 276-295-2302.',
  },
}

export function normalizeSeoPath(pathname) {
  if (!pathname || pathname === '/') return '/'

  const cleanPath = `/${pathname.split('/').filter(Boolean).join('/')}/`
  return seoByPath[cleanPath] ? cleanPath : '/'
}

export function getSeoForPath(pathname) {
  const path = normalizeSeoPath(pathname)
  return {
    ...seoByPath[path],
    path,
    canonical: `${siteUrl}${path}`,
    image: socialImage,
  }
}
