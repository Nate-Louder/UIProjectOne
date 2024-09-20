var Ke=Object.defineProperty;var Xe=(t,e,n)=>e in t?Ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _e=(t,e,n)=>Xe(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();function E(){}function te(t,e){for(const n in e)t[n]=e[n];return t}function We(t){return t()}function Le(){return Object.create(null)}function X(t){t.forEach(We)}function pe(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ve(t){return Object.keys(t).length===0}function Fe(t,...e){if(t==null){for(const r of e)r(void 0);return E}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ze(t,e,n){t.$$.on_destroy.push(Fe(e,n))}function et(t,e,n,r){if(t){const i=ze(t,e,n,r);return t[0](i)}}function ze(t,e,n,r){return t[1]&&r?te(n.ctx.slice(),t[1](r(e))):n.ctx}function tt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const c=[],o=Math.max(e.dirty.length,i.length);for(let l=0;l<o;l+=1)c[l]=e.dirty[l]|i[l];return c}return e.dirty|i}return e.dirty}function nt(t,e,n,r,i,c){if(i){const o=ze(e,n,r,c);t.p(o,i)}}function rt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function f(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode&&t.parentNode.removeChild(t)}function Be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function q(){return M(" ")}function ke(){return M("")}function xe(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function F(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ce(t,e){t.value=e??""}function z(t,e,n){t.classList.toggle(e,!!n)}function st(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function ue(t,e){return new t(e)}let ne;function ee(t){ne=t}function $e(){if(!ne)throw new Error("Function called outside component initialization");return ne}function ot(t){$e().$$.after_update.push(t)}function lt(t){$e().$$.on_destroy.push(t)}function ct(){const t=$e();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const c=st(e,n,{cancelable:r});return i.slice().forEach(o=>{o.call(t,c)}),!c.defaultPrevented}return!0}}function De(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const J=[],re=[];let K=[];const be=[],Ue=Promise.resolve();let ve=!1;function Ge(){ve||(ve=!0,Ue.then(Qe))}function ut(){return Ge(),Ue}function we(t){K.push(t)}function Ee(t){be.push(t)}const ye=new Set;let Q=0;function Qe(){if(Q!==0)return;const t=ne;do{try{for(;Q<J.length;){const e=J[Q];Q++,ee(e),at(e.$$)}}catch(e){throw J.length=0,Q=0,e}for(ee(null),J.length=0,Q=0;re.length;)re.pop()();for(let e=0;e<K.length;e+=1){const n=K[e];ye.has(n)||(ye.add(n),n())}K.length=0}while(J.length);for(;be.length;)be.pop()();ve=!1,ye.clear(),ee(t)}function at(t){if(t.fragment!==null){t.update(),X(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(we)}}function ft(t){const e=[],n=[];K.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),K=e}const ce=new Set;let U;function V(){U={r:0,c:[],p:U}}function Z(){U.r||X(U.c),U=U.p}function v(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function w(t,e,n,r){if(t&&t.o){if(ce.has(t))return;ce.add(t),U.c.push(()=>{ce.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function fe(t,e){const n={},r={},i={$$scope:1};let c=t.length;for(;c--;){const o=t[c],l=e[c];if(l){for(const s in o)s in l||(r[s]=1);for(const s in l)i[s]||(n[s]=l[s],i[s]=1);t[c]=l}else for(const s in o)i[s]=1}for(const o in r)o in n||(n[o]=void 0);return n}function de(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function S(t){t&&t.c()}function I(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),we(()=>{const c=t.$$.on_mount.map(We).filter(pe);t.$$.on_destroy?t.$$.on_destroy.push(...c):X(c),t.$$.on_mount=[]}),i.forEach(we)}function O(t,e){const n=t.$$;n.fragment!==null&&(ft(n.after_update),X(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(J.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,r,i,c,o=null,l=[-1]){const s=ne;ee(t);const u=t.$$={fragment:null,ctx:[],props:c,update:E,not_equal:i,bound:Le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Le(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};o&&o(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(_,$,...d)=>{const b=d.length?d[0]:$;return u.ctx&&i(u.ctx[_],u.ctx[_]=b)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](b),a&&dt(t,_)),$}):[],u.update(),a=!0,X(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const _=it(e.target);u.fragment&&u.fragment.l(_),_.forEach(D)}else u.fragment&&u.fragment.c();e.intro&&v(t.$$.fragment),I(t,e.target,e.anchor),Qe()}ee(s)}class T{constructor(){_e(this,"$$");_e(this,"$$set")}$destroy(){O(this,1),this.$destroy=E}$on(e,n){if(!pe(n))return E;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Ve(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ht="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ht);const Y=[];function Ye(t,e){return{subscribe:Ie(t,e).subscribe}}function Ie(t,e=E){let n;const r=new Set;function i(l){if(P(t,l)&&(t=l,n)){const s=!Y.length;for(const u of r)u[1](),Y.push(u,t);if(s){for(let u=0;u<Y.length;u+=2)Y[u][0](Y[u+1]);Y.length=0}}}function c(l){i(l(t))}function o(l,s=E){const u=[l,s];return r.add(u),r.size===1&&(n=e(i,c)||E),l(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:i,update:c,subscribe:o}}function Je(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const c=e.length<2;return Ye(n,(o,l)=>{let s=!1;const u=[];let a=0,_=E;const $=()=>{if(a)return;_();const b=e(r?u[0]:u,o,l);c?o(b):_=pe(b)?b:E},d=i.map((b,k)=>Fe(b,L=>{u[k]=L,a&=~(1<<k),s&&$()},()=>{a|=1<<k}));return s=!0,$(),function(){X(d),_(),s=!1}})}function pt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,c,o=[],l="",s=t.split("/");for(s[0]||s.shift();i=s.shift();)n=i[0],n==="*"?(o.push("wild"),l+="/(.*)"):n===":"?(r=i.indexOf("?",1),c=i.indexOf(".",1),o.push(i.substring(1,~r?r:~c?c:i.length)),l+=~r&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(l+=(~r?"?":"")+"\\"+i.substring(c))):l+="/"+i;return{keys:o,pattern:new RegExp("^"+l+"/?$","i")}}function mt(t){let e,n,r;const i=[t[2]];var c=t[0];function o(l,s){let u={};for(let a=0;a<i.length;a+=1)u=te(u,i[a]);return s!==void 0&&s&4&&(u=te(u,fe(i,[de(l[2])]))),{props:u}}return c&&(e=ue(c,o(t)),e.$on("routeEvent",t[7])),{c(){e&&S(e.$$.fragment),n=ke()},m(l,s){e&&I(e,l,s),A(l,n,s),r=!0},p(l,s){if(s&1&&c!==(c=l[0])){if(e){V();const u=e;w(u.$$.fragment,1,0,()=>{O(u,1)}),Z()}c?(e=ue(c,o(l,s)),e.$on("routeEvent",l[7]),S(e.$$.fragment),v(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}else if(c){const u=s&4?fe(i,[de(l[2])]):{};e.$set(u)}},i(l){r||(e&&v(e.$$.fragment,l),r=!0)},o(l){e&&w(e.$$.fragment,l),r=!1},d(l){l&&D(n),e&&O(e,l)}}}function gt(t){let e,n,r;const i=[{params:t[1]},t[2]];var c=t[0];function o(l,s){let u={};for(let a=0;a<i.length;a+=1)u=te(u,i[a]);return s!==void 0&&s&6&&(u=te(u,fe(i,[s&2&&{params:l[1]},s&4&&de(l[2])]))),{props:u}}return c&&(e=ue(c,o(t)),e.$on("routeEvent",t[6])),{c(){e&&S(e.$$.fragment),n=ke()},m(l,s){e&&I(e,l,s),A(l,n,s),r=!0},p(l,s){if(s&1&&c!==(c=l[0])){if(e){V();const u=e;w(u.$$.fragment,1,0,()=>{O(u,1)}),Z()}c?(e=ue(c,o(l,s)),e.$on("routeEvent",l[6]),S(e.$$.fragment),v(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}else if(c){const u=s&6?fe(i,[s&2&&{params:l[1]},s&4&&de(l[2])]):{};e.$set(u)}},i(l){r||(e&&v(e.$$.fragment,l),r=!0)},o(l){e&&w(e.$$.fragment,l),r=!1},d(l){l&&D(n),e&&O(e,l)}}}function _t(t){let e,n,r,i;const c=[gt,mt],o=[];function l(s,u){return s[1]?0:1}return e=l(t),n=o[e]=c[e](t),{c(){n.c(),r=ke()},m(s,u){o[e].m(s,u),A(s,r,u),i=!0},p(s,[u]){let a=e;e=l(s),e===a?o[e].p(s,u):(V(),w(o[a],1,1,()=>{o[a]=null}),Z(),n=o[e],n?n.p(s,u):(n=o[e]=c[e](s),n.c()),v(n,1),n.m(r.parentNode,r))},i(s){i||(v(n),i=!0)},o(s){w(n),i=!1},d(s){s&&D(r),o[e].d(s)}}}function Ae(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const Oe=Ye(null,function(e){e(Ae());const n=()=>{e(Ae())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Je(Oe,t=>t.location);Je(Oe,t=>t.querystring);const Pe=Ie(void 0);function yt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function bt(t,e,n){let{routes:r={}}=e,{prefix:i=""}=e,{restoreScrollState:c=!1}=e;class o{constructor(g,m){if(!m||typeof m!="function"&&(typeof m!="object"||m._sveltesparouter!==!0))throw Error("Invalid component object");if(!g||typeof g=="string"&&(g.length<1||g.charAt(0)!="/"&&g.charAt(0)!="*")||typeof g=="object"&&!(g instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:C,keys:j}=pt(g);this.path=g,typeof m=="object"&&m._sveltesparouter===!0?(this.component=m.component,this.conditions=m.conditions||[],this.userData=m.userData,this.props=m.props||{}):(this.component=()=>Promise.resolve(m),this.conditions=[],this.props={}),this._pattern=C,this._keys=j}match(g){if(i){if(typeof i=="string")if(g.startsWith(i))g=g.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const H=g.match(i);if(H&&H[0])g=g.substr(H[0].length)||"/";else return null}}const m=this._pattern.exec(g);if(m===null)return null;if(this._keys===!1)return m;const C={};let j=0;for(;j<this._keys.length;){try{C[this._keys[j]]=decodeURIComponent(m[j+1]||"")||null}catch{C[this._keys[j]]=null}j++}return C}async checkConditions(g){for(let m=0;m<this.conditions.length;m++)if(!await this.conditions[m](g))return!1;return!0}}const l=[];r instanceof Map?r.forEach((y,g)=>{l.push(new o(g,y))}):Object.keys(r).forEach(y=>{l.push(new o(y,r[y]))});let s=null,u=null,a={};const _=ct();async function $(y,g){await ut(),_(y,g)}let d=null,b=null;c&&(b=y=>{y.state&&(y.state.__svelte_spa_router_scrollY||y.state.__svelte_spa_router_scrollX)?d=y.state:d=null},window.addEventListener("popstate",b),ot(()=>{yt(d)}));let k=null,L=null;const B=Oe.subscribe(async y=>{k=y;let g=0;for(;g<l.length;){const m=l[g].match(y.location);if(!m){g++;continue}const C={route:l[g].path,location:y.location,querystring:y.querystring,userData:l[g].userData,params:m&&typeof m=="object"&&Object.keys(m).length?m:null};if(!await l[g].checkConditions(C)){n(0,s=null),L=null,$("conditionsFailed",C);return}$("routeLoading",Object.assign({},C));const j=l[g].component;if(L!=j){j.loading?(n(0,s=j.loading),L=j,n(1,u=j.loadingParams),n(2,a={}),$("routeLoaded",Object.assign({},C,{component:s,name:s.name,params:u}))):(n(0,s=null),L=null);const H=await j();if(y!=k)return;n(0,s=H&&H.default||H),L=j}m&&typeof m=="object"&&Object.keys(m).length?n(1,u=m):n(1,u=null),n(2,a=l[g].props),$("routeLoaded",Object.assign({},C,{component:s,name:s.name,params:u})).then(()=>{Pe.set(u)});return}n(0,s=null),L=null,Pe.set(void 0)});lt(()=>{B(),b&&window.removeEventListener("popstate",b)});function R(y){De.call(this,t,y)}function G(y){De.call(this,t,y)}return t.$$set=y=>{"routes"in y&&n(3,r=y.routes),"prefix"in y&&n(4,i=y.prefix),"restoreScrollState"in y&&n(5,c=y.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=c?"manual":"auto")},[s,u,a,r,i,c,R,G]}class vt extends T{constructor(e){super(),N(this,e,bt,_t,P,{routes:3,prefix:4,restoreScrollState:5})}}const wt=[{title:"Running on Fumes",timeOfDay:"Morning",category:"Fitness",people:"Solo",description:"Today I did not feel like running. I was tired and my legs were sore. I decided to go for a run anyway. I ran 3 miles and felt great afterwards. I am glad I went for a run.",location:"Gym"},{title:"Teamwork Triumph",timeOfDay:"Afternoon",category:"Work",people:"Team",description:"Our team worked together to complete a big project ahead of the deadline. Everyone pitched in, and it felt like a real team effort. We celebrated the win with a team lunch.",location:"Office"},{title:"Morning Meditation",timeOfDay:"Morning",category:"Lifestyle",people:"Solo",description:"I woke up early today and spent 20 minutes meditating. It helped me clear my mind and set a calm tone for the rest of the day. I felt more focused and peaceful afterward.",location:"Home"},{title:"A New Skill Learned",timeOfDay:"Evening",category:"Learning",people:"Solo",description:"I spent two hours learning JavaScript concepts I had been struggling with. I finally understood promises and async/await. This accomplishment made me feel much more confident in my coding skills.",location:"Home"},{title:"Group Workout",timeOfDay:"Afternoon",category:"Fitness",people:"Friends",description:"Joined a group workout session with friends today. We pushed each other to complete a tough HIIT workout. It was challenging but rewarding, and we all felt accomplished afterward.",location:"Park"},{title:"Late-Night Problem Solving",timeOfDay:"Night",category:"Work",people:"Solo",description:"I stayed up late to troubleshoot a major bug in our project. After hours of frustration, I finally found the solution. It was a tough night, but the success made it worthwhile.",location:"Home Office"},{title:"A Simple Act of Kindness",timeOfDay:"Morning",category:"Personal",people:"Stranger",description:"Helped a stranger carry groceries to their car today. It was a small act of kindness, but it made me feel really good for making someone’s day a little easier.",location:"Supermarket"},{title:"Family Bonding",timeOfDay:"Evening",category:"Lifestyle",people:"Family",description:"Spent quality time with my family playing board games after dinner. It was a fun and relaxed evening where we laughed and bonded. Moments like these are priceless.",location:"Living Room"},{title:"Unexpected Inspiration",timeOfDay:"Afternoon",category:"Learning",people:"Solo",description:"I was inspired by a podcast I listened to today on personal growth. It made me rethink how I approach challenges in life. I took notes and plan to apply these ideas moving forward.",location:"Coffee Shop"},{title:"DIY Success",timeOfDay:"Morning",category:"Lifestyle",people:"Solo",description:"Today I finally fixed the leaky faucet in my kitchen after watching a tutorial. It took some trial and error, but I’m proud of myself for figuring it out without calling a professional.",location:"Home"}];function kt(t){let e,n,r;return{c(){e=p("div"),n=p("a"),r=M(t[1]),h(n,"href",t[0]),h(n,"class","svelte-yxvb90"),h(e,"class","header-link svelte-yxvb90"),z(e,"active",t[2])},m(i,c){A(i,e,c),f(e,n),f(n,r)},p(i,[c]){c&2&&F(r,i[1]),c&1&&h(n,"href",i[0]),c&4&&z(e,"active",i[2])},i:E,o:E,d(i){i&&D(e)}}}function $t(t,e,n){let{href:r=""}=e,{label:i=""}=e,{activeHref:c=""}=e,o=!1;const l=()=>{window.location.href.split("/").pop()===r.substring(1).split("/").pop()?n(2,o=!0):n(2,o=!1)};return t.$$set=s=>{"href"in s&&n(0,r=s.href),"label"in s&&n(1,i=s.label),"activeHref"in s&&n(3,c=s.activeHref)},t.$$.update=()=>{t.$$.dirty&8&&l()},[r,i,o,c]}class He extends T{constructor(e){super(),N(this,e,$t,kt,P,{href:0,label:1,activeHref:3})}}function Et(t){let e,n,r,i,c,o,l;return n=new He({props:{href:"#/",label:"Home",activeHref:window.location.href}}),o=new He({props:{href:"#/entry-history",label:"Entry History",activeHref:window.location.href}}),{c(){e=p("div"),S(n.$$.fragment),r=q(),i=p("h1"),i.textContent="ReLive",c=q(),S(o.$$.fragment),h(i,"class","svelte-10f8qj2"),h(e,"class","header svelte-10f8qj2")},m(s,u){A(s,e,u),I(n,e,null),f(e,r),f(e,i),f(e,c),I(o,e,null),l=!0},p:E,i(s){l||(v(n.$$.fragment,s),v(o.$$.fragment,s),l=!0)},o(s){w(n.$$.fragment,s),w(o.$$.fragment,s),l=!1},d(s){s&&D(e),O(n),O(o)}}}class jt extends T{constructor(e){super(),N(this,e,null,Et,P,{})}}function It(t){let e,n,r,i,c;n=new jt({});const o=t[1].default,l=et(o,t,t[0],null);return{c(){e=p("div"),S(n.$$.fragment),r=q(),i=p("div"),l&&l.c(),h(i,"class","page-content svelte-zhetw7"),h(e,"class","page-wrapper svelte-zhetw7")},m(s,u){A(s,e,u),I(n,e,null),f(e,r),f(e,i),l&&l.m(i,null),c=!0},p(s,[u]){l&&l.p&&(!c||u&1)&&nt(l,o,s,s[0],c?tt(o,s[0],u,null):rt(s[0]),null)},i(s){c||(v(n.$$.fragment,s),v(l,s),c=!0)},o(s){w(n.$$.fragment,s),w(l,s),c=!1},d(s){s&&D(e),O(n),l&&l.d(s)}}}function Ot(t,e,n){let{$$slots:r={},$$scope:i}=e;return t.$$set=c=>{"$$scope"in c&&n(0,i=c.$$scope)},[i,r]}class qt extends T{constructor(e){super(),N(this,e,Ot,It,P,{})}}function St(t){let e,n,r,i,c;return{c(){e=p("div"),n=p("span"),r=M(t[0]),h(n,"class","button-label svelte-fij0gx"),h(e,"class","button svelte-fij0gx"),z(e,"primary",t[1]==="primary"),z(e,"secondary",t[1]==="secondary"),z(e,"selected",t[1]==="selected")},m(o,l){A(o,e,l),f(e,n),f(n,r),i||(c=xe(e,"click",function(){pe(t[2])&&t[2].apply(this,arguments)}),i=!0)},p(o,[l]){t=o,l&1&&F(r,t[0]),l&2&&z(e,"primary",t[1]==="primary"),l&2&&z(e,"secondary",t[1]==="secondary"),l&2&&z(e,"selected",t[1]==="selected")},i:E,o:E,d(o){o&&D(e),i=!1,c()}}}function Lt(t,e,n){let{label:r=""}=e,{type:i="primary"}=e,{onClick:c=()=>{}}=e;return t.$$set=o=>{"label"in o&&n(0,r=o.label),"type"in o&&n(1,i=o.type),"onClick"in o&&n(2,c=o.onClick)},[r,i,c]}class he extends T{constructor(e){super(),N(this,e,Lt,St,P,{label:0,type:1,onClick:2})}}function Ct(t){let e,n,r,i,c,o,l,s;return c=new he({props:{label:"Create Entry",onClick:Dt}}),l=new he({props:{label:"Previous Entries",type:"secondary"}}),{c(){e=p("div"),n=p("div"),n.innerHTML='<h1 class="svelte-lbue5v">Welcome to <strong class="svelte-lbue5v">ReLive</strong></h1> <h2 class="svelte-lbue5v">Fill out your entry for today, or view previous entries.</h2>',r=q(),i=p("div"),S(c.$$.fragment),o=q(),S(l.$$.fragment),h(n,"class","header svelte-lbue5v"),h(i,"class","actions svelte-lbue5v"),h(e,"class","home svelte-lbue5v")},m(u,a){A(u,e,a),f(e,n),f(e,r),f(e,i),I(c,i,null),f(i,o),I(l,i,null),s=!0},p:E,i(u){s||(v(c.$$.fragment,u),v(l.$$.fragment,u),s=!0)},o(u){w(c.$$.fragment,u),w(l.$$.fragment,u),s=!1},d(u){u&&D(e),O(c),O(l)}}}function Dt(){window.location.href="#/new-entry"}class At extends T{constructor(e){super(),N(this,e,null,Ct,P,{})}}function Pt(){const{subscribe:t,set:e,update:n}=Ie([]);return{subscribe:t,addEntry:r=>n(i=>[r,...i]),removeEntry:r=>n(i=>i.filter(c=>c!==r))}}const qe=Pt();function Ne(t,e,n){const r=t.slice();return r[3]=e[n],r}function Te(t){let e,n,r,i;function c(){return t[2](t[3])}return n=new he({props:{label:t[3],type:t[3]===t[0]?"selected":"primary",onClick:c}}),{c(){e=p("div"),S(n.$$.fragment),r=q(),h(e,"class","multiple-choice__choice svelte-12evq1f")},m(o,l){A(o,e,l),I(n,e,null),f(e,r),i=!0},p(o,l){t=o;const s={};l&2&&(s.label=t[3]),l&3&&(s.type=t[3]===t[0]?"selected":"primary"),l&3&&(s.onClick=c),n.$set(s)},i(o){i||(v(n.$$.fragment,o),i=!0)},o(o){w(n.$$.fragment,o),i=!1},d(o){o&&D(e),O(n)}}}function Ht(t){let e,n,r=ae(t[1]),i=[];for(let o=0;o<r.length;o+=1)i[o]=Te(Ne(t,r,o));const c=o=>w(i[o],1,1,()=>{i[o]=null});return{c(){e=p("div");for(let o=0;o<i.length;o+=1)i[o].c();h(e,"class","multiple-choice svelte-12evq1f")},m(o,l){A(o,e,l);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null);n=!0},p(o,[l]){if(l&3){r=ae(o[1]);let s;for(s=0;s<r.length;s+=1){const u=Ne(o,r,s);i[s]?(i[s].p(u,l),v(i[s],1)):(i[s]=Te(u),i[s].c(),v(i[s],1),i[s].m(e,null))}for(V(),s=r.length;s<i.length;s+=1)c(s);Z()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)v(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)w(i[l]);n=!1},d(o){o&&D(e),Be(i,o)}}}function Nt(t,e,n){let{choices:r=[]}=e,{selection:i=""}=e;const c=o=>n(0,i=o);return t.$$set=o=>{"choices"in o&&n(1,r=o.choices),"selection"in o&&n(0,i=o.selection)},[i,r,c]}class Tt extends T{constructor(e){super(),N(this,e,Nt,Ht,P,{choices:1,selection:0})}}function Mt(t){let e,n,r,i,c,o,l;return{c(){e=p("div"),n=p("span"),r=M(t[2]),i=q(),c=p("input"),h(n,"class","text-input__label svelte-dlh3ue"),h(c,"type","text"),h(c,"placeholder",t[1]),h(c,"class","svelte-dlh3ue"),h(e,"class","text-input svelte-dlh3ue")},m(s,u){A(s,e,u),f(e,n),f(n,r),f(e,i),f(e,c),Ce(c,t[0]),o||(l=xe(c,"input",t[3]),o=!0)},p(s,[u]){u&4&&F(r,s[2]),u&2&&h(c,"placeholder",s[1]),u&1&&c.value!==s[0]&&Ce(c,s[0])},i:E,o:E,d(s){s&&D(e),o=!1,l()}}}function Rt(t,e,n){let{value:r=""}=e,{placeholder:i=""}=e,{label:c="Text Input"}=e;function o(){r=this.value,n(0,r)}return t.$$set=l=>{"value"in l&&n(0,r=l.value),"placeholder"in l&&n(1,i=l.placeholder),"label"in l&&n(2,c=l.label)},[r,i,c,o]}class Wt extends T{constructor(e){super(),N(this,e,Rt,Mt,P,{value:0,placeholder:1,label:2})}}function Ft(t){let e,n,r;function i(o){t[5](o)}let c={choices:t[2]};return t[0]!==void 0&&(c.selection=t[0]),e=new Tt({props:c}),re.push(()=>je(e,"selection",i)),{c(){S(e.$$.fragment)},m(o,l){I(e,o,l),r=!0},p(o,l){const s={};l&4&&(s.choices=o[2]),!n&&l&1&&(n=!0,s.selection=o[0],Ee(()=>n=!1)),e.$set(s)},i(o){r||(v(e.$$.fragment,o),r=!0)},o(o){w(e.$$.fragment,o),r=!1},d(o){O(e,o)}}}function zt(t){let e,n,r;function i(o){t[4](o)}let c={};return t[0]!==void 0&&(c.value=t[0]),e=new Wt({props:c}),re.push(()=>je(e,"value",i)),{c(){S(e.$$.fragment)},m(o,l){I(e,o,l),r=!0},p(o,l){const s={};!n&&l&1&&(n=!0,s.value=o[0],Ee(()=>n=!1)),e.$set(s)},i(o){r||(v(e.$$.fragment,o),r=!0)},o(o){w(e.$$.fragment,o),r=!1},d(o){O(e,o)}}}function Bt(t){let e,n,r,i,c,o,l,s,u;const a=[zt,Ft],_=[];function $(d,b){return d[3]==="text"?0:1}return l=$(t),s=_[l]=a[l](t),{c(){e=p("div"),n=p("div"),r=p("h2"),i=M(t[1]),c=q(),o=p("div"),s.c(),h(n,"class","question__header svelte-jhlkkh"),h(o,"class","question__body svelte-jhlkkh"),h(e,"class","question svelte-jhlkkh")},m(d,b){A(d,e,b),f(e,n),f(n,r),f(r,i),f(e,c),f(e,o),_[l].m(o,null),u=!0},p(d,[b]){(!u||b&2)&&F(i,d[1]);let k=l;l=$(d),l===k?_[l].p(d,b):(V(),w(_[k],1,1,()=>{_[k]=null}),Z(),s=_[l],s?s.p(d,b):(s=_[l]=a[l](d),s.c()),v(s,1),s.m(o,null))},i(d){u||(v(s),u=!0)},o(d){w(s),u=!1},d(d){d&&D(e),_[l].d()}}}function xt(t,e,n){let{question:r=""}=e,{choices:i=[]}=e,{answer:c=""}=e,{type:o=""}=e;function l(u){c=u,n(0,c)}function s(u){c=u,n(0,c)}return t.$$set=u=>{"question"in u&&n(1,r=u.question),"choices"in u&&n(2,i=u.choices),"answer"in u&&n(0,c=u.answer),"type"in u&&n(3,o=u.type)},[c,r,i,o,l,s]}class Ut extends T{constructor(e){super(),N(this,e,xt,Bt,P,{question:1,choices:2,answer:0,type:3})}}function Gt(t){var a,_,$;let e,n,r,i,c,o,l;function s(d){t[4](d)}let u={question:(a=t[2][t[0]])==null?void 0:a.question,choices:(_=t[2][t[0]])==null?void 0:_.choices,type:($=t[2][t[0]])==null?void 0:$.type};return t[1]!==void 0&&(u.answer=t[1]),n=new Ut({props:u}),re.push(()=>je(n,"answer",s)),o=new he({props:{label:"Next",onClick:t[3]}}),{c(){e=p("div"),S(n.$$.fragment),i=q(),c=p("div"),S(o.$$.fragment),h(c,"class","next-button svelte-nz2zqn"),h(e,"class","new-entry svelte-nz2zqn")},m(d,b){A(d,e,b),I(n,e,null),f(e,i),f(e,c),I(o,c,null),l=!0},p(d,[b]){var L,B,R;const k={};b&1&&(k.question=(L=d[2][d[0]])==null?void 0:L.question),b&1&&(k.choices=(B=d[2][d[0]])==null?void 0:B.choices),b&1&&(k.type=(R=d[2][d[0]])==null?void 0:R.type),!r&&b&2&&(r=!0,k.answer=d[1],Ee(()=>r=!1)),n.$set(k)},i(d){l||(v(n.$$.fragment,d),v(o.$$.fragment,d),l=!0)},o(d){w(n.$$.fragment,d),w(o.$$.fragment,d),l=!1},d(d){d&&D(e),O(n),O(o)}}}function Qt(t,e,n){const r=[{type:"text",question:"Give your accomplishment a fun and remeberable title"},{type:"multiple-choice",question:"What time of day did this accomplishment take place?",choices:["Morning","Afternoon","Evening","Night"]},{type:"multiple-choice",question:"What category would you say this accomplishment made an imporvement in your life?",choices:["Learning","Fitness","Work","Personal","Lifestyle","Other"]},{type:"text",question:"Were others involved in this accomplishment? If so add their names to rember this moment together"},{type:"text",question:"Add a description of the accomplishment"}];let i=0,c={},o="";function l(){switch(i){case 0:c.title=o;break;case 1:c.timeOfDay=o;break;case 2:c.category=o;break;case 3:c.people=o;break;case 4:c.description=o;break}i>=r.length-1?(qe.addEntry(c),window.location.href="#/entry-history"):n(0,i+=1),n(1,o="")}function s(u){o=u,n(1,o)}return[i,o,r,l,s]}class Yt extends T{constructor(e){super(),N(this,e,Qt,Gt,P,{})}}function Jt(t){let e,n,r,i=t[0].title+"",c,o,l,s,u,a,_,$=t[0].timeOfDay+"",d,b,k,L,B,R,G=t[0].category+"",y,g,m,C,j,H,ie=t[0].people+"",me,Se,se,oe,le=t[0].description+"",ge;return{c(){e=p("div"),n=p("div"),r=p("h2"),c=M(i),o=q(),l=p("div"),s=p("div"),u=p("h3"),u.textContent="Time of Day",a=q(),_=p("p"),d=M($),b=q(),k=p("div"),L=p("h3"),L.textContent="Category",B=q(),R=p("p"),y=M(G),g=q(),m=p("div"),C=p("h3"),C.textContent="People Involved",j=q(),H=p("p"),me=M(ie),Se=q(),se=p("div"),oe=p("p"),ge=M(le),h(r,"class","svelte-pbjrb2"),h(u,"class","svelte-pbjrb2"),h(_,"class","svelte-pbjrb2"),h(s,"class","wrapper svelte-pbjrb2"),h(L,"class","svelte-pbjrb2"),h(R,"class","svelte-pbjrb2"),h(k,"class","category__wrapper svelte-pbjrb2"),h(C,"class","svelte-pbjrb2"),h(H,"class","svelte-pbjrb2"),h(m,"class","wrapper svelte-pbjrb2"),h(l,"class","top svelte-pbjrb2"),h(oe,"class","svelte-pbjrb2"),h(se,"class","description__wrapper svelte-pbjrb2"),h(n,"class","entry svelte-pbjrb2"),h(e,"class","previous-entry svelte-pbjrb2")},m(W,x){A(W,e,x),f(e,n),f(n,r),f(r,c),f(n,o),f(n,l),f(l,s),f(s,u),f(s,a),f(s,_),f(_,d),f(l,b),f(l,k),f(k,L),f(k,B),f(k,R),f(R,y),f(l,g),f(l,m),f(m,C),f(m,j),f(m,H),f(H,me),f(n,Se),f(n,se),f(se,oe),f(oe,ge)},p(W,[x]){x&1&&i!==(i=W[0].title+"")&&F(c,i),x&1&&$!==($=W[0].timeOfDay+"")&&F(d,$),x&1&&G!==(G=W[0].category+"")&&F(y,G),x&1&&ie!==(ie=W[0].people+"")&&F(me,ie),x&1&&le!==(le=W[0].description+"")&&F(ge,le)},i:E,o:E,d(W){W&&D(e)}}}function Kt(t,e,n){let{entry:r={title:"Title",timeOfDay:"Time of Day",category:"Category",people:"People",description:"Description"}}=e;return t.$$set=i=>{"entry"in i&&n(0,r=i.entry)},[r]}class Xt extends T{constructor(e){super(),N(this,e,Kt,Jt,P,{entry:0})}}function Me(t,e,n){const r=t.slice();return r[1]=e[n],r}function Re(t){let e,n;return e=new Xt({props:{entry:t[1]}}),{c(){S(e.$$.fragment)},m(r,i){I(e,r,i),n=!0},p(r,i){const c={};i&1&&(c.entry=r[1]),e.$set(c)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function Vt(t){let e,n,r,i,c=ae(t[0]),o=[];for(let s=0;s<c.length;s+=1)o[s]=Re(Me(t,c,s));const l=s=>w(o[s],1,1,()=>{o[s]=null});return{c(){e=p("div"),n=p("h2"),n.textContent="Previous Entries",r=q();for(let s=0;s<o.length;s+=1)o[s].c();h(n,"class","svelte-1g66fsl"),h(e,"class","previous-entries svelte-1g66fsl")},m(s,u){A(s,e,u),f(e,n),f(e,r);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);i=!0},p(s,[u]){if(u&1){c=ae(s[0]);let a;for(a=0;a<c.length;a+=1){const _=Me(s,c,a);o[a]?(o[a].p(_,u),v(o[a],1)):(o[a]=Re(_),o[a].c(),v(o[a],1),o[a].m(e,null))}for(V(),a=c.length;a<o.length;a+=1)l(a);Z()}},i(s){if(!i){for(let u=0;u<c.length;u+=1)v(o[u]);i=!0}},o(s){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)w(o[u]);i=!1},d(s){s&&D(e),Be(o,s)}}}function Zt(t,e,n){let r;return Ze(t,qe,i=>n(0,r=i)),[r]}class en extends T{constructor(e){super(),N(this,e,Zt,Vt,P,{})}}function tn(t){let e,n;return e=new vt({props:{routes:t[0]}}),{c(){S(e.$$.fragment)},m(r,i){I(e,r,i),n=!0},p:E,i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function nn(t){let e,n;return e=new qt({props:{$$slots:{default:[tn]},$$scope:{ctx:t}}}),{c(){S(e.$$.fragment)},m(r,i){I(e,r,i),n=!0},p(r,[i]){const c={};i&2&&(c.$$scope={dirty:i,ctx:r}),e.$set(c)},i(r){n||(v(e.$$.fragment,r),n=!0)},o(r){w(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function rn(t){const e={"/":At,"/entry-history":en,"/new-entry":Yt};return wt.forEach(n=>{qe.addEntry(n)}),[e]}class sn extends T{constructor(e){super(),N(this,e,rn,nn,P,{})}}new sn({target:document.getElementById("app")});
