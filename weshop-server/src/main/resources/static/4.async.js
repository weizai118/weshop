(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{RP5D:function(t,e,a){"use strict";var n=a("TqRt");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("MVZn")),u=n(a("o0o1")),o=a("dCQc"),s={namespace:"footprint",state:{data:{list:[],pagination:{}}},effects:{list:u.default.mark(function t(e,a){var n,r,s,i;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,s=a.put,t.next=4,r(o.queryFootprint,n);case 4:return i=t.sent,t.next=7,s({type:"queryList",payload:i});case 7:case"end":return t.stop()}},t,this)})},reducers:{queryList:function(t,e){return(0,r.default)({},t,{data:e.payload.data})}}};e.default=s}}]);