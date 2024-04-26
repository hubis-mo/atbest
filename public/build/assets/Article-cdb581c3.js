import{O as D}from"./OrganizationLayout-e59c3130.js";import{C as E,_ as v,a as O}from"./ImageUploadAdapter-1b833612.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{i as r,o as u,c as k,w as o,a as d,t as c,b as l,f as g,e as y,d as _,h as R,F as T}from"./app-78468d3b.js";import"./DropdownLink-c7da729b.js";import"./TeamOutlined-f908f4bf.js";import"./PieChartOutlined-7a16d42c.js";import"./FormOutlined-55ddf1ad.js";const N={components:{OrganizationLayout:D,ckeditor:E.component,UploadAdapter:v},props:["classifies","articleCategories","article","articles"],data(){return{medias:[],selectedMedia:null,isDrawerVisible:!1,dateFormat:"YYYY-MM-DD",editor:O,editorData:"<p>Content of the editor.</p>",editorConfig:{extraPlugins:[function(t){t.plugins.get("FileRepository").createUploadAdapter=e=>new v(e)}]},rules:{category_code:{required:!0},classify_id:{required:!0},title_en:{required:!0}},validateMessages:{required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"},number:{range:"${label} must be between ${min} and ${max}"}},labelCol:{style:{width:"150px"}}}},created(){},mounted(){},methods:{createRecord(){this.modal.data={},this.modal.mode="CREATE",this.modal.title="Create",this.modal.isOpen=!0},editRecord(t){this.modal.data={...t},this.modal.mode="EDIT",this.modal.isOpen=!0},deleteConfirmed(t){this.$inertia.delete(route("manage.articles.destroy",t.id),{onSuccess:e=>{console.log(e)},onError:e=>{console.log(e)}})},createLogin(t){console.log("create login"+t)},uploader(t){t.plugins.get("FileRepository").createUploadAdapter=e=>new v(e)},onFinish(t){console.log(t),this.article.id?this.$inertia.put(route("manage.articles.update",this.article.id),t,{onSuccess:e=>{this.modal.data={},this.modal.isOpen=!1,console.log(e)},onError:e=>{console.log(e)}}):(console.log("create"),this.$inertia.post(route("manage.articles.store"),t,{onSuccess:e=>{this.modal.data={},this.modal.isOpen=!1},onError:e=>{console.log(e)}}))},afterVisibleChange(t){t&&axios.get(route("manage.medias",22)).then(e=>{this.medias=e.data})},selectMedia(t){this.selectedMedia=t,console.log(this.selectedMedia)},addToArticle(t){var e=this.editor.view.state.selection;console.log(e),console.log(this.selectedMedia)},ckEditorFocusOut(t){console.log("focus out"),console.log(t)},getCursor(){var t=this.$refs.editorRef.modelValue;console.log(t);var e=this.$refs.editorRef.instance;console.log(e)}}},q={class:"font-semibold text-xl text-gray-800 leading-tight"},B={class:"container mx-auto pt-5"},L={class:"bg-white relative shadow rounded-lg overflow-x-auto p-5"},S={class:"flex flex-row item-center justify-center"},Y=d("p",null,"Article CAN NOT be delete if published.",-1),z={class:"h-max-48 overflow-auto"},j=["onClick"],I={key:0},K=["src"],P=["src"];function G(t,e,i,H,n,m){const f=r("a-button"),w=r("a-select"),s=r("a-form-item"),b=r("a-input"),V=r("ckeditor"),h=r("a-date-picker"),p=r("a-switch"),C=r("a-col"),F=r("a-row"),M=r("a-form"),U=r("a-drawer"),A=r("OrganizationLayout");return u(),k(A,{title:"Dashboard"},{header:o(()=>[d("h2",q,c(t.$t("articles")),1)]),default:o(()=>[d("div",null,[l(f,{onClick:e[0]||(e[0]=a=>n.isDrawerVisible=!n.isDrawerVisible),type:"primary"},{default:o(()=>[g(c(t.$t("images")),1)]),_:1})]),l(f,{onClick:e[1]||(e[1]=a=>m.getCursor())},{default:o(()=>[g(c(t.$t("cursor")),1)]),_:1}),d("div",B,[d("div",L,[l(M,{model:i.article,name:"Teacher",layout:"vertical",autocomplete:"off",rules:n.rules,"validate-messages":n.validateMessages,onFinish:m.onFinish},{default:o(()=>[l(s,{label:t.$t("article_category"),name:"category_code"},{default:o(()=>[l(w,{value:i.article.category_code,"onUpdate:value":e[2]||(e[2]=a=>i.article.category_code=a),options:i.articleCategories},null,8,["value","options"])]),_:1},8,["label"]),l(s,{label:t.$t("title_en"),name:"title_en"},{default:o(()=>[l(b,{value:i.article.title_en,"onUpdate:value":e[3]||(e[3]=a=>i.article.title_en=a)},null,8,["value"])]),_:1},8,["label"]),l(s,{label:t.$t("title_fn"),name:"title_fn"},{default:o(()=>[l(b,{value:i.article.title_fn,"onUpdate:value":e[4]||(e[4]=a=>i.article.title_fn=a)},null,8,["value"])]),_:1},8,["label"]),l(s,{label:t.$t("content"),name:"content_en"},{default:o(()=>[l(V,{ref:"editorRef",editor:n.editor,modelValue:i.article.content_en,"onUpdate:modelValue":e[5]||(e[5]=a=>i.article.content_en=a),config:n.editorConfig,height:300},null,8,["editor","modelValue","config"])]),_:1},8,["label"]),l(s,{label:t.$t("valid_at"),name:"valid_at"},{default:o(()=>[l(h,{value:i.article.valid_at,"onUpdate:value":e[6]||(e[6]=a=>i.article.valid_at=a),format:n.dateFormat,valueFormat:n.dateFormat},null,8,["value","format","valueFormat"])]),_:1},8,["label"]),l(s,{label:t.$t("expired_at"),name:"expired_at"},{default:o(()=>[l(h,{value:i.article.expire_at,"onUpdate:value":e[7]||(e[7]=a=>i.article.expire_at=a),valueFormat:n.dateFormat},null,8,["value","valueFormat"])]),_:1},8,["label"]),l(s,{label:t.$t("url"),name:"url"},{default:o(()=>[l(b,{value:i.article.url,"onUpdate:value":e[8]||(e[8]=a=>i.article.url=a)},null,8,["value"])]),_:1},8,["label"]),l(F,null,{default:o(()=>[l(C,null,{default:o(()=>[l(s,{label:t.$t("published"),name:"published"},{default:o(()=>[l(p,{checked:i.article.published,"onUpdate:checked":e[9]||(e[9]=a=>i.article.published=a),checkedValue:1,unCheckedValue:0,onChange:e[10]||(e[10]=a=>i.article.public=0)},null,8,["checked"])]),_:1},8,["label"])]),_:1}),i.article.published?(u(),k(C,{key:0,class:"pl-10"},{default:o(()=>[l(s,{label:t.$t("public"),name:"public"},{default:o(()=>[l(p,{checked:i.article.public,"onUpdate:checked":e[11]||(e[11]=a=>i.article.public=a),checkedValue:1,unCheckedValue:0},null,8,["checked"])]),_:1},8,["label"])]),_:1})):y("",!0)]),_:1}),d("div",S,[l(f,{type:"primary","html-type":"submit"},{default:o(()=>[g(c(t.$t("submit")),1)]),_:1})])]),_:1},8,["model","rules","validate-messages","onFinish"])]),Y]),l(U,{visible:n.isDrawerVisible,"onUpdate:visible":e[12]||(e[12]=a=>n.isDrawerVisible=a),class:"custom-class",title:"Basic Drawer",placement:"right",onAfterVisibleChange:m.afterVisibleChange},{default:o(()=>[d("div",z,[d("ul",null,[(u(!0),_(T,null,R(n.medias,a=>(u(),_("li",{onClick:J=>m.selectMedia(a)},c(a.file_name),9,j))),256))])]),d("div",null,[n.selectedMedia?(u(),_("div",I,[n.selectedMedia.preview_url?(u(),_("img",{key:0,src:n.selectedMedia.preview_url,width:"100"},null,8,K)):(u(),_("img",{key:1,src:n.selectedMedia.original_url,width:"100"},null,8,P)),l(f,{onClick:m.addToArticle},{default:o(()=>[g(c(t.$t("add")),1)]),_:1},8,["onClick"])])):y("",!0)])]),_:1},8,["visible","onAfterVisibleChange"])]),_:1})}const ae=x(N,[["render",G]]);export{ae as default};
