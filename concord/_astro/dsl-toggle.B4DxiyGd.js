/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,G=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),se=new WeakMap;let Ce=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&se.set(t,e))}return e}toString(){return this.cssText}};const xe=s=>new Ce(typeof s=="string"?s:s+"",void 0,ve),Te=(s,e)=>{if(G)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),n=H.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,s.appendChild(i)}},ie=G?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return xe(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ie,defineProperty:Me,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Pe,getOwnPropertySymbols:Re,getPrototypeOf:Oe}=Object,N=globalThis,ne=N.trustedTypes,ke=ne?ne.emptyScript:"",Ue=N.reactiveElementPolyfillSupport,O=(s,e)=>s,J={toAttribute(s,e){switch(e){case Boolean:s=s?ke:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},_e=(s,e)=>!Ie(s,e),re={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:_e};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let I=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Me(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=Le(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){const l=n?.call(this);r?.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,i=[...Pe(t),...Re(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(ie(n))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Te(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:J).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const r=i.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:J;this._$Em=n;const l=a.fromAttribute(t,r.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,i,n=!1,r){if(e!==void 0){const a=this.constructor;if(n===!1&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??_e)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,r]of i){const{wrapped:a}=r,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,r,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[O("elementProperties")]=new Map,I[O("finalized")]=new Map,Ue?.({ReactiveElement:I}),(N.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,ae=s=>s,D=X.trustedTypes,oe=D?D.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ae="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+_,ze=`<${we}>`,x=document,k=()=>x.createComment(""),U=s=>s===null||typeof s!="object"&&typeof s!="function",Y=Array.isArray,He=s=>Y(s)||typeof s?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,w=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,he=/"/g,Se=/^(?:script|style|textarea|title)$/i,Be=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=Be(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ue=new WeakMap,E=x.createTreeWalker(x,129);function Ee(s,e){if(!Y(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return oe!==void 0?oe.createHTML(e):e}const De=(s,e)=>{const t=s.length-1,i=[];let n,r=e===2?"<svg>":e===3?"<math>":"",a=P;for(let l=0;l<t;l++){const o=s[l];let h,b,d=-1,u=0;for(;u<o.length&&(a.lastIndex=u,b=a.exec(o),b!==null);)u=a.lastIndex,a===P?b[1]==="!--"?a=le:b[1]!==void 0?a=de:b[2]!==void 0?(Se.test(b[2])&&(n=RegExp("</"+b[2],"g")),a=w):b[3]!==void 0&&(a=w):a===w?b[0]===">"?(a=n??P,d=-1):b[1]===void 0?d=-2:(d=a.lastIndex-b[2].length,h=b[1],a=b[3]===void 0?w:b[3]==='"'?he:ce):a===he||a===ce?a=w:a===le||a===de?a=P:(a=w,n=void 0);const c=a===w&&s[l+1].startsWith("/>")?" ":"";r+=a===P?o+ze:d>=0?(i.push(h),o.slice(0,d)+Ae+o.slice(d)+_+c):o+_+(d===-2?l:c)}return[Ee(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class z{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,a=0;const l=e.length-1,o=this.parts,[h,b]=De(e,t);if(this.el=z.createElement(h,i),E.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=E.nextNode())!==null&&o.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(Ae)){const u=b[a++],c=n.getAttribute(d).split(_),g=/([.?@])?(.*)/.exec(u);o.push({type:1,index:r,name:g[2],strings:c,ctor:g[1]==="."?Ve:g[1]==="?"?qe:g[1]==="@"?Fe:V}),n.removeAttribute(d)}else d.startsWith(_)&&(o.push({type:6,index:r}),n.removeAttribute(d));if(Se.test(n.tagName)){const d=n.textContent.split(_),u=d.length-1;if(u>0){n.textContent=D?D.emptyScript:"";for(let c=0;c<u;c++)n.append(d[c],k()),E.nextNode(),o.push({type:2,index:++r});n.append(d[u],k())}}}else if(n.nodeType===8)if(n.data===we)o.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(_,d+1))!==-1;)o.push({type:7,index:r}),d+=_.length-1}r++}}static createElement(e,t){const i=x.createElement("template");return i.innerHTML=e,i}}function M(s,e,t=s,i){if(e===A)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl;const r=U(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=M(s,n._$AS(s,e.values),n,i)),e}class Ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??x).importNode(t,!0);E.currentNode=n;let r=E.nextNode(),a=0,l=0,o=i[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new L(r,r.nextSibling,this,e):o.type===1?h=new o.ctor(r,o.name,o.strings,this,e):o.type===6&&(h=new je(r,this,e)),this._$AV.push(h),o=i[++l]}a!==o?.index&&(r=E.nextNode(),a++)}return E.currentNode=x,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class L{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),U(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):He(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=z.createElement(Ee(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const r=new Ne(n,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new z(e)),t}k(e){Y(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new L(this.O(k()),this.O(k()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=ae(e).nextSibling;ae(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(e,t=this,i,n){const r=this.strings;let a=!1;if(r===void 0)e=M(this,e,t,0),a=!U(e)||e!==this._$AH&&e!==A,a&&(this._$AH=e);else{const l=e;let o,h;for(e=r[0],o=0;o<r.length-1;o++)h=M(this,l[i+o],t,o),h===A&&(h=this._$AH[o]),a||=!U(h)||h!==this._$AH[o],h===p?e=p:e!==p&&(e+=(h??"")+r[o+1]),this._$AH[o]=h}a&&!n&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ve extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class qe extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Fe extends V{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??p)===A)return;const i=this._$AH,n=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class je{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const We={I:L},Qe=X.litHtmlPolyfillSupport;Qe?.(z,L),(X.litHtmlVersions??=[]).push("3.3.3");const Ke=(s,e,t)=>{const i=t?.renderBefore??e;let n=i._$litPart$;if(n===void 0){const r=t?.renderBefore??null;i._$litPart$=n=new L(e.insertBefore(k(),r),r,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis;let C=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};C._$litElement$=!0,C.finalized=!0,ee.litElementHydrateSupport?.({LitElement:C});const Ze=ee.litElementPolyfillSupport;Ze?.({LitElement:C});(ee.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=s=>s??p,pe=new Map;let $e=0;function B(s){return $e+=1,`${s}-${$e}`}function q(s,e){const t=pe.get(s);if(t!==void 0)return t;if(customElements.get(s)!==void 0)throw new Error(`Cannot register "${s}" because it is already registered.`);class i extends e{}return customElements.define(s,i),pe.set(s,i),i}function v(s){return typeof s=="string"?s.trim():""}function vt(s,e,t){if(e<=s)return[s];const i=(e-s)/t,n=Number.isInteger(i)&&i<=10?i:4;return Array.from({length:n+1},(r,a)=>{const l=s+(e-s)*a/n;return Number(l.toFixed(6))})}class F extends C{createRenderRoot(){return this}}const fe=new Map;function Je(s){return s==="secondary"?"secondary":"primary"}function Ge(s){return s==="small"||s==="large"?s:"medium"}function Xe(s){return s==="submit"||s==="reset"?s:"button"}function W(s){return typeof s=="string"?s.trim():""}class Ye extends C{static properties={label:{type:String},variant:{type:String,reflect:!0},size:{type:String,reflect:!0},type:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},wrap:{type:Boolean,reflect:!0},leadingIcon:{attribute:"leading-icon",type:String},trailingIcon:{attribute:"trailing-icon",type:String},iconOnly:{attribute:"icon-only",type:Boolean,reflect:!0},accessibleLabel:{attribute:"accessible-label",type:String}};constructor(){super(),this.label="",this.variant="primary",this.size="medium",this.type="button",this.disabled=!1,this.wrap=!1,this.leadingIcon="",this.trailingIcon="",this.iconOnly=!1,this.accessibleLabel=""}createRenderRoot(){return this}render(){const e=Je(this.variant),t=Ge(this.size),i=Xe(this.type),n=W(this.leadingIcon),r=W(this.trailingIcon),a=W(this.accessibleLabel),l=n!==""?n:r;return f`
      <button
        class="dsl-button"
        type=${i}
        data-variant=${e}
        data-size=${t}
        data-shape=${$(this.iconOnly?"circle":void 0)}
        data-wrap=${$(this.wrap?"":void 0)}
        aria-label=${$(this.iconOnly&&a!==""?a:void 0)}
        ?disabled=${this.disabled}
      >
        ${this.iconOnly?this.renderIcon(l):f`
                ${this.renderIcon(n)}
                <span class="label">${this.label}</span>
                ${this.renderIcon(r)}
              `}
      </button>
    `}renderIcon(e){return e===""?p:f`
      <span class="dsl-icon" data-icon=${e} aria-hidden="true"></span>
    `}}function _t(s="dsl-button"){const e=fe.get(s);if(e!==void 0)return e;if(customElements.get(s)!==void 0)throw new Error(`Cannot register the Lit button as "${s}" because that custom-element name is already registered.`);class i extends Ye{}return customElements.define(s,i),fe.set(s,i),i}const be=new Map;function y(s){return typeof s=="string"?s.trim():""}function et(s){return s==="small"||s==="large"?s:"medium"}function tt(s){return s==="center"||s==="end"?s:"start"}function Q(s){switch(s){case"email":case"password":case"search":case"tel":case"url":case"number":return s;default:return"text"}}function st(s){switch(s){case"none":case"text":case"decimal":case"numeric":case"tel":case"search":case"email":case"url":return s;default:return}}function it(s){if(typeof s=="number"&&Number.isInteger(s)&&s>=0)return s}class nt extends C{initialValue="";resetRoot;static properties={inputId:{attribute:"input-id",type:String},name:{type:String},type:{type:String,reflect:!0},value:{type:String},placeholder:{type:String},size:{type:String,reflect:!0},align:{type:String,reflect:!0},inputMode:{attribute:"inputmode",type:String},autocomplete:{type:String},maxLength:{attribute:"maxlength",type:Number},accessibleLabel:{attribute:"accessible-label",type:String},labelledBy:{attribute:"labelled-by",type:String},describedBy:{attribute:"described-by",type:String},prefixText:{attribute:"prefix-text",type:String},suffixText:{attribute:"suffix-text",type:String},leadingIcon:{attribute:"leading-icon",type:String},trailingIcon:{attribute:"trailing-icon",type:String},passwordToggle:{attribute:"password-toggle",type:Boolean,reflect:!0},showPasswordLabel:{attribute:"show-password-label",type:String},hidePasswordLabel:{attribute:"hide-password-label",type:String},passwordVisible:{state:!0},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0}};constructor(){super(),this.inputId="",this.name="",this.type="text",this.value="",this.placeholder="",this.size="medium",this.align="start",this.inputMode="",this.autocomplete="",this.maxLength=void 0,this.accessibleLabel="",this.showPasswordLabel="",this.hidePasswordLabel="",this.labelledBy="",this.describedBy="",this.prefixText="",this.suffixText="",this.passwordToggle=!1,this.passwordVisible=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.resetRoot=this.getRootNode(),this.resetRoot.addEventListener("reset",this.handleFormReset,!0)}disconnectedCallback(){this.resetRoot?.removeEventListener("reset",this.handleFormReset,!0),this.resetRoot=void 0,super.disconnectedCallback()}handleFormReset=e=>{const t=this.inputElement;t===null||e.target!==t.form||queueMicrotask(()=>{!e.defaultPrevented&&this.isConnected&&(this.value=t.value)})};get inputElement(){return this.querySelector(":scope > .dsl-input input")}focus(e){this.inputElement?.focus(e)}select(){this.inputElement?.select()}willUpdate(e){this.hasUpdated||(this.initialValue=this.value),(e.has("passwordToggle")||e.has("type"))&&(!this.passwordToggle||Q(this.type)!=="password")&&(this.passwordVisible=!1)}render(){const e=y(this.inputId),t=y(this.name),i=y(this.placeholder),n=y(this.autocomplete),r=et(this.size),a=tt(this.align),l=Q(this.type),o=l==="password"&&this.passwordToggle,h=o&&this.passwordVisible?"text":l,b=st(this.inputMode),d=it(this.maxLength),u=y(this.accessibleLabel),c=y(this.labelledBy),g=y(this.describedBy),m=c===""&&u!==""?u:void 0,T=f`
      ${this.renderAdornment(this.prefixText)} ${this.renderIcon(this.leadingIcon)}

      <input
        id=${$(e!==""?e:void 0)}
        name=${$(t!==""?t:void 0)}
        type=${h}
        .defaultValue=${this.initialValue}
        .value=${this.value}
        placeholder=${$(i!==""?i:void 0)}
        inputmode=${$(b)}
        autocomplete=${$(n!==""?n:void 0)}
        maxlength=${$(d)}
        aria-label=${$(m)}
        aria-labelledby=${$(c!==""?c:void 0)}
        aria-describedby=${$(g!==""?g:void 0)}
        aria-invalid=${$(this.invalid?"true":void 0)}
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        @input=${this.handleInput}
      />

      ${this.renderIcon(this.trailingIcon)} ${this.renderAdornment(this.suffixText)}
    `;return f`
      <div class="dsl-input" data-size=${r} data-align=${a}>
        ${o?f`
                <span class="content">${T}</span>

                <button
                  class="action"
                  type="button"
                  data-input-password-toggle
                  data-input-password-managed
                  aria-controls=${$(e!==""?e:void 0)}
                  aria-label=${this.passwordVisible?y(this.hidePasswordLabel)||"Hide password":y(this.showPasswordLabel)||"Show password"}
                  ?disabled=${this.disabled}
                  @click=${this.handlePasswordToggle}
                >
                  <span
                    class="dsl-icon"
                    data-icon=${this.passwordVisible?"eye-off":"eye"}
                    aria-hidden="true"
                  ></span>
                </button>
              `:T}
      </div>
    `}renderAdornment(e){const t=y(e);return t===""?p:f` <span class="glyph" aria-hidden="true">${t}</span> `}handlePasswordToggle(){if(!this.passwordToggle||this.disabled||Q(this.type)!=="password"){this.passwordVisible=!1;return}this.passwordVisible=!this.passwordVisible}handleInput(e){e.target instanceof HTMLInputElement&&(this.value=e.target.value)}renderIcon(e){const t=y(e);return t===""?p:f`
      <span class="dsl-icon" data-icon=${t} aria-hidden="true"></span>
    `}}function At(s="dsl-input"){const e=be.get(s);if(e!==void 0)return e;if(customElements.get(s)!==void 0)throw new Error(`Cannot register the Lit input as "${s}" because that custom-element name is already registered.`);class i extends nt{}return customElements.define(s,i),be.set(s,i),i}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={ATTRIBUTE:1,CHILD:2},at=s=>(...e)=>({_$litDirective$:s,values:e});let ot=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:lt}=We,ge=s=>s,me=()=>document.createComment(""),R=(s,e,t)=>{const i=s._$AA.parentNode,n=e===void 0?s._$AB:e._$AA;if(t===void 0){const r=i.insertBefore(me(),n),a=i.insertBefore(me(),n);t=new lt(r,a,s,s.options)}else{const r=t._$AB.nextSibling,a=t._$AM,l=a!==s;if(l){let o;t._$AQ?.(s),t._$AM=s,t._$AP!==void 0&&(o=s._$AU)!==a._$AU&&t._$AP(o)}if(r!==n||l){let o=t._$AA;for(;o!==r;){const h=ge(o).nextSibling;ge(i).insertBefore(o,n),o=h}}}return t},S=(s,e,t=s)=>(s._$AI(e,t),s),dt={},ct=(s,e=dt)=>s._$AH=e,ht=s=>s._$AH,K=s=>{s._$AR(),s._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=(s,e,t)=>{const i=new Map;for(let n=e;n<=t;n++)i.set(s[n],n);return i},Z=at(class extends ot{constructor(s){if(super(s),s.type!==rt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const n=[],r=[];let a=0;for(const l of s)n[a]=i?i(l,a):a,r[a]=t(l,a),a++;return{values:r,keys:n}}render(s,e,t){return this.dt(s,e,t).values}update(s,[e,t,i]){const n=ht(s),{values:r,keys:a}=this.dt(e,t,i);if(!Array.isArray(n))return this.ut=a,r;const l=this.ut??=[],o=[];let h,b,d=0,u=n.length-1,c=0,g=r.length-1;for(;d<=u&&c<=g;)if(n[d]===null)d++;else if(n[u]===null)u--;else if(l[d]===a[c])o[c]=S(n[d],r[c]),d++,c++;else if(l[u]===a[g])o[g]=S(n[u],r[g]),u--,g--;else if(l[d]===a[g])o[g]=S(n[d],r[g]),R(s,o[g+1],n[d]),d++,g--;else if(l[u]===a[c])o[c]=S(n[u],r[c]),R(s,n[d],n[u]),u--,c++;else if(h===void 0&&(h=ye(a,c,g),b=ye(l,d,u)),h.has(l[d]))if(h.has(l[u])){const m=b.get(a[c]),T=m!==void 0?n[m]:null;if(T===null){const te=R(s,n[d]);S(te,r[c]),o[c]=te}else o[c]=S(T,r[c]),R(s,n[d],T),n[m]=null;c++}else K(n[u]),u--;else K(n[d]),d++;for(;c<=g;){const m=R(s,o[g+1]);S(m,r[c]),o[c++]=m}for(;d<=u;){const m=n[d++];m!==null&&K(m)}return this.ut=a,ct(s,o),A}});class ut extends F{instanceId=B("dsl-tabs");mediaQuery;resizeObserver;retainedFocus;widthFrame;static properties={items:{attribute:!1},renderPanel:{attribute:!1},activeTab:{attribute:"active-tab",type:String,reflect:!0},accessibleLabel:{attribute:"accessible-label",type:String},mobileSelectLabel:{attribute:"mobile-select-label",type:String},mobilePresentation:{attribute:"mobile-presentation",type:String,reflect:!0},smallScreen:{state:!0}};constructor(){super(),this.items=[{id:"overview",label:"Overview",content:"Review account information."},{id:"activity",label:"Activity",content:"See recent account events."},{id:"settings",label:"Settings",content:"Manage account preferences."}],this.activeTab="overview",this.accessibleLabel="Account information",this.mobileSelectLabel="",this.mobilePresentation="dropdown",this.smallScreen=!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>this.observeWidth())}disconnectedCallback(){this.resizeObserver?.disconnect(),this.widthFrame!==void 0&&cancelAnimationFrame(this.widthFrame),this.widthFrame=void 0,this.mediaQuery?.removeEventListener("change",this.handleMediaChange),super.disconnectedCallback()}willUpdate(e){if(e.has("items")){const t=this.ownerDocument.activeElement;this.retainedFocus=t instanceof HTMLElement&&this.contains(t)?t:void 0}e.has("items")&&!this.items.some(t=>t.id===this.activeTab)&&(this.activeTab=this.items[0]?.id??"")}updated(){const e=this.retainedFocus;this.retainedFocus=void 0,e?.isConnected&&this.contains(e)&&!e.closest("[hidden]")&&this.ownerDocument.activeElement===this.ownerDocument.body&&e.focus({preventScroll:!0})}render(){const e=this.items.some(r=>r.id===this.activeTab)?this.activeTab:this.items[0]?.id??"",t=this.smallScreen&&this.mobilePresentation==="accordion",i=this.smallScreen&&this.mobilePresentation==="dropdown",n=this.smallScreen&&this.mobilePresentation==="expanded";return f`
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
          ${Z(this.items,r=>r.id,r=>{const a=this.ids(r.id),l=r.id===e;return f`
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
            aria-label=${v(this.mobileSelectLabel)||`Choose ${this.accessibleLabel.toLowerCase()} tab`}
            data-tabs-select
            .value=${e}
            @change=${this.handleSelectChange}
          >
            ${Z(this.items,r=>r.id,r=>f`<option value=${r.id} .selected=${r.id===e}>
                  ${r.label}
                </option>`)}
          </select>
        </div>

        <div class="panels">
          ${Z(this.items,r=>r.id,r=>{const a=this.ids(r.id),l=r.id===e,o=this.renderPanel?.(r),h=t?a.accordionTrigger:void 0;return f`
                <section
                  id=${a.panel}
                  class="panel"
                  role=${$(t?void 0:"tabpanel")}
                  aria-labelledby=${$(t?void 0:a.tab)}
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
                    role=${$(t?"region":void 0)}
                    aria-labelledby=${$(h)}
                    ?hidden=${t&&!l}
                  >
                    ${o===void 0?f`<p>${r.content}</p>`:o}
                  </div>
                </section>
              `})}
        </div>
      </div>
    `}handleMediaChange=e=>{this.smallScreen=e.matches};observeWidth(){if(!this.isConnected)return;const e=this.querySelector(":scope > .dsl-tabs");if(e===null||typeof window>"u")return;this.resizeObserver?.disconnect(),this.mediaQuery?.removeEventListener("change",this.handleMediaChange),this.mediaQuery=typeof window.matchMedia=="function"?window.matchMedia("(max-width: 32rem)"):void 0;const t=(i=e.getBoundingClientRect().width)=>{const n=Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize),r=32*(Number.isFinite(n)?n:16);this.smallScreen=i>0?i<=r:this.mediaQuery?.matches??!1};typeof ResizeObserver=="function"?(this.resizeObserver=new ResizeObserver(i=>{const n=i.find(r=>r.target===e);this.widthFrame!==void 0&&cancelAnimationFrame(this.widthFrame),this.widthFrame=requestAnimationFrame(()=>{this.widthFrame=void 0,this.isConnected&&t(n?.contentRect.width)})}),this.resizeObserver.observe(e)):this.mediaQuery?.addEventListener("change",this.handleMediaChange),t()}handleSelectChange=e=>{const t=e.currentTarget;t instanceof HTMLSelectElement&&this.selectTab(t.value,"dropdown")};handleTabKeydown=e=>{const t=e.target;if(!(t instanceof HTMLButtonElement))return;const i=this.items.findIndex(o=>o.id===t.dataset.tab);if(i<0)return;const n=this.smallScreen&&this.mobilePresentation==="expanded",r=this.items.length-1;let a;if(e.key==="Home"?a=0:e.key==="End"?a=r:!n&&e.key==="ArrowRight"||n&&e.key==="ArrowDown"?a=i===r?0:i+1:(!n&&e.key==="ArrowLeft"||n&&e.key==="ArrowUp")&&(a=i===0?r:i-1),a===void 0)return;e.preventDefault();const l=this.items[a];l!==void 0&&(this.selectTab(l.id,"keyboard"),this.updateComplete.then(()=>{this.querySelector(`.dsl-tabs > .tablist > .tab[data-tab="${CSS.escape(l.id)}"]`)?.focus()}))};selectTab(e,t){if(!this.items.some(n=>n.id===e))return;const i=this.activeTab;this.activeTab=e,i!==e&&this.dispatchEvent(new CustomEvent("dsl-tab-change",{bubbles:!0,composed:!0,detail:{value:e,previousValue:i,source:t}}))}ids(e){const t=Array.from(e,n=>n.codePointAt(0).toString(16)).join("-"),i=`${this.instanceId}-${t}`;return{tab:`${i}-tab`,panel:`${i}-panel`,accordionTrigger:`${i}-accordion-trigger`,content:`${i}-content`}}}function St(s="dsl-tabs"){return q(s,ut)}class pt extends F{static properties={label:{type:String},description:{type:String},inputId:{attribute:"input-id",type:String},name:{type:String},value:{type:String},checked:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};constructor(){super(),this.label="",this.description="",this.inputId="",this.name="",this.value="on",this.checked=!1,this.required=!1,this.disabled=!1}handleChange(e){e.target instanceof HTMLInputElement&&(this.checked=e.target.checked)}}class $t extends F{dialogId=B("dsl-modal-dialog");titleId=B("dsl-modal-title");descriptionId=B("dsl-modal-description");static properties={heading:{type:String},content:{type:String},renderContent:{attribute:!1},triggerLabel:{attribute:"trigger-label",type:String},closeLabel:{attribute:"close-label",type:String},open:{type:Boolean,reflect:!0},actions:{attribute:!1}};constructor(){super(),this.heading="",this.content="",this.triggerLabel="Open dialog",this.closeLabel="",this.open=!1,this.actions=[]}render(){const e=this.actions.some(t=>t.autofocus);return f`
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
          aria-label=${v(this.closeLabel)||(this.heading?`Close ${this.heading}`:"Close dialog")}
          @click=${this.close}
        >
          <span class="dsl-icon" data-icon="close" aria-hidden="true"></span>
        </button>

        <div class="content">
          ${this.content||this.renderContent===void 0?f`<p id=${this.descriptionId}>${this.content}</p>`:p}
          ${this.renderContent?.()}
        </div>

        ${this.actions.length>0?f`
                <form class="actions" method="dialog">
                  ${this.actions.map(t=>f`
                      <button
                        class="dsl-button"
                        type=${t.form||t.dismiss!==!1?"submit":"button"}
                        form=${$(t.form)}
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
    `}updated(e){if(!e.has("open"))return;const t=this.dialog;if(t!==null){if(this.open&&!t.open){t.returnValue="",t.showModal(),this.dispatchOpenChange(t);return}!this.open&&t.open&&t.close()}}get dialog(){return this.querySelector(`#${CSS.escape(this.dialogId)}`)}showModal(){const e=this.dialog;e===null||e.open||(e.returnValue="",e.showModal(),this.open=!0,this.dispatchOpenChange(e))}close(){this.dialog?.close("dismiss")}handleClose(e){const t=e.currentTarget;!(t instanceof HTMLDialogElement)||t.open||(this.open=!1,this.dispatchOpenChange(t))}handleAction(e){this.dispatchEvent(new CustomEvent("dsl-action",{bubbles:!0,composed:!0,detail:{id:e.id}}))}dispatchOpenChange(e){this.dispatchEvent(new CustomEvent("dsl-open-change",{bubbles:!0,composed:!0,detail:{open:e.open,returnValue:e.returnValue}}))}}function Et(s="dsl-modal"){return q(s,$t)}class ft extends F{static properties={selectId:{attribute:"select-id",type:String},name:{type:String},value:{type:String},placeholder:{type:String},accessibleLabel:{attribute:"accessible-label",type:String},options:{attribute:!1},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0}};constructor(){super(),this.selectId="",this.name="",this.value="",this.placeholder="",this.accessibleLabel="",this.options=[],this.required=!1,this.disabled=!1,this.invalid=!1}render(){return f`
      <div class="dsl-select">
        <select
          id=${$(v(this.selectId)||void 0)}
          name=${$(v(this.name)||void 0)}
          aria-label=${$(v(this.accessibleLabel)||void 0)}
          aria-invalid=${$(this.invalid?"true":void 0)}
          .value=${this.value}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @change=${this.handleChange}
        >
          ${v(this.placeholder)===""?null:f`<option value="" disabled>${this.placeholder}</option>`}
          ${this.options.map(e=>this.renderItem(e))}
        </select>
      </div>
    `}renderItem(e){return"options"in e?f`
          <optgroup label=${e.label} ?disabled=${e.disabled}>
            ${e.options.map(t=>this.renderOption(t))}
          </optgroup>
        `:this.renderOption(e)}renderOption(e){return f`
      <option value=${e.value} ?disabled=${e.disabled}>${e.label}</option>
    `}handleChange(e){e.target instanceof HTMLSelectElement&&(this.value=e.target.value)}}function Ct(s="dsl-select"){return q(s,ft)}class bt extends pt{renderMode="unresolved";connectedCallback(){this.classList.add("dsl-toggle"),super.connectedCallback()}render(){return this.preserveAuthoredLightDom()?A:f`
      <label class="label-wrapper">
        <span class="label">
          ${this.label}
          ${v(this.description)===""?p:f`<small>${this.description}</small>`}
        </span>
        <span class="switch-wrapper">
          <input
            id=${$(v(this.inputId)||void 0)}
            name=${$(v(this.name)||void 0)}
            type="checkbox"
            role="switch"
            value=${this.value}
            .checked=${this.checked}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span class="slider" aria-hidden="true"></span>
        </span>
      </label>
    `}preserveAuthoredLightDom(){return this.renderMode==="unresolved"&&(this.renderMode=this.childNodes.length===0?"managed":"authored"),this.renderMode==="authored"}}function xt(s="dsl-toggle"){return q(s,bt)}export{p as A,Ke as D,A as E,F as L,pt as N,Et as a,At as b,Ct as c,St as d,at as e,xt as f,_t as g,f as h,ot as i,Ye as j,nt as k,$t as l,ft as m,ut as n,bt as o,q as p,v as q,$ as r,B as s,rt as t,vt as u};
