(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"000b":function(e,t,n){"use strict";n.d(t,"a",(function(){return ft}));var r=n("589b"),i=n("e691"),o=n("1fd5"),s=n("22e5");const a="@firebase/installations",c="0.5.8",u=1e4,l="w:"+c,h="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",f=36e5,p="installations",g="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},m=new o["b"](p,g,v);function _(e){return e instanceof o["c"]&&e.code.includes("request-failed")}
/**
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
 */function b({projectId:e}){return`${d}/projects/${e}/installations`}function y(e){return{token:e.token,requestStatus:2,expiresIn:I(e.expiresIn),creationTime:Date.now()}}async function w(e,t){const n=await t.json(),r=n.error;return m.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function O({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function C(e,{refreshToken:t}){const n=O(e);return n.append("Authorization",j(t)),n}async function k(e){const t=await e();return t.status>=500&&t.status<600?e():t}function I(e){return Number(e.replace("s","000"))}function j(e){return`${h} ${e}`}
/**
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
 */async function E({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=O(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={fid:n,authVersion:h,appId:e.appId,sdkVersion:l},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await k(()=>fetch(r,a));if(c.ok){const e=await c.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:y(e.authToken)};return t}throw await w("Create Installation",c)}
/**
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
 */function T(e){return new Promise(t=>{setTimeout(t,e)})}
/**
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
 */function x(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
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
 */const S=/^[cdef][\w-]{21}$/,P="";function R(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=N(e);return S.test(n)?n:P}catch(e){return P}}function N(e){const t=x(e);return t.substr(0,22)}
/**
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
 */function A(e){return`${e.appName}!${e.appId}`}
/**
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
 */const L=new Map;function M(e,t){const n=A(e);D(n,t),F(n,t)}function D(e,t){const n=L.get(e);if(n)for(const r of n)r(t)}function F(e,t){const n=U();n&&n.postMessage({key:e,fid:t}),q()}let $=null;function U(){return!$&&"BroadcastChannel"in self&&($=new BroadcastChannel("[Firebase] FID Change"),$.onmessage=e=>{D(e.data.key,e.data.fid)}),$}function q(){0===L.size&&$&&($.close(),$=null)}
/**
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
 */const V="firebase-installations-database",z=1,W="firebase-installations-store";let B=null;function H(){return B||(B=Object(o["G"])(V,z,(e,t)=>{switch(t){case 0:e.createObjectStore(W)}})),B}async function G(e,t){const n=A(e),r=await H(),i=r.transaction(W,"readwrite"),o=i.objectStore(W),s=await o.get(n);return await o.put(t,n),await i.complete,s&&s.fid===t.fid||M(e,t.fid),t}async function K(e){const t=A(e),n=await H(),r=n.transaction(W,"readwrite");await r.objectStore(W).delete(t),await r.complete}async function Y(e,t){const n=A(e),r=await H(),i=r.transaction(W,"readwrite"),o=i.objectStore(W),s=await o.get(n),a=t(s);return void 0===a?await o.delete(n):await o.put(a,n),await i.complete,!a||s&&s.fid===a.fid||M(e,a.fid),a}
/**
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
 */async function J(e){let t;const n=await Y(e.appConfig,n=>{const r=Q(n),i=X(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===P?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Q(e){const t=e||{fid:R(),registrationStatus:0};return ne(t)}function X(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(m.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Z(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:ee(e)}:{installationEntry:t}}async function Z(e,t){try{const n=await E(e,t);return G(e.appConfig,n)}catch(n){throw _(n)&&409===n.customData.serverCode?await K(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ee(e){let t=await te(e.appConfig);while(1===t.registrationStatus)await T(100),t=await te(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await J(e);return n||t}return t}function te(e){return Y(e,e=>{if(!e)throw m.create("installation-not-found");return ne(e)})}function ne(e){return re(e)?{fid:e.fid,registrationStatus:0}:e}function re(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
/**
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
 */async function ie({appConfig:e,heartbeatServiceProvider:t},n){const r=oe(e,n),i=C(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const s={installation:{sdkVersion:l,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await k(()=>fetch(r,a));if(c.ok){const e=await c.json(),t=y(e);return t}throw await w("Generate Auth Token",c)}function oe(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
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
 */async function se(e,t=!1){let n;const r=await Y(e.appConfig,r=>{if(!le(r))throw m.create("not-registered");const i=r.authToken;if(!t&&he(i))return r;if(1===i.requestStatus)return n=ae(e,t),r;{if(!navigator.onLine)throw m.create("app-offline");const t=fe(r);return n=ue(e,t),t}}),i=n?await n:r.authToken;return i}async function ae(e,t){let n=await ce(e.appConfig);while(1===n.authToken.requestStatus)await T(100),n=await ce(e.appConfig);const r=n.authToken;return 0===r.requestStatus?se(e,t):r}function ce(e){return Y(e,e=>{if(!le(e))throw m.create("not-registered");const t=e.authToken;return pe(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ue(e,t){try{const n=await ie(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,r),n}catch(n){if(!_(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await K(e.appConfig);throw n}}function le(e){return void 0!==e&&2===e.registrationStatus}function he(e){return 2===e.requestStatus&&!de(e)}function de(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+f}function fe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pe(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
/**
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
 */async function ge(e){const t=e,{installationEntry:n,registrationPromise:r}=await J(t);return r?r.catch(console.error):se(t).catch(console.error),n.fid}
/**
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
 */async function ve(e,t=!1){const n=e;await me(n);const r=await se(n,t);return r.token}async function me(e){const{registrationPromise:t}=await J(e);t&&await t}
/**
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
 */
/**
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
 */
function _e(e){if(!e||!e.options)throw be("App Configuration");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function be(e){return m.create("missing-app-config-values",{valueName:e})}
/**
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
 */const ye="installations",we="installations-internal",Oe=e=>{const t=e.getProvider("app").getImmediate(),n=_e(t),i=Object(r["b"])(t,"heartbeat"),o={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return o},Ce=e=>{const t=e.getProvider("app").getImmediate(),n=Object(r["b"])(t,ye).getImmediate(),i={getId:()=>ge(n),getToken:e=>ve(n,e)};return i};function ke(){Object(r["c"])(new s["a"](ye,Oe,"PUBLIC")),Object(r["c"])(new s["a"](we,Ce,"PRIVATE"))}ke(),Object(r["f"])(a,c),Object(r["f"])(a,c,"esm2017");
/**
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
 */
const Ie="analytics",je="firebase_id",Ee="origin",Te=6e4,xe="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Se="https://www.googletagmanager.com/gtag/js",Pe=new i["b"]("@firebase/analytics");
/**
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
 */
function Re(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function Ne(e,t){const n=document.createElement("script");n.src=`${Se}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Ae(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Le(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=await Re(n),r=e.find(e=>e.measurementId===i);r&&await t[r.appId]}}catch(a){Pe.error(a)}e("config",i,o)}async function Me(e,t,n,r,i){try{let o=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await Re(n);for(const n of e){const e=r.find(e=>e.measurementId===n),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Pe.error(o)}}function De(e,t,n,r){async function i(i,o,s){try{"event"===i?await Me(e,t,n,o,s):"config"===i?await Le(e,t,n,r,o,s):e("set",o)}catch(a){Pe.error(a)}}return i}function Fe(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(o=window[i]),window[i]=De(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function $e(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Se))return t;return null}
/**
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
 */const Ue={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},qe=new o["b"]("analytics","Analytics",Ue),Ve=30,ze=1e3;class We{constructor(e={},t=ze){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Be=new We;function He(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ge(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:He(r)},o=xe.replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw qe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}async function Ke(e,t=Be,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw qe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw qe.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Xe;return setTimeout(async()=>{a.abort()},void 0!==n?n:Te),Ye({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Ye(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Be){const{appId:s,measurementId:a}=e;try{await Je(r,t)}catch(c){if(a)return Pe.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+` provided in the "measurementId" field in the local Firebase config. [${c.message}]`),{appId:s,measurementId:a};throw c}try{const t=await Ge(e);return i.deleteThrottleMetadata(s),t}catch(c){if(!Qe(c)){if(i.deleteThrottleMetadata(s),a)return Pe.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+a+` provided in the "measurementId" field in the local Firebase config. [${c.message}]`),{appId:s,measurementId:a};throw c}const t=503===Number(c.customData.httpStatus)?Object(o["l"])(n,i.intervalMillis,Ve):Object(o["l"])(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(s,u),Pe.debug(`Calling attemptFetch again in ${t} millis`),Ye(e,u,r,i)}}function Je(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(qe.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Qe(e){if(!(e instanceof o["c"])||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Xe{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}
/**
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
 */async function Ze(){if(!Object(o["z"])())return Pe.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Object(o["N"])()}catch(e){return Pe.warn(qe.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function et(e,t,n,r,i,o,s){var a;const c=Ke(e);c.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>Pe.error(e)),t.push(c);const u=Ze().then(e=>e?r.getId():void 0),[l,h]=await Promise.all([c,u]);$e()||Ne(o,l.measurementId),i("js",new Date);const d=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return d[Ee]="firebase",d.update=!0,null!=h&&(d[je]=h),i("config",l.measurementId,d),l.measurementId}
/**
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
 */class tt{constructor(e){this.app=e}_delete(){return delete nt[this.app.options.appId],Promise.resolve()}}let nt={},rt=[];const it={};let ot,st,at="dataLayer",ct="gtag",ut=!1;function lt(){const e=[];if(Object(o["w"])()&&e.push("This is a browser extension environment."),Object(o["e"])()||e.push("Cookies are not available."),e.length>0){const t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:t});Pe.warn(n.message)}}function ht(e,t,n){lt();const r=e.options.appId;if(!r)throw qe.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw qe.create("no-api-key");Pe.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=nt[r])throw qe.create("already-exists",{id:r});if(!ut){Ae(at);const{wrappedGtag:e,gtagCore:t}=Fe(nt,rt,it,at,ct);st=e,ot=t,ut=!0}nt[r]=et(e,rt,it,t,ot,at,n);const i=new tt(e);return i}
/**
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
 */async function dt(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}function ft(e=Object(r["d"])()){e=Object(o["t"])(e);const t=Object(r["b"])(e,Ie);return t.isInitialized()?t.getImmediate():pt(e)}function pt(e,t={}){const n=Object(r["b"])(e,Ie);if(n.isInitialized()){const e=n.getImmediate();if(Object(o["q"])(t,n.getOptions()))return e;throw qe.create("already-initialized")}const i=n.initialize({options:t});return i}function gt(e,t,n,r){e=Object(o["t"])(e),dt(st,nt[e.app.options.appId],t,n,r).catch(e=>Pe.error(e))}const vt="@firebase/analytics",mt="0.7.8";function _t(){function e(e){try{const t=e.getProvider(Ie).getImmediate();return{logEvent:(e,n,r)=>gt(t,e,n,r)}}catch(t){throw qe.create("interop-component-reg-failed",{reason:t})}}Object(r["c"])(new s["a"](Ie,(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ht(n,r,t)},"PUBLIC")),Object(r["c"])(new s["a"]("analytics-internal",e,"PRIVATE")),Object(r["f"])(vt,mt),Object(r["f"])(vt,mt,"esm2017")}_t()},"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=n("40d5"),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?s(e,t):function(){return e.apply(t,arguments)}}},"0481":function(e,t,n){"use strict";var r=n("23e7"),i=n("a2bf"),o=n("7b0b"),s=n("07fa"),a=n("5926"),c=n("65f0");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=s(t),r=c(t,0);return r.length=i(r,t,t,n,0,void 0===e?1:a(e)),r}})},"057f":function(e,t,n){var r=n("c6b6"),i=n("fc6a"),o=n("241c").f,s=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s(a)}};e.exports.f=function(e){return a&&"Window"==r(e)?c(e):o(i(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0b42":function(e,t,n){var r=n("da84"),i=n("e8b5"),o=n("68ee"),s=n("861d"),a=n("b622"),c=a("species"),u=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,o(t)&&(t===u||i(t.prototype))?t=void 0:s(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?u:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var r=i(n,e,t);return null!==r&&o(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"14e5":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("59ed"),s=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{all:function(e){var t=this,n=s.f(t),r=n.resolve,u=n.reject,l=a((function(){var n=o(t.resolve),s=[],a=0,l=1;c(e,(function(e){var o=a++,c=!1;l++,i(n,t,e).then((function(e){c||(c=!0,s[o]=e,--l||r(s))}),u)})),--l||r(s)}));return l.error&&u(l.value),n.promise}})},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return T})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return B})),n.d(t,"e",(function(){return I})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return re})),n.d(t,"m",(function(){return M})),n.d(t,"n",(function(){return v})),n.d(t,"o",(function(){return H})),n.d(t,"p",(function(){return d})),n.d(t,"q",(function(){return U})),n.d(t,"r",(function(){return J})),n.d(t,"s",(function(){return W})),n.d(t,"t",(function(){return ie})),n.d(t,"u",(function(){return m})),n.d(t,"v",(function(){return L})),n.d(t,"w",(function(){return b})),n.d(t,"x",(function(){return F})),n.d(t,"y",(function(){return w})),n.d(t,"z",(function(){return C})),n.d(t,"A",(function(){return _})),n.d(t,"B",(function(){return O})),n.d(t,"C",(function(){return y})),n.d(t,"D",(function(){return A})),n.d(t,"E",(function(){return P})),n.d(t,"F",(function(){return $})),n.d(t,"G",(function(){return le})),n.d(t,"H",(function(){return V})),n.d(t,"I",(function(){return z})),n.d(t,"J",(function(){return D})),n.d(t,"K",(function(){return X})),n.d(t,"L",(function(){return Q})),n.d(t,"M",(function(){return R})),n.d(t,"N",(function(){return k}));
/**
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
 */
const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},i=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},a=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},u=function(e){const t=s(e);return c.encodeByteArray(t,!0)},l=function(e){return u(e).replace(/\./g,"")},h=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
/**
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
 */
function d(e){return f(void 0,e)}function f(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&p(n)&&(e[n]=f(e[n],t[n]));return e}function p(e){return"__proto__"!==e}
/**
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
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
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
 */function v(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(s)),a].join(".")}
/**
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
 */function m(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(m())}function b(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){const e=m();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!0===r.NODE_CLIENT||!0===r.NODE_ADMIN}function C(){return"object"===typeof indexedDB}function k(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})}function I(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
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
 */
const j="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=j,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?x(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new E(r,s,n);return a}}function x(e,t){return e.replace(S,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const S=/\{\$([^}]+)}/g;
/**
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
 */function P(e){return JSON.parse(e)}function R(e){return JSON.stringify(e)}
/**
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
 */const N=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=P(h(o[0])||""),n=P(h(o[1])||""),i=o[2],r=n["d"]||{},delete n["d"]}catch(o){}return{header:t,claims:n,data:r,signature:i}},A=function(e){const t=N(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},L=function(e){const t=N(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
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
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function F(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(q(n)&&q(o)){if(!U(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function q(e){return null!==e&&"object"===typeof e}
/**
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
 */function V(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function z(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function W(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class B{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(r=c^s&(a^c),i=1518500249):(r=s^a^c,i=1859775393):l<60?(r=s&a|c&(s|a),i=2400959708):(r=s^a^c,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[l]&4294967295;u=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function H(e,t){const n=new G(e,t);return n.subscribe.bind(n)}class G{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Y),void 0===r.error&&(r.error=Y),void 0===r.complete&&(r.complete=Y);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Y(){}
/**
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
 */function J(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const Q=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){const t=o-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},X=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},Z=1e3,ee=2,te=144e5,ne=.5;function re(e,t=Z,n=ee){const r=t*Math.pow(n,e),i=Math.round(ne*r*(Math.random()-.5)*2);return Math.min(te,r+i)}
/**
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
 */
/**
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
 */
function ie(e){return e&&e._delegate?e._delegate:e}
/**
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
 */function oe(e,t){return new Promise((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}})}class se{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new ae(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new ce(this._db.createObjectStore(e,t))}close(){this._db.close()}}class ae{constructor(e){this._transaction=e,this.complete=new Promise((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}})}objectStore(e){return new ce(this._transaction.objectStore(e))}}class ce{constructor(e){this._store=e}index(e){return new ue(this._store.index(e))}createIndex(e,t,n){return new ue(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return oe(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return oe(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return oe(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return oe(e,"Error clearing IndexedDB object store")}}class ue{constructor(e){this._index=e}get(e){const t=this._index.get(e);return oe(t,"Error reading from IndexedDB")}}function le(e,t,n){return new Promise((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=e=>{r(new se(e.target.result))},o.onerror=e=>{var t;i("Error opening indexedDB: "+(null===(t=e.target.error)||void 0===t?void 0:t.message))},o.onupgradeneeded=e=>{n(new se(o.result),e.oldVersion,e.newVersion,new ae(o.transaction))}}catch(o){i("Error opening indexedDB: "+o.message)}})}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=r.TypeError,g=function(e,t){this.stopped=e,this.result=t},v=g.prototype;e.exports=function(e,t,n){var r,m,_,b,y,w,O,C=n&&n.that,k=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),j=!(!n||!n.INTERRUPTED),E=i(t,C),T=function(e){return r&&f(r,"normal",e),new g(!0,e)},x=function(e){return k?(s(e),j?E(e[0],e[1],T):E(e[0],e[1])):j?E(e,T):E(e)};if(I)r=e;else{if(m=d(e),!m)throw p(a(e)+" is not iterable");if(c(m)){for(_=0,b=u(e);b>_;_++)if(y=x(e[_]),y&&l(v,y))return y;return new g(!1)}r=h(e,m)}w=r.next;while(!(O=o(w,r)).done){try{y=x(O.value)}catch(S){f(r,"throw",S)}if("object"==typeof y&&y&&l(v,y))return y}return new g(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,v=e.global,m=e.stat;if(l=v?r:m?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(v?h:g+(m?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},2532:function(e,t,n){"use strict";var r=n("23e7"),i=n("e330"),o=n("5a34"),s=n("1d80"),a=n("577e"),c=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~u(a(s(this)),a(o(e)),arguments.length>1?arguments[1]:void 0)}})},"25a0":function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n("8afd");function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce((n,i)=>(t.includes(i)||(n[i]=Object(r["m"])(e[i])),n),{})}function o(e){return"function"===typeof e}function s(e){return Object(r["d"])(e)||Object(r["e"])(e)}function a(e,t,n,i){return e.call(i,Object(r["m"])(t),Object(r["m"])(n),i)}function c(e){return void 0!==e.$valid?!e.$valid:!e}function u(e,t,n,i,o,s,u){let{$lazy:l,$rewardEarly:h}=o,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],f=arguments.length>8?arguments[8]:void 0,p=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const v=Object(r["l"])(!!i.value),m=Object(r["l"])(0);n.value=!1;const _=Object(r["n"])([t,i].concat(d,g),()=>{if(l&&!i.value||h&&!p.value&&!n.value)return;let r;try{r=a(e,t,f,u)}catch(o){r=Promise.reject(o)}m.value++,n.value=!!m.value,v.value=!1,Promise.resolve(r).then(e=>{m.value--,n.value=!!m.value,s.value=e,v.value=c(e)}).catch(e=>{m.value--,n.value=!!m.value,s.value=e,v.value=!0})},{immediate:!0,deep:"object"===typeof t});return{$invalid:v,$unwatch:_}}function l(e,t,n,i,o,s,u,l){let{$lazy:h,$rewardEarly:d}=i;const f=()=>({}),p=Object(r["a"])(()=>{if(h&&!n.value||d&&!l.value)return!1;let r=!0;try{const n=a(e,t,u,s);o.value=n,r=c(n)}catch(i){o.value=i}return r});return{$unwatch:f,$invalid:p}}function h(e,t,n,s,a,c,h,d,f,p,g){const v=Object(r["l"])(!1),m=e.$params||{},_=Object(r["l"])(null);let b,y;e.$async?({$invalid:b,$unwatch:y}=u(e.$validator,t,v,n,s,_,a,e.$watchTargets,f,p,g)):({$invalid:b,$unwatch:y}=l(e.$validator,t,n,s,_,a,f,p));const w=e.$message,O=o(w)?Object(r["a"])(()=>w(i({$pending:v,$invalid:b,$params:i(m),$model:t,$response:_,$validator:c,$propertyPath:d,$property:h}))):w||"";return{$message:O,$params:m,$pending:v,$invalid:b,$response:_,$unwatch:y}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object(r["m"])(e),n=Object.keys(t),i={},s={},a={};return n.forEach(e=>{const n=t[e];switch(!0){case o(n.$validator):i[e]=n;break;case o(n):i[e]={$validator:n};break;case e.startsWith("$"):a[e]=n;break;default:s[e]=n}}),{rules:i,nestedValidators:s,config:a}}function f(){}const p="__root";function g(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(i){return Promise.reject(i)}}function v(e,t){return g(e,f,t)}function m(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function _(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(r){return Promise.reject(r)}}}function b(e,t,n,i,o,s,a,c,u){const l=Object.keys(e),d=i.get(o,e),f=Object(r["l"])(!1),p=Object(r["l"])(!1),g=Object(r["l"])(0);if(d){if(!d.$partial)return d;d.$unwatch(),f.value=d.$dirty.value}const v={$dirty:f,$path:o,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return l.length?(l.forEach(r=>{v[r]=h(e[r],t,v.$dirty,s,a,r,n,o,u,p,g)}),v.$externalResults=Object(r["a"])(()=>c.value?[].concat(c.value).map((e,t)=>({$propertyPath:o,$property:n,$validator:"$externalResults",$uid:`${o}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1})):[]),v.$invalid=Object(r["a"])(()=>{const e=l.some(e=>Object(r["m"])(v[e].$invalid));return p.value=e,!!v.$externalResults.value.length||e}),v.$pending=Object(r["a"])(()=>l.some(e=>Object(r["m"])(v[e].$pending))),v.$error=Object(r["a"])(()=>!!v.$dirty.value&&(v.$pending.value||v.$invalid.value)),v.$silentErrors=Object(r["a"])(()=>l.filter(e=>Object(r["m"])(v[e].$invalid)).map(e=>{const t=v[e];return Object(r["k"])({$propertyPath:o,$property:n,$validator:e,$uid:`${o}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})}).concat(v.$externalResults.value)),v.$errors=Object(r["a"])(()=>v.$dirty.value?v.$silentErrors.value:[]),v.$unwatch=()=>l.forEach(e=>{v[e].$unwatch()}),v.$commit=()=>{p.value=!0,g.value=Date.now()},i.set(o,e,v),v):(d&&i.set(o,e,v),v)}function y(e,t,n,r,i,o,s){const a=Object.keys(e);return a.length?a.reduce((a,c)=>(a[c]=O({validations:e[c],state:t,key:c,parentKey:n,resultsCache:r,globalConfig:i,instance:o,externalResults:s}),a),{}):{}}function w(e,t,n){const i=Object(r["a"])(()=>[t,n].filter(e=>e).reduce((e,t)=>e.concat(Object.values(Object(r["m"])(t))),[])),o=Object(r["a"])({get(){return e.$dirty.value||!!i.value.length&&i.value.every(e=>e.$dirty)},set(t){e.$dirty.value=t}}),s=Object(r["a"])(()=>{const t=Object(r["m"])(e.$silentErrors)||[],n=i.value.filter(e=>(Object(r["m"])(e).$silentErrors||[]).length).reduce((e,t)=>e.concat(...t.$silentErrors),[]);return t.concat(n)}),a=Object(r["a"])(()=>{const t=Object(r["m"])(e.$errors)||[],n=i.value.filter(e=>(Object(r["m"])(e).$errors||[]).length).reduce((e,t)=>e.concat(...t.$errors),[]);return t.concat(n)}),c=Object(r["a"])(()=>i.value.some(e=>e.$invalid)||Object(r["m"])(e.$invalid)||!1),u=Object(r["a"])(()=>i.value.some(e=>Object(r["m"])(e.$pending))||Object(r["m"])(e.$pending)||!1),l=Object(r["a"])(()=>i.value.some(e=>e.$dirty)||i.value.some(e=>e.$anyDirty)||o.value),h=Object(r["a"])(()=>!!o.value&&(u.value||c.value)),d=()=>{e.$touch(),i.value.forEach(e=>{e.$touch()})},f=()=>{e.$commit(),i.value.forEach(e=>{e.$commit()})},p=()=>{e.$reset(),i.value.forEach(e=>{e.$reset()})};return i.value.length&&i.value.every(e=>e.$dirty)&&d(),{$dirty:o,$errors:a,$invalid:c,$anyDirty:l,$error:h,$pending:u,$touch:d,$reset:p,$silentErrors:s,$commit:f}}function O(e){const t=_((function(){return D(),m((function(){if(I.$rewardEarly)return U(),v(r["g"])}),(function(){return g(r["g"],(function(){return new Promise(e=>{if(!M.value)return e(!N.value);const t=Object(r["n"])(M,()=>{e(!N.value),t()})})}))}))}));let{validations:n,state:i,key:o,parentKey:s,childResults:a,resultsCache:c,globalConfig:u={},instance:l,externalResults:h}=e;const f=s?`${s}.${o}`:o,{rules:O,nestedValidators:C,config:k}=d(n),I=Object.assign({},u,k),j=o?Object(r["a"])(()=>{const e=Object(r["m"])(i);return e?Object(r["m"])(e[o]):void 0}):i,E=Object.assign({},Object(r["m"])(h)||{}),T=Object(r["a"])(()=>{const e=Object(r["m"])(h);return o?e?Object(r["m"])(e[o]):void 0:e}),x=b(O,j,o,c,f,I,l,T,i),S=y(C,j,f,c,I,l,T),{$dirty:P,$errors:R,$invalid:N,$anyDirty:A,$error:L,$pending:M,$touch:D,$reset:F,$silentErrors:$,$commit:U}=w(x,S,a),q=o?Object(r["a"])({get:()=>Object(r["m"])(j),set:e=>{P.value=!0;const t=Object(r["m"])(i),n=Object(r["m"])(h);n&&(n[o]=E[o]),Object(r["f"])(t[o])?t[o].value=e:t[o]=e}}):null;function V(e){return(a.value||{})[e]}function z(){Object(r["f"])(h)?h.value=E:0===Object.keys(E).length?Object.keys(h).forEach(e=>{delete h[e]}):Object.assign(h,E)}return o&&I.$autoDirty&&Object(r["n"])(j,()=>{P.value||D();const e=Object(r["m"])(h);e&&(e[o]=E[o])},{flush:"sync"}),Object(r["k"])(Object.assign({},x,{$model:q,$dirty:P,$error:L,$errors:R,$invalid:N,$anyDirty:A,$pending:M,$touch:D,$reset:F,$path:f||p,$silentErrors:$,$validate:t,$commit:U},a&&{$getResultsForChild:V,$clearExternalResults:z},S))}class C{constructor(){this.storage=new Map}set(e,t,n){this.storage.set(e,{rules:t,result:n})}checkRulesValidity(e,t,n){const i=Object.keys(n),o=Object.keys(t);if(o.length!==i.length)return!1;const s=o.every(e=>i.includes(e));return!!s&&o.every(e=>!t[e].$params||Object.keys(t[e].$params).every(i=>Object(r["m"])(n[e].$params[i])===Object(r["m"])(t[e].$params[i])))}get(e,t){const n=this.storage.get(e);if(!n)return;const{rules:r,result:i}=n,o=this.checkRulesValidity(e,t,r),s=i.$unwatch?i.$unwatch:()=>({});return o?i:{$dirty:i.$dirty,$partial:!0,$unwatch:s}}}const k={COLLECT_ALL:!0,COLLECT_NONE:!1},I=Symbol("vuelidate#injectChildResults"),j=Symbol("vuelidate#removeChildResults");function E(e){let{$scope:t,instance:n}=e;const i={},o=Object(r["l"])([]),s=Object(r["a"])(()=>o.value.reduce((e,t)=>(e[t]=Object(r["m"])(i[t]),e),{}));function a(e,n){let{$registerAs:r,$scope:s,$stopPropagation:a}=n;a||t===k.COLLECT_NONE||s===k.COLLECT_NONE||t!==k.COLLECT_ALL&&t!==s||(i[r]=e,o.value.push(r))}function c(e){o.value=o.value.filter(t=>t!==e),delete i[e]}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],a),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],c);const u=Object(r["c"])(I,[]);Object(r["j"])(I,n.__vuelidateInjectInstances);const l=Object(r["c"])(j,[]);return Object(r["j"])(j,n.__vuelidateRemoveInstances),{childResults:s,sendValidationResultsToParent:u,removeValidationResultsFromParent:l}}function T(e){return new Proxy(e,{get(e,t){return"object"===typeof e[t]?T(e[t]):Object(r["a"])(()=>e[t])}})}function x(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(n=e,e=void 0,t=void 0);let{$registerAs:i,$scope:a=k.COLLECT_ALL,$stopPropagation:c,$externalResults:u,currentVueInstance:l}=n;const h=l||Object(r["b"])(),d=h?h.proxy.$options:{};if(!i&&h){const e=h.uid||h._uid;i="_vuelidate_"+e}const f=Object(r["l"])({}),p=new C,{childResults:g,sendValidationResultsToParent:v,removeValidationResultsFromParent:m}=h?E({$scope:a,instance:h}):{childResults:Object(r["l"])({})};if(!e&&d.validations){const e=d.validations;t=Object(r["l"])({}),Object(r["h"])(()=>{t.value=h.proxy,Object(r["n"])(()=>o(e)?e.call(t.value,new T(t.value)):e,e=>{f.value=O({validations:e,state:t,childResults:g,resultsCache:p,globalConfig:n,instance:h.proxy,externalResults:u||h.proxy.vuelidateExternalResults})},{immediate:!0})}),n=d.validationsConfig||n}else{const i=Object(r["f"])(e)||s(e)?e:Object(r["k"])(e||{});Object(r["n"])(i,e=>{f.value=O({validations:e,state:t,childResults:g,resultsCache:p,globalConfig:n,instance:h?h.proxy:{},externalResults:u})},{immediate:!0})}return h&&(v.forEach(e=>e(f,{$registerAs:i,$scope:a,$stopPropagation:c})),Object(r["i"])(()=>m.forEach(e=>e(i)))),Object(r["a"])(()=>Object.assign({},Object(r["m"])(f.value),g.value))}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var i="firebase",o="9.6.11";
/**
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
 */
Object(r["f"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2ba4":function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.apply,s=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),g=n("cc12"),v=n("d6d6"),m=n("1cdc"),_=n("605d"),b=a.setImmediate,y=a.clearImmediate,w=a.process,O=a.Dispatch,C=a.Function,k=a.MessageChannel,I=a.String,j=0,E={},T="onreadystatechange";try{r=a.location}catch(N){}var x=function(e){if(h(E,e)){var t=E[e];delete E[e],t()}},S=function(e){return function(){x(e)}},P=function(e){x(e.data)},R=function(e){a.postMessage(I(e),r.protocol+"//"+r.host)};b&&y||(b=function(e){v(arguments.length,1);var t=l(e)?e:C(e),n=p(arguments,1);return E[++j]=function(){c(t,void 0,n)},i(j),j},y=function(e){delete E[e]},_?i=function(e){w.nextTick(S(e))}:O&&O.now?i=function(e){O.now(S(e))}:k&&!m?(o=new k,s=o.port2,o.port1.onmessage=P,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!d(R)?(i=R,a.addEventListener("message",P,!1)):i=T in g("script")?function(e){f.appendChild(g("script"))[T]=function(){f.removeChild(this),x(e)}}:function(e){setTimeout(S(e),0)}),e.exports={set:b,clear:y}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"2ef0":function(e,t,n){(function(e,r){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o,s="4.17.21",a=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",l="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,f="__lodash_placeholder__",p=1,g=2,v=4,m=1,_=2,b=1,y=2,w=4,O=8,C=16,k=32,I=64,j=128,E=256,T=512,x=30,S="...",P=800,R=16,N=1,A=2,L=3,M=1/0,D=9007199254740991,F=17976931348623157e292,$=NaN,U=4294967295,q=U-1,V=U>>>1,z=[["ary",j],["bind",b],["bindKey",y],["curry",O],["curryRight",C],["flip",T],["partial",k],["partialRight",I],["rearg",E]],W="[object Arguments]",B="[object Array]",H="[object AsyncFunction]",G="[object Boolean]",K="[object Date]",Y="[object DOMException]",J="[object Error]",Q="[object Function]",X="[object GeneratorFunction]",Z="[object Map]",ee="[object Number]",te="[object Null]",ne="[object Object]",re="[object Promise]",ie="[object Proxy]",oe="[object RegExp]",se="[object Set]",ae="[object String]",ce="[object Symbol]",ue="[object Undefined]",le="[object WeakMap]",he="[object WeakSet]",de="[object ArrayBuffer]",fe="[object DataView]",pe="[object Float32Array]",ge="[object Float64Array]",ve="[object Int8Array]",me="[object Int16Array]",_e="[object Int32Array]",be="[object Uint8Array]",ye="[object Uint8ClampedArray]",we="[object Uint16Array]",Oe="[object Uint32Array]",Ce=/\b__p \+= '';/g,ke=/\b(__p \+=) '' \+/g,Ie=/(__e\(.*?\)|\b__t\)) \+\n'';/g,je=/&(?:amp|lt|gt|quot|#39);/g,Ee=/[&<>"']/g,Te=RegExp(je.source),xe=RegExp(Ee.source),Se=/<%-([\s\S]+?)%>/g,Pe=/<%([\s\S]+?)%>/g,Re=/<%=([\s\S]+?)%>/g,Ne=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ae=/^\w*$/,Le=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Me=/[\\^$.*+?()[\]{}|]/g,De=RegExp(Me.source),Fe=/^\s+/,$e=/\s/,Ue=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,qe=/\{\n\/\* \[wrapped with (.+)\] \*/,Ve=/,? & /,ze=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,We=/[()=,{}\[\]\/\s]/,Be=/\\(\\)?/g,He=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ge=/\w*$/,Ke=/^[-+]0x[0-9a-f]+$/i,Ye=/^0b[01]+$/i,Je=/^\[object .+?Constructor\]$/,Qe=/^0o[0-7]+$/i,Xe=/^(?:0|[1-9]\d*)$/,Ze=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,et=/($^)/,tt=/['\n\r\u2028\u2029\\]/g,nt="\\ud800-\\udfff",rt="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",st=rt+it+ot,at="\\u2700-\\u27bf",ct="a-z\\xdf-\\xf6\\xf8-\\xff",ut="\\xac\\xb1\\xd7\\xf7",lt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ht="\\u2000-\\u206f",dt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ft="A-Z\\xc0-\\xd6\\xd8-\\xde",pt="\\ufe0e\\ufe0f",gt=ut+lt+ht+dt,vt="['’]",mt="["+nt+"]",_t="["+gt+"]",bt="["+st+"]",yt="\\d+",wt="["+at+"]",Ot="["+ct+"]",Ct="[^"+nt+gt+yt+at+ct+ft+"]",kt="\\ud83c[\\udffb-\\udfff]",It="(?:"+bt+"|"+kt+")",jt="[^"+nt+"]",Et="(?:\\ud83c[\\udde6-\\uddff]){2}",Tt="[\\ud800-\\udbff][\\udc00-\\udfff]",xt="["+ft+"]",St="\\u200d",Pt="(?:"+Ot+"|"+Ct+")",Rt="(?:"+xt+"|"+Ct+")",Nt="(?:"+vt+"(?:d|ll|m|re|s|t|ve))?",At="(?:"+vt+"(?:D|LL|M|RE|S|T|VE))?",Lt=It+"?",Mt="["+pt+"]?",Dt="(?:"+St+"(?:"+[jt,Et,Tt].join("|")+")"+Mt+Lt+")*",Ft="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",$t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ut=Mt+Lt+Dt,qt="(?:"+[wt,Et,Tt].join("|")+")"+Ut,Vt="(?:"+[jt+bt+"?",bt,Et,Tt,mt].join("|")+")",zt=RegExp(vt,"g"),Wt=RegExp(bt,"g"),Bt=RegExp(kt+"(?="+kt+")|"+Vt+Ut,"g"),Ht=RegExp([xt+"?"+Ot+"+"+Nt+"(?="+[_t,xt,"$"].join("|")+")",Rt+"+"+At+"(?="+[_t,xt+Pt,"$"].join("|")+")",xt+"?"+Pt+"+"+Nt,xt+"+"+At,$t,Ft,yt,qt].join("|"),"g"),Gt=RegExp("["+St+nt+st+pt+"]"),Kt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Yt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Jt=-1,Qt={};Qt[pe]=Qt[ge]=Qt[ve]=Qt[me]=Qt[_e]=Qt[be]=Qt[ye]=Qt[we]=Qt[Oe]=!0,Qt[W]=Qt[B]=Qt[de]=Qt[G]=Qt[fe]=Qt[K]=Qt[J]=Qt[Q]=Qt[Z]=Qt[ee]=Qt[ne]=Qt[oe]=Qt[se]=Qt[ae]=Qt[le]=!1;var Xt={};Xt[W]=Xt[B]=Xt[de]=Xt[fe]=Xt[G]=Xt[K]=Xt[pe]=Xt[ge]=Xt[ve]=Xt[me]=Xt[_e]=Xt[Z]=Xt[ee]=Xt[ne]=Xt[oe]=Xt[se]=Xt[ae]=Xt[ce]=Xt[be]=Xt[ye]=Xt[we]=Xt[Oe]=!0,Xt[J]=Xt[Q]=Xt[le]=!1;var Zt={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},en={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rn=parseFloat,on=parseInt,sn="object"==typeof e&&e&&e.Object===Object&&e,an="object"==typeof self&&self&&self.Object===Object&&self,cn=sn||an||Function("return this")(),un=t&&!t.nodeType&&t,ln=un&&"object"==typeof r&&r&&!r.nodeType&&r,hn=ln&&ln.exports===un,dn=hn&&sn.process,fn=function(){try{var e=ln&&ln.require&&ln.require("util").types;return e||dn&&dn.binding&&dn.binding("util")}catch(t){}}(),pn=fn&&fn.isArrayBuffer,gn=fn&&fn.isDate,vn=fn&&fn.isMap,mn=fn&&fn.isRegExp,_n=fn&&fn.isSet,bn=fn&&fn.isTypedArray;function yn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function wn(e,t,n,r){var i=-1,o=null==e?0:e.length;while(++i<o){var s=e[i];t(r,s,n(s),e)}return r}function On(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(!1===t(e[n],n,e))break;return e}function Cn(e,t){var n=null==e?0:e.length;while(n--)if(!1===t(e[n],n,e))break;return e}function kn(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(!t(e[n],n,e))return!1;return!0}function In(e,t){var n=-1,r=null==e?0:e.length,i=0,o=[];while(++n<r){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function jn(e,t){var n=null==e?0:e.length;return!!n&&Fn(e,t,0)>-1}function En(e,t,n){var r=-1,i=null==e?0:e.length;while(++r<i)if(n(t,e[r]))return!0;return!1}function Tn(e,t){var n=-1,r=null==e?0:e.length,i=Array(r);while(++n<r)i[n]=t(e[n],n,e);return i}function xn(e,t){var n=-1,r=t.length,i=e.length;while(++n<r)e[i+n]=t[n];return e}function Sn(e,t,n,r){var i=-1,o=null==e?0:e.length;r&&o&&(n=e[++i]);while(++i<o)n=t(n,e[i],i,e);return n}function Pn(e,t,n,r){var i=null==e?0:e.length;r&&i&&(n=e[--i]);while(i--)n=t(n,e[i],i,e);return n}function Rn(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(t(e[n],n,e))return!0;return!1}var Nn=Vn("length");function An(e){return e.split("")}function Ln(e){return e.match(ze)||[]}function Mn(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Dn(e,t,n,r){var i=e.length,o=n+(r?1:-1);while(r?o--:++o<i)if(t(e[o],o,e))return o;return-1}function Fn(e,t,n){return t===t?pr(e,t,n):Dn(e,Un,n)}function $n(e,t,n,r){var i=n-1,o=e.length;while(++i<o)if(r(e[i],t))return i;return-1}function Un(e){return e!==e}function qn(e,t){var n=null==e?0:e.length;return n?Hn(e,t)/n:$}function Vn(e){return function(t){return null==t?o:t[e]}}function zn(e){return function(t){return null==e?o:e[t]}}function Wn(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Bn(e,t){var n=e.length;e.sort(t);while(n--)e[n]=e[n].value;return e}function Hn(e,t){var n,r=-1,i=e.length;while(++r<i){var s=t(e[r]);s!==o&&(n=n===o?s:n+s)}return n}function Gn(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}function Kn(e,t){return Tn(t,(function(t){return[t,e[t]]}))}function Yn(e){return e?e.slice(0,_r(e)+1).replace(Fe,""):e}function Jn(e){return function(t){return e(t)}}function Qn(e,t){return Tn(t,(function(t){return e[t]}))}function Xn(e,t){return e.has(t)}function Zn(e,t){var n=-1,r=e.length;while(++n<r&&Fn(t,e[n],0)>-1);return n}function er(e,t){var n=e.length;while(n--&&Fn(t,e[n],0)>-1);return n}function tr(e,t){var n=e.length,r=0;while(n--)e[n]===t&&++r;return r}var nr=zn(Zt),rr=zn(en);function ir(e){return"\\"+nn[e]}function or(e,t){return null==e?o:e[t]}function sr(e){return Gt.test(e)}function ar(e){return Kt.test(e)}function cr(e){var t,n=[];while(!(t=e.next()).done)n.push(t.value);return n}function ur(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function lr(e,t){return function(n){return e(t(n))}}function hr(e,t){var n=-1,r=e.length,i=0,o=[];while(++n<r){var s=e[n];s!==t&&s!==f||(e[n]=f,o[i++]=n)}return o}function dr(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function fr(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function pr(e,t,n){var r=n-1,i=e.length;while(++r<i)if(e[r]===t)return r;return-1}function gr(e,t,n){var r=n+1;while(r--)if(e[r]===t)return r;return r}function vr(e){return sr(e)?yr(e):Nn(e)}function mr(e){return sr(e)?wr(e):An(e)}function _r(e){var t=e.length;while(t--&&$e.test(e.charAt(t)));return t}var br=zn(tn);function yr(e){var t=Bt.lastIndex=0;while(Bt.test(e))++t;return t}function wr(e){return e.match(Bt)||[]}function Or(e){return e.match(Ht)||[]}var Cr=function e(t){t=null==t?cn:kr.defaults(cn.Object(),t,kr.pick(cn,Yt));var n=t.Array,r=t.Date,i=t.Error,$e=t.Function,ze=t.Math,nt=t.Object,rt=t.RegExp,it=t.String,ot=t.TypeError,st=n.prototype,at=$e.prototype,ct=nt.prototype,ut=t["__core-js_shared__"],lt=at.toString,ht=ct.hasOwnProperty,dt=0,ft=function(){var e=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),pt=ct.toString,gt=lt.call(nt),vt=cn._,mt=rt("^"+lt.call(ht).replace(Me,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_t=hn?t.Buffer:o,bt=t.Symbol,yt=t.Uint8Array,wt=_t?_t.allocUnsafe:o,Ot=lr(nt.getPrototypeOf,nt),Ct=nt.create,kt=ct.propertyIsEnumerable,It=st.splice,jt=bt?bt.isConcatSpreadable:o,Et=bt?bt.iterator:o,Tt=bt?bt.toStringTag:o,xt=function(){try{var e=Gs(nt,"defineProperty");return e({},"",{}),e}catch(t){}}(),St=t.clearTimeout!==cn.clearTimeout&&t.clearTimeout,Pt=r&&r.now!==cn.Date.now&&r.now,Rt=t.setTimeout!==cn.setTimeout&&t.setTimeout,Nt=ze.ceil,At=ze.floor,Lt=nt.getOwnPropertySymbols,Mt=_t?_t.isBuffer:o,Dt=t.isFinite,Ft=st.join,$t=lr(nt.keys,nt),Ut=ze.max,qt=ze.min,Vt=r.now,Bt=t.parseInt,Ht=ze.random,Gt=st.reverse,Kt=Gs(t,"DataView"),Zt=Gs(t,"Map"),en=Gs(t,"Promise"),tn=Gs(t,"Set"),nn=Gs(t,"WeakMap"),sn=Gs(nt,"create"),an=nn&&new nn,un={},ln=Ra(Kt),dn=Ra(Zt),fn=Ra(en),Nn=Ra(tn),An=Ra(nn),zn=bt?bt.prototype:o,pr=zn?zn.valueOf:o,yr=zn?zn.toString:o;function wr(e){if(Il(e)&&!cl(e)&&!(e instanceof Er)){if(e instanceof jr)return e;if(ht.call(e,"__wrapped__"))return Aa(e)}return new jr(e)}var Cr=function(){function e(){}return function(t){if(!kl(t))return{};if(Ct)return Ct(t);e.prototype=t;var n=new e;return e.prototype=o,n}}();function Ir(){}function jr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=o}function Er(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=U,this.__views__=[]}function Tr(){var e=new Er(this.__wrapped__);return e.__actions__=is(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=is(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=is(this.__views__),e}function xr(){if(this.__filtered__){var e=new Er(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Sr(){var e=this.__wrapped__.value(),t=this.__dir__,n=cl(e),r=t<0,i=n?e.length:0,o=Xs(0,i,this.__views__),s=o.start,a=o.end,c=a-s,u=r?a:s-1,l=this.__iteratees__,h=l.length,d=0,f=qt(c,this.__takeCount__);if(!n||!r&&i==c&&f==c)return $o(e,this.__actions__);var p=[];e:while(c--&&d<f){u+=t;var g=-1,v=e[u];while(++g<h){var m=l[g],_=m.iteratee,b=m.type,y=_(v);if(b==A)v=y;else if(!y){if(b==N)continue e;break e}}p[d++]=v}return p}function Pr(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Rr(){this.__data__=sn?sn(null):{},this.size=0}function Nr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function Ar(e){var t=this.__data__;if(sn){var n=t[e];return n===h?o:n}return ht.call(t,e)?t[e]:o}function Lr(e){var t=this.__data__;return sn?t[e]!==o:ht.call(t,e)}function Mr(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=sn&&t===o?h:t,this}function Dr(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Fr(){this.__data__=[],this.size=0}function $r(e){var t=this.__data__,n=li(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():It.call(t,n,1),--this.size,!0}function Ur(e){var t=this.__data__,n=li(t,e);return n<0?o:t[n][1]}function qr(e){return li(this.__data__,e)>-1}function Vr(e,t){var n=this.__data__,r=li(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function zr(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Wr(){this.size=0,this.__data__={hash:new Pr,map:new(Zt||Dr),string:new Pr}}function Br(e){var t=Bs(this,e)["delete"](e);return this.size-=t?1:0,t}function Hr(e){return Bs(this,e).get(e)}function Gr(e){return Bs(this,e).has(e)}function Kr(e,t){var n=Bs(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Yr(e){var t=-1,n=null==e?0:e.length;this.__data__=new zr;while(++t<n)this.add(e[t])}function Jr(e){return this.__data__.set(e,h),this}function Qr(e){return this.__data__.has(e)}function Xr(e){var t=this.__data__=new Dr(e);this.size=t.size}function Zr(){this.__data__=new Dr,this.size=0}function ei(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n}function ti(e){return this.__data__.get(e)}function ni(e){return this.__data__.has(e)}function ri(e,t){var n=this.__data__;if(n instanceof Dr){var r=n.__data__;if(!Zt||r.length<a-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new zr(r)}return n.set(e,t),this.size=n.size,this}function ii(e,t){var n=cl(e),r=!n&&al(e),i=!n&&!r&&fl(e),o=!n&&!r&&!i&&Ul(e),s=n||r||i||o,a=s?Gn(e.length,it):[],c=a.length;for(var u in e)!t&&!ht.call(e,u)||s&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||sa(u,c))||a.push(u);return a}function oi(e){var t=e.length;return t?e[_o(0,t-1)]:o}function si(e,t){return xa(is(e),vi(t,0,e.length))}function ai(e){return xa(is(e))}function ci(e,t,n){(n!==o&&!il(e[t],n)||n===o&&!(t in e))&&pi(e,t,n)}function ui(e,t,n){var r=e[t];ht.call(e,t)&&il(r,n)&&(n!==o||t in e)||pi(e,t,n)}function li(e,t){var n=e.length;while(n--)if(il(e[n][0],t))return n;return-1}function hi(e,t,n,r){return Oi(e,(function(e,i,o){t(r,e,n(e),o)})),r}function di(e,t){return e&&os(t,Oh(t),e)}function fi(e,t){return e&&os(t,Ch(t),e)}function pi(e,t,n){"__proto__"==t&&xt?xt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function gi(e,t){var r=-1,i=t.length,s=n(i),a=null==e;while(++r<i)s[r]=a?o:vh(e,t[r]);return s}function vi(e,t,n){return e===e&&(n!==o&&(e=e<=n?e:n),t!==o&&(e=e>=t?e:t)),e}function mi(e,t,n,r,i,s){var a,c=t&p,u=t&g,l=t&v;if(n&&(a=i?n(e,r,i,s):n(e)),a!==o)return a;if(!kl(e))return e;var h=cl(e);if(h){if(a=ta(e),!c)return is(e,a)}else{var d=Qs(e),f=d==Q||d==X;if(fl(e))return Ko(e,c);if(d==ne||d==W||f&&!i){if(a=u||f?{}:na(e),!c)return u?as(e,fi(a,e)):ss(e,di(a,e))}else{if(!Xt[d])return i?e:{};a=ra(e,d,c)}}s||(s=new Xr);var m=s.get(e);if(m)return m;s.set(e,a),Dl(e)?e.forEach((function(r){a.add(mi(r,t,n,r,e,s))})):jl(e)&&e.forEach((function(r,i){a.set(i,mi(r,t,n,i,e,s))}));var _=l?u?Us:$s:u?Ch:Oh,b=h?o:_(e);return On(b||e,(function(r,i){b&&(i=r,r=e[i]),ui(a,i,mi(r,t,n,i,e,s))})),a}function _i(e){var t=Oh(e);return function(n){return bi(n,e,t)}}function bi(e,t,n){var r=n.length;if(null==e)return!r;e=nt(e);while(r--){var i=n[r],s=t[i],a=e[i];if(a===o&&!(i in e)||!s(a))return!1}return!0}function yi(e,t,n){if("function"!=typeof e)throw new ot(u);return Ia((function(){e.apply(o,n)}),t)}function wi(e,t,n,r){var i=-1,o=jn,s=!0,c=e.length,u=[],l=t.length;if(!c)return u;n&&(t=Tn(t,Jn(n))),r?(o=En,s=!1):t.length>=a&&(o=Xn,s=!1,t=new Yr(t));e:while(++i<c){var h=e[i],d=null==n?h:n(h);if(h=r||0!==h?h:0,s&&d===d){var f=l;while(f--)if(t[f]===d)continue e;u.push(h)}else o(t,d,r)||u.push(h)}return u}wr.templateSettings={escape:Se,evaluate:Pe,interpolate:Re,variable:"",imports:{_:wr}},wr.prototype=Ir.prototype,wr.prototype.constructor=wr,jr.prototype=Cr(Ir.prototype),jr.prototype.constructor=jr,Er.prototype=Cr(Ir.prototype),Er.prototype.constructor=Er,Pr.prototype.clear=Rr,Pr.prototype["delete"]=Nr,Pr.prototype.get=Ar,Pr.prototype.has=Lr,Pr.prototype.set=Mr,Dr.prototype.clear=Fr,Dr.prototype["delete"]=$r,Dr.prototype.get=Ur,Dr.prototype.has=qr,Dr.prototype.set=Vr,zr.prototype.clear=Wr,zr.prototype["delete"]=Br,zr.prototype.get=Hr,zr.prototype.has=Gr,zr.prototype.set=Kr,Yr.prototype.add=Yr.prototype.push=Jr,Yr.prototype.has=Qr,Xr.prototype.clear=Zr,Xr.prototype["delete"]=ei,Xr.prototype.get=ti,Xr.prototype.has=ni,Xr.prototype.set=ri;var Oi=ls(Pi),Ci=ls(Ri,!0);function ki(e,t){var n=!0;return Oi(e,(function(e,r,i){return n=!!t(e,r,i),n})),n}function Ii(e,t,n){var r=-1,i=e.length;while(++r<i){var s=e[r],a=t(s);if(null!=a&&(c===o?a===a&&!$l(a):n(a,c)))var c=a,u=s}return u}function ji(e,t,n,r){var i=e.length;n=Kl(n),n<0&&(n=-n>i?0:i+n),r=r===o||r>i?i:Kl(r),r<0&&(r+=i),r=n>r?0:Yl(r);while(n<r)e[n++]=t;return e}function Ei(e,t){var n=[];return Oi(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function Ti(e,t,n,r,i){var o=-1,s=e.length;n||(n=oa),i||(i=[]);while(++o<s){var a=e[o];t>0&&n(a)?t>1?Ti(a,t-1,n,r,i):xn(i,a):r||(i[i.length]=a)}return i}var xi=hs(),Si=hs(!0);function Pi(e,t){return e&&xi(e,t,Oh)}function Ri(e,t){return e&&Si(e,t,Oh)}function Ni(e,t){return In(t,(function(t){return wl(e[t])}))}function Ai(e,t){t=Wo(t,e);var n=0,r=t.length;while(null!=e&&n<r)e=e[Pa(t[n++])];return n&&n==r?e:o}function Li(e,t,n){var r=t(e);return cl(e)?r:xn(r,n(e))}function Mi(e){return null==e?e===o?ue:te:Tt&&Tt in nt(e)?Ks(e):ba(e)}function Di(e,t){return e>t}function Fi(e,t){return null!=e&&ht.call(e,t)}function $i(e,t){return null!=e&&t in nt(e)}function Ui(e,t,n){return e>=qt(t,n)&&e<Ut(t,n)}function qi(e,t,r){var i=r?En:jn,s=e[0].length,a=e.length,c=a,u=n(a),l=1/0,h=[];while(c--){var d=e[c];c&&t&&(d=Tn(d,Jn(t))),l=qt(d.length,l),u[c]=!r&&(t||s>=120&&d.length>=120)?new Yr(c&&d):o}d=e[0];var f=-1,p=u[0];e:while(++f<s&&h.length<l){var g=d[f],v=t?t(g):g;if(g=r||0!==g?g:0,!(p?Xn(p,v):i(h,v,r))){c=a;while(--c){var m=u[c];if(!(m?Xn(m,v):i(e[c],v,r)))continue e}p&&p.push(v),h.push(g)}}return h}function Vi(e,t,n,r){return Pi(e,(function(e,i,o){t(r,n(e),i,o)})),r}function zi(e,t,n){t=Wo(t,e),e=wa(e,t);var r=null==e?e:e[Pa(oc(t))];return null==r?o:yn(r,e,n)}function Wi(e){return Il(e)&&Mi(e)==W}function Bi(e){return Il(e)&&Mi(e)==de}function Hi(e){return Il(e)&&Mi(e)==K}function Gi(e,t,n,r,i){return e===t||(null==e||null==t||!Il(e)&&!Il(t)?e!==e&&t!==t:Ki(e,t,n,r,Gi,i))}function Ki(e,t,n,r,i,o){var s=cl(e),a=cl(t),c=s?B:Qs(e),u=a?B:Qs(t);c=c==W?ne:c,u=u==W?ne:u;var l=c==ne,h=u==ne,d=c==u;if(d&&fl(e)){if(!fl(t))return!1;s=!0,l=!1}if(d&&!l)return o||(o=new Xr),s||Ul(e)?Ls(e,t,n,r,i,o):Ms(e,t,c,n,r,i,o);if(!(n&m)){var f=l&&ht.call(e,"__wrapped__"),p=h&&ht.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,v=p?t.value():t;return o||(o=new Xr),i(g,v,n,r,o)}}return!!d&&(o||(o=new Xr),Ds(e,t,n,r,i,o))}function Yi(e){return Il(e)&&Qs(e)==Z}function Ji(e,t,n,r){var i=n.length,s=i,a=!r;if(null==e)return!s;e=nt(e);while(i--){var c=n[i];if(a&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}while(++i<s){c=n[i];var u=c[0],l=e[u],h=c[1];if(a&&c[2]){if(l===o&&!(u in e))return!1}else{var d=new Xr;if(r)var f=r(l,h,u,e,t,d);if(!(f===o?Gi(h,l,m|_,r,d):f))return!1}}return!0}function Qi(e){if(!kl(e)||ha(e))return!1;var t=wl(e)?mt:Je;return t.test(Ra(e))}function Xi(e){return Il(e)&&Mi(e)==oe}function Zi(e){return Il(e)&&Qs(e)==se}function eo(e){return Il(e)&&Cl(e.length)&&!!Qt[Mi(e)]}function to(e){return"function"==typeof e?e:null==e?Sd:"object"==typeof e?cl(e)?ao(e[0],e[1]):so(e):zd(e)}function no(e){if(!fa(e))return $t(e);var t=[];for(var n in nt(e))ht.call(e,n)&&"constructor"!=n&&t.push(n);return t}function ro(e){if(!kl(e))return _a(e);var t=fa(e),n=[];for(var r in e)("constructor"!=r||!t&&ht.call(e,r))&&n.push(r);return n}function io(e,t){return e<t}function oo(e,t){var r=-1,i=ll(e)?n(e.length):[];return Oi(e,(function(e,n,o){i[++r]=t(e,n,o)})),i}function so(e){var t=Hs(e);return 1==t.length&&t[0][2]?ga(t[0][0],t[0][1]):function(n){return n===e||Ji(n,e,t)}}function ao(e,t){return ca(e)&&pa(t)?ga(Pa(e),t):function(n){var r=vh(n,e);return r===o&&r===t?_h(n,e):Gi(t,r,m|_)}}function co(e,t,n,r,i){e!==t&&xi(t,(function(s,a){if(i||(i=new Xr),kl(s))uo(e,t,a,n,co,r,i);else{var c=r?r(Ca(e,a),s,a+"",e,t,i):o;c===o&&(c=s),ci(e,a,c)}}),Ch)}function uo(e,t,n,r,i,s,a){var c=Ca(e,n),u=Ca(t,n),l=a.get(u);if(l)ci(e,n,l);else{var h=s?s(c,u,n+"",e,t,a):o,d=h===o;if(d){var f=cl(u),p=!f&&fl(u),g=!f&&!p&&Ul(u);h=u,f||p||g?cl(c)?h=c:hl(c)?h=is(c):p?(d=!1,h=Ko(u,!0)):g?(d=!1,h=Zo(u,!0)):h=[]:Al(u)||al(u)?(h=c,al(c)?h=Ql(c):kl(c)&&!wl(c)||(h=na(u))):d=!1}d&&(a.set(u,h),i(h,u,r,s,a),a["delete"](u)),ci(e,n,h)}}function lo(e,t){var n=e.length;if(n)return t+=t<0?n:0,sa(t,n)?e[t]:o}function ho(e,t,n){t=t.length?Tn(t,(function(e){return cl(e)?function(t){return Ai(t,1===e.length?e[0]:e)}:e})):[Sd];var r=-1;t=Tn(t,Jn(Ws()));var i=oo(e,(function(e,n,i){var o=Tn(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return Bn(i,(function(e,t){return ts(e,t,n)}))}function fo(e,t){return po(e,t,(function(t,n){return _h(e,n)}))}function po(e,t,n){var r=-1,i=t.length,o={};while(++r<i){var s=t[r],a=Ai(e,s);n(a,s)&&ko(o,Wo(s,e),a)}return o}function go(e){return function(t){return Ai(t,e)}}function vo(e,t,n,r){var i=r?$n:Fn,o=-1,s=t.length,a=e;e===t&&(t=is(t)),n&&(a=Tn(e,Jn(n)));while(++o<s){var c=0,u=t[o],l=n?n(u):u;while((c=i(a,l,c,r))>-1)a!==e&&It.call(a,c,1),It.call(e,c,1)}return e}function mo(e,t){var n=e?t.length:0,r=n-1;while(n--){var i=t[n];if(n==r||i!==o){var o=i;sa(i)?It.call(e,i,1):Mo(e,i)}}return e}function _o(e,t){return e+At(Ht()*(t-e+1))}function bo(e,t,r,i){var o=-1,s=Ut(Nt((t-e)/(r||1)),0),a=n(s);while(s--)a[i?s:++o]=e,e+=r;return a}function yo(e,t){var n="";if(!e||t<1||t>D)return n;do{t%2&&(n+=e),t=At(t/2),t&&(e+=e)}while(t);return n}function wo(e,t){return ja(ya(e,t,Sd),e+"")}function Oo(e){return oi(qh(e))}function Co(e,t){var n=qh(e);return xa(n,vi(t,0,n.length))}function ko(e,t,n,r){if(!kl(e))return e;t=Wo(t,e);var i=-1,s=t.length,a=s-1,c=e;while(null!=c&&++i<s){var u=Pa(t[i]),l=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(i!=a){var h=c[u];l=r?r(h,u,c):o,l===o&&(l=kl(h)?h:sa(t[i+1])?[]:{})}ui(c,u,l),c=c[u]}return e}var Io=an?function(e,t){return an.set(e,t),e}:Sd,jo=xt?function(e,t){return xt(e,"toString",{configurable:!0,enumerable:!1,value:jd(t),writable:!0})}:Sd;function Eo(e){return xa(qh(e))}function To(e,t,r){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;var s=n(o);while(++i<o)s[i]=e[i+t];return s}function xo(e,t){var n;return Oi(e,(function(e,r,i){return n=t(e,r,i),!n})),!!n}function So(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t===t&&i<=V){while(r<i){var o=r+i>>>1,s=e[o];null!==s&&!$l(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return Po(e,t,Sd,n)}function Po(e,t,n,r){var i=0,s=null==e?0:e.length;if(0===s)return 0;t=n(t);var a=t!==t,c=null===t,u=$l(t),l=t===o;while(i<s){var h=At((i+s)/2),d=n(e[h]),f=d!==o,p=null===d,g=d===d,v=$l(d);if(a)var m=r||g;else m=l?g&&(r||f):c?g&&f&&(r||!p):u?g&&f&&!p&&(r||!v):!p&&!v&&(r?d<=t:d<t);m?i=h+1:s=h}return qt(s,q)}function Ro(e,t){var n=-1,r=e.length,i=0,o=[];while(++n<r){var s=e[n],a=t?t(s):s;if(!n||!il(a,c)){var c=a;o[i++]=0===s?0:s}}return o}function No(e){return"number"==typeof e?e:$l(e)?$:+e}function Ao(e){if("string"==typeof e)return e;if(cl(e))return Tn(e,Ao)+"";if($l(e))return yr?yr.call(e):"";var t=e+"";return"0"==t&&1/e==-M?"-0":t}function Lo(e,t,n){var r=-1,i=jn,o=e.length,s=!0,c=[],u=c;if(n)s=!1,i=En;else if(o>=a){var l=t?null:xs(e);if(l)return dr(l);s=!1,i=Xn,u=new Yr}else u=t?[]:c;e:while(++r<o){var h=e[r],d=t?t(h):h;if(h=n||0!==h?h:0,s&&d===d){var f=u.length;while(f--)if(u[f]===d)continue e;t&&u.push(d),c.push(h)}else i(u,d,n)||(u!==c&&u.push(d),c.push(h))}return c}function Mo(e,t){return t=Wo(t,e),e=wa(e,t),null==e||delete e[Pa(oc(t))]}function Do(e,t,n,r){return ko(e,t,n(Ai(e,t)),r)}function Fo(e,t,n,r){var i=e.length,o=r?i:-1;while((r?o--:++o<i)&&t(e[o],o,e));return n?To(e,r?0:o,r?o+1:i):To(e,r?o+1:0,r?i:o)}function $o(e,t){var n=e;return n instanceof Er&&(n=n.value()),Sn(t,(function(e,t){return t.func.apply(t.thisArg,xn([e],t.args))}),n)}function Uo(e,t,r){var i=e.length;if(i<2)return i?Lo(e[0]):[];var o=-1,s=n(i);while(++o<i){var a=e[o],c=-1;while(++c<i)c!=o&&(s[o]=wi(s[o]||a,e[c],t,r))}return Lo(Ti(s,1),t,r)}function qo(e,t,n){var r=-1,i=e.length,s=t.length,a={};while(++r<i){var c=r<s?t[r]:o;n(a,e[r],c)}return a}function Vo(e){return hl(e)?e:[]}function zo(e){return"function"==typeof e?e:Sd}function Wo(e,t){return cl(e)?e:ca(e,t)?[e]:Sa(Zl(e))}var Bo=wo;function Ho(e,t,n){var r=e.length;return n=n===o?r:n,!t&&n>=r?e:To(e,t,n)}var Go=St||function(e){return cn.clearTimeout(e)};function Ko(e,t){if(t)return e.slice();var n=e.length,r=wt?wt(n):new e.constructor(n);return e.copy(r),r}function Yo(e){var t=new e.constructor(e.byteLength);return new yt(t).set(new yt(e)),t}function Jo(e,t){var n=t?Yo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function Qo(e){var t=new e.constructor(e.source,Ge.exec(e));return t.lastIndex=e.lastIndex,t}function Xo(e){return pr?nt(pr.call(e)):{}}function Zo(e,t){var n=t?Yo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function es(e,t){if(e!==t){var n=e!==o,r=null===e,i=e===e,s=$l(e),a=t!==o,c=null===t,u=t===t,l=$l(t);if(!c&&!l&&!s&&e>t||s&&a&&u&&!c&&!l||r&&a&&u||!n&&u||!i)return 1;if(!r&&!s&&!l&&e<t||l&&n&&i&&!r&&!s||c&&n&&i||!a&&i||!u)return-1}return 0}function ts(e,t,n){var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;while(++r<s){var c=es(i[r],o[r]);if(c){if(r>=a)return c;var u=n[r];return c*("desc"==u?-1:1)}}return e.index-t.index}function ns(e,t,r,i){var o=-1,s=e.length,a=r.length,c=-1,u=t.length,l=Ut(s-a,0),h=n(u+l),d=!i;while(++c<u)h[c]=t[c];while(++o<a)(d||o<s)&&(h[r[o]]=e[o]);while(l--)h[c++]=e[o++];return h}function rs(e,t,r,i){var o=-1,s=e.length,a=-1,c=r.length,u=-1,l=t.length,h=Ut(s-c,0),d=n(h+l),f=!i;while(++o<h)d[o]=e[o];var p=o;while(++u<l)d[p+u]=t[u];while(++a<c)(f||o<s)&&(d[p+r[a]]=e[o++]);return d}function is(e,t){var r=-1,i=e.length;t||(t=n(i));while(++r<i)t[r]=e[r];return t}function os(e,t,n,r){var i=!n;n||(n={});var s=-1,a=t.length;while(++s<a){var c=t[s],u=r?r(n[c],e[c],c,n,e):o;u===o&&(u=e[c]),i?pi(n,c,u):ui(n,c,u)}return n}function ss(e,t){return os(e,Ys(e),t)}function as(e,t){return os(e,Js(e),t)}function cs(e,t){return function(n,r){var i=cl(n)?wn:hi,o=t?t():{};return i(n,e,Ws(r,2),o)}}function us(e){return wo((function(t,n){var r=-1,i=n.length,s=i>1?n[i-1]:o,a=i>2?n[2]:o;s=e.length>3&&"function"==typeof s?(i--,s):o,a&&aa(n[0],n[1],a)&&(s=i<3?o:s,i=1),t=nt(t);while(++r<i){var c=n[r];c&&e(t,c,r,s)}return t}))}function ls(e,t){return function(n,r){if(null==n)return n;if(!ll(n))return e(n,r);var i=n.length,o=t?i:-1,s=nt(n);while(t?o--:++o<i)if(!1===r(s[o],o,s))break;return n}}function hs(e){return function(t,n,r){var i=-1,o=nt(t),s=r(t),a=s.length;while(a--){var c=s[e?a:++i];if(!1===n(o[c],c,o))break}return t}}function ds(e,t,n){var r=t&b,i=gs(e);function o(){var t=this&&this!==cn&&this instanceof o?i:e;return t.apply(r?n:this,arguments)}return o}function fs(e){return function(t){t=Zl(t);var n=sr(t)?mr(t):o,r=n?n[0]:t.charAt(0),i=n?Ho(n,1).join(""):t.slice(1);return r[e]()+i}}function ps(e){return function(t){return Sn(wd(Kh(t).replace(zt,"")),e,"")}}function gs(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=Cr(e.prototype),r=e.apply(n,t);return kl(r)?r:n}}function vs(e,t,r){var i=gs(e);function s(){var a=arguments.length,c=n(a),u=a,l=zs(s);while(u--)c[u]=arguments[u];var h=a<3&&c[0]!==l&&c[a-1]!==l?[]:hr(c,l);if(a-=h.length,a<r)return Es(e,t,bs,s.placeholder,o,c,h,o,o,r-a);var d=this&&this!==cn&&this instanceof s?i:e;return yn(d,this,c)}return s}function ms(e){return function(t,n,r){var i=nt(t);if(!ll(t)){var s=Ws(n,3);t=Oh(t),n=function(e){return s(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[s?t[a]:a]:o}}function _s(e){return Fs((function(t){var n=t.length,r=n,i=jr.prototype.thru;e&&t.reverse();while(r--){var s=t[r];if("function"!=typeof s)throw new ot(u);if(i&&!a&&"wrapper"==Vs(s))var a=new jr([],!0)}r=a?r:n;while(++r<n){s=t[r];var c=Vs(s),l="wrapper"==c?qs(s):o;a=l&&la(l[0])&&l[1]==(j|O|k|E)&&!l[4].length&&1==l[9]?a[Vs(l[0])].apply(a,l[3]):1==s.length&&la(s)?a[c]():a.thru(s)}return function(){var e=arguments,r=e[0];if(a&&1==e.length&&cl(r))return a.plant(r).value();var i=0,o=n?t[i].apply(this,e):r;while(++i<n)o=t[i].call(this,o);return o}}))}function bs(e,t,r,i,s,a,c,u,l,h){var d=t&j,f=t&b,p=t&y,g=t&(O|C),v=t&T,m=p?o:gs(e);function _(){var o=arguments.length,b=n(o),y=o;while(y--)b[y]=arguments[y];if(g)var w=zs(_),O=tr(b,w);if(i&&(b=ns(b,i,s,g)),a&&(b=rs(b,a,c,g)),o-=O,g&&o<h){var C=hr(b,w);return Es(e,t,bs,_.placeholder,r,b,C,u,l,h-o)}var k=f?r:this,I=p?k[e]:e;return o=b.length,u?b=Oa(b,u):v&&o>1&&b.reverse(),d&&l<o&&(b.length=l),this&&this!==cn&&this instanceof _&&(I=m||gs(I)),I.apply(k,b)}return _}function ys(e,t){return function(n,r){return Vi(n,e,t(r),{})}}function ws(e,t){return function(n,r){var i;if(n===o&&r===o)return t;if(n!==o&&(i=n),r!==o){if(i===o)return r;"string"==typeof n||"string"==typeof r?(n=Ao(n),r=Ao(r)):(n=No(n),r=No(r)),i=e(n,r)}return i}}function Os(e){return Fs((function(t){return t=Tn(t,Jn(Ws())),wo((function(n){var r=this;return e(t,(function(e){return yn(e,r,n)}))}))}))}function Cs(e,t){t=t===o?" ":Ao(t);var n=t.length;if(n<2)return n?yo(t,e):t;var r=yo(t,Nt(e/vr(t)));return sr(t)?Ho(mr(r),0,e).join(""):r.slice(0,e)}function ks(e,t,r,i){var o=t&b,s=gs(e);function a(){var t=-1,c=arguments.length,u=-1,l=i.length,h=n(l+c),d=this&&this!==cn&&this instanceof a?s:e;while(++u<l)h[u]=i[u];while(c--)h[u++]=arguments[++t];return yn(d,o?r:this,h)}return a}function Is(e){return function(t,n,r){return r&&"number"!=typeof r&&aa(t,n,r)&&(n=r=o),t=Gl(t),n===o?(n=t,t=0):n=Gl(n),r=r===o?t<n?1:-1:Gl(r),bo(t,n,r,e)}}function js(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Jl(t),n=Jl(n)),e(t,n)}}function Es(e,t,n,r,i,s,a,c,u,l){var h=t&O,d=h?a:o,f=h?o:a,p=h?s:o,g=h?o:s;t|=h?k:I,t&=~(h?I:k),t&w||(t&=~(b|y));var v=[e,t,i,p,d,g,f,c,u,l],m=n.apply(o,v);return la(e)&&ka(m,v),m.placeholder=r,Ea(m,e,t)}function Ts(e){var t=ze[e];return function(e,n){if(e=Jl(e),n=null==n?0:qt(Kl(n),292),n&&Dt(e)){var r=(Zl(e)+"e").split("e"),i=t(r[0]+"e"+(+r[1]+n));return r=(Zl(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}var xs=tn&&1/dr(new tn([,-0]))[1]==M?function(e){return new tn(e)}:Fd;function Ss(e){return function(t){var n=Qs(t);return n==Z?ur(t):n==se?fr(t):Kn(t,e(t))}}function Ps(e,t,n,r,i,s,a,c){var l=t&y;if(!l&&"function"!=typeof e)throw new ot(u);var h=r?r.length:0;if(h||(t&=~(k|I),r=i=o),a=a===o?a:Ut(Kl(a),0),c=c===o?c:Kl(c),h-=i?i.length:0,t&I){var d=r,f=i;r=i=o}var p=l?o:qs(e),g=[e,t,n,r,i,d,f,s,a,c];if(p&&ma(g,p),e=g[0],t=g[1],n=g[2],r=g[3],i=g[4],c=g[9]=g[9]===o?l?0:e.length:Ut(g[9]-h,0),!c&&t&(O|C)&&(t&=~(O|C)),t&&t!=b)v=t==O||t==C?vs(e,t,c):t!=k&&t!=(b|k)||i.length?bs.apply(o,g):ks(e,t,n,r);else var v=ds(e,t,n);var m=p?Io:ka;return Ea(m(v,g),e,t)}function Rs(e,t,n,r){return e===o||il(e,ct[n])&&!ht.call(r,n)?t:e}function Ns(e,t,n,r,i,s){return kl(e)&&kl(t)&&(s.set(t,e),co(e,t,o,Ns,s),s["delete"](t)),e}function As(e){return Al(e)?o:e}function Ls(e,t,n,r,i,s){var a=n&m,c=e.length,u=t.length;if(c!=u&&!(a&&u>c))return!1;var l=s.get(e),h=s.get(t);if(l&&h)return l==t&&h==e;var d=-1,f=!0,p=n&_?new Yr:o;s.set(e,t),s.set(t,e);while(++d<c){var g=e[d],v=t[d];if(r)var b=a?r(v,g,d,t,e,s):r(g,v,d,e,t,s);if(b!==o){if(b)continue;f=!1;break}if(p){if(!Rn(t,(function(e,t){if(!Xn(p,t)&&(g===e||i(g,e,n,r,s)))return p.push(t)}))){f=!1;break}}else if(g!==v&&!i(g,v,n,r,s)){f=!1;break}}return s["delete"](e),s["delete"](t),f}function Ms(e,t,n,r,i,o,s){switch(n){case fe:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case de:return!(e.byteLength!=t.byteLength||!o(new yt(e),new yt(t)));case G:case K:case ee:return il(+e,+t);case J:return e.name==t.name&&e.message==t.message;case oe:case ae:return e==t+"";case Z:var a=ur;case se:var c=r&m;if(a||(a=dr),e.size!=t.size&&!c)return!1;var u=s.get(e);if(u)return u==t;r|=_,s.set(e,t);var l=Ls(a(e),a(t),r,i,o,s);return s["delete"](e),l;case ce:if(pr)return pr.call(e)==pr.call(t)}return!1}function Ds(e,t,n,r,i,s){var a=n&m,c=$s(e),u=c.length,l=$s(t),h=l.length;if(u!=h&&!a)return!1;var d=u;while(d--){var f=c[d];if(!(a?f in t:ht.call(t,f)))return!1}var p=s.get(e),g=s.get(t);if(p&&g)return p==t&&g==e;var v=!0;s.set(e,t),s.set(t,e);var _=a;while(++d<u){f=c[d];var b=e[f],y=t[f];if(r)var w=a?r(y,b,f,t,e,s):r(b,y,f,e,t,s);if(!(w===o?b===y||i(b,y,n,r,s):w)){v=!1;break}_||(_="constructor"==f)}if(v&&!_){var O=e.constructor,C=t.constructor;O==C||!("constructor"in e)||!("constructor"in t)||"function"==typeof O&&O instanceof O&&"function"==typeof C&&C instanceof C||(v=!1)}return s["delete"](e),s["delete"](t),v}function Fs(e){return ja(ya(e,o,Ka),e+"")}function $s(e){return Li(e,Oh,Ys)}function Us(e){return Li(e,Ch,Js)}var qs=an?function(e){return an.get(e)}:Fd;function Vs(e){var t=e.name+"",n=un[t],r=ht.call(un,t)?n.length:0;while(r--){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function zs(e){var t=ht.call(wr,"placeholder")?wr:e;return t.placeholder}function Ws(){var e=wr.iteratee||Pd;return e=e===Pd?to:e,arguments.length?e(arguments[0],arguments[1]):e}function Bs(e,t){var n=e.__data__;return ua(t)?n["string"==typeof t?"string":"hash"]:n.map}function Hs(e){var t=Oh(e),n=t.length;while(n--){var r=t[n],i=e[r];t[n]=[r,i,pa(i)]}return t}function Gs(e,t){var n=or(e,t);return Qi(n)?n:o}function Ks(e){var t=ht.call(e,Tt),n=e[Tt];try{e[Tt]=o;var r=!0}catch(s){}var i=pt.call(e);return r&&(t?e[Tt]=n:delete e[Tt]),i}var Ys=Lt?function(e){return null==e?[]:(e=nt(e),In(Lt(e),(function(t){return kt.call(e,t)})))}:Gd,Js=Lt?function(e){var t=[];while(e)xn(t,Ys(e)),e=Ot(e);return t}:Gd,Qs=Mi;function Xs(e,t,n){var r=-1,i=n.length;while(++r<i){var o=n[r],s=o.size;switch(o.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=qt(t,e+s);break;case"takeRight":e=Ut(e,t-s);break}}return{start:e,end:t}}function Zs(e){var t=e.match(qe);return t?t[1].split(Ve):[]}function ea(e,t,n){t=Wo(t,e);var r=-1,i=t.length,o=!1;while(++r<i){var s=Pa(t[r]);if(!(o=null!=e&&n(e,s)))break;e=e[s]}return o||++r!=i?o:(i=null==e?0:e.length,!!i&&Cl(i)&&sa(s,i)&&(cl(e)||al(e)))}function ta(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&ht.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function na(e){return"function"!=typeof e.constructor||fa(e)?{}:Cr(Ot(e))}function ra(e,t,n){var r=e.constructor;switch(t){case de:return Yo(e);case G:case K:return new r(+e);case fe:return Jo(e,n);case pe:case ge:case ve:case me:case _e:case be:case ye:case we:case Oe:return Zo(e,n);case Z:return new r;case ee:case ae:return new r(e);case oe:return Qo(e);case se:return new r;case ce:return Xo(e)}}function ia(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(Ue,"{\n/* [wrapped with "+t+"] */\n")}function oa(e){return cl(e)||al(e)||!!(jt&&e&&e[jt])}function sa(e,t){var n=typeof e;return t=null==t?D:t,!!t&&("number"==n||"symbol"!=n&&Xe.test(e))&&e>-1&&e%1==0&&e<t}function aa(e,t,n){if(!kl(n))return!1;var r=typeof t;return!!("number"==r?ll(n)&&sa(t,n.length):"string"==r&&t in n)&&il(n[t],e)}function ca(e,t){if(cl(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!$l(e))||(Ae.test(e)||!Ne.test(e)||null!=t&&e in nt(t))}function ua(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function la(e){var t=Vs(e),n=wr[t];if("function"!=typeof n||!(t in Er.prototype))return!1;if(e===n)return!0;var r=qs(n);return!!r&&e===r[0]}function ha(e){return!!ft&&ft in e}(Kt&&Qs(new Kt(new ArrayBuffer(1)))!=fe||Zt&&Qs(new Zt)!=Z||en&&Qs(en.resolve())!=re||tn&&Qs(new tn)!=se||nn&&Qs(new nn)!=le)&&(Qs=function(e){var t=Mi(e),n=t==ne?e.constructor:o,r=n?Ra(n):"";if(r)switch(r){case ln:return fe;case dn:return Z;case fn:return re;case Nn:return se;case An:return le}return t});var da=ut?wl:Kd;function fa(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||ct;return e===n}function pa(e){return e===e&&!kl(e)}function ga(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==o||e in nt(n)))}}function va(e){var t=Uu(e,(function(e){return n.size===d&&n.clear(),e})),n=t.cache;return t}function ma(e,t){var n=e[1],r=t[1],i=n|r,o=i<(b|y|j),s=r==j&&n==O||r==j&&n==E&&e[7].length<=t[8]||r==(j|E)&&t[7].length<=t[8]&&n==O;if(!o&&!s)return e;r&b&&(e[2]=t[2],i|=n&b?0:w);var a=t[3];if(a){var c=e[3];e[3]=c?ns(c,a,t[4]):a,e[4]=c?hr(e[3],f):t[4]}return a=t[5],a&&(c=e[5],e[5]=c?rs(c,a,t[6]):a,e[6]=c?hr(e[5],f):t[6]),a=t[7],a&&(e[7]=a),r&j&&(e[8]=null==e[8]?t[8]:qt(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i,e}function _a(e){var t=[];if(null!=e)for(var n in nt(e))t.push(n);return t}function ba(e){return pt.call(e)}function ya(e,t,r){return t=Ut(t===o?e.length-1:t,0),function(){var i=arguments,o=-1,s=Ut(i.length-t,0),a=n(s);while(++o<s)a[o]=i[t+o];o=-1;var c=n(t+1);while(++o<t)c[o]=i[o];return c[t]=r(a),yn(e,this,c)}}function wa(e,t){return t.length<2?e:Ai(e,To(t,0,-1))}function Oa(e,t){var n=e.length,r=qt(t.length,n),i=is(e);while(r--){var s=t[r];e[r]=sa(s,n)?i[s]:o}return e}function Ca(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}var ka=Ta(Io),Ia=Rt||function(e,t){return cn.setTimeout(e,t)},ja=Ta(jo);function Ea(e,t,n){var r=t+"";return ja(e,ia(r,Na(Zs(r),n)))}function Ta(e){var t=0,n=0;return function(){var r=Vt(),i=R-(r-n);if(n=r,i>0){if(++t>=P)return arguments[0]}else t=0;return e.apply(o,arguments)}}function xa(e,t){var n=-1,r=e.length,i=r-1;t=t===o?r:t;while(++n<t){var s=_o(n,i),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}var Sa=va((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Le,(function(e,n,r,i){t.push(r?i.replace(Be,"$1"):n||e)})),t}));function Pa(e){if("string"==typeof e||$l(e))return e;var t=e+"";return"0"==t&&1/e==-M?"-0":t}function Ra(e){if(null!=e){try{return lt.call(e)}catch(t){}try{return e+""}catch(t){}}return""}function Na(e,t){return On(z,(function(n){var r="_."+n[0];t&n[1]&&!jn(e,r)&&e.push(r)})),e.sort()}function Aa(e){if(e instanceof Er)return e.clone();var t=new jr(e.__wrapped__,e.__chain__);return t.__actions__=is(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function La(e,t,r){t=(r?aa(e,t,r):t===o)?1:Ut(Kl(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];var s=0,a=0,c=n(Nt(i/t));while(s<i)c[a++]=To(e,s,s+=t);return c}function Ma(e){var t=-1,n=null==e?0:e.length,r=0,i=[];while(++t<n){var o=e[t];o&&(i[r++]=o)}return i}function Da(){var e=arguments.length;if(!e)return[];var t=n(e-1),r=arguments[0],i=e;while(i--)t[i-1]=arguments[i];return xn(cl(r)?is(r):[r],Ti(t,1))}var Fa=wo((function(e,t){return hl(e)?wi(e,Ti(t,1,hl,!0)):[]})),$a=wo((function(e,t){var n=oc(t);return hl(n)&&(n=o),hl(e)?wi(e,Ti(t,1,hl,!0),Ws(n,2)):[]})),Ua=wo((function(e,t){var n=oc(t);return hl(n)&&(n=o),hl(e)?wi(e,Ti(t,1,hl,!0),o,n):[]}));function qa(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===o?1:Kl(t),To(e,t<0?0:t,r)):[]}function Va(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===o?1:Kl(t),t=r-t,To(e,0,t<0?0:t)):[]}function za(e,t){return e&&e.length?Fo(e,Ws(t,3),!0,!0):[]}function Wa(e,t){return e&&e.length?Fo(e,Ws(t,3),!0):[]}function Ba(e,t,n,r){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&aa(e,t,n)&&(n=0,r=i),ji(e,t,n,r)):[]}function Ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Kl(n);return i<0&&(i=Ut(r+i,0)),Dn(e,Ws(t,3),i)}function Ga(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r-1;return n!==o&&(i=Kl(n),i=n<0?Ut(r+i,0):qt(i,r-1)),Dn(e,Ws(t,3),i,!0)}function Ka(e){var t=null==e?0:e.length;return t?Ti(e,1):[]}function Ya(e){var t=null==e?0:e.length;return t?Ti(e,M):[]}function Ja(e,t){var n=null==e?0:e.length;return n?(t=t===o?1:Kl(t),Ti(e,t)):[]}function Qa(e){var t=-1,n=null==e?0:e.length,r={};while(++t<n){var i=e[t];r[i[0]]=i[1]}return r}function Xa(e){return e&&e.length?e[0]:o}function Za(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Kl(n);return i<0&&(i=Ut(r+i,0)),Fn(e,t,i)}function ec(e){var t=null==e?0:e.length;return t?To(e,0,-1):[]}var tc=wo((function(e){var t=Tn(e,Vo);return t.length&&t[0]===e[0]?qi(t):[]})),nc=wo((function(e){var t=oc(e),n=Tn(e,Vo);return t===oc(n)?t=o:n.pop(),n.length&&n[0]===e[0]?qi(n,Ws(t,2)):[]})),rc=wo((function(e){var t=oc(e),n=Tn(e,Vo);return t="function"==typeof t?t:o,t&&n.pop(),n.length&&n[0]===e[0]?qi(n,o,t):[]}));function ic(e,t){return null==e?"":Ft.call(e,t)}function oc(e){var t=null==e?0:e.length;return t?e[t-1]:o}function sc(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r;return n!==o&&(i=Kl(n),i=i<0?Ut(r+i,0):qt(i,r-1)),t===t?gr(e,t,i):Dn(e,Un,i,!0)}function ac(e,t){return e&&e.length?lo(e,Kl(t)):o}var cc=wo(uc);function uc(e,t){return e&&e.length&&t&&t.length?vo(e,t):e}function lc(e,t,n){return e&&e.length&&t&&t.length?vo(e,t,Ws(n,2)):e}function hc(e,t,n){return e&&e.length&&t&&t.length?vo(e,t,o,n):e}var dc=Fs((function(e,t){var n=null==e?0:e.length,r=gi(e,t);return mo(e,Tn(t,(function(e){return sa(e,n)?+e:e})).sort(es)),r}));function fc(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;t=Ws(t,3);while(++r<o){var s=e[r];t(s,r,e)&&(n.push(s),i.push(r))}return mo(e,i),n}function pc(e){return null==e?e:Gt.call(e)}function gc(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&aa(e,t,n)?(t=0,n=r):(t=null==t?0:Kl(t),n=n===o?r:Kl(n)),To(e,t,n)):[]}function vc(e,t){return So(e,t)}function mc(e,t,n){return Po(e,t,Ws(n,2))}function _c(e,t){var n=null==e?0:e.length;if(n){var r=So(e,t);if(r<n&&il(e[r],t))return r}return-1}function bc(e,t){return So(e,t,!0)}function yc(e,t,n){return Po(e,t,Ws(n,2),!0)}function wc(e,t){var n=null==e?0:e.length;if(n){var r=So(e,t,!0)-1;if(il(e[r],t))return r}return-1}function Oc(e){return e&&e.length?Ro(e):[]}function Cc(e,t){return e&&e.length?Ro(e,Ws(t,2)):[]}function kc(e){var t=null==e?0:e.length;return t?To(e,1,t):[]}function Ic(e,t,n){return e&&e.length?(t=n||t===o?1:Kl(t),To(e,0,t<0?0:t)):[]}function jc(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===o?1:Kl(t),t=r-t,To(e,t<0?0:t,r)):[]}function Ec(e,t){return e&&e.length?Fo(e,Ws(t,3),!1,!0):[]}function Tc(e,t){return e&&e.length?Fo(e,Ws(t,3)):[]}var xc=wo((function(e){return Lo(Ti(e,1,hl,!0))})),Sc=wo((function(e){var t=oc(e);return hl(t)&&(t=o),Lo(Ti(e,1,hl,!0),Ws(t,2))})),Pc=wo((function(e){var t=oc(e);return t="function"==typeof t?t:o,Lo(Ti(e,1,hl,!0),o,t)}));function Rc(e){return e&&e.length?Lo(e):[]}function Nc(e,t){return e&&e.length?Lo(e,Ws(t,2)):[]}function Ac(e,t){return t="function"==typeof t?t:o,e&&e.length?Lo(e,o,t):[]}function Lc(e){if(!e||!e.length)return[];var t=0;return e=In(e,(function(e){if(hl(e))return t=Ut(e.length,t),!0})),Gn(t,(function(t){return Tn(e,Vn(t))}))}function Mc(e,t){if(!e||!e.length)return[];var n=Lc(e);return null==t?n:Tn(n,(function(e){return yn(t,o,e)}))}var Dc=wo((function(e,t){return hl(e)?wi(e,t):[]})),Fc=wo((function(e){return Uo(In(e,hl))})),$c=wo((function(e){var t=oc(e);return hl(t)&&(t=o),Uo(In(e,hl),Ws(t,2))})),Uc=wo((function(e){var t=oc(e);return t="function"==typeof t?t:o,Uo(In(e,hl),o,t)})),qc=wo(Lc);function Vc(e,t){return qo(e||[],t||[],ui)}function zc(e,t){return qo(e||[],t||[],ko)}var Wc=wo((function(e){var t=e.length,n=t>1?e[t-1]:o;return n="function"==typeof n?(e.pop(),n):o,Mc(e,n)}));function Bc(e){var t=wr(e);return t.__chain__=!0,t}function Hc(e,t){return t(e),e}function Gc(e,t){return t(e)}var Kc=Fs((function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,i=function(t){return gi(t,e)};return!(t>1||this.__actions__.length)&&r instanceof Er&&sa(n)?(r=r.slice(n,+n+(t?1:0)),r.__actions__.push({func:Gc,args:[i],thisArg:o}),new jr(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(o),e}))):this.thru(i)}));function Yc(){return Bc(this)}function Jc(){return new jr(this.value(),this.__chain__)}function Qc(){this.__values__===o&&(this.__values__=Hl(this.value()));var e=this.__index__>=this.__values__.length,t=e?o:this.__values__[this.__index__++];return{done:e,value:t}}function Xc(){return this}function Zc(e){var t,n=this;while(n instanceof Ir){var r=Aa(n);r.__index__=0,r.__values__=o,t?i.__wrapped__=r:t=r;var i=r;n=n.__wrapped__}return i.__wrapped__=e,t}function eu(){var e=this.__wrapped__;if(e instanceof Er){var t=e;return this.__actions__.length&&(t=new Er(this)),t=t.reverse(),t.__actions__.push({func:Gc,args:[pc],thisArg:o}),new jr(t,this.__chain__)}return this.thru(pc)}function tu(){return $o(this.__wrapped__,this.__actions__)}var nu=cs((function(e,t,n){ht.call(e,n)?++e[n]:pi(e,n,1)}));function ru(e,t,n){var r=cl(e)?kn:ki;return n&&aa(e,t,n)&&(t=o),r(e,Ws(t,3))}function iu(e,t){var n=cl(e)?In:Ei;return n(e,Ws(t,3))}var ou=ms(Ha),su=ms(Ga);function au(e,t){return Ti(vu(e,t),1)}function cu(e,t){return Ti(vu(e,t),M)}function uu(e,t,n){return n=n===o?1:Kl(n),Ti(vu(e,t),n)}function lu(e,t){var n=cl(e)?On:Oi;return n(e,Ws(t,3))}function hu(e,t){var n=cl(e)?Cn:Ci;return n(e,Ws(t,3))}var du=cs((function(e,t,n){ht.call(e,n)?e[n].push(t):pi(e,n,[t])}));function fu(e,t,n,r){e=ll(e)?e:qh(e),n=n&&!r?Kl(n):0;var i=e.length;return n<0&&(n=Ut(i+n,0)),Fl(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Fn(e,t,n)>-1}var pu=wo((function(e,t,r){var i=-1,o="function"==typeof t,s=ll(e)?n(e.length):[];return Oi(e,(function(e){s[++i]=o?yn(t,e,r):zi(e,t,r)})),s})),gu=cs((function(e,t,n){pi(e,n,t)}));function vu(e,t){var n=cl(e)?Tn:oo;return n(e,Ws(t,3))}function mu(e,t,n,r){return null==e?[]:(cl(t)||(t=null==t?[]:[t]),n=r?o:n,cl(n)||(n=null==n?[]:[n]),ho(e,t,n))}var _u=cs((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));function bu(e,t,n){var r=cl(e)?Sn:Wn,i=arguments.length<3;return r(e,Ws(t,4),n,i,Oi)}function yu(e,t,n){var r=cl(e)?Pn:Wn,i=arguments.length<3;return r(e,Ws(t,4),n,i,Ci)}function wu(e,t){var n=cl(e)?In:Ei;return n(e,qu(Ws(t,3)))}function Ou(e){var t=cl(e)?oi:Oo;return t(e)}function Cu(e,t,n){t=(n?aa(e,t,n):t===o)?1:Kl(t);var r=cl(e)?si:Co;return r(e,t)}function ku(e){var t=cl(e)?ai:Eo;return t(e)}function Iu(e){if(null==e)return 0;if(ll(e))return Fl(e)?vr(e):e.length;var t=Qs(e);return t==Z||t==se?e.size:no(e).length}function ju(e,t,n){var r=cl(e)?Rn:xo;return n&&aa(e,t,n)&&(t=o),r(e,Ws(t,3))}var Eu=wo((function(e,t){if(null==e)return[];var n=t.length;return n>1&&aa(e,t[0],t[1])?t=[]:n>2&&aa(t[0],t[1],t[2])&&(t=[t[0]]),ho(e,Ti(t,1),[])})),Tu=Pt||function(){return cn.Date.now()};function xu(e,t){if("function"!=typeof t)throw new ot(u);return e=Kl(e),function(){if(--e<1)return t.apply(this,arguments)}}function Su(e,t,n){return t=n?o:t,t=e&&null==t?e.length:t,Ps(e,j,o,o,o,o,t)}function Pu(e,t){var n;if("function"!=typeof t)throw new ot(u);return e=Kl(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=o),n}}var Ru=wo((function(e,t,n){var r=b;if(n.length){var i=hr(n,zs(Ru));r|=k}return Ps(e,r,t,n,i)})),Nu=wo((function(e,t,n){var r=b|y;if(n.length){var i=hr(n,zs(Nu));r|=k}return Ps(t,r,e,n,i)}));function Au(e,t,n){t=n?o:t;var r=Ps(e,O,o,o,o,o,o,t);return r.placeholder=Au.placeholder,r}function Lu(e,t,n){t=n?o:t;var r=Ps(e,C,o,o,o,o,o,t);return r.placeholder=Lu.placeholder,r}function Mu(e,t,n){var r,i,s,a,c,l,h=0,d=!1,f=!1,p=!0;if("function"!=typeof e)throw new ot(u);function g(t){var n=r,s=i;return r=i=o,h=t,a=e.apply(s,n),a}function v(e){return h=e,c=Ia(b,t),d?g(e):a}function m(e){var n=e-l,r=e-h,i=t-n;return f?qt(i,s-r):i}function _(e){var n=e-l,r=e-h;return l===o||n>=t||n<0||f&&r>=s}function b(){var e=Tu();if(_(e))return y(e);c=Ia(b,m(e))}function y(e){return c=o,p&&r?g(e):(r=i=o,a)}function w(){c!==o&&Go(c),h=0,r=l=i=c=o}function O(){return c===o?a:y(Tu())}function C(){var e=Tu(),n=_(e);if(r=arguments,i=this,l=e,n){if(c===o)return v(l);if(f)return Go(c),c=Ia(b,t),g(l)}return c===o&&(c=Ia(b,t)),a}return t=Jl(t)||0,kl(n)&&(d=!!n.leading,f="maxWait"in n,s=f?Ut(Jl(n.maxWait)||0,t):s,p="trailing"in n?!!n.trailing:p),C.cancel=w,C.flush=O,C}var Du=wo((function(e,t){return yi(e,1,t)})),Fu=wo((function(e,t,n){return yi(e,Jl(t)||0,n)}));function $u(e){return Ps(e,T)}function Uu(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new ot(u);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Uu.Cache||zr),n}function qu(e){if("function"!=typeof e)throw new ot(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Vu(e){return Pu(2,e)}Uu.Cache=zr;var zu=Bo((function(e,t){t=1==t.length&&cl(t[0])?Tn(t[0],Jn(Ws())):Tn(Ti(t,1),Jn(Ws()));var n=t.length;return wo((function(r){var i=-1,o=qt(r.length,n);while(++i<o)r[i]=t[i].call(this,r[i]);return yn(e,this,r)}))})),Wu=wo((function(e,t){var n=hr(t,zs(Wu));return Ps(e,k,o,t,n)})),Bu=wo((function(e,t){var n=hr(t,zs(Bu));return Ps(e,I,o,t,n)})),Hu=Fs((function(e,t){return Ps(e,E,o,o,o,t)}));function Gu(e,t){if("function"!=typeof e)throw new ot(u);return t=t===o?t:Kl(t),wo(e,t)}function Ku(e,t){if("function"!=typeof e)throw new ot(u);return t=null==t?0:Ut(Kl(t),0),wo((function(n){var r=n[t],i=Ho(n,0,t);return r&&xn(i,r),yn(e,this,i)}))}function Yu(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new ot(u);return kl(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Mu(e,t,{leading:r,maxWait:t,trailing:i})}function Ju(e){return Su(e,1)}function Qu(e,t){return Wu(zo(t),e)}function Xu(){if(!arguments.length)return[];var e=arguments[0];return cl(e)?e:[e]}function Zu(e){return mi(e,v)}function el(e,t){return t="function"==typeof t?t:o,mi(e,v,t)}function tl(e){return mi(e,p|v)}function nl(e,t){return t="function"==typeof t?t:o,mi(e,p|v,t)}function rl(e,t){return null==t||bi(e,t,Oh(t))}function il(e,t){return e===t||e!==e&&t!==t}var ol=js(Di),sl=js((function(e,t){return e>=t})),al=Wi(function(){return arguments}())?Wi:function(e){return Il(e)&&ht.call(e,"callee")&&!kt.call(e,"callee")},cl=n.isArray,ul=pn?Jn(pn):Bi;function ll(e){return null!=e&&Cl(e.length)&&!wl(e)}function hl(e){return Il(e)&&ll(e)}function dl(e){return!0===e||!1===e||Il(e)&&Mi(e)==G}var fl=Mt||Kd,pl=gn?Jn(gn):Hi;function gl(e){return Il(e)&&1===e.nodeType&&!Al(e)}function vl(e){if(null==e)return!0;if(ll(e)&&(cl(e)||"string"==typeof e||"function"==typeof e.splice||fl(e)||Ul(e)||al(e)))return!e.length;var t=Qs(e);if(t==Z||t==se)return!e.size;if(fa(e))return!no(e).length;for(var n in e)if(ht.call(e,n))return!1;return!0}function ml(e,t){return Gi(e,t)}function _l(e,t,n){n="function"==typeof n?n:o;var r=n?n(e,t):o;return r===o?Gi(e,t,o,n):!!r}function bl(e){if(!Il(e))return!1;var t=Mi(e);return t==J||t==Y||"string"==typeof e.message&&"string"==typeof e.name&&!Al(e)}function yl(e){return"number"==typeof e&&Dt(e)}function wl(e){if(!kl(e))return!1;var t=Mi(e);return t==Q||t==X||t==H||t==ie}function Ol(e){return"number"==typeof e&&e==Kl(e)}function Cl(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=D}function kl(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function Il(e){return null!=e&&"object"==typeof e}var jl=vn?Jn(vn):Yi;function El(e,t){return e===t||Ji(e,t,Hs(t))}function Tl(e,t,n){return n="function"==typeof n?n:o,Ji(e,t,Hs(t),n)}function xl(e){return Nl(e)&&e!=+e}function Sl(e){if(da(e))throw new i(c);return Qi(e)}function Pl(e){return null===e}function Rl(e){return null==e}function Nl(e){return"number"==typeof e||Il(e)&&Mi(e)==ee}function Al(e){if(!Il(e)||Mi(e)!=ne)return!1;var t=Ot(e);if(null===t)return!0;var n=ht.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&lt.call(n)==gt}var Ll=mn?Jn(mn):Xi;function Ml(e){return Ol(e)&&e>=-D&&e<=D}var Dl=_n?Jn(_n):Zi;function Fl(e){return"string"==typeof e||!cl(e)&&Il(e)&&Mi(e)==ae}function $l(e){return"symbol"==typeof e||Il(e)&&Mi(e)==ce}var Ul=bn?Jn(bn):eo;function ql(e){return e===o}function Vl(e){return Il(e)&&Qs(e)==le}function zl(e){return Il(e)&&Mi(e)==he}var Wl=js(io),Bl=js((function(e,t){return e<=t}));function Hl(e){if(!e)return[];if(ll(e))return Fl(e)?mr(e):is(e);if(Et&&e[Et])return cr(e[Et]());var t=Qs(e),n=t==Z?ur:t==se?dr:qh;return n(e)}function Gl(e){if(!e)return 0===e?e:0;if(e=Jl(e),e===M||e===-M){var t=e<0?-1:1;return t*F}return e===e?e:0}function Kl(e){var t=Gl(e),n=t%1;return t===t?n?t-n:t:0}function Yl(e){return e?vi(Kl(e),0,U):0}function Jl(e){if("number"==typeof e)return e;if($l(e))return $;if(kl(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=kl(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Yn(e);var n=Ye.test(e);return n||Qe.test(e)?on(e.slice(2),n?2:8):Ke.test(e)?$:+e}function Ql(e){return os(e,Ch(e))}function Xl(e){return e?vi(Kl(e),-D,D):0===e?e:0}function Zl(e){return null==e?"":Ao(e)}var eh=us((function(e,t){if(fa(t)||ll(t))os(t,Oh(t),e);else for(var n in t)ht.call(t,n)&&ui(e,n,t[n])})),th=us((function(e,t){os(t,Ch(t),e)})),nh=us((function(e,t,n,r){os(t,Ch(t),e,r)})),rh=us((function(e,t,n,r){os(t,Oh(t),e,r)})),ih=Fs(gi);function oh(e,t){var n=Cr(e);return null==t?n:di(n,t)}var sh=wo((function(e,t){e=nt(e);var n=-1,r=t.length,i=r>2?t[2]:o;i&&aa(t[0],t[1],i)&&(r=1);while(++n<r){var s=t[n],a=Ch(s),c=-1,u=a.length;while(++c<u){var l=a[c],h=e[l];(h===o||il(h,ct[l])&&!ht.call(e,l))&&(e[l]=s[l])}}return e})),ah=wo((function(e){return e.push(o,Ns),yn(Eh,o,e)}));function ch(e,t){return Mn(e,Ws(t,3),Pi)}function uh(e,t){return Mn(e,Ws(t,3),Ri)}function lh(e,t){return null==e?e:xi(e,Ws(t,3),Ch)}function hh(e,t){return null==e?e:Si(e,Ws(t,3),Ch)}function dh(e,t){return e&&Pi(e,Ws(t,3))}function fh(e,t){return e&&Ri(e,Ws(t,3))}function ph(e){return null==e?[]:Ni(e,Oh(e))}function gh(e){return null==e?[]:Ni(e,Ch(e))}function vh(e,t,n){var r=null==e?o:Ai(e,t);return r===o?n:r}function mh(e,t){return null!=e&&ea(e,t,Fi)}function _h(e,t){return null!=e&&ea(e,t,$i)}var bh=ys((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=pt.call(t)),e[t]=n}),jd(Sd)),yh=ys((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=pt.call(t)),ht.call(e,t)?e[t].push(n):e[t]=[n]}),Ws),wh=wo(zi);function Oh(e){return ll(e)?ii(e):no(e)}function Ch(e){return ll(e)?ii(e,!0):ro(e)}function kh(e,t){var n={};return t=Ws(t,3),Pi(e,(function(e,r,i){pi(n,t(e,r,i),e)})),n}function Ih(e,t){var n={};return t=Ws(t,3),Pi(e,(function(e,r,i){pi(n,r,t(e,r,i))})),n}var jh=us((function(e,t,n){co(e,t,n)})),Eh=us((function(e,t,n,r){co(e,t,n,r)})),Th=Fs((function(e,t){var n={};if(null==e)return n;var r=!1;t=Tn(t,(function(t){return t=Wo(t,e),r||(r=t.length>1),t})),os(e,Us(e),n),r&&(n=mi(n,p|g|v,As));var i=t.length;while(i--)Mo(n,t[i]);return n}));function xh(e,t){return Ph(e,qu(Ws(t)))}var Sh=Fs((function(e,t){return null==e?{}:fo(e,t)}));function Ph(e,t){if(null==e)return{};var n=Tn(Us(e),(function(e){return[e]}));return t=Ws(t),po(e,n,(function(e,n){return t(e,n[0])}))}function Rh(e,t,n){t=Wo(t,e);var r=-1,i=t.length;i||(i=1,e=o);while(++r<i){var s=null==e?o:e[Pa(t[r])];s===o&&(r=i,s=n),e=wl(s)?s.call(e):s}return e}function Nh(e,t,n){return null==e?e:ko(e,t,n)}function Ah(e,t,n,r){return r="function"==typeof r?r:o,null==e?e:ko(e,t,n,r)}var Lh=Ss(Oh),Mh=Ss(Ch);function Dh(e,t,n){var r=cl(e),i=r||fl(e)||Ul(e);if(t=Ws(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:kl(e)&&wl(o)?Cr(Ot(e)):{}}return(i?On:Pi)(e,(function(e,r,i){return t(n,e,r,i)})),n}function Fh(e,t){return null==e||Mo(e,t)}function $h(e,t,n){return null==e?e:Do(e,t,zo(n))}function Uh(e,t,n,r){return r="function"==typeof r?r:o,null==e?e:Do(e,t,zo(n),r)}function qh(e){return null==e?[]:Qn(e,Oh(e))}function Vh(e){return null==e?[]:Qn(e,Ch(e))}function zh(e,t,n){return n===o&&(n=t,t=o),n!==o&&(n=Jl(n),n=n===n?n:0),t!==o&&(t=Jl(t),t=t===t?t:0),vi(Jl(e),t,n)}function Wh(e,t,n){return t=Gl(t),n===o?(n=t,t=0):n=Gl(n),e=Jl(e),Ui(e,t,n)}function Bh(e,t,n){if(n&&"boolean"!=typeof n&&aa(e,t,n)&&(t=n=o),n===o&&("boolean"==typeof t?(n=t,t=o):"boolean"==typeof e&&(n=e,e=o)),e===o&&t===o?(e=0,t=1):(e=Gl(e),t===o?(t=e,e=0):t=Gl(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var i=Ht();return qt(e+i*(t-e+rn("1e-"+((i+"").length-1))),t)}return _o(e,t)}var Hh=ps((function(e,t,n){return t=t.toLowerCase(),e+(n?Gh(t):t)}));function Gh(e){return yd(Zl(e).toLowerCase())}function Kh(e){return e=Zl(e),e&&e.replace(Ze,nr).replace(Wt,"")}function Yh(e,t,n){e=Zl(e),t=Ao(t);var r=e.length;n=n===o?r:vi(Kl(n),0,r);var i=n;return n-=t.length,n>=0&&e.slice(n,i)==t}function Jh(e){return e=Zl(e),e&&xe.test(e)?e.replace(Ee,rr):e}function Qh(e){return e=Zl(e),e&&De.test(e)?e.replace(Me,"\\$&"):e}var Xh=ps((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Zh=ps((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),ed=fs("toLowerCase");function td(e,t,n){e=Zl(e),t=Kl(t);var r=t?vr(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Cs(At(i),n)+e+Cs(Nt(i),n)}function nd(e,t,n){e=Zl(e),t=Kl(t);var r=t?vr(e):0;return t&&r<t?e+Cs(t-r,n):e}function rd(e,t,n){e=Zl(e),t=Kl(t);var r=t?vr(e):0;return t&&r<t?Cs(t-r,n)+e:e}function id(e,t,n){return n||null==t?t=0:t&&(t=+t),Bt(Zl(e).replace(Fe,""),t||0)}function od(e,t,n){return t=(n?aa(e,t,n):t===o)?1:Kl(t),yo(Zl(e),t)}function sd(){var e=arguments,t=Zl(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var ad=ps((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));function cd(e,t,n){return n&&"number"!=typeof n&&aa(e,t,n)&&(t=n=o),n=n===o?U:n>>>0,n?(e=Zl(e),e&&("string"==typeof t||null!=t&&!Ll(t))&&(t=Ao(t),!t&&sr(e))?Ho(mr(e),0,n):e.split(t,n)):[]}var ud=ps((function(e,t,n){return e+(n?" ":"")+yd(t)}));function ld(e,t,n){return e=Zl(e),n=null==n?0:vi(Kl(n),0,e.length),t=Ao(t),e.slice(n,n+t.length)==t}function hd(e,t,n){var r=wr.templateSettings;n&&aa(e,t,n)&&(t=o),e=Zl(e),t=nh({},t,r,Rs);var s,a,c=nh({},t.imports,r.imports,Rs),u=Oh(c),h=Qn(c,u),d=0,f=t.interpolate||et,p="__p += '",g=rt((t.escape||et).source+"|"+f.source+"|"+(f===Re?He:et).source+"|"+(t.evaluate||et).source+"|$","g"),v="//# sourceURL="+(ht.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Jt+"]")+"\n";e.replace(g,(function(t,n,r,i,o,c){return r||(r=i),p+=e.slice(d,c).replace(tt,ir),n&&(s=!0,p+="' +\n__e("+n+") +\n'"),o&&(a=!0,p+="';\n"+o+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=c+t.length,t})),p+="';\n";var m=ht.call(t,"variable")&&t.variable;if(m){if(We.test(m))throw new i(l)}else p="with (obj) {\n"+p+"\n}\n";p=(a?p.replace(Ce,""):p).replace(ke,"$1").replace(Ie,"$1;"),p="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(s?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var _=Od((function(){return $e(u,v+"return "+p).apply(o,h)}));if(_.source=p,bl(_))throw _;return _}function dd(e){return Zl(e).toLowerCase()}function fd(e){return Zl(e).toUpperCase()}function pd(e,t,n){if(e=Zl(e),e&&(n||t===o))return Yn(e);if(!e||!(t=Ao(t)))return e;var r=mr(e),i=mr(t),s=Zn(r,i),a=er(r,i)+1;return Ho(r,s,a).join("")}function gd(e,t,n){if(e=Zl(e),e&&(n||t===o))return e.slice(0,_r(e)+1);if(!e||!(t=Ao(t)))return e;var r=mr(e),i=er(r,mr(t))+1;return Ho(r,0,i).join("")}function vd(e,t,n){if(e=Zl(e),e&&(n||t===o))return e.replace(Fe,"");if(!e||!(t=Ao(t)))return e;var r=mr(e),i=Zn(r,mr(t));return Ho(r,i).join("")}function md(e,t){var n=x,r=S;if(kl(t)){var i="separator"in t?t.separator:i;n="length"in t?Kl(t.length):n,r="omission"in t?Ao(t.omission):r}e=Zl(e);var s=e.length;if(sr(e)){var a=mr(e);s=a.length}if(n>=s)return e;var c=n-vr(r);if(c<1)return r;var u=a?Ho(a,0,c).join(""):e.slice(0,c);if(i===o)return u+r;if(a&&(c+=u.length-c),Ll(i)){if(e.slice(c).search(i)){var l,h=u;i.global||(i=rt(i.source,Zl(Ge.exec(i))+"g")),i.lastIndex=0;while(l=i.exec(h))var d=l.index;u=u.slice(0,d===o?c:d)}}else if(e.indexOf(Ao(i),c)!=c){var f=u.lastIndexOf(i);f>-1&&(u=u.slice(0,f))}return u+r}function _d(e){return e=Zl(e),e&&Te.test(e)?e.replace(je,br):e}var bd=ps((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),yd=fs("toUpperCase");function wd(e,t,n){return e=Zl(e),t=n?o:t,t===o?ar(e)?Or(e):Ln(e):e.match(t)||[]}var Od=wo((function(e,t){try{return yn(e,o,t)}catch(n){return bl(n)?n:new i(n)}})),Cd=Fs((function(e,t){return On(t,(function(t){t=Pa(t),pi(e,t,Ru(e[t],e))})),e}));function kd(e){var t=null==e?0:e.length,n=Ws();return e=t?Tn(e,(function(e){if("function"!=typeof e[1])throw new ot(u);return[n(e[0]),e[1]]})):[],wo((function(n){var r=-1;while(++r<t){var i=e[r];if(yn(i[0],this,n))return yn(i[1],this,n)}}))}function Id(e){return _i(mi(e,p))}function jd(e){return function(){return e}}function Ed(e,t){return null==e||e!==e?t:e}var Td=_s(),xd=_s(!0);function Sd(e){return e}function Pd(e){return to("function"==typeof e?e:mi(e,p))}function Rd(e){return so(mi(e,p))}function Nd(e,t){return ao(e,mi(t,p))}var Ad=wo((function(e,t){return function(n){return zi(n,e,t)}})),Ld=wo((function(e,t){return function(n){return zi(e,n,t)}}));function Md(e,t,n){var r=Oh(t),i=Ni(t,r);null!=n||kl(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=Ni(t,Oh(t)));var o=!(kl(n)&&"chain"in n)||!!n.chain,s=wl(e);return On(i,(function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=is(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,xn([this.value()],arguments))})})),e}function Dd(){return cn._===this&&(cn._=vt),this}function Fd(){}function $d(e){return e=Kl(e),wo((function(t){return lo(t,e)}))}var Ud=Os(Tn),qd=Os(kn),Vd=Os(Rn);function zd(e){return ca(e)?Vn(Pa(e)):go(e)}function Wd(e){return function(t){return null==e?o:Ai(e,t)}}var Bd=Is(),Hd=Is(!0);function Gd(){return[]}function Kd(){return!1}function Yd(){return{}}function Jd(){return""}function Qd(){return!0}function Xd(e,t){if(e=Kl(e),e<1||e>D)return[];var n=U,r=qt(e,U);t=Ws(t),e-=U;var i=Gn(r,t);while(++n<e)t(n);return i}function Zd(e){return cl(e)?Tn(e,Pa):$l(e)?[e]:is(Sa(Zl(e)))}function ef(e){var t=++dt;return Zl(e)+t}var tf=ws((function(e,t){return e+t}),0),nf=Ts("ceil"),rf=ws((function(e,t){return e/t}),1),of=Ts("floor");function sf(e){return e&&e.length?Ii(e,Sd,Di):o}function af(e,t){return e&&e.length?Ii(e,Ws(t,2),Di):o}function cf(e){return qn(e,Sd)}function uf(e,t){return qn(e,Ws(t,2))}function lf(e){return e&&e.length?Ii(e,Sd,io):o}function hf(e,t){return e&&e.length?Ii(e,Ws(t,2),io):o}var df=ws((function(e,t){return e*t}),1),ff=Ts("round"),pf=ws((function(e,t){return e-t}),0);function gf(e){return e&&e.length?Hn(e,Sd):0}function vf(e,t){return e&&e.length?Hn(e,Ws(t,2)):0}return wr.after=xu,wr.ary=Su,wr.assign=eh,wr.assignIn=th,wr.assignInWith=nh,wr.assignWith=rh,wr.at=ih,wr.before=Pu,wr.bind=Ru,wr.bindAll=Cd,wr.bindKey=Nu,wr.castArray=Xu,wr.chain=Bc,wr.chunk=La,wr.compact=Ma,wr.concat=Da,wr.cond=kd,wr.conforms=Id,wr.constant=jd,wr.countBy=nu,wr.create=oh,wr.curry=Au,wr.curryRight=Lu,wr.debounce=Mu,wr.defaults=sh,wr.defaultsDeep=ah,wr.defer=Du,wr.delay=Fu,wr.difference=Fa,wr.differenceBy=$a,wr.differenceWith=Ua,wr.drop=qa,wr.dropRight=Va,wr.dropRightWhile=za,wr.dropWhile=Wa,wr.fill=Ba,wr.filter=iu,wr.flatMap=au,wr.flatMapDeep=cu,wr.flatMapDepth=uu,wr.flatten=Ka,wr.flattenDeep=Ya,wr.flattenDepth=Ja,wr.flip=$u,wr.flow=Td,wr.flowRight=xd,wr.fromPairs=Qa,wr.functions=ph,wr.functionsIn=gh,wr.groupBy=du,wr.initial=ec,wr.intersection=tc,wr.intersectionBy=nc,wr.intersectionWith=rc,wr.invert=bh,wr.invertBy=yh,wr.invokeMap=pu,wr.iteratee=Pd,wr.keyBy=gu,wr.keys=Oh,wr.keysIn=Ch,wr.map=vu,wr.mapKeys=kh,wr.mapValues=Ih,wr.matches=Rd,wr.matchesProperty=Nd,wr.memoize=Uu,wr.merge=jh,wr.mergeWith=Eh,wr.method=Ad,wr.methodOf=Ld,wr.mixin=Md,wr.negate=qu,wr.nthArg=$d,wr.omit=Th,wr.omitBy=xh,wr.once=Vu,wr.orderBy=mu,wr.over=Ud,wr.overArgs=zu,wr.overEvery=qd,wr.overSome=Vd,wr.partial=Wu,wr.partialRight=Bu,wr.partition=_u,wr.pick=Sh,wr.pickBy=Ph,wr.property=zd,wr.propertyOf=Wd,wr.pull=cc,wr.pullAll=uc,wr.pullAllBy=lc,wr.pullAllWith=hc,wr.pullAt=dc,wr.range=Bd,wr.rangeRight=Hd,wr.rearg=Hu,wr.reject=wu,wr.remove=fc,wr.rest=Gu,wr.reverse=pc,wr.sampleSize=Cu,wr.set=Nh,wr.setWith=Ah,wr.shuffle=ku,wr.slice=gc,wr.sortBy=Eu,wr.sortedUniq=Oc,wr.sortedUniqBy=Cc,wr.split=cd,wr.spread=Ku,wr.tail=kc,wr.take=Ic,wr.takeRight=jc,wr.takeRightWhile=Ec,wr.takeWhile=Tc,wr.tap=Hc,wr.throttle=Yu,wr.thru=Gc,wr.toArray=Hl,wr.toPairs=Lh,wr.toPairsIn=Mh,wr.toPath=Zd,wr.toPlainObject=Ql,wr.transform=Dh,wr.unary=Ju,wr.union=xc,wr.unionBy=Sc,wr.unionWith=Pc,wr.uniq=Rc,wr.uniqBy=Nc,wr.uniqWith=Ac,wr.unset=Fh,wr.unzip=Lc,wr.unzipWith=Mc,wr.update=$h,wr.updateWith=Uh,wr.values=qh,wr.valuesIn=Vh,wr.without=Dc,wr.words=wd,wr.wrap=Qu,wr.xor=Fc,wr.xorBy=$c,wr.xorWith=Uc,wr.zip=qc,wr.zipObject=Vc,wr.zipObjectDeep=zc,wr.zipWith=Wc,wr.entries=Lh,wr.entriesIn=Mh,wr.extend=th,wr.extendWith=nh,Md(wr,wr),wr.add=tf,wr.attempt=Od,wr.camelCase=Hh,wr.capitalize=Gh,wr.ceil=nf,wr.clamp=zh,wr.clone=Zu,wr.cloneDeep=tl,wr.cloneDeepWith=nl,wr.cloneWith=el,wr.conformsTo=rl,wr.deburr=Kh,wr.defaultTo=Ed,wr.divide=rf,wr.endsWith=Yh,wr.eq=il,wr.escape=Jh,wr.escapeRegExp=Qh,wr.every=ru,wr.find=ou,wr.findIndex=Ha,wr.findKey=ch,wr.findLast=su,wr.findLastIndex=Ga,wr.findLastKey=uh,wr.floor=of,wr.forEach=lu,wr.forEachRight=hu,wr.forIn=lh,wr.forInRight=hh,wr.forOwn=dh,wr.forOwnRight=fh,wr.get=vh,wr.gt=ol,wr.gte=sl,wr.has=mh,wr.hasIn=_h,wr.head=Xa,wr.identity=Sd,wr.includes=fu,wr.indexOf=Za,wr.inRange=Wh,wr.invoke=wh,wr.isArguments=al,wr.isArray=cl,wr.isArrayBuffer=ul,wr.isArrayLike=ll,wr.isArrayLikeObject=hl,wr.isBoolean=dl,wr.isBuffer=fl,wr.isDate=pl,wr.isElement=gl,wr.isEmpty=vl,wr.isEqual=ml,wr.isEqualWith=_l,wr.isError=bl,wr.isFinite=yl,wr.isFunction=wl,wr.isInteger=Ol,wr.isLength=Cl,wr.isMap=jl,wr.isMatch=El,wr.isMatchWith=Tl,wr.isNaN=xl,wr.isNative=Sl,wr.isNil=Rl,wr.isNull=Pl,wr.isNumber=Nl,wr.isObject=kl,wr.isObjectLike=Il,wr.isPlainObject=Al,wr.isRegExp=Ll,wr.isSafeInteger=Ml,wr.isSet=Dl,wr.isString=Fl,wr.isSymbol=$l,wr.isTypedArray=Ul,wr.isUndefined=ql,wr.isWeakMap=Vl,wr.isWeakSet=zl,wr.join=ic,wr.kebabCase=Xh,wr.last=oc,wr.lastIndexOf=sc,wr.lowerCase=Zh,wr.lowerFirst=ed,wr.lt=Wl,wr.lte=Bl,wr.max=sf,wr.maxBy=af,wr.mean=cf,wr.meanBy=uf,wr.min=lf,wr.minBy=hf,wr.stubArray=Gd,wr.stubFalse=Kd,wr.stubObject=Yd,wr.stubString=Jd,wr.stubTrue=Qd,wr.multiply=df,wr.nth=ac,wr.noConflict=Dd,wr.noop=Fd,wr.now=Tu,wr.pad=td,wr.padEnd=nd,wr.padStart=rd,wr.parseInt=id,wr.random=Bh,wr.reduce=bu,wr.reduceRight=yu,wr.repeat=od,wr.replace=sd,wr.result=Rh,wr.round=ff,wr.runInContext=e,wr.sample=Ou,wr.size=Iu,wr.snakeCase=ad,wr.some=ju,wr.sortedIndex=vc,wr.sortedIndexBy=mc,wr.sortedIndexOf=_c,wr.sortedLastIndex=bc,wr.sortedLastIndexBy=yc,wr.sortedLastIndexOf=wc,wr.startCase=ud,wr.startsWith=ld,wr.subtract=pf,wr.sum=gf,wr.sumBy=vf,wr.template=hd,wr.times=Xd,wr.toFinite=Gl,wr.toInteger=Kl,wr.toLength=Yl,wr.toLower=dd,wr.toNumber=Jl,wr.toSafeInteger=Xl,wr.toString=Zl,wr.toUpper=fd,wr.trim=pd,wr.trimEnd=gd,wr.trimStart=vd,wr.truncate=md,wr.unescape=_d,wr.uniqueId=ef,wr.upperCase=bd,wr.upperFirst=yd,wr.each=lu,wr.eachRight=hu,wr.first=Xa,Md(wr,function(){var e={};return Pi(wr,(function(t,n){ht.call(wr.prototype,n)||(e[n]=t)})),e}(),{chain:!1}),wr.VERSION=s,On(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){wr[e].placeholder=wr})),On(["drop","take"],(function(e,t){Er.prototype[e]=function(n){n=n===o?1:Ut(Kl(n),0);var r=this.__filtered__&&!t?new Er(this):this.clone();return r.__filtered__?r.__takeCount__=qt(n,r.__takeCount__):r.__views__.push({size:qt(n,U),type:e+(r.__dir__<0?"Right":"")}),r},Er.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),On(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=n==N||n==L;Er.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:Ws(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),On(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Er.prototype[e]=function(){return this[n](1).value()[0]}})),On(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Er.prototype[e]=function(){return this.__filtered__?new Er(this):this[n](1)}})),Er.prototype.compact=function(){return this.filter(Sd)},Er.prototype.find=function(e){return this.filter(e).head()},Er.prototype.findLast=function(e){return this.reverse().find(e)},Er.prototype.invokeMap=wo((function(e,t){return"function"==typeof e?new Er(this):this.map((function(n){return zi(n,e,t)}))})),Er.prototype.reject=function(e){return this.filter(qu(Ws(e)))},Er.prototype.slice=function(e,t){e=Kl(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Er(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==o&&(t=Kl(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},Er.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Er.prototype.toArray=function(){return this.take(U)},Pi(Er.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),i=wr[r?"take"+("last"==t?"Right":""):t],s=r||/^find/.test(t);i&&(wr.prototype[t]=function(){var t=this.__wrapped__,a=r?[1]:arguments,c=t instanceof Er,u=a[0],l=c||cl(t),h=function(e){var t=i.apply(wr,xn([e],a));return r&&d?t[0]:t};l&&n&&"function"==typeof u&&1!=u.length&&(c=l=!1);var d=this.__chain__,f=!!this.__actions__.length,p=s&&!d,g=c&&!f;if(!s&&l){t=g?t:new Er(this);var v=e.apply(t,a);return v.__actions__.push({func:Gc,args:[h],thisArg:o}),new jr(v,d)}return p&&g?e.apply(this,a):(v=this.thru(h),p?r?v.value()[0]:v.value():v)})})),On(["pop","push","shift","sort","splice","unshift"],(function(e){var t=st[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);wr.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(cl(i)?i:[],e)}return this[n]((function(n){return t.apply(cl(n)?n:[],e)}))}})),Pi(Er.prototype,(function(e,t){var n=wr[t];if(n){var r=n.name+"";ht.call(un,r)||(un[r]=[]),un[r].push({name:t,func:n})}})),un[bs(o,y).name]=[{name:"wrapper",func:o}],Er.prototype.clone=Tr,Er.prototype.reverse=xr,Er.prototype.value=Sr,wr.prototype.at=Kc,wr.prototype.chain=Yc,wr.prototype.commit=Jc,wr.prototype.next=Qc,wr.prototype.plant=Zc,wr.prototype.reverse=eu,wr.prototype.toJSON=wr.prototype.valueOf=wr.prototype.value=tu,wr.prototype.first=wr.prototype.head,Et&&(wr.prototype[Et]=Xc),wr},kr=Cr();cn._=kr,i=function(){return kr}.call(t,n,t,r),i===o||(r.exports=i)}).call(this)}).call(this,n("c8ba"),n("62e4")(e))},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},3529:function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("59ed"),s=n("f069"),a=n("e667"),c=n("2266"),u=n("5eed");r({target:"Promise",stat:!0,forced:u},{race:function(e){var t=this,n=s.f(t),r=n.reject,u=a((function(){var s=o(t.resolve);c(e,(function(e){i(s,t,e).then(n.resolve,r)}))}));return u.error&&r(u.value),n.promise}})},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3d87":function(e,t,n){var r=n("4930");e.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("abc5");const i="devtools-plugin:setup",o="plugin:settings:set";var s=n("5134");class a{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(a){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(a){}i=e},now(){return Object(s["a"])()}},t&&t.on(o,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function c(e,t){const n=e,o=Object(r["b"])(),s=Object(r["a"])(),c=r["c"]&&n.enableEarlyProxy;if(!s||!o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new a(n,s):null,r=o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(i,e,t)}},"3f8c":function(e,t){e.exports={}},4069:function(e,t,n){var r=n("44d2");r("flat")},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"40d5":function(e,t,n){var r=n("d039");e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},"428f":function(e,t,n){var r=n("da84");e.exports=r},4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,r="/";t.cwd=function(){return r},t.chdir=function(t){e||(e=n("df7c")),r=e.resolve(t,r)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),s=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==i(e))}},4738:function(e,t,n){var r=n("da84"),i=n("d256"),o=n("1626"),s=n("94ca"),a=n("8925"),c=n("b622"),u=n("6069"),l=n("c430"),h=n("2d00"),d=i&&i.prototype,f=c("species"),p=!1,g=o(r.PromiseRejectionEvent),v=s("Promise",(function(){var e=a(i),t=e!==String(i);if(!t&&66===h)return!0;if(l&&(!d["catch"]||!d["finally"]))return!0;if(h>=51&&/native code/.test(e))return!1;var n=new i((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},o=n.constructor={};return o[f]=r,p=n.then((function(){}))instanceof r,!p||!t&&u&&!g}));e.exports={CONSTRUCTOR:v,REJECTION_EVENT:g,SUBCLASSING:p}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4dae":function(e,t,n){var r=n("da84"),i=n("23cb"),o=n("07fa"),s=n("8418"),a=r.Array,c=Math.max;e.exports=function(e,t,n){for(var r=o(e),u=i(t,r),l=i(void 0===n?r:n,r),h=a(c(l-u,0)),d=0;u<l;u++,d++)s(h,d,e[u]);return h.length=d,h}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5134:function(e,t,n){"use strict";(function(e){let r,i;function o(){var t;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,i=window.performance):"undefined"!==typeof e&&(null===(t=e.perf_hooks)||void 0===t?void 0:t.performance)?(r=!0,i=e.perf_hooks.performance):r=!1),r}function s(){return o()?i.now():Date.now()}n.d(t,"a",(function(){return s}))}).call(this,n("c8ba"))},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Js})),n.d(t,"b",(function(){return ea})),n.d(t,"c",(function(){return da})),n.d(t,"d",(function(){return ia})),n.d(t,"e",(function(){return Qs})),n.d(t,"f",(function(){return Ys})),n.d(t,"g",(function(){return Xs})),n.d(t,"h",(function(){return Zs}));var r=n("589b"),i=n("22e5"),o=n("1fd5"),s=n("e691");const a="@firebase/database",c="0.12.8";
/**
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
 */
let u="";function l(e){u=e}
/**
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
 */class h{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(o["M"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(o["E"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(o["m"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const f=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new h(t)}}catch(t){}return new d},p=f("localStorage"),g=f("sessionStorage"),v=new s["b"]("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),_=function(e){const t=Object(o["L"])(e),n=new o["d"];n.update(t);const r=n.digest();return o["h"].encodeByteArray(r)},b=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=b.apply(null,r):t+="object"===typeof r?Object(o["M"])(r):r,t+=" "}return t};let y=null,w=!0;const O=function(e,t){Object(o["f"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(v.logLevel=s["a"].VERBOSE,y=v.log.bind(v),t&&g.set("logging_enabled",!0)):"function"===typeof e?y=e:(y=null,g.remove("logging_enabled"))},C=function(...e){if(!0===w&&(w=!1,null===y&&!0===g.get("logging_enabled")&&O(!0)),y){const t=b.apply(null,e);y(t)}},k=function(e){return function(...t){C(e,...t)}},I=function(...e){const t="FIREBASE INTERNAL ERROR: "+b(...e);v.error(t)},j=function(...e){const t="FIREBASE FATAL ERROR: "+b(...e);throw v.error(t),new Error(t)},E=function(...e){const t="FIREBASE WARNING: "+b(...e);v.warn(t)},T=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},x=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},S=function(e){if(Object(o["B"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},P="[MIN_NAME]",R="[MAX_NAME]",N=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=H(e),r=H(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},L=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(o["M"])(t))},M=function(e){if("object"!==typeof e||null===e)return Object(o["M"])(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Object(o["M"])(t[r]),n+=":",n+=M(e[t[r]]);return n+="}",n},D=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $=function(e){Object(o["f"])(!x(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,a,c,u;0===e?(s=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=c+r,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(s=0,a=Math.round(e/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(u=t;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let d="";for(u=0;u<64;u+=8){let e=parseInt(h.substr(u,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},U=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},q=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function V(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const z=new RegExp("^-?(0*)\\d{1,10}$"),W=-2147483648,B=2147483647,H=function(e){if(z.test(e)){const t=Number(e);if(t>=W&&t<=B)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw E("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Y=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
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
 */
class J{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){E(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(C("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
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
 */
const Z="5",ee="v",te="s",ne="r",re="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oe="ls",se="p",ae="ac",ce="websocket",ue="long_polling";
/**
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
 */
class le{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function he(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let r;if(Object(o["f"])("string"===typeof t,"typeof type must == string"),Object(o["f"])("object"===typeof n,"typeof params must == object"),t===ce)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ue)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}he(e)&&(n["ns"]=e.namespace);const i=[];return F(n,(e,t)=>{i.push(e+"="+t)}),r+i.join("&")}
/**
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
 */class fe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(o["m"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(o["p"])(this.counters_)}}
/**
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
 */const pe={},ge={};function ve(e){const t=e.toString();return pe[t]||(pe[t]=new fe),pe[t]}function me(e,t){const n=e.toString();return ge[n]||(ge[n]=t()),ge[n]}
/**
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
 */class _e{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */const be="start",ye="close",we="pLPCommand",Oe="pRTLPCB",Ce="id",ke="pw",Ie="ser",je="cb",Ee="seg",Te="ts",xe="d",Se="dframe",Pe=1870,Re=30,Ne=Pe-Re,Ae=25e3,Le=3e4;class Me{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=k(e),this.stats_=ve(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ue,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new _e(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Le)),S(()=>{if(this.isClosed_)return;this.scriptTagHolder=new De((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===be)this.id=n,this.password=r;else{if(t!==ye)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[be]="t",e[Ie]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[je]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[oe]=this.lastSessionId),this.applicationId&&(e[se]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[ne]=re);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return!Object(o["B"])()&&(!!Me.forceAllow_||!Me.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!U()&&!q())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(o["M"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(o["j"])(t),r=D(n,Ne);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(o["B"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Se]="t",n[Ce]=e,n[ke]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(o["M"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class De{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(o["B"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[Oe+this.uniqueCallbackIdentifier]=t,this.myIFrame=De.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){C("frame writing exception"),i.stack&&C(i.stack),C(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||C("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ce]=this.myID,e[ke]=this.myPW,e[Ie]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+Ee+r+"="+e.seg+"&"+Te+r+"="+e.ts+"&"+xe+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(Ae)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){Object(o["B"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{C("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
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
 */const Fe=16384,$e=45e3;let Ue=null;"undefined"!==typeof MozWebSocket?Ue=MozWebSocket:"undefined"!==typeof WebSocket&&(Ue=WebSocket);class qe{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=k(this.connId),this.stats_=ve(t),this.connURL=qe.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[ee]=Z,!Object(o["B"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(i[ne]=re),t&&(i[te]=t),n&&(i[oe]=n),r&&(i[ae]=r),de(e,ce,i)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(o["B"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${u}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const r=Object({NODE_ENV:"production",BASE_URL:"/pizzares/"}),i=0===this.connURL.indexOf("wss://")?r["HTTPS_PROXY"]||r["https_proxy"]:r["HTTP_PROXY"]||r["http_proxy"];i&&(n["proxy"]={origin:i}),this.mySock=new Ue(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ue(this.connURL,[],e)}}catch(r){this.log_("Error instantiating WebSocket.");const e=r.message||r.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){qe.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ue&&!qe.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(o["E"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(o["f"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(o["M"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=D(t,Fe);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($e))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qe.responsesRequiredToBeHealthy=2,qe.healthyTimeout=3e4;
/**
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
 */
class Ve{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Me,qe]}initTransports_(e){const t=qe&&qe["isAvailable"]();let n=t&&!qe.previouslyFailed();if(e.webSocketOnly&&(t||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[qe];else{const e=this.transports_=[];for(const t of Ve.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
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
 */const ze=6e4,We=5e3,Be=10240,He=102400,Ge="t",Ke="d",Ye="s",Je="r",Qe="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class rt{constructor(e,t,n,r,i,o,s,a,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=k("c:"+this.id+":"),this.transportManager_=new Ve(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Y(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Be?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Je?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=L("t",e),n=L("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=L("t",e),n=L("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=L(Ge,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ye?this.onConnectionShutdown_(n):t===Je?this.onReset_(n):t===Qe?I("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):I("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Y(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(We))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class it{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class ot{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(o["f"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Object(o["f"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
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
 */class st extends ot{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(o["A"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new st}getInitialEvent(e){return Object(o["f"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */const at=32,ct=768;class ut{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function lt(){return new ut("")}function ht(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function ft(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ut(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function vt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ut(t,0)}function _t(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ut)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ut(n,0)}function bt(e){return e.pieceNum_>=e.pieces_.length}function yt(e,t){const n=ht(e),r=ht(t);if(null===n)return t;if(n===r)return yt(ft(e),ft(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=vt(e,0),r=vt(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=N(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function Ot(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class kt{constructor(e,t){this.errorPrefix_=t,this.parts_=vt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(o["K"])(this.parts_[n]);Et(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(o["K"])(t),Et(e)}function jt(e){const t=e.parts_.pop();e.byteLength_-=Object(o["K"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>ct)throw new Error(e.errorPrefix_+"has a key path longer than "+ct+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Tt(e))}function Tt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class xt extends ot{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new xt}getInitialEvent(e){return Object(o["f"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */const St=1e3,Pt=3e5,Rt=3e3,Nt=3e4,At=1.3,Lt=3e4,Mt="server_kill",Dt=3;class Ft extends it{constructor(e,t,n,r,i,s,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ft.nextPersistentConnectionId_++,this.log_=k("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=St,this.maxReconnectDelay_=Pt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(o["B"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&st.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Object(o["M"])(i)),Object(o["f"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new o["a"],n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))},Rt),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Object(o["f"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(o["f"])(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(o,i,i=>{const o=i["d"],s=i["s"];Ft.warnOnListenWarnings_(o,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(o["m"])(e,"w")){const n=Object(o["J"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();E(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(o["v"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(o["D"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Object(o["f"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,e=>{r&&setTimeout(()=>{r(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o["h"]=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(o["M"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):I("Unrecognized action received from server: "+Object(o["M"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(o["f"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Lt&&(this.reconnectDelay_=St),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*At)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ft.nextConnectionId_++,i=this.lastSessionId;let s=!1,a=null;const c=function(){a?a.close():(s=!0,n())},u=function(e){Object(o["f"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:u};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?C("getToken() completed but was canceled"):(C("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=c&&c.token,a=new rt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{E(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)},i))}catch(I){this.log_("Failed to get token: "+I),s||(this.repoInfo_.nodeAdmin&&E(I),c())}}}interrupt(e){C("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){C("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(o["x"])(this.interruptReasons_)&&(this.reconnectDelay_=St,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>M(e)).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ut(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){C("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Dt&&(this.reconnectDelay_=Nt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){C("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Dt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(o["B"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,Object(o["A"])()?e["framework.cordova"]=1:Object(o["C"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=st.getInstance().currentlyOnline();return Object(o["x"])(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0,Ft.nextConnectionId_=0;
/**
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
 */
class $t{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $t(e,t)}}
/**
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
 */class Ut{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new $t(P,e),r=new $t(P,t);return 0!==this.compare(n,r)}minPost(){return $t.MIN}}
/**
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
 */let qt;class Vt extends Ut{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return N(e.name,t.name)}isDefinedOn(e){throw Object(o["g"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $t.MIN}maxPost(){return new $t(R,qt)}makePost(e,t){return Object(o["f"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new $t(e,qt)}toString(){return".key"}}const zt=new Vt;
/**
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
 */class Wt{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;while(!e.isEmpty())if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Bt.RED,this.left=null!=r?r:Gt.EMPTY_NODE,this.right=null!=i?i:Gt.EMPTY_NODE}copy(e,t,n,r,i){return new Bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gt.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0,Bt.BLACK=!1;class Ht{copy(e,t,n,r,i){return this}insert(e,t,n){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,t=Gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Wt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function Kt(e,t){return N(e.name,t.name)}function Yt(e,t){return N(e,t)}
/**
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
 */let Jt;function Qt(e){Jt=e}Gt.EMPTY_NODE=new Ht;const Xt=function(e){return"number"===typeof e?"number:"+$(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();Object(o["f"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(o["m"])(t,".sv"),"Priority must be a string or number.")}else Object(o["f"])(e===Jt||e.isEmpty(),"priority of unexpected type.");Object(o["f"])(e===Jt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(o["f"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return bt(e)?this:".priority"===ht(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ht(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(o["f"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$(this.value_):this.value_,this.lazyHash_=_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(Object(o["f"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=rn.VALUE_TYPE_ORDER.indexOf(t),i=rn.VALUE_TYPE_ORDER.indexOf(n);return Object(o["f"])(r>=0,"Unknown leaf type: "+t),Object(o["f"])(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function on(e){tn=e}function sn(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Ut{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $t.MIN}maxPost(){return new $t(R,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new $t(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const cn=new an,un=Math.log(2);
/**
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
 */class ln{constructor(e){const t=e=>parseInt(Math.log(e)/un,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,null,null);{const c=parseInt(o/2,10)+t,u=i(t,c),l=i(c+1,r);return s=e[c],a=n?n(s):s,new Bt(a,s.node,Bt.BLACK,u,l)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),l=e[o],h=n?n(l):l;c(new Bt(h,l.node,r,null,u))},c=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Bt.BLACK):(a(r,Bt.BLACK),a(r,Bt.RED))}return o},s=new ln(e.length),a=o(s);return new Gt(r||t,a)};
/**
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
 */let dn;const fn={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(o["f"])(fn&&cn,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":fn},{".priority":cn}),dn}get(e){const t=Object(o["J"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null}hasIndex(e){return Object(o["m"])(this.indexSet_,e.toString())}addIndex(e,t){Object(o["f"])(e!==zt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator($t.Wrap);let s,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();s=r?hn(n,e.getCompare()):fn;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const l=Object.assign({},this.indexes_);return l[c]=s,new pn(l,u)}addToIndexes(e,t){const n=Object(o["F"])(this.indexes_,(n,r)=>{const i=Object(o["J"])(this.indexSet_,r);if(Object(o["f"])(i,"Missing index implementation for "+r),n===fn){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator($t.Wrap);let o=r.getNext();while(o)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),hn(n,i.getCompare())}return fn}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new $t(e.name,r))),i.insert(e,e.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(o["F"])(this.indexes_,n=>{if(n===fn)return n;{const r=t.get(e.name);return r?n.remove(new $t(e.name,r)):n}});return new pn(n,this.indexSet_)}}
/**
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
 */let gn;class vn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&Object(o["f"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gn||(gn=new vn(new Gt(Yt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gn}updatePriority(e){return this.children_.isEmpty()?this:new vn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gn:t}}getChild(e){const t=ht(e);return null===t?this:this.getImmediateChild(t).getChild(ft(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(o["f"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new $t(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?gn:this.priorityNode_;return new vn(r,o,i)}}updateChild(e,t){const n=ht(e);if(null===n)return t;{Object(o["f"])(".priority"!==ht(e)||1===dt(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cn,(o,s)=>{t[o]=s.val(e),n++,i&&vn.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(cn,(t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.lazyHash_=""===e?"":_(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new $t(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $t(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $t(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,$t.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,$t.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===zt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cn),n=t.getIterator(cn);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===zt?null:this.indexMap_.get(e.toString())}}vn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends vn{constructor(){super(new Gt(Yt),vn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vn.EMPTY_NODE}isEmpty(){return!1}}const _n=new mn;Object.defineProperties($t,{MIN:{value:new $t(P,vn.EMPTY_NODE)},MAX:{value:new $t(R,_n)}}),Vt.__EMPTY_NODE=vn.EMPTY_NODE,rn.__childrenNodeConstructor=vn,Qt(_n),sn(_n);
/**
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
 */
const bn=!0;function yn(e,t=null){if(null===e)return vn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(o["f"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,yn(t))}if(e instanceof Array||!bn){let n=vn.EMPTY_NODE;return F(e,(t,r)=>{if(Object(o["m"])(e,t)&&"."!==t.substring(0,1)){const e=yn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(yn(t))}{const n=[];let r=!1;const i=e;if(F(i,(e,t)=>{if("."!==e.substring(0,1)){const i=yn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new $t(e,i)))}}),0===n.length)return vn.EMPTY_NODE;const o=hn(n,Kt,e=>e.name,Yt);if(r){const e=hn(n,cn.getCompare());return new vn(o,yn(t),new pn({".priority":e},{".priority":cn}))}return new vn(o,yn(t),pn.Default)}}on(yn);
/**
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
 */
class wn extends Ut{constructor(e){super(),this.indexPath_=e,Object(o["f"])(!bt(e)&&".priority"!==ht(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?N(e.name,t.name):i}makePost(e,t){const n=yn(e),r=vn.EMPTY_NODE.updateChild(this.indexPath_,n);return new $t(t,r)}maxPost(){const e=vn.EMPTY_NODE.updateChild(this.indexPath_,_n);return new $t(R,e)}toString(){return vt(this.indexPath_,0).join("/")}}
/**
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
 */class On extends Ut{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?N(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $t.MIN}maxPost(){return $t.MAX}makePost(e,t){const n=yn(e);return new $t(t,n)}toString(){return".value"}}const Cn=new On,kn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",In=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=kn.charAt(n%64),n=Math.floor(n/64);Object(o["f"])(0===n,"Cannot push at time == 0");let a=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=kn.charAt(t[i]);return Object(o["f"])(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
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
 */
/**
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
 */
function jn(e){return{type:"value",snapshotNode:e}}function En(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Tn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function xn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
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
 */class Pn{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Object(o["f"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Tn(t,a)):Object(o["f"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?s.trackChildChange(En(t,n)):s.trackChildChange(xn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cn,(e,r)=>{t.hasChild(e)||n.trackChildChange(Tn(e,r))}),t.isLeafNode()||t.forEachChild(cn,(t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(xn(t,r,i))}else n.trackChildChange(En(t,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
 */class Rn{constructor(e){this.indexedFilter_=new Pn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rn.getStartPost_(e),this.endPost_=Rn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new $t(t,n))||(n=vn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(vn.EMPTY_NODE);const i=this;return t.forEachChild(cn,(e,t)=>{i.matches(new $t(e,t))||(r=r.updateImmediateChild(e,vn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
 */class Nn{constructor(e){this.rangedFilter_=new Rn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new $t(t,n))||(n=vn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=vn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=vn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(vn.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;while(o.hasNext()){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);const c=a&&s<this.limit_&&i(t,n)<=0;c?s++:r=r.updateImmediateChild(t.name,vn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const a=e;Object(o["f"])(a.numChildren()===this.limit_,"");const c=new $t(t,n),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=r.getChildAfterChild(this.index_,u,this.reverse_);while(null!=o&&(o.name===t||a.hasChild(o.name)))o=r.getChildAfterChild(this.index_,o,this.reverse_);const h=null==o?1:s(o,c),d=l&&!n.isEmpty()&&h>=0;if(d)return null!=i&&i.trackChildChange(xn(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Tn(t,e));const n=a.updateImmediateChild(t,vn.EMPTY_NODE),r=null!=o&&this.rangedFilter_.matches(o);return r?(null!=i&&i.trackChildChange(En(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:l&&s(u,c)>=0?(null!=i&&(i.trackChildChange(Tn(u.name,u.node)),i.trackChildChange(En(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(u.name,vn.EMPTY_NODE)):e}}
/**
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
 */class An{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(o["f"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(o["f"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(o["f"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(o["f"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(o["f"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cn}copy(){const e=new An;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ln(e){return e.loadsAllData()?new Pn(e.getIndex()):e.hasLimit()?new Nn(e):new Rn(e)}function Mn(e){const t={};if(e.isDefault())return t;let n;return e.index_===cn?n="$priority":e.index_===Cn?n="$value":e.index_===zt?n="$key":(Object(o["f"])(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(o["M"])(n),e.startSet_&&(t["startAt"]=Object(o["M"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(o["M"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(o["M"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(o["M"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Dn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==cn&&(t["i"]=e.index_.toString()),t}
/**
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
 */class Fn extends it{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=k("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(o["f"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Fn.getListenId_(e,n),a={};this.listens_[s]=a;const c=Mn(e._queryParams);this.restRequest_(i+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(i,c,!1,n),Object(o["J"])(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}})}unlisten(e,t){const n=Fn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Mn(e._queryParams),n=e._path.toString(),r=new o["a"];return this.restRequest_(n+".json",t,(e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(o["H"])(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(o["E"])(a.responseText)}catch(e){E("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&E("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()})}}
/**
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
 */class $n{constructor(){this.rootNode_=vn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Un(){return{value:null,children:new Map}}function qn(e,t,n){if(bt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ht(t);e.children.has(r)||e.children.set(r,Un());const i=e.children.get(r);t=ft(t),qn(i,t,n)}}function Vn(e,t,n){null!==e.value?n(t,e.value):zn(e,(e,r)=>{const i=new ut(t.toString()+"/"+e);Vn(r,i,n)})}function zn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
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
 */class Wn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
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
 */const Bn=1e4,Hn=3e4,Gn=3e5;class Kn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wn(e);const n=Bn+(Hn-Bn)*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,r)=>{r>0&&Object(o["m"])(this.statsToReport_,e)&&(t[e]=r,n=!0)}),n&&this.server_.reportStats(t),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*Gn))}}
/**
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
 */var Yn;function Jn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));class Zn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Yn.ACK_USER_WRITE,this.source=Jn()}operationForChild(e){if(bt(this.path)){if(null!=this.affectedTree.value)return Object(o["f"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ut(e));return new Zn(lt(),t,this.revert)}}return Object(o["f"])(ht(this.path)===e,"operationForChild called for unrelated child."),new Zn(ft(this.path),this.affectedTree,this.revert)}}
/**
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
 */class er{constructor(e,t){this.source=e,this.path=t,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return bt(this.path)?new er(this.source,lt()):new er(this.source,ft(this.path))}}
/**
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
 */class tr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Yn.OVERWRITE}operationForChild(e){return bt(this.path)?new tr(this.source,lt(),this.snap.getImmediateChild(e)):new tr(this.source,ft(this.path),this.snap)}}
/**
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
 */class nr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Yn.MERGE}operationForChild(e){if(bt(this.path)){const t=this.children.subtree(new ut(e));return t.isEmpty()?null:t.value?new tr(this.source,lt(),t.value):new nr(this.source,lt(),t)}return Object(o["f"])(ht(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new nr(this.source,ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class rr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(bt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ht(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */class ir{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function or(e,t,n,r){const i=[],o=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push(Sn(t.childName,t.snapshotNode))}),sr(e,i,"child_removed",t,r,n),sr(e,i,"child_added",t,r,n),sr(e,i,"child_moved",o,r,n),sr(e,i,"child_changed",t,r,n),sr(e,i,"value",t,r,n),i}function sr(e,t,n,r,i,o){const s=r.filter(e=>e.type===n);s.sort((t,n)=>cr(e,t,n)),s.forEach(n=>{const r=ar(e,n,o);i.forEach(i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))})})}function ar(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function cr(e,t,n){if(null==t.childName||null==n.childName)throw Object(o["g"])("Should only compare child_ events.");const r=new $t(t.childName,t.snapshotNode),i=new $t(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
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
 */function ur(e,t){return{eventCache:e,serverCache:t}}function lr(e,t,n,r){return ur(new rr(t,n,r),e.serverCache)}function hr(e,t,n,r){return ur(e.eventCache,new rr(t,n,r))}function dr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function fr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let pr;const gr=()=>(pr||(pr=new Gt(A)),pr);class vr{constructor(e,t=gr()){this.value=e,this.children=t}static fromObject(e){let t=new vr(null);return F(e,(e,n)=>{t=t.set(new ut(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:lt(),value:this.value};if(bt(e))return null;{const n=ht(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ft(e),t);if(null!=i){const e=_t(new ut(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(bt(e))return this;{const t=ht(e),n=this.children.get(t);return null!==n?n.subtree(ft(e)):new vr(null)}}set(e,t){if(bt(e))return new vr(t,this.children);{const n=ht(e),r=this.children.get(n)||new vr(null),i=r.set(ft(e),t),o=this.children.insert(n,i);return new vr(this.value,o)}}remove(e){if(bt(e))return this.children.isEmpty()?new vr(null):new vr(null,this.children);{const t=ht(e),n=this.children.get(t);if(n){const r=n.remove(ft(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new vr(null):new vr(this.value,i)}return this}}get(e){if(bt(e))return this.value;{const t=ht(e),n=this.children.get(t);return n?n.get(ft(e)):null}}setTree(e,t){if(bt(e))return t;{const n=ht(e),r=this.children.get(n)||new vr(null),i=r.setTree(ft(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new vr(this.value,o)}}fold(e){return this.fold_(lt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(_t(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,lt(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(bt(e))return null;{const r=ht(e),i=this.children.get(r);return i?i.findOnPath_(ft(e),_t(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,lt(),t)}foreachOnPath_(e,t,n){if(bt(e))return this;{this.value&&n(t,this.value);const r=ht(e),i=this.children.get(r);return i?i.foreachOnPath_(ft(e),_t(t,r),n):new vr(null)}}foreach(e){this.foreach_(lt(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(_t(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
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
 */class mr{constructor(e){this.writeTree_=e}static empty(){return new mr(new vr(null))}}function _r(e,t,n){if(bt(t))return new mr(new vr(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=yt(i,t);return o=o.updateChild(s,n),new mr(e.writeTree_.set(i,o))}{const r=new vr(n),i=e.writeTree_.setTree(t,r);return new mr(i)}}}function br(e,t,n){let r=e;return F(n,(e,n)=>{r=_r(r,_t(t,e),n)}),r}function yr(e,t){if(bt(t))return mr.empty();{const n=e.writeTree_.setTree(t,new vr(null));return new mr(n)}}function wr(e,t){return null!=Or(e,t)}function Or(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(yt(n.path,t)):null}function Cr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cn,(e,n)=>{t.push(new $t(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new $t(e,n.value))}),t}function kr(e,t){if(bt(t))return e;{const n=Or(e,t);return new mr(null!=n?new vr(n):e.writeTree_.subtree(t))}}function Ir(e){return e.writeTree_.isEmpty()}function jr(e,t){return Er(lt(),e.writeTree_,t)}function Er(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((t,i)=>{".priority"===t?(Object(o["f"])(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Er(_t(e,t),i,n)}),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(_t(e,".priority"),r)),n}}
/**
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
 */function Tr(e,t){return Qr(t,e)}function xr(e,t,n,r,i){Object(o["f"])(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=_r(e.visibleWrites,t,n)),e.lastWriteId=r}function Sr(e,t,n,r){Object(o["f"])(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=br(e.visibleWrites,t,n),e.lastWriteId=r}function Pr(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Rr(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(o["f"])(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Nr(t,r.path)?i=!1:Ct(r.path,t.path)&&(s=!0)),a--}if(i){if(s)return Ar(e),!0;if(r.snap)e.visibleWrites=yr(e.visibleWrites,r.path);else{const t=r.children;F(t,t=>{e.visibleWrites=yr(e.visibleWrites,_t(r.path,t))})}return!0}return!1}function Nr(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(_t(e.path,n),t))return!0;return!1}function Ar(e){e.visibleWrites=Mr(e.allWrites,Lr,lt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Lr(e){return e.visible}function Mr(e,t,n){let r=mr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Ct(n,e)?(t=yt(n,e),r=_r(r,t,s.snap)):Ct(e,n)&&(t=yt(e,n),r=_r(r,lt(),s.snap.getChild(t)));else{if(!s.children)throw Object(o["g"])("WriteRecord should have .snap or .children");if(Ct(n,e))t=yt(n,e),r=br(r,t,s.children);else if(Ct(e,n))if(t=yt(e,n),bt(t))r=br(r,lt(),s.children);else{const e=Object(o["J"])(s.children,ht(t));if(e){const n=e.getChild(ft(t));r=_r(r,lt(),n)}}}}}return r}function Dr(e,t,n,r,i){if(r||i){const o=kr(e.visibleWrites,t);if(!i&&Ir(o))return n;if(i||null!=n||wr(o,lt())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},s=Mr(e.allWrites,o,t),a=n||vn.EMPTY_NODE;return jr(s,a)}return null}{const r=Or(e.visibleWrites,t);if(null!=r)return r;{const r=kr(e.visibleWrites,t);if(Ir(r))return n;if(null!=n||wr(r,lt())){const e=n||vn.EMPTY_NODE;return jr(r,e)}return null}}}function Fr(e,t,n){let r=vn.EMPTY_NODE;const i=Or(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cn,(e,t)=>{r=r.updateImmediateChild(e,t)}),r;if(n){const i=kr(e.visibleWrites,t);return n.forEachChild(cn,(e,t)=>{const n=jr(kr(i,new ut(e)),t);r=r.updateImmediateChild(e,n)}),Cr(i).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}{const n=kr(e.visibleWrites,t);return Cr(n).forEach(e=>{r=r.updateImmediateChild(e.name,e.node)}),r}}function $r(e,t,n,r,i){Object(o["f"])(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(t,n);if(wr(e.visibleWrites,s))return null;{const t=kr(e.visibleWrites,s);return Ir(t)?i.getChild(n):jr(t,i.getChild(n))}}function Ur(e,t,n,r){const i=_t(t,n),o=Or(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n)){const t=kr(e.visibleWrites,i);return jr(t,r.getNode().getImmediateChild(n))}return null}function qr(e,t){return Or(e.visibleWrites,t)}function Vr(e,t,n,r,i,o,s){let a;const c=kr(e.visibleWrites,t),u=Or(c,lt());if(null!=u)a=u;else{if(null==n)return[];a=jr(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let c=n.getNext();while(c&&e.length<i)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}function zr(){return{visibleWrites:mr.empty(),allWrites:[],lastWriteId:-1}}function Wr(e,t,n,r){return Dr(e.writeTree,e.treePath,t,n,r)}function Br(e,t){return Fr(e.writeTree,e.treePath,t)}function Hr(e,t,n,r){return $r(e.writeTree,e.treePath,t,n,r)}function Gr(e,t){return qr(e.writeTree,_t(e.treePath,t))}function Kr(e,t,n,r,i,o){return Vr(e.writeTree,e.treePath,t,n,r,i,o)}function Yr(e,t,n){return Ur(e.writeTree,e.treePath,t,n)}function Jr(e,t){return Qr(_t(e.treePath,t),e.writeTree)}function Qr(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Xr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(o["f"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(o["f"])(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,xn(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Tn(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,En(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Object(o["g"])("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,xn(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */class Zr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ei=new Zr;class ti{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:fr(this.viewCache_),i=Kr(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
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
 */function ni(e){return{filter:e}}function ri(e,t){Object(o["f"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(o["f"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ii(e,t,n,r,i){const s=new Xr;let a,c;if(n.type===Yn.OVERWRITE){const u=n;u.source.fromUser?a=ci(e,t,u.path,u.snap,r,i,s):(Object(o["f"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered()&&!bt(u.path),a=ai(e,t,u.path,u.snap,r,i,c,s))}else if(n.type===Yn.MERGE){const u=n;u.source.fromUser?a=li(e,t,u.path,u.children,r,i,s):(Object(o["f"])(u.source.fromServer,"Unknown source."),c=u.source.tagged||t.serverCache.isFiltered(),a=di(e,t,u.path,u.children,r,i,c,s))}else if(n.type===Yn.ACK_USER_WRITE){const o=n;a=o.revert?gi(e,t,o.path,r,i,s):fi(e,t,o.path,o.affectedTree,r,i,s)}else{if(n.type!==Yn.LISTEN_COMPLETE)throw Object(o["g"])("Unknown operation type: "+n.type);a=pi(e,t,n.path,r,s)}const u=s.getChanges();return oi(t,a,u),{viewCache:a,changes:u}}function oi(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=dr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(jn(dr(t)))}}function si(e,t,n,r,i,s){const a=t.eventCache;if(null!=Gr(r,n))return t;{let c,u;if(bt(n))if(Object(o["f"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=fr(t),i=n instanceof vn?n:vn.EMPTY_NODE,o=Br(r,i);c=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=Wr(r,fr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=ht(n);if(".priority"===l){Object(o["f"])(1===dt(n),"Can't have a priority with additional path components");const i=a.getNode();u=t.serverCache.getNode();const s=Hr(r,n,i,u);c=null!=s?e.filter.updatePriority(i,s):a.getNode()}else{const o=ft(n);let h;if(a.isCompleteForChild(l)){u=t.serverCache.getNode();const e=Hr(r,n,a.getNode(),u);h=null!=e?a.getNode().getImmediateChild(l).updateChild(o,e):a.getNode().getImmediateChild(l)}else h=Yr(r,l,t.serverCache);c=null!=h?e.filter.updateChild(a.getNode(),l,h,o,i,s):a.getNode()}}return lr(t,c,a.isFullyInitialized()||bt(n),e.filter.filtersNodes())}}function ai(e,t,n,r,i,o,s,a){const c=t.serverCache;let u;const l=s?e.filter:e.filter.getIndexedFilter();if(bt(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),e,null)}else{const e=ht(n);if(!c.isCompleteForPath(n)&&dt(n)>1)return t;const i=ft(n),o=c.getNode().getImmediateChild(e),s=o.updateChild(i,r);u=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,i,ei,null)}const h=hr(t,u,c.isFullyInitialized()||bt(n),l.filtersNodes()),d=new ti(i,h,o);return si(e,h,n,i,d,a)}function ci(e,t,n,r,i,o,s){const a=t.eventCache;let c,u;const l=new ti(i,t,o);if(bt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),c=lr(t,u,!0,e.filter.filtersNodes());else{const i=ht(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),c=lr(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ft(n),u=a.getNode().getImmediateChild(i);let h;if(bt(o))h=r;else{const e=l.getCompleteChild(i);h=null!=e?".priority"===pt(o)&&e.getChild(mt(o)).isEmpty()?e:e.updateChild(o,r):vn.EMPTY_NODE}if(u.equals(h))c=t;else{const n=e.filter.updateChild(a.getNode(),i,h,o,l,s);c=lr(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ui(e,t){return e.eventCache.isCompleteForChild(t)}function li(e,t,n,r,i,o,s){let a=t;return r.foreach((r,c)=>{const u=_t(n,r);ui(t,ht(u))&&(a=ci(e,a,u,c,i,o,s))}),r.foreach((r,c)=>{const u=_t(n,r);ui(t,ht(u))||(a=ci(e,a,u,c,i,o,s))}),a}function hi(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function di(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,u=t;c=bt(n)?r:new vr(null).setTree(n,r);const l=t.serverCache.getNode();return c.children.inorderTraversal((n,r)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=hi(e,c,r);u=ai(e,u,new ut(n),l,i,o,s,a)}}),c.children.inorderTraversal((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=hi(e,c,r);u=ai(e,u,new ut(n),l,i,o,s,a)}}),u}function fi(e,t,n,r,i,o,s){if(null!=Gr(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(bt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ai(e,t,n,c.getNode().getChild(n),i,o,a,s);if(bt(n)){let r=new vr(null);return c.getNode().forEachChild(zt,(e,t)=>{r=r.set(new ut(e),t)}),di(e,t,n,r,i,o,a,s)}return t}{let u=new vr(null);return r.foreach((e,t)=>{const r=_t(n,e);c.isCompleteForPath(r)&&(u=u.set(e,c.getNode().getChild(r)))}),di(e,t,n,u,i,o,a,s)}}function pi(e,t,n,r,i){const o=t.serverCache,s=hr(t,o.getNode(),o.isFullyInitialized()||bt(n),o.isFiltered());return si(e,s,n,r,ei,i)}function gi(e,t,n,r,i,s){let a;if(null!=Gr(r,n))return t;{const c=new ti(r,t,i),u=t.eventCache.getNode();let l;if(bt(n)||".priority"===ht(n)){let n;if(t.serverCache.isFullyInitialized())n=Wr(r,fr(t));else{const e=t.serverCache.getNode();Object(o["f"])(e instanceof vn,"serverChildren would be complete if leaf node"),n=Br(r,e)}n=n,l=e.filter.updateFullNode(u,n,s)}else{const i=ht(n);let o=Yr(r,i,t.serverCache);null==o&&t.serverCache.isCompleteForChild(i)&&(o=u.getImmediateChild(i)),l=null!=o?e.filter.updateChild(u,i,o,ft(n),c,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(u,i,vn.EMPTY_NODE,ft(n),c,s):u,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Wr(r,fr(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,s)))}return a=t.serverCache.isFullyInitialized()||null!=Gr(r,lt()),lr(t,l,a,e.filter.filtersNodes())}}
/**
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
 */class vi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Pn(n.getIndex()),i=Ln(n);this.processor_=ni(i);const o=t.serverCache,s=t.eventCache,a=r.updateFullNode(vn.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(vn.EMPTY_NODE,s.getNode(),null),u=new rr(a,o.isFullyInitialized(),r.filtersNodes()),l=new rr(c,s.isFullyInitialized(),i.filtersNodes());this.viewCache_=ur(l,u),this.eventGenerator_=new ir(this.query_)}get query(){return this.query_}}function mi(e){return e.viewCache_.serverCache.getNode()}function _i(e){return dr(e.viewCache_)}function bi(e,t){const n=fr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!bt(t)&&!n.getImmediateChild(ht(t)).isEmpty())?n.getChild(t):null}function yi(e){return 0===e.eventRegistrations_.length}function wi(e,t){e.eventRegistrations_.push(t)}function Oi(e,t,n){const r=[];if(n){Object(o["f"])(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)})}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ci(e,t,n,r){t.type===Yn.MERGE&&null!==t.source.queryId&&(Object(o["f"])(fr(e.viewCache_),"We should always have a full cache before handling merges"),Object(o["f"])(dr(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ii(e.processor_,i,t,n,r);return ri(e.processor_,s.viewCache),Object(o["f"])(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ii(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ki(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(cn,(e,t)=>{r.push(En(e,t))})}return n.isFullyInitialized()&&r.push(jn(n.getNode())),Ii(e,r,n.getNode(),t)}function Ii(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return or(e.eventGenerator_,t,n,i)}
/**
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
 */let ji,Ei;class Ti{constructor(){this.views=new Map}}function xi(e){Object(o["f"])(!ji,"__referenceConstructor has already been defined"),ji=e}function Si(){return Object(o["f"])(ji,"Reference.ts has not been loaded"),ji}function Pi(e){return 0===e.views.size}function Ri(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Object(o["f"])(null!=s,"SyncTree gave us an op for an invalid query."),Ci(s,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(Ci(o,t,n,r));return i}}function Ni(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Wr(n,i?r:null),o=!1;e?o=!0:r instanceof vn?(e=Br(n,r),o=!1):(e=vn.EMPTY_NODE,o=!1);const s=ur(new rr(e,o,!1),new rr(r,i,!1));return new vi(t,s)}return s}function Ai(e,t,n,r,i,o){const s=Ni(e,t,r,i,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),wi(s,n),ki(s,n)}function Li(e,t,n,r){const i=t._queryIdentifier,o=[];let s=[];const a=Ui(e);if("default"===i)for(const[c,u]of e.views.entries())s=s.concat(Oi(u,n,r)),yi(u)&&(e.views.delete(c),u.query._queryParams.loadsAllData()||o.push(u.query));else{const t=e.views.get(i);t&&(s=s.concat(Oi(t,n,r)),yi(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Ui(e)&&o.push(new(Si())(t._repo,t._path)),{removed:o,events:s}}function Mi(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Di(e,t){let n=null;for(const r of e.views.values())n=n||bi(r,t);return n}function Fi(e,t){const n=t._queryParams;if(n.loadsAllData())return qi(e);{const n=t._queryIdentifier;return e.views.get(n)}}function $i(e,t){return null!=Fi(e,t)}function Ui(e){return null!=qi(e)}function qi(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
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
 */function Vi(e){Object(o["f"])(!Ei,"__referenceConstructor has already been defined"),Ei=e}function zi(){return Object(o["f"])(Ei,"Reference.ts has not been loaded"),Ei}let Wi=1;class Bi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new vr(null),this.pendingWriteTree_=zr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hi(e,t,n,r,i){return xr(e.pendingWriteTree_,t,n,r,i),i?oo(e,new tr(Jn(),t,n)):[]}function Gi(e,t,n,r){Sr(e.pendingWriteTree_,t,n,r);const i=vr.fromObject(n);return oo(e,new nr(Jn(),t,i))}function Ki(e,t,n=!1){const r=Pr(e.pendingWriteTree_,t),i=Rr(e.pendingWriteTree_,t);if(i){let t=new vr(null);return null!=r.snap?t=t.set(lt(),!0):F(r.children,e=>{t=t.set(new ut(e),!0)}),oo(e,new Zn(r.path,t,n))}return[]}function Yi(e,t,n){return oo(e,new tr(Qn(),t,n))}function Ji(e,t,n){const r=vr.fromObject(n);return oo(e,new nr(Qn(),t,r))}function Qi(e,t){return oo(e,new er(Qn(),t))}function Xi(e,t,n){const r=ho(e,n);if(r){const n=fo(r),i=n.path,o=n.queryId,s=yt(i,t),a=new er(Xn(o),s);return po(e,i,a)}return[]}function Zi(e,t,n,r){const i=t._path,o=e.syncPointTree_.get(i);let s=[];if(o&&("default"===t._queryIdentifier||$i(o,t))){const a=Li(o,t,n,r);Pi(o)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=a.removed;s=a.events;const u=-1!==c.findIndex(e=>e._queryParams.loadsAllData()),l=e.syncPointTree_.findOnPath(i,(e,t)=>Ui(t));if(u&&!l){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=go(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,o=co(e,r);e.listenProvider_.startListening(vo(i),uo(e,i),o.hashFn,o.onComplete)}}}if(!l&&c.length>0&&!r)if(u){const n=null;e.listenProvider_.stopListening(vo(t),n)}else c.forEach(t=>{const n=e.queryToTagMap.get(lo(t));e.listenProvider_.stopListening(vo(t),n)});mo(e,c)}return s}function eo(e,t,n,r){const i=ho(e,r);if(null!=i){const r=fo(i),o=r.path,s=r.queryId,a=yt(o,t),c=new tr(Xn(s),a,n);return po(e,o,c)}return[]}function to(e,t,n,r){const i=ho(e,r);if(i){const r=fo(i),o=r.path,s=r.queryId,a=yt(o,t),c=vr.fromObject(n),u=new nr(Xn(s),a,c);return po(e,o,u)}return[]}function no(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,(e,t)=>{const n=yt(e,r);i=i||Di(t,n),s=s||Ui(t)});let a,c=e.syncPointTree_.get(r);if(c?(s=s||Ui(c),i=i||Di(c,lt())):(c=new Ti,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=i)a=!0;else{a=!1,i=vn.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild((e,t)=>{const n=Di(t,lt());n&&(i=i.updateImmediateChild(e,n))})}const u=$i(c,t);if(!u&&!t._queryParams.loadsAllData()){const n=lo(t);Object(o["f"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=_o();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const l=Tr(e.pendingWriteTree_,r);let h=Ai(c,t,n,l,i,a);if(!u&&!s){const n=Fi(c,t);h=h.concat(bo(e,t,n))}return h}function ro(e,t,n){const r=!0,i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,(e,n)=>{const r=yt(e,t),i=Di(n,r);if(i)return i});return Dr(i,t,o,n,r)}function io(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const i=yt(e,n);r=r||Di(t,i)});let i=e.syncPointTree_.get(n);i?r=r||Di(i,lt()):(i=new Ti,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new rr(r,!0,!1):null,a=Tr(e.pendingWriteTree_,t._path),c=Ni(i,t,a,o?s.getNode():vn.EMPTY_NODE,o);return _i(c)}function oo(e,t){return so(t,e.syncPointTree_,null,Tr(e.pendingWriteTree_,lt()))}function so(e,t,n,r){if(bt(e.path))return ao(e,t,n,r);{const i=t.get(lt());null==n&&null!=i&&(n=Di(i,lt()));let o=[];const s=ht(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=Jr(r,s);o=o.concat(so(a,c,e,t))}return i&&(o=o.concat(Ri(i,e,r,n))),o}}function ao(e,t,n,r){const i=t.get(lt());null==n&&null!=i&&(n=Di(i,lt()));let o=[];return t.children.inorderTraversal((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Jr(r,t),c=e.operationForChild(t);c&&(o=o.concat(ao(c,i,s,a)))}),i&&(o=o.concat(Ri(i,e,r,n))),o}function co(e,t){const n=t.query,r=uo(e,n);return{hashFn:()=>{const e=mi(t)||vn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Xi(e,n._path,r):Qi(e,n._path);{const r=V(t,n);return Zi(e,n,null,r)}}}}function uo(e,t){const n=lo(t);return e.queryToTagMap.get(n)}function lo(e){return e._path.toString()+"$"+e._queryIdentifier}function ho(e,t){return e.tagToQueryMap.get(t)}function fo(e){const t=e.indexOf("$");return Object(o["f"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ut(e.substr(0,t))}}function po(e,t,n){const r=e.syncPointTree_.get(t);Object(o["f"])(r,"Missing sync point for query tag that we're tracking");const i=Tr(e.pendingWriteTree_,t);return Ri(r,n,i,null)}function go(e){return e.fold((e,t,n)=>{if(t&&Ui(t)){const e=qi(t);return[e]}{let e=[];return t&&(e=Mi(t)),F(n,(t,n)=>{e=e.concat(n)}),e}})}function vo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(zi())(e._repo,e._path):e}function mo(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=lo(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function _o(){return Wi++}function bo(e,t,n){const r=t._path,i=uo(e,t),s=co(e,n),a=e.listenProvider_.startListening(vo(t),i,s.hashFn,s.onComplete),c=e.syncPointTree_.subtree(r);if(i)Object(o["f"])(!Ui(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold((e,t,n)=>{if(!bt(e)&&t&&Ui(t))return[qi(t).query];{let e=[];return t&&(e=e.concat(Mi(t).map(e=>e.query))),F(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(vo(r),uo(e,r))}}return a}
/**
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
 */class yo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yo(t)}node(){return this.node_}}class wo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new wo(this.syncTree_,t)}node(){return ro(this.syncTree_,this.path_)}}const Oo=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Co=function(e,t,n){return e&&"object"===typeof e?(Object(o["f"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ko(e[".sv"],t,n):"object"===typeof e[".sv"]?Io(e[".sv"],t):void Object(o["f"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ko=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(o["f"])(!1,"Unexpected server value: "+e)}},Io=function(e,t,n){e.hasOwnProperty("increment")||Object(o["f"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&Object(o["f"])(!1,"Unexpected increment value: "+r);const i=t.node();if(Object(o["f"])(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i,a=s.getValue();return"number"!==typeof a?r:a+r},jo=function(e,t,n,r){return To(t,new wo(n,e),r)},Eo=function(e,t,n){return To(e,new yo(t),n)};function To(e,t,n){const r=e.getPriority().val(),i=Co(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Co(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new rn(o,yn(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new rn(i))),r.forEachChild(cn,(e,r)=>{const i=To(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))}),o}}
/**
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
 */class xo{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function So(e,t){let n=t instanceof ut?t:new ut(t),r=e,i=ht(n);while(null!==i){const e=Object(o["J"])(r.node.children,i)||{children:{},childCount:0};r=new xo(i,r,e),n=ft(n),i=ht(n)}return r}function Po(e){return e.node.value}function Ro(e,t){e.node.value=t,$o(e)}function No(e){return e.node.childCount>0}function Ao(e){return void 0===Po(e)&&!No(e)}function Lo(e,t){F(e.node.children,(n,r)=>{t(new xo(n,e,r))})}function Mo(e,t,n,r){n&&!r&&t(e),Lo(e,e=>{Mo(e,t,!0,r)}),n&&r&&t(e)}function Do(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Fo(e){return new ut(null===e.parent?e.name:Fo(e.parent)+"/"+e.name)}function $o(e){null!==e.parent&&Uo(e.parent,e.name,e)}function Uo(e,t,n){const r=Ao(n),i=Object(o["m"])(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,$o(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,$o(e))}
/**
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
 */const qo=/[\[\].#$\/\u0000-\u001F\u007F]/,Vo=/[\[\].#$\u0000-\u001F\u007F]/,zo=10485760,Wo=function(e){return"string"===typeof e&&0!==e.length&&!qo.test(e)},Bo=function(e){return"string"===typeof e&&0!==e.length&&!Vo.test(e)},Ho=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Bo(e)},Go=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!x(e)||e&&"object"===typeof e&&Object(o["m"])(e,".sv")},Ko=function(e,t,n,r){r&&void 0===t||Yo(Object(o["r"])(e,"value"),t,n)},Yo=function(e,t,n){const r=n instanceof ut?new kt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Tt(r));if("function"===typeof t)throw new Error(e+"contains a function "+Tt(r)+" with contents = "+t.toString());if(x(t))throw new Error(e+"contains "+t.toString()+" "+Tt(r));if("string"===typeof t&&t.length>zo/3&&Object(o["K"])(t)>zo)throw new Error(e+"contains a string greater than "+zo+" utf8 bytes "+Tt(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(F(t,(t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Wo(t)))throw new Error(e+" contains an invalid key ("+t+") "+Tt(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(r,t),Yo(e,o,r),jt(r)}),n&&i)throw new Error(e+' contains ".value" child '+Tt(r)+" in addition to actual children.")}},Jo=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=vt(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Wo(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&Ct(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Qo=function(e,t,n,r){if(r&&void 0===t)return;const i=Object(o["r"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];F(t,(e,t)=>{const r=new ut(e);if(Yo(i,t,_t(n,r)),".priority"===pt(r)&&!Go(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)}),Jo(i,s)},Xo=function(e,t,n,r){if((!r||void 0!==n)&&!Bo(n))throw new Error(Object(o["r"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Zo=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xo(e,t,n,r)},es=function(e,t){if(".info"===ht(t))throw new Error(e+" failed = Can't modify data under /.info/")},ts=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Wo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Ho(n))throw new Error(Object(o["r"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class ns{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rs(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||Ot(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function is(e,t,n){rs(e,n),ss(e,e=>Ot(e,t))}function os(e,t,n){rs(e,n),ss(e,e=>Ct(e,t)||Ct(t,e))}function ss(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const o=i.path;t(o)?(as(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function as(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();y&&C("event: "+n.toString()),G(r)}}}
/**
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
 */const cs="repo_interrupt",us=25;class ls{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ns,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Un(),this.transactionQueueTree_=new xo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hs(e,t,n){if(e.stats_=ve(e.repoInfo_),e.forceRestClient_||K())e.server_=new Fn(e.repoInfo_,(t,n,r,i)=>{ps(e,t,n,r,i)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>gs(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(o["M"])(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ft(e.repoInfo_,t,(t,n,r,i)=>{ps(e,t,n,r,i)},t=>{gs(e,t)},t=>{vs(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new Kn(e.stats_,e.server_)),e.infoData_=new $n,e.infoSyncTree_=new Bi({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Yi(e.infoSyncTree_,t._path,s),setTimeout(()=>{i("ok")},0)),o},stopListening:()=>{}}),ms(e,"connected",!1),e.serverSyncTree_=new Bi({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,(n,r)=>{const o=i(n,r);os(e.eventQueue_,t._path,o)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ds(e){const t=e.infoData_.getNode(new ut(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function fs(e){return Oo({timestamp:ds(e)})}function ps(e,t,n,r,i){e.dataUpdateCount++;const s=new ut(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=Object(o["F"])(n,e=>yn(e));a=to(e.serverSyncTree_,s,t,i)}else{const t=yn(n);a=eo(e.serverSyncTree_,s,t,i)}else if(r){const t=Object(o["F"])(n,e=>yn(e));a=Ji(e.serverSyncTree_,s,t)}else{const t=yn(n);a=Yi(e.serverSyncTree_,s,t)}let c=s;a.length>0&&(c=Ps(e,s)),os(e.eventQueue_,c,a)}function gs(e,t){ms(e,"connected",t),!1===t&&Os(e)}function vs(e,t){F(t,(t,n)=>{ms(e,t,n)})}function ms(e,t,n){const r=new ut("/.info/"+t),i=yn(n);e.infoData_.updateSnapshot(r,i);const o=Yi(e.infoSyncTree_,r,i);os(e.eventQueue_,r,o)}function _s(e){return e.nextWriteId_++}function bs(e,t){const n=io(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const r=yn(n).withIndex(t._queryParams.getIndex()),i=Yi(e.serverSyncTree_,t._path,r);return is(e.eventQueue_,t._path,i),Promise.resolve(r)},n=>(js(e,"get for query "+Object(o["M"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function ys(e,t,n,r,i){js(e,"set",{path:t.toString(),value:n,priority:r});const o=fs(e),s=yn(n,r),a=ro(e.serverSyncTree_,t),c=Eo(s,a,o),u=_s(e),l=Hi(e.serverSyncTree_,t,c,u,!0);rs(e.eventQueue_,l),e.server_.put(t.toString(),s.val(!0),(n,r)=>{const o="ok"===n;o||E("set at "+t+" failed: "+n);const s=Ki(e.serverSyncTree_,u,!o);os(e.eventQueue_,t,s),Es(e,i,n,r)});const h=Ds(e,t);Ps(e,h),os(e.eventQueue_,h,[])}function ws(e,t,n,r){js(e,"update",{path:t.toString(),value:n});let i=!0;const o=fs(e),s={};if(F(n,(n,r)=>{i=!1,s[n]=jo(_t(t,n),yn(r),e.serverSyncTree_,o)}),i)C("update() called with empty data.  Don't do anything."),Es(e,r,"ok",void 0);else{const i=_s(e),o=Gi(e.serverSyncTree_,t,s,i);rs(e.eventQueue_,o),e.server_.merge(t.toString(),n,(n,o)=>{const s="ok"===n;s||E("update at "+t+" failed: "+n);const a=Ki(e.serverSyncTree_,i,!s),c=a.length>0?Ps(e,t):t;os(e.eventQueue_,c,a),Es(e,r,n,o)}),F(n,n=>{const r=Ds(e,_t(t,n));Ps(e,r)}),os(e.eventQueue_,t,[])}}function Os(e){js(e,"onDisconnectEvents");const t=fs(e),n=Un();Vn(e.onDisconnect_,lt(),(r,i)=>{const o=jo(r,i,e.serverSyncTree_,t);qn(n,r,o)});let r=[];Vn(n,lt(),(t,n)=>{r=r.concat(Yi(e.serverSyncTree_,t,n));const i=Ds(e,t);Ps(e,i)}),e.onDisconnect_=Un(),os(e.eventQueue_,lt(),r)}function Cs(e,t,n){let r;r=".info"===ht(t._path)?no(e.infoSyncTree_,t,n):no(e.serverSyncTree_,t,n),is(e.eventQueue_,t._path,r)}function ks(e,t,n){let r;r=".info"===ht(t._path)?Zi(e.infoSyncTree_,t,n):Zi(e.serverSyncTree_,t,n),is(e.eventQueue_,t._path,r)}function Is(e){e.persistentConnection_&&e.persistentConnection_.interrupt(cs)}function js(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),C(n,...t)}function Es(e,t,n,r){t&&G(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const o=new Error(i);o.code=e,t(o)}})}function Ts(e,t,n){return ro(e.serverSyncTree_,t,n)||vn.EMPTY_NODE}function xs(e,t=e.transactionQueueTree_){if(t||Ms(e,t),Po(t)){const n=As(e,t);Object(o["f"])(n.length>0,"Sending zero length transaction queue");const r=n.every(e=>0===e.status);r&&Ss(e,Fo(t),n)}else No(t)&&Lo(t,t=>{xs(e,t)})}function Ss(e,t,n){const r=n.map(e=>e.currentWriteId),i=Ts(e,t,r);let s=i;const a=i.hash();for(let l=0;l<n.length;l++){const e=n[l];Object(o["f"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=yt(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const c=s.val(!0),u=t;e.server_.put(u.toString(),c,r=>{js(e,"transaction put response",{path:u.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ki(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Ms(e,So(e.transactionQueueTree_,t)),xs(e,e.transactionQueueTree_),os(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)G(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{E("transaction at "+u.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Ps(e,t)}},a)}function Ps(e,t){const n=Ns(e,t),r=Fo(n),i=As(e,n);return Rs(e,i,r),r}function Rs(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter(e=>0===e.status),a=s.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const s=t[c],u=yt(n,s.path);let l,h=!1;if(Object(o["f"])(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)h=!0,l=s.abortReason,i=i.concat(Ki(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=us)h=!0,l="maxretry",i=i.concat(Ki(e.serverSyncTree_,s.currentWriteId,!0));else{const n=Ts(e,s.path,a);s.currentInputSnapshot=n;const r=t[c].update(n.val());if(void 0!==r){Yo("transaction failed: Data returned ",r,s.path);let t=yn(r);const c="object"===typeof r&&null!=r&&Object(o["m"])(r,".priority");c||(t=t.updatePriority(n.getPriority()));const u=s.currentWriteId,l=fs(e),h=Eo(t,n,l);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=h,s.currentWriteId=_s(e),a.splice(a.indexOf(u),1),i=i.concat(Hi(e.serverSyncTree_,s.path,h,s.currentWriteId,s.applyLocally)),i=i.concat(Ki(e.serverSyncTree_,u,!0))}else h=!0,l="nodata",i=i.concat(Ki(e.serverSyncTree_,s.currentWriteId,!0))}os(e.eventQueue_,n,i),i=[],h&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?r.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):r.push(()=>t[c].onComplete(new Error(l),!1,null))))}Ms(e,e.transactionQueueTree_);for(let o=0;o<r.length;o++)G(r[o]);xs(e,e.transactionQueueTree_)}function Ns(e,t){let n,r=e.transactionQueueTree_;n=ht(t);while(null!==n&&void 0===Po(r))r=So(r,n),t=ft(t),n=ht(t);return r}function As(e,t){const n=[];return Ls(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Ls(e,t,n){const r=Po(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Lo(t,t=>{Ls(e,t,n)})}function Ms(e,t){const n=Po(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ro(t,n.length>0?n:void 0)}Lo(t,t=>{Ms(e,t)})}function Ds(e,t){const n=Fo(Ns(e,t)),r=So(e.transactionQueueTree_,t);return Do(r,t=>{Fs(e,t)}),Fs(e,r),Mo(r,t=>{Fs(e,t)}),n}function Fs(e,t){const n=Po(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(o["f"])(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Object(o["f"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ki(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ro(t,void 0):n.length=s+1,os(e.eventQueue_,Fo(t),i);for(let e=0;e<r.length;e++)G(r[e])}}
/**
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
 */function $s(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Us(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):E(`Invalid query segment '${n}' in query '${e}'`)}return t}const qs=function(e,t){const n=Vs(e),r=n.namespace;"firebase.com"===n.domain&&j(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||j("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new le(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new ut(n.pathString)}},Vs=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",c=443;if("string"===typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let l=e.indexOf("/");-1===l&&(l=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=$s(e.substring(l,h)));const d=Us(e.substring(Math.min(e.length,h)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in d&&(o=d["ns"])}return{host:t,port:c,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
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
 */
class zs{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(o["M"])(this.snapshot.exportVal())}}class Ws{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
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
 */class Bs{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(o["f"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
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
 */
/**
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
 */
class Hs{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return bt(this._path)?null:pt(this._path)}get ref(){return new Gs(this._repo,this._path)}get _queryIdentifier(){const e=Dn(this._queryParams),t=M(e);return"{}"===t?"default":t}get _queryObject(){return Dn(this._queryParams)}isEqual(e){if(e=Object(o["t"])(e),!(e instanceof Hs))return!1;const t=this._repo===e._repo,n=Ot(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+gt(this._path)}}class Gs extends Hs{constructor(e,t){super(e,t,new An,!1)}get parent(){const e=mt(this._path);return null===e?null:new Gs(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ks{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ut(e),n=Js(this.ref,e);return new Ks(this._node.getChild(t),n,cn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new Ks(n,Js(this.ref,t),cn)))}hasChild(e){const t=new ut(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ys(e,t){return e=Object(o["t"])(e),e._checkNotDeleted("ref"),void 0!==t?Js(e._root,t):e._root}function Js(e,t){return e=Object(o["t"])(e),null===ht(e._path)?Zo("child","path",t,!1):Xo("child","path",t,!1),new Gs(e._repo,_t(e._path,t))}function Qs(e,t){e=Object(o["t"])(e),es("push",e._path),Ko("push",t,e._path,!0);const n=ds(e._repo),r=In(n),i=Js(e,r),s=Js(e,r);let a;return a=null!=t?Xs(s,t).then(()=>s):Promise.resolve(s),i.then=a.then.bind(a),i.catch=a.then.bind(a,void 0),i}function Xs(e,t){e=Object(o["t"])(e),es("set",e._path),Ko("set",t,e._path,!1);const n=new o["a"];return ys(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Zs(e,t){Qo("update",t,e._path,!1);const n=new o["a"];return ws(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function ea(e){return e=Object(o["t"])(e),bs(e._repo,e).then(t=>new Ks(t,new Gs(e._repo,e._path),e._queryParams.getIndex()))}class ta{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new zs("value",this,new Ks(e.snapshotNode,new Gs(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ws(this,e,t):null}matches(e){return e instanceof ta&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class na{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ws(this,e,t):null}createEvent(e,t){Object(o["f"])(null!=e.childName,"Child events should have a childName.");const n=Js(new Gs(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new zs(e.type,this,new Ks(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof na&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ra(e,t,n,r,i){let o;if("object"===typeof r&&(o=void 0,i=r),"function"===typeof r&&(o=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{ks(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const s=new Bs(n,o||void 0),a="value"===t?new ta(s):new na(t,s);return Cs(e._repo,e,a),()=>ks(e._repo,e,a)}function ia(e,t,n,r){return ra(e,"value",t,n,r)}xi(Gs),Vi(Gs);
/**
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
 */
const oa="FIREBASE_DATABASE_EMULATOR_HOST",sa={};let aa=!1;function ca(t,n,r,i,o){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||j("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),C("Using default host for project ",t.options.projectId),s=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=qs(s,o),u=c.repoInfo,l=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/pizzares/"})&&(l=Object({NODE_ENV:"production",BASE_URL:"/pizzares/"})[oa]),l?(a=!0,s=`http://${l}?ns=${u.namespace}`,c=qs(s,o),u=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new X(X.OWNER):new Q(t.name,t.options,n);ts("Invalid Firebase Database URL",c),bt(c.path)||j("Database URL must point to the root of a Firebase Database (not including a child path).");const d=la(u,t,h,new J(t.name,r));return new ha(d,t)}function ua(e,t){const n=sa[t];n&&n[e.key]===e||j(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Is(e),delete n[e.key]}function la(e,t,n,r){let i=sa[t.name];i||(i={},sa[t.name]=i);let o=i[e.toURLString()];return o&&j("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new ls(e,aa,n,r),i[e.toURLString()]=o,o}class ha{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hs(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gs(this._repo,lt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ua(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&j("Cannot call "+e+" on a deleted database.")}}function da(e=Object(r["d"])(),t){return Object(r["b"])(e,"database").getImmediate({identifier:t})}
/**
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
 */
function fa(e){l(r["a"]),Object(r["c"])(new i["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ca(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(a,c,e),Object(r["f"])(a,c,"esm2017")}
/**
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
 */Ft.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ft.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};fa()}).call(this,n("4362"))},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y})),n.d(t,"b",(function(){return te})),n.d(t,"c",(function(){return ee})),n.d(t,"d",(function(){return Z})),n.d(t,"e",(function(){return X}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function u(e,t){if(!e)throw new Error("[vuex] "+t)}function l(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=l(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["E"])({data:t}),e.strict&&y(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(e,s,n);r.forEachMutation((function(t,n){var r=s+n;m(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;_(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function g(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return v(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function v(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function m(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function _(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function b(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function y(e){Object(r["P"])((function(){return e._state.data}),(function(){u(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),u("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var C="vuex bindings",k="vuex:mutations",I="vuex:actions",j="vuex",E=0;function T(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[C]},(function(n){n.addTimelineLayer({id:k,label:"Vuex Mutations",color:x}),n.addTimelineLayer({id:I,label:"Vuex Actions",color:x}),n.addInspector({id:j,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===j)if(n.filter){var r=[];L(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[A(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId;v(t,r),n.state=M(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===j){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(j),n.sendInspectorState(j),n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=E++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:I,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var x=8702998,S=6710886,P=16777215,R={label:"namespaced",textColor:P,backgroundColor:S};function N(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function A(e,t){return{id:t||"root",label:N(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return A(e._children[n],t+n+"/")}))}}function L(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(i){L(e,t._children[i],n,r+i+"/")}))}function M(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=D(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?N(e):e,editable:!1,value:$((function(){return o[e]}))}}))}return i}function D(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=$((function(){return e[n]}))}else t[n]=$((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function $(e){try{return e()}catch(t){return t}}var U=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},q={namespaced:{configurable:!0}};q.namespaced.get=function(){return!!this._rawModule.namespaced},U.prototype.addChild=function(e,t){this._children[e]=t},U.prototype.removeChild=function(e){delete this._children[e]},U.prototype.getChild=function(e){return this._children[e]},U.prototype.hasChild=function(e){return e in this._children},U.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},U.prototype.forEachChild=function(e){s(this._children,e)},U.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},U.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},U.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(U.prototype,q);var V=function(e){this.register([],e,!1)};function z(e,t,n){if(G(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");z(e.concat(r),t.getChild(r),n.modules[r])}}V.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},V.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},V.prototype.update=function(e){z([],this.root,e)},V.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),G(e,t);var i=new U(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},V.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},V.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var W={assert:function(e){return"function"===typeof e},expected:"function"},B={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},H={getters:W,mutations:W,actions:B};function G(e,t){Object.keys(H).forEach((function(n){if(t[n]){var r=H[n];s(t[n],(function(t,i){u(r.assert(t),K(e,n,i,t,r.expected))}))}}))}function K(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function Y(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new V(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&T(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){u(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},J.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var i=this;return u("function"===typeof e,"store.watch only accepts a function."),Object(r["P"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),u(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,Q);var X=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=oe(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),Z=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=oe(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ee=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||oe(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),te=ie((function(e,t){var n={};return re(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),ne(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=oe(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function ne(e){return re(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function re(e){return Array.isArray(e)||a(e)}function ie(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.2",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},"57b9":function(e,t,n){var r=n("c65b"),i=n("d066"),o=n("b622"),s=n("6eeb");e.exports=function(){var e=i("Symbol"),t=e&&e.prototype,n=t&&t.valueOf,a=o("toPrimitive");t&&!t[a]&&s(t,a,(function(e){return r(n,this)}))}},"588e":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ee})),n.d(t,"b",(function(){return xe})),n.d(t,"c",(function(){return Te}));var r=n("589b"),i=n("1fd5"),o=n("22e5");
/**
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
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
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
 */
class l extends i["c"]{constructor(e,t){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function f(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function v(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function m(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function _(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new l("canceled","User canceled the upload/download.")}function y(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function w(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function O(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function C(){return new l("no-download-url","The given file does not have any download URLs.")}function k(e){return new l("invalid-argument",e)}function I(){return new l("app-deleted","The Firebase app was deleted.")}function j(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function E(e){throw new l("internal-error","Internal error: "+e)}
/**
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
 */class T{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=T.makeFromUrl(e,t)}catch(r){return new T(e,"")}if(""===n.path)return n;throw w(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===s?"(?:storage.googleapis.com|storage.cloud.google.com)":t,v="([^?#]*)",m=new RegExp(`^https?://${g}/${r}/${v}`,"i"),_={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:m,indices:_,postModify:u}];for(let s=0;s<b.length;s++){const t=b[s],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new T(e,i),t.postModify(n);break}}if(null==n)throw y(e);return n}}class x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function S(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout(()=>{i=null,e(f,c())},t)}function d(){o&&clearTimeout(o)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||s;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),o=setTimeout(()=>{s=!0,g(!0)},n),g}function P(e){e(!1)}
/**
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
 */function R(e){return void 0!==e}function N(e){return"object"===typeof e&&!Array.isArray(e)}function A(e){return"string"===typeof e||e instanceof String}function L(e,t,n,r){if(r<t)throw k(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw k(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function M(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function D(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
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
 */var F;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(F||(F={}));
/**
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
 */
class ${constructor(e,t,n,r,i,o,s,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new U(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===F.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===F.ABORT;return void e(!1,new U(!1,null,t))}const o=-1!==this.successCodes_.indexOf(i);e(!0,new U(o,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());R(e)?n(e):n()}catch(o){r(o)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?I():b();r(e)}else{const e=_();r(e)}};this.canceled_?t(!1,new U(!1,null,!0)):this.backoffId_=S(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class U{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function q(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function V(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function z(e,t){t&&(e["X-Firebase-GMPID"]=t)}function W(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function B(e,t,n,r,i,o){const s=D(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return z(c,t),q(c,n),V(c,o),W(c,r),new $(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
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
 */
/**
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
 */
function H(e){let t;try{t=JSON.parse(e)}catch(n){return null}return N(t)?t:null}
/**
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
 */function G(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function K(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function Y(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */function J(e,t){return t}class Q{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||J}}let X=null;function Z(e){return!A(e)||e.length<2?e:Y(e)}function ee(){if(X)return X;const e=[];function t(e,t){return Z(t)}e.push(new Q("bucket")),e.push(new Q("generation")),e.push(new Q("metageneration")),e.push(new Q("name","fullPath",!0));const n=new Q("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new Q("size");return i.xform=r,e.push(i),e.push(new Q("timeCreated")),e.push(new Q("updated")),e.push(new Q("md5Hash",null,!0)),e.push(new Q("cacheControl",null,!0)),e.push(new Q("contentDisposition",null,!0)),e.push(new Q("contentEncoding",null,!0)),e.push(new Q("contentLanguage",null,!0)),e.push(new Q("contentType",null,!0)),e.push(new Q("metadata","customMetadata",!0)),X=e,X}function te(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new T(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function ne(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return te(r,e),r}function re(e,t,n){const r=H(t);if(null===r)return null;const i=r;return ne(e,i,n)}function ie(e,t,n,r){const i=H(t);if(null===i)return null;if(!A(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=M(a,n,r),u=D({alt:"media",token:t});return c+u});return c[0]}class oe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function se(e){if(!e)throw d()}function ae(e,t){function n(n,r){const i=re(e,r,t);return se(null!==i),ie(i,r,e.host,e._protocol)}return n}function ce(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?v():g():402===t.getStatus()?p(e.bucket):403===t.getStatus()?m(e.path):n,r.serverResponse=n.serverResponse,r}return t}function ue(e){const t=ce(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function le(e,t,n){const r=t.fullServerUrl(),i=M(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new oe(i,o,ae(e,n),s);return a.errorHandler=ue(t),a}
/**
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
 */
let he=null;class de{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=F.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=F.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=F.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw E("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw E("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class fe extends de{initXhr(){this.xhr_.responseType="text"}}function pe(){return he?he():new fe}
/**
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
 */
class ge{constructor(e,t){this._service=e,this._location=t instanceof T?t:T.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ge(e,t)}get root(){const e=new T(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const e=G(this._location.path);if(null===e)return null;const t=new T(this._location.bucket,e);return new ge(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw j(e)}}function ve(e){e._throwIfRoot("getDownloadURL");const t=le(e.storage,e._location,ee());return e.storage.makeRequestWithTokens(t,pe).then(e=>{if(null===e)throw C();return e})}function me(e,t){const n=K(e._location.path,t),r=new T(e._location.bucket,n);return new ge(e.storage,r)}
/**
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
 */function _e(e){return/^[A-Za-z]+:\/\//.test(e)}function be(e,t){return new ge(e,t)}function ye(e,t){if(e instanceof Ce){const n=e;if(null==n._bucket)throw O();const r=new ge(n,n._bucket);return null!=t?ye(r,t):r}return void 0!==t?me(e,t):e}function we(e,t){if(t&&_e(t)){if(e instanceof Ce)return be(e,t);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return ye(e,t)}function Oe(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:T.makeFromBucketSpec(n,e)}class Ce{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?T.makeFromBucketSpec(r,this._host):Oe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=T.makeFromBucketSpec(this._url,e):this._bucket=Oe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ge(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new x(I());{const i=B(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ke="@firebase/storage",Ie="0.9.5",je="storage";function Ee(e){return e=Object(i["t"])(e),ve(e)}function Te(e,t){return e=Object(i["t"])(e),we(e,t)}function xe(e=Object(r["d"])(),t){e=Object(i["t"])(e);const n=Object(r["b"])(e,je),o=n.getImmediate({identifier:t});return o}function Se(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Ce(n,i,o,t,r["a"])}function Pe(){Object(r["c"])(new o["a"](je,Se,"PUBLIC").setMultipleInstances(!0)),Object(r["f"])(ke,Ie,""),Object(r["f"])(ke,Ie,"esm2017")}Pe()},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return H})),n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return q})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return Y}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
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
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.21",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",v="@firebase/auth",m="@firebase/auth-compat",_="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",C="@firebase/installations-compat",k="@firebase/messaging",I="@firebase/messaging-compat",j="@firebase/performance",E="@firebase/performance-compat",T="@firebase/remote-config",x="@firebase/remote-config-compat",S="@firebase/storage",P="@firebase/storage-compat",R="@firebase/firestore",N="@firebase/firestore-compat",A="firebase",L="9.6.11",M="[DEFAULT]",D={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[m]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[C]:"fire-iid-compat",[k]:"fire-fcm",[I]:"fire-fcm-compat",[j]:"fire-perf",[E]:"fire-perf-compat",[T]:"fire-rc",[x]:"fire-rc-compat",[S]:"fire-gcs",[P]:"fire-gcs-compat",[R]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[A]:"fire-js-all"},F=new Map,$=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e){const t=e.name;if($.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;$.set(t,e);for(const n of F.values())U(n,e);return!0}function V(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},W=new o["b"]("app","Firebase",z);
/**
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
 */
class B{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
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
 */const H=L;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw W.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["q"])(e,s.options)&&Object(o["q"])(n,s.config))return s;throw W.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of $.values())a.addComponent(r);const c=new B(e,n,a);return F.set(i,c),c}function K(e=M){const t=F.get(e);if(!t)throw W.create("no-app",{appName:e});return t}function Y(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
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
 */
const J="firebase-heartbeat-database",Q=1,X="firebase-heartbeat-store";let Z=null;function ee(){return Z||(Z=Object(o["G"])(J,Q,(e,t)=>{switch(t){case 0:e.createObjectStore(X)}}).catch(e=>{throw W.create("storage-open",{originalErrorMessage:e.message})})),Z}async function te(e){try{const t=await ee();return t.transaction(X).objectStore(X).get(re(e))}catch(t){throw W.create("storage-get",{originalErrorMessage:t.message})}}async function ne(e,t){try{const n=await ee(),r=n.transaction(X,"readwrite"),i=r.objectStore(X);return await i.put(t,re(e)),r.complete}catch(n){throw W.create("storage-set",{originalErrorMessage:n.message})}}function re(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const ie=1024,oe=2592e6;class se{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ue(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(e=>e.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=oe}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ae(),{heartbeatsToSend:t,unsentEntries:n}=ce(this._heartbeatsCache.heartbeats),r=Object(o["k"])(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ae(){const e=new Date;return e.toISOString().substring(0,10)}function ce(e,t=ie){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),le(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),le(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(o["z"])()&&Object(o["N"])().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await te(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function le(e){return Object(o["k"])(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function he(e){q(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),q(new r["a"]("heartbeat",e=>new se(e),"PRIVATE")),Y(c,u,e),Y(c,u,"esm2017"),Y("fire-js","")}he("")},"58a8":function(e,t,n){var r=n("e330"),i=n("1d80"),o=n("577e"),s=n("5899"),a=r("".replace),c="["+s+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(e){return function(t){var n=o(i(t));return 1&e&&(n=a(n,u,"")),2&e&&(n=a(n,l,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5a34":function(e,t,n){var r=n("da84"),i=n("44e7"),o=r.TypeError;e.exports=function(e){if(i(e))throw o("The method doesn't accept regular expressions");return e}},"5a47":function(e,t,n){var r=n("23e7"),i=n("4930"),o=n("d039"),s=n("7418"),a=n("7b0b"),c=!i||o((function(){s.f(1)}));r({target:"Object",stat:!0,forced:c},{getOwnPropertySymbols:function(e){var t=s.f;return t?t(a(e)):[]}})},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"5e7e":function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("605d"),l=n("da84"),h=n("c65b"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),g=n("d44e"),v=n("2626"),m=n("59ed"),_=n("1626"),b=n("861d"),y=n("19aa"),w=n("4840"),O=n("2cf4").set,C=n("b575"),k=n("44de"),I=n("e667"),j=n("01b4"),E=n("69f3"),T=n("d256"),x=n("4738"),S=n("f069"),P="Promise",R=x.CONSTRUCTOR,N=x.REJECTION_EVENT,A=x.SUBCLASSING,L=E.getterFor(P),M=E.set,D=T&&T.prototype,F=T,$=D,U=l.TypeError,q=l.document,V=l.process,z=S.f,W=z,B=!!(q&&q.createEvent&&l.dispatchEvent),H="unhandledrejection",G="rejectionhandled",K=0,Y=1,J=2,Q=1,X=2,Z=function(e){var t;return!(!b(e)||!_(t=e.then))&&t},ee=function(e,t){var n,r,i,o=t.value,s=t.state==Y,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===X&&oe(t),t.rejection=Q),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(U("Promise-chain cycle")):(r=Z(n))?h(r,n,c,u):c(n)):u(o)}catch(d){l&&!i&&l.exit(),u(d)}},te=function(e,t){e.notified||(e.notified=!0,C((function(){var n,r=e.reactions;while(n=r.get())ee(n,e);e.notified=!1,t&&!e.rejection&&re(e)})))},ne=function(e,t,n){var r,i;B?(r=q.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),l.dispatchEvent(r)):r={promise:t,reason:n},!N&&(i=l["on"+e])?i(r):e===H&&k("Unhandled promise rejection",n)},re=function(e){h(O,l,(function(){var t,n=e.facade,r=e.value,i=ie(e);if(i&&(t=I((function(){u?V.emit("unhandledRejection",r,n):ne(H,n,r)})),e.rejection=u||ie(e)?X:Q,t.error))throw t.value}))},ie=function(e){return e.rejection!==Q&&!e.parent},oe=function(e){h(O,l,(function(){var t=e.facade;u?V.emit("rejectionHandled",t):ne(G,t,e.value)}))},se=function(e,t,n){return function(r){e(t,r,n)}},ae=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=J,te(e,!0))},ce=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw U("Promise can't be resolved itself");var r=Z(t);r?C((function(){var n={done:!1};try{h(r,t,se(ce,n,e),se(ae,n,e))}catch(i){ae(n,i,e)}})):(e.value=t,e.state=Y,te(e,!1))}catch(i){ae({done:!1},i,e)}}};if(R&&(F=function(e){y(this,$),m(e),h(r,this);var t=L(this);try{e(se(ce,t),se(ae,t))}catch(n){ae(t,n)}},$=F.prototype,r=function(e){M(this,{type:P,done:!1,notified:!1,parent:!1,reactions:new j,rejection:!1,state:K,value:void 0})},r.prototype=f($,{then:function(e,t){var n=L(this),r=z(w(this,F));return n.parent=!0,r.ok=!_(e)||e,r.fail=_(t)&&t,r.domain=u?V.domain:void 0,n.state==K?n.reactions.add(r):C((function(){ee(r,n)})),r.promise}}),i=function(){var e=new r,t=L(e);this.promise=e,this.resolve=se(ce,t),this.reject=se(ae,t)},S.f=z=function(e){return e===F||e===o?new i(e):W(e)},!c&&_(T)&&D!==Object.prototype)){s=D.then,A||d(D,"then",(function(e,t){var n=this;return new F((function(e,t){h(s,n,e,t)})).then(e,t)}),{unsafe:!0});try{delete D.constructor}catch(ue){}p&&p(D,$)}a({global:!0,wrap:!0,forced:R},{Promise:F}),g(F,P,!1,!0),v(P)},"5eed":function(e,t,n){var r=n("d256"),i=n("1c7e"),o=n("4738").CONSTRUCTOR;e.exports=o||!i((function(e){r.all(e).then(void 0,(function(){}))}))},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window&&"object"!=typeof Deno},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||s((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,d=c.f,f=u.f;while(i>s){var g,v=h(arguments[s++]),m=d?p(a(v),d(v)):a(v),_=m.length,b=0;while(_>b)g=m[b++],r&&!o(f,v,g)||(n[g]=v[g])}return n}:d},"62e4":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"66ce":function(e,t,n){"use strict";var r=n("51b0");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]})),n.d(t,"f",(function(){return r["f"]})),n.d(t,"g",(function(){return r["g"]})),n.d(t,"h",(function(){return r["h"]}))},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(u),g=function(e){if(!o(e))return!1;try{return h(u,l,e),!0}catch(t){return!1}},v=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(e))}catch(t){return!0}};v.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?v:g},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),g="Object already initialized",v=a.TypeError,m=a.WeakMap,_=function(e){return o(e)?i(e):r(e,{})},b=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||d.state){var y=d.state||(d.state=new m),w=c(y.get),O=c(y.has),C=c(y.set);r=function(e,t){if(O(y,e))throw new v(g);return t.facade=e,C(y,e,t),t},i=function(e){return w(y,e)||{}},o=function(e){return O(y,e)}}else{var k=f("state");p[k]=!0,r=function(e,t){if(h(e,k))throw new v(g);return t.facade=e,l(e,k,t),t},i=function(e){return h(e,k)?e[k]:{}},o=function(e){return h(e,k)}}e.exports={set:r,get:i,has:o,enforce:_,getterFor:b}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return W}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const v=/\/$/,m=e=>e.replace(v,"");function _(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=j(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function y(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&C(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function C(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function j(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function x(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),m(e)}const S=/^[^#]+#/;function P(e,t){return e.replace(S,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function F(e){const t=M.get(e);return M.delete(e),t}let $=()=>location.protocol+"//"+location.host;function U(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),y(n,"")}const s=y(n,e);return s+r+i}function q(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=U(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:N()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function V(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function z(e){const{history:t,location:n}=window,r={value:U(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:$()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,V(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:N()});o(s.current,s,!0);const a=f({},V(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function W(e){e=x(e);const t=z(e),n=q(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:P.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function J(e,t){return f(new Error,{type:e,[K]:!0},t)}function Q(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const X="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const h=c||X;if(h!==X){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ae(e,t,n){const r=te(se(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ae(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!de(h)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:g}function s(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!de(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw J(1,{location:e});s=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw J(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:he(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function he(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function de(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some(t=>t===e||ge(e,t))}const ve=/#/g,me=/&/g,_e=/\//g,be=/=/g,ye=/\?/g,we=/\+/g,Oe=/%5B/g,Ce=/%5D/g,ke=/%5E/g,Ie=/%60/g,je=/%7B/g,Ee=/%7C/g,Te=/%7D/g,xe=/%20/g;function Se(e){return encodeURI(""+e).replace(Ee,"|").replace(Oe,"[").replace(Ce,"]")}function Pe(e){return Se(e).replace(je,"{").replace(Te,"}").replace(ke,"^")}function Re(e){return Se(e).replace(we,"%2B").replace(xe,"+").replace(ve,"%23").replace(me,"%26").replace(Ie,"`").replace(je,"{").replace(Te,"}").replace(ke,"^")}function Ne(e){return Re(e).replace(be,"%3D")}function Ae(e){return Se(e).replace(ve,"%23").replace(ye,"%3F")}function Le(e){return null==e?"":Ae(e).replace(_e,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(we," "),n=e.indexOf("="),o=Me(n<0?e:e.slice(0,n)),s=n<0?null:Me(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=Ne(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Re(e)):[r&&Re(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function $e(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(J(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(J(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Ve(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(ze(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(qe(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&qe(c,n,r,o,e)()}))}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=Object(r["o"])(c),n=Object(r["o"])(u),i=Object(r["c"])(()=>t.resolve(Object(r["L"])(e.to))),o=Object(r["c"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["c"])(()=>o.value>-1&&Ke(n.params,i.value.params)),a=Object(r["c"])(()=>o.value>-1&&o.value===n.matched.length-1&&C(n.params,i.value.params));function l(n={}){return Ge(n)?t[Object(r["L"])(e.replace)?"replace":"push"](Object(r["L"])(e.to)).catch(g):Promise.resolve()}return{route:i,href:Object(r["c"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const Be=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=Object(r["E"])(We(e)),{options:i}=Object(r["o"])(c),o=Object(r["c"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["n"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=Be;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["o"])(l),o=Object(r["c"])(()=>e.route||i.value),c=Object(r["o"])(a,0),u=Object(r["c"])(()=>o.value.matched[c]);Object(r["C"])(a,c+1),Object(r["C"])(s,u),Object(r["C"])(l,o);const h=Object(r["F"])();return Object(r["P"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Xe(n.default,{Component:a,route:i});const l=s.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},g=Object(r["n"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Xe(n.default,{Component:g,route:i})||g}}});function Xe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Qe;function et(e){const t=ce(e.routes,e),n=e.parseQuery||De,i=e.stringifyQuery||Fe,o=e.history;const s=Ue(),a=Ue(),d=Ue(),v=Object(r["J"])(G);let m=G;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=p.bind(null,e=>""+e),O=p.bind(null,Le),C=p.bind(null,Me);function k(e,n){let r,i;return H(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function j(){return t.getRoutes().map(e=>e.record)}function T(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=f({},r||v.value),"string"===typeof e){const i=_(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:C(s.params),hash:Me(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:_(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=y(C(a.params));const u=b(i,f({},e,{hash:Pe(c),path:a.path})),l=o.createHref(u);return f({fullPath:u,hash:c,query:i===Fe?$e(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function S(e){return"string"===typeof e?_(n,e,v.value.path):f({},e)}function P(e,t){if(m!==e)return J(8,{from:t,to:e})}function R(e){return U(e)}function M(e){return R(f(S(e),{replace:!0}))}function $(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function U(e,t){const n=m=x(e),r=v.value,o=e.state,s=e.force,a=!0===e.replace,c=$(n);if(c)return U(f(S(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(i,r,n)&&(l=J(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):V(u,r)).catch(e=>Q(e)?Q(e,2)?e:ne(e):ee(e,u,r)).then(e=>{if(e){if(Q(e,2))return U(f(S(e.to),{state:o,force:s,replace:a}),t||u)}else e=W(u,r,!0,a,o);return z(u,r,e),e})}function q(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function V(e,t){let n;const[r,i,o]=nt(e,t);n=Ve(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(qe(r,e,t))});const c=q.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const r of s.list())n.push(qe(r,e,t));return n.push(c),tt(n)}).then(()=>{n=Ve(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(qe(r,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Ve(o,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const r of a.list())n.push(qe(r,e,t));return n.push(c),tt(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function z(e,t,n){for(const r of d.list())r(e,t,n)}function W(e,t,n,r,i){const s=P(e,t);if(s)return s;const a=t===G,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),v.value=e,re(e,t,n,a),ne()}let B;function K(){B=o.listen((e,t,n)=>{const r=x(e),i=$(r);if(i)return void U(f(i,{replace:!0}),r).catch(g);m=r;const s=v.value;h&&D(L(s.fullPath,n.delta),N()),V(r,s).catch(e=>Q(e,12)?e:Q(e,2)?(U(e.to,r).then(e=>{Q(e,20)&&!n.delta&&n.type===E.pop&&o.go(-1,!1)}).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||W(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===E.pop&&Q(e,20)&&o.go(-1,!1)),z(r,s,e)}).catch(g)})}let Y,X=Ue(),Z=Ue();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return Y&&v.value!==G?Promise.resolve():new Promise((e,t)=>{X.add([e,t])})}function ne(e){return Y||(Y=!e,K(),X.list().forEach(([t,n])=>e?n(e):t()),X.reset()),e}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();const a=!i&&F(L(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["s"])().then(()=>s(t,n,a)).then(e=>e&&A(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:v,addRoute:k,removeRoute:I,hasRoute:T,getRoutes:j,resolve:x,options:e,push:R,replace:M,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["L"])(v)}),h&&!oe&&v.value===G&&(oe=!0,R(o.location).catch(e=>{0}));const n={};for(const o in G)n[o]=Object(r["c"])(()=>v.value[o]);e.provide(c,t),e.provide(u,Object(r["E"])(n)),e.provide(l,v);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=G,B&&B(),v.value=G,oe=!1,Y=!1),i()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==v)&&s(n,"name",v),u=d(n),u.source||(u.source=f.join("string"==typeof v?v:""))),e!==r?(h?!g&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7149:function(e,t,n){"use strict";var r=n("23e7"),i=n("d066"),o=n("c430"),s=n("d256"),a=n("4738").CONSTRUCTOR,c=n("cdf9"),u=i("Promise"),l=o&&!a;r({target:"Promise",stat:!0,forced:o||a},{resolve:function(e){return c(l&&this===u?s:this,e)}})},7156:function(e,t,n){var r=n("1626"),i=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var s,a;return o&&r(s=t.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("1a2d"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"p",(function(){return Ce})),n.d(t,"q",(function(){return ke})),n.d(t,"r",(function(){return Ne})),n.d(t,"E",(function(){return be})),n.d(t,"F",(function(){return Ae})),n.d(t,"J",(function(){return Le})),n.d(t,"L",(function(){return Fe})),n.d(t,"t",(function(){return r["J"]})),n.d(t,"u",(function(){return r["K"]})),n.d(t,"K",(function(){return r["M"]})),n.d(t,"a",(function(){return mr})),n.d(t,"c",(function(){return yi})),n.d(t,"e",(function(){return xr})),n.d(t,"f",(function(){return Vr})),n.d(t,"g",(function(){return Tr})),n.d(t,"h",(function(){return Lr})),n.d(t,"i",(function(){return qr})),n.d(t,"j",(function(){return Ur})),n.d(t,"k",(function(){return Mr})),n.d(t,"l",(function(){return Zt})),n.d(t,"m",(function(){return ii})),n.d(t,"n",(function(){return wi})),n.d(t,"o",(function(){return Mt})),n.d(t,"s",(function(){return st})),n.d(t,"v",(function(){return rn})),n.d(t,"w",(function(){return dn})),n.d(t,"x",(function(){return vn})),n.d(t,"y",(function(){return on})),n.d(t,"z",(function(){return mn})),n.d(t,"A",(function(){return Cr})),n.d(t,"B",(function(){return It})),n.d(t,"C",(function(){return Lt})),n.d(t,"D",(function(){return kt})),n.d(t,"G",(function(){return Kr})),n.d(t,"H",(function(){return Yr})),n.d(t,"I",(function(){return fr})),n.d(t,"P",(function(){return Ft})),n.d(t,"Q",(function(){return jt})),n.d(t,"R",(function(){return Xn})),n.d(t,"b",(function(){return to})),n.d(t,"d",(function(){return Do})),n.d(t,"M",(function(){return Co})),n.d(t,"N",(function(){return Oo})),n.d(t,"O",(function(){return Ro})),n.d(t,"S",(function(){return Po})),n.d(t,"T",(function(){return xo}));var r=n("9ff4");let i;class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function s(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let v;const m=Symbol(""),_=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let e=v,t=w;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,w=!0,p=1<<++f,f<=g?l(this):y(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,v=this.parent,w=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(y(this),this.onStop&&this.onStop(),this.active=!1)}}function y(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let w=!0;const O=[];function C(){O.push(w),w=!1}function k(){const e=O.pop();w=void 0===e||e}function I(e,t,n){if(w&&v){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;j(r,i)}}function j(e,t){let n=!1;f<=g?u(e)||(e.n|=p,n=!c(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function E(e,t,n,i,o,s){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&Object(r["o"])(e))c.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(c.get(n)),t){case"add":Object(r["o"])(e)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(m)),Object(r["u"])(e)&&u.push(c.get(_)));break;case"delete":Object(r["o"])(e)||(u.push(c.get(m)),Object(r["u"])(e)&&u.push(c.get(_)));break;case"set":Object(r["u"])(e)&&u.push(c.get(m));break}if(1===u.length)u[0]&&T(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);T(a(e))}}function T(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const x=Object(r["I"])("__proto__,__v_isRef,__isVue"),S=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["F"])),P=M(),R=M(!1,!0),N=M(!0),A=L();function L(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,i=this.length;t<i;t++)I(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){C();const n=Ee(this)[t].apply(this,e);return k(),n}}),e}function M(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?ve:ge:t?pe:fe).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(A,i))return Reflect.get(A,i,o);const a=Reflect.get(n,i,o);if(Object(r["F"])(i)?S.has(i):x(i))return a;if(e||I(n,"get",i),t)return a;if(Ne(a)){const e=!s||!Object(r["t"])(i);return e?a.value:a}return Object(r["w"])(a)?e?we(a):be(a):a}}const D=$(),F=$(!0);function $(e=!1){return function(t,n,i,o){let s=t[n];if(ke(s)&&Ne(s)&&!Ne(i))return!1;if(!e&&!ke(i)&&(Ie(i)||(i=Ee(i),s=Ee(s)),!Object(r["o"])(t)&&Ne(s)&&!Ne(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["t"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===Ee(o)&&(a?Object(r["j"])(i,s)&&E(t,"set",n,i,s):E(t,"add",n,i)),c}}function U(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&E(e,"delete",t,void 0,i),o}function q(e,t){const n=Reflect.has(e,t);return Object(r["F"])(t)&&S.has(t)||I(e,"has",t),n}function V(e){return I(e,"iterate",Object(r["o"])(e)?"length":m),Reflect.ownKeys(e)}const z={get:P,set:D,deleteProperty:U,has:q,ownKeys:V},W={get:N,set(e,t){return!0},deleteProperty(e,t){return!0}},B=Object(r["h"])({},z,{get:R,set:F}),H=e=>e,G=e=>Reflect.getPrototypeOf(e);function K(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ee(e),o=Ee(t);t!==o&&!n&&I(i,"get",t),!n&&I(i,"get",o);const{has:s}=G(i),a=r?H:n?Se:xe;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Ee(n),i=Ee(e);return e!==i&&!t&&I(r,"has",e),!t&&I(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function J(e,t=!1){return e=e["__v_raw"],!t&&I(Ee(e),"iterate",m),Reflect.get(e,"size",e)}function Q(e){e=Ee(e);const t=Ee(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),E(t,"add",e,e)),this}function X(e,t){t=Ee(t);const n=Ee(this),{has:i,get:o}=G(n);let s=i.call(n,e);s||(e=Ee(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&E(n,"set",e,t,a):E(n,"add",e,t),this}function Z(e){const t=Ee(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&E(t,"delete",e,void 0,o),s}function ee(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&E(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ee(o),a=t?H:e?Se:xe;return!e&&I(s,"iterate",m),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function ne(e,t,n){return function(...i){const o=this["__v_raw"],s=Ee(o),a=Object(r["u"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?H:t?Se:xe;return!t&&I(s,"iterate",u?_:m),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return K(this,e)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return K(this,e,!1,!0)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return K(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return K(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)}),[e,n,t,r]}const[oe,se,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?se:oe;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,ge=new WeakMap,ve=new WeakMap;function me(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _e(e){return e["__v_skip"]||!Object.isExtensible(e)?0:me(Object(r["P"])(e))}function be(e){return ke(e)?e:Oe(e,!1,z,le,fe)}function ye(e){return Oe(e,!1,B,he,pe)}function we(e){return Oe(e,!0,W,de,ge)}function Oe(e,t,n,i,o){if(!Object(r["w"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=_e(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Ce(e){return ke(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function je(e){return Ce(e)||ke(e)}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Te(e){return Object(r["g"])(e,"__v_skip",!0),e}const xe=e=>Object(r["w"])(e)?be(e):e,Se=e=>Object(r["w"])(e)?we(e):e;function Pe(e){w&&v&&(e=Ee(e),j(e.dep||(e.dep=a())))}function Re(e,t){e=Ee(e),e.dep&&T(e.dep)}function Ne(e){return!(!e||!0!==e.__v_isRef)}function Ae(e){return Me(e,!1)}function Le(e){return Me(e,!0)}function Me(e,t){return Ne(e)?e:new De(e,t)}class De{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:xe(e)}get value(){return Pe(this),this._value}set value(e){e=this.__v_isShallow?e:Ee(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:xe(e),Re(this,e))}}function Fe(e){return Ne(e)?e.value:e}const $e={get:(e,t,n)=>Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ue(e){return Ce(e)?e:new Proxy(e,$e)}class qe{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(e,()=>{this._dirty||(this._dirty=!0,Re(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return Pe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ve(e,t,n=!1){let i,o;const s=Object(r["q"])(e);s?(i=e,o=r["d"]):(i=e.get,o=e.set);const a=new qe(i,o,s||!o,n);return a}function ze(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Be(o,t,n)}return i}function We(e,t,n,i){if(Object(r["q"])(e)){const o=ze(e,t,n,i);return o&&Object(r["z"])(o)&&o.catch(e=>{Be(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(We(e[r],t,n,i));return o}function Be(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void ze(s,null,10,[e,i,o])}He(e,n,i,r)}function He(e,t,n,r=!0){console.error(e)}let Ge=!1,Ke=!1;const Ye=[];let Je=0;const Qe=[];let Xe=null,Ze=0;const et=[];let tt=null,nt=0;const rt=Promise.resolve();let it=null,ot=null;function st(e){const t=it||rt;return e?t.then(this?e.bind(this):e):t}function at(e){let t=Je+1,n=Ye.length;while(t<n){const r=t+n>>>1,i=vt(Ye[r]);i<e?t=r+1:n=r}return t}function ct(e){Ye.length&&Ye.includes(e,Ge&&e.allowRecurse?Je+1:Je)||e===ot||(null==e.id?Ye.push(e):Ye.splice(at(e.id),0,e),ut())}function ut(){Ge||Ke||(Ke=!0,it=rt.then(mt))}function lt(e){const t=Ye.indexOf(e);t>Je&&Ye.splice(t,1)}function ht(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ut()}function dt(e){ht(e,Xe,Qe,Ze)}function ft(e){ht(e,tt,et,nt)}function pt(e,t=null){if(Qe.length){for(ot=t,Xe=[...new Set(Qe)],Qe.length=0,Ze=0;Ze<Xe.length;Ze++)Xe[Ze]();Xe=null,Ze=0,ot=null,pt(e,t)}}function gt(e){if(et.length){const e=[...new Set(et)];if(et.length=0,tt)return void tt.push(...e);for(tt=e,tt.sort((e,t)=>vt(e)-vt(t)),nt=0;nt<tt.length;nt++)tt[nt]();tt=null,nt=0}}const vt=e=>null==e.id?1/0:e.id;function mt(e){Ke=!1,Ge=!0,pt(e),Ye.sort((e,t)=>vt(e)-vt(t));r["d"];try{for(Je=0;Je<Ye.length;Je++){const e=Ye[Je];e&&!1!==e.active&&ze(e,null,14)}}finally{Je=0,Ye.length=0,gt(e),Ge=!1,it=null,(Ye.length||Qe.length||et.length)&&mt(e)}}new Set;new Map;function _t(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["O"]))}let c;let u=i[c=Object(r["N"])(t)]||i[c=Object(r["N"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["N"])(Object(r["l"])(t))]),u&&We(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,We(l,e,6,o)}}function bt(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["q"])(e)){const i=e=>{const n=bt(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function yt(e,t){return!(!e||!Object(r["x"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let wt=null,Ot=null;function Ct(e){const t=wt;return wt=e,Ot=e&&e.type.__scopeId||null,t}function kt(e){Ot=e}function It(){Ot=null}function jt(e,t=wt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&jr(-1);const i=Ct(t),o=e(...n);return Ct(i),r._d&&jr(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Et(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:g,inheritAttrs:v}=e;let m,_;const b=Ct(e);try{if(4&n.shapeFlag){const e=o||i;m=zr(h.call(e,e,d,s,p,f,g)),_=u}else{const e=t;0,m=zr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),_=t.props?u:Tt(u)}}catch(w){wr.length=0,Be(w,e,1),m=Mr(br)}let y=m;if(_&&!1!==v){const e=Object.keys(_),{shapeFlag:t}=y;e.length&&7&t&&(a&&e.some(r["v"])&&(_=xt(_,a)),y=$r(y,_))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),m=y,Ct(b),m}const Tt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["x"])(n))&&((t||(t={}))[n]=e[n]);return t},xt=(e,t)=>{const n={};for(const i in e)Object(r["v"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function St(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||Pt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?Pt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!yt(u,n))return!0}}return!1}function Pt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!yt(n,o))return!0}return!1}function Rt({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Nt=e=>e.__isSuspense;function At(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):ft(e)}function Lt(e,t){if(ri){let n=ri.provides;const r=ri.parent&&ri.parent.provides;r===n&&(n=ri.provides=Object.create(r)),n[e]=t}else 0}function Mt(e,t,n=!1){const i=ri||wt;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["q"])(t)?t.call(i.proxy):t}else 0}const Dt={};function Ft(e,t,n){return $t(e,t,n)}function $t(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=ri;let u,l,h=!1,d=!1;if(Ne(e)?(u=()=>e.value,h=Ie(e)):Ce(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Ce),u=()=>e.map(e=>Ne(e)?e.value:Ce(e)?Vt(e):Object(r["q"])(e)?ze(e,c,2):void 0)):u=Object(r["q"])(e)?t?()=>ze(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),We(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>Vt(e())}let f=e=>{l=m.onStop=()=>{ze(e,c,4)}};if(li)return f=r["d"],t?n&&We(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:Dt;const g=()=>{if(m.active)if(t){const e=m.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),We(t,c,3,[e,p===Dt?void 0:p,f]),p=e)}else m.run()};let v;g.allowRecurse=!!t,v="sync"===o?g:"post"===o?()=>or(g,c&&c.suspense):()=>{!c||c.isMounted?dt(g):g()};const m=new b(u,v);return t?n?g():p=m.run():"post"===o?or(m.run.bind(m),c&&c.suspense):m.run(),()=>{m.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,m)}}function Ut(e,t,n){const i=this.proxy,o=Object(r["E"])(e)?e.includes(".")?qt(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["q"])(t)?s=t:(s=t.handler,n=t);const a=ri;oi(this);const c=$t(o,s.bind(i),n);return a?oi(a):si(),c}function qt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Vt(e,t){if(!Object(r["w"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Ne(e))Vt(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Vt(e[n],t);else if(Object(r["C"])(e)||Object(r["u"])(e))e.forEach(e=>{Vt(e,t)});else if(Object(r["y"])(e))for(const n in e)Vt(e[n],t);return e}function zt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fn(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const Wt=[Function,Array],Bt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},setup(e,{slots:t}){const n=ii(),r=zt();let i;return()=>{const o=t.default&&Xt(t.default(),!0);if(!o||!o.length)return;let s=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==br){0,s=t,e=!0;break}}const a=Ee(e),{mode:c}=a;if(r.isLeaving)return Yt(s);const u=Jt(s);if(!u)return Yt(s);const l=Kt(u,a,r,n);Qt(u,l);const h=n.subTree,d=h&&Jt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==br&&(!Pr(u,d)||f)){const e=Kt(d,a,r,n);if(Qt(d,e),"out-in"===c)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Yt(s);"in-out"===c&&u.type!==br&&(e.delayLeave=(e,t,n)=>{const i=Gt(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return s}}},Ht=Bt;function Gt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Kt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:v,onAfterAppear:m,onAppearCancelled:_}=t,b=String(e.key),y=Gt(n,e),w=(e,t)=>{e&&We(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const o=y[b];o&&Pr(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=v||c,r=m||u,o=_||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,y[i]===e&&delete y[i])};y[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return Kt(e,t,n,r)}};return O}function Yt(e){if(tn(e))return e=$r(e),e.children=null,e}function Jt(e){return tn(e)?e.children?e.children[0]:void 0:e}function Qt(e,t){6&e.shapeFlag&&e.component?Qt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Xt(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let s=e[o];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:o);s.type===mr?(128&s.patchFlag&&i++,r=r.concat(Xt(s.children,t,a))):(t||s.type!==br)&&r.push(null!=a?$r(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Zt(e){return Object(r["q"])(e)?{setup:e,name:e.name}:e}const en=e=>!!e.type.__asyncLoader;const tn=e=>e.type.__isKeepAlive;RegExp,RegExp;function nn(e,t){return Object(r["o"])(e)?e.some(e=>nn(e,t)):Object(r["E"])(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function rn(e,t){sn(e,"a",t)}function on(e,t){sn(e,"da",t)}function sn(e,t,n=ri){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ln(t,r,n),n){let e=n.parent;while(e&&e.parent)tn(e.parent.vnode)&&an(r,t,n,e),e=e.parent}}function an(e,t,n,i){const o=ln(t,e,i,!0);mn(()=>{Object(r["L"])(i[t],o)},n)}function cn(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function un(e){return 128&e.shapeFlag?e.ssContent:e}function ln(e,t,n=ri,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;C(),oi(n);const i=We(t,n,e,r);return si(),k(),i});return r?i.unshift(o):i.push(o),o}}const hn=e=>(t,n=ri)=>(!li||"sp"===e)&&ln(e,t,n),dn=hn("bm"),fn=hn("m"),pn=hn("bu"),gn=hn("u"),vn=hn("bum"),mn=hn("um"),_n=hn("sp"),bn=hn("rtg"),yn=hn("rtc");function wn(e,t=ri){ln("ec",e,t)}let On=!0;function Cn(e){const t=En(e),n=e.proxy,i=e.ctx;On=!1,t.beforeCreate&&In(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:y,unmounted:w,render:O,renderTracked:C,renderTriggered:k,errorCaptured:I,serverPrefetch:j,expose:E,inheritAttrs:T,components:x,directives:S,filters:P}=t,R=null;if(l&&kn(l,i,R,e.appContext.config.unwrapInjectedRef),a)for(const A in a){const e=a[A];Object(r["q"])(e)&&(i[A]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["w"])(t)&&(e.data=be(t))}if(On=!0,s)for(const A in s){const e=s[A],t=Object(r["q"])(e)?e.bind(n,n):Object(r["q"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["q"])(e)&&Object(r["q"])(e.set)?e.set.bind(n):r["d"],a=yi({get:t,set:o});Object.defineProperty(i,A,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)jn(c[r],i,n,r);if(u){const e=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{Lt(t,e[t])})}function N(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&In(h,e,"c"),N(dn,d),N(fn,f),N(pn,p),N(gn,g),N(rn,v),N(on,m),N(wn,I),N(yn,C),N(bn,k),N(vn,b),N(mn,w),N(_n,j),Object(r["o"])(E))if(E.length){const t=e.exposed||(e.exposed={});E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=T&&(e.inheritAttrs=T),x&&(e.components=x),S&&(e.directives=S)}function kn(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Rn(e));for(const o in e){const n=e[o];let s;s=Object(r["w"])(n)?"default"in n?Mt(n.from||o,n.default,!0):Mt(n.from||o):Mt(n),Ne(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function In(e,t,n){We(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function jn(e,t,n,i){const o=i.includes(".")?qt(n,i):()=>n[i];if(Object(r["E"])(e)){const n=t[e];Object(r["q"])(n)&&Ft(o,n)}else if(Object(r["q"])(e))Ft(o,e.bind(n));else if(Object(r["w"])(e))if(Object(r["o"])(e))e.forEach(e=>jn(e,t,n,i));else{const i=Object(r["q"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["q"])(i)&&Ft(o,i,e)}else 0}function En(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Tn(c,e,s,!0)),Tn(c,t,s)):c=t,o.set(t,c),c}function Tn(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Tn(e,o,n,!0),i&&i.forEach(t=>Tn(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=xn[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const xn={data:Sn,props:An,emits:An,methods:An,computed:An,beforeCreate:Nn,created:Nn,beforeMount:Nn,mounted:Nn,beforeUpdate:Nn,updated:Nn,beforeDestroy:Nn,beforeUnmount:Nn,destroyed:Nn,unmounted:Nn,activated:Nn,deactivated:Nn,errorCaptured:Nn,serverPrefetch:Nn,components:An,directives:An,watch:Ln,provide:Sn,inject:Pn};function Sn(e,t){return t?e?function(){return Object(r["h"])(Object(r["q"])(e)?e.call(this,this):e,Object(r["q"])(t)?t.call(this,this):t)}:t:e}function Pn(e,t){return An(Rn(e),Rn(t))}function Rn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Nn(e,t){return e?[...new Set([].concat(e,t))]:t}function An(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function Ln(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Nn(e[r],t[r]);return n}function Mn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,Rr,1),e.propsDefaults=Object.create(null),Fn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:ye(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function Dn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=Ee(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;Fn(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=$n(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];if(yt(e.emitsOptions,a))continue;const h=t[a];if(u)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const t=Object(r["e"])(a);o[t]=$n(u,c,t,h,e,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&E(e,"set","$attrs")}function Fn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["A"])(u))continue;const l=t[u];let h;o&&Object(r["k"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:yt(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(s){const t=Ee(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=$n(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function $n(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["q"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(oi(o),i=r[n]=e.call(null,t),si())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function Un(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["q"])(e)){const i=e=>{u=!0;const[n,i]=Un(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);qn(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(qn(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(i){const e=Wn(Boolean,i.type),n=Wn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function qn(e){return"$"!==e[0]}function Vn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function zn(e,t){return Vn(e)===Vn(t)}function Wn(e,t){return Object(r["o"])(t)?t.findIndex(t=>zn(t,e)):Object(r["q"])(t)&&zn(t,e)?0:-1}const Bn=e=>"_"===e[0]||"$stable"===e,Hn=e=>Object(r["o"])(e)?e.map(zr):[zr(e)],Gn=(e,t,n)=>{const r=jt((...e)=>Hn(t(...e)),n);return r._c=!1,r},Kn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(Bn(o))continue;const n=e[o];if(Object(r["q"])(n))t[o]=Gn(o,n,i);else if(null!=n){0;const e=Hn(n);t[o]=()=>e}}},Yn=(e,t)=>{const n=Hn(t);e.slots.default=()=>n},Jn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ee(t),Object(r["g"])(t,"_",n)):Kn(t,e.slots={})}else e.slots={},t&&Yn(e,t);Object(r["g"])(e.slots,Rr,1)},Qn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,Kn(t,o)),a=t}else t&&(Yn(e,t),a={default:1});if(s)for(const r in o)Bn(r)||r in a||delete o[r]};function Xn(e,t){const n=wt;if(null===n)return e;const i=mi(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["q"])(e)&&(e={mounted:e,updated:e}),e.deep&&Vt(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Zn(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(C(),We(c,n,8,[e.el,a,e,t]),k())}}function er(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tr=0;function nr(e,t){return function(n,i=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==i||Object(r["w"])(i)||(i=null);const o=er(),s=new Set;let a=!1;const c=o.app={_uid:tr++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Oi,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["q"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["q"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=Mr(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,mi(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function rr(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>rr(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(en(i)&&!o)return;const s=4&i.shapeFlag?mi(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):Ne(l)&&(l.value=null)),Object(r["q"])(u))ze(u,c,12,[a,h]);else{const t=Object(r["E"])(u),i=Ne(u);if(t||i){const i=()=>{if(e.f){const n=t?h[u]:u.value;o?Object(r["o"])(n)&&Object(r["L"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?(h[u]=[s],Object(r["k"])(d,u)&&(d[u]=h[u])):(u.value=[s],e.k&&(h[e.k]=u.value))}else t?(h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)):Ne(u)&&(u.value=a,e.k&&(h[e.k]=a))};a?(i.id=-1,or(i,n)):i()}else 0}}function ir(){}const or=At;function sr(e){return ar(e)}function ar(e,t){ir();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:v}=e,m=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Pr(e,t)&&(r=K(e),z(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case _r:_(e,t,n,r);break;case br:y(e,t,n,r);break;case yr:null==e&&w(t,n,r,s);break;case mr:N(e,t,n,r,i,o,s,a,c);break;default:1&h?j(e,t,n,r,i,o,s,a,c):6&h?A(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,J)}null!=l&&i&&rr(l,e&&e.ref,o,t||e,!t)},_=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},w=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},j=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?E(t,n,r,i,o,s,a,c):S(e,t,i,o,s,a,c)},E=(e,t,n,o,c,u,l,d)=>{let f,p;const{type:v,props:m,shapeFlag:_,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==g&&-1===y)f=e.el=g(e.el);else{if(f=e.el=a(e.type,u,m&&m.is,m),8&_?h(f,e.children):16&_&&x(e.children,f,null,o,c,u&&"foreignObject"!==v,l,d),w&&Zn(e,null,o,"created"),m){for(const t in m)"value"===t||Object(r["A"])(t)||s(f,t,null,m[t],u,e.children,o,c,G);"value"in m&&s(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&Gr(p,o,e)}T(f,e,e.scopeId,l,o)}w&&Zn(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),i(f,t,n),((p=m&&m.onVnodeMounted)||O||w)&&or(()=>{p&&Gr(p,o,e),O&&b.enter(f),w&&Zn(e,null,o,"mounted")},c)},T=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;T(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},x=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?Wr(e[u]):zr(e[u]);m(null,c,t,n,r,i,o,s,a)}},S=(e,t,n,i,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],g=t.props||r["b"];let v;n&&cr(n,!1),(v=g.onVnodeBeforeUpdate)&&Gr(v,n,t,e),f&&Zn(t,e,n,"beforeUpdate"),n&&cr(n,!0);const m=o&&"foreignObject"!==t.type;if(d?P(e.dynamicChildren,d,u,n,i,m,a):c||$(e,t,u,null,n,i,m,a,!1),l>0){if(16&l)R(u,t,p,g,n,i,o);else if(2&l&&p.class!==g.class&&s(u,"class",null,g.class,o),4&l&&s(u,"style",p.style,g.style,o),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=g[a];l===c&&"value"!==a||s(u,a,c,l,o,e.children,n,i,G)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||R(u,t,p,g,n,i,o);((v=g.onVnodeUpdated)||f)&&or(()=>{v&&Gr(v,n,t,e),f&&Zn(t,e,n,"updated")},i)},P=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===mr||!Pr(c,u)||70&c.shapeFlag)?d(c.el):n;m(c,u,l,null,r,i,o,s,!0)}},R=(e,t,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["A"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(e,u,h,l,c,t.children,o,a,G)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in i||s(e,u,n[u],null,c,t.children,o,a,G);"value"in i&&s(e,"value",n.value,i.value)}},N=(e,t,n,r,o,s,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(u=u?u.concat(g):g),null==e?(i(h,n,r),i(d,n,r),x(t.children,n,d,o,s,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,o,s,a,u),(null!=t.key||o&&t===o.subTree)&&ur(e,t,!0)):$(e,t,n,d,o,s,a,u,l)},A=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):M(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=ni(e,r,i);if(tn(e)&&(a.ctx.renderer=J),hi(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=Mr(br);y(null,e,t,n)}}else D(a,e,t,n,i,o,s)},M=(e,t,n)=>{const r=t.component=e.component;if(St(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,lt(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,h=n;0,cr(e,!1),n?(n.el=l.el,F(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Gr(t,u,n,l),cr(e,!0);const f=Et(e);0;const p=e.subTree;e.subTree=f,m(p,f,d(p.el),K(p),e,o,s),n.el=f.el,null===h&&Rt(e,f.el),c&&or(c,o),(t=n.props&&n.props.onVnodeUpdated)&&or(()=>Gr(t,u,n,l),o)}else{let a;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=en(t);if(cr(e,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&Gr(a,d,t),cr(e,!0),c&&X){const n=()=>{e.subTree=Et(e),X(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Et(e);0,m(null,r,n,i,e,o,s),t.el=r.el}if(h&&or(h,o),!f&&(a=u&&u.onVnodeMounted)){const e=t;or(()=>Gr(a,d,e),o)}256&t.shapeFlag&&e.a&&or(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new b(c,()=>ct(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,cr(e,!0),l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,Dn(e,t.props,r,n),Qn(e,t.children,n),C(),pt(void 0,e.update),k()},$=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void q(u,d,n,r,i,o,s,a,c);if(256&f)return void U(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&G(u,i,o),d!==u&&h(n,d)):16&l?16&p?q(u,d,n,r,i,o,s,a,c):G(u,i,o,!0):(8&l&&h(n,""),16&p&&x(d,n,r,i,o,s,a,c))},U=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?Wr(t[f]):zr(t[f]);m(e[f],r,n,null,o,s,a,c,u)}l>h?G(e,o,s,!0,!1,d):x(t,n,i,o,s,a,c,u,d)},q=(e,t,n,i,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?Wr(t[l]):zr(t[l]);if(!Pr(r,i))break;m(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?Wr(t[f]):zr(t[f]);if(!Pr(r,i))break;m(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)m(null,t[l]=u?Wr(t[l]):zr(t[l]),n,r,o,s,a,c,u),l++}}else if(l>f)while(l<=d)z(e[l],o,s,!0),l++;else{const p=l,g=l,v=new Map;for(l=g;l<=f;l++){const e=t[l]=u?Wr(t[l]):zr(t[l]);null!=e.key&&v.set(e.key,l)}let _,b=0;const y=f-g+1;let w=!1,O=0;const C=new Array(y);for(l=0;l<y;l++)C[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=y){z(r,o,s,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(_=g;_<=f;_++)if(0===C[_-g]&&Pr(r,t[_])){i=_;break}void 0===i?z(r,o,s,!0):(C[i-g]=l+1,i>=O?O=i:w=!0,m(r,t[i],n,null,o,s,a,c,u),b++)}const k=w?lr(C):r["a"];for(_=k.length-1,l=y-1;l>=0;l--){const e=g+l,r=t[e],d=e+1<h?t[e+1].el:i;0===C[l]?m(null,r,n,d,o,s,a,c,u):w&&(_<0||l!==k[_]?V(r,n,d,2):_--)}}},V=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void V(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,J);if(a===mr){i(s,t,n);for(let e=0;e<u.length;e++)V(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===yr)return void O(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),i(s,t,n),or(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&rr(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!en(e);let g;if(p&&(g=s&&s.onVnodeBeforeUnmount)&&Gr(g,t,e),6&l)H(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Zn(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,J,r):u&&(o!==mr||h>0&&64&h)?G(u,t,n,!1,!0):(o===mr&&384&h||!i&&16&l)&&G(c,t,n),r&&W(e)}(p&&(g=s&&s.onVnodeUnmounted)||f)&&or(()=>{g&&Gr(g,t,e),f&&Zn(e,null,t,"unmounted")},n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===mr)return void B(n,r);if(t===yr)return void I(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},B=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},H=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,z(a,e,t,n)),c&&or(c,t),or(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)z(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),Y=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):m(t._vnode||null,e,t,null,null,null,n),gt(),t._vnode=e},J={p:m,um:z,m:V,r:W,mt:L,mc:x,pc:$,pbc:P,n:K,o:e};let Q,X;return t&&([Q,X]=t(J)),{render:Y,hydrate:Q,createApp:nr(Y,Q)}}function cr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ur(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=Wr(o[r]),t.el=e.el),n||ur(e,t))}}function lr(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const hr=e=>e.__isTeleport;const dr="components";function fr(e,t){return gr(dr,e,!0,t)||e}const pr=Symbol();function gr(e,t,n=!0,i=!1){const o=wt||ri;if(o){const n=o.type;if(e===dr){const e=_i(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=vr(o[e]||n[e],t)||vr(o.appContext[e],t);return!s&&i?n:s}}function vr(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const mr=Symbol(void 0),_r=Symbol(void 0),br=Symbol(void 0),yr=Symbol(void 0),wr=[];let Or=null;function Cr(e=!1){wr.push(Or=e?null:[])}function kr(){wr.pop(),Or=wr[wr.length-1]||null}let Ir=1;function jr(e){Ir+=e}function Er(e){return e.dynamicChildren=Ir>0?Or||r["a"]:null,kr(),Ir>0&&Or&&Or.push(e),e}function Tr(e,t,n,r,i,o){return Er(Lr(e,t,n,r,i,o,!0))}function xr(e,t,n,r,i){return Er(Mr(e,t,n,r,i,!0))}function Sr(e){return!!e&&!0===e.__v_isVNode}function Pr(e,t){return e.type===t.type&&e.key===t.key}const Rr="__vInternal",Nr=({key:e})=>null!=e?e:null,Ar=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["E"])(e)||Ne(e)||Object(r["q"])(e)?{i:wt,r:e,k:t,f:!!n}:e:null;function Lr(e,t=null,n=null,i=0,o=null,s=(e===mr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Nr(t),ref:t&&Ar(t),scopeId:Ot,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(Br(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Ir>0&&!a&&Or&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Or.push(u),u}const Mr=Dr;function Dr(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==pr||(e=br),Sr(e)){const r=$r(e,t,!0);return n&&Br(r,n),r}if(bi(e)&&(e=e.__vccOpts),t){t=Fr(t);let{class:e,style:n}=t;e&&!Object(r["E"])(e)&&(t.class=Object(r["J"])(e)),Object(r["w"])(n)&&(je(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["K"])(n))}const a=Object(r["E"])(e)?1:Nt(e)?128:hr(e)?64:Object(r["w"])(e)?4:Object(r["q"])(e)?2:0;return Lr(e,t,n,i,o,a,s,!0)}function Fr(e){return e?je(e)||Rr in e?Object(r["h"])({},e):e:null}function $r(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?Hr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Nr(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(Ar(t)):[o,Ar(t)]:Ar(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==mr?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$r(e.ssContent),ssFallback:e.ssFallback&&$r(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Ur(e=" ",t=0){return Mr(_r,null,e,t)}function qr(e,t){const n=Mr(yr,null,e);return n.staticCount=t,n}function Vr(e="",t=!1){return t?(Cr(),xr(br,null,e)):Mr(br,null,e)}function zr(e){return null==e||"boolean"===typeof e?Mr(br):Object(r["o"])(e)?Mr(mr,null,e.slice()):"object"===typeof e?Wr(e):Mr(_r,null,String(e))}function Wr(e){return null===e.el||e.memo?e:$r(e)}function Br(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Br(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Rr in t?3===r&&wt&&(1===wt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=wt}}else Object(r["q"])(t)?(t={default:t,_ctx:wt},n=32):(t=String(t),64&i?(n=16,t=[Ur(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["J"])([t.class,i.class]));else if("style"===e)t.style=Object(r["K"])([t.style,i.style]);else if(Object(r["x"])(e)){const n=t[e],o=i[e];!o||n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function Gr(e,t,n,r=null){We(e,t,7,[n,r])}function Kr(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["E"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["w"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}function Yr(e,t,n={},r,i){if(wt.isCE||wt.parent&&en(wt.parent)&&wt.parent.isCE)return Mr("slot","default"===t?null:{name:t},r&&r());let o=e[t];o&&o._c&&(o._d=!1),Cr();const s=o&&Jr(o(n)),a=xr(mr,{key:n.key||"_"+t},s||(r?r():[]),s&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Jr(e){return e.some(e=>!Sr(e)||e.type!==br&&!(e.type===mr&&!Jr(e.children)))?e:null}const Qr=e=>e?ai(e)?mi(e)||e.proxy:Qr(e.parent):null,Xr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$emit:e=>e.emit,$options:e=>En(e),$forceUpdate:e=>()=>ct(e.update),$nextTick:e=>st.bind(e.proxy),$watch:e=>Ut.bind(e)}),Zr={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=2,o[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];On&&(a[t]=0)}}const h=Xr[t];let d,f;return h?("$attrs"===t&&I(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return o!==r["b"]&&Object(r["k"])(o,t)?(o[t]=n,!0):i!==r["b"]&&Object(r["k"])(i,t)?(i[t]=n,!0):!Object(r["k"])(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(Xr,a)||Object(r["k"])(o.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:Object(r["k"])(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const ei=er();let ti=0;function ni(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||ei,a={uid:ti++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Un(i,s),emitsOptions:bt(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=_t.bind(null,a),e.ce&&e.ce(a),a}let ri=null;const ii=()=>ri||wt,oi=e=>{ri=e,e.scope.on()},si=()=>{ri&&ri.scope.off(),ri=null};function ai(e){return 4&e.vnode.shapeFlag}let ci,ui,li=!1;function hi(e,t=!1){li=t;const{props:n,children:r}=e.vnode,i=ai(e);Mn(e,n,i,t),Jn(e,r);const o=i?di(e,t):void 0;return li=!1,o}function di(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Te(new Proxy(e.ctx,Zr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?vi(e):null;oi(e),C();const o=ze(i,e,0,[e.props,n]);if(k(),si(),Object(r["z"])(o)){if(o.then(si,si),t)return o.then(n=>{fi(e,n,t)}).catch(t=>{Be(t,e,0)});e.asyncDep=o}else fi(e,o,t)}else pi(e,t)}function fi(e,t,n){Object(r["q"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["w"])(t)&&(e.setupState=Ue(t)),pi(e,n)}function pi(e,t,n){const i=e.type;if(!e.render){if(!t&&ci&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=ci(t,c)}}e.render=i.render||r["d"],ui&&ui(e)}oi(e),C(),Cn(e),k(),si()}function gi(e){return new Proxy(e.attrs,{get(t,n){return I(e,"get","$attrs"),t[n]}})}function vi(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=gi(e))},slots:e.slots,emit:e.emit,expose:t}}function mi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ue(Te(e.exposed)),{get(t,n){return n in t?t[n]:n in Xr?Xr[n](e):void 0}}))}function _i(e){return Object(r["q"])(e)&&e.displayName||e.name}function bi(e){return Object(r["q"])(e)&&"__vccOpts"in e}const yi=(e,t)=>Ve(e,t,li);function wi(e,t,n){const i=arguments.length;return 2===i?Object(r["w"])(t)&&!Object(r["o"])(t)?Sr(t)?Mr(e,null,[t]):Mr(e,t):Mr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Sr(n)&&(n=[n]),Mr(e,t,n))}Symbol("");const Oi="3.2.33",Ci="http://www.w3.org/2000/svg",ki="undefined"!==typeof document?document:null,Ii=ki&&ki.createElement("template"),ji={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ki.createElementNS(Ci,e):ki.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>ki.createTextNode(e),createComment:e=>ki.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ki.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===o||!(i=i.nextSibling))break}else{Ii.innerHTML=r?`<svg>${e}</svg>`:e;const i=Ii.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ei(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ti(e,t,n){const i=e.style,o=Object(r["E"])(n);if(n&&!o){for(const e in n)Si(i,e,n[e]);if(t&&!Object(r["E"])(t))for(const e in t)null==n[e]&&Si(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const xi=/\s*!important$/;function Si(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Si(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Ni(e,t);xi.test(n)?e.setProperty(Object(r["l"])(i),n.replace(xi,""),"important"):e[i]=n}}const Pi=["Webkit","Moz","ms"],Ri={};function Ni(e,t){const n=Ri[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Ri[t]=i;i=Object(r["f"])(i);for(let r=0;r<Pi.length;r++){const n=Pi[r]+i;if(n in e)return Ri[t]=n}return t}const Ai="http://www.w3.org/1999/xlink";function Li(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ai,t.slice(6,t.length)):e.setAttributeNS(Ai,t,n);else{const i=Object(r["D"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Mi(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=Object(r["m"])(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[Di,Fi]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let $i=0;const Ui=Promise.resolve(),qi=()=>{$i=0},Vi=()=>$i||(Ui.then(qi),$i=Di());function zi(e,t,n,r){e.addEventListener(t,n,r)}function Wi(e,t,n,r){e.removeEventListener(t,n,r)}function Bi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Gi(t);if(r){const s=o[t]=Ki(r,i);zi(e,n,s,a)}else s&&(Wi(e,n,s,a),o[t]=void 0)}}const Hi=/(?:Once|Passive|Capture)$/;function Gi(e){let t;if(Hi.test(e)){let n;t={};while(n=e.match(Hi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Ki(e,t){const n=e=>{const r=e.timeStamp||Di();(Fi||r>=n.attached-1)&&We(Yi(e,n.value),t,5,[e])};return n.value=e,n.attached=Vi(),n}function Yi(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}return t}const Ji=/^on[a-z]/,Qi=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?Ei(e,i,o):"style"===t?Ti(e,n,i):Object(r["x"])(t)?Object(r["v"])(t)||Bi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Xi(e,t,i,o))?Mi(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Li(e,t,i,o))};function Xi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Ji.test(t)&&Object(r["q"])(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Ji.test(t)||!Object(r["E"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Zi="transition",eo="animation",to=(e,{slots:t})=>wi(Ht,oo(e),t);to.displayName="Transition";const no={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ro=(to.props=Object(r["h"])({},Ht.props,no),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),io=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function oo(e){const t={};for(const r in e)r in no||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,g=so(o),v=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:y,onLeave:w,onLeaveCancelled:O,onBeforeAppear:C=_,onAppear:k=b,onAppearCancelled:I=y}=t,j=(e,t,n)=>{uo(e,t?h:c),uo(e,t?l:a),n&&n()},E=(e,t)=>{uo(e,p),uo(e,f),t&&t()},T=e=>(t,n)=>{const r=e?k:b,o=()=>j(t,e,n);ro(r,[t,o]),lo(()=>{uo(t,e?u:s),co(t,e?h:c),io(r)||fo(t,i,v,o)})};return Object(r["h"])(t,{onBeforeEnter(e){ro(_,[e]),co(e,s),co(e,a)},onBeforeAppear(e){ro(C,[e]),co(e,u),co(e,l)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){const n=()=>E(e,t);co(e,d),mo(),co(e,f),lo(()=>{uo(e,d),co(e,p),io(w)||fo(e,i,m,n)}),ro(w,[e,n])},onEnterCancelled(e){j(e,!1),ro(y,[e])},onAppearCancelled(e){j(e,!0),ro(I,[e])},onLeaveCancelled(e){E(e),ro(O,[e])}})}function so(e){if(null==e)return null;if(Object(r["w"])(e))return[ao(e.enter),ao(e.leave)];{const t=ao(e);return[t,t]}}function ao(e){const t=Object(r["O"])(e);return t}function co(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function uo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function lo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ho=0;function fo(e,t,n,r){const i=e._endId=++ho,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=po(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function po(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Zi+"Delay"),o=r(Zi+"Duration"),s=go(i,o),a=r(eo+"Delay"),c=r(eo+"Duration"),u=go(a,c);let l=null,h=0,d=0;t===Zi?s>0&&(l=Zi,h=s,d=o.length):t===eo?u>0&&(l=eo,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?Zi:eo:null,d=l?l===Zi?o.length:c.length:0);const f=l===Zi&&/\b(transform|all)(,|$)/.test(n[Zi+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function go(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>vo(t)+vo(e[n])))}function vo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function mo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const _o=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function bo(e){e.target.composing=!0}function yo(e){const t=e.target;t.composing&&(t.composing=!1,wo(t,"input"))}function wo(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const Oo={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=_o(o);const s=i||o.props&&"number"===o.props.type;zi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["O"])(i)),e._assign(i)}),n&&zi(e,"change",()=>{e.value=e.value.trim()}),t||(zi(e,"compositionstart",bo),zi(e,"compositionend",yo),zi(e,"change",yo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=_o(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["O"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},Co={deep:!0,created(e,t,n){e._assign=_o(n),zi(e,"change",()=>{const t=e._modelValue,n=Io(e),i=e.checked,o=e._assign;if(Object(r["o"])(t)){const e=Object(r["H"])(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if(Object(r["C"])(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(jo(e,i))})},mounted:ko,beforeUpdate(e,t,n){e._assign=_o(n),ko(e,t,n)}};function ko(e,{value:t,oldValue:n},i){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["H"])(t,i.props.value)>-1:Object(r["C"])(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=Object(r["G"])(t,jo(e,!0)))}function Io(e){return"_value"in e?e._value:e.value}function jo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Eo=["ctrl","shift","alt","meta"],To={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Eo.some(n=>e[n+"Key"]&&!t.includes(n))},xo=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=To[t[e]];if(r&&r(n,t))return}return e(n,...r)},So={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Po=(e,t)=>n=>{if(!("key"in n))return;const i=Object(r["l"])(n.key);return t.some(e=>e===i||So[e]===i)?e(n):void 0},Ro={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):No(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),No(e,!0),r.enter(e)):r.leave(e,()=>{No(e,!1)}):No(e,t))},beforeUnmount(e,{value:t}){No(e,t)}};function No(e,t){e.style.display=t?e._vod:"none"}const Ao=Object(r["h"])({patchProp:Qi},ji);let Lo;function Mo(){return Lo||(Lo=sr(Ao))}const Do=(...e)=>{const t=Mo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Fo(e);if(!i)return;const o=t._component;Object(r["q"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Fo(e){if(Object(r["E"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",g=l("IE_PROTO"),v=function(){},m=function(e){return d+p+h+e+d+"/"+p+h},_=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(m("document.F=Object")),e.close(),e.F},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&r?_(r):b():_(r);var e=s.length;while(e--)delete y[f][s[e]];return y()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[f]=i(e),n=new v,v[f]=null,n[g]=e):n=y(),void 0===t?n:o.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),g=n("3f8c"),v=n("ae93"),m=s.PROPER,_=s.CONFIGURABLE,b=v.IteratorPrototype,y=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",C="values",k="entries",I=function(){return this};e.exports=function(e,t,n,s,p,v,j){c(n,t,s);var E,T,x,S=function(e){if(e===p&&L)return L;if(!y&&e in N)return N[e];switch(e){case O:return function(){return new n(this,e)};case C:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},P=t+" Iterator",R=!1,N=e.prototype,A=N[w]||N["@@iterator"]||p&&N[p],L=!y&&A||S(p),M="Array"==t&&N.entries||A;if(M&&(E=u(M.call(new e)),E!==Object.prototype&&E.next&&(o||u(E)===b||(l?l(E,b):a(E[w])||f(E,w,I)),h(E,P,!0,!0),o&&(g[P]=I))),m&&p==C&&A&&A.name!==C&&(!o&&_?d(N,"name",C):(R=!0,L=function(){return i(A,this)})),p)if(T={values:S(C),keys:v?L:S(O),entries:S(k)},j)for(x in T)(y||R||!(x in N))&&f(N,x,T[x]);else r({target:t,proto:!0,forced:y||R},T);return o&&!j||N[w]===L||f(N,w,L,{name:p}),g[t]=L,T}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"841c":function(e,t,n){"use strict";var r=n("c65b"),i=n("d784"),o=n("825a"),s=n("1d80"),a=n("129f"),c=n("577e"),u=n("dc4a"),l=n("14c3");i("search",(function(e,t,n){return[function(t){var n=s(this),i=void 0==t?void 0:u(t,e);return i?r(i,t,n):new RegExp(t)[e](c(n))},function(e){var r=o(this),i=c(e),s=n(t,r,i);if(s.done)return s.value;var u=r.lastIndex;a(u,0)||(r.lastIndex=0);var h=l(r,i);return a(r.lastIndex,u)||(r.lastIndex=u),null===h?-1:h.index}]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8857:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("7a23"),i=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n};const o={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(e){this.innerValue=e}},pages:function(){let e={};if(this.pageCount<=this.pageRange)for(let t=0;t<this.pageCount;t++){let n={index:t,content:t+1,selected:t===this.selected-1};e[t]=n}else{const t=Math.floor(this.pageRange/2);let n=t=>{let n={index:t,content:t+1,selected:t===this.selected-1};e[t]=n},r=t=>{let n={disabled:!0,breakView:!0};e[t]=n};for(let e=0;e<this.marginPages;e++)n(e);let i=0;this.selected-t>0&&(i=this.selected-1-t);let o=i+this.pageRange-1;o>=this.pageCount&&(o=this.pageCount-1,i=o-this.pageRange+1);for(let e=i;e<=o&&e<=this.pageCount-1;e++)n(e);i>this.marginPages&&r(i-1),o+1<this.pageCount-this.marginPages&&r(o+1);for(let e=this.pageCount-1;e>=this.pageCount-this.marginPages;e--)n(e)}return e}},methods:{handlePageSelected(e){this.selected!==e&&(this.innerValue=e,this.$emit("update:modelValue",e),this.clickHandler(e))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return 1===this.selected},lastPageSelected(){return this.selected===this.pageCount||0===this.pageCount},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},s=["tabindex","innerHTML"],a=["tabindex","innerHTML"],c=["onClick","onKeyup"],u=["tabindex","innerHTML"],l=["tabindex","innerHTML"],h=["innerHTML"],d=["innerHTML"],f=["onClick","onKeyup"],p=["innerHTML"],g=["innerHTML"];function v(e,t,n,i,o,v){return n.noLiSurround?(Object(r["A"])(),Object(r["g"])("div",{key:1,class:Object(r["t"])(n.containerClass)},[n.firstLastButton?(Object(r["A"])(),Object(r["g"])("a",{key:0,onClick:t[8]||(t[8]=e=>v.selectFirstPage()),onKeyup:t[9]||(t[9]=Object(r["S"])(e=>v.selectFirstPage(),["enter"])),class:Object(r["t"])([n.pageLinkClass,v.firstPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.firstButtonText},null,42,h)):Object(r["f"])("",!0),v.firstPageSelected()&&n.hidePrevNext?Object(r["f"])("",!0):(Object(r["A"])(),Object(r["g"])("a",{key:1,onClick:t[10]||(t[10]=e=>v.prevPage()),onKeyup:t[11]||(t[11]=Object(r["S"])(e=>v.prevPage(),["enter"])),class:Object(r["t"])([n.prevLinkClass,v.firstPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.prevText},null,42,d)),(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(v.pages,t=>(Object(r["A"])(),Object(r["g"])(r["a"],null,[t.breakView?(Object(r["A"])(),Object(r["g"])("a",{key:t.index,class:Object(r["t"])([n.pageLinkClass,n.breakViewLinkClass,t.disabled?n.disabledClass:""]),tabindex:"0"},[Object(r["H"])(e.$slots,"breakViewContent",{},()=>[Object(r["j"])(Object(r["K"])(n.breakViewText),1)])],2)):t.disabled?(Object(r["A"])(),Object(r["g"])("a",{key:t.index,class:Object(r["t"])([n.pageLinkClass,t.selected?n.activeClass:"",n.disabledClass]),tabindex:"0"},Object(r["K"])(t.content),3)):(Object(r["A"])(),Object(r["g"])("a",{key:t.index,onClick:e=>v.handlePageSelected(t.index+1),onKeyup:Object(r["S"])(e=>v.handlePageSelected(t.index+1),["enter"]),class:Object(r["t"])([n.pageLinkClass,t.selected?n.activeClass:""]),tabindex:"0"},Object(r["K"])(t.content),43,f))],64))),256)),v.lastPageSelected()&&n.hidePrevNext?Object(r["f"])("",!0):(Object(r["A"])(),Object(r["g"])("a",{key:2,onClick:t[12]||(t[12]=e=>v.nextPage()),onKeyup:t[13]||(t[13]=Object(r["S"])(e=>v.nextPage(),["enter"])),class:Object(r["t"])([n.nextLinkClass,v.lastPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.nextText},null,42,p)),n.firstLastButton?(Object(r["A"])(),Object(r["g"])("a",{key:3,onClick:t[14]||(t[14]=e=>v.selectLastPage()),onKeyup:t[15]||(t[15]=Object(r["S"])(e=>v.selectLastPage(),["enter"])),class:Object(r["t"])([n.pageLinkClass,v.lastPageSelected()?n.disabledClass:""]),tabindex:"0",innerHTML:n.lastButtonText},null,42,g)):Object(r["f"])("",!0)],2)):(Object(r["A"])(),Object(r["g"])("ul",{key:0,class:Object(r["t"])(n.containerClass)},[n.firstLastButton?(Object(r["A"])(),Object(r["g"])("li",{key:0,class:Object(r["t"])([n.pageClass,v.firstPageSelected()?n.disabledClass:""])},[Object(r["h"])("a",{onClick:t[0]||(t[0]=e=>v.selectFirstPage()),onKeyup:t[1]||(t[1]=Object(r["S"])(e=>v.selectFirstPage(),["enter"])),class:Object(r["t"])(n.pageLinkClass),tabindex:v.firstPageSelected()?-1:0,innerHTML:n.firstButtonText},null,42,s)],2)):Object(r["f"])("",!0),v.firstPageSelected()&&n.hidePrevNext?Object(r["f"])("",!0):(Object(r["A"])(),Object(r["g"])("li",{key:1,class:Object(r["t"])([n.prevClass,v.firstPageSelected()?n.disabledClass:""])},[Object(r["h"])("a",{onClick:t[2]||(t[2]=e=>v.prevPage()),onKeyup:t[3]||(t[3]=Object(r["S"])(e=>v.prevPage(),["enter"])),class:Object(r["t"])(n.prevLinkClass),tabindex:v.firstPageSelected()?-1:0,innerHTML:n.prevText},null,42,a)],2)),(Object(r["A"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(v.pages,t=>(Object(r["A"])(),Object(r["g"])("li",{key:t.index,class:Object(r["t"])([n.pageClass,t.selected?n.activeClass:"",t.disabled?n.disabledClass:"",t.breakView?n.breakViewClass:""])},[t.breakView?(Object(r["A"])(),Object(r["g"])("a",{key:0,class:Object(r["t"])([n.pageLinkClass,n.breakViewLinkClass]),tabindex:"0"},[Object(r["H"])(e.$slots,"breakViewContent",{},()=>[Object(r["j"])(Object(r["K"])(n.breakViewText),1)])],2)):t.disabled?(Object(r["A"])(),Object(r["g"])("a",{key:1,class:Object(r["t"])(n.pageLinkClass),tabindex:"0"},Object(r["K"])(t.content),3)):(Object(r["A"])(),Object(r["g"])("a",{key:2,onClick:e=>v.handlePageSelected(t.index+1),onKeyup:Object(r["S"])(e=>v.handlePageSelected(t.index+1),["enter"]),class:Object(r["t"])(n.pageLinkClass),tabindex:"0"},Object(r["K"])(t.content),43,c))],2))),128)),v.lastPageSelected()&&n.hidePrevNext?Object(r["f"])("",!0):(Object(r["A"])(),Object(r["g"])("li",{key:2,class:Object(r["t"])([n.nextClass,v.lastPageSelected()?n.disabledClass:""])},[Object(r["h"])("a",{onClick:t[4]||(t[4]=e=>v.nextPage()),onKeyup:t[5]||(t[5]=Object(r["S"])(e=>v.nextPage(),["enter"])),class:Object(r["t"])(n.nextLinkClass),tabindex:v.lastPageSelected()?-1:0,innerHTML:n.nextText},null,42,u)],2)),n.firstLastButton?(Object(r["A"])(),Object(r["g"])("li",{key:3,class:Object(r["t"])([n.pageClass,v.lastPageSelected()?n.disabledClass:""])},[Object(r["h"])("a",{onClick:t[6]||(t[6]=e=>v.selectLastPage()),onKeyup:t[7]||(t[7]=Object(r["S"])(e=>v.selectLastPage(),["enter"])),class:Object(r["t"])(n.pageLinkClass),tabindex:v.lastPageSelected()?-1:0,innerHTML:n.lastButtonText},null,42,l)],2)):Object(r["f"])("",!0)],2))}var m=i(o,[["render",v]])},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"8afd":function(e,t,n){"use strict";var r=n("7a23");n.d(t,"a",(function(){return r["c"]})),n.d(t,"b",(function(){return r["m"]})),n.d(t,"c",(function(){return r["o"]})),n.d(t,"d",(function(){return r["p"]})),n.d(t,"e",(function(){return r["q"]})),n.d(t,"f",(function(){return r["r"]})),n.d(t,"g",(function(){return r["s"]})),n.d(t,"h",(function(){return r["w"]})),n.d(t,"i",(function(){return r["x"]})),n.d(t,"j",(function(){return r["C"]})),n.d(t,"k",(function(){return r["E"]})),n.d(t,"l",(function(){return r["F"]})),n.d(t,"m",(function(){return r["L"]})),n.d(t,"n",(function(){return r["P"]}))},"8ba4":function(e,t,n){var r=n("23e7"),i=n("eac5");r({target:"Number",stat:!0},{isInteger:i})},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,h=n("fce3"),d=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,v=i("".charAt),m=i("".indexOf),_=i("".replace),b=i("".slice),y=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=a.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],C=y||O||w||h||d;C&&(g=function(e){var t,n,i,a,c,h,d,C=this,k=l(C),I=o(e),j=k.raw;if(j)return j.lastIndex=C.lastIndex,t=r(g,j,I),C.lastIndex=j.lastIndex,t;var E=k.groups,T=w&&C.sticky,x=r(s,C),S=C.source,P=0,R=I;if(T&&(x=_(x,"y",""),-1===m(x,"g")&&(x+="g"),R=b(I,C.lastIndex),C.lastIndex>0&&(!C.multiline||C.multiline&&"\n"!==v(I,C.lastIndex-1))&&(S="(?: "+S+")",R=" "+R,P++),n=new RegExp("^(?:"+S+")",x)),O&&(n=new RegExp("^"+S+"$(?!\\s)",x)),y&&(i=C.lastIndex),a=r(p,T?n:C,R),T?a?(a.input=b(a.input,P),a[0]=b(a[0],P),a.index=C.lastIndex,C.lastIndex+=a[0].length):C.lastIndex=0:y&&a&&(C.lastIndex=C.global?a.index+a[0].length:i),O&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&E)for(a.groups=h=u(null),c=0;c<E.length;c++)d=E[c],h[d[0]]=a[d[1]];return a}),e.exports=g},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),s=new x(r||[]);return o._invoke=I(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",g={};function v(){}function m(){}function _(){}var b={};c(b,o,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(S([])));w&&w!==n&&r.call(w,o)&&(b=w);var O=_.prototype=v.prototype=Object.create(b);function C(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function I(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return P()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=j(s,n);if(a){if(a===g)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function S(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:P}}function P(){return{value:t,done:!0}}return m.prototype=_,c(O,"constructor",_),c(_,"constructor",m),m.displayName=c(_,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},C(k.prototype),c(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new k(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},C(O),c(O,a,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"99af":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d039"),s=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("07fa"),l=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",_=i.TypeError,b=p>=51||!o((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),y=d("concat"),w=function(e){if(!a(e))return!1;var t=e[g];return void 0!==t?!!t:s(e)},O=!b||!y;r({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,r,i,o,s=c(this),a=h(s,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?s:arguments[t],w(o)){if(i=u(o),d+i>v)throw _(m);for(n=0;n<i;n++,d++)n in o&&l(a,d,o[n])}else{if(d>=v)throw _(m);l(a,d++,o)}return a.length=d,a}})},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp,s=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),c=s||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return oe})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return ce})),n.d(t,"j",(function(){return re})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return ee})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return ie})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return Y})),n.d(t,"q",(function(){return F})),n.d(t,"r",(function(){return o})),n.d(t,"s",(function(){return v})),n.d(t,"t",(function(){return G})),n.d(t,"u",(function(){return L})),n.d(t,"v",(function(){return x})),n.d(t,"w",(function(){return q})),n.d(t,"x",(function(){return T})),n.d(t,"y",(function(){return H})),n.d(t,"z",(function(){return V})),n.d(t,"A",(function(){return K})),n.d(t,"B",(function(){return m})),n.d(t,"C",(function(){return M})),n.d(t,"D",(function(){return a})),n.d(t,"E",(function(){return $})),n.d(t,"F",(function(){return U})),n.d(t,"G",(function(){return b})),n.d(t,"H",(function(){return y})),n.d(t,"I",(function(){return r})),n.d(t,"J",(function(){return f})),n.d(t,"K",(function(){return u})),n.d(t,"L",(function(){return P})),n.d(t,"M",(function(){return w})),n.d(t,"N",(function(){return ne})),n.d(t,"O",(function(){return se})),n.d(t,"P",(function(){return B}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(A(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=$(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return $(e)||q(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if($(e))t=e;else if(A(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v=r(p),m=r(g);function _(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=A(e),r=A(t),n||r)return!(!n||!r)&&_(e,t);if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const w=e=>$(e)?e:null==e?"":A(e)||q(e)&&(e.toString===z||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:M(t)?{[`Set(${t.size})`]:[...t.values()]}:!q(t)||A(t)||H(t)?t:String(t),C={},k=[],I=()=>{},j=()=>!1,E=/^on[^a-z]/,T=e=>E.test(e),x=e=>e.startsWith("onUpdate:"),S=Object.assign,P=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,N=(e,t)=>R.call(e,t),A=Array.isArray,L=e=>"[object Map]"===W(e),M=e=>"[object Set]"===W(e),D=e=>e instanceof Date,F=e=>"function"===typeof e,$=e=>"string"===typeof e,U=e=>"symbol"===typeof e,q=e=>null!==e&&"object"===typeof e,V=e=>q(e)&&F(e.then)&&F(e.catch),z=Object.prototype.toString,W=e=>z.call(e),B=e=>W(e).slice(8,-1),H=e=>"[object Object]"===W(e),G=e=>$(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Y=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},Q=/-(\w)/g,X=J(e=>e.replace(Q,(e,t)=>t?t.toUpperCase():"")),Z=/\B([A-Z])/g,ee=J(e=>e.replace(Z,"-$1").toLowerCase()),te=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),ne=J(e=>e?"on"+te(e):""),re=(e,t)=>!Object.is(e,t),ie=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oe=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},se=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ae;const ce=()=>ae||(ae="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a2bf:function(e,t,n){"use strict";var r=n("da84"),i=n("e8b5"),o=n("07fa"),s=n("0366"),a=r.TypeError,c=function(e,t,n,r,u,l,h,d){var f,p,g=u,v=0,m=!!h&&s(h,d);while(v<r){if(v in n){if(f=m?m(n[v],v,t):n[v],l>0&&i(f))p=o(f),g=c(e,t,f,p,g,l-1)-1;else{if(g>=9007199254740991)throw a("Exceed the acceptable array length");e[g]=f}g++}v++}return g};e.exports=c},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("23cb"),s=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),h=n("1dde"),d=h("splice"),f=i.TypeError,p=Math.max,g=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,i,h,d,_,b=c(this),y=a(b),w=o(e,y),O=arguments.length;if(0===O?n=r=0:1===O?(n=0,r=y-w):(n=O-2,r=g(p(s(t),0),y-w)),y+n-r>v)throw f(m);for(i=u(b,r),h=0;h<r;h++)d=w+h,d in b&&l(i,h,b[d]);if(i.length=r,n<r){for(h=w;h<y-r;h++)d=h+r,_=h+n,d in b?b[_]=b[d]:delete b[_];for(h=y;h>y-r+n;h--)delete b[h-1]}else if(n>r)for(h=y-r;h>w;h--)d=h+r-1,_=h+n-1,d in b?b[_]=b[d]:delete b[_];for(h=0;h<n;h++)b[h+w]=arguments[h+2];return b.length=y-r+n,i}})},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){n("d9f5"),n("b4f8"),n("c513"),n("e9c4"),n("5a47")},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){return 1},1)}))}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("d256"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=o&&o.prototype,f=!!o&&s((function(){d["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var p=a("Promise").prototype["finally"];d["finally"]!==p&&h(d,"finally",p,{unsafe:!0})}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("e330"),s=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),d=n("c04e"),f=n("d039"),p=n("241c").f,g=n("06cf").f,v=n("9bf2").f,m=n("408a"),_=n("58a8").trim,b="Number",y=i[b],w=y.prototype,O=i.TypeError,C=o("".slice),k=o("".charCodeAt),I=function(e){var t=d(e,"number");return"bigint"==typeof t?t:j(t)},j=function(e){var t,n,r,i,o,s,a,c,u=d(e,"number");if(h(u))throw O("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=_(u),t=k(u,0),43===t||45===t){if(n=k(u,2),88===n||120===n)return NaN}else if(48===t){switch(k(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=C(u,2),s=o.length,a=0;a<s;a++)if(c=k(o,a),c<48||c>i)return NaN;return parseInt(o,r)}return+u};if(s(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var E,T=function(e){var t=arguments.length<1?0:y(I(e)),n=this;return l(w,n)&&f((function(){m(n)}))?u(Object(t),n,T):t},x=r?p(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;x.length>S;S++)c(y,E=x[S])&&!c(T,E)&&v(T,E,g(y,E));T.prototype=w,w.constructor=T,a(i,b,T)}},ab13:function(e,t,n){var r=n("b622"),i=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,"/./"[e](t)}catch(r){}}return!1}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(e,t,n){var r=n("83ab"),i=n("5e77").EXISTS,o=n("e330"),s=n("9bf2").f,a=Function.prototype,c=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),h="name";r&&!i&&s(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b4f8:function(e,t,n){var r=n("23e7"),i=n("d066"),o=n("1a2d"),s=n("577e"),a=n("5692"),c=n("3d87"),u=a("string-to-symbol-registry"),l=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=s(e);if(o(u,t))return u[t];var n=i("Symbol")(t);return u[t]=n,l[n]=t,n}})},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("0366"),f=n("06cf").f,p=n("2cf4").set,g=n("1cdc"),v=n("d4c3"),m=n("a4b4"),_=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,y=h.document,w=h.process,O=h.Promise,C=f(h,"queueMicrotask"),k=C&&C.value;k||(r=function(){var e,t;_&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},g||_||m||!b||!y?!v&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=d(u.then,u),s=function(){l(r)}):_?s=function(){w.nextTick(r)}:(p=d(p,h),s=function(){p(r)}):(a=!0,c=y.createTextNode(""),new b(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=k||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("e330"),o=n("44ad"),s=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,v,m){for(var _,b,y=s(p),w=o(y),O=r(g,v),C=a(w),k=0,I=m||c,j=t?I(p,C):n||d?I(p,0):void 0;C>k;k++)if((f||k in w)&&(_=w[k],b=O(_,k,y),e))if(t)j[k]=b;else if(b)switch(e){case 3:return!0;case 5:return _;case 6:return k;case 2:u(j,_)}else switch(e){case 4:return!1;case 7:u(j,_)}return h?-1:i||l?l:j}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c513:function(e,t,n){var r=n("23e7"),i=n("1a2d"),o=n("d9b5"),s=n("0d51"),a=n("5692"),c=n("3d87"),u=a("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!c},{keyFor:function(e){if(!o(e))throw TypeError(s(e)+" is not a symbol");if(i(u,e))return u[e]}})},c65b:function(e,t,n){var r=n("40d5"),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c740:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},caad:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").includes,o=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cc98:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("4738").CONSTRUCTOR,s=n("d256"),a=n("d066"),c=n("1626"),u=n("6eeb"),l=s&&s.prototype;if(r({target:"Promise",proto:!0,forced:o,real:!0},{catch:function(e){return this.then(void 0,e)}}),!i&&c(s)){var h=a("Promise").prototype["catch"];l["catch"]!==h&&u(l,"catch",h,{unsafe:!0})}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d256:function(e,t,n){var r=n("da84");e.exports=r.Promise},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d6d6:function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e,t){if(e<t)throw i("Not enough arguments");return e}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!s((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=r(/./[d]),v=t(d,""[e],(function(e,t,n,i,s){var a=r(e),c=t.exec;return c===o||c===l.exec?f&&!s?{done:!0,value:g(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,v[0]),i(l,d,v[1])}h&&c(l[d],"sham",!0)}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},d9f5:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("c65b"),s=n("e330"),a=n("c430"),c=n("83ab"),u=n("4930"),l=n("d039"),h=n("1a2d"),d=n("3a9b"),f=n("825a"),p=n("fc6a"),g=n("a04b"),v=n("577e"),m=n("5c6c"),_=n("7c73"),b=n("df75"),y=n("241c"),w=n("057f"),O=n("7418"),C=n("06cf"),k=n("9bf2"),I=n("37e8"),j=n("d1e7"),E=n("6eeb"),T=n("5692"),x=n("f772"),S=n("d012"),P=n("90e3"),R=n("b622"),N=n("e538"),A=n("746f"),L=n("57b9"),M=n("d44e"),D=n("69f3"),F=n("b727").forEach,$=x("hidden"),U="Symbol",q="prototype",V=D.set,z=D.getterFor(U),W=Object[q],B=i.Symbol,H=B&&B[q],G=i.TypeError,K=i.QObject,Y=C.f,J=k.f,Q=w.f,X=j.f,Z=s([].push),ee=T("symbols"),te=T("op-symbols"),ne=T("wks"),re=!K||!K[q]||!K[q].findChild,ie=c&&l((function(){return 7!=_(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=Y(W,t);r&&delete W[t],J(e,t,n),r&&e!==W&&J(W,t,r)}:J,oe=function(e,t){var n=ee[e]=_(H);return V(n,{type:U,tag:e,description:t}),c||(n.description=t),n},se=function(e,t,n){e===W&&se(te,t,n),f(e);var r=g(t);return f(n),h(ee,r)?(n.enumerable?(h(e,$)&&e[$][r]&&(e[$][r]=!1),n=_(n,{enumerable:m(0,!1)})):(h(e,$)||J(e,$,m(1,{})),e[$][r]=!0),ie(e,r,n)):J(e,r,n)},ae=function(e,t){f(e);var n=p(t),r=b(n).concat(de(n));return F(r,(function(t){c&&!o(ue,n,t)||se(e,t,n[t])})),e},ce=function(e,t){return void 0===t?_(e):ae(_(e),t)},ue=function(e){var t=g(e),n=o(X,this,t);return!(this===W&&h(ee,t)&&!h(te,t))&&(!(n||!h(this,t)||!h(ee,t)||h(this,$)&&this[$][t])||n)},le=function(e,t){var n=p(e),r=g(t);if(n!==W||!h(ee,r)||h(te,r)){var i=Y(n,r);return!i||!h(ee,r)||h(n,$)&&n[$][r]||(i.enumerable=!0),i}},he=function(e){var t=Q(p(e)),n=[];return F(t,(function(e){h(ee,e)||h(S,e)||Z(n,e)})),n},de=function(e){var t=e===W,n=Q(t?te:p(e)),r=[];return F(n,(function(e){!h(ee,e)||t&&!h(W,e)||Z(r,ee[e])})),r};u||(B=function(){if(d(H,this))throw G("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,t=P(e),n=function(e){this===W&&o(n,te,e),h(this,$)&&h(this[$],t)&&(this[$][t]=!1),ie(this,t,m(1,e))};return c&&re&&ie(W,t,{configurable:!0,set:n}),oe(t,e)},H=B[q],E(H,"toString",(function(){return z(this).tag})),E(B,"withoutSetter",(function(e){return oe(P(e),e)})),j.f=ue,k.f=se,I.f=ae,C.f=le,y.f=w.f=he,O.f=de,N.f=function(e){return oe(R(e),e)},c&&(J(H,"description",{configurable:!0,get:function(){return z(this).description}}),a||E(W,"propertyIsEnumerable",ue,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:B}),F(b(ne),(function(e){A(e)})),r({target:U,stat:!0,forced:!u},{useSetter:function(){re=!0},useSimple:function(){re=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:ce,defineProperty:se,defineProperties:ae,getOwnPropertyDescriptor:le}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:he}),L(),M(B,U),S[$]=!0},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var i=e[r];"."===i?e.splice(r,1):".."===i?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){n=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":e.slice(n,r)}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,r="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),s="/"===o(e,-1);return e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"),e||r||(e="."),e&&s&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var i=r(e.split("/")),o=r(n.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,o=e.length-1;o>=1;--o)if(t=e.charCodeAt(o),47===t){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=r(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===r&&(i=!1,r=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))},e01a:function(e,t,n){"use strict";var r=n("23e7"),i=n("83ab"),o=n("da84"),s=n("e330"),a=n("1a2d"),c=n("1626"),u=n("3a9b"),l=n("577e"),h=n("9bf2").f,d=n("e893"),f=o.Symbol,p=f&&f.prototype;if(i&&c(f)&&(!("description"in p)||void 0!==f().description)){var g={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(g[t]=!0),t};d(v,f),v.prototype=p,p.constructor=v;var m="Symbol(test)"==String(f("test")),_=s(p.toString),b=s(p.valueOf),y=/^Symbol\((.*)\)[^)]+$/,w=s("".replace),O=s("".slice);h(p,"description",{configurable:!0,get:function(){var e=b(this),t=_(e);if(a(g,e))return"";var n=m?O(t,7,-1):w(t,y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:v})}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?h:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),h="Array Iterator",d=s.set,f=s.getterFor(h);e.exports=c(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t,n){var r=n("40d5"),i=Function.prototype,o=i.bind,s=i.call,a=r&&o.bind(s,s);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return s.apply(e,arguments)}}},e3e1:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return x}));var r=n("8afd");function i(e){return"function"===typeof e}function o(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}function s(e){return i(e.$validator)?Object.assign({},e):{$validator:e}}function a(e){return"object"===typeof e?e.$valid:e}function c(e){return e.$validator||e}function u(e,t){if(!o(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!o(t)&&!i(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=s(t);return n.$params=Object.assign({},n.$params||{},e),n}function l(e,t){if(!i(e)&&"string"!==typeof Object(r["m"])(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!o(t)&&!i(t))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const n=s(t);return n.$message=e,n}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=s(e);return Object.assign({},n,{$async:!0,$watchTargets:t})}function d(e){return{$validator(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return Object(r["m"])(t).reduce((t,n)=>{const r=Object.entries(n).reduce((t,r)=>{let[o,s]=r;const u=e[o]||{},l=Object.entries(u).reduce((e,t)=>{let[r,u]=t;const l=c(u),h=l.call(this,s,n,...i),d=a(h);if(e.$data[r]=h,e.$data.$invalid=!d||!!e.$data.$invalid,e.$data.$error=e.$data.$invalid,!d){let t=u.$message||"";const n=u.$params||{};"function"===typeof t&&(t=t({$pending:!1,$invalid:!d,$params:n,$model:s,$response:h})),e.$errors.push({$property:o,$message:t,$params:n,$response:h,$model:s,$pending:!1,$validator:r})}return{$valid:e.$valid&&d,$data:e.$data,$errors:e.$errors}},{$valid:!0,$data:{},$errors:[]});return t.$data[o]=l.$data,t.$errors[o]=l.$errors,{$valid:t.$valid&&l.$valid,$data:t.$data,$errors:t.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:t.$valid&&r.$valid,$data:t.$data.concat(r.$data),$errors:t.$errors.concat(r.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:e=>{let{$response:t}=e;return t?t.$errors.map(e=>Object.values(e).map(e=>e.map(e=>e.$message)).reduce((e,t)=>e.concat(t),[])):[]}}}const f=e=>{if(e=Object(r["m"])(e),Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===typeof e){for(let t in e)return!0;return!1}return!!String(e).length},p=e=>(e=Object(r["m"])(e),Array.isArray(e)?e.length:"object"===typeof e?Object.keys(e).length:String(e).length);function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(e=Object(r["m"])(e),!f(e)||t.every(t=>t.test(e)))}r["m"],g(/^[a-zA-Z]*$/),g(/^[a-zA-Z0-9]*$/),g(/^\d*(\.\d+)?$/);const v=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var m=g(v),_={$validator:m,$message:"Value is not a valid email address",$params:{type:"email"}};function b(e){return t=>!f(t)||p(t)<=Object(r["m"])(e)}function y(e){return{$validator:b(e),$message:e=>{let{$params:t}=e;return"The maximum length allowed is "+t.max},$params:{max:e,type:"maxLength"}}}function w(e){return t=>!f(t)||p(t)>=Object(r["m"])(e)}function O(e){return{$validator:w(e),$message:e=>{let{$params:t}=e;return`This field should be at least ${t.min} characters long`},$params:{min:e,type:"minLength"}}}function C(e){return"string"===typeof e&&(e=e.trim()),f(e)}var k={$validator:C,$message:"Value is required",$params:{type:"required"}};const I=(e,t)=>!e||f("string"===typeof t?t.trim():t);function j(e){return function(t,n){if("function"!==typeof e)return I(Object(r["m"])(e),t);const i=e.call(this,t,n);return I(i,t)}}function E(e){return{$validator:j(e),$message:"The value is required",$params:{type:"requiredIf",prop:e}}}function T(e){return t=>Object(r["m"])(t)===Object(r["m"])(e)}function x(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";return{$validator:T(e),$message:e=>`The value must be equal to the ${t} value`,$params:{equalTo:e,otherName:t,type:"sameAs"}}}const S=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;g(S);g(/(^[0-9]*$)|(^-[0-9]+$)/),g(/^[-]?\d*(\.\d+)?$/)},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){n("5e7e"),n("14e5"),n("cc98"),n("3529"),n("f22b"),n("7149")},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},e9c4:function(e,t,n){var r=n("23e7"),i=n("d066"),o=n("2ba4"),s=n("c65b"),a=n("e330"),c=n("d039"),u=n("e8b5"),l=n("1626"),h=n("861d"),d=n("d9b5"),f=n("f36a"),p=n("4930"),g=i("JSON","stringify"),v=a(/./.exec),m=a("".charAt),_=a("".charCodeAt),b=a("".replace),y=a(1..toString),w=/[\uD800-\uDFFF]/g,O=/^[\uD800-\uDBFF]$/,C=/^[\uDC00-\uDFFF]$/,k=!p||c((function(){var e=i("Symbol")();return"[null]"!=g([e])||"{}"!=g({a:e})||"{}"!=g(Object(e))})),I=c((function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")})),j=function(e,t){var n=f(arguments),r=t;if((h(t)||void 0!==e)&&!d(e))return u(t)||(t=function(e,t){if(l(r)&&(t=s(r,this,e,t)),!d(t))return t}),n[1]=t,o(g,null,n)},E=function(e,t,n){var r=m(n,t-1),i=m(n,t+1);return v(O,e)&&!v(C,i)||v(C,e)&&!v(O,r)?"\\u"+y(_(e,0),16):e};g&&r({target:"JSON",stat:!0,forced:k||I},{stringify:function(e,t,n){var r=f(arguments),i=o(k?j:g,null,r);return I&&"string"==typeof i?b(i,w,E):i}})},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return Be})),n.d(t,"b",(function(){return ct})),n.d(t,"c",(function(){return pr})),n.d(t,"d",(function(){return gt})),n.d(t,"e",(function(){return at})),n.d(t,"f",(function(){return ut})),n.d(t,"g",(function(){return vt})),n.d(t,"h",(function(){return dt})),n.d(t,"i",(function(){return ft})),n.d(t,"j",(function(){return ht}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
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
 */function f(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function m(e,t,...n){if(!e)throw v(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||_(t)}
/**
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
 */const y=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
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
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["q"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function E(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["w"])()||"connection"in navigator))||navigator.onLine}function T(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["A"])()||Object(r["C"])()}get(){return E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function S(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new x(3e4,6e4);
/**
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
 */function A(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return M(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["H"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw U(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?S(e.config,i):`${e.config.apiScheme}://${i}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function q(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function V(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function W(e,t=!1){const n=Object(r["t"])(e),i=await n.getIdToken(t),o=H(i);m(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:z(B(o.auth_time)),issuedAtTime:z(B(o.iat)),expirationTime:z(B(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function B(e){return 1e3*Number(e)}function H(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["i"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(e){const t=H(e);return m(t,"internal-error"),m("undefined"!==typeof t.exp,"internal-error"),m("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&Y(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function X(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,V(n,{idToken:r}));m(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=Object(r["t"])(e);await X(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
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
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["H"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m("undefined"!==typeof e.idToken,"internal-error"),m("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(m("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(m("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(m("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
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
 */function ie(e,t){m("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return W(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,q(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:C}=t;m(b&&C,e,"internal-error");const k=re.fromJSON(this.name,C);m("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(h,e.name),m("boolean"===typeof y,e,"internal-error"),m("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(v,e.name),ie(_,e.name);const I=new oe({uid:b,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:v,lastLoginAt:_});return O&&Array.isArray(O)&&(I.providerData=O.map(e=>Object.assign({},e))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await X(i),i}}
/**
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
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
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(me(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["u"])()){return/firefox\//i.test(e)}function de(e=Object(r["u"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["u"])()){return/crios\//i.test(e)}function pe(e=Object(r["u"])()){return/iemobile/i.test(e)}function ge(e=Object(r["u"])()){return/android/i.test(e)}function ve(e=Object(r["u"])()){return/blackberry/i.test(e)}function me(e=Object(r["u"])()){return/webos/i.test(e)}function _e(e=Object(r["u"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(r["u"])()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(r["y"])()&&10===document.documentMode}function we(e=Object(r["u"])()){return _e(e)||ge(e)||me(e)||ve(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ce(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["u"])());break;case"Worker":n=`${le(Object(r["u"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
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
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new je(this),this.idTokenSubscription=new je(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await X(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["t"])(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return m(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ie(e){return Object(r["t"])(e)}class je{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["o"])(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */
class Ee{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
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
 */async function Te(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
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
 */
async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",A(e,t))}
/**
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
 */
async function Se(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}async function Pe(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",A(e,t))}
/**
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
 */class Re extends Ee{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Re(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Re(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Se(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Te(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Ne(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",A(e,t))}
/**
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
 */const Ae="http://localhost";class Le extends Ee{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ne(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:Ae,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["H"])(t)}return e}}
/**
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
 */async function Me(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",A(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t))}async function Fe(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const $e={["USER_NOT_FOUND"]:"user-not-found"};async function Ue(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",A(e,n),$e)}
/**
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
 */class qe extends Ee{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new qe({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new qe({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ue(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new qe({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function Ve(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ze(e){const t=Object(r["I"])(Object(r["s"])(e))["link"],n=t?Object(r["I"])(Object(r["s"])(t))["deep_link_id"]:null,i=Object(r["I"])(Object(r["s"])(e))["deep_link_id"],o=i?Object(r["I"])(Object(r["s"])(i))["link"]:null;return o||i||n||t||e}class We{constructor(e){var t,n,i,o,s,a;const c=Object(r["I"])(Object(r["s"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Ve(null!==(i=c["mode"])&&void 0!==i?i:null);m(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ze(e);try{return new We(t)}catch(n){return null}}}
/**
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
 */
class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(e,t){return Re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=We.parseLink(t);return m(n,"argument-error"),Re._fromEmailAndCode(e,n.code,n.tenantId)}}Be.PROVIDER_ID="password",Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class He{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ge extends He{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
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
 */
class Ye extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}Ye.GOOGLE_SIGN_IN_METHOD="google.com",Ye.PROVIDER_ID="google.com";
/**
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
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
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
 */
class Qe extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qe.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function Xe(e,t){return D(e,"POST","/v1/accounts:signUp",A(e,t))}
/**
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
 */Qe.TWITTER_SIGN_IN_METHOD="twitter.com",Qe.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
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
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
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
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);m(o.idToken,r,"internal-error");const s=H(o.idToken);m(s,r,"internal-error");const{sub:a}=s;return m(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
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
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Ie(e),t)}async function at(e,t){return it(Object(r["t"])(e),t)}
/**
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
 */async function ct(e,t,n){const r=Ie(e),i=await Xe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ut(e,t,n){return st(Object(r["t"])(e),Be.credential(t,n))}
/**
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
 */
/**
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
 */
async function lt(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function ht(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Object(r["t"])(e),o=await i.getIdToken(),s={idToken:o,displayName:t,photoUrl:n,returnSecureToken:!0},a=await K(i,lt(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:e})=>"password"===e);c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function dt(e,t){return pt(Object(r["t"])(e),t,null)}function ft(e,t){return pt(Object(r["t"])(e),null,t)}async function pt(e,t,n){const{auth:r}=e,i=await e.getIdToken(),o={idToken:i,returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const s=await K(e,Te(r,o));await e._updateTokensIfNecessary(s,!0)}
/**
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
 */function gt(e,t,n,i){return Object(r["t"])(e).onAuthStateChanged(t,n,i)}function vt(e){return Object(r["t"])(e).signOut()}
/**
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
 */
function mt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",A(e,t))}function _t(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",A(e,t))}new WeakMap;const bt="__sak";
/**
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
 */class yt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function wt(){const e=Object(r["u"])();return de(e)||_e(e)}const Ot=1e3,Ct=10;class kt extends yt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ct):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ot)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kt.type="LOCAL";const It=kt;
/**
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
 */class jt extends yt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jt.type="SESSION";const Et=jt;
/**
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
 */function Tt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
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
 */class xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new xt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Tt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function St(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */xt.receivers=[];class Pt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=St("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
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
 */function Rt(){return window}function Nt(e){Rt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function At(){return"undefined"!==typeof Rt()["WorkerGlobalScope"]&&"function"===typeof Rt()["importScripts"]}async function Lt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Mt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Dt(){return At()?self:null}
/**
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
 */const Ft="firebaseLocalStorageDb",$t=1,Ut="firebaseLocalStorage",qt="fbase_key";class Vt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zt(e,t){return e.transaction([Ut],t?"readwrite":"readonly").objectStore(Ut)}function Wt(){const e=indexedDB.deleteDatabase(Ft);return new Vt(e).toPromise()}function Bt(){const e=indexedDB.open(Ft,$t);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Ut,{keyPath:qt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Ut)?t(n):(n.close(),await Wt(),t(await Bt()))})})}async function Ht(e,t,n){const r=zt(e,!0).put({[qt]:t,value:n});return new Vt(r).toPromise()}async function Gt(e,t){const n=zt(e,!1).get(t),r=await new Vt(n).toPromise();return void 0===r?null:r.value}function Kt(e,t){const n=zt(e,!0).delete(t);return new Vt(n).toPromise()}const Yt=800,Jt=3;class Qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Bt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Jt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return At()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xt._getInstance(Dt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Lt(),!this.activeServiceWorker)return;this.sender=new Pt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Mt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bt();return await Ht(e,bt,"1"),await Kt(e,bt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ht(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Gt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=zt(e,!1).getAll();return new Vt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Qt.type="LOCAL";const Xt=Qt;
/**
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
 */function Zt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",A(e,t))}function en(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",A(e,t))}
/**
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
 */
/**
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
 */
function tn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function nn(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",tn().appendChild(r)})}function rn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */
/**
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
 */
rn("rcb"),new x(3e4,6e4);
/**
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
 */
const on="recaptcha";async function sn(e,t,n){var r;const i=await n.verify();try{let o;if(m("string"===typeof i,e,"argument-error"),m(n.type===on,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){m("enroll"===t.type,e,"internal-error");const n=await mt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{m("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;m(n,e,"missing-multi-factor-info");const s=await Zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
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
 */
class an{constructor(e){this.providerId=an.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return sn(this.auth,e,Object(r["t"])(t))}static credential(e,t){return qe._fromVerification(e,t)}static credentialFromResult(e){const t=e;return an.credentialFromTaggedObject(t)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?qe._fromTokenResponse(t,n):null}}
/**
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
 */
function cn(e,t){return t?w(t):(m(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */an.PROVIDER_ID="phone",an.PHONE_SIGN_IN_METHOD="phone";class un extends Ee{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ln(e){return ot(e.auth,new un(e),e.bypassAuthState)}function hn(e){const{auth:t,user:n}=e;return m(n,t,"internal-error"),it(n,new un(e),e.bypassAuthState)}async function dn(e){const{auth:t,user:n}=e;return m(n,t,"internal-error"),rt(n,new un(e),e.bypassAuthState)}
/**
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
 */class fn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ln;case"linkViaPopup":case"linkViaRedirect":return dn;case"reauthViaPopup":case"reauthViaRedirect":return hn;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const pn=new x(2e3,1e4);class gn extends fn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,gn.currentPopupAction&&gn.currentPopupAction.cancel(),gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=St();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,pn.get())};e()}}gn.currentPopupAction=null;
/**
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
 */
const vn="pendingRedirect",mn=new Map;class _n extends fn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const t=await bn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bn(e,t){const n=wn(t),r=yn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function yn(e){return w(e._redirectPersistence)}function wn(e){return ce(vn,e.config.apiKey,e.name)}
/**
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
 */async function On(e,t,n=!1){const r=Ie(e),i=cn(r,t),o=new _n(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
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
 */
const Cn=6e5;class kn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!En(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!jn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cn&&this.cachedEventUids.clear(),this.cachedEventUids.has(In(e))}saveEventToCache(e){this.cachedEventUids.add(In(e)),this.lastProcessedEventTime=Date.now()}}function In(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function jn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function En(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jn(e);default:return!1}}
/**
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
 */async function Tn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
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
 */const xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sn=/^https?/;async function Pn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tn(e);for(const r of t)try{if(Rn(r))return}catch(n){}f(e,"unauthorized-domain")}function Rn(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Sn.test(n))return!1;if(xn.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Nn=new x(3e4,6e4);function An(){const e=Rt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ln(e){return new Promise((t,n)=>{var r,i,o;function s(){An(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{An(),n(p(e,"network-request-failed"))},timeout:Nn.get()})}if(null===(i=null===(r=Rt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Rt().gapi)||void 0===o?void 0:o.load)){const t=rn("iframefcb");return Rt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},nn("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw Mn=null,e})}let Mn=null;function Dn(e){return Mn=Mn||Ln(e),Mn}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Fn=new x(5e3,15e3),$n="__/auth/iframe",Un="emulator/auth/iframe",qn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zn(e){const t=e.config;m(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,Un):`https://${e.config.authDomain}/${$n}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Vn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["H"])(o).slice(1)}`}async function Wn(e){const t=await Dn(e),n=Rt().gapi;return m(n,e,"internal-error"),t.open({where:document.body,url:zn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Rt().setTimeout(()=>{r(i)},Fn.get());function s(){Rt().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hn=500,Gn=600,Kn="_blank",Yn="http://localhost";class Jn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qn(e,t,n,i=Hn,o=Gn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Bn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["u"])().toLowerCase();n&&(c=fe(l)?Kn:n),he(l)&&(t=t||Yn,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(be(l)&&"_self"!==c)return Xn(t||"",c),new Jn(null);const d=window.open(t||"",c,h);m(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Jn(d)}function Xn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Zn="__/auth/handler",er="emulator/auth/handler";function tr(e,t,n,o,s,a){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof He){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["x"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${nr(e)}?${Object(r["H"])(u).slice(1)}`}function nr({config:e}){return e.emulator?S(e,er):`https://${e.authDomain}/${Zn}`}
/**
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
 */const rr="webStorageSupport";class ir{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Et,this._completeRedirectFn=On}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=tr(e,t,n,k(),r);return Qn(e,o,St())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Nt(tr(e,t,n,k(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Wn(e),n=new kn(e);return t.register("authEvent",t=>{m(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(rr,{type:rr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[rr];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||_e()}}const or=ir;class sr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class ar extends sr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ar(e)}_finalizeEnroll(e,t,n){return _t(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return en(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class cr{constructor(){}static assertion(e){return ar._fromCredential(e)}}cr.FACTOR_ID="phone";var ur="@firebase/auth",lr="0.19.12";
/**
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
 */
class hr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function dr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((t,r)=>{m(o&&!o.includes(":"),"invalid-api-key",{appName:t.name}),m(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce(e)},a=new ke(t,r,i);return C(a,n),a})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new hr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(ur,lr,dr(e)),Object(i["f"])(ur,lr,"esm2017")}
/**
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
 */function pr(e=Object(i["d"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:or,persistence:[Xt,It,Et]})}fr("Browser")},eac5:function(e,t,n){var r=n("861d"),i=Math.floor;e.exports=Number.isInteger||function(e){return!r(e)&&isFinite(e)&&i(e)===e}},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f22b:function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("f069"),s=n("4738").CONSTRUCTOR;r({target:"Promise",stat:!0,forced:s},{reject:function(e){var t=o.f(this);return i(t.reject,void 0,e),t.promise}})},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}}]);
//# sourceMappingURL=chunk-vendors.59bc70de.js.map