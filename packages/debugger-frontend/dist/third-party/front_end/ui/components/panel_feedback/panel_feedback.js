import*as e from"../../../core/host/host.js";import*as t from"../../../core/i18n/i18n.js";import*as i from"../../../core/platform/platform.js";import*as n from"../helpers/helpers.js";import*as r from"../../lit-html/lit-html.js";import*as o from"../buttons/buttons.js";import*as a from"../icon_button/icon_button.js";import*as s from"../../../core/root/root.js";import*as l from"../input/input.js";const d={feedback:"Feedback"},c=t.i18n.registerUIStrings("ui/components/panel_feedback/FeedbackButton.ts",d),h=t.i18n.getLocalizedString.bind(void 0,c),p=new URL("../../../Images/review.svg",import.meta.url).toString();class m extends HTMLElement{static litTagName=r.literal`devtools-feedback-button`;#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#n={feedbackUrl:i.DevToolsPath.EmptyUrlString};set data(e){this.#n=e,n.ScheduledRender.scheduleRender(this,this.#t)}#r(){e.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(this.#n.feedbackUrl)}#i(){if(!n.ScheduledRender.isScheduledRender(this))throw new Error("FeedbackButton render was not scheduled");r.render(r.html` <${o.Button.Button.litTagName} @click="${this.#r}" .iconUrl="${p}" .variant="${"secondary"}">${h(d.feedback)}</${o.Button.Button.litTagName}> `,this.#e,{host:this})}}n.CustomElements.defineComponent("devtools-feedback-button",m);var k=Object.freeze({__proto__:null,FeedbackButton:m});const x=new CSSStyleSheet;x.replaceSync(":host{display:block}.preview{padding:12px 16px;border:1px solid var(--color-details-hairline);color:var(--color-text-primary);font-size:13px;line-height:20px;border-radius:12px;margin:42px 0;letter-spacing:0.01em}h2{color:var(--color-primary-old);font-size:13px;line-height:20px;letter-spacing:0.01em;margin:9px 0 14px;display:flex;align-items:center;gap:5px;font-weight:normal}h3{font-size:13px;line-height:20px;letter-spacing:0.04em;color:var(--color-text-primary);margin-bottom:2px;font-weight:normal}.preview p{margin-bottom:24px}.thumbnail{height:92px}.video{display:flex;flex-flow:row wrap;gap:20px}x-link{color:var(--color-primary-old);text-decoration-line:underline}x-link.quick-start-link{font-size:14px;line-height:22px;letter-spacing:0.04em}.video-description{min-width:min-content;flex-basis:min-content;flex-grow:1}@media (forced-colors: active){x-link{color:linktext}}\n/*# sourceURL=panelFeedback.css */\n");const b={previewText:"Our team is actively working on this feature and we would love to know what you think.",previewTextFeedbackLink:"Send us your feedback.",previewFeature:"Preview feature",videoAndDocumentation:"Video and documentation"},g=t.i18n.registerUIStrings("ui/components/panel_feedback/PanelFeedback.ts",b),v=t.i18n.getLocalizedString.bind(void 0,g),u=new URL("../../../Images/experiment.svg",import.meta.url).toString(),f=new URL("../../../Images/preview_feature_video_thumbnail.svg",import.meta.url).toString();class w extends HTMLElement{static litTagName=r.literal`devtools-panel-feedback`;#e=this.attachShadow({mode:"open"});#t=this.#i.bind(this);#n={feedbackUrl:i.DevToolsPath.EmptyUrlString,quickStartUrl:i.DevToolsPath.EmptyUrlString,quickStartLinkText:""};connectedCallback(){this.#e.adoptedStyleSheets=[x]}set data(e){this.#n=e,n.ScheduledRender.scheduleRender(this,this.#t)}#i(){if(!n.ScheduledRender.isScheduledRender(this))throw new Error("PanelFeedback render was not scheduled");r.render(r.html` <div class="preview"> <h2 class="flex"> <${a.Icon.Icon.litTagName} .data="${{iconPath:u,width:"20px",height:"20px",color:"var(--icon-primary)"}}"></${a.Icon.Icon.litTagName}> ${v(b.previewFeature)} </h2> <p>${v(b.previewText)} <x-link href="${this.#n.feedbackUrl}">${v(b.previewTextFeedbackLink)}</x-link></p> <div class="video"> <div class="thumbnail"> <img src="${f}" role="presentation"> </div> <div class="video-description"> <h3>${v(b.videoAndDocumentation)}</h3> <x-link class="quick-start-link" href="${this.#n.quickStartUrl}">${this.#n.quickStartLinkText}</x-link> </div> </div> </div> `,this.#e,{host:this})}}n.CustomElements.defineComponent("devtools-panel-feedback",w);var S=Object.freeze({__proto__:null,PanelFeedback:w});const L=new CSSStyleSheet;L.replaceSync(":host{display:block}.container{display:flex;flex-wrap:wrap;padding:4px}.experiment-preview,\n.feedback,\n.learn-more{display:flex;align-items:center}.helper{flex-basis:100%;text-align:center;font-style:italic}.spacer{flex:1}.x-link{color:var(--color-primary-old);text-decoration-line:underline;margin:0 4px}.feedback .x-link{color:var(--color-text-secondary)}\n/*# sourceURL=previewToggle.css */\n");const{render:T,html:$,nothing:R}=r,y={previewTextFeedbackLink:"Send us your feedback.",shortFeedbackLink:"Send feedback",learnMoreLink:"Learn More"},U=t.i18n.registerUIStrings("ui/components/panel_feedback/PreviewToggle.ts",y),C=t.i18n.getLocalizedString.bind(void 0,U);class F extends HTMLElement{static litTagName=r.literal`devtools-preview-toggle`;#e=this.attachShadow({mode:"open"});#o="";#a=null;#s=null;#l;#d="";#c;connectedCallback(){this.#e.adoptedStyleSheets=[l.checkboxStyles,L]}set data(e){this.#o=e.name,this.#a=e.helperText,this.#s=e.feedbackURL,this.#l=e.learnMoreURL,this.#d=e.experiment,this.#c=e.onChangeCallback,this.#i()}#i(){const e=s.Runtime.experiments.isEnabled(this.#d);T($` <div class="container"> <label class="experiment-preview"> <input type="checkbox" ?checked="${e}" @change="${this.#h}" aria-label="${this.#o}/"> <${a.Icon.Icon.litTagName} .data="${{iconName:"experiment",width:"16px",height:"16px",color:"var(--icon-default)"}}"> </${a.Icon.Icon.litTagName}>${this.#o} </label> <div class="spacer"></div> ${this.#s&&!this.#a?$`<div class="feedback"><x-link class="x-link" href="${this.#s}">${C(y.shortFeedbackLink)}</x-link></div>`:R} ${this.#l?$`<div class="learn-more"><x-link class="x-link" href="${this.#l}">${C(y.learnMoreLink)}</x-link></div>`:R} <div class="helper"> ${this.#a&&this.#s?$`<p>${this.#a} <x-link class="x-link" href="${this.#s}">${C(y.previewTextFeedbackLink)}</x-link>`:R} </div> </div>`,this.#e,{host:this})}#h(e){const t=e.target.checked;s.Runtime.experiments.setEnabled(this.#d,t),this.#c?.(t)}}n.CustomElements.defineComponent("devtools-preview-toggle",F);var _=Object.freeze({__proto__:null,PreviewToggle:F});export{k as FeedbackButton,S as PanelFeedback,_ as PreviewToggle};