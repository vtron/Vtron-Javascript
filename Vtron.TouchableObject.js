if(!Vtron){ var Vtron = {}; }

(function (Vtron) {
	//Generic Class to Extend and record touches on objects.
	Vtron.TouchableObject = new Class({
		Extends: Vtron.Sprite,
		
		initialize:function(el) {
			var self = this;
			
			this.initTouch	= {x:0, y:0};
			this.prevTouch	= Object.clone(this.initTouch);
			this.curTouch 	= Object.clone(this.initTouch);
			
			this.bTouching		= false;
			this.bTapPossible	= false;
			
			this.parent(el);
			
			el.addEvent('touchstart',function(e){self.start(e)});
			el.addEvent('touchmove',function(e){self.move(e)});
			el.addEvent('touchend',function(e){self.end(e)});
		},
		
		
		
		//-------------------------------------------------
		setCurTouch: function(x,y) {
			this.prevTouch = Object.clone(this.curTouch);
				
			this.curTouch.x = x;
			this.curTouch.y = y;
		},
		
		
		
		//-------------------------------------------------
		setPrevTouch: function(x,y) {
			this.prevTouch.x = x;
			this.prevTouch.y = y;
		},
		
		
		
		//-------------------------------------------------
		start: function(e) {
			this.bTouching = true;
			this.bTapPossible = true;
			if(e.touches.length == 1) {
				this.setCurTouch(e.touches[0].screenX,e.touches[0].screenY);
				this.initTouch = Object.clone(this.curTouch);
			}
			
		},
		
		
		
		//-------------------------------------------------
		move: function(e) {
			if(e.changedTouches.length == 1) {
				this.setCurTouch(e.changedTouches[0].screenX,e.changedTouches[0].screenY);
				
				if(Math.abs(this.curTouch.x - this.initTouch.x) > 5 || Math.abs(this.curTouch.y - this.initTouch.y) > 5) {
					this.bTapPossible = false;
				}
			}
		},
		
		
		
		//-------------------------------------------------
		end: function(e) {
			if(e.touches.length == 0) this.bTouching = false;
		},
	
	});
})(Vtron);