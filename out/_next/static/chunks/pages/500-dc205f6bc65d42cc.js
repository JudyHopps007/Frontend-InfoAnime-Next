(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{7163:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return t(4046)}])},5889:function(e,n,t){"use strict";t.d(n,{Z:function(){return Layout}});var a=t(5893),r=t(1163),s=t(9008),o=t.n(s),i=t(1664),l=t.n(i),c=t(5675),d=t.n(c);t(9603);var m=t(7294),u=t(6154),h=t(4737);function Navbar(){let e;let n=(0,m.useRef)(null),[t,s]=(0,m.useState)(""),[o,i]=(0,m.useState)(!1),[c,b]=(0,m.useState)([]),x=h.Z.Search,p=(0,m.useCallback)(async n=>{s(n.target.value),""!==n.target.value?(await (clearTimeout(e),new Promise(function(n){e=setTimeout(function(){n(null)},700)})),u.Z.get(x+n.target.value).then(e=>b(e.data.data)).catch(e=>console.log(e.message))):b([])},[x]),j=(0,m.useCallback)(e=>{n.current&&!n.current.contains(e.target)&&(i(!1),window.removeEventListener("click",j))},[]),f=(0,m.useCallback)(()=>{i(!0),window.removeEventListener("click",j)},[j]),v=(0,r.useRouter)(),[w,g]=(0,m.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"navbar bg-base-100",children:[(0,a.jsx)("div",{className:"navbar-start",children:(0,a.jsxs)("div",{className:"dropdown",children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),(0,a.jsxs)("ul",{tabIndex:0,className:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/",className:"/"===v.pathname?"justify-between border-solid border-2 rounded-xl border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/movie",className:"/movie"===v.pathname?"justify-between border-solid border-2 rounded-xl border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Movie"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/about",className:"/about"===v.pathname?"justify-between border-solid border-2 rounded-xl border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"About"})})]})]})}),(0,a.jsx)("div",{className:"navbar-center",children:(0,a.jsx)(l(),{href:"/",className:"normal-case text-2xl font-bold text-indigo-100",children:(0,a.jsx)(d(),{alt:"logo",src:"/alice.png",width:50,height:10})})}),(0,a.jsx)("div",{className:"navbar-end",children:(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search",className:"input input-ghost w-full max-w-xs rounded-xl",onChange:p,onFocus:f,value:t}),(0,a.jsx)("div",{className:"",children:o&&c&&t?t.length>0&&(0,a.jsx)("ul",{className:"absolute z-50 border border-cyan-400 bg-base-100 rounded-xl",children:c.map(e=>{let{mal_id:n,title:t,url:r}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:r,children:(0,a.jsx)("p",{className:"font-semibold transition duration-500 ease-in-out hover:text-blue-500",children:t})})},n)})}):null})]})})]})})}function Layout(e){let n=(0,r.useRouter)(),t="/alice.png";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("link",{rel:"icon",type:"image/png",href:t}),(0,a.jsx)("link",{rel:"shorcut icon",href:t}),(0,a.jsx)("link",{rel:"canonical",href:n.pathname}),(0,a.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"title",content:e.name}),(0,a.jsx)("meta",{name:"description",content:"InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList"}),(0,a.jsx)("meta",{name:"keywords",content:"infoanime, animeinfo, anime, info, ianime, animes"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("meta",{name:"language",content:"id"}),(0,a.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,a.jsx)("meta",{name:"author",content:e.name}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,a.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,a.jsx)("meta",{name:"og:locale",property:"og:locale",content:"id"}),(0,a.jsx)("meta",{name:"og:title",property:"og:title",content:e.name}),(0,a.jsx)("meta",{name:"og:description",property:"og:description",content:"InfoAnime adalah informasi seputar anime series tv yg akan rilis dan movie, berdasarkan informasi bersumber dari MyAnimeList"}),(0,a.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:e.name}),(0,a.jsx)("meta",{name:"og:type",property:"og:type",content:"website"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:e.name}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",property:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{httpEquiv:"content-language",content:"id"}),(0,a.jsx)("title",{children:e.name+" | "+e.title})]}),(0,a.jsxs)("div",{className:"",children:[e.children,(0,a.jsx)(Navbar,{}),(0,a.jsx)("div",{className:"mt-10"})]})]})}},4737:function(e,n,t){"use strict";t.d(n,{Z:function(){return ENV}});let a="https://api.jikan.moe/v4";let ENV=class ENV{};ENV.Home=a+"/seasons/upcoming",ENV.Movie=a+"/anime?type=movie&status=upcoming",ENV.Search=a+"/anime?q=",ENV.Detail=a+"/anime/:id/full",ENV.NODE_ENV="dev"},4046:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return InternalSystemError}});var a=t(5893),r=t(5889);function InternalSystemError(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{title:"Internal System Error",name:"InfoAnime"}),(0,a.jsxs)("h1",{className:"font-bold text-center",children:["I don't know what is wrong but, you can go"," ",(0,a.jsxs)("button",{onClick:function(){window.history.back()},className:"font-bold",children:[" ","back"," "]})," ","or"," ",(0,a.jsxs)("button",{onClick:function(){window.location.href="/"},className:"font-bold",children:[" ","refresh"," "]})," ","this page"]})]})}}},function(e){e.O(0,[676,774,888,179],function(){return e(e.s=7163)}),_N_E=e.O()}]);