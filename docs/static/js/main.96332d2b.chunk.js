(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){return o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=esni5sGWXdIrldNyN0GvLFTa3AJr26sS&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsx)("div",{className:"card animate__animated animate__headShake",children:Object(u.jsx)("img",{width:"200",height:"100",src:n,alt:e})})},f=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){setTimeout((function(){c({data:t,loading:!1})}),500)}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),Object(u.jsx)("p",{className:c?null:"animate__animated animate__bounceOutRight",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(h,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(a.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp!"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(f,{category:t},t)}))})]})},m=document.getElementById("root");c.a.render(Object(u.jsx)(O,{}),m)}},[[18,1,2]]]);
//# sourceMappingURL=main.96332d2b.chunk.js.map