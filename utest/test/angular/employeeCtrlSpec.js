describe("employeeService", function(){
    var employeeService, $httpBackend;

    beforeEach(function(){
        module("ems");

        inject(function(_$httpBackend_, _employeeService_, $q){
            employeeService = _employeeService_;
            $httpBackend = _$httpBackend_;

            $httpBackend.expect("GET", '/employee/100')
                        .respond({
                            eName: 'Jane',
                            eAge: 45
                        });
        })
    });

    it("should exist", function(){
        expect(employeeService).toBeDefined();
    });

    describe("getEmployee", function(){
        it("should map the properties properly", function(done){
            var promise = employeeService.getEmployee(100).then(function(emp){
                expect(emp.employeeName).toEqual("Jane");
                done();
            });

            $httpBackend.flush();
        });
    });
})
