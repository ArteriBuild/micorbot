{/* Copyright © 2016 - 2024 Australian Government ****************************
'*  Name:        sc_wide.js [stalled as CUA - site collection wide ]
'*  Description: Global javascript library.
'*  Email:       wilson.wampers@gmail.com   
'*****************************************************************************
'*  Modification History:
'*  -When           -Who            -Bug#           -What
'*  --------------------------------------------------------------------------
'*	-17-Oct-2022    -Wilson Wampers -               -Initial Version
'*****************************************************************************
Path: ~sitecollection/_catalogs/masterpage/micor2020/js/_utils/gvrn/sc_wide.js
LM: ww.240621.1223_P16 - fully commented - */}
'use strict';
{/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
    if(typeof $ !== 'undefind')
    {
        console.log('jQuery v3.4.1 min -> loaded');
    }

    //****************************************************************************
}

{/*! Popper.min */
/* @popperjs/core v2.11.6 - MIT License */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function c(){return!/^((?!chrome|android).)*safari/i.test(f())}function p(e,o,i){void 0===o&&(o=!1),void 0===i&&(i=!1);var a=e.getBoundingClientRect(),f=1,p=1;o&&r(e)&&(f=e.offsetWidth>0&&s(a.width)/e.offsetWidth||1,p=e.offsetHeight>0&&s(a.height)/e.offsetHeight||1);var u=(n(e)?t(e):window).visualViewport,l=!c()&&i,d=(a.left+(l&&u?u.offsetLeft:0))/f,h=(a.top+(l&&u?u.offsetTop:0))/p,m=a.width/f,v=a.height/p;return{width:m,height:v,top:h,right:d+m,bottom:h+v,left:d,x:d,y:h}}function u(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function l(e){return e?(e.nodeName||"").toLowerCase():null}function d(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return p(d(e)).left+u(e).scrollLeft}function m(e){return t(e).getComputedStyle(e)}function v(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function y(e,n,o){void 0===o&&(o=!1);var i,a,f=r(n),c=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),m=d(n),y=p(e,c,o),g={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(f||!f&&!o)&&(("body"!==l(n)||v(m))&&(g=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:u(i)),r(n)?((b=p(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):m&&(b.x=h(m))),{x:y.left+g.scrollLeft-b.x,y:y.top+g.scrollTop-b.y,width:y.width,height:y.height}}function g(e){var t=p(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function b(e){return"html"===l(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||d(e)}function w(e){return["html","body","#document"].indexOf(l(e))>=0?e.ownerDocument.body:r(e)&&v(e)?e:w(b(e))}function x(e,n){var r;void 0===n&&(n=[]);var o=w(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],v(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(x(b(s)))}function O(e){return["table","td","th"].indexOf(l(e))>=0}function j(e){return r(e)&&"fixed"!==m(e).position?e.offsetParent:null}function E(e){for(var n=t(e),i=j(e);i&&O(i)&&"static"===m(i).position;)i=j(i);return i&&("html"===l(i)||"body"===l(i)&&"static"===m(i).position)?n:i||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&r(e)&&"fixed"===m(e).position)return null;var n=b(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(l(n))<0;){var i=m(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var D="top",A="bottom",L="right",P="left",M="auto",k=[D,A,L,P],W="start",B="end",H="viewport",T="popper",R=k.reduce((function(e,t){return e.concat([t+"-"+W,t+"-"+B])}),[]),S=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+W,t+"-"+B])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){return e.split("-")[0]}function N(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function I(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _(e,r,o){return r===H?I(function(e,n){var r=t(e),o=d(e),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){a=i.width,s=i.height;var u=c();(u||!u&&"fixed"===n)&&(f=i.offsetLeft,p=i.offsetTop)}return{width:a,height:s,x:f+h(e),y:p}}(e,o)):n(r)?function(e,t){var n=p(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(r,o):I(function(e){var t,n=d(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+h(e),c=-r.scrollTop;return"rtl"===m(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:c}}(d(e)))}function F(e,t,o,s){var f="clippingParents"===t?function(e){var t=x(b(e)),o=["absolute","fixed"].indexOf(m(e).position)>=0&&r(e)?E(e):e;return n(o)?t.filter((function(e){return n(e)&&N(e,o)&&"body"!==l(e)})):[]}(e):[].concat(t),c=[].concat(f,[o]),p=c[0],u=c.reduce((function(t,n){var r=_(e,n,s);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),_(e,p,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function U(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?C(o):null,a=o?U(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case W:t[c]=t[c]-(n[p]/2-r[p]/2);break;case B:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function Y(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.strategy,s=void 0===a?e.strategy:a,f=r.boundary,c=void 0===f?"clippingParents":f,u=r.rootBoundary,l=void 0===u?H:u,h=r.elementContext,m=void 0===h?T:h,v=r.altBoundary,y=void 0!==v&&v,g=r.padding,b=void 0===g?0:g,w=Y("number"!=typeof b?b:G(b,k)),x=m===T?"reference":T,O=e.rects.popper,j=e.elements[y?x:m],E=F(n(j)?j:j.contextElement||d(e.elements.popper),c,l,s),P=p(e.elements.reference),M=X({reference:P,element:O,strategy:"absolute",placement:i}),W=I(Object.assign({},O,M)),B=m===T?W:P,R={top:E.top-B.top+w.top,bottom:B.bottom-E.bottom+w.bottom,left:E.left-B.left+w.left,right:B.right-E.right+w.right},S=e.modifiersData.offset;if(m===T&&S){var V=S[i];Object.keys(R).forEach((function(e){var t=[L,A].indexOf(e)>=0?1:-1,n=[D,A].indexOf(e)>=0?"y":"x";R[e]+=V[n]*t}))}return R}var K={placement:"bottom",modifiers:[],strategy:"absolute"};function Q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?K:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},K,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?x(e):e.contextElement?x(e.contextElement):[],popper:x(t)};var s,p,d=function(e){var t=q(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(Q(t,n)){f.rects={reference:y(t,E(n),"fixed"===f.options.strategy),popper:g(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!Q(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var $={passive:!0};var ee={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,$)})),f&&c.addEventListener("resize",r.update,$),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,$)})),f&&c.removeEventListener("resize",r.update,$)}},data:{}};var te={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ne={top:"auto",right:"auto",bottom:"auto",left:"auto"};function re(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=e.isFixed,v=f.x,y=void 0===v?0:v,g=f.y,b=void 0===g?0:g,w="function"==typeof l?l({x:y,y:b}):{x:y,y:b};y=w.x,b=w.y;var x=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),j=P,M=D,k=window;if(u){var W=E(r),H="clientHeight",T="clientWidth";if(W===t(r)&&"static"!==m(W=d(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),W=W,i===D||(i===P||i===L)&&a===B)M=A,b-=(h&&W===k&&k.visualViewport?k.visualViewport.height:W[H])-o.height,b*=p?1:-1;if(i===P||(i===D||i===A)&&a===B)j=L,y-=(h&&W===k&&k.visualViewport?k.visualViewport.width:W[T])-o.width,y*=p?1:-1}var R,S=Object.assign({position:c},u&&ne),V=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:s(t*r)/r||0,y:s(n*r)/r||0}}({x:y,y:b}):{x:y,y:b};return y=V.x,b=V.y,p?Object.assign({},S,((R={})[M]=O?"0":"",R[j]=x?"0":"",R.transform=(k.devicePixelRatio||1)<=1?"translate("+y+"px, "+b+"px)":"translate3d("+y+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=O?b+"px":"",n[j]=x?y+"px":"",n.transform="",n))}var oe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:C(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,re(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,re(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var ie={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&l(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&l(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var ae={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},se={left:"right",right:"left",bottom:"top",top:"bottom"};function fe(e){return e.replace(/left|right|bottom|top/g,(function(e){return se[e]}))}var ce={start:"end",end:"start"};function pe(e){return e.replace(/start|end/g,(function(e){return ce[e]}))}function ue(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?S:f,p=U(r),u=p?s?R:R.filter((function(e){return U(e)===p})):k,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var le={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,y=C(v),g=f||(y===v||!h?[fe(v)]:function(e){if(C(e)===M)return[];var t=fe(e);return[pe(e),t,pe(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(C(n)===M?ue(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var B=b[k],H=C(B),T=U(B)===W,R=[D,A].indexOf(H)>=0,S=R?"width":"height",V=J(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),q=R?T?L:P:T?A:D;w[S]>x[S]&&(q=fe(q));var N=fe(q),I=[];if(i&&I.push(V[H]<=0),s&&I.push(V[q]<=0,V[N]<=0),I.every((function(e){return e}))){E=B,j=!1;break}O.set(B,I)}if(j)for(var _=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},F=h?3:1;F>0;F--){if("break"===_(F))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function de(e,t,n){return i(e,a(t,n))}var he={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=J(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),w=C(t.placement),x=U(t.placement),O=!x,j=z(w),M="x"===j?"y":"x",k=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(k){if(s){var q,N="y"===j?D:P,I="y"===j?A:L,_="y"===j?"height":"width",F=k[j],X=F+b[N],Y=F-b[I],G=m?-H[_]/2:0,K=x===W?B[_]:H[_],Q=x===W?-H[_]:-B[_],Z=t.elements.arrow,$=m&&Z?g(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[N],ne=ee[I],re=de(0,B[_],$[_]),oe=O?B[_]/2-G-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=O?-B[_]/2+G+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&E(t.elements.arrow),se=ae?"y"===j?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(q=null==S?void 0:S[j])?q:0,ce=F+ie-fe,pe=de(m?a(X,F+oe-fe-se):X,F,m?i(Y,ce):Y);k[j]=pe,V[j]=pe-F}if(c){var ue,le="x"===j?D:P,he="x"===j?A:L,me=k[M],ve="y"===M?"height":"width",ye=me+b[le],ge=me-b[he],be=-1!==[D,P].indexOf(w),we=null!=(ue=null==S?void 0:S[M])?ue:0,xe=be?ye:me-B[ve]-H[ve]-we+R.altAxis,Oe=be?me+B[ve]+H[ve]-we-R.altAxis:ge,je=m&&be?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(xe,me,Oe):de(m?xe:ye,me,m?Oe:ge);k[M]=je,V[M]=je-me}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var me={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=C(n.placement),f=z(s),c=[P,L].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return Y("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:G(e,k))}(o.padding,n),u=g(i),l="y"===f?D:P,d="y"===f?A:L,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],v=E(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,w=p[l],x=y-u[c]-p[d],O=y/2-u[c]/2+b,j=de(w,O,x),M=f;n.modifiersData[r]=((t={})[M]=j,t.centerOffset=j-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&N(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ye(e){return[D,L,A,P].some((function(t){return e[t]>=0}))}var ge={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),f=ve(a,r),c=ve(s,o,i),p=ye(f),u=ye(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},be=Z({defaultModifiers:[ee,te,oe,ie]}),we=[ee,te,oe,ie,ae,le,he,me,ge],xe=Z({defaultModifiers:we});e.applyStyles=ie,e.arrow=me,e.computeStyles=oe,e.createPopper=xe,e.createPopperLite=be,e.defaultModifiers=we,e.detectOverflow=J,e.eventListeners=ee,e.flip=le,e.hide=ge,e.offset=ae,e.popperGenerator=Z,e.popperOffsets=te,e.preventOverflow=he,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map
}

{// Global variables:
    var sw   =  sw  || {},  // site collection wide (this) library
        ut   =  ut  || {},  // utilities
        pag  =  pag || {},  // pagination control
        msu  =  msu || {},  // micor search unlimited utilities
        ccl  =  ccl || {},  // central country list | ccl blob
        lt   =  lt  || {},  // launchtracker
        tc   =  tc  || {},  // trackchanges || tcplants
        lu   =  lu  || {},  // Latest updates editor | lurte
        disp =  disp|| {},  // Post processing for automation
        coml =  coml|| {},  // commodity landing pages
        lup  =  lup || {},  // commodity latest updates pages
        plc  =  plc || {},  // plants country landing
        npc  =  npc || {},  // npg country landing
        npd  =  npd || {},  // npg new country landing
        plp  =  plp || {},  // generate/update plants landing properties blob
        plf  =  plf || {},  // plforms
        pl_  =  pl_ || {},  // pl_props 
        migr =  migr|| {},  // Meat migration org to struct
        mf   =  mf  || {},  // Micor filters
        acs  =  acs || {},  // accessibility for forms
        gcl  =  gcl || {},  // Admin: generate CCL blob from CCL list
        gcn  =  gcn || {},  // Admin: new  form CCL list
        gce  =  gce || {};  // Admin: edit form CCL list
        
    sw.env        = 'PROD';
    sw.debug      = false;
    sw.verbose    = false;
    sw.duplicates = false;
    sw.inpage     = false;
    sw.canGather  = false;
    sw.bNoResult  = false;
    sw.statusMsg  = false;
    sw.getAll     = false;
    sw.showAll    = false;
    sw.bShowSize  = false;
    sw.bNoResult  = false;
    sw.silentErr  = true;
    sw.plantsNC   = false;
    sw.commodity  = '';
    sw.keyword    = '';
    sw.logFile    = '';
    sw.startIndex = 0;
    sw.endIndex   = 0;
    sw.nResults   = 0;
    sw.debugCntr  = 0;
    sw.resultsLmt = 252;
    sw.sHigh      = 0; 
    sw.sLow       = 0;
    sw.pathName   = window.location.pathname.replace(/[ ]/gi, '').toLowerCase();
    sw.protocol   = (window.location.href.indexOf('authoring')==-1)?'https:':'http:';
    sw.searchTerm = '';
    sw.searchPUrl = '/pages/micorsearchresults.aspx';
    sw.plpJS      = '/_catalogs/masterpage/micor2020/js/lan/adm/pl_props.js';
    sw.ribbonJS   = '/_catalogs/masterpage/micor2020/js/lan/plforms.js';
    sw.plpropsJS  = '/_catalogs/masterpage/micor2020/js/lan/plupdateprops.js';
    sw.plCntyLan  = '/_catalogs/masterpage/micor2020/js/lan/pl_country_lan.js';
    sw.NPGCntyLan = '/_catalogs/masterpage/micor2020/js/lan/npg_country_lan.js';
    sw.searchJS   = '/_catalogs/masterpage/micor2020/js/_utils/search/searchresults.js';
    // Style Sheets
    sw.sc_wideST  = '/_catalogs/masterpage/micor2020/css/_utils/gvrn/sc_wide.css';
    sw.sc_nonaST  = '/_catalogs/masterpage/micor2020/css/_utils/gvrn/sc_wide_nona.css';
    sw.sc_edmdST  = '/_catalogs/masterpage/micor2020/css/_utils/gvrn/sc_editmode.css';
    sw.searchST   = '/_catalogs/masterpage/micor2020/css/_utils/search/micorsearchresults.css';
    sw.gscalerST  = '/_catalogs/masterpage/micor2020/css/global.scaler.min.css';
    sw.CntyLanST  = '/_catalogs/masterpage/micor2020/css/lan/pl_country_lan.css';
    sw.NPGCLanST  = '/_catalogs/masterpage/micor2020/css/lan/npg_country_lan.css'; 
    sw.ribbonCSS  = '/_catalogs/masterpage/micor2020/css/lan/pl_forms.css'; 
    // Blobs
    sw.blobURI_C  = '/siteassets/ccl/mCCL.htm';
    // sw.blobURI_C  = '/_catalogs/masterpage/micor2020/config/ccl/mCCL.htm';
    sw.blobFbLs   = '/siteassets/search/forbidden.htm';
    sw.plPAnonUrl = '/plants/siteassets/blobs/props.htm';   
    sw.plPAuthUrl = '/plants/siteassets/blobs/propsAuth.htm';
    sw.plPropsUrl = '/plants/siteassets/blobs/propsAuth.htm';
    //sw.plPrpsAuth = '/plants/siteassets/blobs/plAuth.htm'; 
    sw.micorPath  = '/_catalogs/masterpage/micor2020/';
    sw.fbls       = [];
    // Arrays
    sw.res  = [];
    sw.fbls = []; // forbidden links
    sw.cmds = {
        'meat'          : 'Meat', 
        'dairy'         : 'Dairy',
        'plants'        : 'Plants',
        'fish'          : 'Fish', 
        'la'            : 'Live animals',
        'live-animals'  : 'Live animals', 
        'eggs'          : 'Eggs', 
        'npg'           : 'Non-prescribed goods',  
        'organics'      : 'Organics',
        'micor'         : 'Micor',
        'pages'         : 'Micor'
    }
    // Constructor
    sw._Res =  function(
        pnID,
        pnRanking,
        psTitle,
        psUrl,
        psCommodity,
        psCountry,
        psSummy,
        psBottom
    )
    {
        this.PNID = pnID;
        this.RANK = pnRanking;
        this.TTLE = psTitle;
        this.PURL = psUrl;
        this.CMDY = psCommodity;
        this.CNTY = psCountry;
        this.SUMY = psSummy;
        this.BTTM = psBottom;
    }
    // Central country list
    ccl.debug     = true;
    ccl.verbose   = false;
    ccl.selectable= true;
    ccl.debugCntr = 0;
    ccl.selection = ' - Select a country - ';
    ccl.cnty      = [];
    ccl.type = { 
        '0':'Single', 
        '1':'Parent', 
        '2':'Alias', 
        '3':'Dependent province'
    };
    // Constructor for CCL
    ccl._CAN = function(
        pnId,
        psTitle,
        psCountryName,
        psIsoCode,
        psPageType,
        psParentPage,
        pbSelectable,
        psPageURL
    )
    {
        this.PNID = pnId;
        this.TTLE = psTitle;
        this.CNTY = psCountryName;
        this.ISOC = psIsoCode;
        this.PTYP = psPageType;
        this.PRNT = psParentPage;
        this.BSEL = pbSelectable;
        this.PURL = psPageURL;
    }
    // Params
    pag.debug     = false;
    pag.verbose   = false;
    pag.pgNumber  = 1;
    pag.blNumber  = 1;
    pag.paging    = 10;
    pag.pagingDir = 'up';//↕️
    pag.ttlPages  = 0;
    pag.lastPage  = 0;
    pag.blockSize = 8;
    pag.debugCntr = 0;
    // Arrays
    pag.rBlcks    = [];
    // Search display template
    msu.stop      = false;
    // Micor filters
    mf.pState = '';

    ut.debug       = false;
    ut.waitDialog  = null;
    ut.dialogStyle = '';

    //****************************************************************************
} 

{// jQuery Plug-in:
    //****************************************************************************
    // Desc: jQuery outerHTML // jQuery extension
    //****************************************************************************
    jQuery.fn.outerHTML = function(s) 
    {
        return s
            ? this.before(s).remove()
            : jQuery("<p>").append(this.eq(0).clone()).html();
    };

    //****************************************************************************
}

{// Utils: - Generic helper methods
    /****************************************************************************/
    /* UTILS */
    //****************************************************************************
    // Desc: Inject special character replacements
    //****************************************************************************
    ut.hexMatch = function(psValue)
    {
        return psValue.replace(/Cte d'/g, "Côte d'").replace(/Trkiye/g, "Türkiye");
    }

    //****************************************************************************
    // Desc: \x7F characters (above hex 127) stripped
    //****************************************************************************
    ut.convertToHexSafe = function(psValue)
    {
        var sCleanedVal = psValue.replace(/[^\x00-\x7F]/g, '');

        return sCleanedVal;
    }

    //****************************************************************************
    // Desc: Detect in edit mode status
    //****************************************************************************
    ut.pageInDesignMode = function()
    {
        return (($('input[name="MSOLayout_InDesignMode"]').val()=='1')?true:false);
    }

    //****************************************************************************
    // Desc: Removes unwanted browser %zerowidthspace, unicode chars, whitespaces
    //****************************************************************************
    ut.uniClean = function(psValue)
    {
        var sUniClean = typeof psValue === 'string' ? psValue.trim() : '';

        sUniClean = sUniClean
                        .replace(/&nbsp;/g, ' ')
                        .replace(/&#160;/g, ' ')
                        .replace(/(\r\n|\r|\n)/g, '')
                        .replace(/[\u200B-\u200D\uFEFF]/g, '')
                        .replace(/&ZeroWidthSpace;/g, '');

        return sUniClean;
    }

    //****************************************************************************
    // Desc: Find user agent
    //****************************************************************************
    ut.getDeviceInfo = function()
    {
        var ua = navigator.userAgent;

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) 
        {
            return 'tablet';
        }
        else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) 
        {
            return 'mobile';
        }

        return 'desktop';
    }

    //****************************************************************************
    // Desc: Detect the current zoomlavel of a browser
    //****************************************************************************
    ut.getZoomLevel = function()
    {
        var zoomLevel
        var screenCssPixelRatio = (window.outerWidth - 8) / window.innerWidth;
        if (screenCssPixelRatio >= .46 && screenCssPixelRatio <= .54) 
        {
            zoomLevel = "-4";
        } 
        else if (screenCssPixelRatio <= .64) 
        {
            zoomLevel = "-3";
        } 
        else if (screenCssPixelRatio <= .76) 
        {
            zoomLevel = "-2";
        } 
        else if (screenCssPixelRatio <= .92) 
        {
            zoomLevel = "-1";
        } else if (screenCssPixelRatio <= 1.10) 
        {
            zoomLevel = "0";
        } 
        else if (screenCssPixelRatio <= 1.32) 
        {
            zoomLevel = "1";
        } 
        else if (screenCssPixelRatio <= 1.58) 
        {
            zoomLevel = "2";
        } 
        else if (screenCssPixelRatio <= 1.90) 
        {
            zoomLevel = "3";
        } 
        else if (screenCssPixelRatio <= 2.28) 
        {
            zoomLevel = "4";
        } 
        else if (screenCssPixelRatio <= 2.70) 
        {
            zoomLevel = "5";
        } 
        else 
        {
            zoomLevel = "unknown";
        }

        return zoomLevel;
    }

    //****************************************************************************
    // Desc: Create a subfolder regardless where
    //****************************************************************************
    ut.createFolder = function(list,folderUrl)
    {
        var createFolderInternal = function( parentFolder, folderUrl)
        {
            var ctx = parentFolder.get_context();        
            var folderNames = folderUrl.split('/');
            var folderName = folderNames.shift();
            var folder = parentFolder.get_folders().add( folderName);
            ctx.load(folder);

            return ut.executeQuery(ctx).then(
            function()
            {
                if( folderNames.length > 0)
                {
                    return createFolderInternal(folder, folderNames.join('/'));
                } 
                        
                return folder;     
            });
        };

        return createFolderInternal(list.get_rootFolder(), folderUrl);
    }

    // Execution promise
    ut.executeQuery = function(context) 
    {
        return new Promise(function(resolve, reject)
        {
            context.executeQueryAsync(
            function () 
            {
                resolve();
            }, 
            function (sender, args) 
            {
                reject(args);
            });
        });
    }


    //****************************************************************************
    // Desc: Engage jquery promise infrastructure
    //****************************************************************************
    ut.definePromise = function()
    {
        SP.ClientContext.prototype.setPromise = function() 
        {
            var oDef = $.Deferred();
            this.executeQueryAsync(
                function(){ oDef.resolve(arguments); },
                function(){ oDef.reject( arguments); }
            );
            
            return oDef.promise();
        }
    }

    //****************************************************************************
    // Desc: Remove the hash value from the address location
    //****************************************************************************
    ut.removeHash = function() 
    { 
        var scrollV, scrollH, loc = window.location;
        if( 'pushState' in history )
            history.pushState('', document.title, loc.pathname + loc.search);
        else 
        {// Prevent scrolling by storing the page's current scroll offset
            scrollV = document.body.scrollTop;
            scrollH = document.body.scrollLeft;

            loc.hash = '';
            // Restore the scroll offset, should be flicker free
            document.body.scrollTop  = scrollV;
            document.body.scrollLeft = scrollH;
        }
    }

    //****************************************************************************
    // Desc: Return the Iframe object
    // https://www.programmersought.com/article/38344242486/
    //****************************************************************************
    ut.getIframeObject = function(poFrameObj)
    {
        var doc;
    
        if( poFrameObj.contentWindow ) 
        {
            return poFrameObj.contentWindow;
        }
    
        if (poFrameObj.window ) 
        {
            return poFrameObj.window;
        } 
    
        if( !doc && poFrameObj.contentDocument ) 
        {
            doc = poFrameObj.contentDocument;
        } 
    
        if( !doc && poFrameObj.document ) 
        {
            doc = poFrameObj.document;
        }
    
        if( doc && doc.defaultView ) 
        {
            return doc.defaultView;
        }
    
        if( doc && doc.parentWindow ) 
        {
            return doc.parentWindow;
        }
    
        return undefined;
    }

    //****************************************************************************
    // Desc: Return todays date formatted yyyyMMdd
    //****************************************************************************
    ut.getFolderFormattedDate = function()
    {
        var oDt = new Date();

        return (''+oDt.getFullYear()+ut.pad((oDt.getMonth()+1),2)+ut.pad(oDt.getDate(),2));
    }

    //****************************************************************************
    // Desc: Return todays date formatted 'yyMMdd.HHmm'
    //****************************************************************************
    ut.getFileFormattedCurrentDateTime = function()
    {
        var oDt = new Date();

        return  ('' + ut.pad((oDt.getYear()-100), 2)
                    + ut.pad((oDt.getMonth()+1),2)
                    + ut.pad(oDt.getDate(),2)
                    + '_'
                    + ut.pad(oDt.getHours(),2)
                    + ut.pad(oDt.getMinutes(),2)
                );
    }

    //****************************************************************************
    // Desc: Return todays date formatted 'yyMMdd.HHmm'
    //****************************************************************************
    ut.getDotFormattedCurrentDateTime = function()
    {
        var oDt = new Date();

        return  ('' + ut.pad((oDt.getYear()-100), 2)
                    + ut.pad((oDt.getMonth()+1),2)
                    + ut.pad(oDt.getDate(),2)
                    + '.'
                    + ut.pad(oDt.getHours(),2)
                    + ut.pad(oDt.getMinutes(),2)
                );
    }

    //****************************************************************************
    // Desc: Return todays date formatted dd/MM/yyyy
    //****************************************************************************
    ut.getDisplayAUFormattedDate = function()
    {
        var oDt = new Date();

        return (ut.pad(oDt.getDate(),2)+'/'+ut.pad((oDt.getMonth()+1),2)+'/'+oDt.getFullYear());
    }

    //****************************************************************************
    // Desc: Expects date string in the following format '2022-12-21'
    //****************************************************************************
    ut.formDisplayDate = function(psDate)
    {
        var arDate = psDate.split('-');
        var rrDate = (ut.pad(parseInt(arDate[2], 10), 2) + '/' 
                    + ut.pad(parseInt(arDate[1], 10), 2) + '/' 
                    + ut.pad(parseInt(arDate[0], 10), 4));

        return rrDate;
    }

    //****************************************************************************
    // Desc: Return todays date formatted yyyyMMdd
    //****************************************************************************
    ut.getDateDiff = function(pdDateMinor, pdDateMajor) 
    {
        dt1 = new Date(pdDateMinor);
        dt2 = new Date(pdDateMajor);

        return Math.floor(
            (
                Date.UTC( dt2.getFullYear(), dt2.getMonth(), dt2.getDate() ) -
                Date.UTC( dt1.getFullYear(), dt1.getMonth(), dt1.getDate() ) 
            ) / (1000 * 60 * 60 * 24)
        );
    }

    //****************************************************************************
    // Desc: Create a userformatted dateTime stamp: getDTStamp('ymd_HMS')
    //****************************************************************************
    ut.getDTStamp = function(psDateTime)
    {
        if(!psDateTime) psDateTime = 'ymd_HMS';
        
        var oD = new Date();
        var mDate = {
            'S': oD.getSeconds(),
            'M': oD.getMinutes(),
            'H': oD.getHours(),
            'd': oD.getDate(),
            'm': oD.getMonth() + 1,
            'y': oD.getFullYear(),
        }
        // Ensure formatting and add leading zeroes
        return psDateTime.replace(/([SMHdmy])/g, function (key) { return (mDate[key] < 10 ? '0' : '') + mDate[key]; });
    }

    //****************************************************************************
    // Desc: Console.log + appends log line to string in memory
    //****************************************************************************
    ut.log = function(psData)
    {
        console.log(psData);
        ut.logFile += (ut.logFile == '')? psData:'\n' + psData; 
    }

    //****************************************************************************
    // Desc: Saves log string in memory as a file - not completed yet
    //****************************************************************************
    ut.saveLog = function(psLogFileStr)
    {
  
    }

    //****************************************************************************
    // Desc: returns a zero padded figure as string
    //****************************************************************************
    ut.pad = function(pnVal, pnLength)
    {
        var sVal = '' + pnVal;
        if(pnLength && !isNaN(pnLength))
        {
            var nL = parseInt(pnLength);
            while( sVal.length < nL)
            {
                sVal = '0'+sVal;
            }
        }

        return sVal;
    }

    //****************************************************************************
    // Desc: returns a space padded value as string
    //****************************************************************************
    ut.psd = function(pnVal, pnLength)
    {
        var sVal = '' + pnVal;
        if(pnLength && !isNaN(pnLength))
        {
            var nL = parseInt(pnLength);
            while( sVal.length < nL)
            {
                sVal = ' '+sVal;
            }
        }

        return sVal;
    }

    //****************************************************************************
    // showWaitDialog(_T('Wdl-003-001'), '\n\n\n'+_T('Wdl-003-002')+'!', 140, 280);
    //****************************************************************************
    ut.showWaitDialog = function(psTitle, psMessage, pnH, pnW)
    {
        try 
        {
            if (ut.waitDialog == null) 
            {
                ut.waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose( psTitle, psMessage, pnH, pnW);
            }
        }
        catch (ex) { ; }
    }

    //****************************************************************************
    // Desc: closeWaitDialog
    //****************************************************************************
    ut.closeWaitDialog = function()
    {
        try 
        {
            ut.waitDialog.close();
            ut.waitDialog = null;
        }
        catch (ex) { ; }
    }

    //****************************************************************************
    // Desc: capitalise
    //****************************************************************************
    ut.capitalise = function(psVal)
    {
        var str = '' + psVal;

        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //****************************************************************************
    // Desc: Add draggable behaviour to a DOM element
    //****************************************************************************
    ut.dragElement = function(poElm)
    {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if( document.getElementById(poElm.id + "DragBar"))
        {// if present, the header is where you move the DIV from:
            document.getElementById(poElm.id + "DragBar").onmousedown = dragMouseDown;
        } 
        else
        {// otherwise, move the DIV from anywhere inside the DIV:
            poElm.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e)
        {
            if($('div.dTitle'))
            {
                $('div.dTitle').remove();
                $('div.dragBar').css({'width':'90px'});
            }
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e)
        {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            poElm.style.top = (poElm.offsetTop - pos2) + "px";
            poElm.style.left = (poElm.offsetLeft - pos1) + "px";
        }

        function closeDragElement()
        {// stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    //****************************************************************************
    // Desc: Make a DIV element draggagle:
    //****************************************************************************
    ut.enableDrag = function(psElmId)
    {
        ut.dragElement(document.getElementById(psElmId));
    }

    //****************************************************************************
    // Desc: Url percent encoding the MS way
    //****************************************************************************
    ut.msPercentEncode = function(psValue)
    {
        return psValue
                .replace(/ /g,  '%20')
                .replace(/\!/g, '%21')
                .replace(/\#/g, '%23')
                .replace(/\$/g, '%24')
                .replace(/\%/g, '%25')  
                .replace(/\&/g, '%26')
                .replace(/\'/g, '%27')
                .replace(/\(/g, '%28')
                .replace(/\)/g, '%29')
                .replace(/\*/g, '%2A')
                .replace(/\+/g, '%2B')
                .replace(/\,/g, '%2C')
                .replace(/\-/g, '%2D')
                .replace(/\./g, '%2E')
                .replace(/\//g, '%2F')
                .replace(/\:/g, '%3A')
                .replace(/\;/g, '%3B')
                .replace(/\=/g, '%3D')
                .replace(/\?/g, '%3F')
                .replace(/\@/g, '%40')
                .replace(/\[/g, '%5B')
                .replace(/\]/g, '%5D');
    }

    //****************************************************************************
    // Desc: Search the querystring for a key value
    //****************************************************************************
    ut.getUrlSearchKey = function(psName)
    {
        psName = psName.toLowerCase();
        psName = psName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + psName + '=([^&#]*)');
        var sSearch = decodeURIComponent(location.search.toLowerCase());
        var results = regex.exec(sSearch);

        return results === null ? '' : results[1].replace(/\+/g, ' ');
    }

    //****************************************************************************
    // Desc: Provide your SharePoint sitecollection address as perif parm
    //****************************************************************************
    ut.sendEmail = function(psSiteUrl)
    {
        var urlTemplate;

        ut.emailProps = 
        {  
            To: [],  
            CC: [],  
            Subject: '<Email Subject>',  
            Body:    '<Email Body>'  
        };  
    
        urlTemplate = psSiteUrl + '/_api/SP.Utilities.Utility.SendEmail';  
        ut.getFormDigest(psSiteUrl).then( function(data)
        {  
            $.ajax(
            {  
                contentType: 'application/json',  
                url: urlTemplate,  
                type: 'POST',  
                data: JSON.stringify(
                {  
                    'properties': 
                    {  
                        '__metadata': 
                        {  
                            'type': 'SP.Utilities.EmailProperties'  
                        },  
                        'To': 
                        {  
                            'results': ut.emailProps.To  
                        },  
                        'Body'   : ut.emailProps.Body,  
                        'Subject': ut.emailProps.Subject,  
                        'CC': 
                        {  
                            'results': ut.emailProps.CC  
                        },  
                    }  
                }),  
                headers: 
                {  
                    'Accept'         : 'application/json;odata=verbose',  
                    'content-type'   : 'application/json;odata=verbose',  
                    'X-RequestDigest': data.d.GetContextWebInformation.FormDigestValue  
                },  
                success: function(data) 
                {  
                    console.log('sendEmail success: email sent.');  
                },  
                error: function(err)
                {  
                    console.log('sendEmail error: ' + err.get_message());  
                }  
            });  
        });  
    } 

    //****************************************************************************
    // Desc: getFormDigest
    //****************************************************************************
    ut.getFormDigest = function(psUrl)
    {  
        return $.ajax(
        {  
            url:    psUrl + '/_api/contextinfo',  
            method: 'POST',  
            headers: 
            { 
                'Accept': 'application/json; odata=verbose' 
            }  
        });  
    }

    //****************************************************************************
    // Desc: Replace XML unsafe characters
    //****************************************************************************
    ut.htmlEncode = function(psString) 
    {
        return psString
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;' )
                .replace(/>/g, '&gt;' )
                .replace(/'/g, '&#39;')
                .replace(/"/g, '&#34;')
                .replace(/:/g, '&#58;');
    }

    //****************************************************************************
    // Desc: Replace encoded XML unsafe characters with HTML characters
    //****************************************************************************
    ut.htmlDecode = function(psString)
    {
        return psString
                .replace(/&amp;/g, '&' )
                .replace(/&lt;/g,  '<' )
                .replace(/&gt;/g,  '>' )
                .replace(/&#39;/g, '\'')
                .replace(/&#34;/g, '"' )
                .replace(/&#58;/g, ':' );
    }

    //****************************************************************************
    // Desc: Replace XML unsafe characters
    //****************************************************************************
    ut.xmlEncode = function(psString) 
    {
        if(psString)
            return psString
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;' )
                    .replace(/>/g, '&gt;' )
                    .replace(/'/g, '&#39;')
                    .replace(/"/g, '&#34;');
        else
            return '';
    }

    //****************************************************************************
    // Desc: Targets table cells which contain a form field in standard forms using
    // the comment tag:
    //                 <!-- FieldName="Title"
    //                      FieldInternalName="Title"
    //                      FieldType="SPFieldText"
    //                  -->
    // as target. We need this method because SharePoint doesn't provide field type 
    // ids or class names consistently.
    //****************************************************************************
    ut.findFormField = function(psFieldInternaleName)
    {
        var oField = null, sCommentText = '';

        if(!sw.inEditMode )
        {
            sCommentText  = RegExp("FieldInternalName=\"" 
                                + psFieldInternaleName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "\"", "gi");
            $('td.ms-formbody').each(function()
            {
                if(sCommentText.test($(this).html()))
                {
                    oField = $(this);

                    return false;
                }
            });
        }

        return oField;
    }

    //****************************************************************************
    /*S: COOKIE Handling */
    //****************************************************************************
    //Desc: Return cookie content / undefined
    //****************************************************************************
    ut.getCookie = function(psCookieName) 
    {
        var sResult = '';
        var matches = document.cookie.match(
            new RegExp("(?:^|; )"+psCookieName.replace(
                /([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)")
        );

        if(location.host.toLowerCase().indexOf('authoring') == -1)
        {
            sResult = (matches ? decodeURIComponent(matches[1]) : undefined);

            return sResult ? ut.secDecode(sResult) : undefined;
        }
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    //****************************************************************************
    // Desc: ASCII to Hex
    //****************************************************************************
    ut.secEncode = function(psValue)
    {
        ut.sValue  = '' +psValue; 
        ut.encoded = [];
        for( var ni=0; ni < ut.sValue.length; ni++ ) 
        {
            ut.encoded.push(Number(ut.sValue.charCodeAt(ni)).toString(16));
        }

        return ut.encoded.join('');   
    }

    //****************************************************************************
    // Desc: Hex to ASCII
    //****************************************************************************
    ut.secDecode = function(psValue)
    {
        var sHex = '' + psValue;
        var sRes = '';

        for (var ni = 0; ni < sHex.length; ni+= 2) 
        {
            sRes += String.fromCharCode(parseInt(sHex.substr(ni, 2), 16));
        }

        return sRes;   
    }

    //****************************************************************************
    // Desc: Set cookie 
    //****************************************************************************
    ut.setCookie = function(poCookieValues)
    {
        document.cookie = poCookieValues;
    }

    //****************************************************************************
    // Desc: Delete cookie 
    //****************************************************************************
    ut.deleteCookie = function(psCookieName) 
    {
        document.cookie = psCookieName, '', {'max-age': -1};
    }

    //****************************************************************************
    /*E: COOKIE Handling */
    /*S: MessageBox - associated message box methods */ 
    ut.btnOk  = 'Ok';
    ut.btnYes = 'Yes';
    ut.btnNo  = 'No';
    ut.messageDialogTitle = 'Message';
    //****************************************************************************
    // Desc: prepare user information/notification or confirmation message dialogs
    // smpl: ut.messageBox( true, null, 'lu', sMessage, 145, 'Dis-001', 320);
    //****************************************************************************
    ut.messageBox = function(
        pbConfirm, // true/false - switch for confirm or not
        poIcon,    // null/ut.information, ut.exclamation, ut.critical 
        psRef,     // pointer to the calling var method
        psMessage, // message
        pnHeight,  // dialog message height
        psUseRef,  // Identifier for the message. e.g. 'Sel-001'
        pnWidth    // dialog message height
    )
    {
        var sMsg = psMessage;

        if(!pbConfirm)
        {// Information/Warning/Critical | Ok
            ut.createMessageHtml(sMsg, pnHeight, psUseRef, psRef, poIcon, pnWidth);
        }
        else
        {// Question | Yes/No
            ut.createConfirmationHtml(psRef, sMsg, pnHeight, psUseRef, poIcon, pnWidth);
        }
    }

    //****************************************************************************
    // Desc: createMessageHtml
    //****************************************************************************
    ut.createMessageHtml = function( psMessage, pnHeight, psUseRef, psRef, poIcon, pnWidth)
    {
        if(!psRef) psRef = 'ut';
        if(!poIcon) poIcon = ut.information;
        
        var sDgHtml = '';

        sDgHtml += ut.dialogStyle;
        sDgHtml += '\n  <table id="dialog_message">';
        sDgHtml += '\n   <tbody id="dialog_msg_tbody">';
        sDgHtml += '\n   <tr>';
        sDgHtml += '\n    <td class="d80Cell msgCellIcon">' + poIcon;
        sDgHtml += '\n     <span class="hiddenSpan">'+psUseRef+'</span>';
        sDgHtml += '\n    </td>';
        sDgHtml += '\n    <td class="d240Cell msgCellMsg">' + psMessage + '</td>';
        sDgHtml += '\n   </tr>';
        sDgHtml += '\n   <tr class="btnSpacer"><td></td><td></td></tr>';
        sDgHtml += '\n   <tr>';
        sDgHtml += '\n    <td class="d80Cell">&nbsp;</td>';
        sDgHtml += '\n    <td class="d240Cell dialog_button_td">';
        sDgHtml += '\n     <div class="button_msg">';
        sDgHtml += '\n      <button id="btnOk" class="dialogBtn" type="button" '
                 +          'onmousedown="'+psRef+'.userOk(\''+psUseRef+'\');">'+ut.btnOk+'</button>';
        sDgHtml += '\n     </div>';
        sDgHtml += '\n    </td>';
        sDgHtml += '\n   </tr>';
        sDgHtml += '\n   </tbody>';
        sDgHtml += '\n  </table>';
        $('#messages').html(sDgHtml);
        //console.log(sDgHtml);
        if(!pnWidth)
        {
            setTimeout('ut.openMessageBox('+pnHeight+')', 10);
        }
        else
        {
            setTimeout('ut.openMessageBox('+pnHeight+','+pnWidth+')', 10);
        }
    }

    //****************************************************************************
    // Desc: createConfirmHtml
    //****************************************************************************
    ut.createConfirmationHtml = function( psRef, psMessage, pnHeight, psUseRef, poIcon, pnWidth)
    {
        if(!psRef) psRef = 'ut';

        var sDgHtml = '';

        sDgHtml += ut.dialogStyle;
        sDgHtml += '\n  <table id="dialog_message">';
        sDgHtml += '\n   <tbody id="dialog_msg_tbody">';
        sDgHtml += '\n   <tr>';
        if(poIcon)
            sDgHtml += '\n    <td class="d80Cell msgCellIcon">' + poIcon;
        else
            sDgHtml += '\n    <td class="d80Cell msgCellIcon">' + ut.question;
        sDgHtml += '\n     <span class="hiddenSpan">'+psUseRef+'</span>';
        sDgHtml += '\n    </td>';
        sDgHtml += '\n    <td class="d240Cell msgCellMsg">' + psMessage + '</td>';
        sDgHtml += '\n   </tr>';
        sDgHtml += '\n   <tr class="btnSpacer"><td></td><td></td></tr>';
        sDgHtml += '\n   <tr>';
        sDgHtml += '\n    <td class="d80Cell">&nbsp;</td>';
        sDgHtml += '\n    <td class="d240Cell dialog_button_td">';
        sDgHtml += '\n     <div class="button_msg">';
        sDgHtml += '\n      <button id="btnNo" class="dialogBtn" type="button" '
                            + 'onmousedown="'+psRef+'.userNo(\''+psUseRef+'\');">'+ut.btnNo+'</button>';
        sDgHtml += '\n      <button id="btnYes" class="dialogBtn" type="button" '
                            + 'onmousedown="'+psRef+'.userYes(\''+psUseRef+'\');">'+ut.btnYes+'</button>';
        sDgHtml += '\n     </div>';
        sDgHtml += '\n    </td>';
        sDgHtml += '\n   </tr>';
        sDgHtml += '\n   </tbody>';
        sDgHtml += '\n  </table>';
        $('#messages').html(sDgHtml);
        if(!pnWidth)
        {
            setTimeout('ut.openMessageBox('+pnHeight+')', 10);
        }
        else
        {
            setTimeout('ut.openMessageBox('+pnHeight+','+pnWidth+')', 10);
        }
    }

    //****************************************************************************
    // Desc: openMessageBox
    //****************************************************************************
    ut.openMessageBox = function( pnHeight, pnWidth)
    {
        var oDCElem = document.getElementById('messages');
        var options =
        {
            title: ut.messageDialogTitle,
            allowMaximize: false,
            showClose: true,
            width: ((pnWidth)?pnWidth:320),
            height: pnHeight,
            html: oDCElem.cloneNode(true),
        };
        ut.msgBox = SP.UI.ModalDialog.showModalDialog(options);
        $('.ms-dlgCloseBtn').mousedown(ut.closeMessageDialog);
        $('.hiddenSpan').eq(0).css('color', '#888');
    }

    //****************************************************************************
    // Desc: closeMessageDialog
    //****************************************************************************
    ut.closeMessageDialog = function()
    {
        $('.hiddenSpan').eq(0).css('color','#fff');
        try
        {
            $('#messages').html('');
            ut.msgBox.close();
            ut.msgBox = null;
            ut.dialogStyle = '';
        }
        catch(ex){ ; }
    }

    //****************************************************************************
    // Desc: Sample
    //****************************************************************************
    ut.userOk = function()
    {
        if(global.verbose) console.log(' --> user sample answer: OK');
        ut.closeMessageDialog();
    }

    //****************************************************************************
    // Desc:  Sample
    //****************************************************************************
    ut.userYes = function()
    {
        if(global.verbose) console.log(' --> user sample answer: Yes');
        ut.closeMessageDialog();
    }

    //****************************************************************************
    // Desc:  Sample
    //****************************************************************************
    ut.userNo = function()
    {
        if(global.verbose) console.log(' --> user sample answer: NO');
        ut.closeMessageDialog();
    }

    //****************************************************************************
    // MessageBox SVG icons below
    // Question mark - always associated with the confirmation dialog
    ut.question = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">'+
    '<defs>'+
    '<radialGradient id="a" gradientUnits="userSpaceOnUse" cy="41.4" cx="24.29" gradientTransform="matrix(1 0 0 .3526 0 26.8)" r="21">'+
    '<stop offset="0"/>'+
    '<stop stop-opacity="0" offset="1"/>'+
    '</radialGradient>'+
    '</defs>'+
    '<ellipse opacity=".41" rx="21.1" ry="7.44" cy="41.4" cx="24.29" fill="url(#a)"/>'+
    '<circle cy="21.4" cx="24.3" r="21.27" fill="#600"/>'+
    '<circle r="20" cy="21.31" stroke="#e33" cx="24.44" fill="#c00"/>'+
    '<g fill="#fff">'+
    '<path d="m43.68 20.48c0 10.83-6.1-4.31-18.67 0.39-12.73 4.72-20.58 10.44-20.58-0.39s8.8-19.62 19.63-19.62 19.62 8.79 19.62 19.62" fill-opacity=".21"/>'+
    '<path d="m21.7 27.6c-.07.001-.13.08-.13.16v5.49c0 .09.06.15.14.16h5.19c.08 0 .15-.07.15-.16v-5.49c0-.09-.06-.16-.15-.16h-5.19c0 0-.001 0-.001 0m10.32-11.9c0-2-.63-3.55-1.9-4.6-1.26-1.06-3.08-1.57-5.43-1.57-.9 0-1.83.1-2.8.31-.97.21-2.03.53-3.19.96-.06.02-.1.08-.1.15v4.84c0 .12.13.2.22.13.97-.67 1.9-1.18 2.79-1.52.89-.34 1.71-.51 2.47-.51.8 0 1.4.2 1.83.58.43.37.64.88.64 1.56 0 .44-.12.89-.37 1.34-.24.45-.63.95-1.16 1.47l-.92.89c-1.02 1.01-1.7 1.85-2.03 2.54-.33.67-.49 1.45-.49 2.31v.76c0 .09.06.15.14.16h5.19c.08 0 .15-.07.15-.16v-.69c0-.44.09-.83.28-1.19.19-.36.6-.87 1.25-1.5l.92-.88c.91-.93 1.56-1.79 1.94-2.61.38-.83.58-1.76.58-2.79"/>'+
    '</g>'+
    '</svg>';
    // Information mark
    ut.information = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" id="svg1306" height="48px" width="48px" version="1.1">'+
    '<defs id="defs1308">'+
    ' <radialGradient id="radialGradient3976" gradientUnits="userSpaceOnUse" cy="40" cx="23.857" gradientTransform="matrix(1 0 0 .5 0 20)" r="17.143">'+
    '  <stop id="stop4128" offset="0"/>'+
    '  <stop id="stop4130" stop-opacity="0" offset="1"/>'+
    ' </radialGradient>'+
    ' <linearGradient id="linearGradient3980" y2="-8.5627" gradientUnits="userSpaceOnUse" x2="20.065" y1="53.836" x1="43.936">'+
    '  <stop id="stop2481" stop-color="#ffe69b" offset="0"/>'+
    '  <stop id="stop2483" stop-color="#fff" offset="1"/>'+
    ' </linearGradient>'+
    '</defs>'+
    '<metadata id="metadata1311">'+
    ' <rdf:RDF>'+
    '  <cc:Work rdf:about="">'+
    '   <dc:format>image/svg+xml</dc:format>'+
    '   <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>'+
    '   <dc:creator>'+
    '    <cc:Agent>'+
    '     <dc:title>Rodney Dawes</dc:title>'+
    '    </cc:Agent>'+
    '   </dc:creator>'+
    '   <dc:contributor>'+
    '    <cc:Agent>'+
    '     <dc:title>Jakub Steiner, Garrett LeSage</dc:title>'+
    '    </cc:Agent>'+
    '   </dc:contributor>'+
    '   <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/2.0/"/>'+
    '   <dc:title/>'+
    '  </cc:Work>'+
    '  <cc:License rdf:about="http://creativecommons.org/licenses/by-sa/2.0/">'+
    '   <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>'+
    '   <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>'+
    '   <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>'+
    '   <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>'+
    '   <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>'+
    '   <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>'+
    '  </cc:License>'+
    ' </rdf:RDF>'+
    '</metadata>'+
    '<g id="layer2">'+
    ' <path id="path6548" opacity=".6" style="color:#000000" d="m41 40a17.143 8.5714 0 1 1 -34.286 0 17.143 8.5714 0 1 1 34.286 0z" transform="matrix(1.0706 0 0 .525 -.89276 22.5)" display="block" fill="url(#radialGradient3976)"/>'+
    '</g>'+
    '<g id="layer1">'+
    ' <g id="g4006">'+
    '  <path id="path1314" d="m46.857 23.929c0 12.9-10.457 23.357-23.357 23.357s-23.357-10.457-23.357-23.357 10.457-23.357 23.357-23.357 23.357 10.457 23.357 23.357z" transform="matrix(.92049 0 0 .92049 2.3685 .97408)" stroke="#204a87" stroke-width="1.0864" fill="#3465a4"/>'+
    '  <path id="path3560" opacity=".34659" d="m49.902 26.635c0 13.25-10.741 23.991-23.991 23.991s-23.991-10.741-23.991-23.991 10.741-23.991 23.991-23.991 23.991 10.741 23.991 23.991z" fill-opacity="0" transform="matrix(.85448 0 0 .85448 1.86 .24062)" stroke="url(#linearGradient3980)" stroke-width="1.1703"/>'+
    ' </g>'+
    '</g>'+
    '<g id="layer3" fill="#fff">'+
    ' <path id="path3684" opacity=".25" d="m24 3c-11.046 0-20 8.954-20 20 0 1.6861 0.23214 3.3108 0.625 4.875 3.204 4.7933 13.254-0.12014 20.219-5.5938 8.008-6.2931 17.842 8.3593 19.125 1.4375 0.008-0.239 0.031-0.478 0.031-0.719 0-11.046-8.954-20-20-20z"/>'+
    ' <g id="g13674" transform="translate(2.8959 -3.6973)">'+
    '  <path id="text3246" d="m21.104 13.697c-0.86423 0.01942-1.5754 0.30821-2.1336 0.86638-0.55819 0.55821-0.84699 1.2694-0.86638 2.1336 0.01939 0.86424 0.30819 1.5754 0.86638 2.1336 0.55818 0.55821 1.2694 0.847 2.1336 0.86638 0.86422-0.01938 1.5754-0.30817 2.1336-0.86638 0.55818-0.55817 0.84697-1.2694 0.86638-2.1336-0.01941-0.8642-0.3082-1.5754-0.86638-2.1336-0.5582-0.55817-1.2694-0.84696-2.1336-0.86638z"/>'+
    '  <path id="path13678" d="m15.104 21.697v3h2c0.55228 0 1 0.44772 1 1v9c0 0.55228-0.44772 1-1 1h-2v3h12v-3h-2c-0.55228 0-1-0.44772-1-1v-13h-9z"/>'+
    ' </g>'+
    '</g>'+
    '</svg>';
    // Exclamation
    ut.exclamation = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">'+
    '<defs>'+
    '<radialGradient id="a" gradientUnits="userSpaceOnUse" cy="41.4" cx="24.29" gradientTransform="matrix(1 0 0 .3526 0 26.8)" r="21.1">'+
    '<stop offset="0"/>'+
    '<stop stop-opacity="0" offset="1"/>'+
    '</radialGradient>'+
    '</defs>'+
    '<ellipse opacity=".41" rx="21.1" ry="7.44" cy="41.4" cx="24.29" fill="url(#a)"/>'+
    '<circle cy="21.4" cx="24.3" r="21.27" fill="#914900"/>'+
    '<circle r="20" cy="21.31" stroke="#fcaf3e" cx="24.44" fill="#f57900"/>'+
    '<g fill="#fff">'+
    '<path d="m21.46 10.39c-0.13 0-0.23 0.16-0.23 0.37l1.07 14.44c0 0.21 0.11 0.38 0.23 0.38h3.57c0.13 0 0.23-0.17 0.23-0.38l1.07-14.44c0-0.21-0.11-0.37-0.23-0.37h-5.7"/>'+
    '<path d="m43.68 20.48c0 10.83-6.1-4.31-18.67 0.39-12.73 4.72-20.58 10.44-20.58-0.39s8.8-19.62 19.63-19.62 19.62 8.79 19.62 19.62" fill-opacity=".21"/>'+
    '<circle cy="30.2" cx="24.36" r="2.3"/>'+
    '</g>'+
    '</svg>';
    // Critical
    ut.critical = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>'+
    '<!-- Created with Inkscape (http://www.inkscape.org/) -->'+
    '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="48.000000px" height="48.000000px" id="svg6361" sodipodi:version="0.32" inkscape:version="0.46" sodipodi:docbase="/home/jimmac/gfx/ximian/tango-icon-theme/scalable/actions" sodipodi:docname="process-stop.svg" inkscape:output_extension="org.inkscape.output.svg.inkscape">'+
    '  <defs id="defs3">'+
    '    <inkscape:perspective sodipodi:type="inkscape:persp3d" inkscape:vp_x="0 : 24 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_z="48 : 24 : 1" inkscape:persp3d-origin="24 : 16 : 1" id="perspective52" />'+
    '    <linearGradient id="linearGradient2256">'+
    '      <stop style="stop-color:#ff0202;stop-opacity:1;" offset="0" id="stop2258" />'+
    '      <stop style="stop-color:#ff9b9b;stop-opacity:1;" offset="1" id="stop2260" />'+
    '    </linearGradient>'+
    '    <linearGradient inkscape:collect="always" id="linearGradient2248">'+
    '      <stop style="stop-color:#ffffff;stop-opacity:1;" offset="0" id="stop2250" />'+
    '      <stop style="stop-color:#ffffff;stop-opacity:0;" offset="1" id="stop2252" />'+
    '    </linearGradient>'+
    '    <linearGradient id="linearGradient9647">'+
    '      <stop style="stop-color:#ffffff;stop-opacity:1;" offset="0" id="stop9649" />'+
    '      <stop style="stop-color:#dbdbdb;stop-opacity:1;" offset="1" id="stop9651" />'+
    '    </linearGradient>'+
    '    <linearGradient inkscape:collect="always" id="linearGradient21644">'+
    '      <stop style="stop-color:#000000;stop-opacity:1;" offset="0" id="stop21646" />'+
    '      <stop style="stop-color:#000000;stop-opacity:0;" offset="1" id="stop21648" />'+
    '    </linearGradient>'+
    '    <radialGradient inkscape:collect="always" xlink:href="#linearGradient21644" id="radialGradient21650" cx="25.125" cy="36.75" fx="25.125" fy="36.75" r="15.75" gradientTransform="matrix(1.000000,0.000000,0.000000,0.595238,-2.300678e-15,14.87500)" gradientUnits="userSpaceOnUse" />'+
    '    <linearGradient inkscape:collect="always" id="linearGradient7895">'+
    '      <stop style="stop-color:#ffffff;stop-opacity:1;" offset="0" id="stop7897" />'+
    '      <stop style="stop-color:#ffffff;stop-opacity:0;" offset="1" id="stop7899" />'+
    '    </linearGradient>'+
    '    <linearGradient id="linearGradient4981">'+
    '      <stop style="stop-color:#cc0000;stop-opacity:1;" offset="0" id="stop4983" />'+
    '      <stop style="stop-color:#b30000;stop-opacity:1.0000000;" offset="1.0000000" id="stop4985" />'+
    '    </linearGradient>'+
    '    <linearGradient id="linearGradient15762" inkscape:collect="always">'+
    '      <stop id="stop15764" offset="0" style="stop-color:#ffffff;stop-opacity:1;" />'+
    '      <stop id="stop15766" offset="1" style="stop-color:#ffffff;stop-opacity:0;" />'+
    '    </linearGradient>'+
    '    <linearGradient id="linearGradient14236">'+
    '      <stop id="stop14238" offset="0.0000000" style="stop-color:#ed4040;stop-opacity:1.0000000;" />'+
    '      <stop id="stop14240" offset="1.0000000" style="stop-color:#a40000;stop-opacity:1.0000000;" />'+
    '    </linearGradient>'+
    '    <linearGradient id="linearGradient11780">'+
    '      <stop style="stop-color:#ff8b8b;stop-opacity:1.0000000;" offset="0.0000000" id="stop11782" />'+
    '      <stop style="stop-color:#ec1b1b;stop-opacity:1.0000000;" offset="1.0000000" id="stop11784" />'+
    '    </linearGradient>'+
    '    <linearGradient id="linearGradient11014">'+
    '      <stop style="stop-color:#a80000;stop-opacity:1.0000000;" offset="0.0000000" id="stop11016" />'+
    '      <stop style="stop-color:#c60000;stop-opacity:1.0000000;" offset="0.0000000" id="stop13245" />'+
    '      <stop style="stop-color:#e50000;stop-opacity:1.0000000;" offset="1.0000000" id="stop11018" />'+
    '    </linearGradient>'+
    '    <linearGradient  y2="9.6507530" x2="9.8940229" y1="5.3855424" x1="5.7365270" gradientTransform="matrix(-1.000000,0.000000,0.000000,-1.000000,31.72170,31.29079)" gradientUnits="userSpaceOnUse" id="linearGradient15772" xlink:href="#linearGradient15762" inkscape:collect="always" />'+
    '    <linearGradient inkscape:collect="always" xlink:href="#linearGradient11780" id="linearGradient2057" x1="15.737001" y1="12.503600" x2="53.570126" y2="47.374317" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.000000,-2.000000)" />'+
    '    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4981" id="linearGradient4987" x1="23.995985" y1="20.105337" x2="41.047836" y2="37.959785" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.000000,-2.000000)" />'+
    '    <linearGradient inkscape:collect="always" xlink:href="#linearGradient7895" id="linearGradient7901" x1="15.578875" y1="16.285088" x2="32.166405" y2="28.394291" gradientUnits="userSpaceOnUse" />'+
    '    <radialGradient inkscape:collect="always" xlink:href="#linearGradient9647" id="radialGradient2239" cx="24.30225" cy="33.30225" fx="24.30225" fy="33.30225" r="12.30225" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.693981,-5.775714e-16,5.775714e-16,1.693981,-16.86529,-25.11111)" />'+
    '    <linearGradient inkscape:collect="always" xlink:href="#linearGradient4981" id="linearGradient2243" gradientUnits="userSpaceOnUse" x1="23.995985" y1="20.105337" x2="41.047836" y2="37.959785" gradientTransform="matrix(0.988373,0.000000,0.000000,0.988373,0.279002,0.278984)" />'+
    '    <radialGradient inkscape:collect="always" xlink:href="#linearGradient2248" id="radialGradient2254" cx="16.75" cy="10.666344" fx="16.75" fy="10.666344" r="21.25" gradientTransform="matrix(4.154957,-2.979206e-24,3.255657e-24,3.198723,-52.84553,-23.50921)" gradientUnits="userSpaceOnUse" />'+
    '    <linearGradient inkscape:collect="always" xlink:href="#linearGradient2256" id="linearGradient2262" x1="21.75" y1="15.80225" x2="24.30225" y2="35.05225" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.000000,-2.000000)" />'+
    '  </defs>'+
    '  <sodipodi:namedview inkscape:guide-bbox="true" showguides="true" id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="0.15294118" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="4" inkscape:cx="0.007276" inkscape:cy="7.0544576" inkscape:current-layer="layer1" showgrid="false" inkscape:grid-bbox="true" inkscape:document-units="px" inkscape:window-width="786" inkscape:window-height="688" inkscape:window-x="488" inkscape:window-y="160" inkscape:showpageshadow="false" />'+
    '  <metadata  id="metadata4">'+
    '    <rdf:RDF>'+
    '      <cc:Work rdf:about="">'+
    '        <dc:format>image/svg+xml</dc:format>'+
    '        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />'+
    '        <dc:title>Stop</dc:title>'+
    '        <dc:date>2005-10-16</dc:date>'+
    '        <dc:creator>'+
    '          <cc:Agent>'+
    '            <dc:title>Andreas Nilsson</dc:title>'+
    '          </cc:Agent>'+
    '        </dc:creator>'+
    '        <dc:subject>'+
    '          <rdf:Bag>'+
    '            <rdf:li>stop</rdf:li>'+
    '            <rdf:li>halt</rdf:li>'+
    '            <rdf:li>error</rdf:li>'+
    '          </rdf:Bag>'+
    '        </dc:subject>'+
    '        <cc:license rdf:resource="http://creativecommons.org/licenses/publicdomain/" />'+
    '        <dc:contributor>'+
    '          <cc:Agent>'+
    '            <dc:title>Jakub Steiner</dc:title>'+
    '          </cc:Agent>'+
    '        </dc:contributor>'+
    '      </cc:Work>'+
    '      <cc:License rdf:about="http://creativecommons.org/licenses/publicdomain/">'+
    '        <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction" />'+
    '        <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution" />'+
    '        <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />'+
    '      </cc:License>'+
    '    </rdf:RDF>'+
    '  </metadata>'+
    '  <g id="layer1" inkscape:label="Layer 1" inkscape:groupmode="layer">'+
    '    <path sodipodi:type="arc" style="opacity:0.63068183;color:#000000;fill:url(#radialGradient21650);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;marker:none;marker-start:none;marker-mid:none;marker-end:none;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;visibility:visible;display:inline;overflow:visible" id="path21642" sodipodi:cx="25.125" sodipodi:cy="36.75" sodipodi:rx="15.75" sodipodi:ry="9.375" d="M 40.875 36.75 A 15.75 9.375 0 1 1  9.375,36.75 A 15.75 9.375 0 1 1  40.875 36.75 z" transform="matrix(1.173803,0.000000,0.000000,0.600000,-5.265866,19.57500)" />'+
    '    <path  style="fill:url(#linearGradient4987);fill-opacity:1;fill-rule:evenodd;stroke:#860000;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 15.591006,0.4919213 L 32.676311,0.4919213 L 45.497585,13.586385 L 45.497585,31.48003 L 32.848986,43.496929 L 15.418649,43.496929 L 2.4943857,30.658264 L 2.4943857,13.464078 L 15.591006,0.4919213 z " id="path9480" sodipodi:nodetypes="ccccccccc" />'+
    '    <path style="opacity:0.81318683;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:url(#linearGradient2057);stroke-width:1.00000024;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1" d="M 16.020655,1.5003424 L 32.248563,1.5003424 L 44.496456,13.922717 L 44.496456,31.037001 L 32.638472,42.48783 L 15.870253,42.48783 L 3.5090792,30.208718 L 3.5090792,13.84561 L 16.020655,1.5003424 z " id="path9482" sodipodi:nodetypes="ccccccccc" />'+
    '    <path style="opacity:0.28977272;fill:url(#radialGradient2254);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 15.6875,0.75 L 2.75,13.5625 L 2.75,30.5625 L 5.6875,33.46875 C 22.450041,33.526299 22.164665,20.450067 45.25,21.59375 L 45.25,13.6875 L 32.5625,0.75 L 15.6875,0.75 z " id="path2241" sodipodi:nodetypes="cccccccc" />'+
    '    <path style="fill:url(#radialGradient2239);fill-opacity:1;fill-rule:evenodd;stroke:url(#linearGradient2262);stroke-width:0.99999958;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 16.767175,10.5 L 12.5,14.767175 L 20.035075,22.30225 L 12.5,29.837325 L 16.767175,34.104501 L 24.30225,26.569425 L 31.837325,34.104501 L 36.104501,29.837325 L 28.569425,22.30225 L 36.104501,14.767175 L 31.837325,10.5 L 24.30225,18.035075 L 16.767175,10.5 z " id="path2787" />'+
    '  </g>'+
    '</svg>';
    //****************************************************************************
    /*E: MessageBox */
    /*E: Utils */
    /****************************************************************************/
}

{// Utils: - Generic helper methods
    // sw utilities: 
    //****************************************************************************
    // Desc: Search the querystring for a key value
    //****************************************************************************
    sw.getUrlSearchKey = function(psName)
    {
        if(sw.verbose)
            console.log('url: ' + window.location.href + '\nsearch: ' + window.location.search);

        psName = psName.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var sLSearch = (window.location.href).replace(/#/g,'?');
        var regex = new RegExp('[\\?&]' + psName + '=([^&#]*)');
        var sSearch = decodeURIComponent(sLSearch);
        var results = regex.exec(sSearch);

        return results === null ? '' : results[1].replace(/\+/g, ' ');
    }

    //****************************************************************************
    // Desc: Removes unwanted browser %zerowidthspace, unicode chars, whitespaces
    //****************************************************************************
    sw.uniClean = function(psValue)
    {
        var sUniClean = typeof psValue === 'string' ? psValue.trim() : '';

        sUniClean = sUniClean
                    .replace(/&nbsp;/g, ' ')
                    .replace(/&#160;/g, ' ')
                    .replace(/(\r\n|\r|\n)/g, '')
                    .replace(/[\u200B-\u200D\uFEFF]/g, '')
                    .replace(/&ZeroWidthSpace;/g, '');

        return sUniClean;
    }

    //****************************************************************************
    // Desc: ensureScript
    //****************************************************************************
    sw.ensureScript = function( scriptName, scriptRef, functionName, method)
    {
        if(eval("typeof " + functionName + " === 'undefined'"))
        {
            RegisterSod(scriptName, scriptRef);
            EnsureScriptFunc(scriptName, functionName, method);
        }
        else
        {
            method();
        }
    }

    //****************************************************************************
    // Desc: Add any style sheet to the page
    //****************************************************************************
    sw.loadCss = function(psUrl) 
    {
        var oLink    = document.createElement('link');
        oLink.rel    = 'stylesheet';
        oLink.media  = 'all';
        oLink.href   = psUrl;
        document.getElementsByTagName('head')[0].appendChild(oLink);
    }

    //****************************************************************************
    // Desc: Load a script library
    //****************************************************************************
    sw.loadScript = function( psUrl, pbDefer)
    {
        var oScript   = document.createElement('script');
        oScript.type  = 'text/JavaScript';
        oScript.src   = psUrl;
        if(pbDefer) oScript.defer = true;
        document.getElementsByTagName('head')[0].appendChild(oScript);
    }

    //****************************************************************************
    // Desc:    Remove stylesheet or script library
    // Samples: sw.removeTagElm('scriptname.js', 'js'); 
    //          sw.removeTagElm('stylesheet.css', 'css');
    //****************************************************************************
    sw.removeTagElm = function(psFileName, psType)
    {
        var oElm, oAttr, oNodes;

        oElm   = (psType=='js')? 'script' : (psType=='css')? 'link' : 'none';
        oAttr  = (psType=='js')? 'src'    : (psType=='css')? 'href' : 'none';
        oNodes = document.getElementsByTagName(oElm);

        for(var ni=oNodes.length; ni>=0; ni--)
        {// Search in reverse within the matching elements array
            if(oNodes[ni] && oNodes[ni].getAttribute(oAttr) != null 
            && oNodes[ni].getAttribute(oAttr).indexOf(psFileName) !=-1)
            {
                oNodes[ni].parentNode.removeChild(oNodes[ni])
            }
        }
    }

    //****************************************************************************
    // Desc: returns a zero padded figure as string
    //****************************************************************************
    sw.pad = function(pnVal, pnLength)
    {
        var sVal = '' + pnVal;
        if(pnLength && !isNaN(pnLength))
        {
            var nL = parseInt(pnLength);
            while( sVal.length < nL)
            {
                sVal = '0'+sVal;
            }
        }

        return sVal;
    }
    //****************************************************************************
    // Desc: getIEVersion
    //****************************************************************************
    sw.getIEVersion = function() 
    {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') 
        {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        else if (navigator.appName == 'Netscape') 
        {
            var ua = navigator.userAgent;
            var re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    }

    sw.IEVersion = sw.getIEVersion();

    //****************************************************************************
}

{// Paging control: Used wherever a paging control is required
    //****************************************************************************
    // Desc: Debugging info
    //****************************************************************************
    pag.getCounter = function()
    {
        return ('-=['+(ut.pad((pag.debugCntr++),4))+']=- ');
    }

    //****************************************************************************
    // Desc: Ensure DOM events needed for paging
    //****************************************************************************
    pag.initPagingControl = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.initPagingControl');

        $('li.PagingLink').off('click tap');
        $('li.PagingLink').on( 'click tap',
        function(e)
        {
            e.preventDefault();
            pag.pgNumber = parseInt($(this).find('a').text(), 10);
            pag.preReRenderHtmlControl();
        });
        $('li.PagingImageLink').off('mousedown');
        $('li.PagingImageLink').on( 'mousedown',
        function(e)
        {
            e.preventDefault();
            if($(this).find('a.PageLinkNext').length>0)
            {   
                pag.pagingDir = 'up';
            }
            else 
            {
                pag.pagingDir = 'down';
            }
        });
        $('li.PagingImageLink').off('click tap');
        $('li.PagingImageLink').on( 'click tap',
        function(e)
        {
            e.preventDefault();
            if($(this).find('a.PageLinkNext').length>0)
            {   
                pag.pgNumber++;
            }
            else 
            {
                pag.pgNumber--;
            }

            pag.preReRenderHtmlControl();
        });
        $('div.sp').off('click tap');
        $('div.sp').on( 'click tap',
        function(e)
        {
            e.preventDefault();
            if(!$(this).hasClass('sel'))
            {
                $('div.sp').parent().removeClass('sel');
                $('div.sp').removeClass('sel');
                e.preventDefault();
                $(this).addClass('sel');
                $(this).parent().addClass('sel');
                pag.paging = parseInt($(this).text(), 10);
                pag.pgNumber = 1;
                pag.blNumber = 1;
                $('.imgLoading').css({'display':'block'});
                pag.preReRenderHtmlControl(); 
            }    
        });
        $('div.pageDots.down').off('mousedown');
        $('div.pageDots.down').on( 'mousedown', 
        function(e)
        {
            e.preventDefault();
            pag.pagingDir = 'down';
        });
        $('div.pageDots.down').off('click tap');
        $('div.pageDots.down').on( 'click tap', 
        function(e)
        {
            e.preventDefault();
            if($(this).hasClass('down'))
            {
                if(pag.blNumber >= 1)
                {
                    pag.blNumber--;
                    pag.pgNumber  = ((pag.pgNumber - pag.blockSize) >= 1)? (pag.pgNumber - pag.blockSize): 1;
                    pag.pagingDir = 'down';
                }
            }
            pag.preReRenderHtmlControl();
        });
        $('div.pageDots.up').off('mousedown');
        $('div.pageDots.up').on( 'mousedown', 
        function(e)
        {
            e.preventDefault();
            pag.pagingDir = 'up';
        });
        $('div.pageDots.up').off('click tap');
        $('div.pageDots.up').on( 'click tap', 
        function(e)
        {
            e.preventDefault();
            if($(this).hasClass('up'))
            {
                if(pag.blNumber < pag.rBlcks.length)
                {
                    pag.blNumber++;
                    pag.blNumber  = (pag.blNumber>pag.rBlcks.length-1)? pag.rBlcks.length-1 : pag.blNumber;
                    pag.pgNumber  = ((pag.pgNumber + pag.blockSize) <= pag.lastPage)? (pag.pgNumber + pag.blockSize): pag.lastPage;
                    pag.pagingDir = 'up';
                }
            }
            pag.preReRenderHtmlControl();
        });
        $('.inpGo').off('click tap');
        $('.inpGo').on( 'click tap', 
        function(e)
        {
            e.preventDefault();
            $(this).text('').focus();

            return false;
        });
        $('.inpGo').off('keyup');
        $('.inpGo').on( 'keyup',
        function(e)
        {
            e.preventDefault();
            pag.goPage = parseInt($(this).text(), 10);
            if(!isNaN(pag.goPage))
                if(e.keyCode == 13) 
                {
                    $('.btnGo').click();
                }
            else $('.inpGo').off('focus');
        });
        $('.inpGo').off('blur');
        $('.inpGo').on( 'blur', 
        function(e)
        {
            e.preventDefault();
            $(this).text('#');
        });
        $('.btnGo').off('click tap');
        $('.btnGo').on( 'click tap', 
        function(e)
        {
            e.preventDefault();

            pag.goToPage();
        });

        return;
    }

    //****************************************************************************
    // Desc: goToPage
    //****************************************************************************
    pag.goToPage = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.goToPage');

        if(!isNaN(parseInt(pag.goPage, 10)) 
            && pag.goPage > 0 
            && pag.goPage <= pag.lastPage)
        {
            if(pag.goPage != pag.pgNumber)
            {
                if(pag.goPage > pag.pgNumber)
                {
                    pag.pagingDir = 'up';
                }
                else
                {
                    pag.pagingDir = 'down';
                }
                pag.pgNumber = pag.goPage;

                pag.preReRenderHtmlControl();
            }
            pag.goPage = -1;
        }
        else
        {
            $('.inpGo').blur();
        }
    }

    //****************************************************************************
    // Desc: Paging Control - Html set up
    //****************************************************************************
    pag.pagingControl = function()
    {
        if(pag.debug)
            console.log('👉' + pag.getCounter() + 'pag.pagingControl with pgNumber: ' + pag.pgNumber);
    
        var sHtml='', sPromPrev, sPromNext;

        sPromPrev = (pag.pgNumber==1)?'disabled':'enabled'; 
        sPromNext = (pag.pgNumber==pag.lastPage)?'disabled':'enabled';
        if(pag.lastPage>1)
        {
            sHtml +=   `<ul id="Paging" class="ms-srch-Paging">
                            <li class="PagingImageLink">
                                <a class="PageLinkPrev ms-commandLink ms-promlink-button ms-promlink-button-`+sPromPrev+` ms-verticalAlignMiddle"
                                    title="Move to previous page">
                                    <span class="ms-promlink-button-image">
                                        <img src="/_layouts/15/images/spcommon.png?rev=23" class="ms-promlink-button-left" alt="Move to previous page">
                                    </span> 
                                </a> 
                            </li>`;
            if(pag.rBlcks.length <= 1)
            {
                sHtml += pag.pagingSmallMiddleSection();
            }
            else
            {
                sHtml += pag.pagingMiddleSection();
            }
            sHtml += `      <li class="PagingImageLink"> 
                                <a class="PageLinkNext ms-commandLink ms-promlink-button ms-promlink-button-`+sPromNext+` ms-verticalAlignMiddle"
                                    title="Move to next page">
                                    <span class="ms-promlink-button-image"> 
                                        <img src="/_layouts/15/images/spcommon.png?rev=23" class="ms-promlink-button-right" alt="Move to next page"> 
                                    </span> 
                                </a> 
                            </li>`;

            if(pag.lastPage > pag.blockSize+1)
            {
                sHtml += `  <li>
                                <div class="pagingGap">&#160;</div>
                            </li>
                            <li>
                                <div id="inpGo" class="inpGo" contenteditable="true" title="Type page number, \nthen click 'Go'\nor press \'Enter\'"><em style="color:#aaa;">#</em></div>
                            </li>
                            <li>&#160;</li>
                            <li>
                                <div id="btnGo" class="btnGo"><span>Go</span></div>
                            </li>
                        </ul>`;
            }
        }
        else
        {
            sHtml += '<ul id="Paging" class="ms-srch-Paging"/>';
        }

        return sHtml;
    }

    //****************************************************************************
    // Desc: Paging Control - Html set up middle section 
    //****************************************************************************
    pag.pagingSmallMiddleSection = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.pagingSmallMiddleSection');

        var sHtml='';

        for( var ni=1; ni<=pag.lastPage; ni++)
        {
            if(ni!=pag.pgNumber && pag.lastPage > 1)
            {
                sHtml += '<li class="PagingLink"><a class="PageLink" title="Go to page '+ni+'">'+ni+'</a></li>';
            }
            else
            {
                sHtml += '<li class="PagingSelf"><a class="SelfLink">'+ni+'</a></li>';
            }
        }
        
        return sHtml;
    }

    //****************************************************************************
    // Desc: Paging Control - Html set up middle section
    //****************************************************************************
    pag.pagingMiddleSection = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.pagingMiddleSection');

        var sHtml='', rBlock=[], sDisp='';

            rBlock = pag.lookupNextBlock();

        if(pag.pgNumber != 1 && pag.lastPage > 1)
        {
            sHtml += '<li class="PagingLink"><a class="PageLink" title="Go to page 1">1</a></li>';
        }
        else
        {   
            if(pag.lastPage != 1)
            {
                sHtml += '<li class="PagingSelf"><a class="SelfLink">1</a></li>';
            }
        }
        if(pag.blNumber > 1 
        && !(pag.pgNumber == 1 && pag.blNumber == 1))
            sHtml += '<li class="PagingDots"><div class="pageDots down" title="Move down">...</div></li>';

        for(var ni=0; ni<rBlock.length; ni++)
        {
            if(rBlock[ni] != pag.pgNumber)
            {
                sHtml += '<li class="PagingLink"><a class="PageLink" title="Go to page '+rBlock[ni]+'">'+rBlock[ni]+'</a></li>';
            }
            else
            {
                sHtml += '<li class="PagingSelf"><a class="SelfLink">'+rBlock[ni]+'</a></li>';
            }
        }
        if(pag.blNumber != pag.rBlcks.length 
        && pag.pgNumber != pag.lastPage )
        {
            sHtml += '<li class="PagingDots"><div class="pageDots up" title="Move up">...</div></li>';
        }
        if(pag.pgNumber != pag.lastPage)
        {
            sHtml += '<li class="PagingLink"><a class="PageLink" title="Go to page '+pag.lastPage+'">'
                    + pag.lastPage+'</a></li>';
        }
        else
        {
            sHtml += '<li class="PagingSelf"><a class="SelfLink">'+pag.lastPage+'</a></li>'; 
        }

        return sHtml;
    }

    //****************************************************************************
    // Desc: Returns array data depending on paging direction and page number 
    //***************************************************************************
    pag.lookupNextBlock = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.lookupNextBlock');

        if(pag.pagingDir == 'down')
            for(var nb=0; nb<pag.rBlcks.length; nb++)
            {
                for(var ni=0; ni<pag.rBlcks[nb].length; ni++)
                {
                    if(pag.rBlcks[nb][ni] == pag.pgNumber)
                    {
                        if(pag.verbose) 
                            console.log(pag.rBlcks[nb]);

                        pag.blNumber = nb+1;

                        return pag.rBlcks[nb];
                    }
                }
            }
        else if(pag.pagingDir == 'up')
            for(var nb=pag.rBlcks.length-1; nb>=0; nb--)
            {
                for(var ni=0; ni<pag.rBlcks[nb].length; ni++)
                {
                    if(pag.rBlcks[nb][ni] == pag.pgNumber)
                    {
                        if(pag.verbose) 
                            console.log(pag.rBlcks[nb]);

                        pag.blNumber = nb+1;

                        return pag.rBlcks[nb];
                    }
                }
            }
        if(pag.pgNumber == 1)
        { 
            pag.blNumber  = 1;
            pag.pagingDir = 'up';
            return pag.rBlcks[0];
        }
        else if(pag.pgNumber == pag.lastPage) 
        {
            pag.blNumber  = pag.rBlcks.length;
            pag.pagingDir = 'down';
            return pag.rBlcks[pag.rBlcks.length-1];
        }
    }

    //****************************************************************************
    // Desc: Returns the next higher ground (10 / paging length) integer
    //****************************************************************************
    pag.calcLastPage = function(pnNodes)
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.calcLastPage');

        var nodes = pnNodes;

        while(true)
        {
            if(nodes%pag.paging != 0) 
            {
                nodes++;
            }
            else return (nodes/pag.paging);
        }
    }

    //****************************************************************************
    // Desc: calculate total paging blocks
    //****************************************************************************
    pag.calcTotalBlocks = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.calcTotalBlocks');

        var nodes = pag.lastPage;

        while(true)
        {
            if(nodes%pag.blockSize != 0) 
            {
                nodes++;
            }
            else return (nodes/pag.blockSize);
        }
    }

    //****************************************************************************
    // Desc: populateBlocks
    //****************************************************************************
    pag.populateBlocks = function()
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.populateBlocks');

        var nTotalBlocks = pag.calcTotalBlocks(), rBlocks = [], nb = 0;

        pag.rBlcks = new Array();

        for(var ni=2; ni<pag.lastPage; ni++)
        {
            rBlocks.push(ni);
            nb++;
            if((nb == pag.blockSize && ni<pag.lastPage) || ni == pag.lastPage-1)
            {// Case last block not complete in size 
                if(rBlocks.length < pag.blockSize)
                {
                    rBlocks = [];
                    for(var nj=((pag.lastPage-1)-(pag.blockSize-1)); nj<pag.lastPage;nj++)
                    {
                        rBlocks.push(nj);
                    }
                }
                pag.rBlcks.push(rBlocks);
                rBlocks = [];
                nb=0;
            }
        }

        if(pag.verbose) 
            pag.displayBlock(pag.rBlcks.length);
    }

    //****************************************************************************
    // Desc: displayBlock
    //****************************************************************************
    pag.displayBlock = function(pnTotalBlocks)
    {
        if(pag.debug) 
            console.log(pag.getCounter() + 'pag.displayBlock');

        var sBlock = '';

        if(pag.verbose)
        {
            console.log('Block(s): \n');
            console.log('--------------------------------');
            for( var ni=0; ni<pag.rBlcks.length; ni++)
            {
                sBlock = pag.rBlcks[ni];
                console.log('['+ut.pad(ni+1, 2)+'] = ' + sBlock);
            }

            console.log('--------------------------------\n');
        }
    }

    //****************************************************************************
}

{// mCCL:
    //****************************************************************************
    // Desc: Central Country List - Code snippet
    //****************************************************************************
    ccl.init = function(psIdentifier)
    {
        console.log('mCCL plugin -> loaded');

        var dataLoadUrl = sw.blobURI_C, // uploaded location from genccl
                    iVal = '', cVal = '', lVal = '', oVal = null, oLi = null;
    
        $('div#selectCountry').load( dataLoadUrl, function()
        {
            if(ccl.debug) console.log('mCCL data -> loaded with form field id: ['+psIdentifier+']');
            //  Load internal data from the mcountry field
            if(psIdentifier == null)
                iVal = ($('input[id*="_mcountry_"]').val().length == 0)? '': $('input[id*="_mcountry_"]').val();
            else
                iVal = ($('input[id*="'+psIdentifier+'"]').val().length == 0)? '': $('input[id*="'+psIdentifier+'"]').val();
            $('#mCCL input.select-options').val(iVal);
            // - Mouse actions ***************************
            $('#mCCL .select-wrap').off('click');
            $('#mCCL .select-wrap').on( 'click', 
            function(e)
            { 
                if(ccl.debug) console.log('⚡ #mCCL .select-wrap: [click]');

                if(!$('#mCCL span.select').hasClass('active'))
                {
                    cVal = $('#mCCL input.select-options').val();
                    $('#mCCL li[value^="' + cVal + '"]').addClass('selected');
                    $('#mCCL span.select').addClass('active');
                    if(!ccl['country'])
                    {// Correct drop down placement (when not fitting completely on the screen)
                        var selector, dropdown, popCountry = 
                        {
                            name: 'popCountry',
                            enabled: true,
                            phase: 'main',
                            fn({state}) {
                                mf.checkPlacement(state.placement);
                            }
                        };

                        selector  = document.querySelector('#mCCL .select-wrap');
                        dropdown  = document.querySelector('#mCCL div.options');
                        ccl['country'] = new Popper.createPopper(selector, dropdown,
                        {
                            placement: 'bottom-start',
                            modifiers: [popCountry],
                        });
                        
                        if(ccl.debug) 
                            console.log('🌷 -> Created new popper instance for: [ #mCCL ]');

                    }
                    ccl.forceScroll();

                    $('#mCCL div.options').show();
                    oVal = $('#mCCL li[value^="' + cVal + '"]')[0];
                    if(typeof oVal !== 'undefined')
                        oVal.scrollIntoView({block: "center", inline: "nearest"});
                }
                else
                {
                    if(ccl['country'])
                    {
                        ccl['country'].destroy();
                        ccl['country'] = false;
                        if(ccl.debug) 
                            console.log('💣 -> Destroyed popper instance for: [ #mCCL]');
                    }
                    $('#mCCL span.select').removeClass('active');
                    $('#mCCL div.options').hide();
                }
            });
    
            $('#mCCL ol.options').off('mouseup');
            $('#mCCL ol.options').on( 'mouseup', 
            function(e)
            {
                if(ccl.debug) console.log('⚡ #mCCL ol.options: [mouseup]');

                if(e.which == 1) // left button
                {
                    if(ccl['country'])
                    {
                        ccl['country'].destroy();
                        ccl['country'] = false;
                        if(ccl.debug) 
                            console.log('💣 -> Destroyed popper instance for: [ #mCCL]');
                    }
                    $('#mCCL span.select').removeClass('active');
                    $('#mCCL div.options').hide();
                }
                else
                {
                    e.preventDefault();
                }
            });
    
            $('#mCCL ol.options').off('mousemove');
            $('#mCCL ol.options').on( 'mousemove', 
            function()
            {
                if(ccl.debug) console.log('⚡ #mCCL ol.options: [mousemove]');

                $('#mCCL li.on').removeClass('selected');
            });
    
            $('#mCCL li.on').off('mousedown');
            $('#mCCL li.on').on( 'mousedown',
            function()
            {   
                if(ccl.debug) console.log('⚡ #mCCL li.on: [mousedown]');

                cVal = $(this).attr('value');
                ccl.selection = cVal;
                if(ccl.debug) console.log('🔹-> Selected country: ' + ccl.selection);

                $('#mCCL input.select-options').val(cVal);
                $('#mCCL input.select-options').blur();

                ccl.setInternalFieldValue(cVal, psIdentifier);   
            });
    
            $('#mCCL input.select-options').off('click');
            $('#mCCL input.select-options').on( 'click',
            function()
            {
                if(ccl.debug) console.log('⚡ #mCCL input.select-options: [click]');

                $(this).select();
            });

            $('#mCCL div.options').off('mouseup');
            $('#mCCL div.options').on( 'mouseup', 
            function(e)
            {
                if(ccl.debug) console.log('⚡ #mCCL div.options: [mouseup]');

                e.preventDefault();
                e.stopPropagation();

                return false;
            });

            $('#mCCL input.select-options').off('blur');
            $('#mCCL input.select-options').on( 'blur',
            function(e)
            {
                if(ccl.debug) console.log('⚡ #mCCL input.select-options: [blur]');

                if(ccl['country'])
                {
                    ccl['country'].destroy();
                    ccl['country'] = false;
                    if(ccl.debug) 
                        console.log('💣 -> Destroyed popper instance for: [ #mCCL]');
                }
                $('#mCCL div.options').hide();
                $('#mCCL span.select').removeClass('active');
            });
    
            // - Key actions ***************************
            $('#mCCL input.select-options').off('keydown');   
            $('#mCCL input.select-options').on( 'keydown',
            function(e)
            {
                if(ccl.debug) console.log('⚡ #mCCL input.select-options: [keydown]');

                if(ccl.debug) console.log(e.which);
                
                cVal = $(this).val();
                switch(e.which)
                {
                    case 9:  // tab
                        e.preventDefault();
                    case 13: // enter
                        $(this).val($('#mCCL li.on.selected').attr('value'));
                        ccl.selection = $(this).val();
                        if(ccl.debug) console.log('🔹-> Selected country: ' + ccl.selection);
                        ccl.setInternalFieldValue(ccl.selection, psIdentifier);
                        $(this).blur();
                        
                        break;
                    case 38: // arrow up
                        oLi = $('#mCCL li.on.selected')[0];
                        if(ccl.debug) console.log($(oLi).attr('value'));
                        $('#mCCL li.on').removeClass('selected');
                        oLi = $(oLi).prevAll('li').first().addClass('selected');
                        oLi = $('#mCCL li.on.selected')[0];
                        if(ccl.debug) console.log($(oLi).attr('value'));
                        $('#mCCL input.select-options').val($(oLi).attr('value'));

                        break;
                    case 40: // arrow down
                        oLi = $('#mCCL li.on.selected')[0];
                        if(ccl.debug) console.log($(oLi).attr('value'));
                        $('#mCCL li.on').removeClass('selected');
                        oLi = $(oLi).nextAll('li').first().addClass('selected');
                        oLi = $('#mCCL li.on.selected')[0];
                        if(ccl.debug) console.log($(oLi).attr('value'));
                        $('#mCCL input.select-options').val($(oLi).attr('value'));

                        break;
                }
                $('#mCCL li.on').removeClass('selected');
            });
    
            $('#mCCL input.select-options').off('keyup');
            $('#mCCL input.select-options').on( 'keyup',
            function(e)
            {
                if(ccl.debug) console.log('⚡ #mCCL input.select-options: [keyup]');

                if($('#mCCL div.options').css('display') != 'block') 
                    $('#mCCL div.options').css({'display':'block'});
                cVal = $('#mCCL input.select-options').val();
                $('#mCCL input.select-options').val((cVal.length == 1)? cVal.toUpperCase():cVal);
                oVal = $('#mCCL li[value^="' + cVal + '"]')[0];
                if(typeof oVal !== 'undefined')
                {
                    $(oVal).addClass('selected');
                    oVal.scrollIntoView({block: "center", inline: "nearest"});
                }
            });
        });
    }

    //****************************************************************************
    // Desc: Event hook into Popper's placement events
    //****************************************************************************
    ccl.checkPlacement = function(psState)
    {
        if(ccl.pstate != psState)
        {
            ccl.pstate = psState;
            if(ccl.debug) console.log('🌷:: Popper\'s state: ' + psState);
            
            if(psState == 'top-start')
            {
                $('div#mCCL span.select-wrap').css({'flex-wrap': 'wrap'});
            }
            else if(psState == 'bottom-start')
            {
                $('div#mCCL span.select-wrap').css({'flex-wrap': 'wrap-reverse'});
            }
        }
    }

    //****************************************************************************
    // Desc: try to fix a Popper problem
    //****************************************************************************
    ccl.forceScroll = function()
    {
        if(ccl.debug) console.log('💪 -> Force scroll for: mCCL');

        $('div#mCCL div.options')
        .scrollTop($('div#mCCL div.options')
        .scrollTop()+3);
        $('div#mCCL div.options')
        .scrollTop($('div#mCCL div.options')
        .scrollTop()-3);
    }
    
    //****************************************************************************
    // Desc: Set the selected internal 'Micor country' field value
    //****************************************************************************
    ccl.setInternalFieldValue = function(psValue, psIdentifier)
    {
        if(ccl.debug) 
            console.log('👉 Setting internal Micor country value to: [' + psValue + ']');

        ccl.selectable = false;
        if(psIdentifier == null)
        {
            if(ccl.debug) console.log('💥|' + sw.commodity + '|' + sw.inEditMode);
            $('input[id*="_mcountry_"]').val(psValue);
            if( sw.commodity  == 'meat' 
                && sw.inEditMode)
            {
                if($('input[title="M_Denonym"]').length > 0)
                {
                    if(ccl.debug) console.log('💥-> M_Denonym field detected')
                    ccl.setMeatDenonym(psValue);
                }
            }
        }  
        else
            $('input[id*="'+psIdentifier+'"]')[0].value = psValue; 
    }

    //****************************************************************************
    // Desc: Build an array from CCL data blob
    //****************************************************************************
    ccl.loadCCLBlob = function() 
    {
        var sValue, sTitle, sCountryName, sISOCode, sType, sParent, sParentPage = '', bSelectable;

        if(ccl.cnty.length >= 266)
        {
             try{ccl.continue();}catch(ex){return};
        }
        else
        {
            if($('div.cData').length == 0) $('body').append('<div class="cData" style="display: none;"></div>');
            $('div.cData').load(sw.blobURI_C + ' ol.options', 
            function()
            {
                if(ccl.verbose) console.log('CCL data blob -> loaded');

                ccl.rli = $('ol.options li');

                if(ccl.verbose) console.log(ccl.rli.length);
                
                for(var ni=0; ni<ccl.rli.length; ni++)
                {
                    sType        = ccl.type[$('ol.options li').eq(ni).attr('type')];
                    bSelectable  = true;
                    sOptionValue = $('ol.options li').eq(ni).attr('value');
                    sCountryName = sOptionValue.substr(0, sOptionValue.length-5);
                    sISOCode     = sOptionValue.substr(sOptionValue.length - 4).replace(/[()]/g,'');
                    sTitle       = sCountryName + ' (' + sISOCode + ')';
                    if(sCountryName == 'Australia') bSelectable = false;
                    switch(sType)
                    {
                        case 'Parent':
                            sParent     = sTitle;
                            sParentPage = '';
                            break;
                        case 'Single':
                            sParent     = '';
                            sParentPage = '';
                            break;
                        case 'Alias':
                        case 'Dependent province':
                            sParentPage = sParent;
                            break;
                    }

                    ccl.cnty[ccl.cnty.length] = new ccl._CAN(
                        (ni+1),
                        sTitle,
                        sCountryName,
                        sISOCode,
                        sType,
                        sParentPage,
                        bSelectable,
                        ''
                    );
                    
                    if(ccl.verbose)
                        console.log(
                            ut.pad((ni+1), 3) + ' ' + sCountryName
                            + ' (' + sISOCode + ') '
                            + '| type: ' + sType + ' '
                            + '| parent: ' + sParentPage + ' '
                            + '| selectable: ' + (bSelectable?'Yes':'No')
                        );
                }
                console.log('🔹CCL array length: ' + ccl.cnty.length );
                setTimeout(function() {$('div.cData').remove();}, 500);
                try{ccl.continue();}catch(ex){}
            });
        }
    }

    //****************************************************************************
    // Desc: setMeatDenonym
    //****************************************************************************
    ccl.setMeatDenonym = function(psValue)
    {
        if(sw.debug) console.log(
            sw.getCounter() + 'ccl.setMeatDenonym for: ' + psValue);

        if(psValue.length > 0)
        {
            ccl.lookupDenonymValue(psValue);
        }
    }

    //****************************************************************************
    // Desc: lookupDenonymValue
    //****************************************************************************
    ccl.lookupDenonymValue = function(psValue)
    {
        if(sw.debug) console.log(
            sw.getCounter() + 'ccl.lookupDenonymValue for: ' + psValue);

        var rctx, rweb, rccl, camlQuery, sFilesFilterdView, oListItems;

        rctx = new SP.ClientContext('/');
        rweb = rctx.get_web();
        rccl = rweb.get_lists().getByTitle('Central country list');
        camlQuery = new SP.CamlQuery();
        sFilesFilterdView = '<View>'
                        +   '<Query>'
                        +      '<Where>'
                        +          '<Eq><FieldRef Name=\"Title\" /><Value Type=\"Text\">'+psValue+'</Value></Eq>'
                        +      '</Where>'
                        +      '<OrderBy>'
                        +          '<FieldRef Name="Title" Ascending="False"/>'
                        +      '</OrderBy>'
                        +   '</Query>'
                        + '</View>';
        camlQuery.set_viewXml(sFilesFilterdView);
        oListItems = rccl.getItems(camlQuery);
        rctx.load(oListItems, 'Include(denonym)');

        rctx.executeQueryAsync(
            function()
            {
                var eNum, itemCount, cItem, cDenonym, nCnt=0;

                eNum      = oListItems.getEnumerator();
                itemCount = oListItems.get_count();
                console.log('Denonym items counted: ' + itemCount);
                while(eNum.moveNext() && nCnt == 0)
                {  
                    cItem     =  eNum.get_current();
                    cDenonym  = cItem.get_item('denonym');

                    nCnt++;
                }
                if(cDenonym != '')
                {
                    $('input[title="M_Denonym"]').val(cDenonym);
                    if(ccl.debug) console.log(
                        'Meat country denonym: ' + cDenonym);
                }
            },
            function(s, args)
            {
                console.log('⛔️ ** mc.lookupDenonymValue..err: ' + args.get_message());
            }
        );
    }
    
}

{// Micor filter instance events hook up
    //****************************************************************************
    // Desc: Create a Micor filter control instance event handler
    //****************************************************************************
    mf.filterInstanceEventsHookup = function(psIdr)
    {
        if(mf.debug) console.log('⚡-> configuring filter event handling for: ' + mf.mFilters[psIdr] );

        var iVal = '', cVal = '', lVal = '', oVal = null, oLi = null, sTyped = '', sSaved = ''; 

        $('div.mF.'+psIdr).ready(
        function()
        {
            mf[psIdr] = null;
            if(mf.debug) console.log('Filter events model set for: ' + psIdr);

            if($('input#'+psIdr+'_mfilter_').length == 0)
            {
                $('div.micor-filters-container').append(
                    '<input type="hidden" id="'+psIdr+'_mfilter_" value=""/>');
            }

            $('a[name="'+psIdr+'"]').off('click');   
            $('a[name="'+psIdr+'"]').on( 'click',
            function(e)
            {
                e.preventDefault();

                mf.clearFilter(psIdr);
            });
            $('div.mF.'+psIdr+'').css({'display':'block'});
            // Load internal data
            iVal = ($('input[id="'+psIdr+'_mfilter_"]').val().length == 0)
              ? ''
              : $('input[id="'+psIdr+'_mfilter_"]').val();
            $('#inp_'+psIdr).val(iVal);
            // Mouse actions 
            $('.mF.'+psIdr+' .select-arrow').on('focus', 
            function() 
            {
                $(this).blur()
            });

            $('.mF.'+psIdr+' .select-wrap').off('mousedown');
            $('.mF.'+psIdr+' .select-wrap').on( 'mousedown', 
            function(e)
            { 
                if(e.which == 1)
                {
                    e.preventDefault();
                    e.stopPropagation();

                    if(mf.debug) console.log('⚡.mF.'+psIdr+' .select-wrap: [mousedown]' 
                                            +'\n selectable: ' + mf.selectable[psIdr]
                                            +'\n pop-filter: ' + mf[psIdr]);

                    if($('.mF.'+psIdr+' div.'+psIdr+'.nodes').css('display') == 'none')
                    {
                        $('.mF.'+psIdr+' div.'+psIdr+'.nodes').show();
                        if(mf.selectable[psIdr]) 
                        { 
                            if(mf.debug)
                                console.log(' -> setting focus on: ' + $('#inp_'+psIdr).outerHTML());

                            $('#inp_'+psIdr).focus();
                        }
                        else
                        {
                            if(mf[psIdr])
                            {
                                $('div.mF.'+psIdr+' span.select-wrap').css({'border-color':'rgb(8, 127, 161)'});
                                mf[psIdr].destroy();
                                mf[psIdr] = null;
                                if(mf.debug) 
                                    console.log('💥-> Destroyed popper instance for: [' + psIdr + ']');
                            }
                            $('.mF.'+psIdr+' div.'+psIdr+'.nodes').focus();
                            $('#inp_'+psIdr).on('mouseout', 
                            function()
                            {
                                $('.mF.'+psIdr+' div.nodes').hide();
                            });
                        }
                    }
                    else
                    {
                        $('.mF.'+psIdr+' div.'+psIdr+'.nodes').hide();
                    }
                }
                else
                {
                    e.preventDefault();
                    e.stopPropagation();

                    return false;
                }
            });

            if(!mf.debug && !mf.verbose)
            {
                $('.mF.'+psIdr+' .select-wrap').off('contextmenu');
                $('.mF.'+psIdr+' .select-wrap').on( 'contextmenu',
                function(e)
                {
                    e.preventDefault();
                });
            }

            $('#inp_'+psIdr).off('focus');
            $('#inp_'+psIdr).on( 'focus',
            function()
            {
                if(mf.debug) console.log('⚡#inp_'+psIdr+': [focus]');

                if(!mf[psIdr])
                {// Correct drop down placement if possible (when not fitting completely on the screen)
                    var selector, dropdown, popLogger = 
                    {
                        name: 'popLogger',
                        enabled: true,
                        phase: 'main',
                        fn({state}) 
                        {
                            mf.checkPlacement(state.placement);
                        }
                    };

                    selector  = document.querySelector('div.mF.'+psIdr);
                    dropdown  = document.querySelector('div.'+psIdr+'.nodes');
                    mf[psIdr] = new Popper.createPopper(selector, dropdown,
                    {
                        placement: 'bottom-start',
                        modifiers: [popLogger],
                    });
                     
                    if(mf.debug) 
                        console.log('🌷 -> New popper instance, filter: [' + psIdr + ']');

                }
                $('div.mF.'+psIdr+' span.select-wrap').css({'border-color':'transparent'});
                mf.forceScroll(psIdr);
                
                $(this).select();
            })

            $('#inp_'+psIdr).off('blur');
            $('#inp_'+psIdr).on( 'blur',
            function()
            {
                if(mf.debug)
                {
                    console.log('⚡#inp_'+psIdr+': [blur]');
                    console.log('👻 Value: [' + $(this).val() + '] to compare with: [' 
                               + $('input[id="'+psIdr+'_mfilter_"]').val() + ']');
                }

                if($(this).val() != $('input[id="'+psIdr+'_mfilter_"]').val()) $(this).val('');

                $('.mF.'+psIdr+' div.nodes').hide();
                if(mf[psIdr])
                {
                    $('div.mF.'+psIdr+' span.select-wrap').css({'border-color':'rgb(8, 127, 161)'});
                    mf[psIdr].destroy();
                    mf[psIdr] = null;
                    
                    if(mf.debug) 
                        console.log('💥-> Destroyed popper instance for: [' + psIdr + ']');
                }
            });

            $('.mF.'+psIdr+' ol.options').off('mousemove');
            $('.mF.'+psIdr+' ol.options').on( 'mousemove', 
            function()
            {
                if(mf.debug) console.log('⚡.mF.'+psIdr+' li.on: [mousemove]');

                $('.mF.'+psIdr+' li.on').removeClass('selected');
            });

            $('.mF.'+psIdr+' li.on').off('mousedown');
            $('.mF.'+psIdr+' li.on').on( 'mousedown',
            function(e)
            {
                if(mf.debug) console.log('⚡.mF.'+psIdr+' li.on: [mousedown]');

                cVal = $(this).attr('title');
                mf.selection = cVal;
                if(mf.debug) console.log('🔹-> Selected '+psIdr+': ' + mf.selection);

                $('#inp_'+psIdr).val(cVal).trigger('change');
                $('.mF.'+psIdr+' li.on').removeClass('selected').addClass('hidden');
                $(e.target).addClass('display').removeClass('hidden');
                $('.mF.'+psIdr+' div.select').removeClass('active');
                mf.setInternalFieldValue(cVal, psIdr); 
            });
            //Key actions 
            $('#inp_'+psIdr).off('keydown'); 
            $('#inp_'+psIdr).on( 'keydown',
            function(e)
            {
                if(mf.debug) console.log('_' +e.which); 

                if($('.mF.'+psIdr+' div.nodes').css('display') == 'none') 
                    $('.mF.'+psIdr+' div.nodes').show();
                
                cVal = $(this).val();
                switch(e.which)
                {
                    case 9:  // tab
                        e.preventDefault();
                    case 13: // enter
                        cVal = $('.mF.'+psIdr+' li.on.selected').prop('title');
                        oLi  = $('.mF.'+psIdr+' li.on.selected');
                        mf.selection = cVal;
                        if(typeof mf.selection !== 'undefined')
                        {
                            if(mf.debug) console.log('🔹-> Selected '+psIdr+': ' + mf.selection);
            
                            $('#inp_'+psIdr).val(cVal).trigger('change');
                            $('.mF.'+psIdr+' li.on').removeClass('selected').addClass('hidden');
                            $(oLi).addClass('display').removeClass('hidden');
                            $('.mF.'+psIdr+' div.select').removeClass('active');
                            $('.mF.'+psIdr+' div.nodes').hide();
                            mf.setInternalFieldValue(cVal, psIdr);
                        }

                        break;
                    case 38: // arrow up
                        if($('.mF.'+psIdr+' li.on.selected').length == 0)
                        {
                            $('.mF.'+psIdr+' li.on').eq(0).addClass('selected');
                        }
                        oLi = $('.mF.'+psIdr+' li.on.selected')[0];
                        if(mf.verbose) console.log($(oLi).attr('value'));
                        $('.mF.'+psIdr+' li.on').removeClass('selected');
                        $(oLi).prevAll().first().addClass('selected');
                        oLi = $('.mF.'+psIdr+' li.on.selected')[0];
                        $('#inp_'+psIdr).val($(oLi).attr('title'));

                        break;
                    case 40: // arrow down
                    if($('.mF.'+psIdr+' li.on.selected').length == 0)
                        {
                            $('.mF.'+psIdr+' li.on').eq(0).addClass('selected');
                        }
                        oLi = $('.mF.'+psIdr+' li.on.selected')[0];
                        if(mf.verbose) console.log($(oLi).attr('title'));
                        $('.mF.'+psIdr+' li.on').removeClass('selected');
                        $(oLi).nextAll().first().addClass('selected');
                        oLi = $('.mF.'+psIdr+' li.on.selected')[0];
                        $('#inp_'+psIdr).val($(oLi).attr('title'));
                        
                        break;
                }
                $('.mF.'+psIdr+' li.on').removeClass('selected');
            });

            $('#inp_'+psIdr).off('keyup');
            $('#inp_'+psIdr).on( 'keyup',
            function(e)
            {
                if(mf.debug) console.log('^'+e.which);

                cVal = $('#inp_'+psIdr)[0].value; 
                if(mf.debug) console.log('⌨️: ' + cVal);

                if(cVal.length == 1) 
                {
                    if(mf.debug) console.log('cVal length: ' + cVal.length + ' and is ' + cVal);

                    cVal = $('#inp_'+psIdr)[0].value = cVal.toUpperCase();

                    if(mf.debug) console.log(' -> changed to: ' + $('#inp_'+psIdr)[0].value);
                }
                oVal = $('.mF.'+psIdr+' li[title^="' + cVal + '"]')[0];
                if(typeof oVal !== 'undefined')
                {
                    $(oVal).addClass('selected');
                    oVal.scrollIntoView({block: 'center', inline: 'nearest'});
                }
            });
        });
    }

    //****************************************************************************
    // Desc: Event hook into Popper's placement events
    //****************************************************************************
    mf.checkPlacement = function(psState)
    {
        if(mf.pstate != psState)
        {
            mf.pstate = psState.placement;
            if(mf.debug) console.log('🌷:: Popper\'s state: ' + psState);
            
            if(psState == 'top-start')
            {
                $('div.micor-filters').css({'flex-wrap': 'wrap'});
            }
            else if(psState == 'bottom-start')
            {
                $('div.micor-filters').css({'flex-wrap': 'wrap-reverse'});
            }
        }
    }

    //****************************************************************************
    // Desc: try to fix a Popper problem
    //****************************************************************************
    mf.forceScroll = function(psIdr)
    {
        if(mf.debug) console.log('💪 -> Force scroll for: ' + mf.mFilters[psIdr]);

        $('.mF.'+psIdr+' div.'+psIdr+'.nodes')
        .scrollTop($('.mF.'+psIdr+' div.'+psIdr+'.nodes')
        .scrollTop()+3);
        $('.mF.'+psIdr+' div.'+psIdr+'.nodes')
        .scrollTop($('.mF.'+psIdr+' div.'+psIdr+'.nodes')
        .scrollTop()-3);
    }

    //****************************************************************************
    // Desc: find target li element title
    //****************************************************************************
    mf.findTargetLi = function(psValue, psIdr)
    {
        if(mf.debug) console.log('🔹-> find target li element title: ' + psValue);

        var options = $('div.mF ol.'+psIdr+'.options li');

        for(var ni=0; ni<$(options).length; ni++)
        {
            if($(options[ni]).prop('title') == psValue)
            {
                if(mf.debug) console.log('👍 found: ' + $(options[ni]).outerHTML());

                return $(options[ni]);
            }
        }

        return null;
    }

    //****************************************************************************
    // Desc: configureFilter
    //****************************************************************************
    mf.configureFilter = function(psIdr, psvalue)
    {
        if(mf.debug) console.log('🔹-> Configure filter for: '+psIdr+': ' + mf.selection);

        $('#inp_'+psIdr).removeClass().addClass('filter');
        $('#inp_'+psIdr)
            .outerHTML('<input id="inp_'+psIdr+'" class="filter disabled"' 
            +' value="'+psvalue+'" '
            +' placeholder="'+psvalue+'" />');
        $('#inp_'+psIdr).addClass('disabled');
        $('.mF.'+psIdr+' li.on').removeClass('selected').addClass('hidden');
        oLi = mf.findTargetLi(psvalue, psIdr);
        $(oLi).addClass('display').removeClass('hidden');
        $('.mF.'+psIdr+' div.select').removeClass('active');
        if(mf.debug) console.log(' -> updated to: ' + $(oLi).outerHTML());

        return;
    }

    //****************************************************************************
    // Desc: Set the selected internal 'Micor country' field value
    //****************************************************************************
    mf.setInternalFieldValue = function(psValue, psIdr)
    {
        if(mf.debug) console.log(
            '🔹-> Setting internal Micor '+mf.mFilters[psIdr]+
            ' value to: [' + psValue + ']');

        if(psValue && psValue !='')
        {
            $('input[id="'+psIdr+'_mfilter_"]').val(psValue);
            $('#inp_'+psIdr).addClass('disabled');
            $('#inp_'+psIdr).blur();
            $('.mF.'+psIdr+' li.fat').prop('title', 'Selected refinement').text('Selected refinement');
            $('div.clear-filter-'+psIdr).show();
            if(mf.debug)
            {
                console.log('⏳:\n' + $('div.mF.'+psIdr).outerHTML());
            }
            mf.selectRefiner(psIdr, psValue); 
        }
    }

    //****************************************************************************
    // Desc: selectRefiner
    //****************************************************************************
    mf.selectRefiner = function(psRefiner, psValue)
    {
        if(mf.debug) console.log('🔹-> mf.selectRefiner: ' + psRefiner + ' with value [' + psValue + ']');

        mf.selectable[psRefiner] = false;
        if(typeof coml.selectRefiner === 'function')
        {
            coml.selectRefiner(psRefiner, psValue);
        }
        else if(typeof lup.selectRefiner === 'function')
        {
            lup.selectRefiner(psRefiner, psValue);
        }
    }

    //****************************************************************************
    // Desc: clearFilter
    //****************************************************************************
    mf.clearFilter = function(psIdr)
    {
        if(mf.debug) console.log('🔹-> Clear filter for: ' + mf.mFilters[psIdr]);

        $('.mF.'+psIdr+' li.fat').prop('title', 'Available Refinements').text('Available Refinements');
        $('.mF.'+psIdr+' li.on').removeClass().addClass('on');
        $('#inp_'+psIdr)
            .outerHTML('<input id="inp_'+psIdr+'" class="filter disabled"' 
            +' value="" '
            +' placeholder="'+mf.mFilters[psIdr]+'" />');
        $('#inp_'+psIdr).off('mouseout');
        $('input[id="'+psIdr+'_mfilter_"]').val('');
        $('#inp_'+psIdr).removeClass('disabled');
        $('div.clear-filter-'+psIdr).hide();
        mf.clearRefiner(psIdr);
    }

    //****************************************************************************
    // Desc: clearRefiner
    //****************************************************************************
    mf.clearRefiner = function(psRefiner)
    {
        if(mf.debug) console.log('🔹-> mf.clearRefiner: ' + psRefiner );

        mf.selectable[psRefiner] = true;
        if(typeof coml.clearRefiner === 'function')
        {
            coml.clearRefiner(psRefiner);
        }
        else if(typeof lup.clearRefiner === 'function')
        {
            lup.clearRefiner(psRefiner);
        }
    }

    //****************************************************************************
}

/*###########################################################################*/

//****************************************************************************
// Desc: Debugging info
//****************************************************************************
sw.getCounter = function()
{
    return ('🔹sw['+(ut.pad((sw.debugCntr++),4))+']=- ');
}

//****************************************************************************
// Desc: Environment Settings - load xtra css &/ scripts 
//****************************************************************************
sw.environmentSettings = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.environmentSettings');

    // Set visible markup for the current environment other than PROD
    if( location.host.toLowerCase().indexOf('authoring') == -1 )
    { // Non authoring
        if( sw.env == 'DEV' || sw.env == 'TEST' || sw.env == 'UAT')
        { 
            $('div#s4-workspace').prepend(
            '<span style="position: fixed; color: '
                + ((sw.env == 'DEV')?'rgb(0, 255, 80)':'rgb(251, 255, 0)')
                +';font-size:.6rem; font-weight: bold;">' + sw.env + '</span>');
            if(location.hostname.indexOf('micor.') == -1)
            {
                $('div#ms-designer-ribbon').hide();
                $('div#s4-workspace').height(parseInt($('div#s4-workspace').height(), 10) + 65 + 'px');
            }
        }
    }
    else
    { // Authoring
        if( sw.env == 'DEV' || sw.env == 'TEST' || sw.env == 'UAT' || sw.env == 'PROD' ) 
            if( $('html.ms-dialog').length == 0 ) 
                $('<span class="' + sw.env + '">' + sw.env + '</span>').insertBefore('form');
    }

    setTimeout(function() 
    {
        $('h1[id*="commodity"] span').css({'display':'block'});
        $('head').find('link#favicon').attr('alt','');
    }, 10);

    if(sw.pathName.indexOf('plants_new_country_landing_page.') != -1)
    {
        sw.loadCss('/_catalogs/masterpage/micor2020/css/lan/adm/pl_new_country_landing.css');
        sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/adm/pl_new_country_landing.js', true);
    }

    if(sw.pathName.indexOf('la_new_country_landing.') != -1)
    {
        sw.loadCss('/_catalogs/masterpage/micor2020/css/lan/adm/la_new_country_landing.css');
        sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/adm/la_new_country_landing.js', true);
    }

    if(sw.pathName.indexOf('npg-new-country-landing-page.') != -1)
    {
        sw.loadCss('/_catalogs/masterpage/micor2020/css/lan/adm/npg_new_country_landing.css');
        sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/adm/npg_new_country_landing.js', true);
    }

    if((location.hostname).indexOf('2016') != -1)
    {
        if(sw.debug) console.log( sw.env + ' 2016 --> ' + sw.pathName);

        setTimeout( 
        function()
        {
            if(location.hostname.indexOf('authoring') == -1)
            {
                var body = document.body,
                    html = document.documentElement;

                var height = Math.max( body.scrollHeight, body.offsetHeight, 
                            html.clientHeight, html.scrollHeight, html.offsetHeight );
                
                if(sw.debug)
                    console.log(' ** Window height: ' + window.innerHeight + '\n ** Height: ' + height);
            }
        },1000);

        sw.sHigh = _spPageContextInfo.webPermMasks.High;
        sw.sLow  = _spPageContextInfo.webPermMasks.Low;
        // Bypass login test for admins
        if(sw.pathName.indexOf('/pages/default.aspx') != -1)
        {
            if(sw.sHigh == '2147483647' && sw.sLow == '4294967295')
            {
                $('a[href="/meat"]').prop('href', '/meat/pages/meat.aspx');
                $('a[href="/live-animals"]').prop('href', '/live-animals/pages/live_animals.aspx');
            }
        }
        else
        {
            if($('div.breadCrumbs').length>0)
            {
                if(sw.sHigh == '2147483647' && sw.sLow == '4294967295')
                {
                    var sServerUrl = _spPageContextInfo.siteAbsoluteUrl;

                    $('a[href="'+sServerUrl+'/Meat/"]')
                        .prop('href', '/meat/pages/meat.aspx');
                    $('a[href="'+sServerUrl+'/live-animals/"]')
                        .prop('href', '/live-animals/pages/live_animals.aspx');
                }
            }
        }

        if(sw.pathName.indexOf('/plants/pages/') != -1)
        {// Needed to detect if readonly or not access for plants  
            $('body').append('<span id="readonly"></span>');
        }

        // Hooks to retrieve user action for props file edits if the case
        if(sw.pathName.indexOf('wrktaskip.aspx') != -1)
        {
            sw.loadScript( sw.plpJS, true);
        }
        else if(sw.pathName.indexOf('/plants/_layouts/15/approve.aspx') != -1)
        {
            sw.loadScript( sw.plpJS, true);
        }
        else if(sw.pathName.indexOf('/plants/_layouts/15/checkin.aspx') != -1)
        {
            sw.loadScript( sw.plpJS, true);
        }
        else if(sw.pathName.indexOf('/plants/pages/forms/') != -1)
        {
            if(sw.pathName.indexOf('editform') == -1
                && sw.pathName.indexOf('dispform') == -1 )
            {
/*|*\           sw.loadCss(sw.ribbonCSS);*/
                sw.loadScript( sw.ribbonJS, true);
            }
            sw.next();
        }
        else
        {
            sw.inEditMode = ( $('input[name="MSOLayout_InDesignMode"]').val() == '1' ) ? true : false;
            sw.waitForStatusBar = setInterval(function()
            {
                if(typeof document.getElementById('pageStatusBar') !== 'undefined') 
                {
                    clearInterval(sw.waitForStatusBar);
                    sw.waitForStatusBar = null;

                    sw.movePageStatusBar();
                }
            }, 100);
            if(sw.inEditMode) 
            {   
                sw.loadCss(sw.sc_edmdST);
                if(sw.pathName.indexOf('/plants/pages') != -1)
                {
                    $('<br>').insertAfter($('span.fieldLabel.br'));
                }
            }
        }
    }
    else
    {
        sw.next();
    }
}

//****************************************************************************
// Desc: Environment Settings
//****************************************************************************
sw.movePageStatusBar = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.movePageStatusBar');

    sw.pageStatus = $('#DeltaPageStatusBar').html();
    $('#DeltaPageStatusBar').remove();
    if(!sw.inEditMode 
        && $('#DeltaPageStatusBar').length == 0)
    {
        if(sw.pathName.indexOf('forms') == -1
            && sw.pathName.indexOf('lists') == -1 
            && sw.pathName.indexOf('_layouts') == -1)
        {
            setTimeout(function()
            {
                $('body').prepend('<div id="DeltaPageStatusBar">' + sw.pageStatus + '</div>');
                $('#pageStatusBar').css({
                    'display': 'block', 
                    'position': 'fixed', 
                    'top': '7px', 
                    'left': ((sw.env=='DEV')?'184px':'190px'), 
                    'border-radius': '3px', 
                    'z-index': '11'
                });
            }, 100);
            if(sw.debug) 
                console.log(' -> the pageStatusBar is now relocated!');
        }
    }

    sw.next();
}

//****************************************************************************
// Desc: Program flow start position
//****************************************************************************
sw.next = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.next');

    if((location.hostname).indexOf('2016') != -1)
    {
        setTimeout( function()
        {
            if($('#DeltaPageStatusBar').eq(0).text().trim() == 'undefined')
                $('#DeltaPageStatusBar').eq(0).remove();
        }, 250);
    }

    if((location.hostname).indexOf('authoring') == -1)
    {  
        setTimeout( function()
        {
            $('#DeltaPageStatusBar').css({'display':'none'});
        }, 250);
    }
    
    if(sw.bShowSize)
    {
        setTimeout( function()
        {
            $('div.ms-core-brandingText').prepend(
                '<div class="resizeBlocks">'
                + $('body').width()+' x '+$('body').height()
                + '<div>'); 
            $(window).off('resize');
            $(window).on('resize', function()
            {
                $('.resizeBlocks').text($('body').width()+' x '+$('body').height() );
            });
        }, 250);
    }
    
    if(location.href.toLowerCase().indexOf('searchresults.aspx') != -1)
    {
        if($('link[href*="/Plants.css"]').length > 0) $('link[href*="/Plants.css"]')[0].disabled=true;
        $('h1.page-title-field').append(
            '<span class="srchLoading"><img src="/_layouts/images/gears_anv4.gif" style="width: 18px; height: 18px;"/>'
            +'<span class="wonit">... Loading results ...</span></span>');
        setTimeout( function() 
        { 
            $('div.breadCrumbs').find('span').text('Search results');
            document.title = sw.cmds[sw.commodity] + ' | Search results' ; 
        }, 50);
        $('<div class="searchFooter"></div>').insertAfter($('div[data-name="WebPartZone"]'));
    }

    sw.init();
}

//****************************************************************************
// Desc: Actual start method
//****************************************************************************
sw.init = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.init');

    sw.debugCntr = 0;
    sw.commodity = 'micor';

    if($('div#messages').length == 0) $('body').append('<div id="messages"></div>');

    var sHtml = '<h1 id="micor-[#####]">Manual&nbsp;of&nbsp;Importing<br/>Country&nbsp;Requirements</h1>';
    // Modify commodity-name and h1 id
    switch(true)
    {
        case (sw.pathName.indexOf('pagenotfounderror.aspx') != -1):
        {
            sHtml = sHtml.replace('[#####]', 'page-not-found');
            $('div#commodity-name').html(sHtml);

            break;
        }
        case (sw.pathName.indexOf('micorsearchresults.aspx') != -1):
        {
            sHtml = sHtml.replace('[#####]', 'search-results');
            $('div#commodity-name').html(sHtml);
            
            break;
        }
        case (sw.pathName.indexOf('help.aspx') != -1): 
        {
            sHtml = sHtml.replace('[#####]', 'help-page');
            $('div#commodity-name').html(sHtml);
            
            break;
        }

        /* DEPRECATED */
        // case (sw.pathName.indexOf('/apply-for-access.') != -1):
        // {
        //     sHtml = sHtml.replace('[#####]', 'apply-for-access');
        //     $('div#commodity-name').html(sHtml);
        //     /* acs. */
        //     sw.loadCss(  '/_catalogs/masterpage/micor2020/css/acsforms.css');
        //     sw.loadScript('/_catalogs/masterpage/micor2020/js/acsforms.js', true);
            
        //     break;
        // }
    }

    if(sw.pathName.indexOf('/lists/ccl/allitems.') != -1)
    {
        if(!sw.inEditMode)
        {
            sw.loadCss(  '/_catalogs/masterpage/micor2020/css/_utils/_adm//gencclblob.css');
            sw.loadScript('/_catalogs/masterpage/micor2020/js/_utils/_adm//gencclblob.js', true);
        }
    }
    else if(sw.pathName.indexOf('/lists/ccl/newform.') != -1)
    {
        sw.loadScript('/_catalogs/masterpage/micor2020/js/_utils/_adm//gencclnew.js', true);
    }
    else if(sw.pathName.indexOf('/lists/ccl/editform.') != -1)
    {
        sw.loadScript('/_catalogs/masterpage/micor2020/js/_utils/_adm//genccledit.js', true);
    }
    // Add commodity to search placeholder & other functionality as required
    switch(true)
    {   
        // Meat
        case (sw.pathName.indexOf('/meat/pages') != -1):
        {
            sw.commodity = 'meat';
            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search meat ...');
            }, 10);

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/meat.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_meat.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_meat.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_meat.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_meat.js', true);
                }
            }

            /* DEPRECATED */
            /* acs. */
            // if(sw.pathName.indexOf('/apply-for-meat-access.') != -1)
            // {
            //     sw.loadCss(  '/_catalogs/masterpage/micor2020/css/acsforms.css');
            //     sw.loadScript('/_catalogs/masterpage/micor2020/js/acsforms.js', true);
            // }

            if(!sw.inEditMode && $('div.Denonym').length > 0)
            {
                var sDenonym = $('div.Denonym').text().trim();
                var sDenonymPlaceHolderReplacedText = $('a[name="1.6"]').next('h4').eq(0).text();

                sDenonymPlaceHolderReplacedText = sDenonymPlaceHolderReplacedText.replace('[Country denonym]', sDenonym);
                $('a[name="1.6"]').next('h4').eq(0).text(sDenonymPlaceHolderReplacedText);
            }

            if(sw.pathName.indexOf('searchresults') != -1)
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }

            if(sw.pathName.indexOf('/meat/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(3).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }

            console.log('🍖 - Meat: ' + sw.pathName);

            break;
        }
        
        // Dairy
        case (sw.pathName.indexOf('/dairy/pages') != -1):
        {
            sw.commodity = 'dairy';
            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search dairy ...');
            }, 10);

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/dairy.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_dairy.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_dairy.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_dairy.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_dairy.js', true);
                }
            }

            if(sw.pathName.indexOf('searchresults') != -1)
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }

            if(sw.pathName.indexOf('/dairy/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(3).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }

            console.log('🥛 - Dairy: ' + sw.pathName);

            break;
        }
        
        // Plants
        case (sw.pathName.indexOf('/plants/pages') != -1):
        {
            sw.commodity = 'plants';

            /* DEPRECATED */
            // $('span#readonly').load(sw.plPrpsAuth, 
            // function()
            // {
            //     if($(this).text() == 'false')
            //     {
            //         sw.plPropsUrl = sw.plPAuthUrl; // authoring site
            //         if(sw.debug)
            //             console.log('👉-> plants authoring properties set from URL:' + sw.plPropsUrl);
            //     }
            //     else
            //     {
            //         sw.plPropsUrl = sw.plPAnonUrl; // anon site
            //         if(sw.debug)
            //             console.log('👉-> plants anon properties set from URL:' + sw.plPropsUrl);
            //     }
            // });

            // Determine logged-in or anon Plants access
            if(sw.sHigh == '2147483647' && sw.sLow == '4294967295')
            {
                sw.plPropsUrl = sw.plPAuthUrl; // authoring site
                if(sw.debug)
                    console.log('👉-> plants authoring properties set from URL:' + sw.plPropsUrl);
            }
            else
            {
                sw.plPropsUrl = sw.plPAnonUrl; // anon site
                if(sw.debug)
                    console.log('👉-> plants anon properties set from URL:' + sw.plPropsUrl);
            }

            /* DEPRECATED */
            /* acs. */
            // if(sw.pathName.indexOf('/apply-for-plants-access.') != -1)
            // {
            //     sw.loadCss(  '/_catalogs/masterpage/micor2020/css/acsforms.css');
            //     sw.loadScript('/_catalogs/masterpage/micor2020/js/acsforms.js', true);
            // }

            if(location.host.toLowerCase().indexOf('authoring') != -1)
            {
                if(!sw.inEditMode 
                    && sw.pathName.indexOf('/forms') == -1
                    && sw.pathName.indexOf('/latestupdates') == -1
                    && sw.pathName.indexOf('/plants_new_country_landing_page.') == -1)
                    sw.loadScript(sw.plpropsJS, true);
            }
            // Plants country landing pages
            if($('#main[template="Micor2020PlantsCountryLan"]').length > 0)
            {
                var len = $('script[src*="pl_country_lan"]').length;

                if( len == 0 )
                {
                    sw.loadCss(sw.CntyLanST);
                    sw.loadScript( sw.plCntyLan, true);
                }
            }

            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search plants ...');
            }, 10);

            if(sw.pathName.indexOf('searchresults') != -1)            
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }
            else if(sw.pathName.indexOf('/forms/editform') != -1)
            {
                console.log(' Plants edit form');
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(3).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }
            // Ribbon.Documents.Workflow.ViewWorkflows-Large
            else if(sw.pathName.indexOf('/pages/forms') != -1)
            {
                $('a[id^="Ribbon\\.Documents\\.Workflow\\.ViewWorkflows"]').hide();
            }

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/default.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_plants.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_plants.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_plants.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_plants.js', true);
                }
            }
            
            console.log('🌻 - Plants: ' + sw.pathName);

            break;
        }
        
        // Fish
        case (sw.pathName.indexOf('/fish/pages') != -1):
        {
            sw.commodity = 'fish';
            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search fish ...');
            }, 10);

            if(sw.pathName.indexOf('searchresults') != -1)            
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/default.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_fish.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_fish.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_fish.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_fish.js', true);
                }
            }

            if(sw.pathName.indexOf('/fish/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(3).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(  `<div class="ms-formfieldvaluecontainer">
                                        <div class="mcclWrap" dir="none">
                                            <div id="selectCountry"></div>
                                        </div>
                                        <br/>
                                    </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});

            }

            console.log('🐟 - Fish: ' + sw.pathName);

            break;
        }
        
        // Live animals
        case (sw.pathName.indexOf('/live-animals/pages') != -1):
        {
            sw.commodity = 'la';

            // Live animals country landing pages
            if($('#main[template="Micor2020LACountryLan"]').length > 0)
            {
                sw.loadCss('/_catalogs/masterpage/micor2020/css/lan/la_country_lan.css');
                sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/la_country_lan.js', true);
            }

            /* DEPRECATED */
            /* acs. */
            // if(sw.pathName.indexOf('/apply-for-live-animal-access.') != -1)
            // {
            //     sw.loadCss(  '/_catalogs/masterpage/micor2020/css/acsforms.css');
            //     sw.loadScript('/_catalogs/masterpage/micor2020/js/acsforms.js', true);
            // }

            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search live animals ...');
            }, 10);

            if(sw.pathName.indexOf('searchresults') != -1)
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/default.') != -1 || sw.pathName.indexOf('/live_animals.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_la.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_la.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_la.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_la.js', true);
                }
            }

            if(sw.pathName.indexOf('/live-animals/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(14).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }

            console.log('🐫 - Live animals: ' + sw.pathName);

            break;
        }
        
        // Eggs
        case (sw.pathName.indexOf('/eggs/pages') != -1):
        {
            sw.commodity = 'eggs';
            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search eggs ...');
            }, 10);

            if(sw.pathName.indexOf('searchresults') != -1)
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/default.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_eggs.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_eggs.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_eggs.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_eggs.js', true);
                }
            }

            if(sw.pathName.indexOf('/eggs/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(13).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }

            console.log('🥚 - Eggs: ' + sw.pathName);

            break;
        }
        
        // Non prescribed-goods
        case (sw.pathName.indexOf('/npg/pages') != -1):
        {
            sw.commodity = 'npg';
            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search non-prescribed goods ...');
            }, 10);

            if(sw.pathName.indexOf('searchresults') != -1)
            {
                sw.showSearchTerm();
                sw.loadFBLS(sw.commodity);
            }

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/default.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_npg.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_npg.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_npg.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_npg.js', true);
                }
            }

            if($('#main[template="Micor2020NPGCountryLan"]').length > 0)
            {
                var len = $('script[src*="npg_country_lan"]').length;

                if( len == 0 )
                {
                    console.log('❗️-> npg_country_lan css and script!');
                    sw.loadCss(sw.NPGCLanST);
                    sw.loadScript(sw.NPGCntyLan, true);
                }
            }

            if(sw.pathName.indexOf('/npg/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(3).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }

            console.log('💄 - Non-prescribed goods: ' + sw.pathName);

            break;
        }
        
        // Organics
        case (sw.pathName.indexOf('/organics/pages') != -1):
        {
            sw.commodity = 'organics';
            setTimeout(function()
            {
                $('input#commodity-search-query').attr('placeholder', 'Search organics ...');
            }, 10);

            if(sw.pathName.indexOf('searchresults') != -1)
            {
                 sw.showSearchTerm();
                 sw.loadFBLS(sw.commodity);
            }

            if(!sw.inEditMode)
            {
                if(sw.pathName.indexOf('/default.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lan/comlan_organics.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lan/comlan_organics.js', true);
                }
                else if(sw.pathName.indexOf('/latestupdates.') != -1)
                {
                    sw.loadCss(  '/_catalogs/masterpage/micor2020/css/lup/lupage_organics.css');
                    sw.loadScript('/_catalogs/masterpage/micor2020/js/lup/lupage_organics.js', true);
                }
            }

            if(sw.pathName.indexOf('/organics/pages/forms/editform') != -1)
            {
                ccl.loadCCLBlob();
                //$('.ms-formtable').find('tr').eq(3).hide();
                var oField = ut.findFormField('mcountry');
                $(oField).append(`<div class="ms-formfieldvaluecontainer">
                                    <div class="mcclWrap" dir="none">
                                        <div id="selectCountry"></div>
                                    </div>
                                    <br/>
                                </div>`);
                ccl.init('mcountry_');
                $('div.ms-formfieldvaluecontainer').css({'border':'0'});
                $('div.ms-formfieldvaluecontainer').parent().find('span').css({'display':'none'});
                $('div.mcclWrap').css({'margin':'-8px 0 0 -6px'});
            }

            console.log('🍊 - Organics: ' + sw.pathName);

            break;
        }
        
        // Hook up SBx
        case (sw.pathName.indexOf('osssearchresults') != -1):
        case (sw.pathName.indexOf('/pages/micorsearchresults.aspx') != -1):
        {
            sw.loadFBLS(sw.commodity);
            sw.inpage = true;
            sw.showSearchTerm();
            sw.hookUpMicorSearchBox();

            break;
        }
        case (sw.pathName.indexOf('/pages/default.aspx') != -1):
        case (sw.pathName.indexOf('/pages/pagenotfounderror.aspx') != -1):
        case (sw.pathName.indexOf('/apply-for-access.') != -1):
        case (sw.pathName.indexOf('/pages/help.aspx') != -1):

            $('div#commodity-search-form').remove();
            sw.injectMicorSearchBox();

            break;
        case (sw.pathName.indexOf('/news/pages/default.aspx') != -1):
        {
            sw.hookUpMicorSearchBox();

            break;
        }
    }
}

//****************************************************************************
// Desc: Hook for the Micor home page search box
//****************************************************************************
sw.injectMicorSearchBox = function()
{
    if(sw.debug)
    { 
        console.log(sw.getCounter() + 'sw.injectMicorSearchBox');
        console.log(' -> location host: ' + location.hostname + ' pathName: ' + sw.pathName);
    }

    var sHtml = '', searchPageUrl = ''; 

    sHtml+=`<div id="micor-search-form" data-action="/search" class="micor-search-form">
                <label for="micor-search-query" class="visually-hidden">Search keyword</label>
                <input id="micor-search-query" type="text" name="query" placeholder="Search Micor ...">
                <label for="micor-search-button" class="visually-hidden">Search button</label>
                <button id="micor-search-button" type="button" name="search" title="Click to search"><span class="visually-hidden">Click to start searching</span></button>
            </div>`;

    if(sw.pathName.indexOf('/pages/pagenotfounderror.aspx') == -1
        && sw.pathName.indexOf('/pages/help.aspx') == -1
        && sw.pathName.indexOf('/apply-for-access.') == -1)
    {
        $('div.micor-header').append(sHtml);
    }
    else
    {
        $('div#commodity-search-form').hide();
        $('div#commodity-search-form').remove();
        $(sHtml).insertAfter($('div#commodity-name'));
    }
    
    $('button[name="search"]').off('click tap');
    $('button[name="search"]').on( 'click tap',
    function(e)
    {
        e.preventDefault();
        sw.submitSearchQuery();
    });

    $('input#micor-search-query').off('keydown');
    $('input#micor-search-query').on( 'keydown', 
    function(e)
    {
        if(sw.debug) 
            console.log('-Key # pressed: ' + e.which);

        if(e.which == 13) 
        {
            e.preventDefault();
            sw.submitSearchQuery(false);
        }
    });

    setTimeout( function() {$('input[name="query"]').focus();},100);
}

//****************************************************************************
// Desc: Hook for the search box on the micorsearchresults.aspx page
//***************************************************************************
sw.hookUpMicorSearchBox = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.hookUpMicorSearchBox');

    var searchPageUrl = '';

    if(sw.searchTerm != '') 
        $('input#micor-search-query').val(sw.searchTerm);

    $('ul#Paging').show();
    $('button[name="search"]').off('click tap');
    $('button[name="search"]').on( 'click tap',
    function(e)
    {
        e.preventDefault();
        sw.submitSearchQuery();
    });

    $('input#micor-search-query').off('keydown');
    $('input#micor-search-query').on( 'keydown', 
    function(e)
    {
        if(sw.debug)
            console.log('-Key # pressed: ' + e.which);

        if(e.which == 13) 
        {
            e.preventDefault();
            sw.submitSearchQuery(true);
        }
    });

    setTimeout( function() {$('input[name="query"]').focus();},100);
}

//****************************************************************************
// Desc: Download data container
//****************************************************************************
sw.initBlob = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.initBlob');

    if($('div#dBlob').length == 0)
    {
        $('body').append('<div id="dBlob" style="display: none;"></div>');
    }
    if(sw.pathName.indexOf('/default') != -1 )
    {
        $('#dBlob').load(sw.plPropsUrl + ' #dTable',
        function()
        {
            ccl.loadCCLBlob();
        });
    }
    else
    {
        ccl.loadCCLBlob();
    }
}

//****************************************************************************
// Desc: Load the forbidden links data for this commodity
//****************************************************************************
sw.loadFBLS = function(psCommodity)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.loadFBLS');

    var sCommodity = sw.cmds[psCommodity].replace(/ /g, '_');

    $('body').append('<div id="forbidden_links"></div>');
    switch(sCommodity)
    {
        case 'Meat':
        case 'Dairy':
        case 'Plants':
        case 'Fish':
        case 'Live_animals':
        case 'Eggs':
        case 'Non-prescribed_goods':
        case 'Organics':
            $('#forbidden_links').load(sw.blobFbLs,
            function()
            {
                var cmdyUL = $('ul#' + sCommodity);
                $(cmdyUL).find('li').each(function()
                {
                    if(sw.debug)
                        console.log('=-> ' + $(this).text());
                    sw.fbls.push($(this).text());
                });
                console.log(sCommodity + ' -> Forbidden Links length: ' + sw.fbls.length);
            });   
        break;
        case 'Micor':
            $('#forbidden_links').load(sw.blobFbLs,
            function()
            {
                var micorLI = $('#forbidden_links');
                $(micorLI).find('li').each(function()
                {
                    if(sw.debug)
                        console.log('=-> ' + $(this).text());
                    sw.fbls.push($(this).text());
                });
                console.log('Micor -> Forbidden Links length: ' + sw.fbls.length);
            });
        break;
        default: console.log(' ** Loading forbidden links: couldn\'t determine the commodity!');
    }
}

//****************************************************************************
// Desc: Search box hook
//****************************************************************************
sw.submitSearchQuery = function()
{
    console.log(sw.getCounter() + 'sw.submitSearchQuery in '+ sw.commodity);

    sw.searchPageUrl = '';

    switch(sw.commodity)
    {
        case 'micor':
            sw.searchPUrl = '/pages/micorsearchresults.aspx';

            break;
        case 'la':
            sw.searchPUrl = '/live-animals/pages/searchresults.aspx';

            break;
        default:
            sw.searchPUrl = '/' + sw.commodity + '/pages/searchresults.aspx';
    }

    if($('input#micor-search-query').val().length != 0)
    {
        if(sw.debug) console.log(
            '💎-> Test for: ' + $('input#micor-search-query').val() + ' | ' + sw.searchTerm);

        if($('input#micor-search-query').val().toLowerCase() != sw.searchTerm.toLowerCase())
        {
            if(sw.debug) console.log(
                '💨-> fresh search keyword: '+$('input#micor-search-query').val()); 

            sw.searchPageUrl = sw.searchPUrl+'#k=' + $('input#micor-search-query').val();
            if(sw.debug)
                alert(sw.searchPageUrl + '\nPath: ' + sw.pathName);

            if(sw.pathName.indexOf('searchresults.') != -1)
            {
                if(sw.debug)
                    alert('Is this a search results page? : ' + (sw.pathName.indexOf('searchresults.') != -1) );

                window.location.replace(sw.searchPageUrl);
                window.location.href = sw.searchPageUrl;
                setTimeout(
                    function()
                    {
                        window.location.href = sw.searchPageUrl;
                    },100
                );
                window.location.reload();
            }
            else
            {// External [search page] searchboxes
                window.location.replace(sw.searchPageUrl);
            }
        }
        else
        {
            console.log('❌ ** Skipped searchbox submit event with same keyword: ' + sw.keyword);
        }
    }
}

//****************************************************************************
// Desc: showSearchTerm
//****************************************************************************
sw.showSearchTerm = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.showSearchTerm');

    var urlParams = new URLSearchParams(window.location.search), sHtml;

    sw.searchTerm = urlParams.get('k');
    if(!sw.searchTerm)
        sw.searchTerm = sw.getUrlSearchKey('k');
    
    if(sw.searchTerm.indexOf('?') != -1) sw.searchTerm = sw.searchTerm.split('?')[0];
    if(sw.searchTerm) 
    {
        console.log('🔵 Search keyword(s): ' + sw.searchTerm);
        $('#commodity-search-query').val(sw.searchTerm);

        sw.analyse = setTimeout(function() {sw.analyseResults();}, 360);
    }
    else
    {
        msu.stop = true;
        $('.srchLoading').css({ 'display': 'none'});
        console.log('⛔️ ** No Search keywords found!');

        if(sw.pathName.indexOf('micorsearchresults') != -1)
        {
            sHtml = '<div class="noKeyword">Please enter a keyword to search Micor</div>';
        }
        else
        {
            sHtml = '<div class="noKeyword">Please enter a keyword to search '+ sw.cmds[sw.commodity] +'</div>';
        }
        $(sHtml).insertAfter($('div.requirement-content'));
    }
}

//****************************************************************************
// Desc: analyseResults
//****************************************************************************
sw.analyseResults = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.analyseResults');

    if(!ut.pageInDesignMode())
    {
        switch(true)
        {
            case( $('#NoResult').length > 0):
            {
                sw.showNoResult();

                break;
            }
            case( $('#Micor_Result').attr('status') == 'loaded'):
            {
                sw.showAll = true;
                sw.gatherResults();

                break;
            }
            case( $('#Micor_Result').attr('status') != ''):
            {
                if( $('#Micor_Result').length > 0)
                {
                    console.log('🔹status: ' + $('#Micor_Result').attr('status'));
                    if( parseInt($('#Micor_Result').attr('status'), 10) >= sw.resultsLmt)
                    {
                        if(!sw.statusMsg)
                        {
                            msu.stop = true;
                            sw.statusMsg = true;
                            setTimeout(sw.gatherResults, 200);
                            
                            return;
                        }
                    }
                }
                sw.analyse = setTimeout(function() {sw.analyseResults();}, 360);

                break;
            }
            case (true):
            {
                sw.analyse = setTimeout(function() {sw.analyseResults();}, 360);
            }
        }
    }
    else
    {
        if(sw.debug)
            console.log('Page is in Edit status, so abandonning resutls analysis');
            
        msu.stop = true;
        clearTimeout(sw.analyse);
    }
}

//****************************************************************************
// Desc: showNoResult
//****************************************************************************
sw.showNoResult = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.showNoResult');
    
    var bMicor = false, commodity = '';

    clearTimeout(sw.analyse);
    if($('.resultsWrapper').length > 0) $('.resultsWrapper').remove();

    setTimeout( function()
    {
        $('.srchLoading').css({ 'display': 'none'});
        $('.setPaging').hide();
        $('#Micor').remove();
        $('ul#Paging').remove();
        commodity = sw.cmds[sw.commodity]; //ut.capitalise(sw.commodity);
        bMicor = (sw.pathName.indexOf('/pages/micorsearchresults.aspx') != -1)?true:false;
        sw.searchTips(bMicor, commodity);
    }, 50);

    sw.fixBrowserUrl();
}

//****************************************************************************
// Desc: searchTips
//****************************************************************************
sw.searchTips = function(pbMicor, psCommodity)
{
    var sHtml = '';
    if(!pbMicor)
    {
        switch(true)
        {
            case (psCommodity == 'Meat'):
                sHtml = `
                    <div class="ms-textLarge ms-srch-result-noResultsTitle">Unfortunately, nothing matches your search in `+psCommodity+`.</div>
                    <div>Suggestions</div>
                    <ul>
                        <li>Use more general search terms or reduce the number of keywords.</li>    
                        <li>Read these <a title="Click for Micor search tips" href="/pages/help.aspx#using-the-search-bar">tips for searching.</a></li> 
                        <li>You may need to <a href="/meat/pages/apply-for-meat-access.aspx">apply for a login</a> to access more meat results.</li>
                        <li>Try again in our <a id="micorSearchResults" title="Click for Micor wide search" href="/pages/micorsearchresults.aspx#k=`+sw.searchTerm+`">Micor wide search.</a></li>     
                    </ul>
                    <br/>
                    <br/>`;
            break;
            case (psCommodity == 'Non-prescribed goods'):
                sHtml = `
                    <div class="ms-textLarge ms-srch-result-noResultsTitle">Unfortunately, nothing matches your search in `+psCommodity+`.</div>
                    <div>Suggestions</div>
                    <ul>
                        <li>Use more general search terms or reduce the number of keywords.</li>    
                        <li>Read these <a title="Click for Micor search tips" href="/pages/help.aspx#using-the-search-bar">tips for searching.</a></li> 
                        <li>You may need to <a href="/meat/pages/apply-for-meat-access.aspx">apply for a login</a> to access more meat results.</li>
                        <li>Try again in our <a id="micorSearchResults" title="Click for Micor wide search" href="/pages/micorsearchresults.aspx#k=`+sw.searchTerm+`">Micor wide search.</a></li>     
                    </ul>
                    <br/>
                    <br/>`;
            break;
            case (psCommodity == 'Live animals'):
                sHtml = `
                    <div class="ms-textLarge ms-srch-result-noResultsTitle">Unfortunately, nothing matches your search in `+psCommodity+`.</div>
                    <div>Suggestions</div>
                    <ul>
                        <li>Use more general search terms or reduce the number of keywords.</li>    
                        <li>Read these <a title="Click for Micor search tips" href="/pages/help.aspx#using-the-search-bar">tips for searching.</a></li> 
                        <li>You may need to <a href="/live-animals/pages/apply-for-live-animal-access.aspx">apply for a login</a> to access more live animals results.</li>
                        <li>Try again in our <a id="micorSearchResults" title="Click for Micor wide search" href="/pages/micorsearchresults.aspx#k=`+sw.searchTerm+`">Micor wide search.</a></li>     
                    </ul>
                    <br/>
                    <br/>`;
            break;
            case ('Eggs_Dairy_Fish_Organics'.indexOf(psCommodity) != -1):
                sHtml = `
                    <div class="ms-textLarge ms-srch-result-noResultsTitle">Unfortunately, nothing matches your search in `+psCommodity+`.</div>
                    <div>Suggestions</div>
                    <ul>
                        <li>Use more general search terms or reduce the number of keywords.</li>    
                        <li>Read these <a title="Click for Micor search tips" href="/pages/help.aspx#using-the-search-bar">tips for searching.</a></li> 
                        <li>Try again in our <a id="micorSearchResults" title="Click for Micor wide search" href="/pages/micorsearchresults.aspx#k=`+sw.searchTerm+`">Micor wide search.</a></li>     
                    </ul>
                    <br/>
                    <br/>`;
            break;
            case (psCommodity == 'Plants'):
                sHtml = `
                    <div class="ms-textLarge ms-srch-result-noResultsTitle">Unfortunately, nothing matches your search in `+psCommodity+`.</div>
                    <div>Suggestions</div>
                    <ul>
                        <li>Use more general search terms or reduce the number of keywords.</li>    
                        <li>Read these <a title="Click for Micor search tips" href="/pages/help.aspx#using-the-search-bar">tips for searching.</a></li> 
                        <li>Try again in our <a id="micorSearchResults" title="Click for Micor wide search" href="/pages/micorsearchresults.aspx#k=`+sw.searchTerm+`">Micor wide search.</a></li>     
                    </ul>
                    <br/>
                    <br/>`;
            break;
        }

    }
    else
    {
        sHtml = `
            <div class="ms-textLarge ms-srch-result-noResultsTitle">Unfortunately, nothing matches your search in `+psCommodity+`.</div>
            <div>Suggestions</div>
            <ul>
                <li>Use more general search terms or reduce the number of keywords.</li>    
                <li>Read these <a title="Click for Micor search tips" href="/pages/help.aspx#using-the-search-bar">tips for searching.</a></li>  
                <li>You may need to <a href="/Pages/Apply-for-access.aspx">apply for a login</a> to access more meat, plants and live animals results.</li>       
            </ul>
            <br/>
            <br/>`;
    }

    if(!sw.bNoResult)
    {
        $('div#NoResult').html(sHtml);
    }
    else
    {
        $('div#Micor_Result').remove();
        $('<div id="NoResult" class="ms-srch-result-noResults">' + sHtml + '</div>').insertAfter($('ul.cbs-List'));
    }
}

//****************************************************************************
// Desc: Start position case there are search results loaded
//****************************************************************************
sw.gatherResults = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.gatherResults');

    if(sw.analyse) 
        clearTimeout(sw.analyse);

    sw.res = [];
    sw.scanResults('gatherResults');
    if(sw.res.length == 0) 
    {
        sw.bNoResult = true;
        sw.showNoResult();
    }
    else
    {
        sw.res = sw.sortResults(sw.res);
        sw.res = sw.addCountryToTitleForLAE_NPG_Plants(sw.res);
        pag.lastPage = pag.calcLastPage(sw.res.length);
        if(sw.verbose) 
            console.log('-> Gathered results: \n' + sw.displayArray(sw.res));

        pag.preReRenderHtmlControl();
    }
}

//****************************************************************************
// Desc: Continue method after loading central country list data 
//****************************************************************************
ccl.continue = function()
{
    sw.res = sw.sortResults(sw.res);
    sw.res = sw.addCountryToTitleForLAE_NPG_Plants(sw.res);
    pag.lastPage = pag.calcLastPage(sw.res.length);
    if(sw.verbose) 
        console.log('-> Gathered results: \n' + sw.displayArray(sw.res));

    pag.preReRenderHtmlControl();   
}

//****************************************************************************
// Desc: addCountryToTitleForLAE_NPG_Plants
//****************************************************************************
sw.addCountryToTitleForLAE_NPG_Plants = function(poArray)
{
    var rRay = poArray;

    for(var ni=0; ni<rRay.length; ni++)
    {
        if(rRay[ni].CMDY == 'Plants')
        {
            rRay[ni].CNTY = sw.extractCountryPlants(rRay[ni].TTLE, rRay[ni].PURL);
            if(rRay[ni].TTLE.toLowerCase().indexOf(rRay[ni].CNTY.toLowerCase()) == -1)
            rRay[ni].TTLE+= (rRay[ni].CNTY != '')? ' - ' + rRay[ni].CNTY: '';
        }
        else if(rRay[ni].CMDY == 'Live animals')
        {
            rRay[ni].CNTY = sw.extractCountryLA(rRay[ni].TTLE, rRay[ni].PURL);
            if(rRay[ni].TTLE.toLowerCase().indexOf(rRay[ni].CNTY.toLowerCase()) == -1)
            rRay[ni].TTLE+= (rRay[ni].CNTY != '')? ' - ' + rRay[ni].CNTY: '';
        }
        else if(rRay[ni].CMDY == 'Non-prescribed goods')
        {// different because NPG folders don't include ISO codes
            rRay[ni].CNTY = sw.extractCountryNPG(rRay[ni].TTLE, rRay[ni].PURL);
            if(rRay[ni].TTLE.toLowerCase().indexOf(rRay[ni].CNTY.toLowerCase()) == -1)
            rRay[ni].TTLE+= (rRay[ni].CNTY != '')? ' - ' + rRay[ni].CNTY: '';
        }
    }

    return rRay;
}

//****************************************************************************
// Desc: prepUrl
//****************************************************************************
sw.prepUrl = function(psUrl)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.prepUrl: ' + psUrl);

    return (psUrl
                .replace(location.protocol, '')
                .replace(/\/\//g, '')
                .replace(location.host, '')
                .replace(/ttp:/g,'') // anon bug
                /*.replace('/','') //anon bug*/
                .toLowerCase()
                .substr(1));
}

//****************************************************************************
// Desc: .replace(/[^\w\s]/gi, '')
//****************************************************************************
sw.scanResults = function(psCaller)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.scanResults: ' + psCaller);

    $('div[id*="_itemBody"]').each(function()
    {
        var nID, nRank, srTitle, srUrl, sUrl, srSummy, srBottom, sCmdy = '', sCommdy='', srCnty='';

        nID     = $(this).prop('id').split(/_/g)[0];
        srUrl   = $(this).find('a.ms-srch-item-link').prop('href');
        sUrl    = sw.prepUrl(srUrl);
        srTitle = $(this).find('a.ms-srch-item-link').prop('title');

        if(sUrl.substr(0,1) == '/') sCmdy = sUrl.split(/\//g)[1];
        else sCmdy = sUrl.split(/\//g)[0];

        if(sw.debug) console.log('🟢Cmdy from path: ' + sCmdy);

        sCommdy = sw.cmds[sCmdy]; 
        if(sw.debug) console.log(' - sw.scanResults commodity: ' + sUrl +' -> '+ sCommdy); 
        srCnty = '';
        srSummy = $(this).find('div.ms-srch-item-summary').html();
        if( typeof srSummy !== undefined)
        {
            if(srSummy != null) 
                srSummy = sw.uniClean(srSummy);
            else 
                srSummy = '...<br/>';
        }
        else
            srSummy = '...<br/>';
        
        nRank   = sw.scoreRank(srTitle, srSummy, srUrl);
        srBottom= $(this).find('div.ms-srch-item-path').text().trim();

        sw.res[sw.res.length] = new sw._Res( nID, nRank, srTitle, srUrl, sCommdy, srCnty, srSummy, srBottom);
    });

    console.log('-Results array length: '+sw.res.length);
    sw.res = sw.removeDuplicates(sw.res);
    console.log('-Results array length after removing duplicates: '+sw.res.length);
    sw.res = sw.removeForbiddenLinks(sw.res);
    console.log('-Results array length after removing forbidden links: '+sw.res.length);   

    return;
}

//****************************************************************************
// Desc: scoreRank
//****************************************************************************
sw.scoreRank = function(psTitle, psSummy, psUrl)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.scoreRank :: title: ' + psTitle + ' keyword: ' + sw.searchTerm);

    var nRank = 70, sTitle, sKeyword, rSummy = [];

    sTitle   = psTitle.trim().toLowerCase()
    sKeyword = sw.searchTerm.toLowerCase().replace(/"/g,'');

    //remove ISO (XX) code from country searches
    if(sKeyword.indexOf(')') != -1)
    {
        sKeyword = sKeyword.substr(0, sKeyword.length-5);
        // console.log( '🔹 keyword: ' + sKeyword.replace(/[ ]/g, '*'));
    }

    if(sTitle.indexOf(')') != -1)
    {
        sTitle = sTitle.substr(0, sTitle.length-5);
        // console.log( '🔹 title: ' + sTitle.replace(/[ ]/g, '*'));
    }

    // Type of document
    if( psUrl.toLowerCase().indexOf('.pdf' ) != -1 
    ||  psUrl.toLowerCase().indexOf('.doc' ) != -1 
    ||  psUrl.toLowerCase().indexOf('.dotx') != -1 
    ||  psUrl.toLowerCase().indexOf('.docx') != -1 
    ||  psUrl.toLowerCase().indexOf('.ppt' ) != -1
    ||  psUrl.toLowerCase().indexOf('.pptx') != -1
    ||  psUrl.toLowerCase().indexOf('.xls' ) != -1
    ||  psUrl.toLowerCase().indexOf('.xltx') != -1
    ||  psUrl.toLowerCase().indexOf('.csv' ) != -1 )
    {
        nRank = 50;
    }

    // Title is exact match
    if(sTitle == sKeyword)
    {
        nRank = 90;
    }

    // Title has a partial match
    if(sTitle.indexOf(sKeyword) != -1)
    {
        nRank = (nRank > 80)? nRank:80;
    }

    if(sw.debug)
        console.log('💥 - sSummy: [' + psSummy + ']');
    
    // Number of hits on the body
    if(psSummy.indexOf('<strong') != -1)
    {
        rSummy = psSummy.split(/<strong class="ms-srch-item-highlightedText">/gi);
        if(sw.debug)
            console.log('💥- sSummy rank: ['+(nRank+rSummy.length)+']-['+psSummy+']');

        return (nRank+rSummy.length-1);
    }

    return (nRank);
}

//****************************************************************************
// Desc: Returns a sorted array on RANK
//****************************************************************************
sw.sortResults = function(poArray)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.sortResults');
    
    return (poArray.sort(
        function(x,y)
        {// Ascending = true | descending = false
            var bAsc = false;
            var a = x.RANK,
                b = y.RANK;
            if (a > b) {return (bAsc)?1:-1;}
            if (a < b) {return (bAsc)?-1:1;}
            return 0;
        }
    ));
}

//****************************************************************************
// Desc: Keep the page number within bounds
//****************************************************************************
sw.preReRenderHtmlControl = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'pag.preReRenderHtmlControl');

    pag.pgNumber = ((pag.pgNumber>pag.lastPage)? pag.lastPage : (pag.pgNumber<1)? 1 : pag.pgNumber);
    pag.blNumber = parseInt(((pag.pgNumber-1)/(pag.blockSize)), 10)+1;

    if(sw.verbose) console.log('Page number: ' + pag.pgNumber + ', Block number: ' + pag.blNumber);

    sw.reRenderHtmlControl();
}

//****************************************************************************
// Desc: renderHtmlControl preparation
//****************************************************************************
sw.reRenderHtmlControl = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'pag.reRenderHtmlControl');

    var sHtml='', nextURL, nextTitle, nextState;

    if($('div#Micor').length > 0) $('div#Micor').remove();
    if($('ul#Paging').length > 0) $('ul#Paging').remove();

    sHtml += sw.showResultsSortedOnRank();
    $(sHtml).insertBefore($('div[data-name="WebPartZone"]'));
    sHtml = '';
    if(sw.res.length > pag.paging)
    {
        sHtml += pag.pagingControl();
    }
    else
    {
        sHtml += `<ul id="Paging" class="ms-srch-Paging"><li>&nbsp;</li></ul>`;
    }

    $('.searchFooter').append(sHtml);
    $('.srchLoading').css({ 'display': 'none'});
    pag.initPagingControl();

    if( !sw.getAll ) 
    {
        sw.showResultsCount();
    }
    else
    {
        sw.showAll = true;
        sw.showResultsCount();
    }

    sw.fixBrowserUrl();
}

//****************************************************************************
// Desc: fixBrowserUrl
//****************************************************************************
sw.fixBrowserUrl = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'pag.fixBrowserUrl');

    msu.stop = true;
    nextURL   = window.location.href.split(/.aspx/)[0] + '.aspx#k=' + sw.searchTerm;
    nextTitle = 'Search results';
    nextState = { url_info: 'removed the s key from the url hashtags' };
    // This will create a new entry in the browser's history, without reloading
    window.history.pushState(nextState, nextTitle, nextURL);

    return;
}

//****************************************************************************
// Desc: show Results Count
//****************************************************************************
sw.showResultsCount = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.showResultsCount: ' + sw.showAll);

    var sHtml='', strHtml, searchPageUrl='', nResults = sw.res.length, sTitle;

    $('.resultsWrapperTop').remove();
    $('.resultsWrapperBottom').remove();
    if(!sw.showAll 
        && sw.checkIfDownloadingNeeded())
    {
        sTitle = ' estimated '+sw.getResultsCount()+' results';
        sHtml += '\n<div class="showing">Showing '
               + sw.startIndex +' - '
               + sw.endIndex +' of '+nResults+' results for <b>'+sw.searchTerm+'</b>'+((sw.showAll)? '':',')+'</div>';
        sHtml += (sw.showAll)? ''
                             :'\n<div class="divAll"><div class="spanAll" title="Load remaining results">load all '+sTitle+'&#160;</div></div>';
        sHtml += '\n</div>';

        strHtml = '<div class="resultsWrapperTop">' + sHtml;
        $(strHtml).insertBefore($('.requirement-content'));
        strHtml = '<div class="resultsWrapperBottom">' + sHtml;
        $(strHtml).insertBefore($('#Paging')); 
        //$('#Micor').append(strHtml); 
        msu.stop = true;

        $('.divAll').off('click tap');
        $('.divAll').on('click tap', 
            function()
            {
                msu.stop = false;
                searchPageUrl = window.location.href.split(/.aspx/)[0] + '.aspx#k=' + sw.searchTerm;
                searchPageUrl = searchPageUrl + '#s=' + ($('div[id*="_itemBody"]').length + 1);
                sw.getAll = true;
                $('.srchLoading').css({'display':''});
                setTimeout( sw.analyseResults, 100);
                window.location.href = searchPageUrl;
            }
        );
    }
    else // sw.shwowAll
    {
        if( nResults != 1)
        { 
            sHtml += '<div class="showing">Showing '
                   + sw.startIndex +' - '
                   + sw.endIndex +' of '+nResults+' results for <b>'+sw.searchTerm+'</b></div>';
        }
        else
        { 
            sHtml += '<div class="showing">Showing '
                   + sw.startIndex +' - '
                   + sw.endIndex +' of '+nResults+' result for <b>'+sw.searchTerm+'</b></div>';
        }
        sHtml += '</div>';

        strHtml = '<div class="resultsWrapperTop">' + sHtml;
        $(strHtml).insertBefore($('.requirement-content'));
        strHtml = '<div class="resultsWrapperBottom">' + sHtml; 
        $(strHtml).insertBefore($('#Paging'));
    }

    return;
}

