$(function () {

  var parms = {
    page1: [
      {
        'classStr': 'title1',
        'time': '0.3s'
      },
      {
        'classStr': 'title2',
        'time': '2s'
      },
      {
        'classStr': 'top-left-line',
        'time': '0.5s'
      },
      {
        'classStr': 'left-line',
        'time': '1s'
      },
      {
        'classStr': 'bottom-left-line',
        'time': '0.8s'
      },
      {
        'classStr': 'bottom--right-line',
        'addClassStr': 'right-line',
        'time': '1s'
      },
      {
        'classStr': 'right-line',
        'time': '2s'
      },
      {
        'classStr': 'top-right-line',
        'time': '0.8s'
      },
      {
        'classStr': 'title-en',
        'time': '1s'
      }
    ]
  };


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


  function test (el, nextel) {

    var transitionEvent = whichTransitionEvent();
    transitionEvent && $("." + el.classStr)[0].addEventListener(transitionEvent, function () {
      $("." + nextel.classStr).css('transition-duration', nextel.time).addClass(nextel.classStr + '-transition');
      $("." + el.classStr)[0].removeEventListener(transitionEvent, arguments.callee, false);//销毁事件
    });
  }


  addEvent();

  function addEvent () {
    $("body").on("click", '.music-oper', function (e) {
      if ($(this).hasClass('suspend')) {
        $(this).removeClass("suspend")
      } else {
        $(this).addClass("suspend")
      }
    })
  }

  addTransitionClass();

  function addTransitionClass () {
    $("." + parms.page1[0].classStr).css('transition-duration', parms.page1[0].time).addClass(parms.page1[0].classStr + '-transition');
    for (var i = 0; i < parms.page1.length - 1; i++) {
      test(parms.page1[i], parms.page1[i + 1]);
    }

  }


})