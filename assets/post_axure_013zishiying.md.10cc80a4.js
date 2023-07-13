import{_ as p,o as t,c as s,U as o}from"./chunks/framework.e95afc2d.js";const r="/blog/assets/01.f5571591.png",a="/blog/assets/02.de5dc95c.png",n="/blog/assets/03.3a85dee3.png",e="/blog/assets/04.7379d53c.png",i="/blog/assets/05.5661815b.png",S=JSON.parse('{"title":"Axure 建站之手机移动端自适应视图","description":"","frontmatter":{},"headers":[],"relativePath":"post/axure/013zishiying.md","filePath":"post/axure/013zishiying.md"}'),g={name:"post/axure/013zishiying.md"},_=o('<h1 id="axure-建站之手机移动端自适应视图" tabindex="-1">Axure 建站之手机移动端自适应视图 <a class="header-anchor" href="#axure-建站之手机移动端自适应视图" aria-label="Permalink to &quot;Axure 建站之手机移动端自适应视图&quot;">​</a></h1><p>Axure 自带自适应功能，可以自适应电脑、平板、手机等不同大小的屏幕，</p><p>要完成手机屏幕的适配，需要做两个地方的设置，</p><p>一个是页面自适应，一个是手机自适应。</p><h3 id="_1-页面自适应" tabindex="-1">1.页面自适应 <a class="header-anchor" href="#_1-页面自适应" aria-label="Permalink to &quot;1.页面自适应&quot;">​</a></h3><p>那我们先聊页面自适应属性，页面自适应属性可以通过菜单栏&quot;项目-自适应视图&quot;中配置，</p><p>自适应视图的意思是，浏览器宽度、高度不同时，就显示条件匹配的视图页面内容，如电脑有些屏幕宽度为1920px、1280px等，手机屏幕宽度为375px，</p><p>在不同的屏幕宽度上，浏览器默认宽度则不同，或者你在电脑屏幕上疯狂拖拽浏览器窗口大小，浏览器则会根据宽度切换到该条件的视图进行显示，</p><p>当然，如果你只做了一种视图，那么不管你如何疯狂拖拽，网页内容是不会变化的，你会看见的是多出了纵向滚动条或者横向滚动条，仅此而已。</p><p>简单针对自适应视图设置中的几个属性进行解释：</p><p><img src="'+r+'" alt="01"></p><p><strong>预设</strong>：系统预设尺寸大小，可以快速填充后面几项设置数据。</p><p><strong>名称</strong>：就是给视图取个名字。条件：触发该自适应视图的条件，浏览器窗口≥某宽度或≤某宽度。</p><p><strong>宽</strong>：设置触发自适应视图宽度，如浏览器窗口小于1280px时，显示该视图的页面内容，手机我设置的宽度为500px，因为目前有些大屏手机，其实逻辑像素已经接近500px了，所以保险起见，设置小于500px则显示手机视图</p><p><strong>高</strong>：一般不设置此项，留空，原理与宽度一个意思。</p><p><strong>继承自</strong>：页面中的默认元素继承自哪个视图，继承的元素可删除，然后会在原来的视图依然存在。</p><br><p>特别解释一下“最大显示分辨率”，意思是超过最大的显示分辨率的屏幕，一律按照此视图内容显示网页内容。</p><p><img src="'+a+'" alt="02"></p><br><p>自适应视图设置好后，就可以在不同大小页面去设计网页内容了。</p><p><img src="'+n+'" alt="03"></p><br><p>生成HTML时，需要在菜单”发布-生成原型文件”的“自适应视图”中勾选自适应视图。</p><p><img src="'+e+'" alt="04"></p><br><h3 id="_2-手机自适应" tabindex="-1">2.手机自适应 <a class="header-anchor" href="#_2-手机自适应" aria-label="Permalink to &quot;2.手机自适应&quot;">​</a></h3><p>聊完页面自适应，再来聊聊手机自适应，</p><p>手机自适应在菜单”发布-生成原型文件”的“手机/移动设备”中进行设置，这里设置的是在手机网页中如何完美显示的问题，如果你不设置，那么可能你手机网页显示了网页内容，然后两边宽度留白很多，或者显示不完网页内容，</p><p>因为你在自适应视图中设计的宽度可能是375px，可能是414px宽度，但是手机的屏幕尺寸种类非常多，设计尺寸并不能完全适应所有手机屏幕，</p><p>那么为了不管哪种宽度，在手机网页上都需要满屏铺满网页才更美观，这里的设置就是干这事儿的。</p><p>简单针对手机自适应设置中的几个属性进行解释：</p><p><img src="'+i+'" alt="05"></p><p><strong>包含视图接口标记</strong>：勾选后，才会启用手机网页自适应屏幕大小。</p><p><strong>宽度</strong>：【重要设置】此处宽度填写在手机的自适应视图中，设计图的基准尺寸，我使用的375px（iPhone 6s）基准进行设计的，所以这里我填写的是375的宽度。</p><p><strong>高度</strong>：这里留空，无需填写。</p><p><strong>初始比例</strong>：这里留空，无需填写，我试了试，这里不填写默认比例为1。</p><p><strong>最小比例</strong>：【重要设置】这项作用是当用户使用比设计图更小的手机浏览网页时，可以等比缩放到手机屏幕宽度，这里设置的是最小值，我设置的0.5，足够使用了。</p><p><strong>最大比例</strong>：【重要设置】原理与最小比例相同，使用比设计图更大的手机屏幕浏览网页时，自动等比放大到手机屏幕宽度，这里我设置的3，目前主流手机的最大屏幕宽度逻辑像素为480，设置3倍已足够使用。</p><p><strong>用户可调节</strong>：填写no即可。</p><p><strong>防止垂直页面滚动（受阻弹性滚动）</strong>：这项我试了几次，没明白有什么影响，可选可不选，大家也可以自己试试，如果知道什么意思，可以留言说一下。</p><p><strong>自动检测和链接电话号码（iOS)</strong>：在iOS中，可以自动检测出电话号码，点击后，可以拨打电话，可选可不选，根据自己情况来吧。</p><p><strong>主屏幕图标</strong>：主要是把网页设置到主屏幕时，显示的图标。iOS屏幕启动画面：网页放到桌面，打开后的启动画面，不多解释，不懂的，要拖出去打。</p><p><strong>隐藏浏览器导航（当从iOS主屏幕启动时）</strong>：iOS打开放到桌面的网页，不会显示浏览器的导航栏和工具栏，比较适合预览APP应用的效果，勾上就行。</p><p><strong>iOS状态栏样式</strong>：default（白底黑字儿），black（黑底白字儿），black(半透明的黑底白字儿)</p><br><p>没有具体的操作步骤，不过我想你看懂了这两处设置的每项参数含义，那么你已经学会了如何去做自适应网页和手机屏幕自适应了。</p><br><img src="https://visitor-badge.laobi.icu/badge?page_id=pmdaohang_com_013zishiying&amp;left_color=%23000000&amp;right_color=%2327bba0&amp;left_text=view" style="display:inline-block;" alt="世界是棵树">',49),c=[_];function l(d,h,m,b,x,u){return t(),s("div",null,c)}const P=p(g,[["render",l]]);export{S as __pageData,P as default};