//****************************************************************************
// Desc: checkIfDownloadingNeeded
//****************************************************************************
sw.checkIfDownloadingNeeded = function()
{
    var nAllRes = sw.getResultsCount();

    console.log('💥-> \nEstimated: ' + nAllRes + '\nDownloaded: ' + sw.res.length);
    return ( nAllRes - sw.res.length >= 50)? true:false;
}

//****************************************************************************
// Desc: getResultsCount
//****************************************************************************
sw.getResultsCount = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.getResultsCount');

    try { return (parseInt( $('div#ResultCount').html().replace(/\D/g,''), 10) == 'NaN')? '0'
            : parseInt( $('div#ResultCount').html().replace(/\D/g,''), 10) }
    catch(ex) { return (parseInt( $('div#ResultCount').html(), 10) == 'NaN')? '0'
                    : parseInt( $('div#ResultCount').html(), 10) }
}

//****************************************************************************
// Desc: TODO::: add all icons here
//****************************************************************************
sw.checkForIcon = function(psUrl)
{
    var sUrl = psUrl.toLowerCase();

    switch(true)
    {
        case(sUrl.indexOf('.pdf') != -1): return('<img class="searchIcon" src="/_catalogs/masterpage/micor2020/images/pdf-icon.png" />');

        default: return '';
    }
}

