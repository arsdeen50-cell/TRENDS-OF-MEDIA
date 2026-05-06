const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

(async () => {
  try {
    const sitemap = new SitemapStream({
      hostname: 'https://www.trendsofmedia.com',
    });

    // 🔥 All your pages
    const urls = [
      '/',
      '/projects',
      '/services-digital-marketing',
      '/service/website-development',
      '/service/mobile-app-development',
      '/service/brand-%26-creative-marketing',
      '/service/social-media-marketing',
      '/service/influencer-marketing',
      '/service/production-services',
      '/about-trends-of-media',
      '/contact-trends-of-media'
    ];

    urls.forEach(url => {
      sitemap.write({
        url,
        changefreq: 'weekly',
        priority: url === '/' ? 1.0 : 0.8,
      });
    });

    sitemap.end();

    const data = await streamToPromise(sitemap);

    fs.writeFileSync('./public/sitemap.xml', data.toString());

    console.log('✅ sitemap.xml created successfully');
  } catch (err) {
    console.error('❌ Error generating sitemap:', err);
  }
})();