"use strict";(globalThis["webpackChunkantex_lend"]=globalThis["webpackChunkantex_lend"]||[]).push([[698],{6698:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Z});l(2879);var t=l(9835),s=l(6970),i=l(499),c=l(1569);const o={class:"container"},n={class:"row q-col-gutter-md"},u={class:"col-12 col-md-3"},r=(0,t._)("p",{class:"title"},"Все",-1),d={class:"col-12 col-md-9"},m={class:"text-20 text-bold no-margin"},p={class:"no-margin text-caption text-grey-7"},w={__name:"index",setup(e){const a=(0,i.iH)([]),l=(0,i.iH)(0);return(0,t.wF)((async()=>{const e=await c.api.get("/api/settings/news");a.value=e.data})),(e,i)=>{const c=(0,t.up)("q-icon"),w=(0,t.up)("q-breadcrumbs-el"),g=(0,t.up)("q-breadcrumbs"),_=(0,t.up)("q-item-section"),b=(0,t.up)("q-item"),v=(0,t.up)("q-list"),k=(0,t.up)("q-badge"),f=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(f,{class:"side-effect"},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.Wm)(g,{class:"text-positive main-margin","active-color":"white"},{separator:(0,t.w5)((()=>[(0,t.Wm)(c,{size:"1.5em",name:"chevron_right",color:"positive"})])),default:(0,t.w5)((()=>[(0,t.Wm)(w,{label:"Главная",to:"/",icon:"home"}),(0,t.Wm)(w,{label:"Новости",icon:"newspaper"})])),_:1}),(0,t._)("div",n,[(0,t._)("div",u,[r,(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,((e,a)=>((0,t.wg)(),(0,t.j4)(b,{clickable:"",group:"faq",key:e.id,label:e.name,onClick:e=>l.value=a},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{class:(0,s.C_)({"text-positive text-bold":l.value===a})},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["class"])])),_:2},1032,["label","onClick"])))),128))])),_:1})]),(0,t._)("div",d,[(0,t.Wm)(v,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value[l.value]?.items,((a,l)=>((0,t.wg)(),(0,t.j4)(b,{clickable:"",key:a.id,onClick:l=>e.$router.push(`/news/${a.slug}`)},{default:(0,t.w5)((()=>[a.is_hot?((0,t.wg)(),(0,t.j4)(_,{key:0,avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{color:"green-9",class:"no-border-radius",label:"HOT","text-color":"positive"})])),_:1})):(0,t.kq)("",!0),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t._)("p",m,(0,s.zw)(a.title),1),(0,t._)("p",p,(0,s.zw)(new Date(a.created_at).toLocaleString()),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])])])])),_:1})}}};var g=l(9885),_=l(2605),b=l(2857),v=l(8052),k=l(3246),f=l(490),h=l(6749),q=l(990),x=l(9984),W=l.n(x);const Q=w,Z=Q;W()(w,"components",{QPage:g.Z,QBreadcrumbs:_.Z,QIcon:b.Z,QBreadcrumbsEl:v.Z,QList:k.Z,QItem:f.Z,QItemSection:h.Z,QBadge:q.Z})}}]);