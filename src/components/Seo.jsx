import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath } from '../data/seoData'

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)

  if (element) {
    element.setAttribute(attribute, value)
  }
}

function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeoForPath(pathname)

    document.title = seo.title
    setMeta('meta[name="description"]', 'content', seo.description)
    setMeta('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    setMeta('link[rel="canonical"]', 'href', seo.canonical)
    setMeta('meta[property="og:title"]', 'content', seo.title)
    setMeta('meta[property="og:description"]', 'content', seo.description)
    setMeta('meta[property="og:url"]', 'content', seo.canonical)
    setMeta('meta[property="og:image"]', 'content', seo.image)
    setMeta('meta[name="twitter:title"]', 'content', seo.title)
    setMeta('meta[name="twitter:description"]', 'content', seo.description)
    setMeta('meta[name="twitter:image"]', 'content', seo.image)

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: seo.title,
        page_location: seo.canonical,
        page_path: seo.path,
      })
    }
  }, [pathname])

  return null
}

export default Seo
