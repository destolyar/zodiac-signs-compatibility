(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7767)}])},4773:function(e,i,s){"use strict";s.d(i,{i:function(){return o}});var t=s(5893),a=s(6292),n=s.n(a);let o=e=>{let{signInfo:i}=e,{dates:s,imagePath:a,name:o}=i;return(0,t.jsxs)("div",{className:n().container,children:[(0,t.jsx)("img",{className:n().image,src:"./"+a,alt:o}),(0,t.jsx)("h3",{className:n().title,children:o}),(0,t.jsx)("p",{className:n().dates,children:s})]})}},7767:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return j}});var t=s(5893),a=s(4773),n=s(7294),o=s(2379),r=s(1163),c=s(5675),l=s.n(c),m=s(8828),d=s.n(m);let u=()=>(0,t.jsxs)("div",{className:d().container,children:[(0,t.jsx)(l(),{className:d().image,src:"./signs/horoscope.png",alt:"horoscope",width:120,height:120}),(0,t.jsx)("div",{className:d().ldsDualRing}),(0,t.jsx)("p",{})]});var g=s(8385),h=s(9008),p=s.n(h),_=s(542),f=s(5625),x=s.n(f);function j(){let[e,i]=(0,n.useState)(0),[s,c]=(0,n.useState)(0),[l,m]=(0,n.useState)(!1),[d,h]=(0,n.useState)(),f=(0,n.useMemo)(()=>"".concat(g[e].name,"+").concat(g[s].name),[e,s]),j=(0,r.useRouter)(),w=(0,n.useCallback)(()=>{m(!0),_.ZP.event({category:"Astro compatibility",action:"Check compatibility button clicked"}),window.scrollTo({top:0,behavior:"smooth"})},[]);(0,n.useEffect)(()=>{if(l){let e=setTimeout(()=>{j.push("/compatibility/".concat(f))},3e3);return()=>clearTimeout(e)}},[l,j,f]),(0,n.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("my_sign");if(e){let i=g.findIndex(i=>i.name.toLowerCase()===e.toLowerCase());h(i)}else h(0)},[]);let b={1640:{slidesPerView:5.6}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p(),{children:[(0,t.jsx)("title",{children:"Zodiac queer compatibility calculator"}),(0,t.jsx)("meta",{name:"description",content:"Zodiac queer compatibility calculator"}),(0,t.jsx)("meta",{name:"viewport",content:"min-width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,t.jsx)("h1",{className:x().pageTitle,children:"Will it be a match?"}),(0,t.jsx)("main",{className:x().container,children:l?(0,t.jsx)(u,{}):g&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:x().subtitle,children:"Check your zodiac compatibility"}),(0,t.jsx)("h3",{className:x().sliderTitle,children:"Your sign"}),(0,t.jsxs)("section",{className:x().swiperContainer,children:[(0,t.jsx)("div",{className:x().leftBlur}),Number.isInteger(d)&&(0,t.jsx)(o.tq,{height:400,onSlideChange:e=>i(e.realIndex),initialSlide:d,slidesPerView:4,effect:"coverflow",coverflowEffect:{rotate:30,slideShadows:!1,stretch:0,depth:200,modifier:1},centeredSlides:!0,spaceBetween:20,loop:!0,slideToClickedSlide:!0,breakpoints:b,children:g.map(e=>(0,t.jsx)(o.o5,{children:(0,t.jsx)(a.i,{signInfo:e})},e.name))}),(0,t.jsx)("div",{className:x().rightBlur})]}),(0,t.jsx)("span",{className:x().plus,children:"+"}),(0,t.jsx)("h3",{className:x().sliderTitle,children:"Their sign"}),(0,t.jsx)(o.tq,{height:400,onSlideChange:e=>c(e.realIndex),initialSlide:s,slidesPerView:4,centeredSlides:!0,spaceBetween:20,loop:!0,slideToClickedSlide:!0,breakpoints:b,children:g.map(e=>(0,t.jsx)(o.o5,{children:(0,t.jsx)(a.i,{signInfo:e})},e.dates))}),(0,t.jsx)("button",{className:x().submit,onClick:w,children:"Check your compatibility"}),(0,t.jsx)("p",{className:x().description,children:"Looking for the perfect match? Our zodiac partnership compatibility test uses the power of astrology to help you. Discover which zodiac signs are most compatible with yours. Whether you're looking for a romantic partner or just a new friend, our comparison provides valuable insights and advantages to help you make the most of your relationships."})]})})]})}},5625:function(e){e.exports={container:"Home_container__CCFUG",pageTitle:"Home_pageTitle__npWmK",subtitle:"Home_subtitle__Fb0Fc",sliderTitle:"Home_sliderTitle__FirLR",sunIcon:"Home_sunIcon__tRius",plus:"Home_plus__Q3fQ5",description:"Home_description__TOUL9",slider:"Home_slider__uGGVO",submit:"Home_submit__6__70",swiperContainer:"Home_swiperContainer__R3m2_",leftBlur:"Home_leftBlur__f7Q2j"}},8828:function(e){e.exports={container:"Loader_container__qHgvY",image:"Loader_image__o0yAc",rotateRing:"Loader_rotateRing__dum66"}},6292:function(e){e.exports={container:"Sign_container__lwoG8",image:"Sign_image__VoHjV",title:"Sign_title__XgvyC",dates:"Sign_dates__GAO1t"}},8385:function(e){"use strict";e.exports=JSON.parse('[{"name":"Aries","imagePath":"/signs/aries.png","dates":"Mar 21 - Apr 19"},{"name":"Taurus","imagePath":"/signs/taurus.png","dates":"Apr 20 - May 20"},{"name":"Gemini","imagePath":"/signs/gemini.png","dates":"May 21 - Jun 20"},{"name":"Cancer","imagePath":"/signs/cancer.png","dates":"Jun 21 - Jul 22"},{"name":"Leo","imagePath":"/signs/leo.png","dates":"Jul 23 - Aug 22"},{"name":"Virgo","imagePath":"/signs/virgo.png","dates":"Aug 23 - Sep 22"},{"name":"Libra","imagePath":"/signs/libra.png","dates":"Sep 23 - Oct 22"},{"name":"Scorpio","imagePath":"/signs/scorpio.png","dates":"Oct 23 - Nov 21"},{"name":"Sagittarius","imagePath":"/signs/sagittarius.png","dates":"Nov 22 - Dec 21"},{"name":"Capricorn","imagePath":"/signs/capricorn.png","dates":"Dec 22 - Jan 19"},{"name":"Aquarius","imagePath":"/signs/aquarius.png","dates":"Jan 20 - Feb 18"},{"name":"Pisces","imagePath":"/signs/pisces.png","dates":"Feb 19 - Mar 20"}]')}},function(e){e.O(0,[156,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);