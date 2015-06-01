function Point( x, y ) {
	
	this.x = x;
	this.y = y;
	this.px = x;
	this.py = y;
	
	this.pinned = false;
	this.pin_x = null;
	this.pin_y = null;
	
	this.constraints = [];

}

Point.prototype.draw = function () {
	
	
	this.constraints.forEach( function (c) {

		c.draw();

	});

	ctx.beginPath();

	var r = 2;
	
	if (this.pinned) {

		ctx.fillStyle = "#212121";
		r = 5;
		
	} else {

		ctx.fillStyle = 'red';
	}
	
	ctx.fill();

	
	return this;

};
Point.prototype.pin = function () {

	this.pinned = true;
	this.pin_x = this.x;
	this.pin_y = this.y;

	return this;

};
Point.prototype.unpin = function () {

	this.pinned = false;

	return this;

};
Point.prototype.attach = function ( point ) {

	this.constraints.push(
		new Constraint( this, point )
	);
	
};

Point.prototype.resolve_constraints = function () {
	
	this.pinned && (this.x = this.pin_x);
	this.pinned && (this.y = this.pin_y);
	
	var i = this.constraints.forEach( function ( c ) {

		c.resolve();
		
	});

};