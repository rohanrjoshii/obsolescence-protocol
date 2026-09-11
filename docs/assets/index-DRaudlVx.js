(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function K_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gx={exports:{}},Tc={},xx={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),Z_=Symbol.for("react.portal"),J_=Symbol.for("react.fragment"),Q_=Symbol.for("react.strict_mode"),ey=Symbol.for("react.profiler"),ty=Symbol.for("react.provider"),ny=Symbol.for("react.context"),iy=Symbol.for("react.forward_ref"),ry=Symbol.for("react.suspense"),sy=Symbol.for("react.memo"),ay=Symbol.for("react.lazy"),Pp=Symbol.iterator;function oy(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var vx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_x=Object.assign,yx={};function sa(t,e,n){this.props=t,this.context=e,this.refs=yx,this.updater=n||vx}sa.prototype.isReactComponent={};sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sx(){}Sx.prototype=sa.prototype;function rh(t,e,n){this.props=t,this.context=e,this.refs=yx,this.updater=n||vx}var sh=rh.prototype=new Sx;sh.constructor=rh;_x(sh,sa.prototype);sh.isPureReactComponent=!0;var Ip=Array.isArray,Ex=Object.prototype.hasOwnProperty,ah={current:null},bx={key:!0,ref:!0,__self:!0,__source:!0};function Mx(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Ex.call(e,i)&&!bx.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:po,type:t,key:s,ref:a,props:r,_owner:ah.current}}function ly(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oh(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function cy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cy(""+t.key):e.toString(36)}function _l(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case po:case Z_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Qc(a,0):i,Ip(r)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),_l(r,e,n,"",function(u){return u})):r!=null&&(oh(r)&&(r=ly(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Dp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ip(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Qc(s,o);a+=_l(s,e,n,l,r)}else if(l=oy(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Qc(s,o++),a+=_l(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function No(t,e,n){if(t==null)return t;var i=[],r=0;return _l(t,i,"","",function(s){return e.call(n,s,r++)}),i}function uy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},yl={transition:null},dy={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:yl,ReactCurrentOwner:ah};function wx(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!oh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=sa;Ze.Fragment=J_;Ze.Profiler=ey;Ze.PureComponent=rh;Ze.StrictMode=Q_;Ze.Suspense=ry;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy;Ze.act=wx;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_x({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ah.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Ex.call(e,l)&&!bx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:po,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:ny,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ty,_context:t},t.Consumer=t};Ze.createElement=Mx;Ze.createFactory=function(t){var e=Mx.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:iy,render:t}};Ze.isValidElement=oh;Ze.lazy=function(t){return{$$typeof:ay,_payload:{_status:-1,_result:t},_init:uy}};Ze.memo=function(t,e){return{$$typeof:sy,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};Ze.unstable_act=wx;Ze.useCallback=function(t,e){return dn.current.useCallback(t,e)};Ze.useContext=function(t){return dn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return dn.current.useEffect(t,e)};Ze.useId=function(){return dn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return dn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Ze.useRef=function(t){return dn.current.useRef(t)};Ze.useState=function(t){return dn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return dn.current.useTransition()};Ze.version="18.3.1";xx.exports=Ze;var oe=xx.exports;const Tx=K_(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=oe,hy=Symbol.for("react.element"),py=Symbol.for("react.fragment"),my=Object.prototype.hasOwnProperty,gy=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xy={key:!0,ref:!0,__self:!0,__source:!0};function Ax(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)my.call(e,i)&&!xy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hy,type:t,key:s,ref:a,props:r,_owner:gy.current}}Tc.Fragment=py;Tc.jsx=Ax;Tc.jsxs=Ax;gx.exports=Tc;var c=gx.exports,pd={},Rx={exports:{}},In={},Cx={exports:{}},Nx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var Z=D.length;D.push(j);e:for(;0<Z;){var ee=Z-1>>>1,re=D[ee];if(0<r(re,j))D[ee]=j,D[Z]=re,Z=ee;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],Z=D.pop();if(Z!==j){D[0]=Z;e:for(var ee=0,re=D.length,we=re>>>1;ee<we;){var Ve=2*(ee+1)-1,ke=D[Ve],G=Ve+1,ie=D[G];if(0>r(ke,Z))G<re&&0>r(ie,ke)?(D[ee]=ie,D[G]=Z,ee=G):(D[ee]=ke,D[Ve]=Z,ee=Ve);else if(G<re&&0>r(ie,Z))D[ee]=ie,D[G]=Z,ee=G;else break e}}return j}function r(D,j){var Z=D.sortIndex-j.sortIndex;return Z!==0?Z:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,p=null,f=3,m=!1,x=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(D){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=D)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function y(D){if(E=!1,S(D),!x)if(n(l)!==null)x=!0,B(M);else{var j=n(u);j!==null&&z(y,j.startTime-D)}}function M(D,j){x=!1,E&&(E=!1,d(_),_=-1),m=!0;var Z=f;try{for(S(j),p=n(l);p!==null&&(!(p.expirationTime>j)||D&&!I());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,f=p.priorityLevel;var re=ee(p.expirationTime<=j);j=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),S(j)}else i(l);p=n(l)}if(p!==null)var we=!0;else{var Ve=n(u);Ve!==null&&z(y,Ve.startTime-j),we=!1}return we}finally{p=null,f=Z,m=!1}}var w=!1,A=null,_=-1,R=5,N=-1;function I(){return!(t.unstable_now()-N<R)}function P(){if(A!==null){var D=t.unstable_now();N=D;var j=!0;try{j=A(!0,D)}finally{j?Y():(w=!1,A=null)}}else w=!1}var Y;if(typeof v=="function")Y=function(){v(P)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,F=K.port2;K.port1.onmessage=P,Y=function(){F.postMessage(null)}}else Y=function(){g(P,0)};function B(D){A=D,w||(w=!0,Y())}function z(D,j){_=g(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,B(M))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var Z=f;f=j;try{return D()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return j()}finally{f=Z}},t.unstable_scheduleCallback=function(D,j,Z){var ee=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ee+Z:ee):Z=ee,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Z+re,D={id:h++,callback:j,priorityLevel:D,startTime:Z,expirationTime:re,sortIndex:-1},Z>ee?(D.sortIndex=Z,e(u,D),n(l)===null&&D===n(u)&&(E?(d(_),_=-1):E=!0,z(y,Z-ee))):(D.sortIndex=re,e(l,D),x||m||(x=!0,B(M))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var j=f;return function(){var Z=f;f=j;try{return D.apply(this,arguments)}finally{f=Z}}}})(Nx);Cx.exports=Nx;var vy=Cx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=oe,Pn=vy;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Px=new Set,Xa={};function rs(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(Xa[t]=e,t=0;t<e.length;t++)Px.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,yy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lp={},Op={};function Sy(t){return md.call(Op,t)?!0:md.call(Lp,t)?!1:yy.test(t)?Op[t]=!0:(Lp[t]=!0,!1)}function Ey(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function by(t,e,n,i){if(e===null||typeof e>"u"||Ey(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,ch);qt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,ch);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,ch);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function uh(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(by(e,n,r,i)&&(n=null),i||r===null?Sy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Po=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),Dx=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),hh=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),Lx=Symbol.for("react.offscreen"),Up=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,eu;function Pa(t){if(eu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+t}var tu=!1;function nu(t,e){if(!t||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function My(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=nu(t.type,!1),t;case 11:return t=nu(t.type.render,!1),t;case 1:return t=nu(t.type,!0),t;default:return""}}function _d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case gd:return"Profiler";case dh:return"StrictMode";case xd:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dx:return(t.displayName||"Context")+".Consumer";case Ix:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hh:return e=t.displayName||null,e!==null?e:_d(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return _d(t(e))}catch{}}return null}function wy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _d(e);case 8:return e===dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ox(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ty(t){var e=Ox(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Io(t){t._valueTracker||(t._valueTracker=Ty(t))}function Ux(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ox(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yd(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(t,e){e=e.checked,e!=null&&uh(t,"checked",e,!1)}function Sd(t,e){Fx(t,e);var n=yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ed(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ed(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function ks(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ia(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function kx(t,e){var n=yr(e.value),i=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Md(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ay=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(t){Ay.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fa[e]=Fa[t]})});function Hx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fa.hasOwnProperty(t)&&Fa[t]?(""+e).trim():e+"px"}function Gx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ry=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wd(t,e){if(e){if(Ry[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,Bs=null,zs=null;function Hp(t){if(t=xo(t)){if(typeof Rd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Pc(e),Rd(t.stateNode,t.type,e))}}function Vx(t){Bs?zs?zs.push(t):zs=[t]:Bs=t}function jx(){if(Bs){var t=Bs,e=zs;if(zs=Bs=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function Wx(t,e){return t(e)}function Xx(){}var iu=!1;function Yx(t,e,n){if(iu)return t(e,n);iu=!0;try{return Wx(t,e,n)}finally{iu=!1,(Bs!==null||zs!==null)&&(Xx(),jx())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var i=Pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Cd=!1;if(Bi)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Cd=!1}function Cy(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ka=!1,Hl=null,Gl=!1,Nd=null,Ny={onError:function(t){ka=!0,Hl=t}};function Py(t,e,n,i,r,s,a,o,l){ka=!1,Hl=null,Cy.apply(Ny,arguments)}function Iy(t,e,n,i,r,s,a,o,l){if(Py.apply(this,arguments),ka){if(ka){var u=Hl;ka=!1,Hl=null}else throw Error(ce(198));Gl||(Gl=!0,Nd=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(ss(t)!==t)throw Error(ce(188))}function Dy(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gp(r),t;if(s===i)return Gp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function $x(t){return t=Dy(t),t!==null?Kx(t):null}function Kx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kx(t);if(e!==null)return e;t=t.sibling}return null}var Zx=Pn.unstable_scheduleCallback,Vp=Pn.unstable_cancelCallback,Ly=Pn.unstable_shouldYield,Oy=Pn.unstable_requestPaint,It=Pn.unstable_now,Uy=Pn.unstable_getCurrentPriorityLevel,mh=Pn.unstable_ImmediatePriority,Jx=Pn.unstable_UserBlockingPriority,Vl=Pn.unstable_NormalPriority,Fy=Pn.unstable_LowPriority,Qx=Pn.unstable_IdlePriority,Ac=null,_i=null;function ky(t){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(Ac,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:Hy,By=Math.log,zy=Math.LN2;function Hy(t){return t>>>=0,t===0?32:31-(By(t)/zy|0)|0}var Lo=64,Oo=4194304;function Da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Da(o):(s&=a,s!==0&&(i=Da(s)))}else a=n&~r,a!==0?i=Da(a):s!==0&&(i=Da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function Gy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Gy(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e0(){var t=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),t}function ru(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function jy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function t0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n0,xh,i0,r0,s0,Id=!1,Uo=[],fr=null,hr=null,pr=null,$a=new Map,Ka=new Map,ar=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&xh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Xy(t,e,n,i,r){switch(e){case"focusin":return fr=pa(fr,t,e,n,i,r),!0;case"dragenter":return hr=pa(hr,t,e,n,i,r),!0;case"mouseover":return pr=pa(pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $a.set(s,pa($a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ka.set(s,pa(Ka.get(s)||null,t,e,n,i,r)),!0}return!1}function a0(t){var e=Fr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=qx(n),e!==null){t.blockedOn=e,s0(t.priority,function(){i0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ad=i,n.target.dispatchEvent(i),Ad=null}else return e=xo(n),e!==null&&xh(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){Sl(t)&&n.delete(e)}function Yy(){Id=!1,fr!==null&&Sl(fr)&&(fr=null),hr!==null&&Sl(hr)&&(hr=null),pr!==null&&Sl(pr)&&(pr=null),$a.forEach(Wp),Ka.forEach(Wp)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,Id||(Id=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,Yy)))}function Za(t){function e(r){return ma(r,t)}if(0<Uo.length){ma(Uo[0],t);for(var n=1;n<Uo.length;n++){var i=Uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(fr!==null&&ma(fr,t),hr!==null&&ma(hr,t),pr!==null&&ma(pr,t),$a.forEach(e),Ka.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)a0(n),n.blockedOn===null&&ar.shift()}var Hs=Wi.ReactCurrentBatchConfig,Wl=!0;function qy(t,e,n,i){var r=lt,s=Hs.transition;Hs.transition=null;try{lt=1,vh(t,e,n,i)}finally{lt=r,Hs.transition=s}}function $y(t,e,n,i){var r=lt,s=Hs.transition;Hs.transition=null;try{lt=4,vh(t,e,n,i)}finally{lt=r,Hs.transition=s}}function vh(t,e,n,i){if(Wl){var r=Dd(t,e,n,i);if(r===null)pu(t,e,i,Xl,n),jp(t,i);else if(Xy(r,t,e,n,i))i.stopPropagation();else if(jp(t,i),e&4&&-1<Wy.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&n0(s),s=Dd(t,e,n,i),s===null&&pu(t,e,i,Xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(t,e,i,null,n)}}var Xl=null;function Dd(t,e,n,i){if(Xl=null,t=ph(i),t=Fr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function o0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uy()){case mh:return 1;case Jx:return 4;case Vl:case Fy:return 16;case Qx:return 536870912;default:return 16}default:return 16}}var cr=null,_h=null,El=null;function l0(){if(El)return El;var t,e=_h,n=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return El=r.slice(t,1<i?1-i:void 0)}function bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function Xp(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fo:Xp,this.isPropagationStopped=Xp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yh=Dn(aa),go=Mt({},aa,{view:0,detail:0}),Ky=Dn(go),su,au,ga,Rc=Mt({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(su=t.screenX-ga.screenX,au=t.screenY-ga.screenY):au=su=0,ga=t),su)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Yp=Dn(Rc),Zy=Mt({},Rc,{dataTransfer:0}),Jy=Dn(Zy),Qy=Mt({},go,{relatedTarget:0}),ou=Dn(Qy),eS=Mt({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=Dn(eS),nS=Mt({},aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iS=Dn(nS),rS=Mt({},aa,{data:0}),qp=Dn(rS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oS[t])?!!e[t]:!1}function Sh(){return lS}var cS=Mt({},go,{key:function(t){if(t.key){var e=sS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sh,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uS=Dn(cS),dS=Mt({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=Dn(dS),fS=Mt({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sh}),hS=Dn(fS),pS=Mt({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=Dn(pS),gS=Mt({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Dn(gS),vS=[9,13,27,32],Eh=Bi&&"CompositionEvent"in window,Ba=null;Bi&&"documentMode"in document&&(Ba=document.documentMode);var _S=Bi&&"TextEvent"in window&&!Ba,c0=Bi&&(!Eh||Ba&&8<Ba&&11>=Ba),Kp=" ",Zp=!1;function u0(t,e){switch(t){case"keyup":return vS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function yS(t,e){switch(t){case"compositionend":return d0(e);case"keypress":return e.which!==32?null:(Zp=!0,Kp);case"textInput":return t=e.data,t===Kp&&Zp?null:t;default:return null}}function SS(t,e){if(Rs)return t==="compositionend"||!Eh&&u0(t,e)?(t=l0(),El=_h=cr=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c0&&e.locale!=="ko"?null:e.data;default:return null}}var ES={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ES[t.type]:e==="textarea"}function f0(t,e,n,i){Vx(i),e=Yl(e,"onChange"),0<e.length&&(n=new yh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var za=null,Ja=null;function bS(t){b0(t,0)}function Cc(t){var e=Ps(t);if(Ux(e))return t}function MS(t,e){if(t==="change")return e}var h0=!1;if(Bi){var lu;if(Bi){var cu="oninput"in document;if(!cu){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),cu=typeof Qp.oninput=="function"}lu=cu}else lu=!1;h0=lu&&(!document.documentMode||9<document.documentMode)}function em(){za&&(za.detachEvent("onpropertychange",p0),Ja=za=null)}function p0(t){if(t.propertyName==="value"&&Cc(Ja)){var e=[];f0(e,Ja,t,ph(t)),Yx(bS,e)}}function wS(t,e,n){t==="focusin"?(em(),za=e,Ja=n,za.attachEvent("onpropertychange",p0)):t==="focusout"&&em()}function TS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cc(Ja)}function AS(t,e){if(t==="click")return Cc(e)}function RS(t,e){if(t==="input"||t==="change")return Cc(e)}function CS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:CS;function Qa(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!md.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function m0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NS(t){var e=g0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m0(n.ownerDocument.documentElement,n)){if(i!==null&&bh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=nm(n,s);var a=nm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PS=Bi&&"documentMode"in document&&11>=document.documentMode,Cs=null,Ld=null,Ha=null,Od=!1;function im(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Od||Cs==null||Cs!==zl(i)||(i=Cs,"selectionStart"in i&&bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ha&&Qa(Ha,i)||(Ha=i,i=Yl(Ld,"onSelect"),0<i.length&&(e=new yh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Cs)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ns={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},uu={},x0={};Bi&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Nc(t){if(uu[t])return uu[t];if(!Ns[t])return t;var e=Ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return uu[t]=e[n];return t}var v0=Nc("animationend"),_0=Nc("animationiteration"),y0=Nc("animationstart"),S0=Nc("transitionend"),E0=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){E0.set(t,e),rs(e,[t])}for(var du=0;du<rm.length;du++){var fu=rm[du],IS=fu.toLowerCase(),DS=fu[0].toUpperCase()+fu.slice(1);br(IS,"on"+DS)}br(v0,"onAnimationEnd");br(_0,"onAnimationIteration");br(y0,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(S0,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function sm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Iy(i,e,void 0,t),t.currentTarget=null}function b0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;sm(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;sm(r,o,u),s=l}}}if(Gl)throw t=Nd,Gl=!1,Nd=null,t}function vt(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var i=t+"__bubble";n.has(i)||(M0(e,t,2,!1),n.add(i))}function hu(t,e,n){var i=0;e&&(i|=4),M0(n,t,i,e)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[Bo]){t[Bo]=!0,Px.forEach(function(n){n!=="selectionchange"&&(LS.has(n)||hu(n,!1,t),hu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bo]||(e[Bo]=!0,hu("selectionchange",!1,e))}}function M0(t,e,n,i){switch(o0(e)){case 1:var r=qy;break;case 4:r=$y;break;default:r=vh}n=r.bind(null,e,n,t),r=void 0,!Cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Fr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Yx(function(){var u=s,h=ph(n),p=[];e:{var f=E0.get(t);if(f!==void 0){var m=yh,x=t;switch(t){case"keypress":if(bl(n)===0)break e;case"keydown":case"keyup":m=uS;break;case"focusin":x="focus",m=ou;break;case"focusout":x="blur",m=ou;break;case"beforeblur":case"afterblur":m=ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=hS;break;case v0:case _0:case y0:m=tS;break;case S0:m=mS;break;case"scroll":m=Ky;break;case"wheel":m=xS;break;case"copy":case"cut":case"paste":m=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$p}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var v=u,S;v!==null;){S=v;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,d!==null&&(y=qa(v,d),y!=null&&E.push(to(v,y,S)))),g)break;v=v.return}0<E.length&&(f=new m(f,x,null,n,h),p.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Ad&&(x=n.relatedTarget||n.fromElement)&&(Fr(x)||x[zi]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Fr(x):null,x!==null&&(g=ss(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(E=Yp,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=$p,y="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?f:Ps(m),S=x==null?f:Ps(x),f=new E(y,v+"leave",m,n,h),f.target=g,f.relatedTarget=S,y=null,Fr(h)===u&&(E=new E(d,v+"enter",x,n,h),E.target=S,E.relatedTarget=g,y=E),g=y,m&&x)t:{for(E=m,d=x,v=0,S=E;S;S=cs(S))v++;for(S=0,y=d;y;y=cs(y))S++;for(;0<v-S;)E=cs(E),v--;for(;0<S-v;)d=cs(d),S--;for(;v--;){if(E===d||d!==null&&E===d.alternate)break t;E=cs(E),d=cs(d)}E=null}else E=null;m!==null&&am(p,f,m,E,!1),x!==null&&g!==null&&am(p,g,x,E,!0)}}e:{if(f=u?Ps(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var M=MS;else if(Jp(f))if(h0)M=RS;else{M=TS;var w=wS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=AS);if(M&&(M=M(t,u))){f0(p,M,n,h);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Ed(f,"number",f.value)}switch(w=u?Ps(u):window,t){case"focusin":(Jp(w)||w.contentEditable==="true")&&(Cs=w,Ld=u,Ha=null);break;case"focusout":Ha=Ld=Cs=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,im(p,n,h);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":im(p,n,h)}var A;if(Eh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Rs?u0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(c0&&n.locale!=="ko"&&(Rs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Rs&&(A=l0()):(cr=h,_h="value"in cr?cr.value:cr.textContent,Rs=!0)),w=Yl(u,_),0<w.length&&(_=new qp(_,t,null,n,h),p.push({event:_,listeners:w}),A?_.data=A:(A=d0(n),A!==null&&(_.data=A)))),(A=_S?yS(t,n):SS(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(h=new qp("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=A))}b0(p,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=qa(t,n),s!=null&&i.unshift(to(t,s,r)),s=qa(t,e),s!=null&&i.push(to(t,s,r))),t=t.return}return i}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=qa(n,s),l!=null&&a.unshift(to(n,l,o))):r||(l=qa(n,s),l!=null&&a.push(to(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var OS=/\r\n?/g,US=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(OS,`
`).replace(US,"")}function zo(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(ce(425))}function ql(){}var Ud=null,Fd=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,kS=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(BS)}:Bd;function BS(t){setTimeout(function(){throw t})}function mu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Za(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Za(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),mi="__reactFiber$"+oa,no="__reactProps$"+oa,zi="__reactContainer$"+oa,zd="__reactEvents$"+oa,zS="__reactListeners$"+oa,HS="__reactHandles$"+oa;function Fr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[mi])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[mi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Pc(t){return t[no]||null}var Hd=[],Is=-1;function Mr(t){return{current:t}}function _t(t){0>Is||(t.current=Hd[Is],Hd[Is]=null,Is--)}function xt(t,e){Is++,Hd[Is]=t.current,t.current=e}var Sr={},an=Mr(Sr),xn=Mr(!1),Xr=Sr;function qs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function $l(){_t(xn),_t(an)}function um(t,e,n){if(an.current!==Sr)throw Error(ce(168));xt(an,e),xt(xn,n)}function w0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,wy(t)||"Unknown",r));return Mt({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Xr=an.current,xt(an,t),xt(xn,xn.current),!0}function dm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=w0(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,_t(xn),_t(an),xt(an,t)):_t(xn),xt(xn,n)}var Ii=null,Ic=!1,gu=!1;function T0(t){Ii===null?Ii=[t]:Ii.push(t)}function GS(t){Ic=!0,T0(t)}function wr(){if(!gu&&Ii!==null){gu=!0;var t=0,e=lt;try{var n=Ii;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,Ic=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),Zx(mh,wr),r}finally{lt=e,gu=!1}}return null}var Ds=[],Ls=0,Zl=null,Jl=0,Fn=[],kn=0,Yr=null,Di=1,Li="";function Pr(t,e){Ds[Ls++]=Jl,Ds[Ls++]=Zl,Zl=t,Jl=e}function A0(t,e,n){Fn[kn++]=Di,Fn[kn++]=Li,Fn[kn++]=Yr,Yr=t;var i=Di;t=Li;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Di=1<<32-ni(e)+r|n<<r|i,Li=s+t}else Di=1<<s|n<<r|i,Li=t}function Mh(t){t.return!==null&&(Pr(t,1),A0(t,1,0))}function wh(t){for(;t===Zl;)Zl=Ds[--Ls],Ds[Ls]=null,Jl=Ds[--Ls],Ds[Ls]=null;for(;t===Yr;)Yr=Fn[--kn],Fn[kn]=null,Li=Fn[--kn],Fn[kn]=null,Di=Fn[--kn],Fn[kn]=null}var Nn=null,Cn=null,St=!1,Qn=null;function R0(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nn=t,Cn=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Di,overflow:Li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nn=t,Cn=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vd(t){if(St){var e=Cn;if(e){var n=e;if(!fm(t,e)){if(Gd(t))throw Error(ce(418));e=mr(n.nextSibling);var i=Nn;e&&fm(t,e)?R0(i,n):(t.flags=t.flags&-4097|2,St=!1,Nn=t)}}else{if(Gd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,St=!1,Nn=t}}}function hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nn=t}function Ho(t){if(t!==Nn)return!1;if(!St)return hm(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=Cn)){if(Gd(t))throw C0(),Error(ce(418));for(;e;)R0(t,e),e=mr(e.nextSibling)}if(hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Nn?mr(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=Cn;t;)t=mr(t.nextSibling)}function $s(){Cn=Nn=null,St=!1}function Th(t){Qn===null?Qn=[t]:Qn.push(t)}var VS=Wi.ReactCurrentBatchConfig;function xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Go(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function N0(t){function e(d,v){if(t){var S=d.deletions;S===null?(d.deletions=[v],d.flags|=16):S.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=_r(d,v),d.index=0,d.sibling=null,d}function s(d,v,S){return d.index=S,t?(S=d.alternate,S!==null?(S=S.index,S<v?(d.flags|=2,v):S):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,S,y){return v===null||v.tag!==6?(v=bu(S,d.mode,y),v.return=d,v):(v=r(v,S),v.return=d,v)}function l(d,v,S,y){var M=S.type;return M===As?h(d,v,S.props.children,y,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rr&&pm(M)===v.type)?(y=r(v,S.props),y.ref=xa(d,v,S),y.return=d,y):(y=Nl(S.type,S.key,S.props,null,d.mode,y),y.ref=xa(d,v,S),y.return=d,y)}function u(d,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Mu(S,d.mode,y),v.return=d,v):(v=r(v,S.children||[]),v.return=d,v)}function h(d,v,S,y,M){return v===null||v.tag!==7?(v=jr(S,d.mode,y,M),v.return=d,v):(v=r(v,S),v.return=d,v)}function p(d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=bu(""+v,d.mode,S),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Po:return S=Nl(v.type,v.key,v.props,null,d.mode,S),S.ref=xa(d,null,v),S.return=d,S;case Ts:return v=Mu(v,d.mode,S),v.return=d,v;case rr:var y=v._init;return p(d,y(v._payload),S)}if(Ia(v)||fa(v))return v=jr(v,d.mode,S,null),v.return=d,v;Go(d,v)}return null}function f(d,v,S,y){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:o(d,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Po:return S.key===M?l(d,v,S,y):null;case Ts:return S.key===M?u(d,v,S,y):null;case rr:return M=S._init,f(d,v,M(S._payload),y)}if(Ia(S)||fa(S))return M!==null?null:h(d,v,S,y,null);Go(d,S)}return null}function m(d,v,S,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(S)||null,o(v,d,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Po:return d=d.get(y.key===null?S:y.key)||null,l(v,d,y,M);case Ts:return d=d.get(y.key===null?S:y.key)||null,u(v,d,y,M);case rr:var w=y._init;return m(d,v,S,w(y._payload),M)}if(Ia(y)||fa(y))return d=d.get(S)||null,h(v,d,y,M,null);Go(v,y)}return null}function x(d,v,S,y){for(var M=null,w=null,A=v,_=v=0,R=null;A!==null&&_<S.length;_++){A.index>_?(R=A,A=null):R=A.sibling;var N=f(d,A,S[_],y);if(N===null){A===null&&(A=R);break}t&&A&&N.alternate===null&&e(d,A),v=s(N,v,_),w===null?M=N:w.sibling=N,w=N,A=R}if(_===S.length)return n(d,A),St&&Pr(d,_),M;if(A===null){for(;_<S.length;_++)A=p(d,S[_],y),A!==null&&(v=s(A,v,_),w===null?M=A:w.sibling=A,w=A);return St&&Pr(d,_),M}for(A=i(d,A);_<S.length;_++)R=m(A,d,_,S[_],y),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?_:R.key),v=s(R,v,_),w===null?M=R:w.sibling=R,w=R);return t&&A.forEach(function(I){return e(d,I)}),St&&Pr(d,_),M}function E(d,v,S,y){var M=fa(S);if(typeof M!="function")throw Error(ce(150));if(S=M.call(S),S==null)throw Error(ce(151));for(var w=M=null,A=v,_=v=0,R=null,N=S.next();A!==null&&!N.done;_++,N=S.next()){A.index>_?(R=A,A=null):R=A.sibling;var I=f(d,A,N.value,y);if(I===null){A===null&&(A=R);break}t&&A&&I.alternate===null&&e(d,A),v=s(I,v,_),w===null?M=I:w.sibling=I,w=I,A=R}if(N.done)return n(d,A),St&&Pr(d,_),M;if(A===null){for(;!N.done;_++,N=S.next())N=p(d,N.value,y),N!==null&&(v=s(N,v,_),w===null?M=N:w.sibling=N,w=N);return St&&Pr(d,_),M}for(A=i(d,A);!N.done;_++,N=S.next())N=m(A,d,_,N.value,y),N!==null&&(t&&N.alternate!==null&&A.delete(N.key===null?_:N.key),v=s(N,v,_),w===null?M=N:w.sibling=N,w=N);return t&&A.forEach(function(P){return e(d,P)}),St&&Pr(d,_),M}function g(d,v,S,y){if(typeof S=="object"&&S!==null&&S.type===As&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Po:e:{for(var M=S.key,w=v;w!==null;){if(w.key===M){if(M=S.type,M===As){if(w.tag===7){n(d,w.sibling),v=r(w,S.props.children),v.return=d,d=v;break e}}else if(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===rr&&pm(M)===w.type){n(d,w.sibling),v=r(w,S.props),v.ref=xa(d,w,S),v.return=d,d=v;break e}n(d,w);break}else e(d,w);w=w.sibling}S.type===As?(v=jr(S.props.children,d.mode,y,S.key),v.return=d,d=v):(y=Nl(S.type,S.key,S.props,null,d.mode,y),y.ref=xa(d,v,S),y.return=d,d=y)}return a(d);case Ts:e:{for(w=S.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(d,v.sibling),v=r(v,S.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Mu(S,d.mode,y),v.return=d,d=v}return a(d);case rr:return w=S._init,g(d,v,w(S._payload),y)}if(Ia(S))return x(d,v,S,y);if(fa(S))return E(d,v,S,y);Go(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,S),v.return=d,d=v):(n(d,v),v=bu(S,d.mode,y),v.return=d,d=v),a(d)):n(d,v)}return g}var Ks=N0(!0),P0=N0(!1),Ql=Mr(null),ec=null,Os=null,Ah=null;function Rh(){Ah=Os=ec=null}function Ch(t){var e=Ql.current;_t(Ql),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){ec=t,Ah=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Ah!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(ec===null)throw Error(ce(308));Os=t,ec.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var kr=null;function Nh(t){kr===null?kr=[t]:kr.push(t)}function I0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Hi(t,i)}function Hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Ph(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Hi(t,n)}return r=i.interleaved,r===null?(e.next=e,Nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Hi(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gh(t,n)}}function mm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tc(t,e,n,i){var r=t.updateQueue;sr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=u=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,E=o;switch(f=e,m=n,E.tag){case 1:if(x=E.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=Mt({},p,f);break e;case 2:sr=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=a,t.lanes=a,t.memoizedState=p}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var vo={},yi=Mr(vo),io=Mr(vo),ro=Mr(vo);function Br(t){if(t===vo)throw Error(ce(174));return t}function Ih(t,e){switch(xt(ro,e),xt(io,t),xt(yi,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Md(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Md(e,t)}_t(yi),xt(yi,e)}function Zs(){_t(yi),_t(io),_t(ro)}function L0(t){Br(ro.current);var e=Br(yi.current),n=Md(e,t.type);e!==n&&(xt(io,t),xt(yi,n))}function Dh(t){io.current===t&&(_t(yi),_t(io))}var Et=Mr(0);function nc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xu=[];function Lh(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var wl=Wi.ReactCurrentDispatcher,vu=Wi.ReactCurrentBatchConfig,qr=0,bt=null,Ft=null,Gt=null,ic=!1,Ga=!1,so=0,jS=0;function Kt(){throw Error(ce(321))}function Oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function Uh(t,e,n,i,r,s){if(qr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?qS:$S,t=n(i,r),Ga){s=0;do{if(Ga=!1,so=0,25<=s)throw Error(ce(301));s+=1,Gt=Ft=null,e.updateQueue=null,wl.current=KS,t=n(i,r)}while(Ga)}if(wl.current=rc,e=Ft!==null&&Ft.next!==null,qr=0,Gt=Ft=bt=null,ic=!1,e)throw Error(ce(300));return t}function Fh(){var t=so!==0;return so=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?bt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function jn(){if(Ft===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Gt===null?bt.memoizedState:Gt.next;if(e!==null)Gt=e,Ft=t;else{if(t===null)throw Error(ce(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Gt===null?bt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function ao(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=jn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((qr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,bt.lanes|=h,$r|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,ri(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yu(t){var e=jn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ri(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function O0(){}function U0(t,e){var n=bt,i=jn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,kh(B0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,oo(9,k0.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ce(349));qr&30||F0(n,e,r)}return r}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function k0(t,e,n,i){e.value=n,e.getSnapshot=i,z0(e)&&H0(t)}function B0(t,e,n){return n(function(){z0(e)&&H0(t)})}function z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function H0(t){var e=Hi(t,1);e!==null&&ii(e,t,1,-1)}function xm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:t},e.queue=t,t=t.dispatch=YS.bind(null,bt,t),[e.memoizedState,t]}function oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function G0(){return jn().memoizedState}function Tl(t,e,n,i){var r=hi();bt.flags|=t,r.memoizedState=oo(1|e,n,void 0,i===void 0?null:i)}function Dc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var a=Ft.memoizedState;if(s=a.destroy,i!==null&&Oh(i,a.deps)){r.memoizedState=oo(e,n,s,i);return}}bt.flags|=t,r.memoizedState=oo(1|e,n,s,i)}function vm(t,e){return Tl(8390656,8,t,e)}function kh(t,e){return Dc(2048,8,t,e)}function V0(t,e){return Dc(4,2,t,e)}function j0(t,e){return Dc(4,4,t,e)}function W0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X0(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,W0.bind(null,e,t),n)}function Bh(){}function Y0(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function q0(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $0(t,e,n){return qr&21?(ri(n,e)||(n=e0(),bt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function WS(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=vu.transition;vu.transition={};try{t(!1),e()}finally{lt=n,vu.transition=i}}function K0(){return jn().memoizedState}function XS(t,e,n){var i=vr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))J0(e,n);else if(n=I0(t,e,n,i),n!==null){var r=cn();ii(n,t,i,r),Q0(n,e,i)}}function YS(t,e,n){var i=vr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))J0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ri(o,a)){var l=e.interleaved;l===null?(r.next=r,Nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=I0(t,e,r,i),n!==null&&(r=cn(),ii(n,t,i,r),Q0(n,e,i))}}function Z0(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function J0(t,e){Ga=ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Q0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gh(t,n)}}var rc={readContext:Vn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},qS={readContext:Vn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tl(4194308,4,W0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=XS.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:xm,useDebugValue:Bh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=xm(!1),e=t[0];return t=WS.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=hi();if(St){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Vt===null)throw Error(ce(349));qr&30||F0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,vm(B0.bind(null,i,s,t),[t]),i.flags|=2048,oo(9,k0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Vt.identifierPrefix;if(St){var n=Li,i=Di;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=so++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$S={readContext:Vn,useCallback:Y0,useContext:Vn,useEffect:kh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:j0,useMemo:q0,useReducer:_u,useRef:G0,useState:function(){return _u(ao)},useDebugValue:Bh,useDeferredValue:function(t){var e=jn();return $0(e,Ft.memoizedState,t)},useTransition:function(){var t=_u(ao)[0],e=jn().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:U0,useId:K0,unstable_isNewReconciler:!1},KS={readContext:Vn,useCallback:Y0,useContext:Vn,useEffect:kh,useImperativeHandle:X0,useInsertionEffect:V0,useLayoutEffect:j0,useMemo:q0,useReducer:yu,useRef:G0,useState:function(){return yu(ao)},useDebugValue:Bh,useDeferredValue:function(t){var e=jn();return Ft===null?e.memoizedState=t:$0(e,Ft.memoizedState,t)},useTransition:function(){var t=yu(ao)[0],e=jn().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:U0,useId:K0,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ii(e,t,r,i),Ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=vr(t),s=Ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ii(e,t,r,i),Ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=vr(t),r=Ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(ii(e,t,i,n),Ml(e,t,i))}};function _m(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,i)||!Qa(r,s):!0}function ev(t,e,n){var i=!1,r=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=vn(e)?Xr:an.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ym(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ph(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=vn(e)?Xr:an.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=My(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZS=typeof WeakMap=="function"?WeakMap:Map;function tv(t,e,n){n=Ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ac||(ac=!0,rf=i),Yd(t,e)},n}function nv(t,e,n){n=Ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yd(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Sm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ZS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=dE.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ui(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var JS=Wi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?P0(e,null,n,i):Ks(e,t.child,n,i)}function Mm(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=Uh(t,e,n,i,s,r),n=Fh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(St&&n&&Mh(e),e.flags|=1,ln(t,e,i,r),e.child)}function wm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,i,r)):(t=Nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(a,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=_r(s,i),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Qa(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return qd(t,e,n,i,r)}function rv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Fs,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(Fs,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(Fs,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(Fs,Rn),Rn|=i;return ln(t,e,r,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qd(t,e,n,i,r){var s=vn(n)?Xr:an.current;return s=qs(e,s),Gs(e,r),n=Uh(t,e,n,i,s,r),i=Fh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(St&&i&&Mh(e),e.flags|=1,ln(t,e,n,r),e.child)}function Tm(t,e,n,i,r){if(vn(n)){var s=!0;Kl(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Al(t,e),ev(e,n,i),Xd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=vn(n)?Xr:an.current,u=qs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&ym(e,a,i,u),sr=!1;var f=e.memoizedState;a.state=f,tc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||xn.current||sr?(typeof h=="function"&&(Wd(e,n,h,i),l=e.memoizedState),(o=sr||_m(e,n,o,i,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,D0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Zn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=vn(n)?Xr:an.current,l=qs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&ym(e,a,i,l),sr=!1,f=e.memoizedState,a.state=f,tc(e,i,a,r);var x=e.memoizedState;o!==p||f!==x||xn.current||sr?(typeof m=="function"&&(Wd(e,n,m,i),x=e.memoizedState),(u=sr||_m(e,n,u,i,f,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return $d(t,e,n,i,s,r)}function $d(t,e,n,i,r,s){sv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&dm(e,n,!1),Gi(t,e,s);i=e.stateNode,JS.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&dm(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),Ih(t,e.containerInfo)}function Am(t,e,n,i,r){return $s(),Th(r),e.flags|=256,ln(t,e,n,i),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Et,r&1),t===null)return Vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fc(a,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zd(n),e.memoizedState=Kd,t):zh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return QS(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=_r(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=_r(o,s):(s=jr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Zd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Kd,i}return s=t.child,t=s.sibling,i=_r(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zh(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vo(t,e,n,i){return i!==null&&Th(i),Ks(e,t.child,null,n),t=zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QS(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Su(Error(ce(422))),Vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,a),e.child.memoizedState=Zd(a),e.memoizedState=Kd,s);if(!(e.mode&1))return Vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Su(s,i,void 0),Vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hi(t,r),ii(i,t,r,-1))}return Xh(),i=Su(Error(ce(421))),Vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=mr(r.nextSibling),Nn=e,St=!0,Qn=null,t!==null&&(Fn[kn++]=Di,Fn[kn++]=Li,Fn[kn++]=Yr,Di=t.id,Li=t.overflow,Yr=e),e=zh(e,i.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function Eu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&nc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Eu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&nc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Eu(e,!0,n,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function eE(t,e,n){switch(e.tag){case 3:av(e),$s();break;case 5:L0(e);break;case 1:vn(e.type)&&Kl(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(Ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(xt(Et,Et.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);xt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,n)}return Gi(t,e,n)}var cv,Jd,uv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jd=function(){};uv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(yi.current);var s=null;switch(n){case"input":r=yd(t,r),i=yd(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=bd(t,r),i=bd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ql)}wd(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&vt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dv=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function tE(t,e,n){var i=e.pendingProps;switch(wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return vn(e.type)&&$l(),Zt(e),null;case 3:return i=e.stateNode,Zs(),_t(xn),_t(an),Lh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(of(Qn),Qn=null))),Jd(t,e),Zt(e),null;case 5:Dh(e);var r=Br(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)uv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Zt(e),null}if(t=Br(yi.current),Ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[no]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<La.length;r++)vt(La[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Fp(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Bp(i,s),vt("invalid",i)}wd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&zo(i.textContent,o,t),r=["children",""+o]):Xa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":Io(i),kp(i,s,!0);break;case"textarea":Io(i),zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[no]=i,cv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Td(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<La.length;r++)vt(La[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Fp(t,i),r=yd(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Bp(t,i),r=bd(t,i),vt("invalid",t);break;default:r=i}wd(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ya(t,l):typeof l=="number"&&Ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&uh(t,s,l,a))}switch(n){case"input":Io(t),kp(t,i,!1);break;case"textarea":Io(t),zp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ks(t,!!i.multiple,s,!1):i.defaultValue!=null&&ks(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Br(ro.current),Br(yi.current),Ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Nn,t!==null))switch(t.tag){case 3:zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Zt(e),null;case 13:if(_t(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Cn!==null&&e.mode&1&&!(e.flags&128))C0(),$s(),e.flags|=98560,s=!1;else if(s=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[mi]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Qn!==null&&(of(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?kt===0&&(kt=3):Xh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Zs(),Jd(t,e),t===null&&eo(e.stateNode.containerInfo),Zt(e),null;case 10:return Ch(e.type._context),Zt(e),null;case 17:return vn(e.type)&&$l(),Zt(e),null;case 19:if(_t(Et),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)va(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=nc(t),a!==null){for(e.flags|=128,va(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>Qs&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=nc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!St)return Zt(e),null}else 2*It()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Et.current,xt(Et,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Wh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function nE(t,e){switch(wh(e),e.tag){case 1:return vn(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),_t(xn),_t(an),Lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dh(e),null;case 13:if(_t(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Et),null;case 4:return Zs(),null;case 10:return Ch(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var jo=!1,tn=!1,iE=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function Qd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var Cm=!1;function rE(t,e){if(Ud=Wl,t=g0(),bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fd={focusedElem:t,selectionRange:n},Wl=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var E=x.memoizedProps,g=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:Zn(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Rt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return x=Cm,Cm=!1,x}function Va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qd(e,n,s)}r=r.next}while(r!==i)}}function Oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[no],delete e[zd],delete e[zS],delete e[HS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ql));else if(i!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}var jt=null,Jn=!1;function Ki(t,e,n){for(n=n.child;n!==null;)pv(t,e,n),n=n.sibling}function pv(t,e,n){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(Ac,n)}catch{}switch(n.tag){case 5:tn||Us(n,e);case 6:var i=jt,r=Jn;jt=null,Ki(t,e,n),jt=i,Jn=r,jt!==null&&(Jn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Jn?(t=jt,n=n.stateNode,t.nodeType===8?mu(t.parentNode,n):t.nodeType===1&&mu(t,n),Za(t)):mu(jt,n.stateNode));break;case 4:i=jt,r=Jn,jt=n.stateNode.containerInfo,Jn=!0,Ki(t,e,n),jt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qd(n,e,a),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!tn&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Ki(t,e,n),tn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iE),e.forEach(function(i){var r=hE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Jn=!1;break e;case 3:jt=o.stateNode.containerInfo,Jn=!0;break e;case 4:jt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(jt===null)throw Error(ce(160));pv(s,a,r),jt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mv(e,t),e=e.sibling}function mv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ui(t),i&4){try{Va(3,t,t.return),Oc(3,t)}catch(E){Rt(t,t.return,E)}try{Va(5,t,t.return)}catch(E){Rt(t,t.return,E)}}break;case 1:Yn(e,t),ui(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if(Yn(e,t),ui(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{Ya(r,"")}catch(E){Rt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Fx(r,s),Td(o,a);var u=Td(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?Gx(r,p):h==="dangerouslySetInnerHTML"?zx(r,p):h==="children"?Ya(r,p):uh(r,h,p,u)}switch(o){case"input":Sd(r,s);break;case"textarea":kx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ks(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ks(r,!!s.multiple,s.defaultValue,!0):ks(r,!!s.multiple,s.multiple?[]:"",!1))}r[no]=s}catch(E){Rt(t,t.return,E)}}break;case 6:if(Yn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Rt(t,t.return,E)}}break;case 3:if(Yn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(E){Rt(t,t.return,E)}break;case 4:Yn(e,t),ui(t);break;case 13:Yn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vh=It())),i&4&&Pm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||h,Yn(e,t),tn=u):Yn(e,t),ui(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Ae=t,h=t.child;h!==null;){for(p=Ae=h;Ae!==null;){switch(f=Ae,m=f.child,f.tag){case 0:case 11:case 14:case 15:Va(4,f,f.return);break;case 1:Us(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(E){Rt(i,n,E)}}break;case 5:Us(f,f.return);break;case 22:if(f.memoizedState!==null){Dm(p);continue}}m!==null?(m.return=f,Ae=m):Dm(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Hx("display",a))}catch(E){Rt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(E){Rt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yn(e,t),ui(t),i&4&&Pm(t);break;case 21:break;default:Yn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ya(r,""),i.flags&=-33);var s=Nm(t);nf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Nm(t);tf(t,o,a);break;default:throw Error(ce(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sE(t,e,n){Ae=t,gv(t)}function gv(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||jo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||tn;o=jo;var u=tn;if(jo=a,(tn=l)&&!u)for(Ae=r;Ae!==null;)a=Ae,l=a.child,a.tag===22&&a.memoizedState!==null?Lm(r):l!==null?(l.return=a,Ae=l):Lm(r);for(;s!==null;)Ae=s,gv(s),s=s.sibling;Ae=r,jo=o,tn=u}Im(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Im(t)}}function Im(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Za(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}tn||e.flags&512&&ef(e)}catch(f){Rt(e,e.return,f)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Dm(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Lm(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Oc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{ef(e)}catch(l){Rt(e,s,l)}break;case 5:var a=e.return;try{ef(e)}catch(l){Rt(e,a,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Ae=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ae=o;break}Ae=e.return}}var aE=Math.ceil,sc=Wi.ReactCurrentDispatcher,Hh=Wi.ReactCurrentOwner,Gn=Wi.ReactCurrentBatchConfig,it=0,Vt=null,Ut=null,Yt=0,Rn=0,Fs=Mr(0),kt=0,lo=null,$r=0,Uc=0,Gh=0,ja=null,mn=null,Vh=0,Qs=1/0,Pi=null,ac=!1,rf=null,xr=null,Wo=!1,ur=null,oc=0,Wa=0,sf=null,Rl=-1,Cl=0;function cn(){return it&6?It():Rl!==-1?Rl:Rl=It()}function vr(t){return t.mode&1?it&2&&Yt!==0?Yt&-Yt:VS.transition!==null?(Cl===0&&(Cl=e0()),Cl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:o0(t.type)),t):1}function ii(t,e,n,i){if(50<Wa)throw Wa=0,sf=null,Error(ce(185));mo(t,n,i),(!(it&2)||t!==Vt)&&(t===Vt&&(!(it&2)&&(Uc|=n),kt===4&&or(t,Yt)),_n(t,i),n===1&&it===0&&!(e.mode&1)&&(Qs=It()+500,Ic&&wr()))}function _n(t,e){var n=t.callbackNode;Vy(t,e);var i=jl(t,t===Vt?Yt:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?GS(Om.bind(null,t)):T0(Om.bind(null,t)),kS(function(){!(it&6)&&wr()}),n=null;else{switch(t0(i)){case 1:n=mh;break;case 4:n=Jx;break;case 16:n=Vl;break;case 536870912:n=Qx;break;default:n=Vl}n=Mv(n,xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xv(t,e){if(Rl=-1,Cl=0,it&6)throw Error(ce(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=jl(t,t===Vt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=lc(t,i);else{e=i;var r=it;it|=2;var s=_v();(Vt!==t||Yt!==e)&&(Pi=null,Qs=It()+500,Vr(t,e));do try{cE();break}catch(o){vv(t,o)}while(!0);Rh(),sc.current=s,it=r,Ut!==null?e=0:(Vt=null,Yt=0,e=kt)}if(e!==0){if(e===2&&(r=Pd(t),r!==0&&(i=r,e=af(t,r))),e===1)throw n=lo,Vr(t,0),or(t,i),_n(t,It()),n;if(e===6)or(t,i);else{if(r=t.current.alternate,!(i&30)&&!oE(r)&&(e=lc(t,i),e===2&&(s=Pd(t),s!==0&&(i=s,e=af(t,s))),e===1))throw n=lo,Vr(t,0),or(t,i),_n(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Ir(t,mn,Pi);break;case 3:if(or(t,i),(i&130023424)===i&&(e=Vh+500-It(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bd(Ir.bind(null,t,mn,Pi),e);break}Ir(t,mn,Pi);break;case 4:if(or(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aE(i/1960))-i,10<i){t.timeoutHandle=Bd(Ir.bind(null,t,mn,Pi),i);break}Ir(t,mn,Pi);break;case 5:Ir(t,mn,Pi);break;default:throw Error(ce(329))}}}return _n(t,It()),t.callbackNode===n?xv.bind(null,t):null}function af(t,e){var n=ja;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=lc(t,e),t!==2&&(e=mn,mn=n,e!==null&&of(e)),t}function of(t){mn===null?mn=t:mn.push.apply(mn,t)}function oE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Gh,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Om(t){if(it&6)throw Error(ce(327));Vs();var e=jl(t,0);if(!(e&1))return _n(t,It()),null;var n=lc(t,e);if(t.tag!==0&&n===2){var i=Pd(t);i!==0&&(e=i,n=af(t,i))}if(n===1)throw n=lo,Vr(t,0),or(t,e),_n(t,It()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,mn,Pi),_n(t,It()),null}function jh(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Qs=It()+500,Ic&&wr())}}function Kr(t){ur!==null&&ur.tag===0&&!(it&6)&&Vs();var e=it;it|=1;var n=Gn.transition,i=lt;try{if(Gn.transition=null,lt=1,t)return t()}finally{lt=i,Gn.transition=n,it=e,!(it&6)&&wr()}}function Wh(){Rn=Fs.current,_t(Fs)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FS(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$l();break;case 3:Zs(),_t(xn),_t(an),Lh();break;case 5:Dh(i);break;case 4:Zs();break;case 13:_t(Et);break;case 19:_t(Et);break;case 10:Ch(i.type._context);break;case 22:case 23:Wh()}n=n.return}if(Vt=t,Ut=t=_r(t.current,null),Yt=Rn=e,kt=0,lo=null,Gh=Uc=$r=0,mn=ja=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}kr=null}return t}function vv(t,e){do{var n=Ut;try{if(Rh(),wl.current=rc,ic){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ic=!1}if(qr=0,Gt=Ft=bt=null,Ga=!1,so=0,Hh.current=null,n===null||n.return===null){kt=1,lo=e,Ut=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Em(a);if(m!==null){m.flags&=-257,bm(m,a,o,s,e),m.mode&1&&Sm(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var E=new Set;E.add(l),e.updateQueue=E}else x.add(l);break e}else{if(!(e&1)){Sm(s,u,e),Xh();break e}l=Error(ce(426))}}else if(St&&o.mode&1){var g=Em(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),bm(g,a,o,s,e),Th(Js(l,o));break e}}s=l=Js(l,o),kt!==4&&(kt=2),ja===null?ja=[s]:ja.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=tv(s,l,e);mm(s,d);break e;case 1:o=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(xr===null||!xr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=nv(s,o,e);mm(s,y);break e}}s=s.return}while(s!==null)}Sv(n)}catch(M){e=M,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function _v(){var t=sc.current;return sc.current=rc,t===null?rc:t}function Xh(){(kt===0||kt===3||kt===2)&&(kt=4),Vt===null||!($r&268435455)&&!(Uc&268435455)||or(Vt,Yt)}function lc(t,e){var n=it;it|=2;var i=_v();(Vt!==t||Yt!==e)&&(Pi=null,Vr(t,e));do try{lE();break}catch(r){vv(t,r)}while(!0);if(Rh(),it=n,sc.current=i,Ut!==null)throw Error(ce(261));return Vt=null,Yt=0,kt}function lE(){for(;Ut!==null;)yv(Ut)}function cE(){for(;Ut!==null&&!Ly();)yv(Ut)}function yv(t){var e=bv(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?Sv(t):Ut=e,Hh.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nE(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,Ut=null;return}}else if(n=tE(n,e,Rn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);kt===0&&(kt=5)}function Ir(t,e,n){var i=lt,r=Gn.transition;try{Gn.transition=null,lt=1,uE(t,e,n,i)}finally{Gn.transition=r,lt=i}return null}function uE(t,e,n,i){do Vs();while(ur!==null);if(it&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jy(t,s),t===Vt&&(Ut=Vt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wo||(Wo=!0,Mv(Vl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=lt;lt=1;var o=it;it|=4,Hh.current=null,rE(t,n),mv(n,t),NS(Fd),Wl=!!Ud,Fd=Ud=null,t.current=n,sE(n),Oy(),it=o,lt=a,Gn.transition=s}else t.current=n;if(Wo&&(Wo=!1,ur=t,oc=r),s=t.pendingLanes,s===0&&(xr=null),ky(n.stateNode),_n(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ac)throw ac=!1,t=rf,rf=null,t;return oc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===sf?Wa++:(Wa=0,sf=t):Wa=0,wr(),null}function Vs(){if(ur!==null){var t=t0(oc),e=Gn.transition,n=lt;try{if(Gn.transition=null,lt=16>t?16:t,ur===null)var i=!1;else{if(t=ur,ur=null,oc=0,it&6)throw Error(ce(331));var r=it;for(it|=4,Ae=t.current;Ae!==null;){var s=Ae,a=s.child;if(Ae.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ae=u;Ae!==null;){var h=Ae;switch(h.tag){case 0:case 11:case 15:Va(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ae=p;else for(;Ae!==null;){h=Ae;var f=h.sibling,m=h.return;if(fv(h),h===u){Ae=null;break}if(f!==null){f.return=m,Ae=f;break}Ae=m}}}var x=s.alternate;if(x!==null){var E=x.child;if(E!==null){x.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Ae=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ae=a;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Va(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ae=d;break e}Ae=s.return}}var v=t.current;for(Ae=v;Ae!==null;){a=Ae;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Ae=S;else e:for(a=v;Ae!==null;){if(o=Ae,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Oc(9,o)}}catch(M){Rt(o,o.return,M)}if(o===a){Ae=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Ae=y;break e}Ae=o.return}}if(it=r,wr(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(Ac,t)}catch{}i=!0}return i}finally{lt=n,Gn.transition=e}}return!1}function Um(t,e,n){e=Js(n,e),e=tv(t,e,1),t=gr(t,e,1),e=cn(),t!==null&&(mo(t,1,e),_n(t,e))}function Rt(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=Js(n,t),t=nv(e,t,1),e=gr(e,t,1),t=cn(),e!==null&&(mo(e,1,t),_n(e,t));break}}e=e.return}}function dE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Yt&n)===n&&(kt===4||kt===3&&(Yt&130023424)===Yt&&500>It()-Vh?Vr(t,0):Gh|=n),_n(t,e)}function Ev(t,e){e===0&&(t.mode&1?(e=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):e=1);var n=cn();t=Hi(t,e),t!==null&&(mo(t,e,n),_n(t,n))}function fE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ev(t,n)}function hE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Ev(t,n)}var bv;bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,eE(t,e,n);gn=!!(t.flags&131072)}else gn=!1,St&&e.flags&1048576&&A0(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Al(t,e),t=e.pendingProps;var r=qs(e,an.current);Gs(e,n),r=Uh(null,e,i,t,r,n);var s=Fh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ph(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Xd(e,i,t,n),e=$d(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Mh(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=mE(i),t=Zn(i,t),r){case 0:e=qd(null,e,i,t,n);break e;case 1:e=Tm(null,e,i,t,n);break e;case 11:e=Mm(null,e,i,t,n);break e;case 14:e=wm(null,e,i,Zn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),qd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Tm(t,e,i,r,n);case 3:e:{if(av(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(t,e),tc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(ce(423)),e),e=Am(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(ce(424)),e),e=Am(t,e,i,n,r);break e}else for(Cn=mr(e.stateNode.containerInfo.firstChild),Nn=e,St=!0,Qn=null,n=P0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Gi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return L0(e),t===null&&Vd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,kd(i,r)?a=null:s!==null&&kd(i,s)&&(e.flags|=32),sv(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&Vd(e),null;case 13:return ov(t,e,n);case 4:return Ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Mm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(Ql,i._currentValue),i._currentValue=a,s!==null)if(ri(s.value,a)){if(s.children===r.children&&!xn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ui(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),jd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=Vn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),wm(t,e,i,r,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Al(t,e),e.tag=1,vn(i)?(t=!0,Kl(e)):t=!1,Gs(e,n),ev(e,i,r),Xd(e,i,r,n),$d(null,e,i,!0,t,n);case 19:return lv(t,e,n);case 22:return rv(t,e,n)}throw Error(ce(156,e.tag))};function Mv(t,e){return Zx(t,e)}function pE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new pE(t,e,n,i)}function Yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mE(t){if(typeof t=="function")return Yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===hh)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Yh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case As:return jr(n.children,r,s,e);case dh:a=8,r|=8;break;case gd:return t=Hn(12,n,e,r|2),t.elementType=gd,t.lanes=s,t;case xd:return t=Hn(13,n,e,r),t.elementType=xd,t.lanes=s,t;case vd:return t=Hn(19,n,e,r),t.elementType=vd,t.lanes=s,t;case Lx:return Fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ix:a=10;break e;case Dx:a=9;break e;case fh:a=11;break e;case hh:a=14;break e;case rr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=Lx,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qh(t,e,n,i,r,s,a,o,l){return t=new gE(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ph(s),t}function xE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return Sr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(vn(n))return w0(t,n,e)}return e}function Tv(t,e,n,i,r,s,a,o,l){return t=qh(n,i,!0,t,r,s,a,o,l),t.context=wv(null),n=t.current,i=cn(),r=vr(n),s=Ui(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,mo(t,r,i),_n(t,i),t}function kc(t,e,n,i){var r=e.current,s=cn(),a=vr(r);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ui(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,a),t!==null&&(ii(t,r,a,s),Ml(t,r,a)),a}function cc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $h(t,e){Fm(t,e),(t=t.alternate)&&Fm(t,e)}function vE(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kh(t){this._internalRoot=t}Bc.prototype.render=Kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));kc(t,e,null,null)};Bc.prototype.unmount=Kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){kc(null,t,null,null)}),e[zi]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=r0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&a0(t)}};function Zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function km(){}function _E(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cc(a);s.call(u)}}var a=Tv(e,i,t,0,null,!1,!1,"",km);return t._reactRootContainer=a,t[zi]=a.current,eo(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=cc(l);o.call(u)}}var l=qh(t,0,!1,null,null,!1,!1,"",km);return t._reactRootContainer=l,t[zi]=l.current,eo(t.nodeType===8?t.parentNode:t),Kr(function(){kc(e,l,n,i)}),l}function Hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=cc(a);o.call(l)}}kc(e,a,t,r)}else a=_E(n,e,t,r,i);return cc(a)}n0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Da(e.pendingLanes);n!==0&&(gh(e,n|1),_n(e,It()),!(it&6)&&(Qs=It()+500,wr()))}break;case 13:Kr(function(){var i=Hi(t,1);if(i!==null){var r=cn();ii(i,t,1,r)}}),$h(t,1)}};xh=function(t){if(t.tag===13){var e=Hi(t,134217728);if(e!==null){var n=cn();ii(e,t,134217728,n)}$h(t,134217728)}};i0=function(t){if(t.tag===13){var e=vr(t),n=Hi(t,e);if(n!==null){var i=cn();ii(n,t,e,i)}$h(t,e)}};r0=function(){return lt};s0=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Rd=function(t,e,n){switch(e){case"input":if(Sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pc(i);if(!r)throw Error(ce(90));Ux(i),Sd(i,r)}}}break;case"textarea":kx(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};Wx=jh;Xx=Kr;var yE={usingClientEntryPoint:!1,Events:[xo,Ps,Pc,Vx,jx,jh]},_a={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},SE={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$x(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||vE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{Ac=Xo.inject(SE),_i=Xo}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yE;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(e))throw Error(ce(200));return xE(t,e,null,n)};In.createRoot=function(t,e){if(!Zh(t))throw Error(ce(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,eo(t.nodeType===8?t.parentNode:t),new Kh(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=$x(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Kr(t)};In.hydrate=function(t,e,n){if(!zc(e))throw Error(ce(200));return Hc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Zh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,r,!1,s,a),t[zi]=e.current,eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bc(e)};In.render=function(t,e,n){if(!zc(e))throw Error(ce(200));return Hc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!zc(t))throw Error(ce(40));return t._reactRootContainer?(Kr(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};In.unstable_batchedUpdates=jh;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Hc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(t){console.error(t)}}Rv(),Rx.exports=In;var EE=Rx.exports,Bm=EE;pd.createRoot=Bm.createRoot,pd.hydrateRoot=Bm.hydrateRoot;function bE(){return c.jsx("div",{className:"fixed inset-0 w-full h-full z-0 pointer-events-none","aria-hidden":"true",style:{background:`
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(129,178,154,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 80% at 80% 90%, rgba(212,163,115,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 100% 100% at 50% 50%, rgba(30,29,44,0.8) 0%, #0f0f13 100%)
        `}})}class ME{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted||this.playBeep(600,"sine",.05),this.muted}playClick(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.03),n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.linearRampToValueAtTime(.01,this.ctx.currentTime+.03),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.03)}catch(e){console.warn("Audio playback error:",e)}}playExec(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(440,e),n.frequency.setValueAtTime(880,e+.04),i.gain.setValueAtTime(.1,e),i.gain.exponentialRampToValueAtTime(.01,e+.1),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+.1)}catch(e){console.warn("Audio error:",e)}}playError(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(150,e),n.frequency.setValueAtTime(110,e+.08),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.01,e+.2),n.connect(i),i.connect(this.ctx.destination),n.start(),n.stop(e+.2)}catch(e){console.warn("Audio error:",e)}}playBeep(e=520,n="sine",i=.08){if(!this.muted&&(this.init(),!!this.ctx))try{const r=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type=n,s.frequency.setValueAtTime(e,r),a.gain.setValueAtTime(.08,r),a.gain.exponentialRampToValueAtTime(.001,r+i),s.connect(a),a.connect(this.ctx.destination),s.start(),s.stop(r+i)}catch(r){console.warn("Audio error:",r)}}playStartup(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[261.63,329.63,392,523.25].forEach((i,r)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i,e+r*.08),a.gain.setValueAtTime(.08,e+r*.08),a.gain.exponentialRampToValueAtTime(.001,e+r*.08+.2),s.connect(a),a.connect(this.ctx.destination),s.start(e+r*.08),s.stop(e+r*.08+.2)})}catch(e){console.warn("Audio error:",e)}}}const Re=new ME;function wE({onOpenWindow:t,onToggleAudio:e,onOpenContact:n,isMuted:i,isDemo:r}){return c.jsxs("header",{className:"fixed top-0 w-full z-40 border-b-4 border-r-4 border-white bg-surface-container-highest text-primary font-code-terminal text-code-terminal flex justify-between items-center px-3 sm:px-margin-edge h-16",style:{boxShadow:"inset 2px 2px 0px 0px rgba(255,255,255,0.2), inset -2px -2px 0px 0px rgba(0,0,0,0.5)"},children:[c.jsxs("div",{className:"flex items-center gap-2 sm:gap-gutter min-w-0",children:[c.jsx("div",{className:"h-9 w-9 sm:h-10 sm:w-10 border-2 border-primary-container rounded-sm bg-black flex items-center justify-center flex-shrink-0",children:c.jsx("span",{className:"material-symbols-outlined text-primary-container text-xl sm:text-2xl",style:{fontVariationSettings:'"FILL" 1'},children:"query_stats"})}),c.jsxs("div",{className:"flex flex-col min-w-0",children:[c.jsx("h1",{className:"font-display-lg text-[18px] sm:text-display-lg text-primary uppercase tracking-tighter hidden sm:block glitch-text truncate","data-text":"OBSOLESCENCE PROTOCOL",children:"OBSOLESCENCE PROTOCOL"}),c.jsx("h1",{className:"font-display-lg text-[16px] leading-none text-primary uppercase tracking-tighter sm:hidden glitch-text truncate","data-text":"OBS. PROTOCOL",children:"OBS. PROTOCOL"})]}),r&&c.jsx("span",{className:"hidden md:inline-block ml-2 bg-primary-container text-black font-label-sm text-[10px] px-2 py-0.5 win-bevel-outset uppercase font-bold animate-pulse flex-shrink-0",children:"DEMO MODE"})]}),c.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2 flex-shrink-0",children:[c.jsxs("button",{onClick:()=>{Re.playClick(),n&&n()},className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-2.5 py-1 flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer",title:"Direct Contact & Inquiries",children:[c.jsx("span",{className:"material-symbols-outlined text-[15px] text-amber-300",children:"mail"}),c.jsx("span",{children:"CONTACT"})]}),c.jsxs("button",{onClick:()=>{Re.playClick(),t("stats")},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white",title:"Open Analytics Dashboard [S]",children:[c.jsx("span",{className:"material-symbols-outlined text-[15px]",children:"analytics"}),c.jsx("span",{className:"hidden md:inline",children:"Stats"})]}),c.jsxs("button",{onClick:()=>{Re.playClick(),t("terminal")},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white",title:"Open CLI Terminal [T]",children:[c.jsx("span",{className:"material-symbols-outlined text-[15px]",children:"terminal"}),c.jsx("span",{className:"hidden md:inline",children:"Terminal"})]}),c.jsxs("button",{onClick:()=>{Re.playClick(),t("ipod")},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white text-purple-950 hidden sm:flex",title:"Open Retro iPod Music Player [P]",children:[c.jsx("span",{className:"material-symbols-outlined text-[15px]",children:"graphic_eq"}),c.jsx("span",{className:"hidden md:inline",children:"iPod"})]}),c.jsx("button",{onClick:()=>{e()},className:"win-bevel-button bg-gray-300 text-black px-2 py-1 flex items-center gap-1 text-[11px] sm:text-[12px] font-bold hover:bg-white",title:i?"Unmute Sound":"Mute Sound",children:c.jsx("span",{className:"material-symbols-outlined text-[15px]",children:i?"volume_off":"volume_up"})})]})]})}function TE({sources:t=[],onRefresh:e,onOpenSources:n,onOpenTerminal:i,onOpenResume:r}){const[s,a]=oe.useState(null),[o,l]=oe.useState(null),u=t.filter(f=>f.enabled).length,h=t.filter(f=>f.healthy).length,p=async()=>{const f=performance.now();try{const x=await(await fetch("/api/health")).json(),E=performance.now();a(x),l(Math.round(E-f))}catch{a({status:"OFFLINE",uptime:"N/A",memory:{heapUsedMB:0}})}};return oe.useEffect(()=>{p();const f=setInterval(p,15e3);return()=>clearInterval(f)},[]),c.jsxs("section",{className:"win-window win-bevel-outset p-[2px] w-full max-w-xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.8)] relative mt-4 font-code-terminal",children:[c.jsxs("div",{className:"win-titlebar flex justify-between items-center px-2 py-1 bg-[#000080] text-white select-none",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:"material-symbols-outlined text-[15px] text-green-400",children:"dns"}),c.jsx("span",{className:"text-[12px] font-bold tracking-wide",children:"GATEWAY.TELEMETRY // LIVE INFRASTRUCTURE MONITOR"})]}),c.jsx("button",{onClick:()=>{Re.playClick(),p(),e&&e()},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[12px] hover:bg-white cursor-pointer",title:"Refresh Server Health & Sources",children:"↻"})]}),c.jsxs("div",{className:"p-3 bg-[#c0c0c0] text-black space-y-2.5 text-[11px] sm:text-[12px]",children:[c.jsxs("div",{className:"bg-[#121216] text-[#f4f1de] p-2.5 win-bevel-inset flex items-center justify-between gap-2 flex-wrap font-mono",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsxs("span",{className:"font-bold text-white",children:["NODE_GATEWAY: ",(s==null?void 0:s.status)||"POLLING..."]})]}),c.jsxs("div",{className:"flex items-center gap-3 text-[10px] text-gray-300",children:[o!==null&&c.jsxs("span",{children:["PING: ",c.jsxs("strong",{className:"text-emerald-400",children:[o,"ms"]})]}),(s==null?void 0:s.uptime)&&c.jsxs("span",{children:["UPTIME: ",c.jsx("strong",{className:"text-amber-300",children:s.uptime})]}),(s==null?void 0:s.memory)&&c.jsxs("span",{children:["HEAP: ",c.jsxs("strong",{className:"text-sky-300",children:[s.memory.heapUsedMB,"MB"]})]})]})]}),c.jsxs("div",{className:"space-y-1",children:[c.jsxs("p",{className:"text-[#000080] font-bold",children:["> TELEMETRY AGGREGATOR: ",h,"/",u||t.length," LIVE SOURCES ACTIVE"]}),c.jsx("p",{className:"text-gray-800",children:"> PIPELINES: GITHUB · SPOTIFY · STRAVA · OURA · RESCUETIME · LEETCODE"}),c.jsx("p",{className:"text-[#0f6d00] font-bold",children:"> FAULT ISOLATION: ENGAGED | IN-MEMORY TTL CACHE: ACTIVE (180s/600s)"})]}),c.jsxs("div",{className:"flex items-center gap-2 pt-1 flex-wrap",children:[c.jsx("button",{onClick:()=>{Re.playClick(),i&&i()},className:"bg-black text-[#00ff00] font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-gray-900 cursor-pointer active:translate-y-0.5",children:"> /SYS/TERMINAL"}),c.jsx("button",{onClick:()=>{Re.playClick(),n&&n()},className:"bg-black text-secondary-container font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-gray-900 cursor-pointer active:translate-y-0.5",children:"> /SYS/SOURCES"}),r&&c.jsx("button",{onClick:()=>{Re.playClick(),r()},className:"bg-[#000080] text-amber-300 font-bold text-[11px] px-2.5 py-1 win-bevel-outset hover:bg-[#0000a0] cursor-pointer active:translate-y-0.5 ml-auto",children:"> EXEC RESUME"})]})]})]})}function ai(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Zr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Cv=6048e5,AE=864e5;let RE={};function Gc(){return RE}function co(t,e){var o,l,u,h;const n=Gc(),i=(e==null?void 0:e.weekStartsOn)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??0,r=ai(t),s=r.getDay(),a=(s<i?7:0)+s-i;return r.setDate(r.getDate()-a),r.setHours(0,0,0,0),r}function uc(t){return co(t,{weekStartsOn:1})}function Nv(t){const e=ai(t),n=e.getFullYear(),i=Zr(t,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const r=uc(i),s=Zr(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const a=uc(s);return e.getTime()>=r.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function zm(t){const e=ai(t);return e.setHours(0,0,0,0),e}function Hm(t){const e=ai(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function CE(t,e){const n=zm(t),i=zm(e),r=+n-Hm(n),s=+i-Hm(i);return Math.round((r-s)/AE)}function NE(t){const e=Nv(t),n=Zr(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),uc(n)}function PE(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function IE(t){if(!PE(t)&&typeof t!="number")return!1;const e=ai(t);return!isNaN(Number(e))}function DE(t){const e=ai(t),n=Zr(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const LE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},OE=(t,e,n)=>{let i;const r=LE[t];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function wu(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const UE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},FE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},BE={date:wu({formats:UE,defaultWidth:"full"}),time:wu({formats:FE,defaultWidth:"full"}),dateTime:wu({formats:kE,defaultWidth:"full"})},zE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},HE=(t,e,n,i)=>zE[t];function ya(t){return(e,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let r;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{const a=t.defaultWidth,o=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return r[s]}}const GE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},VE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},jE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},WE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},XE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},YE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},qE=(t,e)=>{const n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},$E={ordinalNumber:qE,era:ya({values:GE,defaultWidth:"wide"}),quarter:ya({values:VE,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ya({values:jE,defaultWidth:"wide"}),day:ya({values:WE,defaultWidth:"wide"}),dayPeriod:ya({values:XE,defaultWidth:"wide",formattingValues:YE,defaultFormattingWidth:"wide"})};function Sa(t){return(e,n={})=>{const i=n.width,r=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(r);if(!s)return null;const a=s[0],o=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(o)?ZE(o,p=>p.test(a)):KE(o,p=>p.test(a));let u;u=t.valueCallback?t.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const h=e.slice(a.length);return{value:u,rest:h}}}function KE(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function ZE(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function JE(t){return(e,n={})=>{const i=e.match(t.matchPattern);if(!i)return null;const r=i[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=n.valueCallback?n.valueCallback(a):a;const o=e.slice(r.length);return{value:a,rest:o}}}const QE=/^(\d+)(th|st|nd|rd)?/i,eb=/\d+/i,tb={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},nb={any:[/^b/i,/^(a|c)/i]},ib={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},rb={any:[/1/i,/2/i,/3/i,/4/i]},sb={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ab={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ob={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},lb={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},cb={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ub={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},db={ordinalNumber:JE({matchPattern:QE,parsePattern:eb,valueCallback:t=>parseInt(t,10)}),era:Sa({matchPatterns:tb,defaultMatchWidth:"wide",parsePatterns:nb,defaultParseWidth:"any"}),quarter:Sa({matchPatterns:ib,defaultMatchWidth:"wide",parsePatterns:rb,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Sa({matchPatterns:sb,defaultMatchWidth:"wide",parsePatterns:ab,defaultParseWidth:"any"}),day:Sa({matchPatterns:ob,defaultMatchWidth:"wide",parsePatterns:lb,defaultParseWidth:"any"}),dayPeriod:Sa({matchPatterns:cb,defaultMatchWidth:"any",parsePatterns:ub,defaultParseWidth:"any"})},fb={code:"en-US",formatDistance:OE,formatLong:BE,formatRelative:HE,localize:$E,match:db,options:{weekStartsOn:0,firstWeekContainsDate:1}};function hb(t){const e=ai(t);return CE(e,DE(e))+1}function pb(t){const e=ai(t),n=+uc(e)-+NE(e);return Math.round(n/Cv)+1}function Pv(t,e){var h,p,f,m;const n=ai(t),i=n.getFullYear(),r=Gc(),s=(e==null?void 0:e.firstWeekContainsDate)??((p=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,a=Zr(t,0);a.setFullYear(i+1,0,s),a.setHours(0,0,0,0);const o=co(a,e),l=Zr(t,0);l.setFullYear(i,0,s),l.setHours(0,0,0,0);const u=co(l,e);return n.getTime()>=o.getTime()?i+1:n.getTime()>=u.getTime()?i:i-1}function mb(t,e){var o,l,u,h;const n=Gc(),i=(e==null?void 0:e.firstWeekContainsDate)??((l=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(u=n.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??1,r=Pv(t,e),s=Zr(t,0);return s.setFullYear(r,0,i),s.setHours(0,0,0,0),co(s,e)}function gb(t,e){const n=ai(t),i=+co(n,e)-+mb(n,e);return Math.round(i/Cv)+1}function ot(t,e){const n=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return n+i}const Zi={y(t,e){const n=t.getFullYear(),i=n>0?n:1-n;return ot(e==="yy"?i%100:i,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ot(n+1,2)},d(t,e){return ot(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ot(t.getHours()%12||12,e.length)},H(t,e){return ot(t.getHours(),e.length)},m(t,e){return ot(t.getMinutes(),e.length)},s(t,e){return ot(t.getSeconds(),e.length)},S(t,e){const n=e.length,i=t.getMilliseconds(),r=Math.trunc(i*Math.pow(10,n-3));return ot(r,e.length)}},us={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Gm={G:function(t,e,n){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const i=t.getFullYear(),r=i>0?i:1-i;return n.ordinalNumber(r,{unit:"year"})}return Zi.y(t,e)},Y:function(t,e,n,i){const r=Pv(t,i),s=r>0?r:1-r;if(e==="YY"){const a=s%100;return ot(a,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):ot(s,e.length)},R:function(t,e){const n=Nv(t);return ot(n,e.length)},u:function(t,e){const n=t.getFullYear();return ot(n,e.length)},Q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ot(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ot(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){const i=t.getMonth();switch(e){case"M":case"MM":return Zi.M(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ot(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){const r=gb(t,i);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):ot(r,e.length)},I:function(t,e,n){const i=pb(t);return e==="Io"?n.ordinalNumber(i,{unit:"week"}):ot(i,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Zi.d(t,e)},D:function(t,e,n){const i=hb(t);return e==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):ot(i,e.length)},E:function(t,e,n){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){const r=t.getDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ot(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){const r=t.getDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ot(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const i=t.getDay(),r=i===0?7:i;switch(e){case"i":return String(r);case"ii":return ot(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const i=t.getHours();let r;switch(i===12?r=us.noon:i===0?r=us.midnight:r=i/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const i=t.getHours();let r;switch(i>=17?r=us.evening:i>=12?r=us.afternoon:i>=4?r=us.morning:r=us.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Zi.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Zi.H(t,e)},K:function(t,e,n){const i=t.getHours()%12;return e==="Ko"?n.ordinalNumber(i,{unit:"hour"}):ot(i,e.length)},k:function(t,e,n){let i=t.getHours();return i===0&&(i=24),e==="ko"?n.ordinalNumber(i,{unit:"hour"}):ot(i,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Zi.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Zi.s(t,e)},S:function(t,e){return Zi.S(t,e)},X:function(t,e,n){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return jm(i);case"XXXX":case"XX":return Dr(i);case"XXXXX":case"XXX":default:return Dr(i,":")}},x:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"x":return jm(i);case"xxxx":case"xx":return Dr(i);case"xxxxx":case"xxx":default:return Dr(i,":")}},O:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Vm(i,":");case"OOOO":default:return"GMT"+Dr(i,":")}},z:function(t,e,n){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Vm(i,":");case"zzzz":default:return"GMT"+Dr(i,":")}},t:function(t,e,n){const i=Math.trunc(t.getTime()/1e3);return ot(i,e.length)},T:function(t,e,n){const i=t.getTime();return ot(i,e.length)}};function Vm(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=Math.trunc(i/60),s=i%60;return s===0?n+String(r):n+String(r)+e+ot(s,2)}function jm(t,e){return t%60===0?(t>0?"-":"+")+ot(Math.abs(t)/60,2):Dr(t,e)}function Dr(t,e=""){const n=t>0?"-":"+",i=Math.abs(t),r=ot(Math.trunc(i/60),2),s=ot(i%60,2);return n+r+e+s}const Wm=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Iv=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},xb=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],i=n[1],r=n[2];if(!r)return Wm(t,e);let s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Wm(i,e)).replace("{{time}}",Iv(r,e))},vb={p:Iv,P:xb},_b=/^D+$/,yb=/^Y+$/,Sb=["D","DD","YY","YYYY"];function Eb(t){return _b.test(t)}function bb(t){return yb.test(t)}function Mb(t,e,n){const i=wb(t,e,n);if(console.warn(i),Sb.includes(t))throw new RangeError(i)}function wb(t,e,n){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Tb=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ab=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Rb=/^'([^]*?)'?$/,Cb=/''/g,Nb=/[a-zA-Z]/;function dc(t,e,n){var h,p,f,m;const i=Gc(),r=i.locale??fb,s=i.firstWeekContainsDate??((p=(h=i.locale)==null?void 0:h.options)==null?void 0:p.firstWeekContainsDate)??1,a=i.weekStartsOn??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??0,o=ai(t);if(!IE(o))throw new RangeError("Invalid time value");let l=e.match(Ab).map(x=>{const E=x[0];if(E==="p"||E==="P"){const g=vb[E];return g(x,r.formatLong)}return x}).join("").match(Tb).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const E=x[0];if(E==="'")return{isToken:!1,value:Pb(x)};if(Gm[E])return{isToken:!0,value:x};if(E.match(Nb))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:x}});r.localize.preprocessor&&(l=r.localize.preprocessor(o,l));const u={firstWeekContainsDate:s,weekStartsOn:a,locale:r};return l.map(x=>{if(!x.isToken)return x.value;const E=x.value;(bb(E)||Eb(E))&&Mb(E,e,String(t));const g=Gm[E[0]];return g(o,E,r.localize,u)}).join("")}function Pb(t){const e=t.match(Rb);return e?e[1].replace(Cb,"'"):t}function Ib({dateRange:t,setDateRange:e}){const n=[{label:"7 Days",days:7},{label:"30 Days",days:30},{label:"90 Days",days:90}],i=r=>{e({from:new Date(Date.now()-r*24*60*60*1e3),to:new Date})};return c.jsxs("section",{className:"win-window win-bevel-outset p-[2px] w-full max-w-2xl mx-auto shadow-[8px_8px_0px_rgba(0,0,0,0.7)] mt-4",children:[c.jsx("div",{className:"win-titlebar flex justify-between items-center px-2 py-1",children:c.jsx("span",{className:"font-code-terminal text-[14px] font-bold tracking-wide",children:"TIME.RANGE"})}),c.jsxs("div",{className:"p-window-padding font-code-terminal text-code-terminal bg-[#c0c0c0] flex flex-wrap gap-2 items-center",children:[c.jsx("span",{className:"text-black",children:"> FILTER:"}),n.map(r=>c.jsx("button",{onClick:()=>i(r.days),className:"win-bevel-button bg-white text-black font-bold px-3 py-1 hover:bg-gray-200",children:r.label},r.days)),c.jsxs("span",{className:"text-black ml-auto text-[10px]",children:[dc(t.from,"MMM dd")," - ",dc(t.to,"MMM dd")]})]})]})}function fc({text:t="",delay:e=20,startDelay:n=0,className:i="",cursorChar:r="▋",showCursor:s=!0,onComplete:a}){const[o,l]=oe.useState(""),[u,h]=oe.useState(0),[p,f]=oe.useState(n===0);return oe.useEffect(()=>{l(""),h(0),f(n===0);let m=null;return n>0&&(m=setTimeout(()=>{f(!0)},n)),()=>{m&&clearTimeout(m)}},[t,n]),oe.useEffect(()=>{if(!(!p||!t))if(u<t.length){const m=setTimeout(()=>{l(x=>x+t[u]),h(x=>x+1)},e);return()=>clearTimeout(m)}else a&&a()},[p,u,e,t,a]),c.jsxs("span",{className:`font-mono inline ${i}`,children:[o,s&&p&&u<t.length&&c.jsx("span",{className:"inline-block animate-pulse text-[#81b29a] ml-0.5 opacity-80 select-none",children:r})]})}const Xm={sleep:{icon:"bed",label:"SLEEP_CYCLE",color:"bg-[#d4a373]",cols:"md:col-span-6"},workout:{icon:"directions_run",label:"MOVEMENT",color:"bg-[#81b29a]",cols:"md:col-span-6"},commit:{icon:"code",label:"KNOWLEDGE_COMMITS",color:"bg-[#e07a5f]",cols:"md:col-span-12",hasWarning:!0,hasInput:!0},pull_request:{icon:"merge",label:"CODE_MERGE",color:"bg-[#81b29a]",cols:"md:col-span-6"},issue:{icon:"bug_report",label:"ISSUE_LOG",color:"bg-[#e07a5f]",cols:"md:col-span-6"},music:{icon:"music_note",label:"AUDIO_STREAM",color:"bg-[#d4a373]",cols:"md:col-span-6"},time_tracking:{icon:"schedule",label:"TIME_ANALYSIS",color:"bg-[#81b29a]",cols:"md:col-span-6"},default:{icon:"circle",label:"DATA_ENTRY",color:"bg-[#d4a373]",cols:"md:col-span-6"}};function Db({event:t,index:e,onExecuteCommand:n,onOpenIPodWithTrack:i,forceExpand:r=null}){const[s,a]=oe.useState(e<2),[o,l]=oe.useState(""),[u,h]=oe.useState(!1),[p,f]=oe.useState(!1),m=r!==null?r:s,x=Xm[t.type]||Xm.default,E=e%3===0?"md:translate-x-[2px]":e%3===1?"md:translate-y-[4px] md:-translate-x-[2px]":"md:translate-y-[2px]";if(p)return null;const g=()=>{o.trim()&&(Re.playExec(),n&&n(o.trim()),l(""))},d=()=>{Re.playClick(),a(!s)},v=()=>{switch(t.type){case"commit":return t.data.message||"Updated codebase telemetry";case"pull_request":return`#${t.data.number||"PR"}: ${t.data.title||"Code Merge"}`;case"issue":return`#${t.data.number||"ISS"}: ${t.data.title||"Issue Log"}`;case"music":return`"${t.data.track_name||t.data.title}" by ${t.data.artist||"Unknown"}`;case"workout":return`${t.data.sport_type||"Activity"} · ${t.data.distance?`${(t.data.distance/1e3).toFixed(1)} km`:""} · ${Math.floor((t.data.moving_time||0)/60)} mins`;case"sleep":return`Sleep: ${Math.floor((t.data.duration||0)/3600)}h ${Math.floor((t.data.duration||0)%3600/60)}m (Score: ${t.data.score||88})`;case"time_tracking":return`${t.data.activity||"Development"} · ${t.data.category||"Productivity"}`;default:return"Telemetry data event recorded"}};return c.jsx("article",{className:`endacopia-clay-card p-1 ${m?x.cols:"col-span-12"} transform ${E} relative transition-all duration-200`,children:m?c.jsxs(c.Fragment,{children:[x.hasWarning&&c.jsx("div",{className:"absolute -top-2.5 -left-2.5 w-8 h-8 bg-[#e07a5f] border border-[#f4f1de] flex items-center justify-center z-50 transform rotate-6 shadow-md rounded",children:c.jsx("span",{className:"material-symbols-outlined text-[#0f0f13] text-lg font-bold",children:"warning"})}),c.jsxs("div",{className:`flex justify-between items-center px-3 py-1.5 rounded-t ${x.color} text-[#0f0f13] font-bold`,children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("button",{onClick:d,className:"endacopia-clay-button px-1.5 h-5 flex items-center justify-center text-[10px] font-bold",title:"Collapse Log",children:"[-]"}),c.jsxs("span",{className:"font-code-terminal text-[12px] tracking-wider uppercase font-extrabold",children:["LOG_",String(e+1).padStart(2,"0"),": ",x.label]})]}),c.jsxs("div",{className:"flex items-center gap-1.5",children:[t.type==="music"&&c.jsx("button",{onClick:()=>{Re.playClick(),i&&i(t.data)},className:"endacopia-clay-button w-5 h-5 flex items-center justify-center text-[11px]",title:"Stream on iPod",children:"▶"}),c.jsx("button",{onClick:()=>{Re.playClick(),h(!u)},className:"endacopia-clay-button px-1.5 h-5 flex items-center justify-center text-[9px] font-bold",title:"Inspect Telemetry JSON",children:u?"JSON":"{ }"}),c.jsx("button",{onClick:()=>{Re.playClick(),f(!0)},className:"endacopia-clay-button w-5 h-5 flex items-center justify-center text-[11px]",title:"Dismiss Card",children:"✕"})]})]}),c.jsxs("div",{className:"p-3.5 flex flex-col bg-[#14141a] gap-2.5 rounded-b text-[#f4f1de] font-code-terminal",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[#81b29a] text-[18px]",children:x.icon}),c.jsx("span",{className:"text-[10px] font-bold text-[#81b29a] uppercase",children:dc(new Date(t.timestamp),"MMM dd, HH:mm")}),c.jsx("span",{className:"bg-[#242330] text-[#d4a373] text-[9px] px-2 py-0.5 uppercase ml-auto font-bold rounded border border-[#363545]",children:t.source})]}),u?c.jsx("pre",{className:"font-code-terminal text-[10px] bg-[#0a0a0d] text-[#81b29a] p-2 border border-[#363545] rounded overflow-auto max-h-[160px]",children:JSON.stringify(t,null,2)}):c.jsx(Lb,{event:t,onOpenIPodWithTrack:i}),x.hasInput&&c.jsxs("div",{className:"mt-auto pt-2 flex gap-2",children:[c.jsx("input",{className:"bg-[#0a0a0d] text-[#81b29a] border border-[#363545] font-code-terminal px-2.5 py-1 w-full focus:outline-none text-[11px] rounded",placeholder:"ENTER COMMAND (e.g. help, stats, mail)",type:"text",value:o,onChange:S=>l(S.target.value),onKeyDown:S=>{S.key==="Enter"&&g()}}),c.jsx("button",{onClick:g,className:"endacopia-clay-button px-3 text-[11px] cursor-pointer",children:"EXEC"})]})]})]}):c.jsxs("div",{onClick:d,className:"flex items-center justify-between p-2 sm:p-2.5 bg-[#14141a] hover:bg-[#1c1b24] text-[#f4f1de] font-code-terminal rounded cursor-pointer transition-colors border border-[#2e2d3e] gap-2 flex-wrap sm:flex-nowrap",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[c.jsx("button",{onClick:S=>{S.stopPropagation(),d()},className:"endacopia-clay-button px-1.5 py-0.5 text-[10px] font-bold text-[#81b29a] flex-shrink-0",title:"Expand Log",children:"[+]"}),c.jsxs("span",{className:`text-[9px] font-bold px-1.5 py-0.5 rounded text-black flex-shrink-0 ${x.color}`,children:["LOG_",String(e+1).padStart(2,"0")]}),c.jsx("span",{className:"text-[10px] text-[#81b29a] font-bold hidden sm:inline flex-shrink-0",children:dc(new Date(t.timestamp),"MMM dd, HH:mm")}),c.jsxs("span",{className:"text-[11px] text-[#e0ddcf] truncate font-mono",children:["> ",v()]})]}),c.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 ml-auto",children:[t.type==="music"&&c.jsx("button",{onClick:S=>{S.stopPropagation(),Re.playClick(),i&&i(t.data)},className:"endacopia-clay-button px-2 py-0.5 text-[10px] font-bold text-[#00ff00] hover:text-white",title:"Stream on iPod",children:"▶ PLAY"}),c.jsx("span",{className:"bg-[#242330] text-[#d4a373] text-[9px] px-1.5 py-0.5 uppercase font-bold rounded border border-[#363545]",children:t.source})]})]})})}function Lb({event:t,onOpenIPodWithTrack:e}){switch(t.type){case"sleep":return c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"font-bold text-[14px] text-white",children:["Duration: ",Math.floor(t.data.duration/3600),"h"," ",Math.floor(t.data.duration%3600/60),"m"]}),t.data.efficiency&&c.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["> ",c.jsx(fc,{text:`Rest Efficiency: ${t.data.efficiency}% · Recovery Score: ${t.data.score||88}/100`,delay:18})]}),t.data.deep_sleep&&c.jsxs("p",{className:"text-[10px] text-gray-400",children:["Deep Rest: ",Math.floor(t.data.deep_sleep/60)," mins · REM Rest:"," ",Math.floor(t.data.rem_sleep/60)," mins"]})]});case"workout":return c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"font-bold text-[14px] text-white",children:[t.data.sport_type||"Activity",": ",t.data.name]}),c.jsxs("div",{className:"flex flex-wrap gap-2 text-[11px] text-[#81b29a]",children:[t.data.distance>0&&c.jsxs("span",{children:["> Dist: ",(t.data.distance/1e3).toFixed(2)," km"]}),c.jsxs("span",{children:["> Moving: ",Math.floor(t.data.moving_time/60)," mins"]}),t.data.calories&&c.jsxs("span",{children:["> Energy: ",t.data.calories," kcal"]})]})]});case"commit":return c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"font-bold text-[13px] text-white",children:["Repo: ",t.data.repo]}),c.jsxs("p",{className:"text-[12px] text-[#81b29a] font-bold",children:["> ",c.jsx(fc,{text:t.data.message,delay:20})]}),t.data.hash&&c.jsxs("p",{className:"text-[10px] text-gray-500 font-mono",children:["HASH: ",t.data.hash.substring(0,10)]})]});case"pull_request":return c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"font-bold text-[13px] text-white",children:["PR #",t.data.number,": ",t.data.title]}),c.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Repo: ",t.data.repo," · ",c.jsx("span",{className:"uppercase text-[#d4a373]",children:t.data.state})]})]});case"issue":return c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"font-bold text-[13px] text-white",children:["Issue #",t.data.number,": ",t.data.title]}),c.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Repo: ",t.data.repo," · ",c.jsx("span",{className:"uppercase text-[#e07a5f]",children:t.data.state})]})]});case"music":return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("span",{className:"font-bold text-[13px] text-white",children:t.data.track_name||t.data.title})}),c.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Artist: ",t.data.artist]}),t.data.album&&c.jsxs("p",{className:"text-[10px] text-gray-400",children:["Album: ",t.data.album]})]});case"time_tracking":return c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"font-bold text-[13px] text-white",children:t.data.activity}),c.jsxs("p",{className:"text-[11px] text-[#81b29a]",children:["Category: ",t.data.category," · Duration: ",Math.floor(t.data.duration/60),"m"]}),t.data.productivity_score&&c.jsxs("p",{className:"text-[10px] text-[#d4a373]",children:["> Productivity Index: ",t.data.productivity_score,"%"]})]});default:return c.jsx("p",{className:"text-[12px] text-white",children:t.data.description||JSON.stringify(t.data)})}}function Ob({feed:t=[],selectedSource:e,onSelectSource:n,selectedType:i,onSelectType:r,searchQuery:s,onSearchChange:a,onExport:o,onExecuteCommand:l,onOpenIPodWithTrack:u}){const[h,p]=oe.useState(null),f=[{id:"all",label:"ALL SOURCES"},{id:"github",label:"GITHUB"},{id:"spotify",label:"SPOTIFY"},{id:"strava",label:"STRAVA"},{id:"oura",label:"OURA SLEEP"},{id:"rescuetime",label:"RESCUETIME"}],m=[{value:"",label:"ALL EVENT TYPES"},{value:"commit",label:"COMMITS"},{value:"pull_request",label:"PULL REQUESTS"},{value:"issue",label:"ISSUES"},{value:"music",label:"MUSIC STREAMS"},{value:"workout",label:"WORKOUTS"},{value:"sleep",label:"SLEEP CYCLES"},{value:"time_tracking",label:"PRODUCTIVITY"}];return c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"win-window win-bevel-outset p-[2px] w-full shadow-[4px_4px_0px_rgba(0,0,0,0.6)]",children:[c.jsxs("div",{className:"win-titlebar flex justify-between items-center px-2 py-1 bg-[#000080]",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px] text-white",children:"tune"}),c.jsx("span",{className:"font-code-terminal text-[13px] font-bold text-white tracking-wide",children:"STREAM.CONTROLS & SEARCH"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-gray-300 font-code-terminal",children:[c.jsxs("span",{children:[t.length," EVENTS LOADED"]}),c.jsxs("div",{className:"flex gap-1 ml-2",children:[c.jsx("button",{onClick:()=>{Re.playClick(),p(!0)},className:"win-bevel-button px-1.5 py-0.5 bg-gray-200 hover:bg-white text-black font-bold text-[9px]",title:"Expand all log cards",children:"+ EXPAND ALL"}),c.jsx("button",{onClick:()=>{Re.playClick(),p(!1)},className:"win-bevel-button px-1.5 py-0.5 bg-gray-200 hover:bg-white text-black font-bold text-[9px]",title:"Collapse all log cards",children:"- COLLAPSE ALL"})]})]})]}),c.jsxs("div",{className:"p-3 bg-[#c0c0c0] font-code-terminal text-code-terminal space-y-2.5",children:[c.jsxs("div",{className:"flex flex-wrap gap-2 items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-[240px]",children:[c.jsx("span",{className:"font-bold text-black text-[12px]",children:"> SEARCH:"}),c.jsx("input",{type:"text",value:s,onChange:x=>a(x.target.value),placeholder:"Search commits, tracks, workouts...",className:"win-bevel-inset bg-white text-black font-code-terminal text-[12px] px-2 py-1 flex-1 focus:outline-none focus:ring-1 focus:ring-black"})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("select",{value:i||"",onChange:x=>{Re.playClick(),r(x.target.value)},className:"win-bevel-inset bg-white text-black font-code-terminal text-[12px] px-2 py-1 focus:outline-none",children:m.map(x=>c.jsx("option",{value:x.value,children:x.label},x.value))}),c.jsx("button",{onClick:()=>{Re.playClick(),o("json")},className:"win-bevel-button bg-gray-300 text-black font-bold text-[11px] px-2.5 py-1 hover:bg-white cursor-pointer",title:"Export Feed as JSON",children:"JSON"}),c.jsx("button",{onClick:()=>{Re.playClick(),o("csv")},className:"win-bevel-button bg-gray-300 text-black font-bold text-[11px] px-2.5 py-1 hover:bg-white cursor-pointer",title:"Export Feed as CSV",children:"CSV"})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-1.5 items-center pt-2 border-t border-gray-400",children:[c.jsx("span",{className:"font-bold text-black text-[11px] mr-1",children:"> FILTER:"}),f.map(x=>{const E=e===null&&x.id==="all"||e===x.id;return c.jsx("button",{onClick:()=>{Re.playClick(),n(x.id==="all"?null:x.id)},className:`win-bevel-button text-[11px] font-bold px-2.5 py-0.5 cursor-pointer ${E?"bg-black text-secondary-container":"bg-gray-200 text-black hover:bg-white"}`,children:x.label},x.id)})]})]})]}),!t||t.length===0?c.jsxs("div",{className:"win-window win-bevel-outset p-[2px] mx-auto mt-8 max-w-lg",children:[c.jsx("div",{className:"win-titlebar flex justify-between items-center px-2 py-1 bg-error-container",children:c.jsx("span",{className:"font-code-terminal text-[14px] font-bold tracking-wide text-white",children:"NO MATCHING LIFE EVENTS"})}),c.jsxs("div",{className:"p-window-padding font-code-terminal text-code-terminal",children:[c.jsx("p",{className:"font-bold text-black",children:"> NO EVENTS FOUND FOR GIVEN FILTER PARAMETERS."}),c.jsx("p",{className:"text-gray-700 mt-1",children:"> TRY CLEARING SEARCH OR TOGGLING DEMO MODE."})]})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 relative",children:t.map((x,E)=>c.jsx(Db,{event:x,index:E,onExecuteCommand:l,onOpenIPodWithTrack:u,forceExpand:h},x.id))})]})}function Xi({id:t,title:e,children:n,isOpen:i=!0,isMinimized:r=!1,onClose:s,onMinimize:a,onFocus:o,zIndex:l=10,initialPosition:u={x:0,y:0},width:h="max-w-2xl",titleBg:p="bg-[#000080]",headerIcon:f="window",className:m=""}){const[x,E]=oe.useState(u),[g,d]=oe.useState(!1),[v,S]=oe.useState(!1),[y,M]=oe.useState(!1),w=oe.useRef({x:0,y:0}),A=oe.useRef({x:0,y:0});oe.useEffect(()=>{const P=()=>{M(window.innerWidth<768)};return P(),window.addEventListener("resize",P),()=>window.removeEventListener("resize",P)},[]);const _=(P,Y)=>{v||y||(d(!0),w.current={x:P,y:Y},A.current={...x},o&&o(t),Re.playClick())},R=P=>{P.button===0&&_(P.clientX,P.clientY)},N=P=>{if(y)return;const Y=P.touches[0];Y&&_(Y.clientX,Y.clientY)};if(oe.useEffect(()=>{const P=F=>{if(!g||y)return;const B=F.clientX-w.current.x,z=F.clientY-w.current.y;E({x:Math.max(-100,A.current.x+B),y:Math.max(-30,A.current.y+z)})},Y=F=>{if(!g||y)return;const B=F.touches[0];if(B){const z=B.clientX-w.current.x,D=B.clientY-w.current.y;E({x:Math.max(-100,A.current.x+z),y:Math.max(-30,A.current.y+D)})}},K=()=>{g&&d(!1)};return g&&(window.addEventListener("mousemove",P),window.addEventListener("mouseup",K),window.addEventListener("touchmove",Y),window.addEventListener("touchend",K)),()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",K),window.removeEventListener("touchmove",Y),window.removeEventListener("touchend",K)}},[g,y]),!i||r)return null;const I=y?{top:"72px",left:"8px",right:"8px",maxHeight:"calc(100vh - 120px)",zIndex:Math.max(50,l)}:v?{top:"80px",left:"16px",right:"16px",zIndex:100}:{transform:`translate3d(${x.x}px, ${x.y}px, 0)`,zIndex:l};return c.jsxs("div",{onClick:()=>{o&&o(t)},style:I,className:`win-window win-bevel-outset p-[2px] shadow-[8px_8px_0px_rgba(0,0,0,0.85)] transition-shadow duration-150 flex flex-col ${y||v?"fixed":"relative"} ${y?"w-auto max-w-full":h} ${m}`,children:[c.jsxs("div",{onMouseDown:R,onTouchStart:N,className:`win-titlebar flex justify-between items-center px-2 py-1 select-none ${y?"cursor-default":"cursor-move"} ${p}`,children:[c.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[f&&c.jsx("span",{className:"material-symbols-outlined text-[15px] text-white flex-shrink-0",children:f}),c.jsx("span",{className:"font-code-terminal text-[11px] sm:text-[13px] font-bold tracking-wide text-white truncate",children:e})]}),c.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",children:[!y&&a&&c.jsx("button",{onClick:P=>{P.stopPropagation(),Re.playClick(),a(t)},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[10px] hover:bg-white",title:"Minimize",children:"_"}),!y&&c.jsx("button",{onClick:P=>{P.stopPropagation(),Re.playClick(),S(!v)},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[10px] hover:bg-white",title:"Maximize",children:v?"❐":"□"}),s&&c.jsx("button",{onClick:P=>{P.stopPropagation(),Re.playClick(),s(t)},className:"win-bevel-button bg-gray-300 w-5 h-5 flex items-center justify-center text-black font-bold text-[12px] hover:bg-red-400 hover:text-white",title:"Close",children:"✕"})]})]}),c.jsx("div",{className:"p-window-padding bg-[#c0c0c0] font-code-terminal text-code-terminal text-black overflow-y-auto flex-1 max-h-[75vh] sm:max-h-none",children:n})]})}const lf=[{id:"FLASHING_LIGHTS",track_name:"Flashing Lights",artist:"Kanye West",album:"Graduation",youtubeId:"3JhLIL9InyY",coverArt:"https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg"},{id:"K",track_name:"K.",artist:"Cigarettes After Sex",album:"Cigarettes After Sex",youtubeId:"L4sbCxiqyXI",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/8c/Cigarettes_After_Sex_%28album%29.png"},{id:"FUTURE_CLUB",track_name:"Future Club",artist:"Perturbator",album:"Dangerous Days",youtubeId:"cBqGE5N78XA",coverArt:"https://upload.wikimedia.org/wikipedia/en/2/2f/Perturbator_Dangerous_Days.jpg"},{id:"PACIFIC_COAST_HIGHWAY",track_name:"Pacific Coast Highway",artist:"Kavinsky",album:"OutRun",youtubeId:"-FSweMmcbO0",coverArt:"https://upload.wikimedia.org/wikipedia/en/f/f6/Kavinsky_OutRun.jpg"},{id:"ODYSSEY",track_name:"Odyssey",artist:"HOME",album:"Odyssey",youtubeId:"1-xl8S_E9bY",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/87/Home_-_Odyssey_album_cover.png"},{id:"GET_LUCKY",track_name:"Get Lucky",artist:"Daft Punk ft. Pharrell Williams",album:"Random Access Memories",youtubeId:"h5EofwRzit0",coverArt:"https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"},{id:"BLINDING_LIGHTS",track_name:"Blinding Lights",artist:"The Weeknd",album:"After Hours",youtubeId:"4NRXx6U8ABQ",coverArt:"https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"},{id:"STARBOY",track_name:"Starboy",artist:"The Weeknd ft. Daft Punk",album:"Starboy",youtubeId:"34Na4j8HLjc",coverArt:"https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png"},{id:"APOCALYPSE",track_name:"Apocalypse",artist:"Cigarettes After Sex",album:"Cigarettes After Sex",youtubeId:"sElE_BfQ67s",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/8c/Cigarettes_After_Sex_%28album%29.png"},{id:"GHOST_TOWN",track_name:"Ghost Town",artist:"Kanye West",album:"ye",youtubeId:"k9bU9_1s3dI",coverArt:"https://upload.wikimedia.org/wikipedia/en/4/44/Kanye_West_-_Ye.png"},{id:"NIGHTCALL",track_name:"Nightcall",artist:"Kavinsky",album:"Drive (Original Soundtrack)",youtubeId:"MV_3Dpw-BRY",coverArt:"https://upload.wikimedia.org/wikipedia/en/2/2f/Kavinsky_Nightcall.jpg"},{id:"RESONANCE",track_name:"Resonance",artist:"HOME",album:"Odyssey",youtubeId:"8GW6sLrK40k",coverArt:"https://upload.wikimedia.org/wikipedia/en/8/87/Home_-_Odyssey_album_cover.png"},{id:"TECH_NOIR",track_name:"Tech Noir",artist:"GUNSHIP",album:"Gunship",youtubeId:"-EDt8f90hYI",coverArt:"https://upload.wikimedia.org/wikipedia/en/d/d7/Gunship_album_cover.jpg"},{id:"AS_IT_WAS",track_name:"As It Was",artist:"Harry Styles",album:"Harry's House",youtubeId:"H5v3kku4y6Q",coverArt:"https://upload.wikimedia.org/wikipedia/en/b/b1/Harry_Styles_-_As_It_Was.png"},{id:"HEAT_WAVES",track_name:"Heat Waves",artist:"Glass Animals",album:"Dreamland",youtubeId:"mRD0-GxqHVo",coverArt:"https://upload.wikimedia.org/wikipedia/en/1/14/Glass_Animals_-_Dreamland.png"},{id:"LOFI_BEATS",track_name:"Late Night Coding",artist:"Lofi Girl / ChilledCow",album:"Study Session Memories",youtubeId:"jfKfPfyJRdk",coverArt:"https://upload.wikimedia.org/wikipedia/en/1/13/Lofi_girl_logo.jpg"}];function Ub({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,sources:a=[],onSetFilter:o,onToggleDemo:l,isDemo:u,onExecuteSearch:h,onTriggerExport:p,onOpenContact:f,onOpenResume:m,onOpenWindow:x,onPlayTrack:E,onReboot:g}){const[d,v]=oe.useState([{text:"OBSOLESCENCE PROTOCOL [Version 4.19.95]",type:"system"},{text:"(C) 1995-2026 DIGITAL ARCHAEOLOGY CORP. ALL RIGHTS RESERVED.",type:"system"},{text:'Type "help" FOR COMMAND MANUAL, "neofetch" FOR SPECS, OR "play apocalypse" FOR AUDIO.',type:"system"}]),[S,y]=oe.useState(""),[M,w]=oe.useState([]),[A,_]=oe.useState(-1),R=oe.useRef(null),N=oe.useRef(null);oe.useEffect(()=>{var P;t&&!e&&((P=R.current)==null||P.focus())},[t,e]),oe.useEffect(()=>{var P;(P=N.current)==null||P.scrollIntoView({behavior:"smooth"})},[d]);const I=P=>{var Y,K;if(P.key==="Enter"){const F=S.trim();if(!F)return;Re.playExec();const B=[...d,{text:`C:\\> ${F}`,type:"input"}];w(ee=>[...ee,F]),_(-1);const z=F.split(" "),D=z[0].toLowerCase(),j=z.slice(1),Z=j.join(" ").toLowerCase().trim();switch(D){case"help":B.push({text:`=====================================================
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
  clear / cls         - Clear terminal display buffer`,type:"output"});break;case"neofetch":case"sysinfo":case"specs":B.push({text:`  .--------------------.   OS      : Obsolescence OS 4.19 (Win95 CRT Hybrid)
  | [x]   OBSOLESCENCE |   HOST    : Reverse Gateway (Node.js 20 / Express)
  | .----------------. |   KERNEL  : x86_64 Darwin / React 18 + Vite 5
  | |  >_            | |   UPTIME  : 99.98% (Fault-Isolated Parallel Engine)
  | |  TELEMETRY OK  | |   MEMORY  : 64.2 MB / 512 MB (TTL Cache Synced)
  | '----------------' |   GRAPHICS: Three.js WebGL CRT Shader @ 60 FPS
  '--------------------'   AUDIO   : Off-Screen SoundCloud Viewport Engine
                           SECURITY: Supabase PostgreSQL RLS Enabled`,type:"output"});break;case"play":if(!Z)B.push({text:`Usage: play <track_name>
Available tracks in DB:
${lf.map(ie=>`  • ${ie.track_name} (${ie.artist})`).join(`
`)}`,type:"output"});else{const ie=lf.find(ae=>ae.track_name.toLowerCase().includes(Z)||ae.artist.toLowerCase().includes(Z)||ae.id.toLowerCase().includes(Z));ie?(B.push({text:`> ENGAGING AUDIO ENGINE // STREAMING: "${ie.track_name}" by ${ie.artist}...`,type:"output"}),E&&E(ie)):B.push({text:`Track "${Z}" not found in TRACK_DB. Type "play" for tracklist.`,type:"error"})}break;case"ipod":case"music":case"player":B.push({text:"> LAUNCHING RETRO IPOD CLASSIC...",type:"output"}),x&&x("ipod");break;case"ping":B.push({text:`PING api.obsolescence.local (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=1.24 ms
64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.98 ms
64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=1.05 ms
--- api.obsolescence.local ping statistics ---
3 packets transmitted, 3 received, 0.0% packet loss, min/avg/max = 0.98/1.09/1.24 ms`,type:"output"});break;case"cat":case"type":const ee=(Y=j[0])==null?void 0:Y.toLowerCase();ee==="resume.txt"||ee==="resume"||ee==="cv"?B.push({text:`=====================================================
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

Type "resume" to open the interactive ATS visualizer.`,type:"output"}):ee==="config.sys"?B.push({text:`FILES=40
BUFFERS=20
DEVICE=C:\\DOS\\HIMEM.SYS
DOS=HIGH,UMB
DEVICEHIGH=C:\\GATEWAY\\TTL_CACHE.SYS /TTL=180
DEVICEHIGH=C:\\AUDIO\\SOUNDCLOUD_OFFSCREEN.SYS`,type:"output"}):ee==="secrets.env"?B.push({text:`[RESTRICTED ACCESS]
SUPABASE_SERVICE_ROLE_KEY=••••••••••••••••••••••••••••••••
FASTAPI_SECRET_KEY=••••••••••••••••••••••••••••••••
GITHUB_PERSONAL_ACCESS_TOKEN=••••••••••••••••••••••••••••••••
Access denied to unauthenticated telemetry clients.`,type:"output"}):B.push({text:`File not found: "${j.join(" ")}". Available files: resume.txt, config.sys, secrets.env`,type:"error"});break;case"ls":case"dir":B.push({text:`DIRECTORY OF C:\\
  <DIR>          PROJECTS
  <DIR>          MEMORY_CACHE
  <DIR>          AUDIO_DB
  -rw-r--r--     resume.txt       (3.4 KB)
  -rw-r--r--     config.sys       (128 B)
  -rw-------     secrets.env      (256 B)
  4 File(s), 3 Dir(s)  52,428,800 bytes free`,type:"output"});break;case"directives":case"todo":case"plans":case"checklist":B.push({text:`SYSTEM DIRECTIVES & PROTOCOL MILESTONES:
  [X] Build & Deploy Obsolescence Protocol Reverse Gateway (DONE)
  [X] Ship Production Supabase RLS & Matrimonial UI @ ICM (DONE)
  [X] Engineer Nimbus macOS Dynamic Island with Raw Kernel APIs (DONE)
  [X] Solve 196+ Algorithmic Benchmarks & Maintain 39d Streak (DONE)
  [ ] Graduate BCA @ PES University, Bengaluru (May 2026)
  [ ] Target 500+ LeetCode Solved & Knight Tier Benchmark
  [ ] Secure High-Impact Full-Stack / Distributed SWE Role
  [ ] Open-Source Retro Telemetry OS Component Framework

> LAUNCHING DIRECTIVES WINDOW...`,type:"output"}),x&&x("directives");break;case"memory":case"gifs":case"gallery":case"cache":case"art":B.push({text:`DIRECTORY C:\\MEMORY_CACHE\\SECTOR_07:
  [MEM_01] SYSTEM_BOOT_SEQUENCE.GIF     (1.2 MB · 0x8F9A · [CORE_OS])
  [MEM_02] NEURAL_NET_TRAINING.GIF      (890 KB · 0x3C4B · [AI_ML])
  [MEM_03] GHIBLI_TRAIN_COASTAL.GIF     (1.8 MB · 0x9E21 · [NOSTALGIA])
  [MEM_04] RETRO_CYBER_MATRIX.GIF       (1.4 MB · 0x55FA · [CORE_OS])
  [MEM_05] DOCKER_CONTAINER_CLUSTER.GIF (950 KB · 0x1A8E · [INFRA])
  [MEM_06] GHIBLI_STUDY_DESK.GIF        (2.1 MB · 0x4D0C · [NOSTALGIA])

> LAUNCHING MEMORY BANK VIEWFINDER...`,type:"output"}),x&&x("memory");break;case"resume":case"cv":B.push({text:"> LAUNCHING ATS RESUME VIEWER...",type:"output"}),m&&m();break;case"mail":case"email":case"contact":case"hire":case"transmit":case"relay":B.push({text:`=====================================================
  SYS.TRANSMITTER // PGP_SECURE_RELAY [PORT_25]
=====================================================
  [DESTINATION] Rohan Joshi (Full-Stack & AI Developer)
  [LOCATION]    Bengaluru, Karnataka · rohan.joshi.dev@gmail.com
  [ENCRYPTION]  PGP SHA-256 Relay Buffer
  [STATUS]      ARMED // READY TO DISPATCH

> LAUNCHING SECURE TRANSMISSION WINDOW...`,type:"output"}),x?x("transmission"):f&&f();break;case"exec":const re=(K=j[0])==null?void 0:K.toLowerCase();re==="mail"||re==="contact"?(f&&f(),B.push({text:"> DISPATCH TRANSMITTED TO CONTACT ROUTE.",type:"output"})):re==="resume"||re==="cv"?(m&&m(),B.push({text:"> ATS RESUME VIEWER LAUNCHED.",type:"output"})):B.push({text:`Unknown exec target: "${j.join(" ")}". Try "exec mail" or "exec resume".`,type:"error"});break;case"whoami":case"profile":B.push({text:`ROHAN JOSHI // FULL-STACK & AI DEVELOPER
--------------------------------------------------
Role: Software Developer Intern @ India Christian Matrimony (ICM)
Education: BCA @ PES University, Bengaluru (Aug 2023 – May 2026)
Location: Bengaluru, Karnataka • +91 6361195409
Email: rohan.joshi.dev@gmail.com
GitHub: https://github.com/rohanrjoshii
LinkedIn: https://linkedin.com/in/rohanrj1008`,type:"output"});break;case"projects":B.push({text:`PROJECT DIRECTORY C:\\PROJECTS:
  1. [Nimbus]      macOS Dynamic Island clone (Swift, SwiftUI, AppKit, Kernel APIs)
  2. [FilterIQ]    Smart NLP Data Filtering app (Python, FastAPI, Pandas, Docker)
  3. [Satya]       AI Deepfake Detection platform 90%+ acc (React, FastAPI, PyTorch)
  4. [BizzConnect] B2B Networking app with K-Means clustering (Flutter, Firebase)
  -rw-r--r--       resume.txt (Type "cat resume.txt" or "resume" to open)`,type:"output"});break;case"skills":B.push({text:`TECHNICAL SKILLS:
  • Frontend:    React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite
  • Backend:     FastAPI, Node.js, Firebase, REST APIs
  • Databases:   PostgreSQL (Supabase), MySQL, Firestore
  • AI / ML:     PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP
  • Languages:   Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS
  • Tools:       Docker, Git, GitHub Actions, CI/CD`,type:"output"});break;case"sudo":Re.playError(),B.push({text:`Permission denied: user 'recruiter' is not in the sudoers file.
This incident will be reported to Rohan Joshi.`,type:"error"});break;case"matrix":B.push({text:`01001111 01000010 01010011 01001111 01001100 01000101 01010011 01000011 01000101 01001110 01000011 01000101
TELEMETRY FLUX SYNCHRONIZED:
1001001 01001100 01001001 01000110 01000101 00100000 01000110 01000101 01000101 01000100
[STREAM STATUS: NOMINAL]`,type:"output"});break;case"status":const we=a.map(ie=>`  [${ie.name.toUpperCase()}] Enabled: ${ie.enabled?"YES":"NO"} | Healthy: ${ie.healthy?"OK":"OFFLINE"}`);B.push({text:`SYSTEM SOURCE DIAGNOSTICS:
${we.join(`
`)||"No sources registered."}
Gateway TTL Cache: ACTIVE
Synthetic Demo Fallback: ${u?"ENABLED":"DISABLED"}`,type:"output"});break;case"demo":j[0]==="off"?(l(!1),B.push({text:"> SYNTHETIC DEMO MODE DISABLED.",type:"output"})):(l(!0),B.push({text:"> SYNTHETIC DEMO MODE ENABLED WITH RICH SAMPLE STREAMS.",type:"output"}));break;case"filter":const Ve=j[0]?j[0].toLowerCase():"all";o(Ve==="all"?null:Ve),B.push({text:`> FEED SOURCE FILTER SET TO: ${Ve.toUpperCase()}`,type:"output"});break;case"search":const ke=j.join(" ");ke?(h(ke),B.push({text:`> SEARCH QUERY APPLIED: "${ke}"`,type:"output"})):(h(""),B.push({text:"> SEARCH QUERY CLEARED.",type:"output"}));break;case"stats":case"metrics":case"odometer":case"telemetry":B.push({text:`=====================================================
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
=====================================================`,type:"output"});break;case"export":const G=j[0]==="csv"?"csv":"json";p(G),B.push({text:`> INITIATING FEED EXPORT [FORMAT: ${G.toUpperCase()}]...`,type:"output"});break;case"boot":case"reboot":case"restart":B.push({text:`=====================================================
  INITIATING COLD SYSTEM REBOOT // OBSOLESCENCE KERNEL
=====================================================
Flushing TTL caches...
Resetting WebGL pipeline...
Executing hardware restart in 500ms...`,type:"output"}),g&&setTimeout(g,600);break;case"clear":case"cls":v([]),y("");return;case"date":case"time":B.push({text:`Current System Time: ${new Date().toString()}`,type:"output"});break;default:Re.playError(),B.push({text:`Bad command or file name: "${F}". Type "help" or "neofetch" for commands.`,type:"error"});break}v(B),y("")}else if(P.key==="ArrowUp"){if(M.length>0){const F=A+1<M.length?A+1:A;_(F),y(M[M.length-1-F]||"")}}else if(P.key==="ArrowDown")if(A>0){const F=A-1;_(F),y(M[M.length-1-F]||"")}else A===0&&(_(-1),y(""))};return c.jsx(Xi,{id:"terminal",title:"C:\\WINDOWS\\SYSTEM32\\CMD.EXE - [OBSOLESCENCE CLI]",isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,width:"max-w-3xl",titleBg:"bg-black",headerIcon:"terminal",initialPosition:{x:40,y:40},children:c.jsxs("div",{className:"bg-black p-4 font-code-terminal text-code-terminal text-[#00ff00] h-96 overflow-y-auto space-y-2 border-t-2 border-b-2 border-[#333]",onClick:()=>{var P;return(P=R.current)==null?void 0:P.focus()},children:[d.map((P,Y)=>c.jsxs("div",{className:"leading-tight break-words",children:[P.type==="system"&&c.jsx("p",{className:"text-[#888888]",children:P.text}),P.type==="input"&&c.jsx("p",{className:"text-white font-bold",children:P.text}),P.type==="output"&&c.jsx("pre",{className:"text-[#00ff00] font-code-terminal whitespace-pre-wrap",children:P.text}),P.type==="error"&&c.jsx("p",{className:"text-red-500 font-bold",children:P.text})]},Y)),c.jsxs("div",{className:"flex items-center gap-1 text-white",children:[c.jsx("span",{children:"C:\\>"}),c.jsx("input",{ref:R,type:"text",value:S,onChange:P=>y(P.target.value),onKeyDown:I,className:"flex-1 bg-transparent text-[#00ff00] font-code-terminal outline-none border-none p-0 focus:ring-0",autoFocus:!0})]}),c.jsx("div",{ref:N})]})})}function Dv(t,e){return function(){return t.apply(e,arguments)}}const{toString:Fb}=Object.prototype,{getPrototypeOf:ea}=Object,{iterator:_o,toStringTag:Lv}=Symbol,hc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),uo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),hc(n,e))return!0;n=ea(n)}return!1},kb=(t,e)=>t!=null&&uo(t,e)?t[e]:void 0,Jh=(t=>e=>{const n=Fb.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Wn=t=>(t=t.toLowerCase(),e=>Jh(e)===t),Vc=t=>e=>typeof e===t,{isArray:Jr}=Array,Qr=Vc("undefined");function la(t){return t!==null&&!Qr(t)&&t.constructor!==null&&!Qr(t.constructor)&&yn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ov=Wn("ArrayBuffer");function Bb(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ov(t.buffer),e}const zb=Vc("string"),yn=Vc("function"),Uv=Vc("number"),ca=t=>t!==null&&typeof t=="object",Hb=t=>t===!0||t===!1,Pl=t=>{if(!ca(t))return!1;const e=ea(t);return(e===null||e===Object.prototype||ea(e)===null)&&!uo(t,Lv)&&!uo(t,_o)},Gb=t=>{if(!ca(t)||la(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Vb=Wn("Date"),jb=Wn("File"),Wb=t=>!!(t&&typeof t.uri<"u"),Xb=t=>t&&typeof t.getParts<"u",Yb=Wn("Blob"),qb=Wn("FileList"),$b=Wn("Set"),Kb=t=>ca(t)&&yn(t.pipe);function Zb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Ym=Zb(),qm=typeof Ym.FormData<"u"?Ym.FormData:void 0,Jb=t=>{if(!t)return!1;if(qm&&t instanceof qm)return!0;const e=ea(t);if(!e||e===Object.prototype||!yn(t.append))return!1;const n=Jh(t);return n==="formdata"||n==="object"&&yn(t.toString)&&t.toString()==="[object FormData]"},Qb=Wn("URLSearchParams"),[e1,t1,n1,i1]=["ReadableStream","Request","Response","Headers"].map(Wn),r1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Jr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(la(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let o;for(i=0;i<a;i++)o=s[i],e.call(null,t[o],o,t)}}function Fv(t,e){if(la(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kv=t=>!Qr(t)&&t!==zr;function cf(...t){const{caseless:e,skipUndefined:n}=kv(this)&&this||{},i={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const o=e&&typeof a=="string"&&Fv(i,a)||a,l=hc(i,o)?i[o]:void 0;Pl(l)&&Pl(s)?i[o]=cf(l,s):Pl(s)?i[o]=cf({},s):Jr(s)?i[o]=s.slice():(!n||!Qr(s))&&(i[o]=s)};for(let s=0,a=t.length;s<a;s++){const o=t[s];if(!o||la(o)||(yo(o,r),typeof o!="object"||Jr(o)))continue;const l=Object.getOwnPropertySymbols(o);for(let u=0;u<l.length;u++){const h=l[u];g1.call(o,h)&&r(o[h],h)}}return i}const s1=(t,e,n,{allOwnKeys:i}={})=>(yo(e,(r,s)=>{n&&yn(r)?Object.defineProperty(t,s,{__proto__:null,value:Dv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),a1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),o1=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},l1=(t,e,n,i)=>{let r,s,a;const o={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!o[a]&&(e[a]=t[a],o[a]=!0);t=n!==!1&&ea(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},c1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},u1=t=>{if(!t)return null;if(Jr(t))return t;let e=t.length;if(!Uv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},d1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ea(Uint8Array)),f1=(t,e)=>{const i=(t&&t[_o]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},h1=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},p1=Wn("HTMLFormElement"),m1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:g1}=Object.prototype,x1=Wn("RegExp"),Bv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};yo(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},v1=t=>{Bv(t,(e,n)=>{if(yn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(yn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_1=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Jr(t)?i(t):i(String(t).split(e)),n},y1=()=>{},S1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function E1(t){return!!(t&&yn(t.append)&&t[Lv]==="FormData"&&t[_o])}const b1=t=>{const e=new WeakSet,n=i=>{if(ca(i)){if(e.has(i))return;if(la(i))return i;if(!("toJSON"in i)){e.add(i);let r;if($b(i)){r=[];for(const s of i){const a=n(s);!Qr(a)&&r.push(a)}}else r=Jr(i)?[]:{},yo(i,(s,a)=>{const o=n(s);!Qr(o)&&(r[a]=o)});return e.delete(i),r}}return i};return n(t)},M1=Wn("AsyncFunction"),w1=t=>t&&(ca(t)||yn(t))&&yn(t.then)&&yn(t.catch),zv=((t,e)=>t?setImmediate:e?((n,i)=>(zr.addEventListener("message",({source:r,data:s})=>{r===zr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),zr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",yn(zr.postMessage)),T1=typeof queueMicrotask<"u"?queueMicrotask.bind(zr):typeof process<"u"&&process.nextTick||zv,Hv=t=>t!=null&&yn(t[_o]),A1=t=>t!=null&&uo(t,_o)&&Hv(t),L={isArray:Jr,isArrayBuffer:Ov,isBuffer:la,isFormData:Jb,isArrayBufferView:Bb,isString:zb,isNumber:Uv,isBoolean:Hb,isObject:ca,isPlainObject:Pl,isEmptyObject:Gb,isReadableStream:e1,isRequest:t1,isResponse:n1,isHeaders:i1,isUndefined:Qr,isDate:Vb,isFile:jb,isReactNativeBlob:Wb,isReactNative:Xb,isBlob:Yb,isRegExp:x1,isFunction:yn,isStream:Kb,isURLSearchParams:Qb,isTypedArray:d1,isFileList:qb,forEach:yo,merge:cf,extend:s1,trim:r1,stripBOM:a1,inherits:o1,toFlatObject:l1,kindOf:Jh,kindOfTest:Wn,endsWith:c1,toArray:u1,forEachEntry:f1,matchAll:h1,isHTMLForm:p1,hasOwnProperty:hc,hasOwnProp:hc,hasOwnInPrototypeChain:uo,getSafeProp:kb,reduceDescriptors:Bv,freezeMethods:v1,toObjectSet:_1,toCamelCase:m1,noop:y1,toFiniteNumber:S1,findKey:Fv,global:zr,isContextDefined:kv,isSpecCompliantForm:E1,toJSONObject:b1,isAsyncFn:M1,isThenable:w1,setImmediate:zv,asap:T1,isIterable:Hv,isSafeIterable:A1},R1=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),C1=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const o=L.hasOwnProp(e,n);!n||o&&L.hasOwnProp(R1,n)||(n==="set-cookie"?o?e[n].push(i):e[n]=[i]:e[n]=o?e[n]+", "+i:i)}),e};function N1(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const P1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),I1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Qh(t,e){return L.isArray(t)?t.map(n=>Qh(n,e)):N1(String(t).replace(e,""))}const D1=t=>Qh(t,P1),L1=t=>Qh(t,I1);function Gv(t){const e=Object.create(null);return L.forEach(t.toJSON(),(n,i)=>{e[i]=L1(n)}),e}const $m=Symbol("internals");function Ea(t){return t&&String(t).trim().toLowerCase()}function Il(t){return t===!1||t==null?t:L.isArray(t)?t.map(Il):D1(String(t))}function O1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const U1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Tu(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function F1(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function k1(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function a(o){const l=Tu(n.slice(i,o)),u=l.indexOf("=");if(u<1)return;const h=Tu(l.slice(0,u));if(!U1.test(h))return;const p=h.toLowerCase();if(p==="__proto__"||p==="constructor"||p==="prototype")return;const f=Tu(l.slice(u+1));e[p]=F1(f)}for(let o=0;o<n.length;o++){const l=n.charCodeAt(o);r?s?s=!1:l===92?s=!0:l===34&&(r=!1):l===34?r=!0:(l===44||l===59)&&(a(o),i=o+1)}return a(n.length),e}const B1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Au(t,e,n,i,r){if(L.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!L.isString(e)){if(L.isString(i))return e.indexOf(i)!==-1;if(L.isRegExp(i))return i.test(e)}}function z1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function H1(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let rn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(o,l,u){const h=Ea(l);if(!h)return;const p=L.findKey(r,h);(!p||r[p]===void 0||u===!0||u===void 0&&r[p]!==!1)&&(r[p||l]=Il(o))}const a=(o,l)=>L.forEach(o,(u,h)=>s(u,h,l));if(L.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(L.isString(e)&&(e=e.trim())&&!B1(e))a(C1(e),n);else if(L.isObject(e)&&L.isSafeIterable(e)){let o=Object.create(null),l,u;for(const h of e){if(!L.isArray(h))throw new TypeError("Object iterator must return a key-value pair");u=h[0],L.hasOwnProp(o,u)?(l=o[u],o[u]=L.isArray(l)?[...l,h[1]]:[l,h[1]]):o[u]=h[1]}a(o,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Ea(e),e){const i=L.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return O1(r);if(L.isFunction(n))return n.call(this,r,i);if(L.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ea(e),e){const i=L.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Au(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=Ea(a),a){const o=L.findKey(i,a);o&&(!n||Au(i,i[o],o,n))&&(delete i[o],r=!0)}}return L.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Au(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return L.forEach(this,(r,s)=>{const a=L.findKey(i,s);if(a){n[a]=Il(r),delete n[s];return}const o=e?z1(s):String(s).trim();o!==s&&delete n[s],n[o]=Il(r),i[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return L.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&L.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return L.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return k1(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[$m]=this[$m]={accessors:{}}).accessors,r=this.prototype;function s(a){const o=Ea(a);i[o]||(H1(r,a),i[o]=!0)}return L.isArray(e)?e.forEach(s):s(e),this}};rn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);L.reduceDescriptors(rn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});L.freezeMethods(rn);const pc="[REDACTED ****]";function G1(t){if(L.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(L.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function V1(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||L.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof rn&&(s=s.toJSON()),i.push(s);let a;if(L.isArray(s))a=[],s.forEach((o,l)=>{const u=r(o);L.isUndefined(u)||(a[l]=u)});else{if(!L.isPlainObject(s)&&G1(s))return i.pop(),s;a=Object.create(null);for(const[o,l]of Object.entries(s)){const u=n.has(o.toLowerCase())?pc:r(l);L.isUndefined(u)||(a[o]=u)}}return i.pop(),a};return r(t)}function Km(t){try{return String(t)}catch{return""}}function j1(t){return t.errors.map(n=>{try{return n&&n.message?Km(n.message):Km(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}let ye=class Vv extends Error{static from(e,n,i,r,s,a){let o=e.message;!o&&L.isArray(e.errors)&&e.errors.length&&(o=j1(e));const l=new Vv(o,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&L.hasOwnProp(e,"redact")?e.redact:void 0,i=L.isArray(n)&&n.length>0?V1(e,n):L.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};ye.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ye.ERR_BAD_OPTION="ERR_BAD_OPTION";ye.ECONNABORTED="ECONNABORTED";ye.ETIMEDOUT="ETIMEDOUT";ye.ECONNREFUSED="ECONNREFUSED";ye.ERR_NETWORK="ERR_NETWORK";ye.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ye.ERR_DEPRECATED="ERR_DEPRECATED";ye.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ye.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ye.ERR_CANCELED="ERR_CANCELED";ye.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ye.ERR_INVALID_URL="ERR_INVALID_URL";ye.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const W1=null,jv=100;function uf(t){return L.isPlainObject(t)||L.isArray(t)}function Wv(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Ru(t,e,n){return t?t.concat(e).map(function(r,s){return r=Wv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function X1(t){return L.isArray(t)&&!t.some(uf)}const Y1=L.toFlatObject(L,{},null,function(e){return/^is[A-Z]/.test(e)});function jc(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,S){return!L.isUndefined(S[v])});const i=n.metaTokens,r=n.visitor||x,s=n.dots,a=n.indexes,o=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?jv:n.maxDepth,u=o&&L.isSpecCompliantForm(e),h=[];if(!L.isFunction(r))throw new TypeError("visitor must be a function");function p(d){if(d===null)return"";if(L.isDate(d))return d.toISOString();if(L.isBoolean(d))return d.toString();if(!u&&L.isBlob(d))throw new ye("Blob is not supported. Use a Buffer instead.");if(L.isArrayBuffer(d)||L.isTypedArray(d)){if(u&&typeof o=="function")return new o([d]);throw new ye("Blob is not supported. Use a Buffer instead.",ye.ERR_NOT_SUPPORT)}return d}function f(d){if(d>l)throw new ye("Object is too deeply nested ("+d+" levels). Max depth: "+l,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(d,v){if(l===1/0)return JSON.stringify(d);const S=[];return JSON.stringify(d,function(M,w){if(!L.isObject(w))return w;for(;S.length&&S[S.length-1]!==this;)S.pop();return S.push(w),f(v+S.length-1),w})}function x(d,v,S){let y=d;if(L.isReactNative(e)&&L.isReactNativeBlob(d))return e.append(Ru(S,v,s),p(d)),!1;if(d&&!S&&typeof d=="object"){if(L.endsWith(v,"{}"))v=i?v:v.slice(0,-2),d=m(d,1);else if(L.isArray(d)&&X1(d)||(L.isFileList(d)||L.endsWith(v,"[]"))&&(y=L.toArray(d)))return v=Wv(v),y.forEach(function(w,A){!(L.isUndefined(w)||w===null)&&e.append(a===!0?Ru([v],A,s):a===null?v:v+"[]",p(w))}),!1}return uf(d)?!0:(e.append(Ru(S,v,s),p(d)),!1)}const E=Object.assign(Y1,{defaultVisitor:x,convertValue:p,isVisitable:uf});function g(d,v,S=0){if(!L.isUndefined(d)){if(f(S),h.indexOf(d)!==-1)throw new Error("Circular reference detected in "+v.join("."));h.push(d),L.forEach(d,function(M,w){(!(L.isUndefined(M)||M===null)&&r.call(e,M,L.isString(w)?w.trim():w,v,E))===!0&&g(M,v?v.concat(w):[w],S+1)}),h.pop()}}if(!L.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Zm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function ep(t,e){this._pairs=[],t&&jc(t,this,e)}const Xv=ep.prototype;Xv.append=function(e,n){this._pairs.push([e,n])};Xv.toString=function(e){const n=e?i=>e.call(this,i,Zm):Zm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function q1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Yv(t,e,n){if(!e)return t;t=t||"";const i=L.isFunction(n)?{serialize:n}:n,r=L.getSafeProp(i,"encode")||q1,s=L.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=L.isURLSearchParams(e)?e.toString():new ep(e,i).toString(r),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class Jm{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){L.forEach(this.handlers,function(i){i!==null&&e(i)})}}const tp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},$1=typeof URLSearchParams<"u"?URLSearchParams:ep,K1=typeof FormData<"u"?FormData:null,Z1=typeof Blob<"u"?Blob:null,J1={isBrowser:!0,classes:{URLSearchParams:$1,FormData:K1,Blob:Z1},protocols:["http","https","file","blob","url","data"]},np=typeof window<"u"&&typeof document<"u",df=typeof navigator=="object"&&navigator||void 0,Q1=np&&(!df||["ReactNative","NativeScript","NS"].indexOf(df.product)<0),eM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tM=np&&window.location.href||"http://localhost",nM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:np,hasStandardBrowserEnv:Q1,hasStandardBrowserWebWorkerEnv:eM,navigator:df,origin:tM},Symbol.toStringTag,{value:"Module"})),Wt={...nM,...J1};function iM(t,e){return jc(t,new Wt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Wt.isNode&&L.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Qm=jv;function qv(t){if(t>Qm)throw new ye("FormData field is too deeply nested ("+t+" levels). Max depth: "+Qm,ye.ERR_FORM_DATA_DEPTH_EXCEEDED)}function rM(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)qv(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function sM(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function $v(t){function e(n,i,r,s){qv(s);let a=n[s++];if(a==="__proto__")return!0;const o=Number.isFinite(+a),l=s>=n.length;return a=!a&&L.isArray(r)?r.length:a,l?(L.hasOwnProp(r,a)?r[a]=L.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!o):((!L.hasOwnProp(r,a)||!L.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&L.isArray(r[a])&&(r[a]=sM(r[a])),!o)}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,(i,r)=>{e(rM(i),r,n,0)}),n}return null}const ds=(t,e)=>t!=null&&L.hasOwnProp(t,e)?t[e]:void 0;function aM(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const So={transitional:tp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=L.isObject(e);if(s&&L.isHTMLForm(e)&&(e=new FormData(e)),L.isFormData(e))return r?JSON.stringify($v(e)):e;if(L.isArrayBuffer(e)||L.isBuffer(e)||L.isStream(e)||L.isFile(e)||L.isBlob(e)||L.isReadableStream(e))return e;if(L.isArrayBufferView(e))return e.buffer;if(L.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(s){const l=ds(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return iM(e,l).toString();if((o=L.isFileList(e))||i.indexOf("multipart/form-data")>-1){const u=ds(this,"env"),h=u&&u.FormData;return jc(o?{"files[]":e}:e,h&&new h,l)}}return s||r?(n.setContentType("application/json",!1),aM(e)):e}],transformResponse:[function(e){const n=ds(this,"transitional")||So.transitional,i=n&&n.forcedJSONParsing,r=ds(this,"responseType"),s=r==="json";if(L.isResponse(e)||L.isReadableStream(e))return e;if(e&&L.isString(e)&&(i&&!r||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,ds(this,"parseReviver"))}catch(l){if(o)throw l.name==="SyntaxError"?ye.from(l,ye.ERR_BAD_RESPONSE,this,null,ds(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wt.classes.FormData,Blob:Wt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};L.forEach(["delete","get","head","post","put","patch","query"],t=>{So.headers[t]={}});function Cu(t,e){const n=this||So,i=e||n,r=rn.from(i.headers);let s=i.data;return L.forEach(t,function(o){s=o.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Kv(t){return!!(t&&t.__CANCEL__)}let Eo=class extends ye{constructor(e,n,i){super(e??"canceled",ye.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Zv(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new ye("Request failed with status code "+n.status,n.status>=400&&n.status<500?ye.ERR_BAD_REQUEST:ye.ERR_BAD_RESPONSE,n.config,n.request,n))}function oM(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function lM(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),h=i[s];a||(a=u),n[r]=l,i[r]=u;let p=s,f=0;for(;p!==r;)f+=n[p++],p=p%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-a<e)return;const m=h&&u-h;return m?Math.round(f*1e3/m):void 0}}function cM(t,e){let n=0,i=1e3/e,r,s;const a=(u,h=Date.now())=>{n=h,r=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const h=Date.now(),p=h-n;p>=i?a(u,h):(r=u,s||(s=setTimeout(()=>{s=null,a(r)},i-p)))},()=>r&&a(r)]}const mc=(t,e,n=3)=>{let i=0;const r=lM(50,250);return cM(s=>{if(!s||typeof s.loaded!="number")return;const a=s.loaded,o=s.lengthComputable?s.total:void 0,l=Math.max(0,o!=null?Math.min(a,o):a),u=Math.max(0,l-i),h=r(u);i=Math.max(i,l);const p={loaded:l,total:o,progress:o?l/o:void 0,bytes:u,rate:h||void 0,estimated:h&&o?(o-l)/h:void 0,event:s,lengthComputable:o!=null,[e?"download":"upload"]:!0};t(p)},n)},eg=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},tg=(t,e=L.asap)=>(...n)=>e(()=>t(...n)),uM=Wt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Wt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Wt.origin),Wt.navigator&&/(msie|trident)/i.test(Wt.navigator.userAgent)):()=>!0,dM=Wt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const o=[`${t}=${encodeURIComponent(e)}`];L.isNumber(n)&&o.push(`expires=${new Date(n).toUTCString()}`),L.isString(i)&&o.push(`path=${i}`),L.isString(r)&&o.push(`domain=${r}`),s===!0&&o.push("secure"),L.isString(a)&&o.push(`SameSite=${a}`),document.cookie=o.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fM(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function hM(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const pM=/^https?:(?!\/\/)/i,mM=/[\t\n\r]/g;function gM(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function xM(t){return gM(t).replace(mM,"")}function vM(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${pc}`)}function _M(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${pc}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${pc}`);return n===-1?r:`${r}#${vM(e.slice(n+1))}`}function ng(t,e){if(typeof t=="string"){const n=xM(t);if(pM.test(n))throw new ye(`Invalid URL ${JSON.stringify(_M(n))}: missing "//" after protocol`,ye.ERR_INVALID_URL,e)}}function Jv(t,e,n,i){ng(e,i);let r=!fM(e);return t&&(r||n===!1)?(ng(t,i),hM(t,e)):e}const ig=t=>t instanceof rn?{...t}:t,yM=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>Object.getOwnPropertyDescriptor(t,e).enumerable)):Object.keys(t);function es(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(h,p,f,m){return L.isPlainObject(h)&&L.isPlainObject(p)?L.merge.call({caseless:m},h,p):L.isPlainObject(p)?L.merge({},p):L.isArray(p)?p.slice():p}function r(h,p,f,m){if(L.isUndefined(p)){if(!L.isUndefined(h))return i(void 0,h,f,m)}else return i(h,p,f,m)}function s(h,p){if(!L.isUndefined(p))return i(void 0,p)}function a(h,p){if(L.isUndefined(p)){if(!L.isUndefined(h))return i(void 0,h)}else return i(void 0,p)}function o(h){const p=L.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!L.isUndefined(p))if(L.isPlainObject(p)){if(L.hasOwnProp(p,h))return p[h]}else return;const f=L.hasOwnProp(t,"transitional")?t.transitional:void 0;if(L.isPlainObject(f)&&L.hasOwnProp(f,h))return f[h]}function l(h,p,f){if(L.hasOwnProp(e,f))return i(h,p);if(L.hasOwnProp(t,f))return i(void 0,h)}const u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:l,headers:(h,p,f)=>r(ig(h),ig(p),f,!0)};return L.forEach(yM({...t,...e}),function(p){if(p==="__proto__"||p==="constructor"||p==="prototype")return;const f=L.hasOwnProp(u,p)?u[p]:r,m=L.hasOwnProp(t,p)?t[p]:void 0,x=L.hasOwnProp(e,p)?e[p]:void 0,E=f(m,x,p);L.isUndefined(E)&&f!==l||(n[p]=E)}),L.hasOwnProp(e,"validateStatus")&&L.isUndefined(e.validateStatus)&&o("validateStatusUndefinedResolves")===!1&&(L.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const SM=["content-type","content-length"];function EM(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{SM.includes(i.toLowerCase())&&t.set(i,r)})}const bM=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function Qv(t){const e=es({},t),n=f=>L.hasOwnProp(e,f)?e[f]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),a=n("xsrfCookieName");let o=n("headers");const l=n("auth"),u=n("baseURL"),h=n("allowAbsoluteUrls"),p=n("url");if(e.headers=o=rn.from(o),e.url=Yv(Jv(u,p,h,e),n("params"),n("paramsSerializer")),l){const f=L.getSafeProp(l,"username")||"",m=L.getSafeProp(l,"password")||"";try{o.set("Authorization","Basic "+btoa(f+":"+(m?bM(m):"")))}catch(x){throw ye.from(x,ye.ERR_BAD_OPTION_VALUE,t)}}if(L.isFormData(i)&&(Wt.hasStandardBrowserEnv||Wt.hasStandardBrowserWebWorkerEnv||L.isReactNative(i)?o.setContentType(void 0):L.isFunction(i.getHeaders)&&EM(o,i.getHeaders(),n("formDataHeaderPolicy"))),Wt.hasStandardBrowserEnv&&(L.isFunction(r)&&(r=r(e)),r===!0||r==null&&uM(e.url))){const m=s&&a&&dM.read(a);m&&o.set(s,m)}return e}const MM=typeof XMLHttpRequest<"u",wM=MM&&function(t){return new Promise(function(n,i){const r=Qv(t);let s=r.data;const a=rn.from(r.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:u}=r,h,p,f,m,x;function E(){m&&m(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(h),r.signal&&r.signal.removeEventListener("abort",h)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function d(){if(!g)return;const S=rn.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),M={data:!o||o==="text"||o==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:S,config:t,request:g};Zv(function(A){n(A),E()},function(A){i(A),E()},M),g=null}"onloadend"in g?g.onloadend=d:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith("file:"))||setTimeout(d)},g.onabort=function(){g&&(i(new ye("Request aborted",ye.ECONNABORTED,t,g)),E(),g=null)},g.onerror=function(y){const M=y&&y.message?y.message:"Network Error",w=new ye(M,ye.ERR_NETWORK,t,g);w.event=y||null,i(w),E(),g=null},g.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const M=r.transitional||tp;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new ye(y,M.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,t,g)),E(),g=null},s===void 0&&a.setContentType(null),"setRequestHeader"in g&&L.forEach(Gv(a),function(y,M){g.setRequestHeader(M,y)}),L.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),o&&o!=="json"&&(g.responseType=r.responseType),u&&([f,x]=mc(u,!0),g.addEventListener("progress",f)),l&&g.upload&&([p,m]=mc(l),g.upload.addEventListener("progress",p),g.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(h=S=>{g&&(i(!S||S.type?new Eo(null,t,g):S),g.abort(),E(),g=null)},r.cancelToken&&r.cancelToken.subscribe(h),r.signal&&(r.signal.aborted?h():r.signal.addEventListener("abort",h)));const v=oM(r.url);if(v&&!Wt.protocols.includes(v)){i(new ye("Unsupported protocol "+v+":",ye.ERR_BAD_REQUEST,t)),E();return}g.send(s||null)})},TM=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(l){if(!i){i=!0,a();const u=l instanceof Error?l:this.reason;n.abort(u instanceof ye?u:new Eo(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{s=null,r(new ye(`timeout of ${e}ms exceeded`,ye.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(r):l.removeEventListener("abort",r)}),t=null)};t.forEach(l=>{if(!i){if(l.aborted){r.call(l);return}l.addEventListener("abort",r,{once:!0})}});const{signal:o}=n;return o.unsubscribe=()=>L.asap(a),o},AM=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},RM=async function*(t,e){for await(const n of CM(t))yield*AM(n,e)},CM=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},rg=(t,e,n,i)=>{const r=RM(t,e);let s=0,a,o=l=>{a||(a=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:u,value:h}=await r.next();if(u){o(),l.close();return}let p=h.byteLength;if(n){let f=s+=p;n(f)}l.enqueue(new Uint8Array(h))}catch(u){throw o(u),u}},cancel(l){return o(l),r.return()}},{highWaterMark:2})},sg=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,e_=(t,e,n)=>e+2<n&&sg(t.charCodeAt(e+1))&&sg(t.charCodeAt(e+2)),ag=t=>t<=57?t-48:(t&223)-55,NM=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,PM=t=>t===9||t===10||t===12||t===13||t===32,IM=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},DM=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},LM=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let a=t.charCodeAt(s);if(a===37&&e_(t,s,e)&&(a=ag(t.charCodeAt(s+1))*16+ag(t.charCodeAt(s+2)),s+=2),!PM(a)){if(a===61){i++;continue}if(!NM(a)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?DM(t):IM(n)},OM=(t,e)=>{if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const n=t.indexOf(",");if(n<0)return 0;const i=t.slice(5,n),r=t.slice(n+1);if(/;base64/i.test(i))return e(r);let a=0;for(let o=0,l=r.length;o<l;o++){const u=r.charCodeAt(o);if(u===37&&e_(r,o,l))a+=1,o+=2;else if(u<128)a+=1;else if(u<2048)a+=2;else if(u>=55296&&u<=56319&&o+1<l){const h=r.charCodeAt(o+1);h>=56320&&h<=57343?(a+=4,o++):a+=3}else a+=3}return a};function UM(t){const e=typeof t=="string"?t.indexOf("#"):-1;return OM(e===-1?t:t.slice(0,e),LM)}const ip="1.19.0",og=64*1024,{isFunction:Yo}=L,FM=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),lg=t=>{if(!L.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},cg=(t,...e)=>{try{return!!t(...e)}catch{return!1}},kM=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},BM=t=>{const e=L.global!==void 0&&L.global!==null?L.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=L.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:a}=t,o=r?Yo(r):typeof fetch=="function",l=Yo(s),u=Yo(a);if(!o)return!1;const h=o&&Yo(n),p=o&&(typeof i=="function"?(d=>v=>d.encode(v))(new i):async d=>new Uint8Array(await new s(d).arrayBuffer())),f=l&&h&&cg(()=>{let d=!1;const v=new s(Wt.origin,{body:new n,method:"POST",get duplex(){return d=!0,"half"}}),S=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),d&&!S}),m=u&&h&&cg(()=>L.isReadableStream(new a("").body)),x={stream:m&&(d=>d.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(d=>{!x[d]&&(x[d]=(v,S)=>{let y=v&&v[d];if(y)return y.call(v);throw new ye(`Response type '${d}' is not supported`,ye.ERR_NOT_SUPPORT,S)})});const E=async d=>{if(d==null)return 0;if(L.isBlob(d))return d.size;if(L.isSpecCompliantForm(d))return(await new s(Wt.origin,{method:"POST",body:d}).arrayBuffer()).byteLength;if(L.isArrayBufferView(d)||L.isArrayBuffer(d))return d.byteLength;if(L.isURLSearchParams(d)&&(d=d+""),L.isString(d))return(await p(d)).byteLength},g=async(d,v)=>{const S=L.toFiniteNumber(d.getContentLength());return S??E(v)};return async d=>{let{url:v,method:S,data:y,signal:M,cancelToken:w,timeout:A,onDownloadProgress:_,onUploadProgress:R,responseType:N,headers:I,withCredentials:P="same-origin",fetchOptions:Y,maxContentLength:K,maxBodyLength:F}=Qv(d);const B=L.isNumber(K)&&K>-1,z=L.isNumber(F)&&F>-1,D=G=>L.hasOwnProp(d,G)?d[G]:void 0;let j=r||fetch;N=N?(N+"").toLowerCase():"text";let Z=TM([M,w&&w.toAbortSignal()],A),ee=null;const re=Z&&Z.unsubscribe&&(()=>{Z.unsubscribe()});let we,Ve=null;const ke=()=>new ye("Request body larger than maxBodyLength limit",ye.ERR_BAD_REQUEST,d,ee);try{let G;const ie=D("auth");if(ie){const ue=L.getSafeProp(ie,"username")||"",qe=L.getSafeProp(ie,"password")||"";G={username:ue,password:qe}}if(kM(v)){const ue=new URL(v,Wt.origin);if(!G&&(ue.username||ue.password)){const qe=lg(ue.username),ct=lg(ue.password);G={username:qe,password:ct}}(ue.username||ue.password)&&(ue.username="",ue.password="",v=ue.href)}if(G&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(FM((G.username||"")+":"+(G.password||""))))),B&&typeof v=="string"&&v.startsWith("data:")&&UM(v)>K)throw new ye("maxContentLength size of "+K+" exceeded",ye.ERR_BAD_RESPONSE,d,ee);if(z&&S!=="get"&&S!=="head"){const ue=await E(y);if(typeof ue=="number"&&isFinite(ue)&&(we=ue,ue>F))throw ke()}const ae=z&&(L.isReadableStream(y)||L.isStream(y)),Fe=(ue,qe,ct)=>rg(ue,og,ht=>{if(z&&ht>F)throw Ve=ke();qe&&qe(ht)},ct);if(f&&S!=="get"&&S!=="head"&&(R||ae)){if(we=we??await g(I,y),we!==0||ae){let ue=new s(v,{method:"POST",body:y,duplex:"half"}),qe;if(L.isFormData(y)&&(qe=ue.headers.get("content-type"))&&I.setContentType(qe),ue.body){const[ct,ht]=R&&eg(we,mc(tg(R)))||[];y=Fe(ue.body,ct,ht)}}}else if(ae&&!l&&h&&S!=="get"&&S!=="head")y=Fe(y);else if(ae&&l&&!f&&S!=="get"&&S!=="head")throw new ye("Stream request bodies are not supported by the current fetch implementation",ye.ERR_NOT_SUPPORT,d,ee);L.isString(P)||(P=P?"include":"omit");const He=l&&"credentials"in s.prototype;if(L.isFormData(y)){const ue=I.getContentType();ue&&/^multipart\/form-data/i.test(ue)&&!/boundary=/i.test(ue)&&I.delete("content-type")}I.set("User-Agent","axios/"+ip,!1);const Oe={...Y,signal:Z,method:S.toUpperCase(),headers:Gv(I.normalize()),body:y,duplex:"half",credentials:He?P:void 0};ee=l&&new s(v,Oe);let je=await(l?j(ee,Y):j(v,Oe));const Ye=rn.from(je.headers);if(B){const ue=L.toFiniteNumber(Ye.getContentLength());if(ue!=null&&ue>K)throw new ye("maxContentLength size of "+K+" exceeded",ye.ERR_BAD_RESPONSE,d,ee)}const fe=m&&(N==="stream"||N==="response");if(m&&je.body&&(_||B||fe&&re)){const ue={};["status","statusText","headers"].forEach(pt=>{ue[pt]=je[pt]});const qe=L.toFiniteNumber(Ye.getContentLength()),[ct,ht]=_&&eg(qe,mc(tg(_),!0))||[];let Lt=0;const yt=pt=>{if(B&&(Lt=pt,Lt>K))throw new ye("maxContentLength size of "+K+" exceeded",ye.ERR_BAD_RESPONSE,d,ee);ct&&ct(pt)};je=new a(rg(je.body,og,yt,()=>{ht&&ht(),re&&re()}),ue)}N=N||"text";let le=await x[L.findKey(x,N)||"text"](je,d);if(B&&!m&&!fe){let ue;if(le!=null&&(typeof le.byteLength=="number"?ue=le.byteLength:typeof le.size=="number"?ue=le.size:typeof le=="string"&&(ue=typeof i=="function"?new i().encode(le).byteLength:le.length)),typeof ue=="number"&&ue>K)throw new ye("maxContentLength size of "+K+" exceeded",ye.ERR_BAD_RESPONSE,d,ee)}return!fe&&re&&re(),await new Promise((ue,qe)=>{Zv(ue,qe,{data:le,headers:rn.from(je.headers),status:je.status,statusText:je.statusText,config:d,request:ee})})}catch(G){if(re&&re(),Z&&Z.aborted&&Z.reason instanceof ye){const ie=Z.reason;throw ie.config=d,ee&&(ie.request=ee),G!==ie&&Object.defineProperty(ie,"cause",{__proto__:null,value:G,writable:!0,enumerable:!1,configurable:!0}),ie}if(Ve)throw ee&&!Ve.request&&(Ve.request=ee),Ve;if(G instanceof ye)throw ee&&!G.request&&(G.request=ee),G;if(G&&G.name==="TypeError"&&/Load failed|fetch/i.test(G.message)){const ie=new ye("Network Error",ye.ERR_NETWORK,d,ee,G&&G.response);throw Object.defineProperty(ie,"cause",{__proto__:null,value:G.cause||G,writable:!0,enumerable:!1,configurable:!0}),ie}throw ye.from(G,G&&G.code,d,ee,G&&G.response)}}},zM=new Map,t_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let a=s.length,o=a,l,u,h=zM;for(;o--;)l=s[o],u=h.get(l),u===void 0&&h.set(l,u=o?new Map:BM(e)),h=u;return u};t_();const rp={http:W1,xhr:wM,fetch:{get:t_}};L.forEach(rp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const ug=t=>`- ${t}`,HM=t=>L.isFunction(t)||t===null||t===!1;function GM(t,e){t=L.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let o;if(r=i,!HM(i)&&(r=rp[(o=String(i)).toLowerCase()],r===void 0))throw new ye(`Unknown adapter '${o}'`);if(r&&(L.isFunction(r)||(r=r.get(e))))break;s[o||"#"+a]=r}if(!r){const a=Object.entries(s).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=n?a.length>1?`since :
`+a.map(ug).join(`
`):" "+ug(a[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+o,ye.ERR_NOT_SUPPORT)}return r}const n_={getAdapter:GM,adapters:rp};function Nu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Eo(null,t)}function Pu(t){return Nu(t),t.headers=rn.from(t.headers),t.data=Cu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),n_.getAdapter(t.adapter||So.adapter,t)(t).then(function(i){Nu(t),t.response=i;try{i.data=Cu.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=rn.from(i.headers),i},function(i){if(!Kv(i)&&(Nu(t),i&&i.response)){t.response=i.response;try{i.response.data=Cu.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=rn.from(i.response.headers)}return Promise.reject(i)})}const Wc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Wc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const dg={};Wc.transitional=function(e,n,i){function r(s,a){return"[Axios v"+ip+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,o)=>{if(e===!1)throw new ye(r(a," has been removed"+(n?" in "+n:"")),ye.ERR_DEPRECATED);return n&&!dg[a]&&(dg[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,o):!0}};Wc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function VM(t,e,n){if(typeof t!="object"||t===null)throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const o=t[s],l=o===void 0||a(o,s,t);if(l!==!0)throw new ye("option "+s+" must be "+l,ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ye("Unknown option "+s,ye.ERR_BAD_OPTION)}}const Dl={assertOptions:VM,validators:Wc},Jt=Dl.validators;let Wr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Jm,response:new Jm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const a=r.stack.indexOf(`
`);return a===-1?"":r.stack.slice(a+1)})();try{if(!i.stack)i.stack=s;else if(s){const a=s.indexOf(`
`),o=a===-1?-1:s.indexOf(`
`,a+1),l=o===-1?"":s.slice(o+1);String(i.stack).endsWith(l)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=es(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Dl.assertOptions(i,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean),legacyInterceptorReqResOrdering:Jt.transitional(Jt.boolean),advertiseZstdAcceptEncoding:Jt.transitional(Jt.boolean),validateStatusUndefinedResolves:Jt.transitional(Jt.boolean)},!1),r!=null&&(L.isFunction(r)?n.paramsSerializer={serialize:r}:Dl.assertOptions(r,{encode:Jt.function,serialize:Jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Dl.assertOptions(n,{baseUrl:Jt.spelling("baseURL"),withXsrfToken:Jt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&L.merge(s.common,s[n.method]);s&&L.forEach(["delete","get","head","post","put","patch","query","common"],x=>{delete s[x]}),n.headers=rn.concat(a,s);const o=[];let l=!0;this.interceptors.request.forEach(function(E){if(typeof E.runWhen=="function"&&E.runWhen(n)===!1)return;l=l&&E.synchronous;const g=n.transitional||tp;g&&g.legacyInterceptorReqResOrdering?o.unshift(E.fulfilled,E.rejected):o.push(E.fulfilled,E.rejected)});const u=[];this.interceptors.response.forEach(function(E){u.push(E.fulfilled,E.rejected)});let h,p=0,f;if(!l){const x=[Pu.bind(this),void 0];for(x.unshift(...o),x.push(...u),f=x.length,h=Promise.resolve(n);p<f;)h=h.then(x[p++],x[p++]);return h}f=o.length;let m=n;for(;p<f;){const x=o[p++],E=o[p++];try{m=x?x(m):m}catch(g){if(!E){h=Promise.reject(g);break}try{const d=E.call(this,g);L.isThenable(d)&&(h=Promise.resolve(d).then(()=>Pu.call(this,m)))}catch(d){h=Promise.reject(d)}break}}if(!h)try{h=Pu.call(this,m)}catch(x){h=Promise.reject(x)}for(p=0,f=u.length;p<f;)h=h.then(u[p++],u[p++]);return h}getUri(e){e=es(this.defaults,e);const n=Jv(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Yv(n,e.params,e.paramsSerializer)}};L.forEach(["delete","get","head","options"],function(e){Wr.prototype[e]=function(n,i){return this.request(es(i||{},{method:e,url:n,data:i&&L.hasOwnProp(i,"data")?i.data:void 0}))}});L.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,a,o){return this.request(es(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Wr.prototype[e]=n(),e!=="query"&&(Wr.prototype[e+"Form"]=n(!0))});let jM=class i_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(o=>{i.subscribe(o),s=o}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,o){i.reason||(i.reason=new Eo(s,a,o),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new i_(function(r){e=r}),cancel:e}}};function WM(t){return function(n){return t.apply(null,n)}}function XM(t){return L.isObject(t)&&t.isAxiosError===!0}const ff={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ff).forEach(([t,e])=>{ff[e]=t});function r_(t){const e=new Wr(t),n=Dv(Wr.prototype.request,e);return L.extend(n,Wr.prototype,e,{allOwnKeys:!0}),L.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return r_(es(t,r))},n}const wt=r_(So);wt.Axios=Wr;wt.CanceledError=Eo;wt.CancelToken=jM;wt.isCancel=Kv;wt.VERSION=ip;wt.toFormData=jc;wt.AxiosError=ye;wt.Cancel=wt.CanceledError;wt.all=function(e){return Promise.all(e)};wt.spread=WM;wt.isAxiosError=XM;wt.mergeConfig=es;wt.AxiosHeaders=rn;wt.formToJSON=t=>$v(L.isHTMLForm(t)?new FormData(t):t);wt.getAdapter=n_.getAdapter;wt.HttpStatusCode=ff;wt.default=wt;const{Axios:B2,AxiosError:z2,CanceledError:H2,isCancel:G2,CancelToken:V2,VERSION:j2,all:W2,Cancel:X2,isAxiosError:Y2,spread:q2,toFormData:$2,AxiosHeaders:K2,HttpStatusCode:Z2,formToJSON:J2,getAdapter:Q2,mergeConfig:eP,create:tP}=wt,Xc="/api";async function YM({from:t,to:e,sources:n,limit:i=100,search:r,type:s,sort:a="desc",demo:o=!1}){try{const l=new URLSearchParams;return t&&l.append("from",t.toISOString()),e&&l.append("to",e.toISOString()),n&&n.length>0&&l.append("sources",n.join(",")),i&&l.append("limit",i.toString()),r&&l.append("search",r),s&&l.append("type",s),a&&l.append("sort",a),o&&l.append("demo","true"),(await wt.get(`${Xc}/feed?${l}`)).data}catch{return console.warn("API unavailable, returning empty feed"),{feed:[],meta:{isDemo:!0,message:"Backend API not available. Deploy the backend server to see live data."}}}}async function qM(){try{return(await wt.get(`${Xc}/sources`)).data}catch{return console.warn("API unavailable, returning empty sources"),{sources:[]}}}async function $M({from:t,to:e,demo:n=!1}={}){const i=new URLSearchParams;return t&&i.append("from",t.toISOString()),e&&i.append("to",e.toISOString()),n&&i.append("demo","true"),(await wt.get(`${Xc}/stats?${i}`)).data}function KM({format:t="json",from:e,to:n,sources:i,search:r,type:s,demo:a=!1}={}){const o=new URLSearchParams;return o.append("format",t),e&&o.append("from",e.toISOString()),n&&o.append("to",n.toISOString()),i&&i.length>0&&o.append("sources",i.join(",")),r&&o.append("search",r),s&&o.append("type",s),a&&o.append("demo","true"),`${Xc}/export?${o}`}function ZM({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,isDemo:a}){const[o,l]=oe.useState(null),[u,h]=oe.useState(!0);oe.useEffect(()=>{t&&p()},[t,a]);const p=async()=>{try{h(!0);const f=await $M({demo:a});l(f)}catch(f){console.error("Failed to load stats:",f)}finally{h(!1)}};return c.jsx(Xi,{id:"stats",title:"SYSTEM METRICS & ANALYTICS - [LIFE MONITOR]",isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,width:"max-w-4xl",titleBg:"bg-[#008080]",headerIcon:"analytics",initialPosition:{x:60,y:50},children:u?c.jsxs("div",{className:"p-8 text-center font-code-terminal",children:[c.jsx("p",{children:"> COMPUTING SYSTEM METRICS..."}),c.jsx("p",{className:"text-secondary-container mt-2",children:"> AGGREGATING DATA STREAMS..."})]}):o?c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-secondary-container font-bold",children:"> OBSOLESCENCE REPORT"}),c.jsx("p",{className:"text-[11px] text-gray-400",children:"DATA STREAM METRICS OVERVIEW"})]}),c.jsx("button",{onClick:p,className:"win-bevel-button bg-gray-300 text-black px-3 py-1 text-[12px] font-bold",children:"REFRESH STATS"})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-code-terminal text-[13px]",children:[c.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[#000080]",children:"code"}),c.jsx("span",{className:"font-bold text-[#000080]",children:"KNOWLEDGE & CODE (GITHUB)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Total Commits:"}),c.jsx("span",{className:"font-bold text-black",children:o.github.commits})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Pull Requests / Issues:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.github.pullRequests," PRs / ",o.github.issues," Issues"]})]}),c.jsxs("div",{className:"pt-2 border-t border-gray-200",children:[c.jsx("p",{className:"text-[11px] font-bold text-gray-700",children:"TOP REPOSITORIES:"}),o.github.topRepos.slice(0,3).map((f,m)=>c.jsxs("div",{className:"flex justify-between text-[11px] text-gray-800",children:[c.jsxs("span",{className:"truncate max-w-[200px]",children:["> ",f.repo]}),c.jsxs("span",{children:[f.count," events"]})]},m))]})]}),c.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[#800000]",children:"bed"}),c.jsx("span",{className:"font-bold text-[#800000]",children:"SLEEP RECOVERY (OURA)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Average Duration:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.sleep.avgDurationHours," hrs/night"]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Average Efficiency:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.sleep.avgEfficiency,"%"]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Sleep Score:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.sleep.avgScore," / 100"]})]}),c.jsx("div",{className:"w-full bg-gray-300 h-4 win-bevel-inset overflow-hidden mt-2",children:c.jsxs("div",{className:"bg-[#800000] h-full text-white text-[9px] flex items-center justify-center font-bold",style:{width:`${Math.min(100,o.sleep.avgScore)}%`},children:[o.sleep.avgScore,"% RECOVERY"]})})]}),c.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[#008000]",children:"directions_run"}),c.jsx("span",{className:"font-bold text-[#008000]",children:"MOVEMENT & FITNESS (STRAVA)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Total Workouts:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.workouts.totalWorkouts," activities"]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Total Distance:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.workouts.totalDistanceKm," km"]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Total Calories Burned:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.workouts.totalCalories," kcal"]})]})]}),c.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-2",children:[c.jsxs("div",{className:"flex items-center gap-2 border-b border-gray-300 pb-1",children:[c.jsx("span",{className:"material-symbols-outlined text-[#008080]",children:"schedule"}),c.jsx("span",{className:"font-bold text-[#008080]",children:"PRODUCTIVITY (RESCUETIME)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Productive Hours:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.timeTracking.productiveHours," hrs"]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{children:"Distracting Hours:"}),c.jsxs("span",{className:"font-bold text-black",children:[o.timeTracking.distractingHours," hrs"]})]}),c.jsx("div",{className:"w-full bg-gray-300 h-4 win-bevel-inset overflow-hidden mt-2",children:c.jsxs("div",{className:"bg-[#008080] h-full text-white text-[9px] flex items-center justify-center font-bold",style:{width:`${Math.min(100,o.timeTracking.productivityScore)}%`},children:[o.timeTracking.productivityScore,"% PRODUCTIVE"]})})]})]})]}):c.jsx("p",{className:"text-error font-bold",children:"> UNABLE TO GENERATE STATS SUMMARY."})})}function JM({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,sources:a=[],isDemo:o,onToggleDemo:l,onRefreshSources:u}){return c.jsx(Xi,{id:"sources",title:"SYSTEM CONNECTIONS - [API SOURCE MANAGER]",isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,width:"max-w-xl",titleBg:"bg-[#800080]",headerIcon:"hub",initialPosition:{x:80,y:70},children:c.jsxs("div",{className:"space-y-4 font-code-terminal text-[13px]",children:[c.jsxs("div",{className:"bg-black text-white p-3 win-bevel-outset flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-secondary-container font-bold",children:"> SYNTHETIC DEMO MODE"}),c.jsx("p",{className:"text-[11px] text-gray-400",children:"Generate rich sample streams when APIs are unconfigured"})]}),c.jsx("button",{onClick:()=>{Re.playClick(),l(!o)},className:`win-bevel-button px-4 py-1 font-bold ${o?"bg-secondary-container text-black":"bg-gray-300 text-black"}`,children:o?"ENABLED":"DISABLED"})]}),c.jsxs("div",{className:"bg-white p-3 win-bevel-outset space-y-3",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-gray-300 pb-2",children:[c.jsx("span",{className:"font-bold text-black",children:"> INTEGRATED SOURCES STATUS"}),c.jsx("button",{onClick:()=>{Re.playClick(),u()},className:"win-bevel-button bg-gray-200 text-black px-2 py-1 text-[11px] font-bold hover:bg-gray-300",children:"PING API STATUS"})]}),c.jsx("div",{className:"space-y-2",children:a.length===0?c.jsx("p",{className:"text-gray-500 italic",children:"> Querying sources..."}):a.map(h=>c.jsxs("div",{className:"flex items-center justify-between p-2 bg-gray-100 win-bevel-inset text-[12px]",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:`w-3 h-3 rounded-full border border-black ${h.healthy?"bg-secondary-container":h.enabled?"bg-yellow-400":"bg-red-500"}`}),c.jsx("span",{className:"font-bold uppercase text-black",children:h.name})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("span",{className:"text-[10px] text-gray-600",children:["ENV: ",h.enabled?"CONFIGURED":"NOT SET"]}),c.jsx("span",{className:`px-2 py-0.5 font-bold text-[10px] uppercase ${h.healthy?"bg-black text-secondary-container":"bg-red-800 text-white"}`,children:h.healthy?"HEALTHY":"OFFLINE"})]})]},h.name))})]}),c.jsxs("div",{className:"p-3 bg-[#e0e0e0] win-bevel-inset text-[11px] text-black space-y-1",children:[c.jsx("p",{className:"font-bold text-[#000080]",children:"> HOW TO CONNECT REAL API TOKENS:"}),c.jsx("p",{children:"• GitHub: Set GITHUB_TOKEN & GITHUB_USERNAME in .env"}),c.jsx("p",{children:"• Spotify: Set SPOTIFY_ACCESS_TOKEN with user-read-recently-played scope"}),c.jsx("p",{children:"• Strava: Set STRAVA_ACCESS_TOKEN in .env"}),c.jsx("p",{children:"• Oura: Set OURA_ACCESS_TOKEN in .env"}),c.jsx("p",{children:"• RescueTime: Set RESCUETIME_API_KEY in .env"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="185",QM=0,fg=1,ew=2,Ll=1,tw=2,Oa=3,Er=0,Sn=1,gi=2,Fi=0,js=1,hg=2,pg=3,mg=4,nw=5,Or=100,iw=101,rw=102,sw=103,aw=104,ow=200,lw=201,cw=202,uw=203,hf=204,pf=205,dw=206,fw=207,hw=208,pw=209,mw=210,gw=211,xw=212,vw=213,_w=214,mf=0,gf=1,xf=2,ta=3,vf=4,_f=5,yf=6,Sf=7,s_=0,yw=1,Sw=2,Si=0,a_=1,o_=2,l_=3,c_=4,u_=5,d_=6,f_=7,h_=300,ts=301,na=302,Iu=303,Du=304,Yc=306,Ef=1e3,Oi=1001,bf=1002,Xt=1003,Ew=1004,qo=1005,nn=1006,Lu=1007,Hr=1008,zn=1009,p_=1010,m_=1011,fo=1012,ap=1013,Mi=1014,xi=1015,Vi=1016,op=1017,lp=1018,ho=1020,g_=35902,x_=35899,v_=1021,__=1022,ti=1023,ji=1026,Gr=1027,y_=1028,cp=1029,ns=1030,up=1031,dp=1033,Ol=33776,Ul=33777,Fl=33778,kl=33779,Mf=35840,wf=35841,Tf=35842,Af=35843,Rf=36196,Cf=37492,Nf=37496,Pf=37488,If=37489,gc=37490,Df=37491,Lf=37808,Of=37809,Uf=37810,Ff=37811,kf=37812,Bf=37813,zf=37814,Hf=37815,Gf=37816,Vf=37817,jf=37818,Wf=37819,Xf=37820,Yf=37821,qf=36492,$f=36494,Kf=36495,Zf=36283,Jf=36284,xc=36285,Qf=36286,bw=3200,gg=0,Mw=1,lr="",Un="srgb",vc="srgb-linear",_c="linear",at="srgb",fs=7680,xg=519,ww=512,Tw=513,Aw=514,fp=515,Rw=516,Cw=517,hp=518,Nw=519,vg=35044,_g="300 es",vi=2e3,yc=2001;function Pw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Iw(){const t=Sc("canvas");return t.style.display="block",t}const yg={};function Sg(...t){const e="THREE."+t.shift();console.log(e,...t)}function S_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=S_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=S_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ws(...t){const e=t.join(" ");e in yg||(yg[e]=!0,ze(...t))}function Dw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Lw={[mf]:gf,[xf]:yf,[vf]:Sf,[ta]:_f,[gf]:mf,[yf]:xf,[Sf]:vf,[_f]:ta};class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,eh=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Ow(t,e){return(t%e+e)%e}function Uu(t,e,n){return(1-n)*t+n*e}function ba(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xp=class xp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xp.prototype.isVector2=!0;let rt=xp;class ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],x=s[a+2],E=s[a+3];if(p!==E||l!==f||u!==m||h!==x){let g=l*f+u*m+h*x+p*E;g<0&&(f=-f,m=-m,x=-x,E=-E,g=-g);let d=1-o;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);d=Math.sin(d*v)/S,o=Math.sin(o*v)/S,l=l*d+f*o,u=u*d+m*o,h=h*d+x*o,p=p*d+E*o}else{l=l*d+f*o,u=u*d+m*o,h=h*d+x*o,p=p*d+E*o;const v=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=v,u*=v,h*=v,p*=v}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+l*m-u*f,e[n+1]=l*x+h*f+u*p-o*m,e[n+2]=u*x+h*m+o*f-l*p,e[n+3]=h*x-o*p-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"YZX":this._x=f*h*p+u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p-f*m*x;break;case"XZY":this._x=f*h*p-u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p+f*m*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vp=class vp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Eg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Eg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*h,this.y=i+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vp.prototype.isVector3=!0;let V=vp;const Fu=new V,Eg=new ua,_p=class _p{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],x=i[8],E=r[0],g=r[3],d=r[6],v=r[1],S=r[4],y=r[7],M=r[2],w=r[5],A=r[8];return s[0]=a*E+o*v+l*M,s[3]=a*g+o*S+l*w,s[6]=a*d+o*y+l*A,s[1]=u*E+h*v+p*M,s[4]=u*g+h*S+p*w,s[7]=u*d+h*y+p*A,s[2]=f*E+m*v+x*M,s[5]=f*g+m*S+x*w,s[8]=f*d+m*y+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*l-h*s,m=u*s-a*l,x=n*p+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return e[0]=p*E,e[1]=(r*u-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*l-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ku.makeScale(e,n)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_p.prototype.isMatrix3=!0;let Ge=_p;const ku=new Ge,bg=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uw(){const t={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?_c:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vc]:{primaries:e,whitePoint:i,transfer:_c,toXYZ:bg,fromXYZ:Mg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:at,toXYZ:bg,fromXYZ:Mg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const Je=Uw();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hs;class Fw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hs===void 0&&(hs=Sc("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kw=0;class pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bu(r[a].image)):s.push(Bu(r[a]))}else s=Bu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Bu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Fw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let Bw=0;const zu=new V;class un extends as{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Oi,r=Oi,s=nn,a=Hr,o=ti,l=zn,u=un.DEFAULT_ANISOTROPY,h=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=bo(),this.name="",this.source=new pp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ef:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ef:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=h_;un.DEFAULT_ANISOTROPY=1;const yp=class yp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],f=l[1],m=l[5],x=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-E)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+E)<.1&&Math.abs(x+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,y=(m+1)/2,M=(d+1)/2,w=(h+f)/4,A=(p+E)/4,_=(x+g)/4;return S>y&&S>M?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=w/i,s=A/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=_/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(p-E)*(p-E)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(p-E)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yp.prototype.isVector4=!0;let Ct=yp;class zw extends as{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new pp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends zw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class E_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hw extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wc=class wc{constructor(e,n,i,r,s,a,o,l,u,h,p,f,m,x,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,p,f,m,x,E,g)}set(e,n,i,r,s,a,o,l,u,h,p,f,m,x,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=x,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,x=o*h,E=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+x*u,n[5]=f-E*u,n[9]=-o*l,n[2]=E-f*u,n[6]=x+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,x=u*h,E=u*p;n[0]=f+E*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=E+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,x=u*h,E=u*p;n[0]=f-E*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=E-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,x=o*h,E=o*p;n[0]=l*h,n[4]=x*u-m,n[8]=f*u+E,n[1]=l*p,n[5]=E*u+f,n[9]=m*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,x=o*l,E=o*u;n[0]=l*h,n[4]=E-f*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+x,n[10]=f-E*p}else if(e.order==="XZY"){const f=a*l,m=a*u,x=o*l,E=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=f*p+E,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=E*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gw,e,Vw)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ji.crossVectors(i,Mn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ji.crossVectors(i,Mn)),Ji.normalize(),$o.crossVectors(Mn,Ji),r[0]=Ji.x,r[4]=$o.x,r[8]=Mn.x,r[1]=Ji.y,r[5]=$o.y,r[9]=Mn.y,r[2]=Ji.z,r[6]=$o.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],x=i[2],E=i[6],g=i[10],d=i[14],v=i[3],S=i[7],y=i[11],M=i[15],w=r[0],A=r[4],_=r[8],R=r[12],N=r[1],I=r[5],P=r[9],Y=r[13],K=r[2],F=r[6],B=r[10],z=r[14],D=r[3],j=r[7],Z=r[11],ee=r[15];return s[0]=a*w+o*N+l*K+u*D,s[4]=a*A+o*I+l*F+u*j,s[8]=a*_+o*P+l*B+u*Z,s[12]=a*R+o*Y+l*z+u*ee,s[1]=h*w+p*N+f*K+m*D,s[5]=h*A+p*I+f*F+m*j,s[9]=h*_+p*P+f*B+m*Z,s[13]=h*R+p*Y+f*z+m*ee,s[2]=x*w+E*N+g*K+d*D,s[6]=x*A+E*I+g*F+d*j,s[10]=x*_+E*P+g*B+d*Z,s[14]=x*R+E*Y+g*z+d*ee,s[3]=v*w+S*N+y*K+M*D,s[7]=v*A+S*I+y*F+M*j,s[11]=v*_+S*P+y*B+M*Z,s[15]=v*R+S*Y+y*z+M*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],E=e[7],g=e[11],d=e[15],v=l*m-u*f,S=o*m-u*p,y=o*f-l*p,M=a*m-u*h,w=a*f-l*h,A=a*p-o*h;return n*(E*v-g*S+d*y)-i*(x*v-g*M+d*w)+r*(x*S-E*M+d*A)-s*(x*y-E*w+g*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],E=e[13],g=e[14],d=e[15],v=n*o-i*a,S=n*l-r*a,y=n*u-s*a,M=i*l-r*o,w=i*u-s*o,A=r*u-s*l,_=h*E-p*x,R=h*g-f*x,N=h*d-m*x,I=p*g-f*E,P=p*d-m*E,Y=f*d-m*g,K=v*Y-S*P+y*I+M*N-w*R+A*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/K;return e[0]=(o*Y-l*P+u*I)*F,e[1]=(r*P-i*Y-s*I)*F,e[2]=(E*A-g*w+d*M)*F,e[3]=(f*w-p*A-m*M)*F,e[4]=(l*N-a*Y-u*R)*F,e[5]=(n*Y-r*N+s*R)*F,e[6]=(g*y-x*A-d*S)*F,e[7]=(h*A-f*y+m*S)*F,e[8]=(a*P-o*N+u*_)*F,e[9]=(i*N-n*P-s*_)*F,e[10]=(x*w-E*y+d*v)*F,e[11]=(p*y-h*w-m*v)*F,e[12]=(o*R-a*I-l*_)*F,e[13]=(n*I-i*R+r*_)*F,e[14]=(E*S-x*M-g*v)*F,e[15]=(h*M-p*S+f*v)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,x=s*p,E=a*h,g=a*p,d=o*p,v=l*u,S=l*h,y=l*p,M=i.x,w=i.y,A=i.z;return r[0]=(1-(E+d))*M,r[1]=(m+y)*M,r[2]=(x-S)*M,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(f+d))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(x+S)*A,r[9]=(g-v)*A,r[10]=(1-(f+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),l=ps.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);const u=1/a,h=1/o,p=1/l;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=p,qn.elements[9]*=p,qn.elements[10]*=p,n.setFromRotationMatrix(qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=vi,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let x,E;if(l)x=s/(a-s),E=a*s/(a-s);else if(o===vi)x=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===yc)x=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,E;if(l)x=1/(a-s),E=a/(a-s);else if(o===vi)x=-2/(a-s),E=-(a+s)/(a-s);else if(o===yc)x=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};wc.prototype.isMatrix4=!0;let Dt=wc;const ps=new V,qn=new Dt,Gw=new V(0,0,0),Vw=new V(1,1,1),Ji=new V,$o=new V,Mn=new V,wg=new Dt,Tg=new ua;class is{constructor(e=0,n=0,i=0,r=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class b_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jw=0;const Ag=new V,ms=new ua,Ti=new Dt,Ko=new V,Ma=new V,Ww=new V,Xw=new ua,Rg=new V(1,0,0),Cg=new V(0,1,0),Ng=new V(0,0,1),Pg={type:"added"},Yw={type:"removed"},gs={type:"childadded",child:null},Hu={type:"childremoved",child:null};class En extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new V,n=new is,i=new ua,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ge}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,n){return ms.setFromAxisAngle(e,n),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(Rg,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Ng,e)}translateOnAxis(e,n){return Ag.copy(e).applyQuaternion(this.quaternion),this.position.add(Ag.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rg,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Ma,Ko,this.up):Ti.lookAt(Ko,Ma,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(Ti),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pg),gs.child=e,this.dispatchEvent(gs),gs.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Yw),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pg),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,Ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,Xw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DEFAULT_UP=new V(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(u,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const M_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Vu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Ow(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Vu(a,s,e+1/3),this.g=Vu(a,s,e),this.b=Vu(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=M_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Je.workingToColorSpace(en.copy(this),e),Math.round(Qe(en.r*255,0,255))*65536+Math.round(Qe(en.g*255,0,255))*256+Math.round(Qe(en.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Un){Je.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+n,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Qi),e.getHSL(Jo);const i=Uu(Qi.h,Jo.h,n),r=Uu(Qi.s,Jo.s,n),s=Uu(Qi.l,Jo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new et;et.NAMES=M_;class mp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=n}clone(){return new mp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $w extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new V,Ai=new V,ju=new V,Ri=new V,xs=new V,vs=new V,Ig=new V,Wu=new V,Xu=new V,Yu=new V,qu=new Ct,$u=new Ct,Ku=new Ct;class ei{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ai.subVectors(i,n),ju.subVectors(e,n);const a=$n.dot($n),o=$n.dot(Ai),l=$n.dot(ju),u=Ai.dot(Ai),h=Ai.dot(ju),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return qu.setScalar(0),$u.setScalar(0),Ku.setScalar(0),qu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,i),Ku.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qu,s.x),a.addScaledVector($u,s.y),a.addScaledVector(Ku,s.z),a}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ai.subVectors(e,n),$n.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xs.subVectors(r,i),vs.subVectors(s,i),Wu.subVectors(e,i);const l=xs.dot(Wu),u=vs.dot(Wu);if(l<=0&&u<=0)return n.copy(i);Xu.subVectors(e,r);const h=xs.dot(Xu),p=vs.dot(Xu);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*u;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(xs,a);Yu.subVectors(e,s);const m=xs.dot(Yu),x=vs.dot(Yu);if(x>=0&&m<=x)return n.copy(s);const E=m*u-l*x;if(E<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(vs,o);const g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return Ig.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(Ig,o);const d=1/(g+E+f);return a=E*d,o=f*d,n.copy(i).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Mo{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(s,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),el.subVectors(this.max,wa),_s.subVectors(e.a,wa),ys.subVectors(e.b,wa),Ss.subVectors(e.c,wa),er.subVectors(ys,_s),tr.subVectors(Ss,ys),Ar.subVectors(_s,Ss);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ar.z,Ar.y,er.z,0,-er.x,tr.z,0,-tr.x,Ar.z,0,-Ar.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ar.y,Ar.x,0];return!Zu(n,_s,ys,Ss,el)||(n=[1,0,0,0,1,0,0,0,1],!Zu(n,_s,ys,Ss,el))?!1:(tl.crossVectors(er,tr),n=[tl.x,tl.y,tl.z],Zu(n,_s,ys,Ss,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new V,new V,new V,new V,new V,new V,new V,new V],Kn=new V,Qo=new Mo,_s=new V,ys=new V,Ss=new V,er=new V,tr=new V,Ar=new V,wa=new V,el=new V,tl=new V,Rr=new V;function Zu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Rr.fromArray(t,s);const o=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),u=n.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Ot=new V,nl=new rt;let Kw=0;class bi extends as{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vg,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ba(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ba(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ba(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ba(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ba(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class w_ extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T_ extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Zw=new Mo,Ta=new V,Ju=new V;class qc{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Zw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const n=Ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(Ju)),this.expandByPoint(Ta.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jw=0;const On=new Dt,Qu=new En,Es=new V,wn=new Mo,Aa=new Mo,Ht=new V;class Xn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pw(e)?T_:w_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(wn.min,Aa.min),wn.expandByPoint(Ht),Ht.addVectors(wn.max,Aa.max),wn.expandByPoint(Ht)):(wn.expandByPoint(Aa.min),wn.expandByPoint(Aa.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ht.fromBufferAttribute(o,u),l&&(Es.fromBufferAttribute(e,u),Ht.add(Es)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new bi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new V,l[_]=new V;const u=new V,h=new V,p=new V,f=new rt,m=new rt,x=new rt,E=new V,g=new V;function d(_,R,N){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,N),f.fromBufferAttribute(s,_),m.fromBufferAttribute(s,R),x.fromBufferAttribute(s,N),h.sub(u),p.sub(u),m.sub(f),x.sub(f);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(E.copy(h).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(I),o[_].add(E),o[R].add(E),o[N].add(E),l[_].add(g),l[R].add(g),l[N].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,R=v.length;_<R;++_){const N=v[_],I=N.start,P=N.count;for(let Y=I,K=I+P;Y<K;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const S=new V,y=new V,M=new V,w=new V;function A(_){M.fromBufferAttribute(r,_),w.copy(M);const R=o[_];S.copy(R),S.sub(M.multiplyScalar(M.dot(R))).normalize(),y.crossVectors(w,R);const I=y.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,I)}for(let _=0,R=v.length;_<R;++_){const N=v[_],I=N.start,P=N.count;for(let Y=I,K=I+P;Y<K;Y+=3)A(e.getX(Y+0)),A(e.getX(Y+1)),A(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,u=new V,h=new V,p=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,g),o.add(h),l.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(l.length*h);let m=0,x=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*h;for(let d=0;d<h;d++)f[x++]=u[m++]}return new bi(f,h,p)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Qw=0;class wo extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=js,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=pf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hf&&(i.blendSrc=this.blendSrc),this.blendDst!==pf&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new V,ed=new V,il=new V,nr=new V,td=new V,rl=new V,nd=new V;class A_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ed.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(ed);const s=e.distanceTo(n)*.5,a=-this.direction.dot(il),o=nr.dot(this.direction),l=-nr.dot(il),u=nr.lengthSq(),h=Math.abs(1-a*a);let p,f,m,x;if(h>0)if(p=a*l-o,f=a*o-l,x=s*h,p>=0)if(f>=-x)if(f<=x){const E=1/h;p*=E,f*=E,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f<=-x?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u):f<=x?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(ed).addScaledVector(il,f),m}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){td.subVectors(n,e),rl.subVectors(i,e),nd.crossVectors(td,rl);let a=this.direction.dot(nd),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot(rl.crossVectors(nr,rl));if(l<0)return null;const u=o*this.direction.dot(td.cross(nr));if(u<0||l+u>a)return null;const h=-o*nr.dot(nd);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ec extends wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=s_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dg=new Dt,Cr=new A_,sl=new qc,Lg=new V,al=new V,ol=new V,ll=new V,id=new V,cl=new V,Og=new V,ul=new V;class si extends En{constructor(e=new Xn,n=new Ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){cl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(id.fromBufferAttribute(p,e),a?cl.addScaledVector(id,h):cl.addScaledVector(id.sub(n),h))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(sl.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(sl,Lg)===null||Cr.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Dg.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Dg),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,E=f.length;x<E;x++){const g=f[x],d=a[g.materialIndex],v=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,M=S;y<M;y+=3){const w=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);r=dl(this,d,e,i,u,h,p,w,A,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let g=x,d=E;g<d;g+=3){const v=o.getX(g),S=o.getX(g+1),y=o.getX(g+2);r=dl(this,a,e,i,u,h,p,v,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,E=f.length;x<E;x++){const g=f[x],d=a[g.materialIndex],v=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,M=S;y<M;y+=3){const w=y,A=y+1,_=y+2;r=dl(this,d,e,i,u,h,p,w,A,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=x,d=E;g<d;g+=3){const v=g,S=g+1,y=g+2;r=dl(this,a,e,i,u,h,p,v,S,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function eT(t,e,n,i,r,s,a,o){let l;if(e.side===Sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Er,o),l===null)return null;ul.copy(o),ul.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ul);return u<n.near||u>n.far?null:{distance:u,point:ul.clone(),object:t}}function dl(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,al),t.getVertexPosition(l,ol),t.getVertexPosition(u,ll);const h=eT(t,e,n,i,al,ol,ll,Og);if(h){const p=new V;ei.getBarycoord(Og,al,ol,ll,p),r&&(h.uv=ei.getInterpolatedAttribute(r,o,l,u,p,new rt)),s&&(h.uv1=ei.getInterpolatedAttribute(s,o,l,u,p,new rt)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,l,u,p,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new V,materialIndex:0};ei.getNormal(al,ol,ll,f.normal),h.face=f,h.barycoord=p}return h}class tT extends un{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Xt,h=Xt,p,f){super(null,a,o,l,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new V,nT=new V,iT=new Ge;class Lr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rd.subVectors(i,n).cross(nT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(rd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iT.getNormalMatrix(e),r=this.coplanarPoint(rd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new qc,rT=new rt(.5,.5),fl=new V;class R_{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,a=new Lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],x=s[8],E=s[9],g=s[10],d=s[11],v=s[12],S=s[13],y=s[14],M=s[15];if(r[0].setComponents(u-a,m-h,d-x,M-v).normalize(),r[1].setComponents(u+a,m+h,d+x,M+v).normalize(),r[2].setComponents(u+o,m+p,d+E,M+S).normalize(),r[3].setComponents(u-o,m-p,d-E,M-S).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(u-l,m-f,d-g,M-y).normalize();else if(r[4].setComponents(u-l,m-f,d-g,M-y).normalize(),n===vi)r[5].setComponents(u+l,m+f,d+g,M+y).normalize();else if(n===yc)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const n=rT.distanceTo(e.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends wo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new V,Mc=new V,Ug=new Dt,Ra=new A_,hl=new qc,sd=new V,Fg=new V;class sT extends En{constructor(e=new Xn,n=new C_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)bc.fromBufferAttribute(n,r-1),Mc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=bc.distanceTo(Mc);e.setAttribute("lineDistance",new sn(i,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;Ug.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(Ug);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let E=m,g=x-1;E<g;E+=u){const d=h.getX(E),v=h.getX(E+1),S=pl(this,e,Ra,l,d,v,E);S&&n.push(S)}if(this.isLineLoop){const E=h.getX(x-1),g=h.getX(m),d=pl(this,e,Ra,l,E,g,x-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let E=m,g=x-1;E<g;E+=u){const d=pl(this,e,Ra,l,E,E+1,E);d&&n.push(d)}if(this.isLineLoop){const E=pl(this,e,Ra,l,x-1,m,x-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(bc.fromBufferAttribute(o,r),Mc.fromBufferAttribute(o,s),n.distanceSqToSegment(bc,Mc,sd,Fg)>i)return;sd.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(sd);if(!(u<e.near||u>e.far))return{distance:u,point:Fg.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const kg=new V,Bg=new V;class aT extends sT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)kg.fromBufferAttribute(n,r),Bg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+kg.distanceTo(Bg);e.setAttribute("lineDistance",new sn(i,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class N_ extends un{constructor(e=[],n=ts,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ia extends un{constructor(e,n,i=Mi,r,s,a,o=Xt,l=Xt,u,h=ji,p=1){if(h!==ji&&h!==Gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class oT extends ia{constructor(e,n=Mi,i=ts,r,s,a=Xt,o=Xt,l,u=ji){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P_ extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class To extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(p,2));function x(E,g,d,v,S,y,M,w,A,_,R){const N=y/A,I=M/_,P=y/2,Y=M/2,K=w/2,F=A+1,B=_+1;let z=0,D=0;const j=new V;for(let Z=0;Z<B;Z++){const ee=Z*I-Y;for(let re=0;re<F;re++){const we=re*N-P;j[E]=we*v,j[g]=ee*S,j[d]=K,u.push(j.x,j.y,j.z),j[E]=0,j[g]=0,j[d]=w>0?1:-1,h.push(j.x,j.y,j.z),p.push(re/A),p.push(1-Z/_),z+=1}}for(let Z=0;Z<_;Z++)for(let ee=0;ee<A;ee++){const re=f+ee+F*Z,we=f+ee+F*(Z+1),Ve=f+(ee+1)+F*(Z+1),ke=f+(ee+1)+F*Z;l.push(re,we,ke),l.push(we,Ve,ke),D+=6}o.addGroup(m,D,R),m+=D,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ao extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,f=n/l,m=[],x=[],E=[],g=[];for(let d=0;d<h;d++){const v=d*f-a;for(let S=0;S<u;S++){const y=S*p-s;x.push(y,-v,0),E.push(0,0,1),g.push(S/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const S=v+u*d,y=v+u*(d+1),M=v+1+u*(d+1),w=v+1+u*d;m.push(S,y,w),m.push(y,M,w)}this.setIndex(m),this.setAttribute("position",new sn(x,3)),this.setAttribute("normal",new sn(E,3)),this.setAttribute("uv",new sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}}class gp extends Xn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],h=[];let p=e;const f=(n-e)/r,m=new V,x=new rt;for(let E=0;E<=r;E++){for(let g=0;g<=i;g++){const d=s+g/i*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),u.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,h.push(x.x,x.y)}p+=f}for(let E=0;E<r;E++){const g=E*(i+1);for(let d=0;d<i;d++){const v=d+g,S=v,y=v+i+1,M=v+i+2,w=v+1;o.push(S,y,w),o.push(y,M,w)}}this.setIndex(o),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function ra(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(zg(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(zg(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ra(t[n]);for(const r in i)e[r]=i[r]}return e}function zg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function lT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function I_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const cT={clone:ra,merge:on};var uT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=lT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fT extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hT extends wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ml=new V,gl=new ua,di=new V;class D_ extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,gl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ml,gl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ir=new V,Hg=new rt,Gg=new rt;class Bn extends D_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,Hg,Gg),n.subVectors(Gg,Hg)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class L_ extends D_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bs=-90,Ms=1;class mT extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(bs,Ms,e,n);r.layers=this.layers,this.add(r);const s=new Bn(bs,Ms,e,n);s.layers=this.layers,this.add(s);const a=new Bn(bs,Ms,e,n);a.layers=this.layers,this.add(a);const o=new Bn(bs,Ms,e,n);o.layers=this.layers,this.add(o);const l=new Bn(bs,Ms,e,n);l.layers=this.layers,this.add(l);const u=new Bn(bs,Ms,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class gT extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sp=class Sp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sp.prototype.isMatrix2=!0;let Vg=Sp;class xT extends aT{constructor(e=10,n=10,i=4473924,r=8947848){i=new et(i),r=new et(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let f=0,m=0,x=-o;f<=n;f++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const E=f===s?i:r;E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3}const h=new Xn;h.setAttribute("position",new sn(l,3)),h.setAttribute("color",new sn(u,3));const p=new C_({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function jg(t,e,n,i){const r=vT(i);switch(n){case v_:return t*e;case y_:return t*e/r.components*r.byteLength;case cp:return t*e/r.components*r.byteLength;case ns:return t*e*2/r.components*r.byteLength;case up:return t*e*2/r.components*r.byteLength;case __:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case dp:return t*e*4/r.components*r.byteLength;case Ol:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wf:case Af:return Math.max(t,16)*Math.max(e,8)/4;case Mf:case Tf:return Math.max(t,8)*Math.max(e,8)/2;case Rf:case Cf:case Pf:case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nf:case gc:case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Yf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qf:case $f:case Kf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zf:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xc:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vT(t){switch(t){case zn:case p_:return{byteLength:1,components:1};case fo:case m_:case Vi:return{byteLength:2,components:1};case op:case lp:return{byteLength:2,components:4};case Mi:case ap:case xi:return{byteLength:4,components:1};case g_:case x_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _T(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<p.length;m++){const x=p[f],E=p[m];E.start<=x.start+x.count+1?x.count=Math.max(x.count,E.start+E.count-x.start):(++f,p[f]=E)}p.length=f+1;for(let m=0,x=p.length;m<x;m++){const E=p[m];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var yT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ST=`#ifdef USE_ALPHAHASH
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
#endif`,ET=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
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
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RT=`#ifdef USE_BATCHING
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
#endif`,CT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DT=`#ifdef USE_IRIDESCENCE
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
#endif`,LT=`#ifdef USE_BUMPMAP
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
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VT=`#define PI 3.141592653589793
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
} // validated`,jT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WT=`vec3 transformedNormal = objectNormal;
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
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
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
#endif`,QT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
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
#endif`,tA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
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
#endif`,iA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oA=`#ifdef USE_GRADIENTMAP
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
}`,lA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fA=`#ifdef USE_ENVMAP
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
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xA=`PhysicalMaterial material;
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
#endif`,vA=`uniform sampler2D dfgLUT;
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
}`,_A=`
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
#endif`,yA=`#if defined( RE_IndirectDiffuse )
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
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,NA=`#if defined( USE_POINTS_UV )
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
#endif`,PA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UA=`#ifdef USE_MORPHTARGETS
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
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VA=`#ifdef USE_NORMALMAP
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
#endif`,jA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$A=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,KA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sR=`float getShadowMask() {
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
}`,aR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oR=`#ifdef USE_SKINNING
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
#endif`,lR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cR=`#ifdef USE_SKINNING
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
#endif`,uR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pR=`#ifdef USE_TRANSMISSION
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
#endif`,mR=`#ifdef USE_TRANSMISSION
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
#endif`,gR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_R=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SR=`uniform sampler2D t2D;
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
}`,ER=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TR=`#include <common>
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
}`,AR=`#if DEPTH_PACKING == 3200
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
}`,RR=`#define DISTANCE
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
}`,CR=`#define DISTANCE
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
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`uniform float scale;
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
}`,DR=`uniform vec3 diffuse;
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
}`,LR=`#include <common>
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
}`,OR=`uniform vec3 diffuse;
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
}`,UR=`#define LAMBERT
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
}`,FR=`#define LAMBERT
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
}`,kR=`#define MATCAP
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
}`,BR=`#define MATCAP
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
}`,zR=`#define NORMAL
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
}`,HR=`#define NORMAL
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
}`,GR=`#define PHONG
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
}`,VR=`#define PHONG
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
}`,jR=`#define STANDARD
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
}`,WR=`#define STANDARD
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
}`,XR=`#define TOON
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
}`,YR=`#define TOON
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
}`,qR=`uniform float size;
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
}`,$R=`uniform vec3 diffuse;
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
}`,KR=`#include <common>
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
}`,ZR=`uniform vec3 color;
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
}`,JR=`uniform float rotation;
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
}`,QR=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:yT,alphahash_pars_fragment:ST,alphamap_fragment:ET,alphamap_pars_fragment:bT,alphatest_fragment:MT,alphatest_pars_fragment:wT,aomap_fragment:TT,aomap_pars_fragment:AT,batching_pars_vertex:RT,batching_vertex:CT,begin_vertex:NT,beginnormal_vertex:PT,bsdfs:IT,iridescence_fragment:DT,bumpmap_pars_fragment:LT,clipping_planes_fragment:OT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:kT,color_fragment:BT,color_pars_fragment:zT,color_pars_vertex:HT,color_vertex:GT,common:VT,cube_uv_reflection_fragment:jT,defaultnormal_vertex:WT,displacementmap_pars_vertex:XT,displacementmap_vertex:YT,emissivemap_fragment:qT,emissivemap_pars_fragment:$T,colorspace_fragment:KT,colorspace_pars_fragment:ZT,envmap_fragment:JT,envmap_common_pars_fragment:QT,envmap_pars_fragment:eA,envmap_pars_vertex:tA,envmap_physical_pars_fragment:fA,envmap_vertex:nA,fog_vertex:iA,fog_pars_vertex:rA,fog_fragment:sA,fog_pars_fragment:aA,gradientmap_pars_fragment:oA,lightmap_pars_fragment:lA,lights_lambert_fragment:cA,lights_lambert_pars_fragment:uA,lights_pars_begin:dA,lights_toon_fragment:hA,lights_toon_pars_fragment:pA,lights_phong_fragment:mA,lights_phong_pars_fragment:gA,lights_physical_fragment:xA,lights_physical_pars_fragment:vA,lights_fragment_begin:_A,lights_fragment_maps:yA,lights_fragment_end:SA,lightprobes_pars_fragment:EA,logdepthbuf_fragment:bA,logdepthbuf_pars_fragment:MA,logdepthbuf_pars_vertex:wA,logdepthbuf_vertex:TA,map_fragment:AA,map_pars_fragment:RA,map_particle_fragment:CA,map_particle_pars_fragment:NA,metalnessmap_fragment:PA,metalnessmap_pars_fragment:IA,morphinstance_vertex:DA,morphcolor_vertex:LA,morphnormal_vertex:OA,morphtarget_pars_vertex:UA,morphtarget_vertex:FA,normal_fragment_begin:kA,normal_fragment_maps:BA,normal_pars_fragment:zA,normal_pars_vertex:HA,normal_vertex:GA,normalmap_pars_fragment:VA,clearcoat_normal_fragment_begin:jA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:XA,iridescence_pars_fragment:YA,opaque_fragment:qA,packing:$A,premultiplied_alpha_fragment:KA,project_vertex:ZA,dithering_fragment:JA,dithering_pars_fragment:QA,roughnessmap_fragment:eR,roughnessmap_pars_fragment:tR,shadowmap_pars_fragment:nR,shadowmap_pars_vertex:iR,shadowmap_vertex:rR,shadowmask_pars_fragment:sR,skinbase_vertex:aR,skinning_pars_vertex:oR,skinning_vertex:lR,skinnormal_vertex:cR,specularmap_fragment:uR,specularmap_pars_fragment:dR,tonemapping_fragment:fR,tonemapping_pars_fragment:hR,transmission_fragment:pR,transmission_pars_fragment:mR,uv_pars_fragment:gR,uv_pars_vertex:xR,uv_vertex:vR,worldpos_vertex:_R,background_vert:yR,background_frag:SR,backgroundCube_vert:ER,backgroundCube_frag:bR,cube_vert:MR,cube_frag:wR,depth_vert:TR,depth_frag:AR,distance_vert:RR,distance_frag:CR,equirect_vert:NR,equirect_frag:PR,linedashed_vert:IR,linedashed_frag:DR,meshbasic_vert:LR,meshbasic_frag:OR,meshlambert_vert:UR,meshlambert_frag:FR,meshmatcap_vert:kR,meshmatcap_frag:BR,meshnormal_vert:zR,meshnormal_frag:HR,meshphong_vert:GR,meshphong_frag:VR,meshphysical_vert:jR,meshphysical_frag:WR,meshtoon_vert:XR,meshtoon_frag:YR,points_vert:qR,points_frag:$R,shadow_vert:KR,shadow_frag:ZR,sprite_vert:JR,sprite_frag:QR},_e={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pi={basic:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:on([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:on([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:on([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:on([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:on([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:on([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:on([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:on([_e.lights,_e.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};pi.physical={uniforms:on([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const xl={r:0,b:0,g:0},eC=new Dt,U_=new Ge;U_.set(-1,0,0,0,1,0,0,0,1);function tC(t,e,n,i,r,s){const a=new et(0);let o=r===!0?0:1,l,u,h=null,p=0,f=null;function m(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function x(v){let S=!1;const y=m(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),S=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,S){const y=m(S);y&&(y.isCubeTexture||y.mapping===Yc)?(u===void 0&&(u=new si(new To(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ra(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eC.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(U_),u.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,(h!==y||p!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new si(new Ao(2,2),new wi({name:"BackgroundMaterial",uniforms:ra(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(xl,I_(t)),n.buffers.color.setClear(xl.r,xl.g,xl.b,S,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:x,addToRenderList:E,dispose:d}}function nC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,P,Y,K,F){let B=!1;const z=p(I,K,Y,P);s!==z&&(s=z,u(s.object)),B=m(I,K,Y,F),B&&x(I,K,Y,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(I,P,Y,K),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function p(I,P,Y,K){const F=K.wireframe===!0;let B=i[P.id];B===void 0&&(B={},i[P.id]=B);const z=I.isInstancedMesh===!0?I.id:0;let D=B[z];D===void 0&&(D={},B[z]=D);let j=D[Y.id];j===void 0&&(j={},D[Y.id]=j);let Z=j[F];return Z===void 0&&(Z=f(l()),j[F]=Z),Z}function f(I){const P=[],Y=[],K=[];for(let F=0;F<n;F++)P[F]=0,Y[F]=0,K[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Y,attributeDivisors:K,object:I,attributes:{},index:null}}function m(I,P,Y,K){const F=s.attributes,B=P.attributes;let z=0;const D=Y.getAttributes();for(const j in D)if(D[j].location>=0){const ee=F[j];let re=B[j];if(re===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function x(I,P,Y,K){const F={},B=P.attributes;let z=0;const D=Y.getAttributes();for(const j in D)if(D[j].location>=0){let ee=B[j];ee===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),F[j]=re,z++}s.attributes=F,s.attributesNum=z,s.index=K}function E(){const I=s.newAttributes;for(let P=0,Y=I.length;P<Y;P++)I[P]=0}function g(I){d(I,0)}function d(I,P){const Y=s.newAttributes,K=s.enabledAttributes,F=s.attributeDivisors;Y[I]=1,K[I]===0&&(t.enableVertexAttribArray(I),K[I]=1),F[I]!==P&&(t.vertexAttribDivisor(I,P),F[I]=P)}function v(){const I=s.newAttributes,P=s.enabledAttributes;for(let Y=0,K=P.length;Y<K;Y++)P[Y]!==I[Y]&&(t.disableVertexAttribArray(Y),P[Y]=0)}function S(I,P,Y,K,F,B,z){z===!0?t.vertexAttribIPointer(I,P,Y,F,B):t.vertexAttribPointer(I,P,Y,K,F,B)}function y(I,P,Y,K){E();const F=K.attributes,B=Y.getAttributes(),z=P.defaultAttributeValues;for(const D in B){const j=B[D];if(j.location>=0){let Z=F[D];if(Z===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ee=Z.normalized,re=Z.itemSize,we=e.get(Z);if(we===void 0)continue;const Ve=we.buffer,ke=we.type,G=we.bytesPerElement,ie=ke===t.INT||ke===t.UNSIGNED_INT||Z.gpuType===ap;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Fe=ae.stride,He=Z.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<j.locationSize;Oe++)d(j.location+Oe,ae.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<j.locationSize;Oe++)g(j.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let Oe=0;Oe<j.locationSize;Oe++)S(j.location+Oe,re/j.locationSize,ke,ee,Fe*G,(He+re/j.locationSize*Oe)*G,ie)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)d(j.location+ae,Z.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<j.locationSize;ae++)g(j.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ve);for(let ae=0;ae<j.locationSize;ae++)S(j.location+ae,re/j.locationSize,ke,ee,re*G,re/j.locationSize*ae*G,ie)}}else if(z!==void 0){const ee=z[D];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(j.location,ee);break;case 3:t.vertexAttrib3fv(j.location,ee);break;case 4:t.vertexAttrib4fv(j.location,ee);break;default:t.vertexAttrib1fv(j.location,ee)}}}}v()}function M(){R();for(const I in i){const P=i[I];for(const Y in P){const K=P[Y];for(const F in K){const B=K[F];for(const z in B)h(B[z].object),delete B[z];delete K[F]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const P=i[I.id];for(const Y in P){const K=P[Y];for(const F in K){const B=K[F];for(const z in B)h(B[z].object),delete B[z];delete K[F]}}delete i[I.id]}function A(I){for(const P in i){const Y=i[P];for(const K in Y){const F=Y[K];if(F[I.id]===void 0)continue;const B=F[I.id];for(const z in B)h(B[z].object),delete B[z];delete F[I.id]}}}function _(I){for(const P in i){const Y=i[P],K=I.isInstancedMesh===!0?I.id:0,F=Y[K];if(F!==void 0){for(const B in F){const z=F[B];for(const D in z)h(z[D].object),delete z[D];delete F[B]}delete Y[K],Object.keys(Y).length===0&&delete i[P]}}}function R(){N(),a=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:g,disableUnusedAttributes:v}}function iC(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!_)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(ze("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:M,samples:w}}function sC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Lr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const x=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const v=s?0:i,S=v*4;let y=d.clippingState||null;l.value=y,y=h(x,f,S,m);for(let M=0;M!==S;++M)y[M]=n[M];d.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,x){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,x!==!0||g===null){const d=m+E*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let S=0,y=m;S!==E;++S,y+=4)a.copy(p[S]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const dr=4,Wg=[.125,.215,.35,.446,.526,.582],Ur=20,aC=256,Ca=new L_,Xg=new et;let ad=null,od=0,ld=0,cd=!1;const oC=new V;class Yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=oC}=s;ad=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ts||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Vi,format:ti,colorSpace:vc,depthBuffer:!1},r=qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lC(s)),this._blurMaterial=uC(s,e,n),this._ggxMaterial=cC(s,e,n)}return r}_compileMaterial(e){const n=new si(new Xn,e);this._renderer.compile(n,Ca)}_sceneToCubeUV(e,n,i,r,s){const l=new Bn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Xg),p.toneMapping=Si,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new To,new Ec({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(Xg),d=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):y===1?(l.up.set(0,0,u[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,u[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const M=this._cubeSize;ws(r,y*M,S>2?M:0,M,M),p.setRenderTarget(r),d&&p.render(E,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ts||e.mapping===na;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ca)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),f=0+u*1.25,m=p*f,{_lodMax:x}=this,E=this._sizeLods[i],g=3*E*(i>x-dr?i-x+dr:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,ws(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(o,Ca),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,ws(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(o,Ca)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ur-1),E=s/x,g=isFinite(s)?1+Math.floor(h*E):Ur;g>Ur&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ur}`);const d=[];let v=0;for(let A=0;A<Ur;++A){const _=A/E,R=Math.exp(-_*_/2);d.push(R),A===0?v+=R:A<g&&(v+=2*R)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=x,f.mipInt.value=S-i;const y=this._sizeLods[r],M=3*y*(r>S-dr?r-S+dr:0),w=4*(this._cubeSize-y);ws(n,M,w,3*y,2*y),l.setRenderTarget(n),l.render(p,Ca)}}function lC(t){const e=[],n=[],i=[];let r=t;const s=t-dr+1+Wg.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-dr?l=Wg[a-t+dr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,E=3,g=2,d=1,v=new Float32Array(E*x*m),S=new Float32Array(g*x*m),y=new Float32Array(d*x*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,_=w>2?0:-1,R=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];v.set(R,E*x*w),S.set(f,g*x*w);const N=[w,w,w,w,w,w];y.set(N,d*x*w)}const M=new Xn;M.setAttribute("position",new bi(v,E)),M.setAttribute("uv",new bi(S,g)),M.setAttribute("faceIndex",new bi(y,d)),i.push(new si(M,null)),r>dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function qg(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cC(t,e,n){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function uC(t,e,n){const i=new Float32Array(Ur),r=new V(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function $g(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Kg(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}class F_ extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new N_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new To(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Fi});s.uniforms.tEquirect.value=n;const a=new si(r,s),o=n.minFilter;return n.minFilter===Hr&&(n.minFilter=nn),new mT(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function dC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Iu||m===Du)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const E=new F_(x.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",u),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,x=m===Iu||m===Du,E=m===ts||m===na;if(x||E){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Yg(t)),g=x?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return x&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new Yg(t)),g=x?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,m){return m===Iu?f.mapping=ts:m===Du&&(f.mapping=na),f}function l(f){let m=0;const x=6;for(let E=0;E<x;E++)f[E]!==void 0&&m++;return m===x}function u(f){const m=f.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function fC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ws("WebGLRenderer: "+i+" extension not supported."),r}}}function hC(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,x=p.attributes.position;let E=0;if(x===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let S=0,y=v.length;S<y;S+=3){const M=v[S+0],w=v[S+1],A=v[S+2];f.push(M,w,w,A,A,M)}}else{const v=x.array;E=x.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const M=S+0,w=S+1,A=S+2;f.push(M,w,w,A,A,M)}}const g=new(x.count>=65535?T_:w_)(f,1);g.version=E;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function pC(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let E=0;for(let g=0;g<m;g++)E+=f[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function mC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gC(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),E===!0&&(y=2),g===!0&&(y=3);let M=o.attributes.position.count*y,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*w*4*p),_=new E_(A,M,w,p);_.type=xi,_.needsUpdate=!0;const R=y*4;for(let I=0;I<p;I++){const P=d[I],Y=v[I],K=S[I],F=M*w*4*I;for(let B=0;B<P.count;B++){const z=B*R;x===!0&&(r.fromBufferAttribute(P,B),A[F+z+0]=r.x,A[F+z+1]=r.y,A[F+z+2]=r.z,A[F+z+3]=0),E===!0&&(r.fromBufferAttribute(Y,B),A[F+z+4]=r.x,A[F+z+5]=r.y,A[F+z+6]=r.z,A[F+z+7]=0),g===!0&&(r.fromBufferAttribute(K,B),A[F+z+8]=r.x,A[F+z+9]=r.y,A[F+z+10]=r.z,A[F+z+11]=K.itemSize===4?r.w:1)}}f={count:p,texture:_,size:new rt(M,w)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const E=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function xC(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const vC={[a_]:"LINEAR_TONE_MAPPING",[o_]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[c_]:"ACES_FILMIC_TONE_MAPPING",[d_]:"AGX_TONE_MAPPING",[f_]:"NEUTRAL_TONE_MAPPING",[u_]:"CUSTOM_TONE_MAPPING"};function _C(t,e,n,i,r,s){const a=new Ei(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new ia(e,n):void 0}),o=new Ei(e,n,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),l=new Xn;l.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new sn([0,2,0,0,2,0],2));const u=new fT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new si(l,u),p=new L_(-1,1,1,-1,0,1);let f=null,m=null,x=!1,E,g=null,d=[],v=!1;this.setSize=function(S,y){a.setSize(S,y),o.setSize(S,y);for(let M=0;M<d.length;M++){const w=d[M];w.setSize&&w.setSize(S,y)}},this.setEffects=function(S){d=S,v=d.length>0&&d[0].isRenderPass===!0;const y=a.width,M=a.height;for(let w=0;w<d.length;w++){const A=d[w];A.setSize&&A.setSize(y,M)}},this.begin=function(S,y){if(x||S.toneMapping===Si&&d.length===0)return!1;if(g=y,y!==null){const M=y.width,w=y.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return v===!1&&S.setRenderTarget(a),E=S.toneMapping,S.toneMapping=Si,!0},this.hasRenderPass=function(){return v},this.end=function(S,y){S.toneMapping=E,x=!0;let M=a,w=o;for(let A=0;A<d.length;A++){const _=d[A];if(_.enabled!==!1&&(_.render(S,w,M,y),_.needsSwap!==!1)){const R=M;M=w,w=R}}if(f!==S.outputColorSpace||m!==S.toneMapping){f=S.outputColorSpace,m=S.toneMapping,u.defines={},Je.getTransfer(f)===at&&(u.defines.SRGB_TRANSFER="");const A=vC[m];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(g),S.render(h,p),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const k_=new un,th=new ia(1,1),B_=new E_,z_=new Hw,H_=new N_,Zg=[],Jg=[],Qg=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function da(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zg[r];if(s===void 0&&(s=new Float32Array(r),Zg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kc(t,e){let n=Jg[e];n===void 0&&(n=new Int32Array(e),Jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function EC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function MC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;tx.set(i),t.uniformMatrix2fv(this.addr,!1,tx),zt(n,i)}}function wC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;ex.set(i),t.uniformMatrix3fv(this.addr,!1,ex),zt(n,i)}}function TC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Qg.set(i),t.uniformMatrix4fv(this.addr,!1,Qg),zt(n,i)}}function AC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function PC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function OC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(th.compareFunction=n.isReversedDepthBuffer()?hp:fp,s=th):s=k_,n.setTexture2D(e||s,r)}function UC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||z_,r)}function FC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||H_,r)}function kC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||B_,r)}function BC(t){switch(t){case 5126:return yC;case 35664:return SC;case 35665:return EC;case 35666:return bC;case 35674:return MC;case 35675:return wC;case 35676:return TC;case 5124:case 35670:return AC;case 35667:case 35671:return RC;case 35668:case 35672:return CC;case 35669:case 35673:return NC;case 5125:return PC;case 36294:return IC;case 36295:return DC;case 36296:return LC;case 35678:case 36198:case 36298:case 36306:case 35682:return OC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return kC}}function zC(t,e){t.uniform1fv(this.addr,e)}function HC(t,e){const n=da(e,this.size,2);t.uniform2fv(this.addr,n)}function GC(t,e){const n=da(e,this.size,3);t.uniform3fv(this.addr,n)}function VC(t,e){const n=da(e,this.size,4);t.uniform4fv(this.addr,n)}function jC(t,e){const n=da(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WC(t,e){const n=da(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XC(t,e){const n=da(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YC(t,e){t.uniform1iv(this.addr,e)}function qC(t,e){t.uniform2iv(this.addr,e)}function $C(t,e){t.uniform3iv(this.addr,e)}function KC(t,e){t.uniform4iv(this.addr,e)}function ZC(t,e){t.uniform1uiv(this.addr,e)}function JC(t,e){t.uniform2uiv(this.addr,e)}function QC(t,e){t.uniform3uiv(this.addr,e)}function eN(t,e){t.uniform4uiv(this.addr,e)}function tN(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=th:a=k_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function nN(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||z_,s[a])}function iN(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||H_,s[a])}function rN(t,e,n){const i=this.cache,r=e.length,s=Kc(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||B_,s[a])}function sN(t){switch(t){case 5126:return zC;case 35664:return HC;case 35665:return GC;case 35666:return VC;case 35674:return jC;case 35675:return WC;case 35676:return XC;case 5124:case 35670:return YC;case 35667:case 35671:return qC;case 35668:case 35672:return $C;case 35669:case 35673:return KC;case 5125:return ZC;case 36294:return JC;case 36295:return QC;case 36296:return eN;case 35678:case 36198:case 36298:case 36306:case 35682:return tN;case 35679:case 36299:case 36307:return nN;case 35680:case 36300:case 36308:case 36293:return iN;case 36289:case 36303:case 36311:case 36292:return rN}}class aN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BC(n.type)}}class oN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sN(n.type)}}class lN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function nx(t,e){t.seq.push(e),t.map[e.id]=e}function cN(t,e,n){const i=t.name,r=i.length;for(ud.lastIndex=0;;){const s=ud.exec(i),a=ud.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){nx(n,u===void 0?new aN(o,t,e):new oN(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new lN(o),nx(n,p)),n=p}}}class Bl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);cN(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ix(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uN=37297;let dN=0;function fN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const rx=new Ge;function hN(t){Je._getMatrix(rx,Je.workingColorSpace,t);const e=`mat3( ${rx.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case _c:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+fN(t.getShaderSource(e),o)}else return s}function pN(t,e){const n=hN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const mN={[a_]:"Linear",[o_]:"Reinhard",[l_]:"Cineon",[c_]:"ACESFilmic",[d_]:"AgX",[f_]:"Neutral",[u_]:"Custom"};function gN(t,e){const n=mN[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new V;function xN(){Je.getLuminanceCoefficients(vl);const t=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function _N(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ua(t){return t!==""}function ax(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SN=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(t){return t.replace(SN,bN)}const EN=new Map;function bN(t,e){let n=$e[e];if(n===void 0){const i=EN.get(e);if(i!==void 0)n=$e[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nh(n)}const MN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(t){return t.replace(MN,wN)}function wN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cx(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const TN={[Ll]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function AN(t){return TN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RN={[ts]:"ENVMAP_TYPE_CUBE",[na]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function CN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":RN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const NN={[na]:"ENVMAP_MODE_REFRACTION"};function PN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":NN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IN={[s_]:"ENVMAP_BLENDING_MULTIPLY",[yw]:"ENVMAP_BLENDING_MIX",[Sw]:"ENVMAP_BLENDING_ADD"};function DN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":IN[t.combine]||"ENVMAP_BLENDING_NONE"}function LN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ON(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=AN(n),u=CN(n),h=PN(n),p=DN(n),f=LN(n),m=vN(n),x=_N(s),E=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ua).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ua).join(`
`),d.length>0&&(d+=`
`)):(g=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),d=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?$e.tonemapping_pars_fragment:"",n.toneMapping!==Si?gN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,pN("linearToOutputTexel",n.outputColorSpace),xN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),a=nh(a),a=ax(a,n),a=ox(a,n),o=nh(o),o=ax(o,n),o=ox(o,n),a=lx(a),o=lx(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=v+g+a,y=v+d+o,M=ix(r,r.VERTEX_SHADER,S),w=ix(r,r.FRAGMENT_SHADER,y);r.attachShader(E,M),r.attachShader(E,w),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(I){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(E)||"",Y=r.getShaderInfoLog(M)||"",K=r.getShaderInfoLog(w)||"",F=P.trim(),B=Y.trim(),z=K.trim();let D=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,M,w);else{const Z=sx(r,M,"vertex"),ee=sx(r,w,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+Z+`
`+ee)}else F!==""?ze("WebGLProgram: Program Info Log:",F):(B===""||z==="")&&(j=!1);j&&(I.diagnostics={runnable:D,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:z,prefix:d}})}r.deleteShader(M),r.deleteShader(w),_=new Bl(r,E),R=yN(r,E)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(E,uN)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dN++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=M,this.fragmentShader=w,this}let UN=0;class FN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kN(e),n.set(e,i)),i}}class kN{constructor(e){this.id=UN++,this.code=e,this.usedTimes=0}}function BN(t){return t===ns||t===gc||t===xc}function zN(t,e,n,i,r,s){const a=new b_,o=new FN,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,R,N,I,P,Y){const K=I.fog,F=P.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=e.get(_.envMap||B,z),j=D&&D.mapping===Yc?D.image.height:null,Z=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=ee!==void 0?ee.length:0;let we=0;F.morphAttributes.position!==void 0&&(we=1),F.morphAttributes.normal!==void 0&&(we=2),F.morphAttributes.color!==void 0&&(we=3);let Ve,ke,G,ie;if(Z){const Ce=pi[Z];Ve=Ce.vertexShader,ke=Ce.fragmentShader}else{Ve=_.vertexShader,ke=_.fragmentShader;const Ce=o.getVertexShaderStage(_),Tt=o.getFragmentShaderStage(_);o.update(_,Ce,Tt),G=Ce.id,ie=Tt.id}const ae=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),He=P.isInstancedMesh===!0,Oe=P.isBatchedMesh===!0,je=!!_.map,Ye=!!_.matcap,fe=!!D,le=!!_.aoMap,ue=!!_.lightMap,qe=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,ht=!!_.displacementMap,Lt=!!_.emissiveMap,yt=!!_.metalnessMap,pt=!!_.roughnessMap,U=_.anisotropy>0,hn=_.clearcoat>0,st=_.dispersion>0,C=_.iridescence>0,b=_.sheen>0,H=_.transmission>0,q=U&&!!_.anisotropyMap,J=hn&&!!_.clearcoatMap,de=hn&&!!_.clearcoatNormalMap,pe=hn&&!!_.clearcoatRoughnessMap,Q=C&&!!_.iridescenceMap,ne=C&&!!_.iridescenceThicknessMap,me=b&&!!_.sheenColorMap,Ie=b&&!!_.sheenRoughnessMap,ve=!!_.specularMap,ge=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Be=H&&!!_.transmissionMap,We=H&&!!_.thicknessMap,O=!!_.gradientMap,he=!!_.alphaMap,te=_.alphaTest>0,xe=!!_.alphaHash,be=!!_.extensions;let se=Si;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(se=t.toneMapping);const Pe={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:ke,defines:_.defines,customVertexShaderID:G,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&P._colorsTexture!==null,instancing:He,instancingColor:He&&P.instanceColor!==null,instancingMorph:He&&P.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:je,matcap:Ye,envMap:fe,envMapMode:fe&&D.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:ue,bumpMap:qe,normalMap:ct,displacementMap:ht,emissiveMap:Lt,normalMapObjectSpace:ct&&_.normalMapType===Mw,normalMapTangentSpace:ct&&_.normalMapType===gg,packedNormalMap:ct&&_.normalMapType===gg&&BN(_.normalMap.format),metalnessMap:yt,roughnessMap:pt,anisotropy:U,anisotropyMap:q,clearcoat:hn,clearcoatMap:J,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,dispersion:st,iridescence:C,iridescenceMap:Q,iridescenceThicknessMap:ne,sheen:b,sheenColorMap:me,sheenRoughnessMap:Ie,specularMap:ve,specularColorMap:ge,specularIntensityMap:Ue,transmission:H,transmissionMap:Be,thicknessMap:We,gradientMap:O,opaque:_.transparent===!1&&_.blending===js&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:te,alphaHash:xe,combine:_.combine,mapUv:je&&x(_.map.channel),aoMapUv:le&&x(_.aoMap.channel),lightMapUv:ue&&x(_.lightMap.channel),bumpMapUv:qe&&x(_.bumpMap.channel),normalMapUv:ct&&x(_.normalMap.channel),displacementMapUv:ht&&x(_.displacementMap.channel),emissiveMapUv:Lt&&x(_.emissiveMap.channel),metalnessMapUv:yt&&x(_.metalnessMap.channel),roughnessMapUv:pt&&x(_.roughnessMap.channel),anisotropyMapUv:q&&x(_.anisotropyMap.channel),clearcoatMapUv:J&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(_.sheenRoughnessMap.channel),specularMapUv:ve&&x(_.specularMap.channel),specularColorMapUv:ge&&x(_.specularColorMap.channel),specularIntensityMapUv:Ue&&x(_.specularIntensityMap.channel),transmissionMapUv:Be&&x(_.transmissionMap.channel),thicknessMapUv:We&&x(_.thicknessMap.channel),alphaMapUv:he&&x(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ct||U),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(je||he),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Fe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:we,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:je&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===at,decodeVideoTextureEmissive:Lt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gi,flipSided:_.side===Sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:be&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&_.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)R.push(N),R.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(d(R,_),v(R,_),R.push(t.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function d(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function v(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const R=m[_.type];let N;if(R){const I=pi[R];N=cT.clone(I.uniforms)}else N=_.uniforms;return N}function y(_,R){let N=h.get(R);return N!==void 0?++N.usedTimes:(N=new ON(t,R,_,r),u.push(N),h.set(R,N)),N}function M(_){if(--_.usedTimes===0){const R=u.indexOf(_);u[R]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:S,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:A}}function HN(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function GN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ux(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,x,E,g,d){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:d},t[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=x,v.materialVariant=a(f),v.groupOrder=E,v.renderOrder=f.renderOrder,v.z=g,v.group=d),e++,v}function l(f,m,x,E,g,d){const v=o(f,m,x,E,g,d);x.transmission>0?i.push(v):x.transparent===!0?r.push(v):n.push(v)}function u(f,m,x,E,g,d){const v=o(f,m,x,E,g,d);x.transmission>0?i.unshift(v):x.transparent===!0?r.unshift(v):n.unshift(v)}function h(f,m,x){n.length>1&&n.sort(f||GN),i.length>1&&i.sort(m||ux),r.length>1&&r.sort(m||ux),x&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let f=e,m=t.length;f<m;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function VN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new dx,t.set(i,[a])):r>=s.length?(a=new dx,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function jN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new et};break;case"SpotLight":n={position:new V,direction:new V,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function WN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XN=0;function YN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qN(t){const e=new jN,n=WN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Dt,a=new Dt;function o(u){let h=0,p=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,x=0,E=0,g=0,d=0,v=0,S=0,y=0,M=0,w=0,A=0;u.sort(YN);for(let R=0,N=u.length;R<N;R++){const I=u[R],P=I.color,Y=I.intensity,K=I.distance;let F=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ns?F=I.shadow.map.texture:F=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=P.r*Y,p+=P.g*Y,f+=P.b*Y;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],Y);A++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,D=n.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=I.shadow.matrix,v++}i.directional[m]=B,m++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(P).multiplyScalar(Y),B.distance=K,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[E]=B;const z=I.shadow;if(I.map&&(i.spotLightMap[M]=I.map,M++,z.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[E]=z.matrix,I.castShadow){const D=n.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,i.spotShadow[E]=D,i.spotShadowMap[E]=F,y++}E++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(P).multiplyScalar(Y),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=B,g++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const z=I.shadow,D=n.get(I);D.shadowIntensity=z.intensity,D.shadowBias=z.bias,D.shadowNormalBias=z.normalBias,D.shadowRadius=z.radius,D.shadowMapSize=z.mapSize,D.shadowCameraNear=z.camera.near,D.shadowCameraFar=z.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=F,i.pointShadowMatrix[x]=I.shadow.matrix,S++}i.point[x]=B,x++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(Y),B.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[d]=B,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==E||_.rectAreaLength!==g||_.hemiLength!==d||_.numDirectionalShadows!==v||_.numPointShadows!==S||_.numSpotShadows!==y||_.numSpotMaps!==M||_.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+M-w,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,_.directionalLength=m,_.pointLength=x,_.spotLength=E,_.rectAreaLength=g,_.hemiLength=d,_.numDirectionalShadows=v,_.numPointShadows=S,_.numSpotShadows=y,_.numSpotMaps=M,_.numLightProbes=A,i.version=XN++)}function l(u,h){let p=0,f=0,m=0,x=0,E=0;const g=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const S=u[d];if(S.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(S.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function fx(t){const e=new qN(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function $N(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fx(t),e.set(r,[o])):s>=a.length?(o=new fx(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const KN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZN=`uniform sampler2D shadow_pass;
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
}`,JN=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],QN=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],hx=new Dt,Na=new V,dd=new V;function e2(t,e,n){let i=new R_;const r=new rt,s=new rt,a=new Ct,o=new hT,l=new pT,u={},h=n.maxTextureSize,p={[Er]:Sn,[Sn]:Er,[gi]:gi},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:KN,fragmentShader:ZN}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Xn;x.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new si(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let d=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===tw&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ll);const R=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Fi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const Y=d!==this.type;Y&&A.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(F=>F.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,F=w.length;K<F;K++){const B=w[K],z=B.shadow;if(z===void 0){ze("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const D=z.getFrameExtents();r.multiply(D),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,z.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||Y===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Oa){if(B.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ei(r.x,r.y,{format:ns,type:Vi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new ia(r.x,r.y,xi),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=ji,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt}else B.isPointLight?(z.map=new F_(r.x),z.map.depthTexture=new oT(r.x,Mi)):(z.map=new Ei(r.x,r.y),z.map.depthTexture=new ia(r.x,r.y,Mi)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=ji,this.type===Ll?(z.map.depthTexture.compareFunction=j?hp:fp,z.map.depthTexture.minFilter=nn,z.map.depthTexture.magFilter=nn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Xt,z.map.depthTexture.magFilter=Xt);z.camera.updateProjectionMatrix()}const Z=z.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<Z;ee++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(z.map),t.clear());const re=z.getViewport(ee);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),P.viewport(a)}if(B.isPointLight){const re=z.camera,we=z.matrix,Ve=B.distance||re.far;Ve!==re.far&&(re.far=Ve,re.updateProjectionMatrix()),Na.setFromMatrixPosition(B.matrixWorld),re.position.copy(Na),dd.copy(re.position),dd.add(JN[ee]),re.up.copy(QN[ee]),re.lookAt(dd),re.updateMatrixWorld(),we.makeTranslation(-Na.x,-Na.y,-Na.z),hx.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),z._frustum.setFromProjectionMatrix(hx,re.coordinateSystem,re.reversedDepth)}else z.updateMatrices(B);i=z.getFrustum(),y(A,_,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Oa&&v(z,_),z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(R,N,I)};function v(w,A){const _=e.update(E);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ei(r.x,r.y,{format:ns,type:Vi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,_,f,E,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,_,m,E,null)}function S(w,A,_,R){let N=null;const I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)N=I;else if(N=_.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const P=N.uuid,Y=A.uuid;let K=u[P];K===void 0&&(K={},u[P]=K);let F=K[Y];F===void 0&&(F=N.clone(),K[Y]=F,A.addEventListener("dispose",M)),N=F}if(N.visible=A.visible,N.wireframe=A.wireframe,R===Oa?N.side=A.shadowSide!==null?A.shadowSide:A.side:N.side=A.shadowSide!==null?A.shadowSide:p[A.side],N.alphaMap=A.alphaMap,N.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,N.map=A.map,N.clipShadows=A.clipShadows,N.clippingPlanes=A.clippingPlanes,N.clipIntersection=A.clipIntersection,N.displacementMap=A.displacementMap,N.displacementScale=A.displacementScale,N.displacementBias=A.displacementBias,N.wireframeLinewidth=A.wireframeLinewidth,N.linewidth=A.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const P=t.properties.get(N);P.light=_}return N}function y(w,A,_,R,N){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Oa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const Y=e.update(w),K=w.material;if(Array.isArray(K)){const F=Y.groups;for(let B=0,z=F.length;B<z;B++){const D=F[B],j=K[D.materialIndex];if(j&&j.visible){const Z=S(w,j,R,N);w.onBeforeShadow(t,w,A,_,Y,Z,D),t.renderBufferDirect(_,null,Y,Z,w,D),w.onAfterShadow(t,w,A,_,Y,Z,D)}}}else if(K.visible){const F=S(w,K,R,N);w.onBeforeShadow(t,w,A,_,Y,F,null),t.renderBufferDirect(_,null,Y,F,w,null),w.onAfterShadow(t,w,A,_,Y,F,null)}}const P=w.children;for(let Y=0,K=P.length;Y<K;Y++)y(P[Y],A,_,R,N)}function M(w){w.target.removeEventListener("dispose",M);for(const _ in u){const R=u[_],N=w.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function t2(t,e){function n(){let O=!1;const he=new Ct;let te=null;const xe=new Ct(0,0,0,0);return{setMask:function(be){te!==be&&!O&&(t.colorMask(be,be,be,be),te=be)},setLocked:function(be){O=be},setClear:function(be,se,Pe,Ce,Tt){Tt===!0&&(be*=Ce,se*=Ce,Pe*=Ce),he.set(be,se,Pe,Ce),xe.equals(he)===!1&&(t.clearColor(be,se,Pe,Ce),xe.copy(he))},reset:function(){O=!1,te=null,xe.set(-1,0,0,0)}}}function i(){let O=!1,he=!1,te=null,xe=null,be=null;return{setReversed:function(se){if(he!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=se;const Ce=be;be=null,this.setClear(Ce)}},getReversed:function(){return he},setTest:function(se){se?ae(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(se){te!==se&&!O&&(t.depthMask(se),te=se)},setFunc:function(se){if(he&&(se=Lw[se]),xe!==se){switch(se){case mf:t.depthFunc(t.NEVER);break;case gf:t.depthFunc(t.ALWAYS);break;case xf:t.depthFunc(t.LESS);break;case ta:t.depthFunc(t.LEQUAL);break;case vf:t.depthFunc(t.EQUAL);break;case _f:t.depthFunc(t.GEQUAL);break;case yf:t.depthFunc(t.GREATER);break;case Sf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=se}},setLocked:function(se){O=se},setClear:function(se){be!==se&&(be=se,he&&(se=1-se),t.clearDepth(se))},reset:function(){O=!1,te=null,xe=null,be=null,he=!1}}}function r(){let O=!1,he=null,te=null,xe=null,be=null,se=null,Pe=null,Ce=null,Tt=null;return{setTest:function(mt){O||(mt?ae(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(mt){he!==mt&&!O&&(t.stencilMask(mt),he=mt)},setFunc:function(mt,oi,li){(te!==mt||xe!==oi||be!==li)&&(t.stencilFunc(mt,oi,li),te=mt,xe=oi,be=li)},setOp:function(mt,oi,li){(se!==mt||Pe!==oi||Ce!==li)&&(t.stencilOp(mt,oi,li),se=mt,Pe=oi,Ce=li)},setLocked:function(mt){O=mt},setClear:function(mt){Tt!==mt&&(t.clearStencil(mt),Tt=mt)},reset:function(){O=!1,he=null,te=null,xe=null,be=null,se=null,Pe=null,Ce=null,Tt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},p={},f={},m=new WeakMap,x=[],E=null,g=!1,d=null,v=null,S=null,y=null,M=null,w=null,A=null,_=new et(0,0,0),R=0,N=!1,I=null,P=null,Y=null,K=null,F=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,D=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=D>=2);let Z=null,ee={};const re=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),Ve=new Ct().fromArray(re),ke=new Ct().fromArray(we);function G(O,he,te,xe){const be=new Uint8Array(4),se=t.createTexture();t.bindTexture(O,se),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<te;Pe++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(he+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return se}const ie={};ie[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),a.setFunc(ta),qe(!1),ct(fg),ae(t.CULL_FACE),le(Fi);function ae(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function Fe(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function He(O,he){return f[O]!==he?(t.bindFramebuffer(O,he),f[O]=he,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(O,he){let te=x,xe=!1;if(O){te=m.get(he),te===void 0&&(te=[],m.set(he,te));const be=O.textures;if(te.length!==be.length||te[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Pe=be.length;se<Pe;se++)te[se]=t.COLOR_ATTACHMENT0+se;te.length=be.length,xe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,xe=!0);xe&&t.drawBuffers(te)}function je(O){return E!==O?(t.useProgram(O),E=O,!0):!1}const Ye={[Or]:t.FUNC_ADD,[iw]:t.FUNC_SUBTRACT,[rw]:t.FUNC_REVERSE_SUBTRACT};Ye[sw]=t.MIN,Ye[aw]=t.MAX;const fe={[ow]:t.ZERO,[lw]:t.ONE,[cw]:t.SRC_COLOR,[hf]:t.SRC_ALPHA,[mw]:t.SRC_ALPHA_SATURATE,[hw]:t.DST_COLOR,[dw]:t.DST_ALPHA,[uw]:t.ONE_MINUS_SRC_COLOR,[pf]:t.ONE_MINUS_SRC_ALPHA,[pw]:t.ONE_MINUS_DST_COLOR,[fw]:t.ONE_MINUS_DST_ALPHA,[gw]:t.CONSTANT_COLOR,[xw]:t.ONE_MINUS_CONSTANT_COLOR,[vw]:t.CONSTANT_ALPHA,[_w]:t.ONE_MINUS_CONSTANT_ALPHA};function le(O,he,te,xe,be,se,Pe,Ce,Tt,mt){if(O===Fi){g===!0&&(Fe(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),O!==nw){if(O!==d||mt!==N){if((v!==Or||M!==Or)&&(t.blendEquation(t.FUNC_ADD),v=Or,M=Or),mt)switch(O){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hg:t.blendFunc(t.ONE,t.ONE);break;case pg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",O);break}else switch(O){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hg:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pg:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mg:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",O);break}S=null,y=null,w=null,A=null,_.set(0,0,0),R=0,d=O,N=mt}return}be=be||he,se=se||te,Pe=Pe||xe,(he!==v||be!==M)&&(t.blendEquationSeparate(Ye[he],Ye[be]),v=he,M=be),(te!==S||xe!==y||se!==w||Pe!==A)&&(t.blendFuncSeparate(fe[te],fe[xe],fe[se],fe[Pe]),S=te,y=xe,w=se,A=Pe),(Ce.equals(_)===!1||Tt!==R)&&(t.blendColor(Ce.r,Ce.g,Ce.b,Tt),_.copy(Ce),R=Tt),d=O,N=!1}function ue(O,he){O.side===gi?Fe(t.CULL_FACE):ae(t.CULL_FACE);let te=O.side===Sn;he&&(te=!te),qe(te),O.blending===js&&O.transparent===!1?le(Fi):le(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const xe=O.stencilWrite;o.setTest(xe),xe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function ct(O){O!==QM?(ae(t.CULL_FACE),O!==P&&(O===fg?t.cullFace(t.BACK):O===ew?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),P=O}function ht(O){O!==Y&&(z&&t.lineWidth(O),Y=O)}function Lt(O,he,te){O?(ae(t.POLYGON_OFFSET_FILL),(K!==he||F!==te)&&(K=he,F=te,a.getReversed()&&(he=-he),t.polygonOffset(he,te))):Fe(t.POLYGON_OFFSET_FILL)}function yt(O){O?ae(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function pt(O){O===void 0&&(O=t.TEXTURE0+B-1),Z!==O&&(t.activeTexture(O),Z=O)}function U(O,he,te){te===void 0&&(Z===null?te=t.TEXTURE0+B-1:te=Z);let xe=ee[te];xe===void 0&&(xe={type:void 0,texture:void 0},ee[te]=xe),(xe.type!==O||xe.texture!==he)&&(Z!==te&&(t.activeTexture(te),Z=te),t.bindTexture(O,he||ie[O]),xe.type=O,xe.texture=he)}function hn(){const O=ee[Z];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function st(){try{t.compressedTexImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function b(){try{t.texSubImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function H(){try{t.texSubImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function de(){try{t.texStorage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function pe(){try{t.texStorage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function Q(){try{t.texImage2D(...arguments)}catch(O){nt("WebGLState:",O)}}function ne(){try{t.texImage3D(...arguments)}catch(O){nt("WebGLState:",O)}}function me(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function Ie(O,he){p[O]!==he&&(t.pixelStorei(O,he),p[O]=he)}function ve(O){Ve.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),Ve.copy(O))}function ge(O){ke.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ke.copy(O))}function Ue(O,he){let te=u.get(he);te===void 0&&(te=new WeakMap,u.set(he,te));let xe=te.get(O);xe===void 0&&(xe=t.getUniformBlockIndex(he,O.name),te.set(O,xe))}function Be(O,he){const xe=u.get(he).get(O);l.get(he)!==xe&&(t.uniformBlockBinding(he,xe,O.__bindingPointIndex),l.set(he,xe))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},Z=null,ee={},f={},m=new WeakMap,x=[],E=null,g=!1,d=null,v=null,S=null,y=null,M=null,w=null,A=null,_=new et(0,0,0),R=0,N=!1,I=null,P=null,Y=null,K=null,F=null,Ve.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Fe,bindFramebuffer:He,drawBuffers:Oe,useProgram:je,setBlending:le,setMaterial:ue,setFlipSided:qe,setCullFace:ct,setLineWidth:ht,setPolygonOffset:Lt,setScissorTest:yt,activeTexture:pt,bindTexture:U,unbindTexture:hn,compressedTexImage2D:st,compressedTexImage3D:C,texImage2D:Q,texImage3D:ne,pixelStorei:Ie,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:de,texStorage3D:pe,texSubImage2D:b,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:ve,viewport:ge,reset:We}}function n2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new rt,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,b){return x?new OffscreenCanvas(C,b):Sc("canvas")}function g(C,b,H){let q=1;const J=st(C);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(q*J.width),pe=Math.floor(q*J.height);f===void 0&&(f=E(de,pe));const Q=b?E(de,pe):f;return Q.width=de,Q.height=pe,Q.getContext("2d").drawImage(C,0,0,de,pe),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+de+"x"+pe+")."),Q}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function d(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(C,b,H,q,J,de=!1){if(C!==null){if(t[C]!==void 0)return t[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;q&&(pe=e.get("EXT_texture_norm16"),pe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===t.RED&&(H===t.FLOAT&&(Q=t.R32F),H===t.HALF_FLOAT&&(Q=t.R16F),H===t.UNSIGNED_BYTE&&(Q=t.R8),H===t.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),H===t.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),b===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.R8UI),H===t.UNSIGNED_SHORT&&(Q=t.R16UI),H===t.UNSIGNED_INT&&(Q=t.R32UI),H===t.BYTE&&(Q=t.R8I),H===t.SHORT&&(Q=t.R16I),H===t.INT&&(Q=t.R32I)),b===t.RG&&(H===t.FLOAT&&(Q=t.RG32F),H===t.HALF_FLOAT&&(Q=t.RG16F),H===t.UNSIGNED_BYTE&&(Q=t.RG8),H===t.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),H===t.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),b===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RG8UI),H===t.UNSIGNED_SHORT&&(Q=t.RG16UI),H===t.UNSIGNED_INT&&(Q=t.RG32UI),H===t.BYTE&&(Q=t.RG8I),H===t.SHORT&&(Q=t.RG16I),H===t.INT&&(Q=t.RG32I)),b===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),H===t.UNSIGNED_INT&&(Q=t.RGB32UI),H===t.BYTE&&(Q=t.RGB8I),H===t.SHORT&&(Q=t.RGB16I),H===t.INT&&(Q=t.RGB32I)),b===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),H===t.UNSIGNED_INT&&(Q=t.RGBA32UI),H===t.BYTE&&(Q=t.RGBA8I),H===t.SHORT&&(Q=t.RGBA16I),H===t.INT&&(Q=t.RGBA32I)),b===t.RGB&&(H===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),H===t.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),b===t.RGBA){const ne=de?_c:Je.getTransfer(J);H===t.FLOAT&&(Q=t.RGBA32F),H===t.HALF_FLOAT&&(Q=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Q=ne===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),H===t.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(C,b){let H;return C?b===null||b===Mi||b===ho?H=t.DEPTH24_STENCIL8:b===xi?H=t.DEPTH32F_STENCIL8:b===fo&&(H=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mi||b===ho?H=t.DEPTH_COMPONENT24:b===xi?H=t.DEPTH_COMPONENT32F:b===fo&&(H=t.DEPTH_COMPONENT16),H}function w(C,b){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){const b=C.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&p.delete(b)}function _(C){const b=C.target;b.removeEventListener("dispose",_),I(b)}function R(C){const b=i.get(C);if(b.__webglInit===void 0)return;const H=C.source,q=m.get(H);if(q){const J=q[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(C),Object.keys(q).length===0&&m.delete(H)}i.remove(C)}function N(C){const b=i.get(C);t.deleteTexture(b.__webglTexture);const H=C.source,q=m.get(H);delete q[b.__cacheKey],a.memory.textures--}function I(C){const b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let J=0;J<b.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(b.__webglFramebuffer[q][J]);else t.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)t.deleteFramebuffer(b.__webglFramebuffer[q]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=C.textures;for(let q=0,J=H.length;q<J;q++){const de=i.get(H[q]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),a.memory.textures--),i.remove(H[q])}i.remove(C)}let P=0;function Y(){P=0}function K(){return P}function F(C){P=C}function B(){const C=P;return C>=r.maxTextures&&ze("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function z(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function D(C,b){const H=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const q=C.image;if(q===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+b)}function j(C,b){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Fe(H,C,b);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+b)}function Z(C,b){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Fe(H,C,b);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+b)}function ee(C,b){const H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){He(H,C,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+b)}const re={[Ef]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[bf]:t.MIRRORED_REPEAT},we={[Xt]:t.NEAREST,[Ew]:t.NEAREST_MIPMAP_NEAREST,[qo]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Lu]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},Ve={[ww]:t.NEVER,[Nw]:t.ALWAYS,[Tw]:t.LESS,[fp]:t.LEQUAL,[Aw]:t.EQUAL,[hp]:t.GEQUAL,[Rw]:t.GREATER,[Cw]:t.NOTEQUAL};function ke(C,b){if(b.type===xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===Lu||b.magFilter===qo||b.magFilter===Hr||b.minFilter===nn||b.minFilter===Lu||b.minFilter===qo||b.minFilter===Hr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,re[b.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,re[b.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,re[b.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,we[b.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,we[b.minFilter]),b.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xt||b.minFilter!==qo&&b.minFilter!==Hr||b.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function G(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));const q=b.source;let J=m.get(q);J===void 0&&(J={},m.set(q,J));const de=z(b);if(de!==C.__cacheKey){J[de]===void 0&&(J[de]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[de].usedTimes++;const pe=J[C.__cacheKey];pe!==void 0&&(J[C.__cacheKey].usedTimes--,pe.usedTimes===0&&N(b)),C.__cacheKey=de,C.__webglTexture=J[de].texture}return H}function ie(C,b,H){return Math.floor(Math.floor(C/H)/b)}function ae(C,b,H,q){const de=C.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,H,q,b.data);else{de.sort((Ie,ve)=>Ie.start-ve.start);let pe=0;for(let Ie=1;Ie<de.length;Ie++){const ve=de[pe],ge=de[Ie],Ue=ve.start+ve.count,Be=ie(ge.start,b.width,4),We=ie(ve.start,b.width,4);ge.start<=Ue+1&&Be===We&&ie(ge.start+ge.count-1,b.width,4)===Be?ve.count=Math.max(ve.count,ge.start+ge.count-ve.start):(++pe,de[pe]=ge)}de.length=pe+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let Ie=0,ve=de.length;Ie<ve;Ie++){const ge=de[Ie],Ue=Math.floor(ge.start/4),Be=Math.ceil(ge.count/4),We=Ue%b.width,O=Math.floor(Ue/b.width),he=Be,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,We,O,he,te,H,q,b.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function Fe(C,b,H){let q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=t.TEXTURE_3D);const J=G(C,b),de=b.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+H);const pe=i.get(de);if(de.version!==pe.__version||J===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const te=Je.getPrimaries(Je.workingColorSpace),xe=b.colorSpace===lr?null:Je.getPrimaries(b.colorSpace),be=b.colorSpace===lr||te===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let ne=g(b.image,!1,r.maxTextureSize);ne=hn(b,ne);const me=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type);let ve=y(b.internalFormat,me,Ie,b.normalized,b.colorSpace,b.isVideoTexture);ke(q,b);let ge;const Ue=b.mipmaps,Be=b.isVideoTexture!==!0,We=pe.__version===void 0||J===!0,O=de.dataReady,he=w(b,ne);if(b.isDepthTexture)ve=M(b.format===Gr,b.type),We&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ve,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,Ie,null));else if(b.isDataTexture)if(Ue.length>0){Be&&We&&n.texStorage2D(t.TEXTURE_2D,he,ve,Ue[0].width,Ue[0].height);for(let te=0,xe=Ue.length;te<xe;te++)ge=Ue[te],Be?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Ie,ge.data);b.generateMipmaps=!1}else Be?(We&&n.texStorage2D(t.TEXTURE_2D,he,ve,ne.width,ne.height),O&&ae(b,ne,me,Ie)):n.texImage2D(t.TEXTURE_2D,0,ve,ne.width,ne.height,0,me,Ie,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ve,Ue[0].width,Ue[0].height,ne.depth);for(let te=0,xe=Ue.length;te<xe;te++)if(ge=Ue[te],b.format!==ti)if(me!==null)if(Be){if(O)if(b.layerUpdates.size>0){const be=jg(ge.width,ge.height,b.format,b.type);for(const se of b.layerUpdates){const Pe=ge.data.subarray(se*be/ge.data.BYTES_PER_ELEMENT,(se+1)*be/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,se,ge.width,ge.height,1,me,Pe)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,ge.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ge.width,ge.height,ne.depth,me,Ie,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,ve,ge.width,ge.height,ne.depth,0,me,Ie,ge.data)}else{Be&&We&&n.texStorage2D(t.TEXTURE_2D,he,ve,Ue[0].width,Ue[0].height);for(let te=0,xe=Ue.length;te<xe;te++)ge=Ue[te],b.format!==ti?me!==null?Be?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ge.width,ge.height,me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,te,ve,ge.width,ge.height,0,ge.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ge.width,ge.height,me,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,te,ve,ge.width,ge.height,0,me,Ie,ge.data)}else if(b.isDataArrayTexture)if(Be){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,ve,ne.width,ne.height,ne.depth),O)if(b.layerUpdates.size>0){const te=jg(ne.width,ne.height,b.format,b.type);for(const xe of b.layerUpdates){const be=ne.data.subarray(xe*te/ne.data.BYTES_PER_ELEMENT,(xe+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,me,Ie,be)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Ie,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,ne.width,ne.height,ne.depth,0,me,Ie,ne.data);else if(b.isData3DTexture)Be?(We&&n.texStorage3D(t.TEXTURE_3D,he,ve,ne.width,ne.height,ne.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Ie,ne.data)):n.texImage3D(t.TEXTURE_3D,0,ve,ne.width,ne.height,ne.depth,0,me,Ie,ne.data);else if(b.isFramebufferTexture){if(We)if(Be)n.texStorage2D(t.TEXTURE_2D,he,ve,ne.width,ne.height);else{let te=ne.width,xe=ne.height;for(let be=0;be<he;be++)n.texImage2D(t.TEXTURE_2D,be,ve,te,xe,0,me,Ie,null),te>>=1,xe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),p.add(b),te.onpaint=xe=>{const be=xe.changedElements;for(const se of p)be.includes(se.image)&&(se.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const be=t.RGBA,se=t.RGBA,Pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,be,se,Pe,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&We){const te=st(Ue[0]);n.texStorage2D(t.TEXTURE_2D,he,ve,te.width,te.height)}for(let te=0,xe=Ue.length;te<xe;te++)ge=Ue[te],Be?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,me,Ie,ge):n.texImage2D(t.TEXTURE_2D,te,ve,me,Ie,ge);b.generateMipmaps=!1}else if(Be){if(We){const te=st(ne);n.texStorage2D(t.TEXTURE_2D,he,ve,te.width,te.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ie,ne)}else n.texImage2D(t.TEXTURE_2D,0,ve,me,Ie,ne);d(b)&&v(q),pe.__version=de.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function He(C,b,H){if(b.image.length!==6)return;const q=G(C,b),J=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+H);const de=i.get(J);if(J.version!==de.__version||q===!0){n.activeTexture(t.TEXTURE0+H);const pe=Je.getPrimaries(Je.workingColorSpace),Q=b.colorSpace===lr?null:Je.getPrimaries(b.colorSpace),ne=b.colorSpace===lr||pe===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const me=b.isCompressedTexture||b.image[0].isCompressedTexture,Ie=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let se=0;se<6;se++)!me&&!Ie?ve[se]=g(b.image[se],!0,r.maxCubemapSize):ve[se]=Ie?b.image[se].image:b.image[se],ve[se]=hn(b,ve[se]);const ge=ve[0],Ue=s.convert(b.format,b.colorSpace),Be=s.convert(b.type),We=y(b.internalFormat,Ue,Be,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,he=de.__version===void 0||q===!0,te=J.dataReady;let xe=w(b,ge);ke(t.TEXTURE_CUBE_MAP,b);let be;if(me){O&&he&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,We,ge.width,ge.height);for(let se=0;se<6;se++){be=ve[se].mipmaps;for(let Pe=0;Pe<be.length;Pe++){const Ce=be[Pe];b.format!==ti?Ue!==null?O?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ce.width,Ce.height,Ue,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,We,Ce.width,Ce.height,0,Ce.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Ce.width,Ce.height,Ue,Be,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,We,Ce.width,Ce.height,0,Ue,Be,Ce.data)}}}else{if(be=b.mipmaps,O&&he){be.length>0&&xe++;const se=st(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,We,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ve[se].width,ve[se].height,Ue,Be,ve[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,ve[se].width,ve[se].height,0,Ue,Be,ve[se].data);for(let Pe=0;Pe<be.length;Pe++){const Tt=be[Pe].image[se].image;O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Tt.width,Tt.height,Ue,Be,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,We,Tt.width,Tt.height,0,Ue,Be,Tt.data)}}else{O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,Be,ve[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,We,Ue,Be,ve[se]);for(let Pe=0;Pe<be.length;Pe++){const Ce=be[Pe];O?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Ue,Be,Ce.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,We,Ue,Be,Ce.image[se])}}}d(b)&&v(t.TEXTURE_CUBE_MAP),de.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Oe(C,b,H,q,J,de){const pe=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),ne=y(H.internalFormat,pe,Q,H.normalized,H.colorSpace),me=i.get(b),Ie=i.get(H);if(Ie.__renderTarget=b,!me.__hasExternalTextures){const ve=Math.max(1,b.width>>de),ge=Math.max(1,b.height>>de);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,de,ne,ve,ge,b.depth,0,pe,Q,null):n.texImage2D(J,de,ne,ve,ge,0,pe,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),pt(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,Ie.__webglTexture,0,yt(b)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,Ie.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(C,b,H){if(t.bindRenderbuffer(t.RENDERBUFFER,C),b.depthBuffer){const q=b.depthTexture,J=q&&q.isDepthTexture?q.type:null,de=M(b.stencilBuffer,J),pe=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pt(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(b),de,b.width,b.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(b),de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,C)}else{const q=b.textures;for(let J=0;J<q.length;J++){const de=q[J],pe=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),ne=y(de.internalFormat,pe,Q,de.normalized,de.colorSpace);pt(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(b),ne,b.width,b.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(b),ne,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ne,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ye(C,b,H){const q=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(b.depthTexture);if(J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ke(t.TEXTURE_CUBE_MAP,b.depthTexture);const me=s.convert(b.depthTexture.format),Ie=s.convert(b.depthTexture.type);let ve;b.depthTexture.format===ji?ve=t.DEPTH_COMPONENT24:b.depthTexture.format===Gr&&(ve=t.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,b.width,b.height,0,me,Ie,null)}}else D(b.depthTexture,0);const de=J.__webglTexture,pe=yt(b),Q=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ne=b.depthTexture.format===Gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===ji)pt(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,de,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,de,0);else if(b.depthTexture.format===Gr)pt(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,de,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(C){const b=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Ye(b.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?Ye(b.__webglFramebuffer[0],C,0):Ye(b.__webglFramebuffer,C,0)}else if(H){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=t.createRenderbuffer(),je(b.__webglDepthbuffer[q],C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,de)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),je(b.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(C,b,H){const q=i.get(C);b!==void 0&&Oe(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&fe(C)}function ue(C){const b=C.texture,H=i.get(C),q=i.get(b);C.addEventListener("dispose",_);const J=C.textures,de=C.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=b.version,a.memory.textures++),de){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let ne=0;ne<b.mipmaps.length;ne++)H.__webglFramebuffer[Q][ne]=t.createFramebuffer()}else H.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)H.__webglFramebuffer[Q]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(pe)for(let Q=0,ne=J.length;Q<ne;Q++){const me=i.get(J[Q]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const ne=J[Q];H.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const me=s.convert(ne.format,ne.colorSpace),Ie=s.convert(ne.type),ve=y(ne.internalFormat,me,Ie,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),ge=yt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,ve,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),je(H.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ke(t.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)Oe(H.__webglFramebuffer[Q][ne],C,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Oe(H.__webglFramebuffer[Q],C,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);d(b)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let Q=0,ne=J.length;Q<ne;Q++){const me=J[Q],Ie=i.get(me);let ve=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Ie.__webglTexture),ke(ve,me),Oe(H.__webglFramebuffer,C,me,t.COLOR_ATTACHMENT0+Q,ve,0),d(me)&&v(ve)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,q.__webglTexture),ke(Q,b),b.mipmaps&&b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)Oe(H.__webglFramebuffer[ne],C,b,t.COLOR_ATTACHMENT0,Q,ne);else Oe(H.__webglFramebuffer,C,b,t.COLOR_ATTACHMENT0,Q,0);d(b)&&v(Q),n.unbindTexture()}C.depthBuffer&&fe(C)}function qe(C){const b=C.textures;for(let H=0,q=b.length;H<q;H++){const J=b[H];if(d(J)){const de=S(C),pe=i.get(J).__webglTexture;n.bindTexture(de,pe),v(de),n.unbindTexture()}}}const ct=[],ht=[];function Lt(C){if(C.samples>0){if(pt(C)===!1){const b=C.textures,H=C.width,q=C.height;let J=t.COLOR_BUFFER_BIT;const de=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),Q=b.length>1;if(Q)for(let me=0;me<b.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ne=C.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<b.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ie=i.get(b[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,H,q,0,0,H,q,J,t.NEAREST),l===!0&&(ct.length=0,ht.length=0,ct.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(de),ht.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<b.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const Ie=i.get(b[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function yt(C){return Math.min(r.maxSamples,C.samples)}function pt(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function U(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function hn(C,b){const H=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==vc&&H!==lr&&(Je.getTransfer(H)===at?(q!==ti||J!==zn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",H)),b}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=Y,this.getTextureUnits=K,this.setTextureUnits=F,this.setTexture2D=D,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function i2(t,e){function n(i,r=lr){let s;const a=Je.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===op)return t.UNSIGNED_SHORT_4_4_4_4;if(i===lp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===g_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===x_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===p_)return t.BYTE;if(i===m_)return t.SHORT;if(i===fo)return t.UNSIGNED_SHORT;if(i===ap)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===Vi)return t.HALF_FLOAT;if(i===v_)return t.ALPHA;if(i===__)return t.RGB;if(i===ti)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Gr)return t.DEPTH_STENCIL;if(i===y_)return t.RED;if(i===cp)return t.RED_INTEGER;if(i===ns)return t.RG;if(i===up)return t.RG_INTEGER;if(i===dp)return t.RGBA_INTEGER;if(i===Ol||i===Ul||i===Fl||i===kl)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===wf||i===Tf||i===Af)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Af)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rf||i===Cf||i===Nf||i===Pf||i===If||i===gc||i===Df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rf||i===Cf)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pf)return s.COMPRESSED_R11_EAC;if(i===If)return s.COMPRESSED_SIGNED_R11_EAC;if(i===gc)return s.COMPRESSED_RG11_EAC;if(i===Df)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lf||i===Of||i===Uf||i===Ff||i===kf||i===Bf||i===zf||i===Hf||i===Gf||i===Vf||i===jf||i===Wf||i===Xf||i===Yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Of)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ff)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yf)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qf||i===$f||i===Kf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qf)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$f)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zf||i===Jf||i===xc||i===Qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s2=`
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

}`;class a2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new P_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new wi({vertexShader:r2,fragmentShader:s2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o2 extends as{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,f=null,m=null,x=null;const E=typeof XRWebGLBinding<"u",g=new a2,d={},v=n.getContextAttributes();let S=null,y=null;const M=[],w=[],A=new rt;let _=null;const R=new Bn;R.viewport=new Ct;const N=new Bn;N.viewport=new Ct;const I=[R,N],P=new gT;let Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ie=M[G];return ie===void 0&&(ie=new Gu,M[G]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(G){let ie=M[G];return ie===void 0&&(ie=new Gu,M[G]=ie),ie.getGripSpace()},this.getHand=function(G){let ie=M[G];return ie===void 0&&(ie=new Gu,M[G]=ie),ie.getHandSpace()};function F(G){const ie=w.indexOf(G.inputSource);if(ie===-1)return;const ae=M[ie];ae!==void 0&&(ae.update(G.inputSource,G.frame,u||a),ae.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",z);for(let G=0;G<M.length;G++){const ie=w[G];ie!==null&&(w[G]=null,M[G].disconnect(ie))}Y=null,K=null,g.reset();for(const G in d)delete d[G];e.setRenderTarget(S),m=null,f=null,p=null,r=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",z),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Fe=null,He=null;v.depth&&(He=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=v.stencil?Gr:ji,Fe=v.stencil?ho:Mi);const Oe={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ei(f.textureWidth,f.textureHeight,{format:ti,type:zn,depthTexture:new ia(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Ei(m.framebufferWidth,m.framebufferHeight,{format:ti,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(G){for(let ie=0;ie<G.removed.length;ie++){const ae=G.removed[ie],Fe=w.indexOf(ae);Fe>=0&&(w[Fe]=null,M[Fe].disconnect(ae))}for(let ie=0;ie<G.added.length;ie++){const ae=G.added[ie];let Fe=w.indexOf(ae);if(Fe===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=w.length){w.push(ae),Fe=Oe;break}else if(w[Oe]===null){w[Oe]=ae,Fe=Oe;break}if(Fe===-1)break}const He=M[Fe];He&&He.connect(ae)}}const D=new V,j=new V;function Z(G,ie,ae){D.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ae.matrixWorld);const Fe=D.distanceTo(j),He=ie.projectionMatrix.elements,Oe=ae.projectionMatrix.elements,je=He[14]/(He[10]-1),Ye=He[14]/(He[10]+1),fe=(He[9]+1)/He[5],le=(He[9]-1)/He[5],ue=(He[8]-1)/He[0],qe=(Oe[8]+1)/Oe[0],ct=je*ue,ht=je*qe,Lt=Fe/(-ue+qe),yt=Lt*-ue;if(ie.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(yt),G.translateZ(Lt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),He[10]===-1)G.projectionMatrix.copy(ie.projectionMatrix),G.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const pt=je+Lt,U=Ye+Lt,hn=ct-yt,st=ht+(Fe-yt),C=fe*Ye/U*pt,b=le*Ye/U*pt;G.projectionMatrix.makePerspective(hn,st,C,b,pt,U),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ee(G,ie){ie===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ie.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ie=G.near,ae=G.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),P.near=N.near=R.near=ie,P.far=N.far=R.far=ae,(Y!==P.near||K!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),Y=P.near,K=P.far),P.layers.mask=G.layers.mask|6,R.layers.mask=P.layers.mask&-5,N.layers.mask=P.layers.mask&-3;const Fe=G.parent,He=P.cameras;ee(P,Fe);for(let Oe=0;Oe<He.length;Oe++)ee(He[Oe],Fe);He.length===2?Z(P,R,N):P.projectionMatrix.copy(R.projectionMatrix),re(G,P,Fe)};function re(G,ie,ae){ae===null?G.matrix.copy(ie.matrixWorld):(G.matrix.copy(ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(ie.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ie.projectionMatrix),G.projectionMatrixInverse.copy(ie.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=eh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(G){return d[G]};let we=null;function Ve(G,ie){if(h=ie.getViewerPose(u||a),x=ie,h!==null){const ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Fe=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,Fe=!0);for(let Ye=0;Ye<ae.length;Ye++){const fe=ae[Ye];let le=null;if(m!==null)le=m.getViewport(fe);else{const qe=p.getViewSubImage(f,fe);le=qe.viewport,Ye===0&&(e.setRenderTargetTextures(y,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(y))}let ue=I[Ye];ue===void 0&&(ue=new Bn,ue.layers.enable(Ye),ue.viewport=new Ct,I[Ye]=ue),ue.matrix.fromArray(fe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(fe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(le.x,le.y,le.width,le.height),Ye===0&&(P.matrix.copy(ue.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Fe===!0&&P.cameras.push(ue)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Ye=p.getDepthInformation(ae[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,r.renderState)}if(He&&He.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Ye=0;Ye<ae.length;Ye++){const fe=ae[Ye].camera;if(fe){let le=d[fe];le||(le=new P_,d[fe]=le);const ue=p.getCameraImage(fe);le.sourceTexture=ue}}}}for(let ae=0;ae<M.length;ae++){const Fe=w[ae],He=M[ae];Fe!==null&&He!==void 0&&He.update(Fe,ie,u||a)}we&&we(G,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const ke=new O_;ke.setAnimationLoop(Ve),this.setAnimationLoop=function(G){we=G},this.dispose=function(){}}}const l2=new Dt,G_=new Ge;G_.set(-1,0,0,0,1,0,0,0,1);function c2(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,I_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,S,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,S):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),S=v.envMap,y=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(G_),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,S){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=S*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function u2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const w=M.program;i.uniformBlockBinding(y,w)}function u(y,M){let w=r[y.id];w===void 0&&(g(y),w=h(y),r[y.id]=w,y.addEventListener("dispose",v));const A=M.program;i.updateUBOMapping(y,A);const _=e.render.frame;s[y.id]!==_&&(f(y),s[y.id]=_)}function h(y){const M=p();y.__bindingPointIndex=M;const w=t.createBuffer(),A=y.__size,_=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,w),w}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=r[y.id],w=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let _=0,R=w.length;_<R;_++){const N=w[_];if(Array.isArray(N))for(let I=0,P=N.length;I<P;I++)m(N[I],_,I,A);else m(N,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,M,w,A){if(E(y,M,w,A)===!0){const _=y.__offset,R=y.value;if(Array.isArray(R)){let N=0;for(let I=0;I<R.length;I++){const P=R[I],Y=d(P);x(P,y.__data,N),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,y.__data)}}function x(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function E(y,M,w,A){const _=y.value,R=M+"_"+w;if(A[R]===void 0)return typeof _=="number"||typeof _=="boolean"?A[R]=_:ArrayBuffer.isView(_)?A[R]=_.slice():A[R]=_.clone(),!0;{const N=A[R];if(typeof _=="number"||typeof _=="boolean"){if(N!==_)return A[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(N.equals(_)===!1)return N.copy(_),!0}}return!1}function g(y){const M=y.uniforms;let w=0;const A=16;for(let R=0,N=M.length;R<N;R++){const I=Array.isArray(M[R])?M[R]:[M[R]];for(let P=0,Y=I.length;P<Y;P++){const K=I[P],F=Array.isArray(K.value)?K.value:[K.value];for(let B=0,z=F.length;B<z;B++){const D=F[B],j=d(D),Z=w%A,ee=Z%j.boundary,re=Z+ee;w+=ee,re!==0&&A-re<j.storage&&(w+=A-re),K.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=w,w+=j.storage}}}const _=w%A;return _>0&&(w+=A-_),y.__size=w,y.__cache={},this}function d(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){const M=y.target;M.removeEventListener("dispose",v);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:u,dispose:S}}const d2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function f2(){return fi===null&&(fi=new tT(d2,16,16,ns,Vi),fi.name="DFG_LUT",fi.minFilter=nn,fi.magFilter=nn,fi.wrapS=Oi,fi.wrapT=Oi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class h2{constructor(e={}){const{canvas:n=Iw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=zn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const E=m,g=new Set([dp,up,cp]),d=new Set([zn,Mi,fo,ho,op,lp]),v=new Uint32Array(4),S=new Int32Array(4),y=new V;let M=null,w=null;const A=[],_=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,P=null,Y=null,K=null,F=null;this._outputColorSpace=Un;let B=0,z=0,D=null,j=-1,Z=null;const ee=new Ct,re=new Ct;let we=null;const Ve=new et(0);let ke=0,G=n.width,ie=n.height,ae=1,Fe=null,He=null;const Oe=new Ct(0,0,G,ie),je=new Ct(0,0,G,ie);let Ye=!1;const fe=new R_;let le=!1,ue=!1;const qe=new Dt,ct=new V,ht=new Ct,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function pt(){return D===null?ae:1}let U=i;function hn(T,k){return n.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",Tt,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",oi,!1),U===null){const k="webgl2";if(U=hn(k,T),U===null)throw hn(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw nt("WebGLRenderer: "+T.message),T}let st,C,b,H,q,J,de,pe,Q,ne,me,Ie,ve,ge,Ue,Be,We,O,he,te,xe,be,se;function Pe(){st=new fC(U),st.init(),xe=new i2(U,st),C=new rC(U,st,e,xe),b=new t2(U,st),C.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),Y=U.createFramebuffer(),K=U.createFramebuffer(),F=U.createFramebuffer(),H=new mC(U),q=new HN,J=new n2(U,st,b,q,C,xe,H),de=new dC(N),pe=new _T(U),be=new nC(U,pe),Q=new hC(U,pe,H,be),ne=new xC(U,Q,pe,be,H),O=new gC(U,C,J),Ue=new sC(q),me=new zN(N,de,st,C,be,Ue),Ie=new c2(N,q),ve=new VN,ge=new $N(st),We=new tC(N,de,b,ne,x,l),Be=new e2(N,ne,C),se=new u2(U,H,C,b),he=new iC(U,st,H),te=new pC(U,st,H),H.programs=me.programs,N.capabilities=C,N.extensions=st,N.properties=q,N.renderLists=ve,N.shadowMap=Be,N.state=b,N.info=H}Pe(),E!==zn&&(R=new _C(E,n.width,n.height,o,r,s));const Ce=new o2(N,U);this.xr=Ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(T){T!==void 0&&(ae=T,this.setSize(G,ie,!1))},this.getSize=function(T){return T.set(G,ie)},this.setSize=function(T,k,$=!0){if(Ce.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,ie=k,n.width=Math.floor(T*ae),n.height=Math.floor(k*ae),$===!0&&(n.style.width=T+"px",n.style.height=k+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(G*ae,ie*ae).floor()},this.setDrawingBufferSize=function(T,k,$){G=T,ie=k,ae=$,n.width=Math.floor(T*$),n.height=Math.floor(k*$),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(E===zn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(Oe)},this.setViewport=function(T,k,$,W){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,k,$,W),b.viewport(ee.copy(Oe).multiplyScalar(ae).round())},this.getScissor=function(T){return T.copy(je)},this.setScissor=function(T,k,$,W){T.isVector4?je.set(T.x,T.y,T.z,T.w):je.set(T,k,$,W),b.scissor(re.copy(je).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(T){b.setScissorTest(Ye=T)},this.setOpaqueSort=function(T){Fe=T},this.setTransparentSort=function(T){He=T},this.getClearColor=function(T){return T.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,$=!0){let W=0;if(T){let X=!1;if(D!==null){const Ee=D.texture.format;X=g.has(Ee)}if(X){const Ee=D.texture.type,Te=d.has(Ee),Se=We.getClearColor(),Ne=We.getClearAlpha(),De=Se.r,Xe=Se.g,Ke=Se.b;Te?(v[0]=De,v[1]=Xe,v[2]=Ke,v[3]=Ne,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=De,S[1]=Xe,S[2]=Ke,S[3]=Ne,U.clearBufferiv(U.COLOR,0,S))}else W|=U.COLOR_BUFFER_BIT}k&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),P=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Tt,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",oi,!1),We.dispose(),ve.dispose(),ge.dispose(),q.dispose(),de.dispose(),ne.dispose(),be.dispose(),se.dispose(),me.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",bp),Ce.removeEventListener("sessionend",Mp),Tr.stop()};function Tt(T){T.preventDefault(),Sg("WebGLRenderer: Context Lost."),I=!0}function mt(){Sg("WebGLRenderer: Context Restored."),I=!1;const T=H.autoReset,k=Be.enabled,$=Be.autoUpdate,W=Be.needsUpdate,X=Be.type;Pe(),H.autoReset=T,Be.enabled=k,Be.autoUpdate=$,Be.needsUpdate=W,Be.type=X}function oi(T){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function li(T){const k=T.target;k.removeEventListener("dispose",li),V_(k)}function V_(T){j_(T),q.remove(T)}function j_(T){const k=q.get(T).programs;k!==void 0&&(k.forEach(function($){me.releaseProgram($)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,$,W,X,Ee){k===null&&(k=Lt);const Te=X.isMesh&&X.matrixWorld.determinantAffine()<0,Se=Y_(T,k,$,W,X);b.setMaterial(W,Te);let Ne=$.index,De=1;if(W.wireframe===!0){if(Ne=Q.getWireframeAttribute($),Ne===void 0)return;De=2}const Xe=$.drawRange,Ke=$.attributes.position;let Le=Xe.start*De,ut=(Xe.start+Xe.count)*De;Ee!==null&&(Le=Math.max(Le,Ee.start*De),ut=Math.min(ut,(Ee.start+Ee.count)*De)),Ne!==null?(Le=Math.max(Le,0),ut=Math.min(ut,Ne.count)):Ke!=null&&(Le=Math.max(Le,0),ut=Math.min(ut,Ke.count));const Nt=ut-Le;if(Nt<0||Nt===1/0)return;be.setup(X,W,Se,$,Ne);let At,dt=he;if(Ne!==null&&(At=pe.get(Ne),dt=te,dt.setIndex(At)),X.isMesh)W.wireframe===!0?(b.setLineWidth(W.wireframeLinewidth*pt()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(X.isLine){let $t=W.linewidth;$t===void 0&&($t=1),b.setLineWidth($t*pt()),X.isLineSegments?dt.setMode(U.LINES):X.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else X.isPoints?dt.setMode(U.POINTS):X.isSprite&&dt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(st.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $t=X._multiDrawStarts,Me=X._multiDrawCounts,bn=X._multiDrawCount,tt=Ne?pe.get(Ne).bytesPerElement:1,Ln=q.get(W).currentProgram.getUniforms();for(let ci=0;ci<bn;ci++)Ln.setValue(U,"_gl_DrawID",ci),dt.render($t[ci]/tt,Me[ci])}else if(X.isInstancedMesh)dt.renderInstances(Le,Nt,X.count);else if($.isInstancedBufferGeometry){const $t=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Me=Math.min($.instanceCount,$t);dt.renderInstances(Le,Nt,Me)}else dt.render(Le,Nt)};function Ep(T,k,$){T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=Sn,T.needsUpdate=!0,Co(T,k,$),T.side=Er,T.needsUpdate=!0,Co(T,k,$),T.side=gi):Co(T,k,$)}this.compile=function(T,k,$=null){$===null&&($=T),w=ge.get($),w.init(k),_.push(w),$.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==$&&T.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Te=0;Te<Ee.length;Te++){const Se=Ee[Te];Ep(Se,$,X),W.add(Se)}else Ep(Ee,$,X),W.add(Ee)}),w=_.pop(),W},this.compileAsync=function(T,k,$=null){const W=this.compile(T,k,$);return new Promise(X=>{function Ee(){if(W.forEach(function(Te){q.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){X(T);return}setTimeout(Ee,10)}st.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Zc=null;function W_(T){Zc&&Zc(T)}function bp(){Tr.stop()}function Mp(){Tr.start()}const Tr=new O_;Tr.setAnimationLoop(W_),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(T){Zc=T,Ce.setAnimationLoop(T),T===null?Tr.stop():Tr.start()},Ce.addEventListener("sessionstart",bp),Ce.addEventListener("sessionend",Mp),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(T,k);const $=Ce.enabled===!0&&Ce.isPresenting===!0,W=R!==null&&(D===null||$)&&R.begin(N,D);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(k),k=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,k,D),w=ge.get(T,_.length),w.init(k),w.state.textureUnits=J.getTextureUnits(),_.push(w),qe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),fe.setFromProjectionMatrix(qe,vi,k.reversedDepth),ue=this.localClippingEnabled,le=Ue.init(this.clippingPlanes,ue),M=ve.get(T,A.length),M.init(),A.push(M),Ce.enabled===!0&&Ce.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Jc(Te,k,-1/0,N.sortObjects)}Jc(T,k,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(Fe,He,k.reversedDepth),yt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,yt&&We.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ue.beginShadows();const X=w.state.shadowsArray;if(Be.render(X,T,k),le===!0&&Ue.endShadows(),(W&&R.hasRenderPass())===!1){const Te=M.opaque,Se=M.transmissive;if(w.setupLights(),k.isArrayCamera){const Ne=k.cameras;if(Se.length>0)for(let De=0,Xe=Ne.length;De<Xe;De++){const Ke=Ne[De];Tp(Te,Se,T,Ke)}yt&&We.render(T);for(let De=0,Xe=Ne.length;De<Xe;De++){const Ke=Ne[De];wp(M,T,Ke,Ke.viewport)}}else Se.length>0&&Tp(Te,Se,T,k),yt&&We.render(T),wp(M,T,k)}D!==null&&z===0&&(J.updateMultisampleRenderTarget(D),J.updateRenderTargetMipmap(D)),W&&R.end(N),T.isScene===!0&&T.onAfterRender(N,T,k),be.resetDefaultState(),j=-1,Z=null,_.pop(),_.length>0?(w=_[_.length-1],J.setTextureUnits(w.state.textureUnits),le===!0&&Ue.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,P!==null&&P.renderEnd()};function Jc(T,k,$,W){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||fe.intersectsSprite(T)){W&&ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(qe);const Te=ne.update(T),Se=T.material;Se.visible&&M.push(T,Te,Se,$,ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||fe.intersectsObject(T))){const Te=ne.update(T),Se=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ht.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ht.copy(Te.boundingSphere.center)),ht.applyMatrix4(T.matrixWorld).applyMatrix4(qe)),Array.isArray(Se)){const Ne=Te.groups;for(let De=0,Xe=Ne.length;De<Xe;De++){const Ke=Ne[De],Le=Se[Ke.materialIndex];Le&&Le.visible&&M.push(T,Te,Le,$,ht.z,Ke)}}else Se.visible&&M.push(T,Te,Se,$,ht.z,null)}}const Ee=T.children;for(let Te=0,Se=Ee.length;Te<Se;Te++)Jc(Ee[Te],k,$,W)}function wp(T,k,$,W){const{opaque:X,transmissive:Ee,transparent:Te}=T;w.setupLightsView($),le===!0&&Ue.setGlobalState(N.clippingPlanes,$),W&&b.viewport(ee.copy(W)),X.length>0&&Ro(X,k,$),Ee.length>0&&Ro(Ee,k,$),Te.length>0&&Ro(Te,k,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Tp(T,k,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Le=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Ei(1,1,{generateMipmaps:!0,type:Le?Vi:zn,minFilter:Hr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[W.id],Te=W.viewport||ee;Ee.setSize(Te.z*N.transmissionResolutionScale,Te.w*N.transmissionResolutionScale);const Se=N.getRenderTarget(),Ne=N.getActiveCubeFace(),De=N.getActiveMipmapLevel();N.setRenderTarget(Ee),N.getClearColor(Ve),ke=N.getClearAlpha(),ke<1&&N.setClearColor(16777215,.5),N.clear(),yt&&We.render($);const Xe=N.toneMapping;N.toneMapping=Si;const Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),le===!0&&Ue.setGlobalState(N.clippingPlanes,W),Ro(T,$,W),J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee),st.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ut=0,Nt=k.length;ut<Nt;ut++){const At=k[ut],{object:dt,geometry:$t,material:Me,group:bn}=At;if(Me.side===gi&&dt.layers.test(W.layers)){const tt=Me.side;Me.side=Sn,Me.needsUpdate=!0,Ap(dt,$,W,$t,Me,bn),Me.side=tt,Me.needsUpdate=!0,Le=!0}}Le===!0&&(J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee))}N.setRenderTarget(Se,Ne,De),N.setClearColor(Ve,ke),Ke!==void 0&&(W.viewport=Ke),N.toneMapping=Xe}function Ro(T,k,$){const W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Ee=T.length;X<Ee;X++){const Te=T[X],{object:Se,geometry:Ne,group:De}=Te;let Xe=Te.material;Xe.allowOverride===!0&&W!==null&&(Xe=W),Se.layers.test($.layers)&&Ap(Se,k,$,Ne,Xe,De)}}function Ap(T,k,$,W,X,Ee){T.onBeforeRender(N,k,$,W,X,Ee),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(N,k,$,W,T,Ee),X.transparent===!0&&X.side===gi&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,N.renderBufferDirect($,k,W,X,T,Ee),X.side=Er,X.needsUpdate=!0,N.renderBufferDirect($,k,W,X,T,Ee),X.side=gi):N.renderBufferDirect($,k,W,X,T,Ee),T.onAfterRender(N,k,$,W,X,Ee)}function Co(T,k,$){k.isScene!==!0&&(k=Lt);const W=q.get(T),X=w.state.lights,Ee=w.state.shadowsArray,Te=X.state.version,Se=me.getParameters(T,X.state,Ee,k,$,w.state.lightProbeGridArray),Ne=me.getProgramCacheKey(Se);let De=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,W.fog=k.fog;const Xe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=de.get(T.envMap||W.environment,Xe),W.envMapRotation=W.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",li),De=new Map,W.programs=De);let Ke=De.get(Ne);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Te)return Cp(T,Se),Ke}else Se.uniforms=me.getUniforms(T),P!==null&&T.isNodeMaterial&&P.build(T,$,Se),T.onBeforeCompile(Se,N),Ke=me.acquireProgram(Se,Ne),De.set(Ne,Ke),W.uniforms=Se.uniforms;const Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Ue.uniform),Cp(T,Se),W.needsLights=$_(T),W.lightsStateVersion=Te,W.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=Ke,W.uniformsList=null,Ke}function Rp(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Bl.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Cp(T,k){const $=q.get(T);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function X_(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let $=0,W=T.length;$<W;$++){const X=T[$];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function Y_(T,k,$,W,X){k.isScene!==!0&&(k=Lt),J.resetTextureUnits();const Ee=k.fog,Te=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?k.environment:null,Se=D===null?N.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Je.workingColorSpace,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,De=de.get(W.envMap||Te,Ne),Xe=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ke=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,Nt=!!$.morphAttributes.color;let At=Si;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(At=N.toneMapping);const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,$t=dt!==void 0?dt.length:0,Me=q.get(W),bn=w.state.lights;if(le===!0&&(ue===!0||T!==Z)){const gt=T===Z&&W.id===j;Ue.setState(W,T,gt)}let tt=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==bn.state.version||Me.outputColorSpace!==Se||X.isBatchedMesh&&Me.batching===!1||!X.isBatchedMesh&&Me.batching===!0||X.isBatchedMesh&&Me.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Me.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Me.instancing===!1||!X.isInstancedMesh&&Me.instancing===!0||X.isSkinnedMesh&&Me.skinning===!1||!X.isSkinnedMesh&&Me.skinning===!0||X.isInstancedMesh&&Me.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Me.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Me.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Me.instancingMorph===!1&&X.morphTexture!==null||Me.envMap!==De||W.fog===!0&&Me.fog!==Ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ue.numPlanes||Me.numIntersection!==Ue.numIntersection)||Me.vertexAlphas!==Xe||Me.vertexTangents!==Ke||Me.morphTargets!==Le||Me.morphNormals!==ut||Me.morphColors!==Nt||Me.toneMapping!==At||Me.morphTargetsCount!==$t||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Me.__version=W.version);let Ln=Me.currentProgram;tt===!0&&(Ln=Co(W,k,X),P&&W.isNodeMaterial&&P.onUpdateProgram(W,Ln,Me));let ci=!1,Yi=!1,os=!1;const ft=Ln.getUniforms(),Pt=Me.uniforms;if(b.useProgram(Ln.program)&&(ci=!0,Yi=!0,os=!0),W.id!==j&&(j=W.id,Yi=!0),Me.needsLights){const gt=X_(w.state.lightProbeGridArray,X);Me.lightProbeGrid!==gt&&(Me.lightProbeGrid=gt,Yi=!0)}if(ci||Z!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(U,"projectionMatrix",T.projectionMatrix),ft.setValue(U,"viewMatrix",T.matrixWorldInverse);const $i=ft.map.cameraPosition;$i!==void 0&&$i.setValue(U,ct.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,Yi=!0,os=!0)}if(Me.needsLights&&(bn.state.directionalShadowMap.length>0&&ft.setValue(U,"directionalShadowMap",bn.state.directionalShadowMap,J),bn.state.spotShadowMap.length>0&&ft.setValue(U,"spotShadowMap",bn.state.spotShadowMap,J),bn.state.pointShadowMap.length>0&&ft.setValue(U,"pointShadowMap",bn.state.pointShadowMap,J)),X.isSkinnedMesh){ft.setOptional(U,X,"bindMatrix"),ft.setOptional(U,X,"bindMatrixInverse");const gt=X.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ft.setValue(U,"boneTexture",gt.boneTexture,J))}X.isBatchedMesh&&(ft.setOptional(U,X,"batchingTexture"),ft.setValue(U,"batchingTexture",X._matricesTexture,J),ft.setOptional(U,X,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",X._indirectTexture,J),ft.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",X._colorsTexture,J));const qi=$.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&O.update(X,$,Ln),(Yi||Me.receiveShadow!==X.receiveShadow)&&(Me.receiveShadow=X.receiveShadow,ft.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&k.environment!==null&&(Pt.envMapIntensity.value=k.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=f2()),Yi){if(ft.setValue(U,"toneMappingExposure",N.toneMappingExposure),Me.needsLights&&q_(Pt,os),Ee&&W.fog===!0&&Ie.refreshFogUniforms(Pt,Ee),Ie.refreshMaterialUniforms(Pt,W,ae,ie,w.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const gt=Me.lightProbeGrid;Pt.probesSH.value=gt.texture,Pt.probesMin.value.copy(gt.boundingBox.min),Pt.probesMax.value.copy(gt.boundingBox.max),Pt.probesResolution.value.copy(gt.resolution)}Bl.upload(U,Rp(Me),Pt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bl.upload(U,Rp(Me),Pt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(U,"center",X.center),ft.setValue(U,"modelViewMatrix",X.modelViewMatrix),ft.setValue(U,"normalMatrix",X.normalMatrix),ft.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const gt=W.uniformsGroups;for(let $i=0,ls=gt.length;$i<ls;$i++){const Np=gt[$i];se.update(Np,Ln),se.bind(Np,Ln)}}return Ln}function q_(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function $_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,k,$){const W=q.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=k,q.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const $=q.get(T);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,$=0){D=T,B=k,z=$;let W=null,X=!1,Ee=!1;if(T){const Se=q.get(T);if(Se.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(U.FRAMEBUFFER,Se.__webglFramebuffer),ee.copy(T.viewport),re.copy(T.scissor),we=T.scissorTest,b.viewport(ee),b.scissor(re),b.setScissorTest(we),j=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(Se.__hasExternalTextures)J.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xe=T.depthTexture;if(Se.__boundDepthTexture!==Xe){if(Xe!==null&&q.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);const De=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[k])?W=De[k][$]:W=De[k],X=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?W=q.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[$]:W=De,ee.copy(T.viewport),re.copy(T.scissor),we=T.scissorTest}else ee.copy(Oe).multiplyScalar(ae).floor(),re.copy(je).multiplyScalar(ae).floor(),we=Ye;if($!==0&&(W=Y),b.bindFramebuffer(U.FRAMEBUFFER,W)&&b.drawBuffers(T,W),b.viewport(ee),b.scissor(re),b.setScissorTest(we),X){const Se=q.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,$)}else if(Ee){const Se=k;for(let Ne=0;Ne<T.textures.length;Ne++){const De=q.get(T.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,De.__webglTexture,$,Se)}}else if(T!==null&&$!==0){const Se=q.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,$)}j=-1},this.readRenderTargetPixels=function(T,k,$,W,X,Ee,Te,Se=0){if(!(T&&T.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){b.bindFramebuffer(U.FRAMEBUFFER,Ne);try{const De=T.textures[Se],Xe=De.format,Ke=De.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),!C.textureFormatReadable(Xe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Ke)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-W&&$>=0&&$<=T.height-X&&U.readPixels(k,$,W,X,xe.convert(Xe),xe.convert(Ke),Ee)}finally{const De=D!==null?q.get(D).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,k,$,W,X,Ee,Te,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne)if(k>=0&&k<=T.width-W&&$>=0&&$<=T.height-X){b.bindFramebuffer(U.FRAMEBUFFER,Ne);const De=T.textures[Se],Xe=De.format,Ke=De.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),!C.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(k,$,W,X,xe.convert(Xe),xe.convert(Ke),0);const ut=D!==null?q.get(D).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,ut);const Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Dw(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Le),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.deleteBuffer(Le),U.deleteSync(Nt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,$=0){const W=Math.pow(2,-$),X=Math.floor(T.image.width*W),Ee=Math.floor(T.image.height*W),Te=k!==null?k.x:0,Se=k!==null?k.y:0;J.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Te,Se,X,Ee),b.unbindTexture()},this.copyTextureToTexture=function(T,k,$=null,W=null,X=0,Ee=0){let Te,Se,Ne,De,Xe,Ke,Le,ut,Nt;const At=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if($!==null)Te=$.max.x-$.min.x,Se=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,De=$.min.x,Xe=$.min.y,Ke=$.isBox3?$.min.z:0;else{const Pt=Math.pow(2,-X);Te=Math.floor(At.width*Pt),Se=Math.floor(At.height*Pt),T.isDataArrayTexture?Ne=At.depth:T.isData3DTexture?Ne=Math.floor(At.depth*Pt):Ne=1,De=0,Xe=0,Ke=0}W!==null?(Le=W.x,ut=W.y,Nt=W.z):(Le=0,ut=0,Nt=0);const dt=xe.convert(k.format),$t=xe.convert(k.type);let Me;k.isData3DTexture?(J.setTexture3D(k,0),Me=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(J.setTexture2DArray(k,0),Me=U.TEXTURE_2D_ARRAY):(J.setTexture2D(k,0),Me=U.TEXTURE_2D),b.activeTexture(U.TEXTURE0),b.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const bn=b.getParameter(U.UNPACK_ROW_LENGTH),tt=b.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=b.getParameter(U.UNPACK_SKIP_PIXELS),ci=b.getParameter(U.UNPACK_SKIP_ROWS),Yi=b.getParameter(U.UNPACK_SKIP_IMAGES);b.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),b.pixelStorei(U.UNPACK_SKIP_PIXELS,De),b.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Ke);const os=T.isDataArrayTexture||T.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Pt=q.get(T),qi=q.get(k),gt=q.get(Pt.__renderTarget),$i=q.get(qi.__renderTarget);b.bindFramebuffer(U.READ_FRAMEBUFFER,gt.__webglFramebuffer),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let ls=0;ls<Ne;ls++)os&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(T).__webglTexture,X,Ke+ls),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Ee,Nt+ls)),U.blitFramebuffer(De,Xe,Te,Se,Le,ut,Te,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||q.has(T)){const Pt=q.get(T),qi=q.get(k);b.bindFramebuffer(U.READ_FRAMEBUFFER,K),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let gt=0;gt<Ne;gt++)os?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,X,Ke+gt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,X),ft?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qi.__webglTexture,Ee,Nt+gt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qi.__webglTexture,Ee),X!==0?U.blitFramebuffer(De,Xe,Te,Se,Le,ut,Te,Se,U.COLOR_BUFFER_BIT,U.NEAREST):ft?U.copyTexSubImage3D(Me,Ee,Le,ut,Nt+gt,De,Xe,Te,Se):U.copyTexSubImage2D(Me,Ee,Le,ut,De,Xe,Te,Se);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ft?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Me,Ee,Le,ut,Nt,Te,Se,Ne,dt,$t,At.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,Ee,Le,ut,Nt,Te,Se,Ne,dt,At.data):U.texSubImage3D(Me,Ee,Le,ut,Nt,Te,Se,Ne,dt,$t,At):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,Le,ut,Te,Se,dt,$t,At.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,Le,ut,At.width,At.height,dt,At.data):U.texSubImage2D(U.TEXTURE_2D,Ee,Le,ut,Te,Se,dt,$t,At);b.pixelStorei(U.UNPACK_ROW_LENGTH,bn),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tt),b.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),b.pixelStorei(U.UNPACK_SKIP_ROWS,ci),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Yi),Ee===0&&k.generateMipmaps&&U.generateMipmap(Me),b.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){B=0,z=0,D=null,b.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}function p2({isPlaying:t,trackName:e,artist:n}){const i=oe.useRef(null),r=oe.useRef(null),s=oe.useRef(null),[a,o]=oe.useState("ribbon");return oe.useEffect(()=>{const l=i.current;if(!l)return;const u=l.clientWidth||260,h=l.clientHeight||150,p=new $w;p.fog=new mp(657684,.12);const f=new Bn(50,u/h,.1,100);f.position.set(0,2.5,5.5),f.lookAt(0,0,0);const m=new h2({antialias:!0,alpha:!0});m.setSize(u,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.setClearColor(657684,1),l.innerHTML="",l.appendChild(m.domElement),r.current=m;const x=new xT(10,20,3552581,2039340);x.position.y=-1.2,p.add(x);const E=new Ao(6,4,32,24),g=new Ec({color:2278750,wireframe:!0,transparent:!0,opacity:.85}),d=new si(E,g);d.rotation.x=-Math.PI/2.8,d.position.y=-.2,p.add(d);const v=new gp(.8,1.1,32),S=new Ec({color:13935475,wireframe:!0,side:gi,transparent:!0,opacity:.6}),y=new si(v,S);y.position.set(0,.8,-1.5),p.add(y);const M=E.attributes.position,w=new Float32Array(M.count);for(let Y=0;Y<M.count;Y++)w[Y]=M.getZ(Y);let A=0,_=0,R=0;const N=()=>{A+=.04;const Y=t?Math.sin(A*3.5)*.4+Math.sin(A*7.2)*.3+.5:.05,K=t?Math.cos(A*4.8)*.3+Math.sin(A*9.1)*.2+.3:.02;_+=(Y-_)*.15,R+=(K-R)*.15;for(let B=0;B<M.count;B++){const z=M.getX(B),D=M.getY(B);if(t){const j=Math.sin(z*2.2+A*4)*_*.7,Z=Math.cos(D*3+A*3.2)*R*.5,ee=Math.sin(Math.sqrt(z*z+D*D)*4-A*5)*(_*.35);M.setZ(B,j+Z+ee)}else{const j=Math.sin(z*4-A*2)*.04;M.setZ(B,j)}}M.needsUpdate=!0,y.rotation.z+=t?.03:.005,y.rotation.x=Math.sin(A*.8)*.3;const F=1+_*.4;y.scale.set(F,F,F),t?g.color.setHSL(.35+Math.sin(A*.2)*.08,.9,.5):g.color.setHex(3552581),m.render(p,f),s.current=requestAnimationFrame(N)};s.current=requestAnimationFrame(N);const I=()=>{if(!l)return;const Y=l.clientWidth||260,K=l.clientHeight||150;f.aspect=Y/K,f.updateProjectionMatrix(),m.setSize(Y,K)},P=new ResizeObserver(I);return P.observe(l),()=>{s.current&&cancelAnimationFrame(s.current),P.disconnect(),p.remove(d),p.remove(y),p.remove(x),E.dispose(),g.dispose(),v.dispose(),S.dispose(),m.dispose(),l&&m.domElement&&(l.innerHTML="")}},[t,e,n]),c.jsxs("div",{className:"relative w-full h-full min-h-[175px] bg-[#0b0a11] overflow-hidden flex flex-col justify-between select-none",children:[c.jsx("div",{ref:i,className:"absolute inset-0 w-full h-full"}),c.jsxs("div",{className:"relative z-10 p-2 flex items-center justify-between text-[9px] font-mono text-emerald-400 font-bold bg-black/40 backdrop-blur-2xs border-b border-emerald-900/40",children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("span",{className:`inline-block w-1.5 h-1.5 rounded-full ${t?"bg-emerald-400 animate-pulse":"bg-gray-600"}`}),c.jsx("span",{children:"3D_CRT_SPECTRUM // FFT_512"})]}),c.jsx("span",{className:"text-amber-300",children:t?"LIVE SIGNAL":"SIGNAL IDLE"})]}),c.jsxs("div",{className:"relative z-10 p-1.5 bg-black/60 backdrop-blur-2xs border-t border-emerald-900/40 flex items-center justify-between text-[8px] font-mono text-gray-400",children:[c.jsxs("span",{className:"truncate max-w-[150px] text-emerald-300",children:["> ",e||"TRACK"]}),c.jsx("span",{className:"text-amber-400 font-bold",children:"THREE.JS 60FPS"})]})]})}const m2="/obsolescence-protocol/";function ih(t){const e=t.startsWith("/")?t.slice(1):t;return`${m2}${e}`}function g2({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s,currentTrack:a}){const[o,l]=oe.useState(lf),[u,h]=oe.useState(0),[p,f]=oe.useState(!1),[m,x]=oe.useState("crt"),[E,g]=oe.useState(!1),[d,v]=oe.useState(0),S=o[u]||o[0];oe.useEffect(()=>{if(!a)return;const _=(a.track_name||a.title||"").toLowerCase().trim(),R=(a.artist||"").toLowerCase().trim();let N=o.findIndex(I=>{const P=I.track_name.toLowerCase(),Y=I.artist.toLowerCase();return P.includes(_)||_.includes(P)||R&&Y.includes(R)});if(N!==-1)y(N);else{const I={id:`DYN_${Date.now()}`,track_name:a.track_name||a.title||"Live Stream Track",artist:a.artist||"Featured Artist",album:a.album||"Digital Audio Stream",coverArt:a.coverArt||ih("album_art.jpg"),youtubeId:a.youtubeId||"5NV6Rdv1a3I"};l(P=>[I,...P]),y(0)}},[a]);const y=_=>{Re.playClick(),h(_),f(!1),g(!0),v(R=>R+1)},M=()=>{Re.playClick(),g(!E),v(_=>_+1)},w=()=>{y((u+1)%o.length)},A=()=>{y((u-1+o.length)%o.length)};return c.jsx(Xi,{id:"ipod",title:"iPod CLASSIC // OFFICIAL STUDIO AUDIO ENGINE",isOpen:t,isMinimized:e,onClose:()=>{g(!1),n&&n("ipod")},onMinimize:i,onFocus:r,zIndex:s,width:"max-w-xs",titleBg:"bg-[#1c1b26]",headerIcon:"graphic_eq",initialPosition:{x:100,y:40},children:c.jsxs("div",{className:"flex flex-col items-center bg-[#16151f] rounded-b-xl px-4 sm:px-5 py-4 space-y-3.5 border-x-2 border-b-2 border-[#2e2d3e] font-code-terminal",children:[E&&S.youtubeId&&m!=="video"&&c.jsx("iframe",{title:"YouTube Audio Engine",width:"320",height:"180",src:`https://www.youtube.com/embed/${S.youtubeId}?autoplay=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`,allow:"autoplay; encrypted-media",className:"fixed -left-[9999px] -top-[9999px] w-[320px] h-[180px] pointer-events-auto opacity-0"},`yt-offscreen-${S.id}-${d}`),c.jsxs("div",{className:"w-full flex items-center justify-between gap-1 text-[9px] font-bold",children:[c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>{Re.playClick(),x("crt"),f(!1)},className:`px-1.5 py-0.5 rounded transition-all cursor-pointer ${m==="crt"&&!p?"bg-emerald-600 text-white shadow-[0_0_8px_rgba(16,185,129,0.4)]":"bg-[#242330] text-gray-400 hover:text-white"}`,children:"3D CRT"}),c.jsx("button",{onClick:()=>{Re.playClick(),x("art"),f(!1)},className:`px-1.5 py-0.5 rounded transition-all cursor-pointer ${m==="art"&&!p?"bg-[#d4a373] text-black font-bold":"bg-[#242330] text-gray-400 hover:text-white"}`,children:"CRT ART"}),c.jsx("button",{onClick:()=>{Re.playClick(),x("video"),f(!1)},className:`px-1.5 py-0.5 rounded transition-all cursor-pointer ${m==="video"&&!p?"bg-[#e07a5f] text-black font-bold":"bg-[#242330] text-gray-400 hover:text-white"}`,children:"VIDEO"})]}),c.jsxs("button",{onClick:()=>{Re.playClick(),f(_=>!_)},className:`px-2 py-0.5 rounded transition-all cursor-pointer ${p?"bg-[#81b29a] text-black font-bold":"bg-[#242330] text-gray-400 hover:text-white"}`,children:["LIBRARY (",o.length,")"]})]}),c.jsxs("div",{className:"w-full bg-[#0b0a11] border-2 border-[#2e2d3e] rounded-lg shadow-inner relative overflow-hidden flex flex-col justify-between",style:{minHeight:205},children:[c.jsx("div",{className:"absolute inset-0 pointer-events-none z-30 opacity-20",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"}}),p?c.jsxs("div",{className:"relative z-10 p-3 space-y-0.5 overflow-y-auto",style:{maxHeight:205},children:[c.jsx("p",{className:"text-[9px] font-bold text-[#6b6880] mb-2 border-b border-[#2e2d3e] pb-1",children:"> AUDIO LIBRARY — SELECT TRACK:"}),o.map((_,R)=>c.jsxs("button",{onClick:()=>y(R),className:`w-full text-left px-2 py-1.5 text-[10px] font-bold rounded transition-all cursor-pointer flex items-center justify-between ${R===u?"bg-[#d4a373] text-[#0b0a11]":"text-[#c9c5e0] hover:bg-[#1e1d2c]"}`,children:[c.jsxs("span",{className:"truncate",children:[c.jsxs("span",{className:"text-[#6b6880] mr-1.5",children:[R+1,"."]}),_.track_name]}),c.jsx("span",{className:"text-[9px] opacity-70 ml-2 font-normal flex-shrink-0",children:_.artist.split("ft.")[0].trim()})]},_.id))]}):m==="video"?c.jsxs("div",{className:"relative z-10 p-2 space-y-1 h-full flex flex-col justify-between",style:{minHeight:200},children:[c.jsxs("div",{className:"flex justify-between items-center text-[9px] text-[#81b29a] font-bold pb-1 border-b border-[#2e2d3e]",children:[c.jsx("span",{children:"> CRT_VIDEO_STREAM"}),c.jsxs("span",{className:"text-amber-300 font-mono",children:[u+1,"/",o.length]})]}),c.jsx("div",{className:"w-full h-32 rounded overflow-hidden border border-[#3e3d50] bg-black relative",children:c.jsx("iframe",{title:"YouTube Visible Player",width:"100%",height:"128",src:`https://www.youtube.com/embed/${S.youtubeId}?autoplay=${E?1:0}&controls=1&modestbranding=1&rel=0`,allow:"autoplay; encrypted-media",className:"w-full h-full filter contrast-125 sepia-[0.3]"},`yt-visible-${S.id}-${d}`)}),c.jsxs("p",{className:"text-[8px] text-gray-400 font-mono text-center truncate",children:[S.track_name," — ",S.artist]})]}):m==="crt"?c.jsx(p2,{isPlaying:E,trackName:S.track_name,artist:S.artist}):c.jsxs("div",{className:"relative z-10 p-2.5 space-y-2",children:[c.jsxs("div",{className:"flex justify-between items-center text-[9px] font-bold text-[#6b6880] border-b border-[#2e2d3e] pb-1 font-mono",children:[c.jsx("span",{className:E?"text-[#81b29a] font-bold":"text-[#6b6880]",children:E?"▶ STREAMING":"❚❚ PAUSED"}),c.jsx("span",{className:"text-emerald-400 font-mono",children:"STUDIO_MASTER"}),c.jsxs("span",{children:[u+1,"/",o.length]})]}),c.jsxs("div",{className:"flex gap-2.5 items-center",children:[c.jsxs("div",{className:"relative w-20 h-20 flex-shrink-0 border-2 border-green-800 bg-black rounded overflow-hidden flex items-center justify-center shadow-[0_0_12px_rgba(0,255,0,0.15)]",children:[c.jsx("img",{src:S.coverArt||"/album_art.jpg",alt:`${S.track_name} Cover`,className:"absolute mix-blend-luminosity",style:{width:"64px",height:"64px",transform:"scale(3.5)",imageRendering:"pixelated",filter:"grayscale(100%) contrast(200%) brightness(75%) sepia(100%) hue-rotate(60deg) saturate(300%)"},onError:_=>{_.target.src="/album_art.jpg"}}),c.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,15,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none z-10"}),c.jsx("div",{className:"absolute inset-0 shadow-[inset_0_0_15px_rgba(0,255,0,0.2)] pointer-events-none z-20"})]}),c.jsxs("div",{className:"flex-1 min-w-0 font-mono space-y-0.5",children:[c.jsxs("p",{className:"font-bold text-[12px] text-[#f0eeff] truncate",children:["> ",S.track_name]}),c.jsx("p",{className:"text-[10px] text-[#81b29a] truncate font-bold",children:S.artist}),c.jsxs("p",{className:"text-[9px] text-[#6b6880] truncate",children:["[",S.album,"]"]}),c.jsx("div",{className:"text-[8px] text-emerald-400 font-bold pt-1",children:E?"● OFFICIAL STUDIO MASTER":"○ PAUSED"})]})]}),c.jsx("div",{className:"text-[8px] text-[#81b29a] font-bold text-center pt-1 border-t border-[#2e2d3e] font-mono truncate",children:"▸ YOUTUBE AUDIO ENGINE // OFFICIAL MASTER"})]})]}),c.jsxs("div",{className:"relative w-36 h-36 sm:w-40 sm:h-40 rounded-full flex-shrink-0",style:{background:"radial-gradient(circle at 40% 35%, #2a2839, #141320)",border:"3px solid #2e2d3e",boxShadow:"0 4px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)"},children:[c.jsx("button",{onClick:()=>{Re.playClick(),f(_=>!_)},className:"absolute top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#9e9bb5] hover:text-[#d4a373] transition-colors cursor-pointer",children:"MENU"}),c.jsx("button",{onClick:A,className:"absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-[#9e9bb5] hover:text-[#d4a373] transition-colors leading-none cursor-pointer",children:"⏮"}),c.jsx("button",{onClick:w,className:"absolute right-3 top-1/2 -translate-y-1/2 text-[16px] text-[#9e9bb5] hover:text-[#d4a373] transition-colors leading-none cursor-pointer",children:"⏭"}),c.jsx("button",{onClick:M,className:"absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[16px] text-[#9e9bb5] hover:text-[#81b29a] transition-colors leading-none cursor-pointer",children:"⏯"}),c.jsx("button",{onClick:M,className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-[10px] sm:text-[11px] transition-all active:scale-95 cursor-pointer",style:{background:E?"radial-gradient(circle at 40% 35%, #00ff00, #008800)":"radial-gradient(circle at 40% 35%, #242230, #18171f)",color:E?"#000":"#9e9bb5",border:"2px solid #3a3850",boxShadow:"0 2px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07)"},children:E?"PAUSE":"PLAY"})]})]})})}const px=["TIP: Press ⌘K (or Ctrl+K) to open the Command Palette.","TIP: Press [P] to launch the music player — real tracks, real artists.","TIP: Press [S] to open Analytics — sleep, code commits, and fitness data.","TIP: Press [T] to open the Terminal — run commands against your life feed.","TIP: Click any feed card to inspect its raw data stream."];function x2({onOpenTerminal:t,onOpenIPod:e,onOpenCommandPalette:n}){const[i,r]=oe.useState(0),[s,a]=oe.useState(!1),[o,l]=oe.useState(!0),[u,h]=oe.useState(!1),[p,f]=oe.useState(null);oe.useEffect(()=>{const E=setInterval(()=>{r(g=>(g+1)%px.length)},12e3);return()=>clearInterval(E)},[]);const m=()=>{Re.playBeep(880,"square",.1),a(!0),setTimeout(()=>a(!1),500),h(!0)},x=E=>{switch(Re.playExec(),a(!0),setTimeout(()=>a(!1),400),E){case"interrogate":f("This dashboard aggregates GitHub commits, Oura sleep, Strava workouts, Spotify listening history, and RescueTime productivity into a single retro life feed.");break;case"shortcuts":f("Shortcuts: [T] Terminal · [S] Stats · [P] iPod · [C] Sources · [M] Mute · [D] Demo · ⌘K Command Palette");break;case"palette":n&&n(),h(!1);break;case"ipod":e&&e(),h(!1);break}};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"fixed bottom-12 right-6 z-40 flex flex-col items-end pointer-events-auto max-w-[280px]",children:[o&&!u&&c.jsxs("div",{className:"endacopia-clay-card p-2.5 mb-2 max-w-[240px] bg-[#1a1a22] text-[#f4f1de] font-code-terminal text-[11px] border-2 border-[#363545] shadow-lg relative",children:[c.jsxs("div",{className:"flex justify-between items-center border-b border-[#363545] pb-1 mb-1 text-[9px] text-[#81b29a] font-bold",children:[c.jsx("span",{children:"SYSTEM // DASHBOARD TIPS"}),c.jsx("button",{onClick:()=>l(!1),className:"text-gray-400 hover:text-white font-bold",children:"✕"})]}),c.jsxs("p",{className:s?"glitch-text text-white":"",children:["> ",px[i]]}),c.jsxs("div",{className:"mt-2 flex gap-1.5 flex-wrap",children:[c.jsx("button",{onClick:()=>h(!0),className:"endacopia-clay-button text-[9px] px-2 py-0.5",children:"💬 HELP"}),c.jsx("button",{onClick:()=>{Re.playClick(),n&&n()},className:"endacopia-clay-button text-[9px] px-2 py-0.5",children:"⌘K Commands"})]})]}),c.jsxs("button",{onClick:m,className:`relative group w-16 h-16 min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px] rounded-lg bg-[#1a1a22] border-2 border-[#363545] p-0.5 cursor-pointer transform hover:scale-105 active:scale-95 transition-all overflow-hidden shadow-md flex-shrink-0 ${s?"ring-2 ring-[#d4a373]":""}`,title:"THE OVERSEER Mascot - Click to Interrogate",children:[c.jsx("img",{src:ih("overseer.jpg"),alt:"THE OVERSEER Mascot",className:"w-full h-full object-cover rounded"}),c.jsx("div",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#81b29a] border border-black animate-ping"})]})]}),u&&c.jsx(Xi,{id:"overseer-dialogue",title:"ENDACOPIA INTERACTIVE PROTOCOL - [THE OVERSEER]",isOpen:u,onClose:()=>h(!1),zIndex:90,width:"max-w-lg",titleBg:"bg-[#242330]",headerIcon:"psychology",initialPosition:{x:60,y:50},children:c.jsxs("div",{className:"bg-[#1a1a22] text-[#81b29a] p-4 font-code-terminal text-[12px] space-y-4 border-2 border-[#363545] rounded-b-lg",children:[c.jsxs("div",{className:"flex gap-4 items-center border-b border-[#363545] pb-3",children:[c.jsx("div",{className:"w-16 h-16 min-w-[64px] max-w-[64px] border-2 border-[#d4a373] bg-black overflow-hidden flex-shrink-0 rounded",children:c.jsx("img",{src:ih("overseer.jpg"),alt:"Overseer",className:"w-full h-full object-cover"})}),c.jsxs("div",{className:"flex-1 space-y-1",children:[c.jsx("p",{className:"font-bold text-white text-[14px]",children:"THE OVERSEER"}),c.jsx("p",{className:"text-[11px] text-gray-400",children:"ENDACOPIA DIGITAL ARCHAEOLOGY MONITOR"}),c.jsx("p",{className:"text-[10px] text-[#81b29a] font-bold",children:"STATUS: SYNCHRONIZED"})]})]}),c.jsx("div",{className:"bg-[#0a0a0d] p-3 border border-[#363545] rounded min-h-[60px] text-white",children:p?c.jsxs("p",{className:"text-[#81b29a] font-bold",children:["> ",p]}):c.jsx("p",{className:"text-gray-300",children:'> THE OVERSEER FIXATES UPON YOU. "WHAT IS YOUR WILL, USER?"'})}),c.jsxs("div",{className:"space-y-1.5 pt-1",children:[c.jsx("p",{className:"text-gray-400 font-bold text-[10px]",children:"> CHOOSE OPTION:"}),c.jsx("button",{onClick:()=>x("interrogate"),className:"w-full text-left endacopia-clay-button text-white font-bold p-2 text-[11px]",children:"[1] WHAT DOES THIS DASHBOARD DO?"}),c.jsx("button",{onClick:()=>x("shortcuts"),className:"w-full text-left endacopia-clay-button text-[#81b29a] font-bold p-2 text-[11px]",children:"[2] SHOW ALL KEYBOARD SHORTCUTS"}),c.jsx("button",{onClick:()=>x("palette"),className:"w-full text-left endacopia-clay-button text-[#d4a373] font-bold p-2 text-[11px]",children:"[3] OPEN COMMAND PALETTE (⌘K)"}),c.jsx("button",{onClick:()=>x("ipod"),className:"w-full text-left endacopia-clay-button text-white font-bold p-2 text-[11px]",children:"[4] LAUNCH MUSIC PLAYER"})]})]})})]})}const v2=t=>[{id:"open-terminal",category:"Navigate",label:"Open Terminal",description:"Launch the interactive CLI terminal",icon:"terminal",shortcut:"T",action:()=>t.onOpenWindow("terminal")},{id:"open-stats",category:"Navigate",label:"Open Analytics Dashboard",description:"View system metrics and life data stats",icon:"analytics",shortcut:"S",action:()=>t.onOpenWindow("stats")},{id:"open-sources",category:"Navigate",label:"Manage Data Sources",description:"Configure API connections (GitHub, Oura, Strava…)",icon:"hub",shortcut:"C",action:()=>t.onOpenWindow("sources")},{id:"open-ipod",category:"Navigate",label:"Open Music Player",description:"Launch the retro iPod — real music from SoundCloud",icon:"graphic_eq",shortcut:"P",action:()=>t.onOpenWindow("ipod")},{id:"open-profile",category:"Navigate",label:"Open Profile — LinkedIn & LeetCode",description:"View coding stats, connections, skills, and rankings",icon:"person",action:()=>t.onOpenWindow("profile")},{id:"open-contact",category:"Navigate",label:"Contact Rohan Joshi — Transmit Dispatch",description:"Direct recruiter & engineering inquiries channel",icon:"mail",action:()=>{var e;return(e=t.onOpenContact)==null?void 0:e.call(t)}},{id:"open-resume",category:"Navigate",label:"Resume & CV — ATS-Optimized Document",description:"Printable & machine-readable software engineer resume",icon:"description",action:()=>{var e;return(e=t.onOpenResume)==null?void 0:e.call(t)}},{id:"open-directives",category:"Navigate",label:"System Directives — Goals & Future Protocols",description:"Sequential tele-printer checklist of engineering milestones",icon:"checklist",action:()=>t.onOpenWindow("directives")},{id:"open-memory",category:"Navigate",label:"Memory Bank Cache — Visual Artifacts & GIFs",description:"Isolated sector of visual logs, Ghibli nostalgia & CRT animations",icon:"photo_library",action:()=>t.onOpenWindow("memory")},{id:"export-json",category:"Data",label:"Export Feed as JSON",description:"Download current life feed as a JSON file",icon:"download",action:()=>{var e;return(e=t.onExport)==null?void 0:e.call(t,"json")}},{id:"export-csv",category:"Data",label:"Export Feed as CSV",description:"Download current life feed as a CSV spreadsheet",icon:"table_view",action:()=>{var e;return(e=t.onExport)==null?void 0:e.call(t,"csv")}},{id:"refresh-data",category:"Data",label:"Refresh Data Stream",description:"Re-fetch all life events from connected sources",icon:"refresh",action:()=>{var e;return(e=t.onRefresh)==null?void 0:e.call(t)}},{id:"toggle-demo",category:"System",label:t.isDemo?"Disable Demo Mode":"Enable Demo Mode",description:t.isDemo?"Switch back to live data sources":"Load anonymised sample data for presentation",icon:t.isDemo?"visibility_off":"play_demo",action:()=>t.onToggleDemo(!t.isDemo)},{id:"toggle-audio",category:"System",label:t.isMuted?"Unmute UI Sounds":"Mute UI Sounds",description:"Toggle retro click / beep sound effects",icon:t.isMuted?"volume_up":"volume_off",shortcut:"M",action:()=>t.onToggleAudio()},{id:"view-github",category:"Links",label:"View on GitHub",description:"Open the source code repository",icon:"code",action:()=>window.open("https://github.com","_blank")},{id:"view-linkedin",category:"Links",label:"LinkedIn Profile",description:"Open LinkedIn profile in new tab",icon:"person",action:()=>window.open("https://linkedin.com","_blank")}],_2=["Navigate","Data","System","Links"];function y2({isOpen:t,onClose:e,onOpenWindow:n,onToggleDemo:i,onToggleAudio:r,onExport:s,onRefresh:a,onOpenContact:o,onOpenResume:l,isDemo:u,isMuted:h}){const[p,f]=oe.useState(""),[m,x]=oe.useState(0),E=oe.useRef(null),g=v2({onOpenWindow:n,onToggleDemo:i,onToggleAudio:r,onExport:s,onRefresh:a,onOpenContact:o,onOpenResume:l,isDemo:u,isMuted:h}),d=p.trim()?g.filter(M=>M.label.toLowerCase().includes(p.toLowerCase())||M.description.toLowerCase().includes(p.toLowerCase())||M.category.toLowerCase().includes(p.toLowerCase())):g,v=_2.reduce((M,w)=>{const A=d.filter(_=>_.category===w);return A.length&&(M[w]=A),M},{});oe.useEffect(()=>{t&&(f(""),x(0),setTimeout(()=>{var M;return(M=E.current)==null?void 0:M.focus()},50))},[t]),oe.useEffect(()=>{if(!t)return;const M=w=>{if(w.key==="ArrowDown")w.preventDefault(),x(A=>Math.min(A+1,d.length-1));else if(w.key==="ArrowUp")w.preventDefault(),x(A=>Math.max(A-1,0));else if(w.key==="Enter"){w.preventDefault();const A=d[m];A&&S(A)}};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[t,d,m]);const S=oe.useCallback(M=>{Re.playExec(),e(),setTimeout(()=>M.action(),80)},[e]);if(!t)return null;let y=0;return c.jsxs("div",{className:"fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]",onClick:e,children:[c.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm"}),c.jsxs("div",{className:"relative w-full max-w-xl mx-4 rounded-xl overflow-hidden shadow-2xl",onClick:M=>M.stopPropagation(),style:{background:"#13121e",border:"1px solid #2e2d3e",boxShadow:"0 32px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,163,115,0.15)"},children:[c.jsxs("div",{className:"flex items-center gap-3 px-4 py-3.5 border-b border-[#2e2d3e]",children:[c.jsx("span",{className:"material-symbols-outlined text-[#6b6880] text-[20px] flex-shrink-0",children:"search"}),c.jsx("input",{ref:E,type:"text",value:p,onChange:M=>{f(M.target.value),x(0)},placeholder:"Search commands…",className:"flex-1 bg-transparent text-[#f0eeff] text-[15px] outline-none placeholder-[#4a4862] font-sans"}),c.jsx("kbd",{className:"text-[10px] font-bold text-[#4a4862] bg-[#1e1d2c] px-2 py-0.5 rounded border border-[#2e2d3e]",children:"ESC"})]}),c.jsx("div",{className:"overflow-y-auto",style:{maxHeight:"55vh"},children:d.length===0?c.jsxs("div",{className:"px-4 py-8 text-center text-[#4a4862] text-[13px] font-code-terminal",children:['No commands match "',p,'"']}):Object.entries(v).map(([M,w])=>c.jsxs("div",{children:[c.jsx("div",{className:"px-4 py-1.5 text-[10px] font-bold text-[#4a4862] uppercase tracking-widest border-b border-[#1e1d2c]",children:M}),w.map(A=>{const _=y===m,R=y++;return c.jsxs("button",{onMouseEnter:()=>x(R),onClick:()=>S(A),className:`w-full text-left flex items-center gap-3 px-4 py-2.5 transition-colors ${_?"bg-[#d4a373]/15 border-l-2 border-[#d4a373]":"border-l-2 border-transparent hover:bg-[#1e1d2c]"}`,children:[c.jsx("div",{className:`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${_?"bg-[#d4a373]/20":"bg-[#1e1d2c]"}`,children:c.jsx("span",{className:`material-symbols-outlined text-[17px] ${_?"text-[#d4a373]":"text-[#6b6880]"}`,children:A.icon})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("p",{className:`text-[13px] font-semibold truncate ${_?"text-[#f0eeff]":"text-[#c9c5e0]"}`,children:A.label}),c.jsx("p",{className:"text-[11px] text-[#4a4862] truncate",children:A.description})]}),A.shortcut&&c.jsx("kbd",{className:"text-[10px] font-bold text-[#6b6880] bg-[#1e1d2c] px-1.5 py-0.5 rounded border border-[#2e2d3e] flex-shrink-0",children:A.shortcut})]},A.id)})]},M))}),c.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-t border-[#2e2d3e] bg-[#0f0e18]",children:[c.jsx("span",{className:"text-[10px] text-[#4a4862] font-code-terminal",children:"OBSOLESCENCE PROTOCOL // COMMAND PALETTE"}),c.jsxs("div",{className:"flex items-center gap-3 text-[10px] text-[#4a4862]",children:[c.jsxs("span",{children:[c.jsx("kbd",{className:"bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded",children:"↑↓"})," navigate"]}),c.jsxs("span",{children:[c.jsx("kbd",{className:"bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded",children:"↵"})," run"]}),c.jsxs("span",{children:[c.jsx("kbd",{className:"bg-[#1e1d2c] border border-[#2e2d3e] px-1 rounded",children:"⌘K"})," toggle"]})]})]})]})]})}const Tn={name:"Rohan Joshi",role:"Software Developer Intern @ India Christian Matrimony (ICM)",location:"Bengaluru, Karnataka",email:"rohan.joshi.dev@gmail.com",linkedin:{url:"https://linkedin.com/in/rohanrj1008",skills:["React","FastAPI","PostgreSQL (Supabase)","SwiftUI","PyTorch","TensorFlow","Node.js","Docker","Firebase"]},github:{url:"https://github.com/rohanrjoshii"},leetcode:{url:"https://leetcode.com/u/Rohan2502/",handle:"Rohan2502",easy:62,medium:98,hard:36,ranking:"#862,436",streak:39}};function S2({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=oe.useState(null);oe.useEffect(()=>{t&&fetch(`/api/profile/leetcode/${Tn.leetcode.handle}`).then(p=>p.json()).then(p=>{p.error||o(p)}).catch(()=>{})},[t]);const l=(a==null?void 0:a.solved)||Tn.leetcode,u=a!=null&&a.ranking?`#${a.ranking.toLocaleString()}`:Tn.leetcode.ranking,h=(a==null?void 0:a.streak)??Tn.leetcode.streak;return c.jsx(Xi,{id:"profile",title:"DEVELOPER_PROFILE // CREDENTIALS & BENCHMARKS",isOpen:t,isMinimized:e,onClose:()=>n("profile"),onMinimize:i,onFocus:r,zIndex:s,width:"max-w-3xl",titleBg:"bg-[#000080]",headerIcon:"badge",initialPosition:{x:70,y:50},children:c.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-4 text-[12px]",children:[c.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-secondary-container font-bold text-[13px]",children:["> ENGINEER DOSSIER: ",Tn.name.toUpperCase()]}),c.jsxs("p",{className:"text-[11px] text-gray-400",children:[Tn.role," · ",Tn.location]})]}),c.jsx("span",{className:"bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset",children:"ACTIVE"})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[c.jsxs("div",{className:"bg-[#1a1a24] p-3 win-bevel-outset space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-2 border-b border-[#2e2d3e] pb-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[#5eadf0] text-[18px]",children:"contact_page"}),c.jsx("span",{className:"font-bold text-[#5eadf0]",children:"PROFESSIONAL EXPERIENCE"})]}),c.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Current Role:"}),c.jsx("span",{className:"font-bold text-white",children:"Software Developer Intern"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Company:"}),c.jsx("span",{className:"font-bold text-[#81b29a]",children:"India Christian Matrimony"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Education:"}),c.jsx("span",{className:"font-bold text-[#d4a373]",children:"PES University (BCA)"})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Email:"}),c.jsx("span",{className:"font-bold text-white font-mono",children:Tn.email})]})]}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-gray-400 font-bold block mb-1",children:"CORE TECH STACK:"}),c.jsx("div",{className:"flex flex-wrap gap-1",children:Tn.linkedin.skills.map(p=>c.jsx("span",{className:"bg-[#242330] text-[#81b29a] text-[10px] px-1.5 py-0.5 win-bevel-outset font-mono",children:p},p))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-1.5 pt-1",children:[c.jsx("a",{href:Tn.linkedin.url,target:"_blank",rel:"noopener noreferrer",className:"block text-center win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-1.5 text-[11px] font-bold",children:"LinkedIn →"}),c.jsx("a",{href:Tn.github.url,target:"_blank",rel:"noopener noreferrer",className:"block text-center win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-1.5 text-[11px] font-bold",children:"GitHub →"})]})]}),c.jsxs("div",{className:"bg-[#1a1a24] p-3 win-bevel-outset space-y-3",children:[c.jsxs("div",{className:"flex items-center gap-2 border-b border-[#2e2d3e] pb-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[#f59e0b] text-[18px]",children:"code"}),c.jsx("span",{className:"font-bold text-[#f59e0b]",children:"LEETCODE ALGORITHM BENCHMARK"})]}),c.jsxs("div",{className:"space-y-1.5 text-[11px]",children:[c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Handle:"}),c.jsxs("span",{className:"font-bold text-white",children:["@",Tn.leetcode.handle]})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Global Rank:"}),c.jsx("span",{className:"font-bold text-[#d4a373]",children:u})]}),c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-gray-400",children:"Active Streak:"}),c.jsxs("span",{className:"font-bold text-amber-400",children:[h," Days"]})]})]}),c.jsxs("div",{className:"space-y-1.5 pt-1 border-t border-[#2e2d3e]",children:[c.jsxs("div",{className:"flex justify-between text-[11px]",children:[c.jsx("span",{className:"text-[#22c55e] font-bold",children:"Easy Solved:"}),c.jsx("span",{className:"font-bold text-white",children:l.easy})]}),c.jsxs("div",{className:"flex justify-between text-[11px]",children:[c.jsx("span",{className:"text-[#f59e0b] font-bold",children:"Medium Solved:"}),c.jsx("span",{className:"font-bold text-white",children:l.medium})]}),c.jsxs("div",{className:"flex justify-between text-[11px]",children:[c.jsx("span",{className:"text-[#ef4444] font-bold",children:"Hard Solved:"}),c.jsx("span",{className:"font-bold text-white",children:l.hard})]}),c.jsxs("div",{className:"flex justify-between text-[11px] pt-1 border-t border-[#2e2d3e] font-bold",children:[c.jsx("span",{className:"text-white",children:"Total Solved:"}),c.jsx("span",{className:"text-[#d4a373] text-[13px]",children:l.total})]})]}),c.jsx("a",{href:Tn.leetcode.url,target:"_blank",rel:"noopener noreferrer",className:"block text-center win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-1.5 text-[11px] font-bold mt-2",children:"Open LeetCode Profile →"})]})]})]})})}const An={name:"Rohan Joshi",title:"Full-Stack & AI Developer",role:"Software Developer Intern @ India Christian Matrimony",phone:"+91 6361195409",location:"Bengaluru, Karnataka",linkedin:{url:"https://linkedin.com/in/rohanrj1008",skills:["React","FastAPI","PostgreSQL","Supabase","SwiftUI","PyTorch","TensorFlow","Node.js","Docker","Firebase","Python","TypeScript"]},github:{url:"https://github.com/rohanrjoshii"},leetcode:{handle:"Rohan2502",url:"https://leetcode.com/u/Rohan2502/"}},E2={easy:{label:"Easy",color:"#22c55e",barColor:"bg-emerald-500",totalInLc:830},medium:{label:"Medium",color:"#f59e0b",barColor:"bg-amber-500",totalInLc:1730},hard:{label:"Hard",color:"#ef4444",barColor:"bg-rose-500",totalInLc:750}};function b2({onOpenContact:t,onOpenResume:e}){var l;const[n,i]=oe.useState(null),[r,s]=oe.useState(!0);oe.useEffect(()=>{fetch(`/api/profile/leetcode/${An.leetcode.handle}`).then(u=>u.json()).then(u=>{if(u.error)throw new Error(u.error);i(u),s(!1)}).catch(()=>{i({username:An.leetcode.handle,ranking:862436,solved:{total:196,easy:62,medium:98,hard:36},streak:39,activeDays:78,badges:["50 Days Badge 2026","Jul LeetCoding Challenge"]}),s(!1)})},[]);const a=((l=n==null?void 0:n.solved)==null?void 0:l.total)||196,o=n!=null&&n.ranking?n.ranking.toLocaleString():"862,436";return c.jsx("section",{className:"w-full max-w-6xl mx-auto font-code-terminal",children:c.jsxs("div",{className:"win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]",children:[c.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px] text-primary-container flex-shrink-0",children:"badge"}),c.jsxs("span",{className:"text-[11px] sm:text-[12px] font-bold tracking-wider truncate",children:["DEVELOPER_DOSSIER // TELEMETRY & CREDENTIALS [ID: ",An.name.toUpperCase(),"]"]})]}),c.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-[11px] font-bold text-gray-300",children:[c.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"}),c.jsx("span",{children:"VERIFIED CREDENTIALS"})]})]}),c.jsx("div",{className:"p-3 sm:p-5 space-y-4 bg-[#141419]",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4",children:[c.jsxs("div",{className:"lg:col-span-5 bg-[#1a1a24] p-3.5 sm:p-4 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between space-y-3.5",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between border-b border-[#2e2d3e] pb-3",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[c.jsx("h2",{className:"text-[17px] sm:text-[19px] font-bold text-white tracking-wide",children:An.name}),c.jsx("span",{className:"bg-[#0f6d00] text-white text-[9px] font-bold px-1.5 py-0.5 win-bevel-outset",children:"INTERN @ ICM"})]}),c.jsx("p",{className:"text-[12px] sm:text-[13px] text-[#81b29a] font-bold mt-0.5",children:An.title}),c.jsxs("p",{className:"text-[11px] text-gray-400 mt-0.5",children:[An.location," • ",An.phone]})]}),c.jsxs("div",{className:"text-right flex-shrink-0",children:[c.jsx("span",{className:"text-[10px] text-gray-400 block font-bold",children:"EDUCATION"}),c.jsx("span",{className:"text-[12px] font-bold text-[#d4a373]",children:"PES University"})]})]}),c.jsxs("div",{className:"mt-3 bg-[#242330] p-2.5 win-bevel-inset border-l-2 border-[#d4a373] space-y-0.5",children:[c.jsx("span",{className:"text-[9px] text-gray-400 block uppercase font-bold",children:"Current Production Role:"}),c.jsxs("p",{className:"text-[11px] text-white font-bold",children:["> ",An.role]}),c.jsx("p",{className:"text-[10px] text-gray-300",children:"FastAPI, PostgreSQL (Supabase RLS), React, CI/CD"})]}),c.jsxs("div",{className:"mt-3 space-y-1.5",children:[c.jsx("span",{className:"text-[10px] text-gray-400 uppercase font-bold tracking-wider",children:"Core Technical Competencies:"}),c.jsx("div",{className:"flex flex-wrap gap-1.5 pt-0.5",children:An.linkedin.skills.map(u=>c.jsx("span",{className:"bg-[#242330] text-[#f4f1de] text-[10px] sm:text-[11px] px-2 py-0.5 win-bevel-outset border border-[#3e3d50] font-mono hover:text-[#d4a373] transition-colors",children:u},u))})]})]}),c.jsxs("div",{className:"pt-2 space-y-2",children:[c.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[c.jsxs("button",{onClick:t,className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white py-2 px-1.5 text-[11px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px] text-amber-300",children:"mail"}),c.jsx("span",{children:"CONTACT"})]}),c.jsxs("button",{onClick:e,className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-2 px-1.5 text-[11px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px] text-primary-container",children:"description"}),c.jsx("span",{children:"VIEW RESUME"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[c.jsxs("a",{href:An.linkedin.url,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-1.5 px-1.5 text-[10px] font-bold transition-all text-center",children:[c.jsx("svg",{className:"w-3 h-3 fill-current text-[#5eadf0]",viewBox:"0 0 24 24",children:c.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),c.jsx("span",{children:"LINKEDIN"})]}),c.jsxs("a",{href:An.github.url,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-1 win-bevel-button bg-[#2b2a36] hover:bg-[#3b3a4a] text-white py-1.5 px-1.5 text-[10px] font-bold transition-all text-center",children:[c.jsx("span",{className:"material-symbols-outlined text-[13px] text-amber-300",children:"code"}),c.jsx("span",{children:"GITHUB"})]})]})]})]}),c.jsxs("div",{className:"lg:col-span-7 bg-[#1a1a24] p-3.5 sm:p-4 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-[#2e2d3e] pb-3 flex-wrap gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[#f59e0b] text-[18px] sm:text-[20px]",children:"code_blocks"}),c.jsxs("div",{children:[c.jsx("span",{className:"text-[12px] sm:text-[13px] font-bold text-white",children:"LEETCODE BENCHMARK"}),c.jsxs("span",{className:"text-[10px] sm:text-[11px] text-gray-400 block",children:["HANDLE: @",An.leetcode.handle]})]})]}),c.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 text-right",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] text-gray-400 block font-bold",children:"GLOBAL RANK"}),c.jsxs("span",{className:"text-[12px] sm:text-[13px] font-bold text-[#d4a373]",children:["#",o]})]}),(n==null?void 0:n.streak)>0&&c.jsxs("div",{className:"pl-3 border-l border-[#2e2d3e]",children:[c.jsx("span",{className:"text-[10px] text-gray-400 block font-bold",children:"STREAK"}),c.jsxs("span",{className:"text-[12px] sm:text-[13px] font-bold text-amber-400",children:[n.streak," DAYS"]})]})]})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-2 my-3",children:[c.jsxs("div",{className:"bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center",children:[c.jsx("span",{className:"text-[9px] sm:text-[10px] text-gray-400 block font-bold",children:"TOTAL SOLVED"}),c.jsx("span",{className:"text-[17px] sm:text-[20px] font-bold text-white",children:a})]}),c.jsxs("div",{className:"bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center",children:[c.jsx("span",{className:"text-[9px] sm:text-[10px] text-gray-400 block font-bold",children:"ACTIVE DAYS"}),c.jsx("span",{className:"text-[17px] sm:text-[20px] font-bold text-[#81b29a]",children:(n==null?void 0:n.activeDays)||78})]}),c.jsxs("div",{className:"bg-[#242330] p-2 sm:p-2.5 win-bevel-inset text-center",children:[c.jsx("span",{className:"text-[9px] sm:text-[10px] text-gray-400 block font-bold",children:"STATUS"}),c.jsx("span",{className:"text-[13px] sm:text-[14px] font-bold text-green-400 leading-[26px] sm:leading-[30px]",children:"ACTIVE"})]})]}),c.jsx("div",{className:"space-y-2 sm:space-y-2.5 mt-3",children:Object.entries(E2).map(([u,h])=>{var m;const p=((m=n==null?void 0:n.solved)==null?void 0:m[u])||0,f=Math.min(100,Math.round(p/h.totalInLc*100));return c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex justify-between text-[10px] sm:text-[11px] font-mono",children:[c.jsxs("span",{style:{color:h.color},className:"font-bold",children:["> ",h.label.toUpperCase()]}),c.jsxs("span",{className:"text-gray-300",children:[c.jsx("strong",{className:"text-white",children:p})," solved"]})]}),c.jsx("div",{className:"w-full bg-[#121216] h-2.5 win-bevel-inset overflow-hidden",children:c.jsx("div",{className:`h-full ${h.barColor} transition-all duration-700`,style:{width:`${Math.max(4,f*3)}%`}})})]},u)})}),c.jsxs("div",{className:"mt-3.5 pt-3 border-t border-[#2e2d3e] space-y-1.5",children:[c.jsx("span",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-wider block",children:"Featured Systems & Projects:"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px]",children:[c.jsxs("div",{className:"bg-[#242330] p-1.5 win-bevel-inset",children:[c.jsx("span",{className:"font-bold text-emerald-400",children:"⚡ Nimbus (macOS Island)"}),c.jsx("p",{className:"text-gray-300",children:"Swift, AppKit, Kernel APIs"})]}),c.jsxs("div",{className:"bg-[#242330] p-1.5 win-bevel-inset",children:[c.jsx("span",{className:"font-bold text-amber-300",children:"📊 FilterIQ (Data Engine)"}),c.jsx("p",{className:"text-gray-300",children:"FastAPI, Pandas, Docker"})]})]})]})]}),c.jsx("div",{className:"pt-2",children:c.jsxs("a",{href:An.leetcode.url,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 win-bevel-button bg-[#363545] hover:bg-[#4a485c] text-white py-2 px-3 text-[11px] sm:text-[12px] font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.6)] cursor-pointer text-center",children:[c.jsx("span",{className:"material-symbols-outlined text-[15px] text-[#f59e0b]",children:"open_in_new"}),c.jsx("span",{children:"VIEW LEETCODE PROFILE & SUBMISSIONS →"})]})})]})]})})]})})}const M2=[{time:"08:00",id:"PID_080",process:"REVERSE_GATEWAY_SYNC // Telemetry Ingestion",status:"OK",desc:"Ingest GitHub, Oura & Strava feeds"},{time:"10:00",id:"PID_100",process:"ICM_PRODUCTION_SPRINT // Supabase RLS & React UI",status:"ACTIVE",desc:"Ship production matrimonial features"},{time:"14:00",id:"PID_140",process:"DISTRIBUTED_SYSTEMS // Architecture & Docker",status:"OK",desc:"Low-latency API proxies & caching"},{time:"17:00",id:"PID_170",process:"LEETCODE_ALGO_PASS // Daily 39d Streak",status:"ACTIVE",desc:"Algorithmic benchmarks (Med/Hard)"},{time:"19:00",id:"PID_190",process:"STRAVA_CYCLING_TELEMETRY // Cadence & GPS",status:"WAIT",desc:"22.8km evening endurance ride"},{time:"23:00",id:"PID_230",process:"OURA_SLEEP_MONITOR // Deep Rest Telemetry",status:"STANDBY",desc:"86% sleep efficiency baseline"}];function w2(){return c.jsx("section",{className:"w-full max-w-6xl mx-auto font-code-terminal",children:c.jsxs("div",{className:"win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]",children:[c.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px] text-emerald-400",children:"schedule"}),c.jsx("span",{className:"text-[11px] sm:text-[12px] font-bold tracking-wider",children:"SYS.CRON // DAEMON_TASKS & OPERATIONAL CADENCE"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-[11px] font-bold",children:[c.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{className:"bg-emerald-600 text-black px-1.5 py-0.2 rounded-xs font-bold text-[9px]",children:"LIVE DAEMON"})]})]}),c.jsxs("div",{className:"p-3 sm:p-4 bg-[#141419] space-y-2.5",children:[c.jsxs("div",{className:"grid grid-cols-12 gap-2 text-gray-400 text-[10px] sm:text-[11px] font-bold pb-1.5 border-b border-[#2e2d3e] uppercase tracking-wider",children:[c.jsx("div",{className:"col-span-2 sm:col-span-2",children:"TIMESTAMP"}),c.jsx("div",{className:"col-span-2 hidden sm:block",children:"PROCESS_ID"}),c.jsx("div",{className:"col-span-7 sm:col-span-6",children:"TASK_PAYLOAD"}),c.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:"STATUS"})]}),c.jsx("div",{className:"space-y-1.5",children:M2.map((t,e)=>{const n=t.status==="ACTIVE",i=t.status==="OK",r=n?"bg-emerald-500 text-black animate-pulse":i?"bg-[#242330] text-emerald-400 border border-emerald-800/60":"bg-[#181822] text-gray-500 border border-gray-800";return c.jsxs("div",{className:`grid grid-cols-12 gap-2 items-center p-2 win-bevel-inset border border-[#2e2d3e] text-[11px] sm:text-[12px] font-mono transition-colors ${n?"bg-[#1a221a] border-emerald-500/40":"bg-[#1a1a24] hover:bg-[#20202c]"}`,children:[c.jsxs("div",{className:"col-span-2 sm:col-span-2 text-amber-300 font-bold",children:["[",t.time,"]"]}),c.jsx("div",{className:"col-span-2 hidden sm:block text-gray-400 font-bold",children:t.id}),c.jsx("div",{className:"col-span-7 sm:col-span-6 text-white truncate",children:c.jsx(fc,{text:t.process,delay:14,startDelay:e*260,showCursor:n})}),c.jsx("div",{className:"col-span-3 sm:col-span-2 text-right",children:c.jsxs("span",{className:`inline-block px-1.5 py-0.5 text-[9px] font-bold win-bevel-outset ${r}`,children:["[",t.status,"]"]})})]},t.id)})}),c.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono",children:[c.jsx("span",{children:"SCHEDULE: 24-HOUR AUTOMATED CADENCE"}),c.jsx("span",{className:"text-[#81b29a] font-bold",children:"6/6 DAEMONS SCHEDULED"})]})]})]})})}const mx=[{label:"LIFETIME_COMMITS",value:"1,420",unit:"OPS",status:"SYNCED",desc:"GitHub Production & OSS Commits"},{label:"DISTANCE_CYCLED",value:"840.5",unit:"KM",status:"ACTIVE",desc:"Strava GPS Cadence & Endurance"},{label:"TOTAL_CODE_HOURS",value:"2,150",unit:"HRS",status:"TRACKED",desc:"Deep Work & Architecture Time"},{label:"BOOKS_&_PAPERS",value:"52",unit:"VOL",status:"PARSED",desc:"Technical & CS Research Papers"},{label:"ALGO_BENCHMARKS",value:"196",unit:"PTS",status:"ACTIVE",desc:"LeetCode Solved (39d Streak)"},{label:"AUDIO_STREAMS",value:"3,840",unit:"TRK",status:"STREAMED",desc:"SoundCloud & Spotify Telemetry"}];function T2(){const[t,e]=oe.useState(mx),[n,i]=oe.useState(0);return oe.useEffect(()=>{const r=setInterval(()=>{i(s=>(s+1)%mx.length)},2800);return()=>clearInterval(r)},[]),c.jsx("section",{className:"w-full max-w-6xl mx-auto font-code-terminal",children:c.jsxs("div",{className:"win-window win-bevel-outset bg-[#1b1b22] text-[#f4f1de] shadow-[8px_8px_0px_rgba(0,0,0,0.8)] border-2 border-[#363545]",children:[c.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between flex-wrap gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px] text-amber-300",children:"speed"}),c.jsx("span",{className:"text-[11px] sm:text-[12px] font-bold tracking-wider",children:"SYS.TELEMETRY // MACRO_METRICS_AGGREGATOR [ODOMETER]"})]}),c.jsxs("div",{className:"flex items-center gap-2 text-[10px] sm:text-[11px] font-bold",children:[c.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"}),c.jsx("span",{className:"text-gray-300 font-mono",children:"ODOMETER_REGISTERS: 6/6 OK"})]})]}),c.jsxs("div",{className:"p-3 sm:p-4 bg-[#141419] space-y-3",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] text-gray-400 border-b border-[#2e2d3e] pb-1.5 font-mono",children:[c.jsx("span",{children:"> LIFETIME AGGREGATED TELEMETRY [NON-VOLATILE CACHE]"}),c.jsx("span",{className:"text-emerald-400 font-bold",children:"STATUS: VERIFIED"})]}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3",children:t.map((r,s)=>{const a=n===s;return c.jsxs("div",{className:`p-3 win-bevel-inset border border-[#2e2d3e] flex flex-col justify-between transition-all hover:border-[#81b29a] ${a?"bg-[#182218] border-emerald-500/50":"bg-[#1a1a24]"}`,children:[c.jsxs("div",{className:"flex justify-between items-start gap-1",children:[c.jsx("span",{className:"text-gray-400 text-[9px] sm:text-[10px] tracking-wider font-bold uppercase truncate",children:r.label}),c.jsxs("span",{className:"text-[9px] font-mono text-gray-600",children:["0x",70+s]})]}),c.jsxs("div",{className:"flex items-baseline gap-1.5 my-2",children:[c.jsx("span",{className:"text-xl sm:text-2xl font-black text-white font-mono tracking-tight select-all",children:r.value}),c.jsx("span",{className:"text-[10px] sm:text-[11px] font-bold text-amber-400 font-mono",children:r.unit})]}),c.jsxs("div",{className:"flex justify-between items-center text-[9px] border-t border-[#2e2d3e] pt-1.5 font-mono",children:[c.jsx("span",{className:"text-gray-500 truncate max-w-[110px]",children:r.desc}),c.jsxs("span",{className:"text-emerald-400 font-bold flex-shrink-0",children:["[",r.status,"]"]})]})]},s)})}),c.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono",children:[c.jsx("span",{children:"ODOMETER_ENGINE: ACTIVE POLLING (2800ms)"}),c.jsx("span",{className:"text-[#81b29a] font-bold",children:'TYPE "metrics" IN CLI FOR AUDIT'})]})]})]})})}function A2({isOpen:t,onClose:e}){if(!t)return null;const n=()=>{Re.playExec(),window.print()},i=()=>{Re.playClick();const r=`================================================================================
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
================================================================================`,s=new Blob([r],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download="Rohan_Joshi_Software_Developer_Resume.txt",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)};return c.jsx("div",{className:"fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs font-code-terminal",onClick:e,children:c.jsxs("div",{className:"w-full max-w-3xl max-h-[90vh] win-window win-bevel-outset bg-[#1b1b24] shadow-[16px_16px_0px_rgba(0,0,0,0.95)] border-2 border-[#363545] flex flex-col",onClick:r=>r.stopPropagation(),children:[c.jsxs("div",{className:"win-titlebar bg-[#000080] text-white px-3 py-1.5 flex items-center justify-between select-none flex-shrink-0",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px] text-amber-300",children:"description"}),c.jsx("span",{className:"text-[12px] font-bold tracking-wider",children:"ATS_RESUME_VIEWER // ROHAN_JOSHI_RESUME.PDF"})]}),c.jsx("button",{onClick:()=>{Re.playClick(),e()},className:"win-bevel-button bg-gray-300 text-black px-2 py-0.5 text-[11px] font-bold hover:bg-white leading-none",children:"✕"})]}),c.jsxs("div",{className:"bg-[#242330] p-2.5 border-b border-[#363545] flex items-center justify-between gap-2 flex-wrap flex-shrink-0",children:[c.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-gray-300",children:[c.jsx("span",{className:"bg-[#0f6d00] text-white text-[9px] font-bold px-1.5 py-0.5 win-bevel-outset",children:"ATS-OPTIMIZED"}),c.jsx("span",{className:"hidden sm:inline",children:"Clean, machine-readable developer curriculum vitae."})]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{onClick:i,className:"win-bevel-button bg-gray-300 hover:bg-white text-black px-2.5 py-1 text-[11px] font-bold flex items-center gap-1 cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"download"}),c.jsx("span",{children:"DOWNLOAD .TXT"})]}),c.jsxs("button",{onClick:n,className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-3 py-1 text-[11px] font-bold flex items-center gap-1 shadow-[2px_2px_0px_rgba(0,0,0,0.5)] cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"print"}),c.jsx("span",{children:"PRINT / PDF →"})]})]})]}),c.jsxs("div",{className:"p-4 sm:p-6 overflow-y-auto bg-[#ffffff] text-[#111111] font-mono text-[11px] sm:text-[12px] leading-relaxed space-y-4 select-text",children:[c.jsxs("div",{className:"text-center border-b-2 border-black pb-3",children:[c.jsx("h1",{className:"text-[22px] sm:text-[26px] font-black tracking-tight uppercase",children:"Rohan Joshi"}),c.jsxs("p",{className:"text-[11px] text-gray-700 mt-0.5",children:["Bengaluru, Karnataka • +91 6361195409 • ",c.jsx("a",{href:"mailto:rohan.joshi.dev@gmail.com",className:"underline font-bold",children:"rohan.joshi.dev@gmail.com"})]}),c.jsxs("p",{className:"text-[11px] text-gray-700 mt-0.5",children:["LinkedIn: ",c.jsx("a",{href:"https://linkedin.com/in/rohanrj1008",target:"_blank",rel:"noreferrer",className:"underline font-bold",children:"linkedin.com/in/rohanrj1008"})," • GitHub: ",c.jsx("a",{href:"https://github.com/rohanrjoshii",target:"_blank",rel:"noreferrer",className:"underline font-bold",children:"github.com/rohanrjoshii"})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Summary"}),c.jsxs("p",{className:"text-gray-900",children:["Full-stack developer with experience building production web applications using ",c.jsx("strong",{children:"React"}),", ",c.jsx("strong",{children:"FastAPI"}),", ",c.jsx("strong",{children:"PostgreSQL (Supabase)"}),", ",c.jsx("strong",{children:"Firebase"}),", and ",c.jsx("strong",{children:"SwiftUI"}),". Built AI-powered applications using ",c.jsx("strong",{children:"PyTorch"})," and ",c.jsx("strong",{children:"TensorFlow"}),", including a deepfake detection platform and real-time emotion recognition system."]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Experience"}),c.jsxs("div",{className:"space-y-1 text-gray-900",children:[c.jsxs("div",{className:"flex justify-between font-bold",children:[c.jsx("span",{children:"Software Developer Intern"}),c.jsx("span",{className:"text-gray-600",children:"Dec 2025 – Present"})]}),c.jsxs("div",{className:"flex justify-between text-gray-700 italic text-[11px]",children:[c.jsx("span",{children:"India Christian Matrimony (ICM)"}),c.jsx("span",{children:"Bengaluru, India"})]}),c.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] pt-1",children:[c.jsx("li",{children:"Built a full-stack matrimonial platform with 15+ responsive UI screens, authentication workflows, backend APIs, and CI/CD deployment pipelines."}),c.jsx("li",{children:"Built the Supabase (PostgreSQL) backend with Row Level Security (RLS) for secure real-time sync and scalable profile management."}),c.jsx("li",{children:"Developed onboarding, profile management, and matchmaking features using React, Supabase, and REST APIs."}),c.jsx("li",{children:"Implemented RESTful API layer with structured validation and optimised client-server data handling."})]})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Skills"}),c.jsxs("div",{className:"space-y-1 text-gray-900 text-[11px]",children:[c.jsxs("p",{children:[c.jsx("strong",{children:"Frontend:"})," React, SwiftUI, AppKit, React Native, Tailwind CSS, Vite"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Backend:"})," FastAPI, Node.js, Firebase, REST APIs"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Databases:"})," PostgreSQL (Supabase), MySQL, Firestore"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"AI / ML:"})," PyTorch, TensorFlow, OpenCV, Hugging Face Transformers, NLP"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Languages:"})," Python, JavaScript, TypeScript, Swift, Java, Dart, HTML/CSS"]}),c.jsxs("p",{children:[c.jsx("strong",{children:"Tools:"})," Docker, Git, GitHub Actions, CI/CD"]})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Projects"}),c.jsxs("div",{className:"space-y-2.5 text-gray-900",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[c.jsx("span",{children:"Nimbus | macOS Dynamic Island Clone"}),c.jsx("span",{className:"text-gray-600",children:"June 2026"})]}),c.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"Swift, SwiftUI, AppKit, CoreLocation, EventKit"}),c.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[c.jsx("li",{children:"Built a macOS Dynamic Island clone with live system monitoring (CPU, RAM, network, battery), media controls, real-time weather, and calendar integration — zero external dependencies."}),c.jsx("li",{children:"Engineered morphing between 5 window geometries using NSPanel + NSAnimationContext with cubic Bézier easing; sourced telemetry directly from raw kernel APIs (host_processor_info, IOKit, getifaddrs)."}),c.jsx("li",{children:"Integrated CoreLocation + Open-Meteo weather, EventKit calendar, and SMAppService launch-at-login with graceful permission-denied fallbacks."})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[c.jsx("span",{children:"FilterIQ | Smart Data Filtering App"}),c.jsx("span",{className:"text-gray-600",children:"Feb 2026"})]}),c.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"Python, FastAPI, Pandas, JavaScript, Docker"}),c.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[c.jsx("li",{children:"Built a full-stack app for filtering Excel/CSV/PDF files via natural language queries, processing 10,000+ rows in under 2 seconds."}),c.jsx("li",{children:"Engineered a data normalisation system with 95%+ accuracy using regex + Pandas, supporting 12+ operators (equals, contains, between, AND/OR logic)."}),c.jsx("li",{children:"Reduced manual filtering time by 80%; built responsive UI with Chart.js visualisations and dark/light themes."})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[c.jsx("span",{children:"Satya | Deepfake Detection Platform"}),c.jsx("span",{className:"text-gray-600",children:"Jan 2025"})]}),c.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"React, FastAPI, PyTorch, OpenCV"}),c.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[c.jsx("li",{children:"Developed an AI-powered deepfake detection platform achieving 90%+ prediction accuracy on manipulated media during internal testing."}),c.jsx("li",{children:"Integrated OpenCV frame-extraction pipeline processing 500+ video frames per submission; displayed real-time confidence scores via React frontend."})]})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between font-bold text-[11px]",children:[c.jsx("span",{children:"BizzConnect | B2B Networking App"}),c.jsx("span",{className:"text-gray-600",children:"May 2024 – Dec 2025"})]}),c.jsx("p",{className:"text-[10px] text-gray-600 italic",children:"Flutter, Firebase, K-Means"}),c.jsxs("ul",{className:"list-disc list-inside space-y-0.5 text-gray-800 text-[11px] mt-0.5",children:[c.jsx("li",{children:"Built a location-based B2B networking app with intelligent business discovery powered by K-Means clustering for matchmaking relevance."}),c.jsx("li",{children:"Implemented Firebase backend with authentication and real-time profile updates for 100+ simulated users."})]})]})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Certifications"}),c.jsxs("ul",{className:"list-disc list-inside text-gray-900 text-[11px] space-y-0.5",children:[c.jsx("li",{children:"Oracle OCI Generative AI Professional – Oracle"}),c.jsx("li",{children:"Google AI Intensive (5-Day) – Google"}),c.jsx("li",{children:"McKinsey Forward Program – McKinsey & Company"}),c.jsx("li",{children:"AI Fluency for Students – Anthropic"})]})]}),c.jsxs("div",{children:[c.jsx("h2",{className:"text-[12px] font-black uppercase tracking-wider bg-gray-200 px-2 py-0.5 mb-1.5 border-l-4 border-black",children:"Education"}),c.jsxs("div",{className:"flex justify-between text-gray-900 font-bold text-[11px]",children:[c.jsx("span",{children:"PES University, RR Campus"}),c.jsx("span",{className:"text-gray-600",children:"Aug 2023 – May 2026"})]}),c.jsx("p",{className:"text-[11px] text-gray-700",children:"Bachelor of Computer Applications (BCA) • Bengaluru, India"})]})]}),c.jsxs("div",{className:"bg-[#1b1b24] px-4 py-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 flex-shrink-0",children:[c.jsx("span",{children:"VERIFIED RESUME // ROHAN JOSHI"}),c.jsx("button",{onClick:e,className:"hover:text-white font-bold cursor-pointer",children:"[ESC] CLOSE"})]})]})})}const R2=[{id:1,status:"DONE",category:"SYSTEM",title:"Architect Obsolescence Protocol Reverse Gateway",desc:"Fault-isolated proxy aggregating 5+ live telemetry APIs with in-memory TTL caching.",date:"Aug 2026"},{id:2,status:"DONE",category:"PRODUCTION",title:"Ship Production Matrimonial Platform @ ICM",desc:"Engineered Supabase PostgreSQL RLS backend and 15+ responsive React screens.",date:"Dec 2025"},{id:3,status:"DONE",category:"SYSTEM",title:"Build Nimbus macOS Dynamic Island Clone",desc:"Sourced telemetry directly from raw kernel APIs (host_processor_info, IOKit) in Swift/AppKit.",date:"June 2026"},{id:4,status:"DONE",category:"ALGORITHM",title:"Maintain 39d LeetCode Daily Streak & 196+ Solved",desc:"Verified problem solving benchmark across Easy, Medium, and Hard tiers.",date:"Ongoing"},{id:5,status:"PEND",category:"ACADEMIC",title:"Graduate BCA @ PES University (RR Campus)",desc:"Complete Bachelor of Computer Applications degree in Bengaluru, India.",date:"May 2026"},{id:6,status:"PEND",category:"ALGORITHM",title:"Target 500+ LeetCode Solved & Knight Tier Benchmark",desc:"Scale algorithmic mastery across dynamic programming, graphs, and system design.",date:"Q4 2026"},{id:7,status:"PEND",category:"CAREER",title:"Secure High-Impact Full-Stack / Distributed SWE Role",desc:"Join engineering team building resilient distributed systems and low-latency APIs.",date:"Active"},{id:8,status:"PEND",category:"OPEN_SOURCE",title:"Open-Source Retro Telemetry OS Component Framework",desc:"Package window state engine, Web Audio oscillators, and Three.js CRT visualizer.",date:"Queued"}];function C2({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=oe.useState(R2),[l,u]=oe.useState("ALL"),[h,p]=oe.useState(0),f=v=>{Re.playClick(),o(S=>S.map(y=>y.id===v?{...y,status:y.status==="DONE"?"PEND":"DONE"}:y))},m=()=>{Re.playExec(),p(v=>v+1)},x=a.filter(v=>l==="ACTIVE"?v.status==="PEND":l==="DONE"?v.status==="DONE":!0),E=a.filter(v=>v.status==="DONE").length,g=a.length,d=Math.round(E/g*100);return c.jsx(Xi,{id:"directives",title:"SYSTEM_DIRECTIVES // GOALS & FUTURE PROTOCOLS",isOpen:t,isMinimized:e,onClose:()=>n("directives"),onMinimize:i,onFocus:r,zIndex:s,width:"max-w-2xl",titleBg:"bg-[#000080]",headerIcon:"checklist",initialPosition:{x:60,y:50},children:c.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-3.5 text-[12px]",children:[c.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-emerald-400 font-bold text-[13px]",children:"> ACTIVE SYSTEM DIRECTIVES:"}),c.jsxs("span",{className:"text-amber-300 font-mono text-[11px] font-bold",children:[E,"/",g," EXECUTED (",d,"%)"]})]}),c.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:"Personal engineering roadmap & long-term protocol directives."})]}),c.jsx("button",{onClick:m,className:"win-bevel-button bg-[#242330] hover:bg-[#343340] text-gray-300 px-2 py-1 text-[10px] font-bold cursor-pointer",title:"Re-run Typewriter Stream",children:"↻ RE-STREAM"})]}),c.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-[#2e2d3e] pb-2 flex-wrap",children:[c.jsx("div",{className:"flex gap-1 text-[10px]",children:["ALL","ACTIVE","DONE"].map(v=>c.jsx("button",{onClick:()=>{Re.playClick(),u(v)},className:`px-2 py-0.5 win-bevel-outset font-bold cursor-pointer ${l===v?"bg-[#000080] text-white":"bg-[#242330] text-gray-400 hover:text-white"}`,children:v==="ACTIVE"?"ACTIVE (PENDING)":v==="DONE"?"EXECUTED (DONE)":"ALL DIRECTIVES"},v))}),c.jsx("span",{className:"text-[10px] text-gray-400 font-mono",children:"CLICK [ ] TO TOGGLE STATUS"})]}),c.jsx("div",{className:"space-y-2 max-h-[360px] overflow-y-auto pr-1",children:x.map((v,S)=>{const y=v.status==="DONE";return c.jsx("div",{onClick:()=>f(v.id),className:`p-2.5 win-bevel-inset border border-[#2e2d3e] cursor-pointer transition-all hover:border-[#81b29a] ${y?"bg-[#181822]/80 opacity-85":"bg-[#1e1e2c]"}`,children:c.jsxs("div",{className:"flex items-start gap-2.5",children:[c.jsxs("span",{className:`font-mono text-[14px] font-bold leading-none select-none flex-shrink-0 mt-0.5 ${y?"text-emerald-400":"text-amber-400"}`,children:["[",y?"X":" ","]"]}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center justify-between gap-2",children:[c.jsx("span",{className:`text-[12px] font-bold tracking-wide ${y?"text-emerald-300 line-through":"text-white"}`,children:c.jsx(fc,{text:v.title,delay:16,startDelay:S*220,showCursor:!y})}),c.jsx("span",{className:"text-[9px] bg-[#121218] text-gray-400 px-1.5 py-0.5 win-bevel-outset font-mono flex-shrink-0",children:v.category})]}),c.jsxs("p",{className:"text-[11px] text-gray-400 mt-0.5 font-mono",children:["> ",v.desc]})]})]})},v.id)})},h),c.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400",children:[c.jsx("span",{children:"DIRECTIVE PROTOCOL: ENGAGED"}),c.jsx("span",{className:"text-[#81b29a] font-bold",children:'TYPE "directives" IN CLI TO OPEN'})]})]})})}const fd=[{id:"MEM_01",title:"SYSTEM_BOOT_SEQUENCE.GIF",tag:"CORE_OS",size:"1.2 MB",hash:"0x8F9A",url:"https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",desc:"Low-level kernel initialization & BIOS memory diagnostic dump."},{id:"MEM_02",title:"NEURAL_NET_TRAINING.GIF",tag:"AI_ML",size:"890 KB",hash:"0x3C4B",url:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",desc:"Deepfake & transformer weight convergence backprop stream."},{id:"MEM_03",title:"GHIBLI_TRAIN_COASTAL.GIF",tag:"NOSTALGIA",size:"1.8 MB",hash:"0x9E21",url:"https://media.giphy.com/media/xUPGGwW6EXLUVOic00/giphy.gif",desc:"Spirited Away serene ocean railway memory bank sector."},{id:"MEM_04",title:"RETRO_CYBER_MATRIX.GIF",tag:"CORE_OS",size:"1.4 MB",hash:"0x55FA",url:"https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif",desc:"Green phosphorescent terminal cascade and telemetry flux."},{id:"MEM_05",title:"DOCKER_CONTAINER_CLUSTER.GIF",tag:"INFRA",size:"950 KB",hash:"0x1A8E",url:"https://media.giphy.com/media/Y408WUTP9u4ESwYVBl/giphy.gif",desc:"Fault-isolated reverse gateway container orchestration."},{id:"MEM_06",title:"GHIBLI_STUDY_DESK.GIF",tag:"NOSTALGIA",size:"2.1 MB",hash:"0x4D0C",url:"https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",desc:"Whisper of the Heart midnight engineering & writing desk."}];function N2({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=oe.useState("ALL"),[l,u]=oe.useState(fd[0]),h=fd.filter(p=>a==="ALL"?!0:p.tag===a);return c.jsx(Xi,{id:"memory",title:"MEMORY_BANK_CACHE // VISUAL ARTIFACTS & SECTOR DUMP",isOpen:t,isMinimized:e,onClose:()=>n("memory"),onMinimize:i,onFocus:r,zIndex:s,width:"max-w-4xl",titleBg:"bg-[#000080]",headerIcon:"photo_library",initialPosition:{x:50,y:35},children:c.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 space-y-4 text-[12px]",children:[c.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("span",{className:"text-amber-300 font-bold text-[13px]",children:"> DIR: C:\\MEMORY_CACHE\\SECTOR_07\\"}),c.jsxs("span",{className:"text-emerald-400 font-mono text-[11px] font-bold",children:["[",fd.length," ARTIFACTS MOUNTED]"]})]}),c.jsx("p",{className:"text-[10px] text-gray-400 mt-0.5",children:"Isolated sectors of visual logs, Ghibli nostalgia, and architecture telemetry."})]}),c.jsx("span",{className:"bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset",children:"CACHE: ONLINE"})]}),c.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-[#2e2d3e] pb-2 flex-wrap",children:[c.jsx("div",{className:"flex gap-1 text-[10px]",children:["ALL","CORE_OS","AI_ML","INFRA","NOSTALGIA"].map(p=>c.jsx("button",{onClick:()=>{Re.playClick(),o(p)},className:`px-2 py-0.5 win-bevel-outset font-bold cursor-pointer transition-all ${a===p?"bg-[#000080] text-white":"bg-[#242330] text-gray-400 hover:text-white"}`,children:p},p))}),c.jsx("span",{className:"text-[10px] text-gray-400 font-mono",children:"SELECT THUMBNAIL TO PREVIEW"})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-4",children:[c.jsxs("div",{className:"md:col-span-7 bg-[#1a1a24] p-3 win-bevel-outset space-y-2.5 flex flex-col justify-between",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px] text-gray-400 border-b border-[#2e2d3e] pb-1.5 font-mono",children:[c.jsx("span",{className:"text-emerald-400 font-bold",children:l.title}),c.jsxs("span",{children:[l.size," · ",l.hash]})]}),c.jsxs("div",{className:"relative bg-black rounded border-2 border-[#2e2d3e] overflow-hidden aspect-video flex items-center justify-center",children:[c.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 opacity-20",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"}}),c.jsx("img",{src:l.url,alt:l.title,className:"w-full h-full object-cover",loading:"lazy"})]}),c.jsxs("div",{className:"bg-[#121218] p-2.5 win-bevel-inset border border-[#2e2d3e] space-y-1",children:[c.jsxs("div",{className:"flex justify-between items-center text-[10px]",children:[c.jsx("span",{className:"text-gray-400 font-bold uppercase",children:"Sector Tag:"}),c.jsxs("span",{className:"text-amber-300 font-mono font-bold",children:["[",l.tag,"]"]})]}),c.jsxs("p",{className:"text-[11px] text-gray-300 font-mono",children:["> ",l.desc]})]})]}),c.jsx("div",{className:"md:col-span-5 space-y-2 max-h-[380px] overflow-y-auto pr-1",children:h.map(p=>{const f=l.id===p.id;return c.jsxs("div",{onClick:()=>{Re.playClick(),u(p)},className:`p-2 win-bevel-inset border border-[#2e2d3e] cursor-pointer flex gap-2.5 items-center transition-all hover:border-[#81b29a] ${f?"bg-[#222a22] border-emerald-500/60":"bg-[#1a1a24]"}`,children:[c.jsx("div",{className:"w-12 h-12 bg-black rounded border border-[#3e3d50] overflow-hidden flex-shrink-0 relative",children:c.jsx("img",{src:p.url,alt:p.title,className:"w-full h-full object-cover opacity-80",loading:"lazy"})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"flex justify-between items-baseline",children:c.jsx("span",{className:`text-[11px] font-bold truncate block ${f?"text-emerald-300":"text-white"}`,children:p.title})}),c.jsxs("div",{className:"flex justify-between items-center text-[9px] text-gray-400 mt-1 font-mono",children:[c.jsxs("span",{children:["[",p.tag,"]"]}),c.jsx("span",{children:p.size})]})]})]},p.id)})})]}),c.jsxs("div",{className:"pt-2 border-t border-[#2e2d3e] flex justify-between items-center text-[10px] text-gray-400 font-mono",children:[c.jsx("span",{children:"STORAGE: NON-VOLATILE FLASH CACHE"}),c.jsx("span",{className:"text-[#81b29a] font-bold",children:'TYPE "memory" OR "gallery" IN CLI'})]})]})})}function P2({isOpen:t,isMinimized:e,onClose:n,onMinimize:i,onFocus:r,zIndex:s}){const[a,o]=oe.useState({callsign:"",frequency:"",classification:"RECRUITER",payload:""}),[l,u]=oe.useState("IDLE"),[h,p]=oe.useState(""),f="rohan.joshi.dev@gmail.com";if(oe.useEffect(()=>{if(l==="ENCRYPTING"){const g="0123456789ABCDEF$#@%*!<>~_/";let d=0;const v=16,S=setInterval(()=>{let y="";for(let M=0;M<48;M++)y+=g[Math.floor(Math.random()*g.length)];p(y),d++,d>=v&&(clearInterval(S),u("TRANSMITTING"),setTimeout(()=>{u("SENT"),Re.playExec()},1200))},70);return()=>clearInterval(S)}},[l]),!t)return null;const m=g=>{g.preventDefault(),!(!a.callsign.trim()||!a.frequency.trim()||!a.payload.trim())&&(Re.playExec(),u("ENCRYPTING"))},x=()=>{Re.playClick(),o({callsign:"",frequency:"",classification:"RECRUITER",payload:""}),u("IDLE")},E=()=>{Re.playExec();const g=encodeURIComponent(`[${a.classification}] Transmission from ${a.callsign||"Recruiter"}`),d=encodeURIComponent(`SENDER_CALLSIGN: ${a.callsign}
RETURN_FREQUENCY: ${a.frequency}
CLASSIFICATION: ${a.classification}

PAYLOAD:
${a.payload}`);window.location.href=`mailto:${f}?subject=${g}&body=${d}`};return c.jsx(Xi,{id:"transmission",title:"SYS.TRANSMITTER // PGP_SECURE_RELAY [PORT_25]",isOpen:t,isMinimized:e,onClose:()=>{u("IDLE"),n&&n("transmission")},onMinimize:i,onFocus:r,zIndex:s,width:"max-w-lg",titleBg:"bg-[#000080]",headerIcon:"mark_email_read",initialPosition:{x:65,y:40},children:c.jsxs("div",{className:"bg-[#141419] text-[#f4f1de] font-code-terminal p-4 sm:p-5 space-y-4 text-[12px]",children:[c.jsxs("div",{className:"bg-black text-white p-3 win-bevel-inset flex justify-between items-center flex-wrap gap-2",children:[c.jsxs("div",{children:[c.jsxs("span",{className:"text-emerald-400 font-bold text-[12px] block font-mono",children:["> DESTINATION: ROHAN JOSHI [",f,"]"]}),c.jsx("p",{className:"text-[10px] text-gray-400 font-mono mt-0.5",children:"Secure PGP-Encrypted Dispatch Protocol · Bengaluru Sector"})]}),c.jsx("span",{className:"bg-[#0f6d00] text-white text-[10px] font-bold px-2 py-0.5 win-bevel-outset",children:"RELAY: ARMED"})]}),l==="SENT"?c.jsxs("div",{className:"py-6 px-4 bg-[#182218] border border-emerald-500/50 win-bevel-inset text-center space-y-3 font-mono",children:[c.jsx("div",{className:"inline-block p-2 rounded-full bg-emerald-500 text-black mb-1",children:c.jsx("span",{className:"material-symbols-outlined text-2xl font-bold",children:"check_circle"})}),c.jsx("p",{className:"text-emerald-400 font-bold text-[14px]",children:"> TRANSMISSION DELIVERED TO GATEWAY [200 OK]"}),c.jsx("p",{className:"text-gray-300 text-[11px]",children:"Payload encrypted & logged for Rohan Joshi. Expected turnaround: <12 hours."}),c.jsxs("div",{className:"bg-black/60 p-2 border border-emerald-900 text-[10px] text-emerald-600 font-mono text-left space-y-0.5",children:[c.jsx("div",{children:"ENCRYPTION_HASH : SHA256_0x7FE99B8820A"}),c.jsxs("div",{children:["SENDER_CALLSIGN : ",a.callsign]}),c.jsxs("div",{children:["CLASSIFICATION  : [",a.classification,"]"]})]}),c.jsxs("div",{className:"pt-2 flex justify-center gap-2 flex-wrap",children:[c.jsx("button",{onClick:E,className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-3 py-1.5 text-[11px] font-bold cursor-pointer",children:"OPEN IN DEFAULT MAIL CLIENT →"}),c.jsx("button",{onClick:x,className:"win-bevel-button bg-[#242330] hover:bg-[#343340] text-gray-300 px-3 py-1.5 text-[11px] font-bold cursor-pointer",children:"TRANSMIT ANOTHER"})]})]}):l==="ENCRYPTING"||l==="TRANSMITTING"?c.jsxs("div",{className:"py-8 px-4 bg-black border-2 border-emerald-500/60 win-bevel-inset text-center space-y-3 font-mono",children:[c.jsxs("div",{className:"text-emerald-400 font-bold text-[13px] animate-pulse",children:["> ",l==="ENCRYPTING"?"ENCRYPTING BUFFER VIA PGP SHA-256 CIPHER...":"RELAYING THROUGH REVERSE GATEWAY..."]}),c.jsx("div",{className:"text-emerald-500 text-[12px] font-mono break-all tracking-widest bg-[#0a120a] p-3 border border-emerald-900 select-none",children:h}),c.jsx("p",{className:"text-[10px] text-gray-400",children:"Generating cryptographic payload handshake on PORT_25..."})]}):c.jsxs("form",{onSubmit:m,className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> CLASSIFICATION LEVEL:"}),c.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:["RECRUITER","COLLABORATION","GENERAL_QUERY"].map(g=>c.jsxs("button",{type:"button",onClick:()=>{Re.playClick(),o({...a,classification:g})},className:`py-1 px-1.5 win-bevel-outset text-[10px] font-bold font-mono cursor-pointer transition-all ${a.classification===g?"bg-[#000080] text-white border-white":"bg-[#242330] text-gray-400 hover:text-white"}`,children:["[",g,"]"]},g))})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> SENDER_CALLSIGN (NAME):"}),c.jsx("input",{required:!0,type:"text",value:a.callsign,onChange:g=>o({...a,callsign:g.target.value}),className:"w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-emerald-500 rounded",placeholder:"e.g. Alex Mercer"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> RETURN_FREQUENCY (EMAIL):"}),c.jsx("input",{required:!0,type:"email",value:a.frequency,onChange:g=>o({...a,frequency:g.target.value}),className:"w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono px-2.5 py-1.5 text-[11px] focus:outline-none focus:border-emerald-500 rounded",placeholder:"e.g. alex@company.com"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-gray-400 text-[10px] font-bold uppercase mb-1 font-mono",children:"> PAYLOAD_BUFFER (MESSAGE):"}),c.jsx("textarea",{required:!0,rows:4,value:a.payload,onChange:g=>o({...a,payload:g.target.value}),className:"w-full bg-black text-emerald-400 border border-[#3e3d50] font-mono p-2 text-[11px] focus:outline-none focus:border-emerald-500 rounded resize-none",placeholder:"Enter technical proposal, role requirements, or general inquiry..."})]}),c.jsxs("div",{className:"pt-2 flex justify-between items-center border-t border-[#2e2d3e] font-mono",children:[c.jsx("span",{className:"text-[10px] text-gray-500",children:"PGP_STATUS: IDLE_WAIT"}),c.jsxs("button",{type:"submit",className:"win-bevel-button bg-[#000080] hover:bg-[#0000a0] text-white px-4 py-2 text-[11px] font-bold flex items-center gap-1.5 cursor-pointer",children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",children:"lock"}),c.jsx("span",{children:"[ EXECUTE TRANSMISSION ]"})]})]})]})]})})}const hd=["AWARD MODULAR BIOS v4.51PG, An Energy Star Ally","Copyright (C) 1984-2026, Award Software, Inc.","PENTIUM-PRO CPU at 200MHz","Memory Test : 65536K OK","Award Plug and Play BIOS Extension v1.0A","Initialize Plug and Play Cards...","PNP Init Completed","Detecting Primary Master ... OBSOLESCENCE_SSD_512MB","Detecting Primary Slave  ... NONE","Mounting ROHAN_JOSHI_KERNEL (v4.19.95-darwin)... [OK]","Initializing Reverse Gateway Subsystem (Port 3000)... [OK]","Synchronizing In-Memory TTL Cache Layer (180s)... [OK]","Loading Telemetry Daemons (GitHub, Oura, Strava)... [OK]","Mounting PGP Secure Transmission Relay (Port 25)... [OK]","Allocating WebGL Three.js CRT Shaders (60 FPS)... [OK]","Bypassing Security Protocols & System Guardrails... [DONE]","==========================================================","INIT: OBSOLESCENCE PROTOCOL v4.19.95 ENGAGED — SYSTEM READY"];function I2({onBootComplete:t}){const[e,n]=oe.useState([]),[i,r]=oe.useState(0);return oe.useEffect(()=>{let s=0;const a=setInterval(()=>{s<hd.length?(Re.playClick(),n(l=>[...l,hd[s]]),s++,r(Math.round(s/hd.length*100))):(clearInterval(a),Re.playExec(),setTimeout(t,700))},140),o=l=>{(l.key==="Escape"||l.key===" "||l.key==="Enter")&&(clearInterval(a),Re.playExec(),t())};return window.addEventListener("keydown",o),()=>{clearInterval(a),window.removeEventListener("keydown",o)}},[t]),c.jsxs("div",{className:"fixed inset-0 z-[200] bg-black text-[#00ff00] font-code-terminal flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden cursor-pointer",onClick:()=>{Re.playExec(),t()},children:[c.jsx("div",{className:"absolute inset-0 pointer-events-none z-30 opacity-30",style:{background:"repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)"}}),c.jsxs("div",{className:"relative z-20 flex justify-between items-start border-b border-[#00ff00]/40 pb-3 text-[11px] sm:text-[13px] font-mono",children:[c.jsxs("div",{children:[c.jsx("div",{className:"font-bold text-[#00ff00] tracking-wider text-[13px] sm:text-[15px]",children:"> OBSOLESCENCE KERNEL BOOTLOADER // BIOS v4.19"}),c.jsx("div",{className:"text-gray-400 text-[10px] sm:text-[11px]",children:"ROHAN JOSHI ARCHITECTURE · BENGALURU SECTOR"})]}),c.jsxs("div",{className:"text-right font-mono",children:[c.jsxs("span",{className:"text-amber-400 font-bold animate-pulse text-[11px]",children:["BOOTING ",i,"%"]}),c.jsx("div",{className:"text-[10px] text-gray-500 hidden sm:block",children:"[PRESS SPACE / ESC TO SKIP]"})]})]}),c.jsxs("div",{className:"relative z-20 flex-1 my-4 overflow-y-auto space-y-1 text-[11px] sm:text-[13px] font-mono leading-snug",children:[e.map((s,a)=>c.jsx("div",{className:s.includes("OK")||s.includes("DONE")||s.includes("ENGAGED")?"text-[#00ff00] font-bold":s.includes("==")?"text-amber-300 font-bold":"text-[#88ff88]",children:s},a)),c.jsx("div",{className:"inline-block w-2.5 h-4 bg-[#00ff00] animate-pulse ml-0.5 align-middle"})]}),c.jsxs("div",{className:"relative z-20 border-t border-[#00ff00]/40 pt-2 flex justify-between items-center text-[10px] sm:text-[11px] text-gray-400 font-mono",children:[c.jsx("span",{children:"GATEWAY: CONNECTED (127.0.0.1:3000)"}),c.jsx("button",{onClick:s=>{s.stopPropagation(),Re.playExec(),t()},className:"text-[#00ff00] hover:text-white font-bold underline cursor-pointer",children:"[SKIP TO DESKTOP]"})]})]})}function D2({windows:t=[],activeWindowId:e,onToggleWindow:n,onOpenWindow:i,onToggleAudio:r,isMuted:s,isDemo:a,onToggleDemo:o,onOpenCommandPalette:l}){const[u,h]=oe.useState(!1),[p,f]=oe.useState("");return oe.useEffect(()=>{const m=()=>{f(new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"}))};m();const x=setInterval(m,1e3);return()=>clearInterval(x)},[]),c.jsxs("footer",{className:"fixed bottom-0 left-0 w-full z-50 bg-[#c0c0c0] border-t-2 border-white win-bevel-outset flex justify-between items-center h-10 px-1 font-code-terminal text-code-terminal",children:[c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>{Re.playClick(),h(!u)},className:`win-bevel-button px-3 py-1 font-bold flex items-center gap-1.5 text-[12px] text-black ${u?"bg-gray-400 border-black":"bg-gray-300"}`,children:[c.jsx("span",{className:"material-symbols-outlined text-[18px] text-[#000080]",style:{fontVariationSettings:'"FILL" 1'},children:"grid_view"}),c.jsx("span",{children:"Start"})]}),u&&c.jsx("div",{className:"absolute bottom-11 left-0 w-64 bg-[#c0c0c0] win-bevel-outset shadow-[8px_8px_0px_rgba(0,0,0,0.8)] z-50 p-[2px]",onClick:()=>h(!1),children:c.jsxs("div",{className:"flex",children:[c.jsx("div",{className:"w-8 bg-[#000080] text-white font-bold flex items-end justify-center pb-4 tracking-widest text-[12px] [writing-mode:vertical-lr] transform rotate-180",children:"OBSOLESCENCE OS"}),c.jsxs("div",{className:"flex-1 p-1 space-y-1 text-black font-code-terminal text-[12px]",children:[c.jsxs("button",{onClick:()=>i("terminal"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"terminal"}),c.jsx("span",{children:"Terminal CLI"})]}),c.jsxs("button",{onClick:()=>i("stats"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"analytics"}),c.jsx("span",{children:"Analytics Dashboard"})]}),c.jsxs("button",{onClick:()=>i("sources"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"hub"}),c.jsx("span",{children:"API Connections"})]}),c.jsxs("button",{onClick:()=>i("profile"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"person"}),c.jsx("span",{children:"LinkedIn & LeetCode"})]}),c.jsxs("button",{onClick:()=>i("directives"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"checklist"}),c.jsx("span",{children:"Directives & Goals"})]}),c.jsxs("button",{onClick:()=>i("ipod"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"graphic_eq"}),c.jsx("span",{children:"Music Player"})]}),c.jsxs("button",{onClick:()=>i("memory"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"photo_library"}),c.jsx("span",{children:"Memory & GIF Cache"})]}),c.jsxs("button",{onClick:()=>i("transmission"),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"mark_email_read"}),c.jsx("span",{children:"Contact & Dispatch Relay"})]}),c.jsx("hr",{className:"border-gray-400 my-1"}),c.jsxs("button",{onClick:()=>o(!a),className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"science"}),c.jsxs("span",{children:["Synthetic Demo: ",a?"ON":"OFF"]})]}),c.jsxs("button",{onClick:r,className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:s?"volume_off":"volume_up"}),c.jsxs("span",{children:["Audio Synth: ",s?"MUTED":"ACTIVE"]})]}),l&&c.jsxs("button",{onClick:l,className:"w-full text-left px-2 py-1.5 hover:bg-[#000080] hover:text-white flex items-center gap-2",children:[c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:"search"}),c.jsx("span",{children:"Command Palette (⌘K)"})]})]})]})})]}),c.jsx("div",{className:"hidden sm:flex items-center gap-1 overflow-x-auto max-w-2xl",children:t.map(m=>{const x=e===m.id&&!m.isMinimized;return c.jsxs("button",{onClick:()=>{Re.playClick(),n(m.id)},className:`win-bevel-button px-2 py-1 text-[11px] font-bold truncate max-w-[130px] flex items-center gap-1 text-black ${x?"bg-gray-400 border-black":"bg-gray-300"}`,children:[c.jsx("span",{className:"material-symbols-outlined text-[14px]",children:m.icon||"window"}),c.jsx("span",{className:"truncate",children:m.title})]},m.id)})})]}),c.jsxs("div",{className:"flex items-center gap-2 px-2 py-1 win-bevel-inset bg-gray-200 text-black text-[12px] font-bold",children:[l&&c.jsxs("button",{onClick:l,className:"win-bevel-button bg-gray-300 px-2 py-0.5 text-[10px] font-bold flex items-center gap-1 hover:bg-white text-[#000080] whitespace-nowrap",title:"Open Command Palette (⌘K / Ctrl+K)",children:[c.jsx("span",{className:"material-symbols-outlined text-[13px]",children:"search"}),c.jsx("span",{className:"hidden sm:inline",children:"⌘K"})]}),c.jsx("button",{onClick:r,className:"hover:text-[#000080] flex items-center",title:s?"Unmute Synth":"Mute Synth",children:c.jsx("span",{className:"material-symbols-outlined text-[16px]",children:s?"volume_off":"volume_up"})}),a&&c.jsx("span",{className:"bg-primary-container text-black text-[9px] px-1 font-bold animate-pulse",children:"DEMO"}),c.jsx("span",{children:p})]})]})}function L2(){const[t,e]=oe.useState(()=>!sessionStorage.getItem("system_booted")),[n,i]=oe.useState([]),[r,s]=oe.useState([]),[a,o]=oe.useState(!0),[l,u]=oe.useState(null),[h,p]=oe.useState(!1),[f,m]=oe.useState(!1),[x,E]=oe.useState(!1),[g,d]=oe.useState(!1),v=()=>{sessionStorage.setItem("system_booted","true"),e(!1)},S=()=>{e(!0)},[y,M]=oe.useState(null),[w,A]=oe.useState(null),[_,R]=oe.useState(""),[N,I]=oe.useState(""),[P,Y]=oe.useState({from:new Date(Date.now()-30*24*60*60*1e3),to:new Date}),[K,F]=oe.useState("feed"),[B,z]=oe.useState(20),[D,j]=oe.useState({terminal:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"terminal",title:"Terminal"},stats:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"analytics",title:"Stats"},sources:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"hub",title:"Sources"},ipod:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"graphic_eq",title:"iPod"},profile:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"person",title:"Profile"},directives:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"checklist",title:"Directives"},memory:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"photo_library",title:"Memory Cache"},transmission:{isOpen:!1,isMinimized:!1,zIndex:10,icon:"mark_email_read",title:"Transmit"}});oe.useEffect(()=>{Z(),ee();const fe=setInterval(Z,5*60*1e3);return()=>clearInterval(fe)},[P,w,_,N,h]),oe.useEffect(()=>{const fe=le=>{var ue;if((le.metaKey||le.ctrlKey)&&le.key==="k"){le.preventDefault(),E(qe=>!qe);return}if(le.key==="Escape"){E(!1);return}["INPUT","TEXTAREA","SELECT"].includes((ue=le.target)==null?void 0:ue.tagName)||x||(le.key==="t"||le.key==="T"?we("terminal"):le.key==="s"||le.key==="S"?we("stats"):le.key==="c"||le.key==="C"?we("sources"):le.key==="p"||le.key==="P"?we("ipod"):le.key==="d"||le.key==="D"?(p(qe=>!qe),Re.playBeep(700,"square",.1)):(le.key==="m"||le.key==="M")&&ae())};return window.addEventListener("keydown",fe),()=>window.removeEventListener("keydown",fe)},[x]);const Z=async()=>{var fe;try{o(!0);const le=await YM({from:P.from,to:P.to,sources:w?[w]:void 0,type:_||void 0,search:N||void 0,demo:h});i(le.feed||[]),(fe=le.meta)!=null&&fe.isDemo&&p(!0),u(null)}catch(le){console.error("Error loading feed:",le),u(le.message)}finally{o(!1)}},ee=async()=>{try{const fe=await qM();s(fe.sources||[])}catch(fe){console.error("Error loading sources:",fe)}},re=fe=>{const le=B+1;z(le),F(fe),j(ue=>({...ue,[fe]:{...ue[fe],zIndex:le,isMinimized:!1}}))},we=fe=>{const le=B+1;z(le),F(fe),Re.playClick(),j(ue=>({...ue,[fe]:{...ue[fe],isOpen:!0,isMinimized:!1,zIndex:le}}))},Ve=fe=>{M({...fe,_ts:Date.now()}),we("ipod")},ke=fe=>{Re.playClick(),j(le=>({...le,[fe]:{...le[fe],isOpen:!1}}))},G=fe=>{Re.playClick(),j(le=>({...le,[fe]:{...le[fe],isMinimized:!0}}))},ie=fe=>{const le=D[fe];le&&(!le.isOpen||le.isMinimized?we(fe):K===fe?G(fe):re(fe))},ae=()=>{const fe=Re.toggleMute();m(fe)},Fe=(fe="json")=>{const le=KM({format:fe,from:P.from,to:P.to,sources:w?[w]:void 0,type:_||void 0,search:N||void 0,demo:h});window.open(le,"_blank")},He=n.filter(fe=>{var le,ue;return fe.type==="commit"&&((ue=(le=fe.data)==null?void 0:le.messages)==null?void 0:ue.some(qe=>qe.toLowerCase().includes("error")||qe.toLowerCase().includes("fix")))}).length,Oe=Object.entries(D).filter(([fe,le])=>le.isOpen).map(([fe,le])=>({id:fe,title:le.title,icon:le.icon,isMinimized:le.isMinimized})),[je,Ye]=oe.useState("feed");return c.jsxs("div",{className:"relative min-h-screen bg-[#0f0f13] overflow-x-hidden selection:bg-[#d4a373] selection:text-black font-code-terminal",children:[t&&c.jsx(I2,{onBootComplete:v}),c.jsx(bE,{}),c.jsx("div",{className:"fixed inset-0 crt-scanlines z-50 pointer-events-none"}),c.jsx(y2,{isOpen:x,onClose:()=>E(!1),onOpenWindow:we,onToggleDemo:p,onToggleAudio:ae,onOpenContact:()=>we("transmission"),onOpenResume:()=>d(!0),isDemo:h,isMuted:f}),c.jsx(wE,{onOpenWindow:we,onToggleAudio:ae,onOpenContact:()=>we("transmission"),isMuted:f,isDemo:h}),c.jsxs("main",{className:"relative z-10 pt-24 pb-28 px-margin-edge sm:px-8 max-w-7xl mx-auto min-h-screen flex flex-col gap-6 sm:gap-8",children:[c.jsx(TE,{anomaliesCount:He,sources:r,onRefresh:Z,onOpenSources:()=>we("sources"),onOpenTerminal:()=>we("terminal"),onOpenResume:()=>d(!0)}),c.jsxs("div",{className:"flex items-center justify-between bg-[#121218] p-1.5 rounded-lg border border-[#2e2d3e] font-mono text-[11px] flex-wrap gap-2 shadow-md",children:[c.jsx("span",{className:"text-gray-400 font-bold text-[10px] uppercase ml-1 hidden sm:inline",children:"> ACTIVE_VIEW:"}),c.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:[{id:"feed",label:"📡 LIVE FEED",desc:"Active Telemetry Stream"},{id:"telemetry",label:"⚙️ DAEMON & METRICS",desc:"Cron Routine & Odometers"},{id:"dossier",label:"👤 DEV DOSSIER",desc:"Rohan Joshi Profile & Bio"},{id:"all",label:"📑 ALL MODULES",desc:"Full System View"}].map(fe=>c.jsx("button",{onClick:()=>{Re.playClick(),Ye(fe.id)},className:`px-3 py-1.5 win-bevel-outset text-[11px] font-bold cursor-pointer transition-all ${je===fe.id?"bg-[#000080] text-white border-white":"bg-[#1c1b26] text-gray-300 hover:text-white hover:bg-[#252433]"}`,title:fe.desc,children:fe.label},fe.id))}),c.jsx("button",{onClick:()=>we("directives"),className:"win-bevel-button px-2.5 py-1 text-[10px] bg-[#1a1924] text-emerald-400 hover:text-white font-bold ml-auto",children:"[✓] GOALS & DIRECTIVES"})]}),(je==="feed"||je==="all")&&c.jsx(Ib,{dateRange:P,setDateRange:Y}),(je==="dossier"||je==="all")&&c.jsx(b2,{onOpenContact:()=>we("transmission"),onOpenResume:()=>d(!0)}),(je==="telemetry"||je==="all")&&c.jsx(w2,{}),(je==="telemetry"||je==="all")&&c.jsx(T2,{}),(je==="feed"||je==="all")&&(a&&n.length===0?c.jsxs("div",{className:"endacopia-clay-card p-4 mx-auto mt-8 max-w-md",children:[c.jsx("p",{className:"font-bold text-[14px] text-[#81b29a] animate-pulse",children:"> LOADING LIFE STREAM..."}),c.jsx("p",{className:"text-[#d4a373] mt-1 text-[12px]",children:"> SYNCHRONIZING DATA STREAMS..."})]}):l?c.jsxs("div",{className:"endacopia-clay-card p-4 mx-auto mt-8 max-w-md",children:[c.jsxs("p",{className:"font-bold text-[14px] text-[#e07a5f]",children:["> STREAM FETCH ERROR: ",l]}),c.jsx("button",{onClick:Z,className:"endacopia-clay-button px-4 py-2 mt-4 text-[12px]",children:"RETRY STREAM"})]}):c.jsx(Ob,{feed:n,selectedSource:w,onSelectSource:A,selectedType:_,onSelectType:R,searchQuery:N,onSearchChange:I,onExport:Fe,onExecuteCommand:fe=>{we("terminal")},onOpenIPodWithTrack:Ve}))]}),c.jsx(A2,{isOpen:g,onClose:()=>d(!1)}),c.jsx(Ub,{isOpen:D.terminal.isOpen,isMinimized:D.terminal.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.terminal.zIndex,sources:r,onSetFilter:A,onToggleDemo:p,isDemo:h,onExecuteSearch:I,onTriggerExport:Fe,onOpenContact:()=>we("transmission"),onOpenResume:()=>d(!0),onOpenWindow:we,onPlayTrack:Ve,onReboot:S}),c.jsx(ZM,{isOpen:D.stats.isOpen,isMinimized:D.stats.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.stats.zIndex,isDemo:h}),c.jsx(JM,{isOpen:D.sources.isOpen,isMinimized:D.sources.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.sources.zIndex,sources:r,isDemo:h,onToggleDemo:p,onRefreshSources:ee}),c.jsx(g2,{isOpen:D.ipod.isOpen,isMinimized:D.ipod.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.ipod.zIndex,currentTrack:y}),c.jsx(S2,{isOpen:D.profile.isOpen,isMinimized:D.profile.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.profile.zIndex}),c.jsx(C2,{isOpen:D.directives.isOpen,isMinimized:D.directives.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.directives.zIndex}),c.jsx(N2,{isOpen:D.memory.isOpen,isMinimized:D.memory.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.memory.zIndex}),c.jsx(P2,{isOpen:D.transmission.isOpen,isMinimized:D.transmission.isMinimized,onClose:ke,onMinimize:G,onFocus:re,zIndex:D.transmission.zIndex}),c.jsx(x2,{onOpenTerminal:()=>we("terminal"),onOpenIPod:()=>we("ipod"),onOpenCommandPalette:()=>E(!0)}),c.jsx(D2,{windows:Oe,activeWindowId:K,onToggleWindow:ie,onOpenWindow:we,onToggleAudio:ae,isMuted:f,isDemo:h,onToggleDemo:p,onOpenCommandPalette:()=>E(!0)})]})}class O2 extends Tx.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,n){console.error("App crashed:",e,n)}render(){var e;return this.state.error?c.jsxs("div",{style:{minHeight:"100vh",background:"#0f0f13",color:"#e07a5f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",padding:"2rem",gap:"1rem"},children:[c.jsx("h1",{style:{color:"#d4a373",fontSize:"1.5rem"},children:"RUNTIME ERROR"}),c.jsx("pre",{style:{background:"#1a192a",color:"#81b29a",padding:"1rem",borderRadius:"8px",maxWidth:"800px",overflow:"auto",fontSize:"0.75rem",border:"1px solid #2e2d3e"},children:(e=this.state.error)==null?void 0:e.toString()}),c.jsx("button",{onClick:()=>this.setState({error:null}),style:{background:"#d4a373",color:"#0f0f13",border:"none",padding:"0.5rem 1.5rem",borderRadius:"6px",fontWeight:"bold",cursor:"pointer",fontFamily:"monospace"},children:"RETRY"})]}):this.props.children}}pd.createRoot(document.getElementById("root")).render(c.jsx(Tx.StrictMode,{children:c.jsx(O2,{children:c.jsx(L2,{})})}));
