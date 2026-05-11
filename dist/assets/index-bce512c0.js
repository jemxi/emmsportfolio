(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wm={exports:{}},El={},Tm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),Pv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Dv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),Fv=Symbol.for("react.forward_ref"),Ov=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),ih=Symbol.iterator;function zv(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Am=Object.assign,Cm={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||bm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rm(){}Rm.prototype=Rs.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||bm}var Gd=Hd.prototype=new Rm;Gd.constructor=Hd;Am(Gd,Rs.prototype);Gd.isPureReactComponent=!0;var rh=Array.isArray,Pm=Object.prototype.hasOwnProperty,Wd={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Pm.call(e,i)&&!Nm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:Wd.current}}function Vv(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function Hv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sh=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hv(""+t.key):e.toString(36)}function No(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case Pv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Xl(a,0):i,rh(r)?(n="",t!=null&&(n=t.replace(sh,"$&/")+"/"),No(r,e,n,"",function(c){return c})):r!=null&&(jd(r)&&(r=Vv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(sh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",rh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Xl(s,o);a+=No(s,e,n,l,r)}else if(l=zv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Xl(s,o++),a+=No(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return No(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Lo={transition:null},Wv={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:Wd};function Dm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Rs;Ve.Fragment=Nv;Ve.Profiler=Dv;Ve.PureComponent=Hd;Ve.StrictMode=Lv;Ve.Suspense=Ov;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;Ve.act=Dm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Am({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Pm.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:Uv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iv,_context:t},t.Consumer=t};Ve.createElement=Lm;Ve.createFactory=function(t){var e=Lm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Fv,render:t}};Ve.isValidElement=jd;Ve.lazy=function(t){return{$$typeof:Bv,_payload:{_status:-1,_result:t},_init:Gv}};Ve.memo=function(t,e){return{$$typeof:kv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Lo.transition;Lo.transition={};try{t()}finally{Lo.transition=e}};Ve.unstable_act=Dm;Ve.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Ve.useContext=function(t){return Qt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Ve.useId=function(){return Qt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Qt.current.useRef(t)};Ve.useState=function(t){return Qt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Qt.current.useTransition()};Ve.version="18.3.1";Tm.exports=Ve;var fe=Tm.exports;const jv=Rv(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=fe,$v=Symbol.for("react.element"),Yv=Symbol.for("react.fragment"),qv=Object.prototype.hasOwnProperty,Kv=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zv={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)qv.call(e,i)&&!Zv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$v,type:t,key:s,ref:a,props:r,_owner:Kv.current}}El.Fragment=Yv;El.jsx=Im;El.jsxs=Im;wm.exports=El;var E=wm.exports,Jc={},Um={exports:{}},_n={},Fm={exports:{}},Om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,Y){var q=O.length;O.push(Y);e:for(;0<q;){var te=q-1>>>1,Se=O[te];if(0<r(Se,Y))O[te]=Y,O[q]=Se,q=te;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var Y=O[0],q=O.pop();if(q!==Y){O[0]=q;e:for(var te=0,Se=O.length,Ne=Se>>>1;te<Ne;){var Ge=2*(te+1)-1,Ke=O[Ge],K=Ge+1,ee=O[K];if(0>r(Ke,q))K<Se&&0>r(ee,Ke)?(O[te]=ee,O[K]=q,te=K):(O[te]=Ke,O[Ge]=q,te=Ge);else if(K<Se&&0>r(ee,q))O[te]=ee,O[K]=q,te=K;else break e}}return Y}function r(O,Y){var q=O.sortIndex-Y.sortIndex;return q!==0?q:O.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,h=3,p=!1,m=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=O)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function S(O){if(x=!1,_(O),!m)if(n(l)!==null)m=!0,j(T);else{var Y=n(c);Y!==null&&V(S,Y.startTime-O)}}function T(O,Y){m=!1,x&&(x=!1,d(P),P=-1),p=!0;var q=h;try{for(_(Y),f=n(l);f!==null&&(!(f.expirationTime>Y)||O&&!N());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var Se=te(f.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),_(Y)}else i(l);f=n(l)}if(f!==null)var Ne=!0;else{var Ge=n(c);Ge!==null&&V(S,Ge.startTime-Y),Ne=!1}return Ne}finally{f=null,h=q,p=!1}}var C=!1,A=null,P=-1,M=5,w=-1;function N(){return!(t.unstable_now()-w<M)}function k(){if(A!==null){var O=t.unstable_now();w=O;var Y=!0;try{Y=A(!0,O)}finally{Y?F():(C=!1,A=null)}}else C=!1}var F;if(typeof v=="function")F=function(){v(k)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=k,F=function(){$.postMessage(null)}}else F=function(){g(k,0)};function j(O){A=O,C||(C=!0,F())}function V(O,Y){P=g(function(){O(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,j(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var q=h;h=Y;try{return O()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=h;h=O;try{return Y()}finally{h=q}},t.unstable_scheduleCallback=function(O,Y,q){var te=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?te+q:te):q=te,O){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=q+Se,O={id:u++,callback:Y,priorityLevel:O,startTime:q,expirationTime:Se,sortIndex:-1},q>te?(O.sortIndex=q,e(c,O),n(l)===null&&O===n(c)&&(x?(d(P),P=-1):x=!0,V(S,q-te))):(O.sortIndex=Se,e(l,O),m||p||(m=!0,j(T))),O},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(O){var Y=h;return function(){var q=h;h=Y;try{return O.apply(this,arguments)}finally{h=q}}}})(Om);Fm.exports=Om;var Qv=Fm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv=fe,xn=Qv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,ha={};function Lr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(ha[t]=e,t=0;t<e.length;t++)km.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=Object.prototype.hasOwnProperty,ex=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ah={},oh={};function tx(t){return eu.call(oh,t)?!0:eu.call(ah,t)?!1:ex.test(t)?oh[t]=!0:(ah[t]=!0,!1)}function nx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ix(t,e,n,i){if(e===null||typeof e>"u"||nx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,$d);Bt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,$d);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,$d);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ix(e,n,r,i)&&(n=null),i||r===null?tx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),Bm=Symbol.for("react.provider"),zm=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),iu=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Vm=Symbol.for("react.offscreen"),lh=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,$l;function Zs(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Yl=!1;function ql(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function rx(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=ql(t.type,!1),t;case 11:return t=ql(t.type.render,!1),t;case 1:return t=ql(t.type,!0),t;default:return""}}function ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case tu:return"Profiler";case qd:return"StrictMode";case nu:return"Suspense";case iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zm:return(t.displayName||"Context")+".Consumer";case Bm:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:ru(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return ru(t(e))}catch{}}return null}function sx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ru(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ax(t){var e=Hm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=ax(t))}function Gm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Hm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function su(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wm(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function au(t,e){Wm(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&ou(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ou(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Qs(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function jm(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,$m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ox=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function Ym(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function qm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ym(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lx=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uu(t,e){if(e){if(lx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fu=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hu=null,us=null,ds=null;function hh(t){if(t=Oa(t)){if(typeof hu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Cl(e),hu(t.stateNode,t.type,e))}}function Km(t){us?ds?ds.push(t):ds=[t]:us=t}function Zm(){if(us){var t=us,e=ds;if(ds=us=null,hh(t),e)for(t=0;t<e.length;t++)hh(e[t])}}function Qm(t,e){return t(e)}function Jm(){}var Kl=!1;function e0(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return Qm(t,e,n)}finally{Kl=!1,(us!==null||ds!==null)&&(Jm(),Zm())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Cl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var pu=!1;if(Mi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){pu=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{pu=!1}function cx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ra=!1,Ko=null,Zo=!1,mu=null,ux={onError:function(t){ra=!0,Ko=t}};function dx(t,e,n,i,r,s,a,o,l){ra=!1,Ko=null,cx.apply(ux,arguments)}function fx(t,e,n,i,r,s,a,o,l){if(dx.apply(this,arguments),ra){if(ra){var c=Ko;ra=!1,Ko=null}else throw Error(ie(198));Zo||(Zo=!0,mu=c)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ph(t){if(Dr(t)!==t)throw Error(ie(188))}function hx(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ph(r),t;if(s===i)return ph(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function n0(t){return t=hx(t),t!==null?i0(t):null}function i0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i0(t);if(e!==null)return e;t=t.sibling}return null}var r0=xn.unstable_scheduleCallback,mh=xn.unstable_cancelCallback,px=xn.unstable_shouldYield,mx=xn.unstable_requestPaint,St=xn.unstable_now,gx=xn.unstable_getCurrentPriorityLevel,Jd=xn.unstable_ImmediatePriority,s0=xn.unstable_UserBlockingPriority,Qo=xn.unstable_NormalPriority,vx=xn.unstable_LowPriority,a0=xn.unstable_IdlePriority,wl=null,Jn=null;function xx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:Sx,_x=Math.log,yx=Math.LN2;function Sx(t){return t>>>=0,t===0?32:31-(_x(t)/yx|0)|0}var Ka=64,Za=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Js(o):(s&=a,s!==0&&(i=Js(s)))}else a=n&~r,a!==0?i=Js(a):s!==0&&(i=Js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function Mx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ex(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Vn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Mx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o0(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function wx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var c0,tf,u0,d0,f0,vu=!1,Qa=[],ji=null,Xi=null,$i=null,ga=new Map,va=new Map,Bi=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oa(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function bx(t,e,n,i,r){switch(e){case"focusin":return ji=Os(ji,t,e,n,i,r),!0;case"dragenter":return Xi=Os(Xi,t,e,n,i,r),!0;case"mouseover":return $i=Os($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Os(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,va.set(s,Os(va.get(s)||null,t,e,n,i,r)),!0}return!1}function h0(t){var e=xr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,f0(t.priority,function(){u0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Do(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);fu=i,n.target.dispatchEvent(i),fu=null}else return e=Oa(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){Do(t)&&n.delete(e)}function Ax(){vu=!1,ji!==null&&Do(ji)&&(ji=null),Xi!==null&&Do(Xi)&&(Xi=null),$i!==null&&Do($i)&&($i=null),ga.forEach(vh),va.forEach(vh)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,vu||(vu=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,Ax)))}function xa(t){function e(r){return ks(r,t)}if(0<Qa.length){ks(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&ks(ji,t),Xi!==null&&ks(Xi,t),$i!==null&&ks($i,t),ga.forEach(e),va.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)h0(n),n.blockedOn===null&&Bi.shift()}var fs=Ci.ReactCurrentBatchConfig,el=!0;function Cx(t,e,n,i){var r=it,s=fs.transition;fs.transition=null;try{it=1,nf(t,e,n,i)}finally{it=r,fs.transition=s}}function Rx(t,e,n,i){var r=it,s=fs.transition;fs.transition=null;try{it=4,nf(t,e,n,i)}finally{it=r,fs.transition=s}}function nf(t,e,n,i){if(el){var r=xu(t,e,n,i);if(r===null)oc(t,e,i,tl,n),gh(t,i);else if(bx(r,t,e,n,i))i.stopPropagation();else if(gh(t,i),e&4&&-1<Tx.indexOf(t)){for(;r!==null;){var s=Oa(r);if(s!==null&&c0(s),s=xu(t,e,n,i),s===null&&oc(t,e,i,tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else oc(t,e,i,null,n)}}var tl=null;function xu(t,e,n,i){if(tl=null,t=Qd(i),t=xr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gx()){case Jd:return 1;case s0:return 4;case Qo:case vx:return 16;case a0:return 536870912;default:return 16}default:return 16}}var Hi=null,rf=null,Io=null;function m0(){if(Io)return Io;var t,e=rf,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Io=r.slice(t,1<i?1-i:void 0)}function Uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function xh(){return!1}function yn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:xh,this.isPropagationStopped=xh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=yn(Ps),Fa=vt({},Ps,{view:0,detail:0}),Px=yn(Fa),Ql,Jl,Bs,Tl=vt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Ql=t.screenX-Bs.screenX,Jl=t.screenY-Bs.screenY):Jl=Ql=0,Bs=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),_h=yn(Tl),Nx=vt({},Tl,{dataTransfer:0}),Lx=yn(Nx),Dx=vt({},Fa,{relatedTarget:0}),ec=yn(Dx),Ix=vt({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=yn(Ix),Fx=vt({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=yn(Fx),kx=vt({},Ps,{data:0}),yh=yn(kx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vx[t])?!!e[t]:!1}function af(){return Hx}var Gx=vt({},Fa,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wx=yn(Gx),jx=vt({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=yn(jx),Xx=vt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),$x=yn(Xx),Yx=vt({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=yn(Yx),Kx=vt({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=yn(Kx),Qx=[9,13,27,32],of=Mi&&"CompositionEvent"in window,sa=null;Mi&&"documentMode"in document&&(sa=document.documentMode);var Jx=Mi&&"TextEvent"in window&&!sa,g0=Mi&&(!of||sa&&8<sa&&11>=sa),Mh=String.fromCharCode(32),Eh=!1;function v0(t,e){switch(t){case"keyup":return Qx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function e_(t,e){switch(t){case"compositionend":return x0(e);case"keypress":return e.which!==32?null:(Eh=!0,Mh);case"textInput":return t=e.data,t===Mh&&Eh?null:t;default:return null}}function t_(t,e){if(Jr)return t==="compositionend"||!of&&v0(t,e)?(t=m0(),Io=rf=Hi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n_[t.type]:e==="textarea"}function _0(t,e,n,i){Km(i),e=nl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,_a=null;function i_(t){P0(t,0)}function bl(t){var e=ns(t);if(Gm(e))return t}function r_(t,e){if(t==="change")return e}var y0=!1;if(Mi){var tc;if(Mi){var nc="oninput"in document;if(!nc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),nc=typeof Th.oninput=="function"}tc=nc}else tc=!1;y0=tc&&(!document.documentMode||9<document.documentMode)}function bh(){aa&&(aa.detachEvent("onpropertychange",S0),_a=aa=null)}function S0(t){if(t.propertyName==="value"&&bl(_a)){var e=[];_0(e,_a,t,Qd(t)),e0(i_,e)}}function s_(t,e,n){t==="focusin"?(bh(),aa=e,_a=n,aa.attachEvent("onpropertychange",S0)):t==="focusout"&&bh()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(_a)}function o_(t,e){if(t==="click")return bl(e)}function l_(t,e){if(t==="input"||t==="change")return bl(e)}function c_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:c_;function ya(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!eu.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Ah(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var n=Ah(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ah(n)}}function M0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u_(t){var e=E0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M0(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ch(n,s);var a=Ch(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d_=Mi&&"documentMode"in document&&11>=document.documentMode,es=null,_u=null,oa=null,yu=!1;function Rh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yu||es==null||es!==qo(i)||(i=es,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oa&&ya(oa,i)||(oa=i,i=nl(_u,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},ic={},w0={};Mi&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Al(t){if(ic[t])return ic[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return ic[t]=e[n];return t}var T0=Al("animationend"),b0=Al("animationiteration"),A0=Al("animationstart"),C0=Al("transitionend"),R0=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){R0.set(t,e),Lr(e,[t])}for(var rc=0;rc<Ph.length;rc++){var sc=Ph[rc],f_=sc.toLowerCase(),h_=sc[0].toUpperCase()+sc.slice(1);nr(f_,"on"+h_)}nr(T0,"onAnimationEnd");nr(b0,"onAnimationIteration");nr(A0,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(C0,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Nh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fx(i,e,void 0,t),t.currentTarget=null}function P0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Nh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Nh(r,o,c),s=l}}}if(Zo)throw t=mu,Zo=!1,mu=null,t}function ft(t,e){var n=e[Tu];n===void 0&&(n=e[Tu]=new Set);var i=t+"__bubble";n.has(i)||(N0(e,t,2,!1),n.add(i))}function ac(t,e,n){var i=0;e&&(i|=4),N0(n,t,i,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function Sa(t){if(!t[to]){t[to]=!0,km.forEach(function(n){n!=="selectionchange"&&(p_.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,ac("selectionchange",!1,e))}}function N0(t,e,n,i){switch(p0(e)){case 1:var r=Cx;break;case 4:r=Rx;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=xr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}e0(function(){var c=s,u=Qd(n),f=[];e:{var h=R0.get(t);if(h!==void 0){var p=sf,m=t;switch(t){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":p=Wx;break;case"focusin":m="focus",p=ec;break;case"focusout":m="blur",p=ec;break;case"beforeblur":case"afterblur":p=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$x;break;case T0:case b0:case A0:p=Ux;break;case C0:p=qx;break;case"scroll":p=Px;break;case"wheel":p=Zx;break;case"copy":case"cut":case"paste":p=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sh}var x=(e&4)!==0,g=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=ma(v,d),S!=null&&x.push(Ma(v,S,_)))),g)break;v=v.return}0<x.length&&(h=new p(h,m,null,n,u),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==fu&&(m=n.relatedTarget||n.fromElement)&&(xr(m)||m[Ei]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?xr(m):null,m!==null&&(g=Dr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(x=_h,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Sh,S="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?h:ns(p),_=m==null?h:ns(m),h=new x(S,v+"leave",p,n,u),h.target=g,h.relatedTarget=_,S=null,xr(u)===c&&(x=new x(d,v+"enter",m,n,u),x.target=_,x.relatedTarget=g,S=x),g=S,p&&m)t:{for(x=p,d=m,v=0,_=x;_;_=Ur(_))v++;for(_=0,S=d;S;S=Ur(S))_++;for(;0<v-_;)x=Ur(x),v--;for(;0<_-v;)d=Ur(d),_--;for(;v--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ur(x),d=Ur(d)}x=null}else x=null;p!==null&&Lh(f,h,p,x,!1),m!==null&&g!==null&&Lh(f,g,m,x,!0)}}e:{if(h=c?ns(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=r_;else if(wh(h))if(y0)T=l_;else{T=a_;var C=s_}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=o_);if(T&&(T=T(t,c))){_0(f,T,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&ou(h,"number",h.value)}switch(C=c?ns(c):window,t){case"focusin":(wh(C)||C.contentEditable==="true")&&(es=C,_u=c,oa=null);break;case"focusout":oa=_u=es=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Rh(f,n,u);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":Rh(f,n,u)}var A;if(of)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jr?v0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(g0&&n.locale!=="ko"&&(Jr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jr&&(A=m0()):(Hi=u,rf="value"in Hi?Hi.value:Hi.textContent,Jr=!0)),C=nl(c,P),0<C.length&&(P=new yh(P,t,null,n,u),f.push({event:P,listeners:C}),A?P.data=A:(A=x0(n),A!==null&&(P.data=A)))),(A=Jx?e_(t,n):t_(t,n))&&(c=nl(c,"onBeforeInput"),0<c.length&&(u=new yh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}P0(f,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Ma(t,s,r)),s=ma(t,e),s!=null&&i.push(Ma(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ma(n,s),l!=null&&a.unshift(Ma(n,l,o))):r||(l=ma(n,s),l!=null&&a.push(Ma(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function Dh(t){return(typeof t=="string"?t:""+t).replace(m_,`
`).replace(g_,"")}function no(t,e,n){if(e=Dh(e),Dh(t)!==e&&n)throw Error(ie(425))}function il(){}var Su=null,Mu=null;function Eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wu=typeof setTimeout=="function"?setTimeout:void 0,v_=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,x_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(t){return Ih.resolve(null).then(t).catch(__)}:wu;function __(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xa(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Ns,Ea="__reactProps$"+Ns,Ei="__reactContainer$"+Ns,Tu="__reactEvents$"+Ns,y_="__reactListeners$"+Ns,S_="__reactHandles$"+Ns;function xr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uh(t);t!==null;){if(n=t[Kn])return n;t=Uh(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[Kn]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Cl(t){return t[Ea]||null}var bu=[],is=-1;function ir(t){return{current:t}}function ht(t){0>is||(t.current=bu[is],bu[is]=null,is--)}function dt(t,e){is++,bu[is]=t.current,t.current=e}var er={},Xt=ir(er),an=ir(!1),Tr=er;function xs(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function rl(){ht(an),ht(Xt)}function Fh(t,e,n){if(Xt.current!==er)throw Error(ie(168));dt(Xt,e),dt(an,n)}function L0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,sx(t)||"Unknown",r));return vt({},n,i)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Tr=Xt.current,dt(Xt,t),dt(an,an.current),!0}function Oh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=L0(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ht(an),ht(Xt),dt(Xt,t)):ht(an),dt(an,n)}var hi=null,Rl=!1,cc=!1;function D0(t){hi===null?hi=[t]:hi.push(t)}function M_(t){Rl=!0,D0(t)}function rr(){if(!cc&&hi!==null){cc=!0;var t=0,e=it;try{var n=hi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Rl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),r0(Jd,rr),r}finally{it=e,cc=!1}}return null}var rs=[],ss=0,al=null,ol=0,wn=[],Tn=0,br=null,mi=1,gi="";function hr(t,e){rs[ss++]=ol,rs[ss++]=al,al=t,ol=e}function I0(t,e,n){wn[Tn++]=mi,wn[Tn++]=gi,wn[Tn++]=br,br=t;var i=mi;t=gi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Vn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function cf(t){t.return!==null&&(hr(t,1),I0(t,1,0))}function uf(t){for(;t===al;)al=rs[--ss],rs[ss]=null,ol=rs[--ss],rs[ss]=null;for(;t===br;)br=wn[--Tn],wn[Tn]=null,gi=wn[--Tn],wn[Tn]=null,mi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,pt=!1,On=null;function U0(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cu(t){if(pt){var e=mn;if(e){var n=e;if(!kh(t,e)){if(Au(t))throw Error(ie(418));e=Yi(n.nextSibling);var i=gn;e&&kh(t,e)?U0(i,n):(t.flags=t.flags&-4097|2,pt=!1,gn=t)}}else{if(Au(t))throw Error(ie(418));t.flags=t.flags&-4097|2,pt=!1,gn=t}}}function Bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function io(t){if(t!==gn)return!1;if(!pt)return Bh(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eu(t.type,t.memoizedProps)),e&&(e=mn)){if(Au(t))throw F0(),Error(ie(418));for(;e;)U0(t,e),e=Yi(e.nextSibling)}if(Bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Yi(t.stateNode.nextSibling):null;return!0}function F0(){for(var t=mn;t;)t=Yi(t.nextSibling)}function _s(){mn=gn=null,pt=!1}function df(t){On===null?On=[t]:On.push(t)}var E_=Ci.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zh(t){var e=t._init;return e(t._payload)}function O0(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Qi(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,_,S){return v===null||v.tag!==6?(v=gc(_,d.mode,S),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,S){var T=_.type;return T===Qr?u(d,v,_.props.children,S,_.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Oi&&zh(T)===v.type)?(S=r(v,_.props),S.ref=zs(d,v,_),S.return=d,S):(S=Ho(_.type,_.key,_.props,null,d.mode,S),S.ref=zs(d,v,_),S.return=d,S)}function c(d,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=vc(_,d.mode,S),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function u(d,v,_,S,T){return v===null||v.tag!==7?(v=wr(_,d.mode,S,T),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gc(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $a:return _=Ho(v.type,v.key,v.props,null,d.mode,_),_.ref=zs(d,null,v),_.return=d,_;case Zr:return v=vc(v,d.mode,_),v.return=d,v;case Oi:var S=v._init;return f(d,S(v._payload),_)}if(Qs(v)||Us(v))return v=wr(v,d.mode,_,null),v.return=d,v;ro(d,v)}return null}function h(d,v,_,S){var T=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return T!==null?null:o(d,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:return _.key===T?l(d,v,_,S):null;case Zr:return _.key===T?c(d,v,_,S):null;case Oi:return T=_._init,h(d,v,T(_._payload),S)}if(Qs(_)||Us(_))return T!==null?null:u(d,v,_,S,null);ro(d,_)}return null}function p(d,v,_,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,o(v,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $a:return d=d.get(S.key===null?_:S.key)||null,l(v,d,S,T);case Zr:return d=d.get(S.key===null?_:S.key)||null,c(v,d,S,T);case Oi:var C=S._init;return p(d,v,_,C(S._payload),T)}if(Qs(S)||Us(S))return d=d.get(_)||null,u(v,d,S,T,null);ro(v,S)}return null}function m(d,v,_,S){for(var T=null,C=null,A=v,P=v=0,M=null;A!==null&&P<_.length;P++){A.index>P?(M=A,A=null):M=A.sibling;var w=h(d,A,_[P],S);if(w===null){A===null&&(A=M);break}t&&A&&w.alternate===null&&e(d,A),v=s(w,v,P),C===null?T=w:C.sibling=w,C=w,A=M}if(P===_.length)return n(d,A),pt&&hr(d,P),T;if(A===null){for(;P<_.length;P++)A=f(d,_[P],S),A!==null&&(v=s(A,v,P),C===null?T=A:C.sibling=A,C=A);return pt&&hr(d,P),T}for(A=i(d,A);P<_.length;P++)M=p(A,d,P,_[P],S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?P:M.key),v=s(M,v,P),C===null?T=M:C.sibling=M,C=M);return t&&A.forEach(function(N){return e(d,N)}),pt&&hr(d,P),T}function x(d,v,_,S){var T=Us(_);if(typeof T!="function")throw Error(ie(150));if(_=T.call(_),_==null)throw Error(ie(151));for(var C=T=null,A=v,P=v=0,M=null,w=_.next();A!==null&&!w.done;P++,w=_.next()){A.index>P?(M=A,A=null):M=A.sibling;var N=h(d,A,w.value,S);if(N===null){A===null&&(A=M);break}t&&A&&N.alternate===null&&e(d,A),v=s(N,v,P),C===null?T=N:C.sibling=N,C=N,A=M}if(w.done)return n(d,A),pt&&hr(d,P),T;if(A===null){for(;!w.done;P++,w=_.next())w=f(d,w.value,S),w!==null&&(v=s(w,v,P),C===null?T=w:C.sibling=w,C=w);return pt&&hr(d,P),T}for(A=i(d,A);!w.done;P++,w=_.next())w=p(A,d,P,w.value,S),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?P:w.key),v=s(w,v,P),C===null?T=w:C.sibling=w,C=w);return t&&A.forEach(function(k){return e(d,k)}),pt&&hr(d,P),T}function g(d,v,_,S){if(typeof _=="object"&&_!==null&&_.type===Qr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case $a:e:{for(var T=_.key,C=v;C!==null;){if(C.key===T){if(T=_.type,T===Qr){if(C.tag===7){n(d,C.sibling),v=r(C,_.props.children),v.return=d,d=v;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Oi&&zh(T)===C.type){n(d,C.sibling),v=r(C,_.props),v.ref=zs(d,C,_),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===Qr?(v=wr(_.props.children,d.mode,S,_.key),v.return=d,d=v):(S=Ho(_.type,_.key,_.props,null,d.mode,S),S.ref=zs(d,v,_),S.return=d,d=S)}return a(d);case Zr:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=vc(_,d.mode,S),v.return=d,d=v}return a(d);case Oi:return C=_._init,g(d,v,C(_._payload),S)}if(Qs(_))return m(d,v,_,S);if(Us(_))return x(d,v,_,S);ro(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=gc(_,d.mode,S),v.return=d,d=v),a(d)):n(d,v)}return g}var ys=O0(!0),k0=O0(!1),ll=ir(null),cl=null,as=null,ff=null;function hf(){ff=as=cl=null}function pf(t){var e=ll.current;ht(ll),t._currentValue=e}function Ru(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){cl=t,ff=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(cl===null)throw Error(ie(308));as=t,cl.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var _r=null;function mf(t){_r===null?_r=[t]:_r.push(t)}function B0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,wi(t,i)}function wi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wi(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,wi(t,n)}function Fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function Vh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,x=o;switch(h=e,p=n,x.tag){case 1:if(m=x.payload,typeof m=="function"){f=m.call(p,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=x.payload,h=typeof m=="function"?m.call(p,f,h):m,h==null)break e;f=vt({},f,h);break e;case 2:ki=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=f}}function Hh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var ka={},ei=ir(ka),wa=ir(ka),Ta=ir(ka);function yr(t){if(t===ka)throw Error(ie(174));return t}function vf(t,e){switch(dt(Ta,e),dt(wa,t),dt(ei,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cu(e,t)}ht(ei),dt(ei,e)}function Ss(){ht(ei),ht(wa),ht(Ta)}function V0(t){yr(Ta.current);var e=yr(ei.current),n=cu(e,t.type);e!==n&&(dt(wa,t),dt(ei,n))}function xf(t){wa.current===t&&(ht(ei),ht(wa))}var mt=ir(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function _f(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Oo=Ci.ReactCurrentDispatcher,dc=Ci.ReactCurrentBatchConfig,Ar=0,gt=null,Ct=null,It=null,fl=!1,la=!1,ba=0,w_=0;function zt(){throw Error(ie(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Sf(t,e,n,i,r,s){if(Ar=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oo.current=t===null||t.memoizedState===null?C_:R_,t=n(i,r),la){s=0;do{if(la=!1,ba=0,25<=s)throw Error(ie(301));s+=1,It=Ct=null,e.updateQueue=null,Oo.current=P_,t=n(i,r)}while(la)}if(Oo.current=hl,e=Ct!==null&&Ct.next!==null,Ar=0,It=Ct=gt=null,fl=!1,e)throw Error(ie(300));return t}function Mf(){var t=ba!==0;return ba=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?gt.memoizedState=It=t:It=It.next=t,It}function Pn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?gt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(ie(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?gt.memoizedState=It=t:It=It.next=t}return It}function Aa(t,e){return typeof e=="function"?e(t):e}function fc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ar&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,gt.lanes|=u,Cr|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Gn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function H0(){}function G0(t,e){var n=gt,i=Pn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Ef(X0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,Ca(9,j0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ie(349));Ar&30||W0(n,e,r)}return r}function W0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function j0(t,e,n,i){e.value=n,e.getSnapshot=i,$0(e)&&Y0(t)}function X0(t,e,n){return n(function(){$0(e)&&Y0(t)})}function $0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Y0(t){var e=wi(t,1);e!==null&&Hn(e,t,1,-1)}function Gh(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=A_.bind(null,gt,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function q0(){return Pn().memoizedState}function ko(t,e,n,i){var r=Yn();gt.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function Pl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&yf(i,a.deps)){r.memoizedState=Ca(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function Wh(t,e){return ko(8390656,8,t,e)}function Ef(t,e){return Pl(2048,8,t,e)}function K0(t,e){return Pl(4,2,t,e)}function Z0(t,e){return Pl(4,4,t,e)}function Q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J0(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,Q0.bind(null,e,t),n)}function wf(){}function eg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function tg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ng(t,e,n){return Ar&21?(Gn(n,e)||(n=o0(),gt.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function T_(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=dc.transition;dc.transition={};try{t(!1),e()}finally{it=n,dc.transition=i}}function ig(){return Pn().memoizedState}function b_(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},rg(t))sg(e,n);else if(n=B0(t,e,n,i),n!==null){var r=Kt();Hn(n,t,i,r),ag(n,e,i)}}function A_(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(rg(t))sg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=B0(t,e,r,i),n!==null&&(r=Kt(),Hn(n,t,i,r),ag(n,e,i))}}function rg(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function sg(t,e){la=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ag(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var hl={readContext:Rn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},C_={readContext:Rn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ko(4194308,4,Q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return ko(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=b_.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Gh,useDebugValue:wf,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Gh(!1),e=t[0];return t=T_.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Yn();if(pt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ut===null)throw Error(ie(349));Ar&30||W0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wh(X0.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,j0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Ut.identifierPrefix;if(pt){var n=gi,i=mi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R_={readContext:Rn,useCallback:eg,useContext:Rn,useEffect:Ef,useImperativeHandle:J0,useInsertionEffect:K0,useLayoutEffect:Z0,useMemo:tg,useReducer:fc,useRef:q0,useState:function(){return fc(Aa)},useDebugValue:wf,useDeferredValue:function(t){var e=Pn();return ng(e,Ct.memoizedState,t)},useTransition:function(){var t=fc(Aa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:G0,useId:ig,unstable_isNewReconciler:!1},P_={readContext:Rn,useCallback:eg,useContext:Rn,useEffect:Ef,useImperativeHandle:J0,useInsertionEffect:K0,useLayoutEffect:Z0,useMemo:tg,useReducer:hc,useRef:q0,useState:function(){return hc(Aa)},useDebugValue:wf,useDeferredValue:function(t){var e=Pn();return Ct===null?e.memoizedState=t:ng(e,Ct.memoizedState,t)},useTransition:function(){var t=hc(Aa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:G0,useId:ig,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Pu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Zi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Hn(e,t,r,i),Fo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Zi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Hn(e,t,r,i),Fo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Zi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Hn(e,t,i,n),Fo(e,t,i))}};function jh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ya(n,i)||!ya(r,s):!0}function og(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=on(e)?Tr:Xt.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nl.enqueueReplaceState(e,e.state,null)}function Nu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=on(e)?Tr:Xt.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nl.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=rx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var N_=typeof WeakMap=="function"?WeakMap:Map;function lg(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ml||(ml=!0,Hu=i),Lu(t,e)},n}function cg(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lu(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $h(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new N_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=j_.bind(null,t,e,n),e.then(t,t))}function Yh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var L_=Ci.ReactCurrentOwner,sn=!1;function qt(t,e,n,i){e.child=t===null?k0(e,null,n,i):ys(e,t.child,n,i)}function Kh(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=Sf(t,e,n,i,s,r),n=Mf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(pt&&n&&cf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Zh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ug(t,e,s,i,r)):(t=Ho(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(a,i)&&t.ref===e.ref)return Ti(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function ug(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ya(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Ti(t,e,r)}return Du(t,e,n,i,r)}function dg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(ls,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(ls,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(ls,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(ls,pn),pn|=i;return qt(t,e,r,n),e.child}function fg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Du(t,e,n,i,r){var s=on(n)?Tr:Xt.current;return s=xs(e,s),hs(e,r),n=Sf(t,e,n,i,s,r),i=Mf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ti(t,e,r)):(pt&&i&&cf(e),e.flags|=1,qt(t,e,n,r),e.child)}function Qh(t,e,n,i,r){if(on(n)){var s=!0;sl(e)}else s=!1;if(hs(e,r),e.stateNode===null)Bo(t,e),og(e,n,i),Nu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=on(n)?Tr:Xt.current,c=xs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Xh(e,a,i,c),ki=!1;var h=e.memoizedState;a.state=h,ul(e,i,a,r),l=e.memoizedState,o!==i||h!==l||an.current||ki?(typeof u=="function"&&(Pu(e,n,u,i),l=e.memoizedState),(o=ki||jh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,z0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Un(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=on(n)?Tr:Xt.current,l=xs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Xh(e,a,i,l),ki=!1,h=e.memoizedState,a.state=h,ul(e,i,a,r);var m=e.memoizedState;o!==f||h!==m||an.current||ki?(typeof p=="function"&&(Pu(e,n,p,i),m=e.memoizedState),(c=ki||jh(e,n,c,i,h,m,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,n,i,s,r)}function Iu(t,e,n,i,r,s){fg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Oh(e,n,!1),Ti(t,e,s);i=e.stateNode,L_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,o,s)):qt(t,e,o,s),e.memoizedState=i.state,r&&Oh(e,n,!0),e.child}function hg(t){var e=t.stateNode;e.pendingContext?Fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fh(t,e.context,!1),vf(t,e.containerInfo)}function Jh(t,e,n,i,r){return _s(),df(r),e.flags|=256,qt(t,e,n,i),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function pg(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(mt,r&1),t===null)return Cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Il(a,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fu(n),e.memoizedState=Uu,t):Tf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return D_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Qi(o,s):(s=wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Fu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Uu,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tf(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,i){return i!==null&&df(i),ys(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=pc(Error(ie(422))),so(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Il({mode:"visible",children:i.children},r,0,null),s=wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,t.child,null,a),e.child.memoizedState=Fu(a),e.memoizedState=Uu,s);if(!(e.mode&1))return so(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=pc(s,i,void 0),so(t,e,a,i)}if(o=(a&t.childLanes)!==0,sn||o){if(i=Ut,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wi(t,r),Hn(i,t,r,-1))}return Nf(),i=pc(Error(ie(421))),so(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=X_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Yi(r.nextSibling),gn=e,pt=!0,On=null,t!==null&&(wn[Tn++]=mi,wn[Tn++]=gi,wn[Tn++]=br,mi=t.id,gi=t.overflow,br=e),e=Tf(e,i.children),e.flags|=4096,e)}function ep(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ru(t.return,e,n)}function mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function mg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,n,e);else if(t.tag===19)ep(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ti(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I_(t,e,n){switch(e.tag){case 3:hg(e),_s();break;case 5:V0(e);break;case 1:on(e.type)&&sl(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?pg(t,e,n):(dt(mt,mt.current&1),t=Ti(t,e,n),t!==null?t.sibling:null);dt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return mg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,dg(t,e,n)}return Ti(t,e,n)}var gg,Ou,vg,xg;gg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ou=function(){};vg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(ei.current);var s=null;switch(n){case"input":r=su(t,r),i=su(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=lu(t,r),i=lu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=il)}uu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};xg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function U_(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&rl(),Vt(e),null;case 3:return i=e.stateNode,Ss(),ht(an),ht(Xt),_f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(ju(On),On=null))),Ou(t,e),Vt(e),null;case 5:xf(e);var r=yr(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)vg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Vt(e),null}if(t=yr(ei.current),io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Ea]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)ft(ea[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":ch(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":dh(i,s),ft("invalid",i)}uu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",""+o]):ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ft("scroll",i)}switch(n){case"input":Ya(i),uh(i,s,!0);break;case"textarea":Ya(i),fh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Kn]=e,t[Ea]=i,gg(t,e,!1,!1),e.stateNode=t;e:{switch(a=du(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)ft(ea[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":ch(t,i),r=su(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":dh(t,i),r=lu(t,i),ft("invalid",t);break;default:r=i}uu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?qm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$m(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Yd(t,s,l,a))}switch(n){case"input":Ya(t),uh(t,i,!1);break;case"textarea":Ya(t),fh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)xg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=yr(Ta.current),yr(ei.current),io(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:no(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Vt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&mn!==null&&e.mode&1&&!(e.flags&128))F0(),_s(),e.flags|=98560,s=!1;else if(s=io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Kn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else On!==null&&(ju(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ss(),Ou(t,e),t===null&&Sa(e.stateNode.containerInfo),Vt(e),null;case 10:return pf(e.type._context),Vt(e),null;case 17:return on(e.type)&&rl(),Vt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Vs(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=dl(t),a!==null){for(e.flags|=128,Vs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Es&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=dl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return Vt(e),null}else 2*St()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=mt.current,dt(mt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function F_(t,e){switch(uf(e),e.tag){case 1:return on(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),ht(an),ht(Xt),_f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return Ss(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var ao=!1,Wt=!1,O_=typeof WeakSet=="function"?WeakSet:Set,ve=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function ku(t,e,n){try{n()}catch(i){yt(t,e,i)}}var tp=!1;function k_(t,e){if(Su=el,t=E0(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mu={focusedElem:t,selectionRange:n},el=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var x=m.memoizedProps,g=m.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Un(e.type,x),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return m=tp,tp=!1,m}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ku(e,n,s)}r=r.next}while(r!==i)}}function Ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _g(t){var e=t.alternate;e!==null&&(t.alternate=null,_g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Ea],delete e[Tu],delete e[y_],delete e[S_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yg(t){return t.tag===5||t.tag===3||t.tag===4}function np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}var Ft=null,Fn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)Sg(t,e,n),n=n.sibling}function Sg(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(wl,n)}catch{}switch(n.tag){case 5:Wt||os(n,e);case 6:var i=Ft,r=Fn;Ft=null,Pi(t,e,n),Ft=i,Fn=r,Ft!==null&&(Fn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Fn?(t=Ft,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),xa(t)):lc(Ft,n.stateNode));break;case 4:i=Ft,r=Fn,Ft=n.stateNode.containerInfo,Fn=!0,Pi(t,e,n),Ft=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ku(n,e,a),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Wt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Pi(t,e,n),Wt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new O_),e.forEach(function(i){var r=$_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,Fn=!1;break e;case 3:Ft=o.stateNode.containerInfo,Fn=!0;break e;case 4:Ft=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Ft===null)throw Error(ie(160));Sg(s,a,r),Ft=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mg(e,t),e=e.sibling}function Mg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Xn(t),i&4){try{ca(3,t,t.return),Ll(3,t)}catch(x){yt(t,t.return,x)}try{ca(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:Nn(e,t),Xn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(Nn(e,t),Xn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Wm(r,s),du(o,a);var c=du(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?qm(r,f):u==="dangerouslySetInnerHTML"?$m(r,f):u==="children"?pa(r,f):Yd(r,u,f,c)}switch(o){case"input":au(r,s);break;case"textarea":jm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?cs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ea]=s}catch(x){yt(t,t.return,x)}}break;case 6:if(Nn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){yt(t,t.return,x)}}break;case 3:if(Nn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:Nn(e,t),Xn(t);break;case 13:Nn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cf=St())),i&4&&ip(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,Nn(e,t),Wt=c):Nn(e,t),Xn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ve=t,u=t.child;u!==null;){for(f=ve=u;ve!==null;){switch(h=ve,p=h.child,h.tag){case 0:case 11:case 14:case 15:ca(4,h,h.return);break;case 1:os(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){sp(f);continue}}p!==null?(p.return=h,ve=p):sp(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ym("display",a))}catch(x){yt(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){yt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Nn(e,t),Xn(t),i&4&&ip(t);break;case 21:break;default:Nn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=np(t);Vu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=np(t);zu(t,o,a);break;default:throw Error(ie(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B_(t,e,n){ve=t,Eg(t)}function Eg(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Wt;o=ao;var c=Wt;if(ao=a,(Wt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?ap(r):l!==null?(l.return=a,ve=l):ap(r);for(;s!==null;)ve=s,Eg(s),s=s.sibling;ve=r,ao=o,Wt=c}rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):rp(t)}}function rp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||Ll(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Wt||e.flags&512&&Bu(e)}catch(h){yt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function sp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function ap(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ll(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Bu(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{Bu(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var z_=Math.ceil,pl=Ci.ReactCurrentDispatcher,bf=Ci.ReactCurrentOwner,Cn=Ci.ReactCurrentBatchConfig,Xe=0,Ut=null,bt=null,kt=0,pn=0,ls=ir(0),Rt=0,Ra=null,Cr=0,Dl=0,Af=0,ua=null,rn=null,Cf=0,Es=1/0,fi=null,ml=!1,Hu=null,Ki=null,oo=!1,Gi=null,gl=0,da=0,Gu=null,zo=-1,Vo=0;function Kt(){return Xe&6?St():zo!==-1?zo:zo=St()}function Zi(t){return t.mode&1?Xe&2&&kt!==0?kt&-kt:E_.transition!==null?(Vo===0&&(Vo=o0()),Vo):(t=it,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function Hn(t,e,n,i){if(50<da)throw da=0,Gu=null,Error(ie(185));Ua(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(Dl|=n),Rt===4&&zi(t,kt)),ln(t,i),n===1&&Xe===0&&!(e.mode&1)&&(Es=St()+500,Rl&&rr()))}function ln(t,e){var n=t.callbackNode;Ex(t,e);var i=Jo(t,t===Ut?kt:0);if(i===0)n!==null&&mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mh(n),e===1)t.tag===0?M_(op.bind(null,t)):D0(op.bind(null,t)),x_(function(){!(Xe&6)&&rr()}),n=null;else{switch(l0(i)){case 1:n=Jd;break;case 4:n=s0;break;case 16:n=Qo;break;case 536870912:n=a0;break;default:n=Qo}n=Ng(n,wg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wg(t,e){if(zo=-1,Vo=0,Xe&6)throw Error(ie(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=Jo(t,t===Ut?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vl(t,i);else{e=i;var r=Xe;Xe|=2;var s=bg();(Ut!==t||kt!==e)&&(fi=null,Es=St()+500,Er(t,e));do try{G_();break}catch(o){Tg(t,o)}while(1);hf(),pl.current=s,Xe=r,bt!==null?e=0:(Ut=null,kt=0,e=Rt)}if(e!==0){if(e===2&&(r=gu(t),r!==0&&(i=r,e=Wu(t,r))),e===1)throw n=Ra,Er(t,0),zi(t,i),ln(t,St()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!V_(r)&&(e=vl(t,i),e===2&&(s=gu(t),s!==0&&(i=s,e=Wu(t,s))),e===1))throw n=Ra,Er(t,0),zi(t,i),ln(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:pr(t,rn,fi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=Cf+500-St(),10<e)){if(Jo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=wu(pr.bind(null,t,rn,fi),e);break}pr(t,rn,fi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Vn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z_(i/1960))-i,10<i){t.timeoutHandle=wu(pr.bind(null,t,rn,fi),i);break}pr(t,rn,fi);break;case 5:pr(t,rn,fi);break;default:throw Error(ie(329))}}}return ln(t,St()),t.callbackNode===n?wg.bind(null,t):null}function Wu(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=vl(t,e),t!==2&&(e=rn,rn=n,e!==null&&ju(e)),t}function ju(t){rn===null?rn=t:rn.push.apply(rn,t)}function V_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~Af,e&=~Dl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function op(t){if(Xe&6)throw Error(ie(327));ps();var e=Jo(t,0);if(!(e&1))return ln(t,St()),null;var n=vl(t,e);if(t.tag!==0&&n===2){var i=gu(t);i!==0&&(e=i,n=Wu(t,i))}if(n===1)throw n=Ra,Er(t,0),zi(t,e),ln(t,St()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,rn,fi),ln(t,St()),null}function Rf(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(Es=St()+500,Rl&&rr())}}function Rr(t){Gi!==null&&Gi.tag===0&&!(Xe&6)&&ps();var e=Xe;Xe|=1;var n=Cn.transition,i=it;try{if(Cn.transition=null,it=1,t)return t()}finally{it=i,Cn.transition=n,Xe=e,!(Xe&6)&&rr()}}function Pf(){pn=ls.current,ht(ls)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,v_(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rl();break;case 3:Ss(),ht(an),ht(Xt),_f();break;case 5:xf(i);break;case 4:Ss();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:pf(i.type._context);break;case 22:case 23:Pf()}n=n.return}if(Ut=t,bt=t=Qi(t.current,null),kt=pn=e,Rt=0,Ra=null,Af=Dl=Cr=0,rn=ua=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}_r=null}return t}function Tg(t,e){do{var n=bt;try{if(hf(),Oo.current=hl,fl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(Ar=0,It=Ct=gt=null,la=!1,ba=0,bf.current=null,n===null||n.return===null){Rt=1,Ra=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Yh(a);if(p!==null){p.flags&=-257,qh(p,a,o,s,e),p.mode&1&&$h(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var x=new Set;x.add(l),e.updateQueue=x}else m.add(l);break e}else{if(!(e&1)){$h(s,c,e),Nf();break e}l=Error(ie(426))}}else if(pt&&o.mode&1){var g=Yh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),qh(g,a,o,s,e),df(Ms(l,o));break e}}s=l=Ms(l,o),Rt!==4&&(Rt=2),ua===null?ua=[s]:ua.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=lg(s,l,e);Vh(s,d);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ki===null||!Ki.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=cg(s,o,e);Vh(s,S);break e}}s=s.return}while(s!==null)}Cg(n)}catch(T){e=T,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(1)}function bg(){var t=pl.current;return pl.current=hl,t===null?hl:t}function Nf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ut===null||!(Cr&268435455)&&!(Dl&268435455)||zi(Ut,kt)}function vl(t,e){var n=Xe;Xe|=2;var i=bg();(Ut!==t||kt!==e)&&(fi=null,Er(t,e));do try{H_();break}catch(r){Tg(t,r)}while(1);if(hf(),Xe=n,pl.current=i,bt!==null)throw Error(ie(261));return Ut=null,kt=0,Rt}function H_(){for(;bt!==null;)Ag(bt)}function G_(){for(;bt!==null&&!px();)Ag(bt)}function Ag(t){var e=Pg(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?Cg(t):bt=e,bf.current=null}function Cg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=F_(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,bt=null;return}}else if(n=U_(n,e,pn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Rt===0&&(Rt=5)}function pr(t,e,n){var i=it,r=Cn.transition;try{Cn.transition=null,it=1,W_(t,e,n,i)}finally{Cn.transition=r,it=i}return null}function W_(t,e,n,i){do ps();while(Gi!==null);if(Xe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wx(t,s),t===Ut&&(bt=Ut=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,Ng(Qo,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=it;it=1;var o=Xe;Xe|=4,bf.current=null,k_(t,n),Mg(n,t),u_(Mu),el=!!Su,Mu=Su=null,t.current=n,B_(n),mx(),Xe=o,it=a,Cn.transition=s}else t.current=n;if(oo&&(oo=!1,Gi=t,gl=r),s=t.pendingLanes,s===0&&(Ki=null),xx(n.stateNode),ln(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ml)throw ml=!1,t=Hu,Hu=null,t;return gl&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Gu?da++:(da=0,Gu=t):da=0,rr(),null}function ps(){if(Gi!==null){var t=l0(gl),e=Cn.transition,n=it;try{if(Cn.transition=null,it=16>t?16:t,Gi===null)var i=!1;else{if(t=Gi,Gi=null,gl=0,Xe&6)throw Error(ie(331));var r=Xe;for(Xe|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var u=ve;switch(u.tag){case 0:case 11:case 15:ca(8,u,s)}var f=u.child;if(f!==null)f.return=u,ve=f;else for(;ve!==null;){u=ve;var h=u.sibling,p=u.return;if(_g(u),u===c){ve=null;break}if(h!==null){h.return=p,ve=h;break}ve=p}}}var m=s.alternate;if(m!==null){var x=m.child;if(x!==null){m.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,ve=d;break e}ve=s.return}}var v=t.current;for(ve=v;ve!==null;){a=ve;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ve=_;else e:for(a=v;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ll(9,o)}}catch(T){yt(o,o.return,T)}if(o===a){ve=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ve=S;break e}ve=o.return}}if(Xe=r,rr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(wl,t)}catch{}i=!0}return i}finally{it=n,Cn.transition=e}}return!1}function lp(t,e,n){e=Ms(n,e),e=lg(t,e,1),t=qi(t,e,1),e=Kt(),t!==null&&(Ua(t,1,e),ln(t,e))}function yt(t,e,n){if(t.tag===3)lp(t,t,n);else for(;e!==null;){if(e.tag===3){lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Ms(n,t),t=cg(e,t,1),e=qi(e,t,1),t=Kt(),e!==null&&(Ua(e,1,t),ln(e,t));break}}e=e.return}}function j_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(kt&n)===n&&(Rt===4||Rt===3&&(kt&130023424)===kt&&500>St()-Cf?Er(t,0):Af|=n),ln(t,e)}function Rg(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=Kt();t=wi(t,e),t!==null&&(Ua(t,e,n),ln(t,n))}function X_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rg(t,n)}function $_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Rg(t,n)}var Pg;Pg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,I_(t,e,n);sn=!!(t.flags&131072)}else sn=!1,pt&&e.flags&1048576&&I0(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bo(t,e),t=e.pendingProps;var r=xs(e,Xt.current);hs(e,n),r=Sf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=Nl,e.stateNode=r,r._reactInternals=e,Nu(e,i,t,n),e=Iu(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&cf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=q_(i),t=Un(i,t),r){case 0:e=Du(null,e,i,t,n);break e;case 1:e=Qh(null,e,i,t,n);break e;case 11:e=Kh(null,e,i,t,n);break e;case 14:e=Zh(null,e,i,Un(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Du(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Qh(t,e,i,r,n);case 3:e:{if(hg(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,z0(t,e),ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(ie(423)),e),e=Jh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(ie(424)),e),e=Jh(t,e,i,n,r);break e}else for(mn=Yi(e.stateNode.containerInfo.firstChild),gn=e,pt=!0,On=null,n=k0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=Ti(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return V0(e),t===null&&Cu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Eu(i,r)?a=null:s!==null&&Eu(i,s)&&(e.flags|=32),fg(t,e),qt(t,e,a,n),e.child;case 6:return t===null&&Cu(e),null;case 13:return pg(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Kh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,dt(ll,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!an.current){e=Ti(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ru(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ru(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=Rn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Zh(t,e,i,r,n);case 15:return ug(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Bo(t,e),e.tag=1,on(i)?(t=!0,sl(e)):t=!1,hs(e,n),og(e,i,r),Nu(e,i,r,n),Iu(null,e,i,!0,t,n);case 19:return mg(t,e,n);case 22:return dg(t,e,n)}throw Error(ie(156,e.tag))};function Ng(t,e){return r0(t,e)}function Y_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Y_(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q_(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ho(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Lf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return wr(n.children,r,s,e);case qd:a=8,r|=8;break;case tu:return t=An(12,n,e,r|2),t.elementType=tu,t.lanes=s,t;case nu:return t=An(13,n,e,r),t.elementType=nu,t.lanes=s,t;case iu:return t=An(19,n,e,r),t.elementType=iu,t.lanes=s,t;case Vm:return Il(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bm:a=10;break e;case zm:a=9;break e;case Kd:a=11;break e;case Zd:a=14;break e;case Oi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Il(t,e,n,i){return t=An(22,t,i,e),t.elementType=Vm,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,i,r,s,a,o,l){return t=new K_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function Z_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Lg(t){if(!t)return er;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(on(n))return L0(t,n,e)}return e}function Dg(t,e,n,i,r,s,a,o,l){return t=Df(n,i,!0,t,r,s,a,o,l),t.context=Lg(null),n=t.current,i=Kt(),r=Zi(n),s=xi(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,Ua(t,r,i),ln(t,i),t}function Ul(t,e,n,i){var r=e.current,s=Kt(),a=Zi(r);return n=Lg(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,a),t!==null&&(Hn(t,r,a,s),Fo(t,r,a)),a}function xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){cp(t,e),(t=t.alternate)&&cp(t,e)}function Q_(){return null}var Ig=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}Fl.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ul(t,e,null,null)};Fl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Ul(null,t,null,null)}),e[Ei]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=d0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&h0(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function up(){}function J_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xl(a);s.call(c)}}var a=Dg(e,i,t,0,null,!1,!1,"",up);return t._reactRootContainer=a,t[Ei]=a.current,Sa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=xl(l);o.call(c)}}var l=Df(t,0,!1,null,null,!1,!1,"",up);return t._reactRootContainer=l,t[Ei]=l.current,Sa(t.nodeType===8?t.parentNode:t),Rr(function(){Ul(e,l,n,i)}),l}function kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=xl(a);o.call(l)}}Ul(e,a,t,r)}else a=J_(n,e,t,r,i);return xl(a)}c0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(ef(e,n|1),ln(e,St()),!(Xe&6)&&(Es=St()+500,rr()))}break;case 13:Rr(function(){var i=wi(t,1);if(i!==null){var r=Kt();Hn(i,t,1,r)}}),If(t,1)}};tf=function(t){if(t.tag===13){var e=wi(t,134217728);if(e!==null){var n=Kt();Hn(e,t,134217728,n)}If(t,134217728)}};u0=function(t){if(t.tag===13){var e=Zi(t),n=wi(t,e);if(n!==null){var i=Kt();Hn(n,t,e,i)}If(t,e)}};d0=function(){return it};f0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};hu=function(t,e,n){switch(e){case"input":if(au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cl(i);if(!r)throw Error(ie(90));Gm(i),au(i,r)}}}break;case"textarea":jm(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};Qm=Rf;Jm=Rr;var e1={usingClientEntryPoint:!1,Events:[Oa,ns,Cl,Km,Zm,Rf]},Hs={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||Q_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{wl=lo.inject(t1),Jn=lo}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(ie(200));return Z_(t,e,null,n)};_n.createRoot=function(t,e){if(!Ff(t))throw Error(ie(299));var n=!1,i="",r=Ig;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,Sa(t.nodeType===8?t.parentNode:t),new Uf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Rr(t)};_n.hydrate=function(t,e,n){if(!Ol(e))throw Error(ie(200));return kl(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ig;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Dg(e,null,t,1,n??null,r,!1,s,a),t[Ei]=e.current,Sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fl(e)};_n.render=function(t,e,n){if(!Ol(e))throw Error(ie(200));return kl(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Ol(t))throw Error(ie(40));return t._reactRootContainer?(Rr(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};_n.unstable_batchedUpdates=Rf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ol(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return kl(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(t){console.error(t)}}Ug(),Um.exports=_n;var n1=Um.exports,dp=n1;Jc.createRoot=dp.createRoot,Jc.hydrateRoot=dp.hydrateRoot;const i1=({activeSection:t})=>{const[e,n]=fe.useState(!1);fe.useEffect(()=>{const s=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const i=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"leadership",label:"Leadership"},{id:"contact",label:"Contact"}],r=s=>{const a=document.getElementById(s);if(a){const l=a.offsetTop-80;window.scrollTo({top:l,behavior:"smooth"})}};return E.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50 shadow-lg shadow-black/10":"bg-transparent"}`,children:E.jsx("div",{className:"max-w-7xl mx-auto px-6 py-4",children:E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("button",{onClick:()=>r("home"),className:"text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors duration-200",children:"Emm"}),E.jsx("ul",{className:"hidden md:flex items-center gap-1",children:i.map(s=>E.jsx("li",{children:E.jsxs("button",{onClick:()=>r(s.id),className:`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 group ${t===s.id?"text-emerald-400":"text-neutral-400 hover:text-neutral-100"}`,children:[E.jsx("button",{className:"md:hidden p-2 text-neutral-400 hover:text-neutral-100",onClick:()=>setMobileMenuOpen(!mobileMenuOpen),children:E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),s.label,E.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-emerald-400 transition-all duration-300 ${t===s.id?"w-6":"w-0 group-hover:w-6"}`})]})},s.id))}),E.jsx("button",{onClick:()=>r("contact"),className:"hidden md:block px-5 py-2 bg-emerald-500 text-neutral-950 text-sm font-semibold rounded-lg hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-emerald-500/20",children:"Get In Touch"})]})})})};const r1=({direction:t="right",speed:e=1,borderColor:n="#999",squareSize:i=40,hoverFillColor:r="#222",className:s=""})=>{const a=fe.useRef(null),o=fe.useRef(null),l=fe.useRef(),c=fe.useRef(),u=fe.useRef({x:0,y:0}),f=fe.useRef(null);return fe.useEffect(()=>{const h=a.current,p=h.getContext("2d"),m=()=>{h.width=h.offsetWidth,h.height=h.offsetHeight,l.current=Math.ceil(h.width/i)+1,c.current=Math.ceil(h.height/i)+1};window.addEventListener("resize",m),m();const x=()=>{p.clearRect(0,0,h.width,h.height);const _=Math.floor(u.current.x/i)*i,S=Math.floor(u.current.y/i)*i;for(let C=_;C<h.width+i;C+=i)for(let A=S;A<h.height+i;A+=i){const P=C-u.current.x%i,M=A-u.current.y%i;f.current&&Math.floor((C-_)/i)===f.current.x&&Math.floor((A-S)/i)===f.current.y&&(p.fillStyle=r,p.fillRect(P,M,i,i)),p.strokeStyle=n,p.strokeRect(P,M,i,i)}const T=p.createRadialGradient(h.width/2,h.height/2,0,h.width/2,h.height/2,Math.sqrt(h.width**2+h.height**2)/2);T.addColorStop(0,"rgba(0, 0, 0, 0)"),p.fillStyle=T,p.fillRect(0,0,h.width,h.height)},g=()=>{const _=Math.max(e,.1);switch(t){case"right":u.current.x=(u.current.x-_+i)%i;break;case"left":u.current.x=(u.current.x+_+i)%i;break;case"up":u.current.y=(u.current.y+_+i)%i;break;case"down":u.current.y=(u.current.y-_+i)%i;break;case"diagonal":u.current.x=(u.current.x-_+i)%i,u.current.y=(u.current.y-_+i)%i;break}x(),o.current=requestAnimationFrame(g)},d=_=>{const S=h.getBoundingClientRect(),T=_.clientX-S.left,C=_.clientY-S.top,A=Math.floor(u.current.x/i)*i,P=Math.floor(u.current.y/i)*i,M=Math.floor((T+u.current.x-A)/i),w=Math.floor((C+u.current.y-P)/i);(!f.current||f.current.x!==M||f.current.y!==w)&&(f.current={x:M,y:w})},v=()=>{f.current=null};return h.addEventListener("mousemove",d),h.addEventListener("mouseleave",v),o.current=requestAnimationFrame(g),()=>{window.removeEventListener("resize",m),cancelAnimationFrame(o.current),h.removeEventListener("mousemove",d),h.removeEventListener("mouseleave",v)}},[t,e,n,r,i]),E.jsx("canvas",{ref:a,className:`squares-canvas ${s}`})},s1=()=>{const t=fe.useRef(null);return fe.useEffect(()=>{t.current.querySelectorAll(".animate-in").forEach((n,i)=>{setTimeout(()=>{n.classList.add("active")},i*100)})},[]),E.jsxs("section",{id:"home",ref:t,className:"min-h-screen flex items-center justify-center relative overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-neutral-950 to-neutral-950"}),E.jsx("div",{className:"absolute inset-0 z-[5]",children:E.jsx(r1,{speed:.25,squareSize:48,direction:"diagonal",borderColor:"rgba(120, 90, 255, 0.15)",hoverFillColor:"rgba(120, 90, 255, 0.25)"})}),E.jsx("div",{className:` w-full sm:w-auto absolute inset-0 z-[6] pointer-events-none
        bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.15),transparent_60%)]`}),E.jsx("div",{className:"absolute inset-0 opacity-[0.02]",style:{backgroundImage:`
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,backgroundSize:"4rem 4rem"}}),E.jsxs("div",{className:"relative z-20 max-w-4xl mx-auto px-6 text-center",children:[E.jsx("div",{className:"animate-in opacity-0 translate-y-4 transition-all duration-500",children:E.jsx("span",{className:"inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase rounded-full mb-6",children:"Available for Opportunities"})}),E.jsxs("h1",{className:"animate-in opacity-0 translate-y-4 transition-all duration-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-400 bg-clip-text text-transparent",children:["John Emmanuel",E.jsx("br",{}),"S. Menor"]}),E.jsx("p",{className:"animate-in opacity-0 translate-y-4 transition-all duration-500 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 font-light mb-4 tracking-wide",children:"Full Stack Developer · UI/UX Designer"}),E.jsx("p",{className:"animate-in opacity-0 translate-y-4 transition-all duration-500 text-base text-neutral-500 max-w-2xl mx-auto mb-10",children:"Based in Guimba, Nueva Ecija • Crafting digital experiences with purpose and precision"}),E.jsxs("div",{className:"animate-in opacity-0 translate-y-4 transition-all duration-500 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4",children:[E.jsxs("a",{href:"#projects",className:`group px-8 py-3.5 bg-emerald-500 text-neutral-950 font-semibold rounded-lg
              hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.97]
              transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50`,children:["View My Work",E.jsx("span",{className:"inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200",children:"→"})]}),E.jsx("a",{href:"#contact",className:`px-8 py-3.5 bg-transparent border border-neutral-700 text-neutral-100 font-semibold rounded-lg
              hover:bg-neutral-800 hover:border-neutral-600 hover:scale-[1.02]
              active:scale-[0.97] transition-all duration-200`,children:"Contact Me"})]}),E.jsxs("div",{className:"animate-in opacity-0 translate-y-4 transition-all duration-500 mt-16 flex items-center justify-center gap-6 text-neutral-500",children:[E.jsx("a",{href:"https://github.com/jemxi",className:"hover:text-emerald-400 transition-all duration-200 hover:scale-110",children:E.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),E.jsx("a",{href:"https://www.linkedin.com/in/john-emmanuel-menor-562a18311/",className:"hover:text-emerald-400 transition-all duration-200 hover:scale-110",children:E.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"})})}),E.jsx("a",{href:"https://www.behance.net/jemxii",rel:"noopener noreferrer",className:"hover:text-emerald-400 transition-all duration-200 hover:scale-110",children:E.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M22 7h-6V5h6v2zm-9.5 5.5c0-2.1-1.5-3.5-3.7-3.5H2v10h7.1c2.3 0 3.9-1.5 3.9-3.6 0-1.6-1-2.8-2.5-3.2 1.2-.4 2-1.4 2-2.7zM5 11h3.5c1 0 1.7.6 1.7 1.5S9.5 14 8.5 14H5v-3zm3.8 6H5v-3h3.8c1 0 1.8.6 1.8 1.5S9.8 17 8.8 17zM22 12.5c0-2.6-1.7-4.5-4.3-4.5-2.5 0-4.3 1.8-4.3 4.6 0 2.9 1.8 4.6 4.4 4.6 2 0 3.5-1 4-2.7h-2.3c-.3.8-.9 1.2-1.7 1.2-1.2 0-2-.8-2.1-2h6.2c.1-.3.1-.7.1-1.2zm-6.3-.6c.1-1.2.9-1.9 2-1.9s1.8.8 1.9 1.9h-3.9z"})})})]})]}),E.jsx("style",{jsx:!0,children:`
        .animate-in {
          transition: opacity 500ms ease-out, transform 500ms ease-out;
        }
        .animate-in.active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `})]})};const a1=({width:t="500px",height:e="500px",background:n="#000",borderRadius:i="10px",borderColor:r="#333",children:s,glareColor:a="#111111",glareOpacity:o=.5,glareAngle:l=-45,glareSize:c=250,transitionDuration:u=650,playOnce:f=!1,className:h="",style:p={}})=>{const m=a.replace("#","");let x=a;if(/^[0-9A-Fa-f]{6}$/.test(m)){const d=parseInt(m.slice(0,2),16),v=parseInt(m.slice(2,4),16),_=parseInt(m.slice(4,6),16);x=`rgba(${d}, ${v}, ${_}, ${o})`}else if(/^[0-9A-Fa-f]{3}$/.test(m)){const d=parseInt(m[0]+m[0],16),v=parseInt(m[1]+m[1],16),_=parseInt(m[2]+m[2],16);x=`rgba(${d}, ${v}, ${_}, ${o})`}const g={"--gh-width":t,"--gh-height":e,"--gh-bg":n,"--gh-br":i,"--gh-angle":`${l}deg`,"--gh-duration":`${u}ms`,"--gh-size":`${c}%`,"--gh-rgba":x,"--gh-border":r};return E.jsx("div",{className:`glare-hover ${f?"glare-hover--play-once":""} ${h}`,style:{...g,...p},children:s})},o1=()=>{const[t,e]=fe.useState(!1),n=fe.useRef(null);return fe.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&e(!0)},{threshold:.2});return n.current&&i.observe(n.current),()=>{n.current&&i.unobserve(n.current)}},[]),E.jsx("section",{id:"about",ref:n,className:"py-24 md:py-32 px-6 bg-neutral-950",children:E.jsx("div",{className:"max-w-6xl mx-auto",children:E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center",children:[E.jsxs("div",{className:`transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[E.jsx("span",{className:"inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4",children:"About Me"}),E.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight",children:"Building digital solutions with innovation and precision"}),E.jsxs("div",{className:"space-y-4 text-neutral-400 leading-relaxed",children:[E.jsx("p",{children:"I’m an aspiring IT professional with hands-on experience building web applications and supporting real-world IT operations. I’ve worked with PHP, React, ASP.NET, and modern frontend tools, and I focus on creating user-friendly systems with clean design and efficient code."}),E.jsx("p",{children:"I’ve built multiple projects that emphasize usability, performance, and maintainability, helping turn ideas into practical digital solutions that solve real problems."}),E.jsx("p",{children:"I take pride in writing clean, maintainable code and building solutions that are reliable, scalable, and user-focused."})]}),E.jsxs("div",{className:"mt-6 md:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4",children:[E.jsxs("div",{className:"px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-300 group",children:[E.jsx("div",{className:"text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-200",children:"8+"}),E.jsx("div",{className:"text-xs text-neutral-500 uppercase tracking-wider",children:"Features Developed"})]}),E.jsxs("div",{className:"px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-300 group",children:[E.jsx("div",{className:"text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-200",children:"5+"}),E.jsx("div",{className:"text-xs text-neutral-500 uppercase tracking-wider",children:"Tech Stacks Used"})]}),E.jsxs("div",{className:"px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-emerald-500/50 transition-colors duration-300 group",children:[E.jsx("div",{className:"text-2xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-200",children:"100%"}),E.jsx("div",{className:"text-xs text-neutral-500 uppercase tracking-wider",children:"Dedicated"})]})]})]}),E.jsxs("div",{className:`relative transition-all duration-700 delay-200 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[E.jsxs("div",{className:"relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-neutral-900 border border-neutral-800",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"}),E.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:E.jsx("div",{className:"w-64 h-64 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full opacity-20 blur-3xl"})}),E.jsx(a1,{width:"100%",height:"100%",borderRadius:"1rem",background:"transparent",glareColor:"#ffffff",glareOpacity:.25,glareAngle:-45,glareSize:200,transitionDuration:700,className:"w-full h-full",children:E.jsx("img",{src:"/mypic.jpg",alt:"John Emmanuel Menor",className:"w-full h-full object-cover rounded-2xl"})})]}),E.jsx("div",{className:"absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-pulse"}),E.jsx("div",{className:"absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000"})]})]})})})},l1=()=>{const[t,e]=fe.useState([]),n=fe.useRef(null),i=[{title:"Frontend Development",skills:["React","JavaScript","Tailwind CSS","HTML5","CSS3","Next.js","Responsive Design"],icon:E.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})},{title:"UI/UX Design",skills:["Figma","Adobe XD","User Research","Wireframing","Prototyping","Design Systems"],icon:E.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})})},{title:"Backend & Database",skills:["Node.js","Express","MongoDB","MySQL","REST APIs","Firebase"],icon:E.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"})})},{title:"Tools & Others",skills:["GoHighLevel","Git","GitHub","VS Code","Vite","npm","Agile","Team Leadership"],icon:E.jsxs("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}];return fe.useEffect(()=>{const r=new IntersectionObserver(a=>{a.forEach(o=>{if(o.isIntersecting){const l=parseInt(o.target.dataset.index);e(c=>[...new Set([...c,l])])}})},{threshold:.2}),s=n.current.querySelectorAll(".skill-card");return s.forEach(a=>r.observe(a)),()=>{s.forEach(a=>r.unobserve(a))}},[]),E.jsx("section",{id:"skills",ref:n,className:"py-24 md:py-32 px-6 bg-neutral-900",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsx("span",{className:"inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4",children:"Expertise"}),E.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 tracking-tight",children:"Skills & Technologies"}),E.jsx("p",{className:"text-neutral-400 max-w-2xl mx-auto",children:"A comprehensive toolkit for building modern web applications"})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",children:i.map((r,s)=>E.jsxs("div",{"data-index":s,className:`skill-card group bg-neutral-950 border border-neutral-800 rounded-2xlp-5 sm:p-6 md:p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 ${t.includes(s)?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${s*100}ms`},children:[E.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[E.jsx("div",{className:"p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300",children:r.icon}),E.jsx("div",{children:E.jsx("h3",{className:"text-xl font-bold mb-2",children:r.title})})]}),E.jsx("div",{className:"flex flex-wrap gap-2",children:r.skills.map((a,o)=>E.jsx("span",{className:"px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200",children:a},o))})]},s))})]})})},c1=()=>{const[t,e]=fe.useState([]),n=fe.useRef(null),i=[{title:"WasteWise",category:"Capstone Project",description:"Electronic platform for recycled products promoting environmental sustainability through technology and community engagement.",tech:["PHP","MySQL","HTML","CSS","JavaScript","REST API","SMS API","Google Cloud Console"],gradient:"from-emerald-500 to-teal-600",liveUrl:"https://wastewise.shop/",githubUrl:"https://github.com/jemxi/wastewise"},{title:"Internship Tracking System",category:"Web Application",description:"A web-based system for tracking internship progress, attendance, tasks, and hours through a clean and user-friendly interface.",tech:["React","Vite","JavaScript","CSS"],gradient:"from-emerald-500 to-teal-600",liveUrl:"https://internship-track.vercel.app/",githubUrl:"https://github.com/jemxi/internship-track"}];return fe.useEffect(()=>{const r=new IntersectionObserver(a=>{a.forEach(o=>{if(o.isIntersecting){const l=parseInt(o.target.dataset.index);e(c=>[...new Set([...c,l])])}})},{threshold:.2}),s=n.current.querySelectorAll(".project-card");return s.forEach(a=>r.observe(a)),()=>{s.forEach(a=>r.unobserve(a))}},[]),E.jsx("section",{id:"projects",ref:n,className:"py-24 md:py-32 px-6 bg-neutral-950",children:E.jsxs("div",{className:"max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsx("span",{className:"inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4",children:"Portfolio"}),E.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 tracking-tight",children:"Featured Projects"}),E.jsx("p",{className:"text-neutral-400 max-w-2xl mx-auto",children:"Selected works that showcase my passion for design and development"})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6",children:i.map((r,s)=>E.jsxs("div",{"data-index":s,className:`project-card group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer ${t.includes(s)?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${s*100}ms`},children:[E.jsx("div",{className:`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${r.gradient}`}),E.jsxs("div",{className:"p-5 sm:p-6 md:p-8",children:[E.jsx("div",{className:"mb-4",children:E.jsx("span",{className:"inline-block px-3 py-1 bg-neutral-800 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-wider",children:r.category})}),E.jsx("h3",{className:"text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-200",children:r.title}),E.jsx("p",{className:"text-neutral-400 mb-6 leading-relaxed",children:r.description}),E.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:r.tech.map((a,o)=>E.jsx("span",{className:"px-3 py-1 bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs rounded-md",children:a},o))}),E.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[E.jsxs("a",{href:r.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-emerald-400 hover:gap-3 transition-all duration-200",children:[E.jsx("span",{children:"View Project"}),E.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),E.jsxs("a",{href:r.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-neutral-400 hover:text-neutral-100 transition-colors duration-200",children:[E.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),E.jsx("span",{children:"GitHub"})]})]})]}),E.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`})]},s))})]})})},u1=()=>{const[t,e]=fe.useState(0),[n,i]=fe.useState([]),r=fe.useRef(null),s=fe.useRef(null),a=[{type:"experience",title:"GoHighLevel Funnel & Landing Page Designer",organization:"Ninja Automations - Remote, Houston, USA",date:"March 2026 - May 2026",description:["Designed premium GoHighLevel funnels and landing pages for lead generation campaigns","Built responsive funnel sections using HTML, CSS, and JavaScript for custom layouts and interactions","Created visually engaging funnel designs optimized for mobile responsiveness and user experience","Customized forms, page sections, and branding elements based on client requirements and marketing goals","Collaborated with the creative team to recreate and improve high converting funnel designs"]},{type:"experience",title:"IT Intern / Assistant Team Lead",organization:"Hyundai Quezon Avenue",date:"January 2026 - March 2026",description:["Managed technical support operations and system maintenance","Collaborated with cross-functional teams to optimize workflows","Developed internal tools to improve operational efficiency"]},{type:"experience",title:"Video Editor",organization:"Global Future Services",date:"December 2025 - February 2026",description:["Edited advertisement and promotional videos for digital marketing campaigns","Produced video ads for Facebook, YouTube, and other online platforms","Collaborated with the marketing team to align video ads with brand strategy"]},{type:"experience",title:"Freelance C# / ASP.NET Developer",organization:"Self-Employed",date:"September 2023 - November 2023",description:["Developed web applications using C# and ASP.NET with SQL Server integration","Built authentication systems, CRUD modules, and admin dashboards","Worked directly with clients to gather requirements and deliver custom solutions"]},{type:"education",title:"Bachelor of Science in Information Technology",organization:"Our Lady of the Sacred Heart College of Guimba, Inc.",date:"2022 - 2026",description:["Specialization in Web Development and UI/UX Design","Capstone Project: WasteWise - Electronic Platform for Recycled Products","Active member of IT Society and Web Development Club"]},{type:"education",title:"Senior High School",organization:"Ramos National High School",date:"2022",description:["Wrote my first “Hello, World!”","Discovered HTML and explored basic web development","Started building simple webpages and learning CSS for styling"]}],o=a.findIndex(l=>l.type==="education");return fe.useEffect(()=>{const l=()=>{if(!r.current||!s.current)return;const c=r.current,u=c.offsetTop,f=c.offsetHeight,p=window.scrollY+window.innerHeight/2-u,m=Math.min(Math.max(p/f,0),1);e(m)};return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[]),fe.useEffect(()=>{const l=new IntersectionObserver(u=>{u.forEach(f=>{if(f.isIntersecting){const h=parseInt(f.target.dataset.index);i(p=>[...new Set([...p,h])])}})},{threshold:.2}),c=r.current.querySelectorAll(".timeline-item");return c.forEach(u=>l.observe(u)),()=>{c.forEach(u=>l.unobserve(u))}},[]),E.jsx("section",{id:"experience",ref:r,className:"py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-900",children:E.jsxs("div",{className:"max-w-4xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-12 md:mb-16 lg:mb-20",children:[E.jsx("span",{className:"inline-block text-emerald-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4",children:"My Journey"}),E.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight px-4",children:"Experience & Education"})]}),E.jsxs("div",{className:"relative",children:[E.jsxs("div",{className:"absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 md:-translate-x-1/2",children:[E.jsx("div",{ref:s,className:"absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 to-emerald-400 transition-all duration-300 ease-out",style:{height:`${t*100}%`}}),E.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/50 transition-all duration-300 ease-out",style:{top:`${t*100}%`},children:E.jsx("div",{className:"absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"})})]}),E.jsx("div",{className:"space-y-8 md:space-y-16",children:a.map((l,c)=>E.jsxs("div",{children:[c===o&&E.jsx("div",{className:`relative flex justify-center mb-8 md:mb-12 transition-all duration-700 ${n.includes(c)?"opacity-100 scale-100":"opacity-0 scale-90"}`,children:E.jsx("div",{className:"relative z-10 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm",children:E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("svg",{className:"w-5 h-5 text-blue-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),E.jsx("span",{className:"text-sm md:text-base font-bold text-white uppercase tracking-wider",children:"Education"})]})})}),E.jsxs("div",{"data-index":c,className:`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-16 transition-all duration-700 ${n.includes(c)?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,style:{transitionDelay:`${c*100}ms`},children:[E.jsx("div",{className:`pl-10 md:pl-0 ${c%2===0?"":"md:col-start-2"}`,children:E.jsxs("div",{className:`group bg-neutral-950 border border-neutral-800 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 ${c%2===0?"md:ml-auto":""}`,children:[E.jsx("div",{className:"mb-3 md:mb-4 text-left",children:E.jsx("span",{className:"inline-block px-2.5 sm:px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-semibold rounded-full uppercase tracking-wider",children:l.date})}),E.jsx("h3",{className:"text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors duration-200 leading-tight",children:l.title}),E.jsx("p",{className:"text-emerald-500 font-semibold mb-3 md:mb-4 text-sm sm:text-base",children:l.organization}),E.jsx("ul",{className:"space-y-2 text-neutral-400 text-xs sm:text-sm text-left",children:l.description.map((u,f)=>E.jsxs("li",{className:"flex items-start gap-2",children:[E.jsx("span",{className:"flex-shrink-0 w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5"}),E.jsx("span",{className:"flex-1 leading-relaxed",children:u})]},f))})]})}),E.jsx("div",{className:"absolute left-4 md:left-1/2 top-6 sm:top-8 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 border-2 md:border-4 border-neutral-900 rounded-full z-10 group-hover:scale-125 transition-transform duration-300",children:E.jsx("div",{className:"absolute inset-0 bg-emerald-500 rounded-full blur-sm opacity-75"})}),c%2===0&&E.jsx("div",{className:"hidden md:block"})]})]},c))})]})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="182",d1=0,fp=1,f1=2,Go=1,h1=2,ta=3,tr=0,cn=1,pi=2,_i=0,ms=1,hp=2,pp=3,mp=4,p1=5,gr=100,m1=101,g1=102,v1=103,x1=104,_1=200,y1=201,S1=202,M1=203,Xu=204,$u=205,E1=206,w1=207,T1=208,b1=209,A1=210,C1=211,R1=212,P1=213,N1=214,Yu=0,qu=1,Ku=2,ws=3,Zu=4,Qu=5,Ju=6,ed=7,Fg=0,L1=1,D1=2,ti=0,Og=1,kg=2,Bg=3,zg=4,Vg=5,Hg=6,Gg=7,Wg=300,Pr=301,Ts=302,td=303,nd=304,Bl=306,id=1e3,vi=1001,rd=1002,Ot=1003,I1=1004,co=1005,jt=1006,xc=1007,Sr=1008,bn=1009,jg=1010,Xg=1011,Pa=1012,kf=1013,ri=1014,Zn=1015,bi=1016,Bf=1017,zf=1018,Na=1020,$g=35902,Yg=35899,qg=1021,Kg=1022,Bn=1023,Ai=1026,Mr=1027,Zg=1028,Vf=1029,bs=1030,Hf=1031,Gf=1033,Wo=33776,jo=33777,Xo=33778,$o=33779,sd=35840,ad=35841,od=35842,ld=35843,cd=36196,ud=37492,dd=37496,fd=37488,hd=37489,pd=37490,md=37491,gd=37808,vd=37809,xd=37810,_d=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,wd=37816,Td=37817,bd=37818,Ad=37819,Cd=37820,Rd=37821,Pd=36492,Nd=36494,Ld=36495,Dd=36283,Id=36284,Ud=36285,Fd=36286,U1=3200,F1=0,O1=1,Vi="",En="srgb",As="srgb-linear",_l="linear",tt="srgb",Fr=7680,gp=519,k1=512,B1=513,z1=514,Wf=515,V1=516,H1=517,jf=518,G1=519,vp=35044,xp="300 es",Qn=2e3,yl=2001;function Qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function W1(){const t=Sl("canvas");return t.style.display="block",t}const _p={};function yp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ie(...t){const e="THREE."+t.shift();console.warn(e,...t)}function qe(...t){const e="THREE."+t.shift();console.error(e,...t)}function La(...t){const e=t.join(" ");e in _p||(_p[e]=!0,Ie(...t))}function j1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,Od=180/Math.PI;function Ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function X1(t,e){return(t%e+e)%e}function yc(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=m,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==m){let g=l*h+c*p+u*m+f*x;g<0&&(h=-h,p=-p,m=-m,x=-x,g=-g);let d=1-o;if(g<.9995){const v=Math.acos(g),_=Math.sin(v);d=Math.sin(d*v)/_,o=Math.sin(o*v)/_,l=l*d+h*o,c=c*d+p*o,u=u*d+m*o,f=f*d+x*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+m*o,f=f*d+x*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+u*f+l*p-c*h,e[n+1]=l*m+u*h+c*f-o*p,e[n+2]=c*m+u*p+o*h-l*f,e[n+3]=u*m-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"YXZ":this._x=h*u*f+c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"ZXY":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f-h*p*m;break;case"ZYX":this._x=h*u*f-c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f+h*p*m;break;case"YZX":this._x=h*u*f+c*p*m,this._y=c*p*f+h*u*m,this._z=c*u*m-h*p*f,this._w=c*u*f-h*p*m;break;case"XZY":this._x=h*u*f-c*p*m,this._y=c*p*f-h*u*m,this._z=c*u*m+h*p*f,this._w=c*u*f+h*p*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sc=new G,Sp=new za;class Fe{constructor(e,n,i,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],m=i[8],x=r[0],g=r[3],d=r[6],v=r[1],_=r[4],S=r[7],T=r[2],C=r[5],A=r[8];return s[0]=a*x+o*v+l*T,s[3]=a*g+o*_+l*C,s[6]=a*d+o*S+l*A,s[1]=c*x+u*v+f*T,s[4]=c*g+u*_+f*C,s[7]=c*d+u*S+f*A,s[2]=h*x+p*v+m*T,s[5]=h*g+p*_+m*C,s[8]=h*d+p*S+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,m=n*f+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new Fe,Mp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ep=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $1(){const t={enabled:!0,workingColorSpace:As,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=gs(r.r),r.g=gs(r.g),r.b=gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?_l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return La("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return La("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[As]:{primaries:e,whitePoint:i,transfer:_l,toXYZ:Mp,fromXYZ:Ep,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Mp,fromXYZ:Ep,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),t}const je=$1();function yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class Y1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=Sl("canvas")),Or.width=e.width,Or.height=e.height;const r=Or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yi(n[i]/255)*255):n[i]=yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q1=0;class Xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ec(r[a].image)):s.push(Ec(r[a]))}else s=Ec(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ec(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Y1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let K1=0;const wc=new G;class Zt extends Ls{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=vi,r=vi,s=jt,a=Sr,o=Bn,l=bn,c=Zt.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Ba(),this.name="",this.source=new Xf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Wg;Zt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,T=(d+1)/2,C=(u+h)/4,A=(f+x)/4,P=(m+g)/4;return _>S&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z1 extends Ls{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Zt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Xf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Z1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Jg extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Va{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),fo.subVectors(this.max,Ws),kr.subVectors(e.a,Ws),Br.subVectors(e.b,Ws),zr.subVectors(e.c,Ws),Ni.subVectors(Br,kr),Li.subVectors(zr,Br),or.subVectors(kr,zr);let n=[0,-Ni.z,Ni.y,0,-Li.z,Li.y,0,-or.z,or.y,Ni.z,0,-Ni.x,Li.z,0,-Li.x,or.z,0,-or.x,-Ni.y,Ni.x,0,-Li.y,Li.x,0,-or.y,or.x,0];return!Tc(n,kr,Br,zr,fo)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,kr,Br,zr,fo))?!1:(ho.crossVectors(Ni,Li),n=[ho.x,ho.y,ho.z],Tc(n,kr,Br,zr,fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new G,new G,new G,new G,new G,new G,new G,new G],Ln=new G,uo=new Va,kr=new G,Br=new G,zr=new G,Ni=new G,Li=new G,or=new G,Ws=new G,fo=new G,ho=new G,lr=new G;function Tc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const J1=new Va,js=new G,bc=new G;class $f{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(bc)),this.expandByPoint(js.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new G,Ac=new G,po=new G,Di=new G,Cc=new G,mo=new G,Rc=new G;class ey{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ac.copy(e).add(n).multiplyScalar(.5),po.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Ac);const s=e.distanceTo(n)*.5,a=-this.direction.dot(po),o=Di.dot(this.direction),l=-Di.dot(po),c=Di.lengthSq(),u=Math.abs(1-a*a);let f,h,p,m;if(u>0)if(f=a*l-o,h=a*o-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ac).addScaledVector(po,h),p}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){Cc.subVectors(n,e),mo.subVectors(i,e),Rc.crossVectors(Cc,mo);let a=this.direction.dot(Rc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(mo.crossVectors(Di,mo));if(l<0)return null;const c=o*this.direction.dot(Cc.cross(Di));if(c<0||l+c>a)return null;const u=-o*Di.dot(Rc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g)}set(e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,m=o*u,x=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+m*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=m+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,m=c*u,x=c*f;n[0]=h+x*o,n[4]=m*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-m,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,m=c*u,x=c*f;n[0]=h-x*o,n[4]=-a*f,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*u,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,m=o*u,x=o*f;n[0]=l*u,n[4]=m*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-m,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,m=o*l,x=o*c;n[0]=l*u,n[4]=x-h*f,n[8]=m*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+m,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,p=a*c,m=o*l,x=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=a*u,n[9]=p*f-m,n[2]=m*f-p,n[6]=o*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ty,e,ny)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),go.crossVectors(fn,Ii),r[0]=Ii.x,r[4]=go.x,r[8]=fn.x,r[1]=Ii.y,r[5]=go.y,r[9]=fn.y,r[2]=Ii.z,r[6]=go.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],m=i[2],x=i[6],g=i[10],d=i[14],v=i[3],_=i[7],S=i[11],T=i[15],C=r[0],A=r[4],P=r[8],M=r[12],w=r[1],N=r[5],k=r[9],F=r[13],z=r[2],$=r[6],j=r[10],V=r[14],O=r[3],Y=r[7],q=r[11],te=r[15];return s[0]=a*C+o*w+l*z+c*O,s[4]=a*A+o*N+l*$+c*Y,s[8]=a*P+o*k+l*j+c*q,s[12]=a*M+o*F+l*V+c*te,s[1]=u*C+f*w+h*z+p*O,s[5]=u*A+f*N+h*$+p*Y,s[9]=u*P+f*k+h*j+p*q,s[13]=u*M+f*F+h*V+p*te,s[2]=m*C+x*w+g*z+d*O,s[6]=m*A+x*N+g*$+d*Y,s[10]=m*P+x*k+g*j+d*q,s[14]=m*M+x*F+g*V+d*te,s[3]=v*C+_*w+S*z+T*O,s[7]=v*A+_*N+S*$+T*Y,s[11]=v*P+_*k+S*j+T*q,s[15]=v*M+_*F+S*V+T*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],m=e[3],x=e[7],g=e[11],d=e[15],v=l*p-c*h,_=o*p-c*f,S=o*h-l*f,T=a*p-c*u,C=a*h-l*u,A=a*f-o*u;return n*(x*v-g*_+d*S)-i*(m*v-g*T+d*C)+r*(m*_-x*T+d*A)-s*(m*S-x*C+g*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],v=f*g*c-x*h*c+x*l*p-o*g*p-f*l*d+o*h*d,_=m*h*c-u*g*c-m*l*p+a*g*p+u*l*d-a*h*d,S=u*x*c-m*f*c+m*o*p-a*x*p-u*o*d+a*f*d,T=m*f*l-u*x*l-m*o*h+a*x*h+u*o*g-a*f*g,C=n*v+i*_+r*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=v*A,e[1]=(x*h*s-f*g*s-x*r*p+i*g*p+f*r*d-i*h*d)*A,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*d+i*l*d)*A,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*g*s-m*h*s+m*r*p-n*g*p-u*r*d+n*h*d)*A,e[6]=(m*l*s-a*g*s-m*r*c+n*g*c+a*r*d-n*l*d)*A,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*A,e[8]=S*A,e[9]=(m*f*s-u*x*s-m*i*p+n*x*p+u*i*d-n*f*d)*A,e[10]=(a*x*s-m*o*s+m*i*c-n*x*c-a*i*d+n*o*d)*A,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*A,e[12]=T*A,e[13]=(u*x*r-m*f*r+m*i*h-n*x*h-u*i*g+n*f*g)*A,e[14]=(m*o*r-a*x*r-m*i*l+n*x*l+a*i*g-n*o*g)*A,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,m=s*f,x=a*u,g=a*f,d=o*f,v=l*c,_=l*u,S=l*f,T=i.x,C=i.y,A=i.z;return r[0]=(1-(x+d))*T,r[1]=(p+S)*T,r[2]=(m-_)*T,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+d))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(m+_)*A,r[9]=(g-v)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Dn.copy(this);const c=1/s,u=1/a,f=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Qn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let m,x;if(l)m=s/(a-s),x=a*s/(a-s);else if(o===Qn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===yl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Qn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,x;if(l)m=1/(a-s),x=a/(a-s);else if(o===Qn)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===yl)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new G,Dn=new At,ty=new G(0,0,0),ny=new G(1,1,1),Ii=new G,go=new G,fn=new G,wp=new At,Tp=new za;let Nr=class ev{constructor(e=0,n=0,i=0,r=ev.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nr.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iy=0;const bp=new G,Hr=new za,ci=new At,vo=new G,Xs=new G,ry=new G,sy=new za,Ap=new G(1,0,0),Cp=new G(0,1,0),Rp=new G(0,0,1),Pp={type:"added"},ay={type:"removed"},Gr={type:"childadded",child:null},Pc={type:"childremoved",child:null};class vn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new G,n=new Nr,i=new za,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Fe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Ap,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Rp,e)}translateOnAxis(e,n){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ap,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Xs,vo,this.up):ci.lookAt(vo,Xs,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ci),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ay),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new G(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new G,ui=new G,Nc=new G,di=new G,Wr=new G,jr=new G,Np=new G,Lc=new G,Dc=new G,Ic=new G,Uc=new Mt,Fc=new Mt,Oc=new Mt;let $s=class Kr{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ui.subVectors(i,n),Nc.subVectors(e,n);const a=In.dot(In),o=In.dot(ui),l=In.dot(Nc),c=ui.dot(ui),u=ui.dot(Nc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Uc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(e,n),Fc.fromBufferAttribute(e,i),Oc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Uc,s.x),a.addScaledVector(Fc,s.y),a.addScaledVector(Oc,s.z),a}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ui.subVectors(e,n),In.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),In.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),jr.subVectors(s,i),Lc.subVectors(e,i);const l=Wr.dot(Lc),c=jr.dot(Lc);if(l<=0&&c<=0)return n.copy(i);Dc.subVectors(e,r);const u=Wr.dot(Dc),f=jr.dot(Dc);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Wr,a);Ic.subVectors(e,s);const p=Wr.dot(Ic),m=jr.dot(Ic);if(m>=0&&p<=m)return n.copy(s);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(jr,o);const g=u*m-p*f;if(g<=0&&f-u>=0&&p-m>=0)return Np.subVectors(s,r),o=(f-u)/(f-u+(p-m)),n.copy(r).addScaledVector(Np,o);const d=1/(g+x+h);return a=x*d,o=h*d,n.copy(i).addScaledVector(Wr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},xo={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=X1(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=kc(a,s,e+1/3),this.g=kc(a,s,e),this.b=kc(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return je.workingToColorSpace(Gt.copy(this),e),Math.round(He(Gt.r*255,0,255))*65536+Math.round(He(Gt.g*255,0,255))*256+Math.round(He(Gt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=En){je.workingToColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(xo);const i=yc(Ui.h,xo.h,n),r=yc(Ui.s,xo.s,n),s=yc(Ui.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new nt;nt.NAMES=nv;let oy=0;class zl extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ba(),this.name="",this.type="Material",this.blending=ms,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=$u,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xu&&(i.blendSrc=this.blendSrc),this.blendDst!==$u&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iv extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nr,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new G,_o=new rt;let ly=0;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vp,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class rv extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sv extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Si extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cy=0;const Mn=new At,Bc=new vn,Xr=new G,hn=new Va,Ys=new Va,Dt=new G;class Ri extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qg(e)?sv:rv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Bc.lookAt(e),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Si(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(hn.min,Ys.min),hn.expandByPoint(Dt),Dt.addVectors(hn.max,Ys.max),hn.expandByPoint(Dt)):(hn.expandByPoint(Ys.min),hn.expandByPoint(Ys.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),Dt.add(Xr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new G,l[P]=new G;const c=new G,u=new G,f=new G,h=new rt,p=new rt,m=new rt,x=new G,g=new G;function d(P,M,w){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,w),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,w),u.sub(c),f.sub(c),p.sub(h),m.sub(h);const N=1/(p.x*m.y-m.x*p.y);isFinite(N)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(N),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(N),o[P].add(x),o[M].add(x),o[w].add(x),l[P].add(g),l[M].add(g),l[w].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const w=v[P],N=w.start,k=w.count;for(let F=N,z=N+k;F<z;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const _=new G,S=new G,T=new G,C=new G;function A(P){T.fromBufferAttribute(r,P),C.copy(T);const M=o[P];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(C,M);const N=S.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,N)}for(let P=0,M=v.length;P<M;++P){const w=v[P],N=w.start,k=w.count;for(let F=N,z=N+k;F<z;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)h[m++]=c[p++]}return new ii(h,u,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ri,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lp=new At,cr=new ey,yo=new $f,Dp=new G,So=new G,Mo=new G,Eo=new G,zc=new G,wo=new G,Ip=new G,To=new G;let si=class extends vn{constructor(e=new Ri,n=new iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(zc.fromBufferAttribute(f,e),a?wo.addScaledVector(zc,u):wo.addScaledVector(zc.sub(n),u))}n.add(wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(yo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(yo,Dp)===null||cr.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Lp.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Lp),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],d=a[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,T=_;S<T;S+=3){const C=o.getX(S),A=o.getX(S+1),P=o.getX(S+2);r=bo(this,d,e,i,c,u,f,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const v=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);r=bo(this,a,e,i,c,u,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],d=a[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=v,T=_;S<T;S+=3){const C=S,A=S+1,P=S+2;r=bo(this,d,e,i,c,u,f,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const v=g,_=g+1,S=g+2;r=bo(this,a,e,i,c,u,f,v,_,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function uy(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;To.copy(o),To.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(To);return c<n.near||c>n.far?null:{distance:c,point:To.clone(),object:t}}function bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,So),t.getVertexPosition(l,Mo),t.getVertexPosition(c,Eo);const u=uy(t,e,n,i,So,Mo,Eo,Ip);if(u){const f=new G;$s.getBarycoord(Ip,So,Mo,Eo,f),r&&(u.uv=$s.getInterpolatedAttribute(r,o,l,c,f,new rt)),s&&(u.uv1=$s.getInterpolatedAttribute(s,o,l,c,f,new rt)),a&&(u.normal=$s.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};$s.getNormal(So,Mo,Eo,h.normal),u.face=h,u.barycoord=f}return u}class Ha extends Ri{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Si(c,3)),this.setAttribute("normal",new Si(u,3)),this.setAttribute("uv",new Si(f,2));function m(x,g,d,v,_,S,T,C,A,P,M){const w=S/A,N=T/P,k=S/2,F=T/2,z=C/2,$=A+1,j=P+1;let V=0,O=0;const Y=new G;for(let q=0;q<j;q++){const te=q*N-F;for(let Se=0;Se<$;Se++){const Ne=Se*w-k;Y[x]=Ne*v,Y[g]=te*_,Y[d]=z,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[d]=C>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(Se/A),f.push(1-q/P),V+=1}}for(let q=0;q<P;q++)for(let te=0;te<A;te++){const Se=h+te+$*q,Ne=h+te+$*(q+1),Ge=h+(te+1)+$*(q+1),Ke=h+(te+1)+$*q;l.push(Se,Ne,Ke),l.push(Ne,Ge,Ke),O+=6}o.addGroup(p,O,M),p+=O,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function dy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function av(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const fy={clone:Cs,merge:Yt};var hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ov extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new G,Up=new rt,Fp=new rt;class kn extends ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,Up,Fp),n.subVectors(Fp,Up)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,Yr=1;class my extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn($r,Yr,e,n);r.layers=this.layers,this.add(r);const s=new kn($r,Yr,e,n);s.layers=this.layers,this.add(s);const a=new kn($r,Yr,e,n);a.layers=this.layers,this.add(a);const o=new kn($r,Yr,e,n);o.layers=this.layers,this.add(o);const l=new kn($r,Yr,e,n);l.layers=this.layers,this.add(l);const c=new kn($r,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lv extends Zt{constructor(e=[],n=Pr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cv extends ni{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ha(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:_i});s.uniforms.tEquirect.value=n;const a=new si(r,s),o=n.minFilter;return n.minFilter===Sr&&(n.minFilter=jt),new my(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Ao extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gy={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class vy extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nr,this.environmentIntensity=1,this.environmentRotation=new Nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class xy extends Zt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Ot,u=Ot,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=new G,_y=new G,yy=new Fe;class mr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hc.subVectors(i,n).cross(_y.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yy.getNormalMatrix(e),r=this.coplanarPoint(Hc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new $f,Sy=new rt(.5,.5),Co=new G;class uv{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,a=new mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],m=s[8],x=s[9],g=s[10],d=s[11],v=s[12],_=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,p-u,d-m,T-v).normalize(),r[1].setComponents(c+a,p+u,d+m,T+v).normalize(),r[2].setComponents(c+o,p+f,d+x,T+_).normalize(),r[3].setComponents(c-o,p-f,d-x,T-_).normalize(),i)r[4].setComponents(l,h,g,S).normalize(),r[5].setComponents(c-l,p-h,d-g,T-S).normalize();else if(r[4].setComponents(c-l,p-h,d-g,T-S).normalize(),n===Qn)r[5].setComponents(c+l,p+h,d+g,T+S).normalize();else if(n===yl)r[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);const n=Sy.distanceTo(e.center);return ur.radius=.7071067811865476+n,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Da extends Zt{constructor(e,n,i=ri,r,s,a,o=Ot,l=Ot,c,u=Ai,f=1){if(u!==Ai&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class My extends Da{constructor(e,n=ri,i=Pr,r,s,a=Ot,o=Ot,l,c=Ai){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dv extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ga extends Ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,p=[],m=[],x=[],g=[];for(let d=0;d<u;d++){const v=d*h-a;for(let _=0;_<c;_++){const S=_*f-s;m.push(S,-v,0),x.push(0,0,1),g.push(_/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const _=v+c*d,S=v+c*(d+1),T=v+1+c*(d+1),C=v+1+c*d;p.push(_,S,C),p.push(S,T,C)}this.setIndex(p),this.setAttribute("position",new Si(m,3)),this.setAttribute("normal",new Si(x,3)),this.setAttribute("uv",new Si(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ey extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wy extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ty extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yf extends ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class by extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Op(t,e,n,i){const r=Ay(i);switch(n){case qg:return t*e;case Zg:return t*e/r.components*r.byteLength;case Vf:return t*e/r.components*r.byteLength;case bs:return t*e*2/r.components*r.byteLength;case Hf:return t*e*2/r.components*r.byteLength;case Kg:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case Gf:return t*e*4/r.components*r.byteLength;case Wo:case jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ad:case ld:return Math.max(t,16)*Math.max(e,8)/4;case sd:case od:return Math.max(t,8)*Math.max(e,8)/2;case cd:case ud:case fd:case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dd:case pd:case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pd:case Nd:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ud:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ay(t){switch(t){case bn:case jg:return{byteLength:1,components:1};case Pa:case Xg:case bi:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case ri:case kf:case Zn:return{byteLength:4,components:1};case $g:case Yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Cy(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<f.length;p++){const m=f[h],x=f[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,m=f.length;p<m;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Py=`#ifdef USE_ALPHAHASH
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
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
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
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,By=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
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
#endif`,Gy=`#ifdef USE_BUMPMAP
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qy=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Jy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,SS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,MS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bS=`PhysicalMaterial material;
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
#endif`,AS=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,CS=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,US=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kS=`#if defined( USE_POINTS_UV )
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
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`#ifdef USE_MORPHTARGETS
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
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
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
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,hM=`float getShadowMask() {
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
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`#include <common>
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
}`,UM=`#if DEPTH_PACKING == 3200
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
}`,FM=`#define DISTANCE
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
}`,OM=`#define DISTANCE
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
void main () {
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`uniform float scale;
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
}`,VM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,GM=`uniform vec3 diffuse;
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
}`,WM=`#define LAMBERT
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
}`,jM=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,XM=`#define MATCAP
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
}`,$M=`#define MATCAP
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
}`,YM=`#define NORMAL
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
}`,qM=`#define NORMAL
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
}`,KM=`#define PHONG
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
}`,ZM=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,QM=`#define STANDARD
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
}`,JM=`#define STANDARD
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
}`,eE=`#define TOON
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
}`,tE=`#define TOON
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
}`,nE=`uniform float size;
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
}`,iE=`uniform vec3 diffuse;
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
}`,rE=`#include <common>
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
}`,sE=`uniform vec3 color;
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
}`,aE=`uniform float rotation;
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
}`,oE=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Ry,alphahash_pars_fragment:Py,alphamap_fragment:Ny,alphamap_pars_fragment:Ly,alphatest_fragment:Dy,alphatest_pars_fragment:Iy,aomap_fragment:Uy,aomap_pars_fragment:Fy,batching_pars_vertex:Oy,batching_vertex:ky,begin_vertex:By,beginnormal_vertex:zy,bsdfs:Vy,iridescence_fragment:Hy,bumpmap_pars_fragment:Gy,clipping_planes_fragment:Wy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Xy,clipping_planes_vertex:$y,color_fragment:Yy,color_pars_fragment:qy,color_pars_vertex:Ky,color_vertex:Zy,common:Qy,cube_uv_reflection_fragment:Jy,defaultnormal_vertex:eS,displacementmap_pars_vertex:tS,displacementmap_vertex:nS,emissivemap_fragment:iS,emissivemap_pars_fragment:rS,colorspace_fragment:sS,colorspace_pars_fragment:aS,envmap_fragment:oS,envmap_common_pars_fragment:lS,envmap_pars_fragment:cS,envmap_pars_vertex:uS,envmap_physical_pars_fragment:SS,envmap_vertex:dS,fog_vertex:fS,fog_pars_vertex:hS,fog_fragment:pS,fog_pars_fragment:mS,gradientmap_pars_fragment:gS,lightmap_pars_fragment:vS,lights_lambert_fragment:xS,lights_lambert_pars_fragment:_S,lights_pars_begin:yS,lights_toon_fragment:MS,lights_toon_pars_fragment:ES,lights_phong_fragment:wS,lights_phong_pars_fragment:TS,lights_physical_fragment:bS,lights_physical_pars_fragment:AS,lights_fragment_begin:CS,lights_fragment_maps:RS,lights_fragment_end:PS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:IS,map_fragment:US,map_pars_fragment:FS,map_particle_fragment:OS,map_particle_pars_fragment:kS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:zS,morphinstance_vertex:VS,morphcolor_vertex:HS,morphnormal_vertex:GS,morphtarget_pars_vertex:WS,morphtarget_vertex:jS,normal_fragment_begin:XS,normal_fragment_maps:$S,normal_pars_fragment:YS,normal_pars_vertex:qS,normal_vertex:KS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:JS,clearcoat_pars_fragment:eM,iridescence_pars_fragment:tM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:rM,project_vertex:sM,dithering_fragment:aM,dithering_pars_fragment:oM,roughnessmap_fragment:lM,roughnessmap_pars_fragment:cM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:dM,shadowmap_vertex:fM,shadowmask_pars_fragment:hM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:gM,skinnormal_vertex:vM,specularmap_fragment:xM,specularmap_pars_fragment:_M,tonemapping_fragment:yM,tonemapping_pars_fragment:SM,transmission_fragment:MM,transmission_pars_fragment:EM,uv_pars_fragment:wM,uv_pars_vertex:TM,uv_vertex:bM,worldpos_vertex:AM,background_vert:CM,background_frag:RM,backgroundCube_vert:PM,backgroundCube_frag:NM,cube_vert:LM,cube_frag:DM,depth_vert:IM,depth_frag:UM,distance_vert:FM,distance_frag:OM,equirect_vert:kM,equirect_frag:BM,linedashed_vert:zM,linedashed_frag:VM,meshbasic_vert:HM,meshbasic_frag:GM,meshlambert_vert:WM,meshlambert_frag:jM,meshmatcap_vert:XM,meshmatcap_frag:$M,meshnormal_vert:YM,meshnormal_frag:qM,meshphong_vert:KM,meshphong_frag:ZM,meshphysical_vert:QM,meshphysical_frag:JM,meshtoon_vert:eE,meshtoon_frag:tE,points_vert:nE,points_frag:iE,shadow_vert:rE,shadow_frag:sE,sprite_vert:aE,sprite_frag:oE},de={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},qn={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new nt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};qn.physical={uniforms:Yt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ro={r:0,b:0,g:0},dr=new Nr,lE=new At;function cE(t,e,n,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function m(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?n:e).get(S)),S}function x(_){let S=!1;const T=m(_);T===null?d(o,l):T&&T.isColor&&(d(T,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,S){const T=m(S);T&&(T.isCubeTexture||T.mapping===Bl)?(u===void 0&&(u=new si(new Ha(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Cs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),dr.copy(S.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lE.makeRotationFromEuler(dr)),u.material.toneMapped=je.getTransfer(T.colorSpace)!==tt,(f!==T||h!==T.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new si(new Ga(2,2),new Wn({name:"BackgroundMaterial",uniforms:Cs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,S){_.getRGB(Ro,av(t)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,S,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:x,addToRenderList:g,dispose:v}}function uE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,N,k,F,z){let $=!1;const j=f(F,k,N);s!==j&&(s=j,c(s.object)),$=p(w,F,k,z),$&&m(w,F,k,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(w,N,k,F),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function f(w,N,k){const F=k.wireframe===!0;let z=i[w.id];z===void 0&&(z={},i[w.id]=z);let $=z[N.id];$===void 0&&($={},z[N.id]=$);let j=$[F];return j===void 0&&(j=h(l()),$[F]=j),j}function h(w){const N=[],k=[],F=[];for(let z=0;z<n;z++)N[z]=0,k[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,N,k,F){const z=s.attributes,$=N.attributes;let j=0;const V=k.getAttributes();for(const O in V)if(V[O].location>=0){const q=z[O];let te=$[O];if(te===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(te=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(te=w.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;j++}return s.attributesNum!==j||s.index!==F}function m(w,N,k,F){const z={},$=N.attributes;let j=0;const V=k.getAttributes();for(const O in V)if(V[O].location>=0){let q=$[O];q===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(q=w.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),z[O]=te,j++}s.attributes=z,s.attributesNum=j,s.index=F}function x(){const w=s.newAttributes;for(let N=0,k=w.length;N<k;N++)w[N]=0}function g(w){d(w,0)}function d(w,N){const k=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;k[w]=1,F[w]===0&&(t.enableVertexAttribArray(w),F[w]=1),z[w]!==N&&(t.vertexAttribDivisor(w,N),z[w]=N)}function v(){const w=s.newAttributes,N=s.enabledAttributes;for(let k=0,F=N.length;k<F;k++)N[k]!==w[k]&&(t.disableVertexAttribArray(k),N[k]=0)}function _(w,N,k,F,z,$,j){j===!0?t.vertexAttribIPointer(w,N,k,z,$):t.vertexAttribPointer(w,N,k,F,z,$)}function S(w,N,k,F){x();const z=F.attributes,$=k.getAttributes(),j=N.defaultAttributeValues;for(const V in $){const O=$[V];if(O.location>=0){let Y=z[V];if(Y===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),Y!==void 0){const q=Y.normalized,te=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const Ne=Se.buffer,Ge=Se.type,Ke=Se.bytesPerElement,K=Ge===t.INT||Ge===t.UNSIGNED_INT||Y.gpuType===kf;if(Y.isInterleavedBufferAttribute){const ee=Y.data,xe=ee.stride,Ue=Y.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<O.locationSize;Me++)d(O.location+Me,ee.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<O.locationSize;Me++)g(O.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Me=0;Me<O.locationSize;Me++)_(O.location+Me,te/O.locationSize,Ge,q,xe*Ke,(Ue+te/O.locationSize*Me)*Ke,K)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<O.locationSize;ee++)d(O.location+ee,Y.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<O.locationSize;ee++)g(O.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let ee=0;ee<O.locationSize;ee++)_(O.location+ee,te/O.locationSize,Ge,q,te*Ke,te/O.locationSize*ee*Ke,K)}}else if(j!==void 0){const q=j[V];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(O.location,q);break;case 3:t.vertexAttrib3fv(O.location,q);break;case 4:t.vertexAttrib4fv(O.location,q);break;default:t.vertexAttrib1fv(O.location,q)}}}}v()}function T(){P();for(const w in i){const N=i[w];for(const k in N){const F=N[k];for(const z in F)u(F[z].object),delete F[z];delete N[k]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const N=i[w.id];for(const k in N){const F=N[k];for(const z in F)u(F[z].object),delete F[z];delete N[k]}delete i[w.id]}function A(w){for(const N in i){const k=i[N];if(k[w.id]===void 0)continue;const F=k[w.id];for(const z in F)u(F[z].object),delete F[z];delete k[w.id]}}function P(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function dE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=u[x]*h[x];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,maxSamples:T,samples:C}}function hE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new mr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,_=v*4;let S=d.clippingState||null;l.value=S,S=u(m,h,_,p);for(let T=0;T!==_;++T)S[T]=n[T];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const d=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,S=p;_!==x;++_,S+=4)a.copy(f[_]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function pE(t){let e=new WeakMap;function n(a,o){return o===td?a.mapping=Pr:o===nd&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===td||o===nd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new cv(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Wi=4,kp=[.125,.215,.35,.446,.526,.582],vr=20,mE=256,qs=new Yf,Bp=new nt;let Gc=null,Wc=0,jc=0,Xc=!1;const gE=new G;class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=gE}=s;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,jc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Pr||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:bi,format:Bn,colorSpace:As,depthBuffer:!1},r=Vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vE(s)),this._blurMaterial=_E(s,e,n),this._ggxMaterial=xE(s,e,n)}return r}_compileMaterial(e){const n=new si(new Ri,e);this._renderer.compile(n,qs)}_sceneToCubeUV(e,n,i,r,s){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Bp),f.toneMapping=ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new Ha,new iv({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let d=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,d=!0):(g.color.copy(Bp),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const T=this._cubeSize;qr(r,S*T,_>2?T:0,T,T),f.setRenderTarget(r),d&&f.render(x,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Pr||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,qs)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:m}=this,x=this._sizeLods[i],g=3*x*(i>m-Wi?i-m+Wi:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,qr(s,g,d,3*x,2*x),r.setRenderTarget(s),r.render(o,qs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,qr(e,g,d,3*x,2*x),r.setRenderTarget(e),r.render(o,qs)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vr-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):vr;g>vr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vr}`);const d=[];let v=0;for(let A=0;A<vr;++A){const P=A/x,M=Math.exp(-P*P/2);d.push(M),A===0?v+=M:A<g&&(v+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=m,h.mipInt.value=_-i;const S=this._sizeLods[r],T=3*S*(r>_-Wi?r-_+Wi:0),C=4*(this._cubeSize-S);qr(n,T,C,3*S,2*S),l.setRenderTarget(n),l.render(f,qs)}}function vE(t){const e=[],n=[],i=[];let r=t;const s=t-Wi+1+kp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Wi?l=kp[a-t+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,m=6,x=3,g=2,d=1,v=new Float32Array(x*m*p),_=new Float32Array(g*m*p),S=new Float32Array(d*m*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,P=C>2?0:-1,M=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(M,x*m*C),_.set(h,g*m*C);const w=[C,C,C,C,C,C];S.set(w,d*m*C)}const T=new Ri;T.setAttribute("position",new ii(v,x)),T.setAttribute("uv",new ii(_,g)),T.setAttribute("faceIndex",new ii(S,d)),i.push(new si(T,null)),r>Wi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Vp(t,e,n){const i=new ni(t,e,n);return i.texture.mapping=Bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xE(t,e,n){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _E(t,e,n){const i=new Float32Array(vr),r=new G(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Hp(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Gp(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function yE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===td||l===nd,u=l===Pr||l===Ts;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new zp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new zp(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function SE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&La("WebGLRenderer: "+i+" extension not supported."),r}}}function ME(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,m=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,S=v.length;_<S;_+=3){const T=v[_+0],C=v[_+1],A=v[_+2];h.push(T,C,C,A,A,T)}}else if(m!==void 0){const v=m.array;x=m.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const T=_+0,C=_+1,A=_+2;h.push(T,C,C,A,A,T)}}else return;const g=new(Qg(h)?sv:rv)(h,1);g.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function EE(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,h*a,m),n.update(p,i,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,m);let g=0;for(let d=0;d<m;d++)g+=p[d];n.update(g,i,1)}function f(h,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,m);let d=0;for(let v=0;v<m;v++)d+=p[v]*x[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TE(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};var p=w;h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let S=0;m===!0&&(S=1),x===!0&&(S=2),g===!0&&(S=3);let T=o.attributes.position.count*S,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*C*4*f),P=new Jg(A,T,C,f);P.type=Zn,P.needsUpdate=!0;const M=S*4;for(let N=0;N<f;N++){const k=d[N],F=v[N],z=_[N],$=T*C*4*N;for(let j=0;j<k.count;j++){const V=j*M;m===!0&&(r.fromBufferAttribute(k,j),A[$+V+0]=r.x,A[$+V+1]=r.y,A[$+V+2]=r.z,A[$+V+3]=0),x===!0&&(r.fromBufferAttribute(F,j),A[$+V+4]=r.x,A[$+V+5]=r.y,A[$+V+6]=r.z,A[$+V+7]=0),g===!0&&(r.fromBufferAttribute(z,j),A[$+V+8]=r.x,A[$+V+9]=r.y,A[$+V+10]=r.z,A[$+V+11]=z.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new rt(T,C)},i.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function bE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const AE={[Og]:"LINEAR_TONE_MAPPING",[kg]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[zg]:"ACES_FILMIC_TONE_MAPPING",[Hg]:"AGX_TONE_MAPPING",[Gg]:"NEUTRAL_TONE_MAPPING",[Vg]:"CUSTOM_TONE_MAPPING"};function CE(t,e,n,i,r){const s=new ni(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new ni(e,n,{type:bi,depthBuffer:!1,stencilBuffer:!1}),o=new Ri;o.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Si([0,2,0,0,2,0],2));const l=new Ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new si(o,l),u=new Yf(-1,1,1,-1,0,1);let f=null,h=null,p=!1,m,x=null,g=[],d=!1;this.setSize=function(v,_){s.setSize(v,_),a.setSize(v,_);for(let S=0;S<g.length;S++){const T=g[S];T.setSize&&T.setSize(v,_)}},this.setEffects=function(v){g=v,d=g.length>0&&g[0].isRenderPass===!0;const _=s.width,S=s.height;for(let T=0;T<g.length;T++){const C=g[T];C.setSize&&C.setSize(_,S)}},this.begin=function(v,_){if(p||v.toneMapping===ti&&g.length===0)return!1;if(x=_,_!==null){const S=_.width,T=_.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return d===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=ti,!0},this.hasRenderPass=function(){return d},this.end=function(v,_){v.toneMapping=m,p=!0;let S=s,T=a;for(let C=0;C<g.length;C++){const A=g[C];if(A.enabled!==!1&&(A.render(v,T,S,_),A.needsSwap!==!1)){const P=S;S=T,T=P}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,l.defines={},je.getTransfer(f)===tt&&(l.defines.SRGB_TRANSFER="");const C=AE[h];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(x),v.render(c,u),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const hv=new Zt,kd=new Da(1,1),pv=new Jg,mv=new Q1,gv=new lv,Wp=[],jp=[],Xp=new Float32Array(16),$p=new Float32Array(9),Yp=new Float32Array(4);function Ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function RE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function DE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),Nt(n,i)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;$p.set(i),t.uniformMatrix3fv(this.addr,!1,$p),Nt(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;Xp.set(i),t.uniformMatrix4fv(this.addr,!1,Xp),Nt(n,i)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function zE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function WE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kd.compareFunction=n.isReversedDepthBuffer()?jf:Wf,s=kd):s=hv,n.setTexture2D(e||s,r)}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mv,r)}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gv,r)}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||pv,r)}function YE(t){switch(t){case 5126:return RE;case 35664:return PE;case 35665:return NE;case 35666:return LE;case 35674:return DE;case 35675:return IE;case 35676:return UE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return kE;case 35669:case 35673:return BE;case 5125:return zE;case 36294:return VE;case 36295:return HE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return $E}}function qE(t,e){t.uniform1fv(this.addr,e)}function KE(t,e){const n=Ds(e,this.size,2);t.uniform2fv(this.addr,n)}function ZE(t,e){const n=Ds(e,this.size,3);t.uniform3fv(this.addr,n)}function QE(t,e){const n=Ds(e,this.size,4);t.uniform4fv(this.addr,n)}function JE(t,e){const n=Ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function e2(t,e){const n=Ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function t2(t,e){const n=Ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function n2(t,e){t.uniform1iv(this.addr,e)}function i2(t,e){t.uniform2iv(this.addr,e)}function r2(t,e){t.uniform3iv(this.addr,e)}function s2(t,e){t.uniform4iv(this.addr,e)}function a2(t,e){t.uniform1uiv(this.addr,e)}function o2(t,e){t.uniform2uiv(this.addr,e)}function l2(t,e){t.uniform3uiv(this.addr,e)}function c2(t,e){t.uniform4uiv(this.addr,e)}function u2(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=kd:a=hv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function d2(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||mv,s[a])}function f2(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||gv,s[a])}function h2(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||pv,s[a])}function p2(t){switch(t){case 5126:return qE;case 35664:return KE;case 35665:return ZE;case 35666:return QE;case 35674:return JE;case 35675:return e2;case 35676:return t2;case 5124:case 35670:return n2;case 35667:case 35671:return i2;case 35668:case 35672:return r2;case 35669:case 35673:return s2;case 5125:return a2;case 36294:return o2;case 36295:return l2;case 36296:return c2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return d2;case 35680:case 36300:case 36308:case 36293:return f2;case 36289:case 36303:case 36311:case 36292:return h2}}class m2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YE(n.type)}}class g2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p2(n.type)}}class v2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function qp(t,e){t.seq.push(e),t.map[e.id]=e}function x2(t,e,n){const i=t.name,r=i.length;for($c.lastIndex=0;;){const s=$c.exec(i),a=$c.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qp(n,c===void 0?new m2(o,t,e):new g2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new v2(o),qp(n,f)),n=f}}}class Yo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);x2(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Kp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const _2=37297;let y2=0;function S2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Zp=new Fe;function M2(t){je._getMatrix(Zp,je.workingColorSpace,t);const e=`mat3( ${Zp.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case _l:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+S2(t.getShaderSource(e),o)}else return s}function E2(t,e){const n=M2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const w2={[Og]:"Linear",[kg]:"Reinhard",[Bg]:"Cineon",[zg]:"ACESFilmic",[Hg]:"AgX",[Gg]:"Neutral",[Vg]:"Custom"};function T2(t,e){const n=w2[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Po=new G;function b2(){je.getLuminanceCoefficients(Po);const t=Po.x.toFixed(4),e=Po.y.toFixed(4),n=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function C2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function R2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function na(t){return t!==""}function Jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(t){return t.replace(P2,L2)}const N2=new Map;function L2(t,e){let n=Oe[e];if(n===void 0){const i=N2.get(e);if(i!==void 0)n=Oe[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const D2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(t){return t.replace(D2,I2)}function I2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const U2={[Go]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function F2(t){return U2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const O2={[Pr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Bl]:"ENVMAP_TYPE_CUBE_UV"};function k2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":O2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const B2={[Ts]:"ENVMAP_MODE_REFRACTION"};function z2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":B2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const V2={[Fg]:"ENVMAP_BLENDING_MULTIPLY",[L1]:"ENVMAP_BLENDING_MIX",[D1]:"ENVMAP_BLENDING_ADD"};function H2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":V2[t.combine]||"ENVMAP_BLENDING_NONE"}function G2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function W2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=F2(n),c=k2(n),u=z2(n),f=H2(n),h=G2(n),p=A2(n),m=C2(s),x=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(na).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(na).join(`
`),d.length>0&&(d+=`
`)):(g=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),d=[nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ti?"#define TONE_MAPPING":"",n.toneMapping!==ti?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ti?T2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,E2("linearToOutputTexel",n.outputColorSpace),b2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(na).join(`
`)),a=Bd(a),a=Jp(a,n),a=em(a,n),o=Bd(o),o=Jp(o,n),o=em(o,n),a=tm(a),o=tm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+g+a,S=v+d+o,T=Kp(r,r.VERTEX_SHADER,_),C=Kp(r,r.FRAGMENT_SHADER,S);r.attachShader(x,T),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(N){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(x)||"",F=r.getShaderInfoLog(T)||"",z=r.getShaderInfoLog(C)||"",$=k.trim(),j=F.trim(),V=z.trim();let O=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,T,C);else{const q=Qp(r,T,"vertex"),te=Qp(r,C,"fragment");qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+$+`
`+q+`
`+te)}else $!==""?Ie("WebGLProgram: Program Info Log:",$):(j===""||V==="")&&(Y=!1);Y&&(N.diagnostics={runnable:O,programLog:$,vertexShader:{log:j,prefix:g},fragmentShader:{log:V,prefix:d}})}r.deleteShader(T),r.deleteShader(C),P=new Yo(r,x),M=R2(r,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(x,_2)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=C,this}let j2=0;class X2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $2(e),n.set(e,i)),i}}class $2{constructor(e){this.id=j2++,this.code=e,this.usedTimes=0}}function Y2(t,e,n,i,r,s,a){const o=new tv,l=new X2,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,w,N,k,F){const z=k.fog,$=F.geometry,j=M.isMeshStandardMaterial?k.environment:null,V=(M.isMeshStandardMaterial?n:e).get(M.envMap||j),O=V&&V.mapping===Bl?V.image.height:null,Y=m[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Ie("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const q=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,te=q!==void 0?q.length:0;let Se=0;$.morphAttributes.position!==void 0&&(Se=1),$.morphAttributes.normal!==void 0&&(Se=2),$.morphAttributes.color!==void 0&&(Se=3);let Ne,Ge,Ke,K;if(Y){const Je=qn[Y];Ne=Je.vertexShader,Ge=Je.fragmentShader}else Ne=M.vertexShader,Ge=M.fragmentShader,l.update(M),Ke=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const ee=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,Me=F.isBatchedMesh===!0,$e=!!M.map,Lt=!!M.matcap,We=!!V,Qe=!!M.aoMap,at=!!M.lightMap,ke=!!M.bumpMap,Et=!!M.normalMap,L=!!M.displacementMap,wt=!!M.emissiveMap,Ze=!!M.metalnessMap,lt=!!M.roughnessMap,we=M.anisotropy>0,R=M.clearcoat>0,y=M.dispersion>0,I=M.iridescence>0,Z=M.sheen>0,J=M.transmission>0,X=we&&!!M.anisotropyMap,be=R&&!!M.clearcoatMap,oe=R&&!!M.clearcoatNormalMap,Ee=R&&!!M.clearcoatRoughnessMap,Le=I&&!!M.iridescenceMap,re=I&&!!M.iridescenceThicknessMap,ce=Z&&!!M.sheenColorMap,ye=Z&&!!M.sheenRoughnessMap,Te=!!M.specularMap,le=!!M.specularColorMap,Be=!!M.specularIntensityMap,D=J&&!!M.transmissionMap,pe=J&&!!M.thicknessMap,se=!!M.gradientMap,me=!!M.alphaMap,ne=M.alphaTest>0,Q=!!M.alphaHash,ae=!!M.extensions;let De=ti;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(De=t.toneMapping);const ct={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:Ne,fragmentShader:Ge,defines:M.defines,customVertexShaderID:Ke,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Me,batchingColor:Me&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:As,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:Lt,envMap:We,envMapMode:We&&V.mapping,envMapCubeUVHeight:O,aoMap:Qe,lightMap:at,bumpMap:ke,normalMap:Et,displacementMap:L,emissiveMap:wt,normalMapObjectSpace:Et&&M.normalMapType===O1,normalMapTangentSpace:Et&&M.normalMapType===F1,metalnessMap:Ze,roughnessMap:lt,anisotropy:we,anisotropyMap:X,clearcoat:R,clearcoatMap:be,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:I,iridescenceMap:Le,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:ye,specularMap:Te,specularColorMap:le,specularIntensityMap:Be,transmission:J,transmissionMap:D,thicknessMap:pe,gradientMap:se,opaque:M.transparent===!1&&M.blending===ms&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:Q,combine:M.combine,mapUv:$e&&x(M.map.channel),aoMapUv:Qe&&x(M.aoMap.channel),lightMapUv:at&&x(M.lightMap.channel),bumpMapUv:ke&&x(M.bumpMap.channel),normalMapUv:Et&&x(M.normalMap.channel),displacementMapUv:L&&x(M.displacementMap.channel),emissiveMapUv:wt&&x(M.emissiveMap.channel),metalnessMapUv:Ze&&x(M.metalnessMap.channel),roughnessMapUv:lt&&x(M.roughnessMap.channel),anisotropyMapUv:X&&x(M.anisotropyMap.channel),clearcoatMapUv:be&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(M.sheenRoughnessMap.channel),specularMapUv:Te&&x(M.specularMap.channel),specularColorMapUv:le&&x(M.specularColorMap.channel),specularIntensityMapUv:Be&&x(M.specularIntensityMap.channel),transmissionMapUv:D&&x(M.transmissionMap.channel),thicknessMapUv:pe&&x(M.thicknessMap.channel),alphaMapUv:me&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Et||we),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&($e||me),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:De,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:wt&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===pi,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(w,M),_(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const w=m[M.type];let N;if(w){const k=qn[w];N=fy.clone(k.uniforms)}else N=M.uniforms;return N}function T(M,w){let N=f.get(w);return N!==void 0?++N.usedTimes:(N=new W2(t,w,M,s),u.push(N),f.set(w,N)),N}function C(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),f.delete(M.cacheKey),M.destroy()}}function A(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function q2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function K2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function im(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,m,x,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:m,renderOrder:f.renderOrder,z:x,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=x,d.group=g),e++,d}function o(f,h,p,m,x,g){const d=a(f,h,p,m,x,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,m,x,g){const d=a(f,h,p,m,x,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||K2),i.length>1&&i.sort(h||im),r.length>1&&r.sort(h||im)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Z2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new rm,t.set(i,[a])):r>=s.length?(a=new rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Q2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new nt};break;case"SpotLight":n={position:new G,direction:new G,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function J2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ew=0;function tw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nw(t){const e=new Q2,n=J2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new At,a=new At;function o(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,v=0,_=0,S=0,T=0,C=0,A=0;c.sort(tw);for(let M=0,w=c.length;M<w;M++){const N=c[M],k=N.color,F=N.intensity,z=N.distance;let $=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===bs?$=N.shadow.map.texture:$=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=k.r*F,f+=k.g*F,h+=k.b*F;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],F);A++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const V=N.shadow,O=n.get(N);O.shadowIntensity=V.intensity,O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=j,p++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(F),j.distance=z,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[x]=j;const V=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,V.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[x]=V.matrix,N.castShadow){const O=n.get(N);O.shadowIntensity=V.intensity,O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,i.spotShadow[x]=O,i.spotShadowMap[x]=$,S++}x++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(k).multiplyScalar(F),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=j,g++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){const V=N.shadow,O=n.get(N);O.shadowIntensity=V.intensity,O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,O.shadowCameraNear=V.camera.near,O.shadowCameraFar=V.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=N.shadow.matrix,_++}i.point[m]=j,m++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(F),j.groundColor.copy(N.groundColor).multiplyScalar(F),i.hemi[d]=j,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==T||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,P.directionalLength=p,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=T,P.numLightProbes=A,i.version=ew++)}function l(c,u){let f=0,h=0,p=0,m=0,x=0;const g=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const _=c[d];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function sm(t){const e=new nw(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function iw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sm(t),e.set(r,[o])):s>=a.length?(o=new sm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
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
}`,aw=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],ow=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],am=new At,Ks=new G,Yc=new G;function lw(t,e,n){let i=new uv;const r=new rt,s=new rt,a=new Mt,o=new wy,l=new Ty,c={},u=n.maxTextureSize,f={[tr]:cn,[cn]:tr,[pi]:pi},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:rw,fragmentShader:sw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ri;m.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new si(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let d=this.type;this.render=function(C,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;C.type===h1&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Go);const M=t.getRenderTarget(),w=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),k=t.state;k.setBlending(_i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=d!==this.type;F&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach($=>$.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,$=C.length;z<$;z++){const j=C[z],V=j.shadow;if(V===void 0){Ie("WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const O=V.getFrameExtents();if(r.multiply(O),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,V.mapSize.y=s.y)),V.map===null||F===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ta){if(j.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ni(r.x,r.y,{format:bs,type:bi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),V.map.texture.name=j.name+".shadowMap",V.map.depthTexture=new Da(r.x,r.y,Zn),V.map.depthTexture.name=j.name+".shadowMapDepth",V.map.depthTexture.format=Ai,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot}else{j.isPointLight?(V.map=new cv(r.x),V.map.depthTexture=new My(r.x,ri)):(V.map=new ni(r.x,r.y),V.map.depthTexture=new Da(r.x,r.y,ri)),V.map.depthTexture.name=j.name+".shadowMap",V.map.depthTexture.format=Ai;const q=t.state.buffers.depth.getReversed();this.type===Go?(V.map.depthTexture.compareFunction=q?jf:Wf,V.map.depthTexture.minFilter=jt,V.map.depthTexture.magFilter=jt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ot,V.map.depthTexture.magFilter=Ot)}V.camera.updateProjectionMatrix()}const Y=V.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<Y;q++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,q),t.clear();else{q===0&&(t.setRenderTarget(V.map),t.clear());const te=V.getViewport(q);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),k.viewport(a)}if(j.isPointLight){const te=V.camera,Se=V.matrix,Ne=j.distance||te.far;Ne!==te.far&&(te.far=Ne,te.updateProjectionMatrix()),Ks.setFromMatrixPosition(j.matrixWorld),te.position.copy(Ks),Yc.copy(te.position),Yc.add(aw[q]),te.up.copy(ow[q]),te.lookAt(Yc),te.updateMatrixWorld(),Se.makeTranslation(-Ks.x,-Ks.y,-Ks.z),am.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),V._frustum.setFromProjectionMatrix(am,te.coordinateSystem,te.reversedDepth)}else V.updateMatrices(j);i=V.getFrustum(),S(A,P,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===ta&&v(V,P),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(M,w,N)};function v(C,A){const P=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ni(r.x,r.y,{format:bs,type:bi})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,P,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,P,p,x,null)}function _(C,A,P,M){let w=null;const N=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)w=N;else if(w=P.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=w.uuid,F=A.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let $=z[F];$===void 0&&($=w.clone(),z[F]=$,A.addEventListener("dispose",T)),w=$}if(w.visible=A.visible,w.wireframe=A.wireframe,M===ta?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:f[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=t.properties.get(w);k.light=P}return w}function S(C,A,P,M,w){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===ta)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const F=e.update(C),z=C.material;if(Array.isArray(z)){const $=F.groups;for(let j=0,V=$.length;j<V;j++){const O=$[j],Y=z[O.materialIndex];if(Y&&Y.visible){const q=_(C,Y,M,w);C.onBeforeShadow(t,C,A,P,F,q,O),t.renderBufferDirect(P,null,F,q,C,O),C.onAfterShadow(t,C,A,P,F,q,O)}}}else if(z.visible){const $=_(C,z,M,w);C.onBeforeShadow(t,C,A,P,F,$,null),t.renderBufferDirect(P,null,F,$,C,null),C.onAfterShadow(t,C,A,P,F,$,null)}}const k=C.children;for(let F=0,z=k.length;F<z;F++)S(k[F],A,P,M,w)}function T(C){C.target.removeEventListener("dispose",T);for(const P in c){const M=c[P],w=C.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const cw={[Yu]:qu,[Ku]:Ju,[Zu]:ed,[ws]:Qu,[qu]:Yu,[Ju]:Ku,[ed]:Zu,[Qu]:ws};function uw(t,e){function n(){let D=!1;const pe=new Mt;let se=null;const me=new Mt(0,0,0,0);return{setMask:function(ne){se!==ne&&!D&&(t.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){D=ne},setClear:function(ne,Q,ae,De,ct){ct===!0&&(ne*=De,Q*=De,ae*=De),pe.set(ne,Q,ae,De),me.equals(pe)===!1&&(t.clearColor(ne,Q,ae,De),me.copy(pe))},reset:function(){D=!1,se=null,me.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,se=null,me=null,ne=null;return{setReversed:function(Q){if(pe!==Q){const ae=e.get("EXT_clip_control");Q?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),pe=Q;const De=ne;ne=null,this.setClear(De)}},getReversed:function(){return pe},setTest:function(Q){Q?ee(t.DEPTH_TEST):xe(t.DEPTH_TEST)},setMask:function(Q){se!==Q&&!D&&(t.depthMask(Q),se=Q)},setFunc:function(Q){if(pe&&(Q=cw[Q]),me!==Q){switch(Q){case Yu:t.depthFunc(t.NEVER);break;case qu:t.depthFunc(t.ALWAYS);break;case Ku:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case Zu:t.depthFunc(t.EQUAL);break;case Qu:t.depthFunc(t.GEQUAL);break;case Ju:t.depthFunc(t.GREATER);break;case ed:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ne!==Q&&(pe&&(Q=1-Q),t.clearDepth(Q),ne=Q)},reset:function(){D=!1,se=null,me=null,ne=null,pe=!1}}}function r(){let D=!1,pe=null,se=null,me=null,ne=null,Q=null,ae=null,De=null,ct=null;return{setTest:function(Je){D||(Je?ee(t.STENCIL_TEST):xe(t.STENCIL_TEST))},setMask:function(Je){pe!==Je&&!D&&(t.stencilMask(Je),pe=Je)},setFunc:function(Je,jn,ai){(se!==Je||me!==jn||ne!==ai)&&(t.stencilFunc(Je,jn,ai),se=Je,me=jn,ne=ai)},setOp:function(Je,jn,ai){(Q!==Je||ae!==jn||De!==ai)&&(t.stencilOp(Je,jn,ai),Q=Je,ae=jn,De=ai)},setLocked:function(Je){D=Je},setClear:function(Je){ct!==Je&&(t.clearStencil(Je),ct=Je)},reset:function(){D=!1,pe=null,se=null,me=null,ne=null,Q=null,ae=null,De=null,ct=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],m=null,x=!1,g=null,d=null,v=null,_=null,S=null,T=null,C=null,A=new nt(0,0,0),P=0,M=!1,w=null,N=null,k=null,F=null,z=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(O)[1]),j=V>=1):O.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),j=V>=2);let Y=null,q={};const te=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ne=new Mt().fromArray(te),Ge=new Mt().fromArray(Se);function Ke(D,pe,se,me){const ne=new Uint8Array(4),Q=t.createTexture();t.bindTexture(D,Q),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ae=0;ae<se;ae++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(pe+ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Q}const K={};K[t.TEXTURE_2D]=Ke(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(ws),ke(!1),Et(fp),ee(t.CULL_FACE),Qe(_i);function ee(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function xe(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ue(D,pe){return f[D]!==pe?(t.bindFramebuffer(D,pe),f[D]=pe,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(D,pe){let se=p,me=!1;if(D){se=h.get(pe),se===void 0&&(se=[],h.set(pe,se));const ne=D.textures;if(se.length!==ne.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,ae=ne.length;Q<ae;Q++)se[Q]=t.COLOR_ATTACHMENT0+Q;se.length=ne.length,me=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,me=!0);me&&t.drawBuffers(se)}function $e(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const Lt={[gr]:t.FUNC_ADD,[m1]:t.FUNC_SUBTRACT,[g1]:t.FUNC_REVERSE_SUBTRACT};Lt[v1]=t.MIN,Lt[x1]=t.MAX;const We={[_1]:t.ZERO,[y1]:t.ONE,[S1]:t.SRC_COLOR,[Xu]:t.SRC_ALPHA,[A1]:t.SRC_ALPHA_SATURATE,[T1]:t.DST_COLOR,[E1]:t.DST_ALPHA,[M1]:t.ONE_MINUS_SRC_COLOR,[$u]:t.ONE_MINUS_SRC_ALPHA,[b1]:t.ONE_MINUS_DST_COLOR,[w1]:t.ONE_MINUS_DST_ALPHA,[C1]:t.CONSTANT_COLOR,[R1]:t.ONE_MINUS_CONSTANT_COLOR,[P1]:t.CONSTANT_ALPHA,[N1]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,pe,se,me,ne,Q,ae,De,ct,Je){if(D===_i){x===!0&&(xe(t.BLEND),x=!1);return}if(x===!1&&(ee(t.BLEND),x=!0),D!==p1){if(D!==g||Je!==M){if((d!==gr||S!==gr)&&(t.blendEquation(t.FUNC_ADD),d=gr,S=gr),Je)switch(D){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hp:t.blendFunc(t.ONE,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:qe("WebGLState: Invalid blending: ",D);break}else switch(D){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pp:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mp:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",D);break}v=null,_=null,T=null,C=null,A.set(0,0,0),P=0,g=D,M=Je}return}ne=ne||pe,Q=Q||se,ae=ae||me,(pe!==d||ne!==S)&&(t.blendEquationSeparate(Lt[pe],Lt[ne]),d=pe,S=ne),(se!==v||me!==_||Q!==T||ae!==C)&&(t.blendFuncSeparate(We[se],We[me],We[Q],We[ae]),v=se,_=me,T=Q,C=ae),(De.equals(A)===!1||ct!==P)&&(t.blendColor(De.r,De.g,De.b,ct),A.copy(De),P=ct),g=D,M=!1}function at(D,pe){D.side===pi?xe(t.CULL_FACE):ee(t.CULL_FACE);let se=D.side===cn;pe&&(se=!se),ke(se),D.blending===ms&&D.transparent===!1?Qe(_i):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const me=D.stencilWrite;o.setTest(me),me&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):xe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function Et(D){D!==d1?(ee(t.CULL_FACE),D!==N&&(D===fp?t.cullFace(t.BACK):D===f1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):xe(t.CULL_FACE),N=D}function L(D){D!==k&&(j&&t.lineWidth(D),k=D)}function wt(D,pe,se){D?(ee(t.POLYGON_OFFSET_FILL),(F!==pe||z!==se)&&(t.polygonOffset(pe,se),F=pe,z=se)):xe(t.POLYGON_OFFSET_FILL)}function Ze(D){D?ee(t.SCISSOR_TEST):xe(t.SCISSOR_TEST)}function lt(D){D===void 0&&(D=t.TEXTURE0+$-1),Y!==D&&(t.activeTexture(D),Y=D)}function we(D,pe,se){se===void 0&&(Y===null?se=t.TEXTURE0+$-1:se=Y);let me=q[se];me===void 0&&(me={type:void 0,texture:void 0},q[se]=me),(me.type!==D||me.texture!==pe)&&(Y!==se&&(t.activeTexture(se),Y=se),t.bindTexture(D,pe||K[D]),me.type=D,me.texture=pe)}function R(){const D=q[Y];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function Z(){try{t.texSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function J(){try{t.texSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function oe(){try{t.texStorage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function Ee(){try{t.texStorage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function Le(){try{t.texImage2D(...arguments)}catch(D){qe("WebGLState:",D)}}function re(){try{t.texImage3D(...arguments)}catch(D){qe("WebGLState:",D)}}function ce(D){Ne.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function ye(D){Ge.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function Te(D,pe){let se=c.get(pe);se===void 0&&(se=new WeakMap,c.set(pe,se));let me=se.get(D);me===void 0&&(me=t.getUniformBlockIndex(pe,D.name),se.set(D,me))}function le(D,pe){const me=c.get(pe).get(D);l.get(pe)!==me&&(t.uniformBlockBinding(pe,me,D.__bindingPointIndex),l.set(pe,me))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Y=null,q={},f={},h=new WeakMap,p=[],m=null,x=!1,g=null,d=null,v=null,_=null,S=null,T=null,C=null,A=new nt(0,0,0),P=0,M=!1,w=null,N=null,k=null,F=null,z=null,Ne.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Ue,drawBuffers:Me,useProgram:$e,setBlending:Qe,setMaterial:at,setFlipSided:ke,setCullFace:Et,setLineWidth:L,setPolygonOffset:wt,setScissorTest:Ze,activeTexture:lt,bindTexture:we,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:Le,texImage3D:re,updateUBOMapping:Te,uniformBlockBinding:le,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:be,scissor:ce,viewport:ye,reset:Be}}function dw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return p?new OffscreenCanvas(R,y):Sl("canvas")}function x(R,y,I){let Z=1;const J=we(R);if((J.width>I||J.height>I)&&(Z=I/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Z*J.width),be=Math.floor(Z*J.height);f===void 0&&(f=m(X,be));const oe=y?m(X,be):f;return oe.width=X,oe.height=be,oe.getContext("2d").drawImage(R,0,0,X,be),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+be+")."),oe}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function d(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,y,I,Z,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=y;if(y===t.RED&&(I===t.FLOAT&&(X=t.R32F),I===t.HALF_FLOAT&&(X=t.R16F),I===t.UNSIGNED_BYTE&&(X=t.R8)),y===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.R8UI),I===t.UNSIGNED_SHORT&&(X=t.R16UI),I===t.UNSIGNED_INT&&(X=t.R32UI),I===t.BYTE&&(X=t.R8I),I===t.SHORT&&(X=t.R16I),I===t.INT&&(X=t.R32I)),y===t.RG&&(I===t.FLOAT&&(X=t.RG32F),I===t.HALF_FLOAT&&(X=t.RG16F),I===t.UNSIGNED_BYTE&&(X=t.RG8)),y===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RG8UI),I===t.UNSIGNED_SHORT&&(X=t.RG16UI),I===t.UNSIGNED_INT&&(X=t.RG32UI),I===t.BYTE&&(X=t.RG8I),I===t.SHORT&&(X=t.RG16I),I===t.INT&&(X=t.RG32I)),y===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGB8UI),I===t.UNSIGNED_SHORT&&(X=t.RGB16UI),I===t.UNSIGNED_INT&&(X=t.RGB32UI),I===t.BYTE&&(X=t.RGB8I),I===t.SHORT&&(X=t.RGB16I),I===t.INT&&(X=t.RGB32I)),y===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),I===t.UNSIGNED_INT&&(X=t.RGBA32UI),I===t.BYTE&&(X=t.RGBA8I),I===t.SHORT&&(X=t.RGBA16I),I===t.INT&&(X=t.RGBA32I)),y===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),y===t.RGBA){const be=J?_l:je.getTransfer(Z);I===t.FLOAT&&(X=t.RGBA32F),I===t.HALF_FLOAT&&(X=t.RGBA16F),I===t.UNSIGNED_BYTE&&(X=be===tt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(R,y){let I;return R?y===null||y===ri||y===Na?I=t.DEPTH24_STENCIL8:y===Zn?I=t.DEPTH32F_STENCIL8:y===Pa&&(I=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ri||y===Na?I=t.DEPTH_COMPONENT24:y===Zn?I=t.DEPTH_COMPONENT32F:y===Pa&&(I=t.DEPTH_COMPONENT16),I}function T(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ot&&R.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),P(y),y.isVideoTexture&&u.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),w(y)}function P(R){const y=i.get(R);if(y.__webglInit===void 0)return;const I=R.source,Z=h.get(I);if(Z){const J=Z[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(R),Object.keys(Z).length===0&&h.delete(I)}i.remove(R)}function M(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const I=R.source,Z=h.get(I);delete Z[y.__cacheKey],a.memory.textures--}function w(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let J=0;J<y.__webglFramebuffer[Z].length;J++)t.deleteFramebuffer(y.__webglFramebuffer[Z][J]);else t.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)t.deleteFramebuffer(y.__webglFramebuffer[Z]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=R.textures;for(let Z=0,J=I.length;Z<J;Z++){const X=i.get(I[Z]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(I[Z])}i.remove(R)}let N=0;function k(){N=0}function F(){const R=N;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function z(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function $(R,y){const I=i.get(R);if(R.isVideoTexture&&Ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const Z=R.image;if(Z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{K(I,R,y);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+y)}function j(R,y){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){K(I,R,y);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+y)}function V(R,y){const I=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){K(I,R,y);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+y)}function O(R,y){const I=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){ee(I,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+y)}const Y={[id]:t.REPEAT,[vi]:t.CLAMP_TO_EDGE,[rd]:t.MIRRORED_REPEAT},q={[Ot]:t.NEAREST,[I1]:t.NEAREST_MIPMAP_NEAREST,[co]:t.NEAREST_MIPMAP_LINEAR,[jt]:t.LINEAR,[xc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},te={[k1]:t.NEVER,[G1]:t.ALWAYS,[B1]:t.LESS,[Wf]:t.LEQUAL,[z1]:t.EQUAL,[jf]:t.GEQUAL,[V1]:t.GREATER,[H1]:t.NOTEQUAL};function Se(R,y){if(y.type===Zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===xc||y.magFilter===co||y.magFilter===Sr||y.minFilter===jt||y.minFilter===xc||y.minFilter===co||y.minFilter===Sr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Y[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Y[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Y[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ot||y.minFilter!==co&&y.minFilter!==Sr||y.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ne(R,y){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const Z=y.source;let J=h.get(Z);J===void 0&&(J={},h.set(Z,J));const X=z(y);if(X!==R.__cacheKey){J[X]===void 0&&(J[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),J[X].usedTimes++;const be=J[R.__cacheKey];be!==void 0&&(J[R.__cacheKey].usedTimes--,be.usedTimes===0&&M(y)),R.__cacheKey=X,R.__webglTexture=J[X].texture}return I}function Ge(R,y,I){return Math.floor(Math.floor(R/I)/y)}function Ke(R,y,I,Z){const X=R.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,I,Z,y.data);else{X.sort((re,ce)=>re.start-ce.start);let be=0;for(let re=1;re<X.length;re++){const ce=X[be],ye=X[re],Te=ce.start+ce.count,le=Ge(ye.start,y.width,4),Be=Ge(ce.start,y.width,4);ye.start<=Te+1&&le===Be&&Ge(ye.start+ye.count-1,y.width,4)===le?ce.count=Math.max(ce.count,ye.start+ye.count-ce.start):(++be,X[be]=ye)}X.length=be+1;const oe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Le=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let re=0,ce=X.length;re<ce;re++){const ye=X[re],Te=Math.floor(ye.start/4),le=Math.ceil(ye.count/4),Be=Te%y.width,D=Math.floor(Te/y.width),pe=le,se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Be,D,pe,se,I,Z,y.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Le)}}function K(R,y,I){let Z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=t.TEXTURE_3D);const J=Ne(R,y),X=y.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+I);const be=i.get(X);if(X.version!==be.__version||J===!0){n.activeTexture(t.TEXTURE0+I);const oe=je.getPrimaries(je.workingColorSpace),Ee=y.colorSpace===Vi?null:je.getPrimaries(y.colorSpace),Le=y.colorSpace===Vi||oe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let re=x(y.image,!1,r.maxTextureSize);re=lt(y,re);const ce=s.convert(y.format,y.colorSpace),ye=s.convert(y.type);let Te=_(y.internalFormat,ce,ye,y.colorSpace,y.isVideoTexture);Se(Z,y);let le;const Be=y.mipmaps,D=y.isVideoTexture!==!0,pe=be.__version===void 0||J===!0,se=X.dataReady,me=T(y,re);if(y.isDepthTexture)Te=S(y.format===Mr,y.type),pe&&(D?n.texStorage2D(t.TEXTURE_2D,1,Te,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,ce,ye,null));else if(y.isDataTexture)if(Be.length>0){D&&pe&&n.texStorage2D(t.TEXTURE_2D,me,Te,Be[0].width,Be[0].height);for(let ne=0,Q=Be.length;ne<Q;ne++)le=Be[ne],D?se&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,le.width,le.height,ce,ye,le.data):n.texImage2D(t.TEXTURE_2D,ne,Te,le.width,le.height,0,ce,ye,le.data);y.generateMipmaps=!1}else D?(pe&&n.texStorage2D(t.TEXTURE_2D,me,Te,re.width,re.height),se&&Ke(y,re,ce,ye)):n.texImage2D(t.TEXTURE_2D,0,Te,re.width,re.height,0,ce,ye,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Te,Be[0].width,Be[0].height,re.depth);for(let ne=0,Q=Be.length;ne<Q;ne++)if(le=Be[ne],y.format!==Bn)if(ce!==null)if(D){if(se)if(y.layerUpdates.size>0){const ae=Op(le.width,le.height,y.format,y.type);for(const De of y.layerUpdates){const ct=le.data.subarray(De*ae/le.data.BYTES_PER_ELEMENT,(De+1)*ae/le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,De,le.width,le.height,1,ce,ct)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,re.depth,ce,le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Te,le.width,le.height,re.depth,0,le.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,re.depth,ce,ye,le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Te,le.width,le.height,re.depth,0,ce,ye,le.data)}else{D&&pe&&n.texStorage2D(t.TEXTURE_2D,me,Te,Be[0].width,Be[0].height);for(let ne=0,Q=Be.length;ne<Q;ne++)le=Be[ne],y.format!==Bn?ce!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,le.width,le.height,ce,le.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Te,le.width,le.height,0,le.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,le.width,le.height,ce,ye,le.data):n.texImage2D(t.TEXTURE_2D,ne,Te,le.width,le.height,0,ce,ye,le.data)}else if(y.isDataArrayTexture)if(D){if(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Te,re.width,re.height,re.depth),se)if(y.layerUpdates.size>0){const ne=Op(re.width,re.height,y.format,y.type);for(const Q of y.layerUpdates){const ae=re.data.subarray(Q*ne/re.data.BYTES_PER_ELEMENT,(Q+1)*ne/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ce,ye,ae)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ce,ye,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,re.width,re.height,re.depth,0,ce,ye,re.data);else if(y.isData3DTexture)D?(pe&&n.texStorage3D(t.TEXTURE_3D,me,Te,re.width,re.height,re.depth),se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ce,ye,re.data)):n.texImage3D(t.TEXTURE_3D,0,Te,re.width,re.height,re.depth,0,ce,ye,re.data);else if(y.isFramebufferTexture){if(pe)if(D)n.texStorage2D(t.TEXTURE_2D,me,Te,re.width,re.height);else{let ne=re.width,Q=re.height;for(let ae=0;ae<me;ae++)n.texImage2D(t.TEXTURE_2D,ae,Te,ne,Q,0,ce,ye,null),ne>>=1,Q>>=1}}else if(Be.length>0){if(D&&pe){const ne=we(Be[0]);n.texStorage2D(t.TEXTURE_2D,me,Te,ne.width,ne.height)}for(let ne=0,Q=Be.length;ne<Q;ne++)le=Be[ne],D?se&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ce,ye,le):n.texImage2D(t.TEXTURE_2D,ne,Te,ce,ye,le);y.generateMipmaps=!1}else if(D){if(pe){const ne=we(re);n.texStorage2D(t.TEXTURE_2D,me,Te,ne.width,ne.height)}se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,ye,re)}else n.texImage2D(t.TEXTURE_2D,0,Te,ce,ye,re);g(y)&&d(Z),be.__version=X.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ee(R,y,I){if(y.image.length!==6)return;const Z=Ne(R,y),J=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+I);const X=i.get(J);if(J.version!==X.__version||Z===!0){n.activeTexture(t.TEXTURE0+I);const be=je.getPrimaries(je.workingColorSpace),oe=y.colorSpace===Vi?null:je.getPrimaries(y.colorSpace),Ee=y.colorSpace===Vi||be===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!Le&&!re?ce[Q]=x(y.image[Q],!0,r.maxCubemapSize):ce[Q]=re?y.image[Q].image:y.image[Q],ce[Q]=lt(y,ce[Q]);const ye=ce[0],Te=s.convert(y.format,y.colorSpace),le=s.convert(y.type),Be=_(y.internalFormat,Te,le,y.colorSpace),D=y.isVideoTexture!==!0,pe=X.__version===void 0||Z===!0,se=J.dataReady;let me=T(y,ye);Se(t.TEXTURE_CUBE_MAP,y);let ne;if(Le){D&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Be,ye.width,ye.height);for(let Q=0;Q<6;Q++){ne=ce[Q].mipmaps;for(let ae=0;ae<ne.length;ae++){const De=ne[ae];y.format!==Bn?Te!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,0,0,De.width,De.height,Te,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,Be,De.width,De.height,0,De.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,0,0,De.width,De.height,Te,le,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae,Be,De.width,De.height,0,Te,le,De.data)}}}else{if(ne=y.mipmaps,D&&pe){ne.length>0&&me++;const Q=we(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Be,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,Te,le,ce[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,ce[Q].width,ce[Q].height,0,Te,le,ce[Q].data);for(let ae=0;ae<ne.length;ae++){const ct=ne[ae].image[Q].image;D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,0,0,ct.width,ct.height,Te,le,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,Be,ct.width,ct.height,0,Te,le,ct.data)}}else{D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te,le,ce[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Be,Te,le,ce[Q]);for(let ae=0;ae<ne.length;ae++){const De=ne[ae];D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,0,0,Te,le,De.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae+1,Be,Te,le,De.image[Q])}}}g(y)&&d(t.TEXTURE_CUBE_MAP),X.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xe(R,y,I,Z,J,X){const be=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),Ee=_(I.internalFormat,be,oe,I.colorSpace),Le=i.get(y),re=i.get(I);if(re.__renderTarget=y,!Le.__hasExternalTextures){const ce=Math.max(1,y.width>>X),ye=Math.max(1,y.height>>X);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,X,Ee,ce,ye,y.depth,0,be,oe,null):n.texImage2D(J,X,Ee,ce,ye,0,be,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,J,re.__webglTexture,0,L(y)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,J,re.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(R,y,I){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,X=S(y.stencilBuffer,J),be=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(y),X,y.width,y.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(y),X,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,X,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,R)}else{const Z=y.textures;for(let J=0;J<Z.length;J++){const X=Z[J],be=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),Ee=_(X.internalFormat,be,oe,X.colorSpace);wt(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(y),Ee,y.width,y.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(y),Ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(R,y,I){const Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Se(t.TEXTURE_CUBE_MAP,y.depthTexture);const Le=s.convert(y.depthTexture.format),re=s.convert(y.depthTexture.type);let ce;y.depthTexture.format===Ai?ce=t.DEPTH_COMPONENT24:y.depthTexture.format===Mr&&(ce=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,y.width,y.height,0,Le,re,null)}}else $(y.depthTexture,0);const X=J.__webglTexture,be=L(y),oe=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Ee=y.depthTexture.format===Mr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ai)wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ee,oe,X,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,Ee,oe,X,0);else if(y.depthTexture.format===Mr)wt(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ee,oe,X,0,be):t.framebufferTexture2D(t.FRAMEBUFFER,Ee,oe,X,0);else throw new Error("Unknown depthTexture format")}function $e(R){const y=i.get(R),I=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(I)for(let Z=0;Z<6;Z++)Me(y.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Me(y.__webglFramebuffer[0],R,0):Me(y.__webglFramebuffer,R,0)}else if(I){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ue(y.__webglDepthbuffer[Z],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,X)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ue(y.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Lt(R,y,I){const Z=i.get(R);y!==void 0&&xe(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&$e(R)}function We(R){const y=R.texture,I=i.get(R),Z=i.get(y);R.addEventListener("dispose",A);const J=R.textures,X=R.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=y.version,a.memory.textures++),X){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)I.__webglFramebuffer[oe][Ee]=t.createFramebuffer()}else I.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)I.__webglFramebuffer[oe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(be)for(let oe=0,Ee=J.length;oe<Ee;oe++){const Le=i.get(J[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&wt(R)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Ee=J[oe];I.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const Le=s.convert(Ee.format,Ee.colorSpace),re=s.convert(Ee.type),ce=_(Ee.internalFormat,Le,re,Ee.colorSpace,R.isXRRenderTarget===!0),ye=L(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(I.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),Se(t.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)xe(I.__webglFramebuffer[oe][Ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else xe(I.__webglFramebuffer[oe],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let oe=0,Ee=J.length;oe<Ee;oe++){const Le=J[oe],re=i.get(Le);let ce=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,re.__webglTexture),Se(ce,Le),xe(I.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+oe,ce,0),g(Le)&&d(ce)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Z.__webglTexture),Se(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)xe(I.__webglFramebuffer[Ee],R,y,t.COLOR_ATTACHMENT0,oe,Ee);else xe(I.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,oe,0);g(y)&&d(oe),n.unbindTexture()}R.depthBuffer&&$e(R)}function Qe(R){const y=R.textures;for(let I=0,Z=y.length;I<Z;I++){const J=y[I];if(g(J)){const X=v(R),be=i.get(J).__webglTexture;n.bindTexture(X,be),d(X),n.unbindTexture()}}}const at=[],ke=[];function Et(R){if(R.samples>0){if(wt(R)===!1){const y=R.textures,I=R.width,Z=R.height;let J=t.COLOR_BUFFER_BIT;const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(R),oe=y.length>1;if(oe)for(let Le=0;Le<y.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Le=0;Le<y.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Le]);const re=i.get(y[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,I,Z,0,0,I,Z,J,t.NEAREST),l===!0&&(at.length=0,ke.length=0,at.push(t.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(X),ke.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ke)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Le=0;Le<y.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,be.__webglColorRenderbuffer[Le]);const re=i.get(y[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ze(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function lt(R,y){const I=R.colorSpace,Z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==As&&I!==Vi&&(je.getTransfer(I)===tt?(Z!==Bn||J!==bn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",I)),y}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fw(t,e){function n(i,r=Vi){let s;const a=je.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$g)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===jg)return t.BYTE;if(i===Xg)return t.SHORT;if(i===Pa)return t.UNSIGNED_SHORT;if(i===kf)return t.INT;if(i===ri)return t.UNSIGNED_INT;if(i===Zn)return t.FLOAT;if(i===bi)return t.HALF_FLOAT;if(i===qg)return t.ALPHA;if(i===Kg)return t.RGB;if(i===Bn)return t.RGBA;if(i===Ai)return t.DEPTH_COMPONENT;if(i===Mr)return t.DEPTH_STENCIL;if(i===Zg)return t.RED;if(i===Vf)return t.RED_INTEGER;if(i===bs)return t.RG;if(i===Hf)return t.RG_INTEGER;if(i===Gf)return t.RGBA_INTEGER;if(i===Wo||i===jo||i===Xo||i===$o)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sd||i===ad||i===od||i===ld)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ld)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cd||i===ud||i===dd||i===fd||i===hd||i===pd||i===md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cd||i===ud)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===fd)return s.COMPRESSED_R11_EAC;if(i===hd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pd)return s.COMPRESSED_RG11_EAC;if(i===md)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gd||i===vd||i===xd||i===_d||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===bd||i===Ad||i===Cd||i===Rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_d)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Md)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ed)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Td)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ad)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pd||i===Nd||i===Ld)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pd)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ld)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dd||i===Id||i===Ud||i===Fd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Id)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
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

}`;class mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new dv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wn({vertexShader:hw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gw extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new mw,d={},v=n.getContextAttributes();let _=null,S=null;const T=[],C=[],A=new rt;let P=null;const M=new kn;M.viewport=new Mt;const w=new kn;w.viewport=new Mt;const N=[M,w],k=new by;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=T[K];return ee===void 0&&(ee=new Vc,T[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=T[K];return ee===void 0&&(ee=new Vc,T[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=T[K];return ee===void 0&&(ee=new Vc,T[K]=ee),ee.getHandSpace()};function $(K){const ee=C.indexOf(K.inputSource);if(ee===-1)return;const xe=T[ee];xe!==void 0&&(xe.update(K.inputSource,K.frame,c||a),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",V);for(let K=0;K<T.length;K++){const ee=C[K];ee!==null&&(C[K]=null,T[K].disconnect(ee))}F=null,z=null,g.reset();for(const K in d)delete d[K];e.setRenderTarget(_),p=null,h=null,f=null,r=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",j),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,Me=null;v.depth&&(Me=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=v.stencil?Mr:Ai,Ue=v.stencil?Na:ri);const $e={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new ni(h.textureWidth,h.textureHeight,{format:Bn,type:bn,depthTexture:new Da(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ni(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(K){for(let ee=0;ee<K.removed.length;ee++){const xe=K.removed[ee],Ue=C.indexOf(xe);Ue>=0&&(C[Ue]=null,T[Ue].disconnect(xe))}for(let ee=0;ee<K.added.length;ee++){const xe=K.added[ee];let Ue=C.indexOf(xe);if(Ue===-1){for(let $e=0;$e<T.length;$e++)if($e>=C.length){C.push(xe),Ue=$e;break}else if(C[$e]===null){C[$e]=xe,Ue=$e;break}if(Ue===-1)break}const Me=T[Ue];Me&&Me.connect(xe)}}const O=new G,Y=new G;function q(K,ee,xe){O.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(xe.matrixWorld);const Ue=O.distanceTo(Y),Me=ee.projectionMatrix.elements,$e=xe.projectionMatrix.elements,Lt=Me[14]/(Me[10]-1),We=Me[14]/(Me[10]+1),Qe=(Me[9]+1)/Me[5],at=(Me[9]-1)/Me[5],ke=(Me[8]-1)/Me[0],Et=($e[8]+1)/$e[0],L=Lt*ke,wt=Lt*Et,Ze=Ue/(-ke+Et),lt=Ze*-ke;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(Ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const we=Lt+Ze,R=We+Ze,y=L-lt,I=wt+(Ue-lt),Z=Qe*We/R*we,J=at*We/R*we;K.projectionMatrix.makePerspective(y,I,Z,J,we,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function te(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ee=K.near,xe=K.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),k.near=w.near=M.near=ee,k.far=w.far=M.far=xe,(F!==k.near||z!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,z=k.far),k.layers.mask=K.layers.mask|6,M.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const Ue=K.parent,Me=k.cameras;te(k,Ue);for(let $e=0;$e<Me.length;$e++)te(Me[$e],Ue);Me.length===2?q(k,M,w):k.projectionMatrix.copy(M.projectionMatrix),Se(K,k,Ue)};function Se(K,ee,xe){xe===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Od*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(K){return d[K]};let Ne=null;function Ge(K,ee){if(u=ee.getViewerPose(c||a),m=ee,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ue=!1;xe.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let We=0;We<xe.length;We++){const Qe=xe[We];let at=null;if(p!==null)at=p.getViewport(Qe);else{const Et=f.getViewSubImage(h,Qe);at=Et.viewport,We===0&&(e.setRenderTargetTextures(S,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(S))}let ke=N[We];ke===void 0&&(ke=new kn,ke.layers.enable(We),ke.viewport=new Mt,N[We]=ke),ke.matrix.fromArray(Qe.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Qe.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(at.x,at.y,at.width,at.height),We===0&&(k.matrix.copy(ke.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(ke)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const We=f.getDepthInformation(xe[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<xe.length;We++){const Qe=xe[We].camera;if(Qe){let at=d[Qe];at||(at=new dv,d[Qe]=at);const ke=f.getCameraImage(Qe);at.sourceTexture=ke}}}}for(let xe=0;xe<T.length;xe++){const Ue=C[xe],Me=T[xe];Ue!==null&&Me!==void 0&&Me.update(Ue,ee,c||a)}Ne&&Ne(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Ke=new fv;Ke.setAnimationLoop(Ge),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}}const fr=new Nr,vw=new At;function xw(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,av(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),m(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,_):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===cn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===cn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,S=v.envMapRotation;_&&(g.envMap.value=_,fr.copy(S),fr.x*=-1,fr.y*=-1,fr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.envMapRotation.value.setFromMatrix4(vw.makeRotationFromEuler(fr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=_*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _w(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(m(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",g));const T=_.program;i.updateUBOMapping(v,T);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function u(v){const _=f();v.__bindingPointIndex=_;const S=t.createBuffer(),T=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,A=S.length;C<A;C++){const P=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,w=P.length;M<w;M++){const N=P[M];if(p(N,C,M,T)===!0){const k=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let z=0;for(let $=0;$<F.length;$++){const j=F[$],V=x(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,k+z,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,z),z+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,T){const C=v.value,A=_+"_"+S;if(T[A]===void 0)return typeof C=="number"||typeof C=="boolean"?T[A]=C:T[A]=C.clone(),!0;{const P=T[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return T[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function m(v){const _=v.uniforms;let S=0;const T=16;for(let A=0,P=_.length;A<P;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,N=M.length;w<N;w++){const k=M[w],F=Array.isArray(k.value)?k.value:[k.value];for(let z=0,$=F.length;z<$;z++){const j=F[z],V=x(j),O=S%T,Y=O%V.boundary,q=O+Y;S+=Y,q!==0&&T-q<V.storage&&(S+=T-q),k.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=V.storage}}}const C=S%T;return C>0&&(S+=T-C),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const yw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function Sw(){return $n===null&&($n=new xy(yw,16,16,bs,bi),$n.name="DFG_LUT",$n.minFilter=jt,$n.magFilter=jt,$n.wrapS=vi,$n.wrapT=vi,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class Mw{constructor(e={}){const{canvas:n=W1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const x=p,g=new Set([Gf,Hf,Vf]),d=new Set([bn,ri,Pa,Na,Bf,zf]),v=new Uint32Array(4),_=new Int32Array(4);let S=null,T=null;const C=[],A=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=En;let N=0,k=0,F=null,z=-1,$=null;const j=new Mt,V=new Mt;let O=null;const Y=new nt(0);let q=0,te=n.width,Se=n.height,Ne=1,Ge=null,Ke=null;const K=new Mt(0,0,te,Se),ee=new Mt(0,0,te,Se);let xe=!1;const Ue=new uv;let Me=!1,$e=!1;const Lt=new At,We=new G,Qe=new Mt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Et(){return F===null?Ne:1}let L=i;function wt(b,U){return n.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",Je,!1),L===null){const U="webgl2";if(L=wt(U,b),L===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw qe("WebGLRenderer: "+b.message),b}let Ze,lt,we,R,y,I,Z,J,X,be,oe,Ee,Le,re,ce,ye,Te,le,Be,D,pe,se,me,ne;function Q(){Ze=new SE(L),Ze.init(),se=new fw(L,Ze),lt=new fE(L,Ze,e,se),we=new uw(L,Ze),lt.reversedDepthBuffer&&h&&we.buffers.depth.setReversed(!0),R=new wE(L),y=new q2,I=new dw(L,Ze,we,y,lt,se,R),Z=new pE(M),J=new yE(M),X=new Cy(L),me=new uE(L,X),be=new ME(L,X,R,me),oe=new bE(L,be,X,R),Be=new TE(L,lt,I),ye=new hE(y),Ee=new Y2(M,Z,J,Ze,lt,me,ye),Le=new xw(M,y),re=new Z2,ce=new iw(Ze),le=new cE(M,Z,J,we,oe,m,l),Te=new lw(M,oe,lt),ne=new _w(L,R,lt,we),D=new dE(L,Ze,R),pe=new EE(L,Ze,R),R.programs=Ee.programs,M.capabilities=lt,M.extensions=Ze,M.properties=y,M.renderLists=re,M.shadowMap=Te,M.state=we,M.info=R}Q(),x!==bn&&(P=new CE(x,n.width,n.height,r,s));const ae=new gw(M,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(b){b!==void 0&&(Ne=b,this.setSize(te,Se,!1))},this.getSize=function(b){return b.set(te,Se)},this.setSize=function(b,U,W=!0){if(ae.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,Se=U,n.width=Math.floor(b*Ne),n.height=Math.floor(U*Ne),W===!0&&(n.style.width=b+"px",n.style.height=U+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(te*Ne,Se*Ne).floor()},this.setDrawingBufferSize=function(b,U,W){te=b,Se=U,Ne=W,n.width=Math.floor(b*W),n.height=Math.floor(U*W),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,U,W,H){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,U,W,H),we.viewport(j.copy(K).multiplyScalar(Ne).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,U,W,H){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,U,W,H),we.scissor(V.copy(ee).multiplyScalar(Ne).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(b){we.setScissorTest(xe=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){Ke=b},this.getClearColor=function(b){return b.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,W=!0){let H=0;if(b){let B=!1;if(F!==null){const ue=F.texture.format;B=g.has(ue)}if(B){const ue=F.texture.type,ge=d.has(ue),he=le.getClearColor(),_e=le.getClearAlpha(),Ae=he.r,Pe=he.g,Ce=he.b;ge?(v[0]=Ae,v[1]=Pe,v[2]=Ce,v[3]=_e,L.clearBufferuiv(L.COLOR,0,v)):(_[0]=Ae,_[1]=Pe,_[2]=Ce,_[3]=_e,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Je,!1),le.dispose(),re.dispose(),ce.dispose(),y.dispose(),Z.dispose(),J.dispose(),oe.dispose(),me.dispose(),ne.dispose(),Ee.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Kf),ae.removeEventListener("sessionend",Zf),sr.stop()};function De(b){b.preventDefault(),yp("WebGLRenderer: Context Lost."),w=!0}function ct(){yp("WebGLRenderer: Context Restored."),w=!1;const b=R.autoReset,U=Te.enabled,W=Te.autoUpdate,H=Te.needsUpdate,B=Te.type;Q(),R.autoReset=b,Te.enabled=U,Te.autoUpdate=W,Te.needsUpdate=H,Te.type=B}function Je(b){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function jn(b){const U=b.target;U.removeEventListener("dispose",jn),ai(U)}function ai(b){Sv(b),y.remove(b)}function Sv(b){const U=y.get(b).programs;U!==void 0&&(U.forEach(function(W){Ee.releaseProgram(W)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,W,H,B,ue){U===null&&(U=at);const ge=B.isMesh&&B.matrixWorld.determinant()<0,he=Ev(b,U,W,H,B);we.setMaterial(H,ge);let _e=W.index,Ae=1;if(H.wireframe===!0){if(_e=be.getWireframeAttribute(W),_e===void 0)return;Ae=2}const Pe=W.drawRange,Ce=W.attributes.position;let ze=Pe.start*Ae,st=(Pe.start+Pe.count)*Ae;ue!==null&&(ze=Math.max(ze,ue.start*Ae),st=Math.min(st,(ue.start+ue.count)*Ae)),_e!==null?(ze=Math.max(ze,0),st=Math.min(st,_e.count)):Ce!=null&&(ze=Math.max(ze,0),st=Math.min(st,Ce.count));const xt=st-ze;if(xt<0||xt===1/0)return;me.setup(B,H,he,W,_e);let _t,ot=D;if(_e!==null&&(_t=X.get(_e),ot=pe,ot.setIndex(_t)),B.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*Et()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(B.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),we.setLineWidth(Re*Et()),B.isLineSegments?ot.setMode(L.LINES):B.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else B.isPoints?ot.setMode(L.POINTS):B.isSprite&&ot.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)La("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ot.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,et=B._multiDrawCounts,Ye=B._multiDrawCount,un=_e?X.get(_e).bytesPerElement:1,Ir=y.get(H).currentProgram.getUniforms();for(let dn=0;dn<Ye;dn++)Ir.setValue(L,"_gl_DrawID",dn),ot.render(Re[dn]/un,et[dn])}else if(B.isInstancedMesh)ot.renderInstances(ze,xt,B.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,et=Math.min(W.instanceCount,Re);ot.renderInstances(ze,xt,et)}else ot.render(ze,xt)};function qf(b,U,W){b.transparent===!0&&b.side===pi&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,ja(b,U,W),b.side=tr,b.needsUpdate=!0,ja(b,U,W),b.side=pi):ja(b,U,W)}this.compile=function(b,U,W=null){W===null&&(W=b),T=ce.get(W),T.init(U),A.push(T),W.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),b!==W&&b.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const H=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const he=ue[ge];qf(he,W,B),H.add(he)}else qf(ue,W,B),H.add(ue)}),T=A.pop(),H},this.compileAsync=function(b,U,W=null){const H=this.compile(b,U,W);return new Promise(B=>{function ue(){if(H.forEach(function(ge){y.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){B(b);return}setTimeout(ue,10)}Ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Gl=null;function Mv(b){Gl&&Gl(b)}function Kf(){sr.stop()}function Zf(){sr.start()}const sr=new fv;sr.setAnimationLoop(Mv),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(b){Gl=b,ae.setAnimationLoop(b),b===null?sr.stop():sr.start()},ae.addEventListener("sessionstart",Kf),ae.addEventListener("sessionend",Zf),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const W=ae.enabled===!0&&ae.isPresenting===!0,H=P!==null&&(F===null||W)&&P.begin(M,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,U,F),T=ce.get(b,A.length),T.init(U),A.push(T),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(Lt,Qn,U.reversedDepth),$e=this.localClippingEnabled,Me=ye.init(this.clippingPlanes,$e),S=re.get(b,C.length),S.init(),C.push(S),ae.enabled===!0&&ae.isPresenting===!0){const ge=M.xr.getDepthSensingMesh();ge!==null&&Wl(ge,U,-1/0,M.sortObjects)}Wl(b,U,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(Ge,Ke),ke=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ke&&le.addToRenderList(S,b),this.info.render.frame++,Me===!0&&ye.beginShadows();const B=T.state.shadowsArray;if(Te.render(B,b,U),Me===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&P.hasRenderPass())===!1){const ge=S.opaque,he=S.transmissive;if(T.setupLights(),U.isArrayCamera){const _e=U.cameras;if(he.length>0)for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++){const Ce=_e[Ae];Jf(ge,he,b,Ce)}ke&&le.render(b);for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++){const Ce=_e[Ae];Qf(S,b,Ce,Ce.viewport)}}else he.length>0&&Jf(ge,he,b,U),ke&&le.render(b),Qf(S,b,U)}F!==null&&k===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),H&&P.end(M),b.isScene===!0&&b.onAfterRender(M,b,U),me.resetDefaultState(),z=-1,$=null,A.pop(),A.length>0?(T=A[A.length-1],Me===!0&&ye.setGlobalState(M.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function Wl(b,U,W,H){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){H&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const ge=oe.update(b),he=b.material;he.visible&&S.push(b,ge,he,W,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const ge=oe.update(b),he=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Qe.copy(ge.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(he)){const _e=ge.groups;for(let Ae=0,Pe=_e.length;Ae<Pe;Ae++){const Ce=_e[Ae],ze=he[Ce.materialIndex];ze&&ze.visible&&S.push(b,ge,ze,W,Qe.z,Ce)}}else he.visible&&S.push(b,ge,he,W,Qe.z,null)}}const ue=b.children;for(let ge=0,he=ue.length;ge<he;ge++)Wl(ue[ge],U,W,H)}function Qf(b,U,W,H){const{opaque:B,transmissive:ue,transparent:ge}=b;T.setupLightsView(W),Me===!0&&ye.setGlobalState(M.clippingPlanes,W),H&&we.viewport(j.copy(H)),B.length>0&&Wa(B,U,W),ue.length>0&&Wa(ue,U,W),ge.length>0&&Wa(ge,U,W),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Jf(b,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const ze=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new ni(1,1,{generateMipmaps:!0,type:ze?bi:bn,minFilter:Sr,samples:lt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ue=T.state.transmissionRenderTarget[H.id],ge=H.viewport||j;ue.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);const he=M.getRenderTarget(),_e=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(ue),M.getClearColor(Y),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),ke&&le.render(W);const Pe=M.toneMapping;M.toneMapping=ti;const Ce=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Me===!0&&ye.setGlobalState(M.clippingPlanes,H),Wa(b,W,H),I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let st=0,xt=U.length;st<xt;st++){const _t=U[st],{object:ot,geometry:Re,material:et,group:Ye}=_t;if(et.side===pi&&ot.layers.test(H.layers)){const un=et.side;et.side=cn,et.needsUpdate=!0,eh(ot,W,H,Re,et,Ye),et.side=un,et.needsUpdate=!0,ze=!0}}ze===!0&&(I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue))}M.setRenderTarget(he,_e,Ae),M.setClearColor(Y,q),Ce!==void 0&&(H.viewport=Ce),M.toneMapping=Pe}function Wa(b,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ue=b.length;B<ue;B++){const ge=b[B],{object:he,geometry:_e,group:Ae}=ge;let Pe=ge.material;Pe.allowOverride===!0&&H!==null&&(Pe=H),he.layers.test(W.layers)&&eh(he,U,W,_e,Pe,Ae)}}function eh(b,U,W,H,B,ue){b.onBeforeRender(M,U,W,H,B,ue),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(M,U,W,H,b,ue),B.transparent===!0&&B.side===pi&&B.forceSinglePass===!1?(B.side=cn,B.needsUpdate=!0,M.renderBufferDirect(W,U,H,B,b,ue),B.side=tr,B.needsUpdate=!0,M.renderBufferDirect(W,U,H,B,b,ue),B.side=pi):M.renderBufferDirect(W,U,H,B,b,ue),b.onAfterRender(M,U,W,H,B,ue)}function ja(b,U,W){U.isScene!==!0&&(U=at);const H=y.get(b),B=T.state.lights,ue=T.state.shadowsArray,ge=B.state.version,he=Ee.getParameters(b,B.state,ue,U,W),_e=Ee.getProgramCacheKey(he);let Ae=H.programs;H.environment=b.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(b.isMeshStandardMaterial?J:Z).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",jn),Ae=new Map,H.programs=Ae);let Pe=Ae.get(_e);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===ge)return nh(b,he),Pe}else he.uniforms=Ee.getUniforms(b),b.onBeforeCompile(he,M),Pe=Ee.acquireProgram(he,_e),Ae.set(_e,Pe),H.uniforms=he.uniforms;const Ce=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),nh(b,he),H.needsLights=Tv(b),H.lightsStateVersion=ge,H.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function th(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Yo.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function nh(b,U){const W=y.get(b);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Ev(b,U,W,H,B){U.isScene!==!0&&(U=at),I.resetTextureUnits();const ue=U.fog,ge=H.isMeshStandardMaterial?U.environment:null,he=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:As,_e=(H.isMeshStandardMaterial?J:Z).get(H.envMap||ge),Ae=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!W.morphAttributes.position,ze=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let xt=ti;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=M.toneMapping);const _t=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=_t!==void 0?_t.length:0,Re=y.get(H),et=T.state.lights;if(Me===!0&&($e===!0||b!==$)){const $t=b===$&&H.id===z;ye.setState(H,b,$t)}let Ye=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==et.state.version||Re.outputColorSpace!==he||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==_e||H.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ye.numPlanes||Re.numIntersection!==ye.numIntersection)||Re.vertexAlphas!==Ae||Re.vertexTangents!==Pe||Re.morphTargets!==Ce||Re.morphNormals!==ze||Re.morphColors!==st||Re.toneMapping!==xt||Re.morphTargetsCount!==ot)&&(Ye=!0):(Ye=!0,Re.__version=H.version);let un=Re.currentProgram;Ye===!0&&(un=ja(H,U,B));let Ir=!1,dn=!1,Is=!1;const ut=un.getUniforms(),en=Re.uniforms;if(we.useProgram(un.program)&&(Ir=!0,dn=!0,Is=!0),H.id!==z&&(z=H.id,dn=!0),Ir||$!==b){we.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(L,"projectionMatrix",b.projectionMatrix),ut.setValue(L,"viewMatrix",b.matrixWorldInverse);const tn=ut.map.cameraPosition;tn!==void 0&&tn.setValue(L,We.setFromMatrixPosition(b.matrixWorld)),lt.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,dn=!0,Is=!0)}if(Re.needsLights&&(et.state.directionalShadowMap.length>0&&ut.setValue(L,"directionalShadowMap",et.state.directionalShadowMap,I),et.state.spotShadowMap.length>0&&ut.setValue(L,"spotShadowMap",et.state.spotShadowMap,I),et.state.pointShadowMap.length>0&&ut.setValue(L,"pointShadowMap",et.state.pointShadowMap,I)),B.isSkinnedMesh){ut.setOptional(L,B,"bindMatrix"),ut.setOptional(L,B,"bindMatrixInverse");const $t=B.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ut.setValue(L,"boneTexture",$t.boneTexture,I))}B.isBatchedMesh&&(ut.setOptional(L,B,"batchingTexture"),ut.setValue(L,"batchingTexture",B._matricesTexture,I),ut.setOptional(L,B,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",B._indirectTexture,I),ut.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",B._colorsTexture,I));const Sn=W.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Be.update(B,W,un),(dn||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,ut.setValue(L,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(en.envMap.value=_e,en.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Sw()),dn&&(ut.setValue(L,"toneMappingExposure",M.toneMappingExposure),Re.needsLights&&wv(en,Is),ue&&H.fog===!0&&Le.refreshFogUniforms(en,ue),Le.refreshMaterialUniforms(en,H,Ne,Se,T.state.transmissionRenderTarget[b.id]),Yo.upload(L,th(Re),en,I)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yo.upload(L,th(Re),en,I),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(L,"center",B.center),ut.setValue(L,"modelViewMatrix",B.modelViewMatrix),ut.setValue(L,"normalMatrix",B.normalMatrix),ut.setValue(L,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $t=H.uniformsGroups;for(let tn=0,jl=$t.length;tn<jl;tn++){const ar=$t[tn];ne.update(ar,un),ne.bind(ar,un)}}return un}function wv(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Tv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,U,W){const H=y.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=U,y.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const W=y.get(b);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const bv=L.createFramebuffer();this.setRenderTarget=function(b,U=0,W=0){F=b,N=U,k=W;let H=null,B=!1,ue=!1;if(b){const he=y.get(b);if(he.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),j.copy(b.viewport),V.copy(b.scissor),O=b.scissorTest,we.viewport(j),we.scissor(V),we.setScissorTest(O),z=-1;return}else if(he.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(he.__hasExternalTextures)I.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Pe=b.depthTexture;if(he.__boundDepthTexture!==Pe){if(Pe!==null&&y.has(Pe)&&(b.width!==Pe.image.width||b.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const _e=b.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);const Ae=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?H=Ae[U][W]:H=Ae[U],B=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?H=y.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[W]:H=Ae,j.copy(b.viewport),V.copy(b.scissor),O=b.scissorTest}else j.copy(K).multiplyScalar(Ne).floor(),V.copy(ee).multiplyScalar(Ne).floor(),O=xe;if(W!==0&&(H=bv),we.bindFramebuffer(L.FRAMEBUFFER,H)&&we.drawBuffers(b,H),we.viewport(j),we.scissor(V),we.setScissorTest(O),B){const he=y.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,W)}else if(ue){const he=U;for(let _e=0;_e<b.textures.length;_e++){const Ae=y.get(b.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,Ae.__webglTexture,W,he)}}else if(b!==null&&W!==0){const he=y.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(b,U,W,H,B,ue,ge,he=0){if(!(b&&b.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){we.bindFramebuffer(L.FRAMEBUFFER,_e);try{const Ae=b.textures[he],Pe=Ae.format,Ce=Ae.type;if(!lt.textureFormatReadable(Pe)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ce)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-H&&W>=0&&W<=b.height-B&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),L.readPixels(U,W,H,B,se.convert(Pe),se.convert(Ce),ue))}finally{const Ae=F!==null?y.get(F).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,U,W,H,B,ue,ge,he=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e)if(U>=0&&U<=b.width-H&&W>=0&&W<=b.height-B){we.bindFramebuffer(L.FRAMEBUFFER,_e);const Ae=b.textures[he],Pe=Ae.format,Ce=Ae.type;if(!lt.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ze),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),L.readPixels(U,W,H,B,se.convert(Pe),se.convert(Ce),0);const st=F!==null?y.get(F).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,st);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await j1(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.deleteBuffer(ze),L.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,W=0){const H=Math.pow(2,-W),B=Math.floor(b.image.width*H),ue=Math.floor(b.image.height*H),ge=U!==null?U.x:0,he=U!==null?U.y:0;I.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,ge,he,B,ue),we.unbindTexture()};const Av=L.createFramebuffer(),Cv=L.createFramebuffer();this.copyTextureToTexture=function(b,U,W=null,H=null,B=0,ue=null){ue===null&&(B!==0?(La("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let ge,he,_e,Ae,Pe,Ce,ze,st,xt;const _t=b.isCompressedTexture?b.mipmaps[ue]:b.image;if(W!==null)ge=W.max.x-W.min.x,he=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Pe=W.min.y,Ce=W.isBox3?W.min.z:0;else{const Sn=Math.pow(2,-B);ge=Math.floor(_t.width*Sn),he=Math.floor(_t.height*Sn),b.isDataArrayTexture?_e=_t.depth:b.isData3DTexture?_e=Math.floor(_t.depth*Sn):_e=1,Ae=0,Pe=0,Ce=0}H!==null?(ze=H.x,st=H.y,xt=H.z):(ze=0,st=0,xt=0);const ot=se.convert(U.format),Re=se.convert(U.type);let et;U.isData3DTexture?(I.setTexture3D(U,0),et=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),et=L.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),et=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ye=L.getParameter(L.UNPACK_ROW_LENGTH),un=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ir=L.getParameter(L.UNPACK_SKIP_PIXELS),dn=L.getParameter(L.UNPACK_SKIP_ROWS),Is=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ae),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce);const ut=b.isDataArrayTexture||b.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Sn=y.get(b),$t=y.get(U),tn=y.get(Sn.__renderTarget),jl=y.get($t.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,tn.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,jl.__webglFramebuffer);for(let ar=0;ar<_e;ar++)ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(b).__webglTexture,B,Ce+ar),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(U).__webglTexture,ue,xt+ar)),L.blitFramebuffer(Ae,Pe,ge,he,ze,st,ge,he,L.DEPTH_BUFFER_BIT,L.NEAREST);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||y.has(b)){const Sn=y.get(b),$t=y.get(U);we.bindFramebuffer(L.READ_FRAMEBUFFER,Av),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cv);for(let tn=0;tn<_e;tn++)ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Sn.__webglTexture,B,Ce+tn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Sn.__webglTexture,B),en?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$t.__webglTexture,ue,xt+tn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$t.__webglTexture,ue),B!==0?L.blitFramebuffer(Ae,Pe,ge,he,ze,st,ge,he,L.COLOR_BUFFER_BIT,L.NEAREST):en?L.copyTexSubImage3D(et,ue,ze,st,xt+tn,Ae,Pe,ge,he):L.copyTexSubImage2D(et,ue,ze,st,Ae,Pe,ge,he);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else en?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(et,ue,ze,st,xt,ge,he,_e,ot,Re,_t.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(et,ue,ze,st,xt,ge,he,_e,ot,_t.data):L.texSubImage3D(et,ue,ze,st,xt,ge,he,_e,ot,Re,_t):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,ze,st,ge,he,ot,Re,_t.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,ze,st,_t.width,_t.height,ot,_t.data):L.texSubImage2D(L.TEXTURE_2D,ue,ze,st,ge,he,ot,Re,_t);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,un),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ir),L.pixelStorei(L.UNPACK_SKIP_ROWS,dn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Is),ue===0&&U.generateMipmaps&&L.generateMipmap(et),we.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){N=0,k=0,F=null,we.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}const Ew=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,ww=`
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;

// Precomputed constants
#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

// Optimized hash - inline multiplication
#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

// Precomputed camera basis vectors (normalized vec3(1,1,1), vec3(1,0,-1))
const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);

// Precomputed branch direction
const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  // Precompute reciprocals to avoid division
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  // Precompute time-based values
  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  // Precompute ray reciprocal for strides
  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  // Precompute for intersection test
  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      
      // Optimized flake position calculation
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        // Avoid branching with step functions where possible
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;function Tw({color:t="#ffffff",flakeSize:e=.01,minFlakeSize:n=1.25,pixelResolution:i=200,speed:r=1.25,depthFade:s=8,farPlane:a=20,brightness:o=1,gamma:l=.4545,density:c=.3,variant:u="square",direction:f=125,className:h="",style:p={}}){const m=fe.useRef(null),x=fe.useRef(0),g=fe.useRef(!0),d=fe.useRef(null),v=fe.useRef(null),_=fe.useRef(null),S=fe.useMemo(()=>u==="round"?1:u==="snowflake"?2:0,[u]),T=fe.useMemo(()=>{const A=new nt(t);return new G(A.r,A.g,A.b)},[t]),C=fe.useCallback(()=>{_.current&&clearTimeout(_.current),_.current=window.setTimeout(()=>{const A=m.current,P=d.current,M=v.current;if(!A||!P||!M)return;const w=A.offsetWidth,N=A.offsetHeight;P.setSize(w,N),M.uniforms.uResolution.value.set(w,N)},100)},[]);return fe.useEffect(()=>{const A=m.current;if(!A)return;const P=new IntersectionObserver(([M])=>{g.current=M.isIntersecting},{threshold:0});return P.observe(A),()=>P.disconnect()},[]),fe.useEffect(()=>{const A=m.current;if(!A)return;const P=new vy,M=new Yf(-1,1,1,-1,0,1),w=new Mw({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(A.offsetWidth,A.offsetHeight),w.setClearColor(0,0),A.appendChild(w.domElement),d.current=w;const N=new Wn({vertexShader:Ew,fragmentShader:ww,uniforms:{uTime:{value:0},uResolution:{value:new rt(A.offsetWidth,A.offsetHeight)},uFlakeSize:{value:e},uMinFlakeSize:{value:n},uPixelResolution:{value:i},uSpeed:{value:r},uDepthFade:{value:s},uFarPlane:{value:a},uColor:{value:T.clone()},uBrightness:{value:o},uGamma:{value:l},uDensity:{value:c},uVariant:{value:S},uDirection:{value:f*Math.PI/180}},transparent:!0});v.current=N;const k=new Ga(2,2);P.add(new si(k,N)),window.addEventListener("resize",C);const F=performance.now(),z=()=>{x.current=requestAnimationFrame(z),g.current&&(N.uniforms.uTime.value=(performance.now()-F)*.001,w.render(P,M))};return z(),()=>{cancelAnimationFrame(x.current),window.removeEventListener("resize",C),_.current&&clearTimeout(_.current),A.contains(w.domElement)&&A.removeChild(w.domElement),w.dispose(),k.dispose(),N.dispose(),d.current=null,v.current=null}},[C]),fe.useEffect(()=>{const A=v.current;A&&(A.uniforms.uFlakeSize.value=e,A.uniforms.uMinFlakeSize.value=n,A.uniforms.uPixelResolution.value=i,A.uniforms.uSpeed.value=r,A.uniforms.uDepthFade.value=s,A.uniforms.uFarPlane.value=a,A.uniforms.uBrightness.value=o,A.uniforms.uGamma.value=l,A.uniforms.uDensity.value=c,A.uniforms.uVariant.value=S,A.uniforms.uDirection.value=f*Math.PI/180,A.uniforms.uColor.value.copy(T))},[e,n,i,r,s,a,o,l,c,S,f,T]),E.jsx("div",{ref:m,className:`pixel-snow-container ${h}`,style:p})}const bw=()=>{const[t,e]=fe.useState(!1),[n,i]=fe.useState(null),[r,s]=fe.useState(!1),[a,o]=fe.useState(0),l=fe.useRef(null),c=[{title:"Assistant Team Lead",organization:"Hyundai Quezon Avenue",impact:"Led technical infrastructure and team coordination",badge:"Leadership Role",image:"/tlassist.jpg",images:["/tlassist.jpg","/tlassist2.jpg","/tlassist3.jpg"],status:"Completed",duration:"6 months",team:"IT Support Team",description:"🏆 Diagnosed and resolved Wi-Fi, LAN, and basic hardware connectivity issues. Led a team of junior developers in implementing IT solutions and managed technical support operations.",keyFeatures:["Network troubleshooting and maintenance","Team coordination and leadership","Hardware diagnostics and repair","Technical documentation","User support and training"],techStack:["Windows Server","Networking","Hardware Diagnostics","Team Management"]},{title:"Public Relations Officer",organization:"Junior Philippine Computer Society",impact:"Designed visual content reaching 500+ students",badge:"Community Leadership",image:"/pros.jpg",images:["/pros.jpg","/jpcs.jpg","/jpcs2.jpg"],status:"Active",duration:"1 year",team:"JPCS Executive Board",description:"🎨 Designed promotional posters and visual content for Facebook and Instagram pages. Created engaging designs that increased student engagement by 40%.",keyFeatures:["Social media content creation","Event promotion materials","Brand identity development","Community engagement strategies","Digital marketing campaigns"],techStack:["Figma","Adobe Photoshop","Canva","Social Media Marketing"]},{title:"IT Quiz Bee - 1st Place",organization:"School Level Competition",impact:"Demonstrated technical excellence and problem-solving",badge:"Award-Winning Achievement",image:"/quizbee.jpg",images:["/quizbee.jpg"],status:"Completed",duration:"1 day",team:"Individual Competition",description:"🏅 First Place for demonstrating strong problem-solving and IT knowledge. Competed against 12+ participants and achieved a perfect score in the final round.",keyFeatures:["Advanced IT knowledge demonstration","Problem-solving under pressure","Quick decision-making","Comprehensive technical understanding","Competitive excellence"],techStack:["Programming","Networking","Database Management","Systems Analysis"]},{title:"Capstone Project Leader",organization:"WasteWise Platform",impact:"Built full-stack platform for sustainable commerce",badge:"Award-Winning Project",image:"/capslead.jpg",images:["/capslead.jpg","/lead.jpg"],status:"In Progress",duration:"8 months",team:"Development Team of 5",description:"Led the design and development of a full-stack web platform supporting recycled and upcycled products, helping promote sustainable practices within local communities.</div>",keyFeatures:["E-commerce platform for recycled products","User authentication and authorization","Product listing and search functionality","Real-time chat between buyers and sellers","Admin dashboard with analytics"],techStack:["PHP","MySQL","HTML","CSS","JavaScript","REST API"],sourceCode:"https://github.com/yourusername/wastewise",liveProject:"https://wastewise-demo.vercel.app"}];fe.useEffect(()=>{const m=new IntersectionObserver(([x])=>{x.isIntersecting&&e(!0)},{threshold:.2});return l.current&&m.observe(l.current),()=>{l.current&&m.unobserve(l.current)}},[]);const u=m=>{i(m),o(0),s(!0),document.body.style.overflow="hidden"},f=()=>{s(!1),i(null),o(0),document.body.style.overflow="auto"},h=m=>{m.stopPropagation(),n&&n.images&&o(x=>x===n.images.length-1?0:x+1)},p=m=>{m.stopPropagation(),n&&n.images&&o(x=>x===0?n.images.length-1:x-1)};return E.jsxs("section",{id:"leadership",ref:l,className:"py-24 md:py-32 px-6 bg-black relative overflow-hidden",children:[E.jsx(Tw,{color:"#10b981",flakeSize:.015,minFlakeSize:1.5,pixelResolution:150,speed:.8,depthFade:10,farPlane:25,brightness:.6,gamma:.5,density:.2,variant:"snowflake",direction:125,className:"absolute inset-0 z-0 opacity-30"}),E.jsxs("div",{className:"max-w-7xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-20",children:[E.jsx("span",{className:"inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4",children:"Impact & Recognition"}),E.jsx("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent",children:"Leadership & Achievements"}),E.jsx("p",{className:"text-neutral-400 text-lg max-w-2xl mx-auto",children:"Committed to making a difference through technology and community engagement"})]}),E.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",children:c.map((m,x)=>E.jsxs("div",{onClick:()=>u(m),className:`group relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,style:{transitionDelay:`${x*150}ms`},children:[E.jsx("div",{className:"absolute inset-0 bg-neutral-900",children:E.jsx("img",{src:m.image,alt:m.title,className:"w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",onError:g=>{g.target.parentElement.innerHTML='<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950"><svg class="w-20 h-20 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>'}})}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"}),E.jsx("div",{className:"absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-emerald-500/50 transition-all duration-500"}),E.jsx("div",{className:"absolute inset-0 p-8 flex flex-col justify-end",children:E.jsxs("div",{className:"transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",children:[E.jsx("div",{className:"mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100",children:E.jsx("span",{className:"inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider",children:m.badge})}),E.jsxs("div",{className:"flex items-start justify-between gap-4 mb-3",children:[E.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white leading-tight flex-1",children:m.title}),E.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex-shrink-0",children:E.jsxs("div",{className:"inline-flex items-center gap-2 text-emerald-400 text-sm font-medium whitespace-nowrap",children:[E.jsx("span",{children:"View Details"}),E.jsx("svg",{className:"w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})})]}),E.jsx("p",{className:"text-neutral-300 text-sm md:text-base leading-relaxed max-w-md opacity-90",children:m.impact})]})}),E.jsxs("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",children:[E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent"}),E.jsx("div",{className:"absolute inset-0 shadow-2xl shadow-emerald-500/20"})]})]},x))}),E.jsx("div",{className:"mt-20 text-center",children:E.jsxs("div",{className:`inline-flex flex-wrap items-center justify-center gap-12 md:gap-16 px-8 md:px-12 py-8 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-700 ${t?"opacity-100 scale-100":"opacity-0 scale-95"}`,style:{transitionDelay:"600ms"},children:[E.jsxs("div",{className:"text-center",children:[E.jsx("div",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2",children:"5+"}),E.jsx("div",{className:"text-sm text-neutral-400 font-medium",children:"Leadership Roles"})]}),E.jsx("div",{className:"hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"}),E.jsxs("div",{className:"text-center",children:[E.jsx("div",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2",children:"10+"}),E.jsx("div",{className:"text-sm text-neutral-400 font-medium",children:"Team Task Handled "})]}),E.jsx("div",{className:"hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"}),E.jsxs("div",{className:"text-center",children:[E.jsx("div",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-br from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2",children:"1"}),E.jsx("div",{className:"text-sm text-neutral-400 font-medium",children:"Awards Won"})]})]})})]}),r&&n&&E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl",onClick:f,children:E.jsxs("div",{className:"relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/50 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl",onClick:m=>m.stopPropagation(),children:[E.jsx("button",{onClick:f,className:"absolute top-6 right-6 z-20 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200",children:E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),E.jsxs("div",{className:"overflow-y-auto max-h-[90vh]",children:[E.jsxs("div",{className:"relative w-full bg-neutral-900 group",children:[E.jsx("img",{src:n.images[a],alt:`${n.title} ${a+1}`,className:"w-full h-auto max-h-96 object-contain transition-opacity duration-300",onError:m=>{m.target.style.display="none"}}),E.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"}),E.jsx("div",{className:"absolute top-6 left-6",children:E.jsx("span",{className:"inline-block px-4 py-2 bg-blue-500/90 backdrop-blur-sm text-white text-sm font-bold rounded-xl shadow-lg",children:n.badge})}),n.images&&n.images.length>1&&E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:p,className:"absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100",children:E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),E.jsx("button",{onClick:h,className:"absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100",children:E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),E.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full",children:[a+1," / ",n.images.length]}),E.jsx("div",{className:"absolute bottom-4 right-6 flex gap-2",children:n.images.map((m,x)=>E.jsx("button",{onClick:g=>{g.stopPropagation(),o(x)},className:`w-2 h-2 rounded-full transition-all duration-300 ${x===a?"bg-emerald-400 w-6":"bg-white/50 hover:bg-white/80"}`},x))})]})]}),E.jsxs("div",{className:"p-8 md:p-10",children:[E.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-2",children:n.title}),E.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-8 mt-6",children:[E.jsxs("div",{className:"bg-slate-800/50 rounded-xl p-4 border border-slate-700/50",children:[E.jsx("div",{className:"text-xs text-neutral-400 mb-1",children:"Status"}),E.jsx("div",{className:`text-sm font-bold ${n.status==="Completed"?"text-green-400":n.status==="Active"?"text-blue-400":"text-yellow-400"}`,children:n.status})]}),E.jsxs("div",{className:"bg-slate-800/50 rounded-xl p-4 border border-slate-700/50",children:[E.jsx("div",{className:"text-xs text-neutral-400 mb-1",children:"Duration"}),E.jsx("div",{className:"text-sm font-bold text-white",children:n.duration})]}),E.jsxs("div",{className:"bg-slate-800/50 rounded-xl p-4 border border-slate-700/50",children:[E.jsx("div",{className:"text-xs text-neutral-400 mb-1",children:"Team"}),E.jsx("div",{className:"text-sm font-bold text-white truncate",children:n.team})]})]}),E.jsxs("div",{className:"mb-8",children:[E.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Description"}),E.jsx("p",{className:"text-neutral-300 leading-relaxed",children:n.description})]}),E.jsxs("div",{className:"mb-8",children:[E.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Key Features"}),E.jsx("ul",{className:"space-y-2",children:n.keyFeatures.map((m,x)=>E.jsxs("li",{className:"flex items-start gap-3 text-neutral-300",children:[E.jsx("span",{className:"flex-shrink-0 w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"}),E.jsx("span",{children:m})]},x))})]}),E.jsxs("div",{className:"mb-8",children:[E.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Tech Stack"}),E.jsx("div",{className:"flex flex-wrap gap-2",children:n.techStack.map((m,x)=>E.jsx("span",{className:"px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg",children:m},x))})]}),(n.sourceCode||n.liveProject)&&E.jsxs("div",{className:"flex flex-wrap gap-4",children:[n.sourceCode&&E.jsx("a",{href:n.sourceCode,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors duration-200",children:"View Source Code"}),n.liveProject&&E.jsx("a",{href:n.liveProject,target:"_blank",rel:"noopener noreferrer",className:"px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200",children:"View Project"})]})]})]})]})})]})};function fa(t){let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)}function zd(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Aw(t,e,n,i){return t[0]=e,t[1]=n,t[2]=i,t}function om(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t}function lm(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t}function Cw(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t}function Rw(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t}function qc(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t}function Pw(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return Math.sqrt(n*n+i*i+r*r)}function Nw(t,e){let n=e[0]-t[0],i=e[1]-t[1],r=e[2]-t[2];return n*n+i*i+r*r}function cm(t){let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i}function Lw(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Dw(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function Vd(t,e){let n=e[0],i=e[1],r=e[2],s=n*n+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function vv(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function um(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2];return t[0]=r*l-s*o,t[1]=s*a-i*l,t[2]=i*o-r*a,t}function Iw(t,e,n,i){let r=e[0],s=e[1],a=e[2];return t[0]=r+i*(n[0]-r),t[1]=s+i*(n[1]-s),t[2]=a+i*(n[2]-a),t}function Uw(t,e,n,i,r){const s=Math.exp(-i*r);let a=e[0],o=e[1],l=e[2];return t[0]=n[0]+(a-n[0])*s,t[1]=n[1]+(o-n[1])*s,t[2]=n[2]+(l-n[2])*s,t}function Fw(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s+n[12])/a,t[1]=(n[1]*i+n[5]*r+n[9]*s+n[13])/a,t[2]=(n[2]*i+n[6]*r+n[10]*s+n[14])/a,t}function Ow(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[3]*i+n[7]*r+n[11]*s+n[15];return a=a||1,t[0]=(n[0]*i+n[4]*r+n[8]*s)/a,t[1]=(n[1]*i+n[5]*r+n[9]*s)/a,t[2]=(n[2]*i+n[6]*r+n[10]*s)/a,t}function kw(t,e,n){let i=e[0],r=e[1],s=e[2];return t[0]=i*n[0]+r*n[3]+s*n[6],t[1]=i*n[1]+r*n[4]+s*n[7],t[2]=i*n[2]+r*n[5]+s*n[8],t}function Bw(t,e,n){let i=e[0],r=e[1],s=e[2],a=n[0],o=n[1],l=n[2],c=n[3],u=o*s-l*r,f=l*i-a*s,h=a*r-o*i,p=o*h-l*f,m=l*u-a*h,x=a*f-o*u,g=c*2;return u*=g,f*=g,h*=g,p*=2,m*=2,x*=2,t[0]=i+u+p,t[1]=r+f+m,t[2]=s+h+x,t}const zw=function(){const t=[0,0,0],e=[0,0,0];return function(n,i){zd(t,n),zd(e,i),Vd(t,t),Vd(e,e);let r=vv(t,e);return r>1?0:r<-1?Math.PI:Math.acos(r)}}();function Vw(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class zn extends Array{constructor(e=0,n=e,i=e){return super(e,n,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,n=e,i=e){return e.length?this.copy(e):(Aw(this,e,n,i),this)}copy(e){return zd(this,e),this}add(e,n){return n?om(this,e,n):om(this,this,e),this}sub(e,n){return n?lm(this,e,n):lm(this,this,e),this}multiply(e){return e.length?Cw(this,this,e):qc(this,this,e),this}divide(e){return e.length?Rw(this,this,e):qc(this,this,1/e),this}inverse(e=this){return Dw(this,e),this}len(){return fa(this)}distance(e){return e?Pw(this,e):fa(this)}squaredLen(){return cm(this)}squaredDistance(e){return e?Nw(this,e):cm(this)}negate(e=this){return Lw(this,e),this}cross(e,n){return n?um(this,e,n):um(this,this,e),this}scale(e){return qc(this,this,e),this}normalize(){return Vd(this,this),this}dot(e){return vv(this,e)}equals(e){return Vw(this,e)}applyMatrix3(e){return kw(this,this,e),this}applyMatrix4(e){return Fw(this,this,e),this}scaleRotateMatrix4(e){return Ow(this,this,e),this}applyQuaternion(e){return Bw(this,this,e),this}angle(e){return zw(this,e)}lerp(e,n){return Iw(this,this,e,n),this}smoothLerp(e,n,i){return Uw(this,this,e,n,i),this}clone(){return new zn(this[0],this[1],this[2])}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}transformDirection(e){const n=this[0],i=this[1],r=this[2];return this[0]=e[0]*n+e[4]*i+e[8]*r,this[1]=e[1]*n+e[5]*i+e[9]*r,this[2]=e[2]*n+e[6]*i+e[10]*r,this.normalize()}}const dm=new zn;let Hw=1,Gw=1,fm=!1;class Ww{constructor(e,n={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=n,this.id=Hw++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in n)this.addAttribute(i,n[i])}addAttribute(e,n){if(this.attributes[e]=n,n.id=Gw++,n.size=n.size||1,n.type=n.type||(n.data.constructor===Float32Array?this.gl.FLOAT:n.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),n.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,n.normalized=n.normalized||!1,n.stride=n.stride||0,n.offset=n.offset||0,n.count=n.count||(n.stride?n.data.byteLength/n.stride:n.data.length/n.size),n.divisor=n.instanced||0,n.needsUpdate=!1,n.usage=n.usage||this.gl.STATIC_DRAW,n.buffer||this.updateAttribute(n),n.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==n.count*n.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,n.count*n.divisor);this.instancedCount=n.count*n.divisor}else e==="index"?this.drawRange.count=n.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,n.count))}updateAttribute(e){const n=!e.buffer;n&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),n?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((n,{name:i,type:r})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;r===35674&&(a=2),r===35675&&(a=3),r===35676&&(a=4);const o=s.size/a,l=a===1?0:a*a*4,c=a===1?0:a*4;for(let u=0;u<a;u++)this.gl.vertexAttribPointer(n+u,o,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(n+u),this.gl.renderer.vertexAttribDivisor(n+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:n=this.gl.TRIANGLES}){var r;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((s,{name:a})=>{const o=this.attributes[a];o.needsUpdate&&this.updateAttribute(o)});let i=2;((r=this.attributes.index)==null?void 0:r.type)===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(n,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(n,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(n,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!fm)return console.warn("No position buffer data found to compute bounds"),fm=!0}computeBoundingBox(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||(this.bounds={min:new zn,max:new zn,center:new zn,scale:new zn,radius:1/0});const r=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;r.set(1/0),s.set(-1/0);for(let l=0,c=n.length;l<c;l+=i){const u=n[l],f=n[l+1],h=n[l+2];r.x=Math.min(u,r.x),r.y=Math.min(f,r.y),r.z=Math.min(h,r.z),s.x=Math.max(u,s.x),s.y=Math.max(f,s.y),s.z=Math.max(h,s.z)}o.sub(s,r),a.add(r,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const n=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let r=0;for(let s=0,a=n.length;s<a;s+=i)dm.fromArray(n,s),r=Math.max(r,this.bounds.center.squaredDistance(dm));this.bounds.radius=Math.sqrt(r)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let jw=1;const hm={};class Xw{constructor(e,{vertex:n,fragment:i,uniforms:r={},transparent:s=!1,cullFace:a=e.BACK,frontFace:o=e.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=r,this.id=jw++,n||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:n,fragment:i})}setShaders({vertex:e,fragment:n}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${pm(e)}`)),n&&(this.gl.shaderSource(this.fragmentShader,n),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${pm(n)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let o=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(o,this.gl.getUniformLocation(this.program,o.name));const l=o.name.match(/(\w+)/g);o.uniformName=l[0],o.nameComponents=l.slice(1)}this.attributeLocations=new Map;const r=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=this.gl.getActiveAttrib(this.program,a),l=this.gl.getAttribLocation(this.program,o.name);l!==-1&&(r[l]=o.name,this.attributeLocations.set(o,l))}this.attributeOrder=r.join("")}setBlendFunc(e,n,i,r){this.blendFunc.src=e,this.blendFunc.dst=n,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=r,e&&(this.transparent=!0)}setBlendEquation(e,n){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=n}setStencilFunc(e,n,i){this.stencilRef=n,this.stencilFunc.func=e,this.stencilFunc.ref=n,this.stencilFunc.mask=i}setStencilOp(e,n,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=n,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let n=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((r,s)=>{let a=this.uniforms[s.uniformName];for(const o of s.nameComponents){if(!a)break;if(o in a)a=a[o];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return mm(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return mm(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return n=n+1,a.value.update(n),Kc(this.gl,s.type,r,n);if(a.value.length&&a.value[0].texture){const o=[];return a.value.forEach(l=>{n=n+1,l.update(n),o.push(n)}),Kc(this.gl,s.type,r,o)}Kc(this.gl,s.type,r,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Kc(t,e,n,i){i=i.length?$w(i):i;const r=t.renderer.state.uniformLocations.get(n);if(i.length)if(r===void 0||r.length!==i.length)t.renderer.state.uniformLocations.set(n,i.slice(0));else{if(Yw(r,i))return;r.set?r.set(i):qw(r,i),t.renderer.state.uniformLocations.set(n,r)}else{if(r===i)return;t.renderer.state.uniformLocations.set(n,i)}switch(e){case 5126:return i.length?t.uniform1fv(n,i):t.uniform1f(n,i);case 35664:return t.uniform2fv(n,i);case 35665:return t.uniform3fv(n,i);case 35666:return t.uniform4fv(n,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(n,i):t.uniform1i(n,i);case 35671:case 35667:return t.uniform2iv(n,i);case 35672:case 35668:return t.uniform3iv(n,i);case 35673:case 35669:return t.uniform4iv(n,i);case 35674:return t.uniformMatrix2fv(n,!1,i);case 35675:return t.uniformMatrix3fv(n,!1,i);case 35676:return t.uniformMatrix4fv(n,!1,i)}}function pm(t){let e=t.split(`
`);for(let n=0;n<e.length;n++)e[n]=n+1+": "+e[n];return e.join(`
`)}function $w(t){const e=t.length,n=t[0].length;if(n===void 0)return t;const i=e*n;let r=hm[i];r||(hm[i]=r=new Float32Array(i));for(let s=0;s<e;s++)r.set(t[s],s*n);return r}function Yw(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qw(t,e){for(let n=0,i=t.length;n<i;n++)t[n]=e[n]}let Zc=0;function mm(t){Zc>100||(console.warn(t),Zc++,Zc>100&&console.warn("More than 100 program warnings - stopping logs."))}const Qc=new zn;let Kw=1;class Zw{constructor({canvas:e=document.createElement("canvas"),width:n=300,height:i=150,dpr:r=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:f="default",autoClear:h=!0,webgl:p=2}={}){const m={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f};this.dpr=r,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=h,this.id=Kw++,p===2&&(this.gl=e.getContext("webgl2",m)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",m)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(n,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,n){this.width=e,this.height=n,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=n*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:n+"px"})}setViewport(e,n,i=0,r=0){this.state.viewport.width===e&&this.state.viewport.height===n||(this.state.viewport.width=e,this.state.viewport.height=n,this.state.viewport.x=i,this.state.viewport.y=r,this.gl.viewport(i,r,e,n))}setScissor(e,n,i=0,r=0){this.gl.scissor(i,r,e,n)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,n,i,r){this.state.blendFunc.src===e&&this.state.blendFunc.dst===n&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===r||(this.state.blendFunc.src=e,this.state.blendFunc.dst=n,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=r,i!==void 0?this.gl.blendFuncSeparate(e,n,i,r):this.gl.blendFunc(e,n))}setBlendEquation(e,n){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===n)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=n,n!==void 0?this.gl.blendEquationSeparate(e,n):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,n,i){this.state.stencilFunc===e&&this.state.stencilRef===n&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=n||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,n||0,i||0))}setStencilOp(e,n,i){this.state.stencilFail===e&&this.state.stencilDepthFail===n&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=n,this.state.stencilDepthPass=i,this.gl.stencilOp(e,n,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:n=null}={}){this.state.framebuffer!==n&&(this.state.framebuffer=n,this.gl.bindFramebuffer(e,n))}getExtension(e,n,i){return n&&this.gl[n]?this.gl[n].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),n?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:e.zDepth!==n.zDepth?e.zDepth-n.zDepth:n.id-e.id}sortTransparent(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.zDepth!==n.zDepth?n.zDepth-e.zDepth:n.id-e.id}sortUI(e,n){return e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.program.id!==n.program.id?e.program.id-n.program.id:n.id-e.id}getRenderList({scene:e,camera:n,frustumCull:i,sort:r}){let s=[];if(n&&i&&n.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&n&&!n.frustumIntersectsMesh(a)||s.push(a))}),r){const a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!n)&&(c.worldMatrix.getTranslation(Qc),Qc.applyMatrix4(n.projectionViewMatrix),c.zDepth=Qc.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:e,camera:n,target:i=null,update:r=!0,sort:s=!0,frustumCull:a=!0,clear:o}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),r&&e.updateMatrixWorld(),n&&n.updateMatrixWorld(),this.getRenderList({scene:e,camera:n,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:n})})}}function Qw(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Jw(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function eT(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=n*a,t[1]=i*a,t[2]=r*a,t[3]=s*a,t}function tT(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function nT(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function iT(t,e,n){n=n*.5;let i=Math.sin(n);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(n),t}function gm(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=n[0],l=n[1],c=n[2],u=n[3];return t[0]=i*u+a*o+r*c-s*l,t[1]=r*u+a*l+s*o-i*c,t[2]=s*u+a*c+i*l-r*o,t[3]=a*u-i*o-r*l-s*c,t}function rT(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+a*o,t[1]=r*l+s*o,t[2]=s*l-r*o,t[3]=a*l-i*o,t}function sT(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l-s*o,t[1]=r*l+a*o,t[2]=s*l+i*o,t[3]=a*l-r*o,t}function aT(t,e,n){n*=.5;let i=e[0],r=e[1],s=e[2],a=e[3],o=Math.sin(n),l=Math.cos(n);return t[0]=i*l+r*o,t[1]=r*l-i*o,t[2]=s*l+a*o,t[3]=a*l-s*o,t}function oT(t,e,n,i){let r=e[0],s=e[1],a=e[2],o=e[3],l=n[0],c=n[1],u=n[2],f=n[3],h,p,m,x,g;return p=r*l+s*c+a*u+o*f,p<0&&(p=-p,l=-l,c=-c,u=-u,f=-f),1-p>1e-6?(h=Math.acos(p),m=Math.sin(h),x=Math.sin((1-i)*h)/m,g=Math.sin(i*h)/m):(x=1-i,g=i),t[0]=x*r+g*l,t[1]=x*s+g*c,t[2]=x*a+g*u,t[3]=x*o+g*f,t}function lT(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n*n+i*i+r*r+s*s,o=a?1/a:0;return t[0]=-n*o,t[1]=-i*o,t[2]=-r*o,t[3]=s*o,t}function cT(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function uT(t,e){let n=e[0]+e[4]+e[8],i;if(n>0)i=Math.sqrt(n+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);let s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),t[r]=.5*i,i=.5/i,t[3]=(e[s*3+a]-e[a*3+s])*i,t[s]=(e[s*3+r]+e[r*3+s])*i,t[a]=(e[a*3+r]+e[r*3+a])*i}return t}function dT(t,e,n="YXZ"){let i=Math.sin(e[0]*.5),r=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),o=Math.sin(e[2]*.5),l=Math.cos(e[2]*.5);return n==="XYZ"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l-i*s*o):n==="YXZ"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l+i*s*o):n==="ZXY"?(t[0]=i*a*l-r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l-i*s*o):n==="ZYX"?(t[0]=i*a*l-r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l+i*s*o):n==="YZX"?(t[0]=i*a*l+r*s*o,t[1]=r*s*l+i*a*o,t[2]=r*a*o-i*s*l,t[3]=r*a*l-i*s*o):n==="XZY"&&(t[0]=i*a*l-r*s*o,t[1]=r*s*l-i*a*o,t[2]=r*a*o+i*s*l,t[3]=r*a*l+i*s*o),t}const fT=Qw,hT=Jw,pT=tT,mT=eT;class gT extends Array{constructor(e=0,n=0,i=0,r=1){super(e,n,i,r),this.onChange=()=>{},this._target=this;const s=["0","1","2","3"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return nT(this._target),this.onChange(),this}set(e,n,i,r){return e.length?this.copy(e):(hT(this._target,e,n,i,r),this.onChange(),this)}rotateX(e){return rT(this._target,this._target,e),this.onChange(),this}rotateY(e){return sT(this._target,this._target,e),this.onChange(),this}rotateZ(e){return aT(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return lT(this._target,e),this.onChange(),this}conjugate(e=this._target){return cT(this._target,e),this.onChange(),this}copy(e){return fT(this._target,e),this.onChange(),this}normalize(e=this._target){return mT(this._target,e),this.onChange(),this}multiply(e,n){return n?gm(this._target,e,n):gm(this._target,this._target,e),this.onChange(),this}dot(e){return pT(this._target,e)}fromMatrix3(e){return uT(this._target,e),this.onChange(),this}fromEuler(e,n){return dT(this._target,e,e.order),n||this.onChange(),this}fromAxisAngle(e,n){return iT(this._target,e,n),this.onChange(),this}slerp(e,n){return oT(this._target,this._target,e,n),this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this._target[3]=e[n+3],this.onChange(),this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e}}const vT=1e-6;function xT(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function _T(t,e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t[9]=u,t[10]=f,t[11]=h,t[12]=p,t[13]=m,t[14]=x,t[15]=g,t}function yT(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ST(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],v=n*o-i*a,_=n*l-r*a,S=n*c-s*a,T=i*l-r*o,C=i*c-s*o,A=r*c-s*l,P=u*x-f*m,M=u*g-h*m,w=u*d-p*m,N=f*g-h*x,k=f*d-p*x,F=h*d-p*g,z=v*F-_*k+S*N+T*w-C*M+A*P;return z?(z=1/z,t[0]=(o*F-l*k+c*N)*z,t[1]=(r*k-i*F-s*N)*z,t[2]=(x*A-g*C+d*T)*z,t[3]=(h*C-f*A-p*T)*z,t[4]=(l*w-a*F-c*M)*z,t[5]=(n*F-r*w+s*M)*z,t[6]=(g*S-m*A-d*_)*z,t[7]=(u*A-h*S+p*_)*z,t[8]=(a*k-o*w+c*P)*z,t[9]=(i*w-n*k-s*P)*z,t[10]=(m*C-x*S+d*v)*z,t[11]=(f*S-u*C-p*v)*z,t[12]=(o*M-a*N-l*P)*z,t[13]=(n*N-i*M+r*P)*z,t[14]=(x*_-m*T-g*v)*z,t[15]=(u*T-f*_+h*v)*z,t):null}function xv(t){let e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],f=t[10],h=t[11],p=t[12],m=t[13],x=t[14],g=t[15],d=e*a-n*s,v=e*o-i*s,_=e*l-r*s,S=n*o-i*a,T=n*l-r*a,C=i*l-r*o,A=c*m-u*p,P=c*x-f*p,M=c*g-h*p,w=u*x-f*m,N=u*g-h*m,k=f*g-h*x;return d*k-v*N+_*w+S*M-T*P+C*A}function vm(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=e[9],p=e[10],m=e[11],x=e[12],g=e[13],d=e[14],v=e[15],_=n[0],S=n[1],T=n[2],C=n[3];return t[0]=_*i+S*o+T*f+C*x,t[1]=_*r+S*l+T*h+C*g,t[2]=_*s+S*c+T*p+C*d,t[3]=_*a+S*u+T*m+C*v,_=n[4],S=n[5],T=n[6],C=n[7],t[4]=_*i+S*o+T*f+C*x,t[5]=_*r+S*l+T*h+C*g,t[6]=_*s+S*c+T*p+C*d,t[7]=_*a+S*u+T*m+C*v,_=n[8],S=n[9],T=n[10],C=n[11],t[8]=_*i+S*o+T*f+C*x,t[9]=_*r+S*l+T*h+C*g,t[10]=_*s+S*c+T*p+C*d,t[11]=_*a+S*u+T*m+C*v,_=n[12],S=n[13],T=n[14],C=n[15],t[12]=_*i+S*o+T*f+C*x,t[13]=_*r+S*l+T*h+C*g,t[14]=_*s+S*c+T*p+C*d,t[15]=_*a+S*u+T*m+C*v,t}function MT(t,e,n){let i=n[0],r=n[1],s=n[2],a,o,l,c,u,f,h,p,m,x,g,d;return e===t?(t[12]=e[0]*i+e[4]*r+e[8]*s+e[12],t[13]=e[1]*i+e[5]*r+e[9]*s+e[13],t[14]=e[2]*i+e[6]*r+e[10]*s+e[14],t[15]=e[3]*i+e[7]*r+e[11]*s+e[15]):(a=e[0],o=e[1],l=e[2],c=e[3],u=e[4],f=e[5],h=e[6],p=e[7],m=e[8],x=e[9],g=e[10],d=e[11],t[0]=a,t[1]=o,t[2]=l,t[3]=c,t[4]=u,t[5]=f,t[6]=h,t[7]=p,t[8]=m,t[9]=x,t[10]=g,t[11]=d,t[12]=a*i+u*r+m*s+e[12],t[13]=o*i+f*r+x*s+e[13],t[14]=l*i+h*r+g*s+e[14],t[15]=c*i+p*r+d*s+e[15]),t}function ET(t,e,n){let i=n[0],r=n[1],s=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function wT(t,e,n,i){let r=i[0],s=i[1],a=i[2],o=Math.hypot(r,s,a),l,c,u,f,h,p,m,x,g,d,v,_,S,T,C,A,P,M,w,N,k,F,z,$;return Math.abs(o)<vT?null:(o=1/o,r*=o,s*=o,a*=o,l=Math.sin(n),c=Math.cos(n),u=1-c,f=e[0],h=e[1],p=e[2],m=e[3],x=e[4],g=e[5],d=e[6],v=e[7],_=e[8],S=e[9],T=e[10],C=e[11],A=r*r*u+c,P=s*r*u+a*l,M=a*r*u-s*l,w=r*s*u-a*l,N=s*s*u+c,k=a*s*u+r*l,F=r*a*u+s*l,z=s*a*u-r*l,$=a*a*u+c,t[0]=f*A+x*P+_*M,t[1]=h*A+g*P+S*M,t[2]=p*A+d*P+T*M,t[3]=m*A+v*P+C*M,t[4]=f*w+x*N+_*k,t[5]=h*w+g*N+S*k,t[6]=p*w+d*N+T*k,t[7]=m*w+v*N+C*k,t[8]=f*F+x*z+_*$,t[9]=h*F+g*z+S*$,t[10]=p*F+d*z+T*$,t[11]=m*F+v*z+C*$,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function TT(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function _v(t,e){let n=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return t[0]=Math.hypot(n,i,r),t[1]=Math.hypot(s,a,o),t[2]=Math.hypot(l,c,u),t}function bT(t){let e=t[0],n=t[1],i=t[2],r=t[4],s=t[5],a=t[6],o=t[8],l=t[9],c=t[10];const u=e*e+n*n+i*i,f=r*r+s*s+a*a,h=o*o+l*l+c*c;return Math.sqrt(Math.max(u,f,h))}const yv=function(){const t=[1,1,1];return function(e,n){let i=t;_v(i,n);let r=1/i[0],s=1/i[1],a=1/i[2],o=n[0]*r,l=n[1]*s,c=n[2]*a,u=n[4]*r,f=n[5]*s,h=n[6]*a,p=n[8]*r,m=n[9]*s,x=n[10]*a,g=o+f+x,d=0;return g>0?(d=Math.sqrt(g+1)*2,e[3]=.25*d,e[0]=(h-m)/d,e[1]=(p-c)/d,e[2]=(l-u)/d):o>f&&o>x?(d=Math.sqrt(1+o-f-x)*2,e[3]=(h-m)/d,e[0]=.25*d,e[1]=(l+u)/d,e[2]=(p+c)/d):f>x?(d=Math.sqrt(1+f-o-x)*2,e[3]=(p-c)/d,e[0]=(l+u)/d,e[1]=.25*d,e[2]=(h+m)/d):(d=Math.sqrt(1+x-o-f)*2,e[3]=(l-u)/d,e[0]=(p+c)/d,e[1]=(h+m)/d,e[2]=.25*d),e}}();function AT(t,e,n,i){let r=fa([t[0],t[1],t[2]]);const s=fa([t[4],t[5],t[6]]),a=fa([t[8],t[9],t[10]]);xv(t)<0&&(r=-r),n[0]=t[12],n[1]=t[13],n[2]=t[14];const l=t.slice(),c=1/r,u=1/s,f=1/a;l[0]*=c,l[1]*=c,l[2]*=c,l[4]*=u,l[5]*=u,l[6]*=u,l[8]*=f,l[9]*=f,l[10]*=f,yv(e,l),i[0]=r,i[1]=s,i[2]=a}function CT(t,e,n,i){const r=t,s=e[0],a=e[1],o=e[2],l=e[3],c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,m=s*f,x=a*u,g=a*f,d=o*f,v=l*c,_=l*u,S=l*f,T=i[0],C=i[1],A=i[2];return r[0]=(1-(x+d))*T,r[1]=(p+S)*T,r[2]=(m-_)*T,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+d))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(m+_)*A,r[9]=(g-v)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=n[0],r[13]=n[1],r[14]=n[2],r[15]=1,r}function RT(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,l=r+r,c=n*a,u=i*a,f=i*o,h=r*a,p=r*o,m=r*l,x=s*a,g=s*o,d=s*l;return t[0]=1-f-m,t[1]=u+d,t[2]=h-g,t[3]=0,t[4]=u-d,t[5]=1-c-m,t[6]=p+x,t[7]=0,t[8]=h+g,t[9]=p-x,t[10]=1-c-f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function PT(t,e,n,i,r){let s=1/Math.tan(e/2),a=1/(i-r);return t[0]=s/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(r+i)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*r*i*a,t[15]=0,t}function NT(t,e,n,i,r,s,a){let o=1/(e-n),l=1/(i-r),c=1/(s-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+n)*o,t[13]=(r+i)*l,t[14]=(a+s)*c,t[15]=1,t}function LT(t,e,n,i){let r=e[0],s=e[1],a=e[2],o=i[0],l=i[1],c=i[2],u=r-n[0],f=s-n[1],h=a-n[2],p=u*u+f*f+h*h;p===0?h=1:(p=1/Math.sqrt(p),u*=p,f*=p,h*=p);let m=l*h-c*f,x=c*u-o*h,g=o*f-l*u;return p=m*m+x*x+g*g,p===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,m=l*h-c*f,x=c*u-o*h,g=o*f-l*u,p=m*m+x*x+g*g),p=1/Math.sqrt(p),m*=p,x*=p,g*=p,t[0]=m,t[1]=x,t[2]=g,t[3]=0,t[4]=f*g-h*x,t[5]=h*m-u*g,t[6]=u*x-f*m,t[7]=0,t[8]=u,t[9]=f,t[10]=h,t[11]=0,t[12]=r,t[13]=s,t[14]=a,t[15]=1,t}function xm(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t}function _m(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t}function DT(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*n,t[9]=e[9]*n,t[10]=e[10]*n,t[11]=e[11]*n,t[12]=e[12]*n,t[13]=e[13]*n,t[14]=e[14]*n,t[15]=e[15]*n,t}class Ml extends Array{constructor(e=1,n=0,i=0,r=0,s=0,a=1,o=0,l=0,c=0,u=0,f=1,h=0,p=0,m=0,x=0,g=1){return super(e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g){return e.length?this.copy(e):(_T(this,e,n,i,r,s,a,o,l,c,u,f,h,p,m,x,g),this)}translate(e,n=this){return MT(this,n,e),this}rotate(e,n,i=this){return wT(this,i,e,n),this}scale(e,n=this){return ET(this,n,typeof e=="number"?[e,e,e]:e),this}add(e,n){return n?xm(this,e,n):xm(this,this,e),this}sub(e,n){return n?_m(this,e,n):_m(this,this,e),this}multiply(e,n){return e.length?n?vm(this,e,n):vm(this,this,e):DT(this,this,e),this}identity(){return yT(this),this}copy(e){return xT(this,e),this}fromPerspective({fov:e,aspect:n,near:i,far:r}={}){return PT(this,e,n,i,r),this}fromOrthogonal({left:e,right:n,bottom:i,top:r,near:s,far:a}){return NT(this,e,n,i,r,s,a),this}fromQuaternion(e){return RT(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return ST(this,e),this}compose(e,n,i){return CT(this,e,n,i),this}decompose(e,n,i){return AT(this,e,n,i),this}getRotation(e){return yv(e,this),this}getTranslation(e){return TT(e,this),this}getScaling(e){return _v(e,this),this}getMaxScaleOnAxis(){return bT(this)}lookAt(e,n,i){return LT(this,e,n,i),this}determinant(){return xv(this)}fromArray(e,n=0){return this[0]=e[n],this[1]=e[n+1],this[2]=e[n+2],this[3]=e[n+3],this[4]=e[n+4],this[5]=e[n+5],this[6]=e[n+6],this[7]=e[n+7],this[8]=e[n+8],this[9]=e[n+9],this[10]=e[n+10],this[11]=e[n+11],this[12]=e[n+12],this[13]=e[n+13],this[14]=e[n+14],this[15]=e[n+15],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e[n+3]=this[3],e[n+4]=this[4],e[n+5]=this[5],e[n+6]=this[6],e[n+7]=this[7],e[n+8]=this[8],e[n+9]=this[9],e[n+10]=this[10],e[n+11]=this[11],e[n+12]=this[12],e[n+13]=this[13],e[n+14]=this[14],e[n+15]=this[15],e}}function IT(t,e,n="YXZ"){return n==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):n==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):n==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):n==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):n==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):n==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const ym=new Ml;class UT extends Array{constructor(e=0,n=e,i=e,r="YXZ"){super(e,n,i),this.order=r,this.onChange=()=>{},this._target=this;const s=["0","1","2"];return new Proxy(this,{set(a,o){const l=Reflect.set(...arguments);return l&&s.includes(o)&&a.onChange(),l}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,n=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=n,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,n=this.order){return IT(this._target,e,n),this.onChange(),this}fromQuaternion(e,n=this.order,i){return ym.fromQuaternion(e),this._target.fromRotationMatrix(ym,n),i||this.onChange(),this}fromArray(e,n=0){return this._target[0]=e[n],this._target[1]=e[n+1],this._target[2]=e[n+2],this}toArray(e=[],n=0){return e[n]=this[0],e[n+1]=this[1],e[n+2]=this[2],e}}class FT{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ml,this.worldMatrix=new Ml,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new zn,this.quaternion=new gT,this.scale=new zn(1),this.rotation=new UT,this.up=new zn(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,n=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,n&&e&&e.addChild(this,!1)}addChild(e,n=!0){~this.children.indexOf(e)||this.children.push(e),n&&e.setParent(this,!1)}removeChild(e,n=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),n&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let n=0,i=this.children.length;n<i;n++)this.children[n].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let n=0,i=this.children.length;n<i;n++)this.children[n].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,n=!1){n?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function OT(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function kT(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=n+n,o=i+i,l=r+r,c=n*a,u=i*a,f=i*o,h=r*a,p=r*o,m=r*l,x=s*a,g=s*o,d=s*l;return t[0]=1-f-m,t[3]=u-d,t[6]=h+g,t[1]=u+d,t[4]=1-c-m,t[7]=p-x,t[2]=h-g,t[5]=p+x,t[8]=1-c-f,t}function BT(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function zT(t,e,n,i,r,s,a,o,l,c){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t[4]=s,t[5]=a,t[6]=o,t[7]=l,t[8]=c,t}function VT(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function HT(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=-u*s+o*l,p=c*s-a*l,m=n*f+i*h+r*p;return m?(m=1/m,t[0]=f*m,t[1]=(-u*i+r*c)*m,t[2]=(o*i-r*a)*m,t[3]=h*m,t[4]=(u*n-r*l)*m,t[5]=(-o*n+r*s)*m,t[6]=p*m,t[7]=(-c*n+i*l)*m,t[8]=(a*n-i*s)*m,t):null}function Sm(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=n[0],p=n[1],m=n[2],x=n[3],g=n[4],d=n[5],v=n[6],_=n[7],S=n[8];return t[0]=h*i+p*a+m*c,t[1]=h*r+p*o+m*u,t[2]=h*s+p*l+m*f,t[3]=x*i+g*a+d*c,t[4]=x*r+g*o+d*u,t[5]=x*s+g*l+d*f,t[6]=v*i+_*a+S*c,t[7]=v*r+_*o+S*u,t[8]=v*s+_*l+S*f,t}function GT(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=n[0],p=n[1];return t[0]=i,t[1]=r,t[2]=s,t[3]=a,t[4]=o,t[5]=l,t[6]=h*i+p*a+c,t[7]=h*r+p*o+u,t[8]=h*s+p*l+f,t}function WT(t,e,n){let i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],f=e[8],h=Math.sin(n),p=Math.cos(n);return t[0]=p*i+h*a,t[1]=p*r+h*o,t[2]=p*s+h*l,t[3]=p*a-h*i,t[4]=p*o-h*r,t[5]=p*l-h*s,t[6]=c,t[7]=u,t[8]=f,t}function jT(t,e,n){let i=n[0],r=n[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=r*e[3],t[4]=r*e[4],t[5]=r*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function XT(t,e){let n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],v=n*o-i*a,_=n*l-r*a,S=n*c-s*a,T=i*l-r*o,C=i*c-s*o,A=r*c-s*l,P=u*x-f*m,M=u*g-h*m,w=u*d-p*m,N=f*g-h*x,k=f*d-p*x,F=h*d-p*g,z=v*F-_*k+S*N+T*w-C*M+A*P;return z?(z=1/z,t[0]=(o*F-l*k+c*N)*z,t[1]=(l*w-a*F-c*M)*z,t[2]=(a*k-o*w+c*P)*z,t[3]=(r*k-i*F-s*N)*z,t[4]=(n*F-r*w+s*M)*z,t[5]=(i*w-n*k-s*P)*z,t[6]=(x*A-g*C+d*T)*z,t[7]=(g*S-m*A-d*_)*z,t[8]=(m*C-x*S+d*v)*z,t):null}class $T extends Array{constructor(e=1,n=0,i=0,r=0,s=1,a=0,o=0,l=0,c=1){return super(e,n,i,r,s,a,o,l,c),this}set(e,n,i,r,s,a,o,l,c){return e.length?this.copy(e):(zT(this,e,n,i,r,s,a,o,l,c),this)}translate(e,n=this){return GT(this,n,e),this}rotate(e,n=this){return WT(this,n,e),this}scale(e,n=this){return jT(this,n,e),this}multiply(e,n){return n?Sm(this,e,n):Sm(this,this,e),this}identity(){return VT(this),this}copy(e){return BT(this,e),this}fromMatrix4(e){return OT(this,e),this}fromQuaternion(e){return kT(this,e),this}fromBasis(e,n,i){return this.set(e[0],e[1],e[2],n[0],n[1],n[2],i[0],i[1],i[2]),this}inverse(e=this){return HT(this,e),this}getNormalMatrix(e){return XT(this,e),this}}let YT=0;class qT extends FT{constructor(e,{geometry:n,program:i,mode:r=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=YT++,this.geometry=n,this.program=i,this.mode=r,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Ml,this.normalMatrix=new $T,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let n=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:n}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}}class KT extends Ww{constructor(e,{attributes:n={}}={}){Object.assign(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,n)}}const ZT="#ffffff",Mm=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},Em=(t,e,n)=>{switch(t){case"top-left":return{anchor:[0,-.2*n],dir:[0,1]};case"top-right":return{anchor:[e,-.2*n],dir:[0,1]};case"left":return{anchor:[-.2*e,.5*n],dir:[1,0]};case"right":return{anchor:[(1+.2)*e,.5*n],dir:[-1,0]};case"bottom-left":return{anchor:[0,(1+.2)*n],dir:[0,-1]};case"bottom-center":return{anchor:[.5*e,(1+.2)*n],dir:[0,-1]};case"bottom-right":return{anchor:[e,(1+.2)*n],dir:[0,-1]};default:return{anchor:[.5*e,-.2*n],dir:[0,1]}}},QT=({raysOrigin:t="top-center",raysColor:e=ZT,raysSpeed:n=1,lightSpread:i=1,rayLength:r=2,pulsating:s=!1,fadeDistance:a=1,saturation:o=1,followMouse:l=!0,mouseInfluence:c=.1,noiseAmount:u=0,distortion:f=0,className:h=""})=>{const p=fe.useRef(null),m=fe.useRef(null),x=fe.useRef(null),g=fe.useRef({x:.5,y:.5}),d=fe.useRef({x:.5,y:.5}),v=fe.useRef(null),_=fe.useRef(null),S=fe.useRef(null),[T,C]=fe.useState(!1),A=fe.useRef(null);return fe.useEffect(()=>{if(p.current)return A.current=new IntersectionObserver(P=>{const M=P[0];C(M.isIntersecting)},{threshold:.1}),A.current.observe(p.current),()=>{A.current&&(A.current.disconnect(),A.current=null)}},[]),fe.useEffect(()=>!T||!p.current?void 0:(S.current&&(S.current(),S.current=null),(async()=>{if(!p.current||(await new Promise(Y=>setTimeout(Y,10)),!p.current))return;const M=new Zw({dpr:Math.min(window.devicePixelRatio,2),alpha:!0});x.current=M;const w=M.gl;for(w.canvas.style.width="100%",w.canvas.style.height="100%";p.current.firstChild;)p.current.removeChild(p.current.firstChild);p.current.appendChild(w.canvas);const N=`
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`,k=`precision highp float;

uniform float iTime;
uniform vec2  iResolution;

uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);

  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));

  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;

  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );

  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  
  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349,
                           1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) *
               rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234,
                           1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor  = color;
}`,F={iTime:{value:0},iResolution:{value:[1,1]},rayPos:{value:[0,0]},rayDir:{value:[0,1]},raysColor:{value:Mm(e)},raysSpeed:{value:n},lightSpread:{value:i},rayLength:{value:r},pulsating:{value:s?1:0},fadeDistance:{value:a},saturation:{value:o},mousePos:{value:[.5,.5]},mouseInfluence:{value:c},noiseAmount:{value:u},distortion:{value:f}};m.current=F;const z=new KT(w),$=new Xw(w,{vertex:N,fragment:k,uniforms:F}),j=new qT(w,{geometry:z,program:$});_.current=j;const V=()=>{if(!p.current||!M)return;M.dpr=Math.min(window.devicePixelRatio,2);const{clientWidth:Y,clientHeight:q}=p.current;M.setSize(Y,q);const te=M.dpr,Se=Y*te,Ne=q*te;F.iResolution.value=[Se,Ne];const{anchor:Ge,dir:Ke}=Em(t,Se,Ne);F.rayPos.value=Ge,F.rayDir.value=Ke},O=Y=>{if(!(!x.current||!m.current||!_.current)){F.iTime.value=Y*.001,l&&c>0&&(d.current.x=d.current.x*.92+g.current.x*(1-.92),d.current.y=d.current.y*.92+g.current.y*(1-.92),F.mousePos.value=[d.current.x,d.current.y]);try{M.render({scene:j}),v.current=requestAnimationFrame(O)}catch(q){console.warn("WebGL rendering error:",q);return}}};window.addEventListener("resize",V),V(),v.current=requestAnimationFrame(O),S.current=()=>{if(v.current&&(cancelAnimationFrame(v.current),v.current=null),window.removeEventListener("resize",V),M)try{const Y=M.gl.canvas,q=M.gl.getExtension("WEBGL_lose_context");q&&q.loseContext(),Y&&Y.parentNode&&Y.parentNode.removeChild(Y)}catch(Y){console.warn("Error during WebGL cleanup:",Y)}x.current=null,m.current=null,_.current=null}})(),()=>{S.current&&(S.current(),S.current=null)}),[T,t,e,n,i,r,s,a,o,l,c,u,f]),fe.useEffect(()=>{if(!m.current||!p.current||!x.current)return;const P=m.current,M=x.current;P.raysColor.value=Mm(e),P.raysSpeed.value=n,P.lightSpread.value=i,P.rayLength.value=r,P.pulsating.value=s?1:0,P.fadeDistance.value=a,P.saturation.value=o,P.mouseInfluence.value=c,P.noiseAmount.value=u,P.distortion.value=f;const{clientWidth:w,clientHeight:N}=p.current,k=M.dpr,{anchor:F,dir:z}=Em(t,w*k,N*k);P.rayPos.value=F,P.rayDir.value=z},[e,n,i,t,r,s,a,o,c,u,f]),fe.useEffect(()=>{const P=M=>{if(!p.current||!x.current)return;const w=p.current.getBoundingClientRect(),N=(M.clientX-w.left)/w.width,k=(M.clientY-w.top)/w.height;g.current={x:N,y:k}};if(l)return window.addEventListener("mousemove",P),()=>window.removeEventListener("mousemove",P)},[l]),E.jsx("div",{ref:p,className:`light-rays-container ${h}`.trim()})},JT=()=>{const[t,e]=fe.useState(!1),[n,i]=fe.useState({name:"",email:"",message:""}),r=fe.useRef(null);fe.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting&&e(!0)},{threshold:.2});return r.current&&o.observe(r.current),()=>{r.current&&o.unobserve(r.current)}},[]);const s=async o=>{o.preventDefault();try{(await fetch("https://formspree.io/f/xykdbzwo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?(alert("📬 Message sent successfully!"),i({name:"",email:"",message:""})):alert("❌ Failed to send message. Please try again.")}catch(l){console.error("Form submit error:",l),alert("❌ Something went wrong. Please try again.")}},a=[{icon:E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),label:"Email",value:"azjohnemmanuel@email.com",href:"mailto:azjohnemmanuel@email.com"},{icon:E.jsxs("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),label:"Location",value:"Guimba, Nueva Ecija",href:null},{icon:E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),label:"Phone",value:"+63 9532703993",href:"tel:+639532703993"}];return E.jsxs("section",{id:"contact",ref:r,className:"relative py-24 md:py-32 px-6 bg-neutral-950 overflow-hidden",children:[E.jsx("div",{className:"absolute inset-0 z-0 pointer-events-none",children:E.jsx(QT,{raysOrigin:"top-center",raysColor:"#10b981",raysSpeed:1,lightSpread:1.2,rayLength:2,fadeDistance:1,saturation:.8,followMouse:!0,mouseInfluence:.05,noiseAmount:.05,distortion:.05})}),E.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[E.jsxs("div",{className:"text-center mb-16",children:[E.jsx("span",{className:"inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4",children:"Get In Touch"}),E.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 tracking-tight",children:"Let's Work Together"}),E.jsx("p",{className:"text-neutral-400 max-w-2xl mx-auto",children:"Have a project in mind or want to collaborate? I'd love to hear from you."})]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",children:[E.jsxs("div",{className:`transition-all duration-700 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:[E.jsx("div",{className:"space-y-6 mb-8",children:a.map((o,l)=>E.jsxs("div",{className:"group flex items-start gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-emerald-500/50 transition-all duration-300",children:[E.jsx("div",{className:"flex-shrink-0 p-3 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500/20 transition-colors duration-300",children:o.icon}),E.jsxs("div",{children:[E.jsx("div",{className:"text-sm text-neutral-500 mb-1",children:o.label}),o.href?E.jsx("a",{href:o.href,className:"text-neutral-100 font-medium hover:text-emerald-400 transition-colors duration-200",children:o.value}):E.jsx("div",{className:"text-neutral-100 font-medium",children:o.value})]})]},l))}),E.jsxs("div",{className:"p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl",children:[E.jsx("h3",{className:"text-lg font-bold mb-3",children:"Available for"}),E.jsxs("ul",{className:"space-y-2 text-neutral-400 text-sm",children:[E.jsxs("li",{className:"flex items-center gap-2",children:[E.jsx("div",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Full-time opportunities"]}),E.jsxs("li",{className:"flex items-center gap-2",children:[E.jsx("div",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Freelance projects"]}),E.jsxs("li",{className:"flex items-center gap-2",children:[E.jsx("div",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Collaboration & consulting"]}),E.jsxs("li",{className:"flex items-center gap-2",children:[E.jsx("div",{className:"w-1.5 h-1.5 bg-emerald-400 rounded-full"}),"Speaking engagements"]})]})]})]}),E.jsx("div",{className:`transition-all duration-700 delay-200 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-8"}`,children:E.jsxs("form",{onSubmit:s,className:"space-y-6",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-neutral-300 mb-2",children:"Name"}),E.jsx("input",{type:"text",id:"name",value:n.name,onChange:o=>i({...n,name:o.target.value}),className:"w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all duration-200",placeholder:"Your name",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-neutral-300 mb-2",children:"Email"}),E.jsx("input",{type:"email",id:"email",value:n.email,onChange:o=>i({...n,email:o.target.value}),className:"w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all duration-200",placeholder:"your.email@gmail.com",required:!0})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-neutral-300 mb-2",children:"Message"}),E.jsx("textarea",{id:"message",value:n.message,onChange:o=>i({...n,message:o.target.value}),rows:6,className:"w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 placeholder-neutral-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all duration-200 resize-none",placeholder:"Tell me about your project...",required:!0})]}),E.jsx("button",{type:"submit",className:"w-full px-8 py-4 bg-emerald-500 text-neutral-950 font-semibold rounded-lg hover:bg-emerald-400 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50",children:"Send Message"})]})})]})]})]})},e3=()=>{const t=new Date().getFullYear(),e=[{name:"GitHub",href:"https://github.com/jemxi",target:"_blank",icon:E.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})},{name:"LinkedIn",href:"https://www.linkedin.com/in/john-emmanuel-menor-562a18311/",target:"_blank",icon:E.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{name:"Behance",href:"https://www.behance.net/jemxii",icon:E.jsx("svg",{className:"w-9 h-8",fill:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M22 7h-6V5h6v2zm-6.5 3.5c0-2.21-1.79-4-4-4H3v13h8.5c2.48 0 4.5-2.02 4.5-4.5 0-1.93-1.22-3.57-2.93-4.18.87-.59 1.43-1.58 1.43-2.82zm-9 6H5v-4h1.5c1.38 0 2.5.9 2.5 2s-1.12 2-2.5 2zm0-6H5V7h1.5c1.1 0 2 .67 2 1.5S7.6 10.5 6.5 10.5zm10.44-1.99c-2.07 0-3.75 1.68-3.75 3.75s1.68 3.75 3.75 3.75c1.64 0 3.02-1.05 3.53-2.5h-1.9c-.32.46-.84.75-1.63.75-.94 0-1.69-.53-1.88-1.25h5.5c.05-.23.08-.47.08-.75 0-2.07-1.68-3.75-3.75-3.75zm-1.88 3c.19-.72.94-1.25 1.88-1.25.93 0 1.69.53 1.88 1.25h-3.76z"})})},{name:"Email",href:"mailto:azjohnemmanuel@email.com",icon:E.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}],n=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}];return E.jsx("footer",{className:"bg-neutral-950 border-t border-neutral-800",children:E.jsxs("div",{className:"max-w-6xl mx-auto px-6 py-12",children:[E.jsxs("div",{className:"grid md:grid-cols-3 gap-12 mb-8",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-2xl font-bold mb-4",children:"John Emmanuel S. Menor"}),E.jsx("p",{className:"text-neutral-400 text-sm leading-relaxed mb-4",children:"Full Stack Developer, and UI/UX Designer passionate about creating meaningful digital experiences."}),E.jsx("div",{className:"flex items-center gap-3",children:e.map(i=>E.jsx("a",{href:i.href,className:"p-2 text-neutral-400 hover:text-emerald-400 hover:scale-110 transition-all duration-200","aria-label":i.name,children:i.icon},i.name))})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4",children:"Quick Links"}),E.jsx("ul",{className:"space-y-2",children:n.map(i=>E.jsx("li",{children:E.jsx("a",{href:i.href,className:"text-neutral-400 hover:text-emerald-400 transition-colors duration-200 text-sm",children:i.name})},i.name))})]}),E.jsxs("div",{children:[E.jsx("h4",{className:"text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4",children:"Get In Touch"}),E.jsxs("ul",{className:"space-y-2 text-sm text-neutral-400",children:[E.jsx("li",{children:"Guimba, Nueva Ecija"}),E.jsx("li",{children:E.jsx("a",{href:"mailto:jem.menor@email.com",className:"hover:text-emerald-400 transition-colors duration-200",children:"azjohnemmanuel@email.com"})}),E.jsx("li",{children:"Available for opportunities"})]})]})]}),E.jsx("div",{className:"pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500",children:E.jsxs("p",{children:["© ",t," John Emmanuel S. Menor. All rights reserved."]})})]})})},t3=()=>{const[t,e]=fe.useState(!1);fe.useEffect(()=>{const i=()=>{e(window.scrollY>500)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return E.jsx("button",{onClick:n,className:`fixed bottom-8 right-8 z-50 p-3 bg-emerald-500 text-neutral-950 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,"aria-label":"Scroll to top",children:E.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 10l7-7m0 0l7 7m-7-7v18"})})})},n3=()=>{const[t,e]=fe.useState(!1),[n,i]=fe.useState([{role:"assistant",content:"Hello! I'm John's AI assistant. Ask me about his skills, projects, or experience!"}]),[r,s]=fe.useState(""),[a,o]=fe.useState(!1),l=fe.useRef(null),c=()=>{var f;(f=l.current)==null||f.scrollIntoView({behavior:"smooth"})};fe.useEffect(()=>{c()},[n]);const u=async f=>{if(f.preventDefault(),!r.trim()||a)return;const h=r.trim();s(""),i(p=>[...p,{role:"user",content:h}]),o(!0);try{const p=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer ","Content-Type":"application/json"},body:JSON.stringify({model:"llama-3.1-8b-instant",messages:[{role:"system",content:`You are John Emmanuel S. Menor's AI assistant. You help visitors learn about John's portfolio.

ABOUT JOHN:
- IT Student at Our Lady of the Sacred Heart College (2022-2026)
- Skills: React, JavaScript, Tailwind CSS, Node.js, MongoDB, C#, ASP.NET, PHP, MySQL, UI/UX Design
- Current Role: IT Intern/Assistant Team Lead at Hyundai Quezon Avenue (Jan 2026-Present)
- Previous: Video Editor at Global Future Services, Freelance C#/ASP.NET Developer
- Capstone Project: WasteWise - Electronic Platform for Recycled Products
- Awards: IT Quiz Bee 1st Place, Best Paper Presentation Award Winner
- Leadership: Public Relations Officer at JPCS

Keep responses concise, friendly, and helpful. Focus on John's skills and achievements.`},...n.map(g=>({role:g.role,content:g.content})),{role:"user",content:h}],temperature:.7,max_tokens:500})});if(!p.ok)throw new Error("Failed to get response");const x=(await p.json()).choices[0].message.content;i(g=>[...g,{role:"assistant",content:x}])}catch(p){console.error("Error:",p),i(m=>[...m,{role:"assistant",content:"Sorry, I encountered an error. Please try again!"}])}finally{o(!1)}};return E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:()=>e(!t),className:"fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200",children:t?E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):E.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"})})}),t&&E.jsxs("div",{className:"fixed bottom-24 right-8 z-50 w-96 h-[600px] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden",children:[E.jsx("div",{className:"bg-gradient-to-r from-emerald-500 to-emerald-600 p-4",children:E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsxs("div",{className:"relative",children:[E.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden border-2 border-white/30",children:E.jsx("img",{src:"/mypic.jpg",alt:"John's AI Assistant",className:"w-full h-full object-cover",onError:f=>{f.target.parentElement.innerHTML=`
              <div class="w-full h-full bg-white/20 flex items-center justify-center">
                <span class="text-white font-bold text-sm">JEM</span>
              </div>
            `}})}),E.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-emerald-600"})]}),E.jsxs("div",{className:"flex-1",children:[E.jsx("h3",{className:"font-bold text-white",children:"John - AI Assistant"}),E.jsxs("p",{className:"text-xs text-white/80 flex items-center gap-1",children:[E.jsx("span",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),"Software Engineer"]})]}),E.jsx("button",{onClick:()=>e(!1),className:"p-2 hover:bg-white/10 rounded-lg transition-colors",children:E.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})}),E.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[n.map((f,h)=>E.jsx("div",{className:`flex ${f.role==="user"?"justify-end":"justify-start"}`,children:E.jsx("div",{className:`max-w-[80%] p-3 rounded-2xl ${f.role==="user"?"bg-emerald-500 text-white":"bg-neutral-800 text-neutral-100"}`,children:E.jsx("p",{className:"text-sm leading-relaxed whitespace-pre-wrap",children:f.content})})},h)),a&&E.jsx("div",{className:"flex justify-start",children:E.jsx("div",{className:"bg-neutral-800 p-3 rounded-2xl",children:E.jsxs("div",{className:"flex gap-1",children:[E.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-bounce",style:{animationDelay:"0ms"}}),E.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-bounce",style:{animationDelay:"150ms"}}),E.jsx("div",{className:"w-2 h-2 bg-emerald-400 rounded-full animate-bounce",style:{animationDelay:"300ms"}})]})})}),E.jsx("div",{ref:l})]}),E.jsx("form",{onSubmit:u,className:"p-4 border-t border-neutral-700",children:E.jsxs("div",{className:"flex gap-2",children:[E.jsx("input",{type:"text",value:r,onChange:f=>s(f.target.value),placeholder:"Ask me about John...",className:"flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors",disabled:a}),E.jsx("button",{type:"submit",disabled:a||!r.trim(),className:"p-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:E.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})]})};function i3(){const[t,e]=fe.useState("home");return fe.useEffect(()=>{const n=()=>{const i=["home","about","skills","projects","experience","education","leadership","contact"],r=window.scrollY+100;for(const s of i){const a=document.getElementById(s);if(a){const{offsetTop:o,offsetHeight:l}=a;if(r>=o&&r<o+l){e(s);break}}}};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),E.jsxs("div",{className:"bg-neutral-950 text-neutral-100 min-h-screen",children:[E.jsx(i1,{activeSection:t}),E.jsx(s1,{}),E.jsx(o1,{}),E.jsx(l1,{}),E.jsx(c1,{}),E.jsx(u1,{}),E.jsx(bw,{}),E.jsx(JT,{}),E.jsx(e3,{}),E.jsx(t3,{}),E.jsx(n3,{})]})}Jc.createRoot(document.getElementById("root")).render(E.jsx(jv.StrictMode,{children:E.jsx(i3,{})}));
