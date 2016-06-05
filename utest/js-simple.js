(function(){



  var calculator = function(){

  };
  calculator.prototype.sum = function(a,b){
    return a+b;
  }

  window.calculator = new calculator();
  //window.calculator = calculator();




})();
