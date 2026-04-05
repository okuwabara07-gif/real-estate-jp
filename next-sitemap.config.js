/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://real-estate-jp.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://real-estate-jp.vercel.app/sitemap.xml'],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
