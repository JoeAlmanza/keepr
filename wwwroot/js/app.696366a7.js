(function(e){function t(t){for(var s,o,n=t[0],l=t[1],c=t[2],p=0,d=[];p<n.length;p++)o=n[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},i=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"139f":function(e,t,a){"use strict";var s=a("7316"),r=a.n(s);r.a},"1a8a":function(e,t,a){"use strict";var s=a("b5e8"),r=a.n(s);r.a},"1e6d":function(e,t,a){"use strict";var s=a("23d9"),r=a.n(s);r.a},"23d9":function(e,t,a){},"31ac":function(e,t,a){},"415e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary"},[s("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:{name:"Home"}}},[s("div",{staticClass:"d-flex text-info textShadow"},[s("img",{staticClass:"vaultImg",attrs:{src:a("7f6e"),alt:""}}),s("h1",[e._v("Keepr")])])]),e._m(0),s("div",{staticClass:"collapse navbar-collapse d-flex justify-content-end",attrs:{id:"navbarText"}},[s("span",{staticClass:"navbar-text d-flex p-2"},[s("button",{staticClass:"btn btn-info mr-2 text-dark",on:{click:function(t){return e.$router.push({name:"Profile",params:{id:e.profile.id}})}}},[s("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}})]),e.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:e.logout}},[e._v(" Logout ")]):s("button",{staticClass:"btn btn-success",on:{click:e.login}},[e._v(" Login ")])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler text-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("335d"),c=a("bc3a"),u=a.n(c);let p=location.host.includes("localhost")?"http://localhost:5001/":"/";const d=u.a.create({baseURL:p+"api",timeout:3e3}),m=function(e){d.defaults.headers.authorization=e},v=function(){d.defaults.headers.authorization=""};var f={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(m(this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){v(),await this.$auth.logout({returnTo:window.location.origin})}},computed:{profile(){return this.$store.state.profile}}},h=f,g=(a("1a8a"),a("2877")),b=Object(g["a"])(h,o,n,!1,null,null,null),k=b.exports,w={name:"App",async beforeCreate(){await Object(l["b"])(),this.$auth.isAuthenticated&&(m(this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:k}},y=w,_=(a("5c0b"),Object(g["a"])(y,r,i,!1,null,null,null)),C=_.exports,P=a("8c4f"),K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 p-0 mt-4"},[a("div",{staticClass:"card-columns"},e._l(e.keeps,(function(e){return a("keepComponent",{key:e.id,attrs:{keepProp:e}})})),1)])])])},V=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"keep-component card mt-1 text-light",style:{backgroundImage:"url("+e.keepProp.img+")",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",height:"20vh"}},[a("div",{staticClass:"card-body p-2 linkPointer d-flex flex-row-reverse"},[a("h5",{staticClass:"my-0 textShadow",attrs:{"data-toggle":"modal","data-target":"#"+e.modalId},on:{click:e.setActive}},[e._v(" "+e._s(e.keepProp.name)+" ")])]),a("div",{staticClass:"card-body p-2 text-right d-flex justify-content-end"},[a("i",{staticClass:"fa fa-user-circle-o linkPointer textShadow",attrs:{"aria-hidden":"true"},on:{click:e.viewProfile}})]),a("div",{staticClass:"card-body p-2 text-right d-flex justify-content-end"},[e.profile.id==e.keepProp.creatorId?a("i",{staticClass:"fa fa-trash text-danger p-1 linkPointer d-flex justify-content-end",attrs:{"aria-hidden":"true"},on:{click:e.deleteKeep}}):e._e()]),a("keep-modal",{attrs:{id:e.modalId},scopedSlots:e._u([{key:"body",fn:function(){return[a("keep-details")]},proxy:!0}])})],1)},I=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content",class:e.color},[e._t("body")],2)])])},A=[],O={name:"KeepModal",props:{id:{type:String,required:!0},color:{type:String,default:"bg-white"}}},S=O,T=Object(g["a"])(S,j,A,!1,null,"6d850fd4",null),E=T.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"keep-details"}},[e.keep.id?a("div",{staticClass:"card bg-dark text-light text-center m-0"},[a("img",{staticClass:"card-img-top modalImg",attrs:{src:e.keep.img,alt:""}}),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[a("u",[e._v(e._s(e.keep.name))])]),a("h5",{staticClass:"card-title"},[e._v(e._s(e.keep.description))]),a("p",[e._v("By: "+e._s(e.keep.creator.email))]),a("img",{staticClass:"avatarImg",attrs:{src:e.keep.creator.picture,alt:""}}),a("p",[e._v("Views: "+e._s(e.keep.views)+", Keeps: "+e._s(e.keep.keeps))]),this.$auth.isAuthenticated&&e.keep.vaultKeepId?a("button",{staticClass:"btn btn-danger",on:{click:e.removeVaultKeep}},[e._v(" Remove from Vault ")]):this.$auth.isAuthenticated&&!e.keep.vaultKeepId?a("button",{staticClass:"btn btn-success",on:{click:function(t){e.addToggle=!e.addToggle}}},[e._v(" Add To Vault ")]):e._e()]),e.addToggle?a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.newVaultKeep.vaultId,expression:"newVaultKeep.vaultId"}],staticClass:"custom-select",attrs:{id:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newVaultKeep,"vaultId",t.target.multiple?a:a[0])},e.addVaultKeep]}},e._l(e.vaults,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0)]):e._e()]):e._e()])},D=[],M={name:"keep-details",data(){return{addToggle:!1,newVaultKeep:{}}},watch:{profile:function(e){e.id?this.$store.dispatch("getProfileVaults",this.profile.id):router.push({name:"Home"})}},computed:{profile(){return this.$store.state.profile},keep(){return this.$store.state.activeKeep},vaults(){return this.$store.state.profileVaults}},methods:{addVaultKeep(){this.$store.dispatch("createVaultKeep",{vaultId:this.newVaultKeep.vaultId,keepId:this.keep.id}),this.$router.push({name:"Vault",params:{id:this.newVaultKeep.vaultId}}),$(".modal-backdrop").hide(),$(".modal").hide()},removeVaultKeep(){this.$store.dispatch("removeVaultKeep",{vaultKeepId:this.keep.vaultKeepId,vaultId:this.$route.params.id}),$(".modal-backdrop").hide(),$(".modal").hide()}},components:{}},B=M,R=(a("139f"),Object(g["a"])(B,N,D,!1,null,"1fe00248",null)),z=R.exports,U={name:"keep-component",props:["keepProp"],data(){return{}},computed:{profile(){return this.$store.state.profile},modalId(){return"modal"+this.keepProp.id}},methods:{deleteKeep(){this.$store.dispatch("deleteKeep",this.keepProp.id)},viewProfile(){this.$router.push({name:"Profile",params:{id:this.keepProp.creator.id}})},setActive(){this.$store.dispatch("setActiveKeep",this.keepProp)}},components:{KeepModal:E,KeepDetails:z}},H=U,q=(a("7ee0"),Object(g["a"])(H,x,I,!1,null,"2473927b",null)),L=q.exports,J={name:"home",computed:{profile(){return this.$store.state.profile},keeps(){return this.$store.state.keeps}},mounted(){this.$store.dispatch("getKeeps")},components:{keepComponent:L}},Y=J,G=Object(g["a"])(Y,K,V,!1,null,"238f41f6",null),W=G.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profile container-fluid"},[a("h4",{staticClass:"text-center"},[a("u",[e._v(e._s(e.activeProfile.name)+"'s Profile")])]),a("div",{staticClass:"row my-2 infoRow align-items-center"},[a("div",{staticClass:"col-10 col-md-3 text-center"},[a("img",{staticClass:"avatarImg",attrs:{src:e.activeProfile.picture,alt:""}})]),a("div",{staticClass:"col-10 col-md-7"},[a("h5",[e._v("Name: "+e._s(e.activeProfile.name))]),a("h5",[e._v("Vaults: "+e._s(e.vaults.length))]),a("h5",[e._v("Keeps: "+e._s(e.keeps.length))])])]),a("br"),a("h3",{staticClass:"mt-3"},[a("u",[e._v("Vaults")]),e._v(": "),e.profile.id==e.activeProfile.id?a("i",{staticClass:"fa fa-plus-square text-info linkPointer",attrs:{"aria-hidden":"true","data-toggle":"modal","data-target":"#modalcreateVault"}}):e._e()]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 p-0"},[a("div",{staticClass:"card-columns"},e._l(e.vaults,(function(e){return a("vault-component",{key:e.id,attrs:{vaultProp:e}})})),1)])]),a("h3",[a("u",[e._v("Keeps")]),e._v(": "),e.profile.id==e.activeProfile.id?a("i",{staticClass:"fa fa-plus-square text-info linkPointer",attrs:{"aria-hidden":"true","data-toggle":"modal","data-target":"#modalcreateKeep"}}):e._e()]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 p-0"},[a("div",{staticClass:"card-columns"},e._l(e.keeps,(function(e){return a("keep-component",{key:e.id,attrs:{keepProp:e}})})),1)])]),a("create-modal",{attrs:{id:"modalcreateKeep"},scopedSlots:e._u([{key:"body",fn:function(){return[a("create-keep")]},proxy:!0}])}),a("create-modal",{attrs:{id:"modalcreateVault"},scopedSlots:e._u([{key:"body",fn:function(){return[a("create-vault")]},proxy:!0}])})],1)},Z=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:e.id,tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[a("div",{staticClass:"modal-content",class:e.color},[a("div",{staticClass:"modal-header"},[e._t("header"),e._m(0)],2),e._t("body")],2)])])},Q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],ee={name:"CreateModal",props:{id:{type:String,required:!0},color:{type:String,default:"bg-white"}}},te=ee,ae=Object(g["a"])(te,F,Q,!1,null,"adda40c2",null),se=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create-vault form"},[a("h4",[e._v("Create Vault:")]),a("div",{staticClass:"form-group p-2"},[a("h5",[e._v("Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name..."},domProps:{value:e.newVault.name},on:{input:function(t){t.target.composing||e.$set(e.newVault,"name",t.target.value)}}})]),a("div",{staticClass:"form-group p-2"},[a("h5",[e._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description..."},domProps:{value:e.newVault.description},on:{input:function(t){t.target.composing||e.$set(e.newVault,"description",t.target.value)}}})]),a("div",{staticClass:"form-group p-2"},[a("h5",[e._v("Private?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.isPrivate,expression:"newVault.isPrivate"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.newVault.isPrivate)?e._i(e.newVault.isPrivate,null)>-1:e.newVault.isPrivate},on:{change:function(t){var a=e.newVault.isPrivate,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);s.checked?o<0&&e.$set(e.newVault,"isPrivate",a.concat([i])):o>-1&&e.$set(e.newVault,"isPrivate",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.newVault,"isPrivate",r)}}})]),a("button",{staticClass:"btn btn-success m-2",attrs:{"data-dismiss":"modal"},on:{click:e.createVault}},[e._v(" Create Vault ")])])},ie=[],oe={name:"create-vault",data(){return{newVault:{}}},computed:{},methods:{createVault(){this.$store.dispatch("createVault",this.newVault),this.newVault={}}},components:{}},ne=oe,le=Object(g["a"])(ne,re,ie,!1,null,"c9d72e2c",null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create-keep form"},[a("h4",[e._v("Create Keep:")]),a("div",{staticClass:"form-group p-2"},[a("h5",[e._v("Title:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name..."},domProps:{value:e.newKeep.name},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"name",t.target.value)}}})]),a("div",{staticClass:"form-group p-2"},[a("h5",[e._v("Description:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description..."},domProps:{value:e.newKeep.description},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"description",t.target.value)}}})]),a("div",{staticClass:"form-group p-2"},[a("h5",[e._v("Image URL:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.img,expression:"newKeep.img"}],attrs:{type:"text",placeholder:"IMG Url..."},domProps:{value:e.newKeep.img},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"img",t.target.value)}}})]),a("button",{staticClass:"btn btn-success m-2",attrs:{"data-dismiss":"modal"},on:{click:e.createKeep}},[e._v(" Create Keep ")])])},pe=[],de={name:"create-keep",data(){return{newKeep:{}}},computed:{},methods:{createKeep(){this.$store.dispatch("createKeep",this.newKeep),this.newKeep={}}},components:{}},me=de,ve=Object(g["a"])(me,ue,pe,!1,null,"9e49d204",null),fe=ve.exports,he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vault-component card mt-1 bg-dark text-light"},[e.profile.id==e.vaultProp.creatorId?a("i",{staticClass:"fa fa-times text-danger linkPointer",attrs:{"aria-hidden":"true"},on:{click:e.deleteVault}}):e._e(),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"linkPointer",on:{click:e.viewVault}},[e._v(e._s(e.vaultProp.name))]),a("p",{staticClass:"linkPointer",on:{click:e.viewVault}},[e._v(e._s(e.vaultProp.description))])])])},ge=[],be={name:"vault-component",props:["vaultProp"],data(){return{}},computed:{profile(){return this.$store.state.profile}},methods:{deleteVault(){this.$store.dispatch("deleteVault",this.vaultProp)},viewVault(){return this.vaultProp.isPrivate&&this.vaultProp.creatorId!=this.profile.id||this.$router.push({name:"Vault",params:{id:this.vaultProp.id}}),"This vault is private!"}},components:{}},ke=be,we=(a("b271"),Object(g["a"])(ke,he,ge,!1,null,"3506ea10",null)),ye=we.exports,_e={name:"profile",data(){return{newKeep:{}}},computed:{profile(){return this.$store.state.profile},activeProfile(){return this.$store.state.activeProfile},vaults(){return this.$store.state.profileVaults.filter(e=>e.creatorId==this.activeProfile.id)},keeps(){return this.$store.state.keeps.filter(e=>e.creatorId==this.activeProfile.id)}},mounted(){this.$store.dispatch("getActiveProfile",this.$route.params.id),this.$store.dispatch("getProfileVaults",this.$route.params.id),this.$store.dispatch("getKeeps")},methods:{},components:{keepComponent:L,vaultComponent:ye,CreateModal:se,CreateKeep:fe,CreateVault:ce}},Ce=_e,Pe=(a("1e6d"),Object(g["a"])(Ce,X,Z,!1,null,"5b89fc3d",null)),Ke=Pe.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vault container-fluid"},[e._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-11 p-0"},[a("div",{staticClass:"card-columns"},e._l(e.keeps,(function(e){return a("keep-component",{key:e.id,attrs:{keepProp:e}})})),1)])])])},$e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[a("u",[e._v("Vault Keeps")]),e._v(":")])}],xe={name:"vault",data(){return{}},mounted(){this.$store.dispatch("getVaultKeeps",this.$route.params.id,this.profile)},computed:{profile(){return this.$store.state.profile},keeps(){return this.$store.state.vaultKeeps}},methods:{},components:{keepComponent:L}},Ie=xe,je=Object(g["a"])(Ie,Ve,$e,!1,null,"4c01e4fc",null),Ae=je.exports;s["a"].use(P["a"]);const Oe=[{path:"/",name:"Home",component:W},{path:"/profile/:id",name:"Profile",component:Ke},{path:"/vaults/:id",name:"Vault",component:Ae}],Se=new P["a"]({routes:Oe});var Te=Se,Ee=a("2f62"),Ne=a("ac68"),De=a.n(Ne);class Me{static async confirmAction(e="Are you sure",t="You won't be able to revert this!"){try{let a=await De.a.fire({title:e,text:t,icon:"warning",showCancelButton:!0,confirmButtonColor:"dodgerblue",cancelButtonColor:"crimson",confirmButtonText:"Confirm"});return!!a.value}catch(a){}}static toast(e="Default Toast",t=5e3,a="info"){De.a.fire({title:e,icon:a,timer:t,toast:!0,position:"top-right",showConfirmButton:!1,timerProgressBar:!0})}}s["a"].use(Ee["a"]);var Be=new Ee["a"].Store({state:{profile:{},activeProfile:{},keeps:[],activeKeep:{},profileKeeps:[],vaultKeeps:[],profileVaults:[]},mutations:{setProfile(e,t){e.profile=t},setActiveProfile(e,t){e.activeProfile=t},setKeeps(e,t){e.keeps=t},setActiveKeep(e,t){e.activeKeep=t},setProfileKeeps(e,t){e.profileKeeps=t},setVaultKeeps(e,t){e.vaultKeeps=t},setProfileVaults(e,t){e.profileVaults=t},deleteKeep(e,t){e.keeps=t},deleteVault(e,t){e.profileVaults=t}},actions:{async getProfile({commit:e}){try{let t=await d.get("profiles");e("setProfile",t.data)}catch(t){console.error(t)}},async getActiveProfile({commit:e},t){try{let a=await d.get("profiles/"+t);e("setActiveProfile",a.data)}catch(a){console.error(a)}},async getKeeps({commit:e}){try{let t=await d.get("keeps");e("setKeeps",t.data)}catch(t){console.error(t)}},async setActiveKeep({commit:e},t){try{await d.get("keeps/"+t.id);e("setActiveKeep",t)}catch(a){console.error(a)}},async getProfileKeeps({commit:e},t){try{let a=await d.get("profiles/"+t+"/keeps");e("setProfileKeeps",a.data)}catch(a){console.error(a)}},async getVaultKeeps({commit:e},t){try{let a=await d.get("vaults/"+t+"/keeps");e("setVaultKeeps",a.data)}catch(a){console.error(a)}},async createKeep({dispatch:e},t){try{let a=await d.post("keeps",t);e("getKeeps"),Te.push({name:"Profile",params:{id:a.data.creator.id}}),Me.toast("Created!",2e3,"success")}catch(a){console.error(a)}},async updateKeep({commit:e},t){try{await d.put("keeps/"+t.id,t),e("setActiveKeep",t)}catch(a){console.error(a)}},async createVault({dispatch:e},t){try{let a=await d.post("vaults",t);e("getProfileVaults",a.data.creator.id),Te.push({name:"Profile",params:{id:a.data.creator.id}}),Me.toast("Created!",2e3,"success")}catch(a){}},async createVaultKeep({dispatch:e},t){try{await d.post("vaultkeeps/",t);e("getVaultKeeps",t.vaultId),Me.toast("Saved!",2e3,"success")}catch(a){console.error(a)}},async removeVaultKeep({dispatch:e},t){try{await Me.confirmAction("Are you sure you'd like to remove this keep?")&&(await d.delete("vaultkeeps/"+t.vaultKeepId),e("getVaultKeeps",t.vaultId),Me.toast("Deleted!",2e3,"success"))}catch(a){console.error(a)}},async getProfileVaults({commit:e},t){try{let a=await d.get("profiles/"+t+"/vaults");e("setProfileVaults",a.data)}catch(a){console.error(a)}},async deleteKeep({dispatch:e},t){try{await Me.confirmAction("Are you sure you'd like to delete this keep?")&&(await d.delete("keeps/"+t),e("getKeeps"),Me.toast("Deleted!",2e3,"success"))}catch(a){console.error(a)}},async deleteVault({commit:e},t){try{if(await Me.confirmAction("Are you sure you'd like to delete this vault?")){await d.delete("vaults/"+t.id);let a=await d.get("profiles/"+t.creatorId+"/vaults");e("setProfileVaults",a.data),Me.toast("Deleted!",2e3,"success")}}catch(a){console.error(a)}}}});const Re="joealmanza.us.auth0.com",ze="5UrIwak0Zzx3RaCdClYcslOH5HEX7JzD",Ue="https://keepr.com";s["a"].use(l["a"],{domain:Re,clientId:ze,audience:Ue,onRedirectCallback:e=>{Te.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),new s["a"]({router:Te,store:Be,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},7316:function(e,t,a){},"7ee0":function(e,t,a){"use strict";var s=a("415e"),r=a.n(s);r.a},"7f6e":function(e,t,a){e.exports=a.p+"img/vault.9777706a.png"},"9c0c":function(e,t,a){},b271:function(e,t,a){"use strict";var s=a("31ac"),r=a.n(s);r.a},b5e8:function(e,t,a){}});