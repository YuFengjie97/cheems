import{_ as p,r as f,o as h,c as g,w as a,v as e,d as t}from"./index.051872fd.js";var _="https://yufengjie97.github.io/cheems/assets/houtui.4a03eb37.svg",d="https://yufengjie97.github.io/cheems/assets/bofang.8674e47a.svg",v="https://yufengjie97.github.io/cheems/assets/zanting.a3da3082.svg",m="https://yufengjie97.github.io/cheems/assets/tingzhi.b8a7fdb5.svg",w="https://yufengjie97.github.io/cheems/assets/kuaijin.855f2fcd.svg";const b={class:"con"},y={__name:"index",props:{showStop:{type:Boolean,default:!0},showForward:{type:Boolean,default:!0},showBackward:{type:Boolean,default:!0}},emits:["backward","play","pause","stop","forward"],setup(i,{emit:s}){const o=f(!1);function c(){s("backward")}function n(){s("forward")}function r(){o.value=!0,s("play")}function u(){o.value=!1,s("pause")}function l(){s("stop")}return(k,j)=>(h(),g("div",b,[a(t("img",{class:"houtui",onClick:c,src:_},null,512),[[e,i.showBackward]]),a(t("img",{class:"bofang",onClick:r,src:d},null,512),[[e,!o.value]]),a(t("img",{class:"zanting",onClick:u,src:v},null,512),[[e,o.value]]),a(t("img",{class:"tingzhi",onClick:l,src:m},null,512),[[e,i.showStop]]),a(t("img",{class:"kuaijin",onClick:n,src:w},null,512),[[e,i.showForward]])]))}};var x=p(y,[["__scopeId","data-v-74ff0a9c"]]),C="https://yufengjie97.github.io/cheems/assets/circles.bc4f1fc8.mp3";export{x as A,C as m};