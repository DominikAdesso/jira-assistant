"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[119],{119:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var i=t(7313),l=t(6123),a=t.n(l),n=t(1329),d=t(6088),r=t(4711),o=t(9422),c=t(6444),h=t(232),g=t(8407),u=t(6417);class j extends i.PureComponent{constructor(e){super(e),this.setValue=(e,s,t)=>{let{users:i,intgUsers:l}=this.state;i=[...i];const a=i.indexOf(t);t={...t},i[a]=t,a>0&&(l=[...l],l[a-1]=t),"string"===typeof e&&(e=e.trim()||void 0),t[s]=e,void 0===t[s]&&delete t[s],this.setState({users:i,intgUsers:l})},this.saveSettings=()=>{const{users:e}=this.state;this.$user.saveGlobalSettings(e).then((()=>{this.UNSAFE_componentWillMount(),this.$message.success("Settings saved successfully. Some changes will reflect only after you refresh the page.")}))},this.toggleDelete=e=>{e.deleted?this.setValue(!1,"deleted",e):g.Z.confirmDelete((0,u.jsxs)(u.Fragment,{children:["Are you sure to delete the selected integration? ",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"This would also delete all the associated data like local Worklogs, Custom Reports, etc."]}),"Confirm delete integration",void 0,{waitFor:8}).then((()=>this.setValue(!0,"deleted",e)))},(0,d.f3)(this,"UserService","SettingsService","MessageService"),this.state={users:[],intgUsers:[]}}async UNSAFE_componentWillMount(){let e=await this.$user.getAllUsers();e=await Promise.all(e.map((async e=>{const{id:s,userId:t,jiraUrl:i,email:l,lastLogin:a}=e;return{id:s,userId:t,jiraUrl:i,email:l,lastLogin:a,...await this.$settings.getAllSettings(e.id,c.Jp.Advanced)}}))),e[0].useWebVersion=await this.$settings.get("useWebVersion"),this.setState({users:e,intgUsers:e.slice(1)})}render(){const{state:{users:e,intgUsers:s}}=this;return(0,u.jsxs)("div",{className:"global-settings",children:[(0,u.jsxs)(n.TT,{children:[(0,u.jsx)("caption",{children:"Advanced settings"}),(0,u.jsxs)(n.Et,{children:[(0,u.jsxs)(n.lE,{children:[(0,u.jsx)(n.sg,{rowSpan:2,children:"Settings"}),(0,u.jsx)(n.sg,{colSpan:e.length,children:"Instances"})]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)(n.sg,{children:"Default"}),s.map((e=>(0,u.jsxs)(n.sg,{children:[(0,r._P)(e.jiraUrl),(0,u.jsx)("span",{className:a()("fa pull-right delete-account",e.deleted?"fa-undo":"fa-trash"),title:e.deleted?"Undo delete":"Delete this integration",onClick:()=>this.toggleDelete(e)})]},e.id)))]})]}),(0,u.jsxs)(n.XP,{children:[(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Integrated on"}),(0,u.jsx)("td",{children:"N/A"}),s.map((e=>(0,u.jsx)("td",{children:e.lastLogin.format("dd-MMM-yyyy HH:mm:ss")},e.id)))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Jira Server Url"}),(0,u.jsx)("td",{children:"N/A"}),s.map((e=>{var s;return(0,u.jsx)("td",{children:(0,u.jsx)(o.zC,{placeholder:"e.g. https://jira.companysite.com",value:null===(s=e.jiraUrl)||void 0===s?void 0:s.toString(),args:e,field:"jiraUrl",onChange:this.setValue,disabled:e.deleted})},e.id)}))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Jira User id"}),(0,u.jsx)("td",{children:"N/A"}),s.map((e=>(0,u.jsx)("td",{children:(0,u.jsx)(o.zC,{placeholder:"User id of Jira",value:e.userId,args:e,field:"userId",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Email id"}),(0,u.jsx)("td",{children:"N/A"}),s.map((e=>(0,u.jsx)("td",{children:(0,u.jsx)(o.zC,{placeholder:"Email id of Jira",value:e.email,args:e,field:"email",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Open tickets JQL"}),e.map((e=>(0,u.jsx)("td",{children:(0,u.jsx)(o.zC,{multiline:!0,placeholder:c.he.openTicketsJQL,readOnly:e.id===h.rH,value:e.id===h.rH?c.he.openTicketsJQL:e.openTicketsJQL||"",args:e,field:"openTicketsJQL",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Ticket suggestions JQL"}),e.map((e=>(0,u.jsx)("td",{children:(0,u.jsx)(o.zC,{multiline:!0,placeholder:c.he.openTicketsJQL,readOnly:e.id===h.rH,value:e.id===h.rH?c.he.openTicketsJQL:e.suggestionJQL||"",args:e,field:"suggestionJQL",onChange:this.setValue,disabled:e.deleted})},e.id)))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Disable Jira issue updates"}),e.map((e=>(0,u.jsx)("td",{children:(0,u.jsx)(o.XZ,{checked:e.disableJiraUpdates,args:e,field:"disableJiraUpdates",onChange:this.setValue,disabled:e.deleted,label:"Disable Jira issue updates",title:"Do not show updates about changes for any issues happend in Jira"})},e.id)))]}),(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Jira updates JQL (used to fetch updates from Jira)"}),e.map((e=>(0,u.jsx)("td",{children:(0,u.jsx)(o.zC,{multiline:!0,placeholder:c.he.jiraUpdatesJQL,readOnly:e.id===h.rH,disabled:e.disableJiraUpdates||e.deleted,value:e.id===h.rH?c.he.jiraUpdatesJQL:e.jiraUpdatesJQL||"",args:e,field:"jiraUpdatesJQL",onChange:this.setValue})},e.id)))]}),!!e[0]&&(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Use Jira Assistant Web version"}),(0,u.jsx)("td",{colSpan:s.length+1,children:(0,u.jsx)(o.XZ,{checked:e[0].useWebVersion,args:e[0],field:"useWebVersion",onChange:this.setValue,label:"Opt to always use Web build with latest updates and fixes"})})]}),!!e[0]&&(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Enable tracking user actions (Anynmous, Google Analytics)"}),(0,u.jsx)("td",{colSpan:s.length+1,children:(0,u.jsx)(o.XZ,{checked:!1!==e[0].enableAnalyticsLogging,args:e[0],field:"enableAnalyticsLogging",onChange:this.setValue,label:"Help developers to identify what features are being used much"})})]}),!!e[0]&&(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Enable tracking exceptions (Anynmous)"}),(0,u.jsx)("td",{colSpan:s.length+1,children:(0,u.jsx)(o.XZ,{checked:!1!==e[0].enableExceptionLogging,args:e[0],field:"enableExceptionLogging",onChange:this.setValue,label:"Help developers to identify what errors occur for users and would help in fixing it soon"})})]}),!!e[0]&&(0,u.jsxs)(n.lE,{children:[(0,u.jsx)("td",{children:"Disable notifications from developer"}),(0,u.jsx)("td",{colSpan:s.length+1,children:(0,u.jsx)(o.XZ,{checked:e[0].disableDevNotification,args:e[0],field:"disableDevNotification",onChange:this.setValue,label:"Do not show important informations and bug notifications from developer"})})]})]})]}),(0,u.jsxs)("div",{className:"footer",children:[(0,u.jsx)(o.zx,{className:"pull-right",icon:"fa fa-save",label:"Save settings",type:"success",onClick:this.saveSettings}),(0,u.jsx)("strong",{children:"Note:"}),(0,u.jsx)("br",{}),"Changing these settings may cause application stability issues or lose in data. Be cautious with the changes you make.",(0,u.jsx)("br",{}),"Some settings would take effect only the next time when you revisit."]})]})}}const x=j}}]);