//****************************************************************************
// Desc: ms-srch-item-body showResultsSortedOnRank
//****************************************************************************
sw.showResultsSortedOnRank = function()
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.showResultsSortedOnRank commodity: '+sw.commodity);

    $('div#Result').hide();
    var ni, sHtml = '', nMax, nCnt = (pag.pgNumber-1)*pag.paging, nPagingLoop=0;
    sw.startIndex = nCnt + 1;
    if($('div.setPaging').length == 0)
    {
        sHtml =`<div class="setPaging">
                    <span><img class="imgLoading" src="/_layouts/images/gears_anv4.gif" style="display:none;" /></span>
                    <span title="Set paging to" class="sel"><div class="sp sel">10</div></span>
                    <span title="Set paging to"><div class="sp">20</div></span>
                    <span title="Set paging to"><div class="sp">50</div></span>
                </div>`;
        $(sHtml).insertAfter($('h1.page-title-field'));
        sHtml = '';
    }

    pag.lastPage = pag.calcLastPage(sw.res.length);
    pag.populateBlocks();
    nPagingLoop = ((pag.pgNumber*pag.paging) < sw.res.length)?(pag.pgNumber*pag.paging):sw.res.length;
    sw.endIndex = nPagingLoop;
    if( sw.verbose || global.verbose) 
        console.log(sw.res.length + ' total items, ' + pag.lastPage + ' pages, ' 
                + pag.rBlcks.length + ' blocks, ' + pag.blockSize + ' pages/block, ' 
                + pag.paging + ' items/page, page: ' + pag.pgNumber + ', block: '
                + 'Pagingloop: ' + nPagingLoop + ', nCnt: ' + nCnt + ', ' 
                + pag.blNumber + ' page movement: ' + pag.pagingDir + '.');
    
    sHtml += '<div class="ms-srch-result" id="Micor">';
    for(ni=nCnt; ni<nPagingLoop; ni++)
    {   // Record
        sHtml += '<span class="resultSpan" keyword="'+sw.searchTerm+'">';
        // Title
        sHtml  += '<div class="ms-srch-item-title">'
                + '<div class="ms-srch-item-body">'
                + ' <div class="titleWrap">'
                + '  <div class="ms-srch-ellipsis">'
                + '   <a class="ms-srch-item-link" title="'+sw.res[ni].TTLE+' | '+sw.res[ni].RANK+' | '+ut.pad(ni+1, 4)+' | '+sw.res[ni].PNID+'"'
                + ' href="'+sw.res[ni].PURL+'">'+sw.checkForIcon(sw.res[ni].PURL)+sw.res[ni].TTLE+'</a>'
                + '  </div>' // end: ms-srch-ellipsis
                + ' </div>' // end: titleWrap
                + '</div>';// end: ms-srch-item-body
        if(sw.commodity == 'micor')
        {
            sHtml  += '<div class="commodityWrap">'
                    + ' <div class="commodity-prefix">&nbsp;&nbsp;</div>'
                    + ' <div class="commodity">' + sw.getCommodityHtml(sw.res[ni].PURL) + '</div>'
                    + '</div>';// end: commodityWrap
        }

        sHtml += '</div>';// end: ms-srch-item-title
        // Summary
        sHtml += '<div class="ms-srch-item-summary">'+sw.res[ni].SUMY+'</div>';
        // Bottom
        sHtml += '<div class="ms-srch-item-path" '
               + 'title="'+sw.res[ni].PURL+'">'+sw.res[ni].BTTM
               + '</div>';
        sHtml += '</span>';// end: resultSpan
    }
    sHtml += '</div>';// end: ms-srch-result

    setTimeout(function()
    {
        $('.imgLoading').css({'display':'none'});
    }, 500);

    return sHtml;
}

