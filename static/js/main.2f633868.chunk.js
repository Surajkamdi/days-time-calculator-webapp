(this["webpackJsonpdays-time-calculator-reactjs"]=this["webpackJsonpdays-time-calculator-reactjs"]||[]).push([[0],{122:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t.n(n),l=t(22),r=t.n(l),i=(t(58),t(17)),o=t(40),s=t.n(o);t(59),t(60);var u=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),u=o[0],m=o[1],d=Object(n.useState)(0),f=Object(i.a)(d,2),h=f[0],E=f[1],b=Object(n.useState)(!1),v=Object(i.a)(b,2),p=v[0],g=v[1],N=Object(n.useState)(!1),y=Object(i.a)(N,2),k=y[0],w=y[1];function x(e){var a=0,n=new Date(t);for(n.getDay()===e&&(a=1);n<=u;)n.setDate(n.getDate()+1),n.getDay()===e&&a++;return a}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"heading-h1"},c.a.createElement("h1",null,"Total Days Calculator")),c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"field-group"},c.a.createElement("label",{className:"field-label"},"From Date"),c.a.createElement("br",null),c.a.createElement(s.a,{className:"input--field",selected:t,onChange:function(e){return l(e)}}),c.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"})),c.a.createElement("div",{className:"field-group"},c.a.createElement("label",{className:"field-label"},"To Date"),c.a.createElement("br",null),c.a.createElement(s.a,{className:"input--field",selected:u,onChange:function(e){return m(e)}}),c.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"})),c.a.createElement("div",{className:"field-group checkbox--group"},c.a.createElement("label",{className:"field-label checkbox--field"},"Exclude Sunday",c.a.createElement("input",{type:"checkbox",name:"excludeSunday",value:"excludeSunday",onChange:function(e){g(e.target.checked)}}),c.a.createElement("span",{className:"checkmark"})),c.a.createElement("label",{className:"field-label checkbox--field"},"Exclude Saturday",c.a.createElement("input",{type:"checkbox",name:"excludeSaturday",value:"excludeSaturday",onChange:function(e){w(e.target.checked)}}),c.a.createElement("span",{className:"checkmark"}))),c.a.createElement("button",{onClick:function(e){e.preventDefault();var a=0;if(""!==t&&""!==u){var n=Math.abs(t-u),c=Math.round(n/864e5),l=x(0),r=x(1);p&&!k?(a=c-l,E(++a)):!p&&k?(a=c-r,E(++a)):p&&k?(a=c-(l+r),E(++a)):E(++c)}},type:"button",name:"calculate",className:"calculate-btn"},"Calculate"),c.a.createElement("div",{className:"result--container"},c.a.createElement("h2",null,0===h?"":h+" Days"))))};var m=function(){return"Some Text Here"};var d=function(){return c.a.createElement("div",{className:"date--time--row"},c.a.createElement(u,null),c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=t(31);f.a.initialize("G-5LR83M4MJ0"),f.a.initialize("UA-164371994-1"),f.a.pageview(window.location.pathname+window.location.search),r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,a,t){e.exports=t(122)},58:function(e,a,t){},60:function(e,a,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.2f633868.chunk.js.map