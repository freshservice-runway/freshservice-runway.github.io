!function(){var e={platformId:905,urls:["https://a.config.skype.com","https://b.config.skype.com"],businessUrls:["https://config.edge.skype.com","https://config.edge.skype.com"],team:"SkypeLyncWebExperience",maximumAttempts:3,waitDuration:500}
window.Skype=window.Skype||{}
var n="1.2.35"
!function(e){"use strict"
function o(e,n){var t=e
return n=void 0===n?1:n,"object"!=typeof t&&(t={message:e||"unknown error"}),void 0===t.code&&(t.code=n),t}function a(e){return o(e,0)}e.getVersion=function(){return n},e.initialize=function(n,u,s){function f(e){s&&s(o(e))}function d(e){return r.isSupported(window)?e.packageUrl?"/a/assets/external-js/skype-web-sdk.min.js":null:e.packageUrlUnsupportedBrowser?e.packageUrlUnsupportedBrowser:void f(a("This browser is unsupported"))}function p(t){if(t.packageUrl){var r=(new Date).getTime(),o={}
e.onExperienceLoaded=function(o){var i=(new Date).getTime()
o.init({initParams:n,config:t,configLoadDuration:r-g,packageLoadDuration:i-r},u,f),delete e.onExperienceLoaded},t.corsScript&&(o.crossOrigin="anonymous"),c.loadScript(d(t),null,f,o)}else f(a("No package definition found for this config"))}var g=(new Date).getTime();(function(e){if(null==e)throw"No settings provided"})(n),function(e){if("function"!=typeof e)throw"Success callback was not provided"}(u),n.fingerprint=n.userId||(n.correlationIds?n.correlationIds.userId:null),n.fingerprint=n.fingerprint||i.get(window),t.loadConfig(n,(function(e){p(e)}),f)}}(window.Skype)
var t=function(){"use strict"
function t(n){var t=[]
return e&&e.urls&&(t=!0===n.business?c(e.businessUrls,n):c(e.urls,n)),t}function r(){for(var t=n.split(".",4);t.length<4;)t.push(0)
return e.platformId+"_"+t.join(".")}function i(n,t){var o=n+"/config/v1/"+e.team+"/"+r(),i=function(e){var n,t,r=[]
for(n in e)e.hasOwnProperty(n)&&void 0!==(t=e[n])&&r.push([n,t].join("="))
return r.join("&")}(t),a=o
return i&&(a+="?"+i),a}function c(e,n){var t=[],r={apikey:n.apiKey,fingerprint:n.fingerprint,ecsoverride:o.get(window)}
!0===n.dogfood&&n.correlationIds.upn&&(r.id=n.correlationIds.upn)
for(var a=0;a<e.length;a++)t.push(i(e[a],r))
return t}var s=2
return{loadConfig:function(n,r,o){function i(e){l++,!1===n.jsonp?a.request(e,c,f):u.request(e,"onConfigurationLoaded",c,f,"ecsConfig")}function c(t){var i,a
if(!d){if(d=!0,"string"==typeof t)try{i=JSON.parse(t)}catch(u){}else i=t;(a=i&&i[e.team])?(a.configIds=function(n){var t=n.ConfigIDs&&n.ConfigIDs[e.team]
return t?t.split(/\s*,\s*/):[]}(i),a.eTag=i.Headers&&i.Headers.ETag||"",a.countryCode=i.Headers&&i.Headers.CountryCode,r&&r(a)):o&&o("Configuration service did not find any configuration that matches parameters or configuration service response is invalid",n)}}function f(){var n=0
l/p.length>=(e.maximumAttempts||s)?o&&o("Configuration service is unreachable"):l<=p.length?i(p[++g%p.length]):(n=e.waitDuration*(l-p.length),window.setTimeout((function(){i(p[++g%p.length])}),n))}var d,p,g,l=0
return n&&n.apiKey?(p=t(n))&&p.length?(g=Math.floor(Math.random()*p.length),void i(p[g])):void(o&&o("No configuration service endpoints have been defined")):void(o&&o("API key was not provided"))}}}(),r=function(){"use strict"
return{isSupported:function(e){return!!function(e){return e.navigator.userAgent.indexOf("SkypeShell")>-1}(e)||!function(e){var n=function(e){var n,t=-1,r=e.navigator.userAgent||""
return r.indexOf("Chrome/")>-1&&r.indexOf("Safari/")>-1&&-1===r.indexOf("Edge/")&&(n=new RegExp("Chrome/([0-9]{1,}[.0-9]{0,})"),n.exec(r)&&(t=parseFloat(RegExp.$1))),t}(e)
return n>-1&&43>n}(e)&&!function(e){var n=function(e){var n,t=-1,r=e.navigator.userAgent||""
return r.indexOf("Firefox/")>-1&&r.indexOf("Gecko/")>-1&&-1===r.indexOf("Opera")&&-1===r.indexOf("Trident")&&(n=new RegExp("Firefox/([0-9]{1,}[.0-9]{0,})"),n.exec(r)&&(t=parseFloat(RegExp.$1))),t}(e)
return n>-1&&40>n}(e)&&!function(e){var n=function(e){var n,t=-1,r=e.navigator.userAgent||"",o=e.navigator.appName||""
return"Microsoft Internet Explorer"===o&&(n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),n.exec(r)&&(t=parseFloat(RegExp.$1))),t}(e)
return n>-1&&10>n}(e)&&!function(e){var n=function(e){var n,t=-1,r=e.navigator.userAgent||""
return r.indexOf("Safari/")>-1&&-1===r.indexOf("Chrome")&&(n=new RegExp("Version/([0-9]{1,}[.0-9]{0,})"),n.exec(r)&&(t=parseFloat(RegExp.$1))),t}(e)
return n>-1&&8>n}(e)}}}(),o=function(){"use strict"
var e="ecsoverride",n="\\b"+e+"=([^&]+)",t="\\b"+e+"=([^;]+)"
return{get:function(e){var r=(e=e||window).location.search.match(new RegExp(n,"i"))
return r&&r[1]?r[1]:(r=e.document.cookie.match(new RegExp(t,"i")))&&r[1]?r[1]:void 0}}}(),i=function(){"use strict"
var e="skype.fingerprint"
return{get:function(n){var t
n=n||window
try{t=n.localStorage.getItem(e)}catch(o){}if(!t){t=("0000000"+Date.now().toString(16)).slice(-8)+"-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=Math.floor(16*Math.random())
return("x"===e?n:8+n%4).toString(16)}))
try{n.localStorage.setItem(e,t)}catch(o){}}return t}}}(),a=function(n){"use strict"
return{request:function(t,r,o){if(!t)throw"URL parameter was not provided"
var i,a=function(){n.clearTimeout(i),o&&(o(),o=null,r=null)},u=new XMLHttpRequest
u.onreadystatechange=function(){4===u.readyState&&(200===u.status?(n.clearTimeout(i),r&&r(u.responseText)):a())},u.open("GET",t,!0),u.send(),i=n.setTimeout(a,e.timeout||2e4)}}}(window),u=function(n){"use strict"
var t=function(){}
return{request:function(r,o,i,a,u){if(!r||!o)throw"URL or callback name was not provided"
var s,f,d=function(){n.clearTimeout(f),a&&(a(),a=null,i=null)}
s=r+(/\?/.test(r)?"&":"?")+"callback=Skype."+o,n.Skype[o]=function(){n.clearTimeout(f),i&&i.apply(null,arguments)},c.loadScript(s,t,d,{id:u}),f=n.setTimeout(d,e.timeout||2e4)}}}(window),c=function(){"use strict"
return{loadScript:function(e,n,t,r){var o=document.createElement("script")
for(var i in r=r||{},o.type="text/javascript",o.defer=!0,n&&(o.onload=n),t&&(o.onerror=t),r)void 0!==r[i]&&(o[i]=r[i])
o.src=e,document.getElementsByTagName("head")[0].appendChild(o)}}}()}()
