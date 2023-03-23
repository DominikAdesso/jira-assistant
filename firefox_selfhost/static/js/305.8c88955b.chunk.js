"use strict";(globalThis.webpackChunkjira_assistant=globalThis.webpackChunkjira_assistant||[]).push([[305],{8514:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(7313),i=s(8933),a=s(7174),o=s(6417);class l extends r.PureComponent{constructor(e){super(e),this.searchRapidView=e=>{e=(e||"").toLowerCase();const{state:{rapidViews:t},props:{value:s}}=this;return t.filter((t=>(t.name.toLowerCase().indexOf(e)>=0||t.id.toString().startsWith(e))&&(!s||!s.some((e=>e.id===t.id)))))},this.setValue=e=>{this.props.onChange(e)},(0,a.f3)(this,"JiraService"),this.state={},this.init()}init(){return this.$jira.getRapidViews().then((e=>{const t=e.orderBy((e=>e.name)).map((e=>({name:e.name,id:e.id})));let{value:s}=this.props;if(s&&Array.isArray(s)&&s.length){const e=s.map((e=>e.id));s=t.filter((t=>!!~e.indexOf(t.id)))}this.setValue(s),this.setState({rapidViews:t})}))}render(){const{state:{rapidViews:e},props:{value:t,placeholder:s}}=this;return(0,o.jsx)(i.Qc,{value:t,onChange:this.setValue,dataset:this.searchRapidView,dropdown:!0,multiple:!0,displayField:"name",placeholder:s||"start typing the board name here",size:35,maxLength:25,styleclass:"autocomplete-350",scrollHeight:"300px",disabled:!e||0===e.length})}}const n=l},7493:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var r=s(7313),i=s(7174),a=s(2371),o=s(8514),l=s(8933),n=s(6417);class d extends r.PureComponent{constructor(e){super(e),this.pullSprintList=e=>{let{rapidViews:t}=e;if(this.rapidViews=t,t&&!Array.isArray(t)&&(t=[t]),!t||0===t.length)return this.setState({sprints:null}),void this.props.onChange([]);const s=t.map((e=>e.id));let{value:r}=e;r&&r.length>0&&(r=[...r],r.removeAll((e=>-1===s.indexOf(e.rapidId))),this.props.onChange(r)),this.$jira.getRapidSprintList(s).then((e=>{(e=e.orderByDescending((e=>e.id))).forEach((e=>{e.stateAppended||(e.stateAppended=!0,e.name+=` - (${e.state})`||"")})),this.setState({sprints:e})}))},this.searchSprints=e=>{e=(e||"").toLowerCase();const{value:t}=this.props,s=t&&t.map((e=>e.id));return this.state.sprints.filter((t=>(t.name.toLowerCase().indexOf(e)>=0||t.id.toString().startsWith(e))&&(!s||-1===s.indexOf(t.id))))},this.setValue=e=>{this.props.onChange(e)},(0,i.f3)(this,"JiraService"),this.state={}}componentDidMount(){this.pullSprintList(this.props)}UNSAFE_componentWillReceiveProps(e){this.rapidViews!==e.rapidViews&&this.pullSprintList(e)}render(){const{state:{sprints:e},props:{value:t,placeholder:s}}=this;return(0,n.jsx)(l.Qc,{value:t,onChange:this.setValue,dataset:this.searchSprints,dropdown:!0,multiple:!0,displayField:"name",placeholder:s||"start typing the sprint name here",size:35,maxLength:25,styleclass:"autocomplete-350",scrollHeight:"300px",disabled:!e||0===e.length})}}const c=d;var p=s(6614),h=s(4711);class u extends r.PureComponent{render(){const{sprintDetails:e,formatDateTime:t}=this.props;return(0,n.jsxs)(p.TT,{dataset:e,className:"f-height no-full-width data-center exportable",exportSheetName:"Summary view 1",children:[(0,n.jsxs)(p.Et,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{rowSpan:2,colSpan:2,children:"Sprint details"}),(0,n.jsx)("th",{colSpan:e.length,children:"Sprints"})]}),(0,n.jsx)("tr",{children:e.map(((e,t)=>(0,n.jsx)("th",{style:{width:200},children:e.sprint.name},t)))})]}),(0,n.jsxs)(p.XP,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colSpan:2,className:"data-left",children:"Start date"}),e.map(((e,s)=>(0,n.jsx)("td",{children:t(e.sprint.startDate)},s)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colSpan:2,className:"data-left",children:"Completed date"}),e.map(((e,s)=>(0,n.jsx)("td",{children:t(e.sprint.completeDate)},s)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colSpan:2,className:"data-left",children:"Current status"}),e.map(((e,t)=>(0,n.jsx)("td",{children:e.sprint.state},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colSpan:2,className:"data-left",children:"Closed by"}),e.map(((e,t)=>(0,n.jsx)("td",{children:(0,h.rg)(e.lastUserToClose)},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:4,className:"brdr-btm-dbl",children:"Estimated"}),(0,n.jsx)("td",{className:"data-left",children:"Story points"}),e.map(((e,t)=>(0,n.jsxs)("td",{exporttype:"int",exportvalue:e.estimateIssuesSP,children:[e.estimateIssuesSPOld&&(0,n.jsxs)("span",{children:[e.estimateIssuesSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.estimateIssuesSP]},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count with story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.estimateIssuesWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count without story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.estimateIssuesCount-e.estimateIssuesWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"brdr-btm-dbl data-left",children:"Total ticket count (with + without) story points"}),e.map(((e,t)=>(0,n.jsx)("td",{className:"brdr-btm-dbl",exporttype:"int",children:e.estimateIssuesCount},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:4,className:"brdr-btm-dbl",children:"Total"}),(0,n.jsx)("td",{className:"data-left",children:"Story points"}),e.map(((e,t)=>(0,n.jsxs)("td",{exporttype:"int",exportvalue:e.totalIssuesSP,children:[e.totalIssuesSPOld&&(0,n.jsxs)("span",{children:[e.totalIssuesSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.totalIssuesSP]},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count with story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.totalIssuesWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count without story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.totalIssuesCount-e.totalIssuesWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left brdr-btm-dbl",children:"Total ticket count (with + without) story points"}),e.map(((e,t)=>(0,n.jsx)("td",{className:"brdr-btm-dbl",exporttype:"int",children:e.totalIssuesCount},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:4,className:"brdr-btm-dbl",children:"Completed"}),(0,n.jsx)("td",{className:"data-left",children:"Story points"}),e.map(((e,t)=>(0,n.jsxs)("td",{exportvalue:e.completedSP,exporttype:"int",children:[e.completedSPOld&&(0,n.jsxs)("span",{children:[e.completedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.completedSP]},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count with story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.completedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count without story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.CompletedTotal-e.completedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left brdr-btm-dbl",children:"Total ticket count (with + without) story points"}),e.map(((e,t)=>(0,n.jsx)("td",{className:"brdr-btm-dbl",exporttype:"int",children:e.CompletedTotal},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:4,className:"brdr-btm-dbl",children:"Not completed"}),(0,n.jsx)("td",{className:"data-left",children:"Story points"}),e.map(((e,t)=>(0,n.jsxs)("td",{exportvalue:e.incompletedSP,exporttype:"int",children:[e.incompletedSPOld&&(0,n.jsxs)("span",{children:[e.incompletedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.incompletedSP]},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count with story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.incompletedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count without story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.incompletedTotal-e.incompletedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left brdr-btm-dbl",children:"Total ticket count (with + without) story points"}),e.map(((e,t)=>(0,n.jsx)("td",{className:"brdr-btm-dbl",exporttype:"int",children:e.incompletedTotal},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:4,className:"brdr-btm-dbl",children:"Added to sprint"}),(0,n.jsx)("td",{className:"data-left",children:"Story points"}),e.map(((e,t)=>(0,n.jsxs)("td",{exportvalue:e.addedSP,exporttype:"int",children:[e.addedSPOld&&(0,n.jsxs)("span",{children:[e.addedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.addedSP]},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count with story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.addedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count without story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.addedIssues-e.addedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left brdr-btm-dbl",children:"Total ticket count (with + without) story points"}),e.map(((e,t)=>(0,n.jsx)("td",{className:"brdr-btm-dbl",exporttype:"int",children:e.addedIssues},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:4,children:"Removed from sprint"}),(0,n.jsx)("td",{className:"data-left",children:"Story points"}),e.map(((e,t)=>(0,n.jsxs)("td",{exportvalue:e.removedSP,exporttype:"int",children:[e.removedSPOld&&(0,n.jsxs)("span",{children:[e.removedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.removedSP]},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count with story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.removedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Ticket count without story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.removedTotal-e.removedWithSP},t)))]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"data-left",children:"Total ticket count (with + without) story points"}),e.map(((e,t)=>(0,n.jsx)("td",{exporttype:"int",children:e.removedTotal},t)))]})]})]})}}const m=u,x=(0,n.jsxs)("div",{style:{paddingLeft:15},children:[(0,n.jsx)("strong",{children:"Notes:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"* Tickets highlighted below are changes in scope of the sprint"}),(0,n.jsx)("li",{children:"Count of tickets format: Count of tickets with storypoints + Count of tickets without storypoints = Total count of tickets"})]})]});class j extends r.PureComponent{render(){const{sprintDetails:e,formatDateTime:t}=this.props;return(0,n.jsxs)(n.Fragment,{children:[x,(0,n.jsxs)(p.TT,{className:"dataTable exportable summ-2",exportSheetName:"Summary view 2",children:[(0,n.jsxs)(p.Et,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{rowSpan:2,children:"Sprint"}),(0,n.jsx)("th",{rowSpan:2,children:"Start Date"}),(0,n.jsx)("th",{rowSpan:2,children:"Completed Date"}),(0,n.jsx)("th",{rowSpan:2,children:"Status"}),(0,n.jsx)("th",{rowSpan:2,children:"Closed by"}),(0,n.jsx)("th",{colSpan:2,className:"data-center",children:"Estimated"}),(0,n.jsx)("th",{colSpan:2,className:"data-center",children:"Total Issues"}),(0,n.jsx)("th",{colSpan:2,className:"data-center",children:"Completed Issues"}),(0,n.jsx)("th",{colSpan:2,className:"data-center",children:"Issues Not Completed"}),(0,n.jsx)("th",{colSpan:2,className:"data-center",children:"Added to sprint"}),(0,n.jsx)("th",{colSpan:2,className:"data-center",children:"Removed from sprint"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Story Points"}),(0,n.jsxs)("th",{children:["Count ",(0,n.jsx)("i",{className:"fa fa-question-circle help-icon",title:"Ticket with storypoints + Ticket without storypoints = Total story count"})]}),(0,n.jsx)("th",{children:"Story Points"}),(0,n.jsxs)("th",{children:["Count ",(0,n.jsx)("i",{className:"fa fa-question-circle help-icon",title:"Ticket with storypoints + Ticket without storypoints = Total story count"})]}),(0,n.jsx)("th",{children:"Story Points"}),(0,n.jsxs)("th",{children:["Count ",(0,n.jsx)("i",{className:"fa fa-question-circle help-icon",title:"Ticket with storypoints + Ticket without storypoints = Total story count"})]}),(0,n.jsx)("th",{children:"Story Points"}),(0,n.jsxs)("th",{children:["Count ",(0,n.jsx)("i",{className:"fa fa-question-circle help-icon",title:"Ticket with storypoints + Ticket without storypoints = Total story count"})]}),(0,n.jsx)("th",{children:"Story Points"}),(0,n.jsxs)("th",{children:["Count ",(0,n.jsx)("i",{className:"fa fa-question-circle help-icon",title:"Ticket with storypoints + Ticket without storypoints = Total story count"})]}),(0,n.jsx)("th",{children:"Story Points"}),(0,n.jsxs)("th",{children:["Count ",(0,n.jsx)("i",{className:"fa fa-question-circle help-icon",title:"Ticket with storypoints + Ticket without storypoints = Total story count"})]})]})]}),(0,n.jsx)(p.XP,{children:e.map(((e,s)=>(0,n.jsx)(g,{sprint:e,formatDateTime:t},s)))})]})]})}}const S=j;class g extends r.PureComponent{constructor(){super(...arguments),this.state={expanded:!1},this.toggleExpanded=()=>this.setState({expanded:!this.state.expanded})}render(){const{sprint:e,formatDateTime:t}=this.props,{expanded:s}=this.state;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("tr",{className:"pointer auto-wrap",onClick:this.toggleExpanded,title:"Click to expand and view individual ticket details",children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("i",{className:"drill-down fa "+(s?"fa-chevron-circle-down":"fa-chevron-circle-right"),style:{cursor:"pointer",marginRight:"5px"},title:"Click to toggle sprint ticket details"}),e.sprint.name]}),(0,n.jsx)("td",{children:t(e.sprint.startDate)}),(0,n.jsx)("td",{children:t(e.sprint.completeDate)}),(0,n.jsx)("td",{children:e.sprint.state}),(0,n.jsx)("td",{children:(0,h.rg)(e.lastUserToClose)}),(0,n.jsxs)("td",{className:"data-center",children:[e.estimateIssuesSPOld&&(0,n.jsxs)("span",{children:[e.estimateIssuesSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.estimateIssuesSP]}),(0,n.jsx)("td",{className:"data-center",children:e.estimateIssuesCount&&(0,n.jsxs)("span",{children:[e.estimateIssuesWithSP," +",e.estimateIssuesCount-e.estimateIssuesWithSP," =",e.estimateIssuesCount]})}),(0,n.jsxs)("td",{className:"data-center",children:[e.totalIssuesSPOld&&(0,n.jsxs)("span",{children:[e.totalIssuesSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.totalIssuesSP]}),(0,n.jsx)("td",{className:"data-center",children:e.totalIssuesCount&&(0,n.jsxs)("span",{children:[e.totalIssuesWithSP," +",e.totalIssuesCount-e.totalIssuesWithSP," =",e.totalIssuesCount]})}),(0,n.jsxs)("td",{className:"data-center",children:[e.completedSPOld&&(0,n.jsxs)("span",{children:[e.completedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.completedSP]}),(0,n.jsx)("td",{className:"data-center",children:e.CompletedTotal&&(0,n.jsxs)("span",{children:[e.completedWithSP," +",e.CompletedTotal-e.completedWithSP," =",e.CompletedTotal]})}),(0,n.jsxs)("td",{className:"data-center",children:[e.incompletedSPOld&&(0,n.jsxs)("span",{children:[e.incompletedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.incompletedSP]}),(0,n.jsx)("td",{className:"data-center",children:e.incompletedTotal&&(0,n.jsxs)("span",{children:[e.incompletedWithSP," +",e.incompletedTotal-e.incompletedWithSP," =",e.incompletedTotal]})}),(0,n.jsxs)("td",{className:"log-less data-center",children:[e.addedSPOld&&(0,n.jsxs)("span",{children:[e.addedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.addedSP]}),(0,n.jsx)("td",{className:"log-less data-center",children:e.addedIssues&&(0,n.jsxs)("span",{children:[e.addedWithSP," +",e.addedIssues-e.addedWithSP," =",e.addedIssues]})}),(0,n.jsxs)("td",{className:"data-center",children:[e.removedSPOld&&(0,n.jsxs)("span",{children:[e.removedSPOld," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]}),e.removedSP]}),(0,n.jsx)("td",{className:"data-center",children:e.removedTotal&&(0,n.jsxs)("span",{children:[e.removedWithSP," +",e.removedTotal-e.removedWithSP," =",e.removedTotal]})})]}),s&&(0,n.jsx)("tr",{exportignore:"true",children:(0,n.jsx)("td",{colSpan:17,style:{padding:"0 !important"},children:(0,n.jsx)(f,{sprint:e})})})]})}}class f extends r.PureComponent{render(){const{sprint:e}=this.props;return(0,n.jsxs)(p.TT,{className:"dataTable min-width-110 exportable",exportSheetName:e.sprint.name,children:[(0,n.jsx)(p.Et,{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Key"}),(0,n.jsx)("th",{children:"Summary"}),(0,n.jsx)("th",{children:"Issue Type"}),(0,n.jsx)("th",{children:"Priority"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Story Points"})]})}),(0,n.jsxs)(p.XP,{children:[(0,n.jsx)(y,{header:"Completed Issues",issues:e.contents.completedIssues}),(0,n.jsx)(y,{header:"Issues Removed From Sprint",issues:e.contents.puntedIssues}),(0,n.jsx)(y,{header:"Issues Not Completed",issues:e.contents.issuesNotCompletedInCurrentSprint})]})]})}}class y extends r.PureComponent{render(){const{header:e,issues:t}=this.props;return t&&0!==t.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:6,children:(0,n.jsx)("strong",{children:e})})}),t.map(((e,t)=>(0,n.jsxs)("tr",{className:e.addedLater?"log-high":"",children:[(0,n.jsxs)("td",{children:[e.key," ",e.addedLater&&(0,n.jsx)("span",{children:"*"})]}),(0,n.jsx)("td",{children:e.summary}),(0,n.jsxs)("td",{children:[e.typeUrl&&(0,n.jsx)("img",{className:"img-x16",src:e.typeUrl,alt:""})," ",e.typeName]}),(0,n.jsxs)("td",{children:[e.priorityUrl&&(0,n.jsx)("img",{className:"img-x16",src:e.priorityUrl,alt:""})," ",e.priorityName]}),(0,n.jsxs)("td",{children:[e.statusUrl&&(0,n.jsx)("img",{className:"img-x16",src:e.statusUrl,alt:""})," ",e.statusName]}),(0,n.jsxs)("td",{children:[e.oldSP>=0&&(0,n.jsxs)("span",{children:[e.oldSP," ",(0,n.jsx)("i",{className:"fa fa-arrow-right"})]})," ",e.currentSP]})]},t)))]}):null}}class P extends r.PureComponent{constructor(e){super(e),this.updateWorklogDetails=(e,t)=>{e||(e=this.state.reportData),!t&&this.state.groups&&(t=[...this.state.groups]),e=e.map((e=>{e={...e};const t={};e.worklogs=t;let s=0;const r=[];let i=0;return e.issuetypes.forEach((e=>{const a={};e.worklogs=a;let o=0;const l=[];let n=0;e.issues.forEach((e=>{if(!this.state.showIncomplete&&!e.completed)return;n+=e.estimateAll||0;let s=0,i=0;const d=[],c=[];this.props.groups.forEach(((o,n)=>{if(!o.include)return;let p=0,u=0;o.users.forEach((s=>{if(!s.include)return;const r=(0,h.vW)(s),i=(e.worklogs[r]||{}).allTotal||0,o=(e.worklogs[r]||{}).total||0;a[r]=(a[r]||0)+i,t[r]=(t[r]||0)+i,u+=i,p+=o})),s+=p,i+=u,d[n]=p,c[n]=u,l[n]=(l[n]||0)+u,r[n]=(r[n]||0)+u})),o+=i,e.grandTotal=s,e.grandTotalAll=i,e.groupTotal=d,e.groupTotalAll=c})),s+=o,e.grandTotal=o,e.groupTotal=l,e.estimate=n,i+=n})),e.grandTotal=s,e.groupTotal=r,e.estimate=i,e})),this.setState({reportData:e,groups:t})},this.toggleSubTasks=e=>{this.setState({showSubtask:e}),this.updateWorklogDetails()},this.toggleNonSprintHrs=e=>{this.setState({excludeNonSprintHrs:e}),this.updateWorklogDetails()},this.toggleShowIncomplete=e=>{this.setState({showIncomplete:e}),this.updateWorklogDetails()},this.toggleGroupSelection=(e,t)=>{e.include=t,this.updateWorklogDetails()},this.toggleUserSelection=(e,t)=>{e.include=t,this.updateWorklogDetails()},(0,i.f3)(this,"UtilsService"),this.convertSecs=this.$utils.convertSecs,this.state={showSubtask:!1,showIncomplete:!1,excludeNonSprintHrs:!1}}componentDidMount(){this.updateGroups(this.props.groups)}UNSAFE_componentWillReceiveProps(e){e.groups!==this.state.groups&&this.updateGroups(e.groups)}updateGroups(e){e.forEach((e=>{e.include=!0,e.users.forEach((e=>e.include=!0))})),this.props.ticketDetails&&this.processTicketData(e)}processTicketData(e){const t=e.union((e=>e.users.map((e=>(0,h.vW)(e))))).distinct(),s=this.props.sprintDetails.map((e=>{const s=e.sprint,r={},i={sprintName:s.name,startDate:s.startDate,endDate:s.endDate,completeDate:s.completeDate,issuetypes:[],worklogs:r,completedSP:0,incompleteSP:0},a={startDate:s.startDate,endDate:s.completeDate,sprintStatus:s.state,issueDetails:{}};let o=a.issueDetails,l=[];e.contents.completedIssues.forEach((e=>{l.push(e.key),o[e.key]={done:e.done,epic:e.epicField,storyPoint:e.currentSP,oldStoryPoint:e.oldSP,completed:!0}}));const n=this.getIssueDetails(l,a,!0);l=[],o={},a.issueDetails=o,e.contents.issuesNotCompletedInCurrentSprint.forEach((e=>{l.push(e.key),o[e.key]={done:e.done,epic:e.epicField,storyPoint:e.currentSP,oldStoryPoint:e.oldSP,completed:!1}})),n.addRange(this.getIssueDetails(l,a,!0));let d=0,c=0;return i.issuetypes=n.groupBy((e=>e.issuetype.name)).map((e=>{let s=0,i=0;const a={};return e.values.forEach((e=>{e.completed?(s+=e.storyPoint||0,d+=e.storyPoint||0):(i+=e.storyPoint||0,c+=e.storyPoint||0),t.forEach((t=>{const s=(e.worklogs[t]||{}).allTotal||0;a[t]=(a[t]||0)+s,r[t]=(r[t]||0)+s}))})),{issuetype:e.values[0].issuetype,issues:e.values,completedSP:s,incompleteSP:i,worklogs:a}})),i.completedSP=d,i.incompleteSP=c,i}));this.updateWorklogDetails(s,e)}setUserWiseWorklog(e){const t={};return(e.worklog||{}).worklogs.forEach((e=>{const s=(0,h.vW)(e.author);let r=t[s];r||(r={total:0,allTotal:0},t[s]=r),r.total+=e.timeSpentSeconds,r.allTotal=r.total})),t}getIssueDetails(e,t,s){return this.props.ticketDetails.filter((t=>e.includes(t.key))).map((e=>{const r=e.fields||{},i={ticketNo:e.key,summary:r.summary,status:r.status,issuetype:r.issuetype,estimate:r.timeoriginalestimate,worklogs:this.setUserWiseWorklog(r)};if(s){if(i.subtasks=this.getIssueDetails(this.props.ticketDetails.filter((t=>((t.fields||{}).parent||{}).key===e.key)).map((e=>e.key)),t),i.subtasks){const e=i.worklogs;let t=0;i.subtasks.forEach((s=>{t+=s.estimate||0;const r=s.worklogs;Object.keys(r).forEach((t=>{const s=r[t].allTotal;let i=e[t];i||(i={},e[t]=i),i.allTotal=(i.allTotal||0)+s}))})),i.estimateAll=t+(i.estimate||0)}const s=t.issueDetails[e.key];i.sprintStatus=t.sprintStatus,i.done=s.done,i.epic=s.epic,i.storyPoint=s.storyPoint,i.oldStoryPoint=s.oldStoryPoint,i.completed=s.completed}else i.parent=r.parent;return i}))}render(){const{props:{groups:e},state:{showSubtask:t,showIncomplete:s,excludeNonSprintHrs:i,reportData:a}}=this;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"worklog-options",children:[(0,n.jsx)(l.XZ,{checked:t,onChange:this.toggleSubTasks,label:"Show subtask breakup"}),(0,n.jsx)(l.XZ,{checked:s,label:"Include in-complete stories",onChange:this.toggleShowIncomplete}),(0,n.jsx)(l.XZ,{checked:i,onChange:this.toggleNonSprintHrs,label:"Exclude hours logged out of sprint",disabled:!0}),(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Note: "})," Hours displayed below may not be accurate. Still work in progress."]}),(0,n.jsxs)(p.TT,{dataset:a,className:"dataTable exportable worklog-table",exportSheetName:"Worklog details",children:[(0,n.jsxs)(p.Et,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{rowSpan:"3",colSpan:"2",style:{minWidth:"120px"},children:"Ticket number"}),(0,n.jsx)("th",{rowSpan:"3",style:{minWidth:"500px"},children:"Summary"}),(0,n.jsx)("th",{rowSpan:"3",style:{minWidth:"100px"},children:"Sprint status"}),(0,n.jsx)("th",{rowSpan:"3",style:{minWidth:"60px"},children:"Story points"}),(0,n.jsx)("th",{rowSpan:"3",style:{minWidth:"60px"},children:"Estimate"}),e.map(((e,t)=>(0,n.jsx)("th",{colSpan:e.users.length+1,className:"data-center",children:(0,n.jsx)(l.XZ,{checked:e.include,title:"Select to include the worklog of this group in grand total",onChange:t=>this.toggleGroupSelection(e,t),label:e.name})},t))),(0,n.jsx)("th",{rowSpan:"3",style:{minWidth:"70px"},children:"Grand total"})]}),(0,n.jsx)("tr",{exporthidden:!0,children:e.map(((e,t)=>(0,n.jsxs)(r.Fragment,{children:[e.users.map(((e,t)=>(0,n.jsx)("th",{className:"data-center",style:{width:"100px"},children:(0,n.jsx)(l.XZ,{checked:e.include,onChange:t=>this.toggleUserSelection(e,t),title:"Select to include the worklog of this user in group total"})},t))),(0,n.jsx)("th",{rowSpan:"2",style:{width:"70px"},children:"Group total"})]},t)))}),(0,n.jsx)("tr",{children:e.map(((e,t)=>(0,n.jsx)(r.Fragment,{children:e.users.map(((e,t)=>(0,n.jsx)("th",{className:"data-center",style:{width:"100px"},children:e.displayName},t)))},t)))})]}),(0,n.jsx)(p.XP,{children:(r,i)=>(0,n.jsx)(b,{groups:e,sprint:r,showIncomplete:s,showSubtask:t,convertSecs:this.convertSecs},r._uniqueId)})]})]})}}const w=P;class b extends r.PureComponent{render(){const{groups:e,sprint:t,showIncomplete:s,showSubtask:i,convertSecs:a}=this.props;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{colSpan:"4",children:(0,n.jsx)("strong",{children:t.sprintName})}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:t.completedSP+(s?t.incompleteSP:0)})}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:a(t.estimate)})}),e.map(((e,s)=>(0,n.jsxs)(r.Fragment,{children:[e.users.map(((e,s)=>(0,n.jsx)("td",{className:"data-center",exportType:"number",children:a(t.worklogs[(0,h.vW)(e)])},s))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:a(t.groupTotal[s])})})]},s))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:a(t.grandTotal)})})]}),(0,n.jsx)(k,{issueTypes:t.issuetypes,groups:e,showIncomplete:s,showSubtask:i,convertSecs:a})]})}}class k extends r.PureComponent{render(){const{convertSecs:e,issueTypes:t,groups:s,showIncomplete:i,showSubtask:a}=this.props;return t.map(((t,o)=>(0,n.jsxs)(r.Fragment,{children:[(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{colSpan:"4",children:[(0,n.jsx)("img",{src:t.issuetype.iconUrl,alt:""})," ",t.issuetype.name]}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:t.completedSP+(i?t.incompleteSP:0)}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:e(t.estimate)})}),s.map(((s,i)=>(0,n.jsxs)(r.Fragment,{children:[s.users.map(((s,r)=>(0,n.jsx)("td",{className:"data-center",exportType:"number",children:e(t.worklogs[(0,h.vW)(s)])},r))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:e(t.groupTotal[i])})})]},i))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:e(t.grandTotal)})})]}),(0,n.jsx)(N,{groups:s,issues:t.issues,showIncomplete:i,showSubtask:a,convertSecs:e})]},o)))}}class N extends r.PureComponent{render(){const{convertSecs:e,groups:t,issues:s,showIncomplete:i,showSubtask:a}=this.props;return s.map(((s,o)=>i||s.completed?(0,n.jsxs)(r.Fragment,{children:[(0,n.jsxs)("tr",{className:"auto-wrap",children:[(0,n.jsx)("td",{colSpan:"2",children:s.ticketNo}),(0,n.jsx)("td",{children:s.summary}),(0,n.jsx)("td",{children:s.completed?"Completed":"In complete"}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:s.storyPoint}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:e(a?s.estimate:s.estimateAll)}),t.map(((t,i)=>(0,n.jsxs)(r.Fragment,{children:[t.users.map(((r,i)=>(0,n.jsx)("td",{className:"data-center",exportType:"number",children:t.include&&r.include?e(a?(s.worklogs[(0,h.vW)(r)]||0).total:(s.worklogs[(0,h.vW)(r)]||0).allTotal):null},i))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:e(a?(s.groupTotal||{})[i]:(s.groupTotalAll||{})[i])})})]},i))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:e(a?s.grandTotal:s.grandTotalAll)})})]}),a&&(0,n.jsx)(v,{issue:s,groups:t,convertSecs:e})]},o):null))}}class v extends r.PureComponent{render(){const{issue:e,groups:t,convertSecs:s}=this.props;return e.subtasks.map(((e,i)=>(0,n.jsxs)("tr",{className:"auto-wrap",children:[(0,n.jsx)("td",{style:{width:"25px"},children:"-"}),(0,n.jsx)("td",{children:e.ticketNo}),(0,n.jsx)("td",{children:e.summary}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:e.storyPoint}),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:s(e.estimate)}),t.map(((t,i)=>(0,n.jsxs)(r.Fragment,{children:[t.users.map(((r,i)=>(0,n.jsx)("td",{className:"data-center",children:t.include&&r.include?s((e.worklogs[(0,h.vW)(r)]||0).total):null},i))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:s((e.groupTotal||{})[i])})})]},i))),(0,n.jsx)("td",{exportType:"number",className:"data-center",children:(0,n.jsx)("strong",{children:s(e.grandTotal)})})]},i)))}}var T=s(4902),C=s(7922);const I=[{backgroundColor:"#f1c40f4a",borderColor:"#f1c40f",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"#27ae614a",borderColor:"#27ae61",pointBackgroundColor:"rgba(77,83,96,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"#e84c3d4a",borderColor:"#e84c3d",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"#8f44ad4a",borderColor:"#8f44ad",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"#9a8d2f4a",borderColor:"#9a8d2f",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],D={animation:!1,responsive:!0};class W extends r.PureComponent{constructor(e){super(e),this.state=this.generateChartData()}UNSAFE_componentWillReceiveProps(e){e.sprintDetails&&this.generateChartData()}generateChartData(){const e=[],t=[],s=[],r=[],i=[],a=[],o=[];this.props.sprintDetails.orderBy((e=>e.sprint.id)).forEach((l=>{e.push(l.sprint.name),t.push(l.estimateIssuesSP),s.push(l.completedSP),r.push(l.incompletedSP||0),i.push(l.totalIssuesSP||0),a.push(l.addedSP||0),o.push(l.removedSP||0)}));const l=[{data:t,label:"Estimated",...I[0]},{data:s,label:"Completed",...I[1]},{data:r,label:"Not completed",...I[2]},{data:i,label:"Total",...I[3]},{data:a,label:"Added to sprint",...I[4]},{data:o,label:"Removed from sprint",...I[5]}];return{chartData:{labels:e,datasets:l}}}render(){const{chartData:e}=this.state;return(0,n.jsx)("div",{children:(0,n.jsx)(C.Chart,{type:"line",data:e,options:D})})}}const O=W;var E=s(9311),B=s(7154),A=s(6444);const V=(0,n.jsxs)("div",{className:"padding-15",children:[(0,n.jsx)("strong",{children:"Experimental:"})," This report is experimental and development / bug fixes are in progress. If you encounter any issues or have any suggestions for improvement please send us a feedback by clicking on ",(0,n.jsx)("i",{className:"fa fa-phone"})," icon on top right corner of the page.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"How to use:"})," To generate the sprint report follow the below steps",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Rapid view: This is the name of the Agile board which contains the sprint."}),(0,n.jsx)("li",{children:"Select one or more rapid view from the list. You can alternatively start typing the id or name of the board which will filter the list"}),(0,n.jsx)("li",{children:"If you want to repeatedly view the sprint of selective rapid views, then add it in Settings -> General -> Default values tab."}),(0,n.jsx)("li",{children:"Once all the required rapid view is selected, sprint field will be populated with the list of available sprints."}),(0,n.jsx)("li",{children:"You can either click on the drop icon and select the sprint or start typing the sprint name to filter the list"}),(0,n.jsx)("li",{children:"You can add one or more sprints in the sprint field and once done click Generate report button to generate the report"}),(0,n.jsx)("li",{children:"Select worklog option to see the worklog added by the individual users on each ticket grouped based on sprint, issue type and tickets"}),(0,n.jsx)("li",{children:"Add atleast 2 sprint to see the velocity chart. Having minimum of 5 sprint would give better insights on the chart."})]})]});class U extends E.ZP{constructor(e){super(e,"Sprint report","fa fa-list-alt"),this.refreshData=()=>{const{selectedSprints:e}=this.state;if(e&&0===e.length)return;this.setState({isLoading:!0});const t=e.map((e=>e.report?Promise.resolve(e.report):this.$jira.getRapidSprintDetails(e.rapidId,e.id).then((t=>e.report=t))));Promise.all(t).then((e=>{if(this.$analytics.trackEvent("Sprint report viewed",A.Jk.UserActions),this.state.includeWorklogs){const t=e.union((e=>e.contents.completedIssues)).distinct((e=>e.key));return t.addDistinctRange(e.union((e=>e.contents.puntedIssues)).distinct((e=>e.key))),t.addDistinctRange(e.union((e=>e.contents.issuesNotCompletedInCurrentSprint)).distinct((e=>e.key))),this.$jira.searchTickets(`key in (${t.join()}) or parent in (${t.join()})`,["summary","worklog","issuetype","parent","timeoriginalestimate"]).then((t=>({sprintDetails:e,ticketDetails:t})))}return{sprintDetails:e}})).then((e=>{const t=e.sprintDetails,s=e=>e.count((e=>((e.currentEstimateStatistic||{}).statFieldValue||{}).value));t.forEach((e=>{let r=0,i=0,a=0;const o=e.contents.issueKeysAddedDuringSprint;Object.keys(o).forEach((e=>{!0===o[e]?r+=1:i+=1}));let l=0,n=0;const d=e=>{e.addedLater=!0===o[e.key],e.removedLater=!1===o[e.key],e.currentSP=((e.currentEstimateStatistic||{}).statFieldValue||{}).value||0,e.oldSP=((e.estimateStatistic||{}).statFieldValue||{}).value||0,e.addedLater&&(l+=e.currentSP,n+=e.oldSP),e.oldSP===e.currentSP&&(delete e.oldSP,e.currentSP||delete e.currentSP),e.currentSP&&e.addedLater&&(a+=1)};e.contents.completedIssues.forEach(d),e.contents.puntedIssues.forEach(d),e.contents.issuesNotCompletedInCurrentSprint.forEach(d),e.addedSP=l||"",e.addedSPOld=n&&n!==l?n:null;const c=e.contents.completedIssuesInitialEstimateSum.value,p=e.contents.completedIssuesEstimateSum.value;e.completedSP=p||"",e.completedSPOld=c&&c!==p?c:null,e.completedWithSP=s(e.contents.completedIssues),e.CompletedTotal=e.contents.completedIssues.length;const h=e.contents.issuesNotCompletedInitialEstimateSum.value,u=e.contents.issuesNotCompletedEstimateSum.value||"";e.incompletedSP=u,e.incompletedSPOld=h&&h!==u?h:null,e.incompletedWithSP=s(e.contents.issuesNotCompletedInCurrentSprint),e.incompletedTotal=e.contents.issuesNotCompletedInCurrentSprint.length;const m=e.contents.puntedIssuesInitialEstimateSum.value;if(i=e.contents.puntedIssuesEstimateSum.value||"",e.removedSP=i,e.removedSPOld=m&&m!==i?m:null,e.removedWithSP=s(e.contents.puntedIssues),e.removedTotal=e.contents.puntedIssues.length,e.addedIssues=r,e.addedWithSP=a,e.removedIssues=i,e.totalIssuesSPOld=(e.completedSPOld||0)+(e.incompletedSPOld||0),e.totalIssuesSP=(e.completedSP||0)+(e.incompletedSP||0),e.totalIssuesCount=e.CompletedTotal+e.incompletedTotal,e.totalIssuesWithSP=e.completedWithSP+e.incompletedWithSP,e.totalIssuesSPOld===e.totalIssuesSP&&(delete e.totalIssuesSPOld,e.totalIssuesSP||delete e.totalIssuesSP),e.estimateIssuesSPOld=(e.completedSPOld||0)+(e.incompletedSPOld||0)+(e.removedSP||0)-(e.addedSP||0),e.estimateIssuesSPOld<0&&(e.estimateIssuesSPOld=0),e.estimateIssuesSP=(e.completedSP||0)+(e.incompletedSP||0)+(e.removedSP||0)-(e.addedSP||0),e.estimateIssuesCount=e.CompletedTotal+e.incompletedTotal+e.removedTotal-e.addedIssues,e.estimateIssuesWithSP=e.completedWithSP+e.incompletedWithSP+e.removedWithSP-e.addedWithSP,e.estimateIssuesSPOld===e.estimateIssuesSP&&(delete e.estimateIssuesSPOld,e.estimateIssuesSP||delete e.estimateIssuesSP),e.expanded=1===t.length,e.lastUserToClose){const t=document.createElement("div");t.innerHTML=e.lastUserToClose;const s=t.childNodes[0];var x;if(s)s.setAttribute("target","_blank"),s.setAttribute("href",this.$userutils.mapJiraUrl(null===(x=s.attributes.href)||void 0===x?void 0:x.value)),e.lastUserToClose=t.innerHTML}})),this.setState({isLoading:!1,disableRefresh:!1,worklogDetails:e.ticketDetails,selectedTab:1,sprintDetails:t})}))},this.tabChanged=e=>{this.setState({selectedTab:e.index})},this.rapidViewSelected=e=>this.setState({selectedRapidViews:e}),this.sprintSelected=e=>this.setState({selectedSprints:e}),this.incWorklogChanged=e=>this.setState({includeWorklogs:e}),this.showGroupsDialog=()=>this.setState({showGroupsPopup:!0}),this.updateGroup=e=>this.setState({groups:e||this.state.groups,showGroupsPopup:!1}),this.formatDateTime=e=>this.$userutils.formatDateTime(e),this.isGadget=!1,this.exportFormat=B.T.XLSX,this.hideCSVExport=!0,(0,i.f3)(this,"JiraService","UserUtilsService","SessionService","UserGroupService","AnalyticsService"),this.state={disableRefresh:!0,selectedRapidViews:this.$session.CurrentUser.rapidViews,selectedSprints:null}}componentDidMount(){super.componentDidMount(),this.$usergroup.getUserGroups().then((e=>this.setState({groups:e})))}render(){const{state:{selectedTab:e,selectedRapidViews:t,sprintDetails:s,selectedSprints:r,includeWorklogs:i,showGroupsPopup:d,groups:p,worklogDetails:h}}=this,u=s?s.length:0,x=s&&u>0;return super.renderBase((0,n.jsxs)("div",{className:"sprint-report",children:[(0,n.jsxs)(a.TabView,{renderActiveOnly:!1,activeIndex:e,onTabChange:this.tabChanged,children:[(0,n.jsxs)(a.TabPanel,{header:"Settings",children:[V,(0,n.jsxs)("div",{className:x?"fs-hide pad-22":"pad-22",children:[(0,n.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,n.jsx)("div",{className:"ui-g-12 ui-md-2 ui-lg-2 ui-xl-1",children:(0,n.jsx)("strong",{children:"Rapid view"})}),(0,n.jsx)("div",{className:"ui-g-12 ui-md-5 ui-lg-4 ui-xl-3",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)(o.Z,{value:t,onChange:this.rapidViewSelected,placeholder:"add one or more rapid view to fetch sprints from"})})})]}),(0,n.jsxs)("div",{className:"ui-g ui-fluid",children:[(0,n.jsx)("div",{className:"ui-g-12 ui-md-2 ui-lg-2 ui-xl-1",children:(0,n.jsx)("strong",{children:"Sprints"})}),(0,n.jsx)("div",{className:"ui-g-12 ui-md-5 ui-lg-4 ui-xl-3",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)(c,{value:r,rapidViews:t,onChange:this.sprintSelected,placeholder:"add one or more sprint to view report"})})})]}),(0,n.jsx)("div",{className:"ui-g ui-fluid",children:(0,n.jsx)("div",{className:"ui-g-12 ui-md-5 ui-lg-4 ui-xl-3",children:(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)(l.XZ,{checked:i,onChange:this.incWorklogChanged,label:"Include worklog details in report for "}),(0,n.jsx)("span",{className:"link",onClick:this.showGroupsDialog,disabled:i,children:" selected users"})]})})}),(0,n.jsx)("div",{className:"ui-g ui-fluid",children:(0,n.jsx)("div",{className:"ui-g-12 ui-md-3 ui-lg-3 ui-xl-2",children:(0,n.jsx)(l.zx,{className:"ui-button-primary",disabled:!r||0===r.length,icon:"fa fa-play-circle",label:"Generate report",onClick:this.refreshData})})})]})]}),(0,n.jsx)(a.TabPanel,{header:"Summary view 1",disabled:!x,children:s&&(0,n.jsx)(m,{sprintDetails:s,formatDateTime:this.formatDateTime})}),(0,n.jsx)(a.TabPanel,{header:"Summary view 2",disabled:!x,children:s&&(0,n.jsx)(S,{sprintDetails:s,formatDateTime:this.formatDateTime})}),(0,n.jsx)(a.TabPanel,{header:"Velocity chart",disabled:!x||u<2,children:s&&(0,n.jsx)(O,{sprintDetails:s})}),(0,n.jsx)(a.TabPanel,{header:"Worklog details",disabled:!x||!i,children:i&&(0,n.jsx)(w,{groups:p,ticketDetails:h,sprintDetails:s})})]}),d&&(0,n.jsx)(T.Z,{groups:p,onHide:this.updateGroup})]}))}}const F=U}}]);