function getClosure() {
    var text = 'variable 1';
    return function() {
      return text;
    };
  }
  
  var closure = getClosure();
  console.log(closure()); // 'variable 1'