"use strict";(self.webpackChunkreact_social_network=self.webpackChunkreact_social_network||[]).push([[97],{5443:function(s,e,a){a.r(e),a.d(e,{Avatar:function(){return U},Information:function(){return T},Profile:function(){return Q}});var n=a(2791),i=a(2717),t=a(5115),l=a(9434),r=a(6871),o=a(6310),c=a(9962),d=a(885),u=a(8652),m=a(7316),_="Contact_container__gSAk6",v="Contact_link__Ke3q1",x=a(184),f=function(s){var e=s.title,a=s.link,n=e[0].toUpperCase()+e.slice(1);return(0,x.jsxs)("div",{className:_,children:[n,": ",(0,x.jsx)("a",{className:v,target:"_blank",href:a,children:a})]})},j="Data_field__pqXhh",h="Data_fullInfoBtn__u2sKQ",N="Data_lineContainer__VYMcR",p="Data_editBtn__ZXqCl",k=function(s){var e=s.setIsEditFullInfo,a=s.isOwner,i=(0,l.v9)(m.Af),t=(0,l.v9)(m.ER),r=(0,l.v9)(m.Or),o=(0,l.v9)(m.gG),c=(0,n.useState)(!1),_=(0,d.Z)(c,2),v=_[0],k=_[1];if(!i)return null;var b=Object.keys(i);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:j,children:["Readiness to work: ",(0,x.jsx)("span",{children:t?"Looking for a job":"Not looking for a job"})]}),(0,x.jsxs)("div",{className:j,children:["My professional skills: ",(0,x.jsx)("span",{children:r})]}),(0,x.jsxs)("div",{className:j,children:["About me: ",(0,x.jsx)("span",{children:o})]}),(0,x.jsx)(u.zx,{className:h,onClick:function(){k(!v)},children:v?"Hide full information":"Show full information"}),v&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:N,children:(0,x.jsx)(u.x1,{})}),b.map((function(s){return(0,x.jsx)(f,{title:s,link:i[s]},s)})),a&&(0,x.jsx)(u.zx,{isPrimary:!0,className:p,onClick:function(){e(!0)},children:"Edit"})]})]})},b=a(1413),g=a(5251),I="EditData_field__jbjH2",y="EditData_input__40ZxF",A="EditData_buttons__7SYVR",C="EditData_editBtn__20TGt",F="EditData_backBtn__OVlxg",w="EditData_errorMessage__i1RVu",D=function(s){var e,a,n,t=s.setIsEditFullInfo,r=(0,i.TL)(),o=(0,l.v9)(m.d),d=(0,l.v9)(m.Af),_=(0,g.cI)({mode:"onBlur",defaultValues:(0,b.Z)({},o)}),v=_.register,f=_.handleSubmit,j=_.formState.errors,h={required:"Field is required",minLength:{value:3,message:"Min 3 characters"}},N={pattern:{value:/(http|https):\/\/([\w.]+\/?)\S*/,message:"Incorrect title"}},p=Object.keys(d),k=function(){t(!1)};return(0,x.jsxs)("form",{onSubmit:f((function(s){r((0,c.Lj)(s)),k()})),children:[(0,x.jsxs)("div",{className:I,children:[(0,x.jsx)("div",{children:"Full name:"}),(0,x.jsx)("input",(0,b.Z)({className:y,type:"text"},v("fullName",h))),(null===j||void 0===j?void 0:j.fullName)&&(0,x.jsx)("p",{className:w,children:null===j||void 0===j||null===(e=j.fullName)||void 0===e?void 0:e.message})]}),(0,x.jsxs)("div",{className:I,children:["Readiness to work:",(0,x.jsx)("input",(0,b.Z)({type:"checkbox"},v("lookingForAJob")))]}),(0,x.jsxs)("div",{className:I,children:["My professional skills:",(0,x.jsx)("input",(0,b.Z)({className:y,type:"text"},v("lookingForAJobDescription",h))),(null===j||void 0===j?void 0:j.lookingForAJobDescription)&&(0,x.jsx)("p",{className:w,children:null===j||void 0===j||null===(a=j.lookingForAJobDescription)||void 0===a?void 0:a.message})]}),(0,x.jsxs)("div",{className:I,children:["About me:",(0,x.jsx)("input",(0,b.Z)({className:y,type:"text"},v("aboutMe",h))),(null===j||void 0===j?void 0:j.aboutMe)&&(0,x.jsx)("p",{className:w,children:null===j||void 0===j||null===(n=j.aboutMe)||void 0===n?void 0:n.message})]}),p.map((function(s){var e,a=s[0].toUpperCase()+s.slice(1);return(0,x.jsxs)("div",{className:I,children:[a,":",(0,x.jsx)("input",(0,b.Z)({className:y},v("contacts.".concat(s),N))),(null===j||void 0===j?void 0:j.contacts)&&(0,x.jsx)("p",{className:w,children:null===j||void 0===j||null===(e=j.contacts[s])||void 0===e?void 0:e.message})]},s)})),(0,x.jsxs)("div",{className:A,children:[(0,x.jsx)(u.zx,{type:"submit",isPrimary:!0,className:C,children:"Save"}),(0,x.jsx)(u.zx,{type:"button",isPrimary:!0,className:F,onClick:k,children:"Back"})]})]})},Z="Information_container__R69gk",E="Information_nameContainer__2XdGq",O="Information_name__lM9Jv",B="Information_online__cGjTp",P="Information_statusContainer__QIGbk",R="Information_status__5Eczb",T=function(s){var e=s.isOwner,a=(0,i.TL)(),t=(0,l.v9)(m.mW),r=(0,l.v9)(m.ie),o=(0,n.useState)(!1),_=(0,d.Z)(o,2),v=_[0],f=_[1];return(0,x.jsxs)("div",{className:Z,children:[(0,x.jsxs)("div",{className:E,children:[(0,x.jsx)("div",{className:O,children:r}),(0,x.jsx)("span",{className:B,children:e?"online":"seen recently"})]}),(0,x.jsx)("div",{className:P,children:e?(0,x.jsx)(u.j3,{currentTitle:t,handleUpdateTitle:function(s){a((0,c.Nf)(s))}}):(0,x.jsx)("div",{className:R,children:t})}),(0,x.jsx)(u.x1,{}),v?(0,x.jsx)(D,{setIsEditFullInfo:f}):(0,x.jsx)(k,{setIsEditFullInfo:f,isOwner:e})]})},S=a(3091),z=a(5236),L="Avatar_avatar__y2jHq",M="Avatar_userAvatarImage__Z-ziT",q="Avatar_defaultAvatarImage__0nZKT",J="Avatar_editLink__HCc-O",G="Avatar_followBtn__TsPJs",U=function(s){var e=s.isOwner,a=s.userId,n=(0,i.TL)(),t=(0,l.v9)(m.g$),r=(0,l.v9)(m.DE),o=(0,l.v9)(S.qB),d=(0,l.v9)(S.ic),_=(0,l.v9)(S.$R),v=r||t;return(0,x.jsxs)("div",{className:L,children:[v?(0,x.jsx)("img",{className:M,src:v,alt:"user avatar"}):(0,x.jsx)("img",{className:q,src:z,alt:"default avatar"}),e?(0,x.jsx)(u.$B,{classNameButton:J,children:"Change avatar"}):o?(0,x.jsx)(u.zx,{className:G,onClick:function(){n((0,c.fv)(a))},disabled:_,children:d?(0,x.jsx)(u.WF,{color:"#fff"}):"Unfollow"}):(0,x.jsx)(u.zx,{className:G,onClick:function(){n((0,c.ZN)(a))},disabled:_,children:d?(0,x.jsx)(u.WF,{color:"#fff"}):"Follow"})]})},V="Profile_profile__Ryb5-",H="Profile_container__NdtA0",X="Profile_rightBlock__5UXzR",$="Profile_searchPosts__tZmHd",K="Profile_avatarContainer__cZ0yZ",Q=function(){var s=(0,r.UO)().userId,e=(0,i.TL)(),a=(0,l.v9)(o.Jt),d=(0,l.v9)(o.DQ),m=!s;return(0,n.useEffect)((function(){var n=m?d:s;a&&(e((0,c.lR)(Number(n))),e((0,c.hD)(Number(n))),e((0,c.et)(Number(n))))}),[s]),a?(0,x.jsx)("div",{className:V,children:(0,x.jsxs)("div",{className:H,children:[(0,x.jsx)("div",{className:K,children:(0,x.jsx)(U,{isOwner:m,userId:Number(s)})}),(0,x.jsxs)("div",{className:X,children:[(0,x.jsx)(T,{isOwner:m}),m?(0,x.jsx)(u.V8,{}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:$,children:"No posts yet"}),(0,x.jsx)(u.cI,{})]})]})]})}):(0,x.jsx)(r.Fg,{to:t.y$.LOGIN})}}}]);
//# sourceMappingURL=Profile.195e370e.chunk.js.map