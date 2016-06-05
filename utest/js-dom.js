(function(){

    var utils = function(){

    }

    utils.prototype.makeVisible = function(elm){
        $(elm).removeClass("hide");
    }

    utils.prototype.makeInvisible = function(elm){
        $(elm).addClass("hide");
    }

    window.utils = new utils();





})();
