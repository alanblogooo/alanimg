import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.01edc906.js";const o="/blog/assets/01.990659ff.jpg",s="/blog/assets/download.dfe27438.png",p="/blog/assets/02.98a98556.png",i="/blog/assets/03.41055ee8.png",n="/blog/assets/04.2f91e06a.png",l="/blog/assets/05.6355cb42.png",c="/blog/assets/06.46cb0676.png",_="/blog/assets/07.91ab5d8e.png",h="/blog/assets/08.c5a40d42.png",m="/blog/assets/09.fac62be1.png",d="/blog/assets/10.5ef8c0c0.png",b="/blog/assets/11.8eb1a549.png",T=JSON.parse('{"title":"Axure 原型模板：网址导航网站 V1.6","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"post/axure/005wangzhi.md","filePath":"post/axure/005wangzhi.md"}'),g={name:"post/axure/005wangzhi.md"},u=r('<h1 id="axure-原型模板-网址导航网站-v1-6" tabindex="-1">Axure 原型模板：网址导航网站 V1.6 <a class="header-anchor" href="#axure-原型模板-网址导航网站-v1-6" aria-label="Permalink to &quot;Axure 原型模板：网址导航网站 V1.6&quot;">​</a></h1><br><p><img src="'+o+'" alt="01"></p><br><p>作品名称：产品导航网</p><p>预览地址：<a href="https://demo.pmdaohang.com/dh/" target="_blank" rel="noreferrer">https://demo.pmdaohang.com/dh/</a></p><p>软件版本：Axure 8</p><p><strong>免费下载方式：</strong></p><p><img src="'+s+'" alt="download"></p><br><p>产品导航网站原型模板，修改后可以创建自己的产品导航网站，免费下载。</p><p><img src="'+p+'" alt="02"></p><br><h2 id="axure-制作网站知识点" tabindex="-1">Axure 制作网站知识点 <a class="header-anchor" href="#axure-制作网站知识点" aria-label="Permalink to &quot;Axure 制作网站知识点&quot;">​</a></h2><p>主要考虑到有些小伙伴对Axure一些功能点不是很熟悉，所以在此对本原型中用到的Axure功能做个简单介绍，方便小伙伴们修改产品导航原型内容</p><p>当然，以下的教程需要小伙伴对Axure有基础的使用，至少对Axure是熟悉的，如果是零基础新手，那么建议可以先看下面内容，如果看不懂，可以先学习下Axure，一般也就一周时间就学会了</p><p>产品导航的原型是使用Axure RP 8 制作的，为什么选择8不选9呢，是因为目前有些功能9还没有，特别是手机适配倍数放大的功能，9是没有的，导致手机屏幕适配效果不是很理想，所以大家要做手机屏幕适配，建议选择RP 8会更合适一点。</p><br><h3 id="_1-网址内容-中继器" tabindex="-1">1.网址内容（中继器） <a class="header-anchor" href="#_1-网址内容-中继器" aria-label="Permalink to &quot;1.网址内容（中继器）&quot;">​</a></h3><p>中继器类似于数据库的概念，可以重复中继器的内容，但是数据可以使用不同的内容</p><p><img src="'+i+'" alt="03"></p><br><h3 id="_2-修改中继器内容" tabindex="-1">2.修改中继器内容 <a class="header-anchor" href="#_2-修改中继器内容" aria-label="Permalink to &quot;2.修改中继器内容&quot;">​</a></h3><p>在画布中双击中继器元件，可进入中继器里，对中继器内容进行编辑</p><p><img src="'+n+'" alt="04"></p><br><h3 id="_3-中继器数据内容" tabindex="-1">3.中继器数据内容 <a class="header-anchor" href="#_3-中继器数据内容" aria-label="Permalink to &quot;3.中继器数据内容&quot;">​</a></h3><p>数据表格中的内容与画布中中继器的元件内容需要一一对应，类似数据库的字段，我这里设置了网站名称（name)、网址链接（link)、简介（jianjie）、图标（icon)字段，数据与画布内容元件通过交互设置“每项加载时”配置对应关系</p><p><img src="'+l+'" alt="05"></p><br><h3 id="_4-交互设置" tabindex="-1">4.交互设置 <a class="header-anchor" href="#_4-交互设置" aria-label="Permalink to &quot;4.交互设置&quot;">​</a></h3><p>我们这里有2组文字，1组图像，所以在“每项加载时”我们设置了一组文字数据来源，一组图标数据来源，这个配置是为了在网页加载时，显示图标、网址名称、网址简介内容</p><p>设置文本值或图片值时，先选中对应元件，</p><p>然后点击&quot;fx&quot;图标，</p><p>然后点击界面中的&quot;插入变量、属性、函数或运算符...&quot;,找到&quot;中继器/数据集&quot;下面的Item开头后面的对应字段，比如name，则是Item.name，然后点击确定，</p><p>此时就将网址名称对应到了数据表格的name字段，网页加载时，网址名称就会显示name字段对应的内容</p><p><img src="'+c+'" alt="06"></p><br><h3 id="_5-设置超链接" tabindex="-1">5.设置超链接 <a class="header-anchor" href="#_5-设置超链接" aria-label="Permalink to &quot;5.设置超链接&quot;">​</a></h3><p>设置超链接需要先进入中继器，我这里是设置的整块内容都可以点击跳转，所以我把整块建了分组，然后在分组上创建超链接，设置超链接依然是找到中继器对应的link字段，这样就会链接到中继器link字段下的地址</p><p><img src="'+_+'" alt="07"></p><br><h3 id="_6-修改网址" tabindex="-1">6.修改网址 <a class="header-anchor" href="#_6-修改网址" aria-label="Permalink to &quot;6.修改网址&quot;">​</a></h3><p>如果你需要替换网址内容，或者修改网址的呈现方式，可以修改如图这部分数据内容，网址展示是按照表格的从上到下顺序依次展示的</p><p><img src="'+h+'" alt="08"></p><br><h3 id="_7-侧边内容-动态面板" tabindex="-1">7.侧边内容（动态面板） <a class="header-anchor" href="#_7-侧边内容-动态面板" aria-label="Permalink to &quot;7.侧边内容（动态面板）&quot;">​</a></h3><p>针对导航内容多的页面，我做了一个侧边栏锚点链接快捷跳转，点击后可以快速定位到对应的导航网站分类上</p><p>固定动态面板：设置为横向左侧，垂直居中</p><p><img src="'+m+'" alt="09"></p><br><p>滚动到元件：鼠标单击交互，配置动作元件选择对应分类的标题元件即可</p><p><img src="'+d+'" alt="10"></p><br><h3 id="_8-qq跳转" tabindex="-1">8.QQ跳转 <a class="header-anchor" href="#_8-qq跳转" aria-label="Permalink to &quot;8.QQ跳转&quot;">​</a></h3><p><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=524858791&amp;site=qq&amp;menu=yes" target="_blank" rel="noreferrer">http://wpa.qq.com/msgrd?v=3&amp;uin=524858791&amp;site=qq&amp;menu=yes</a></p><p>把标注的QQ号码修改成自己的QQ号，然后QQ图标链接到这个地址，访客就可以通过浏览器打开QQ与你聊天。</p><p><img src="'+b+'" alt="11"></p><br><img src="https://visitor-badge.laobi.icu/badge?page_id=pmdaohang_com_005wangzhi&amp;left_color=%23000000&amp;right_color=%2327bba0&amp;left_text=view" style="display:inline-block;" alt="世界是棵树">',60),q=[u];function x(f,k,P,A,Q,w){return e(),t("div",null,q)}const V=a(g,[["render",x]]);export{T as __pageData,V as default};