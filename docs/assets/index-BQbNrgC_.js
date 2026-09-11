(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tx={exports:{}},$l={},nx={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ka=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),gv=Symbol.for("react.suspense"),vv=Symbol.for("react.memo"),_v=Symbol.for("react.lazy"),Lh=Symbol.iterator;function yv(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var ix={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rx=Object.assign,sx={};function js(t,e,n){this.props=t,this.context=e,this.refs=sx,this.updater=n||ix}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ax(){}ax.prototype=js.prototype;function pf(t,e,n){this.props=t,this.context=e,this.refs=sx,this.updater=n||ix}var mf=pf.prototype=new ax;mf.constructor=pf;rx(mf,js.prototype);mf.isPureReactComponent=!0;var Oh=Array.isArray,ox=Object.prototype.hasOwnProperty,xf={current:null},lx={key:!0,ref:!0,__self:!0,__source:!0};function cx(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ox.call(e,i)&&!lx.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ka,type:t,key:s,ref:a,props:r,_owner:xf.current}}function Sv(t,e){return{$$typeof:Ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ka}function Ev(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function _c(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ev(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ka:case uv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+_c(a,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),qo(r,e,n,"",function(u){return u})):r!=null&&(gf(r)&&(r=Sv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Oh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+_c(s,o);a+=qo(s,e,n,c,r)}else if(c=yv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+_c(s,o++),a+=qo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},$o={transition:null},Mv={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:$o,ReactCurrentOwner:xf};function ux(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ao,forEach:function(t,e,n){ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ao(t,function(){e++}),e},toArray:function(t){return ao(t,function(e){return e})||[]},only:function(t){if(!gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=js;Ye.Fragment=dv;Ye.Profiler=hv;Ye.PureComponent=pf;Ye.StrictMode=fv;Ye.Suspense=gv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Ye.act=ux;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rx({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)ox.call(e,c)&&!lx.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ka,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};Ye.createElement=cx;Ye.createFactory=function(t){var e=cx.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:xv,render:t}};Ye.isValidElement=gf;Ye.lazy=function(t){return{$$typeof:_v,_payload:{_status:-1,_result:t},_init:bv}};Ye.memo=function(t,e){return{$$typeof:vv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};Ye.unstable_act=ux;Ye.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ye.useContext=function(t){return sn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ye.useId=function(){return sn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ye.useRef=function(t){return sn.current.useRef(t)};Ye.useState=function(t){return sn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return sn.current.useTransition()};Ye.version="18.3.1";nx.exports=Ye;var ie=nx.exports;const dx=cv(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=ie,Tv=Symbol.for("react.element"),Av=Symbol.for("react.fragment"),Cv=Object.prototype.hasOwnProperty,Rv=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nv={key:!0,ref:!0,__self:!0,__source:!0};function fx(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Cv.call(e,i)&&!Nv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Tv,type:t,key:s,ref:a,props:r,_owner:Rv.current}}$l.Fragment=Av;$l.jsx=fx;$l.jsxs=fx;tx.exports=$l;var l=tx.exports,Cu={},hx={exports:{}},wn={},px={exports:{}},mx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var Z=D.length;D.push(j);e:for(;0<Z;){var te=Z-1>>>1,se=D[te];if(0<r(se,j))D[te]=j,D[Z]=se,Z=te;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],Z=D.pop();if(Z!==j){D[0]=Z;e:for(var te=0,se=D.length,Ae=se>>>1;te<Ae;){var Xe=2*(te+1)-1,Fe=D[Xe],K=Xe+1,ae=D[K];if(0>r(Fe,Z))K<se&&0>r(ae,Fe)?(D[te]=ae,D[K]=Z,te=K):(D[te]=Fe,D[Xe]=Z,te=Xe);else if(K<se&&0>r(ae,Z))D[te]=ae,D[K]=Z,te=K;else break e}}return j}function r(D,j){var Z=D.sortIndex-j.sortIndex;return Z!==0?Z:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,d=3,m=!1,x=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(D){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=D)i(u),j.sortIndex=j.expirationTime,e(c,j);else break;j=n(u)}}function S(D){if(E=!1,b(D),!x)if(n(c)!==null)x=!0,k(w);else{var j=n(u);j!==null&&z(S,j.startTime-D)}}function w(D,j){x=!1,E&&(E=!1,f(v),v=-1),m=!0;var Z=d;try{for(b(j),p=n(c);p!==null&&(!(p.expirationTime>j)||D&&!I());){var te=p.callback;if(typeof te=="function"){p.callback=null,d=p.priorityLevel;var se=te(p.expirationTime<=j);j=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(c)&&i(c),b(j)}else i(c);p=n(c)}if(p!==null)var Ae=!0;else{var Xe=n(u);Xe!==null&&z(S,Xe.startTime-j),Ae=!1}return Ae}finally{p=null,d=Z,m=!1}}var T=!1,A=null,v=-1,C=5,N=-1;function I(){return!(t.unstable_now()-N<C)}function P(){if(A!==null){var D=t.unstable_now();N=D;var j=!0;try{j=A(!0,D)}finally{j?W():(T=!1,A=null)}}else T=!1}var W;if(typeof _=="function")W=function(){_(P)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,F=Q.port2;Q.port1.onmessage=P,W=function(){F.postMessage(null)}}else W=function(){g(P,0)};function k(D){A=D,T||(T=!0,W())}function z(D,j){v=g(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,k(w))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var Z=d;d=j;try{return D()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=d;d=D;try{return j()}finally{d=Z}},t.unstable_scheduleCallback=function(D,j,Z){var te=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?te+Z:te):Z=te,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,D={id:h++,callback:j,priorityLevel:D,startTime:Z,expirationTime:se,sortIndex:-1},Z>te?(D.sortIndex=Z,e(u,D),n(c)===null&&D===n(u)&&(E?(f(v),v=-1):E=!0,z(S,Z-te))):(D.sortIndex=se,e(c,D),x||m||(x=!0,k(w))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var j=d;return function(){var Z=d;d=j;try{return D.apply(this,arguments)}finally{d=Z}}}})(mx);px.exports=mx;var Pv=px.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=ie,Mn=Pv;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xx=new Set,Ca={};function Wr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Ca[t]=e,t=0;t<e.length;t++)xx.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,Dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},kh={};function Lv(t){return Ru.call(kh,t)?!0:Ru.call(Fh,t)?!1:Dv.test(t)?kh[t]=!0:(Fh[t]=!0,!1)}function Ov(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,n,i){if(e===null||typeof e>"u"||Ov(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var vf=/[\-:]([a-z])/g;function _f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vf,_f);jt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vf,_f);jt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vf,_f);jt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function yf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,n,r,i)&&(n=null),i||r===null?Lv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Sf=Symbol.for("react.strict_mode"),Nu=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),bf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),_x=Symbol.for("react.offscreen"),Bh=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Bh&&t[Bh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,yc;function ha(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Ec(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function Fv(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Nu:return"Profiler";case Sf:return"StrictMode";case Pu:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vx:return(t.displayName||"Context")+".Consumer";case gx:return(t._context.displayName||"Context")+".Provider";case Ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bf:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Du(t(e))}catch{}}return null}function kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(e);case 8:return e===Sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bv(t){var e=yx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lo(t){t._valueTracker||(t._valueTracker=Bv(t))}function Sx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=yx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ex(t,e){e=e.checked,e!=null&&yf(t,"checked",e,!1)}function Ou(t,e){Ex(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uu(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uu(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var pa=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(pa(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function bx(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var co,wx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zv=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){zv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function Tx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function Ax(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Tx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Gv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Mf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hu=null,ws=null,Ts=null;function jh(t){if(t=Za(t)){if(typeof Hu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=tc(e),Hu(t.stateNode,t.type,e))}}function Cx(t){ws?Ts?Ts.push(t):Ts=[t]:ws=t}function Rx(){if(ws){var t=ws,e=Ts;if(Ts=ws=null,jh(t),e)for(t=0;t<e.length;t++)jh(e[t])}}function Nx(t,e){return t(e)}function Px(){}var bc=!1;function Ix(t,e,n){if(bc)return t(e,n);bc=!0;try{return Nx(t,e,n)}finally{bc=!1,(ws!==null||Ts!==null)&&(Px(),Rx())}}function Na(t,e){var n=t.stateNode;if(n===null)return null;var i=tc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Vu=!1;if(Pi)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Vu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Vu=!1}function Hv(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ya=!1,pl=null,ml=!1,ju=null,Vv={onError:function(t){ya=!0,pl=t}};function jv(t,e,n,i,r,s,a,o,c){ya=!1,pl=null,Hv.apply(Vv,arguments)}function Wv(t,e,n,i,r,s,a,o,c){if(jv.apply(this,arguments),ya){if(ya){var u=pl;ya=!1,pl=null}else throw Error(oe(198));ml||(ml=!0,ju=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Xr(t)!==t)throw Error(oe(188))}function Xv(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Lx(t){return t=Xv(t),t!==null?Ox(t):null}function Ox(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ox(t);if(e!==null)return e;t=t.sibling}return null}var Ux=Mn.unstable_scheduleCallback,Xh=Mn.unstable_cancelCallback,Yv=Mn.unstable_shouldYield,Kv=Mn.unstable_requestPaint,Tt=Mn.unstable_now,qv=Mn.unstable_getCurrentPriorityLevel,wf=Mn.unstable_ImmediatePriority,Fx=Mn.unstable_UserBlockingPriority,xl=Mn.unstable_NormalPriority,$v=Mn.unstable_LowPriority,kx=Mn.unstable_IdlePriority,Zl=null,di=null;function Zv(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:e_,Qv=Math.log,Jv=Math.LN2;function e_(t){return t>>>=0,t===0?32:31-(Qv(t)/Jv|0)|0}var uo=64,fo=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ma(o):(s&=a,s!==0&&(i=ma(s)))}else a=n&~r,a!==0?i=ma(a):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function t_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=t_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bx(){var t=uo;return uo<<=1,!(uo&4194240)&&(uo=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function i_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function zx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gx,Af,Hx,Vx,jx,Xu=!1,ho=[],rr=null,sr=null,ar=null,Pa=new Map,Ia=new Map,Qi=[],r_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ia.delete(e.pointerId)}}function Zs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&Af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function s_(t,e,n,i,r){switch(e){case"focusin":return rr=Zs(rr,t,e,n,i,r),!0;case"dragenter":return sr=Zs(sr,t,e,n,i,r),!0;case"mouseover":return ar=Zs(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Pa.set(s,Zs(Pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ia.set(s,Zs(Ia.get(s)||null,t,e,n,i,r)),!0}return!1}function Wx(t){var e=Rr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dx(n),e!==null){t.blockedOn=e,jx(t.priority,function(){Hx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=Za(n),e!==null&&Af(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){Zo(t)&&n.delete(e)}function a_(){Xu=!1,rr!==null&&Zo(rr)&&(rr=null),sr!==null&&Zo(sr)&&(sr=null),ar!==null&&Zo(ar)&&(ar=null),Pa.forEach(Kh),Ia.forEach(Kh)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xu||(Xu=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,a_)))}function Da(t){function e(r){return Qs(r,t)}if(0<ho.length){Qs(ho[0],t);for(var n=1;n<ho.length;n++){var i=ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&Qs(rr,t),sr!==null&&Qs(sr,t),ar!==null&&Qs(ar,t),Pa.forEach(e),Ia.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)Wx(n),n.blockedOn===null&&Qi.shift()}var As=Fi.ReactCurrentBatchConfig,vl=!0;function o_(t,e,n,i){var r=st,s=As.transition;As.transition=null;try{st=1,Cf(t,e,n,i)}finally{st=r,As.transition=s}}function l_(t,e,n,i){var r=st,s=As.transition;As.transition=null;try{st=4,Cf(t,e,n,i)}finally{st=r,As.transition=s}}function Cf(t,e,n,i){if(vl){var r=Yu(t,e,n,i);if(r===null)Lc(t,e,i,_l,n),Yh(t,i);else if(s_(r,t,e,n,i))i.stopPropagation();else if(Yh(t,i),e&4&&-1<r_.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&Gx(s),s=Yu(t,e,n,i),s===null&&Lc(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var _l=null;function Yu(t,e,n,i){if(_l=null,t=Mf(i),t=Rr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function Xx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case wf:return 1;case Fx:return 4;case xl:case $v:return 16;case kx:return 536870912;default:return 16}default:return 16}}var tr=null,Rf=null,Qo=null;function Yx(){if(Qo)return Qo;var t,e=Rf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Qo=r.slice(t,1<i?1-i:void 0)}function Jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function qh(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?po:qh,this.isPropagationStopped=qh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=Tn(Ws),$a=vt({},Ws,{view:0,detail:0}),c_=Tn($a),wc,Tc,Js,Ql=vt({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(wc=t.screenX-Js.screenX,Tc=t.screenY-Js.screenY):Tc=wc=0,Js=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),$h=Tn(Ql),u_=vt({},Ql,{dataTransfer:0}),d_=Tn(u_),f_=vt({},$a,{relatedTarget:0}),Ac=Tn(f_),h_=vt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=Tn(h_),m_=vt({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x_=Tn(m_),g_=vt({},Ws,{data:0}),Zh=Tn(g_),v_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},__={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y_[t])?!!e[t]:!1}function Pf(){return S_}var E_=vt({},$a,{key:function(t){if(t.key){var e=v_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?__[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b_=Tn(E_),M_=vt({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Tn(M_),w_=vt({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),T_=Tn(w_),A_=vt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),C_=Tn(A_),R_=vt({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N_=Tn(R_),P_=[9,13,27,32],If=Pi&&"CompositionEvent"in window,Sa=null;Pi&&"documentMode"in document&&(Sa=document.documentMode);var I_=Pi&&"TextEvent"in window&&!Sa,Kx=Pi&&(!If||Sa&&8<Sa&&11>=Sa),Jh=" ",ep=!1;function qx(t,e){switch(t){case"keyup":return P_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $x(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function D_(t,e){switch(t){case"compositionend":return $x(e);case"keypress":return e.which!==32?null:(ep=!0,Jh);case"textInput":return t=e.data,t===Jh&&ep?null:t;default:return null}}function L_(t,e){if(ps)return t==="compositionend"||!If&&qx(t,e)?(t=Yx(),Qo=Rf=tr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kx&&e.locale!=="ko"?null:e.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!O_[t.type]:e==="textarea"}function Zx(t,e,n,i){Cx(i),e=yl(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,La=null;function U_(t){lg(t,0)}function Jl(t){var e=gs(t);if(Sx(e))return t}function F_(t,e){if(t==="change")return e}var Qx=!1;if(Pi){var Cc;if(Pi){var Rc="oninput"in document;if(!Rc){var np=document.createElement("div");np.setAttribute("oninput","return;"),Rc=typeof np.oninput=="function"}Cc=Rc}else Cc=!1;Qx=Cc&&(!document.documentMode||9<document.documentMode)}function ip(){Ea&&(Ea.detachEvent("onpropertychange",Jx),La=Ea=null)}function Jx(t){if(t.propertyName==="value"&&Jl(La)){var e=[];Zx(e,La,t,Mf(t)),Ix(U_,e)}}function k_(t,e,n){t==="focusin"?(ip(),Ea=e,La=n,Ea.attachEvent("onpropertychange",Jx)):t==="focusout"&&ip()}function B_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(La)}function z_(t,e){if(t==="click")return Jl(e)}function G_(t,e){if(t==="input"||t==="change")return Jl(e)}function H_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:H_;function Oa(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function eg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tg(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function V_(t){var e=tg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eg(n.ownerDocument.documentElement,n)){if(i!==null&&Df(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var a=sp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j_=Pi&&"documentMode"in document&&11>=document.documentMode,ms=null,Ku=null,ba=null,qu=!1;function ap(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||ms==null||ms!==hl(i)||(i=ms,"selectionStart"in i&&Df(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Oa(ba,i)||(ba=i,i=yl(Ku,"onSelect"),0<i.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},Nc={},ng={};Pi&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function ec(t){if(Nc[t])return Nc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ng)return Nc[t]=e[n];return t}var ig=ec("animationend"),rg=ec("animationiteration"),sg=ec("animationstart"),ag=ec("transitionend"),og=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){og.set(t,e),Wr(e,[t])}for(var Pc=0;Pc<op.length;Pc++){var Ic=op[Pc],W_=Ic.toLowerCase(),X_=Ic[0].toUpperCase()+Ic.slice(1);mr(W_,"on"+X_)}mr(ig,"onAnimationEnd");mr(rg,"onAnimationIteration");mr(sg,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(ag,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Wv(i,e,void 0,t),t.currentTarget=null}function lg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;lp(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;lp(r,o,u),s=c}}}if(ml)throw t=ju,ml=!1,ju=null,t}function ht(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var i=t+"__bubble";n.has(i)||(cg(e,t,2,!1),n.add(i))}function Dc(t,e,n){var i=0;e&&(i|=4),cg(n,t,i,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[xo]){t[xo]=!0,xx.forEach(function(n){n!=="selectionchange"&&(Y_.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,Dc("selectionchange",!1,e))}}function cg(t,e,n,i){switch(Xx(e)){case 1:var r=o_;break;case 4:r=l_;break;default:r=Cf}n=r.bind(null,e,n,t),r=void 0,!Vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Rr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ix(function(){var u=s,h=Mf(n),p=[];e:{var d=og.get(t);if(d!==void 0){var m=Nf,x=t;switch(t){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":m=b_;break;case"focusin":x="focus",m=Ac;break;case"focusout":x="blur",m=Ac;break;case"beforeblur":case"afterblur":m=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=d_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=T_;break;case ig:case rg:case sg:m=p_;break;case ag:m=C_;break;case"scroll":m=c_;break;case"wheel":m=N_;break;case"copy":case"cut":case"paste":m=x_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Qh}var E=(e&4)!==0,g=!E&&t==="scroll",f=E?d!==null?d+"Capture":null:d;E=[];for(var _=u,b;_!==null;){b=_;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,f!==null&&(S=Na(_,f),S!=null&&E.push(Fa(_,S,b)))),g)break;_=_.return}0<E.length&&(d=new m(d,x,null,n,h),p.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Gu&&(x=n.relatedTarget||n.fromElement)&&(Rr(x)||x[Ii]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Rr(x):null,x!==null&&(g=Xr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(E=$h,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(E=Qh,S="onPointerLeave",f="onPointerEnter",_="pointer"),g=m==null?d:gs(m),b=x==null?d:gs(x),d=new E(S,_+"leave",m,n,h),d.target=g,d.relatedTarget=b,S=null,Rr(h)===u&&(E=new E(f,_+"enter",x,n,h),E.target=b,E.relatedTarget=g,S=E),g=S,m&&x)t:{for(E=m,f=x,_=0,b=E;b;b=$r(b))_++;for(b=0,S=f;S;S=$r(S))b++;for(;0<_-b;)E=$r(E),_--;for(;0<b-_;)f=$r(f),b--;for(;_--;){if(E===f||f!==null&&E===f.alternate)break t;E=$r(E),f=$r(f)}E=null}else E=null;m!==null&&cp(p,d,m,E,!1),x!==null&&g!==null&&cp(p,g,x,E,!0)}}e:{if(d=u?gs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=F_;else if(tp(d))if(Qx)w=G_;else{w=B_;var T=k_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=z_);if(w&&(w=w(t,u))){Zx(p,w,n,h);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Uu(d,"number",d.value)}switch(T=u?gs(u):window,t){case"focusin":(tp(T)||T.contentEditable==="true")&&(ms=T,Ku=u,ba=null);break;case"focusout":ba=Ku=ms=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,ap(p,n,h);break;case"selectionchange":if(j_)break;case"keydown":case"keyup":ap(p,n,h)}var A;if(If)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ps?qx(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Kx&&n.locale!=="ko"&&(ps||v!=="onCompositionStart"?v==="onCompositionEnd"&&ps&&(A=Yx()):(tr=h,Rf="value"in tr?tr.value:tr.textContent,ps=!0)),T=yl(u,v),0<T.length&&(v=new Zh(v,t,null,n,h),p.push({event:v,listeners:T}),A?v.data=A:(A=$x(n),A!==null&&(v.data=A)))),(A=I_?D_(t,n):L_(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(h=new Zh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=A))}lg(p,e)})}function Fa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Na(t,n),s!=null&&i.unshift(Fa(t,s,r)),s=Na(t,e),s!=null&&i.push(Fa(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Na(n,s),c!=null&&a.unshift(Fa(n,c,o))):r||(c=Na(n,s),c!=null&&a.push(Fa(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var K_=/\r\n?/g,q_=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(K_,`
`).replace(q_,"")}function go(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(oe(425))}function Sl(){}var $u=null,Zu=null;function Qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,Z_=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(t){return dp.resolve(null).then(t).catch(Q_)}:Ju;function Q_(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Da(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),oi="__reactFiber$"+Xs,ka="__reactProps$"+Xs,Ii="__reactContainer$"+Xs,ed="__reactEvents$"+Xs,J_="__reactListeners$"+Xs,ey="__reactHandles$"+Xs;function Rr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[oi])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[oi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function tc(t){return t[ka]||null}var td=[],vs=-1;function xr(t){return{current:t}}function pt(t){0>vs||(t.current=td[vs],td[vs]=null,vs--)}function ft(t,e){vs++,td[vs]=t.current,t.current=e}var hr={},Jt=xr(hr),dn=xr(!1),Ur=hr;function Ls(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function El(){pt(dn),pt(Jt)}function hp(t,e,n){if(Jt.current!==hr)throw Error(oe(168));ft(Jt,e),ft(dn,n)}function ug(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,kv(t)||"Unknown",r));return vt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Ur=Jt.current,ft(Jt,t),ft(dn,dn.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=ug(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,pt(dn),pt(Jt),ft(Jt,t)):pt(dn),ft(dn,n)}var Mi=null,nc=!1,Uc=!1;function dg(t){Mi===null?Mi=[t]:Mi.push(t)}function ty(t){nc=!0,dg(t)}function gr(){if(!Uc&&Mi!==null){Uc=!0;var t=0,e=st;try{var n=Mi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,nc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Ux(wf,gr),r}finally{st=e,Uc=!1}}return null}var _s=[],ys=0,Ml=null,wl=0,Nn=[],Pn=0,Fr=null,wi=1,Ti="";function br(t,e){_s[ys++]=wl,_s[ys++]=Ml,Ml=t,wl=e}function fg(t,e,n){Nn[Pn++]=wi,Nn[Pn++]=Ti,Nn[Pn++]=Fr,Fr=t;var i=wi;t=Ti;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,wi=1<<32-Kn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Lf(t){t.return!==null&&(br(t,1),fg(t,1,0))}function Of(t){for(;t===Ml;)Ml=_s[--ys],_s[ys]=null,wl=_s[--ys],_s[ys]=null;for(;t===Fr;)Fr=Nn[--Pn],Nn[Pn]=null,Ti=Nn[--Pn],Nn[Pn]=null,wi=Nn[--Pn],Nn[Pn]=null}var bn=null,En=null,mt=!1,Wn=null;function hg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,En=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,En=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(mt){var e=En;if(e){var n=e;if(!mp(t,e)){if(nd(t))throw Error(oe(418));e=or(n.nextSibling);var i=bn;e&&mp(t,e)?hg(i,n):(t.flags=t.flags&-4097|2,mt=!1,bn=t)}}else{if(nd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,mt=!1,bn=t}}}function xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function vo(t){if(t!==bn)return!1;if(!mt)return xp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qu(t.type,t.memoizedProps)),e&&(e=En)){if(nd(t))throw pg(),Error(oe(418));for(;e;)hg(t,e),e=or(e.nextSibling)}if(xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=bn?or(t.stateNode.nextSibling):null;return!0}function pg(){for(var t=En;t;)t=or(t.nextSibling)}function Os(){En=bn=null,mt=!1}function Uf(t){Wn===null?Wn=[t]:Wn.push(t)}var ny=Fi.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function _o(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function mg(t){function e(f,_){if(t){var b=f.deletions;b===null?(f.deletions=[_],f.flags|=16):b.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=dr(f,_),f.index=0,f.sibling=null,f}function s(f,_,b){return f.index=b,t?(b=f.alternate,b!==null?(b=b.index,b<_?(f.flags|=2,_):b):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,_,b,S){return _===null||_.tag!==6?(_=Vc(b,f.mode,S),_.return=f,_):(_=r(_,b),_.return=f,_)}function c(f,_,b,S){var w=b.type;return w===hs?h(f,_,b.props.children,S,b.key):_!==null&&(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===$i&&gp(w)===_.type)?(S=r(_,b.props),S.ref=ea(f,_,b),S.return=f,S):(S=al(b.type,b.key,b.props,null,f.mode,S),S.ref=ea(f,_,b),S.return=f,S)}function u(f,_,b,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==b.containerInfo||_.stateNode.implementation!==b.implementation?(_=jc(b,f.mode,S),_.return=f,_):(_=r(_,b.children||[]),_.return=f,_)}function h(f,_,b,S,w){return _===null||_.tag!==7?(_=Or(b,f.mode,S,w),_.return=f,_):(_=r(_,b),_.return=f,_)}function p(f,_,b){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Vc(""+_,f.mode,b),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:return b=al(_.type,_.key,_.props,null,f.mode,b),b.ref=ea(f,null,_),b.return=f,b;case fs:return _=jc(_,f.mode,b),_.return=f,_;case $i:var S=_._init;return p(f,S(_._payload),b)}if(pa(_)||qs(_))return _=Or(_,f.mode,b,null),_.return=f,_;_o(f,_)}return null}function d(f,_,b,S){var w=_!==null?_.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return w!==null?null:o(f,_,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:return b.key===w?c(f,_,b,S):null;case fs:return b.key===w?u(f,_,b,S):null;case $i:return w=b._init,d(f,_,w(b._payload),S)}if(pa(b)||qs(b))return w!==null?null:h(f,_,b,S,null);_o(f,b)}return null}function m(f,_,b,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(b)||null,o(_,f,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case oo:return f=f.get(S.key===null?b:S.key)||null,c(_,f,S,w);case fs:return f=f.get(S.key===null?b:S.key)||null,u(_,f,S,w);case $i:var T=S._init;return m(f,_,b,T(S._payload),w)}if(pa(S)||qs(S))return f=f.get(b)||null,h(_,f,S,w,null);_o(_,S)}return null}function x(f,_,b,S){for(var w=null,T=null,A=_,v=_=0,C=null;A!==null&&v<b.length;v++){A.index>v?(C=A,A=null):C=A.sibling;var N=d(f,A,b[v],S);if(N===null){A===null&&(A=C);break}t&&A&&N.alternate===null&&e(f,A),_=s(N,_,v),T===null?w=N:T.sibling=N,T=N,A=C}if(v===b.length)return n(f,A),mt&&br(f,v),w;if(A===null){for(;v<b.length;v++)A=p(f,b[v],S),A!==null&&(_=s(A,_,v),T===null?w=A:T.sibling=A,T=A);return mt&&br(f,v),w}for(A=i(f,A);v<b.length;v++)C=m(A,f,v,b[v],S),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?v:C.key),_=s(C,_,v),T===null?w=C:T.sibling=C,T=C);return t&&A.forEach(function(I){return e(f,I)}),mt&&br(f,v),w}function E(f,_,b,S){var w=qs(b);if(typeof w!="function")throw Error(oe(150));if(b=w.call(b),b==null)throw Error(oe(151));for(var T=w=null,A=_,v=_=0,C=null,N=b.next();A!==null&&!N.done;v++,N=b.next()){A.index>v?(C=A,A=null):C=A.sibling;var I=d(f,A,N.value,S);if(I===null){A===null&&(A=C);break}t&&A&&I.alternate===null&&e(f,A),_=s(I,_,v),T===null?w=I:T.sibling=I,T=I,A=C}if(N.done)return n(f,A),mt&&br(f,v),w;if(A===null){for(;!N.done;v++,N=b.next())N=p(f,N.value,S),N!==null&&(_=s(N,_,v),T===null?w=N:T.sibling=N,T=N);return mt&&br(f,v),w}for(A=i(f,A);!N.done;v++,N=b.next())N=m(A,f,v,N.value,S),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?v:N.key),_=s(N,_,v),T===null?w=N:T.sibling=N,T=N);return t&&A.forEach(function(P){return e(f,P)}),mt&&br(f,v),w}function g(f,_,b,S){if(typeof b=="object"&&b!==null&&b.type===hs&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case oo:e:{for(var w=b.key,T=_;T!==null;){if(T.key===w){if(w=b.type,w===hs){if(T.tag===7){n(f,T.sibling),_=r(T,b.props.children),_.return=f,f=_;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===$i&&gp(w)===T.type){n(f,T.sibling),_=r(T,b.props),_.ref=ea(f,T,b),_.return=f,f=_;break e}n(f,T);break}else e(f,T);T=T.sibling}b.type===hs?(_=Or(b.props.children,f.mode,S,b.key),_.return=f,f=_):(S=al(b.type,b.key,b.props,null,f.mode,S),S.ref=ea(f,_,b),S.return=f,f=S)}return a(f);case fs:e:{for(T=b.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===b.containerInfo&&_.stateNode.implementation===b.implementation){n(f,_.sibling),_=r(_,b.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=jc(b,f.mode,S),_.return=f,f=_}return a(f);case $i:return T=b._init,g(f,_,T(b._payload),S)}if(pa(b))return x(f,_,b,S);if(qs(b))return E(f,_,b,S);_o(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,b),_.return=f,f=_):(n(f,_),_=Vc(b,f.mode,S),_.return=f,f=_),a(f)):n(f,_)}return g}var Us=mg(!0),xg=mg(!1),Tl=xr(null),Al=null,Ss=null,Ff=null;function kf(){Ff=Ss=Al=null}function Bf(t){var e=Tl.current;pt(Tl),t._currentValue=e}function rd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Al=t,Ff=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Al===null)throw Error(oe(308));Ss=t,Al.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Nr=null;function zf(t){Nr===null?Nr=[t]:Nr.push(t)}function gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,zf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function Gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,zf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Tf(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,E=o;switch(d=e,m=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){p=x.call(m,p,d);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,d=typeof x=="function"?x.call(m,p,d):x,d==null)break e;p=vt({},p,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=a,t.lanes=a,t.memoizedState=p}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Qa={},fi=xr(Qa),Ba=xr(Qa),za=xr(Qa);function Pr(t){if(t===Qa)throw Error(oe(174));return t}function Hf(t,e){switch(ft(za,e),ft(Ba,t),ft(fi,Qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ku(e,t)}pt(fi),ft(fi,e)}function Fs(){pt(fi),pt(Ba),pt(za)}function _g(t){Pr(za.current);var e=Pr(fi.current),n=ku(e,t.type);e!==n&&(ft(Ba,t),ft(fi,n))}function Vf(t){Ba.current===t&&(pt(fi),pt(Ba))}var xt=xr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function jf(){for(var t=0;t<Fc.length;t++)Fc[t]._workInProgressVersionPrimary=null;Fc.length=0}var tl=Fi.ReactCurrentDispatcher,kc=Fi.ReactCurrentBatchConfig,kr=0,gt=null,It=null,kt=null,Nl=!1,Ma=!1,Ga=0,iy=0;function Xt(){throw Error(oe(321))}function Wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Xf(t,e,n,i,r,s){if(kr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?oy:ly,t=n(i,r),Ma){s=0;do{if(Ma=!1,Ga=0,25<=s)throw Error(oe(301));s+=1,kt=It=null,e.updateQueue=null,tl.current=cy,t=n(i,r)}while(Ma)}if(tl.current=Pl,e=It!==null&&It.next!==null,kr=0,kt=It=gt=null,Nl=!1,e)throw Error(oe(300));return t}function Yf(){var t=Ga!==0;return Ga=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?gt.memoizedState=kt=t:kt=kt.next=t,kt}function Fn(){if(It===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=kt===null?gt.memoizedState:kt.next;if(e!==null)kt=e,It=t;else{if(t===null)throw Error(oe(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},kt===null?gt.memoizedState=kt=t:kt=kt.next=t}return kt}function Ha(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((kr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,gt.lanes|=h,Br|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,$n(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);$n(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function yg(){}function Sg(t,e){var n=gt,i=Fn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Kf(Mg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Va(9,bg.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(oe(349));kr&30||Eg(n,e,r)}return r}function Eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bg(t,e,n,i){e.value=n,e.getSnapshot=i,wg(e)&&Tg(t)}function Mg(t,e,n){return n(function(){wg(e)&&Tg(t)})}function wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Tg(t){var e=Di(t,1);e!==null&&qn(e,t,1,-1)}function yp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e.queue=t,t=t.dispatch=ay.bind(null,gt,t),[e.memoizedState,t]}function Va(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ag(){return Fn().memoizedState}function nl(t,e,n,i){var r=si();gt.flags|=t,r.memoizedState=Va(1|e,n,void 0,i===void 0?null:i)}function ic(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&Wf(i,a.deps)){r.memoizedState=Va(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Va(1|e,n,s,i)}function Sp(t,e){return nl(8390656,8,t,e)}function Kf(t,e){return ic(2048,8,t,e)}function Cg(t,e){return ic(4,2,t,e)}function Rg(t,e){return ic(4,4,t,e)}function Ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pg(t,e,n){return n=n!=null?n.concat([t]):null,ic(4,4,Ng.bind(null,e,t),n)}function qf(){}function Ig(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return kr&21?($n(n,e)||(n=Bx(),gt.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function ry(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{st=n,kc.transition=i}}function Og(){return Fn().memoizedState}function sy(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ug(t))Fg(e,n);else if(n=gg(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),kg(n,e,i)}}function ay(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ug(t))Fg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,$n(o,a)){var c=e.interleaved;c===null?(r.next=r,zf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=gg(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),kg(n,e,i))}}function Ug(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function Fg(t,e){Ma=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Tf(t,n)}}var Pl={readContext:Un,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},oy={readContext:Un,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,Ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=sy.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:qf,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=ry.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=si();if(mt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Bt===null)throw Error(oe(349));kr&30||Eg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sp(Mg.bind(null,i,s,t),[t]),i.flags|=2048,Va(9,bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Bt.identifierPrefix;if(mt){var n=Ti,i=wi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ly={readContext:Un,useCallback:Ig,useContext:Un,useEffect:Kf,useImperativeHandle:Pg,useInsertionEffect:Cg,useLayoutEffect:Rg,useMemo:Dg,useReducer:Bc,useRef:Ag,useState:function(){return Bc(Ha)},useDebugValue:qf,useDeferredValue:function(t){var e=Fn();return Lg(e,It.memoizedState,t)},useTransition:function(){var t=Bc(Ha)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:yg,useSyncExternalStore:Sg,useId:Og,unstable_isNewReconciler:!1},cy={readContext:Un,useCallback:Ig,useContext:Un,useEffect:Kf,useImperativeHandle:Pg,useInsertionEffect:Cg,useLayoutEffect:Rg,useMemo:Dg,useReducer:zc,useRef:Ag,useState:function(){return zc(Ha)},useDebugValue:qf,useDeferredValue:function(t){var e=Fn();return It===null?e.memoizedState=t:Lg(e,It.memoizedState,t)},useTransition:function(){var t=zc(Ha)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:yg,useSyncExternalStore:Sg,useId:Og,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ur(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(qn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=ur(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(qn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=ur(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(qn(e,t,i,n),el(e,t,i))}};function Ep(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,i)||!Oa(r,s):!0}function Bg(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Ur:Jt.current,i=e.contextTypes,s=(i=i!=null)?Ls(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Ur:Jt.current,r.context=Ls(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rc.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ks(t,e){try{var n="",i=e;do n+=Fv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uy=typeof WeakMap=="function"?WeakMap:Map;function zg(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,gd=i),od(t,e)},n}function Gg(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new uy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=My.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var dy=Fi.ReactCurrentOwner,un=!1;function tn(t,e,n,i){e.child=t===null?xg(e,null,n,i):Us(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var s=e.ref;return Cs(e,r),i=Xf(t,e,n,i,s,r),n=Yf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(mt&&n&&Lf(e),e.flags|=1,tn(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ih(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hg(t,e,s,i,r)):(t=al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Hg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Li(t,e,r)}return ld(t,e,n,i,r)}function Vg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(bs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(bs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(bs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(bs,Sn),Sn|=i;return tn(t,e,r,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,i,r){var s=fn(n)?Ur:Jt.current;return s=Ls(e,s),Cs(e,r),n=Xf(t,e,n,i,s,r),i=Yf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(mt&&i&&Lf(e),e.flags|=1,tn(t,e,n,r),e.child)}function Rp(t,e,n,i,r){if(fn(n)){var s=!0;bl(e)}else s=!1;if(Cs(e,r),e.stateNode===null)il(t,e),Bg(e,n,i),ad(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=fn(n)?Ur:Jt.current,u=Ls(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&bp(e,a,i,u),Zi=!1;var d=e.memoizedState;a.state=d,Cl(e,i,a,r),c=e.memoizedState,o!==i||d!==c||dn.current||Zi?(typeof h=="function"&&(sd(e,n,h,i),c=e.memoizedState),(o=Zi||Ep(e,n,o,i,d,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,vg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Vn(e.type,o),a.props=u,p=e.pendingProps,d=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Un(c):(c=fn(n)?Ur:Jt.current,c=Ls(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==c)&&bp(e,a,i,c),Zi=!1,d=e.memoizedState,a.state=d,Cl(e,i,a,r);var x=e.memoizedState;o!==p||d!==x||dn.current||Zi?(typeof m=="function"&&(sd(e,n,m,i),x=e.memoizedState),(u=Zi||Ep(e,n,u,i,d,x,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return cd(t,e,n,i,s,r)}function cd(t,e,n,i,r,s){jg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&pp(e,n,!1),Li(t,e,s);i=e.stateNode,dy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function Wg(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Hf(t,e.containerInfo)}function Np(t,e,n,i,r){return Os(),Uf(r),e.flags|=256,tn(t,e,n,i),e.child}var ud={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xg(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(xt,r&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=oc(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=ud,t):$f(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return fy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=dr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?dd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ud,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $f(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,i){return i!==null&&Uf(i),Us(e,t.child,null,n),t=$f(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Gc(Error(oe(422))),yo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=oc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,a),e.child.memoizedState=dd(a),e.memoizedState=ud,s);if(!(e.mode&1))return yo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=Gc(s,i,void 0),yo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),qn(i,t,r,-1))}return nh(),i=Gc(Error(oe(421))),yo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=or(r.nextSibling),bn=e,mt=!0,Wn=null,t!==null&&(Nn[Pn++]=wi,Nn[Pn++]=Ti,Nn[Pn++]=Fr,wi=t.id,Ti=t.overflow,Fr=e),e=$f(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rd(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Yg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hy(t,e,n){switch(e.tag){case 3:Wg(e),Os();break;case 5:_g(e);break;case 1:fn(e.type)&&bl(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Xg(t,e,n):(ft(xt,xt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);ft(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Yg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Vg(t,e,n)}return Li(t,e,n)}var Kg,fd,qg,$g;Kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};qg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(fi.current);var s=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Fu(t,r),i=Fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Bu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ht("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$g=function(t,e,n,i){n!==i&&(e.flags|=4)};function ta(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function py(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return fn(e.type)&&El(),Yt(e),null;case 3:return i=e.stateNode,Fs(),pt(dn),pt(Jt),jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(yd(Wn),Wn=null))),fd(t,e),Yt(e),null;case 5:Vf(e);var r=Pr(za.current);if(n=e.type,t!==null&&e.stateNode!=null)qg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Yt(e),null}if(t=Pr(fi.current),vo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)ht(xa[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":zh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Hh(i,s),ht("invalid",i)}Bu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):Ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ht("scroll",i)}switch(n){case"input":lo(i),Gh(i,s,!0);break;case"textarea":lo(i),Vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[oi]=e,t[ka]=i,Kg(t,e,!1,!1),e.stateNode=t;e:{switch(a=zu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)ht(xa[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":zh(t,i),r=Lu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Hh(t,i),r=Fu(t,i),ht("invalid",t);break;default:r=i}Bu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Ax(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&wx(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ra(t,c):typeof c=="number"&&Ra(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ht("scroll",t):c!=null&&yf(t,s,c,a))}switch(n){case"input":lo(t),Gh(t,i,!1);break;case"textarea":lo(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)$g(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Pr(za.current),Pr(fi.current),vo(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Yt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&En!==null&&e.mode&1&&!(e.flags&128))pg(),Os(),e.flags|=98560,s=!1;else if(s=vo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[oi]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Wn!==null&&(yd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Dt===0&&(Dt=3):nh())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Fs(),fd(t,e),t===null&&Ua(e.stateNode.containerInfo),Yt(e),null;case 10:return Bf(e.type._context),Yt(e),null;case 17:return fn(e.type)&&El(),Yt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ta(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,ta(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Bs&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Yt(e),null}else 2*Tt()-s.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=xt.current,ft(xt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return th(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function my(t,e){switch(Of(e),e.tag){case 1:return fn(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),pt(dn),pt(Jt),jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vf(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return Fs(),null;case 10:return Bf(e.type._context),null;case 22:case 23:return th(),null;case 24:return null;default:return null}}var So=!1,$t=!1,xy=typeof WeakSet=="function"?WeakSet:Set,be=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function hd(t,e,n){try{n()}catch(i){Et(t,e,i)}}var Ip=!1;function gy(t,e){if($u=vl,t=tg(),Df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zu={focusedElem:t,selectionRange:n},vl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,g=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?E:Vn(e.type,E),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return x=Ip,Ip=!1,x}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&hd(e,n,s)}r=r.next}while(r!==i)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zg(t){var e=t.alternate;e!==null&&(t.alternate=null,Zg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[ka],delete e[ed],delete e[J_],delete e[ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qg(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var Gt=null,jn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)Jg(t,e,n),n=n.sibling}function Jg(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:$t||Es(n,e);case 6:var i=Gt,r=jn;Gt=null,Hi(t,e,n),Gt=i,jn=r,Gt!==null&&(jn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(jn?(t=Gt,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Da(t)):Oc(Gt,n.stateNode));break;case 4:i=Gt,r=jn,Gt=n.stateNode.containerInfo,jn=!0,Hi(t,e,n),Gt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&hd(n,e,a),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!$t&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Hi(t,e,n),$t=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xy),e.forEach(function(i){var r=Ty.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,jn=!1;break e;case 3:Gt=o.stateNode.containerInfo,jn=!0;break e;case 4:Gt=o.stateNode.containerInfo,jn=!0;break e}o=o.return}if(Gt===null)throw Error(oe(160));Jg(s,a,r),Gt=null,jn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Et(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e0(e,t),e=e.sibling}function e0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ni(t),i&4){try{wa(3,t,t.return),sc(3,t)}catch(E){Et(t,t.return,E)}try{wa(5,t,t.return)}catch(E){Et(t,t.return,E)}}break;case 1:Bn(e,t),ni(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(Bn(e,t),ni(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{Ra(r,"")}catch(E){Et(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ex(r,s),zu(o,a);var u=zu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?Ax(r,p):h==="dangerouslySetInnerHTML"?wx(r,p):h==="children"?Ra(r,p):yf(r,h,p,u)}switch(o){case"input":Ou(r,s);break;case"textarea":bx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ms(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(E){Et(t,t.return,E)}}break;case 6:if(Bn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Et(t,t.return,E)}}break;case 3:if(Bn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(E){Et(t,t.return,E)}break;case 4:Bn(e,t),ni(t);break;case 13:Bn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Jf=Tt())),i&4&&Lp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(u=$t)||h,Bn(e,t),$t=u):Bn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(p=be=h;be!==null;){switch(d=be,m=d.child,d.tag){case 0:case 11:case 14:case 15:wa(4,d,d.return);break;case 1:Es(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){Et(i,n,E)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){Up(p);continue}}m!==null?(m.return=d,be=m):Up(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Tx("display",a))}catch(E){Et(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(E){Et(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bn(e,t),ni(t),i&4&&Lp(t);break;case 21:break;default:Bn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qg(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ra(r,""),i.flags&=-33);var s=Dp(t);xd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Dp(t);md(t,o,a);break;default:throw Error(oe(161))}}catch(c){Et(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vy(t,e,n){be=t,t0(t)}function t0(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||So;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||$t;o=So;var u=$t;if(So=a,($t=c)&&!u)for(be=r;be!==null;)a=be,c=a.child,a.tag===22&&a.memoizedState!==null?Fp(r):c!==null?(c.return=a,be=c):Fp(r);for(;s!==null;)be=s,t0(s),s=s.sibling;be=r,So=o,$t=u}Op(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Op(t)}}function Op(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Da(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}$t||e.flags&512&&pd(e)}catch(d){Et(e,e.return,d)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function Up(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Fp(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(c){Et(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Et(e,r,c)}}var s=e.return;try{pd(e)}catch(c){Et(e,s,c)}break;case 5:var a=e.return;try{pd(e)}catch(c){Et(e,a,c)}}}catch(c){Et(e,e.return,c)}if(e===t){be=null;break}var o=e.sibling;if(o!==null){o.return=e.return,be=o;break}be=e.return}}var _y=Math.ceil,Il=Fi.ReactCurrentDispatcher,Zf=Fi.ReactCurrentOwner,On=Fi.ReactCurrentBatchConfig,et=0,Bt=null,Nt=null,Vt=0,Sn=0,bs=xr(0),Dt=0,ja=null,Br=0,ac=0,Qf=0,Ta=null,cn=null,Jf=0,Bs=1/0,bi=null,Dl=!1,gd=null,cr=null,Eo=!1,nr=null,Ll=0,Aa=0,vd=null,rl=-1,sl=0;function nn(){return et&6?Tt():rl!==-1?rl:rl=Tt()}function ur(t){return t.mode&1?et&2&&Vt!==0?Vt&-Vt:ny.transition!==null?(sl===0&&(sl=Bx()),sl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Xx(t.type)),t):1}function qn(t,e,n,i){if(50<Aa)throw Aa=0,vd=null,Error(oe(185));qa(t,n,i),(!(et&2)||t!==Bt)&&(t===Bt&&(!(et&2)&&(ac|=n),Dt===4&&Ji(t,Vt)),hn(t,i),n===1&&et===0&&!(e.mode&1)&&(Bs=Tt()+500,nc&&gr()))}function hn(t,e){var n=t.callbackNode;n_(t,e);var i=gl(t,t===Bt?Vt:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?ty(kp.bind(null,t)):dg(kp.bind(null,t)),Z_(function(){!(et&6)&&gr()}),n=null;else{switch(zx(i)){case 1:n=wf;break;case 4:n=Fx;break;case 16:n=xl;break;case 536870912:n=kx;break;default:n=xl}n=c0(n,n0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n0(t,e){if(rl=-1,sl=0,et&6)throw Error(oe(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var i=gl(t,t===Bt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=et;et|=2;var s=r0();(Bt!==t||Vt!==e)&&(bi=null,Bs=Tt()+500,Lr(t,e));do try{Ey();break}catch(o){i0(t,o)}while(!0);kf(),Il.current=s,et=r,Nt!==null?e=0:(Bt=null,Vt=0,e=Dt)}if(e!==0){if(e===2&&(r=Wu(t),r!==0&&(i=r,e=_d(t,r))),e===1)throw n=ja,Lr(t,0),Ji(t,i),hn(t,Tt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!yy(r)&&(e=Ol(t,i),e===2&&(s=Wu(t),s!==0&&(i=s,e=_d(t,s))),e===1))throw n=ja,Lr(t,0),Ji(t,i),hn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Mr(t,cn,bi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=Jf+500-Tt(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ju(Mr.bind(null,t,cn,bi),e);break}Mr(t,cn,bi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_y(i/1960))-i,10<i){t.timeoutHandle=Ju(Mr.bind(null,t,cn,bi),i);break}Mr(t,cn,bi);break;case 5:Mr(t,cn,bi);break;default:throw Error(oe(329))}}}return hn(t,Tt()),t.callbackNode===n?n0.bind(null,t):null}function _d(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=cn,cn=n,e!==null&&yd(e)),t}function yd(t){cn===null?cn=t:cn.push.apply(cn,t)}function yy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~Qf,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function kp(t){if(et&6)throw Error(oe(327));Rs();var e=gl(t,0);if(!(e&1))return hn(t,Tt()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Wu(t);i!==0&&(e=i,n=_d(t,i))}if(n===1)throw n=ja,Lr(t,0),Ji(t,e),hn(t,Tt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,cn,bi),hn(t,Tt()),null}function eh(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Bs=Tt()+500,nc&&gr())}}function zr(t){nr!==null&&nr.tag===0&&!(et&6)&&Rs();var e=et;et|=1;var n=On.transition,i=st;try{if(On.transition=null,st=1,t)return t()}finally{st=i,On.transition=n,et=e,!(et&6)&&gr()}}function th(){Sn=bs.current,pt(bs)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$_(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:Fs(),pt(dn),pt(Jt),jf();break;case 5:Vf(i);break;case 4:Fs();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:Bf(i.type._context);break;case 22:case 23:th()}n=n.return}if(Bt=t,Nt=t=dr(t.current,null),Vt=Sn=e,Dt=0,ja=null,Qf=ac=Br=0,cn=Ta=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Nr=null}return t}function i0(t,e){do{var n=Nt;try{if(kf(),tl.current=Pl,Nl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(kr=0,kt=It=gt=null,Ma=!1,Ga=0,Zf.current=null,n===null||n.return===null){Dt=1,ja=e,Nt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Vt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=wp(a);if(m!==null){m.flags&=-257,Tp(m,a,o,s,e),m.mode&1&&Mp(s,u,e),e=m,c=u;var x=e.updateQueue;if(x===null){var E=new Set;E.add(c),e.updateQueue=E}else x.add(c);break e}else{if(!(e&1)){Mp(s,u,e),nh();break e}c=Error(oe(426))}}else if(mt&&o.mode&1){var g=wp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Tp(g,a,o,s,e),Uf(ks(c,o));break e}}s=c=ks(c,o),Dt!==4&&(Dt=2),Ta===null?Ta=[s]:Ta.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=zg(s,c,e);vp(s,f);break e;case 1:o=c;var _=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(cr===null||!cr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Gg(s,o,e);vp(s,S);break e}}s=s.return}while(s!==null)}a0(n)}catch(w){e=w,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function r0(){var t=Il.current;return Il.current=Pl,t===null?Pl:t}function nh(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Bt===null||!(Br&268435455)&&!(ac&268435455)||Ji(Bt,Vt)}function Ol(t,e){var n=et;et|=2;var i=r0();(Bt!==t||Vt!==e)&&(bi=null,Lr(t,e));do try{Sy();break}catch(r){i0(t,r)}while(!0);if(kf(),et=n,Il.current=i,Nt!==null)throw Error(oe(261));return Bt=null,Vt=0,Dt}function Sy(){for(;Nt!==null;)s0(Nt)}function Ey(){for(;Nt!==null&&!Yv();)s0(Nt)}function s0(t){var e=l0(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?a0(t):Nt=e,Zf.current=null}function a0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=my(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Nt=null;return}}else if(n=py(n,e,Sn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Mr(t,e,n){var i=st,r=On.transition;try{On.transition=null,st=1,by(t,e,n,i)}finally{On.transition=r,st=i}return null}function by(t,e,n,i){do Rs();while(nr!==null);if(et&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(i_(t,s),t===Bt&&(Nt=Bt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,c0(xl,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var a=st;st=1;var o=et;et|=4,Zf.current=null,gy(t,n),e0(n,t),V_(Zu),vl=!!$u,Zu=$u=null,t.current=n,vy(n),Kv(),et=o,st=a,On.transition=s}else t.current=n;if(Eo&&(Eo=!1,nr=t,Ll=r),s=t.pendingLanes,s===0&&(cr=null),Zv(n.stateNode),hn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=gd,gd=null,t;return Ll&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===vd?Aa++:(Aa=0,vd=t):Aa=0,gr(),null}function Rs(){if(nr!==null){var t=zx(Ll),e=On.transition,n=st;try{if(On.transition=null,st=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Ll=0,et&6)throw Error(oe(331));var r=et;for(et|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(be=u;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:wa(8,h,s)}var p=h.child;if(p!==null)p.return=h,be=p;else for(;be!==null;){h=be;var d=h.sibling,m=h.return;if(Zg(h),h===u){be=null;break}if(d!==null){d.return=m,be=d;break}be=m}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,be=f;break e}be=s.return}}var _=t.current;for(be=_;be!==null;){a=be;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,be=b;else e:for(a=_;be!==null;){if(o=be,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:sc(9,o)}}catch(w){Et(o,o.return,w)}if(o===a){be=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,be=S;break e}be=o.return}}if(et=r,gr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{st=n,On.transition=e}}return!1}function Bp(t,e,n){e=ks(n,e),e=zg(t,e,1),t=lr(t,e,1),e=nn(),t!==null&&(qa(t,1,e),hn(t,e))}function Et(t,e,n){if(t.tag===3)Bp(t,t,n);else for(;e!==null;){if(e.tag===3){Bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=ks(n,t),t=Gg(e,t,1),e=lr(e,t,1),t=nn(),e!==null&&(qa(e,1,t),hn(e,t));break}}e=e.return}}function My(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Vt&n)===n&&(Dt===4||Dt===3&&(Vt&130023424)===Vt&&500>Tt()-Jf?Lr(t,0):Qf|=n),hn(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):e=1);var n=nn();t=Di(t,e),t!==null&&(qa(t,e,n),hn(t,n))}function wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function Ty(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),o0(t,n)}var l0;l0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,hy(t,e,n);un=!!(t.flags&131072)}else un=!1,mt&&e.flags&1048576&&fg(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Ls(e,Jt.current);Cs(e,n),r=Xf(null,e,i,t,r,n);var s=Yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gf(e),r.updater=rc,e.stateNode=r,r._reactInternals=e,ad(e,i,t,n),e=cd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Lf(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Cy(i),t=Vn(i,t),r){case 0:e=ld(null,e,i,t,n);break e;case 1:e=Rp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,Vn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),ld(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Rp(t,e,i,r,n);case 3:e:{if(Wg(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,vg(t,e),Cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ks(Error(oe(423)),e),e=Np(t,e,i,n,r);break e}else if(i!==r){r=ks(Error(oe(424)),e),e=Np(t,e,i,n,r);break e}else for(En=or(e.stateNode.containerInfo.firstChild),bn=e,mt=!0,Wn=null,n=xg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=Li(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return _g(e),t===null&&id(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Qu(i,r)?a=null:s!==null&&Qu(i,s)&&(e.flags|=32),jg(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&id(e),null;case 13:return Xg(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Ap(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft(Tl,i._currentValue),i._currentValue=a,s!==null)if($n(s.value,a)){if(s.children===r.children&&!dn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ci(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),rd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),rd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Cs(e,n),r=Un(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Cp(t,e,i,r,n);case 15:return Hg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),il(t,e),e.tag=1,fn(i)?(t=!0,bl(e)):t=!1,Cs(e,n),Bg(e,i,r),ad(e,i,r,n),cd(null,e,i,!0,t,n);case 19:return Yg(t,e,n);case 22:return Vg(t,e,n)}throw Error(oe(156,e.tag))};function c0(t,e){return Ux(t,e)}function Ay(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Ay(t,e,n,i)}function ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cy(t){if(typeof t=="function")return ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ef)return 11;if(t===bf)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")ih(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Or(n.children,r,s,e);case Sf:a=8,r|=8;break;case Nu:return t=Ln(12,n,e,r|2),t.elementType=Nu,t.lanes=s,t;case Pu:return t=Ln(13,n,e,r),t.elementType=Pu,t.lanes=s,t;case Iu:return t=Ln(19,n,e,r),t.elementType=Iu,t.lanes=s,t;case _x:return oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gx:a=10;break e;case vx:a=9;break e;case Ef:a=11;break e;case bf:a=14;break e;case $i:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function oc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=_x,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ry(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rh(t,e,n,i,r,s,a,o,c){return t=new Ry(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return hr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(fn(n))return ug(t,n,e)}return e}function d0(t,e,n,i,r,s,a,o,c){return t=rh(n,i,!0,t,r,s,a,o,c),t.context=u0(null),n=t.current,i=nn(),r=ur(n),s=Ci(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,qa(t,r,i),hn(t,i),t}function lc(t,e,n,i){var r=e.current,s=nn(),a=ur(r);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,a),t!==null&&(qn(t,r,a,s),el(t,r,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sh(t,e){zp(t,e),(t=t.alternate)&&zp(t,e)}function Py(){return null}var f0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ah(t){this._internalRoot=t}cc.prototype.render=ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));lc(t,e,null,null)};cc.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){lc(null,t,null,null)}),e[Ii]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&Wx(t)}};function oh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function Iy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(a);s.call(u)}}var a=d0(e,i,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=a,t[Ii]=a.current,Ua(t.nodeType===8?t.parentNode:t),zr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Ul(c);o.call(u)}}var c=rh(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=c,t[Ii]=c.current,Ua(t.nodeType===8?t.parentNode:t),zr(function(){lc(e,c,n,i)}),c}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Ul(a);o.call(c)}}lc(e,a,t,r)}else a=Iy(n,e,t,r,i);return Ul(a)}Gx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ma(e.pendingLanes);n!==0&&(Tf(e,n|1),hn(e,Tt()),!(et&6)&&(Bs=Tt()+500,gr()))}break;case 13:zr(function(){var i=Di(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),sh(t,1)}};Af=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}sh(t,134217728)}};Hx=function(t){if(t.tag===13){var e=ur(t),n=Di(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}sh(t,e)}};Vx=function(){return st};jx=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Hu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tc(i);if(!r)throw Error(oe(90));Sx(i),Ou(i,r)}}}break;case"textarea":bx(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};Nx=eh;Px=zr;var Dy={usingClientEntryPoint:!1,Events:[Za,gs,tc,Cx,Rx,eh]},na={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ly={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lx(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||Py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Zl=bo.inject(Ly),di=bo}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oh(e))throw Error(oe(200));return Ny(t,e,null,n)};wn.createRoot=function(t,e){if(!oh(t))throw Error(oe(299));var n=!1,i="",r=f0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Ua(t.nodeType===8?t.parentNode:t),new ah(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Lx(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return zr(t)};wn.hydrate=function(t,e,n){if(!uc(e))throw Error(oe(200));return dc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!oh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=f0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=d0(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};wn.render=function(t,e,n){if(!uc(e))throw Error(oe(200));return dc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!uc(t))throw Error(oe(40));return t._reactRootContainer?(zr(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};wn.unstable_batchedUpdates=eh;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return dc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function h0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0)}catch(t){console.error(t)}}h0(),hx.exports=wn;var Oy=hx.exports,Hp=Oy;Cu.createRoot=Hp.createRoot,Cu.hydrateRoot=Hp.hydrateRoot;function Uy(){return l.jsx("div",{className:"fixed inset-0 w-full h-full z-0 pointer-events-none","aria-hidden":"true",style:{background:`
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(129,178,154,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 90%, rgba(212,163,115,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 100% 100% at 50% 50%, rgba(30,29,44,0.8) 0%, #0f0f13 100%)
        `}})}class Fy{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted||this.playBeep(600,"sine",.05),this.muted}playClick(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.03),n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.03),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.03)}catch(e){console.warn("Audio playback error:",e)}}playExec(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(440,e),n.frequency.setValueAtTime(880,e+.04),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+.1)}catch(e){console.warn("Audio error:",e)}}playError(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(150,e),n.frequency.setValueAtTime(110,e+.08),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.01,e+.2),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+.2)}catch(e){console.warn("Audio error:",e)}}playBeep(e=520,n="sine",i=.08){if(!this.muted&&(this.init(),!!this.ctx))try{const r=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=n,s.frequency.setValueAtTime(e,r),a.gain.setValueAtTime(.08,r),a.gain.exponentialRampToValueAtTime(.001,r+i),s.connect(a),a.connect(this.ctx.destination),s.start(),s.stop(r+i)}catch(r){console.warn("Audio error:",r)}}playStartup(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,e+r*.08),a.gain.setValueAtTime(.08,e+r*.08),a.gain.exponentialRampToValueAtTime(.001,e+r*.08+.2),s.connect(a),a.connect(this.ctx.destination),s.start(e+r*.08),s.stop(e+r*.08+.2)})}catch(e){console.warn("Audio error:",e)}}}const Me=new Fy;function ky({onOpenWindow:t,onToggleAudio:e,onOpenContact:n,isMuted:i,isDemo:r}){return l.jsxs("header",{className:"fixed top-0 w-full z-40 border-b-4 border-r-4 border-white bg-surface-container-highest text-primary font-code-terminal text-code-terminal flex justify-between items-center px-3 sm:px-margin-edge h-16",style:{boxShadow:"inset 2px 2px 0px 0px rgba(255,255,255,0.2), inset -2px -2px 0px 0px rgba(0,0,0,0.5)"},children:[l.jsxs("div",{className:"flex items-center gap-2 sm:gap-gutter min-w-0",children:[l.jsx("div",{className:"h-9 w-9 sm:h-10 sm:w-10 border-2 border-primary-container rounded-sm bg-black flex items-center justify-center flex-shrink-0",children:l.jsx("span",{className:"material-symbols-outlined text-primary-container text-xl sm:text-2xl",style:{fontVariationSettings:'"FILL" 1'},children:"query_stats"})}),l.jsxs("div",{className:"flex flex-col min-w-0",children:[l.jsx("h1",{className:"font-display-lg text-[18px] sm:text-display-lg text-primary uppercase tracking-tighter hidden sm:block glitch-text truncate","data-text":"OBSOLESCENCE PROTOCOL",children:"OBSOLESCENCE PROTOCOL"}),l.jsx("h1",{className:"font-display-lg text-[16px] leading-none text-primary uppercase tracking-tighter sm:hidden glitch-text truncate","data-text":"OBS. PROTOCOL",children:"OBS. PROTOCOL"})]}),r&&l.jsx("span",{className:"hidden md:inline-block ml-2 bg-primary-container text-black font-label-sm text-[10px] px-2 py-0.5 win-bevel-outset uppercase font-bold animate-pulse flex-shrink-0",children:"DEMO MODE"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[l.jsxs("button",{onClick:()=>{Me.playClick(),n&&n()},className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-2.5 py-1 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer",title:"Direct Contact & Inquiries",children:[l.jsx("span",{className:"material-symbols-outlined text-[15px] text-amber-300",children:"mail"}),l.jsx("span",{children:"CONTACT"})]}),l.jsxs("button",{onClick:()=>{Me.playClick(),t("stats")},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white",title:"Open Analytics Dashboard [S]",children:[l.jsx("span",{className:"material-symbols-outlined text-[15px]",children:"analytics"}),l.jsx("span",{className:"hidden md:inline",children:"Stats"})]}),l.jsxs("button",{onClick:()=>{Me.playClick(),t("terminal")},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white",title:"Open CLI Terminal [T]",children:[l.jsx("span",{className:"material-symbols-outlined text-[15px]",children:"terminal"}),l.jsx("span",{className:"hidden md:inline",children:"Terminal"})]}),l.jsxs("button",{onClick:()=>{Me.playClick(),t("ipod")},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white text-purple-950 hidden sm:flex",title:"Open Retro iPod Music Player [P]",children:[l.jsx("span",{className:"material-symbols-outlined text-[15px]",children:"graphic_eq"}),l.jsx("span",{className:"hidden md:inline",children:"iPod"})]}),l.jsx("button",{onClick:()=>{e()},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white",title:i?"Unmute Sound":"Mute Sound",children:l.jsx("span",{className:"material-symbols-outlined text-[15px]",children:i?"volume_off":"volume_up"})})]})]})}function By({sources:t=[],onRefresh:e,onOpenSources:n,onOpenTerminal:i,onOpenResume:r}){const[s,a]=ie.useState(null),[o,c]=ie.useState(null),u=t.filter(d=>d.enabled).length,h=t.filter(d=>d.healthy).length,p=async()=>{const d=performance.now();try{const x=await(await fetch("/api/health")).json(),E=performance.now();a(x),c(Math.round(E-d))}catch{a({status:"OFFLINE",uptime:"N/A",memory:{heapUsedMB:0}})}};return ie.useEffect(()=>{p();const d=setInterval(p,15e3);return()=>clearInterval(d)},[]),l.jsxs("section",{className:"win-window win-bevel-outset p-[2px] w-full max-w-xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.8)] relative mt-4 font-code-terminal",children:[l.jsxs("div",{className:"win-titlebar flex justify-between items-center px-2 py-1 bg-[#000080] text-white select-none",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"material-symbols-outlined text-[15px] text-green-400",children:"dns"}),l.jsx("span",{className:"text-[12px] font-bold tracking-wide",children:"GATEWAY.TELEMETRY // LIVE INFRASTRUCTURE MONITOR"})]}),l.jsx("button",{onClick:()=>{Me.playClick(),p(),e&&e()},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[12px] hover:bg-white cursor-pointer",title:"Refresh Server Health & Sources",children:"↻"})]}),l.jsxs("div",{className:"p-3 bg-[#c0c0c0] text-black space-y-2.5 text-[11px] sm:text-[12px]",children:[l.jsxs("div",{className:"bg-[#121216] text-[#f4f1de] p-2.5 win-bevel-inset flex items-center justify-between gap-2 flex-wrap font-mono",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsxs("span",{className:"font-bold text-white",children:["NODE_GATEWAY: ",(s==null?void 0:s.status)||"POLLING..."]})]}),l.jsxs("div",{className:"flex items-center gap-3 text-[10px] text-gray-300",children:[o!==null&&l.jsxs("span",{children:["PING: ",l.jsxs("strong",{className:"text-emerald-400",children:[o,"ms"]})]}),(s==null?void 0:s.uptime)&&l.jsxs("span",{children:["UPTIME: ",l.jsx("strong",{className:"text-amber-300",children:s.uptime})]}),(s==null?void 0:s.memory)&&l.jsxs("span",{children:["HEAP: ",l.jsxs("strong",{className:"text-sky-300",children:[s.memory.heapUsedMB,"MB"]})]})]})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("p",{className:"text-[#000080] font-bold",children:["> TELEMETRY AGGREGATOR: ",h,"/",u||t.length," LIVE SOURCES ACTIVE"]}),l.jsx("p",{className:"text-gray-800",children:"> PIPELINES: GITHUB · SPOTIFY · STRAVA · OURA · RESCUETIME · LEETCODE"}),l.jsx("p",{className:"text-[#0f6d00] font-bold",children:"> FAULT ISOLATION: ENGAGED | IN-MEMORY TTL CACHE: ACTIVE (180s/600s)"})]}),l.jsxs("div",{className:"flex items-center gap-2 pt-1 flex-wrap",children:[l.jsx("button",{onClick:()=>{Me.playClick(),i&&i()},className:"bg-black text-[#00ff00] font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-gray-900 cursor-pointer active:translate-y-0.5",children:"> /SYS/TERMINAL"}),l.jsx("button",{onClick:()=>{Me.playClick(),n&&n()},className:"bg-black text-secondary-container font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-gray-900 cursor-pointer active:translate-y-0.5",children:"> /SYS/SOURCES"}),r&&l.jsx("button",{onClick:()=>{Me.playClick(),r()},className:"bg-[#000080] text-amber-300 font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-[#0000a0] cursor-pointer active:translate-y-0.5 ml-auto",children:"> EXEC RESUME"})]})]})]})}function Qn(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Gr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const p0=6048e5,zy=864e5;let Gy={};function fc(){return Gy}function Wa(t,e){var o,c,u,h;const n=fc(),i=(e==null?void 0:e.weekStartsOn)??((c=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??0,r=Qn(t),s=r.getDay(),a=(s<i?7:0)+s-i;return r.setDate(r.getDate()-a),r.setHours(0,0,0,0),r}function Fl(t){return Wa(t,{weekStartsOn:1})}function m0(t){const e=Qn(t),n=e.getFullYear(),i=Gr(t,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const r=Fl(i),s=Gr(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const a=Fl(s);return e.getTime()>=r.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function Vp(t){const e=Qn(t);return e.setHours(0,0,0,0),e}function jp(t){const e=Qn(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Hy(t,e){const n=Vp(t),i=Vp(e),r=+n-jp(n),s=+i-jp(i);return Math.round((r-s)/zy)}function Vy(t){const e=m0(t),n=Gr(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Fl(n)}function jy(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Wy(t){if(!jy(t)&&typeof t!="number")return!1;const e=Qn(t);return!isNaN(Number(e))}function Xy(t){const e=Qn(t),n=Gr(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const Yy={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ky=(t,e,n)=>{let i;const r=Yy[t];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function Wc(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const qy={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$y={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zy={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qy={date:Wc({formats:qy,defaultWidth:"full"}),time:Wc({formats:$y,defaultWidth:"full"}),dateTime:Wc({formats:Zy,defaultWidth:"full"})},Jy={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},eS=(t,e,n,i)=>Jy[t];function ia(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let r;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{const a=t.defaultWidth,o=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}const tS={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},nS={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},iS={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rS={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},sS={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},aS={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},oS=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},lS={ordinalNumber:oS,era:ia({values:tS,defaultWidth:"wide"}),quarter:ia({values:nS,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ia({values:iS,defaultWidth:"wide"}),day:ia({values:rS,defaultWidth:"wide"}),dayPeriod:ia({values:sS,defaultWidth:"wide",formattingValues:aS,defaultFormattingWidth:"wide"})};function ra(t){return(e,n={})=>{const i=n.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;const a=s[0],o=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(o)?uS(o,p=>p.test(a)):cS(o,p=>p.test(a));let u;u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const h=e.slice(a.length);return{value:u,rest:h}}}function cS(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function uS(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function dS(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const r=i[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=n.valueCallback?n.valueCallback(a):a;const o=e.slice(r.length);return{value:a,rest:o}}}const fS=/^(\d+)(th|st|nd|rd)?/i,hS=/\d+/i,pS={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},mS={any:[/^b/i,/^(a|c)/i]},xS={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gS={any:[/1/i,/2/i,/3/i,/4/i]},vS={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_S={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},yS={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},SS={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ES={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},bS={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},MS={ordinalNumber:dS({matchPattern:fS,parsePattern:hS,valueCallback:t=>parseInt(t,10)}),era:ra({matchPatterns:pS,defaultMatchWidth:"wide",parsePatterns:mS,defaultParseWidth:"any"}),quarter:ra({matchPatterns:xS,defaultMatchWidth:"wide",parsePatterns:gS,defaultParseWidth:"any",valueCallback:t=>t+1}),month:ra({matchPatterns:vS,defaultMatchWidth:"wide",parsePatterns:_S,defaultParseWidth:"any"}),day:ra({matchPatterns:yS,defaultMatchWidth:"wide",parsePatterns:SS,defaultParseWidth:"any"}),dayPeriod:ra({matchPatterns:ES,defaultMatchWidth:"any",parsePatterns:bS,defaultParseWidth:"any"})},wS={code:"en-US",formatDistance:Ky,formatLong:Qy,formatRelative:eS,localize:lS,match:MS,options:{weekStartsOn:0,firstWeekContainsDate:1}};function TS(t){const e=Qn(t);return Hy(e,Xy(e))+1}function AS(t){const e=Qn(t),n=+Fl(e)-+Vy(e);return Math.round(n/p0)+1}function x0(t,e){var h,p,d,m;const n=Qn(t),i=n.getFullYear(),r=fc(),s=(e==null?void 0:e.firstWeekContainsDate)??((p=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,a=Gr(t,0);a.setFullYear(i+1,0,s),a.setHours(0,0,0,0);const o=Wa(a,e),c=Gr(t,0);c.setFullYear(i,0,s),c.setHours(0,0,0,0);const u=Wa(c,e);return n.getTime()>=o.getTime()?i+1:n.getTime()>=u.getTime()?i:i-1}function CS(t,e){var o,c,u,h;const n=fc(),i=(e==null?void 0:e.firstWeekContainsDate)??((c=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,r=x0(t,e),s=Gr(t,0);return s.setFullYear(r,0,i),s.setHours(0,0,0,0),Wa(s,e)}function RS(t,e){const n=Qn(t),i=+Wa(n,e)-+CS(n,e);return Math.round(i/p0)+1}function rt(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Vi={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return rt(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):rt(n+1,2)},d(t,e){return rt(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return rt(t.getHours()%12||12,e.length)},H(t,e){return rt(t.getHours(),e.length)},m(t,e){return rt(t.getMinutes(),e.length)},s(t,e){return rt(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),r=Math.trunc(i*Math.pow(10,n-3));return rt(r,e.length)}},Zr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Wp={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),r=i>0?i:1-i;return n.ordinalNumber(r,{unit:"year"})}return Vi.y(t,e)},Y:function(t,e,n,i){const r=x0(t,i),s=r>0?r:1-r;if(e==="YY"){const a=s%100;return rt(a,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):rt(s,e.length)},R:function(t,e){const n=m0(t);return rt(n,e.length)},u:function(t,e){const n=t.getFullYear();return rt(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return rt(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return rt(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Vi.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return rt(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const r=RS(t,i);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):rt(r,e.length)},I:function(t,e,n){const i=AS(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):rt(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Vi.d(t,e)},D:function(t,e,n){const i=TS(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):rt(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const r=t.getDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return rt(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const r=t.getDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return rt(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return rt(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let r;switch(i===12?r=Zr.noon:i===0?r=Zr.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let r;switch(i>=17?r=Zr.evening:i>=12?r=Zr.afternoon:i>=4?r=Zr.morning:r=Zr.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Vi.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Vi.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):rt(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):rt(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Vi.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Vi.s(t,e)},S:function(t,e){return Vi.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Yp(i);case"XXXX":case"XX":return wr(i);case"XXXXX":case"XXX":default:return wr(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return Yp(i);case"xxxx":case"xx":return wr(i);case"xxxxx":case"xxx":default:return wr(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Xp(i,":");case"OOOO":default:return"GMT"+wr(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Xp(i,":");case"zzzz":default:return"GMT"+wr(i,":")}},t:function(t,e,n){const i=Math.trunc(t.getTime()/1e3);return rt(i,e.length)},T:function(t,e,n){const i=t.getTime();return rt(i,e.length)}};function Xp(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=Math.trunc(i/60),s=i%60;return s===0?n+String(r):n+String(r)+e+rt(s,2)}function Yp(t,e){return t%60===0?(t>0?"-":"+")+rt(Math.abs(t)/60,2):wr(t,e)}function wr(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=rt(Math.trunc(i/60),2),s=rt(i%60,2);return n+r+e+s}const Kp=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},g0=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},NS=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],r=n[2];if(!r)return Kp(t,e);let s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Kp(i,e)).replace("{{time}}",g0(r,e))},PS={p:g0,P:NS},IS=/^D+$/,DS=/^Y+$/,LS=["D","DD","YY","YYYY"];function OS(t){return IS.test(t)}function US(t){return DS.test(t)}function FS(t,e,n){const i=kS(t,e,n);if(console.warn(i),LS.includes(t))throw new RangeError(i)}function kS(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const BS=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,zS=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,GS=/^'([^]*?)'?$/,HS=/''/g,VS=/[a-zA-Z]/;function kl(t,e,n){var h,p,d,m;const i=fc(),r=i.locale??wS,s=i.firstWeekContainsDate??((p=(h=i.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??1,a=i.weekStartsOn??((m=(d=i.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,o=Qn(t);if(!Wy(o))throw new RangeError("Invalid time value");let c=e.match(zS).map(x=>{const E=x[0];if(E==="p"||E==="P"){const g=PS[E];return g(x,r.formatLong)}return x}).join("").match(BS).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const E=x[0];if(E==="'")return{isToken:!1,value:jS(x)};if(Wp[E])return{isToken:!0,value:x};if(E.match(VS))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:x}});r.localize.preprocessor&&(c=r.localize.preprocessor(o,c));const u={firstWeekContainsDate:s,weekStartsOn:a,locale:r};return c.map(x=>{if(!x.isToken)return x.value;const E=x.value;(US(E)||OS(E))&&FS(E,e,String(t));const g=Wp[E[0]];return g(o,E,r.localize,u)}).join("")}function jS(t){const e=t.match(GS);return e?e[1].replace(HS,"'"):t}function WS({dateRange:t,setDateRange:e}){const n=[{label:"7 Days",days:7},{label:"30 Days",days:30},{label:"90 Days",days:90}],i=r=>{e({from:new Date(Date.now()-r*24*60*60*1e3),to:new Date})};return l.jsxs("section",{className:"win-window win-bevel-outset p-[2px] w-full max-w-2xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.7)] mt-4",children:[l.jsx("div",{className:"win-titlebar flex justify-between items-center px-2 py-1",children:l.jsx("span",{className:"font-code-terminal text-[14px] font-bold tracking-wide",children:"TIME.RANGE"})}),l.jsxs("div",{className:"p-window-padding font-code-terminal text-code-terminal bg-[#c0c0c0] flex flex-wrap gap-2 items-center",children:[l.jsx("span",{className:"text-black",children:"> FILTER:"}),n.map(r=>l.jsx("button",{onClick:()=>i(r.days),className:"win-bevel-button bg-white text-black font-bold px-3 py-1 hover:bg-gray-200",children:r.label},r.days)),l.jsxs("span",{className:"text-black ml-auto text-[10px]",children:[kl(t.from,"MMM dd")," - ",kl(t.to,"MMM dd")]})]})]})}function Bl({text:t="",delay:e=20,startDelay:n=0,className:i="",cursorChar:r="▋",showCursor:s=!0,onComplete:a}){const[o,c]=ie.useState(""),[u,h]=ie.useState(0),[p,d]=ie.useState(n===0);return ie.useEffect(()=>{c(""),h(0),d(n===0);let m=null;return n>0&&(m=setTimeout(()=>{d(!0)},n)),()=>{m&&clearTimeout(m)}},[t,n]),ie.useEffect(()=>{if(!(!p||!t))if(u<t.length){const m=setTimeout(()=>{c(x=>x+t[u]),h(x=>x+1)},e);return()=>clearTimeout(m)}else a&&a()},[p,u,e,t,a]),l.jsxs("span",{className:`font-mono inline ${i}`,children:[o,s&&p&&u<t.length&&l.jsx("span",{className:"inline-block animate-pulse text-[#81b29a] ml-0.5 opacity-80 select-none",children:r})]})}const qp={sleep:{icon:"bed",label:"SLEEP_CYCLE",color:"bg-[#d4a373]",cols:"md:col-span-6"},workout:{icon:"directions_run",label:"MOVEMENT",color:"bg-[#81b29a]",cols:"md:col-span-6"},commit:{icon:"code",label:"KNOWLEDGE_COMMITS",color:"bg-[#e07a5f]",cols:"md:col-span-12",hasWarning:!0,hasInput:!0},pull_request:{icon:"merge",label:"CODE_MERGE",color:"bg-[#81b29a]",cols:"md:col-span-6"},issue:{icon:"bug_report",label:"ISSUE_LOG",color:"bg-[#e07a5f]",cols:"md:col-span-6"},music:{icon:"music_note",label:"AUDIO_STREAM",color:"bg-[#d4a373]",cols:"md:col-span-6"},time_tracking:{icon:"schedule",label:"TIME_ANALYSIS",color:"bg-[#81b29a]",cols:"md:col-span-6"},default:{icon:"circle",label:"DATA_ENTRY",color:"bg-[#d4a373]",cols:"md:col-span-6"}};function XS({event:t,index:e,onExecuteCommand:n,onOpenIPodWithTrack:i,forceExpand:r=null}){const[s,a]=ie.useState(e<2),[o,c]=ie.useState(""),[u,h]=ie.useState(!1),[p,d]=ie.useState(!1),m=r!==null?r:s,x=qp[t.type]||qp.default,E=e%3===0?"md:translate-x-[2px]":e%3===1?"md:translate-y-[4px] md:-translate-x-[2px]":"md:translate-y-[2px]";if(p)return null;const g=()=>{o.trim()&&(Me.playExec(),n&&n(o.trim()),c(""))},f=()=>{Me.playClick(),a(!s)},_=()=>{switch(t.type){case"commit":return t.data.message||"Updated codebase telemetry";case"pull_request":return`#${t.data.number||"PR"}: ${t.data.title||"Code Merge"}`;case"issue":return`#${t.data.number||"ISS"}: ${t.data.title||"Issue Log"}`;case"music":return`"${t.data.track_name||t.data.title}" by ${t.data.artist||"Unknown"}`;case"workout":return`${t.data.sport_type||"Activity"} · ${t.data.distance?`${(t.data.distance/1e3).toFixed(1)} km`:""} · ${Math.floor((t.data.moving_time||0)/60)} mins`;case"sleep":return`Sleep: ${Math.floor((t.data.duration||0)/3600)}h ${Math.floor((t.data.duration||0)%3600/60)}m (Score: ${t.data.score||88})`;case"time_tracking":return`${t.data.activity||"Development"} · ${t.data.category||"Productivity"}`;default:return"Telemetry data event recorded"}};return l.jsx("article",{className:`endacopia-clay-card p-1 ${m?x.cols:"col-span-12"} transform ${E} relative transition-all duration-200`,children:m?l.jsxs(l.Fragment,{children:[x.hasWarning&&l.jsx("div",{className:"absolute -top-2.5 -left-2.5 w-8 h-8 bg-[#e07a5f] border border-[#f4f1de] flex items-center justify-center z-50 transform rotate-6 shadow-md rounded",children:l.jsx("span",{className:"material-symbols-outlined text-[#0f0f13] text-lg font-bold",children:"warning"})}),l.jsxs("div",{className:`flex justify-between items-center px-3 py-1.5 rounded-t ${x.color} text-[#0f0f13] font-bold`,children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("button",{onClick:f,className:"endacopia-clay-button px-1.5 h-5 flex items-center justify-center text-[10px] font-bold",title:"Collapse Log",children:"[-]"}),l.jsxs("span",{className:"font-code-terminal text-[12px] tracking-wider uppercase font-extrabold",children:["LOG_",String(e+1).padStart(2,"0"),": ",x.label]})]}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[t.type==="music"&&l.jsx("button",{onClick:()=>{Me.playClick(),i&&i(t.data)},className:"endacopia-clay-button w-5 h-5 flex items-center justify-center text-[11px]",title:"Stream on iPod",children:"▶"}),l.jsx("button",{onClick:()=>{Me.playClick(),h(!u)},className:"endacopia-clay-button px-1.5 h-5 flex items-center justify-center text-[9px] font-bold",title:"Inspect Telemetry JSON",children:u?"JSON":"{ }"}),l.jsx("button",{onClick:()=>{Me.playClick(),d(!0)},className:"endacopia-clay-button w-5 h-5 flex items-center justify-center text-[11px]",title:"Dismiss Card",children:"✕"})]})]}),l.jsxs("div",{className:"p-3.5 flex flex-col bg-[#14141a] gap-2.5 rounded-b text-[#f4f1de] font-code-terminal",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[#81b29a] text-[18px]",children:x.icon}),l.jsx("span",{className:"text-[10px] font-bold text-[#81b29a] uppercase",children:kl(new Date(t.timestamp),"MMM dd, HH:mm")}),l.jsx("span",{className:"bg-[#242330] text-[#d4a373] text-[9px] px-2 py-0.5 uppercase ml-auto font-bold rounded border border-[#363545]",children:t.source})]}),u?l.jsx("pre",{className:"font-code-terminal text-[10px] bg-[#0a0a0d] text-[#81b29a] p-2 border border-[#363545] rounded overflow-auto max-h-[160px]",children:JSON.stringify(t,null,2)}):l.jsx(YS,{event:t,onOpenIPodWithTrack:i}),x.hasInput&&l.jsxs("div",{className:"mt-auto pt-2 flex gap-2",children:[l.jsx("input",{className:"bg-[#0a0a0d] text-[#81b29a] border border-[#363545] font-code-terminal px-2.5 py-1 w-full focus:outline-none text-[11px] rounded",placeholder:"ENTER COMMAND (e.g. help, stats, mail)",type:"text",value:o,onChange:b=>c(b.target.value),onKeyDown:b=>{b.key==="Enter"&&g()}}),l.jsx("button",{onClick:g,className:"endacopia-clay-button px-3 text-[11px] cursor-pointer",children:"EXEC"})]})]})]}):l.jsxs("div",{onClick:f,className:"flex items-center justify-between p-2 sm:p-2.5 bg-[#14141a] hover:bg-[#1c1b24] text-[#f4f1de] font-code-terminal rounded cursor-pointer transition-colors border border-[#2e2d3e] gap-2 flex-wrap sm:flex-nowrap",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[l.jsx("button",{onClick:b=>{b.stopPropagation(),f()},className:"endacopia-clay-button px-1.5 py-0.5 text-[10px] font-bold text-[#81b29a] flex-shrink-0",title:"Expand Log",children:"[+]"}),l.jsxs("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded text-black flex-shrink-0 ${x.color}`,children:["LOG_",String(e+1).padStart(2,"0")]}),l.jsx("span",{className:"text-[10px] text-[#81b29a] font-bold hidden sm:inline flex-shrink-0",children:kl(new Date(t.timestamp),"MMM dd, HH:mm")}),l.jsxs("span",{className:"text-[11px] text-[#e0ddcf] truncate font-mono",children:["> ",_()]})]}),l.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 ml-auto",children:[t.type==="music"&&l.jsx("button",{onClick:b=>{b.stopPropagation(),Me.playClick(),i&&i(t.data)},className:"endacopia-clay-button px-2 py-0.5 text-[10px] font-bold text-[#00ff00] hover:text-white",title:"Stream on iPod",children:"▶ PLAY"}),l.jsx("span",{className:"bg-[#242330] text-[#d4a373] text-[9px] px-1.5 py-0.5 uppercase font-bold rounded border border-[#363545]",children:t.source})]})]})})}function YS({event:t,onOpenIPodWithTrack:e}){switch(t.type){case"sleep":return l.jsxs(l.Fragment,{children:[l.jsxs("p",{className:"font-bold text-[14px] text-white",children:["Duration: ",Math.floor(t.data.duration/3600),"h"," ",Math.floor(t.data.duration%3600/60),"m"]}),t.data.efficiency&&l.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["> ",l.jsx(Bl,{text:`Rest Efficiency: ${t.data.efficiency}% · Recovery Score: ${t.data.score||88}/100`,delay:18})]}),t.data.deep_sleep&&l.jsxs("p",{className:"text-[10px] text-gray-400",children:["Deep Rest: ",Math.floor(t.data.deep_sleep/60)," mins · REM Rest:"," ",Math.floor(t.data.rem_sleep/60)," mins"]})]});case"workout":return l.jsxs(l.Fragment,{children:[l.jsxs("p",{className:"font-bold text-[14px] text-white",children:[t.data.sport_type||"Activity",": ",t.data.name]}),l.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px] text-[#81b29a]",children:[t.data.distance>0&&l.jsxs("span",{children:["> Dist: ",(t.data.distance/1e3).toFixed(2)," km"]}),l.jsxs("span",{children:["> Moving: ",Math.floor(t.data.moving_time/60)," mins"]}),t.data.calories&&l.jsxs("span",{children:["> Energy: ",t.data.calories," kcal"]})]})]});case"commit":return l.jsxs(l.Fragment,{children:[l.jsxs("p",{className:"font-bold text-[13px] text-white",children:["Repo: ",t.data.repo]}),l.jsxs("p",{className:"text-[12px] text-[#81b29a] font-bold",children:["> ",l.jsx(Bl,{text:t.data.message,delay:20})]}),t.data.hash&&l.jsxs("p",{className:"text-[10px] text-gray-500 font-mono",children:["HASH: ",t.data.hash.substring(0,10)]})]});case"pull_request":return l.jsxs(l.Fragment,{children:[l.jsxs("p",{className:"font-bold text-[13px] text-white",children:["PR #",t.data.number,": ",t.data.title]}),l.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Repo: ",t.data.repo," · ",l.jsx("span",{className:"uppercase text-[#d4a373]",children:t.data.state})]})]});case"issue":return l.jsxs(l.Fragment,{children:[l.jsxs("p",{className:"font-bold text-[13px] text-white",children:["Issue #",t.data.number,": ",t.data.title]}),l.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Repo: ",t.data.repo," · ",l.jsx("span",{className:"uppercase text-[#e07a5f]",children:t.data.state})]})]});case"music":return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"flex items-center gap-2",children:l.jsx("span",{className:"font-bold text-[13px] text-white",children:t.data.track_name||t.data.title})}),l.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Artist: ",t.data.artist]}),t.data.album&&l.jsxs("p",{className:"text-[10px] text-gray-400",children:["Album: ",t.data.album]})]});case"time_tracking":return l.jsxs(l.Fragment,{children:[l.jsx("p",{className:"font-bold text-[13px] text-white",children:t.data.activity}),l.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Category: ",t.data.category," · Duration: ",Math.floor(t.data.duration/60),"m"]}),t.data.productivity_score&&l.jsxs("p",{className:"text-[10px] text-[#d4a373]",children:["> Productivity Index: ",t.data.productivity_score,"%"]})]});default:return l.jsx("p",{className:"text-[12px] text-white",children:t.data.description||JSON.stringify(t.data)})}}function KS({feed:t=[],selectedSource:e,onSelectSource:n,selectedType:i,onSelectType:r,searchQuery:s,onSearchChange:a,onExport:o,onExecuteCommand:c,onOpenIPodWithTrack:u}){const[h,p]=ie.useState(null),d=[{id:"all",label:"ALL SOURCES"},{id:"github",label:"GITHUB"},{id:"spotify",label:"SPOTIFY"},{id:"strava",label:"STRAVA"},{id:"oura",label:"OURA SLEEP"},{id:"rescuetime",label:"RESCUETIME"}],m=[{value:"",label:"ALL EVENT TYPES"},{value:"commit",label:"COMMITS"},{value:"pull_request",label:"PULL REQUESTS"},{value:"issue",label:"ISSUES"},{value:"music",label:"MUSIC STREAMS"},{value:"workout",label:"WORKOUTS"},{value:"sleep",label:"SLEEP CYCLES"},{value:"time_tracking",label:"PRODUCTIVITY"}];return l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"win-window win-bevel-outset p-[2px] w-full shadow-[4px_4px_0px_rgba(0,0,0,0.6)]",children:[l.jsxs("div",{className:"win-titlebar flex justify-between items-center px-2 py-1 bg-[#000080]",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px] text-white",children:"tune"}),l.jsx("span",{className:"font-code-terminal text-[13px] font-bold text-white tracking-wide",children:"STREAM.CONTROLS & SEARCH"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-gray-300 font-code-terminal",children:[l.jsxs("span",{children:[t.length," EVENTS LOADED"]}),l.jsxs("div",{className:"flex gap-1 ml-2",children:[l.jsx("button",{onClick:()=>{Me.playClick(),p(!0)},className:"win-bevel-button px-1.5 py-0.5 bg-gray-200 hover:bg-white text-black font-bold text-[9px]",title:"Expand all log cards",children:"+ EXPAND ALL"}),l.jsx("button",{onClick:()=>{Me.playClick(),p(!1)},className:"win-bevel-button px-1.5 py-0.5 bg-gray-200 hover:bg-white text-black font-bold text-[9px]",title:"Collapse all log cards",children:"- COLLAPSE ALL"})]})]})]}),l.jsxs("div",{className:"p-3 bg-[#c0c0c0] font-code-terminal text-code-terminal space-y-2.5",children:[l.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-[240px]",children:[l.jsx("span",{className:"font-bold text-black text-[12px]",children:"> SEARCH:"}),l.jsx("input",{type:"text",value:s,onChange:x=>a(x.target.value),placeholder:"Search commits, tracks, workouts...",className:"win-bevel-inset bg-white text-black font-code-terminal text-[12px] px-2 py-1 flex-1 focus:outline-none focus:ring-1 focus:ring-black"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("select",{value:i||"",onChange:x=>{Me.playClick(),r(x.target.value)},className:"win-bevel-inset bg-white text-black font-code-terminal text-[12px] px-2 py-1 focus:outline-none",children:m.map(x=>l.jsx("option",{value:x.value,children:x.label},x.value))}),l.jsx("button",{onClick:()=>{Me.playClick(),o("json")},className:"win-bevel-button bg-gray-300 text-black font-bold text-[11px] px-2.5 py-1 hover:bg-white cursor-pointer",title:"Export Feed as JSON",children:"JSON"}),l.jsx("button",{onClick:()=>{Me.playClick(),o("csv")},className:"win-bevel-button bg-gray-300 text-black font-bold text-[11px] px-2.5 py-1 hover:bg-white cursor-pointer",title:"Export Feed as CSV",children:"CSV"})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-1.5 items-center pt-2 border-t border-gray-400",children:[l.jsx("span",{className:"font-bold text-black text-[11px] mr-1",children:"> FILTER:"}),d.map(x=>{const E=e===null&&x.id==="all"||e===x.id;return l.jsx("button",{onClick:()=>{Me.playClick(),n(x.id==="all"?null:x.id)},className:`win-bevel-button text-[11px] font-bold px-2.5 py-0.5 cursor-pointer ${E?"bg-black text-secondary-container":"bg-gray-200 text-black hover:bg-white"}`,children:x.label},x.id)})]})]})]}),!t||t.length===0?l.jsxs("div",{className:"win-window win-bevel-outset p-[2px] mx-auto mt-8 max-w-lg",children:[l.jsx("div",{className:"win-titlebar flex justify-between items-center px-2 py-1 bg-error-container",children:l.jsx("span",{className:"font-code-terminal text-[14px] font-bold tracking-wide text-white",children:"NO MATCHING LIFE EVENTS"})}),l.jsxs("div",{className:"p-window-padding font-code-terminal text-code-terminal",children:[l.jsx("p",{className:"font-bold text-black",children:"> NO EVENTS FOUND FOR GIVEN FILTER PARAMETERS."}),l.jsx("p",{className:"text-gray-700 mt-1",children:"> TRY CLEARING SEARCH OR TOGGLING DEMO MODE."})]})]}):l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 relative",children:t.map((x,E)=>l.jsx(XS,{event:x,index:E,onExecuteCommand:c,onOpenIPodWithTrack:u,forceExpand:h},x.id))})]})}function ki({id:t,title:e,children:n,isOpen:i=!0,isMinimized:r=!1,onClose:s,onMinimize:a,onFocus:o,zIndex:c=10,initialPosition:u={x:0,y:0},width:h="max-w-2xl",titleBg:p="bg-[#000080]",headerIcon:d="window",className:m=""}){const[x,E]=ie.useState(u),[g,f]=ie.useState(!1),[_,b]=ie.useState(!1),[S,w]=ie.useState(!1),T=ie.useRef({x:0,y:0}),A=ie.useRef({x:0,y:0});ie.useEffect(()=>{const P=()=>{w(window.innerWidth<768)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const v=(P,W)=>{_||S||(f(!0),T.current={x:P,y:W},A.current={...x},o&&o(t),Me.playClick())},C=P=>{P.button===0&&v(P.clientX,P.clientY)},N=P=>{if(S)return;const W=P.touches[0];W&&v(W.clientX,W.clientY)};if(ie.useEffect(()=>{const P=F=>{if(!g||S)return;const k=F.clientX-T.current.x,z=F.clientY-T.current.y;E({x:Math.max(-100,A.current.x+k),y:Math.max(-30,A.current.y+z)})},W=F=>{if(!g||S)return;const k=F.touches[0];if(k){const z=k.clientX-T.current.x,D=k.clientY-T.current.y;E({x:Math.max(-100,A.current.x+z),y:Math.max(-30,A.current.y+D)})}},Q=()=>{g&&f(!1)};return g&&(window.addEventListener("mousemove",P),window.addEventListener("mouseup",Q),window.addEventListener("touchmove",W),window.addEventListener("touchend",Q)),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",Q),window.removeEventListener("touchmove",W),window.removeEventListener("touchend",Q)}},[g,S]),!i||r)return null;const I=S?{top:"72px",left:"8px",right:"8px",maxHeight:"calc(100vh - 120px)",zIndex:Math.max(50,c)}:_?{top:"80px",left:"16px",right:"16px",zIndex:100}:{transform:`translate3d(${x.x}px, ${x.y}px, 0)`,zIndex:c};return l.jsxs("div",{onClick:()=>{o&&o(t)},style:I,className:`win-window win-bevel-outset p-[2px] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] transition-shadow duration-150 flex flex-col ${S||_?"fixed":"relative"} ${S?"w-auto max-w-full":h} ${m}`,children:[l.jsxs("div",{onMouseDown:C,onTouchStart:N,className:`win-titlebar flex justify-between items-center px-2 py-1 select-none ${S?"cursor-default":"cursor-move"} ${p}`,children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[d&&l.jsx("span",{className:"material-symbols-outlined text-[15px] text-white flex-shrink-0",children:d}),l.jsx("span",{className:"font-code-terminal text-[11px] sm:text-[13px] font-bold tracking-wide text-white truncate",children:e})]}),l.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[!S&&a&&l.jsx("button",{onClick:P=>{P.stopPropagation(),Me.playClick(),a(t)},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[10px] hover:bg-white",title:"Minimize",children:"_"}),!S&&l.jsx("button",{onClick:P=>{P.stopPropagation(),Me.playClick(),b(!_)},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[10px] hover:bg-white",title:"Maximize",children:_?"❐":"□"}),s&&l.jsx("button",{onClick:P=>{P.stopPropagation(),Me.playClick(),s(t)},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[12px] hover:bg-red-400 hover:text-white",title:"Close",children:"✕"})]})]}),l.jsx("div",{className:"p-window-padding bg-[#c0c0c0] font-code-terminal text-code-terminal text-black overflow-y-auto flex-1 max-h-[75vh] sm:max-h-none",children:n})]})}const Sd=[{id:"FLASHING_LIGHTS",track_name:"Flashing Lights",artist:"Kanye West",album:"Graduation",youtubeId:"3JhLIL9InyY",coverArt:"https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"},{id:"K",track_name:"K.",artist:"Cigarettes After Sex",album:"Cigarettes After Sex",youtubeId:"L4sbCxiqyXI",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/8c/Cigarettes_After_Sex_%28album%29.png"},{id:"FUTURE_CLUB",track_name:"Future Club",artist:"Perturbator",album:"Dangerous Days",youtubeId:"cBqGE5N78XA",coverArt:"https://upload.wikimedia.org/wikipedia/en/2/2f/Perturbator_Dangerous_Days.jpg"},{id:"PACIFIC_COAST_HIGHWAY",track_name:"Pacific Coast Highway",artist:"Kavinsky",album:"OutRun",youtubeId:"-FSweMmcbO0",coverArt:"https://upload.wikimedia.org/wikipedia/en/f/f6/Kavinsky_OutRun.jpg"},{id:"ODYSSEY",track_name:"Odyssey",artist:"HOME",album:"Odyssey",youtubeId:"1-xl8S_E9bY",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/87/Home_-_Odyssey_album_cover.png"},{id:"GET_LUCKY",track_name:"Get Lucky",artist:"Daft Punk ft. Pharrell Williams",album:"Random Access Memories",youtubeId:"h5EofwRzit0",coverArt:"https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"},{id:"BLINDING_LIGHTS",track_name:"Blinding Lights",artist:"The Weeknd",album:"After Hours",youtubeId:"4NRXx6U8ABQ",coverArt:"https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"},{id:"STARBOY",track_name:"Starboy",artist:"The Weeknd ft. Daft Punk",album:"Starboy",youtubeId:"34Na4j8HLjc",coverArt:"https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"},{id:"APOCALYPSE",track_name:"Apocalypse",artist:"Cigarettes After Sex",album:"Cigarettes After Sex",youtubeId:"sElE_BfQ67s",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/8c/Cigarettes_After_Sex_%28album%29.png"},{id:"GHOST_TOWN",track_name:"Ghost Town",artist:"Kanye West",album:"ye",youtubeId:"k9bU9_1s3dI",coverArt:"https://upload.wikimedia.org/wikipedia/en/4/44/Kanye_West_-_Ye.png"},{id:"NIGHTCALL",track_name:"Nightcall",artist:"Kavinsky",album:"Drive (Original Soundtrack)",youtubeId:"MV_3Dpw-BRY",coverArt:"https://upload.wikimedia.org/wikipedia/en/2/2f/Kavinsky_Nightcall.jpg"},{id:"RESONANCE",track_name:"Resonance",artist:"HOME",album:"Odyssey",youtubeId:"8GW6sLrK40k",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/87/Home_-_Odyssey_album_cover.png"},{id:"TECH_NOIR",track_name:"Tech Noir",artist:"GUNSHIP",album:"Gunship",youtubeId:"-EDt8f90hYI",coverArt:"https://upload.wikimedia.org/wikipedia/en/d/d7/Gunship_album_cover.jpg"},{id:"AS_IT_WAS",track_name:"As It Was",artist:"Harry Styles",album:"Harry's House",youtubeId:"H5v3kku4y6Q",coverArt:"https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_As_It_Was.png"},{id:"HEAT_WAVES",track_name:"Heat Waves",artist:"Glass Animals",album:"Dreamland",youtubeId:"mRD0-GxqHVo",coverArt:"https://upload.wikimedia.org/wikipedia/en/1/14/Glass_Animals_-_Dreamland.png"},{id:"LOFI_BEATS",track_name:"Late Night Coding",artist:"Lofi Girl / ChilledCow",album:"Study Session Memories",youtubeId:"jfKfPfyJRdk",coverArt:"https://upload.wikimedia.org/wikipedia/en/1/13/Lofi_girl_logo.jpg"}];function qS({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,sources:a=[],onSetFilter:o,onToggleDemo:c,isDemo:u,onExecuteSearch:h,onTriggerExport:p,onOpenContact:d,onOpenResume:m,onOpenWindow:x,onPlayTrack:E,onReboot:g}){const[f,_]=ie.useState([{text:"OBSOLESCENCE PROTOCOL [Version 4.19.95]",type:"system"},{text:"(C) 1995-2026 DIGITAL ARCHAEOLOGY CORP. ALL RIGHTS RESERVED.",type:"system"},{text:'Type "help" FOR COMMAND MANUAL, "neofetch" FOR SPECS, OR "play apocalypse" FOR AUDIO.',type:"system"}]),[b,S]=ie.useState(""),[w,T]=ie.useState([]),[A,v]=ie.useState(-1),C=ie.useRef(null),N=ie.useRef(null);ie.useEffect(()=>{var P;t&&!e&&((P=C.current)==null||P.focus())},[t,e]),ie.useEffect(()=>{var P;(P=N.current)==null||P.scrollIntoView({behavior:"smooth"})},[f]);const I=P=>{var W,Q;if(P.key==="Enter"){const F=b.trim();if(!F)return;Me.playExec();const k=[...f,{text:`C:\\> ${F}`,type:"input"}];T(te=>[...te,F]),v(-1);const z=F.split(" "),D=z[0].toLowerCase(),j=z.slice(1),Z=j.join(" ").toLowerCase().trim();switch(D){case"help":k.push({text:`=====================================================
  OBSOLESCENCE COMMAND INTERPRETER // COMMAND MANUAL
=====================================================
[SYSTEM & SPECS]
  neofetch / sysinfo  - Output host telemetry & retro ASCII badge
  boot / reboot       - Re-trigger BIOS cold boot sequence
  status              - Query API & gateway infrastructure health
  ping [host]         - Ping gateway endpoint for latency test
  date / time         - Display system synchronization clock

[CAREER & RESUME]
  resume / cv         - Launch ATS-optimized resume viewer
  mail / contact      - Transmit dispatch to rohan.joshi.dev@gmail.com
  whoami / profile    - Query developer bio & academic credentials
  projects            - List software engineering project directory
  skills              - List technical stack & competencies
  directives / todo   - Open interactive System Directives & Goals

[MEDIA & AUDIO]
  play <track_name>   - Play track on 3D Retro iPod (e.g. "play apocalypse")
  ipod / music        - Open retro iPod media player
  memory / gallery    - Open Memory Bank visual GIF artifact cache

[TELEMETRY & DATA]
  stats / metrics     - Display macro-telemetry odometer registers
  filter <source>     - Filter feed (github, spotify, strava, oura, rescuetime, all)
  search <query>      - Search life feed telemetry events
  export [json|csv]   - Download telemetry export payload
  demo [on|off]       - Toggle synthetic demo telemetry mode

[SHELL UTILITIES]
  cat <filename>      - Read file (e.g. "cat resume.txt", "cat config.sys")
  ls / dir            - List files in current working sector
  matrix              - Stream real-time telemetry flux
  sudo <command>      - Execute with superuser privileges
  clear / cls         - Clear terminal display buffer`,type:"output"});break;case"neofetch":case"sysinfo":case"specs":k.push({text:`  .--------------------.   OS      : Obsolescence OS 4.19 (Win95 CRT Hybrid)
  | [x]   OBSOLESCENCE |   HOST    : Reverse Gateway (Node.js 20 / Express)
  | .----------------. |   KERNEL  : x86_64 Darwin / React 18 + Vite 5
  | |  >_            | |   UPTIME  : 99.98% (Fault-Isolated Parallel Engine)
  | |  TELEMETRY OK  | |   MEMORY  : 64.2 MB / 512 MB (TTL Cache Synced)
  | '----------------' |   GRAPHICS: Three.js WebGL CRT Shader @ 60 FPS
  '--------------------'   AUDIO   : Off-Screen SoundCloud Viewport Engine
                           SECURITY: Supabase PostgreSQL RLS Enabled`,type:"output"});break;case"play":if(!Z)k.push({text:`Usage: play <track_name>
Available tracks in DB:
${Sd.map(ae=>`  • ${ae.track_name} (${ae.artist})`).join(`
`)}`,type:"output"});else{const ae=Sd.find(re=>re.track_name.toLowerCase().includes(Z)||re.artist.toLowerCase().includes(Z)||re.id.toLowerCase().includes(Z));ae?(k.push({text:`> ENGAGING AUDIO ENGINE // STREAMING: "${ae.track_name}" by ${ae.artist}...`,type:"output"}),E&&E(ae)):k.push({text:`Track "${Z}" not found in TRACK_DB. Type "play" for tracklist.`,type:"error"})}break;case"ipod":case"music":case"player":k.push({text:"> LAUNCHING RETRO IPOD CLASSIC...",type:"output"}),x&&x("ipod");break;case"ping":k.push({text:`PING api.obsolescence.local (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=1.24 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.98 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=1.05 ms
--- api.obsolescence.local ping statistics ---
3 packets transmitted, 3 received, 0.0% packet loss, min/avg/max = 0.98/1.09/1.24 ms`,type:"output"});break;case"cat":case"type":const te=(W=j[0])==null?void 0:W.toLowerCase();te==="resume.txt"||te==="resume"||te==="cv"?k.push({text:`=====================================================
ROHAN JOSHI — SOFTWARE DEVELOPER INTERN @ ICM
=====================================================
Location: Bengaluru, Karnataka • Phone: +91 6361195409
Email: rohan.joshi.dev@gmail.com
GitHub: github.com/rohanrjoshii • LinkedIn: linkedin.com/in/rohanrj1008
Education: BCA @ PES University (2023 - 2026)

EXPERIENCE:
• Software Developer Intern @ India Christian Matrimony (Dec 2025 - Present)
  - Full-stack matrimonial architecture with 15+ screens, Supabase RLS, FastAPI, React.

PROJECTS:
• Nimbus: macOS Dynamic Island clone (Swift, SwiftUI, AppKit, Raw Kernel APIs)
• FilterIQ: Smart NLP Data Filtering (FastAPI, Pandas, Docker)
• Satya: AI Deepfake Detection platform with 90%+ prediction accuracy (PyTorch, React)

Type "resume" to open the interactive ATS visualizer.`,type:"output"}):te==="config.sys"?k.push({text:`FILES=40
BUFFERS=20
DEVICE=C:\\DOS\\HIMEM.SYS
DOS=HIGH,UMB
DEVICEHIGH=C:\\GATEWAY\\TTL_CACHE.SYS /TTL=180
DEVICEHIGH=C:\\AUDIO\\SOUNDCLOUD_OFFSCREEN.SYS`,type:"output"}):te==="secrets.env"?k.push({text:`[RESTRICTED ACCESS]
SUPABASE_SERVICE_ROLE_KEY=••••••••••••••••••••••••••••••••
FASTAPI_SECRET_KEY=••••••••••••••••••••••••••••••••
GITHUB_PERSONAL_ACCESS_TOKEN=••••••••••••••••••••••••••••••••
Access denied to unauthenticated telemetry clients.`,type:"output"}):k.push({text:`File not found: "${j.join(" ")}". Available files: resume.txt, config.sys, secrets.env`,type:"error"});break;case"ls":case"dir":k.push({text:`DIRECTORY OF C:\\
  <DIR>          PROJECTS
  <DIR>          MEMORY_CACHE
  <DIR>          AUDIO_DB
  -rw-r--r--     resume.txt       (3.4 KB)
  -rw-r--r--     config.sys       (128 B)
  -rw-------     secrets.env      (256 B)
  4 File(s), 3 Dir(s)  52,428,800 bytes free`,type:"output"});break;case"directives":case"todo":case"plans":case"checklist":k.push({text:`SYSTEM DIRECTIVES & PROTOCOL MILESTONES:
  [X] Build & Deploy Obsolescence Protocol Reverse Gateway (DONE)
  [X] Ship Production Supabase RLS & Matrimonial UI @ ICM (DONE)
  [X] Engineer Nimbus macOS Dynamic Island with Raw Kernel APIs (DONE)
  [X] Solve 196+ Algorithmic Benchmarks & Maintain 39d Streak (DONE)
  [ ] Graduate BCA @ PES University, Bengaluru (May 2026)
  [ ] Target 500+ LeetCode Solved & Knight Tier Benchmark
  [ ] Secure High-Impact Full-Stack / Distributed SWE Role
  [ ] Open-Source Retro Telemetry OS Component Framework

> LAUNCHING DIRECTIVES WINDOW...`,type:"output"}),x&&x("directives");break;case"memory":case"gifs":case"gallery":case"cache":case"art":k.push({text:`DIRECTORY C:\\MEMORY_CACHE\\SECTOR_07:
  [MEM_01] SYSTEM_BOOT_SEQUENCE.GIF     (1.2 MB · 0x8F9A · [CORE_OS])
  [MEM_02] NEURAL_NET_TRAINING.GIF      (890 KB · 0x3C4B · [AI_ML])
  [MEM_03] GHIBLI_TRAIN_COASTAL.GIF     (1.8 MB · 0x9E21 · [NOSTALGIA])
  [MEM_04] RETRO_CYBER_MATRIX.GIF       (1.4 MB · 0x55FA · [CORE_OS])
  [MEM_05] DOCKER_CONTAINER_CLUSTER.GIF (950 KB · 0x1A8E · [INFRA])
  [MEM_06] GHIBLI_STUDY_DESK.GIF        (2.1 MB · 0x4D0C · [NOSTALGIA])

> LAUNCHING MEMORY BANK VIEWFINDER...`,type:"output"}),x&&x("memory");break;case"resume":case"cv":k.push({text:"> LAUNCHING ATS RESUME VIEWER...",type:"output"}),m&&m();break;case"mail":case"email":case"contact":case"hire":case"transmit":case"relay":k.push({text:`=====================================================
  SYS.TRANSMITTER // PGP_SECURE_RELAY [PORT_25]
=====================================================
  [DESTINATION] Rohan Joshi (Full-Stack & AI Developer)
  [LOCATION]    Bengaluru, Karnataka · rohan.joshi.dev@gmail.com
  [ENCRYPTION]  PGP SHA-256 Relay Buffer
  [STATUS]      ARMED // READY TO DISPATCH

> LAUNCHING SECURE TRANSMISSION WINDOW...`,type:"output"}),x?x("transmission"):d&&d();break;case"exec":const se=(Q=j[0])==null?void 0:Q.toLowerCase();se==="mail"||se==="contact"?(d&&d(),k.push({text:"> DISPATCH TRANSMITTED TO CONTACT ROUTE.",type:"output"})):se==="resume"||se==="cv"?(m&&m(),k.push({text:"> ATS RESUME VIEWER LAUNCHED.",type:"output"})):k.push({text:`Unknown exec target: "${j.join(" ")}". Try "exec mail" or "exec resume".`,type:"error"});break;case"whoami":case"profile":k.push({text:`ROHAN JOSHI // FULL-STACK & AI DEVELOPER
--------------------------------------------------
Role: Software Developer Intern @ India Christian Matrimony (ICM)
Education: BCA @ PES University, Bengaluru (Aug 2023 – May 2026)
Location: Bengaluru, Karnataka • +91 6361195409
Email: rohan.joshi.dev@gmail.com
GitHub: https://github.com/rohanrjoshii
LinkedIn: https://linkedin.com/in/rohanrj1008`,type:"output"});break;case"projects":k.push({text:`PROJECT DIRECTORY C:\\PROJECTS:
  1. [Nimbus]      macOS Dynamic Island clone (Swift, SwiftUI, AppKit, Kernel APIs)
  2. [FilterIQ]    Smart NLP Data Filtering app (Python, FastAPI, Pandas, Docker)
  3. [Satya]       AI Deepfake Detection platform 90%+ acc (React, FastAPI, PyTorch)
  4. [BizzConnect] B2B Networking app with K-Means clustering (Flutter, Firebase)
  -rw-r--r--       resume.txt (Type "cat resume.txt" or "resume" to open)`,type:"output"});break;case"skills":k.push({text:`TECHNICAL SKILLS:
  • Frontend:    React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite
  • Backend:     FastAPI, Node.js, Firebase, REST APIs
  • Databases:   PostgreSQL (Supabase), MySQL, Firestore
  • AI / ML:     PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP
  • Languages:   Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS
  • Tools:       Docker, Git, GitHub Actions, CI/CD`,type:"output"});break;case"sudo":Me.playError(),k.push({text:`Permission denied: user 'recruiter' is not in the sudoers file.
This incident will be reported to Rohan Joshi.`,type:"error"});break;case"matrix":k.push({text:`01001111 01000010 01010011 01001111 01001100 01000101 01010011 01000011 01000101 01001110 01000011 01000101
TELEMETRY FLUX SYNCHRONIZED:
1001001 01001100 01001001 01000110 01000101 00100000 01000110 01000101 01000101 01000100
[STREAM STATUS: NOMINAL]`,type:"output"});break;case"status":const Ae=a.map(ae=>`  [${ae.name.toUpperCase()}] Enabled: ${ae.enabled?"YES":"NO"} | Healthy: ${ae.healthy?"OK":"OFFLINE"}`);k.push({text:`SYSTEM SOURCE DIAGNOSTICS:
${Ae.join(`
`)||"No sources registered."}
Gateway TTL Cache: ACTIVE
Synthetic Demo Fallback: ${u?"ENABLED":"DISABLED"}`,type:"output"});break;case"demo":j[0]==="off"?(c(!1),k.push({text:"> SYNTHETIC DEMO MODE DISABLED.",type:"output"})):(c(!0),k.push({text:"> SYNTHETIC DEMO MODE ENABLED WITH RICH SAMPLE STREAMS.",type:"output"}));break;case"filter":const Xe=j[0]?j[0].toLowerCase():"all";o(Xe==="all"?null:Xe),k.push({text:`> FEED SOURCE FILTER SET TO: ${Xe.toUpperCase()}`,type:"output"});break;case"search":const Fe=j.join(" ");Fe?(h(Fe),k.push({text:`> SEARCH QUERY APPLIED: "${Fe}"`,type:"output"})):(h(""),k.push({text:"> SEARCH QUERY CLEARED.",type:"output"}));break;case"stats":case"metrics":case"odometer":case"telemetry":k.push({text:`=====================================================
  SYS.TELEMETRY // MACRO_METRICS_AGGREGATOR [ODOMETER]
=====================================================
  [0x70] LIFETIME_COMMITS   : 1,420 OPS  [SYNCED]
  [0x71] DISTANCE_CYCLED    : 840.5 KM   [ACTIVE]
  [0x72] TOTAL_CODE_HOURS   : 2,150 HRS  [TRACKED]
  [0x73] BOOKS_&_PAPERS     : 52 VOL     [PARSED]
  [0x74] ALGO_BENCHMARKS    : 196 PTS    [ACTIVE - 39d Streak]
  [0x75] AUDIO_STREAMS      : 3,840 TRK  [STREAMED]
-----------------------------------------------------
  REGISTERS STATUS: 6/6 OK · POLLING: ACTIVE (2800ms)
=====================================================`,type:"output"});break;case"export":const K=j[0]==="csv"?"csv":"json";p(K),k.push({text:`> INITIATING FEED EXPORT [FORMAT: ${K.toUpperCase()}]...`,type:"output"});break;case"boot":case"reboot":case"restart":k.push({text:`=====================================================
  INITIATING COLD SYSTEM REBOOT // OBSOLESCENCE KERNEL
=====================================================
Flushing TTL caches...
Resetting WebGL pipeline...
Executing hardware restart in 500ms...`,type:"output"}),g&&setTimeout(g,600);break;case"clear":case"cls":_([]),S("");return;case"date":case"time":k.push({text:`Current System Time: ${new Date().toString()}`,type:"output"});break;default:Me.playError(),k.push({text:`Bad command or file name: "${F}". Type "help" or "neofetch" for commands.`,type:"error"});break}_(k),S("")}else if(P.key==="ArrowUp"){if(w.length>0){const F=A+1<w.length?A+1:A;v(F),S(w[w.length-1-F]||"")}}else if(P.key==="ArrowDown")if(A>0){const F=A-1;v(F),S(w[w.length-1-F]||"")}else A===0&&(v(-1),S(""))};return l.jsx(ki,{id:"terminal",title:"C:\\WINDOWS\\SYSTEM32\\CMD.EXE - [OBSOLESCENCE CLI]",isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,width:"max-w-3xl",titleBg:"bg-black",headerIcon:"terminal",initialPosition:{x:40,y:40},children:l.jsxs("div",{className:"bg-black p-4 font-code-terminal text-code-terminal text-[#00ff00] h-96 overflow-y-auto space-y-2 border-t-2 border-b-2 border-[#333]",onClick:()=>{var P;return(P=C.current)==null?void 0:P.focus()},children:[f.map((P,W)=>l.jsxs("div",{className:"leading-tight break-words",children:[P.type==="system"&&l.jsx("p",{className:"text-[#888888]",children:P.text}),P.type==="input"&&l.jsx("p",{className:"text-white font-bold",children:P.text}),P.type==="output"&&l.jsx("pre",{className:"text-[#00ff00] font-code-terminal whitespace-pre-wrap",children:P.text}),P.type==="error"&&l.jsx("p",{className:"text-red-500 font-bold",children:P.text})]},W)),l.jsxs("div",{className:"flex items-center gap-1 text-white",children:[l.jsx("span",{children:"C:\\>"}),l.jsx("input",{ref:C,type:"text",value:b,onChange:P=>S(P.target.value),onKeyDown:I,className:"flex-1 bg-transparent text-[#00ff00] font-code-terminal outline-none border-none p-0 focus:ring-0",autoFocus:!0})]}),l.jsx("div",{ref:N})]})})}const $p=[{id:"1",type:"github_commit",source:"github",timestamp:new Date(Date.now()-2*60*60*1e3).toISOString(),title:"Pushed 3 commits to obsolescence-protocol",description:"feat: Add real-time telemetry dashboard with retro UI",metadata:{repo:"obsolescence-protocol",commits:3,language:"TypeScript"}},{id:"2",type:"leetcode_solved",source:"leetcode",timestamp:new Date(Date.now()-5*60*60*1e3).toISOString(),title:"Solved: Two Sum",description:"Difficulty: Medium • Runtime: 52ms • Memory: 41.2MB",metadata:{difficulty:"Medium",runtime:"52ms",language:"Python"}},{id:"3",type:"spotify_track",source:"spotify",timestamp:new Date(Date.now()-8*60*60*1e3).toISOString(),title:'Listened to "Nightcall" by Kavinsky',description:"Album: Drive (Original Soundtrack) • Played 3 times",metadata:{track_name:"Nightcall",artist:"Kavinsky",album:"Drive (Original Soundtrack)",youtubeId:"MV_3Dpw-BRY",coverArt:"https://upload.wikimedia.org/wikipedia/en/2/2f/Kavinsky_Nightcall.jpg"}},{id:"4",type:"github_commit",source:"github",timestamp:new Date(Date.now()-12*60*60*1e3).toISOString(),title:"Pushed 5 commits to nimbus-macos",description:"feat: Add Dynamic Island morphing animations",metadata:{repo:"nimbus-macos",commits:5,language:"Swift"}},{id:"5",type:"spotify_track",source:"spotify",timestamp:new Date(Date.now()-24*60*60*1e3).toISOString(),title:'Listened to "Resonance" by HOME',description:"Album: Odyssey • Played 7 times",metadata:{track_name:"Resonance",artist:"HOME",album:"Odyssey",youtubeId:"8GW6sLrK40k",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/87/Home_-_Odyssey_album_cover.png"}},{id:"6",type:"leetcode_solved",source:"leetcode",timestamp:new Date(Date.now()-36*60*60*1e3).toISOString(),title:"Solved: Binary Tree Level Order Traversal",description:"Difficulty: Medium • Runtime: 48ms • Memory: 39.8MB",metadata:{difficulty:"Medium",runtime:"48ms",language:"Python"}}],$S=[{id:"github",name:"GitHub",type:"code",enabled:!0,icon:"code",color:"#81b29a"},{id:"leetcode",name:"LeetCode",type:"code",enabled:!0,icon:"psychology",color:"#d4a373"},{id:"spotify",name:"Spotify",type:"music",enabled:!0,icon:"music_note",color:"#e07a5f"}],ZS={totalActivities:840,commitCount:186,problemsSolved:52,tracksListened:3649,hoursTracked:2150},QS="/api";async function JS({from:t,to:e,sources:n,limit:i=100,search:r,type:s,sort:a="desc",demo:o=!1}){return console.log("Using mock data (backend not available)"),{feed:$p,meta:{isDemo:!0,total:$p.length,message:"Showing demo data. Deploy backend API for live Spotify/LeetCode/GitHub stats."}}}async function eE(){return{sources:$S}}async function tE({from:t,to:e,demo:n=!1}={}){return{stats:ZS}}function nE({format:t="json",from:e,to:n,sources:i,search:r,type:s,demo:a=!1}={}){const o=new URLSearchParams;return o.append("format",t),e&&o.append("from",e.toISOString()),n&&o.append("to",n.toISOString()),i&&i.length>0&&o.append("sources",i.join(",")),r&&o.append("search",r),s&&o.append("type",s),a&&o.append("demo","true"),`${QS}/export?${o}`}function iE({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,isDemo:a}){const[o,c]=ie.useState(null),[u,h]=ie.useState(!0);ie.useEffect(()=>{t&&p()},[t,a]);const p=async()=>{try{h(!0);const d=await tE({demo:a});c(d)}catch(d){console.error("Failed to load stats:",d)}finally{h(!1)}};return l.jsx(ki,{id:"stats",title:"SYSTEM METRICS & ANALYTICS - [LIFE MONITOR]",isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,width:"max-w-4xl",titleBg:"bg-[#008080]",headerIcon:"analytics",initialPosition:{x:60,y:50},children:u?l.jsxs("div",{className:"p-8 text-center font-code-terminal",children:[l.jsx("p",{children:"> COMPUTING SYSTEM METRICS..."}),l.jsx("p",{className:"text-secondary-container mt-2",children:"> AGGREGATING DATA STREAMS..."})]}):o?l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-secondary-container font-bold",children:"> OBSOLESCENCE REPORT"}),l.jsx("p",{className:"text-[11px] text-gray-400",children:"DATA STREAM METRICS OVERVIEW"})]}),l.jsx("button",{onClick:p,className:"win-bevel-button bg-gray-300 text-black px-3 py-1 text-[12px] font-bold",children:"REFRESH STATS"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-code-terminal text-[13px]",children:[l.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[l.jsx("span",{className:"material-symbols-outlined text-[#000080]",children:"code"}),l.jsx("span",{className:"font-bold text-[#000080]",children:"KNOWLEDGE & CODE (GITHUB)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Total Commits:"}),l.jsx("span",{className:"font-bold text-black",children:o.github.commits})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Pull Requests / Issues:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.github.pullRequests," PRs / ",o.github.issues," Issues"]})]}),l.jsxs("div",{className:"pt-2 border-t border-gray-200",children:[l.jsx("p",{className:"text-[11px] font-bold text-gray-700",children:"TOP REPOSITORIES:"}),o.github.topRepos.slice(0,3).map((d,m)=>l.jsxs("div",{className:"flex justify-between text-[11px] text-gray-800",children:[l.jsxs("span",{className:"truncate max-w-[200px]",children:["> ",d.repo]}),l.jsxs("span",{children:[d.count," events"]})]},m))]})]}),l.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[l.jsx("span",{className:"material-symbols-outlined text-[#800000]",children:"bed"}),l.jsx("span",{className:"font-bold text-[#800000]",children:"SLEEP RECOVERY (OURA)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Average Duration:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.sleep.avgDurationHours," hrs/night"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Average Efficiency:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.sleep.avgEfficiency,"%"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Sleep Score:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.sleep.avgScore," / 100"]})]}),l.jsx("div",{className:"w-full bg-gray-300 h-4 win-bevel-inset overflow-hidden mt-2",children:l.jsxs("div",{className:"bg-[#800000] h-full text-white text-[9px] flex items-center justify-center font-bold",style:{width:`${Math.min(100,o.sleep.avgScore)}%`},children:[o.sleep.avgScore,"% RECOVERY"]})})]}),l.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[l.jsx("span",{className:"material-symbols-outlined text-[#008000]",children:"directions_run"}),l.jsx("span",{className:"font-bold text-[#008000]",children:"MOVEMENT & FITNESS (STRAVA)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Total Workouts:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.workouts.totalWorkouts," activities"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Total Distance:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.workouts.totalDistanceKm," km"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Total Calories Burned:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.workouts.totalCalories," kcal"]})]})]}),l.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[l.jsx("span",{className:"material-symbols-outlined text-[#008080]",children:"schedule"}),l.jsx("span",{className:"font-bold text-[#008080]",children:"PRODUCTIVITY (RESCUETIME)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Productive Hours:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.timeTracking.productiveHours," hrs"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Distracting Hours:"}),l.jsxs("span",{className:"font-bold text-black",children:[o.timeTracking.distractingHours," hrs"]})]}),l.jsx("div",{className:"w-full bg-gray-300 h-4 win-bevel-inset overflow-hidden mt-2",children:l.jsxs("div",{className:"bg-[#008080] h-full text-white text-[9px] flex items-center justify-center font-bold",style:{width:`${Math.min(100,o.timeTracking.productivityScore)}%`},children:[o.timeTracking.productivityScore,"% PRODUCTIVE"]})})]})]})]}):l.jsx("p",{className:"text-error font-bold",children:"> UNABLE TO GENERATE STATS SUMMARY."})})}function rE({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,sources:a=[],isDemo:o,onToggleDemo:c,onRefreshSources:u}){return l.jsx(ki,{id:"sources",title:"SYSTEM CONNECTIONS - [API SOURCE MANAGER]",isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,width:"max-w-xl",titleBg:"bg-[#800080]",headerIcon:"hub",initialPosition:{x:80,y:70},children:l.jsxs("div",{className:"space-y-4 font-code-terminal text-[13px]",children:[l.jsxs("div",{className:"bg-black text-white p-3 win-bevel-outset flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-secondary-container font-bold",children:"> SYNTHETIC DEMO MODE"}),l.jsx("p",{className:"text-[11px] text-gray-400",children:"Generate rich sample streams when APIs are unconfigured"})]}),l.jsx("button",{onClick:()=>{Me.playClick(),c(!o)},className:`win-bevel-button px-4 py-1 font-bold ${o?"bg-secondary-container text-black":"bg-gray-300 text-black"}`,children:o?"ENABLED":"DISABLED"})]}),l.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-3",children:[l.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 pb-2",children:[l.jsx("span",{className:"font-bold text-black",children:"> INTEGRATED SOURCES STATUS"}),l.jsx("button",{onClick:()=>{Me.playClick(),u()},className:"win-bevel-button bg-gray-200 text-black px-2 py-1 text-[11px] font-bold hover:bg-gray-300",children:"PING API STATUS"})]}),l.jsx("div",{className:"space-y-2",children:a.length===0?l.jsx("p",{className:"text-gray-500 italic",children:"> Querying sources..."}):a.map(h=>l.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-100 win-bevel-inset text-[12px]",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:`w-3 h-3 rounded-full border border-black ${h.healthy?"bg-secondary-container":h.enabled?"bg-yellow-400":"bg-red-500"}`}),l.jsx("span",{className:"font-bold uppercase text-black",children:h.name})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"text-[10px] text-gray-600",children:["ENV: ",h.enabled?"CONFIGURED":"NOT SET"]}),l.jsx("span",{className:`px-2 py-0.5 font-bold text-[10px] uppercase ${h.healthy?"bg-black text-secondary-container":"bg-red-800 text-white"}`,children:h.healthy?"HEALTHY":"OFFLINE"})]})]},h.name))})]}),l.jsxs("div",{className:"p-3 bg-[#e0e0e0] win-bevel-inset text-[11px] text-black space-y-1",children:[l.jsx("p",{className:"font-bold text-[#000080]",children:"> HOW TO CONNECT REAL API TOKENS:"}),l.jsx("p",{children:"• GitHub: Set GITHUB_TOKEN & GITHUB_USERNAME in .env"}),l.jsx("p",{children:"• Spotify: Set SPOTIFY_ACCESS_TOKEN with user-read-recently-played scope"}),l.jsx("p",{children:"• Strava: Set STRAVA_ACCESS_TOKEN in .env"}),l.jsx("p",{children:"• Oura: Set OURA_ACCESS_TOKEN in .env"}),l.jsx("p",{children:"• RescueTime: Set RESCUETIME_API_KEY in .env"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="185",sE=0,Zp=1,aE=2,ol=1,oE=2,ga=3,pr=0,pn=1,li=2,Ri=0,Ns=1,Qp=2,Jp=3,em=4,lE=5,Ar=100,cE=101,uE=102,dE=103,fE=104,hE=200,pE=201,mE=202,xE=203,Ed=204,bd=205,gE=206,vE=207,_E=208,yE=209,SE=210,EE=211,bE=212,ME=213,wE=214,Md=0,wd=1,Td=2,zs=3,Ad=4,Cd=5,Rd=6,Nd=7,v0=0,TE=1,AE=2,hi=0,_0=1,y0=2,S0=3,E0=4,b0=5,M0=6,w0=7,T0=300,Hr=301,Gs=302,Xc=303,Yc=304,hc=306,Pd=1e3,Ai=1001,Id=1002,Ht=1003,CE=1004,Mo=1005,Zt=1006,Kc=1007,Ir=1008,Dn=1009,A0=1010,C0=1011,Xa=1012,ch=1013,xi=1014,ci=1015,Oi=1016,uh=1017,dh=1018,Ya=1020,R0=35902,N0=35899,P0=1021,I0=1022,Yn=1023,Ui=1026,Dr=1027,D0=1028,fh=1029,Vr=1030,hh=1031,ph=1033,ll=33776,cl=33777,ul=33778,dl=33779,Dd=35840,Ld=35841,Od=35842,Ud=35843,Fd=36196,kd=37492,Bd=37496,zd=37488,Gd=37489,zl=37490,Hd=37491,Vd=37808,jd=37809,Wd=37810,Xd=37811,Yd=37812,Kd=37813,qd=37814,$d=37815,Zd=37816,Qd=37817,Jd=37818,ef=37819,tf=37820,nf=37821,rf=36492,sf=36494,af=36495,of=36283,lf=36284,Gl=36285,cf=36286,RE=3200,tm=0,NE=1,er="",Rn="srgb",Hl="srgb-linear",Vl="linear",it="srgb",Qr=7680,nm=519,PE=512,IE=513,DE=514,mh=515,LE=516,OE=517,xh=518,UE=519,im=35044,rm="300 es",ui=2e3,jl=2001;function FE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kE(){const t=Wl("canvas");return t.style.display="block",t}const sm={};function am(...t){const e="THREE."+t.shift();console.log(e,...t)}function L0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=L0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=L0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ps(...t){const e=t.join(" ");e in sm||(sm[e]=!0,Ue(...t))}function BE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zE={[Md]:wd,[Td]:Rd,[Ad]:Nd,[zs]:Cd,[wd]:Md,[Rd]:Td,[Nd]:Ad,[Cd]:zs};class Yr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,uf=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function GE(t,e){return(t%e+e)%e}function $c(t,e,n){return(1-n)*t+n*e}function sa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yh=class yh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;let tt=yh;class Ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(p!==E||c!==d||u!==m||h!==x){let g=c*d+u*m+h*x+p*E;g<0&&(d=-d,m=-m,x=-x,E=-E,g=-g);let f=1-o;if(g<.9995){const _=Math.acos(g),b=Math.sin(_);f=Math.sin(f*_)/b,o=Math.sin(o*_)/b,c=c*f+d*o,u=u*f+m*o,h=h*f+x*o,p=p*f+E*o}else{c=c*f+d*o,u=u*f+m*o,h=h*f+x*o,p=p*f+E*o;const _=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=_,u*=_,h*=_,p*=_}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+c*m-u*d,e[n+1]=c*x+h*d+u*p-o*m,e[n+2]=u*x+h*m+o*d-c*p,e[n+3]=h*x-o*p-c*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),d=c(i/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*p+u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p-d*m*x;break;case"YXZ":this._x=d*h*p+u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p+d*m*x;break;case"ZXY":this._x=d*h*p-u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p-d*m*x;break;case"ZYX":this._x=d*h*p-u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p+d*m*x;break;case"YZX":this._x=d*h*p+u*m*x,this._y=u*m*p+d*h*x,this._z=u*h*x-d*m*p,this._w=u*h*p-d*m*x;break;case"XZY":this._x=d*h*p-u*m*x,this._y=u*m*p-d*h*x,this._z=u*h*x+d*m*p,this._w=u*h*p+d*m*x;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sh=class Sh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*h,this.y=i+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;let G=Sh;const Zc=new G,om=new Ys,Eh=class Eh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],x=i[8],E=r[0],g=r[3],f=r[6],_=r[1],b=r[4],S=r[7],w=r[2],T=r[5],A=r[8];return s[0]=a*E+o*_+c*w,s[3]=a*g+o*b+c*T,s[6]=a*f+o*S+c*A,s[1]=u*E+h*_+p*w,s[4]=u*g+h*b+p*T,s[7]=u*f+h*S+p*A,s[2]=d*E+m*_+x*w,s[5]=d*g+m*b+x*T,s[8]=d*f+m*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,d=o*c-h*s,m=u*s-a*c,x=n*p+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=p*E,e[1]=(r*u-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(h*n-r*c)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*c-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return Ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return Ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Eh.prototype.isMatrix3=!0;let ze=Eh;const Qc=new ze,lm=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cm=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HE(){const t={enabled:!0,workingColorSpace:Hl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Is(r.r),r.g=Is(r.g),r.b=Is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?Vl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hl]:{primaries:e,whitePoint:i,transfer:Vl,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const Ke=HE();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Is(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Jr;class VE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=Wl("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jE=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Jc(r[a].image)):s.push(Jc(r[a]))}else s=Jc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?VE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let WE=0;const eu=new G;class rn extends Yr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ai,r=Ai,s=Zt,a=Ir,o=Yn,c=Dn,u=rn.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Ja(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eu).x}get height(){return this.source.getSize(eu).y}get depth(){return this.source.getSize(eu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=T0;rn.DEFAULT_ANISOTROPY=1;const bh=class bh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],d=c[1],m=c[5],x=c[9],E=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+E)<.1&&Math.abs(x+g)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(u+1)/2,S=(m+1)/2,w=(f+1)/2,T=(h+d)/4,A=(p+E)/4,v=(x+g)/4;return b>S&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=A/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=v/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=A/s,r=v/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-x)*(g-x)+(p-E)*(p-E)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(p-E)/_,this.z=(d-h)/_,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bh.prototype.isVector4=!0;let bt=bh;class XE extends Yr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends XE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class O0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YE extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=class ql{constructor(e,n,i,r,s,a,o,c,u,h,p,d,m,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,p,d,m,x,E,g)}set(e,n,i,r,s,a,o,c,u,h,p,d,m,x,E,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=x,f[11]=E,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ql().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,x=o*h,E=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+x*u,n[5]=d-E*u,n[9]=-o*c,n[2]=E-d*u,n[6]=x+m*u,n[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*p,x=u*h,E=u*p;n[0]=d+E*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=E+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*p,x=u*h,E=u*p;n[0]=d-E*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=E-d*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*p,x=o*h,E=o*p;n[0]=c*h,n[4]=x*u-m,n[8]=d*u+E,n[1]=c*p,n[5]=E*u+d,n[9]=m*u-x,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*u,x=o*c,E=o*u;n[0]=c*h,n[4]=E-d*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+x,n[10]=d-E*p}else if(e.order==="XZY"){const d=a*c,m=a*u,x=o*c,E=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=d*p+E,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=E*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,qE)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ji.crossVectors(i,gn),ji.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ji.crossVectors(i,gn)),ji.normalize(),wo.crossVectors(gn,ji),r[0]=ji.x,r[4]=wo.x,r[8]=gn.x,r[1]=ji.y,r[5]=wo.y,r[9]=gn.y,r[2]=ji.z,r[6]=wo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],x=i[2],E=i[6],g=i[10],f=i[14],_=i[3],b=i[7],S=i[11],w=i[15],T=r[0],A=r[4],v=r[8],C=r[12],N=r[1],I=r[5],P=r[9],W=r[13],Q=r[2],F=r[6],k=r[10],z=r[14],D=r[3],j=r[7],Z=r[11],te=r[15];return s[0]=a*T+o*N+c*Q+u*D,s[4]=a*A+o*I+c*F+u*j,s[8]=a*v+o*P+c*k+u*Z,s[12]=a*C+o*W+c*z+u*te,s[1]=h*T+p*N+d*Q+m*D,s[5]=h*A+p*I+d*F+m*j,s[9]=h*v+p*P+d*k+m*Z,s[13]=h*C+p*W+d*z+m*te,s[2]=x*T+E*N+g*Q+f*D,s[6]=x*A+E*I+g*F+f*j,s[10]=x*v+E*P+g*k+f*Z,s[14]=x*C+E*W+g*z+f*te,s[3]=_*T+b*N+S*Q+w*D,s[7]=_*A+b*I+S*F+w*j,s[11]=_*v+b*P+S*k+w*Z,s[15]=_*C+b*W+S*z+w*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],x=e[3],E=e[7],g=e[11],f=e[15],_=c*m-u*d,b=o*m-u*p,S=o*d-c*p,w=a*m-u*h,T=a*d-c*h,A=a*p-o*h;return n*(E*_-g*b+f*S)-i*(x*_-g*w+f*T)+r*(x*b-E*w+f*A)-s*(x*S-E*T+g*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],x=e[12],E=e[13],g=e[14],f=e[15],_=n*o-i*a,b=n*c-r*a,S=n*u-s*a,w=i*c-r*o,T=i*u-s*o,A=r*u-s*c,v=h*E-p*x,C=h*g-d*x,N=h*f-m*x,I=p*g-d*E,P=p*f-m*E,W=d*f-m*g,Q=_*W-b*P+S*I+w*N-T*C+A*v;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/Q;return e[0]=(o*W-c*P+u*I)*F,e[1]=(r*P-i*W-s*I)*F,e[2]=(E*A-g*T+f*w)*F,e[3]=(d*T-p*A-m*w)*F,e[4]=(c*N-a*W-u*C)*F,e[5]=(n*W-r*N+s*C)*F,e[6]=(g*S-x*A-f*b)*F,e[7]=(h*A-d*S+m*b)*F,e[8]=(a*P-o*N+u*v)*F,e[9]=(i*N-n*P-s*v)*F,e[10]=(x*T-E*S+f*_)*F,e[11]=(p*S-h*T-m*_)*F,e[12]=(o*C-a*I-c*v)*F,e[13]=(n*I-i*C+r*v)*F,e[14]=(E*b-x*w-g*_)*F,e[15]=(h*w-p*b+d*_)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,d=s*u,m=s*h,x=s*p,E=a*h,g=a*p,f=o*p,_=c*u,b=c*h,S=c*p,w=i.x,T=i.y,A=i.z;return r[0]=(1-(E+f))*w,r[1]=(m+S)*w,r[2]=(x-b)*w,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(d+f))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(x+b)*A,r[9]=(g-_)*A,r[10]=(1-(d+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=es.set(r[0],r[1],r[2]).length();const o=es.set(r[4],r[5],r[6]).length(),c=es.set(r[8],r[9],r[10]).length();s<0&&(a=-a),zn.copy(this);const u=1/a,h=1/o,p=1/c;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,n.setFromRotationMatrix(zn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=ui,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let x,E;if(c)x=s/(a-s),E=a*s/(a-s);else if(o===ui)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===jl)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,E;if(c)x=1/(a-s),E=a/(a-s);else if(o===ui)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===jl)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ql.prototype.isMatrix4=!0;let At=ql;const es=new G,zn=new At,KE=new G(0,0,0),qE=new G(1,1,1),ji=new G,wo=new G,gn=new G,um=new At,dm=new Ys;class jr{constructor(e=0,n=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class U0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $E=0;const fm=new G,ts=new Ys,vi=new At,To=new G,aa=new G,ZE=new G,QE=new Ys,hm=new G(1,0,0),pm=new G(0,1,0),mm=new G(0,0,1),xm={type:"added"},JE={type:"removed"},ns={type:"childadded",child:null},tu={type:"childremoved",child:null};class mn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new G,n=new jr,i=new Ys,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new ze}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?To.copy(e):To.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(aa,To,this.up):vi.lookAt(To,aa,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(vi),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),ns.child=e,this.dispatchEvent(ns),ns.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(JE),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,ZE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,QE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new G(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ao extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eb={type:"move"};class nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),f=this._getHandJoint(u,E);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&d>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eb)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ke.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ke.workingColorSpace){if(e=GE(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=iu(a,s,e+1/3),this.g=iu(a,s,e),this.b=iu(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=F0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Ke.workingToColorSpace(qt.copy(this),e),Math.round(qe(qt.r*255,0,255))*65536+Math.round(qe(qt.g*255,0,255))*256+Math.round(qe(qt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ke.workingColorSpace){Ke.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Ke.workingColorSpace){return Ke.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Rn){Ke.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(Co);const i=$c(Wi.h,Co.h,n),r=$c(Wi.s,Co.s,n),s=$c(Wi.l,Co.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new $e;$e.NAMES=F0;class vh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=n}clone(){return new vh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tb extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new G,_i=new G,ru=new G,yi=new G,is=new G,rs=new G,gm=new G,su=new G,au=new G,ou=new G,lu=new bt,cu=new bt,uu=new bt;class Xn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),_i.subVectors(i,n),ru.subVectors(e,n);const a=Gn.dot(Gn),o=Gn.dot(_i),c=Gn.dot(ru),u=_i.dot(_i),h=_i.dot(ru),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(u*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return lu.setScalar(0),cu.setScalar(0),uu.setScalar(0),lu.fromBufferAttribute(e,n),cu.fromBufferAttribute(e,i),uu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lu,s.x),a.addScaledVector(cu,s.y),a.addScaledVector(uu,s.z),a}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),_i.subVectors(e,n),Gn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),su.subVectors(e,i);const c=is.dot(su),u=rs.dot(su);if(c<=0&&u<=0)return n.copy(i);au.subVectors(e,r);const h=is.dot(au),p=rs.dot(au);if(h>=0&&p<=h)return n.copy(r);const d=c*p-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(is,a);ou.subVectors(e,s);const m=is.dot(ou),x=rs.dot(ou);if(x>=0&&m<=x)return n.copy(s);const E=m*u-c*x;if(E<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(rs,o);const g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return gm.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(gm,o);const f=1/(g+E+d);return a=E*f,o=d*f,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),No.subVectors(this.max,oa),ss.subVectors(e.a,oa),as.subVectors(e.b,oa),os.subVectors(e.c,oa),Xi.subVectors(as,ss),Yi.subVectors(os,as),_r.subVectors(ss,os);let n=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-_r.z,_r.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,_r.z,0,-_r.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-_r.y,_r.x,0];return!du(n,ss,as,os,No)||(n=[1,0,0,0,1,0,0,0,1],!du(n,ss,as,os,No))?!1:(Po.crossVectors(Xi,Yi),n=[Po.x,Po.y,Po.z],du(n,ss,as,os,No))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new G,new G,new G,new G,new G,new G,new G,new G],Hn=new G,Ro=new eo,ss=new G,as=new G,os=new G,Xi=new G,Yi=new G,_r=new G,oa=new G,No=new G,Po=new G,yr=new G;function du(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){yr.fromArray(t,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),c=e.dot(yr),u=n.dot(yr),h=i.dot(yr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Rt=new G,Io=new tt;let nb=0;class mi extends Yr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=im,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Io.fromBufferAttribute(this,n),Io.applyMatrix3(e),this.setXY(n,Io.x,Io.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=sa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=sa(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=sa(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=sa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=sa(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class k0 extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class B0 extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qt extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ib=new eo,la=new G,fu=new G;class pc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ib.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const n=la.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(fu)),this.expandByPoint(la.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rb=0;const Cn=new At,hu=new mn,ls=new G,vn=new eo,ca=new eo,Ft=new G;class kn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FE(e)?B0:k0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ca.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(vn.min,ca.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,ca.max),vn.expandByPoint(Ft)):(vn.expandByPoint(ca.min),vn.expandByPoint(ca.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ft.fromBufferAttribute(o,u),c&&(ls.fromBufferAttribute(e,u),Ft.add(ls)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new G,c[v]=new G;const u=new G,h=new G,p=new G,d=new tt,m=new tt,x=new tt,E=new G,g=new G;function f(v,C,N){u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,N),d.fromBufferAttribute(s,v),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,N),h.sub(u),p.sub(u),m.sub(d),x.sub(d);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(E.copy(h).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(I),o[v].add(E),o[C].add(E),o[N].add(E),c[v].add(g),c[C].add(g),c[N].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,C=_.length;v<C;++v){const N=_[v],I=N.start,P=N.count;for(let W=I,Q=I+P;W<Q;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const b=new G,S=new G,w=new G,T=new G;function A(v){w.fromBufferAttribute(r,v),T.copy(w);const C=o[v];b.copy(C),b.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(T,C);const I=S.dot(c[v])<0?-1:1;a.setXYZW(v,b.x,b.y,b.z,I)}for(let v=0,C=_.length;v<C;++v){const N=_[v],I=N.start,P=N.count;for(let W=I,Q=I+P;W<Q;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,c=new G,u=new G,h=new G,p=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),E=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,g),o.add(h),c.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,d=new u.constructor(c.length*h);let m=0,x=0;for(let E=0,g=c.length;E<g;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*h;for(let f=0;f<h;f++)d[x++]=u[m++]}return new mi(d,h,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sb=0;class to extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Ns,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=bd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ed&&(i.blendSrc=this.blendSrc),this.blendDst!==bd&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new G,pu=new G,Do=new G,Ki=new G,mu=new G,Lo=new G,xu=new G;class z0{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pu.copy(e).add(n).multiplyScalar(.5),Do.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(pu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Do),o=Ki.dot(this.direction),c=-Ki.dot(Do),u=Ki.lengthSq(),h=Math.abs(1-a*a);let p,d,m,x;if(h>0)if(p=a*c-o,d=a*o-c,x=s*h,p>=0)if(d>=-x)if(d<=x){const E=1/h;p*=E,d*=E,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+u}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;else d<=-x?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+u):d<=x?(p=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+u):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+u);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(pu).addScaledVector(Do,d),m}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){mu.subVectors(n,e),Lo.subVectors(i,e),xu.crossVectors(mu,Lo);let a=this.direction.dot(xu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);const c=o*this.direction.dot(Lo.crossVectors(Ki,Lo));if(c<0)return null;const u=o*this.direction.dot(mu.cross(Ki));if(u<0||c+u>a)return null;const h=-o*Ki.dot(xu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xl extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=v0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vm=new At,Sr=new z0,Oo=new pc,_m=new G,Uo=new G,Fo=new G,ko=new G,gu=new G,Bo=new G,ym=new G,zo=new G;class Zn extends mn{constructor(e=new kn,n=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(gu.fromBufferAttribute(p,e),a?Bo.addScaledVector(gu,h):Bo.addScaledVector(gu.sub(n),h))}n.add(Bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Oo.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Oo,_m)===null||Sr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(vm),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=d.length;x<E;x++){const g=d[x],f=a[g.materialIndex],_=Math.max(g.start,m.start),b=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,w=b;S<w;S+=3){const T=o.getX(S),A=o.getX(S+1),v=o.getX(S+2);r=Go(this,f,e,i,u,h,p,T,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let g=x,f=E;g<f;g+=3){const _=o.getX(g),b=o.getX(g+1),S=o.getX(g+2);r=Go(this,a,e,i,u,h,p,_,b,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,E=d.length;x<E;x++){const g=d[x],f=a[g.materialIndex],_=Math.max(g.start,m.start),b=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let S=_,w=b;S<w;S+=3){const T=S,A=S+1,v=S+2;r=Go(this,f,e,i,u,h,p,T,A,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let g=x,f=E;g<f;g+=3){const _=g,b=g+1,S=g+2;r=Go(this,a,e,i,u,h,p,_,b,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ab(t,e,n,i,r,s,a,o){let c;if(e.side===pn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===pr,o),c===null)return null;zo.copy(o),zo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(zo);return u<n.near||u>n.far?null:{distance:u,point:zo.clone(),object:t}}function Go(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Uo),t.getVertexPosition(c,Fo),t.getVertexPosition(u,ko);const h=ab(t,e,n,i,Uo,Fo,ko,ym);if(h){const p=new G;Xn.getBarycoord(ym,Uo,Fo,ko,p),r&&(h.uv=Xn.getInterpolatedAttribute(r,o,c,u,p,new tt)),s&&(h.uv1=Xn.getInterpolatedAttribute(s,o,c,u,p,new tt)),a&&(h.normal=Xn.getInterpolatedAttribute(a,o,c,u,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new G,materialIndex:0};Xn.getNormal(Uo,Fo,ko,d.normal),h.face=d,h.barycoord=p}return h}class ob extends rn{constructor(e=null,n=1,i=1,r,s,a,o,c,u=Ht,h=Ht,p,d){super(null,a,o,c,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new G,lb=new G,cb=new ze;class Tr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(lb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(vu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cb.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new pc,ub=new tt(.5,.5),Ho=new G;class G0{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,a=new Tr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],d=s[6],m=s[7],x=s[8],E=s[9],g=s[10],f=s[11],_=s[12],b=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-a,m-h,f-x,w-_).normalize(),r[1].setComponents(u+a,m+h,f+x,w+_).normalize(),r[2].setComponents(u+o,m+p,f+E,w+b).normalize(),r[3].setComponents(u-o,m-p,f-E,w-b).normalize(),i)r[4].setComponents(c,d,g,S).normalize(),r[5].setComponents(u-c,m-d,f-g,w-S).normalize();else if(r[4].setComponents(u-c,m-d,f-g,w-S).normalize(),n===ui)r[5].setComponents(u+c,m+d,f+g,w+S).normalize();else if(n===jl)r[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const n=ub.distanceTo(e.center);return Er.radius=.7071067811865476+n,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H0 extends to{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new G,Kl=new G,Sm=new At,ua=new z0,Vo=new pc,_u=new G,Em=new G;class db extends mn{constructor(e=new kn,n=new H0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yl.fromBufferAttribute(n,r-1),Kl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yl.distanceTo(Kl);e.setAttribute("lineDistance",new Qt(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;Sm.copy(r).invert(),ua.copy(e.ray).applyMatrix4(Sm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let E=m,g=x-1;E<g;E+=u){const f=h.getX(E),_=h.getX(E+1),b=jo(this,e,ua,c,f,_,E);b&&n.push(b)}if(this.isLineLoop){const E=h.getX(x-1),g=h.getX(m),f=jo(this,e,ua,c,E,g,x-1);f&&n.push(f)}}else{const m=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let E=m,g=x-1;E<g;E+=u){const f=jo(this,e,ua,c,E,E+1,E);f&&n.push(f)}if(this.isLineLoop){const E=jo(this,e,ua,c,x-1,m,x-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Yl.fromBufferAttribute(o,r),Kl.fromBufferAttribute(o,s),n.distanceSqToSegment(Yl,Kl,_u,Em)>i)return;_u.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(_u);if(!(u<e.near||u>e.far))return{distance:u,point:Em.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const bm=new G,Mm=new G;class fb extends db{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)bm.fromBufferAttribute(n,r),Mm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+bm.distanceTo(Mm);e.setAttribute("lineDistance",new Qt(i,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V0 extends rn{constructor(e=[],n=Hr,i,r,s,a,o,c,u,h){super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hs extends rn{constructor(e,n,i=xi,r,s,a,o=Ht,c=Ht,u,h=Ui,p=1){if(h!==Ui&&h!==Dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hb extends Hs{constructor(e,n=xi,i=Hr,r,s,a=Ht,o=Ht,c,u=Ui){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class j0 extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(p,2));function x(E,g,f,_,b,S,w,T,A,v,C){const N=S/A,I=w/v,P=S/2,W=w/2,Q=T/2,F=A+1,k=v+1;let z=0,D=0;const j=new G;for(let Z=0;Z<k;Z++){const te=Z*I-W;for(let se=0;se<F;se++){const Ae=se*N-P;j[E]=Ae*_,j[g]=te*b,j[f]=Q,u.push(j.x,j.y,j.z),j[E]=0,j[g]=0,j[f]=T>0?1:-1,h.push(j.x,j.y,j.z),p.push(se/A),p.push(1-Z/v),z+=1}}for(let Z=0;Z<v;Z++)for(let te=0;te<A;te++){const se=d+te+F*Z,Ae=d+te+F*(Z+1),Xe=d+(te+1)+F*(Z+1),Fe=d+(te+1)+F*Z;c.push(se,Ae,Fe),c.push(Ae,Xe,Fe),D+=6}o.addGroup(m,D,C),m+=D,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class io extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,p=e/o,d=n/c,m=[],x=[],E=[],g=[];for(let f=0;f<h;f++){const _=f*d-a;for(let b=0;b<u;b++){const S=b*p-s;x.push(S,-_,0),E.push(0,0,1),g.push(b/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const b=_+u*f,S=_+u*(f+1),w=_+1+u*(f+1),T=_+1+u*f;m.push(b,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new Qt(x,3)),this.setAttribute("normal",new Qt(E,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.widthSegments,e.heightSegments)}}class _h extends kn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],u=[],h=[];let p=e;const d=(n-e)/r,m=new G,x=new tt;for(let E=0;E<=r;E++){for(let g=0;g<=i;g++){const f=s+g/i*a;m.x=p*Math.cos(f),m.y=p*Math.sin(f),c.push(m.x,m.y,m.z),u.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,h.push(x.x,x.y)}p+=d}for(let E=0;E<r;E++){const g=E*(i+1);for(let f=0;f<i;f++){const _=f+g,b=_,S=_+i+1,w=_+i+2,T=_+1;o.push(b,S,T),o.push(S,w,T)}}this.setIndex(o),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function Vs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(wm(r))r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(wm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Vs(t[n]);for(const r in i)e[r]=i[r]}return e}function wm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function pb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function W0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const mb={clone:Vs,merge:en};var xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xb,this.fragmentShader=gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(r.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new G().fromArray(r.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vb extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _b extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wo=new G,Xo=new Ys,ii=new G;class X0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Xo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Wo,Xo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qi=new G,Tm=new tt,Am=new tt;class In extends X0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=uf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uf*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,n){return this.getViewBounds(e,Tm,Am),n.subVectors(Am,Tm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Y0 extends X0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=-90,us=1;class Sb extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new In(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new In(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new In(cs,us,e,n);o.layers=this.layers,this.add(o);const c=new In(cs,us,e,n);c.layers=this.layers,this.add(c);const u=new In(cs,us,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Eb extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mh=class Mh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Mh.prototype.isMatrix2=!0;let Cm=Mh;class bb extends fb{constructor(e=10,n=10,i=4473924,r=8947848){i=new $e(i),r=new $e(r);const s=n/2,a=e/n,o=e/2,c=[],u=[];for(let d=0,m=0,x=-o;d<=n;d++,x+=a){c.push(-o,0,x,o,0,x),c.push(x,0,-o,x,0,o);const E=d===s?i:r;E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3}const h=new kn;h.setAttribute("position",new Qt(c,3)),h.setAttribute("color",new Qt(u,3));const p=new H0({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rm(t,e,n,i){const r=Mb(i);switch(n){case P0:return t*e;case D0:return t*e/r.components*r.byteLength;case fh:return t*e/r.components*r.byteLength;case Vr:return t*e*2/r.components*r.byteLength;case hh:return t*e*2/r.components*r.byteLength;case I0:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case ph:return t*e*4/r.components*r.byteLength;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Ud:return Math.max(t,16)*Math.max(e,8)/4;case Dd:case Od:return Math.max(t,8)*Math.max(e,8)/2;case Fd:case kd:case zd:case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bd:case zl:case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rf:case sf:case af:return Math.ceil(t/4)*Math.ceil(e/4)*16;case of:case lf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gl:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Mb(t){switch(t){case Dn:case A0:return{byteLength:1,components:1};case Xa:case C0:case Oi:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case xi:case ch:case ci:return{byteLength:4,components:1};case R0:case N0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wb(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<p.length;m++){const x=p[d],E=p[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++d,p[d]=E)}p.length=d+1;for(let m=0,x=p.length;m<x;m++){const E=p[m];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var Tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ib=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,RM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,d1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,x1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,D1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,L1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,W1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Tb,alphahash_pars_fragment:Ab,alphamap_fragment:Cb,alphamap_pars_fragment:Rb,alphatest_fragment:Nb,alphatest_pars_fragment:Pb,aomap_fragment:Ib,aomap_pars_fragment:Db,batching_pars_vertex:Lb,batching_vertex:Ob,begin_vertex:Ub,beginnormal_vertex:Fb,bsdfs:kb,iridescence_fragment:Bb,bumpmap_pars_fragment:zb,clipping_planes_fragment:Gb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:jb,color_fragment:Wb,color_pars_fragment:Xb,color_pars_vertex:Yb,color_vertex:Kb,common:qb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:Zb,displacementmap_pars_vertex:Qb,displacementmap_vertex:Jb,emissivemap_fragment:eM,emissivemap_pars_fragment:tM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:sM,envmap_pars_fragment:aM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:vM,envmap_vertex:lM,fog_vertex:cM,fog_pars_vertex:uM,fog_fragment:dM,fog_pars_fragment:fM,gradientmap_pars_fragment:hM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:xM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:yM,lights_phong_fragment:SM,lights_phong_pars_fragment:EM,lights_physical_fragment:bM,lights_physical_pars_fragment:MM,lights_fragment_begin:wM,lights_fragment_maps:TM,lights_fragment_end:AM,lightprobes_pars_fragment:CM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:IM,map_fragment:DM,map_pars_fragment:LM,map_particle_fragment:OM,map_particle_pars_fragment:UM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:kM,morphinstance_vertex:BM,morphcolor_vertex:zM,morphnormal_vertex:GM,morphtarget_pars_vertex:HM,morphtarget_vertex:VM,normal_fragment_begin:jM,normal_fragment_maps:WM,normal_pars_fragment:XM,normal_pars_vertex:YM,normal_vertex:KM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:$M,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:JM,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:d1,skinbase_vertex:f1,skinning_pars_vertex:h1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:x1,specularmap_pars_fragment:g1,tonemapping_fragment:v1,tonemapping_pars_fragment:_1,transmission_fragment:y1,transmission_pars_fragment:S1,uv_pars_fragment:E1,uv_pars_vertex:b1,uv_vertex:M1,worldpos_vertex:w1,background_vert:T1,background_frag:A1,backgroundCube_vert:C1,backgroundCube_frag:R1,cube_vert:N1,cube_frag:P1,depth_vert:I1,depth_frag:D1,distance_vert:L1,distance_frag:O1,equirect_vert:U1,equirect_frag:F1,linedashed_vert:k1,linedashed_frag:B1,meshbasic_vert:z1,meshbasic_frag:G1,meshlambert_vert:H1,meshlambert_frag:V1,meshmatcap_vert:j1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:Y1,meshphong_vert:K1,meshphong_frag:q1,meshphysical_vert:$1,meshphysical_frag:Z1,meshtoon_vert:Q1,meshtoon_frag:J1,points_vert:ew,points_frag:tw,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:sw},ge={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ai={basic:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:en([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:en([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:en([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:en([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:en([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:en([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:en([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:en([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:en([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:en([ge.lights,ge.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ai.physical={uniforms:en([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Yo={r:0,b:0,g:0},aw=new At,q0=new ze;q0.set(-1,0,0,0,1,0,0,0,1);function ow(t,e,n,i,r,s){const a=new $e(0);let o=r===!0?0:1,c,u,h=null,p=0,d=null;function m(_){let b=_.isScene===!0?_.background:null;if(b&&b.isTexture){const S=_.backgroundBlurriness>0;b=e.get(b,S)}return b}function x(_){let b=!1;const S=m(_);S===null?g(a,o):S&&S.isColor&&(g(S,1),b=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(_,b){const S=m(b);S&&(S.isCubeTexture||S.mapping===hc)?(u===void 0&&(u=new Zn(new no(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Vs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(aw.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(q0),u.material.toneMapped=Ke.getTransfer(S.colorSpace)!==it,(h!==S||p!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Zn(new io(2,2),new gi({name:"BackgroundMaterial",uniforms:Vs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function g(_,b){_.getRGB(Yo,W0(t)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,b,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(a,o)},render:x,addToRenderList:E,dispose:f}}function lw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(I,P,W,Q,F){let k=!1;const z=p(I,Q,W,P);s!==z&&(s=z,u(s.object)),k=m(I,Q,W,F),k&&x(I,Q,W,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(I,P,W,Q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function p(I,P,W,Q){const F=Q.wireframe===!0;let k=i[P.id];k===void 0&&(k={},i[P.id]=k);const z=I.isInstancedMesh===!0?I.id:0;let D=k[z];D===void 0&&(D={},k[z]=D);let j=D[W.id];j===void 0&&(j={},D[W.id]=j);let Z=j[F];return Z===void 0&&(Z=d(c()),j[F]=Z),Z}function d(I){const P=[],W=[],Q=[];for(let F=0;F<n;F++)P[F]=0,W[F]=0,Q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:Q,object:I,attributes:{},index:null}}function m(I,P,W,Q){const F=s.attributes,k=P.attributes;let z=0;const D=W.getAttributes();for(const j in D)if(D[j].location>=0){const te=F[j];let se=k[j];if(se===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;z++}return s.attributesNum!==z||s.index!==Q}function x(I,P,W,Q){const F={},k=P.attributes;let z=0;const D=W.getAttributes();for(const j in D)if(D[j].location>=0){let te=k[j];te===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const se={};se.attribute=te,te&&te.data&&(se.data=te.data),F[j]=se,z++}s.attributes=F,s.attributesNum=z,s.index=Q}function E(){const I=s.newAttributes;for(let P=0,W=I.length;P<W;P++)I[P]=0}function g(I){f(I,0)}function f(I,P){const W=s.newAttributes,Q=s.enabledAttributes,F=s.attributeDivisors;W[I]=1,Q[I]===0&&(t.enableVertexAttribArray(I),Q[I]=1),F[I]!==P&&(t.vertexAttribDivisor(I,P),F[I]=P)}function _(){const I=s.newAttributes,P=s.enabledAttributes;for(let W=0,Q=P.length;W<Q;W++)P[W]!==I[W]&&(t.disableVertexAttribArray(W),P[W]=0)}function b(I,P,W,Q,F,k,z){z===!0?t.vertexAttribIPointer(I,P,W,F,k):t.vertexAttribPointer(I,P,W,Q,F,k)}function S(I,P,W,Q){E();const F=Q.attributes,k=W.getAttributes(),z=P.defaultAttributeValues;for(const D in k){const j=k[D];if(j.location>=0){let Z=F[D];if(Z===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const te=Z.normalized,se=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;const Xe=Ae.buffer,Fe=Ae.type,K=Ae.bytesPerElement,ae=Fe===t.INT||Fe===t.UNSIGNED_INT||Z.gpuType===ch;if(Z.isInterleavedBufferAttribute){const re=Z.data,Oe=re.stride,Be=Z.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<j.locationSize;De++)f(j.location+De,re.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<j.locationSize;De++)g(j.location+De);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let De=0;De<j.locationSize;De++)b(j.location+De,se/j.locationSize,Fe,te,Oe*K,(Be+se/j.locationSize*De)*K,ae)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<j.locationSize;re++)f(j.location+re,Z.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<j.locationSize;re++)g(j.location+re);t.bindBuffer(t.ARRAY_BUFFER,Xe);for(let re=0;re<j.locationSize;re++)b(j.location+re,se/j.locationSize,Fe,te,se*K,se/j.locationSize*re*K,ae)}}else if(z!==void 0){const te=z[D];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(j.location,te);break;case 3:t.vertexAttrib3fv(j.location,te);break;case 4:t.vertexAttrib4fv(j.location,te);break;default:t.vertexAttrib1fv(j.location,te)}}}}_()}function w(){C();for(const I in i){const P=i[I];for(const W in P){const Q=P[W];for(const F in Q){const k=Q[F];for(const z in k)h(k[z].object),delete k[z];delete Q[F]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const P=i[I.id];for(const W in P){const Q=P[W];for(const F in Q){const k=Q[F];for(const z in k)h(k[z].object),delete k[z];delete Q[F]}}delete i[I.id]}function A(I){for(const P in i){const W=i[P];for(const Q in W){const F=W[Q];if(F[I.id]===void 0)continue;const k=F[I.id];for(const z in k)h(k[z].object),delete k[z];delete F[I.id]}}}function v(I){for(const P in i){const W=i[P],Q=I.isInstancedMesh===!0?I.id:0,F=W[Q];if(F!==void 0){for(const k in F){const z=F[k];for(const D in z)h(z[D].object),delete z[D];delete F[k]}delete W[Q],Object.keys(W).length===0&&delete i[P]}}}function C(){N(),a=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:g,disableUnusedAttributes:_}}function cw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Yn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Dn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!v)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Ue("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:S,maxSamples:w,samples:T}}function dw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Tr,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const x=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const _=s?0:i,b=_*4;let S=f.clippingState||null;c.value=S,S=h(x,d,b,m);for(let w=0;w!==b;++w)S[w]=n[w];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=_}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,x){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=c.value,x!==!0||g===null){const f=m+E*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,S=m;b!==E;++b,S+=4)a.copy(p[b]).applyMatrix4(_,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const ir=4,Nm=[.125,.215,.35,.446,.526,.582],Cr=20,fw=256,da=new Y0,Pm=new $e;let yu=null,Su=0,Eu=0,bu=!1;const hw=new G;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=hw}=s;yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Su,Eu),this._renderer.xr.enabled=bu,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Oi,format:Yn,colorSpace:Hl,depthBuffer:!1},r=Dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pw(s)),this._blurMaterial=xw(s,e,n),this._ggxMaterial=mw(s,e,n)}return r}_compileMaterial(e){const n=new Zn(new kn,e);this._renderer.compile(n,da)}_sceneToCubeUV(e,n,i,r,s){const c=new In(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(Pm),p.toneMapping=hi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new no,new Xl({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let f=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,f=!0):(g.color.copy(Pm),f=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):S===1?(c.up.set(0,0,u[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const w=this._cubeSize;ds(r,S*w,b>2?w:0,w,w),p.setRenderTarget(r),f&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=d,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,da)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),d=0+u*1.25,m=p*d,{_lodMax:x}=this,E=this._sizeLods[i],g=3*E*(i>x-ir?i-x+ir:0),f=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-n,ds(s,g,f,3*E,2*E),r.setRenderTarget(s),r.render(o,da),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,ds(e,g,f,3*E,2*E),r.setRenderTarget(e),r.render(o,da)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const d=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Cr-1),E=s/x,g=isFinite(s)?1+Math.floor(h*E):Cr;g>Cr&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cr}`);const f=[];let _=0;for(let A=0;A<Cr;++A){const v=A/E,C=Math.exp(-v*v/2);f.push(C),A===0?_+=C:A<g&&(_+=2*C)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-i;const S=this._sizeLods[r],w=3*S*(r>b-ir?r-b+ir:0),T=4*(this._cubeSize-S);ds(n,w,T,3*S,2*S),c.setRenderTarget(n),c.render(p,da)}}function pw(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+Nm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-ir?c=Nm[a-t+ir-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,E=3,g=2,f=1,_=new Float32Array(E*x*m),b=new Float32Array(g*x*m),S=new Float32Array(f*x*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,v=T>2?0:-1,C=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];_.set(C,E*x*T),b.set(d,g*x*T);const N=[T,T,T,T,T,T];S.set(N,f*x*T)}const w=new kn;w.setAttribute("position",new mi(_,E)),w.setAttribute("uv",new mi(b,g)),w.setAttribute("faceIndex",new mi(S,f)),i.push(new Zn(w,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Dm(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mw(t,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function xw(t,e,n){const i=new Float32Array(Cr),r=new G(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Lm(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Om(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $0 extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:Vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ri});s.uniforms.tEquirect.value=n;const a=new Zn(r,s),o=n.minFilter;return n.minFilter===Ir&&(n.minFilter=Zt),new Sb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function gw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Xc||m===Yc)if(e.has(d)){const x=e.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const E=new $0(x.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",u),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,x=m===Xc||m===Yc,E=m===Hr||m===Gs;if(x||E){let g=n.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Im(t)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const _=d.image;return x&&_&&_.height>0||E&&_&&c(_)?(i===null&&(i=new Im(t)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,m){return m===Xc?d.mapping=Hr:m===Yc&&(d.mapping=Gs),d}function c(d){let m=0;const x=6;for(let E=0;E<x;E++)d[E]!==void 0&&m++;return m===x}function u(d){const m=d.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function vw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ps("WebGLRenderer: "+i+" extension not supported."),r}}}function _w(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function u(p){const d=[],m=p.index,x=p.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const _=m.array;E=m.version;for(let b=0,S=_.length;b<S;b+=3){const w=_[b+0],T=_[b+1],A=_[b+2];d.push(w,T,T,A,A,w)}}else{const _=x.array;E=x.version;for(let b=0,S=_.length/3-1;b<S;b+=3){const w=b+0,T=b+1,A=b+2;d.push(w,T,T,A,A,w)}}const g=new(x.count>=65535?B0:k0)(d,1);g.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function yw(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function u(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*a,m),n.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let E=0;for(let g=0;g<m;g++)E+=d[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Sw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ew(t,e,n){const i=new WeakMap,r=new bt;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let N=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*p),v=new O0(A,w,T,p);v.type=ci,v.needsUpdate=!0;const C=S*4;for(let I=0;I<p;I++){const P=f[I],W=_[I],Q=b[I],F=w*T*4*I;for(let k=0;k<P.count;k++){const z=k*C;x===!0&&(r.fromBufferAttribute(P,k),A[F+z+0]=r.x,A[F+z+1]=r.y,A[F+z+2]=r.z,A[F+z+3]=0),E===!0&&(r.fromBufferAttribute(W,k),A[F+z+4]=r.x,A[F+z+5]=r.y,A[F+z+6]=r.z,A[F+z+7]=0),g===!0&&(r.fromBufferAttribute(Q,k),A[F+z+8]=r.x,A[F+z+9]=r.y,A[F+z+10]=r.z,A[F+z+11]=Q.itemSize===4?r.w:1)}}d={count:p,texture:v,size:new tt(w,T)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const E=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",E),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function bw(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,d=e.get(u,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const Mw={[_0]:"LINEAR_TONE_MAPPING",[y0]:"REINHARD_TONE_MAPPING",[S0]:"CINEON_TONE_MAPPING",[E0]:"ACES_FILMIC_TONE_MAPPING",[M0]:"AGX_TONE_MAPPING",[w0]:"NEUTRAL_TONE_MAPPING",[b0]:"CUSTOM_TONE_MAPPING"};function ww(t,e,n,i,r,s){const a=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Hs(e,n):void 0}),o=new pi(e,n,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),c=new kn;c.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const u=new vb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Zn(c,u),p=new Y0(-1,1,1,-1,0,1);let d=null,m=null,x=!1,E,g=null,f=[],_=!1;this.setSize=function(b,S){a.setSize(b,S),o.setSize(b,S);for(let w=0;w<f.length;w++){const T=f[w];T.setSize&&T.setSize(b,S)}},this.setEffects=function(b){f=b,_=f.length>0&&f[0].isRenderPass===!0;const S=a.width,w=a.height;for(let T=0;T<f.length;T++){const A=f[T];A.setSize&&A.setSize(S,w)}},this.begin=function(b,S){if(x||b.toneMapping===hi&&f.length===0)return!1;if(g=S,S!==null){const w=S.width,T=S.height;(a.width!==w||a.height!==T)&&this.setSize(w,T)}return _===!1&&b.setRenderTarget(a),E=b.toneMapping,b.toneMapping=hi,!0},this.hasRenderPass=function(){return _},this.end=function(b,S){b.toneMapping=E,x=!0;let w=a,T=o;for(let A=0;A<f.length;A++){const v=f[A];if(v.enabled!==!1&&(v.render(b,T,w,S),v.needsSwap!==!1)){const C=w;w=T,T=C}}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},Ke.getTransfer(d)===it&&(u.defines.SRGB_TRANSFER="");const A=Mw[m];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(g),b.render(h,p),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),u.dispose()}}const Z0=new rn,df=new Hs(1,1),Q0=new O0,J0=new YE,ev=new V0,Um=[],Fm=[],km=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Um[r];if(s===void 0&&(s=new Float32Array(r),Um[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xc(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function Nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Lt(n,i))return;zm.set(i),t.uniformMatrix2fv(this.addr,!1,zm),Ot(n,i)}}function Pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Lt(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),Ot(n,i)}}function Iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Lt(n,i))return;km.set(i),t.uniformMatrix4fv(this.addr,!1,km),Ot(n,i)}}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function Gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(df.compareFunction=n.isReversedDepthBuffer()?xh:mh,s=df):s=Z0,n.setTexture2D(e||s,r)}function Hw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J0,r)}function Vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||ev,r)}function jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Q0,r)}function Ww(t){switch(t){case 5126:return Tw;case 35664:return Aw;case 35665:return Cw;case 35666:return Rw;case 35674:return Nw;case 35675:return Pw;case 35676:return Iw;case 5124:case 35670:return Dw;case 35667:case 35671:return Lw;case 35668:case 35672:return Ow;case 35669:case 35673:return Uw;case 5125:return Fw;case 36294:return kw;case 36295:return Bw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return jw}}function Xw(t,e){t.uniform1fv(this.addr,e)}function Yw(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Kw(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function qw(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function $w(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Zw(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Qw(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Jw(t,e){t.uniform1iv(this.addr,e)}function eT(t,e){t.uniform2iv(this.addr,e)}function tT(t,e){t.uniform3iv(this.addr,e)}function nT(t,e){t.uniform4iv(this.addr,e)}function iT(t,e){t.uniform1uiv(this.addr,e)}function rT(t,e){t.uniform2uiv(this.addr,e)}function sT(t,e){t.uniform3uiv(this.addr,e)}function aT(t,e){t.uniform4uiv(this.addr,e)}function oT(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=df:a=Z0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function lT(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||J0,s[a])}function cT(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||ev,s[a])}function uT(t,e,n){const i=this.cache,r=e.length,s=xc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Q0,s[a])}function dT(t){switch(t){case 5126:return Xw;case 35664:return Yw;case 35665:return Kw;case 35666:return qw;case 35674:return $w;case 35675:return Zw;case 35676:return Qw;case 5124:case 35670:return Jw;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}class fT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ww(n.type)}}class hT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=dT(n.type)}}class pT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Gm(t,e){t.seq.push(e),t.map[e.id]=e}function mT(t,e,n){const i=t.name,r=i.length;for(Mu.lastIndex=0;;){const s=Mu.exec(i),a=Mu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Gm(n,u===void 0?new fT(o,t,e):new hT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new pT(o),Gm(n,p)),n=p}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);mT(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xT=37297;let gT=0;function vT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Vm=new ze;function _T(t){Ke._getMatrix(Vm,Ke.workingColorSpace,t);const e=`mat3( ${Vm.elements.map(n=>n.toFixed(4))} )`;switch(Ke.getTransfer(t)){case Vl:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+vT(t.getShaderSource(e),o)}else return s}function yT(t,e){const n=_T(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ST={[_0]:"Linear",[y0]:"Reinhard",[S0]:"Cineon",[E0]:"ACESFilmic",[M0]:"AgX",[w0]:"Neutral",[b0]:"Custom"};function ET(t,e){const n=ST[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ko=new G;function bT(){Ke.getLuminanceCoefficients(Ko);const t=Ko.x.toFixed(4),e=Ko.y.toFixed(4),n=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function wT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function va(t){return t!==""}function Wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(AT,RT)}const CT=new Map;function RT(t,e){let n=Ve[e];if(n===void 0){const i=CT.get(e);if(i!==void 0)n=Ve[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ff(n)}const NT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(t){return t.replace(NT,PT)}function PT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IT={[ol]:"SHADOWMAP_TYPE_PCF",[ga]:"SHADOWMAP_TYPE_VSM"};function DT(t){return IT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LT={[Hr]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE_UV"};function OT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":LT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const UT={[Gs]:"ENVMAP_MODE_REFRACTION"};function FT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":UT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kT={[v0]:"ENVMAP_BLENDING_MULTIPLY",[TE]:"ENVMAP_BLENDING_MIX",[AE]:"ENVMAP_BLENDING_ADD"};function BT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":kT[t.combine]||"ENVMAP_BLENDING_NONE"}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=DT(n),u=OT(n),h=FT(n),p=BT(n),d=zT(n),m=MT(n),x=wT(s),E=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(va).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(va).join(`
`),f.length>0&&(f+=`
`)):(g=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),f=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==hi?ET("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,yT("linearToOutputTexel",n.outputColorSpace),bT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(va).join(`
`)),a=ff(a),a=Wm(a,n),a=Xm(a,n),o=ff(o),o=Wm(o,n),o=Xm(o,n),a=Ym(a),o=Ym(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=_+g+a,S=_+f+o,w=Hm(r,r.VERTEX_SHADER,b),T=Hm(r,r.FRAGMENT_SHADER,S);r.attachShader(E,w),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(I){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(w)||"",Q=r.getShaderInfoLog(T)||"",F=P.trim(),k=W.trim(),z=Q.trim();let D=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,w,T);else{const Z=jm(r,w,"vertex"),te=jm(r,T,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+Z+`
`+te)}else F!==""?Ue("WebGLProgram: Program Info Log:",F):(k===""||z==="")&&(j=!1);j&&(I.diagnostics={runnable:D,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:z,prefix:f}})}r.deleteShader(w),r.deleteShader(T),v=new fl(r,E),C=TT(r,E)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let C;this.getAttributes=function(){return C===void 0&&A(this),C};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,xT)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=T,this}let HT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jT(e),n.set(e,i)),i}}class jT{constructor(e){this.id=HT++,this.code=e,this.usedTimes=0}}function WT(t){return t===Vr||t===zl||t===Gl}function XT(t,e,n,i,r,s){const a=new U0,o=new VT,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function E(v,C,N,I,P,W){const Q=I.fog,F=P.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=e.get(v.envMap||k,z),j=D&&D.mapping===hc?D.image.height:null,Z=m[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,se=te!==void 0?te.length:0;let Ae=0;F.morphAttributes.position!==void 0&&(Ae=1),F.morphAttributes.normal!==void 0&&(Ae=2),F.morphAttributes.color!==void 0&&(Ae=3);let Xe,Fe,K,ae;if(Z){const we=ai[Z];Xe=we.vertexShader,Fe=we.fragmentShader}else{Xe=v.vertexShader,Fe=v.fragmentShader;const we=o.getVertexShaderStage(v),yt=o.getFragmentShaderStage(v);o.update(v,we,yt),K=we.id,ae=yt.id}const re=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Be=P.isInstancedMesh===!0,De=P.isBatchedMesh===!0,Ze=!!v.map,We=!!v.matcap,de=!!D,ce=!!v.aoMap,ke=!!v.lightMap,ot=!!v.bumpMap&&v.wireframe===!1,Pt=!!v.normalMap,Ut=!!v.displacementMap,zt=!!v.emissiveMap,_t=!!v.metalnessMap,Ct=!!v.roughnessMap,O=v.anisotropy>0,on=v.clearcoat>0,nt=v.dispersion>0,R=v.iridescence>0,y=v.sheen>0,B=v.transmission>0,X=O&&!!v.anisotropyMap,q=on&&!!v.clearcoatMap,le=on&&!!v.clearcoatNormalMap,fe=on&&!!v.clearcoatRoughnessMap,$=R&&!!v.iridescenceMap,ee=R&&!!v.iridescenceThicknessMap,he=y&&!!v.sheenColorMap,Re=y&&!!v.sheenRoughnessMap,xe=!!v.specularMap,pe=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Le=B&&!!v.transmissionMap,Ge=B&&!!v.thicknessMap,L=!!v.gradientMap,ue=!!v.alphaMap,J=v.alphaTest>0,me=!!v.alphaHash,ye=!!v.extensions;let ne=hi;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Ce={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Xe,fragmentShader:Fe,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:De,batchingColor:De&&P._colorsTexture!==null,instancing:Be,instancingColor:Be&&P.instanceColor!==null,instancingMorph:Be&&P.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:We,envMap:de,envMapMode:de&&D.mapping,envMapCubeUVHeight:j,aoMap:ce,lightMap:ke,bumpMap:ot,normalMap:Pt,displacementMap:Ut,emissiveMap:zt,normalMapObjectSpace:Pt&&v.normalMapType===NE,normalMapTangentSpace:Pt&&v.normalMapType===tm,packedNormalMap:Pt&&v.normalMapType===tm&&WT(v.normalMap.format),metalnessMap:_t,roughnessMap:Ct,anisotropy:O,anisotropyMap:X,clearcoat:on,clearcoatMap:q,clearcoatNormalMap:le,clearcoatRoughnessMap:fe,dispersion:nt,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:ee,sheen:y,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ie,transmission:B,transmissionMap:Le,thicknessMap:Ge,gradientMap:L,opaque:v.transparent===!1&&v.blending===Ns&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:me,combine:v.combine,mapUv:Ze&&x(v.map.channel),aoMapUv:ce&&x(v.aoMap.channel),lightMapUv:ke&&x(v.lightMap.channel),bumpMapUv:ot&&x(v.bumpMap.channel),normalMapUv:Pt&&x(v.normalMap.channel),displacementMapUv:Ut&&x(v.displacementMap.channel),emissiveMapUv:zt&&x(v.emissiveMap.channel),metalnessMapUv:_t&&x(v.metalnessMap.channel),roughnessMapUv:Ct&&x(v.roughnessMap.channel),anisotropyMapUv:X&&x(v.anisotropyMap.channel),clearcoatMapUv:q&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(v.sheenRoughnessMap.channel),specularMapUv:xe&&x(v.specularMap.channel),specularColorMapUv:pe&&x(v.specularColorMap.channel),specularIntensityMapUv:Ie&&x(v.specularIntensityMap.channel),transmissionMapUv:Le&&x(v.transmissionMap.channel),thicknessMapUv:Ge&&x(v.thicknessMap.channel),alphaMapUv:ue&&x(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pt||O),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(Ze||ue),fog:!!Q,useFog:v.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&Pt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Oe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===it,decodeVideoTextureEmissive:zt&&v.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(v.emissiveMap.colorSpace)===it,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===li,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)C.push(N),C.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(f(C,v),_(C,v),C.push(t.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function f(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function _(v,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function b(v){const C=m[v.type];let N;if(C){const I=ai[C];N=mb.clone(I.uniforms)}else N=v.uniforms;return N}function S(v,C){let N=h.get(C);return N!==void 0?++N.usedTimes:(N=new GT(t,C,v,r),u.push(N),h.set(C,N)),N}function w(v){if(--v.usedTimes===0){const C=u.indexOf(v);u[C]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:b,acquireProgram:S,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function YT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function KT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $m(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,x,E,g,f){let _=t[e];return _===void 0?(_={id:d.id,object:d,geometry:m,material:x,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:g,group:f},t[e]=_):(_.id=d.id,_.object=d,_.geometry=m,_.material=x,_.materialVariant=a(d),_.groupOrder=E,_.renderOrder=d.renderOrder,_.z=g,_.group=f),e++,_}function c(d,m,x,E,g,f){const _=o(d,m,x,E,g,f);x.transmission>0?i.push(_):x.transparent===!0?r.push(_):n.push(_)}function u(d,m,x,E,g,f){const _=o(d,m,x,E,g,f);x.transmission>0?i.unshift(_):x.transparent===!0?r.unshift(_):n.unshift(_)}function h(d,m,x){n.length>1&&n.sort(d||KT),i.length>1&&i.sort(m||qm),r.length>1&&r.sort(m||qm),x&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let d=e,m=t.length;d<m;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function qT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new $m,t.set(i,[a])):r>=s.length?(a=new $m,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new $e};break;case"SpotLight":n={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function ZT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QT=0;function JT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eA(t){const e=new $T,n=ZT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,s=new At,a=new At;function o(u){let h=0,p=0,d=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,x=0,E=0,g=0,f=0,_=0,b=0,S=0,w=0,T=0,A=0;u.sort(JT);for(let C=0,N=u.length;C<N;C++){const I=u[C],P=I.color,W=I.intensity,Q=I.distance;let F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vr?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*W,p+=P.g*W,d+=P.b*W;else if(I.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(I.sh.coefficients[k],W);A++}else if(I.isDirectionalLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,D=n.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=I.shadow.matrix,_++}i.directional[m]=k,m++}else if(I.isSpotLight){const k=e.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(P).multiplyScalar(W),k.distance=Q,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,i.spot[E]=k;const z=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,z.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[E]=z.matrix,I.castShadow){const D=n.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.spotShadow[E]=D,i.spotShadowMap[E]=F,S++}E++}else if(I.isRectAreaLight){const k=e.get(I);k.color.copy(P).multiplyScalar(W),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=k,g++}else if(I.isPointLight){const k=e.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const z=I.shadow,D=n.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=F,i.pointShadowMatrix[x]=I.shadow.matrix,b++}i.point[x]=k,x++}else if(I.isHemisphereLight){const k=e.get(I);k.skyColor.copy(I.color).multiplyScalar(W),k.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[f]=k,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==m||v.pointLength!==x||v.spotLength!==E||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==_||v.numPointShadows!==b||v.numSpotShadows!==S||v.numSpotMaps!==w||v.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,v.directionalLength=m,v.pointLength=x,v.spotLength=E,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=_,v.numPointShadows=b,v.numSpotShadows=S,v.numSpotMaps=w,v.numLightProbes=A,i.version=QT++)}function c(u,h){let p=0,d=0,m=0,x=0,E=0;const g=h.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const b=u[f];if(b.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(b.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(b.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(b.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:c,state:i}}function Zm(t){const e=new eA(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function tA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Zm(t),e.set(r,[o])):s>=a.length?(o=new Zm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const nA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rA=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],sA=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Qm=new At,fa=new G,wu=new G;function aA(t,e,n){let i=new G0;const r=new tt,s=new tt,a=new bt,o=new _b,c=new yb,u={},h=n.maxTextureSize,p={[pr]:pn,[pn]:pr,[li]:li},d=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:nA,fragmentShader:iA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new kn;x.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Zn(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let f=this.type;this.render=function(T,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===oE&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ol);const C=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Ri),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const W=f!==this.type;W&&A.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(F=>F.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,F=T.length;Q<F;Q++){const k=T[Q],z=k.shadow;if(z===void 0){Ue("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const D=z.getFrameExtents();r.multiply(D),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,z.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||W===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ga){if(k.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new pi(r.x,r.y,{format:Vr,type:Oi,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Hs(r.x,r.y,ci),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Ui,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht}else k.isPointLight?(z.map=new $0(r.x),z.map.depthTexture=new hb(r.x,xi)):(z.map=new pi(r.x,r.y),z.map.depthTexture=new Hs(r.x,r.y,xi)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Ui,this.type===ol?(z.map.depthTexture.compareFunction=j?xh:mh,z.map.depthTexture.minFilter=Zt,z.map.depthTexture.magFilter=Zt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht);z.camera.updateProjectionMatrix()}const Z=z.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<Z;te++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,te),t.clear();else{te===0&&(t.setRenderTarget(z.map),t.clear());const se=z.getViewport(te);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),P.viewport(a)}if(k.isPointLight){const se=z.camera,Ae=z.matrix,Xe=k.distance||se.far;Xe!==se.far&&(se.far=Xe,se.updateProjectionMatrix()),fa.setFromMatrixPosition(k.matrixWorld),se.position.copy(fa),wu.copy(se.position),wu.add(rA[te]),se.up.copy(sA[te]),se.lookAt(wu),se.updateMatrixWorld(),Ae.makeTranslation(-fa.x,-fa.y,-fa.z),Qm.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Qm,se.coordinateSystem,se.reversedDepth)}else z.updateMatrices(k);i=z.getFrustum(),S(A,v,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===ga&&_(z,v),z.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(C,N,I)};function _(T,A){const v=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pi(r.x,r.y,{format:Vr,type:Oi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,v,d,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,v,m,E,null)}function b(T,A,v,C){let N=null;const I=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)N=I;else if(N=v.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const P=N.uuid,W=A.uuid;let Q=u[P];Q===void 0&&(Q={},u[P]=Q);let F=Q[W];F===void 0&&(F=N.clone(),Q[W]=F,A.addEventListener("dispose",w)),N=F}if(N.visible=A.visible,N.wireframe=A.wireframe,C===ga?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:p[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const P=t.properties.get(N);P.light=v}return N}function S(T,A,v,C,N){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===ga)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const W=e.update(T),Q=T.material;if(Array.isArray(Q)){const F=W.groups;for(let k=0,z=F.length;k<z;k++){const D=F[k],j=Q[D.materialIndex];if(j&&j.visible){const Z=b(T,j,C,N);T.onBeforeShadow(t,T,A,v,W,Z,D),t.renderBufferDirect(v,null,W,Z,T,D),T.onAfterShadow(t,T,A,v,W,Z,D)}}}else if(Q.visible){const F=b(T,Q,C,N);T.onBeforeShadow(t,T,A,v,W,F,null),t.renderBufferDirect(v,null,W,F,T,null),T.onAfterShadow(t,T,A,v,W,F,null)}}const P=T.children;for(let W=0,Q=P.length;W<Q;W++)S(P[W],A,v,C,N)}function w(T){T.target.removeEventListener("dispose",w);for(const v in u){const C=u[v],N=T.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function oA(t,e){function n(){let L=!1;const ue=new bt;let J=null;const me=new bt(0,0,0,0);return{setMask:function(ye){J!==ye&&!L&&(t.colorMask(ye,ye,ye,ye),J=ye)},setLocked:function(ye){L=ye},setClear:function(ye,ne,Ce,we,yt){yt===!0&&(ye*=we,ne*=we,Ce*=we),ue.set(ye,ne,Ce,we),me.equals(ue)===!1&&(t.clearColor(ye,ne,Ce,we),me.copy(ue))},reset:function(){L=!1,J=null,me.set(-1,0,0,0)}}}function i(){let L=!1,ue=!1,J=null,me=null,ye=null;return{setReversed:function(ne){if(ue!==ne){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;const we=ye;ye=null,this.setClear(we)}},getReversed:function(){return ue},setTest:function(ne){ne?re(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!L&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(ue&&(ne=zE[ne]),me!==ne){switch(ne){case Md:t.depthFunc(t.NEVER);break;case wd:t.depthFunc(t.ALWAYS);break;case Td:t.depthFunc(t.LESS);break;case zs:t.depthFunc(t.LEQUAL);break;case Ad:t.depthFunc(t.EQUAL);break;case Cd:t.depthFunc(t.GEQUAL);break;case Rd:t.depthFunc(t.GREATER);break;case Nd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=ne}},setLocked:function(ne){L=ne},setClear:function(ne){ye!==ne&&(ye=ne,ue&&(ne=1-ne),t.clearDepth(ne))},reset:function(){L=!1,J=null,me=null,ye=null,ue=!1}}}function r(){let L=!1,ue=null,J=null,me=null,ye=null,ne=null,Ce=null,we=null,yt=null;return{setTest:function(ut){L||(ut?re(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(ut){ue!==ut&&!L&&(t.stencilMask(ut),ue=ut)},setFunc:function(ut,Jn,ei){(J!==ut||me!==Jn||ye!==ei)&&(t.stencilFunc(ut,Jn,ei),J=ut,me=Jn,ye=ei)},setOp:function(ut,Jn,ei){(ne!==ut||Ce!==Jn||we!==ei)&&(t.stencilOp(ut,Jn,ei),ne=ut,Ce=Jn,we=ei)},setLocked:function(ut){L=ut},setClear:function(ut){yt!==ut&&(t.clearStencil(ut),yt=ut)},reset:function(){L=!1,ue=null,J=null,me=null,ye=null,ne=null,Ce=null,we=null,yt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},p={},d={},m=new WeakMap,x=[],E=null,g=!1,f=null,_=null,b=null,S=null,w=null,T=null,A=null,v=new $e(0,0,0),C=0,N=!1,I=null,P=null,W=null,Q=null,F=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,D=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=D>=2);let Z=null,te={};const se=t.getParameter(t.SCISSOR_BOX),Ae=t.getParameter(t.VIEWPORT),Xe=new bt().fromArray(se),Fe=new bt().fromArray(Ae);function K(L,ue,J,me){const ye=new Uint8Array(4),ne=t.createTexture();t.bindTexture(L,ne),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<J;Ce++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ye):t.texImage2D(ue+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ye);return ne}const ae={};ae[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(zs),ot(!1),Pt(Zp),re(t.CULL_FACE),ce(Ri);function re(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Oe(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Be(L,ue){return d[L]!==ue?(t.bindFramebuffer(L,ue),d[L]=ue,L===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),L===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(L,ue){let J=x,me=!1;if(L){J=m.get(ue),J===void 0&&(J=[],m.set(ue,J));const ye=L.textures;if(J.length!==ye.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ce=ye.length;ne<Ce;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=ye.length,me=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,me=!0);me&&t.drawBuffers(J)}function Ze(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const We={[Ar]:t.FUNC_ADD,[cE]:t.FUNC_SUBTRACT,[uE]:t.FUNC_REVERSE_SUBTRACT};We[dE]=t.MIN,We[fE]=t.MAX;const de={[hE]:t.ZERO,[pE]:t.ONE,[mE]:t.SRC_COLOR,[Ed]:t.SRC_ALPHA,[SE]:t.SRC_ALPHA_SATURATE,[_E]:t.DST_COLOR,[gE]:t.DST_ALPHA,[xE]:t.ONE_MINUS_SRC_COLOR,[bd]:t.ONE_MINUS_SRC_ALPHA,[yE]:t.ONE_MINUS_DST_COLOR,[vE]:t.ONE_MINUS_DST_ALPHA,[EE]:t.CONSTANT_COLOR,[bE]:t.ONE_MINUS_CONSTANT_COLOR,[ME]:t.CONSTANT_ALPHA,[wE]:t.ONE_MINUS_CONSTANT_ALPHA};function ce(L,ue,J,me,ye,ne,Ce,we,yt,ut){if(L===Ri){g===!0&&(Oe(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),L!==lE){if(L!==f||ut!==N){if((_!==Ar||w!==Ar)&&(t.blendEquation(t.FUNC_ADD),_=Ar,w=Ar),ut)switch(L){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.ONE,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",L);break}else switch(L){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Jp:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",L);break}b=null,S=null,T=null,A=null,v.set(0,0,0),C=0,f=L,N=ut}return}ye=ye||ue,ne=ne||J,Ce=Ce||me,(ue!==_||ye!==w)&&(t.blendEquationSeparate(We[ue],We[ye]),_=ue,w=ye),(J!==b||me!==S||ne!==T||Ce!==A)&&(t.blendFuncSeparate(de[J],de[me],de[ne],de[Ce]),b=J,S=me,T=ne,A=Ce),(we.equals(v)===!1||yt!==C)&&(t.blendColor(we.r,we.g,we.b,yt),v.copy(we),C=yt),f=L,N=!1}function ke(L,ue){L.side===li?Oe(t.CULL_FACE):re(t.CULL_FACE);let J=L.side===pn;ue&&(J=!J),ot(J),L.blending===Ns&&L.transparent===!1?ce(Ri):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;o.setTest(me),me&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ot(L){I!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),I=L)}function Pt(L){L!==sE?(re(t.CULL_FACE),L!==P&&(L===Zp?t.cullFace(t.BACK):L===aE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),P=L}function Ut(L){L!==W&&(z&&t.lineWidth(L),W=L)}function zt(L,ue,J){L?(re(t.POLYGON_OFFSET_FILL),(Q!==ue||F!==J)&&(Q=ue,F=J,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,J))):Oe(t.POLYGON_OFFSET_FILL)}function _t(L){L?re(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=t.TEXTURE0+k-1),Z!==L&&(t.activeTexture(L),Z=L)}function O(L,ue,J){J===void 0&&(Z===null?J=t.TEXTURE0+k-1:J=Z);let me=te[J];me===void 0&&(me={type:void 0,texture:void 0},te[J]=me),(me.type!==L||me.texture!==ue)&&(Z!==J&&(t.activeTexture(J),Z=J),t.bindTexture(L,ue||ae[L]),me.type=L,me.texture=ue)}function on(){const L=te[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function y(){try{t.texSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function B(){try{t.texSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function le(){try{t.texStorage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function fe(){try{t.texStorage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function $(){try{t.texImage2D(...arguments)}catch(L){Je("WebGLState:",L)}}function ee(){try{t.texImage3D(...arguments)}catch(L){Je("WebGLState:",L)}}function he(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function Re(L,ue){p[L]!==ue&&(t.pixelStorei(L,ue),p[L]=ue)}function xe(L){Xe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),Xe.copy(L))}function pe(L){Fe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Fe.copy(L))}function Ie(L,ue){let J=u.get(ue);J===void 0&&(J=new WeakMap,u.set(ue,J));let me=J.get(L);me===void 0&&(me=t.getUniformBlockIndex(ue,L.name),J.set(L,me))}function Le(L,ue){const me=u.get(ue).get(L);c.get(ue)!==me&&(t.uniformBlockBinding(ue,me,L.__bindingPointIndex),c.set(ue,me))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},Z=null,te={},d={},m=new WeakMap,x=[],E=null,g=!1,f=null,_=null,b=null,S=null,w=null,T=null,A=null,v=new $e(0,0,0),C=0,N=!1,I=null,P=null,W=null,Q=null,F=null,Xe.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Oe,bindFramebuffer:Be,drawBuffers:De,useProgram:Ze,setBlending:ce,setMaterial:ke,setFlipSided:ot,setCullFace:Pt,setLineWidth:Ut,setPolygonOffset:zt,setScissorTest:_t,activeTexture:Ct,bindTexture:O,unbindTexture:on,compressedTexImage2D:nt,compressedTexImage3D:R,texImage2D:$,texImage3D:ee,pixelStorei:Re,getParameter:he,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:le,texStorage3D:fe,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:q,scissor:xe,viewport:pe,reset:Ge}}function lA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new tt,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,y){return x?new OffscreenCanvas(R,y):Wl("canvas")}function g(R,y,B){let X=1;const q=nt(R);if((q.width>B||q.height>B)&&(X=B/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(X*q.width),fe=Math.floor(X*q.height);d===void 0&&(d=E(le,fe));const $=y?E(le,fe):d;return $.width=le,$.height=fe,$.getContext("2d").drawImage(R,0,0,le,fe),Ue("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+le+"x"+fe+")."),$}else return"data"in R&&Ue("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function f(R){return R.generateMipmaps}function _(R){t.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,y,B,X,q,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;X&&(fe=e.get("EXT_texture_norm16"),fe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=y;if(y===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&fe&&($=fe.R16_EXT),B===t.SHORT&&fe&&($=fe.R16_SNORM_EXT)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),y===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&fe&&($=fe.RG16_EXT),B===t.SHORT&&fe&&($=fe.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),y===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),y===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),y===t.RGB&&(B===t.UNSIGNED_SHORT&&fe&&($=fe.RGB16_EXT),B===t.SHORT&&fe&&($=fe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),y===t.RGBA){const ee=le?Vl:Ke.getTransfer(q);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=ee===it?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&fe&&($=fe.RGBA16_EXT),B===t.SHORT&&fe&&($=fe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function w(R,y){let B;return R?y===null||y===xi||y===Ya?B=t.DEPTH24_STENCIL8:y===ci?B=t.DEPTH32F_STENCIL8:y===Xa&&(B=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xi||y===Ya?B=t.DEPTH_COMPONENT24:y===ci?B=t.DEPTH_COMPONENT32F:y===Xa&&(B=t.DEPTH_COMPONENT16),B}function T(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==Zt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function v(R){const y=R.target;y.removeEventListener("dispose",v),I(y)}function C(R){const y=i.get(R);if(y.__webglInit===void 0)return;const B=R.source,X=m.get(B);if(X){const q=X[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&N(R),Object.keys(X).length===0&&m.delete(B)}i.remove(R)}function N(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const B=R.source,X=m.get(B);delete X[y.__cacheKey],a.memory.textures--}function I(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let q=0;q<y.__webglFramebuffer[X].length;q++)t.deleteFramebuffer(y.__webglFramebuffer[X][q]);else t.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)t.deleteFramebuffer(y.__webglFramebuffer[X]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=R.textures;for(let X=0,q=B.length;X<q;X++){const le=i.get(B[X]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(B[X])}i.remove(R)}let P=0;function W(){P=0}function Q(){return P}function F(R){P=R}function k(){const R=P;return R>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function D(R,y){const B=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const X=R.image;if(X===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function j(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Oe(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function Z(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Oe(B,R,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function te(R,y){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Be(B,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const se={[Pd]:t.REPEAT,[Ai]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},Ae={[Ht]:t.NEAREST,[CE]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Kc]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},Xe={[PE]:t.NEVER,[UE]:t.ALWAYS,[IE]:t.LESS,[mh]:t.LEQUAL,[DE]:t.EQUAL,[xh]:t.GEQUAL,[LE]:t.GREATER,[OE]:t.NOTEQUAL};function Fe(R,y){if(y.type===ci&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zt||y.magFilter===Kc||y.magFilter===Mo||y.magFilter===Ir||y.minFilter===Zt||y.minFilter===Kc||y.minFilter===Mo||y.minFilter===Ir)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,se[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ae[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ht||y.minFilter!==Mo&&y.minFilter!==Ir||y.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function K(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const X=y.source;let q=m.get(X);q===void 0&&(q={},m.set(X,q));const le=z(y);if(le!==R.__cacheKey){q[le]===void 0&&(q[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),q[le].usedTimes++;const fe=q[R.__cacheKey];fe!==void 0&&(q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&N(y)),R.__cacheKey=le,R.__webglTexture=q[le].texture}return B}function ae(R,y,B){return Math.floor(Math.floor(R/B)/y)}function re(R,y,B,X){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,B,X,y.data);else{le.sort((Re,xe)=>Re.start-xe.start);let fe=0;for(let Re=1;Re<le.length;Re++){const xe=le[fe],pe=le[Re],Ie=xe.start+xe.count,Le=ae(pe.start,y.width,4),Ge=ae(xe.start,y.width,4);pe.start<=Ie+1&&Le===Ge&&ae(pe.start+pe.count-1,y.width,4)===Le?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++fe,le[fe]=pe)}le.length=fe+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Re=0,xe=le.length;Re<xe;Re++){const pe=le[Re],Ie=Math.floor(pe.start/4),Le=Math.ceil(pe.count/4),Ge=Ie%y.width,L=Math.floor(Ie/y.width),ue=Le,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ge,L,ue,J,B,X,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Oe(R,y,B){let X=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=t.TEXTURE_3D);const q=K(R,y),le=y.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+B);const fe=i.get(le);if(le.version!==fe.__version||q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const J=Ke.getPrimaries(Ke.workingColorSpace),me=y.colorSpace===er?null:Ke.getPrimaries(y.colorSpace),ye=y.colorSpace===er||J===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=g(y.image,!1,r.maxTextureSize);ee=on(y,ee);const he=s.convert(y.format,y.colorSpace),Re=s.convert(y.type);let xe=S(y.internalFormat,he,Re,y.normalized,y.colorSpace,y.isVideoTexture);Fe(X,y);let pe;const Ie=y.mipmaps,Le=y.isVideoTexture!==!0,Ge=fe.__version===void 0||q===!0,L=le.dataReady,ue=T(y,ee);if(y.isDepthTexture)xe=w(y.format===Dr,y.type),Ge&&(Le?n.texStorage2D(t.TEXTURE_2D,1,xe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,xe,ee.width,ee.height,0,he,Re,null));else if(y.isDataTexture)if(Ie.length>0){Le&&Ge&&n.texStorage2D(t.TEXTURE_2D,ue,xe,Ie[0].width,Ie[0].height);for(let J=0,me=Ie.length;J<me;J++)pe=Ie[J],Le?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,pe.width,pe.height,he,Re,pe.data):n.texImage2D(t.TEXTURE_2D,J,xe,pe.width,pe.height,0,he,Re,pe.data);y.generateMipmaps=!1}else Le?(Ge&&n.texStorage2D(t.TEXTURE_2D,ue,xe,ee.width,ee.height),L&&re(y,ee,he,Re)):n.texImage2D(t.TEXTURE_2D,0,xe,ee.width,ee.height,0,he,Re,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,xe,Ie[0].width,Ie[0].height,ee.depth);for(let J=0,me=Ie.length;J<me;J++)if(pe=Ie[J],y.format!==Yn)if(he!==null)if(Le){if(L)if(y.layerUpdates.size>0){const ye=Rm(pe.width,pe.height,y.format,y.type);for(const ne of y.layerUpdates){const Ce=pe.data.subarray(ne*ye/pe.data.BYTES_PER_ELEMENT,(ne+1)*ye/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,pe.width,pe.height,1,he,Ce)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,ee.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,xe,pe.width,pe.height,ee.depth,0,pe.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,ee.depth,he,Re,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,xe,pe.width,pe.height,ee.depth,0,he,Re,pe.data)}else{Le&&Ge&&n.texStorage2D(t.TEXTURE_2D,ue,xe,Ie[0].width,Ie[0].height);for(let J=0,me=Ie.length;J<me;J++)pe=Ie[J],y.format!==Yn?he!==null?Le?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,xe,pe.width,pe.height,0,pe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,pe.width,pe.height,he,Re,pe.data):n.texImage2D(t.TEXTURE_2D,J,xe,pe.width,pe.height,0,he,Re,pe.data)}else if(y.isDataArrayTexture)if(Le){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,xe,ee.width,ee.height,ee.depth),L)if(y.layerUpdates.size>0){const J=Rm(ee.width,ee.height,y.format,y.type);for(const me of y.layerUpdates){const ye=ee.data.subarray(me*J/ee.data.BYTES_PER_ELEMENT,(me+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,he,Re,ye)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Re,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,he,Re,ee.data);else if(y.isData3DTexture)Le?(Ge&&n.texStorage3D(t.TEXTURE_3D,ue,xe,ee.width,ee.height,ee.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Re,ee.data)):n.texImage3D(t.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,he,Re,ee.data);else if(y.isFramebufferTexture){if(Ge)if(Le)n.texStorage2D(t.TEXTURE_2D,ue,xe,ee.width,ee.height);else{let J=ee.width,me=ee.height;for(let ye=0;ye<ue;ye++)n.texImage2D(t.TEXTURE_2D,ye,xe,J,me,0,he,Re,null),J>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),p.add(y),J.onpaint=me=>{const ye=me.changedElements;for(const ne of p)ye.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const ye=t.RGBA,ne=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ye,ne,Ce,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Le&&Ge){const J=nt(Ie[0]);n.texStorage2D(t.TEXTURE_2D,ue,xe,J.width,J.height)}for(let J=0,me=Ie.length;J<me;J++)pe=Ie[J],Le?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he,Re,pe):n.texImage2D(t.TEXTURE_2D,J,xe,he,Re,pe);y.generateMipmaps=!1}else if(Le){if(Ge){const J=nt(ee);n.texStorage2D(t.TEXTURE_2D,ue,xe,J.width,J.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Re,ee)}else n.texImage2D(t.TEXTURE_2D,0,xe,he,Re,ee);f(y)&&_(X),fe.__version=le.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Be(R,y,B){if(y.image.length!==6)return;const X=K(R,y),q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const le=i.get(q);if(q.version!==le.__version||X===!0){n.activeTexture(t.TEXTURE0+B);const fe=Ke.getPrimaries(Ke.workingColorSpace),$=y.colorSpace===er?null:Ke.getPrimaries(y.colorSpace),ee=y.colorSpace===er||fe===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,Re=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!he&&!Re?xe[ne]=g(y.image[ne],!0,r.maxCubemapSize):xe[ne]=Re?y.image[ne].image:y.image[ne],xe[ne]=on(y,xe[ne]);const pe=xe[0],Ie=s.convert(y.format,y.colorSpace),Le=s.convert(y.type),Ge=S(y.internalFormat,Ie,Le,y.normalized,y.colorSpace),L=y.isVideoTexture!==!0,ue=le.__version===void 0||X===!0,J=q.dataReady;let me=T(y,pe);Fe(t.TEXTURE_CUBE_MAP,y);let ye;if(he){L&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ge,pe.width,pe.height);for(let ne=0;ne<6;ne++){ye=xe[ne].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){const we=ye[Ce];y.format!==Yn?Ie!==null?L?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,we.width,we.height,Ie,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Ge,we.width,we.height,0,we.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,we.width,we.height,Ie,Le,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Ge,we.width,we.height,0,Ie,Le,we.data)}}}else{if(ye=y.mipmaps,L&&ue){ye.length>0&&me++;const ne=nt(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Re){L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,Ie,Le,xe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,xe[ne].width,xe[ne].height,0,Ie,Le,xe[ne].data);for(let Ce=0;Ce<ye.length;Ce++){const yt=ye[Ce].image[ne].image;L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,yt.width,yt.height,Ie,Le,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Ge,yt.width,yt.height,0,Ie,Le,yt.data)}}else{L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Le,xe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,Ie,Le,xe[ne]);for(let Ce=0;Ce<ye.length;Ce++){const we=ye[Ce];L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Ie,Le,we.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Ge,Ie,Le,we.image[ne])}}}f(y)&&_(t.TEXTURE_CUBE_MAP),le.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function De(R,y,B,X,q,le){const fe=s.convert(B.format,B.colorSpace),$=s.convert(B.type),ee=S(B.internalFormat,fe,$,B.normalized,B.colorSpace),he=i.get(y),Re=i.get(B);if(Re.__renderTarget=y,!he.__hasExternalTextures){const xe=Math.max(1,y.width>>le),pe=Math.max(1,y.height>>le);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,le,ee,xe,pe,y.depth,0,fe,$,null):n.texImage2D(q,le,ee,xe,pe,0,fe,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ct(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,q,Re.__webglTexture,0,_t(y)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,q,Re.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ze(R,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const X=y.depthTexture,q=X&&X.isDepthTexture?X.type:null,le=w(y.stencilBuffer,q),fe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ct(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(y),le,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(y),le,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,le,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const X=y.textures;for(let q=0;q<X.length;q++){const le=X[q],fe=s.convert(le.format,le.colorSpace),$=s.convert(le.type),ee=S(le.internalFormat,fe,$,le.normalized,le.colorSpace);Ct(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(y),ee,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(y),ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(R,y,B){const X=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,y.depthTexture);const he=s.convert(y.depthTexture.format),Re=s.convert(y.depthTexture.type);let xe;y.depthTexture.format===Ui?xe=t.DEPTH_COMPONENT24:y.depthTexture.format===Dr&&(xe=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,y.width,y.height,0,he,Re,null)}}else D(y.depthTexture,0);const le=q.__webglTexture,fe=_t(y),$=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ee=y.depthTexture.format===Dr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)Ct(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,le,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,le,0);else if(y.depthTexture.format===Dr)Ct(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,$,le,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,$,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(R){const y=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=X}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)We(y.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?We(y.__webglFramebuffer[0],R,0):We(y.__webglFramebuffer,R,0)}else if(B){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=t.createRenderbuffer(),Ze(y.__webglDepthbuffer[X],R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,le)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ze(y.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,y,B){const X=i.get(R);y!==void 0&&De(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&de(R)}function ke(R){const y=R.texture,B=i.get(R),X=i.get(y);R.addEventListener("dispose",v);const q=R.textures,le=R.isWebGLCubeRenderTarget===!0,fe=q.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=y.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let ee=0;ee<y.mipmaps.length;ee++)B.__webglFramebuffer[$][ee]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<y.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(fe)for(let $=0,ee=q.length;$<ee;$++){const he=i.get(q[$]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ct(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<q.length;$++){const ee=q[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const he=s.convert(ee.format,ee.colorSpace),Re=s.convert(ee.type),xe=S(ee.internalFormat,he,Re,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),pe=_t(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ze(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,y);for(let $=0;$<6;$++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)De(B.__webglFramebuffer[$][ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ee);else De(B.__webglFramebuffer[$],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(y)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let $=0,ee=q.length;$<ee;$++){const he=q[$],Re=i.get(he);let xe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(xe,Re.__webglTexture),Fe(xe,he),De(B.__webglFramebuffer,R,he,t.COLOR_ATTACHMENT0+$,xe,0),f(he)&&_(xe)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,X.__webglTexture),Fe($,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)De(B.__webglFramebuffer[ee],R,y,t.COLOR_ATTACHMENT0,$,ee);else De(B.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,$,0);f(y)&&_($),n.unbindTexture()}R.depthBuffer&&de(R)}function ot(R){const y=R.textures;for(let B=0,X=y.length;B<X;B++){const q=y[B];if(f(q)){const le=b(R),fe=i.get(q).__webglTexture;n.bindTexture(le,fe),_(le),n.unbindTexture()}}}const Pt=[],Ut=[];function zt(R){if(R.samples>0){if(Ct(R)===!1){const y=R.textures,B=R.width,X=R.height;let q=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),$=y.length>1;if($)for(let he=0;he<y.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<y.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Re=i.get(y[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,B,X,0,0,B,X,q,t.NEAREST),c===!0&&(Pt.length=0,Ut.length=0,Pt.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pt.push(le),Ut.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ut)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let he=0;he<y.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Re=i.get(y[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function _t(R){return Math.min(r.maxSamples,R.samples)}function Ct(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function on(R,y){const B=R.colorSpace,X=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Hl&&B!==er&&(Ke.getTransfer(B)===it?(X!==Yn||q!==Dn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",B)),y}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.getTextureUnits=Q,this.setTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=te,this.rebindTextures=ce,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cA(t,e){function n(i,r=er){let s;const a=Ke.getTransfer(r);if(i===Dn)return t.UNSIGNED_BYTE;if(i===uh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===R0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===N0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===A0)return t.BYTE;if(i===C0)return t.SHORT;if(i===Xa)return t.UNSIGNED_SHORT;if(i===ch)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Oi)return t.HALF_FLOAT;if(i===P0)return t.ALPHA;if(i===I0)return t.RGB;if(i===Yn)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===Dr)return t.DEPTH_STENCIL;if(i===D0)return t.RED;if(i===fh)return t.RED_INTEGER;if(i===Vr)return t.RG;if(i===hh)return t.RG_INTEGER;if(i===ph)return t.RGBA_INTEGER;if(i===ll||i===cl||i===ul||i===dl)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dd||i===Ld||i===Od||i===Ud)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===kd||i===Bd||i===zd||i===Gd||i===zl||i===Hd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fd||i===kd)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zd)return s.COMPRESSED_R11_EAC;if(i===Gd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return s.COMPRESSED_RG11_EAC;if(i===Hd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vd||i===jd||i===Wd||i===Xd||i===Yd||i===Kd||i===qd||i===$d||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jd)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ef)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tf)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nf)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rf||i===sf||i===af)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rf)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===af)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===of||i===lf||i===Gl||i===cf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===of)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new j0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gi({vertexShader:uA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hA extends Yr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,d=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",g=new fA,f={},_=n.getContextAttributes();let b=null,S=null;const w=[],T=[],A=new tt;let v=null;const C=new In;C.viewport=new bt;const N=new In;N.viewport=new bt;const I=[C,N],P=new Eb;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=w[K];return ae===void 0&&(ae=new nu,w[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=w[K];return ae===void 0&&(ae=new nu,w[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=w[K];return ae===void 0&&(ae=new nu,w[K]=ae),ae.getHandSpace()};function F(K){const ae=T.indexOf(K.inputSource);if(ae===-1)return;const re=w[ae];re!==void 0&&(re.update(K.inputSource,K.frame,u||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",z);for(let K=0;K<w.length;K++){const ae=T[K];ae!==null&&(T[K]=null,w[K].disconnect(ae))}W=null,Q=null,g.reset();for(const K in f)delete f[K];e.setRenderTarget(b),m=null,d=null,p=null,r=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(K){u=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Oe=null,Be=null;_.depth&&(Be=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=_.stencil?Dr:Ui,Oe=_.stencil?Ya:xi);const De={colorFormat:n.RGBA8,depthFormat:Be,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new pi(d.textureWidth,d.textureHeight,{format:Yn,type:Dn,depthTexture:new Hs(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new pi(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(K){for(let ae=0;ae<K.removed.length;ae++){const re=K.removed[ae],Oe=T.indexOf(re);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(re))}for(let ae=0;ae<K.added.length;ae++){const re=K.added[ae];let Oe=T.indexOf(re);if(Oe===-1){for(let De=0;De<w.length;De++)if(De>=T.length){T.push(re),Oe=De;break}else if(T[De]===null){T[De]=re,Oe=De;break}if(Oe===-1)break}const Be=w[Oe];Be&&Be.connect(re)}}const D=new G,j=new G;function Z(K,ae,re){D.setFromMatrixPosition(ae.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);const Oe=D.distanceTo(j),Be=ae.projectionMatrix.elements,De=re.projectionMatrix.elements,Ze=Be[14]/(Be[10]-1),We=Be[14]/(Be[10]+1),de=(Be[9]+1)/Be[5],ce=(Be[9]-1)/Be[5],ke=(Be[8]-1)/Be[0],ot=(De[8]+1)/De[0],Pt=Ze*ke,Ut=Ze*ot,zt=Oe/(-ke+ot),_t=zt*-ke;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_t),K.translateZ(zt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Be[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ct=Ze+zt,O=We+zt,on=Pt-_t,nt=Ut+(Oe-_t),R=de*We/O*Ct,y=ce*We/O*Ct;K.projectionMatrix.makePerspective(on,nt,R,y,Ct,O),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ae=K.near,re=K.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(re=g.depthFar)),P.near=N.near=C.near=ae,P.far=N.far=C.far=re,(W!==P.near||Q!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),W=P.near,Q=P.far),P.layers.mask=K.layers.mask|6,C.layers.mask=P.layers.mask&-5,N.layers.mask=P.layers.mask&-3;const Oe=K.parent,Be=P.cameras;te(P,Oe);for(let De=0;De<Be.length;De++)te(Be[De],Oe);Be.length===2?Z(P,C,N):P.projectionMatrix.copy(C.projectionMatrix),se(K,P,Oe)};function se(K,ae,re){re===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=uf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(K){return f[K]};let Ae=null;function Xe(K,ae){if(h=ae.getViewerPose(u||a),x=ae,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Oe=!1;re.length!==P.cameras.length&&(P.cameras.length=0,Oe=!0);for(let We=0;We<re.length;We++){const de=re[We];let ce=null;if(m!==null)ce=m.getViewport(de);else{const ot=p.getViewSubImage(d,de);ce=ot.viewport,We===0&&(e.setRenderTargetTextures(S,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(S))}let ke=I[We];ke===void 0&&(ke=new In,ke.layers.enable(We),ke.viewport=new bt,I[We]=ke),ke.matrix.fromArray(de.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(de.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ce.x,ce.y,ce.width,ce.height),We===0&&(P.matrix.copy(ke.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Oe===!0&&P.cameras.push(ke)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const We=p.getDepthInformation(re[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Be&&Be.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let We=0;We<re.length;We++){const de=re[We].camera;if(de){let ce=f[de];ce||(ce=new j0,f[de]=ce);const ke=p.getCameraImage(de);ce.sourceTexture=ke}}}}for(let re=0;re<w.length;re++){const Oe=T[re],Be=w[re];Oe!==null&&Be!==void 0&&Be.update(Oe,ae,u||a)}Ae&&Ae(K,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Fe=new K0;Fe.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Ae=K},this.dispose=function(){}}}const pA=new At,tv=new ze;tv.set(-1,0,0,0,1,0,0,0,1);function mA(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,W0(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,b,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),E(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,_,b):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===pn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===pn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f),b=_.envMap,S=_.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tv),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,_,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=b*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function E(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const T=w.program;i.uniformBlockBinding(S,T)}function u(S,w){let T=r[S.id];T===void 0&&(g(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",_));const A=w.program;i.updateUBOMapping(S,A);const v=e.render.frame;s[S.id]!==v&&(d(S),s[S.id]=v)}function h(S){const w=p();S.__bindingPointIndex=w;const T=t.createBuffer(),A=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=r[S.id],T=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let v=0,C=T.length;v<C;v++){const N=T[v];if(Array.isArray(N))for(let I=0,P=N.length;I<P;I++)m(N[I],v,I,A);else m(N,v,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,w,T,A){if(E(S,w,T,A)===!0){const v=S.__offset,C=S.value;if(Array.isArray(C)){let N=0;for(let I=0;I<C.length;I++){const P=C[I],W=f(P);x(P,S.__data,N),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function x(S,w,T){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,T)}function E(S,w,T,A){const v=S.value,C=w+"_"+T;if(A[C]===void 0)return typeof v=="number"||typeof v=="boolean"?A[C]=v:ArrayBuffer.isView(v)?A[C]=v.slice():A[C]=v.clone(),!0;{const N=A[C];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return A[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function g(S){const w=S.uniforms;let T=0;const A=16;for(let C=0,N=w.length;C<N;C++){const I=Array.isArray(w[C])?w[C]:[w[C]];for(let P=0,W=I.length;P<W;P++){const Q=I[P],F=Array.isArray(Q.value)?Q.value:[Q.value];for(let k=0,z=F.length;k<z;k++){const D=F[k],j=f(D),Z=T%A,te=Z%j.boundary,se=Z+te;T+=te,se!==0&&A-se<j.storage&&(T+=A-se),Q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=T,T+=j.storage}}}const v=T%A;return v>0&&(T+=A-v),S.__size=T,S.__cache={},this}function f(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",S),w}function _(S){const w=S.target;w.removeEventListener("dispose",_);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function b(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:b}}const gA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function vA(){return ri===null&&(ri=new ob(gA,16,16,Vr,Oi),ri.name="DFG_LUT",ri.minFilter=Zt,ri.magFilter=Zt,ri.wrapS=Ai,ri.wrapT=Ai,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class _A{constructor(e={}){const{canvas:n=kE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Dn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=m,g=new Set([ph,hh,fh]),f=new Set([Dn,xi,Xa,Ya,uh,dh]),_=new Uint32Array(4),b=new Int32Array(4),S=new G;let w=null,T=null;const A=[],v=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,P=null,W=null,Q=null,F=null;this._outputColorSpace=Rn;let k=0,z=0,D=null,j=-1,Z=null;const te=new bt,se=new bt;let Ae=null;const Xe=new $e(0);let Fe=0,K=n.width,ae=n.height,re=1,Oe=null,Be=null;const De=new bt(0,0,K,ae),Ze=new bt(0,0,K,ae);let We=!1;const de=new G0;let ce=!1,ke=!1;const ot=new At,Pt=new G,Ut=new bt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ct(){return D===null?re:1}let O=i;function on(M,U){return n.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",yt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",Jn,!1),O===null){const U="webgl2";if(O=on(U,M),O===null)throw on(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Je("WebGLRenderer: "+M.message),M}let nt,R,y,B,X,q,le,fe,$,ee,he,Re,xe,pe,Ie,Le,Ge,L,ue,J,me,ye,ne;function Ce(){nt=new vw(O),nt.init(),me=new cA(O,nt),R=new uw(O,nt,e,me),y=new oA(O,nt),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),W=O.createFramebuffer(),Q=O.createFramebuffer(),F=O.createFramebuffer(),B=new Sw(O),X=new YT,q=new lA(O,nt,y,X,R,me,B),le=new gw(N),fe=new wb(O),ye=new lw(O,fe),$=new _w(O,fe,B,ye),ee=new bw(O,$,fe,ye,B),L=new Ew(O,R,q),Ie=new dw(X),he=new XT(N,le,nt,R,ye,Ie),Re=new mA(N,X),xe=new qT,pe=new tA(nt),Ge=new ow(N,le,y,ee,x,c),Le=new aA(N,ee,R),ne=new xA(O,B,R,y),ue=new cw(O,nt,B),J=new yw(O,nt,B),B.programs=he.programs,N.capabilities=R,N.extensions=nt,N.properties=X,N.renderLists=xe,N.shadowMap=Le,N.state=y,N.info=B}Ce(),E!==Dn&&(C=new ww(E,n.width,n.height,o,r,s));const we=new hA(N,O);this.xr=we,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize(K,ae,!1))},this.getSize=function(M){return M.set(K,ae)},this.setSize=function(M,U,Y=!0){if(we.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,ae=U,n.width=Math.floor(M*re),n.height=Math.floor(U*re),Y===!0&&(n.style.width=M+"px",n.style.height=U+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(K*re,ae*re).floor()},this.setDrawingBufferSize=function(M,U,Y){K=M,ae=U,re=Y,n.width=Math.floor(M*Y),n.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(E===Dn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(De)},this.setViewport=function(M,U,Y,H){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,U,Y,H),y.viewport(te.copy(De).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(Ze)},this.setScissor=function(M,U,Y,H){M.isVector4?Ze.set(M.x,M.y,M.z,M.w):Ze.set(M,U,Y,H),y.scissor(se.copy(Ze).multiplyScalar(re).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(M){y.setScissorTest(We=M)},this.setOpaqueSort=function(M){Oe=M},this.setTransparentSort=function(M){Be=M},this.getClearColor=function(M){return M.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let H=0;if(M){let V=!1;if(D!==null){const _e=D.texture.format;V=g.has(_e)}if(V){const _e=D.texture.type,Ee=f.has(_e),ve=Ge.getClearColor(),Te=Ge.getClearAlpha(),Ne=ve.r,He=ve.g,je=ve.b;Ee?(_[0]=Ne,_[1]=He,_[2]=je,_[3]=Te,O.clearBufferuiv(O.COLOR,0,_)):(b[0]=Ne,b[1]=He,b[2]=je,b[3]=Te,O.clearBufferiv(O.COLOR,0,b))}else H|=O.COLOR_BUFFER_BIT}U&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),P=M},this.dispose=function(){n.removeEventListener("webglcontextlost",yt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",Jn,!1),Ge.dispose(),xe.dispose(),pe.dispose(),X.dispose(),le.dispose(),ee.dispose(),ye.dispose(),ne.dispose(),he.dispose(),we.dispose(),we.removeEventListener("sessionstart",Th),we.removeEventListener("sessionend",Ah),vr.stop()};function yt(M){M.preventDefault(),am("WebGLRenderer: Context Lost."),I=!0}function ut(){am("WebGLRenderer: Context Restored."),I=!1;const M=B.autoReset,U=Le.enabled,Y=Le.autoUpdate,H=Le.needsUpdate,V=Le.type;Ce(),B.autoReset=M,Le.enabled=U,Le.autoUpdate=Y,Le.needsUpdate=H,Le.type=V}function Jn(M){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ei(M){const U=M.target;U.removeEventListener("dispose",ei),nv(U)}function nv(M){iv(M),X.remove(M)}function iv(M){const U=X.get(M).programs;U!==void 0&&(U.forEach(function(Y){he.releaseProgram(Y)}),M.isShaderMaterial&&he.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,H,V,_e){U===null&&(U=zt);const Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,ve=av(M,U,Y,H,V);y.setMaterial(H,Ee);let Te=Y.index,Ne=1;if(H.wireframe===!0){if(Te=$.getWireframeAttribute(Y),Te===void 0)return;Ne=2}const He=Y.drawRange,je=Y.attributes.position;let Pe=He.start*Ne,at=(He.start+He.count)*Ne;_e!==null&&(Pe=Math.max(Pe,_e.start*Ne),at=Math.min(at,(_e.start+_e.count)*Ne)),Te!==null?(Pe=Math.max(Pe,0),at=Math.min(at,Te.count)):je!=null&&(Pe=Math.max(Pe,0),at=Math.min(at,je.count));const Mt=at-Pe;if(Mt<0||Mt===1/0)return;ye.setup(V,H,ve,Y,Te);let St,lt=ue;if(Te!==null&&(St=fe.get(Te),lt=J,lt.setIndex(St)),V.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*Ct()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(V.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),y.setLineWidth(Wt*Ct()),V.isLineSegments?lt.setMode(O.LINES):V.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else V.isPoints?lt.setMode(O.POINTS):V.isSprite&&lt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Wt=V._multiDrawStarts,Se=V._multiDrawCounts,xn=V._multiDrawCount,Qe=Te?fe.get(Te).bytesPerElement:1,An=X.get(H).currentProgram.getUniforms();for(let ti=0;ti<xn;ti++)An.setValue(O,"_gl_DrawID",ti),lt.render(Wt[ti]/Qe,Se[ti])}else if(V.isInstancedMesh)lt.renderInstances(Pe,Mt,V.count);else if(Y.isInstancedBufferGeometry){const Wt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Se=Math.min(Y.instanceCount,Wt);lt.renderInstances(Pe,Mt,Se)}else lt.render(Pe,Mt)};function wh(M,U,Y){M.transparent===!0&&M.side===li&&M.forceSinglePass===!1?(M.side=pn,M.needsUpdate=!0,so(M,U,Y),M.side=pr,M.needsUpdate=!0,so(M,U,Y),M.side=li):so(M,U,Y)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),T=pe.get(Y),T.init(U),v.push(T),Y.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==Y&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights();const H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){const ve=_e[Ee];wh(ve,Y,V),H.add(ve)}else wh(_e,Y,V),H.add(_e)}),T=v.pop(),H},this.compileAsync=function(M,U,Y=null){const H=this.compile(M,U,Y);return new Promise(V=>{function _e(){if(H.forEach(function(Ee){X.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){V(M);return}setTimeout(_e,10)}nt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let gc=null;function rv(M){gc&&gc(M)}function Th(){vr.stop()}function Ah(){vr.start()}const vr=new K0;vr.setAnimationLoop(rv),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(M){gc=M,we.setAnimationLoop(M),M===null?vr.stop():vr.start()},we.addEventListener("sessionstart",Th),we.addEventListener("sessionend",Ah),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(M,U);const Y=we.enabled===!0&&we.isPresenting===!0,H=C!==null&&(D===null||Y)&&C.begin(N,D);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,U,D),T=pe.get(M,v.length),T.init(U),T.state.textureUnits=q.getTextureUnits(),v.push(T),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),de.setFromProjectionMatrix(ot,ui,U.reversedDepth),ke=this.localClippingEnabled,ce=Ie.init(this.clippingPlanes,ke),w=xe.get(M,A.length),w.init(),A.push(w),we.enabled===!0&&we.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&vc(Ee,U,-1/0,N.sortObjects)}vc(M,U,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(Oe,Be,U.reversedDepth),_t=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,_t&&Ge.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&Ie.beginShadows();const V=T.state.shadowsArray;if(Le.render(V,M,U),ce===!0&&Ie.endShadows(),(H&&C.hasRenderPass())===!1){const Ee=w.opaque,ve=w.transmissive;if(T.setupLights(),U.isArrayCamera){const Te=U.cameras;if(ve.length>0)for(let Ne=0,He=Te.length;Ne<He;Ne++){const je=Te[Ne];Rh(Ee,ve,M,je)}_t&&Ge.render(M);for(let Ne=0,He=Te.length;Ne<He;Ne++){const je=Te[Ne];Ch(w,M,je,je.viewport)}}else ve.length>0&&Rh(Ee,ve,M,U),_t&&Ge.render(M),Ch(w,M,U)}D!==null&&z===0&&(q.updateMultisampleRenderTarget(D),q.updateRenderTargetMipmap(D)),H&&C.end(N),M.isScene===!0&&M.onAfterRender(N,M,U),ye.resetDefaultState(),j=-1,Z=null,v.pop(),v.length>0?(T=v[v.length-1],q.setTextureUnits(T.state.textureUnits),ce===!0&&Ie.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,P!==null&&P.renderEnd()};function vc(M,U,Y,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||de.intersectsSprite(M)){H&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ot);const Ee=ee.update(M),ve=M.material;ve.visible&&w.push(M,Ee,ve,Y,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||de.intersectsObject(M))){const Ee=ee.update(M),ve=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ut.copy(Ee.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(ot)),Array.isArray(ve)){const Te=Ee.groups;for(let Ne=0,He=Te.length;Ne<He;Ne++){const je=Te[Ne],Pe=ve[je.materialIndex];Pe&&Pe.visible&&w.push(M,Ee,Pe,Y,Ut.z,je)}}else ve.visible&&w.push(M,Ee,ve,Y,Ut.z,null)}}const _e=M.children;for(let Ee=0,ve=_e.length;Ee<ve;Ee++)vc(_e[Ee],U,Y,H)}function Ch(M,U,Y,H){const{opaque:V,transmissive:_e,transparent:Ee}=M;T.setupLightsView(Y),ce===!0&&Ie.setGlobalState(N.clippingPlanes,Y),H&&y.viewport(te.copy(H)),V.length>0&&ro(V,U,Y),_e.length>0&&ro(_e,U,Y),Ee.length>0&&ro(Ee,U,Y),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Rh(M,U,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Pe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new pi(1,1,{generateMipmaps:!0,type:Pe?Oi:Dn,minFilter:Ir,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const _e=T.state.transmissionRenderTarget[H.id],Ee=H.viewport||te;_e.setSize(Ee.z*N.transmissionResolutionScale,Ee.w*N.transmissionResolutionScale);const ve=N.getRenderTarget(),Te=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(_e),N.getClearColor(Xe),Fe=N.getClearAlpha(),Fe<1&&N.setClearColor(16777215,.5),N.clear(),_t&&Ge.render(Y);const He=N.toneMapping;N.toneMapping=hi;const je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ce===!0&&Ie.setGlobalState(N.clippingPlanes,H),ro(M,Y,H),q.updateMultisampleRenderTarget(_e),q.updateRenderTargetMipmap(_e),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let at=0,Mt=U.length;at<Mt;at++){const St=U[at],{object:lt,geometry:Wt,material:Se,group:xn}=St;if(Se.side===li&&lt.layers.test(H.layers)){const Qe=Se.side;Se.side=pn,Se.needsUpdate=!0,Nh(lt,Y,H,Wt,Se,xn),Se.side=Qe,Se.needsUpdate=!0,Pe=!0}}Pe===!0&&(q.updateMultisampleRenderTarget(_e),q.updateRenderTargetMipmap(_e))}N.setRenderTarget(ve,Te,Ne),N.setClearColor(Xe,Fe),je!==void 0&&(H.viewport=je),N.toneMapping=He}function ro(M,U,Y){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,_e=M.length;V<_e;V++){const Ee=M[V],{object:ve,geometry:Te,group:Ne}=Ee;let He=Ee.material;He.allowOverride===!0&&H!==null&&(He=H),ve.layers.test(Y.layers)&&Nh(ve,U,Y,Te,He,Ne)}}function Nh(M,U,Y,H,V,_e){M.onBeforeRender(N,U,Y,H,V,_e),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(N,U,Y,H,M,_e),V.transparent===!0&&V.side===li&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,N.renderBufferDirect(Y,U,H,V,M,_e),V.side=pr,V.needsUpdate=!0,N.renderBufferDirect(Y,U,H,V,M,_e),V.side=li):N.renderBufferDirect(Y,U,H,V,M,_e),M.onAfterRender(N,U,Y,H,V,_e)}function so(M,U,Y){U.isScene!==!0&&(U=zt);const H=X.get(M),V=T.state.lights,_e=T.state.shadowsArray,Ee=V.state.version,ve=he.getParameters(M,V.state,_e,U,Y,T.state.lightProbeGridArray),Te=he.getProgramCacheKey(ve);let Ne=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=le.get(M.envMap||H.environment,He),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",ei),Ne=new Map,H.programs=Ne);let je=Ne.get(Te);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===Ee)return Ih(M,ve),je}else ve.uniforms=he.getUniforms(M),P!==null&&M.isNodeMaterial&&P.build(M,Y,ve),M.onBeforeCompile(ve,N),je=he.acquireProgram(ve,Te),Ne.set(Te,je),H.uniforms=ve.uniforms;const Pe=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pe.clippingPlanes=Ie.uniform),Ih(M,ve),H.needsLights=lv(M),H.lightsStateVersion=Ee,H.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=je,H.uniformsList=null,je}function Ph(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=fl.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ih(M,U){const Y=X.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function sv(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let Y=0,H=M.length;Y<H;Y++){const V=M[Y];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function av(M,U,Y,H,V){U.isScene!==!0&&(U=zt),q.resetTextureUnits();const _e=U.fog,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ve=D===null?N.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ke.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=le.get(H.envMap||Ee,Te),He=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,Mt=!!Y.morphAttributes.color;let St=hi;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(St=N.toneMapping);const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Wt=lt!==void 0?lt.length:0,Se=X.get(H),xn=T.state.lights;if(ce===!0&&(ke===!0||M!==Z)){const dt=M===Z&&H.id===j;Ie.setState(H,M,dt)}let Qe=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==xn.state.version||Se.outputColorSpace!==ve||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Ne||H.fog===!0&&Se.fog!==_e||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ie.numPlanes||Se.numIntersection!==Ie.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==je||Se.morphTargets!==Pe||Se.morphNormals!==at||Se.morphColors!==Mt||Se.toneMapping!==St||Se.morphTargetsCount!==Wt||!!Se.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Se.__version=H.version);let An=Se.currentProgram;Qe===!0&&(An=so(H,U,V),P&&H.isNodeMaterial&&P.onUpdateProgram(H,An,Se));let ti=!1,Bi=!1,Kr=!1;const ct=An.getUniforms(),wt=Se.uniforms;if(y.useProgram(An.program)&&(ti=!0,Bi=!0,Kr=!0),H.id!==j&&(j=H.id,Bi=!0),Se.needsLights){const dt=sv(T.state.lightProbeGridArray,V);Se.lightProbeGrid!==dt&&(Se.lightProbeGrid=dt,Bi=!0)}if(ti||Z!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",M.projectionMatrix),ct.setValue(O,"viewMatrix",M.matrixWorldInverse);const Gi=ct.map.cameraPosition;Gi!==void 0&&Gi.setValue(O,Pt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,Bi=!0,Kr=!0)}if(Se.needsLights&&(xn.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",xn.state.directionalShadowMap,q),xn.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",xn.state.spotShadowMap,q),xn.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",xn.state.pointShadowMap,q)),V.isSkinnedMesh){ct.setOptional(O,V,"bindMatrix"),ct.setOptional(O,V,"bindMatrixInverse");const dt=V.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ct.setValue(O,"boneTexture",dt.boneTexture,q))}V.isBatchedMesh&&(ct.setOptional(O,V,"batchingTexture"),ct.setValue(O,"batchingTexture",V._matricesTexture,q),ct.setOptional(O,V,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",V._indirectTexture,q),ct.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",V._colorsTexture,q));const zi=Y.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&L.update(V,Y,An),(Bi||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,ct.setValue(O,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(wt.envMapIntensity.value=U.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=vA()),Bi){if(ct.setValue(O,"toneMappingExposure",N.toneMappingExposure),Se.needsLights&&ov(wt,Kr),_e&&H.fog===!0&&Re.refreshFogUniforms(wt,_e),Re.refreshMaterialUniforms(wt,H,re,ae,T.state.transmissionRenderTarget[M.id]),Se.needsLights&&Se.lightProbeGrid){const dt=Se.lightProbeGrid;wt.probesSH.value=dt.texture,wt.probesMin.value.copy(dt.boundingBox.min),wt.probesMax.value.copy(dt.boundingBox.max),wt.probesResolution.value.copy(dt.resolution)}fl.upload(O,Ph(Se),wt,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fl.upload(O,Ph(Se),wt,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(O,"center",V.center),ct.setValue(O,"modelViewMatrix",V.modelViewMatrix),ct.setValue(O,"normalMatrix",V.normalMatrix),ct.setValue(O,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const dt=H.uniformsGroups;for(let Gi=0,qr=dt.length;Gi<qr;Gi++){const Dh=dt[Gi];ne.update(Dh,An),ne.bind(Dh,An)}}return An}function ov(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function lv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,U,Y){const H=X.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=U,X.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const Y=X.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){D=M,k=U,z=Y;let H=null,V=!1,_e=!1;if(M){const ve=X.get(M);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(M.viewport),se.copy(M.scissor),Ae=M.scissorTest,y.viewport(te),y.scissor(se),y.setScissorTest(Ae),j=-1;return}else if(ve.__webglFramebuffer===void 0)q.setupRenderTarget(M);else if(ve.__hasExternalTextures)q.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(ve.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);const Ne=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?H=Ne[U][Y]:H=Ne[U],V=!0):M.samples>0&&q.useMultisampledRTT(M)===!1?H=X.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[Y]:H=Ne,te.copy(M.viewport),se.copy(M.scissor),Ae=M.scissorTest}else te.copy(De).multiplyScalar(re).floor(),se.copy(Ze).multiplyScalar(re).floor(),Ae=We;if(Y!==0&&(H=W),y.bindFramebuffer(O.FRAMEBUFFER,H)&&y.drawBuffers(M,H),y.viewport(te),y.scissor(se),y.setScissorTest(Ae),V){const ve=X.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,Y)}else if(_e){const ve=U;for(let Te=0;Te<M.textures.length;Te++){const Ne=X.get(M.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,Y,ve)}}else if(M!==null&&Y!==0){const ve=X.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,Y)}j=-1},this.readRenderTargetPixels=function(M,U,Y,H,V,_e,Ee,ve=0){if(!(M&&M.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){y.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ne=M.textures[ve],He=Ne.format,je=Ne.type;if(M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),!R.textureFormatReadable(He)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(je)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&Y>=0&&Y<=M.height-V&&O.readPixels(U,Y,H,V,me.convert(He),me.convert(je),_e)}finally{const Ne=D!==null?X.get(D).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,H,V,_e,Ee,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(U>=0&&U<=M.width-H&&Y>=0&&Y<=M.height-V){y.bindFramebuffer(O.FRAMEBUFFER,Te);const Ne=M.textures[ve],He=Ne.format,je=Ne.type;if(M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),!R.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),O.readPixels(U,Y,H,V,me.convert(He),me.convert(je),0);const at=D!==null?X.get(D).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,at);const Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await BE(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.deleteBuffer(Pe),O.deleteSync(Mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){const H=Math.pow(2,-Y),V=Math.floor(M.image.width*H),_e=Math.floor(M.image.height*H),Ee=U!==null?U.x:0,ve=U!==null?U.y:0;q.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Ee,ve,V,_e),y.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,H=null,V=0,_e=0){let Ee,ve,Te,Ne,He,je,Pe,at,Mt;const St=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(Y!==null)Ee=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Te=Y.isBox3?Y.max.z-Y.min.z:1,Ne=Y.min.x,He=Y.min.y,je=Y.isBox3?Y.min.z:0;else{const wt=Math.pow(2,-V);Ee=Math.floor(St.width*wt),ve=Math.floor(St.height*wt),M.isDataArrayTexture?Te=St.depth:M.isData3DTexture?Te=Math.floor(St.depth*wt):Te=1,Ne=0,He=0,je=0}H!==null?(Pe=H.x,at=H.y,Mt=H.z):(Pe=0,at=0,Mt=0);const lt=me.convert(U.format),Wt=me.convert(U.type);let Se;U.isData3DTexture?(q.setTexture3D(U,0),Se=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),Se=O.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),Se=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const xn=y.getParameter(O.UNPACK_ROW_LENGTH),Qe=y.getParameter(O.UNPACK_IMAGE_HEIGHT),An=y.getParameter(O.UNPACK_SKIP_PIXELS),ti=y.getParameter(O.UNPACK_SKIP_ROWS),Bi=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),y.pixelStorei(O.UNPACK_SKIP_ROWS,He),y.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const Kr=M.isDataArrayTexture||M.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const wt=X.get(M),zi=X.get(U),dt=X.get(wt.__renderTarget),Gi=X.get(zi.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,dt.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let qr=0;qr<Te;qr++)Kr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(M).__webglTexture,V,je+qr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(U).__webglTexture,_e,Mt+qr)),O.blitFramebuffer(Ne,He,Ee,ve,Pe,at,Ee,ve,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||X.has(M)){const wt=X.get(M),zi=X.get(U);y.bindFramebuffer(O.READ_FRAMEBUFFER,Q),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let dt=0;dt<Te;dt++)Kr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,wt.__webglTexture,V,je+dt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,wt.__webglTexture,V),ct?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zi.__webglTexture,_e,Mt+dt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zi.__webglTexture,_e),V!==0?O.blitFramebuffer(Ne,He,Ee,ve,Pe,at,Ee,ve,O.COLOR_BUFFER_BIT,O.NEAREST):ct?O.copyTexSubImage3D(Se,_e,Pe,at,Mt+dt,Ne,He,Ee,ve):O.copyTexSubImage2D(Se,_e,Pe,at,Ne,He,Ee,ve);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Se,_e,Pe,at,Mt,Ee,ve,Te,lt,Wt,St.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,_e,Pe,at,Mt,Ee,ve,Te,lt,St.data):O.texSubImage3D(Se,_e,Pe,at,Mt,Ee,ve,Te,lt,Wt,St):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,Pe,at,Ee,ve,lt,Wt,St.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,Pe,at,St.width,St.height,lt,St.data):O.texSubImage2D(O.TEXTURE_2D,_e,Pe,at,Ee,ve,lt,Wt,St);y.pixelStorei(O.UNPACK_ROW_LENGTH,xn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),y.pixelStorei(O.UNPACK_SKIP_PIXELS,An),y.pixelStorei(O.UNPACK_SKIP_ROWS,ti),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Bi),_e===0&&U.generateMipmaps&&O.generateMipmap(Se),y.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?q.setTextureCube(M,0):M.isData3DTexture?q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?q.setTexture2DArray(M,0):q.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){k=0,z=0,D=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ke._getUnpackColorSpace()}}function yA({isPlaying:t,trackName:e,artist:n}){const i=ie.useRef(null),r=ie.useRef(null),s=ie.useRef(null),[a,o]=ie.useState("ribbon");return ie.useEffect(()=>{const c=i.current;if(!c)return;const u=c.clientWidth||260,h=c.clientHeight||150,p=new tb;p.fog=new vh(657684,.12);const d=new In(50,u/h,.1,100);d.position.set(0,2.5,5.5),d.lookAt(0,0,0);const m=new _A({antialias:!0,alpha:!0});m.setSize(u,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(657684,1),c.innerHTML="",c.appendChild(m.domElement),r.current=m;const x=new bb(10,20,3552581,2039340);x.position.y=-1.2,p.add(x);const E=new io(6,4,32,24),g=new Xl({color:2278750,wireframe:!0,transparent:!0,opacity:.85}),f=new Zn(E,g);f.rotation.x=-Math.PI/2.8,f.position.y=-.2,p.add(f);const _=new _h(.8,1.1,32),b=new Xl({color:13935475,wireframe:!0,side:li,transparent:!0,opacity:.6}),S=new Zn(_,b);S.position.set(0,.8,-1.5),p.add(S);const w=E.attributes.position,T=new Float32Array(w.count);for(let W=0;W<w.count;W++)T[W]=w.getZ(W);let A=0,v=0,C=0;const N=()=>{A+=.04;const W=t?Math.sin(A*3.5)*.4+Math.sin(A*7.2)*.3+.5:.05,Q=t?Math.cos(A*4.8)*.3+Math.sin(A*9.1)*.2+.3:.02;v+=(W-v)*.15,C+=(Q-C)*.15;for(let k=0;k<w.count;k++){const z=w.getX(k),D=w.getY(k);if(t){const j=Math.sin(z*2.2+A*4)*v*.7,Z=Math.cos(D*3+A*3.2)*C*.5,te=Math.sin(Math.sqrt(z*z+D*D)*4-A*5)*(v*.35);w.setZ(k,j+Z+te)}else{const j=Math.sin(z*4-A*2)*.04;w.setZ(k,j)}}w.needsUpdate=!0,S.rotation.z+=t?.03:.005,S.rotation.x=Math.sin(A*.8)*.3;const F=1+v*.4;S.scale.set(F,F,F),t?g.color.setHSL(.35+Math.sin(A*.2)*.08,.9,.5):g.color.setHex(3552581),m.render(p,d),s.current=requestAnimationFrame(N)};s.current=requestAnimationFrame(N);const I=()=>{if(!c)return;const W=c.clientWidth||260,Q=c.clientHeight||150;d.aspect=W/Q,d.updateProjectionMatrix(),m.setSize(W,Q)},P=new ResizeObserver(I);return P.observe(c),()=>{s.current&&cancelAnimationFrame(s.current),P.disconnect(),p.remove(f),p.remove(S),p.remove(x),E.dispose(),g.dispose(),_.dispose(),b.dispose(),m.dispose(),c&&m.domElement&&(c.innerHTML="")}},[t,e,n]),l.jsxs("div",{className:"relative w-full h-full min-h-[175px] bg-[#0b0a11] overflow-hidden flex flex-col justify-between select-none",children:[l.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full"}),l.jsxs("div",{className:"relative z-10 p-2 flex items-center justify-between text-[9px] font-mono text-emerald-400 font-bold bg-black/40 backdrop-blur-2xs border-b border-emerald-900/40",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:`inline-block w-1.5 h-1.5 rounded-full ${t?"bg-emerald-400 animate-pulse":"bg-gray-600"}`}),l.jsx("span",{children:"3D_CRT_SPECTRUM // FFT_512"})]}),l.jsx("span",{className:"text-amber-300",children:t?"LIVE SIGNAL":"SIGNAL IDLE"})]}),l.jsxs("div",{className:"relative z-10 p-1.5 bg-black/60 backdrop-blur-2xs border-t border-emerald-900/40 flex items-center justify-between text-[8px] font-mono text-gray-400",children:[l.jsxs("span",{className:"truncate max-w-[150px] text-emerald-300",children:["> ",e||"TRACK"]}),l.jsx("span",{className:"text-amber-400 font-bold",children:"THREE.JS 60FPS"})]})]})}const SA="/obsolescence-protocol/";function hf(t){const e=t.startsWith("/")?t.slice(1):t;return`${SA}${e}`}function EA({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,currentTrack:a}){const[o,c]=ie.useState(Sd),[u,h]=ie.useState(0),[p,d]=ie.useState(!1),[m,x]=ie.useState("crt"),[E,g]=ie.useState(!1),[f,_]=ie.useState(0),b=o[u]||o[0];ie.useEffect(()=>{if(!a)return;const v=(a.track_name||a.title||"").toLowerCase().trim(),C=(a.artist||"").toLowerCase().trim();let N=o.findIndex(I=>{const P=I.track_name.toLowerCase(),W=I.artist.toLowerCase();return P.includes(v)||v.includes(P)||C&&W.includes(C)});if(N!==-1)S(N);else{const I={id:`DYN_${Date.now()}`,track_name:a.track_name||a.title||"Live Stream Track",artist:a.artist||"Featured Artist",album:a.album||"Digital Audio Stream",coverArt:a.coverArt||hf("album_art.jpg"),youtubeId:a.youtubeId||"5NV6Rdv1a3I"};c(P=>[I,...P]),S(0)}},[a]);const S=v=>{Me.playClick(),h(v),d(!1),g(!0),_(C=>C+1)},w=()=>{Me.playClick(),g(!E),_(v=>v+1)},T=()=>{S((u+1)%o.length)},A=()=>{S((u-1+o.length)%o.length)};return l.jsx(ki,{id:"ipod",title:"iPod CLASSIC // OFFICIAL STUDIO AUDIO ENGINE",isOpen:t,isMinimized:e,onClose:()=>{g(!1),n&&n("ipod")},onMinimize:i,onFocus:r,zIndex:s,width:"max-w-xs",titleBg:"bg-[#1c1b26]",headerIcon:"graphic_eq",initialPosition:{x:100,y:40},children:l.jsxs("div",{className:"flex flex-col items-center bg-[#16151f] rounded-b-xl px-4 sm:px-5 py-4 space-y-3.5 border-x-2 border-b-2 border-[#2e2d3e] font-code-terminal",children:[E&&b.youtubeId&&m!=="video"&&l.jsx("iframe",{title:"YouTube Audio Engine",width:"320",height:"180",src:`https://www.youtube.com/embed/${b.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`,allow:"autoplay; encrypted-media",className:"fixed -left-[9999px] -top-[9999px] w-[320px] h-[180px] pointer-events-auto opacity-0"},`yt-offscreen-${b.id}-${f}`),l.jsxs("div",{className:"w-full flex items-center justify-between gap-1 text-[9px] font-bold",children:[l.jsxs("div",{className:"flex gap-1",children:[l.jsx("button",{onClick:()=>{Me.playClick(),x("crt"),d(!1)},className:`px-1.5 py-0.5 rounded transition-all cursor-pointer ${m==="crt"&&!p?"bg-emerald-600 text-white shadow-[0_0_8px_rgba(16,185,129,0.4)]":"bg-[#242330] text-gray-400 hover:text-white"}`,children:"3D CRT"}),l.jsx("button",{onClick:()=>{Me.playClick(),x("art"),d(!1)},className:`px-1.5 py-0.5 rounded transition-all cursor-pointer ${m==="art"&&!p?"bg-[#d4a373] text-black font-bold":"bg-[#242330] text-gray-400 hover:text-white"}`,children:"CRT ART"}),l.jsx("button",{onClick:()=>{Me.playClick(),x("video"),d(!1)},className:`px-1.5 py-0.5 rounded transition-all cursor-pointer ${m==="video"&&!p?"bg-[#e07a5f] text-black font-bold":"bg-[#242330] text-gray-400 hover:text-white"}`,children:"VIDEO"})]}),l.jsxs("button",{onClick:()=>{Me.playClick(),d(v=>!v)},className:`px-2 py-0.5 rounded transition-all cursor-pointer ${p?"bg-[#81b29a] text-black font-bold":"bg-[#242330] text-gray-400 hover:text-white"}`,children:["LIBRARY (",o.length,")"]})]}),l.jsxs("div",{className:"w-full bg-[#0b0a11] border-2 border-[#2e2d3e] rounded-lg shadow-inner relative overflow-hidden flex flex-col justify-between",style:{minHeight:205},children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none z-30 opacity-20",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"}}),p?l.jsxs("div",{className:"relative z-10 p-3 space-y-0.5 overflow-y-auto",style:{maxHeight:205},children:[l.jsx("p",{className:"text-[9px] font-bold text-[#6b6880] mb-2 border-b border-[#2e2d3e] pb-1",children:"> AUDIO LIBRARY — SELECT TRACK:"}),o.map((v,C)=>l.jsxs("button",{onClick:()=>S(C),className:`w-full text-left px-2 py-1.5 text-[10px] font-bold rounded transition-all cursor-pointer flex items-center justify-between ${C===u?"bg-[#d4a373] text-[#0b0a11]":"text-[#c9c5e0] hover:bg-[#1e1d2c]"}`,children:[l.jsxs("span",{className:"truncate",children:[l.jsxs("span",{className:"text-[#6b6880] mr-1.5",children:[C+1,"."]}),v.track_name]}),l.jsx("span",{className:"text-[9px] opacity-70 ml-2 font-normal flex-shrink-0",children:v.artist.split("ft.")[0].trim()})]},v.id))]}):m==="video"?l.jsxs("div",{className:"relative z-10 p-2 space-y-1 h-full flex flex-col justify-between",style:{minHeight:200},children:[l.jsxs("div",{className:"flex justify-between items-center text-[9px] text-[#81b29a] font-bold pb-1 border-b border-[#2e2d3e]",children:[l.jsx("span",{children:"> CRT_VIDEO_STREAM"}),l.jsxs("span",{className:"text-amber-300 font-mono",children:[u+1,"/",o.length]})]}),l.jsx("div",{className:"w-full h-32 rounded overflow-hidden border border-[#3e3d50] bg-black relative",children:l.jsx("iframe",{title:"YouTube Visible Player",width:"100%",height:"128",src:`https://www.youtube.com/embed/${b.youtubeId}?autoplay=${E?1:0}&controls=1&modestbranding=1&rel=0`,allow:"autoplay; encrypted-media",className:"w-full h-full filter contrast-125 sepia-[0.3]"},`yt-visible-${b.id}-${f}`)}),l.jsxs("p",{className:"text-[8px] text-gray-400 font-mono text-center truncate",children:[b.track_name," — ",b.artist]})]}):m==="crt"?l.jsx(yA,{isPlaying:E,trackName:b.track_name,artist:b.artist}):l.jsxs("div",{className:"relative z-10 p-2.5 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[9px] font-bold text-[#6b6880] border-b border-[#2e2d3e] pb-1 font-mono",children:[l.jsx("span",{className:E?"text-[#81b29a] font-bold":"text-[#6b6880]",children:E?"▶ STREAMING":"❚❚ PAUSED"}),l.jsx("span",{className:"text-emerald-400 font-mono",children:"STUDIO_MASTER"}),l.jsxs("span",{children:[u+1,"/",o.length]})]}),l.jsxs("div",{className:"flex gap-2.5 items-center",children:[l.jsxs("div",{className:"relative w-20 h-20 flex-shrink-0 border-2 border-green-800 bg-black rounded overflow-hidden flex items-center justify-center shadow-[0_0_12px_rgba(0,255,0,0.15)]",children:[l.jsx("img",{src:b.coverArt||"/album_art.jpg",alt:`${b.track_name} Cover`,className:"absolute mix-blend-luminosity",style:{width:"64px",height:"64px",transform:"scale(3.5)",imageRendering:"pixelated",filter:"grayscale(100%) contrast(200%) brightness(75%) sepia(100%) hue-rotate(60deg) saturate(300%)"},onError:v=>{v.target.src="/album_art.jpg"}}),l.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,15,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none z-10"}),l.jsx("div",{className:"absolute inset-0 shadow-[inset_0_0_15px_rgba(0,255,0,0.2)] pointer-events-none z-20"})]}),l.jsxs("div",{className:"flex-1 min-w-0 font-mono space-y-0.5",children:[l.jsxs("p",{className:"font-bold text-[12px] text-[#f0eeff] truncate",children:["> ",b.track_name]}),l.jsx("p",{className:"text-[10px] text-[#81b29a] truncate font-bold",children:b.artist}),l.jsxs("p",{className:"text-[9px] text-[#6b6880] truncate",children:["[",b.album,"]"]}),l.jsx("div",{className:"text-[8px] text-emerald-400 font-bold pt-1",children:E?"● OFFICIAL STUDIO MASTER":"○ PAUSED"})]})]}),l.jsx("div",{className:"text-[8px] text-[#81b29a] font-bold text-center pt-1 border-t border-[#2e2d3e] font-mono truncate",children:"▸ YOUTUBE AUDIO ENGINE // OFFICIAL MASTER"})]})]}),l.jsxs("div",{className:"relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex-shrink-0",style:{background:"radial-gradient(circle at 40% 35%, #2a2839, #141320)",border:"3px solid #2e2d3e",boxShadow:"0 4px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)"},children:[l.jsx("button",{onClick:()=>{Me.playClick(),d(v=>!v)},className:"absolute top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#9e9bb5] hover:text-[#d4a373] transition-colors cursor-pointer",children:"MENU"}),l.jsx("button",{onClick:A,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-[#9e9bb5] hover:text-[#d4a373] transition-colors leading-none cursor-pointer",children:"⏮"}),l.jsx("button",{onClick:T,className:"absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-[#9e9bb5] hover:text-[#d4a373] transition-colors leading-none cursor-pointer",children:"⏭"}),l.jsx("button",{onClick:w,className:"absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[16px] text-[#9e9bb5] hover:text-[#81b29a] transition-colors leading-none cursor-pointer",children:"⏯"}),l.jsx("button",{onClick:w,className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-[11px] transition-all active:scale-95 cursor-pointer",style:{background:E?"radial-gradient(circle at 40% 35%, #00ff00, #008800)":"radial-gradient(circle at 40% 35%, #242230, #18171f)",color:E?"#000":"#9e9bb5",border:"2px solid #3a3850",boxShadow:"0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)"},children:E?"PAUSE":"PLAY"})]})]})})}const Jm=["TIP: Press ⌘K (or Ctrl+K) to open the Command Palette.","TIP: Press [P] to launch the music player — real tracks, real artists.","TIP: Press [S] to open Analytics — sleep, code commits, and fitness data.","TIP: Press [T] to open the Terminal — run commands against your life feed.","TIP: Click any feed card to inspect its raw data stream."];function bA({onOpenTerminal:t,onOpenIPod:e,onOpenCommandPalette:n}){const[i,r]=ie.useState(0),[s,a]=ie.useState(!1),[o,c]=ie.useState(!0),[u,h]=ie.useState(!1),[p,d]=ie.useState(null);ie.useEffect(()=>{const E=setInterval(()=>{r(g=>(g+1)%Jm.length)},12e3);return()=>clearInterval(E)},[]);const m=()=>{Me.playBeep(880,"square",.1),a(!0),setTimeout(()=>a(!1),500),h(!0)},x=E=>{switch(Me.playExec(),a(!0),setTimeout(()=>a(!1),400),E){case"interrogate":d("This dashboard aggregates GitHub commits, Oura sleep, Strava workouts, Spotify listening history, and RescueTime productivity into a single retro life feed.");break;case"shortcuts":d("Shortcuts: [T] Terminal · [S] Stats · [P] iPod · [C] Sources · [M] Mute · [D] Demo · ⌘K Command Palette");break;case"palette":n&&n(),h(!1);break;case"ipod":e&&e(),h(!1);break}};return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"fixed bottom-12 right-6 z-40 flex flex-col items-end pointer-events-auto max-w-[280px]",children:[o&&!u&&l.jsxs("div",{className:"endacopia-clay-card p-2.5 mb-2 max-w-[240px] bg-[#1a1a22] text-[#f4f1de] font-code-terminal text-[11px] border-2 border-[#363545] shadow-lg relative",children:[l.jsxs("div",{className:"flex justify-between items-center border-b border-[#363545] pb-1 mb-1 text-[9px] text-[#81b29a] font-bold",children:[l.jsx("span",{children:"SYSTEM // DASHBOARD TIPS"}),l.jsx("button",{onClick:()=>c(!1),className:"text-gray-400 hover:text-white font-bold",children:"✕"})]}),l.jsxs("p",{className:s?"glitch-text text-white":"",children:["> ",Jm[i]]}),l.jsxs("div",{className:"mt-2 flex gap-1.5 flex-wrap",children:[l.jsx("button",{onClick:()=>h(!0),className:"endacopia-clay-button text-[9px] px-2 py-0.5",children:"💬 HELP"}),l.jsx("button",{onClick:()=>{Me.playClick(),n&&n()},className:"endacopia-clay-button text-[9px] px-2 py-0.5",children:"⌘K Commands"})]})]}),l.jsxs("button",{onClick:m,className:`relative group w-16 h-16 min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-lg bg-[#1a1a22] border-2 border-[#363545] p-0.5 cursor-pointer transform hover:scale-105 active:scale-95 transition-all overflow-hidden shadow-md flex-shrink-0 ${s?"ring-2 ring-[#d4a373]":""}`,title:"THE OVERSEER Mascot - Click to Interrogate",children:[l.jsx("img",{src:hf("overseer.jpg"),alt:"THE OVERSEER Mascot",className:"w-full h-full object-cover rounded"}),l.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#81b29a] border border-black animate-ping"})]})]}),u&&l.jsx(ki,{id:"overseer-dialogue",title:"ENDACOPIA INTERACTIVE PROTOCOL - [THE OVERSEER]",isOpen:u,onClose:()=>h(!1),zIndex:90,width:"max-w-lg",titleBg:"bg-[#242330]",headerIcon:"psychology",initialPosition:{x:60,y:50},children:l.jsxs("div",{className:"bg-[#1a1a22] text-[#81b29a] p-4 font-code-terminal text-[12px] space-y-4 border-2 border-[#363545] rounded-b-lg",children:[l.jsxs("div",{className:"flex gap-4 items-center border-b border-[#363545] pb-3",children:[l.jsx("div",{className:"w-16 h-16 min-w-[64px] max-w-[64px] border-2 border-[#d4a373] bg-black overflow-hidden flex-shrink-0 rounded",children:l.jsx("img",{src:hf("overseer.jpg"),alt:"Overseer",className:"w-full h-full object-cover"})}),l.jsxs("div",{className:"flex-1 space-y-1",children:[l.jsx("p",{className:"font-bold text-white text-[14px]",children:"THE OVERSEER"}),l.jsx("p",{className:"text-[11px] text-gray-400",children:"ENDACOPIA DIGITAL ARCHAEOLOGY MONITOR"}),l.jsx("p",{className:"text-[10px] text-[#81b29a] font-bold",children:"STATUS: SYNCHRONIZED"})]})]}),l.jsx("div",{className:"bg-[#0a0a0d] p-3 border border-[#363545] rounded min-h-[60px] text-white",children:p?l.jsxs("p",{className:"text-[#81b29a] font-bold",children:["> ",p]}):l.jsx("p",{className:"text-gray-300",children:'> THE OVERSEER FIXATES UPON YOU. "WHAT IS YOUR WILL, USER?"'})}),l.jsxs("div",{className:"space-y-1.5 pt-1",children:[l.jsx("p",{className:"text-gray-400 font-bold text-[10px]",children:"> CHOOSE OPTION:"}),l.jsx("button",{onClick:()=>x("interrogate"),className:"w-full text-left endacopia-clay-button text-white font-bold p-2 text-[11px]",children:"[1] WHAT DOES THIS DASHBOARD DO?"}),l.jsx("button",{onClick:()=>x("shortcuts"),className:"w-full text-left endacopia-clay-button text-[#81b29a] font-bold p-2 text-[11px]",children:"[2] SHOW ALL KEYBOARD SHORTCUTS"}),l.jsx("button",{onClick:()=>x("palette"),className:"w-full text-left endacopia-clay-button text-[#d4a373] font-bold p-2 text-[11px]",children:"[3] OPEN COMMAND PALETTE (⌘K)"}),l.jsx("button",{onClick:()=>x("ipod"),className:"w-full text-left endacopia-clay-button text-white font-bold p-2 text-[11px]",children:"[4] LAUNCH MUSIC PLAYER"})]})]})})]})}const MA=t=>[{id:"open-terminal",category:"Navigate",label:"Open Terminal",description:"Launch the interactive CLI terminal",icon:"terminal",shortcut:"T",action:()=>t.onOpenWindow("terminal")},{id:"open-stats",category:"Navigate",label:"Open Analytics Dashboard",description:"View system metrics and life data stats",icon:"analytics",shortcut:"S",action:()=>t.onOpenWindow("stats")},{id:"open-sources",category:"Navigate",label:"Manage Data Sources",description:"Configure API connections (GitHub, Oura, Strava…)",icon:"hub",shortcut:"C",action:()=>t.onOpenWindow("sources")},{id:"open-ipod",category:"Navigate",label:"Open Music Player",description:"Launch the retro iPod — real music from SoundCloud",icon:"graphic_eq",shortcut:"P",action:()=>t.onOpenWindow("ipod")},{id:"open-profile",category:"Navigate",label:"Open Profile — LinkedIn & LeetCode",description:"View coding stats, connections, skills, and rankings",icon:"person",action:()=>t.onOpenWindow("profile")},{id:"open-contact",category:"Navigate",label:"Contact Rohan Joshi — Transmit Dispatch",description:"Direct recruiter & engineering inquiries channel",icon:"mail",action:()=>{var e;return(e=t.onOpenContact)==null?void 0:e.call(t)}},{id:"open-resume",category:"Navigate",label:"Resume & CV — ATS-Optimized Document",description:"Printable & machine-readable software engineer resume",icon:"description",action:()=>{var e;return(e=t.onOpenResume)==null?void 0:e.call(t)}},{id:"open-directives",category:"Navigate",label:"System Directives — Goals & Future Protocols",description:"Sequential tele-printer checklist of engineering milestones",icon:"checklist",action:()=>t.onOpenWindow("directives")},{id:"open-memory",category:"Navigate",label:"Memory Bank Cache — Visual Artifacts & GIFs",description:"Isolated sector of visual logs, Ghibli nostalgia & CRT animations",icon:"photo_library",action:()=>t.onOpenWindow("memory")},{id:"export-json",category:"Data",label:"Export Feed as JSON",description:"Download current life feed as a JSON file",icon:"download",action:()=>{var e;return(e=t.onExport)==null?void 0:e.call(t,"json")}},{id:"export-csv",category:"Data",label:"Export Feed as CSV",description:"Download current life feed as a CSV spreadsheet",icon:"table_view",action:()=>{var e;return(e=t.onExport)==null?void 0:e.call(t,"csv")}},{id:"refresh-data",category:"Data",label:"Refresh Data Stream",description:"Re-fetch all life events from connected sources",icon:"refresh",action:()=>{var e;return(e=t.onRefresh)==null?void 0:e.call(t)}},{id:"toggle-demo",category:"System",label:t.isDemo?"Disable Demo Mode":"Enable Demo Mode",description:t.isDemo?"Switch back to live data sources":"Load anonymised sample data for presentation",icon:t.isDemo?"visibility_off":"play_demo",action:()=>t.onToggleDemo(!t.isDemo)},{id:"toggle-audio",category:"System",label:t.isMuted?"Unmute UI Sounds":"Mute UI Sounds",description:"Toggle retro click / beep sound effects",icon:t.isMuted?"volume_up":"volume_off",shortcut:"M",action:()=>t.onToggleAudio()},{id:"view-github",category:"Links",label:"View on GitHub",description:"Open the source code repository",icon:"code",action:()=>window.open("https://github.com","_blank")},{id:"view-linkedin",category:"Links",label:"LinkedIn Profile",description:"Open LinkedIn profile in new tab",icon:"person",action:()=>window.open("https://linkedin.com","_blank")}],wA=["Navigate","Data","System","Links"];function TA({isOpen:t,onClose:e,onOpenWindow:n,onToggleDemo:i,onToggleAudio:r,onExport:s,onRefresh:a,onOpenContact:o,onOpenResume:c,isDemo:u,isMuted:h}){const[p,d]=ie.useState(""),[m,x]=ie.useState(0),E=ie.useRef(null),g=MA({onOpenWindow:n,onToggleDemo:i,onToggleAudio:r,onExport:s,onRefresh:a,onOpenContact:o,onOpenResume:c,isDemo:u,isMuted:h}),f=p.trim()?g.filter(w=>w.label.toLowerCase().includes(p.toLowerCase())||w.description.toLowerCase().includes(p.toLowerCase())||w.category.toLowerCase().includes(p.toLowerCase())):g,_=wA.reduce((w,T)=>{const A=f.filter(v=>v.category===T);return A.length&&(w[T]=A),w},{});ie.useEffect(()=>{t&&(d(""),x(0),setTimeout(()=>{var w;return(w=E.current)==null?void 0:w.focus()},50))},[t]),ie.useEffect(()=>{if(!t)return;const w=T=>{if(T.key==="ArrowDown")T.preventDefault(),x(A=>Math.min(A+1,f.length-1));else if(T.key==="ArrowUp")T.preventDefault(),x(A=>Math.max(A-1,0));else if(T.key==="Enter"){T.preventDefault();const A=f[m];A&&b(A)}};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[t,f,m]);const b=ie.useCallback(w=>{Me.playExec(),e(),setTimeout(()=>w.action(),80)},[e]);if(!t)return null;let S=0;return l.jsxs("div",{className:"fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]",onClick:e,children:[l.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),l.jsxs("div",{className:"relative w-full max-w-xl mx-4 rounded-xl overflow-hidden shadow-2xl",onClick:w=>w.stopPropagation(),style:{background:"#13121e",border:"1px solid #2e2d3e",boxShadow:"0 32px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,163,115,0.15)"},children:[l.jsxs("div",{className:"flex items-center gap-3 px-4 py-3.5 border-b border-[#2e2d3e]",children:[l.jsx("span",{className:"material-symbols-outlined text-[#6b6880] text-[20px] flex-shrink-0",children:"search"}),l.jsx("input",{ref:E,type:"text",value:p,onChange:w=>{d(w.target.value),x(0)},placeholder:"Search commands…",className:"flex-1 bg-transparent text-[#f0eeff] text-[15px] outline-none placeholder-[#4a4862] font-sans"}),l.jsx("kbd",{className:"text-[10px] font-bold text-[#4a4862] bg-[#1e1d2c] px-2 py-0.5 rounded border border-[#2e2d3e]",children:"ESC"})]}),l.jsx("div",{className:"overflow-y-auto",style:{maxHeight:"55vh"},children:f.length===0?l.jsxs("div",{className:"px-4 py-8 text-center text-[#4a4862] text-[13px] font-code-terminal",children:['No commands match "',p,'"']}):Object.entries(_).map(([w,T])=>l.jsxs("div",{children:[l.jsx("div",{className:"px-4 py-1.5 text-[10px] font-bold text-[#4a4862] uppercase tracking-widest border-b border-[#1e1d2c]",children:w}),T.map(A=>{const v=S===m,C=S++;return l.jsxs("button",{onMouseEnter:()=>x(C),onClick:()=>b(A),className:`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${v?"bg-[#d4a373]/15 border-l-2 border-[#d4a373]":"border-l-2 border-transparent hover:bg-[#1e1d2c]"}`,children:[l.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${v?"bg-[#d4a373]/20":"bg-[#1e1d2c]"}`,children:l.jsx("span",{className:`material-symbols-outlined text-[17px] ${v?"text-[#d4a373]":"text-[#6b6880]"}`,children:A.icon})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("p",{className:`text-[13px] font-semibold truncate ${v?"text-[#f0eeff]":"text-[#c9c5e0]"}`,children:A.label}),l.jsx("p",{className:"text-[11px] text-[#4a4862] truncate",children:A.description})]}),A.shortcut&&l.jsx("kbd",{className:"text-[10px] font-bold text-[#6b6880] bg-[#1e1d2c] px-1.5 py-0.5 rounded border border-[#2e2d3e] flex-shrink-0",children:A.shortcut})]},A.id)})]},w))}),l.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-t border-[#2e2d3e] bg-[#0f0e18]",children:[l.jsx("span",{className:"text-[10px] text-[#4a4862] font-code-terminal",children:"OBSOLESCENCE PROTOCOL // COMMAND PALETTE"}),l.jsxs("div",{className:"flex items-center gap-3 text-[10px] text-[#4a4862]",children:[l.jsxs("span",{children:[l.jsx("kbd",{className:"bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded",children:"↑↓"})," navigate"]}),l.jsxs("span",{children:[l.jsx("kbd",{className:"bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded",children:"↵"})," run"]}),l.jsxs("span",{children:[l.jsx("kbd",{className:"bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded",children:"⌘K"})," toggle"]})]})]})]})]})}const _n={name:"Rohan Joshi",role:"Software Developer Intern @ India Christian Matrimony (ICM)",location:"Bengaluru, Karnataka",email:"rohan.joshi.dev@gmail.com",linkedin:{url:"https://linkedin.com/in/rohanrj1008",skills:["React","FastAPI","PostgreSQL (Supabase)","SwiftUI","PyTorch","TensorFlow","Node.js","Docker","Firebase"]},github:{url:"https://github.com/rohanrjoshii"},leetcode:{url:"https://leetcode.com/u/Rohan2502/",handle:"Rohan2502",easy:62,medium:98,hard:36,ranking:"#862,436",streak:39}};function AA({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=ie.useState(null);ie.useEffect(()=>{t&&fetch(`/api/profile/leetcode/${_n.leetcode.handle}`).then(p=>p.json()).then(p=>{p.error||o(p)}).catch(()=>{})},[t]);const c=(a==null?void 0:a.solved)||_n.leetcode,u=a!=null&&a.ranking?`#${a.ranking.toLocaleString()}`:_n.leetcode.ranking,h=(a==null?void 0:a.streak)??_n.leetcode.streak;return l.jsx(ki,{id:"profile",title:"DEVELOPER_PROFILE // CREDENTIALS & BENCHMARKS",isOpen:t,isMinimized:e,onClose:()=>n("profile"),onMinimize:i,onFocus:r,zIndex:s,width:"max-w-3xl",titleBg:"bg-[#000080]",headerIcon:"badge",initialPosition:{x:70,y:50},children:l.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-4 text-[12px]",children:[l.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center",children:[l.jsxs("div",{children:[l.jsxs("span",{className:"text-secondary-container font-bold text-[13px]",children:["> ENGINEER DOSSIER: ",_n.name.toUpperCase()]}),l.jsxs("p",{className:"text-[11px] text-gray-400",children:[_n.role," · ",_n.location]})]}),l.jsx("span",{className:"bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset",children:"ACTIVE"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"bg-[#1a1a24] p-3 win-bevel-outset space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-[#2e2d3e] pb-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[#5eadf0] text-[18px]",children:"contact_page"}),l.jsx("span",{className:"font-bold text-[#5eadf0]",children:"PROFESSIONAL EXPERIENCE"})]}),l.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Current Role:"}),l.jsx("span",{className:"font-bold text-white",children:"Software Developer Intern"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Company:"}),l.jsx("span",{className:"font-bold text-[#81b29a]",children:"India Christian Matrimony"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Education:"}),l.jsx("span",{className:"font-bold text-[#d4a373]",children:"PES University (BCA)"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Email:"}),l.jsx("span",{className:"font-bold text-white font-mono",children:_n.email})]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-gray-400 font-bold block mb-1",children:"CORE TECH STACK:"}),l.jsx("div",{className:"flex flex-wrap gap-1",children:_n.linkedin.skills.map(p=>l.jsx("span",{className:"bg-[#242330] text-[#81b29a] text-[10px] px-1.5 py-0.5 win-bevel-outset font-mono",children:p},p))})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-1.5 pt-1",children:[l.jsx("a",{href:_n.linkedin.url,target:"_blank",rel:"noopener noreferrer",className:"block text-center win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-1.5 text-[11px] font-bold",children:"LinkedIn →"}),l.jsx("a",{href:_n.github.url,target:"_blank",rel:"noopener noreferrer",className:"block text-center win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-1.5 text-[11px] font-bold",children:"GitHub →"})]})]}),l.jsxs("div",{className:"bg-[#1a1a24] p-3 win-bevel-outset space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-2 border-b border-[#2e2d3e] pb-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[#f59e0b] text-[18px]",children:"code"}),l.jsx("span",{className:"font-bold text-[#f59e0b]",children:"LEETCODE ALGORITHM BENCHMARK"})]}),l.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Handle:"}),l.jsxs("span",{className:"font-bold text-white",children:["@",_n.leetcode.handle]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Global Rank:"}),l.jsx("span",{className:"font-bold text-[#d4a373]",children:u})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-400",children:"Active Streak:"}),l.jsxs("span",{className:"font-bold text-amber-400",children:[h," Days"]})]})]}),l.jsxs("div",{className:"space-y-1.5 pt-1 border-t border-[#2e2d3e]",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-[#22c55e] font-bold",children:"Easy Solved:"}),l.jsx("span",{className:"font-bold text-white",children:c.easy})]}),l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-[#f59e0b] font-bold",children:"Medium Solved:"}),l.jsx("span",{className:"font-bold text-white",children:c.medium})]}),l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-[#ef4444] font-bold",children:"Hard Solved:"}),l.jsx("span",{className:"font-bold text-white",children:c.hard})]}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-1 border-t border-[#2e2d3e] font-bold",children:[l.jsx("span",{className:"text-white",children:"Total Solved:"}),l.jsx("span",{className:"text-[#d4a373] text-[13px]",children:c.total})]})]}),l.jsx("a",{href:_n.leetcode.url,target:"_blank",rel:"noopener noreferrer",className:"block text-center win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-1.5 text-[11px] font-bold mt-2",children:"Open LeetCode Profile →"})]})]})]})})}const yn={name:"Rohan Joshi",title:"Full-Stack & AI Developer",role:"Software Developer Intern @ India Christian Matrimony",phone:"+91 6361195409",location:"Bengaluru, Karnataka",linkedin:{url:"https://linkedin.com/in/rohanrj1008",skills:["React","FastAPI","PostgreSQL","Supabase","SwiftUI","PyTorch","TensorFlow","Node.js","Docker","Firebase","Python","TypeScript"]},github:{url:"https://github.com/rohanrjoshii"},leetcode:{handle:"Rohan2502",url:"https://leetcode.com/u/Rohan2502/"}},CA={easy:{label:"Easy",color:"#22c55e",barColor:"bg-emerald-500",totalInLc:830},medium:{label:"Medium",color:"#f59e0b",barColor:"bg-amber-500",totalInLc:1730},hard:{label:"Hard",color:"#ef4444",barColor:"bg-rose-500",totalInLc:750}};function RA({onOpenContact:t,onOpenResume:e}){var c;const[n,i]=ie.useState(null),[r,s]=ie.useState(!0);ie.useEffect(()=>{fetch(`/api/profile/leetcode/${yn.leetcode.handle}`).then(u=>u.json()).then(u=>{if(u.error)throw new Error(u.error);i(u),s(!1)}).catch(()=>{i({username:yn.leetcode.handle,ranking:862436,solved:{total:196,easy:62,medium:98,hard:36},streak:39,activeDays:78,badges:["50 Days Badge 2026","Jul LeetCoding Challenge"]}),s(!1)})},[]);const a=((c=n==null?void 0:n.solved)==null?void 0:c.total)||196,o=n!=null&&n.ranking?n.ranking.toLocaleString():"862,436";return l.jsx("section",{className:"w-full max-w-6xl mx-auto font-code-terminal",children:l.jsxs("div",{className:"win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]",children:[l.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px] text-primary-container flex-shrink-0",children:"badge"}),l.jsxs("span",{className:"text-[11px] sm:text-[12px] font-bold tracking-wider truncate",children:["DEVELOPER_DOSSIER // TELEMETRY & CREDENTIALS [ID: ",yn.name.toUpperCase(),"]"]})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-gray-300",children:[l.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"}),l.jsx("span",{children:"VERIFIED CREDENTIALS"})]})]}),l.jsx("div",{className:"p-3 sm:p-5 space-y-4 bg-[#141419]",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[l.jsxs("div",{className:"lg:col-span-5 bg-[#1a1a24] p-3.5 sm:p-4 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between space-y-3.5",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-start justify-between border-b border-[#2e2d3e] pb-3",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[l.jsx("h2",{className:"text-[17px] sm:text-[19px] font-bold text-white tracking-wide",children:yn.name}),l.jsx("span",{className:"bg-[#0f6d00] text-white text-[9px] font-bold px-1.5 py-0.5 win-bevel-outset",children:"INTERN @ ICM"})]}),l.jsx("p",{className:"text-[12px] sm:text-[13px] text-[#81b29a] font-bold mt-0.5",children:yn.title}),l.jsxs("p",{className:"text-[11px] text-gray-400 mt-0.5",children:[yn.location," • ",yn.phone]})]}),l.jsxs("div",{className:"text-right flex-shrink-0",children:[l.jsx("span",{className:"text-[10px] text-gray-400 block font-bold",children:"EDUCATION"}),l.jsx("span",{className:"text-[12px] font-bold text-[#d4a373]",children:"PES University"})]})]}),l.jsxs("div",{className:"mt-3 bg-[#242330] p-2.5 win-bevel-inset border-l-2 border-[#d4a373] space-y-0.5",children:[l.jsx("span",{className:"text-[9px] text-gray-400 block uppercase font-bold",children:"Current Production Role:"}),l.jsxs("p",{className:"text-[11px] text-white font-bold",children:["> ",yn.role]}),l.jsx("p",{className:"text-[10px] text-gray-300",children:"FastAPI, PostgreSQL (Supabase RLS), React, CI/CD"})]}),l.jsxs("div",{className:"mt-3 space-y-1.5",children:[l.jsx("span",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider",children:"Core Technical Competencies:"}),l.jsx("div",{className:"flex flex-wrap gap-1.5 pt-0.5",children:yn.linkedin.skills.map(u=>l.jsx("span",{className:"bg-[#242330] text-[#f4f1de] text-[10px] sm:text-[11px] px-2 py-0.5 win-bevel-outset border border-[#3e3d50] font-mono hover:text-[#d4a373] transition-colors",children:u},u))})]})]}),l.jsxs("div",{className:"pt-2 space-y-2",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[l.jsxs("button",{onClick:t,className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-2 px-1.5 text-[11px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer",children:[l.jsx("span",{className:"material-symbols-outlined text-[14px] text-amber-300",children:"mail"}),l.jsx("span",{children:"CONTACT"})]}),l.jsxs("button",{onClick:e,className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-2 px-1.5 text-[11px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer",children:[l.jsx("span",{className:"material-symbols-outlined text-[14px] text-primary-container",children:"description"}),l.jsx("span",{children:"VIEW RESUME"})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[l.jsxs("a",{href:yn.linkedin.url,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-1.5 px-1.5 text-[10px] font-bold transition-all text-center",children:[l.jsx("svg",{className:"w-3 h-3 fill-current text-[#5eadf0]",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),l.jsx("span",{children:"LINKEDIN"})]}),l.jsxs("a",{href:yn.github.url,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-1.5 px-1.5 text-[10px] font-bold transition-all text-center",children:[l.jsx("span",{className:"material-symbols-outlined text-[13px] text-amber-300",children:"code"}),l.jsx("span",{children:"GITHUB"})]})]})]})]}),l.jsxs("div",{className:"lg:col-span-7 bg-[#1a1a24] p-3.5 sm:p-4 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between space-y-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-[#2e2d3e] pb-3 flex-wrap gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[#f59e0b] text-[18px] sm:text-[20px]",children:"code_blocks"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[12px] sm:text-[13px] font-bold text-white",children:"LEETCODE BENCHMARK"}),l.jsxs("span",{className:"text-[10px] sm:text-[11px] text-gray-400 block",children:["HANDLE: @",yn.leetcode.handle]})]})]}),l.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 text-right",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-gray-400 block font-bold",children:"GLOBAL RANK"}),l.jsxs("span",{className:"text-[12px] sm:text-[13px] font-bold text-[#d4a373]",children:["#",o]})]}),(n==null?void 0:n.streak)>0&&l.jsxs("div",{className:"pl-3 border-l border-[#2e2d3e]",children:[l.jsx("span",{className:"text-[10px] text-gray-400 block font-bold",children:"STREAK"}),l.jsxs("span",{className:"text-[12px] sm:text-[13px] font-bold text-amber-400",children:[n.streak," DAYS"]})]})]})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-2 my-3",children:[l.jsxs("div",{className:"bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center",children:[l.jsx("span",{className:"text-[9px] sm:text-[10px] text-gray-400 block font-bold",children:"TOTAL SOLVED"}),l.jsx("span",{className:"text-[17px] sm:text-[20px] font-bold text-white",children:a})]}),l.jsxs("div",{className:"bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center",children:[l.jsx("span",{className:"text-[9px] sm:text-[10px] text-gray-400 block font-bold",children:"ACTIVE DAYS"}),l.jsx("span",{className:"text-[17px] sm:text-[20px] font-bold text-[#81b29a]",children:(n==null?void 0:n.activeDays)||78})]}),l.jsxs("div",{className:"bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center",children:[l.jsx("span",{className:"text-[9px] sm:text-[10px] text-gray-400 block font-bold",children:"STATUS"}),l.jsx("span",{className:"text-[13px] sm:text-[14px] font-bold text-green-400 leading-[26px] sm:leading-[30px]",children:"ACTIVE"})]})]}),l.jsx("div",{className:"space-y-2 sm:space-y-2.5 mt-3",children:Object.entries(CA).map(([u,h])=>{var m;const p=((m=n==null?void 0:n.solved)==null?void 0:m[u])||0,d=Math.min(100,Math.round(p/h.totalInLc*100));return l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[10px] sm:text-[11px] font-mono",children:[l.jsxs("span",{style:{color:h.color},className:"font-bold",children:["> ",h.label.toUpperCase()]}),l.jsxs("span",{className:"text-gray-300",children:[l.jsx("strong",{className:"text-white",children:p})," solved"]})]}),l.jsx("div",{className:"w-full bg-[#121216] h-2.5 win-bevel-inset overflow-hidden",children:l.jsx("div",{className:`h-full ${h.barColor} transition-all duration-700`,style:{width:`${Math.max(4,d*3)}%`}})})]},u)})}),l.jsxs("div",{className:"mt-3.5 pt-3 border-t border-[#2e2d3e] space-y-1.5",children:[l.jsx("span",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-wider block",children:"Featured Systems & Projects:"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px]",children:[l.jsxs("div",{className:"bg-[#242330] p-1.5 win-bevel-inset",children:[l.jsx("span",{className:"font-bold text-emerald-400",children:"⚡ Nimbus (macOS Island)"}),l.jsx("p",{className:"text-gray-300",children:"Swift, AppKit, Kernel APIs"})]}),l.jsxs("div",{className:"bg-[#242330] p-1.5 win-bevel-inset",children:[l.jsx("span",{className:"font-bold text-amber-300",children:"📊 FilterIQ (Data Engine)"}),l.jsx("p",{className:"text-gray-300",children:"FastAPI, Pandas, Docker"})]})]})]})]}),l.jsx("div",{className:"pt-2",children:l.jsxs("a",{href:yn.leetcode.url,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-2 px-3 text-[11px] sm:text-[12px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer text-center",children:[l.jsx("span",{className:"material-symbols-outlined text-[15px] text-[#f59e0b]",children:"open_in_new"}),l.jsx("span",{children:"VIEW LEETCODE PROFILE & SUBMISSIONS →"})]})})]})]})})]})})}const NA=[{time:"08:00",id:"PID_080",process:"REVERSE_GATEWAY_SYNC // Telemetry Ingestion",status:"OK",desc:"Ingest GitHub, Oura & Strava feeds"},{time:"10:00",id:"PID_100",process:"ICM_PRODUCTION_SPRINT // Supabase RLS & React UI",status:"ACTIVE",desc:"Ship production matrimonial features"},{time:"14:00",id:"PID_140",process:"DISTRIBUTED_SYSTEMS // Architecture & Docker",status:"OK",desc:"Low-latency API proxies & caching"},{time:"17:00",id:"PID_170",process:"LEETCODE_ALGO_PASS // Daily 39d Streak",status:"ACTIVE",desc:"Algorithmic benchmarks (Med/Hard)"},{time:"19:00",id:"PID_190",process:"STRAVA_CYCLING_TELEMETRY // Cadence & GPS",status:"WAIT",desc:"22.8km evening endurance ride"},{time:"23:00",id:"PID_230",process:"OURA_SLEEP_MONITOR // Deep Rest Telemetry",status:"STANDBY",desc:"86% sleep efficiency baseline"}];function PA(){return l.jsx("section",{className:"w-full max-w-6xl mx-auto font-code-terminal",children:l.jsxs("div",{className:"win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]",children:[l.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px] text-emerald-400",children:"schedule"}),l.jsx("span",{className:"text-[11px] sm:text-[12px] font-bold tracking-wider",children:"SYS.CRON // DAEMON_TASKS & OPERATIONAL CADENCE"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-[11px] font-bold",children:[l.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{className:"bg-emerald-600 text-black px-1.5 py-0.2 rounded-xs font-bold text-[9px]",children:"LIVE DAEMON"})]})]}),l.jsxs("div",{className:"p-3 sm:p-4 bg-[#141419] space-y-2.5",children:[l.jsxs("div",{className:"grid grid-cols-12 gap-2 text-gray-400 text-[10px] sm:text-[11px] font-bold pb-1.5 border-b border-[#2e2d3e] uppercase tracking-wider",children:[l.jsx("div",{className:"col-span-2 sm:col-span-2",children:"TIMESTAMP"}),l.jsx("div",{className:"col-span-2 hidden sm:block",children:"PROCESS_ID"}),l.jsx("div",{className:"col-span-7 sm:col-span-6",children:"TASK_PAYLOAD"}),l.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:"STATUS"})]}),l.jsx("div",{className:"space-y-1.5",children:NA.map((t,e)=>{const n=t.status==="ACTIVE",i=t.status==="OK",r=n?"bg-emerald-500 text-black animate-pulse":i?"bg-[#242330] text-emerald-400 border border-emerald-800/60":"bg-[#181822] text-gray-500 border border-gray-800";return l.jsxs("div",{className:`grid grid-cols-12 gap-2 items-center p-2 win-bevel-inset border border-[#2e2d3e] text-[11px] sm:text-[12px] font-mono transition-colors ${n?"bg-[#1a221a] border-emerald-500/40":"bg-[#1a1a24] hover:bg-[#20202c]"}`,children:[l.jsxs("div",{className:"col-span-2 sm:col-span-2 text-amber-300 font-bold",children:["[",t.time,"]"]}),l.jsx("div",{className:"col-span-2 hidden sm:block text-gray-400 font-bold",children:t.id}),l.jsx("div",{className:"col-span-7 sm:col-span-6 text-white truncate",children:l.jsx(Bl,{text:t.process,delay:14,startDelay:e*260,showCursor:n})}),l.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:l.jsxs("span",{className:`inline-block px-1.5 py-0.5 text-[9px] font-bold win-bevel-outset ${r}`,children:["[",t.status,"]"]})})]},t.id)})}),l.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono",children:[l.jsx("span",{children:"SCHEDULE: 24-HOUR AUTOMATED CADENCE"}),l.jsx("span",{className:"text-[#81b29a] font-bold",children:"6/6 DAEMONS SCHEDULED"})]})]})]})})}const ex=[{label:"LIFETIME_COMMITS",value:"1,420",unit:"OPS",status:"SYNCED",desc:"GitHub Production & OSS Commits"},{label:"DISTANCE_CYCLED",value:"840.5",unit:"KM",status:"ACTIVE",desc:"Strava GPS Cadence & Endurance"},{label:"TOTAL_CODE_HOURS",value:"2,150",unit:"HRS",status:"TRACKED",desc:"Deep Work & Architecture Time"},{label:"BOOKS_&_PAPERS",value:"52",unit:"VOL",status:"PARSED",desc:"Technical & CS Research Papers"},{label:"ALGO_BENCHMARKS",value:"196",unit:"PTS",status:"ACTIVE",desc:"LeetCode Solved (39d Streak)"},{label:"AUDIO_STREAMS",value:"3,840",unit:"TRK",status:"STREAMED",desc:"SoundCloud & Spotify Telemetry"}];function IA(){const[t,e]=ie.useState(ex),[n,i]=ie.useState(0);return ie.useEffect(()=>{const r=setInterval(()=>{i(s=>(s+1)%ex.length)},2800);return()=>clearInterval(r)},[]),l.jsx("section",{className:"w-full max-w-6xl mx-auto font-code-terminal",children:l.jsxs("div",{className:"win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]",children:[l.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px] text-amber-300",children:"speed"}),l.jsx("span",{className:"text-[11px] sm:text-[12px] font-bold tracking-wider",children:"SYS.TELEMETRY // MACRO_METRICS_AGGREGATOR [ODOMETER]"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-[11px] font-bold",children:[l.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"}),l.jsx("span",{className:"text-gray-300 font-mono",children:"ODOMETER_REGISTERS: 6/6 OK"})]})]}),l.jsxs("div",{className:"p-3 sm:p-4 bg-[#141419] space-y-3",children:[l.jsxs("div",{className:"flex justify-between items-center text-[10px] text-gray-400 border-b border-[#2e2d3e] pb-1.5 font-mono",children:[l.jsx("span",{children:"> LIFETIME AGGREGATED TELEMETRY [NON-VOLATILE CACHE]"}),l.jsx("span",{className:"text-emerald-400 font-bold",children:"STATUS: VERIFIED"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3",children:t.map((r,s)=>{const a=n===s;return l.jsxs("div",{className:`p-3 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between transition-all hover:border-[#81b29a] ${a?"bg-[#182218] border-emerald-500/50":"bg-[#1a1a24]"}`,children:[l.jsxs("div",{className:"flex justify-between items-start gap-1",children:[l.jsx("span",{className:"text-gray-400 text-[9px] sm:text-[10px] tracking-wider font-bold uppercase truncate",children:r.label}),l.jsxs("span",{className:"text-[9px] font-mono text-gray-600",children:["0x",70+s]})]}),l.jsxs("div",{className:"flex items-baseline gap-1.5 my-2",children:[l.jsx("span",{className:"text-xl sm:text-2xl font-black text-white font-mono tracking-tight select-all",children:r.value}),l.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-amber-400 font-mono",children:r.unit})]}),l.jsxs("div",{className:"flex justify-between items-center text-[9px] border-t border-[#2e2d3e] pt-1.5 font-mono",children:[l.jsx("span",{className:"text-gray-500 truncate max-w-[110px]",children:r.desc}),l.jsxs("span",{className:"text-emerald-400 font-bold flex-shrink-0",children:["[",r.status,"]"]})]})]},s)})}),l.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono",children:[l.jsx("span",{children:"ODOMETER_ENGINE: ACTIVE POLLING (2800ms)"}),l.jsx("span",{className:"text-[#81b29a] font-bold",children:'TYPE "metrics" IN CLI FOR AUDIT'})]})]})]})})}function DA({isOpen:t,onClose:e}){if(!t)return null;const n=()=>{Me.playExec(),window.print()},i=()=>{Me.playClick();const r=`================================================================================
                                 ROHAN JOSHI
  Bengaluru, Karnataka • +91 6361195409 • rohan.joshi.dev@gmail.com
  LinkedIn: linkedin.com/in/rohanrj1008 • GitHub: github.com/rohanrjoshii
================================================================================

SUMMARY
Full-stack developer with experience building production web applications using React,
FastAPI, PostgreSQL (Supabase), Firebase, and SwiftUI. Built AI-powered applications
using PyTorch and TensorFlow, including a deepfake detection platform and real-time
emotion recognition system.

--------------------------------------------------------------------------------
EXPERIENCE
--------------------------------------------------------------------------------
Software Developer Intern                                 Dec 2025 – Present
India Christian Matrimony (ICM)                           Bengaluru, India
• Built a full-stack matrimonial platform with 15+ responsive UI screens,
  authentication workflows, backend APIs, and CI/CD deployment pipelines.
• Built the Supabase (PostgreSQL) backend with Row Level Security (RLS) for secure
  real-time sync and scalable profile management.
• Developed onboarding, profile management, and matchmaking features using React,
  Supabase, and REST APIs.
• Implemented RESTful API layer with structured validation and optimised client-server
  data handling.

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Frontend: React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite
• Backend: FastAPI, Node.js, Firebase, REST APIs
• Databases: PostgreSQL (Supabase), MySQL, Firestore
• AI / ML: PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP
• Languages: Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS
• Tools: Docker, Git, GitHub Actions, CI/CD

--------------------------------------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------------------------------------
1. Nimbus | macOS Dynamic Island Clone (Swift, SwiftUI, AppKit, CoreLocation, EventKit)
   • Built a macOS Dynamic Island clone with live system monitoring (CPU, RAM,
     network, battery), media controls, real-time weather, and calendar integration
     with zero external dependencies.
   • Engineered morphing between 5 window geometries using NSPanel + NSAnimationContext
     with cubic Bézier easing; sourced telemetry directly from raw kernel APIs
     (host_processor_info, IOKit, getifaddrs).
   • Integrated CoreLocation + Open-Meteo weather, EventKit calendar, and SMAppService
     launch-at-login with graceful permission-denied fallbacks.

2. FilterIQ | Smart Data Filtering App (Python, FastAPI, Pandas, JavaScript, Docker)
   • Built a full-stack app for filtering Excel/CSV/PDF files via natural language
     queries, processing 10,000+ rows in under 2 seconds.
   • Engineered a data normalisation system with 95%+ accuracy using regex + Pandas,
     supporting 12+ operators (equals, contains, between, AND/OR logic).
   • Reduced manual filtering time by 80%; built responsive UI with Chart.js
     visualisations and dark/light themes.

3. Satya | Deepfake Detection Platform (React, FastAPI, PyTorch, OpenCV)
   • Developed an AI-powered deepfake detection platform achieving 90%+ prediction
     accuracy on manipulated media during internal testing.
   • Integrated OpenCV frame-extraction pipeline processing 500+ video frames per
     submission; displayed real-time confidence scores via React frontend.

4. BizzConnect | B2B Networking App (Flutter, Firebase, K-Means)
   • Built a location-based B2B networking app with intelligent business discovery
     powered by K-Means clustering for matchmaking relevance.
   • Implemented Firebase backend with authentication and real-time profile updates
     for 100+ simulated users.

--------------------------------------------------------------------------------
CERTIFICATIONS
--------------------------------------------------------------------------------
• Oracle OCI Generative AI Professional – Oracle
• Google AI Intensive (5-Day) – Google
• McKinsey Forward Program – McKinsey & Company
• AI Fluency for Students – Anthropic

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
PES University, RR Campus                                 Bengaluru, India
Bachelor of Computer Applications (BCA)                   Aug 2023 – May 2026
================================================================================`,s=new Blob([r],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download="Rohan_Joshi_Software_Developer_Resume.txt",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)};return l.jsx("div",{className:"fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs font-code-terminal",onClick:e,children:l.jsxs("div",{className:"w-full max-w-3xl max-h-[90vh] win-window win-bevel-outset bg-[#1b1b24] shadow-[16px_16px_0px_rgba(0,0,0,0.95)] border-2 border-[#363545] flex flex-col",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between select-none flex-shrink-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px] text-amber-300",children:"description"}),l.jsx("span",{className:"text-[12px] font-bold tracking-wider",children:"ATS_RESUME_VIEWER // ROHAN_JOSHI_RESUME.PDF"})]}),l.jsx("button",{onClick:()=>{Me.playClick(),e()},className:"win-bevel-button bg-gray-300 text-black px-2 py-0.5 text-[11px] font-bold hover:bg-white leading-none",children:"✕"})]}),l.jsxs("div",{className:"bg-[#242330] p-2.5 border-b border-[#363545] flex items-center justify-between gap-2 flex-wrap flex-shrink-0",children:[l.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-gray-300",children:[l.jsx("span",{className:"bg-[#0f6d00] text-white text-[9px] font-bold px-1.5 py-0.5 win-bevel-outset",children:"ATS-OPTIMIZED"}),l.jsx("span",{className:"hidden sm:inline",children:"Clean, machine-readable developer curriculum vitae."})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:i,className:"win-bevel-button bg-gray-300 hover:bg-white text-black px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 cursor-pointer",children:[l.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"download"}),l.jsx("span",{children:"DOWNLOAD .TXT"})]}),l.jsxs("button",{onClick:n,className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-3 py-1 text-[11px] font-bold flex items-center gap-1 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] cursor-pointer",children:[l.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"print"}),l.jsx("span",{children:"PRINT / PDF →"})]})]})]}),l.jsxs("div",{className:"p-4 sm:p-6 overflow-y-auto bg-[#ffffff] text-[#111111] font-mono text-[11px] sm:text-[12px] leading-relaxed space-y-4 select-text",children:[l.jsxs("div",{className:"text-center border-b-2 border-black pb-3",children:[l.jsx("h1",{className:"text-[22px] sm:text-[26px] font-black tracking-tight uppercase",children:"Rohan Joshi"}),l.jsxs("p",{className:"text-[11px] text-gray-700 mt-0.5",children:["Bengaluru, Karnataka • +91 6361195409 • ",l.jsx("a",{href:"mailto:rohan.joshi.dev@gmail.com",className:"underline font-bold",children:"rohan.joshi.dev@gmail.com"})]}),l.jsxs("p",{className:"text-[11px] text-gray-700 mt-0.5",children:["LinkedIn: ",l.jsx("a",{href:"https://linkedin.com/in/rohanrj1008",target:"_blank",rel:"noreferrer",className:"underline font-bold",children:"linkedin.com/in/rohanrj1008"})," • GitHub: ",l.jsx("a",{href:"https://github.com/rohanrjoshii",target:"_blank",rel:"noreferrer",className:"underline font-bold",children:"github.com/rohanrjoshii"})]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Summary"}),l.jsxs("p",{className:"text-gray-900",children:["Full-stack developer with experience building production web applications using ",l.jsx("strong",{children:"React"}),", ",l.jsx("strong",{children:"FastAPI"}),", ",l.jsx("strong",{children:"PostgreSQL (Supabase)"}),", ",l.jsx("strong",{children:"Firebase"}),", and ",l.jsx("strong",{children:"SwiftUI"}),". Built AI-powered applications using ",l.jsx("strong",{children:"PyTorch"})," and ",l.jsx("strong",{children:"TensorFlow"}),", including a deepfake detection platform and real-time emotion recognition system."]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Experience"}),l.jsxs("div",{className:"space-y-1 text-gray-900",children:[l.jsxs("div",{className:"flex justify-between font-bold",children:[l.jsx("span",{children:"Software Developer Intern"}),l.jsx("span",{className:"text-gray-600",children:"Dec 2025 – Present"})]}),l.jsxs("div",{className:"flex justify-between text-gray-700 italic text-[11px]",children:[l.jsx("span",{children:"India Christian Matrimony (ICM)"}),l.jsx("span",{children:"Bengaluru, India"})]}),l.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] pt-1",children:[l.jsx("li",{children:"Built a full-stack matrimonial platform with 15+ responsive UI screens, authentication workflows, backend APIs, and CI/CD deployment pipelines."}),l.jsx("li",{children:"Built the Supabase (PostgreSQL) backend with Row Level Security (RLS) for secure real-time sync and scalable profile management."}),l.jsx("li",{children:"Developed onboarding, profile management, and matchmaking features using React, Supabase, and REST APIs."}),l.jsx("li",{children:"Implemented RESTful API layer with structured validation and optimised client-server data handling."})]})]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Skills"}),l.jsxs("div",{className:"space-y-1 text-gray-900 text-[11px]",children:[l.jsxs("p",{children:[l.jsx("strong",{children:"Frontend:"})," React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Backend:"})," FastAPI, Node.js, Firebase, REST APIs"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Databases:"})," PostgreSQL (Supabase), MySQL, Firestore"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"AI / ML:"})," PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Languages:"})," Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Tools:"})," Docker, Git, GitHub Actions, CI/CD"]})]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Projects"}),l.jsxs("div",{className:"space-y-2.5 text-gray-900",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[l.jsx("span",{children:"Nimbus | macOS Dynamic Island Clone"}),l.jsx("span",{className:"text-gray-600",children:"June 2026"})]}),l.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"Swift, SwiftUI, AppKit, CoreLocation, EventKit"}),l.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[l.jsx("li",{children:"Built a macOS Dynamic Island clone with live system monitoring (CPU, RAM, network, battery), media controls, real-time weather, and calendar integration — zero external dependencies."}),l.jsx("li",{children:"Engineered morphing between 5 window geometries using NSPanel + NSAnimationContext with cubic Bézier easing; sourced telemetry directly from raw kernel APIs (host_processor_info, IOKit, getifaddrs)."}),l.jsx("li",{children:"Integrated CoreLocation + Open-Meteo weather, EventKit calendar, and SMAppService launch-at-login with graceful permission-denied fallbacks."})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[l.jsx("span",{children:"FilterIQ | Smart Data Filtering App"}),l.jsx("span",{className:"text-gray-600",children:"Feb 2026"})]}),l.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"Python, FastAPI, Pandas, JavaScript, Docker"}),l.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[l.jsx("li",{children:"Built a full-stack app for filtering Excel/CSV/PDF files via natural language queries, processing 10,000+ rows in under 2 seconds."}),l.jsx("li",{children:"Engineered a data normalisation system with 95%+ accuracy using regex + Pandas, supporting 12+ operators (equals, contains, between, AND/OR logic)."}),l.jsx("li",{children:"Reduced manual filtering time by 80%; built responsive UI with Chart.js visualisations and dark/light themes."})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[l.jsx("span",{children:"Satya | Deepfake Detection Platform"}),l.jsx("span",{className:"text-gray-600",children:"Jan 2025"})]}),l.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"React, FastAPI, PyTorch, OpenCV"}),l.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[l.jsx("li",{children:"Developed an AI-powered deepfake detection platform achieving 90%+ prediction accuracy on manipulated media during internal testing."}),l.jsx("li",{children:"Integrated OpenCV frame-extraction pipeline processing 500+ video frames per submission; displayed real-time confidence scores via React frontend."})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[l.jsx("span",{children:"BizzConnect | B2B Networking App"}),l.jsx("span",{className:"text-gray-600",children:"May 2024 – Dec 2025"})]}),l.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"Flutter, Firebase, K-Means"}),l.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[l.jsx("li",{children:"Built a location-based B2B networking app with intelligent business discovery powered by K-Means clustering for matchmaking relevance."}),l.jsx("li",{children:"Implemented Firebase backend with authentication and real-time profile updates for 100+ simulated users."})]})]})]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Certifications"}),l.jsxs("ul",{className:"list-disc list-inside text-gray-900 text-[11px] space-y-0.5",children:[l.jsx("li",{children:"Oracle OCI Generative AI Professional – Oracle"}),l.jsx("li",{children:"Google AI Intensive (5-Day) – Google"}),l.jsx("li",{children:"McKinsey Forward Program – McKinsey & Company"}),l.jsx("li",{children:"AI Fluency for Students – Anthropic"})]})]}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Education"}),l.jsxs("div",{className:"flex justify-between text-gray-900 font-bold text-[11px]",children:[l.jsx("span",{children:"PES University, RR Campus"}),l.jsx("span",{className:"text-gray-600",children:"Aug 2023 – May 2026"})]}),l.jsx("p",{className:"text-[11px] text-gray-700",children:"Bachelor of Computer Applications (BCA) • Bengaluru, India"})]})]}),l.jsxs("div",{className:"bg-[#1b1b24] px-4 py-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 flex-shrink-0",children:[l.jsx("span",{children:"VERIFIED RESUME // ROHAN JOSHI"}),l.jsx("button",{onClick:e,className:"hover:text-white font-bold cursor-pointer",children:"[ESC] CLOSE"})]})]})})}const LA=[{id:1,status:"DONE",category:"SYSTEM",title:"Architect Obsolescence Protocol Reverse Gateway",desc:"Fault-isolated proxy aggregating 5+ live telemetry APIs with in-memory TTL caching.",date:"Aug 2026"},{id:2,status:"DONE",category:"PRODUCTION",title:"Ship Production Matrimonial Platform @ ICM",desc:"Engineered Supabase PostgreSQL RLS backend and 15+ responsive React screens.",date:"Dec 2025"},{id:3,status:"DONE",category:"SYSTEM",title:"Build Nimbus macOS Dynamic Island Clone",desc:"Sourced telemetry directly from raw kernel APIs (host_processor_info, IOKit) in Swift/AppKit.",date:"June 2026"},{id:4,status:"DONE",category:"ALGORITHM",title:"Maintain 39d LeetCode Daily Streak & 196+ Solved",desc:"Verified problem solving benchmark across Easy, Medium, and Hard tiers.",date:"Ongoing"},{id:5,status:"PEND",category:"ACADEMIC",title:"Graduate BCA @ PES University (RR Campus)",desc:"Complete Bachelor of Computer Applications degree in Bengaluru, India.",date:"May 2026"},{id:6,status:"PEND",category:"ALGORITHM",title:"Target 500+ LeetCode Solved & Knight Tier Benchmark",desc:"Scale algorithmic mastery across dynamic programming, graphs, and system design.",date:"Q4 2026"},{id:7,status:"PEND",category:"CAREER",title:"Secure High-Impact Full-Stack / Distributed SWE Role",desc:"Join engineering team building resilient distributed systems and low-latency APIs.",date:"Active"},{id:8,status:"PEND",category:"OPEN_SOURCE",title:"Open-Source Retro Telemetry OS Component Framework",desc:"Package window state engine, Web Audio oscillators, and Three.js CRT visualizer.",date:"Queued"}];function OA({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=ie.useState(LA),[c,u]=ie.useState("ALL"),[h,p]=ie.useState(0),d=_=>{Me.playClick(),o(b=>b.map(S=>S.id===_?{...S,status:S.status==="DONE"?"PEND":"DONE"}:S))},m=()=>{Me.playExec(),p(_=>_+1)},x=a.filter(_=>c==="ACTIVE"?_.status==="PEND":c==="DONE"?_.status==="DONE":!0),E=a.filter(_=>_.status==="DONE").length,g=a.length,f=Math.round(E/g*100);return l.jsx(ki,{id:"directives",title:"SYSTEM_DIRECTIVES // GOALS & FUTURE PROTOCOLS",isOpen:t,isMinimized:e,onClose:()=>n("directives"),onMinimize:i,onFocus:r,zIndex:s,width:"max-w-2xl",titleBg:"bg-[#000080]",headerIcon:"checklist",initialPosition:{x:60,y:50},children:l.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-3.5 text-[12px]",children:[l.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-emerald-400 font-bold text-[13px]",children:"> ACTIVE SYSTEM DIRECTIVES:"}),l.jsxs("span",{className:"text-amber-300 font-mono text-[11px] font-bold",children:[E,"/",g," EXECUTED (",f,"%)"]})]}),l.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:"Personal engineering roadmap & long-term protocol directives."})]}),l.jsx("button",{onClick:m,className:"win-bevel-button bg-[#242330] hover:bg-[#343340] text-gray-300 px-2 py-1 text-[10px] font-bold cursor-pointer",title:"Re-run Typewriter Stream",children:"↻ RE-STREAM"})]}),l.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-[#2e2d3e] pb-2 flex-wrap",children:[l.jsx("div",{className:"flex gap-1 text-[10px]",children:["ALL","ACTIVE","DONE"].map(_=>l.jsx("button",{onClick:()=>{Me.playClick(),u(_)},className:`px-2 py-0.5 win-bevel-outset font-bold cursor-pointer ${c===_?"bg-[#000080] text-white":"bg-[#242330] text-gray-400 hover:text-white"}`,children:_==="ACTIVE"?"ACTIVE (PENDING)":_==="DONE"?"EXECUTED (DONE)":"ALL DIRECTIVES"},_))}),l.jsx("span",{className:"text-[10px] text-gray-400 font-mono",children:"CLICK [ ] TO TOGGLE STATUS"})]}),l.jsx("div",{className:"space-y-2 max-h-[360px] overflow-y-auto pr-1",children:x.map((_,b)=>{const S=_.status==="DONE";return l.jsx("div",{onClick:()=>d(_.id),className:`p-2.5 win-bevel-inset border border-[#2e2d3e] cursor-pointer transition-all hover:border-[#81b29a] ${S?"bg-[#181822]/80 opacity-85":"bg-[#1e1e2c]"}`,children:l.jsxs("div",{className:"flex items-start gap-2.5",children:[l.jsxs("span",{className:`font-mono text-[14px] font-bold leading-none select-none flex-shrink-0 mt-0.5 ${S?"text-emerald-400":"text-amber-400"}`,children:["[",S?"X":" ","]"]}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2",children:[l.jsx("span",{className:`text-[12px] font-bold tracking-wide ${S?"text-emerald-300 line-through":"text-white"}`,children:l.jsx(Bl,{text:_.title,delay:16,startDelay:b*220,showCursor:!S})}),l.jsx("span",{className:"text-[9px] bg-[#121218] text-gray-400 px-1.5 py-0.5 win-bevel-outset font-mono flex-shrink-0",children:_.category})]}),l.jsxs("p",{className:"text-[11px] text-gray-400 mt-0.5 font-mono",children:["> ",_.desc]})]})]})},_.id)})},h),l.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400",children:[l.jsx("span",{children:"DIRECTIVE PROTOCOL: ENGAGED"}),l.jsx("span",{className:"text-[#81b29a] font-bold",children:'TYPE "directives" IN CLI TO OPEN'})]})]})})}const Tu=[{id:"MEM_01",title:"SYSTEM_BOOT_SEQUENCE.GIF",tag:"CORE_OS",size:"1.2 MB",hash:"0x8F9A",url:"https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",desc:"Low-level kernel initialization & BIOS memory diagnostic dump."},{id:"MEM_02",title:"NEURAL_NET_TRAINING.GIF",tag:"AI_ML",size:"890 KB",hash:"0x3C4B",url:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",desc:"Deepfake & transformer weight convergence backprop stream."},{id:"MEM_03",title:"GHIBLI_TRAIN_COASTAL.GIF",tag:"NOSTALGIA",size:"1.8 MB",hash:"0x9E21",url:"https://media.giphy.com/media/xUPGGwW6EXLUVOic00/giphy.gif",desc:"Spirited Away serene ocean railway memory bank sector."},{id:"MEM_04",title:"RETRO_CYBER_MATRIX.GIF",tag:"CORE_OS",size:"1.4 MB",hash:"0x55FA",url:"https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif",desc:"Green phosphorescent terminal cascade and telemetry flux."},{id:"MEM_05",title:"DOCKER_CONTAINER_CLUSTER.GIF",tag:"INFRA",size:"950 KB",hash:"0x1A8E",url:"https://media.giphy.com/media/Y408WUTP9u4ESwYVBl/giphy.gif",desc:"Fault-isolated reverse gateway container orchestration."},{id:"MEM_06",title:"GHIBLI_STUDY_DESK.GIF",tag:"NOSTALGIA",size:"2.1 MB",hash:"0x4D0C",url:"https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",desc:"Whisper of the Heart midnight engineering & writing desk."}];function UA({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=ie.useState("ALL"),[c,u]=ie.useState(Tu[0]),h=Tu.filter(p=>a==="ALL"?!0:p.tag===a);return l.jsx(ki,{id:"memory",title:"MEMORY_BANK_CACHE // VISUAL ARTIFACTS & SECTOR DUMP",isOpen:t,isMinimized:e,onClose:()=>n("memory"),onMinimize:i,onFocus:r,zIndex:s,width:"max-w-4xl",titleBg:"bg-[#000080]",headerIcon:"photo_library",initialPosition:{x:50,y:35},children:l.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-4 text-[12px]",children:[l.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-300 font-bold text-[13px]",children:"> DIR: C:\\MEMORY_CACHE\\SECTOR_07\\"}),l.jsxs("span",{className:"text-emerald-400 font-mono text-[11px] font-bold",children:["[",Tu.length," ARTIFACTS MOUNTED]"]})]}),l.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:"Isolated sectors of visual logs, Ghibli nostalgia, and architecture telemetry."})]}),l.jsx("span",{className:"bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset",children:"CACHE: ONLINE"})]}),l.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-[#2e2d3e] pb-2 flex-wrap",children:[l.jsx("div",{className:"flex gap-1 text-[10px]",children:["ALL","CORE_OS","AI_ML","INFRA","NOSTALGIA"].map(p=>l.jsx("button",{onClick:()=>{Me.playClick(),o(p)},className:`px-2 py-0.5 win-bevel-outset font-bold cursor-pointer transition-all ${a===p?"bg-[#000080] text-white":"bg-[#242330] text-gray-400 hover:text-white"}`,children:p},p))}),l.jsx("span",{className:"text-[10px] text-gray-400 font-mono",children:"SELECT THUMBNAIL TO PREVIEW"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-4",children:[l.jsxs("div",{className:"md:col-span-7 bg-[#1a1a24] p-3 win-bevel-outset space-y-2.5 flex flex-col justify-between",children:[l.jsxs("div",{className:"flex justify-between items-center text-[10px] text-gray-400 border-b border-[#2e2d3e] pb-1.5 font-mono",children:[l.jsx("span",{className:"text-emerald-400 font-bold",children:c.title}),l.jsxs("span",{children:[c.size," · ",c.hash]})]}),l.jsxs("div",{className:"relative bg-black rounded border-2 border-[#2e2d3e] overflow-hidden aspect-video flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 opacity-20",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"}}),l.jsx("img",{src:c.url,alt:c.title,className:"w-full h-full object-cover",loading:"lazy"})]}),l.jsxs("div",{className:"bg-[#121218] p-2.5 win-bevel-inset border border-[#2e2d3e] space-y-1",children:[l.jsxs("div",{className:"flex justify-between items-center text-[10px]",children:[l.jsx("span",{className:"text-gray-400 font-bold uppercase",children:"Sector Tag:"}),l.jsxs("span",{className:"text-amber-300 font-mono font-bold",children:["[",c.tag,"]"]})]}),l.jsxs("p",{className:"text-[11px] text-gray-300 font-mono",children:["> ",c.desc]})]})]}),l.jsx("div",{className:"md:col-span-5 space-y-2 max-h-[380px] overflow-y-auto pr-1",children:h.map(p=>{const d=c.id===p.id;return l.jsxs("div",{onClick:()=>{Me.playClick(),u(p)},className:`p-2 win-bevel-inset border border-[#2e2d3e] cursor-pointer flex gap-2.5 items-center transition-all hover:border-[#81b29a] ${d?"bg-[#222a22] border-emerald-500/60":"bg-[#1a1a24]"}`,children:[l.jsx("div",{className:"w-12 h-12 bg-black rounded border border-[#3e3d50] overflow-hidden flex-shrink-0 relative",children:l.jsx("img",{src:p.url,alt:p.title,className:"w-full h-full object-cover opacity-80",loading:"lazy"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"flex justify-between items-baseline",children:l.jsx("span",{className:`text-[11px] font-bold truncate block ${d?"text-emerald-300":"text-white"}`,children:p.title})}),l.jsxs("div",{className:"flex justify-between items-center text-[9px] text-gray-400 mt-1 font-mono",children:[l.jsxs("span",{children:["[",p.tag,"]"]}),l.jsx("span",{children:p.size})]})]})]},p.id)})})]}),l.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono",children:[l.jsx("span",{children:"STORAGE: NON-VOLATILE FLASH CACHE"}),l.jsx("span",{className:"text-[#81b29a] font-bold",children:'TYPE "memory" OR "gallery" IN CLI'})]})]})})}function FA({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=ie.useState({callsign:"",frequency:"",classification:"RECRUITER",payload:""}),[c,u]=ie.useState("IDLE"),[h,p]=ie.useState(""),d="rohan.joshi.dev@gmail.com";if(ie.useEffect(()=>{if(c==="ENCRYPTING"){const g="0123456789ABCDEF$#@%*!<>~_/";let f=0;const _=16,b=setInterval(()=>{let S="";for(let w=0;w<48;w++)S+=g[Math.floor(Math.random()*g.length)];p(S),f++,f>=_&&(clearInterval(b),u("TRANSMITTING"),setTimeout(()=>{u("SENT"),Me.playExec()},1200))},70);return()=>clearInterval(b)}},[c]),!t)return null;const m=g=>{g.preventDefault(),!(!a.callsign.trim()||!a.frequency.trim()||!a.payload.trim())&&(Me.playExec(),u("ENCRYPTING"))},x=()=>{Me.playClick(),o({callsign:"",frequency:"",classification:"RECRUITER",payload:""}),u("IDLE")},E=()=>{Me.playExec();const g=encodeURIComponent(`[${a.classification}] Transmission from ${a.callsign||"Recruiter"}`),f=encodeURIComponent(`SENDER_CALLSIGN: ${a.callsign}
RETURN_FREQUENCY: ${a.frequency}
CLASSIFICATION: ${a.classification}

PAYLOAD:
${a.payload}`);window.location.href=`mailto:${d}?subject=${g}&body=${f}`};return l.jsx(ki,{id:"transmission",title:"SYS.TRANSMITTER // PGP_SECURE_RELAY [PORT_25]",isOpen:t,isMinimized:e,onClose:()=>{u("IDLE"),n&&n("transmission")},onMinimize:i,onFocus:r,zIndex:s,width:"max-w-lg",titleBg:"bg-[#000080]",headerIcon:"mark_email_read",initialPosition:{x:65,y:40},children:l.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 sm:p-5 space-y-4 text-[12px]",children:[l.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2",children:[l.jsxs("div",{children:[l.jsxs("span",{className:"text-emerald-400 font-bold text-[12px] block font-mono",children:["> DESTINATION: ROHAN JOSHI [",d,"]"]}),l.jsx("p",{className:"text-[10px] text-gray-400 font-mono mt-0.5",children:"Secure PGP-Encrypted Dispatch Protocol · Bengaluru Sector"})]}),l.jsx("span",{className:"bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset",children:"RELAY: ARMED"})]}),c==="SENT"?l.jsxs("div",{className:"py-6 px-4 bg-[#182218] border border-emerald-500/50 win-bevel-inset text-center space-y-3 font-mono",children:[l.jsx("div",{className:"inline-block p-2 rounded-full bg-emerald-500 text-black mb-1",children:l.jsx("span",{className:"material-symbols-outlined text-2xl font-bold",children:"check_circle"})}),l.jsx("p",{className:"text-emerald-400 font-bold text-[14px]",children:"> TRANSMISSION DELIVERED TO GATEWAY [200 OK]"}),l.jsx("p",{className:"text-gray-300 text-[11px]",children:"Payload encrypted & logged for Rohan Joshi. Expected turnaround: <12 hours."}),l.jsxs("div",{className:"bg-black/60 p-2 border border-emerald-900 text-[10px] text-emerald-600 font-mono text-left space-y-0.5",children:[l.jsx("div",{children:"ENCRYPTION_HASH : SHA256_0x7FE99B8820A"}),l.jsxs("div",{children:["SENDER_CALLSIGN : ",a.callsign]}),l.jsxs("div",{children:["CLASSIFICATION  : [",a.classification,"]"]})]}),l.jsxs("div",{className:"pt-2 flex justify-center gap-2 flex-wrap",children:[l.jsx("button",{onClick:E,className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-3 py-1.5 text-[11px] font-bold cursor-pointer",children:"OPEN IN DEFAULT MAIL CLIENT →"}),l.jsx("button",{onClick:x,className:"win-bevel-button bg-[#242330] hover:bg-[#343340] text-gray-300 px-3 py-1.5 text-[11px] font-bold cursor-pointer",children:"TRANSMIT ANOTHER"})]})]}):c==="ENCRYPTING"||c==="TRANSMITTING"?l.jsxs("div",{className:"py-8 px-4 bg-black border-2 border-emerald-500/60 win-bevel-inset text-center space-y-3 font-mono",children:[l.jsxs("div",{className:"text-emerald-400 font-bold text-[13px] animate-pulse",children:["> ",c==="ENCRYPTING"?"ENCRYPTING BUFFER VIA PGP SHA-256 CIPHER...":"RELAYING THROUGH REVERSE GATEWAY..."]}),l.jsx("div",{className:"text-emerald-500 text-[12px] font-mono break-all tracking-widest bg-[#0a120a] p-3 border border-emerald-900 select-none",children:h}),l.jsx("p",{className:"text-[10px] text-gray-400",children:"Generating cryptographic payload handshake on PORT_25..."})]}):l.jsxs("form",{onSubmit:m,className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> CLASSIFICATION LEVEL:"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["RECRUITER","COLLABORATION","GENERAL_QUERY"].map(g=>l.jsxs("button",{type:"button",onClick:()=>{Me.playClick(),o({...a,classification:g})},className:`py-1 px-1.5 win-bevel-outset text-[10px] font-bold font-mono cursor-pointer transition-all ${a.classification===g?"bg-[#000080] text-white border-white":"bg-[#242330] text-gray-400 hover:text-white"}`,children:["[",g,"]"]},g))})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> SENDER_CALLSIGN (NAME):"}),l.jsx("input",{required:!0,type:"text",value:a.callsign,onChange:g=>o({...a,callsign:g.target.value}),className:"w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-emerald-500 rounded",placeholder:"e.g. Alex Mercer"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> RETURN_FREQUENCY (EMAIL):"}),l.jsx("input",{required:!0,type:"email",value:a.frequency,onChange:g=>o({...a,frequency:g.target.value}),className:"w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-emerald-500 rounded",placeholder:"e.g. alex@company.com"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> PAYLOAD_BUFFER (MESSAGE):"}),l.jsx("textarea",{required:!0,rows:4,value:a.payload,onChange:g=>o({...a,payload:g.target.value}),className:"w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono p-2 text-[11px] focus:outline-none focus:border-emerald-500 rounded resize-none",placeholder:"Enter technical proposal, role requirements, or general inquiry..."})]}),l.jsxs("div",{className:"pt-2 flex justify-between items-center border-t border-[#2e2d3e] font-mono",children:[l.jsx("span",{className:"text-[10px] text-gray-500",children:"PGP_STATUS: IDLE_WAIT"}),l.jsxs("button",{type:"submit",className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-4 py-2 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer",children:[l.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"lock"}),l.jsx("span",{children:"[ EXECUTE TRANSMISSION ]"})]})]})]})]})})}const Au=["AWARD MODULAR BIOS v4.51PG, An Energy Star Ally","Copyright (C) 1984-2026, Award Software, Inc.","PENTIUM-PRO CPU at 200MHz","Memory Test : 65536K OK","Award Plug and Play BIOS Extension v1.0A","Initialize Plug and Play Cards...","PNP Init Completed","Detecting Primary Master ... OBSOLESCENCE_SSD_512MB","Detecting Primary Slave  ... NONE","Mounting ROHAN_JOSHI_KERNEL (v4.19.95-darwin)... [OK]","Initializing Reverse Gateway Subsystem (Port 3000)... [OK]","Synchronizing In-Memory TTL Cache Layer (180s)... [OK]","Loading Telemetry Daemons (GitHub, Oura, Strava)... [OK]","Mounting PGP Secure Transmission Relay (Port 25)... [OK]","Allocating WebGL Three.js CRT Shaders (60 FPS)... [OK]","Bypassing Security Protocols & System Guardrails... [DONE]","==========================================================","INIT: OBSOLESCENCE PROTOCOL v4.19.95 ENGAGED — SYSTEM READY"];function kA({onBootComplete:t}){const[e,n]=ie.useState([]),[i,r]=ie.useState(0);return ie.useEffect(()=>{let s=0;const a=setInterval(()=>{s<Au.length?(Me.playClick(),n(c=>[...c,Au[s]]),s++,r(Math.round(s/Au.length*100))):(clearInterval(a),Me.playExec(),setTimeout(t,700))},140),o=c=>{(c.key==="Escape"||c.key===" "||c.key==="Enter")&&(clearInterval(a),Me.playExec(),t())};return window.addEventListener("keydown",o),()=>{clearInterval(a),window.removeEventListener("keydown",o)}},[t]),l.jsxs("div",{className:"fixed inset-0 z-[200] bg-black text-[#00ff00] font-code-terminal flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden cursor-pointer",onClick:()=>{Me.playExec(),t()},children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none z-30 opacity-30",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"}}),l.jsxs("div",{className:"relative z-20 flex justify-between items-start border-b border-[#00ff00]/40 pb-3 text-[11px] sm:text-[13px] font-mono",children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-bold text-[#00ff00] tracking-wider text-[13px] sm:text-[15px]",children:"> OBSOLESCENCE KERNEL BOOTLOADER // BIOS v4.19"}),l.jsx("div",{className:"text-gray-400 text-[10px] sm:text-[11px]",children:"ROHAN JOSHI ARCHITECTURE · BENGALURU SECTOR"})]}),l.jsxs("div",{className:"text-right font-mono",children:[l.jsxs("span",{className:"text-amber-400 font-bold animate-pulse text-[11px]",children:["BOOTING ",i,"%"]}),l.jsx("div",{className:"text-[10px] text-gray-500 hidden sm:block",children:"[PRESS SPACE / ESC TO SKIP]"})]})]}),l.jsxs("div",{className:"relative z-20 flex-1 my-4 overflow-y-auto space-y-1 text-[11px] sm:text-[13px] font-mono leading-snug",children:[e.map((s,a)=>l.jsx("div",{className:s.includes("OK")||s.includes("DONE")||s.includes("ENGAGED")?"text-[#00ff00] font-bold":s.includes("==")?"text-amber-300 font-bold":"text-[#88ff88]",children:s},a)),l.jsx("div",{className:"inline-block w-2.5 h-4 bg-[#00ff00] animate-pulse ml-0.5 align-middle"})]}),l.jsxs("div",{className:"relative z-20 border-t border-[#00ff00]/40 pt-2 flex justify-between items-center text-[10px] sm:text-[11px] text-gray-400 font-mono",children:[l.jsx("span",{children:"GATEWAY: CONNECTED (127.0.0.1:3000)"}),l.jsx("button",{onClick:s=>{s.stopPropagation(),Me.playExec(),t()},className:"text-[#00ff00] hover:text-white font-bold underline cursor-pointer",children:"[SKIP TO DESKTOP]"})]})]})}function BA({windows:t=[],activeWindowId:e,onToggleWindow:n,onOpenWindow:i,onToggleAudio:r,isMuted:s,isDemo:a,onToggleDemo:o,onOpenCommandPalette:c}){const[u,h]=ie.useState(!1),[p,d]=ie.useState("");return ie.useEffect(()=>{const m=()=>{d(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}))};m();const x=setInterval(m,1e3);return()=>clearInterval(x)},[]),l.jsxs("footer",{className:"fixed bottom-0 left-0 w-full z-50 bg-[#c0c0c0] border-t-2 border-white win-bevel-outset flex justify-between items-center h-10 px-1 font-code-terminal text-code-terminal",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsxs("div",{className:"relative",children:[l.jsxs("button",{onClick:()=>{Me.playClick(),h(!u)},className:`win-bevel-button px-3 py-1 font-bold flex items-center gap-1.5 text-[12px] text-black ${u?"bg-gray-400 border-black":"bg-gray-300"}`,children:[l.jsx("span",{className:"material-symbols-outlined text-[18px] text-[#000080]",style:{fontVariationSettings:'"FILL" 1'},children:"grid_view"}),l.jsx("span",{children:"Start"})]}),u&&l.jsx("div",{className:"absolute bottom-11 left-0 w-64 bg-[#c0c0c0] win-bevel-outset shadow-[8px_8px_0px_rgba(0,0,0,0.8)] z-50 p-[2px]",onClick:()=>h(!1),children:l.jsxs("div",{className:"flex",children:[l.jsx("div",{className:"w-8 bg-[#000080] text-white font-bold flex items-end justify-center pb-4 tracking-widest text-[12px] [writing-mode:vertical-lr] transform rotate-180",children:"OBSOLESCENCE OS"}),l.jsxs("div",{className:"flex-1 p-1 space-y-1 text-black font-code-terminal text-[12px]",children:[l.jsxs("button",{onClick:()=>i("terminal"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"terminal"}),l.jsx("span",{children:"Terminal CLI"})]}),l.jsxs("button",{onClick:()=>i("stats"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"analytics"}),l.jsx("span",{children:"Analytics Dashboard"})]}),l.jsxs("button",{onClick:()=>i("sources"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"hub"}),l.jsx("span",{children:"API Connections"})]}),l.jsxs("button",{onClick:()=>i("profile"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"person"}),l.jsx("span",{children:"LinkedIn & LeetCode"})]}),l.jsxs("button",{onClick:()=>i("directives"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"checklist"}),l.jsx("span",{children:"Directives & Goals"})]}),l.jsxs("button",{onClick:()=>i("ipod"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"graphic_eq"}),l.jsx("span",{children:"Music Player"})]}),l.jsxs("button",{onClick:()=>i("memory"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"photo_library"}),l.jsx("span",{children:"Memory & GIF Cache"})]}),l.jsxs("button",{onClick:()=>i("transmission"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"mark_email_read"}),l.jsx("span",{children:"Contact & Dispatch Relay"})]}),l.jsx("hr",{className:"border-gray-400 my-1"}),l.jsxs("button",{onClick:()=>o(!a),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"science"}),l.jsxs("span",{children:["Synthetic Demo: ",a?"ON":"OFF"]})]}),l.jsxs("button",{onClick:r,className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:s?"volume_off":"volume_up"}),l.jsxs("span",{children:["Audio Synth: ",s?"MUTED":"ACTIVE"]})]}),c&&l.jsxs("button",{onClick:c,className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"search"}),l.jsx("span",{children:"Command Palette (⌘K)"})]})]})]})})]}),l.jsx("div",{className:"hidden sm:flex items-center gap-1 overflow-x-auto max-w-2xl",children:t.map(m=>{const x=e===m.id&&!m.isMinimized;return l.jsxs("button",{onClick:()=>{Me.playClick(),n(m.id)},className:`win-bevel-button px-2 py-1 text-[11px] font-bold truncate max-w-[130px] flex items-center gap-1 text-black ${x?"bg-gray-400 border-black":"bg-gray-300"}`,children:[l.jsx("span",{className:"material-symbols-outlined text-[14px]",children:m.icon||"window"}),l.jsx("span",{className:"truncate",children:m.title})]},m.id)})})]}),l.jsxs("div",{className:"flex items-center gap-2 px-2 py-1 win-bevel-inset bg-gray-200 text-black text-[12px] font-bold",children:[c&&l.jsxs("button",{onClick:c,className:"win-bevel-button bg-gray-300 px-2 py-0.5 text-[10px] font-bold flex items-center gap-1 hover:bg-white text-[#000080] whitespace-nowrap",title:"Open Command Palette (⌘K / Ctrl+K)",children:[l.jsx("span",{className:"material-symbols-outlined text-[13px]",children:"search"}),l.jsx("span",{className:"hidden sm:inline",children:"⌘K"})]}),l.jsx("button",{onClick:r,className:"hover:text-[#000080] flex items-center",title:s?"Unmute Synth":"Mute Synth",children:l.jsx("span",{className:"material-symbols-outlined text-[16px]",children:s?"volume_off":"volume_up"})}),a&&l.jsx("span",{className:"bg-primary-container text-black text-[9px] px-1 font-bold animate-pulse",children:"DEMO"}),l.jsx("span",{children:p})]})]})}function zA(){const[t,e]=ie.useState(()=>!sessionStorage.getItem("system_booted")),[n,i]=ie.useState([]),[r,s]=ie.useState([]),[a,o]=ie.useState(!0),[c,u]=ie.useState(null),[h,p]=ie.useState(!1),[d,m]=ie.useState(!1),[x,E]=ie.useState(!1),[g,f]=ie.useState(!1),_=()=>{sessionStorage.setItem("system_booted","true"),e(!1)},b=()=>{e(!0)},[S,w]=ie.useState(null),[T,A]=ie.useState(null),[v,C]=ie.useState(""),[N,I]=ie.useState(""),[P,W]=ie.useState({from:new Date(Date.now()-30*24*60*60*1e3),to:new Date}),[Q,F]=ie.useState("feed"),[k,z]=ie.useState(20),[D,j]=ie.useState({terminal:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"terminal",title:"Terminal"},stats:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"analytics",title:"Stats"},sources:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"hub",title:"Sources"},ipod:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"graphic_eq",title:"iPod"},profile:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"person",title:"Profile"},directives:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"checklist",title:"Directives"},memory:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"photo_library",title:"Memory Cache"},transmission:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"mark_email_read",title:"Transmit"}});ie.useEffect(()=>{Z(),te();const de=setInterval(Z,5*60*1e3);return()=>clearInterval(de)},[P,T,v,N,h]),ie.useEffect(()=>{const de=ce=>{var ke;if((ce.metaKey||ce.ctrlKey)&&ce.key==="k"){ce.preventDefault(),E(ot=>!ot);return}if(ce.key==="Escape"){E(!1);return}["INPUT","TEXTAREA","SELECT"].includes((ke=ce.target)==null?void 0:ke.tagName)||x||(ce.key==="t"||ce.key==="T"?Ae("terminal"):ce.key==="s"||ce.key==="S"?Ae("stats"):ce.key==="c"||ce.key==="C"?Ae("sources"):ce.key==="p"||ce.key==="P"?Ae("ipod"):ce.key==="d"||ce.key==="D"?(p(ot=>!ot),Me.playBeep(700,"square",.1)):(ce.key==="m"||ce.key==="M")&&re())};return window.addEventListener("keydown",de),()=>window.removeEventListener("keydown",de)},[x]);const Z=async()=>{var de;try{o(!0);const ce=await JS({from:P.from,to:P.to,sources:T?[T]:void 0,type:v||void 0,search:N||void 0,demo:h});i(ce.feed||[]),(de=ce.meta)!=null&&de.isDemo&&p(!0),u(null)}catch(ce){console.error("Error loading feed:",ce),u(ce.message)}finally{o(!1)}},te=async()=>{try{const de=await eE();s(de.sources||[])}catch(de){console.error("Error loading sources:",de)}},se=de=>{const ce=k+1;z(ce),F(de),j(ke=>({...ke,[de]:{...ke[de],zIndex:ce,isMinimized:!1}}))},Ae=de=>{const ce=k+1;z(ce),F(de),Me.playClick(),j(ke=>({...ke,[de]:{...ke[de],isOpen:!0,isMinimized:!1,zIndex:ce}}))},Xe=de=>{w({...de,_ts:Date.now()}),Ae("ipod")},Fe=de=>{Me.playClick(),j(ce=>({...ce,[de]:{...ce[de],isOpen:!1}}))},K=de=>{Me.playClick(),j(ce=>({...ce,[de]:{...ce[de],isMinimized:!0}}))},ae=de=>{const ce=D[de];ce&&(!ce.isOpen||ce.isMinimized?Ae(de):Q===de?K(de):se(de))},re=()=>{const de=Me.toggleMute();m(de)},Oe=(de="json")=>{const ce=nE({format:de,from:P.from,to:P.to,sources:T?[T]:void 0,type:v||void 0,search:N||void 0,demo:h});window.open(ce,"_blank")},Be=n.filter(de=>{var ce,ke;return de.type==="commit"&&((ke=(ce=de.data)==null?void 0:ce.messages)==null?void 0:ke.some(ot=>ot.toLowerCase().includes("error")||ot.toLowerCase().includes("fix")))}).length,De=Object.entries(D).filter(([de,ce])=>ce.isOpen).map(([de,ce])=>({id:de,title:ce.title,icon:ce.icon,isMinimized:ce.isMinimized})),[Ze,We]=ie.useState("feed");return l.jsxs("div",{className:"relative min-h-screen bg-[#0f0f13] overflow-x-hidden selection:bg-[#d4a373] selection:text-black font-code-terminal",children:[t&&l.jsx(kA,{onBootComplete:_}),l.jsx(Uy,{}),l.jsx("div",{className:"fixed inset-0 crt-scanlines z-50 pointer-events-none"}),l.jsx(TA,{isOpen:x,onClose:()=>E(!1),onOpenWindow:Ae,onToggleDemo:p,onToggleAudio:re,onOpenContact:()=>Ae("transmission"),onOpenResume:()=>f(!0),isDemo:h,isMuted:d}),l.jsx(ky,{onOpenWindow:Ae,onToggleAudio:re,onOpenContact:()=>Ae("transmission"),isMuted:d,isDemo:h}),l.jsxs("main",{className:"relative z-10 pt-24 pb-28 px-margin-edge sm:px-8 max-w-7xl mx-auto min-h-screen flex flex-col gap-6 sm:gap-8",children:[l.jsx(By,{anomaliesCount:Be,sources:r,onRefresh:Z,onOpenSources:()=>Ae("sources"),onOpenTerminal:()=>Ae("terminal"),onOpenResume:()=>f(!0)}),l.jsxs("div",{className:"flex items-center justify-between bg-[#121218] p-1.5 rounded-lg border border-[#2e2d3e] font-mono text-[11px] flex-wrap gap-2 shadow-md",children:[l.jsx("span",{className:"text-gray-400 font-bold text-[10px] uppercase ml-1 hidden sm:inline",children:"> ACTIVE_VIEW:"}),l.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:[{id:"feed",label:"📡 LIVE FEED",desc:"Active Telemetry Stream"},{id:"telemetry",label:"⚙️ DAEMON & METRICS",desc:"Cron Routine & Odometers"},{id:"dossier",label:"👤 DEV DOSSIER",desc:"Rohan Joshi Profile & Bio"},{id:"all",label:"📑 ALL MODULES",desc:"Full System View"}].map(de=>l.jsx("button",{onClick:()=>{Me.playClick(),We(de.id)},className:`px-3 py-1.5 win-bevel-outset text-[11px] font-bold cursor-pointer transition-all ${Ze===de.id?"bg-[#000080] text-white border-white":"bg-[#1c1b26] text-gray-300 hover:text-white hover:bg-[#252433]"}`,title:de.desc,children:de.label},de.id))}),l.jsx("button",{onClick:()=>Ae("directives"),className:"win-bevel-button px-2.5 py-1 text-[10px] bg-[#1a1924] text-emerald-400 hover:text-white font-bold ml-auto",children:"[✓] GOALS & DIRECTIVES"})]}),(Ze==="feed"||Ze==="all")&&l.jsx(WS,{dateRange:P,setDateRange:W}),(Ze==="dossier"||Ze==="all")&&l.jsx(RA,{onOpenContact:()=>Ae("transmission"),onOpenResume:()=>f(!0)}),(Ze==="telemetry"||Ze==="all")&&l.jsx(PA,{}),(Ze==="telemetry"||Ze==="all")&&l.jsx(IA,{}),(Ze==="feed"||Ze==="all")&&(a&&n.length===0?l.jsxs("div",{className:"endacopia-clay-card p-4 mx-auto mt-8 max-w-md",children:[l.jsx("p",{className:"font-bold text-[14px] text-[#81b29a] animate-pulse",children:"> LOADING LIFE STREAM..."}),l.jsx("p",{className:"text-[#d4a373] mt-1 text-[12px]",children:"> SYNCHRONIZING DATA STREAMS..."})]}):c?l.jsxs("div",{className:"endacopia-clay-card p-4 mx-auto mt-8 max-w-md",children:[l.jsxs("p",{className:"font-bold text-[14px] text-[#e07a5f]",children:["> STREAM FETCH ERROR: ",c]}),l.jsx("button",{onClick:Z,className:"endacopia-clay-button px-4 py-2 mt-4 text-[12px]",children:"RETRY STREAM"})]}):l.jsx(KS,{feed:n,selectedSource:T,onSelectSource:A,selectedType:v,onSelectType:C,searchQuery:N,onSearchChange:I,onExport:Oe,onExecuteCommand:de=>{Ae("terminal")},onOpenIPodWithTrack:Xe}))]}),l.jsx(DA,{isOpen:g,onClose:()=>f(!1)}),l.jsx(qS,{isOpen:D.terminal.isOpen,isMinimized:D.terminal.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.terminal.zIndex,sources:r,onSetFilter:A,onToggleDemo:p,isDemo:h,onExecuteSearch:I,onTriggerExport:Oe,onOpenContact:()=>Ae("transmission"),onOpenResume:()=>f(!0),onOpenWindow:Ae,onPlayTrack:Xe,onReboot:b}),l.jsx(iE,{isOpen:D.stats.isOpen,isMinimized:D.stats.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.stats.zIndex,isDemo:h}),l.jsx(rE,{isOpen:D.sources.isOpen,isMinimized:D.sources.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.sources.zIndex,sources:r,isDemo:h,onToggleDemo:p,onRefreshSources:te}),l.jsx(EA,{isOpen:D.ipod.isOpen,isMinimized:D.ipod.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.ipod.zIndex,currentTrack:S}),l.jsx(AA,{isOpen:D.profile.isOpen,isMinimized:D.profile.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.profile.zIndex}),l.jsx(OA,{isOpen:D.directives.isOpen,isMinimized:D.directives.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.directives.zIndex}),l.jsx(UA,{isOpen:D.memory.isOpen,isMinimized:D.memory.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.memory.zIndex}),l.jsx(FA,{isOpen:D.transmission.isOpen,isMinimized:D.transmission.isMinimized,onClose:Fe,onMinimize:K,onFocus:se,zIndex:D.transmission.zIndex}),l.jsx(bA,{onOpenTerminal:()=>Ae("terminal"),onOpenIPod:()=>Ae("ipod"),onOpenCommandPalette:()=>E(!0)}),l.jsx(BA,{windows:De,activeWindowId:Q,onToggleWindow:ae,onOpenWindow:Ae,onToggleAudio:re,isMuted:d,isDemo:h,onToggleDemo:p,onOpenCommandPalette:()=>E(!0)})]})}class GA extends dx.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("App crashed:",e,n)}render(){var e;return this.state.error?l.jsxs("div",{style:{minHeight:"100vh",background:"#0f0f13",color:"#e07a5f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",padding:"2rem",gap:"1rem"},children:[l.jsx("h1",{style:{color:"#d4a373",fontSize:"1.5rem"},children:"RUNTIME ERROR"}),l.jsx("pre",{style:{background:"#1a192a",color:"#81b29a",padding:"1rem",borderRadius:"8px",maxWidth:"800px",overflow:"auto",fontSize:"0.75rem",border:"1px solid #2e2d3e"},children:(e=this.state.error)==null?void 0:e.toString()}),l.jsx("button",{onClick:()=>this.setState({error:null}),style:{background:"#d4a373",color:"#0f0f13",border:"none",padding:"0.5rem 1.5rem",borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"monospace"},children:"RETRY"})]}):this.props.children}}Cu.createRoot(document.getElementById("root")).render(l.jsx(dx.StrictMode,{children:l.jsx(GA,{children:l.jsx(zA,{})})}));
