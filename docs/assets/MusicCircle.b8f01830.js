import{m as B,A as I}from"./circles.4a5ba347.js";import{r as c,C as N,c as P,A as V}from"./math.857d3662.js";import{_ as b,r as n,b as D,o as E,c as F,h as H,d as u,k as f,p as W,j}from"./index.051872fd.js";const q=a=>(W("data-v-e3563dc8"),a=a(),j(),a),O={class:"con"},R=f(" \u795E\u5723\u7684\u5C4E Your suck browser does not support the "),T=q(()=>u("code",null,"audio",-1)),Y=f(" element. "),z=[R,T,Y],G=["width","height"],J={__name:"MusicCircle",setup(a){let d=null,s=null;const o=n(),_=n(),r=n(window.innerWidth-220),l=n(window.innerHeight-50),v=256,w=10,m=50,y=.3,h=[];D(()=>{o.value.src=B,s=_.value.getContext("2d"),C(s)});function C(t){for(let e=0;e<v;e++){const i=c(w,m),k=c(0,r.value),A=c(0,l.value),M=c(P),S=new N(t,k,A,i,M);h.push(S)}}function p(){s.fillStyle="#2d3436",s.fillRect(0,0,r.value,l.value);let t=d.getAudioData();h.forEach((e,i)=>{e.r=t[i]*y,e.draw()}),window.requestAnimationFrame(p)}function x(){o.value.play(),d=new V(o.value),p()}function g(){o.value.pause()}return(t,e)=>(E(),F("div",O,[H(I,{class:"audioControl",showStop:!1,showForward:!1,showBackward:!1,onPlay:x,onPause:g}),u("audio",{ref_key:"audio",ref:o,crossOrigin:"anonymous"},z,512),u("canvas",{ref_key:"canvas",ref:_,width:r.value,height:l.value},null,8,G)]))}};var U=b(J,[["__scopeId","data-v-e3563dc8"]]);export{U as default};
