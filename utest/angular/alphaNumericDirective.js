angular.module("ems")
        .directive("alphaNumeric", [function(){
            return {
                restrict: 'A',
                link: function($scope, element, attrs) {

                    $(element).on('keypress', function(e){
                        console.log("key press", e, e.which);

                        if(e.which >=65 && e.which <=90){
                            //upper case
                        }else if(e.which >= 97 && e.which <= 122){
                            //lower case
                        }else if(e.which >= 48 && e.which <= 57){
                            //numbers
                        }else{
                            e.preventDefault();
                        }
                    });

                }
            }

        }]);
