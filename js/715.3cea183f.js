"use strict";(self["webpackChunkvue_template"]=self["webpackChunkvue_template"]||[]).push([[715],{4715:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var n=e(3396);const r=(0,n._)("br",null,null,-1),o=(0,n._)("br",null,null,-1),l={class:"d-flex align-items-center mb-3"},a=(0,n._)("h3",null,'v-slot="{ setFieldError, setErrors }"：',-1),c=["onClick"],u=["onClick"],i=(0,n._)("div",{class:"d-flex align-items-center mb-3"},[(0,n._)("h3",null,"使用 actions.setFieldError、actions.setErrors 設定錯誤回饋："),(0,n._)("button",{class:"btn btn-sm btn-secondary px-2"}," 設定錯誤 ")],-1);var m={name:"initialErrors",setup(t){function s(t,s){s.setFieldError("email","該信箱已被使用!"),s.setErrors({password:"有人已經擁有該密碼"})}function e(){const t=document.querySelector("#email"),s=document.querySelector("#password");t.focus(),t.blur(),s.focus(),s.blur()}return(t,m)=>{const b=(0,n.up)("VField"),d=(0,n.up)("ErrorMessage"),p=(0,n.up)("VForm");return(0,n.wg)(),(0,n.j4)(p,{class:"mx-3",onSubmit:s},{default:(0,n.w5)((({setFieldError:t,setErrors:s})=>[(0,n.Wm)(b,{class:"form-control",name:"email",id:"email"}),(0,n.Wm)(d,{name:"email"}),r,(0,n.Wm)(b,{class:"form-control",name:"password",id:"password"}),(0,n.Wm)(d,{name:"password"}),o,(0,n._)("div",l,[a,(0,n._)("button",{type:"button",class:"btn btn-sm btn-secondary me-1 px-2",onClick:s=>t("email","該信箱已被使用")}," 設定單個錯誤回饋 ",8,c),(0,n._)("button",{type:"button",class:"btn btn-sm btn-secondary px-2",onClick:t=>s({email:"該信箱已被使用",password:"有人已經擁有該密碼"})}," 設定多個錯誤回饋 ",8,u)]),i,(0,n._)("button",{type:"button",class:"btn btn-secondary d-block mx-auto px-2 py-1",onClick:e}," 清除回饋 ")])),_:1})}}};const b=m;var d=b}}]);
//# sourceMappingURL=715.3cea183f.js.map