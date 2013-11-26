describe("John Resig Simple Inheritance", function () {
    var Person = Object.extend({
	    init: function(isDancing) {
            this.dancing = isDancing;
	    },
	    dance: function() {
            return this.dancing;
	    }
	});

	
	var Ninja = Person.extend({
	    init: function() {
            this.parent( false );
	    },
		dance: function() {
            // Call the inherited version of dance()
            return this.parent();
	    },
		swingSword: function() {
            return true;
	   }
	});

    var p = new Person(true);
    var n = new Ninja();

    it("p can dance", function () {
        expect(p.dance()).toEqual(true);
    });
    
    it("n cannot dance", function () {
        expect(n.dance()).toEqual(false);
    });
    
    it("n can swing a sword", function () {
        expect(n.swingSword()).toEqual(true);
    });
    
     it("n & p inheritance tree", function () {
        expect(p instanceof Person && p instanceof Object && n instanceof Ninja && n instanceof Person && n instanceof Object).toEqual(true);
    });

 
});