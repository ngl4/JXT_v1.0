(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),l=t(4),s=t.n(l),i=(t(9),t(2)),o=(t(10),t(0));var r=function(e){var c=e.onChange,t=e.onKeyPress,a=e.name,n=e.id,l=e.type,s=e.style,i=e.placeholder,r=e.value,b=e.disabled;return Object(o.jsx)("input",{onChange:c,onKeyPress:t,name:a,id:n,type:l,style:s,placeholder:i,value:r,disabled:b})};var b=function(){var e=Object(a.useState)(""),c=Object(i.a)(e,2),t=c[0],n=c[1],l=Object(a.useState)(""),s=Object(i.a)(l,2),b=s[0],j=s[1],d=Object(a.useState)(!1),m=Object(i.a)(d,2),h=m[0],u=m[1],O=Object(a.useState)(""),x=Object(i.a)(O,2),f=x[0],p=x[1],v=Object(a.useState)(!1),N=Object(i.a)(v,2),k=N[0],y=N[1],C=Object(a.useState)(""),g=Object(i.a)(C,2),w=g[0],D=g[1],S=Object(a.useState)(!1),P=Object(i.a)(S,2),E=P[0],J=P[1],L=Object(a.useState)(""),T=Object(i.a)(L,2),A=T[0],U=T[1],F=Object(a.useState)(!1),I=Object(i.a)(F,2),R=I[0],B=I[1],K=Object(a.useState)(""),M=Object(i.a)(K,2),W=M[0],X=M[1],q=Object(a.useState)(""),z=Object(i.a)(q,2),G=z[0],H=z[1],Q=Object(a.useState)(!1),V=Object(i.a)(Q,2),Y=V[0],Z=V[1];function $(e){var c=e.target,t=c.value;switch(c.name){case"companyName":n(t);break;case"jobURL":j(t);break;case"new":h?(u(!1),Z(!1)):(u(!0),H(t),Z(!0));break;case"applied":k?(y(!1),Z(!1)):(y(!0),H(t),Z(!0));break;case"phoneCalled":E?(J(!1),Z(!1)):(J(!0),H(t),Z(!0));break;case"interviewed":R?(B(!1),Z(!1)):(B(!0),H(t),Z(!0));break;case"applyDate":p(t);break;case"appliedDate":D(t);break;case"phoneCallDate":U(t);break;case"interviewDate":X(t);break;default:console.log("Unidentified input field found in the insertPage form")}}return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(e){return console.log(e.message)}))},children:[Object(o.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(o.jsx)("label",{className:"col-sm-2 col-form-label",children:"Company Name"}),Object(o.jsx)("div",{className:"col-sm-2",children:Object(o.jsx)(r,{name:"companyName",type:"text",onChange:$,placeholder:"Enter Company Name",value:t})})]}),Object(o.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(o.jsx)("label",{className:"col-sm-2 col-form-label",children:"Job Post URL"}),Object(o.jsx)("div",{className:"col-sm-2",children:Object(o.jsx)(r,{name:"jobURL",type:"url",onChange:$,placeholder:"Enter URL",value:b})})]}),Object(o.jsxs)("div",{className:"column mt-4 mb-4 d-flex justify-content-center",children:[Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)(r,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",name:"new",value:"new",onChange:$,disabled:"new"===G?null:Y}),Object(o.jsx)("label",{className:"form-check-label",for:"inlineCheckbox1",children:"New"})]}),Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)(r,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",name:"applied",value:"applied",onChange:$,disabled:"applied"===G?null:Y}),Object(o.jsx)("label",{className:"form-check-label",for:"inlineCheckbox2",children:"Applied"})]}),Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)(r,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",name:"phoneCalled",value:"phoneCalled",onChange:$,disabled:"phoneCalled"===G?null:Y}),Object(o.jsx)("label",{className:"form-check-label",for:"inlineCheckbox3",children:"Phone-Called"})]}),Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)(r,{className:"form-check-input",type:"checkbox",id:"inlineCheckbox4",name:"interviewed",value:"interviewed",onChange:$,disabled:"interviewed"===G?null:Y}),Object(o.jsx)("label",{className:"form-check-label",for:"inlineCheckbox4",children:"Interviewed"})]})]}),Object(o.jsxs)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:[h?Object(o.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(o.jsx)("label",{className:"col-sm-5 col-form-label",children:"Date to Apply:"}),Object(o.jsx)("div",{className:"col-sm-5",children:Object(o.jsx)(r,{name:"applyDate",type:"date",onChange:$,placeholder:"Enter Date",value:f})})]}):null,k?Object(o.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(o.jsx)("label",{className:"col-sm-5 col-form-label",children:"Applied Date:"}),Object(o.jsx)("div",{className:"col-sm-5",children:Object(o.jsx)(r,{name:"appliedDate",type:"date",onChange:$,placeholder:"Enter Date",value:w})})]}):null,E?Object(o.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(o.jsx)("label",{className:"col-sm-6 col-form-label",children:"Phone Call(ed) Date:"}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)(r,{name:"phoneCallDate",type:"date",onChange:$,placeholder:"Enter Date",value:A})})]}):null,R?Object(o.jsxs)("div",{className:"row mb-3 d-flex justify-content-center",children:[Object(o.jsx)("label",{className:"col-sm-6 col-form-label",children:"Interview(ed) Date:"}),Object(o.jsx)("div",{className:"col-sm-6",children:Object(o.jsx)(r,{name:"interviewDate",type:"date",onChange:$,placeholder:"Enter Date",value:W})})]}):null]}),Object(o.jsx)("div",{className:"d-flex justify-content-center mt-3 mb-5",children:Object(o.jsx)(r,{type:"submit",value:"Add Job"})})]})})};var j=function(){var e=n.a.useState(null),c=Object(i.a)(e,2),t=c[0],a=c[1];return n.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return a(e.message)}))})),Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("header",{className:"row m-5",children:Object(o.jsx)("h1",{className:"text-center",children:"Welcome to JXT Job Track App"})}),Object(o.jsx)("body",{className:"row d-flex justify-content-center align-items-center",children:Object(o.jsx)(b,{})}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{className:"cpText text-center mt-5",children:t||"Loading..."})})]})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,l=c.getLCP,s=c.getTTFB;t(e),a(e),n(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.92e6681f.chunk.js.map