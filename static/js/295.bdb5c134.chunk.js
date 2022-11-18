"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{4814:function(n,e,t){t.d(e,{Z:function(){return s}});t(2791);var r,i=t(168),o=t(6444).ZP.section(r||(r=(0,i.Z)(["\n  padding: 15px;\n  width: 550px;\n  border: 1px solid black;\n  border-radius: 4px;\n  box-shadow: 1px 1px 25px 1px rgba(0, 0, 0, 0.55);\n"]))),a=t(3329),s=function(n){var e=n.title,t=n.children;return(0,a.jsxs)(o,{children:[(0,a.jsx)("h2",{children:e}),t]})}},6295:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,s,c,u,d,l=t(2791),p=t(9434),x=t(3634),b=t(5705),f=t(7103),m=t(5984),h=t(5562),g=t.n(h),j=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},Z=function(n){return n.filter.filter},w=function(n){var e=j(n),t=Z(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},k=t(168),z=t(6444),C=z.ZP.label(r||(r=(0,k.Z)(["\nfont-size: 16px;\nfont-weight: 500;\n"]))),P=(0,z.ZP)(b.gN)(i||(i=(0,k.Z)(["\n  display: inline-block;\n  font: inherit;\n  font-size: 18px;\n  border-radius: 5px;\n  outline: none;\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-bottom: 10px;\n\n  :focus-within {\n    border: 2px solid #40c4ff;\n    outline: none;\n  }\n"]))),A=z.ZP.button(o||(o=(0,k.Z)(["\n  display: inline-block;\n  width: 150px;\n  height: 48px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  font-size: 18px;\n  font-weight: 500;\n  opacity: 0.7;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover,\n  :focus {\n    opacity: 1;\n    background-color: #00e676;\n    font-weight: 700;\n  }\n"]))),S=t(3329),_=f.Ry({name:f.Z_().required(),number:f.Z_().required()}),q={name:"",number:""},F=function(){var n=(0,p.I0)(),e=(0,p.v9)(j);return(0,S.jsx)(b.J9,{initialValues:q,onSubmit:function(t,r){var i=t.name,o=t.number,a=r.resetForm,s=e.some((function(n){return n.name.toLowerCase()===i.toLowerCase()}));if(s)return g().Report.warning("".concat(i," is already in contacts")),a();var c={id:(0,m.x0)(4),name:i,number:o};n((0,x.uK)(c)),a()},validationSchema:_,children:(0,S.jsxs)(b.l0,{children:[(0,S.jsxs)(C,{children:["Name",(0,S.jsx)("br",{}),(0,S.jsx)(P,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,S.jsx)("br",{}),(0,S.jsxs)(C,{children:["Number",(0,S.jsx)("br",{}),(0,S.jsx)(P,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,S.jsx)("br",{}),(0,S.jsx)(A,{type:"submit",children:"Add contact"})]})})},L=t(4808),I=z.ZP.label(a||(a=(0,k.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),N=z.ZP.input(s||(s=(0,k.Z)(["\n  display: inline-block;\n  font: inherit;\n  font-size: 24px;\n  border-radius: 5px;\n  outline: none;\n  padding-left: 5px;\n  padding-right: 5px;\n\n  :focus-within {\n    border: 2px solid #40c4ff;\n    outline: none;\n  }\n"]))),R=function(){var n=(0,p.I0)(),e=(0,p.v9)(Z);return(0,S.jsxs)(I,{children:["Find contacts by name",(0,S.jsx)("br",{}),(0,S.jsx)(N,{type:"text",value:e,onChange:function(e){n((0,L.T)(e.target.value))}})]})},E=t(885),J=z.ZP.li(c||(c=(0,k.Z)(["\n   margin-bottom: 10px;\n   display: flex;\n   justify-content: space-between;\n "]))),K=z.ZP.button(u||(u=(0,k.Z)(["\n   font-size: 16px;\n   font-weight: 500;\n   border-radius: 5px;\n   margin-left: 10px;\n   opacity: 0.7;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n   :hover,\n   :focus {\n     background-color: red;\n     font-weight: 700;\n     opacity: 1;\n   }\n "]))),T=z.ZP.button(d||(d=(0,k.Z)(["\n   font-size: 16px;\n   font-weight: 500;\n   border-radius: 5px;\n   margin-left: 10px;\n   opacity: 0.7;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n   :hover,\n   :focus {\n     background-color: orange;\n     font-weight: 700;\n     opacity: 1;\n   }\n "]))),B=function(){var n=(0,p.I0)(),e=(0,p.v9)(w),t=(0,l.useState)(!1),r=(0,E.Z)(t,2),i=r[0],o=r[1],a=(0,l.useState)(""),s=(0,E.Z)(a,2),c=s[0],u=s[1],d=(0,l.useState)(""),b=(0,E.Z)(d,2),f=b[0],m=b[1],h=function(n){var e=n.target.name,t=n.target.value;switch(e){case"name":return u(t);case"number":return m(t)}};return(0,S.jsx)("ul",{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,S.jsxs)(J,{children:[i?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("input",{type:"text",name:"name",value:c,onChange:h}),(0,S.jsx)("input",{type:"text",name:"number",value:f,onChange:h})]}):(0,S.jsxs)("p",{children:[r,": ",a]}),(0,S.jsx)(T,{type:"button",onClick:function(){return function(e){var t=e.id,r=e.name,a=e.number;o(!i),u(r),m(a),i&&n((0,x.Tk)({id:t,body:{name:c,number:f}}))}({id:t,name:r,number:a})},children:i?"Save":"Edit"}),(0,S.jsx)(K,{type:"button",onClick:function(){return function(e){n((0,x.GK)(e))}(t)},children:"Delete"})]},t)}))})},D=t(4814),G=function(){var n=(0,p.I0)(),e=(0,p.v9)(v),t=(0,p.v9)(y);return(0,l.useEffect)((function(){n((0,x.yF)())}),[n]),(0,S.jsxs)("div",{children:[(0,S.jsx)(D.Z,{title:"Phonebook",children:(0,S.jsx)(F,{})}),(0,S.jsxs)(D.Z,{title:"Contacts",children:[(0,S.jsx)(R,{}),(0,S.jsx)("br",{}),e&&!t&&(0,S.jsx)("b",{children:"Request in progress..."}),(0,S.jsx)(B,{})]})]})}}}]);
//# sourceMappingURL=295.bdb5c134.chunk.js.map