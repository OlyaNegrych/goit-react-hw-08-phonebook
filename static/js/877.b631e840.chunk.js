"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{5877:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(9434),a=r(9273),u=r(3329),s=function(){var e=(0,n.I0)();return(0,u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget;e((0,a.Ib)({email:r.elements.email.value,password:r.elements.password.value})),r.reset()},children:[(0,u.jsxs)("label",{children:["Email",(0,u.jsx)("input",{type:"email",name:"email"})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("label",{children:["Password",(0,u.jsx)("input",{type:"password",name:"password"})]}),(0,u.jsx)("br",{}),(0,u.jsx)("button",{type:"submit",children:"Log In"})]})};function c(){return(0,u.jsx)("div",{children:(0,u.jsx)(s,{})})}},9273:function(e,t,r){r.d(t,{Ib:function(){return p},z2:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),s=r(1044),c=r(6382);s.ZP.defaults.baseURL="https://connections-api.herokuapp.com";var o=function(e){s.ZP.defaults.headers.common.Authorization="Bearer ".concat(e)},i=(0,c.hg)("auth/register",function(){var e=(0,n.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.post("/users/signup",t);case 3:return n=e.sent,o(n.data.token),e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),p=(0,c.hg)("auth/login",function(){var e=(0,n.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.post("/users/login",t);case 3:return n=e.sent,o(n.data.token),e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}());(0,c.hg)("auth/logout",function(){var e=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.ZP.post("/users/logout");case 3:s.ZP.defaults.headers.common.Authorization="",e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}()),(0,c.hg)("auth/refresh",function(){var e=(0,n.Z)(u().mark((function e(t,r){var n,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.getState(),null!==(a=n.auth.token)){e.next=4;break}return e.abrupt("return",r.rejectWithValue("Unable to fetch user"));case 4:return e.prev=4,o(a),e.next=8,s.ZP.get("/users/me");case 8:return c=e.sent,e.abrupt("return",c.data);case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",r.rejectWithValue(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,r){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=877.b631e840.chunk.js.map