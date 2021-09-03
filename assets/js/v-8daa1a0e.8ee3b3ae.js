"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2509],{6464:function(e,t,a){a.r(t),a.d(t,{data:function(){return n}});const n={key:"v-8daa1a0e",path:"/",title:"",lang:"en-US",frontmatter:{home:!0,tagline:null,footer:"https://github.com/code-device/x-build",actions:[{text:"快速上手",link:"/guide/overview/quickstart.html",type:"primary"},{text:"项目简介",link:"/guide/overview/features.html",type:"secondary"}]},excerpt:"",headers:[{level:2,title:"安装CLI",slug:"安装cli",children:[]},{level:2,title:"浏览器支持",slug:"浏览器支持",children:[]},{level:2,title:"基础设施",slug:"基础设施",children:[]},{level:2,title:"贡献代码",slug:"贡献代码",children:[]}],filePathRelative:"README.md",git:{updatedTime:1630636067e3,contributors:[{name:"李旭",email:"461229187@qq.com",commits:1}]}}},5100:function(e,t,a){a.r(t),a.d(t,{default:function(){return O}});var n=a(6252);const l=(0,n.uE)('<div align="center"><a href="https://v3.cn.vuejs.org/" target="blank"><img src="https://img.shields.io/badge/vue-3.0.0-brightgreen.svg"></a><a href="https://www.npmjs.com/package/x-build" target="blank"><img src="https://img.shields.io/npm/v/x-build/next"></a><a href="https://github.com/code-device/x-build/actions" target="blank"><img src="https://github.com/code-device/x-build/workflows/GitHub%20Actions/badge.svg"></a><a href="https://github.com/code-device/x-build/blob/next/LICENSE" target="blank"><img src="https://img.shields.io/github/license/mashape/apistatus.svg"></a><a href="https://github.com/code-device/x-build" target="blank"><img src="https://img.shields.io/github/stars/code-device/x-build.svg?style=social&amp;label=Stars"></a></div>',1),s=(0,n._)("strong",null,"X-BUILD",-1),r=(0,n.Uk)(" 是一个基于 "),i={href:"https://v3.cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("vue3"),o=(0,n.Uk)(" + typescript 搭建的前端脚手架，不同于众多的中后台解决方案（"),u={href:"https://pro.ant.design/docs/getting-started-cn",target:"_blank",rel:"noopener noreferrer"},h=(0,n.Uk)("ant-design-pro"),c=(0,n.Uk)("、"),g={href:"https://panjiachen.github.io/vue-element-admin-site/zh/",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("vue-element-admin"),m=(0,n.Uk)("、"),b={href:"https://d2.pub/zh/doc/d2-admin/",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("d2-admin"),_=(0,n.Uk)(" 等）。它的宗旨是快速创建一套"),v=(0,n._)("strong",null,"纯净",-1),f=(0,n.Uk)("却具备强大基础功能的模板，协助开发者自由发挥快速搭建任何类型的项目。"),U=(0,n._)("strong",null,"X-BUILD",-1),x=(0,n.Uk)(" 还具备另一个强大的功能，就是基于 Lerna 实现的包管理功能，如果你正负责一个前端团队，那这项功能将极大的提升你的团队开发效率，具体使用请查看"),w={href:"/packages",target:"_blank",rel:"noopener noreferrer"},W=(0,n.Uk)("packages"),C=(0,n.Uk)("。"),y=(0,n._)("h2",{id:"安装cli",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#安装cli","aria-hidden":"true"},"#"),(0,n.Uk)(" 安装CLI")],-1),S=(0,n._)("p",null,[(0,n.Uk)("我们推荐使用 npm 的方式进行"),(0,n._)("strong",null,"全局"),(0,n.Uk)("安装：")],-1),E=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,[(0,n._)("span",{class:"token function"},"npm"),(0,n.Uk)(),(0,n._)("span",{class:"token function"},"install"),(0,n.Uk)(" x-build -g\n")])])],-1),I=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,[(0,n._)("span",{class:"token function"},"yarn"),(0,n.Uk)(" global "),(0,n._)("span",{class:"token function"},"add"),(0,n.Uk)(" x-build\n")])])],-1),L=(0,n._)("h2",{id:"浏览器支持",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#浏览器支持","aria-hidden":"true"},"#"),(0,n.Uk)(" 浏览器支持")],-1),j=(0,n.Uk)("本地开发：推荐使用 "),z=(0,n.Uk)(" 最新版浏览器，不支持 Chrome 80 以下版本。"),D=(0,n.Uk)("生产环境：支持现代浏览器, "),G=(0,n.Uk)("不支持 "),q=(0,n.Uk)("。"),A=(0,n.uE)('<table><thead><tr><th>IE</th><th>Edge</th><th>Firefox</th><th>Chrome</th><th>Safari</th></tr></thead><tbody><tr><td>not support</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td><td>last 2 versions</td></tr></tbody></table><h2 id="基础设施" tabindex="-1"><a class="header-anchor" href="#基础设施" aria-hidden="true">#</a> 基础设施</h2><p>脚手架可以快速帮你创建一份空白模板，但这并不意味着脚手架什么也没做，下面从 5 个方面介绍脚手架为你做了哪些基础设施：</p>',3),B=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,"- 内置功能：\n  - 使用 Scss 作为主要的 CSS 预处理器\n  - 内置全局变量并提供多个常用 Mixin\n  - 自适应布局解决方案（根据需求自行根据文档配置）\n  - 根据路由与环境变量自动变化的 title\n- 页面美化：\n  - 静态资源加载页面\n  - 页面载入进度条\n  - 美化滚动条\n- 解决浏览器差异：\n  - 内置 normalize.css\n  - 解决 vh 在移动端与 PC 浏览器高度不一致的问题\n")])],-1),H=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,"- 权限权限：页面访问权限、指令权限\n- 菜单管理：扁平化菜单、模糊搜索\n- 页面缓存（基于 keep-alive 实现）\n")])],-1),M=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,"- 开发环境\n  - Mock 数据\n  - 提供环境变量：开发环境、测试环境、生产环境\n- 组件、数据交互\n  - 基于 Pinia 实现的全局状态管理，更好的支持 TS\n  - 提供一个基于 mitt 的组件联动交互的解决方案（慎用）\n  - 提供多个实用 Hooks\n  - 基于 axios 异步请求封装\n- 内置全局组件\n  - 基于环境变量的静态资源组件\n  - 自动加载 SVG 的图标组件\n")])],-1),P=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,[(0,n.Uk)("- ESLint Airbnb 规范 JavaScript\n- Stylelint 规范 CSS\n- husky "),(0,n._)("span",{class:"token operator"},"&"),(0,n.Uk)(" Commitlint 规范提交记录\n")])])],-1),R=(0,n._)("div",{class:"language-bash ext-sh"},[(0,n._)("pre",{class:"language-bash"},[(0,n._)("code",null,[(0,n.Uk)("- babel 针对 element-plus、lodash 按需加载优化\n- svg 雪碧图打包优化\n- "),(0,n._)("span",{class:"token function"},"gzip"),(0,n.Uk)("\n- 包分析工具\n")])])],-1),T=(0,n._)("h2",{id:"贡献代码",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#贡献代码","aria-hidden":"true"},"#"),(0,n.Uk)(" 贡献代码")],-1),X=(0,n._)("p",null,[(0,n.Uk)("文档代码在项目的 "),(0,n._)("code",null,"/document"),(0,n.Uk)(" 中，由于文档中有部分 vue3 的功能演示，所以采用 vuepress2 开发。")],-1),F=(0,n.Uk)("有任何修改和建议都可以该项目 pr 和 issue，详情请参考"),J={href:"/Contribution.md",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("贡献代码");var O={render:function(e,t){const a=(0,n.up)("OutboundLink"),O=(0,n.up)("CodeGroupItem"),V=(0,n.up)("CodeGroup"),Y=(0,n.up)("Badge");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("p",null,[s,r,(0,n._)("a",i,[d,(0,n.Wm)(a)]),o,(0,n._)("a",u,[h,(0,n.Wm)(a)]),c,(0,n._)("a",g,[p,(0,n.Wm)(a)]),m,(0,n._)("a",b,[k,(0,n.Wm)(a)]),_,v,f]),(0,n._)("p",null,[U,x,(0,n._)("a",w,[W,(0,n.Wm)(a)]),C]),y,S,(0,n.Wm)(V,null,{default:(0,n.w5)((()=>[(0,n.Wm)(O,{title:"npm"},{default:(0,n.w5)((()=>[E])),_:1}),(0,n.Wm)(O,{title:"yarn"},{default:(0,n.w5)((()=>[I])),_:1})])),_:1}),L,(0,n._)("p",null,[j,(0,n.Wm)(Y,{text:"Chrome",vertical:"middle"}),z]),(0,n._)("p",null,[D,(0,n._)("strong",null,[G,(0,n.Wm)(Y,{type:"danger",text:"IE",vertical:"middle"})]),q]),A,(0,n.Wm)(V,null,{default:(0,n.w5)((()=>[(0,n.Wm)(O,{title:" UI "},{default:(0,n.w5)((()=>[B])),_:1}),(0,n.Wm)(O,{title:" 路由 "},{default:(0,n.w5)((()=>[H])),_:1}),(0,n.Wm)(O,{title:" 功能 "},{default:(0,n.w5)((()=>[M])),_:1}),(0,n.Wm)(O,{title:" 规范 "},{default:(0,n.w5)((()=>[P])),_:1}),(0,n.Wm)(O,{title:" 优化 "},{default:(0,n.w5)((()=>[R])),_:1})])),_:1}),T,X,(0,n._)("p",null,[F,(0,n._)("a",J,[N,(0,n.Wm)(a)])])],64)}}}}]);