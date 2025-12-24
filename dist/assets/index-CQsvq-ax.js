function Xm(i,c){for(var o=0;o<c.length;o++){const d=c[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in i)){const f=Object.getOwnPropertyDescriptor(d,u);f&&Object.defineProperty(i,u,f.get?f:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function Uu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ao={exports:{}},ie={};var gu;function Jm(){if(gu)return ie;gu=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function N(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,z={};function C(S,L,le){this.props=S,this.context=L,this.refs=z,this.updater=le||T}C.prototype.isReactComponent={},C.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},C.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function O(){}O.prototype=C.prototype;function R(S,L,le){this.props=S,this.context=L,this.refs=z,this.updater=le||T}var F=R.prototype=new O;F.constructor=R,M(F,C.prototype),F.isPureReactComponent=!0;var I=Array.isArray,te=Object.prototype.hasOwnProperty,$={current:null},ne={key:!0,ref:!0,__self:!0,__source:!0};function W(S,L,le){var oe,ce={},ue=null,he=null;if(L!=null)for(oe in L.ref!==void 0&&(he=L.ref),L.key!==void 0&&(ue=""+L.key),L)te.call(L,oe)&&!ne.hasOwnProperty(oe)&&(ce[oe]=L[oe]);var fe=arguments.length-2;if(fe===1)ce.children=le;else if(1<fe){for(var xe=Array(fe),nt=0;nt<fe;nt++)xe[nt]=arguments[nt+2];ce.children=xe}if(S&&S.defaultProps)for(oe in fe=S.defaultProps,fe)ce[oe]===void 0&&(ce[oe]=fe[oe]);return{$$typeof:i,type:S,key:ue,ref:he,props:ce,_owner:$.current}}function H(S,L){return{$$typeof:i,type:S.type,key:L,ref:S.ref,props:S.props,_owner:S._owner}}function ve(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function re(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(le){return L[le]})}var me=/\/+/g;function Se(S,L){return typeof S=="object"&&S!==null&&S.key!=null?re(""+S.key):L.toString(36)}function ot(S,L,le,oe,ce){var ue=typeof S;(ue==="undefined"||ue==="boolean")&&(S=null);var he=!1;if(S===null)he=!0;else switch(ue){case"string":case"number":he=!0;break;case"object":switch(S.$$typeof){case i:case c:he=!0}}if(he)return he=S,ce=ce(he),S=oe===""?"."+Se(he,0):oe,I(ce)?(le="",S!=null&&(le=S.replace(me,"$&/")+"/"),ot(ce,L,le,"",function(nt){return nt})):ce!=null&&(ve(ce)&&(ce=H(ce,le+(!ce.key||he&&he.key===ce.key?"":(""+ce.key).replace(me,"$&/")+"/")+S)),L.push(ce)),1;if(he=0,oe=oe===""?".":oe+":",I(S))for(var fe=0;fe<S.length;fe++){ue=S[fe];var xe=oe+Se(ue,fe);he+=ot(ue,L,le,xe,ce)}else if(xe=N(S),typeof xe=="function")for(S=xe.call(S),fe=0;!(ue=S.next()).done;)ue=ue.value,xe=oe+Se(ue,fe++),he+=ot(ue,L,le,xe,ce);else if(ue==="object")throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return he}function Ne(S,L,le){if(S==null)return S;var oe=[],ce=0;return ot(S,oe,"","",function(ue){return L.call(le,ue,ce++)}),oe}function Ge(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(le){(S._status===0||S._status===-1)&&(S._status=1,S._result=le)},function(le){(S._status===0||S._status===-1)&&(S._status=2,S._result=le)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ze={current:null},V={transition:null},ee={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:V,ReactCurrentOwner:$};function q(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:Ne,forEach:function(S,L,le){Ne(S,function(){L.apply(this,arguments)},le)},count:function(S){var L=0;return Ne(S,function(){L++}),L},toArray:function(S){return Ne(S,function(L){return L})||[]},only:function(S){if(!ve(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},ie.Component=C,ie.Fragment=o,ie.Profiler=u,ie.PureComponent=R,ie.StrictMode=d,ie.Suspense=y,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,ie.act=q,ie.cloneElement=function(S,L,le){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var oe=M({},S.props),ce=S.key,ue=S.ref,he=S._owner;if(L!=null){if(L.ref!==void 0&&(ue=L.ref,he=$.current),L.key!==void 0&&(ce=""+L.key),S.type&&S.type.defaultProps)var fe=S.type.defaultProps;for(xe in L)te.call(L,xe)&&!ne.hasOwnProperty(xe)&&(oe[xe]=L[xe]===void 0&&fe!==void 0?fe[xe]:L[xe])}var xe=arguments.length-2;if(xe===1)oe.children=le;else if(1<xe){fe=Array(xe);for(var nt=0;nt<xe;nt++)fe[nt]=arguments[nt+2];oe.children=fe}return{$$typeof:i,type:S.type,key:ce,ref:ue,props:oe,_owner:he}},ie.createContext=function(S){return S={$$typeof:p,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:f,_context:S},S.Consumer=S},ie.createElement=W,ie.createFactory=function(S){var L=W.bind(null,S);return L.type=S,L},ie.createRef=function(){return{current:null}},ie.forwardRef=function(S){return{$$typeof:w,render:S}},ie.isValidElement=ve,ie.lazy=function(S){return{$$typeof:x,_payload:{_status:-1,_result:S},_init:Ge}},ie.memo=function(S,L){return{$$typeof:k,type:S,compare:L===void 0?null:L}},ie.startTransition=function(S){var L=V.transition;V.transition={};try{S()}finally{V.transition=L}},ie.unstable_act=q,ie.useCallback=function(S,L){return ze.current.useCallback(S,L)},ie.useContext=function(S){return ze.current.useContext(S)},ie.useDebugValue=function(){},ie.useDeferredValue=function(S){return ze.current.useDeferredValue(S)},ie.useEffect=function(S,L){return ze.current.useEffect(S,L)},ie.useId=function(){return ze.current.useId()},ie.useImperativeHandle=function(S,L,le){return ze.current.useImperativeHandle(S,L,le)},ie.useInsertionEffect=function(S,L){return ze.current.useInsertionEffect(S,L)},ie.useLayoutEffect=function(S,L){return ze.current.useLayoutEffect(S,L)},ie.useMemo=function(S,L){return ze.current.useMemo(S,L)},ie.useReducer=function(S,L,le){return ze.current.useReducer(S,L,le)},ie.useRef=function(S){return ze.current.useRef(S)},ie.useState=function(S){return ze.current.useState(S)},ie.useSyncExternalStore=function(S,L,le){return ze.current.useSyncExternalStore(S,L,le)},ie.useTransition=function(){return ze.current.useTransition()},ie.version="18.3.1",ie}var vu;function Fu(){return vu||(vu=1,ao.exports=Jm()),ao.exports}var D=Fu();const a=Uu(D),Zm=Xm({__proto__:null,default:a},[D]);var el={},ro={exports:{}},tt={},lo={exports:{}},io={};var hu;function ef(){return hu||(hu=1,(function(i){function c(V,ee){var q=V.length;V.push(ee);e:for(;0<q;){var S=q-1>>>1,L=V[S];if(0<u(L,ee))V[S]=ee,V[q]=L,q=S;else break e}}function o(V){return V.length===0?null:V[0]}function d(V){if(V.length===0)return null;var ee=V[0],q=V.pop();if(q!==ee){V[0]=q;e:for(var S=0,L=V.length,le=L>>>1;S<le;){var oe=2*(S+1)-1,ce=V[oe],ue=oe+1,he=V[ue];if(0>u(ce,q))ue<L&&0>u(he,ce)?(V[S]=he,V[ue]=q,S=ue):(V[S]=ce,V[oe]=q,S=oe);else if(ue<L&&0>u(he,q))V[S]=he,V[ue]=q,S=ue;else break e}}return ee}function u(V,ee){var q=V.sortIndex-ee.sortIndex;return q!==0?q:V.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var p=Date,w=p.now();i.unstable_now=function(){return p.now()-w}}var y=[],k=[],x=1,v=null,N=3,T=!1,M=!1,z=!1,C=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(V){for(var ee=o(k);ee!==null;){if(ee.callback===null)d(k);else if(ee.startTime<=V)d(k),ee.sortIndex=ee.expirationTime,c(y,ee);else break;ee=o(k)}}function I(V){if(z=!1,F(V),!M)if(o(y)!==null)M=!0,Ge(te);else{var ee=o(k);ee!==null&&ze(I,ee.startTime-V)}}function te(V,ee){M=!1,z&&(z=!1,O(W),W=-1),T=!0;var q=N;try{for(F(ee),v=o(y);v!==null&&(!(v.expirationTime>ee)||V&&!re());){var S=v.callback;if(typeof S=="function"){v.callback=null,N=v.priorityLevel;var L=S(v.expirationTime<=ee);ee=i.unstable_now(),typeof L=="function"?v.callback=L:v===o(y)&&d(y),F(ee)}else d(y);v=o(y)}if(v!==null)var le=!0;else{var oe=o(k);oe!==null&&ze(I,oe.startTime-ee),le=!1}return le}finally{v=null,N=q,T=!1}}var $=!1,ne=null,W=-1,H=5,ve=-1;function re(){return!(i.unstable_now()-ve<H)}function me(){if(ne!==null){var V=i.unstable_now();ve=V;var ee=!0;try{ee=ne(!0,V)}finally{ee?Se():($=!1,ne=null)}}else $=!1}var Se;if(typeof R=="function")Se=function(){R(me)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,Ne=ot.port2;ot.port1.onmessage=me,Se=function(){Ne.postMessage(null)}}else Se=function(){C(me,0)};function Ge(V){ne=V,$||($=!0,Se())}function ze(V,ee){W=C(function(){V(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){M||T||(M=!0,Ge(te))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return N},i.unstable_getFirstCallbackNode=function(){return o(y)},i.unstable_next=function(V){switch(N){case 1:case 2:case 3:var ee=3;break;default:ee=N}var q=N;N=ee;try{return V()}finally{N=q}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,ee){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var q=N;N=V;try{return ee()}finally{N=q}},i.unstable_scheduleCallback=function(V,ee,q){var S=i.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?S+q:S):q=S,V){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=q+L,V={id:x++,callback:ee,priorityLevel:V,startTime:q,expirationTime:L,sortIndex:-1},q>S?(V.sortIndex=q,c(k,V),o(y)===null&&V===o(k)&&(z?(O(W),W=-1):z=!0,ze(I,q-S))):(V.sortIndex=L,c(y,V),M||T||(M=!0,Ge(te))),V},i.unstable_shouldYield=re,i.unstable_wrapCallback=function(V){var ee=N;return function(){var q=N;N=ee;try{return V.apply(this,arguments)}finally{N=q}}}})(io)),io}var yu;function tf(){return yu||(yu=1,lo.exports=ef()),lo.exports}var Eu;function nf(){if(Eu)return tt;Eu=1;var i=Fu(),c=tf();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,u={};function f(e,t){p(e,t),p(e+"Capture",t)}function p(e,t){for(u[e]=t,e=0;e<t.length;e++)d.add(t[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function N(e){return y.call(v,e)?!0:y.call(x,e)?!1:k.test(e)?v[e]=!0:(x[e]=!0,!1)}function T(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,n,r){if(t===null||typeof t>"u"||T(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function z(e,t,n,r,l,s,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=m}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){C[e]=new z(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];C[t]=new z(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){C[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){C[e]=new z(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){C[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){C[e]=new z(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){C[e]=new z(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){C[e]=new z(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){C[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O,R);C[t]=new z(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O,R);C[t]=new z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O,R);C[t]=new z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){C[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)}),C.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){C[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,t,n,r){var l=C.hasOwnProperty(t)?C[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,n,l,r)&&(n=null),r||l===null?N(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var I=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),$=Symbol.for("react.portal"),ne=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),re=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),V=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,S;function L(e){if(S===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var le=!1;function oe(e,t){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(_){var r=_}Reflect.construct(e,[],t)}else{try{t.call()}catch(_){r=_}e.call(t.prototype)}else{try{throw Error()}catch(_){r=_}e()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),s=r.stack.split(`
`),m=l.length-1,g=s.length-1;1<=m&&0<=g&&l[m]!==s[g];)g--;for(;1<=m&&0<=g;m--,g--)if(l[m]!==s[g]){if(m!==1||g!==1)do if(m--,g--,0>g||l[m]!==s[g]){var h=`
`+l[m].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=m&&0<=g);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function ce(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ne:return"Fragment";case $:return"Portal";case H:return"Profiler";case W:return"StrictMode";case Se:return"Suspense";case ot:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case ve:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function he(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nt(e){var t=xe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){r=""+m,s.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(m){r=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=nt(e))}function No(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ko(e,t){t=t.checked,t!=null&&F(e,"checked",t,!1)}function dl(e,t){ko(e,t);var n=fe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function So(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(Jn(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fe(n)}}function Co(e,t){var n=fe(t.value),r=fe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Po(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Po(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ya,To=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ya.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},td=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(e){td.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ea[t]=ea[e]})});function _o(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ea.hasOwnProperty(e)&&ea[e]?(""+t).trim():t+"px"}function Do(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=_o(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var nd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gl(e,t){if(t){if(nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var El=null,Sn=null,bn=null;function Oo(e){if(e=xa(e)){if(typeof El!="function")throw Error(o(280));var t=e.stateNode;t&&(t=gr(t),El(e.stateNode,e.type,t))}}function Ro(e){Sn?bn?bn.push(e):bn=[e]:Sn=e}function Mo(){if(Sn){var e=Sn,t=bn;if(bn=Sn=null,Oo(e),t)for(e=0;e<t.length;e++)Oo(t[e])}}function Ao(e,t){return e(t)}function Lo(){}var wl=!1;function jo(e,t,n){if(wl)return e(t,n);wl=!0;try{return Ao(e,t,n)}finally{wl=!1,(Sn!==null||bn!==null)&&(Lo(),Mo())}}function ta(e,t){var n=e.stateNode;if(n===null)return null;var r=gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Nl=!1;if(w)try{var na={};Object.defineProperty(na,"passive",{get:function(){Nl=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Nl=!1}function ad(e,t,n,r,l,s,m,g,h){var _=Array.prototype.slice.call(arguments,3);try{t.apply(n,_)}catch(j){this.onError(j)}}var aa=!1,Qa=null,qa=!1,xl=null,rd={onError:function(e){aa=!0,Qa=e}};function ld(e,t,n,r,l,s,m,g,h){aa=!1,Qa=null,ad.apply(rd,arguments)}function id(e,t,n,r,l,s,m,g,h){if(ld.apply(this,arguments),aa){if(aa){var _=Qa;aa=!1,Qa=null}else throw Error(o(198));qa||(qa=!0,xl=_)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fo(e){if(sn(e)!==e)throw Error(o(188))}function od(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return Fo(l),e;if(s===r)return Fo(l),t;s=s.sibling}throw Error(o(188))}if(n.return!==r.return)n=l,r=s;else{for(var m=!1,g=l.child;g;){if(g===n){m=!0,n=l,r=s;break}if(g===r){m=!0,r=l,n=s;break}g=g.sibling}if(!m){for(g=s.child;g;){if(g===n){m=!0,n=s,r=l;break}if(g===r){m=!0,r=s,n=l;break}g=g.sibling}if(!m)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function Io(e){return e=od(e),e!==null?Bo(e):null}function Bo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bo(e);if(t!==null)return t;e=e.sibling}return null}var $o=c.unstable_scheduleCallback,Wo=c.unstable_cancelCallback,sd=c.unstable_shouldYield,cd=c.unstable_requestPaint,Te=c.unstable_now,ud=c.unstable_getCurrentPriorityLevel,kl=c.unstable_ImmediatePriority,Vo=c.unstable_UserBlockingPriority,Ga=c.unstable_NormalPriority,dd=c.unstable_LowPriority,Ho=c.unstable_IdlePriority,Ka=null,Nt=null;function md(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:gd,fd=Math.log,pd=Math.LN2;function gd(e){return e>>>=0,e===0?32:31-(fd(e)/pd|0)|0}var Xa=64,Ja=4194304;function ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Za(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,m=n&268435455;if(m!==0){var g=m&~l;g!==0?r=ra(g):(s&=m,s!==0&&(r=ra(s)))}else m=n&~l,m!==0?r=ra(m):s!==0&&(r=ra(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),l=1<<n,r|=e[n],t&=~l;return r}function vd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var m=31-pt(s),g=1<<m,h=l[m];h===-1?((g&n)===0||(g&r)!==0)&&(l[m]=vd(g,t)):h<=t&&(e.expiredLanes|=g),s&=~g}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yo(){var e=Xa;return Xa<<=1,(Xa&4194240)===0&&(Xa=64),e}function bl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function yd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-pt(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function Cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var pe=0;function Qo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var qo,zl,Go,Ko,Xo,Pl=!1,er=[],Ut=null,Ft=null,It=null,ia=new Map,oa=new Map,Bt=[],Ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jo(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(t.pointerId)}}function sa(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=xa(t),t!==null&&zl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wd(e,t,n,r,l){switch(t){case"focusin":return Ut=sa(Ut,e,t,n,r,l),!0;case"dragenter":return Ft=sa(Ft,e,t,n,r,l),!0;case"mouseover":return It=sa(It,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return ia.set(s,sa(ia.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,oa.set(s,sa(oa.get(s)||null,e,t,n,r,l)),!0}return!1}function Zo(e){var t=cn(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Uo(n),t!==null){e.blockedOn=t,Xo(e.priority,function(){Go(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=xa(n),t!==null&&zl(t),e.blockedOn=n,!1;t.shift()}return!0}function es(e,t,n){tr(e)&&n.delete(t)}function Nd(){Pl=!1,Ut!==null&&tr(Ut)&&(Ut=null),Ft!==null&&tr(Ft)&&(Ft=null),It!==null&&tr(It)&&(It=null),ia.forEach(es),oa.forEach(es)}function ca(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Nd)))}function ua(e){function t(l){return ca(l,e)}if(0<er.length){ca(er[0],e);for(var n=1;n<er.length;n++){var r=er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&ca(Ut,e),Ft!==null&&ca(Ft,e),It!==null&&ca(It,e),ia.forEach(t),oa.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Zo(n),n.blockedOn===null&&Bt.shift()}var Cn=I.ReactCurrentBatchConfig,nr=!0;function xd(e,t,n,r){var l=pe,s=Cn.transition;Cn.transition=null;try{pe=1,Tl(e,t,n,r)}finally{pe=l,Cn.transition=s}}function kd(e,t,n,r){var l=pe,s=Cn.transition;Cn.transition=null;try{pe=4,Tl(e,t,n,r)}finally{pe=l,Cn.transition=s}}function Tl(e,t,n,r){if(nr){var l=_l(e,t,n,r);if(l===null)Ql(e,t,r,ar,n),Jo(e,r);else if(wd(l,e,t,n,r))r.stopPropagation();else if(Jo(e,r),t&4&&-1<Ed.indexOf(e)){for(;l!==null;){var s=xa(l);if(s!==null&&qo(s),s=_l(e,t,n,r),s===null&&Ql(e,t,r,ar,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var ar=null;function _l(e,t,n,r){if(ar=null,e=yl(r),e=cn(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ar=e,null}function ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ud()){case kl:return 1;case Vo:return 4;case Ga:case dd:return 16;case Ho:return 536870912;default:return 16}default:return 16}}var $t=null,Dl=null,rr=null;function ns(){if(rr)return rr;var e,t=Dl,n=t.length,r,l="value"in $t?$t.value:$t.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var m=n-e;for(r=1;r<=m&&t[n-r]===l[s-r];r++);return rr=l.slice(e,1<r?1-r:void 0)}function lr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ir(){return!0}function as(){return!1}function at(e){function t(n,r,l,s,m){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ir:as,this.isPropagationStopped=as,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=at(zn),da=q({},zn,{view:0,detail:0}),Sd=at(da),Rl,Ml,ma,or=q({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ma&&(ma&&e.type==="mousemove"?(Rl=e.screenX-ma.screenX,Ml=e.screenY-ma.screenY):Ml=Rl=0,ma=e),Rl)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),rs=at(or),bd=q({},or,{dataTransfer:0}),Cd=at(bd),zd=q({},da,{relatedTarget:0}),Al=at(zd),Pd=q({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Td=at(Pd),_d=q({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dd=at(_d),Od=q({},zn,{data:0}),ls=at(Od),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ld(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ad[e])?!!t[e]:!1}function Ll(){return Ld}var jd=q({},da,{key:function(e){if(e.key){var t=Rd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?lr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ud=at(jd),Fd=q({},or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=at(Fd),Id=q({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Bd=at(Id),$d=q({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=at($d),Vd=q({},or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hd=at(Vd),Yd=[9,13,27,32],jl=w&&"CompositionEvent"in window,fa=null;w&&"documentMode"in document&&(fa=document.documentMode);var Qd=w&&"TextEvent"in window&&!fa,os=w&&(!jl||fa&&8<fa&&11>=fa),ss=" ",cs=!1;function us(e,t){switch(e){case"keyup":return Yd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pn=!1;function qd(e,t){switch(e){case"compositionend":return ds(t);case"keypress":return t.which!==32?null:(cs=!0,ss);case"textInput":return e=t.data,e===ss&&cs?null:e;default:return null}}function Gd(e,t){if(Pn)return e==="compositionend"||!jl&&us(e,t)?(e=ns(),rr=Dl=$t=null,Pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return os&&t.locale!=="ko"?null:t.data;default:return null}}var Kd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kd[e.type]:t==="textarea"}function fs(e,t,n,r){Ro(r),t=mr(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pa=null,ga=null;function Xd(e){Ds(e,0)}function sr(e){var t=Rn(e);if(No(t))return e}function Jd(e,t){if(e==="change")return t}var ps=!1;if(w){var Ul;if(w){var Fl="oninput"in document;if(!Fl){var gs=document.createElement("div");gs.setAttribute("oninput","return;"),Fl=typeof gs.oninput=="function"}Ul=Fl}else Ul=!1;ps=Ul&&(!document.documentMode||9<document.documentMode)}function vs(){pa&&(pa.detachEvent("onpropertychange",hs),ga=pa=null)}function hs(e){if(e.propertyName==="value"&&sr(ga)){var t=[];fs(t,ga,e,yl(e)),jo(Xd,t)}}function Zd(e,t,n){e==="focusin"?(vs(),pa=t,ga=n,pa.attachEvent("onpropertychange",hs)):e==="focusout"&&vs()}function em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sr(ga)}function tm(e,t){if(e==="click")return sr(t)}function nm(e,t){if(e==="input"||e==="change")return sr(t)}function am(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:am;function va(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!y.call(t,l)||!gt(e[l],t[l]))return!1}return!0}function ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Es(e,t){var n=ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ys(n)}}function ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ns(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rm(e){var t=Ns(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ws(n.ownerDocument.documentElement,n)){if(r!==null&&Il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=Es(n,s);var m=Es(n,r);l&&m&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lm=w&&"documentMode"in document&&11>=document.documentMode,Tn=null,Bl=null,ha=null,$l=!1;function xs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$l||Tn==null||Tn!==Ha(r)||(r=Tn,"selectionStart"in r&&Il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&va(ha,r)||(ha=r,r=mr(Bl,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Wl={},ks={};w&&(ks=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function ur(e){if(Wl[e])return Wl[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ks)return Wl[e]=t[n];return e}var Ss=ur("animationend"),bs=ur("animationiteration"),Cs=ur("animationstart"),zs=ur("transitionend"),Ps=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Ps.set(e,t),f(t,[e])}for(var Vl=0;Vl<Ts.length;Vl++){var Hl=Ts[Vl],im=Hl.toLowerCase(),om=Hl[0].toUpperCase()+Hl.slice(1);Wt(im,"on"+om)}Wt(Ss,"onAnimationEnd"),Wt(bs,"onAnimationIteration"),Wt(Cs,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(zs,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function _s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,id(r,t,void 0,e),e.currentTarget=null}function Ds(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var m=r.length-1;0<=m;m--){var g=r[m],h=g.instance,_=g.currentTarget;if(g=g.listener,h!==s&&l.isPropagationStopped())break e;_s(l,g,_),s=h}else for(m=0;m<r.length;m++){if(g=r[m],h=g.instance,_=g.currentTarget,g=g.listener,h!==s&&l.isPropagationStopped())break e;_s(l,g,_),s=h}}}if(qa)throw e=xl,qa=!1,xl=null,e}function Ee(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(Os(t,e,2,!1),n.add(r))}function Yl(e,t,n){var r=0;t&&(r|=4),Os(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Ea(e){if(!e[dr]){e[dr]=!0,d.forEach(function(n){n!=="selectionchange"&&(sm.has(n)||Yl(n,!1,e),Yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Yl("selectionchange",!1,t))}}function Os(e,t,n,r){switch(ts(t)){case 1:var l=xd;break;case 4:l=kd;break;default:l=Tl}n=l.bind(null,t,n,e),l=void 0,!Nl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,l){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var g=r.stateNode.containerInfo;if(g===l||g.nodeType===8&&g.parentNode===l)break;if(m===4)for(m=r.return;m!==null;){var h=m.tag;if((h===3||h===4)&&(h=m.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;m=m.return}for(;g!==null;){if(m=cn(g),m===null)return;if(h=m.tag,h===5||h===6){r=s=m;continue e}g=g.parentNode}}r=r.return}jo(function(){var _=s,j=yl(n),U=[];e:{var A=Ps.get(e);if(A!==void 0){var Y=Ol,G=e;switch(e){case"keypress":if(lr(n)===0)break e;case"keydown":case"keyup":Y=Ud;break;case"focusin":G="focus",Y=Al;break;case"focusout":G="blur",Y=Al;break;case"beforeblur":case"afterblur":Y=Al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Bd;break;case Ss:case bs:case Cs:Y=Td;break;case zs:Y=Wd;break;case"scroll":Y=Sd;break;case"wheel":Y=Hd;break;case"copy":case"cut":case"paste":Y=Dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=is}var K=(t&4)!==0,_e=!K&&e==="scroll",b=K?A!==null?A+"Capture":null:A;K=[];for(var E=_,P;E!==null;){P=E;var B=P.stateNode;if(P.tag===5&&B!==null&&(P=B,b!==null&&(B=ta(E,b),B!=null&&K.push(wa(E,B,P)))),_e)break;E=E.return}0<K.length&&(A=new Y(A,G,null,n,j),U.push({event:A,listeners:K}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",A&&n!==hl&&(G=n.relatedTarget||n.fromElement)&&(cn(G)||G[Tt]))break e;if((Y||A)&&(A=j.window===j?j:(A=j.ownerDocument)?A.defaultView||A.parentWindow:window,Y?(G=n.relatedTarget||n.toElement,Y=_,G=G?cn(G):null,G!==null&&(_e=sn(G),G!==_e||G.tag!==5&&G.tag!==6)&&(G=null)):(Y=null,G=_),Y!==G)){if(K=rs,B="onMouseLeave",b="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(K=is,B="onPointerLeave",b="onPointerEnter",E="pointer"),_e=Y==null?A:Rn(Y),P=G==null?A:Rn(G),A=new K(B,E+"leave",Y,n,j),A.target=_e,A.relatedTarget=P,B=null,cn(j)===_&&(K=new K(b,E+"enter",G,n,j),K.target=P,K.relatedTarget=_e,B=K),_e=B,Y&&G)t:{for(K=Y,b=G,E=0,P=K;P;P=Dn(P))E++;for(P=0,B=b;B;B=Dn(B))P++;for(;0<E-P;)K=Dn(K),E--;for(;0<P-E;)b=Dn(b),P--;for(;E--;){if(K===b||b!==null&&K===b.alternate)break t;K=Dn(K),b=Dn(b)}K=null}else K=null;Y!==null&&Rs(U,A,Y,K,!1),G!==null&&_e!==null&&Rs(U,_e,G,K,!0)}}e:{if(A=_?Rn(_):window,Y=A.nodeName&&A.nodeName.toLowerCase(),Y==="select"||Y==="input"&&A.type==="file")var X=Jd;else if(ms(A))if(ps)X=nm;else{X=em;var J=Zd}else(Y=A.nodeName)&&Y.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(X=tm);if(X&&(X=X(e,_))){fs(U,X,n,j);break e}J&&J(e,A,_),e==="focusout"&&(J=A._wrapperState)&&J.controlled&&A.type==="number"&&ml(A,"number",A.value)}switch(J=_?Rn(_):window,e){case"focusin":(ms(J)||J.contentEditable==="true")&&(Tn=J,Bl=_,ha=null);break;case"focusout":ha=Bl=Tn=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,xs(U,n,j);break;case"selectionchange":if(lm)break;case"keydown":case"keyup":xs(U,n,j)}var Z;if(jl)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Pn?us(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(os&&n.locale!=="ko"&&(Pn||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Pn&&(Z=ns()):($t=j,Dl="value"in $t?$t.value:$t.textContent,Pn=!0)),J=mr(_,ae),0<J.length&&(ae=new ls(ae,e,null,n,j),U.push({event:ae,listeners:J}),Z?ae.data=Z:(Z=ds(n),Z!==null&&(ae.data=Z)))),(Z=Qd?qd(e,n):Gd(e,n))&&(_=mr(_,"onBeforeInput"),0<_.length&&(j=new ls("onBeforeInput","beforeinput",null,n,j),U.push({event:j,listeners:_}),j.data=Z))}Ds(U,t)})}function wa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=ta(e,n),s!=null&&r.unshift(wa(e,s,l)),s=ta(e,t),s!=null&&r.push(wa(e,s,l))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rs(e,t,n,r,l){for(var s=t._reactName,m=[];n!==null&&n!==r;){var g=n,h=g.alternate,_=g.stateNode;if(h!==null&&h===r)break;g.tag===5&&_!==null&&(g=_,l?(h=ta(n,s),h!=null&&m.unshift(wa(n,h,g))):l||(h=ta(n,s),h!=null&&m.push(wa(n,h,g)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var cm=/\r\n?/g,um=/\u0000|\uFFFD/g;function Ms(e){return(typeof e=="string"?e:""+e).replace(cm,`
`).replace(um,"")}function fr(e,t,n){if(t=Ms(t),Ms(e)!==t&&n)throw Error(o(425))}function pr(){}var ql=null,Gl=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,dm=typeof clearTimeout=="function"?clearTimeout:void 0,As=typeof Promise=="function"?Promise:void 0,mm=typeof queueMicrotask=="function"?queueMicrotask:typeof As<"u"?function(e){return As.resolve(null).then(e).catch(fm)}:Xl;function fm(e){setTimeout(function(){throw e})}function Jl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ua(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ua(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ls(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),xt="__reactFiber$"+On,Na="__reactProps$"+On,Tt="__reactContainer$"+On,Zl="__reactEvents$"+On,pm="__reactListeners$"+On,gm="__reactHandles$"+On;function cn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Tt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ls(e);e!==null;){if(n=e[xt])return n;e=Ls(e)}return t}e=n,n=e.parentNode}return null}function xa(e){return e=e[xt]||e[Tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function gr(e){return e[Na]||null}var ei=[],Mn=-1;function Ht(e){return{current:e}}function we(e){0>Mn||(e.current=ei[Mn],ei[Mn]=null,Mn--)}function ye(e,t){Mn++,ei[Mn]=e.current,e.current=t}var Yt={},$e=Ht(Yt),Ke=Ht(!1),un=Yt;function An(e,t){var n=e.type.contextTypes;if(!n)return Yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Xe(e){return e=e.childContextTypes,e!=null}function vr(){we(Ke),we($e)}function js(e,t,n){if($e.current!==Yt)throw Error(o(168));ye($e,t),ye(Ke,n)}function Us(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(o(108,he(e)||"Unknown",l));return q({},n,r)}function hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yt,un=$e.current,ye($e,e),ye(Ke,Ke.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Us(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,we(Ke),we($e),ye($e,e)):we(Ke),ye(Ke,n)}var _t=null,yr=!1,ti=!1;function Is(e){_t===null?_t=[e]:_t.push(e)}function vm(e){yr=!0,Is(e)}function Qt(){if(!ti&&_t!==null){ti=!0;var e=0,t=pe;try{var n=_t;for(pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,yr=!1}catch(l){throw _t!==null&&(_t=_t.slice(e+1)),$o(kl,Qt),l}finally{pe=t,ti=!1}}return null}var Ln=[],jn=0,Er=null,wr=0,st=[],ct=0,dn=null,Dt=1,Ot="";function mn(e,t){Ln[jn++]=wr,Ln[jn++]=Er,Er=e,wr=t}function Bs(e,t,n){st[ct++]=Dt,st[ct++]=Ot,st[ct++]=dn,dn=e;var r=Dt;e=Ot;var l=32-pt(r)-1;r&=~(1<<l),n+=1;var s=32-pt(t)+l;if(30<s){var m=l-l%5;s=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Dt=1<<32-pt(t)+l|n<<l|r,Ot=s+e}else Dt=1<<s|n<<l|r,Ot=e}function ni(e){e.return!==null&&(mn(e,1),Bs(e,1,0))}function ai(e){for(;e===Er;)Er=Ln[--jn],Ln[jn]=null,wr=Ln[--jn],Ln[jn]=null;for(;e===dn;)dn=st[--ct],st[ct]=null,Ot=st[--ct],st[ct]=null,Dt=st[--ct],st[ct]=null}var rt=null,lt=null,ke=!1,vt=null;function $s(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ws(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,lt=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:Dt,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,lt=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function li(e){if(ke){var t=lt;if(t){var n=t;if(!Ws(e,t)){if(ri(e))throw Error(o(418));t=Vt(n.nextSibling);var r=rt;t&&Ws(e,t)?$s(r,n):(e.flags=e.flags&-4097|2,ke=!1,rt=e)}}else{if(ri(e))throw Error(o(418));e.flags=e.flags&-4097|2,ke=!1,rt=e}}}function Vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function Nr(e){if(e!==rt)return!1;if(!ke)return Vs(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=lt)){if(ri(e))throw Hs(),Error(o(418));for(;t;)$s(e,t),t=Vt(t.nextSibling)}if(Vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=rt?Vt(e.stateNode.nextSibling):null;return!0}function Hs(){for(var e=lt;e;)e=Vt(e.nextSibling)}function Un(){lt=rt=null,ke=!1}function ii(e){vt===null?vt=[e]:vt.push(e)}var hm=I.ReactCurrentBatchConfig;function ka(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(m){var g=l.refs;m===null?delete g[s]:g[s]=m},t._stringRef=s,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ys(e){var t=e._init;return t(e._payload)}function Qs(e){function t(b,E){if(e){var P=b.deletions;P===null?(b.deletions=[E],b.flags|=16):P.push(E)}}function n(b,E){if(!e)return null;for(;E!==null;)t(b,E),E=E.sibling;return null}function r(b,E){for(b=new Map;E!==null;)E.key!==null?b.set(E.key,E):b.set(E.index,E),E=E.sibling;return b}function l(b,E){return b=tn(b,E),b.index=0,b.sibling=null,b}function s(b,E,P){return b.index=P,e?(P=b.alternate,P!==null?(P=P.index,P<E?(b.flags|=2,E):P):(b.flags|=2,E)):(b.flags|=1048576,E)}function m(b){return e&&b.alternate===null&&(b.flags|=2),b}function g(b,E,P,B){return E===null||E.tag!==6?(E=Xi(P,b.mode,B),E.return=b,E):(E=l(E,P),E.return=b,E)}function h(b,E,P,B){var X=P.type;return X===ne?j(b,E,P.props.children,B,P.key):E!==null&&(E.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ge&&Ys(X)===E.type)?(B=l(E,P.props),B.ref=ka(b,E,P),B.return=b,B):(B=Yr(P.type,P.key,P.props,null,b.mode,B),B.ref=ka(b,E,P),B.return=b,B)}function _(b,E,P,B){return E===null||E.tag!==4||E.stateNode.containerInfo!==P.containerInfo||E.stateNode.implementation!==P.implementation?(E=Ji(P,b.mode,B),E.return=b,E):(E=l(E,P.children||[]),E.return=b,E)}function j(b,E,P,B,X){return E===null||E.tag!==7?(E=wn(P,b.mode,B,X),E.return=b,E):(E=l(E,P),E.return=b,E)}function U(b,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Xi(""+E,b.mode,P),E.return=b,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case te:return P=Yr(E.type,E.key,E.props,null,b.mode,P),P.ref=ka(b,null,E),P.return=b,P;case $:return E=Ji(E,b.mode,P),E.return=b,E;case Ge:var B=E._init;return U(b,B(E._payload),P)}if(Jn(E)||ee(E))return E=wn(E,b.mode,P,null),E.return=b,E;xr(b,E)}return null}function A(b,E,P,B){var X=E!==null?E.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return X!==null?null:g(b,E,""+P,B);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case te:return P.key===X?h(b,E,P,B):null;case $:return P.key===X?_(b,E,P,B):null;case Ge:return X=P._init,A(b,E,X(P._payload),B)}if(Jn(P)||ee(P))return X!==null?null:j(b,E,P,B,null);xr(b,P)}return null}function Y(b,E,P,B,X){if(typeof B=="string"&&B!==""||typeof B=="number")return b=b.get(P)||null,g(E,b,""+B,X);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case te:return b=b.get(B.key===null?P:B.key)||null,h(E,b,B,X);case $:return b=b.get(B.key===null?P:B.key)||null,_(E,b,B,X);case Ge:var J=B._init;return Y(b,E,P,J(B._payload),X)}if(Jn(B)||ee(B))return b=b.get(P)||null,j(E,b,B,X,null);xr(E,B)}return null}function G(b,E,P,B){for(var X=null,J=null,Z=E,ae=E=0,je=null;Z!==null&&ae<P.length;ae++){Z.index>ae?(je=Z,Z=null):je=Z.sibling;var de=A(b,Z,P[ae],B);if(de===null){Z===null&&(Z=je);break}e&&Z&&de.alternate===null&&t(b,Z),E=s(de,E,ae),J===null?X=de:J.sibling=de,J=de,Z=je}if(ae===P.length)return n(b,Z),ke&&mn(b,ae),X;if(Z===null){for(;ae<P.length;ae++)Z=U(b,P[ae],B),Z!==null&&(E=s(Z,E,ae),J===null?X=Z:J.sibling=Z,J=Z);return ke&&mn(b,ae),X}for(Z=r(b,Z);ae<P.length;ae++)je=Y(Z,b,ae,P[ae],B),je!==null&&(e&&je.alternate!==null&&Z.delete(je.key===null?ae:je.key),E=s(je,E,ae),J===null?X=je:J.sibling=je,J=je);return e&&Z.forEach(function(nn){return t(b,nn)}),ke&&mn(b,ae),X}function K(b,E,P,B){var X=ee(P);if(typeof X!="function")throw Error(o(150));if(P=X.call(P),P==null)throw Error(o(151));for(var J=X=null,Z=E,ae=E=0,je=null,de=P.next();Z!==null&&!de.done;ae++,de=P.next()){Z.index>ae?(je=Z,Z=null):je=Z.sibling;var nn=A(b,Z,de.value,B);if(nn===null){Z===null&&(Z=je);break}e&&Z&&nn.alternate===null&&t(b,Z),E=s(nn,E,ae),J===null?X=nn:J.sibling=nn,J=nn,Z=je}if(de.done)return n(b,Z),ke&&mn(b,ae),X;if(Z===null){for(;!de.done;ae++,de=P.next())de=U(b,de.value,B),de!==null&&(E=s(de,E,ae),J===null?X=de:J.sibling=de,J=de);return ke&&mn(b,ae),X}for(Z=r(b,Z);!de.done;ae++,de=P.next())de=Y(Z,b,ae,de.value,B),de!==null&&(e&&de.alternate!==null&&Z.delete(de.key===null?ae:de.key),E=s(de,E,ae),J===null?X=de:J.sibling=de,J=de);return e&&Z.forEach(function(Km){return t(b,Km)}),ke&&mn(b,ae),X}function _e(b,E,P,B){if(typeof P=="object"&&P!==null&&P.type===ne&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case te:e:{for(var X=P.key,J=E;J!==null;){if(J.key===X){if(X=P.type,X===ne){if(J.tag===7){n(b,J.sibling),E=l(J,P.props.children),E.return=b,b=E;break e}}else if(J.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ge&&Ys(X)===J.type){n(b,J.sibling),E=l(J,P.props),E.ref=ka(b,J,P),E.return=b,b=E;break e}n(b,J);break}else t(b,J);J=J.sibling}P.type===ne?(E=wn(P.props.children,b.mode,B,P.key),E.return=b,b=E):(B=Yr(P.type,P.key,P.props,null,b.mode,B),B.ref=ka(b,E,P),B.return=b,b=B)}return m(b);case $:e:{for(J=P.key;E!==null;){if(E.key===J)if(E.tag===4&&E.stateNode.containerInfo===P.containerInfo&&E.stateNode.implementation===P.implementation){n(b,E.sibling),E=l(E,P.children||[]),E.return=b,b=E;break e}else{n(b,E);break}else t(b,E);E=E.sibling}E=Ji(P,b.mode,B),E.return=b,b=E}return m(b);case Ge:return J=P._init,_e(b,E,J(P._payload),B)}if(Jn(P))return G(b,E,P,B);if(ee(P))return K(b,E,P,B);xr(b,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,E!==null&&E.tag===6?(n(b,E.sibling),E=l(E,P),E.return=b,b=E):(n(b,E),E=Xi(P,b.mode,B),E.return=b,b=E),m(b)):n(b,E)}return _e}var Fn=Qs(!0),qs=Qs(!1),kr=Ht(null),Sr=null,In=null,oi=null;function si(){oi=In=Sr=null}function ci(e){var t=kr.current;we(kr),e._currentValue=t}function ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Bn(e,t){Sr=e,oi=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(oi!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(Sr===null)throw Error(o(308));In=e,Sr.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var fn=null;function di(e){fn===null?fn=[e]:fn.push(e)}function Gs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,di(t)):(n.next=l.next,l.next=n),t.interleaved=n,Rt(e,r)}function Rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ks(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(se&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Rt(e,n)}return l=r.interleaved,l===null?(t.next=t,di(r)):(t.next=l.next,l.next=t),r.interleaved=t,Rt(e,n)}function br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cl(e,n)}}function Xs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=m:s=s.next=m,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cr(e,t,n,r){var l=e.updateQueue;qt=!1;var s=l.firstBaseUpdate,m=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var h=g,_=h.next;h.next=null,m===null?s=_:m.next=_,m=h;var j=e.alternate;j!==null&&(j=j.updateQueue,g=j.lastBaseUpdate,g!==m&&(g===null?j.firstBaseUpdate=_:g.next=_,j.lastBaseUpdate=h))}if(s!==null){var U=l.baseState;m=0,j=_=h=null,g=s;do{var A=g.lane,Y=g.eventTime;if((r&A)===A){j!==null&&(j=j.next={eventTime:Y,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var G=e,K=g;switch(A=t,Y=n,K.tag){case 1:if(G=K.payload,typeof G=="function"){U=G.call(Y,U,A);break e}U=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,A=typeof G=="function"?G.call(Y,U,A):G,A==null)break e;U=q({},U,A);break e;case 2:qt=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,A=l.effects,A===null?l.effects=[g]:A.push(g))}else Y={eventTime:Y,lane:A,tag:g.tag,payload:g.payload,callback:g.callback,next:null},j===null?(_=j=Y,h=U):j=j.next=Y,m|=A;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;A=g,g=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);if(j===null&&(h=U),l.baseState=h,l.firstBaseUpdate=_,l.lastBaseUpdate=j,t=l.shared.interleaved,t!==null){l=t;do m|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);vn|=m,e.lanes=m,e.memoizedState=U}}function Js(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(o(191,l));l.call(r)}}}var Sa={},kt=Ht(Sa),ba=Ht(Sa),Ca=Ht(Sa);function pn(e){if(e===Sa)throw Error(o(174));return e}function fi(e,t){switch(ye(Ca,t),ye(ba,e),ye(kt,Sa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}we(kt),ye(kt,t)}function $n(){we(kt),we(ba),we(Ca)}function Zs(e){pn(Ca.current);var t=pn(kt.current),n=pl(t,e.type);t!==n&&(ye(ba,e),ye(kt,n))}function pi(e){ba.current===e&&(we(kt),we(ba))}var be=Ht(0);function zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gi=[];function vi(){for(var e=0;e<gi.length;e++)gi[e]._workInProgressVersionPrimary=null;gi.length=0}var Pr=I.ReactCurrentDispatcher,hi=I.ReactCurrentBatchConfig,gn=0,Ce=null,Re=null,Ae=null,Tr=!1,za=!1,Pa=0,ym=0;function We(){throw Error(o(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function Ei(e,t,n,r,l,s){if(gn=s,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pr.current=e===null||e.memoizedState===null?xm:km,e=n(r,l),za){s=0;do{if(za=!1,Pa=0,25<=s)throw Error(o(301));s+=1,Ae=Re=null,t.updateQueue=null,Pr.current=Sm,e=n(r,l)}while(za)}if(Pr.current=Or,t=Re!==null&&Re.next!==null,gn=0,Ae=Re=Ce=null,Tr=!1,t)throw Error(o(300));return e}function wi(){var e=Pa!==0;return Pa=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Ce.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function dt(){if(Re===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Ae===null?Ce.memoizedState:Ae.next;if(t!==null)Ae=t,Re=e;else{if(e===null)throw Error(o(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ae===null?Ce.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Ta(e,t){return typeof t=="function"?t(e):t}function Ni(e){var t=dt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=Re,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var m=l.next;l.next=s.next,s.next=m}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var g=m=null,h=null,_=s;do{var j=_.lane;if((gn&j)===j)h!==null&&(h=h.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:e(r,_.action);else{var U={lane:j,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};h===null?(g=h=U,m=r):h=h.next=U,Ce.lanes|=j,vn|=j}_=_.next}while(_!==null&&_!==s);h===null?m=r:h.next=g,gt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=m,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,Ce.lanes|=s,vn|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xi(e){var t=dt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var m=l=l.next;do s=e(s,m.action),m=m.next;while(m!==l);gt(s,t.memoizedState)||(Je=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ec(){}function tc(e,t){var n=Ce,r=dt(),l=t(),s=!gt(r.memoizedState,l);if(s&&(r.memoizedState=l,Je=!0),r=r.queue,ki(rc.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,_a(9,ac.bind(null,n,r,l,t),void 0,null),Le===null)throw Error(o(349));(gn&30)!==0||nc(n,t,l)}return l}function nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ac(e,t,n,r){t.value=n,t.getSnapshot=r,lc(t)&&ic(e)}function rc(e,t,n){return n(function(){lc(t)&&ic(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function ic(e){var t=Rt(e,1);t!==null&&wt(t,e,1,-1)}function oc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},t.queue=e,e=e.dispatch=Nm.bind(null,Ce,e),[t.memoizedState,e]}function _a(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sc(){return dt().memoizedState}function _r(e,t,n,r){var l=St();Ce.flags|=e,l.memoizedState=_a(1|t,n,void 0,r===void 0?null:r)}function Dr(e,t,n,r){var l=dt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var m=Re.memoizedState;if(s=m.destroy,r!==null&&yi(r,m.deps)){l.memoizedState=_a(t,n,s,r);return}}Ce.flags|=e,l.memoizedState=_a(1|t,n,s,r)}function cc(e,t){return _r(8390656,8,e,t)}function ki(e,t){return Dr(2048,8,e,t)}function uc(e,t){return Dr(4,2,e,t)}function dc(e,t){return Dr(4,4,e,t)}function mc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fc(e,t,n){return n=n!=null?n.concat([e]):null,Dr(4,4,mc.bind(null,t,e),n)}function Si(){}function pc(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gc(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vc(e,t,n){return(gn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(gt(n,t)||(n=Yo(),Ce.lanes|=n,vn|=n,e.baseState=!0),t)}function Em(e,t){var n=pe;pe=n!==0&&4>n?n:4,e(!0);var r=hi.transition;hi.transition={};try{e(!1),t()}finally{pe=n,hi.transition=r}}function hc(){return dt().memoizedState}function wm(e,t,n){var r=Zt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e))Ec(t,n);else if(n=Gs(e,t,n,r),n!==null){var l=Qe();wt(n,e,r,l),wc(n,t,r)}}function Nm(e,t,n){var r=Zt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))Ec(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var m=t.lastRenderedState,g=s(m,n);if(l.hasEagerState=!0,l.eagerState=g,gt(g,m)){var h=t.interleaved;h===null?(l.next=l,di(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}n=Gs(e,t,l,r),n!==null&&(l=Qe(),wt(n,e,r,l),wc(n,t,r))}}function yc(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function Ec(e,t){za=Tr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wc(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cl(e,n)}}var Or={readContext:ut,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},xm={readContext:ut,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,mc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wm.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:oc,useDebugValue:Si,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=oc(!1),t=e[0];return e=Em.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,l=St();if(ke){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Le===null)throw Error(o(349));(gn&30)!==0||nc(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,cc(rc.bind(null,r,s,e),[e]),r.flags|=2048,_a(9,ac.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=St(),t=Le.identifierPrefix;if(ke){var n=Ot,r=Dt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Pa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ym++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},km={readContext:ut,useCallback:pc,useContext:ut,useEffect:ki,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:dc,useMemo:gc,useReducer:Ni,useRef:sc,useState:function(){return Ni(Ta)},useDebugValue:Si,useDeferredValue:function(e){var t=dt();return vc(t,Re.memoizedState,e)},useTransition:function(){var e=Ni(Ta)[0],t=dt().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:hc,unstable_isNewReconciler:!1},Sm={readContext:ut,useCallback:pc,useContext:ut,useEffect:ki,useImperativeHandle:fc,useInsertionEffect:uc,useLayoutEffect:dc,useMemo:gc,useReducer:xi,useRef:sc,useState:function(){return xi(Ta)},useDebugValue:Si,useDeferredValue:function(e){var t=dt();return Re===null?t.memoizedState=e:vc(t,Re.memoizedState,e)},useTransition:function(){var e=xi(Ta)[0],t=dt().memoizedState;return[e,t]},useMutableSource:ec,useSyncExternalStore:tc,useId:hc,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rr={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),l=Zt(e),s=Mt(r,l);s.payload=t,n!=null&&(s.callback=n),t=Gt(e,s,l),t!==null&&(wt(t,e,l,r),br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),l=Zt(e),s=Mt(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Gt(e,s,l),t!==null&&(wt(t,e,l,r),br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Zt(e),l=Mt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Gt(e,l,r),t!==null&&(wt(t,e,r,n),br(t,e,r))}};function Nc(e,t,n,r,l,s,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,m):t.prototype&&t.prototype.isPureReactComponent?!va(n,r)||!va(l,s):!0}function xc(e,t,n){var r=!1,l=Yt,s=t.contextType;return typeof s=="object"&&s!==null?s=ut(s):(l=Xe(t)?un:$e.current,r=t.contextTypes,s=(r=r!=null)?An(e,l):Yt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Rr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Rr.enqueueReplaceState(t,t.state,null)}function Ci(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},mi(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=ut(s):(s=Xe(t)?un:$e.current,l.context=An(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(bi(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Rr.enqueueReplaceState(l,l.state,null),Cr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=ce(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function zi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bm=typeof WeakMap=="function"?WeakMap:Map;function Sc(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ir||(Ir=!0,Wi=r),Pi(e,t)},n}function bc(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Pi(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function Cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Fm.bind(null,e,t,n),t.then(e,e))}function zc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pc(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Cm=I.ReactCurrentOwner,Je=!1;function Ye(e,t,n,r){t.child=e===null?qs(t,null,n,r):Fn(t,e.child,n,r)}function Tc(e,t,n,r,l){n=n.render;var s=t.ref;return Bn(t,l),r=Ei(e,t,n,r,s,l),n=wi(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,At(e,t,l)):(ke&&n&&ni(t),t.flags|=1,Ye(e,t,r,l),t.child)}function _c(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ki(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Dc(e,t,s,r,l)):(e=Yr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&l)===0){var m=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(m,r)&&e.ref===t.ref)return At(e,t,l)}return t.flags|=1,e=tn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Dc(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if(va(s,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=s,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,At(e,t,l)}return Ti(e,t,n,r,l)}function Oc(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Hn,it),it|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Hn,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Hn,it),it|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ye(Hn,it),it|=r;return Ye(e,t,l,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var s=Xe(n)?un:$e.current;return s=An(t,s),Bn(t,l),n=Ei(e,t,n,r,s,l),r=wi(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,At(e,t,l)):(ke&&r&&ni(t),t.flags|=1,Ye(e,t,n,l),t.child)}function Mc(e,t,n,r,l){if(Xe(n)){var s=!0;hr(t)}else s=!1;if(Bn(t,l),t.stateNode===null)Ar(e,t),xc(t,n,r),Ci(t,n,r,l),r=!0;else if(e===null){var m=t.stateNode,g=t.memoizedProps;m.props=g;var h=m.context,_=n.contextType;typeof _=="object"&&_!==null?_=ut(_):(_=Xe(n)?un:$e.current,_=An(t,_));var j=n.getDerivedStateFromProps,U=typeof j=="function"||typeof m.getSnapshotBeforeUpdate=="function";U||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==r||h!==_)&&kc(t,m,r,_),qt=!1;var A=t.memoizedState;m.state=A,Cr(t,r,m,l),h=t.memoizedState,g!==r||A!==h||Ke.current||qt?(typeof j=="function"&&(bi(t,n,j,r),h=t.memoizedState),(g=qt||Nc(t,n,g,r,A,h,_))?(U||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),m.props=r,m.state=h,m.context=_,r=g):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{m=t.stateNode,Ks(e,t),g=t.memoizedProps,_=t.type===t.elementType?g:ht(t.type,g),m.props=_,U=t.pendingProps,A=m.context,h=n.contextType,typeof h=="object"&&h!==null?h=ut(h):(h=Xe(n)?un:$e.current,h=An(t,h));var Y=n.getDerivedStateFromProps;(j=typeof Y=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(g!==U||A!==h)&&kc(t,m,r,h),qt=!1,A=t.memoizedState,m.state=A,Cr(t,r,m,l);var G=t.memoizedState;g!==U||A!==G||Ke.current||qt?(typeof Y=="function"&&(bi(t,n,Y,r),G=t.memoizedState),(_=qt||Nc(t,n,_,r,A,G,h)||!1)?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(r,G,h),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(r,G,h)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=G),m.props=r,m.state=G,m.context=h,r=_):(typeof m.componentDidUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),r=!1)}return _i(e,t,n,r,s,l)}function _i(e,t,n,r,l,s){Rc(e,t);var m=(t.flags&128)!==0;if(!r&&!m)return l&&Fs(t,n,!1),At(e,t,s);r=t.stateNode,Cm.current=t;var g=m&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&m?(t.child=Fn(t,e.child,null,s),t.child=Fn(t,null,g,s)):Ye(e,t,g,s),t.memoizedState=r.state,l&&Fs(t,n,!0),t.child}function Ac(e){var t=e.stateNode;t.pendingContext?js(e,t.pendingContext,t.pendingContext!==t.context):t.context&&js(e,t.context,!1),fi(e,t.containerInfo)}function Lc(e,t,n,r,l){return Un(),ii(l),t.flags|=256,Ye(e,t,n,r),t.child}var Di={dehydrated:null,treeContext:null,retryLane:0};function Oi(e){return{baseLanes:e,cachePool:null,transitions:null}}function jc(e,t,n){var r=t.pendingProps,l=be.current,s=!1,m=(t.flags&128)!==0,g;if((g=m)||(g=e!==null&&e.memoizedState===null?!1:(l&2)!==0),g?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ye(be,l&1),e===null)return li(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=r.children,e=r.fallback,s?(r=t.mode,s=t.child,m={mode:"hidden",children:m},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=m):s=Qr(m,r,0,null),e=wn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Oi(n),t.memoizedState=Di,e):Ri(t,m));if(l=e.memoizedState,l!==null&&(g=l.dehydrated,g!==null))return zm(e,t,m,r,g,l,n);if(s){s=r.fallback,m=t.mode,l=e.child,g=l.sibling;var h={mode:"hidden",children:r.children};return(m&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=tn(l,h),r.subtreeFlags=l.subtreeFlags&14680064),g!==null?s=tn(g,s):(s=wn(s,m,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,m=e.child.memoizedState,m=m===null?Oi(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},s.memoizedState=m,s.childLanes=e.childLanes&~n,t.memoizedState=Di,r}return s=e.child,e=s.sibling,r=tn(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ri(e,t){return t=Qr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&ii(r),Fn(t,e.child,null,n),e=Ri(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zm(e,t,n,r,l,s,m){if(n)return t.flags&256?(t.flags&=-257,r=zi(Error(o(422))),Mr(e,t,m,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=Qr({mode:"visible",children:r.children},l,0,null),s=wn(s,l,m,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,m),t.child.memoizedState=Oi(m),t.memoizedState=Di,s);if((t.mode&1)===0)return Mr(e,t,m,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var g=r.dgst;return r=g,s=Error(o(419)),r=zi(s,r,void 0),Mr(e,t,m,r)}if(g=(m&e.childLanes)!==0,Je||g){if(r=Le,r!==null){switch(m&-m){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|m))!==0?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Rt(e,l),wt(r,e,l,-1))}return Gi(),r=zi(Error(o(421))),Mr(e,t,m,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Im.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,lt=Vt(l.nextSibling),rt=t,ke=!0,vt=null,e!==null&&(st[ct++]=Dt,st[ct++]=Ot,st[ct++]=dn,Dt=e.id,Ot=e.overflow,dn=t),t=Ri(t,r.children),t.flags|=4096,t)}function Uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ui(e.return,t,n)}function Mi(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function Fc(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(Ye(e,t,r.children,n),r=be.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,n,t);else if(e.tag===19)Uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye(be,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Mi(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Mi(t,!0,n,null,s);break;case"together":Mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ar(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pm(e,t,n){switch(t.tag){case 3:Ac(t),Un();break;case 5:Zs(t);break;case 1:Xe(t.type)&&hr(t);break;case 4:fi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ye(kr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye(be,be.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?jc(e,t,n):(ye(be,be.current&1),e=At(e,t,n),e!==null?e.sibling:null);ye(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,Oc(e,t,n)}return At(e,t,n)}var Ic,Ai,Bc,$c;Ic=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ai=function(){},Bc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,pn(kt.current);var s=null;switch(n){case"input":l=ul(e,l),r=ul(e,r),s=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":l=fl(e,l),r=fl(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pr)}gl(n,r);var m;n=null;for(_ in l)if(!r.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var g=l[_];for(m in g)g.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(u.hasOwnProperty(_)?s||(s=[]):(s=s||[]).push(_,null));for(_ in r){var h=r[_];if(g=l?.[_],r.hasOwnProperty(_)&&h!==g&&(h!=null||g!=null))if(_==="style")if(g){for(m in g)!g.hasOwnProperty(m)||h&&h.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in h)h.hasOwnProperty(m)&&g[m]!==h[m]&&(n||(n={}),n[m]=h[m])}else n||(s||(s=[]),s.push(_,n)),n=h;else _==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,g=g?g.__html:void 0,h!=null&&g!==h&&(s=s||[]).push(_,h)):_==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(_,""+h):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(u.hasOwnProperty(_)?(h!=null&&_==="onScroll"&&Ee("scroll",e),s||g===h||(s=[])):(s=s||[]).push(_,h))}n&&(s=s||[]).push("style",n);var _=s;(t.updateQueue=_)&&(t.flags|=4)}},$c=function(e,t,n,r){n!==r&&(t.flags|=4)};function Da(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tm(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Xe(t.type)&&vr(),Ve(t),null;case 3:return r=t.stateNode,$n(),we(Ke),we($e),vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(Yi(vt),vt=null))),Ai(e,t),Ve(t),null;case 5:pi(t);var l=pn(Ca.current);if(n=t.type,e!==null&&t.stateNode!=null)Bc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}if(e=pn(kt.current),Nr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[xt]=t,r[Na]=s,e=(t.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(l=0;l<ya.length;l++)Ee(ya[l],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":xo(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":bo(r,s),Ee("invalid",r)}gl(n,s),l=null;for(var m in s)if(s.hasOwnProperty(m)){var g=s[m];m==="children"?typeof g=="string"?r.textContent!==g&&(s.suppressHydrationWarning!==!0&&fr(r.textContent,g,e),l=["children",g]):typeof g=="number"&&r.textContent!==""+g&&(s.suppressHydrationWarning!==!0&&fr(r.textContent,g,e),l=["children",""+g]):u.hasOwnProperty(m)&&g!=null&&m==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Va(r),So(r,s,!0);break;case"textarea":Va(r),zo(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{m=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Po(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=m.createElement(n,{is:r.is}):(e=m.createElement(n),n==="select"&&(m=e,r.multiple?m.multiple=!0:r.size&&(m.size=r.size))):e=m.createElementNS(e,n),e[xt]=t,e[Na]=r,Ic(e,t,!1,!1),t.stateNode=e;e:{switch(m=vl(n,r),n){case"dialog":Ee("cancel",e),Ee("close",e),l=r;break;case"iframe":case"object":case"embed":Ee("load",e),l=r;break;case"video":case"audio":for(l=0;l<ya.length;l++)Ee(ya[l],e);l=r;break;case"source":Ee("error",e),l=r;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),l=r;break;case"details":Ee("toggle",e),l=r;break;case"input":xo(e,r),l=ul(e,r),Ee("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),Ee("invalid",e);break;case"textarea":bo(e,r),l=fl(e,r),Ee("invalid",e);break;default:l=r}gl(n,l),g=l;for(s in g)if(g.hasOwnProperty(s)){var h=g[s];s==="style"?Do(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&To(e,h)):s==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Zn(e,h):typeof h=="number"&&Zn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&Ee("scroll",e):h!=null&&F(e,s,h,m))}switch(n){case"input":Va(e),So(e,r,!1);break;case"textarea":Va(e),zo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fe(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?kn(e,!!r.multiple,s,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=pr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=pn(Ca.current),pn(kt.current),Nr(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(s=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ve(t),null;case 13:if(we(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&lt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hs(),Un(),t.flags|=98560,s=!1;else if(s=Nr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[xt]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),s=!1}else vt!==null&&(Yi(vt),vt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Me===0&&(Me=3):Gi())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return $n(),Ai(e,t),e===null&&Ea(t.stateNode.containerInfo),Ve(t),null;case 10:return ci(t.type._context),Ve(t),null;case 17:return Xe(t.type)&&vr(),Ve(t),null;case 19:if(we(be),s=t.memoizedState,s===null)return Ve(t),null;if(r=(t.flags&128)!==0,m=s.rendering,m===null)if(r)Da(s,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=zr(e),m!==null){for(t.flags|=128,Da(s,!1),r=m.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,m=s.alternate,m===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=m.childLanes,s.lanes=m.lanes,s.child=m.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=m.memoizedProps,s.memoizedState=m.memoizedState,s.updateQueue=m.updateQueue,s.type=m.type,e=m.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye(be,be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Te()>Yn&&(t.flags|=128,r=!0,Da(s,!1),t.lanes=4194304)}else{if(!r)if(e=zr(m),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!m.alternate&&!ke)return Ve(t),null}else 2*Te()-s.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,Da(s,!1),t.lanes=4194304);s.isBackwards?(m.sibling=t.child,t.child=m):(n=s.last,n!==null?n.sibling=m:t.child=m,s.last=m)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Te(),t.sibling=null,n=be.current,ye(be,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return qi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(it&1073741824)!==0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function _m(e,t){switch(ai(t),t.tag){case 1:return Xe(t.type)&&vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),we(Ke),we($e),vi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return pi(t),null;case 13:if(we(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(be),null;case 4:return $n(),null;case 10:return ci(t.type._context),null;case 22:case 23:return qi(),null;case 24:return null;default:return null}}var Lr=!1,He=!1,Dm=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Li(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var Wc=!1;function Om(e,t){if(ql=nr,e=Ns(),Il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var m=0,g=-1,h=-1,_=0,j=0,U=e,A=null;t:for(;;){for(var Y;U!==n||l!==0&&U.nodeType!==3||(g=m+l),U!==s||r!==0&&U.nodeType!==3||(h=m+r),U.nodeType===3&&(m+=U.nodeValue.length),(Y=U.firstChild)!==null;)A=U,U=Y;for(;;){if(U===e)break t;if(A===n&&++_===l&&(g=m),A===s&&++j===r&&(h=m),(Y=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=Y}n=g===-1||h===-1?null:{start:g,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gl={focusedElem:e,selectionRange:n},nr=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var G=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(G!==null){var K=G.memoizedProps,_e=G.memoizedState,b=t.stateNode,E=b.getSnapshotBeforeUpdate(t.elementType===t.type?K:ht(t.type,K),_e);b.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(B){Pe(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return G=Wc,Wc=!1,G}function Oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&Li(t,n,s)}l=l.next}while(l!==r)}}function jr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Vc(e){var t=e.alternate;t!==null&&(e.alternate=null,Vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Na],delete t[Zl],delete t[pm],delete t[gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hc(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pr));else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}function Fi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fi(e,t,n),e=e.sibling;e!==null;)Fi(e,t,n),e=e.sibling}var Fe=null,yt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Qc(e,t,n),n=n.sibling}function Qc(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:He||Vn(n,t);case 6:var r=Fe,l=yt;Fe=null,Kt(e,t,n),Fe=r,yt=l,Fe!==null&&(yt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(yt?(e=Fe,n=n.stateNode,e.nodeType===8?Jl(e.parentNode,n):e.nodeType===1&&Jl(e,n),ua(e)):Jl(Fe,n.stateNode));break;case 4:r=Fe,l=yt,Fe=n.stateNode.containerInfo,yt=!0,Kt(e,t,n),Fe=r,yt=l;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,m=s.destroy;s=s.tag,m!==void 0&&((s&2)!==0||(s&4)!==0)&&Li(n,t,m),l=l.next}while(l!==r)}Kt(e,t,n);break;case 1:if(!He&&(Vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(g){Pe(n,t,g)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Kt(e,t,n),He=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Dm),t.forEach(function(r){var l=Bm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,m=t,g=m;e:for(;g!==null;){switch(g.tag){case 5:Fe=g.stateNode,yt=!1;break e;case 3:Fe=g.stateNode.containerInfo,yt=!0;break e;case 4:Fe=g.stateNode.containerInfo,yt=!0;break e}g=g.return}if(Fe===null)throw Error(o(160));Qc(s,m,l),Fe=null,yt=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(_){Pe(l,t,_)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),bt(e),r&4){try{Oa(3,e,e.return),jr(3,e)}catch(K){Pe(e,e.return,K)}try{Oa(5,e,e.return)}catch(K){Pe(e,e.return,K)}}break;case 1:Et(t,e),bt(e),r&512&&n!==null&&Vn(n,n.return);break;case 5:if(Et(t,e),bt(e),r&512&&n!==null&&Vn(n,n.return),e.flags&32){var l=e.stateNode;try{Zn(l,"")}catch(K){Pe(e,e.return,K)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,m=n!==null?n.memoizedProps:s,g=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{g==="input"&&s.type==="radio"&&s.name!=null&&ko(l,s),vl(g,m);var _=vl(g,s);for(m=0;m<h.length;m+=2){var j=h[m],U=h[m+1];j==="style"?Do(l,U):j==="dangerouslySetInnerHTML"?To(l,U):j==="children"?Zn(l,U):F(l,j,U,_)}switch(g){case"input":dl(l,s);break;case"textarea":Co(l,s);break;case"select":var A=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var Y=s.value;Y!=null?kn(l,!!s.multiple,Y,!1):A!==!!s.multiple&&(s.defaultValue!=null?kn(l,!!s.multiple,s.defaultValue,!0):kn(l,!!s.multiple,s.multiple?[]:"",!1))}l[Na]=s}catch(K){Pe(e,e.return,K)}}break;case 6:if(Et(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(o(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(K){Pe(e,e.return,K)}}break;case 3:if(Et(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(t.containerInfo)}catch(K){Pe(e,e.return,K)}break;case 4:Et(t,e),bt(e);break;case 13:Et(t,e),bt(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||($i=Te())),r&4&&qc(e);break;case 22:if(j=n!==null&&n.memoizedState!==null,e.mode&1?(He=(_=He)||j,Et(t,e),He=_):Et(t,e),bt(e),r&8192){if(_=e.memoizedState!==null,(e.stateNode.isHidden=_)&&!j&&(e.mode&1)!==0)for(Q=e,j=e.child;j!==null;){for(U=Q=j;Q!==null;){switch(A=Q,Y=A.child,A.tag){case 0:case 11:case 14:case 15:Oa(4,A,A.return);break;case 1:Vn(A,A.return);var G=A.stateNode;if(typeof G.componentWillUnmount=="function"){r=A,n=A.return;try{t=r,G.props=t.memoizedProps,G.state=t.memoizedState,G.componentWillUnmount()}catch(K){Pe(r,n,K)}}break;case 5:Vn(A,A.return);break;case 22:if(A.memoizedState!==null){Jc(U);continue}}Y!==null?(Y.return=A,Q=Y):Jc(U)}j=j.sibling}e:for(j=null,U=e;;){if(U.tag===5){if(j===null){j=U;try{l=U.stateNode,_?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(g=U.stateNode,h=U.memoizedProps.style,m=h!=null&&h.hasOwnProperty("display")?h.display:null,g.style.display=_o("display",m))}catch(K){Pe(e,e.return,K)}}}else if(U.tag===6){if(j===null)try{U.stateNode.nodeValue=_?"":U.memoizedProps}catch(K){Pe(e,e.return,K)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;j===U&&(j=null),U=U.return}j===U&&(j=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Et(t,e),bt(e),r&4&&qc(e);break;case 21:break;default:Et(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hc(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Zn(l,""),r.flags&=-33);var s=Yc(e);Fi(e,s,l);break;case 3:case 4:var m=r.stateNode.containerInfo,g=Yc(e);Ui(e,g,m);break;default:throw Error(o(161))}}catch(h){Pe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rm(e,t,n){Q=e,Kc(e)}function Kc(e,t,n){for(var r=(e.mode&1)!==0;Q!==null;){var l=Q,s=l.child;if(l.tag===22&&r){var m=l.memoizedState!==null||Lr;if(!m){var g=l.alternate,h=g!==null&&g.memoizedState!==null||He;g=Lr;var _=He;if(Lr=m,(He=h)&&!_)for(Q=l;Q!==null;)m=Q,h=m.child,m.tag===22&&m.memoizedState!==null?Zc(l):h!==null?(h.return=m,Q=h):Zc(l);for(;s!==null;)Q=s,Kc(s),s=s.sibling;Q=l,Lr=g,He=_}Xc(e)}else(l.subtreeFlags&8772)!==0&&s!==null?(s.return=l,Q=s):Xc(e)}}function Xc(e){for(;Q!==null;){var t=Q;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:He||jr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Js(t,s,r);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Js(t,m,n)}break;case 5:var g=t.stateNode;if(n===null&&t.flags&4){n=g;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var _=t.alternate;if(_!==null){var j=_.memoizedState;if(j!==null){var U=j.dehydrated;U!==null&&ua(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}He||t.flags&512&&ji(t)}catch(A){Pe(t,t.return,A)}}if(t===e){Q=null;break}if(n=t.sibling,n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Jc(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Q=n;break}Q=t.return}}function Zc(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jr(4,t)}catch(h){Pe(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(h){Pe(t,l,h)}}var s=t.return;try{ji(t)}catch(h){Pe(t,s,h)}break;case 5:var m=t.return;try{ji(t)}catch(h){Pe(t,m,h)}}}catch(h){Pe(t,t.return,h)}if(t===e){Q=null;break}var g=t.sibling;if(g!==null){g.return=t.return,Q=g;break}Q=t.return}}var Mm=Math.ceil,Ur=I.ReactCurrentDispatcher,Ii=I.ReactCurrentOwner,mt=I.ReactCurrentBatchConfig,se=0,Le=null,Oe=null,Ie=0,it=0,Hn=Ht(0),Me=0,Ra=null,vn=0,Fr=0,Bi=0,Ma=null,Ze=null,$i=0,Yn=1/0,Lt=null,Ir=!1,Wi=null,Xt=null,Br=!1,Jt=null,$r=0,Aa=0,Vi=null,Wr=-1,Vr=0;function Qe(){return(se&6)!==0?Te():Wr!==-1?Wr:Wr=Te()}function Zt(e){return(e.mode&1)===0?1:(se&2)!==0&&Ie!==0?Ie&-Ie:hm.transition!==null?(Vr===0&&(Vr=Yo()),Vr):(e=pe,e!==0||(e=window.event,e=e===void 0?16:ts(e.type)),e)}function wt(e,t,n,r){if(50<Aa)throw Aa=0,Vi=null,Error(o(185));la(e,n,r),((se&2)===0||e!==Le)&&(e===Le&&((se&2)===0&&(Fr|=n),Me===4&&en(e,Ie)),et(e,r),n===1&&se===0&&(t.mode&1)===0&&(Yn=Te()+500,yr&&Qt()))}function et(e,t){var n=e.callbackNode;hd(e,t);var r=Za(e,e===Le?Ie:0);if(r===0)n!==null&&Wo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wo(n),t===1)e.tag===0?vm(tu.bind(null,e)):Is(tu.bind(null,e)),mm(function(){(se&6)===0&&Qt()}),n=null;else{switch(Qo(r)){case 1:n=kl;break;case 4:n=Vo;break;case 16:n=Ga;break;case 536870912:n=Ho;break;default:n=Ga}n=cu(n,eu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function eu(e,t){if(Wr=-1,Vr=0,(se&6)!==0)throw Error(o(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=Za(e,e===Le?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Hr(e,r);else{t=r;var l=se;se|=2;var s=au();(Le!==e||Ie!==t)&&(Lt=null,Yn=Te()+500,yn(e,t));do try{jm();break}catch(g){nu(e,g)}while(!0);si(),Ur.current=s,se=l,Oe!==null?t=0:(Le=null,Ie=0,t=Me)}if(t!==0){if(t===2&&(l=Sl(e),l!==0&&(r=l,t=Hi(e,l))),t===1)throw n=Ra,yn(e,0),en(e,r),et(e,Te()),n;if(t===6)en(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Am(l)&&(t=Hr(e,r),t===2&&(s=Sl(e),s!==0&&(r=s,t=Hi(e,s))),t===1))throw n=Ra,yn(e,0),en(e,r),et(e,Te()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:En(e,Ze,Lt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=$i+500-Te(),10<t)){if(Za(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Xl(En.bind(null,e,Ze,Lt),t);break}En(e,Ze,Lt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var m=31-pt(r);s=1<<m,m=t[m],m>l&&(l=m),r&=~s}if(r=l,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mm(r/1960))-r,10<r){e.timeoutHandle=Xl(En.bind(null,e,Ze,Lt),r);break}En(e,Ze,Lt);break;case 5:En(e,Ze,Lt);break;default:throw Error(o(329))}}}return et(e,Te()),e.callbackNode===n?eu.bind(null,e):null}function Hi(e,t){var n=Ma;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Hr(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&Yi(t)),e}function Yi(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Am(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!gt(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Bi,t&=~Fr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function tu(e){if((se&6)!==0)throw Error(o(327));Qn();var t=Za(e,0);if((t&1)===0)return et(e,Te()),null;var n=Hr(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Hi(e,r))}if(n===1)throw n=Ra,yn(e,0),en(e,t),et(e,Te()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Ze,Lt),et(e,Te()),null}function Qi(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Yn=Te()+500,yr&&Qt())}}function hn(e){Jt!==null&&Jt.tag===0&&(se&6)===0&&Qn();var t=se;se|=1;var n=mt.transition,r=pe;try{if(mt.transition=null,pe=1,e)return e()}finally{pe=r,mt.transition=n,se=t,(se&6)===0&&Qt()}}function qi(){it=Hn.current,we(Hn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dm(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vr();break;case 3:$n(),we(Ke),we($e),vi();break;case 5:pi(r);break;case 4:$n();break;case 13:we(be);break;case 19:we(be);break;case 10:ci(r.type._context);break;case 22:case 23:qi()}n=n.return}if(Le=e,Oe=e=tn(e.current,null),Ie=it=t,Me=0,Ra=null,Bi=Fr=vn=0,Ze=Ma=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var m=s.next;s.next=l,r.next=m}n.pending=r}fn=null}return e}function nu(e,t){do{var n=Oe;try{if(si(),Pr.current=Or,Tr){for(var r=Ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Tr=!1}if(gn=0,Ae=Re=Ce=null,za=!1,Pa=0,Ii.current=null,n===null||n.return===null){Me=1,Ra=t,Oe=null;break}e:{var s=e,m=n.return,g=n,h=t;if(t=Ie,g.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=h,j=g,U=j.tag;if((j.mode&1)===0&&(U===0||U===11||U===15)){var A=j.alternate;A?(j.updateQueue=A.updateQueue,j.memoizedState=A.memoizedState,j.lanes=A.lanes):(j.updateQueue=null,j.memoizedState=null)}var Y=zc(m);if(Y!==null){Y.flags&=-257,Pc(Y,m,g,s,t),Y.mode&1&&Cc(s,_,t),t=Y,h=_;var G=t.updateQueue;if(G===null){var K=new Set;K.add(h),t.updateQueue=K}else G.add(h);break e}else{if((t&1)===0){Cc(s,_,t),Gi();break e}h=Error(o(426))}}else if(ke&&g.mode&1){var _e=zc(m);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),Pc(_e,m,g,s,t),ii(Wn(h,g));break e}}s=h=Wn(h,g),Me!==4&&(Me=2),Ma===null?Ma=[s]:Ma.push(s),s=m;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var b=Sc(s,h,t);Xs(s,b);break e;case 1:g=h;var E=s.type,P=s.stateNode;if((s.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(Xt===null||!Xt.has(P)))){s.flags|=65536,t&=-t,s.lanes|=t;var B=bc(s,g,t);Xs(s,B);break e}}s=s.return}while(s!==null)}lu(n)}catch(X){t=X,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function au(){var e=Ur.current;return Ur.current=Or,e===null?Or:e}function Gi(){(Me===0||Me===3||Me===2)&&(Me=4),Le===null||(vn&268435455)===0&&(Fr&268435455)===0||en(Le,Ie)}function Hr(e,t){var n=se;se|=2;var r=au();(Le!==e||Ie!==t)&&(Lt=null,yn(e,t));do try{Lm();break}catch(l){nu(e,l)}while(!0);if(si(),se=n,Ur.current=r,Oe!==null)throw Error(o(261));return Le=null,Ie=0,Me}function Lm(){for(;Oe!==null;)ru(Oe)}function jm(){for(;Oe!==null&&!sd();)ru(Oe)}function ru(e){var t=su(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?lu(e):Oe=t,Ii.current=null}function lu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Tm(n,t,it),n!==null){Oe=n;return}}else{if(n=_m(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Oe=null;return}}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Me===0&&(Me=5)}function En(e,t,n){var r=pe,l=mt.transition;try{mt.transition=null,pe=1,Um(e,t,n,r)}finally{mt.transition=l,pe=r}return null}function Um(e,t,n,r){do Qn();while(Jt!==null);if((se&6)!==0)throw Error(o(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(yd(e,s),e===Le&&(Oe=Le=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Br||(Br=!0,cu(Ga,function(){return Qn(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=mt.transition,mt.transition=null;var m=pe;pe=1;var g=se;se|=4,Ii.current=null,Om(e,n),Gc(n,e),rm(Gl),nr=!!ql,Gl=ql=null,e.current=n,Rm(n),cd(),se=g,pe=m,mt.transition=s}else e.current=n;if(Br&&(Br=!1,Jt=e,$r=l),s=e.pendingLanes,s===0&&(Xt=null),md(n.stateNode),et(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ir)throw Ir=!1,e=Wi,Wi=null,e;return($r&1)!==0&&e.tag!==0&&Qn(),s=e.pendingLanes,(s&1)!==0?e===Vi?Aa++:(Aa=0,Vi=e):Aa=0,Qt(),null}function Qn(){if(Jt!==null){var e=Qo($r),t=mt.transition,n=pe;try{if(mt.transition=null,pe=16>e?16:e,Jt===null)var r=!1;else{if(e=Jt,Jt=null,$r=0,(se&6)!==0)throw Error(o(331));var l=se;for(se|=4,Q=e.current;Q!==null;){var s=Q,m=s.child;if((Q.flags&16)!==0){var g=s.deletions;if(g!==null){for(var h=0;h<g.length;h++){var _=g[h];for(Q=_;Q!==null;){var j=Q;switch(j.tag){case 0:case 11:case 15:Oa(8,j,s)}var U=j.child;if(U!==null)U.return=j,Q=U;else for(;Q!==null;){j=Q;var A=j.sibling,Y=j.return;if(Vc(j),j===_){Q=null;break}if(A!==null){A.return=Y,Q=A;break}Q=Y}}}var G=s.alternate;if(G!==null){var K=G.child;if(K!==null){G.child=null;do{var _e=K.sibling;K.sibling=null,K=_e}while(K!==null)}}Q=s}}if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,Q=m;else e:for(;Q!==null;){if(s=Q,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Oa(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Q=b;break e}Q=s.return}}var E=e.current;for(Q=E;Q!==null;){m=Q;var P=m.child;if((m.subtreeFlags&2064)!==0&&P!==null)P.return=m,Q=P;else e:for(m=E;Q!==null;){if(g=Q,(g.flags&2048)!==0)try{switch(g.tag){case 0:case 11:case 15:jr(9,g)}}catch(X){Pe(g,g.return,X)}if(g===m){Q=null;break e}var B=g.sibling;if(B!==null){B.return=g.return,Q=B;break e}Q=g.return}}if(se=l,Qt(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Ka,e)}catch{}r=!0}return r}finally{pe=n,mt.transition=t}}return!1}function iu(e,t,n){t=Wn(n,t),t=Sc(e,t,1),e=Gt(e,t,1),t=Qe(),e!==null&&(la(e,1,t),et(e,t))}function Pe(e,t,n){if(e.tag===3)iu(e,e,n);else for(;t!==null;){if(t.tag===3){iu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=Wn(n,e),e=bc(t,e,1),t=Gt(t,e,1),e=Qe(),t!==null&&(la(t,1,e),et(t,e));break}}t=t.return}}function Fm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Le===e&&(Ie&n)===n&&(Me===4||Me===3&&(Ie&130023424)===Ie&&500>Te()-$i?yn(e,0):Bi|=n),et(e,t)}function ou(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ja,Ja<<=1,(Ja&130023424)===0&&(Ja=4194304)));var n=Qe();e=Rt(e,t),e!==null&&(la(e,t,n),et(e,n))}function Im(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ou(e,n)}function Bm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),ou(e,n)}var su;su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,Pm(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,ke&&(t.flags&1048576)!==0&&Bs(t,wr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ar(e,t),e=t.pendingProps;var l=An(t,$e.current);Bn(t,n),l=Ei(null,t,r,e,l,n);var s=wi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(s=!0,hr(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mi(t),l.updater=Rr,t.stateNode=l,l._reactInternals=t,Ci(t,r,e,n),t=_i(null,t,r,!0,s,n)):(t.tag=0,ke&&s&&ni(t),Ye(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ar(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Wm(r),e=ht(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=Mc(null,t,r,e,n);break e;case 11:t=Tc(null,t,r,e,n);break e;case 14:t=_c(null,t,r,ht(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Mc(e,t,r,l,n);case 3:e:{if(Ac(t),e===null)throw Error(o(387));r=t.pendingProps,s=t.memoizedState,l=s.element,Ks(e,t),Cr(t,r,null,n);var m=t.memoizedState;if(r=m.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=Wn(Error(o(423)),t),t=Lc(e,t,r,n,l);break e}else if(r!==l){l=Wn(Error(o(424)),t),t=Lc(e,t,r,n,l);break e}else for(lt=Vt(t.stateNode.containerInfo.firstChild),rt=t,ke=!0,vt=null,n=qs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===l){t=At(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Zs(t),e===null&&li(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,m=l.children,Kl(r,l)?m=null:s!==null&&Kl(r,s)&&(t.flags|=32),Rc(e,t),Ye(e,t,m,n),t.child;case 6:return e===null&&li(t),null;case 13:return jc(e,t,n);case 4:return fi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Tc(e,t,r,l,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,m=l.value,ye(kr,r._currentValue),r._currentValue=m,s!==null)if(gt(s.value,m)){if(s.children===l.children&&!Ke.current){t=At(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var g=s.dependencies;if(g!==null){m=s.child;for(var h=g.firstContext;h!==null;){if(h.context===r){if(s.tag===1){h=Mt(-1,n&-n),h.tag=2;var _=s.updateQueue;if(_!==null){_=_.shared;var j=_.pending;j===null?h.next=h:(h.next=j.next,j.next=h),_.pending=h}}s.lanes|=n,h=s.alternate,h!==null&&(h.lanes|=n),ui(s.return,n,t),g.lanes|=n;break}h=h.next}}else if(s.tag===10)m=s.type===t.type?null:s.child;else if(s.tag===18){if(m=s.return,m===null)throw Error(o(341));m.lanes|=n,g=m.alternate,g!==null&&(g.lanes|=n),ui(m,n,t),m=s.sibling}else m=s.child;if(m!==null)m.return=s;else for(m=s;m!==null;){if(m===t){m=null;break}if(s=m.sibling,s!==null){s.return=m.return,m=s;break}m=m.return}s=m}Ye(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Bn(t,n),l=ut(l),r=r(l),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,l=ht(r,t.pendingProps),l=ht(r.type,l),_c(e,t,r,l,n);case 15:return Dc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ht(r,l),Ar(e,t),t.tag=1,Xe(r)?(e=!0,hr(t)):e=!1,Bn(t,n),xc(t,r,l),Ci(t,r,l,n),_i(null,t,r,!0,e,n);case 19:return Fc(e,t,n);case 22:return Oc(e,t,n)}throw Error(o(156,t.tag))};function cu(e,t){return $o(e,t)}function $m(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,r){return new $m(e,t,n,r)}function Ki(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wm(e){if(typeof e=="function")return Ki(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===Ne)return 14}return 2}function tn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,l,s){var m=2;if(r=e,typeof e=="function")Ki(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ne:return wn(n.children,l,s,t);case W:m=8,l|=8;break;case H:return e=ft(12,n,t,l|2),e.elementType=H,e.lanes=s,e;case Se:return e=ft(13,n,t,l),e.elementType=Se,e.lanes=s,e;case ot:return e=ft(19,n,t,l),e.elementType=ot,e.lanes=s,e;case ze:return Qr(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ve:m=10;break e;case re:m=9;break e;case me:m=11;break e;case Ne:m=14;break e;case Ge:m=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=ft(m,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function wn(e,t,n,r){return e=ft(7,e,r,t),e.lanes=n,e}function Qr(e,t,n,r){return e=ft(22,e,r,t),e.elementType=ze,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Zi(e,t,n,r,l,s,m,g,h){return e=new Vm(e,t,n,g,h),t===1?(t=1,s===!0&&(t|=8)):t=0,s=ft(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(s),e}function Hm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uu(e){if(!e)return Yt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Us(e,n,t)}return t}function du(e,t,n,r,l,s,m,g,h){return e=Zi(n,r,!0,e,l,s,m,g,h),e.context=uu(null),n=e.current,r=Qe(),l=Zt(n),s=Mt(r,l),s.callback=t??null,Gt(n,s,l),e.current.lanes=l,la(e,l,r),et(e,r),e}function qr(e,t,n,r){var l=t.current,s=Qe(),m=Zt(l);return n=uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(s,m),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(l,t,m),e!==null&&(wt(e,l,m,s),br(e,l,m)),m}function Gr(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function mu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eo(e,t){mu(e,t),(e=e.alternate)&&mu(e,t)}function Ym(){return null}var fu=typeof reportError=="function"?reportError:function(e){console.error(e)};function to(e){this._internalRoot=e}Kr.prototype.render=to.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));qr(e,t,null,null)},Kr.prototype.unmount=to.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){qr(null,e,null,null)}),t[Tt]=null}};function Kr(e){this._internalRoot=e}Kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ko();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Zo(e)}};function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pu(){}function Qm(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var _=Gr(m);s.call(_)}}var m=du(t,r,e,0,null,!1,!1,"",pu);return e._reactRootContainer=m,e[Tt]=m.current,Ea(e.nodeType===8?e.parentNode:e),hn(),m}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var g=r;r=function(){var _=Gr(h);g.call(_)}}var h=Zi(e,0,!1,null,null,!1,!1,"",pu);return e._reactRootContainer=h,e[Tt]=h.current,Ea(e.nodeType===8?e.parentNode:e),hn(function(){qr(t,h,n,r)}),h}function Jr(e,t,n,r,l){var s=n._reactRootContainer;if(s){var m=s;if(typeof l=="function"){var g=l;l=function(){var h=Gr(m);g.call(h)}}qr(t,m,e,l)}else m=Qm(n,t,e,l,r);return Gr(m)}qo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ra(t.pendingLanes);n!==0&&(Cl(t,n|1),et(t,Te()),(se&6)===0&&(Yn=Te()+500,Qt()))}break;case 13:hn(function(){var r=Rt(e,1);if(r!==null){var l=Qe();wt(r,e,1,l)}}),eo(e,1)}},zl=function(e){if(e.tag===13){var t=Rt(e,134217728);if(t!==null){var n=Qe();wt(t,e,134217728,n)}eo(e,134217728)}},Go=function(e){if(e.tag===13){var t=Zt(e),n=Rt(e,t);if(n!==null){var r=Qe();wt(n,e,t,r)}eo(e,t)}},Ko=function(){return pe},Xo=function(e,t){var n=pe;try{return pe=e,t()}finally{pe=n}},El=function(e,t,n){switch(t){case"input":if(dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=gr(r);if(!l)throw Error(o(90));No(r),dl(r,l)}}}break;case"textarea":Co(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}},Ao=Qi,Lo=hn;var qm={usingClientEntryPoint:!1,Events:[xa,Rn,gr,Ro,Mo,Qi]},La={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gm={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Io(e),e===null?null:e.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Ka=Zr.inject(Gm),Nt=Zr}catch{}}return tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm,tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!no(t))throw Error(o(200));return Hm(e,t,null,n)},tt.createRoot=function(e,t){if(!no(e))throw Error(o(299));var n=!1,r="",l=fu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Zi(e,1,!1,null,null,n,!1,r,l),e[Tt]=t.current,Ea(e.nodeType===8?e.parentNode:e),new to(t)},tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Io(t),e=e===null?null:e.stateNode,e},tt.flushSync=function(e){return hn(e)},tt.hydrate=function(e,t,n){if(!Xr(t))throw Error(o(200));return Jr(null,e,t,!0,n)},tt.hydrateRoot=function(e,t,n){if(!no(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",m=fu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=du(t,null,e,1,n??null,l,!1,s,m),e[Tt]=t.current,Ea(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Kr(t)},tt.render=function(e,t,n){if(!Xr(t))throw Error(o(200));return Jr(null,e,t,!1,n)},tt.unmountComponentAtNode=function(e){if(!Xr(e))throw Error(o(40));return e._reactRootContainer?(hn(function(){Jr(null,null,e,!1,function(){e._reactRootContainer=null,e[Tt]=null})}),!0):!1},tt.unstable_batchedUpdates=Qi,tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xr(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Jr(e,t,n,!1,r)},tt.version="18.3.1-next-f1338f8080-20240426",tt}var wu;function Iu(){if(wu)return ro.exports;wu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),ro.exports=nf(),ro.exports}var Nu;function af(){if(Nu)return el;Nu=1;var i=Iu();return el.createRoot=i.createRoot,el.hydrateRoot=i.hydrateRoot,el}var rf=af();const lf=Uu(rf);Iu();function Ia(){return Ia=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},Ia.apply(this,arguments)}var rn;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(rn||(rn={}));const xu="popstate";function of(i){i===void 0&&(i={});function c(d,u){let{pathname:f,search:p,hash:w}=d.location;return uo("",{pathname:f,search:p,hash:w},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(d,u){return typeof u=="string"?u:al(u)}return cf(c,o,null,i)}function De(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function po(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function sf(){return Math.random().toString(36).substr(2,8)}function ku(i,c){return{usr:i.state,key:i.key,idx:c}}function uo(i,c,o,d){return o===void 0&&(o=null),Ia({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof c=="string"?Gn(c):c,{state:o,key:c&&c.key||d||sf()})}function al(i){let{pathname:c="/",search:o="",hash:d=""}=i;return o&&o!=="?"&&(c+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(c+=d.charAt(0)==="#"?d:"#"+d),c}function Gn(i){let c={};if(i){let o=i.indexOf("#");o>=0&&(c.hash=i.substr(o),i=i.substr(0,o));let d=i.indexOf("?");d>=0&&(c.search=i.substr(d),i=i.substr(0,d)),i&&(c.pathname=i)}return c}function cf(i,c,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:f=!1}=d,p=u.history,w=rn.Pop,y=null,k=x();k==null&&(k=0,p.replaceState(Ia({},p.state,{idx:k}),""));function x(){return(p.state||{idx:null}).idx}function v(){w=rn.Pop;let C=x(),O=C==null?null:C-k;k=C,y&&y({action:w,location:z.location,delta:O})}function N(C,O){w=rn.Push;let R=uo(z.location,C,O);k=x()+1;let F=ku(R,k),I=z.createHref(R);try{p.pushState(F,"",I)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;u.location.assign(I)}f&&y&&y({action:w,location:z.location,delta:1})}function T(C,O){w=rn.Replace;let R=uo(z.location,C,O);k=x();let F=ku(R,k),I=z.createHref(R);p.replaceState(F,"",I),f&&y&&y({action:w,location:z.location,delta:0})}function M(C){let O=u.location.origin!=="null"?u.location.origin:u.location.href,R=typeof C=="string"?C:al(C);return R=R.replace(/ $/,"%20"),De(O,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,O)}let z={get action(){return w},get location(){return i(u,p)},listen(C){if(y)throw new Error("A history only accepts one active listener");return u.addEventListener(xu,v),y=C,()=>{u.removeEventListener(xu,v),y=null}},createHref(C){return c(u,C)},createURL:M,encodeLocation(C){let O=M(C);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:N,replace:T,go(C){return p.go(C)}};return z}var Su;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(Su||(Su={}));function uf(i,c,o){return o===void 0&&(o="/"),df(i,c,o)}function df(i,c,o,d){let u=typeof c=="string"?Gn(c):c,f=go(u.pathname||"/",o);if(f==null)return null;let p=Bu(i);mf(p);let w=null;for(let y=0;w==null&&y<p.length;++y){let k=Sf(f);w=Nf(p[y],k)}return w}function Bu(i,c,o,d){c===void 0&&(c=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(f,p,w)=>{let y={relativePath:w===void 0?f.path||"":w,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};y.relativePath.startsWith("/")&&(De(y.relativePath.startsWith(d),'Absolute route path "'+y.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),y.relativePath=y.relativePath.slice(d.length));let k=ln([d,y.relativePath]),x=o.concat(y);f.children&&f.children.length>0&&(De(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+k+'".')),Bu(f.children,c,x,k)),!(f.path==null&&!f.index)&&c.push({path:k,score:Ef(k,f.index),routesMeta:x})};return i.forEach((f,p)=>{var w;if(f.path===""||!((w=f.path)!=null&&w.includes("?")))u(f,p);else for(let y of $u(f.path))u(f,p,y)}),c}function $u(i){let c=i.split("/");if(c.length===0)return[];let[o,...d]=c,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(d.length===0)return u?[f,""]:[f];let p=$u(d.join("/")),w=[];return w.push(...p.map(y=>y===""?f:[f,y].join("/"))),u&&w.push(...p),w.map(y=>i.startsWith("/")&&y===""?"/":y)}function mf(i){i.sort((c,o)=>c.score!==o.score?o.score-c.score:wf(c.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const ff=/^:[\w-]+$/,pf=3,gf=2,vf=1,hf=10,yf=-2,bu=i=>i==="*";function Ef(i,c){let o=i.split("/"),d=o.length;return o.some(bu)&&(d+=yf),c&&(d+=gf),o.filter(u=>!bu(u)).reduce((u,f)=>u+(ff.test(f)?pf:f===""?vf:hf),d)}function wf(i,c){return i.length===c.length&&i.slice(0,-1).every((d,u)=>d===c[u])?i[i.length-1]-c[c.length-1]:0}function Nf(i,c,o){let{routesMeta:d}=i,u={},f="/",p=[];for(let w=0;w<d.length;++w){let y=d[w],k=w===d.length-1,x=f==="/"?c:c.slice(f.length)||"/",v=xf({path:y.relativePath,caseSensitive:y.caseSensitive,end:k},x),N=y.route;if(!v)return null;Object.assign(u,v.params),p.push({params:u,pathname:ln([f,v.pathname]),pathnameBase:Tf(ln([f,v.pathnameBase])),route:N}),v.pathnameBase!=="/"&&(f=ln([f,v.pathnameBase]))}return p}function xf(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[o,d]=kf(i.path,i.caseSensitive,i.end),u=c.match(o);if(!u)return null;let f=u[0],p=f.replace(/(.)\/+$/,"$1"),w=u.slice(1);return{params:d.reduce((k,x,v)=>{let{paramName:N,isOptional:T}=x;if(N==="*"){let z=w[v]||"";p=f.slice(0,f.length-z.length).replace(/(.)\/+$/,"$1")}const M=w[v];return T&&!M?k[N]=void 0:k[N]=(M||"").replace(/%2F/g,"/"),k},{}),pathname:f,pathnameBase:p,pattern:i}}function kf(i,c,o){c===void 0&&(c=!1),o===void 0&&(o=!0),po(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let d=[],u="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,w,y)=>(d.push({paramName:w,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(d.push({paramName:"*"}),u+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":i!==""&&i!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,c?void 0:"i"),d]}function Sf(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return po(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),i}}function go(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let o=c.endsWith("/")?c.length-1:c.length,d=i.charAt(o);return d&&d!=="/"?null:i.slice(o)||"/"}const bf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cf=i=>bf.test(i);function zf(i,c){c===void 0&&(c="/");let{pathname:o,search:d="",hash:u=""}=typeof i=="string"?Gn(i):i,f;if(o)if(Cf(o))f=o;else{if(o.includes("//")){let p=o;o=o.replace(/\/\/+/g,"/"),po(!1,"Pathnames cannot have embedded double slashes - normalizing "+(p+" -> "+o))}o.startsWith("/")?f=Cu(o.substring(1),"/"):f=Cu(o,c)}else f=c;return{pathname:f,search:_f(d),hash:Df(u)}}function Cu(i,c){let o=c.replace(/\/+$/,"").split("/");return i.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function oo(i,c,o,d){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pf(i){return i.filter((c,o)=>o===0||c.route.path&&c.route.path.length>0)}function vo(i,c){let o=Pf(i);return c?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function ho(i,c,o,d){d===void 0&&(d=!1);let u;typeof i=="string"?u=Gn(i):(u=Ia({},i),De(!u.pathname||!u.pathname.includes("?"),oo("?","pathname","search",u)),De(!u.pathname||!u.pathname.includes("#"),oo("#","pathname","hash",u)),De(!u.search||!u.search.includes("#"),oo("#","search","hash",u)));let f=i===""||u.pathname==="",p=f?"/":u.pathname,w;if(p==null)w=o;else{let v=c.length-1;if(!d&&p.startsWith("..")){let N=p.split("/");for(;N[0]==="..";)N.shift(),v-=1;u.pathname=N.join("/")}w=v>=0?c[v]:"/"}let y=zf(u,w),k=p&&p!=="/"&&p.endsWith("/"),x=(f||p===".")&&o.endsWith("/");return!y.pathname.endsWith("/")&&(k||x)&&(y.pathname+="/"),y}const ln=i=>i.join("/").replace(/\/\/+/g,"/"),Tf=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),_f=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Df=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Of(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const Wu=["post","put","patch","delete"];new Set(Wu);const Rf=["get",...Wu];new Set(Rf);function Ba(){return Ba=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},Ba.apply(this,arguments)}const yo=D.createContext(null),Mf=D.createContext(null),on=D.createContext(null),sl=D.createContext(null),jt=D.createContext({outlet:null,matches:[],isDataRoute:!1}),Vu=D.createContext(null);function Af(i,c){let{relative:o}=c===void 0?{}:c;Kn()||De(!1);let{basename:d,navigator:u}=D.useContext(on),{hash:f,pathname:p,search:w}=Qu(i,{relative:o}),y=p;return d!=="/"&&(y=p==="/"?d:ln([d,p])),u.createHref({pathname:y,search:w,hash:f})}function Kn(){return D.useContext(sl)!=null}function Xn(){return Kn()||De(!1),D.useContext(sl).location}function Hu(i){D.useContext(on).static||D.useLayoutEffect(i)}function zt(){let{isDataRoute:i}=D.useContext(jt);return i?qf():Lf()}function Lf(){Kn()||De(!1);let i=D.useContext(yo),{basename:c,future:o,navigator:d}=D.useContext(on),{matches:u}=D.useContext(jt),{pathname:f}=Xn(),p=JSON.stringify(vo(u,o.v7_relativeSplatPath)),w=D.useRef(!1);return Hu(()=>{w.current=!0}),D.useCallback(function(k,x){if(x===void 0&&(x={}),!w.current)return;if(typeof k=="number"){d.go(k);return}let v=ho(k,JSON.parse(p),f,x.relative==="path");i==null&&c!=="/"&&(v.pathname=v.pathname==="/"?c:ln([c,v.pathname])),(x.replace?d.replace:d.push)(v,x.state,x)},[c,d,p,f,i])}function Yu(){let{matches:i}=D.useContext(jt),c=i[i.length-1];return c?c.params:{}}function Qu(i,c){let{relative:o}=c===void 0?{}:c,{future:d}=D.useContext(on),{matches:u}=D.useContext(jt),{pathname:f}=Xn(),p=JSON.stringify(vo(u,d.v7_relativeSplatPath));return D.useMemo(()=>ho(i,JSON.parse(p),f,o==="path"),[i,p,f,o])}function jf(i,c){return Uf(i,c)}function Uf(i,c,o,d){Kn()||De(!1);let{navigator:u}=D.useContext(on),{matches:f}=D.useContext(jt),p=f[f.length-1],w=p?p.params:{};p&&p.pathname;let y=p?p.pathnameBase:"/";p&&p.route;let k=Xn(),x;if(c){var v;let C=typeof c=="string"?Gn(c):c;y==="/"||(v=C.pathname)!=null&&v.startsWith(y)||De(!1),x=C}else x=k;let N=x.pathname||"/",T=N;if(y!=="/"){let C=y.replace(/^\//,"").split("/");T="/"+N.replace(/^\//,"").split("/").slice(C.length).join("/")}let M=uf(i,{pathname:T}),z=Wf(M&&M.map(C=>Object.assign({},C,{params:Object.assign({},w,C.params),pathname:ln([y,u.encodeLocation?u.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?y:ln([y,u.encodeLocation?u.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),f,o,d);return c&&z?D.createElement(sl.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:rn.Pop}},z):z}function Ff(){let i=Qf(),c=Of(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),o=i instanceof Error?i.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},c),o?D.createElement("pre",{style:u},o):null,null)}const If=D.createElement(Ff,null);class Bf extends D.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,o){return o.location!==c.location||o.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:o.error,location:o.location,revalidation:c.revalidation||o.revalidation}}componentDidCatch(c,o){console.error("React Router caught the following error during render",c,o)}render(){return this.state.error!==void 0?D.createElement(jt.Provider,{value:this.props.routeContext},D.createElement(Vu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $f(i){let{routeContext:c,match:o,children:d}=i,u=D.useContext(yo);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),D.createElement(jt.Provider,{value:c},d)}function Wf(i,c,o,d){var u;if(c===void 0&&(c=[]),o===void 0&&(o=null),d===void 0&&(d=null),i==null){var f;if(!o)return null;if(o.errors)i=o.matches;else if((f=d)!=null&&f.v7_partialHydration&&c.length===0&&!o.initialized&&o.matches.length>0)i=o.matches;else return null}let p=i,w=(u=o)==null?void 0:u.errors;if(w!=null){let x=p.findIndex(v=>v.route.id&&w?.[v.route.id]!==void 0);x>=0||De(!1),p=p.slice(0,Math.min(p.length,x+1))}let y=!1,k=-1;if(o&&d&&d.v7_partialHydration)for(let x=0;x<p.length;x++){let v=p[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(k=x),v.route.id){let{loaderData:N,errors:T}=o,M=v.route.loader&&N[v.route.id]===void 0&&(!T||T[v.route.id]===void 0);if(v.route.lazy||M){y=!0,k>=0?p=p.slice(0,k+1):p=[p[0]];break}}}return p.reduceRight((x,v,N)=>{let T,M=!1,z=null,C=null;o&&(T=w&&v.route.id?w[v.route.id]:void 0,z=v.route.errorElement||If,y&&(k<0&&N===0?(Gf("route-fallback"),M=!0,C=null):k===N&&(M=!0,C=v.route.hydrateFallbackElement||null)));let O=c.concat(p.slice(0,N+1)),R=()=>{let F;return T?F=z:M?F=C:v.route.Component?F=D.createElement(v.route.Component,null):v.route.element?F=v.route.element:F=x,D.createElement($f,{match:v,routeContext:{outlet:x,matches:O,isDataRoute:o!=null},children:F})};return o&&(v.route.ErrorBoundary||v.route.errorElement||N===0)?D.createElement(Bf,{location:o.location,revalidation:o.revalidation,component:z,error:T,children:R(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):R()},null)}var qu=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(qu||{}),Gu=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Gu||{});function Vf(i){let c=D.useContext(yo);return c||De(!1),c}function Hf(i){let c=D.useContext(Mf);return c||De(!1),c}function Yf(i){let c=D.useContext(jt);return c||De(!1),c}function Ku(i){let c=Yf(),o=c.matches[c.matches.length-1];return o.route.id||De(!1),o.route.id}function Qf(){var i;let c=D.useContext(Vu),o=Hf(),d=Ku();return c!==void 0?c:(i=o.errors)==null?void 0:i[d]}function qf(){let{router:i}=Vf(qu.UseNavigateStable),c=Ku(Gu.UseNavigateStable),o=D.useRef(!1);return Hu(()=>{o.current=!0}),D.useCallback(function(u,f){f===void 0&&(f={}),o.current&&(typeof u=="number"?i.navigate(u):i.navigate(u,Ba({fromRouteId:c},f)))},[i,c])}const zu={};function Gf(i,c,o){zu[i]||(zu[i]=!0)}function Kf(i,c){i?.v7_startTransition,i?.v7_relativeSplatPath}function rl(i){let{to:c,replace:o,state:d,relative:u}=i;Kn()||De(!1);let{future:f,static:p}=D.useContext(on),{matches:w}=D.useContext(jt),{pathname:y}=Xn(),k=zt(),x=ho(c,vo(w,f.v7_relativeSplatPath),y,u==="path"),v=JSON.stringify(x);return D.useEffect(()=>k(JSON.parse(v),{replace:o,state:d,relative:u}),[k,v,u,o,d]),null}function Ue(i){De(!1)}function Xf(i){let{basename:c="/",children:o=null,location:d,navigationType:u=rn.Pop,navigator:f,static:p=!1,future:w}=i;Kn()&&De(!1);let y=c.replace(/^\/*/,"/"),k=D.useMemo(()=>({basename:y,navigator:f,static:p,future:Ba({v7_relativeSplatPath:!1},w)}),[y,w,f,p]);typeof d=="string"&&(d=Gn(d));let{pathname:x="/",search:v="",hash:N="",state:T=null,key:M="default"}=d,z=D.useMemo(()=>{let C=go(x,y);return C==null?null:{location:{pathname:C,search:v,hash:N,state:T,key:M},navigationType:u}},[y,x,v,N,T,M,u]);return z==null?null:D.createElement(on.Provider,{value:k},D.createElement(sl.Provider,{children:o,value:z}))}function Jf(i){let{children:c,location:o}=i;return jf(mo(c),o)}new Promise(()=>{});function mo(i,c){c===void 0&&(c=[]);let o=[];return D.Children.forEach(i,(d,u)=>{if(!D.isValidElement(d))return;let f=[...c,u];if(d.type===D.Fragment){o.push.apply(o,mo(d.props.children,f));return}d.type!==Ue&&De(!1),!d.props.index||!d.props.children||De(!1);let p={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(p.children=mo(d.props.children,f)),o.push(p)}),o}function fo(){return fo=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},fo.apply(this,arguments)}function Zf(i,c){if(i==null)return{};var o={},d=Object.keys(i),u,f;for(f=0;f<d.length;f++)u=d[f],!(c.indexOf(u)>=0)&&(o[u]=i[u]);return o}function ep(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function tp(i,c){return i.button===0&&(!c||c==="_self")&&!ep(i)}const np=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ap="6";try{window.__reactRouterVersion=ap}catch{}const rp="startTransition",Pu=Zm[rp];function lp(i){let{basename:c,children:o,future:d,window:u}=i,f=D.useRef();f.current==null&&(f.current=of({window:u,v5Compat:!0}));let p=f.current,[w,y]=D.useState({action:p.action,location:p.location}),{v7_startTransition:k}=d||{},x=D.useCallback(v=>{k&&Pu?Pu(()=>y(v)):y(v)},[y,k]);return D.useLayoutEffect(()=>p.listen(x),[p,x]),D.useEffect(()=>Kf(d),[d]),D.createElement(Xf,{basename:c,children:o,location:w.location,navigationType:w.action,navigator:p,future:d})}const ip=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",op=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wa=D.forwardRef(function(c,o){let{onClick:d,relative:u,reloadDocument:f,replace:p,state:w,target:y,to:k,preventScrollReset:x,viewTransition:v}=c,N=Zf(c,np),{basename:T}=D.useContext(on),M,z=!1;if(typeof k=="string"&&op.test(k)&&(M=k,ip))try{let F=new URL(window.location.href),I=k.startsWith("//")?new URL(F.protocol+k):new URL(k),te=go(I.pathname,T);I.origin===F.origin&&te!=null?k=te+I.search+I.hash:z=!0}catch{}let C=Af(k,{relative:u}),O=sp(k,{replace:p,state:w,target:y,preventScrollReset:x,relative:u,viewTransition:v});function R(F){d&&d(F),F.defaultPrevented||O(F)}return D.createElement("a",fo({},N,{href:M||C,onClick:z||f?d:R,ref:o,target:y}))});var Tu;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Tu||(Tu={}));var _u;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(_u||(_u={}));function sp(i,c){let{target:o,replace:d,state:u,preventScrollReset:f,relative:p,viewTransition:w}=c===void 0?{}:c,y=zt(),k=Xn(),x=Qu(i,{relative:p});return D.useCallback(v=>{if(tp(v,o)){v.preventDefault();let N=d!==void 0?d:al(k)===al(x);y(i,{replace:N,state:u,preventScrollReset:f,relative:p,viewTransition:w})}},[k,y,x,d,u,o,i,f,p,w])}var Du={};const Xu=D.createContext(),Be=()=>{const i=D.useContext(Xu);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},ja=typeof process<"u"&&Du&&Du.REACT_APP_API_URL||"http://localhost:5000",so=i=>{if(!i)return null;const o=(i.name||"").split(" ").filter(Boolean),d=o[0]||"",u=o.slice(1).join(" ")||"";return{id:i._id||i.id||"",email:i.email,role:i.role,firstName:d,lastName:u,profile:i.profile||{}}},cp=({children:i})=>{const[c,o]=D.useState(null),[d,u]=D.useState(!0),f=()=>localStorage.getItem("healthRecordToken");D.useEffect(()=>{(async()=>{const N=f();if(!N){u(!1);return}try{const T=await fetch(`${ja}/api/users/me`,{headers:{Authorization:`Bearer ${N}`}});if(T.ok){const M=await T.json();o(so(M.user))}else localStorage.removeItem("healthRecordToken"),localStorage.removeItem("healthRecordUser")}catch(T){console.error("Failed to fetch user",T)}u(!1)})()},[]);const x={user:c,login:async(v,N)=>{u(!0);try{const T=await fetch(`${ja}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:v,password:N})}),M=await T.json();if(!T.ok)return u(!1),{success:!1,error:M.error||"Login failed"};localStorage.setItem("healthRecordToken",M.token);const z=so(M.user);return o(z),localStorage.setItem("healthRecordUser",JSON.stringify(z)),u(!1),{success:!0,user:z}}catch{return u(!1),{success:!1,error:"Network error"}}},register:async v=>{u(!0);try{const N=await fetch(`${ja}/api/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}),T=await N.json();return N.ok?(u(!1),{success:!0}):(u(!1),{success:!1,error:T.error||"Registration failed"})}catch{return u(!1),{success:!1,error:"Network error"}}},logout:()=>{o(null),localStorage.removeItem("healthRecordToken"),localStorage.removeItem("healthRecordUser")},updateProfile:async v=>{u(!0);const N=f();if(!N)return{success:!1,error:"Not authenticated"};try{const T=await fetch(`${ja}/api/users/me`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N}`},body:JSON.stringify(v)}),M=await T.json();if(!T.ok)return u(!1),{success:!1,error:M.error||"Update failed"};const z=so(M.user);return o(z),localStorage.setItem("healthRecordUser",JSON.stringify(z)),u(!1),{success:!0}}catch{return u(!1),{success:!1,error:"Network error"}}},loading:d,apiBase:ja};return a.createElement(Xu.Provider,{value:x},i)},up="modulepreload",dp=function(i){return"/"+i},Ou={},Eo=function(c,o,d){let u=Promise.resolve();if(o&&o.length>0){let k=function(x){return Promise.all(x.map(v=>Promise.resolve(v).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};var p=k;document.getElementsByTagName("link");const w=document.querySelector("meta[property=csp-nonce]"),y=w?.nonce||w?.getAttribute("nonce");u=k(o.map(x=>{if(x=dp(x),x in Ou)return;Ou[x]=!0;const v=x.endsWith(".css"),N=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${x}"]${N}`))return;const T=document.createElement("link");if(T.rel=v?"stylesheet":up,v||(T.as="script"),T.crossOrigin="",T.href=x,y&&T.setAttribute("nonce",y),document.head.appendChild(T),v)return new Promise((M,z)=>{T.addEventListener("load",M),T.addEventListener("error",()=>z(new Error(`Unable to preload CSS for ${x}`)))})}))}function f(w){const y=new Event("vite:preloadError",{cancelable:!0});if(y.payload=w,window.dispatchEvent(y),!y.defaultPrevented)throw w}return u.then(w=>{for(const y of w||[])y.status==="rejected"&&f(y.reason);return c().catch(f)})},mp=()=>{const[i,c]=D.useState({email:"",password:""}),[o,d]=D.useState("patient"),[u,f]=D.useState({}),[p,w]=D.useState(!1),{login:y}=Be(),k=zt(),x=T=>{const{name:M,value:z}=T.target;c(C=>({...C,[M]:z})),u[M]&&f(C=>({...C,[M]:""}))},v=()=>{const T={};return i.email?/\S+@\S+\.\S+/.test(i.email)||(T.email="Email is invalid"):T.email="Email is required",i.password?i.password.length<6&&(T.password="Password must be at least 6 characters"):T.password="Password is required",f(T),Object.keys(T).length===0},N=async T=>{if(T.preventDefault(),!!v()){w(!0);try{const M=await y(i.email,i.password);if(M.success){if(o&&M.user.role!==o){f({general:`Selected role does not match account role (${M.user.role}).`}),w(!1);return}try{const{showToast:z}=await Eo(async()=>{const{showToast:C}=await import("./toast-D5Sf84tm.js");return{showToast:C}},[]);z({type:"success",message:"Signed in successfully"})}catch{}switch(M.user.role){case"patient":k("/patient/dashboard");break;case"doctor":k("/doctor/dashboard");break;case"admin":k("/admin/dashboard");break;default:k("/login")}}else f({general:M.error})}catch{f({general:"An unexpected error occurred. Please try again."})}finally{w(!1)}}};return a.createElement("div",{className:"auth-container"},a.createElement("div",{className:"auth-card"},a.createElement("div",{className:"auth-header"},a.createElement("div",{className:"auth-logo"},a.createElement("i",{className:"fas fa-heartbeat"}),a.createElement("h1",null,"Health Record System")),a.createElement("p",{className:"auth-subtitle"},"Sign in to your account")),a.createElement("form",{onSubmit:N,className:"auth-form"},u.general&&a.createElement("div",{className:"alert alert-error"},a.createElement("i",{className:"fas fa-exclamation-circle"}),u.general),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Email Address"),a.createElement("input",{type:"email",name:"email",className:`form-control ${u.email?"error":""}`,placeholder:"Enter your email",value:i.email,onChange:x,disabled:p}),u.email&&a.createElement("span",{className:"error-message"},u.email)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Role"),a.createElement("select",{name:"role",className:"form-select",value:o,onChange:T=>d(T.target.value),disabled:p},a.createElement("option",{value:"patient"},"Patient"),a.createElement("option",{value:"doctor"},"Doctor"),a.createElement("option",{value:"admin"},"Administrator"))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Password"),a.createElement("input",{type:"password",name:"password",className:`form-control ${u.password?"error":""}`,placeholder:"Enter your password",value:i.password,onChange:x,disabled:p}),u.password&&a.createElement("span",{className:"error-message"},u.password)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"checkbox-container"},a.createElement("input",{type:"checkbox",name:"remember"}),a.createElement("span",{className:"checkmark"}),"Remember me")),a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:p,"aria-busy":p},p?a.createElement(a.Fragment,null,a.createElement("div",{className:"spinner","aria-hidden":"true"}),"Signing in..."):"Sign In")),a.createElement("div",{className:"auth-footer"},a.createElement("p",null,"Don't have an account? ",a.createElement(Wa,{to:"/register"},"Sign up here")),a.createElement("p",{className:"demo-credentials"},a.createElement("strong",null,"Demo Credentials:"),a.createElement("br",null),"Patient: patient@example.com / password123",a.createElement("br",null),"Doctor: doctor@example.com / password123",a.createElement("br",null),"Admin: admin@example.com / password123"))),a.createElement("style",null,`
        /* Consolidated login styles: visibility, centering, responsive */
        .auth-container {
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-blue-light) 0%, rgba(255,255,255,0.85) 100%);
          padding: 0 var(--spacing-4);
          z-index: 50;
        }

        .auth-card {
          width: 100%;
          max-width: 520px;
          padding: var(--spacing-8) var(--spacing-6);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
          box-shadow: var(--shadow-xl);
          border-radius: var(--radius-xl);
          background: var(--white);
        }

        .auth-header { text-align: center; margin-bottom: var(--spacing-6); }
        .auth-logo { display:flex; align-items:center; justify-content:center; gap:var(--spacing-2); }
        .auth-logo i { font-size: var(--font-size-3xl); color: var(--primary-blue); }
        .auth-logo h1 { font-size: var(--font-size-2xl); font-weight:700; color:var(--gray-800); margin:0; }
        .auth-subtitle { color: var(--gray-500); font-size: var(--font-size-base); margin:0; }

        .auth-form { width:100%; display:flex; flex-direction:column; gap:var(--spacing-4); }
        .auth-form .form-group { width:100%; }

        .alert { padding: var(--spacing-3) var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4); display:flex; align-items:center; gap:var(--spacing-2); }
        .alert-error { background-color: rgba(239,68,68,0.07); color: var(--status-error); border: 1px solid rgba(239,68,68,0.12); }

        .checkbox-container { display:flex; align-items:center; gap:var(--spacing-2); cursor:pointer; font-size: var(--font-size-sm); color:var(--gray-600); }
        .checkmark { width:16px; height:16px; border:2px solid var(--gray-300); border-radius: var(--radius-sm); position:relative; }
        input[type="checkbox"]:checked + .checkmark { background: var(--primary-blue); border-color: var(--primary-blue); }
        input[type="checkbox"]:checked + .checkmark::after { content: '✓'; position:absolute; top:-2px; left:2px; color:var(--white); font-size:12px; }

        .spinner { border:2px solid rgba(255,255,255,0.7); border-top:2px solid rgba(255,255,255,1); border-radius:50%; width:16px; height:16px; animation: spin 0.9s linear infinite; margin-right: var(--spacing-2); }

        .auth-footer { text-align:center; color:var(--gray-500); font-size:var(--font-size-sm); }
        .auth-footer a { color: var(--primary-blue-dark); text-decoration:none; font-weight:500; }
        .auth-footer a:hover { text-decoration: underline; }

        .demo-credentials { margin-top: var(--spacing-4); padding: var(--spacing-3); background-color: var(--gray-50); border-radius: var(--radius-md); font-size: var(--font-size-xs); text-align:left; border:1px solid var(--gray-200); }

        @media (max-width: 992px) {
          .auth-card { max-width: 480px; }
        }

        @media (max-width: 768px) {
          .auth-card { max-width: 100%; padding: var(--spacing-6); }
          .auth-form .btn { width:100%; }
          .auth-container { padding: 0 var(--spacing-2); }
        }
      `))},fp=()=>{const[i,c]=D.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",role:"patient",dateOfBirth:"",gender:"",phone:"",address:""}),[o,d]=D.useState({}),[u,f]=D.useState(!1),{register:p,login:w}=Be(),y=zt(),k=N=>{const{name:T,value:M}=N.target;c(z=>({...z,[T]:M})),o[T]&&d(z=>({...z,[T]:""}))},x=()=>{const N={};return i.firstName||(N.firstName="First name is required"),i.lastName||(N.lastName="Last name is required"),i.email?/\S+@\S+\.\S+/.test(i.email)||(N.email="Email is invalid"):N.email="Email is required",i.password?i.password.length<6&&(N.password="Password must be at least 6 characters"):N.password="Password is required",i.confirmPassword?i.password!==i.confirmPassword&&(N.confirmPassword="Passwords do not match"):N.confirmPassword="Please confirm your password",i.dateOfBirth||(N.dateOfBirth="Date of birth is required"),i.gender||(N.gender="Gender is required"),i.phone||(N.phone="Phone number is required"),i.address||(N.address="Address is required"),d(N),Object.keys(N).length===0},v=async N=>{if(N.preventDefault(),!!x()){f(!0);try{if((await p(i)).success){const M=await w(i.email,i.password);if(M.success){const z=M.user.role;y(z==="doctor"?"/doctor/dashboard":z==="admin"?"/admin/dashboard":"/patient/dashboard")}else d({general:"Account created. Please sign in."})}else d({general:"Registration failed. Please try again."})}catch{d({general:"An unexpected error occurred. Please try again."})}finally{f(!1)}}};return a.createElement("div",{className:"auth-container"},a.createElement("div",{className:"auth-card register-card"},a.createElement("div",{className:"auth-header"},a.createElement("div",{className:"auth-logo"},a.createElement("i",{className:"fas fa-heartbeat"}),a.createElement("h1",null,"Health Record System")),a.createElement("p",{className:"auth-subtitle"},"Create your account")),a.createElement("form",{onSubmit:v,className:"auth-form"},o.general&&a.createElement("div",{className:"alert alert-error"},a.createElement("i",{className:"fas fa-exclamation-circle"}),o.general),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"First Name"),a.createElement("input",{type:"text",name:"firstName",className:`form-control ${o.firstName?"error":""}`,placeholder:"Enter your first name",value:i.firstName,onChange:k,disabled:u}),o.firstName&&a.createElement("span",{className:"error-message"},o.firstName)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Last Name"),a.createElement("input",{type:"text",name:"lastName",className:`form-control ${o.lastName?"error":""}`,placeholder:"Enter your last name",value:i.lastName,onChange:k,disabled:u}),o.lastName&&a.createElement("span",{className:"error-message"},o.lastName))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Email Address"),a.createElement("input",{type:"email",name:"email",className:`form-control ${o.email?"error":""}`,placeholder:"Enter your email",value:i.email,onChange:k,disabled:u}),o.email&&a.createElement("span",{className:"error-message"},o.email)),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Password"),a.createElement("input",{type:"password",name:"password",className:`form-control ${o.password?"error":""}`,placeholder:"Enter your password",value:i.password,onChange:k,disabled:u}),o.password&&a.createElement("span",{className:"error-message"},o.password)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Confirm Password"),a.createElement("input",{type:"password",name:"confirmPassword",className:`form-control ${o.confirmPassword?"error":""}`,placeholder:"Confirm your password",value:i.confirmPassword,onChange:k,disabled:u}),o.confirmPassword&&a.createElement("span",{className:"error-message"},o.confirmPassword))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"I am registering as"),a.createElement("select",{name:"role",className:"form-select",value:i.role,onChange:k,disabled:u},a.createElement("option",{value:"patient"},"Patient"),a.createElement("option",{value:"doctor"},"Doctor"),a.createElement("option",{value:"admin"},"Administrator"))),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Date of Birth"),a.createElement("input",{type:"date",name:"dateOfBirth",className:`form-control ${o.dateOfBirth?"error":""}`,value:i.dateOfBirth,onChange:k,disabled:u}),o.dateOfBirth&&a.createElement("span",{className:"error-message"},o.dateOfBirth)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Gender"),a.createElement("select",{name:"gender",className:`form-select ${o.gender?"error":""}`,value:i.gender,onChange:k,disabled:u},a.createElement("option",{value:""},"Select Gender"),a.createElement("option",{value:"Male"},"Male"),a.createElement("option",{value:"Female"},"Female"),a.createElement("option",{value:"Other"},"Other"),a.createElement("option",{value:"Prefer not to say"},"Prefer not to say")),o.gender&&a.createElement("span",{className:"error-message"},o.gender))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Phone Number"),a.createElement("input",{type:"tel",name:"phone",className:`form-control ${o.phone?"error":""}`,placeholder:"Enter your phone number",value:i.phone,onChange:k,disabled:u}),o.phone&&a.createElement("span",{className:"error-message"},o.phone)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Address"),a.createElement("textarea",{name:"address",className:`form-control ${o.address?"error":""}`,placeholder:"Enter your address",rows:"3",value:i.address,onChange:k,disabled:u}),o.address&&a.createElement("span",{className:"error-message"},o.address)),a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:u,"aria-busy":u},u?a.createElement(a.Fragment,null,a.createElement("div",{className:"spinner","aria-hidden":"true"}),"Creating Account..."):"Create Account")),a.createElement("div",{className:"auth-footer"},a.createElement("p",null,"Already have an account? ",a.createElement(Wa,{to:"/login"},"Sign in here")))),a.createElement("style",null,`
        .register-card {
          max-width: 600px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .register-card {
            padding: var(--spacing-6);
            margin: var(--spacing-2);
          }
        }
      `))},pp=()=>{const{user:i,logout:c}=Be(),o=zt(),d=()=>{if(i)switch(i.role){case"patient":o("/patient/dashboard");break;case"doctor":o("/doctor/dashboard");break;case"admin":o("/admin/dashboard");break;default:o("/login")}else o("/login")},u=()=>{c(),o("/login")};return a.createElement("div",{className:"unauthorized-container"},a.createElement("div",{className:"unauthorized-card"},a.createElement("div",{className:"unauthorized-icon"},a.createElement("i",{className:"fas fa-exclamation-triangle"})),a.createElement("h1",{className:"unauthorized-title"},"Access Denied"),a.createElement("p",{className:"unauthorized-message"},"You don't have permission to access this page.",i&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",{className:"user-info"},"Current role: ",a.createElement("strong",null,i.role.charAt(0).toUpperCase()+i.role.slice(1))))),a.createElement("div",{className:"unauthorized-actions"},a.createElement("button",{className:"btn btn-primary",onClick:d},a.createElement("i",{className:"fas fa-arrow-left"}),"Go to Dashboard"),i&&a.createElement("button",{className:"btn btn-outline",onClick:u},a.createElement("i",{className:"fas fa-sign-out-alt"}),"Sign Out"))),a.createElement("style",null,`
        .unauthorized-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: var(--spacing-4);
        }
        
        .unauthorized-card {
          background: var(--white);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          padding: var(--spacing-12);
          text-align: center;
          max-width: 500px;
          width: 100%;
          animation: fadeIn 0.5s ease-in;
        }
        
        .unauthorized-icon {
          font-size: var(--font-size-4xl);
          color: var(--status-warning);
          margin-bottom: var(--spacing-6);
        }
        
        .unauthorized-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin-bottom: var(--spacing-4);
        }
        
        .unauthorized-message {
          color: var(--gray-600);
          font-size: var(--font-size-base);
          margin-bottom: var(--spacing-8);
          line-height: 1.6;
        }
        
        .user-info {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
        }
        
        .unauthorized-actions {
          display: flex;
          gap: var(--spacing-3);
          justify-content: center;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .unauthorized-card {
            padding: var(--spacing-8);
            margin: var(--spacing-2);
          }
          
          .unauthorized-title {
            font-size: var(--font-size-2xl);
          }
          
          .unauthorized-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `))};function ll(i){"@babel/helpers - typeof";return ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},ll(i)}function xn(i){if(i===null||i===!0||i===!1)return NaN;var c=Number(i);return isNaN(c)?c:c<0?Math.ceil(c):Math.floor(c)}function qe(i,c){if(c.length<i)throw new TypeError(i+" argument"+(i>1?"s":"")+" required, but only "+c.length+" present")}function Pt(i){qe(1,arguments);var c=Object.prototype.toString.call(i);return i instanceof Date||ll(i)==="object"&&c==="[object Date]"?new Date(i.getTime()):typeof i=="number"||c==="[object Number]"?new Date(i):((typeof i=="string"||c==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function gp(i,c){qe(2,arguments);var o=Pt(i).getTime(),d=xn(c);return new Date(o+d)}var vp={};function cl(){return vp}function hp(i){var c=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return c.setUTCFullYear(i.getFullYear()),i.getTime()-c.getTime()}function yp(i){return qe(1,arguments),i instanceof Date||ll(i)==="object"&&Object.prototype.toString.call(i)==="[object Date]"}function Ep(i){if(qe(1,arguments),!yp(i)&&typeof i!="number")return!1;var c=Pt(i);return!isNaN(Number(c))}function wp(i,c){qe(2,arguments);var o=xn(c);return gp(i,-o)}var Np=864e5;function xp(i){qe(1,arguments);var c=Pt(i),o=c.getTime();c.setUTCMonth(0,1),c.setUTCHours(0,0,0,0);var d=c.getTime(),u=o-d;return Math.floor(u/Np)+1}function il(i){qe(1,arguments);var c=1,o=Pt(i),d=o.getUTCDay(),u=(d<c?7:0)+d-c;return o.setUTCDate(o.getUTCDate()-u),o.setUTCHours(0,0,0,0),o}function Ju(i){qe(1,arguments);var c=Pt(i),o=c.getUTCFullYear(),d=new Date(0);d.setUTCFullYear(o+1,0,4),d.setUTCHours(0,0,0,0);var u=il(d),f=new Date(0);f.setUTCFullYear(o,0,4),f.setUTCHours(0,0,0,0);var p=il(f);return c.getTime()>=u.getTime()?o+1:c.getTime()>=p.getTime()?o:o-1}function kp(i){qe(1,arguments);var c=Ju(i),o=new Date(0);o.setUTCFullYear(c,0,4),o.setUTCHours(0,0,0,0);var d=il(o);return d}var Sp=6048e5;function bp(i){qe(1,arguments);var c=Pt(i),o=il(c).getTime()-kp(c).getTime();return Math.round(o/Sp)+1}function ol(i,c){var o,d,u,f,p,w,y,k;qe(1,arguments);var x=cl(),v=xn((o=(d=(u=(f=c?.weekStartsOn)!==null&&f!==void 0?f:c==null||(p=c.locale)===null||p===void 0||(w=p.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&u!==void 0?u:x.weekStartsOn)!==null&&d!==void 0?d:(y=x.locale)===null||y===void 0||(k=y.options)===null||k===void 0?void 0:k.weekStartsOn)!==null&&o!==void 0?o:0);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var N=Pt(i),T=N.getUTCDay(),M=(T<v?7:0)+T-v;return N.setUTCDate(N.getUTCDate()-M),N.setUTCHours(0,0,0,0),N}function Zu(i,c){var o,d,u,f,p,w,y,k;qe(1,arguments);var x=Pt(i),v=x.getUTCFullYear(),N=cl(),T=xn((o=(d=(u=(f=c?.firstWeekContainsDate)!==null&&f!==void 0?f:c==null||(p=c.locale)===null||p===void 0||(w=p.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&u!==void 0?u:N.firstWeekContainsDate)!==null&&d!==void 0?d:(y=N.locale)===null||y===void 0||(k=y.options)===null||k===void 0?void 0:k.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var M=new Date(0);M.setUTCFullYear(v+1,0,T),M.setUTCHours(0,0,0,0);var z=ol(M,c),C=new Date(0);C.setUTCFullYear(v,0,T),C.setUTCHours(0,0,0,0);var O=ol(C,c);return x.getTime()>=z.getTime()?v+1:x.getTime()>=O.getTime()?v:v-1}function Cp(i,c){var o,d,u,f,p,w,y,k;qe(1,arguments);var x=cl(),v=xn((o=(d=(u=(f=c?.firstWeekContainsDate)!==null&&f!==void 0?f:c==null||(p=c.locale)===null||p===void 0||(w=p.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&u!==void 0?u:x.firstWeekContainsDate)!==null&&d!==void 0?d:(y=x.locale)===null||y===void 0||(k=y.options)===null||k===void 0?void 0:k.firstWeekContainsDate)!==null&&o!==void 0?o:1),N=Zu(i,c),T=new Date(0);T.setUTCFullYear(N,0,v),T.setUTCHours(0,0,0,0);var M=ol(T,c);return M}var zp=6048e5;function Pp(i,c){qe(1,arguments);var o=Pt(i),d=ol(o,c).getTime()-Cp(o,c).getTime();return Math.round(d/zp)+1}function ge(i,c){for(var o=i<0?"-":"",d=Math.abs(i).toString();d.length<c;)d="0"+d;return o+d}var an={y:function(c,o){var d=c.getUTCFullYear(),u=d>0?d:1-d;return ge(o==="yy"?u%100:u,o.length)},M:function(c,o){var d=c.getUTCMonth();return o==="M"?String(d+1):ge(d+1,2)},d:function(c,o){return ge(c.getUTCDate(),o.length)},a:function(c,o){var d=c.getUTCHours()/12>=1?"pm":"am";switch(o){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];default:return d==="am"?"a.m.":"p.m."}},h:function(c,o){return ge(c.getUTCHours()%12||12,o.length)},H:function(c,o){return ge(c.getUTCHours(),o.length)},m:function(c,o){return ge(c.getUTCMinutes(),o.length)},s:function(c,o){return ge(c.getUTCSeconds(),o.length)},S:function(c,o){var d=o.length,u=c.getUTCMilliseconds(),f=Math.floor(u*Math.pow(10,d-3));return ge(f,o.length)}},qn={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Tp={G:function(c,o,d){var u=c.getUTCFullYear()>0?1:0;switch(o){case"G":case"GG":case"GGG":return d.era(u,{width:"abbreviated"});case"GGGGG":return d.era(u,{width:"narrow"});default:return d.era(u,{width:"wide"})}},y:function(c,o,d){if(o==="yo"){var u=c.getUTCFullYear(),f=u>0?u:1-u;return d.ordinalNumber(f,{unit:"year"})}return an.y(c,o)},Y:function(c,o,d,u){var f=Zu(c,u),p=f>0?f:1-f;if(o==="YY"){var w=p%100;return ge(w,2)}return o==="Yo"?d.ordinalNumber(p,{unit:"year"}):ge(p,o.length)},R:function(c,o){var d=Ju(c);return ge(d,o.length)},u:function(c,o){var d=c.getUTCFullYear();return ge(d,o.length)},Q:function(c,o,d){var u=Math.ceil((c.getUTCMonth()+1)/3);switch(o){case"Q":return String(u);case"QQ":return ge(u,2);case"Qo":return d.ordinalNumber(u,{unit:"quarter"});case"QQQ":return d.quarter(u,{width:"abbreviated",context:"formatting"});case"QQQQQ":return d.quarter(u,{width:"narrow",context:"formatting"});default:return d.quarter(u,{width:"wide",context:"formatting"})}},q:function(c,o,d){var u=Math.ceil((c.getUTCMonth()+1)/3);switch(o){case"q":return String(u);case"qq":return ge(u,2);case"qo":return d.ordinalNumber(u,{unit:"quarter"});case"qqq":return d.quarter(u,{width:"abbreviated",context:"standalone"});case"qqqqq":return d.quarter(u,{width:"narrow",context:"standalone"});default:return d.quarter(u,{width:"wide",context:"standalone"})}},M:function(c,o,d){var u=c.getUTCMonth();switch(o){case"M":case"MM":return an.M(c,o);case"Mo":return d.ordinalNumber(u+1,{unit:"month"});case"MMM":return d.month(u,{width:"abbreviated",context:"formatting"});case"MMMMM":return d.month(u,{width:"narrow",context:"formatting"});default:return d.month(u,{width:"wide",context:"formatting"})}},L:function(c,o,d){var u=c.getUTCMonth();switch(o){case"L":return String(u+1);case"LL":return ge(u+1,2);case"Lo":return d.ordinalNumber(u+1,{unit:"month"});case"LLL":return d.month(u,{width:"abbreviated",context:"standalone"});case"LLLLL":return d.month(u,{width:"narrow",context:"standalone"});default:return d.month(u,{width:"wide",context:"standalone"})}},w:function(c,o,d,u){var f=Pp(c,u);return o==="wo"?d.ordinalNumber(f,{unit:"week"}):ge(f,o.length)},I:function(c,o,d){var u=bp(c);return o==="Io"?d.ordinalNumber(u,{unit:"week"}):ge(u,o.length)},d:function(c,o,d){return o==="do"?d.ordinalNumber(c.getUTCDate(),{unit:"date"}):an.d(c,o)},D:function(c,o,d){var u=xp(c);return o==="Do"?d.ordinalNumber(u,{unit:"dayOfYear"}):ge(u,o.length)},E:function(c,o,d){var u=c.getUTCDay();switch(o){case"E":case"EE":case"EEE":return d.day(u,{width:"abbreviated",context:"formatting"});case"EEEEE":return d.day(u,{width:"narrow",context:"formatting"});case"EEEEEE":return d.day(u,{width:"short",context:"formatting"});default:return d.day(u,{width:"wide",context:"formatting"})}},e:function(c,o,d,u){var f=c.getUTCDay(),p=(f-u.weekStartsOn+8)%7||7;switch(o){case"e":return String(p);case"ee":return ge(p,2);case"eo":return d.ordinalNumber(p,{unit:"day"});case"eee":return d.day(f,{width:"abbreviated",context:"formatting"});case"eeeee":return d.day(f,{width:"narrow",context:"formatting"});case"eeeeee":return d.day(f,{width:"short",context:"formatting"});default:return d.day(f,{width:"wide",context:"formatting"})}},c:function(c,o,d,u){var f=c.getUTCDay(),p=(f-u.weekStartsOn+8)%7||7;switch(o){case"c":return String(p);case"cc":return ge(p,o.length);case"co":return d.ordinalNumber(p,{unit:"day"});case"ccc":return d.day(f,{width:"abbreviated",context:"standalone"});case"ccccc":return d.day(f,{width:"narrow",context:"standalone"});case"cccccc":return d.day(f,{width:"short",context:"standalone"});default:return d.day(f,{width:"wide",context:"standalone"})}},i:function(c,o,d){var u=c.getUTCDay(),f=u===0?7:u;switch(o){case"i":return String(f);case"ii":return ge(f,o.length);case"io":return d.ordinalNumber(f,{unit:"day"});case"iii":return d.day(u,{width:"abbreviated",context:"formatting"});case"iiiii":return d.day(u,{width:"narrow",context:"formatting"});case"iiiiii":return d.day(u,{width:"short",context:"formatting"});default:return d.day(u,{width:"wide",context:"formatting"})}},a:function(c,o,d){var u=c.getUTCHours(),f=u/12>=1?"pm":"am";switch(o){case"a":case"aa":return d.dayPeriod(f,{width:"abbreviated",context:"formatting"});case"aaa":return d.dayPeriod(f,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return d.dayPeriod(f,{width:"narrow",context:"formatting"});default:return d.dayPeriod(f,{width:"wide",context:"formatting"})}},b:function(c,o,d){var u=c.getUTCHours(),f;switch(u===12?f=qn.noon:u===0?f=qn.midnight:f=u/12>=1?"pm":"am",o){case"b":case"bb":return d.dayPeriod(f,{width:"abbreviated",context:"formatting"});case"bbb":return d.dayPeriod(f,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return d.dayPeriod(f,{width:"narrow",context:"formatting"});default:return d.dayPeriod(f,{width:"wide",context:"formatting"})}},B:function(c,o,d){var u=c.getUTCHours(),f;switch(u>=17?f=qn.evening:u>=12?f=qn.afternoon:u>=4?f=qn.morning:f=qn.night,o){case"B":case"BB":case"BBB":return d.dayPeriod(f,{width:"abbreviated",context:"formatting"});case"BBBBB":return d.dayPeriod(f,{width:"narrow",context:"formatting"});default:return d.dayPeriod(f,{width:"wide",context:"formatting"})}},h:function(c,o,d){if(o==="ho"){var u=c.getUTCHours()%12;return u===0&&(u=12),d.ordinalNumber(u,{unit:"hour"})}return an.h(c,o)},H:function(c,o,d){return o==="Ho"?d.ordinalNumber(c.getUTCHours(),{unit:"hour"}):an.H(c,o)},K:function(c,o,d){var u=c.getUTCHours()%12;return o==="Ko"?d.ordinalNumber(u,{unit:"hour"}):ge(u,o.length)},k:function(c,o,d){var u=c.getUTCHours();return u===0&&(u=24),o==="ko"?d.ordinalNumber(u,{unit:"hour"}):ge(u,o.length)},m:function(c,o,d){return o==="mo"?d.ordinalNumber(c.getUTCMinutes(),{unit:"minute"}):an.m(c,o)},s:function(c,o,d){return o==="so"?d.ordinalNumber(c.getUTCSeconds(),{unit:"second"}):an.s(c,o)},S:function(c,o){return an.S(c,o)},X:function(c,o,d,u){var f=u._originalDate||c,p=f.getTimezoneOffset();if(p===0)return"Z";switch(o){case"X":return Mu(p);case"XXXX":case"XX":return Nn(p);default:return Nn(p,":")}},x:function(c,o,d,u){var f=u._originalDate||c,p=f.getTimezoneOffset();switch(o){case"x":return Mu(p);case"xxxx":case"xx":return Nn(p);default:return Nn(p,":")}},O:function(c,o,d,u){var f=u._originalDate||c,p=f.getTimezoneOffset();switch(o){case"O":case"OO":case"OOO":return"GMT"+Ru(p,":");default:return"GMT"+Nn(p,":")}},z:function(c,o,d,u){var f=u._originalDate||c,p=f.getTimezoneOffset();switch(o){case"z":case"zz":case"zzz":return"GMT"+Ru(p,":");default:return"GMT"+Nn(p,":")}},t:function(c,o,d,u){var f=u._originalDate||c,p=Math.floor(f.getTime()/1e3);return ge(p,o.length)},T:function(c,o,d,u){var f=u._originalDate||c,p=f.getTime();return ge(p,o.length)}};function Ru(i,c){var o=i>0?"-":"+",d=Math.abs(i),u=Math.floor(d/60),f=d%60;if(f===0)return o+String(u);var p=c;return o+String(u)+p+ge(f,2)}function Mu(i,c){if(i%60===0){var o=i>0?"-":"+";return o+ge(Math.abs(i)/60,2)}return Nn(i,c)}function Nn(i,c){var o=c||"",d=i>0?"-":"+",u=Math.abs(i),f=ge(Math.floor(u/60),2),p=ge(u%60,2);return d+f+o+p}var Au=function(c,o){switch(c){case"P":return o.date({width:"short"});case"PP":return o.date({width:"medium"});case"PPP":return o.date({width:"long"});default:return o.date({width:"full"})}},ed=function(c,o){switch(c){case"p":return o.time({width:"short"});case"pp":return o.time({width:"medium"});case"ppp":return o.time({width:"long"});default:return o.time({width:"full"})}},_p=function(c,o){var d=c.match(/(P+)(p+)?/)||[],u=d[1],f=d[2];if(!f)return Au(c,o);var p;switch(u){case"P":p=o.dateTime({width:"short"});break;case"PP":p=o.dateTime({width:"medium"});break;case"PPP":p=o.dateTime({width:"long"});break;default:p=o.dateTime({width:"full"});break}return p.replace("{{date}}",Au(u,o)).replace("{{time}}",ed(f,o))},Dp={p:ed,P:_p},Op=["D","DD"],Rp=["YY","YYYY"];function Mp(i){return Op.indexOf(i)!==-1}function Ap(i){return Rp.indexOf(i)!==-1}function Lu(i,c,o){if(i==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(c,"`) for formatting years to the input `").concat(o,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(i==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(c,"`) for formatting years to the input `").concat(o,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(i==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(c,"`) for formatting days of the month to the input `").concat(o,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(i==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(c,"`) for formatting days of the month to the input `").concat(o,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Lp={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},jp=function(c,o,d){var u,f=Lp[c];return typeof f=="string"?u=f:o===1?u=f.one:u=f.other.replace("{{count}}",o.toString()),d!=null&&d.addSuffix?d.comparison&&d.comparison>0?"in "+u:u+" ago":u};function co(i){return function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=c.width?String(c.width):i.defaultWidth,d=i.formats[o]||i.formats[i.defaultWidth];return d}}var Up={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fp={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Ip={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Bp={date:co({formats:Up,defaultWidth:"full"}),time:co({formats:Fp,defaultWidth:"full"}),dateTime:co({formats:Ip,defaultWidth:"full"})},$p={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Wp=function(c,o,d,u){return $p[c]};function Ua(i){return function(c,o){var d=o!=null&&o.context?String(o.context):"standalone",u;if(d==="formatting"&&i.formattingValues){var f=i.defaultFormattingWidth||i.defaultWidth,p=o!=null&&o.width?String(o.width):f;u=i.formattingValues[p]||i.formattingValues[f]}else{var w=i.defaultWidth,y=o!=null&&o.width?String(o.width):i.defaultWidth;u=i.values[y]||i.values[w]}var k=i.argumentCallback?i.argumentCallback(c):c;return u[k]}}var Vp={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Hp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Yp={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Qp={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qp={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Gp={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Kp=function(c,o){var d=Number(c),u=d%100;if(u>20||u<10)switch(u%10){case 1:return d+"st";case 2:return d+"nd";case 3:return d+"rd"}return d+"th"},Xp={ordinalNumber:Kp,era:Ua({values:Vp,defaultWidth:"wide"}),quarter:Ua({values:Hp,defaultWidth:"wide",argumentCallback:function(c){return c-1}}),month:Ua({values:Yp,defaultWidth:"wide"}),day:Ua({values:Qp,defaultWidth:"wide"}),dayPeriod:Ua({values:qp,defaultWidth:"wide",formattingValues:Gp,defaultFormattingWidth:"wide"})};function Fa(i){return function(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=o.width,u=d&&i.matchPatterns[d]||i.matchPatterns[i.defaultMatchWidth],f=c.match(u);if(!f)return null;var p=f[0],w=d&&i.parsePatterns[d]||i.parsePatterns[i.defaultParseWidth],y=Array.isArray(w)?Zp(w,function(v){return v.test(p)}):Jp(w,function(v){return v.test(p)}),k;k=i.valueCallback?i.valueCallback(y):y,k=o.valueCallback?o.valueCallback(k):k;var x=c.slice(p.length);return{value:k,rest:x}}}function Jp(i,c){for(var o in i)if(i.hasOwnProperty(o)&&c(i[o]))return o}function Zp(i,c){for(var o=0;o<i.length;o++)if(c(i[o]))return o}function eg(i){return function(c){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=c.match(i.matchPattern);if(!d)return null;var u=d[0],f=c.match(i.parsePattern);if(!f)return null;var p=i.valueCallback?i.valueCallback(f[0]):f[0];p=o.valueCallback?o.valueCallback(p):p;var w=c.slice(u.length);return{value:p,rest:w}}}var tg=/^(\d+)(th|st|nd|rd)?/i,ng=/\d+/i,ag={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},rg={any:[/^b/i,/^(a|c)/i]},lg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ig={any:[/1/i,/2/i,/3/i,/4/i]},og={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},sg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},cg={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ug={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},dg={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},mg={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},fg={ordinalNumber:eg({matchPattern:tg,parsePattern:ng,valueCallback:function(c){return parseInt(c,10)}}),era:Fa({matchPatterns:ag,defaultMatchWidth:"wide",parsePatterns:rg,defaultParseWidth:"any"}),quarter:Fa({matchPatterns:lg,defaultMatchWidth:"wide",parsePatterns:ig,defaultParseWidth:"any",valueCallback:function(c){return c+1}}),month:Fa({matchPatterns:og,defaultMatchWidth:"wide",parsePatterns:sg,defaultParseWidth:"any"}),day:Fa({matchPatterns:cg,defaultMatchWidth:"wide",parsePatterns:ug,defaultParseWidth:"any"}),dayPeriod:Fa({matchPatterns:dg,defaultMatchWidth:"any",parsePatterns:mg,defaultParseWidth:"any"})},pg={code:"en-US",formatDistance:jp,formatLong:Bp,formatRelative:Wp,localize:Xp,match:fg,options:{weekStartsOn:0,firstWeekContainsDate:1}},gg=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vg=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,hg=/^'([^]*?)'?$/,yg=/''/g,Eg=/[a-zA-Z]/;function Ct(i,c,o){var d,u,f,p,w,y,k,x,v,N,T,M,z,C;qe(2,arguments);var O=String(c),R=cl(),F=(d=(u=void 0)!==null&&u!==void 0?u:R.locale)!==null&&d!==void 0?d:pg,I=xn((f=(p=(w=(y=void 0)!==null&&y!==void 0?y:void 0)!==null&&w!==void 0?w:R.firstWeekContainsDate)!==null&&p!==void 0?p:(k=R.locale)===null||k===void 0||(x=k.options)===null||x===void 0?void 0:x.firstWeekContainsDate)!==null&&f!==void 0?f:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var te=xn((v=(N=(T=(M=void 0)!==null&&M!==void 0?M:void 0)!==null&&T!==void 0?T:R.weekStartsOn)!==null&&N!==void 0?N:(z=R.locale)===null||z===void 0||(C=z.options)===null||C===void 0?void 0:C.weekStartsOn)!==null&&v!==void 0?v:0);if(!(te>=0&&te<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!F.localize)throw new RangeError("locale must contain localize property");if(!F.formatLong)throw new RangeError("locale must contain formatLong property");var $=Pt(i);if(!Ep($))throw new RangeError("Invalid time value");var ne=hp($),W=wp($,ne),H={firstWeekContainsDate:I,weekStartsOn:te,locale:F,_originalDate:$},ve=O.match(vg).map(function(re){var me=re[0];if(me==="p"||me==="P"){var Se=Dp[me];return Se(re,F.formatLong)}return re}).join("").match(gg).map(function(re){if(re==="''")return"'";var me=re[0];if(me==="'")return wg(re);var Se=Tp[me];if(Se)return Ap(re)&&Lu(re,c,String(i)),Mp(re)&&Lu(re,c,String(i)),Se(W,re,F.localize,H);if(me.match(Eg))throw new RangeError("Format string contains an unescaped latin alphabet character `"+me+"`");return re}).join("");return ve}function wg(i){var c=i.match(hg);return c?c[1].replace(yg,"'"):i}const Ng=()=>{const{user:i}=Be(),[c,o]=D.useState([]),[d,u]=D.useState([]),[f,p]=D.useState(!0);D.useEffect(()=>{(async()=>{p(!0);const v=localStorage.getItem("healthRecordToken");try{const N=await fetch("/api/appointments",{headers:{Authorization:`Bearer ${v}`}}),T=await N.json();let M=[];N.ok&&Array.isArray(T.appointments)&&(M=await Promise.all(T.appointments.map(async C=>{let O=C.doctor_id||"Doctor",R="";try{const $=await fetch(`/api/users/${C.doctor_id}`,{headers:{Authorization:`Bearer ${v}`}});if($.ok){const W=(await $.json()).user;O=(W.name||"").split(" ").filter(Boolean).join(" ")||O,R=W.profile?.specialization||""}}catch{}const F=new Date(C.datetime),I=isNaN(F)?C.datetime:F.toISOString().split("T")[0],te=isNaN(F)?"":F.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return{id:C._id||C.id,doctor:O,specialization:R,date:I,time:te,status:C.status,type:C.type||"Consultation",location:C.location||"",notes:C.notes||""}})));let z=[];try{if(i?.id){const C=await fetch(`/api/records/patient/${i.id}`,{headers:{Authorization:`Bearer ${v}`}}),O=await C.json();C.ok&&Array.isArray(O.records)&&(z=O.records.map(R=>({id:R._id,date:R.created_at||R.date||R.createdAt||"",doctor:R.doctor_name||R.doctor_id||R.doctor||"",type:R.type||"Record",diagnosis:R.diagnosis||"",medications:R.prescription?[R.prescription]:R.medications||[],notes:R.notes||""})))}}catch{}o(M),u(z)}catch(N){console.error("Failed to load dashboard data",N)}p(!1)})()},[i]);const w=x=>{switch(x){case"approved":return a.createElement("span",{className:"badge badge-success"},"Approved");case"pending":return a.createElement("span",{className:"badge badge-pending"},"Pending");case"cancelled":return a.createElement("span",{className:"badge badge-cancelled"},"Cancelled");default:return a.createElement("span",{className:"badge badge-info"},"Scheduled")}},y=x=>{if(!x)return"";try{const v=new Date(x);return isNaN(v)?x:Ct(v,"MMM dd, yyyy")}catch{return x}},k=(x="")=>x.split(" ").filter(Boolean).map(v=>v[0]).join("").toUpperCase();return f?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"patient-dashboard"},a.createElement("div",{className:"welcome-section"},a.createElement("div",{className:"welcome-header"},a.createElement("div",{className:"user-avatar-large"},a.createElement("span",{className:"avatar-initials"},k(`${i?.firstName??""} ${i?.lastName??""}`))),a.createElement("div",{className:"welcome-content"},a.createElement("h1",{className:"welcome-title"},"Welcome back, ",i?.firstName??"Guest","!"),a.createElement("p",{className:"welcome-subtitle"},"Here's your health summary for today")))),a.createElement("div",{className:"stats-grid"},a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-calendar-check"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.length),a.createElement("p",{className:"stat-label"},"Upcoming Appointments"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-file-medical"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},d.length),a.createElement("p",{className:"stat-label"},"Medical Records"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-pills"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},"3"),a.createElement("p",{className:"stat-label"},"Active Medications"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-heartbeat"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},"Normal"),a.createElement("p",{className:"stat-label"},"Health Status")))),a.createElement("div",{className:"dashboard-grid"},a.createElement("div",{className:"dashboard-card"},a.createElement("div",{className:"card-header"},a.createElement("h2",{className:"card-title"},a.createElement("i",{className:"fas fa-calendar-alt"}),"Upcoming Appointments"),a.createElement("a",{href:"/patient/appointments",className:"view-all-link"},"View All")),a.createElement("div",{className:"appointments-list"},c.slice(0,3).map(x=>a.createElement("div",{key:x.id,className:"appointment-item"},a.createElement("div",{className:"appointment-info"},a.createElement("h4",{className:"appointment-doctor"},x.doctor),a.createElement("p",{className:"appointment-specialization"},x.specialization),a.createElement("div",{className:"appointment-details"},a.createElement("span",{className:"appointment-date"},a.createElement("i",{className:"fas fa-calendar"}),y(x.date)),a.createElement("span",{className:"appointment-time"},a.createElement("i",{className:"fas fa-clock"}),x.time))),a.createElement("div",{className:"appointment-status"},w(x.status)))))),a.createElement("div",{className:"dashboard-card"},a.createElement("div",{className:"card-header"},a.createElement("h2",{className:"card-title"},a.createElement("i",{className:"fas fa-file-medical-alt"}),"Recent Medical Records"),a.createElement("a",{href:"/patient/medical-records",className:"view-all-link"},"View All")),a.createElement("div",{className:"records-list"},d.slice(0,3).map(x=>a.createElement("div",{key:x.id,className:"record-item"},a.createElement("div",{className:"record-header"},a.createElement("div",{className:"record-doctor"},a.createElement("div",{className:"doctor-avatar"},k(x.doctor)),a.createElement("div",{className:"doctor-info"},a.createElement("h4",{className:"doctor-name"},x.doctor),a.createElement("p",{className:"record-date"},y(x.date)))),a.createElement("span",{className:"record-type"},x.type)),a.createElement("div",{className:"record-content"},a.createElement("p",{className:"record-diagnosis"},x.diagnosis),x.medications.length>0&&a.createElement("div",{className:"record-medications"},a.createElement("strong",null,"Medications:"),a.createElement("span",null,x.medications.join(", "))))))))),a.createElement("div",{className:"quick-actions"},a.createElement("h3",{className:"section-title"},"Quick Actions"),a.createElement("div",{className:"actions-grid"},a.createElement("a",{href:"/appointments/book",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-calendar-plus"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"Book Appointment"),a.createElement("p",null,"Schedule a new appointment"))),a.createElement("a",{href:"/patient/profile",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-user-edit"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"Update Profile"),a.createElement("p",null,"Update your personal information"))),a.createElement("a",{href:"/patient/medical-records",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-history"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"View History"),a.createElement("p",null,"Check your medical history"))))),a.createElement("style",null,`
        .patient-dashboard {
          animation: fadeIn 0.5s ease-in;
        }
        
        .welcome-section {
          background: linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark));
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          margin-bottom: var(--spacing-8);
          color: var(--white);
        }
        
        .welcome-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .user-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          font-weight: 600;
        }
        
        .avatar-initials {
          color: var(--white);
        }
        
        .welcome-content {
          flex: 1;
        }
        
        .welcome-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .welcome-subtitle {
          font-size: var(--font-size-lg);
          opacity: 0.9;
          margin: 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-8);
        }
        
        .stat-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          box-shadow: var(--shadow-md);
          transition: transform 0.2s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-blue);
        }
        
        .stat-number {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .stat-label {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
        }
        
        .dashboard-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .card-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .view-all-link {
          color: var(--primary-blue);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: 500;
        }
        
        .view-all-link:hover {
          text-decoration: underline;
        }
        
        .appointments-list,
        .records-list {
          padding: var(--spacing-4);
        }
        
        .appointment-item,
        .record-item {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-100);
          transition: background-color 0.2s ease;
        }
        
        .appointment-item:last-child,
        .record-item:last-child {
          border-bottom: none;
        }
        
        .appointment-item:hover,
        .record-item:hover {
          background-color: var(--gray-50);
        }
        
        .appointment-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .appointment-doctor {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .appointment-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .appointment-details {
          display: flex;
          gap: var(--spacing-4);
          font-size: var(--font-size-sm);
          color: var(--gray-600);
        }
        
        .appointment-details i {
          margin-right: var(--spacing-1);
        }
        
        .record-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-3);
        }
        
        .record-doctor {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }
        
        .doctor-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-sm);
        }
        
        .doctor-name {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
        }
        
        .record-date {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .record-type {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .record-content {
          margin-left: var(--spacing-11);
        }
        
        .record-diagnosis {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .record-medications {
          font-size: var(--font-size-xs);
          color: var(--gray-600);
        }
        
        .record-medications strong {
          color: var(--gray-700);
        }
        
        .quick-actions {
          margin-bottom: var(--spacing-8);
        }
        
        .section-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-4) 0;
        }
        
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-4);
        }
        
        .action-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }
        
        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .action-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(59, 130, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-blue);
          flex-shrink: 0;
        }
        
        .action-content h4 {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .action-content p {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .welcome-header {
            flex-direction: column;
            text-align: center;
          }
          
          .welcome-title {
            font-size: var(--font-size-2xl);
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `))},xg=()=>{const{user:i,updateProfile:c}=Be(),[o,d]=D.useState(!1),[u,f]=D.useState({firstName:i.firstName||"",lastName:i.lastName||"",email:i.email||"",dateOfBirth:i.profile?.dateOfBirth||"",gender:i.profile?.gender||"",phone:i.profile?.phone||"",address:i.profile?.address||"",bloodType:i.profile?.bloodType||"",allergies:i.profile?.allergies?.join(", ")||"",emergencyContact:{name:i.profile?.emergencyContact?.name||"",relationship:i.profile?.emergencyContact?.relationship||"",phone:i.profile?.emergencyContact?.phone||""}}),[p,w]=D.useState({}),[y,k]=D.useState(!1),[x,v]=D.useState(!1),N=O=>{const{name:R,value:F}=O.target;if(R.startsWith("emergencyContact.")){const I=R.split(".")[1];f(te=>({...te,emergencyContact:{...te.emergencyContact,[I]:F}}))}else f(I=>({...I,[R]:F}));p[R]&&w(I=>({...I,[R]:""}))},T=()=>{const O={};return u.firstName.trim()||(O.firstName="First name is required"),u.lastName.trim()||(O.lastName="Last name is required"),u.email.trim()?/\S+@\S+\.\S+/.test(u.email)||(O.email="Email is invalid"):O.email="Email is required",u.phone.trim()||(O.phone="Phone number is required"),u.address.trim()||(O.address="Address is required"),w(O),Object.keys(O).length===0},M=async O=>{if(O.preventDefault(),!!T()){k(!0),v(!1);try{const R={firstName:u.firstName,lastName:u.lastName,email:u.email,dateOfBirth:u.dateOfBirth,gender:u.gender,phone:u.phone,address:u.address,bloodType:u.bloodType,allergies:u.allergies?u.allergies.split(",").map(I=>I.trim()):[],emergencyContact:u.emergencyContact};if((await c(R)).success){v(!0),d(!1),setTimeout(()=>v(!1),3e3);try{const{showToast:I}=await Eo(async()=>{const{showToast:te}=await import("./toast-D5Sf84tm.js");return{showToast:te}},[]);I({type:"success",message:"Profile updated"})}catch{}}}catch{w({general:"Failed to update profile. Please try again."})}finally{k(!1)}}},z=()=>{d(!1),f({firstName:i.firstName||"",lastName:i.lastName||"",email:i.email||"",dateOfBirth:i.profile?.dateOfBirth||"",gender:i.profile?.gender||"",phone:i.profile?.phone||"",address:i.profile?.address||"",bloodType:i.profile?.bloodType||"",allergies:i.profile?.allergies?.join(", ")||"",emergencyContact:{name:i.profile?.emergencyContact?.name||"",relationship:i.profile?.emergencyContact?.relationship||"",phone:i.profile?.emergencyContact?.phone||""}}),w({})},C=O=>{if(!O)return"N/A";const R=new Date,F=new Date(O);let I=R.getFullYear()-F.getFullYear();const te=R.getMonth()-F.getMonth();return(te<0||te===0&&R.getDate()<F.getDate())&&I--,I};return a.createElement("div",{className:"patient-profile"},a.createElement("div",{className:"profile-header"},a.createElement("h1",{className:"page-title"},"Patient Profile"),!o&&a.createElement("button",{className:"btn btn-primary",onClick:()=>d(!0)},a.createElement("i",{className:"fas fa-edit"}),"Edit Profile")),x&&a.createElement("div",{className:"alert alert-success"},a.createElement("i",{className:"fas fa-check-circle"}),"Profile updated successfully!"),p.general&&a.createElement("div",{className:"alert alert-error"},a.createElement("i",{className:"fas fa-exclamation-circle"}),p.general),o?a.createElement("form",{onSubmit:M,className:"profile-form"},a.createElement("div",{className:"form-section"},a.createElement("h2",{className:"section-title"},"Personal Information"),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"First Name *"),a.createElement("input",{type:"text",name:"firstName",className:`form-control ${p.firstName?"error":""}`,value:u.firstName,onChange:N,disabled:y}),p.firstName&&a.createElement("span",{className:"error-message"},p.firstName)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Last Name *"),a.createElement("input",{type:"text",name:"lastName",className:`form-control ${p.lastName?"error":""}`,value:u.lastName,onChange:N,disabled:y}),p.lastName&&a.createElement("span",{className:"error-message"},p.lastName))),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Email Address *"),a.createElement("input",{type:"email",name:"email",className:`form-control ${p.email?"error":""}`,value:u.email,onChange:N,disabled:y}),p.email&&a.createElement("span",{className:"error-message"},p.email)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Date of Birth"),a.createElement("input",{type:"date",name:"dateOfBirth",className:"form-control",value:u.dateOfBirth,onChange:N,disabled:y}))),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Gender"),a.createElement("select",{name:"gender",className:"form-select",value:u.gender,onChange:N,disabled:y},a.createElement("option",{value:""},"Select Gender"),a.createElement("option",{value:"Male"},"Male"),a.createElement("option",{value:"Female"},"Female"),a.createElement("option",{value:"Other"},"Other"),a.createElement("option",{value:"Prefer not to say"},"Prefer not to say"))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Phone Number *"),a.createElement("input",{type:"tel",name:"phone",className:`form-control ${p.phone?"error":""}`,value:u.phone,onChange:N,disabled:y}),p.phone&&a.createElement("span",{className:"error-message"},p.phone))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Address *"),a.createElement("textarea",{name:"address",className:`form-control ${p.address?"error":""}`,rows:"3",value:u.address,onChange:N,disabled:y}),p.address&&a.createElement("span",{className:"error-message"},p.address))),a.createElement("div",{className:"form-section"},a.createElement("h2",{className:"section-title"},"Medical Information"),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Blood Type"),a.createElement("select",{name:"bloodType",className:"form-select",value:u.bloodType,onChange:N,disabled:y},a.createElement("option",{value:""},"Select Blood Type"),a.createElement("option",{value:"A+"},"A+"),a.createElement("option",{value:"A-"},"A-"),a.createElement("option",{value:"B+"},"B+"),a.createElement("option",{value:"B-"},"B-"),a.createElement("option",{value:"AB+"},"AB+"),a.createElement("option",{value:"AB-"},"AB-"),a.createElement("option",{value:"O+"},"O+"),a.createElement("option",{value:"O-"},"O-"))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Allergies"),a.createElement("input",{type:"text",name:"allergies",className:"form-control",placeholder:"e.g., Penicillin, Shellfish, Nuts",value:u.allergies,onChange:N,disabled:y}),a.createElement("small",{className:"form-text"},"Separate multiple allergies with commas")))),a.createElement("div",{className:"form-section"},a.createElement("h2",{className:"section-title"},"Emergency Contact"),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Contact Name"),a.createElement("input",{type:"text",name:"emergencyContact.name",className:"form-control",value:u.emergencyContact.name,onChange:N,disabled:y})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Relationship"),a.createElement("input",{type:"text",name:"emergencyContact.relationship",className:"form-control",placeholder:"e.g., Spouse, Parent, Friend",value:u.emergencyContact.relationship,onChange:N,disabled:y}))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Contact Phone"),a.createElement("input",{type:"tel",name:"emergencyContact.phone",className:"form-control",value:u.emergencyContact.phone,onChange:N,disabled:y}))),a.createElement("div",{className:"form-actions"},a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:z,disabled:y,"aria-busy":y},"Cancel"),a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:y,"aria-busy":y},y?a.createElement(a.Fragment,null,a.createElement("div",{className:"spinner","aria-hidden":"true"}),"Saving..."):"Save Changes"))):a.createElement("div",{className:"profile-view"},a.createElement("div",{className:"profile-section"},a.createElement("h2",{className:"section-title"},"Personal Information"),a.createElement("div",{className:"info-grid"},a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Full Name"),a.createElement("p",{className:"info-value"},i.firstName," ",i.lastName)),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Email Address"),a.createElement("p",{className:"info-value"},i.email)),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Date of Birth"),a.createElement("p",{className:"info-value"},i.profile?.dateOfBirth||"N/A",i.profile?.dateOfBirth&&a.createElement("span",{className:"age-badge"},"Age: ",C(i.profile.dateOfBirth)))),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Gender"),a.createElement("p",{className:"info-value"},i.profile?.gender||"N/A")),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Phone Number"),a.createElement("p",{className:"info-value"},i.profile?.phone||"N/A")),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Address"),a.createElement("p",{className:"info-value"},i.profile?.address||"N/A")))),a.createElement("div",{className:"profile-section"},a.createElement("h2",{className:"section-title"},"Medical Information"),a.createElement("div",{className:"info-grid"},a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Blood Type"),a.createElement("p",{className:"info-value"},i.profile?.bloodType||"N/A")),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Allergies"),a.createElement("p",{className:"info-value"},i.profile?.allergies?.length>0?i.profile.allergies.join(", "):"None listed")))),a.createElement("div",{className:"profile-section"},a.createElement("h2",{className:"section-title"},"Emergency Contact"),a.createElement("div",{className:"info-grid"},a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Contact Name"),a.createElement("p",{className:"info-value"},i.profile?.emergencyContact?.name||"N/A")),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Relationship"),a.createElement("p",{className:"info-value"},i.profile?.emergencyContact?.relationship||"N/A")),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Contact Phone"),a.createElement("p",{className:"info-value"},i.profile?.emergencyContact?.phone||"N/A"))))),a.createElement("style",null,`
        .patient-profile {
          animation: fadeIn 0.5s ease-in;
        }
        
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .alert {
          padding: var(--spacing-3) var(--spacing-4);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .alert-success {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--status-success);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .alert-error {
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--status-error);
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .profile-form {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-8);
        }
        
        .form-section {
          margin-bottom: var(--spacing-8);
        }
        
        .section-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-4) 0;
          padding-bottom: var(--spacing-2);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }
        
        .form-actions {
          display: flex;
          gap: var(--spacing-3);
          justify-content: flex-end;
          margin-top: var(--spacing-6);
        }
        
        .spinner {
          border: 2px solid var(--white);
          border-top: 2px solid transparent;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          animation: spin 1s linear infinite;
          margin-right: var(--spacing-2);
        }
        
        .profile-view {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }
        
        .profile-section {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-8);
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-6);
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .info-label {
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--gray-500);
          margin: 0;
        }
        
        .info-value {
          font-size: var(--font-size-base);
          color: var(--gray-800);
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .age-badge {
          background: var(--primary-blue);
          color: var(--white);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .form-text {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
          margin-top: var(--spacing-1);
        }
        
        @media (max-width: 768px) {
          .profile-header {
            flex-direction: column;
            gap: var(--spacing-4);
            align-items: stretch;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .profile-form,
          .profile-section {
            padding: var(--spacing-6);
          }
          
          .info-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-4);
          }
        }
      `))},kg=()=>{const{user:i}=Be(),[c,o]=D.useState([]),[d,u]=D.useState(!0);D.useEffect(()=>{(async()=>{u(!0);const w=localStorage.getItem("healthRecordToken");try{if(!i?.id){o([]),u(!1);return}const y=await fetch(`/api/records/patient/${i.id}`,{headers:{Authorization:`Bearer ${w}`}}),k=await y.json();if(y.ok&&Array.isArray(k.records)){const x=k.records.map(v=>({id:v._id,date:v.created_at||v.date||v.createdAt||"",doctor:v.doctor_name||v.doctor_id||v.doctor||"",specialization:v.specialization||"",type:v.type||"Record",diagnosis:v.diagnosis||"",symptoms:v.symptoms||[],medications:v.prescription?[{name:v.prescription,dosage:"",frequency:""}]:v.medications||[],tests:v.tests||[],notes:v.notes||"",followUp:v.followUp||""}));o(x)}}catch(y){console.error("Failed to fetch medical records",y)}u(!1)})()},[i]);const f=p=>p.split(" ").map(w=>w[0]).join("");return d?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"patient-medical-records"},a.createElement("div",{className:"page-header"},a.createElement("h1",{className:"page-title"},"Medical Records"),a.createElement("p",{className:"page-subtitle"},"Complete history of your medical appointments and treatments")),a.createElement("div",{className:"medical-records-container"},a.createElement("div",{className:"timeline"},c.map((p,w)=>a.createElement("div",{key:p.id,className:"timeline-item"},a.createElement("div",{className:"timeline-marker"},w===0&&a.createElement("div",{className:"timeline-line-top"}),a.createElement("div",{className:"timeline-dot"}),w<c.length-1&&a.createElement("div",{className:"timeline-line-bottom"})),a.createElement("div",{className:"timeline-content"},a.createElement("div",{className:"record-card"},a.createElement("div",{className:"record-header"},a.createElement("div",{className:"doctor-info"},a.createElement("div",{className:"doctor-avatar"},f(p.doctor)),a.createElement("div",{className:"doctor-details"},a.createElement("h3",{className:"doctor-name"},p.doctor),a.createElement("p",{className:"doctor-specialization"},p.specialization))),a.createElement("div",{className:"record-date"},a.createElement("span",{className:"date-label"},Ct(new Date(p.date),"MMMM dd, yyyy")),a.createElement("span",{className:"record-type"},p.type))),a.createElement("div",{className:"record-body"},a.createElement("div",{className:"record-section"},a.createElement("h4",{className:"section-title"},"Diagnosis"),a.createElement("p",{className:"diagnosis-text"},p.diagnosis)),p.symptoms.length>0&&a.createElement("div",{className:"record-section"},a.createElement("h4",{className:"section-title"},"Symptoms"),a.createElement("ul",{className:"symptoms-list"},p.symptoms.map((y,k)=>a.createElement("li",{key:k,className:"symptom-item"},y)))),p.medications.length>0&&a.createElement("div",{className:"record-section"},a.createElement("h4",{className:"section-title"},"Prescribed Medications"),a.createElement("div",{className:"medications-list"},p.medications.map((y,k)=>a.createElement("div",{key:k,className:"medication-item"},a.createElement("span",{className:"medication-name"},y.name),a.createElement("span",{className:"medication-dosage"},y.dosage),a.createElement("span",{className:"medication-frequency"},y.frequency))))),p.tests.length>0&&a.createElement("div",{className:"record-section"},a.createElement("h4",{className:"section-title"},"Tests Performed"),a.createElement("div",{className:"tests-list"},p.tests.map((y,k)=>a.createElement("span",{key:k,className:"test-item"},y)))),a.createElement("div",{className:"record-section"},a.createElement("h4",{className:"section-title"},"Doctor's Notes"),a.createElement("p",{className:"notes-text"},p.notes)),p.followUp&&a.createElement("div",{className:"follow-up"},a.createElement("i",{className:"fas fa-calendar-alt"}),a.createElement("span",null,"Follow-up scheduled for ",Ct(new Date(p.followUp),"MMMM dd, yyyy"))))))))),c.length===0&&a.createElement("div",{className:"no-records"},a.createElement("i",{className:"fas fa-file-medical"}),a.createElement("h3",null,"No Medical Records Found"),a.createElement("p",null,"Your medical history will appear here once you have appointments with doctors."))),a.createElement("style",null,`
        .patient-medical-records {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          margin-bottom: var(--spacing-8);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .page-subtitle {
          color: var(--gray-500);
          font-size: var(--font-size-base);
          margin: 0;
        }
        
        .medical-records-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .timeline {
          position: relative;
          padding-left: var(--spacing-8);
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gray-200);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: var(--spacing-6);
        }
        
        .timeline-marker {
          position: absolute;
          left: -32px;
          top: var(--spacing-4);
          width: 16px;
          height: 16px;
        }
        
        .timeline-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primary-blue);
          border: 3px solid var(--white);
          box-shadow: 0 0 0 3px var(--primary-blue);
          position: relative;
          z-index: 2;
        }
        
        .timeline-line-top,
        .timeline-line-bottom {
          position: absolute;
          left: 7px;
          width: 2px;
          background: var(--gray-200);
        }
        
        .timeline-line-top {
          bottom: 100%;
          height: 20px;
        }
        
        .timeline-line-bottom {
          top: 100%;
          height: calc(100% + 24px);
        }
        
        .timeline-content {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          transition: transform 0.2s ease;
        }
        
        .timeline-content:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .record-card {
          background: var(--white);
        }
        
        .record-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: var(--gray-50);
        }
        
        .doctor-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .doctor-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-base);
          flex-shrink: 0;
        }
        
        .doctor-details {
          flex: 1;
          min-width: 0;
        }
        
        .doctor-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .doctor-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .record-date {
          text-align: right;
          flex-shrink: 0;
        }
        
        .date-label {
          font-size: var(--font-size-sm);
          color: var(--gray-600);
          display: block;
          margin-bottom: var(--spacing-1);
        }
        
        .record-type {
          background: var(--primary-blue);
          color: var(--white);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .record-body {
          padding: var(--spacing-6);
        }
        
        .record-section {
          margin-bottom: var(--spacing-6);
        }
        
        .record-section:last-child {
          margin-bottom: 0;
        }
        
        .section-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-700);
          margin: 0 0 var(--spacing-3) 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .section-title::before {
          content: '';
          width: 4px;
          height: 16px;
          background: var(--primary-blue);
          border-radius: 2px;
        }
        
        .diagnosis-text {
          color: var(--gray-800);
          font-size: var(--font-size-base);
          line-height: 1.6;
          margin: 0;
          background: var(--gray-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--primary-blue);
        }
        
        .symptoms-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .symptom-item {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          padding: var(--spacing-2) 0;
          border-bottom: 1px solid var(--gray-100);
        }
        
        .symptom-item:last-child {
          border-bottom: none;
        }
        
        .symptom-item::before {
          content: '•';
          color: var(--primary-blue);
          font-weight: bold;
          margin-right: var(--spacing-2);
        }
        
        .medications-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2);
        }
        
        .medication-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-3);
          background: var(--gray-50);
          border-radius: var(--radius-md);
          border: 1px solid var(--gray-200);
        }
        
        .medication-name {
          font-weight: 600;
          color: var(--gray-800);
          font-size: var(--font-size-sm);
        }
        
        .medication-dosage {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          background: var(--white);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          border: 1px solid var(--gray-300);
        }
        
        .medication-frequency {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
          font-style: italic;
        }
        
        .tests-list {
          display: flex;
          flex-wrap: wrap;
          gap: var(--spacing-2);
        }
        
        .test-item {
          background: var(--gray-100);
          color: var(--gray-700);
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .notes-text {
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          line-height: 1.6;
          margin: 0;
          background: var(--gray-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--gray-300);
        }
        
        .follow-up {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-4);
          background: rgba(59, 130, 246, 0.1);
          border-radius: var(--radius-md);
          margin-top: var(--spacing-4);
          color: var(--primary-blue);
          font-size: var(--font-size-sm);
          font-weight: 500;
        }
        
        .follow-up i {
          color: var(--primary-blue);
        }
        
        .no-records {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-records i {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-4);
          display: block;
          color: var(--gray-300);
        }
        
        .no-records h3 {
          color: var(--gray-600);
          font-size: var(--font-size-xl);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .no-records p {
          color: var(--gray-500);
          font-size: var(--font-size-base);
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .timeline {
            padding-left: var(--spacing-4);
          }
          
          .timeline::before {
            left: 8px;
          }
          
          .timeline-marker {
            left: -24px;
          }
          
          .record-header {
            flex-direction: column;
            gap: var(--spacing-3);
            align-items: flex-start;
          }
          
          .record-date {
            text-align: left;
          }
          
          .medication-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-2);
          }
        }
      `))},Sg=()=>{const{user:i}=Be(),[c,o]=D.useState([]),[d,u]=D.useState(!0),[f,p]=D.useState("upcoming");D.useEffect(()=>{(async()=>{u(!0);const N=localStorage.getItem("healthRecordToken");try{const T=await fetch("/api/appointments",{headers:{Authorization:`Bearer ${N}`}}),M=await T.json();if(T.ok&&Array.isArray(M.appointments)){const z=await Promise.all(M.appointments.map(async C=>{let O=C.doctor_id;try{const F=await fetch(`/api/users/${C.doctor_id}`,{headers:{Authorization:`Bearer ${N}`}});F.ok&&(O=(await F.json()).user?.name||O)}catch{}const R=new Date(C.datetime);return{id:C._id||C.id,doctor:O,specialization:"",date:isNaN(R)?C.datetime:R.toISOString().split("T")[0],time:isNaN(R)?"":R.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),status:C.status,type:C.type||"Consultation",location:C.location||"",notes:C.notes||""}}));o(z)}}catch(T){console.error("Failed to fetch appointments",T)}u(!1)})()},[]);const w=v=>{switch(v){case"approved":return a.createElement("span",{className:"badge badge-success"},"Approved");case"pending":return a.createElement("span",{className:"badge badge-warning"},"Pending");case"completed":return a.createElement("span",{className:"badge badge-info"},"Completed");case"cancelled":return a.createElement("span",{className:"badge badge-error"},"Cancelled");default:return a.createElement("span",{className:"badge badge-info"},v)}},y=v=>v.split(" ").map(N=>N[0]).join(""),k=c.filter(v=>{const N=new Date,T=new Date(v.date);switch(f){case"upcoming":return T>=N&&v.status!=="cancelled";case"pending":return v.status==="pending";case"completed":return v.status==="completed";case"cancelled":return v.status==="cancelled";default:return!0}}),x=v=>{if(!window.confirm("Are you sure you want to cancel this appointment?"))return;const N=localStorage.getItem("healthRecordToken");(async()=>{try{const T=await fetch(`/api/appointments/${v}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N}`},body:JSON.stringify({action:"cancel"})});if(T.ok){const M=await T.json();o(c.map(z=>z.id===v?{...z,status:M.appointment.status}:z))}else{const M=await T.json();alert(M.error||"Failed to cancel")}}catch(T){console.error("Cancel failed",T),alert("Network error")}})()};return d?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"patient-appointments"},a.createElement("div",{className:"page-header"},a.createElement("h1",{className:"page-title"},"My Appointments"),a.createElement("a",{href:"/appointments/book",className:"btn btn-primary"},a.createElement("i",{className:"fas fa-plus"}),"Book New Appointment")),a.createElement("div",{className:"appointments-tabs"},a.createElement("button",{className:`tab-button ${f==="upcoming"?"active":""}`,onClick:()=>p("upcoming")},"Upcoming"),a.createElement("button",{className:`tab-button ${f==="pending"?"active":""}`,onClick:()=>p("pending")},"Pending"),a.createElement("button",{className:`tab-button ${f==="completed"?"active":""}`,onClick:()=>p("completed")},"Completed"),a.createElement("button",{className:`tab-button ${f==="cancelled"?"active":""}`,onClick:()=>p("cancelled")},"Cancelled")),a.createElement("div",{className:"appointments-container"},k.length===0?a.createElement("div",{className:"no-appointments"},a.createElement("i",{className:"fas fa-calendar-times"}),a.createElement("h3",null,"No ",f," appointments found"),a.createElement("p",null,f==="upcoming"&&"You have no upcoming appointments scheduled.",f==="pending"&&"You have no pending appointments.",f==="completed"&&"You have no completed appointments.",f==="cancelled"&&"You have no cancelled appointments."),f==="upcoming"&&a.createElement("a",{href:"/appointments/book",className:"btn btn-primary"},"Book Your First Appointment")):a.createElement("div",{className:"appointments-grid"},k.map(v=>a.createElement("div",{key:v.id,className:"appointment-card"},a.createElement("div",{className:"card-header"},a.createElement("div",{className:"doctor-info"},a.createElement("div",{className:"doctor-avatar"},y(v.doctor)),a.createElement("div",{className:"doctor-details"},a.createElement("h3",{className:"doctor-name"},v.doctor),a.createElement("p",{className:"doctor-specialization"},v.specialization))),a.createElement("div",{className:"appointment-status"},w(v.status))),a.createElement("div",{className:"card-body"},a.createElement("div",{className:"appointment-datetime"},a.createElement("div",{className:"appointment-date"},a.createElement("i",{className:"fas fa-calendar"}),Ct(new Date(v.date),"EEEE, MMMM dd, yyyy")),a.createElement("div",{className:"appointment-time"},a.createElement("i",{className:"fas fa-clock"}),v.time)),a.createElement("div",{className:"appointment-details"},a.createElement("div",{className:"detail-item"},a.createElement("i",{className:"fas fa-stethoscope"}),a.createElement("span",{className:"detail-label"},"Type:"),a.createElement("span",{className:"detail-value"},v.type)),a.createElement("div",{className:"detail-item"},a.createElement("i",{className:"fas fa-map-marker-alt"}),a.createElement("span",{className:"detail-label"},"Location:"),a.createElement("span",{className:"detail-value"},v.location))),v.notes&&a.createElement("div",{className:"appointment-notes"},a.createElement("h4",{className:"notes-title"},"Notes"),a.createElement("p",{className:"notes-text"},v.notes))),a.createElement("div",{className:"card-footer"},v.status==="approved"&&new Date(v.date)>=new Date&&a.createElement("button",{className:"btn btn-outline btn-sm",onClick:()=>x(v.id)},a.createElement("i",{className:"fas fa-times"}),"Cancel Appointment"),v.status==="pending"&&a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:()=>alert("Reschedule functionality would be implemented here")},a.createElement("i",{className:"fas fa-calendar-alt"}),"Reschedule"),a.createElement("button",{className:"btn btn-primary btn-sm",onClick:()=>alert("View details functionality would be implemented here")},a.createElement("i",{className:"fas fa-eye"}),"View Details")))))),a.createElement("style",null,`
        .patient-appointments {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
          flex-wrap: wrap;
          gap: var(--spacing-4);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .appointments-tabs {
          display: flex;
          gap: var(--spacing-1);
          margin-bottom: var(--spacing-8);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .tab-button {
          background: none;
          border: none;
          padding: var(--spacing-3) var(--spacing-6);
          font-size: var(--font-size-base);
          font-weight: 500;
          color: var(--gray-600);
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.2s ease;
        }
        
        .tab-button:hover {
          color: var(--primary-blue);
          background-color: rgba(59, 130, 246, 0.05);
        }
        
        .tab-button.active {
          color: var(--primary-blue);
          border-bottom-color: var(--primary-blue);
          background-color: rgba(59, 130, 246, 0.1);
        }
        
        .appointments-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          padding: var(--spacing-6);
        }
        
        .appointments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-6);
        }
        
        .appointment-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.2s ease;
        }
        
        .appointment-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }
        
        .card-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: var(--gray-50);
        }
        
        .doctor-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .doctor-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-base);
          flex-shrink: 0;
        }
        
        .doctor-details {
          flex: 1;
          min-width: 0;
        }
        
        .doctor-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .doctor-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .appointment-status {
          flex-shrink: 0;
        }
        
        .card-body {
          padding: var(--spacing-6);
        }
        
        .appointment-datetime {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
        }
        
        .appointment-date,
        .appointment-time {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          font-size: var(--font-size-sm);
        }
        
        .appointment-date {
          color: var(--gray-700);
          font-weight: 500;
        }
        
        .appointment-time {
          color: var(--gray-600);
        }
        
        .appointment-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .detail-item i {
          color: var(--gray-400);
          width: 16px;
          text-align: center;
        }
        
        .detail-label {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          font-weight: 500;
          min-width: 60px;
        }
        
        .detail-value {
          color: var(--gray-800);
          font-size: var(--font-size-sm);
        }
        
        .appointment-type {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .appointment-notes {
          background: var(--gray-50);
          padding: var(--spacing-4);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
        }
        
        .notes-title {
          font-size: var(--font-size-sm);
          font-weight: 600;
          color: var(--gray-700);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .notes-text {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          line-height: 1.5;
          margin: 0;
        }
        
        .card-footer {
          display: flex;
          gap: var(--spacing-3);
          padding: var(--spacing-6);
          border-top: 1px solid var(--gray-200);
          background: var(--gray-50);
        }
        
        .no-appointments {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-appointments i {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-4);
          display: block;
        }
        
        .no-appointments h3 {
          color: var(--gray-600);
          font-size: var(--font-size-xl);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .no-appointments p {
          color: var(--gray-500);
          font-size: var(--font-size-base);
          margin: 0 0 var(--spacing-4) 0;
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .appointments-tabs {
            overflow-x: auto;
            white-space: nowrap;
          }
          
          .appointments-grid {
            grid-template-columns: 1fr;
          }
          
          .card-footer {
            flex-direction: column;
          }
        }
      `))},bg=()=>{const{user:i}=Be(),[c,o]=D.useState([]),[d,u]=D.useState({}),[f,p]=D.useState([]),[w,y]=D.useState(!0);D.useEffect(()=>{(async()=>{y(!0);const T=localStorage.getItem("healthRecordToken");try{const M=await fetch("/api/appointments",{headers:{Authorization:`Bearer ${T}`}}),z=await M.json();let C=[];if(M.ok&&Array.isArray(z.appointments)){const O=new Date().toISOString().slice(0,10);C=z.appointments.filter(W=>W.doctor_id===i?.id&&W.datetime?.slice(0,10)===O);const R=await Promise.all(C.map(async W=>{let H=W.patient_id;try{const re=await fetch(`/api/users/${W.patient_id}`,{headers:{Authorization:`Bearer ${T}`}});re.ok&&(H=(await re.json()).user?.name||H)}catch{}const ve=new Date(W.datetime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return{id:W._id||W.id,patientName:H,time:ve,type:W.type||"Consultation",status:W.status||"scheduled",notes:W.notes||""}}));o(R);const F=new Set(z.appointments.filter(W=>W.doctor_id===i?.id).map(W=>W.patient_id)),I=z.appointments.filter(W=>W.doctor_id===i?.id&&W.status==="completed"&&W.datetime?.slice(0,10)===O).length;u({totalPatients:F.size,todayAppointments:R.length,completedToday:I,pendingReports:0});const $=Array.from(F).slice(0,4),ne=await Promise.all($.map(async W=>{try{const H=await fetch(`/api/users/${W}`,{headers:{Authorization:`Bearer ${T}`}});if(H.ok){const re=(await H.json()).user;return{id:re._id,name:re.name||"",lastVisit:"",condition:"",status:"stable",nextAppointment:""}}}catch{}return{id:W,name:W,lastVisit:"",condition:"",status:"stable",nextAppointment:""}}));p(ne)}}catch(M){console.error("Failed to fetch doctor dashboard data",M)}y(!1)})()},[]);const k=N=>{switch(N){case"scheduled":return a.createElement("span",{className:"badge badge-info"},"Scheduled");case"completed":return a.createElement("span",{className:"badge badge-success"},"Completed");case"cancelled":return a.createElement("span",{className:"badge badge-error"},"Cancelled");default:return a.createElement("span",{className:"badge badge-info"},N)}},x=N=>{switch(N){case"stable":return a.createElement("span",{className:"badge badge-success"},"Stable");case"monitoring":return a.createElement("span",{className:"badge badge-warning"},"Monitoring");case"improving":return a.createElement("span",{className:"badge badge-info"},"Improving");case"critical":return a.createElement("span",{className:"badge badge-error"},"Critical");default:return a.createElement("span",{className:"badge badge-info"},N)}},v=N=>N.split(" ").map(T=>T[0]).join("");return w?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"doctor-dashboard"},a.createElement("div",{className:"welcome-section"},a.createElement("div",{className:"welcome-header"},a.createElement("div",{className:"doctor-avatar-large"},a.createElement("span",{className:"avatar-initials"},v(`${i.firstName} ${i.lastName}`))),a.createElement("div",{className:"welcome-content"},a.createElement("h1",{className:"welcome-title"},"Good morning, Dr. ",i.lastName,"!"),a.createElement("p",{className:"welcome-subtitle"},"Here's your schedule for today - ",Ct(new Date,"EEEE, MMMM dd, yyyy"))))),a.createElement("div",{className:"stats-grid"},a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-users"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},d.totalPatients),a.createElement("p",{className:"stat-label"},"Total Patients"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-calendar-day"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},d.todayAppointments),a.createElement("p",{className:"stat-label"},"Today's Appointments"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-check-circle"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},d.completedToday),a.createElement("p",{className:"stat-label"},"Completed Today"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-file-medical"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},d.pendingReports),a.createElement("p",{className:"stat-label"},"Pending Reports")))),a.createElement("div",{className:"dashboard-grid"},a.createElement("div",{className:"dashboard-card"},a.createElement("div",{className:"card-header"},a.createElement("h2",{className:"card-title"},a.createElement("i",{className:"fas fa-calendar-alt"}),"Today's Schedule"),a.createElement("span",{className:"appointment-count"},c.length," appointments")),a.createElement("div",{className:"appointments-list"},c.map(N=>a.createElement("div",{key:N.id,className:"appointment-item"},a.createElement("div",{className:"appointment-time"},N.time),a.createElement("div",{className:"appointment-details"},a.createElement("div",{className:"appointment-patient"},a.createElement("div",{className:"patient-avatar"},v(N.patientName)),a.createElement("div",{className:"patient-info"},a.createElement("h4",{className:"patient-name"},N.patientName),a.createElement("p",{className:"appointment-type"},N.type),a.createElement("p",{className:"appointment-notes"},N.notes)))),a.createElement("div",{className:"appointment-status"},k(N.status)))))),a.createElement("div",{className:"dashboard-card"},a.createElement("div",{className:"card-header"},a.createElement("h2",{className:"card-title"},a.createElement("i",{className:"fas fa-user-friends"}),"Recent Patients"),a.createElement("a",{href:"/doctor/patients",className:"view-all-link"},"View All Patients")),a.createElement("div",{className:"patients-list"},f.map(N=>a.createElement("div",{key:N.id,className:"patient-item"},a.createElement("div",{className:"patient-info"},a.createElement("div",{className:"patient-avatar"},v(N.name)),a.createElement("div",{className:"patient-details"},a.createElement("h4",{className:"patient-name"},N.name),a.createElement("p",{className:"patient-condition"},N.condition),a.createElement("p",{className:"last-visit"},"Last visit: ",Ct(new Date(N.lastVisit),"MMM dd, yyyy")))),a.createElement("div",{className:"patient-status"},x(N.status),a.createElement("p",{className:"next-appointment"},"Next: ",Ct(new Date(N.nextAppointment),"MMM dd")))))))),a.createElement("div",{className:"quick-actions"},a.createElement("h3",{className:"section-title"},"Quick Actions"),a.createElement("div",{className:"actions-grid"},a.createElement("a",{href:"/doctor/patients",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-user-plus"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"View Patients"),a.createElement("p",null,"Manage patient records"))),a.createElement("a",{href:"/appointments",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-calendar-check"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"Appointments"),a.createElement("p",null,"View and manage appointments"))),a.createElement("a",{href:"/doctor/prescription/new",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-prescription"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"New Prescription"),a.createElement("p",null,"Create prescription for patient"))))),a.createElement("style",null,`
        .doctor-dashboard {
          animation: fadeIn 0.5s ease-in;
        }
        
        .welcome-section {
          background: linear-gradient(135deg, var(--primary-green), var(--primary-green-dark));
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          margin-bottom: var(--spacing-8);
          color: var(--white);
        }
        
        .welcome-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .doctor-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          font-weight: 600;
        }
        
        .avatar-initials {
          color: var(--white);
        }
        
        .welcome-content {
          flex: 1;
        }
        
        .welcome-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .welcome-subtitle {
          font-size: var(--font-size-lg);
          opacity: 0.9;
          margin: 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-8);
        }
        
        .stat-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          box-shadow: var(--shadow-md);
          transition: transform 0.2s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-green);
        }
        
        .stat-number {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .stat-label {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
        }
        
        .dashboard-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .card-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .card-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .appointment-count {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .view-all-link {
          color: var(--primary-blue);
          text-decoration: none;
          font-size: var(--font-size-sm);
          font-weight: 500;
        }
        
        .view-all-link:hover {
          text-decoration: underline;
        }
        
        .appointments-list,
        .patients-list {
          padding: var(--spacing-4);
        }
        
        .appointment-item,
        .patient-item {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-100);
          transition: background-color 0.2s ease;
        }
        
        .appointment-item:last-child,
        .patient-item:last-child {
          border-bottom: none;
        }
        
        .appointment-item:hover,
        .patient-item:hover {
          background-color: var(--gray-50);
        }
        
        .appointment-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--spacing-3);
        }
        
        .appointment-time {
          font-weight: 600;
          color: var(--primary-green);
          font-size: var(--font-size-sm);
          min-width: 60px;
        }
        
        .appointment-patient {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .patient-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-sm);
        }
        
        .patient-name {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .appointment-type {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .appointment-notes {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          margin: 0;
        }
        
        .appointment-status {
          flex-shrink: 0;
        }
        
        .patient-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .patient-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .patient-details {
          flex: 1;
        }
        
        .patient-condition {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: var(--spacing-1) 0;
        }
        
        .last-visit {
          color: var(--gray-600);
          font-size: var(--font-size-xs);
          margin: 0;
        }
        
        .patient-status {
          text-align: right;
          flex-shrink: 0;
        }
        
        .next-appointment {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
          margin: var(--spacing-1) 0 0 0;
        }
        
        .quick-actions {
          margin-bottom: var(--spacing-8);
        }
        
        .section-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-4) 0;
        }
        
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-4);
        }
        
        .action-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }
        
        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .action-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(16, 185, 129, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--primary-green);
          flex-shrink: 0;
        }
        
        .action-content h4 {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .action-content p {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .welcome-header {
            flex-direction: column;
            text-align: center;
          }
          
          .welcome-title {
            font-size: var(--font-size-2xl);
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .appointment-item {
            flex-direction: column;
            gap: var(--spacing-2);
          }
          
          .appointment-patient {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .patient-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-3);
          }
          
          .patient-status {
            text-align: left;
          }
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `))},Cg=()=>{const{user:i}=Be(),c=zt(),[o,d]=D.useState([]),[u,f]=D.useState(!1),[p,w]=D.useState(""),[y,k]=D.useState("all"),x=O=>{if(!O)return"N/A";const R=new Date(O);return isNaN(R)?"N/A":Ct(R,"MMM dd, yyyy")};D.useEffect(()=>{(async()=>{f(!0),d([]);const R=localStorage.getItem("healthRecordToken");try{const F=await fetch("/api/appointments",{headers:{Authorization:`Bearer ${R}`}}),I=await F.json();if(F.ok&&Array.isArray(I.appointments)){const te=Array.from(new Set(I.appointments.map(W=>W.patient_id))),$=8,ne=[];for(let W=0;W<te.length;W+=$){const ve=te.slice(W,W+$).map(async me=>{try{const Se=await fetch(`/api/users/${me}`,{headers:{Authorization:`Bearer ${R}`}});if(Se.ok){const Ne=(await Se.json()).user;return{id:Ne._id,name:Ne.name||"",email:Ne.email||"",phone:Ne.profile?.phone||"",dateOfBirth:Ne.profile?.dateOfBirth||"",gender:Ne.profile?.gender||"",bloodType:Ne.profile?.bloodType||"",allergies:Ne.profile?.allergies||[],lastVisit:Ne.profile?.lastVisit||"",nextAppointment:Ne.profile?.nextAppointment||"",status:"active",condition:Ne.profile?.condition||"",medications:Ne.profile?.medications||[],notes:Ne.profile?.notes||""}}}catch(Se){console.error("Failed to fetch patient",Se)}return{id:me,name:String(me),email:"",phone:"",dateOfBirth:"",gender:"",bloodType:"",allergies:[],lastVisit:"",nextAppointment:"",status:"active",condition:"",medications:[],notes:""}}),re=await Promise.all(ve);ne.push(...re),d(me=>[...me,...re])}d(ne)}}catch(F){console.error("Failed to fetch patients",F)}f(!1)})()},[]);const v=O=>{c(`/doctor/patient-records/${O}`)},N=O=>{c(`/doctor/prescription/${O}`)},T=o.filter(O=>{const R=O.name.toLowerCase().includes(p.toLowerCase())||O.email.toLowerCase().includes(p.toLowerCase())||O.condition.toLowerCase().includes(p.toLowerCase()),F=y==="all"||O.status===y;return R&&F}),M=O=>O.split(" ").map(R=>R[0]).join(""),z=O=>{switch(O){case"active":return a.createElement("span",{className:"badge badge-success"},"Active");case"inactive":return a.createElement("span",{className:"badge badge-error"},"Inactive");default:return a.createElement("span",{className:"badge badge-info"},O)}},C=O=>{if(!O)return"";const R=new Date,F=new Date(O);if(isNaN(F))return"";let I=R.getFullYear()-F.getFullYear();const te=R.getMonth()-F.getMonth();return(te<0||te===0&&R.getDate()<F.getDate())&&I--,I};return u?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"patient-list"},a.createElement("div",{className:"page-header"},a.createElement("h1",{className:"page-title"},"Patient Management"),a.createElement("div",{className:"header-actions"},a.createElement("div",{className:"search-filter-group"},a.createElement("div",{className:"search-box"},a.createElement("i",{className:"fas fa-search"}),a.createElement("input",{type:"text",placeholder:"Search patients...",value:p,onChange:O=>w(O.target.value)})),a.createElement("select",{className:"filter-select",value:y,onChange:O=>k(O.target.value)},a.createElement("option",{value:"all"},"All Status"),a.createElement("option",{value:"active"},"Active"),a.createElement("option",{value:"inactive"},"Inactive"))))),a.createElement("div",{className:"patients-container"},a.createElement("div",{className:"patients-grid"},T.map(O=>a.createElement("div",{key:O.id,className:"patient-card"},a.createElement("div",{className:"card-header"},a.createElement("div",{className:"patient-info"},a.createElement("div",{className:"patient-avatar"},M(O.name)),a.createElement("div",{className:"patient-details"},a.createElement("h3",{className:"patient-name"},O.name),a.createElement("p",{className:"patient-email"},O.email),a.createElement("div",{className:"patient-meta"},a.createElement("span",{className:"patient-gender"},O.gender),a.createElement("span",{className:"patient-age"},C(O.dateOfBirth)," years"),a.createElement("span",{className:"patient-blood-type"},O.bloodType)))),a.createElement("div",{className:"patient-status"},z(O.status))),a.createElement("div",{className:"card-body"},a.createElement("div",{className:"patient-section"},a.createElement("h4",{className:"section-title"},"Medical Information"),a.createElement("div",{className:"info-grid"},a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Condition"),a.createElement("p",{className:"info-value"},O.condition)),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Allergies"),a.createElement("p",{className:"info-value"},O.allergies.length>0?O.allergies.join(", "):"None")),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Current Medications"),a.createElement("p",{className:"info-value"},O.medications.join(", "))))),a.createElement("div",{className:"patient-section"},a.createElement("h4",{className:"section-title"},"Visit Information"),a.createElement("div",{className:"info-grid"},a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Last Visit"),a.createElement("p",{className:"info-value"},x(O.lastVisit))),a.createElement("div",{className:"info-item"},a.createElement("label",{className:"info-label"},"Next Appointment"),a.createElement("p",{className:"info-value"},x(O.nextAppointment))))),O.notes&&a.createElement("div",{className:"patient-section"},a.createElement("h4",{className:"section-title"},"Doctor's Notes"),a.createElement("p",{className:"notes-text"},O.notes))),a.createElement("div",{className:"card-footer"},a.createElement("button",{className:"btn btn-primary btn-sm",onClick:()=>v(O.id)},a.createElement("i",{className:"fas fa-file-medical"}),"View Records"),a.createElement("button",{className:"btn btn-outline btn-sm",onClick:()=>N(O.id)},a.createElement("i",{className:"fas fa-prescription"}),"Prescription"))))),T.length===0&&a.createElement("div",{className:"no-results"},a.createElement("i",{className:"fas fa-search"}),a.createElement("p",null,"No patients found matching your criteria."))),a.createElement("style",null,`
        .patient-list {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
          flex-wrap: wrap;
          gap: var(--spacing-4);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
        }
        
        .search-filter-group {
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
        }
        
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-box i {
          position: absolute;
          left: var(--spacing-3);
          color: var(--gray-400);
          z-index: 1;
        }
        
        .search-box input {
          padding-left: var(--spacing-10);
          padding-right: var(--spacing-3);
          padding-top: var(--spacing-2);
          padding-bottom: var(--spacing-2);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          min-width: 250px;
          transition: border-color 0.2s ease;
        }
        
        .search-box input:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        
        .filter-select {
          padding: var(--spacing-2) var(--spacing-3);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          background: var(--white);
          cursor: pointer;
          min-width: 120px;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        
        .patients-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .patients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-6);
          padding: var(--spacing-6);
        }
        
        .patient-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          transition: all 0.2s ease;
        }
        
        .patient-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-4);
          padding-bottom: var(--spacing-4);
          border-bottom: 1px solid var(--gray-200);
        }
        
        .patient-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          flex: 1;
        }
        
        .patient-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-base);
          flex-shrink: 0;
        }
        
        .patient-name {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .patient-email {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .patient-meta {
          display: flex;
          gap: var(--spacing-3);
          font-size: var(--font-size-xs);
          color: var(--gray-500);
        }
        
        .patient-meta span {
          background: var(--gray-100);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
        }
        
        .card-body {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-4);
        }
        
        .patient-section {
          border-bottom: 1px solid var(--gray-100);
          padding-bottom: var(--spacing-4);
        }
        
        .patient-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .section-title {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-700);
          margin: 0 0 var(--spacing-3) 0;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--spacing-3);
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .info-label {
          font-size: var(--font-size-xs);
          font-weight: 500;
          color: var(--gray-500);
          margin: 0;
        }
        
        .info-value {
          font-size: var(--font-size-sm);
          color: var(--gray-800);
          margin: 0;
        }
        
        .notes-text {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          line-height: 1.5;
          margin: 0;
        }
        
        .card-footer {
          display: flex;
          gap: var(--spacing-3);
          margin-top: var(--spacing-4);
          padding-top: var(--spacing-4);
          border-top: 1px solid var(--gray-200);
        }
        
        .no-results {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-results i {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-4);
          display: block;
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-filter-group {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-box input {
            min-width: auto;
          }
          
          .patients-grid {
            grid-template-columns: 1fr;
            padding: var(--spacing-4);
          }
          
          .card-footer {
            flex-direction: column;
          }
        }
      `))},zg=()=>{const{patientId:i}=Yu(),{user:c}=Be(),[o,d]=D.useState(null),[u,f]=D.useState([]),[p,w]=D.useState(!0),[y,k]=D.useState({diagnosis:"",notes:""}),[x,v]=D.useState({medication:"",dosage:"",frequency:""}),[N,T]=D.useState(null);D.useEffect(()=>{(async()=>{w(!0);const O=localStorage.getItem("healthRecordToken");try{const R=await fetch(`/api/users/${i}`,{headers:{Authorization:`Bearer ${O}`}});if(R.ok){const I=(await R.json()).user;d({id:I._id,name:I.name||`${I.firstName||""} ${I.lastName||""}`,dob:I.profile?.dateOfBirth||"",gender:I.profile?.gender||""})}}catch(R){console.error("Failed to fetch patient",R)}try{const R=await fetch(`/api/records/patient/${i}`,{headers:{Authorization:`Bearer ${O}`}}),F=await R.json();R.ok&&Array.isArray(F.records)&&f(F.records.map(I=>({id:I._id,date:I.created_at||I.date||"",doctor:I.doctor_name||I.doctor||"",diagnosis:I.diagnosis||"",notes:I.notes||""})))}catch(R){console.error("Failed to fetch records",R)}w(!1)})()},[i]);const M=C=>{if(C.preventDefault(),!y.diagnosis.trim()){T({type:"error",text:"Diagnosis text is required"});return}(async()=>{const O=localStorage.getItem("healthRecordToken");try{const R=await fetch("/api/records",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`},body:JSON.stringify({patient_id:i,doctor_id:c.id,diagnosis:y.diagnosis,notes:y.notes})}),F=await R.json();R.ok?(f([F.record,...u]),k({diagnosis:"",notes:""}),T({type:"success",text:"Diagnosis added"}),setTimeout(()=>T(null),3e3)):T({type:"error",text:F.error||"Failed to add diagnosis"})}catch(R){console.error(R),T({type:"error",text:"Network error"})}})()},z=C=>{if(C.preventDefault(),!x.medication.trim()){T({type:"error",text:"Medication name is required"});return}(async()=>{const O=localStorage.getItem("healthRecordToken");try{const R=await fetch("/api/records",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`},body:JSON.stringify({patient_id:i,doctor_id:c.id,prescription:x.medication,notes:`Dosage: ${x.dosage}, Frequency: ${x.frequency}`})}),F=await R.json();R.ok?(f([F.record,...u]),v({medication:"",dosage:"",frequency:""}),T({type:"success",text:"Prescription added"}),setTimeout(()=>T(null),3e3)):T({type:"error",text:F.error||"Failed to add prescription"})}catch(R){console.error(R),T({type:"error",text:"Network error"})}})()};return p?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"patient-record-view"},a.createElement("div",{className:"page-header"},a.createElement("h1",{className:"page-title"},"Patient Record — ",o?.name),a.createElement("div",{className:"header-actions"},a.createElement(Wa,{to:"/doctor/patients",className:"btn btn-secondary"},"Back to Patients"))),N&&a.createElement("div",{className:`alert ${N.type==="error"?"alert-error":"alert-success"}`},N.text),a.createElement("div",{className:"record-grid"},a.createElement("div",{className:"record-column"},a.createElement("div",{className:"card"},a.createElement("h3",null,"Patient Details"),a.createElement("p",null,a.createElement("strong",null,"Name:")," ",o.name),a.createElement("p",null,a.createElement("strong",null,"DOB:")," ",o.dob),a.createElement("p",null,a.createElement("strong",null,"Gender:")," ",o.gender)),a.createElement("div",{className:"card"},a.createElement("h3",null,"Add Diagnosis"),a.createElement("form",{onSubmit:M},a.createElement("div",{className:"form-group"},a.createElement("label",null,"Diagnosis"),a.createElement("textarea",{value:y.diagnosis,onChange:C=>k({...y,diagnosis:C.target.value})})),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Notes"),a.createElement("textarea",{value:y.notes,onChange:C=>k({...y,notes:C.target.value})})),a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Diagnosis"))),a.createElement("div",{className:"card"},a.createElement("h3",null,"Add Prescription"),a.createElement("form",{onSubmit:z},a.createElement("div",{className:"form-group"},a.createElement("label",null,"Medication"),a.createElement("input",{value:x.medication,onChange:C=>v({...x,medication:C.target.value})})),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Dosage"),a.createElement("input",{value:x.dosage,onChange:C=>v({...x,dosage:C.target.value})})),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Frequency"),a.createElement("input",{value:x.frequency,onChange:C=>v({...x,frequency:C.target.value})})),a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Prescription")))),a.createElement("div",{className:"record-column"},a.createElement("div",{className:"card"},a.createElement("h3",null,"Medical History"),a.createElement("div",{className:"records-list"},u.map(C=>a.createElement("div",{key:C.id,className:"record-item"},a.createElement("div",{className:"record-meta"},a.createElement("span",{className:"record-date"},Ct(new Date(C.date),"MMM dd, yyyy")),a.createElement("span",{className:"record-doctor"},C.doctor)),a.createElement("div",{className:"record-body"},a.createElement("p",{className:"record-diagnosis"},C.diagnosis),a.createElement("p",{className:"record-notes"},C.notes)))))))))},Pg=()=>{const{patientId:i}=Yu(),c=zt(),{user:o}=Be(),[d,u]=D.useState({medication:"",dosage:"",frequency:""}),[f,p]=D.useState({}),w=x=>u({...d,[x.target.name]:x.target.value}),y=()=>{const x={};return d.medication||(x.medication="Medication is required"),p(x),Object.keys(x).length===0},k=x=>{x.preventDefault(),y()&&(async()=>{const v=localStorage.getItem("healthRecordToken");try{const N=await fetch("/api/records",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${v}`},body:JSON.stringify({patient_id:i,doctor_id:o.id,prescription:d.medication,notes:`Dosage: ${d.dosage}, Frequency: ${d.frequency}`})}),T=await N.json();N.ok?c(`/doctor/patient-records/${i}`):alert(T.error||"Failed to save prescription")}catch(N){console.error(N),alert("Network error")}})()};return a.createElement("div",{className:"prescription-form"},a.createElement("h2",null,"Create Prescription for patient ",i),a.createElement("form",{onSubmit:k},a.createElement("div",{className:"form-group"},a.createElement("label",null,"Medication"),a.createElement("input",{name:"medication",value:d.medication,onChange:w}),f.medication&&a.createElement("div",{className:"error-message"},f.medication)),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Dosage"),a.createElement("input",{name:"dosage",value:d.dosage,onChange:w})),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Frequency"),a.createElement("input",{name:"frequency",value:d.frequency,onChange:w})),a.createElement("button",{className:"btn btn-primary",type:"submit"},"Save Prescription")))},Tg=()=>{const{user:i}=Be(),[c,o]=D.useState({}),[d,u]=D.useState([]),[f,p]=D.useState(!0);D.useEffect(()=>{(async()=>{p(!0);const v=localStorage.getItem("healthRecordToken");try{const N=await fetch("/api/users",{headers:{Authorization:`Bearer ${v}`}}),T=await fetch("/api/appointments",{headers:{Authorization:`Bearer ${v}`}}),M=await N.json(),z=await T.json(),C=Array.isArray(M.users)?M.users.length:0,O=Array.isArray(M.users)?M.users.filter(H=>H.status!=="inactive").length:C,R=Array.isArray(M.users)?M.users.filter(H=>H.role==="patient").length:0,F=Array.isArray(M.users)?M.users.filter(H=>H.role==="doctor").length:0,I=Array.isArray(M.users)?M.users.filter(H=>H.role==="admin").length:0,te=Array.isArray(z.appointments)?z.appointments.length:0,$=Array.isArray(z.appointments)?z.appointments.filter(H=>H.status==="pending").length:0,ne=Array.isArray(z.appointments)?z.appointments.filter(H=>H.status==="completed").length:0;o({totalUsers:C,activeUsers:O,totalPatients:R,totalDoctors:F,totalAdmins:I,totalAppointments:te,pendingAppointments:$,completedAppointments:ne});const W=[];Array.isArray(M.users)&&M.users.slice(0,5).forEach(H=>W.push({id:`u-${H._id}`,type:"user_registered",user:H.name||H.email,role:H.role,timestamp:H.createdAt||"",description:"User created"})),Array.isArray(z.appointments)&&z.appointments.slice(0,5).forEach(H=>W.push({id:`a-${H._id}`,type:"appointment_booked",user:H.patient_id,role:"patient",timestamp:H.datetime||"",description:"Appointment record"})),u(W.slice(0,8))}catch(N){console.error("Failed to fetch admin dashboard data",N)}p(!1)})()},[]);const w=x=>{switch(x){case"user_registered":return"fas fa-user-plus";case"appointment_booked":return"fas fa-calendar-plus";case"prescription_created":return"fas fa-prescription";case"user_updated":return"fas fa-user-edit";case"appointment_completed":return"fas fa-check-circle";default:return"fas fa-info-circle"}},y=x=>{switch(x){case"user_registered":return"#10b981";case"appointment_booked":return"#3b82f6";case"prescription_created":return"#8b5cf6";case"user_updated":return"#f59e0b";case"appointment_completed":return"#10b981";default:return"#6b7280"}},k=x=>{const v=new Date(x),T=(new Date-v)/(1e3*60*60);return T<1?"Just now":T<24?`${Math.floor(T)} hours ago`:`${Math.floor(T/24)} days ago`};return f?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"admin-dashboard"},a.createElement("div",{className:"welcome-section"},a.createElement("div",{className:"welcome-header"},a.createElement("div",{className:"admin-avatar-large"},a.createElement("i",{className:"fas fa-shield-alt"})),a.createElement("div",{className:"welcome-content"},a.createElement("h1",{className:"welcome-title"},"Welcome back, Administrator ",i.lastName,"!"),a.createElement("p",{className:"welcome-subtitle"},"System overview and management dashboard")))),a.createElement("div",{className:"stats-grid"},a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-users"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.totalUsers),a.createElement("p",{className:"stat-label"},"Total Users"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-user-check"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.activeUsers),a.createElement("p",{className:"stat-label"},"Active Users"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-user-injured"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.totalPatients),a.createElement("p",{className:"stat-label"},"Total Patients"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-user-md"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.totalDoctors),a.createElement("p",{className:"stat-label"},"Total Doctors"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-user-shield"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.totalAdmins),a.createElement("p",{className:"stat-label"},"Total Admins"))),a.createElement("div",{className:"stat-card"},a.createElement("div",{className:"stat-icon"},a.createElement("i",{className:"fas fa-calendar-alt"})),a.createElement("div",{className:"stat-content"},a.createElement("h3",{className:"stat-number"},c.totalAppointments),a.createElement("p",{className:"stat-label"},"Total Appointments")))),a.createElement("div",{className:"dashboard-grid"},a.createElement("div",{className:"dashboard-card"},a.createElement("div",{className:"card-header"},a.createElement("h2",{className:"card-title"},a.createElement("i",{className:"fas fa-history"}),"Recent Activity")),a.createElement("div",{className:"activity-list"},d.map(x=>a.createElement("div",{key:x.id,className:"activity-item"},a.createElement("div",{className:"activity-icon",style:{color:y(x.type)}},a.createElement("i",{className:w(x.type)})),a.createElement("div",{className:"activity-content"},a.createElement("div",{className:"activity-header"},a.createElement("span",{className:"activity-user"},x.user),a.createElement("span",{className:"activity-role badge badge-info"},x.role)),a.createElement("p",{className:"activity-description"},x.description),a.createElement("span",{className:"activity-time"},k(x.timestamp))))))),a.createElement("div",{className:"dashboard-card"},a.createElement("div",{className:"card-header"},a.createElement("h2",{className:"card-title"},a.createElement("i",{className:"fas fa-server"}),"System Status")),a.createElement("div",{className:"system-status"},a.createElement("div",{className:"status-item"},a.createElement("div",{className:"status-indicator online"}),a.createElement("div",{className:"status-info"},a.createElement("span",{className:"status-label"},"Database"),a.createElement("span",{className:"status-value"},"Online"))),a.createElement("div",{className:"status-item"},a.createElement("div",{className:"status-indicator online"}),a.createElement("div",{className:"status-info"},a.createElement("span",{className:"status-label"},"API Server"),a.createElement("span",{className:"status-value"},"Online"))),a.createElement("div",{className:"status-item"},a.createElement("div",{className:"status-indicator warning"}),a.createElement("div",{className:"status-info"},a.createElement("span",{className:"status-label"},"Email Service"),a.createElement("span",{className:"status-value"},"Slow Response"))),a.createElement("div",{className:"status-item"},a.createElement("div",{className:"status-indicator online"}),a.createElement("div",{className:"status-info"},a.createElement("span",{className:"status-label"},"Backup System"),a.createElement("span",{className:"status-value"},"Operational")))))),a.createElement("div",{className:"quick-actions"},a.createElement("h3",{className:"section-title"},"Quick Actions"),a.createElement("div",{className:"actions-grid"},a.createElement("a",{href:"/admin/users",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-users-cog"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"User Management"),a.createElement("p",null,"Add, edit, or remove users"))),a.createElement("a",{href:"/appointments",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-calendar-check"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"Appointments"),a.createElement("p",null,"View and manage appointments"))),a.createElement("a",{href:"/admin/reports",className:"action-card"},a.createElement("div",{className:"action-icon"},a.createElement("i",{className:"fas fa-chart-bar"})),a.createElement("div",{className:"action-content"},a.createElement("h4",null,"System Reports"),a.createElement("p",null,"Generate and view reports"))))),a.createElement("style",null,`
        .admin-dashboard {
          animation: fadeIn 0.5s ease-in;
        }
        
        .welcome-section {
          background: linear-gradient(135deg, var(--secondary-purple), #7c3aed);
          border-radius: var(--radius-xl);
          padding: var(--spacing-8);
          margin-bottom: var(--spacing-8);
          color: var(--white);
        }
        
        .welcome-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .admin-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-2xl);
          color: var(--white);
        }
        
        .welcome-content {
          flex: 1;
        }
        
        .welcome-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          margin: 0 0 var(--spacing-2) 0;
        }
        
        .welcome-subtitle {
          font-size: var(--font-size-lg);
          opacity: 0.9;
          margin: 0;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-8);
        }
        
        .stat-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          box-shadow: var(--shadow-md);
          transition: transform 0.2s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--secondary-purple);
        }
        
        .stat-number {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .stat-label {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-6);
          margin-bottom: var(--spacing-8);
        }
        
        .dashboard-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .card-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
        }
        
        .card-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
        }
        
        .activity-list {
          padding: var(--spacing-4);
        }
        
        .activity-item {
          display: flex;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-bottom: 1px solid var(--gray-100);
          transition: background-color 0.2s ease;
        }
        
        .activity-item:hover {
          background-color: var(--gray-50);
        }
        
        .activity-item:last-child {
          border-bottom: none;
        }
        
        .activity-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .activity-content {
          flex: 1;
          min-width: 0;
        }
        
        .activity-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-1);
        }
        
        .activity-user {
          font-weight: 600;
          color: var(--gray-800);
        }
        
        .activity-role {
          font-size: var(--font-size-xs);
        }
        
        .activity-description {
          color: var(--gray-600);
          font-size: var(--font-size-sm);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .activity-time {
          color: var(--gray-400);
          font-size: var(--font-size-xs);
        }
        
        .system-status {
          padding: var(--spacing-4);
        }
        
        .status-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-3);
          border-bottom: 1px solid var(--gray-100);
        }
        
        .status-item:last-child {
          border-bottom: none;
        }
        
        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .status-indicator.online {
          background-color: var(--status-success);
        }
        
        .status-indicator.warning {
          background-color: var(--status-warning);
        }
        
        .status-indicator.offline {
          background-color: var(--status-error);
        }
        
        .status-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .status-label {
          font-weight: 500;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
        }
        
        .status-value {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
        }
        
        .quick-actions {
          margin-bottom: var(--spacing-8);
        }
        
        .section-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-4) 0;
        }
        
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-4);
        }
        
        .action-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          padding: var(--spacing-6);
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
          text-decoration: none;
          color: inherit;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }
        
        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
        
        .action-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-lg);
          background: rgba(139, 92, 246, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-xl);
          color: var(--secondary-purple);
          flex-shrink: 0;
        }
        
        .action-content h4 {
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0 0 var(--spacing-1) 0;
        }
        
        .action-content p {
          color: var(--gray-500);
          font-size: var(--font-size-sm);
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .welcome-header {
            flex-direction: column;
            text-align: center;
          }
          
          .welcome-title {
            font-size: var(--font-size-2xl);
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .activity-item {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .actions-grid {
            grid-template-columns: 1fr;
          }
        }
      `))},_g=()=>{const{user:i}=Be(),[c,o]=D.useState([]),[d,u]=D.useState(!0),[f,p]=D.useState(!1),[w,y]=D.useState(null),[k,x]=D.useState({name:"",email:"",role:"patient",status:"active",password:""}),[v,N]=D.useState({});D.useEffect(()=>{(async()=>{u(!0);const ne=localStorage.getItem("healthRecordToken");try{const W=await fetch("/api/users",{headers:{Authorization:`Bearer ${ne}`}}),H=await W.json();if(W.ok&&Array.isArray(H.users)){const ve=H.users.map(re=>({id:re._id,name:re.name||"",email:re.email,role:re.role,status:re.status||"active",createdAt:re.createdAt||"",lastLogin:re.lastLogin||""}));o(ve)}else o([])}catch(W){console.error("Failed to fetch users",W),o([])}u(!1)})()},[]);const T=$=>{y($),x({name:$.name,email:$.email,role:$.role,status:$.status,password:""}),N({}),p(!0)},M=$=>{window.confirm("Are you sure you want to delete this user?")&&(async()=>{const ne=localStorage.getItem("healthRecordToken");try{const W=await fetch(`/api/users/${$}`,{method:"DELETE",headers:{Authorization:`Bearer ${ne}`}});if(W.ok)o(c.filter(H=>H.id!==$));else{const H=await W.json();alert(H.error||"Failed to delete user")}}catch(W){console.error("Delete failed",W),alert("Network error")}})()},z=$=>{(async()=>{const ne=localStorage.getItem("healthRecordToken"),W=c.find(ve=>ve.id===$);if(!W)return;const H=W.status==="active"?"inactive":"active";try{const ve=await fetch(`/api/users/${$}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ne}`},body:JSON.stringify({status:H})});if(ve.ok){const re=await ve.json();o(c.map(me=>me.id===$?{...me,status:re.user.status||H}:me))}else{const re=await ve.json();alert(re.error||"Failed to update status")}}catch(ve){console.error("Toggle failed",ve),alert("Network error")}})()},C=$=>{const{name:ne,value:W}=$.target;x(H=>({...H,[ne]:W})),v[ne]&&N(H=>({...H,[ne]:""}))},O=()=>{const $={};return k.name||($.name="Name is required"),(!k.email||!/\S+@\S+\.\S+/.test(k.email))&&($.email="Valid email required"),!w&&!k.password&&($.password="Password is required for new user"),N($),Object.keys($).length===0},R=()=>{O()&&(async()=>{const $=localStorage.getItem("healthRecordToken");try{if(w){const ne=await fetch(`/api/users/${w.id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${$}`},body:JSON.stringify({name:k.name,email:k.email,role:k.role,status:k.status})}),W=await ne.json();ne.ok?o(c.map(H=>H.id===w.id?{...H,...W.user}:H)):alert(W.error||"Failed to update")}else{const ne={email:k.email,password:k.password,role:k.role,name:k.name},W=await fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${$}`},body:JSON.stringify(ne)}),H=await W.json();if(W.ok){const ve={id:H.user._id,name:H.user.name,email:H.user.email,role:H.user.role,status:H.user.status||"active",createdAt:H.user.createdAt||new Date().toISOString(),lastLogin:H.user.lastLogin||""};o([ve,...c])}else alert(H.error||"Failed to create user")}}catch(ne){console.error("Save user failed",ne),alert("Network error")}p(!1),y(null),x({name:"",email:"",role:"patient",status:"active",password:""})})()},F=$=>{switch($){case"admin":return a.createElement("span",{className:"badge badge-error"},"Admin");case"doctor":return a.createElement("span",{className:"badge badge-success"},"Doctor");case"patient":return a.createElement("span",{className:"badge badge-info"},"Patient");default:return a.createElement("span",{className:"badge badge-secondary"},$)}},I=$=>$==="active"?a.createElement("span",{className:"badge badge-success"},"Active"):a.createElement("span",{className:"badge badge-error"},"Inactive"),te=$=>new Date($).toLocaleDateString();return d?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"user-management"},a.createElement("div",{className:"page-header"},a.createElement("h1",{className:"page-title"},"User Management"),a.createElement("button",{className:"btn btn-primary",onClick:()=>p(!0)},a.createElement("i",{className:"fas fa-plus"}),"Add User")),a.createElement("div",{className:"users-container"},a.createElement("div",{className:"users-table"},a.createElement("table",{className:"table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Email"),a.createElement("th",null,"Role"),a.createElement("th",null,"Status"),a.createElement("th",null,"Created Date"),a.createElement("th",null,"Last Login"),a.createElement("th",null,"Actions"))),a.createElement("tbody",null,c.map($=>a.createElement("tr",{key:$.id},a.createElement("td",null,a.createElement("div",{className:"user-info"},a.createElement("div",{className:"user-avatar"},$.name.split(" ").map(ne=>ne[0]).join("")),a.createElement("span",{className:"user-name"},$.name))),a.createElement("td",null,$.email),a.createElement("td",null,F($.role)),a.createElement("td",null,I($.status)),a.createElement("td",null,te($.createdAt)),a.createElement("td",null,te($.lastLogin)),a.createElement("td",null,a.createElement("div",{className:"action-buttons"},a.createElement("button",{className:"btn btn-sm btn-secondary",onClick:()=>T($),title:"Edit User"},a.createElement("i",{className:"fas fa-edit"})),a.createElement("button",{className:"btn btn-sm btn-success",onClick:()=>z($.id),title:$.status==="active"?"Deactivate":"Activate"},a.createElement("i",{className:`fas fa-${$.status==="active"?"pause":"play"}`})),a.createElement("button",{className:"btn btn-sm btn-danger",onClick:()=>M($.id),title:"Delete User"},a.createElement("i",{className:"fas fa-trash"})))))))))),f&&a.createElement("div",{className:"modal-overlay",onClick:()=>p(!1)},a.createElement("div",{className:"modal-content",onClick:$=>$.stopPropagation()},a.createElement("div",{className:"modal-header"},a.createElement("h2",{className:"modal-title"},w?"Edit User":"Add New User"),a.createElement("button",{className:"close-button",onClick:()=>p(!1)},a.createElement("i",{className:"fas fa-times"}))),a.createElement("div",{className:"modal-body"},a.createElement("form",{className:"user-form",onSubmit:$=>{$.preventDefault(),R()}},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Full Name"),a.createElement("input",{type:"text",className:`form-control ${v.name?"error":""}`,placeholder:"Enter full name",name:"name",value:k.name,onChange:C}),v.name&&a.createElement("div",{className:"error-message"},v.name)),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Email Address"),a.createElement("input",{type:"email",className:`form-control ${v.email?"error":""}`,placeholder:"Enter email address",name:"email",value:k.email,onChange:C}),v.email&&a.createElement("div",{className:"error-message"},v.email)),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Role"),a.createElement("select",{className:"form-select",name:"role",value:k.role,onChange:C},a.createElement("option",{value:"patient"},"Patient"),a.createElement("option",{value:"doctor"},"Doctor"),a.createElement("option",{value:"admin"},"Administrator"))),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Status"),a.createElement("select",{className:"form-select",name:"status",value:k.status,onChange:C},a.createElement("option",{value:"active"},"Active"),a.createElement("option",{value:"inactive"},"Inactive")))),!w&&a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Password"),a.createElement("input",{type:"password",className:`form-control ${v.password?"error":""}`,placeholder:"Enter password",name:"password",value:k.password,onChange:C}),v.password&&a.createElement("div",{className:"error-message"},v.password)))),a.createElement("div",{className:"modal-footer"},a.createElement("button",{className:"btn btn-secondary",onClick:()=>{p(!1),y(null),N({})}},"Cancel"),a.createElement("button",{className:"btn btn-primary",onClick:()=>R()},w?"Update User":"Create User")))),a.createElement("style",null,`
        .user-management {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
          flex-wrap: wrap;
          gap: var(--spacing-4);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .users-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .users-table {
          overflow-x: auto;
        }
        
        .table {
          width: 100%;
          border-collapse: collapse;
          background: var(--white);
        }
        
        .table th {
          background: var(--gray-50);
          padding: var(--spacing-4);
          text-align: left;
          font-weight: 600;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .table td {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-200);
          font-size: var(--font-size-sm);
        }
        
        .table tbody tr:hover {
          background-color: var(--gray-50);
        }
        
        .user-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
        }
        
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--primary-blue);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: var(--font-size-xs);
        }
        
        .user-name {
          font-weight: 500;
          color: var(--gray-800);
        }
        
        .action-buttons {
          display: flex;
          gap: var(--spacing-2);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: var(--spacing-4);
        }
        
        .modal-content {
          background: var(--white);
          border-radius: var(--radius-xl);
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: var(--shadow-xl);
        }
        
        .modal-header {
          padding: var(--spacing-6);
          border-bottom: 1px solid var(--gray-200);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .modal-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
        }
        
        .modal-body {
          padding: var(--spacing-6);
        }
        
        .modal-footer {
          padding: var(--spacing-6);
          border-top: 1px solid var(--gray-200);
          display: flex;
          justify-content: flex-end;
          gap: var(--spacing-3);
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: var(--font-size-xl);
          color: var(--gray-400);
          cursor: pointer;
          padding: var(--spacing-1);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        
        .close-button:hover {
          background-color: var(--gray-100);
          color: var(--gray-600);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-4);
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `))},Dg=()=>{const{user:i}=Be(),[c,o]=D.useState([]),[d,u]=D.useState(!0),[f,p]=D.useState(!1),[w,y]=D.useState(null),[k,x]=D.useState("all");D.useEffect(()=>{(async()=>{u(!0);const C=localStorage.getItem("healthRecordToken");try{const O=await fetch("/api/appointments",{headers:{Authorization:`Bearer ${C}`}}),R=await O.json();if(O.ok&&Array.isArray(R.appointments)){const F=await Promise.all(R.appointments.map(async I=>{let te=I.patient_id,$=I.doctor_id;try{const W=await fetch(`/api/users/${I.patient_id}`,{headers:{Authorization:`Bearer ${C}`}});W.ok&&(te=(await W.json()).user?.name||te)}catch{}try{const W=await fetch(`/api/users/${I.doctor_id}`,{headers:{Authorization:`Bearer ${C}`}});W.ok&&($=(await W.json()).user?.name||$)}catch{}const ne=new Date(I.datetime);return{id:I._id||I.id,patientName:te,doctorName:$,specialization:"",date:isNaN(ne)?I.datetime:ne.toISOString().split("T")[0],time:isNaN(ne)?"":ne.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),status:I.status,type:I.type||"Consultation",notes:I.notes||""}}));o(F)}}catch(O){console.error("Failed to fetch appointments",O)}u(!1)})()},[]);const v=z=>{switch(z){case"approved":return a.createElement("span",{className:"badge badge-success"},"Approved");case"pending":return a.createElement("span",{className:"badge badge-warning"},"Pending");case"cancelled":return a.createElement("span",{className:"badge badge-error"},"Cancelled");default:return a.createElement("span",{className:"badge badge-info"},z)}},N=(z,C)=>{(async()=>{const O=localStorage.getItem("healthRecordToken");try{const R=await fetch(`/api/appointments/${z}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${O}`},body:JSON.stringify({status:C})});if(R.ok){const F=await R.json();o(c.map(I=>I.id===z?{...I,status:F.appointment.status}:I))}else{const F=await R.json();alert(F.error||"Failed to update status")}}catch(R){console.error("Failed to update status",R),alert("Network error")}})()},T=z=>{(async()=>{const C=localStorage.getItem("healthRecordToken");try{const O=await fetch(`/api/appointments/${z.id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${C}`},body:JSON.stringify(z)});if(O.ok){const R=await O.json();o(c.map(F=>F.id===z.id?{...F,...R.appointment}:F))}else{const R=await O.json();alert(R.error||"Failed to save")}}catch(O){console.error("Save failed",O),alert("Network error")}p(!1),y(null)})()},M=k==="all"?c:c.filter(z=>z.status===k);return d?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):a.createElement("div",{className:"appointment-list"},a.createElement("div",{className:"page-header"},a.createElement("h1",{className:"page-title"},"Appointment Management"),a.createElement("div",{className:"header-actions"},a.createElement("select",{className:"filter-select",value:k,onChange:z=>x(z.target.value)},a.createElement("option",{value:"all"},"All Appointments"),a.createElement("option",{value:"pending"},"Pending"),a.createElement("option",{value:"approved"},"Approved"),a.createElement("option",{value:"cancelled"},"Cancelled")),a.createElement(Wa,{to:"/appointments/book",className:"btn btn-primary"},a.createElement("i",{className:"fas fa-plus"}),"Book Appointment"))),a.createElement("div",{className:"appointments-container"},a.createElement("div",{className:"appointments-table"},a.createElement("table",{className:"table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Patient"),a.createElement("th",null,"Doctor"),a.createElement("th",null,"Date & Time"),a.createElement("th",null,"Type"),a.createElement("th",null,"Status"),a.createElement("th",null,"Actions"))),a.createElement("tbody",null,M.map(z=>a.createElement("tr",{key:z.id},a.createElement("td",null,a.createElement("div",{className:"patient-info"},a.createElement("div",{className:"patient-name"},z.patientName),a.createElement("div",{className:"appointment-notes"},z.notes))),a.createElement("td",null,a.createElement("div",{className:"doctor-info"},a.createElement("div",{className:"doctor-name"},z.doctorName),a.createElement("div",{className:"doctor-specialization"},z.specialization))),a.createElement("td",null,a.createElement("div",{className:"appointment-datetime"},a.createElement("div",{className:"appointment-date"},Ct(new Date(z.date),"MMM dd, yyyy")),a.createElement("div",{className:"appointment-time"},z.time))),a.createElement("td",null,a.createElement("span",{className:"appointment-type"},z.type)),a.createElement("td",null,v(z.status)),a.createElement("td",null,a.createElement("div",{className:"action-buttons"},z.status==="pending"&&a.createElement("button",{className:"btn btn-sm btn-success",onClick:()=>N(z.id,"approved"),title:"Approve"},a.createElement("i",{className:"fas fa-check"})),z.status==="approved"&&a.createElement("button",{className:"btn btn-sm btn-error",onClick:()=>N(z.id,"cancelled"),title:"Cancel"},a.createElement("i",{className:"fas fa-times"})),a.createElement("button",{className:"btn btn-sm btn-secondary",title:"Edit",onClick:()=>{y(z),p(!0)}},a.createElement("i",{className:"fas fa-edit"}))))))))),M.length===0&&a.createElement("div",{className:"no-results"},a.createElement("i",{className:"fas fa-calendar-times"}),a.createElement("p",null,"No appointments found for the selected filter."))),a.createElement("style",null,`
        .appointment-list {
          animation: fadeIn 0.5s ease-in;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-8);
          flex-wrap: wrap;
          gap: var(--spacing-4);
        }
        
        .page-title {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          gap: var(--spacing-3);
          align-items: center;
        }
        
        .filter-select {
          padding: var(--spacing-2) var(--spacing-3);
          border: 2px solid var(--gray-200);
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          background: var(--white);
          cursor: pointer;
          min-width: 150px;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: var(--primary-blue);
        }
        
        .appointments-container {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        
        .appointments-table {
          overflow-x: auto;
        }
        
        .table {
          width: 100%;
          border-collapse: collapse;
          background: var(--white);
        }
        
        .table th {
          background: var(--gray-50);
          padding: var(--spacing-4);
          text-align: left;
          font-weight: 600;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
          border-bottom: 2px solid var(--gray-200);
        }
        
        .table td {
          padding: var(--spacing-4);
          border-bottom: 1px solid var(--gray-200);
          font-size: var(--font-size-sm);
        }
        
        .table tbody tr:hover {
          background-color: var(--gray-50);
        }
        
        .patient-info,
        .doctor-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .patient-name,
        .doctor-name {
          font-weight: 600;
          color: var(--gray-800);
          font-size: var(--font-size-base);
        }
        
        .appointment-notes,
        .doctor-specialization {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
        }
        
        .appointment-datetime {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-1);
        }
        
        .appointment-date {
          font-weight: 500;
          color: var(--gray-700);
          font-size: var(--font-size-sm);
        }
        
        .appointment-time {
          color: var(--gray-500);
          font-size: var(--font-size-xs);
        }
        
        .appointment-type {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-full);
          font-size: var(--font-size-xs);
          font-weight: 500;
        }
        
        .action-buttons {
          display: flex;
          gap: var(--spacing-2);
        }
        
        .no-results {
          text-align: center;
          padding: var(--spacing-12);
          color: var(--gray-500);
        }
        
        .no-results i {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-4);
          display: block;
        }
        
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }
          
          .header-actions {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-select {
            min-width: auto;
          }
          
          .action-buttons {
            flex-direction: column;
          }
        }
      `),f&&w&&a.createElement("div",{className:"modal-overlay",onClick:()=>p(!1)},a.createElement("div",{className:"modal-content",onClick:z=>z.stopPropagation()},a.createElement("div",{className:"modal-header"},a.createElement("h2",{className:"modal-title"},"Edit Appointment"),a.createElement("button",{className:"close-button",onClick:()=>p(!1)},a.createElement("i",{className:"fas fa-times"}))),a.createElement("div",{className:"modal-body"},a.createElement("form",{onSubmit:z=>{z.preventDefault(),T(w)},className:"edit-appointment-form"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Patient"),a.createElement("input",{type:"text",className:"form-control",value:w.patientName,onChange:z=>y({...w,patientName:z.target.value})})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Doctor"),a.createElement("input",{type:"text",className:"form-control",value:w.doctorName,onChange:z=>y({...w,doctorName:z.target.value})})),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Date"),a.createElement("input",{type:"date",className:"form-control",value:w.date,onChange:z=>y({...w,date:z.target.value})})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"form-label"},"Time"),a.createElement("input",{type:"time",className:"form-control",value:w.time,onChange:z=>y({...w,time:z.target.value})}))),a.createElement("div",{className:"form-actions"},a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:()=>p(!1)},"Cancel"),a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save Changes")))))))},Og=()=>{const{user:i}=Be(),c=zt(),[o,d]=D.useState({patientName:i?`${i.firstName} ${i.lastName}`:"",doctor:"",date:"",time:"",notes:""}),[u,f]=D.useState({}),[p,w]=D.useState(!1),[y,k]=D.useState(!1),x=T=>d({...o,[T.target.name]:T.target.value}),v=()=>{const T={};if(o.patientName||(T.patientName="Patient name is required"),o.doctor||(T.doctor="Doctor is required"),o.date||(T.date="Date is required"),o.date){const M=new Date(o.date),z=new Date;z.setHours(0,0,0,0),M<z&&(T.date="Date cannot be in the past")}return o.time||(T.time="Time is required"),f(T),Object.keys(T).length===0},N=T=>{T.preventDefault(),v()&&(w(!0),(async()=>{const M=localStorage.getItem("healthRecordToken");try{const z=await fetch("/api/appointments",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${M}`},body:JSON.stringify({doctor:o.doctor,date:o.date,time:o.time,notes:o.notes})}),C=await z.json();if(w(!1),z.ok){k(!0),setTimeout(()=>c("/appointments"),1e3);try{const{showToast:O}=await Eo(async()=>{const{showToast:R}=await import("./toast-D5Sf84tm.js");return{showToast:R}},[]);O({type:"success",message:"Appointment requested"})}catch{}}else f({form:C.error||"Failed to create appointment"})}catch{w(!1),f({form:"Network error"})}})())};return a.createElement("div",{className:"book-appointment"},a.createElement("h1",null,"Book Appointment"),a.createElement("form",{onSubmit:N,className:"appointment-form"},y&&a.createElement("div",{className:"alert alert-success"},"Appointment requested successfully — redirecting..."),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Patient Name"),a.createElement("input",{name:"patientName",value:o.patientName,onChange:x,disabled:p}),u.patientName&&a.createElement("div",{className:"error-message"},u.patientName)),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Doctor"),a.createElement("input",{name:"doctor",value:o.doctor,onChange:x,disabled:p}),u.doctor&&a.createElement("div",{className:"error-message"},u.doctor)),a.createElement("div",{className:"form-row"},a.createElement("div",{className:"form-group"},a.createElement("label",null,"Date"),a.createElement("input",{type:"date",name:"date",value:o.date,onChange:x,disabled:p}),u.date&&a.createElement("div",{className:"error-message"},u.date)),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Time"),a.createElement("input",{type:"time",name:"time",value:o.time,onChange:x,disabled:p}),u.time&&a.createElement("div",{className:"error-message"},u.time))),a.createElement("div",{className:"form-group"},a.createElement("label",null,"Notes"),a.createElement("textarea",{name:"notes",value:o.notes,onChange:x,disabled:p})),a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:p,"aria-busy":p},p?a.createElement(a.Fragment,null,a.createElement("span",{className:"btn-spinner","aria-hidden":"true"}),"Requesting..."):"Request Appointment")))},Rg=({role:i,isOpen:c,onClose:o})=>{const d=Xn();zt();const f=(()=>{switch(i){case"patient":return[{path:"/patient/dashboard",label:"Dashboard",icon:"fas fa-home"},{path:"/patient/profile",label:"Profile",icon:"fas fa-user"},{path:"/patient/medical-records",label:"Medical Records",icon:"fas fa-file-medical"},{path:"/patient/appointments",label:"Appointments",icon:"fas fa-calendar"},{path:"/appointments/book",label:"Book Appointment",icon:"fas fa-plus-circle"}];case"doctor":return[{path:"/doctor/dashboard",label:"Dashboard",icon:"fas fa-home"},{path:"/doctor/patients",label:"Patients",icon:"fas fa-users"},{path:"/appointments",label:"Appointments",icon:"fas fa-calendar"}];case"admin":return[{path:"/admin/dashboard",label:"Dashboard",icon:"fas fa-home"},{path:"/admin/users",label:"User Management",icon:"fas fa-users-cog"},{path:"/appointments",label:"Appointments",icon:"fas fa-calendar"}];default:return[]}})(),p=w=>d.pathname===w;return a.createElement(a.Fragment,null,a.createElement("aside",{className:`sidebar ${c?"mobile-open":""}`},a.createElement("div",{className:"sidebar-header"},a.createElement("div",{className:"sidebar-logo"},a.createElement("i",{className:"fas fa-heartbeat"}),"Health Record System"),a.createElement("p",{className:"sidebar-subtitle"},i?.charAt(0).toUpperCase()+i?.slice(1)," Portal")),a.createElement("nav",{className:"sidebar-nav"},f.map(w=>a.createElement(Wa,{key:w.path,to:w.path,className:`sidebar-nav-item ${p(w.path)?"active":""}`,onClick:o,"aria-current":p(w.path)?"page":void 0},a.createElement("i",{className:`${w.icon} icon-inline`,"aria-hidden":"true"}),a.createElement("span",null,w.label))))),a.createElement("style",null,`
        .sidebar-subtitle {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-top: 0.5rem;
        }
        
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          display: none;
        }
        
        @media (max-width: 768px) {
          .sidebar-overlay {
            display: block;
          }
        }
      `))},Mg=({user:i,onLogout:c,onMenuClick:o})=>{const d=zt(),u=()=>{c(),d("/login")};return a.createElement("header",{className:"header"},a.createElement("div",{className:"header-left"},a.createElement("button",{className:"menu-button btn btn-outline",onClick:o,"aria-label":"Open menu"},a.createElement("i",{className:"fas fa-bars","aria-hidden":"true"})),a.createElement("div",{className:"breadcrumb"},a.createElement("h1",{className:"page-title"},"Health Record System"))),a.createElement("div",{className:"header-right"},a.createElement("div",{className:"user-info"},a.createElement("div",{className:"user-avatar"},a.createElement("i",{className:"fas fa-user-circle"})),a.createElement("div",{className:"user-details"},a.createElement("span",{className:"user-name"},i?.firstName," ",i?.lastName),a.createElement("span",{className:"user-role"},i?.role?.charAt(0).toUpperCase()+i?.role?.slice(1)))),a.createElement("button",{className:"logout-button btn btn-danger",onClick:u,"aria-label":"Logout"},a.createElement("i",{className:"fas fa-sign-out-alt","aria-hidden":"true"}),a.createElement("span",{style:{marginLeft:"8px"}},"Logout"))),a.createElement("style",null,`
        .header {
          background: var(--white);
          border-bottom: 1px solid var(--gray-200);
          padding: var(--spacing-4) var(--spacing-6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: var(--shadow-sm);
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .menu-button {
          background: none;
          border: none;
          font-size: var(--font-size-xl);
          color: var(--gray-600);
          cursor: pointer;
          padding: var(--spacing-2);
          border-radius: var(--radius-md);
          display: none;
        }
        
        .menu-button:hover {
          background-color: var(--gray-100);
        }
        
        .page-title {
          font-size: var(--font-size-2xl);
          font-weight: 600;
          color: var(--gray-800);
          margin: 0;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: var(--spacing-4);
        }
        
        .user-info {
          display: flex;
          align-items: center;
          gap: var(--spacing-3);
          padding: var(--spacing-2) var(--spacing-4);
          border-radius: var(--radius-md);
          background-color: var(--gray-50);
        }
        
        .user-avatar {
          font-size: var(--font-size-2xl);
          color: var(--primary-blue);
        }
        
        .user-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .user-name {
          font-weight: 600;
          color: var(--gray-800);
          font-size: var(--font-size-sm);
        }
        
        .user-role {
          font-size: var(--font-size-xs);
          color: var(--gray-500);
          text-transform: capitalize;
        }
        
        .logout-button {
          display: flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-2) var(--spacing-4);
          background: var(--status-error);
          color: var(--white);
          border: none;
          border-radius: var(--radius-md);
          font-size: var(--font-size-sm);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .logout-button:hover {
          background: #dc2626;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .header {
            padding: var(--spacing-3) var(--spacing-4);
          }
          
          .menu-button {
            display: block;
          }
          
          .page-title {
            font-size: var(--font-size-xl);
          }
          
          .user-details {
            display: none;
          }
          
          .logout-button {
            padding: var(--spacing-2);
            font-size: var(--font-size-xs);
          }
          
          .logout-button span {
            display: none;
          }
        }
      `))},Ag=()=>{const[i,c]=D.useState([]);return D.useEffect(()=>{const o=d=>{const u=Date.now()+Math.random(),{type:f,message:p,duration:w}=d.detail;c(y=>[...y,{id:u,type:f,message:p}]),setTimeout(()=>{c(y=>y.filter(k=>k.id!==u))},w||4e3)};return window.addEventListener("show-toast",o),()=>window.removeEventListener("show-toast",o)},[]),a.createElement("div",{className:"toast-container","aria-live":"polite","aria-atomic":"true"},i.map(o=>a.createElement("div",{key:o.id,className:`toast toast-${o.type}`,role:"status"},a.createElement("div",{className:"toast-message"},o.message))),a.createElement("style",null,`
        .toast-container {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 99999;
        }

        .toast {
          min-width: 220px;
          max-width: 360px;
          padding: 12px 16px;
          border-radius: 10px;
          box-shadow: var(--shadow-lg);
          color: var(--white);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          transform-origin: right bottom;
          animation: toastIn 220ms ease;
        }

        .toast-info { background: linear-gradient(90deg, var(--primary-blue), var(--primary-blue-dark)); }
        .toast-success { background: linear-gradient(90deg, var(--status-success), #059669); }
        .toast-error { background: linear-gradient(90deg, var(--status-error), #c0262a); }
        .toast-warning { background: linear-gradient(90deg, var(--status-warning), #b45309); }

        .toast-message { font-size: var(--font-size-sm); }

        @keyframes toastIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `))},wo=({children:i,role:c})=>{const[o,d]=D.useState(!1),{user:u,logout:f}=Be(),p=()=>{f()},w=()=>{d(!o)};return a.createElement("div",{className:"layout"},a.createElement(Rg,{role:c||u?.role,isOpen:o,onClose:()=>d(!1)}),a.createElement("div",{className:"main-content-wrapper"},a.createElement(Mg,{user:u,onLogout:p,onMenuClick:w}),a.createElement("main",{className:"main-content page-fade"},i)),a.createElement(Ag,null),o&&a.createElement("div",{className:"sidebar-overlay",onClick:()=>d(!1)}))},$a=({children:i,allowedRoles:c})=>{const{user:o,loading:d}=Be();return d?a.createElement("div",{className:"loading-overlay"},a.createElement("div",{className:"loading-spinner"})):o?c&&!c.includes(o.role)?a.createElement(rl,{to:"/unauthorized",replace:!0}):i:a.createElement(rl,{to:"/login",replace:!0})},tl=({children:i})=>a.createElement($a,{allowedRoles:["patient"]},a.createElement(wo,{role:"patient"},i)),nl=({children:i})=>a.createElement($a,{allowedRoles:["doctor"]},a.createElement(wo,{role:"doctor"},i)),ju=({children:i})=>a.createElement($a,{allowedRoles:["admin"]},a.createElement(wo,{role:"admin"},i));function Lg(){return a.createElement(cp,null,a.createElement(Jf,null,a.createElement(Ue,{path:"/login",element:a.createElement(mp,null)}),a.createElement(Ue,{path:"/register",element:a.createElement(fp,null)}),a.createElement(Ue,{path:"/unauthorized",element:a.createElement(pp,null)}),a.createElement(Ue,{path:"/patient/dashboard",element:a.createElement(tl,null,a.createElement(Ng,null))}),a.createElement(Ue,{path:"/patient/profile",element:a.createElement(tl,null,a.createElement(xg,null))}),a.createElement(Ue,{path:"/patient/medical-records",element:a.createElement(tl,null,a.createElement(kg,null))}),a.createElement(Ue,{path:"/patient/appointments",element:a.createElement(tl,null,a.createElement(Sg,null))}),a.createElement(Ue,{path:"/doctor/dashboard",element:a.createElement(nl,null,a.createElement(bg,null))}),a.createElement(Ue,{path:"/doctor/patients",element:a.createElement(nl,null,a.createElement(Cg,null))}),a.createElement(Ue,{path:"/doctor/patient-records/:patientId",element:a.createElement(nl,null,a.createElement(zg,null))}),a.createElement(Ue,{path:"/doctor/prescription/:patientId",element:a.createElement(nl,null,a.createElement(Pg,null))}),a.createElement(Ue,{path:"/admin/dashboard",element:a.createElement(ju,null,a.createElement(Tg,null))}),a.createElement(Ue,{path:"/admin/users",element:a.createElement(ju,null,a.createElement(_g,null))}),a.createElement(Ue,{path:"/appointments",element:a.createElement($a,null,a.createElement(Dg,null))}),a.createElement(Ue,{path:"/appointments/book",element:a.createElement($a,null,a.createElement(Og,null))}),a.createElement(Ue,{path:"/",element:a.createElement(rl,{to:"/login",replace:!0})}),a.createElement(Ue,{path:"*",element:a.createElement(rl,{to:"/login",replace:!0})})))}lf.createRoot(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(lp,null,a.createElement(Lg,null))));
