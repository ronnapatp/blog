import { escape } from '@/lib/utils/htmlEscaper'

import siteMetadata from '@/data/siteMetadata'

const generateRssItem = (post) => `
<loc>${siteMetadata.siteUrl}/blog/${post.slug}</loc>
<news:name>
  <news:title>${escape(post.title)}</news:title>
  <link>${siteMetadata.siteUrl}/blog/${post.slug}</link>
  ${post.summary && `<description>${escape(post.summary)}</description>`}
  <news:publication_date>${new Date(post.date).toUTCString()}</news:publication_date>
  <author>${siteMetadata.email} (${siteMetadata.author})</author>
  ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  <image:image>
  <image:loc>${post.images}</image:loc>
  </image:image>

</news:name>
`

const generateRss = (posts, page = 'feed.xml') => `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
  ${posts.map(generateRssItem).join('')}
  </url>
</urlset>
`
export default generateRss

{
  /* <channel>
<title>${escape(siteMetadata.title)}</title>
<link>${siteMetadata.siteUrl}/blog</link>
<description>${escape(siteMetadata.description)}</description>
<language>${siteMetadata.language}</language>
<managingEditor>${siteMetadata.email} (${siteMetadata.author})</managingEditor>
<webMaster>${siteMetadata.email} (${siteMetadata.author})</webMaster>
<lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
<atom:link href="${siteMetadata.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
</channel> */
}
