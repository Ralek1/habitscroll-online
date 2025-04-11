const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Index-ClFoQGtD.js","./components-B9Ecu46L.js","./react-vendor-DeBf61mv.js","./icons-i9063U9-.js","./ui-vendor-gQ-gH7-l.js","./pages-DMh7bKjw.js"])))=>i.map(i=>d[i]);
import{r as y,j as d,q as Et,H as _t,b as vt,c as g,d as At}from"./react-vendor-DeBf61mv.js";import{_ as w,a as Dt}from"./components-B9Ecu46L.js";import{N as Tt}from"./pages-DMh7bKjw.js";import"./icons-i9063U9-.js";import"./ui-vendor-gQ-gH7-l.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const St=y.lazy(()=>w(()=>import("./Index-ClFoQGtD.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Ct=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.L),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Ot=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.a),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Rt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.b),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Bt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.I),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Pt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.D),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Lt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.c),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),$t=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.B),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Mt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.d),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),kt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.A),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),Nt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.V),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),xt=y.lazy(()=>w(()=>import("./pages-DMh7bKjw.js").then(e=>e.K),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),jt=()=>d.jsx("div",{className:"flex items-center justify-center min-h-screen bg-retro-dark",children:d.jsx("div",{className:"text-retro-purple-200 font-pixel text-xl animate-pulse",children:"Loading..."})});function Ft(){return d.jsx(Et,{children:d.jsx(Dt,{children:d.jsx(_t,{children:d.jsx(y.Suspense,{fallback:d.jsx(jt,{}),children:d.jsxs(vt,{children:[d.jsx(g,{path:"/",element:d.jsx(St,{})}),d.jsx(g,{path:"/learn-who-you-are",element:d.jsx(Ct,{})}),d.jsx(g,{path:"/learn-about-habits",element:d.jsx(Ot,{})}),d.jsx(g,{path:"/learn-how-to-track",element:d.jsx(Rt,{})}),d.jsx(g,{path:"/impressum",element:d.jsx(Bt,{})}),d.jsx(g,{path:"/datenschutz",element:d.jsx(Pt,{})}),d.jsx(g,{path:"/deploy",element:d.jsx(Lt,{})}),d.jsx(g,{path:"/blog",element:d.jsx($t,{})}),d.jsx(g,{path:"/bookworms",element:d.jsx(Mt,{})}),d.jsx(g,{path:"/audiophiles",element:d.jsx(kt,{})}),d.jsx(g,{path:"/visual-learners",element:d.jsx(Nt,{})}),d.jsx(g,{path:"/knowledge-seekers",element:d.jsx(xt,{})}),d.jsx(g,{path:"*",element:d.jsx(Tt,{})})]})})})})})}var ge={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Vt=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[a++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],i=e[n++],o=e[n++],c=((r&7)<<18|(s&63)<<12|(i&63)<<6|o&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],i=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(s&63)<<6|i&63)}}return t.join("")},xe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const s=e[r],i=r+1<e.length,o=i?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,f=s>>2,p=(s&3)<<4|o>>4;let I=(o&15)<<2|l>>6,m=l&63;c||(m=64,i||(I=64)),a.push(n[f],n[p],n[I],n[m])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ne(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Vt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const p=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||o==null||l==null||p==null)throw new Ht;const I=s<<2|o>>4;if(a.push(I),l!==64){const m=o<<4&240|l>>2;if(a.push(m),p!==64){const It=l<<6&192|p;a.push(It)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ht extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zt=function(e){const t=Ne(e);return xe.encodeByteArray(t,!0)},je=function(e){return zt(e).replace(/\./g,"")},Ut=function(e){try{return xe.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=()=>Wt().__FIREBASE_DEFAULTS__,Gt=()=>{if(typeof process>"u"||typeof ge>"u")return;const e=ge.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Kt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ut(e[1]);return t&&JSON.parse(t)},Yt=()=>{try{return qt()||Gt()||Kt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Fe=()=>{var e;return(e=Yt())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}function Ve(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function oe(){try{return typeof indexedDB=="object"}catch{return!1}}function ce(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function He(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="FirebaseError";class P extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=Xt,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,j.prototype.create)}}class j{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?Qt(s,a):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new P(r,o,a)}}function Qt(e,t){return e.replace(Zt,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const Zt=/\{\$([^}]+)}/g;function M(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const s=e[r],i=t[r];if(be(s)&&be(i)){if(!M(s,i))return!1}else if(s!==i)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function be(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=1e3,tn=2,nn=4*60*60*1e3,rn=.5;function ye(e,t=en,n=tn){const a=t*Math.pow(n,e),r=Math.round(rn*a*(Math.random()-.5)*2);return Math.min(nn,a+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){return e&&e._delegate?e._delegate:e}class D{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new Jt;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(on(t))try{this.getOrInitializeService({instanceIdentifier:T})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});a.resolve(s)}catch{}}}}clearInstance(t=T){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=T){return this.instances.has(t)}getOptions(t=T){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[s,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);a===o&&i.resolve(r)}return r}onInit(t,n){var a;const r=this.normalizeInstanceIdentifier(n),s=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:sn(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=T){return this.component?this.component.multipleInstances?t:T:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sn(e){return e===T?void 0:e}function on(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new an(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const ln={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},dn=u.INFO,un={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},fn=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=un[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ue{constructor(t){this.name=t,this._logLevel=dn,this._logHandler=fn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ln[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const hn=(e,t)=>t.some(n=>e instanceof n);let we,Ie;function pn(){return we||(we=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mn(){return Ie||(Ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const We=new WeakMap,Z=new WeakMap,qe=new WeakMap,z=new WeakMap,le=new WeakMap;function gn(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(E(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&We.set(n,e)}).catch(()=>{}),le.set(t,e),t}function bn(e){if(Z.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});Z.set(e,t)}let ee={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Z.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yn(e){ee=e(ee)}function wn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(U(this),t,...n);return qe.set(a,t.sort?t.sort():[t]),E(a)}:mn().includes(e)?function(...t){return e.apply(U(this),t),E(We.get(this))}:function(...t){return E(e.apply(U(this),t))}}function In(e){return typeof e=="function"?wn(e):(e instanceof IDBTransaction&&bn(e),hn(e,pn())?new Proxy(e,ee):e)}function E(e){if(e instanceof IDBRequest)return gn(e);if(z.has(e))return z.get(e);const t=In(e);return t!==e&&(z.set(e,t),le.set(t,e)),t}const U=e=>le.get(e);function En(e,t,{blocked:n,upgrade:a,blocking:r,terminated:s}={}){const i=indexedDB.open(e,t),o=E(i);return a&&i.addEventListener("upgradeneeded",c=>{a(E(i.result),c.oldVersion,c.newVersion,E(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const _n=["get","getKey","getAll","getAllKeys","count"],vn=["put","add","delete","clear"],W=new Map;function Ee(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(W.get(t))return W.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=vn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||_n.includes(n)))return;const s=async function(i,...o){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return W.set(t,s),s}yn(e=>({...e,get:(t,n,a)=>Ee(t,n)||e.get(t,n,a),has:(t,n)=>!!Ee(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function Dn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const te="@firebase/app",_e="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=new Ue("@firebase/app"),Tn="@firebase/app-compat",Sn="@firebase/analytics-compat",Cn="@firebase/analytics",On="@firebase/app-check-compat",Rn="@firebase/app-check",Bn="@firebase/auth",Pn="@firebase/auth-compat",Ln="@firebase/database",$n="@firebase/database-compat",Mn="@firebase/functions",kn="@firebase/functions-compat",Nn="@firebase/installations",xn="@firebase/installations-compat",jn="@firebase/messaging",Fn="@firebase/messaging-compat",Vn="@firebase/performance",Hn="@firebase/performance-compat",zn="@firebase/remote-config",Un="@firebase/remote-config-compat",Wn="@firebase/storage",qn="@firebase/storage-compat",Gn="@firebase/firestore",Kn="@firebase/firestore-compat",Yn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]",Jn={[te]:"fire-core",[Tn]:"fire-core-compat",[Cn]:"fire-analytics",[Sn]:"fire-analytics-compat",[Rn]:"fire-app-check",[On]:"fire-app-check-compat",[Bn]:"fire-auth",[Pn]:"fire-auth-compat",[Ln]:"fire-rtdb",[$n]:"fire-rtdb-compat",[Mn]:"fire-fn",[kn]:"fire-fn-compat",[Nn]:"fire-iid",[xn]:"fire-iid-compat",[jn]:"fire-fcm",[Fn]:"fire-fcm-compat",[Vn]:"fire-perf",[Hn]:"fire-perf-compat",[zn]:"fire-rc",[Un]:"fire-rc-compat",[Wn]:"fire-gcs",[qn]:"fire-gcs-compat",[Gn]:"fire-fst",[Kn]:"fire-fst-compat","fire-js":"fire-js",[Yn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map,re=new Map;function Xn(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function O(e){const t=e.name;if(re.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;re.set(t,e);for(const n of k.values())Xn(n,e);return!0}function F(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_=new j("app","Firebase",Qn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new D("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}function Ge(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const a=Object.assign({name:ne,automaticDataCollectionEnabled:!1},t),r=a.name;if(typeof r!="string"||!r)throw _.create("bad-app-name",{appName:String(r)});if(n||(n=Fe()),!n)throw _.create("no-options");const s=k.get(r);if(s){if(M(n,s.options)&&M(a,s.config))return s;throw _.create("duplicate-app",{appName:r})}const i=new cn(r);for(const c of re.values())i.addComponent(c);const o=new Zn(n,a,i);return k.set(r,o),o}function er(e=ne){const t=k.get(e);if(!t&&e===ne&&Fe())return Ge();if(!t)throw _.create("no-app",{appName:e});return t}function v(e,t,n){var a;let r=(a=Jn[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${t}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),C.warn(o.join(" "));return}O(new D(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="firebase-heartbeat-database",nr=1,$="firebase-heartbeat-store";let q=null;function Ke(){return q||(q=En(tr,nr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($)}}}).catch(e=>{throw _.create("idb-open",{originalErrorMessage:e.message})})),q}async function rr(e){try{return await(await Ke()).transaction($).objectStore($).get(Ye(e))}catch(t){if(t instanceof P)C.warn(t.message);else{const n=_.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});C.warn(n.message)}}}async function ve(e,t){try{const a=(await Ke()).transaction($,"readwrite");await a.objectStore($).put(t,Ye(e)),await a.done}catch(n){if(n instanceof P)C.warn(n.message);else{const a=_.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});C.warn(a.message)}}}function Ye(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=1024,sr=30*24*60*60*1e3;class ir{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cr(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ae();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=sr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ae(),{heartbeatsToSend:n,unsentEntries:a}=or(this._heartbeatsCache.heartbeats),r=je(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ae(){return new Date().toISOString().substring(0,10)}function or(e,t=ar){const n=[];let a=e.slice();for(const r of e){const s=n.find(i=>i.agent===r.agent);if(s){if(s.dates.push(r.date),De(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),De(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class cr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oe()?ce().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ve(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function De(e){return je(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){O(new D("platform-logger",t=>new An(t),"PRIVATE")),O(new D("heartbeat",t=>new ir(t),"PRIVATE")),v(te,_e,e),v(te,_e,"esm2017"),v("fire-js","")}lr("");var dr="firebase",ur="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */v(dr,ur,"app");const fr=(e,t)=>t.some(n=>e instanceof n);let Te,Se;function hr(){return Te||(Te=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pr(){return Se||(Se=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Je=new WeakMap,ae=new WeakMap,Xe=new WeakMap,G=new WeakMap,de=new WeakMap;function mr(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{n(A(e.result)),r()},i=()=>{a(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Je.set(n,e)}).catch(()=>{}),de.set(t,e),t}function gr(e){if(ae.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{n(),r()},i=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});ae.set(e,t)}let se={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ae.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return A(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function br(e){se=e(se)}function yr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(K(this),t,...n);return Xe.set(a,t.sort?t.sort():[t]),A(a)}:pr().includes(e)?function(...t){return e.apply(K(this),t),A(Je.get(this))}:function(...t){return A(e.apply(K(this),t))}}function wr(e){return typeof e=="function"?yr(e):(e instanceof IDBTransaction&&gr(e),fr(e,hr())?new Proxy(e,se):e)}function A(e){if(e instanceof IDBRequest)return mr(e);if(G.has(e))return G.get(e);const t=wr(e);return t!==e&&(G.set(e,t),de.set(t,e)),t}const K=e=>de.get(e);function Ir(e,t,{blocked:n,upgrade:a,blocking:r,terminated:s}={}){const i=indexedDB.open(e,t),o=A(i);return a&&i.addEventListener("upgradeneeded",c=>{a(A(i.result),c.oldVersion,c.newVersion,A(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const Er=["get","getKey","getAll","getAllKeys","count"],_r=["put","add","delete","clear"],Y=new Map;function Ce(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Y.get(t))return Y.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=_r.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Er.includes(n)))return;const s=async function(i,...o){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return Y.set(t,s),s}br(e=>({...e,get:(t,n,a)=>Ce(t,n)||e.get(t,n,a),has:(t,n)=>!!Ce(t,n)||e.has(t,n)}));const Qe="@firebase/installations",ue="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=1e4,et=`w:${ue}`,tt="FIS_v2",vr="https://firebaseinstallations.googleapis.com/v1",Ar=60*60*1e3,Dr="installations",Tr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},R=new j(Dr,Tr,Sr);function nt(e){return e instanceof P&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt({projectId:e}){return`${vr}/projects/${e}/installations`}function at(e){return{token:e.token,requestStatus:2,expiresIn:Or(e.expiresIn),creationTime:Date.now()}}async function st(e,t){const a=(await t.json()).error;return R.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function it({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Cr(e,{refreshToken:t}){const n=it(e);return n.append("Authorization",Rr(t)),n}async function ot(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Or(e){return Number(e.replace("s","000"))}function Rr(e){return`${tt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=rt(e),r=it(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const i={fid:n,authVersion:tt,appId:e.appId,sdkVersion:et},o={method:"POST",headers:r,body:JSON.stringify(i)},c=await ot(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:at(l.authToken)}}else throw await st("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=/^[cdef][\w-]{21}$/,ie="";function $r(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Mr(e);return Lr.test(n)?n:ie}catch{return ie}}function Mr(e){return Pr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Map;function dt(e,t){const n=V(e);ut(n,t),kr(n,t)}function ut(e,t){const n=lt.get(e);if(n)for(const a of n)a(t)}function kr(e,t){const n=Nr();n&&n.postMessage({key:e,fid:t}),xr()}let S=null;function Nr(){return!S&&"BroadcastChannel"in self&&(S=new BroadcastChannel("[Firebase] FID Change"),S.onmessage=e=>{ut(e.data.key,e.data.fid)}),S}function xr(){lt.size===0&&S&&(S.close(),S=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="firebase-installations-database",Fr=1,B="firebase-installations-store";let J=null;function fe(){return J||(J=Ir(jr,Fr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(B)}}})),J}async function N(e,t){const n=V(e),r=(await fe()).transaction(B,"readwrite"),s=r.objectStore(B),i=await s.get(n);return await s.put(t,n),await r.done,(!i||i.fid!==t.fid)&&dt(e,t.fid),t}async function ft(e){const t=V(e),a=(await fe()).transaction(B,"readwrite");await a.objectStore(B).delete(t),await a.done}async function H(e,t){const n=V(e),r=(await fe()).transaction(B,"readwrite"),s=r.objectStore(B),i=await s.get(n),o=t(i);return o===void 0?await s.delete(n):await s.put(o,n),await r.done,o&&(!i||i.fid!==o.fid)&&dt(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(e){let t;const n=await H(e.appConfig,a=>{const r=Vr(a),s=Hr(e,r);return t=s.registrationPromise,s.installationEntry});return n.fid===ie?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Vr(e){const t=e||{fid:$r(),registrationStatus:0};return ht(t)}function Hr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(R.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=zr(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ur(e)}:{installationEntry:t}}async function zr(e,t){try{const n=await Br(e,t);return N(e.appConfig,n)}catch(n){throw nt(n)&&n.customData.serverCode===409?await ft(e.appConfig):await N(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ur(e){let t=await Oe(e.appConfig);for(;t.registrationStatus===1;)await ct(100),t=await Oe(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await he(e);return a||n}return t}function Oe(e){return H(e,t=>{if(!t)throw R.create("installation-not-found");return ht(t)})}function ht(e){return Wr(e)?{fid:e.fid,registrationStatus:0}:e}function Wr(e){return e.registrationStatus===1&&e.registrationTime+Ze<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr({appConfig:e,heartbeatServiceProvider:t},n){const a=Gr(e,n),r=Cr(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const i={installation:{sdkVersion:et,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(i)},c=await ot(()=>fetch(a,o));if(c.ok){const l=await c.json();return at(l)}else throw await st("Generate Auth Token",c)}function Gr(e,{fid:t}){return`${rt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(e,t=!1){let n;const a=await H(e.appConfig,s=>{if(!pt(s))throw R.create("not-registered");const i=s.authToken;if(!t&&Jr(i))return s;if(i.requestStatus===1)return n=Kr(e,t),s;{if(!navigator.onLine)throw R.create("app-offline");const o=Qr(s);return n=Yr(e,o),o}});return n?await n:a.authToken}async function Kr(e,t){let n=await Re(e.appConfig);for(;n.authToken.requestStatus===1;)await ct(100),n=await Re(e.appConfig);const a=n.authToken;return a.requestStatus===0?pe(e,t):a}function Re(e){return H(e,t=>{if(!pt(t))throw R.create("not-registered");const n=t.authToken;return Zr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Yr(e,t){try{const n=await qr(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await N(e.appConfig,a),n}catch(n){if(nt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ft(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await N(e.appConfig,a)}throw n}}function pt(e){return e!==void 0&&e.registrationStatus===2}function Jr(e){return e.requestStatus===2&&!Xr(e)}function Xr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ar}function Qr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Zr(e){return e.requestStatus===1&&e.requestTime+Ze<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(e){const t=e,{installationEntry:n,registrationPromise:a}=await he(t);return a?a.catch(console.error):pe(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(e,t=!1){const n=e;return await na(n),(await pe(n,t)).token}async function na(e){const{registrationPromise:t}=await he(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){if(!e||!e.options)throw X("App Configuration");if(!e.name)throw X("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw X(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function X(e){return R.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="installations",aa="installations-internal",sa=e=>{const t=e.getProvider("app").getImmediate(),n=ra(t),a=F(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ia=e=>{const t=e.getProvider("app").getImmediate(),n=F(t,mt).getImmediate();return{getId:()=>ea(n),getToken:r=>ta(n,r)}};function oa(){O(new D(mt,sa,"PUBLIC")),O(new D(aa,ia,"PRIVATE"))}oa();v(Qe,ue);v(Qe,ue,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="analytics",ca="firebase_id",la="origin",da=60*1e3,ua="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",me="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new Ue("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},b=new j("analytics","Analytics",fa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e){if(!e.startsWith(me)){const t=b.create("invalid-gtag-resource",{gtagURL:e});return h.warn(t.message),""}return e}function gt(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function pa(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function ma(e,t){const n=pa("firebase-js-sdk-policy",{createScriptURL:ha}),a=document.createElement("script"),r=`${me}?l=${e}&id=${t}`;a.src=n?n==null?void 0:n.createScriptURL(r):r,a.async=!0,document.head.appendChild(a)}function ga(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ba(e,t,n,a,r,s){const i=a[r];try{if(i)await t[i];else{const c=(await gt(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(o){h.error(o)}e("config",r,s)}async function ya(e,t,n,a,r){try{let s=[];if(r&&r.send_to){let i=r.send_to;Array.isArray(i)||(i=[i]);const o=await gt(n);for(const c of i){const l=o.find(p=>p.measurementId===c),f=l&&t[l.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",a,r||{})}catch(s){h.error(s)}}function wa(e,t,n,a){async function r(s,...i){try{if(s==="event"){const[o,c]=i;await ya(e,t,n,o,c)}else if(s==="config"){const[o,c]=i;await ba(e,t,n,a,o,c)}else if(s==="consent"){const[o]=i;e("consent","update",o)}else if(s==="get"){const[o,c,l]=i;e("get",o,c,l)}else if(s==="set"){const[o]=i;e("set",o)}else e(s,...i)}catch(o){h.error(o)}}return r}function Ia(e,t,n,a,r){let s=function(...i){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=wa(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function Ea(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(me)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=30,va=1e3;class Aa{constructor(t={},n=va){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bt=new Aa;function Da(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ta(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:Da(a)},s=ua.replace("{app-id}",n),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw b.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Sa(e,t=bt,n){const{appId:a,apiKey:r,measurementId:s}=e.options;if(!a)throw b.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:a};throw b.create("no-api-key")}const i=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Ra;return setTimeout(async()=>{o.abort()},da),yt({appId:a,apiKey:r,measurementId:s},i,o,t)}async function yt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=bt){var s;const{appId:i,measurementId:o}=e;try{await Ca(a,t)}catch(c){if(o)return h.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:o};throw c}try{const c=await Ta(e);return r.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Oa(l)){if(r.deleteThrottleMetadata(i),o)return h.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw c}const f=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?ye(n,r.intervalMillis,_a):ye(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(i,p),h.debug(`Calling attemptFetch again in ${f} millis`),yt(e,p,a,r)}}function Ca(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),a(b.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Oa(e){if(!(e instanceof P)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Ra{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ba(e,t,n,a,r){if(r&&r.global){e("event",n,a);return}else{const s=await t,i=Object.assign(Object.assign({},a),{send_to:s});e("event",n,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(){if(oe())try{await ce()}catch(e){return h.warn(b.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return h.warn(b.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function La(e,t,n,a,r,s,i){var o;const c=Sa(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&h.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>h.error(m)),t.push(c);const l=Pa().then(m=>{if(m)return a.getId()}),[f,p]=await Promise.all([c,l]);Ea(s)||ma(s,f.measurementId),r("js",new Date);const I=(o=i==null?void 0:i.config)!==null&&o!==void 0?o:{};return I[la]="firebase",I.update=!0,p!=null&&(I[ca]=p),r("config",f.measurementId,I),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.app=t}_delete(){return delete L[this.app.options.appId],Promise.resolve()}}let L={},Be=[];const Pe={};let Q="dataLayer",Ma="gtag",Le,wt,$e=!1;function ka(){const e=[];if(Ve()&&e.push("This is a browser extension environment."),He()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=b.create("invalid-analytics-context",{errorInfo:t});h.warn(n.message)}}function Na(e,t,n){ka();const a=e.options.appId;if(!a)throw b.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)h.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw b.create("no-api-key");if(L[a]!=null)throw b.create("already-exists",{id:a});if(!$e){ga(Q);const{wrappedGtag:s,gtagCore:i}=Ia(L,Be,Pe,Q,Ma);wt=s,Le=i,$e=!0}return L[a]=La(e,Be,Pe,t,Le,Q,n),new $a(e)}function xa(e=er()){e=ze(e);const t=F(e,x);return t.isInitialized()?t.getImmediate():ja(e)}function ja(e,t={}){const n=F(e,x);if(n.isInitialized()){const r=n.getImmediate();if(M(t,n.getOptions()))return r;throw b.create("already-initialized")}return n.initialize({options:t})}async function Fa(){if(Ve()||!He()||!oe())return!1;try{return await ce()}catch{return!1}}function Va(e,t,n,a){e=ze(e),Ba(wt,L[e.app.options.appId],t,n,a).catch(r=>h.error(r))}const Me="@firebase/analytics",ke="0.10.0";function Ha(){O(new D(x,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return Na(a,r,n)},"PUBLIC")),O(new D("analytics-internal",e,"PRIVATE")),v(Me,ke),v(Me,ke,"esm2017");function e(t){try{const n=t.getProvider(x).getImmediate();return{logEvent:(a,r,s)=>Va(n,a,r,s)}}catch(n){throw b.create("interop-component-reg-failed",{reason:n})}}}Ha();const za={apiKey:"AIzaSyDCDzDcaol4b5mQvYUCKl2fpQHmXxwpNPk",authDomain:"habitscroll-b4ccb.firebaseapp.com",projectId:"habitscroll-b4ccb",storageBucket:"habitscroll-b4ccb.firebasestorage.app",messagingSenderId:"861547233127",appId:"1:861547233127:web:769503666f785c6e9df9c2",measurementId:"G-E4JKCFNJFW"},Ua=Ge(za),Wa=async()=>await Fa()?xa(Ua):null;if(typeof window<"u"&&"performance"in window&&(window.performance.mark("app-init"),"PerformanceObserver"in window))try{new PerformanceObserver(t=>{for(const n of t.getEntries())n.duration>50&&console.debug("Long task detected:",n)}).observe({entryTypes:["longtask"]})}catch{console.debug("PerformanceObserver for longtask not supported")}Wa().then(e=>{console.debug(e?"Firebase Analytics initialized successfully":"Firebase Analytics not supported in this environment")}).catch(e=>{console.error("Error initializing Firebase Analytics:",e)});const qa=()=>{"requestIdleCallback"in window&&window.requestIdleCallback(()=>{const e=["./pages/LearnWhoYouAre","./pages/LearnAboutHabits","./pages/LearnHowToTrack"];Promise.all(e.map(t=>import(t).catch(n=>console.debug(`Prefetch failed for ${t}:`,n))))})};(async()=>{try{At(document.getElementById("root")).render(d.jsx(Ft,{})),window.performance.mark("app-rendered"),window.performance.measure("app-render-time","app-init","app-rendered"),qa()}catch(e){console.error("Error rendering application:",e)}})();window.addEventListener("DOMContentLoaded",()=>{window.performance.mark("dom-content-loaded"),window.performance.measure("dom-load-time","app-init","dom-content-loaded")});window.addEventListener("load",()=>{window.performance.mark("page-load-complete"),window.performance.measure("total-page-load","app-init","page-load-complete");const e=window.performance.getEntriesByName("total-page-load")[0];e&&console.debug(`Page fully loaded in: ${Math.round(e.duration)}ms`),typeof window<"u"&&"navigation"in window&&window.addEventListener("navigate",()=>{document.dispatchEvent(new Event("securityrefresh"))})});
