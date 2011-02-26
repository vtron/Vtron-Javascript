if(!Vtron){ var Vtron = {}; }

(function (Vtron) {
	if(!Vtron.Math){ Vtron.Math = {}; }
	
	//-----------------------------------------------------
	Vtron.Math.map = function(value, istart, istop, ostart, ostop, bclamp) {
		return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
	}
	
	//-----------------------------------------------------
	Vtron.Math.clamp = function(value, lowVal,highVal) {
		value = Math.max(value,lowVal);
		value = Math.min(value,highVal);
		return value;
	}
	
	
	//-----------------------------------------------------
	Vtron.Math.dist = function(x1,y1,x2,y2) {
		return Math.sqrt(Math.pow((x2-x1),2) + Math.pow(y2-y1,2));
	}
	
	
	//-----------------------------------------------------
	Vtron.Math.getAngle = function(x1, y1, x2, y2) {
		return Math.atan2(y2 - y1, x2 - x1);
	}
	
	
	//-----------------------------------------------------
	Vtron.Math.radToDeg = function(radians) {
		return (radians*180)/Math.PI;
	}
	
	//-----------------------------------------------------
	Vtron.Math.withinRect = function(x,y, rectX, rectY, rectW, rectH) {
		if(x > rectX && x < rectX + rectWidth) {
			if(y > rectY && y < rectY + rectHeight) {
				return true;
			}
		}
		
		return false;
	}
})(Vtron);





