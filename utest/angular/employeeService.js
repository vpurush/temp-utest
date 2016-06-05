angular.module("ems")
        .service("employeeService", ['$resource', function($resource){


            this.getEmployee = function(id){
                var employeeResource = $resource('/employee/:id')
                return employeeResource.get({id: id}).$promise.then(function(response){
                    console.log("response", response);
                    return {
                        employeeName : response.eName,
                        employeeAge: response.eAge
                    }
                });
            }

        }]);
