if(!Vtron){ var Vtron = {}; }

(function (Vtron) {
	Vtron.Sprite = new Class({
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
			
			this.setPos(x,y); //Enable hardware accelleration
			
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
		setPos: function(newX,newY,bAnimate, time) {
			this.set({ pos:{x:newX,y:newY} },bAnimate,time);
		},
		
		//-------------------------------------------------
		setScale: function(newScale, bAnimate, time) {
			this.set({ scale:newScale },bAnimate,time);
		},
		
		
		//-------------------------------------------------
		setRotation:function(newRotation, bAnimate, time) {
			this.set({ rotation:newRotation },bAnimate,time);
		},
		
		
		//-------------------------------------------------
		set: function(options, bAnimate, time) {
			if(options.pos && (options.pos.x != this.pos.x || options.pos.y != this.pos.y)) {
				this.pos.x = options.pos.x;
				this.pos.y = options.pos.y;
			};
			
			if(options.scale && options.scale != this.scale) {
				this.scale = options.scale;
			}
			
			if(options.rotation && options.rotation != this.scale) {
				this.rotation = options.rotatation;
			}
			
			this.update(bAnimate, time);
		}
		
		
		
	})
})(Vtron);