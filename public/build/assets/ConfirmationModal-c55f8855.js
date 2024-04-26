import{a as c}from"./Modal-5b3bab15.js";import{o as n,c as r,w as m,a as t,l as o}from"./app-78468d3b.js";const d={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},h={class:"sm:flex sm:items-start"},f=t("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),x={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},_={class:"text-lg"},u={class:"mt-2"},p={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},g={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:l}){const a=l,i=()=>{a("close")};return(e,w)=>(n(),r(c,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:i},{default:m(()=>[t("div",d,[t("div",h,[f,t("div",x,[t("h3",_,[o(e.$slots,"title")]),t("div",u,[o(e.$slots,"content")])])])]),t("div",p,[o(e.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{g as _};
