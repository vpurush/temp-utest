angular.module("ems")
        .controller("employeeCtrl", ["$scope", "employeeService", function($scope, employeeService){
            $scope.employeeName = "emp name";

            employeeService.getEmployee(100).then(function(data){
                $scope.employeeName = data.emplooyeeName;
                $scope.employeeAge = data.employeeAge;
            });
        }])
