!function(e){function a(n){if(i[n])return i[n].exports;var t=i[n]={exports:{},id:n,loaded:!1};return e[n].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var i={};return a.m=e,a.c=i,a.p="./dist/",a(0)}([function(e,a,i){var n=i(1).up;$(function(){function e(){var e,a=document.createElement("surface"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==a.style[e])return i[e]}function a(){var e,a=document.createElement("surface"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==a.style[e])return i[e]}function i(e,i,n){var s=a();y++,s&&$(".page_"+n+" ."+e.classStr)[0].addEventListener(s,function(){w++,t(),$(".page_"+n+" ."+i.classStr).css("transition-duration",i.time).addClass(i.classStr+"-transition"),$(".page_"+n+" ."+e.classStr)[0].removeEventListener(s,arguments.callee,!1)})}function t(){if(y===w){y=0,w=1,b=!0;var e=f.pageNow;e>1?(s(e-1),s(e+1)):s(e+1)}}function s(e){var a=f["page"+e];for(var i in a)if("lineTransition"==i)for(var n=a[i],t=0;t<=n.length-1;t++){var s=n[t];$(".page_"+e+" ."+s.classStr).removeClass(s.classStr+"-transition").css({"animation-duration":"inherit","transition-duration":"inherit"})}else{var s=a[i];if($(".page_"+e+" ."+s.classStr).removeClass(s.animationName).removeClass(s.animationName+"-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),"bgAnimation"==i){var o=$(".page_"+e+" .bg");o.removeClass("animated");for(var g=0;g<f.bgAnimationArr.length;g++)o.removeClass(f.bgAnimationArr[g])}"sanluoTransition"==i&&($(".page_"+e+" .lvye").removeAttr("style").removeClass("lvye-transition"),$(".new-page .sanluo").removeClass("fade-out Zindex").removeAttr("style"),$(".new-page .logo").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").removeClass("fade-in").removeAttr("style"),$(".new-page .title1").show(),$(".new-page .title2").removeClass("fade-in").removeAttr("style"),$(".new-page .new-page-bg").removeClass("fade-in").removeAttr("style"),$(".new-page .btn-content").removeClass("Zindex"),$(".new-page .btn1").removeClass("fade-in").removeAttr("style")),$(".page_"+e+" .shuye").removeClass("fade-in").removeClass(s.classStr+"-transition").css({"animation-duration":"inherit",opacity:"0"})}$(".page_"+e+" .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content").hide(),$(".video-content").hide(),$(".page_"+e+" .shuye .lvye-img").removeClass("scale-enlarge").css({"animation-duration":"inherit"}),7==e&&$(".page_7 .guding-img").removeAttr("style"),8==e&&($(".page_8 .page-content-bg").removeClass("fade-in"),$(".page_8 .bg2").removeClass("fade-in"),$(".page_8 .logo").removeClass("fade-out"),$(".page_8 .lv-logo-img").removeClass("fade-in lv-logo-img-transition").css({opacity:"0","z-index":"1"}))}function o(a,i,n,s){var o=e();y++,o&&$(a)[0].addEventListener(o,function(){"titleAnimation"==n&&$(a).find(".num").each(function(){var e=$(this).attr("data-id"),a=$(this).attr("data-num-decima"),i=$(this).attr("data-num-time"),n=$(this).attr("data-num-start"),t=$(this).attr("data-num-end"),s=new CountUp(e,n,t,a,i,f.options);s.error||s.start()}),"bgAnimation"==n?setTimeout(function(){if(w++,t(),$(a)&&$(a).next().length>0&&$(a).next().css("animation-duration",i.animationTime).addClass(i.animationName),7==s){var e=$(".page_7 .page-content .title .label")[i.num];$(e)&&$(e).length>0&&$(e).css("animation-duration","1s").addClass("fade-in")}},3e3):7===s&&"titleAnimation"===n?(w++,t()):(w++,t(),$(a)&&$(a).next().length>0&&$(a).next().css("animation-duration",i.animationTime).addClass(i.animationName)),$(a)[0].removeEventListener(o,arguments.callee,!1)})}function g(){$(".music-oper").on("click",function(e){var a=document.getElementById("audio-cls");null!==a&&(a.paused?(a.play(),$(this).removeClass("suspend")):(a.pause(),$(this).addClass("suspend")))}),$("body").on("click",".close-img",function(e){f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content").hide()}),$(".close-btn").on("click",function(e){e.stopPropagation(),$(".music-oper").show(),$(".video-content").hide();var a=document.getElementById("video");a.pause()});var e=window.innerHeight,a=window.innerWidth,i=a<e?a:e,n=a<e?e:a,t=720*i/1280;$(".video-content").css({height:t,top:n/2-t/2}),$("body .new-page").on("click",".play-video",function(e){var a=document.getElementById("video"),i=document.getElementById("audio-cls");null!==i&&($(".music-oper").hide().addClass("suspend"),i.pause()),$(".video-content").show(),a.play(),a.webkitRequestFullScreen&&a.webkitRequestFullScreen(),a.mozRequestFullScreen&&a.mozRequestFullScreen(),a.requestFullscreen&&a.requestFullscreen()}),$("body .new-page").on("click",".btn",function(e){e.stopPropagation();var a=$(this).attr("data-type");$(".layer-content .text").text(f.layerData[a].text);for(var i=f.layerData[a].imgs,n="",t=0;t<i.length;t++)n+="<div class='swiper-slide'><img src = '"+i[t]+"' /></div>";$(".layer-content .swiper-wrapper").html(n),$(".layer-content").show(),f.mySwiper=new Swiper(".swiper-container",{loop:!0,effect:"fade",centeredSlides:!0,autoplay:2e3,autoplayDisableOnInteraction:!1})})}function r(){var e=document.getElementById("audio-cls"),a=function(){e.paused&&e.play(),document.removeEventListener("touchstart",a,!1)};a(),document.addEventListener("WeixinJSBridgeReady",function(){a()},!1),document.addEventListener("YixinJSBridgeReady",function(){a()},!1),document.addEventListener("touchstart",a,!1)}function m(e){var a=f["page"+e].lineTransition;$(".page_"+e+" ."+a[0].classStr).css("transition-duration",a[0].time).addClass(a[0].classStr+"-transition");for(var n=0;n<a.length-1;n++)i(a[n],a[n+1],e)}function l(){c()}function p(){var i=e(),n=(a(),f.pageNow);if(n>=2&&n<=7){var t=$(".page_"+n+" .bg-content .bg");t.length<4?i&&$(".page_"+n+" .en-img").length>0&&$(".page_"+n+" .en-img")[0].addEventListener(i,function(){$(".page_"+n+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)}):i&&$(t[t.length-1])[0].addEventListener(i,function(){$(".page_"+n+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)})}if(7==n){var s=$(".page_"+n+" .btn-oper");i&&$(s[s.length-1])[0].addEventListener(i,function(){$(".page_"+n+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)})}8==n&&i&&$(".page_8 .logo-img")[0].addEventListener(i,function(){$(".page_"+f.pageNow+" .arrow-content").css("transition-duration","1s").addClass("arrow-content-transition"),this.removeEventListener(i,arguments.callee,!1)})}function c(){p(),y=0,w=1,b=!1;var i=f["page"+f.pageNow],n=a(),t=e();for(var s in i)switch(s){case"logoAnimation":var g=$(".page_"+f.pageNow+" .line"),r=i.logoAnimation,l=f.pageNow;n&&$(g[g.length-1])[0].addEventListener(n,function(){$(".page_"+l+" .logo").css("animation-duration",r.animationTime).addClass(r.animationName),this.removeEventListener(n,arguments.callee,!1)});break;case"bihuaAnimation":var l=f.pageNow;8==l?($(".page_"+l+" .page-content-bg").css("animation-duration","1s").addClass("fade-in"),t&&$(".page_"+l+" .page-content-bg")[0].addEventListener(t,function(){$(".page_"+l+" .shuye").css("animation-duration","0.2s").addClass("fade-in"),this.removeEventListener(t,arguments.callee,!1)}),t&&$(".page_"+l+" .shuye")[0].addEventListener(t,function(){$($(".page_"+f.pageNow+" ."+i.bihuaAnimation.classStr)[0]).css("animation-duration",i.bihuaAnimation.animationTime).addClass(i.bihuaAnimation.animationName),$(".page_"+f.pageNow+" ."+i.bihuaAnimation.classStr).each(function(){o(this,i.bihuaAnimation),this.removeEventListener(t,arguments.callee,!1)})})):($($(".page_"+f.pageNow+" ."+i.bihuaAnimation.classStr)[0]).css("animation-duration",i.bihuaAnimation.animationTime).addClass(i.bihuaAnimation.animationName),$(".page_"+f.pageNow+" ."+i.bihuaAnimation.classStr).each(function(){o(this,i.bihuaAnimation)}));break;case"titleAnimation":var l=f.pageNow;if(l<=6&&l>1||8==l){var c=$(".page_"+l+" ."+i.bihuaAnimation.classStr);t&&$(c[c.length-1])[0].addEventListener(t,function(){$($(".page_"+l+" ."+i.titleAnimation.classStr)[0]).css("animation-duration",i.titleAnimation.animationTime).addClass(i.titleAnimation.animationName),$(".page_"+l+" ."+i.titleAnimation.classStr).each(function(){o(this,i.titleAnimation,"titleAnimation",l)}),this.removeEventListener(t,arguments.callee,!1)})}7==l&&($($(".page_"+l+" ."+i.titleAnimation.classStr)[0]).css("animation-duration",i.titleAnimation.animationTime).addClass(i.titleAnimation.animationName),$(".page_"+l+" ."+i.titleAnimation.classStr).each(function(){o(this,i.titleAnimation,"titleAnimation",l)}));break;case"bgAnimation":var l=f.pageNow,d=i.bgAnimation;if(d.length>0){setTimeout(function(){$(".page_"+l+" ."+d[0].classStr).css("animation-duration",i.bgAnimation[0].animationTime).addClass(i.bgAnimation[0].animationName),7==l&&$($(".page_7 .page-content .title .label")[1]).css("animation-duration","1s").addClass("fade-in")},3e3);for(var u=0;u<d.length-1;u++)o($(".page_"+l+" ."+d[u].classStr),d[u+1],"bgAnimation",l)}break;case"lineTransition":if(!i.bgAnimation){var l=f.pageNow;m(l);break}var v=$(".page_"+f.pageNow+" ."+i.titleAnimation.classStr);if(!v&&v.length<=0)break;var l=f.pageNow;t&&$(v[v.length-1])[0].addEventListener(t,function(){m(l),this.removeEventListener(t,arguments.callee,!1)})}}function d(e){var a,i=u(e);if("Object"===i)a={};else{if("Array"!==i)return e;a=[]}for(var n in e){var t=e[n];"Object"==u(t)?a[n]=arguments.callee(t):"Array"==u(t)?a[n]=arguments.callee(t):a[n]=e[n]}return a}function u(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)}var v=!0,h=["images/en.png","images/logo.png","images/lvye.png","images/lvye1.png","images/shuye.png","images/wrong.png","images/everyday/1.png","images/everyday/10.png","images/everyday/11.png","images/everyday/2.png","images/everyday/3.png","images/everyday/4.png","images/everyday/5.png","images/everyday/6.png","images/everyday/7.png","images/everyday/8.png","images/everyday/9.png","images/page2/bg1.jpg","images/page2/bg2.jpg","images/page2/bg3.jpg","images/page2/title.png","images/page2/title2-1.png","images/page2/title2-2.png","images/page2/title3-1.png","images/page2/title3-2.png","images/page3/bg1.jpg","images/page3/bg2.jpg","images/page3/bg3.jpg","images/page3/bg4.jpg","images/page3/title1-1.png","images/page3/title1-2.png","images/page3/title2.png","images/page3/title3-1.png","images/page3/title3-2.png","images/page4/bg1.jpg","images/page4/bg2.jpg","images/page4/title1-1.png","images/page4/title1-2.png","images/page4/title2.png","images/page4/title3-1.png","images/page4/title3-2.png","images/page5/bg1.jpg","images/page5/bg2.jpg","images/page5/title1-1.png","images/page5/title1-2.png","images/page5/title2.png","images/page5/title3-1.png","images/page5/title3-2.png","images/page1/arrow.png","images/page1/bg.jpg","images/page1/play.png","images/page1/suspend.png","images/page1/title-en.png","images/page1/title1.png","images/page1/title2.png","images/page8/bg1.jpg","images/page8/bg2.jpg","images/page8/bg3.png","images/page8/dili.png","images/page8/lv-logo.png","images/page8/title1.png","images/page8/title2.png","images/page8/zhiwei.png","images/page7/bg1.jpg","images/page7/bg2.jpg","images/page7/bg3.jpg","images/page7/bg4.jpg","images/page7/bg5.jpg","images/page7/bg6.jpg","images/page7/btn.png","images/page7/close.png","images/page7/jiagong.png","images/page7/jiance.png","images/page7/lingshou.png","images/page7/liutong.png","images/page7/play-video.png","images/page7/title1-1.png","images/page7/title1-2.png","images/page7/title1.png","images/page7/title2-1.png","images/page7/title2-2.png","images/page7/title2-3.png","images/page7/title2.png","images/page7/title3-1.png","images/page7/title3-2.png","images/page7/title4-1.png","images/page7/title4-2.png","images/page7/title4-3.png","images/page7/title5-1.png","images/page7/title5-2.png","images/page7/zhongzhi.png","images/page6/bg2.jpg","images/page6/bg1.jpg","images/page6/title1-2.png","images/page6/title1-1.png","images/page6/title1-3.png","images/page6/title2-2.png","images/page6/title2-3.png","images/page6/title3-1.png","images/page6/title3-2.png","images/page6/title4.png","images/page6/title5-1.png","images/page6/title5-2.png","images/page6/title5-3.png","images/layer/lingshou/1.jpg","images/layer/lingshou/2.jpg","images/layer/jiagong/1.jpg","images/layer/jiagong/2.jpg","images/layer/liutong/1.jpg","images/layer/liutong/2.jpg","images/layer/liutong/3.jpg","images/layer/jiance/1.jpg","images/layer/jiance/2.jpg","images/layer/zhongzhi/1.jpg","images/layer/zhongzhi/2.jpg","images/layer/zhongzhi/3.jpg"];n.loading(h,function(){$("#num span").text("100%"),$(".loading-content .line").css("width","100%"),setTimeout(function(){v=!1,$(".loading-content").hide(),$(".content").show(),setTimeout(function(){m(f.pageNow),A.bindTouchEvent()},200)},300)},function(e){$("#num span").text(e+"%"),$(".loading-content .line").css("width",e+"%")});var f={options:{useEasing:!0,useGrouping:!1,separator:",",decimal:"."},page7Type:!1,page8Type:!1,loadingTimeer:null,currentPosition:0,pageNow:1,points:document.querySelectorAll(".page"),page1:{lineTransition:[{classStr:"title1",time:"2s"},{classStr:"title2",time:"2s"},{classStr:"top-left-line",time:"0.2s"},{classStr:"left-line",time:"0.8s"},{classStr:"bottom-left-line",time:"0.4s"},{classStr:"bottom--right-line",addClassStr:"right-line",time:"0.4s"},{classStr:"right-line",time:"0.8s"},{classStr:"top-right-line",time:"0.3s"},{classStr:"title-en",time:"1s"},{classStr:"arrow-content",time:"1s"}]},page2:{bgAnimation:[{classStr:"bg2",animationName:"fadeIn animated",animationTime:"1s"},{classStr:"bg3",animationName:"zoomIn animated",animationTime:"1s"}],bihuaAnimation:{classStr:"bihua",animationName:"fade-in",animationTime:"0.1s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"1s"},lineTransition:[{classStr:"left-line",time:"0.6s"},{classStr:"bottom-line",time:"1.2s"},{classStr:"right-line",time:"0.8s"},{classStr:"top-line",time:"1s"}],logoAnimation:{classStr:"logo",animationName:"fade-in",animationTime:"0.5s"}},page7:{bgAnimation:[{classStr:"bg2",animationName:"translationRightIn animated",animationTime:"2s",num:1},{classStr:"bg3",animationName:"fadeIn animated",animationTime:"1s",num:2},{classStr:"bg4",animationName:"translationRightIn animated",animationTime:"2s",num:3},{classStr:"bg5",animationName:"fadeIn animated",animationTime:"1s",num:4}],titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"0.6s"},titleOutAnimation:{classStr:"page-content",animationName:"fade-out",animationTime:"0.6s"},sanluoTransition:{classStr:"lvye",animationTime:"1.5s"},lineTransition:[{classStr:"line",time:"0.6s"}],btnAnimation:{classStr:"btn-oper",animationName:"fade-in",animationTime:"0.8s"}},shuyeOut:{classStr:"shuye",showClassStr:"lvye",animationName:"scale-enlarge",animationTime:"1.5s"},layerData:{zhongzhi:{imgs:["images/layer/zhongzhi/1.jpg","images/layer/zhongzhi/2.jpg","images/layer/zhongzhi/3.jpg"],text:"地利集团运营的种植育苗基地为位于贵州大方，种苗温室使用面积超过32000平方米，迄今为止已经免费为当地农户提供优质种苗超过1300万株。引入以色列农业种植专家团队，组建并培育专业种苗技术人员，使种植蔬菜技术趋于专业化、规范化。"},liutong:{imgs:["images/layer/liutong/1.jpg","images/layer/liutong/2.jpg","images/layer/liutong/3.jpg"],text:"地利集团在东北、华东、西南地区拥有18家农副产品物流园，分别位于哈尔滨、长春、沈阳、齐齐哈尔、牡丹江、寿光、杭州、成都、贵阳等核心城市，并运营30多个各类型功能仓储中心，年交易额近3000亿元。"},lingshou:{imgs:["images/layer/lingshou/1.jpg","images/layer/lingshou/2.jpg"],text:"地利生鲜是一家全国性的专业生鲜零售连锁企业，目前在东北、华北、西南地区拥有近500家终端门店，总经营面积超过25万平方米，是东北地区规模最大的社区生鲜连锁超市品牌。"},jiagong:{imgs:["images/layer/jiagong/1.jpg","images/layer/jiagong/2.jpg"],text:"地利集团拥有十大加工厂，21条生产线，占地面积超8000平方米，平均每月生产250万公斤自产食品，包括中式主食、西式糕点、熟食以及其他粗加工农产品，提供给地利生鲜位全国的门店。"},jiance:{imgs:["images/layer/jiance/1.jpg","images/layer/jiance/2.jpg"],text:"地利集团在每个大型农副产品物流园设置检验检测中心，并在零售渠道引入地区综合能力最强的第三方专业检测机构，在食品溯源管理等方面展开全面合作，对所有食品在存储、加工、物流环节全品类全时段全流程进行安全检测。"}},mySwiper:null,page8:{bgAnimation:[],bihuaAnimation:{classStr:"bihua",animationName:"fade-in",animationTime:"0.2s"},titleAnimation:{classStr:"label",animationName:"fade-in",animationTime:"1s"},lineTransition:[{classStr:"left-line",time:"0.6s"},{classStr:"bottom-line",time:"1.2s"},{classStr:"right-line",time:"0.8s"},{classStr:"top-line",time:"1s"},{classStr:"arrow-content",time:"1s"}],logoAnimation:{classStr:"logo",animationName:"fade-in",animationTime:"0.5s"}},bgAnimationArr:["zoomIn","fadeIn","translationRightIn"]};f.page3=d(f.page2),f.page4=d(f.page2),f.page5=d(f.page2),f.page6=d(f.page2),f.page3.bgAnimation=[{classStr:"bg2",animationName:"fadeIn animated",animationTime:"1s"},{classStr:"bg3",animationName:"translationRightIn animated",animationTime:"2s"},{classStr:"bg4",animationName:"fadeIn animated",animationTime:"1s"}],f.page4.bgAnimation=[{classStr:"bg2",animationName:"fadeIn animated",animationTime:"1s"}],f.page5.bgAnimation=[{classStr:"bg2",animationName:"fadeIn animated",animationTime:"1s"}],f.page6.bgAnimation=[{classStr:"bg2",animationName:"fadeIn animated",animationTime:"1s"}],window.resetAnimationCss=s,g(),r();var b=!1,y=0,w=0;window.parms=f;var S=!0,A={transform:function(e){this.style.webkitTransform="translate3d(0, "+e+"px,  0)",f.currentPosition=e,S=!0},bindTouchEvent:function(){var i,n=document.querySelector(".content"),t=window.innerHeight,s=t*(f.points.length-1),g="top",r=!1;n.addEventListener("touchstart",function(e){if(1===e.touches.length||S){var a=e.touches[0];i=a.pageY,n.style.webkitTransition="",r=!1,S=!1}}.bind(this),!1),n.addEventListener("touchmove",function(e){if(e.preventDefault(),!S){var a=e.touches[0],n=a.pageY-i;r=!0,g=n>0?"bottom":"top"}}.bind(this),!1),n.addEventListener("touchend",function(i){if(v)return!1;var m=0;if(r&&!S){var p=e(),c=a();if(0==f.currentPosition&&"bottom"===g)return S=!0,!1;if(!b)return!1;if($(".close-img").trigger("click"),$(".close-btn").trigger("click"),7==f.pageNow&&"top"===g&&!f.page7Type)return $(".page_7 .guding-img").show(),$(".page_7 .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_7").find("."+f.page7.titleOutAnimation.classStr).css("animation-duration",f.page7.titleOutAnimation.animationTime).addClass(f.page7.titleOutAnimation.animationName),f.page7Type=!0,p&&$(".page_"+f.pageNow+" ."+f.page7.titleOutAnimation.classStr)[0].addEventListener(p,function(){$(".new-page .sanluo").addClass("Zindex"),$(".new-page .sanluo .lvye").addClass("lvye-transition"),this.removeEventListener(p,arguments.callee,!1)}),c&&$(".page_7 .lvye5")[0].addEventListener(c,function(){$(".new-page .sanluo").addClass("fade-out").css("animation-duration","1s"),$(".new-page .logo").addClass("fade-in").css("animation-duration","1s"),$(".new-page .title1").addClass("fade-in").css("animation-duration","1s"),setTimeout(function(){$(".new-page .title1").hide(),$(".new-page .title2").addClass("fade-in").css("animation-duration","1s"),$(".new-page .new-page-bg").addClass("fade-in").css("animation-duration","1s"),$(".new-page .btn-content").addClass("Zindex"),$(".new-page .btn1").addClass("fade-in").css("animation-duration",f.page7.btnAnimation.animationTime),$(".page_7 ."+f.page7.btnAnimation.classStr).each(function(){o(this,f.page7.btnAnimation,"btnAnimation",f.pageNow)})},3500),this.removeEventListener(c,arguments.callee,!1)}),!1;if(8==f.pageNow&&"top"===g&&!f.page8Type)return $(".video-content").hide(),f.mySwiper&&f.mySwiper.destroy(!1),$(".layer-content").hide(),$(".page_8 .arrow-content").removeClass("arrow-content-transition").css({"animation-duration":"inherit","transition-duration":"inherit"}),$(".page_8 .logo-img").removeClass("fade-in").css("opacity","0"),$(".page_8 .lv-logo-img").css({opacity:"1","z-index":"99"}).addClass("lv-logo-img-transition").css("animation-duration","1s"),setTimeout(function(){$(".page_8 .bg2").addClass("fade-in").css("animation-duration","2s")},1100),!1;if(-f.currentPosition==s&&"top"===g)return S=!0,!1;if(f.pageNow<=6&&f.pageNow>1&&"top"===g){var d=f.pageNow;$($(".page_"+d+" ."+f.shuyeOut.classStr)[0]).css("opacity","1"),$($(".page_"+d+" ."+f.shuyeOut.classStr)[0]).find(".lvye-img").css("animation-duration",f.shuyeOut.animationTime).addClass(f.shuyeOut.animationName);var u=this;p&&$(".page_"+d+" ."+f.shuyeOut.classStr+" .lvye-img")[0].addEventListener(p,function(){$(".page_"+d+" ."+f.shuyeOut.classStr+" .lvye-img")[0]&&$(".page_"+d+" ."+f.shuyeOut.classStr+" .lvye-img")[0].removeEventListener(p,arguments.callee,!1),setTimeout(function(){n.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?f.currentPosition-t:f.currentPosition+t,f.pageNow=Math.round(Math.abs(m)/t)+1,u.transform.call(n,m),l()},1100)})}else 7==f.pageNow&&"bottom"===g&&(f.page7Type=!1),8==f.pageNow&&"bottom"===g&&(f.page7Type=!1,f.page8Type=!1),n.style.webkitTransition="0.3s ease -webkit-transform",m="top"===g?f.currentPosition-t:f.currentPosition+t,f.pageNow=Math.round(Math.abs(m)/t)+1,this.transform.call(n,m),l()}}.bind(this),!1)}}})},function(e,a){var i={},n={};i.up=n,n.loading=function(e,a,i){var n=0,t=e,s=t.length,o=function(){for(var e=0;e<s;e++){var o=new Image;o.error=o.onload=function(){if(n++,$(this).remove(),n===s)a&&a();else{var e=parseInt(100*(n/s).toFixed(2));i&&i(e)}},o.src=t[e]}};o()},n.runAnimateList=function(e){var a=e.baseTime||0,i=e.list,n=i.length,t=0,s=function(){var e=i[t].animateTime+a;return i[t].callback&&i[t].callback(i[t].node),t>=n-1?void clearTimeout(s.timer):(t++,void(s.timer=setTimeout(arguments.callee,e)))};s()};var t=window.innerHeight,s=window.innerWidth;n.setBackgroundSize=function(e){$.each(e,function(e,a){var i=a.node,n=a.imgW,o=a.imgH,g=o/n,r=t/s;g>r?i.css({backgroundSize:s+"px auto"}):i.css({backgroundSize:"auto "+t+"px"})})},n.setRatio=function(e,a){var i=a/e,n=t/s;return i>n?s/e:t/a},n.setPosition=function(e,a){for(var i in e){var n=e[i],t={width:n.w*a,height:n.h*a,backgroundSize:n.w*a},s={left:n.l,top:n.t,right:n.r,bottom:n.b};$.each(s,function(e,i){void 0!==i&&(t[e]=i*a)}),$("."+i).css(t)}},n.swipe=function(e,a){var i=0,n=0,t=0,s=0,o=320;document.addEventListener("touchstart",function(e){i=e.touches[0].pageX,n=e.touches[0].pageY}),document.addEventListener("touchmove",function(e){e.preventDefault()}),document.addEventListener("touchend",function(g){t=g.changedTouches[0].pageX,s=g.changedTouches[0].pageY;var r=t-i,m=s-n;if(!(Math.abs(r)<.3*o&&Math.abs(m)<.3*o))switch(e){case"down":Math.abs(r)<Math.abs(m)&&m>0&&a&&a(g);break;case"up":Math.abs(r)<Math.abs(m)&&m<=0&&a&&a(g);break;case"right":Math.abs(r)>=Math.abs(m)&&r>0&&a&&a(g);break;case"left":Math.abs(r)>=Math.abs(m)&&r<=0&&a&&a(g)}})},e.exports=i}]);
//# sourceMappingURL=main.js.map