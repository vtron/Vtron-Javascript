if(!Vtron){ var Vtron = {}; }

(function (Vtron) {
	Vtron.AnimatedObject = new Class({
		//-------------------------------------------------
		initialize: function(element,x,y) {
			this.element = element;
			this.element.setStyles({
				position:'absolute',
				left:'0px',
				top:'0px'
			});
			
			
			this.pos = {
				x:0,
				y:0
			}
			
			this.scale = 1.0;
			this.rotation = 0;
			
			this.interval = 0;
		},
		
		
		
		//-------------------------------------------------
		update: function(bAnimate,time) {
			var transitionTime = 0.5;
			if(time) transitionTime = time;
			
			//Set Transition
			if(bAnimate) {
				this.element.setStyle('-webkit-transition','all ' + transitionTime + 's ease-out');
			} else {
				this.element.setStyle('-webkit-transition',	'-webkit-transform 0.0s');
			}
			
			//Set Position
			var translation	= 'translate3d(' + this.pos.x + 'px,'  + this.pos.y + 'px,0px)';
			
			
			//Set Rotation
			var rotation = 'rotate3d(0,0,1,' + this.rotation + 'deg)';
			
			//Set Scale
			var scale	= 'scale(' + this.scale + ')';
			
			this.element.setStyle('-webkit-transform',translation + ' ' + rotation + ' ' + scale);
		},
		
		
		//-------------------------------------------------
		setPos: function(x,y,bAnimate, time) {
			this.pos.x = x;
			this.pos.y = y;
			
			if(time) {
				this.update(bAnimate, time);
			} else {
				this.update(bAnimate);
			}
		}
	})
})(Vtron);