import{m as N,A as D}from"./audio1.9c7a2142.js";import{r as _,C as H,A as R,g as V}from"./math.d1a4c968.js";import{_ as E,r,k as F,m as $,b as j,o as q,c as O,h as T,d as h,n as x,p as W,j as Y}from"./index.0dba685e.js";const z=i=>(W("data-v-76b954f2"),i=i(),Y(),i),G=x(" \u795E\u5723\u7684\u5C4E Your suck browser does not support the "),J=z(()=>h("code",null,"audio",-1)),K=x(" element. "),L=[G,J,K],Q=["width","height"],U={__name:"MusicCircle",setup(i){const v=r();let p=null,m=!1,a=null;const o=r(),g=r(),s=r(0),n=r(0),A=256,k=10,S=50,I=.3;let u=[],d=!1;const y=F();$(()=>y.mainHeight,()=>{w()}),j(()=>{w()});function w(){o.value.src=N;const{width:e}=v.value.getBoundingClientRect(),t=y.mainHeight-50;s.value=e,n.value=t,a=g.value.getContext("2d"),a.fillStyle="#2d3436",a.fillRect(0,0,s.value,n.value),M()}function M(){u=[];for(let e=0;e<A;e++){const t=_(k,S),f=_(0,s.value),c=_(0,n.value),l="#fff",b=new H(a,f,c,t,l);u.push(b)}}function C(){if(!d)return;a.fillStyle="#2d3436",a.fillRect(0,0,s.value,n.value);let e=p.getAudioData();const{max:t,avg:f}=V(e);u.forEach((c,l)=>{c.fillStyle=`hsl(${parseInt(e[l]/t*360)},${e[l]/f*100+"%"},50%)`,c.r=parseInt(e[l]*I),c.draw()}),window.requestAnimationFrame(C)}function B(){o.value.play(),d=!0,m||(p=new R(o.value),m=!0),C()}function P(){o.value.pause(),d=!1}return(e,t)=>(q(),O("div",{class:"con",ref_key:"con",ref:v},[T(D,{class:"audioControl",showStop:!1,showForward:!1,showBackward:!1,onPlay:B,onPause:P}),h("audio",{ref_key:"audio",ref:o,crossOrigin:"anonymous"},L,512),h("canvas",{ref_key:"canvas",ref:g,width:s.value,height:n.value},null,8,Q)],512))}};var ae=E(U,[["__scopeId","data-v-76b954f2"]]);export{ae as default};
