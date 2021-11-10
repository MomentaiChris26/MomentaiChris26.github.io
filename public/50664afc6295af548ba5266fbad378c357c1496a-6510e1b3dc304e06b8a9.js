/*! For license information please see 50664afc6295af548ba5266fbad378c357c1496a-6510e1b3dc304e06b8a9.js.LICENSE.txt */
(self.webpackChunkchris_tri_portfolio_v2=self.webpackChunkchris_tri_portfolio_v2||[]).push([[54],{7606:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(4694),o=r(5697),a=r.n(o),i=r(7294);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=d(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var m=!1;try{m=!0}catch(O){}function b(e){return e&&"object"===u(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function h(e){var t=e.forwardedRef,r=f(e,["forwardedRef"]),o=r.icon,a=r.mask,i=r.symbol,u=r.className,s=r.title,d=r.titleId,y=b(o),O=v("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,i=e.border,u=e.listItem,s=e.flip,l=e.size,f=e.rotation,p=e.pull,d=(c(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":u,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),null!=l),c(t,"fa-rotate-".concat(f),null!=f&&0!==f),c(t,"fa-pull-".concat(p),null!=p),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(r)),p(u.split(" ")))),x=v("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),w=v("mask",b(a)),j=(0,n.icon)(y,l({},O,{},x,{},w,{symbol:i,title:s,titleId:d}));if(!j)return function(){var e;!m&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var _=j.abstract,P={ref:t};return Object.keys(r).forEach((function(e){h.defaultProps.hasOwnProperty(e)||(P[e]=r[e])})),g(_[0],P)}h.displayName="FontAwesomeIcon",h.propTypes={border:a().bool,className:a().string,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[d(t)]=n}return e}),{attrs:{}}),i=n.style,u=void 0===i?{}:i,c=f(n,["style"]);return a.attrs.style=l({},a.attrs.style,{},u),t.apply(void 0,[r.tag,l({},a.attrs,{},c)].concat(p(o)))}.bind(null,i.createElement)},8093:function(e,t,r){var n;"undefined"!=typeof self&&self,e.exports=(n=r(7294),function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),a=n(r(8)),i=n(r(2)),u=r(10),c=n(r(3)),s=n(r(6)),l=function(e){return e.query||c.default(e)},f=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,r){return t[i.default(r)]=e[r],t}),{})},p=function(){var e=o.default.useRef(!1);return o.default.useEffect((function(){e.current=!0}),[]),e.current},d=function(e){var t=o.default.useContext(s.default),r=function(){return f(e)||f(t)||{}},n=o.default.useState(r),a=n[0],i=n[1];return o.default.useEffect((function(){var e=r();u.shallowEqualObjects(a,e)||i(e)}),[e,t]),a},y=function(e){var t=function(){return l(e)},r=o.default.useState(t),n=r[0],a=r[1];return o.default.useEffect((function(){var e=t();n!==e&&a(e)}),[e]),n},m=function(e,t){var r=function(){return a.default(e,t)},n=o.default.useState(r),i=n[0],u=n[1],c=p();return o.default.useEffect((function(){c&&u(r())}),[e,t]),i},b=function(e){var t=o.default.useState(e.matches),r=t[0],n=t[1];return o.default.useEffect((function(){var t=function(){n(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),r},v=function(e,t,r){var n=d(t),a=y(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var i=m(a,n),u=b(i),c=p();return o.default.useEffect((function(){c&&r&&r(u)}),[u]),u};t.default=v},function(e,t){e.exports=n},function(e,t,r){"use strict";function n(e){return"-"+e.toLowerCase()}function o(e){if(u.hasOwnProperty(e))return u[e];var t=e.replace(a,n);return u[e]=i.test(t)?"-"+t:t}Object.defineProperty(t,"__esModule",{value:!0});var a=/[A-Z]/g,i=/^ms-/,u={};t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(2)),a=n(r(11)),i=function(e){return"not "+e},u=function(e,t){var r=o.default(e);return"number"==typeof t&&(t+="px"),!0===t?r:!1===t?i(r):"("+r+": "+t+")"},c=function(e){return e.join(" and ")},s=function(e){var t=[];return Object.keys(a.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(u(r,n))})),c(t)};t.default=s},function(e,t,r){"use strict";e.exports=r(13)},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)).default.createContext({});t.default=o},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r(0));t.useMediaQuery=o.default;var a=n(r(17));t.default=a.default;var i=n(r(3));t.toQuery=i.default;var u=n(r(6));t.Context=u.default},function(e,t,r){"use strict";function n(e,t,r){function n(e){l&&l.addListener(e)}function o(e){l&&l.removeListener(e)}function u(e){s.matches=e.matches,s.media=e.media}function c(){l&&l.removeListener(u)}var s=this;if(i&&!r){var l=i.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(u)}else this.matches=a(e,t),this.media=e;this.addListener=n,this.removeListener=o,this.dispose=c}function o(e,t,r){return new n(e,t,r)}var a=r(9).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,r){"use strict";function n(e,t){return o(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,c=t[r];if(!c)return!1;switch(r){case"orientation":case"scan":return c.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),c=u(c);break;case"resolution":o=i(o),c=i(c);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),c=a(c);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,c=parseInt(c,10)||0}switch(n){case"min":return c>=o;case"max":return c<=o;default:return c===o}}));return o&&!r||!o&&r}))}function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(c),r=t[1],n=t[2],o=t[3]||"",a={};return a.inverse=!!r&&"not"===r.toLowerCase(),a.type=n?n.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map((function(e){var t=e.match(s),r=t[1].toLowerCase().match(l);return{modifier:r[1],feature:r[2],value:t[2]}})),a}))}function a(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function i(e){var t=parseFloat(e);switch(String(e).match(p)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=n,t.parse=o;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,l=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/},function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var i=r[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"shallowEqualArrays",(function(){return o})),r.d(t,"shallowEqualObjects",(function(){return n}))},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(r(12)),u=i.default.oneOfType([i.default.string,i.default.number]),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},s={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:u,type:Object.keys(c)},l=o(s,["type"]),f=n({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:u,maxResolution:u},l),p=n(n({},c),f);t.default={all:p,types:c,matchers:s,features:f}},function(e,t,r){var n=r(4);e.exports=r(14)(n.isElement,!0)},function(e,t,r){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===g||e===P||e===x||e===O||e===E||e===C||"object"==typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===k||e.$$typeof===w||e.$$typeof===j||e.$$typeof===S||e.$$typeof===A||e.$$typeof===N||e.$$typeof===M||e.$$typeof===T)}function r(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case v:var r=e.type;switch(r){case _:case P:case g:case x:case O:case E:return r;default:var n=r&&r.$$typeof;switch(n){case j:case S:case I:case k:case w:return n;default:return t}}case h:return t}}}function n(e){return Y||(Y=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||r(e)===_}function o(e){return r(e)===P}function a(e){return r(e)===j}function i(e){return r(e)===w}function u(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}function c(e){return r(e)===S}function s(e){return r(e)===g}function l(e){return r(e)===I}function f(e){return r(e)===k}function p(e){return r(e)===h}function d(e){return r(e)===x}function y(e){return r(e)===O}function m(e){return r(e)===E}var b="function"==typeof Symbol&&Symbol.for,v=b?Symbol.for("react.element"):60103,h=b?Symbol.for("react.portal"):60106,g=b?Symbol.for("react.fragment"):60107,O=b?Symbol.for("react.strict_mode"):60108,x=b?Symbol.for("react.profiler"):60114,w=b?Symbol.for("react.provider"):60109,j=b?Symbol.for("react.context"):60110,_=b?Symbol.for("react.async_mode"):60111,P=b?Symbol.for("react.concurrent_mode"):60111,S=b?Symbol.for("react.forward_ref"):60112,E=b?Symbol.for("react.suspense"):60113,C=b?Symbol.for("react.suspense_list"):60120,k=b?Symbol.for("react.memo"):60115,I=b?Symbol.for("react.lazy"):60116,T=b?Symbol.for("react.block"):60121,A=b?Symbol.for("react.fundamental"):60117,N=b?Symbol.for("react.responder"):60118,M=b?Symbol.for("react.scope"):60119,R=_,$=P,D=j,L=w,W=v,z=S,F=g,q=I,U=k,V=h,H=x,Q=O,B=E,Y=!1;t.AsyncMode=R,t.ConcurrentMode=$,t.ContextConsumer=D,t.ContextProvider=L,t.Element=W,t.ForwardRef=z,t.Fragment=F,t.Lazy=q,t.Memo=U,t.Portal=V,t.Profiler=H,t.StrictMode=Q,t.Suspense=B,t.isAsyncMode=n,t.isConcurrentMode=o,t.isContextConsumer=a,t.isContextProvider=i,t.isElement=u,t.isForwardRef=c,t.isFragment=s,t.isLazy=l,t.isMemo=f,t.isPortal=p,t.isProfiler=d,t.isStrictMode=y,t.isSuspense=m,t.isValidElementType=e,t.typeOf=r}()},function(e,t,r){"use strict";function n(){return null}var o=r(4),a=r(15),i=r(5),u=r(16),c=Function.call.bind(Object.prototype.hasOwnProperty),s=function(){};s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){function r(e){var t=e&&(E&&e[E]||e[C]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function p(e){function r(r,a,u,c,l,p,d){if(c=c||k,p=p||u,d!==i){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var m=c+":"+u;!n[m]&&o<3&&(s("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,o++)}}return null==a[u]?r?new f(null===a[u]?"The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `null`.":"The "+l+" `"+p+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,u,c,l,p)}var n={},o=0,a=r.bind(null,!1);return a.isRequired=r.bind(null,!0),a}function d(e){function t(t,r,n,o,a,i){var u=t[r];return j(u)!==e?new f("Invalid "+o+" `"+a+"` of type `"+_(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null}return p(t)}function y(e){function t(t,r,n,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=t[r];if(!Array.isArray(u))return new f("Invalid "+o+" `"+a+"` of type `"+j(u)+"` supplied to `"+n+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,n,o,a+"["+c+"]",i);if(s instanceof Error)return s}return null}return p(t)}function m(e){function t(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||k;return new f("Invalid "+o+" `"+a+"` of type `"+S(t[r])+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}return null}return p(t)}function b(e){function t(t,r,n,o,a){for(var i=t[r],u=0;u<e.length;u++)if(l(i,e[u]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===_(t)?String(t):t}));return new f("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+c+".")}return Array.isArray(e)?p(t):(s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),n)}function v(e){function t(t,r,n,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=t[r],s=j(u);if("object"!==s)return new f("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var l in u)if(c(u,l)){var p=e(u,l,n,o,a+"."+l,i);if(p instanceof Error)return p}return null}return p(t)}function h(e){function t(t,r,n,o,a){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,r,n,o,a,i))return null;return new f("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),n;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+P(o)+" at index "+r+"."),n}return p(t)}function g(e){function t(t,r,n,o,a){var u=t[r],c=j(u);if("object"!==c)return new f("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(u,s,n,o,a+"."+s,i);if(p)return p}}return null}return p(t)}function O(e){function t(t,r,n,o,u){var c=t[r],s=j(c);if("object"!==s)return new f("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");var l=a({},t[r],e);for(var p in l){var d=e[p];if(!d)return new f("Invalid "+o+" `"+u+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(c,p,n,o,u+"."+p,i);if(y)return y}return null}return p(t)}function x(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(x);if(null===t||e(t))return!0;var n=r(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!x(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!x(i[1]))return!1}return!0;default:return!1}}function w(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function j(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":w(t,e)?"symbol":t}function _(e){if(null==e)return""+e;var t=j(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function P(e){var t=_(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function S(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var E="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",k="<<anonymous>>",I={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:p(n),arrayOf:y,element:function(){function t(t,r,n,o,a){var i=t[r];return e(i)?null:new f("Invalid "+o+" `"+a+"` of type `"+j(i)+"` supplied to `"+n+"`, expected a single ReactElement.")}return p(t)}(),elementType:function(){function e(e,t,r,n,a){var i=e[t];return o.isValidElementType(i)?null:new f("Invalid "+n+" `"+a+"` of type `"+j(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")}return p(e)}(),instanceOf:m,node:function(){function e(e,t,r,n,o){return x(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}return p(e)}(),objectOf:v,oneOf:b,oneOfType:h,shape:g,exact:O};return f.prototype=Error.prototype,I.checkPropTypes=u,I.resetWarningCache=u.resetWarningCache,I.PropTypes=I,I}},function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,c=n(e),s=1;s<arguments.length;s++){for(var l in r=Object(arguments[s]))a.call(r,l)&&(c[l]=r[l]);if(o){u=o(r);for(var f=0;f<u.length;f++)i.call(r,u[f])&&(c[u[f]]=r[u[f]])}}return c}},function(e,t,r){"use strict";function n(e,t,r,n,c){for(var s in e)if(u(e,s)){var l;try{if("function"!=typeof e[s]){var f=Error((n||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,n,r,null,a)}catch(d){l=d}if(!l||l instanceof Error||o((n||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=c?c():"";o("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}var o=function(){},a=r(5),i={},u=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},n.resetWarningCache=function(){i={}},e.exports=n},function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(0)),i=function(e){var t=e.children,r=e.device,o=e.onChange,i=n(e,["children","device","onChange"]),u=a.default(i,r,o);return"function"==typeof t?t(u):u?t:null};t.default=i}]))},9650:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),o=r(5444),a=r(8093),i=r(7606),u=r(8014),c="border-b-2 border-jordyBlue-600",s="block py-2 px-4 text-navText text-md hover:bg-red-500 font-roboto-mono",l="hover:bg-red-500 text-lg",f={"/":"bg-homePage","/profile":"bg-aboutPage","/projects":"bg-projectPage"},p=function(e){var t=e.path,r=(0,n.useState)(!1),p=r[0],d=r[1],y=(0,a.useMediaQuery)({maxWidth:768},void 0,(function(e){e||d(!1)}));return n.createElement("nav",{className:"px-4 text-navText "+f[t]},y,n.createElement("div",{className:"max-w mx-auto"},n.createElement("div",{className:"flex items-center justify-between py-4 font-roboto-mono"},n.createElement(o.rU,{className:"text-3xl text-navText hover:bg-red-500",to:"/"},"Chris"),n.createElement("div",{className:"hidden md:flex items-center space-x-6 "},n.createElement(o.rU,{to:"/profile",className:l,activeClassName:c},"Profile"),n.createElement(o.rU,{to:"/projects",className:l,activeClassName:c},"Projects"),n.createElement("a",{className:"py-2 px-4 rounded bg-gray-500 border border-white hover:bg-white hover:border-gray-500 focus:outline-none",href:"/public/static/documents/chris_tri_cv.pdf",alt:"downlod-resume",download:"Christopher Tri - CV.pdf"},"Download Resume")),n.createElement("div",{className:"md:hidden flex items-center"},n.createElement(i.G,{icon:p?u.NBC:u.xiG,size:"2x",className:"cursor-pointer",onClick:function(){d(!p)}})))),n.createElement("div",{className:p?null:"hidden"},n.createElement(o.rU,{to:"/profile",className:s},"Profile"),n.createElement(o.rU,{to:"/projects",className:s},"Projects"),n.createElement("a",{className:s+" + cursor-pointer",href:"/public/static/documents/chris_tri_cv.pdf",alt:"downlod-resume",download:"Christopher Tri - CV.pdf"},"Download Resume")))},d=function(e){var t=e.children,r=e.path;return n.createElement("main",null,n.createElement("div",{className:"h-screen flex flex-col"},n.createElement("title",null,"Chris Tri"),n.createElement(p,{path:r}),t))}}}]);
//# sourceMappingURL=50664afc6295af548ba5266fbad378c357c1496a-6510e1b3dc304e06b8a9.js.map