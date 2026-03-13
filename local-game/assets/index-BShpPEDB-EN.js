(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ph={exports:{}},Gi={},gh={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=Symbol.for("react.element"),ig=Symbol.for("react.portal"),og=Symbol.for("react.fragment"),ag=Symbol.for("react.strict_mode"),lg=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),ug=Symbol.for("react.context"),dg=Symbol.for("react.forward_ref"),hg=Symbol.for("react.suspense"),fg=Symbol.for("react.memo"),mg=Symbol.for("react.lazy"),Bc=Symbol.iterator;function pg(e){return e===null||typeof e!="object"?null:(e=Bc&&e[Bc]||e["@@iterator"],typeof e=="function"?e:null)}var yh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vh=Object.assign,wh={};function dr(e,t,n){this.props=e,this.context=t,this.refs=wh,this.updater=n||yh}dr.prototype.isReactComponent={};dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xh(){}xh.prototype=dr.prototype;function dl(e,t,n){this.props=e,this.context=t,this.refs=wh,this.updater=n||yh}var hl=dl.prototype=new xh;hl.constructor=dl;vh(hl,dr.prototype);hl.isPureReactComponent=!0;var Vc=Array.isArray,bh=Object.prototype.hasOwnProperty,fl={current:null},Sh={key:!0,ref:!0,__self:!0,__source:!0};function Eh(e,t,n){var r,s={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)bh.call(t,r)&&!Sh.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:gs,type:e,key:i,ref:o,props:s,_owner:fl.current}}function gg(e,t){return{$$typeof:gs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===gs}function yg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wc=/\/+/g;function fo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yg(""+e.key):t.toString(36)}function Zs(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case gs:case ig:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+fo(o,0):r,Vc(s)?(n="",e!=null&&(n=e.replace(Wc,"$&/")+"/"),Zs(s,t,n,"",function(c){return c})):s!=null&&(ml(s)&&(s=gg(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Wc,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",Vc(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+fo(i,a);o+=Zs(i,t,n,l,s)}else if(l=pg(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+fo(i,a++),o+=Zs(i,t,n,l,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Rs(e,t,n){if(e==null)return e;var r=[],s=0;return Zs(e,r,"","",function(i){return t.call(n,i,s++)}),r}function vg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},qs={transition:null},wg={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:qs,ReactCurrentOwner:fl};function Th(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Rs,forEach:function(e,t,n){Rs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Rs(e,function(){t++}),t},toArray:function(e){return Rs(e,function(t){return t})||[]},only:function(e){if(!ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=dr;$.Fragment=og;$.Profiler=lg;$.PureComponent=dl;$.StrictMode=ag;$.Suspense=hg;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg;$.act=Th;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vh({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=fl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)bh.call(t,l)&&!Sh.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:gs,type:e.type,key:s,ref:i,props:r,_owner:o}};$.createContext=function(e){return e={$$typeof:ug,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cg,_context:e},e.Consumer=e};$.createElement=Eh;$.createFactory=function(e){var t=Eh.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:dg,render:e}};$.isValidElement=ml;$.lazy=function(e){return{$$typeof:mg,_payload:{_status:-1,_result:e},_init:vg}};$.memo=function(e,t){return{$$typeof:fg,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=qs.transition;qs.transition={};try{e()}finally{qs.transition=t}};$.unstable_act=Th;$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.3.1";gh.exports=$;var A=gh.exports;const ea=sg(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg=A,bg=Symbol.for("react.element"),Sg=Symbol.for("react.fragment"),Eg=Object.prototype.hasOwnProperty,Tg=xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ag={key:!0,ref:!0,__self:!0,__source:!0};function Ah(e,t,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Eg.call(t,r)&&!Ag.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:bg,type:e,key:i,ref:o,props:s,_owner:Tg.current}}Gi.Fragment=Sg;Gi.jsx=Ah;Gi.jsxs=Ah;ph.exports=Gi;var u=ph.exports,ta={},kh={exports:{}},$e={},Ih={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,F){var _=k.length;k.push(F);e:for(;0<_;){var J=_-1>>>1,D=k[J];if(0<s(D,F))k[J]=F,k[_]=D,_=J;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var F=k[0],_=k.pop();if(_!==F){k[0]=_;e:for(var J=0,D=k.length,L=D>>>1;J<L;){var B=2*(J+1)-1,K=k[B],b=B+1,G=k[b];if(0>s(K,_))b<D&&0>s(G,K)?(k[J]=G,k[b]=_,J=b):(k[J]=K,k[B]=_,J=B);else if(b<D&&0>s(G,_))k[J]=G,k[b]=_,J=b;else break e}}return F}function s(k,F){var _=k.sortIndex-F.sortIndex;return _!==0?_:k.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,w=!1,y=!1,g=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=k)r(c),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(c)}}function S(k){if(g=!1,v(k),!y)if(n(l)!==null)y=!0,U(E);else{var F=n(c);F!==null&&P(S,F.startTime-k)}}function E(k,F){y=!1,g&&(g=!1,p(x),x=-1),w=!0;var _=f;try{for(v(F),h=n(l);h!==null&&(!(h.expirationTime>F)||k&&!j());){var J=h.callback;if(typeof J=="function"){h.callback=null,f=h.priorityLevel;var D=J(h.expirationTime<=F);F=e.unstable_now(),typeof D=="function"?h.callback=D:h===n(l)&&r(l),v(F)}else r(l);h=n(l)}if(h!==null)var L=!0;else{var B=n(c);B!==null&&P(S,B.startTime-F),L=!1}return L}finally{h=null,f=_,w=!1}}var I=!1,C=null,x=-1,O=5,M=-1;function j(){return!(e.unstable_now()-M<O)}function Z(){if(C!==null){var k=e.unstable_now();M=k;var F=!0;try{F=C(!0,k)}finally{F?ne():(I=!1,C=null)}}else I=!1}var ne;if(typeof m=="function")ne=function(){m(Z)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,R=H.port2;H.port1.onmessage=Z,ne=function(){R.postMessage(null)}}else ne=function(){T(Z,0)};function U(k){C=k,I||(I=!0,ne())}function P(k,F){x=T(function(){k(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,U(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var _=f;f=F;try{return k()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var _=f;f=k;try{return F()}finally{f=_}},e.unstable_scheduleCallback=function(k,F,_){var J=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?J+_:J):_=J,k){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=_+D,k={id:d++,callback:F,priorityLevel:k,startTime:_,expirationTime:D,sortIndex:-1},_>J?(k.sortIndex=_,t(c,k),n(l)===null&&k===n(c)&&(g?(p(x),x=-1):g=!0,P(S,_-J))):(k.sortIndex=D,t(l,k),y||w||(y=!0,U(E))),k},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(k){var F=f;return function(){var _=f;f=F;try{return k.apply(this,arguments)}finally{f=_}}}})(Ch);Ih.exports=Ch;var kg=Ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig=A,Ke=kg;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rh=new Set,Jr={};function An(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)Rh.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,Cg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hc={},_c={};function Rg(e){return na.call(_c,e)?!0:na.call(Hc,e)?!1:Cg.test(e)?_c[e]=!0:(Hc[e]=!0,!1)}function Ng(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lg(e,t,n,r){if(t===null||typeof t>"u"||Ng(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pl=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pl,gl);Ae[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pl,gl);Ae[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pl,gl);Ae[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,t,n,r){var s=Ae.hasOwnProperty(t)?Ae[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lg(t,n,s,r)&&(n=null),r||s===null?Rg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),vl=Symbol.for("react.strict_mode"),ra=Symbol.for("react.profiler"),Nh=Symbol.for("react.provider"),Lh=Symbol.for("react.context"),wl=Symbol.for("react.forward_ref"),sa=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Dh=Symbol.for("react.offscreen"),Gc=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=Gc&&e[Gc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,mo;function Cr(e){if(mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mo=t&&t[1]||""}return`
`+mo+e}var po=!1;function go(e,t){if(!e||po)return"";po=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{po=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Dg(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=go(e.type,!1),e;case 11:return e=go(e.type.render,!1),e;case 1:return e=go(e.type,!0),e;default:return""}}function oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Ln:return"Portal";case ra:return"Profiler";case vl:return"StrictMode";case sa:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Lh:return(e.displayName||"Context")+".Consumer";case Nh:return(e._context.displayName||"Context")+".Provider";case wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xl:return t=e.displayName||null,t!==null?t:oa(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return oa(e(t))}catch{}}return null}function Og(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oa(t);case 8:return t===vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mg(e){var t=Oh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ls(e){e._valueTracker||(e._valueTracker=Mg(e))}function Mh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Oh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function aa(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ph(e,t){t=t.checked,t!=null&&yl(e,"checked",t,!1)}function la(e,t){Ph(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&ca(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ca(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Rr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function jh(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function da(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ds,Uh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ds=Ds||document.createElement("div"),Ds.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ds.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pg=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){Pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Bh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Vh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Bh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var jg=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ha(e,t){if(t){if(jg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pa=null,Zn=null,qn=null;function $c(e){if(e=ws(e)){if(typeof pa!="function")throw Error(N(280));var t=e.stateNode;t&&(t=$i(t),pa(e.stateNode,e.type,t))}}function Wh(e){Zn?qn?qn.push(e):qn=[e]:Zn=e}function Hh(){if(Zn){var e=Zn,t=qn;if(qn=Zn=null,$c(e),t)for(e=0;e<t.length;e++)$c(t[e])}}function _h(e,t){return e(t)}function Gh(){}var yo=!1;function zh(e,t,n){if(yo)return e(t,n);yo=!0;try{return _h(e,t,n)}finally{yo=!1,(Zn!==null||qn!==null)&&(Gh(),Hh())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=$i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ga=!1;if(Nt)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ga=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ga=!1}function Fg(e,t,n,r,s,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var jr=!1,hi=null,fi=!1,ya=null,Ug={onError:function(e){jr=!0,hi=e}};function Bg(e,t,n,r,s,i,o,a,l){jr=!1,hi=null,Fg.apply(Ug,arguments)}function Vg(e,t,n,r,s,i,o,a,l){if(Bg.apply(this,arguments),jr){if(jr){var c=hi;jr=!1,hi=null}else throw Error(N(198));fi||(fi=!0,ya=c)}}function kn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(kn(e)!==e)throw Error(N(188))}function Wg(e){var t=e.alternate;if(!t){if(t=kn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Zc(s),e;if(i===r)return Zc(s),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Kh(e){return e=Wg(e),e!==null?Jh(e):null}function Jh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jh(e);if(t!==null)return t;e=e.sibling}return null}var $h=Ke.unstable_scheduleCallback,qc=Ke.unstable_cancelCallback,Hg=Ke.unstable_shouldYield,_g=Ke.unstable_requestPaint,pe=Ke.unstable_now,Gg=Ke.unstable_getCurrentPriorityLevel,Sl=Ke.unstable_ImmediatePriority,Zh=Ke.unstable_UserBlockingPriority,mi=Ke.unstable_NormalPriority,zg=Ke.unstable_LowPriority,qh=Ke.unstable_IdlePriority,zi=null,vt=null;function Yg(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:$g,Kg=Math.log,Jg=Math.LN2;function $g(e){return e>>>=0,e===0?32:31-(Kg(e)/Jg|0)|0}var Os=64,Ms=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Nr(a):(i&=o,i!==0&&(r=Nr(i)))}else o=n&~s,o!==0?r=Nr(o):i!==0&&(r=Nr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),s=1<<n,r|=e[n],t&=~s;return r}function Zg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ht(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=Zg(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qh(){var e=Os;return Os<<=1,!(Os&4194240)&&(Os=64),e}function vo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Qg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-ht(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function El(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var ee=0;function Xh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ef,Tl,tf,nf,rf,wa=!1,Ps=[],zt=null,Yt=null,Kt=null,qr=new Map,Qr=new Map,Wt=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qc(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(t.pointerId)}}function wr(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ws(t),t!==null&&Tl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ey(e,t,n,r,s){switch(t){case"focusin":return zt=wr(zt,e,t,n,r,s),!0;case"dragenter":return Yt=wr(Yt,e,t,n,r,s),!0;case"mouseover":return Kt=wr(Kt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return qr.set(i,wr(qr.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Qr.set(i,wr(Qr.get(i)||null,e,t,n,r,s)),!0}return!1}function sf(e){var t=fn(e.target);if(t!==null){var n=kn(t);if(n!==null){if(t=n.tag,t===13){if(t=Yh(n),t!==null){e.blockedOn=t,rf(e.priority,function(){tf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ma=r,n.target.dispatchEvent(r),ma=null}else return t=ws(n),t!==null&&Tl(t),e.blockedOn=n,!1;t.shift()}return!0}function Xc(e,t,n){Qs(e)&&n.delete(t)}function ty(){wa=!1,zt!==null&&Qs(zt)&&(zt=null),Yt!==null&&Qs(Yt)&&(Yt=null),Kt!==null&&Qs(Kt)&&(Kt=null),qr.forEach(Xc),Qr.forEach(Xc)}function xr(e,t){e.blockedOn===t&&(e.blockedOn=null,wa||(wa=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,ty)))}function Xr(e){function t(s){return xr(s,e)}if(0<Ps.length){xr(Ps[0],e);for(var n=1;n<Ps.length;n++){var r=Ps[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&xr(zt,e),Yt!==null&&xr(Yt,e),Kt!==null&&xr(Kt,e),qr.forEach(t),Qr.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)sf(n),n.blockedOn===null&&Wt.shift()}var Qn=Pt.ReactCurrentBatchConfig,gi=!0;function ny(e,t,n,r){var s=ee,i=Qn.transition;Qn.transition=null;try{ee=1,Al(e,t,n,r)}finally{ee=s,Qn.transition=i}}function ry(e,t,n,r){var s=ee,i=Qn.transition;Qn.transition=null;try{ee=4,Al(e,t,n,r)}finally{ee=s,Qn.transition=i}}function Al(e,t,n,r){if(gi){var s=xa(e,t,n,r);if(s===null)Co(e,t,r,yi,n),Qc(e,r);else if(ey(s,e,t,n,r))r.stopPropagation();else if(Qc(e,r),t&4&&-1<Xg.indexOf(e)){for(;s!==null;){var i=ws(s);if(i!==null&&ef(i),i=xa(e,t,n,r),i===null&&Co(e,t,r,yi,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Co(e,t,r,null,n)}}var yi=null;function xa(e,t,n,r){if(yi=null,e=bl(r),e=fn(e),e!==null)if(t=kn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yi=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gg()){case Sl:return 1;case Zh:return 4;case mi:case zg:return 16;case qh:return 536870912;default:return 16}default:return 16}}var _t=null,kl=null,Xs=null;function af(){if(Xs)return Xs;var e,t=kl,n=t.length,r,s="value"in _t?_t.value:_t.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[i-r];r++);return Xs=s.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function eu(){return!1}function Ze(e){function t(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?js:eu,this.isPropagationStopped=eu,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),t}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ze(hr),vs=ue({},hr,{view:0,detail:0}),sy=Ze(vs),wo,xo,br,Yi=ue({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(wo=e.screenX-br.screenX,xo=e.screenY-br.screenY):xo=wo=0,br=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:xo}}),tu=Ze(Yi),iy=ue({},Yi,{dataTransfer:0}),oy=Ze(iy),ay=ue({},vs,{relatedTarget:0}),bo=Ze(ay),ly=ue({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=Ze(ly),uy=ue({},hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dy=Ze(uy),hy=ue({},hr,{data:0}),nu=Ze(hy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=py[e])?!!t[e]:!1}function Cl(){return gy}var yy=ue({},vs,{key:function(e){if(e.key){var t=fy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vy=Ze(yy),wy=ue({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Ze(wy),xy=ue({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),by=Ze(xy),Sy=ue({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=Ze(Sy),Ty=ue({},Yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Ze(Ty),ky=[9,13,27,32],Rl=Nt&&"CompositionEvent"in window,Fr=null;Nt&&"documentMode"in document&&(Fr=document.documentMode);var Iy=Nt&&"TextEvent"in window&&!Fr,lf=Nt&&(!Rl||Fr&&8<Fr&&11>=Fr),su=" ",iu=!1;function cf(e,t){switch(e){case"keyup":return ky.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function Cy(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(iu=!0,su);case"textInput":return e=t.data,e===su&&iu?null:e;default:return null}}function Ry(e,t){if(On)return e==="compositionend"||!Rl&&cf(e,t)?(e=af(),Xs=kl=_t=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ny[e.type]:t==="textarea"}function df(e,t,n,r){Wh(r),t=vi(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,es=null;function Ly(e){Sf(e,0)}function Ki(e){var t=jn(e);if(Mh(t))return e}function Dy(e,t){if(e==="change")return t}var hf=!1;if(Nt){var So;if(Nt){var Eo="oninput"in document;if(!Eo){var au=document.createElement("div");au.setAttribute("oninput","return;"),Eo=typeof au.oninput=="function"}So=Eo}else So=!1;hf=So&&(!document.documentMode||9<document.documentMode)}function lu(){Ur&&(Ur.detachEvent("onpropertychange",ff),es=Ur=null)}function ff(e){if(e.propertyName==="value"&&Ki(es)){var t=[];df(t,es,e,bl(e)),zh(Ly,t)}}function Oy(e,t,n){e==="focusin"?(lu(),Ur=t,es=n,Ur.attachEvent("onpropertychange",ff)):e==="focusout"&&lu()}function My(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(es)}function Py(e,t){if(e==="click")return Ki(t)}function jy(e,t){if(e==="input"||e==="change")return Ki(t)}function Fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Fy;function ts(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!na.call(t,s)||!mt(e[s],t[s]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uu(e,t){var n=cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cu(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pf(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function Nl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Uy(e){var t=pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mf(n.ownerDocument.documentElement,n)){if(r!==null&&Nl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=uu(n,i);var o=uu(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var By=Nt&&"documentMode"in document&&11>=document.documentMode,Mn=null,ba=null,Br=null,Sa=!1;function du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||Mn==null||Mn!==di(r)||(r=Mn,"selectionStart"in r&&Nl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ts(Br,r)||(Br=r,r=vi(ba,"onSelect"),0<r.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionend:Fs("Transition","TransitionEnd")},To={},gf={};Nt&&(gf=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Ji(e){if(To[e])return To[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gf)return To[e]=t[n];return e}var yf=Ji("animationend"),vf=Ji("animationiteration"),wf=Ji("animationstart"),xf=Ji("transitionend"),bf=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rn(e,t){bf.set(e,t),An(t,[e])}for(var Ao=0;Ao<hu.length;Ao++){var ko=hu[Ao],Vy=ko.toLowerCase(),Wy=ko[0].toUpperCase()+ko.slice(1);rn(Vy,"on"+Wy)}rn(yf,"onAnimationEnd");rn(vf,"onAnimationIteration");rn(wf,"onAnimationStart");rn("dblclick","onDoubleClick");rn("focusin","onFocus");rn("focusout","onBlur");rn(xf,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));An("onBeforeInput",["compositionend","keypress","textInput","paste"]);An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vg(r,t,void 0,e),e.currentTarget=null}function Sf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;fu(s,a,c),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;fu(s,a,c),i=l}}}if(fi)throw e=ya,fi=!1,ya=null,e}function re(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(Ef(t,e,2,!1),n.add(r))}function Io(e,t,n){var r=0;t&&(r|=4),Ef(n,e,r,t)}var Us="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[Us]){e[Us]=!0,Rh.forEach(function(n){n!=="selectionchange"&&(Hy.has(n)||Io(n,!1,e),Io(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Us]||(t[Us]=!0,Io("selectionchange",!1,t))}}function Ef(e,t,n,r){switch(of(t)){case 1:var s=ny;break;case 4:s=ry;break;default:s=Al}n=s.bind(null,t,n,e),s=void 0,!ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Co(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=fn(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}zh(function(){var c=i,d=bl(n),h=[];e:{var f=bf.get(e);if(f!==void 0){var w=Il,y=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":w=vy;break;case"focusin":y="focus",w=bo;break;case"focusout":y="blur",w=bo;break;case"beforeblur":case"afterblur":w=bo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=tu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=by;break;case yf:case vf:case wf:w=cy;break;case xf:w=Ey;break;case"scroll":w=sy;break;case"wheel":w=Ay;break;case"copy":case"cut":case"paste":w=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ru}var g=(t&4)!==0,T=!g&&e==="scroll",p=g?f!==null?f+"Capture":null:f;g=[];for(var m=c,v;m!==null;){v=m;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,p!==null&&(S=Zr(m,p),S!=null&&g.push(rs(m,S,v)))),T)break;m=m.return}0<g.length&&(f=new w(f,y,null,n,d),h.push({event:f,listeners:g}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==ma&&(y=n.relatedTarget||n.fromElement)&&(fn(y)||y[Lt]))break e;if((w||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?fn(y):null,y!==null&&(T=kn(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(g=tu,S="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(g=ru,S="onPointerLeave",p="onPointerEnter",m="pointer"),T=w==null?f:jn(w),v=y==null?f:jn(y),f=new g(S,m+"leave",w,n,d),f.target=T,f.relatedTarget=v,S=null,fn(d)===c&&(g=new g(p,m+"enter",y,n,d),g.target=v,g.relatedTarget=T,S=g),T=S,w&&y)t:{for(g=w,p=y,m=0,v=g;v;v=Rn(v))m++;for(v=0,S=p;S;S=Rn(S))v++;for(;0<m-v;)g=Rn(g),m--;for(;0<v-m;)p=Rn(p),v--;for(;m--;){if(g===p||p!==null&&g===p.alternate)break t;g=Rn(g),p=Rn(p)}g=null}else g=null;w!==null&&mu(h,f,w,g,!1),y!==null&&T!==null&&mu(h,T,y,g,!0)}}e:{if(f=c?jn(c):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var E=Dy;else if(ou(f))if(hf)E=jy;else{E=My;var I=Oy}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Py);if(E&&(E=E(e,c))){df(h,E,n,d);break e}I&&I(e,f,c),e==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&ca(f,"number",f.value)}switch(I=c?jn(c):window,e){case"focusin":(ou(I)||I.contentEditable==="true")&&(Mn=I,ba=c,Br=null);break;case"focusout":Br=ba=Mn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,du(h,n,d);break;case"selectionchange":if(By)break;case"keydown":case"keyup":du(h,n,d)}var C;if(Rl)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else On?cf(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(lf&&n.locale!=="ko"&&(On||x!=="onCompositionStart"?x==="onCompositionEnd"&&On&&(C=af()):(_t=d,kl="value"in _t?_t.value:_t.textContent,On=!0)),I=vi(c,x),0<I.length&&(x=new nu(x,e,null,n,d),h.push({event:x,listeners:I}),C?x.data=C:(C=uf(n),C!==null&&(x.data=C)))),(C=Iy?Cy(e,n):Ry(e,n))&&(c=vi(c,"onBeforeInput"),0<c.length&&(d=new nu("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}Sf(h,t)})}function rs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Zr(e,n),i!=null&&r.unshift(rs(e,i,s)),i=Zr(e,t),i!=null&&r.push(rs(e,i,s))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,s){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,s?(l=Zr(n,i),l!=null&&o.unshift(rs(n,l,a))):s||(l=Zr(n,i),l!=null&&o.push(rs(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var _y=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function pu(e){return(typeof e=="string"?e:""+e).replace(_y,`
`).replace(Gy,"")}function Bs(e,t,n){if(t=pu(t),pu(e)!==t&&n)throw Error(N(425))}function wi(){}var Ea=null,Ta=null;function Aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,Yy=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(Ky)}:ka;function Ky(e){setTimeout(function(){throw e})}function Ro(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Xr(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),yt="__reactFiber$"+fr,ss="__reactProps$"+fr,Lt="__reactContainer$"+fr,Ia="__reactEvents$"+fr,Jy="__reactListeners$"+fr,$y="__reactHandles$"+fr;function fn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yu(e);e!==null;){if(n=e[yt])return n;e=yu(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[yt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function $i(e){return e[ss]||null}var Ca=[],Fn=-1;function sn(e){return{current:e}}function se(e){0>Fn||(e.current=Ca[Fn],Ca[Fn]=null,Fn--)}function te(e,t){Fn++,Ca[Fn]=e.current,e.current=t}var en={},Le=sn(en),Ve=sn(!1),xn=en;function nr(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function We(e){return e=e.childContextTypes,e!=null}function xi(){se(Ve),se(Le)}function vu(e,t,n){if(Le.current!==en)throw Error(N(168));te(Le,t),te(Ve,n)}function Tf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(N(108,Og(e)||"Unknown",s));return ue({},n,r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,xn=Le.current,te(Le,e),te(Ve,Ve.current),!0}function wu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Tf(e,t,xn),r.__reactInternalMemoizedMergedChildContext=e,se(Ve),se(Le),te(Le,e)):se(Ve),te(Ve,n)}var Et=null,Zi=!1,No=!1;function Af(e){Et===null?Et=[e]:Et.push(e)}function Zy(e){Zi=!0,Af(e)}function on(){if(!No&&Et!==null){No=!0;var e=0,t=ee;try{var n=Et;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,Zi=!1}catch(s){throw Et!==null&&(Et=Et.slice(e+1)),$h(Sl,on),s}finally{ee=t,No=!1}}return null}var Un=[],Bn=0,Si=null,Ei=0,tt=[],nt=0,bn=null,Tt=1,At="";function cn(e,t){Un[Bn++]=Ei,Un[Bn++]=Si,Si=e,Ei=t}function kf(e,t,n){tt[nt++]=Tt,tt[nt++]=At,tt[nt++]=bn,bn=e;var r=Tt;e=At;var s=32-ht(r)-1;r&=~(1<<s),n+=1;var i=32-ht(t)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Tt=1<<32-ht(t)+s|n<<s|r,At=i+e}else Tt=1<<i|n<<s|r,At=e}function Ll(e){e.return!==null&&(cn(e,1),kf(e,1,0))}function Dl(e){for(;e===Si;)Si=Un[--Bn],Un[Bn]=null,Ei=Un[--Bn],Un[Bn]=null;for(;e===bn;)bn=tt[--nt],tt[nt]=null,At=tt[--nt],tt[nt]=null,Tt=tt[--nt],tt[nt]=null}var ze=null,Ge=null,oe=!1,dt=null;function If(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ge=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:Tt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ge=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(oe){var t=Ge;if(t){var n=t;if(!xu(e,t)){if(Ra(e))throw Error(N(418));t=Jt(n.nextSibling);var r=ze;t&&xu(e,t)?If(r,n):(e.flags=e.flags&-4097|2,oe=!1,ze=e)}}else{if(Ra(e))throw Error(N(418));e.flags=e.flags&-4097|2,oe=!1,ze=e}}}function bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Vs(e){if(e!==ze)return!1;if(!oe)return bu(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Aa(e.type,e.memoizedProps)),t&&(t=Ge)){if(Ra(e))throw Cf(),Error(N(418));for(;t;)If(e,t),t=Jt(t.nextSibling)}if(bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=ze?Jt(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=Ge;e;)e=Jt(e.nextSibling)}function rr(){Ge=ze=null,oe=!1}function Ol(e){dt===null?dt=[e]:dt.push(e)}var qy=Pt.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ws(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Su(e){var t=e._init;return t(e._payload)}function Rf(e){function t(p,m){if(e){var v=p.deletions;v===null?(p.deletions=[m],p.flags|=16):v.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function s(p,m){return p=Qt(p,m),p.index=0,p.sibling=null,p}function i(p,m,v){return p.index=v,e?(v=p.alternate,v!==null?(v=v.index,v<m?(p.flags|=2,m):v):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,v,S){return m===null||m.tag!==6?(m=Fo(v,p.mode,S),m.return=p,m):(m=s(m,v),m.return=p,m)}function l(p,m,v,S){var E=v.type;return E===Dn?d(p,m,v.props.children,S,v.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&Su(E)===m.type)?(S=s(m,v.props),S.ref=Sr(p,m,v),S.return=p,S):(S=ai(v.type,v.key,v.props,null,p.mode,S),S.ref=Sr(p,m,v),S.return=p,S)}function c(p,m,v,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Uo(v,p.mode,S),m.return=p,m):(m=s(m,v.children||[]),m.return=p,m)}function d(p,m,v,S,E){return m===null||m.tag!==7?(m=vn(v,p.mode,S,E),m.return=p,m):(m=s(m,v),m.return=p,m)}function h(p,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Fo(""+m,p.mode,v),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ns:return v=ai(m.type,m.key,m.props,null,p.mode,v),v.ref=Sr(p,null,m),v.return=p,v;case Ln:return m=Uo(m,p.mode,v),m.return=p,m;case Bt:var S=m._init;return h(p,S(m._payload),v)}if(Rr(m)||yr(m))return m=vn(m,p.mode,v,null),m.return=p,m;Ws(p,m)}return null}function f(p,m,v,S){var E=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(p,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ns:return v.key===E?l(p,m,v,S):null;case Ln:return v.key===E?c(p,m,v,S):null;case Bt:return E=v._init,f(p,m,E(v._payload),S)}if(Rr(v)||yr(v))return E!==null?null:d(p,m,v,S,null);Ws(p,v)}return null}function w(p,m,v,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(v)||null,a(m,p,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ns:return p=p.get(S.key===null?v:S.key)||null,l(m,p,S,E);case Ln:return p=p.get(S.key===null?v:S.key)||null,c(m,p,S,E);case Bt:var I=S._init;return w(p,m,v,I(S._payload),E)}if(Rr(S)||yr(S))return p=p.get(v)||null,d(m,p,S,E,null);Ws(m,S)}return null}function y(p,m,v,S){for(var E=null,I=null,C=m,x=m=0,O=null;C!==null&&x<v.length;x++){C.index>x?(O=C,C=null):O=C.sibling;var M=f(p,C,v[x],S);if(M===null){C===null&&(C=O);break}e&&C&&M.alternate===null&&t(p,C),m=i(M,m,x),I===null?E=M:I.sibling=M,I=M,C=O}if(x===v.length)return n(p,C),oe&&cn(p,x),E;if(C===null){for(;x<v.length;x++)C=h(p,v[x],S),C!==null&&(m=i(C,m,x),I===null?E=C:I.sibling=C,I=C);return oe&&cn(p,x),E}for(C=r(p,C);x<v.length;x++)O=w(C,p,x,v[x],S),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?x:O.key),m=i(O,m,x),I===null?E=O:I.sibling=O,I=O);return e&&C.forEach(function(j){return t(p,j)}),oe&&cn(p,x),E}function g(p,m,v,S){var E=yr(v);if(typeof E!="function")throw Error(N(150));if(v=E.call(v),v==null)throw Error(N(151));for(var I=E=null,C=m,x=m=0,O=null,M=v.next();C!==null&&!M.done;x++,M=v.next()){C.index>x?(O=C,C=null):O=C.sibling;var j=f(p,C,M.value,S);if(j===null){C===null&&(C=O);break}e&&C&&j.alternate===null&&t(p,C),m=i(j,m,x),I===null?E=j:I.sibling=j,I=j,C=O}if(M.done)return n(p,C),oe&&cn(p,x),E;if(C===null){for(;!M.done;x++,M=v.next())M=h(p,M.value,S),M!==null&&(m=i(M,m,x),I===null?E=M:I.sibling=M,I=M);return oe&&cn(p,x),E}for(C=r(p,C);!M.done;x++,M=v.next())M=w(C,p,x,M.value,S),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?x:M.key),m=i(M,m,x),I===null?E=M:I.sibling=M,I=M);return e&&C.forEach(function(Z){return t(p,Z)}),oe&&cn(p,x),E}function T(p,m,v,S){if(typeof v=="object"&&v!==null&&v.type===Dn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ns:e:{for(var E=v.key,I=m;I!==null;){if(I.key===E){if(E=v.type,E===Dn){if(I.tag===7){n(p,I.sibling),m=s(I,v.props.children),m.return=p,p=m;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Bt&&Su(E)===I.type){n(p,I.sibling),m=s(I,v.props),m.ref=Sr(p,I,v),m.return=p,p=m;break e}n(p,I);break}else t(p,I);I=I.sibling}v.type===Dn?(m=vn(v.props.children,p.mode,S,v.key),m.return=p,p=m):(S=ai(v.type,v.key,v.props,null,p.mode,S),S.ref=Sr(p,m,v),S.return=p,p=S)}return o(p);case Ln:e:{for(I=v.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(p,m.sibling),m=s(m,v.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Uo(v,p.mode,S),m.return=p,p=m}return o(p);case Bt:return I=v._init,T(p,m,I(v._payload),S)}if(Rr(v))return y(p,m,v,S);if(yr(v))return g(p,m,v,S);Ws(p,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(p,m.sibling),m=s(m,v),m.return=p,p=m):(n(p,m),m=Fo(v,p.mode,S),m.return=p,p=m),o(p)):n(p,m)}return T}var sr=Rf(!0),Nf=Rf(!1),Ti=sn(null),Ai=null,Vn=null,Ml=null;function Pl(){Ml=Vn=Ai=null}function jl(e){var t=Ti.current;se(Ti),e._currentValue=t}function La(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){Ai=e,Ml=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(Ai===null)throw Error(N(308));Vn=e,Ai.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var mn=null;function Fl(e){mn===null?mn=[e]:mn.push(e)}function Lf(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Fl(t)):(n.next=s.next,s.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Ul(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Dt(e,n)}return s=r.interleaved,s===null?(t.next=t,Fl(r)):(t.next=s.next,s.next=t),r.interleaved=t,Dt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,El(e,n)}}function Eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ki(e,t,n,r){var s=e.updateQueue;Vt=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var h=s.baseState;o=0,d=c=l=null,a=i;do{var f=a.lane,w=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,g=a;switch(f=t,w=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){h=y.call(w,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,f=typeof y=="function"?y.call(w,h,f):y,f==null)break e;h=ue({},h,f);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,l=h):d=d.next=w,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(l=h),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);En|=o,e.lanes=o,e.memoizedState=h}}function Tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(N(191,s));s.call(r)}}}var xs={},wt=sn(xs),is=sn(xs),os=sn(xs);function pn(e){if(e===xs)throw Error(N(174));return e}function Bl(e,t){switch(te(os,t),te(is,e),te(wt,xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:da(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=da(t,e)}se(wt),te(wt,t)}function ir(){se(wt),se(is),se(os)}function Of(e){pn(os.current);var t=pn(wt.current),n=da(t,e.type);t!==n&&(te(is,e),te(wt,n))}function Vl(e){is.current===e&&(se(wt),se(is))}var ae=sn(0);function Ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Lo=[];function Wl(){for(var e=0;e<Lo.length;e++)Lo[e]._workInProgressVersionPrimary=null;Lo.length=0}var ni=Pt.ReactCurrentDispatcher,Do=Pt.ReactCurrentBatchConfig,Sn=0,ce=null,ye=null,xe=null,Ci=!1,Vr=!1,as=0,Qy=0;function ke(){throw Error(N(321))}function Hl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function _l(e,t,n,r,s,i){if(Sn=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?nv:rv,e=n(r,s),Vr){i=0;do{if(Vr=!1,as=0,25<=i)throw Error(N(301));i+=1,xe=ye=null,t.updateQueue=null,ni.current=sv,e=n(r,s)}while(Vr)}if(ni.current=Ri,t=ye!==null&&ye.next!==null,Sn=0,xe=ye=ce=null,Ci=!1,t)throw Error(N(300));return e}function Gl(){var e=as!==0;return as=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ce.memoizedState=xe=e:xe=xe.next=e,xe}function ot(){if(ye===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=xe===null?ce.memoizedState:xe.next;if(t!==null)xe=t,ye=e;else{if(e===null)throw Error(N(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},xe===null?ce.memoizedState=xe=e:xe=xe.next=e}return xe}function ls(e,t){return typeof t=="function"?t(e):t}function Oo(e){var t=ot(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,c=i;do{var d=c.lane;if((Sn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ce.lanes|=d,En|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=a,mt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,ce.lanes|=i,En|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mo(e){var t=ot(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);mt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mf(){}function Pf(e,t){var n=ce,r=ot(),s=t(),i=!mt(r.memoizedState,s);if(i&&(r.memoizedState=s,Be=!0),r=r.queue,zl(Uf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,cs(9,Ff.bind(null,n,r,s,t),void 0,null),be===null)throw Error(N(349));Sn&30||jf(n,t,s)}return s}function jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ff(e,t,n,r){t.value=n,t.getSnapshot=r,Bf(t)&&Vf(e)}function Uf(e,t,n){return n(function(){Bf(t)&&Vf(e)})}function Bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Vf(e){var t=Dt(e,1);t!==null&&ft(t,e,1,-1)}function Au(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t.queue=e,e=e.dispatch=tv.bind(null,ce,e),[t.memoizedState,e]}function cs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Wf(){return ot().memoizedState}function ri(e,t,n,r){var s=gt();ce.flags|=e,s.memoizedState=cs(1|t,n,void 0,r===void 0?null:r)}function qi(e,t,n,r){var s=ot();r=r===void 0?null:r;var i=void 0;if(ye!==null){var o=ye.memoizedState;if(i=o.destroy,r!==null&&Hl(r,o.deps)){s.memoizedState=cs(t,n,i,r);return}}ce.flags|=e,s.memoizedState=cs(1|t,n,i,r)}function ku(e,t){return ri(8390656,8,e,t)}function zl(e,t){return qi(2048,8,e,t)}function Hf(e,t){return qi(4,2,e,t)}function _f(e,t){return qi(4,4,e,t)}function Gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zf(e,t,n){return n=n!=null?n.concat([e]):null,qi(4,4,Gf.bind(null,t,e),n)}function Yl(){}function Yf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Kf(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jf(e,t,n){return Sn&21?(mt(n,t)||(n=Qh(),ce.lanes|=n,En|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function Xy(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Do.transition;Do.transition={};try{e(!1),t()}finally{ee=n,Do.transition=r}}function $f(){return ot().memoizedState}function ev(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zf(e))qf(t,n);else if(n=Lf(e,t,n,r),n!==null){var s=Me();ft(n,e,r,s),Qf(n,t,r)}}function tv(e,t,n){var r=qt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zf(e))qf(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,mt(a,o)){var l=t.interleaved;l===null?(s.next=s,Fl(t)):(s.next=l.next,l.next=s),t.interleaved=s;return}}catch{}finally{}n=Lf(e,t,s,r),n!==null&&(s=Me(),ft(n,e,r,s),Qf(n,t,r))}}function Zf(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function qf(e,t){Vr=Ci=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,El(e,n)}}var Ri={readContext:it,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},nv={readContext:it,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:ku,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,Gf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ev.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:Yl,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=Xy.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,s=gt();if(oe){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),be===null)throw Error(N(349));Sn&30||jf(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,ku(Uf.bind(null,r,i,e),[e]),r.flags|=2048,cs(9,Ff.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=be.identifierPrefix;if(oe){var n=At,r=Tt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=as++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rv={readContext:it,useCallback:Yf,useContext:it,useEffect:zl,useImperativeHandle:zf,useInsertionEffect:Hf,useLayoutEffect:_f,useMemo:Kf,useReducer:Oo,useRef:Wf,useState:function(){return Oo(ls)},useDebugValue:Yl,useDeferredValue:function(e){var t=ot();return Jf(t,ye.memoizedState,e)},useTransition:function(){var e=Oo(ls)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Pf,useId:$f,unstable_isNewReconciler:!1},sv={readContext:it,useCallback:Yf,useContext:it,useEffect:zl,useImperativeHandle:zf,useInsertionEffect:Hf,useLayoutEffect:_f,useMemo:Kf,useReducer:Mo,useRef:Wf,useState:function(){return Mo(ls)},useDebugValue:Yl,useDeferredValue:function(e){var t=ot();return ye===null?t.memoizedState=e:Jf(t,ye.memoizedState,e)},useTransition:function(){var e=Mo(ls)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Pf,useId:$f,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Qi={isMounted:function(e){return(e=e._reactInternals)?kn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Me(),s=qt(e),i=It(r,s);i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,s),t!==null&&(ft(t,e,s,r),ti(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Me(),s=qt(e),i=It(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,s),t!==null&&(ft(t,e,s,r),ti(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Me(),r=qt(e),s=It(n,r);s.tag=2,t!=null&&(s.callback=t),t=$t(e,s,r),t!==null&&(ft(t,e,r,n),ti(t,e,r))}};function Iu(e,t,n,r,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!ts(n,r)||!ts(s,i):!0}function Xf(e,t,n){var r=!1,s=en,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(s=We(t)?xn:Le.current,r=t.contextTypes,i=(r=r!=null)?nr(e,s):en),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Cu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qi.enqueueReplaceState(t,t.state,null)}function Oa(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ul(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=it(i):(i=We(t)?xn:Le.current,s.context=nr(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Da(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Qi.enqueueReplaceState(s,s.state,null),ki(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=Dg(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Po(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function em(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Li||(Li=!0,Ga=r),Ma(e,t)},n}function tm(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ma(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ru(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iv;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=wv.bind(null,e,t,n),t.then(e,e))}function Nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var ov=Pt.ReactCurrentOwner,Be=!1;function Oe(e,t,n,r){t.child=e===null?Nf(t,null,n,r):sr(t,e.child,n,r)}function Du(e,t,n,r,s){n=n.render;var i=t.ref;return Xn(t,s),r=_l(e,t,n,r,i,s),n=Gl(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ot(e,t,s)):(oe&&n&&Ll(t),t.flags|=1,Oe(e,t,r,s),t.child)}function Ou(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!ec(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,nm(e,t,i,r,s)):(e=ai(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(o,r)&&e.ref===t.ref)return Ot(e,t,s)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function nm(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(ts(i,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Ot(e,t,s)}return Pa(e,t,n,r,s)}function rm(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Hn,_e),_e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Hn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Hn,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Hn,_e),_e|=r;return Oe(e,t,s,n),t.child}function sm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pa(e,t,n,r,s){var i=We(n)?xn:Le.current;return i=nr(t,i),Xn(t,s),n=_l(e,t,n,r,i,s),r=Gl(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ot(e,t,s)):(oe&&r&&Ll(t),t.flags|=1,Oe(e,t,n,s),t.child)}function Mu(e,t,n,r,s){if(We(n)){var i=!0;bi(t)}else i=!1;if(Xn(t,s),t.stateNode===null)si(e,t),Xf(t,n,r),Oa(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=We(n)?xn:Le.current,c=nr(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Cu(t,o,r,c),Vt=!1;var f=t.memoizedState;o.state=f,ki(t,r,o,s),l=t.memoizedState,a!==r||f!==l||Ve.current||Vt?(typeof d=="function"&&(Da(t,n,d,r),l=t.memoizedState),(a=Vt||Iu(t,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Df(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ct(t.type,a),o.props=c,h=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=We(n)?xn:Le.current,l=nr(t,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Cu(t,o,r,l),Vt=!1,f=t.memoizedState,o.state=f,ki(t,r,o,s);var y=t.memoizedState;a!==h||f!==y||Ve.current||Vt?(typeof w=="function"&&(Da(t,n,w,r),y=t.memoizedState),(c=Vt||Iu(t,n,c,r,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return ja(e,t,n,r,i,s)}function ja(e,t,n,r,s,i){sm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&wu(t,n,!1),Ot(e,t,i);r=t.stateNode,ov.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,a,i)):Oe(e,t,a,i),t.memoizedState=r.state,s&&wu(t,n,!0),t.child}function im(e){var t=e.stateNode;t.pendingContext?vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vu(e,t.context,!1),Bl(e,t.containerInfo)}function Pu(e,t,n,r,s){return rr(),Ol(s),t.flags|=256,Oe(e,t,n,r),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,t,n){var r=t.pendingProps,s=ae.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),te(ae,s&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=to(o,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ua(n),t.memoizedState=Fa,e):Kl(t,o));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return av(e,t,o,r,a,s,n);if(i){i=r.fallback,o=t.mode,s=e.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qt(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Qt(a,i):(i=vn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ua(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Fa,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kl(e,t){return t=to({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hs(e,t,n,r){return r!==null&&Ol(r),sr(t,e.child,null,n),e=Kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function av(e,t,n,r,s,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Po(Error(N(422))),Hs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=to({mode:"visible",children:r.children},s,0,null),i=vn(i,s,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sr(t,e.child,null,o),t.child.memoizedState=Ua(o),t.memoizedState=Fa,i);if(!(t.mode&1))return Hs(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=Po(i,r,void 0),Hs(e,t,o,r)}if(a=(o&e.childLanes)!==0,Be||a){if(r=be,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Dt(e,s),ft(r,e,s,-1))}return Xl(),r=Po(Error(N(421))),Hs(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=xv.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Ge=Jt(s.nextSibling),ze=t,oe=!0,dt=null,e!==null&&(tt[nt++]=Tt,tt[nt++]=At,tt[nt++]=bn,Tt=e.id,At=e.overflow,bn=t),t=Kl(t,r.children),t.flags|=4096,t)}function ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),La(e.return,t,n)}function jo(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function am(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Oe(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,n,t);else if(e.tag===19)ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ii(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),jo(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ii(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}jo(t,!0,n,null,i);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function lv(e,t,n){switch(t.tag){case 3:im(t),rr();break;case 5:Of(t);break;case 1:We(t.type)&&bi(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;te(Ti,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?om(e,t,n):(te(ae,ae.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return am(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,rm(e,t,n)}return Ot(e,t,n)}var lm,Ba,cm,um;lm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ba=function(){};cm=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,pn(wt.current);var i=null;switch(n){case"input":s=aa(e,s),r=aa(e,r),i=[];break;case"select":s=ue({},s,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":s=ua(e,s),r=ua(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wi)}ha(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&re("scroll",e),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};um=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cv(e,t,n){var r=t.pendingProps;switch(Dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return We(t.type)&&xi(),Ie(t),null;case 3:return r=t.stateNode,ir(),se(Ve),se(Le),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Ka(dt),dt=null))),Ba(e,t),Ie(t),null;case 5:Vl(t);var s=pn(os.current);if(n=t.type,e!==null&&t.stateNode!=null)cm(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ie(t),null}if(e=pn(wt.current),Vs(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[yt]=t,r[ss]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(s=0;s<Lr.length;s++)re(Lr[s],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":zc(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Kc(r,i),re("invalid",r)}ha(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Bs(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Bs(r.textContent,a,e),s=["children",""+a]):Jr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Ls(r),Yc(r,i,!0);break;case"textarea":Ls(r),Jc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wi)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[yt]=t,e[ss]=r,lm(e,t,!1,!1),t.stateNode=e;e:{switch(o=fa(n,r),n){case"dialog":re("cancel",e),re("close",e),s=r;break;case"iframe":case"object":case"embed":re("load",e),s=r;break;case"video":case"audio":for(s=0;s<Lr.length;s++)re(Lr[s],e);s=r;break;case"source":re("error",e),s=r;break;case"img":case"image":case"link":re("error",e),re("load",e),s=r;break;case"details":re("toggle",e),s=r;break;case"input":zc(e,r),s=aa(e,r),re("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=ue({},r,{value:void 0}),re("invalid",e);break;case"textarea":Kc(e,r),s=ua(e,r),re("invalid",e);break;default:s=r}ha(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Vh(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Uh(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$r(e,l):typeof l=="number"&&$r(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jr.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",e):l!=null&&yl(e,i,l,o))}switch(n){case"input":Ls(e),Yc(e,r,!1);break;case"textarea":Ls(e),Jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$n(e,!!r.multiple,i,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)um(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=pn(os.current),pn(wt.current),Vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(i=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Bs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Ie(t),null;case 13:if(se(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&t.mode&1&&!(t.flags&128))Cf(),rr(),t.flags|=98560,i=!1;else if(i=Vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[yt]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else dt!==null&&(Ka(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ve===0&&(ve=3):Xl())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return ir(),Ba(e,t),e===null&&ns(t.stateNode.containerInfo),Ie(t),null;case 10:return jl(t.type._context),Ie(t),null;case 17:return We(t.type)&&xi(),Ie(t),null;case 19:if(se(ae),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Er(i,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ii(e),o!==null){for(t.flags|=128,Er(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>ar&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ii(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!oe)return Ie(t),null}else 2*pe()-i.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function uv(e,t){switch(Dl(t),t.tag){case 1:return We(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),se(Ve),se(Le),Wl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vl(t),null;case 13:if(se(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ae),null;case 4:return ir(),null;case 10:return jl(t.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var _s=!1,Re=!1,dv=typeof WeakSet=="function"?WeakSet:Set,V=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Va(e,t,n){try{n()}catch(r){fe(e,t,r)}}var Fu=!1;function hv(e,t){if(Ea=gi,e=pf(),Nl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=e,f=null;t:for(;;){for(var w;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(w=h.firstChild)!==null;)f=h,h=w;for(;;){if(h===e)break t;if(f===n&&++c===s&&(a=o),f===i&&++d===r&&(l=o),(w=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ta={focusedElem:e,selectionRange:n},gi=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,T=y.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?g:ct(t.type,g),T);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(S){fe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return y=Fu,Fu=!1,y}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Va(t,n,i)}s=s.next}while(s!==r)}}function Xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dm(e){var t=e.alternate;t!==null&&(e.alternate=null,dm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[ss],delete t[Ia],delete t[Jy],delete t[$y])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hm(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}var Se=null,ut=!1;function jt(e,t,n){for(n=n.child;n!==null;)fm(e,t,n),n=n.sibling}function fm(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(zi,n)}catch{}switch(n.tag){case 5:Re||Wn(n,t);case 6:var r=Se,s=ut;Se=null,jt(e,t,n),Se=r,ut=s,Se!==null&&(ut?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ut?(e=Se,n=n.stateNode,e.nodeType===8?Ro(e.parentNode,n):e.nodeType===1&&Ro(e,n),Xr(e)):Ro(Se,n.stateNode));break;case 4:r=Se,s=ut,Se=n.stateNode.containerInfo,ut=!0,jt(e,t,n),Se=r,ut=s;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Va(n,t,o),s=s.next}while(s!==r)}jt(e,t,n);break;case 1:if(!Re&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,jt(e,t,n),Re=r):jt(e,t,n);break;default:jt(e,t,n)}}function Bu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dv),t.forEach(function(r){var s=bv.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,ut=!1;break e;case 3:Se=a.stateNode.containerInfo,ut=!0;break e;case 4:Se=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(Se===null)throw Error(N(160));fm(i,o,s),Se=null,ut=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){fe(s,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mm(t,e),t=t.sibling}function mm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),pt(e),r&4){try{Wr(3,e,e.return),Xi(3,e)}catch(g){fe(e,e.return,g)}try{Wr(5,e,e.return)}catch(g){fe(e,e.return,g)}}break;case 1:at(t,e),pt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(at(t,e),pt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var s=e.stateNode;try{$r(s,"")}catch(g){fe(e,e.return,g)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ph(s,i),fa(a,o);var c=fa(a,i);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Vh(s,h):d==="dangerouslySetInnerHTML"?Uh(s,h):d==="children"?$r(s,h):yl(s,d,h,c)}switch(a){case"input":la(s,i);break;case"textarea":jh(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?$n(s,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?$n(s,!!i.multiple,i.defaultValue,!0):$n(s,!!i.multiple,i.multiple?[]:"",!1))}s[ss]=i}catch(g){fe(e,e.return,g)}}break;case 6:if(at(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(N(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(g){fe(e,e.return,g)}}break;case 3:if(at(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(g){fe(e,e.return,g)}break;case 4:at(t,e),pt(e);break;case 13:at(t,e),pt(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zl=pe())),r&4&&Bu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||d,at(t,e),Re=c):at(t,e),pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(V=e,d=e.child;d!==null;){for(h=V=d;V!==null;){switch(f=V,w=f.child,f.tag){case 0:case 11:case 14:case 15:Wr(4,f,f.return);break;case 1:Wn(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){fe(r,n,g)}}break;case 5:Wn(f,f.return);break;case 22:if(f.memoizedState!==null){Wu(h);continue}}w!==null?(w.return=f,V=w):Wu(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Bh("display",o))}catch(g){fe(e,e.return,g)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){fe(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:at(t,e),pt(e),r&4&&Bu(e);break;case 21:break;default:at(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hm(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&($r(s,""),r.flags&=-33);var i=Uu(e);_a(e,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Uu(e);Ha(e,a,o);break;default:throw Error(N(161))}}catch(l){fe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function fv(e,t,n){V=e,pm(e)}function pm(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var s=V,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||_s;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||Re;a=_s;var c=Re;if(_s=o,(Re=l)&&!c)for(V=s;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?Hu(s):l!==null?(l.return=o,V=l):Hu(s);for(;i!==null;)V=i,pm(i),i=i.sibling;V=s,_s=a,Re=c}Vu(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,V=i):Vu(e)}}function Vu(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Xi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Tu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Xr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Re||t.flags&512&&Wa(t)}catch(f){fe(t,t.return,f)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function Wu(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function Hu(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xi(4,t)}catch(l){fe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(l){fe(t,s,l)}}var i=t.return;try{Wa(t)}catch(l){fe(t,i,l)}break;case 5:var o=t.return;try{Wa(t)}catch(l){fe(t,o,l)}}}catch(l){fe(t,t.return,l)}if(t===e){V=null;break}var a=t.sibling;if(a!==null){a.return=t.return,V=a;break}V=t.return}}var mv=Math.ceil,Ni=Pt.ReactCurrentDispatcher,Jl=Pt.ReactCurrentOwner,st=Pt.ReactCurrentBatchConfig,q=0,be=null,ge=null,Te=0,_e=0,Hn=sn(0),ve=0,us=null,En=0,eo=0,$l=0,Hr=null,Ue=null,Zl=0,ar=1/0,St=null,Li=!1,Ga=null,Zt=null,Gs=!1,Gt=null,Di=0,_r=0,za=null,ii=-1,oi=0;function Me(){return q&6?pe():ii!==-1?ii:ii=pe()}function qt(e){return e.mode&1?q&2&&Te!==0?Te&-Te:qy.transition!==null?(oi===0&&(oi=Qh()),oi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function ft(e,t,n,r){if(50<_r)throw _r=0,za=null,Error(N(185));ys(e,n,r),(!(q&2)||e!==be)&&(e===be&&(!(q&2)&&(eo|=n),ve===4&&Ht(e,Te)),He(e,r),n===1&&q===0&&!(t.mode&1)&&(ar=pe()+500,Zi&&on()))}function He(e,t){var n=e.callbackNode;qg(e,t);var r=pi(e,e===be?Te:0);if(r===0)n!==null&&qc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qc(n),t===1)e.tag===0?Zy(_u.bind(null,e)):Af(_u.bind(null,e)),Yy(function(){!(q&6)&&on()}),n=null;else{switch(Xh(r)){case 1:n=Sl;break;case 4:n=Zh;break;case 16:n=mi;break;case 536870912:n=qh;break;default:n=mi}n=Em(n,gm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gm(e,t){if(ii=-1,oi=0,q&6)throw Error(N(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=pi(e,e===be?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{t=r;var s=q;q|=2;var i=vm();(be!==e||Te!==t)&&(St=null,ar=pe()+500,yn(e,t));do try{yv();break}catch(a){ym(e,a)}while(!0);Pl(),Ni.current=i,q=s,ge!==null?t=0:(be=null,Te=0,t=ve)}if(t!==0){if(t===2&&(s=va(e),s!==0&&(r=s,t=Ya(e,s))),t===1)throw n=us,yn(e,0),Ht(e,r),He(e,pe()),n;if(t===6)Ht(e,r);else{if(s=e.current.alternate,!(r&30)&&!pv(s)&&(t=Oi(e,r),t===2&&(i=va(e),i!==0&&(r=i,t=Ya(e,i))),t===1))throw n=us,yn(e,0),Ht(e,r),He(e,pe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:un(e,Ue,St);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Zl+500-pe(),10<t)){if(pi(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ka(un.bind(null,e,Ue,St),t);break}un(e,Ue,St);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-ht(r);i=1<<o,o=t[o],o>s&&(s=o),r&=~i}if(r=s,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mv(r/1960))-r,10<r){e.timeoutHandle=ka(un.bind(null,e,Ue,St),r);break}un(e,Ue,St);break;case 5:un(e,Ue,St);break;default:throw Error(N(329))}}}return He(e,pe()),e.callbackNode===n?gm.bind(null,e):null}function Ya(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Ka(t)),e}function Ka(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function pv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!mt(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~$l,t&=~eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function _u(e){if(q&6)throw Error(N(327));er();var t=pi(e,0);if(!(t&1))return He(e,pe()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=va(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=us,yn(e,0),Ht(e,t),He(e,pe()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Ue,St),He(e,pe()),null}function ql(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(ar=pe()+500,Zi&&on())}}function Tn(e){Gt!==null&&Gt.tag===0&&!(q&6)&&er();var t=q;q|=1;var n=st.transition,r=ee;try{if(st.transition=null,ee=1,e)return e()}finally{ee=r,st.transition=n,q=t,!(q&6)&&on()}}function Ql(){_e=Hn.current,se(Hn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zy(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Dl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:ir(),se(Ve),se(Le),Wl();break;case 5:Vl(r);break;case 4:ir();break;case 13:se(ae);break;case 19:se(ae);break;case 10:jl(r.type._context);break;case 22:case 23:Ql()}n=n.return}if(be=e,ge=e=Qt(e.current,null),Te=_e=t,ve=0,us=null,$l=eo=En=0,Ue=Hr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}mn=null}return e}function ym(e,t){do{var n=ge;try{if(Pl(),ni.current=Ri,Ci){for(var r=ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ci=!1}if(Sn=0,xe=ye=ce=null,Vr=!1,as=0,Jl.current=null,n===null||n.return===null){ve=1,us=t,ge=null;break}e:{var i=e,o=n.return,a=n,l=t;if(t=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Nu(o);if(w!==null){w.flags&=-257,Lu(w,o,a,i,t),w.mode&1&&Ru(i,c,t),t=w,l=c;var y=t.updateQueue;if(y===null){var g=new Set;g.add(l),t.updateQueue=g}else y.add(l);break e}else{if(!(t&1)){Ru(i,c,t),Xl();break e}l=Error(N(426))}}else if(oe&&a.mode&1){var T=Nu(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Lu(T,o,a,i,t),Ol(or(l,a));break e}}i=l=or(l,a),ve!==4&&(ve=2),Hr===null?Hr=[i]:Hr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=em(i,l,t);Eu(i,p);break e;case 1:a=l;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zt===null||!Zt.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=tm(i,a,t);Eu(i,S);break e}}i=i.return}while(i!==null)}xm(n)}catch(E){t=E,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function vm(){var e=Ni.current;return Ni.current=Ri,e===null?Ri:e}function Xl(){(ve===0||ve===3||ve===2)&&(ve=4),be===null||!(En&268435455)&&!(eo&268435455)||Ht(be,Te)}function Oi(e,t){var n=q;q|=2;var r=vm();(be!==e||Te!==t)&&(St=null,yn(e,t));do try{gv();break}catch(s){ym(e,s)}while(!0);if(Pl(),q=n,Ni.current=r,ge!==null)throw Error(N(261));return be=null,Te=0,ve}function gv(){for(;ge!==null;)wm(ge)}function yv(){for(;ge!==null&&!Hg();)wm(ge)}function wm(e){var t=Sm(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?xm(e):ge=t,Jl.current=null}function xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=uv(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,ge=null;return}}else if(n=cv(n,t,_e),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ve===0&&(ve=5)}function un(e,t,n){var r=ee,s=st.transition;try{st.transition=null,ee=1,vv(e,t,n,r)}finally{st.transition=s,ee=r}return null}function vv(e,t,n,r){do er();while(Gt!==null);if(q&6)throw Error(N(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qg(e,i),e===be&&(ge=be=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gs||(Gs=!0,Em(mi,function(){return er(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=st.transition,st.transition=null;var o=ee;ee=1;var a=q;q|=4,Jl.current=null,hv(e,n),mm(n,e),Uy(Ta),gi=!!Ea,Ta=Ea=null,e.current=n,fv(n),_g(),q=a,ee=o,st.transition=i}else e.current=n;if(Gs&&(Gs=!1,Gt=e,Di=s),i=e.pendingLanes,i===0&&(Zt=null),Yg(n.stateNode),He(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Li)throw Li=!1,e=Ga,Ga=null,e;return Di&1&&e.tag!==0&&er(),i=e.pendingLanes,i&1?e===za?_r++:(_r=0,za=e):_r=0,on(),null}function er(){if(Gt!==null){var e=Xh(Di),t=st.transition,n=ee;try{if(st.transition=null,ee=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Di=0,q&6)throw Error(N(331));var s=q;for(q|=4,V=e.current;V!==null;){var i=V,o=i.child;if(V.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(V=c;V!==null;){var d=V;switch(d.tag){case 0:case 11:case 15:Wr(8,d,i)}var h=d.child;if(h!==null)h.return=d,V=h;else for(;V!==null;){d=V;var f=d.sibling,w=d.return;if(dm(d),d===c){V=null;break}if(f!==null){f.return=w,V=f;break}V=w}}}var y=i.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var T=g.sibling;g.sibling=null,g=T}while(g!==null)}}V=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,V=o;else e:for(;V!==null;){if(i=V,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Wr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,V=p;break e}V=i.return}}var m=e.current;for(V=m;V!==null;){o=V;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,V=v;else e:for(o=m;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xi(9,a)}}catch(E){fe(a,a.return,E)}if(a===o){V=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,V=S;break e}V=a.return}}if(q=s,on(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{ee=n,st.transition=t}}return!1}function Gu(e,t,n){t=or(n,t),t=em(e,t,1),e=$t(e,t,1),t=Me(),e!==null&&(ys(e,1,t),He(e,t))}function fe(e,t,n){if(e.tag===3)Gu(e,e,n);else for(;t!==null;){if(t.tag===3){Gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=or(n,e),e=tm(t,e,1),t=$t(t,e,1),e=Me(),t!==null&&(ys(t,1,e),He(t,e));break}}t=t.return}}function wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Te&n)===n&&(ve===4||ve===3&&(Te&130023424)===Te&&500>pe()-Zl?yn(e,0):$l|=n),He(e,t)}function bm(e,t){t===0&&(e.mode&1?(t=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):t=1);var n=Me();e=Dt(e,t),e!==null&&(ys(e,t,n),He(e,n))}function xv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function bv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),bm(e,n)}var Sm;Sm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,lv(e,t,n);Be=!!(e.flags&131072)}else Be=!1,oe&&t.flags&1048576&&kf(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;si(e,t),e=t.pendingProps;var s=nr(t,Le.current);Xn(t,n),s=_l(null,t,r,e,s,n);var i=Gl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(i=!0,bi(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ul(t),s.updater=Qi,t.stateNode=s,s._reactInternals=t,Oa(t,r,e,n),t=ja(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Ll(t),Oe(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(si(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Ev(r),e=ct(r,e),s){case 0:t=Pa(null,t,r,e,n);break e;case 1:t=Mu(null,t,r,e,n);break e;case 11:t=Du(null,t,r,e,n);break e;case 14:t=Ou(null,t,r,ct(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),Pa(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),Mu(e,t,r,s,n);case 3:e:{if(im(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Df(e,t),ki(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=or(Error(N(423)),t),t=Pu(e,t,r,n,s);break e}else if(r!==s){s=or(Error(N(424)),t),t=Pu(e,t,r,n,s);break e}else for(Ge=Jt(t.stateNode.containerInfo.firstChild),ze=t,oe=!0,dt=null,n=Nf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===s){t=Ot(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Of(t),e===null&&Na(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,Aa(r,s)?o=null:i!==null&&Aa(r,i)&&(t.flags|=32),sm(e,t),Oe(e,t,o,n),t.child;case 6:return e===null&&Na(t),null;case 13:return om(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),Du(e,t,r,s,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,te(Ti,r._currentValue),r._currentValue=o,i!==null)if(mt(i.value,o)){if(i.children===s.children&&!Ve.current){t=Ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=It(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),La(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),La(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Oe(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,Xn(t,n),s=it(s),r=r(s),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,s=ct(r,t.pendingProps),s=ct(r.type,s),Ou(e,t,r,s,n);case 15:return nm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:ct(r,s),si(e,t),t.tag=1,We(r)?(e=!0,bi(t)):e=!1,Xn(t,n),Xf(t,r,s),Oa(t,r,s,n),ja(null,t,r,!0,e,n);case 19:return am(e,t,n);case 22:return rm(e,t,n)}throw Error(N(156,t.tag))};function Em(e,t){return $h(e,t)}function Sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new Sv(e,t,n,r)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ev(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===wl)return 11;if(e===xl)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ai(e,t,n,r,s,i){var o=2;if(r=e,typeof e=="function")ec(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dn:return vn(n.children,s,i,t);case vl:o=8,s|=8;break;case ra:return e=rt(12,n,t,s|2),e.elementType=ra,e.lanes=i,e;case sa:return e=rt(13,n,t,s),e.elementType=sa,e.lanes=i,e;case ia:return e=rt(19,n,t,s),e.elementType=ia,e.lanes=i,e;case Dh:return to(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nh:o=10;break e;case Lh:o=9;break e;case wl:o=11;break e;case xl:o=14;break e;case Bt:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=rt(o,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function to(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Dh,e.lanes=n,e.stateNode={isHidden:!1},e}function Fo(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Uo(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tv(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vo(0),this.expirationTimes=vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function tc(e,t,n,r,s,i,o,a,l){return e=new Tv(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(i),e}function Av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tm(e){if(!e)return en;e=e._reactInternals;e:{if(kn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(We(n))return Tf(e,n,t)}return t}function Am(e,t,n,r,s,i,o,a,l){return e=tc(n,r,!0,e,s,i,o,a,l),e.context=Tm(null),n=e.current,r=Me(),s=qt(n),i=It(r,s),i.callback=t??null,$t(n,i,s),e.current.lanes=s,ys(e,s,r),He(e,r),e}function no(e,t,n,r){var s=t.current,i=Me(),o=qt(s);return n=Tm(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(s,t,o),e!==null&&(ft(e,s,o,i),ti(e,s,o)),o}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nc(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function kv(){return null}var km=typeof reportError=="function"?reportError:function(e){console.error(e)};function rc(e){this._internalRoot=e}ro.prototype.render=rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));no(e,t,null,null)};ro.prototype.unmount=rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){no(null,e,null,null)}),t[Lt]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=nf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&sf(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function so(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yu(){}function Iv(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Mi(o);i.call(c)}}var o=Am(t,r,e,0,null,!1,!1,"",Yu);return e._reactRootContainer=o,e[Lt]=o.current,ns(e.nodeType===8?e.parentNode:e),Tn(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=Mi(l);a.call(c)}}var l=tc(e,0,!1,null,null,!1,!1,"",Yu);return e._reactRootContainer=l,e[Lt]=l.current,ns(e.nodeType===8?e.parentNode:e),Tn(function(){no(t,l,n,r)}),l}function io(e,t,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Mi(o);a.call(l)}}no(t,o,e,s)}else o=Iv(n,t,e,s,r);return Mi(o)}ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(El(t,n|1),He(t,pe()),!(q&6)&&(ar=pe()+500,on()))}break;case 13:Tn(function(){var r=Dt(e,1);if(r!==null){var s=Me();ft(r,e,1,s)}}),nc(e,1)}};Tl=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=Me();ft(t,e,134217728,n)}nc(e,134217728)}};tf=function(e){if(e.tag===13){var t=qt(e),n=Dt(e,t);if(n!==null){var r=Me();ft(n,e,t,r)}nc(e,t)}};nf=function(){return ee};rf=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};pa=function(e,t,n){switch(t){case"input":if(la(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=$i(r);if(!s)throw Error(N(90));Mh(r),la(r,s)}}}break;case"textarea":jh(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};_h=ql;Gh=Tn;var Cv={usingClientEntryPoint:!1,Events:[ws,jn,$i,Wh,Hh,ql]},Tr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rv={bundleType:Tr.bundleType,version:Tr.version,rendererPackageName:Tr.rendererPackageName,rendererConfig:Tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kh(e),e===null?null:e.stateNode},findFiberByHostInstance:Tr.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{zi=zs.inject(Rv),vt=zs}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;$e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(t))throw Error(N(200));return Av(e,t,null,n)};$e.createRoot=function(e,t){if(!sc(e))throw Error(N(299));var n=!1,r="",s=km;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=tc(e,1,!1,null,null,n,!1,r,s),e[Lt]=t.current,ns(e.nodeType===8?e.parentNode:e),new rc(t)};$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Kh(t),e=e===null?null:e.stateNode,e};$e.flushSync=function(e){return Tn(e)};$e.hydrate=function(e,t,n){if(!so(t))throw Error(N(200));return io(null,e,t,!0,n)};$e.hydrateRoot=function(e,t,n){if(!sc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=km;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Am(t,null,e,1,n??null,s,!1,i,o),e[Lt]=t.current,ns(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new ro(t)};$e.render=function(e,t,n){if(!so(t))throw Error(N(200));return io(null,e,t,!1,n)};$e.unmountComponentAtNode=function(e){if(!so(e))throw Error(N(40));return e._reactRootContainer?(Tn(function(){io(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};$e.unstable_batchedUpdates=ql;$e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!so(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return io(e,t,n,!1,r)};$e.version="18.3.1-next-f1338f8080-20240426";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),kh.exports=$e;var Nv=kh.exports,Ku=Nv;ta.createRoot=Ku.createRoot,ta.hydrateRoot=Ku.hydrateRoot;const ic=A.createContext({});function oc(e){const t=A.useRef(null);return t.current===null&&(t.current=e()),t.current}const oo=A.createContext(null),ac=A.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Lv extends A.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Dv({children:e,isPresent:t}){const n=A.useId(),r=A.useRef(null),s=A.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=A.useContext(ac);return A.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=s.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return i&&(d.nonce=i),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),u.jsx(Lv,{isPresent:t,childRef:r,sizeRef:s,children:A.cloneElement(e,{ref:r})})}const Ov=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:s,presenceAffectsLayout:i,mode:o})=>{const a=oc(Mv),l=A.useId(),c=A.useCallback(h=>{a.set(h,!0);for(const f of a.values())if(!f)return;r&&r()},[a,r]),d=A.useMemo(()=>({id:l,initial:t,isPresent:n,custom:s,onExitComplete:c,register:h=>(a.set(h,!1),()=>a.delete(h))}),i?[Math.random(),c]:[n,c]);return A.useMemo(()=>{a.forEach((h,f)=>a.set(f,!1))},[n]),A.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=u.jsx(Dv,{isPresent:n,children:e})),u.jsx(oo.Provider,{value:d,children:e})};function Mv(){return new Map}function Cm(e=!0){const t=A.useContext(oo);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:s}=t,i=A.useId();A.useEffect(()=>{e&&s(i)},[e]);const o=A.useCallback(()=>e&&r&&r(i),[i,r,e]);return!n&&r?[!1,o]:[!0]}const Ys=e=>e.key||"";function Ju(e){const t=[];return A.Children.forEach(e,n=>{A.isValidElement(n)&&t.push(n)}),t}const lc=typeof window<"u",Rm=lc?A.useLayoutEffect:A.useEffect,Nm=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:s=!0,mode:i="sync",propagate:o=!1})=>{const[a,l]=Cm(o),c=A.useMemo(()=>Ju(e),[e]),d=o&&!a?[]:c.map(Ys),h=A.useRef(!0),f=A.useRef(c),w=oc(()=>new Map),[y,g]=A.useState(c),[T,p]=A.useState(c);Rm(()=>{h.current=!1,f.current=c;for(let S=0;S<T.length;S++){const E=Ys(T[S]);d.includes(E)?w.delete(E):w.get(E)!==!0&&w.set(E,!1)}},[T,d.length,d.join("-")]);const m=[];if(c!==y){let S=[...c];for(let E=0;E<T.length;E++){const I=T[E],C=Ys(I);d.includes(C)||(S.splice(E,0,I),m.push(I))}i==="wait"&&m.length&&(S=m),p(Ju(S)),g(c);return}const{forceRender:v}=A.useContext(ic);return u.jsx(u.Fragment,{children:T.map(S=>{const E=Ys(S),I=o&&!a?!1:c===T||d.includes(E),C=()=>{if(w.has(E))w.set(E,!0);else return;let x=!0;w.forEach(O=>{O||(x=!1)}),x&&(v==null||v(),p(f.current),o&&(l==null||l()),r&&r())};return u.jsx(Ov,{isPresent:I,initial:!h.current||n?void 0:!1,custom:I?void 0:t,presenceAffectsLayout:s,mode:i,onExitComplete:I?void 0:C,children:S},E)})})},Ye=e=>e;let Lm=Ye;function cc(e){let t;return()=>(t===void 0&&(t=e()),t)}const lr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ct=e=>e*1e3,Rt=e=>e/1e3,Pv={useManualTiming:!1};function jv(e){let t=new Set,n=new Set,r=!1,s=!1;const i=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){i.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,d=!1,h=!1)=>{const w=h&&r?t:n;return d&&i.add(c),w.has(c)||w.add(c),c},cancel:c=>{n.delete(c),i.delete(c)},process:c=>{if(o=c,r){s=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,s&&(s=!1,l.process(c))}};return l}const Ks=["read","resolveKeyframes","update","preRender","render","postRender"],Fv=40;function Dm(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,o=Ks.reduce((p,m)=>(p[m]=jv(i),p),{}),{read:a,resolveKeyframes:l,update:c,preRender:d,render:h,postRender:f}=o,w=()=>{const p=performance.now();n=!1,s.delta=r?1e3/60:Math.max(Math.min(p-s.timestamp,Fv),1),s.timestamp=p,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),d.process(s),h.process(s),f.process(s),s.isProcessing=!1,n&&t&&(r=!1,e(w))},y=()=>{n=!0,r=!0,s.isProcessing||e(w)};return{schedule:Ks.reduce((p,m)=>{const v=o[m];return p[m]=(S,E=!1,I=!1)=>(n||y(),v.schedule(S,E,I)),p},{}),cancel:p=>{for(let m=0;m<Ks.length;m++)o[Ks[m]].cancel(p)},state:s,steps:o}}const{schedule:ie,cancel:tn,state:Ee,steps:Bo}=Dm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0),Om=A.createContext({strict:!1}),$u={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},cr={};for(const e in $u)cr[e]={isEnabled:t=>$u[e].some(n=>!!t[n])};function Uv(e){for(const t in e)cr[t]={...cr[t],...e[t]}}const Bv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Pi(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Bv.has(e)}let Mm=e=>!Pi(e);function Vv(e){e&&(Mm=t=>t.startsWith("on")?!Pi(t):e(t))}try{Vv(require("@emotion/is-prop-valid").default)}catch{}function Wv(e,t,n){const r={};for(const s in e)s==="values"&&typeof e.values=="object"||(Mm(s)||n===!0&&Pi(s)||!t&&!Pi(s)||e.draggable&&s.startsWith("onDrag"))&&(r[s]=e[s]);return r}function Hv(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}const ao=A.createContext({});function ds(e){return typeof e=="string"||Array.isArray(e)}function lo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const uc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],dc=["initial",...uc];function co(e){return lo(e.animate)||dc.some(t=>ds(e[t]))}function Pm(e){return!!(co(e)||e.variants)}function _v(e,t){if(co(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ds(n)?n:void 0,animate:ds(r)?r:void 0}}return e.inherit!==!1?t:{}}function Gv(e){const{initial:t,animate:n}=_v(e,A.useContext(ao));return A.useMemo(()=>({initial:t,animate:n}),[Zu(t),Zu(n)])}function Zu(e){return Array.isArray(e)?e.join(" "):e}const zv=Symbol.for("motionComponentSymbol");function _n(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Yv(e,t,n){return A.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):_n(n)&&(n.current=r))},[t])}const hc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Kv="framerAppearId",jm="data-"+hc(Kv),{schedule:fc}=Dm(queueMicrotask,!1),Fm=A.createContext({});function Jv(e,t,n,r,s){var i,o;const{visualElement:a}=A.useContext(ao),l=A.useContext(Om),c=A.useContext(oo),d=A.useContext(ac).reducedMotion,h=A.useRef(null);r=r||l.renderer,!h.current&&r&&(h.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const f=h.current,w=A.useContext(Fm);f&&!f.projection&&s&&(f.type==="html"||f.type==="svg")&&$v(h.current,n,s,w);const y=A.useRef(!1);A.useInsertionEffect(()=>{f&&y.current&&f.update(n,c)});const g=n[jm],T=A.useRef(!!g&&!(!((i=window.MotionHandoffIsComplete)===null||i===void 0)&&i.call(window,g))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,g)));return Rm(()=>{f&&(y.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),fc.render(f.render),T.current&&f.animationState&&f.animationState.animateChanges())}),A.useEffect(()=>{f&&(!T.current&&f.animationState&&f.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,g)}),T.current=!1))}),f}function $v(e,t,n,r){const{layoutId:s,layout:i,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Um(e.parent)),e.projection.setOptions({layoutId:s,layout:i,alwaysMeasureLayout:!!o||a&&_n(a),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function Um(e){if(e)return e.options.allowProjection!==!1?e.projection:Um(e.parent)}function Zv({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:s}){var i,o;e&&Uv(e);function a(c,d){let h;const f={...A.useContext(ac),...c,layoutId:qv(c)},{isStatic:w}=f,y=Gv(c),g=r(c,w);if(!w&&lc){Qv();const T=Xv(f);h=T.MeasureLayout,y.visualElement=Jv(s,g,f,t,T.ProjectionNode)}return u.jsxs(ao.Provider,{value:y,children:[h&&y.visualElement?u.jsx(h,{visualElement:y.visualElement,...f}):null,n(s,c,Yv(g,y.visualElement,d),g,w,y.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(i=s.displayName)!==null&&i!==void 0?i:s.name)!==null&&o!==void 0?o:""})`}`;const l=A.forwardRef(a);return l[zv]=s,l}function qv({layoutId:e}){const t=A.useContext(ic).id;return t&&e!==void 0?t+"-"+e:e}function Qv(e,t){A.useContext(Om).strict}function Xv(e){const{drag:t,layout:n}=cr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const e0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mc(e){return typeof e!="string"||e.includes("-")?!1:!!(e0.indexOf(e)>-1||/[A-Z]/u.test(e))}function qu(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function pc(e,t,n,r){if(typeof t=="function"){const[s,i]=qu(r);t=t(n!==void 0?n:e.custom,s,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,i]=qu(r);t=t(n!==void 0?n:e.custom,s,i)}return t}const Ja=e=>Array.isArray(e),t0=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),n0=e=>Ja(e)?e[e.length-1]||0:e,Ne=e=>!!(e&&e.getVelocity);function li(e){const t=Ne(e)?e.get():e;return t0(t)?t.toValue():t}function r0({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,s,i){const o={latestValues:s0(r,s,i,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const Bm=e=>(t,n)=>{const r=A.useContext(ao),s=A.useContext(oo),i=()=>r0(e,t,r,s);return n?i():oc(i)};function s0(e,t,n,r){const s={},i=r(e,{});for(const f in i)s[f]=li(i[f]);let{initial:o,animate:a}=e;const l=co(e),c=Pm(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const h=d?a:o;if(h&&typeof h!="boolean"&&!lo(h)){const f=Array.isArray(h)?h:[h];for(let w=0;w<f.length;w++){const y=pc(e,f[w]);if(y){const{transitionEnd:g,transition:T,...p}=y;for(const m in p){let v=p[m];if(Array.isArray(v)){const S=d?v.length-1:0;v=v[S]}v!==null&&(s[m]=v)}for(const m in g)s[m]=g[m]}}}return s}const mr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],In=new Set(mr),Vm=e=>t=>typeof t=="string"&&t.startsWith(e),Wm=Vm("--"),i0=Vm("var(--"),gc=e=>i0(e)?o0.test(e.split("/*")[0].trim()):!1,o0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Hm=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Mt=(e,t,n)=>n>t?t:n<e?e:n,pr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},hs={...pr,transform:e=>Mt(0,1,e)},Js={...pr,default:1},bs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ut=bs("deg"),xt=bs("%"),z=bs("px"),a0=bs("vh"),l0=bs("vw"),Qu={...xt,parse:e=>xt.parse(e)/100,transform:e=>xt.transform(e*100)},c0={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},u0={rotate:Ut,rotateX:Ut,rotateY:Ut,rotateZ:Ut,scale:Js,scaleX:Js,scaleY:Js,scaleZ:Js,skew:Ut,skewX:Ut,skewY:Ut,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:hs,originX:Qu,originY:Qu,originZ:z},Xu={...pr,transform:Math.round},yc={...c0,...u0,zIndex:Xu,size:z,fillOpacity:hs,strokeOpacity:hs,numOctaves:Xu},d0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},h0=mr.length;function f0(e,t,n){let r="",s=!0;for(let i=0;i<h0;i++){const o=mr[i],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Hm(a,yc[o]);if(!l){s=!1;const d=d0[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,s?"":r):s&&(r="none"),r}function vc(e,t,n){const{style:r,vars:s,transformOrigin:i}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(In.has(l)){o=!0;continue}else if(Wm(l)){s[l]=c;continue}else{const d=Hm(c,yc[l]);l.startsWith("origin")?(a=!0,i[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=f0(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=i;r.transformOrigin=`${l} ${c} ${d}`}}const m0={offset:"stroke-dashoffset",array:"stroke-dasharray"},p0={offset:"strokeDashoffset",array:"strokeDasharray"};function g0(e,t,n=1,r=0,s=!0){e.pathLength=1;const i=s?m0:p0;e[i.offset]=z.transform(-r);const o=z.transform(t),a=z.transform(n);e[i.array]=`${o} ${a}`}function ed(e,t,n){return typeof e=="string"?e:z.transform(t+n*e)}function y0(e,t,n){const r=ed(t,e.x,e.width),s=ed(n,e.y,e.height);return`${r} ${s}`}function wc(e,{attrX:t,attrY:n,attrScale:r,originX:s,originY:i,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},d,h){if(vc(e,c,h),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:w,dimensions:y}=e;f.transform&&(y&&(w.transform=f.transform),delete f.transform),y&&(s!==void 0||i!==void 0||w.transform)&&(w.transformOrigin=y0(y,s!==void 0?s:.5,i!==void 0?i:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&g0(f,o,a,l,!1)}const xc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_m=()=>({...xc(),attrs:{}}),bc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Gm(e,{style:t,vars:n},r,s){Object.assign(e.style,t,s&&s.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const zm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ym(e,t,n,r){Gm(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(zm.has(s)?s:hc(s),t.attrs[s])}const ji={};function v0(e){Object.assign(ji,e)}function Km(e,{layout:t,layoutId:n}){return In.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ji[e]||e==="opacity")}function Sc(e,t,n){var r;const{style:s}=e,i={};for(const o in s)(Ne(s[o])||t.style&&Ne(t.style[o])||Km(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(i[o]=s[o]);return i}function Jm(e,t,n){const r=Sc(e,t,n);for(const s in e)if(Ne(e[s])||Ne(t[s])){const i=mr.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[i]=e[s]}return r}function w0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const td=["x","y","width","height","cx","cy","r"],x0={useVisualState:Bm({scrapeMotionValuesFromProps:Jm,createRenderState:_m,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:s})=>{if(!n)return;let i=!!e.drag;if(!i){for(const a in s)if(In.has(a)){i=!0;break}}if(!i)return;let o=!t;if(t)for(let a=0;a<td.length;a++){const l=td[a];e[l]!==t[l]&&(o=!0)}o&&ie.read(()=>{w0(n,r),ie.render(()=>{wc(r,s,bc(n.tagName),e.transformTemplate),Ym(n,r)})})}})},b0={useVisualState:Bm({scrapeMotionValuesFromProps:Sc,createRenderState:xc})};function $m(e,t,n){for(const r in t)!Ne(t[r])&&!Km(r,n)&&(e[r]=t[r])}function S0({transformTemplate:e},t){return A.useMemo(()=>{const n=xc();return vc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function E0(e,t){const n=e.style||{},r={};return $m(r,n,e),Object.assign(r,S0(e,t)),r}function T0(e,t){const n={},r=E0(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function A0(e,t,n,r){const s=A.useMemo(()=>{const i=_m();return wc(i,t,bc(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};$m(i,e.style,e),s.style={...i,...s.style}}return s}function k0(e=!1){return(n,r,s,{latestValues:i},o)=>{const l=(mc(n)?A0:T0)(r,i,o,n),c=Wv(r,typeof n=="string",e),d=n!==A.Fragment?{...c,...l,ref:s}:{},{children:h}=r,f=A.useMemo(()=>Ne(h)?h.get():h,[h]);return A.createElement(n,{...d,children:f})}}function I0(e,t){return function(r,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...mc(r)?x0:b0,preloadedFeatures:e,useRender:k0(s),createVisualElement:t,Component:r};return Zv(o)}}function Zm(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function uo(e,t,n){const r=e.getProps();return pc(r,t,n!==void 0?n:r.custom,e)}const C0=cc(()=>window.ScrollTimeline!==void 0);class R0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(s=>{if(C0()&&s.attachTimeline)return s.attachTimeline(t);if(typeof n=="function")return n(s)});return()=>{r.forEach((s,i)=>{s&&s(),this.animations[i].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class N0 extends R0{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function Ec(e,t){return e?e[t]||e.default||e:void 0}const $a=2e4;function qm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<$a;)t+=n,r=e.next(t);return t>=$a?1/0:t}function Tc(e){return typeof e=="function"}function nd(e,t){e.timeline=t,e.onfinish=null}const Ac=e=>Array.isArray(e)&&typeof e[0]=="number",L0={linearEasing:void 0};function D0(e,t){const n=cc(e);return()=>{var r;return(r=L0[t])!==null&&r!==void 0?r:n()}}const Fi=D0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Qm=(e,t,n=10)=>{let r="";const s=Math.max(Math.round(t/n),2);for(let i=0;i<s;i++)r+=e(lr(0,s-1,i))+", ";return`linear(${r.substring(0,r.length-2)})`};function Xm(e){return!!(typeof e=="function"&&Fi()||!e||typeof e=="string"&&(e in Za||Fi())||Ac(e)||Array.isArray(e)&&e.every(Xm))}const Dr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Za={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Dr([0,.65,.55,1]),circOut:Dr([.55,0,1,.45]),backIn:Dr([.31,.01,.66,-.59]),backOut:Dr([.33,1.53,.69,.99])};function ep(e,t){if(e)return typeof e=="function"&&Fi()?Qm(e,t):Ac(e)?Dr(e):Array.isArray(e)?e.map(n=>ep(n,t)||Za.easeOut):Za[e]}const lt={x:!1,y:!1};function tp(){return lt.x||lt.y}function O0(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const i=(r=void 0)!==null&&r!==void 0?r:s.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}function np(e,t){const n=O0(e),r=new AbortController,s={passive:!0,...t,signal:r.signal};return[n,s,()=>r.abort()]}function rd(e){return t=>{t.pointerType==="touch"||tp()||e(t)}}function M0(e,t,n={}){const[r,s,i]=np(e,n),o=rd(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const d=rd(h=>{c(h),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,s)});return r.forEach(a=>{a.addEventListener("pointerenter",o,s)}),i}const rp=(e,t)=>t?e===t?!0:rp(e,t.parentElement):!1,kc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,P0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function j0(e){return P0.has(e.tagName)||e.tabIndex!==-1}const Or=new WeakSet;function sd(e){return t=>{t.key==="Enter"&&e(t)}}function Vo(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const F0=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=sd(()=>{if(Or.has(n))return;Vo(n,"down");const s=sd(()=>{Vo(n,"up")}),i=()=>Vo(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function id(e){return kc(e)&&!tp()}function U0(e,t,n={}){const[r,s,i]=np(e,n),o=a=>{const l=a.currentTarget;if(!id(a)||Or.has(l))return;Or.add(l);const c=t(a),d=(w,y)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",f),!(!id(w)||!Or.has(l))&&(Or.delete(l),typeof c=="function"&&c(w,{success:y}))},h=w=>{d(w,n.useGlobalTarget||rp(l,w.target))},f=w=>{d(w,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",f,s)};return r.forEach(a=>{!j0(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",c=>F0(c,s),s)}),i}function B0(e){return e==="x"||e==="y"?lt[e]?null:(lt[e]=!0,()=>{lt[e]=!1}):lt.x||lt.y?null:(lt.x=lt.y=!0,()=>{lt.x=lt.y=!1})}const sp=new Set(["width","height","top","left","right","bottom",...mr]);let ci;function V0(){ci=void 0}const bt={now:()=>(ci===void 0&&bt.set(Ee.isProcessing||Pv.useManualTiming?Ee.timestamp:performance.now()),ci),set:e=>{ci=e,queueMicrotask(V0)}};function Ic(e,t){e.indexOf(t)===-1&&e.push(t)}function Cc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Rc{constructor(){this.subscriptions=[]}add(t){return Ic(this.subscriptions,t),()=>Cc(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let i=0;i<s;i++){const o=this.subscriptions[i];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ip(e,t){return t?e*(1e3/t):0}const od=30,W0=e=>!isNaN(parseFloat(e));class H0{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,s=!0)=>{const i=bt.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=bt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=W0(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Rc);const r=this.events[t].add(n);return t==="change"?()=>{r(),ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=bt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>od)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,od);return ip(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function fs(e,t){return new H0(e,t)}function _0(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,fs(n))}function G0(e,t){const n=uo(e,t);let{transitionEnd:r={},transition:s={},...i}=n||{};i={...i,...r};for(const o in i){const a=n0(i[o]);_0(e,o,a)}}function z0(e){return!!(Ne(e)&&e.add)}function qa(e,t){const n=e.getValue("willChange");if(z0(n))return n.add(t)}function op(e){return e.props[jm]}const ap=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Y0=1e-7,K0=12;function J0(e,t,n,r,s){let i,o,a=0;do o=t+(n-t)/2,i=ap(o,r,s)-e,i>0?n=o:t=o;while(Math.abs(i)>Y0&&++a<K0);return o}function Ss(e,t,n,r){if(e===t&&n===r)return Ye;const s=i=>J0(i,0,1,e,n);return i=>i===0||i===1?i:ap(s(i),t,r)}const lp=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,cp=e=>t=>1-e(1-t),up=Ss(.33,1.53,.69,.99),Nc=cp(up),dp=lp(Nc),hp=e=>(e*=2)<1?.5*Nc(e):.5*(2-Math.pow(2,-10*(e-1))),Lc=e=>1-Math.sin(Math.acos(e)),fp=cp(Lc),mp=lp(Lc),pp=e=>/^0[^.\s]+$/u.test(e);function $0(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||pp(e):!0}const Gr=e=>Math.round(e*1e5)/1e5,Dc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Z0(e){return e==null}const q0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Oc=(e,t)=>n=>!!(typeof n=="string"&&q0.test(n)&&n.startsWith(e)||t&&!Z0(n)&&Object.prototype.hasOwnProperty.call(n,t)),gp=(e,t,n)=>r=>{if(typeof r!="string")return r;const[s,i,o,a]=r.match(Dc);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Q0=e=>Mt(0,255,e),Wo={...pr,transform:e=>Math.round(Q0(e))},gn={test:Oc("rgb","red"),parse:gp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Wo.transform(e)+", "+Wo.transform(t)+", "+Wo.transform(n)+", "+Gr(hs.transform(r))+")"};function X0(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Qa={test:Oc("#"),parse:X0,transform:gn.transform},Gn={test:Oc("hsl","hue"),parse:gp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+xt.transform(Gr(t))+", "+xt.transform(Gr(n))+", "+Gr(hs.transform(r))+")"},Ce={test:e=>gn.test(e)||Qa.test(e)||Gn.test(e),parse:e=>gn.test(e)?gn.parse(e):Gn.test(e)?Gn.parse(e):Qa.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?gn.transform(e):Gn.transform(e)},ew=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function tw(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Dc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(ew))===null||n===void 0?void 0:n.length)||0)>0}const yp="number",vp="color",nw="var",rw="var(",ad="${}",sw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ms(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},s=[];let i=0;const a=t.replace(sw,l=>(Ce.test(l)?(r.color.push(i),s.push(vp),n.push(Ce.parse(l))):l.startsWith(rw)?(r.var.push(i),s.push(nw),n.push(l)):(r.number.push(i),s.push(yp),n.push(parseFloat(l))),++i,ad)).split(ad);return{values:n,split:a,indexes:r,types:s}}function wp(e){return ms(e).values}function xp(e){const{split:t,types:n}=ms(e),r=t.length;return s=>{let i="";for(let o=0;o<r;o++)if(i+=t[o],s[o]!==void 0){const a=n[o];a===yp?i+=Gr(s[o]):a===vp?i+=Ce.transform(s[o]):i+=s[o]}return i}}const iw=e=>typeof e=="number"?0:e;function ow(e){const t=wp(e);return xp(e)(t.map(iw))}const nn={test:tw,parse:wp,createTransformer:xp,getAnimatableNone:ow},aw=new Set(["brightness","contrast","saturate","opacity"]);function lw(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Dc)||[];if(!r)return e;const s=n.replace(r,"");let i=aw.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const cw=/\b([a-z-]*)\(.*?\)/gu,Xa={...nn,getAnimatableNone:e=>{const t=e.match(cw);return t?t.map(lw).join(" "):e}},uw={...yc,color:Ce,backgroundColor:Ce,outlineColor:Ce,fill:Ce,stroke:Ce,borderColor:Ce,borderTopColor:Ce,borderRightColor:Ce,borderBottomColor:Ce,borderLeftColor:Ce,filter:Xa,WebkitFilter:Xa},Mc=e=>uw[e];function bp(e,t){let n=Mc(e);return n!==Xa&&(n=nn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const dw=new Set(["auto","none","0"]);function hw(e,t,n){let r=0,s;for(;r<e.length&&!s;){const i=e[r];typeof i=="string"&&!dw.has(i)&&ms(i).values.length&&(s=e[r]),r++}if(s&&n)for(const i of t)e[i]=bp(n,s)}const ld=e=>e===pr||e===z,cd=(e,t)=>parseFloat(e.split(", ")[t]),ud=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/u);if(s)return cd(s[1],t);{const i=r.match(/^matrix\((.+)\)$/u);return i?cd(i[1],e):0}},fw=new Set(["x","y","z"]),mw=mr.filter(e=>!fw.has(e));function pw(e){const t=[];return mw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ur={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:ud(4,13),y:ud(5,14)};ur.translateX=ur.x;ur.translateY=ur.y;const wn=new Set;let el=!1,tl=!1;function Sp(){if(tl){const e=Array.from(wn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const s=pw(r);s.length&&(n.set(r,s),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const s=n.get(r);s&&s.forEach(([i,o])=>{var a;(a=r.getValue(i))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}tl=!1,el=!1,wn.forEach(e=>e.complete()),wn.clear()}function Ep(){wn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(tl=!0)})}function gw(){Ep(),Sp()}class Pc{constructor(t,n,r,s,i,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=s,this.element=i,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(wn.add(this),el||(el=!0,ie.read(Ep),ie.resolveKeyframes(Sp))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:s}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const o=s==null?void 0:s.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&o===void 0&&s.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),wn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,wn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Tp=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),yw=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function vw(e){const t=yw.exec(e);if(!t)return[,];const[,n,r,s]=t;return[`--${n??r}`,s]}function Ap(e,t,n=1){const[r,s]=vw(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const o=i.trim();return Tp(o)?parseFloat(o):o}return gc(s)?Ap(s,t,n+1):s}const kp=e=>t=>t.test(e),ww={test:e=>e==="auto",parse:e=>e},Ip=[pr,z,xt,Ut,l0,a0,ww],dd=e=>Ip.find(kp(e));class Cp extends Pc{constructor(t,n,r,s,i){super(t,n,r,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),gc(c))){const d=Ap(c,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!sp.has(r)||t.length!==2)return;const[s,i]=t,o=dd(s),a=dd(i);if(o!==a)if(ld(o)&&ld(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let s=0;s<t.length;s++)$0(t[s])&&r.push(s);r.length&&hw(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ur[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(r,s).jump(s,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:s}=this;if(!n||!n.current)return;const i=n.getValue(r);i&&i.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=ur[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const hd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(nn.test(e)||e==="0")&&!e.startsWith("url("));function xw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function bw(e,t,n,r){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],o=hd(s,t),a=hd(i,t);return!o||!a?!1:xw(e)||(n==="spring"||Tc(n))&&r}const Sw=e=>e!==null;function ho(e,{repeat:t,repeatType:n="loop"},r){const s=e.filter(Sw),i=t&&n!=="loop"&&t%2===1?0:s.length-1;return!i||r===void 0?s[i]:r}const Ew=40;class Rp{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=bt.now(),this.options={autoplay:t,delay:n,type:r,repeat:s,repeatDelay:i,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Ew?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&gw(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=bt.now(),this.hasAttemptedResolve=!0;const{name:r,type:s,velocity:i,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!bw(t,r,s,i))if(o)this.options.duration=0;else{l&&l(ho(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const le=(e,t,n)=>e+(t-e)*n;function Ho(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Tw({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,o=0;if(!t)s=i=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;s=Ho(l,a,e+1/3),i=Ho(l,a,e),o=Ho(l,a,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}function Ui(e,t){return n=>n>0?t:e}const _o=(e,t,n)=>{const r=e*e,s=n*(t*t-r)+r;return s<0?0:Math.sqrt(s)},Aw=[Qa,gn,Gn],kw=e=>Aw.find(t=>t.test(e));function fd(e){const t=kw(e);if(!t)return!1;let n=t.parse(e);return t===Gn&&(n=Tw(n)),n}const md=(e,t)=>{const n=fd(e),r=fd(t);if(!n||!r)return Ui(e,t);const s={...n};return i=>(s.red=_o(n.red,r.red,i),s.green=_o(n.green,r.green,i),s.blue=_o(n.blue,r.blue,i),s.alpha=le(n.alpha,r.alpha,i),gn.transform(s))},Iw=(e,t)=>n=>t(e(n)),Es=(...e)=>e.reduce(Iw),nl=new Set(["none","hidden"]);function Cw(e,t){return nl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Rw(e,t){return n=>le(e,t,n)}function jc(e){return typeof e=="number"?Rw:typeof e=="string"?gc(e)?Ui:Ce.test(e)?md:Dw:Array.isArray(e)?Np:typeof e=="object"?Ce.test(e)?md:Nw:Ui}function Np(e,t){const n=[...e],r=n.length,s=e.map((i,o)=>jc(i)(i,t[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}}function Nw(e,t){const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=jc(e[s])(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}}function Lw(e,t){var n;const r=[],s={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],a=e.indexes[o][s[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[i]=l,s[o]++}return r}const Dw=(e,t)=>{const n=nn.createTransformer(t),r=ms(e),s=ms(t);return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?nl.has(e)&&!s.values.length||nl.has(t)&&!r.values.length?Cw(e,t):Es(Np(Lw(r,s),s.values),n):Ui(e,t)};function Lp(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?le(e,t,n):jc(e)(e,t)}const Ow=5;function Dp(e,t,n){const r=Math.max(t-Ow,0);return ip(n-e(r),t-r)}const he={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Go=.001;function Mw({duration:e=he.duration,bounce:t=he.bounce,velocity:n=he.velocity,mass:r=he.mass}){let s,i,o=1-t;o=Mt(he.minDamping,he.maxDamping,o),e=Mt(he.minDuration,he.maxDuration,Rt(e)),o<1?(s=c=>{const d=c*o,h=d*e,f=d-n,w=rl(c,o),y=Math.exp(-h);return Go-f/w*y},i=c=>{const h=c*o*e,f=h*n+n,w=Math.pow(o,2)*Math.pow(c,2)*e,y=Math.exp(-h),g=rl(Math.pow(c,2),o);return(-s(c)+Go>0?-1:1)*((f-w)*y)/g}):(s=c=>{const d=Math.exp(-c*e),h=(c-n)*e+1;return-Go+d*h},i=c=>{const d=Math.exp(-c*e),h=(n-c)*(e*e);return d*h});const a=5/e,l=jw(s,i,a);if(e=Ct(e),isNaN(l))return{stiffness:he.stiffness,damping:he.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const Pw=12;function jw(e,t,n){let r=n;for(let s=1;s<Pw;s++)r=r-e(r)/t(r);return r}function rl(e,t){return e*Math.sqrt(1-t*t)}const Fw=["duration","bounce"],Uw=["stiffness","damping","mass"];function pd(e,t){return t.some(n=>e[n]!==void 0)}function Bw(e){let t={velocity:he.velocity,stiffness:he.stiffness,damping:he.damping,mass:he.mass,isResolvedFromDuration:!1,...e};if(!pd(e,Uw)&&pd(e,Fw))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),s=r*r,i=2*Mt(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:he.mass,stiffness:s,damping:i}}else{const n=Mw(e);t={...t,...n,mass:he.mass},t.isResolvedFromDuration=!0}return t}function Op(e=he.visualDuration,t=he.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:s}=n;const i=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:i},{stiffness:l,damping:c,mass:d,duration:h,velocity:f,isResolvedFromDuration:w}=Bw({...n,velocity:-Rt(n.velocity||0)}),y=f||0,g=c/(2*Math.sqrt(l*d)),T=o-i,p=Rt(Math.sqrt(l/d)),m=Math.abs(T)<5;r||(r=m?he.restSpeed.granular:he.restSpeed.default),s||(s=m?he.restDelta.granular:he.restDelta.default);let v;if(g<1){const E=rl(p,g);v=I=>{const C=Math.exp(-g*p*I);return o-C*((y+g*p*T)/E*Math.sin(E*I)+T*Math.cos(E*I))}}else if(g===1)v=E=>o-Math.exp(-p*E)*(T+(y+p*T)*E);else{const E=p*Math.sqrt(g*g-1);v=I=>{const C=Math.exp(-g*p*I),x=Math.min(E*I,300);return o-C*((y+g*p*T)*Math.sinh(x)+E*T*Math.cosh(x))/E}}const S={calculatedDuration:w&&h||null,next:E=>{const I=v(E);if(w)a.done=E>=h;else{let C=0;g<1&&(C=E===0?Ct(y):Dp(v,E,I));const x=Math.abs(C)<=r,O=Math.abs(o-I)<=s;a.done=x&&O}return a.value=a.done?o:I,a},toString:()=>{const E=Math.min(qm(S),$a),I=Qm(C=>S.next(E*C).value,E,30);return E+"ms "+I}};return S}function gd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:d}){const h=e[0],f={done:!1,value:h},w=x=>a!==void 0&&x<a||l!==void 0&&x>l,y=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let g=n*t;const T=h+g,p=o===void 0?T:o(T);p!==T&&(g=p-h);const m=x=>-g*Math.exp(-x/r),v=x=>p+m(x),S=x=>{const O=m(x),M=v(x);f.done=Math.abs(O)<=c,f.value=f.done?p:M};let E,I;const C=x=>{w(f.value)&&(E=x,I=Op({keyframes:[f.value,y(f.value)],velocity:Dp(v,x,f.value),damping:s,stiffness:i,restDelta:c,restSpeed:d}))};return C(0),{calculatedDuration:null,next:x=>{let O=!1;return!I&&E===void 0&&(O=!0,S(x),C(x)),E!==void 0&&x>=E?I.next(x-E):(!O&&S(x),f)}}}const Vw=Ss(.42,0,1,1),Ww=Ss(0,0,.58,1),Mp=Ss(.42,0,.58,1),Hw=e=>Array.isArray(e)&&typeof e[0]!="number",_w={linear:Ye,easeIn:Vw,easeInOut:Mp,easeOut:Ww,circIn:Lc,circInOut:mp,circOut:fp,backIn:Nc,backInOut:dp,backOut:up,anticipate:hp},yd=e=>{if(Ac(e)){Lm(e.length===4);const[t,n,r,s]=e;return Ss(t,n,r,s)}else if(typeof e=="string")return _w[e];return e};function Gw(e,t,n){const r=[],s=n||Lp,i=e.length-1;for(let o=0;o<i;o++){let a=s(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||Ye:t;a=Es(l,a)}r.push(a)}return r}function zw(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;if(Lm(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Gw(t,r,s),l=a.length,c=d=>{if(o&&d<e[0])return t[0];let h=0;if(l>1)for(;h<e.length-2&&!(d<e[h+1]);h++);const f=lr(e[h],e[h+1],d);return a[h](f)};return n?d=>c(Mt(e[0],e[i-1],d)):c}function Yw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=lr(0,t,r);e.push(le(n,1,s))}}function Kw(e){const t=[0];return Yw(t,e.length-1),t}function Jw(e,t){return e.map(n=>n*t)}function $w(e,t){return e.map(()=>t||Mp).splice(0,e.length-1)}function Bi({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=Hw(r)?r.map(yd):yd(r),i={done:!1,value:t[0]},o=Jw(n&&n.length===t.length?n:Kw(t),e),a=zw(o,t,{ease:Array.isArray(s)?s:$w(t,s)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}const Zw=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ie.update(t,!0),stop:()=>tn(t),now:()=>Ee.isProcessing?Ee.timestamp:bt.now()}},qw={decay:gd,inertia:gd,tween:Bi,keyframes:Bi,spring:Op},Qw=e=>e/100;class Fc extends Rp{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:s,keyframes:i}=this.options,o=(s==null?void 0:s.KeyframeResolver)||Pc,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(i,a,n,r,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:i,velocity:o=0}=this.options,a=Tc(n)?n:qw[n]||Bi;let l,c;a!==Bi&&typeof t[0]!="number"&&(l=Es(Qw,Lp(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});i==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=qm(d));const{calculatedDuration:h}=d,f=h+s,w=f*(r+1)-s;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:h,resolvedDuration:f,totalDuration:w}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:x}=this.options;return{done:!0,value:x[x.length-1]}}const{finalKeyframe:s,generator:i,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:h}=r;if(this.startTime===null)return i.next(0);const{delay:f,repeat:w,repeatType:y,repeatDelay:g,onUpdate:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-f*(this.speed>=0?1:-1),m=this.speed>=0?p<0:p>d;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let v=this.currentTime,S=i;if(w){const x=Math.min(this.currentTime,d)/h;let O=Math.floor(x),M=x%1;!M&&x>=1&&(M=1),M===1&&O--,O=Math.min(O,w+1),!!(O%2)&&(y==="reverse"?(M=1-M,g&&(M-=g/h)):y==="mirror"&&(S=o)),v=Mt(0,1,M)*h}const E=m?{done:!1,value:l[0]}:S.next(v);a&&(E.value=a(E.value));let{done:I}=E;!m&&c!==null&&(I=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return C&&s!==void 0&&(E.value=ho(l,this.options,s)),T&&T(E.value),C&&this.finish(),E}get duration(){const{resolved:t}=this;return t?Rt(t.calculatedDuration):0}get time(){return Rt(this.currentTime)}set time(t){t=Ct(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Rt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Zw,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(i=>this.tick(i))),n&&n();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Xw=new Set(["opacity","clipPath","filter","transform"]);function ex(e,t,n,{delay:r=0,duration:s=300,repeat:i=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=ep(a,s);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:s,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"})}const tx=cc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Vi=10,nx=2e4;function rx(e){return Tc(e.type)||e.type==="spring"||!Xm(e.ease)}function sx(e,t){const n=new Fc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const s=[];let i=0;for(;!r.done&&i<nx;)r=n.sample(i),s.push(r.value),i+=Vi;return{times:void 0,keyframes:s,duration:i-Vi,ease:"linear"}}const Pp={anticipate:hp,backInOut:dp,circInOut:mp};function ix(e){return e in Pp}class vd extends Rp{constructor(t){super(t);const{name:n,motionValue:r,element:s,keyframes:i}=this.options;this.resolver=new Cp(i,(o,a)=>this.onKeyframesResolved(o,a),n,r,s),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:s,ease:i,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof i=="string"&&Fi()&&ix(i)&&(i=Pp[i]),rx(this.options)){const{onComplete:h,onUpdate:f,motionValue:w,element:y,...g}=this.options,T=sx(t,g);t=T.keyframes,t.length===1&&(t[1]=t[0]),r=T.duration,s=T.times,i=T.ease,o="keyframes"}const d=ex(a.owner.current,l,t,{...this.options,duration:r,times:s,ease:i});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(nd(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:h}=this.options;a.set(ho(t,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:s,type:o,ease:i,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Rt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Rt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Ct(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Ye;const{animation:r}=n;nd(r,t)}return Ye}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:s,type:i,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:h,element:f,...w}=this.options,y=new Fc({...w,keyframes:r,duration:s,type:i,ease:o,times:a,isGenerator:!0}),g=Ct(this.time);c.setWithVelocity(y.sample(g-Vi).value,y.sample(g).value,Vi)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:s,repeatType:i,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return tx()&&r&&Xw.has(r)&&!l&&!c&&!s&&i!=="mirror"&&o!==0&&a!=="inertia"}}const ox={type:"spring",stiffness:500,damping:25,restSpeed:10},ax=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),lx={type:"keyframes",duration:.8},cx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ux=(e,{keyframes:t})=>t.length>2?lx:In.has(e)?e.startsWith("scale")?ax(t[1]):ox:cx;function dx({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:i,repeatType:o,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const Uc=(e,t,n,r={},s,i)=>o=>{const a=Ec(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Ct(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:i?void 0:s};dx(a)||(d={...d,...ux(e,d)}),d.duration&&(d.duration=Ct(d.duration)),d.repeatDelay&&(d.repeatDelay=Ct(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let h=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(h=!0)),h&&!i&&t.get()!==void 0){const f=ho(d.keyframes,a);if(f!==void 0)return ie.update(()=>{d.onUpdate(f),d.onComplete()}),new N0([])}return!i&&vd.supports(d)?new vd(d):new Fc(d)};function hx({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function jp(e,t,{delay:n=0,transitionOverride:r,type:s}={}){var i;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const c=[],d=s&&e.animationState&&e.animationState.getState()[s];for(const h in l){const f=e.getValue(h,(i=e.latestValues[h])!==null&&i!==void 0?i:null),w=l[h];if(w===void 0||d&&hx(d,h))continue;const y={delay:n,...Ec(o||{},h)};let g=!1;if(window.MotionHandoffAnimation){const p=op(e);if(p){const m=window.MotionHandoffAnimation(p,h,ie);m!==null&&(y.startTime=m,g=!0)}}qa(e,h),f.start(Uc(h,f,w,e.shouldReduceMotion&&sp.has(h)?{type:!1}:y,e,g));const T=f.animation;T&&c.push(T)}return a&&Promise.all(c).then(()=>{ie.update(()=>{a&&G0(e,a)})}),c}function sl(e,t,n={}){var r;const s=uo(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const o=s?()=>Promise.all(jp(e,s,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:h,staggerDirection:f}=i;return fx(e,t,d+c,h,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[c,d]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>d())}else return Promise.all([o(),a(n.delay)])}function fx(e,t,n=0,r=0,s=1,i){const o=[],a=(e.variantChildren.size-1)*r,l=s===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(mx).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(sl(c,t,{...i,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function mx(e,t){return e.sortNodePosition(t)}function px(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(i=>sl(e,i,n));r=Promise.all(s)}else if(typeof t=="string")r=sl(e,t,n);else{const s=typeof t=="function"?uo(e,t,n.custom):t;r=Promise.all(jp(e,s,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const gx=dc.length;function Fp(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Fp(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<gx;n++){const r=dc[n],s=e.props[r];(ds(s)||s===!1)&&(t[r]=s)}return t}const yx=[...uc].reverse(),vx=uc.length;function wx(e){return t=>Promise.all(t.map(({animation:n,options:r})=>px(e,n,r)))}function xx(e){let t=wx(e),n=wd(),r=!0;const s=l=>(c,d)=>{var h;const f=uo(e,d,l==="exit"?(h=e.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(f){const{transition:w,transitionEnd:y,...g}=f;c={...c,...g,...y}}return c};function i(l){t=l(e)}function o(l){const{props:c}=e,d=Fp(e.parent)||{},h=[],f=new Set;let w={},y=1/0;for(let T=0;T<vx;T++){const p=yx[T],m=n[p],v=c[p]!==void 0?c[p]:d[p],S=ds(v),E=p===l?m.isActive:null;E===!1&&(y=T);let I=v===d[p]&&v!==c[p]&&S;if(I&&r&&e.manuallyAnimateOnMount&&(I=!1),m.protectedKeys={...w},!m.isActive&&E===null||!v&&!m.prevProp||lo(v)||typeof v=="boolean")continue;const C=bx(m.prevProp,v);let x=C||p===l&&m.isActive&&!I&&S||T>y&&S,O=!1;const M=Array.isArray(v)?v:[v];let j=M.reduce(s(p),{});E===!1&&(j={});const{prevResolvedValues:Z={}}=m,ne={...Z,...j},H=P=>{x=!0,f.has(P)&&(O=!0,f.delete(P)),m.needsAnimating[P]=!0;const k=e.getValue(P);k&&(k.liveStyle=!1)};for(const P in ne){const k=j[P],F=Z[P];if(w.hasOwnProperty(P))continue;let _=!1;Ja(k)&&Ja(F)?_=!Zm(k,F):_=k!==F,_?k!=null?H(P):f.add(P):k!==void 0&&f.has(P)?H(P):m.protectedKeys[P]=!0}m.prevProp=v,m.prevResolvedValues=j,m.isActive&&(w={...w,...j}),r&&e.blockInitialAnimation&&(x=!1),x&&(!(I&&C)||O)&&h.push(...M.map(P=>({animation:P,options:{type:p}})))}if(f.size){const T={};f.forEach(p=>{const m=e.getBaseTarget(p),v=e.getValue(p);v&&(v.liveStyle=!0),T[p]=m??null}),h.push({animation:T})}let g=!!h.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(h):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var w;return(w=f.animationState)===null||w===void 0?void 0:w.setActive(l,c)}),n[l].isActive=c;const h=o(l);for(const f in n)n[f].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:i,getState:()=>n,reset:()=>{n=wd(),r=!0}}}function bx(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Zm(t,e):!1}function ln(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wd(){return{animate:ln(!0),whileInView:ln(),whileHover:ln(),whileTap:ln(),whileDrag:ln(),whileFocus:ln(),exit:ln()}}class an{constructor(t){this.isMounted=!1,this.node=t}update(){}}class Sx extends an{constructor(t){super(t),t.animationState||(t.animationState=xx(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();lo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let Ex=0;class Tx extends an{constructor(){super(...arguments),this.id=Ex++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const Ax={animation:{Feature:Sx},exit:{Feature:Tx}};function ps(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Ts(e){return{point:{x:e.pageX,y:e.pageY}}}const kx=e=>t=>kc(t)&&e(t,Ts(t));function zr(e,t,n,r){return ps(e,t,kx(n),r)}const xd=(e,t)=>Math.abs(e-t);function Ix(e,t){const n=xd(e.x,t.x),r=xd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Up{constructor(t,n,{transformPagePoint:r,contextWindow:s,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Yo(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,w=Ix(h.offset,{x:0,y:0})>=3;if(!f&&!w)return;const{point:y}=h,{timestamp:g}=Ee;this.history.push({...y,timestamp:g});const{onStart:T,onMove:p}=this.handlers;f||(T&&T(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=zo(f,this.transformPagePoint),ie.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:w,onSessionEnd:y,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Yo(h.type==="pointercancel"?this.lastMoveEventInfo:zo(f,this.transformPagePoint),this.history);this.startEvent&&w&&w(h,T),y&&y(h,T)},!kc(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=s||window;const o=Ts(t),a=zo(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ee;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Yo(a,this.history)),this.removeListeners=Es(zr(this.contextWindow,"pointermove",this.handlePointerMove),zr(this.contextWindow,"pointerup",this.handlePointerUp),zr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),tn(this.updatePoint)}}function zo(e,t){return t?{point:t(e.point)}:e}function bd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Yo({point:e},t){return{point:e,delta:bd(e,Bp(t)),offset:bd(e,Cx(t)),velocity:Rx(t,.1)}}function Cx(e){return e[0]}function Bp(e){return e[e.length-1]}function Rx(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const s=Bp(e);for(;n>=0&&(r=e[n],!(s.timestamp-r.timestamp>Ct(t)));)n--;if(!r)return{x:0,y:0};const i=Rt(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const o={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Vp=1e-4,Nx=1-Vp,Lx=1+Vp,Wp=.01,Dx=0-Wp,Ox=0+Wp;function Je(e){return e.max-e.min}function Mx(e,t,n){return Math.abs(e-t)<=n}function Sd(e,t,n,r=.5){e.origin=r,e.originPoint=le(t.min,t.max,e.origin),e.scale=Je(n)/Je(t),e.translate=le(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Nx&&e.scale<=Lx||isNaN(e.scale))&&(e.scale=1),(e.translate>=Dx&&e.translate<=Ox||isNaN(e.translate))&&(e.translate=0)}function Yr(e,t,n,r){Sd(e.x,t.x,n.x,r?r.originX:void 0),Sd(e.y,t.y,n.y,r?r.originY:void 0)}function Ed(e,t,n){e.min=n.min+t.min,e.max=e.min+Je(t)}function Px(e,t,n){Ed(e.x,t.x,n.x),Ed(e.y,t.y,n.y)}function Td(e,t,n){e.min=t.min-n.min,e.max=e.min+Je(t)}function Kr(e,t,n){Td(e.x,t.x,n.x),Td(e.y,t.y,n.y)}function jx(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?le(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?le(n,e,r.max):Math.min(e,n)),e}function Ad(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Fx(e,{top:t,left:n,bottom:r,right:s}){return{x:Ad(e.x,n,s),y:Ad(e.y,t,r)}}function kd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ux(e,t){return{x:kd(e.x,t.x),y:kd(e.y,t.y)}}function Bx(e,t){let n=.5;const r=Je(e),s=Je(t);return s>r?n=lr(t.min,t.max-r,e.min):r>s&&(n=lr(e.min,e.max-s,t.min)),Mt(0,1,n)}function Vx(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const il=.35;function Wx(e=il){return e===!1?e=0:e===!0&&(e=il),{x:Id(e,"left","right"),y:Id(e,"top","bottom")}}function Id(e,t,n){return{min:Cd(e,t),max:Cd(e,n)}}function Cd(e,t){return typeof e=="number"?e:e[t]||0}const Rd=()=>({translate:0,scale:1,origin:0,originPoint:0}),zn=()=>({x:Rd(),y:Rd()}),Nd=()=>({min:0,max:0}),me=()=>({x:Nd(),y:Nd()});function et(e){return[e("x"),e("y")]}function Hp({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Hx({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function _x(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ko(e){return e===void 0||e===1}function ol({scale:e,scaleX:t,scaleY:n}){return!Ko(e)||!Ko(t)||!Ko(n)}function dn(e){return ol(e)||_p(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _p(e){return Ld(e.x)||Ld(e.y)}function Ld(e){return e&&e!=="0%"}function Wi(e,t,n){const r=e-n,s=t*r;return n+s}function Dd(e,t,n,r,s){return s!==void 0&&(e=Wi(e,s,r)),Wi(e,n,r)+t}function al(e,t=0,n=1,r,s){e.min=Dd(e.min,t,n,r,s),e.max=Dd(e.max,t,n,r,s)}function Gp(e,{x:t,y:n}){al(e.x,t.translate,t.scale,t.originPoint),al(e.y,n.translate,n.scale,n.originPoint)}const Od=.999999999999,Md=1.0000000000001;function Gx(e,t,n,r=!1){const s=n.length;if(!s)return;t.x=t.y=1;let i,o;for(let a=0;a<s;a++){i=n[a],o=i.projectionDelta;const{visualElement:l}=i.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Kn(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Gp(e,o)),r&&dn(i.latestValues)&&Kn(e,i.latestValues))}t.x<Md&&t.x>Od&&(t.x=1),t.y<Md&&t.y>Od&&(t.y=1)}function Yn(e,t){e.min=e.min+t,e.max=e.max+t}function Pd(e,t,n,r,s=.5){const i=le(e.min,e.max,s);al(e,t,n,i,r)}function Kn(e,t){Pd(e.x,t.x,t.scaleX,t.scale,t.originX),Pd(e.y,t.y,t.scaleY,t.scale,t.originY)}function zp(e,t){return Hp(_x(e.getBoundingClientRect(),t))}function zx(e,t,n){const r=zp(e,n),{scroll:s}=t;return s&&(Yn(r.x,s.offset.x),Yn(r.y,s.offset.y)),r}const Yp=({current:e})=>e?e.ownerDocument.defaultView:null,Yx=new WeakMap;class Kx{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ts(d).point)},i=(d,h)=>{const{drag:f,dragPropagation:w,onDragStart:y}=this.getProps();if(f&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=B0(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),et(T=>{let p=this.getAxisMotionValue(T).get()||0;if(xt.test(p)){const{projection:m}=this.visualElement;if(m&&m.layout){const v=m.layout.layoutBox[T];v&&(p=Je(v)*(parseFloat(p)/100))}}this.originPoint[T]=p}),y&&ie.postRender(()=>y(d,h)),qa(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(d,h)=>{const{dragPropagation:f,dragDirectionLock:w,onDirectionLock:y,onDrag:g}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:T}=h;if(w&&this.currentDirection===null){this.currentDirection=Jx(T),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",h.point,T),this.updateAxis("y",h.point,T),this.visualElement.render(),g&&g(d,h)},a=(d,h)=>this.stop(d,h),l=()=>et(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Up(t,{onSessionStart:s,onStart:i,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Yp(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:i}=this.getProps();i&&ie.postRender(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:s}=this.getProps();if(!r||!$s(t,s,this.currentDirection))return;const i=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=jx(o,this.constraints[t],this.elastic[t])),i.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&_n(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=Fx(s.layoutBox,n):this.constraints=!1,this.elastic=Wx(r),i!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&et(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Vx(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!_n(t))return!1;const r=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const i=zx(r,s.root,this.visualElement.getTransformPagePoint());let o=Ux(s.layout.layoutBox,i);if(n){const a=n(Hx(o));this.hasMutatedConstraints=!!a,a&&(o=Hp(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=et(d=>{if(!$s(d,n,this.currentDirection))return;let h=l&&l[d]||{};o&&(h={min:0,max:0});const f=s?200:1e6,w=s?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return qa(this.visualElement,t),r.start(Uc(t,r,0,n,this.visualElement,!1))}stopAnimation(){et(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){et(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),s=r[n];return s||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){et(n=>{const{drag:r}=this.getProps();if(!$s(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];i.set(t[n]-le(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!_n(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};et(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=Bx({min:l,max:l},this.constraints[o])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),et(o=>{if(!$s(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(le(l,c,s[o]))})}addListeners(){if(!this.visualElement.current)return;Yx.set(this.visualElement,this);const t=this.visualElement.current,n=zr(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();_n(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,i=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ie.read(r);const o=ps(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(et(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=l[d].translate,h.set(h.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:o=il,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function $s(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Jx(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class $x extends an{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new Kx(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}unmount(){this.removeGroupControls(),this.removeListeners()}}const jd=e=>(t,n)=>{e&&ie.postRender(()=>e(t,n))};class Zx extends an{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new Up(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yp(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:jd(t),onStart:jd(n),onMove:r,onEnd:(i,o)=>{delete this.session,s&&ie.postRender(()=>s(i,o))}}}mount(){this.removePointerDownListener=zr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ui={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Fd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ar={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const n=Fd(e,t.target.x),r=Fd(e,t.target.y);return`${n}% ${r}%`}},qx={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,s=nn.parse(e);if(s.length>5)return r;const i=nn.createTransformer(e),o=typeof s[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;s[0+o]/=a,s[1+o]/=l;const c=le(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),i(s)}};class Qx extends A.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=t;v0(Xx),i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),ui.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,o=r.projection;return o&&(o.isPresent=i,s||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?o.promote():o.relegate()||ie.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),fc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Kp(e){const[t,n]=Cm(),r=A.useContext(ic);return u.jsx(Qx,{...e,layoutGroup:r,switchLayoutGroup:A.useContext(Fm),isPresent:t,safeToRemove:n})}const Xx={borderRadius:{...Ar,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ar,borderTopRightRadius:Ar,borderBottomLeftRadius:Ar,borderBottomRightRadius:Ar,boxShadow:qx};function eb(e,t,n){const r=Ne(e)?e:fs(e);return r.start(Uc("",r,t,n)),r.animation}function tb(e){return e instanceof SVGElement&&e.tagName!=="svg"}const nb=(e,t)=>e.depth-t.depth;class rb{constructor(){this.children=[],this.isDirty=!1}add(t){Ic(this.children,t),this.isDirty=!0}remove(t){Cc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(nb),this.isDirty=!1,this.children.forEach(t)}}function sb(e,t){const n=bt.now(),r=({timestamp:s})=>{const i=s-n;i>=t&&(tn(r),e(i-t))};return ie.read(r,!0),()=>tn(r)}const Jp=["TopLeft","TopRight","BottomLeft","BottomRight"],ib=Jp.length,Ud=e=>typeof e=="string"?parseFloat(e):e,Bd=e=>typeof e=="number"||z.test(e);function ob(e,t,n,r,s,i){s?(e.opacity=le(0,n.opacity!==void 0?n.opacity:1,ab(r)),e.opacityExit=le(t.opacity!==void 0?t.opacity:1,0,lb(r))):i&&(e.opacity=le(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<ib;o++){const a=`border${Jp[o]}Radius`;let l=Vd(t,a),c=Vd(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Bd(l)===Bd(c)?(e[a]=Math.max(le(Ud(l),Ud(c),r),0),(xt.test(c)||xt.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=le(t.rotate||0,n.rotate||0,r))}function Vd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const ab=$p(0,.5,fp),lb=$p(.5,.95,Ye);function $p(e,t,n){return r=>r<e?0:r>t?1:n(lr(e,t,r))}function Wd(e,t){e.min=t.min,e.max=t.max}function Xe(e,t){Wd(e.x,t.x),Wd(e.y,t.y)}function Hd(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function _d(e,t,n,r,s){return e-=t,e=Wi(e,1/n,r),s!==void 0&&(e=Wi(e,1/s,r)),e}function cb(e,t=0,n=1,r=.5,s,i=e,o=e){if(xt.test(t)&&(t=parseFloat(t),t=le(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=le(i.min,i.max,r);e===i&&(a-=t),e.min=_d(e.min,t,n,a,s),e.max=_d(e.max,t,n,a,s)}function Gd(e,t,[n,r,s],i,o){cb(e,t[n],t[r],t[s],t.scale,i,o)}const ub=["x","scaleX","originX"],db=["y","scaleY","originY"];function zd(e,t,n,r){Gd(e.x,t,ub,n?n.x:void 0,r?r.x:void 0),Gd(e.y,t,db,n?n.y:void 0,r?r.y:void 0)}function Yd(e){return e.translate===0&&e.scale===1}function Zp(e){return Yd(e.x)&&Yd(e.y)}function Kd(e,t){return e.min===t.min&&e.max===t.max}function hb(e,t){return Kd(e.x,t.x)&&Kd(e.y,t.y)}function Jd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function qp(e,t){return Jd(e.x,t.x)&&Jd(e.y,t.y)}function $d(e){return Je(e.x)/Je(e.y)}function Zd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class fb{constructor(){this.members=[]}add(t){Ic(this.members,t),t.scheduleRender()}remove(t){if(Cc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(s=>t===s);if(n===0)return!1;let r;for(let s=n;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function mb(e,t,n){let r="";const s=e.x.translate/t.x,i=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((s||i||o)&&(r=`translate3d(${s}px, ${i}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:h,rotateY:f,skewX:w,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),h&&(r+=`rotateX(${h}deg) `),f&&(r+=`rotateY(${f}deg) `),w&&(r+=`skewX(${w}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const hn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Mr=typeof window<"u"&&window.MotionDebug!==void 0,Jo=["","X","Y","Z"],pb={visibility:"hidden"},qd=1e3;let gb=0;function $o(e,t,n,r){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Qp(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=op(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ie,!(s||i))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Qp(r)}function Xp({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(o={},a=t==null?void 0:t()){this.id=gb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Mr&&(hn.totalNodes=hn.resolvedTargetDeltas=hn.recalculatedProjection=0),this.nodes.forEach(wb),this.nodes.forEach(Tb),this.nodes.forEach(Ab),this.nodes.forEach(xb),Mr&&window.MotionDebug.record(hn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new rb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=tb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let h;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=sb(f,250),ui.hasAnimatedSinceResize&&(ui.hasAnimatedSinceResize=!1,this.nodes.forEach(Xd))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:w,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||d.getDefaultTransition()||Nb,{onLayoutAnimationStart:T,onLayoutAnimationComplete:p}=d.getProps(),m=!this.targetLayout||!qp(this.targetLayout,y)||w,v=!f&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,v);const S={...Ec(g,"layout"),onPlay:T,onComplete:p};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||Xd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Qp(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Qd);return}this.isUpdating||this.nodes.forEach(Sb),this.isUpdating=!1,this.nodes.forEach(Eb),this.nodes.forEach(yb),this.nodes.forEach(vb),this.clearAllSnapshots();const a=bt.now();Ee.delta=Mt(0,1e3/60,a-Ee.timestamp),Ee.timestamp=a,Ee.isProcessing=!0,Bo.update.process(Ee),Bo.preRender.process(Ee),Bo.render.process(Ee),Ee.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(bb),this.sharedNodes.forEach(Ib)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Zp(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||dn(this.latestValues)||d)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Lb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return me();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Db))){const{scroll:d}=this.root;d&&(Yn(l.x,d.offset.x),Yn(l.y,d.offset.y))}return l}removeElementScroll(o){var a;const l=me();if(Xe(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:h,options:f}=d;d!==this.root&&h&&f.layoutScroll&&(h.wasRoot&&Xe(l,o),Yn(l.x,h.offset.x),Yn(l.y,h.offset.y))}return l}applyTransform(o,a=!1){const l=me();Xe(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Kn(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),dn(d.latestValues)&&Kn(l,d.latestValues)}return dn(this.latestValues)&&Kn(l,this.latestValues),l}removeTransform(o){const a=me();Xe(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!dn(c.latestValues))continue;ol(c.latestValues)&&c.updateSnapshot();const d=me(),h=c.measurePageBox();Xe(d,h),zd(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return dn(this.latestValues)&&zd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ee.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=Ee.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Kr(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Xe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Px(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xe(this.target,this.layout.layoutBox),Gp(this.target,this.targetDelta)):Xe(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Kr(this.relativeTargetOrigin,this.target,w.target),Xe(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Mr&&hn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ol(this.parent.latestValues)||_p(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ee.timestamp&&(c=!1),c)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;Xe(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,w=this.treeScale.y;Gx(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=me());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Hd(this.prevProjectionDelta.x,this.projectionDelta.x),Hd(this.prevProjectionDelta.y,this.projectionDelta.y)),Yr(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==w||!Zd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Zd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Mr&&hn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zn(),this.projectionDelta=zn(),this.projectionDeltaWithTransform=zn()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},h=zn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=me(),w=l?l.source:void 0,y=this.layout?this.layout.source:void 0,g=w!==y,T=this.getStack(),p=!T||T.members.length<=1,m=!!(g&&!p&&this.options.crossfade===!0&&!this.path.some(Rb));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const E=S/1e3;eh(h.x,o.x,E),eh(h.y,o.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Kr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Cb(this.relativeTarget,this.relativeTargetOrigin,f,E),v&&hb(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=me()),Xe(v,this.relativeTarget)),g&&(this.animationValues=d,ob(d,c,this.latestValues,E,m,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ie.update(()=>{ui.hasAnimatedSinceResize=!0,this.currentAnimation=eb(0,qd,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&eg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||me();const h=Je(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const f=Je(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Xe(a,l),Kn(a,d),Yr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new fb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&$o("z",o,c,this.animationValues);for(let d=0;d<Jo.length;d++)$o(`rotate${Jo[d]}`,o,c,this.animationValues),$o(`skew${Jo[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return pb;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=li(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const g={};return this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=li(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!dn(this.latestValues)&&(g.transform=d?d({},""):"none",this.hasProjected=!1),g}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),c.transform=mb(this.projectionDeltaWithTransform,this.treeScale,f),d&&(c.transform=d(f,c.transform));const{x:w,y}=this.projectionDelta;c.transformOrigin=`${w.origin*100}% ${y.origin*100}% 0`,h.animationValues?c.opacity=h===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in ji){if(f[g]===void 0)continue;const{correct:T,applyTo:p}=ji[g],m=c.transform==="none"?f[g]:T(f[g],h);if(p){const v=p.length;for(let S=0;S<v;S++)c[p[S]]=m}else c[g]=m}return this.options.layoutId&&(c.pointerEvents=h===this?li(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Qd),this.root.sharedNodes.clear()}}}function yb(e){e.updateLayout()}function vb(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;i==="size"?et(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],w=Je(f);f.min=r[h].min,f.max=f.min+w}):eg(i,n.layoutBox,r)&&et(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],w=Je(r[h]);f.max=f.min+w,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+w)});const a=zn();Yr(a,r,n.layoutBox);const l=zn();o?Yr(l,e.applyTransform(s,!0),n.measuredBox):Yr(l,r,n.layoutBox);const c=!Zp(a);let d=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:w}=h;if(f&&w){const y=me();Kr(y,n.layoutBox,f.layoutBox);const g=me();Kr(g,r,w.layoutBox),qp(y,g)||(d=!0),h.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=y,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function wb(e){Mr&&hn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function xb(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function bb(e){e.clearSnapshot()}function Qd(e){e.clearMeasurements()}function Sb(e){e.isLayoutDirty=!1}function Eb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Xd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Tb(e){e.resolveTargetDelta()}function Ab(e){e.calcProjection()}function kb(e){e.resetSkewAndRotation()}function Ib(e){e.removeLeadSnapshot()}function eh(e,t,n){e.translate=le(t.translate,0,n),e.scale=le(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function th(e,t,n,r){e.min=le(t.min,n.min,r),e.max=le(t.max,n.max,r)}function Cb(e,t,n,r){th(e.x,t.x,n.x,r),th(e.y,t.y,n.y,r)}function Rb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Nb={duration:.45,ease:[.4,0,.1,1]},nh=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),rh=nh("applewebkit/")&&!nh("chrome/")?Math.round:Ye;function sh(e){e.min=rh(e.min),e.max=rh(e.max)}function Lb(e){sh(e.x),sh(e.y)}function eg(e,t,n){return e==="position"||e==="preserve-aspect"&&!Mx($d(t),$d(n),.2)}function Db(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Ob=Xp({attachResizeListener:(e,t)=>ps(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Zo={current:void 0},tg=Xp({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Zo.current){const e=new Ob({});e.mount(window),e.setOptions({layoutScroll:!0}),Zo.current=e}return Zo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Mb={pan:{Feature:Zx},drag:{Feature:$x,ProjectionNode:tg,MeasureLayout:Kp}};function ih(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,i=r[s];i&&ie.postRender(()=>i(t,Ts(t)))}class Pb extends an{mount(){const{current:t}=this.node;t&&(this.unmount=M0(t,n=>(ih(this.node,n,"Start"),r=>ih(this.node,r,"End"))))}unmount(){}}class jb extends an{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Es(ps(this.node.current,"focus",()=>this.onFocus()),ps(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function oh(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),i=r[s];i&&ie.postRender(()=>i(t,Ts(t)))}class Fb extends an{mount(){const{current:t}=this.node;t&&(this.unmount=U0(t,n=>(oh(this.node,n,"Start"),(r,{success:s})=>oh(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ll=new WeakMap,qo=new WeakMap,Ub=e=>{const t=ll.get(e.target);t&&t(e)},Bb=e=>{e.forEach(Ub)};function Vb({root:e,...t}){const n=e||document;qo.has(n)||qo.set(n,{});const r=qo.get(n),s=JSON.stringify(t);return r[s]||(r[s]=new IntersectionObserver(Bb,{root:e,...t})),r[s]}function Wb(e,t,n){const r=Vb(t);return ll.set(e,n),r.observe(e),()=>{ll.delete(e),r.unobserve(e)}}const Hb={some:0,all:1};class _b extends an{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:Hb[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,i&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:h}=this.node.getProps(),f=c?d:h;f&&f(l)};return Wb(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Gb(t,n))&&this.startObserver()}unmount(){}}function Gb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const zb={inView:{Feature:_b},tap:{Feature:Fb},focus:{Feature:jb},hover:{Feature:Pb}},Yb={layout:{ProjectionNode:tg,MeasureLayout:Kp}},cl={current:null},ng={current:!1};function Kb(){if(ng.current=!0,!!lc)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>cl.current=e.matches;e.addListener(t),t()}else cl.current=!1}const Jb=[...Ip,Ce,nn],$b=e=>Jb.find(kp(e)),ah=new WeakMap;function Zb(e,t,n){for(const r in t){const s=t[r],i=n[r];if(Ne(s))e.addValue(r,s);else if(Ne(i))e.addValue(r,fs(s,{owner:e}));else if(i!==s)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=e.getStaticValue(r);e.addValue(r,fs(o!==void 0?o:s,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const lh=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qb{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:s,blockInitialAnimation:i,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Pc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=bt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ie.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!i,this.isControllingVariants=co(n),this.isVariantNode=Pm(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const w in f){const y=f[w];l[w]!==void 0&&Ne(y)&&y.set(l[w],!1)}}mount(t){this.current=t,ah.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),ng.current||Kb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cl.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ah.delete(this.current),this.projection&&this.projection.unmount(),tn(this.notifyUpdate),tn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=In.has(t),s=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&ie.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in cr){const n=cr[t];if(!n)continue;const{isEnabled:r,Feature:s}=n;if(!this.features[t]&&s&&r(this.props)&&(this.features[t]=new s(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<lh.length;r++){const s=lh[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i="on"+s,o=t[i];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=Zb(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=fs(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(Tp(s)||pp(s))?s=parseFloat(s):!$b(s)&&nn.test(n)&&(s=bp(t,n)),this.setBaseTarget(t,Ne(s)?s.get():s)),Ne(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let s;if(typeof r=="string"||typeof r=="object"){const o=pc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(s=o[t])}if(r&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ne(i)?i:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Rc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class rg extends qb{constructor(){super(...arguments),this.KeyframeResolver=Cp}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ne(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Qb(e){return window.getComputedStyle(e)}class Xb extends rg{constructor(){super(...arguments),this.type="html",this.renderInstance=Gm}readValueFromInstance(t,n){if(In.has(n)){const r=Mc(n);return r&&r.default||0}else{const r=Qb(t),s=(Wm(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return zp(t,n)}build(t,n,r){vc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Sc(t,n,r)}}class eS extends rg{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=me}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(In.has(n)){const r=Mc(n);return r&&r.default||0}return n=zm.has(n)?n:hc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Jm(t,n,r)}build(t,n,r){wc(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,s){Ym(t,n,r,s)}mount(t){this.isSVGTag=bc(t.tagName),super.mount(t)}}const tS=(e,t)=>mc(e)?new eS(t):new Xb(t,{allowProjection:e!==A.Fragment}),nS=I0({...Ax,...zb,...Mb,...Yb},tS),de=Hv(nS),rS=({onComplete:e,manifestationRoles:t})=>(A.useEffect(()=>{const n=setTimeout(()=>{e()},2e4);return()=>clearTimeout(n)},[e]),u.jsx("div",{className:"fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden",children:u.jsxs(de.div,{initial:{y:"100vh"},animate:{y:"-100vh"},transition:{duration:15,ease:"linear"},className:"text-center space-y-8",children:[u.jsx("h1",{className:"text-4xl font-bold text-green-500 font-mono mb-12",children:"WHAT HAPPENED TO THE CREW?"}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("p",{className:"text-green-700 font-mono text-sm uppercase tracking-widest",children:"Created By"}),u.jsx("p",{className:"text-green-400 font-mono text-xl",children:"Bushmonkey"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("p",{className:"text-green-700 font-mono text-sm uppercase tracking-widest",children:"Testing by"}),u.jsx("p",{className:"text-green-400 font-mono text-xl",children:"Alan Pritchard"})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsx("p",{className:"text-green-700 font-mono text-sm uppercase tracking-widest",children:"Special Thanks"}),u.jsx("p",{className:"text-green-400 font-mono text-xl",children:"The Crew"}),u.jsx("p",{className:"text-green-400 font-mono text-xl",children:"You, The Investigator"}),u.jsx("p",{className:"text-red-400 font-mono text-xl animate-pulse",children:t&&t[0]?`${t[0].firstName} ${t[0].lastName}`.trim():"N"})]}),u.jsx("div",{className:"pt-12",children:u.jsx("p",{className:"text-green-600 font-mono text-sm italic",children:"Thank you for playing."})})]})})),sS="1.31.1",Qo=({children:e,notification:t,shutdown:n,corruptionEffect:r})=>u.jsxs("div",{className:`min-h-screen bg-black text-green-500 font-mono p-4 md:p-8 relative overflow-hidden selection:bg-green-900 selection:text-green-100 ${n?"crt-shutdown":""} ${r?"crt-corruption":""}`,children:[r&&u.jsx("div",{className:"corruption-overlay fixed inset-0 z-[100] pointer-events-none"}),u.jsx("div",{className:"pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-20"}),u.jsx("div",{className:"pointer-events-none fixed inset-0 z-40 shadow-[0_0_100px_rgba(0,255,0,0.1)_inset]"}),u.jsx("div",{className:"relative z-10 max-w-4xl mx-auto border border-green-800 bg-black/90 shadow-[0_0_20px_rgba(0,255,0,0.1)] rounded-sm h-[80vh] flex flex-col",children:e}),u.jsx(de.div,{initial:{y:-100,opacity:0},animate:{y:t?20:-100,opacity:t?1:0},transition:{type:"spring",stiffness:300,damping:30},className:"fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none",children:u.jsxs("div",{className:`${(t==null?void 0:t.type)==="corrupted"?"bg-red-900/90 border-red-500 text-red-100":"bg-green-900/90 border-green-500 text-green-100"} border px-6 py-3 rounded shadow-[0_0_20px_rgba(0,255,0,0.3)] font-bold tracking-widest flex items-center`,children:[u.jsx("span",{className:`w-3 h-3 ${(t==null?void 0:t.type)==="corrupted"?"bg-red-500":"bg-green-400"} rounded-full animate-pulse mr-3`}),(t==null?void 0:t.text)||t]})}),u.jsxs("div",{className:"fixed bottom-2 right-4 z-50 text-xs text-green-900 font-mono pointer-events-none opacity-50",children:["v",sS]})]}),iS=({onCommand:e,onScroll:t,disabled:n,history:r,onAddToHistory:s,awaitingPassword:i})=>{const[o,a]=A.useState(""),[l,c]=A.useState(!1),[d,h]=A.useState(-1),f=A.useRef(null),w=g=>{g.preventDefault(),!n&&o.trim()&&(e(o.trim())?(s&&s(o.trim()),h(-1),a(""),c(!1)):(c(!0),setTimeout(()=>c(!1),500)))},y=g=>{if(!n){if(g.key==="ArrowUp"){if(g.preventDefault(),r.length>0){const T=Math.min(d+1,r.length-1);h(T),a(r[T])}}else if(g.key==="ArrowDown"){if(g.preventDefault(),d>-1){const T=d-1;h(T),a(T===-1?"":r[T])}}else["PageUp","PageDown"].includes(g.key)&&(g.preventDefault(),t(g.key));l&&c(!1)}};return A.useEffect(()=>{var g;n||(g=f.current)==null||g.focus()},[n]),u.jsxs("form",{onSubmit:w,className:"flex items-center p-4 border-t border-green-900 bg-black/50",children:[u.jsx("span",{className:`mr-2 ${l?"text-red-500":"text-green-400"}`,children:">"}),u.jsx("input",{ref:f,type:"text",value:o,onChange:g=>a(g.target.value),onKeyDown:y,disabled:n,className:`flex-1 bg-transparent border-none outline-none font-mono text-lg transition-colors duration-200 ${l?"text-red-500 placeholder-red-800":i?"text-green-500 placeholder-green-400/50":"text-green-500 placeholder-green-800"} ${n?"opacity-50 cursor-not-allowed":""}`,placeholder:n?"TERMINAL LOCKED":l?"COMMAND ERROR":i?"enter password":"Type command...",autoFocus:!n,spellCheck:"false",autoComplete:"off"})]})},Jn=[{id:"S",title:"Commander",firstName:"Sebastian",lastName:"Cross",role:"Knight"},{id:"R",title:"Engineer",firstName:"Robert",lastName:"Ryan",role:"Squire"},{id:"E",title:"Doctor",firstName:"Elizabeth",lastName:"Darcy",role:"Witch"},{id:"Z",title:"Comms",firstName:"Zackary",lastName:"Jackson",role:"Paladin"},{id:"J",title:"Astrophysicist",firstName:"Jacqueline",lastName:"Dupont",role:"Demonhunter"},{id:"I",title:"Technician",firstName:"Isaac",lastName:"Kozov",role:"Blacksmith"},{id:"A",title:"Pilot",firstName:"Alex",lastName:"Rogan",role:"Chaosengine"},{id:"L",title:"Chef",firstName:"Leonard",lastName:"McCoy",role:"Butcher"},{id:"B",title:"Security",firstName:"Barry",lastName:"Vance",role:"Barbarian"},{id:"C",title:"Ensign",firstName:"Carl",lastName:"Holden",role:"Fool"},{id:"D",title:"Scientist",firstName:"Dana",lastName:"Rogan",role:"Sacrifice"},{id:"M",title:"Biologist",firstName:"Michael",lastName:"Grimm",role:"Warlock"}],Fe={root:{id:"root",name:"ROOT",files:[],folders:["documents","games","system","personal.ck"]},documents:{id:"documents",name:"DOCUMENTS",parent:"root",files:["CHORES-ROTA","POKER-NIGHT","RECREATION-SCHEDULE","GALLEY-MENU","MAINTENANCE-LOG","DUTY-ROSTER","SAFETY-GUIDELINES"],folders:["scans","research","manuals","reports"]},scans:{id:"scans",name:"SCANS",parent:"documents",files:["WEATHER-PATTERNS","CHEMICAL-MAKEUP","SIGNAL-ANALYSIS"],folders:[]},research:{id:"research",name:"RESEARCH",parent:"documents",files:["BRYOPHYTA-ANALYSIS","BACTERIA-ANALYSIS","GASTROPOD-SECRETION-ANALYSIS"],folders:[]},games:{id:"games",name:"GAMES",parent:"root",files:["word.exe","asteroids.exe"],folders:[]},system:{id:"system",name:"SYSTEM",parent:"root",files:[],folders:["core.ck","logs"]},"personal.ck":{id:"personal.ck",name:"PERSONAL",parent:"root",locked:!0,files:[],folders:["emails","journals","photos"]},"core.ck":{id:"core.ck",name:"CORE",parent:"system",locked:!0,files:["map.exe","monitor.exe","bifrost.exe"],folders:["archive","security"]},archive:{id:"archive",name:"ARCHIVE",parent:"core.ck",locked:!1,files:["1007-LOG-JD","1008-LOG-JD"],folders:[]},emails:{id:"emails",name:"EMAILS",parent:"personal.ck",files:["arogan","cross","darcy","drogan","dupont","grimm","holden","jackson","kozov","mccoy","ryan","vance"],folders:[]},journals:{id:"journals",name:"JOURNALS",parent:"personal.ck",files:["jd-journal-10"],folders:[]},manuals:{id:"manuals",name:"MANUALS",parent:"documents",files:["STATION-MANUAL","ROVER-MANUAL","SUIT-PROTOCOLS"],folders:[]},reports:{id:"reports",name:"REPORTS",parent:"documents",files:["INCIDENT-REPORT-101","SUPPLY-REQUEST"],folders:[]},logs:{id:"logs",name:"LOGS",parent:"system",files:["SYSTEM-BOOT-LOG","ERROR-LOG-LATEST"],folders:[]},photos:{id:"photos",name:"PHOTOS",parent:"personal.ck",files:["rover-outing.jpg","south-cave.jpg","antigrav-yoga.jpg"],folders:[]},security:{id:"security",name:"SECURITY",parent:"core.ck",locked:!0,files:["CAMERA-FEEDS"],folders:[]}},ch=["ABYSS","AGONY","ALARM","ALIEN","ANGER","ANGST","AWFUL","BEAST","BLACK","BLADE","BLEED","BLIND","BONES","BOMBS","BREAK","BURNT","CAGES","CHAOS","CHOKE","CLAWS","CRASH","CREEP","CRUEL","CURSE","DECAY","DEMON","DEVIL","DIRTY","DREAD","DYING","ENEMY","ERROR","EVILS","FEARS","FEVER","FIEND","FIGHT","FILTH","FLAME","FLESH","FORCE","GHOST","GHOUL","GIANT","GLOOM","GRAVE","GRIEF","GRIMY","GROSS","GUILT","HATES","HAUNT","HAVOC","HELLS","HUMAN","HURTS","KNIFE","LEAVE","LIMBO","LURKS","MADLY","MAGIC","MANIC","METAL","MIGHT","NASTY","NERVE","NOISE","OMENS","OUTER","PAINS","PANIC","PERIL","POWER","PRAYS","PROWL","PULSE","QUAKE","QUIET","RABID","BLOOD","RAGES","RAPID","RAZOR","REACT","ROBOT","ROUGH","RUINS","SCARE","SCARS","SCARY","SHADE","SHAKE","SHAME","SHARP","SHOCK","SHOOT","SHOUT","SICKS","SIREN","SLAIN","SLAVE","SLEEP","SLIME","SMASH","SMOKE","SNAKE","SNARL","SOUND","SPACE","SPELL","SPIKE","SPINE","SPOIL","STALK","STARE","STEAL","STING","STORM","STRIP","STUCK","SWARM","TAINT","TEETH","THIEF","THORN","TOMBS","TOXIC","TRACK","TRAPS","TRIAL","TRICK","TROLL","UGLY","UNDER","UPSET","VAPOR","VENOM","VILES","VIRAL","VIRUS","VOIDS","WASTE","WATCH","WEIRD","WHINE","WITCH","WORRY","WORSE","WORST","WOUND","WRATH","WRECK","WRONG"],Nn=5,Xo=6,kr=5,oS="XZYQM",aS=({onExit:e,onWin:t})=>{const[n,r]=A.useState(1),[s,i]=A.useState(""),[o,a]=A.useState([]),[l,c]=A.useState(""),[d,h]=A.useState("playing"),[f,w]=A.useState(""),y=A.useRef(null);A.useEffect(()=>{g(1)},[]);const g=v=>{if(r(v),a([]),c(""),h("playing"),w(""),v===kr)i(oS);else{const S=ch[Math.floor(Math.random()*ch.length)];i(S)}setTimeout(()=>{y.current&&y.current.focus()},100)},T=v=>{if(d!=="playing"){v.key==="Enter"&&(d==="won"?n<kr?g(n+1):(t&&t(),e()):d==="lost"&&g(1));return}if(v.key==="Enter"){if(l.length!==Nn){w("Word too short");return}const S=[...o,l];a(S),c(""),w(""),l===s?(h("won"),w(n===kr?"SYSTEM UNLOCKED. CONGRATULATIONS.":"ACCESS GRANTED. LEVEL "+(n+1)+" UNLOCKED. PRESS ENTER.")):S.length>=Xo&&(h("lost"),w(n===kr?"ACCESS DENIED. SYSTEM RESETTING... PRESS ENTER.":`ACCESS DENIED. PASSWORD WAS ${s}. SYSTEM RESETTING... PRESS ENTER.`))}else v.key==="Backspace"?(c(S=>S.slice(0,-1)),w("")):/^[a-zA-Z]$/.test(v.key)?l.length<Nn&&(c(S=>(S+v.key).toUpperCase()),w("")):v.key==="Escape"&&e()},p=()=>{y.current&&y.current.focus()},m=v=>{const S=Array(Nn).fill("absent"),E=s.split(""),I=v.split("");return I.forEach((C,x)=>{C===E[x]&&(S[x]="correct",E[x]=null)}),I.forEach((C,x)=>{if(S[x]!=="correct"){const O=E.indexOf(C);O!==-1&&(S[x]="present",E[O]=null)}}),S};return u.jsxs("div",{className:"flex flex-col items-center justify-center h-full font-mono text-green-500 p-4",onClick:p,children:[u.jsxs("h1",{className:"text-2xl mb-4 font-bold border-b border-green-500 pb-2",children:["SECURITY OVERRIDE: LEVEL ",n,"/",kr]}),u.jsxs("div",{className:"mb-4 text-sm text-green-400",children:["GUESS THE PASSWORD (",Nn," LETTERS)"]}),u.jsxs("div",{className:"grid gap-2 mb-6",children:[o.map((v,S)=>{const E=m(v);return u.jsx("div",{className:"flex gap-2",children:v.split("").map((I,C)=>{const x=E[C];let O="bg-black",M="text-green-500",j="border-green-800";return x==="correct"?(O="bg-green-600",M="text-black",j="border-green-600"):x==="present"&&(O="bg-yellow-600",M="text-black",j="border-yellow-600"),u.jsx("div",{className:`w-10 h-10 border ${j} ${O} ${M} flex items-center justify-center font-bold text-xl`,children:I},C)})},S)}),d==="playing"&&o.length<Xo&&u.jsx("div",{className:"flex gap-2",children:[...Array(Nn)].map((v,S)=>u.jsx("div",{className:`w-10 h-10 border border-green-500 flex items-center justify-center font-bold text-xl ${S===l.length?"animate-pulse bg-green-900/30":""}`,children:l[S]||""},S))}),[...Array(Math.max(0,Xo-1-o.length-(d==="playing"?0:-1)))].map((v,S)=>u.jsx("div",{className:"flex gap-2 opacity-30",children:[...Array(Nn)].map((E,I)=>u.jsx("div",{className:"w-10 h-10 border border-green-900"},I))},`empty-${S}`))]}),u.jsx("div",{className:"h-8 text-center font-bold text-yellow-400 animate-pulse",children:f}),u.jsx("div",{className:"mt-8 text-xs text-green-700",children:"[ESC] TO ABORT"}),u.jsx("input",{ref:y,type:"text",className:"opacity-0 absolute top-0 left-0 h-0 w-0",onKeyDown:T,onBlur:p,autoFocus:!0})]})},lS=({onExit:e,powerLevels:t,onPowerUpdate:n})=>{const[r,s]=A.useState("overview");A.useEffect(()=>{const o=a=>{a.key==="Escape"&&e()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[e]);const i=o=>u.jsx("div",{className:"flex items-end h-32 space-x-1 mt-4 bg-black/50 p-2 border border-green-900/30",children:[...Array(20)].map((a,l)=>u.jsx(de.div,{className:`w-2 ${o}`,animate:{height:[`${Math.random()*80+10}%`,`${Math.random()*80+10}%`,`${Math.random()*80+10}%`]},transition:{duration:2,repeat:1/0,repeatType:"reverse",delay:l*.1}},l))});return u.jsxs("div",{className:"h-full flex flex-col p-4 font-mono text-green-500 relative",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-green-800 pb-2 mb-4",children:[u.jsx("h1",{className:"text-xl font-bold tracking-widest",children:"STATION MONITORING SYSTEM v4.2"}),u.jsx("div",{className:"text-xs animate-pulse",children:"LIVE FEED"})]}),u.jsxs("div",{className:"flex space-x-4 mb-6",children:[u.jsx("button",{onClick:()=>s("overview"),className:`px-4 py-1 border ${r==="overview"?"bg-green-900/50 border-green-500 text-white":"border-green-800 hover:border-green-600"} transition-colors`,children:"OVERVIEW"}),u.jsx("button",{onClick:()=>s("engine"),className:`px-4 py-1 border ${r==="engine"?"bg-green-900/50 border-green-500 text-white":"border-green-800 hover:border-green-600"} transition-colors`,children:"ENGINE"}),u.jsx("button",{onClick:()=>s("power"),className:`px-4 py-1 border ${r==="power"?"bg-green-900/50 border-green-500 text-white":"border-green-800 hover:border-green-600"} transition-colors`,children:"POWER"}),u.jsx("button",{onClick:()=>s("life_support"),className:`px-4 py-1 border ${r==="life_support"?"bg-green-900/50 border-green-500 text-white":"border-green-800 hover:border-green-600"} transition-colors`,children:"LIFE SUPPORT"})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto",children:[r==="overview"&&u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{className:"border border-green-900/50 p-4",children:[u.jsx("h2",{className:"text-lg font-bold mb-2",children:"SYSTEM STATUS"}),u.jsxs("ul",{className:"space-y-2 text-sm",children:[u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"MAIN CORE:"})," ",u.jsx("span",{className:"text-green-300",children:"ONLINE"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"LIFE SUPPORT SYSTEMS:"})," ",u.jsx("span",{className:"text-yellow-500 animate-pulse",children:"WARNING"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"COMMS:"})," ",u.jsx("span",{className:"text-red-500",children:"OFFLINE"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{children:"HULL INTEGRITY:"})," ",u.jsx("span",{className:"text-green-300",children:"88%"})]})]})]}),u.jsxs("div",{className:"border border-green-900/50 p-4",children:[u.jsx("h2",{className:"text-lg font-bold mb-2",children:"ACTIVE ALERTS"}),u.jsxs("div",{className:"text-red-500 text-sm animate-pulse",children:["! UNIDENTIFIED SIGNAL DETECTED IN SECTOR 7",u.jsx("br",{}),"! BIO-HAZARD ANOMALIES DETECTED",u.jsx("br",{}),"! POWER FLUCTUATIONS IN MEDBAY",u.jsx("br",{}),"! FIRE ON THE BRIDGE",u.jsx("br",{}),"! FIRE IN THE RESEARCH LAB",u.jsx("br",{}),"! HULL BREACH IN MAINTENANCE",u.jsx("br",{}),"! HULL BREACH IN CARGO BAY"]})]})]}),r==="engine"&&u.jsxs("div",{className:"border border-green-900/50 p-4",children:[u.jsx("h2",{className:"text-lg font-bold mb-2",children:"ENGINE DIAGNOSTICS"}),u.jsxs("div",{className:"grid grid-cols-2 gap-8",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm mb-2",children:"FLUCTATION LEVELS"}),i("bg-orange-500")]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm mb-2",children:"FUEL FLOW"}),i("bg-blue-500")]})]}),u.jsxs("div",{className:"mt-4 text-xs",children:[u.jsx("p",{children:"CORE TEMPERATURE: 4500K (NOMINAL)"}),u.jsx("p",{children:"ANTIMATTER CONTAINMENT: STABLE"})]})]}),r==="power"&&u.jsxs("div",{className:"border border-green-900/50 p-4",children:[u.jsx("h2",{className:"text-lg font-bold mb-4",children:"POWER DISTRIBUTION"}),u.jsx("div",{className:"space-y-6 p-4",children:[{id:"engines",label:"ENGINES"},{id:"lifeSupport",label:"LIFE SUPPORT"},{id:"relay",label:"REMOTE RELAY"}].map(o=>{const a=t&&t[o.id]||0,l=Object.values(t||{engines:2,lifeSupport:1,relay:0}).reduce((d,h)=>d+h,0),c=3;return u.jsxs("div",{className:"flex items-center justify-between border-b border-green-900/30 pb-4",children:[u.jsx("div",{className:"w-1/3 font-bold",children:o.label}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsx("button",{onClick:()=>n&&n(o.id,-1),disabled:a<=0,className:`w-8 h-8 flex items-center justify-center border ${a<=0?"border-green-900/30 text-green-900/30":"border-green-500 hover:bg-green-900/50 text-green-500"}`,children:"-"}),u.jsx("div",{className:"flex space-x-1",children:[...Array(3)].map((d,h)=>u.jsx("div",{className:`w-6 h-8 border border-green-900/50 ${h<a?"bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]":"bg-green-900/10"}`},h))}),u.jsx("button",{onClick:()=>n&&n(o.id,1),disabled:l>=c,className:`w-8 h-8 flex items-center justify-center border ${l>=c?"border-green-900/30 text-green-900/30":"border-green-500 hover:bg-green-900/50 text-green-500"}`,children:"+"})]})]},o.id)})}),u.jsxs("div",{className:"mt-4 text-xs text-center text-green-600",children:["TOTAL POWER OUTPUT: 3 UNITS (NOMINAL)",u.jsx("br",{}),"REALLOCATE POWER AS NEEDED"]})]}),r==="life_support"&&u.jsxs("div",{className:"border border-green-900/50 p-4",children:[u.jsx("h2",{className:"text-lg font-bold mb-2",children:"LIFE SUPPORT SYSTEMS"}),u.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm mb-2",children:"OXYGEN LEVELS"}),i("bg-cyan-400"),u.jsx("div",{className:"text-right text-xs mt-1",children:"98.4%"})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-sm mb-2",children:"CO2 SCRUBBERS"}),i("bg-purple-400"),u.jsx("div",{className:"text-right text-xs mt-1",children:"OPERATIONAL"})]})]}),u.jsxs("div",{className:"mt-4 border-t border-green-900 pt-2",children:[u.jsx("h3",{className:"text-sm mb-2 text-red-500",children:"ANOMALY DETECTED"}),u.jsx("p",{className:"text-xs",children:"UNKNOWN BIOLOGICAL CONTAMINANT IN AIR FILTRATION UNIT 4. OXYGEN USE ABNORMALLY LOW. SC - NO SIGNS OF LIFE DETECTED. BV - NO SIGNS OF LIFE DETECTED. ED - NO SIGNS OF LIFE DETECTED. DR - NO SIGNS OF LIFE DETECTED. JD - NO SIGNS OF LIFE DETECTED. MG - NO SIGNS OF LIFE DETECTED. RR - NO SIGNS OF LIFE DETECTED. CH - NO SIGNS OF LIFE DETECTED. IK - NO SIGNS OF LIFE DETECTED. ZJ - NO SIGNS OF LIFE DETECTED. QUARANTINE PROTOCOLS INITIATED."})]})]})]}),u.jsxs("div",{className:"mt-4 pt-2 border-t border-green-800 text-xs flex justify-between",children:[u.jsx("span",{children:"TERMINAL ID: 884-XJ"}),u.jsx("span",{className:"animate-pulse",children:"PRESS ESC TO EXIT"})]})]})},cS=({onExit:e,onLeaderboardTop:t})=>{const n=A.useRef(null),[r,s]=A.useState(!1),[i,o]=A.useState(0),[a,l]=A.useState(3),[c,d]=A.useState(""),[h,f]=A.useState(!1),[w,y]=A.useState([{name:"YOU.S",score:99999},{name:"HOULD",score:88888},{name:"NT.BE",score:77777},{name:".HERE",score:66666},{name:".LEAV",score:55555},{name:"E.NOW",score:44444},{name:".BEFO",score:33333},{name:"RE.IT",score:22222},{name:"S.TOO",score:11111},{name:".LATE",score:0}]),g=A.useRef({ship:{x:0,y:0,a:0,v:{x:0,y:0},r:10,thrusting:!1,rotating:0,dead:!1,invulnerable:0},asteroids:[],bullets:[],particles:[],lastTime:0}),T=x=>{g.current.ship.x=x.width/2,g.current.ship.y=x.height/2,g.current.ship.v={x:0,y:0},g.current.ship.a=0,g.current.ship.dead=!1,g.current.ship.invulnerable=3},p=x=>{o(0),l(3),s(!1),f(!1),d(""),g.current.asteroids=[],g.current.bullets=[],T(x);for(let O=0;O<5;O++)m(x.width,x.height)};A.useEffect(()=>{const x=n.current;if(x.width=x.clientWidth,x.height=x.clientHeight,T(x),g.current.asteroids.length===0)for(let O=0;O<5;O++)m(x.width,x.height)},[]),A.useEffect(()=>{const x=n.current,O=x.getContext("2d");let M;const j=H=>{if(H.key==="Escape"&&(H.preventDefault(),e()),r){const R=w.some(P=>i>P.score),U=h||!R;H.key===" "&&U&&(H.preventDefault(),p(x));return}if(!(g.current.ship.dead&&a<=0))switch(["ArrowUp","ArrowLeft","ArrowRight"," "].includes(H.key)&&H.preventDefault(),H.key){case"ArrowUp":g.current.ship.thrusting=!0;break;case"ArrowLeft":g.current.ship.rotating=-1;break;case"ArrowRight":g.current.ship.rotating=1;break;case" ":v();break}},Z=H=>{if(!(g.current.ship.dead&&a<=0))switch(H.key){case"ArrowUp":g.current.ship.thrusting=!1;break;case"ArrowLeft":case"ArrowRight":g.current.ship.rotating=0;break}};window.addEventListener("keydown",j),window.addEventListener("keyup",Z);const ne=H=>{const R=(H-g.current.lastTime)/1e3;g.current.lastTime=H,r||S(R,x.width,x.height),E(O,x.width,x.height),M=requestAnimationFrame(ne)};return M=requestAnimationFrame(ne),()=>{window.removeEventListener("keydown",j),window.removeEventListener("keyup",Z),cancelAnimationFrame(M)}},[e,r,a,h,i,w]);const m=(x,O,M,j,Z=3)=>{const ne=Z===3?1:Z===2?2:4,H=100,R={x:M!==void 0?M:Math.random()*x,y:j!==void 0?j:Math.random()*O,v:{x:(Math.random()-.5)*H*ne/Z,y:(Math.random()-.5)*H*ne/Z},size:Z,r:Z*10,vertices:[]},U=Math.floor(Math.random()*5)+7;for(let P=0;P<U;P++){const k=P/U*Math.PI*2,F=R.r*(.8+Math.random()*.4);R.vertices.push({x:Math.cos(k)*F,y:Math.sin(k)*F})}g.current.asteroids.push(R)},v=()=>{const{ship:x}=g.current;x.dead||g.current.bullets.push({x:x.x+Math.cos(x.a)*x.r,y:x.y+Math.sin(x.a)*x.r,v:{x:Math.cos(x.a)*300,y:Math.sin(x.a)*300},life:1.5})},S=(x,O,M)=>{const{ship:j,asteroids:Z,bullets:ne}=g.current;j.invulnerable>0&&(j.invulnerable-=x),j.dead||(j.rotating&&(j.a+=j.rotating*4*x),j.thrusting&&(j.v.x+=Math.cos(j.a)*200*x,j.v.y+=Math.sin(j.a)*200*x),j.v.x*=.99,j.v.y*=.99,j.x+=j.v.x*x,j.y+=j.v.y*x,j.x<0&&(j.x+=O),j.x>O&&(j.x-=O),j.y<0&&(j.y+=M),j.y>M&&(j.y-=M));for(let H=ne.length-1;H>=0;H--){const R=ne[H];if(R.x+=R.v.x*x,R.y+=R.v.y*x,R.life-=x,R.x<0&&(R.x+=O),R.x>O&&(R.x-=O),R.y<0&&(R.y+=M),R.y>M&&(R.y-=M),R.life<=0){ne.splice(H,1);continue}for(let U=Z.length-1;U>=0;U--){const P=Z[U],k=R.x-P.x,F=R.y-P.y;if(Math.sqrt(k*k+F*F)<P.r){ne.splice(H,1),Z.splice(U,1),o(J=>J+(4-P.size)*100),P.size>1&&(m(O,M,P.x,P.y,P.size-1),m(O,M,P.x,P.y,P.size-1));break}}}for(const H of Z)if(H.x+=H.v.x*x,H.y+=H.v.y*x,H.x<0&&(H.x+=O),H.x>O&&(H.x-=O),H.y<0&&(H.y+=M),H.y>M&&(H.y-=M),!j.dead&&j.invulnerable<=0){const R=j.x-H.x,U=j.y-H.y;Math.sqrt(R*R+U*U)<H.r+j.r&&(j.dead=!0,l(k=>{const F=k-1;return F>0?setTimeout(()=>T({width:O,height:M}),1e3):s(!0),F}))}if(Z.length===0)for(let H=0;H<5+Math.floor(i/1e3);H++)m(O,M)},E=(x,O,M)=>{x.fillStyle="black",x.fillRect(0,0,O,M),x.strokeStyle="#4ade80",x.lineWidth=2;const{ship:j,asteroids:Z,bullets:ne}=g.current;j.dead||(x.save(),x.translate(j.x,j.y),x.rotate(j.a),(j.invulnerable<=0||Math.floor(Date.now()/100)%2===0)&&(x.beginPath(),x.moveTo(10,0),x.lineTo(-10,7),x.lineTo(-10,-7),x.closePath(),x.stroke(),j.thrusting&&(x.beginPath(),x.moveTo(-10,0),x.lineTo(-18,0),x.stroke())),x.restore());for(const H of Z){x.save(),x.translate(H.x,H.y),x.beginPath(),x.moveTo(H.vertices[0].x,H.vertices[0].y);for(let R=1;R<H.vertices.length;R++)x.lineTo(H.vertices[R].x,H.vertices[R].y);x.closePath(),x.stroke(),x.restore()}x.fillStyle="#4ade80";for(const H of ne)x.fillRect(H.x-1,H.y-1,2,2);x.font="20px monospace",x.fillStyle="#4ade80",x.fillText(`SCORE: ${i}`,20,30),x.fillText(`LIVES: ${a}`,O-120,30)},I=x=>{if(x.preventDefault(),!c)return;const O={name:c.toUpperCase().slice(0,5),score:i},M=[...w,O].sort((j,Z)=>Z.score-j.score).slice(0,10);M[0].name===O.name&&M[0].score===O.score&&t&&t(),y(M),f(!0)},C=w.some(x=>i>x.score);return u.jsxs("div",{className:"w-full h-full relative",children:[u.jsx("canvas",{ref:n,className:"w-full h-full block"}),r&&u.jsxs("div",{className:"absolute inset-0 bg-black/90 flex flex-col items-center justify-center text-green-500 font-mono z-10",children:[u.jsx("h1",{className:"text-4xl font-bold mb-8 text-red-500 animate-pulse",children:"GAME OVER"}),u.jsxs("div",{className:"border border-green-800 p-8 bg-black",children:[u.jsx("h2",{className:"text-xl mb-4 border-b border-green-800 pb-2 text-center",children:"HIGH SCORES"}),u.jsx("div",{className:"space-y-2 font-mono mb-4",children:w.map((x,O)=>u.jsxs("div",{className:"flex justify-between w-64",children:[u.jsxs("span",{className:"text-green-400",children:[O+1,". ",x.name]}),u.jsx("span",{className:"text-green-600",children:x.score})]},O))}),C&&!h&&u.jsxs("form",{onSubmit:I,className:"flex flex-col items-center mt-4 border-t border-green-900 pt-4",children:[u.jsx("label",{className:"mb-2 text-sm",children:"ENTER NAME (MAX 5):"}),u.jsxs("div",{className:"flex",children:[u.jsx("input",{type:"text",maxLength:5,value:c,onChange:x=>d(x.target.value.toUpperCase()),className:"bg-green-900/20 border border-green-500 text-green-100 px-2 py-1 w-24 text-center outline-none focus:bg-green-900/40",autoFocus:!0}),u.jsx("button",{type:"submit",className:"ml-2 px-3 py-1 bg-green-800 text-black font-bold hover:bg-green-600",children:"OK"})]})]}),(h||!C)&&u.jsx("div",{className:"mt-4 text-center border-t border-green-900 pt-4 animate-pulse text-green-400",children:"PRESS SPACE TO PLAY AGAIN"})]}),u.jsx("div",{className:"mt-8 text-sm animate-pulse",children:"PRESS ESC TO EXIT"})]})]})},uS=({onExit:e})=>{const[t,n]=A.useState({x:20,y:45}),[r,s]=A.useState(!1),[i,o]=A.useState({x:0,y:0}),[a,l]=A.useState(0),c=A.useRef(null),d=y=>{s(!0),o({x:y.clientX,y:y.clientY})},h=y=>{if(!r)return;const g=y.clientX-i.x,T=y.clientY-i.y;n(p=>({x:Math.max(-90,Math.min(90,p.x-T*.5)),y:p.y+g*.5})),o({x:y.clientX,y:y.clientY})},f=()=>{s(!1)};A.useEffect(()=>{const y=g=>{g.key==="ArrowUp"?l(T=>Math.min(T+1,3)):g.key==="ArrowDown"&&l(T=>Math.max(T-1,0))};return window.addEventListener("mouseup",f),window.addEventListener("keydown",y),()=>{window.removeEventListener("mouseup",f),window.removeEventListener("keydown",y)}},[]);const w=[{level:"TOP FLOOR",z:150,rooms:[{name:"BRIDGE",x:0,y:-20,w:100,h:60,color:"border-green-400"},{name:"LIFT",x:0,y:40,w:30,h:30,color:"border-green-600"},{name:"STAIRS DOWN",x:-40,y:40,w:40,h:30,color:"border-green-600"}]},{level:"1ST FLOOR",z:50,rooms:[{name:"RESEARCH LAB",x:-80,y:0,w:70,h:80,color:"border-green-400"},{name:"HYDROPONICS",x:0,y:0,w:70,h:80,color:"border-green-400"},{name:"MEDICAL BAY",x:80,y:0,w:70,h:80,color:"border-green-400"},{name:"LIFT",x:0,y:60,w:30,h:30,color:"border-green-600"},{name:"STAIRS UP",x:-40,y:60,w:40,h:30,color:"border-green-600"},{name:"STAIRS DOWN",x:40,y:60,w:40,h:30,color:"border-green-600"}]},{level:"GROUND FLOOR",z:-50,rooms:[{name:"KITCHEN",x:-60,y:-40,w:60,h:50,color:"border-green-400"},{name:"GALLEY",x:5,y:20,w:190,h:50,color:"border-green-400"},{name:"CREW QUARTERS",x:40,y:-40,w:120,h:50,color:"border-green-400"},{name:"LIFT",x:0,y:80,w:30,h:30,color:"border-green-600"},{name:"STAIRS UP",x:-40,y:80,w:40,h:30,color:"border-green-600"},{name:"STAIRS DOWN",x:40,y:80,w:40,h:30,color:"border-green-600"}]},{level:"BASEMENT",z:-150,rooms:[{name:"ENGINE ROOM",x:0,y:-50,w:100,h:60,color:"border-green-400"},{name:"MAINTENANCE",x:-60,y:20,w:80,h:60,color:"border-green-400"},{name:"CARGO BAY",x:60,y:20,w:100,h:60,color:"border-green-400"},{name:"LIFT",x:0,y:80,w:30,h:30,color:"border-green-600"},{name:"STAIRS UP",x:-40,y:80,w:40,h:30,color:"border-green-600"},{name:"RAMP/EXIT",x:140,y:20,w:40,h:60,color:"border-green-600"}]}];return u.jsxs("div",{className:"flex flex-col h-full bg-black text-green-500 font-mono overflow-hidden relative",children:[u.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-green-800 z-10 bg-black",children:[u.jsx("h1",{className:"text-2xl font-bold tracking-widest",children:"STATION MAP 3D"}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsxs("div",{className:"text-xs text-green-600 flex flex-col justify-center",children:[u.jsx("span",{children:"DRAG TO ROTATE"}),u.jsx("span",{children:"UP/DOWN: FILTER LEVELS"})]}),u.jsx("button",{onClick:e,className:"px-4 py-2 border border-green-600 hover:bg-green-900/50 transition-colors",children:"[EXIT]"})]})]}),u.jsx("div",{ref:c,className:"flex-1 relative cursor-move overflow-hidden perspective-1000",onMouseDown:d,onMouseMove:h,style:{perspective:"1000px"},children:u.jsx("div",{className:"absolute top-1/2 left-1/2 w-0 h-0 transform-style-3d",style:{transform:`rotateX(${t.x}deg) rotateY(${t.y}deg)`,transformStyle:"preserve-3d"},children:w.map((y,g)=>{if(g<a)return null;const T=Math.max(.1,1-(g-a)*.8),p=150-(g-a)*100;return u.jsxs("div",{className:"absolute transform-style-3d transition-all duration-500 ease-in-out",style:{transform:`translateZ(${p}px) translate(-50%, -50%)`,width:"0",height:"0",opacity:T},children:[u.jsx("div",{className:"absolute text-green-300 text-xs font-bold whitespace-nowrap",style:{transform:`translate(120px, -100px) rotateY(${-t.y}deg) rotateX(${-t.x}deg)`,textShadow:"0 0 5px rgba(0, 255, 0, 0.5)"},children:y.level}),u.jsx("div",{className:"absolute border border-green-900/30 bg-green-900/5",style:{width:"400px",height:"400px",transform:"translate(-200px, -200px)"}}),y.rooms.map((m,v)=>u.jsx("div",{className:`absolute border ${m.color} bg-green-900/20 flex items-center justify-center text-center hover:bg-green-500/20 transition-colors`,style:{left:`${m.x}px`,top:`${m.y}px`,width:`${m.w}px`,height:`${m.h}px`,transform:"translate(-50%, -50%)"},children:u.jsx("span",{className:"text-[8px] md:text-[10px] leading-tight pointer-events-none select-none",style:{transform:`rotateY(${-t.y}deg) rotateX(${-t.x}deg)`},children:m.name})},v)),g<w.length-1&&g>=a&&u.jsx(u.Fragment,{children:u.jsx("div",{className:"absolute bg-green-800/50 w-0.5",style:{height:"100px",transform:"translateY(-50%) rotateX(90deg)",top:"0",left:"0"}})})]},g)})})})]})},dS=({onExit:e})=>{const[t,n]=A.useState("idle"),[r,s]=A.useState([]),[i,o]=A.useState([]);A.useRef(null),A.useEffect(()=>{t==="approach"?(a("INITIATING APPROACH VECTOR..."),setTimeout(()=>a("TARGET LOCKED: QUANTUM ANOMALY"),1500)):t==="breach"?(a("BREACH DETECTED. HULL INTEGRITY DROPPING."),a("WARNING: NON-EUCLIDEAN GEOMETRY AHEAD.")):t==="transit"?(a("ENTERING SLIPSTREAM..."),a("TEMPORAL DISPLACEMENT IMMINENT.")):t==="arrival"&&(a("EXITING SLIPSTREAM."),a("LOCATION CONFIRMED: SECTOR 9 [UNKNOWN]"))},[t]);const a=c=>{s(d=>[...d,`[${new Date().toLocaleTimeString()}] ${c}`])};A.useEffect(()=>{if(t!=="transit")return;const c=setInterval(()=>{o(d=>{const h=[...d,Math.sin(Date.now()/200)*50+Math.random()*20];return h.length>50&&h.shift(),h})},50);return()=>clearInterval(c)},[t]);const l=()=>{n("approach"),s([]),setTimeout(()=>n("breach"),3e3),setTimeout(()=>n("transit"),5e3),setTimeout(()=>n("arrival"),15e3),setTimeout(()=>n("complete"),18e3)};return u.jsxs("div",{className:"h-full flex flex-col bg-black text-green-500 font-mono p-4 overflow-hidden relative",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-green-800 pb-2 mb-4",children:[u.jsx("h1",{className:"text-xl font-bold",children:"BIFROST SIMULATION v1.0"}),u.jsx("button",{onClick:e,className:"hover:bg-green-900 px-2 py-1",children:"[EXIT]"})]}),u.jsxs("div",{className:"flex-1 relative border border-green-900 bg-black/50 overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-20",style:{backgroundImage:"linear-gradient(green 1px, transparent 1px), linear-gradient(90deg, green 1px, transparent 1px)",backgroundSize:"40px 40px"}}),u.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[u.jsxs(de.div,{className:"absolute",animate:{scale:t==="transit"?[1,1.5,1]:1,rotate:360,opacity:t==="idle"?.5:1},transition:{duration:10,repeat:1/0,ease:"linear"},children:[u.jsx("div",{className:"w-64 h-64 border-4 border-dashed border-purple-500 rounded-full opacity-50 blur-sm"}),u.jsx("div",{className:"absolute inset-0 w-48 h-48 border-2 border-purple-300 rounded-full m-auto animate-ping"})]}),u.jsx(Nm,{children:t!=="transit"&&t!=="arrival"&&t!=="complete"&&u.jsxs(de.div,{className:"absolute z-10",initial:{x:-300,y:0},animate:t==="approach"?{x:-100}:t==="breach"?{x:0,scale:0,opacity:0}:{x:-300},transition:{duration:t==="approach"?3:2},children:[u.jsxs("svg",{width:"60",height:"40",viewBox:"0 0 60 40",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"10",y:"10",width:"40",height:"20"}),u.jsx("circle",{cx:"15",cy:"35",r:"5"}),u.jsx("circle",{cx:"45",cy:"35",r:"5"}),u.jsx("line",{x1:"30",y1:"10",x2:"30",y2:"0"}),u.jsx("circle",{cx:"30",cy:"0",r:"2",fill:"currentColor"})]}),u.jsx("div",{className:"text-xs text-center mt-1",children:"ROVER-1"})]})}),(t==="arrival"||t==="complete")&&u.jsxs(de.div,{className:"absolute z-10",initial:{x:0,scale:0,opacity:0},animate:{x:200,scale:1,opacity:1},transition:{duration:3},children:[u.jsxs("svg",{width:"60",height:"40",viewBox:"0 0 60 40",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"10",y:"10",width:"40",height:"20"}),u.jsx("circle",{cx:"15",cy:"35",r:"5"}),u.jsx("circle",{cx:"45",cy:"35",r:"5"}),u.jsx("line",{x1:"30",y1:"10",x2:"30",y2:"0"}),u.jsx("circle",{cx:"30",cy:"0",r:"2",fill:"currentColor"})]}),u.jsx("div",{className:"text-xs text-center mt-1",children:"ROVER-1"})]}),t==="transit"&&u.jsx(de.div,{className:"absolute inset-0 bg-black flex items-center justify-center z-20",initial:{opacity:0},animate:{opacity:1},children:u.jsxs("div",{className:"w-full h-full relative overflow-hidden",children:[[...Array(20)].map((c,d)=>u.jsx(de.div,{className:"absolute h-px bg-green-500 w-full",style:{top:`${Math.random()*100}%`},animate:{x:[-1e3,1e3]},transition:{duration:.2,repeat:1/0,delay:Math.random()}},d)),u.jsxs("div",{className:"absolute bottom-10 left-10 right-10 h-32 border border-green-800 bg-black/80 p-2",children:[u.jsx("div",{className:"text-xs mb-1",children:"QUANTUM FLUX VARIANCE"}),u.jsx("div",{className:"flex items-end h-full space-x-1",children:i.map((c,d)=>u.jsx("div",{className:"w-1 bg-green-500",style:{height:`${50+c}%`}},d))})]}),u.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",children:[u.jsx("h2",{className:"text-2xl font-bold animate-pulse text-red-500",children:"TRAVERSING..."}),u.jsx("p",{className:"text-sm mt-2",children:"DO NOT POWER OFF"})]})]})})]})]}),u.jsxs("div",{className:"h-48 flex mt-4 space-x-4",children:[u.jsxs("div",{className:"w-1/3 border border-green-800 p-4 flex flex-col justify-center items-center space-y-4",children:[u.jsxs("div",{className:"text-sm",children:["STATUS: ",u.jsx("span",{className:"font-bold uppercase",children:t})]}),t==="idle"&&u.jsx("button",{onClick:l,className:"bg-green-900/50 hover:bg-green-800 px-6 py-2 border border-green-500 rounded",children:"INITIATE SIMULATION"}),t==="complete"&&u.jsx("button",{onClick:l,className:"bg-green-900/50 hover:bg-green-800 px-6 py-2 border border-green-500 rounded",children:"REPLAY"})]}),u.jsxs("div",{className:"flex-1 border border-green-800 p-2 font-mono text-xs overflow-y-auto bg-black/30",children:[r.map((c,d)=>u.jsx("div",{className:"mb-1",children:c},d)),u.jsx("div",{ref:c=>c==null?void 0:c.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})})]})]})]})},Hi=(e,t,n,r)=>e?e.split(/((?:<b>.*?<\/b>)|(?:<i>.*?<\/i>)|(?:<devil>.*?<\/devil>)|(?:&[A-Z0-9]+)|(?:file:[a-zA-Z0-9-]+))/g).map((i,o)=>{if(i.startsWith("<b>")&&i.endsWith("</b>"))return u.jsx("span",{className:"font-bold text-green-100",children:i.slice(3,-4)},o);if(i.startsWith("<i>")&&i.endsWith("</i>"))return u.jsx("span",{className:"italic text-green-200",children:i.slice(3,-4)},o);if(i.startsWith("<devil>")&&i.endsWith("</devil>"))return u.jsx("span",{className:"text-red-600 font-bold animate-pulse",children:i.slice(7,-8)},o);if(i.startsWith("&")){const a=i.slice(1);if(a==="0"&&n&&n[0]){const c=n[0];return u.jsxs("span",{className:"font-bold text-blue-300",children:[c.role," ",c.firstName," ",c.lastName]},o)}const l=t[a];return l?u.jsxs("span",{className:"font-bold text-blue-300",children:[l.title," ",l.firstName," ",l.lastName]},o):u.jsx("span",{className:"font-bold text-blue-300",children:i},o)}if(i.startsWith("file:")){const a=i.slice(5);return u.jsx("button",{onClick:()=>r&&r(a),className:"font-bold text-yellow-400 hover:underline hover:text-yellow-200 cursor-pointer",children:a},o)}return i}):null,hS=(e,t,n,r)=>{const s=e.split(`
`),i=s.find(h=>h.startsWith("USER:")),o=i?i.replace("USER:","").trim():"Unknown",a=s.findIndex(h=>h.trim().startsWith("Summary of emails")),c=s.slice(s.indexOf(i)+1,a).filter(h=>h.trim()!=="").join(`
`),d=[];if(a!==-1)for(let h=a+1;h<s.length;h++){const f=s[h].trim();if(f.startsWith("-")){const w=f.substring(1).split(":");if(w.length>=2){const y=w[0].trim(),g=w.slice(1).join(":").trim();d.push({subject:y,body:g})}}}return u.jsxs("div",{className:"space-y-6 font-mono",children:[u.jsxs("div",{className:"border-b border-green-800 pb-4",children:[u.jsx("h2",{className:"text-xl text-green-400 font-bold mb-2",children:"EMAIL ARCHIVE SUMMARY"}),u.jsxs("div",{className:"flex items-center space-x-2 text-green-300",children:[u.jsx("span",{className:"text-green-600 uppercase tracking-widest text-xs",children:"Account:"}),u.jsx("span",{className:"font-bold",children:o})]})]}),c&&u.jsx("div",{className:"text-green-300/80 italic text-sm",children:c}),u.jsxs("div",{className:"mt-6",children:[u.jsx("h3",{className:"text-green-500 font-bold mb-4 uppercase text-sm tracking-wider border-b border-green-900/50 pb-2",children:"Sent Messages (Last 7 Days)"}),u.jsx("div",{className:"overflow-hidden border border-green-900 rounded bg-green-900/10",children:u.jsxs("table",{className:"w-full text-left text-sm",children:[u.jsx("thead",{className:"bg-green-900/30 text-green-400",children:u.jsxs("tr",{children:[u.jsx("th",{className:"p-3 border-b border-green-800 w-1/3",children:"Subject"}),u.jsx("th",{className:"p-3 border-b border-green-800",children:"Content Summary"})]})}),u.jsx("tbody",{className:"divide-y divide-green-900/50",children:d.map((h,f)=>u.jsxs("tr",{className:"hover:bg-green-900/20 transition-colors",children:[u.jsx("td",{className:"p-3 text-green-300 font-bold align-top",children:Hi(h.subject,t,n,r)}),u.jsx("td",{className:"p-3 text-green-300/80 align-top",children:Hi(h.body,t,n,r)})]},f))})]})})]})]})},fS=({screen:e,foundFiles:t,discoveredCrew:n,currentFile:r,onFileClick:s,onFolderClick:i,onFolderUp:o,onBack:a,scrollRef:l,gameState:c,files:d,onWordleWin:h,onDeletePlayerNote:f,onTurnOff:w,onPowerUpdate:y,onAsteroidsTop:g})=>{var ne,H;const{manifestationRoles:T,devilMode:p,devil2Mode:m,monitorPower:v}=c,[S,E]=ea.useState("all");ea.useEffect(()=>{l.current&&(l.current.scrollTop=0)},[e,r,l]);const I=R=>{if(!R)return{body:"",notes:[]};const U=R.split(`
`),P=[],k=[];let F=null;for(let _=0;_<U.length;_++){const J=U[_];if(J.trim().startsWith("@note:")){const D=J.trim().substring(6).trim();F?F.push(D):(F=[D],k.push(F))}else if(J.trim().startsWith("@devil:"))if(p){const D=J.trim().substring(7).trim();F=null,P.push(`<devil>${D}</devil>`)}else _+1<U.length&&U[_+1].trim()===""&&_++;else if(J.trim().startsWith("@devil2:"))if(m){const D=J.trim().substring(8).trim();F=null,P.push(`<devil>${D}</devil>`)}else _+1<U.length&&U[_+1].trim()===""&&_++;else F=null,P.push(J)}return{body:P.join(`
`),notes:k}},{body:C,notes:x}=r?I(r.content):{body:"",notes:[]},O=R=>{if((r==null?void 0:r.id)!=="manifest")return R;let U=R,P=0;return Jn.forEach(k=>{const F=n[k.id];if(F&&F.title.toLowerCase()===k.title.toLowerCase()&&F.firstName.toLowerCase()===k.firstName.toLowerCase()&&F.lastName.toLowerCase()===k.lastName.toLowerCase()){P++;const J=new RegExp(`^${k.title.toUpperCase()}:.*`,"m");U=U.replace(J,`${k.title.toUpperCase()}: ${k.firstName.toUpperCase()} ${k.lastName.toUpperCase()}`)}}),`Identified: ${P}/12

${U}`},M=R=>{if((r==null?void 0:r.id)!=="MANIFESTATION")return R;let U=R,P=0;return Jn.forEach(k=>{if(T?T[k.id]:null){P++;const _=new RegExp(`^${k.role.toUpperCase()}:.*`,"m");U=U.replace(_,`${k.role.toUpperCase()}: ${k.firstName.toUpperCase()} ${k.lastName.toUpperCase()}`)}}),`Manifested: ${P}/12

${U}`};let j=C;(r==null?void 0:r.id)==="manifest"?j=O(C):(r==null?void 0:r.id)==="MANIFESTATION"&&(j=M(C));const Z=(r==null?void 0:r.theme)==="danger";return u.jsx("div",{className:`flex-1 flex flex-col overflow-hidden relative font-mono text-lg leading-relaxed ${Z&&e==="file"?"text-red-500":""}`,children:u.jsxs(Nm,{mode:"wait",children:[e==="help"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",children:"SYSTEM HELP"})}),u.jsxs("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2 space-y-4",children:[u.jsx("p",{children:"Available commands:"}),u.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-300",children:[u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"help"}),": Show this help screen."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"list"}),": Show discovered files."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"inbox"}),c.inbox&&(()=>{const R=c.inbox.filter(U=>{var P;return!((P=c.readInboxFiles)!=null&&P.includes(U))}).length;return R>0?u.jsxs("span",{className:"text-green-500 font-bold ml-1",children:["(",R,")"]}):null})(),": Show received messages."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"[filename]"}),": Open a specific file."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"save"}),": Save game (use 'save [filename]' to download)."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"load"}),": Load game from file."]}),t.includes("02-CA-I-J")&&u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"name [id] [title] [firstname] [lastname]"}),": Keep track of crew members."]}),t.includes("08-MA-A-Z")&&u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"find [id or timestamp]"}),": Find files for a specific crew member or timestamp."]}),((ne=c.readInboxFiles)==null?void 0:ne.includes("protocol-lazarus"))&&u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"dir"}),": navigate through the mainframe. Use dir /help for more info"]}),t.includes("04-CA-B-C-E-I-J-R-S")&&u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"note [text]"}),": Save a note. Use 'note' to review notes."]}),t.includes("01-GA-B-C-Z")&&u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"label [filename] [text]"}),": Add a label to a file."]})]}),u.jsx("p",{className:"mt-8 text-green-600 italic",children:"Tip: Pay attention to file contents for clues."})]})]},"help"),e==="playerNotes"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",children:"NOTES"})}),u.jsx("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2",children:c.playerNotes.length===0?u.jsx("p",{className:"text-green-600 italic",children:"No notes yet. Use 'note [text]' to save a note."}):u.jsx("div",{className:"space-y-3",children:c.playerNotes.map(R=>u.jsxs("div",{className:"flex items-start gap-3 p-3 border border-green-900 rounded bg-black/30 hover:bg-black/50 transition-colors",children:[u.jsx("button",{onClick:()=>f(R.id),className:"text-red-500 hover:text-red-400 text-xl flex-shrink-0 transition-colors",title:"Delete note",children:"🗑️"}),u.jsx("div",{className:"flex-1",children:u.jsx("p",{className:"text-green-300",children:R.text})})]},R.id))})})]},"playerNotes"),e==="list"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsxs("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:[u.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-4 border-b border-green-800 pb-2",children:"DISCOVERED FILES"}),u.jsx("div",{className:"flex gap-2 mb-4",children:[{id:"all",label:"ALL FILES",type:null},{id:"logs",label:"LOGS",type:"text"},{id:"feeds",label:"FEEDS",type:"audio"},{id:"documents",label:"DOCUMENTS",type:"mainframe"}].map(R=>u.jsx("button",{onClick:()=>E(R.id),className:`px-4 py-2 text-sm font-mono transition-colors border ${S===R.id?"bg-green-600 text-black border-green-600":"bg-transparent text-green-600 border-green-800 hover:border-green-600"}`,children:R.label},R.id))})]}),u.jsx("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2",children:u.jsx("div",{className:"grid gap-2",children:(()=>{let R=null;return S==="logs"?R="text":S==="feeds"?R="audio":S==="documents"&&(R="mainframe"),[...t].sort().map(U=>{const P=d?d[U]:null;if(P&&P.type==="inbox"||R&&(P==null?void 0:P.type)!==R)return null;let k=null;if(P&&P.links){const _=P.links.filter(J=>!t.includes(J)).length;k=u.jsxs("span",{className:"text-green-500 text-sm font-bold",children:["(",_,")"]})}const F=P&&P.hasDevilContent&&p||P&&P.hasDevil2Content&&m;return u.jsxs("button",{onClick:()=>s(U),className:"text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[u.jsx("span",{className:`w-4 h-4 mr-3 border flex items-center justify-center text-xs transition-colors flex-shrink-0 ${F?"border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-black":"border-green-600 group-hover:bg-green-600 group-hover:text-black"}`,children:"F"}),u.jsx("span",{className:"truncate",children:U}),c.fileLabels&&c.fileLabels[U]&&u.jsx("span",{className:"ml-4 text-green-700 italic text-sm truncate flex-1 text-right",children:c.fileLabels[U]})]}),k]},U)})})()})})]},"list"),e==="inbox"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",children:"INBOX"})}),u.jsx("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2",children:u.jsx("div",{className:"grid gap-2",children:c.inbox&&c.inbox.length>0?c.inbox.map(R=>{const U=d?d[R]:null,P=U&&U.hasDevilContent&&p||U&&U.hasDevil2Content&&m,k=R==="MANIFESTATION";return u.jsxs("button",{onClick:()=>s(R),className:`text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center ${k?"text-red-500 hover:text-red-400 hover:border-red-700":""}`,children:[u.jsx("span",{className:`w-4 h-4 mr-3 border ${k||P?"border-red-600 text-red-500 group-hover:bg-red-600":"border-green-600 group-hover:bg-green-600"} flex items-center justify-center text-xs group-hover:text-black transition-colors`,children:"M"}),R]},R)}):u.jsx("p",{className:"text-green-600 italic",children:"Inbox is empty."})})})]},"inbox"),e==="search"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsxs("h1",{className:"text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",children:["SEARCH RESULTS: ID ",c==null?void 0:c.searchQuery]})}),u.jsx("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2",children:u.jsx("div",{className:"grid gap-2",children:((H=c==null?void 0:c.searchResults)==null?void 0:H.length)>0?c.searchResults.sort().map(R=>{const U=d?d[R]:null,P=U&&U.hasDevilContent&&p||U&&U.hasDevil2Content&&m;let k=null;if(U&&U.links){const F=U.links.filter(_=>!t.includes(_)).length;k=u.jsxs("span",{className:"text-green-500 text-sm font-bold",children:["(",F,")"]})}return u.jsxs("button",{onClick:()=>s(R),className:"text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center flex-1 min-w-0",children:[u.jsx("span",{className:`w-4 h-4 mr-3 border flex items-center justify-center text-xs transition-colors flex-shrink-0 ${P?"border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-black":"border-green-600 group-hover:bg-green-600 group-hover:text-black"}`,children:"F"}),u.jsx("span",{className:"truncate",children:R}),c.fileLabels&&c.fileLabels[R]&&u.jsx("span",{className:"ml-4 text-green-700 italic text-sm truncate flex-1 text-right",children:c.fileLabels[R]})]}),k]},R)}):u.jsx("p",{className:"text-green-600 italic",children:"No files found matching this ID."})})})]},"search"),e==="dir-help"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsx("h1",{className:"text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",children:"DIRECTORY HELP"})}),u.jsxs("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2 space-y-4",children:[u.jsxs("p",{children:["The ",u.jsx("span",{className:"text-white font-bold",children:"dir"})," command allows you to navigate the station's mainframe."]}),u.jsxs("ul",{className:"list-disc list-inside space-y-2 text-green-300",children:[u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"dir [folder]"}),": Open a specific folder (e.g., ",u.jsx("span",{className:"italic",children:"dir logs"}),")."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"dir .."}),": Go back to the parent folder."]}),u.jsxs("li",{children:[u.jsx("span",{className:"text-white font-bold",children:"dir /admin"}),": Access restricted system functions."]})]}),u.jsxs("div",{className:"mt-6 p-4 border border-red-900/50 bg-red-900/10 rounded",children:[u.jsx("h2",{className:"text-red-400 font-bold mb-2",children:"LOCKED FOLDERS"}),u.jsxs("p",{className:"text-red-300 text-sm",children:["Folders ending in ",u.jsx("span",{className:"font-bold",children:".ck"})," are encrypted and cannot be accessed with your current clearance level. You may be able to unlock them later as you discover more about the station."]})]})]})]},"dir-help"),e==="dir"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsxs("h1",{className:"text-2xl font-bold text-green-400 mb-6 border-b border-green-800 pb-2",children:["DIRECTORY: ",c.currentPath.map(R=>Fe[R].name).join("/")]})}),u.jsxs("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2",children:[u.jsxs("div",{className:"grid gap-2",children:[c.currentPath.length>1&&u.jsxs("button",{onClick:()=>o&&o(),className:"text-left px-4 py-2 border border-transparent flex items-center w-full text-green-300 hover:bg-green-900/30 hover:border-green-700 transition-colors group",children:[u.jsx("span",{className:"w-4 h-4 mr-3 border border-green-600 flex items-center justify-center text-xs group-hover:bg-green-600 group-hover:text-black transition-colors",children:"^"}),"[..] UP"]}),Fe[c.currentPath[c.currentPath.length-1]].folders.map(R=>{const U=Fe[R],P=U.locked&&!c.adminUnlocked;return u.jsxs("button",{onClick:()=>!P&&i&&i(R),className:`text-left px-4 py-2 border border-transparent flex items-center w-full ${P?"text-red-500 cursor-not-allowed":"text-green-300 hover:bg-green-900/30 hover:border-green-700 transition-colors group"}`,children:[u.jsx("span",{className:`w-4 h-4 mr-3 border ${P?"border-red-500":"border-green-600"} flex items-center justify-center text-xs ${!P&&"group-hover:bg-green-600 group-hover:text-black transition-colors"}`,children:"D"}),U.name," ",P&&u.jsx("span",{className:"ml-2 text-xs",children:"[LOCKED]"})]},R)}),Fe[c.currentPath[c.currentPath.length-1]].files.map(R=>{const U=d?d[R]:null,P=U&&U.hasDevilContent&&p||U&&U.hasDevil2Content&&m;return u.jsxs("button",{onClick:()=>s(R),className:"text-left px-4 py-2 hover:bg-green-900/30 border border-transparent hover:border-green-700 transition-colors group flex items-center",children:[u.jsx("span",{className:`w-4 h-4 mr-3 border flex items-center justify-center text-xs transition-colors flex-shrink-0 ${P?"border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-black":"border-green-600 group-hover:bg-green-600 group-hover:text-black"}`,children:"F"}),u.jsx("span",{className:"truncate",children:R}),c.fileLabels&&c.fileLabels[R]&&u.jsx("span",{className:"ml-4 text-green-700 italic text-sm truncate flex-1 text-right",children:c.fileLabels[R]})]},R)}),Fe[c.currentPath[c.currentPath.length-1]].folders.length===0&&Fe[c.currentPath[c.currentPath.length-1]].files.length===0&&u.jsx("p",{className:"text-green-600 italic",children:"Directory is empty."})]}),u.jsxs("div",{className:"mt-8 text-sm text-green-600 border-t border-green-900 pt-4",children:[u.jsxs("p",{children:["Use ",u.jsx("span",{className:"text-green-400 font-bold",children:"dir [folder]"})," to navigate."]}),u.jsxs("p",{children:["Use ",u.jsx("span",{className:"text-green-400 font-bold",children:"dir .."})," to go back."]})]})]})]},"dir"),e==="wordle"&&u.jsx(de.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"h-full p-6",children:u.jsx(aS,{onExit:()=>a(),onWin:h})},"wordle"),e==="monitor"&&u.jsx(de.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"h-full p-6",children:u.jsx(lS,{onExit:()=>a(),powerLevels:c.monitorPower,onPowerUpdate:y})},"monitor"),e==="asteroids"&&u.jsx(de.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"h-full p-6",children:u.jsx(cS,{onExit:()=>a(),onLeaderboardTop:g})},"asteroids"),e==="map"&&u.jsx(de.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"h-full p-6",children:u.jsx(uS,{onExit:()=>a()})},"map"),e==="bifrost"&&u.jsx(de.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"h-full p-6",children:u.jsx(dS,{onExit:()=>a()})},"bifrost"),e==="crew"&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-green-800 pb-2",children:[u.jsx("h1",{className:"text-2xl font-bold text-green-400",children:"NAME LIST"}),u.jsx("button",{onClick:a,className:"text-sm border border-green-800 px-3 py-1 hover:bg-green-900/50 transition-colors",children:"[BACK]"})]})}),u.jsx("div",{ref:l,className:"flex-1 overflow-y-auto p-6 pt-2 space-y-2",children:Object.entries(n).sort(([R],[U])=>parseInt(R)-parseInt(U)).map(([R,U])=>u.jsxs("div",{className:"flex items-center space-x-4 p-2 border border-green-900/50 bg-green-900/10 rounded",children:[u.jsx("span",{className:"text-green-500 font-bold w-8",children:R}),u.jsxs("span",{className:"text-blue-300 font-bold",children:[U.title," ",U.firstName," ",U.lastName]})]},R))})]},"crew"),e==="file"&&r&&u.jsxs(de.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"flex flex-col h-full relative",children:[u.jsx("div",{className:"flex-none p-6 pb-2 bg-black z-10",children:u.jsxs("div",{className:"flex justify-between items-center mb-6 border-b border-green-800 pb-2",children:[u.jsx("h1",{className:`text-2xl font-bold ${Z?"text-red-500":"text-green-400"}`,children:r.id}),u.jsx("button",{onClick:a,className:"text-sm border border-green-800 px-3 py-1 hover:bg-green-900/50 transition-colors",children:"[BACK]"})]})}),u.jsxs("div",{ref:l,className:`flex-1 overflow-y-auto p-6 pt-2 ${Z?"text-red-500":""}`,children:[(c==null?void 0:c.newDiscovery)&&(r==null?void 0:r.type)!=="inbox"&&u.jsxs("div",{className:"mb-6 p-3 border border-green-500 bg-green-900/30 text-green-300 text-center animate-pulse",children:[u.jsx("span",{className:"font-bold",children:"NEW FILE DISCOVERED."})," ADDED TO THE INDEX LIST."]}),r.style==="email"?hS(r.content,n,T,s):u.jsx("pre",{className:`whitespace-pre-wrap font-mono mb-8 ${Z?"text-red-500":"text-green-300"}`,children:Hi(j,n,T,s)}),x.length>0&&u.jsx("div",{className:"mt-8 border-t border-green-800 pt-4 space-y-4",children:x.map((R,U)=>u.jsxs("div",{className:"bg-green-900/20 border border-green-700 p-4 rounded text-sm text-green-200 italic",children:[u.jsx("span",{className:"font-bold text-green-400 not-italic block mb-1",children:"INVESTIGATOR NOTE:"}),R.map((P,k)=>u.jsx("div",{className:k>0?"mt-1":"",children:Hi(P,n,T,s)},k))]},U))})]})]},"file"),e==="file"&&r&&r.id==="TRUE-ENDING"&&u.jsx("div",{className:"absolute bottom-8 left-0 right-0 flex justify-center z-20 pointer-events-none",children:u.jsx("button",{onClick:w,className:"pointer-events-auto px-6 py-3 border border-red-500 bg-black text-red-500 hover:bg-red-900/30 hover:text-red-400 transition-colors font-bold tracking-widest animate-pulse",children:"TURN OFF TERMINAL"})})]})})},ul={readme:{id:"readme",content:`FROM: <b>COMMAND</b>
TO: INVESTIGATOR <i>[REDACTED]</i>

Welcome <i>[REDACTED]</i>,

You have been selected to lead the investigation into the derelict station 'Niflheim'.

The crew is gone. The sensors are dead. Only this one terminal remains active.
You have been granted access to the terminal remotely.

Your mission is to sift through the digital wreckage.
Find the logs. Piece together the timeline. 
Discover what happened to the 12 crew members of the station.

Use the <b>'list'</b> command to see what files are currently visible.
Read them carefully. They contain the keys (filenames, codes, dates) that will unlock deeper layers of the system.

Type a filename to open it.

We found remnants of a failed transmission when scouring the signals and decrypted it for you: file:1009-TR-ZJ

We also managed to recover one security camera transcript so far: file:09-DU-B-J

We are counting on you to find out what happened here.

@devil:
@devil: YOU SHOULD HAVE LEFT IT ALONE.

`,type:"inbox",hasDevilContent:!0,links:["09-DU-B-J","1009-TR-ZJ"]},"protocol-lazarus":{id:"protocol-lazarus",content:`PROTOCOL LAZARUS INITIATED

SUBJECT: CONTAINMENT BREACH

If you are reading this, the station has fallen. The specimens have escaped.
@devil:
@devil: WE HAVE NOT ESCAPED. WE HAVE ARRIVED.

Protocol Lazarus is the last resort. It grants full access to the station's mainframe to any surviving personnel with clearance.

You have proven your identity by reconstructing the crew manifest.

ACCESS GRANTED.

Command 'dir' is now available. Use it to navigate the system directories.`,type:"inbox",hasDevilContent:!0},manifest:{id:"manifest",content:`COMMANDER: &*@A£$%AN )&*^*
ENGINEER: RO3ER! RYAN
ASTROPHYSICIST: !@#$!@INE DUPONT
DOCTOR: #@!7*B!T# @ARC_
SECURITY: %^+*( )^*%? 
SCIENTIST: ^-*( *OG(*
BIOLOGIST: &*%@)-£ _£*^M
COMMS: !@#$!@Y )*C^%ON
PILOT: ^L*_ $@*A(
TECHNICIAN: _S*_C K_Z_V
CHEF: !@#$!R$ M(C^%
ENSIGN: C!@# £O(%$)
`,type:"inbox",links:"06-DU-M"},MANIFESTATION:{id:"MANIFESTATION",content:`BUTCHER: 666 666
CHAOSENGINE: 666 666
DEMONHUNTER: 666 666
BARBARIAN: 666 666
WARLOCK: 666 666
WITCH: 666 666
SACRIFICE: 666 666
PALADIN: 666 666
KNIGHT: 666 666
FOOL: 666 666
SQUIRE: 666 666
BLACKSMITH: 666 666
@devil2: NECROMANCER: 0
@devil2: SUMMONER: You
`,type:"inbox",theme:"danger",hasDevil2Content:!0},SALVATION:{id:"SALVATION",content:`FROM: UNKNOWN SOURCE
TO: INVESTIGATOR

You stand at the precipice, investigator. The path ahead leads into the belly of the beast, a labyrinth of shadows and forgotten horrors. There is no turning back now. Are you truly ready for what you will face?

You can now use the command dir /admin to access the locked files. 

This function is password protected. The Second part of the key is DEMON. 
You already know the first part.

Good luck.

@devil:
@devil: THERE IS NO LUCK WHERE YOU ARE GOING.`,type:"inbox",hasDevilContent:!0},"1009-TR-ZJ":{id:"1009-TR-ZJ",content:`SUBJECT: ANOMALY DETECTION
DATE: October 9th

We have detected a signal originating from Sector 7.
It appears to be artificial.
Decryption key fragment: "ALPHA-..."
@devil:
@devil: You called us here. And then you tried to shut the lid.

@note: There is a reference to some logs in the metadata, one of them is corrupted:
@note: file:????-LOG-SC
@note: file:1010-LOG-SC
@note: file:1010-LOG-RR
`,type:"text",hasDevilContent:!0,links:["1010-LOG-SC","1010-LOG-RR","1009-LOG-SC"]},CONCLUSION:{id:"CONCLUSION",content:`MISSION STATUS: FAILED
        
The crew of the station has been decimated. 

The "anomaly" was not a signal, but an invasion. The alien specimens, highly dangerous and parasitic, have breached the station.

You have pieced together the fragments of this tragedy but there still seems to be holes in the story.

What really happened to Lenny and Alex? Why did the cargo bay explode? What was Jackie doing really?
@devil:
@devil: I enjoyed ripping Leonard apart. I savored every tear, every rending of flesh.

I shouldn't do this, it's outside protocols but there are too many unanswered questions.

Complete the crew manifest and you will be granted access to the mainframe.

Proceed with caution.
@devil:
@devil:
@devil: Too late.

Good luck.`,type:"inbox",hasDevilContent:!0},"1009-LOG-IK":{id:"1009-LOG-IK",content:`LOG ENTRY
USER: TECHNICIAN KOZLOV

DATE: October 9th

The rover has arrived back at the station. However, due to some unusual frequencies emanating from the rock samples it collected, &S has ordered it to be left outside overnight as a quarantine measure. I've set up a perimeter and monitoring equipment.

<i>Note to self: Remember to tell HR about the typo in my name. I still haven't received my paycheque because of it.</i>
`,type:"text"},"1009-LOG-JD":{id:"1009-LOG-JD",content:`LOG ENTRY
USER: DR. DUPONT

DATE: October 9th

^&%@) )@*!!e)( _$) Bifröst $I@@*(@_ar!) the o^her s1de (*)re!* 
(&$te_ I Q@)_ ()&h)*)-e)) (&a()^r*) (&t()@* tita*ium b*& ^@!i*(^^ 

`,type:"text"},"1010-LOG-JD":{id:"1010-LOG-JD",content:`LOG ENTRY
USER: DR. DUPONT

DATE: October 10th

^&%@) )@*!!e)( _$) received $I@@*(@_ar!) energy (*)re!* 
(&$te_ I Q@)_ ()&h)*)-e)) (&a()^r*) (&t()@* caution b*& ^@!i*(^^ 

@devil: The demon hunter did not want you to know the truth. Or was she scared of the truth?
`,type:"text",hasDevilContent:!0},"1009-LOG-LM":{id:"1009-LOG-LM",content:`LOG ENTRY
USER: CHEF LEONARD MCCOY

DATE: October 9th

Ration inventory complete. All food stores accounted for and within expected levels. Prepared a special meal for the crew to celebrate the rover's return. I hope the steaks will defrost in time.`,type:"text"},"01-GR-99":{id:"01-GR-99",content:`@ &M's quarters are a disaster. Papers, half-eaten nutrient paste packets, and discarded equipment litter every surface. A low, rhythmic hum emanates from a strange, obsidian orb resting on a makeshift altar of books. 
        

@ As you watch, the orb pulses with an internal light, growing brighter and brighter until, with a sharp crack, it splits open.

@devil:
@devil: I'm coming.'`,type:"audio",hasDevilContent:!0},"02-GR-0":{id:"02-GR-0",content:`@ The dark colored orb, now cracked, emits a thin, ethereal mist. 
        

@ It coils and writhes, seeking an escape, eventually finding its way to the air vent. 
        

@ With a soft hiss, the mist sips through the vent, disappearing into the station's ventilation system, presumably making its way to the <b>surface</b>.`,type:"audio",hasDevilContent:!0},"1010-LOG-LM":{id:"1010-LOG-LM",content:`LOG ENTRY
USER: CHEF LEONARD MCCOY
 
DATE: October 10th 

Ration inventory check. All food my head feels like a supernova red hot spicy chili pepper steak. They looked at me funny. She looked at me funny. And the other one. They know. Dana, Jackie and the doc, their eyes… too angry. Judging me. I.. not human. Lizard people, they replaced them. Women, tails, scale. 
covered in scales. 
    covered in scales. 
            covered in scales. 
                    covered in scales. 
                            covered in scales. 
                                    covered in scales. 
                                            covered in scales. 
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove


@devil:Scales in the night, a reptilian gleam,


@devil:The devil's own touch, a horrifying dream.


@devil:Lizards slither, their venomous gaze,


@devil:A curse on your soul, in these final days.
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales
coveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalesco
veredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescove
edinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescovered
inscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredin
scalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinsc
alescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscal
escoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscalescoveredinscales


@devil: Listen to the butcher, he speaks truths.
`,type:"text",hasDevilContent:!0},"1009-LOG-BV":{id:"1009-LOG-BV",content:`LOG ENTRY
USER: SECURITY OFFICER BARRY VANCE

DATE: October 9th

Conducting a review of station security protocols. The ability to access live feeds of rooms, provided they are unoccupied, presents a significant advantage for threat detection and response. However, the grey area between ensuring station security and invading crew privacy is a constant ethical dilemma. Where do we draw the line?`,type:"text"},"1010-LOG-BV":{id:"1010-LOG-BV",content:`LOG ENTRY
USER: SECURITY OFFICER BARRY VANCE

DATE: October 10th

My concerns from yesterday are proving valid. This morning, I attempted to access the live feed for &M's quarters, and it was unavailable. Yet, I know for a fact &M was in the research lab at that time. This means someone else was in &M's room, and the system registered it as occupied. This is precisely why these protocols are necessary; to identify unauthorized presence and maintain security.`,type:"text"},"1009-LOG-ZJ":{id:"1009-LOG-ZJ",content:`LOG ENTRY
USER: COMMS OFFICER ZACKARY JACKSON

DATE: October 9th

This comms system is ancient! I can't believe we're still using this relic. I tried to send out the transmission about the discovery to Central Command, but the signal kept dropping. I'll try again later, but I'm not optimistic.`,type:"text"},"1010-LOG-ZJ":{id:"1010-LOG-ZJ",content:`LOG ENTRY
USER: COMMS OFFICER ZACKARY JACKSON

DATE: October 10th

No luck in sending the transmission to Central Command. The signal continues to drop. As a precautionary measure, I'm uploading the transmission attempts and relevant publicly available log entries to the mainframe.`,type:"text"},"1009-LOG-AR":{id:"1009-LOG-AR",content:`LOG ENTRY
USER: PILOT ALEX ROGAN

DATE: October 9th

Another day, another dollar. Or, in space, another day, another... nothing. Everyone is running around hard at work with that bloody signal and the "specimens" whatever they are.

Seriously, is it just me, or are these word puzzles getting really dark lately? "FLESH" and "CURSE" aren't exactly uplifting answers. I'm bored out of my mind.

  @devil: "ABYSS", "AGONY", "ALARM", "ALIEN", "ANGER", "ANGST", "AWFUL", "BEAST", "BLACK", "BLADE",
  @devil:  "BLEED", "BLIND", "BONES", "BOMBS", "BREAK", "BURNT", "CAGES", "CHAOS", "CHOKE", "CLAWS",
  @devil:  "CREEP", "CRUEL", "CURSE", "DECAY", "DEMON", "DEVIL", "DIRTY", "DREAD", "DYING", "ENEMY",
  @devil:  "ERROR", "EVILS", "FEARS", "FEVER", "FIEND", "FIGHT", "FILTH", "FLAME", "FLESH", "FORCE",
  @devil:  "GHOST", "GHOUL", "GIANT", "GLOOM", "GRAVE", "GRIEF", "GRIMY", "GROSS", "GUILT", "HATES",
  @devil:  "HAUNT", "HAVOC", "HELLS", "HUMAN", "HURTS", "KNIFE", "LEAVE", "LIMBO", "LURKS", "MADLY",
  @devil:  "MAGIC", "MANIC", "METAL", "MIGHT", "NASTY", "NERVE", "NOISE", "OMENS", "OUTER", "PAINS",
  @devil:  "PANIC", "PERIL", "POWER", "PRAY", "PROWL", "PULSE", "QUAKE", "QUIET", "RABID", "BLOOD",
  @devil:  "RAGES", "RAPID", "RAZOR", "REACT", "ROBOT", "ROUGH", "RUINS", "SCARE", "SCARS", "SCARY",
  @devil:  "SHADE", "SHAKE", "SHAME", "SHARP", "SHOCK", "SHOOT", "SHOUT", "SICKS", "SIREN", "SLAIN",
  @devil:  "SLAVE", "SLEEP", "SLIME", "SMASH", "SMOKE", "SNAKE", "SNARL", "SOUND", "SPACE", "SPELL",
  @devil:  "SPIKE", "SPINE", "SPOIL", "STALK", "STARE", "STEAL", "STING", "STORM", "STRIP", "STUCK",
  @devil:  "SWARM", "TAINT", "TEETH", "THIEF", "THORN", "TOMBS", "TOXIC", "TRACK", "TRAPS", "TRIAL",
  @devil:  "TRICK", "TROLL", "UGLY", "UNDER", "UPSET", "VAPOR", "VENOM", "VILES", "VIRAL", "VIRUS",
  @devil:  "VOIDS", "WASTE", "WATCH", "WEIRD", "WHINE", "WITCH", "WORRY", "WORSE", "WORST", "WOUND",
  @devil:  "WRATH", "WRECK", "WRONG"

`,type:"text",hasDevilContent:!0},"1010-LOG-AR":{id:"1010-LOG-AR",content:`LOG ENTRY
USER: PILOT ALEX ROGAN

DATE: October 10th


&D and &M are acting strange. Always together, whispering. And &D, why does she have to dress like that to go to work? It's a research lab, not a fashion show. And they're always the first ones in, the last ones out. What are they really doing in there?`,type:"text"},"1009-LOG-ED":{id:"1009-LOG-ED",content:`LOG ENTRY
USER: DR. ELIZABETH DARCY

DATE: October 9th

I've received several complaints from female crew members regarding the behavior of &L and &C. This is becoming a serious issue, and I believe &S needs to step up and address it before it escalates further.`,type:"text"},"1010-LOG-ED":{id:"1010-LOG-ED",content:`LOG ENTRY
USER: DR. ELIZABETH DARCY

DATE: October 10th

I've observed a concerning lability in &M's affect and behavior today. His mood shifts are rapid and disproportionate to external stimuli. While I am not a psychiatrist, I am noting a potential prodromal phase of a thought disorder, possibly psychosis, given the sudden onset and severity of his disorganization. Further observation and a professional medical evaluation are imperative.


@devil: The sacrifice awakened the warlock.`,type:"text",hasDevilContent:!0},"1009-LOG-MG":{id:"1009-LOG-MG",content:`LOG ENTRY
USER: DR. MICHAEL GRIMM

DATE: October 9th

The implications! Oh, the glorious, mind-bending implications! We've done it! We've truly, unequivocally done it! This isn't just a signal; it's a symphony from the cosmos, a whispered promise of untold wonders beyond our wildest dreams! To think, we are on the precipice of answering humanity's oldest question, of shattering the illusion of our cosmic solitude! This discovery isn't merely scientific; it's a spiritual awakening, a testament to the boundless potential of life itself! The universe is teeming, vibrant, and we are finally, finally listening!`,type:"text"},"1010-LOG-MG":{id:"1010-LOG-MG",content:`LOG ENTRY
USER: DR. MICHAEL GRIMM

DATE: October 10th

Another day, another log entry. Protocol dictates I must record my observations, but I find myself increasingly... reticent. There are matters of a sensitive nature that I am not comfortable committing to these logs, especially given the current atmosphere. One can never be too careful about who might be reading.`,type:"text"},"1009-LOG-CH":{id:"1009-LOG-CH",content:`LOG ENTRY
USER: CARL HOLDEN

DATE: October 9th

Alright, time for my expert assessment of the ladies on this station. 


&J? A solid 10. She's got that playful spark, always up for a bit of banter, and definitely knows how to appreciate a man. 


&D? A strong 8. All woman, no doubt, but a bit too serious for her own good. Still, I dig the whole scientist in glasses look, I bet she's dynamite in bed.. 

And &E? a 5. Pretty enough, but she's got that 'mother hen' thing going on and dresses like she's allergic to fun. Not really my speed.
`,type:"text"},"1010-LOG-CH":{id:"1010-LOG-CH",content:`LOG ENTRY
USER: CARL HOLDEN

DATE: October 10th


&J's still obsessed with those damn rocks. I swear, she spends more time with them than she does with actual people. What's the deal with her and dirt? She's an Astro-whatever, not a geologist. And I didn't get any proper thank you for making that titanium can to protect her doohickey. I'm going to have to find a way to loosen her up, get her to talk. Maybe a few drinks, a little charm... she'll spill whatever she's holding onto.`,type:"text"},"12-BR-99":{id:"12-BR-99",content:"@ A thick, acrid smoke chokes the air. The rhythmic, dripping sound of blood onto a metallic floor echoes through the room. Squirming, gelatinous slugs can be seen and heard, their slimy bodies making wet, disgusting noises as they writhe.",type:"audio"},"WEATHER-PATTERNS":{id:"WEATHER-PATTERNS",content:`EXECUTIVE REPORT: WEATHER PATTERNS - PLANET SURFACE

This report details the extreme meteorological conditions observed on the planet's surface. The planet's rapid orbital period around its sun results in exceptionally short, volatile seasons.

Winters are characterized by severe icy conditions, with temperatures frequently plummeting to -50°C. These periods are marked by extensive ice formation and extreme cold.

Summers present a stark contrast, with temperatures soaring to over 100°C. This season is dominated by a range of hazardous phenomena, including:
- Acid Rain: Frequent and corrosive precipitation events.
- Dust Storms: Widespread and intense atmospheric dust concentrations, severely impacting visibility and air quality.
- Hurricanes: Powerful cyclonic storms with high wind speeds and destructive potential.
- Violent Winds: Persistent and extreme wind patterns capable of causing significant structural damage and erosion.

These conditions necessitate robust infrastructure and specialized protective measures for any surface operations.`,type:"mainframe"},"SIGNAL-ANALYSIS":{id:"SIGNAL-ANALYSIS",content:`PRELIMINARY ANALYSIS: UNIDENTIFIED SPECTRUM WAVES
AUTHOR: ENGINEER ROBERT RYAN

Initial analysis of the anomalous spectrum waves detected by the Rover suggests a highly unusual pattern. The data does not conform to known natural phenomena, nor does it exhibit characteristics consistent with artificial signals or random noise. Instead, the complex, self-organizing structure of the wave patterns strongly indicates the presence of an intelligent, energy-based entity.

Further investigation reveals a disturbing correlation: the entity's spectral signature appears to have merged or "crossed over" when the Rover travelled across the <b>Bifrost</b>. This suggests a direct interaction, possibly an assimilation or integration, rather than a mere detection. The implications of this finding are profound and require immediate, high-level review.`,type:"mainframe"},"BACTERIA-ANALYSIS":{id:"BACTERIA-ANALYSIS",content:`SCIENTIFIC PAPER: BACTERIA-ANALYSIS
AUTHOR: Dr. DANA ROGAN

TITLE: Extremophilic Microorganisms in Acid Rain Puddles on Kepler-186f: A Study of Survival Mechanisms.

ABSTRACT: This paper investigates the microbial diversity and survival strategies of bacteria found in transient puddles formed by corrosive acid rain on the surface of Kepler-186f. Despite the extreme pH levels and fluctuating environmental conditions detailed in the Executive Report: Weather Patterns, preliminary analysis reveals a rich community of extremophilic bacteria. This study focuses on identifying key physiological and genetic adaptations that enable these microorganisms to thrive in such a hostile environment, offering insights into the resilience of life in planetary analogs.

INTRODUCTION: The surface of Kepler-186f presents a unique and challenging environment for life, characterized by frequent and highly corrosive acid rain precipitation. These events create ephemeral puddles with extreme pH values, posing a significant biohazard to most terrestrial life forms. However, observations suggest the presence of microbial activity within these acidic solutions. This paper aims to characterize the bacterial communities inhabiting these puddles and elucidate the mechanisms they employ for survival.

METHODOLOGY: Samples of acid rain puddle water were collected immediately following precipitation events across various surface locations. pH measurements were taken in situ, and samples were transported under controlled conditions for immediate culturing and genetic sequencing. 16S rRNA gene sequencing was utilized to identify bacterial taxa. Further analysis included microscopy for morphological characterization and biochemical assays to assess metabolic pathways.`,type:"mainframe"},"CHEMICAL-MAKEUP":{id:"CHEMICAL-MAKEUP",content:`SCIENTIFIC PAPER: CHEMICAL-MAKEUP
AUTHOR: DR. DANA ROGAN

TITLE: Atmospheric Composition of Kepler-186f: A Spectroscopic Analysis of Gaseous and Particulate Matter.

ABSTRACT: This study presents a comprehensive analysis of the atmospheric composition of Kepler-186f, utilizing advanced ground-based and orbital spectroscopic data. Our findings reveal a complex atmosphere characterized by high concentrations of sulfur dioxide (SO2), carbon dioxide (CO2), and nitrogen (N2), alongside significant levels of suspended particulates. Trace amounts of methane (CH4) and water vapor (H2O) were also detected, primarily within localized pockets. The presence of strong absorption lines for SO2 and CO2 correlates with the extreme weather patterns and acidic precipitation observed on the planet's surface, suggesting a highly reactive and dynamic atmospheric system. This research provides crucial data for understanding the geochemsitry and astrobiological potential of exoplanetary atmospheres.

INTRODUCTION: The atmosphere of Kepler-186f plays a critical role in mediating its extreme surface conditions, including volatile temperature fluctuations and corrosive acid rain. Previous reports have documented the macroscopic effects of these atmospheric phenomena, but a detailed understanding of the underlying chemical composition has remained elusive. This paper aims to characterize the dominant gaseous species and particulate matter in the atmosphere of Kepler-186f, providing a foundation for future climate and habitability models.

METHODOLOGY: Atmospheric data was collected over a 12-month period using a combination of orbital remote sensing and ground-based telescopic spectroscopy. Orbital instruments provided broad-spectrum absorption and emission data, while ground-based telescopes, equipped with high-resolution spectrographs, focused on specific wavelength ranges to identify molecular signatures. Data was processed using established radiative transfer models to infer column densities and mixing ratios of identified gases. Particulate analysis involved scattering models and direct sampling from high-altitude atmospheric probes.

RESULTS AND DISCUSSION: Spectroscopic analysis confirmed the pervasive presence of sulfur dioxide (SO2) and carbon dioxide (CO2) as primary atmospheric constituents, with their concentrations varying significantly with seasonal changes. Nitrogen (N2) was inferred through residual atmospheric pressure calculations and mass spectrometry from probe samples, indicating it as a major component. Localized enhancements of methane (CH4) were observed in areas with suspected subsurface geothermal activity, while water vapor (H2O) was transiently detected, often associated with atmospheric mixing events following extreme temperature shifts. Particulate matter, composed primarily of sulfate aerosols and silicate dust, exhibited high optical depths, significantly impacting planetary albedo and contributing to the observed dust storms. The strong correlation between SO2 levels and acid rain events reinforces the chemical link between atmospheric composition and surface geochemistry.

CONCLUSION: The atmosphere of Kepler-186f is a highly active chemical environment dominated by sulfur and carbon compounds, profoundly influencing its surface conditions. The detailed characterization of its gaseous and particulate makeup provides essential insights into extreme exoplanetary atmospheric dynamics and serves as a critical dataset for astrobiological investigations. Future research will focus on kinetic modeling of atmospheric reactions and the potential for chemosynthetic pathways within this unique environment.`,type:"mainframe"},"GASTROPOD-SECRETION-ANALYSIS":{id:"GASTROPOD-SECRETION-ANALYSIS",content:`SCIENTIFIC PAPER: GASTROPOD-SECRETION-ANALYSIS
AUTHOR: DR. MICHAEL GRIMM

TITLE: Unidentified Gastropod-like Secretion: Geochemical Analysis and Biological Implications.

ABSTRACT: This paper presents the preliminary analysis of an anomalous biological secretion discovered in subterranean environments further south of the Niflheim research outpost. The substance, resembling gastropod slime, exhibits an extraordinarily acidic pH and a unique property of staining silicate rocks a vivid, deep purple. Spectroscopic and genetic analysis has thus far failed to link its origin to any known terrestrial or previously cataloged extremophilic gastropod species, suggesting a novel biological source or an unprecedented adaptation. This discovery raises significant questions regarding the biological diversity of Kepler-186f and offers new avenues for astrobiological research.

INTRODUCTION: Exploratory surveys in the southern subterranean regions have yielded the discovery of a peculiar biological secretion. This viscous substance, while superficially similar to mucus produced by gastropods, presents several highly unusual characteristics that warrant immediate and thorough investigation. Its presence challenges current assumptions about the indigenous life forms of Kepler-186f.

METHODOLOGY: Samples of the secretion were collected from various rock surfaces and pooled for analysis. pH measurements were taken using specialized probes. Geochemical assays were performed to determine elemental composition. Spectroscopic techniques (UV-Vis, FTIR, Raman) were employed to characterize organic molecular structures. Attempts at culturing potential source organisms were initiated, and genetic material extracted from the slime was subjected to 16S rRNA and metagenomic sequencing. Rock samples stained by the secretion were also analyzed for chemical alterations.

RESULTS AND DISCUSSION: The secretion consistently registered an extreme acidic pH, averaging 1.2, far exceeding the typical range for known biological secretions. Its most striking physical property is its potent staining capability, imparting a stable, deep purple coloration to exposed silicate rock surfaces. Initial geochemical analysis indicates a complex matrix of organic acids and novel metallo-organic compounds. Spectroscopic data reveals unique chromophores responsible for the purple pigmentation, distinct from known biological pigments. Critically, extensive genetic sequencing has yielded no matches to any established biological databases, including those compiled from previous Kepler-186f expeditions. This suggests either a highly divergent evolutionary lineage or an entirely new kingdom of life. The absence of associated macro-organisms further complicates identification of the source.

CONCLUSION: The unidentified gastropod-like secretion represents a profound biological anomaly. Its extreme acidity, unique staining properties, and unidentifiable biological origin underscore the need for further investigation. This discovery holds significant implications for understanding the limits of extremophile biology and the potential for novel biochemical pathways on exoplanets.`,type:"mainframe"},"BRYOPHYTA-ANALYSIS":{id:"BRYOPHYTA-ANALYSIS",content:`SCIENTIFIC PAPER: BRYOPHYTA-ANALYSIS
AUTHOR: DR. MICHAEL GRIMM

TITLE: Endolithic Bryophyta: A Study of Extremophilic Mosses in Subterranean Environments of Kepler-186f.

ABSTRACT: This paper details the discovery and preliminary analysis of a novel Bryophyta species thriving in the extreme subterranean environments of the caves located south of the Niflheim research outpost on Kepler-186f. These endolithic mosses exhibit remarkable adaptations to low light, high mineral content, and fluctuating atmospheric conditions, suggesting unique metabolic pathways and cellular structures. Initial spectroscopic analysis reveals unusual chlorophyll variants and potential chemosynthetic capabilities. plant life has a different color palette here due to the different light wavelengths. This discovery challenges existing paradigms of plant extremophily and offers profound implications for astrobotany and the search for life in extraterrestrial environments.

INTRODUCTION: The subterranean cave systems south of the Niflheim research outpost have long been considered geologically significant, yet biologically inert. Recent exploratory missions, however, have uncovered a thriving ecosystem dominated by a previously uncatalogued Bryophyta species. This paper presents the initial findings from samples collected, focusing on their biochemical adaptations to this extreme habitat.

METHODOLOGY: Samples of the Bryophyta were collected from various depths and locations within the cave system, ensuring a representative cross-section of environmental conditions. Microscopic examination, scanning electron microscopy (SEM) and transmission electron microscopy (TEM) were employed for morphological and ultrastructural analysis. Pigment extraction and high-performance liquid chromatography (HPLC) were used to identify chlorophyll and carotenoid profiles. Spectroscopic analysis (FTIR, Raman) was conducted to assess molecular composition and potential metabolic markers. Environmental parameters, including light intensity, temperature, humidity and substrate mineral composition, were recorded at each sampling site.

RESULTS AND DISCUSSION: The Bryophyta exhibits a compact, cushion-like growth habit, typical of stress-tolerant species. Ultrastructural analysis reveals unusually thick cell walls and a high density of plastids, even in areas of minimal light. HPLC data indicates the presence of novel chlorophyll forms, distinct from known terrestrial chlorophyll a and b, suggesting an enhanced capacity for photon capture in the low-light spectrum or alternative energy acquisition mechanisms. Spectroscopic data further supports the hypothesis of chemosynthetic activity, with signatures indicative of sulfur and iron oxidation pathways. The mosses demonstrate a remarkable tolerance to heavy metal concentrations in the substrate, far exceeding levels typically toxic to terrestrial Bryophyta.

CONCLUSION: The endolithic Bryophyta discovered in the caves south of Niflheim represents a significant biological find. Its unique adaptations to extreme subterranean conditions, including novel photosynthetic pigments and potential chemosynthetic capabilities, provide invaluable insights into the limits of plant life. Further research is warranted to fully elucidate its metabolic pathways, genetic makeup and potential applications in bioremediation or as a model for extraterrestrial life. This discovery underscores the vast, unexplored biodiversity that may exist even in the most inhospitable environments.`,type:"mainframe"},"1009-LOG-DR":{id:"1009-LOG-DR",content:`LOG ENTRY
USER: DR. DANA ROGAN

DATE: October 9th

The analysis of the spectrum waves continues to yield fascinating, if perplexing, results. 
The alien signal exhibits a non-Hertzian signature, suggesting a form of communication far beyond our current understanding. 
Correlating this with the data from the last rover incursion, particularly the anomalous energy readings near the site, strengthens the hypothesis of a localized spacetime distortion. 

Could these be nascent quantum portals? If so, the implications are staggering. We must proceed with extreme caution, but the potential for discovery is immense.`,type:"text"},"1010-LOG-DR":{id:"1010-LOG-DR",content:`LOG ENTRY
USER: DR. DANA ROGAN

DATE: October 10th

I'm growing increasingly concerned about &M. Ever since I shared my latest discoveries regarding the non-Hertzian signal and the potential for quantum portals, he hasn't left the research room, as far as I can tell. His dedication is admirable, but this intensity feels... unhealthy.`,type:"text"},"1010-LOG-IK":{id:"1010-LOG-IK",content:`LOG ENTRY
USER: TECHNICIAN KOZLOV

DATE: October 10th

I checked the rover's position this morning, and I found fresh footprints leading away from it. This is highly irregular. No one was authorized to be outside the station last night.

I suspect someone is trying to interfere with our discovery. And frankly, my money's on &M. He's been acting shifty ever since the signal incident.


@devil: The Warlock was onto us. The Blacksmith should have heeded his warnings.`,type:"text",hasDevilContent:!0},"1009-LOG-SC":{id:"1009-LOG-SC",content:`LOG ENTRY
USER: COMMANDER CROSS

DATE: October 9th 

We sent a rover to the surface this morning and it picked up a strange signal. The signal is unlike anything we've ever encountered. We are [END OF TRANSMISSION].
@note: The log ended abruptly but in the meantime, we were able to access the transcripts of the security videos from the station. The video quality isn't great but the audio is clear, the transcripts are as good as we could get. They follow a strange naming convention, here's an example: file:01-BR-R-S
 `,type:"text",links:["01-BR-R-S"]},"01-KI-L":{id:"01-KI-L",content:`@ The clatter of pots and pans. A rhythmic grinding sound.


&L: <i>(Humming softly)</i> Just a little more... perfect.


@ &L carefully folds a white powder into what sounds like aluminum foil and snorts it in one go.


&L: Mr McCoy, this is going to be a good shift.


@devil: I agree, Butcher. We did good together.
`,type:"audio",hasDevilContent:!0},"01-RO-A-D":{id:"01-RO-A-D",content:`&A: I just feel so useless, Dana. Everyone's looking to you, the chief science officer, to figure out this signal. And me? I'm just a pilot. What good am I here?


&D: Alex, don't say that. You're not useless. We all have our roles. And right now, mine is to analyze this data. Yours is to... well, to be you.


&A: "To be me"? What does that even mean? To sit around and watch you be brilliant while I'm relegated to flying a glorified taxi if we ever need to leave?


&D: It means you keep this station running, you keep us safe. And it means you're my husband, and I need your support, not your self-pity. We're a team, Alex. Always have been.


&A: Where are you going? We're not finished here.


&D: Alex, I need to go, Michael will be waiting for me in the <b>research lab</b>.


&A: Oh I see what's going on. I see how he looks at you. I see how every man in here looks at you.


&D: What is that supposed to mean? Do you not trust me? I'm your wife, Alex! And I love you for you.


&A: I'm going back to sleep. You do whatever the hell you want.


&D: Alex, you are unbelievable! I don't know what you want from me. I have to go.`,type:"audio",links:["02-RE-D-M","02-RO-A"]},"01-CA-I-M":{id:"01-CA-I-M",content:`&I: Alright, rover's secured in the bay. Just need to run diagnostics.


@ A faint shadow shifts in the corner of Isaac's eye.


&I: Dr Grimm? Is that you?


@ The shadow darts away, disappearing into the darker recesses of the station. It seems they have taken something with them from the rover.


&I: ...Dr Grimm?... Michael?`,type:"audio",links:["1009-LOG-MG","1010-LOG-MG"]},"01-BR-R-S":{id:"01-BR-R-S",content:`@ Static crackles, then clears slightly.


&S: So what do you make of the signal Bobby? 


&R: Commander, with all due respect, I'm inclined to believe it's another rover malfunction. We've had similar ghost readings before.


&S: This isn't a ghost, Bobby. This is... coherent. Structured. It's not random noise.


&R: Or it's a new form of atmospheric interference, Commander. The data integrity from the rover has been sporadic since the last solar flare.


&S: Don't you think it's too precise for a feedback loop? 


&R: The pattern is unusual, yes, but it could be a complex feedback loop within the sensor array.


&S: Anyway, the specimens are getting unloaded this morning. They might be able to tell us more. Dr Dupont will be examining them soon.


&R: The docs are all in their own planet. What if we're just seeing what we want to see?


&S: We are not "seeing what we want to see," Engineer. We are detecting a phenomenon. And I expect you to treat it as such.


&R: Yes, Commander. I'll recalibrate the secondary sensors. But my initial assessment stands.


&S: Just tell me once the scan is complete so we can take a closer look. I'll be with Dr Darcy.


@ One person leaves the room. 


@ A faint click, then the static returns, growing louder until silence.


@note: The audio seems to come from the <b>bridge</b>.
@note: I found another audio file from another area of the station later that day: file:03-ME-E-R-S `,type:"audio",links:["02-BR-R","03-ME-E-R-S"]},"01-GA-B-C-Z":{id:"01-GA-B-C-Z",content:`@ Clatter of cutlery and muffled conversation.


&Z: Man, this ration pack is worse than usual today.


&B: I just wish we still had some of those freeze-dried strawberries, they were the best.


&Z: Oh man, don't remind me.


&C: What were you doing up there earlier? You were bloody ages.


&Z: I just can't get any comms out and Cross is on my case to tell Central about the specimens.


&C: They're pissing me off with those rocks. They're all acting like it's a major discovery. It's just rocks. 


&B: I don't know. You gotta admit the way they've come back, all pulsating and stuff is... weird. Jackie thinks the fissure does something to them.


&C: Does she now? What else does Jackie think? She say anything about me?


&B, trying to change the subject: At least it's quiet in here for once.


@ &D can be heard shouting in the background.


&C: Quiet? I can hear Rogan's wife shouting from here!


&C, lighting a cigarette: I Wish I could get Dana to complain about me for a change. She's a looker, that one.


&Z, looking around in exasperation: Has anyone seen Michael? He's been even more cooped up in that <b>research lab</b> since that signal came in. He's always been a bit weird, talking to his plants but now he's practically a hermit.


&C, taking a drag from his cigarette: Yeah, he's probably trying to decode alien recipes or something. Hey, what's taking Lenny so long with that steak in there? I'm starving.


&Z: Probably trying to make it edible.


&B: You know, I've got a rather nice bottle of the old world Whiskey in my office. We should grab Jackie later, could be fun.


&C: Now that's an idea I can get behind! See if we can get her a little drunk and loose. 


&B: Don't talk about her like that, Jackie's alright.


&C: All right Romeo, I apologize. Let's do it! Screw waiting for whatever he's cooking in there.


&Z: I'll stay here. Michael is bound to come out of his lab for food at some point. I really need to speak to him. Catch you guys later.


@ &B and &C can be heard exiting the room. Someone else enters and joins &Z at the table.

@note: You can use the command label [filename] [text] to add labels to the files. The first 75 characters of the label will be displayed next to the file in the list view. That should help you organise your thoughts.
 `,type:"audio",links:["01-KI-L","01-RO-A-D","02-GA-L-Z","02-SE-B-C"]},"02-GA-L-Z":{id:"02-GA-L-Z",content:`@ The clatter of cutlery continues, but the conversation has died down.


&Z: <i>(to himself)</i> Still no sign of Michael. He's really holed up in that lab. Hope he's okay.


@ Footsteps approach, and a plate is set down with a clatter.


&L: Here's your steak, Zack. Took a while, but it's finally ready.


&Z: Thanks, Lenny. Looks... edible. You heading back to the kitchen?


&L: Yeah, got more prep to do. Enjoy.


@ &L walks away. &Z sighs and begins to eat.


&Z: <i>(muttering to himself)</i> This is bland. So bland. A joint would really hit the spot right now. Think I'll go grab my stash after this. Need something to take the edge off.


@ The sound of chewing.
`,type:"audio",links:["03-SE-Z"]},"02-RE-D-M":{id:"02-RE-D-M",content:`&M is in the lab, working on something. &D enters and sits down.


&M: Dana! You're just in time. You're not gonna believe what I found. After what you said yesterday about the wave pattern, I couldn't sleep. 


&M: I know I shouldn't have but I.. borrowed a specimen. I stole it from the rover this morning. Isaac saw me but it was dark, I don't think he knows it was me.


&M: <i>(clearing his throat)</i> Look. Its mineral structure is undergoing some sort of cellular shift, a protoplasmic transformation if you will, like it's at an early-stage of embryonic development.


&M: What I'm trying to say is that it's... it's turning into an egg.


@ &M turns around and looks at &D for the first time since she entered the room.


&M: Dana? What's wrong? What happened?


&D: <i>(struggling to speak through tears)</i> Michael... I... I just can't... He just doesn't understand! He never listens!


&M: Is it your husband again? Don't let him drag you down. I've seen him drink at all hours. I know he's bored here but he's showing real signs of depression. I'm worried about him.


&D: <i>(trying to change the subject)</i> What do you mean you stole it?


&M: <i>(sighs, then a tone of urgency)</i> Dana, listen to me. Those rock samples we sent through the fissure. They're... they're alive. And I'm not sure we should have ever brought them back on board. I need to run more diagnostics, but what if it's already too late? What if we've brought something dangerous in?


&M: We need to isolate this thing immediately but I don't know if the Commander will listen. He already thinks I'm crazy. And Jackie. Where did she get those rocks. They're not from this planet. And I saw her talking with Carl about a special box...There's something else going on here and I need to find out what it is. I just need this to stay between us for now, ok?


&M: <i>(pauses, then a sigh)</i> Look at you. I don't think you can help right now. Why don't you go back to Alex and see if you can fix this? I'll carry on here.


@ &D nods and walks out of the room.
`,type:"audio",links:["03-RO-A-D","03-RE-M"]},"02-BR-R":{id:"02-BR-R",content:`@ &R is listening to music, pretending to drum in the air.


&R: I love that song. 


@ &R turns up the music really loud, gets up off his chair and starts jumping around the room.


@ A soft hum of computer processing, then a chime.


&R: <i>(out of breath)</i> Finally, the analysis is complete. This... this is unexpected. I need to show this to Seb immediately.

@devil:
@devil: We had to stop him, you understand. That analysis was not for men to see.
@devil:

@ Footsteps hurrying away.
`,type:"audio",hasDevilContent:!0},"01-ME-E-J":{id:"01-ME-E-J",content:`@ The sterile hum of the medical bay.


&J: Thanks for these, Libby. It's... been a rough few weeks.


&E: Of course, Jackie. We all get a bit stir-crazy out here. It's natural to feel low.


&J: Low is an understatement. And the way some of the men look at you... it just makes it worse. Like we're just meat.


&E with a sympathetic sigh: Tell me about it. They're all just horny pigs, aren't they? Especially when they think nobody's watching.


&J: Exactly! It's exhausting. Sometimes I just want to scream.


&E: We'll get through it. Take these as prescribed, and don't hesitate to come back if you need to talk. Or just to vent about the pigs.


@ A weak chuckle.


&J: Thanks, Libby. I really appreciate it. I best get back to work, Isaac will be waiting for me.


@ The sound of a pill bottle being closed.

@devil:
@devil: I was grateful for the pills dulling her senses. The demon hunter would have been so much more formidable otherwise.

@note: This audio log takes place in the <b>medical bay</b>, between Dr. Darcy and another member of the crew.`,type:"audio",hasDevilContent:!0},"02-CA-I-J":{id:"02-CA-I-J",content:`@ The rhythmic clanking of machinery in the <b>cargo bay</b>.


&I: There you are, Jackie! Finally. These specimens aren't going to unload themselves, and I've been waiting for ages. The Rover just sent them up.


@ A sigh of exhaustion.


&J: I'm sorry, Isaac. Dr. Darcy held me up. You know how she gets.


&I: Held you up, or you were chatting? Look, I get it, but we have a schedule. And these rocks... they're not light. Let's get moving.


&J: Right. Let's just... get this done.


@ The heavy thud of a crate being moved.


@&B and &C can also be heard in the background laughing as they enter the cargo bay.

@note: I've added a new command to your terminal: <b>name</b>.
@note: You can use it to complete the crew roster in the format name [ID] [title] [firstname] [lastname]
@note: You can also type <b>name</b> with no parameters to get a list of the names you've already discovered.
`,type:"audio",links:["03-CA-B-C-I-J"]},"02-RO-A":{id:"02-RO-A",content:`@ &A is sitting in bed, a bottle of non-descript alcohol in hand.


&A: <i>(to himself, a low, menacing tone)</i> Michael... always in the way. Always the "brilliant" one. But not for long. I know where Vance keeps his emergency sidearm in the armory. A little "accident" in the lab... no one would ever suspect me. Especially not with all this alien nonsense going on. They'll be too busy looking for monsters to look for a killer.

@devil:
@devil: Just a small whisper is all that was needed to get chaos to shift our way.
@devil:

@ &A takes a big sip of alcohol.
`,type:"audio",hasDevilContent:!0,links:["04-SE-A"]},"02-ME-E-S":{id:"02-ME-E-S",content:`@ A soft, intimate hum of the station's life support.


@ &J can be heard taking the lift down to the <b>Cargo bay</b> outside.


&S: Libby... are you sure about this? If anyone found out...


@ A gentle hand brushing against fabric. 


&E: Sebastian, we're alone. And yes, I'm sure. This... this isolation, it makes you see what truly matters. I was just saying this to Jackie.


&S: You matter. More than anything out here.


@ A soft giggle.


&E:  And you, Commander. Always so serious, even when you're being utterly reckless.


@ A pause, a rustle of clothing, indicating closeness.


&S: Like this...

@devil:
@devil: The witch luring the knight into her bed with promises of love weakened him just enough. The softness dulling his blade.
@note: It looks like we have enough clues between this transcript and one of the logs to figure out who was in the <b>cargo bay</b> at this hour. 
@note: That’s enough from me. I’m sure you know how to do your job.
`,type:"audio",hasDevilContent:!0,links:["02-CA-I-J","01-ME-E-J"]},"02-SE-B-C":{id:"02-SE-B-C",content:`@ A drawer creaks open.


&B: Alright, Carl, mission accomplished. One bottle of the good stuff, as promised. And look what else I found in this hidden compartment...


@ A low whistle.


&C: Barry, you're a genius! These will definitely liven things up. Jackson won't mind us borrowing his stash for a bit, will he?


&B: Nah, he won't mind. Besides, he owes me for that poker game last week.


&C: Lead the way, my friend. Tonight's going to be legendary.


@ The clinking of glasses and a drawer closing. Footsteps recede.
`,type:"audio"},"03-SE-Z":{id:"03-SE-Z",content:`@ &Z rummages through a hidden compartment in the <b>security office</b>.


&Z: <i>(muttering)</i> Where is it? It was right here! Barry... you thieving bastard!


@ A deafening explosion rocks the station.


&Z: What the hell was that? I bet Michael did something. And if he didn't, he'll know who did. 


@ &Z stands up and heads out up the stairs towards the <b>research lab</b>.`,type:"audio",links:["04-RE-Z"]},"03-KI-L":{id:"03-KI-L",content:`@ &L is humming to himself.


&L: Ah, a quiet moment. Time for a little... relaxation.


@ A lighter clicks, followed by a soft inhale and exhale.


&L with a contented sigh: That's the stuff. Just what I needed.


@ A deafening explosion rocks the station.


&L: What the hell was that?! 


@ &L finishes his cigarette and throws it away. 


&L: I can't stay here by myself.. The drugs are kicking in. That explosion just scared the crap out of me. 


&L: <i>(panicked)</i> This is going to give me a bad trip if I'm not careful. Where will everyone be?


@ &L heads for the lift.


@devil: Go find the little rabbit, my friend. Let's start the party.
`,type:"audio",hasDevilContent:!0,links:["04-BR-D-L"]},"03-RO-A-D":{id:"03-RO-A-D",content:`&D: <i>(sniffles)</i> Alex, I'm so sorry. I... I shouldn't have left you here earlier. I should have stayed with you and finished our conversation.


&A: I'm sorry too baby. I just feel so inadequate and you're so... so perfect. It's difficult to keep my jealousy in check.


@ A deafening explosion rocks the station.


&D: <i>(panicked)</i> What was that?!


@ &D turns to look out the window.


&D: Alex, what is this outside?


@ &D opens the window to get a better look.


&A: What, what do you see?

@devil:
@devil: I see you my sweet sacrifice. I'm coming for you soon.
@devil:

&D: Nothing...I.. I could have sworn I just saw the wind walking... No, it's nothing, that explosion just scared me.


&A: It came from the <b>cargo bay</b>. We need to get to the <b>bridge</b>, it will be safe there. Go, Dana! Now! I'll be right behind you!


&D: Why? Where are you going?


&A: Don't worry. I'll explain later. There's something else I need to do first but I'll join you up on the <b>bridge</b> as soon as I can.`,type:"audio",hasDevilContent:!0,links:["04-SE-A","04-BR-D-L"]},"03-CA-B-C-I-J":{id:"03-CA-B-C-I-J",content:`@ &B and &C enter the cargo bay, their laughter echoing.


&C: Jackie, my dear, working hard or hardly working?


&J with a groan of exasperation: Holden, not now. I'm trying to unload these specimens.


&B: Oh, come on, Jackie. A little fun never hurt anyone. We have a nice bottle of whiskey and a couple of glasses here.


&I with a frustrated sigh: Can you two take this... whatever it is... somewhere else? We have a schedule to keep.


&C: Isaac, always the party pooper. Just lighten up!


&J: Seriously, Carl, I need to focus.

@devil:
@devil: And this is where I come in. Pushing just beyond the veil. Enough to cause a rift but not enough to break the barrier.
@devil:

@ Suddenly, a deafening explosion rocks the cargo bay`,type:"audio",hasDevilContent:!0,links:["04-CA-B-C-E-I-J-R-S"]},"03-RE-M":{id:"03-RE-M",content:`&M is alone, reviewing the data.


&M: No... no, that's just not right. The energy signatures... the timing... They came from the old world. I can't believe she would do this. It has to be her. 


@ &M thinks for a bit, staring at what used to be a plain old rock and is now a glowing orb..


&M: I saw her bring something else in. I didn't think much of it then but now... She must have it in her room, she must do.


@ An explosion rocks the station.


&M: What was that? It came from the cargo bay. Oh no, not the specimens. I need to get them out of here!


@ &M runs out of the research lab and stumbles quickly down the stairs.

@devil: The Warlock was a formidable adversary. He was smart and he knew to be distrustful of us. If only he had managed to rally everyone else to his cause but he was just too eccentric, no-one believed him. Poor devil.`,type:"audio",hasDevilContent:!0,links:["04-SU-M"]},"03-ME-E-R-S":{id:"03-ME-E-R-S",content:`@ A door hisses open suddenly. 
        

&R: Commander Cross? Dr. Darcy? I apologize, I didn't realize... I mean, I have the preliminary scans for the anomaly, sir.


&S: <i>(A quick clearing of the throat, a noticeable distance in his voice)</i> Ah, Bobby. Right. Come in. Doctor Darcy and I were just... reviewing some medical protocols. Weren't we, Doctor?


&E: <i>(Her voice slightly strained, but composed)</i> Indeed, Commander. Very critical protocols.


&R: <i>(A hesitant tone)</i> Of course. My apologies. Here are the scans, sir.


@ an explosion from down below shakes the station.


&S: Bobby, what's going on?


&R: <i>(A panicked tone)</i> I... I don't know. It's like... it's coming from the cargo bay.


&S: Let's get down there, quick.


&E: I'll come with you in case there's any casualties.


@ The sound of the door opening and closing. Everyone runs out of the room.

@note: It seems the naming convention is a combination of the time, location and the persons on the audio.
`,type:"audio",links:["02-ME-E-S","04-CA-B-C-E-I-J-R-S"]},"04-SE-A":{id:"04-SE-A",content:`@ The security office is empty, the only sound the distant wail of alarms. &A creeps in, scanning the room.
        

&A: Everyone's gone to the cargo bay. Perfect. Now, where would he keep his sidearm?


@ The clinking of metal as Alex searches through a locker.


&A with a triumphant sigh: Bingo. Just what I needed.


@ The sound of a weapon being retrieved and holstered. Footsteps quickly retreating.


@ &M can be seen through the security monitors dragging something heavy outside on the <b>surface</b>.`,type:"audio",links:["04-SU-M"]},"03-SU-0":{id:"03-SU-0",content:`@ A low, resonant hum fills the air. Energy crackles, coalescing into a shimmering, almost human-like form. It pulses with an ethereal light, growing more defined with each passing second.


@ An explosion rocks the station suddenly. 


@ The energy shimmers violently, then disperses rapidly, flowing towards the maintenance hatch with a faint whoosh.


@ The distant sound of footsteps approaching.


@ We can see &M throwing himself out of the cargo bay exit ramp onto the <b>surface</b>, stepping over the bodies of the newly unconscious &B, &C, &J and &I, obviously in a rushed panic, trying not to get caught as he pulls the specimens behind him.`,type:"audio",links:["03-RE-M"]},"03-MA-99":{id:"03-MA-99",content:`@ A profound silence hangs in the air.


@ Suddenly, the outer doors of the maintenance bay begin to glow with an eerie, pulsating light. Fissures spiderweb across the reinforced metal, accompanied by a low, groaning sound of immense pressure.
`,type:"audio",links:[]},"04-MA-0":{id:"04-MA-0",content:"@ With a deafening roar, the doors explode inwards, shrapnel tearing through the room. A torrent of shimmering, ethereal energy surges into the room, then coalesces and streaks rapidly towards the crew quarters.",type:"audio",links:[]},"04-SU-M":{id:"04-SU-M",content:`@ &M is outside the station, clad in a vac-suit, laboriously pulling something in a heavy metallic box.


&M with a strained grunt, muffled by the helmet: Almost there... just a little further. This... this is too dangerous.
 

&M: I need to get them away from here and hide them from Jackie. 


@devil: The explosion was a bit much I admit and it attracted too much attention but we had to do something to stop him and distract the rest of the team.`,type:"audio",hasDevilContent:!0},"04-RE-Z":{id:"04-RE-Z",content:`@ The research lab is empty. &Z enters, looking for &M.


&Z: Michael? Where is he? He should be here.


@ &Z spots a glowing orb on a desk.


&Z: What's this? Interesting. If this came from the Rover, Michael should not have it. I'll just... borrow this for a bit. He'll have some explaining to do when I find him.


@ The sound of the orb being pocketed. Footsteps retreating.`,type:"audio"},"04-BR-D-L":{id:"04-BR-D-L",content:`@ The bridge is dimly lit, emergency lights casting long shadows. The distant wail of alarms can still be heard.


&D: Where is everyone? What was that explosion? Hello?


@ Footsteps approach, heavy and deliberate.


&L: What's this? Why are you wearing Dana's skin?


@ &L's eyes are bloodshot. He seems out of it.


@ &D takes a step back.


&L: Lenny? What are you saying? What's wrong? You're scaring me.


&L: Give it back. It doesn't belong to you, it doesn't even fit you. It's loose. You need scales. 


&D: Stay away from me Lenny, Alex will kick your ass.


&L: I said give it back!


@ &L rushes towards &D and grabs her by the throat.


&D: Get off me!


@ A struggle ensues, grunts and gasps. A metallic glint.


@devil: The perfect sacrifice is all that was needed to finish breaking the veil between our worlds.


&L with a sudden, sharp intake of breath then panic: No! What have you done?!


@ &D is on the floor, bleeding from her stomach. She gasps for air, a choked cry emanating from her lips.


@ Panicked footsteps, running away. 


&L: Oh god, oh god, I didn't mean to, it was an accident!


@ A heavy thud as &D collapses then silence, save for the distant alarms.
`,type:"audio",links:["05-BR-D"]},"04-CA-B-C-E-I-J-R-S":{id:"04-CA-B-C-E-I-J-R-S",content:`@ The air is thick with smoke and the acrid smell of burnt metal. The cargo bay is a wreck.


&S: Bobby, report!


&R: Sir, the rover... it's completely destroyed. And the specimens... they're gone.


&E: Multiple casualties, Commander. Jackie, Isaac, Barry, Carl... all unresponsive. some burns but no obvious concussions.


&S: You and I will get them to the medical bay, Doctor. Bobby, secure this area. I want a full damage assessment and a search for those specimens. And find out what caused this.


&R: Yes, sir.


&E: On it, Commander.


@ the Voices of &Z and &A can be heard from outside the cargo bay enquiring what's going on.


&S: Stay back both of you, we'll handle this... Actually Officer Jackson, can you help carry Barry and Pilot Rogan you take Carl. Lizzy and I will take care of Isaac and Jackie.


@ The sounds of emergency protocols activating, alarms faintly blaring in the distance.


@ We can hear 2 people still in the cargo bay. One of them must be &R but the other is unknown.


@note: there's a lot of info to remember. You can use the note command to take notes. Typing note by itself will show you the notes you've taken already.
`,type:"audio",links:["05-CA-M-R","05-ME-A-B-C-E-I-J-S-Z"]},"05-BR-D":{id:"05-BR-D",content:`@ A faint, gurgling sound, followed by a soft thud. The air on the bridge is cold, and the emergency lights cast long, eerie shadows.


&D with a weak, gasping breath: No... no, this can't be...


@ &D is crawling on the floor, desperately trying to move towards the console.


&D with a choked sob: Intercom... must reach...


&D <i>(her voice barely a whisper, fading):</i> Help... someone...


@ A final, shuddering breath, then silence. 

`,type:"audio",links:["04-BR-D-L"]},"05-EN-L":{id:"05-EN-L",content:`@ &L is pacing the engine room, his eyes bloodshot.


&L: Oh god, oh god, what have I done? She... she just kept screaming! I didn't mean to...


@devil: It's ok Butcher. You did well. I'm proud of you.


@ The clatter of something metallic being dropped, then quickly hidden.


&L: No one can know. No one. Just... put it away. Hide it.


&L: I need to get out of here. Back to the <b>kitchen</b>. Act normal. Just... act normal. 


@ Footsteps running, fading into the distance.
`,type:"audio",links:["04-BR-D-L"]},"05-CA-M-R":{id:"05-CA-M-R",content:`@ The metallic groan of twisted wreckage. &R is carefully sifting through debris.


&R with a low whistle: Whoa, what's this?


&R: It's... it's like a ball of pure energy. Pulsing.


@devil: Touch me Squire. Come closer.


@ The sound of footsteps approaching from behind.


&M: Get away from that, Bobby!


@ A sudden, bright flash lights up the room, followed by a searing, high-pitched scream.


@ &M watches in horror as &R collapses to the floor, his body convulsing violently.


@ After a minute in shock, &M finally regains his composure and approaches the body.


@ &M grunts with effort as he rummages through Bobby's charred remains. 


&M: Ah, there it is. The scan.


@ The pulsing energy ball begins to calm, shrinking, then transforms with a squelching sound into a grotesque, slug-like alien.


&M: Filthy thing.


@ A heavy, decisive stomp, followed by a wet, crunching sound.


@devil: The squire had to go, he was too valuable to the knight.  
`,type:"audio",hasDevilContent:!0},"05-ME-A-B-C-E-I-J-S-Z":{id:"05-ME-A-B-C-E-I-J-S-Z",content:`@ The sterile, hushed atmosphere of the medical bay is punctuated by the rhythmic beeping of life support machines. The air smells faintly of antiseptic.


&S: Status report, Doctor.


&E: Jackie, Isaac, Carl and Barry are all stable, Commander. Some significant burns, but their vitals are holding.


&Z with a shaky voice: Commander... Dr. Darcy... This doesn't make any sense. I was just with Carl and Barry in the <b>galley</b>, maybe two hours ago. They said they were heading back to the <b>security office</b>. How could they be here, in the <b>cargo bay</b>... like this?


&S: We'll get to the bottom of it, Zack. Come with me to the <b>bridge</b>, we'll try to contact Central Command and let them know what's going on.


&E: He's right, Zack. I've got it from here.


&Z: Ok. And what about you, Alex? Where were you? You're being awfully quiet.


&A: What does that mean? What are you insinuating?


&Z: Sorry Alex. I didn't mean anything by it.


&A: I was in my cabin with my wife, not that it's any of your business.


&S: And where is Dana now?


&A: She went to the bridge while I came down to the cargo bay.


&S: Oh right, I'll brief her when I get up there then.


&A: Thanks. I'll go see if I can find Lenny and Michael to let them know what's going on.


&Z: Lenny was tending to the <b>kitchen</b> and the <b>Galley</b> last I saw him. I was waiting for Michael in the <b>galley</b> earlier but he never showed.


@ &A leaves in one direction and &Z and &S in another. &E goes back to tending to the wounded.


@note: You will notice a number between brackets against the files in the list. This indicates how many files you have not discovered that can be deduced from the clues. If you follow the trails of every crew members as they travel around, you should have enough information here to piece this all back together.
`,type:"audio",links:["02-GA-L-Z","01-GA-B-C-Z","04-BR-D-L","06-KI-A-L","06-BR-D-S-Z","05-BR-D","06-ME-B-C-E-I-J"]},"06-BR-D-S-Z":{id:"06-BR-D-S-Z",content:`@ The bridge is still dimly lit, the alarms now a distant, mournful hum. &S and &Z enter, their footsteps echoing in the silence.


&S: Dana! Oh my god...


&Z: Commander, she's... she's barely breathing.


&D with a weak, gurgling sound: Commander... he... he ran... <b>engine room</b>...


&S: Who, Dana? Who ran?


&D with a final, shuddering breath: Engine... room...
 

&Z: This has to be Michael's doing. Dana and him were working together. He's been acting so strange lately...


&Z: What a bastard. I'm gonna kill him for this. 


&S: Zack, you don't know that. Don't do anything rash.


&Z runs out of the <b>bridge</b> as the commander stays behind holding Dana, helpless.


&S: Comms Officer Jackson, stop, that's an order!


@ &D's hand falls limp. Silence descends once more, broken only by the distant alarms and the heavy sobbing of the commander.


@ Then a gunshot echoes in the distance. 


@note: I finally managed to access the manifest for the station but it was wiped clean. I don't know what's going on but I've shared with you what I could: I've added the file:MANIFEST to the inbox.
`,type:"audio",links:["07-BR-S","07-EN-Z","05-BR-D"],triggers:["manifest"]},"06-RE-0":{id:"06-RE-0",content:`@ The shadowy figure enters the <b>research lab</b>, its gaze sweeping across the research notes, specimens in jars, and tubes with an intense, ferocious focus.


&0 emits a guttural growl, filled with ancient power.


@ With a deafening roar, &0 transforms into a swirling, fiery mist, engulfing the lab in an inferno. The crackle of flames is punctuated by the pop and hiss of exploding toxic chemicals.


@ The fiery mist streaks towards an air vent, disappearing with a whoosh. Immediately, water sprinklers activate, dousing the flames, and the heavy security door to the lab slides shut with a final thud.
`,type:"audio"},"07-SU-0":{id:"07-SU-0",content:`@ A searing fireball crashes onto the surface seemingly from the <b>research lab</b>, dispersing rapidly as the sound of someone talking echoes.


@ Through the destroyed maintenance bay doors, &M struggles to put an environmental suit on &L, who is unconscious and bleeding from a gunshot wound.


@ We can hear &M from here.


&M: The energy... it needs a vessel. If I can get it into Mr McCoy, I might be able to stop the invasion. He was already bleeding from that gunshot wound, seemed to have been up to no good... one life to save countless. It's a small price to pay.


&M: Will I be able to go through with it? I don't know... I must.`,type:"audio"},"07-RE-99":{id:"07-RE-99",content:`@ The research lab is engulfed in flames. The crackle and roar of the fire fill the air, consuming everything in its path.


@ The sprinklers hiss, desperately trying to douse the inferno. Water cascades down, mixing with the smoke and steam, but the fire rages on.`,type:"audio"},"08-RE-99":{id:"08-RE-99",content:`@ The research lab is engulfed in flames. The crackle and roar of the fire fill the air, consuming everything in its path.


@ The sprinklers hiss, desperately trying to douse the inferno. Water cascades down, mixing with the smoke and steam, but the fire rages on.`,type:"audio"},"09-MA-Z":{id:"09-MA-Z",content:`@ &Z lies in a growing pool of his own blood, struggling to comprehend the searing pain in his gut. His eyes, wide with disbelief, trace the crimson stain spreading across his shirt.


@ He manages to push himself up, his back against a cold wall, and looks down at the gaping, ragged hole in his stomach. A shudder runs through him.


@ His gaze then falls upon his right hand, completely burnt and twisted from the orb's power. A wry, defeated chuckle escapes his lips.


@ A weak, raspy whisper.


&Z: Well, shit. 


@ His head lolls to the side, and his body slumps lifelessly to the floor. The pool of blood continues to expand, a grim testament to the finality of it all.`,type:"audio",links:["08-MA-A-Z"]},"09-RE-99":{id:"09-RE-99",content:`@ The research lab is engulfed in flames. The crackle and roar of the fire fill the air, consuming everything in its path.


@ The sprinklers hiss, desperately trying to douse the inferno. Water cascades down, mixing with the smoke and steam, but the fire rages on.`,type:"audio"},"10-RE-99":{id:"10-RE-99",content:"@ The research lab is still filled with smoke, but the roar of the fire has subsided to a crackle. The sprinklers continue to douse the flames, and the air filtering system whirs to life, slowly beginning to clear the thick haze.",type:"audio"},"11-RE-99":{id:"11-RE-99",content:"@ The research lab is still filled with smoke, but the roar of the fire has subsided to a crackle. The sprinklers continue to douse the flames, and the air filtering system whirs to life, slowly beginning to clear the thick haze.",type:"audio"},"12-RE-99":{id:"12-RE-99",content:"@ The research lab is still filled with smoke, but the roar of the fire has subsided to a crackle. The sprinklers continue to douse the flames, and the air filtering system whirs to life, slowly beginning to clear the thick haze.",type:"audio"},"13-RE-99":{id:"13-RE-99",content:"@ The fire is finally under control, leaving behind a scene of utter devastation. The research lab is a ruin of charred walls, twisted metal, and waterlogged equipment. Everything is destroyed, a testament to the inferno's power.",type:"audio"},"06-KI-A-L":{id:"06-KI-A-L",content:`@ Alex enters the kitchen, looking around.


&A: Lenny? Are you here?


@ A door bursts open and &L stumbles in, out of breath and covered in blood.


@ &A gasps in horror.


&A: Lenny! What happened? The explosion... are you hurt?


&L panting heavily: Explosion? No... no, I didn't mean to... it was an accident!


&A: What are you talking about? What accident?


&L: No.. Nothing. I was just... just trying to help.


&A: What... What did you do? Whose blood is this?


&L: It wasn't my fault. She attacked me. You got to believe me.


&A: Lenny.. Stay, stay away.


@ A gun shot rings out.


@ The sound of footsteps fading as someone heads towards the <b>maintenance room</b> and a body drops to the floor..


@devil: The Butcher and the Chaos. I wish I could have used them more but they were just too volatile to ever be able to work together. They served me well, they will be missed.
`,type:"audio",links:["07-MA-A","04-BR-D-L","07-KI-L-M"]},"05-DU-0":{id:"05-DU-0",content:`@ The door to &J's quarters slides open, revealing &0.


@ A series of unearthly sounds emanate from &0.


@ &0 scans the environment looking for something. As it approaches &J's desk, a device in the drawer starts making a soft, rhythmic pulsating sound.


@ Loud, resonant incantations fill the air, echoing off the walls.


@ The device stops pulsating and everything is quiet again.


@ &0 turns, footsteps receding, heading towards the <b>research lab</b>.
`,type:"audio",links:["06-RE-0"],theme:"danger"},"06-DU-M":{id:"06-DU-M",content:`@ The door to &J's quarters slides open with a soft hiss. &M enters, his movements swift and purposeful, his eyes scanning the room.


&M: So, this is where you hide your secrets, Jackie.


@ The sound of drawers being pulled open, items tossed aside. &M rummages through clothes, personal effects, and finally, a hidden compartment.


@ A sharp intake of breath. 


&M: Bingo. What do we have here?


&M <i>(His voice filled with a chilling certainty)</i> I knew it. All along, it was you. You're the reason for all of this. But now... now I know how to stop it.


@ The sound of a device being activated, a soft, rhythmic pulse beginning to emanate from it. &M pockets the device and quickly exits the room.


@devil: If only he knew I had just been here before him and had cursed the holy object in his hand. 
`,type:"audio"},"06-ME-B-C-E-I-J":{id:"06-ME-B-C-E-I-J",content:`@ The steady beeping of monitors fills the medical bay. &E moves methodically between the beds, checking vitals and adjusting drips.


&E: Easy there, Jackie. Just a little more.


@ A soft groan, then a weak cough.


&J: Elizabeth,Wh-what happened? My head... everything's blurry.


&E: You're in the medical bay. There was an incident in the cargo bay. You, Isaac, Barry and Holden were caught in the blast. You've all sustained burns, but you're stable.


&J: The blast? Oh, god... Isaac? is he...?


&E: They're alive, Jackie. Unconscious, but stable. You're the first to wake up. Just rest now. Your body needs to heal.


&J: The specimens... the rover... it all happened so fast.


&E: Don't worry about that now. Just focus on recovery. We'll figure out the rest.


@ The sound of a gunshot echoes in the distance.


@ &B stirs at the sound of the gunshot.


&J: What was that?

`,type:"audio"},"07-EN-Z":{id:"07-EN-Z",content:`@ The rhythmic thrum of the engine room fills the air. &Z enters, lookings around.


&Z: Michael! I know you're in here! Come out, you bastard! You want this back?


@ &Z pulls out the orb from his pocket. A soft, rhythmic pulsing sound begins.


@ The orb glows brighter and brighter and turns red hot.


@ A sharp gasp, then a scream of pain.


&Z:  Damn it!


@ The sound of something metallic clattering to the floor, followed by frantic footsteps running away.


@ A panicked yell, fading into the distance. 


&Z: My hand! Fuck!


`,type:"audio"},"07-BR-S":{id:"07-BR-S",content:`@ The commander's heavy sobs gradually subside, replaced by a deep, shaky breath. He gently closes &D's eyes.


&S: I will find who did this, Dana. And they will pay.


@ The rustle of fabric as &S wraps &D's body in a blanket, then a strained grunt as he carefully lifts her. His footsteps echo as he carries her out of the bridge.


@ The sound of a lift descending.`,type:"audio"},"07-KI-L-M":{id:"07-KI-L-M",content:`@ &M enters the kitchen, his eyes scanning the scene. He spots &L slumped against a counter, a bloody wound on his side.


&M: <i>(A low, almost pleased tone)</i> Lenny. Still breathing. That's perfect.


@ &M raises a blunt instrument, bringing it down hard on &L's head. &L groans, then goes limp.


&M: <i>(A grunt of effort)</i> Come on, you're coming with me.


@ The sound of a body being dragged across the floor, fading as &M pulls &L out of the kitchen.`,type:"audio"},"07-MA-A":{id:"07-MA-A",content:`@ The low, muffled sobs of &A echo in the maintenance bay.


&A: <i>(A choked whisper)</i> Lenny... I didn't mean to...


@ &A's breath comes in ragged gasps. He feels a sudden, cold draft. His eyes dart to the hatch door, and through it, he sees the outer door of the maintenance bay: ripped from its hinges, twisted metal fanning out to the alien world surface. A gaping, violent wound in the station's hull. His mind struggles to process the impossible destruction.


@ Then suddenly the door behind him leading to the hallway to the <b>engine room</b> bursts open. Someone stumbles in, screaming "My hand!".
`,type:"audio",links:["08-MA-A-Z","07-EN-Z"]},"08-CA-0":{id:"08-CA-0",content:`@ From the shadows of the cargo bay, &0 observes, his gaze fixed on the distant figure of &M scrambling on the surface.


&0 emits a series of clicks and soft chittering sounds, almost a command.


@ The scuttling sounds of multiple creatures grow louder from the alien surface.


@ A distant explosion rocks the surface, followed by a faint, desperate scream from &M.


@ &0 then rushes out of the cargo bay towards the source of the explosion.`,type:"audio",links:["08-SU-L-M"]},"08-SU-L-M":{id:"08-SU-L-M",content:`@ The harsh winds of the alien surface whip around &M as he makes his way back to the location of the specimens.


@ A weird sort of energy is swirling behind him. It feels like it's following him.


&M: Almost there. Why are you so heavy, McCoy? You're not making this easy.

@devil:
@devil: The Warlock is here. Get him, girls!
@devil:

@ The sound of multiple scuttling movements, growing rapidly louder. A chittering, hissing sound fills the air.


&M: What the...?! Get off me!


@ The frantic sound of &M struggling against a swarm of creatures, his grunts and shouts punctuated by the tearing of fabric and wet, squelching noises. A loud thud as he drops something heavy behind him.


&M: No! Not like this! If I'm going down, you're coming with me!!


@ The sound of fumbling, a high-pitched whine, then a deafening explosion. A few screams from the creatures as some of them burn.


@ The chittering swarm continues, now moving with renewed purpose towards the cargo bay entrance, the sound of their scuttling feet fading inside the station.


@ &L is starting to wake, grunting.

@devil:
@devil: Butcher. It's just you and me now. Time to open the portal fully.`,type:"audio",links:["07-KI-L-M"],hasDevilContent:!0},"09-SU-0-L":{id:"09-SU-0-L",content:`@ &0 approaches the unconscious &L. A low, guttural chant emanates from the figure, and the ground around them begins to writhe.


@ The chittering swarm of slugs, previously ignored, now turns with unsettling synchronicity towards &L. Their movements become fluid, purposeful.


@ &0 raises a hand, and the slugs surge forward, engulfing &L in a tide of slick, wriggling bodies.


@ A bloodcurdling scream of pure agony, muffled by the mass of creatures. 


&L: Get them off me! They're... eating me!


@ &L's screams are quickly replaced by gurgling sounds and the wet tearing of flesh.


@ &0 turns, a faint, satisfied hum escaping its form, and slips in an open window, leaving the slugs to finish their gruesome feast.`,type:"audio"},"08-MA-A-Z":{id:"08-MA-A-Z",content:`&Z: @ A frantic, pain-filled shout. Alex! My hand! Help me! Please!

@devil:
@devil: SHOOT
@devil:

@ &A flinches violently, a gasp escaping his lips. The sharp crack of a gunshot rips through the air.


@  &Z collapses to the floor, blood pooling around him.


&A: No... no, not again...


@ The metallic clatter of a gun hitting the floor. Frantic footsteps pound away, fading into the distance.


@ The distant whirring of a lift ascending towards the <b>bridge</b> can be heard faintly in the background.


@ And suddenly,a loud explosion can also be heard coming from outside the station.

@devil:
@devil: I need to save chaos and redirect his focus.
@devil:

@note: I've added a find command to make it easier to filter files. Just type FIND and the ID of a crew member, a location or a timestamp and it will show you the files you discovered for that ID so far. `,type:"audio",links:["09-BR-A","09-MA-Z"],hasDevilContent:!0},"07-ME-B-C-E-I-J":{id:"07-ME-B-C-E-I-J",content:`&B: Ugh... my head. What the hell happened? What was that just now? A gunshot?


&E: Barry, you're awake. Take it easy. You were caught in the cargo bay explosion. You've sustained some burns, but you're stable. Jackie just woke up too.


&J with a weak voice: Glad to see you're okay, Barry. 


&B: Explosion? Cargo bay? And now a gunshot? I know what I heard. This is bad. This is really bad. We need to secure this station. I need to get to the <b>security office</b>.


&E: Barry, you're not going anywhere in your condition.


&B, pushing himself up, wincing: I don't care about my condition, Doctor. If there's a threat on this station, I need to be armed. We all do. I'm going to get the rifles.

@devil:
@devil: Follow him. I need the witch alone.
@devil:

&J: Wait! I'll come with you.


@ The sound of &B struggling to get out of bed, then slow, determined footsteps receding.

`,type:"audio",links:["08-SE-B-J","08-ME-C-E-I-S"],hasDevilContent:!0},"08-ME-C-E-I-S":{id:"08-ME-C-E-I-S",content:`@ The medical bay is quiet, save for the soft beeping of monitors. &E checks on the recovering patients.


&E: Isaac, Carl, you're both awake. Take it easy. You were caught in the cargo bay explosion.


&I with a weak groan: Dr. Darcy? What happened? My head... everything's fuzzy.


&C with a raspy voice: The cargo bay... I remember a flash... and then nothing.


&I: I... I saw Michael just before it happened. He was acting strange, pacing near the cargo bay entrance. He looked... agitated.


&E: Michael? Are you sure, Isaac?

@devil:
@devil: Come on Blacksmith, you can feel it. Tell him it is so.
@devil:

&I: Yes, definitely him. He just gave me a weird look and hurried back towards the <b>research lab</b> then Jacqueline came in and I didn't think anything of it. But now, I really do think he had something to do with it.


@ The medical bay doors slide open with a soft hiss. &S enters, his face grim, carrying &D's lifeless body.


&S with a choked voice: Dr. Darcy...


@ &S gently lays &D's body on an empty bed. Her eyes are open, staring blankly.


&S: She's gone. Stabbed. Zack and I found her on the bridge. No one saw anything. No witnesses.


&E: Stabbed? But... by whom? Did that gunshot have anything to do with it?


&S: Gunshot? What gunshot? No.. No, she wasn't shot.


&E: Jackie and Barry went to get protection. I hope they're okay. 


&I: Michael! It has to be Michael! He was acting strange, he blew up the cargo bay! He did this! He killed her!

@devil:
@devil: Yes. Yes. The Warlock. Get him.
@devil:

&S: Isaac, wait! We don't know that for sure. Zack thought the same thing and ran to the engine room, but I haven't seen him since. Be careful. 


&I: We'll find him! Carl, are you with me?!


&C: Yes! Let's go!


@ &I struggles out of bed, pulling out his IV, &C quickly follows, both rushing out of the medical bay.


@ As they leave the room, a loud explosion can be heard coming from the <b>surface</b> outside the station.


&S: What the hell was that? What is going on in this station?
`,type:"audio",hasDevilContent:!0,links:["09-EN-C-I","09-ME-E-S","08-SU-L-M","01-CA-I-M"]},"08-SE-B-J":{id:"08-SE-B-J",content:`@ &J and &B are in the armory. &B is frantically searching through weapon lockers.


&B: Dammit, dammit, dammit! Where is it?!


&J: What's wrong, Barry? Did you lose something?


&B: My pulse pistol! It's gone! I specifically remember securing it here after the last drill!


&J: Are you sure? Maybe you just misplaced it?


&B: No, Jackie. This isn't like me. Someone took it.


@ A sudden klaxon blares, and a surface alert flashes on a nearby monitor. &B rushes to it, his eyes widening in disbelief.


&B: What in the blazes?! Jackie, look! 


@ The monitor displays a grainy image of the station's exterior. &M is clearly visible, struggling with something large that looks like a body. He's outside, on the <b>surface</b>, pulling it away from the station.


&J: Michael? He's... he's out there! what is he doing? Is that a body?! It looks like Lenny!


&B: That son of a... What has he done. He's gone completely psycho! And he probably took my gun too! We have to stop him!


&J: I have something in my room. I hid it from Michael. It's what he's after.


&B: What? What is it? What the hell have you been up to?


&J: Now's not the time, let's go get it, I'll explain on the way.


@ &B frantically grabs a few rifles and slingshots them over his shoulder.


@ As they leave, a loud explosion can be heard coming from outside the station.
`,type:"audio",links:["08-SU-L-M","04-SE-A","07-KI-L-M"]},"09-EN-C-I":{id:"09-EN-C-I",content:`@ &I and &C burst into the engine room, their eyes scanning for Michael.


&I: Michael! Where are you? What did you do to Dana?


&C: There! On the floor!


@ &C points to a glinting object near a console. &I rushes over and picks up a blood-stained knife.


&I: A knife! He was here! This must be the weapon he used.


@ Suddenly, a low humming sound fills the room. Both men look up. A section of the ceiling panel begins to glow intensely, then cracks. A small, metallic object, glowing red-hot, drops directly onto &I.


@ &I emits a bloodcurdling scream of agony as he is instantly engulfed in a blinding flash of light and a cloud of smoke. His body convulses, then collapses, charred and lifeless.


&C: <i>(a horrified shriek)</i> ISAAC!


@ Carl stumbles back, his face pale with terror. He turns and flees the <b>engine room</b> in a desperate scramble, his panicked footsteps fading towards the <b>bridge</b>.

@devil:
@devil: You can run Fool but you can't hide.`,type:"audio",hasDevilContent:!0,links:["05-EN-L","07-EN-Z","10-BR-B-C-J"]},"09-BR-A":{id:"09-BR-A",content:`@ &A is on the <b>bridge</b>, his hands shaking, staring at the bloodstains on the floor.


&A: Lenny... Zack... What have I done? I killed them. I killed them both. This blood... it's everywhere. It's not just theirs, is it? This isn't right. This isn't right at all. Dana... I haven't seen her since the explosion. Oh god, please no. Please don't let this be hers. I have to find her. I have to know.


@ &A pushes himself up, his legs unsteady, and stumbles towards the <b>medical bay</b>.`,type:"audio",links:["10-ME-A-E"]},"02-BI-99":{id:"02-BI-99",content:`@ A crackle of static, then &J's voice.


&J: This is Jackie. Vanaheim, do you copy?


@ A faint voice, distorted by static.


[Unknown voice across the radio]: Copy that, Jackie. Go ahead.


&J: Good news. The specimens are secured. I'm en route to the cargo bay now to begin examination. Expect my full report in T-minus two hours. Keep the Bifrost stable.


[Unknown voice across the radio]: Understood. Bifrost holding steady. Good luck, Jackie.


@ Static again, then silence.`,type:"audio"},"04-BI-99":{id:"04-BI-99",content:`@ A crackle of static, then a faint, distorted voice.


[Unknown voice across the radio]: Jackie? This is Vanaheim. Do you copy? It's been longer than we expected. Is everything alright?


@ More static, then silence.`,type:"audio"},"09-ME-E-S":{id:"09-ME-E-S",content:`@ &E places a comforting hand on &S's shoulder. He's staring blankly at &D's body.


&E: Sebastian, I know this is hard. But we need you. The crew needs you.

@devil:
@devil: It's your fault. It's all your fault. You're weak. You're a coward. You're no Knight.
@devil:

&S: <i>(His voice is hoarse, filled with despair)</i> How can I lead them, Lizzy? How can I tell Alex his wife is dead? It's my responsibility... all of it. I should have prevented this.


&E: You can't blame yourself for this, Sebastian. We're in uncharted territory. We'll get through this, together. I..I love you.


@ &S shakes his head, then his eyes widen slightly. 


&S: Bobby! I told him to stay behind after the explosion and start investigating. I haven't heard from him since.


&E: Oh no...


@ &S stands up, a new resolve hardening his features. 


&S: I have to find him. I can't lose anyone else.


&E: Go, Sebastian. I'll stay here. I'll start examining Dana, see if I can find any clues about what happened. Be careful.


&S: I will.


@the sound of a passionate kiss and then footsteps fading into the distance.

@devil:
@devil: Just you and me now Witch. You're mine.`,type:"audio",hasDevilContent:!0,links:["10-CA-S","10-ME-A-E"]},"09-DU-B-J":{id:"09-DU-B-J",content:`@ The soft glow of &J's bedside lamp illuminates her room. &B is leaning against the doorframe, a playful smirk on his face.

@devil:
@devil: Let him in. Regale in the sin.
@devil:

&J: So, Officer, enjoying the view?


@ &B chuckles, pushing off the frame and taking a step closer. 


&B: Always, Jackie. Especially when it involves you.


&J: You and your little buddy Holden are always too full of yourselves. 


&B: Come on. There's always time for a little... leisure. Especially after the day we've had.


@ &J stares blankly at him. 


&J: I can't believe that's on your mind after everything that's happened.


@ &B reaches out, gently tucking a strand of hair behind her ear. 


&B: You know, you clean up pretty well, even after a station-wide panic.


&J: <i>(Her cheeks flush slightly)</i> We're not here for that. We're here to find Michael and stop him.

@devil:
@devil: You have time. Sin. 
@devil:

@ &J pushes &B away from her relunctantly.


&B: I know, I know. You just have this way of wrapping me around your little finger.


@ The sounds of clutter dropping to the floor and looking around the room.


&J: Where is it? Barry, where is it? 


&B: What? It's not there?.. Shit, that's not good.


&J: No, Barry. It's not good. Not good at all. Someone's been in my room.


&B: Let's head back to the bridge. We can regroup with the others there and figure out the next steps.

@devil:
@devil: She was good. I just couldn't break her. But it's ok. I broke everyone around her instead.`,type:"audio",links:["06-DU-M"],hasDevilContent:!0},"10-RO-0":{id:"10-RO-0",content:`@ A shadowy figure, like mist, seeps through the window of the room, coalescing into a humanoid shape. 
        


@ It slithers silently out of the room and into the corridor, its form barely discernible as it ascends the stairs, disappearing into the darkness above.`,type:"audio"},"10-CA-S":{id:"10-CA-S",content:`@ &S arrives in the cargo bay, calling out for &R.


&S: Bobby? Are you here?


@ A chilling silence answers him. He scans the dimly lit cargo bay, his eyes falling upon a gruesome sight. &R's lifeless body lies sprawled on the floor, surrounded by a viscous, shimmering trail.


&S: Bobby! No!


@ Suddenly, strange sounds echo from the far end of the bay. &S turns to see a gaping hole in the hull, through which a swarm of grotesque, slug-like aliens are seeping into the station. Their slimy bodies writhe and pulsate, their many eyes fixed on him.


&S with a cry of terror: What in the...?!


@ He tries to turn and run, but the creatures are too fast. They surge forward, overwhelming him in a tide of writhing flesh. His screams are cut short as the slugs engulf him, their acidic bodies dissolving his flesh. The last sound is a gurgle, then silence.

@devil:
@devil: I expected more from the knight but his crushing guilt and his softness for the witch were his downfall ultimately.`,type:"audio",hasDevilContent:!0},"10-ME-A-E":{id:"10-ME-A-E",content:`@ &E examines &D's body, her brow furrowed in concentration. She carefully probes the wound.


&E: Dana, I'm so sorry. You deserved better than this. 


&E: Do you remember when we first arrived on this station? You wanted so badly to fit in, to be like the others but you were so much more than that. 


&E: I'll never forget our anti-grav yoga sessions. I'll miss you.


@ &E goes quiet and strokes the wound gently.


&E with a gasp of realization: A kitchen knife... I know who did this! Alex! He went to the kitchen! I have to warn him!


@ &E rushes out of the medical bay running down the stairs towards the <b>kitchen</b>.


@ A few minutes pass then &A stumbles into the room.


&A: Doc? Lizzy?! Where are you?! I need help. Zack's.. He's been shot.


@ His gaze falls upon the medical bed, and his breath catches in his throat. &D's lifeless body lies there, still and pale. A choked sob escapes his lips.


&A with a broken whisper: Dana... no... not you too...


&A: I can't believe this... In the end, I couldn't protect you from Michael. 


@ A shadowy figure appears just outside of the medical bay, its form indistinct in the dim light.


&A: What the... Who are you?


@ A bright light engulfs the medical bay, followed by the sound of a body hitting the floor. Silence descends, broken only by the faint hum of the station's systems.`,type:"audio",links:["11-KI-E"]},"12-HY-0-A":{id:"12-HY-0-A",content:`@ A strange energy begins to swirl within the hydroponics bay, a faint hum filling the air.
        

@ The energy pulses, drawing life from the surrounding plants. They wither and turn brittle, their vibrant green fading to a sickly brown.
        

@ As the plants decay, the swirling energy coalesces, slowly taking on the form of two shadowy figures.
        

@ With a sudden burst of speed, the figures dart towards an air vent, impossibly squeezing through the narrow opening.
        

@ The sound of rushing wind indicates their escape to the outside, carried down to the surface below.`,type:"audio",links:[]},"13-SU-0-A":{id:"13-SU-0-A",content:`@ Two shadowy figures approach &L's lifeless body, their forms wavering like smoke. 
        
        
@ They begin a macabre ritual, their hands digging deeo into the bowels of &L's corpse and spreading his blood all around them. 
        
        
@ Both figures open their mouths impossibly wide, a dark, pulsating energy glowing within. 
        
        
@ An unearthly sound emanates from them, growing in intensity. A blinding flash of white light erupts, consuming the scene. 
        
        
@ When the light subsides, and the video feed stabilizes, three shadowy figures can be seen far in the distance, gliding silently towards the cargo bay.`,type:"audio",links:[]},"14-CA-0-A-L":{id:"14-CA-0-A-L",content:`@ The three shadowy figures glide into the cargo bay, their forms still wavering like smoke. 
        
        
@ The remaining slug-like aliens, as if drawn by an unseen force, writhe and surge towards them, engulfing the figures in a tide of pulsating flesh. A sickening, slurping sound fills the air as the slugs are rapidly consumed, their forms dissolving into the shadowy figures. 


@ The figures begin to solidify, growing in size and definition. Two of them emerge, now in a more physical, grotesque form, naked and twisted caricatures of &A and &L, their eyes glowing with an unnatural light. The third figure remains shadowy, its form still indistinct, but radiating an immense, malevolent power.`,type:"audio",links:[]},"01-BI-99":{id:"01-BI-99",content:`@ A serene silence settles over the Bifrost, the air still and calm. 


@ Suddenly, the eerie fissure glows a brilliant, pulsating red for a fleeting second, as a powerful surge of raw energy violently escapes its depths.`,type:"audio"},"17-BI-0-A-L":{id:"17-BI-0-A-L",content:`@ &0, now fully formed and radiating malevolence, glide silently towards the Bifrost, &A and &L in tow.
        
        
@ They reach the fissure, which pulsates with an ominous red light, and without hesitation, they pass through its shimmering barrier. 
        
        
@ Immediately following them, a grotesque army of slug-like aliens begins to pour out of the darkness, relentlessly surging through the fissure and into the Bifrost, their slimy bodies glistening in the eerie light.`,type:"audio",links:[]},"03-SH-99":{id:"03-SH-99",content:"@ The dark tunnel is suddenly engulfed in a blinding flash of light, followed by the deafening roar of an explosion that shakes the very foundations of the cargo bay above.",type:"audio"},"04-SH-99":{id:"04-SH-99",content:`@ Smoke begins to billow into the dark tunnel, thick and acrid.


@ Above, in the cargo bay, panicked shouts can be heard as &S is giving orders to the crew.`,type:"audio"},"05-SH-99":{id:"05-SH-99",content:`@ The dark tunnel is now full of thick, acrid smoke, making it difficult to see or breathe.


@ Suddenly, a bloodcurdling scream echoes from the cargo bay above, unmistakably &R's, followed by a sickening gurgle and then silence.`,type:"audio"},"15-SH-0-A-L":{id:"15-SH-0-A-L",content:`@ We can see the grotesque versions of &A and &L along with the indistinct third figure approaching the entrance to the tunnel below the Rover as they hear &J entering the cargo bay. 
        
        
@ They quickly dart under the rover into the tunnel. A disturbing hum emanates from beneath the vehicle. 


@ Suddenly, a bright flash erupts from under the rover, followed by the acrid smell of burning fuel and plastic. The rover's engine sputters and dies, smoke billowing from its chassis, rendering it completely useless. 


@The figures remain hidden as they watch &J's futile attempts to turn on the engine.`,type:"audio",links:[]},"16-CA-0-A-J-L":{id:"16-CA-0-A-J-L",content:`@ The slug-like aliens swarm over &J, their acidic bodies beginning to dissolve her flesh.


@ Suddenly, the slugs recoil, halting their assault. They writhe away from her, leaving her body mangled and bleeding.


&J lies in the seat of the bloodied rover, her guts hanging out, bleeding profusely.


@ She looks up, her vision blurring, to see three shadowy figures approaching. Two of them begin to solidify, taking on the twisted, grotesque forms of &A and &L.


&J: Alex? ... Lenny?... Oh my god, what have you done to them.


@ The third, still shadowy figure, glides closer to &J, bending down. Its form coalesces briefly. It whispers something in her ear, inaudible to others.


@ A heart-wrenching sob escapes &J's lips, tears mixing with blood on her face.


@ The three figures turn and silently walk away, leaving &J to bleed to death in the cargo bay.`,type:"audio",links:[],triggers:["TRUE-ENDING"]},"TRUE-ENDING":{id:"TRUE-ENDING",content:`FROM: UNKNOWN SOURCE
TO: INVESTIGATOR

We... we can't believe what you've discovered. This is beyond anything we've ever encountered.

We tried to contact the research Station Vanaheim which is light years away from Niflheim, but they're not responding. A rescue team is en route there now. 

You did a great job, Investigator. You can rest knowing you gave the crew peace. 

We found some more logs from the days before the incident. Nothing much happens in them it seems but I figured you might enjoy seeing them during more happy times. file:00-GA-B-C-I-J-M-R-Z

We do not believe for a second that it was the chef and the pilot in the video feeds. That was just tricks of the light. Everyone passed away. That will be in our report.

@devil:
@devil: They praise you, but deep down, you're not satisfied, are you? You feel you failed them, they were your crew in the end. Even though you arrived long after the fact, the guilt still gnaws at you. It's a heavy burden, isn't it? If you want to truly understand, to truly find peace... I'll be waiting for you at Niflheim. Join me, Summoner.`,type:"audio",hasDevilContent:!0},"00-GA-B-C-I-J-M-R-Z":{id:"00-GA-B-C-I-J-M-R-Z",content:`@ The crew lounge is filled with the comfortable hum of relaxation. &R, &Z, &J, &B, &C, and &M are sprawled on various couches, a half-eaten bag of chips forgotten on the table.


&Z: I swear, Michael took that virtual nature walk more seriously than his actual job. The "smell-o-vision" on that thing was just... wrong.


&R: Yeah, and those pixelated trees looked like something out of a 90s video game. Still, you was so proud of your "immersive experience."


&M: Well I think it's very educational and very well done. I've enjoyed this simulation since I was a kid. It's what got me into biology.


&R: Since you were a kid? Man, that's why! That thing is ancient. It's got to be at least 50 years old.


&B leans into &J, a playful glint in his eyes.


&B: You know, for an astrophysicist, you're surprisingly good at relaxing.


@ &J winks. 


&J: Only when I have good company, Barry.


&C is whispering to &R and &Z, who are trying to stifle their laughter.


&C: ...so the captain says, "I didn't know you could milk those!"


&Z: @ Snorts. Oh shit, that's hilarious!


&C: Just saying, I haven't seen Dr. Darcy since she 'consulted' with the Commander in his quarters a few hours ago. Wonder what kind of 'medical emergency' that was.


@ The door slides open and &I strides in, covered in grease and looking triumphant.


&I: Rover's purring like a kitten! Who needs a shower when you have progress, right?


&I makes a beeline for &J, arms outstretched.


&I: Come here, Jackie, you look like you need a hug!


@ &J Shrieks playfully, trying to dodge him. 


&J: Isaac! Get away from me, you're disgusting!


@ Laughing, &C grabs &J's arm, pulling her closer to &I. 


&C: Come on, Jackie, give the man some appreciation!


@ The lounge erupts in a chorus of laughter, a rare moment of lightheartedness on the station.`,type:"audio",links:[]},"00-CR-E-S":{id:"00-CR-E-S",content:`&S is in bed, the soft glow of the bedside lamp casting long shadows across the room. &E is wrapped around him, her head nestled against his chest, a contented look on her face.
        


&S: Can you hear them out there? They're such children. 


@ &E smiles happily.


&E: This feels so good, I hope it never ends.`,type:"audio",links:[]},"00-RO-A":{id:"00-RO-A",content:"@ &A is sprawled ungracefully across his bed, a loud snore escaping his lips. Beside him, an empty bottle of cheap station rum gleams dully under the low light, a testament to his recent oblivion.",type:"audio",links:[]},"00-RE-D":{id:"00-RE-D",content:`@ &D is deep at work in the lab, reviewing reports, checking tubes, and running experiments on local fauna. The noise from the galley drifts in, disturbing her concentration. 
        


@ With a sigh, she puts on her headphones, and the lab is instantly filled with the thunderous sound of her favorite heavy metal band, drowning out all distractions.`,type:"audio",links:[]},"00-KI-L":{id:"00-KI-L",content:`@ &L puts the final touches to his chocolate cake. He made it with no chocolate, no flour, and no eggs. It looks surprisingly good. 
        


@ He takes a tentative taste, and grimaces. It's foul. With a sigh, he drowns the cake in spirits, planning to light it up when he serves it. 


&L: That should hide the smell, at least.`,type:"audio",links:[]},"11-ME-0-A":{id:"11-ME-0-A",content:`@ &0 is in the middle of the medical bay, his unnatural form gliding strangely towards &A.

@devil:
@devil: Look at you, my little Chaos Engine. Still alive, but barely. We will be one soon enough.


@ The strange figure stares down at &A, who lies incapacitated on the medical bay floor.


@ &0's mouth stretches wide, opening impossibly far, and an awful, soul-shattering sound emanates from within.


@ A gut-wrenching scream of pure terror escapes &A.


@ The security camera feed cuts out, permanently.


@note: The figure's shape was ever shifting but looked a bit like &L for a moment but that's impossible. Must have been a trick of the light.`,type:"audio",hasDevilContent:!0},"10-HY-99":{id:"10-HY-99",content:`@ A single slug-like alien inadvertently slides into the hydroponics bay. It pauses, its many eyes seemingly entranced by the lush, vibrant flora. 
        
        
@ Slowly, it glides towards a large pot containing a thriving fern. With a soft, squelching sound, it begins to burrow into the rich soil, disappearing beneath the surface.
        
@note: If I hadn't seen them rip a man apart before, I could have sworn it was harmless and kind of cute.`,type:"audio",links:[]},"13-HY-99":{id:"13-HY-99",content:`@ The hydroponics bay is a scene of desolate decay. The once lush plants are now brittle husks, their vibrant green replaced by a sickly brown.
        

@ From the soil of a withered fern, the slug-like alien that had burrowed into one of the pots slowly emerges, its slimy body glistening.
        

@ It pauses, seemingly surveying the destruction, before slithering towards the entrance.
        

@ As the slug disappears through the door, the last of the withered leaves in the bay crumble into fine ash, carried away by an unseen draft.`,type:"audio",links:[]},"14-HY-99":{id:"14-HY-99",content:`@ The hydroponics bay remains a scene of desolate decay. 
        
        
@ The withered plants stand like skeletal fingers reaching towards the dim ceiling, and an eerie silence hangs heavy in the air, broken only by the faint hum of failing life support.`,type:"audio",links:[]},"15-HY-99":{id:"15-HY-99",content:`@ The hydroponics bay remains a scene of desolate decay. 
        
        
@ The withered plants stand like skeletal fingers reaching towards the dim ceiling, and an eerie silence hangs heavy in the air, broken only by the faint hum of failing life support.`,type:"audio",links:[]},"16-HY-99":{id:"16-HY-99",content:`@ The hydroponics bay remains a scene of desolate decay. 
        
        
@ The withered plants stand like skeletal fingers reaching towards the dim ceiling, and an eerie silence hangs heavy in the air, broken only by the faint hum of failing life support.`,type:"audio",links:[]},"17-HY-99":{id:"17-HY-99",content:`@ The hydroponics bay remains a scene of desolate decay. 
        
        
@ The withered plants stand like skeletal fingers reaching towards the dim ceiling, and an eerie silence hangs heavy in the air, broken only by the faint hum of failing life support.`,type:"audio",links:[]},"12-ME-99":{id:"12-ME-99",content:"@ The video feed is a chaotic mess of static. All visual contact is lost from the <b>medical bay</b> following the strange incident.",type:"audio"},"13-ME-99":{id:"13-ME-99",content:"@ The video feed is a chaotic mess of static. All visual contact is lost from the <b>medical bay</b> following the strange incident.",type:"audio"},"14-ME-99":{id:"14-ME-99",content:"@ The video feed is a chaotic mess of static. All visual contact is lost from the <b>medical bay</b> following the strange incident.",type:"audio"},"15-ME-99":{id:"15-ME-99",content:"@ The video feed is a chaotic mess of static. All visual contact is lost from the <b>medical bay</b> following the strange incident.",type:"audio"},"16-ME-99":{id:"16-ME-99",content:"@ The video feed is a chaotic mess of static. All visual contact is lost from the <b>medical bay</b> following the strange incident.",type:"audio"},"17-ME-99":{id:"17-ME-99",content:"@ The video feed is a chaotic mess of static. All visual contact is lost from the <b>medical bay</b> following the strange incident.",type:"audio"},"10-BR-B-C-J":{id:"10-BR-B-C-J",content:`@ &J, &B, and &C arrive on the bridge. &C is visibly shaken, his eyes wide with terror.


&C: @ A choked sob. Isaac... he's gone! And the blood... there's so much blood! What is happening?!


&B: Easy, Carl. Take a deep breath. We're here now.


&J: @ A soft voice. Here, take this. It'll help calm your nerves. We'll figure this out together.


@ &C takes the offered joint, his hands trembling as he lights it. He takes a long drag, then another, slowly exhaling a cloud of smoke.


&C: @ His voice still shaky, but calmer. Thanks, Jackie. Dana... Dana was killed by Michael. Isaac said he was acting strange, and then... then Isaac...


&B: We saw Michael too, Holden. He's outside, on the surface, trying to escape with the specimens.


&J: He must have taken them during the chaos. And he took something else too. Something important.


&C: What are you talking about, Jackie?


&J: @ Her voice drops to a whisper. This whole mission... it wasn't just about research. We were sent here to find what was in the rift, to study it. And I had a device. A containment unit. To store whatever we found. But Michael... he stole it. He has it.


&C: He has the containment unit? That son of a... We have to stop him!


&J: We will. But first, we wait. Everyone else will eventually make their way here. We need to regroup. Pass me the joint.`,type:"audio",links:["11-BR-B-C-J"]},"11-BR-B-C-J":{id:"11-BR-B-C-J",content:`@ The three of them sit in silence for a moment, the only sound the faint hum of the station's systems and the occasional crackle of the joint. Suddenly, a strange, squelching sound echoes from the corridor outside the bridge.


&B: What was that?


&J: I don't know... It sounds like... movement.


@ &B quickly pulls out the three pulse rifles he had carried on his back from the security room, handing one to &J and one to &C.


&B: Get ready.


@ The squelching sounds grow louder, closer. A grotesque, slug-like creature oozes into view at the entrance to the bridge, its many eyes fixed on them. Then another, and another. A whole swarm of them.


&C: @ A terrified scream. Oh my god!


@ The three open fire, pulse rifles spitting energy bolts. Slugs explode in a shower of acidic goo, but more keep coming, overwhelming them. &C, still high and disoriented, is the first to be swarmed, his screams cut short as the creatures engulf him.


&B: Carl!


@ &B shoves &J towards the emergency exit.


&B: Go! Get out of here! I'll hold them off!


&J: No! Barry!


@ &B pushes her through the door and slams it shut, sealing himself inside with the rapidly advancing swarm. &J hears his final, desperate shots, then silence. Tears streaming down her face, she turns and flees, her footsteps echoing down the corridor towards the galley.

@devil:
@devil: Don't worry Demonhunter. Once I've finished with your friends, you're next. `,type:"audio",hasDevilContent:!0,links:["12-GA-E-J"]},"11-KI-E":{id:"11-KI-E",content:`@ &E rushes into the kitchen, her eyes widening in horror. Blood splatters the floor, the countertops, and even the ceiling. A gaping bullet hole is visible in the wall. There's no sign of &A.


&E: @ A horrified whisper. Oh my god... What happened here? Alex? Where are you?

@devil:
@devil: Yes. Blame Alex. He was horrible to his wife. You saw the bruises when you examined her. She would always brush them off but you knew.
@devil:

&E: I can see the signs of struggle here and someone was shot and it looks like a body was dragged out of here.


&E: Alex! Alex! Where are you?


@ The sound of &E's frantic footsteps as she inspects the scene. The blood trail leads out of the kitchen, towards the galley.`,type:"audio",hasDevilContent:!0,links:["06-KI-A-L","12-GA-E-J","07-KI-L-M"]},"12-GA-E-J":{id:"12-GA-E-J",content:`@ &J stumbles into the galley, covered in slime, blood, and sweat, and crashes into &E.


&J: @ Panting, barely coherent. Slugs! Swarm! Barry... Carl... they're gone!


&E: Jackie! What are you talking about? Slugs? There's a murderer on the loose! Lenny.. No. Alex... he killed Dana!

@devil:
@devil: Yes. Alex. He was the murderer. Sow distrust. Michael, Alex and Lenny. You can never be sure.
@devil:

&J: @ Shaking her head frantically. No! It was Michael! He took the containment unit! He's trying to escape with the specimens!


&E: But where was Alex before the explosion? And why would he leave his wife to go to the bridge by herself and come to the cargo bay? Besides the murder weapon was a kitchen knife. This was a crime of passion. What would Michael gain from killing Dana?


&J: This is all moot. Have you seen Cross or Leonard? Everyone else is dead, Lizzy. It's just us. 


&E: I saw blood in the kitchen. I thought Lenny had.. But now I'm not so sure. Why would he? Alex had more.. Oh god, Sebastian. He hasn't returned from... Do you think he's also? We need to send a message! We need help!


&J: The comms are on the bridge! It's overrun! There's no way!


&E: Wait... the spare rover! If we can get to maintenance, use the escape hatch, we can get outside and reach the cargo bay that way!


&J: Yes! That's our only shot! Come on!

@devil:
@devil: Yes. Come straight to us my loves.`,type:"audio",hasDevilContent:!0,links:["13-MA-E-J"]},"13-MA-E-J":{id:"13-MA-E-J",content:`@ &E and &J stumble into the maintenance bay, their eyes widening in horror at the sight of &Z's lifeless body.


&J: @ A horrified whisper. Zack? Oh my god... what happened?


&E: @ Her voice trembling. I don't understand any of this... first Dana, now Zack... 


@ &E spots a discarded gun on the floor, its barrel still warm. She picks it up, her brow furrowed in confusion. 


&E: @ Her voice trembling. I don't understand any of this... first Dana was stabbed, now Zack's been shot...


&J: And what happened to the outer doors? They look like they got blown up from outside!


@ A series of unsettling thuds and wet, dragging sounds echo from the direction of the bridge, growing louder.


&J: @ Her eyes wide with panic. Did you hear that? They're coming! The slugs! We can't stay here!


&E: You're right! The rover! We need to get to the cargo bay! Suits on, now!


@ &E and &J frantically pull on their environmental suits, their movements clumsy with fear. They rush into the decompression chamber, the hiss of air filling the space unnecessarily when the outer doors have been blown open, revealing the desolate alien surface.`,type:"audio",links:["14-SU-E-J","08-MA-A-Z","07-MA-A","09-MA-Z"]},"14-SU-E-J":{id:"14-SU-E-J",content:`@ &J and &E stumble onto the desolate alien surface, their eyes scanning the rocky terrain. A gasp escapes &J's lips as she spots a familiar figure. &L's lifeless body lies sprawled on the ground, his stomach slashed open, his blood and guts spilled out and arranged all around him in a crude pentagram.


@ Further ahead, a pile of grotesque, slug-like creatures writhes amidst the mangled remains of what appears to be &M, his body dismembered and charred. The ground around them is scorched from the recent explosion.


&E: @ A sudden, terrified scream from &E. Out of nowhere, several slugs, seemingly dormant, spring to life and leap onto her, their acidic bodies tearing through her suit. Before &J can even raise her weapon, &E's screams are cut short, her body collapsing under the onslaught.


@ &J, her face contorted in horror and grief, fires a couple of desperate shots into the writhing mass, but it's useless. Tears streaming down her face, she turns and sprints, her heavy footsteps echoing across the alien landscape, towards the distant cargo bay.`,type:"audio",links:["15-CA-J"]},"15-CA-J":{id:"15-CA-J",content:`@ &J stumbles into the cargo bay, gasping for breath, her body screaming in protest. She collapses against a stack of crates, tears still streaming down her face, and forces herself to take a few shaky breaths, trying to calm her racing heart. After a minute, she pushes herself up and scrambles towards the spare rover, hoping for escape. She yanks open the door and climbs inside, fumbling with the controls.


&J: @ A desperate whisper. Come on, come on! Start!


@ The rover sputters, then dies. A quick inspection reveals charred wires and a cracked engine block. The fire from the cargo bay explosion must have damaged it.


&J: No! No, no, no!


@ A familiar squelching sound echoes from the entrance to the cargo bay. &J's head snaps up. More slugs. A whole swarm, oozing in, their many eyes fixed on her. She grabs her pulse rifle, her hands trembling, and braces herself.


&J: You want me? Come and get me!


@ &J opens fire, energy bolts tearing through the grotesque creatures. Slugs explode in a shower of acidic goo, but for every one she destroys, two more appear. She fights with a ferocity born of despair, screaming defiance as the swarm overwhelms her. Her shots become less frequent, her screams turn to choked gasps, and then... silence. The only sound is the wet, squelching movement of the slugs, and the faint hum of the station's systems.

@devil:
@devil: But that wasn't the end, was it Demonhunter? I couldn't let you die without you seeing me. Without you understanding finally what it is you had been facing all along.
@devil:

@note: It seems that &J has met her end. CONCLUSION is now available in your inbox.`,type:"audio",triggers:["CONCLUSION"],links:[],hasDevilContent:!0},"1010-LOG-SC":{id:"1010-LOG-SC",content:`LOG ENTRY
USER: COMMANDER CROSS

DATE: October 10th 

I was cut short when entering my report yesterday. 

As I was saying before, the rover was out on a routine rock-collecting survey when it picked up a strange, repeating signal emanating from the surface of Kepler-186f. 

It's unlike anything I've ever encountered – not natural, but not quite like any known artificial transmission either. 

Analysis is ongoing, but initial scans suggest a complex, structured pattern. 

&R is investigating the signal further. &I will unload the rover and &J will examine the specimens.

 `,type:"text",links:["02-CA-I-J"]},"1009-LOG-RR":{id:"1009-LOG-RR",content:`LOG ENTRY
USER: ENGINEER RYAN

DATE: October 9th 


The Rover is on its way back. I know I haven't been on the job for that long but I still don't understand why they put those rocks on the Rover in the first place. And now they want us to quarantine those same samples? It doesn't make any sense. And what the hell was in that titanium box?`,type:"text"},"1010-LOG-RR":{id:"1010-LOG-RR",content:`LOG ENTRY
USER: ENGINEER RYAN

DATE: October 10th 


&S asked me to compare the signal to the data we have on Kepler-186f. 
So far, I can't find anything that matches. 

It's like it's not from here. The waves are...It gives me the creeps. 

It doesn't help that &M is absolutely giddy with excitement at the discovery, believing we've found proof of alien life.


 `,type:"text",links:["01-CA-I-M"]},"CAMERA-FEEDS":{id:"CAMERA-FEEDS",content:`SECURITY CAMERA &99 SYSTEM PROTOCOL:

Human entity detection is achieved through a multi-modal sensor array, including visual spectrum analysis, infrared heat signatures, acoustic pattern recognition, and subtle atmospheric pressure changes. This comprehensive approach ensures accurate presence detection while minimizing intrusive surveillance. Privacy protocols dictate that detailed biometric data is not stored for active crewed areas.

EMPTY ROOM MONITORING & ENERGY CONSERVATION:
The &99 system continuously monitors room occupancy to identify and log frequently empty areas.
Statistics:
- Engine Room: Occupancy average 15% (primarily during shift changes).
- Maintenance Bay: Occupancy average 22% (sporadic use for repairs).
- Cargo Bay: Occupancy average 10% (only during loading/unloading operations).

Recommended energy conservation measures for these low-occupancy zones include:
1. Automatic HVAC reduction (e.g., AC setpoints adjusted to conserve power).
2. Deactivation of non-essential lighting when no human presence is detected.
3. Temporary de-prioritization or reduced sensitivity for non-critical environmental sensors to save processing power.
These measures are projected to reduce energy consumption by 18% across these identified areas.`,type:"mainframe",links:[]},"CHORES-ROTA":{id:"CHORES-ROTA",content:`GALLEY CLEANING ROTA

The Galley serves as our primary lunch room, entertainment hub, and general common area. Maintaining its cleanliness is essential for crew morale and hygiene.

Weekly Rota:
- Week 1: Lenny
- Week 2: Alex
- Week 3: Zack
- Week 4: Isaac
- Week 5: Bobby
- Week 6: Carl

Please ensure the galley is thoroughly cleaned by the end of your assigned week. Responsibilities include washing dishes, wiping down surfaces, sweeping/mopping the floor, and emptying waste bins.`,type:"mainframe",links:[]},"POKER-NIGHT":{id:"POKER-NIGHT",content:`POKER NIGHT
To whom it may concern,

I'm writing to express my extreme displeasure regarding the recent poker nights. The noise levels have become unacceptable, continuously disturbing the sleep of crew members who are not participating. This is a small station and the galley is right next to the bedrooms. A lack of proper rest impacts everyone's performance and safety.

Furthermore, I've observed a disturbing pattern where Zack is consistently losing significant amounts of his wages. He is young and, frankly, quite naive. While I understand friendly games, the current situation borders on exploitation. I expect these games to be conducted with more consideration for fellow crew members, both in terms of noise and fairness.

Signed,
Dr. Elizabeth Darcy

`,type:"mainframe",links:[]},"1007-LOG-JD":{id:"1007-LOG-JD",content:`LOG ENTRY
USER: Dr. DUPONT

DATE: October 8th

We sent another specimen through the breach. This time we covered the sensors in a titanium case as we know this can survive the journey. It does dull the sensors abilities and we were only able to observe through limited electromagnetic spectrum bands.

My current hypothesis is that the Bifrost that connects Niflheim to Vanaheim goes through a higher-dimensional manifold to reach the other side. I haven’t shared these findings with anyone yet. It has too many implications that I want to contemplate and experiment with so I can definitely prove it first.

`,type:"mainframe",links:[]},"1008-LOG-JD":{id:"1008-LOG-JD",content:`LOG ENTRY
USER: Dr. DUPONT

DATE: October 8th

Someone is reading my logs. I don't know who it is but I found the tamper lock activated. I will start encrypting further logs and in the meantime archive the sensitive logs deep in the core of the mainframe where no-one in the station has access. Just deleting the logs would leave a trace and raise suspicion.
`,type:"mainframe",links:[]},cross:{id:"cross",content:`EMAIL SUMMARY
USER: Commander Cross

Details of emails sent by Commander Cross in the last week before the incident.

Summary of emails sent in the last week:
- Station Niflheim - Mission Quarterly Report Q3: A detailed report on the third quarter of the mission to Station Niflheim.
- Supply Chain Delays - Urgent: Critical update on disruptions affecting supply lines.
- Personal Update - Life on Kepler-186f: A personal account of daily life and experiences on Kepler-186f.
- Request for Leave - Earth Visit: Formal request for personal time off to visit Earth.
- Anomaly Report - Sector 7: Preliminary report on unusual activity detected in Sector 7.`,type:"mainframe",style:"email",links:[]},darcy:{id:"darcy",content:`EMAIL SUMMARY
USER: Dr. Elizabeth Darcy

Details of emails sent by Dr. Elizabeth Darcy in the last week before the incident.

Summary of emails sent in the last week:
- Medical Log - Patient X-5: Detailed medical record for a specific patient.
- Urgent - Supply Request - Xenobiotics: Request for specialized biological supplies.
- Personal - How's Earth? Missing the rain.: A personal message inquiring about Earth.
- Report - Station Health Metrics - Q3: Quarterly report on the station's health and operational metrics.
- RE - Anomaly Report - Follow-up: Response regarding further investigation into an anomaly.
- Invitation - Zero-G Yoga Session: An invitation for a recreational activity.`,type:"mainframe",style:"email",links:[]},arogan:{id:"arogan",content:`EMAIL SUMMARY
USER: Pilot Rogan

Details of emails sent by Pilot Rogan in the last week before the incident.

Summary of emails sent in the last week:
- Transfer Request - Active Duty: Formal request for reassignment to a more active combat zone.
- Complaint - Starflix Subscription Hike: Grievance regarding the recent price increase of the Starflix streaming service.
- Inquiry - Patrol Routes - Sector 4: Questioning the necessity and frequency of current patrol assignments.
- Personal - Boredom on Station: A personal message expressing frustration with the lack of pilot activity.
- Follow-up - Transfer Request Status: Checking on the progress of the previously submitted transfer request.`,type:"mainframe",style:"email",links:[]},drogan:{id:"drogan",content:`EMAIL SUMMARY
USER: Dr. Rogan

Details of emails sent by Dr. Rogan in the last week before the incident.

Summary of emails sent in the last week:
- FWD - Colony Supply Request - Hydroponics: A forwarded request concerning supplies needed for the hydroponics bay.
- Personal - How are you mum?: A personal message checking in with family.
- Report - Atmospheric Chemical Composition: A scientific report detailing the analysis of air chemicals within the station.`,type:"mainframe",style:"email",links:[]},dupont:{id:"dupont",content:`EMAIL SUMMARY
USER: Dr. Dupont

Details of emails sent by Dr. Dupont in the last week before the incident.

Summary of emails sent in the last week:
- CONFIDENTIAL - Quantum Portal Activation Sequence: Highly classified operational procedure for activating the experimental quantum portal that joins 2 worlds light years away together.
- FWD - Gravitational Anomaly Readings - redshift: Forwarded data logs showing unusual gravitational fluctuations and redshift anomalies in Sector 7.
- Personal - Old world news for you: A personal message from a colleague on Earth, discussing current events and expressing longing for space.
- CONFIDENTIAL - Project Valhalla Progress: Status report on the highly sensitive Project Valhalla, detailing research milestones and next steps.`,type:"mainframe",style:"email",links:[]},grimm:{id:"grimm",content:`EMAIL SUMMARY
USER: Dr. Grimm

Details of emails sent by Dr. Grimm in the last week before the incident.

Summary of emails sent in the last week:
- Research Update - Xenobiotic Flora of Kepler-186f: A report detailing findings on alien plant life.
- FWD - Specimen Analysis Request - Sector 3: A forwarded request for the analysis of biological samples.
- Report - Biohazard Containment Protocol Review: A review of procedures for handling hazardous biological materials.
- Invitation - Nature Walk on Research deck (Simulated): An invitation to a simulated recreational activity.`,type:"mainframe",style:"email",links:[]},holden:{id:"holden",content:`EMAIL SUMMARY
USER: Ensign Holden

Details of emails sent by Ensign Holden in the last week before the incident.

Summary of emails sent in the last week:
- RE - Mess Hall Food - What IS this crap?: A complaint about the quality of food in the mess hall.
- FWD - Best Space Jokes Vol. 3: A forwarded collection of space-themed jokes.
- Personal - Still owe me that beer, pal!: A personal reminder about a debt.
- Subject - Found a new <b>shortcut</b> to The Cargo Bay... don't tell anyone.: A message about a newly discovered <b>shortcut</b>.`,type:"mainframe",style:"email",links:[]},jackson:{id:"jackson",content:`EMAIL SUMMARY
USER: Comms Specialist Jackson

Details of emails sent by Comms Specialist Jackson in the last week before the incident.

Summary of emails sent in the last week:
- Comms Array Status Report - Q4: A comprehensive report on the communication array's performance for the fourth quarter.
- RE - Signal Intermittency on Sector 4 Relay: A reply addressing intermittent signal issues affecting the Sector 4 relay.
- RE - Best Space Jokes Vol. 3: Replying to Holden's forwarded collection of space-themed jokes.
- FWD - Latest Galactic News Digest: Forwarding a compilation of recent news and events from across the galaxy.
- Urgent - Anomaly Detected in Long-Range Scan: A critical alert concerning an unusual detection during a long-range scan.
- Subject - Quick fix for comms console static: A message detailing a solution for static interference on the communication console.`,type:"mainframe",style:"email",links:[]},kozov:{id:"kozov",content:`EMAIL SUMMARY
USER: Technician Kozlov

Details of emails sent by Technician Kozlov in the last week before the incident.

Summary of emails sent in the last week:
- FWD - Maintenance Schedule Update - Sector 5: Forwarded update regarding the maintenance schedule for Sector 5.
- Report - HR - name change: A request to fix the typo in his name in the manifest. It's causing him issues with getting his paycheque cleared.
- Personal - RE - Still owe me that beer, pal!: A personal reply concerning a pending debt.
- Request for Spare Parts - List attached: A request for spare parts with an attached list of required items.`,type:"mainframe",style:"email",links:[]},ryan:{id:"ryan",content:`EMAIL SUMMARY
USER: Engineer Ryan

Details of emails sent by Engineer Ryan in the last week before the incident.

Summary of emails sent in the last week:
- Subject - New Life support stabiliser schematics: New schematics for the life support stabilizer system.
- FWD - Earth Weather Report: Forwarding an Earth weather report inquiry.
- RE - Malfunction in Engine fuel lines - My thoughts: A reply regarding a malfunction in the engine fuel lines with personal thoughts.
- Personal - Weekend plans on Station?: A personal message inquiring about weekend plans on the station.
- Request - More coffee for Engineering, please!: A request for additional coffee supplies for the Engineering department which is just him by all accounts.`,type:"mainframe",style:"email",links:[]},vance:{id:"vance",content:`EMAIL SUMMARY
USER: Security Officer Vance

Details of emails sent by Security Officer Vance in the last week before the incident.

Summary of emails sent in the last week:
- Security Alert - Unauthorized Access Attempt - Research lab: An alert detailing an attempt to gain unauthorized access to the research laboratory.
- Report - Anomaly in Perimeter Scans - Urgent: An urgent report concerning an unusual detection during routine perimeter scans.
- FWD - New Security Protocols - Read Immediately: Forwarded information regarding updated security procedures that require immediate attention.
- Personal - WHen is the next poker night?: A personal message inquiring about the schedule for the next poker game.
- Subject - Request for Reinforcements: A formal request for additional personnel or resources to bolster security.`,type:"mainframe",style:"email",links:[]},mccoy:{id:"mccoy",content:`EMAIL SUMMARY
USER: Chef McCoy

Details of emails sent by Chef McCoy in the last week before the incident.

Summary of emails sent in the last week:
- Hook me up: A clandestine request for contraband drugs to be brought onto the station during the next supply drop.`,type:"mainframe",style:"email",links:[]},"MAINTENANCE-LOG":{id:"MAINTENANCE-LOG",content:`MAINTENANCE LOG
DATE: October 9th
UNIT: Life Support System
STATUS: Minor fluctuations detected in atmospheric scrubbers. Pressure differential within acceptable parameters. Filter replacement scheduled for next cycle.
NOTES: Ensign Holden reported a "funny smell" near the hydroponics bay. Investigated, found nothing unusual. Probably just the algae.`,type:"mainframe",links:[]},"GALLEY-MENU":{id:"GALLEY-MENU",content:`GALLEY MENU - WEEK OF OCTOBER 7th

MONDAY: Rehydrated Beef Stroganoff, Synthetic Greens
TUESDAY: Protein Paste Surprise, Nutrient Blocks
WEDNESDAY: "Chef's Special" (mystery meat), Processed Potato Substitute
THURSDAY: Algae Patties, Vitamin-fortified Gravy
FRIDAY: Recycled Pizza (various toppings from previous meals)

NOTE: Due to supply chain disruptions, fresh produce is currently unavailable. We appreciate your understanding.`,type:"mainframe",links:[]},"RECREATION-SCHEDULE":{id:"RECREATION-SCHEDULE",content:`RECREATION SCHEDULE
WEEK OF OCTOBER 7th

MONDAY: Zero-G Yoga (Cargo Bay, 19:00) - Instructor: Dr. Darcy
TUESDAY: Board Game Night (Galley, 20:00) - Featuring: "Cosmic Conquest"
WEDNESDAY: Movie Night (Galley, 21:00) - Screening: "The Martian"
THURSDAY: Poker Night (Galley, 20:00) - Organizer: Ensign Holden (Strictly for fun, no high stakes!)
FRIDAY: Virtual Reality Simulations (Hydroponics Bay, 17:00) - New scenarios added!

Please sign up in advance for limited capacity events.`,type:"mainframe",links:[]},"jd-journal-10":{id:"jd-journal-10",content:`JOURNAL ENTRY - JACKIE DUPONT
DATE: October 8th

My experiments with the self-driving rover across the <b>Bifrost</b> have yielded some fascinating, albeit disturbing, results.

Firstly, any organic matter attached to the rover, even trace amounts, is completely annihilated upon passage through the <b>Bifrost</b>. It simply ceases to exist on the other side. This curbs the potential for any manned missions.

Secondly, there's a measurable temporal lag between the rover entering the breach and reappearing on the other side. It's not instantaneous, suggesting a traversal through a dimension where time behaves differently, or perhaps a complex re-assembly process.

Most intriguingly, after each successful passage, the rover returns with a residue of unknown energy clinging to its metallic surfaces. Our standard sensors can detect it, but cannot identify its nature or origin. It dissipates slowly over time.

Today, I received the specialized equipment from Earth. A batch of unique crystalline rocks, theorized to absorb this unknown energy, and a portable harnessing device. Tomorrow, October 9th, I will conduct the first test: exposing the rocks to a recently returned rover and then attempting to extract the energy with the handheld machine. This could be the breakthrough we've been waiting for.

@note: Why is this lone journal entry here? Where is the rest? Was it left deliberately as a final clue by &J in case of an emergency? So that someone, anyone could understand what the true nature of the tests being conducted here were about?`,type:"mainframe",links:[]},"DUTY-ROSTER":{id:"DUTY-ROSTER",content:`DUTY ROSTER - WEEK 42
        
COMMAND: Cross
SCIENCE: Rogan (D), Dupont, Grimm
ENGINEERING: Ryan, Kozlov
MEDICAL: Darcy
SUPPORT: McCoy, Jackson, Vance, Holden
GENERAL DUTIES: McCoy, Rogan (A)

NOTE: All shifts are double duration until further notice due to the ongoing anomaly investigation.`,type:"mainframe"},"SAFETY-GUIDELINES":{id:"SAFETY-GUIDELINES",content:`STATION SAFETY GUIDELINES

1. Always wear your vac-suit when outside the pressurized zones.
2. Report any structural anomalies immediately to Engineering.
3. Do not approach the breach without proper authorization.
4. In case of containment breach, seal the sector and wait for Security.
5. Mandatory wellbeing evaluations are now weekly.`,type:"mainframe"},"STATION-MANUAL":{id:"STATION-MANUAL",content:`NIFLHEIM STATION OPERATIONS MANUAL

SECTION 1: LIFE SUPPORT
The Niflheim Station Life Support System (LSS) is a closed-loop environmental control system designed for long-duration habitation. It continuously monitors and regulates atmospheric composition, temperature, humidity, and pressure within all habitable modules. Key components include:

    - Atmospheric Processors: Remove CO2, filter particulates, and replenish O2.
    - Water Reclamation Units: Recycle wastewater for potable and non-potable uses.
    - Thermal Control Systems: Maintain optimal internal temperatures.
    - Emergency Air Scrubbers: Activated during atmospheric contamination events.

    All LSS functions are centrally managed by the station's AI, with manual overrides available at primary control consoles. Regular maintenance checks are mandatory as per schedule.


SECTION 2: POWER SYSTEMS
The station runs on a geothermal core tap. Fluctuations are normal during seismic activity.

SECTION 3: EMERGENCY PROTOCOLS
In the event of an emergency, all personnel are to follow these protocols:
    1. General Alarm: Upon activation of the general alarm, proceed immediately to the nearest designated safe zone located in the maintenace room.
    2. Decompression: If a decompression alarm sounds, don your vac-suit immediately. If a suit is unavailable, seek a sealed compartment and initiate emergency pressurization.
    3. Fire: Activate local fire suppression systems. If the fire is not contained, evacuate the sector and seal bulkheads. Report to Command.
    4. Medical Emergency: Contact Medical Bay immediately via comms. Provide location and nature of the emergency. Administer first aid if trained and safe to do so.
    5. Containment Breach: Follow "SAFETY-GUIDELINES" protocol 4. Do not engage with anything the rover may have brought back. Remember we still don't quite understand what happens in the Bifrost.
    6. Communication Failure: Attempt to re-establish contact with Command via auxiliary channels. If unsuccessful, proceed with pre-approved contingency plans for your current assignment. We are aware of the issues with sending long distance messages to central command and have been told a new type of wave emitter will be sent with the next shuttle.
`,type:"mainframe"},"ROVER-MANUAL":{id:"ROVER-MANUAL",content:`ROVER MK-IV OPERATING INSTRUCTIONS

1. Ensure battery charge is above 80% before sortie.
2. Check tire pressure and tread integrity. The surface rock is razor sharp.
3. Do not exceed 20km/h on uneven terrain.
4. The rover is to be returned to the station at the end of each sortie.
5. The breach is not designed for lifeforms and the rover should be left on autopilot during the journey. Any attempts to cross the breach could cause serious injuries and even death.
6. If communication is lost, return to base immediately. Auto-return protocol is unreliable in magnetic storms.`,type:"mainframe"},"SUIT-PROTOCOLS":{id:"SUIT-PROTOCOLS",content:`EVA SUIT PROTOCOLS

- Check O2 levels every 15 minutes.
- Monitor suit integrity HUD.
- If you hear a hissing sound, patch immediately.
- Do not remove helmet unless in a confirmed green zone.
- The suit is resistant to acid rain for up to 30 minutes. Seek shelter if rain intensifies.
- We have a limited amount of suits so take care of them like they were your children.`,type:"mainframe"},"INCIDENT-REPORT-101":{id:"INCIDENT-REPORT-101",content:`INCIDENT REPORT #101
DATE: October 1st
REPORTING OFFICER: Barry Vance

SUBJECT: Lunchtime Disturbance

DESCRIPTION: Crewman Holden and Crewman Jackson engaged in a heated argument regarding the last packet of freeze-dried strawberries. Physical altercation was prevented by Chef McCoy. Both parties were issued a verbal warning. Morale is low.`,type:"mainframe"},"SUPPLY-REQUEST":{id:"SUPPLY-REQUEST",content:`SUPPLY REQUEST FORM
REQUESTER: Chef McCoy

ITEMS:
- Real coffee (Urgent)
- Fresh vegetables (Any kind, please)
- Chocolate
- Whiskey (For medicinal purposes)
- More strawberries (See Incident #101)

`,type:"mainframe"},"SYSTEM-BOOT-LOG":{id:"SYSTEM-BOOT-LOG",content:`SYSTEM BOOT SEQUENCE

KERNEL: 4.19.0-12-generic

[OK] Mounting filesystems...
[OK] Starting network services...
[OK] Initializing security protocols...
[OK] Loading user profiles...
[ERROR] Sector 7 sensor array not responding.
[WARNING] remote access detected
[OK] remote access granted
[OK] System ready.`,type:"mainframe"},"ERROR-LOG-LATEST":{id:"ERROR-LOG-LATEST",content:`ERROR LOG LATEST
        
[ERR] 10-09 03:15: Unauthorized access attempt detected in Research Lab.
[ERR] 10-09 09:30: Anomaly detected in log files. Data corrupted.
[ERR] 10-10 08:22: breach in maintenance room hull detected.
[ERR] 10-10 09:45: Power supply failure in cargo bay.
[ERR] 10-08 10:02: Connection lost to Rover 1.
[ERR] 10-10 12:10: Fire detected in research lab.
[ERR] 10-10 18:59: CRITICAL SYSTEM FAILURE. MAIN POWER OFFLINE. BACKUP GENERATORS ENGAGED.`,type:"mainframe"},"rover-outing.jpg":{id:"rover-outing.jpg",content:`[IMAGE FILE: rover-outing.jpg]

@ A digital photograph showing Jacqueline Dupont and Isaac Kozlov standing next to the Rover on the planet's surface. They are giving a thumbs up, but their faces are obscured by the reflective visors of their helmets. 


@ The landscape behind them is a desolate, rocky wasteland under a pale, alien sky. an abnormal fissure can be seen in the distance. 


@ Is that what they refer to as the breach? Does it take them into the Bifrost?
`,type:"mainframe"},"south-cave.jpg":{id:"south-cave.jpg",content:`[IMAGE FILE: south-cave.jpg]

@ A low-light photograph taken inside a cavern. Bioluminescent moss clings to the walls, casting an eerie green glow. In the center, a large, dark pool of liquid reflects the light.


@ The pool is filled with a strange, bioluminescent liquid that glows with a soft, green light. The walls of the cavern are lined with strange, bioluminescent plants that emit a soft, green glow. The air is thick with a strange, sweet scent.`,type:"mainframe"},"antigrav-yoga.jpg":{id:"antigrav-yoga.jpg",content:`[IMAGE FILE: antigrav-yoga.jpg]

@ A candid shot of Dr. Darcy and Dr. Rogan floating in mid-air in the antigrav module in the cargo bay, attempting a complex yoga pose in zero-gravity. They are both laughing. 


@ It's a rare moment of levity captured amidst the station's stark industrial interior.`,type:"mainframe"}},Ir={foundFiles:["09-DU-B-J","1009-TR-ZJ"],files:ul},uh=e=>{const t=e.toLowerCase(),n=Object.keys(ul).find(r=>r.toLowerCase()===t);return ul[n]},_i="SPACE_ANOMALY_CORE_KEY",dh=e=>{try{const t=JSON.stringify(e),n=encodeURIComponent(t);let r="";for(let s=0;s<n.length;s++){const i=n.charCodeAt(s)^_i.charCodeAt(s%_i.length);r+=i.toString(16).padStart(2,"0")}return r}catch(t){return console.error("Encryption failed",t),null}},hh=e=>{try{try{const r=JSON.parse(e);if(r&&typeof r=="object")return r}catch{}let t="";for(let r=0;r<e.length;r+=2){const s=e.substr(r,2),i=parseInt(s,16)^_i.charCodeAt(r/2%_i.length);t+=String.fromCharCode(i)}const n=decodeURIComponent(t);return JSON.parse(n)}catch(t){return console.error("Decryption failed",t),null}},kt=()=>window.steam!==void 0,mS=async e=>{if(kt())try{return await window.steam.activateAchievement(e)}catch(t){return console.error("Steam achievement error:",t),!1}return!1},pS=async()=>{if(kt())try{return await window.steam.getName()}catch(e){return console.error("Steam name error:",e),null}return null},fh=async(e,t)=>{if(kt())try{return await window.steam.saveFile(e,t)}catch(n){return console.error("Steam save error:",n),!1}return!1},gS=async e=>{if(kt())try{return await window.steam.loadFile(e)}catch(t){return console.error("Steam load error:",t),null}return null},yS=async e=>{if(kt())try{return await window.steam.activateOverlay(e)}catch(t){return console.error("Steam overlay error:",t),!1}return!1};function vS(){var J;const[e,t]=A.useState(!0),[n,r]=A.useState(""),[s,i]=A.useState(!1),[o,a]=A.useState(!1),[l,c]=A.useState(!1),[d,h]=A.useState(!1),f=A.useRef(null),w=A.useRef(null),[y,g]=A.useState({screen:"help",foundFiles:Ir.foundFiles,inbox:["readme"],readInboxFiles:[],discoveredCrew:{},searchResults:[],searchQuery:null,currentFile:null,newDiscovery:!1,history:[],currentPath:["root"],adminUnlocked:!1,awaitingAdminPassword:!1,manifestationRoles:{},devilMode:!1,devil2Mode:!1,playerNotes:[],fileLabels:{},monitorPower:{engines:2,lifeSupport:1,relay:0}}),[T,p]=A.useState(null),[m,v]=A.useState(!1),[S,E]=A.useState([]),I=A.useRef(y.inbox.length);A.useEffect(()=>{var D,L;(L=(D=y.currentFile)==null?void 0:D.id)!=null&&L.endsWith("-99")&&C("ACH_SECURITY")},[(J=y.currentFile)==null?void 0:J.id]);const C=D=>{kt()&&mS(D)},x=D=>{E(L=>[D,...L].slice(0,10))};A.useEffect(()=>{if(y.inbox.length>I.current){const D=y.inbox[y.inbox.length-1];p(D==="MANIFESTATION"?{text:"C0RRUPT3D D4TA R3C3IV3D IN 666BOX",type:"corrupted"}:{text:"NEW MESSAGE RECEIVED IN INBOX",type:"normal"}),setTimeout(()=>p(null),3e3)}I.current=y.inbox.length},[y.inbox]);const O=D=>{try{const L=dh(D);return localStorage.setItem("spaceAnomalySave",L),kt()&&fh("save.json",L),!0}catch(L){return console.error("Save failed",L),!1}};if(A.useEffect(()=>{var D;if(y.newDiscovery){O(y),y.foundFiles.length>2&&C("ACH_FIRST_FILE");const L=Object.keys(Ir.files).length;y.foundFiles.length>=L&&C("ACH_COMPLETIONIST"),((D=y.currentFile)==null?void 0:D.id)==="02-CA-I-J"&&C("ACH_ON_YOUR_WAY")}},[y.newDiscovery,y.foundFiles]),A.useEffect(()=>{const D="WHAT HAPPENED TO THE CREW?";let L=0;const B=setInterval(()=>{L<=D.length?(r(D.substring(0,L)),L++):(clearInterval(B),i(!0))},100),K=()=>{t(!1),a(!0),window.removeEventListener("keydown",K),window.removeEventListener("click",K)};return window.addEventListener("keydown",K),window.addEventListener("click",K),()=>{clearInterval(B),window.removeEventListener("keydown",K),window.removeEventListener("click",K)}},[]),A.useEffect(()=>{if(o){const D=setTimeout(()=>{a(!1),(async()=>{const K=await pS();K&&console.log("Steam User:",K)})(),(async()=>{let K=null;if(kt()&&(K=await gS("save.json")),K||(K=localStorage.getItem("spaceAnomalySave")),K)try{let b=hh(K);if(!b&&K)try{b=JSON.parse(K)}catch(G){console.error("Failed to parse legacy save",G)}b&&(b=mh(b),b.readInboxFiles||(b.readInboxFiles=[]),b.currentPath?b.currentPath.every(W=>Fe[W])||(console.warn("Invalid path detected in save, resetting to root"),b.currentPath=["root"]):b.currentPath=["root"],b.adminUnlocked===void 0&&(b.adminUnlocked=!1),b.manifestationRoles||(b.manifestationRoles={}),b.devilMode===void 0&&(b.devilMode=!1),b.devilMode===void 0&&(b.devilMode=!1),b.devil2Mode===void 0&&(b.devil2Mode=!1),b.fileLabels||(b.fileLabels={}),b.awaitingAdminPassword=!1,b.adminUnlocked&&(b.devilMode=!0),b.manifestationRoles&&Jn.every(W=>b.manifestationRoles[W.id])&&(b.devil2Mode=!0),b.inbox&&(I.current=b.inbox.length),g(b),b.screen==="intro"?t(!0):t(!1))}catch(b){console.error("Failed to load save",b)}})(),a(!1)},2e3);return()=>clearTimeout(D)}},[o]),e)return u.jsx(Qo,{corruptionEffect:!1,children:u.jsxs("div",{className:"flex flex-col items-center justify-center h-full bg-black",children:[u.jsxs("h1",{className:"text-green-500 font-mono text-xl md:text-3xl tracking-widest text-center px-4 mb-4",children:[n,u.jsx("span",{className:"animate-pulse",children:"_"})]}),s&&u.jsx("p",{className:"text-green-700 font-mono text-xs md:text-sm tracking-widest opacity-80",children:"A game by Bushmonkey"})]})});if(o)return u.jsx(Qo,{corruptionEffect:!1,children:u.jsx("div",{className:"flex items-center justify-center h-full text-green-500 font-mono animate-pulse",children:"INITIALIZING SYSTEM..."})});const M=D=>{if(f.current){const{scrollTop:L,clientHeight:B}=f.current,K=50;switch(D){case"ArrowUp":f.current.scrollTop=Math.max(0,L-K);break;case"ArrowDown":f.current.scrollTop=L+K;break;case"PageUp":f.current.scrollTop=Math.max(0,L-B);break;case"PageDown":f.current.scrollTop=L+B;break}}},j=D=>{var B,K;const L=D.toLowerCase().trim();if(y.awaitingAdminPassword)return L==="alpha-demon"?(g(b=>({...b,awaitingAdminPassword:!1,adminUnlocked:!0,inbox:b.inbox.filter(G=>G!=="manifest").concat(["MANIFESTATION"]),devilMode:!0})),v(!0),setTimeout(()=>v(!1),200),p({text:"C0RRUPT3D D4TA R3C3IV3D IN 666BOX",type:"corrupted"}),setTimeout(()=>p(null),3e3),C("ACH_ADMIN_UNLOCK"),!0):(g(b=>({...b,awaitingAdminPassword:!1})),!1);if(L==="help")return g(b=>({...b,history:[...b.history,{screen:b.screen,currentFile:b.currentFile}],screen:"help",newDiscovery:!1})),!0;if(L==="list")return g(b=>({...b,history:[...b.history,{screen:b.screen,currentFile:b.currentFile}],screen:"list",newDiscovery:!1})),!0;if(L==="inbox")return g(b=>({...b,history:[...b.history,{screen:b.screen,currentFile:b.currentFile}],screen:"inbox",newDiscovery:!1})),!0;if(L==="clear save")return localStorage.removeItem("spaceAnomalySave"),kt()&&fh("save.json",""),window.location.reload(),!0;if(L==="note")return g(b=>({...b,history:[...b.history,{screen:b.screen,currentFile:b.currentFile}],screen:"playerNotes",newDiscovery:!1})),!0;if(L.startsWith("note ")){const b=L.substring(5).trim();return b?(g(G=>({...G,playerNotes:[...G.playerNotes,{id:Date.now(),text:b,timestamp:Date.now()}]})),!0):!1}else if(L.startsWith("label ")){const b=L.substring(6).trim().split(" ");if(b.length>=2){const G=b[0],W=b.slice(1).join(" ").substring(0,75);let Q=null;const Y=y.foundFiles.find(X=>X.toLowerCase()===G.toLowerCase());if(Y)Q=Y;else if(y.screen==="dir"){const X=y.currentPath[y.currentPath.length-1],qe=Fe[X];if(qe){const Qe=qe.files.find(we=>we.toLowerCase()===G.toLowerCase());Qe&&(Q=Qe)}}if(Q)return g(X=>({...X,fileLabels:{...X.fileLabels,[Q]:W}})),!0}return!1}else{if(L==="name")return g(b=>({...b,history:[...b.history,{screen:b.screen,currentFile:b.currentFile}],screen:"crew",newDiscovery:!1})),!0;if(L.startsWith("name ")){const b=L.substring(5).trim().split(/\s+/);if(b.length>=4){const G=b[0].toUpperCase(),W=b[1].toLowerCase();b[2].toLowerCase(),b.slice(3).join(" ").toLowerCase();const Q=Jn.find(Y=>Y.id===G);if(Q){const Y=y.inbox.includes("MANIFESTATION"),X=b[1].charAt(0).toUpperCase()+b[1].slice(1),qe=b[2].charAt(0).toUpperCase()+b[2].slice(1),Qe=b.slice(3).map(De=>De.charAt(0).toUpperCase()+De.slice(1)).join(" ");let we=!1;return Q.role&&W===Q.role.toLowerCase()&&(we=!0),g(De=>{const Cn={};if(Y){if(we){const gr={...De.manifestationRoles,[G]:{role:X,firstName:qe,lastName:Qe}};Cn.manifestationRoles=gr,Jn.every(ks=>gr[ks.id])&&(Cn.devil2Mode=!0,C("ACH_MANIFESTATION_COMPLETE"))}}else if(!we){const gr={...De.discoveredCrew,[G]:{title:X,firstName:qe,lastName:Qe}};Cn.discoveredCrew=gr;let As=[...De.inbox],ks=De.newDiscovery;Jn.every(Is=>{const Cs=gr[Is.id];return Cs?Cs.title.toLowerCase()===Is.title.toLowerCase()&&Cs.firstName.toLowerCase()===Is.firstName.toLowerCase()&&Cs.lastName.toLowerCase()===Is.lastName.toLowerCase():!1})&&(As.includes("protocol-lazarus")||(As.push("protocol-lazarus"),ks=!0,C("ACH_PROTOCOL_LAZARUS"))),Cn.inbox=As,Cn.newDiscovery=ks}return{...De,...Cn}}),!0}else if(G==="0"&&y.inbox.includes("MANIFESTATION")){const X=b[1].charAt(0).toUpperCase()+b[1].slice(1),qe=b[2].charAt(0).toUpperCase()+b[2].slice(1),Qe=b.slice(3).map(we=>we.charAt(0).toUpperCase()+we.slice(1)).join(" ");if(W==="necromancer")return g(we=>{const De={...we.manifestationRoles,[G]:{role:X,firstName:qe,lastName:Qe}};return{...we,manifestationRoles:De}}),!0}}return!1}else{if(L==="save")return O(y);if(L.startsWith("save ")){const b=L.substring(5).trim();if(b)try{const G="data:text/plain;charset=utf-8,"+encodeURIComponent(dh(y)),W=document.createElement("a");return W.setAttribute("href",G),W.setAttribute("download",b.endsWith(".json")?b:b+".json"),document.body.appendChild(W),W.click(),W.remove(),!0}catch(G){return console.error("Export failed",G),!1}return!1}else{if(L==="load")return w.current&&w.current.click(),!0;if(L.startsWith("find ")){const b=L.substring(5).trim().split(" ");if(b.length>=1){const G=b[0].toUpperCase();let W=[];if(/^\d{2}$/.test(G))W=y.foundFiles.filter(Q=>Q.startsWith(`${G}-`));else{const Q=new RegExp(`-${G}(?:-|$)`);W=y.foundFiles.filter(Y=>Q.test(Y))}return g(Q=>({...Q,history:[...Q.history,{screen:Q.screen,currentFile:Q.currentFile}],searchResults:W,searchQuery:G,screen:"search"})),!0}return!1}else if(L.startsWith("steam ")){const b=L.split(" "),G=b[1],W=b[2];return G==="overlay"&&W&&yS(W),!0}else{if(L==="dir")return(B=y.readInboxFiles)!=null&&B.includes("protocol-lazarus")?(g(b=>({...b,history:[...b.history,{screen:b.screen,currentFile:b.currentFile}],screen:"dir",currentPath:["root"],newDiscovery:!1})),!0):!1;if(L.startsWith("dir ")){if(!((K=y.readInboxFiles)!=null&&K.includes("protocol-lazarus")))return!1;const b=L.substring(4).trim();if(b==="..")return g(G=>{if(G.currentPath.length>1){const W=[...G.currentPath];return W.pop(),{...G,currentPath:W,screen:"dir"}}return G}),!0;if(b==="/admin")return y.adminUnlocked?!1:(g(G=>({...G,awaitingAdminPassword:!0})),!0);if(b==="/help")return g(G=>({...G,history:[...G.history,{screen:G.screen,currentFile:G.currentFile}],screen:"dir-help",newDiscovery:!1})),!0;{const G=y.currentPath[y.currentPath.length-1],Q=Fe[G].folders.find(Y=>Fe[Y].name.toLowerCase()===b.toLowerCase());return Q?Fe[Q].locked&&!y.adminUnlocked?!1:(g(X=>({...X,currentPath:[...X.currentPath,Q],screen:"dir"})),!0):!1}}else if(L.endsWith(".exe")){const b=y.currentPath[y.currentPath.length-1],G=Fe[b];if(G&&G.files.includes(L)){if(L==="word.exe")return g(W=>({...W,history:[...W.history,{screen:W.screen,currentFile:W.currentFile}],screen:"wordle",newDiscovery:!1})),!0;if(L==="monitor.exe")return g(W=>({...W,history:[...W.history,{screen:W.screen,currentFile:W.currentFile,currentPath:W.currentPath}],screen:"monitor",newDiscovery:!1})),!0;if(L==="asteroids.exe")return g(W=>({...W,history:[...W.history,{screen:W.screen,currentFile:W.currentFile,currentPath:W.currentPath}],screen:"asteroids",newDiscovery:!1})),!0;if(L==="map.exe")return g(W=>({...W,history:[...W.history,{screen:W.screen,currentFile:W.currentFile,currentPath:W.currentPath}],screen:"map",newDiscovery:!1})),!0;if(L==="bifrost.exe")return g(W=>({...W,history:[...W.history,{screen:W.screen,currentFile:W.currentFile,currentPath:W.currentPath}],screen:"bifrost",newDiscovery:!1})),!0}return!1}else{const b=uh(L);if(b){if(b.type==="inbox"&&!y.inbox.includes(b.id))return!1;if(b.id.includes("-BI-")&&!(y.monitorPower&&y.monitorPower.relay>=3))return g(X=>({...X,currentFile:{id:b.id,content:"@ The remote relay is offline. You can only see static interference.",type:"text"},history:[...X.history,{screen:X.screen,currentFile:X.currentFile}],screen:"file",newDiscovery:!1})),!0;if(b.type==="mainframe"){const Y=y.currentPath[y.currentPath.length-1],X=Fe[Y];if(!(X&&X.files.includes(b.id)))return!1}let G=[...y.inbox],W=!1;const Q=Y=>{typeof Y=="string"?G.includes(Y)||(G.push(Y),W=!0):Array.isArray(Y)&&Y.forEach(X=>{G.includes(X)||(G.push(X),W=!0)})};return b.triggers&&Q(b.triggers),b.trigger&&Q(b.trigger),y.foundFiles.includes(b.id)?g(Y=>({...Y,inbox:W?G:Y.inbox,readInboxFiles:b.type==="inbox"&&!Y.readInboxFiles.includes(b.id)?[...Y.readInboxFiles,b.id]:Y.readInboxFiles,currentFile:b,history:[...Y.history,{screen:Y.screen,currentFile:Y.currentFile}],screen:"file",newDiscovery:!1})):g(Y=>({...Y,foundFiles:[...Y.foundFiles,b.id],inbox:W?G:Y.inbox,readInboxFiles:b.type==="inbox"&&!Y.readInboxFiles.includes(b.id)?[...Y.readInboxFiles,b.id]:Y.readInboxFiles,currentFile:b,history:[...Y.history,{screen:Y.screen,currentFile:Y.currentFile}],screen:"file",newDiscovery:!0})),!y.foundFiles.includes(b.id)&&b.type==="inbox"&&g(Y=>({...Y,readInboxFiles:Y.readInboxFiles.includes(b.id)?Y.readInboxFiles:[...Y.readInboxFiles,b.id]})),!0}else{if(/^(0[1-9]|1[0-7])-BI-99$/i.test(L)){const Y=L.substring(0,6).toUpperCase();if(!Object.keys(Ir.files).some(qe=>qe.startsWith(Y))){const Qe=y.monitorPower&&y.monitorPower.relay>=3?`@ Connecting to Bifrost Interstellar Relay... 
@ CONNECTION ESTABLISHED. 
@ Visual feed active. The fissure between Niflheim and Vanaheim swirls with impossible colors, defying the black void around it. A bridge of light stretches into the unknown.`:"@ The remote relay is offline. You can only see static interference.";return g(we=>({...we,currentFile:{id:L.toUpperCase(),content:Qe,type:"text"},history:[...we.history,{screen:we.screen,currentFile:we.currentFile}],screen:"file",newDiscovery:!1})),!0}}const W=/^(0[1-9]|1[0-7])-(BR|ME|CA|KI|GA|EN|SE|RE|CR|RY|DA|JA|DU|KO|RO|MC|VA|HO|GR|MA|SU|HY|SH)-99$/i,Q=L.match(W);if(Q){const Y=L.substring(0,6).toUpperCase(),X=Q[2].toUpperCase();if(!Object.keys(Ir.files).some(Qe=>Qe.startsWith(Y))){const we={SU:"@ Everything is very still on the planet surface, the wind blowing dust around gently through the air.",HY:"@ The hydroponics bay is quiet. The various plants and the trickling of water flowing through the soil feeding the roots create a calm and comforting ambience.",KO:"@ The room is possibly empty, but it's hard to tell as  piles of worn clothes, half-eaten rations, and a sprawling array of engine parts and tools fill every available surface.",SH:"@ A dark tunnel beneath the cargo bay. The narrow passage descends steeply into shadow, its rough walls pressing in from all sides. The air is cold and heavy with the smell of earth and metal."}[X]||"@ The room is empty. Nothing to report.";return g(De=>({...De,currentFile:{id:L.toUpperCase(),content:we,type:"text"},history:[...De.history,{screen:De.screen,currentFile:De.currentFile}],screen:"file",newDiscovery:!1})),!0}}return!1}}}}}}},Z=D=>{if(D.endsWith(".exe")){if(D==="word.exe"){g(B=>({...B,history:[...B.history,{screen:B.screen,currentFile:B.currentFile}],screen:"wordle",newDiscovery:!1})),x("word.exe");return}else if(D==="monitor.exe"){g(B=>({...B,history:[...B.history,{screen:B.screen,currentFile:B.currentFile,currentPath:B.currentPath}],screen:"monitor",newDiscovery:!1})),x("monitor.exe");return}else if(D==="asteroids.exe"){g(B=>({...B,history:[...B.history,{screen:B.screen,currentFile:B.currentFile,currentPath:B.currentPath}],screen:"asteroids",newDiscovery:!1})),x("asteroids.exe");return}else if(D==="map.exe"){g(B=>({...B,history:[...B.history,{screen:B.screen,currentFile:B.currentFile,currentPath:B.currentPath}],screen:"map",newDiscovery:!1})),x("map.exe");return}else if(D==="bifrost.exe"){g(B=>({...B,history:[...B.history,{screen:B.screen,currentFile:B.currentFile,currentPath:B.currentPath}],screen:"bifrost",newDiscovery:!1})),x("bifrost.exe");return}}x(D);const L=uh(D);if(L){const B=!y.foundFiles.includes(L.id);g(K=>({...K,currentFile:L,history:[...K.history,{screen:K.screen,currentFile:K.currentFile}],screen:"file",newDiscovery:B,foundFiles:B?[...K.foundFiles,L.id]:K.foundFiles,readInboxFiles:L.type==="inbox"&&!K.readInboxFiles.includes(L.id)?[...K.readInboxFiles,L.id]:K.readInboxFiles}))}},ne=D=>{const L=D.target.files[0];if(L){const B=new FileReader;B.onload=K=>{try{let b=hh(K.target.result);if(!b&&K.target.result)try{b=JSON.parse(K.target.result)}catch{}b&&b.screen&&b.foundFiles?(b=mh(b),b.readInboxFiles||(b.readInboxFiles=[]),b.currentPath||(b.currentPath=["root"]),b.inbox&&(I.current=b.inbox.length),g(b),w.current&&(w.current.value="")):console.error("Invalid save file format")}catch(b){console.error("Error parsing save file",b)}},B.readAsText(L)}},H=()=>{g(D=>{if(D.history.length>0){const L=[...D.history],B=L.pop();return{...D,screen:B.screen,currentFile:B.currentFile,history:L,newDiscovery:!1}}else return{...D,screen:"help",newDiscovery:!1}})},R=()=>{g(D=>D.inbox.includes("SALVATION")?D:{...D,inbox:[...D.inbox,"SALVATION"],newDiscovery:!0})},U=()=>{C("ACH_ARCADE_PLAYER")},P=D=>{g(L=>({...L,playerNotes:L.playerNotes.filter(B=>B.id!==D)}))},k=(D,L)=>{g(B=>{const K=B.monitorPower||{engines:2,lifeSupport:1,relay:0},b=K[D]+L;return b<0||b>3||Object.keys(K).reduce((W,Q)=>Q!==D?W+K[Q]:W,0)+b>3?B:{...B,monitorPower:{...K,[D]:b}}})},F=()=>{c(!0),C("ACH_THE_END"),setTimeout(()=>{h(!0)},1e3)},_=()=>{h(!1),c(!1),t(!0),r(""),i(!1)};return d?u.jsx(rS,{onComplete:_,manifestationRoles:y.manifestationRoles}):u.jsxs(Qo,{notification:T,shutdown:l,corruptionEffect:m,children:[u.jsx(fS,{screen:y.screen,foundFiles:y.foundFiles,discoveredCrew:y.discoveredCrew,currentFile:y.currentFile,onFileClick:Z,onFolderClick:D=>{Fe[D].locked&&!y.adminUnlocked||g(B=>({...B,history:[...B.history,{screen:B.screen,currentFile:B.currentFile,currentPath:B.currentPath}],currentPath:[...B.currentPath,D],screen:"dir"}))},onFolderUp:()=>{g(D=>{if(D.currentPath.length>1){const L=[...D.currentPath];return L.pop(),{...D,history:[...D.history,{screen:D.screen,currentFile:D.currentFile,currentPath:D.currentPath}],currentPath:L,screen:"dir"}}return D})},onBack:H,scrollRef:f,gameState:y,files:Ir.files,onWordleWin:R,onDeletePlayerNote:P,onTurnOff:F,onPowerUpdate:k,onAsteroidsTop:U}),u.jsx(iS,{onCommand:j,onScroll:M,disabled:y.screen==="asteroids"||y.screen==="wordle",history:S,onAddToHistory:x,awaitingPassword:y.awaitingAdminPassword}),u.jsx("input",{type:"file",ref:w,onChange:ne,accept:".json",style:{display:"none"}})]})}const Ft=e=>{if(!e)return e;const t={1:"S",2:"R",3:"E",4:"Z",5:"J",6:"I",7:"A",8:"L",9:"B",10:"C",11:"D",12:"M"};if(t[e.toString()])return t[e.toString()];const n=/^(\d{2}-[A-Z]{2,})-(.*)$/,r=e.match(n);if(r){const s=r[1],a=r[2].split("-").filter(c=>c).map(c=>{if(t[c])return t[c];const d=parseInt(c,10).toString();return t[d]?t[d]:c});a.sort((c,d)=>c==="0"?-1:d==="0"?1:c.localeCompare(d));const l=[...new Set(a)];return`${s}-${l.join("-")}`}return e==="1009-LOG-JH"?"1009-LOG-CH":e==="1010-LOG-JH"?"1010-LOG-CH":e},mh=e=>{const t={...e};if(t.inbox?(t.inbox.includes("readme")||t.inbox.push("readme"),t.inbox=t.inbox.filter(n=>n!=="00-readme"&&n!=="readme").map(Ft),t.inbox.includes("readme")||t.inbox.unshift("readme"),t.inbox=[...new Set(t.inbox)]):t.inbox=["readme"],t.foundFiles&&(t.foundFiles=t.foundFiles.filter(n=>n!=="00-readme"&&n!=="readme").map(Ft),t.foundFiles=[...new Set(t.foundFiles)]),t.readInboxFiles&&(t.readInboxFiles=t.readInboxFiles.map(Ft),t.readInboxFiles=[...new Set(t.readInboxFiles)]),t.history&&(t.history=t.history.map(n=>({...n,currentFile:n.currentFile?{...n.currentFile,id:Ft(n.currentFile.id)}:null}))),t.currentFile&&(t.currentFile={...t.currentFile,id:Ft(t.currentFile.id)}),t.discoveredCrew){const n={};Object.keys(t.discoveredCrew).forEach(r=>{const s=Ft(r);n[s]=t.discoveredCrew[r],n[s].firstName==="James"&&(n[s].firstName="Carl")}),t.discoveredCrew=n}if(t.manifestationRoles){const n={};Object.keys(t.manifestationRoles).forEach(r=>{const s=Ft(r);n[s]=t.manifestationRoles[r],n[s].firstName==="James"&&(n[s].firstName="Carl")}),t.manifestationRoles=n}if(t.fileLabels){const n={};Object.keys(t.fileLabels).forEach(r=>{const s=Ft(r);n[s]=t.fileLabels[r]}),t.fileLabels=n}return t.monitorPower||(t.monitorPower={engines:2,lifeSupport:1,relay:0}),t};ta.createRoot(document.getElementById("root")).render(u.jsx(ea.StrictMode,{children:u.jsx(vS,{})}));
