var p=Object.defineProperty;var v=(l,e,t)=>e in l?p(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var s=(l,e,t)=>(v(l,typeof e!="symbol"?e+"":e,t),t);import{_ as f,r,b as _,o as h,c as u,d as c,F as d,e as g,t as m}from"./index.0dba685e.js";class y{constructor(e,t,a,i,o,n){s(this,"isDown",!1);s(this,"con",null);s(this,"dataKey","");s(this,"start",[]);s(this,"end",[]);s(this,"area",null);s(this,"selectData",[]);s(this,"conX",0);s(this,"conY",0);s(this,"mousedownCallback",()=>{});s(this,"selectCallback",()=>{});s(this,"mouseupCallback",()=>{});this.con=e,this.con.style.position="relative",this.selectItem=t,this.dataKey=a,i&&(this.mousedownCallback=i),o&&(this.selectCallback=o),n&&(this.mouseupCallback=n),this.mousedown(),this.mousemove(),this.mouseup(),this.mouseleave(),this.initConData()}initConData(){let{x:e,y:t}=this.con.getBoundingClientRect();this.conX=e,this.conY=t}mousedown(){this.con.addEventListener("mousedown",e=>{this.isDown=!0,console.log("mousedown"),this.start=[e.clientX-this.conX,e.clientY-this.conY],this.createArea(),this.mousedownCallback()})}mousemove(){this.con.addEventListener("mousemove",e=>{!this.isDown||(console.log("mousemove"),this.end=[e.clientX-this.conX,e.clientY-this.conY],this.updateArea(),this.select())})}mouseup(){this.con.addEventListener("mouseup",()=>{this.isDown=!1,console.log("mouseup"),this.removeArea(),this.mouseupCallback()})}mouseleave(){this.con.addEventListener("mouseleave",()=>{this.isDown&&(this.isDown=!1,console.log("mouseleave"),this.removeArea(),this.mouseupCallback())})}createArea(){this.area||(this.area=document.createElement("div")),this.area.style.position="absolute",this.area.style.border="1px solid rgb(0,119,255)",this.area.style.background="rgba(0,119,255,0.2)",this.con.appendChild(this.area)}removeArea(){this.area.remove()}updateArea(){let e=Math.min(this.start[0],this.end[0]),t=Math.min(this.start[1],this.end[1]),a=Math.abs(this.end[0]-this.start[0]),i=Math.abs(this.end[1]-this.start[1]);this.area.style.left=`${e}px`,this.area.style.top=`${t}px`,this.area.style.width=`${a}px`,this.area.style.height=`${i}px`}validIntersection(e,t){let a=[e.left,e.top],i=[e.right,e.bottom],o=[t.left,t.top],n=[t.right,t.bottom];return i[1]>o[1]&&a[1]<n[1]&&i[0]>o[0]&&a[0]<n[0]}select(){let e=this.area.getBoundingClientRect();this.selectData=[],this.selectItem.forEach(t=>{let a=t.getBoundingClientRect();this.validIntersection(e,a)?(this.selectData.push(t.dataset[this.dataKey]),t.style.background="#6c5ce7",t.style.color="#fff"):(t.style.background="#fff",t.style.color="#000")}),this.selectCallback()}}const b=["data-id"],D={class:"selectData"},w={__name:"SelectArea",setup(l){const e=r(),t=r("[]");return _(()=>{let a=e.value,i=document.querySelectorAll(".con .item");const o=new y(a,i,"id",()=>{t.value=""},()=>{t.value=`[ ${o.selectData.join(", ")} ]`})}),(a,i)=>(h(),u(d,null,[c("div",{class:"con",ref_key:"con",ref:e},[(h(),u(d,null,g(66,o=>c("div",{class:"item",key:o,"data-id":o},m(o),9,b)),64))],512),c("div",D," selectData:"+m(t.value),1)],64))}};var x=f(w,[["__scopeId","data-v-c08d4082"]]);export{x as default};