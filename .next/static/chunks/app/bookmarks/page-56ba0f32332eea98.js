(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{18030:function(e,a,t){"use strict";var o=t(78997);a.Z=void 0;var r=o(t(76906)),n=t(9268);a.Z=(0,r.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},51119:function(e,a,t){Promise.resolve().then(t.bind(t,8659))},64328:function(e,a,t){"use strict";t.d(a,{I:function(){return l},db:function(){return i}});var o=t(1313),r=t(28050),n=t(83692);let s=(0,o.ZF)({apiKey:"AIzaSyDtsgHspBq5cP_PY93E-siKavg8PKE9IeA",authDomain:"icanbeher-52758.firebaseapp.com",projectId:"icanbeher-52758",storageBucket:"icanbeher-52758.appspot.com",messagingSenderId:"219706161343",appId:"1:219706161343:web:6f266353dc1cfb9bc12e0a"}),i=(0,r.ad)(s),l=(0,n.v0)(s)},22777:function(e,a,t){"use strict";t.d(a,{Xe:function(){return i},av:function(){return c},bU:function(){return s},bl:function(){return d},ix:function(){return n},yT:function(){return l}});var o=t(91371);let r=(0,o.oM)({name:"bookmark",initialState:{bookmarked:[],error:null,bookmarkError:null,user:null},reducers:{addAspirationToBookmarked(e,a){e.bookmarked.unshift(a.payload)},removeFromBookmarked(e,a){e.bookmarked=e.bookmarked.filter(e=>e.id!==a.payload)},addBookmarkFail(e,a){e.error=a.payload},getBookmarkError(e,a){e.bookmarkError=a.payload},setUser(e,a){e.user=a.payload},updateBookmarks(e,a){e.bookmarked=a.payload}}}),{addAspirationToBookmarked:n,removeFromBookmarked:s,addBookmarkFail:i,getBookmarkError:l,setUser:c,updateBookmarks:d}=r.actions;a.ZP=r.reducer},83609:function(e,a,t){"use strict";t.d(a,{Bb:function(){return f},HV:function(){return k},kS:function(){return u},nS:function(){return m},yT:function(){return h}});var o=t(91371),r=t(6936),n=t(64328),s=t(22777),i=t(83692),l=t(68919);let c=e=>l.ZP.success(e),d=e=>l.ZP.error(e),u=(0,o.hg)("auth/logout",async()=>{await (0,i.w7)(n.I)}),m=(0,o.hg)("auth/googleSignIn",async()=>{let e=new i.hJ;await (0,i.rh)(n.I,e)}),k=(0,o.hg)("bookmark/addAspirationToBookmarked",async(e,a)=>{let{dispatch:t,getState:o}=a,i=o(),l=i.bookmark.user,u=e.id.toString(),{image_path:m,id:k,name:h,description:f,role:p,userId:x}=e;try{let a=(0,r.JU)(n.db,"".concat(null==l?void 0:l.uid),u),o=await (0,r.QT)(a);if(o.exists()){let e=o.data();t((0,s.Xe)(e.title+" already an existing item"))}else c("adding ".concat(h," to bookmarks")),await (0,r.pl)((0,r.JU)(n.db,"favoritesCollection",u),{image_path:m,role:p,id:k,name:h,description:f,userId:null==l?void 0:l.uid}),c("".concat(h," has been successfully added")),t((0,s.ix)(e))}catch(e){d("failed to add  ".concat(h,"  ").concat(e)),t((0,s.Xe)(e.response&&e.response.data.message?e.response.data.message:"Failed to add "+h+": "+e.message))}}),h=(0,o.hg)("bookmark/removeAspirationFromBookmarks",async(e,a)=>{let{dispatch:t,getState:o}=a,i=o();i.bookmark.user;let l=e.toString();try{t((0,s.bU)(e)),await (0,r.oe)((0,r.JU)(n.db,"favoritesCollection",l)),c("Aspiration Id: ".concat(e," was successfully deleted"))}catch(a){d("failed to remove  ".concat(e)),t({type:"ADD_BOOKMARK_FAIL",payload:a.response&&a.response.data.message?a.response.data.message:a.message})}}),f=(0,o.hg)("bookmark/getBookmarksFromFirebaseDB",async(e,a)=>{let{getState:t,dispatch:o}=a,i=t(),l=i.bookmark.user,c=async e=>{let a=(0,r.IO)((0,r.hJ)(e,"favoritesCollection"),(0,r.ar)("userId","==",null==l?void 0:l.uid)),t=await (0,r.PL)(a),o=t.docs.map(e=>e.data());return o};try{let e=await c(n.db);o((0,s.bl)(e))}catch(e){o((0,s.yT)(e.response&&e.response.data.message?e.response.data.message:e.message))}})},9324:function(e,a,t){"use strict";t.d(a,{C:function(){return n},T:function(){return r}});var o=t(335);let r=()=>(0,o.I0)(),n=o.v9},8659:function(e,a,t){"use strict";t.r(a);var o=t(9268),r=t(86006),n=t(9324),s=t(83609),i=t(68919),l=t(18030),c=t(45459),d=t(76394),u=t.n(d),m=t(59423);a.default=()=>{let e=(0,n.C)(e=>e.bookmark.bookmarked),a=(0,n.T)();return(0,r.useEffect)(()=>{a((0,s.Bb)())},[a]),(0,o.jsx)(c.Z,{children:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center px-6 py-6 w-[100vw] overflow-x-hidden",children:[(0,o.jsx)(i.x7,{}),(0,o.jsx)("h1",{className:"font-semibold mb-[20px] text-black",children:"My Bookmarks"}),(0,o.jsx)("div",{children:(null==e?void 0:e.length)===0?(0,o.jsx)("h2",{children:"Sorry no bookmarks :("}):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"grid grid-cols-4 max-md:grid-cols-2 gap-6 items-center max-sm:flex max-sm:justify-center max-sm:flex-col",children:null==e?void 0:e.map(e=>(0,o.jsxs)("div",{className:"w-[250px]",children:[(0,o.jsx)(u(),{src:null==e?void 0:e.image_path,alt:"".concat((null==e?void 0:e.name)||""),className:"h-[350px] w-[250px] bg-stone-300 transition ease-in-out cursor-pointer hover:brightness-50",loading:"lazy",width:500,height:500}),(0,o.jsx)("div",{className:"flex gap-2 relative -mt-[20em] float-right px-2",children:(0,o.jsx)(m.Z,{title:"bookmark movie",className:"text-xs bg-white text-slate-500 px-3 py-3 hover:scale-110 transition ease-in-out rounded-full",onClick:()=>a((0,s.yT)(null==e?void 0:e.id)),children:(0,o.jsx)(l.Z,{className:"text-red-500"})})}),(0,o.jsx)("h1",{className:"mt-3 text-sm text-black font-semibold tracking-tight",children:null==e?void 0:e.name}),(0,o.jsx)("p",{className:"text-black font-normal mt-1",children:(0,o.jsxs)("span",{children:[null==e?void 0:e.website," Learn more here"]})})]},null==e?void 0:e.id))})})})]})})}},45459:function(e,a,t){"use strict";var o=t(9268);t(86006);var r=t(87755);let n={initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10}};a.Z=e=>{let{children:a}=e;return(0,o.jsx)(r.E.div,{variants:n,initial:"initial",animate:"animate",exit:"exit",transition:{duration:1},children:a})}}},function(e){e.O(0,[662,159,443,240,423,908,755,253,961,744],function(){return e(e.s=51119)}),_N_E=e.O()}]);