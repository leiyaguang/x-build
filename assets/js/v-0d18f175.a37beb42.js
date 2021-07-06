(self.webpackChunk=self.webpackChunk||[]).push([[8243],{9025:function(e,t,n){"use strict";n.r(t),n.d(t,{data:function(){return a}});const a={key:"v-0d18f175",path:"/guide/standard/git-hook.html",title:"Git Hook",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"husky",slug:"husky",children:[]},{level:2,title:"跳过检查",slug:"跳过检查",children:[]}],filePathRelative:"guide/standard/git-hook.md",git:{updatedTime:162556348e4,contributors:[]}}},4499:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});const a=(0,n(6252).uE)('<h1 id="git-hook" tabindex="-1"><a class="header-anchor" href="#git-hook" aria-hidden="true">#</a> Git Hook</h1><p>git hook 结合 ESLint 与 StyleLint，在 git 提交代码的时候进行代码风格校验，如果校验没通过，则提交失败。</p><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h2><p>当我们执行 npm run lint 的时候，系统会校验我们所有的代码，这将浪费大量的时间，如果项目从一开始就保证了提交前校验代码的工作，那么多余的代码校验都是徒劳的。所以我们只想校验我们自己提交的代码，这个时候我们引用了 <code>husky</code>。</p><p><code>husky</code> 的解决方案就是将代码校验放到本地，在 commit 之前先对缓存区里的代码做一次 Lint 校验。</p><h2 id="跳过检查" tabindex="-1"><a class="header-anchor" href="#跳过检查" aria-hidden="true">#</a> 跳过检查</h2><p><strong>不建议</strong>你这么做，但你执意如此：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&quot;xxx&quot;</span> --no-verify\n</code></pre></div>',8);var i={render:function(e,t){return a}}}}]);