var m=Object.defineProperty;var f=(i,e,t)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var s=(i,e,t)=>(f(i,typeof e!="symbol"?e+"":e,t),t);import{_ as v,r,b as _,o as h,c as d,d as c,F as u,e as g,t as p}from"./index.954d8de6.js";class y{constructor(e,t,a,n,o,l){s(this,"isDown",!1);s(this,"con",null);s(this,"dataKey","");s(this,"start",[]);s(this,"end",[]);s(this,"area",null);s(this,"selectData",[]);s(this,"conX",0);s(this,"conY",0);s(this,"mousedownCallback",()=>{});s(this,"selectCallback",()=>{});s(this,"mouseupCallback",()=>{});this.con=e,this.con.style.position="relative",this.selectItem=t,this.dataKey=a,n&&(this.mousedownCallback=n),o&&(this.selectCallback=o),l&&(this.mouseupCallback=l),this.mousedown(),this.mousemove(),this.mouseup(),this.initConData()}initConData(){let{x:e,y:t}=this.con.getBoundingClientRect();this.conX=e,this.conY=t}mousedown(){this.con.addEventListener("mousedown",e=>{this.isDown=!0,console.log("mousedown"),this.start=[e.clientX-this.conX,e.clientY-this.conY],this.createArea(),this.mousedownCallback()})}mousemove(){this.con.addEventListener("mousemove",e=>{!this.isDown||(console.log("mousemove"),this.end=[e.clientX-this.conX,e.clientY-this.conY],this.updateArea(),this.select())})}mouseup(){this.con.addEventListener("mouseup",()=>{this.isDown=!1,console.log("mouseup"),this.removeArea(),this.mouseupCallback()})}createArea(){this.area||(this.area=document.createElement("div")),this.area.style.position="absolute",this.area.style.border="1px solid rgb(0,119,255)",this.area.style.background="rgba(0,119,255,0.2)",this.con.appendChild(this.area)}removeArea(){this.area.remove()}updateArea(){let e=Math.min(this.start[0],this.end[0]),t=Math.min(this.start[1],this.end[1]),a=Math.abs(this.end[0]-this.start[0]),n=Math.abs(this.end[1]-this.start[1]);this.area.style.left=`${e}px`,this.area.style.top=`${t}px`,this.area.style.width=`${a}px`,this.area.style.height=`${n}px`}validIntersection(e,t){let a=[e.left,e.top],n=[e.right,e.bottom],o=[t.left,t.top],l=[t.right,t.bottom];return n[1]>o[1]&&a[1]<l[1]&&n[0]>o[0]&&a[0]<l[0]}select(){let e=this.area.getBoundingClientRect();this.selectData=[],this.selectItem.forEach(t=>{let a=t.getBoundingClientRect();this.validIntersection(e,a)?(this.selectData.push(t.dataset[this.dataKey]),t.style.background="#6c5ce7",t.style.color="#fff"):(t.style.background="#fff",t.style.color="#000")}),this.selectCallback()}}const b=["data-id"],x={class:"selectData"},w={__name:"SelectArea",setup(i){const e=r(),t=r("[]");return _(()=>{let a=e.value,n=document.querySelectorAll(".con .item");const o=new y(a,n,"id",()=>{t.value=""},()=>{t.value=`[ ${o.selectData.join(", ")} ]`})}),(a,n)=>(h(),d(u,null,[c("div",{class:"con",ref_key:"con",ref:e},[(h(),d(u,null,g(66,o=>c("div",{class:"item",key:o,"data-id":o},p(o),9,b)),64))],512),c("div",x," selectData:"+p(t.value),1)],64))}};var C=v(w,[["__scopeId","data-v-7920cfd9"]]);export{C as default};
