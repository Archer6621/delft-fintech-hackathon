"use strict";(globalThis["webpackChunkhackathon"]=globalThis["webpackChunkhackathon"]||[]).push([[984],{7293:(e,t,i)=>{i.d(t,{Z:()=>f});var r=i(9835),a=i(6970);const s={style:{width:"100%"}},n={key:0,style:{width:"100%","background-color":"rgba(0, 0, 0, 0.5)"},class:"text-center text-h2 text-white font-mot q-pa-md"},u={key:0},o={key:1},c=(0,r._)("br",null,null,-1),l={key:1,class:"text-center"};function d(e,t,i,d,m,p){return(0,r.wg)(),(0,r.iD)("div",s,[m.currentTime?((0,r.wg)(),(0,r.iD)("div",n,[p.days?((0,r.wg)(),(0,r.iD)("span",u,(0,a.zw)(p.days),1)):(0,r.kq)("",!0),(0,r.Uk)(":"),p.hours?((0,r.wg)(),(0,r.iD)("span",o,(0,a.zw)(this.formatTime(p.hours))+":",1)):(0,r.kq)("",!0),(0,r._)("span",null,(0,a.zw)(this.formatTime(p.minutes))+":"+(0,a.zw)(this.formatTime(p.seconds)),1),c])):(0,r.kq)("",!0),m.currentTime?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",l,"Time's Up!"))])}const m={props:{deadline:{type:String,required:!0},speed:{type:Number,default:1e3}},data(){return{currentTime:Date.parse(this.deadline)-Date.parse(new Date)}},mounted(){setTimeout(this.countdown,1e3)},computed:{seconds(){return Math.floor(this.currentTime/1e3%60)},minutes(){return Math.floor(this.currentTime/1e3/60%60)},hours(){return Math.floor(this.currentTime/36e5%24)},days(){return Math.floor(this.currentTime/864e5)}},methods:{countdown(){this.currentTime=Date.parse(this.deadline)-Date.parse(new Date),this.currentTime>0?setTimeout(this.countdown,this.speed):this.currentTime=null},formatTime(e){return e=JSON.parse(JSON.stringify(e)),e<10?"0"+e:e}}};var p=i(1639);const h=(0,p.Z)(m,[["render",d]]),f=h},5984:(e,t,i)=>{i.r(t),i.d(t,{default:()=>T});var r=i(9835);const a=e=>((0,r.dD)("data-v-09b6700b"),e=e(),(0,r.Cn)(),e),s={class:"row"},n=a((()=>(0,r._)("p",{class:"text-h4 text-white q-pb-xl"},"Launching soon...",-1))),u={class:"row justify-center full-width q-pa-md q-my-lg"},o={class:"col-12 col-md-4 bg-white faded"};function c(e,t,i,a,c,l){const d=(0,r.up)("MyTimer"),m=(0,r.up)("q-btn"),p=(0,r.up)("q-input"),h=(0,r.up)("q-parallax"),f=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[(0,r._)("div",s,[(0,r.Wm)(h,{height:850,src:"building.jpg"},{default:(0,r.w5)((()=>[n,(0,r.Wm)(d,{deadline:"15/05/2024"}),(0,r._)("div",u,[(0,r._)("div",o,[(0,r.Wm)(p,{color:"black",dense:"",label:"Email",filled:""},{after:(0,r.w5)((()=>[(0,r.Wm)(m,{onClick:l.subscribe,color:"positive",dense:"",flat:"",icon:"fas fa-check"},null,8,["onClick"])])),_:1})])])])),_:1})])])),_:1})}var l=i(7293);const d={data(){return{adjs:["create","develop","design"],features:[{title:"Fast",icon:"fas fa-rocket",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"},{title:"Fast",icon:"fas fa-rocket",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"},{title:"Fast",icon:"fas fa-rocket",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate ex earum soluta accusantium id corrupti sit deserunt dolorem ut, eius, numquam illo perferendis, reiciendis tempore quis at libero laudantium?"}]}},components:{MyTimer:l.Z},methods:{subscribe(){}}};var m=i(1639),p=i(9885),h=i(591),f=i(6867),w=i(7065),b=i(9984),g=i.n(b);const k=(0,m.Z)(d,[["render",c],["__scopeId","data-v-09b6700b"]]),T=k;g()(d,"components",{QPage:p.Z,QParallax:h.Z,QInput:f.Z,QBtn:w.Z})}}]);