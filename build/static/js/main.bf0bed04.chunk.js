(window["webpackJsonptest-autobooking"]=window["webpackJsonptest-autobooking"]||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),u=n.n(c),o=(n(23),n(15)),s=n(7),i=n(5),l=n(11),f=n(1),p=n.n(f),b=n(3),v=function(e){var t=Object(r.useState)([]),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){(function(){var t=Object(b.a)(p.a.mark(function t(){var n;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,c(n);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[]),a},m=function(){var e=Object(b.a)(p.a.mark(function e(t){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://beta.autobooking.com/api/test/v1",e.abrupt("return",fetch("".concat("https://beta.autobooking.com/api/test/v1").concat(t)));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(b.a)(p.a.mark(function e(){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/search/terms");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(p.a.mark(function e(){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/search/styles");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(p.a.mark(function e(){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/search/brands_terms");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();n(25);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(n){var r=n.indexOf("-"),c=n.slice(r+1),u=e.find(function(e){return e.slug.toLowerCase()===c}),o=u&&u.id||"select";return a.a.createElement("select",{value:o,onChange:t},a.a.createElement("option",{value:"select"},"Select"),e.map(function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.label)}))}return a.a.createElement("select",{defaultValue:"select",onChange:t},a.a.createElement("option",{value:"select"},"Select"),e.map(function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.label)}))};var w=Object(i.e)(function(e){var t=Object(r.useState)({terms:"",brands:"",style:""}),n=Object(s.a)(t,2),c=n[0],u=n[1];Object(r.useEffect)(function(){var t=e.location.pathname.split("/");if(0!==t[1].length){var n=function(e){return e&&e.length>1?"/".concat(e):""},r=n(t[1]),a=n(t[2]),c=n(t[3]);u({terms:r,brands:a,style:c})}},[e.location.pathname]);var o=v(d),f=v(O),p=v(h),b=Object(r.useCallback)(function(e){var t=o.find(function(t){return t.id==e.target.value});t&&u(j({},c,{terms:"/s-".concat(t.slug)}))},[o]),m=Object(r.useCallback)(function(e){var t=f.find(function(t){return t.id==e.target.value});t&&u(j({},c,{brands:"/b-".concat(t.slug)}))},[f]),g=Object(r.useCallback)(function(e){var t=p.find(function(t){return t.id==e.target.value});t&&u(j({},c,{style:"/st-".concat(t.slug)}))},[p]),w=o.length>0&&f.length>0&&p.length>0;return a.a.createElement(l.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Autobooking test"),a.a.createElement("main",{className:"App-main"},w?a.a.createElement("div",null,y(o,b,c.terms),y(f,m,c.brands),y(p,g,c.style)):"Loading..., please wait"),a.a.createElement(i.a,{to:"".concat(c.terms).concat(c.brands).concat(c.style)})))}),E=function(){return a.a.createElement(l.a,null,a.a.createElement(w,null))};u.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.bf0bed04.chunk.js.map