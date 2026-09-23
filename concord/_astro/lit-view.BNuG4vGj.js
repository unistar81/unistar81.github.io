import{e as g,i as y,A as p,t as w,E as q,d as D,a as I,b as N,c as T,f as j,g as L,D as f,h as n}from"./dsl-toggle.B4DxiyGd.js";import{b as x,d as l,c as A,m as S,e as k,h as E,g as _,v as C,a as M,p as R,f as $,i as m,j as B}from"./AccountSettingsSpecimen.astro_astro_type_script_index_0_lang.BbDohz7p.js";import"./input.DiXHCJWi.js";import"./prefix.Bg93rmZE.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends y{constructor(t){if(super(t),this.it=p,t.type!==w.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this._t=void 0,this.it=t;if(t===q)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const F=g(r);function U(c,t,i){[D,I,N,T,j,L].forEach(s=>s());const d=()=>{const s=t.getSnapshot(),v=()=>n`<form
        id=${M("lit")}
        method="dialog"
        class="account-profile-form dsl-flow"
      >
        <p
          class="account-error-summary"
          role="alert"
          ?hidden=${!Object.keys(s.errors).length}
        >
          ${Object.keys(s.errors).length?C:""}
        </p>
        ${R.map(e=>{const a=$("lit",e.name);return n`<div class="account-field dsl-flow">
            <label for=${a}>${e.label}${e.required?" (required)":""}</label>
            <dsl-input
              .inputId=${a}
              .name=${e.name}
              .type=${e.type}
              .value=${s.draft[e.name]}
              .required=${e.required}
              .autocomplete=${e.autocomplete}
              .maxLength=${e.maxLength}
              .describedBy=${`${a}-help ${a}-error`}
              .invalid=${!!s.errors[e.name]}
            ></dsl-input>
            <p class="account-help" id=${`${a}-help`}>${e.help}</p>
            <p
              class="account-error"
              id=${`${a}-error`}
              ?hidden=${!s.errors[e.name]}
            >
              ${s.errors[e.name]??""}
            </p>
          </div>`})}
      </form>`,o=e=>n`<header class="account-panel-heading">
        <h3>${m[e].title}</h3>
        <p>${m[e].description}</p>
      </header>`,u=e=>B[e].map(a=>n`<div class="account-preference">
            <dsl-toggle
              .inputId=${$("lit",a.name)}
              .name=${a.name}
              .value=${"enabled"}
              .label=${a.label}
              .description=${a.description}
              .checked=${s.preferences[a.name]}
            ></dsl-toggle>
          </div>`),b=e=>e.id==="profile"?n`<section class="account-panel dsl-flow">
          ${o("profile")}
          <div class="account-profile-card dsl-split">
            <div class="account-identity">
              <span class="account-avatar" data-account-initials aria-hidden="true"
                >${A(s.profile.fullName)}</span
              >
              <div>
                <strong data-account-name>${s.profile.fullName}</strong>
                <p data-account-job>${s.profile.jobTitle||"No job title added"}</p>
              </div>
            </div>
            <div data-account-edit>
              <dsl-modal
                .heading=${l.title}
                .content=${l.description}
                .triggerLabel=${l.title}
                .actions=${S("lit")}
                .renderContent=${v}
              ></dsl-modal>
            </div>
          </div>
          <dl class="account-facts dsl-grid">
            <div>
              <dt>Work email</dt>
              <dd data-account-email>${s.profile.email}</dd>
            </div>
            ${k.map(a=>n`<div>
                  <dt>${a.label}</dt>
                  <dd>${a.value}</dd>
                </div>`)}
          </dl>
          <p class="account-note">
            Your saved details stay with you as you explore sections and display
            preferences.
          </p>
        </section>`:e.id==="notifications"?n`<section class="account-panel dsl-flow">
          ${o("notifications")}
          <form
            class="account-preferences dsl-flow"
            aria-label="Notification preferences"
          >
            <fieldset>
              <legend>Updates you receive</legend>
              ${u("notifications")}
            </fieldset>
            <div class="account-field dsl-flow">
              <label for="account-lit-frequency">Delivery frequency</label>
              <dsl-select
                .selectId=${"account-lit-frequency"}
                .name=${"frequency"}
                .value=${s.frequency}
                .placeholder=${E}
                .options=${_}
              ></dsl-select>
              <p class="account-help">
                Applies to project updates. Mentions and security alerts remain immediate.
              </p>
            </div>
            <div data-account-defaults>
              <dsl-button
                label="Restore notification defaults"
                variant="secondary"
              ></dsl-button>
            </div>
          </form>
        </section>`:n`<section class="account-panel dsl-flow">
        ${o("security")}
        <form class="account-preferences" aria-label="Security preferences">
          <fieldset>
            <legend>Account safeguards</legend>
            ${u("security")}
          </fieldset>
        </form>
        <section class="dsl-flow">
          <h4>Recent sessions</h4>
          <p class="account-help">
            Representative data for this specimen. No real devices or accounts are
            connected.
          </p>
          ${F(i)}
        </section>
      </section>`;f(n`<dsl-tabs
        .items=${x}
        .activeTab=${s.section}
        accessible-label="Account settings sections"
        .renderPanel=${b}
      ></dsl-tabs>`,c)};d();const h=t.subscribe(d);return()=>{h(),f(null,c)}}export{U as mountLitView};
