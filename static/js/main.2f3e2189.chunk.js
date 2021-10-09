(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(15),o=a.n(l),n=(a(22),a(10)),r=(a.p,a(23),a(8)),i=a(0);function d(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/about",children:e.aboutTextUtils})})]}),Object(i.jsx)("div",{className:"d-flex",children:Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked",onClick:e.toggleMode}),Object(i.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked",children:["light"===e.mode?"Dark":"Light"," Mode"]})]})})]})]})})})}function b(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],l=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"myBox",className:"form-label",children:"Example textarea"}),Object(i.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:s,onChange:function(e){console.log("textarea on changed",+s),l(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#0e0b1e":"white",color:"dark"===e.mode?"white":"black"}})]}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary m-1",onClick:function(){console.log("uper click button clicked");var t=s.toUpperCase();l(t),e.showAlert("converted to uppercase","success")},children:"Convert to uppercase"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary m-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),e.showAlert("copied to clipboard","success")},children:"Copy to clipboard"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary m-1",onClick:function(t){var a=s.split(/[ ]+/);l(a.join(" ")),e.showAlert("extra space removed","success")},children:"Remove extra space"})]}),Object(i.jsx)("div",{className:"my-3"}),Object(i.jsx)("h1",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[s.split(" ").filter((function(e){return 0!==e.length})).length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.08*s.split(" ").filter((function(e){return 0!==e.length})).length," minutes to read"]}),Object(i.jsx)("h2",{children:"Preview text"}),Object(i.jsx)("p",{children:s})]})})}function h(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"my-3",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(i.jsx)("strong",{children:"Analyze Your text"})})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count"})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(i.jsx)("strong",{children:"Free to use "})})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(i.jsx)("strong",{children:"Browser Compatible "})})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})}function j(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})}d.defaultProps={title:"Set title here",aboutTextUtils:"set about us"};var u=a(4),m=a(2);Object(u.a)();var x=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(null),o=Object(n.a)(l,2),u=o[0],x=o[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),3e3)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(r.a,{basename:"/",children:[Object(i.jsx)(d,{title:"Text Utils",aboutTextUtils:"About text utils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.background="#0e0b1e",document.body.style.color="white",p("Dark Mode is Enabled","success")):(s("light"),document.body.style.background="white",document.body.style.color="black",p("Light Mode is Enabled","success"))}})," "," ",Object(i.jsx)(j,{alert:u}),Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{mode:a})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{heading:"Enter the text to analyze below",showAlert:p,mode:a})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),l(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.2f3e2189.chunk.js.map