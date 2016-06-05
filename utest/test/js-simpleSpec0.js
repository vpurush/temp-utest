describe('calculator', function(){
    describe('sum method', function(){
        it("should add positive numbers", function(){
            var result = window.calculator.sum(1,2);
            expect(result).toEqual(3);
        });
        it("should add negative numbers", function(){
            var result = window.calculator.sum(-1,2);
            expect(result).toEqual(1);
        });
    });
});
