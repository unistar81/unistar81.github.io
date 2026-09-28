/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,X=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol(),ne=new WeakMap;let Pe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(X&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ne.set(t,e))}return e}toString(){return this.cssText}};const Me=s=>new Pe(typeof s=="string"?s:s+"",void 0,Ae),ke=(s,e)=>{if(X)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=D.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},re=X?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Me(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Oe,defineProperty:Be,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:ze,getOwnPropertySymbols:He,getPrototypeOf:De}=Object,q=globalThis,ae=q.trustedTypes,Ne=ae?ae.emptyScript:"",Ve=q.reactiveElementPolyfillSupport,O=(s,e)=>s,J={toAttribute(s,e){switch(e){case Boolean:s=s?Ne:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},we=(s,e)=>!Oe(s,e),oe={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;let L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Be(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Ue(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){const l=n?.call(this);r?.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=De(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,i=[...ze(t),...He(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(re(n))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:J).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=i.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:J;this._$Em=n;const l=a.fromAttribute(t,r.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,i,n=!1,r){if(e!==void 0){const a=this.constructor;if(n===!1&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??we)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i){const{wrapped:a}=r,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[O("elementProperties")]=new Map,L[O("finalized")]=new Map,Ve?.({ReactiveElement:L}),(q.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis,le=s=>s,V=ee.trustedTypes,de=V?V.createPolicy("lit-html",{createHTML:s=>s}):void 0,Se="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+A,qe=`<${Ee}>`,T=document,B=()=>T.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",te=Array.isArray,Fe=s=>te(s)||typeof s?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,he=/>/g,w=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,pe=/"/g,Ce=/^(?:script|style|textarea|title)$/i,je=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=je(1),y=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),fe=new WeakMap,C=T.createTreeWalker(T,129);function xe(s,e){if(!te(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const We=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",a=M;for(let l=0;l<t;l++){const o=s[l];let c,$,d=-1,u=0;for(;u<o.length&&(a.lastIndex=u,$=a.exec(o),$!==null);)u=a.lastIndex,a===M?$[1]==="!--"?a=ce:$[1]!==void 0?a=he:$[2]!==void 0?(Ce.test($[2])&&(n=RegExp("</"+$[2],"g")),a=w):$[3]!==void 0&&(a=w):a===w?$[0]===">"?(a=n??M,d=-1):$[1]===void 0?d=-2:(d=a.lastIndex-$[2].length,c=$[1],a=$[3]===void 0?w:$[3]==='"'?pe:ue):a===pe||a===ue?a=w:a===ce||a===he?a=M:(a=w,n=void 0);const h=a===w&&s[l+1].startsWith("/>")?" ":"";r+=a===M?o+qe:d>=0?(i.push(c),o.slice(0,d)+Se+o.slice(d)+A+h):o+A+(d===-2?l:h)}return[xe(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class z{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,a=0;const l=e.length-1,o=this.parts,[c,$]=We(e,t);if(this.el=z.createElement(c,i),C.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=C.nextNode())!==null&&o.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Se)){const u=$[a++],h=n.getAttribute(d).split(A),g=/([.?@])?(.*)/.exec(u);o.push({type:1,index:r,name:g[2],strings:h,ctor:g[1]==="."?Qe:g[1]==="?"?Ke:g[1]==="@"?Ye:F}),n.removeAttribute(d)}else d.startsWith(A)&&(o.push({type:6,index:r}),n.removeAttribute(d));if(Ce.test(n.tagName)){const d=n.textContent.split(A),u=d.length-1;if(u>0){n.textContent=V?V.emptyScript:"";for(let h=0;h<u;h++)n.append(d[h],B()),C.nextNode(),o.push({type:2,index:++r});n.append(d[u],B())}}}else if(n.nodeType===8)if(n.data===Ee)o.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(A,d+1))!==-1;)o.push({type:7,index:r}),d+=A.length-1}r++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function R(s,e,t=s,i){if(e===y)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl;const r=U(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=R(s,n._$AS(s,e.values),n,i)),e}class Ge{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??T).importNode(t,!0);C.currentNode=n;let r=C.nextNode(),a=0,l=0,o=i[0];for(;o!==void 0;){if(a===o.index){let c;o.type===2?c=new P(r,r.nextSibling,this,e):o.type===1?c=new o.ctor(r,o.name,o.strings,this,e):o.type===6&&(c=new Ze(r,this,e)),this._$AV.push(c),o=i[++l]}a!==o?.index&&(r=C.nextNode(),a++)}return C.currentNode=T,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class P{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),U(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=z.createElement(xe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const r=new Ge(n,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=fe.get(e.strings);return t===void 0&&fe.set(e.strings,t=new z(e)),t}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new P(this.O(B()),this.O(B()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=le(e).nextSibling;le(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,n){const r=this.strings;let a=!1;if(r===void 0)e=R(this,e,t,0),a=!U(e)||e!==this._$AH&&e!==y,a&&(this._$AH=e);else{const l=e;let o,c;for(e=r[0],o=0;o<r.length-1;o++)c=R(this,l[i+o],t,o),c===y&&(c=this._$AH[o]),a||=!U(c)||c!==this._$AH[o],c===p?e=p:e!==p&&(e+=(c??"")+r[o+1]),this._$AH[o]=c}a&&!n&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qe extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Ke extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ye extends F{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??p)===y)return;const i=this._$AH,n=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ze{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const Je={I:P},Xe=ee.litHtmlPolyfillSupport;Xe?.(z,P),(ee.litHtmlVersions??=[]).push("3.3.3");const et=(s,e,t)=>{const i=t?.renderBefore??e;let n=i._$litPart$;if(n===void 0){const r=t?.renderBefore??null;i._$litPart$=n=new P(e.insertBefore(B(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis;let x=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}};x._$litElement$=!0,x.finalized=!0,se.litElementHydrateSupport?.({LitElement:x});const tt=se.litElementPolyfillSupport;tt?.({LitElement:x});(se.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=s=>s??p,$e=new Map;let be=0;function N(s){return be+=1,`${s}-${be}`}function j(s,e){const t=$e.get(s);if(t!==void 0)return t;if(customElements.get(s)!==void 0)throw new Error(`Cannot register "${s}" because it is already registered.`);class i extends e{}return customElements.define(s,i),$e.set(s,i),i}function m(s){return typeof s=="string"?s.trim():""}function St(s,e,t){if(e<=s)return[s];const i=(e-s)/t,n=Number.isInteger(i)&&i<=10?i:4;return Array.from({length:n+1},(r,a)=>{const l=s+(e-s)*a/n;return Number(l.toFixed(6))})}class W extends x{createRenderRoot(){return this}}const ge=new Map;function st(s){return s==="secondary"?"secondary":"primary"}function it(s){return s==="small"||s==="large"?s:"medium"}function nt(s){return s==="submit"||s==="reset"?s:"button"}function Q(s){return typeof s=="string"?s.trim():""}class rt extends x{static properties={label:{type:String},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},type:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},wrap:{type:Boolean,reflect:!0},leadingIcon:{attribute:"leading-icon",type:String},trailingIcon:{attribute:"trailing-icon",type:String},iconOnly:{attribute:"icon-only",type:Boolean,reflect:!0},accessibleLabel:{attribute:"accessible-label",type:String}};constructor(){super(),this.label="",this.variant="primary",this.size="medium",this.type="button",this.disabled=!1,this.wrap=!1,this.leadingIcon="",this.trailingIcon="",this.iconOnly=!1,this.accessibleLabel=""}createRenderRoot(){return this}render(){const e=st(this.variant),t=it(this.size),i=nt(this.type),n=Q(this.leadingIcon),r=Q(this.trailingIcon),a=Q(this.accessibleLabel),l=n!==""?n:r;return b`
      <button
        class="dsl-button"
        type=${i}
        data-variant=${e}
        data-size=${t}
        data-shape=${f(this.iconOnly?"circle":void 0)}
        data-wrap=${f(this.wrap?"":void 0)}
        aria-label=${f(this.iconOnly&&a!==""?a:void 0)}
        ?disabled=${this.disabled}
      >
        ${this.iconOnly?this.renderIcon(l):b`
                ${this.renderIcon(n)}
                <span class="label">${this.label}</span>
                ${this.renderIcon(r)}
              `}
      </button>
    `}renderIcon(e){return e===""?p:b`
      <span class="dsl-icon" data-icon=${e} aria-hidden="true"></span>
    `}}function Et(s="dsl-button"){const e=ge.get(s);if(e!==void 0)return e;if(customElements.get(s)!==void 0)throw new Error(`Cannot register the Lit button as "${s}" because that custom-element name is already registered.`);class i extends rt{}return customElements.define(s,i),ge.set(s,i),i}const me=new Map;function _(s){return typeof s=="string"?s.trim():""}function at(s){return s==="small"||s==="large"?s:"medium"}function ot(s){return s==="center"||s==="end"?s:"start"}function K(s){switch(s){case"email":case"password":case"search":case"tel":case"url":case"number":return s;default:return"text"}}function lt(s){switch(s){case"none":case"text":case"decimal":case"numeric":case"tel":case"search":case"email":case"url":return s;default:return}}function dt(s){if(typeof s=="number"&&Number.isInteger(s)&&s>=0)return s}class ct extends x{initialValue="";resetRoot;static properties={inputId:{attribute:"input-id",type:String},name:{type:String},type:{type:String,reflect:!0},value:{type:String},placeholder:{type:String},size:{type:String,reflect:!0},align:{type:String,reflect:!0},inputMode:{attribute:"inputmode",type:String},autocomplete:{type:String},maxLength:{attribute:"maxlength",type:Number},accessibleLabel:{attribute:"accessible-label",type:String},labelledBy:{attribute:"labelled-by",type:String},describedBy:{attribute:"described-by",type:String},prefixText:{attribute:"prefix-text",type:String},suffixText:{attribute:"suffix-text",type:String},leadingIcon:{attribute:"leading-icon",type:String},trailingIcon:{attribute:"trailing-icon",type:String},passwordToggle:{attribute:"password-toggle",type:Boolean,reflect:!0},showPasswordLabel:{attribute:"show-password-label",type:String},hidePasswordLabel:{attribute:"hide-password-label",type:String},passwordVisible:{state:!0},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0}};constructor(){super(),this.inputId="",this.name="",this.type="text",this.value="",this.placeholder="",this.size="medium",this.align="start",this.inputMode="",this.autocomplete="",this.maxLength=void 0,this.accessibleLabel="",this.showPasswordLabel="",this.hidePasswordLabel="",this.labelledBy="",this.describedBy="",this.prefixText="",this.suffixText="",this.passwordToggle=!1,this.passwordVisible=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.resetRoot=this.getRootNode(),this.resetRoot.addEventListener("reset",this.handleFormReset,!0)}disconnectedCallback(){this.resetRoot?.removeEventListener("reset",this.handleFormReset,!0),this.resetRoot=void 0,super.disconnectedCallback()}handleFormReset=e=>{const t=this.inputElement;t===null||e.target!==t.form||queueMicrotask(()=>{!e.defaultPrevented&&this.isConnected&&(this.value=t.value)})};get inputElement(){return this.querySelector(":scope > .dsl-input input")}focus(e){this.inputElement?.focus(e)}select(){this.inputElement?.select()}willUpdate(e){this.hasUpdated||(this.initialValue=this.value),(e.has("passwordToggle")||e.has("type"))&&(!this.passwordToggle||K(this.type)!=="password")&&(this.passwordVisible=!1)}render(){const e=_(this.inputId),t=_(this.name),i=_(this.placeholder),n=_(this.autocomplete),r=at(this.size),a=ot(this.align),l=K(this.type),o=l==="password"&&this.passwordToggle,c=o&&this.passwordVisible?"text":l,$=lt(this.inputMode),d=dt(this.maxLength),u=_(this.accessibleLabel),h=_(this.labelledBy),g=_(this.describedBy),v=h===""&&u!==""?u:void 0,I=b`
      ${this.renderAdornment(this.prefixText)} ${this.renderIcon(this.leadingIcon)}

      <input
        id=${f(e!==""?e:void 0)}
        name=${f(t!==""?t:void 0)}
        type=${c}
        .defaultValue=${this.initialValue}
        .value=${this.value}
        placeholder=${f(i!==""?i:void 0)}
        inputmode=${f($)}
        autocomplete=${f(n!==""?n:void 0)}
        maxlength=${f(d)}
        aria-label=${f(v)}
        aria-labelledby=${f(h!==""?h:void 0)}
        aria-describedby=${f(g!==""?g:void 0)}
        aria-invalid=${f(this.invalid?"true":void 0)}
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.handleInput}
      />

      ${this.renderIcon(this.trailingIcon)} ${this.renderAdornment(this.suffixText)}
    `;return b`
      <div class="dsl-input" data-size=${r} data-align=${a}>
        ${o?b`
                <span class="content">${I}</span>

                <button
                  class="action"
                  type="button"
                  data-input-password-toggle
                  data-input-password-managed
                  aria-controls=${f(e!==""?e:void 0)}
                  aria-label=${this.passwordVisible?_(this.hidePasswordLabel)||"Hide password":_(this.showPasswordLabel)||"Show password"}
                  ?disabled=${this.disabled}
                  @click=${this.handlePasswordToggle}
                >
                  <span
                    class="dsl-icon"
                    data-icon=${this.passwordVisible?"eye-off":"eye"}
                    aria-hidden="true"
                  ></span>
                </button>
              `:I}
      </div>
    `}renderAdornment(e){const t=_(e);return t===""?p:b` <span class="glyph" aria-hidden="true">${t}</span> `}handlePasswordToggle(){if(!this.passwordToggle||this.disabled||K(this.type)!=="password"){this.passwordVisible=!1;return}this.passwordVisible=!this.passwordVisible}handleInput(e){e.target instanceof HTMLInputElement&&(this.value=e.target.value)}renderIcon(e){const t=_(e);return t===""?p:b`
      <span class="dsl-icon" data-icon=${t} aria-hidden="true"></span>
    `}}function Ct(s="dsl-input"){const e=me.get(s);if(e!==void 0)return e;if(customElements.get(s)!==void 0)throw new Error(`Cannot register the Lit input as "${s}" because that custom-element name is already registered.`);class i extends ct{}return customElements.define(s,i),me.set(s,i),i}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Te=s=>(...e)=>({_$litDirective$:s,values:e});let Ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ht}=Je,ye=s=>s,ut=s=>s.strings===void 0,ve=()=>document.createComment(""),k=(s,e,t)=>{const i=s._$AA.parentNode,n=e===void 0?s._$AB:e._$AA;if(t===void 0){const r=i.insertBefore(ve(),n),a=i.insertBefore(ve(),n);t=new ht(r,a,s,s.options)}else{const r=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let o;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(o=s._$AU)!==a._$AU&&t._$AP(o)}if(r!==n||l){let o=t._$AA;for(;o!==r;){const c=ye(o).nextSibling;ye(i).insertBefore(o,n),o=c}}}return t},S=(s,e,t=s)=>(s._$AI(e,t),s),pt={},Le=(s,e=pt)=>s._$AH=e,ft=s=>s._$AH,Y=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=(s,e,t)=>{const i=new Map;for(let n=e;n<=t;n++)i.set(s[n],n);return i},Z=Te(class extends Ie{constructor(s){if(super(s),s.type!==E.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const n=[],r=[];let a=0;for(const l of s)n[a]=i?i(l,a):a,r[a]=t(l,a),a++;return{values:r,keys:n}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const n=ft(s),{values:r,keys:a}=this.dt(e,t,i);if(!Array.isArray(n))return this.ut=a,r;const l=this.ut??=[],o=[];let c,$,d=0,u=n.length-1,h=0,g=r.length-1;for(;d<=u&&h<=g;)if(n[d]===null)d++;else if(n[u]===null)u--;else if(l[d]===a[h])o[h]=S(n[d],r[h]),d++,h++;else if(l[u]===a[g])o[g]=S(n[u],r[g]),u--,g--;else if(l[d]===a[g])o[g]=S(n[d],r[g]),k(s,o[g+1],n[d]),d++,g--;else if(l[u]===a[h])o[h]=S(n[u],r[h]),k(s,n[d],n[u]),u--,h++;else if(c===void 0&&(c=_e(a,h,g),$=_e(l,d,u)),c.has(l[d]))if(c.has(l[u])){const v=$.get(a[h]),I=v!==void 0?n[v]:null;if(I===null){const ie=k(s,n[d]);S(ie,r[h]),o[h]=ie}else o[h]=S(I,r[h]),k(s,n[d],I),n[v]=null;h++}else Y(n[u]),u--;else Y(n[d]),d++;for(;h<=g;){const v=k(s,o[g+1]);S(v,r[h]),o[h++]=v}for(;d<=u;){const v=n[d++];v!==null&&Y(v)}return this.ut=a,Le(s,o),y}});class $t extends W{instanceId=N("dsl-tabs");mediaQuery;resizeObserver;retainedFocus;widthFrame;static properties={items:{attribute:!1},renderPanel:{attribute:!1},activeTab:{attribute:"active-tab",type:String,reflect:!0},accessibleLabel:{attribute:"accessible-label",type:String},mobileSelectLabel:{attribute:"mobile-select-label",type:String},mobilePresentation:{attribute:"mobile-presentation",type:String,reflect:!0},smallScreen:{state:!0}};constructor(){super(),this.items=[{id:"overview",label:"Overview",content:"Review account information."},{id:"activity",label:"Activity",content:"See recent account events."},{id:"settings",label:"Settings",content:"Manage account preferences."}],this.activeTab="overview",this.accessibleLabel="Account information",this.mobileSelectLabel="",this.mobilePresentation="dropdown",this.smallScreen=!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this.observeWidth())}disconnectedCallback(){this.resizeObserver?.disconnect(),this.widthFrame!==void 0&&cancelAnimationFrame(this.widthFrame),this.widthFrame=void 0,this.mediaQuery?.removeEventListener("change",this.handleMediaChange),super.disconnectedCallback()}willUpdate(e){if(e.has("items")){const t=this.ownerDocument.activeElement;this.retainedFocus=t instanceof HTMLElement&&this.contains(t)?t:void 0}e.has("items")&&!this.items.some(t=>t.id===this.activeTab)&&(this.activeTab=this.items[0]?.id??"")}updated(){const e=this.retainedFocus;this.retainedFocus=void 0,e?.isConnected&&this.contains(e)&&!e.closest("[hidden]")&&this.ownerDocument.activeElement===this.ownerDocument.body&&e.focus({preventScroll:!0})}render(){const e=this.items.some(r=>r.id===this.activeTab)?this.activeTab:this.items[0]?.id??"",t=this.smallScreen&&this.mobilePresentation==="accordion",i=this.smallScreen&&this.mobilePresentation==="dropdown",n=this.smallScreen&&this.mobilePresentation==="expanded";return b`
      <div
        class="dsl-tabs"
        data-tabs
        data-enhanced="true"
        data-small-screen=${String(this.smallScreen)}
        data-mobile-presentation=${this.mobilePresentation}
        data-active-tab=${e}
      >
        <div
          class="tablist"
          role="tablist"
          aria-label=${this.accessibleLabel}
          aria-orientation=${n?"vertical":"horizontal"}
          ?hidden=${i||t}
          @keydown=${this.handleTabKeydown}
        >
          ${Z(this.items,r=>r.id,r=>{const a=this.ids(r.id),l=r.id===e;return b`
                <button
                  id=${a.tab}
                  class="tab"
                  type="button"
                  role="tab"
                  aria-selected=${String(l)}
                  aria-controls=${a.panel}
                  data-tab=${r.id}
                  tabindex=${l?0:-1}
                  @click=${()=>this.selectTab(r.id,"tab")}
                >
                  ${r.label}
                </button>
              `})}
        </div>

        <div class="dsl-select mobile-select" ?hidden=${!i}>
          <select
            aria-label=${m(this.mobileSelectLabel)||`Choose ${this.accessibleLabel.toLowerCase()} tab`}
            data-tabs-select
            .value=${e}
            @change=${this.handleSelectChange}
          >
            ${Z(this.items,r=>r.id,r=>b`<option value=${r.id} .selected=${r.id===e}>
                  ${r.label}
                </option>`)}
          </select>
        </div>

        <div class="panels">
          ${Z(this.items,r=>r.id,r=>{const a=this.ids(r.id),l=r.id===e,o=this.renderPanel?.(r),c=t?a.accordionTrigger:void 0;return b`
                <section
                  id=${a.panel}
                  class="panel"
                  role=${f(t?void 0:"tabpanel")}
                  aria-labelledby=${f(t?void 0:a.tab)}
                  data-tab-panel=${r.id}
                  ?hidden=${t?!1:!l}
                >
                  <button
                    id=${a.accordionTrigger}
                    class="accordion-trigger"
                    type="button"
                    aria-expanded=${String(l)}
                    aria-controls=${a.content}
                    data-tab=${r.id}
                    ?hidden=${!t}
                    @click=${()=>this.selectTab(r.id,"accordion")}
                  >
                    ${r.label}
                  </button>
                  <div
                    id=${a.content}
                    class="content"
                    role=${f(t?"region":void 0)}
                    aria-labelledby=${f(c)}
                    ?hidden=${t&&!l}
                  >
                    ${o===void 0?b`<p>${r.content}</p>`:o}
                  </div>
                </section>
              `})}
        </div>
      </div>
    `}handleMediaChange=e=>{this.smallScreen=e.matches};observeWidth(){if(!this.isConnected)return;const e=this.querySelector(":scope > .dsl-tabs");if(e===null||typeof window>"u")return;this.resizeObserver?.disconnect(),this.mediaQuery?.removeEventListener("change",this.handleMediaChange),this.mediaQuery=typeof window.matchMedia=="function"?window.matchMedia("(max-width: 32rem)"):void 0;const t=(i=e.getBoundingClientRect().width)=>{const n=Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize),r=32*(Number.isFinite(n)?n:16);this.smallScreen=i>0?i<=r:this.mediaQuery?.matches??!1};typeof ResizeObserver=="function"?(this.resizeObserver=new ResizeObserver(i=>{const n=i.find(r=>r.target===e);this.widthFrame!==void 0&&cancelAnimationFrame(this.widthFrame),this.widthFrame=requestAnimationFrame(()=>{this.widthFrame=void 0,this.isConnected&&t(n?.contentRect.width)})}),this.resizeObserver.observe(e)):this.mediaQuery?.addEventListener("change",this.handleMediaChange),t()}handleSelectChange=e=>{const t=e.currentTarget;t instanceof HTMLSelectElement&&this.selectTab(t.value,"dropdown")};handleTabKeydown=e=>{const t=e.target;if(!(t instanceof HTMLButtonElement))return;const i=this.items.findIndex(d=>d.id===t.dataset.tab);if(i<0)return;const n=this.smallScreen&&this.mobilePresentation==="expanded",r=getComputedStyle(t.parentElement).direction==="rtl",a=n?"ArrowDown":r?"ArrowLeft":"ArrowRight",l=n?"ArrowUp":r?"ArrowRight":"ArrowLeft",o=this.items.length-1;let c;if(e.key==="Home"?c=0:e.key==="End"?c=o:e.key===a?c=i===o?0:i+1:e.key===l&&(c=i===0?o:i-1),c===void 0)return;e.preventDefault();const $=this.items[c];$!==void 0&&(this.selectTab($.id,"keyboard"),this.updateComplete.then(()=>{this.querySelector(`.dsl-tabs > .tablist > .tab[data-tab="${CSS.escape($.id)}"]`)?.focus()}))};selectTab(e,t){if(!this.items.some(n=>n.id===e))return;const i=this.activeTab;this.activeTab=e,i!==e&&this.dispatchEvent(new CustomEvent("dsl-tab-change",{bubbles:!0,composed:!0,detail:{value:e,previousValue:i,source:t}}))}ids(e){const t=Array.from(e,n=>n.codePointAt(0).toString(16)).join("-"),i=`${this.instanceId}-${t}`;return{tab:`${i}-tab`,panel:`${i}-panel`,accordionTrigger:`${i}-accordion-trigger`,content:`${i}-content`}}}function Tt(s="dsl-tabs"){return j(s,$t)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=Te(class extends Ie{constructor(s){if(super(s),s.type!==E.PROPERTY&&s.type!==E.ATTRIBUTE&&s.type!==E.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ut(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===y||e===p)return e;const t=s.element,i=s.name;if(s.type===E.PROPERTY){if(e===t[i])return y}else if(s.type===E.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return y}else if(s.type===E.ATTRIBUTE&&t.getAttribute(i)===e+"")return y;return Le(s),e}});class Re{host;control;synchronize;root;constructor(e,t,i){this.host=e,this.control=t,this.synchronize=i,e.addController(this)}hostConnected(){this.root=this.host.getRootNode(),this.root.addEventListener("reset",this.reset,!0)}hostDisconnected(){this.root?.removeEventListener("reset",this.reset,!0),this.root=void 0}reset=e=>{const t=this.control();t===null||e.target!==t.form||queueMicrotask(()=>{!e.defaultPrevented&&this.host.isConnected&&this.control()===t&&this.synchronize()})}}const H=new WeakMap;class gt extends W{initialChecked=!1;changeRoot;checkedValue=!1;checkedPending=!1;static properties={label:{type:String},description:{type:String},inputId:{attribute:"input-id",type:String},name:{type:String},value:{type:String},checked:{type:Boolean,reflect:!0,noAccessor:!0},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};get checked(){return this.checkedValue}set checked(e){const t=this.checkedValue;this.checkedValue=e,this.checkedPending=!0,this.requestUpdate("checked",t)}constructor(){super(),this.label="",this.description="",this.inputId="",this.name="",this.value="on",this.checked=!1,this.required=!1,this.disabled=!1,new Re(this,()=>this.nativeControl,()=>this.synchronize())}get nativeControl(){return this.querySelector("input")}willUpdate(){this.hasUpdated||(this.initialChecked=this.checked)}connectedCallback(){super.connectedCallback();const e=this.nativeControl;e&&H.set(e,this),this.changeRoot=this.getRootNode(),this.changeRoot.addEventListener("change",this.handleGroupChange,!0),this.changeRoot.addEventListener("input",this.handleGroupChange,!0)}disconnectedCallback(){this.changeRoot?.removeEventListener("change",this.handleGroupChange,!0),this.changeRoot?.removeEventListener("input",this.handleGroupChange,!0),this.changeRoot=void 0;const e=this.nativeControl;e&&H.delete(e),super.disconnectedCallback()}updated(){const e=this.nativeControl;if(e&&(this.checkedPending=!1,H.set(e,this),e.type==="radio"&&e.name!=="")){const t=e.getRootNode(),i=e.form?.elements??t.querySelectorAll("input");for(const n of i)n instanceof HTMLInputElement&&this.sameGroup(e,n)&&H.get(n)?.synchronize(!1)}}sameGroup(e,t){return e.type==="radio"&&t.type==="radio"&&e.name!==""&&e.name===t.name&&e.form===t.form&&e.getRootNode()===t.getRootNode()}handleGroupChange=e=>{const t=this.nativeControl;t&&e.target instanceof HTMLInputElement&&this.sameGroup(t,e.target)&&this.synchronize()};synchronize(e=!0){const t=this.nativeControl;if(t&&(e||!this.checkedPending)){const i=this.checkedValue;this.checkedValue=t.checked,this.checkedPending=!1,this.requestUpdate("checked",i)}}handleChange(e){e.target instanceof HTMLInputElement&&this.synchronize()}}class mt extends W{dialogId=N("dsl-modal-dialog");titleId=N("dsl-modal-title");descriptionId=N("dsl-modal-description");static properties={heading:{type:String},content:{type:String},renderContent:{attribute:!1},triggerLabel:{attribute:"trigger-label",type:String},closeLabel:{attribute:"close-label",type:String},open:{type:Boolean,reflect:!0},actions:{attribute:!1}};constructor(){super(),this.heading="",this.content="",this.triggerLabel="Open dialog",this.closeLabel="",this.open=!1,this.actions=[]}render(){const e=this.actions.some(t=>t.autofocus);return b`
      <button
        class="dsl-button"
        type="button"
        data-variant="secondary"
        data-size="medium"
        @click=${this.showModal}
      >
        <span>${this.triggerLabel}</span>
      </button>

      <dialog
        id=${this.dialogId}
        class="dsl-modal"
        aria-labelledby=${this.titleId}
        aria-describedby=${this.content?this.descriptionId:p}
        @close=${this.handleClose}
      >
        <header>
          <h2
            id=${this.titleId}
            tabindex=${e?p:"-1"}
            ?autofocus=${!e&&this.renderContent===void 0}
          >
            ${this.heading}
          </h2>
        </header>

        <button
          class="close"
          type="button"
          aria-label=${m(this.closeLabel)||(this.heading?`Close ${this.heading}`:"Close dialog")}
          @click=${this.close}
        >
          <span class="dsl-icon" data-icon="close" aria-hidden="true"></span>
        </button>

        <div class="content">
          ${this.content||this.renderContent===void 0?b`<p id=${this.descriptionId}>${this.content}</p>`:p}
          ${this.renderContent?.()}
        </div>

        ${this.actions.length>0?b`
                <form class="actions" method="dialog">
                  ${this.actions.map(t=>b`
                      <button
                        class="dsl-button"
                        type=${t.form||t.dismiss!==!1?"submit":"button"}
                        form=${f(t.form)}
                        data-variant=${t.variant??"secondary"}
                        data-size="medium"
                        value=${t.id}
                        ?autofocus=${t.autofocus??!1}
                        @click=${()=>this.handleAction(t)}
                      >
                        <span>${t.label}</span>
                      </button>
                    `)}
                </form>
              `:p}
      </dialog>
    `}updated(e){if(!e.has("open"))return;const t=this.dialog;if(t!==null){if(this.open&&!t.open){t.returnValue="",t.showModal(),this.dispatchOpenChange(t);return}!this.open&&t.open&&t.close()}}get dialog(){return this.querySelector(`#${CSS.escape(this.dialogId)}`)}showModal(){const e=this.dialog;e===null||e.open||(e.returnValue="",e.showModal(),this.open=!0,this.dispatchOpenChange(e))}close(){this.dialog?.close("dismiss")}handleClose(e){const t=e.currentTarget;!(t instanceof HTMLDialogElement)||t.open||(this.open=!1,this.dispatchOpenChange(t))}handleAction(e){this.dispatchEvent(new CustomEvent("dsl-action",{bubbles:!0,composed:!0,detail:{id:e.id}}))}dispatchOpenChange(e){this.dispatchEvent(new CustomEvent("dsl-open-change",{bubbles:!0,composed:!0,detail:{open:e.open,returnValue:e.returnValue}}))}}function It(s="dsl-modal"){return j(s,mt)}class yt extends W{initialValue="";selectionInitialized=!1;static properties={selectId:{attribute:"select-id",type:String},name:{type:String},value:{type:String},placeholder:{type:String},accessibleLabel:{attribute:"accessible-label",type:String},labelledBy:{attribute:"labelled-by",type:String},describedBy:{attribute:"described-by",type:String},options:{attribute:!1},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0}};constructor(){super(),this.selectId="",this.name="",this.value="",this.placeholder="",this.accessibleLabel="",this.labelledBy="",this.describedBy="",this.options=[],this.required=!1,this.disabled=!1,this.invalid=!1,new Re(this,()=>this.querySelector("select"),()=>{this.value=this.querySelector("select").value})}willUpdate(){this.hasUpdated||(this.initialValue=this.value)}updated(e){if(e.has("value")||e.has("options")||e.has("placeholder")){const t=this.querySelector("select");!this.selectionInitialized&&this.value===""&&![...t.options].some(i=>i.value==="")?this.value=t.value:t.value=this.value,this.selectionInitialized=t.options.length>0}}render(){return b`
      <div class="dsl-select">
        <select
          id=${f(m(this.selectId)||void 0)}
          name=${f(m(this.name)||void 0)}
          aria-label=${f(m(this.labelledBy)?void 0:m(this.accessibleLabel)||void 0)}
          aria-labelledby=${f(m(this.labelledBy)||void 0)}
          aria-describedby=${f(m(this.describedBy)||void 0)}
          aria-invalid=${f(this.invalid?"true":void 0)}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        >
          ${m(this.placeholder)===""?null:b`<option
                  value=""
                  .defaultSelected=${this.initialValue===""}
                  disabled
                >
                  ${this.placeholder}
                </option>`}
          ${this.options.map(e=>this.renderItem(e))}
        </select>
      </div>
    `}renderItem(e){return"options"in e?b`
          <optgroup label=${e.label} ?disabled=${e.disabled}>
            ${e.options.map(t=>this.renderOption(t))}
          </optgroup>
        `:this.renderOption(e)}renderOption(e){return b`
      <option
        value=${e.value}
        .defaultSelected=${e.value===this.initialValue}
        ?disabled=${e.disabled}
      >
        ${e.label}
      </option>
    `}handleChange(e){e.target instanceof HTMLSelectElement&&(this.value=e.target.value)}}function Lt(s="dsl-select"){return j(s,yt)}class vt extends gt{renderMode="unresolved";get nativeControl(){return this.renderMode==="managed"?super.nativeControl:null}connectedCallback(){this.classList.add("dsl-toggle"),super.connectedCallback()}render(){return this.preserveAuthoredLightDom()?y:b`
      <label class="label-wrapper">
        <span class="label">
          ${this.label}
          ${m(this.description)===""?p:b`<small>${this.description}</small>`}
        </span>
        <span class="switch-wrapper">
          <input
            id=${f(m(this.inputId)||void 0)}
            name=${f(m(this.name)||void 0)}
            type="checkbox"
            role="switch"
            value=${this.value}
            .defaultChecked=${this.initialChecked}
            .checked=${bt(this.checked)}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @input=${this.handleChange}
            @change=${this.handleChange}
          />
          <span class="slider" aria-hidden="true"></span>
        </span>
      </label>
    `}preserveAuthoredLightDom(){return this.renderMode==="unresolved"&&(this.renderMode=this.childNodes.length===0?"managed":"authored"),this.renderMode==="authored"}}function Rt(s="dsl-toggle"){return j(s,vt)}export{p as A,et as D,y as E,W as L,gt as N,It as a,Ct as b,Lt as c,Tt as d,Te as e,Rt as f,Et as g,b as h,Ie as i,rt as j,ct as k,mt as l,yt as m,$t as n,vt as o,j as p,m as q,f as r,N as s,E as t,bt as u,Re as v,St as w};
