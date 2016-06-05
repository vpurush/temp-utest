describe("utils", function(){
    var box;
    var messageDiv;
    beforeEach(function(){
        box = sandbox();
        messageDiv = $("<div class='message'>This is a message</div>")
        box.append(messageDiv);
    });

    describe("makeVisible", function(){

        it("should remove class hide", function(){
            utils.makeVisible(messageDiv);
            expect(messageDiv).not.toHaveClass('hide');
        });




    });

    describe("makeInvisible", function(){

        it("should add class hide", function(){
            utils.makeInvisible(messageDiv);
            expect(messageDiv).toHaveClass('hide');
        });




    });
})
