import{u as h,r as b,o as i,d as r,b as t,w as e,a as l,e as v,f as n,g as a,F as $,h as x,t as k,n as A}from"./app-78468d3b.js";import{_ as N}from"./ActionMessage-fe79d409.js";import{_ as j}from"./Modal-5b3bab15.js";import{_ as P}from"./Checkbox-c60277c6.js";import{_ as U}from"./ConfirmationModal-c55f8855.js";import{_ as L}from"./DangerButton-13b06071.js";import{_ as T}from"./DialogModal-c7e7a937.js";import{_ as M}from"./FormSection-0799c883.js";import{_ as z,a as E}from"./TextInput-29ef1aab.js";import{_ as w}from"./InputLabel-20a5338e.js";import{_ as S}from"./PrimaryButton-f698bde6.js";import{_ as C}from"./SecondaryButton-a01cb16d.js";import{S as Y}from"./SectionBorder-047cce5e.js";import"./SectionTitle-0172dd5a.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"col-span-6 sm:col-span-4"},G={key:0,class:"col-span-6"},H={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},J={class:"flex items-center"},K={class:"ml-2 text-sm text-gray-600"},O={key:0},Q={class:"mt-10 sm:mt-0"},R={class:"space-y-6"},W={class:"flex items-center"},X={key:0,class:"text-sm text-gray-400"},Z=["onClick"],ee=["onClick"],se=l("div",null," Please copy your new API token. For your security, it won't be shown again. ",-1),te={key:0,class:"mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"},oe={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ne={class:"flex items-center"},ae={class:"ml-2 text-sm text-gray-600"},$e={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(u){const c=h({name:"",permissions:u.defaultPermissions}),d=h({permissions:[]}),y=h(),g=b(!1),p=b(null),f=b(null),F=()=>{c.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{g.value=!0,c.reset()}})},I=m=>{d.permissions=m.abilities,p.value=m},V=()=>{d.put(route("api-tokens.update",p.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>p.value=null})},D=m=>{f.value=m},B=()=>{y.delete(route("api-tokens.destroy",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})};return(m,o)=>(i(),r("div",null,[t(M,{onSubmitted:F},{title:e(()=>[n(" Create API Token ")]),description:e(()=>[n(" API tokens allow third-party services to authenticate with our application on your behalf. ")]),form:e(()=>[l("div",q,[t(w,{for:"name",value:"Name"}),t(z,{id:"name",modelValue:a(c).name,"onUpdate:modelValue":o[0]||(o[0]=s=>a(c).name=s),type:"text",class:"mt-1 block w-full",autofocus:""},null,8,["modelValue"]),t(E,{message:a(c).errors.name,class:"mt-2"},null,8,["message"])]),u.availablePermissions.length>0?(i(),r("div",G,[t(w,{for:"permissions",value:"Permissions"}),l("div",H,[(i(!0),r($,null,x(u.availablePermissions,s=>(i(),r("div",{key:s},[l("label",J,[t(P,{checked:a(c).permissions,"onUpdate:checked":o[1]||(o[1]=_=>a(c).permissions=_),value:s},null,8,["checked","value"]),l("span",K,k(s),1)])]))),128))])])):v("",!0)]),actions:e(()=>[t(N,{on:a(c).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Created. ")]),_:1},8,["on"]),t(S,{class:A({"opacity-25":a(c).processing}),disabled:a(c).processing},{default:e(()=>[n(" Create ")]),_:1},8,["class","disabled"])]),_:1}),u.tokens.length>0?(i(),r("div",O,[t(Y),l("div",Q,[t(j,null,{title:e(()=>[n(" Manage API Tokens ")]),description:e(()=>[n(" You may delete any of your existing tokens if they are no longer needed. ")]),content:e(()=>[l("div",R,[(i(!0),r($,null,x(u.tokens,s=>(i(),r("div",{key:s.id,class:"flex items-center justify-between"},[l("div",null,k(s.name),1),l("div",W,[s.last_used_ago?(i(),r("div",X," Last used "+k(s.last_used_ago),1)):v("",!0),u.availablePermissions.length>0?(i(),r("button",{key:1,class:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:_=>I(s)}," Permissions ",8,Z)):v("",!0),l("button",{class:"cursor-pointer ml-6 text-sm text-red-500",onClick:_=>D(s)}," Delete ",8,ee)])]))),128))])]),_:1})])])):v("",!0),t(T,{show:g.value,onClose:o[3]||(o[3]=s=>g.value=!1)},{title:e(()=>[n(" API Token ")]),content:e(()=>[se,m.$page.props.jetstream.flash.token?(i(),r("div",te,k(m.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:e(()=>[t(C,{onClick:o[2]||(o[2]=s=>g.value=!1)},{default:e(()=>[n(" Close ")]),_:1})]),_:1},8,["show"]),t(T,{show:p.value!=null,onClose:o[6]||(o[6]=s=>p.value=null)},{title:e(()=>[n(" API Token Permissions ")]),content:e(()=>[l("div",oe,[(i(!0),r($,null,x(u.availablePermissions,s=>(i(),r("div",{key:s},[l("label",ne,[t(P,{checked:a(d).permissions,"onUpdate:checked":o[4]||(o[4]=_=>a(d).permissions=_),value:s},null,8,["checked","value"]),l("span",ae,k(s),1)])]))),128))])]),footer:e(()=>[t(C,{onClick:o[5]||(o[5]=s=>p.value=null)},{default:e(()=>[n(" Cancel ")]),_:1}),t(S,{class:A(["ml-3",{"opacity-25":a(d).processing}]),disabled:a(d).processing,onClick:V},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),t(U,{show:f.value!=null,onClose:o[8]||(o[8]=s=>f.value=null)},{title:e(()=>[n(" Delete API Token ")]),content:e(()=>[n(" Are you sure you would like to delete this API token? ")]),footer:e(()=>[t(C,{onClick:o[7]||(o[7]=s=>f.value=null)},{default:e(()=>[n(" Cancel ")]),_:1}),t(L,{class:A(["ml-3",{"opacity-25":a(y).processing}]),disabled:a(y).processing,onClick:B},{default:e(()=>[n(" Delete ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{$e as default};
