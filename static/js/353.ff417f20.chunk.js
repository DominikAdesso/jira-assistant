"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[353],{6367:(e,s,t)=>{t.d(s,{Z:()=>l});var i=t(7313),a=t(232),n=t(3682),r=t(6417);class o extends i.PureComponent{constructor(){super(...arguments),this.year=(new Date).getFullYear()}render(){return(0,r.jsxs)("div",{className:"card-footer p-4",children:[(0,r.jsx)("div",{className:"pull-left",children:(0,r.jsxs)("span",{children:["\xa9 2016-",this.year," ",(0,r.jsx)("a",{href:n.ov,target:"_blank",rel:"noreferrer",children:"Jira Assistant"})," v",a.Hm]})}),(0,r.jsxs)("div",{className:"pull-right",style:{textAlign:"right"},children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"fa fa-youtube"}),(0,r.jsx)("a",{href:"https://www.youtube.com/embed/HsWq7cT3Qq0?rel=0&autoplay=1&showinfo=0&cc_load_policy=1",target:"_blank",rel:"noopener noreferrer",title:"Click to open YouTube video guiding you to setup Jira Assistant",children:" Help setup"})]})," |",(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{className:"fa fa-phone margin-l-5"}),(0,r.jsx)("a",{href:`${n.ky}?entry.1426640786=${a.Hm}&entry.972533768=${navigator.userAgent}`,target:"_blank",rel:"noopener noreferrer",title:"Click to report about any issues or ask a question",children:" Contact us"})]})]})]})}}const l=o},4724:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var i=t(6123),a=t.n(i),n=t(7313),r=t(8407),o=t(3258),l=t(3682),d=t(2284),c=t(9149),h=t(6367),u=t(6848),p=t(6417);class x extends n.PureComponent{constructor(e){super(e),this.navigateToStore=()=>window.open(this.storeUrl),this.extnSelected=()=>{this.props.needIntegration?this.props.history.push("/integrate/extn"):this.props.onAuthTypeChosen("1")},this.basicAuthSelected=()=>this.props.history.push("/integrate/basic"),this.oAuthSelected=()=>{r.Z.yesNo((0,p.jsxs)("span",{children:["You will be redirected to Jira Cloud where you can Authorize Jira Assistant to access Jira API's.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"This is a one time activity and the authorization code would be stored in your browser cache which would be used in future for accessing Jira."]}),"Jira Cloud - OAuth2 Integration").then((()=>{document.location.href=(0,d.VM)({forWeb:this.props.isWebBuild,authType:"2"})}))},this.storeUrl=l.P$[o.M]||l.ov}getExtensionMessage(){const{isExtnValid:e,extnUnavailable:s,needIntegration:t}=this.props;return s?(0,p.jsx)("div",{className:"auth-type-desc",children:"Please install Jira Assistant extension and ensure it is enabled. If you believe latest version is already installed and enabled, then please ensure service worker is running in the extension."}):e?t?(0,p.jsx)("div",{className:"auth-type-desc",children:"Required version of extension is already installed but you haven't yet integrated with Jira. Select this option to connect and integrate extension with Jira. Or, click JA icon in your browser to integrate with Jira first and then refresh this page again."}):(0,p.jsx)("div",{className:"auth-type-desc",children:"Required version of extension is already installed and ready to use. Select this option to connect with Jira Assistant extension and use latest features and bug fixes not yet available in the extension."}):(0,p.jsx)("div",{className:"auth-type-desc",children:"You are using old version of Jira Assistant extension. Some of the features are not supported until you update your extension to latest version. Please update the extension and refresh this page."})}render(){const{props:{extnUnavailable:e,isExtnValid:s}}=this,t=!e&&s;return(0,p.jsxs)("div",{className:"app auth-page flex-row align-items-center",children:[(0,p.jsx)("div",{className:"container",children:(0,p.jsx)("div",{className:"row justify-content-center",children:(0,p.jsx)("div",{className:"col-md-6 no-padding no-margin",style:{maxWidth:480,minWidth:460},children:(0,p.jsxs)("div",{className:"card mx-4 no-padding no-margin",children:[(0,p.jsxs)("div",{className:"card-body p-4",children:[(0,p.jsx)("h1",{children:"Jira Assistant"}),(0,p.jsxs)("p",{className:"text-muted",children:["Choose the way you would like to ",(0,p.jsx)("strong",{children:"Integrate"})," with your Jira"]}),!c.yX&&(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)("span",{className:"badge badge-success",onClick:this.navigateToStore,title:"Click to visit webstore and install the extension",children:"Install Extension"}),!e&&!s&&!t&&(0,p.jsx)("span",{className:"badge badge-success",onClick:this.navigateToStore,title:"Click to visit webstore and update the extension",children:"Update Extension"}),(0,p.jsxs)("div",{className:a()("auth-type",!t&&"disabled"),onClick:t?this.extnSelected:void 0,children:[(0,p.jsx)("div",{className:"auth-type-title",children:"Use Jira Assistant Extension"}),this.getExtensionMessage()]})]}),(0,p.jsxs)("div",{className:"auth-type",onClick:this.oAuthSelected,children:[(0,p.jsx)("div",{className:"auth-type-title",children:"Use OAuth2 (Jira Cloud only)"}),(0,p.jsx)("div",{className:"auth-type-desc",children:"Using OAuth option will let authorize this tool to Integrate with Jira without need to store login credentials in this tool. This is more secured than using userid and password"})]}),(0,p.jsxs)("div",{className:"auth-type"+(c.yX?"":" disabled"),onClick:c.yX?this.basicAuthSelected:void 0,children:[(0,p.jsx)("div",{className:"auth-type-title",children:"Use User id and Password"}),(0,p.jsx)("div",{className:"auth-type-desc",children:"You can use your user id and password / api token to authenticate with Jira. On some cases this option may not work if you use single sign-on for logging in to Jira."})]})]}),(0,p.jsx)(h.Z,{})]})})})}),(0,p.jsx)(r.Q,{})]})}}const g=(0,u.E)(x)}}]);