"use strict";(globalThis["webpackChunkantex_lend"]=globalThis["webpackChunkantex_lend"]||[]).push([[165],{7165:(e,a,n)=>{n.r(a),n.d(a,{default:()=>_});var t=n(9835),l=n(6970),s=n(8339),i=n(499),r=n(1569);const c={class:"container main-margin"},o={class:"title-h1"},u=["innerHTML"],p={__name:"post",setup(e){const a=(0,s.yj)(),n=(0,i.iH)({});return(0,t.wF)((async()=>{const e=await r.api.get(`/api/settings/news/${a.params.slug}`);n.value=e.data})),(e,a)=>{const s=(0,t.up)("q-icon"),i=(0,t.up)("q-breadcrumbs-el"),r=(0,t.up)("q-breadcrumbs"),p=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(p,null,{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(r,{class:"text-positive main-margin","active-color":"white"},{separator:(0,t.w5)((()=>[(0,t.Wm)(s,{size:"1.5em",name:"chevron_right",color:"positive"})])),default:(0,t.w5)((()=>[(0,t.Wm)(i,{label:"Главная",to:"/",icon:"home"}),(0,t.Wm)(i,{label:"Новости",to:"/news",icon:"newspaper"}),(0,t.Wm)(i,{label:n.value.title},null,8,["label"])])),_:1}),(0,t._)("h1",o,(0,l.zw)(n.value.title),1),(0,t._)("div",{innerHTML:n.value.description},null,8,u)])])),_:1})}}};var m=n(9885),b=n(2605),d=n(2857),w=n(8052),v=n(9984),g=n.n(v);const h=p,_=h;g()(p,"components",{QPage:m.Z,QBreadcrumbs:b.Z,QIcon:d.Z,QBreadcrumbsEl:w.Z})}}]);