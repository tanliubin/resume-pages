import{k as e,l as a,d as l,U as s,o as u,c as d,w as r,m as t,n,v as o,s as i,r as c,p as m,i as p,q as v,t as f,u as b,x as h,y as _,P as g,I as x}from"./index.e5502ad2.js";import{_ as y,a as k,b as C,c as V}from"./uni-forms.ee70c354.js";import{a as j,b as N,c as w}from"./index.1bc34e95.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";var B=q({__name:"index",setup(q){const B=e({realName:null,phoneNum:null,idCard:null,job:null,openid:null,checked:!1}),U={realName:[{required:!0,message:"请填写姓名"}],phoneNum:[{required:!0,message:"请填写电话"},{pattern:g,message:"请填写正确的电话"}],idCard:[{required:!0,message:"请填写身份证"},{pattern:x,message:"请填写正确的身份证"}],job:[{required:!0,message:"请填写就业意向岗位"}],checked:[{required:!0,message:"请阅读并同意《重庆就业局职业介绍服务协议》"}]},E=e(!1),I=async()=>{await o(B.value,U)&&(E.value=!0,N(B.value).then((({data:e})=>{const a=l(s);a.idCard=e,i(s,a),c({url:"/pages/index/success"})})).finally((()=>{E.value=!1})))},z=e([]);j().then((e=>{z.value=e.data.map((e=>({name:e.jobName,value:e.id})))}));return a((()=>{const e=l(s);B.value.openid=e.openid,B.value.token=e.token})),(e,a)=>{const l=m,s=p,o=v(f("uni-easyinput"),V),i=v(f("uni-forms-item"),y),c=b,g=v(f("uni-forms"),k),x=v(f("uni-icons"),C),j=h,N=_;return u(),d(s,{class:"bg-primary pb-20 min-h-screen"},{default:r((()=>[t(l,{src:"/mypage/ticket/assets/quan1-min.7d46f68a.png",class:"w-screen -mt-1",mode:"widthFix"}),t(s,{class:"m-5 -my-16 relative -top-1 bg-[#e5f1ff] rounded-[40rpx]"},{default:r((()=>[t(s,{class:"text-center p-5 font-semibold"},{default:r((()=>[n("请填写以下信息后领取职业介绍券")])),_:1}),t(s,{class:"px-4 pb-10"},{default:r((()=>[t(g,{"label-position":"top",modelValue:B.value},{default:r((()=>[t(i,{label:"姓名"},{default:r((()=>[t(o,{modelValue:B.value.realName,"onUpdate:modelValue":a[0]||(a[0]=e=>B.value.realName=e),type:"text",inputBorder:!1,clearable:!1},null,8,["modelValue"])])),_:1}),t(i,{label:"电话"},{default:r((()=>[t(o,{modelValue:B.value.phoneNum,"onUpdate:modelValue":a[1]||(a[1]=e=>B.value.phoneNum=e),type:"number",inputBorder:!1,clearable:!1},null,8,["modelValue"])])),_:1}),t(i,{label:"身份证"},{default:r((()=>[t(o,{modelValue:B.value.idCard,"onUpdate:modelValue":a[2]||(a[2]=e=>B.value.idCard=e),type:"idcard",inputBorder:!1,clearable:!1,onBlur:a[3]||(a[3]=e=>(async e=>{await w({idCard:e})})(B.value.idCard))},null,8,["modelValue"])])),_:1}),t(i,{label:"就业意向岗位","label-width":"200"},{default:r((()=>[t(c,{range:z.value,"range-key":"name",onChange:a[4]||(a[4]=e=>B.value.job=z.value[e.detail.value].value)},{default:r((()=>{var e;return[t(o,{value:null==(e=z.value.find((e=>e.value===B.value.job)))?void 0:e.name,placeholder:"请选择",inputBorder:!1,suffixIcon:"forward",clear:!1,disabled:""},null,8,["value"])]})),_:1},8,["range"])])),_:1})])),_:1},8,["modelValue"]),t(s,{class:"flex items-center pt-8 pb-4",onClick:a[5]||(a[5]=e=>B.value.checked=!B.value.checked)},{default:r((()=>[B.value.checked?(u(),d(x,{key:1,type:"checkbox-filled",size:"24",color:"#254ED3",class:"mr-1"})):(u(),d(x,{key:0,type:"circle",size:"24",color:"#254ED3",class:"mr-1"})),t(s,{class:"text-[24rpx]"},{default:r((()=>[n(" 我已阅读并同意 "),t(j,{class:"text-[#008CE9]"},{default:r((()=>[n("《重庆就业局职业介绍服务协议》")])),_:1})])),_:1})])),_:1}),t(N,{loading:E.value,class:"bg-primary rounded-full text-white text-sm py-3","hover-class":"hover",onClick:I},{default:r((()=>[n(" 领取职业介绍券 ")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-1d994c80"]]);export{B as default};
