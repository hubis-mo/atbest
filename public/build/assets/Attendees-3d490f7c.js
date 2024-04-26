import{M as w}from"./MemberLayout-005a6312.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{i as s,o as i,c as b,w as l,a as n,t as o,b as r,d as c,h as v,f as d,F as _}from"./app-78468d3b.js";import"./NavLink-d1da715f.js";import"./DropdownLink-c7da729b.js";import"./ResponsiveNavLink-51fcef62.js";const $={components:{MemberLayout:w},props:["event","attendees","attendance_status"],data(){return{activeKey:[],status:"ATTEND",columns:[{title:"Event title",dataIndex:"title_en"},{title:"Start date",dataIndex:"start_date"},{title:"End date",dataIndex:"end_date"},{title:"Operation",dataIndex:"operation",key:"operation"}],rules:{name_zh:{required:!0},mobile:{required:!0},state:{required:!0}},validateMessages:{required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},labelCol:{style:{width:"150px"}}}},created(){},mounted(){this.init()},methods:{init(){Object.values(this.attendees).forEach(e=>{e.attended=!!e.status})},onChangeAttendee(e){e.status=e.attended?this.status:null,console.log(e)},onClickConfirm(){var e=[];Object.values(this.attendees).forEach(t=>{t.attended&&e.push({id:t.id,event_id:t.event_id,display_name:t.display_name,status:t.status})}),this.$inertia.put(route("member.event.attendees.update",this.event.id),e,{onSuccess:t=>{console.log(t),this.init()},onError:t=>{alert(t.message)}})}}},q={class:"font-semibold text-xl text-gray-800 leading-tight"},B={class:"container mx-auto pt-5"},M={class:"flex-auto h-10"},A=n("a",{href:"#",onclick:"history.back();return false;",class:"ant-btn float-right"},"Go Back",-1),I={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg p-5"},L={class:"pb-2"},N=n("br",null,null,-1);function D(e,t,u,O,m,h){const f=s("a-radio-button"),g=s("a-radio-group"),y=s("a-button"),k=s("a-typography-title"),x=s("a-checkbox"),C=s("MemberLayout");return i(),b(C,{title:"Dashboard"},{header:l(()=>[n("h2",q,o(u.event.title_en),1)]),default:l(()=>[n("div",B,[n("div",M,[r(g,{value:m.status,"onUpdate:value":t[0]||(t[0]=a=>m.status=a),"button-style":"solid"},{default:l(()=>[(i(!0),c(_,null,v(u.attendance_status,a=>(i(),b(f,{value:a.value},{default:l(()=>[d(o(a.label),1)]),_:2},1032,["value"]))),256))]),_:1},8,["value"]),A]),n("div",I,[n("div",L,[r(y,{onClick:h.onClickConfirm,class:"float-right mr-5"},{default:l(()=>[d(o(e.$t("confirm")),1)]),_:1},8,["onClick"])]),n("div",null,[r(k,{level:5},{default:l(()=>[d(o(e.$t("attended_mebmers"))+":",1)]),_:1}),(i(!0),c(_,null,v(u.attendees,a=>(i(),c(_,null,[r(x,{checked:a.attended,"onUpdate:checked":p=>a.attended=p,onChange:p=>h.onChangeAttendee(a)},null,8,["checked","onUpdate:checked","onChange"]),d(" "+o(a.attendee_id)+"-"+o(a.display_name)+" "+o(a.status),1),N],64))),256))])])])]),_:1})}const z=E($,[["render",D]]);export{z as default};
