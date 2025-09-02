// === scripts.js ===
document.addEventListener('DOMContentLoaded', function () {
  // Typewriter
  var app = document.getElementById('app');
  if (app && typeof Typewriter !== 'undefined') {
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 50,
      deleteSpeed: 5
    });

    typewriter
      .typeString('hey there!')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('welcome to my website !!')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('my name is Shivangi')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('I am a current Data Science student at SJSU')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('I love being creative and innovative')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('scroll to see some of my paintings')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('I love trying new food')
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(500)
      .typeString('thanks for visiting :)')
      .pauseFor(1000)
      .deleteAll()
      .start();
  }

  
  function scrollFunction() {
    var nav = document.getElementById('nav');
    if (!nav) return; // nav removed
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      nav.style.top = '0';
    } else {
      nav.style.top = '-70px';
    }
  }
  window.addEventListener('scroll', scrollFunction, { passive: true });
  scrollFunction();

  
  function filterSelection(c) {
    var items = document.getElementsByClassName('each-project');
    if (!items || !items.length) return;
    if (c === 'all') c = '';
    for (var i = 0; i < items.length; i++) {
      w3RemoveClass(items[i], 'show');
      if (items[i].className.indexOf(c) > -1) w3AddClass(items[i], 'show');
    }
  }

  function w3AddClass(element, name) {
    var arr1 = element.className.split(' ');
    var arr2 = name.split(' ');
    for (var i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) element.className += ' ' + arr2[i];
    }
  }

  function w3RemoveClass(element, name) {
    var arr1 = element.className.split(' ');
    var arr2 = name.split(' ');
    for (var i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(' ');
  }

  var btnContainer = document.getElementById('button-section');
  if (btnContainer) {
    var btns = btnContainer.getElementsByClassName('filter-button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName('active');
        if (current[0]) current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
    filterSelection('all');
  }
});
