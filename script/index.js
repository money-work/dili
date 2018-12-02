// require('./jquery-3.3.1');
// require('./zoom');
var baseApp = require('./baseApp').up;
$(function () {
  // orient();
//用户变化屏幕方向时调用
//   $(window).bind('orientationchange', function (e) {
//     orient();
  // });
  var loadingType = true;
  var cacheList = [
    "images/en.png",
    "images/logo.png",
    "images/lvye.png",
    "images/lvye1.png",
    "images/shuye.png",
    "images/wrong.png",
    "images/everyday/1.png",
    "images/everyday/10.png",
    "images/everyday/11.png",
    "images/everyday/2.png",
    "images/everyday/3.png",
    "images/everyday/4.png",
    "images/everyday/5.png",
    "images/everyday/6.png",
    "images/everyday/7.png",
    "images/everyday/8.png",
    "images/everyday/9.png",
    "images/page2/bg1.jpg",
    "images/page2/bg2.jpg",
    "images/page2/bg3.jpg",
    "images/page2/title.png",
    "images/page2/title2-1.png",
    "images/page2/title2-2.png",
    "images/page2/title3-1.png",
    "images/page2/title3-2.png",
    "images/page3/bg1.jpg",
    "images/page3/bg2.jpg",
    "images/page3/bg3.jpg",
    "images/page3/bg4.jpg",
    "images/page3/title1-1.png",
    "images/page3/title1-2.png",
    "images/page3/title2.png",
    "images/page3/title3-1.png",
    "images/page3/title3-2.png",
    "images/page4/bg1.jpg",
    "images/page4/bg2.jpg",
    "images/page4/title1-1.png",
    "images/page4/title1-2.png",
    "images/page4/title2.png",
    "images/page4/title3-1.png",
    "images/page4/title3-2.png",
    "images/page5/bg1.jpg",
    "images/page5/bg2.jpg",
    "images/page5/title1-1.png",
    "images/page5/title1-2.png",
    "images/page5/title2.png",
    "images/page5/title3-1.png",
    "images/page5/title3-2.png",
    "images/page1/arrow.png",
    "images/page1/bg.jpg",
    "images/page1/play.png",
    "images/page1/suspend.png",
    "images/page1/title-en.png",
    "images/page1/title1.png",
    "images/page1/title2.png",
    "images/page8/bg1.jpg",
    "images/page8/bg2.jpg",
    "images/page8/bg3.png",
    "images/page8/dili.png",
    "images/page8/lv-logo.png",
    "images/page8/title1.png",
    "images/page8/title2.png",
    "images/page8/zhiwei.png",
    "images/page7/bg1.jpg",
    "images/page7/bg2.jpg",
    "images/page7/bg3.jpg",
    "images/page7/bg4.jpg",
    "images/page7/bg5.jpg",
    "images/page7/bg6.jpg",
    "images/page7/btn.png",
    "images/page7/close.png",
    "images/page7/jiagong.png",
    "images/page7/jiance.png",
    "images/page7/lingshou.png",
    "images/page7/liutong.png",
    "images/page7/play-video.png",
    "images/page7/title1-1.png",
    "images/page7/title1-2.png",
    "images/page7/title1.png",
    "images/page7/title2-1.png",
    "images/page7/title2-2.png",
    "images/page7/title2-3.png",
    "images/page7/title2.png",
    "images/page7/title3-1.png",
    "images/page7/title3-2.png",
    "images/page7/title4-1.png",
    "images/page7/title4-2.png",
    "images/page7/title4-3.png",
    "images/page7/title5-1.png",
    "images/page7/title5-2.png",
    "images/page7/zhongzhi.png",
    "images/page6/bg2.jpg",
    "images/page6/bg1.jpg",
    "images/page6/title1-2.png",
    "images/page6/title1-1.png",
    "images/page6/title1-3.png",
    "images/page6/title2-2.png",
    "images/page6/title2-3.png",
    "images/page6/title3-1.png",
    "images/page6/title3-2.png",
    "images/page6/title4.png",
    "images/page6/title5-1.png",
    "images/page6/title5-2.png",
    "images/page6/title5-3.png",
    "images/layer/lingshou/1.jpg",
    "images/layer/lingshou/2.jpg",
    "images/layer/jiagong/1.jpg",
    "images/layer/jiagong/2.jpg",
    "images/layer/liutong/1.jpg",
    "images/layer/liutong/2.jpg",
    "images/layer/liutong/3.jpg",
    "images/layer/jiance/1.jpg",
    "images/layer/jiance/2.jpg",
    "images/layer/zhongzhi/1.jpg",
    "images/layer/zhongzhi/2.jpg",
    "images/layer/zhongzhi/3.jpg"
  ];
  baseApp.loading(cacheList, function () {
    $("#num span").text('100%')
    $('.loading-content .line').css('width', '100%');
    setTimeout(function () {
      loadingType = false;
      $('.loading-content').hide();
      $(".content").show();
      setTimeout(function () {
        addTransitionClass(parms.pageNow);
        app.bindTouchEvent(); // 绑定触摸事件
      }, 200);
    }, 300);


  }, function (progress) {
    $("#num span").text(progress + '%')
    $('.loading-content .line').css('width', progress + '%')
  });
  var parms = {
    options: {
      useEasing: true,
      useGrouping: false,
      separator: ',',
      decimal: '.',
    },
    page7Type: false,
    page8Type: false,
    loadingTimeer: null,// 记录当前页面位置
    currentPosition: 0,
    pageNow: 1,// 当前页码
    points: document.querySelectorAll('.page'), // 页码数
    page1: {
      lineTransition: [
        {
          'classStr': 'title1',
          'time': '2s'
        },
        {
          'classStr': 'title2',
          'time': '2s'
        },
        {
          'classStr': 'top-left-line',
          'time': '0.2s'
        },
        {
          'classStr': 'left-line',
          'time': '0.8s'
        },
        {
          'classStr': 'bottom-left-line',
          'time': '0.4s'
        },
        {
          'classStr': 'bottom--right-line',
          'addClassStr': 'right-line',
          'time': '0.4s'
        },
        {
          'classStr': 'right-line',
          'time': '0.8s'
        },
        {
          'classStr': 'top-right-line',
          'time': '0.3s'
        },
        {
          'classStr': 'title-en',
          'time': '1s'
        },
        {
          'classStr': 'arrow-content',
          'time': '1s'
        }
      ]
    },
    page2: {
      bgAnimation: [
        {
          'classStr': 'bg2',
          'animationName': 'fadeIn animated',
          'animationTime': '1s'
        },
        {
          'classStr': 'bg3',
          'animationName': 'zoomIn animated',
          'animationTime': '1s'
        },
      ],
      bihuaAnimation: {
        'classStr': 'bihua',
        'animationName': 'fade-in',
        'animationTime': '0.1s'
      },
      titleAnimation: {
        'classStr': 'label',
        'animationName': 'fade-in',
        'animationTime': '1s'
      },
      lineTransition: [
        {
          'classStr': 'left-line',
          'time': '0.6s'
        },
        {
          'classStr': 'bottom-line',
          'time': '1.2s'
        },
        {
          'classStr': 'right-line',
          'time': '0.8s'
        },
        {
          'classStr': 'top-line',
          'time': '1s'
        }
      ],
      logoAnimation: {
        'classStr': 'logo',
        'animationName': 'fade-in',
        'animationTime': '0.5s'
      }
    },
    page7: {
      bgAnimation: [
        {
          'classStr': 'bg2',
          'animationName': 'translationRightIn animated',
          'animationTime': '2s',
          'num': 1
        },
        {
          'classStr': 'bg3',
          'animationName': 'fadeIn animated',
          'animationTime': '1s',
          'num': 2
        },
        {
          'classStr': 'bg4',
          'animationName': 'translationRightIn animated',
          'animationTime': '2s',
          'num': 3
        },
        {
          'classStr': 'bg5',
          'animationName': 'fadeIn animated',
          'animationTime': '1s',
          'num': 4
        }
      ],
      titleAnimation: {
        'classStr': 'label',
        'animationName': 'fade-in',
        'animationTime': '0.6s'
      },
      titleOutAnimation: {
        'classStr': 'page-content',
        'animationName': 'fade-out',
        'animationTime': '0.6s'
      },
      sanluoTransition: {
        'classStr': 'lvye',
        'animationTime': '1.5s'
      },

      lineTransition: [
        {
          'classStr': 'line',
          'time': '0.6s'
        }
      ],
      btnAnimation: {
        'classStr': 'btn-oper',
        'animationName': 'fade-in',
        'animationTime': '0.8s'
      }
    },
    shuyeOut: {
      'classStr': 'shuye',
      'showClassStr': 'lvye',
      'animationName': 'scale-enlarge',
      'animationTime': '1.5s'
    },
    layerData: {
      "zhongzhi": {
        imgs: [
          "images/layer/zhongzhi/1.jpg",
          "images/layer/zhongzhi/2.jpg",
          "images/layer/zhongzhi/3.jpg",
        ],
        text: "地利集团运营的种植育苗基地为位于贵州大方，种苗温室使用面积超过32000平方米，迄今为止已经免费为当地农户提供优质种苗超过1300万株。引入以色列农业种植专家团队，组建并培育专业种苗技术人员，使种植蔬菜技术趋于专业化、规范化。"
      },
      "liutong": {
        imgs: [
          "images/layer/liutong/1.jpg",
          "images/layer/liutong/2.jpg",
          "images/layer/liutong/3.jpg",
        ],
        text: "地利集团在东北、华东、西南地区拥有18家农副产品物流园，分别位于哈尔滨、长春、沈阳、齐齐哈尔、牡丹江、寿光、杭州、成都、贵阳等核心城市，并运营30多个各类型功能仓储中心，年交易额近3000亿元。"
      },
      "lingshou": {
        imgs: [
          "images/layer/lingshou/1.jpg",
          "images/layer/lingshou/2.jpg"
        ],
        text: "地利生鲜是一家全国性的专业生鲜零售连锁企业，目前在东北、华北、西南地区拥有近500家终端门店，总经营面积超过25万平方米，是东北地区规模最大的社区生鲜连锁超市品牌。"
      },
      "jiagong": {
        imgs: [
          "images/layer/jiagong/1.jpg",
          "images/layer/jiagong/2.jpg"
        ],
        text: "地利集团拥有十大加工厂，21条生产线，占地面积超8000平方米，平均每月生产250万公斤自产食品，包括中式主食、西式糕点、熟食以及其他粗加工农产品，提供给地利生鲜位全国的门店。"
      },
      "jiance": {
        imgs: [
          "images/layer/jiance/1.jpg",
          "images/layer/jiance/2.jpg"
        ],
        text: "地利集团在每个大型农副产品物流园设置检验检测中心，并在零售渠道引入地区综合能力最强的第三方专业检测机构，在食品溯源管理等方面展开全面合作，对所有食品在存储、加工、物流环节全品类全时段全流程进行安全检测。"
      }
    },
    mySwiper: null,
    page8: {
      bgAnimation: [],
      bihuaAnimation: {
        'classStr': 'bihua',
        'animationName': 'fade-in',
        'animationTime': '0.2s'
      },
      titleAnimation: {
        'classStr': 'label',
        'animationName': 'fade-in',
        'animationTime': '1s'
      },
      lineTransition: [
        {
          'classStr': 'left-line',
          'time': '0.6s'
        },
        {
          'classStr': 'bottom-line',
          'time': '1.2s'
        },
        {
          'classStr': 'right-line',
          'time': '0.8s'
        },
        {
          'classStr': 'top-line',
          'time': '1s'
        },
        {
          'classStr': 'arrow-content',
          'time': '1s'
        }
      ],
      logoAnimation: {
        'classStr': 'logo',
        'animationName': 'fade-in',
        'animationTime': '0.5s'
      }
    },
    bgAnimationArr: ['zoomIn', 'fadeIn', 'translationRightIn']
  };
  parms.page3 = deepClone(parms.page2);
  parms.page4 = deepClone(parms.page2);
  parms.page5 = deepClone(parms.page2);
  parms.page6 = deepClone(parms.page2);
  parms.page3.bgAnimation = [
    {
      'classStr': 'bg2',
      'animationName': 'fadeIn animated',
      'animationTime': '1s'
    },
    {
      'classStr': 'bg3',
      'animationName': 'translationRightIn animated',
      'animationTime': '2s'
    },
    {
      'classStr': 'bg4',
      'animationName': 'fadeIn animated',
      'animationTime': '1s'
    },
  ];
  parms.page4.bgAnimation = [
    {
      'classStr': 'bg2',
      'animationName': 'fadeIn animated',
      'animationTime': '1s'
    }
  ];
  parms.page5.bgAnimation = [
    {
      'classStr': 'bg2',
      'animationName': 'fadeIn animated',
      'animationTime': '1s'
    }
  ];
  parms.page6.bgAnimation = [
    {
      'classStr': 'bg2',
      'animationName': 'fadeIn animated',
      'animationTime': '1s'
    }
  ];

  function whichAnimationEvent () {
    var t,
      el = document.createElement('surface'),
      transitions = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
      }
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function whichTransitionEvent () {
    var t,
      el = document.createElement('surface'),
      transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
      }
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }


  function watchTransitionEvent (el, nextel, pageNum) {
    var transitionEvent = whichTransitionEvent();
    animationCount++;
    console.log(transitionEvent, (".page_" + pageNum + ' .' + el.classStr), nextel);
    transitionEvent && $(".page_" + pageNum + ' .' + el.classStr)[0].addEventListener(transitionEvent, function () {
      console.log('animation done', nextel.classStr, this.className);
      count++;
      resetAnimationCount();
      $(".page_" + pageNum + ' .' + nextel.classStr).css('transition-duration', nextel.time).addClass(nextel.classStr + '-transition');
      $(".page_" + pageNum + ' .' + el.classStr)[0].removeEventListener(transitionEvent, arguments.callee, false);//销毁事件
    });
  }


  function resetAnimationCount () {
    console.log('reset animation count ', animationCount, count);
    if (animationCount === count) {
      animationCount = 0;
      count = 1;
      pageAnimationDone = true;
      var page = parms.pageNow;

      console.log('reset css page ', page);
      if (page > 1) {

        resetAnimationCss(page - 1);
        resetAnimationCss(page + 1);
      } else {
        resetAnimationCss(page + 1);
      }

    }
  }

  window.resetAnimationCss = resetAnimationCss;

  function resetAnimationCss (pageNum) {
    var page = parms['page' + pageNum];
    if (pageNum == 8) {
      console.log('aaaaa ppp888')
    }
    for (var key in page) {
      if (key == 'lineTransition') {
        var lineTransition = page[key];
        for (var i = 0; i <= lineTransition.length - 1; i++) {
          // console.log($('.page_' + pageNum + ' .' +lineTransition[i].classStr)[0], lineTransition[i].classStr);
          var obj = lineTransition[i]
          $('.page_' + pageNum + ' .' + obj.classStr).removeClass(obj.classStr + '-transition').css({
            'animation-duration': 'inherit',
            'transition-duration': 'inherit'
          });
        }
      } else {
        var obj = page[key];
        $('.page_' + pageNum + ' .' + obj.classStr).removeClass(obj.animationName).removeClass(obj.animationName + '-transition').css({
          'animation-duration': 'inherit',
          'transition-duration': 'inherit'
        });
        if (key == 'bgAnimation') {
          // var _el = $('.page_' + pageNum + ' .' + obj.classStr);
          var _el = $('.page_' + pageNum + ' .bg');
          _el.removeClass('animated');
          for (var j = 0; j < parms.bgAnimationArr.length; j++) {
            _el.removeClass(parms.bgAnimationArr[j]);
          }
        }
        if (key == 'sanluoTransition') {
          $('.page_' + pageNum + ' .lvye').removeAttr('style').removeClass('lvye-transition');
          $(".new-page .sanluo").removeClass("fade-out Zindex").removeAttr('style');
          $(".new-page .logo").removeClass("fade-in").removeAttr('style');
          $(".new-page .title1").removeClass("fade-in").removeAttr('style');
          $(".new-page .title1").show();
          $(".new-page .title2").removeClass("fade-in").removeAttr('style');
          $(".new-page .new-page-bg").removeClass("fade-in").removeAttr('style');
          $(".new-page .btn-content").removeClass("Zindex");

          $(".new-page .btn1").removeClass("fade-in").removeAttr('style');
        }
        // console.log($('.page_' + pageNum + ' .' +page[key].classStr)[0], page[key].classStr);
        $('.page_' + pageNum + ' .shuye').removeClass('fade-in').removeClass(obj.classStr + '-transition').css({
          'animation-duration': 'inherit',
          'opacity': '0'
        });
      }

    }
    $('.page_' + pageNum + ' .arrow-content').removeClass('arrow-content-transition').css({
      'animation-duration': 'inherit',
      'transition-duration': 'inherit'
    });

    if (parms.mySwiper) {
      parms.mySwiper.destroy(false);
    }
    $(".layer-content").hide();
    $(".video-content").hide();

    $('.page_' + pageNum + ' .shuye .lvye-img').removeClass('scale-enlarge').css({ 'animation-duration': 'inherit' });
    if (pageNum == 7) {
      $('.page_7 .guding-img').removeAttr('style');
    }
    if (pageNum == 8) {
      $(".page_8 .page-content-bg").removeClass('fade-in');
      $(".page_8 .bg2").removeClass('fade-in');
      $(".page_8 .logo").removeClass('fade-out');
      $(".page_8 .lv-logo-img").removeClass('fade-in lv-logo-img-transition').css({
        'opacity': '0',
        "z-index": '1'
      });
      // $('.page_8 .logo-img').addClass('fade-in').removeClass('fade-out').removeAttr('style');
      //  $('.page_8 .lv-logo-img').removeClass('fade-in').removeClass('lv-logo-img-transition').removeAttr('style');
      //  $('.page_8 .bg2').addClass('fade-in').removeAttr('style');
    }
  }

  function watchAnimationEvent (el, obj, type, page) {
    var transitionEvent = whichAnimationEvent();
    animationCount++;
    console.log('animationcount =++', animationCount, type, page);
    transitionEvent && $(el)[0].addEventListener(transitionEvent, function () {
      if (type == 'titleAnimation') {
        $(el).find(".num").each(function () {
          var id = $(this).attr("data-id");
          var decima = $(this).attr("data-num-decima");
          var time = $(this).attr("data-num-time");
          var start = $(this).attr("data-num-start");
          var end = $(this).attr("data-num-end");
          var demo = new CountUp(id, start, end, decima, time, parms.options);
          if (!demo.error) {
            demo.start();
          } else {
            console.error(demo.error);
          }
        });
      }
      if (type == 'bgAnimation') {
        setTimeout(function () {
          count++;
          resetAnimationCount();
          $(el) && $(el).next().length > 0 && $(el).next().css('animation-duration', obj.animationTime).addClass(obj.animationName);
          if (page == 7) {
            var titleEl = $(".page_7 .page-content .title .label")[obj.num];
            $(titleEl) && $(titleEl).length > 0 && $(titleEl).css('animation-duration', '1s').addClass('fade-in');
          }
        }, 3000)
      } else {
        if (page === 7 && type === 'titleAnimation') {
          count++;
          resetAnimationCount();
        } else {
          count++;
          resetAnimationCount();
          console.log('bg2', el, obj.animationName)
          $(el) && $(el).next().length > 0 && $(el).next().css('animation-duration', obj.animationTime).addClass(obj.animationName);
        }
      }
      // if (type == 'titleAnimation') {
      //   var num = $(el).attr('data-num');
      //   var bgAnimationEl = $('.page_' + page + ' .' + parms['page' + page].bgAnimation.classStr)[num];
      //   var bgAnimation = parms['page' + page].bgAnimation;
      //   $(bgAnimationEl) && $(bgAnimationEl).next().length > 0 && $(bgAnimationEl).next().css('animation-duration', bgAnimation.animationTime).addClass(bgAnimation.animationName);
      // }
      // console.log('销毁事件',el, obj, type, page, count++);
      $(el)[0].removeEventListener(transitionEvent, arguments.callee, false);//销毁事件
    });
  }

  addEvent();

  function addEvent () {
    // const audio = document.getElementById('audio-cls');
    // audio.addEventListener('canplay', function () {
    //   if (audio.paused) {
    //     audio.play();
    //   }
    // });
    // document.addEventListener('DOMContentLoaded', function () {
    //   function audioAutoPlay () {
    //     audio.play();
    //   }
    //
    //   if (audio.paused) {
    //     audioAutoPlay();
    //   }
    // });

    //音乐暂停事件
    $(".music-oper").on("click", function (e) {
      // e.stopPropagation();
      var audio = document.getElementById('audio-cls');
      if (audio !== null) {
        if (audio.paused) {
          audio.play();// 播放
          $(this).removeClass("suspend")
        } else {
          audio.pause();// 暂停
          $(this).addClass("suspend");
        }
      }
    })

    //关闭 弹窗 轮播
    $("body").on("click", '.close-img', function (e) {
      if(parms.mySwiper){
        parms.mySwiper.destroy(false);
      }
      $(".layer-content").hide();
    });

    //关闭视频弹层
    $(".close-btn").on("click", function (e) {
      e.stopPropagation();
      $('.music-oper').show();
      $(".video-content").hide();
      var video = document.getElementById('video');
      video.pause();
    });

    var IH = window.innerHeight;
    var IW = window.innerWidth;
    var RW = IW < IH ? IW : IH;
    var RH = IW < IH ? IH : IW;
    var h = RW * 720 / 1280;
    $(".video-content").css({ 'height': h, 'top': RH / 2 - h / 2 });
    //播放视频
    $("body .new-page").on("click", '.play-video', function (e) {
      var video = document.getElementById('video');
      var audio = document.getElementById('audio-cls');
      if (audio !== null) {
        $('.music-oper').hide().addClass("suspend");
        audio.pause();// 暂停
      }
      $(".video-content").show();
      video.play();
      // Webkit
      video.webkitRequestFullScreen && video.webkitRequestFullScreen();//进入全屏
      // document.webkitCancelFullScreen();//退出全屏

// Firefox
      video.mozRequestFullScreen && video.mozRequestFullScreen();
      // document.mozCancelFullScreen();

// W3C
      video.requestFullscreen && video.requestFullscreen();
      // document.exitFullscreen();

    });

    // 打开 轮播弹层
    $("body .new-page").on("click", '.btn', function (e) {
      e.stopPropagation();
      var dataType = $(this).attr('data-type');
      $(".layer-content .text").text(parms.layerData[dataType].text);
      var imgs = parms.layerData[dataType].imgs;
      var str = "";
      for (var i = 0; i < imgs.length; i++) {
        str += "<div class='swiper-slide'><img src = '" + imgs[i] + "' /></div>";
      }
      $(".layer-content .swiper-wrapper").html(str);
      $(".layer-content").show();
      parms.mySwiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      });
    })
  }

  audioAutoPlay();

  function audioAutoPlay () {
    var audio = document.getElementById("audio-cls");
    var play = function () {
      if (audio.paused) {
        audio.play();
      }
      document.removeEventListener("touchstart", play, false);
    };
    play();
    document.addEventListener("WeixinJSBridgeReady", function () {
      play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
      play();
    }, false);
    document.addEventListener("touchstart", play, false);
  }


  function addTransitionClass (page) {
    var lineTransition = parms['page' + page].lineTransition;
    $(".page_" + page + ' .' + lineTransition[0].classStr).css('transition-duration', lineTransition[0].time).addClass(lineTransition[0].classStr + '-transition');

    for (var i = 0; i < lineTransition.length - 1; i++) {
      // console.log(lineTransition[i], lineTransition[i + 1]);
      watchTransitionEvent(lineTransition[i], lineTransition[i + 1], page);
    }
  }

  //页面整体动画完成状态，整体完成后可以滑动到下一页。开始动画前置为false，全部完成后置为true
  var pageAnimationDone = false;
  var animationCount = 0;
  var count = 0;
  window.parms = parms;

  function mangerAnimation () {

    // setTimeout(pageAnimation, 300);
    pageAnimation();
  }

  function eventListShowArrow () {
    var animationEvent = whichAnimationEvent();
    var transitionEvent = whichTransitionEvent();
    var pageNow = parms.pageNow;
    if (pageNow >= 2 && pageNow <= 7) {
      var el = $('.page_' + pageNow + ' .bg-content .bg');
      if (el.length < 4) {
        animationEvent && $('.page_' + pageNow + ' .en-img').length > 0 && $('.page_' + pageNow + ' .en-img')[0].addEventListener(animationEvent, function () {
          $('.page_' + pageNow + ' .arrow-content').css('transition-duration', '1s').addClass('arrow-content-transition');
          this.removeEventListener(animationEvent, arguments.callee, false)
        });
      } else {
        animationEvent && $(el[el.length - 1])[0].addEventListener(animationEvent, function () {
          $('.page_' + pageNow + ' .arrow-content').css('transition-duration', '1s').addClass('arrow-content-transition');
          this.removeEventListener(animationEvent, arguments.callee, false)
        });
      }
    }

    if (pageNow == 7) {
      var btnel = $('.page_' + pageNow + ' .btn-oper');
      animationEvent && $(btnel[btnel.length - 1])[0].addEventListener(animationEvent, function () {
        $('.page_' + pageNow + ' .arrow-content').css('transition-duration', '1s').addClass('arrow-content-transition');
        this.removeEventListener(animationEvent, arguments.callee, false)
      });

    }
    if (pageNow == 8) {
      animationEvent && $('.page_8 .logo-img')[0].addEventListener(animationEvent, function () {
        $('.page_' + parms.pageNow + ' .arrow-content').css('transition-duration', '1s').addClass('arrow-content-transition');
        this.removeEventListener(animationEvent, arguments.callee, false)
      });
    }
  }

  function pageAnimation () {
    eventListShowArrow();
    animationCount = 0;
    count = 1;
    pageAnimationDone = false;
    var page = parms['page' + parms.pageNow];
    var transitionEvent = whichTransitionEvent();
    var animationEvent = whichAnimationEvent();
    for (var key in page) {
      switch (key) {
        case 'logoAnimation':
          var lineEl = $('.page_' + parms.pageNow + ' .line');
          var obj = page['logoAnimation'];
          var pageNow = parms.pageNow;
          transitionEvent && $(lineEl[lineEl.length - 1])[0].addEventListener(transitionEvent, function () {
            $('.page_' + pageNow + ' .logo').css('animation-duration', obj.animationTime).addClass(obj.animationName);
            this.removeEventListener(transitionEvent, arguments.callee, false)
          });

          break;
        case 'bihuaAnimation':
          var pageNow = parms.pageNow;
          if (pageNow == 8) {
            $('.page_' + pageNow + ' .page-content-bg').css('animation-duration', '1s').addClass('fade-in');
            animationEvent && $('.page_' + pageNow + ' .page-content-bg')[0].addEventListener(animationEvent, function () {
              $('.page_' + pageNow + ' .shuye').css('animation-duration', '0.2s').addClass('fade-in');
              this.removeEventListener(animationEvent, arguments.callee, false)
            });
            animationEvent && $('.page_' + pageNow + ' .shuye')[0].addEventListener(animationEvent, function () {
              $($('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr)[0]).css('animation-duration', page['bihuaAnimation'].animationTime).addClass(page['bihuaAnimation'].animationName);
              $('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr).each(function () {
                watchAnimationEvent(this, page['bihuaAnimation']);
                this.removeEventListener(animationEvent, arguments.callee, false)
              });
            });
          } else {
            $($('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr)[0]).css('animation-duration', page['bihuaAnimation'].animationTime).addClass(page['bihuaAnimation'].animationName);
            $('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr).each(function () {
              watchAnimationEvent(this, page['bihuaAnimation']);
            });
          }
          break;
        case 'titleAnimation':

          var pageNow = parms.pageNow;
          if (pageNow <= 6 && pageNow > 1 || pageNow == 8) {
            var bihuaEl = $('.page_' + pageNow + ' .' + page['bihuaAnimation'].classStr);
            animationEvent && $(bihuaEl[bihuaEl.length - 1])[0].addEventListener(animationEvent, function () {
              $($('.page_' + pageNow + ' .' + page['titleAnimation'].classStr)[0]).css('animation-duration', page['titleAnimation'].animationTime).addClass(page['titleAnimation'].animationName);
              $('.page_' + pageNow + ' .' + page['titleAnimation'].classStr).each(function () {
                console.log('animationcount =++ ******', page['titleAnimation'])
                watchAnimationEvent(this, page['titleAnimation'], 'titleAnimation', pageNow);
              });
              this.removeEventListener(animationEvent, arguments.callee, false);
            });
          }
          if (pageNow == 7) {
            $($('.page_' + pageNow + ' .' + page['titleAnimation'].classStr)[0]).css('animation-duration', page['titleAnimation'].animationTime).addClass(page['titleAnimation'].animationName);
            $('.page_' + pageNow + ' .' + page['titleAnimation'].classStr).each(function () {
              watchAnimationEvent(this, page['titleAnimation'], 'titleAnimation', pageNow);
            });
          }

          break;
        case 'bgAnimation':
          var pageNow = parms.pageNow;
          var animationClassArr = page['bgAnimation'];
          if (animationClassArr.length > 0) {

            setTimeout(function () {
              // var animationName = parms.bgAnimationArr[Math.floor(Math.random() * parms.bgAnimationArr.length)] + ' animated ';
              $('.page_' + pageNow + ' .' + animationClassArr[0].classStr).css('animation-duration', page['bgAnimation'][0].animationTime).addClass(page['bgAnimation'][0].animationName);
              if (pageNow == 7) {
                $($('.page_7 .page-content .title .label')[1]).css('animation-duration', '1s').addClass('fade-in');
              }
            }, 3000);
            for (var i = 0; i < animationClassArr.length - 1; i++) {
              watchAnimationEvent($('.page_' + pageNow + ' .' + animationClassArr[i].classStr), animationClassArr[i + 1], 'bgAnimation', pageNow);
            }
          }
          break;
        case 'lineTransition':
          if (!page['bgAnimation']) {
            var pageNow = parms.pageNow;
            addTransitionClass(pageNow);
            break;
          }
          var bgEl = $('.page_' + parms.pageNow + ' .' + page['titleAnimation'].classStr);
          if (!bgEl && bgEl.length <= 0) {
            break;
          }
          var pageNow = parms.pageNow;
          animationEvent && $(bgEl[bgEl.length - 1])[0].addEventListener(animationEvent, function () {
            addTransitionClass(pageNow);
            this.removeEventListener(animationEvent, arguments.callee, false)
          });

          break;
      }
    }
  }


  function orient () {
    if (window.orientation == 90 || window.orientation == -90) {
      //ipad、iphone竖屏；Andriod横屏
      $("body").attr("class", "landscape");
      orientation = 'landscape';
      alert("横屏");
      return false;
    } else if (window.orientation == 0 || window.orientation == 180) {
      //ipad、iphone横屏；Andriod竖屏
      $("body").attr("class", "portrait");
      orientation = 'portrait';
      // alert("竖屏");
      return false;
    }
  }

  var isTouchEnd = true; // 标记当前滑动是否结束(手指已离开屏幕)

  function deepClone (obj) {
    var result;
    var oClass = isClass(obj);
    if (oClass === "Object") {
      result = {};
    } else if (oClass === "Array") {
      result = [];
    } else {
      return obj;
    }
    for (var key in obj) {
      var copy = obj[key];
      if (isClass(copy) == "Object") {
        result[key] = arguments.callee(copy);//递归调用
      } else if (isClass(copy) == "Array") {
        result[key] = arguments.callee(copy);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  }

//判断对象的数据类型
  function isClass (o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  }


  var app = {

    // 页面平移
    transform: function (translate) {
      this.style.webkitTransform = 'translate3d(0, ' + translate + 'px,  0)';
      parms.currentPosition = translate;
      isTouchEnd = true; // 标记当前完整的滑动事件已经结束
    },

    /**
     * 绑定触摸事件
     */
    bindTouchEvent: function () {
      var viewport = document.querySelector('.content');
      var pageHeight = window.innerHeight; // 页面高度
      var maxHeight = pageHeight * (parms.points.length - 1); // 页面滑动最后一页的位置
      var startY;
      var direction = 'top'; // 滑动的方向
      var isMove = false; // 是否发生左右滑动

      // 手指放在屏幕上
      viewport.addEventListener('touchstart', function (e) {
        // if (e.cancelable) {
        //   if (!e.defaultPrevented) {
        //     e.preventDefault();
        //   }
        // }
        // e.preventDefault();
        // 单手指触摸或者多手指同时触摸，禁止第二个手指延迟操作事件
        if (e.touches.length === 1 || isTouchEnd) {
          var touch = e.touches[0];
          startY = touch.pageY;
          viewport.style.webkitTransition = ''; // 取消动画效果
          isMove = false; // 是否产生滑动
          isTouchEnd = false; // 当前滑动开始
        }
      }.bind(this), false);

      // 手指在屏幕上滑动，页面跟随手指移动
      viewport.addEventListener('touchmove', function (e) {
        // if (e.cancelable) {
        //   if (!e.defaultPrevented) {
        //     e.preventDefault();
        //   }
        // }
        e.preventDefault();
        // 如果当前滑动已结束，不管其他手指是否在屏幕上都禁止该事件
        if (isTouchEnd) return;

        var touch = e.touches[0];
        // var deltaX = touch.pageX - startX;
        var deltaY = touch.pageY - startY;

        isMove = true;
        direction = deltaY > 0 ? 'bottom' : 'top'; // 判断手指滑动的方向
      }.bind(this), false);

      // 手指离开屏幕时，计算最终需要停留在哪一页
      viewport.addEventListener('touchend', function (e) {
        // if (e.cancelable) {
        //   判断默认行为是否已经被禁用
        // if (!e.defaultPrevented) {
        //   e.preventDefault();
        // }
        // }
        if (loadingType) {
          return false;
        }
        var translate = 0;
        // 发生了滑动，并且当前滑动事件未结束
        if (isMove && !isTouchEnd) {
          // 使用动画过渡让页面滑动到最终的位置
          var animationEvent = whichAnimationEvent();
          var transitionEvent = whichTransitionEvent();

          if (parms.currentPosition == 0 && direction === 'bottom') {
            isTouchEnd = true; // 标记当前完整的滑动事件已经结束
            return false;
          }
          if (!pageAnimationDone) return false;

          $(".close-img").trigger("click");
          $(".close-btn").trigger("click")

          if (parms.pageNow == 7 && direction === 'top' && !parms.page7Type) {
            $('.page_7 .guding-img').show();
            $('.page_7 .arrow-content').removeClass('arrow-content-transition').css({
              'animation-duration': 'inherit',
              'transition-duration': 'inherit'
            });
            $('.page_7').find('.' + parms.page7.titleOutAnimation.classStr)
              .css('animation-duration', parms.page7.titleOutAnimation.animationTime).addClass(parms.page7.titleOutAnimation.animationName);
            parms.page7Type = true;
            animationEvent && $('.page_' + parms.pageNow + ' .' + parms.page7.titleOutAnimation.classStr)[0].addEventListener(animationEvent, function () {
              $(".new-page .sanluo").addClass("Zindex");
              $(".new-page .sanluo .lvye").addClass("lvye-transition");
              this.removeEventListener(animationEvent, arguments.callee, false);
            });
            transitionEvent && $('.page_7 .lvye5')[0].addEventListener(transitionEvent, function () {
              $(".new-page .sanluo").addClass("fade-out").css('animation-duration', '1s');
              $(".new-page .logo").addClass("fade-in").css('animation-duration', '1s');
              $(".new-page .title1").addClass("fade-in").css('animation-duration', '1s');
              setTimeout(function () {
                $(".new-page .title1").hide();
                $(".new-page .title2").addClass("fade-in").css('animation-duration', '1s');
                $(".new-page .new-page-bg").addClass("fade-in").css('animation-duration', '1s');
                $(".new-page .btn-content").addClass("Zindex");

                $(".new-page .btn1").addClass("fade-in").css('animation-duration', parms.page7.btnAnimation.animationTime);
                $('.page_7 .' + parms.page7.btnAnimation.classStr).each(function () {
                  watchAnimationEvent(this, parms.page7['btnAnimation'], 'btnAnimation', parms.pageNow);
                });
              }, 3500)
              this.removeEventListener(transitionEvent, arguments.callee, false);
            });
            return false;
          }
          if (parms.pageNow == 8 && direction === 'top' && !parms.page8Type) {
            $(".video-content").hide();
            if (parms.mySwiper) {
              parms.mySwiper.destroy(false);
            }
            $(".layer-content").hide();

            $('.page_8 .arrow-content').removeClass('arrow-content-transition').css({
              'animation-duration': 'inherit',
              'transition-duration': 'inherit'
            });
            $('.page_8 .logo-img').removeClass('fade-in').css('opacity', '0');
            $('.page_8 .lv-logo-img').css({
              'opacity': '1',
              "z-index": '99'
            }).addClass('lv-logo-img-transition').css('animation-duration', '1s');
            setTimeout(function () {
              $('.page_8 .bg2').addClass('fade-in').css('animation-duration', '2s');
            }, 1100);
            return false;
          }
          if (-parms.currentPosition == maxHeight && direction === 'top') {
            isTouchEnd = true; // 标记当前完整的滑动事件已经结束
            return false;
          }

          console.log('direction', direction)
          if (parms.pageNow <= 6 && parms.pageNow > 1 && direction === 'top') {
            console.log('page animation count', animationCount, count, pageAnimationDone);

            // 树叶飞走
            var pageNow = parms.pageNow;
            // $($('.page_' + pageNow + ' .' + parms.shuyeOut.classStr)[0]).find('.shuye-img').hide();
            $($('.page_' + pageNow + ' .' + parms.shuyeOut.classStr)[0]).css('opacity', '1');
            $($('.page_' + pageNow + ' .' + parms.shuyeOut.classStr)[0]).find('.lvye-img').css('animation-duration', parms.shuyeOut.animationTime).addClass(parms.shuyeOut.animationName);
            var $this = this;
            animationEvent && $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr + ' .lvye-img')[0].addEventListener(animationEvent, function () {
              // $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr).removeClass('fade-in').addClass('fade-out').css('animation-duration', '1s');
              // $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr)[0] && $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr)[0].removeEventListener(animationEvent, arguments.callee, false);//销毁事件
              $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr + ' .lvye-img')[0] && $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr + ' .lvye-img')[0].removeEventListener(animationEvent, arguments.callee, false);//销毁事件
              setTimeout(function () {
                // $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr).removeClass('fade-in').removeClass('fade-out');
                // $('.page_' + pageNow + ' .' + parms.shuyeOut.classStr + ' .lvye-img').removeClass(parms.shuyeOut.animationName);

                viewport.style.webkitTransition = '0.3s ease -webkit-transform';
                translate = direction === 'top' ? parms.currentPosition - pageHeight : parms.currentPosition + pageHeight;
                parms.pageNow = Math.round(Math.abs(translate) / pageHeight) + 1;
                $this.transform.call(viewport, translate);
                mangerAnimation();
              }, 1100);

            });

          } else {
            console.log('page animation count 2', animationCount, count, pageAnimationDone);
            if (parms.pageNow == 7 && direction === 'bottom') {
              parms.page7Type = false;
            }
            if (parms.pageNow == 8 && direction === 'bottom') {
              parms.page7Type = false;
              parms.page8Type = false;
            }
            viewport.style.webkitTransition = '0.3s ease -webkit-transform';
            translate = direction === 'top' ? parms.currentPosition - pageHeight : parms.currentPosition + pageHeight;
            parms.pageNow = Math.round(Math.abs(translate) / pageHeight) + 1;
            this.transform.call(viewport, translate);
            mangerAnimation();
          }
        }
      }.bind(this), false);
    }
  };

});