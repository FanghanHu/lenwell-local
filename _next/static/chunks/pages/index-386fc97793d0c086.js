(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2819)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){i=!0,s=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw s}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),c=n(880),o=n(9246);var d={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var s=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;d[t+"%"+n+(s?"%"+s:"")]=!0}}var m=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),a=l.default.useMemo((function(){var t=s(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),m=a.href,f=a.as,h=e.children,x=e.replace,p=e.shallow,v=e.scroll,y=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var g=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,j=s(o.useIntersection({rootMargin:"200px"}),2),b=j[0],w=j[1],N=l.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);l.default.useEffect((function(){var e=w&&n&&i.isLocalURL(m),t="undefined"!==typeof y?y:r&&r.locale,s=d[m+"%"+f+(t?"%"+t:"")];e&&!s&&u(r,m,f,{locale:t})}),[f,m,w,y,n,r]);var k={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,s,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[s?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,r,m,f,x,p,v,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(m)&&u(r,m,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof y?y:r&&r.locale,S=r&&r.isLocaleDomain&&i.getDomainLocale(f,_,r&&r.locales,r&&r.domainLocales);k.href=S||i.addBasePath(i.addLocale(f,_,r&&r.defaultLocale))}return l.default.cloneElement(t,k)};t.default=m},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(c){i=!0,s=c}finally{try{l||null==n.return||n.return()}finally{if(i)throw s}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,d=a.useRef(),u=s(a.useState(!1),2),m=u[0],f=u[1],h=s(a.useState(t?t.current:null),2),x=h[0],p=h[1],v=a.useCallback((function(e){d.current&&(d.current(),d.current=void 0),r||m||e&&e.tagName&&(d.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=o.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),o.push(n));if(t)return t;var s=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=s.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:s}),t}(n),s=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(s);var t=o.findIndex((function(e){return e.root===s.root&&e.margin===s.margin}));t>-1&&o.splice(t,1)}}}(e,(function(e){return e&&f(e)}),{root:x,rootMargin:n}))}),[r,x,n,m]);return a.useEffect((function(){if(!i&&!m){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[m]),a.useEffect((function(){t&&p(t.current)}),[t]),[v,m]};var a=n(7294),l=n(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,o=[]},2819:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),s=n(7294);function a(e){var t=e.startNumber,n=e.endNumber,a=e.duration,l=(0,s.useState)(t),i=l[0],c=l[1],o=Math.round((n-t)/(a/13));return(0,s.useEffect)((function(){var e;return i<n&&(e=setTimeout((function(){c(Math.min(n,i+o))}),13)),function(){clearTimeout(e)}}),[i]),(0,r.jsx)("span",{children:i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})}var l=n(6852),i=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function d(e){var t=e.image,n=e.imageScale,a=void 0===n?110:n,l=e.isReverse,c=void 0!==l&&l,d=e.style,u=e.className,m=void 0===u?"":u,f=(0,s.useRef)(),h=(0,s.useRef)(0);return(0,s.useEffect)((function(){var e=function(e){var t=Date.now();if(t-h.current>30){var n=(e.x/window.innerWidth-.5)*(a-100)/a*100,r=(e.y/window.innerHeight-.5)*(a-100)/a*100;c&&(n=-n,r=-r),f.current.style.transform="translate(".concat(n,"%, ").concat(r,"%)"),h.current=t}};return document.body.addEventListener("mousemove",e),function(){document.body.removeEventListener("mousemove",e)}}),[]),(0,r.jsx)("img",{src:t,alt:"parallax",ref:f,className:"".concat(i().parallax," ").concat(m),style:o({width:a+"%",height:a+"%",top:-(a-100)/2+"%",left:-(a-100)/2+"%"},d)})}var u=n(9001),m=n.n(u);function f(e){var t=e.scrollTo,n=e.color;return(0,r.jsx)("a",{className:m()["scroll-button"],href:"#".concat(t),style:{position:"absolute",bottom:"0.5rem",left:"calc(50% - 22px)"},children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"9",viewBox:"0 0 44.292 9.266",children:(0,r.jsx)("g",{id:"Chevon_1",transform:"translate(1.266 1.266)",children:(0,r.jsx)("path",{id:"Chevon_1-2",d:"M46.76,9,25.88,16,5,9",transform:"translate(-5 -9)",fill:"none",stroke:n,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})})})})}var h=n(9470),x=n.n(h);function p(){return(0,r.jsxs)("div",{className:"vh-100 position-relative text-center segoe overflow-hidden",children:[(0,r.jsx)(d,{image:"/bg-home.jpg",isReverse:!0}),(0,r.jsxs)("div",{className:"d-flex flex-column justify-content-around h-100",children:[(0,r.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center",children:[(0,r.jsx)("img",{className:"my-5 ".concat(x()["logo-white"]),src:"/Lenwell-Digital-Logo-No-BG.png",alt:"lenwell"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-white text-shadow h5 fw-light",children:"Cellphone, Tablets, Smart Watch"}),(0,r.jsx)("div",{className:"text-white text-shadow h3 fw-normal",children:"Repair Service and Parts Provider"})]})]}),(0,r.jsxs)("div",{className:"text-white",children:[(0,r.jsxs)("div",{className:"display-4 fw-normal",children:[(0,r.jsx)(a,{startNumber:1e4,endNumber:35e3,duration:3e3}),"+"]}),(0,r.jsxs)("div",{className:"h4 mt-1 fw-light",children:[(0,r.jsx)("div",{children:"Devices Serviced"}),(0,r.jsx)("div",{children:"Since 2015"})]})]})]}),(0,r.jsx)(f,{scrollTo:"page2",color:"#fff"})]})}var v=n(1664);function y(){return(0,r.jsxs)("div",{className:"segoe",id:"page2",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"mx-2 my-3 my-sm-2 my-md-3 my-lg-5",children:[(0,r.jsx)("div",{className:"h3 mb-1",children:"Fast and Reliable Repair Service"}),(0,r.jsx)("div",{className:"h5 text-muted",children:"For Apple and Samsung devices"})]})}),(0,r.jsx)("div",{className:"background background-scroll-parallax px-2 px-md-3 py-2 py-lg-5",style:{backgroundImage:"url(/bg-home2.jpg)"},children:(0,r.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,r.jsxs)("div",{className:"glass glass-dark shadow text-white w-fit-content p-4",children:[(0,r.jsxs)("ul",{className:"list-unstyled h4 md-h1 fw-light text-nowrap",children:[(0,r.jsx)("li",{children:"\u2713 Glass Repair"}),(0,r.jsx)("li",{children:"\u2713 LCD Screen Replacement"}),(0,r.jsx)("li",{children:"\u2713 Touch Pad Digitizer Repair"}),(0,r.jsx)("li",{children:"\u2713 Battery Replacement"}),(0,r.jsx)("li",{children:"\u2713 Charging Port Repair"}),(0,r.jsx)("li",{children:"\u2713 Speaker Repair"})]}),(0,r.jsx)(v.default,{href:"/repair-service",children:(0,r.jsx)("a",{className:"btn btn-primary h5 p-1",children:"Price Estimate"})})]}),(0,r.jsx)("div",{className:"w-md-25"})]})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center",children:(0,r.jsxs)("div",{className:"text-center mt-5",children:[(0,r.jsx)("div",{className:"display-6 fw-bold",children:"Need it fast?"}),(0,r.jsx)("div",{className:"h6 fw-light",children:"We can get it done under 30 mins"})]})}),(0,r.jsxs)("div",{className:"col-12 col-md-6 col-xl-4 text-center py-5",children:[(0,r.jsx)("img",{width:200,src:"/mobile-repair-logo.svg",alt:"lcd swap"}),(0,r.jsx)("div",{className:"fw-bold mt-3",children:"Screen Swap Service"}),(0,r.jsx)("div",{children:"Walk out in 30 mins"}),(0,r.jsx)("div",{children:"We use genuine LCD only"}),(0,r.jsx)("div",{children:"Fix broken screen, touch issue"}),(0,r.jsx)(v.default,{href:"/lcd-swap",children:(0,r.jsx)("a",{className:"link mt-5",children:"Learn more"})})]})]})})]})}function g(){return(0,r.jsxs)("div",{className:"segoe py-1",style:{backgroundColor:"rgba(200, 245, 255, 0.2)"},children:[(0,r.jsxs)("div",{className:"text-center my-5",children:[(0,r.jsx)("div",{className:"display-6 fw-bold mb-3 pt-5",children:"Original Replacement Parts"}),(0,r.jsx)("div",{className:"h6 fw-light m-1",children:"iPhone, iPad, Apple Watch LCD"}),(0,r.jsx)("div",{className:"h6 fw-light m-1 mt-0",children:"Samsung LCD"})]}),(0,r.jsx)("div",{className:"container",style:{marginBottom:"-10px",zIndex:-1},children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-end",children:[(0,r.jsx)("div",{className:"col-7 col-lg-6",children:(0,r.jsx)("img",{src:"/iPads.jpg",style:{mixBlendMode:"multiply"},alt:"ipads",width:"100%"})}),(0,r.jsx)("div",{className:"col-4 col-lg-3",children:(0,r.jsx)("img",{src:"/samsung.jpg",style:{mixBlendMode:"multiply"},alt:"samsung",width:"100%"})})]})}),(0,r.jsx)("div",{className:"py-5 px-2 text-white position-relative",style:{backgroundColor:"#4778FF"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12 col-md-6 d-flex flex-column justify-content-center",children:(0,r.jsx)("div",{className:"display-5 text-center my-3 fw-bold",children:"Quality OEM Parts"})}),(0,r.jsx)("div",{className:"col-12 col-md-6 my-3",children:(0,r.jsxs)("ul",{className:"list-unstyled h4 md-h1 fw-light text-nowrap",children:[(0,r.jsx)("li",{children:"\u2713 Genuine screen"}),(0,r.jsx)("li",{children:"\u2713 Ship from Texas"}),(0,r.jsx)("li",{children:"\u2713 2 to 3 days to most US city"}),(0,r.jsx)("li",{children:"\u2713 Thoroughly tested"}),(0,r.jsx)("li",{children:"\u2713 30 days satisfaction guarantee"})]})})]})})}),(0,r.jsxs)("div",{className:"d-flex justify-content-center align-items-center m-5",children:[(0,r.jsx)("div",{className:"display-6 fw-bold me-4",children:"Shop Online:"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{href:"https://www.ebay.com/str/lenwellscreenfactory",children:(0,r.jsx)("img",{className:x()["ecommerce-icon"],src:"/ebay.png",alt:"eBay"})}),(0,r.jsx)("hr",{}),(0,r.jsx)("a",{href:"https://www.amazon.com/s?me=A102LBUVI7JL8T&marketplaceID=ATVPDKIKX0DER",children:(0,r.jsx)("img",{className:x()["ecommerce-icon"],src:"/amazon.png",alt:"amazon"})})]})]})]})}function j(){return(0,r.jsxs)("div",{className:"segoe",children:[(0,r.jsxs)("div",{className:"background background-scroll-parallax px-2 px-md-3 py-2 py-lg-5 text-white text-center",style:{backgroundImage:"url(/bg-home4.jpg)"},children:[(0,r.jsx)("div",{className:"mt-5 mb-1 display-5 fw-bold",children:"LCD Buyback"}),(0,r.jsx)("div",{className:"h6 fw-light mt-3 mb-5",children:"Sell your broken screen to us"}),(0,r.jsx)(v.default,{href:"/lcd-buyback",children:(0,r.jsx)("a",{className:"h6 text-white fw-light text-decoration-underline mb-5",children:"learn more"})})]}),(0,r.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center p-5 text-center",children:[(0,r.jsxs)("div",{className:"m-2 m-lg-5",children:[(0,r.jsx)("div",{className:"".concat(x()["buyback-icon"]," p-2"),children:(0,r.jsx)("img",{className:"position-absolute top-50 start-50 translate-middle",src:"/icon-package.png",alt:"packages"})}),(0,r.jsx)("div",{className:"h5 fw-light",children:"Mail your screen to us"})]}),(0,r.jsxs)("div",{className:"m-2 m-lg-5",children:[(0,r.jsx)("div",{className:x()["buyback-icon"],children:(0,r.jsx)("img",{className:"position-absolute top-50 start-50 translate-middle",src:"/icon-tablet.png",alt:"tablet"})}),(0,r.jsx)("div",{className:"h5 fw-light",children:"We evalue your screen"})]}),(0,r.jsxs)("div",{className:"m-2 m-lg-5",children:[(0,r.jsx)("div",{className:x()["buyback-icon"],children:(0,r.jsx)("img",{className:"position-absolute top-50 start-50 translate-middle",src:"/icon-money.png",alt:"payout"})}),(0,r.jsx)("div",{className:"h5 fw-light",children:"Get paid in Cash, Paypal or Cash App"})]})]})]})}function b(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(p,{}),(0,r.jsx)(y,{}),(0,r.jsx)(g,{}),(0,r.jsx)(j,{})]})}},6852:function(e){e.exports={parallax:"style_parallax___JaNz"}},9470:function(e){e.exports={"logo-white":"style_logo-white__xC1CB","ecommerce-icon":"style_ecommerce-icon__V5Ttk","buyback-icon":"style_buyback-icon__t6ytj"}},9001:function(e){e.exports={"scroll-button":"style_scroll-button__B2TDZ"}},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);