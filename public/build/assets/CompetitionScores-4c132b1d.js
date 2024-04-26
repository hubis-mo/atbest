import{A as E}from"./AdminLayout-d2fce59f.js";import{_ as U}from"./_plugin-vue_export-helper-c27b6911.js";import{i as d,o as u,c as _,w as i,a as f,t as r,b as l,f as m,d as g,F as y,e as C}from"./app-78468d3b.js";import"./DropdownLink-c7da729b.js";import"./PieChartOutlined-7a16d42c.js";const O={components:{AdminLayout:E},props:["competitionScoreCategories","competitionScores"],data(){return{modal:{isOpen:!1,data:{},title:"Modal",mode:""},columns:[{title:"Category",i18n:"category",dataIndex:"category"},{title:"Title",i18n:"title",dataIndex:"title"},{title:"First",i18n:"competition_score_first",dataIndex:"first",width:80},{title:"Second",i18n:"competition_score_second",dataIndex:"second",width:80},{title:"Third",i18n:"competition_score_third",dataIndex:"third",width:80},{title:"Fifth",i18n:"competition_score_fifth",dataIndex:"fifth",width:80},{title:"Seventh",i18n:"competition_score_seventh",dataIndex:"seventh",width:80},{title:"Advance",i18n:"competition_score_advance",dataIndex:"advance",width:80},{title:"Participate",i18n:"competition_score_participate",dataIndex:"participate",width:80},{title:"Operation",i18n:"operation",dataIndex:"operation",key:"operation"}],rules:{category:{required:!0},title:{required:!0},first:{required:!0},second:{required:!0},third:{required:!0},fifth:{required:!0},seventh:{required:!0},advance:{required:!0},participate:{required:!0}},validateMessages:{required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},labelCol:{style:{width:"150px"}}}},created(){},methods:{createRecord(){this.modal.data={},this.modal.mode="CREATE",this.modal.title="Create Record",this.modal.isOpen=!0},editRecord(e){this.modal.data={...e},this.modal.mode="EDIT",this.modal.title="Edit Record",this.modal.isOpen=!0},storeRecord(){this.$refs.modalRef.validateFields().then(()=>{this.$inertia.post(route("admin.competitionScores.store"),this.modal.data,{onSuccess:e=>{this.modal.data={},this.modal.isOpen=!1},onError:e=>{console.log(e)}})}).catch(e=>{console.log(e)})},updateRecord(){console.log(this.modal.data),this.$refs.modalRef.validateFields().then(()=>{this.$inertia.patch(route("admin.competitionScores.update",this.modal.data.id),this.modal.data,{onSuccess:e=>{this.modal.data={},this.modal.isOpen=!1,console.log(e)},onError:e=>{console.log(e)}})}).catch(e=>{console.log("error",e)})},deleteRecord(e){this.$inertia.delete(route("admin.competitionScores.destroy",e.id),{onSuccess:t=>{console.log(t)},onError:t=>{console.log(t)}})}}},A={class:"font-semibold text-xl text-gray-800 leading-tight"},T={class:"container mx-auto pt-5"},F={class:"bg-white relative shadow rounded-lg overflow-x-auto"};function B(e,t,v,D,a,c){const p=d("a-button"),S=d("a-popconfirm"),w=d("a-table"),R=d("a-select"),n=d("a-form-item"),s=d("a-input"),k=d("a-form"),I=d("a-modal"),x=d("AdminLayout");return u(),_(x,{title:"Dashboard"},{header:i(()=>[f("h2",A,r(e.$t("competition_score_categories")),1)]),default:i(()=>[f("button",{onClick:t[0]||(t[0]=o=>c.createRecord()),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"},r(e.$t("create")),1),f("div",T,[f("div",F,[l(w,{dataSource:v.competitionScores,columns:a.columns},{headerCell:i(({column:o})=>[m(r(o.i18n?e.$t(o.i18n):o.title),1)]),bodyCell:i(({column:o,text:q,record:b,index:N})=>[o.dataIndex=="operation"?(u(),g(y,{key:0},[l(p,{onClick:h=>c.editRecord(b)},{default:i(()=>[m(r(e.$t("edit")),1)]),_:2},1032,["onClick"]),l(S,{title:e.$t("confirm_delete_record"),"ok-text":e.$t("yes"),"cancel-text":e.$t("no"),onConfirm:h=>c.deleteRecord(b)},{default:i(()=>[l(p,null,{default:i(()=>[m(r(e.$t("delete")),1)]),_:1})]),_:2},1032,["title","ok-text","cancel-text","onConfirm"])],64)):C("",!0),o.dataIndex=="category"?(u(),g(y,{key:1},[m(r(v.competitionScoreCategories.find(h=>h.value==q).label),1)],64)):(u(),g(y,{key:2},[m(r(b[o.dataIndex]),1)],64))]),_:1},8,["dataSource","columns"])])]),l(I,{visible:a.modal.isOpen,"onUpdate:visible":t[12]||(t[12]=o=>a.modal.isOpen=o),title:a.modal.title,width:"60%"},{footer:i(()=>[a.modal.mode=="EDIT"?(u(),_(p,{key:"Update",type:"primary",onClick:t[10]||(t[10]=o=>c.updateRecord())},{default:i(()=>[m(r(e.$t("update")),1)]),_:1})):C("",!0),a.modal.mode=="CREATE"?(u(),_(p,{key:"Store",type:"primary",onClick:t[11]||(t[11]=o=>c.storeRecord())},{default:i(()=>[m(r(e.$t("add")),1)]),_:1})):C("",!0)]),default:i(()=>[l(k,{ref:"modalRef",model:a.modal.data,name:"Organization","label-col":{span:8},"wrapper-col":{span:16},autocomplete:"off",rules:a.rules,"validate-messages":a.validateMessages},{default:i(()=>[l(n,{label:e.$t("category"),name:"category"},{default:i(()=>[l(R,{value:a.modal.data.category,"onUpdate:value":t[1]||(t[1]=o=>a.modal.data.category=o),options:v.competitionScoreCategories},null,8,["value","options"])]),_:1},8,["label"]),l(n,{label:e.$t("title"),name:"title"},{default:i(()=>[l(s,{value:a.modal.data.title,"onUpdate:value":t[2]||(t[2]=o=>a.modal.data.title=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_first"),name:"first"},{default:i(()=>[l(s,{value:a.modal.data.first,"onUpdate:value":t[3]||(t[3]=o=>a.modal.data.first=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_second"),name:"second"},{default:i(()=>[l(s,{value:a.modal.data.second,"onUpdate:value":t[4]||(t[4]=o=>a.modal.data.second=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_third"),name:"third"},{default:i(()=>[l(s,{value:a.modal.data.third,"onUpdate:value":t[5]||(t[5]=o=>a.modal.data.third=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_fifth"),name:"fifth"},{default:i(()=>[l(s,{value:a.modal.data.fifth,"onUpdate:value":t[6]||(t[6]=o=>a.modal.data.fifth=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_seventh"),name:"seventh"},{default:i(()=>[l(s,{value:a.modal.data.seventh,"onUpdate:value":t[7]||(t[7]=o=>a.modal.data.seventh=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_advance"),name:"advance"},{default:i(()=>[l(s,{value:a.modal.data.advance,"onUpdate:value":t[8]||(t[8]=o=>a.modal.data.advance=o)},null,8,["value"])]),_:1},8,["label"]),l(n,{label:e.$t("competition_score_participate"),name:"participate"},{default:i(()=>[l(s,{value:a.modal.data.participate,"onUpdate:value":t[9]||(t[9]=o=>a.modal.data.participate=o)},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["model","rules","validate-messages"])]),_:1},8,["visible","title"])]),_:1})}const P=U(O,[["render",B]]);export{P as default};
