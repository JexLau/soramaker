import { statSync, existsSync, mkdirSync, writeFileSync, } from 'fs';
import { dirname, basename, resolve } from 'path';
import { sync } from 'glob';

const languages = ['en', 'zh']; // 你的支持的语言列表
const baseUrl = 'https://soramaker.ai'; // 你的网站基础URL
const pagesDirectory = './src/app'; // 页面目录
const currentDir = resolve(process.cwd(), pagesDirectory);
// 创建一个对象来存储每种语言的sitemap
const sitemaps = {};

languages.forEach(lang => sitemaps[lang] = []);

// 遍历pages目录下的所有page.tsx文件
console.log("[pagesDirectory]", sync(`${pagesDirectory}/*/**/page.tsx`))

sync(`${pagesDirectory}/*/**/page.tsx`).forEach((file) => {
    // 取file上一级的目录名
    // let dir = path.dirname(file).replace(`${pagesDirectory}`, '');
    const parentDir = dirname(file);
    let dir = basename(parentDir);
    
    // 如果目录名是index，就直接返回
    if (dir === `[locale]`) {
        dir = '';
    };
    // 遍历每种语言，生成对应的sitemap
    languages.forEach((lang) => {
        let lastPath = dir ? `/${lang}/${dir}` : `/${lang}`;
        if (lang === 'en') {
            lastPath = `/${dir}`
        }
        // 获取文件最后修改时间
        const stats = statSync(file);
        const lastmod = stats.mtime.toISOString();

        const url = `
    <url>
        <loc>${baseUrl}${lastPath}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
    </url>`;
        sitemaps[lang].push(url);
    });
});

languages.forEach((lang) => {
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">`;

    sitemap += sitemaps[lang].join('');
    sitemap += `
</urlset>`;

    // 写入sitemap文件到相应的目录
    const sitemapPath = lang === 'en' ? 'public/sitemap-0.xml' : `public/${lang}/sitemap.xml`;
    if(!existsSync(dirname(sitemapPath))) {
        mkdirSync(dirname(sitemapPath));
    }
    writeFileSync(sitemapPath, sitemap);
    console.log(`Sitemap for ${lang} generated!`);
});
