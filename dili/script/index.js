// require('./jquery-3.3.1');
// require('./zoom');
let baseApp = require('./baseApp').up;
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
    "images/wrong.png",
    "images/shuye.png",
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
    "images/page1/arrow.png",
    "images/page1/bg.jpg",
    "images/page1/play.png",
    "images/page1/suspend.png",
    "images/page1/title-en.png",
    "images/page1/title1.png",
    "images/page1/title2.png",
    "images/page2/bg1.jpg",
    "images/page2/bg2.jpg",
    "images/page2/bg3.jpg",
    "images/page3/bg1.jpg",
    "images/page3/bg2.jpg",
    "images/page3/bg3.jpg",
    "images/page3/bg4.jpg",
    "images/page4/bg1.jpg",
    "images/page4/bg2.jpg",
    "images/page6/bg1.jpg",
    "images/page6/bg2.jpg",
    "images/page5/bg1.jpg",
    "images/page5/bg2.jpg",
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
    "images/page7/title1.png",
    "images/page7/title2.png",
    "images/page7/zhongzhi.png",
    "images/page8/bg1.jpg",
    "images/page8/bg2.jpg",
    "images/page8/bg3.png",
    "images/page8/dili.png",
    "images/page8/title1.png",
    "images/page8/title2.png",
    "images/page8/zhiwei.png",
    "images/layer/jiagong/2.jpg",
    "images/layer/jiagong/1.jpg",
    "images/layer/jiance/1.jpg",
    "images/layer/jiance/2.jpg",
    "images/layer/lingshou/1.jpg",
    "images/layer/lingshou/2.jpg",
    "images/layer/liutong/1.jpg",
    "images/layer/liutong/2.jpg",
    "images/layer/liutong/3.jpg",
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
    }, 300);


  }, function (progress) {
    $("#num span").text(progress + '%')
    $('.loading-content .line').css('width', progress + '%')
  });
  var parms = {
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
        }
      ]
    },
    page2: {
      bgAnimation: {
        'classStr': 'bg',
        'animationName': 'slide-in-right',
        'animationTime': '0.5s'
      },
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
      bgAnimation: {
        'classStr': 'bg',
        'animationName': 'slide-in-right',
        'animationTime': '0.5s'
      },
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
      'animationName': 'fade-out-up',
      'animationTime': '0.5s'
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
      bgAnimation: {
        'classStr': 'bg',
        'animationName': 'slide-in-right',
        'animationTime': '0.5s'
      },
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
        }
      ],
      logoAnimation: {
        'classStr': 'logo',
        'animationName': 'fade-in',
        'animationTime': '0.5s'
      }
    }
  };
  parms.page3 = parms.page2;
  parms.page4 = parms.page2;
  parms.page5 = parms.page2;
  parms.page6 = parms.page2;

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
    transitionEvent && $(".page_" + pageNum + ' .' + el.classStr)[0].addEventListener(transitionEvent, function () {
      $(".page_" + pageNum + ' .' + nextel.classStr).css('transition-duration', nextel.time).addClass(nextel.classStr + '-transition');
      $(".page_" + pageNum + ' .' + el.classStr)[0].removeEventListener(transitionEvent, arguments.callee, false);//销毁事件
    });
  }

  function watchAnimationEvent (el, obj, type, page) {
    var transitionEvent = whichAnimationEvent();
    transitionEvent && $(el)[0].addEventListener(transitionEvent, function () {
      if (type == 'bgAnimation') {
        setTimeout(function () {
          $(el) && $(el).next().length > 0 && $(el).next().css('animation-duration', obj.animationTime).addClass(obj.animationName);
        }, 3000)
      } else {
        $(el) && $(el).next().length > 0 && $(el).next().css('animation-duration', obj.animationTime).addClass(obj.animationName);
      }
      // if (type == 'titleAnimation') {
      //   var num = $(el).attr('data-num');
      //   var bgAnimationEl = $('.page_' + page + ' .' + parms['page' + page].bgAnimation.classStr)[num];
      //   var bgAnimation = parms['page' + page].bgAnimation;
      //   $(bgAnimationEl) && $(bgAnimationEl).next().length > 0 && $(bgAnimationEl).next().css('animation-duration', bgAnimation.animationTime).addClass(bgAnimation.animationName);
      // }
      $(el)[0].removeEventListener(transitionEvent, arguments.callee, false);//销毁事件
    });
  }

  addEvent();

  function addEvent () {
    $("body").on("click", '.music-oper', function (e) {
      e.stopPropagation();
      if ($(this).hasClass('suspend')) {
        $(this).removeClass("suspend")
      } else {
        $(this).addClass("suspend")
      }
    })
    $("body .new-page").on("click", '.close-img', function (e) {
      $(".layer-content").hide();
      parms.mySwiper.destroy(false);
    });
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
      parms.mySwiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
      });
      $(".layer-content").show();
    })
  }

  if (!loadingType) {
    clearInterval(parms.loadingTimeer);
    addTransitionClass(parms.pageNow);
    app.bindTouchEvent(); // 绑定触摸事件
  } else {
    parms.loadingTimeer = setInterval(function () {
      if (!loadingType) {
        clearInterval(parms.loadingTimeer);
        addTransitionClass(parms.pageNow);
        app.bindTouchEvent(); // 绑定触摸事件
      }
    }, 20);
  }


  function addTransitionClass (page) {
    var lineTransition = parms['page' + page].lineTransition;
    $(".page_" + page + ' .' + lineTransition[0].classStr).css('transition-duration', lineTransition[0].time).addClass(lineTransition[0].classStr + '-transition');
    for (var i = 0; i < lineTransition.length - 1; i++) {
      watchTransitionEvent(lineTransition[i], lineTransition[i + 1], page);
    }
  }

  function mangerAnimation () {
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
          });

          break;
        case 'bihuaAnimation':
          var pageNow = parms.pageNow;
          if (pageNow == 8) {
            $('.page_' + pageNow + ' .page-content-bg').css('animation-duration', '1s').addClass('fade-in');
            animationEvent && $('.page_' + pageNow + ' .page-content-bg')[0].addEventListener(animationEvent, function () {
              $('.page_' + pageNow + ' .shuye').css('animation-duration', '0.2s').addClass('fade-in');
            });
            animationEvent && $('.page_' + pageNow + ' .shuye')[0].addEventListener(animationEvent, function () {
              $($('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr)[0]).css('animation-duration', page['bihuaAnimation'].animationTime).addClass(page['bihuaAnimation'].animationName);
              $('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr).each(function () {
                watchAnimationEvent(this, page['bihuaAnimation']);
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
                watchAnimationEvent(this, page['titleAnimation'], 'titleAnimation', pageNow);
              });
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
          setTimeout(function () {
            $($('.page_' + pageNow + ' .' + page['bgAnimation'].classStr)[1]).css('animation-duration', page['bgAnimation'].animationTime).addClass(page['bgAnimation'].animationName);
          }, 3000);
          $('.page_' + pageNow + ' .' + page['bgAnimation'].classStr).each(function () {
            watchAnimationEvent(this, page['bgAnimation'], 'bgAnimation', pageNow);
          });

          break;
        case 'lineTransition':
          if (!page['bgAnimation']) {
            break;
          }
          var bgEl = $('.page_' + parms.pageNow + ' .' + page['titleAnimation'].classStr);
          if (!bgEl && bgEl.length <= 0) {
            break;
          }
          var pageNow = parms.pageNow;
          animationEvent && $(bgEl[bgEl.length - 1])[0].addEventListener(animationEvent, function () {
            addTransitionClass(pageNow);
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
          if (parms.pageNow == 7 && direction === 'top' && !parms.page7Type) {
            $('.page_7 .guding-img').show();
            $('.page_7').find('.' + parms.page7.titleOutAnimation.classStr)
              .css('animation-duration', parms.page7.titleOutAnimation.animationTime).addClass(parms.page7.titleOutAnimation.animationName);
            parms.page7Type = true;
            animationEvent && $('.page_' + parms.pageNow + ' .' + parms.page7.titleOutAnimation.classStr)[0].addEventListener(animationEvent, function () {
              $(".new-page .sanluo").addClass("Zindex");
              $(".new-page .sanluo .lvye").addClass("lvye-transition");
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
              }, 2000)
            });
            return false;
          }
          if (parms.pageNow == 8 && direction === 'top' && !parms.page8Type) {
            parms.page8Type = true;

            $('.page_8 .logo-img').removeClass('fade-in').addClass('fade-out').css('animation-duration', '1s');
            setTimeout(function () {
              $('.page_8 .lv-logo-img').addClass('fade-in').addClass('lv-logo-img-transition').css('animation-duration', '1s');
              $('.page_8 .bg2').addClass('fade-in').css('animation-duration', '2s');
            }, 1100);
            return false;
          }
          if (-parms.currentPosition == maxHeight && direction === 'top') {
            isTouchEnd = true; // 标记当前完整的滑动事件已经结束
            return false;
          }

          if (parms.pageNow <= 6 && parms.pageNow > 1 && direction === 'top') {
            // 树叶飞走
            $($('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0]).find('.shuye-img').hide();
            $($('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0]).find('.lvye-img').show();
            $($('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0]).css('animation-duration', parms.shuyeOut.animationTime).removeClass('fade-in').addClass(parms.shuyeOut.animationName);
            var $this = this;
            animationEvent && $('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0].addEventListener(animationEvent, function () {
              $($('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0]).css('opacity', '1').removeClass(parms.shuyeOut.animationName);
              $('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0] && $('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0].removeEventListener(animationEvent, arguments.callee, false);//销毁事件
              viewport.style.webkitTransition = '0.3s ease -webkit-transform';
              translate = direction === 'top' ? parms.currentPosition - pageHeight : parms.currentPosition + pageHeight;
              parms.pageNow = Math.round(Math.abs(translate) / pageHeight) + 1;
              $this.transform.call(viewport, translate);
              mangerAnimation();
            });

          } else {
            if (parms.pageNow == 7 && direction === 'bottom') {
              parms.page7Type = false;
            }
            if (parms.pageNow == 8 && direction === 'bottom') {
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

})
;