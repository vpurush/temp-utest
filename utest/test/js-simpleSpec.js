describe('calculator', function(){
    var calc;
    beforeEach(function(){
        calc = new window.calculator();
    });
    describe('sum method', function(){
        it("should add positive numbers", function(){
            var result = calc.sum(1,2);
            expect(result).toEqual(3);
        });
        it("should add negative numbers", function(){
            var result = calc.sum(-1,2);
            expect(result).toEqual(1);
        });
    });
});