//****************************************************************************
// Desc: getCommodityHtml
//****************************************************************************
sw.getCommodityHtml = function(psUrl)
{
    var sTitle;

    switch(true)
    {
        case (psUrl.toLowerCase().indexOf('/meat/') != -1):
            sTitle = 'Click to be redirected to the Meat commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'meat\'); return false;" title="'+sTitle+'">Meat</div>';
        case (psUrl.toLowerCase().indexOf('/dairy/') != -1):
            sTitle = 'Click to be redirected to the Dairy commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'dairy\'); return false;" title="'+sTitle+'">Dairy</div>';
        case (psUrl.toLowerCase().indexOf('/plants/') != -1):
            sTitle = 'Click to be redirected to the Plants commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'plants\'); return false;" title="'+sTitle+'">Plants</div>';
        case (psUrl.toLowerCase().indexOf('/fish/') != -1):
            sTitle = 'Click to be redirected to the Fish commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'fish\'); return false;" title="'+sTitle+'">Fish</div>';
        case (psUrl.toLowerCase().indexOf('/live-animals/') != -1):
            sTitle = 'Click to be redirected to the Live&nbsp;animals commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'live-animals\'); return false;" title="'+sTitle+'">Live&nbsp;animals</div>';
        case (psUrl.toLowerCase().indexOf('/eggs/') != -1):
            sTitle = 'Click to be redirected to the Eggs commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'eggs\'); return false;" title="'+sTitle+'">Eggs</div>';
        case (psUrl.toLowerCase().indexOf('/npg/') != -1):
            sTitle = 'Click to be redirected to the Non&nbsp;prescribed-goods commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'npg\'); return false;" title="'+sTitle+'">Non&nbsp;prescribed-goods</div>';
        case (psUrl.toLowerCase().indexOf('/organics/') != -1):
            sTitle = 'Click to be redirected to the Organics commodity page';
            return '<div onclick="javascript:sw.rtCommodity(\'organics\');" title="'+sTitle+'">Organics</div>';
        default:
            return 'Micor';
    }
}

