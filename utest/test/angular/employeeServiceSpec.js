describe("employeeCtrl", function(){
    var employeeCtrl, scope, employeeServiceMock;

    beforeEach(function(){
        module("ems");

        inject(function($controller, $rootScope, $q){
            jasmine.getJSONFixtures().fixturesPath = '/base/test/angular/JSONFixtures/';

            var data = getJSONFixture('employee100.json')
            employeeServiceMock = {
                getEmployee : jasmine.createSpy('getEmployee').and.returnValue($q.when(data))
            }

            // employeeServiceMock = {
            //     getEmployee : jasmine.createSpy('getEmployee').and.returnValue($q.when({
            //         employeeName: "John",
            //         employeeAge: 40
            //     }))
            // }

            scope = $rootScope.$new();
            employeeCtrl = $controller("employeeCtrl", {'$scope': scope, 'employeeService': employeeServiceMock });
        })
    });

    it("should exist", function(){
        expect(employeeCtrl).toBeDefined();
    });

    it("should initialize employeeName", function(){
        expect(scope.employeeName).toEqual("emp name");
    });

    it("should initialize employeeAge", function(){
        scope.$digest();
        expect(scope.employeeAge).toEqual(40);
    });
})
