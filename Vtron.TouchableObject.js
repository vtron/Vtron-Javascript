if(!Vtron){ var Vtron = {}; }

(function (Vtron) {
	//Generic Class to Extend and record touches on objects.
	Vtron.TouchableObject = new Class({
		Extends: Vtron.AnimatedObject,
		
		initialize:function(el) {
			var self = this;
			
			this.initTouch	= {x:0, y:0};
			this.prevTouch	= Object.clone(this.initTouch);
			this.curTouch 	= Object.clone(this.initTouch);
			
			this.bTouching		= false;
			this.bTapPossible	= false;
			
			el.addEvent('touchstart',function(e){self.start(e)});
			el.addEvent('touchmove',function(e){self.move(e)});
			el.addEvent('touchend',function(e){self.end(e)});
		},
		
		
		
		//-------------------------------------------------
		setcurTouch: function(x,y) {
			this.prevTouch = Object.clone(this.curTouch);
				
			this.curTouch.x = x;
			this.curTouch.y = y;
		},
		
		
		
		//-------------------------------------------------
		setPrevPos: function(x,y) {
			this.prevTouch.x = x;
			this.prevTouch.y = y;
		},
		
		
		
		//-------------------------------------------------
		start: function(e) {
			this.bTouching = true;
			this.bTapPossible = true;
			if(e.touches.length == 1) {
				this.setcurTouch(e.touches[0].screenX,e.touches[0].screenY);
				this.initTouch = Object.clone(this.curTouch);
			}
			
			
		},
		
		
		
		//-------------------------------------------------
		move: function(e) {
			if(e.changedTouches.length == 1) {
				this.setcurTouch(e.changedTouches[0].screenX,e.changedTouches[0].screenY);
			}
		},
		
		
		
		//-------------------------------------------------
		end: function(e) {
			if(e.touches.length == 0) this.bTouching = false;
		},
	
	});
})(Vtron);