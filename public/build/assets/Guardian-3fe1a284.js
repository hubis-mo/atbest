import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";import{i as m,o as s,d as a,a as r,b as n,w as i,e as u,F as p,h as _,f as d,t as f}from"./app-78468d3b.js";const h={components:{},props:["guardian","members"],data(){return{}}},g={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},w={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},k={key:0};function v(e,$,l,b,N,V){const o=m("inertia-link");return s(),a("div",g,[r("div",x,[r("div",w,[e.$page.props.user.roles.includes("admin")||e.$page.props.user.roles.includes("organizer")?(s(),a("span",k,[n(o,{href:e.route("manage")},{default:i(()=>[d("Admin")]),_:1},8,["href"])])):u("",!0),r("ol",null,[(s(!0),a(p,null,_(l.members,t=>(s(),a("li",null,[n(o,{href:e.route("member.guardian.actAs",t)},{default:i(()=>[d(f(t.first_name),1)]),_:2},1032,["href"])]))),256))])])])])}const C=c(h,[["render",v]]);export{C as default};
