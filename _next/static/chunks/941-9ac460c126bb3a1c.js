(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{6648:function(e,t,n){"use strict";n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},8173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let r=n(1609),i=n(6720),o=n(7437),a=i._(n(2265)),l=r._(n(4887)),s=r._(n(8321)),c=n(497),u=n(7103),d=n(3938);n(2301);let f=n(291),m=r._(n(1241)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Byggebistand-Troms/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,i,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,n]=a.version.split(".",2),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:s,decoding:c,className:u,style:d,fetchPriority:f,placeholder:m,loading:p,unoptimized:y,fill:v,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:S,sizesInput:C,onLoad:x,onError:j,...E}=e;return(0,o.jsx)("img",{...E,...h(f),loading:p,width:s,height:l,decoding:c,"data-nimg":v?"fill":"1",className:u,style:d,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&g(e,m,b,w,_,y,C))},[n,m,b,w,_,j,y,C,t]),onLoad:e=>{g(e.currentTarget,m,b,w,_,y,C)},onError:e=>{S(!0),"empty"!==m&&_(!0),j&&j(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(d.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=p||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:l,onLoadingComplete:s}=e,g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[b,w]=(0,a.useState)(!1),[_,S]=(0,a.useState)(!1),{props:C,meta:x}=(0,c.getImgProps)(e,{defaultLoader:m.default,imgConf:i,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...C,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(v,{isAppRouter:!n,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(1609)._(n(2265)).default.createContext({})},687:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n;let l,s,c,{src:u,sizes:d,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:y,height:v,fill:b=!1,style:w,overrideSrc:_,onLoad:S,onLoadingComplete:C,placeholder:x="empty",blurDataURL:j,fetchPriority:E,layout:P,objectFit:O,objectPosition:k,lazyBoundary:M,lazyRoot:I,...z}=e,{imgConf:T,showAltText:A,blurComplete:L,defaultLoader:R}=t,N=T||i.imageConfigDefault;if("allSizes"in N)l=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);l={...N,allSizes:e,deviceSizes:t}}if(void 0===R)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let D=z.loader||R;delete z.loader,delete z.srcSet;let B="__next_img_default"in D;if(B){if("custom"===l.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!d&&(d=t)}let F="",U=a(y),G=a(v);if("object"==typeof(n=u)&&(o(n)||void 0!==n.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,j=j||e.blurDataURL,F=e.src,!b){if(U||G){if(U&&!G){let t=U/e.width;G=Math.round(e.height*t)}else if(!U&&G){let t=G/e.height;U=Math.round(e.width*t)}}else U=e.width,G=e.height}}let W=!m&&("lazy"===p||void 0===p);(!(u="string"==typeof u?u:F)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,W=!1),l.unoptimized&&(f=!0),B&&u.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(E="high");let V=a(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},A?{}:{color:"transparent"},w),J=L||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:U,heightInt:G,blurWidth:s,blurHeight:c,blurDataURL:j||"",objectFit:H.objectFit})+'")':'url("'+x+'")',q=J?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},K=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:l({config:t,src:n,quality:o,width:s[u]})}}({config:l,src:u,unoptimized:f,width:U,quality:V,sizes:d,loader:D});return{props:{...z,loading:W?"lazy":p,fetchPriority:E,width:U,height:G,decoding:"async",className:g,style:{...H,...q},sizes:K.sizes,srcSet:K.srcSet,src:_||K.src},meta:{unoptimized:f,priority:m,placeholder:x,fill:b}}}},8321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return d}});let r=n(1609),i=n(6720),o=n(7437),a=i._(n(2265)),l=r._(n(5960)),s=n(2901),c=n(6590),u=n(687);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let m=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return(0,o.jsx)(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,l=r?40*r:t,s=i?40*i:n,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(1609)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(1609),i=n(497),o=n(8173),a=r._(n(1241));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Byggebistand-Troms/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},1241:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5960:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4671:function(e){e.exports={style:{fontFamily:"'__Inter_d9626b', '__Inter_Fallback_d9626b'",fontStyle:"normal"},className:"__className_d9626b"}},4589:function(e,t,n){"use strict";var r=n(2265);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=i},4573:function(e,t,n){"use strict";var r=n(2265);let i=r.forwardRef(function(e,t){let{title:n,titleId:i,...o}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});t.Z=i},9512:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return s}});var r=n(2265),i=["light","dark"],o="(prefers-color-scheme: dark)",a="undefined"==typeof window,l=r.createContext(void 0),s=e=>r.useContext(l)?e.children:r.createElement(u,{...e}),c=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:s=!0,storageKey:u="theme",themes:g=c,defaultTheme:h=a?"system":"light",attribute:y="data-theme",value:v,children:b,nonce:w}=e,[_,S]=r.useState(()=>f(u,h)),[C,x]=r.useState(()=>f(u)),j=v?Object.values(v):g,E=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=p());let r=v?v[t]:t,o=n?m():null,l=document.documentElement;if("class"===y?(l.classList.remove(...j),r&&l.classList.add(r)):r?l.setAttribute(y,r):l.removeAttribute(y),s){let e=i.includes(h)?h:null,n=i.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[]),P=r.useCallback(e=>{let t="function"==typeof e?e(e):e;S(t);try{localStorage.setItem(u,t)}catch(e){}},[t]),O=r.useCallback(e=>{x(p(e)),"system"===_&&a&&!t&&E("system")},[_,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),r.useEffect(()=>{let e=e=>{e.key===u&&P(e.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),r.useEffect(()=>{E(null!=t?t:_)},[t,_]);let k=r.useMemo(()=>({theme:_,setTheme:P,forcedTheme:t,resolvedTheme:"system"===_?C:_,themes:a?[...g,"system"]:g,systemTheme:a?C:void 0}),[_,P,t,C,a,g]);return r.createElement(l.Provider,{value:k},r.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:a,enableColorScheme:s,storageKey:u,themes:g,defaultTheme:h,attribute:y,value:v,children:b,attrs:j,nonce:w}),b)},d=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:a,enableSystem:l,enableColorScheme:s,defaultTheme:c,value:u,attrs:d,nonce:f}=e,m="system"===c,p="class"===a?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(a,"',s='setAttribute';"),g=s?(i.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,o=t?e+"|| ''":"'".concat(r,"'"),l="";return s&&n&&!t&&i.includes(e)&&(l+="d.style.colorScheme = '".concat(e,"';")),"class"===a?t||r?l+="c.add(".concat(o,")"):l+="null":r&&(l+="d[s](n,".concat(o,")")),l},y=t?"!function(){".concat(p).concat(h(t),"}()"):l?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(h("dark"),"}else{").concat(h("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(h(u?"x[e]":"e",!0),"}").concat(m?"":"else{"+h(c,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(h(u?"x[e]":"e",!0),"}else{").concat(h(c,!1,!1),";}").concat(g,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:y}})}),f=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}}]);