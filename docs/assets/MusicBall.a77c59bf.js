import{_ as M,r as u,b as g,o as B,c as b,d as k}from"./index.95aadd8d.js";class A{constructor(s,a,n,i,h,c=0,l=Math.PI*2,r=!0){this.ctx=s,this.x=a,this.y=n,this.r=i,this.fillStyle=h,this.startAngle=c,this.endAngle=l,this.anticlockwise=r,this.isGrow=!1,this.draw()}draw(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle,this.anticlockwise),this.ctx.fillStyle=this.fillStyle,this.ctx.fill()}}const I=["#55efc4","#81ecec","#74b9ff","#a29bfe","#ffeaa7","#fab1a0","#ff7675","#fd79a8"];function o(...e){if(e.length===2)return parseInt(Math.random()*(e[1]-e[0])+e[0]);if(e.length===1){const s=e[0].length;return e[0][parseInt(Math.random()*s)]}}const C={class:"con"},G=["width","height"],S={__name:"MusicBall",setup(e){let s=null;const a=u(),n=u(window.innerWidth-220),i=u(window.innerHeight-50),h=100,c=10,l=50,r=.8,d=[];function v(t){for(let f=0;f<h;f++){const w=o(c,l),x=o(0,n.value),p=o(0,i.value),m=o(I),y=new A(t,x,p,w,m);d.push(y)}}function _(){s.clearRect(0,0,n.value,i.value),d.forEach(t=>{t.isGrow?(t.r+=r,t.r>l&&(t.isGrow=!1)):(t.r-=r,t.r<c&&(t.isGrow=!0)),t.draw()}),window.requestAnimationFrame(_)}return g(()=>{s=a.value.getContext("2d"),v(s),_()}),(t,f)=>(B(),b("div",C,[k("canvas",{ref_key:"canvas",ref:a,width:n.value,height:i.value},null,8,G)]))}};var H=M(S,[["__scopeId","data-v-a2840446"]]);export{H as default};
