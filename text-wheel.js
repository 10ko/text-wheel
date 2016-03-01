(function() {
  window.onload = function() {
    var element = document.getElementById('text-container');

    var textArr = [
    'text changed 1',
    'text changed 2',
    'text changed 3',
    'text changed 4'
    ];

    var run = false;
    var counter = 0;

    setInterval(function() {
      if (run) {
        element.innerHTML = textArr[counter];
        counter < textArr.length - 1 ? counter++ : counter = 0;
      }
    }, 100);

    element.addEventListener("mouseover", function() {
      run = true;

    }, false);

    element.addEventListener("mouseleave", function() {
      run = false;
      element.innerHTML = 'text';
    }, false);
  }
})();