//****************************************************************************
// Desc: rtCommodity
//****************************************************************************
sw.rtCommodity = function(psName)
{
    switch(psName)
    { 
        case 'meat':
            window.location.href = '/meat';
            break;
        case 'dairy':
            window.location.href = '/dairy';
            break;
        case 'plants':
            window.location.href = '/plants';
            break;
        case 'fish':
            window.location.href = '/fish';
            break;
        case 'live-animals':
            window.location.href = '/live-animals';
            break;
        case 'eggs':
            window.location.href = '/eggs';
            break;
        case 'npg':
            window.location.href = '/npg';
            break;
        case 'organics':
            window.location.href = '/organics';
            break;
        default:
            break;
    }
}

//****************************************************************************
// Desc: Remove duplicate values after sorting
//****************************************************************************
sw.removeDuplicates = function(poArray)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.removeDuplicates');

    var strSearch = '', arResult = new Array(), rDup = [];

    for( var ni=0; ni<poArray.length; ni++ )
    {
        if(sw.pathName.indexOf('micorsearchresults') > 0 
            && strSearch.indexOf('_'+poArray[ni].PNID+'-'+poArray[ni].CMDY) == -1)
        {
            strSearch += '['+ut.pad(ni, 4)+']_'+poArray[ni].PNID+'-'+poArray[ni].CMDY;
            arResult.push(poArray[ni]);
            rDup[poArray[ni].PNID] = {'Index': ni, 'Commodity': poArray[ni].CMDY};
            if(sw.debug || sw.duplicates)
                console.log(' 🟢 - Valid results item: ['+ut.pad(ni, 4)+'] - '
                                + ut.psd(poArray[ni].PNID, 7)
                                + ' - ' 
                                + poArray[ni].CMDY
                                + ' title: ' + poArray[ni].TTLE);
        }
        else if(sw.pathName.indexOf('micorsearchresults') == -1
            && strSearch.indexOf('_'+poArray[ni].PNID) == -1)
        {
            strSearch += '['+ut.pad(ni, 4)+']_'+poArray[ni].PNID;
            arResult.push(poArray[ni]);
            rDup[poArray[ni].PNID] = {'Index': ni, 'Commodity': poArray[ni].CMDY};
            if(sw.debug || sw.duplicates)
                console.log(' 🟢 - Valid results item: ['+ut.pad(ni, 4)+'] - '
                                + ut.psd(poArray[ni].PNID, 7)
                                + ' - ' 
                                + poArray[ni].CMDY
                                + ' title: ' + poArray[ni].TTLE);
        }
        else
        {
            if(sw.debug || sw.duplicates)
                console.log(' ⛔️- Rejected, duplicate: ['+ut.pad(ni, 4)+'] - '
                                + ut.psd(poArray[ni].PNID, 7)
                                + ' - ' 
                                + poArray[ni].CMDY
                                + ' title: ' + poArray[ni].TTLE
                                + ' -> cause Index: [' 
                                + ut.pad(rDup[poArray[ni].PNID].Index, 4) 
                                + '] in '+poArray[ni].CMDY
                                + ' has the same ID value!');  
        }
    }

    return arResult;
}

