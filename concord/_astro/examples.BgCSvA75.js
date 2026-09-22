import{o as c,f as v,j as r,a as Se,T as Ie,S as Le,M as ke,I as we,B as De}from"./toggle.A2Xh8COJ.js";import{R as u,r as k}from"./index.CMfShDsX.js";import{p,L as h,q as a,r as l,h as i,A as o,E as $,s as x,N as S,e as Ce,i as Ee,t as Ae,u as je,g as Ne,b as Me,a as Te,c as Be,d as Pe,f as qe}from"./dsl-toggle.B4DxiyGd.js";class D extends h{static properties={href:{type:String},label:{type:String},target:{type:String},leadingIcon:{attribute:"leading-icon",type:String},trailingIcon:{attribute:"trailing-icon",type:String}};constructor(){super(),this.href="",this.label="",this.target="",this.leadingIcon="",this.trailingIcon=""}connectedCallback(){const e=this.label===""?a(this.textContent):"";super.connectedCallback(),e!==""&&(this.label=e)}render(){return i`
      <span class="dsl-link">
        <a
          class="content"
          href=${l(a(this.href)||void 0)}
          target=${l(a(this.target)||void 0)}
        >
          ${this.renderIcon(this.leadingIcon)}
          <span class="content-text">${this.label}</span>
          ${this.renderIcon(this.trailingIcon)}
        </a>
      </span>
    `}renderIcon(e){const t=a(e);return t===""?o:i` <span class="dsl-icon" data-icon=${t} aria-hidden="true"></span> `}}function I(s="dsl-link"){return p(s,D)}class C extends h{static properties={items:{attribute:!1},accessibleLabel:{type:String,attribute:"accessible-label"}};constructor(){super(),this.items=[],this.accessibleLabel="Breadcrumb"}render(){const e=this.items.filter(n=>a(n.label)!==""),t=a(this.accessibleLabel)||"Breadcrumb";return i`
      <nav class="dsl-breadcrumb" aria-label=${t}>
        <ol class="list">
          ${e.map((n,d)=>{const b=d===e.length-1;return i`
              <li class="item">
                ${b?i`<span class="current" aria-current="page">${n.label}</span>`:i`<dsl-link
                        href=${n.href??"#"}
                        label=${n.label}
                      ></dsl-link>`}
              </li>
            `})}
        </ol>
      </nav>
    `}}function E(s="dsl-breadcrumb"){return I(),p(s,C)}class A extends h{static properties={items:{attribute:!1},accessibleLabel:{type:String,attribute:"accessible-label"},summary:{type:String},previousHref:{type:String,attribute:"previous-href"},nextHref:{type:String,attribute:"next-href"},previousLabel:{type:String,attribute:"previous-label"},nextLabel:{type:String,attribute:"next-label"}};constructor(){super(),this.items=[],this.accessibleLabel="Pagination",this.summary="",this.previousHref="",this.nextHref="",this.previousLabel="Previous",this.nextLabel="Next"}render(){const e=a(this.accessibleLabel)||"Pagination",t=a(this.summary),n=a(this.previousLabel)||"Previous",d=a(this.nextLabel)||"Next",b=this.items.filter(g=>g.ellipsis||a(g.label)!==""),m=(g,f,y)=>i`
      <li class="item" data-direction=${g} ?data-disabled=${f===""}>
        ${f===""?i`<span class="direction" aria-disabled="true">${y}</span>`:i`<dsl-link href=${f} label=${y}></dsl-link>`}
      </li>
    `;return i`
      <nav class="dsl-pagination" aria-label=${e}>
        ${t===""?"":i`<p class="summary">${t}</p>`}
        <ul class="list">
          ${m("previous",a(this.previousHref),n)}
          ${b.map(g=>{if(g.ellipsis)return i`<li class="item" data-ellipsis>
                <span class="ellipsis" aria-hidden="true">…</span>
              </li>`;const f=a(g.label),y=g.current===!0;return i`
              <li class="item" data-page ?data-current=${y}>
                ${y?i`<span class="current" aria-current="page">${f}</span>`:i`<dsl-link
                        href=${g.href??"#"}
                        label=${f}
                      ></dsl-link>`}
              </li>
            `})}
          ${m("next",a(this.nextHref),d)}
        </ul>
      </nav>
    `}}function j(s="dsl-pagination"){return I(),p(s,A)}class N extends h{static properties={scale:{type:String,attribute:"data-scale",reflect:!0},radius:{type:String,attribute:"data-radius",reflect:!0}};constructor(){super(),this.scale="retain"}render(){return $}}function L(s="dsl-media"){return p(s,N)}class M extends h{connectedCallback(){this.classList.add("dsl-list-item"),super.connectedCallback()}render(){return $}}function T(s="dsl-list-item"){return p(s,M)}class B extends h{renderMode="unresolved";static properties={variant:{type:String},layout:{type:String},collectionType:{type:String,attribute:"collection-type"},mediaShape:{type:String,attribute:"media-shape"},href:{type:String},imageSrc:{type:String,attribute:"image-src"},imageAlt:{type:String,attribute:"image-alt"},eyebrow:{type:String},eyebrowSegments:{attribute:!1},heading:{type:String},headingSegments:{attribute:!1},subheading:{type:String},description:{type:String},metadata:{type:String},metaItems:{attribute:!1},badge:{type:String},category:{type:String},authenticationLabel:{type:String,attribute:"authentication-label"},timestamp:{type:String},authenticated:{type:Boolean},sponsorSrc:{type:String,attribute:"sponsor-src"},sponsorAlt:{type:String,attribute:"sponsor-alt"},actions:{attribute:!1},belt:{type:String}};constructor(){super(),this.variant="article",this.layout="standard",this.collectionType="photos",this.mediaShape="portrait",this.href="",this.imageSrc="",this.imageAlt="",this.eyebrow="",this.eyebrowSegments=[],this.heading="",this.headingSegments=[],this.subheading="",this.description="",this.metadata="",this.metaItems=[],this.badge="",this.category="",this.authenticationLabel="",this.timestamp="",this.authenticated=!1,this.sponsorSrc="",this.sponsorAlt="",this.actions=[],this.belt=""}connectedCallback(){this.classList.add("dsl-card"),super.connectedCallback()}render(){if(this.preserveAuthoredLightDom())return $;const e=i`${this.renderMedia()}${this.renderSponsor()}${this.renderMeta()}`,t=this.actions.length>0,n=a(this.href)===""||t?e:i`<a href=${this.href}>${e}</a>`;return i`
      ${n}
      ${a(this.belt)===""?o:i`<div class="belt-wrap">${this.belt}</div>`}
    `}updated(e){super.updated(e),this.renderMode==="managed"&&(this.setAttribute("variant",this.variant),this.setAttribute("layout",this.layout),this.setAttribute("collection-type",this.collectionType),this.setAttribute("media-shape",this.mediaShape),this.toggleAttribute("authenticated",this.authenticated),this.dataset.variant=this.variant,this.dataset.layout=this.layout,this.variant==="collection"?this.dataset.collectionType=this.collectionType:delete this.dataset.collectionType,this.variant==="poster"?this.dataset.mediaShape=this.mediaShape:delete this.dataset.mediaShape,this.toggleAttribute("data-authenticated",this.authenticated))}preserveAuthoredLightDom(){return this.renderMode==="unresolved"&&(this.renderMode=this.childNodes.length===0?"managed":"authored"),this.renderMode==="authored"}renderMedia(){return i`
      <div class="media-wrap">
        <div class="media">
          <dsl-media class="dsl-media" data-scale="custom" data-radius="none">
            <div class="content">
              <img src=${this.imageSrc} alt=${this.imageAlt} />
            </div>
          </dsl-media>
        </div>
        ${this.renderLabel("label-alert",this.badge)}
        ${this.renderLabel("label-category",this.category)}
        ${this.renderLabel("label-auth",this.authenticationLabel)}
        ${this.renderLabel("label-timestamp",this.timestamp)}
      </div>
    `}renderLabel(e,t){return a(t)===""?o:i`<div class=${e}>${t}</div>`}renderSponsor(){return a(this.sponsorSrc)===""?o:i`
      <div class="sponsor-bug">
        <img src=${this.sponsorSrc} alt=${this.sponsorAlt} />
      </div>
    `}renderMeta(){const e=this.eyebrowSegments.length===0&&a(this.eyebrow)!==""?[this.eyebrow]:this.eyebrowSegments,t=this.metaItems.length===0&&a(this.metadata)!==""?[this.metadata]:this.metaItems,n=this.collectionType==="photos"?"photos":this.collectionType==="playlist"?"playlist":"play";return i`
      <div class="meta-wrap">
        ${this.variant==="collection"?i`
                <div class="spr-header">
                  <span
                    class="dsl-icon"
                    data-icon=${n}
                    aria-hidden="true"
                  ></span>
                  <span class="dsl-visually-hidden"
                    >${this.collectionType} collection</span
                  >
                </div>
              `:e.length===0?o:i`
                  <div class="spr-header">
                    ${e.map(d=>i`<span>${d}</span>`)}
                  </div>
                `}
        ${this.headingSegments.length>0?i`
                <div class="header">
                  ${this.headingSegments.map(d=>i`<span>${d}</span>`)}
                </div>
              `:a(this.heading)===""?o:i`<div class="header">${this.heading}</div>`}
        ${a(this.subheading)===""?o:i`<div class="sub-header">${this.subheading}</div>`}
        ${a(this.description)===""?o:i`<div class="deck"><p>${this.description}</p></div>`}
        ${t.length===0?o:i`<div class="meta">
                ${t.map(d=>i`<span>${d}</span>`)}
              </div>`}
        ${this.actions.length===0?o:i`
                <div class="link-group">
                  ${this.actions.map(d=>i`
                      <a href=${d.href}>
                        ${d.imageSrc===void 0?i`
                                ${d.label}
                                <span
                                  class="dsl-icon"
                                  data-icon="chevron-right"
                                  aria-hidden="true"
                                ></span>
                              `:i`
                                <img
                                  src=${d.imageSrc}
                                  alt=${d.imageAlt??d.label}
                                />
                              `}
                      </a>
                    `)}
                </div>
              `}
      </div>
    `}}function P(s="dsl-card"){return p(s,B)}class q extends h{static properties={label:{type:String}};constructor(){super(),this.label="Tag"}render(){return i`
      <span class="dsl-tag">
        <span class="label">${this.label}</span>
      </span>
    `}}function R(s="dsl-tag"){return p(s,q)}class F extends h{static properties={orientation:{type:String},decorative:{type:Boolean}};constructor(){super(),this.orientation="horizontal",this.decorative=!1}render(){const e=this.orientation==="vertical";return i`<hr
      class="dsl-divider"
      data-orientation=${l(e?"vertical":void 0)}
      aria-orientation=${l(e?"vertical":void 0)}
      role=${l(this.decorative?"presentation":void 0)}
    />`}}function H(s="dsl-divider"){return p(s,F)}class V extends h{instanceId=x("dsl-accordion");renderMode="unresolved";static properties={items:{attribute:!1},openItems:{attribute:!1},exclusive:{type:Boolean}};constructor(){super(),this.items=[{id:"account-details",heading:"Account details",subheading:"Review your personal information.",content:"Your name, contact information, and communication preferences appear here."},{id:"security",heading:"Security",content:"Review passwords and recent sign-in activity."},{id:"notifications",heading:"Notifications",content:"Choose which account messages you want to receive."}],this.openItems=["account-details"],this.exclusive=!1}connectedCallback(){this.classList.add("dsl-accordion"),super.connectedCallback()}render(){if(this.preserveAuthoredLightDom())return $;const e=new Set(this.openItems);return i`
      ${this.items.map(t=>{const n=this.key(t.id),d=`${this.instanceId}-${n}-trigger`,b=`${this.instanceId}-${n}-panel`,m=e.has(t.id);return i`
          <section class="item">
            <button
              id=${d}
              class="trigger"
              type="button"
              aria-expanded=${String(m)}
              aria-controls=${b}
              @click=${()=>this.toggle(t.id)}
            >
              <span class="indicator" aria-hidden="true"></span>
              <span class="label">
                <span class="title">${t.heading}</span>
                ${t.subheading===void 0||t.subheading===""?o:i`<span class="description">${t.subheading}</span>`}
              </span>
            </button>
            <div
              id=${b}
              class="panel"
              role="region"
              aria-labelledby=${d}
              ?hidden=${!m}
            >
              <div class="content"><p>${t.content}</p></div>
            </div>
          </section>
        `})}
    `}updated(e){super.updated(e),this.renderMode==="managed"&&(this.setAttribute("data-accordion",""),this.dataset.enhanced="true",this.toggleAttribute("exclusive",this.exclusive),this.toggleAttribute("data-exclusive",this.exclusive))}preserveAuthoredLightDom(){return this.renderMode==="unresolved"&&(this.renderMode=this.childNodes.length===0?"managed":"authored"),this.renderMode==="authored"}key(e){return e.toLowerCase().replace(/[^a-z0-9_-]+/g,"-")}toggle(e){const t=new Set(this.openItems),n=!t.has(e);n?(this.exclusive&&t.clear(),t.add(e)):t.delete(e),this.openItems=[...t],this.dispatchEvent(new CustomEvent("dsl-toggle",{bubbles:!0,composed:!0,detail:{id:e,expanded:n}}))}}function K(s="dsl-accordion"){return p(s,V)}class z extends h{static properties={title:{type:String},message:{type:String},variant:{type:String,reflect:!0},dismissible:{type:Boolean,reflect:!0},dismissLabel:{attribute:"dismiss-label",type:String},inline:{type:Boolean,reflect:!0}};constructor(){super(),this.title="",this.message="",this.variant="information",this.dismissible=!1,this.dismissLabel="",this.inline=!1}render(){const e=this.variant==="information"?"information":this.variant;return i`
      <div
        class="dsl-alert"
        data-variant=${this.variant}
        data-layout=${this.inline?"inline":"bounded"}
        ?data-enhanced=${this.dismissible}
        role=${this.variant==="critical"?"alert":"status"}
      >
        <span class="dsl-icon icon" data-icon=${e} aria-hidden="true"></span>
        <span class="content">
          ${a(this.title)===""?o:i`<strong class="title">${this.title}</strong>`}
          <span class="message">${this.message}</span>
        </span>
        ${this.dismissible?i`
                <button
                  class="close"
                  type="button"
                  aria-label=${a(this.dismissLabel)||"Dismiss notification"}
                  @click=${this.dismiss}
                >
                  <span class="dsl-icon" data-icon="close" aria-hidden="true"></span>
                </button>
              `:o}
      </div>
    `}dismiss(){const e=new CustomEvent("dsl-dismiss",{bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&this.remove()}}function O(s="dsl-alert"){return p(s,z)}class U extends S{static properties={...S.properties,indeterminate:{type:Boolean,reflect:!0}};constructor(){super(),this.indeterminate=!1}render(){const e=a(this.inputId),t=e===""?void 0:`${e}-label`,n=e===""?void 0:`${e}-description`;return i`
      <div class="dsl-checkbox">
        <label>
          <input
            id=${l(e||void 0)}
            name=${l(a(this.name)||void 0)}
            type="checkbox"
            value=${this.value}
            aria-labelledby=${l(t)}
            aria-describedby=${l(a(this.description)===""?void 0:n)}
            .checked=${this.checked}
            .indeterminate=${this.indeterminate}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span class="content">
            <span id=${l(t)} class="label">${this.label}</span>
            ${a(this.description)===""?o:i`<small id=${l(n)} class="description"
                    >${this.description}</small
                  >`}
          </span>
        </label>
      </div>
    `}}function W(s="dsl-checkbox"){return p(s,U)}class G extends h{static properties={inputId:{attribute:"input-id",type:String},name:{type:String},value:{type:String},minimum:{type:String},maximum:{type:String},accessibleLabel:{attribute:"accessible-label",type:String},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0}};constructor(){super(),this.inputId="",this.name="",this.value="",this.minimum="",this.maximum="",this.accessibleLabel="",this.required=!1,this.disabled=!1,this.invalid=!1}render(){return i`
      <div class="dsl-input">
        <input
          id=${l(a(this.inputId)||void 0)}
          name=${l(a(this.name)||void 0)}
          type="date"
          min=${l(a(this.minimum)||void 0)}
          max=${l(a(this.maximum)||void 0)}
          aria-label=${l(a(this.accessibleLabel)||void 0)}
          aria-invalid=${l(this.invalid?"true":void 0)}
          .value=${this.value}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.handleInput}
        />
      </div>
    `}handleInput(e){e.target instanceof HTMLInputElement&&(this.value=e.target.value)}}function Y(s="dsl-date-input"){return p(s,G)}class _ extends h{groupId=x("dsl-field-group");static properties={legend:{type:String},description:{type:String},name:{type:String},type:{type:String},required:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},choices:{attribute:!1}};constructor(){super(),this.legend="",this.description="",this.name="",this.type="checkbox",this.required=!1,this.invalid=!1,this.disabled=!1,this.choices=[]}render(){const e=`${this.groupId}-description`,t=`${this.groupId}-message`,n=[a(this.description)===""?"":e,this.invalid?t:""].filter(Boolean).join(" ");return i`
      <fieldset
        class="dsl-field-group"
        data-invalid=${l(this.invalid?"":void 0)}
        aria-describedby=${l(n||void 0)}
        ?disabled=${this.disabled}
      >
        <legend>${this.legend}</legend>
        ${a(this.description)===""?o:i`<small id=${e} class="description"
                >${this.description}</small
              >`}
        <div class="fields">
          ${this.choices.map(d=>this.renderChoice(this.normalizeChoice(d)))}
        </div>
        ${this.invalid?i`<small id=${t} class="message">Error Message</small>`:o}
      </fieldset>
    `}renderChoice(e){const t=this.type==="radio"?"dsl-radio":"dsl-checkbox";return i`
      <div class=${t}>
        <label>
          <input
            name=${this.name}
            type=${this.type}
            value=${e.value}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-invalid=${l(this.invalid?"true":void 0)}
          />
          <span class="content">
            <span class="label">${e.label}</span>
            ${a(e.description)===""?o:this.type==="radio"?i`<span class="description">${e.description}</span>`:i`<small class="description">${e.description}</small>`}
          </span>
        </label>
      </div>
    `}normalizeChoice(e){return typeof e=="string"?{label:e,value:e}:e}}function Z(s="dsl-field-group"){return p(s,_)}class J extends h{static properties={label:{type:String},forId:{attribute:"for-id",type:String},indicator:{type:String,reflect:!0},tone:{type:String,reflect:!0},annotationLabel:{attribute:"annotation-label",type:String}};constructor(){super(),this.label="",this.forId="",this.indicator="",this.tone="default",this.annotationLabel=""}render(){return i`
      <div
        class="dsl-label"
        data-indicator=${l(this.indicator||void 0)}
        data-tone=${l(this.tone==="subtle"?this.tone:void 0)}
      >
        <label for=${l(a(this.forId)||void 0)}>${this.label}</label>
        ${this.indicator==="required"?i`<span class="indicator" aria-hidden="true">*</span>`:this.indicator==="optional"?i`<span class="indicator" aria-hidden="true">Optional</span>`:o}
        ${a(this.annotationLabel)===""?o:i`
                <button
                  class="annotation"
                  type="button"
                  aria-label=${this.annotationLabel}
                >
                  <span
                    class="dsl-icon"
                    data-icon="information"
                    aria-hidden="true"
                  ></span>
                </button>
              `}
      </div>
    `}}function Q(s="dsl-label"){return p(s,J)}class X extends h{static properties={label:{type:String},description:{type:String},accessibleLabel:{attribute:"accessible-label",type:String}};constructor(){super(),this.label="Loading",this.description="",this.accessibleLabel=""}render(){const e=a(this.label),t=e===""?a(this.accessibleLabel)||"Loading":void 0;return i`
      <div
        class="dsl-loading-indicator"
        role="status"
        aria-label=${l(t)}
      >
        <span class="indicator" aria-hidden="true"></span>
        ${e===""?o:i`<span class="label">${this.label}</span>`}
        ${a(this.description)===""?o:i`<span class="description">${this.description}</span>`}
      </div>
    `}}function ee(s="dsl-loading-indicator"){return p(s,X)}class te extends S{render(){return i`
      <div class="dsl-pill">
        <label>
          <input
            id=${l(a(this.inputId)||void 0)}
            name=${l(a(this.name)||void 0)}
            type="checkbox"
            value=${this.value}
            .checked=${this.checked}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span class="label">${this.label}</span>
        </label>
      </div>
    `}}function se(s="dsl-pill"){return p(s,te)}class ie extends h{panelId=x("dsl-popover-panel");static properties={heading:{type:String},content:{type:String},triggerLabel:{attribute:"trigger-label",type:String},closeLabel:{attribute:"close-label",type:String},side:{type:String},align:{type:String},actions:{attribute:!1}};constructor(){super(),this.heading="",this.content="",this.triggerLabel="Open details",this.closeLabel="",this.side="bottom",this.align="center",this.actions=[]}render(){const e=`${this.panelId}-title`;return i`
      <button
        class="dsl-button"
        type="button"
        data-variant="secondary"
        data-size="medium"
        popovertarget=${this.panelId}
      >
        <span>${this.triggerLabel}</span>
      </button>
      <div
        id=${this.panelId}
        class="dsl-popover"
        data-side=${this.side}
        data-align=${this.align}
        popover
        role="dialog"
        aria-labelledby=${e}
        @toggle=${this.handleToggle}
      >
        <header><h2 id=${e}>${this.heading}</h2></header>
        <button
          class="close"
          type="button"
          popovertarget=${this.panelId}
          popovertargetaction="hide"
          aria-label=${a(this.closeLabel)||(this.heading?`Close ${this.heading}`:"Close popover")}
        >
          <span class="dsl-icon" data-icon="close" aria-hidden="true"></span>
        </button>
        <div class="content">
          <p>${this.content}</p>
          ${this.actions.length>0?i`<div class="actions">
                  ${this.actions.map(t=>i`
                      <button
                        class="dsl-button"
                        type="button"
                        data-variant=${t.variant??"secondary"}
                        data-size="medium"
                        data-popover-action=${t.id}
                        @click=${()=>this.handleAction(t)}
                      >
                        <span>${t.label}</span>
                      </button>
                    `)}
                </div>`:o}
        </div>
      </div>
    `}handleToggle(e){this.dispatchEvent(new CustomEvent("dsl-open-change",{bubbles:!0,composed:!0,detail:{open:e.newState==="open"}}))}handleAction(e){if(this.dispatchEvent(new CustomEvent("dsl-action",{bubbles:!0,composed:!0,detail:{id:e.id}})),!e.dismiss)return;const t=this.querySelector(`#${CSS.escape(this.panelId)}`);t?.matches(":popover-open")&&t.hidePopover()}}function ae(s="dsl-popover"){return p(s,ie)}function Re(s){return s.type==="separator"}class ne extends h{panelId=x("dsl-menu-panel");triggerId=`${this.panelId}-trigger`;pendingFocus=null;keyboardFocusManaged=!1;typeahead="";typeaheadTimer=0;static properties={triggerLabel:{attribute:"trigger-label",type:String},side:{type:String},align:{type:String},entries:{attribute:!1}};constructor(){super(),this.triggerLabel="Actions",this.side="bottom",this.align="start",this.entries=[]}render(){return i`
      <button
        id=${this.triggerId}
        class="dsl-button"
        type="button"
        data-variant="secondary"
        data-size="medium"
        aria-haspopup="menu"
        popovertarget=${this.panelId}
        @keydown=${this.handleTriggerKeydown}
      >
        <span>${this.triggerLabel}</span>
        <span
          class="dsl-icon menu-indicator"
          data-icon="caret-down"
          aria-hidden="true"
        ></span>
      </button>

      <div
        id=${this.panelId}
        class="dsl-menu"
        data-side=${this.side}
        data-align=${this.align}
        popover
        role="menu"
        aria-labelledby=${this.triggerId}
        @toggle=${this.handleToggle}
        @keydown=${this.handleMenuKeydown}
        @click=${this.handleMenuClick}
      >
        ${this.entries.map(e=>Re(e)?i`<hr class="dsl-divider" />`:i`
                <button
                  class="item"
                  type="button"
                  role="menuitem"
                  tabindex="-1"
                  data-menu-value=${e.id}
                  data-tone=${e.tone==="danger"?"danger":o}
                  aria-disabled=${e.disabled?"true":o}
                  aria-keyshortcuts=${e.ariaKeyShortcuts??o}
                >
                  ${e.leadingIcon?i`
                          <span class="leading" aria-hidden="true">
                            <span class="dsl-icon" data-icon=${e.leadingIcon}></span>
                          </span>
                        `:o}
                  <span class="content">
                    <span class="label">${e.label}</span>
                  </span>
                  ${e.shortcut?i`
                          <span class="trailing" aria-hidden="true">
                            <kbd>${e.shortcut}</kbd>
                          </span>
                        `:o}
                </button>
              `)}
      </div>
    `}panel(){return this.querySelector(`#${CSS.escape(this.panelId)}`)}trigger(){return this.querySelector(`#${CSS.escape(this.triggerId)}`)}items(){const e=this.panel();return e===null?[]:Array.from(e.querySelectorAll(':scope > .item:is([role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"])'))}focusAt(e){const t=this.items();(e==="last"?t.at(-1):t[0])?.focus()}focusRelative(e,t){const n=this.items();if(n.length===0)return;const d=Math.max(0,n.indexOf(e));n[(d+t+n.length)%n.length]?.focus()}openMenu(e){const t=this.panel();t!==null&&(this.pendingFocus=e,t.matches(":popover-open")||(this.keyboardFocusManaged=!0,t.showPopover()),this.focusAt(e))}handleTriggerKeydown(e){e.key==="ArrowDown"?(e.preventDefault(),this.openMenu("first")):e.key==="ArrowUp"&&(e.preventDefault(),this.openMenu("last"))}handleToggle(e){const t=e.newState==="open";if(this.dispatchEvent(new CustomEvent("dsl-open-change",{bubbles:!0,composed:!0,detail:{open:t}})),!t){this.pendingFocus=null,this.keyboardFocusManaged=!1;return}if(this.keyboardFocusManaged){this.keyboardFocusManaged=!1,this.pendingFocus=null;return}const n=this.pendingFocus??"first";this.pendingFocus=null,requestAnimationFrame(()=>this.focusAt(n))}handleMenuKeydown(e){const t=e.target;if(!(t instanceof HTMLElement)||!t.matches(".item"))return;switch(e.key){case"ArrowDown":e.preventDefault(),this.focusRelative(t,1);return;case"ArrowUp":e.preventDefault(),this.focusRelative(t,-1);return;case"Home":e.preventDefault(),this.focusAt("first");return;case"End":e.preventDefault(),this.focusAt("last");return;case"Escape":e.preventDefault(),this.panel()?.hidePopover(),this.trigger()?.focus();return;case"Enter":case" ":if(t.getAttribute("aria-disabled")==="true"){e.preventDefault();return}e.preventDefault(),t.click();return;case"Tab":window.setTimeout(()=>{const g=this.panel();g?.matches(":popover-open")&&g.hidePopover()},0);return}if(e.key.length!==1||e.altKey||e.ctrlKey||e.metaKey||e.key===" ")return;this.typeahead+=e.key.toLocaleLowerCase(),window.clearTimeout(this.typeaheadTimer),this.typeaheadTimer=window.setTimeout(()=>{this.typeahead=""},500);const n=this.items(),d=Math.max(0,n.indexOf(t)),m=[...n.slice(d+1),...n.slice(0,d+1)].find(g=>g.textContent?.trim().toLocaleLowerCase().startsWith(this.typeahead));m&&(e.preventDefault(),m.focus())}handleMenuClick(e){const t=e.target;if(!(t instanceof Element))return;const n=t.closest('.item[role="menuitem"]'),d=this.panel();if(!(n===null||d===null||n.parentElement!==d)){if(n.getAttribute("aria-disabled")==="true"){e.preventDefault(),e.stopImmediatePropagation();return}this.dispatchEvent(new CustomEvent("dsl-action",{bubbles:!0,composed:!0,detail:{id:n.dataset.menuValue??""}})),d.matches(":popover-open")&&d.hidePopover()}}}function re(s="dsl-menu"){return p(s,ne)}class le extends h{static properties={value:{type:Number},max:{type:Number},accessibleLabel:{attribute:"accessible-label",type:String}};constructor(){super(),this.value=0,this.max=100,this.accessibleLabel=""}render(){const e=a(this.accessibleLabel),t=Number.isFinite(this.max)&&this.max>0?this.max:100,n=Number.isFinite(this.value)?Math.min(t,Math.max(0,this.value)):0;return i`
      <progress
        class="dsl-progress-indicator"
        value=${n}
        max=${t}
        aria-label=${l(e===""?void 0:e)}
      >
        ${n} of ${t}
      </progress>
    `}}function de(s="dsl-progress-indicator"){return p(s,le)}class oe extends h{static properties={accessibleLabel:{attribute:"accessible-label",type:String},steps:{attribute:!1},compact:{type:Boolean,reflect:!0}};constructor(){super(),this.accessibleLabel="Progress",this.steps=[],this.compact=!1}render(){return i`
      <ol
        class="dsl-progress-steps"
        role="list"
        aria-label=${this.accessibleLabel}
        ?data-compact=${this.compact}
      >
        ${this.steps.map(e=>i`
            <li
              ?data-completed=${e.state==="completed"}
              aria-current=${l(e.state==="current"?"step":void 0)}
            >
              <span class="marker" aria-hidden="true"></span>
              <span class="label">
                ${e.state==="completed"?i`<span class="dsl-visually-hidden">Completed: </span>`:o}
                ${e.label}
              </span>
            </li>
          `)}
      </ol>
    `}}function ce(s="dsl-progress-steps"){return p(s,oe)}class ue extends S{render(){return i`
      <div class="dsl-radio">
        <label>
          <input
            id=${l(a(this.inputId)||void 0)}
            name=${l(a(this.name)||void 0)}
            type="radio"
            value=${this.value}
            .checked=${this.checked}
            ?required=${this.required}
            ?disabled=${this.disabled}
            @change=${this.handleChange}
          />
          <span class="content">
            <span class="label">${this.label}</span>
            ${a(this.description)===""?o:i`<span class="description">${this.description}</span>`}
          </span>
        </label>
      </div>
    `}}function pe(s="dsl-radio"){return p(s,ue)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he="important",Fe=" !"+he,He=Ce(class extends Ee{constructor(s){if(super(s),s.type!==Ae.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,t)=>{const n=s[t];return n==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(s,[e]){const{style:t}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?t.removeProperty(n):t[n]=null);for(const n in e){const d=e[n];if(d!=null){this.ft.add(n);const b=typeof d=="string"&&d.endsWith(Fe);n.includes("-")||b?t.setProperty(n,b?d.slice(0,-11):d,b?he:""):t[n]=d}}return $}});class me extends h{static properties={label:{type:String},inputId:{attribute:"input-id",type:String},name:{type:String},minimum:{type:Number},maximum:{type:Number},step:{type:Number},value:{type:Number},disabled:{type:Boolean,reflect:!0},tickMarks:{attribute:"tick-marks",type:Boolean,reflect:!0},rangeLabels:{attribute:"range-labels",type:Boolean,reflect:!0},markers:{type:Boolean,reflect:!0},markerLabels:{attribute:"marker-labels",type:Boolean,reflect:!0}};constructor(){super(),this.label="",this.inputId="",this.name="",this.minimum=0,this.maximum=100,this.step=1,this.value=0,this.disabled=!1,this.tickMarks=!1,this.rangeLabels=!1,this.markers=!1,this.markerLabels=!1}render(){const e=this.maximum-this.minimum,t=e===0?0:(this.value-this.minimum)/e*100,n=je(this.minimum,this.maximum,this.step),d=a(this.inputId)===""?"":`${this.inputId}-values`,b=this.tickMarks||this.markers,m=this.rangeLabels||this.markerLabels,g=b||m;return i`
      <div
        class="dsl-slider"
        data-slider
        ?data-tick-marks=${b}
        ?data-range-labels=${m}
      >
        <div class="info">
          <label for=${l(a(this.inputId)||void 0)}>${this.label}</label>
          <output for=${l(a(this.inputId)||void 0)}>${this.value}</output>
        </div>
        <div class="range">
          <span class="minimum" aria-hidden="true">${this.minimum}</span>
          <div class="track">
            <input
              id=${l(a(this.inputId)||void 0)}
              name=${l(a(this.name)||void 0)}
              type="range"
              min=${this.minimum}
              max=${this.maximum}
              step=${this.step}
              .value=${String(this.value)}
              list=${l(b&&d!==""?d:void 0)}
              data-progress=${`${t}%`}
              style=${He({"--_dsl-slider-progress":`${t}%`})}
              ?disabled=${this.disabled}
              @input=${this.handleInput}
            />
            ${g?i`
                    <div class="markers" aria-hidden="true">
                      ${n.map(f=>i`<span>${m?f:o}</span>`)}
                    </div>
                  `:o}
          </div>
          <span class="maximum" aria-hidden="true">${this.maximum}</span>
        </div>
        ${b?i`
                <datalist id=${l(d||void 0)}>
                  ${n.map(f=>i`<option value=${f}></option>`)}
                </datalist>
              `:o}
      </div>
    `}handleInput(e){e.target instanceof HTMLInputElement&&(this.value=e.target.valueAsNumber)}}function be(s="dsl-slider"){return p(s,me)}class ge extends h{static properties={accessibleLabel:{attribute:"accessible-label",type:String},decreaseLabel:{attribute:"decrease-label",type:String},increaseLabel:{attribute:"increase-label",type:String},label:{type:String},inputId:{attribute:"input-id",type:String},name:{type:String},minimum:{type:Number},maximum:{type:Number},step:{type:Number},value:{type:Number},disabled:{type:Boolean,reflect:!0}};constructor(){super(),this.accessibleLabel="",this.decreaseLabel="",this.increaseLabel="",this.label="",this.inputId="",this.name="",this.minimum=0,this.maximum=100,this.step=1,this.value=0,this.disabled=!1}render(){const e=a(this.inputId)||void 0,t=a(this.accessibleLabel)||a(this.label)||"value",n=a(this.accessibleLabel)||a(this.label)||void 0;return i`
      <div class="dsl-stepper" data-stepper data-enhanced="true">
        <span class="status dsl-visually-hidden" aria-live="polite">${this.value}</span>
        <span class="control">
          <button
            class="dsl-button"
            type="button"
            data-variant="secondary"
            data-shape="circle"
            data-stepper-action="decrease"
            aria-controls=${l(e)}
            aria-label=${a(this.decreaseLabel)||`Decrease ${t} by ${this.step}`}
            ?disabled=${this.disabled||this.value<=this.minimum}
            @click=${()=>this.changeBy(-this.step)}
          >
            <span class="dsl-icon" data-icon="minus" aria-hidden="true"></span>
          </button>
        </span>
        <span class="value">
          <span class="dsl-input" data-align="center">
            <input
              id=${l(e)}
              name=${l(a(this.name)||void 0)}
              type="number"
              min=${this.minimum}
              max=${this.maximum}
              step=${this.step}
              .value=${String(this.value)}
              ?disabled=${this.disabled}
              aria-label=${l(n)}
              @input=${this.handleInput}
            />
          </span>
        </span>
        <span class="control">
          <button
            class="dsl-button"
            type="button"
            data-variant="secondary"
            data-shape="circle"
            data-stepper-action="increase"
            aria-controls=${l(e)}
            aria-label=${a(this.increaseLabel)||`Increase ${t} by ${this.step}`}
            ?disabled=${this.disabled||this.value>=this.maximum}
            @click=${()=>this.changeBy(this.step)}
          >
            <span class="dsl-icon" data-icon="plus" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    `}changeBy(e){this.value=Math.min(this.maximum,Math.max(this.minimum,this.value+e)),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}handleInput(e){e.target instanceof HTMLInputElement&&(this.value=e.target.valueAsNumber)}}function fe(s="dsl-stepper"){return p(s,ge)}class ve extends h{static properties={inputId:{attribute:"input-id",type:String},name:{type:String},value:{type:String},placeholder:{type:String},accessibleLabel:{attribute:"accessible-label",type:String},describedBy:{attribute:"described-by",type:String},rows:{type:Number},fill:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},readonly:{type:Boolean,reflect:!0},invalid:{type:Boolean,reflect:!0}};constructor(){super(),this.inputId="",this.name="",this.value="",this.placeholder="",this.accessibleLabel="",this.describedBy="",this.rows=3,this.fill=!1,this.required=!1,this.disabled=!1,this.readonly=!1,this.invalid=!1}render(){return i`
      <div class="dsl-textarea" ?data-fill=${this.fill}>
        <textarea
          id=${l(a(this.inputId)||void 0)}
          name=${l(a(this.name)||void 0)}
          placeholder=${l(a(this.placeholder)||void 0)}
          aria-label=${l(a(this.accessibleLabel)||void 0)}
          aria-describedby=${l(a(this.describedBy)||void 0)}
          aria-invalid=${l(this.invalid?"true":void 0)}
          rows=${this.rows}
          .value=${this.value}
          ?required=${this.required}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @input=${this.handleInput}
        ></textarea>
      </div>
    `}handleInput(e){e.target instanceof HTMLTextAreaElement&&(this.value=e.target.value)}}function ye(s="dsl-textarea"){return p(s,ve)}class $e extends h{tooltipId=x("dsl-tooltip-description");static properties={label:{type:String},content:{type:String},position:{type:String,reflect:!0},triggerIcon:{attribute:"trigger-icon",type:String}};visible=!1;pointerWithin=!1;focused=!1;dismissed=!1;constructor(){super(),this.label="",this.content="",this.position="top",this.triggerIcon=""}render(){const e=this.triggerIcon.length>0;return i`
      <span
        class="dsl-tooltip-anchor"
        data-enhanced="true"
        ?data-visible=${this.visible}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
      >
        <button
          class="dsl-button"
          type="button"
          data-variant="secondary"
          data-size="medium"
          data-shape=${e?"circle":o}
          aria-label=${e?this.label:o}
          aria-describedby=${this.tooltipId}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleKeydown}
        >
          ${e?i`<span
                  class="dsl-icon"
                  data-icon=${this.triggerIcon}
                  aria-hidden="true"
                ></span>`:i`<span>${this.label}</span>`}
        </button>
        <span
          id=${this.tooltipId}
          class="dsl-tooltip"
          data-position=${this.position}
          role="tooltip"
        >
          ${this.content}
        </span>
      </span>
    `}handlePointerEnter(){this.pointerWithin=!0,this.syncVisibility()}handlePointerLeave(){this.pointerWithin=!1,this.focused||(this.dismissed=!1),this.syncVisibility()}handleFocus(){this.focused=!0,this.syncVisibility()}handleBlur(){this.focused=!1,this.pointerWithin||(this.dismissed=!1),this.syncVisibility()}handleKeydown(e){e.key==="Escape"&&(this.dismissed=!0,this.syncVisibility())}syncVisibility(){this.setVisible(!this.dismissed&&(this.pointerWithin||this.focused))}setVisible(e){e!==this.visible&&(this.visible=e,this.requestUpdate(),this.dispatchVisibilityEvent(e))}dispatchVisibilityEvent(e){this.dispatchEvent(new CustomEvent("dsl-visibility-change",{bubbles:!0,composed:!0,detail:{visible:e}}))}}function xe(s="dsl-tooltip"){return p(s,$e)}let w=!1;function Ve(){w||typeof customElements>"u"||(O(),K(),Ne(),E(),j(),P(),W(),Y(),H(),Z(),I(),T(),L(),Me(),Q(),ee(),Te(),re(),se(),ae(),de(),ce(),pe(),Be(),be(),fe(),R(),Pe(),ye(),qe(),xe(),w=!0)}Ve();typeof customElements<"u"&&O();const Ke=c({react:u,tagName:"dsl-alert",elementClass:z});typeof customElements<"u"&&K();const ze={onDslToggle:"dsl-toggle"},Oe=c({react:u,tagName:"dsl-accordion",elementClass:V,events:ze});typeof customElements<"u"&&E();const Ue=c({react:u,tagName:"dsl-breadcrumb",elementClass:C});typeof customElements<"u"&&j();const We=c({react:u,tagName:"dsl-pagination",elementClass:A});typeof customElements<"u"&&(L(),P());const Ge=c({react:u,tagName:"dsl-card",elementClass:B});typeof customElements<"u"&&W();const Ye=c({react:u,tagName:"dsl-checkbox",elementClass:U,events:v});typeof customElements<"u"&&Y();const _e=c({react:u,tagName:"dsl-date-input",elementClass:G,events:v});typeof customElements<"u"&&H();const Ze=c({react:u,tagName:"dsl-divider",elementClass:F});typeof customElements<"u"&&Z();const Je=c({react:u,tagName:"dsl-field-group",elementClass:_,events:v});typeof customElements<"u"&&I();const Qe=c({react:u,tagName:"dsl-link",elementClass:D});typeof customElements<"u"&&L();const Xe=c({react:u,tagName:"dsl-media",elementClass:N});typeof customElements<"u"&&T();const et=c({react:u,tagName:"dsl-list-item",elementClass:M});typeof customElements<"u"&&Q();const tt=c({react:u,tagName:"dsl-label",elementClass:J});typeof customElements<"u"&&ee();const st=c({react:u,tagName:"dsl-loading-indicator",elementClass:X});typeof customElements<"u"&&re();const it={onDslOpenChange:"dsl-open-change",onDslAction:"dsl-action"},at=c({react:u,tagName:"dsl-menu",elementClass:ne,events:it});typeof customElements<"u"&&se();const nt=c({react:u,tagName:"dsl-pill",elementClass:te,events:v});typeof customElements<"u"&&ae();const rt={onDslOpenChange:"dsl-open-change",onDslAction:"dsl-action"},lt=c({react:u,tagName:"dsl-popover",elementClass:ie,events:rt});typeof customElements<"u"&&de();const dt=c({react:u,tagName:"dsl-progress-indicator",elementClass:le});typeof customElements<"u"&&ce();const ot=c({react:u,tagName:"dsl-progress-steps",elementClass:oe});typeof customElements<"u"&&pe();const ct=c({react:u,tagName:"dsl-radio",elementClass:ue,events:v});typeof customElements<"u"&&be();const ut=c({react:u,tagName:"dsl-slider",elementClass:me,events:v});typeof customElements<"u"&&fe();const pt=c({react:u,tagName:"dsl-stepper",elementClass:ge,events:v});typeof customElements<"u"&&R();const ht=c({react:u,tagName:"dsl-tag",elementClass:q});typeof customElements<"u"&&ye();const mt=c({react:u,tagName:"dsl-textarea",elementClass:ve,events:v});typeof customElements<"u"&&xe();const bt={onDslVisibilityChange:"dsl-visibility-change"},gt=c({react:u,tagName:"dsl-tooltip",elementClass:$e,events:bt}),ft={src:"/concord/images/components/image/landscape-16x9.png",alt:"Snow-dusted alpine mountains reflected in a turquoise lake at golden hour.",width:1672,height:941};function xt({component:s,imageSource:e=ft}){const[t,n]=k.useState(50),[d,b]=k.useState("overview");switch(s){case"accordion":return r.jsx(Oe,{items:[{id:"profile",heading:"Profile",subheading:"Manage your personal details.",content:"Update your name, contact information, and preferences."},{id:"security",heading:"Security",content:"Review passwords and recent sign-in activity."},{id:"notifications",heading:"Notifications",content:"Choose which account messages you want to receive."}],openItems:["profile"],exclusive:!0});case"alert":return r.jsx(Ke,{title:"Information",message:"Your account changes have been saved.",variant:"information",dismissible:!0});case"breadcrumb":return r.jsx(Ue,{items:[{label:"Home",href:"#react-breadcrumb-home"},{label:"Components",href:"#react-breadcrumb-components"},{label:"Breadcrumb"}],accessibleLabel:"Breadcrumb"});case"pagination":return r.jsx(We,{items:[{label:"1",href:"#react-pagination-1"},{label:"2",href:"#react-pagination-2"},{label:"3",current:!0},{label:"4",href:"#react-pagination-4"},{label:"5",href:"#react-pagination-5"}],previousHref:"#react-pagination-2",nextHref:"#react-pagination-4",accessibleLabel:"Pagination"});case"button":return r.jsx(De,{label:"Continue",variant:"primary",size:"medium",leadingIcon:"check"});case"link":return r.jsx(Qe,{href:"#react-link",label:"Link Text",trailingIcon:"external-link"});case"card":return r.jsx(Ge,{variant:"media",layout:"standard",href:"#react-card",imageSrc:"/concord/images/components/card/video.jpg",imageAlt:"",eyebrow:"Card superheader",heading:"Card title",subheading:"Card subheader",description:"Card description sample text.",metadata:"Card metadata",badge:"Card label",timestamp:"00:00"});case"checkbox":return r.jsx(Ye,{inputId:"react-checkbox",name:"updates",label:"Receive project updates",description:"A semantic native checkbox adapted for React."});case"date-input":return r.jsx(_e,{inputId:"react-date",name:"start-date",accessibleLabel:"Start date",minimum:"2026-01-01",maximum:"2026-12-31"});case"divider":return r.jsx(Ze,{});case"field":return r.jsx(Je,{legend:"Notification channels",description:"Select every channel you want to use.",name:"channels",type:"checkbox",choices:[{label:"Email",value:"email"},{label:"Text message",value:"sms"}]});case"input":return r.jsx(we,{inputId:"react-password",name:"password",type:"password",autocomplete:"current-password",accessibleLabel:"Password",passwordToggle:!0});case"media":return r.jsxs(Xe,{className:"dsl-media",scale:"16x9",style:{"--dsl-media-width":"min(100%, 40rem)"},children:[r.jsx("div",{className:"content",children:r.jsx("img",{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:"lazy",decoding:"async"})}),r.jsx("div",{className:"dsl-caption",children:r.jsx("span",{children:"React passes the same native image child through the Media adapter."})})]});case"list-item":return r.jsx("ul",{style:{margin:0,padding:0,listStyle:"none"},children:r.jsx("li",{children:r.jsx(et,{"data-separator":"",children:r.jsxs("div",{className:"item-wrap",children:[r.jsx("div",{className:"leading-wrap",children:r.jsx("div",{className:"leading",children:r.jsx("span",{className:"dsl-icon","data-icon":"information","aria-hidden":"true"})})}),r.jsx("div",{className:"content-wrap",children:r.jsxs("div",{className:"content",children:[r.jsx("div",{className:"label",children:"Account settings"}),r.jsx("div",{className:"supporting",children:"Manage profile, security, and preferences"})]})}),r.jsx("div",{className:"trailing-wrap",children:r.jsxs("div",{className:"trailing",children:[r.jsx("span",{children:"Review"}),r.jsx("span",{className:"dsl-icon","data-icon":"chevron-right","aria-hidden":"true"})]})})]})})})});case"label":return r.jsx(tt,{label:"Email address",forId:"react-email",indicator:"required"});case"loading-indicator":return r.jsx(st,{label:"Loading",description:"This could take a moment."});case"menu":return r.jsx(at,{triggerLabel:"Actions",entries:[{id:"search",label:"Search",leadingIcon:"search",shortcut:"⌘K",ariaKeyShortcuts:"Meta+K"},{id:"rename",label:"Rename"},{type:"separator"},{id:"delete",label:"Delete project",tone:"danger"}]});case"modal":return r.jsx(ke,{heading:"Save project changes?",content:"Your updated workspace settings will take effect immediately for everyone who uses this project.",triggerLabel:"Review project changes",actions:[{id:"cancel",label:"Cancel",variant:"secondary"},{id:"save",label:"Save changes",variant:"primary"}]});case"pill":return r.jsx(nt,{inputId:"react-pill",name:"filters",value:"popular",label:"Most popular",checked:!0});case"popover":return r.jsx(lt,{heading:"Account details",content:"Review contact information, sign-in methods, and account recovery settings.",triggerLabel:"Account details",side:"bottom",align:"center",actions:[{id:"review-security",label:"Review security",variant:"primary"}]});case"progress-indicator":return r.jsx(dt,{value:63,max:100,accessibleLabel:"Upload progress"});case"progress-steps":return r.jsx(ot,{accessibleLabel:"Account setup progress",steps:[{label:"Account setup",state:"completed"},{label:"Personal details",state:"current"},{label:"Checkout",state:"inactive"}]});case"radio":return r.jsx(ct,{inputId:"react-radio",name:"delivery",value:"standard",label:"Standard delivery",description:"Arrives in three to five days.",checked:!0});case"select":return r.jsx(Le,{selectId:"react-select",name:"region",accessibleLabel:"Region",value:"us",options:[{label:"United States",value:"us"},{label:"Canada",value:"ca"},{label:"United Kingdom",value:"uk"}]});case"slider":return r.jsxs("div",{children:[r.jsx(ut,{label:"Project completion",inputId:"react-slider",name:"completion",minimum:0,maximum:100,step:25,value:t,tickMarks:!0,rangeLabels:!0,onInput:m=>{const g=m.target instanceof HTMLInputElement?m.target:m.currentTarget.querySelector("input");n(g?.valueAsNumber??t)}}),r.jsxs("p",{"data-react-example-state":!0,"aria-live":"polite",children:["React state: ",t]})]});case"stepper":return r.jsx(pt,{label:"Attendee count",inputId:"react-stepper",name:"attendees",minimum:1,maximum:10,step:1,value:2});case"tag":return r.jsx(ht,{label:"Beta"});case"tabs":return r.jsx(Ie,{accessibleLabel:"Account information",items:[{id:"overview",label:"Overview",content:"Account overview."},{id:"activity",label:"Activity",content:"Recent account activity."},{id:"settings",label:"Settings",content:"Account settings."}],activeTab:d,mobilePresentation:"dropdown",onDslTabChange:m=>b(m.detail.value)});case"textarea":return r.jsx(mt,{inputId:"react-textarea",name:"summary",accessibleLabel:"Project summary",placeholder:"Describe the project",rows:4,fill:!0});case"toggle":return r.jsx(Se,{inputId:"react-toggle",name:"notifications",label:"Email notifications",description:"Receive important account and security messages."});case"tooltip":return r.jsx(gt,{label:"Password requirements",content:"Passwords must contain at least twelve characters and one number.",position:"top",triggerIcon:"information"});default:{const m=s;throw new Error(`Missing React example for ${String(m)}`)}}}export{xt as ReactExample};
