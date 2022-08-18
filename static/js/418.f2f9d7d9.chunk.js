"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[418],{3524:function(r,n,t){t.d(n,{$h:function(){return e},_n:function(){return a},t5:function(){return c}});var e="18a83c57cdad2caf2727c80f23ceed6b",a="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p/w500"},4418:function(r,n,t){t.r(n),t.d(n,{default:function(){return y}});var e,a,c,i=t(5861),u=t(885),o=t(7757),s=t.n(o),p=t(6871),f=t(2791),v=t(9545),m=t(184),l=function(r){var n=r.movie;return(0,m.jsx)("ul",{children:n.genres.map((function(r){return(0,m.jsx)("li",{children:r.name},r.id)}))})},d=t(168),h=t(6031),x=t(501),g=(h.ZP.div(e||(e=(0,d.Z)(["\n  padding: 40px;\n"]))),(0,h.ZP)(x.OL)(a||(a=(0,d.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  color: grey;\n"])))),w=function(r){var n=r.backLinkHref,t=r.movieId;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{children:"Additional information"}),(0,m.jsx)(g,{to:"cast",state:{from:n,id:t},children:"Go to cast"}),(0,m.jsx)(g,{to:"reviews",state:{from:n,id:t},children:"Go to reviews"})]})},k=function(r){var n,t=r.movie;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(null!==(n=t.profile_path)&&void 0!==n?n:t.poster_path),alt:t.title,width:"250"}),(0,m.jsx)("h2",{children:t.title}),(0,m.jsx)("p",{children:t.overview})]})},b=(0,h.ZP)(x.OL)(c||(c=(0,d.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: grey;\n"]))),j=function(r){var n=r.backLinkHref;return(0,m.jsx)(b,{to:n,children:"Back to movies"})},y=function(){var r,n,t=(0,f.useState)(null),e=(0,u.Z)(t,2),a=e[0],c=e[1],o=(0,p.UO)().movieId,d=(0,p.TH)();if((0,f.useEffect)((function(){var r=function(){var r=(0,i.Z)(s().mark((function r(){var n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,v.HS)(o);case 2:n=r.sent,c(n.data);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[o]),a){var h=null!==(r=null===(n=d.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/movies";return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{backLinkHref:h}),(0,m.jsx)(k,{movie:a}),(0,m.jsx)(l,{movie:a}),(0,m.jsx)(w,{backLinkHref:h,movieId:o}),(0,m.jsx)(p.j3,{})]})}}},9545:function(r,n,t){t.d(n,{HS:function(){return v},q:function(){return d},tx:function(){return m},z1:function(){return f},zv:function(){return l}});var e=t(5861),a=t(7757),c=t.n(a),i=t(4569),u=t.n(i),o=t(6066),s=(t(5462),t(3524)),p=u().create({baseURL:s._n,params:{api_key:s.$h}}),f=function(){var r=(0,e.Z)(c().mark((function r(){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.get("/trending/movie/day");case 3:return n=r.sent,r.abrupt("return",n.data);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),v=function(){var r=(0,e.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.get("/movie/".concat(n));case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),m=function(){var r=(0,e.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.get("/movie/".concat(n,"/reviews"));case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,e.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.get("/movie/".concat(n,"/credits"));case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}(),d=function(){var r=(0,e.Z)(c().mark((function r(n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p.get("/search/movie",{params:{query:n}});case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),o.Am.error(r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=418.f2f9d7d9.chunk.js.map