//****************************************************************************
// Desc: removeForbiddenLinks
//****************************************************************************
sw.removeForbiddenLinks = function(poArray)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.removeForbiddenLinks');

    var arResult = [], bMatch;

    for(var ni=0; ni<poArray.length; ni++)
    {
        bMatch = false;
        for(var nj=0; nj<sw.fbls.length; nj++)
        {
            if(poArray[ni].PURL.toLowerCase().indexOf(sw.fbls[nj].toLowerCase()) != -1)
            {
                bMatch = true;
                break;
            }
        }
        if(!bMatch)
        {
            arResult.push(poArray[ni]);
        }
    }
    
    return arResult;
}

//****************************************************************************
// Desc: sCnty = sCnty.replace(/[^\w\s]/gi, '');
//****************************************************************************
sw.extractCountryPlants = function( psTitle, psUrl)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.extractCountryPlants');

    var rUrl, sCntry = '', nPos=0;

    if(psTitle.trim() != sw.searchTerm.replace(/"/g,''))
    {
        if(psUrl.toLowerCase().indexOf('plants') != -1)
        {
            rUrl  = sw.uniClean(psUrl).split('/');
            nPos  = rUrl.length -2;
            sCntry= rUrl[nPos].replace(/_/g,' ') + ')';
            sCntry= [sCntry.slice(0, sCntry.length-3), '(' , sCntry.slice(sCntry.length-3)].join('');

            if(sw.debug) 
                console.log(' -> Plants country: ' + sCntry)
        }
    }

    return sCntry;
}

//****************************************************************************
// Desc: extractCountryLA
//****************************************************************************
sw.extractCountryLA = function( psTitle, psUrl)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.extractCountryLA');

    var rUrl, nPos=0, sCntry = '', arr=[];

    if(psTitle.trim() != sw.searchTerm.replace(/"/g,''))
    {
        rUrl  = sw.uniClean(psUrl).split('/');
        nPos  = rUrl.length -2;

        arr = rUrl[nPos].replace(/_/g, ' ').split(' ');

        for (var ni=0; ni<arr.length; ni++) 
        {
            arr[ni] = arr[ni].charAt(0).toUpperCase() + arr[ni].slice(1);
        } 

        sCntry = arr.join(' ')

        if(sw.debug) 
                console.log(' -> Live animals country: ' + sCntry)

    }

    if(sCntry != psTitle) return sCntry;
    else return '';
}

//****************************************************************************
// Desc: extractCountryNPG
//****************************************************************************
sw.extractCountryNPG = function( psTitle, psUrl)
{
    if(sw.debug) 
    console.log(sw.getCounter() + 'sw.extractCountryNPG');

    var rUrl, nPos=0, sCntry = '', arr=[];

    if(psTitle.trim() != sw.searchTerm.replace(/"/g,''))
    {
        rUrl  = sw.uniClean(psUrl).split('/');
        nPos  = rUrl.length -2;

        arr = rUrl[nPos].replace(/_/g, ' ').split(' ');

        for (var ni=0; ni<arr.length; ni++) 
        {
            arr[ni] = arr[ni].charAt(0).toUpperCase() + arr[ni].slice(1);
        } 

        sCntry = arr.join(' ')

        if(sw.debug) 
                console.log(' -> Live animals country: ' + sCntry)

    }

    if(sCntry != psTitle) return sCntry;
    else return '';
}

//****************************************************************************
// Desc: addISOfromCCL
//****************************************************************************
sw.addISOfromCCL = function(psCountryName)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.addISOfromCCL');

    for(var ni=0; ni<ccl.cnty.length; ni++)
    {
        if(ccl.cnty[ni].CNTY.toLowerCase() == ''+psCountryName.toLowerCase())
        {
            return psCountryName + ' (' + ccl.cnty[ni].ISOC + ')';
        }
    }

    return '(country not found: '+psCountryName+')';
}

//****************************************************************************
// Desc: Display array data for debug info
//****************************************************************************
sw.displayArray = function(poArray)
{
    if(sw.debug) 
        console.log(sw.getCounter() + 'sw.displayArray');

    var sData = '--------------------------------------------------------------------\n';

    for(var ni=0; ni<poArray.length; ni++)
    {
        sData += 'Element   : ['+ ut.pad((ni+1), 4) +']\n'
               + 'ID        : ' + poArray[ni].PNID + '\n'
               + 'Rank      : ' + poArray[ni].RANK + '\n'
               + 'Title     : ' + poArray[ni].TTLE + '\n'
               + 'Page URL  : ' + poArray[ni].PURL + '\n'
               + 'Commodity : ' + poArray[ni].CMDY + '\n'
               + 'Country   : ' + poArray[ni].CNTY + '\n'
               + 'Summary   : ' + poArray[ni].SUMY + '\n'
               + 'Bottom    : ' + poArray[ni].BTTM + '\n' 
               + '--------------------------------------------------------------------\n';
    }

    return sData;
}

//****************************************************************************
// Desc: Enabling Micor country list integration
//****************************************************************************
sw.enableCCL = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.enableCCL');

    if($('div#main[template="Micor2020DairyStandardPage"]'      ).length > 0  // Dairy
    || $('div#main[template="MicorDairyStructured"]'            ).length > 0  // Dairy
    || $('div#main[template="MicorFishStructured"]'             ).length > 0  // Fish
    || $('div#main[template="MicorFishV2Structured"]'           ).length > 0  // Fish V2
    || $('div#main[template="Micor2020LiveAnimalStandardPage"]' ).length > 0  // LAE
    || $('div#main[template="Micor2020LACountryLan"]'           ).length > 0  // LAE - Country
    || $('div#main[template="MICoRPlantsPageLO"]'               ).length > 0  // Plants
    || $('div#main[template="Micor2020PlantsLandingPageLayout"]').length > 0  // Plants
    || $('div#main[template="Micor2020PlantsCountryLan"]'       ).length > 0  // Plants - Country
    || $('div#main[template="Micor2020MeatStandardPage"]'       ).length > 0  // Meat
    || $('div#main[template="MicorMeatStructured"]'             ).length > 0  // Meat
    || $('div#main[template="Micor2020EggStandardPage"]'        ).length > 0  // Eggs
    || $('div#main[template="MicorEggsStructured"]'             ).length > 0  // Eggs
    || $('div#main[template="Micor2020NPGStandardPage"]'        ).length > 0  // NPG
    || $('div#main[template="Micor2020NPGCountryLan"]'          ).length > 0  // NPG - Country
    || $('div#main[template="MicorNPGStructured"]'              ).length > 0  // NPG
    || $('div#main[template="MicorOrganicsStructured"]'         ).length > 0  // Organics
    || $('div#main[template="Micor2020OrganicsStandardPage"]'   ).length > 0) // Organics
    {
        ccl.init();
    }
}

//****************************************************************************
// Desc: MICoRPlantsPageLO - the usual exception (for Display only, not Edit)
//****************************************************************************
sw.disablePlantsCCL = function()
{   
    if($('#main[template="MICoRPlantsPageLO"]').length > 0)
    {
        $('div.ms-formfieldvaluecontainer').eq(0).hide();
        $('div.layoutField').eq(1).css('margin-bottom', '8px');
        $('span.fieldLabel').eq(0).css({'float':'left', 'margin-right':'5px'});
        $('span.mCountry').removeClass('mCountry').addClass('vCountry');
        var sText = $('span.vCountry').text();
        $('span.vCountry').text($('span.vCountry').text().trim());
    }
}

//****************************************************************************
// Desc: redir routine to redirect old NPG bookmark requests
//       e.g. '/npg/pages/afghanistan.aspx'
//        to  '/npg/pages/afghanistan/afghanistan.aspx'
//****************************************************************************
sw.isOldNpgUrl = function()
{
    if(sw.debug) console.log(sw.getCounter() + 'sw.isOldNpgUrl');

    var sRequestUrl = ut.getUrlSearchKey('requestUrl'), sOldNPGPages, rRqst = [], rCnty = [];

    sOldNPGPages = 'bahrain|canada|china|costa_rica|egypt|european_union|fiji|french_polynesia|hong_kong|'
                 + 'india|indonesia|japan|jordan|kenya|korea-republic-of|kuwait|libya|macau|malaysia|maldives|'
                 + 'mauritius|new_zealand|oman|pakistan|papua_new_guinea|philippines|qatar|saudi_arabia|serbia|'
                 + 'singapore|switzerland|taiwan|thailand|united_arab_emirates|united_kingdom|'
                 + 'united_states_of_america|vanuatu|vietnam|';

    sRequestUrl = sRequestUrl.toLowerCase();
    rRqst = sRequestUrl.split(/\//);
    if(rRqst[3] == 'npg' && rRqst[4] == 'pages')
    {
        if(rRqst[5].indexOf('.') > -1)
            rCnty = rRqst[5].split('.');
        else return false;

        if(rCnty.length>0)
        {
            if(sOldNPGPages.indexOf(rCnty[0]) > -1)
            {
                if(rCnty[0].indexOf('korea') == -1)
                {
                    sw.redirToNewUrl = sw.protocol+'//'+location.host+'/npg/pages/'+rCnty[0]+'/'+ rCnty.join('.');
                    console.log('👉-> ' + sw.redirToNewUrl);

                    return true;
                }
                else // Because the Korea link and page name has changed
                {
                    sw.redirToNewUrl = sw.protocol+'//'+location.host+'/npg/pages/korea,_republic_of/korea,_republic_of.aspx';
                    console.log('👉-> ' + sw.redirToNewUrl);
                
                    return true;
                }
            }
            else return false;
        }
        else return false;
    }
    else return false;
}

//****************************************************************************
// Desc: Called from global.js - intervene with login redirect if needed.
//****************************************************************************
sw.decideLoginAction = function(psUrl)
{
    if(sw.pathName.indexOf('/plants/') != -1)
    {
        $('span#readonly').text('true');
    }
    else
        window.location = psUrl;
}

//****************************************************************************
// Desc: console.log('✅ site collection wide \'Micor\' loaded');
//****************************************************************************
sw._Start = (function()
{
    sw.loadCss(sw.sc_wideST);
    if(sw.pathName.indexOf('pagenotfounderror') != -1)
    {
        console.warn('NPG pagenotfounderror recovery attempt!');
        if(sw.isOldNpgUrl()) 
        {
            window.location.replace(sw.redirToNewUrl);
        }
    }

    if(sw.debug) 
        console.log(sw.getCounter() + 'sw._Start');

    if(!sw.silentErr)
    {
        window.onerror = function (msg, url, lineNo, columnNo, error) 
                         {
                             var sMessage = ('Intercepted error: \n'
                                          + '\n'         + msg 
                                          + '\nLine: '   + lineNo
                                          + '\ncolumn: ' + columnNo
                                          + '\nUrl: '    + url); 

                             console.warn('⛔️- ' + sMessage);

                             return true;
                         };
    }

    if(sw.pathName.indexOf('searchresults.aspx') != -1) 
    {
        sw.loadCss(sw.searchST);
        sw.loadScript(sw.searchJS, true);
    }
    else if(sw.pathName.indexOf('authoring') != -1) 
        sw.loadCss(sw.sc_nonaST);

    // Ensure jQuery is fully loaded before continuing
    $(document).ready(function()
    {  
        sw.environmentSettings();
    });   
})();
//****************************************************************************