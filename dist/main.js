!function(e){function a(i){if(n[i])return n[i].exports;var t=n[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var n={};return a.m=e,a.c=n,a.p="./dist/",a(0)}([function(e,a,n){var i=n(1).up,t=!0,o=["images/page1/suspend.png","images/page1/bg.jpg","images/page1/play.png","images/page1/suspend.png","images/page1/title1.png","images/page1/title2.png","images/page1/arrow.png","images/wrong.png","images/logo.png","images/page7/shan-lin-left.png","images/page7/shan-line-right.png","images/page7/close.png","images/page7/title1-2.png","images/page7/title2-1.png","images/page7/title2-3.png","images/page7/title3-1.png","images/page7/title3-2.png","images/page7/title4-1.png","images/page7/title4-3.png","images/page7/title5-1.png","images/page7/title5-2.png","images/page7/title1.png","images/page7/zhongzhi.png","images/page7/zhongzhi-active.png","images/page7/liutong.png","images/page7/liutong-active.png","images/page7/lingshou.png","images/page7/lingshou-active.png","images/page7/jiagong.png","images/page7/jiagong-active.png","images/page7/jiance.png","images/page7/jiance-active.png","images/page2/guang.png","images/page2/title.png","images/page2/title2-1.png","images/page2/title2-2.png","images/page2/title3-2.png","images/page2/title3-1.png","images/page2/title3-3.png","images/shuye.png","images/lvye.png","images/everyday/1.png","images/everyday/2.png","images/everyday/3.png","images/everyday/4.png","images/everyday/5.png","images/everyday/6.png","images/everyday/7.png","images/everyday/8.png","images/everyday/9.png","images/everyday/10.png","images/everyday/11.png","images/en.png","images/page3/title1-1.png","images/page3/title1-2.png","images/page3/title2.png","images/page3/title3-1.png","images/page3/title3-2.png","images/yun.png","images/page4/title1-1.png","images/page4/title1-2.png","images/page4/title2.png","images/page4/title3-1.png","images/page4/title3-2.png","images/page5/title1-1.png","images/page5/title1-2.png","images/page5/title2.png","images/page5/title3-1.png","images/page5/title3-2.png","images/page6/title1-1.png","images/page6/title1-3.png","images/page6/title2-3.png","images/page6/title3-2.png","images/page6/title4.png","images/page6/title5-1.png","images/page6/title5-2.png","images/page6/title5-3.png","images/page8/guang.png","images/page8/bg2.jpg","images/page8/dili.png","images/page8/zhiwei.png","images/page8/title1.png","images/page8/title2.png","images/page8/lv-logo.png","images/layer/jiance/1.jpg","images/layer/jiance/2.jpg","images/layer/jiagong/1.jpg","images/layer/jiagong/2.jpg","images/layer/lingshou/1.jpg","images/layer/lingshou/2.jpg","images/layer/liutong/1.jpg","images/layer/liutong/2.jpg","images/layer/liutong/3.jpg","images/layer/zhongzhi/1.jpg","images/layer/zhongzhi/2.jpg","images/layer/zhongzhi/3.jpg","dist/5e2e136b4141cc9b039d1e05572dc524.jpg","dist/6aef0f3595e4a5a74427cbf73b86b46c.png","dist/7cecc3047342e754472919f10ad52445.jpg","dist/8c27f739c2c8ea961df9005b303706ae.jpg","dist/8f06b206a83ee6f85ba25082d3cbb798.jpg","dist/28c1fee189db923b2cc050aca19a9867.png","dist/34aa08d26ff4feec4531ab63ec7b76f2.jpg","dist/62a48dc0a3a2db0ffb7e90ca368e4055.jpg","dist/63f57da784eb1407ab2531e81b0070d7.jpg","dist/96bb4081972efe7dc267846a91e78cb7.jpg","dist/187a6f0bcb0314147138388cefc2383c.jpg","dist/984e69fa12b45bf3e624443c960b8e98.jpg","dist/3446dafb4b5455e0f0389aaf53218cf5.jpg","dist/7756dc2756d44ee7a2bf340a4fa85f38.jpg","dist/327396db2178dc4019fa4b02aebe7054.jpg","dist/8272495c25f0e029cb2be4c7e6cbb5fe.jpg","dist/f4ba3d1413f4b5f813a6ad18ec2313c3.jpg","dist/f7f66d93b686221e681922d259a18a23.jpg","dist/fd00533fb962948bdf436d8e612b686c.png"];$("#audio-cls").on("load",function(){this.play()}),i.loading(o,function(){$("#num span").text("100%"),$(".loading-content .line").css("width","100%"),setTimeout(function(){t=!1,$(".loading-content").hide(),$(".content").show(),setTimeout(function(){$("body").trigger("loaded")},200)},300)},function(e){$("#num span").text(e+"%"),$(".loading-content .line").css("width",e+"%")}),$(function(){function e(){var e,a=document.createElement("surface"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(void 0!==a.style[e])return n[e]}function a(){var e,a=document.createElement("surface"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==a.style[e])return n[e]}function n(e,n,t){var o=a();b++,o&&$(".page_"+t+" ."+e.classStr)[0].addEventListener(o,function(){y++,i(),$(".page_"+t+" ."+n.classStr).css("transition-duration",n.time).addClass(n.classStr+"-transition"),$(".page_"+t+" ."+e.classStr)[0].removeEventListener(o,arguments.callee,!1)})}function i(){if(b===y){b=0,y=1,h=!0;var e=f.pageNow;e>1?(o(e-1),o(e+1)):o(e+1)}}function o(e){var a=f["page"+e];for(var n in a)if("lineTransition"==n)for(var i=a[n],t=0;t<=i.length-1;t++){var o=i[t];$(".page_"+e+" ."+o.classStr).removeClass(o.classStr+"-transition").css({"animation-duration":"inherit","transition-duration":"inherit"})}else{var o=a[n];if($(".page_"+e+" ."+o.classStr).removeClass(o.animationName).removeClass(o.animationName+"-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),"bgAnimation"==n){var s=$(".page_"+e+" .bg"),g=$(".page_"+e+" .ren-bg");if(9==e){var r=$(".page_"+e+" .bgg");r.removeClass("animated").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_9 .guang").hide();for(var m=0;m<f.bgAnimationArr.length;m++)r.removeClass(f.bgAnimationArr[m])}s.removeClass("animated").css({"animation-duration":"inherit","transition-duration":"inherit"}),g.removeClass("animated").css({"animation-duration":"inherit","transition-duration":"inherit"});for(var m=0;m<f.bgAnimationArr.length;m++)s.removeClass(f.bgAnimationArr[m]),g.removeClass(f.bgAnimationArr[m])}"sanluoTransition"==n&&($(".page_"+e+" .lvye").removeAttr("style").removeClass("lvye-transition"),$(".new-page .sanluo").removeClass("fade-out Zindex").removeAttr("style"),$(".new-page .logo").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").show(),$(".new-page .new-page-bg").removeClass("fade-in").removeAttr("style"),$(".new-page .diqiu-dong").hide(),$(".new-page .btn-content").removeClass("Zindex"),$(".new-page .btn1").removeClass("fade-in").removeAttr("style")),$(".page_"+e+" .shuye").removeClass("fade-in").removeClass(o.classStr+"-transition").css({"animation-duration":"inherit",opacity:"0"})}$(".page_"+e+" .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_"+e+" .num").each(function(e){$(this).text($(this).attr("data-num-start"))}),f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content").hide(),$(".video-content").hide(),$(".page_"+e+" .shuye .lvye-img").removeClass("scale-enlarge").css({"animation-duration":"inherit"}),7==e&&$(".page_7 .guding-img").removeAttr("style"),9==e&&($(".page_9 .page-content-bg").removeClass("fade-in"),$(".page_9 .bg2").removeClass("fade-in"),$(".page_9 .logo").removeClass("fade-out logo-img-transition"),$(".page_9 .lv-logo-img").removeClass("fade-in lv-logo-img-transition").css({opacity:"0","z-index":"1"}))}function s(a,n,t,o){var s=e();b++,s&&$(a)[0].addEventListener(s,function(){if("titleAnimation"==t){var e=0,g=$(a).find(".num").length;$(a).find(".num").each(function(){e++;var a=$(this).attr("data-id"),n=$(this).attr("data-num-decima"),i=$(this).attr("data-num-time"),t=$(this).attr("data-num-start"),s=$(this).attr("data-num-end"),r=new CountUp(a,t,s,n,i,f.options);r.error||r.start(function(){e==g&&($($(".page_"+o+" ."+f.shuyeOut.classStr)[0]).css("opacity","1"),$($(".page_"+o+" ."+f.shuyeOut.classStr)[0]).find(".lvye-img").css("animation-duration",f.shuyeOut.animationTime).addClass(f.shuyeOut.animationName))})})}if("bgAnimation"==t){if(y++,i(),$(a)&&$(a).next().length>0&&$(a).next().css("animation-duration",n.animationTime).addClass(n.animationName),7==o){var r=$(".page_7 .page-content .title .label")[n.num];$(r)&&$(r).length>0&&$(r).css("animation-duration","1s").addClass("fade-in")}n.renClass&&!function(e,a){setTimeout(function(){$(e)&&$(e).next().length>0&&$(e).next().find(".ren-bg").css("animation-duration",a.renAnimationTime).addClass(a.renAnimationName)},3500)}(a,n)}else 7===o&&"titleAnimation"===t?(y++,i()):(y++,i(),"titleAnimation"!==t&&$(a)&&$(a).next().length>0&&$(a).next().css("animation-duration",n.animationTime).addClass(n.animationName));$(a)[0].removeEventListener(s,arguments.callee,!1)})}function g(){$(".music-oper").on("click",function(e){var a=document.getElementById("audio-cls");null!==a&&(a.paused?(a.play(),$(this).removeClass("suspend")):(a.pause(),$(this).addClass("suspend")))}),$("body .layer-content").on("click",".close-img",function(e,a){$(".btn").removeClass("active"),f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content").hide(),a?($(".page_8 .title1").show(),$(".page_8 .top-logo").show()):($(".page_8 .title1").show().css({opacity:1,"z-index":99}),$(".page_8 .top-logo").show().find(".logo").css({opacity:1,"z-index":99}))}),$("body .new-page").on("click",".btn",function(e){e.stopPropagation(),$(".page_8 .title1").hide(),$(".page_8 .top-logo").hide(),$(".new-page .sanluo").removeClass("fade-out Zindex").removeAttr("style"),$(".new-page .logo").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").removeClass("fade-in").removeAttr("style"),$(".btn").removeClass("active"),$(this).addClass("active");var a=$(this).attr("data-type");$(".layer-content .text").text(f.layerData[a].text);for(var n=f.layerData[a].imgs,i="",t=0;t<n.length;t++)i+="<div class='swiper-slide'><img src = '"+n[t]+"' /></div>";f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content .swiper-wrapper").html(i),$(".layer-content").show(),f.mySwiper=new Swiper(".swiper-container",{loop:!0,effect:"fade",centeredSlides:!0,autoplay:2e3,autoplayDisableOnInteraction:!1})})}function r(){var e=document.getElementById("audio-cls"),a=function(){try{e.play().catch(function(e){}),document.removeEventListener("touchstart",a,!1)}catch(e){}};a(),document.addEventListener("WeixinJSBridgeReady",function(){a()},!1),document.addEventListener("YixinJSBridgeReady",function(){a()},!1),document.addEventListener("touchstart",a,!1),e.addEventListener("canplay",function(){a()}),document.addEventListener("DOMContentLoaded",function(){function a(){e.play()}a()})}function m(e){var a=f["page"+e].lineTransition;$(".page_"+e+" ."+a[0].classStr).css("transition-duration",a[0].time).addClass(a[0].classStr+"-transition");for(var i=0;i<a.length-1;i++)n(a[i],a[i+1],e)}function l(){d()}function p(){var n=e(),i=(a(),f.pageNow);if(i>=2&&i<=7){var t=$(".page_"+i+" .bg-content .bg");t.length<3?n&&$(".page_"+i+" .en-img").length>0&&$(".page_"+i+" .en-img")[0].addEventListener(n,function(){$(".page_"+i+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(n,arguments.callee,!1)}):n&&$(t[t.length-1])[0].addEventListener(n,function(){$(".page_"+i+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(n,arguments.callee,!1)})}if(8==i){var o=$(".page_"+i+" .btn-oper");n&&$(o[o.length-1])[0].addEventListener(n,function(){$(".page_"+i+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(n,arguments.callee,!1)})}9==i&&n&&$(".page_9 .logo-img")[0].addEventListener(n,function(){$(".page_"+f.pageNow+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(n,arguments.callee,!1)})}function d(){p(),b=0,y=1,h=!1;var n=f["page"+f.pageNow],i=a(),t=e(),o=f.pageNow;for(var g in n)switch(g){case"logoAnimation":var r=$(".page_"+f.pageNow+" .line"),l=n.logoAnimation,o=f.pageNow;t&&$(r[r.length-1])[0].addEventListener(t,function(){$(".page_"+o+" .logo").css("animation-duration",l.animationTime).addClass(l.animationName),this.removeEventListener(t,arguments.callee,!1)});break;case"bihuaAnimation":var o=f.pageNow;9==o?($(".page_"+o+" .page-content-bg").css("animation-duration","1s").addClass("fade-in"),t&&$(".page_"+o+" .page-content-bg")[0].addEventListener(t,function(){$($(".page_"+f.pageNow+" ."+n.bihuaAnimation.classStr)[0]).css("animation-duration",n.bihuaAnimation.animationTime).addClass(n.bihuaAnimation.animationName),$(".page_"+f.pageNow+" ."+n.bihuaAnimation.classStr).each(function(){s(this,n.bihuaAnimation),this.removeEventListener(t,arguments.callee,!1)}),this.removeEventListener(t,arguments.callee,!1)})):($($(".page_"+f.pageNow+" ."+n.bihuaAnimation.classStr)[0]).css("animation-duration",n.bihuaAnimation.animationTime).addClass(n.bihuaAnimation.animationName),$(".page_"+f.pageNow+" ."+n.bihuaAnimation.classStr).each(function(){s(this,n.bihuaAnimation)}));break;case"titleAnimation":if(o<=6&&o>1||9==o){var d=$(".page_"+o+" ."+n.bihuaAnimation.classStr);t&&$(d[d.length-1])[0].addEventListener(t,function(){$($(".page_"+o+" ."+n.titleAnimation.classStr)).css("animation-duration",n.titleAnimation.animationTime).addClass(n.titleAnimation.animationName),$(".page_"+o+" ."+n.titleAnimation.classStr).each(function(){s(this,n.titleAnimation,"titleAnimation",o)}),this.removeEventListener(t,arguments.callee,!1)})}7==o&&($($(".page_"+o+" ."+n.titleAnimation.classStr)[0]).css("animation-duration",n.titleAnimation.animationTime).addClass(n.titleAnimation.animationName),$(".page_"+o+" ."+n.titleAnimation.classStr).each(function(){s(this,n.titleAnimation,"titleAnimation",o)})),1==o&&$(".page_"+o+" ."+n.titleAnimation.classStr).each(function(){s(this,n.titleAnimation,"titleAnimation",o)});break;case"bgAnimation":var o=f.pageNow,c=n.bgAnimation;if(c.length>0){$(".page_"+o+" ."+c[0].classStr).css("animation-duration",n.bgAnimation[0].animationTime).addClass(n.bgAnimation[0].animationName),9==o&&$(".page_9 .guang").show();for(var u=0;u<c.length-1;u++)s($(".page_"+o+" ."+c[u].classStr),c[u+1],"bgAnimation",o)}break;case"lineTransition":if(!n.bgAnimation){var o=f.pageNow;m(o);break}var v=$(".page_"+f.pageNow+" ."+n.titleAnimation.classStr);if(!v&&v.length<=0)break;var o=f.pageNow;t&&$(v[v.length-1])[0].addEventListener(t,function(){m(o),this.removeEventListener(t,arguments.callee,!1)});break;case"sanluoTransition":setTimeout(function(){$(".new-page .sanluo").addClass("Zindex"),$(".new-page .sanluo .lvye").css("opacity","1").addClass("lvye-transition")},1100);break;case"btnAnimation":i&&$(".page_8 .lvye5")[0].addEventListener(i,function(){$(".new-page .sanluo").addClass("fade-out").css("animation-duration","1s"),$(".new-page .logo").addClass("fade-in").css("animation-duration","1s"),$(".new-page .title1").addClass("fade-in").css("animation-duration","1s"),setTimeout(function(){$(".new-page .new-page-bg").addClass("fade-in").css("animation-duration","1s"),$(".new-page .btn-content").addClass("Zindex"),setTimeout(function(){$(".new-page .diqiu-dong").show(),$(".new-page .btn1").addClass("fade-in").css("animation-duration",f.page8.btnAnimation.animationTime),$(".page_8 ."+f.page8.btnAnimation.classStr).each(function(){s(this,f.page8.btnAnimation,"btnAnimation",f.pageNow)})})},1050),this.removeEventListener(i,arguments.callee,!1)})}}function c(e){var a,n=u(e);if("Object"===n)a={};else{if("Array"!==n)return e;a=[]}for(var i in e){var t=e[i];"Object"==u(t)?a[i]=arguments.callee(t):"Array"==u(t)?a[i]=arguments.callee(t):a[i]=e[i]}return a}function u(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}$("body").on("loaded",function(){m(f.pageNow),A.bindTouchEvent()});var f={page9AnimationType:!1,options:{useEasing:!0,useGrouping:!1,separator:",",decimal:"."},page7Type:!1,page9Type:!1,loadingTimeer:null,currentPosition:0,pageNow:1,points:document.querySelectorAll(".page"),page1:{lineTransition:[{classStr:"test1",time:"0.5s"},{classStr:"title2",time:"0.5s"},{classStr:"arrow-content",time:"0.8s"}]},page2:{bgAnimation:[{classStr:"bg1",animationName:"zoomIn animated",animationTime:"4s"},{classStr:"bg2",animationName:"zoomOutFadeIn animated",animationTime:"4s"}],bihuaAnimation:{classStr:"bihua",animationName:"fade-in",animationTime:"0.05s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"0.8s"}},page7:{bgAnimation:[{classStr:"bg1",animationName:"fadeIn animated",animationTime:"1.5s",num:1},{classStr:"bg2",animationName:"fadeIn animated",animationTime:"1.5s",num:1},{classStr:"bg3",animationName:"fadeIn animated",animationTime:"1.5s",num:2},{classStr:"bg4",animationName:"fadeIn animated",animationTime:"1s",num:3},{classStr:"bg5",animationName:"fadeIn animated",animationTime:"1s",num:4}],titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"0.6s"},titleOutAnimation:{classStr:"page-content",animationName:"fade-out",animationTime:"0.6s"},lineTransition:[{classStr:"line",time:"0.6s"}]},page8:{sanluoTransition:{classStr:"lvye",animationTime:"0.6s"},btnAnimation:{classStr:"btn-oper",animationName:"fade-in",animationTime:"0.8s"}},shuyeOut:{classStr:"shuye",showClassStr:"lvye",animationName:"scale-enlarge",animationTime:"1s"},layerData:{zhongzhi:{imgs:["images/layer/zhongzhi/1.jpg","images/layer/zhongzhi/2.jpg","images/layer/zhongzhi/3.jpg"],text:"地利集团运营的种植育苗基地为位于贵州大方，种苗温室使用面积超过32000平方米，迄今为止已经免费为当地农户提供优质种苗超过1300万株。引入以色列农业种植专家团队，组建并培育专业种苗技术人员，使种植蔬菜技术趋于专业化、规范化。"},liutong:{imgs:["images/layer/liutong/1.jpg","images/layer/liutong/2.jpg","images/layer/liutong/3.jpg"],text:"地利集团在东北、华东、西南地区拥有18家农副产品物流园，分别位于哈尔滨、长春、沈阳、齐齐哈尔、牡丹江、寿光、杭州、成都、贵阳等核心城市，并运营30多个各类型功能仓储中心，年交易额近1500亿元。"},lingshou:{imgs:["images/layer/lingshou/1.jpg","images/layer/lingshou/2.jpg"],text:"地利生鲜是一家全国性的专业生鲜零售连锁企业，目前在东北、华北、西南地区拥有近500家终端门店，总经营面积超过50万平方米，是东北地区规模最大的社区生鲜连锁超市品牌。"},jiagong:{imgs:["images/layer/jiagong/1.jpg","images/layer/jiagong/2.jpg"],text:"地利集团拥有十大加工厂，21条生产线，占地面积超8000平方米，平均每月生产250万公斤自产食品，包括中式主食、西式糕点、熟食以及其他粗加工农产品，提供给地利生鲜位全国的门店。"},jiance:{imgs:["images/layer/jiance/1.jpg","images/layer/jiance/2.jpg"],text:"地利集团在每个大型农副产品物流园设置检验检测中心，并在零售渠道引入地区综合能力最强的第三方专业检测机构，在食品溯源管理等方面展开全面合作，对所有食品在存储、加工、物流环节全品类全时段全流程进行安全检测。"}},mySwiper:null,page9:{bgAnimation:[{classStr:"bg1",animationName:"zoomIn animated",animationTime:"4s"}],bihuaAnimation:{classStr:"bihua",animationName:"fade-in",animationTime:"0.05s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"0.8s"},logoAnimation:{classStr:"logo",animationName:"fade-in",animationTime:"0.5s"}},bgAnimationArr:["zoomIn","fadeIn","zoomOutIn","zoomOutFadeIn","Zoom"]};f.page3=c(f.page2),f.page4=c(f.page2),f.page5=c(f.page2),f.page6=c(f.page2),f.page3.bgAnimation=[{classStr:"bg2",animationName:"zoomIn animated",animationTime:"3s"},{classStr:"bg4",animationName:"zoomOutFadeIn animated",animationTime:"4s",renClass:"ren-bg",renAnimationName:"Zoom animated",renAnimationTime:"10s"}],f.page4.bgAnimation=[{classStr:"bg1",animationName:"zoomIn animated",animationTime:"3s"},{classStr:"bg2",animationName:"zoomOutFadeIn animated",animationTime:"4s"}],f.page5.bgAnimation=[{classStr:"bg1",animationName:"zoomIn animated",animationTime:"3s"},{classStr:"bg2",animationName:"zoomOutFadeIn animated",animationTime:"4s",renClass:"ren-bg",renAnimationName:"Zoom animated",renAnimationTime:"10s"}],f.page6.bgAnimation=[{classStr:"bg1",animationName:"zoomIn animated",animationTime:"3s"},{classStr:"bg2",animationName:"zoomOutFadeIn animated",animationTime:"4s",renClass:"ren-bg",renAnimationName:"Zoom animated",renAnimationTime:"10s"}],window.parms=f;var v={resetAttr:function(e){e.css({left:window.screen.width})},init:function(e){this.move($(e))},move:function(e){var a=this;e.animate({left:-e.width()},2e4,"Linear",function(){a.resetAttr(e),a.move(e)})}};v.init(".page_4 .yun"),setTimeout(function(){v.init(".page_5 .yun")},1200),window.resetAnimationCss=o,g(),r();var h=!1,b=0,y=0;window.parms=f;var w=!0,A={transform:function(e){this.style.webkitTransform="translate3d(0, "+e+"px,  0)",f.currentPosition=e,w=!0},bindTouchEvent:function(){var n,i=document.querySelector(".content"),o=window.innerHeight,s=o*(f.points.length-1),g="top",r=!1;i.addEventListener("touchstart",function(e){if(1===e.touches.length||w){var a=e.touches[0];n=a.pageY,i.style.webkitTransition="",r=!1,w=!1}}.bind(this),!1),i.addEventListener("touchmove",function(e){if(e.preventDefault(),!w){var a=e.touches[0],i=a.pageY-n;r=!0,g=i>0?"bottom":"top"}}.bind(this),!1),i.addEventListener("touchend",function(n){if(t)return!1;var m=0;if(r&&!w){var p=e();a();if(0==f.currentPosition&&"bottom"===g)return w=!0,!1;if(!h)return!1;if($(".close-img").trigger("click","trigger"),7==f.pageNow&&"top"===g){$(".page_7").find("."+f.page7.titleOutAnimation.classStr).css("animation-duration",f.page7.titleOutAnimation.animationTime).addClass(f.page7.titleOutAnimation.animationName);var d=this;return p&&$(".page_"+f.pageNow+" ."+f.page7.titleOutAnimation.classStr)[0].addEventListener(p,function(){$(".guding-img").show().css("opacity","1"),i.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?f.currentPosition-o:f.currentPosition+o,f.pageNow=Math.round(Math.abs(m)/o)+1,d.transform.call(i,m),setTimeout(function(){$(".guodu-img").show(),$(".guding-img").css("opacity","0").hide(),l()},400),this.removeEventListener(p,arguments.callee,!1)}),!1}if(9==f.pageNow&&"bottom"===g&&f.page9Type)return!!f.page9AnimationType&&($(".page_9 .fade-in").removeAttr("style").removeClass("fade-in").removeClass("logo-img-transition"),$(".page_9 .lv-logo-img").removeAttr("style").removeClass("lv-logo-img-transition"),$(".page_9 .logo-img").removeAttr("style").removeClass("logo-img-transition"),l(),f.page9Type=!1,!1);if(9==f.pageNow&&"top"===g&&!f.page9Type)return f.page9AnimationType=!1,$(".video-content").hide(),f.page9Type=!0,f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content").hide(),$(".page_9 .guang").hide(),$(".page_9 .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_9 .logo-img").removeAttr("style").addClass("logo-img-transition").css("animation-duration","1s"),setTimeout(function(){$(".page_9 .logo-img").removeClass("fade-in").css("opacity","0"),$(".page_9 .lv-logo-img").css({opacity:"1","z-index":"99"}),$(".page_9 .bg2").addClass("fade-in").css("animation-duration","2s")},2100),p&&$(".page_9 .bg2")[0].addEventListener(p,function(){$(".page_9 .page-content-bg").removeClass("fade-in").removeAttr("style"),$(".page_9 .page-content .fade-in").removeClass("fade-in").removeAttr("style"),$(".page_9 .logo-img").removeClass("fade-in").removeAttr("style"),$(".page_9 .bg-content .zoomIn").removeClass("zoomIn animated").removeAttr("style"),f.page9AnimationType=!0,this.removeEventListener(p,arguments.callee,!1)}),!1;if(-f.currentPosition==s&&"top"===g)return w=!0,!1;if(f.pageNow<=6&&f.pageNow>1&&"top"===g){var d=(f.pageNow,this);setTimeout(function(){i.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?f.currentPosition-o:f.currentPosition+o,f.pageNow=Math.round(Math.abs(m)/o)+1,d.transform.call(i,m),l()},100)}else 7==f.pageNow&&"bottom"===g&&(f.page7Type=!1),9==f.pageNow&&"bottom"===g&&(f.page7Type=!1,f.page9Type=!1),i.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?f.currentPosition-o:f.currentPosition+o,f.pageNow=Math.round(Math.abs(m)/o)+1,this.transform.call(i,m),l()}}.bind(this),!1)}}})},function(e,a){var n={},i={};n.up=i,i.loading=function(e,a,n){var i=0,t=e,o=t.length,s=function(){for(var e=0;e<o;e++){var s=new Image;s.error=s.onload=function(){if(i++,$(this).remove(),i===o)a&&a();else{var e=parseInt(100*(i/o).toFixed(2));n&&n(e)}},s.src=t[e]}};s()},i.runAnimateList=function(e){var a=e.baseTime||0,n=e.list,i=n.length,t=0,o=function(){var e=n[t].animateTime+a;return n[t].callback&&n[t].callback(n[t].node),t>=i-1?void clearTimeout(o.timer):(t++,void(o.timer=setTimeout(arguments.callee,e)))};o()};var t=window.innerHeight,o=window.innerWidth;i.setBackgroundSize=function(e){$.each(e,function(e,a){var n=a.node,i=a.imgW,s=a.imgH,g=s/i,r=t/o;g>r?n.css({backgroundSize:o+"px auto"}):n.css({backgroundSize:"auto "+t+"px"})})},i.setRatio=function(e,a){var n=a/e,i=t/o;return n>i?o/e:t/a},i.setPosition=function(e,a){for(var n in e){var i=e[n],t={width:i.w*a,height:i.h*a,backgroundSize:i.w*a},o={left:i.l,top:i.t,right:i.r,bottom:i.b};$.each(o,function(e,n){void 0!==n&&(t[e]=n*a)}),$("."+n).css(t)}},i.swipe=function(e,a){var n=0,i=0,t=0,o=0,s=320;document.addEventListener("touchstart",function(e){n=e.touches[0].pageX,i=e.touches[0].pageY}),document.addEventListener("touchmove",function(e){e.preventDefault()}),document.addEventListener("touchend",function(g){t=g.changedTouches[0].pageX,o=g.changedTouches[0].pageY;var r=t-n,m=o-i;if(!(Math.abs(r)<.3*s&&Math.abs(m)<.3*s))switch(e){case"down":Math.abs(r)<Math.abs(m)&&m>0&&a&&a(g);break;case"up":Math.abs(r)<Math.abs(m)&&m<=0&&a&&a(g);break;case"right":Math.abs(r)>=Math.abs(m)&&r>0&&a&&a(g);break;case"left":Math.abs(r)>=Math.abs(m)&&r<=0&&a&&a(g)}})},e.exports=n}]);
//# sourceMappingURL=main.js.map?v=02b7dd88