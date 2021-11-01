(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(12),l=c.n(s),r=(c(26),c(4)),i=(c(27),c(1));var o=function(e){var t=e.className,c=e.onChange,a=e.onKeyPress,n=e.name,s=e.id,l=e.type,r=e.style,o=e.placeholder,j=e.value,b=e.disabled,d=e.checked;return Object(i.jsx)("input",{className:t,onChange:c,onKeyPress:a,name:n,id:s,type:l,style:r,placeholder:o,value:j,disabled:b,checked:d})};var j=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),j=l[0],b=l[1],d=Object(a.useState)(!1),u=Object(r.a)(d,2),h=u[0],m=u[1],O=Object(a.useState)(!1),x=Object(r.a)(O,2),f=x[0],p=x[1],v=Object(a.useState)(!1),N=Object(r.a)(v,2),g=N[0],k=N[1],y=Object(a.useState)(!1),w=Object(r.a)(y,2),S=w[0],C=w[1],D=Object(a.useState)(""),I=Object(r.a)(D,2),T=I[0],A=I[1],J=Object(a.useState)(""),L=Object(r.a)(J,2),R=L[0],P=L[1],H=Object(a.useState)(""),E=Object(r.a)(H,2),U=E[0],V=E[1],_=Object(a.useState)(!1),F=Object(r.a)(_,2),B=F[0],M=F[1],z=Object(a.useState)(""),K=Object(r.a)(z,2),X=K[0],q=K[1];function G(e){var t=e.target,c=t.value;switch(t.name){case"companyName":n(c);break;case"jobURL":b(c);break;case"new":h?(m(!1),A(""),M(!1)):(m(!0),A(c),P("Date to Apply"),M(!0));break;case"applied":f?(p(!1),A(""),M(!1)):(p(!0),A(c),P("Applied Date"),M(!0));break;case"phoneCalled":g?(k(!1),A(""),M(!1)):(k(!0),A(c),P("Phone Call Date"),M(!0));break;case"interviewed":S?(C(!1),A(""),M(!1)):(C(!0),A(c),P("Interview Date"),M(!0));break;case"applyDate":case"appliedDate":case"phoneCallDate":case"interviewDate":V(c);break;default:console.log("Unidentified input field found in the insertPage form")}}var Q=function(){fetch("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({companyName:c,jobURL:j,status:T,statusVerbiage:R,statusDate:U,levelOfImp:"",levelOfImpOrderNum:0})}).then((function(e){return e.json()})).then((function(e){q({verbiage:e.message,textColor:"text-success"}),n(""),b(""),A(""),P(""),V(""),m(!1),p(!1),k(!1),C(!1),M(!1)}))};return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===c||""===j||""===T?q({verbiage:"Missing field(s): please make sure all fields are filled out! Thanks!",textColor:"text-danger"}):T&&""===U?q({verbiage:"Missing field: please make sure the Date is filled out! Thanks!",textColor:"text-danger"}):Q()},children:[Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-6 col-form-label text-end",children:"Company Name & Job Role"}),Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)(o,{name:"companyName",type:"text",onChange:G,placeholder:"Enter Name, Role",value:c})})]}),Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsx)("label",{className:"col-6 col-form-label text-end",children:"Job Post URL"}),Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)(o,{name:"jobURL",type:"url",onChange:G,placeholder:"Enter URL",value:j})})]}),Object(i.jsxs)("div",{className:"column mt-4 mb-4 d-flex justify-content-center",children:[Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",name:"new",value:"New",onChange:G,disabled:"New"===T?null:B,checked:!!h}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox1",children:"New"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",name:"applied",value:"Applied",onChange:G,disabled:"Applied"===T?null:B,checked:!!f}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox2",children:"Applied"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",name:"phoneCalled",value:"Phone Call",onChange:G,disabled:"Phone Call"===T?null:B,checked:!!g}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox3",children:"Phone-Called"})]}),Object(i.jsxs)("div",{className:"form-check form-check-inline",children:[Object(i.jsx)(o,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",name:"interviewed",value:"Interview",onChange:G,disabled:"Interview"===T?null:B,checked:!!S}),Object(i.jsx)("label",{className:"form-check-label",for:"inlineCheckbox4",children:"Interviewed"})]})]}),Object(i.jsxs)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:[h?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsxs)("label",{className:"col-sm-5 col-form-label",children:[R,":"]}),Object(i.jsx)("div",{className:"col-sm-5",children:Object(i.jsx)(o,{name:"applyDate",type:"date",onChange:G,placeholder:"Enter Date",value:U})})]}):null,f?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsxs)("label",{className:"col-sm-5 col-form-label",children:[R,":"]}),Object(i.jsx)("div",{className:"col-sm-5",children:Object(i.jsx)(o,{name:"appliedDate",type:"date",onChange:G,placeholder:"Enter Date",value:U})})]}):null,g?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsxs)("label",{className:"col-sm-6 col-form-label",children:[R,":"]}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)(o,{name:"phoneCallDate",type:"date",onChange:G,placeholder:"Enter Date",value:U})})]}):null,S?Object(i.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(i.jsxs)("label",{className:"col-sm-6 col-form-label",children:[R,":"]}),Object(i.jsx)("div",{className:"col-sm-6",children:Object(i.jsx)(o,{name:"interviewDate",type:"date",onChange:G,placeholder:"Enter Date",value:U})})]}):null]}),X?Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("p",{className:X.textColor+" fw-normal fs-6",children:X.verbiage})}):null,Object(i.jsx)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:Object(i.jsx)(o,{type:"submit",value:"Add Job"})})]})})},b=c(16),d=c.n(b),u=c(19),h=c(13),m=c(6),O=c(11);var x=function(e){var t=e.jobAppId,c=e.companyName,n=e.jobURL,s=e.levelOfImportance,l=e.currentStatus,o=e.currentStatusSetDate,j=e.currentStatusVerbiage,b=e.savedNotes,d=Object(a.useState)(""),u=Object(r.a)(d,2),h=u[0],m=u[1],x=Object(a.useState)(""),f=Object(r.a)(x,2),p=f[0],v=f[1],N=Object(a.useState)(0),g=Object(r.a)(N,2),k=g[0],y=g[1],w=Object(a.useState)(!1),S=Object(r.a)(w,2),C=S[0],D=S[1],I=Object(a.useState)(""),T=Object(r.a)(I,2),A=T[0],J=T[1],L=Object(a.useState)(""),R=Object(r.a)(L,2),P=R[0],H=R[1],E=Object(a.useState)(""),U=Object(r.a)(E,2),V=U[0],_=U[1],F=Object(a.useState)(""),B=Object(r.a)(F,2),M=B[0],z=B[1],K=Object(a.useState)(!1),X=Object(r.a)(K,2),q=X[0],G=X[1],Q=function(e){var t=e.target,c=t.name,a=t.value;"High"===a?(v("High"),y(1),m("btn-danger"),D(!0)):"Normal"===a&&(v("Normal"),y(2),m("btn-primary"),D(!0)),"newStatus"===c?J(a):"newStatusSetDate"===c?_(a):"newStatusVerbiage"===c&&H(a)},W=function(){fetch("/updateJobStatus",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:t,status:A,statusVerbiage:P,statusDate:V})}).then((function(e){return e.json()})).then((function(e){}))},Y=Object(a.useState)(!1),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1],te=function(){ee(!1)};return Object(i.jsx)("div",{className:"d-flex justify-content-left",children:Object(i.jsxs)("div",{className:"card border-success mb-3",style:{width:"850px","margin-left":"3rem","margin-right":"3rem"},children:[Object(i.jsxs)("div",{className:"card-body text-success",children:[Object(i.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(i.jsx)("h5",{className:"card-title",children:Object(i.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:c})}),Object(i.jsx)("div",{className:"btn-group",children:Object(i.jsxs)("select",{className:"form-select btn "+(h||("High"===s?"btn-danger":"Normal"===s?"btn-primary":"Inactive"===s?"btn-secondary":"btn-success")),"aria-label":"Default select example",onChange:Q,children:[Object(i.jsx)("option",{selected:!s,children:"Inactive"===s?"Inactive":"Level of Importance"}),Object(i.jsx)("option",{className:"dropdown-item",value:"High",selected:"High"===s,children:"High"}),Object(i.jsx)("option",{className:"dropdown-item",value:"Normal",selected:"Normal"===s,children:"Normal"})]})})]}),Object(i.jsxs)("div",{className:"card-text",children:[Object(i.jsx)("h6",{children:"Notes:"}),b?Object(i.jsxs)("p",{className:"text-black-50 fw-light font-monospace",children:[" ",b.slice(0,140),140===b.slice(0,140).length?Object(i.jsx)("em",{children:"...see Details"}):null," "]}):null,Object(i.jsxs)("p",{children:[l," ",Object(i.jsxs)("span",{className:"text-black-50 fw-light font-monospace",children:["- ",j,": ",o]})]})]})]}),Object(i.jsx)("div",{className:"card-footer bg-transparent border-success m-0 p-1",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"d-flex row justify-content-between",children:[Object(i.jsx)("div",{className:"col-10",children:Object(i.jsxs)("div",{className:"row g-3",children:[Object(i.jsx)("div",{className:"col-sm-3",children:Object(i.jsx)("input",{type:"text",className:"form-control",placeholder:"New Status","aria-label":"New Status",name:"newStatus",value:A,onChange:Q})}),Object(i.jsx)("div",{className:"col-sm-3",children:Object(i.jsxs)("select",{className:"form-select",name:"newStatusVerbiage",value:P,onChange:Q,children:[Object(i.jsx)("option",{selected:!0,children:"..."}),Object(i.jsx)("option",{className:"dropdown-item",value:"Schedule on",children:"Schedule on"}),Object(i.jsx)("option",{className:"dropdown-item",value:"Submit by",children:"Submit by"}),Object(i.jsx)("option",{className:"dropdown-item",value:"applied on",children:"applied on"}),Object(i.jsx)("option",{className:"dropdown-item",value:"Completed on",children:"Completed on"})]})}),Object(i.jsx)("div",{className:"col-sm-3",children:Object(i.jsx)("input",{type:"date",className:"form-control",placeholder:"Date","aria-label":"Date",name:"newStatusSetDate",value:V,onChange:Q})}),Object(i.jsx)("div",{className:"col-sm",children:Object(i.jsx)("button",{className:"btn btn-outline-secondary border-0",type:"submit",value:"Update Status",onClick:function(e){e.preventDefault(),W(),J(""),_(""),H("")},children:"Update Status"})})]})}),C?void fetch("/updateJobImp",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:t,levelOfImp:p,levelOfImpOrderNum:k})}).then((function(e){return e.json()})):null,Object(i.jsxs)("div",{className:"col-2 d-flex flex-row-reverse",children:[Object(i.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),console.log("click!"),ee(!0),b&&z(b)},children:"Details"}),Object(i.jsxs)(O.a,{show:$,size:"xl",onHide:te,scrollable:"true",centered:!0,children:[Object(i.jsx)(O.a.Header,{children:Object(i.jsx)(O.a.Title,{children:c})}),Object(i.jsxs)(O.a.Body,{children:[Object(i.jsx)("p",{}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{for:"noteTakingTextArea",className:"form-label",children:Object(i.jsx)("h3",{children:"Notes"})}),Object(i.jsx)("textarea",{className:"form-control",id:"noteTakingTextArea",rows:"10",value:M,onChange:function(e){var t=e.target.value;z(t),G(!0)}})]}),q?void fetch("/saveNotes",{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:t,savedNotes:M})}).then((function(e){return e.json()})).then((function(e){})):null]}),Object(i.jsx)(O.a.Footer,{children:Object(i.jsx)("button",{onClick:te,children:"Save"})})]})]})]})})})]})})};var f=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("/findAll/status/new").then((function(e){return e.json()})).then((function(e){n(e.foundNewJobs)}))})),Object(i.jsx)("div",{className:"col",children:c.sort((function(e,t){return e.levelOfImpOrderNum-t.levelOfImpOrderNum})).map((function(e){return Object(i.jsx)(x,{companyName:e.companyName,jobURL:e.jobURL,currentStatus:e.status,currentStatusVerbiage:e.statusVerbiage,currentStatusSetDate:e.statusDate,jobAppId:e._id,levelOfImportance:e.levelOfImp,savedNotes:e.savedNotes},e._id)}))})};var p=function(){var e=Object(a.useState)({count:0,data:[]}),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),l=Object(r.a)(s,2),o=l[0],j=l[1],b=Object(a.useState)(0),O=Object(r.a)(b,2),p=O[0],v=O[1],N=Object(a.useState)(0),g=Object(r.a)(N,2),k=g[0],y=g[1],w=Object(a.useState)(0),S=Object(r.a)(w,2),C=S[0],D=S[1];Object(a.useEffect)((function(){I(),fetch("/findAll/status/new").then((function(e){return e.json()})).then((function(e){j(e.foundNewJobs.length)})),fetch("/findAll/status/applied").then((function(e){return e.json()})).then((function(e){v(e.foundAppliedJobs.length)})),fetch("/findAll/status/phoneCalled").then((function(e){return e.json()})).then((function(e){y(e.foundPhoneCalledJobs.length)})),fetch("/findAll/status/interviewed").then((function(e){return e.json()})).then((function(e){D(e.foundInterviewedJobs.length)}))}));var I=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/findAll");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n({count:c.foundAllJobs.length,data:c.foundAllJobs});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row d-flex justify-content-center mb-5 mt-4",children:[Object(i.jsxs)("div",{className:"col-2 text-center",children:["Total Jobs ",Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:c.count?c.count:"0"})]}),Object(i.jsxs)("div",{className:"col-2 text-center",children:[Object(i.jsx)("a",{href:"/track-page/new-jobs",children:"New"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:o||"0"})]}),Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:"col-2 text-center",onClick:function(){window.location.reload()},children:[Object(i.jsx)(h.b,{to:"/track-page/new-jobs",children:"New"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:o||"0"})]})}),Object(i.jsxs)("div",{className:"col-2 text-center",children:["Applied ",Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:p||"0"})]}),Object(i.jsxs)("div",{className:"col-2 text-center",children:["Phone Calls ",Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:k||"0"})]}),Object(i.jsxs)("div",{className:"col-2 text-center",children:["Interviews ",Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:C||"0"})]})]}),Object(i.jsx)("div",{className:"row d-flex justify-content-center",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{path:"/track-page/new-jobs",children:Object(i.jsx)(f,{})}),Object(i.jsx)(m.a,{children:Object(i.jsx)("div",{className:"col",children:c.data.sort((function(e,t){return e.levelOfImpOrderNum-t.levelOfImpOrderNum})).map((function(e){return Object(i.jsx)(x,{companyName:e.companyName,jobURL:e.jobURL,currentStatus:e.status,currentStatusVerbiage:e.statusVerbiage,currentStatusSetDate:e.statusDate,jobAppId:e._id,levelOfImportance:e.levelOfImp,savedNotes:e.savedNotes},e._id)}))})})]})})]})};var v=function(e){var t=e.RouterLinkHome,c=e.RouterLinkEnter,n=e.RouterLinkTrack,s=Object(a.useState)(!1),l=Object(r.a)(s,2),o=l[0],j=l[1],b=function(){j(!1)};return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top",children:Object(i.jsxs)("div",{className:"container-fluid p-0",children:[Object(i.jsx)("span",{className:"navbar-brand p-2 mx-2",children:t}),Object(i.jsx)("button",{className:"navbar-toggler mx-5",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse mx-4 text-light",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("span",{className:"nav-link active text-light mx-2","aria-current":"page",name:"enter-jobs",id:"enter-jobs",children:c})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("span",{className:"nav-link text-light mx-2",name:"enter-jobs",id:"enter-jobs",children:n})})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("button",{className:"btn btn-outline-success mx-4",type:"submit",onClick:function(e){e.preventDefault(),console.log("click!"),j(!0)},children:"Sign On"}),Object(i.jsxs)(O.a,{show:o,size:"xl",onHide:b,scrollable:"true",centered:!0,children:[Object(i.jsx)(O.a.Header,{children:Object(i.jsx)(O.a.Title,{children:"Log in or sign up"})}),Object(i.jsx)(O.a.Body,{children:Object(i.jsx)("div",{className:"card social-block",children:Object(i.jsx)("div",{className:"card-body d-flex flex-row justify-content-center",children:Object(i.jsxs)("a",{href:"/auth/google",className:"btn btn-block btn-social btn-google",style:{"background-color":"#dd4b39"},role:"button",children:[Object(i.jsx)("span",{className:"fa fa-google"})," Sign in with google"]})})})}),Object(i.jsx)(O.a.Footer,{children:Object(i.jsx)("button",{onClick:b,children:"close"})})]})]})]})]})})};var N=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return n(e.message)}))}));var s={margin:"0rem",textDecoration:"none",color:"white"};return Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("header",{className:"row m-5",children:Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{RouterLinkHome:Object(i.jsx)(h.b,{to:"/",style:s,children:"JXT Job Tracker"}),RouterLinkEnter:Object(i.jsx)(h.b,{to:"/enter-page",style:s,children:"Enter"}),RouterLinkTrack:Object(i.jsx)(h.b,{to:"/track-page",style:s,children:"Track"})}),Object(i.jsx)(m.c,{children:Object(i.jsxs)("body",{className:"row d-flex justify-content-center align-items-center mt-5",children:[Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(p,{})}),Object(i.jsx)(m.a,{path:"/enter-page",children:Object(i.jsx)(j,{})}),Object(i.jsx)(m.a,{path:"/track-page",onClick:function(){window.location.reload()},children:Object(i.jsx)(p,{})})]})})]})})}),Object(i.jsx)("footer",{className:"fixed-bottom",children:Object(i.jsx)("p",{className:"cpText text-center mt-5",children:c||"Loading..."})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(N,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.a8d1bbab.chunk.js.map