if(!Vtron){ var Vtron = {}; }


(function (Vtron) {
	Vtron.ObjectVR = new Class({
		initialize: function(element, images) {
			this.element = element;
			
			this.viewer = new Element('img');
			
			this.curImage		= 0;
			this.images			= images;
			this.totalImages	= images.length;
			
			this.rotateSpeed = 1;
			
			this.loadImages();
			
			this.prevTouchX = 0;
		},
		
		//-------------------------------------------------
		addListeners: function() {
			//Add Event Listeners
			this.element.addEvent('touchstart',	this.touchStart.bind(this));
			this.element.addEvent('touchmove',	this.touchMove.bind(this));
			this.element.addEvent('touchend',	this.touchEnd.bind(this));
		},
		
		
		//-------------------------------------------------
		loadImages: function() {
			var error;
			
			var myImages = Asset.images(this.images,{
				onComplete: function(){
					this.addListeners();
					
					this.element.empty();
					this.viewer.inject(this.element);
					
					this.setImage();
			    }.bind(this),
			    
			    onError: function() {
			    	error = true;
			    }
			});
		},
		
		
		//-------------------------------------------------
		setImage: function() {
			this.viewer.set('src', this.images[this.curImage]);
		},
		
		//-------------------------------------------------
		rotate: function() {
			this.curImage += this.rotateSpeed;
			
			this.setImage();
		},
		
		
		//-------------------------------------------------
		touchStart: function(e) {
			if(e.touches.length==1) {
				this.prevTouchX = e.touches[0].clientX;
			}
		},
		
		
		//-------------------------------------------------
		touchMove: function(e) {
			if(e.touches.length==1) {
				this.curImage += this.prevTouchX - e.changedTouches[0].clientX;
				
				if(this.curImage < 0) this.curImage = this.totalImages-1;
				else if(this.curImage >= this.totalImages) this.curImage = 0;
				
				this.setImage();
				
				this.prevTouchX = e.changedTouches[0].clientX;
					
				/*if(this.changed) {
					if(this.curTouch.x - this.initTouch.x > 0) this.curImage--;
					else this.curImage++;
					
					if(this.curImage < 0) this.curImage = this.totalImages-1;
					else if(this.curImage >= this.totalImages) this.curImage = 0;
					
					this.viewer.set('src', this.images[this.curImage]);
				}*/
			}
		},
		
		
		//-------------------------------------------------
		touchEnd: function(e) {
			if(e.touches.length == 1) {
			}
		}
	})
})(Vtron);