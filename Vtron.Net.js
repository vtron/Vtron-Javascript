if(!Vtron){ var Vtron = {}; }

(function (Vtron){
	if(!Vtron.Net){ Vtron.Net = {}; }
	//-----------------------------------------------------
	//GET Vars using regex, similar to PHP
	//http://www.onlineaspect.com/2009/06/10/reading-get-variables-with-javascript/
	Vtron.Net.GET = function(q,s) {
	    s = (s) ? s : window.location.search;
	    var re = new RegExp('&amp;'+q+'=([^&]*)','i');
	    return (s=s.replace(/^\?/,'&amp;').match(re)) ?s=s[1] :s='';
	}
})(Vtron);