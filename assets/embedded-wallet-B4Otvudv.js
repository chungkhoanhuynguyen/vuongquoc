import{B as e,F as t,M as n,U as r,V as i,X as a,b as o,g as s,i as c,j as l,l as u,r as d,t as f,v as p,w as m,y as h}from"./ModalController-CNP3-VTJ.js";import{r as g}from"./NetworkUtil-DSv5NCmy.js";import{t as _}from"./NavigationUtil-CLCRNDHF.js";import{t as v}from"./EnsController-DxMhYRkP.js";import{_ as y,c as b,f as x,o as S,r as C,t as w}from"./exports-ClBc5snA.js";import{c as T,l as E,o as D,s as O}from"./wui-text-Bv1loQuq.js";import"./wui-loading-spinner-Bu8aeVwP.js";import"./wui-button-BuF8ACbt.js";import"./wui-icon-keTR1E-n.js";import"./wui-icon-link-CLgKX2n-.js";import"./wui-image-BnrBGrqD.js";import"./wui-loading-spinner-BuHDnp8W.js";import"./wui-link-DrXIeKTe.js";import"./wui-icon-box-C_fPWDS0.js";import{n as k,t as A}from"./ref-B0bKpEC-.js";import"./wui-input-text-DPij5fAC.js";import{t as j}from"./HelpersUtil-il4R6_1k.js";var ee=y`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,M=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},N=600,P=360,te=64,F=class extends b{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById(`w3m-iframe`),this.ready=!1,this.unsubscribe.push(f.subscribeKey(`open`,e=>{e||this.onHideIframe()}),f.subscribeKey(`shake`,e=>{e?this.iframe.style.animation=`w3m-shake 500ms var(--apkt-easings-ease-out-power-2)`:this.iframe.style.animation=`none`}))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach(e=>e()),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display=`block`;let e=this?.renderRoot?.querySelector(`div`);this.bodyObserver=new ResizeObserver(t=>{let r=(t?.[0]?.contentBoxSize)?.[0]?.inlineSize;this.iframe.style.height=`${N}px`,e.style.height=`${N}px`,n.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():r&&r<=430?(this.iframe.style.width=`100%`,this.iframe.style.left=`0px`,this.iframe.style.bottom=`0px`,this.iframe.style.top=`unset`,this.onShowIframe()):(this.iframe.style.width=`${P}px`,this.iframe.style.left=`calc(50% - ${P/2}px)`,this.iframe.style.top=`calc(50% - ${N/2}px + ${te/2}px)`,this.iframe.style.bottom=`unset`,this.onShowIframe())}),this.bodyObserver.observe(window.document.body)}render(){return x`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){let e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?`w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)`:`w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)`}onHideIframe(){this.iframe.style.display=`none`,this.iframe.style.animation=`w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)`}async syncTheme(){let e=p.getAuthConnector();if(e){let t=h.getSnapshot().themeMode,n=h.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:n,w3mThemeVariables:a(n,t)})}}async updateFrameSizeForEmbeddedMode(){let e=this?.renderRoot?.querySelector(`div`);await new Promise(e=>{setTimeout(e,300)});let t=this.getBoundingClientRect();e.style.width=`100%`,this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top}px`,this.iframe.style.width=`${t.width}px`,this.iframe.style.height=`${t.height}px`,this.onShowIframe()}};F.styles=ee,M([O()],F.prototype,`ready`,void 0),F=M([E(`w3m-approve-transaction-view`)],F);var I=S`
  a {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  a[data-type='error'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  a[data-type='warning'] {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    a[data-type='success']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderSuccess};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderError};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
      box-shadow: 0px 0px 0px 1px ${({tokens:e})=>e.core.borderWarning};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${({tokens:e})=>e.core.backgroundAccentPrimary},
      0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  a:disabled {
    opacity: 0.5;
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R={sm:`md-regular`,md:`lg-regular`,lg:`lg-regular`},z={success:`sealCheck`,error:`warning`,warning:`exclamationCircle`},B=class extends b{constructor(){super(...arguments),this.type=`success`,this.size=`md`,this.imageSrc=void 0,this.disabled=!1,this.href=``,this.text=void 0}render(){return x`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?`disabled`:``}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${R[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?x`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:x`<wui-icon
      name=${z[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};B.styles=[C,w,I],L([T()],B.prototype,`type`,void 0),L([T()],B.prototype,`size`,void 0),L([T()],B.prototype,`imageSrc`,void 0),L([T({type:Boolean})],B.prototype,`disabled`,void 0),L([T()],B.prototype,`href`,void 0),L([T()],B.prototype,`text`,void 0),B=L([E(`wui-semantic-chip`)],B);var V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends b{render(){return x`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${r.SECURE_SITE_DASHBOARD}
          href=${r.SECURE_SITE_DASHBOARD}
          imageSrc=${r.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};H=V([E(`w3m-upgrade-wallet-view`)],H);var U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=class extends b{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text=``,this.network=d.state.activeCaipNetwork}render(){return x`
      <wui-flex flexDirection="column" gap="2" .padding=${[`6`,`4`,`3`,`4`]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return x`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?`arrowTop`:`arrowBottom`}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?`7`:`6`}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return(t.get(`dapp_smart_account_version`)||`v6`)===`v6`}toggleSmartAccountVersion(){t.set(`dapp_smart_account_version`,this.isV6()?`v7`:`v6`),typeof window<`u`&&window?.location?.reload()}togglePreferredAccountTypeTemplate(){let t=this.network?.chainNamespace,n=d.checkIfSmartAccountEnabled(),r=p.getConnectorId(t);return!p.getAuthConnector()||r!==g.CONNECTOR_ID.AUTH||!n?null:(this.switched||(this.text=s(t)===e.ACCOUNT_TYPES.SMART_ACCOUNT?`Switch to your EOA`:`Switch to your Smart Account`),x`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}async changePreferredAccountType(){let t=this.network?.chainNamespace,n=d.checkIfSmartAccountEnabled(),r=s(t)===e.ACCOUNT_TYPES.SMART_ACCOUNT||!n?e.ACCOUNT_TYPES.EOA:e.ACCOUNT_TYPES.SMART_ACCOUNT;p.getAuthConnector()&&(this.loading=!0,await u.setPreferredAccountType(r,t),this.text=r===e.ACCOUNT_TYPES.SMART_ACCOUNT?`Switch to your EOA`:`Switch to your Smart Account`,this.switched=!0,c.resetSend(),this.loading=!1,this.requestUpdate())}};U([O()],W.prototype,`loading`,void 0),U([O()],W.prototype,`switched`,void 0),U([O()],W.prototype,`text`,void 0),U([O()],W.prototype,`network`,void 0),W=U([E(`w3m-smart-account-settings-view`)],W);var G=S`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
      border-radius: ${({borderRadius:e})=>e[6]};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }
`,K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends b{constructor(){super(...arguments),this.name=``,this.registered=!1,this.loading=!1,this.disabled=!1}render(){return x`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?x`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?x`<wui-tag variant="info" size="sm">Registered</wui-tag>`:x`<wui-tag variant="success" size="sm">Available</wui-tag>`}};q.styles=[C,w,G],K([T()],q.prototype,`name`,void 0),K([T({type:Boolean})],q.prototype,`registered`,void 0),K([T({type:Boolean})],q.prototype,`loading`,void 0),K([T({type:Boolean})],q.prototype,`disabled`,void 0),q=K([E(`wui-account-name-suggestion-item`)],q);var J=S`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${({spacing:e})=>e[4]};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`,Y=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},X=class extends b{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return x`
      <wui-input-text
        value=${D(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||``}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};X.styles=[C,J],Y([T()],X.prototype,`errorMessage`,void 0),Y([T({type:Boolean})],X.prototype,`disabled`,void 0),Y([T()],X.prototype,`value`,void 0),Y([T({type:Boolean})],X.prototype,`loading`,void 0),Y([T({attribute:!1})],X.prototype,`onKeyDown`,void 0),X=Y([E(`wui-ens-input`)],X);var ne=S`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[6]};
    padding: ${({spacing:e})=>e[4]};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`,Z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Q=class extends b{constructor(){super(),this.formRef=A(),this.usubscribe=[],this.name=``,this.error=``,this.loading=v.state.loading,this.suggestions=v.state.suggestions,this.profileName=d.getAccountData()?.profileName,this.onDebouncedNameInputChange=i.debounce(e=>{e.length<4?this.error=`Name must be at least 4 characters long`:j.isValidReownName(e)?(this.error=``,v.getSuggestions(e)):this.error=`The value is not a valid username`}),this.usubscribe.push(v.subscribe(e=>{this.suggestions=e.suggestions,this.loading=e.loading}),d.subscribeChainProp(`accountState`,e=>{this.profileName=e?.profileName,e?.profileName&&(this.error=`You already own a name`)}))}firstUpdated(){this.formRef.value?.addEventListener(`keydown`,this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach(e=>e()),this.formRef.value?.removeEventListener(`keydown`,this.onEnterKey.bind(this))}render(){return x`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[`1`,`3`,`4`,`3`]}
      >
        <form ${k(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){let e=this.suggestions.find(e=>e.name?.split(`.`)?.[0]===this.name&&e.registered);if(this.loading)return x`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;let t=`${this.name}${g.WC_NAME_SUFFIX}`;return x`
      <wui-icon-link
        ?disabled=${!!e}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?`default`:`accent-primary`}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){let t=j.validateReownName(e.detail||``);this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){e.key.length===1&&!j.isValidReownName(e.key)&&e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:x`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map(e=>x`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`)}
    </wui-flex>`}isAllowedToSubmit(e){let t=e.split(`.`)?.[0],n=this.suggestions.find(e=>e.name?.split(`.`)?.[0]===t&&e.registered);return!this.loading&&!this.error&&!this.profileName&&t&&v.validateName(t)&&!n}async onSubmitName(t){try{if(!this.isAllowedToSubmit(t))return;m.sendEvent({type:`track`,event:`REGISTER_NAME_INITIATED`,properties:{isSmartAccount:s(d.state.activeChain)===e.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}}),await v.registerName(t),m.sendEvent({type:`track`,event:`REGISTER_NAME_SUCCESS`,properties:{isSmartAccount:s(d.state.activeChain)===e.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t}})}catch(n){l.showError(n.message),m.sendEvent({type:`track`,event:`REGISTER_NAME_ERROR`,properties:{isSmartAccount:s(d.state.activeChain)===e.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:t,error:i.parseError(n)}})}}onEnterKey(e){if(e.key===`Enter`&&this.name&&this.isAllowedToSubmit(this.name)){let e=`${this.name}${g.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};Q.styles=ne,Z([T()],Q.prototype,`errorMessage`,void 0),Z([O()],Q.prototype,`name`,void 0),Z([O()],Q.prototype,`error`,void 0),Z([O()],Q.prototype,`loading`,void 0),Z([O()],Q.prototype,`suggestions`,void 0),Z([O()],Q.prototype,`profileName`,void 0),Q=Z([E(`w3m-register-account-name-view`)],Q);var re=y`
  .continue-button-container {
    width: 100%;
  }
`,ie=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends b{render(){return x`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[`0`,`0`,`4`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{i.openHref(_.URLS.FAQ,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return x` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[`0`,`6`,`0`,`6`]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return x`<wui-flex
      .padding=${[`0`,`4`,`0`,`4`]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){o.replace(`Account`)}};$.styles=re,$=ie([E(`w3m-register-account-name-success-view`)],$);export{F as W3mApproveTransactionView,$ as W3mRegisterAccountNameSuccess,Q as W3mRegisterAccountNameView,W as W3mSmartAccountSettingsView,H as W3mUpgradeWalletView};