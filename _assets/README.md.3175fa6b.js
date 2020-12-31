import{g as e,f as n,E as a}from"./common-d6bd45c0.js";const s='{"title":"项目概述","frontmatter":{"page":true,"date":"2020-11-28","title":"项目概述","describe":"项目概述"},"headers":[{"level":2,"title":"基于「VitePress」搭建的极简博客","slug":"基于「vitepress」搭建的极简博客"},{"level":2,"title":"效果预览","slug":"效果预览"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"下载依赖&启动","slug":"下载依赖-启动"},{"level":2,"title":"打包静态","slug":"打包静态"},{"level":2,"title":"鸣谢","slug":"鸣谢"}],"relativePath":"README.md","lastUpdated":1609392665167.7654}';var t={};const r=a('<h2 id="基于「vitepress」搭建的极简博客"><a class="header-anchor" href="#基于「vitepress」搭建的极简博客" aria-hidden="true">#</a> 基于「VitePress」搭建的极简博客</h2><p>现已完成:</p><ul><li>渲染文章列表</li><li>文章目录</li><li>Gitalk 评论</li><li>文章按时间轴归档</li><li>文章分类</li></ul><h2 id="效果预览"><a class="header-anchor" href="#效果预览" aria-hidden="true">#</a> 效果预览</h2><p>在线地址:<a href="https://crazymryan.github.io/blog" target="_blank" rel="noopener noreferrer">https://crazymryan.github.io/blog</a></p><h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash"><pre><code><span class="token function">git</span> clone git@github.com:CrazyMrYan/blog.git\n<span class="token operator">&amp;</span>\n<span class="token builtin class-name">cd</span> blog\n</code></pre></div><h2 id="下载依赖-启动"><a class="header-anchor" href="#下载依赖-启动" aria-hidden="true">#</a> 下载依赖&amp;启动</h2><div class="language-shell"><pre><code><span class="token comment"># npm</span>\n<span class="token function">npm</span> <span class="token function">install</span>\n<span class="token operator">&amp;</span>\n<span class="token function">npm</span> run dev\n\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> <span class="token function">install</span>\n<span class="token operator">&amp;</span>\n<span class="token function">yarn</span> dev\n</code></pre></div><h2 id="打包静态"><a class="header-anchor" href="#打包静态" aria-hidden="true">#</a> 打包静态</h2><p>在打包之前你需要配置 <code>.vitepress</code> &gt; <code>config.js</code> 中加上 base:&#39;你的存放文件名&#39;</p><p>还需要在 <code>.vitepress</code> &gt; <code>build</code> &gt; <code>index.js</code> 修改 type 为 <code>build</code></p><div class="language-diff"><pre><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> const type = &#39;build&#39;\n</span></span>export function Build(){\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    return type === &#39;build&#39; ? &#39;你的存放文件名&#39; : &#39;&#39;\n</span></span>}\n</code></pre></div><div class="language-shell"><pre><code><span class="token comment"># npm</span>\n<span class="token function">npm</span> run build\n\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> build\n\n</code></pre></div><h2 id="鸣谢"><a class="header-anchor" href="#鸣谢" aria-hidden="true">#</a> 鸣谢</h2><p>本项目采用 <a href="https://github.com/Moking1997" target="_blank" rel="noopener noreferrer">Moking1997</a> 搭建的 <a href="https://github.com/Moking1997/vitepress-blog" target="_blank" rel="noopener noreferrer">vitepress-blog</a>,来进行的修改</p>',16);t.render=function(a,s,t,l,i,o){return n(),e("div",null,[r])};export default t;export{s as __pageData};
