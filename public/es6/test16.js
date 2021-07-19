var box = document.querySelector('.box');
var toggleBtn = document.querySelector('.toggle');

var toggle = (function () {
  var isShow = false;

  return function () {
    box.style.display = isShow ? 'block' : 'none';
    isShow = !isShow;
  };
})();

toggleBtn.onclick = toggle;