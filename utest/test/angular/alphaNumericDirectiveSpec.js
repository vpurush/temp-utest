describe('alpha numeric directive', function(){
    var elm, scope, $compile, compiledElement;

    beforeEach(function(){
        module("ems");

        inject(function(_$rootScope_, _$compile_){
            $compile = _$compile_;
            scope = _$rootScope_.$new();
        });

        elm = $('<input type="text" alpha-numeric ng-model="textBoxValue" />')
        compiledElement = $compile(elm)(scope);
    })

    it("should allow alphabets", function(){
        var e = $.Event('keypress');
        e.which = 65; // Character 'A'
        $(compiledElement).trigger(e);
        expect(e.isDefaultPrevented()).toEqual(false);
    });

    it("should not allow special characters", function(){
        var e = $.Event('keypress');
        e.which = 43; // Character '+'
        $(compiledElement).trigger(e);
        expect(e.isDefaultPrevented()).toEqual(true);
    });
})
