"use strict";function easeInQuad(e){return e*e}const N=100,xs=Array.from({length:N},(()=>Math.random())),ys=Array.from({length:N},((e,t)=>easeInQuad(t/N)));let tBee=0;const cloverPic={value:0x15f762f0734dbbd8256072e4b4d420cn,width:9,height:9,cardinality:3,palette:[,3716964,11006064]},beePic={value:0x555007f7507fddd1df7757fddd07f75005550019a90069a4005140n,width:11,height:10,cardinality:4,palette:[,1711148,7598071,16764277]};function decodeBitmapBigInt(e,t,i,a,n){a=BigInt(a);for(let h=0;h<i;++h)for(let i=0;i<t;++i)n(i,h,Number(e%a)),e/=a}function paint(e,t,i,a){const{value:n,width:h,height:r,cardinality:d,palette:l}=e;decodeBitmapBigInt(n,h,r,d,((e,n,h)=>{c.fillStyle=`#${l[h]?.toString(16).padStart(6,"0")??"0000"}`,c.fillRect(t+a*e,i+a*n,a,a)}))}let tPrev=0;function render(e){requestAnimationFrame(render);let t=e-tPrev;tPrev=e,c.fillStyle="#333c57",c.fillRect(0,0,a.width,a.height);for(let e=0;e<N;++e)(xs[e]-=5e-4*t*(.1+.9*ys[e]))<0&&(xs[e]+=1),paint(cloverPic,0|xs[e]*(a.width+120)-60,0|ys[e]*(a.height-60)+10,0|2+5*ys[e]);tBee+=.001*t,tBee>2*Math.PI&&(tBee-=2*Math.PI),paint(beePic,0|.5*a.width-22,0|(.5+.1*Math.sin(tBee))*a.height-20,4),paint(beePic,0|.44*a.width-16,0|(.5+.1*Math.sin(tBee-.2))*a.height-15,3),paint(beePic,0|.39*a.width-16,0|(.5+.1*Math.sin(tBee-.4))*a.height-15,3),paint(beePic,0|(.35-.01)*a.width-16,0|(.5+.1*Math.sin(tBee-.6))*a.height-15,3)}requestAnimationFrame(render);