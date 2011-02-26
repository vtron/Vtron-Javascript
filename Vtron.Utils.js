if(!Vtron){ var Vtron = {}; }

(function (Vtron){
	if(!Vtron.Utils){ Vtron.Utils = {}; }
	//-----------------------------------------------------
	//Variable Dump, similar to PHP
	Vtron.Utils.dump = function(obj) {
	    var out = '';
	    for (var i in obj) {
	        out += i + ": " + obj[i] + "\n";
	    }
	
	   console.log(out);
	
	    // or, if you wanted to avoid alerts...
		/*
	    var pre = document.createElement('pre');
	    pre.innerHTML = out;
	    document.body.appendChild(pre)
	    */
	}
	
	
	
	//-----------------------------------------------------
	//Browser Detection
	//from http://www.quirksmode.org/js/detect.html
	Vtron.Utils.browserDetector = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
		},
		
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString = data[i].string;
				var dataProp = data[i].prop;
				this.versionSearchString = data[i].versionSearch || data[i].identity;
				if (dataString) {
					if (dataString.indexOf(data[i].subString) != -1)
						return data[i].identity;
				}
				else if (dataProp)
					return data[i].identity;
			}
		},
		
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1) return;
			return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
		},
		
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome"
			},
			{ 	string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb"
			},
			{
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari",
				versionSearch: "Version"
			},
			{
				prop: window.opera,
				identity: "Opera"
			},
			{
				string: navigator.vendor,
				subString: "iCab",
				identity: "iCab"
			},
			{
				string: navigator.vendor,
				subString: "KDE",
				identity: "Konqueror"
			},
			{
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox"
			},
			{
				string: navigator.vendor,
				subString: "Camino",
				identity: "Camino"
			},
			{		// for newer Netscapes (6+)
				string: navigator.userAgent,
				subString: "Netscape",
				identity: "Netscape"
			},
			{
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer",
				versionSearch: "MSIE"
			},
			{
				string: navigator.userAgent,
				subString: "Gecko",
				identity: "Mozilla",
				versionSearch: "rv"
			},
			{ 		// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla"
			}
		],
		
		dataOS : [
			{
				string: navigator.platform,
				subString: "Win",
				identity: "Windows"
			},
			{
				string: navigator.platform,
				subString: "Mac",
				identity: "Mac"
			},
			{
				   string: navigator.userAgent,
				   subString: "iPhone",
				   identity: "iPhone/iPod"
		    },
		    
		    {
				   string: navigator.userAgent,
				   subString: "iPad",
				   identity: "iPad"
		    },
			{
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]
	
	};
	
	BrowserDetect.init();

	//-----------------------------------------------------
	Vtron.utils.disableEnableLinks = fucntion(element,bDisable) {
		links = element.getElementsByTagName('a');
		
		for(i=0;i<links.length;i++){
			links[i].disabled = bDisable;
			
			//link with onclick
			if(links[i].onclick && bDisable){  
				links[i].onclick = new Function("return false;" + links[i].onclick.toString().getFuncBody());
			} 
			
			//link without onclick
			else if(bDisable){  
				links[i].onclick = function(){return false;}
			}
			
			//remove return false with link without onclick
			else if(!bDisable && links[i].onclick.toString().indexOf("function(){return false;}") != -1){            
				links[i].onclick = null;
			}
			//remove return false link with onclick
			else if(!bDisable && links[i].onclick.toString().indexOf("return false;") != -1){  
				strClick = links[i].onclick.toString().getFuncBody().replace("return false;","")
				links[i].onclick = new Function(strClick);
			}
		}
	}
	
})(Vtron);