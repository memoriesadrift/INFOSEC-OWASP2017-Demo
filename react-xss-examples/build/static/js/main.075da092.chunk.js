(this.webpackJsonpinfosec=this.webpackJsonpinfosec||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(8),s=n.n(i);var j=function(){return Object(a.jsx)("header",{children:Object(a.jsx)("h1",{children:"Cross Site Scripting Example"})})};var l=function(){return Object(a.jsx)("div",{class:"footer",children:Object(a.jsx)("p",{children:"by Jakob, Samuel, Michal"})})},h=n(3),d=n(4),b=n(2),o=n(6),u=n(5),O=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={employeeName:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({employeeName:e.target.value})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"React is quite safe by design."}),Object(a.jsxs)("form",{children:[Object(a.jsx)("p",{children:"Dear Employee, please enter your name: "}),Object(a.jsx)("input",{onChange:this.handleChange}),Object(a.jsxs)("p",{children:["Your name: ",this.state.employeeName]}),Object(a.jsx)("hr",{})]})]})}}]),n}(r.a.Component),x=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={linkedIn:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({linkedIn:e.target.value})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"First insecurity. "}),Object(a.jsx)("p",{children:"Dear Employee, please add a link to your LinkedIn Account."}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:this.state.linkedIn,children:"LinkedIn Employee"})]})]})}}]),n}(r.a.Component),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={urlSecure:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({urlSecure:e.target.value})}},{key:"render",value:function(){var e;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{visibility:"hidden"},children:e=encodeURI(this.state.urlSecure).replace(/^(javascript:)/,"")}),Object(a.jsx)("h2",{children:"First insecurity solved by validation. "}),Object(a.jsx)("p",{children:"Dear Employee, please add a link to your LinkedIn Account."}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:e,children:"LinkedIn Employee"}),Object(a.jsx)("hr",{})]})]})}}]),n}(r.a.Component),v=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={innerExample:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({innerExample:e.target.value})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Second insecurity. "}),Object(a.jsx)("p",{children:"Dear Employee, please tell us suggestions for improvements in customer service."}),Object(a.jsxs)("form",{children:[Object(a.jsx)("textarea",{type:"text",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.innerExample}})]})]})}}]),n}(r.a.Component),m=n(9),g=n.n(m)()(window),y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={innerExample:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({innerExample:g.sanitize(e.target.value)})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Second insecurity solved with sanitation."}),Object(a.jsx)("p",{children:"Dear Employee, please tell us suggestions for improvements in customer service."}),Object(a.jsxs)("form",{children:[Object(a.jsx)("textarea",{type:"text",onChange:this.handleChange}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:this.state.innerExample}})]})]})}}]),n}(r.a.Component);var f=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(j,{}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{}),Object(a.jsx)(p,{}),Object(a.jsx)(v,{}),Object(a.jsx)(y,{}),Object(a.jsx)(l,{})]})};s.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.075da092.chunk.js.map