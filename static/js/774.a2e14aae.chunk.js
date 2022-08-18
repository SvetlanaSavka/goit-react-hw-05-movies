"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[774],{7047:function(n,e,t){t.d(e,{e:function(){return s}});var r,i=t(501),a=t(6871),c=t(168),u=t(6031).ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n"]))),o=t(184),s=function(n){var e=n.movies,t=(0,a.TH)();return(0,o.jsx)(u,{children:e.map((function(n){var e=n.id,r=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,o.jsx)("h2",{children:r})})},e)}))})}},3524:function(n,e,t){t.d(e,{$h:function(){return r},_n:function(){return i},t5:function(){return a}});var r="18a83c57cdad2caf2727c80f23ceed6b",i="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p/w500"},8774:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,i,a,c,u=t(5861),o=t(885),s=t(7757),p=t.n(s),f=t(2791),l=t(2184),d=t(5705),h=t(6066),v=(t(5462),t(168)),x=t(6031),m=x.ZP.div(r||(r=(0,v.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),g=(0,x.ZP)(d.gN)(i||(i=(0,v.Z)(["\n  display: inline-block;\n  width: 500px;\n  height: 50%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=(0,x.ZP)(d.l0)(a||(a=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),w=x.ZP.button(c||(c=(0,v.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),y=t(184),k=function(n){var e=n.onSubmit,t=n.value;return(0,y.jsx)(m,{children:(0,y.jsx)(d.J9,{initialValues:{search:t},onSubmit:function(n){var t=n.search;""!==t.trim()?e(t):(0,h.Am)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435!")},children:(0,y.jsxs)(b,{children:[(0,y.jsx)(w,{type:"submit",children:(0,y.jsx)(l.a4h,{width:"20",height:"20",fill:"grey"})}),(0,y.jsx)(g,{name:"search"})]})})})},Z=t(501),j=t(9545),_=t(7047),z=function(){var n,e=(0,f.useState)([]),t=(0,o.Z)(e,2),r=t[0],i=t[1],a=(0,Z.lr)(),c=(0,o.Z)(a,2),s=c[0],l=c[1],d=null!==(n=s.get("filter"))&&void 0!==n?n:"";(0,f.useEffect)((function(){if(""!==d){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,j.q)(d);case 2:e=n.sent,i(e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[d]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{value:d,onSubmit:function(n){l(""!==n?{filter:n}:{})}}),r.length>0&&(0,y.jsx)(_.e,{movies:r})]})}},9545:function(n,e,t){t.d(e,{HS:function(){return l},q:function(){return v},tx:function(){return d},z1:function(){return f},zv:function(){return h}});var r=t(5861),i=t(7757),a=t.n(i),c=t(4569),u=t.n(c),o=t(6066),s=(t(5462),t(3524)),p=u().create({baseURL:s._n,params:{api_key:s.$h}}),f=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/search/movie",{params:{query:e}});case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),o.Am.error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=774.a2e14aae.chunk.js.map