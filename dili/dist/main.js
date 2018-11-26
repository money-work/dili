/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	// require('./jquery-3.3.1');
	__webpack_require__(1);
	$(function () {
	  // orient();
	  //用户变化屏幕方向时调用
	  //   $(window).bind('orientationchange', function (e) {
	  //     orient();
	  // });
	  var parms = {
	    loadingTimeer: null, // 记录当前页面位置
	    currentPosition: 0,
	    pageNow: 1, // 当前页码
	    points: document.querySelectorAll('.page'), // 页码数
	    page1: {
	      lineTransition: [{
	        'classStr': 'title1',
	        'time': '2s'
	      }, {
	        'classStr': 'title2',
	        'time': '2s'
	      }, {
	        'classStr': 'top-left-line',
	        'time': '0.2s'
	      }, {
	        'classStr': 'left-line',
	        'time': '0.8s'
	      }, {
	        'classStr': 'bottom-left-line',
	        'time': '0.4s'
	      }, {
	        'classStr': 'bottom--right-line',
	        'addClassStr': 'right-line',
	        'time': '0.4s'
	      }, {
	        'classStr': 'right-line',
	        'time': '0.8s'
	      }, {
	        'classStr': 'top-right-line',
	        'time': '0.3s'
	      }, {
	        'classStr': 'title-en',
	        'time': '1s'
	      }]
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
	        'animationTime': '0.6s'
	      },
	      lineTransition: [{
	        'classStr': 'left-line',
	        'time': '0.6s'
	      }, {
	        'classStr': 'bottom-line',
	        'time': '1.2s'
	      }, {
	        'classStr': 'right-line',
	        'time': '0.8s'
	      }, {
	        'classStr': 'top-line',
	        'time': '1s'
	      }],
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
	      lineTransition: [{
	        'classStr': 'line',
	        'time': '0.6s'
	      }]
	    },
	    shuyeOut: {
	      'classStr': 'shuye',
	      'animationName': 'fade-out-up',
	      'animationTime': '0.5s'
	    }
	  };
	  parms.page3 = parms.page2;
	  parms.page4 = parms.page2;
	  parms.page5 = parms.page2;
	  parms.page6 = parms.page2;
	
	  function whichAnimationEvent() {
	    var t,
	        el = document.createElement('surface'),
	        transitions = {
	      'animation': 'animationend',
	      'OAnimation': 'oAnimationEnd',
	      'MozAnimation': 'animationend',
	      'WebkitAnimation': 'webkitAnimationEnd'
	    };
	    for (t in transitions) {
	      if (el.style[t] !== undefined) {
	        return transitions[t];
	      }
	    }
	  }
	
	  function whichTransitionEvent() {
	    var t,
	        el = document.createElement('surface'),
	        transitions = {
	      'transition': 'transitionend',
	      'OTransition': 'oTransitionEnd',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd'
	    };
	    for (t in transitions) {
	      if (el.style[t] !== undefined) {
	        return transitions[t];
	      }
	    }
	  }
	
	  function watchTransitionEvent(el, nextel, pageNum) {
	    var transitionEvent = whichTransitionEvent();
	    transitionEvent && $(".page_" + pageNum + ' .' + el.classStr)[0].addEventListener(transitionEvent, function () {
	      $(".page_" + pageNum + ' .' + nextel.classStr).css('transition-duration', nextel.time).addClass(nextel.classStr + '-transition');
	      $(".page_" + pageNum + ' .' + el.classStr)[0].removeEventListener(transitionEvent, arguments.callee, false); //销毁事件
	    });
	  }
	
	  function watchAnimationEvent(el, obj, type, page) {
	    var transitionEvent = whichAnimationEvent();
	    transitionEvent && $(el)[0].addEventListener(transitionEvent, function () {
	      $(el) && $(el).next().length > 0 && $(el).next().css('animation-duration', obj.animationTime).addClass(obj.animationName);
	      if (type == 'titleAnimation') {
	        var num = $(el).attr('data-num');
	        var bgAnimationEl = $('.page_' + page + ' .' + parms['page' + page].bgAnimation.classStr)[num];
	        var bgAnimation = parms['page' + page].bgAnimation;
	        $(bgAnimationEl) && $(bgAnimationEl).next().length > 0 && $(bgAnimationEl).next().css('animation-duration', bgAnimation.animationTime).addClass(bgAnimation.animationName);
	      }
	      $(el)[0].removeEventListener(transitionEvent, arguments.callee, false); //销毁事件
	    });
	  }
	
	  addEvent();
	
	  function addEvent() {
	    $("body").on("click", '.music-oper', function (e) {
	      if ($(this).hasClass('suspend')) {
	        $(this).removeClass("suspend");
	      } else {
	        $(this).addClass("suspend");
	      }
	    });
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
	
	  function addTransitionClass(page) {
	    var lineTransition = parms['page' + page].lineTransition;
	    $(".page_" + page + ' .' + lineTransition[0].classStr).css('transition-duration', lineTransition[0].time).addClass(lineTransition[0].classStr + '-transition');
	    for (var i = 0; i < lineTransition.length - 1; i++) {
	      watchTransitionEvent(lineTransition[i], lineTransition[i + 1], page);
	    }
	  }
	
	  function mangerAnimation() {
	    var page = parms['page' + parms.pageNow];
	
	    for (var key in page) {
	      switch (key) {
	        case 'logoAnimation':
	          var lineEl = $('.page_' + parms.pageNow + ' .line');
	          var obj = page['logoAnimation'];
	          var transitionEvent = whichTransitionEvent();
	          var pageNow = parms.pageNow;
	          transitionEvent && $(lineEl[lineEl.length - 1])[0].addEventListener(transitionEvent, function () {
	            $('.page_' + pageNow + ' .logo').css('animation-duration', obj.animationTime).addClass(obj.animationName);
	          });
	
	          break;
	        case 'bihuaAnimation':
	          $($('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr)[0]).css('animation-duration', page['bihuaAnimation'].animationTime).addClass(page['bihuaAnimation'].animationName);
	          $('.page_' + parms.pageNow + ' .' + page['bihuaAnimation'].classStr).each(function () {
	            watchAnimationEvent(this, page['bihuaAnimation']);
	          });
	          break;
	        case 'titleAnimation':
	
	          var pageNow = parms.pageNow;
	          if (pageNow <= 6 && pageNow > 1) {
	            var bihuaEl = $('.page_' + pageNow + ' .' + page['bihuaAnimation'].classStr);
	            var transitionEvent = whichAnimationEvent();
	
	            transitionEvent && $(bihuaEl[bihuaEl.length - 1])[0].addEventListener(transitionEvent, function () {
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
	        case 'lineTransition':
	          if (!page['bgAnimation']) {
	            break;
	          }
	          var bgEl = $('.page_' + parms.pageNow + ' .' + page['bgAnimation'].classStr);
	          if (!bgEl) {
	            break;
	          }
	          var transitionEvent = whichAnimationEvent();
	          var pageNow = parms.pageNow;
	          transitionEvent && $(bgEl[bgEl.length - 1])[0].addEventListener(transitionEvent, function () {
	            addTransitionClass(pageNow);
	          });
	
	          break;
	      }
	    }
	  }
	
	  function orient() {
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
	        if (event.cancelable) {
	          // 判断默认行为是否已经被禁用
	          if (!event.defaultPrevented) {
	            event.preventDefault();
	          }
	        }
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
	        if (event.cancelable) {
	          // 判断默认行为是否已经被禁用
	          if (!event.defaultPrevented) {
	            event.preventDefault();
	          }
	        }
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
	        if (event.cancelable) {
	          // 判断默认行为是否已经被禁用
	          if (!event.defaultPrevented) {
	            event.preventDefault();
	          }
	        }
	        if (loadingType) {
	          return false;
	        }
	        var translate = 0;
	        // 发生了滑动，并且当前滑动事件未结束
	        if (isMove && !isTouchEnd) {
	          // 使用动画过渡让页面滑动到最终的位置
	          if (parms.currentPosition == 0 && direction === 'bottom') {
	            isTouchEnd = true; // 标记当前完整的滑动事件已经结束
	            return false;
	          }
	          if (-parms.currentPosition == maxHeight && direction === 'top') {
	            isTouchEnd = true; // 标记当前完整的滑动事件已经结束
	            return false;
	          }
	          if (parms.pageNow <= 6 && parms.pageNow > 1 && direction === 'top') {
	            // 树叶飞走
	            $($('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0]).css('animation-duration', parms.shuyeOut.animationTime).removeClass('fade-in').addClass(parms.shuyeOut.animationName);
	            var $this = this;
	            var transitionEvent = whichAnimationEvent();
	            transitionEvent && $('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0].addEventListener(transitionEvent, function () {
	              $($('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0]).css('opacity', '1').removeClass(parms.shuyeOut.animationName);
	              $('.page_' + parms.pageNow + ' .' + parms.shuyeOut.classStr)[0].removeEventListener(transitionEvent, arguments.callee, false); //销毁事件
	              viewport.style.webkitTransition = '0.3s ease -webkit-transform';
	              translate = direction === 'top' ? parms.currentPosition - pageHeight : parms.currentPosition + pageHeight;
	              parms.pageNow = Math.round(Math.abs(translate) / pageHeight) + 1;
	              $this.transform.call(viewport, translate);
	              mangerAnimation();
	            });
	          } else {
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	;
	(function (win, lib) {
	  var doc = win.document;
	  var docEl = doc.documentElement;
	  var metaEl = doc.querySelector('meta[name="viewport"]');
	  var flexibleEl = doc.querySelector('meta[name="flexible"]');
	  var dpr = 0;
	  var scale = 0;
	  var tid;
	  var flexible = lib.flexible || (lib.flexible = {});
	
	  if (metaEl) {
	    var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
	    if (match) {
	      scale = parseFloat(match[1]);
	      dpr = parseInt(1 / scale);
	    }
	  } else if (flexibleEl) {
	    var content = flexibleEl.getAttribute('content');
	    if (content) {
	      var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
	      var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
	      if (initialDpr) {
	        dpr = parseFloat(initialDpr[1]);
	        scale = parseFloat((1 / dpr).toFixed(2));
	      }
	      if (maximumDpr) {
	        dpr = parseFloat(maximumDpr[1]);
	        scale = parseFloat((1 / dpr).toFixed(2));
	      }
	    }
	  }
	
	  if (!dpr && !scale) {
	    var isAndroid = win.navigator.appVersion.match(/android/gi);
	    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
	    var devicePixelRatio = win.devicePixelRatio;
	    if (isIPhone) {
	      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
	      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
	        dpr = 3;
	      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
	        dpr = 2;
	      } else {
	        dpr = 1;
	      }
	    } else {
	      // 其他设备下，仍旧使用1倍的方案
	      dpr = 1;
	    }
	    scale = 1 / dpr;
	  }
	
	  docEl.setAttribute('data-dpr', dpr);
	  if (!metaEl) {
	    metaEl = doc.createElement('meta');
	    metaEl.setAttribute('name', 'viewport');
	    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	    if (docEl.firstElementChild) {
	      docEl.firstElementChild.appendChild(metaEl);
	    } else {
	      var wrap = doc.createElement('div');
	      wrap.appendChild(metaEl);
	      doc.write(wrap.innerHTML);
	    }
	  }
	
	  function refreshRem() {
	    var width = docEl.getBoundingClientRect().width;
	    // 适配平板
	    if (width / dpr > 540) {
	      width = 540 * dpr;
	    }
	    var rem = width / 10;
	    docEl.style.fontSize = rem + 'px';
	    flexible.rem = win.rem = rem;
	  }
	
	  win.addEventListener('resize', function () {
	    clearTimeout(tid);
	    tid = setTimeout(refreshRem, 300);
	  }, false);
	  win.addEventListener('pageshow', function (e) {
	    if (e.persisted) {
	      clearTimeout(tid);
	      tid = setTimeout(refreshRem, 300);
	    }
	  }, false);
	
	  if (doc.readyState === 'complete') {
	    doc.body.style.fontSize = 12 * dpr + 'px';
	  } else {
	    doc.addEventListener('DOMContentLoaded', function (e) {
	      doc.body.style.fontSize = 12 * dpr + 'px';
	    }, false);
	  }
	
	  refreshRem();
	
	  flexible.dpr = win.dpr = dpr;
	  flexible.refreshRem = refreshRem;
	  flexible.rem2px = function (d) {
	    var val = parseFloat(d) * this.rem;
	    if (typeof d === 'string' && d.match(/rem$/)) {
	      val += 'px';
	    }
	    return val;
	  };
	  flexible.px2rem = function (d) {
	    var val = parseFloat(d) / this.rem;
	    if (typeof d === 'string' && d.match(/px$/)) {
	      val += 'rem';
	    }
	    return val;
	  };
	})(window, window['lib'] || (window['lib'] = {}));

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map