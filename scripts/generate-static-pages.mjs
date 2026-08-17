import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getSeoForPath, seoByPath } from '../src/data/seoData.js'

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')
const outputDirectory = resolve(projectRoot, 'dist')
const outputIndex = resolve(outputDirectory, 'index.html')

const escapeAttribute = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

function replaceAttribute(html, pattern, attribute, value) {
  return html.replace(pattern, (tag) =>
    tag.replace(new RegExp(`${attribute}="[^"]*"`), `${attribute}="${escapeAttribute(value)}"`),
  )
}

function applySeo(html, pathname) {
  const seo = getSeoForPath(pathname)
  let pageHtml = html.replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`)

  pageHtml = replaceAttribute(pageHtml, /<meta name="description"[^>]*>/, 'content', seo.description)
  pageHtml = replaceAttribute(pageHtml, /<link rel="canonical"[^>]*>/, 'href', seo.canonical)
  pageHtml = replaceAttribute(pageHtml, /<meta property="og:title"[^>]*>/, 'content', seo.title)
  pageHtml = replaceAttribute(pageHtml, /<meta property="og:description"[^>]*>/, 'content', seo.description)
  pageHtml = replaceAttribute(pageHtml, /<meta property="og:url"[^>]*>/, 'content', seo.canonical)
  pageHtml = replaceAttribute(pageHtml, /<meta name="twitter:title"[^>]*>/, 'content', seo.title)
  pageHtml = replaceAttribute(pageHtml, /<meta name="twitter:description"[^>]*>/, 'content', seo.description)

  return pageHtml
}

const builtShell = await readFile(outputIndex, 'utf8')

for (const pathname of Object.keys(seoByPath)) {
  const routeHtml = applySeo(builtShell, pathname)
  const destination =
    pathname === '/'
      ? outputIndex
      : resolve(outputDirectory, pathname.replace(/^\//, ''), 'index.html')

  await mkdir(dirname(destination), { recursive: true })
  await writeFile(destination, routeHtml)
}

console.log(`Generated ${Object.keys(seoByPath).length} static SEO entry points.`)
