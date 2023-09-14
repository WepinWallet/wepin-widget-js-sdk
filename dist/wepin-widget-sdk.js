(()=>{"use strict";var e={187:e=>{var t,i="object"==typeof Reflect?Reflect:null,n=i&&"function"==typeof i.apply?i.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)};t=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function r(){r.init.call(this)}e.exports=r,e.exports.once=function(e,t){return new Promise((function(i,n){function o(i){e.removeListener(t,r),n(i)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",o),i([].slice.call(arguments))}f(e,t,r,{once:!0}),"error"!==t&&function(e,t,i){"function"==typeof e.on&&f(e,"error",t,{once:!0})}(e,o)}))},r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function d(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function l(e,t,i,n){var o,r,s,l;if(a(i),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),r=e._events),s=r[t]),void 0===s)s=r[t]=i,++e._eventsCount;else if("function"==typeof s?s=r[t]=n?[i,s]:[s,i]:n?s.unshift(i):s.push(i),(o=d(e))>0&&s.length>o&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,l=c,console&&console.warn&&console.warn(l)}return e}function c(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,i){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},o=c.bind(n);return o.listener=i,n.wrapFn=o,o}function u(e,t,i){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?i?[o.listener||o]:[o]:i?function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(o):w(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function w(e,t){for(var i=new Array(t),n=0;n<t;++n)i[n]=e[n];return i}function f(e,t,i,n){if("function"==typeof e.on)n.once?e.once(t,i):e.on(t,i);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(r){n.once&&e.removeEventListener(t,o),i(r)}))}}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),r.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return d(this)},r.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var d=r[e];if(void 0===d)return!1;if("function"==typeof d)n(d,this,t);else{var l=d.length,c=w(d,l);for(i=0;i<l;++i)n(c[i],this,t)}return!0},r.prototype.addListener=function(e,t){return l(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return l(this,e,t,!0)},r.prototype.once=function(e,t){return a(t),this.on(e,p(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,p(this,e,t)),this},r.prototype.removeListener=function(e,t){var i,n,o,r,s;if(a(t),void 0===(n=this._events))return this;if(void 0===(i=n[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(o=-1,r=i.length-1;r>=0;r--)if(i[r]===t||i[r].listener===t){s=i[r].listener,o=r;break}if(o<0)return this;0===o?i.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,o),1===i.length&&(n[e]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(e){var t,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0===arguments.length){var o,r=Object.keys(i);for(n=0;n<r.length;++n)"removeListener"!==(o=r[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},r.prototype.listeners=function(e){return u(this,e,!0)},r.prototype.rawListeners=function(e){return u(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},r.prototype.listenerCount=h,r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}(()=>{class e{static closeOverlay(e){const t=document.querySelector(`#${e}`);t&&t.parentNode&&t.parentNode.removeChild(t)}static openOverlay(e){const t=document.createElement("div");t.id=e,t.classList.add(this.CONST.overlayClassName),t.style.zIndex="2147483647",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.textAlign="center",t.style.position="fixed",t.style.left="0px",t.style.right="0px",t.style.top="0px",t.style.bottom="0px",t.style.left="0px",t.style.background="rgba(0,0,0,0.6)",t.style.color="white",t.style.border="2px solid #f1f1f1";const i=document.getElementsByClassName(this.CONST.overlayClassName);for(let e=0;e<i.length;e++){const t=i.item(e);t&&t.remove()}document.body.appendChild(t)}}e.CONST={overlayClassName:"wepin-widget__overlay"};const t="wepin:widget:";class n{}function o(e){this.message=e}n.test=console.warn.bind(window.console,"[SDK][test] "),n.warn=console.warn.bind(window.console,"[SDK][warn] "),n.error=console.error.bind(window.console,"[SDK][error] "),n.todo=console.warn.bind(window.console,"[SDK][todo] "),n.assert=console.assert.bind(window.console),n.debug=()=>{},o.prototype=new Error,o.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new o("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,n,r=0,s=0,a="";n=t.charAt(s++);~n&&(i=r%4?64*i+n:n,r++%4)?a+=String.fromCharCode(255&i>>(-2*r&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return a};function s(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var i=t.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(t)}catch(e){return r(t)}}function a(e){this.message=e}a.prototype=new Error,a.prototype.name="InvalidTokenError";class d{static isMobile(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static messages(e){return{hasValidOrigin:t=>t.origin===d.getUrls(e).wepinWebview}}static getUrls(e){switch(e){case"production":return{wepinWebview:"https://widget.wepin.io"};case"test":return{wepinWebview:"https://stage-widget.wepin.io"};case"development":return{wepinWebview:"https://dev-widget.wepin.io"};default:throw new Error("Utils.getUrls: invalid mode")}}static uuidv4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}static getLocalStorgeEnabled(){let e=!1;try{e=window.localStorage&&!0}catch(t){e=!1}return e}static setLocalStorage(e,i){if(!this.getLocalStorgeEnabled())return void n.error("Local storage is not available. We recommend using local storage to maintain login sessions.");const o=JSON.stringify(i);localStorage.setItem(t+e,o)}static getLocalStorage(e){if(this.getLocalStorgeEnabled())return localStorage.getItem(t+e)?JSON.parse(localStorage.getItem(t+e)):void 0;n.error("Local storage is not available. We recommend using local storage to maintain login sessions.")}static clearLocalStorage(e){this.getLocalStorgeEnabled()?localStorage.removeItem(t+e):n.error("Local storage is not available. We recommend using local storage to maintain login sessions.")}static isExpired(e){var t;if(!e)return!0;const i=null===(t=function(e,t){if("string"!=typeof e)throw new a("Invalid token specified");var i=!0===(t=t||{}).header?0:1;try{return JSON.parse(s(e.split(".")[i]))}catch(e){throw new a("Invalid token specified: "+e.message)}}(e))||void 0===t?void 0:t.exp;return n.debug("isExpiredRefreshToken expired",i),n.debug("Date.now()",Date.now()),n.debug(" Math.floor(Date.now()/1000) + (60*60)",Math.floor(Date.now()/1e3)),i<=Math.floor(Date.now()/1e3)}}const l=(e,t,i)=>{"web"===e.header.request_to?((e,t,i)=>{var o,r,s,a;const l={header:{response_from:"web",response_to:"wepin_widget",id:e.header.id}};switch(e.body.command){case"ready_to_widget":n.debug("ready_to_widget"),l.body={command:"ready_to_widget",state:"SUCCESS",data:{appKey:i,domain:t.Wepin.wepinDomain,platform:1,attributes:t.Wepin.wepinAppAttributes,version:t.Wepin.version.includes("-alpha")?t.Wepin.version.substring(0,t.Wepin.version.indexOf("-")):t.Wepin.version,localDate:null!==(o=d.getLocalStorage(t.Wepin.wepinAppId))&&void 0!==o?o:{}}};break;case"initialized_widget":n.debug("initialized_widget resulte =>",null===(r=e.body.parameter)||void 0===r?void 0:r.result),t.Wepin._isInitialized=null===(s=e.body.parameter)||void 0===s?void 0:s.result,l.body={command:"initialized_widget",state:"SUCCESS",data:""},t.Wepin.emit("widgetOpened");break;case"set_accounts":t.Wepin.setAccountInfo(null===(a=e.body.parameter)||void 0===a?void 0:a.accounts),l.body={command:"set_accounts",state:"SUCCESS",data:""};break;case"close_wepin_widget":t.close();break;case"dequeue_request":t.Wepin.queue[0]?(function(){if("Window"===t.type){const e=t.Wepin.queue[0].header.id,i=setInterval((()=>{try{if(t.Webview.closed){clearInterval(i),t.close();const n=t.Wepin.queue[0];n.header.id===e&&(t.Wepin.emit(n.header.id.toString(),{header:{response_from:"wepin_widget",response_to:"web",id:n.header.id},body:{command:n.body.command,state:"ERROR",data:"User Cancel"}}),t.Wepin.queue.shift())}}catch(e){clearInterval(i),t.close()}}),200)}}(),l.body={command:e.body.command,state:"SUCCESS",data:t.Wepin.queue[0]}):l.body={command:e.body.command,state:"ERROR",data:null};break;case"set_user_info":t.Wepin.setUserInfo(e.body.parameter),l.body={command:"set_user_info",state:"SUCCESS",data:""};break;case"wepin_logout":n.debug("wepin_logout"),t.Wepin.emit("onLogout",e.body.parameter),l.body={command:"wepin_logout",state:"SUCCESS",data:""};break;case"set_local_storage":d.setLocalStorage(t.Wepin.wepinAppId,e.body.parameter.data),l.body={command:"set_local_storage",state:"SUCCESS",data:""};break;default:throw new Error(`Command ${e.body.command} is not supported.`)}t.isOpen&&t.response(l)})(e,t,i):"web"===e.header.response_to?((e,t)=>{n.debug("Got Response from webview =>",e),t.queue.shift(),t.emit(e.header.id.toString(),e)})(e,t.Wepin):n.error("Failed to handle message:",e)};class c extends e{get isOpen(){return this._open}get Wepin(){return this._wepin}get Webview(){return this._webview}constructor(e,t,i,o,r,s){super(),this.url=e,this.id=`id-${d.uuidv4()}`,this.isHide=s,s||c.openOverlay(this.id),this._wepin=t,this._webview=i,this.type=o,this.EL=((e,t)=>i=>{(t=>!(!e.url.includes("/wepin-sdk-login")&&!e.url.includes(t.origin)&&t.origin!==e.url||!Object.prototype.hasOwnProperty.call(t.data,"header")||!Object.prototype.hasOwnProperty.call(t.data,"body")))(i)&&l(i.data,e,t)})(this,r),window.addEventListener("message",this.EL),this._open=!0,n.debug(`Widget(${this.id}) is succefully created. The url is: ${e}`)}close(){this.isHide||c.closeOverlay(this.id),window.removeEventListener("message",this.EL),this.Wepin.removeAllListeners("onAccountSet"),this.Wepin.removeAllListeners("widgetOpened"),this.Wepin.emit("widgetClosed"),this._open=!1,this._closeWebview()}response(e){try{this._post(e)}catch(e){n.error("Can not response message to the webview",e)}}request(e){try{this._post(e)}catch(e){n.error("Can not send message to the webview",e)}}}class p extends c{constructor({url:e,wepin:t,webview:i,wepinAppKey:n}){super(e,t,i,"Window",n)}static openNew(e,t,i,o){return r=this,s=void 0,d=function*(){const r=(e=>{const t=(null==e?void 0:e.width)||375,i=(null==e?void 0:e.height)||604,n=(null==e?void 0:e.sLeft)?null==e?void 0:e.sLeft:window.screenLeft?window.screenLeft:window.screenX?window.screenX:0,o=(null==e?void 0:e.sTop)?null==e?void 0:e.sTop:window.screenTop?window.screenTop:window.screenY?window.screenY:0;return`width=${t}, height=${i}, left=${screen.width/2-t/2+n}, top=${screen.height/2-i/2+o}scrollbars=yes, resizable=1, menubar=no, toolbar=no`})(o),s=window.open(e,"Wepin_Widget",r),a=yield new p({url:e,wepin:t,webview:s,wepinAppKey:i});s.onbeforeunload=()=>{n.debug("catch window closed)"),t.emit("widgetClosed")};const d=setInterval((()=>{try{s.closed&&(clearInterval(d),a.close())}catch(e){clearInterval(d),a.close()}}),200);return a},new((a=void 0)||(a=Promise))((function(e,t){function i(e){try{o(d.next(e))}catch(e){t(e)}}function n(e){try{o(d.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof a?o:new a((function(e){e(o)}))).then(i,n)}o((d=d.apply(r,s||[])).next())}));var r,s,a,d}expand(){}shrink(){}_closeWebview(){this.Webview.close()}_post(e){this.Webview.postMessage(e,this.url)}}class u extends c{constructor({url:e,wepin:t,frame:i,wepinAppKey:n,isHide:o}){super(e,t,i,"Frame",n,o),i.src=e,i.id=this.id;const r=document.querySelector("body");u.scrollPosition=window.pageYOffset,r.style.overflow="hidden",r.style.position="fixed",r.style.top=`-${u.scrollPosition}px`,r.style.width="100%",document.body.appendChild(i)}static openNew(e,t,i,n){return o=this,r=void 0,a=function*(){const o=(e=>{const t=document.createElement("iframe");return t.classList.add("wepin-sdk-widget-iframe"),t.setAttribute("frameborder","0"),t.setAttribute("marginwidth","0"),t.setAttribute("marginheight","0"),t.style.width="100%",e&&(null==e?void 0:e.isHide)?t.style.height="0":t.style.height="100%",t.style.maxHeight="100%",t.style.position="fixed",t.style.bottom="0",t.style.left="0",t.style.zIndex="408888000000",t.title="wepin sdk webview",t.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",t.allowFullscreen=!0,t})(n);return new u({url:e,wepin:t,frame:o,wepinAppKey:i,isHide:null==n?void 0:n.isHide})},new((s=void 0)||(s=Promise))((function(e,t){function i(e){try{d(a.next(e))}catch(e){t(e)}}function n(e){try{d(a.throw(e))}catch(e){t(e)}}function d(t){var o;t.done?e(t.value):(o=t.value,o instanceof s?o:new s((function(e){e(o)}))).then(i,n)}d((a=a.apply(o,r||[])).next())}));var o,r,s,a}expand(){this.Webview.style.height="100%",this.Webview.style.borderRadius="0"}shrink(){this.Webview.style.height="604px",this.Webview.style.borderRadius="12px 12px 0 0 "}_closeWebview(){setTimeout((()=>{const e=document.querySelector("body");e.style.removeProperty("overflow"),e.style.removeProperty("position"),e.style.removeProperty("top"),e.style.removeProperty("width"),window.scrollTo(0,u.scrollPosition),document.body.removeChild(this.Webview)}),500)}_post(e){this.Webview.contentWindow.postMessage(e,this.url)}}var h=i(187);function w(e,t,i){try{Reflect.apply(e,t,i)}catch(e){setTimeout((()=>{throw e}))}}class f extends h.EventEmitter{emit(e,...t){let i="error"===e;const n=this._events;if(void 0!==n)i=i&&void 0===n.error;else if(!i)return!1;if(i){let e;if(t.length>0&&([e]=t),e instanceof Error)throw e;const i=new Error("Unhandled error."+(e?` (${e.message})`:""));throw i.context=e,i}const o=n[e];if(void 0===o)return!1;if("function"==typeof o)w(o,this,t);else{const e=o.length,i=function(e){const t=e.length,i=new Array(t);for(let n=0;n<t;n+=1)i[n]=e[n];return i}(o);for(let n=0;n<e;n+=1)w(i[n],this,t)}return!0}}var v,g,y,m=function(e,t,i,n){return new(i||(i=Promise))((function(o,r){function s(e){try{d(n.next(e))}catch(e){r(e)}}function a(e){try{d(n.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,a)}d((n=n.apply(e,t||[])).next())}))},b=function(e,t,i,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,i):o?o.value=i:t.set(e,i),i},_=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};v=new WeakMap,g=new WeakMap,y=new WeakMap;const x=new class extends f{constructor(){super(),v.set(this,void 0),g.set(this,void 0),y.set(this,void 0),this.version="0.3.0",console.log(`WepinJavaScript SDK v${this.version} Initialized`),this._isInitialized=!1,b(this,y,"not_initialized","f"),this.queue=new Proxy([],{set:(e,t,i)=>{const n=Reflect.set(e,t,i);return Object.prototype.hasOwnProperty.call(i,"body")&&Object.prototype.hasOwnProperty.call(i,"header")&&this.Widget.request({header:{request_from:"web",request_to:"wepin_widget",id:(new Date).getTime()},body:{command:"provider_request",parameter:""}}),n}})}setAccountInfo(e){this.accountInfo=e,this.emit("onAccountSet",e)}get Widget(){return this._widget}setModeByAppKey(e){if("ak_live_"!==e.slice(0,8))if("ak_test_"!==e.slice(0,8)){if("ak_dev_"!==e.slice(0,7))throw new Error("Wepin.setModeByAppKey: Invalid appKey");this._modeByAppKey="development"}else this._modeByAppKey="test";else this._modeByAppKey="production"}get modeByAppKey(){if(void 0===this._modeByAppKey)throw new Error("Wepin.modeByAppKey: wepin widget has to be initialized");return this._modeByAppKey}toJSON(){return""}init(e,t,i){var o;return void 0===i&&(i={type:"hide",defaultLanguage:null!==(o=window.navigator.language.slice(0,2))&&void 0!==o?o:"ko",defaultCurrency:"krw"}),m(this,void 0,void 0,(function*(){if(n.debug("Wepin init starts with Key",t),this._isInitialized)throw new Error("Wepin is already initialized!");return this.setModeByAppKey(t),this.wepinAppId=e,b(this,v,t,"f"),this.wepinAppAttributes=i,this.wepinDomain=window.location.origin,this._isInitialized=!1,b(this,y,"initializing","f"),yield this._open({isInit:!0}),new Promise((e=>{this.once("widgetOpened",(()=>{this._isInitialized?b(this,y,"initialized","f"):b(this,y,"not_initialized","f"),"show"!==this.wepinAppAttributes.type&&this._close(),e(this)}))}))}))}isInitialized(){return this._isInitialized}openWidget(){return m(this,void 0,void 0,(function*(){if("login"!==_(this,y,"f"))throw new Error("Wepin.openWidget: You can open it only if you are logged in to the wepin.");yield this._open()}))}_open(e){return m(this,void 0,void 0,(function*(){try{let t=d.getUrls(this.modeByAppKey).wepinWebview;if(this._widget&&this._widget.isOpen)return void n.debug("already opend widget",this._widget);(null==e?void 0:e.url)&&(t+=e.url),"IFRAME"===(null==e?void 0:e.type)||"show"!==this.wepinAppAttributes.type&&(null==e?void 0:e.isInit)?this._widget=yield u.openNew(t,this,_(this,v,"f"),{isHide:!0}):"WINDOW"===(null==e?void 0:e.type)?this._widget=yield p.openNew(t,this,_(this,v,"f")):this._widget=d.isMobile()?yield u.openNew(t,this,_(this,v,"f")):yield p.openNew(t,this,_(this,v,"f")),n.debug("openWidget this._widget",this._widget)}catch(e){throw n.debug(e),new Error("Wepin.openWidget: Can't open wepin sdk widget")}}))}closeWidget(){if(n.debug("closeWidget this._widget",this._widget),!this._isInitialized)throw new Error("Wepin.closeWidget: wepin sdk widget has to be initialized");if(!this._widget)throw new Error("Wepin.closeWidget: wepin sdk widget is not exist");this._close()}_close(){n.debug("close this._widget",this._widget),this._widget&&(this._widget.close(),this._widget=void 0)}getAccounts(e){return m(this,void 0,void 0,(function*(){if(!this._isInitialized)throw new Error("Wepin.getAccounts: wepin sdk widget has to be initialized");return this.accountInfo?void 0!==e&&e.length>0?this.accountInfo.filter((t=>e.includes(t.network))):this.accountInfo:(yield this.openWidget(),new Promise((t=>{this.once("onAccountSet",(i=>{if(this._close(),void 0!==e&&e.length>0){const n=i.filter((t=>e.includes(t.network)));t(n)}else t(i)}))})))}))}setUserInfo(e){b(this,g,e,"f"),e&&"success"===e.status&&b(this,y,"login","f"),this.emit("onUserInfoSet",e)}getStatus(){return _(this,y,"f")}login(){var e,t,i;return m(this,void 0,void 0,(function*(){if(!this._isInitialized)throw new Error("Wepin.login: wepin sdk widget has to be initialized");if(b(this,y,"before_login","f"),n.debug("cookie: ",d.getLocalStorage(this.wepinAppId)),d.getLocalStorage(this.wepinAppId)&&(null===(e=d.getLocalStorage(this.wepinAppId)["wepin:connectUser"])||void 0===e?void 0:e.refreshToken)&&(null===(t=d.getLocalStorage(this.wepinAppId)["firebase:wepin"])||void 0===t?void 0:t.refreshToken)){const e=null===(i=d.getLocalStorage(this.wepinAppId)["wepin:connectUser"])||void 0===i?void 0:i.refreshToken;if(!d.isExpired(e))return yield this._open({url:"/wepin-sdk-login/login",type:"IFRAME"}),new Promise((e=>{this.once("onUserInfoSet",(t=>{this._close(),e(t)}))}))}return yield this._open(),new Promise((e=>{this.once("onUserInfoSet",(t=>{this._close(),e(t)}))}))}))}logout(){return m(this,void 0,void 0,(function*(){if(!this._isInitialized&&"login"!==_(this,y,"f"))throw new Error("Wepin.logout: wepin sdk widget has to be initialized and logined");return yield this._open({url:"/wepin-sdk-login/logout",type:"IFRAME"}),new Promise(((e,t)=>{const i=setInterval((()=>{try{this._widget.Webview||(n.debug("widget is closed"),clearInterval(i),this._close(),t(new Error("User canceled")))}catch(e){clearInterval(i),this._close(),t(new Error("Internal error"))}}),200);this.once("onLogout",(i=>{var n;"success"!==i.status?t(new Error(null!==(n=i.message)&&void 0!==n?n:"Internal error")):(this.setAccountInfo([]),b(this,y,"before_login","f")),this._close(),e()}))}))}))}};"undefined"!=typeof window&&(window.Wepin=x)})()})();